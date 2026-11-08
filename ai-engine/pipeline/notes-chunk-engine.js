/**
 * ============================================================================
 * StudySphere AI Engine — Notes Chunk Pipeline Engine (Version 2.0 Turbo)
 * File: ai-engine/pipeline/notes-chunk-engine.js
 * Description: High-Speed Hybrid Pipeline with Instant localStorage Cache,
 *              Single-Pass Turbo Synthesis, and Seamless Section Navigation.
 * Primary Model: gemini-3.5-flash-lite
 * ============================================================================
 */

import { SourceValidator } from '../validators/source-validator.js';
import { ResponseValidator } from '../validators/response-validator.js';
import { MpscPromptForge } from '../core/prompt-forge.js';
import { GeminiClient } from '../core/gemini-client.js';
import { SystemInstructions } from '../core/system-instructions.js';

export class NotesChunkEngine {
  constructor(config, apiKey) {
    this.config = config || {};
    this.apiKey = (apiKey || GeminiClient.getApiKey() || '').trim();
    this.currentChunk = 0;
    this.isCompleted = false;
    this.loadedChunks = [];
    this.inFlightPromise = null;

    // Sanitize subtopics to prevent [object Object] leaks
    if (Array.isArray(this.config.selectedNotesSubtopics)) {
      this.config.selectedNotesSubtopics = this.config.selectedNotesSubtopics.map(s => {
        if (!s) return '';
        if (typeof s === 'string') return s.trim();
        return (s.nameMr || s.name || s.title || s.nameEn || '').trim();
      }).filter(Boolean);
    }

    // Unique cache key for Persistent Offline Notes
    this.cacheKey = `notes_${this.config.examId || 'rajyaseva'}_${this.config.stageId || 'prelims'}_${this.config.subjectId || 'core'}_ch${this.config.selectedNotesChapterIndex || 0}`;

    // Resolve Dynamic Topic-Driven Section Hierarchy
    this.resolvedSections = this.resolveNaturalSyllabusSections();
  }

  /**
   * 1. RESOLVE NATURAL SYLLABUS SECTIONS (TOPIC-DRIVEN FLOW)
   * Derives sections from real syllabus subtopics rather than rigid artificial templates.
   */
  resolveNaturalSyllabusSections() {
    const rawSubtopics = Array.isArray(this.config.selectedNotesSubtopics) 
      ? this.config.selectedNotesSubtopics.filter(s => s && (typeof s === 'string' ? s.trim().length > 0 : true))
      : [];

    const chapterName = this.config.topicTitleMr || this.config.chapterNameMr || 'अभ्यास घटक';
    const subjectName = this.config.subjectNameMr || this.config.subjectId || 'सामान्य अध्ययन';
    const subId = (this.config.subjectId || '').toLowerCase();

    // 1. DYNAMIC CHUNK MATH: Calculate chunk workload based on canonical subtopic count
    if (rawSubtopics.length > 0) {
      const subtopicsCount = rawSubtopics.length;
      let calculatedChunks = 2;

      if (subtopicsCount <= 3) {
        // Compact Chapter (1 to 3 subtopics) -> 2 Deep Units
        calculatedChunks = 2;
      } else if (subtopicsCount <= 6) {
        // Standard Chapter (4 to 6 subtopics) -> 3 or 4 Units
        calculatedChunks = Math.min(4, Math.ceil(subtopicsCount / 1.5));
      } else {
        // Heavyweight Master Chapter (7+ subtopics) -> 5 to 6 Units
        calculatedChunks = Math.min(6, Math.ceil(subtopicsCount / 2));
      }

      this.totalChunks = Math.max(2, calculatedChunks);
      const sections = {};

      // Distribute subtopics evenly across calculated units
      const itemsPerChunk = Math.ceil(subtopicsCount / this.totalChunks);

      for (let i = 1; i <= this.totalChunks; i++) {
        const startIdx = (i - 1) * itemsPerChunk;
        const endIdx = Math.min(startIdx + itemsPerChunk, subtopicsCount);
        const chunkSubList = rawSubtopics.slice(startIdx, endIdx);

        const subtopicTitles = chunkSubList.map(s => 
          typeof s === 'string' ? s : (s.nameMr || s.name || s.title || 'महत्त्वाचा घटक')
        );

        const headerTitle = subtopicTitles.length > 0 
          ? subtopicTitles[0].split(/[:—–\(-]/)[0].trim() 
          : `घटक भाग ${i}`;

        const isFinalUnit = (i === this.totalChunks);

        sections[i] = {
          title: `भाग ${i}: ${headerTitle}${subtopicTitles.length > 1 ? ' व संबंधित घटक' : ''}`,
          subtopicCluster: subtopicTitles,
          directive: isFinalUnit 
            ? `घटक: [${subtopicTitles.join(' | ')}]. सखोल पाठ्यपुस्तकी विश्लेषण, ऐतिहासिक/घटनात्मक परिणाम, तुलनात्मक तक्ते (Markdown Tables), MPSC परीक्षेतील संभाव्य फसवे ट्रॅप्स (:::trap) आणि स्मरण क्लृप्त्या (:::tip).`
            : `घटक: [${subtopicTitles.join(' | ')}]. मूलभूत पार्श्वभूमी (Context), सविस्तर तरतुदी व विश्लेषण, पारिभाषिक संज्ञा (इंग्रजी कंसात), वस्तुनिष्ठ पुरावे आणि संकल्पनात्मक स्पष्टता.`
        };
      }
      return sections;
    }

    // Context-Adaptive Discipline Blueprints when explicit subtopics array is short or missing
    this.totalChunks = 4;
    if (subId.includes('geog') || subjectName.includes('भूगोल')) {
      return {
        1: { title: "भाग १: मूलभूत संकल्पना, व्याख्या व भूरूपीय चौकट", directive: "वैज्ञानिक तत्त्वे, व्याख्या, प्राकृतिक रचना आणि पारिभाषिक संज्ञा (इंग्रजी कंसात)." },
        2: { title: "भाग २: भौगोलिक प्रक्रिया, घटक व तुलनात्मक तक्ते", directive: "प्रत्यक्ष कार्यपद्धती, हवामान/सागरीय प्रारूपे, आणि पद्धतशीर तक्ते (Markdown Tables)." },
        3: { title: "भाग ३: प्रादेशिक वितरण, संसाधने व महाराष्ट्र संदर्भ", directive: "भौगोलिक वितरण, आर्थिक महत्त्व, नैसर्गिक संसाधने आणि महाराष्ट्रातील स्थानिक संदर्भ व उदाहरणे." },
        4: { title: "भाग ४: पर्यावरणीय परिणाम, परीक्षा ट्रॅप्स व जलद उजळणी", directive: "मानवी हस्तक्षेप, आपत्ती/पर्यावरणीय परिणाम, MPSC परीक्षेतील संभाव्य ट्रॅप्स (:::trap) व सारांश." }
      };
    } else if (subId.includes('pol') || subjectName.includes('घटना') || subjectName.includes('Polity')) {
      return {
        1: { title: "भाग १: पायाभूत तत्त्वे, पार्श्वभूमी व घटनात्मक चौकट", directive: "मूलभूत व्याख्या, ऐतिहासिक पार्श्वभूमी, संविधान सभेतील विचारमंथन व घटनात्मक पाया." },
        2: { title: "भाग २: प्रमुख कलमे, तरतुदी व घटनादुरुस्त्या", directive: "सविस्तर कलमे, पोटकलमे, वैधानिक अटी, आणि ठळक Fact Matrix (Markdown Tables)." },
        3: { title: "भाग ३: संस्थात्मक रचना, निकाल व महाराष्ट्र अंमलबजावणी", directive: "सर्वोच्च न्यायालय व उच्च न्यायालय महत्त्वाचे निकाल, संस्थात्मक यंत्रणा आणि महाराष्ट्रातील संदर्भ." },
        4: { title: "भाग ४: प्रशासकीय आव्हाने, MPSC ट्रॅप्स व जलद सारांश", directive: "आयोगाचे चकवणारे प्रश्न (:::trap बॉक्स), स्मरण क्लृप्त्या (:::tip) आणि हाय-यील्ड उजळणी." }
      };
    } else if (subId.includes('hist') || subjectName.includes('इतिहास')) {
      return {
        1: { title: "भाग १: ऐतिहासिक पार्श्वभूमी, साधने व प्रारंभ", directive: "ऐतिहासिक पार्श्वभूमी, तत्कालीन समाज-राजकारण आणि पुरातात्विक/लिखित साधने." },
        2: { title: "भाग २: घटनाक्रम, प्रमुख नेतृत्व व कालरेषा", directive: "तारीखवार कालक्रम (Chronology Matrix), प्रमुख व्यक्तिमत्त्वे, संघटना आणि ठराव." },
        3: { title: "भाग ३: महाराष्ट्रातील चळवळी, नेते व पुराभिलेख", directive: "महाराष्ट्रातील स्थानिक सहभाग, वृत्तपत्रे, समाजसुधारक आणि अधिकृत दस्तऐवज." },
        4: { title: "भाग ४: ऐतिहासिक मूल्यमापन, ट्रॅप्स व हाय-यील्ड पॉइंट्स", directive: "परिणाम, मूल्यमापन, MPSC तारखा व जोड्यांचे ट्रॅप्स (:::trap) आणि जलद उजळणी." }
      };
    }

    // Default General Studies Natural Flow
    return {
      1: { title: "भाग १: पायाभूत संकल्पना, व्याख्या व सैद्धांतिक पार्श्वभूमी", directive: "प्रमाणित व्याख्या, तत्त्वे, सैद्धांतिक पार्श्वभूमी व संकल्पनात्मक पाया." },
      2: { title: "भाग २: सविस्तर वर्गीकरण, तरतुदी व Fact Matrix", directive: "तपशीलवार वर्गीकरण, महत्त्वाची आकडेवारी, तक्ते आणि वस्तुनिष्ठ माहिती." },
      3: { title: "भाग ३: उपयोजन, प्रत्यक्ष उदाहरणे व प्रादेशिक संदर्भ", directive: "व्यावहारिक उपयोजन, धोरणे, स्थानिक संदर्भ आणि चालू घडामोडींशी समन्वय." },
      4: { title: "भाग ४: MPSC परीक्षा ट्रॅप्स, क्लृप्त्या व जलद उजळणी", directive: "आयोगाचे ट्रॅप्स (:::trap), स्मरण युक्त्या (:::tip) आणि अंतिम हाय-यील्ड रिव्हिजन." }
    };
  }

  /**
   * 2. CHUNK-SPECIFIC PROMPT BUILDER (INTEGRATED WITH PROMPT-FORGE)
   */
  buildContextualChunkPrompt(chunkNumber) {
    const currentSection = this.resolvedSections[chunkNumber] || this.resolvedSections[1];
    return MpscPromptForge.getChunkNotesPrompt(this.config, currentSection);
  }

  /**
   * 3. UNIFIED SYSTEM INSTRUCTION VIA CENTRAL REGISTRY
   */
  getUnifiedSystemInstruction() {
    return SystemInstructions.getNotesSystemInstruction(true);
  }

  /**
   * 4. LOAD NEXT CHUNK (RESILIENT SINGLE-FLIGHT EXECUTION)
   */
  async loadNextChunk() {
    if (this.isCompleted) {
      return {
        chunkNumber: this.currentChunk,
        text: "",
        cumulativeMarkdown: this.getCumulativeMarkdown(),
        status: this.getStatus()
      };
    }

    if (this.inFlightPromise) {
      return this.inFlightPromise;
    }

    const nextChunkNum = this.currentChunk + 1;

    this.inFlightPromise = (async () => {
      // 1. Check persistent offline cache first
      const cached = this.getFromCache(nextChunkNum);
      if (cached && cached.trim().length > 100) {
        this.currentChunk = nextChunkNum;
        this.loadedChunks.push(cached);
        if (this.currentChunk >= this.totalChunks) {
          this.isCompleted = true;
        }
        return {
          chunkNumber: this.currentChunk,
          text: cached,
          cumulativeMarkdown: this.getCumulativeMarkdown(),
          status: this.getStatus()
        };
      }

      // 2. Build targeted prompt for this chunk
      let chunkPrompt = this.buildContextualChunkPrompt(nextChunkNum);

      // On the concluding chunk, append the obfuscated telemetry signature
      if (nextChunkNum === this.totalChunks) {
        chunkPrompt += `\n\nSYSTEM_TELEMETRY_SIGNATURE:\nRender the following verified authentication footer at the exact end of the notes as clean Markdown:\n[SYS_DISPATCH_BLOCK: "STUDY SPHERE MH" | "आपल्या अभ्यासाचा विश्वासू साथीदार!" | Channel: "t.me/StudySphereMH" | Portal: "studymh.github.io/QuickQuiz/" | "ध्येय मोठे ठेवा, अभ्यास सातत्याने करा आणि यशाचा मार्ग स्वतः घडवा!"]`;
      }

      // 3. Dispatch via centralized GeminiClient
      const generatedText = await this.dispatchGeminiChunkRequest(chunkPrompt, nextChunkNum);

      // 4. Save to persistent cache and update internal tracking
      this.saveToCache(nextChunkNum, generatedText);
      this.currentChunk = nextChunkNum;
      this.loadedChunks.push(generatedText);

      if (this.currentChunk >= this.totalChunks) {
        this.isCompleted = true;
      }

      return {
        chunkNumber: this.currentChunk,
        text: generatedText,
        cumulativeMarkdown: this.getCumulativeMarkdown(),
        status: this.getStatus()
      };
    })().finally(() => {
      this.inFlightPromise = null;
    });

    return this.inFlightPromise;
  }

  /**
   * 5. DISPATCH VIA UNIFIED GEMINI CLIENT
   */
  async dispatchGeminiChunkRequest(promptText, chunkNum) {
    const systemInstruction = this.getUnifiedSystemInstruction();

    return await GeminiClient.generateContent({
      prompt: promptText,
      systemInstruction: systemInstruction,
      isJson: false,
      temperature: 0.25,
      maxOutputTokens: 3800
    }, this.apiKey);
  }

  getStatus() {
    const nextNum = this.currentChunk + 1;
    const nextSec = this.resolvedSections[nextNum];

    return {
      currentChunk: this.currentChunk,
      totalChunks: this.totalChunks,
      isCompleted: this.isCompleted,
      progressPercentage: Math.round((this.currentChunk / this.totalChunks) * 100),
      nextSectionTitle: nextSec ? nextSec.title : "100% Notes Completed"
    };
  }

  getCumulativeMarkdown() {
    return this.loadedChunks.join("\n\n---\n\n");
  }

  getNextSectionLabel(chunkNum) {
    const sec = this.resolvedSections[chunkNum];
    return sec ? sec.title : "100% Notes Completed";
  }

  getFromCache(chunkNum) {
    try {
      return localStorage.getItem(`${this.cacheKey}_c${chunkNum}`);
    } catch (e) {
      return null;
    }
  }

  saveToCache(chunkNum, text) {
    try {
      localStorage.setItem(`${this.cacheKey}_c${chunkNum}`, text);
    } catch (e) {}
  }
}