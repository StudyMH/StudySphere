/**
 * ============================================================================
 * StudySphere AI Engine — Central Gemini REST API Client
 * File: ai-engine/core/gemini-client.js
 * Description: Dedicated central client-side dispatcher strictly using 'gemini-3.5-flash-lite'.
 *              Centralized API Key manager, Network state sensor, and Zero-Token
 *              Exponential Backoff Retry Engine.
 * ============================================================================
 */

export class GeminiClient {
  // Strictly single dedicated model across StudySphere
  static ACTIVE_MODEL = 'gemini-3.5-flash-lite';

  static STORAGE_KEYS = [
    'qq_gemini_key',
    'gemini_api_key',
    'mpsc_api_key'
  ];

  static CONNECTED_MODEL_KEY = 'qq_verified_model';

  /**
   * 1. GET CURRENT ACTIVE API KEY (Single Source of Truth)
   */
  static getApiKey() {
    try {
      for (const k of this.STORAGE_KEYS) {
        const val = localStorage.getItem(k);
        if (val && val.trim().length >= 15) {
          return val.trim();
        }
      }
      return "";
    } catch (e) {
      console.warn("[GeminiClient] Unable to access localStorage:", e);
      return "";
    }
  }

  /**
   * 2. SAVE KEY UNIFORMLY ACROSS ALL SYSTEM REGISTRIES
   */
  static saveApiKey(candidateKey) {
    const clean = (candidateKey || "").trim();
    if (clean.length >= 15) {
      this.STORAGE_KEYS.forEach(k => localStorage.setItem(k, clean));
      localStorage.setItem(this.CONNECTED_MODEL_KEY, this.ACTIVE_MODEL);
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('qq-key-updated', { detail: { key: clean } }));
        if (typeof window.refreshHeaderAiStatus === 'function') window.refreshHeaderAiStatus();
      }
      return true;
    }
    return false;
  }

  /**
   * 3. REMOVE KEY ACROSS ALL SYSTEM REGISTRIES
   */
  static removeApiKey() {
    this.STORAGE_KEYS.forEach(k => localStorage.removeItem(k));
    localStorage.removeItem(this.CONNECTED_MODEL_KEY);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('qq-key-removed'));
      if (typeof window.refreshHeaderAiStatus === 'function') window.refreshHeaderAiStatus();
    }
  }

  /**
   * 4. ZERO-TOKEN MODEL VALIDATION & CONNECTION HANDSHAKE
   * @param {string} keyToTest - Candidate Gemini Key
   * @param {number} timeoutMs - Timeout in milliseconds (default: 9000ms)
   * @returns {Promise<{success: boolean, model: string|null, latencyMs?: number, error: string}>}
   */
  static async pingVerifyKey(keyToTest, timeoutMs = 9000) {
    const candidateKey = (keyToTest || '').trim();
    if (!candidateKey) {
      return { success: false, model: null, error: "कृपया वैध आणि पूर्ण Gemini API Key प्रविष्ट करा." };
    }
    if (candidateKey.length < 15) {
      return { success: false, model: null, error: "अवैध API Key स्वरूप (खूप लहान आहे)." };
    }

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${this.ACTIVE_MODEL}:generateContent?key=${encodeURIComponent(candidateKey)}`;
    const body = {
      contents: [{ parts: [{ text: "ping" }] }],
      generationConfig: { maxOutputTokens: 1, temperature: 0.1 }
    };

    let failureReason = "";
    const maxAttempts = 3;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      const controller = new AbortController();
      const timeoutTimer = setTimeout(() => controller.abort(), timeoutMs);
      const startTime = performance.now();

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
          signal: controller.signal
        });

        clearTimeout(timeoutTimer);
        const latencyMs = Math.round(performance.now() - startTime);

        if (response.ok) {
          this.saveApiKey(candidateKey);
          return { success: true, model: this.ACTIVE_MODEL, latencyMs: latencyMs, error: "" };
        }

        const errData = await response.json().catch(() => ({}));
        failureReason = errData?.error?.message || `HTTP ${response.status}`;

        // Fatal key error: do not retry
        if (response.status === 400 || response.status === 403) {
          return {
            success: false,
            model: null,
            error: `अवैध API Key (${failureReason}). कृपया Google AI Studio वरून योग्य की कॉपी करा.`
          };
        }

        // Retry on temporary server load (503 / 429)
        if (response.status === 503 || response.status === 429) {
          await new Promise(r => setTimeout(r, 700 * attempt));
          continue;
        }

        break;
      } catch (err) {
        clearTimeout(timeoutTimer);
        failureReason = err.name === 'AbortError'
          ? "वेळ संपली (Timeout 9s). कृपया इंटरनेट वेग तपासा."
          : (err.message || "नेटवर्क संपर्क तुटला.");
        await new Promise(r => setTimeout(r, 500));
      }
    }

    return {
      success: false,
      model: null,
      error: `कनेक्शन अयशस्वी झाले: ${failureReason || "कृपया इंटरनेट व API की तपासा."}`
    };
  }

  /**
   * 5. DISPATCH CONTENT GENERATION STRICTLY VIA gemini-3.5-flash-lite
   * Includes exponential backoff retry for HTTP 503 / 429 errors and real-time header sensing.
   */
  static async generateContent({
    prompt,
    systemInstruction = "",
    isJson = false,
    temperature = 0.3,
    maxOutputTokens = 3800
  }, overrideKey = "") {
    const key = (overrideKey || this.getApiKey()).trim();
    if (!key || key.length < 15) {
      throw new Error("[GeminiClient] वैध Gemini API Key आवश्यक आहे. कृपया की जोडा.");
    }

    // Notify Header HUD of working state
    if (typeof window !== 'undefined' && typeof window.updateHeaderAiStatus === 'function') {
      window.updateHeaderAiStatus('working', 'AI Generating...');
    }

    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: temperature,
        maxOutputTokens: maxOutputTokens
      }
    };

    if (isJson) {
      payload.generationConfig.responseMimeType = "application/json";
    }

    if (systemInstruction) {
      payload.systemInstruction = {
        parts: [{ text: systemInstruction }]
      };
    }

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${this.ACTIVE_MODEL}:generateContent?key=${encodeURIComponent(key)}`;
    let lastError = null;
    const maxRetries = 3;

    try {
      for (let attempt = 1; attempt <= maxRetries; attempt++) {
        const controller = new AbortController();
        const timeoutTimer = setTimeout(() => controller.abort(), 20000); // 20s budget

        try {
          const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            signal: controller.signal
          });

          clearTimeout(timeoutTimer);

          if (response.ok) {
            const data = await response.json();
            const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;

            if (!candidateText || candidateText.trim().length === 0) {
              throw new Error("AI कडून रिक्त उत्तर प्राप्त झाले.");
            }

            localStorage.setItem(this.CONNECTED_MODEL_KEY, this.ACTIVE_MODEL);
            return candidateText.trim();
          }

          // Fatal auth error
          if (response.status === 400 || response.status === 403) {
            const errBody = await response.json().catch(() => ({}));
            throw new Error(`[Gemini Auth Error] ${errBody?.error?.message || `HTTP ${response.status}`}`);
          }

          // Temporary 503 or 429: wait with exponential backoff and retry
          if (response.status === 503 || response.status === 429) {
            console.warn(`[GeminiClient] ${this.ACTIVE_MODEL} returned ${response.status}. Retrying attempt ${attempt}...`);
            lastError = new Error(`सर्व्हर लोड (HTTP ${response.status}). पुन्हा प्रयत्न करत आहे...`);
            await new Promise(r => setTimeout(r, 800 * attempt));
            continue;
          }

          const errBody = await response.json().catch(() => ({}));
          throw new Error(errBody?.error?.message || `HTTP ${response.status}`);

        } catch (err) {
          clearTimeout(timeoutTimer);
          lastError = err;

          if (err.message && err.message.includes('[Gemini Auth Error]')) {
            throw err;
          }

          await new Promise(r => setTimeout(r, 600));
        }
      }

      throw new Error(`[Gemini Generation Error] ${maxRetries} प्रयत्नांनंतर अयशस्वी: ${lastError?.message || 'नेटवर्क त्रुटी'}`);
    } finally {
      // Restore Header HUD to ready state
      if (typeof window !== 'undefined' && typeof window.updateHeaderAiStatus === 'function') {
        window.updateHeaderAiStatus('ready');
      }
    }
  }
}

if (typeof window !== 'undefined') {
  window.GeminiClient = GeminiClient;
}
export default GeminiClient;