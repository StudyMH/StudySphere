/**
 * ============================================================================
 * StudySphere — Elastic Multi-Model Question Buffer Queue (Version 2.0 Turbo)
 * File: ai-engine/pipeline/question-buffer-queue.js
 * Description: High-throughput background queue fetching batches of academic
 *              questions ahead of time. Integrated with central GeminiClient
 *              and SystemInstructions to guarantee 0-latency and zero duplication.
 * Dedicated Model: gemini-3.5-flash-lite
 * ============================================================================
 */

import { GeminiClient } from '../core/gemini-client.js';
import { SystemInstructions } from '../core/system-instructions.js';
import { ResponseValidator } from '../validators/response-validator.js';

export class QuestionBufferQueue {
  /**
   * @param {Object} config - Quiz configuration context (examId, topicTitleMr, etc.)
   * @param {string} apiKey - Optional API key override
   * @param {number} batchSize - Default batch size (default: 4)
   */
  constructor(config = {}, apiKey = "", batchSize = 4) {
    this.config = config;
    this.apiKey = (apiKey || GeminiClient.getApiKey() || "").trim();
    this.defaultBatchSize = batchSize;

    // Dedicated single high-efficiency model
    this.activeModel = GeminiClient.ACTIVE_MODEL || 'gemini-3.5-flash-lite';

    // Queue & Elastic Balance State
    this.queue = [];
    this.totalDispatched = 0;
    this.totalQuestionsTarget = parseInt(this.config.questionsCount || this.config.totalQuestions, 10) || 15;
    this.rejectedShortfall = 0;

    // Concurrency Lock & Flow Control
    this.isFetching = false;
    this.listeners = [];
    this.isDestroyed = false;
  }

  /**
   * Primary entry point for UI: Returns the next valid question immediately
   * from memory, or waits for in-flight batch if buffer is temporarily dry.
   * @returns {Promise<Object>}
   */
  async getNextQuestion() {
    if (this.isDestroyed) {
      throw new Error("QuestionBufferQueue has been destroyed.");
    }

    // 1. If buffer has items, unwrap and dispatch instantly (0-Latency)
    if (this.queue.length > 0) {
      const q = this.queue.shift();
      this.totalDispatched++;
      this.notifyQueueUpdate();
      this.checkAndTriggerBackgroundRefill();
      return q;
    }

    // 2. If buffer is empty, wait for active fetch or trigger urgent fetch
    if (!this.isFetching) {
      await this.fetchElasticBatch();
    } else {
      // Await in-flight fetch
      await new Promise((resolve) => {
        const checkInterval = setInterval(() => {
          if (this.queue.length > 0 || !this.isFetching || this.isDestroyed) {
            clearInterval(checkInterval);
            resolve();
          }
        }, 80);
      });
    }

    if (this.queue.length > 0) {
      const q = this.queue.shift();
      this.totalDispatched++;
      this.notifyQueueUpdate();
      this.checkAndTriggerBackgroundRefill();
      return q;
    }

    throw new Error("Unable to retrieve valid question from AI models. Please retry.");
  }

  /**
   * Trigger next background batch fetch specifically when Buffer reaches <= 1
   */
  checkAndTriggerBackgroundRefill() {
    if (this.isDestroyed || this.isFetching) return;

    const remainingToDispatch = this.totalQuestionsTarget - (this.totalDispatched + this.queue.length);
    if (remainingToDispatch > 0 && this.queue.length <= 1) {
      this.fetchElasticBatch();
    }
  }

  /**
   * Fetches an elastic batch of questions (Batch of 4 + any previous shortfall)
   */
  async fetchElasticBatch() {
    if (this.isFetching || this.isDestroyed) return;

    const remainingNeeded = this.totalQuestionsTarget - (this.totalDispatched + this.queue.length);
    if (remainingNeeded <= 0) return;

    // Elastic formula: batchSize + any previous rejection shortfall, capped at remainingNeeded
    const targetCount = Math.min(this.defaultBatchSize + this.rejectedShortfall, remainingNeeded);
    if (targetCount <= 0) return;

    this.isFetching = true;
    let success = false;
    const maxRetries = 3;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      if (this.isDestroyed) break;

      try {
        const rawList = await this.callGeminiAPI(targetCount);
        const isEnglish = (this.config.language === 'en');
        
        // Validate with ResponseValidator, or fallback to internal resilient sanitizer
        let validBatch = [];
        if (typeof ResponseValidator !== 'undefined' && typeof ResponseValidator.validateQuestionBatch === 'function') {
          validBatch = ResponseValidator.validateQuestionBatch(rawList, isEnglish);
        } else {
          validBatch = this.validateAndSanitizeBatch(rawList, isEnglish);
        }

        if (Array.isArray(validBatch) && validBatch.length > 0) {
          this.queue.push(...validBatch);

          // Calculate shortfall if some were rejected by validator
          const rejectedInThisBatch = targetCount - validBatch.length;
          this.rejectedShortfall = Math.max(0, rejectedInThisBatch);

          success = true;
          this.notifyQueueUpdate();
          break;
        } else {
          throw new Error("Zero valid questions in payload.");
        }
      } catch (err) {
        console.warn(`[Buffer Queue Warning] Attempt ${attempt}/${maxRetries} failed:`, err.message);
        if (attempt < maxRetries) {
          await new Promise(r => setTimeout(r, 1000 * attempt));
        }
      }
    }

    this.isFetching = false;

    // Continuous replenishment check
    if (!success && this.queue.length === 0) {
      this.notifyQueueUpdate();
    } else {
      this.checkAndTriggerBackgroundRefill();
    }
  }

  /**
   * Dispatches generation call using centralized GeminiClient & SystemInstructions
   * @param {number} count
   * @returns {Promise<Array>}
   */
  async callGeminiAPI(count) {
    const isEnglish = (this.config.language === 'en');
    const topic = isEnglish 
      ? (this.config.chapterNameEn || this.config.topicTitleEn || this.config.topicTitleMr || "General Studies")
      : (this.config.chapterNameMr || this.config.topicTitleMr || "सामान्य अध्ययन");
    
    const subject = isEnglish 
      ? (this.config.subjectNameEn || "Competitive Examination") 
      : (this.config.subjectNameMr || "स्पर्धा परीक्षा");

    const chips = Array.isArray(this.config.chips) ? this.config.chips.slice(0, 8).join(', ') : '';

    const languageInstruction = isEnglish
      ? `Language: Strictly in 100% pure ENGLISH only. All questions, statements, concluding questions, tables, options, and explanations MUST be written in English. Do NOT output Marathi or Devanagari script.`
      : `Language: Strictly in pure MARATHI only (देवनागरी लिपी). Use authentic Marathi terms.`;

    const promptText = `
You are an expert exam question setter for Maharashtra Public Service Commission (MPSC).
Target Subject: "${subject}".
Target Chapter: "${topic}".
Syllabus Core Concepts: [${chips}].
${languageInstruction}
Task: Generate EXACTLY ${count} authentic academic MCQ questions.

Rules:
1. Strict Single-choice MCQ with exactly 4 options.
2. NO forward slashes '/' (e.g. use "or" in English or "किंवा" in Marathi).
3. NO emojis anywhere.
4. Distribute correctAnswerIndex uniformly across 0, 1, 2, and 3.
5. Provide verified reference book names (e.g., M. Laxmikanth, Ranjan Kolambe, Bipin Chandra, NCERT / State Board).
6. Format must be a 100% valid JSON Array of objects without any markdown code wrappers.

Output JSON Schema:
[
  {
    "id": "q_${Date.now()}_index",
    "questionTitleMr": "${isEnglish ? 'Question title text in English...' : 'प्रश्न मजकूर...'}",
    "statements": [${isEnglish ? '"Statement A...", "Statement B..."' : '"विधान अ...", "विधान ब..."'}],
    "concludingPrompt": "${isEnglish ? 'Which of the above statements is/are correct?' : 'वरीलपैकी कोणते विधान योग्य आहे?'}",
    "pairs": [ {"colA": "${isEnglish ? 'A. ...' : 'अ...'}", "colB": "${isEnglish ? '1. ...' : '१...'}"} ],
    "options": [${isEnglish ? '"Option 1", "Option 2", "Option 3", "Option 4"' : '"पर्याय १", "पर्याय २", "पर्याय ३", "पर्याय ४"'}],
    "correctAnswerIndex": 0,
    "explanation": "${isEnglish ? 'Detailed analytical explanation in English...' : 'सविस्तर विश्लेषणात्मक स्पष्टीकरण...'}",
    "referenceBook": "${isEnglish ? 'Standard Reference Book' : 'प्रमाणित संदर्भग्रंथ'}",
    "topicChip": "${isEnglish ? 'Topic Concept' : 'घटक संकल्पना'}",
    "difficulty": "MEDIUM"
  }
]
`;

    const systemInstruction = SystemInstructions.getQuizSystemInstruction();

    // Use centralized GeminiClient to enforce unified model, key validation, and telemetry
    const rawText = await GeminiClient.generateContent({
      prompt: promptText,
      systemInstruction: systemInstruction,
      isJson: true,
      temperature: 0.3,
      maxOutputTokens: 3800
    }, this.apiKey);

    if (!rawText || rawText.trim().length === 0) {
      throw new Error("Empty candidate payload from Gemini.");
    }

    // Safe regex JSON array extractor
    const match = rawText.match(/\[[\s\S]*\]/);
    if (!match) throw new Error("No JSON array found in AI output.");

    const parsed = JSON.parse(match[0]);
    return Array.isArray(parsed) ? parsed : (parsed.questions || []);
  }

  /**
   * Sanitizes and cleans question fields, removing unwanted slashes and artifacts.
   * Shuffles options using Fisher-Yates to eliminate position bias.
   */
  validateAndSanitizeBatch(batchArray, isEnglish = false) {
    if (!Array.isArray(batchArray)) return [];
    const valid = [];
    const slashReplacement = isEnglish ? ' or ' : ' किंवा ';

    const parseIndex = (rawVal) => {
      if (rawVal === undefined || rawVal === null) return NaN;
      if (typeof rawVal === 'number' && rawVal >= 0 && rawVal <= 3) return rawVal;
      const str = String(rawVal).trim().toUpperCase();
      if (str === 'A' || str === 'अ') return 0;
      if (str === 'B' || str === 'ब') return 1;
      if (str === 'C' || str === 'क') return 2;
      if (str === 'D' || str === 'ड') return 3;
      const parsed = parseInt(str, 10);
      if (!isNaN(parsed)) {
        if (parsed >= 1 && parsed <= 4 && !str.startsWith('0')) return parsed - 1;
        if (parsed >= 0 && parsed <= 3) return parsed;
      }
      return NaN;
    };

    const shuffleOptions = (opts, correctIdx) => {
      const wrapped = opts.map((text, idx) => ({ text, isCorrect: idx === correctIdx }));
      for (let i = wrapped.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [wrapped[i], wrapped[j]] = [wrapped[j], wrapped[i]];
      }
      return {
        shuffled: wrapped.map(w => w.text),
        newIdx: wrapped.findIndex(w => w.isCorrect)
      };
    };

    batchArray.forEach((item, idx) => {
      if (!item || typeof item !== 'object') return;
      const rawTitle = item.questionTitleMr || item.questionTitle || item.question;
      if (!rawTitle || typeof rawTitle !== 'string') return;
      
      const rawOptions = item.options || item.choices;
      if (!Array.isArray(rawOptions) || rawOptions.length !== 4) return;

      const corrIdx = parseIndex(item.correctAnswerIndex);
      if (isNaN(corrIdx) || corrIdx < 0 || corrIdx > 3) return;

      const sanitize = (str) => {
        if (!str) return "";
        return String(str)
          .replace(/\\['"]/g, "'")
          .replace(/\\/g, '')
          .replace(/\s*\/\s*/g, slashReplacement)
          .trim();
      };

      const defaultExplanation = isEnglish ? "Verified analytical explanation is available for this question." : "या प्रश्नाचे प्रमाणित विश्लेषणात्मक स्पष्टीकरण उपलब्ध आहे.";
      const defaultRef = isEnglish ? "Standard Reference Book" : "प्रमाणित संदर्भग्रंथ";
      const defaultTopic = isEnglish ? "Core Concept" : "अभ्यास घटक";

      const cleanedOptions = rawOptions.map(opt => sanitize(String(opt)));
      const { shuffled, newIdx } = shuffleOptions(cleanedOptions, corrIdx);

      valid.push({
        id: item.id || `q_${Date.now()}_${idx}_${Math.random().toString(36).substr(2, 4)}`,
        questionTitleMr: sanitize(rawTitle),
        statements: Array.isArray(item.statements) ? item.statements.map(sanitize) : [],
        concludingPrompt: sanitize(item.concludingPrompt || ""),
        pairs: Array.isArray(item.pairs) ? item.pairs.map(p => ({ colA: sanitize(p.colA || p.left), colB: sanitize(p.colB || p.right) })) : [],
        options: shuffled,
        correctAnswerIndex: newIdx >= 0 ? newIdx : 0,
        explanation: sanitize(item.explanation || defaultExplanation),
        referenceBook: sanitize(item.referenceBook || defaultRef),
        topicChip: sanitize(item.topicChip || defaultTopic),
        difficulty: item.difficulty || "MEDIUM",
        subject: isEnglish ? (this.config.subjectNameEn || "General Studies") : (this.config.subjectNameMr || "सामान्य अध्ययन"),
        subjectEn: this.config.subjectNameEn || "General Studies",
        userSelectedIndex: undefined
      });
    });

    return valid;
  }

  /**
   * Register listener to observe real-time buffer count updates in the UI
   */
  onQueueUpdate(callback) {
    if (typeof callback === 'function') {
      this.listeners.push(callback);
    }
  }

  notifyQueueUpdate() {
    this.listeners.forEach((fn) => {
      try { fn(this.queue.length); } catch (e) {}
    });
  }

  /**
   * Destroys queue and releases background references
   */
  destroy() {
    this.isDestroyed = true;
    this.queue = [];
    this.listeners = [];
  }
}

export default QuestionBufferQueue;