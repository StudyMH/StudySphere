/**
 * ============================================================================
 * StudySphere — AI Key Gatekeeper & Connection Engine
 * File: ai-engine/core/gatekeeper-engine.js
 * Description: Client-side validation, secure local persistence, and health-check
 *              handshake strictly using 'gemini-3.5-flash-lite'.
 *              Strictly zero emojis, 100% FontAwesome.
 * ============================================================================
 */

export const GatekeeperEngine = (() => {
  'use strict';

  // Strictly single dedicated model across StudySphere
  const ACTIVE_MODEL = 'gemini-3.5-flash-lite';

  const STORAGE_KEYS = [
    'qq_gemini_key',
    'gemini_api_key',
    'mpsc_api_key'
  ];
  const VERIFIED_MODEL_KEY = 'qq_verified_model';

  let isVerifying = false;

  /**
   * 1. INITIALIZE ON PAGE LOAD
   */
  function init() {
    const existingKey = getKey();
    updateUIKeyPresence(Boolean(existingKey && existingKey.length >= 15));
    attachInputListeners();
  }

  /**
   * 2. RETRIEVE LOCALLY STORED KEY
   */
  function getKey() {
    try {
      for (const k of STORAGE_KEYS) {
        const val = localStorage.getItem(k);
        if (val && val.trim().length >= 15) {
          return val.trim();
        }
      }
      return "";
    } catch (e) {
      console.warn("[Gatekeeper] Unable to access localStorage:", e);
      return "";
    }
  }

  /**
   * 3. VERIFY KEY HEALTH STRICTLY VIA gemini-3.5-flash-lite
   * @param {string} candidateKey
   * @returns {Promise<{success: boolean, model?: string, latencyMs?: number, error?: string}>}
   */
  async function testConnection(candidateKey) {
    const cleanKey = (candidateKey || "").trim();
    if (!cleanKey || cleanKey.length < 15) {
      return { success: false, error: "कृपया वैध आणि पूर्ण Gemini API Key प्रविष्ट करा." };
    }

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${ACTIVE_MODEL}:generateContent?key=${encodeURIComponent(cleanKey)}`;
    const body = {
      contents: [{ parts: [{ text: "ping" }] }],
      generationConfig: { maxOutputTokens: 1, temperature: 0.1 }
    };

    let lastError = "";
    const maxAttempts = 3;

    // Retry loop for temporary 503 Service Unavailable / Rate Limit
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 9000);
      const startTime = performance.now();

      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
          signal: controller.signal
        });
        clearTimeout(timeout);

        const latencyMs = Math.round(performance.now() - startTime);

        if (res.ok) {
          return { success: true, model: ACTIVE_MODEL, latencyMs: latencyMs };
        }

        // Fatal key authorization errors - do not retry
        if (res.status === 400 || res.status === 403) {
          const errJson = await res.json().catch(() => ({}));
          const msg = errJson.error?.message || `HTTP ${res.status}`;
          return { success: false, error: `अवैध API Key (${msg}). कृपया Google AI Studio वरून योग्य की कॉपी करा.` };
        }

        // 503 or other temporary server issue - wait and retry
        if (res.status === 503 || res.status === 429) {
          console.warn(`[Gatekeeper] ${ACTIVE_MODEL} returned ${res.status}. Retrying attempt ${attempt}...`);
          lastError = `सर्व्हर लोड (HTTP ${res.status}). पुन्हा प्रयत्न करत आहे...`;
          await new Promise(r => setTimeout(r, 800 * attempt));
          continue;
        }

        const errJson = await res.json().catch(() => ({}));
        lastError = errJson.error?.message || `HTTP ${res.status}`;
      } catch (netErr) {
        clearTimeout(timeout);
        lastError = netErr.name === 'AbortError' ? "वेळ संपली (Timeout)" : "नेटवर्क संपर्क तुटला";
        await new Promise(r => setTimeout(r, 600));
      }
    }

    return { 
      success: false, 
      error: `कनेक्शन अयशस्वी झाले: ${lastError || "कृपया इंटरनेट व API की तपासा."}` 
    };
  }

  /**
   * 4. HANDLE CONNECT & VERIFY BUTTON CLICK
   */
  async function handlePrimaryAction() {
    if (isVerifying) return;

    const input = document.getElementById('inputApiKey');
    const errEl = document.getElementById('keyValidationError');
    const badgeEl = document.getElementById('verifiedModelBadge');
    const badgeText = document.getElementById('verifiedModelText');
    const btnPrimary = document.getElementById('btnPrimaryAction');
    const btnLabel = document.getElementById('btnPrimaryLabel');
    const btnIcon = document.getElementById('btnPrimaryIcon');

    const keyVal = (input?.value || "").trim();
    if (!keyVal) {
      showError("कृपया प्रथम तुमची Gemini API Key पेस्ट करा.");
      return;
    }

    isVerifying = true;
    if (errEl) errEl.classList.add('hidden');
    if (badgeEl) badgeEl.classList.add('hidden');
    if (btnPrimary) btnPrimary.disabled = true;
    if (btnLabel) btnLabel.textContent = "पडताळणी चालू आहे...";
    if (btnIcon) btnIcon.className = "fa-solid fa-spinner animate-spin text-xs";

    const result = await testConnection(keyVal);

    isVerifying = false;
    if (btnPrimary) btnPrimary.disabled = false;
    if (btnIcon) btnIcon.className = "fa-solid fa-plug text-xs";
    if (btnLabel) btnLabel.textContent = "Connect & Verify";

    if (result.success) {
      // Save across all unified storage keys
      STORAGE_KEYS.forEach(k => localStorage.setItem(k, keyVal));
      localStorage.setItem(VERIFIED_MODEL_KEY, ACTIVE_MODEL);

      if (badgeEl && badgeText) {
        badgeText.textContent = `जोडले: ${ACTIVE_MODEL} (${result.latencyMs || 0}ms)`;
        badgeEl.classList.remove('hidden');
        badgeEl.classList.add('flex');
      }

      updateUIKeyPresence(true);
      showGatekeeperToast("API Key यशस्वीरीत्या जोडली व प्रमाणित झाली!");

      // Dispatch global sync event
      window.dispatchEvent(new CustomEvent('qq-key-updated', { detail: { key: keyVal } }));

      setTimeout(() => {
        closeModal();
      }, 1000);
    } else {
      showError(result.error);
    }
  }

  /**
   * 5. HANDLE DELETE KEY CLICK
   */
  function handleDeleteKeyClick() {
    STORAGE_KEYS.forEach(k => localStorage.removeItem(k));
    localStorage.removeItem(VERIFIED_MODEL_KEY);

    const input = document.getElementById('inputApiKey');
    if (input) input.value = "";

    const badgeEl = document.getElementById('verifiedModelBadge');
    if (badgeEl) badgeEl.classList.add('hidden');

    updateUIKeyPresence(false);
    showGatekeeperToast("API Key यशस्वीरीत्या हटवली गेली.");

    // Dispatch global sync event
    window.dispatchEvent(new CustomEvent('qq-key-removed'));
  }

  /**
   * 6. UPDATE UI BASED ON KEY PRESENCE
   */
  function updateUIKeyPresence(hasKey) {
    const btnDelete = document.getElementById('btnDeleteKey');
    const closeBtn = document.getElementById('btnCloseApiKeyModal');

    if (btnDelete) btnDelete.classList.toggle('hidden', !hasKey);
    if (closeBtn) closeBtn.classList.toggle('hidden', !hasKey);

    // Synchronize global header indicators if available
    if (typeof window.refreshHeaderAiStatus === 'function') {
      window.refreshHeaderAiStatus();
    } else {
      const headerDot = document.getElementById('headerStatusDot');
      const headerText = document.getElementById('headerStatusText');
      const keyIcon = document.getElementById('headerStatusKeyIcon');
      const ping = document.getElementById('aiEnginePing');

      if (headerDot && headerText) {
        if (hasKey) {
          headerDot.className = "relative inline-flex rounded-full h-2 w-2 bg-emerald-500";
          if (ping) ping.className = "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75";
          if (keyIcon) keyIcon.className = "fa-solid fa-key text-[11px] text-emerald-500";
          headerText.textContent = "AI Ready";
          headerText.className = "truncate text-[10.5px] text-emerald-600 dark:text-emerald-400 font-bold hidden xs:inline";
        } else {
          headerDot.className = "relative inline-flex rounded-full h-2 w-2 bg-amber-500";
          if (ping) ping.className = "animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75";
          if (keyIcon) keyIcon.className = "fa-solid fa-key text-[11px] text-amber-500";
          headerText.textContent = "Connect Key";
          headerText.className = "truncate text-[10.5px] text-amber-700 dark:text-amber-300 font-bold hidden xs:inline";
        }
      }
    }

    const input = document.getElementById('inputApiKey');
    if (input && hasKey && !input.value) {
      const existing = getKey();
      if (existing) {
        input.value = existing;
        const badgeEl = document.getElementById('verifiedModelBadge');
        const badgeText = document.getElementById('verifiedModelText');
        if (badgeEl && badgeText) {
          badgeText.textContent = `सक्रिय: ${ACTIVE_MODEL}`;
          badgeEl.classList.remove('hidden');
          badgeEl.classList.add('flex');
        }
      }
    }
  }

  /**
   * 7. INPUT UTILITIES
   */
  async function pasteFromClipboard() {
    try {
      const text = await navigator.clipboard.readText();
      const input = document.getElementById('inputApiKey');
      if (input && text) {
        input.value = text.trim();
        document.getElementById('btnClearKey')?.classList.remove('hidden');
        showGatekeeperToast("क्लिपबोर्डवरून की पेस्ट केली.");
      }
    } catch (e) {
      showGatekeeperToast("कृपया की मॅन्युअली बॉक्समध्ये पेस्ट करा.");
    }
  }

  function clearInput() {
    const input = document.getElementById('inputApiKey');
    if (input) input.value = "";
    document.getElementById('btnClearKey')?.classList.add('hidden');
    document.getElementById('keyValidationError')?.classList.add('hidden');
  }

  function toggleKeyVisibility() {
    const input = document.getElementById('inputApiKey');
    const icon = document.getElementById('toggleVisibilityIcon');
    if (!input || !icon) return;

    if (input.type === 'password') {
      input.type = 'text';
      icon.className = 'fa-solid fa-eye-slash';
    } else {
      input.type = 'password';
      icon.className = 'fa-solid fa-eye';
    }
  }

  function enterDemoMode() {
    closeModal();
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
      const rajyaCard = document.querySelector('a[href="./rajyaseva.html"]');
      if (rajyaCard) {
        window.location.href = './rajyaseva.html';
      }
    }
  }

  /**
   * 8. MODAL CONTROLS
   */
  function resolveModalElement() {
    return document.getElementById('apiKeyModal') || 
           document.getElementById('apiKeySetupModal') || 
           document.getElementById('apiKeyGatewayModal');
  }

  function openModal() {
    const modal = resolveModalElement();
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.classList.add('overflow-hidden');
    }
  }

  function closeModal() {
    const modal = resolveModalElement();
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.classList.remove('overflow-hidden');
    }
  }

  function showError(msg) {
    const errEl = document.getElementById('keyValidationError');
    if (errEl) {
      errEl.textContent = msg;
      errEl.classList.remove('hidden');
    }
  }

  function showGatekeeperToast(msg) {
    const toast = document.getElementById('gatekeeperToast');
    const text = document.getElementById('gatekeeperToastMessage');
    if (!toast || !text) return;

    text.textContent = msg;
    toast.classList.remove('translate-y-10', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-10', 'opacity-0');
    }, 2800);
  }

  function attachInputListeners() {
    const input = document.getElementById('inputApiKey');
    if (input) {
      input.addEventListener('input', () => {
        document.getElementById('btnClearKey')?.classList.toggle('hidden', !input.value);
        document.getElementById('keyValidationError')?.classList.add('hidden');
      });
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          handlePrimaryAction();
        }
      });
    }
  }

  return {
    init,
    getKey,
    testConnection,
    handlePrimaryAction,
    handleDeleteKeyClick,
    pasteFromClipboard,
    clearInput,
    toggleKeyVisibility,
    enterDemoMode,
    openModal,
    closeModal,
    ACTIVE_MODEL
  };
})();

if (typeof window !== 'undefined') {
  window.GatekeeperEngine = GatekeeperEngine;
  window.openKeyModalExplicitly = GatekeeperEngine.openModal;
  window.openApiKeyModal = GatekeeperEngine.openModal;
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    GatekeeperEngine.init();
  });
}