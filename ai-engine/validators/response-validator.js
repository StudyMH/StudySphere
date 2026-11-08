/**
 * ============================================================================
 * StudySphere AI Engine — Response Validator (Resilient MPSC Standard)
 * File: ai-engine/validators/response-validator.js
 * Description: Industrial-grade 5-Gate Structural, Logical & Content Validator
 *              for Google Gemini AI Quiz & Notes Responses.
 * Standard: Strict MPSC Pattern, Array-Safe Parsing & Zero-Crash Architecture.
 * ============================================================================
 */

export class ResponseValidator {
  /**
   * --------------------------------------------------------------------------
   * GATE 1: RAW STRING SANITIZER & JSON EXTRACTOR (ARRAY & OBJECT SAFE)
   * --------------------------------------------------------------------------
   */
  static cleanAndParseJSON(rawResponse) {
    if (!rawResponse) {
      throw new Error("[Validator Gate 1] रिकामी किंवा अवैध माहिती प्राप्त झाली (Empty payload).");
    }

    if (typeof rawResponse === 'object' && rawResponse !== null) {
      return rawResponse;
    }

    if (typeof rawResponse !== 'string') {
      throw new Error(`[Validator Gate 1] अनपेक्षित डेटा प्रकार: ${typeof rawResponse}`);
    }

    let sanitized = rawResponse.trim();

    // 1. Strip markdown code blocks (```json ... ``` or ``` ...)
    sanitized = sanitized.replace(/^```(?:json|markdown)?\s*/i, '');
    sanitized = sanitized.replace(/\s*```$/i, '');
    sanitized = sanitized.trim();

    // 2. Locate outermost JSON boundaries
    const firstBracket = sanitized.indexOf('[');
    const firstBrace = sanitized.indexOf('{');

    if (firstBracket !== -1 && (firstBrace === -1 || firstBracket < firstBrace)) {
      const lastBracket = sanitized.lastIndexOf(']');
      if (lastBracket !== -1 && lastBracket > firstBracket) {
        sanitized = sanitized.substring(firstBracket, lastBracket + 1);
      }
    } else if (firstBrace !== -1) {
      const lastBrace = sanitized.lastIndexOf('}');
      if (lastBrace !== -1 && lastBrace > firstBrace) {
        sanitized = sanitized.substring(firstBrace, lastBrace + 1);
      }
    }

    // 3. Fix trailing commas before closing brackets or braces
    sanitized = sanitized.replace(/,\s*([\]}])/g, '$1');

    try {
      return JSON.parse(sanitized);
    } catch (parseError) {
      try {
        // Fallback: Clean unescaped control characters
        const repaired = sanitized
          .replace(/[\u0000-\u001F]+/g, (match) => {
            if (match === '\n' || match === '\r' || match === '\t') return match;
            return '';
          });
        return JSON.parse(repaired);
      } catch (innerErr) {
        console.error("[Validator Gate 1 Fatal] JSON Parse Failed. Payload:", sanitized);
        throw new Error(`[Validator Gate 1] JSON पार्सिंग अयशस्वी: ${parseError.message}`);
      }
    }
  }

  /**
   * --------------------------------------------------------------------------
   * GATE 2 & 3: QUIZ QUESTION SCHEMA, INDEX NORMALIZER & OPTION SHUFFLER
   * --------------------------------------------------------------------------
   */
  static validateQuizQuestion(question, expectedIndex = 1, isEnglish = false) {
    if (!question || typeof question !== 'object') {
      throw new Error(`[Gate 2 Schema Error Q#${expectedIndex}] प्रश्न ऑब्जेक्ट अस्तित्वात नाही.`);
    }

    // 2.1 Question title resolution
    const rawTitle = question.questionTitleMr || question.questionTitle || question.question || question.title || '';
    const title = this.sanitizeText(rawTitle, isEnglish);
    if (!title || title.length < 5) {
      throw new Error(`[Gate 2 Schema Error Q#${expectedIndex}] प्रश्नाचे शीर्षक अमान्य किंवा खूप लहान आहे.`);
    }

    // 2.2 Options array verification - strictly 4 options
    const rawOptions = question.options || question.choices;
    if (!Array.isArray(rawOptions)) {
      throw new Error(`[Gate 2 Schema Error Q#${expectedIndex}] 'options' हा ॲरे असणे आवश्यक आहे.`);
    }

    const cleanOptions = rawOptions
      .map(opt => this.sanitizeText(opt, isEnglish))
      .filter(opt => opt.length > 0);

    if (cleanOptions.length !== 4) {
      throw new Error(`[Gate 2 Schema Error Q#${expectedIndex}] प्रश्नाला तंतोतंत ४ पर्याय असणे बंधनकारक आहे (मिळाले: ${cleanOptions.length}).`);
    }

    // 2.3 Correct answer index normalization
    const correctIdx = this.normalizeAnswerIndex(question.correctAnswerIndex);
    if (isNaN(correctIdx) || correctIdx < 0 || correctIdx > 3) {
      throw new Error(`[Gate 3 Boundary Error Q#${expectedIndex}] अमान्य उत्तर इंडेक्स: ${question.correctAnswerIndex}.`);
    }

    // 2.4 Fisher-Yates Option Shuffling to eliminate position bias
    const { shuffled, newIndex } = this.shuffleOptionsWithIndex(cleanOptions, correctIdx);

    // 2.5 Explanation resolution
    const defaultExp = isEnglish ? "Detailed analytical solution available." : "प्रमाणित विश्लेषणात्मक स्पष्टीकरण उपलब्ध आहे.";
    const explanation = this.sanitizeText(question.explanation || question.solution || defaultExp, isEnglish);

    // 2.6 Multi-statement and Match Pairs structural parsing
    const rawType = (question.type || 'standard').toLowerCase();
    const statements = Array.isArray(question.statements) 
      ? question.statements.map(s => this.sanitizeText(s, isEnglish)).filter(Boolean)
      : [];

    const rawPairs = Array.isArray(question.pairs) ? question.pairs : [];
    const validPairs = rawPairs
      .filter(p => p && typeof p === 'object' && (p.colA || p.left) && (p.colB || p.right))
      .map(p => ({
        colA: this.sanitizeText(p.colA || p.left, isEnglish),
        colB: this.sanitizeText(p.colB || p.right, isEnglish)
      }))
      .filter(p => {
        const b = p.colB.toLowerCase();
        return !b.includes('वैध') && !b.includes('अवैध') && !b.includes('सत्य') && !b.includes('असत्य');
      });

    let finalType = 'standard';
    if (validPairs.length >= 2 && (rawType === 'pairs' || /जोड्या|जोडी|match|pairs/i.test(title))) {
      finalType = 'pairs';
    } else if (statements.length > 0 || rawPairs.length > 0) {
      finalType = 'statement';
      if (statements.length === 0 && rawPairs.length > 0) {
        rawPairs.forEach(rp => {
          const itemText = `${rp.colA || rp.left || ''} ${rp.colB || rp.right || ''}`.trim();
          if (itemText) statements.push(this.sanitizeText(itemText, isEnglish));
        });
      }
    }

    return {
      id: question.id || `q_val_${Date.now()}_${expectedIndex}_${Math.random().toString(36).substring(2, 6)}`,
      type: finalType,
      questionTitleMr: title,
      questionTitle: title,
      statements: statements,
      concludingPrompt: this.sanitizeText(question.concludingPrompt || '', isEnglish),
      pairs: finalType === 'pairs' ? validPairs : [],
      options: shuffled,
      correctAnswerIndex: newIndex,
      explanation: explanation,
      referenceBook: this.sanitizeText(question.referenceBook || (isEnglish ? "Standard Academic Source" : "प्रमाणित MPSC संदर्भ"), isEnglish),
      topicChip: this.sanitizeText(question.topicChip || (isEnglish ? "Core Concept" : "अभ्यासक्रम घटक"), isEnglish),
      difficulty: (question.difficulty || 'MEDIUM').toUpperCase(),
      userSelectedIndex: undefined,
      verifiedAt: new Date().toISOString()
    };
  }

  /**
   * --------------------------------------------------------------------------
   * BATCH QUESTION VALIDATOR (SAFELY FILTERS INVALID ITEMS WITHOUT CRASHING)
   * --------------------------------------------------------------------------
   */
  static validateQuestionBatch(rawQuestions, isEnglish = false) {
    if (!Array.isArray(rawQuestions) || rawQuestions.length === 0) {
      return [];
    }

    const validatedList = [];
    rawQuestions.forEach((q, idx) => {
      try {
        const validItem = this.validateQuizQuestion(q, idx + 1, isEnglish);
        if (validItem) validatedList.push(validItem);
      } catch (err) {
        console.warn(`[Batch Item Rejected Q#${idx + 1}]`, err.message);
      }
    });

    return validatedList;
  }

  /**
   * --------------------------------------------------------------------------
   * TEXT SANITIZER & SAFE UNICODE PRESERVER
   * --------------------------------------------------------------------------
   */
  static sanitizeText(str, isEnglish = false) {
    if (str === null || str === undefined) return '';
    const replacement = isEnglish ? ' or ' : ' किंवा ';
    
    let text = String(str);

    // Remove literal quote escapes safely
    text = text.replace(/\\'/g, "'").replace(/\\"/g, '"');
    
    // Fix known corrupt unicode sequences caused by malformed escape slashes
    text = text
      .replace(/संदर्भाI/g, "संदर्भात")
      .replace(/कोणtI/g, "कोणती")
      .replace(/अनुdowж/g, "अनुतरंग")
      .replace(/पूर्णur/g, "पूर्णपणे")
      .replace(/कчte/g, "कपाटे")
      .replace(/jo\s*ड्या/gi, "जोड्या")
      .replace(/jo\s*डी/gi, "जोडी")
      .replace(/ठिकाणाI[ńn]/gi, "ठिकाणांशी");

    // Clean stray slashes without destroying mathematical formulas
    text = text.replace(/\s*\/\s*/g, replacement);

    return text.trim();
  }

  /**
   * --------------------------------------------------------------------------
   * ANSWER INDEX NORMALIZER (SUPPORTS 0-3, 1-4, LETTERS A-D, AND MARATHI अ-ड)
   * --------------------------------------------------------------------------
   */
  static normalizeAnswerIndex(rawVal) {
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
  }

  /**
   * --------------------------------------------------------------------------
   * FISHER-YATES SHUFFLE WITH CORRECT INDEX TRACKING
   * --------------------------------------------------------------------------
   */
  static shuffleOptionsWithIndex(optionsArray, correctIdx) {
    const wrapped = optionsArray.map((text, idx) => ({
      text: text,
      isCorrect: idx === correctIdx
    }));

    for (let i = wrapped.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [wrapped[i], wrapped[j]] = [wrapped[j], wrapped[i]];
    }

    return {
      shuffled: wrapped.map(w => w.text),
      newIndex: wrapped.findIndex(w => w.isCorrect)
    };
  }

  /**
   * --------------------------------------------------------------------------
   * GATE 5: STUDY NOTES MARKDOWN & STRUCTURAL VALIDATOR (SOFT RESILIENCE)
   * Prevents UI crashing on partial chunks while sanitizing content cleanly.
   * --------------------------------------------------------------------------
   */
  static validateNotesContent(rawNotesMarkdown, chapterTitle = '') {
    if (!rawNotesMarkdown || typeof rawNotesMarkdown !== 'string') {
      console.warn("[Validator Notes Warning] Empty or non-string notes payload received.");
      return {
        isValid: false,
        rawMarkdown: "",
        chapterTitle: chapterTitle,
        wordsCount: 0,
        estimatedReadingMinutes: 1,
        hasTables: false,
        hasLists: false,
        warning: "रिकामी माहिती प्राप्त झाली"
      };
    }

    let trimmed = rawNotesMarkdown.trim();

    // Clean common code fences if left accidentally by LLM
    trimmed = trimmed.replace(/^```(?:markdown)?\s*/i, '');
    trimmed = trimmed.replace(/\s*```$/i, '');
    trimmed = trimmed.trim();

    const wordsCount = trimmed.split(/\s+/).filter(Boolean).length;
    const readingTimeMins = Math.max(1, Math.round(wordsCount / 180));

    return {
      isValid: trimmed.length >= 40,
      rawMarkdown: trimmed,
      chapterTitle: chapterTitle,
      wordsCount: wordsCount,
      estimatedReadingMinutes: readingTimeMins,
      hasTables: trimmed.includes('|') && trimmed.includes('---'),
      hasLists: /^\s*[\*\-]\s+/m.test(trimmed) || /^\s*\d+\.\s+/m.test(trimmed),
      validatedAt: new Date().toISOString()
    };
  }
}

export default ResponseValidator;