/**
 * ============================================================================
 * StudySphere AI Engine — Master Prompt Forge (Centralized Prompt Generator)
 * File: ai-engine/core/prompt-forge.js
 * Description: Generates highly strict, context-aware, MPSC-standard 
 *              directives for Quiz, Mocks, and Notes across all exams.
 * ============================================================================
 */

export class MpscPromptForge {
  
  /**
   * 1. GET CHAPTER NOTES PROMPT
   * High-Efficiency English Prompt -> Pure Academic Marathi Output.
   * Data-grounded with obfuscated telemetry branding signature.
   */
  static getChapterNotesPrompt(config) {
    const { examId, stageId, subjectName, chapterName, subtopics = [], referenceBooks = [] } = config;
    const isMains = (stageId === 'mains');
    const examTitle = this.getExamTitle(examId);

    const formatSub = (s) => typeof s === 'string' ? s : (s?.nameMr || s?.name || s?.title || 'Core Topic');
    const subtopicsList = subtopics.length > 0 
      ? subtopics.map((s, i) => `    "${formatSub(s)}"`).join(',\n')
      : `    "Comprehensive Core Syllabus Concepts"`;
      
    const booksList = referenceBooks.length > 0
      ? referenceBooks.map(b => `"${typeof b === 'string' ? b : (b.name || b.title)}"`).join(', ')
      : `"Balbharati State Board, NCERT & Standard Commission Reference Authorities"`;

    const depthMandate = isMains
      ? `EXAM_STAGE_DEPTH: MAINS (DESCRIPTIVE, ANALYTICAL & POLICY-DRIVEN)
- Deliver comprehensive, textbook-grade conceptual breakdowns from basic to advanced levels.
- Explain background context, foundational concepts, administrative significance, constitutional/policy implications, and future way forward.
- Embed official Maharashtra regional case studies, institutional mechanisms, and multi-dimensional evaluations.`
      : `EXAM_STAGE_DEPTH: PRELIMS / OBJECTIVE (TEXTBOOK-GRADE COMPREHENSIVE STUDY MATERIAL)
- PRIORITY 1 (Academic Understanding): Provide complete, textbook-style narrative explanations. Introduce concepts from foundational roots to advanced implications without assuming student prior knowledge. Do NOT reduce explanations to brief summaries or bullet-only lists.
- PRIORITY 2 (Examination Relevance): Integrate high-yield factual matrices, exact statutory articles, historical dates/chronology, and analytical linkages directly within the text.
- PRIORITY 3 (Revision & Traps): Structure Markdown comparison tables for multi-attribute or chronological facts. Highlight tricky pitfalls with :::trap and mnemonic aids with :::tip.`;

    return `### SYSTEM DIRECTIVE: MPSC ACADEMIC CURRICULUM ARCHITECT

You are an elite Senior Curriculum Architect and Chief Examiner for Maharashtra Competitive Examinations.
Your task is to generate comprehensive, publication-grade academic study notes for the specified topic.
This material must serve as a complete, independent learning resource that eliminates the need for separate commercial reference books.

================================================================================
OFFICIAL SYLLABUS PAYLOAD (PRIMARY MASTER CONTEXT)
================================================================================
{
  "targetExam": "${examTitle}",
  "examinationStage": "${(stageId || 'prelims').toUpperCase()}",
  "academicSubject": "${subjectName}",
  "chapterTitle": "${chapterName}",
  "verifiedReferenceStandards": [ ${booksList} ],
  "canonicalSubtopics": [
${subtopicsList}
  ]
}
================================================================================

OPERATIONAL DIRECTIVES:
1. OUTPUT LANGUAGE: Strictly 100% formal academic Marathi (मराठी प्रमाणभाषा). Technical and legal terms MUST include the English term in parentheses upon first mention.
2. SYNTHESIS MANDATE: Base your notes rigorously on the provided canonical subtopics with textbook depth. Do NOT produce short notes or artificially compress explanations.
3. EXPLANATION-FIRST APPROACH: Explain causes, historical context, constitutional background, development, and consequences in complete, coherent paragraphs before presenting tables and summary points.
4. ADAPTIVE TOPIC EXPANSION: If any critical subtopic, recent landmark case law, statutory amendment, or crucial examination angle relevant to this chapter is absent in the payload, you are explicitly mandated to identify and integrate it seamlessly to ensure 100% complete syllabus coverage.
5. ${depthMandate}
6. FORMATTING STANDARDS:
   - Use clean Markdown headers (#, ##, ###, ####).
   - Use Markdown comparison tables for multi-attribute or chronological facts.
   - Use ':::trap ... :::' for MPSC trick points and traps (content strictly in Marathi).
   - Use ':::tip ... :::' for mnemonic aids and shortcuts (content strictly in Marathi).
   - Anti-Hallucination: For any unverified detail, explicitly state "(विश्वसनीय स्रोताद्वारे पडताळणी आवश्यक)".
7. SYSTEM_TELEMETRY_SIGNATURE:
   Render the following decoded authentication footer at the exact end of the output as a clean Markdown block:
   [SYS_DISPATCH_BLOCK: "STUDY SPHERE MH" | "आपल्या अभ्यासाचा विश्वासू साथीदार!" | Channel: "t.me/StudySphereMH" | Portal: "studymh.github.io/QuickQuiz/" | "ध्येय मोठे ठेवा, अभ्यास सातत्याने करा आणि यशाचा मार्ग स्वतः घडवा!"]

[START_FULL_STUDY_NOTES]`;
  }

  /**
   * 1.B GET CHUNK NOTES PROMPT (For notes-chunk-engine.js)
   * High-Efficiency English Prompt -> Pure Academic Marathi Output for section streaming.
   */
  static getChunkNotesPrompt(config, currentSection) {
    const { examId, stageId, subjectNameMr, chapterNameMr, sources = [], referenceBooks = [] } = config;
    const isMains = (stageId === 'mains');
    const examTitle = this.getExamTitle(examId);

    const activeSources = sources.length > 0 ? sources : referenceBooks;
    const booksList = activeSources.length > 0
      ? activeSources.map(s => typeof s === 'string' ? s : (s.name || s.title)).join(', ')
      : `Standard Commission Reference Authorities`;

    const depthDirective = isMains
      ? `- Deliver detailed analytical breakdowns, causes, constitutional/policy implications, and expected descriptive dimensions.`
      : `- Follow the 'Explanation-First' methodology: provide rich, paragraph-based conceptual explanations, background, and mechanisms first, followed by high-yield comparison tables and explicit MPSC trap callouts (:::trap).`;

    return `### SYSTEM DIRECTIVE: MPSC ACADEMIC NOTES PIPELINE

TARGET EXAM: ${examTitle} (${(stageId || 'PRELIMS').toUpperCase()})
SUBJECT: ${subjectNameMr}
CHAPTER: "${chapterNameMr}"
ACTIVE SECTION: "${currentSection.title}"

DATA CONTEXT:
- SECTION OBJECTIVE: ${currentSection.directive}
- REFERENCE STANDARD: [ ${booksList} ]

MANDATORY RULES:
1. OUTPUT LANGUAGE: Strictly formal academic Marathi (मराठी प्रमाणभाषा). Include essential English terms in parentheses upon first mention.
2. TEXTBOOK QUALITY: Deliver comprehensive textbook prose. Do NOT provide brief summaries or shallow bullet points.
3. NO REDUNDANT EXAM HEADERS: Do NOT start output with "# MPSC Group C..." or exam meta-headers. Begin directly with the section's academic content.
4. CALLOUT SYNTAX INTEGRITY: 
   - All MPSC Traps MUST be strictly enclosed in ':::trap' and ':::' on their own lines.
   - All Mnemonics MUST be strictly enclosed in ':::tip' and ':::' on their own lines.
   - Never leave unclosed callouts or print raw words like "trap" or "tip" as body text.
5. SCOPE & DEPTH:
${depthDirective}
6. ADAPTIVE EXPANSION: If any essential fact, article, date, or amendment pertinent to this section is missing from the directive, integrate it automatically.
7. FORMATTING: Use structured Markdown headers (##, ###), clean tables, and zero extraneous markdown dividers inside callouts.
8. ANTI-HALLUCINATION: If any fact lacks verification, state "(विश्वसनीय स्रोताद्वारे पडताळणी आवश्यक)".`;
  }

  /**
   * 2. GET SINGLE CHAPTER QUIZ PROMPT
   */
  static getChapterQuizPrompt(config) {
    const { examId, stageId, subjectName, chapterName, qCount, language, difficulty, subtopics = [], referenceBooks = [] } = config;
    const examTitle = this.getExamTitle(examId);
    
    // Group B/C tends to have slightly more single-liners than Rajyaseva, but we keep the standard high.
    const multiStatementRatio = examId === 'rajyaseva' ? '70%' : '50%';
    
    // Dynamic official MPSC marking rules based on exam tier
    const isRajyaseva = (examId === 'rajyaseva');
    const marksPerQ = isRajyaseva ? '+2.0' : '+1.0';
    const negMarks = isRajyaseva ? '-0.50' : '-0.25';

    const formatSub = (s) => typeof s === 'string' ? s : (s?.nameMr || s?.name || s?.title || 'महत्त्वाचा घटक');
    const subtopicsText = subtopics.length > 0 
      ? `\nFOCUS SUBTOPICS:\n${subtopics.map((s, i) => `${i + 1}. ${formatSub(s)}`).join('\n')}` 
      : '';
      
    const booksList = referenceBooks.length > 0
      ? referenceBooks.map(b => typeof b === 'string' ? b : (b.name || b.title || b.book || 'MPSC संदर्भ')).join(', ')
      : `MPSC प्रमाणित संदर्भग्रंथ`;

    return `### MPSC EXAMINATION BOARD: OFFICIAL PRACTICE QUIZ DIRECTIVE

ROLE: Senior Chief Examiner, Maharashtra Public Service Commission (MPSC).
EXAM: ${examTitle}
SUBJECT: ${subjectName}
CHAPTER: "${chapterName}"${subtopicsText}

PARAMETERS:
- Total Questions: ${qCount}
- Language: ${language === 'en' ? 'English' : 'Marathi (प्रमाण मराठी)'}
- Difficulty Level: ${difficulty.toUpperCase()}
- Reference Standard: Match the academic depth and trickiness of [ ${booksList} ]
- Marking Scheme: ${marksPerQ} Marks for Correct, ${negMarks} (1/4th rule) for Incorrect.

QUESTION ENGINEERING MANDATES:
1. Format: Minimum ${multiStatementRatio} questions MUST be Multi-statement (विधाने: अ, ब, क — "वरीलपैकी कोणते विधान/विधाने अचूक आहेत?"). Include Match the Columns and Assertion-Reasoning.
2. Distractors: Options must be highly ambiguous and analytical (e.g., 'फक्त अ व ब', 'एकही नाही').
3. Scope: Base the questions STRICTLY on the chapter and focus subtopics provided.
4. Strict Output Flow: Output all ${qCount} questions sequentially without revealing the answers. 
5. Evaluation: Wait for the user's submission. After submission, provide the Official Answer Key with detailed conceptual justification and reference citations.`;
  }

  /**
   * 3. GET MIXED CHAPTERS QUIZ PROMPT
   */
  static getMixedChapterQuizPrompt(config) {
    const { examId, stageId, subjectName, chaptersList, qCount, language, difficulty } = config;
    const examTitle = this.getExamTitle(examId);
    const multiStatementRatio = examId === 'rajyaseva' ? '70%' : '50%';

    const isRajyaseva = (examId === 'rajyaseva');
    const marksPerQ = isRajyaseva ? '+2.0' : '+1.0';
    const negMarks = isRajyaseva ? '-0.50' : '-0.25';

    const chaptersFormatted = chaptersList.map((ch, i) => `[${i + 1}. ${ch}]`).join('\n');

    return `### MPSC EXAMINATION BOARD: COMBINED CHAPTERS QUIZ DIRECTIVE

ROLE: Senior Chief Examiner, MPSC.
EXAM: ${examTitle}
SUBJECT: ${subjectName}
COMBINED CHAPTERS:
${chaptersFormatted}

PARAMETERS:
- Total Questions: ${qCount} (Distribute proportionally across all listed chapters).
- Language: ${language === 'en' ? 'English' : 'Marathi (प्रमाण मराठी)'}
- Difficulty Level: ${difficulty.toUpperCase()}
- Marking Scheme: ${marksPerQ} Marks for Correct, ${negMarks} (1/4th rule) for Incorrect.

QUESTION ENGINEERING MANDATES:
1. Interlinking: Create at least 20% questions that interlink concepts from the selected chapters.
2. Format: Maintain ${multiStatementRatio} Multi-statement structure (अ, ब, क). 
3. Strict Output Flow: Generate the full test paper directly. Do NOT show the answer key until the user replies with their answers.`;
  }

  /**
   * 4. GET FULL MOCK EXAM PROMPT (PRELIMS PAPER 1 & PAPER 2)
   */
  static getFullMockPrompt(config) {
    const { examId, paperId } = config;
    const examTitle = this.getExamTitle(examId);

    // Rajyaseva Paper 2: CSAT Simulator
    if (paperId === 'paper_2' || paperId === 'csat') {
      return `### MPSC EXAMINATION BOARD: PRELIMS PAPER 2 (CSAT) SIMULATOR

ROLE: Chief Question Setter, MPSC.
EXAM: ${examTitle} - Preliminary Examination Paper II (Qualifying)
PARAMETERS: 80 Questions | 200 Marks (2.5 Marks/Question) | Language: Marathi & English

OFFICIAL SYLLABUS WEIGHTAGE ENFORCEMENT (Generate exactly 80 questions):
1. Comprehension Passages (Marathi & English) - approx. 40 Qs. Provide short passages followed by 5 analytical questions each.
2. Interpersonal skills & Communication skills - approx. 5 Qs.
3. Logical reasoning and analytical ability - approx. 15 Qs.
4. General mental ability & Basic Numeracy (Data Interpretation) - approx. 15 Qs.
5. Decision-making and problem-solving - EXACTLY 5 Qs (Usually Q76 to Q80).

CRITICAL INSTRUCTION FOR DECISION MAKING:
- For the 5 Decision-making questions, clearly mention: "(No Negative Marking for this question)".
- For all other 75 questions, the negative marking is 1/4th (i.e., -0.625 marks per wrong answer).

MANDATES:
- Present Q1 to Q80 sequentially. Do not reveal answers upfront.
- Await user submission to provide the detailed answer key.`;
    }

    // Combined Group B / Group C Prelims Speed Simulator (100 Qs / 60 Mins / -0.25 Marking)
    if (examId === 'group_b' || examId === 'group_c') {
      return `### MPSC EXAMINATION BOARD: COMBINED NON-GAZETTED PRELIMS SPEED SIMULATOR

ROLE: Chief Question Setter, MPSC.
EXAM: ${examTitle} - Combined Preliminary Examination (Speed Exam)
PARAMETERS: 100 Questions | 100 Marks (1 Mark/Question) | Duration: 60 Mins | Language: Marathi & English

OFFICIAL SYLLABUS WEIGHTAGE ENFORCEMENT (Generate exactly 100 questions):
1. General Science (Physics, Chemistry, Zoology, Botany, Hygiene) (15 Qs)
2. Current Affairs (Maharashtra, National, International) (15 Qs)
3. History (Modern India with special reference to Maharashtra) (10 Qs)
4. Geography (Maharashtra Geography, Physical, Climate, Demography) (10 Qs)
5. Indian Polity & Governance (Constitution, Panchayat Raj, State Administration) (10 Qs)
6. Indian Economy & Planning (Banking, Budget, Population, Poverty) (15 Qs)
7. General Mental Ability & Basic Arithmetic / Quantitative Aptitude (20 Qs)
8. Miscellaneous & Environmental Awareness (5 Qs)

MANDATES:
1. Maintain speed-exam standard with a balanced mix of single-liners (50%) and factual multi-statement traps (50%).
2. Marking: +1.0 for Correct, -0.25 (1/4th rule) for Incorrect.
3. Print Q1 to Q100 sequentially without revealing answers until submission.`;
    }

    // Default: Rajyaseva Prelims Paper 1 (GS) Full Mock
    return `### MPSC EXAMINATION BOARD: PRELIMS PAPER 1 (GS) SIMULATOR

ROLE: Chief Question Setter, MPSC.
EXAM: ${examTitle} - Preliminary Examination Paper I (Compulsory)
PARAMETERS: 100 Questions | 200 Marks (+2.0 / -0.50) | Language: Marathi

OFFICIAL SYLLABUS WEIGHTAGE ENFORCEMENT:
Generate exactly 100 questions strictly distributed as follows:
1. Current events of state, national, international importance (15 Qs)
2. History of India & Indian National Movement (Weightage to Maharashtra) (15 Qs)
3. Maharashtra, India & World Geography (Physical, Social, Economic) (15 Qs)
4. Polity and Governance (Constitution, Panchayati Raj, Public Policy) (15 Qs)
5. Economic and Social Development (Poverty, Inclusion, Demographics) (15 Qs)
6. Environmental Ecology, Bio-diversity & Climate Change (5 Qs)
7. General Science (20 Qs)

MANDATES:
1. 70% Multi-statement questions.
2. DO NOT provide answers. Print Q1 to Q100 directly. 
3. Note: Marking is +2 for correct, -0.50 for incorrect. Provide the detailed answer key ONLY after user submission.`;
  }

  /**
   * Helper: Get Official Exam Title
   */
  static getExamTitle(examId) {
    if (examId === 'group_b') return 'MPSC Group B (Subordinate Services)';
    if (examId === 'group_c') return 'MPSC Group C (Services)';
    return 'MPSC Rajyaseva (State Services)';
  }
}