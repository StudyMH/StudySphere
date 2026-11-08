export const rajyasevaMainsData = {
    id: "rajyaseva_mains",
    examId: "rajyaseva",
    stage: "mains",
    titleMr: "MPSC राज्यसेवा मुख्य परीक्षा (वर्णनात्मक पद्धत)",
    titleEn: "MPSC State Services Main Examination (Descriptive Pattern)",
    version: "1.0",
    verifiedDate: "2026-10-30",
    totalWrittenMarks: 1750, // मुलाखतीचे २७५ गुण वगळून गुणवत्ता यादीसाठीचे लेखी गुण
    interviewMarks: 275,     // व्यक्तिमत्त्व चाचणी
    grandTotalMarks: 2025,

    papers: [
        {
            id: "rajyaseva_mains_paper_1",
            paperNumber: 1,
            code: "QUAL_MAR",
            slug: "mains-qualifying-marathi",
            nameMr: "अहर्ताकारी पेपर १: मराठी भाषा",
            nameEn: "Paper 1: Marathi (Qualifying Language)",
            type: "Qualifying",
            standard: "मॅट्रिक / १० वी स्तर",
            durationHours: 3,
            marks: 300,
            qualifyingPercentage: 25, // किमान ७५ गुण आवश्यक; गुणवत्ता यादीत धरले जात नाहीत
            descriptionMr: "निबंध, गद्य आकलन, संक्षेप लेखन, भाषांतर व व्यावहारिक व्याकरण",
            descriptionEn: "Essay, Reading Comprehension, Précis Writing, Translation & Grammar",
            subjects: [
                {
                    id: "sub_mains_qualifying_marathi",
                    code: "QUAL_MAR_SUB",
                    slug: "mains-qualifying-marathi-curriculum",
                    nameMr: "मराठी भाषा (अहर्ताकारी अभ्यासक्रम)",
                    nameEn: "Marathi Language (Qualifying Curriculum)",
                    name: "मराठी भाषा - अहर्ताकारी (Marathi Qualifying Paper - Matriculation Level)",
                    officialScope: "मराठी भाषा अहर्ताकारी पेपर: निबंध लेखन, गद्य आकलन, संक्षेप लेखन, इंग्रजीतून मराठी भाषांतर आणि व्यावहारिक व्याकरण व शब्दसंग्रह (मॅट्रिक / १० वी स्तर - ३०० गुण, २५% अहर्ताकारी निकष)",
                    version: "1.0",
                    verifiedDate: "2026-10-28",
                    notesJsonBaseDir: "/data/notes/mains_marathi/",


                    theme: {
                        primaryColor: "#ea580c",        // Deep Orange / Marathi Language Theme
                        bgColor: "#fff7ed",
                        iconClass: "ri-quill-pen-line"
                    },


                    metrics: {
                        totalChapters: 5,
                        totalEstimatedHours: 45,
                        totalMarks: 300,
                        qualifyingCutoffMarks: 75,      // २५% गुण अनिवार्य (गुणवत्ता यादीत धरले जात नाहीत)
                        paperDurationHours: 3
                    },


                    subjectTags: [
                        "Mains-Qualifying",
                        "Paper-1-Mains",
                        "Descriptive-Subjective",
                        "Language-Proficiency",
                        "Matriculation-Level",
                        "Non-Merit-Mandatory"
                    ],


                    filterCategory: "MAINS_QUALIFYING",
                    searchKeywords: [
                        "mains marathi qualifying", "marathi essay writing", "marathi precis writing",
                        "marathi comprehension", "english to marathi translation", "marathi grammar",
                        "मराठी अहर्ताकारी पेपर", "मराठी निबंध लेखन", "संक्षेप लेखन", "गद्य आकलन", "भाषांतर", "व्यावहारिक मराठी व्याकरण"
                    ],


                    referenceSources: [
                        {
                            name: "MPSC राज्यसेवा मुख्य परीक्षा अधिकृत अभ्यासक्रम (Descriptive)",
                            role: "अधिकृत परीक्षा-संदर्भ",
                            url: "https://mpsc.org.in/"
                        },
                        {
                            name: "सुगम मराठी व्याकरण व लेखन - मो. रा. वाळंबे",
                            role: "प्रमाणित व्याकरण, निबंध व संक्षेप लेखन संदर्भ"
                        },
                        {
                            name: "मराठी शब्दरचना व शुद्धलेखन नियम - महाराष्ट्र राज्य साहित्य आणि संस्कृती मंडळ",
                            role: "शासकीय प्रमाण भाषा व शुद्धलेखन नियम"
                        },
                        {
                            name: "महाराष्ट्र राज्य पाठ्यपुस्तक निर्मिती मंडळ (Balbharati)",
                            role: "इयत्ता १० वी मराठी (कुमारभारती) पाठ्यपुस्तक",
                            url: "https://balbharati.co.in/EHome.php"
                        }
                    ],


                    chapters: [
                        // =========================================================================
                        // प्रकरण १ — मराठी निबंध लेखन (Marathi Essay Writing)
                        // =========================================================================
                        {
                            id: "m_mar_chap_01",
                            code: "QM01",
                            section: "Writing Skills",
                            slug: "marathi-essay-writing-techniques-and-topics",
                            nameMr: "मराठी निबंध लेखन: रचना, तंत्र व विषयवार सराव",
                            nameEn: "Marathi Essay Writing: Structure, Strategy & Practice",
                            name: "मराठी निबंध लेखन (Marathi Essay Writing)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 12,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_mar_01",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: null,
                            nextChapterId: "m_mar_chap_02",
                            metaDescriptionMr: "अहर्ताकारी पेपरसाठी साधारण ४०० ते ५०० शब्दांचा निबंध, प्रभावी प्रस्तावना, सुभाषिते-अवतरणे, मुख्य गाभा, आणि सकारात्मक निष्कर्ष.",
                            metaDescriptionEn: "Techniques for drafting 400-500 word essays in Marathi: effective introduction, quotations, coherent body, and balanced conclusion.",
                            notesJsonPath: "/data/notes/mains_marathi/qm01_essay.json",
                            quizTag: "mains_mar_essay_01",
                            tags: ["Essay Writing", "Descriptive Marathi", "Introduction Conclusion", "Quotations", "Current Topics"],
                            searchKeywords: ["marathi essay writing", "nibandh lekhan", "mpsc mains essay marathi", "मराठी निबंध लेखन", "निबंधाचे प्रकार", "प्रभावी प्रस्तावना"],
                            topics: [
                                {
                                    id: "top_qm01_01",
                                    nameMr: "निबंधाची त्रिस्तरीय रचना व लेखन तंत्र",
                                    nameEn: "Three-Tier Structure of Essay & Drafting Techniques",
                                    subtopics: [
                                        {
                                            id: "st_qm01_01_01",
                                            titleMr: "प्रभावी प्रस्तावना: अवतरणे, म्हणी, श्लोक किंवा चालू घडामोडींच्या संदर्भाने विषयात प्रवेश",
                                            titleEn: "Introduction: Quotations, Proverbs & Contextual Current Affairs Openings",
                                            chips: ["प्रभावी प्रस्तावना", "अवतरणे व सुभाषिते", "विषय प्रवेश"]
                                        },
                                        {
                                            id: "st_qm01_01_02",
                                            titleMr: "विषयाचा मुख्य गाभा: परिच्छेद रचना, मुद्यांमधील सुसंगती, साधक-बाधक चर्चा आणि उदाहरणे",
                                            titleEn: "Body Paragraphs: Coherence, Flow, Pro-Con Analysis & Supporting Arguments",
                                            chips: ["परिच्छेद सुसंगती", "साधक-बाधक चर्चा", "वस्तुनिष्ठ उदाहरणे"]
                                        },
                                        {
                                            id: "st_qm01_01_03",
                                            titleMr: "सकारात्मक निष्कर्ष: समस्यांवरील उपाय, भविष्याभिमुख दृष्टिकोन आणि समतोल शेवट",
                                            titleEn: "Balanced Conclusion: Actionable Solutions, Forward-looking Vision & Summary",
                                            chips: ["भविष्याभिमुख निष्कर्ष", "समतोल शेवट", "उपाययोजना"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सुगम मराठी व्याकरण व लेखन - मो. रा. वाळंबे", standard: "प्रमाणित संदर्भ", chapterRef: "निबंध लेखन विभाग" }
                                    ]
                                },
                                {
                                    id: "top_qm01_02",
                                    nameMr: "वारंवार विचारले जाणारे विषयवर्ग व रूपरेषा सराव",
                                    nameEn: "High-Probability Essay Themes & Outlining Practice",
                                    subtopics: [
                                        {
                                            id: "st_qm01_02_01",
                                            titleMr: "सामाजिक व पर्यावरणीय विषय: महिला सक्षमीकरण, शिक्षण पद्धती, जलसंकट, प्रदूषण आणि शेतकरी समस्या",
                                            titleEn: "Social & Environmental Themes: Women Empowerment, Education, Water Crisis, Agriculture",
                                            chips: ["महिला सक्षमीकरण", "शेतकरी प्रश्न", "पर्यावरण रक्षण"]
                                        },
                                        {
                                            id: "st_qm01_02_02",
                                            titleMr: "विज्ञान, तंत्रज्ञान व तात्विक विषय: कृत्रिम बुद्धिमत्ता - शाप की वरदान, सोशल मीडिया, आणि मूल्यशिक्षण",
                                            titleEn: "Science, Technology & Philosophical Themes: AI Impacts, Social Media, Ethics",
                                            chips: ["विज्ञान व तंत्रज्ञान निबंध", "सोशल मीडिया प्रभाव", "तात्विक निबंध"]
                                        }
                                    ],
                                    sources: [
                                        { book: "बालभारती मराठी कुमारभारती", standard: "इयत्ता १० वी", chapterRef: "उपयोजित लेखन: निबंध" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण २ — गद्य आकलन (Reading Comprehension in Marathi)
                        // =========================================================================
                        {
                            id: "m_mar_chap_02",
                            code: "QM02",
                            section: "Comprehension",
                            slug: "marathi-descriptive-reading-comprehension",
                            nameMr: "गद्य आकलन: वर्णनात्मक उत्तरे व आशयग्रहण",
                            nameEn: "Descriptive Reading Comprehension & Answering Strategy",
                            name: "गद्य आकलन (Descriptive Reading Comprehension)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 8,
                            isMaharashtraReference: false,
                            trackingKey: "progress_m_mar_02",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_mar_chap_01",
                            nextChapterId: "m_mar_chap_03",
                            metaDescriptionMr: "अपरिचित गद्य उतारा वाचून दिलेल्या प्रश्नांची स्वतःच्या शब्दांत परिपूर्ण, नेमकी व व्याकरणशुद्ध वर्णनात्मक उत्तरे लिहिण्याचे तंत्र.",
                            metaDescriptionEn: "Techniques for answering descriptive questions on unseen Marathi passages using precise, grammatically sound language in one's own words.",
                            notesJsonPath: "/data/notes/mains_marathi/qm02_comprehension.json",
                            quizTag: "mains_mar_comp_01",
                            tags: ["Reading Comprehension", "Descriptive Answers", "Own Words Expression", "Class-X-Level"],
                            searchKeywords: ["marathi comprehension", "gadya aakalan", "mains marathi passage questions", "गद्य आकलन", "अपरिचित उतारा", "स्वतःच्या शब्दांत उत्तरे"],
                            topics: [
                                {
                                    id: "top_qm02_01",
                                    nameMr: "उतारा वाचन, आशय विश्लेषण व उत्तर लेखन कौशल्य",
                                    nameEn: "Passage Analysis & Descriptive Answer Writing",
                                    subtopics: [
                                        {
                                            id: "st_qm02_01_01",
                                            titleMr: "उताऱ्याचे बारकाईने वाचन, मुख्य मध्यवर्ती विचार शोधणे आणि विचारलेल्या प्रश्नांचा नेमका रोख ओळखणे",
                                            titleEn: "Careful Reading, Central Idea Identification & Dissecting Question Demand",
                                            chips: ["मुख्य विचार ओळखणे", "प्रश्नाचा नेमका रोख", "महत्त्वाचे मुद्दे अधोरेखित करणे"]
                                        },
                                        {
                                            id: "st_qm02_01_02",
                                            titleMr: "उत्तर लेखनाचे नियम: उताऱ्यातील वाक्ये जशीच्या तशी न उतरवता स्वतःच्या भाषेत नेमके उत्तर मांडणे",
                                            titleEn: "Golden Rules: Paraphrasing in Own Words vs Avoiding Direct Line Lifting",
                                            chips: ["स्वतःच्या शब्दांत मांडणी", "थेट वाक्ये न उतरवणे", "मुद्देसूद उत्तर"]
                                        },
                                        {
                                            id: "st_qm02_01_03",
                                            titleMr: "भाषिक अचूकता, सुटसुटीत वाक्यरचना आणि शब्दमर्यादेचे तंतोतंत पालन",
                                            titleEn: "Grammatical Correctness, Sentence Structure & Adhering to Word Limits",
                                            chips: ["शुद्ध वाक्यरचना", "शब्दमर्यादा पालन", "हक्काचे गुण"]
                                        }
                                    ],
                                    sources: [
                                        { book: "बालभारती मराठी अक्षरभारती/कुमारभारती", standard: "इयत्ता १० वी", chapterRef: "अपठित गद्य आकलन" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ३ — संक्षेप लेखन (Précis Writing)
                        // =========================================================================
                        {
                            id: "m_mar_chap_03",
                            code: "QM03",
                            section: "Writing Skills",
                            slug: "marathi-precis-writing-one-third-summary",
                            nameMr: "संक्षेप लेखन: १/३ सारांश, नियम व योग्य शीर्षक",
                            nameEn: "Précis Writing: One-Third Summary Rules & Title Selection",
                            name: "संक्षेप लेखन (Précis Writing)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 7,
                            isMaharashtraReference: false,
                            trackingKey: "progress_m_mar_03",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_mar_chap_02",
                            nextChapterId: "m_mar_chap_04",
                            metaDescriptionMr: "दिल्या गेलेल्या उताऱ्याचा १/३ भागात सारांश लिहिणे, मूळ आशय न सोडता अनावश्यक उदाहरणे वगळणे, आणि समर्पक शीर्षक देणे.",
                            metaDescriptionEn: "Drafting a one-third precis of given passage without losing original essence, dropping redundant examples, and giving suitable title.",
                            notesJsonPath: "/data/notes/mains_marathi/qm03_precis.json",
                            quizTag: "mains_mar_precis_01",
                            tags: ["Precis Writing", "One Third Summary", "Suitable Title", "Concise Drafting", "Class-X-Level"],
                            searchKeywords: ["precis writing marathi", "sankshep lekhan", "one third summary", "saransh lekhan", "संक्षेप लेखन", "सारांश लेखन", "१/३ संक्षेप", "योग्य शीर्षक"],
                            topics: [
                                {
                                    id: "top_qm03_01",
                                    nameMr: "संक्षेप लेखनाची मूलतत्त्वे, पायऱ्या व योग्य शीर्षक",
                                    nameEn: "Précis Writing Fundamentals, Steps & Title Formulation",
                                    subtopics: [
                                        {
                                            id: "st_qm03_01_01",
                                            titleMr: "संक्षेप लेखनाचे मूलभूत नियम: एकूण शब्द मोजणे, १/३ शब्दमर्यादा ठरवणे (उदा. ३०० शब्दांचा उतारा -> सुमारे १०० शब्द)",
                                            titleEn: "Core Principles: Word Count Calculation & Exact 1/3rd Target Formulation",
                                            chips: ["१/३ शब्दमर्यादा", "शब्द संख्या मोजणी", "प्रमाणबद्ध सारांश"]
                                        },
                                        {
                                            id: "st_qm03_01_02",
                                            titleMr: "काय वगळावे? उदाहरणे, आलंकारिक भाषा, पुनरावृत्ती, म्हणी आणि लेखकाची वैयक्तिक अवतरणे गाळणे",
                                            titleEn: "What to Omit: Repetitions, Lengthy Examples, Idioms & Digressions",
                                            chips: ["उदाहरणे वगळणे", "अनावश्यक अलंकार गाळणे", "केवळ मुख्य विचार ठेवणे"]
                                        },
                                        {
                                            id: "st_qm03_01_03",
                                            titleMr: "कच्चा मसुदा ते पक्का मसुदा तयार करणे आणि संपूर्ण उताऱ्याचे प्रतिनिधित्व करणारे समर्पक शीर्षक देणे",
                                            titleEn: "Rough Draft to Final Draft Iteration & Selecting an Apt, Concise Title",
                                            chips: ["कच्चा व पक्का मसुदा", "समर्पक शीर्षक", "तृतीय पुरुषी भाषा"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सुगम मराठी व्याकरण व लेखन - मो. रा. वाळंबे", standard: "प्रमाणित संदर्भ", chapterRef: "सारांश लेखन" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ४ — भाषांतर (Translation: English to Marathi)
                        // =========================================================================
                        {
                            id: "m_mar_chap_04",
                            code: "QM04",
                            section: "Translation",
                            slug: "translation-english-to-marathi-passage",
                            nameMr: "भाषांतर: इंग्रजीतून मराठी (Translation - English to Marathi)",
                            nameEn: "Translation: English Passage into Marathi",
                            name: "भाषांतर - इंग्रजीतून मराठी (Translation: English to Marathi)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 8,
                            isMaharashtraReference: false,
                            trackingKey: "progress_m_mar_04",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_mar_chap_03",
                            nextChapterId: "m_mar_chap_05",
                            metaDescriptionMr: "इंग्रजी उताऱ्याचे सुगम, प्रवाही व व्याकरणशुद्ध मराठीत भाषांतर, शब्दशः भाषांतराचे धोके टाळणे, आणि प्रशासकीय पारिभाषिक संज्ञा.",
                            metaDescriptionEn: "Techniques for translating English passages into fluent Marathi, avoiding word-to-word literal translation traps, and handling idioms/terminology.",
                            notesJsonPath: "/data/notes/mains_marathi/qm04_translation.json",
                            quizTag: "mains_mar_trans_01",
                            tags: ["Translation Skills", "English to Marathi", "Idiomatic Fluency", "Administrative Terminology", "Class-X-Level"],
                            searchKeywords: ["translation english to marathi", "bhashantar", "mpsc translation", "भाषांतर इंग्रजी ते मराठी", "प्रवाही भाषांतर", "पारिभाषिक शब्द"],
                            topics: [
                                {
                                    id: "top_qm04_01",
                                    nameMr: "भाषांतर तंत्रज्ञान, वाक्यरचना रूपांतर व पारिभाषिक संज्ञा",
                                    nameEn: "Translation Dynamics, Sentence Restructuring & Terminology",
                                    subtopics: [
                                        {
                                            id: "st_qm04_01_01",
                                            titleMr: "वाक्यरचना रूपांतर: इंग्रजी वाक्यरचना (SVO: कर्ता + क्रियापद + कर्म) चे मराठी वाक्यरचनेत (SOV: कर्ता + कर्म + क्रियापद) अचूक रूपांतर",
                                            titleEn: "Syntactic Reordering: English SVO Structure to Marathi SOV Structure",
                                            chips: ["SVO ते SOV रूपांतर", "क्रियापदाचे स्थान", "स्वाभाविक मराठी वाक्यरचना"]
                                        },
                                        {
                                            id: "st_qm04_01_02",
                                            titleMr: "शब्दशः भाषांतर (Literal Translation) टाळणे आणि उताऱ्यातील मूळ भावार्थ जपणारे प्रवाही भाषांतर (Free/Sense Translation) करणे",
                                            titleEn: "Avoiding Word-for-Word Literal Traps & Ensuring Idiomatic Natural Flow",
                                            chips: ["शब्दशः भाषांतर टाळणे", "भावार्थ जपणे", "प्रवाही मराठी"]
                                        },
                                        {
                                            id: "st_qm04_01_03",
                                            titleMr: "इंग्रजी वाक्प्रचार व म्हणींचे मराठीतील समतुल्य वाक्प्रचारांमध्ये रूपांतर आणि शासकीय पारिभाषिक संज्ञांची अचूकता",
                                            titleEn: "Handling Idioms, Phrasal Verbs & Official Administrative Terms in Translation",
                                            chips: ["समतुल्य वाक्प्रचार", "प्रशासकीय पारिभाषिक संज्ञा", "काळांचे अचूक रूपांतर"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भाषा संचलनालय महाराष्ट्र शासन", standard: "शासकीय शब्दकोश", chapterRef: "प्रशासकीय पारिभाषिक शब्दसंग्रह" },
                                        { book: "सुगम मराठी व्याकरण - मो. रा. वाळंबे", standard: "प्रमाणित संदर्भ", chapterRef: "भाषांतर कौशल्य" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ५ — व्यावहारिक व्याकरण व शुद्धलेखन (Applied Grammar & Vocabulary)
                        // =========================================================================
                        {
                            id: "m_mar_chap_05",
                            code: "QM05",
                            section: "Grammar & Vocabulary",
                            slug: "applied-marathi-grammar-vocabulary-and-shuddhalekhan",
                            nameMr: "व्यावहारिक मराठी व्याकरण, शब्दसंग्रह व शुद्धलेखन नियम",
                            nameEn: "Applied Marathi Grammar, Vocabulary & Orthography Rules",
                            name: "व्यावहारिक मराठी व्याकरण व शब्दसंग्रह (Applied Grammar & Vocabulary)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 8,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_mar_05",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "m_mar_chap_04",
                            nextChapterId: null,
                            metaDescriptionMr: "शब्दांच्या जाती, प्रयोग, समास, समानार्थी-विरुद्धार्थी शब्द, वाक्प्रचार, म्हणी, आणि महाराष्ट्र साहित्य महामंडळाचे अधिकृत शुद्धलेखन नियम.",
                            metaDescriptionEn: "Comprehensive review of Parts of Speech, Prayog, Samas, Synonyms/Antonyms, Idioms, Proverbs, and Official Shuddhalekhan rules.",
                            notesJsonPath: "/data/notes/mains_marathi/qm05_grammar.json",
                            quizTag: "mains_mar_gram_01",
                            tags: ["Marathi Grammar", "Shuddhalekhan Rules", "Prayog Samas", "Synonyms Antonyms", "Idioms Proverbs", "Walimbe", "Class-X-Level"],
                            searchKeywords: ["marathi grammar", "shuddhalekhan niyam", "prayog", "samas", "synonyms antonyms marathi", "marathi vakprachar", "मराठी व्याकरण", "शुद्धलेखन नियम", "प्रयोग", "समास", "समानार्थी विरुद्धार्थी", "वाक्प्रचार म्हणी"],
                            topics: [
                                {
                                    id: "top_qm05_01",
                                    nameMr: "व्यावहारिक व्याकरण: शब्दांच्या जाती, प्रयोग, समास व वाक्यरूपांतर",
                                    nameEn: "Core Applied Grammar: Parts of Speech, Voice, Compounds & Transformations",
                                    subtopics: [
                                        {
                                            id: "st_qm05_01_01",
                                            titleMr: "शब्दांच्या ८ जाती (नाम, सर्वनाम, विशेषण, क्रियापद व अव्यये); लिंग, वचन आणि विभक्ती प्रत्यय व कारकार्थ",
                                            titleEn: "8 Parts of Speech, Gender, Number & Vibhakti Inflections with Karaka Roles",
                                            chips: ["शब्दांच्या जाती", "विभक्ती व कारकार्थ", "लिंग व वचन बदल"]
                                        },
                                        {
                                            id: "st_qm05_01_02",
                                            titleMr: "प्रयोग विचार (कर्तरी, कर्मणी व भावे प्रयोग - ओळख व रूपांतर) आणि समास (अव्ययीभाव, तत्पुरुष, द्वंद्व, बहुव्रीही)",
                                            titleEn: "Prayog (Active, Passive, Impersonal Voices) & Samas (Compound Words Classification)",
                                            chips: ["कर्तरी, कर्मणी, भावे प्रयोग", "४ मुख्य समास", "समासाचा विग्रह"]
                                        },
                                        {
                                            id: "st_qm05_01_03",
                                            titleMr: "वाक्यप्रकार व वाक्यरूपांतर: विधानाार्थी, प्रश्नार्थी, उद्गारार्थी, आज्ञार्थी; केवल, मिश्र व संयुक्त वाक्य रूपांतर",
                                            titleEn: "Sentence Types & Transformation: Simple, Complex, Compound & Declarative Transformations",
                                            chips: ["वाक्यरूपांतर", "केवल, मिश्र, संयुक्त वाक्य", "नकारार्थी ते होकारार्थी"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सुगम मराठी व्याकरण व लेखन - मो. रा. वाळंबे", standard: "प्रमाणित संदर्भ", chapterRef: "प्रकरणे १ ते २०: संपूर्ण व्याकरण" }
                                    ]
                                },
                                {
                                    id: "top_qm05_02",
                                    nameMr: "शब्दसंग्रह व अधिकृत शुद्धलेखन नियम",
                                    nameEn: "Vocabulary, Idioms & Official Orthography (Shuddhalekhan)",
                                    subtopics: [
                                        {
                                            id: "st_qm05_02_01",
                                            titleMr: "शब्दसंपदा: समानार्थी शब्द, विरुद्धार्थी शब्द, अलंकारिक शब्द, शब्दसमूहाबद्दल एक शब्द आणि ध्वनीदर्शक शब्द",
                                            titleEn: "Word Power: Synonyms, Antonyms, Metaphorical Words & One-word Substitutions",
                                            chips: ["समानार्थी शब्द", "विरुद्धार्थी शब्द", "अलंकारिक शब्द", "शब्दसमूहाबद्दल एक शब्द"]
                                        },
                                        {
                                            id: "st_qm05_02_02",
                                            titleMr: "प्रमाण वाक्प्रचार व म्हणी: वाक्यात अचूक उपयोग, अर्थ स्पष्ट करणे आणि जोड्या जुळवणे",
                                            titleEn: "Standard Idioms & Proverbs: Contextual Sentence Construction & Meaning Deciphering",
                                            chips: ["वाक्प्रचारांचा वाक्यात उपयोग", "म्हणींचा अर्थ", "पारंपरिक म्हणी"]
                                        },
                                        {
                                            id: "st_qm05_02_03",
                                            titleMr: "महाराष्ट्र साहित्य महामंडळाचे १४ अधिकृत शुद्धलेखन नियम: अनुस्वार नियम, ऱ्हस्व-दीर्घ नियम, पर-सवर्ण आणि विरामचिन्हे",
                                            titleEn: "14 Official Shuddhalekhan Rules: Anuswara, Short/Long Vowels & Punctuation Marks",
                                            chips: ["१४ शुद्धलेखन नियम", "अनुस्वार नियम", "ऱ्हस्व-दीर्घ नियम", "विरामचिन्हे"]
                                        }
                                    ],
                                    sources: [
                                        { book: "मराठी शुद्धलेखन प्रदीप - मो. रा. वाळंबे / अरुण फडके", standard: "प्रमाणित भाषा संदर्भ", chapterRef: "शुद्धलेखनाचे अधिकृत नियम" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "rajyaseva_mains_paper_2",
            paperNumber: 2,
            code: "QUAL_ENG",
            slug: "mains-qualifying-english",
            nameMr: "अहर्ताकारी पेपर २: इंग्रजी भाषा",
            nameEn: "Paper 2: English (Qualifying Language)",
            type: "Qualifying",
            standard: "Matriculation / Class X Level",
            durationHours: 3,
            marks: 300,
            qualifyingPercentage: 25, // किमान ७५ गुण आवश्यक; गुणवत्ता यादीत धरले जात नाहीत
            descriptionMr: "Essay, Comprehension, Précis Writing, Translation & Vocabulary",
            descriptionEn: "Essay, Comprehension, Précis Writing, Translation & Vocabulary",
            subjects: [
                {
                    id: "sub_mains_qualifying_english",
                    code: "QUAL_ENG_SUB",
                    slug: "mains-qualifying-english-curriculum",
                    nameMr: "इंग्रजी भाषा (अहर्ताकारी अभ्यासक्रम)",
                    nameEn: "English Language (Qualifying Curriculum)",
                    name: "इंग्रजी भाषा - अहर्ताकारी (English Qualifying Paper - Matriculation Level)",
                    officialScope: "English Language Qualifying Paper: Essay, Reading Comprehension, Précis Writing, Marathi to English Translation, and Applied Grammar & Vocabulary (Matriculation / Class X Level - 300 Marks, 25% Qualifying Cutoff)",
                    version: "1.0",
                    verifiedDate: "2026-10-28",
                    notesJsonBaseDir: "/data/notes/mains_english/",


                    theme: {
                        primaryColor: "#2563eb",        // Royal Blue / English Language Theme
                        bgColor: "#eff6ff",
                        iconClass: "ri-english-input"
                    },


                    metrics: {
                        totalChapters: 5,
                        totalEstimatedHours: 45,
                        totalMarks: 300,
                        qualifyingCutoffMarks: 75,      // २५% गुण अनिवार्य (गुणवत्ता यादीत धरले जात नाहीत)
                        paperDurationHours: 3
                    },


                    subjectTags: [
                        "Mains-Qualifying",
                        "Paper-2-Mains",
                        "Descriptive-Subjective",
                        "Language-Proficiency",
                        "Matriculation-Level",
                        "Non-Merit-Mandatory"
                    ],


                    filterCategory: "MAINS_QUALIFYING",
                    searchKeywords: [
                        "mains english qualifying", "english essay writing", "english precis writing",
                        "english comprehension", "marathi to english translation", "english grammar",
                        "इंग्रजी अहर्ताकारी पेपर", "इंग्रजी निबंध लेखन", "इंग्रजी संक्षेप लेखन", "गद्य आकलन इंग्रजी", "मराठीतून इंग्रजी भाषांतर", "व्यावहारिक इंग्रजी व्याकरण"
                    ],


                    referenceSources: [
                        {
                            name: "MPSC राज्यसेवा मुख्य परीक्षा अधिकृत अभ्यासक्रम (Descriptive)",
                            role: "अधिकृत परीक्षा-संदर्भ",
                            url: "https://mpsc.org.in/"
                        },
                        {
                            name: "High School English Grammar & Composition - Wren & Martin",
                            role: "प्रमाणित व्याकरण, निबंध व रचना संदर्भ ग्रंथ"
                        },
                        {
                            name: "Word Power Made Easy - Norman Lewis",
                            role: "शब्दसंग्रह व शब्दसंपदा समृद्धी"
                        },
                        {
                            name: "NCERT Class 10 English (First Flight & Footprints)",
                            role: "मॅट्रिक स्तरावरील भाषा आकलन व लेखन कौशल्ये",
                            url: "https://ncert.nic.in/textbook.php"
                        }
                    ],


                    chapters: [
                        // =========================================================================
                        // प्रकरण १ — इंग्रजी निबंध लेखन (English Essay Writing)
                        // =========================================================================
                        {
                            id: "m_eng_chap_01",
                            code: "QE01",
                            section: "Writing Skills",
                            slug: "english-essay-writing-techniques-and-structure",
                            nameMr: "इंग्रजी निबंध लेखन: रचना, तंत्र व विषयवार सराव",
                            nameEn: "English Essay Writing: Structure, Style & Thematic Practice",
                            name: "इंग्रजी निबंध लेखन (English Essay Writing)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 12,
                            isMaharashtraReference: false,
                            trackingKey: "progress_m_eng_01",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: null,
                            nextChapterId: "m_eng_chap_02",
                            metaDescriptionMr: "अहर्ताकारी पेपरसाठी साधारण ४०० ते ५०० शब्दांचा इंग्रजी निबंध, Paragraph transitions, quotations, clear thesis statement आणि conclusion.",
                            metaDescriptionEn: "Guidelines for drafting 400-500 word essays in English: opening hooks, thesis statements, body paragraph coherence, and impactful conclusion.",
                            notesJsonPath: "/data/notes/mains_english/qe01_essay.json",
                            quizTag: "mains_eng_essay_01",
                            tags: ["Essay Writing", "Descriptive English", "Paragraph Coherence", "Thesis Statement", "Class-X-Level"],
                            searchKeywords: ["english essay writing", "essay structure", "mpsc mains essay english", "इंग्रजी निबंध", "paragraph transitions", "essay conclusions"],
                            topics: [
                                {
                                    id: "top_qe01_01",
                                    nameMr: "निबंधाची रचना, प्रवाह व मांडणी तंत्र",
                                    nameEn: "Essay Architecture, Flow & Argument Formulation",
                                    subtopics: [
                                        {
                                            id: "st_qe01_01_01",
                                            titleMr: "प्रभावी सुरुवात (The Hook & Introduction): अवतरणे (Quotes), सांख्यिकी संदर्भ, आणि स्पष्ट Thesis Statement मांडणे",
                                            titleEn: "Opening Hooks, Context Setting & Crafting an Unambiguous Thesis Statement",
                                            chips: ["Opening Hook", "Thesis Statement", "Introduction Techniques"]
                                        },
                                        {
                                            id: "st_qe01_01_02",
                                            titleMr: "मुख्य गाभा (Body Paragraphs): PEEF पद्धत (Point, Explanation, Example, Focus), परिच्छेदांमधील सुसंगती व Connectors चा वापर",
                                            titleEn: "Body Paragraph Coherence: PEEF Formula (Point, Explain, Example, Focus) & Transitional Devices",
                                            chips: ["PEEF Formula", "Transitional Connectors", "Coherent Paragraphs"]
                                        },
                                        {
                                            id: "st_qe01_01_03",
                                            titleMr: "परिणामकारक शेवट (Conclusion): मुख्य मुद्यांचे पुनरावलोकन, समतोल उपाययोजना आणि भविष्याभिमुख दृष्टिकोन",
                                            titleEn: "Effective Conclusion: Synthesising Arguments & Providing a Forward-Looking Closure",
                                            chips: ["Synthesised Conclusion", "Balanced Outlook", "Way Forward"]
                                        }
                                    ],
                                    sources: [
                                        { book: "High School English Grammar & Composition - Wren & Martin", standard: "प्रमाणित संदर्भ", chapterRef: "Essay Writing Section" }
                                    ]
                                },
                                {
                                    id: "top_qe01_02",
                                    nameMr: "वारंवार येणारे प्रमुख विषयवर्ग व रूपरेषा सराव",
                                    nameEn: "Standard Essay Themes & Outlining Practice",
                                    subtopics: [
                                        {
                                            id: "st_qe01_02_01",
                                            titleMr: "सामाजिक व आर्थिक विषय: Role of Youth, Climate Change, Digital India, Women Safety, Health & Education",
                                            titleEn: "Socio-Economic Themes: Women Empowerment, Climate Crisis, Education Reforms & Digital Economy",
                                            chips: ["Digital India", "Climate Crisis", "Women Safety & Empowerment"]
                                        },
                                        {
                                            id: "st_qe01_02_02",
                                            titleMr: "तात्विक व सामान्य विषय: Discipline in Life, Science: Boon or Bane, National Unity, Value of Free Press",
                                            titleEn: "Reflective & Philosophical Themes: Importance of Discipline, Media Ethics, Science & Society",
                                            chips: ["Science Boon or Bane", "National Integration", "Ethics & Values"]
                                        }
                                    ],
                                    sources: [
                                        { book: "NCERT Class 10 English First Flight", standard: "Class 10", chapterRef: "Writing Skills: Extended Writing" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण २ — इंग्रजी गद्य आकलन (Reading Comprehension in English)
                        // =========================================================================
                        {
                            id: "m_eng_chap_02",
                            code: "QE02",
                            section: "Comprehension",
                            slug: "english-descriptive-reading-comprehension",
                            nameMr: "इंग्रजी गद्य आकलन: वर्णनात्मक उत्तरे व आशयग्रहण",
                            nameEn: "English Reading Comprehension: Descriptive Answering & Critical Reading",
                            name: "इंग्रजी गद्य आकलन (English Reading Comprehension)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 8,
                            isMaharashtraReference: false,
                            trackingKey: "progress_m_eng_02",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_eng_chap_01",
                            nextChapterId: "m_eng_chap_03",
                            metaDescriptionMr: "अपरिचित इंग्रजी उतारा वाचून विचारलेल्या वर्णनात्मक प्रश्नांची स्वतःच्या शब्दांत व्याकरणशुद्ध व नेमकी उत्तरे लिहिण्याचे तंत्र.",
                            metaDescriptionEn: "Mastering descriptive answers on unseen English passages using precise vocabulary, grammatical fidelity, and paraphrasing skills.",
                            notesJsonPath: "/data/notes/mains_english/qe02_comprehension.json",
                            quizTag: "mains_eng_comp_01",
                            tags: ["Reading Comprehension", "Descriptive Answers", "Paraphrasing", "Class-X-Level"],
                            searchKeywords: ["english comprehension", "unseen passage answers", "mpsc mains english passage", "गद्य आकलन इंग्रजी", "स्वतःच्या शब्दांत उत्तरे", "paraphrasing technique"],
                            topics: [
                                {
                                    id: "top_qe02_01",
                                    nameMr: "उतारा विश्लेषण, तथ्य शोधणे व वर्णनात्मक उत्तर लेखन",
                                    nameEn: "Textual Analysis, Fact Extraction & Descriptive Answer Formulation",
                                    subtopics: [
                                        {
                                            id: "st_qe02_01_01",
                                            titleMr: "उताऱ्याचे वाचन (Skimming & Scanning), मध्यवर्ती कल्पना शोधणे आणि प्रश्नातील कळीचे शब्द (Keywords) ओळखणे",
                                            titleEn: "Skimming for Central Idea, Scanning for Details & Locating Question Keywords",
                                            chips: ["Central Idea Extraction", "Scanning Keywords", "Question Demand"]
                                        },
                                        {
                                            id: "st_qe02_01_02",
                                            titleMr: "Paraphrasing तंत्र: उताऱ्यातील मूळ वाक्ये जशीच्या तशी न उतरवता स्वतःच्या शब्दांत अचूक व संक्षिप्त उत्तर मांडणे",
                                            titleEn: "Paraphrasing Skills: Avoiding Direct Quotations & Answering in Grammatically Sound Own Words",
                                            chips: ["Paraphrasing Skills", "Own Words Expression", "Avoiding Direct Copying"]
                                        },
                                        {
                                            id: "st_qe02_01_03",
                                            titleMr: "काळाची सुसंगती (Tense Consistency): प्रश्नाचा काळ ओळखून त्यानुसार अचूक काळात पूर्ण वाक्यात उत्तर लिहिणे",
                                            titleEn: "Tense Consistency: Aligning Answer Tense with Question Framing & Sentence Punctuation",
                                            chips: ["Tense Consistency", "Complete Sentence Answers", "Punctuation"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Wren & Martin", standard: "प्रमाणित संदर्भ", chapterRef: "Comprehension of Unseen Passages" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ३ — इंग्रजी संक्षेप लेखन (Précis Writing in English)
                        // =========================================================================
                        {
                            id: "m_eng_chap_03",
                            code: "QE03",
                            section: "Writing Skills",
                            slug: "english-precis-writing-rules-and-condensation",
                            nameMr: "इंग्रजी संक्षेप लेखन: १/३ सारांश, नियम व शीर्षक",
                            nameEn: "English Précis Writing: One-Third Condensation Rules & Title Formulation",
                            name: "इंग्रजी संक्षेप लेखन (Précis Writing in English)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 8,
                            isMaharashtraReference: false,
                            trackingKey: "progress_m_eng_03",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_eng_chap_02",
                            nextChapterId: "m_eng_chap_04",
                            metaDescriptionMr: "इंग्रजी उताऱ्याचा १/३ भागात अचूक सारांश लिहिणे, Indirect Speech व Third Person चा वापर, अनावश्यक तपशील गाळणे, आणि शीर्षक देणे.",
                            metaDescriptionEn: "Techniques for condensing English passages to one-third length: using third person/past tense, omitting examples/figures, and framing a suitable title.",
                            notesJsonPath: "/data/notes/mains_english/qe03_precis.json",
                            quizTag: "mains_eng_precis_01",
                            tags: ["Precis Writing", "One Third Condensation", "Suitable Title", "Third Person Reporting", "Class-X-Level"],
                            searchKeywords: ["english precis writing", "condensation techniques", "mpsc english precis", "संक्षेप लेखन इंग्रजी", "one third summary english", "precis title"],
                            topics: [
                                {
                                    id: "top_qe03_01",
                                    nameMr: "संक्षेप लेखनाचे नियम, पायऱ्या व भाषिक बंधने",
                                    nameEn: "Précis Rules, Drafting Steps & Stylistic Constraints",
                                    subtopics: [
                                        {
                                            id: "st_qe03_01_01",
                                            titleMr: "मूलभूत नियम: शब्द संख्या मोजून १/३ मर्यादा निश्चित करणे (उदा. ३०० शब्दांचा उतारा -> ९५ ते १०५ शब्द); स्वतःची मते न जोडणे",
                                            titleEn: "Mathematical Constraints: Calculating Target Word Limit (±5% of 1/3rd) & Maintaining Objectivity",
                                            chips: ["1/3rd Word Limit", "Strict Objectivity", "Word Budgeting"]
                                        },
                                        {
                                            id: "st_qe03_01_02",
                                            titleMr: "भाषिक नियम: नेहमी तृतीय पुरुषी निवेदन (Third Person: he, she, they, the author) आणि Indirect Speech चा वापर करणे",
                                            titleEn: "Voice & Person Rules: Consistent Use of Third Person & Reported Speech (Avoiding Direct Quotes)",
                                            chips: ["Third Person Only", "Indirect Speech", "No First-Person Usage"]
                                        },
                                        {
                                            id: "st_qe03_01_03",
                                            titleMr: "काय गाळावे आणि काय ठेवावे? तपशील, आकडेमोड, उदाहरणे, उपमा-अलंकार वगळून केवळ मध्यवर्ती गाभा सुटसुटीत मांडणे आणि शीर्षक देणे",
                                            titleEn: "Pruning vs Retaining: Dropping Analogies/Examples, Preserving Core Thesis & Providing a Punchy Title",
                                            chips: ["Pruning Examples", "Retaining Core Essence", "Apt Title Framing"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Wren & Martin", standard: "प्रमाणित संदर्भ", chapterRef: "Précis Writing and Summarising" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ४ — भाषांतर: मराठीतून इंग्रजी (Translation: Marathi to English)
                        // =========================================================================
                        {
                            id: "m_eng_chap_04",
                            code: "QE04",
                            section: "Translation",
                            slug: "translation-marathi-passage-into-english",
                            nameMr: "भाषांतर: मराठीतून इंग्रजी (Translation - Marathi to English)",
                            nameEn: "Translation: Marathi Passage into Fluent English",
                            name: "भाषांतर - मराठीतून इंग्रजी (Translation: Marathi to English)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 8,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_eng_04",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_eng_chap_03",
                            nextChapterId: "m_eng_chap_05",
                            metaDescriptionMr: "मराठी उताऱ्याचे प्रवाही व व्याकरणशुद्ध इंग्रजीत भाषांतर, SOV ते SVO वाक्यरचना बदल, काळांची अचूकता, आणि योग्य Vocabulary निवड.",
                            metaDescriptionEn: "Techniques for translating Marathi passages into natural, grammatically accurate English: shifting SOV to SVO, handling complex clauses, and vocabulary choice.",
                            notesJsonPath: "/data/notes/mains_english/qe04_translation.json",
                            quizTag: "mains_eng_trans_01",
                            tags: ["Translation Skills", "Marathi to English", "SOV to SVO Shift", "Grammatical Precision", "Class-X-Level"],
                            searchKeywords: ["translation marathi to english", "bhashantar marathi english", "mpsc mains translation", "मराठीतून इंग्रजी भाषांतर", "SOV to SVO", "sentence transformation"],
                            topics: [
                                {
                                    id: "top_qe04_01",
                                    nameMr: "वाक्यरचना पुनर्मांडणी, काळांची अचूकता व भाषिक समतोल",
                                    nameEn: "Syntactic Reordering, Tense Accuracy & Idiomatic Equivalents",
                                    subtopics: [
                                        {
                                            id: "st_qe04_01_01",
                                            titleMr: "वाक्यरचना रूपांतर: मराठी वाक्यरचना (SOV: कर्ता + कर्म + क्रियापद) चे इंग्रजी वाक्यरचनेत (SVO: Subject + Verb + Object) स्वाभाविक रूपांतर",
                                            titleEn: "Structural Shift: Transforming Marathi SOV Order into Natural English SVO Syntax",
                                            chips: ["SOV to SVO Shift", "Subject-Verb Placement", "Prepositional Adjustments"]
                                        },
                                        {
                                            id: "st_qe04_01_02",
                                            titleMr: "काळांचे नियम (Tense Mapping): मराठीतील चालू, पूर्ण व रीती काळांचे इंग्रजीतील योग्य Tense Structures (उदा. Simple Past vs Present Perfect) मध्ये रूपांतर",
                                            titleEn: "Tense Mapping: Accurate Conversion of Marathi Aspectual Tenses into Appropriate English Equivalents",
                                            chips: ["Tense Mapping", "Aspectual Differences", "Modal Auxiliaries"]
                                        },
                                        {
                                            id: "st_qe04_01_03",
                                            titleMr: "मराठीतील वाक्प्रचार, म्हणी आणि औपचारिक शब्दांचे इंग्रजीतील समतुल्य प्रतिशब्द (Equivalents) वापरणे; शब्दशः भाषांतर टाळणे",
                                            titleEn: "Rendering Marathi Idioms & Formal Registers into Equivalent Idiomatic English without Word-for-Word Clumsiness",
                                            chips: ["Idiomatic Equivalents", "Avoiding Word-for-Word Traps", "Natural English Prose"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Wren & Martin", standard: "प्रमाणित संदर्भ", chapterRef: "Transformation of Sentences" },
                                        { book: "भाषा संचलनालय महाराष्ट्र शासन", standard: "शासकीय शब्दकोश", chapterRef: "इंग्रजी-मराठी-इंग्रजी पारिभाषिक शब्दसंग्रह" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ५ — व्यावहारिक व्याकरण व शब्दसंग्रह (Applied Grammar & Vocabulary)
                        // =========================================================================
                        {
                            id: "m_eng_chap_05",
                            code: "QE05",
                            section: "Grammar & Vocabulary",
                            slug: "applied-english-grammar-and-vocabulary-mastery",
                            nameMr: "व्यावहारिक इंग्रजी व्याकरण, Usage, Vocabulary व सामान्य चुका",
                            nameEn: "Applied English Grammar, Usage, Vocabulary & Error Spotting",
                            name: "व्यावहारिक इंग्रजी व्याकरण व शब्दसंपदा (Applied Grammar & Vocabulary)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 9,
                            isMaharashtraReference: false,
                            trackingKey: "progress_m_eng_05",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "m_eng_chap_04",
                            nextChapterId: null,
                            metaDescriptionMr: "Subject-Verb Agreement, Tenses, Prepositions, Voice, Narration, Synonyms, Antonyms, Idioms, Phrasal Verbs, आणि Common Errors.",
                            metaDescriptionEn: "Comprehensive review of Subject-Verb Agreement, Prepositions, Active/Passive Voice, Direct/Indirect Speech, Synonyms, Antonyms, and Error Correction.",
                            notesJsonPath: "/data/notes/mains_english/qe05_grammar.json",
                            quizTag: "mains_eng_gram_01",
                            tags: ["English Grammar", "Wren and Martin", "Subject Verb Agreement", "Prepositions", "Voice Narration", "Vocabulary Synonyms", "Class-X-Level"],
                            searchKeywords: ["english grammar", "subject verb agreement", "prepositions", "voice narration", "synonyms antonyms english", "idioms phrasal verbs", "spotting errors", "इंग्रजी व्याकरण", "preposition rules", "active passive voice"],
                            topics: [
                                {
                                    id: "top_qe05_01",
                                    nameMr: "व्यावहारिक व्याकरण: Subject-Verb Agreement, Tenses, Prepositions व रूपांतर",
                                    nameEn: "Core Functional Grammar, Syntax Rules & Sentence Transformations",
                                    subtopics: [
                                        {
                                            id: "st_qe05_01_01",
                                            titleMr: "Subject-Verb Agreement चे महत्त्वाचे नियम (उदा. Neither/Nor, As well as, Collective Nouns, Each/Every सह Verb चा वापर)",
                                            titleEn: "Subject-Verb Concord: Collective Nouns, Correlative Conjunctions & Indefinite Pronouns",
                                            chips: ["Subject-Verb Concord", "Either-Or / Neither-Nor", "Collective Nouns"]
                                        },
                                        {
                                            id: "st_qe05_01_02",
                                            titleMr: "Tenses (काळांचे अचूक नियम व कंडीशनल सेन्टेन्सेस / If Clauses) आणि Prepositions चे अचूक उपयोजन",
                                            titleEn: "Tense Rules, Conditional Clauses (Types 0, 1, 2, 3) & Fixed Prepositions with Verbs/Nouns",
                                            chips: ["Conditional Clauses", "Fixed Prepositions", "Tense Sequence"]
                                        },
                                        {
                                            id: "st_qe05_01_03",
                                            titleMr: "Active & Passive Voice, Direct & Indirect Speech, Degrees of Comparison आणि वाक्यांचे रूपांतर (Transformation of Sentences)",
                                            titleEn: "Voice (Active/Passive), Narration (Reported Speech), Degrees & Syntactic Transformations",
                                            chips: ["Active Passive Voice", "Direct Indirect Speech", "Transformation of Sentences"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Wren & Martin", standard: "प्रमाणित संदर्भ", chapterRef: "Chapters 1 to 30: Detailed Grammar Sections" }
                                    ]
                                },
                                {
                                    id: "top_qe05_02",
                                    nameMr: "शब्दसंग्रह: Synonyms, Antonyms, Idioms, Phrasal Verbs व Error Spotting",
                                    nameEn: "Vocabulary Power: Synonyms, Antonyms, Idioms & Spotting Errors",
                                    subtopics: [
                                        {
                                            id: "st_qe05_02_01",
                                            titleMr: "शब्दसंपदा: Synonyms (समानार्थी), Antonyms (विरुद्धार्थी), One-Word Substitutions आणि वारंवार गोंधळात टाकणारे शब्द (Confusing Words / Homonyms)",
                                            titleEn: "Vocabulary Enrichment: Synonyms, Antonyms, One-Word Substitutes & Commonly Confused Words",
                                            chips: ["Synonyms & Antonyms", "One-Word Substitutions", "Confusing Words (Homophones)"]
                                        },
                                        {
                                            id: "st_qe05_02_02",
                                            titleMr: "Idiomatic Expressions व Phrasal Verbs (उदा. Look into, Call off, Break down, Bring up) यांचा वाक्यात अचूक वापर",
                                            titleEn: "High-Frequency Idioms & Phrasal Verbs: Contextual Meanings & Sentence Construction",
                                            chips: ["Idioms & Phrases", "Phrasal Verbs Mastery", "Contextual Usage"]
                                        },
                                        {
                                            id: "st_qe05_02_03",
                                            titleMr: "Spotting the Errors / Sentence Correction: Articles, Modifiers, Redundancies आणि चुकीची वाक्यरचना दुरुस्त करणे",
                                            titleEn: "Error Spotting Mechanics: Articles (A/An/The), Dangling Modifiers, Redundancies & Syntax Fixes",
                                            chips: ["Articles A An The", "Spotting Errors", "Sentence Correction"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Word Power Made Easy - Norman Lewis", standard: "प्रमाणित संदर्भ", chapterRef: "Vocabulary Building" },
                                        { book: "Wren & Martin", standard: "प्रमाणित संदर्भ", chapterRef: "Idioms, Vocabulary & Common Errors" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },


        // -----------------------------------------------------------------------
        // विभाग २: गुणवत्ता यादीचे अनिवार्य पेपर्स (Merit Papers 3 to 7)
        // -----------------------------------------------------------------------
        {
            id: "rajyaseva_mains_paper_3",
            paperNumber: 3,
            code: "ESSAY",
            slug: "mains-essay-paper",
            nameMr: "पेपर ३: निबंध",
            nameEn: "Paper 3: Essay",
            type: "Merit",
            standard: "पदवी स्तर",
            durationHours: 3,
            marks: 250,
            descriptionMr: "दोन वेगवेगळ्या विभागांतून प्रत्येकी एक असे २ सविस्तर निबंध (तात्विक, सामाजिक, आर्थिक, राजकीय, पर्यावरण)",
            descriptionEn: "Two in-depth essays from multiple sections (Philosophical, Socio-Economic, Polity & Environment)",
            subjects: [
                {
                    id: "sub_mains_merit_essay",
                    code: "ESSAY_SUB",
                    slug: "mains-merit-essay-paper-curriculum",
                    nameMr: "निबंध लेखन (गुणवत्ता यादी अभ्यासक्रम)",
                    nameEn: "Essay Paper (Merit Curriculum)",
                    name: "निबंध - गुणवत्ता यादी पेपर (Paper 3: Essay - 250 Marks)",
                    officialScope: "MPSC State Services Mains Paper 3 (Essay): Candidates are expected to write two essays, choosing one topic from each of the two sections (Section A & Section B). They are expected to keep closely to the subject of the essay, arrange their ideas in orderly fashion, and write concisely. Credit will be given for effective and exact expression. Total Marks: 250 (125 Marks each, approx. 1000-1200 words per essay, Duration: 3 Hours).",
                    version: "1.0",
                    verifiedDate: "2026-10-28",
                    notesJsonBaseDir: "/data/notes/mains_essay/",


                    theme: {
                        primaryColor: "#7c3aed",        // Deep Violet / Philosophical & Creative Essay Theme
                        bgColor: "#f5f3ff",
                        iconClass: "ri-edit-box-line"
                    },


                    metrics: {
                        totalChapters: 6,
                        totalEstimatedHours: 60,
                        totalMarks: 250,
                        targetMarks: 140,               // स्पर्धात्मक निवडीसाठी सुरक्षित स्कोअर (135-150 गुण)
                        paperDurationHours: 3
                    },


                    subjectTags: [
                        "Mains-Merit",
                        "Paper-3-Mains",
                        "Descriptive-Subjective",
                        "High-Scoring",
                        "Philosophical-Reflective",
                        "Multi-Dimensional",
                        "Rank-Deciding"
                    ],


                    filterCategory: "MAINS_MERIT",
                    searchKeywords: [
                        "mpsc mains essay paper", "essay writing strategy", "philosophical essays",
                        "socio economic essays", "multidimensional brainstorming", "pestle approach essay",
                        "निबंध लेखन पेपर ३", "राज्यसेवा मुख्य निबंध", "तात्विक निबंध", "बहुआयामी मांडणी", "निबंध ब्रेनस्टॉर्मिंग"
                    ],


                    referenceSources: [
                        {
                            name: "MPSC राज्यसेवा मुख्य परीक्षा अधिकृत अभ्यासक्रम व मार्गदर्शक तत्त्वे",
                            role: "अधिकृत परीक्षा-संदर्भ",
                            url: "https://mpsc.org.in/"
                        },
                        {
                            name: "Contemporary Essays - Ramesh Singh / Arihant",
                            role: "समकालीन व तात्विक निबंधांची रचना आणि बहुआयामी मांडणी"
                        },
                        {
                            name: "सुगम निबंध लेखन - प्रा. वि. दा. गोखले / मो. रा. वाळंबे",
                            role: "मराठी निबंध शैली, सुभाषिते व प्रभावी भाषा संदर्भ"
                        },
                        {
                            name: "MPSC & UPSC मागील १० वर्षांचे निबंध पेपर्स संच (2013-2025)",
                            role: "मागील वर्षांतील निबंधांचे कल व विषयवार विश्लेषण"
                        }
                    ],


                    chapters: [
                        // =========================================================================
                        // प्रकरण १ — निबंध लेखनाचे मूलभूत तंत्र व रचना (Essay Anatomy & Strategy)
                        // =========================================================================
                        {
                            id: "m_ess_chap_01",
                            code: "ES01",
                            section: "Methodology & Architecture",
                            slug: "essay-anatomy-brainstorming-and-structure",
                            nameMr: "निबंध लेखनाचे मूलभूत तंत्र, ब्रेनस्टॉर्मिंग व बहुआयामी चौकट",
                            nameEn: "Essay Anatomy, Brainstorming Techniques & Multidimensional Framework",
                            name: "निबंध तंत्र व रचना (Essay Architecture & Brainstorming)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 10,
                            isMaharashtraReference: false,
                            trackingKey: "progress_m_ess_01",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: null,
                            nextChapterId: "m_ess_chap_02",
                            metaDescriptionMr: "विषयाची अचूक निवड, १५ मिनिटे ब्रेनस्टॉर्मिंग तंत्र, PESTLE बहुआयामी दृष्टिकोन, प्रभावी प्रस्तावना, परिच्छेद जोडणी (Transitions) आणि संतुलित निष्कर्ष.",
                            metaDescriptionEn: "Topic selection mechanics, 15-minute brainstorming blueprint, PESTLE multidimensional framework, introductory hooks, paragraph transitions, and balanced conclusions.",
                            notesJsonPath: "/data/notes/mains_essay/es01_architecture.json",
                            quizTag: "mains_essay_arch_01",
                            tags: ["Essay Strategy", "PESTLE Approach", "Brainstorming", "Thesis Statement", "Paragraph Transitions", "High-Yield"],
                            searchKeywords: ["essay structure", "brainstorming for essay", "pestle framework", "how to write essay mpsc", "निबंधाची रचना", "पेस्टले पद्धत", "ब्रेनस्टॉर्मिंग"],
                            topics: [
                                {
                                    id: "top_es01_01",
                                    nameMr: "विषय निवड, अर्थ उलगडणे व वेळेचे व्यवस्थापन",
                                    nameEn: "Topic Selection, Deconstruction & Time Management",
                                    subtopics: [
                                        {
                                            id: "st_es01_01_01",
                                            titleMr: "विषयाची निवड: सेक्शन A व B मधील ४-४ पर्यायांमधून सर्वाधिक उदाहरणे व सखोल समज असलेला विषय निवडण्याचे निकष",
                                            titleEn: "Topic Selection Strategy: Selecting the Most Viable Topic Across Section A & B",
                                            chips: ["योग्य विषय निवड", "साधक-बाधक अंदाज", "अतिउत्साह टाळणे"]
                                        },
                                        {
                                            id: "st_es01_01_02",
                                            titleMr: "वेळ व्यवस्थापन: १ निबंधासाठी ९० मिनिटे = १५ मिनिटे कच्ची रूपरेषा (Rough Outline) + ६५ मिनिटे सलग लेखन + १० मिनिटे पुनरावलोकन व प्रूफरीडिंग",
                                            titleEn: "Time Budgeting (90 Mins/Essay): 15 Mins Brainstorming, 65 Mins Writing & 10 Mins Revision",
                                            chips: ["९० मिनिटे प्रति निबंध", "१५ मिनिटे कच्ची रूपरेषा", "१० मिनिटे प्रूफरीडिंग"]
                                        },
                                        {
                                            id: "st_es01_01_03",
                                            titleMr: "विषयाचे डी-कन्स्ट्रक्शन (Deconstruction): शीर्षकातील प्रत्येक कळीचा शब्द (Keyword) वेगळा करून मूळ गाभा समजून घेणे",
                                            titleEn: "Deconstructing Essay Prompts: Isolating Keywords, Ambiguities & Scope Boundaries",
                                            chips: ["शीर्षक विश्लेषण", "कळीचे शब्द अधोरेखित करणे", "विषयांतर टाळणे"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Contemporary Essays - Ramesh Singh", standard: "प्रमाणित संदर्भ", chapterRef: "Chapter 1: The Art of Essay Writing" }
                                    ]
                                },
                                {
                                    id: "top_es01_02",
                                    nameMr: "ब्रेनस्टॉर्मिंग व PESTLE बहुआयामी विस्तार",
                                    nameEn: "Brainstorming Frameworks & PESTLE Expansion Matrix",
                                    subtopics: [
                                        {
                                            id: "st_es01_02_01",
                                            titleMr: "PESTLE दृष्टिकोन: राजकीय (Political), आर्थिक (Economic), सामाजिक (Social), तांत्रिक (Technological), पर्यावरणीय (Legal/Environmental), आणि आंतरराष्ट्रीय आयाम जोडणे",
                                            titleEn: "PESTLE Expansion: Political, Economic, Social, Technological, Legal & Environmental Angles",
                                            chips: ["PESTLE चौकट", "बहुआयामी विस्तार", "आंतरशाखीय दृष्टिकोन"]
                                        },
                                        {
                                            id: "st_es01_02_02",
                                            titleMr: "व्यक्तिगत ते वैश्विक विस्तार: व्यक्ती -> कुटुंब -> समाज -> राज्य -> राष्ट्र -> जागतिक पातळी (Micro to Macro Perspective)",
                                            titleEn: "Temporal & Spatial Matrix: Micro to Macro (Individual, Society, Nation & World Dimensions)",
                                            chips: ["व्यक्ती ते विश्व विस्तार", "ऐतिहासिक ते वर्तमान संदर्भ", "सूक्ष्म ते स्थूल"]
                                        },
                                        {
                                            id: "st_es01_02_03",
                                            titleMr: "परिच्छेदांमधील प्रवाहीपणा (Transitions): एका परिच्छेदातून दुसऱ्या परिच्छेदात जाताना तार्किक दुवे (Connectors) वापरून सलगता राखणे",
                                            titleEn: "Paragraph Transitions: Logical Connectors, Thematic Bridges & Flow Maintenance",
                                            chips: ["तार्किक दुवे", "प्रवाही भाषा", "अखंड सुसंगती"]
                                        }
                                    ],
                                    sources: [
                                        { book: "UPSC/MPSC Toppers Essay Framework", standard: "टॉपर स्ट्रॅटेजी", chapterRef: "Multidimensional Brainstorming" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण २ — तात्विक व अमूर्त निबंध (Philosophical & Reflective Essays)
                        // =========================================================================
                        {
                            id: "m_ess_chap_02",
                            code: "ES02",
                            section: "Philosophical Section",
                            slug: "philosophical-and-reflective-essay-mastery",
                            nameMr: "तात्विक, चिंतनशील व अमूर्त निबंध (सेक्शन A प्राधान्य)",
                            nameEn: "Philosophical, Reflective & Abstract Essays (Section A Focus)",
                            name: "तात्विक व चिंतनशील निबंध (Philosophical & Abstract Essays)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 12,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_ess_02",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_ess_chap_01",
                            nextChapterId: "m_ess_chap_03",
                            metaDescriptionMr: "नीतिशास्त्र, मानवी स्वभाव, म्हणी, सुवचने, रूपके, विचारवंतांचे विचार (गांधीजी, आंबेडकर, फुले, बुद्ध, पाश्चात्त्य तत्वज्ञ) आणि अमूर्त विषयांचे वास्तवदर्शी रूपांतर.",
                            metaDescriptionEn: "Deconstructing aphorisms, metaphors, ethical dilemmas, philosophical quotes (Gandhi, Ambedkar, Phule, Western thinkers), and grounding abstract themes in real-world policy.",
                            notesJsonPath: "/data/notes/mains_essay/es02_philosophical.json",
                            quizTag: "mains_essay_philo_01",
                            tags: ["Philosophical Essays", "Abstract Quotes", "Ethical Dilemmas", "Thinkers Perspectives", "Section A Focus", "High-Scoring"],
                            searchKeywords: ["philosophical essays", "abstract essays mpsc", "how to write philosophical essay", "तात्विक निबंध", "चिंतनशील निबंध", "अमूर्त सुवचने"],
                            topics: [
                                {
                                    id: "top_es02_01",
                                    nameMr: "अमूर्त संकल्पनांचे वास्तवदर्शी उपयोजन व विचारवंत दृष्टिकोन",
                                    nameEn: "Grounding Abstract Metaphors & Thinkers' Perspectives",
                                    subtopics: [
                                        {
                                            id: "st_es02_01_01",
                                            titleMr: "रूपके व सुवचनांचा अर्थ लावणे: उदा. 'जहाज किनाऱ्यावर सुरक्षित असते, पण ते त्यासाठी बनलेले नसते' — लाक्षणिक अर्थ उलगडणे",
                                            titleEn: "Deciphering Metaphorical Quotes: Unpacking Literal vs Figurative Connotations with Contemporary Relevance",
                                            chips: ["लाक्षणिक अर्थ उलगडणे", "रूपकांचे विश्लेषण", "वास्तववादी उदाहरणे"]
                                        },
                                        {
                                            id: "st_es02_01_02",
                                            titleMr: "भारतीय व पाश्चात्त्य विचारवंतांचा वापर: महात्मा फुले, डॉ. बाबासाहेब आंबेडकर, महात्मा गांधी, छत्रपती शिवाजी महाराज, सॉक्रेटिस, कांट आणि अमर्त्य सेन यांचे विचार",
                                            titleEn: "Synthesising Philosophical Traditions: Phule, Ambedkar, Gandhi, Shivaji Maharaj, Socrates, Kant & Sen",
                                            chips: ["फुले-आंबेडकर विचार", "गांधीवादी तत्त्वज्ञान", "पाश्चात्त्य नीतिशास्त्रज्ञ"]
                                        },
                                        {
                                            id: "st_es02_01_03",
                                            titleMr: "द्वंद्वात्मक मांडणी (Dialectical Approach): वाद (Thesis) -> प्रतिवाद (Antithesis) -> समन्वय (Synthesis) द्वारे सखोल बौद्धिक चर्चा निर्माण करणे",
                                            titleEn: "Dialectical Methodology: Thesis, Antithesis & Synthesis for Rich Intellectual Depth",
                                            chips: ["वाद-प्रतिवाद-समन्वय", "समतोल विचार", "बौद्धिक खोली"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Ethics, Integrity and Aptitude - Subba Rao & P.N. Roy", standard: "प्रमाणित संदर्भ", chapterRef: "Moral Philosophers & Ethical Principles" },
                                        { book: "Contemporary Essays - Ramesh Singh", standard: "प्रमाणित संदर्भ", chapterRef: "Reflective & Philosophical Essays" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ३ — सामाजिक न्याय, महिला व संस्कृती (Social Justice & Women)
                        // =========================================================================
                        {
                            id: "m_ess_chap_03",
                            code: "ES03",
                            section: "Socio-Cultural Domain",
                            slug: "social-justice-women-empowerment-and-culture-essays",
                            nameMr: "सामाजिक न्याय, महिला सक्षमीकरण, शिक्षण व संस्कृती",
                            nameEn: "Social Justice, Women Empowerment, Education & Culture Essays",
                            name: "सामाजिक न्याय व महिला सक्षमीकरण (Social Justice, Gender & Culture)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 10,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_ess_03",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_ess_chap_02",
                            nextChapterId: "m_ess_chap_04",
                            metaDescriptionMr: "लैंगिक समानता, महिलांचे आर्थिक-राजकीय सक्षमीकरण, शिक्षण पद्धती (NEP 2020), आरोग्य, वंचित घटक, जात-वर्ग वास्तव, आणि भारतीय बहुसांस्कृतिक मूल्ये.",
                            metaDescriptionEn: "In-depth frameworks for Gender Equality, Women in Leadership, National Education Policy (NEP 2020), Healthcare disparities, marginalized castes, and cultural pluralism.",
                            notesJsonPath: "/data/notes/mains_essay/es03_socio_cultural.json",
                            quizTag: "mains_essay_social_01",
                            tags: ["Social Justice", "Women Empowerment", "Care Economy", "NEP 2020", "Cultural Pluralism", "Maharashtra Reforms"],
                            searchKeywords: ["social justice essay", "women empowerment essay", "education system essay", "gender equality", "सामाजिक न्याय निबंध", "महिला सक्षमीकरण", "शिक्षण सुधारणा"],
                            topics: [
                                {
                                    id: "top_es03_01",
                                    nameMr: "लैंगिक समता, काळजी अर्थव्यवस्था (Care Economy) व वंचित घटक",
                                    nameEn: "Gender Parity, Care Economy & Marginalized Inclusion",
                                    subtopics: [
                                        {
                                            id: "st_es03_01_01",
                                            titleMr: "महिला सक्षमीकरण: केवळ कल्याणकारी योजना नव्हे तर निर्णयप्रक्रियेत सहभाग; काचेचे छत (Glass Ceiling), अदृश्य श्रम आणि नारी शक्ती वंदन कायदा",
                                            titleEn: "Women's Agency: Breaking Glass Ceilings, Recognizing Unpaid Care Work & Political Quotas (Nari Shakti)",
                                            chips: ["ग्लास सीलिंग तोडणे", "अदृश्य घरगुती श्रम", "नारी शक्ती वंदन"]
                                        },
                                        {
                                            id: "st_es03_01_02",
                                            titleMr: "सामाजिक समावेशकता: अनुसूचित जाती, जमाती, दिव्यांग आणि तृतीयपंथी हक्क; सावित्रीबाई फुले व शाहू महाराजांच्या सुधारणांची समकालीन गरज",
                                            titleEn: "Inclusive Emancipation: SC, ST, PwD, Transgender Rights & Legacy of Phule-Shahu-Ambedkar",
                                            chips: ["शाहू-फुले वारसा", "सामाजिक समावेशन", "तृतीयपंथी व दिव्यांग हक्क"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Yojana & Kurukshetra Monthly Issues", standard: "शासकीय नियतकालिके", chapterRef: "Social Justice & Women Empowerment Special Editions" }
                                    ]
                                },
                                {
                                    id: "top_es03_02",
                                    nameMr: "शिक्षण, आरोग्य व लोकसांस्कृतिक वारसा",
                                    nameEn: "Education Ecosystem, Public Health & Cultural Fabric",
                                    subtopics: [
                                        {
                                            id: "st_es03_02_01",
                                            titleMr: "शिक्षण व्यवस्था: पदवी विरुद्ध कौशल्य (Degree vs Skill Gap), राष्ट्रीय शैक्षणिक धोरण (NEP 2020), डिजिटल दरी आणि मूल्यशिक्षण",
                                            titleEn: "Education Paradigms: NEP 2020, Skill vs Rote Learning, Digital Divide & Human Values",
                                            chips: ["NEP 2020", "कौशल्याधिष्ठित शिक्षण", "डिजिटल विषमता"]
                                        },
                                        {
                                            id: "st_es03_02_02",
                                            titleMr: "भारतीय संस्कृती व बहुलवाद: विविधतेत एकता, भाषा विविधता, सहिष्णुता, आणि जागतिकीकरणातील स्थानिक संस्कृतीचे संवर्धन",
                                            titleEn: "Cultural Pluralism: Unity in Diversity, Linguistic Federalism & Preserving Local Heritage Amid Globalization",
                                            chips: ["विविधतेत एकता", "सांस्कृतिक सहिष्णुता", "जागतिकीकरण प्रभाव"]
                                        }
                                    ],
                                    sources: [
                                        { book: "NCERT Sociology Class 12", standard: "Class 12", chapterRef: "Social Movements & Cultural Changes in India" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ४ — अर्थव्यवस्था, शेती व सर्वसमावेशक विकास (Economy & Agriculture)
                        // =========================================================================
                        {
                            id: "m_ess_chap_04",
                            code: "ES04",
                            section: "Economic Domain",
                            slug: "economy-agriculture-and-inclusive-growth-essays",
                            nameMr: "भारतीय अर्थव्यवस्था, कृषी संकट, बेरोजगारी व शाश्वत विकास",
                            nameEn: "Indian Economy, Agrarian Crisis, Employment & Inclusive Growth",
                            name: "अर्थव्यवस्था व कृषी निबंध (Economy, Agriculture & Growth)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 10,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_ess_04",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_ess_chap_03",
                            nextChapterId: "m_ess_chap_05",
                            metaDescriptionMr: "५ ट्रिलियन अर्थव्यवस्था ध्येय, रोजगारविरहित वाढ (Jobless Growth), कृषी संकट व शेतकरी आत्महत्या, सिंचन व दुष्काळ प्रश्न, MSME, आणि आर्थिक विषमता (Oxfam).",
                            metaDescriptionEn: "Economic transformation models: 5-Trillion target, Jobless Growth, Agrarian distress & farmers' suicides in Maharashtra, Drought mitigation, MSME revival, and Wealth inequality.",
                            notesJsonPath: "/data/notes/mains_essay/es04_economy.json",
                            quizTag: "mains_essay_eco_01",
                            tags: ["Economy Essays", "Agrarian Crisis", "Jobless Growth", "Inequality", "Maharashtra Agriculture", "Sustainable Development"],
                            searchKeywords: ["indian economy essay", "agriculture crisis essay", "inclusive growth", "farmers issues maharashtra", "आर्थिक निबंध", "कृषी समस्या निबंध", "सर्वसमावेशक विकास"],
                            topics: [
                                {
                                    id: "top_es04_01",
                                    nameMr: "आर्थिक वाढ विरुद्ध सर्वसमावेशक विकास व विषमता",
                                    nameEn: "Growth vs Development, Jobless Growth & Wealth Divide",
                                    subtopics: [
                                        {
                                            id: "st_es04_01_01",
                                            titleMr: "जीडीपी वाढ विरुद्ध सर्वसमावेशक विकास: केवळ आकड्यांची वाढ नव्हे तर मानवी विकास निर्देशांक (HDI); ऑक्सफॅम अहवाल व संपत्तीचे असमान वाटप",
                                            titleEn: "GDP Growth vs Inclusive Human Development: Dissecting HDI Paradigms & Oxfam Wealth Inequality Reports",
                                            chips: ["GDP vs HDI", "उत्पन्न विषमता", "सर्वसमावेशक विकास"]
                                        },
                                        {
                                            id: "st_es04_01_02",
                                            titleMr: "रोजगार व जनसांख्यिकी लाभांश (Demographic Dividend): रोजगाराभिमुख निर्मिती क्षेत्र, गिग इकॉनॉमी (Gig Economy), आणि तरुणांचे कौशल्य सक्षमीकरण",
                                            titleEn: "Employment & Demographic Dividend: Tapping Youth Potential, Gig Economy Dynamics & Automation Risks",
                                            chips: ["जनसांख्यिकी लाभांश", "गिग इकॉनॉमी", "रोजगार निर्मिती"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Economic Survey of India (Latest)", standard: "शासकीय आर्थिक सर्वेक्षण", chapterRef: "Macroeconomic Overview & Inclusive Growth" }
                                    ]
                                },
                                {
                                    id: "top_es04_02",
                                    nameMr: "कृषी अर्थव्यवस्था, हवामान बदल व महाराष्ट्रातील शेतकरी प्रश्न",
                                    nameEn: "Agrarian Transformation, Climate Shocks & Maharashtra Farmers",
                                    subtopics: [
                                        {
                                            id: "st_es04_02_01",
                                            titleMr: "शेती संकट: हवामान अनिश्चितता, अवकाळी पाऊस, उत्पादन खर्च वाढ, आणि महाराष्ट्रातील शेतकरी आत्महत्या (विदर्भ-मराठवाडा वास्तव)",
                                            titleEn: "Agrarian Crisis: Climate Shocks, Rising Input Costs & Socio-Economic Roots of Farmers' Distress in Maharashtra",
                                            chips: ["शेतकरी प्रश्न", "विदर्भ-मराठवाडा दुष्काळ", "हवामान-सक्षम शेती"]
                                        },
                                        {
                                            id: "st_es04_02_02",
                                            titleMr: "उपाययोजना: अन्नप्रक्रिया उद्योग, मूल्यसाखळी निर्मिती, सूक्ष्म सिंचन, कृषी स्टार्टअप्स आणि शाश्वत नैसर्गिक शेती",
                                            titleEn: "Agrarian Solutions: Food Processing, Micro-Irrigation, Agro-Startups & Resilient Regenerative Agriculture",
                                            chips: ["मूल्यसाखळी व्यवस्थापन", "सूक्ष्म सिंचन", "कृषी स्टार्टअप्स"]
                                        }
                                    ],
                                    sources: [
                                        { book: "महाराष्ट्र आर्थिक पाहणी अहवाल", standard: "शासकीय अहवाल", chapterRef: "कृषी व संलग्न क्षेत्रे आढावा" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ५ — विज्ञान, कृत्रिम बुद्धिमत्ता व पर्यावरण (Science, AI & Climate)
                        // =========================================================================
                        {
                            id: "m_ess_chap_05",
                            code: "ES05",
                            section: "Science & Environment",
                            slug: "science-ai-ethics-and-environmental-sustainability",
                            nameMr: "विज्ञान, कृत्रिम बुद्धिमत्ता, सायबर विश्व व पर्यावरण संकट",
                            nameEn: "Science, AI Ethics, Cyberspace & Environmental Sustainability",
                            name: "विज्ञान, तंत्रज्ञान व पर्यावरण (Science, Tech, AI & Environment)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 10,
                            isMaharashtraReference: false,
                            trackingKey: "progress_m_ess_05",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_ess_chap_04",
                            nextChapterId: "m_ess_chap_06",
                            metaDescriptionMr: "कृत्रिम बुद्धिमत्ता (AI) शाप की वरदान, सायबर सुरक्षा, मानवी मूल्यांवर तंत्रज्ञानाचा प्रभाव, जागतिक हवामान बदल (Global Warming), पॅरिस करार, आणि शाश्वत जीवनशैली.",
                            metaDescriptionEn: "Generative AI & human obsolescence, ethical governance of technology, data surveillance, climate emergency, COP summits, net zero targets, and Mission LiFE.",
                            notesJsonPath: "/data/notes/mains_essay/es05_science_env.json",
                            quizTag: "mains_essay_sci_01",
                            tags: ["AI Ethics", "Generative AI", "Climate Emergency", "Net Zero 2070", "Mission LiFE", "Cyber Surveillance"],
                            searchKeywords: ["ai essay mpsc", "climate change essay", "technology ethics essay", "science boon or bane", "कृत्रिम बुद्धिमत्ता निबंध", "हवामान बदल निबंध", "सायबर सुरक्षा"],
                            topics: [
                                {
                                    id: "top_es05_01",
                                    nameMr: "कृत्रिम बुद्धिमत्ता, डेटा गोपनीयता व तंत्रज्ञानाची नैतिकता",
                                    nameEn: "Artificial Intelligence, Data Privacy & Ethics of Technology",
                                    subtopics: [
                                        {
                                            id: "st_es05_01_01",
                                            titleMr: "कृत्रिम बुद्धिमत्ता (AI) आणि मानवी भवितव्य: नोकऱ्यांवरील संकट, सर्जनशीलता, डीपफेक आणि नैतिक नियमनाची गरज",
                                            titleEn: "Artificial Intelligence & Humanity: Job Disruptions, Deepfakes, Algorithmic Bias & Ethical Guardrails",
                                            chips: ["AI नैतिकता", "डीपफेक आव्हाने", "तंत्रज्ञान नियमन"]
                                        },
                                        {
                                            id: "st_es05_01_02",
                                            titleMr: "डिजिटल पाळत (Surveillance) विरुद्ध वैयक्तिक स्वातंत्र्य: डेटा सार्वभौमत्व, सायबर गुन्हेगारी आणि डिजिटल जगातील मानवाधिकार",
                                            titleEn: "Digital Surveillance vs Individual Privacy: Data Sovereignty, Cyber Security & Human Rights Online",
                                            chips: ["डेटा सार्वभौमत्व", "गोपनीयतेचा हक्क", "सायबर सुरक्षा"]
                                        }
                                    ],
                                    sources: [
                                        { book: "NITI Aayog National Strategy for Artificial Intelligence", standard: "शासकीय धोरण", chapterRef: "Responsible AI for All" }
                                    ]
                                },
                                {
                                    id: "top_es05_02",
                                    nameMr: "हवामान आणीबाणी, जैवविविधता व शाश्वत जीवनशैली",
                                    nameEn: "Climate Emergency, Ecological Collapse & Sustainable Lifestyle",
                                    subtopics: [
                                        {
                                            id: "st_es05_02_01",
                                            titleMr: "हवामान बदल आणीबाणी: तापमानवाढ, अनपेक्षित नैसर्गिक आपत्ती, पॅरिस करार आणि भारताचे नेट झिरो २०७० चे ध्येय",
                                            titleEn: "Climate Emergency: Extreme Weather Events, Paris Commitments & India's Net Zero 2070 Roadmap",
                                            chips: ["हवामान आणीबाणी", "नेट झिरो २०७०", "नवीकरणीय ऊर्जा"]
                                        },
                                        {
                                            id: "st_es05_02_02",
                                            titleMr: "पर्यावरण संवर्धन: विकास विरुद्ध पर्यावरण द्वंद्व, सर्क्युलर इकॉनॉमी (Circular Economy), आणि मिशन LiFE (पर्यावरणासाठी जीवनशैली)",
                                            titleEn: "Development vs Conservation Dilemma: Circular Economy Frameworks & Mission LiFE for Sustainability",
                                            chips: ["सर्क्युलर इकॉनॉमी", "मिशन LiFE", "शाश्वत विकास"]
                                        }
                                    ],
                                    sources: [
                                        { book: "UNEP Emissions Gap Report", standard: "आंतरराष्ट्रीय पर्यावरण अहवाल", chapterRef: "Climate Action & Carbon Neutrality" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ६ — आंतरराष्ट्रीय संबंध, लोकशाही व सुशासन (Polity, IR & Governance)
                        // =========================================================================
                        {
                            id: "m_ess_chap_06",
                            code: "ES06",
                            section: "Polity & Global Affairs",
                            slug: "polity-governance-democracy-and-international-relations-essays",
                            nameMr: "लोकशाही, सुशासन, संघराज्यवाद व भारताचे जागतिक स्थान",
                            nameEn: "Democracy, Good Governance, Federalism & India's Global Role",
                            name: "राज्यव्यवस्था, सुशासन व आंतरराष्ट्रीय संबंध (Polity, Governance & IR)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 8,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_ess_06",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_ess_chap_05",
                            nextChapterId: null,
                            metaDescriptionMr: "भारतीय लोकशाही समोरील आव्हाने, सहकारी संघराज्यवाद, संस्थांची स्वायत्तता, न्यायसंस्थेची भूमिका, जागतिक बहुध्रुवीय व्यवस्था, आणि विश्वबंधू भारत.",
                            metaDescriptionEn: "Constitutional morality, democratic resilience, cooperative federalism, judicial independence, multi-polar global world order, Global South leadership, and Vishwamitra Bharat.",
                            notesJsonPath: "/data/notes/mains_essay/es06_polity_ir.json",
                            quizTag: "mains_essay_polity_01",
                            tags: ["Democracy Challenges", "Constitutional Morality", "Cooperative Federalism", "Global South Leader", "Multipolar World"],
                            searchKeywords: ["democracy essay mpsc", "good governance essay", "federalism essay", "india foreign policy essay", "लोकशाही निबंध", "सुशासन निबंध", "भारताचे परराष्ट्र धोरण"],
                            topics: [
                                {
                                    id: "top_es06_01",
                                    nameMr: "घटनात्मक नैतिकता, लोकशाही संस्था व सुशासन",
                                    nameEn: "Constitutional Morality, Democratic Institutions & Governance",
                                    subtopics: [
                                        {
                                            id: "st_es06_01_01",
                                            titleMr: "घटनात्मक नैतिकता (Constitutional Morality): डॉ. आंबेडकरांचा दृष्टिकोन, कायद्याचे राज्य, आणि बहुमताची हुकूमशाही टाळणे",
                                            titleEn: "Constitutional Morality: Dr. Ambedkar's Vision, Rule of Law & Preventing Majoritarian Tyranny",
                                            chips: ["घटनात्मक नैतिकता", "कायद्याचे राज्य", "संस्थांची स्वायत्तता"]
                                        },
                                        {
                                            id: "st_es06_01_02",
                                            titleMr: "पारदर्शक व उत्तरदायी सुशासन: नागरिक सहभाग, माहितीचा अधिकार, ई-प्रशासन, आणि प्रशासनातील लालफितीशाहीचे उच्चाटन",
                                            titleEn: "Accountable Governance: Participatory Democracy, Citizen's Charter, Anti-Corruption & Digital Delivery",
                                            chips: ["पारदर्शक प्रशासन", "नागरिक सनद", "भ्रष्टाचार निर्मूलन"]
                                        }
                                    ],
                                    sources: [
                                        { book: "The Indian Constitution: Cornerstone of a Nation - Granville Austin", standard: "प्रमाणित संदर्भ", chapterRef: "Constitutional Morality & Democratic Ethos" }
                                    ]
                                },
                                {
                                    id: "top_es06_02",
                                    nameMr: "भारताचे परराष्ट्र धोरण, बहुध्रुवीय जग व जागतिक दक्षिण (Global South)",
                                    nameEn: "India's Foreign Policy, Multipolar World & Global South Voice",
                                    subtopics: [
                                        {
                                            id: "st_es06_02_01",
                                            titleMr: "जागतिक व्यवस्थेतील स्थित्यंतरे: बहुध्रुवीय जग, आंतरराष्ट्रीय संस्थांचे संकट (UN Reforms), आणि भारताची धोरणात्मक स्वायत्तता (Strategic Autonomy)",
                                            titleEn: "Multipolar World Dynamics: UN System Paralysis, Geopolitical Shifts & India's Strategic Autonomy",
                                            chips: ["धोरणात्मक स्वायत्तता", "UN सुधारणा", "बहुध्रुवीय विश्व"]
                                        },
                                        {
                                            id: "st_es06_02_02",
                                            titleMr: "विश्वबंधू भारत व ग्लोबल साऊथचे नेतृत्व: वसुधैव कुटुंबकम तत्त्व, G20 यशाचा वारसा, आणि जागतिक संघर्षांमध्ये शांततेचा मध्यस्थ",
                                            titleEn: "India as a Global Bridge (Vishwa Mitra): Vasudhaiva Kutumbakam, G20 Legacy & Voice of the Global South",
                                            chips: ["वसुधैव कुटुंबकम", "ग्लोबल साऊथचा आवाज", "शांततादूत भारत"]
                                        }
                                    ],
                                    sources: [
                                        { book: "The India Way: Strategies for an Uncertain World - S. Jaishankar", standard: "प्रमाणित परराष्ट्र धोरण ग्रंथ", chapterRef: "Strategic Principles & Multipolar Realities" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "rajyaseva_mains_paper_4",
            paperNumber: 4,
            code: "GS1",
            slug: "mains-general-studies-1",
            nameMr: "सामान्य अध्ययन १: भारतीय वारसा, संस्कृती, इतिहास, भूगोल व समाज",
            nameEn: "General Studies I: Indian Heritage, Culture, History, Geography & Society",
            type: "Merit",
            standard: "पदवी स्तर (महाराष्ट्राच्या विशेष संदर्भासह)",
            durationHours: 3,
            marks: 250,
            subjects: [
                {
                    id: "sub_mains_gs1_heritage_history_geography_society",
                    code: "GS1_SUB",
                    slug: "mains-gs1-heritage-history-geography-and-society",
                    nameMr: "सामान्य अध्ययन १: भारतीय वारसा, संस्कृती, इतिहास, भूगोल व समाज",
                    nameEn: "General Studies I: Indian Heritage, Culture, History, Geography & Society",
                    name: "सामान्य अध्ययन १ (Paper 4: General Studies I - 250 Marks)",
                    officialScope: "MPSC State Services Mains Paper 4 (General Studies I): Indian Heritage and Culture, History and Geography of the World and Society with special weightage to Maharashtra (Descriptive Pattern - 250 Marks, Duration: 3 Hours).",
                    version: "1.0",
                    verifiedDate: "2026-10-28",
                    notesJsonBaseDir: "/data/notes/mains_gs1/",


                    theme: {
                        primaryColor: "#b45309",        // Earth Amber / Heritage & Geography Theme
                        bgColor: "#fef3c7",
                        iconClass: "ri-ancient-gate-line"
                    },


                    metrics: {
                        totalChapters: 12,
                        totalEstimatedHours: 110,
                        totalMarks: 250,
                        targetMarks: 115,               // स्पर्धात्मक निवडीसाठी सुरक्षित जीएस-१ स्कोअर
                        paperDurationHours: 3
                    },


                    subjectTags: [
                        "Mains-Merit",
                        "Paper-4-Mains",
                        "GS-1",
                        "Descriptive-Subjective",
                        "Indian-Heritage",
                        "Modern-History",
                        "World-History",
                        "Maharashtra-History-Social-Reformers",
                        "World-India-Maharashtra-Geography",
                        "Indian-Society"
                    ],


                    filterCategory: "MAINS_MERIT",
                    searchKeywords: [
                        "mpsc mains gs 1", "indian heritage and culture", "modern indian history",
                        "maharashtra social reformers", "world history mains", "physical geography",
                        "geography of maharashtra", "indian society mains", "secularism communalism",
                        "सामान्य अध्ययन १", "भारतीय वारसा व संस्कृती", "आधुनिक इतिहास", "महाराष्ट्रातील समाजसुधारक", "जगाचा इतिहास", "महाराष्ट्राचा भूगोल", "भारतीय समाज"
                    ],


                    referenceSources: [
                        {
                            name: "MPSC राज्यसेवा मुख्य परीक्षा अधिकृत अभ्यासक्रम (Descriptive SSE)",
                            role: "अधिकृत परीक्षा-संदर्भ",
                            url: "https://mpsc.org.in/"
                        },
                        {
                            name: "भारतीय कला आणि संस्कृती - नितीन सिंघानिया",
                            role: "कला, स्थापत्य व संस्कृती संदर्भ"
                        },
                        {
                            name: "आधुनिक भारताचा इतिहास - बिपिन चंद्र / स्पेक्ट्रम (राजीव अहिर)",
                            role: "स्वातंत्र्यलढा व आधुनिक भारत"
                        },
                        {
                            name: "महाराष्ट्राचा इतिहास व समाजसुधारक - डॉ. एस. एस. गाथाळ / डॉ. अनिल कठारे",
                            role: "महाराष्ट्राचा विशेष संदर्भ व समाजसुधारक चळवळी"
                        },
                        {
                            name: "महाराष्ट्र व भारताचा भूगोल - ए. बी. सवदी",
                            role: "प्राकृतिक, आर्थिक व सामाजिक भूगोल"
                        },
                        {
                            name: "NCERT Class 11 & 12 Indian Society & Geography",
                            role: "भारतीय समाज आणि मूलभूत भूगोल चौकट"
                        }
                    ],


                    chapters: [
                        // =========================================================================
                        // विभाग १: भारतीय वारसा व संस्कृती (Heritage & Culture)
                        // =========================================================================
                        {
                            id: "m_gs1_chap_01",
                            code: "G101",
                            section: "Heritage & Culture",
                            slug: "indian-art-forms-architecture-and-literature",
                            nameMr: "भारतीय कला प्रकार, साहित्य, मूर्तिकला व स्थापत्य (प्राचीन ते आधुनिक)",
                            nameEn: "Indian Art Forms, Literature, Sculpture & Architecture (Ancient to Modern)",
                            name: "भारतीय वारसा व संस्कृती (Indian Art & Architecture)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 10,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs1_01",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: null,
                            nextChapterId: "m_gs1_chap_02",
                            metaDescriptionMr: "सिंधू संस्कृती ते मुघल स्थापत्य, नागर-द्रविड-वेसर मंदिर शैली, अजिंठा-वेरूळ लेणी, शास्त्रीय संगीत-नृत्य प्रकार, भक्ती-सुफी परंपरा व प्राचीन-मध्ययुगीन साहित्य.",
                            metaDescriptionEn: "In-depth descriptive coverage of Harappan to Mughal architecture, Temple styles (Nagara/Dravida/Vesara), Ajanta-Ellora caves, classical music/dances, Bhakti-Sufi traditions, and literature.",
                            notesJsonPath: "/data/notes/mains_gs1/g101_art_culture.json",
                            quizTag: "mains_gs1_art_01",
                            tags: ["Heritage & Culture", "Temple Architecture", "Cave Art Ajanta Ellora", "Bhakti Tradition", "Classical Dances", "Pre-Cum-Mains"],
                            searchKeywords: ["indian architecture", "nagara dravida vesara", "ajanta caves", "ellora kailash temple", "bhakti movement", "भारतीय स्थापत्य", "अजिंठा वेरूळ", "भक्ती चळवळ"],
                            topics: [
                                {
                                    id: "top_g101_01",
                                    nameMr: "भारतीय स्थापत्य व मूर्तिकला (सिंधू, मौर्य, गुप्त, मंदिर स्थापत्य व गुंफा)",
                                    nameEn: "Indian Architecture & Sculpture: Harappan, Mauryan, Caves & Temples",
                                    subtopics: [
                                        {
                                            id: "st_g101_01_01",
                                            titleMr: "सिंधू संस्कृती नगररचना व मौर्यकालीन स्तंभ-मूर्तिकला; गांधार, मथुरा व अमरावती शिल्पशैलींची तुलनात्मक वैशिष्ट्ये",
                                            titleEn: "Harappan Town Planning, Mauryan Pillars & Comparative Analysis of Gandhara, Mathura and Amravati Schools of Art",
                                            chips: ["सिंधू नगररचना", "मौर्य स्तंभ", "गांधार vs मथुरा vs अमरावती"]
                                        },
                                        {
                                            id: "st_g101_01_02",
                                            titleMr: "भारतीय मंदिर स्थापत्य: नागर (उत्तर भारत), द्रविड (दक्षिण भारत - गोपुरम व विमान), आणि वेसर (संकरित) शैलींची उत्क्रांती व वैशिष्ट्ये",
                                            titleEn: "Evolution of Temple Architecture: Nagara, Dravida (Gopuram & Vimana) and Vesara Styles",
                                            chips: ["नागर शैली", "द्रविड शैली", "वेसर शैली", "विमान व गोपुरम"]
                                        },
                                        {
                                            id: "st_g101_01_03",
                                            titleMr: "महाराष्ट्रातील गुंफा स्थापत्य व चित्रकला: अजिंठा (जातक कथा भित्तिचित्रे), वेरूळ (कैलास मंदिर - एकाश्म पाषाण स्थापत्य), आणि घारापुरी (एलिफंटा - त्रिमूर्ती)",
                                            titleEn: "Rock-Cut Caves & Murals in Maharashtra: Ajanta Murals, Ellora Kailash Temple (Monolithic Rock-Cut), and Elephanta Caves",
                                            chips: ["अजिंठा भित्तिचित्रे", "वेरूळचे कैलास मंदिर", "घारापुरी एलिफंटा त्रिमूर्ती"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय कला आणि संस्कृती - नितीन सिंघानिया", standard: "प्रमाणित संदर्भ", chapterRef: "प्रकरण १ व २: भारतीय स्थापत्य व चित्रकला" }
                                    ]
                                },
                                {
                                    id: "top_g101_02",
                                    nameMr: "साहित्य, संगीत, नृत्य आणि भक्ती-सुफी चळवळ",
                                    nameEn: "Literature, Classical Dances, Music & Bhakti-Sufi Movements",
                                    subtopics: [
                                        {
                                            id: "st_g101_02_01",
                                            titleMr: "वैदिक, संगम, बौद्ध व जैन साहित्य आणि मध्ययुगीन पर्शियन-संस्कृत दरबारी साहित्य",
                                            titleEn: "Vedic, Sangam, Buddhist-Jain Literature and Medieval Persian-Sanskrit Literary Traditions",
                                            chips: ["संगम साहित्य", "बौद्ध व जैन ग्रंथ", "मध्ययुगीन साहित्य"]
                                        },
                                        {
                                            id: "st_g101_02_02",
                                            titleMr: "भारतीय शास्त्रीय नृत्य प्रकार (८ अधिकृत), हिंदुस्तानी व कर्नाटक संगीत परंपरा आणि लोककला",
                                            titleEn: "8 Classical Dance Forms, Hindustani vs Carnatic Music Paradigms, and Folk Traditions",
                                            chips: ["८ शास्त्रीय नृत्ये", "हिंदुस्तानी व कर्नाटक संगीत", "महाराष्ट्राच्या लोककला (लावणी, पोवाडा)"]
                                        },
                                        {
                                            id: "st_g101_02_03",
                                            titleMr: "भक्ती व सुफी चळवळ: सामाजिक समतेचा संदेश, संतांचे योगदान (कबीर, नानक, मीराबाई) आणि महाराष्ट्रातील वारकरी संप्रदाय (ज्ञानेश्वर, नामदेव, एकनाथ, तुकाराम)",
                                            titleEn: "Bhakti & Sufi Movements: Egalitarian Ethos, Northern Saints, and Maharashtra's Varkari Sampradaya (Dnyaneshwar to Tukaram)",
                                            chips: ["भक्ती चळवळ", "सुफी तत्त्वज्ञान", "वारकरी संप्रदाय", "संत तुकाराम व ज्ञानेश्वर"]
                                        }
                                    ],
                                    sources: [
                                        { book: "NCERT Class 11 An Introduction to Indian Art", standard: "NCERT", chapterRef: "Entire Book: Visual and Performing Arts" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग २: आधुनिक भारताचा इतिहास (Modern Indian History)
                        // =========================================================================
                        {
                            id: "m_gs1_chap_02",
                            code: "G102",
                            section: "Modern Indian History",
                            slug: "modern-indian-history-18th-century-to-freedom-struggle",
                            nameMr: "आधुनिक भारताचा इतिहास: १८ व्या शतकातील स्थित्यंतरे ते १९४७ स्वातंत्र्य",
                            nameEn: "Modern Indian History: Mid-18th Century to Indian Freedom Struggle (1947)",
                            name: "आधुनिक भारताचा इतिहास (Modern Indian History)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 12,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs1_02",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs1_chap_01",
                            nextChapterId: "m_gs1_chap_03",
                            metaDescriptionMr: "ब्रिटिश वसाहतवादी विस्तार, आर्थिक शोषण (Drain of Wealth), १८५७ चा उठाव, राष्ट्रीय सभेची स्थापना, मवाळ-जहाल कालखंड, गांधीवादी जनआंदोलने आणि स्वातंत्र्य प्राप्ती.",
                            metaDescriptionEn: "British colonial expansion, economic drain, 1857 revolt, early nationalism, moderate-extremist phase, Gandhian mass movements, revolutionary activities, and partition/independence.",
                            notesJsonPath: "/data/notes/mains_gs1/g102_modern_history.json",
                            quizTag: "mains_gs1_mod_hist_01",
                            tags: ["Modern Indian History", "British Colonialism", "Economic Drain Theory", "Revolt of 1857", "Gandhian Movements", "Revolutionary Nationalism"],
                            searchKeywords: ["modern indian history mains", "revolt of 1857", "drain of wealth dada bhai", "gandhian era", "quit india movement", "आधुनिक भारत", "१८५७ चा उठाव", "गांधीयुग", "भारत छोडो आंदोलन"],
                            topics: [
                                {
                                    id: "top_g102_01",
                                    nameMr: "ब्रिटिश सत्तेचा विस्तार, प्रशासकीय रचना व आर्थिक शोषण",
                                    nameEn: "Colonial Expansion, Administrative Policies & Economic Exploitation",
                                    subtopics: [
                                        {
                                            id: "st_g102_01_01",
                                            titleMr: "प्लासी व बक्सारच्या लढाया, तैनाती फौज, खालसा धोरण आणि कंपनीची प्रशासकीय चौकट (सनदी कायदे १७७३ ते १८५३)",
                                            titleEn: "Expansion: Battles of Plassey & Buxar, Subsidiary Alliance, Doctrine of Lapse & Administrative Charter Acts",
                                            chips: ["तैनाती फौज", "खालसा धोरण (डलहौसी)", "सनदी कायदे"]
                                        },
                                        {
                                            id: "st_g102_01_02",
                                            titleMr: "ब्रिटिश आर्थिक धोरणे: जमीन महसूल पद्धती (कायमधारा, रयतवारी, महालवारी), शेतीचे व्यापारीकरण, हस्तोद्योगांचा ऱ्हास (De-industrialisation) आणि संपत्तीचे वहन (दादाभाई नौरोजी - Drain of Wealth)",
                                            titleEn: "Economic Drain: Permanent Settlement, Ryotwari, Mahalwari, Commercialisation of Agriculture & De-industrialisation",
                                            chips: ["रयतवारी व कायमधारा", "हस्तोद्योगांचा ऱ्हास", "संपत्ती वहन सिद्धांत (दादाभाई)"]
                                        },
                                        {
                                            id: "st_g102_01_03",
                                            titleMr: "१८५७ चा उठाव: कारणे, स्वरूप, व्याप्ती, अपयशाची कारणे, आणि १८५८ चा राणीचा जाहीरनामा (कंपनी राजवटीचा अंत)",
                                            titleEn: "Revolt of 1857: Causes, Character, Limitations, Failure Analysis, and Queen's Proclamation 1858",
                                            chips: ["१८५७ चा उठाव", "राणीचा जाहीरनामा १८५८", "कंपनी राजवटीचा अंत"]
                                        }
                                    ],
                                    sources: [
                                        { book: "आधुनिक भारताचा इतिहास - बिपिन चंद्र", standard: "प्रमाणित संदर्भ", chapterRef: "प्रकरणे १ ते ५: वसाहतवादी विस्तार व आर्थिक प्रभाव" }
                                    ]
                                },
                                {
                                    id: "top_g102_02",
                                    nameMr: "भारतीय राष्ट्रीय चळवळ: मवाळ, जहाल, क्रांतिकारी व गांधीयुग",
                                    nameEn: "Indian National Movement: Moderates, Extremists, Revolutionaries & Gandhi",
                                    subtopics: [
                                        {
                                            id: "st_g102_02_01",
                                            titleMr: "राष्ट्रवादाचा उदय, काँग्रेसची स्थापना (१८८५), मवाळ कालखंडाचे कार्य व मर्यादा; जहाल कालखंड, वंगभंग चळवळ (१९०५) व होमरूल लीग",
                                            titleEn: "Rise of Nationalism, INC Foundation (1885), Moderates, Extremist Leadership, Swadeshi (1905) & Home Rule",
                                            chips: ["काँग्रेस स्थापना १८८५", "मवाळ vs जहाल", "वंगभंग व स्वदेशी १९०५", "होमरूल चळवळ"]
                                        },
                                        {
                                            id: "st_g102_02_02",
                                            titleMr: "गांधीवादी जनआंदोलने: सत्याग्रहाची संकल्पना, असहकार आंदोलन (१९२०-२२), सविनय कायदेभंग (१९३० - दांडी यात्रा), आणि भारत छोडो आंदोलन (१९४२)",
                                            titleEn: "Gandhian Mass Movements: Philosophy of Satyagraha, Non-Cooperation, Civil Disobedience & Quit India 1942",
                                            chips: ["सत्याग्रह", "असहकार आंदोलन १९२०", "सविनय कायदेभंग १९३०", "भारत छोडो आंदोलन १९४२"]
                                        },
                                        {
                                            id: "st_g102_02_03",
                                            titleMr: "क्रांतिकारी राष्ट्रवाद (भगतसिंग, चंद्रशेखर आझाद, सुभाषचंद्र बोस व आझाद हिंद सेना); जातीयवादाचा उदय, कॅबिनेट मिशन, आणि फाळणीसह स्वातंत्र्य (१९४७)",
                                            titleEn: "Revolutionary Movements (Bhagat Singh, Subhash Chandra Bose & INA), Communalism, Cabinet Mission & 1947 Partition",
                                            chips: ["भगतसिंग व HSRA", "सुभाषचंद्र बोस व INA", "कॅबिनेट मिशन", "फाळणी व स्वातंत्र्य १९४७"]
                                        }
                                    ],
                                    sources: [
                                        { book: "इंडियाज स्ट्रगल फॉर इंडिपेंडन्स - बिपिन चंद्र", standard: "प्रमाणित संदर्भ", chapterRef: "गांधीवादी टप्पा व जनआंदोलने" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग ३: महाराष्ट्राचा इतिहास व समाजसुधारक चळवळी (Maharashtra Specific)
                        // =========================================================================
                        {
                            id: "m_gs1_chap_03",
                            code: "G103",
                            section: "Maharashtra History & Reformers",
                            slug: "history-of-modern-maharashtra-and-social-reformers",
                            nameMr: "आधुनिक महाराष्ट्राचा इतिहास, प्रबोधन व समाजसुधारक चळवळी",
                            nameEn: "Modern Maharashtra History, Renaissance & Social Reform Movements",
                            name: "महाराष्ट्राचा इतिहास व समाजसुधारक (Maharashtra History & Reformers)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 12,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs1_03",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs1_chap_02",
                            nextChapterId: "m_gs1_chap_04",
                            metaDescriptionMr: "महाराष्ट्रातील १८५७ पूर्वीचे उठाव (उमाजी नाईक, भिल्ल), प्रबोधन पर्व, सत्यशोधक समाज, दलित चळवळ, संयुक्त महाराष्ट्र लढा, आणि महर्षी कर्वे, आगरकर, फुले, शाहू, आंबेडकर विचार.",
                            metaDescriptionEn: "In-depth Maharashtra focus: Tribal/peasant uprisings (Umaji Naik), Renaissance, Satyashodhak Samaj, Dalit emancipation, Samyukta Maharashtra movement, and key reformers.",
                            notesJsonPath: "/data/notes/mains_gs1/g103_maharashtra_history.json",
                            quizTag: "mains_gs1_mh_hist_01",
                            tags: ["Maharashtra History", "Phule Shahu Ambedkar", "Social Reformers", "Satyashodhak Samaj", "Dalit Movement", "Samyukta Maharashtra", "High-Weightage"],
                            searchKeywords: ["maharashtra social reformers", "satyashodhak samaj", "jyotirao phule", "dr br ambedkar maharashtra", "shahu maharaj", "samyukta maharashtra movement", "महाराष्ट्रातील समाजसुधारक", "सत्यशोधक समाज", "संयुक्त महाराष्ट्र चळवळ"],
                            topics: [
                                {
                                    id: "top_g103_01",
                                    nameMr: "महाराष्ट्रातील ब्रिटिशविरोधी उठाव, प्रबोधन व वृत्तपत्रे",
                                    nameEn: "Anti-British Uprisings, Early Renaissance & Vernacular Press in MH",
                                    subtopics: [
                                        {
                                            id: "st_g103_01_01",
                                            titleMr: "महाराष्ट्रातील सुरुवातीचे उठाव: आद्यक्रांतिकारक उमाजी नाईक, भिल्ल-कोळी उठाव, वासुदेव बळवंत फडके (रामोशी संघटना), आणि चाफेकर बंधू",
                                            titleEn: "Early Resistance: Umaji Naik, Tribal Uprisings (Bhil-Koli), Vasudev Balwant Phadke & Chapekar Brothers",
                                            chips: ["उमाजी नाईक", "वासुदेव बळवंत फडके", "चाफेकर बंधू", "भिल्ल उठाव"]
                                        },
                                        {
                                            id: "st_g103_01_02",
                                            titleMr: "प्रबोधन पर्व व वृत्तपत्रे: बाळशास्त्री जांभेकर (दर्पण - १८३२), भाऊ महाजन (प्रभाकर - शतपत्रे), ज्ञानोदय, सुधारक, केसरी व मराठा",
                                            titleEn: "Press & Early Awakening: Balshastri Jambhekar (Darpan), Lokhitwadi (Shatapatre), Tilak's Kesari/Mahratta",
                                            chips: ["बाळशास्त्री जांभेकर (दर्पण)", "लोकहितवादींची शतपत्रे", "केसरी व मराठा"]
                                        }
                                    ],
                                    sources: [
                                        { book: "महाराष्ट्राचा इतिहास - डॉ. एस. एस. गाथाळ", standard: "प्रमाणित संदर्भ", chapterRef: "प्रकरण १ ते ४: १८५७ पूर्वीचे उठाव व वृत्तपत्रे" }
                                    ]
                                },
                                {
                                    id: "top_g103_02",
                                    nameMr: "महाराष्ट्रातील प्रमुख समाजसुधारक व सामाजिक समता लढा",
                                    nameEn: "Pioneering Social Reformers of Maharashtra & Social Justice",
                                    subtopics: [
                                        {
                                            id: "st_g103_02_01",
                                            titleMr: "महात्मा ज्योतिराव फुले व सावित्रीबाई फुले: सत्यशोधक समाज (१८७३), स्त्री शिक्षण, शेतकऱ्यांचा आसूड, आणि बहुजन प्रबोधन",
                                            titleEn: "Mahatma Jyotirao Phule & Savitribai Phule: Satyashodhak Samaj (1873), Girls' Education & Shetkaryacha Asud",
                                            chips: ["महात्मा फुले", "सावित्रीबाई फुले", "सत्यशोधक समाज १८७३", "शेतकऱ्यांचा आसूड"]
                                        },
                                        {
                                            id: "st_g103_02_02",
                                            titleMr: "राजर्षी छत्रपती शाहू महाराज: कोल्हापूर संस्थानातील शैक्षणिक सुधारणा, मागासवर्गीयांना ५०% आरक्षण (१९०२), आणि आंतरजातीय विवाह कायदा",
                                            titleEn: "Rajarshi Chhatrapati Shahu Maharaj: Free Education, 50% Affirmative Action (1902) & Anti-Untouchability Acts",
                                            chips: ["शाहू महाराज", "५०% आरक्षण १९०२", "वेदोक्त प्रकरण", "मोफत प्राथमिक शिक्षण"]
                                        },
                                        {
                                            id: "st_g103_02_03",
                                            titleMr: "डॉ. बाबासाहेब आंबेडकर: मूकनायक, बहिष्कृत हितकारिणी सभा (१९२४), महाड सत्याग्रह (१९२७), काळाराम मंदिर प्रवेश, गोलमेज परिषदा व बौद्ध धम्म दीक्षा",
                                            titleEn: "Dr. B.R. Ambedkar: Bahishkrit Hitakarini Sabha, Mahad Satyagraha (1927), Kalaram Entry & Conversion to Buddhism",
                                            chips: ["डॉ. बाबासाहेब आंबेडकर", "महाड सत्याग्रह १९२७", "बहिष्कृत हितकारिणी सभा", "पुणे करार १९३२"]
                                        },
                                        {
                                            id: "st_g103_02_04",
                                            titleMr: "इतर महान सुधारक: महर्षी धोंडो केशव कर्वे (स्त्री शिक्षण व SNDT विद्यापीठ), गोपाळ गणेश आगरकर (बुद्धिप्रामाण्यवाद), विठ्ठल रामजी शिंदे (डिप्रेस्ड क्लासेस मिशन)",
                                            titleEn: "Reformers Spectrum: Maharshi Karve (SNDT), Gopal Ganesh Agarkar (Rationalism) & Maharshi V.R. Shinde",
                                            chips: ["महर्षी कर्वे (SNDT)", "गोपाळ गणेश आगरकर", "महर्षी विठ्ठल रामजी शिंदे"]
                                        }
                                    ],
                                    sources: [
                                        { book: "महाराष्ट्रातील समाजसुधारक - डॉ. अनिल कठारे", standard: "प्रमाणित संदर्भ", chapterRef: "प्रमुख समाजसुधारक जीवन व कार्य" }
                                    ]
                                },
                                {
                                    id: "top_g103_03",
                                    nameMr: "संयुक्त महाराष्ट्र चळवळ व स्वातंत्र्योत्तर महाराष्ट्र",
                                    nameEn: "Samyukta Maharashtra Movement & Post-Independence Trajectory",
                                    subtopics: [
                                        {
                                            id: "st_g103_03_01",
                                            titleMr: "संयुक्त महाराष्ट्र लढा: पार्श्वभूमी (नागपूर करार १९५३, फाझल अली आयोग), संयुक्त महाराष्ट्र समिती (१९५६), १०६ हुतात्मे, आणि १ मे १९६० रोजी महाराष्ट्र राज्याची निर्मिती",
                                            titleEn: "Samyukta Maharashtra Movement: Nagpur Pact (1953), Fazl Ali Panel, 106 Martyrs & Formation of State on 1 May 1960",
                                            chips: ["संयुक्त महाराष्ट्र समिती", "नागपूर करार १९५३", "१०६ हुतात्मे", "१ मे १९६० महाराष्ट्र"]
                                        }
                                    ],
                                    sources: [
                                        { book: "महाराष्ट्राचा इतिहास - डॉ. एस. एस. गाथाळ", standard: "प्रमाणित संदर्भ", chapterRef: "संयुक्त महाराष्ट्र चळवळ" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग ४: स्वातंत्र्योत्तर भारत व जगाचा इतिहास (Post-Independence & World History)
                        // =========================================================================
                        {
                            id: "m_gs1_chap_04",
                            code: "G104",
                            section: "World & Post-Independence",
                            slug: "post-independence-consolidation-and-world-history",
                            nameMr: "स्वातंत्र्योत्तर भारताचे एकत्रीकरण व जगाचा इतिहास (१८ वे शतक ते आज)",
                            nameEn: "Post-Independence Consolidation & History of the World (18th Century Onwards)",
                            name: "स्वातंत्र्योत्तर भारत व जगाचा इतिहास (Post-Independence & World History)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 8,
                            isMaharashtraReference: false,
                            trackingKey: "progress_m_gs1_04",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs1_chap_03",
                            nextChapterId: "m_gs1_chap_05",
                            metaDescriptionMr: "संस्थानांचे विलीनीकरण (सरदार पटेल), भाषावार प्रांतरचना, औद्योगिकीकरण, औद्योगिक क्रांती, अमेरिकन-फ्रेंच क्रांती, दोन्ही महायुद्धे, शीतयुद्ध आणि सोव्हिएत युनियनचे विघटन.",
                            metaDescriptionEn: "Post-1947 integration of princely states, linguistic reorganisation, Industrial Revolution, American/French Revolutions, World Wars, Cold War, and Collapse of USSR.",
                            notesJsonPath: "/data/notes/mains_gs1/g104_world_history.json",
                            quizTag: "mains_gs1_world_hist_01",
                            tags: ["World History", "Industrial Revolution", "French Revolution", "World War 1 and 2", "Cold War", "Post-Independence India", "Sardar Patel"],
                            searchKeywords: ["world history mains", "industrial revolution", "french revolution", "cold war", "integration of princely states", "जगाचा इतिहास", "औद्योगिक क्रांती", "शीतयुद्ध", "संस्थानांचे विलीनीकरण"],
                            topics: [
                                {
                                    id: "top_g104_01",
                                    nameMr: "स्वातंत्र्योत्तर भारताचे एकत्रीकरण व पुनर्रचना (Post-1947)",
                                    nameEn: "Post-Independence Consolidation & Reorganisation of States",
                                    subtopics: [
                                        {
                                            id: "st_g104_01_01",
                                            titleMr: "संस्थानांचे विलीनीकरण: सरदार वल्लभभाई पटेल व व्ही. पी. मेनन यांची भूमिका; जुनागढ, हैदराबाद (ऑपरेशन पोलो) आणि काश्मीर विलीनीकरण",
                                            titleEn: "Integration of Princely States: Sardar Patel's Diplomacy; Junagadh, Hyderabad (Op Polo) & Kashmir Acceding",
                                            chips: ["सरदार वल्लभभाई पटेल", "ऑपरेशन पोलो (हैदराबाद)", "काश्मीर विलीनीकरण"]
                                        },
                                        {
                                            id: "st_g104_01_02",
                                            titleMr: "भाषावार प्रांतरचना: धार आयोग, JVP समिती, फजल अली राज्य पुनर्रचना आयोग (१९५३-५६), आणि देशांतर्गत एकात्मतेची आव्हाने",
                                            titleEn: "Linguistic Reorganisation: Dhar Commission, JVP Committee, Fazl Ali SRC (1956) & Nation-Building",
                                            chips: ["राज्य पुनर्रचना आयोग १९५६", "फजल अली आयोग", "भाषावार राज्ये"]
                                        }
                                    ],
                                    sources: [
                                        { book: "इंडिया आफ्टर गांधी - रामचंद्र गुहा", standard: "प्रमाणित संदर्भ", chapterRef: "संस्थानांचे विलीनीकरण व भाषावार प्रांतरचना" }
                                    ]
                                },
                                {
                                    id: "top_g104_02",
                                    nameMr: "जगाचा इतिहास: क्रांत्या, जागतिक महायुद्धे व शीतयुद्ध",
                                    nameEn: "World History: Revolutions, World Wars & Cold War Dynamics",
                                    subtopics: [
                                        {
                                            id: "st_g104_02_01",
                                            titleMr: "औद्योगिक क्रांती (कारणे व सामाजिक परिणाम), अमेरिकन स्वातंत्र्ययुद्ध (१७७६), आणि फ्रेंच राज्यक्रांती (१७८९ - स्वातंत्र्य, समता, बंधुता)",
                                            titleEn: "Industrial Revolution, American Revolution (1776) & French Revolution (1789: Liberty, Equality, Fraternity)",
                                            chips: ["औद्योगिक क्रांती", "अमेरिकन क्रांती १७७६", "फ्रेंच राज्यक्रांती १७८९"]
                                        },
                                        {
                                            id: "st_g104_02_02",
                                            titleMr: "पहिले महायुद्ध (१९१४-१८, व्हर्सायचा तह), रशियन क्रांती (१९१७), फॅसिझम-नाझीझमचा उदय, आणि दुसरे महायुद्ध (१९३९-४५ - संयुक्त राष्ट्रांची स्थापना)",
                                            titleEn: "World War I, Russian Revolution 1917, Rise of Nazism/Fascism, and World War II Leading to UN Formation",
                                            chips: ["पहिले महायुद्ध", "रशियन क्रांती १९१७", "नाझीझम व फॅसिझम", "दुसरे महायुद्ध व UN"]
                                        },
                                        {
                                            id: "st_g104_02_03",
                                            titleMr: "वसाहतवादमुक्ती (Decolonisation), शीतयुद्ध (Cold War - अमेरिका vs रशिया), अलिप्ततावादी चळवळ (NAM), आणि सोव्हिएत युनियनचे विघटन (१९९१)",
                                            titleEn: "Decolonisation, Cold War Proxy Theatres, Non-Aligned Movement (NAM) & Fall of USSR (1991)",
                                            chips: ["शीतयुद्ध (Cold War)", "अलिप्ततावाद (NAM)", "सोव्हिएत युनियनचे विघटन १९९१"]
                                        }
                                    ],
                                    sources: [
                                        { book: "मास्टरींग मॉडर्न वर्ल्ड हिस्ट्री - नॉर्मन लोवे", standard: "प्रमाणित संदर्भ", chapterRef: "जागतिक क्रांत्या व महायुद्धे" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग ५: भारतीय समाज (Indian Society)
                        // =========================================================================
                        {
                            id: "m_gs1_chap_05",
                            code: "G105",
                            section: "Indian Society",
                            slug: "salient-features-of-indian-society-and-diversity",
                            nameMr: "भारतीय समाजाची वैशिष्ट्ये, विविधता व महिलांची भूमिका",
                            nameEn: "Salient Features of Indian Society, Diversity & Role of Women",
                            name: "भारतीय समाज: वैशिष्ट्ये व रचना (Salient Features of Indian Society)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 8,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs1_05",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs1_chap_04",
                            nextChapterId: "m_gs1_chap_06",
                            metaDescriptionMr: "भारतीय समाजाची ठळक वैशिष्ट्ये, सांस्कृतिक व भाषिक विविधता, कुटुंब संस्थेतील बदल, महिलांची भूमिका, महिला संघटना, आणि सामाजिक स्तरीकरण.",
                            metaDescriptionEn: "Salient features of Indian society, multicultural diversity, transformation of family structures, role of women and women's organisations, and stratification.",
                            notesJsonPath: "/data/notes/mains_gs1/g105_indian_society.json",
                            quizTag: "mains_gs1_society_01",
                            tags: ["Indian Society", "Salient Features", "Diversity in India", "Role of Women", "Joint Family Breakdown", "Pre-Cum-Mains"],
                            searchKeywords: ["salient features of indian society", "diversity in india", "role of women in society", "family system changes", "भारतीय समाजाची वैशिष्ट्ये", "कुटुंब संस्था बदल", "महिलांची भूमिका"],
                            topics: [
                                {
                                    id: "top_g105_01",
                                    nameMr: "भारतीय समाजाची वैशिष्ट्ये, विविधता व कुटुंब संस्था",
                                    nameEn: "Hallmarks of Indian Society, Plurality & Changing Family",
                                    subtopics: [
                                        {
                                            id: "st_g105_01_01",
                                            titleMr: "भारतीय समाजाची ठळक वैशिष्ट्ये: बहुसांस्कृतिकता, सहिष्णुता, जात व वर्गाचा परस्परसंबंध, आणि विविधतेत एकात्मता",
                                            titleEn: "Salient Traits: Pluralism, Cultural Assimilation, Caste-Class Interplay & Unity in Diversity",
                                            chips: ["बहुसांस्कृतिकता", "विविधतेत एकता", "जात-वर्ग संबंध"]
                                        },
                                        {
                                            id: "st_g105_01_02",
                                            titleMr: "कुटुंब संस्थेतील स्थित्यंतरे: संयुक्त कुटुंब पद्धतीचा ऱ्हास, विभक्त कुटुंबे, एकेरी पालकत्व, आणि वृद्ध व्यक्तींच्या समस्या",
                                            titleEn: "Family Dynamics: Decline of Joint Families, Rise of Nuclear Setups & Elderly Care Challenges",
                                            chips: ["विभक्त कुटुंब पद्धत", "एकल पालकत्व", "वृद्धांचे प्रश्न"]
                                        }
                                    ],
                                    sources: [
                                        { book: "NCERT Class 12 Indian Society", standard: "Class 12", chapterRef: "Chapter 1 & 2: Structure of Indian Society" }
                                    ]
                                },
                                {
                                    id: "top_g105_02",
                                    nameMr: "महिलांची भूमिका, महिला संघटना व लैंगिक न्याय",
                                    nameEn: "Role of Women, Women's Movements & Gender Justice",
                                    subtopics: [
                                        {
                                            id: "st_g105_02_01",
                                            titleMr: "महिलांची सामाजिक-आर्थिक स्थिती: स्त्री-पुरुष प्रमाण, शिक्षण, श्रमबळातील घटता सहभाग (FLFPR), आणि काचेचे छत (Glass Ceiling)",
                                            titleEn: "Socio-Economic Realities: Sex Ratio, Education Gaps, Declining Female LFPR & Workplace Barriers",
                                            chips: ["श्रमबळातील महिला सहभाग", "स्त्री-पुरुष विषमता", "वर्कप्लेस आव्हाने"]
                                        },
                                        {
                                            id: "st_g105_02_02",
                                            titleMr: "महिला संघटना व चळवळी: स्वातंत्र्यपूर्व ते स्वातंत्र्योत्तर महिला चळवळीचा प्रवास, कायदेशीर सुधारणा, आणि बचत गट (SHG) क्रांती",
                                            titleEn: "Women's Organisations: Pre-to-Post Independence Movements, Legal Enactments & Self Help Groups (SHGs)",
                                            chips: ["महिला चळवळी", "बचत गट (SHG)", "कायदेशीर संरक्षण"]
                                        }
                                    ],
                                    sources: [
                                        { book: "NCERT Class 12 Social Change and Development in India", standard: "Class 12", chapterRef: "Social Movements & Gender" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग ६: सामाजिक समस्या, जागतिकीकरण व प्रादेशिकतावाद (Social Issues & Globalization)
                        // =========================================================================
                        {
                            id: "m_gs1_chap_06",
                            code: "G106",
                            section: "Indian Society",
                            slug: "poverty-urbanization-globalization-and-secularism",
                            nameMr: "गरिबी, नागरीकरण, जागतिकीकरणाचा प्रभाव, धर्मनिरपेक्षता व जातीयवाद",
                            nameEn: "Poverty, Urbanization, Globalization Impact, Secularism & Regionalism",
                            name: "सामाजिक समस्या व जागतिकीकरण (Social Issues, Globalization & Secularism)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 10,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs1_06",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs1_chap_05",
                            nextChapterId: "m_gs1_chap_07",
                            metaDescriptionMr: "गरिबी व विकासात्मक आव्हाने, अनियंत्रित नागरीकरण (झोपडपट्ट्या, प्रदूषण), भारतीय संस्कृतीवर जागतिकीकरणाचा प्रभाव, सामाजिक सक्षमीकरण, जातीयवाद व प्रादेशिकतावाद.",
                            metaDescriptionEn: "In-depth review of poverty, developmental dilemmas, urban sprawl (slums, transit), impact of globalization on culture, social empowerment, communalism, regionalism, and secularism.",
                            notesJsonPath: "/data/notes/mains_gs1/g106_social_issues.json",
                            quizTag: "mains_gs1_issues_01",
                            tags: ["Poverty Issues", "Urbanization Slums", "Globalization Impact", "Social Empowerment", "Communalism", "Regionalism", "Secularism"],
                            searchKeywords: ["poverty and development", "urbanization problems", "impact of globalization on indian society", "communalism regionalism secularism", "गरिबी आव्हाने", "नागरीकरण समस्या", "जागतिकीकरण प्रभाव", "जातीयवाद", "धर्मनिरपेक्षता"],
                            topics: [
                                {
                                    id: "top_g106_01",
                                    nameMr: "गरिबी, विकासात्मक प्रश्न व नागरीकरणाची आव्हाने",
                                    nameEn: "Poverty, Developmental Traps & Urbanization Crises",
                                    subtopics: [
                                        {
                                            id: "st_g106_01_01",
                                            titleMr: "गरिबी व वंचितता: बहुआयामी गरिबी निर्देशांक (MPI), कुपोषण, रोजगार निर्मितीतील मर्यादा, आणि विकासाचे प्रादेशिक असमतोल",
                                            titleEn: "Multidimensional Poverty (MPI), Malnutrition, Job Growth Deficits & Regional Inequities",
                                            chips: ["बहुआयामी गरिबी (MPI)", "कुपोषण", "प्रादेशिक असमतोल"]
                                        },
                                        {
                                            id: "st_g106_01_02",
                                            titleMr: "नागरीकरणाच्या समस्या: अनियंत्रित स्थलांतर, झोपडपट्ट्यांची वाढ (उदा. धारावी), पायाभूत सुविधांवरील ताण, कचरा व्यवस्थापन व वाहतूक कोंडी",
                                            titleEn: "Urbanization Crises: Unplanned Migration, Slum Proliferation (Dharavi), Infrastructure Strain & Solid Waste",
                                            chips: ["अनियंत्रित नागरीकरण", "झोपडपट्टी प्रश्न (धारावी)", "शहरी कचरा व्यवस्थापन"]
                                        }
                                    ],
                                    sources: [
                                        { book: "NCERT Class 12 Indian Society", standard: "Class 12", chapterRef: "Patterns of Social Inequality and Exclusion" }
                                    ]
                                },
                                {
                                    id: "top_g106_02",
                                    nameMr: "जागतिकीकरणाचा प्रभाव, सामाजिक सक्षमीकरण, जातीयवाद व प्रादेशिकता",
                                    nameEn: "Effects of Globalization, Empowerment, Communalism & Regionalism",
                                    subtopics: [
                                        {
                                            id: "st_g106_02_01",
                                            titleMr: "जागतिकीकरणाचा भारतीय संस्कृती व समाजावर प्रभाव: भाषा, खाण्यापिण्याच्या सवयी, कौटुंबिक मूल्ये, ग्राहकवाद आणि स्थानिक उद्योगांवरील परिणाम",
                                            titleEn: "Globalization on Culture: Consumerism, Westernization, Food/Language Hybridity & Local Craft Strains",
                                            chips: ["जागतिकीकरण प्रभाव", "ग्राहकवाद", "स्थानिक संस्कृतीचे जतन"]
                                        },
                                        {
                                            id: "st_g106_02_02",
                                            titleMr: "सामाजिक सक्षमीकरण: अनुसूचित जाती, जमाती, ओबीसी, अल्पसंख्याक आणि महिलांचे घटनात्मक व सामाजिक सक्षमीकरण",
                                            titleEn: "Social Empowerment Paradigms for Vulnerable Groups: SC, ST, OBC, Minorities and Women",
                                            chips: ["सामाजिक सक्षमीकरण", "समावेशक विकास", "घटनात्मक संरक्षण"]
                                        },
                                        {
                                            id: "st_g106_02_03",
                                            titleMr: "जातीयवाद (Communalism), प्रादेशिकतावाद (Regionalism) आणि धर्मनिरपेक्षता (Secularism): भारतीय धर्मनिरपेक्षता (सर्वधर्मसमभाव) विरुद्ध पाश्चात्त्य प्रारूप",
                                            titleEn: "Communalism, Regionalism & Secularism: Indian Pluralistic Secularism vs Western Rigid Separation",
                                            chips: ["जातीयवाद धोके", "प्रादेशिकतावाद", "सर्वधर्मसमभाव", "भारतीय धर्मनिरपेक्षता"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Social Problems in India - Ram Ahuja", standard: "प्रमाणित समाजशास्त्र ग्रंथ", chapterRef: "Communalism, Secularism & Regionalism" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग ७: जगाचा व भारताचा प्राकृतिक भूगोल (Physical Geography)
                        // =========================================================================
                        {
                            id: "m_gs1_chap_07",
                            code: "G107",
                            section: "Physical Geography",
                            slug: "physical-geography-geomorphology-climatology-oceanography",
                            nameMr: "प्राकृतिक भूगोल: भूरूपशास्त्र, हवामानशास्त्र व सागरशास्त्र",
                            nameEn: "Physical Geography: Geomorphology, Climatology & Oceanography",
                            name: "प्राकृतिक भूगोल (Physical Geography of the World & India)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 12,
                            isMaharashtraReference: false,
                            trackingKey: "progress_m_gs1_07",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs1_chap_06",
                            nextChapterId: "m_gs1_chap_08",
                            metaDescriptionMr: "भूगर्भीय रचना, भूपट्ट विवर्तनिकी (Plate Tectonics), भूकंप व ज्वालामुखी, वातावरणीय अभिसरण, मान्सूनची निर्मिती यंत्रणा, चक्रीवादळे, सागरी प्रवाह आणि भरती-ओहोटी.",
                            metaDescriptionEn: "Comprehensive physical geography: Earth's interior, Plate Tectonics, Earthquakes, Volcanoes, Atmospheric Circulation, Monsoon mechanisms, Cyclones, Ocean Currents, and Tides.",
                            notesJsonPath: "/data/notes/mains_gs1/g107_physical_geography.json",
                            quizTag: "mains_gs1_phy_geog_01",
                            tags: ["Physical Geography", "Geomorphology", "Plate Tectonics", "Climatology Monsoon", "Tropical Cyclones", "Ocean Currents", "Pre-Cum-Mains"],
                            searchKeywords: ["physical geography mains", "plate tectonics", "monsoon mechanism india", "tropical cyclones", "ocean currents", "प्राकृतिक भूगोल", "भूपट्ट विवर्तनिकी", "मान्सून निर्मिती", "सागरी प्रवाह"],
                            topics: [
                                {
                                    id: "top_g107_01",
                                    nameMr: "भूरूपशास्त्र (Geomorphology): पृथ्वीचे अंतरंग, भूपट्ट विवर्तन व भूरूपे",
                                    nameEn: "Geomorphology: Earth's Interior, Plate Tectonics & Landforms",
                                    subtopics: [
                                        {
                                            id: "st_g107_01_01",
                                            titleMr: "पृथ्वीचे अंतरंग (क्रस्ट, मेंटल, कोर), भूकंपाच्या लहरी (P व S लहरी) आणि खंडवहन सिद्धांत (Continental Drift)",
                                            titleEn: "Earth's Interior Structure (Crust, Mantle, Core), Seismic Waves & Continental Drift Theory",
                                            chips: ["पृथ्वीचे अंतरंग", "भूकंप लहरी P व S", "खंडवहन सिद्धांत (वेगेनर)"]
                                        },
                                        {
                                            id: "st_g107_01_02",
                                            titleMr: "भूपट्ट विवर्तनिकी सिद्धांत (Plate Tectonics): भूपट्ट सीमांचे प्रकार (अपसारी, अभिसारी, रूपांतरित), पर्वतनिर्मिती, भूकंप व पॅसिफिक रिंग ऑफ फायर",
                                            titleEn: "Plate Tectonics Paradigm: Convergent, Divergent, Transform Boundaries, Orogeny & Pacific Ring of Fire",
                                            chips: ["भूपट्ट विवर्तनिकी", "पॅसिफिक रिंग ऑफ फायर", "पर्वतनिर्मिती"]
                                        },
                                        {
                                            id: "st_g107_01_03",
                                            titleMr: "विदारण व अपक्षरण कार्य (Weathering & Erosion): नदी, वारा, हिमनदी, सागरी लाटा आणि भूजल यांमुळे निर्माण होणारी खनन व निक्षेपण भूरूपे",
                                            titleEn: "Exogenic Processes: Fluvial, Aeolian, Glacial, Coastal & Karst Erosional/Depositional Landforms",
                                            chips: ["नदीची भूरूपे", "वाऱ्याची भूरूपे", "कार्स्ट भूरूपे", "खनन व निक्षेपण"]
                                        }
                                    ],
                                    sources: [
                                        { book: "NCERT Class 11 Fundamentals of Physical Geography", standard: "Class 11", chapterRef: "Unit II & III: The Earth & Landforms" }
                                    ]
                                },
                                {
                                    id: "top_g107_02",
                                    nameMr: "हवामानशास्त्र व सागरशास्त्र (Climatology & Oceanography)",
                                    nameEn: "Climatology, Indian Monsoon Mechanics & Ocean Dynamics",
                                    subtopics: [
                                        {
                                            id: "st_g107_02_01",
                                            titleMr: "वातावरणाची रचना, उष्णतेचे अंदाजपत्रक (Heat Budget), ग्रहीय वारे, आणि जेट प्रवाहांची भूमिका (Jet Streams)",
                                            titleEn: "Atmospheric Layers, Heat Budget, Global Pressure Belts, Planetary Winds & Jet Streams",
                                            chips: ["वातावरण रचना", "उष्णता अंदाजपत्रक", "जेट प्रवाह"]
                                        },
                                        {
                                            id: "st_g107_02_02",
                                            titleMr: "भारतीय मान्सून निर्मिती यंत्रणा: तिबेटचे पठार, ITCZ चे स्थानांतरण, अल-निनो (El-Nino), ला-निना (La-Nina) आणि हिंद महासागर द्विध्रुव (IOD)",
                                            titleEn: "Mechanics of Indian Monsoon: Thermal Engines, ITCZ Shift, El-Niño, La-Niña & Indian Ocean Dipole (IOD)",
                                            chips: ["मान्सून यंत्रणा", "ITCZ", "अल-निनो व ला-निना", "IOD द्विध्रुव"]
                                        },
                                        {
                                            id: "st_g107_02_03",
                                            titleMr: "उष्णकटिबंधीय चक्रीवादळे (Tropical Cyclones - निर्मिती अटी व रचना); सागरतळ रचना, सागरी प्रवाह (उष्ण व थंड), आणि भरती-ओहोटी",
                                            titleEn: "Tropical Cyclones (Conditions, Eye & Fronts), Ocean Floor Relief, Ocean Currents & Tides",
                                            chips: ["उष्णकटिबंधीय चक्रीवादळ", "सागरी प्रवाह", "भरती-ओहोटी"]
                                        }
                                    ],
                                    sources: [
                                        { book: "NCERT Class 11 Fundamentals of Physical Geography", standard: "Class 11", chapterRef: "Unit IV & V: Climate and Oceans" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग ८: नैसर्गिक साधनसंपत्तीचे जागतिक व भारतीय वितरण (Natural Resources)
                        // =========================================================================
                        {
                            id: "m_gs1_chap_08",
                            code: "G108",
                            section: "Natural Resources",
                            slug: "distribution-of-key-natural-resources-across-the-world-and-india",
                            nameMr: "महत्त्वाच्या नैसर्गिक साधनसंपत्तीचे जागतिक व भारतीय वितरण",
                            nameEn: "Distribution of Key Natural Resources Across World & India",
                            name: "नैसर्गिक साधनसंपत्तीचे वितरण (Distribution of Natural Resources)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 8,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs1_08",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs1_chap_07",
                            nextChapterId: "m_gs1_chap_09",
                            metaDescriptionMr: "खनिजे व धातू संसाधने (लोहखनिज, बॉक्साईट, तांबे), ऊर्जा साधने (कोळसा, पेट्रोलियम, अणुऊर्जा, सौर ऊर्जा), जलसंपत्ती, वनसंपत्ती, आणि भारताचे खनिज पट्टे.",
                            metaDescriptionEn: "Global and Indian spatial distribution of metallic minerals (Iron ore, Bauxite), energy reserves (Coal, Petroleum, Nuclear, Solar), water bodies, forests, and mineral belts.",
                            notesJsonPath: "/data/notes/mains_gs1/g108_natural_resources.json",
                            quizTag: "mains_gs1_resources_01",
                            tags: ["Natural Resources", "Mineral Distribution", "Energy Reserves", "Chota Nagpur Belt", "Renewable Energy", "Pre-Cum-Mains"],
                            searchKeywords: ["distribution of natural resources mains", "iron ore distribution world india", "coal and petroleum reserves", "water resources crisis", "खनिज संपत्ती वितरण", "कोळसा व पेट्रोलियम साठे", "ऊर्जा साधने"],
                            topics: [
                                {
                                    id: "top_g108_01",
                                    nameMr: "खनिजे, ऊर्जा संसाधने व त्यांचे प्रादेशिक वितरण",
                                    nameEn: "Mineral Belts, Energy Resources & Spatial Endowments",
                                    subtopics: [
                                        {
                                            id: "st_g108_01_01",
                                            titleMr: "लोहखनिज, बॉक्साईट, मॅग्नेशियम आणि तांबे यांचे जगातील व भारतातील प्रमुख पट्टे (छोटा नागपूर पठार, धारवाड पट्टा)",
                                            titleEn: "Metallic Minerals: Iron Ore, Bauxite, Manganese & Copper across Global Belts and Indian Belts (Chota Nagpur)",
                                            chips: ["लोहखनिज साठे", "बॉक्साईट", "छोटा नागपूर खनिज पट्टा"]
                                        },
                                        {
                                            id: "st_g108_01_02",
                                            titleMr: "पारंपरिक ऊर्जा संसाधने: कोळसा (गोंडवाना व तृतीयक साठे), पेट्रोलियम व नैसर्गिक वायू (मुंबई हाय, बॉम्बे ऑफशोअर), आणि रिफायनरी स्थाने",
                                            titleEn: "Fossil Energy: Gondwana vs Tertiary Coal, Offshore Petroleum (Mumbai High) & Strategic Oil Reserves",
                                            chips: ["गोंडवाना कोळसा", "मुंबई हाय पेट्रोलियम", "नैसर्गिक वायू"]
                                        },
                                        {
                                            id: "st_g108_01_03",
                                            titleMr: "अपारंपरिक व नवीकरणीय ऊर्जा: सौर ऊर्जा पट्टा, पवन ऊर्जा, अणुऊर्जा (युरेनियम व थोरियम साठे), आणि ग्रीन हायड्रोजन क्षमता",
                                            titleEn: "Renewable Frontiers: Solar Parks, Wind Corridors, Nuclear Minerals (Uranium/Thorium) & Green Hydrogen",
                                            chips: ["सौर ऊर्जा क्षमता", "पवन ऊर्जा", "अणुऊर्जा (थोरियम)", "ग्रीन हायड्रोजन"]
                                        }
                                    ],
                                    sources: [
                                        { book: "NCERT Class 12 India: People and Economy", standard: "Class 12", chapterRef: "Mineral and Energy Resources" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग ९: उद्योग स्थानाचे घटक (Factors for Location of Industries)
                        // =========================================================================
                        {
                            id: "m_gs1_chap_09",
                            code: "G109",
                            section: "Economic Geography",
                            slug: "factors-responsible-for-location-of-primary-secondary-tertiary-industries",
                            nameMr: "उद्योगांचे स्थान निश्चिती घटक (प्राथमिक, द्वितीयक व तृतीयक उद्योग)",
                            nameEn: "Factors Responsible for Location of Primary, Secondary & Tertiary Industries",
                            name: "उद्योग स्थान निश्चिती घटक (Location of Industries)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 8,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs1_09",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs1_chap_08",
                            nextChapterId: "m_gs1_chap_10",
                            metaDescriptionMr: "वेबरचा औद्योगिक स्थान सिद्धांत, लोह-पोलाद उद्योग, कापड उद्योग, साखर उद्योग (महाराष्ट्र स्थलांतर), ऑटोमोबाईल आणि आयटी उद्योगांचे स्थानीकरण घटक.",
                            metaDescriptionEn: "Weber's industrial location theory, raw material vs market-oriented industries, Iron & Steel, Textiles, Sugar industry shift to South/MH, Automobile and IT clusters.",
                            notesJsonPath: "/data/notes/mains_gs1/g109_industry_location.json",
                            quizTag: "mains_gs1_industry_01",
                            tags: ["Industrial Location", "Webers Theory", "Iron and Steel Industry", "Sugar Industry Maharashtra", "Cotton Textiles", "IT Corridors", "Pre-Cum-Mains"],
                            searchKeywords: ["factors responsible for location of industries", "weber industrial location", "sugar industry shift to maharashtra", "iron and steel industry location", "उद्योग स्थान निश्चिती घटक", "साखर उद्योग स्थलांतर", "कापड व आयटी उद्योग"],
                            topics: [
                                {
                                    id: "top_g109_01",
                                    nameMr: "औद्योगिक स्थान सिद्धांत व पारंपरिक अवजड उद्योग",
                                    nameEn: "Location Theories & Heavy Manufacturing Paradigms",
                                    subtopics: [
                                        {
                                            id: "st_g109_01_01",
                                            titleMr: "अल्फ्रेड वेबरचा औद्योगिक स्थान सिद्धांत: कच्चा माल (वजन घटणारा vs सर्वव्यापी), वाहतूक खर्च, बाजारपेठ आणि स्वस्त कामगारांची उपलब्धता",
                                            titleEn: "Alfred Weber's Least Cost Theory: Weight-Losing vs Ubiquitous Raw Materials, Agglomeration & Freight",
                                            chips: ["वेबरचा स्थान सिद्धांत", "वजन घटणारा कच्चा माल", "वाहतूक खर्च"]
                                        },
                                        {
                                            id: "st_g109_01_02",
                                            titleMr: "लोह व पोलाद उद्योग: कच्च्या मालाजवळील स्थान (कोळसा व लोहखनिज पट्टे - जमशेदपूर, भिलाई) आणि किनारपट्टीवरील स्थान बदल (उदा. विशाखापट्टणम)",
                                            titleEn: "Iron & Steel Plants: Resource Proximate Locations (Jamshedpur, Bhilai) vs Coastal Relocations (Vizag)",
                                            chips: ["लोह-पोलाद उद्योग", "जमशेदपूर व भिलाई", "किनारपट्टी पोलाद प्रकल्प"]
                                        }
                                    ],
                                    sources: [
                                        { book: "NCERT Class 12 Fundamentals of Human Geography", standard: "Class 12", chapterRef: "Secondary Activities & Manufacturing" }
                                    ]
                                },
                                {
                                    id: "top_g109_02",
                                    nameMr: "कृषी-आधारित उद्योग, ऑटोमोबाईल व तृतीयक/IT क्लस्टर्स",
                                    nameEn: "Agro-Industries, Automobile Hubs & IT Footloose Corridors",
                                    subtopics: [
                                        {
                                            id: "st_g109_02_01",
                                            titleMr: "साखर उद्योग: उत्तर भारताकडून दक्षिण भारत व महाराष्ट्राकडे झालेले स्थलांतर (उसाची उच्च रिकव्हरी, आर्द्र हवामान आणि सहकारी साखर कारखाने)",
                                            titleEn: "Sugar Industry Spatial Shift: North to South/Maharashtra (Higher Sucrose Recovery, Maritime Air & Cooperatives)",
                                            chips: ["साखर उद्योग स्थलांतर", "महाराष्ट्रातील सहकारी साखर कारखाने", "सुक्रोज प्रमाण"]
                                        },
                                        {
                                            id: "st_g109_02_02",
                                            titleMr: "कापड उद्योग (मुंबई, अहमदाबाद ते विदर्भ), ऑटोमोबाईल क्लस्टर्स (पुणे-चाकण), आणि फूटलूस उद्योग (Footloose Industries: आयटी पार्क - पुणे, बेंगळुरू, हैदराबाद)",
                                            titleEn: "Cotton Textiles, Automobile Belts (Pune-Chakan Hub) & Footloose Industries (IT Corridors)",
                                            chips: ["कापड गिरण्या", "पुणे ऑटोमोबाईल हब", "फूटलूस उद्योग (IT पार्क)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "महाराष्ट्र व भारताचा भूगोल - ए. बी. सवदी", standard: "प्रमाणित संदर्भ", chapterRef: "महाराष्ट्रातील प्रमुख उद्योग व वसाहती" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग १०: महाराष्ट्राचा प्राकृतिक, सामाजिक व आर्थिक भूगोल (Maharashtra Geography)
                        // =========================================================================
                        {
                            id: "m_gs1_chap_10",
                            code: "G110",
                            section: "Maharashtra Geography",
                            slug: "geography-of-maharashtra-physical-river-systems-and-economy",
                            nameMr: "महाराष्ट्राचा भूगोल: प्राकृतिक रचना, नदीप्रणाली, हवामान व शेती",
                            nameEn: "Geography of Maharashtra: Relief, Drainage, Climate & Agrarian Economy",
                            name: "महाराष्ट्राचा भूगोल (Geography of Maharashtra - In-Depth)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 12,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs1_10",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs1_chap_09",
                            nextChapterId: "m_gs1_chap_11",
                            metaDescriptionMr: "कोकण, पश्चिम घाट (सह्याद्री), महाराष्ट्र पठार (दख्खन), गोदावरी-भीमा-कृष्णा खोरी, पर्जन्यछायेचा प्रदेश (दुष्काळ), काळी कापसाची मृदा (रेगूर), आणि सिंचन आव्हाने.",
                            metaDescriptionEn: "In-depth Maharashtra geography: Konkan coast, Western Ghats escarpment, Deccan plateau, Godavari-Bhima-Krishna basins, Rain-shadow drought belt, Regur soils, and irrigation issues.",
                            notesJsonPath: "/data/notes/mains_gs1/g110_maharashtra_geography.json",
                            quizTag: "mains_gs1_mh_geog_01",
                            tags: ["Maharashtra Geography", "Western Ghats Sahyadri", "Konkan Coastal Lowlands", "Deccan Traps", "Godavari Krishna Basins", "Rain Shadow Drought", "Regur Soil", "High-Weightage"],
                            searchKeywords: ["geography of maharashtra mains", "sahyadri western ghats", "konkan relief", "godavari river basin", "drought in maharashtra", "regur soil", "महाराष्ट्राचा प्राकृतिक भूगोल", "सह्याद्री घाटमाथा", "गोदावरी नदी खोरे", "महाराष्ट्रातील दुष्काळ"],
                            topics: [
                                {
                                    id: "top_g110_01",
                                    nameMr: "महाराष्ट्राची प्राकृतिक रचना व नदीप्रणाली",
                                    nameEn: "Geomorphic Divisions & River Basins of Maharashtra",
                                    subtopics: [
                                        {
                                            id: "st_g110_01_01",
                                            titleMr: "३ प्रमुख प्राकृतिक विभाग: १) कोकण किनारपट्टी (उत्तरेकडे रुंद, खाड्या व बंदरे), २) सह्याद्री पर्वत / पश्चिम घाट (घाटमाथा, महत्त्वाचे घाट - थळघाट, बोरघाट, कुंभार्ली), ३) महाराष्ट्र पठार (दख्खन ट्रॅप - लाव्हाचे थर)",
                                            titleEn: "3 Physical Divisions: Konkan Coast (Creeks/Ports), Sahyadri Escarpment (Major Ghat Passes) & Maharashtra Plateau (Deccan Traps)",
                                            chips: ["कोकण किनारपट्टी", "सह्याद्री पर्वत (घाटमाथा)", "महाराष्ट्र पठार (दख्खन ट्रॅप)", "घाट रस्ते"]
                                        },
                                        {
                                            id: "st_g110_01_02",
                                            titleMr: "नदीप्रणाली: पूर्ववाहिनी नद्या (गोदावरी - महाराष्ट्राची जीवनरेखा, भीमा, कृष्णा) विरुद्ध पश्चिमवाहिनी नद्या (तापी, नर्मदा व कोकणातील तीव्र उताराच्या लहान नद्या)",
                                            titleEn: "Drainage Systems: East-flowing Rivers (Godavari Lifeline, Bhima, Krishna) vs West-flowing (Tapi, Narmada & Konkan Torrents)",
                                            chips: ["गोदावरी खोरे (महाराष्ट्राची जीवनरेखा)", "भीमा व कृष्णा", "तापी खोरे", "कोकणातील नद्या"]
                                        }
                                    ],
                                    sources: [
                                        { book: "महाराष्ट्र व भारताचा भूगोल - ए. बी. सवदी", standard: "प्रमाणित संदर्भ", chapterRef: "प्रकरण १, २ व ३: महाराष्ट्राची प्राकृतिक रचना व जलप्रणाली" }
                                    ]
                                },
                                {
                                    id: "top_g110_02",
                                    nameMr: "हवामान, दुष्काळी पट्टा, मृदा प्रकार व कृषी प्रश्न",
                                    nameEn: "Climate Extremes, Drought-Prone Belt, Soils & Irrigation",
                                    subtopics: [
                                        {
                                            id: "st_g110_01_03",
                                            titleMr: "महाराष्ट्राचे हवामान व पर्जन्यछायेचा पट्टा (Rain-shadow Area): सह्याद्रीतील मुसळधार पाऊस (आंबोली) विरुद्ध विदर्भ-मराठवाडा दुष्काळ पट्टा (जिल्हे: अहमदनगर, बीड, उस्मानाबाद, सोलापूर)",
                                            titleEn: "Maharashtra Climate: Orographic Rainfall at Amboli vs Deep Rain-Shadow Drought Belt in Marathwada/Western MH",
                                            chips: ["पर्जन्यछायेचा प्रदेश", "मराठवाडा दुष्काळ पट्टा", "आंबोली सर्वाधिक पाऊस"]
                                        },
                                        {
                                            id: "st_g110_01_04",
                                            titleMr: "मृदा प्रकार व शेती आव्हाने: काळी कापसाची मृदा (रेगूर - ओलावा टिकवणारी), जांभी मृदा (कोकण), जलसिंचन अनुशेष, भूजल पातळी घट, आणि पीक प्रारूप बदल",
                                            titleEn: "Soils & Agrarian Challenges: Black Cotton Soil (Regur Moisture Retention), Laterite (Konkan), Groundwater Depletion & Irrigation Backlog",
                                            chips: ["रेगूर काळी मृदा", "जांभी मृदा", "सिंचन अनुशेष", "भूजल पातळी घट"]
                                        }
                                    ],
                                    sources: [
                                        { book: "महाराष्ट्र व भारताचा भूगोल - ए. बी. सवदी", standard: "प्रमाणित संदर्भ", chapterRef: "हवामान, मृदा व जलसंधारण" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग ११: महत्त्वाच्या भूभौतिकीय घटना व हवामान बदल (Geophysical Phenomena)
                        // =========================================================================
                        {
                            id: "m_gs1_chap_11",
                            code: "G111",
                            section: "Geophysical Phenomena",
                            slug: "important-geophysical-phenomena-earthquakes-cyclones-and-climate",
                            nameMr: "महत्त्वाच्या भूभौतिकीय घटना: भूकंप, त्सुनामी, ज्वालामुखी व चक्रीवादळे",
                            nameEn: "Important Geophysical Phenomena: Earthquakes, Tsunami, Volcanoes & Cyclones",
                            name: "भूभौतिकीय घटना व आपत्ती (Geophysical Phenomena & Critical Changes)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 8,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs1_11",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs1_chap_10",
                            nextChapterId: "m_gs1_chap_12",
                            metaDescriptionMr: "भूकंप प्रवण क्षेत्रे (भारताचे सिस्मिक झोन), किल्लारी व कोयना भूकंप, त्सुनामी निर्मिती, अरबी समुद्रातील चक्रीवादळांची वाढती वारंवारता, आणि हिमनद्या वितळणे.",
                            metaDescriptionEn: "In-depth review of seismic zones in India, Killari/Koyna earthquakes, Tsunami genesis, rising frequency of Arabian Sea cyclones, Glacial melt, and critical ecosystem shifts.",
                            notesJsonPath: "/data/notes/mains_gs1/g111_geophysical.json",
                            quizTag: "mains_gs1_geophys_01",
                            tags: ["Geophysical Phenomena", "Seismic Zones India", "Killari Earthquake", "Arabian Sea Cyclones", "Tsunami", "Glacial Retreat"],
                            searchKeywords: ["geophysical phenomena mains", "earthquake zones india", "killari koyna earthquake", "cyclones arabian sea", "tsunami genesis", "भूभौतिकीय घटना", "भूकंप झोन", "किल्लारी भूकंप", "अरबी समुद्रातील चक्रीवादळे"],
                            topics: [
                                {
                                    id: "top_g111_01",
                                    nameMr: "भूकंप, त्सुनामी व महाराष्ट्रातील भूकंप इतिहास",
                                    nameEn: "Earthquakes, Tsunami Genesis & Maharashtra's Seismic Risk",
                                    subtopics: [
                                        {
                                            id: "st_g111_01_01",
                                            titleMr: "भारताचे भूकंप प्रवण क्षेत्र (Seismic Zones II, III, IV, V); भूकंपाची कारणे, फॉल्ट लाईन्स आणि भूकंप-रोधक बांधकामांची गरज",
                                            titleEn: "India's Seismic Zoning (Zones II to V), Fault-line Dynamics & Earthquake-Resistant Structural Norms",
                                            chips: ["सिस्मिक झोन II ते V", "भूकंप फॉल्ट लाईन्स", "भूकंप-रोधक संरचना"]
                                        },
                                        {
                                            id: "st_g111_01_02",
                                            titleMr: "महाराष्ट्रातील भूकंपाचा इतिहास: कोयना भूकंप (१९६७ - धरणप्रेरित भूकंप / Reservoir Induced Seismicity - RIS) आणि लातूर-किल्लारी भूकंप (१९९३ - अंतर्पट्टीय भूकंप)",
                                            titleEn: "Maharashtra Seismic History: Koyna 1967 (Reservoir Induced Seismicity) & Latur-Killari 1993 (Intraplate Quake)",
                                            chips: ["कोयना भूकंप १९६७ (धरणप्रेरित)", "किल्लारी भूकंप १९९३ (लातूर)", "अंतर्पट्टीय हालचाली"]
                                        },
                                        {
                                            id: "st_g111_01_03",
                                            titleMr: "त्सुनामी: निर्मिती यंत्रणा (सागरी तळ भूकंप), २००४ ची हिंदी महासागरातील त्सुनामी, आणि INCOIS ची पूर्वसूचना प्रणाली",
                                            titleEn: "Tsunami Genesis: Subsea Seismic Triggers, 2004 Indian Ocean Devastation & INCOIS Warning Network",
                                            chips: ["त्सुनामी यंत्रणा", "२००४ त्सुनामी", "INCOIS पूर्वसूचना प्रणाली"]
                                        }
                                    ],
                                    sources: [
                                        { book: "NDMA मार्गदर्शक तत्त्वे", standard: "शासकीय अहवाल", chapterRef: "Management of Earthquakes and Tsunamis" }
                                    ]
                                },
                                {
                                    id: "top_g111_02",
                                    nameMr: "चक्रीवादळे, हिमनद्या वितळणे व पर्यावरणातील गंभीर बदल",
                                    nameEn: "Cyclonic Changes, Cryosphere Melt & Critical Habitat Shifts",
                                    subtopics: [
                                        {
                                            id: "st_g111_02_01",
                                            titleMr: "अरबी समुद्रात वाढती चक्रीवादळे: जागतिक तापमानवाढीमुळे अरबी समुद्राचे तापमान वाढणे आणि महाराष्ट्राच्या कोकण किनारपट्टीला बसणारा तडाखा (उदा. निसर्ग, तौक्ते चक्रीवादळ)",
                                            titleEn: "Arabian Sea Cyclogenesis: Rising Sea Surface Temperatures (SST) & Cyclone Threats to Konkan (Nisarga, Tauktae)",
                                            chips: ["अरबी समुद्र तापमानवाढ", "निसर्ग व तौक्ते चक्रीवादळ", "कोकण किनारपट्टी धोका"]
                                        },
                                        {
                                            id: "st_g111_02_02",
                                            titleMr: "क्रायोस्फिअर बदल: हिमालयीन हिमनद्यांचे वितळणे (Glacial Retreat), हिमतलाव फुटणे (GLOF - Glacial Lake Outburst Flood), आणि जैवविविधतेचे नुकसान",
                                            titleEn: "Cryospheric Shrinkage: Himalayan Glacier Retreat, GLOF Flash Floods & Floral/Faunal Extinction Pressures",
                                            chips: ["हिमनद्या वितळणे", "GLOF पूर", "जैवविविधता संकट"]
                                        }
                                    ],
                                    sources: [
                                        { book: "NCERT Class 11 Physical Geography", standard: "Class 11", chapterRef: "Natural Hazards and Disasters" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग १२: जीएस १ मास्टर उत्तर लेखन, PYQ विश्लेषण व टाइम मॅनेजमेंट (Master Strategy)
                        // =========================================================================
                        {
                            id: "m_gs1_chap_12",
                            code: "G112",
                            section: "Master Strategy & Answer Writing",
                            slug: "gs1-master-answer-writing-diagrams-and-pyq-trends",
                            nameMr: "जीएस १ उत्तर लेखन शैली, नकाशे-आकृत्या व PYQ विश्लेषण",
                            nameEn: "GS 1 Answer Writing, Geography Maps, Diagrams & PYQ Trends",
                            name: "जीएस १ मास्टर उत्तर लेखन व रणनीती (GS 1 Master Strategy)",
                            category: "REVISION",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 8,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs1_12",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs1_chap_11",
                            nextChapterId: null,
                            metaDescriptionMr: "वर्णनात्मक उत्तर लेखनाची चौकट (Introduction, Body, Conclusion), भूगोलात भारताचे व महाराष्ट्राचे नकाशे काढणे, इतिहासातील टाइमलाइन्स, आणि २० प्रश्नांचे १८० मिनिटांत व्यवस्थापन.",
                            metaDescriptionEn: "Master answer writing framework for GS 1: Intro-Body-Conclusion, rapid hand-drawn India/Maharashtra maps, history timelines, diagrams, and managing 20 questions in 180 minutes.",
                            notesJsonPath: "/data/notes/mains_gs1/g112_master_strategy.json",
                            quizTag: "mains_gs1_strategy_01",
                            tags: ["GS1 Answer Writing", "Geography Maps Drawing", "Timelines in History", "Intro Body Conclusion", "Time Management 180 Mins", "High-Yield"],
                            searchKeywords: ["gs 1 answer writing mpsc", "how to draw maps in geography mains", "gs 1 time management", "mpsc mains gs 1 strategy", "जीएस १ उत्तर लेखन", "भूगोल नकाशे काढणे", "वेळ व्यवस्थापन"],
                            topics: [
                                {
                                    id: "top_g112_01",
                                    nameMr: "उत्तर लेखन रचना, नकाशे व आकृत्यांचे उपयोजन",
                                    nameEn: "Answer Architecture, Rapid Cartography & Diagrams Integration",
                                    subtopics: [
                                        {
                                            id: "st_g112_01_01",
                                            titleMr: "३-टप्प्यांची उत्तर रचना: नेमकी व्याख्या/संदर्भ असलेली प्रस्तावना (३०-४० शब्द), उपमुद्दे व बुलेट पॉईंट्समध्ये मुख्य गाभा, आणि भविष्याभिमुख निष्कर्ष",
                                            titleEn: "3-Tier Structure: Definitional/Contextual Intro, Sub-headed Point-wise Body & Forward-Looking Conclusion",
                                            chips: ["३-टप्प्यांची रचना", "बुलेट पॉईंट्स मांडणी", "भविष्याभिमुख निष्कर्ष"]
                                        },
                                        {
                                            id: "st_g112_01_02",
                                            titleMr: "भूगोलात नकाशे व आकृत्या: भारत व महाराष्ट्राचा नकाशा ३० सेकंदात काढून त्यावर खनिजे, नद्या, किंवा पर्जन्यछायेचा पट्टा दाखवण्याचे तंत्र",
                                            titleEn: "Rapid Cartography: Drawing India & Maharashtra Outlines in 30 Seconds to Pinpoint Belts, Rivers and Drought Zones",
                                            chips: ["भारताचा नकाशा", "महाराष्ट्राचा नकाशा ३० सेकंदात", "आकृत्या व फ्लोचार्ट"]
                                        },
                                        {
                                            id: "st_g112_01_03",
                                            titleMr: "वेळ व शब्दमर्यादा व्यवस्थापन: १० गुणांच्या प्रश्नाला (१५० शब्द) ७ मिनिटे आणि १५ गुणांच्या प्रश्नाला (२५० शब्द) १०.५ मिनिटे वेळेची विभागणी",
                                            titleEn: "Time Budgeting: 7 Minutes for 10-Markers (150 Words) & 10.5 Minutes for 15-Markers (250 Words) across 20 Questions",
                                            chips: ["१० गुणांचे प्रश्न (७ मिनिटे)", "१५ गुणांचे प्रश्न (१०.५ मिनिटे)", "१८० मिनिटे २० प्रश्न पूर्ण"]
                                        }
                                    ],
                                    sources: [
                                        { book: "MPSC & UPSC GS 1 मागील वर्षांचे पेपर्स", standard: "२०१३ ते २०२५", chapterRef: "टॉपर्स उत्तरपत्रिका विश्लेषण" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "rajyaseva_mains_paper_5",
            paperNumber: 5,
            code: "GS2",
            slug: "mains-general-studies-2",
            nameMr: "सामान्य अध्ययन २: संविधान, राज्यव्यवस्था, शासनप्रणाली, सामाजिक न्याय व आंतरराष्ट्रीय संबंध",
            nameEn: "General Studies II: Constitution, Polity, Governance, Social Justice & IR",
            type: "Merit",
            standard: "पदवी स्तर (महाराष्ट्राच्या विशेष संदर्भासह)",
            durationHours: 3,
            marks: 250,
            subjects: [
                {
                    id: "sub_mains_gs2_polity_governance_social_justice_ir",
                    code: "GS2_SUB",
                    slug: "mains-gs2-governance-constitution-polity-social-justice-and-ir",
                    nameMr: "सामान्य अध्ययन २: शासनव्यवस्था, संविधान, राज्यव्यवस्था, सामाजिक न्याय व आंतरराष्ट्रीय संबंध",
                    nameEn: "General Studies II: Governance, Constitution, Polity, Social Justice & International Relations",
                    name: "सामान्य अध्ययन २ (Paper 5: General Studies II - 250 Marks)",
                    officialScope: "MPSC State Services Mains Paper 5 (General Studies II): Governance, Constitution, Polity, Social Justice and International Relations with special weightage to Maharashtra (Descriptive Pattern - 250 Marks, Duration: 3 Hours).",
                    version: "1.0",
                    verifiedDate: "2026-10-28",
                    notesJsonBaseDir: "/data/notes/mains_gs2/",


                    theme: {
                        primaryColor: "#1e3a8a",        // Deep Navy / Constitutional Law & Diplomacy Theme
                        bgColor: "#eff6ff",
                        iconClass: "ri-scales-3-line"
                    },


                    metrics: {
                        totalChapters: 12,
                        totalEstimatedHours: 115,
                        totalMarks: 250,
                        targetMarks: 120,               // स्पर्धात्मक निवडीसाठी सुरक्षित जीएस-२ स्कोअर
                        paperDurationHours: 3
                    },


                    subjectTags: [
                        "Mains-Merit",
                        "Paper-5-Mains",
                        "GS-2",
                        "Descriptive-Subjective",
                        "Indian-Constitution",
                        "Federalism-Centre-State",
                        "Parliament-State-Legislatures",
                        "Judiciary-Appeals-Review",
                        "Constitutional-Statutory-Bodies",
                        "Good-Governance-E-Governance",
                        "Social-Justice-Vulnerable-Sections",
                        "International-Relations-Diplomacy"
                    ],


                    filterCategory: "MAINS_MERIT",
                    searchKeywords: [
                        "mpsc mains gs 2", "indian constitution mains", "cooperative federalism",
                        "parliament state legislature maharashtra", "judicial review collegium",
                        "e-governance citizens charter", "social justice vulnerable groups", "india bilateral relations",
                        "सामान्य अध्ययन २", "भारतीय संविधान", "शासनव्यवस्था", "केंद्र-राज्य संबंध", "न्यायालयीन पुनरावलोकन", "सामाजिक न्याय", "आंतरराष्ट्रीय संबंध"
                    ],


                    referenceSources: [
                        {
                            name: "MPSC राज्यसेवा मुख्य परीक्षा अधिकृत अभ्यासक्रम (Descriptive SSE)",
                            role: "अधिकृत परीक्षा-संदर्भ",
                            url: "https://mpsc.org.in/"
                        },
                        {
                            name: "भारतीय राज्यव्यवस्था - एम. लक्ष्मीकांत",
                            role: "संविधान, संसद, न्यायव्यवस्था व घटनात्मक संस्था"
                        },
                        {
                            name: "Introduction to the Constitution of India - D.D. Basu",
                            role: "घटनात्मक व्याख्या व मूलभूत रचना सिद्धांत"
                        },
                        {
                            name: "Governance in India - Laxmikanth / 2nd ARC Reports",
                            role: "सुशासन, ई-प्रशासन, नागरिक सनद व नागरी सेवांची भूमिका"
                        },
                        {
                            name: "भारताचे परराष्ट्र धोरण - शैलेंद्र देवळाणकर / व्हॅन पॅक्सटन",
                            role: "आंतरराष्ट्रीय संबंध व मुत्सद्देगिरी"
                        },
                        {
                            name: "महाराष्ट्र शासन राजपत्र व अधिकृत कायदे",
                            role: "महाराष्ट्र स्थानिक स्वराज्य, लोकसेवा हक्क व विशेष प्रशासकीय तरतुदी"
                        }
                    ],


                    chapters: [
                        // =========================================================================
                        // विभाग १: भारतीय संविधानाची ऐतिहासिक पार्श्वभूमी, वैशिष्ट्ये व मूलभूत रचना
                        // =========================================================================
                        {
                            id: "m_gs2_chap_01",
                            code: "G201",
                            section: "Constitutional Framework",
                            slug: "indian-constitution-historical-underpinnings-and-basic-structure",
                            nameMr: "भारतीय संविधानाची ऐतिहासिक पार्श्वभूमी, वैशिष्ट्ये, दुरुस्त्या व मूलभूत रचना सिद्धांत",
                            nameEn: "Indian Constitution: Historical Underpinnings, Features, Amendments & Basic Structure",
                            name: "संविधान: पार्श्वभूमी व मूलभूत रचना (Constitutional Underpinnings & Basic Structure)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 10,
                            isMaharashtraReference: false,
                            trackingKey: "progress_m_gs2_01",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: null,
                            nextChapterId: "m_gs2_chap_02",
                            metaDescriptionMr: "ब्रिटिश कायदे, संविधान सभेचे वादविवाद, संविधानाची वैशिष्ट्ये, कलम ३६८ घटनादुरुस्ती, आणि मूलभूत रचना सिद्धांताची उत्क्रांती (शंकरी प्रसाद ते केशवानंद भारती व मिनर्व्हा मिल्स).",
                            metaDescriptionEn: "Historical acts (1919/1935), Constituent Assembly debates, salient features, Article 368 amending process, and evolution of Basic Structure Doctrine.",
                            notesJsonPath: "/data/notes/mains_gs2/g201_constitution_underpinnings.json",
                            quizTag: "mains_gs2_const_01",
                            tags: ["Constitutional Framework", "Basic Structure Doctrine", "Kesavananda Bharati", "Article 368", "Constituent Assembly Debates", "High-Yield"],
                            searchKeywords: ["indian constitution historical underpinnings", "basic structure doctrine", "kesavananda bharati case", "article 368 amendments", "संविधान ऐतिहासिक पार्श्वभूमी", "मूलभूत रचना सिद्धांत", "केशवानंद भारती खटला"],
                            topics: [
                                {
                                    id: "top_g201_01",
                                    nameMr: "ऐतिहासिक पार्श्वभूमी, संविधानाची निर्मिती व प्रमुख वैशिष्ट्ये",
                                    nameEn: "Colonial Legacies, Making of Constitution & Salient Features",
                                    subtopics: [
                                        {
                                            id: "st_g201_01_01",
                                            titleMr: "ऐतिहासिक आधारस्तंभ: १९१९ चा माँटेग्यू-चेम्सफर्ड कायदा (द्विदल पद्धत) आणि १९३५ चा भारत सरकार कायदा (संघराज्य रचना, राज्यपालांचे पद, न्यायपालिका)",
                                            titleEn: "Colonial Milestones: Government of India Act 1919 & 1935 (Federal Framework, Ordinance & Public Services)",
                                            chips: ["१९१९ चा कायदा", "१९३५ चा भारत सरकार कायदा", "घटनात्मक स्रोत"]
                                        },
                                        {
                                            id: "st_g201_01_02",
                                            titleMr: "संविधान सभेतील प्रमुख वादविवाद (Constituent Assembly Debates): एकात्म विरुद्ध संघराज्य स्वरूप, मार्गदर्शक तत्त्वांचे स्थान आणि राष्ट्रभाषेचा प्रश्न",
                                            titleEn: "Constituent Assembly Debates: Unitary vs Federal Leanings, Fundamental Rights vs DPSP, Language Matrix",
                                            chips: ["संविधान सभा वादविवाद", "डॉ. आंबेडकरांचे भाषण", "घटनात्मक नैतिकता"]
                                        },
                                        {
                                            id: "st_g201_01_03",
                                            titleMr: "संविधानाची वैशिष्ट्ये: सर्वात मोठे लिखित संविधान, ताठरता व लवचिकतेचा समन्वय, संसदीय सार्वभौमत्व व न्यायालयीन सर्वोच्चतेचा मेळ",
                                            titleEn: "Salient Features: Longest Written Text, Synthesis of Parliamentary Sovereignty and Judicial Supremacy",
                                            chips: ["लिखित संविधान", "ताठरता व लवचिकता", "संसदीय सार्वभौमत्व vs न्यायालयीन सर्वोच्चता"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय राज्यव्यवस्था - एम. लक्ष्मीकांत", standard: "प्रमाणित संदर्भ", chapterRef: "प्रकरण १, २ व ३: ऐतिहासिक पार्श्वभूमी, निर्मिती व वैशिष्ट्ये" }
                                    ]
                                },
                                {
                                    id: "top_g201_02",
                                    nameMr: "घटनादुरुस्ती प्रक्रिया (कलम ३६८) व मूलभूत रचना सिद्धांत",
                                    nameEn: "Amendment Dynamics (Art 368) & Evolution of Basic Structure Doctrine",
                                    subtopics: [
                                        {
                                            id: "st_g201_02_01",
                                            titleMr: "संविधान दुरुस्तीचे प्रकार: साधे बहुमत, विशेष बहुमत (उपस्थित व मतदान करणाऱ्यांचे २/३), आणि ५०% राज्यांच्या संमतीसह विशेष बहुमत",
                                            titleEn: "Three Types of Amendments: Simple Majority, Special Majority & Special Majority with State Ratification",
                                            chips: ["कलम ३६८", "विशेष बहुमत", "राज्यांचे समर्थन"]
                                        },
                                        {
                                            id: "st_g201_02_02",
                                            titleMr: "मूलभूत रचना सिद्धांताची न्यायिक उत्क्रांती: शंकरी प्रसाद (१९५१), गोलकनाथ (१९६७), केशवानंद भारती (१९७३), आणि मिनर्व्हा मिल्स (१९८०) खटल्यांचा सविस्तर आढावा",
                                            titleEn: "Judicial Trajectory: Shankari Prasad, Golaknath, Kesavananda Bharati (1973) & Minerva Mills (1980)",
                                            chips: ["मूलभूत रचना सिद्धांत", "केशवानंद भारती १९७३", "गोलकनाथ खटला", "मिनर्व्हा मिल्स"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Introduction to the Constitution of India - D.D. Basu", standard: "प्रमाणित संदर्भ", chapterRef: "Amendment of the Constitution & Basic Structure" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग २: मूलभूत हक्क, मार्गदर्शक तत्त्वे व इतर देशांच्या संविधानांशी तुलना
                        // =========================================================================
                        {
                            id: "m_gs2_chap_02",
                            code: "G202",
                            section: "Rights & Comparative Constitutions",
                            slug: "fundamental-rights-dpsp-and-comparison-with-foreign-constitutions",
                            nameMr: "मूलभूत हक्क, DPSP, कर्तव्ये आणि प्रमुख लोकशाही देशांच्या संविधानांशी तुलना",
                            nameEn: "Fundamental Rights, DPSP, Duties & Comparison with Other Democratic Constitutions",
                            name: "हक्क, तत्त्वे व संविधान तुलना (Rights, DPSP & Comparative Constitutions)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 10,
                            isMaharashtraReference: false,
                            trackingKey: "progress_m_gs2_02",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs2_chap_01",
                            nextChapterId: "m_gs2_chap_03",
                            metaDescriptionMr: "कलम २१ चा न्यायिक विस्तार, कलम ३२ रिट्स, हक्क vs DPSP समन्वय, समान नागरी कायदा (UCC), आणि भारत विरुद्ध ब्रिटन, अमेरिका, फ्रान्स व जर्मनी संविधानांची तुलना.",
                            metaDescriptionEn: "Judicial expansion of Article 21, Writs, FR-DPSP balance, Uniform Civil Code (Art 44), and constitutional comparison of India with UK, USA, France, and Germany.",
                            notesJsonPath: "/data/notes/mains_gs2/g202_rights_comparative.json",
                            quizTag: "mains_gs2_rights_01",
                            tags: ["Fundamental Rights", "Article 21 Expansion", "Uniform Civil Code UCC", "DPSP Harmony", "Comparative Constitutions", "India vs USA UK"],
                            searchKeywords: ["article 21 judicial expansion", "fundamental rights vs dpsp", "uniform civil code article 44", "comparison of indian constitution with others", "कलम २१ विस्तार", "समान नागरी कायदा", "संविधान तुलना"],
                            topics: [
                                {
                                    id: "top_g202_01",
                                    nameMr: "मूलभूत हक्क व मार्गदर्शक तत्त्वांचा समन्वय",
                                    nameEn: "Expansion of Fundamental Rights & Harmony with DPSP",
                                    subtopics: [
                                        {
                                            id: "st_g202_01_01",
                                            titleMr: "कलम २१ चा न्यायिक विस्तार: मेनका गांधी खटला (Due Process of Law), पुट्टस्वामी खटला (गोपनीयतेचा हक्क), स्वच्छ पर्यावरणाचा हक्क व सन्मानाने जगण्याचा अधिकार",
                                            titleEn: "Judicial Expansion of Art 21: Maneka Gandhi (Due Process), Puttaswamy (Privacy), Clean Environment & Dignified Life",
                                            chips: ["कलम २१ विस्तार", "पुट्टस्वामी निकाल (गोपनीयता)", "मेनका गांधी खटला", "Due Process of Law"]
                                        },
                                        {
                                            id: "st_g202_01_02",
                                            titleMr: "मूलभूत हक्क विरुद्ध मार्गदर्शक तत्त्वे द्वंद्व: चांपकम दोराईराजन ते मिनर्व्हा मिल्स प्रवास; सामाजिक न्याय विरुद्ध वैयक्तिक स्वातंत्र्य समतोल",
                                            titleEn: "FR vs DPSP Interplay: Champakam Dorairajan to Minerva Mills, Balancing Social Welfare and Individual Liberty",
                                            chips: ["हक्क vs DPSP", "कल्याणकारी राज्य", "सामाजिक-आर्थिक न्याय"]
                                        },
                                        {
                                            id: "st_g202_01_03",
                                            titleMr: "समान नागरी कायदा (UCC - कलम ४४): ऐतिहासिक पार्श्वभूमी, वैयक्तिक कायदे (Personal Laws), लैंगिक समता, आणि धार्मिक स्वातंत्र्याशी सुसंगती साधण्याचे आव्हान",
                                            titleEn: "Uniform Civil Code (Art 44): Gender Justice, Personal Laws Reform, Federal Diversity & Religious Freedom",
                                            chips: ["समान नागरी कायदा (UCC)", "कलम ४४", "लैंगिक न्याय", "वैयक्तिक कायदे"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय राज्यव्यवस्था - एम. लक्ष्मीकांत", standard: "प्रमाणित संदर्भ", chapterRef: "प्रकरण ७ व ८: मूलभूत हक्क व राज्य धोरणाची मार्गदर्शक तत्त्वे" }
                                    ]
                                },
                                {
                                    id: "top_g202_02",
                                    nameMr: "इतर लोकशाही देशांच्या संविधानांशी भारतीय संविधानाची तुलना",
                                    nameEn: "Comparative Study: India vs UK, USA, France & Germany",
                                    subtopics: [
                                        {
                                            id: "st_g202_02_01",
                                            titleMr: "भारत विरुद्ध ब्रिटन (UK): संसदीय सार्वभौमत्व vs संविधानाची सर्वोच्चता, राजेशाही vs प्रजासत्ताक, आणि न्यायाधीशांचे अधिकार",
                                            titleEn: "India vs UK: Parliamentary Sovereignty vs Constitutional Supremacy, Monarchy vs Republic, Judicial Power",
                                            chips: ["भारत vs ब्रिटन", "संसदीय सार्वभौमत्व", "प्रजासत्ताक"]
                                        },
                                        {
                                            id: "st_g202_02_02",
                                            titleMr: "भारत विरुद्ध अमेरिका (USA): संघराज्यवाद (कडक दुहेरी नागरिकत्व vs एकेरी नागरिकत्व), अध्यक्षीय vs संसदीय शासन, आणि राष्ट्रपतींचे अधिकार",
                                            titleEn: "India vs USA: True Federalism vs Quasi-Federal, Presidential vs Parliamentary, Dual vs Single Citizenship",
                                            chips: ["भारत vs अमेरिका", "अध्यक्षीय शासन", "एकेरी नागरिकत्व"]
                                        },
                                        {
                                            id: "st_g202_02_03",
                                            titleMr: "भारत विरुद्ध फ्रान्स व जर्मनी: धर्मनिरपेक्षतेचे प्रारूप (फ्रेंच कठोर लासिटे / Laïcité vs भारतीय सर्वधर्मसमभाव) आणि जर्मनीचे रचनात्मक अविश्वास ठराव तत्त्व",
                                            titleEn: "India vs France & Germany: Strict Laïcité vs Indian Positive Secularism, German Constructive No-Confidence",
                                            chips: ["फ्रेंच धर्मनिरपेक्षता (Laïcité)", "सर्वधर्मसमभाव", "रचनात्मक अविश्वास"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Comparative Politics & Constitutions - J.C. Johari", standard: "प्रमाणित संदर्भ", chapterRef: "Major World Constitutions" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग ३: संघराज्य रचना, केंद्र-राज्य संबंध व आणीबाणी (Federalism & Issues)
                        // =========================================================================
                        {
                            id: "m_gs2_chap_03",
                            code: "G203",
                            section: "Federal Structure",
                            slug: "functions-and-responsibilities-of-union-and-states-federal-issues",
                            nameMr: "संघ व राज्यांची कार्ये, जबाबदाऱ्या, संघराज्यापुढील आव्हाने व आणीबाणी",
                            nameEn: "Functions & Responsibilities of the Union and the States: Issues and Challenges Pertaining to the Federal Structure",
                            name: "संघराज्य रचना व केंद्र-राज्य आव्हाने (Federalism & Centre-State Issues)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 10,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs2_03",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs2_chap_02",
                            nextChapterId: "m_gs2_chap_04",
                            metaDescriptionMr: "सहकारी व स्पर्धात्मक संघराज्यवाद, वित्तीय संबंध (GST व वित्त आयोग), कलम ३५६ चा गैरवापर (बोम्मई निकाल), आंतरराज्य जलतंटे, आणि राज्यपाल पदावरील वाद.",
                            metaDescriptionEn: "Cooperative & competitive federalism, fiscal ties (GST Council, Finance Commission), Article 356 misuse (SR Bommai), Inter-state water disputes, and Governor's role.",
                            notesJsonPath: "/data/notes/mains_gs2/g203_federalism.json",
                            quizTag: "mains_gs2_fed_01",
                            tags: ["Federalism", "Cooperative Federalism", "Fiscal Federalism GST", "Article 356 Misuse", "SR Bommai Case", "Governors Discretion", "Inter-State Water Disputes"],
                            searchKeywords: ["cooperative federalism", "fiscal federalism gst council", "role of governor conflicts", "article 356 president rule", "inter state water disputes", "सहकारी संघराज्यवाद", "वित्तीय संघराज्यवाद", "राज्यपाल पद वाद", "कलम ३५६ राष्ट्रपती राजवट"],
                            topics: [
                                {
                                    id: "top_g203_01",
                                    nameMr: "संघराज्य चौकट, वित्तीय संबंध व सहकारी संघराज्यवाद",
                                    nameEn: "Federal Architecture, Fiscal Decentralisation & Cooperation",
                                    subtopics: [
                                        {
                                            id: "st_g203_01_01",
                                            titleMr: "भारतीय संघराज्याचे स्वरूप: अर्ध-संघराज्य (Quasi-federal - के. सी. व्हीअर), एकात्मतेकडे झुकणारे संघराज्य, आणि सहकारी ते स्पर्धात्मक संघराज्यवाद",
                                            titleEn: "Nature of Indian Federalism: Quasi-Federal (K.C. Wheare), Unitary Bias, Cooperative and Competitive Federalism",
                                            chips: ["अर्ध-संघराज्य", "सहकारी संघराज्यवाद", "स्पर्धात्मक संघराज्यवाद"]
                                        },
                                        {
                                            id: "st_g203_01_02",
                                            titleMr: "वित्तीय संघराज्यवाद (Fiscal Federalism): केंद्रीय वित्त आयोगाची भूमिका (कलम २८०), उपकर व अधिभार (Cess/Surcharge), आणि GST परिषदेतील केंद्र-राज्य संघटन",
                                            titleEn: "Fiscal Ties: Finance Commission Devolution (Art 280), Cess/Surcharges Divisible Pool, GST Council Dynamics",
                                            chips: ["वित्तीय संघराज्यवाद", "वित्त आयोग कलम २८०", "GST परिषद", "सेस व सरचार्ज"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय राज्यव्यवस्था - एम. लक्ष्मीकांत", standard: "प्रमाणित संदर्भ", chapterRef: "प्रकरण १४ व १५: केंद्र-राज्य व आंतरराज्य संबंध" }
                                    ]
                                },
                                {
                                    id: "top_g203_02",
                                    nameMr: "संघराज्यासमोरील संघर्षबिंदू व आंतरराज्य समन्वय",
                                    nameEn: "Friction Points: Governor's Office, Article 356 & Inter-State Coordination",
                                    subtopics: [
                                        {
                                            id: "st_g203_02_01",
                                            titleMr: "राज्यपालांचे पद व केंद्र-राज्य संघर्ष: विधेयकांना संमती देण्यास विलंब, सरकार स्थापनेचे निमंत्रण, विवेकाधीन अधिकार आणि सरकारिया/पुंछी आयोगाच्या शिफारसी",
                                            titleEn: "Governor's Controversies: Withholding Assent to Bills, Government Formation, Sarkaria & Punchhi Reforms",
                                            chips: ["राज्यपाल पद वाद", "विधेयकांना मंजुरी विलंब", "सरकारिया आयोग शिफारसी", "पुंछी आयोग"]
                                        },
                                        {
                                            id: "st_g203_02_02",
                                            titleMr: "कलम ३५६ (राष्ट्रपती राजवट): गैरवापर, ऐतिहासिक संदर्भ, आणि एस. आर. बोम्मई खटला (१९९४) मधील सर्वोच्च न्यायालयाचे मार्गदर्शक निकष",
                                            titleEn: "Article 356 (President's Rule): Misuse, Judicial Check, and S.R. Bommai Landmark Precedents (1994)",
                                            chips: ["कलम ३५६ राष्ट्रपती राजवट", "एस आर बोम्मई निकाल १९९४", "फ्लोर टेस्ट बंधन"]
                                        },
                                        {
                                            id: "st_g203_02_03",
                                            titleMr: "आंतरराज्य समन्वय: आंतरराज्य परिषद (कलम २६३), विभागीय परिषदा (Zonal Councils), आणि आंतरराज्य नदीजल लवाद (कलम २६२ - उदा. कृष्णा व गोदावरी जलतंटे)",
                                            titleEn: "Inter-State Institutions: Inter-State Council (Art 263), Zonal Councils & River Water Dispute Tribunals (Art 262)",
                                            chips: ["आंतरराज्य परिषद २६३", "नदीजल लवाद २६२", "कृष्णा व गोदावरी जलवाटप"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Indian Federalism - M.P. Singh", standard: "प्रमाणित संदर्भ", chapterRef: "Emerging Issues in Indian Federalism" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग ४: संसद, राज्य विधिमंडळे व कायदे निर्मिती प्रक्रिया
                        // =========================================================================
                        {
                            id: "m_gs2_chap_04",
                            code: "G204",
                            section: "Legislature",
                            slug: "parliament-and-state-legislatures-structure-functioning-and-conduct-of-business",
                            nameMr: "संसद व राज्य विधिमंडळे: रचना, कामकाज, अधिकार, विशेषाधिकार व संसदीय समित्या",
                            nameEn: "Parliament & State Legislatures: Structure, Functioning, Powers, Privileges & Issues",
                            name: "संसद व राज्य विधिमंडळे (Parliament & State Legislatures)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 10,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs2_04",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs2_chap_03",
                            nextChapterId: "m_gs2_chap_05",
                            metaDescriptionMr: "संसदेच्या कामकाजातील घसरण, वटहुकूम राजवट, संसदीय समित्यांची भूमिका, संसदीय विशेषाधिकार (कलम १०५/१९४), पक्षांतरबंदी कायदा (१० वी अनुसूची), आणि महाराष्ट्र विधिमंडळ.",
                            metaDescriptionEn: "Decline of parliamentary sittings, ordinance route, oversight through DRSCs, parliamentary privileges, Anti-Defection 10th Schedule, and Maharashtra Legislature.",
                            notesJsonPath: "/data/notes/mains_gs2/g204_parliament_legislature.json",
                            quizTag: "mains_gs2_parl_01",
                            tags: ["Parliamentary Decline", "Ordinance Making", "Parliamentary Committees", "Anti-Defection Law", "Parliamentary Privileges", "Maharashtra Legislature"],
                            searchKeywords: ["decline of parliament", "role of parliamentary committees", "anti defection tenth schedule", "parliamentary privileges article 105", "maharashtra legislative assembly council", "संसदीय समित्या", "पक्षांतरबंदी कायदा", "संसदीय विशेषाधिकार"],
                            topics: [
                                {
                                    id: "top_g204_01",
                                    nameMr: "संसदेचे कामकाज, कार्यकारी मंडळावरील नियंत्रण व समित्या",
                                    nameEn: "Parliamentary Functions, Executive Oversight & Departmental Committees",
                                    subtopics: [
                                        {
                                            id: "st_g204_01_01",
                                            titleMr: "संसदीय कामकाजातील घसरण: बैठकीच्या दिवसांची घट, विधेयकांवर पुरेशी चर्चा न होणे, गदारोळ, आणि वटहुकूम मार्गाचा अतिवापर (कलम १२३ व २१३)",
                                            titleEn: "Decline in Legislative Productivity: Fewer Sitting Days, Guillotine, Disruption & Frequent Ordinances (Art 123/213)",
                                            chips: ["बैठकींचे दिवस घट", "विधेयकांवर घाईघाईने मंजुरी", "वटहुकूम राजवट"]
                                        },
                                        {
                                            id: "st_g204_01_02",
                                            titleMr: "संसदीय समित्यांची भूमिका (DRSCs): लोकलेखा समिती (PAC), अंदाज समिती आणि खात्याशी संबंधित स्थायी समित्यांद्वारे आर्थिक व प्रशासकीय नियंत्रण",
                                            titleEn: "Parliamentary Committees (DRSCs): PAC, Estimates Panel & Cross-Party Scrutiny Safeguarding Accountability",
                                            chips: ["लोकलेखा समिती (PAC)", "अंदाज समिती", "स्थायी समित्यांची छाननी"]
                                        },
                                        {
                                            id: "st_g204_01_03",
                                            titleMr: "संसदीय विशेषाधिकार (कलम १०५ व १९४): विशेषाधिकार विरुद्ध भाषण स्वातंत्र्य (कलम १९(१)(a)) द्वंद्व आणि विशेषाधिकारांचे संहिताबद्धीकरण (Codification) गरज",
                                            titleEn: "Parliamentary Privileges (Arts 105 & 194): Balancing Privileges vs Free Speech, Codification Debate",
                                            chips: ["संसदीय विशेषाधिकार", "भाषण स्वातंत्र्य समतोल", "संहिताबद्धीकरण"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय राज्यव्यवस्था - एम. लक्ष्मीकांत", standard: "प्रमाणित संदर्भ", chapterRef: "प्रकरण २२ व ३४: संसद व राज्य विधिमंडळ" }
                                    ]
                                },
                                {
                                    id: "top_g204_02",
                                    nameMr: "पक्षांतरबंदी कायदा (१० वी अनुसूची) व महाराष्ट्र विधिमंडळ",
                                    nameEn: "Anti-Defection Law (10th Schedule) & Maharashtra Legislature Dynamics",
                                    subtopics: [
                                        {
                                            id: "st_g204_02_01",
                                            titleMr: "पक्षांतरबंदी कायदा (५२ वी व ९१ वी दुरुस्ती): सभापतींचे अधिकार, न्यायालयीन पुनरावलोकन (किहोटो होलोहन निकाल), २/३ विलीनीकरण नियम, आणि समकालीन त्रुटी",
                                            titleEn: "Tenth Schedule Anti-Defection: Speaker's Powers, Kihoto Hollohon Case, 2/3rd Merger Exception & Defection Loopholes",
                                            chips: ["पक्षांतरबंदी कायदा", "१० वी अनुसूची", "किहोटो होलोहन निकाल", "सभापतींची भूमिका"]
                                        },
                                        {
                                            id: "st_g204_02_02",
                                            titleMr: "महाराष्ट्र विधिमंडळ: विधानसभा (२८८) व विधानपरिषद (७८) परस्परसंबंध; विधानपरिषदेची उपयुक्तता, कार्यपद्धती आणि नागपूर हिवाळी अधिवेशनाचे महत्त्व",
                                            titleEn: "Maharashtra State Legislature: Assembly vs Council Powers, Utility of Legislative Council & Nagpur Session",
                                            chips: ["महाराष्ट्र विधानसभा", "विधानपरिषद औचित्य", "नागपूर करार"]
                                        }
                                    ],
                                    sources: [
                                        { book: "The Constitution of India - P.M. Bakshi", standard: "शासकीय संदर्भ", chapterRef: "Tenth Schedule Annotations" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग ५: न्यायव्यवस्था, न्यायालयीन पुनरावलोकन व सक्रियता (Judiciary)
                        // =========================================================================
                        {
                            id: "m_gs2_chap_05",
                            code: "G205",
                            section: "Judiciary",
                            slug: "structure-organization-and-functioning-of-the-judiciary-pil",
                            nameMr: "न्यायव्यवस्था: रचना, कार्यपद्धती, कॉलेजियम पद्धत, न्यायिक पुनरावलोकन व सक्रियता",
                            nameEn: "Structure, Organization & Functioning of the Judiciary, Collegium, Judicial Review & PIL",
                            name: "भारतीय न्यायव्यवस्था व न्यायालयीन सक्रियता (Judiciary, Judicial Review & PIL)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 10,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs2_05",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs2_chap_04",
                            nextChapterId: "m_gs2_chap_06",
                            metaDescriptionMr: "सर्वोच्च न्यायालय व उच्च न्यायालये, कॉलेजियम पद्धत (NJAC रद्दबातल), न्यायालयीन पुनरावलोकन, न्यायिक सक्रियता विरुद्ध न्यायिक अतिरेक (Judicial Overreach), आणि प्रलंबित खटले.",
                            metaDescriptionEn: "Supreme Court & High Courts, Collegium vs NJAC (99th Amendment struck down), Judicial Review, Judicial Activism vs Overreach, Pendency of cases, and Bombay HC.",
                            notesJsonPath: "/data/notes/mains_gs2/g205_judiciary.json",
                            quizTag: "mains_gs2_jud_01",
                            tags: ["Judiciary", "Collegium System", "NJAC Judgment", "Judicial Review", "Judicial Activism vs Overreach", "Pendency of Cases", "Bombay High Court"],
                            searchKeywords: ["collegium system reforms", "judicial review article 13", "judicial activism vs judicial overreach", "pendency of cases in judiciary", "न्यायालयीन पुनरावलोकन", "कॉलेजियम पद्धत", "न्यायिक सक्रियता vs अतिरेक", "प्रलंबित खटले"],
                            topics: [
                                {
                                    id: "top_g205_01",
                                    nameMr: "कॉलेजियम पद्धत, न्यायाधीशांची नियुक्ती व स्वातंत्र्य",
                                    nameEn: "Collegium Framework, Judicial Appointments & Independence",
                                    subtopics: [
                                        {
                                            id: "st_g205_01_01",
                                            titleMr: "न्यायाधीशांची नियुक्ती: थ्री जजेस केसेस (१९८१, १९९३, १९९८) मधून कॉलेजियम पद्धतीचा उदय; ९९ वी दुरुस्ती (NJAC) सर्वोच्च न्यायालयाने रद्द ठरवण्याची कारणे",
                                            titleEn: "Evolution of Collegium: Three Judges Cases, Striking Down of 99th Amendment (NJAC) & Memorandum of Procedure (MoP)",
                                            chips: ["कॉलेजियम पद्धत", "थ्री जजेस केसेस", "NJAC रद्दबातल निकाल", "न्यायालयीन स्वातंत्र्य"]
                                        },
                                        {
                                            id: "st_g205_01_02",
                                            titleMr: "न्यायपालिकेपुढील आव्हाने: ५ कोटींपेक्षा जास्त प्रलंबित खटले, न्यायाधीशांच्या रिक्त जागा, पायाभूत सुविधांची वानवा आणि अखिल भारतीय न्यायिक सेवा (AIJS) वाद",
                                            titleEn: "Judicial Challenges: Case Pendency (>5 Crore Cases), Vacancy Crises, Infra Deficits & All-India Judicial Service (AIJS)",
                                            chips: ["प्रलंबित खटले", "AIJS सेवा वाद", "रिक्त जागा प्रश्न"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय राज्यव्यवस्था - एम. लक्ष्मीकांत", standard: "प्रमाणित संदर्भ", chapterRef: "प्रकरण २६ व ३०: सर्वोच्च न्यायालय व उच्च न्यायालये" }
                                    ]
                                },
                                {
                                    id: "top_g205_02",
                                    nameMr: "न्यायालयीन पुनरावलोकन, न्यायिक सक्रियता विरुद्ध न्यायिक अतिरेक",
                                    nameEn: "Judicial Review, Activism, Overreach & Public Interest Litigation",
                                    subtopics: [
                                        {
                                            id: "st_g205_02_01",
                                            titleMr: "न्यायालयीन पुनरावलोकन (Judicial Review): कलम १३ व ३२/२२६ अंतर्गत कायदे व कार्यकारी आदेशांची घटनात्मक वैधता तपासण्याचा सर्वोच्च न्यायालयाचा अधिकार",
                                            titleEn: "Judicial Review Doctrine: Arts 13, 32 & 226 as Shields Safeguarding Fundamental Rights Against Unconstitutional Laws",
                                            chips: ["न्यायालयीन पुनरावलोकन", "कलम १३", "कायद्यांचे परीक्षण"]
                                        },
                                        {
                                            id: "st_g205_02_02",
                                            titleMr: "न्यायिक सक्रियता (Judicial Activism) विरुद्ध न्यायिक अतिरेक (Judicial Overreach): जनहित याचिकांची (PIL) उपयुक्तता व गैरवापर; अधिकारांच्या विभाजनावर होणारे अतिक्रमण",
                                            titleEn: "Judicial Activism vs Overreach: PIL Revolution (Justice Bhagwati), Executive Encroachment & Separation of Powers",
                                            chips: ["न्यायिक सक्रियता", "न्यायिक अतिरेक", "जनहित याचिका (PIL)", "अधिकार विभाजन"]
                                        },
                                        {
                                            id: "st_g205_02_03",
                                            titleMr: "मुंबई उच्च न्यायालय: अधिकारकक्षा (महाराष्ट्र, गोवा, दादरा-नगर हवेली, दमण-दीव), ऐतिहासिक निकाल, खंडपीठे (नागपूर, छत्रपती संभाजीनगर, पणजी) आणि जनहित याचिका हाताळणी",
                                            titleEn: "Bombay High Court: Territorial Jurisdiction, Landmark Precedents, Benches & Public Interest Casework",
                                            chips: ["मुंबई उच्च न्यायालय", "खंडपीठे", "नागपूर व संभाजीनगर खंडपीठ"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Courts of India - Supreme Court of India Publication", standard: "अधिकृत न्यायालयीन ग्रंथ", chapterRef: "History and Evolution of Indian Judiciary" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग ६: घटनात्मक, वैधानिक व अर्ध-न्यायिक संस्था (Constitutional & Statutory Bodies)
                        // =========================================================================
                        {
                            id: "m_gs2_chap_06",
                            code: "G206",
                            section: "Institutions & Bodies",
                            slug: "appointment-to-various-constitutional-posts-powers-functions-and-responsibilities",
                            nameMr: "घटनात्मक पदे, वैधानिक, नियामक व अर्ध-न्यायिक संस्थांची कार्ये व स्वायत्तता",
                            nameEn: "Appointment to Constitutional Posts, Powers, Functions, Statutory & Quasi-Judicial Bodies",
                            name: "घटनात्मक व वैधानिक संस्था (Constitutional, Statutory & Regulatory Bodies)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 10,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs2_06",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs2_chap_05",
                            nextChapterId: "m_gs2_chap_07",
                            metaDescriptionMr: "CAG, निवडणूक आयोग (आयुक्त नियुक्ती कायदा), UPSC/MPSC, वित्त आयोग, NHRC, CVC, CCI, NGT, लोकपाल व लोकायुक्त (महाराष्ट्र लोकायुक्त कायदा २०२२).",
                            metaDescriptionEn: "In-depth review of CAG, Election Commission (New EC Act), UPSC/MPSC, Finance Commission, NHRC, CVC, NGT, Lokpal, and Maharashtra Lokayukta Act 2022.",
                            notesJsonPath: "/data/notes/mains_gs2/g206_constitutional_bodies.json",
                            quizTag: "mains_gs2_bodies_01",
                            tags: ["Constitutional Bodies", "CAG Public Purse", "Election Commission Reforms", "UPSC MPSC", "Statutory Bodies NHRC", "NGT Green Tribunal", "Lokayukta Maharashtra"],
                            searchKeywords: ["constitutional bodies mains", "cag guardian of public purse", "election commission autonomy", "nhrc statutory powers", "lokayukta maharashtra act 2022", "कॅग सार्वजनिक वित्त", "निवडणूक आयोग सुधारणा", "मानवाधिकार आयोग", "महाराष्ट्र लोकायुक्त २०२२"],
                            topics: [
                                {
                                    id: "top_g206_01",
                                    nameMr: "प्रमुख घटनात्मक संस्था व स्वायत्ततेचे मुद्दे",
                                    nameEn: "Premier Constitutional Bodies: CAG, ECI & Public Service Commissions",
                                    subtopics: [
                                        {
                                            id: "st_g206_01_01",
                                            titleMr: "नियंत्रक व महालेखापरीक्षक (CAG - कलम १४८ ते १५१): सार्वजनिक वित्ताचा संरक्षक, लेखापरीक्षण व्याप्ती (औचित्य लेखापरीक्षण / Propriety Audit) आणि मर्यादा",
                                            titleEn: "CAG (Arts 148-151): Guardian of Public Purse, Compliance vs Propriety Audit, and Post-Mortem Nature",
                                            chips: ["कॅग कलम १४८", "सार्वजनिक वित्ताचा रक्षक", "औचित्य लेखापरीक्षण"]
                                        },
                                        {
                                            id: "st_g206_01_02",
                                            titleMr: "भारत निवडणूक आयोग (कलम ३२४): स्वायत्तता, निवडणूक आयुक्त नियुक्ती प्रक्रिया (नवीन कायदा २०२३), आदर्श आचारसंहिता (MCC), आणि एक देश एक निवडणूक व्यवहार्यता",
                                            titleEn: "Election Commission of India (Art 324): Autonomy, 2023 EC Appointment Law, Model Code of Conduct & Simultaneous Elections Debate",
                                            chips: ["निवडणूक आयोग कलम ३२४", "आयुक्त नियुक्ती कायदा २०२३", "एक देश एक निवडणूक"]
                                        },
                                        {
                                            id: "st_g206_01_03",
                                            titleMr: "संघ व राज्य लोकसेवा आयोग (UPSC व MPSC - कलम ३१५ ते ३२३): भरती प्रक्रिया, परीक्षा सुधारणा, सल्लागार स्वरूप आणि सदस्यांची पदच्युती प्रक्रिया",
                                            titleEn: "UPSC & MPSC (Arts 315-323): Merit Gatekeepers, Examination Reforms, Advisory Limitations & Removal Process",
                                            chips: ["UPSC व MPSC", "कलम ३१५", "भरती प्रक्रिया सुधारणा"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय राज्यव्यवस्था - एम. लक्ष्मीकांत", standard: "प्रमाणित संदर्भ", chapterRef: "भाग ७: घटनात्मक संस्था" }
                                    ]
                                },
                                {
                                    id: "top_g206_02",
                                    nameMr: "वैधानिक, नियामक, अर्ध-न्यायिक संस्था व लोकायुक्त",
                                    nameEn: "Statutory, Regulatory, Quasi-Judicial Bodies & Lokayukta Framework",
                                    subtopics: [
                                        {
                                            id: "st_g206_02_01",
                                            titleMr: "राष्ट्रीय मानवाधिकार आयोग (NHRC): अधिकार, शिफारसींचे केवळ सल्लागार स्वरूप आणि मानवाधिकार संरक्षण दुरुस्ती कायदे",
                                            titleEn: "NHRC: Structure, Human Rights Act, Limitations as 'Toothless Tiger' & Advisory Enactments",
                                            chips: ["NHRC मानवाधिकार आयोग", "सल्लागार मर्यादा", "मानवाधिकार संरक्षण कायदा"]
                                        },
                                        {
                                            id: "st_g206_02_02",
                                            titleMr: "राष्ट्रीय हरित लवाद (NGT कायदा २०१०): पर्यावरण न्यायदानातील अर्ध-न्यायिक भूमिका, प्रदूषणावरील दंड, आणि ६ महिन्यांत खटले निकाली काढण्याची कालमर्यादा",
                                            titleEn: "National Green Tribunal (NGT Act 2010): Fast-Track Environmental Adjudication, Polluter Pays Principle & 6-Month Mandate",
                                            chips: ["NGT हरित लवाद", "पर्यावरण न्याय", "प्रदूषण दंड"]
                                        },
                                        {
                                            id: "st_g206_02_03",
                                            titleMr: "भ्रष्टाचारविरोधी संस्था: CVC, केंद्रीय माहिती आयोग (RTI), लोकपाल, आणि महाराष्ट्र लोकायुक्त कायदा २०२२ (मुख्यमंत्र्यांना कक्षेत आणणारे पहिले राज्य)",
                                            titleEn: "Anti-Corruption Institutions: CVC, CIC, Lokpal and Maharashtra Lokayukta Act 2022 (Bringing CM Under Scrutiny)",
                                            chips: ["केंद्रीय दक्षता आयोग (CVC)", "महाराष्ट्र लोकायुक्त कायदा २०२२", "मुख्यमंत्र्यांचा समावेश"]
                                        }
                                    ],
                                    sources: [
                                        { book: "महाराष्ट्र लोकायुक्त कायदा २०२२ अधिकृत राजपत्र", standard: "शासकीय गॅझेट", chapterRef: "कलमे व कार्यक्षेत्र" },
                                        { book: "भारतीय राज्यव्यवस्था - एम. लक्ष्मीकांत", standard: "प्रमाणित संदर्भ", chapterRef: "भाग ८: बिगर-घटनात्मक संस्था" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग ७: स्थानिक स्वराज्य संस्था, विकेंद्रीकरण व ७३/७४ वी दुरुस्ती
                        // =========================================================================
                        {
                            id: "m_gs2_chap_07",
                            code: "G207",
                            section: "Local Governance",
                            slug: "devolution-of-powers-and-finances-up-to-local-levels-and-challenges",
                            nameMr: "स्थानिक स्वराज्य संस्था: अधिकार व वित्त विकेंद्रीकरण, ७३/७४ वी दुरुस्ती व आव्हाने",
                            nameEn: "Devolution of Powers & Finances up to Local Levels (Panchayats & Municipalities) & Challenges",
                            name: "स्थानिक स्वराज्य व विकेंद्रीकरण (Local Governance & Devolution)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 10,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs2_07",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs2_chap_06",
                            nextChapterId: "m_gs2_chap_08",
                            metaDescriptionMr: "३F चे संकट (Funds, Functions, Functionaries), ७३ वी व ७४ वी दुरुस्ती, ग्रामसभा सक्षमीकरण, पेसा कायदा (PESA 1996), नागरी स्थानिक स्वराज्य, आणि महाराष्ट्र मॉडेल.",
                            metaDescriptionEn: "Devolution challenges: Funds, Functions, Functionaries (3Fs), 73rd/74th Amendments, Gram Sabha empowerment, PESA Act 1996, Urban local governance, and Maharashtra model.",
                            notesJsonPath: "/data/notes/mains_gs2/g207_local_governance.json",
                            quizTag: "mains_gs2_local_01",
                            tags: ["Local Governance", "73rd 74th Amendments", "Devolution of 3Fs", "PESA Act 1996", "Gram Sabha", "Urban Local Bodies", "Maharashtra Panchayati Raj"],
                            searchKeywords: ["devolution of 3fs panchayats", "73rd and 74th constitutional amendments", "pesa act 1996 tribal self-rule", "urban governance issues", "स्थानिक स्वराज्य विकेंद्रीकरण", "पेसा कायदा १९९६", "ग्रामसभा अधिकार", "नागरी स्थानिक संस्था"],
                            topics: [
                                {
                                    id: "top_g207_01",
                                    nameMr: "७३ वी व ७४ वी घटनादुरुस्ती: विकेंद्रीकरण व ३F चे संकट",
                                    nameEn: "73rd & 74th Amendments: Decentralisation & 3F Crises",
                                    subtopics: [
                                        {
                                            id: "st_g207_01_01",
                                            titleMr: "लोकशाही विकेंद्रीकरण: ११ वी अनुसूची (२९ विषय) व १२ वी अनुसूची (१८ विषय) प्रत्यक्षात हस्तांतरित न होण्याची कारणे",
                                            titleEn: "Democratic Decentralisation: Incomplete Transfer of 11th (29 Subjects) & 12th (18 Subjects) Schedules",
                                            chips: ["लोकशाही विकेंद्रीकरण", "११ वी अनुसूची (२९ विषय)", "१२ वी अनुसूची (१८ विषय)"]
                                        },
                                        {
                                            id: "st_g207_01_02",
                                            titleMr: "३F चे संकट: निधी (Funds - राज्य सरकारांवर परावलंबित्व), कार्ये (Functions - अधिकारांचे तुकडे), आणि कर्मचारी (Functionaries - प्रशिक्षित मनुष्यबळ टंचाई)",
                                            titleEn: "The 3F Crisis: Funds Deficit, Function Overlaps & Functionary (Manpower) Shortages in Local Bodies",
                                            chips: ["३F चे संकट (Funds, Functions, Functionaries)", "स्थानिक स्वराज्य वित्त", "प्रशासकीय मर्यादा"]
                                        },
                                        {
                                            id: "st_g207_01_03",
                                            titleMr: "राज्य वित्त आयोग (SFC) व राज्य निवडणूक आयोग (SEC): शिफारसींची अंमलबजावणी न होणे आणि निवडणुकांमधील राजकीय हस्तक्षेप",
                                            titleEn: "State Finance Commissions (SFC) & State Election Commissions (SEC): Institutional Deficits & Fiscal Autonomy",
                                            chips: ["राज्य वित्त आयोग (SFC)", "राज्य निवडणूक आयोग (SEC)", "स्वायत्तता"]
                                        }
                                    ],
                                    sources: [
                                        { book: "द्वितीय प्रशासकीय सुधारणा आयोग (2nd ARC)", standard: "शासकीय अहवाल", chapterRef: "अहवाल ६: स्थानिक शासन (Local Governance)" }
                                    ]
                                },
                                {
                                    id: "top_g207_02",
                                    nameMr: "पेसा कायदा (PESA 1996), ग्रामसभा व नागरी स्थानिक शासन",
                                    nameEn: "PESA Act 1996, Tribal Empowerment & Urban Governance",
                                    subtopics: [
                                        {
                                            id: "st_g207_02_01",
                                            titleMr: "पेसा कायदा १९९६ (PESA): अनुसूचित क्षेत्रातील आदिवासी ग्रामसभांना नैसर्गिक संसाधने, गौण वनोपज, जमीन हस्तांतरण रोखणे व मद्यविक्री नियंत्रणाचे विशेष अधिकार",
                                            titleEn: "PESA Act 1996: Tribal Self-Rule, Gram Sabha Control Over Minor Forest Produce, Land Alienation & Minerals",
                                            chips: ["पेसा कायदा १९९६", "आदिवासी स्वशासन", "गौण वनोपज मालकी", "ग्रामसभा सर्वाधिकार"]
                                        },
                                        {
                                            id: "st_g207_02_02",
                                            titleMr: "नागरी स्थानिक स्वराज्य आव्हाने: महापौरांची मर्यादित प्रशासकीय ताकद (कमकुवत महापौर vs शक्तिशाली महापालिका आयुक्त), वॉर्ड समित्यांची निष्क्रियता, आणि नगरनियोजन अभाव",
                                            titleEn: "Urban Governance Dilemmas: Weak Mayor vs Strong Municipal Commissioner, Dysfunctional Ward Committees & Planning Voids",
                                            chips: ["कमकुवत महापौर vs IAS आयुक्त", "वॉर्ड समित्या", "नगरनियोजन अभाव"]
                                        }
                                    ],
                                    sources: [
                                        { book: "महाराष्ट्र स्थानिक स्वराज्य कायदे", standard: "शासकीय राजपत्र", chapterRef: "ग्रामपंचायत, ZP व महानगरपालिका अधिनियम" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग ८: सुशासन, पारदर्शकता, उत्तरदायित्व व ई-प्रशासन (Good Governance)
                        // =========================================================================
                        {
                            id: "m_gs2_chap_08",
                            code: "G208",
                            section: "Good Governance & Transparency",
                            slug: "important-aspects-of-governance-transparency-and-accountability-e-governance",
                            nameMr: "सुशासन, पारदर्शकता, माहितीचा अधिकार, नागरिक सनद व ई-प्रशासन उपयोजन",
                            nameEn: "Important Aspects of Governance, Transparency, Accountability, RTI, Citizen's Charter & E-Governance",
                            name: "सुशासन, पारदर्शकता व ई-प्रशासन (Governance, Transparency & E-Gov)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 10,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs2_08",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs2_chap_07",
                            nextChapterId: "m_gs2_chap_09",
                            metaDescriptionMr: "सुशासनाचे आधारस्तंभ, माहितीचा अधिकार कायदा २००५ (कलम ८ अपवाद व दुरुस्त्या), नागरिक सनद (Citizen's Charter), ई-प्रशासन मॉडेल्स (G2C, G2B), आणि महाराष्ट्र लोकसेवा हक्क कायदा.",
                            metaDescriptionEn: "Good governance pillars, RTI Act 2005 (Section 8 exceptions, 2019 amendments), Citizen's Charters, E-Governance applications (G2C, G2B), and Maharashtra RTS Act 2015.",
                            notesJsonPath: "/data/notes/mains_gs2/g208_governance_transparency.json",
                            quizTag: "mains_gs2_gov_01",
                            tags: ["Good Governance", "RTI Act 2005", "Citizens Charter", "E-Governance Models", "Maharashtra RTS Act 2015", "Social Audit", "Administrative Accountability"],
                            searchKeywords: ["good governance pillars", "rti act 2005 challenges", "citizens charter drawbacks", "e-governance models g2c", "maharashtra right to public services act 2015", "social audit", "सुशासन", "माहितीचा अधिकार कायदा", "नागरिक सनद", "महाराष्ट्र लोकसेवा हक्क", "सामाजिक लेखापरीक्षण"],
                            topics: [
                                {
                                    id: "top_g208_01",
                                    nameMr: "पारदर्शकता, उत्तरदायित्व, माहितीचा अधिकार व नागरिक सनद",
                                    nameEn: "Transparency, Accountability, RTI Regime & Citizen's Charters",
                                    subtopics: [
                                        {
                                            id: "st_g208_01_01",
                                            titleMr: "माहितीचा अधिकार अधिनियम २००५: नागरिकांचे सक्षमीकरण, पारदर्शकता, कलम ८ मधील अपवाद, माहिती आयुक्तांची स्वायत्तता आणि २०१९ च्या दुरुस्तीवरील आक्षेप",
                                            titleEn: "RTI Act 2005: Citizen Empowerment, Section 8 Exemptions, Whistleblower Risks & Impact of 2019 Amendments",
                                            chips: ["RTI कायदा २००५", "कलम ८ अपवाद", "२०१९ सुधारणा आक्षेप", "पारदर्शकता"]
                                        },
                                        {
                                            id: "st_g208_01_02",
                                            titleMr: "नागरिक सनद (Citizen's Charter): सेवांची मानके, कालमर्यादा, तक्रार निवारण; भारतातील अपयशाची कारणे (कायदेशीर बंधन नसणे, जनजागृती अभाव) आणि 'सेवोत्तम' मॉडेल",
                                            titleEn: "Citizen's Charter: Quality Benchmarks, Grievance Mechanisms, Non-Justiciability Deficits & Sevottam Framework",
                                            chips: ["नागरिक सनद", "सेवोत्तम मॉडेल", "तक्रार निवारण यंत्रणा"]
                                        },
                                        {
                                            id: "st_g208_01_03",
                                            titleMr: "सामाजिक लेखापरीक्षण (Social Audit): नागरिक सहभागातून योजनांचे मूल्यमापन (उदा. मनरेगा), पारदर्शकता आणणे, आणि प्रशासकीय उत्तरदायित्व",
                                            titleEn: "Social Audit Paradigm: Community-Led Performance Audits (MGNREGA), Transparency & Grassroots Vigilance",
                                            chips: ["सामाजिक लेखापरीक्षण (Social Audit)", "मनरेगा ऑडिट", "नागरिक दक्षता"]
                                        }
                                    ],
                                    sources: [
                                        { book: "द्वितीय प्रशासकीय सुधारणा आयोग (2nd ARC)", standard: "शासकीय अहवाल", chapterRef: "अहवाल १ व १२: माहितीचा अधिकार व नागरिक-केंद्री प्रशासन" }
                                    ]
                                },
                                {
                                    id: "top_g208_02",
                                    nameMr: "ई-प्रशासन उपयोजन, यश-मर्यादा व महाराष्ट्र लोकसेवा हक्क",
                                    nameEn: "E-Governance Applications, Limitations & Maharashtra RTS Act",
                                    subtopics: [
                                        {
                                            id: "st_g208_02_01",
                                            titleMr: "ई-प्रशासन मॉडेल्स: G2C (शासन ते नागरिक), G2B (शासन ते व्यवसाय), G2G (शासन ते शासन); डिजिटल इंडिया, DBT लाभ, आणि डिजिटल दरी (Digital Divide) आव्हाने",
                                            titleEn: "E-Governance Models: G2C, G2B, G2G, Digital India, Direct Benefit Transfer (DBT) & Cybersecurity/Privacy Risks",
                                            chips: ["ई-प्रशासन (G2C, G2B)", "DBT थेट लाभ हस्तांतरण", "डिजिटल दरी आव्हान"]
                                        },
                                        {
                                            id: "st_g208_02_02",
                                            titleMr: "महाराष्ट्र लोकसेवा हक्क अधिनियम २०१५: पारदर्शक व कालबद्ध सेवा वितरण, पदनिर्देशित अधिकारी, तीन स्तरीय अपील यंत्रणा, आणि दोषी अधिकाऱ्यांवर दंडात्मक कारवाई",
                                            titleEn: "Maharashtra Right to Public Services Act 2015: Time-Bound Service Guarantee, 3-Tier Appeals & Penalties",
                                            chips: ["महाराष्ट्र लोकसेवा हक्क २०१५", "पदनिर्देशित अधिकारी", "कालबद्ध सेवा वितरण", "दंडात्मक तरतूद"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Maharashtra Right to Public Services Act 2015 Manual", standard: "शासकीय राजपत्र", chapterRef: "नियम व अंमलबजावणी मार्गदर्शक" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग ९: लोकशाहीत नागरी सेवांची भूमिका व प्रशासकीय सुधारणा (Civil Services)
                        // =========================================================================
                        {
                            id: "m_gs2_chap_09",
                            code: "G209",
                            section: "Civil Services",
                            slug: "role-of-civil-services-in-a-democracy-and-administrative-reforms",
                            nameMr: "लोकशाहीत नागरी सेवांची भूमिका, तटस्थता, प्रशासकीय सुधारणा व 2nd ARC",
                            nameEn: "Role of Civil Services in a Democracy, Anonymity, Neutrality & Administrative Reforms",
                            name: "नागरी सेवांची भूमिका व प्रशासकीय सुधारणा (Civil Services in Democracy)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 8,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs2_09",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs2_chap_08",
                            nextChapterId: "m_gs2_chap_10",
                            metaDescriptionMr: "नागरी सेवांची घटनात्मक चौकट (कलम ३११), राजकीय तटस्थता, निनावीपणा (Anonymity), प्रशासनाचे राजकीयीकरण, लॅटरल एंट्री वाद, मिशन कर्मयोगी, आणि 2nd ARC शिफारसी.",
                            metaDescriptionEn: "Constitutional safeguard under Article 311, neutrality, anonymity, politicisation of civil services, lateral entry debate, Mission Karmayogi, and 2nd ARC reform blueprints.",
                            notesJsonPath: "/data/notes/mains_gs2/g209_civil_services.json",
                            quizTag: "mains_gs2_civil_01",
                            tags: ["Civil Services Role", "Article 311 Protection", "Political Neutrality", "Lateral Entry Debate", "Mission Karmayogi", "2nd ARC Reforms", "Generalist vs Specialist"],
                            searchKeywords: ["role of civil services in democracy", "article 311 constitutional safeguards", "lateral entry in civil services", "mission karmayogi", "second arc recommendations", "नागरी सेवांची भूमिका", "कलम ३११ संरक्षण", "लॅटरल एंट्री", "मिशन कर्मयोगी", "२ रा प्रशासकीय सुधारणा आयोग"],
                            topics: [
                                {
                                    id: "top_g209_01",
                                    nameMr: "नागरी सेवांची घटनात्मक चौकट, मूल्ये व समकालीन आव्हाने",
                                    nameEn: "Constitutional Protection, Core Civil Service Ethos & Challenges",
                                    subtopics: [
                                        {
                                            id: "st_g209_01_01",
                                            titleMr: "घटनात्मक संरक्षण: कलम ३११ (कामावरून काढण्याविरुद्ध संरक्षण), अखिल भारतीय सेवांची (AIS - कलम ३१२) एकात्मतेतील भूमिका आणि सरदार पटेलांचा दृष्टिकोन ('स्टील फ्रेम')",
                                            titleEn: "Constitutional Shield: Article 311 Safeguards, AIS (Art 312) National Integration Role & Patel's 'Steel Frame' Vision",
                                            chips: ["कलम ३११ घटनात्मक संरक्षण", "अखिल भारतीय सेवा कलम ३१२", "सरदार पटेलांची स्टील फ्रेम"]
                                        },
                                        {
                                            id: "st_g209_01_02",
                                            titleMr: "नागरी सेवेतील कळीची मूल्ये: राजकीय तटस्थता (Political Neutrality), अनामिकता (Anonymity), व्यावसायिक निष्ठा आणि प्रशासनाचे राजकीयीकरण रोखणे",
                                            titleEn: "Foundational Values: Neutrality, Anonymity, Objectivity, Empathy & Resisting Politicisation of Bureaucracy",
                                            chips: ["राजकीय तटस्थता", "निनावीपणा (Anonymity)", "राजकीयीकरण रोखणे"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय राज्यव्यवस्था - एम. लक्ष्मीकांत", standard: "प्रमाणित संदर्भ", chapterRef: "प्रकरण ६४: सार्वजनिक सेवा" }
                                    ]
                                },
                                {
                                    id: "top_g209_02",
                                    nameMr: "प्रशासकीय सुधारणा, लॅटरल एंट्री व मिशन कर्मयोगी",
                                    nameEn: "Administrative Reforms, Lateral Entry & Mission Karmayogi",
                                    subtopics: [
                                        {
                                            id: "st_g209_02_01",
                                            titleMr: "लॅटरल एंट्री (Lateral Entry): तज्ज्ञ अधिकाऱ्यांची थेट नियुक्ती (Generalist vs Specialist वाद), गुण-दोष, आणि प्रशासकीय कार्यक्षमतेवर होणारा परिणाम",
                                            titleEn: "Lateral Entry in Bureaucracy: Generalist vs Specialist Conundrum, Merits, Demerits & Institutional Friction",
                                            chips: ["लॅटरल एंट्री", "Generalist vs Specialist", "तज्ज्ञ प्रशासक"]
                                        },
                                        {
                                            id: "st_g209_02_02",
                                            titleMr: "क्षमता बांधणी: 'मिशन कर्मयोगी' (National Programme for Civil Services Capacity Building - NPCSCB), नियम-आधारित ते भूमिका-आधारित प्रशासन (Rule to Role)",
                                            titleEn: "Mission Karmayogi (NPCSCB): Transforming Bureaucracy from 'Rule-Based' to 'Role-Based' Competency Framework",
                                            chips: ["मिशन कर्मयोगी", "Rule to Role स्थित्यंतर", "क्षमता संवर्धन"]
                                        },
                                        {
                                            id: "st_g209_02_03",
                                            titleMr: "द्वितीय प्रशासकीय सुधारणा आयोग (2nd ARC) शिफारसी: कार्यकाळ सुरक्षितता, भ्रष्टाचार निवारण, आणि नागरी सेवा मंडळ (CSB) स्थापना",
                                            titleEn: "2nd ARC Blueprints: Civil Services Board (CSB) for Fixed Tenure, Performance Appraisals & De-politicisation",
                                            chips: ["2nd ARC शिफारसी", "नागरी सेवा मंडळ (CSB)", "कार्यकाळ स्थिरता"]
                                        }
                                    ],
                                    sources: [
                                        { book: "द्वितीय प्रशासकीय सुधारणा आयोग (2nd ARC)", standard: "शासकीय अहवाल", chapterRef: "अहवाल १०: नागरी सेवांचे पुनरुज्जीवन (Refurbishing Personnel Administration)" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग १०: सामाजिक न्याय, दुर्बल घटक कल्याण व मानवी विकास (Social Justice)
                        // =========================================================================
                        {
                            id: "m_gs2_chap_10",
                            code: "G210",
                            section: "Social Justice",
                            slug: "welfare-schemes-for-vulnerable-sections-health-education-and-human-resources",
                            nameMr: "सामाजिक न्याय: दुर्बल घटकांसाठी कल्याणकारी योजना, आरोग्य, शिक्षण व मानवी विकास",
                            nameEn: "Welfare Schemes for Vulnerable Sections, Health, Education & Human Resources Issues",
                            name: "सामाजिक न्याय व मानवी विकास (Social Justice & Human Development)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 12,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs2_10",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs2_chap_09",
                            nextChapterId: "m_gs2_chap_11",
                            metaDescriptionMr: "SC, ST, OBC, अल्पसंख्याक, महिला, बालके व दिव्यांगांसाठी घटनात्मक/कायदेशीर संरक्षण, आरोग्य व्यवस्था (आयुष्मान भारत, GDP च्या २.५% खर्च), शिक्षण (NEP 2020), आणि भूक-कुपोषण.",
                            metaDescriptionEn: "Protections for SC, ST, OBC, Minorities, Women, PwD, Healthcare delivery (Ayushman Bharat, 2.5% GDP target), Education (NEP 2020), Hunger, and Human Capital.",
                            notesJsonPath: "/data/notes/mains_gs2/g210_social_justice.json",
                            quizTag: "mains_gs2_soc_just_01",
                            tags: ["Social Justice", "Vulnerable Sections", "Healthcare Delivery", "Ayushman Bharat", "Education NEP 2020", "Hunger and Malnutrition", "Human Capital Index"],
                            searchKeywords: ["welfare schemes vulnerable sections mains", "healthcare reforms ayushman bharat", "education nep 2020 implementation", "hunger global hunger index india", "सामाजिक न्याय", "दुर्बल घटक योजना", "आरोग्य सुधारणा", "शिक्षण हक्क", "कुपोषण समस्या"],
                            topics: [
                                {
                                    id: "top_g210_01",
                                    nameMr: "दुर्बल घटकांसाठी घटनात्मक संरक्षण व कल्याणकारी यंत्रणा",
                                    nameEn: "Constitutional Safety Nets & Welfare Mechanisms for Vulnerable Sections",
                                    subtopics: [
                                        {
                                            id: "st_g210_01_01",
                                            titleMr: "अनुसूचित जाती, जमाती व इतर मागासवर्गासाठी तरतुदी: आरक्षण धोरण, क्रीमी लेअर निकष, SC/ST अत्याचार प्रतिबंधक कायदा (PoA 1989), आणि राष्ट्रीय सामाजिक आयोग (NCSC, NCST, NCBC)",
                                            titleEn: "SC, ST, OBC Protective Framework: Quotas, Creamy Layer Rules, PoA Act 1989 & Constitutional Commissions (NCSC/NCST/NCBC)",
                                            chips: ["आरक्षण धोरण", "क्रीमी लेअर", "ॲट्रॉसिटी कायदा १९८९", "NCSC, NCST, NCBC"]
                                        },
                                        {
                                            id: "st_g210_01_02",
                                            titleMr: "महिला, बालके व दिव्यांग व्यक्तींचे सक्षमीकरण: पॉक्सो कायदा (POCSO 2012), कामाच्या ठिकाणी छळ प्रतिबंधक कायदा (POSH 2013), आणि दिव्यांग हक्क कायदा २०१६ (४% आरक्षण)",
                                            titleEn: "Women, Children & PwD Safeguards: POCSO Act 2012, POSH Act 2013, Rights of PwD Act 2016 (4% Quota)",
                                            chips: ["पॉक्सो कायदा २०१२", "POSH कायदा २०१३", "दिव्यांग हक्क कायदा २०१६"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Social Welfare Legislation in India", standard: "शासकीय कायदे संच", chapterRef: "Welfare of Weaker Sections" }
                                    ]
                                },
                                {
                                    id: "top_g210_02",
                                    nameMr: "आरोग्य, शिक्षण, मानवी भांडवल व भूक-कुपोषण आव्हाने",
                                    nameEn: "Healthcare, Education Ecosystem, Human Capital & Malnutrition",
                                    subtopics: [
                                        {
                                            id: "st_g210_02_01",
                                            titleMr: "आरोग्य व्यवस्था: सार्वजनिक आरोग्य खर्च (जीडीपीच्या २.५% चे उद्दिष्ट), खिशातून होणारा वैद्यकीय खर्च (Out-of-Pocket Expenditure), आयुष्मान भारत (PM-JAY), आणि प्राथमिक आरोग्य केंद्रे (PHC) बळकटीकरण",
                                            titleEn: "Public Health Infrastructure: Out-of-Pocket Expenditure Deficits, Ayushman Bharat (PM-JAY) & Strengthening PHCs",
                                            chips: ["आरोग्य खर्च (GDP २.५%)", "आयुष्मान भारत PM-JAY", "प्राथमिक आरोग्य केंद्रे (PHC)"]
                                        },
                                        {
                                            id: "st_g210_02_02",
                                            titleMr: "शिक्षण व कौशल्य विकास: राष्ट्रीय शैक्षणिक धोरण २०२० (NEP), पायाभूत साक्षरता व संख्याज्ञान (FLN), डिजिटल शिक्षणातील विषमता, आणि उच्च शिक्षणातील संशोधनाचा अभाव",
                                            titleEn: "Education Ecosystem: NEP 2020 Rollout, Foundational Literacy & Numeracy (FLN), Digital Learning Chasm & R&D",
                                            chips: ["NEP 2020", "FLN साक्षरता", "डिजिटल शिक्षण दरी"]
                                        },
                                        {
                                            id: "st_g210_02_03",
                                            titleMr: "भूक व कुपोषण: ग्लोबल हंगर इंडेक्स (GHI) वाद, बालकांचे स्टंटिंग (Stunting) व वेस्टिंग (Wasting) - महाराष्ट्रातील मेळघाट वास्तव, आणि राष्ट्रीय अन्नसुरक्षा कायदा २०१३ (NFSA)",
                                            titleEn: "Hunger & Malnutrition: Stunting, Wasting, Melghat Tribal Realities in Maharashtra & National Food Security Act (NFSA 2013)",
                                            chips: ["कुपोषण समस्या (मेळघाट)", "स्टंटिंग व वेस्टिंग", "अन्नसुरक्षा कायदा २०१३"]
                                        }
                                    ],
                                    sources: [
                                        { book: "NITI Aayog Health & Education Index Reports", standard: "शासकीय निर्देशांक", chapterRef: "Social Sector Outcomes" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग ११: भारताचे परराष्ट्र धोरण व शेजारील देशांशी संबंध (Foreign Policy & Neighborhood)
                        // =========================================================================
                        {
                            id: "m_gs2_chap_11",
                            code: "G211",
                            section: "International Relations",
                            slug: "india-and-its-neighborhood-relations-and-foreign-policy-principles",
                            nameMr: "भारताचे परराष्ट्र धोरण: शेजारी प्रथम, ॲक्ट ईस्ट, मध्य आशिया व सागरी सुरक्षा",
                            nameEn: "India & its Neighborhood Relations: Bilateral Ties, SAGAR & Strategic Autonomy",
                            name: "भारताचे परराष्ट्र धोरण व शेजारी संबंध (India & its Neighborhood)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 12,
                            isMaharashtraReference: false,
                            trackingKey: "progress_m_gs2_11",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs2_chap_10",
                            nextChapterId: "m_gs2_chap_12",
                            metaDescriptionMr: "शेजारी प्रथम धोरण (Neighborhood First), भारत-चीन सीमावाद (LAC), भारत-पाक संबंध, नेपाळ, बांगलादेश, श्रीलंका संकट, ॲक्ट ईस्ट, आणि हिंदी महासागरात SAGAR धोरण.",
                            metaDescriptionEn: "Neighborhood First, India-China LAC tensions, Pakistan cross-border challenges, Bangladesh land pact, Sri Lanka bailout, Act East, and SAGAR doctrine.",
                            notesJsonPath: "/data/notes/mains_gs2/g211_neighborhood_ir.json",
                            quizTag: "mains_gs2_ir_01",
                            tags: ["Neighborhood First", "India China LAC", "India Pakistan Ties", "India Bangladesh Ties", "SAGAR Security", "Act East Policy", "Strategic Autonomy"],
                            searchKeywords: ["neighborhood first policy", "india china relations border", "india pakistan foreign policy", "sagar doctrine indian ocean", "act east policy", "शेजारी प्रथम धोरण", "भारत चीन सीमावाद", "परराष्ट्र धोरण", "सागर (SAGAR) धोरण"],
                            topics: [
                                {
                                    id: "top_g211_01",
                                    nameMr: "भारताचे शेजारी देश: द्विपक्षीय संबंध, संघर्ष व सहकार्य",
                                    nameEn: "Neighborhood Relations: Border Disputes, Diplomacy & Aid",
                                    subtopics: [
                                        {
                                            id: "st_g211_01_01",
                                            titleMr: "भारत-चीन संबंध: प्रत्यक्ष नियंत्रण रेषा (LAC - गलवान खोरे), डोकलाम वाद, चीनची 'स्ट्रिंग ऑफ पर्ल्स' (String of Pearls) रणनीती, आणि द्विपक्षीय व्यापार असमतोल",
                                            titleEn: "India-China Complexities: LAC Standoffs (Galwan, Doklam), String of Pearls Encirclement & Massive Trade Deficit",
                                            chips: ["भारत-चीन संबंध", "LAC गलवान संघर्ष", "स्ट्रिंग ऑफ पर्ल्स", "व्यापार तूट"]
                                        },
                                        {
                                            id: "st_g211_01_02",
                                            titleMr: "भारत-पाकिस्तान संबंध: सीमापार दहशतवाद, कलम ३७० नंतरचे संबंध, सिंधू जलकरार (Indus Waters Treaty), आणि सार्क (SAARC) ची निष्क्रियता",
                                            titleEn: "India-Pakistan Stalemate: Cross-Border Terror, Post-Art 370 Scenario, Indus Waters Treaty & SAARC Paralysis",
                                            chips: ["सीमापार दहशतवाद", "सिंधू जलकरार", "सार्क निष्क्रियता"]
                                        },
                                        {
                                            id: "st_g211_01_03",
                                            titleMr: "दक्षिण आशियाई शेजारी: बांगलादेश (ऐतिहासिक भूसीमा करार व तीस्ता पाणी वाद), नेपाळ (रोटी-बेटी संबंध व नकाशा वाद), श्रीलंका (आर्थिक संकटात भारताची मदत), आणि भूतान सहकार्य",
                                            titleEn: "Subcontinental Neighbors: Bangladesh (LBA Success, Teesta), Nepal (Border Map Issues), Sri Lanka Bailout & Bhutan Partnership",
                                            chips: ["भारत-बांगलादेश", "भारत-नेपाळ", "श्रीलंका मदत", "तीस्ता पाणी वाद"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारताचे परराष्ट्र धोरण - शैलेंद्र देवळाणकर", standard: "प्रमाणित संदर्भ", chapterRef: "भारताचे शेजारील देशांशी संबंध" },
                                        { book: "Does the Elephant Dance? - David Malone", standard: "प्रमाणित संदर्भ", chapterRef: "India's Regional Diplomacy" }
                                    ]
                                },
                                {
                                    id: "top_g211_02",
                                    nameMr: "परराष्ट्र धोरणातील विस्तार: ॲक्ट ईस्ट, पश्चिम आशिया व सागरी सुरक्षा",
                                    nameEn: "Extended Neighborhood: Act East, West Asia (I2U2) & Maritime SAGAR",
                                    subtopics: [
                                        {
                                            id: "st_g211_02_01",
                                            titleMr: "ॲक्ट ईस्ट पॉलिसी (Act East): आसियान (ASEAN) देशांशी धोरणात्मक व आर्थिक एकात्मता, म्यानमार-थायलंड त्रिपक्षीय महामार्ग, आणि कलादान प्रकल्प",
                                            titleEn: "Act East Policy: Deepening ASEAN Ties, India-Myanmar-Thailand Trilateral Highway & Kaladan Multi-Modal Project",
                                            chips: ["ॲक्ट ईस्ट पॉलिसी", "आसियान (ASEAN)", "कलादान प्रकल्प"]
                                        },
                                        {
                                            id: "st_g211_02_02",
                                            titleMr: "पश्चिम आशिया व मध्य पूर्व: ऊर्जा सुरक्षा, भारतीय डायस्पोरा (प्रवासी कामगार), चाबहार बंदर, अब्राहम करार आणि I2U2 गट (भारत, इस्रायल, युएई, अमेरिका)",
                                            titleEn: "West Asia Realignment: Energy Lifelines, Diaspora Protection, Chabahar Port, Abraham Accords & I2U2 Grouping",
                                            chips: ["पश्चिम आशिया", "I2U2 गट", "चाबहार बंदर", "भारतीय डायस्पोरा"]
                                        },
                                        {
                                            id: "st_g211_02_03",
                                            titleMr: "हिंदी महासागर व सागरी सुरक्षा: 'सागर' धोरण (SAGAR - Security and Growth for All in the Region), नेट सिक्युरिटी प्रोव्हायडर भूमिका, आणि चाचेगिरीविरोधी मोहिमा",
                                            titleEn: "Indian Ocean Domain: SAGAR Doctrine, Net Security Provider Mantle & Anti-Piracy Patrols",
                                            chips: ["सागर (SAGAR) धोरण", "नेट सिक्युरिटी प्रोव्हायडर", "हिंदी महासागर सुरक्षा"]
                                        }
                                    ],
                                    sources: [
                                        { book: "The India Way - S. Jaishankar", standard: "परराष्ट्र व्यवहार ग्रंथ", chapterRef: "Engaging the Extended Neighborhood" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग १२: जागतिक गट, आंतरराष्ट्रीय संघटना व भारतीय डायस्पोरा (Global Groupings & IR)
                        // =========================================================================
                        {
                            id: "m_gs2_chap_12",
                            code: "G212",
                            section: "Global Affairs",
                            slug: "bilateral-regional-and-global-groupings-involving-india-and-diaspora",
                            nameMr: "द्विपक्षीय, प्रादेशिक व जागतिक गट (QUAD, BRICS, SCO, G20), जागतिक संस्था व डायस्पोरा",
                            nameEn: "Bilateral, Regional & Global Groupings (QUAD, BRICS, SCO, G20), UN Reforms & Indian Diaspora",
                            name: "जागतिक गट, आंतरराष्ट्रीय संस्था व डायस्पोरा (Global Groupings & Diaspora)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 11,
                            isMaharashtraReference: false,
                            trackingKey: "progress_m_gs2_12",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs2_chap_11",
                            nextChapterId: null,
                            metaDescriptionMr: "QUAD, BRICS, SCO, G20, संयुक्त राष्ट्र सुरक्षा परिषद सुधारणा (UNSC), WTO वाद, जागतिक धोरणांचा भारतावर प्रभाव, आणि भारतीय डायस्पोराची सॉफ्ट पॉवर.",
                            metaDescriptionEn: "In-depth coverage of QUAD, BRICS expansion, SCO balancing, G20 presidency, UNSC permanent seat bid, WTO agricultural disputes, and Indian Diaspora soft power.",
                            notesJsonPath: "/data/notes/mains_gs2/g212_global_groupings.json",
                            quizTag: "mains_gs2_global_01",
                            tags: ["Global Groupings", "QUAD Indo-Pacific", "BRICS Expansion", "SCO Balancing", "UNSC Reforms", "WTO Disputes", "Indian Diaspora Soft Power"],
                            searchKeywords: ["quad indo pacific grouping", "brics expansion geopolitics", "unsc reforms permanent seat india", "wto peace clause agriculture", "indian diaspora remittances soft power", "क्वाड (QUAD)", "ब्रिक्स (BRICS)", "UN सुरक्षा परिषद सुधारणा", "भारतीय डायस्पोरा"],
                            topics: [
                                {
                                    id: "top_g212_01",
                                    nameMr: "जागतिक बहुपक्षीय गट: QUAD, BRICS, SCO आणि G20",
                                    nameEn: "Plurilateral Groupings: QUAD, BRICS, SCO & G20 Diplomacy",
                                    subtopics: [
                                        {
                                            id: "st_g212_01_01",
                                            titleMr: "क्वाड (QUAD - भारत, अमेरिका, जपान, ऑस्ट्रेलिया): मुक्त व खुला इंडो-पॅसिफिक, सागरी डोमेन जागरूकता, सेमीकंडक्टर सप्लाय चेन, आणि चीनचा आक्षेप",
                                            titleEn: "QUAD (India, US, Japan, Australia): Free & Open Indo-Pacific, Maritime Domain Awareness & Supply Chain Resilience",
                                            chips: ["क्वाड (QUAD)", "इंडो-पॅसिफिक", "सप्लाय चेन लवचिकता"]
                                        },
                                        {
                                            id: "st_g212_01_02",
                                            titleMr: "ब्रिक्स (BRICS) विस्तार व शांघाय सहकार्य संघटना (SCO): पाश्चात्त्य वर्चस्वाविरुद्ध बहुध्रुवीय वित्तीय रचना, न्यू डेव्हलपमेंट बँक (NDB), आणि भारताचे धोरणात्मक संतुलन",
                                            titleEn: "BRICS Expansion & SCO: Countering Western Hegemony, Local Currency Settlements, NDB & Multi-Alignment",
                                            chips: ["ब्रिक्स (BRICS) विस्तार", "SCO संघटना", "न्यू डेव्हलपमेंट बँक (NDB)"]
                                        },
                                        {
                                            id: "st_g212_01_03",
                                            titleMr: "G20 अध्यक्षतेचा भारताचा वारसा: आफ्रिकन युनियनचा समावेश, नवी दिल्ली जाहीरनामा, डिजिटल सार्वजनिक पायाभूत सुविधा (DPI) निर्यात, आणि ग्लोबल साऊथचे नेतृत्व",
                                            titleEn: "India's G20 Presidency Legacy: Inclusion of African Union, New Delhi Declaration, DPI Export & Global South Leadership",
                                            chips: ["G20 नवी दिल्ली जाहीरनामा", "आफ्रिकन युनियन प्रवेश", "डिजिटल पब्लिक इन्फ्रास्ट्रक्चर"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Ministry of External Affairs (MEA) Official Briefs", standard: "शासकीय राजनैतिक अहवाल", chapterRef: "Multilateral Groupings Overview" }
                                    ]
                                },
                                {
                                    id: "top_g212_02",
                                    nameMr: "आंतरराष्ट्रीय संस्थांमधील सुधारणा व भारतीय डायस्पोराची ताकद",
                                    nameEn: "Reforming Global Institutions & the Indian Diaspora Engine",
                                    subtopics: [
                                        {
                                            id: "st_g212_02_01",
                                            titleMr: "संयुक्त राष्ट्र सुधारणा (UN Reforms): सुरक्षा परिषदेच्या (UNSC) स्थायी सदस्यत्वाचा भारताचा दावा (G4 गट), व्हेटो पॉवरचा गैरवापर, आणि जागतिक प्रशासनातील कोंडी",
                                            titleEn: "UNSC Reforms: India's Permanent Seat Bid (G4 Coalition), Veto Paralysis & Democratising Global Governance",
                                            chips: ["UNSC सुरक्षा परिषद सुधारणा", "G4 गट", "स्थायी सदस्यत्व दावा"]
                                        },
                                        {
                                            id: "st_g212_02_02",
                                            titleMr: "जागतिक व्यापार संघटना (WTO) वाद: कृषी अनुदाने (अंबर बॉक्स vs ग्रीन बॉक्स), अन्नसुरक्षेसाठी पीस क्लॉज (Peace Clause), आणि अपीलीय लवादाचे (Appellate Body) संकट",
                                            titleEn: "WTO Impasse: Agricultural Subsidies (Amber vs Green Box), Public Stockholding Peace Clause & Appellate Body Crisis",
                                            chips: ["WTO कृषी अनुदाने", "पीस क्लॉज (Peace Clause)", "अपीलीय लवाद संकट"]
                                        },
                                        {
                                            id: "st_g212_02_03",
                                            titleMr: "भारतीय डायस्पोरा (Indian Diaspora): जगातील सर्वाधिक रेमिटन्स (Remittance - १००+ अब्ज डॉलर्स), सिलिकॉन व्हॅलीमधील तांत्रिक नेतृत्व, परराष्ट्र धोरणातील मवाळ ताकद (Soft Power), आणि सुरक्षिततेची आव्हाने",
                                            titleEn: "Indian Diaspora: Top Global Remittances ($100B+), Silicon Valley Tech Leadership, Cultural Soft Power & Evacuation Protocols",
                                            chips: ["भारतीय डायस्पोरा", "रेमिटन्स (Remittance)", "सॉफ्ट पॉवर मुत्सद्देगिरी"]
                                        }
                                    ],
                                    sources: [
                                        { book: "The Oxford Handbook of Indian Foreign Policy", standard: "प्रमाणित संदर्भ", chapterRef: "India and Global Multilateral Institutions" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "rajyaseva_mains_paper_6",
            paperNumber: 6,
            code: "GS3",
            slug: "mains-general-studies-3",
            nameMr: "सामान्य अध्ययन ३: तंत्रज्ञान, आर्थिक विकास, जैवविविधता, पर्यावरण, सुरक्षा व आपत्ती व्यवस्थापन",
            nameEn: "General Studies III: Technology, Economic Development, Biodiversity, Security & Disaster Management",
            type: "Merit",
            standard: "पदवी स्तर (महाराष्ट्राच्या विशेष संदर्भासह)",
            durationHours: 3,
            marks: 250,
            subjects: [
                {
                    id: "sub_mains_gs3_economy_agriculture_sci_tech_env_security",
                    code: "GS3_SUB",
                    slug: "mains-gs3-technology-economic-development-biodiversity-security-and-disaster-management",
                    nameMr: "सामान्य अध्ययन ३: अर्थव्यवस्था, कृषी, विज्ञान-तंत्रज्ञान, पर्यावरण, आपत्ती व्यवस्थापन व अंतर्गत सुरक्षा",
                    nameEn: "General Studies III: Technology, Economic Development, Biodiversity, Environment, Security & Disaster Management",
                    name: "सामान्य अध्ययन ३ (Paper 6: General Studies III - 250 Marks)",
                    officialScope: "MPSC State Services Mains Paper 6 (General Studies III): Technology, Economic Development, Bio-diversity, Environment, Security and Disaster Management with special weightage to Maharashtra (Descriptive Pattern - 250 Marks, Duration: 3 Hours).",
                    version: "1.0",
                    verifiedDate: "2026-10-28",
                    notesJsonBaseDir: "/data/notes/mains_gs3/",


                    theme: {
                        primaryColor: "#047857",        // Emerald Green / Sustainable Tech, Economy & Bio-diversity Theme
                        bgColor: "#ecfdf5",
                        iconClass: "ri-funds-box-line"
                    },


                    metrics: {
                        totalChapters: 12,
                        totalEstimatedHours: 120,
                        totalMarks: 250,
                        targetMarks: 115,               // स्पर्धात्मक निवडीसाठी सुरक्षित जीएस-३ स्कोअर
                        paperDurationHours: 3
                    },


                    subjectTags: [
                        "Mains-Merit",
                        "Paper-6-Mains",
                        "GS-3",
                        "Descriptive-Subjective",
                        "Indian-Economy-Planning",
                        "Agriculture-Irrigation-PDS",
                        "Science-Technology-Indigenisation",
                        "Bio-diversity-Environment-Pollution",
                        "Disaster-Management-Resilience",
                        "Internal-Security-Cyber-Threats"
                    ],


                    filterCategory: "MAINS_MERIT",
                    searchKeywords: [
                        "mpsc mains gs 3", "indian economy mains", "agriculture reforms pds msp",
                        "science and technology indigenisation", "environmental pollution eia",
                        "disaster management ndma", "internal security cyber warfare", "money laundering border security",
                        "सामान्य अध्ययन ३", "भारतीय अर्थव्यवस्था", "कृषी सुधारणा व सिंचन", "विज्ञान व तंत्रज्ञान", "पर्यावरण प्रदूषण", "आपत्ती व्यवस्थापन", "अंतर्गत सुरक्षा"
                    ],


                    referenceSources: [
                        {
                            name: "MPSC राज्यसेवा मुख्य परीक्षा अधिकृत अभ्यासक्रम (Descriptive SSE)",
                            role: "अधिकृत परीक्षा-संदर्भ",
                            url: "https://mpsc.org.in/"
                        },
                        {
                            name: "भारतीय अर्थव्यवस्था - रंजन कोळंबे / रमेश सिंग",
                            role: "अर्थव्यवस्था, नियोजन, बँकिंग व वित्तीय सुधारणा"
                        },
                        {
                            name: "केंद्रीय आर्थिक पाहणी अहवाल (Economic Survey of India) व केंद्रीय अर्थसंकल्प",
                            role: "आर्थिक विश्लेषण व अद्ययावत सांख्यिकी"
                        },
                        {
                            name: "महाराष्ट्र आर्थिक पाहणी अहवाल (Economic Survey of Maharashtra)",
                            role: "महाराष्ट्राची अर्थव्यवस्था, शेती व पायाभूत सुविधा"
                        },
                        {
                            name: "विज्ञान व तंत्रज्ञान - सचिन भस्के / तुषार घोरपडे",
                            role: "अंतराळ, संरक्षण, नॅनो-तंत्रज्ञान, जैवतंत्रज्ञान व ऊर्जा"
                        },
                        {
                            name: "भारताची अंतर्गत सुरक्षा - अशोक कुमार (IPS) व बिपुल अनेकांत",
                            role: "दहशतवाद, नक्षलवाद, सायबर सुरक्षा व सीमा व्यवस्थापन"
                        },
                        {
                            name: "आपत्ती व्यवस्थापन मार्गदर्शक तत्त्वे - NDMA",
                            role: "आपत्ती व्यवस्थापन आराखडा व शमन उपाय"
                        }
                    ],


                    chapters: [
                        // =========================================================================
                        // विभाग १: भारतीय अर्थव्यवस्था, नियोजन व सर्वसमावेशक विकास (Economy & Growth)
                        // =========================================================================
                        {
                            id: "m_gs3_chap_01",
                            code: "G301",
                            section: "Indian Economy",
                            slug: "indian-economy-growth-development-employment-and-inclusive-growth",
                            nameMr: "भारतीय अर्थव्यवस्था: संसाधनांचे एकत्रीकरण, वाढ, विकास, रोजगार व सर्वसमावेशक वृद्धी",
                            nameEn: "Indian Economy: Resource Mobilization, Growth, Development, Employment & Inclusive Growth",
                            name: "अर्थव्यवस्था व सर्वसमावेशक विकास (Indian Economy & Inclusive Growth)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 10,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs3_01",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: null,
                            nextChapterId: "m_gs3_chap_02",
                            metaDescriptionMr: "आर्थिक नियोजन, ५-ट्रिलियन उद्दिष्ट, ऑक्सफॅम अहवाल व विषमता, रोजगारविरहित वाढ (Jobless Growth), गिग इकॉनॉमी, आणि महाराष्ट्रातील प्रादेशिक अनुशेष.",
                            metaDescriptionEn: "Economic planning, resource mobilisation, 5-Trillion roadmap, Oxfam inequality metrics, Jobless Growth, Gig economy dynamics, and Maharashtra's regional backlog.",
                            notesJsonPath: "/data/notes/mains_gs3/g301_economy_growth.json",
                            quizTag: "mains_gs3_eco_01",
                            tags: ["Indian Economy", "Resource Mobilization", "Jobless Growth", "Inclusive Growth", "Gig Economy", "Regional Backlog Maharashtra", "High-Yield"],
                            searchKeywords: ["indian economy resource mobilization", "jobless growth in india", "inclusive growth paradigms", "gig economy challenges", "maharashtra regional imbalance", "संसाधनांचे एकत्रीकरण", "रोजगारविरहित वाढ", "सर्वसमावेशक विकास", "प्रादेशिक अनुशेष"],
                            topics: [
                                {
                                    id: "top_g301_01",
                                    nameMr: "संसाधनांचे एकत्रीकरण, आर्थिक वृद्धी व सर्वसमावेशक विकास",
                                    nameEn: "Resource Mobilization, Economic Growth & Inclusive Paradigms",
                                    subtopics: [
                                        {
                                            id: "st_g301_01_01",
                                            titleMr: "संसाधनांचे एकत्रीकरण (Resource Mobilization): कर व कर-व्यतिरिक्त महसूल, भांडवली निर्मिती, बचत दर, आणि खाजगी गुंतवणुकीला (Private Investment) चालना",
                                            titleEn: "Resource Mobilization: Tax-to-GDP Ratio, Non-Tax Revenues, Capital Formation & Boosting Private Capex",
                                            chips: ["संसाधन एकत्रीकरण", "कर-जीडीपी प्रमाण", "भांडवली खर्च (Capex)"]
                                        },
                                        {
                                            id: "st_g301_01_02",
                                            titleMr: "सर्वसमावेशक वृद्धी (Inclusive Growth): आर्थिक वृद्धी विरुद्ध विकास (Growth vs Development), उत्पन्न व प्रादेशिक विषमता, आणि शाश्वत विकास उद्दिष्टे (SDGs)",
                                            titleEn: "Inclusive Growth Paradigms: Growth vs Human Development, Regional Disparities & SDG Alignment",
                                            chips: ["सर्वसमावेशक वृद्धी", "उत्पन्न विषमता", "SDG उद्दिष्टे"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय अर्थव्यवस्था - रमेश सिंग / रंजन कोळंबे", standard: "प्रमाणित संदर्भ", chapterRef: "आर्थिक नियोजन व राष्ट्रीय उत्पन्न" }
                                    ]
                                },
                                {
                                    id: "top_g301_02",
                                    nameMr: "रोजगार संकट, गिग इकॉनॉमी व महाराष्ट्राचा प्रादेशिक असमतोल",
                                    nameEn: "Employment Conundrum, Gig Economy & Regional Disparities in MH",
                                    subtopics: [
                                        {
                                            id: "st_g301_02_01",
                                            titleMr: "रोजगाराची रचना: संरचनात्मक स्थित्यंतरे, रोजगारविरहित वाढ (Jobless Growth), श्रमबळ सहभाग दर (LFPR), आणि गिग/प्लॅटफॉर्म कामगारांची सामाजिक सुरक्षा",
                                            titleEn: "Employment Realities: Structural Shifts, Jobless Growth Dilemmas, LFPR Trends & Social Security for Gig Workers",
                                            chips: ["रोजगारविरहित वाढ", "LFPR प्रमाण", "गिग कामगार सुरक्षा"]
                                        },
                                        {
                                            id: "st_g301_02_02",
                                            titleMr: "महाराष्ट्रातील प्रादेशिक अनुशेष व असमतोल: विदर्भ व मराठवाडा विरुद्ध पश्चिम महाराष्ट्र औद्योगिक दरी; दांडेकर व केळकर समिती शिफारसी",
                                            titleEn: "Regional Imbalances in Maharashtra: Vidarbha/Marathwada Lag vs Western Maharashtra; Dandekar & Kelkar Panel Reports",
                                            chips: ["प्रादेशिक अनुशेष", "केळकर समिती अहवाल", "दांडेकर समिती", "विदर्भ-मराठवाडा विकास"]
                                        }
                                    ],
                                    sources: [
                                        { book: "महाराष्ट्र आर्थिक पाहणी अहवाल", standard: "शासकीय अहवाल", chapterRef: "उद्योग, पायाभूत सुविधा व प्रादेशिक विकास" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग २: सरकारी अर्थसंकल्प व वित्तीय व्यवस्थापन (Government Budgeting)
                        // =========================================================================
                        {
                            id: "m_gs3_chap_02",
                            code: "G302",
                            section: "Government Budgeting",
                            slug: "government-budgeting-fiscal-policy-frbm-and-taxation-reforms",
                            nameMr: "सरकारी अर्थसंकल्प: वित्तीय तूट, कर सुधारणा (GST), FRBM कायदा व भांडवली खर्च",
                            nameEn: "Government Budgeting: Fiscal Deficits, Tax Reforms (GST), FRBM Act & Capital Expenditure",
                            name: "सरकारी अर्थसंकल्प व वित्तीय धोरण (Government Budgeting & Fiscal Policy)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 10,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs3_02",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs3_chap_01",
                            nextChapterId: "m_gs3_chap_03",
                            metaDescriptionMr: "अर्थसंकल्पीय घटक, महसुली व वित्तीय तूट, FRBM कायदा व एन. के. सिंग समिती, प्रत्यक्ष-अप्रत्यक्ष कर सुधारणा (GST रचना), आणि अर्थसंकल्पाची गुणवत्ता.",
                            metaDescriptionEn: "Budget components, Revenue/Fiscal deficits, FRBM Act & N.K. Singh Committee targets, Direct/Indirect tax reforms (GST architecture), and Capex quality.",
                            notesJsonPath: "/data/notes/mains_gs3/g302_budgeting_fiscal.json",
                            quizTag: "mains_gs3_budget_01",
                            tags: ["Government Budgeting", "Fiscal Deficit", "FRBM Act NK Singh", "GST Reforms", "Direct Tax Vivad se Vishwas", "Capital Expenditure"],
                            searchKeywords: ["government budgeting mains", "fiscal deficit vs revenue deficit", "frbm act targets nk singh", "gst reforms achievements challenges", "सरकारी अर्थसंकल्प", "वित्तीय तूट", "FRBM कायदा", "वस्तू व सेवा कर (GST)"],
                            topics: [
                                {
                                    id: "top_g302_01",
                                    nameMr: "अर्थसंकल्प रचना, तुटींचे प्रकार व FRBM कायदा",
                                    nameEn: "Budgetary Components, Deficit Types & FRBM Architecture",
                                    subtopics: [
                                        {
                                            id: "st_g302_01_01",
                                            titleMr: "अर्थसंकल्पीय रचना (कलम ११२): महसुली खाते विरुद्ध भांडवली खाते; तुटींचे प्रकार: महसुली तूट, वित्तीय तूट (Fiscal Deficit), आणि प्राथमिक तूट (Primary Deficit)",
                                            titleEn: "Budgetary Framework (Art 112): Revenue vs Capital Account; Dissecting Deficits (Revenue, Fiscal, Effective Revenue, Primary)",
                                            chips: ["महसुली vs भांडवली खाते", "वित्तीय तूट (Fiscal Deficit)", "प्राथमिक तूट"]
                                        },
                                        {
                                            id: "st_g302_01_02",
                                            titleMr: "वित्तीय जबाबदारी व अर्थसंकल्प व्यवस्थापन (FRBM कायदा २००३): एन. के. सिंग समिती शिफारसी (कर्ज-जीडीपी प्रमाण ६०% चे लक्ष्य), एस्केप क्लॉज, आणि वित्तीय शिस्त",
                                            titleEn: "FRBM Act 2003: N.K. Singh Review Panel, Debt-to-GDP Ratios (60% Combined), Escape Clauses & Fiscal Consolidation",
                                            chips: ["FRBM कायदा २००३", "एन के सिंग समिती", "कर्ज-जीडीपी प्रमाण", "वित्तीय शिस्त"]
                                        }
                                    ],
                                    sources: [
                                        { book: "केंद्रीय अर्थसंकल्प व आर्थिक पाहणी अहवाल", standard: "शासकीय दस्तऐवज", chapterRef: "Fiscal Developments Section" }
                                    ]
                                },
                                {
                                    id: "top_g302_02",
                                    nameMr: "कर सुधारणा, GST आणि अर्थसंकल्पाची गुणवत्ता",
                                    nameEn: "Tax Reforms, GST Structural Issues & Budgetary Quality",
                                    subtopics: [
                                        {
                                            id: "st_g302_02_01",
                                            titleMr: "कर सुधारणा: प्रत्यक्ष कर संहितेतील सुधारणा, फेसलेस मूल्यांकन (Faceless Assessment), कॉर्पोरेट कर कपात, आणि करदात्यांची सनद (Taxpayer’s Charter)",
                                            titleEn: "Direct Tax Reforms: Faceless Scrutiny, Rationalised Corporate Tax, Widening Tax Base & Taxpayer's Charter",
                                            chips: ["प्रत्यक्ष कर सुधारणा", "फेसलेस असेसमेंट", "कॉर्पोरेट कर"]
                                        },
                                        {
                                            id: "st_g302_02_02",
                                            titleMr: "वस्तू व सेवा कर (GST): यश, इनपुट टॅक्स क्रेडिट (ITC) फसवणूक आव्हाने, राज्यांची भरपाई (Compensation Cess), आणि महसूल वृद्धी",
                                            titleEn: "Goods & Services Tax (GST): Unifying Internal Market, Inverted Duty Structures, ITC Frauds & Revenue Trajectory",
                                            chips: ["GST रचना", "इनपुट टॅक्स क्रेडिट", "राज्यांचे महसूल हित"]
                                        },
                                        {
                                            id: "st_g302_02_03",
                                            titleMr: "अर्थसंकल्पाची गुणवत्ता (Quality of Expenditure): महसुली खर्चावरील (अनुदाने, वेतने) नियंत्रण आणि भांडवली खर्चाचा (Infrastructure Capex) मल्टिप्लायर प्रभाव",
                                            titleEn: "Quality of Spending: Revenue Subsidies Containment vs High Multiplier Impact of Infrastructure Capex",
                                            chips: ["भांडवली खर्च मल्टिप्लायर", "अनुदाने तर्कसंगतीकरण", "खर्चाची गुणवत्ता"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय अर्थव्यवस्था - रंजन कोळंबे", standard: "प्रमाणित संदर्भ", chapterRef: "सार्वजनिक वित्त व करप्रणाली" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग ३: शेती, पीक प्रारूप व सिंचन व्यवस्था (Agriculture & Irrigation)
                        // =========================================================================
                        {
                            id: "m_gs3_chap_03",
                            code: "G303",
                            section: "Agriculture & Land Reforms",
                            slug: "major-crop-cropping-patterns-irrigation-systems-and-storage",
                            nameMr: "प्रमुख पिके, पीक प्रारूप, जलसिंचन पद्धती, साठवणूक व वाहतूक",
                            nameEn: "Major Crops, Cropping Patterns, Irrigation Systems, Storage, Transport & Marketing",
                            name: "शेती, पीक प्रारूप व सिंचन व्यवस्था (Cropping Patterns & Irrigation Systems)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 10,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs3_03",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs3_chap_02",
                            nextChapterId: "m_gs3_chap_04",
                            metaDescriptionMr: "भारतातील व महाराष्ट्रातील पीक प्रारूप, ऊस-कापूस पिकांचे अर्थशास्त्र, सूक्ष्म सिंचन (ठिबक/तुषार), जलयुक्त शिवार, सिंचन अनुशेष, आणि वेअरहाऊसिंग.",
                            metaDescriptionEn: "Cropping patterns across regions, sugarcane-cotton economy in MH, micro-irrigation (drip/sprinkler), Jalyukt Shivar, irrigation backlogs, and farm warehousing.",
                            notesJsonPath: "/data/notes/mains_gs3/g303_cropping_irrigation.json",
                            quizTag: "mains_gs3_agri_01",
                            tags: ["Cropping Patterns", "Micro Irrigation Drip", "Sugarcane Water Crisis", "Jalyukt Shivar Maharashtra", "Cold Chain Storage", "e-NAM Agri Markets"],
                            searchKeywords: ["cropping patterns in india and maharashtra", "micro irrigation drip sprinkler benefits", "sugarcane water crisis maharashtra", "jalyukt shivar water conservation", "कृषी पीक प्रारूप", "ठिबक सिंचन", "ऊस शेती जलसंकट", "जलयुक्त शिवार"],
                            topics: [
                                {
                                    id: "top_g303_01",
                                    nameMr: "पीक प्रारूप, हवामान बदल व महाराष्ट्रातील पीक पद्धती",
                                    nameEn: "Cropping Pattern Dynamics & Climate-Resilient Agriculture in MH",
                                    subtopics: [
                                        {
                                            id: "st_g303_01_01",
                                            titleMr: "पीक प्रारूप निश्चितीचे घटक: भूपृष्ठ, पर्जन्यमान, सरकारी धोरणे (MSP), बाजारातील मागणी, आणि भरड धान्यांची (Millets/श्रीअन्न) वाढती गरज",
                                            titleEn: "Drivers of Cropping Patterns: Agro-Climatic Zones, MSP Distortions, Shift to Millets (Shree Anna) & Market Forces",
                                            chips: ["पीक प्रारूप घटक", "MSP चा प्रभाव", "श्रीअन्न (भरड धान्ये)"]
                                        },
                                        {
                                            id: "st_g303_01_02",
                                            titleMr: "महाराष्ट्रातील पीक पद्धतीतील आव्हाने: पश्चिम महाराष्ट्रातील अतिरिक्त पाणी खाणारे ऊस पीक विरुद्ध मराठवाडा-विदर्भातील कोरडवाहू कापूस-सोयाबीन पट्टा",
                                            titleEn: "Maharashtra Cropping Paradox: Water-Guzzling Sugarcane Monoculture vs Rainfed Cotton-Soybean Distress",
                                            chips: ["ऊस शेती जल असमतोल", "कोरडवाहू शेती", "कापूस-सोयाबीन संकट"]
                                        }
                                    ],
                                    sources: [
                                        { book: "महाराष्ट्र व भारताचा भूगोल - ए. बी. सवदी", standard: "प्रमाणित संदर्भ", chapterRef: "महाराष्ट्रातील शेती व पीक प्रारूप" }
                                    ]
                                },
                                {
                                    id: "top_g303_02",
                                    nameMr: "जलसिंचन पद्धती, जलसंधारण व काढणीपश्चात पायाभूत सुविधा",
                                    nameEn: "Irrigation Technologies, Watershed Management & Post-Harvest Infra",
                                    subtopics: [
                                        {
                                            id: "st_g303_02_01",
                                            titleMr: "सिंचन व्यवस्था: कालवे, विहिरी, कूपनलिका; सूक्ष्म सिंचन (ठिबक व तुषार सिंचन - PMKSY प्रति थेंब अधिक पीक), आणि भूजल अतिउपसा संकट",
                                            titleEn: "Irrigation Matrices: Canal Inefficiencies, Micro-Irrigation (PMKSY Per Drop More Crop) & Groundwater Depletion",
                                            chips: ["सूक्ष्म सिंचन (ठिबक-तुषार)", "प्रति थेंब अधिक पीक", "भूजल पातळी घट"]
                                        },
                                        {
                                            id: "st_g303_02_02",
                                            titleMr: "महाराष्ट्रातील जलसंधारण उपक्रम: जलयुक्त शिवार अभियान (यश व त्रुटी), पाझर तलाव, गाळमुक्त धरण-गाळयुक्त शिवार, आणि सिंचन अनुशेष",
                                            titleEn: "Water Conservation in MH: Jalyukt Shivar (Critique & Impact), Check Dams, Silt Removal Drives & Irrigation Backlogs",
                                            chips: ["जलयुक्त शिवार अभियान", "जलसंधारण प्रकल्प", "सिंचन अनुशेष"]
                                        },
                                        {
                                            id: "st_g303_02_03",
                                            titleMr: "काढणीपश्चात व्यवस्थापन व कृषी पणन: साठवणूक गोदामे (Warehousing), शीतगृह साखळी (Cold Chain), e-NAM राष्ट्रीय कृषी बाजार, आणि APMC सुधारणा",
                                            titleEn: "Post-Harvest Supply Chain: Warehousing Deficits, Cold Chains, Electronic National Agri Market (e-NAM) & APMC Reforms",
                                            chips: ["शीतगृह साखळी (Cold Chain)", "e-NAM कृषी बाजार", "APMC सुधारणा"]
                                        }
                                    ],
                                    sources: [
                                        { book: "कृषी अर्थशास्त्र - दाते व इतर", standard: "प्रमाणित संदर्भ", chapterRef: "सिंचन, साठवणूक व कृषी पणन" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग ४: कृषी अनुदाने, MSP, सार्वजनिक वितरण प्रणाली (PDS) व अन्नसुरक्षा
                        // =========================================================================
                        {
                            id: "m_gs3_chap_04",
                            code: "G304",
                            section: "Farm Subsidies & Food Security",
                            slug: "farm-subsidies-msp-public-distribution-system-pds-and-food-security",
                            nameMr: "कृषी अनुदाने, किमान आधारभूत किंमत (MSP), सार्वजनिक वितरण प्रणाली (PDS) व अन्नसुरक्षा",
                            nameEn: "Farm Subsidies, Minimum Support Prices (MSP), Public Distribution System (PDS) & Food Security",
                            name: "कृषी अनुदाने, MSP व अन्नसुरक्षा (Farm Subsidies, MSP & Food Security)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 10,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs3_04",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs3_chap_03",
                            nextChapterId: "m_gs3_chap_05",
                            metaDescriptionMr: "प्रत्यक्ष vs अप्रत्यक्ष अनुदाने (खत, वीज, पाणी), MSP ची कायदेशीर हमी मागणी, स्वामीनाथन आयोग (C2+50% सूत्र), PDS मधील गळती, आणि NFSA 2013.",
                            metaDescriptionEn: "Direct vs Indirect subsidies (fertilisers, power, water), Legal MSP demand, Swaminathan Commission (C2+50%), PDS leakages, DBT, and NFSA 2013.",
                            notesJsonPath: "/data/notes/mains_gs3/g304_subsidies_pds.json",
                            quizTag: "mains_gs3_msp_01",
                            tags: ["Farm Subsidies", "Legal MSP Demand", "Swaminathan Formula C2", "PDS Reforms Shanta Kumar", "Food Security Act NFSA", "Fertiliser Subsidy Urea"],
                            searchKeywords: ["farm subsidies direct vs indirect", "legal guarantee for msp debate", "swaminathan formula c2 plus 50", "pds reforms shanta kumar committee", "national food security act nfsa 2013", "कृषी अनुदाने", "किमान आधारभूत किंमत MSP", "स्वामीनाथन आयोग", "PDS सुधारणा", "अन्नसुरक्षा कायदा"],
                            topics: [
                                {
                                    id: "top_g304_01",
                                    nameMr: "कृषी अनुदाने, युरिया संकट व किमान आधारभूत किंमत (MSP)",
                                    nameEn: "Agricultural Subsidies, Nutrient Balancing & MSP Legal Mandate",
                                    subtopics: [
                                        {
                                            id: "st_g304_01_01",
                                            titleMr: "कृषी अनुदाने: खत अनुदान (युरियाचा अतिवापर, पोषण आधारित अनुदान - NBS), वीज व पाणी अनुदानांचे आर्थिक-पर्यावरणीय दुष्परिणाम, आणि PM-KISAN थेट लाभ",
                                            titleEn: "Farm Subsidies: Fertiliser (Urea Imbalances, NBS Regime), Free Power/Water Depletion & PM-KISAN Direct Transfers",
                                            chips: ["खत अनुदान (NBS)", "मोफत वीज-पाणी दुष्परिणाम", "PM-KISAN थेट बँक हस्तांतरण"]
                                        },
                                        {
                                            id: "st_g304_01_02",
                                            titleMr: "किमान आधारभूत किंमत (MSP): CACP ची गणना पद्धत (A2, A2+FL, C2), स्वामीनाथन आयोगाचे C2+50% सूत्र, खरेदीतील प्रादेशिक असमतोल, आणि कायदेशीर हमीची मागणी",
                                            titleEn: "MSP Architecture: CACP Cost Metrics (A2+FL vs C2), Swaminathan C2+50% Mandate, Procurement Skew & Legalisation Demand",
                                            chips: ["किमान आधारभूत किंमत (MSP)", "स्वामीनाथन आयोग (C2+50%)", "कायदेशीर हमी वाद", "CACP"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय अर्थव्यवस्था - रंजन कोळंबे", standard: "प्रमाणित संदर्भ", chapterRef: "भारतीय शेती व किंमत धोरण" }
                                    ]
                                },
                                {
                                    id: "top_g304_02",
                                    nameMr: "सार्वजनिक वितरण प्रणाली (PDS), शांताकुमार समिती व अन्नसुरक्षा",
                                    nameEn: "Public Distribution System (PDS), Shanta Kumar Panel & NFSA",
                                    subtopics: [
                                        {
                                            id: "st_g304_02_01",
                                            titleMr: "सार्वजनिक वितरण प्रणाली (PDS): उद्दिष्टे, त्रुटी (गळती, बोगस रेशन कार्ड, उच्च साठवणूक खर्च), शांताकुमार समिती शिफारसी (FCI पुनर्रचना), आणि 'वन नेशन वन रेशन कार्ड'",
                                            titleEn: "PDS Framework: Objectives, Leakages, Shanta Kumar Committee (FCI Restructuring), and One Nation One Ration Card (ONORC)",
                                            chips: ["सार्वजनिक वितरण प्रणाली (PDS)", "शांताकुमार समिती", "FCI पुनर्रचना", "वन नेशन वन रेशन कार्ड"]
                                        },
                                        {
                                            id: "st_g304_02_02",
                                            titleMr: "राष्ट्रीय अन्नसुरक्षा कायदा २०१३ (NFSA): ७५% ग्रामीण व ५०% शहरी लोकसंख्येला हक्क, अंत्योदय अन्न योजना, पोषण सुरक्षा, आणि अन्नधान्य बफर स्टॉक व्यवस्थापन",
                                            titleEn: "National Food Security Act 2013: Coverage (75% Rural, 50% Urban), Antyodaya Anna, Nutritional Shift & Buffer Stock Norms",
                                            chips: ["अन्नसुरक्षा कायदा २०१३", "अंत्योदय योजना", "बफर स्टॉक व्यवस्थापन", "पोषण सुरक्षा"]
                                        }
                                    ],
                                    sources: [
                                        { book: "NITI Aayog Policy Papers on Food Security", standard: "शासकीय धोरण", chapterRef: "PDS Modernization & Nutritional Security" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग ५: अन्न प्रक्रिया उद्योग व पुरवठा साखळी (Food Processing & Supply Chain)
                        // =========================================================================
                        {
                            id: "m_gs3_chap_05",
                            code: "G305",
                            section: "Food Processing Industry",
                            slug: "food-processing-and-related-industries-scope-significance-and-supply-chain",
                            nameMr: "अन्न प्रक्रिया उद्योग: व्याप्ती, महत्त्व, स्थान, अपस्ट्रीम-डाउनस्ट्रीम गरजा व पुरवठा साखळी",
                            nameEn: "Food Processing & Related Industries: Scope, Significance, Location, Upstream/Downstream & Supply Chain",
                            name: "अन्न प्रक्रिया उद्योग व पुरवठा साखळी (Food Processing & Supply Chain)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 8,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs3_05",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs3_chap_04",
                            nextChapterId: "m_gs3_chap_06",
                            metaDescriptionMr: "अन्न प्रक्रिया उद्योगाची क्षमता, शेतीमालाची नासाडी रोखणे, पीएम किसान संपदा योजना, मेगा फूड पार्क, अपस्ट्रीम-डाउनस्ट्रीम साखळी, आणि महाराष्ट्रातील फळप्रक्रिया.",
                            metaDescriptionEn: "Sunrise food processing sector, reducing wastage, PM Kisan SAMPADA Yojana, Mega Food Parks, Upstream-Downstream linkages, and Maharashtra fruit clusters.",
                            notesJsonPath: "/data/notes/mains_gs3/g305_food_processing.json",
                            quizTag: "mains_gs3_food_proc_01",
                            tags: ["Food Processing Industry", "Mega Food Parks", "PM Kisan SAMPADA", "Upstream Downstream", "Supply Chain Bottlenecks", "Maharashtra Horticulture"],
                            searchKeywords: ["food processing industry scope", "mega food park scheme", "upstream downstream linkages", "pm kisan sampada yojana", "supply chain management agriculture", "अन्न प्रक्रिया उद्योग", "मेगा फूड पार्क", "पीएम किसान संपदा", "पुरवठा साखळी"],
                            topics: [
                                {
                                    id: "top_g305_01",
                                    nameMr: "अन्न प्रक्रिया उद्योगाची व्याप्ती, महत्त्व व सरकारी योजना",
                                    nameEn: "Food Processing Scope, Mega Food Parks & Central Schemes",
                                    subtopics: [
                                        {
                                            id: "st_g305_01_01",
                                            titleMr: "अन्न प्रक्रिया उद्योगाचे महत्त्व: सनराईज सेक्टर (Sunrise Sector), शेतीमालाचे मूल्यवर्धन, शेतमालाची नासाडी (Post-Harvest Losses) रोखणे आणि ग्रामीण रोजगार निर्मिती",
                                            titleEn: "Sunrise Sector Potential: Value Addition, Slashing Post-Harvest Losses & Fueling Rural Non-Farm Jobs",
                                            chips: ["मूल्यवर्धन", "नासाडी रोखणे", "ग्रामीण रोजगार"]
                                        },
                                        {
                                            id: "st_g305_01_02",
                                            titleMr: "शासकीय उपक्रम: प्रधानमंत्री किसान संपदा योजना (PMKSY), मेगा फूड पार्क (Mega Food Parks), शीतगृह पायाभूत सुविधा, आणि 'ऑपरेशन ग्रीन्स' (TOP ते TOTAL पिके)",
                                            titleEn: "Government Catalysts: PM Kisan SAMPADA, Mega Food Park Frameworks, Cold Chain Grants & Operation Greens",
                                            chips: ["पीएम किसान संपदा योजना", "मेगा फूड पार्क", "ऑपरेशन ग्रीन्स"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Ministry of Food Processing Industries (MoFPI) Reports", standard: "शासकीय अहवाल", chapterRef: "Annual Report on Food Processing Sector" }
                                    ]
                                },
                                {
                                    id: "top_g305_02",
                                    nameMr: "पुरवठा साखळी व्यवस्थापन व महाराष्ट्रातील फलोत्पादन प्रक्रिया",
                                    nameEn: "Supply Chain Linkages & Maharashtra's Horticulture Clusters",
                                    subtopics: [
                                        {
                                            id: "st_g305_02_01",
                                            titleMr: "अपस्ट्रीम (Upstream) व डाउनस्ट्रीम (Downstream) दुवे: शेतापासून प्रक्रिया केंद्रापर्यंत कच्चा माल पुरवठा विरुद्ध प्रक्रियेनंतर ग्राहकांपर्यंत वितरण साखळी",
                                            titleEn: "Supply Chain Linkages: Upstream (Farm to Factory Logistics) & Downstream (Factory to Retail Reach)",
                                            chips: ["अपस्ट्रीम दुवे", "डाउनस्ट्रीम वितरण", "पुरवठा साखळी अडथळे"]
                                        },
                                        {
                                            id: "st_g305_02_02",
                                            titleMr: "महाराष्ट्रातील फलोत्पादन प्रक्रिया क्लस्टर्स: नाशिकची द्राक्ष व वाईनरी इंडस्ट्री, कोकणातील हापूस आंबा व काजू प्रक्रिया, जळगावची केळी प्रक्रिया, आणि सोलापूरची डाळिंब उत्पादने",
                                            titleEn: "Maharashtra Agro-Processing Hubs: Nashik Wine/Grape Belt, Konkan Alphonso/Cashew, Jalgaon Banana & Solapur Pomegranate",
                                            chips: ["नाशिक वाईनरी क्लस्टर", "कोकण हापूस प्रक्रिया", "जळगाव केळी क्लस्टर", "सोलापूर डाळिंब"]
                                        }
                                    ],
                                    sources: [
                                        { book: "महाराष्ट्र आर्थिक पाहणी अहवाल", standard: "शासकीय अहवाल", chapterRef: "कृषी प्रक्रिया व फलोत्पादन विकास" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग ६: विज्ञान व तंत्रज्ञान, स्वदेशीकरण व दैनंदिन उपयोजन (Science & Technology)
                        // =========================================================================
                        {
                            id: "m_gs3_chap_06",
                            code: "G306",
                            section: "Science & Technology",
                            slug: "science-and-technology-developments-indigenisation-and-everyday-life",
                            nameMr: "विज्ञान व तंत्रज्ञान: घडामोडी, तंत्रज्ञानाचे स्वदेशीकरण व नवीन तंत्रज्ञान विकास",
                            nameEn: "Science & Technology: Developments, Applications in Everyday Life & Indigenisation of Technology",
                            name: "विज्ञान व तंत्रज्ञान: स्वदेशीकरण व विकास (Science, Tech & Indigenisation)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 12,
                            isMaharashtraReference: false,
                            trackingKey: "progress_m_gs3_06",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs3_chap_05",
                            nextChapterId: "m_gs3_chap_07",
                            metaDescriptionMr: "इस्रोच्या अंतराळ मोहिमा (चंद्रयान-३, गगनयान, आदित्य-L1), संरक्षण तंत्रज्ञान (DRDO, क्षेपणास्त्रे), क्वांटम कॉम्प्युटिंग, सेमीकंडक्टर मिशन, आणि स्वदेशी तंत्रज्ञान.",
                            metaDescriptionEn: "ISRO space missions (Chandrayaan-3, Gaganyaan, Aditya-L1), Defense R&D (DRDO missiles), Quantum Computing, Semiconductor Mission, and Technology Indigenisation.",
                            notesJsonPath: "/data/notes/mains_gs3/g306_science_technology.json",
                            quizTag: "mains_gs3_scitech_01",
                            tags: ["Science and Technology", "ISRO Missions Gaganyaan", "Defense Indigenisation DRDO", "Quantum Computing Mission", "Semiconductor India", "Pre-Cum-Mains"],
                            searchKeywords: ["science and technology mains", "indigenisation of technology india", "isro missions chandrayaan gaganyaan", "quantum mission semiconductor mission", "drdo missile systems", "विज्ञान व तंत्रज्ञान", "तंत्रज्ञानाचे स्वदेशीकरण", "इस्रो अंतराळ मोहिमा", "क्वांटम कॉम्प्युटिंग"],
                            topics: [
                                {
                                    id: "top_g306_01",
                                    nameMr: "अंतराळ तंत्रज्ञान, इस्रोच्या मोहिमा व अवकाश अर्थव्यवस्था",
                                    nameEn: "Space Technology, ISRO Milestones & Space Economy (IN-SPACe)",
                                    subtopics: [
                                        {
                                            id: "st_g306_01_01",
                                            titleMr: "प्रक्षेपक वाहने व मोहिमा: PSLV, GSLV Mk-III (LVM3); ऐतिहासिक चंद्रयान-३ (चंद्राच्या दक्षिण ध्रुवावर लँडिंग), आदित्य-L1 सौर मोहीम, आणि गगनयान (मानवयुक्त अंतराळ मोहीम)",
                                            titleEn: "Launch Systems & Explorations: LVM3, Historic Chandrayaan-3 Moon Landing, Aditya-L1 Solar Mission & Gaganyaan Flight",
                                            chips: ["LVM3 रॉकेट", "चंद्रयान-३ दक्षिण ध्रुव", "आदित्य-L1", "गगनयान मोहीम"]
                                        },
                                        {
                                            id: "st_g306_01_02",
                                            titleMr: "अवकाश क्षेत्राचे खाजगीकरण: भारतीय अंतराळ धोरण २०२३, IN-SPACe प्राधिकरण, न्यूस्पेस इंडिया (NSIL), आणि खाजगी अंतराळ स्टार्टअप्सची वाढ",
                                            titleEn: "Commercialising Space: Indian Space Policy 2023, IN-SPACe Regulatory Arm, NSIL & Space Startups Rise",
                                            chips: ["IN-SPACe", "अंतराळ खाजगीकरण", "न्यूस्पेस इंडिया (NSIL)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "ISRO अधिकृत वार्षिक अहवाल", standard: "शासकीय दस्तऐवज", chapterRef: "Space Transportation and Explorations" }
                                    ]
                                },
                                {
                                    id: "top_g306_02",
                                    nameMr: "संरक्षण तंत्रज्ञान स्वदेशीकरण व प्रगत तंत्रज्ञान मिशन्स",
                                    nameEn: "Defense Indigenisation, Quantum Missions & Semiconductors",
                                    subtopics: [
                                        {
                                            id: "st_g306_02_01",
                                            titleMr: "संरक्षण क्षेत्रातील स्वदेशीकरण: डीआरडीओचे (DRDO) योगदान, एकात्मिक क्षेपणास्त्र विकास कार्यक्रम (अग्नी, पृथ्वी, आकाश, ब्रह्मोस), आयएनएस विक्रांत (स्वदेशी विमानवाहू नौका)",
                                            titleEn: "Defense Indigenisation: DRDO Programs, Missile Spectrum (Agni, Prithvi, BrahMos) & INS Vikrant Carrier",
                                            chips: ["संरक्षण स्वदेशीकरण", "क्षेपणास्त्र कार्यक्रम", "आयएनएस विक्रांत", "DRDO"]
                                        },
                                        {
                                            id: "st_g306_02_02",
                                            titleMr: "नवीन तंत्रज्ञान क्रांती: राष्ट्रीय क्वांटम मिशन (National Quantum Mission), भारत सेमीकंडक्टर मिशन (India Semiconductor Mission), सुपरकॉम्प्युटिंग मिशन, आणि ६G धोरण",
                                            titleEn: "Deep Tech Frontiers: National Quantum Mission, Semiconductor Fab Ecosystem, Supercomputing & 6G Vision",
                                            chips: ["क्वांटम मिशन", "सेमीकंडक्टर मिशन", "सुपरकॉम्प्युटिंग"]
                                        }
                                    ],
                                    sources: [
                                        { book: "विज्ञान व तंत्रज्ञान - सचिन भस्के", standard: "प्रमाणित संदर्भ", chapterRef: "संरक्षण, अवकाश व नवीन तंत्रज्ञान" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग ७: आयटी, जैवतंत्रज्ञान, नॅनो-तंत्रज्ञान व बौद्धिक संपदा (IT & IPR)
                        // =========================================================================
                        {
                            id: "m_gs3_chap_07",
                            code: "G307",
                            section: "IT, Biotech & IPR",
                            slug: "it-computers-robotics-nanotechnology-biotechnology-and-ipr",
                            nameMr: "आयटी, रोबोटिक्स, नॅनो-तंत्रज्ञान, जैवतंत्रज्ञान व बौद्धिक संपदा अधिकार (IPR)",
                            nameEn: "Awareness in IT, Space, Computers, Robotics, Nanotech, Biotech & Issues Relating to IPR",
                            name: "आयटी, जैवतंत्रज्ञान व बौद्धिक संपदा (IT, Biotech, Nanotech & IPR)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 10,
                            isMaharashtraReference: false,
                            trackingKey: "progress_m_gs3_07",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs3_chap_06",
                            nextChapterId: "m_gs3_chap_08",
                            metaDescriptionMr: "कृत्रिम बुद्धिमत्ता (AI) व ब्लॉकचेन, जनुक संपादन (CRISPR-Cas9), GM पिके वाद, नॅनो-औषधे, पेटंट कायदे, आणि बौद्धिक संपदा अधिकार (कलम ३(d) भारतीय पेटंट कायदा).",
                            metaDescriptionEn: "Artificial Intelligence, Blockchain, Gene Editing (CRISPR-Cas9), GM Crops debate, Nanomedicine, TRIPS compliance, and Section 3(d) of Indian Patents Act.",
                            notesJsonPath: "/data/notes/mains_gs3/g307_it_biotech_ipr.json",
                            quizTag: "mains_gs3_biotech_01",
                            tags: ["Artificial Intelligence AI", "CRISPR Cas9 Gene Editing", "GM Crops Bt Cotton Mustard", "Nanotechnology Applications", "IPR Patent Act Section 3d", "TRIPS WTO"],
                            searchKeywords: ["crispr cas9 gene editing applications", "gm crops debate in india", "intellectual property rights ipr mains", "section 3d indian patent act", "artificial intelligence ethics", "जनुक संपादन CRISPR", "GM पिके वाद", "बौद्धिक संपदा अधिकार IPR", "पेटंट कायदा कलम ३(d)"],
                            topics: [
                                {
                                    id: "top_g307_01",
                                    nameMr: "जैवतंत्रज्ञान, जनुक संपादन व नॅनो-तंत्रज्ञान उपयोजन",
                                    nameEn: "Biotechnology Breakthroughs, Gene Editing & Nanotech",
                                    subtopics: [
                                        {
                                            id: "st_g307_01_01",
                                            titleMr: "जैवतंत्रज्ञान व आरोग्य: रिकॉम्बिनंट डीएनए तंत्रज्ञान, स्टेम सेल थेरपी (Stem Cells), आणि CRISPR-Cas9 जनुक संपादन तंत्रज्ञानाचे वैद्यकीय व कृषी क्षेत्रातील फायदे",
                                            titleEn: "Biotech & Medicine: Recombinant DNA, Stem Cell Therapies & CRISPR-Cas9 Gene Editing Potential",
                                            chips: ["CRISPR-Cas9 जनुक संपादन", "स्टेम सेल थेरपी", "रिकॉम्बिनंट डीएनए"]
                                        },
                                        {
                                            id: "st_g307_01_02",
                                            titleMr: "जनुकीय सुधारित पिके (GM Crops): बीटी कापूस, बीटी वांगी, आणि GM मोहरी (DMH-11); अन्नसुरक्षा विरुद्ध पर्यावरणीय जैवविविधता हानी वाद",
                                            titleEn: "Genetically Modified (GM) Crops: Bt Cotton, Bt Brinjal & GM Mustard (DMH-11) Environmental Conflicts",
                                            chips: ["GM पिके (DMH-11 मोहरी)", "बीटी कापूस", "GEAC नियामक मंडळ"]
                                        },
                                        {
                                            id: "st_g307_01_03",
                                            titleMr: "नॅनो-तंत्रज्ञान (Nanotechnology): नॅनो-कणांचे गुणधर्म, वैद्यकीय उपयोजन (लक्षित औषध वितरण - Targeted Drug Delivery), आणि शेतीमध्ये नॅनो-युरियाचा वापर",
                                            titleEn: "Nanotech Horizons: Unique Nanoscale Properties, Targeted Drug Delivery in Oncology & Nano-Urea in Farming",
                                            chips: ["नॅनो-तंत्रज्ञान", "लक्षित औषध वितरण", "नॅनो-युरिया"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Department of Biotechnology (DBT) Guidelines", standard: "शासकीय दस्तऐवज", chapterRef: "Bio-Safety & Genetic Engineering Guidelines" }
                                    ]
                                },
                                {
                                    id: "top_g307_02",
                                    nameMr: "आयटी, कृत्रिम बुद्धिमत्ता व बौद्धिक संपदा अधिकार (IPR)",
                                    nameEn: "IT Frontiers, AI Governance & Intellectual Property Rights",
                                    subtopics: [
                                        {
                                            id: "st_g307_02_01",
                                            titleMr: "माहिती तंत्रज्ञान व AI: कृत्रिम बुद्धिमत्ता (Generative AI), ब्लॉकचेन तंत्रज्ञान (सुरक्षित व्यवहार व जमिनीच्या नोंदी), इंटरनेट ऑफ थिंग्ज (IoT), आणि सायबर सुरक्षा",
                                            titleEn: "IT Frontiers: Generative AI Ethics, Blockchain in Land Governance, IoT & Cloud Computing Frameworks",
                                            chips: ["कृत्रिम बुद्धिमत्ता (AI)", "ब्लॉकचेन तंत्रज्ञान", "इंटरनेट ऑफ थिंग्ज (IoT)"]
                                        },
                                        {
                                            id: "st_g307_02_02",
                                            titleMr: "बौद्धिक संपदा अधिकार (IPR): पेटंट, कॉपीराइट, ट्रेडमार्क, भौगोलिक मानांकने (GI Tags - महाराष्ट्रातील उत्पादने); TRIPS करार, आणि कलम ३(d) मधील एव्हरग्रीनिंग बंदी",
                                            titleEn: "IPR Architecture: Patents, Trademarks, Geographical Indications (GI Tags in MH), TRIPS Accord & Section 3(d) Anti-Evergreening",
                                            chips: ["बौद्धिक संपदा अधिकार (IPR)", "भौगोलिक मानांकने (GI Tags)", "पेटंट कायदा कलम ३(d)", "एव्हरग्रीनिंग बंदी"]
                                        }
                                    ],
                                    sources: [
                                        { book: "National IPR Policy of India", standard: "शासकीय धोरण", chapterRef: "Creative India; Innovative India" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग ८: पर्यावरण संवर्धन, प्रदूषण व पर्यावरणीय प्रभाव मूल्यांकन (EIA)
                        // =========================================================================
                        {
                            id: "m_gs3_chap_08",
                            code: "G308",
                            section: "Environment & Conservation",
                            slug: "conservation-environmental-pollution-degradation-and-eia",
                            nameMr: "पर्यावरण संवर्धन, प्रदूषण नियंत्रण, हवामान बदल व पर्यावरणीय प्रभाव मूल्यांकन (EIA)",
                            nameEn: "Conservation, Environmental Pollution and Degradation, Environmental Impact Assessment (EIA)",
                            name: "पर्यावरण संवर्धन, प्रदूषण व EIA (Environment, Pollution & EIA)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 10,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs3_08",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs3_chap_07",
                            nextChapterId: "m_gs3_chap_09",
                            metaDescriptionMr: "हवा-जल प्रदूषण (AQI मानके), घनकचरा व ई-कचरा व्यवस्थापन, प्लास्टिक बंदी, COP28-29 हवामान परिषदा, भारताचे पंचामृत व नेट झिरो २०७०, आणि EIA प्रक्रिया.",
                            metaDescriptionEn: "Air/Water pollution norms, solid/E-waste management rules, single-use plastic ban, COP climate summits, India's Panchamrit targets, and Environmental Impact Assessment (EIA).",
                            notesJsonPath: "/data/notes/mains_gs3/g308_environment_eia.json",
                            quizTag: "mains_gs3_env_01",
                            tags: ["Environmental Conservation", "Air Quality Index AQI", "Solid Waste Management", "Net Zero 2070 Panchamrit", "EIA Process", "Western Ghats ESA"],
                            searchKeywords: ["environmental impact assessment eia mains", "air and water pollution control cpcb", "net zero 2070 panchamrit goals", "solid waste management rules", "western ghats ecological sensitive area", "पर्यावरणीय प्रभाव मूल्यांकन EIA", "हवा प्रदूषण नियंत्रण", "नेट झिरो २०७०", "पश्चिम घाट संवर्धन"],
                            topics: [
                                {
                                    id: "top_g308_01",
                                    nameMr: "प्रदूषण नियंत्रण, घनकचरा व्यवस्थापन व हवामान बदल उद्दिष्टे",
                                    nameEn: "Pollution Abatement, Waste Rules & Panchamrit Climate Goals",
                                    subtopics: [
                                        {
                                            id: "st_g308_01_01",
                                            titleMr: "प्रदूषण प्रकार व नियंत्रण: वायू प्रदूषण (NCAP - राष्ट्रीय स्वच्छ हवा कार्यक्रम), जलप्रदूषण (नद्यांचे प्रदूषण व सांडपाणी प्रक्रिया), आणि प्लास्टिक कचरा नियम (EPR जबाबदारी)",
                                            titleEn: "Pollution Frontiers: NCAP Clean Air Target, Industrial Effluent Treatment & Plastic Waste Rules (EPR Extended Liability)",
                                            chips: ["NCAP स्वच्छ हवा कार्यक्रम", "सांडपाणी प्रक्रिया (STP)", "EPR उत्पादक जबाबदारी"]
                                        },
                                        {
                                            id: "st_g308_01_02",
                                            titleMr: "हवामान बदल परिषदा व भारताचे 'पंचामृत' (Panchamrit): ५०० GW अपारंपरिक ऊर्जा (२०३०), उत्सर्जकतेत ४५% कपात, आणि २०७० पर्यंत नेट झिरो (Net Zero) कार्बन उत्सर्जन ध्येय",
                                            titleEn: "Climate Commitments: India's Panchamrit Targets, 500 GW Non-Fossil Power by 2030, 45% Intensity Cut & Net Zero 2070",
                                            chips: ["पंचामृत उद्दिष्टे", "नेट झिरो २०७०", "५०० GW नवीकरणीय ऊर्जा"]
                                        }
                                    ],
                                    sources: [
                                        { book: "MoEFCC Annual Reports & UNFCCC Submissions", standard: "शासकीय दस्तऐवज", chapterRef: "India's Updated First Nationally Determined Contributions" }
                                    ]
                                },
                                {
                                    id: "top_g308_02",
                                    nameMr: "पर्यावरणीय प्रभाव मूल्यांकन (EIA) व पश्चिम घाट संवर्धन वाद",
                                    nameEn: "Environmental Impact Assessment (EIA) & Western Ghats Debates",
                                    subtopics: [
                                        {
                                            id: "st_g308_02_01",
                                            titleMr: "पर्यावरणीय प्रभाव मूल्यांकन (EIA): उद्दिष्टे, प्रक्रिया (Screening, Scoping, Public Hearing, Appraisal), विकास विरुद्ध पर्यावरण द्वंद्व, आणि जनसुनावणीतील त्रुटी",
                                            titleEn: "EIA Framework: 4 Stages (Screening to Appraisal), Public Consultation Deficits & Post-Facto Clearance Controversies",
                                            chips: ["EIA प्रक्रिया", "जनसुनावणी (Public Hearing)", "विकास vs पर्यावरण"]
                                        },
                                        {
                                            id: "st_g308_02_02",
                                            titleMr: "महाराष्ट्रातील पश्चिम घाट संवर्धन: माधव गाडगीळ अहवाल विरुद्ध डॉ. कस्तुरीरंगन अहवाल; खाणकाम बंदी, पर्यावरणीय संवेदनशील क्षेत्रे (ESA), आणि स्थानिक विकास संघर्ष",
                                            titleEn: "Western Ghats Protection in MH: Gadgil vs Kasturirangan Paradigms, Ecologically Sensitive Areas (ESA) & Local Protests",
                                            chips: ["माधव गाडगीळ अहवाल", "कस्तुरीरंगन समिती", "पश्चिम घाट ESA वाद"]
                                        }
                                    ],
                                    sources: [
                                        { book: "पर्यावरण व परिस्थितीकी - तुषार घोरपडे", standard: "प्रमाणित संदर्भ", chapterRef: "EIA व पश्चिम घाट संवर्धन" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग ९: आपत्ती व्यवस्थापन व लवचिकता (Disaster Management)
                        // =========================================================================
                        {
                            id: "m_gs3_chap_09",
                            code: "G309",
                            section: "Disaster Management",
                            slug: "disaster-management-resilience-ndma-and-disaster-risk-reduction",
                            nameMr: "आपत्ती व्यवस्थापन: संस्थात्मक चौकट, NDMA, शमन उपाय, पूर, चक्रीवादळे व दुष्काळ",
                            nameEn: "Disaster & Disaster Management: NDMA Framework, Mitigation, Floods, Cyclones & Droughts",
                            name: "आपत्ती व्यवस्थापन व जोखीम निवारण (Disaster Management & Risk Reduction)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 8,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs3_09",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs3_chap_08",
                            nextChapterId: "m_gs3_chap_10",
                            metaDescriptionMr: "आपत्ती व्यवस्थापन कायदा २००५, NDMA/SDMA रचना, सेंदाई फ्रेमवर्क (Sendai Framework), पुराचे व्यवस्थापन (शहरी पूर - मुंबई, पुणे), दरडी कोसळणे, आणि दुष्काळ व्यवस्थापन.",
                            metaDescriptionEn: "Disaster Management Act 2005, NDMA/SDMA institutional tiers, Sendai Framework (2015-2030), Urban Flooding (Mumbai/Pune), Landslides (Irshalwadi/Malin), and Droughts.",
                            notesJsonPath: "/data/notes/mains_gs3/g309_disaster_management.json",
                            quizTag: "mains_gs3_dm_01",
                            tags: ["Disaster Management Act 2005", "NDMA Framework", "Sendai Framework DRR", "Urban Floods Mumbai Pune", "Landslides Malin Irshalwadi", "Drought Mitigation"],
                            searchKeywords: ["disaster management act 2005", "sendai framework for disaster risk reduction", "urban flooding in indian cities", "landslide disaster management maharashtra", "आपत्ती व्यवस्थापन कायदा २००५", "सेंदाई फ्रेमवर्क", "शहरी पूर व्यवस्थापन", "दरड कोसळणे माळीण इर्शाळवाडी"],
                            topics: [
                                {
                                    id: "top_g309_01",
                                    nameMr: "आपत्ती व्यवस्थापन चौकट, आपत्ती चक्र व सेंदाई फ्रेमवर्क",
                                    nameEn: "Institutional DM Setup, Disaster Cycle & Sendai Framework",
                                    subtopics: [
                                        {
                                            id: "st_g309_01_01",
                                            titleMr: "आपत्ती व्यवस्थापन कायदा २००५: त्रिस्तरीय रचना (NDMA - पंतप्रधान अध्यक्ष, SDMA - मुख्यमंत्री अध्यक्ष, DDMA - जिल्हाधिकारी अध्यक्ष), आणि NDRF ची भूमिका",
                                            titleEn: "Disaster Management Act 2005: 3-Tier Command (NDMA, SDMA, DDMA headed by Collector) & NDRF Rapid Deployments",
                                            chips: ["आपत्ती कायदा २००५", "NDMA व SDMA रचना", "NDRF आपत्ती दल"]
                                        },
                                        {
                                            id: "st_g309_01_02",
                                            titleMr: "आपत्ती जोखीम निवारण (Disaster Risk Reduction - DRR): आपत्तीपूर्व तयारी व शमन विरुद्ध आपत्तीपश्चात मदत कार्य; सेंदाई फ्रेमवर्क २०१५-२०३० चे ४ प्राधान्यक्रम",
                                            titleEn: "Paradigm Shift to Prevention: Sendai Framework (2015-2030) 4 Priorities & 'Build Back Better' Doctrine",
                                            chips: ["सेंदाई फ्रेमवर्क (Sendai 2015-2030)", "Build Back Better", "आपत्तीपूर्व शमन"]
                                        }
                                    ],
                                    sources: [
                                        { book: "NDMA राष्ट्रीय आपत्ती व्यवस्थापन आराखडा", standard: "शासकीय दस्तऐवज", chapterRef: "National Disaster Management Plan (NDMP)" }
                                    ]
                                },
                                {
                                    id: "top_g309_02",
                                    nameMr: "महाराष्ट्रातील नैसर्गिक आपत्ती: पूर, दरडी व दुष्काळ",
                                    nameEn: "Maharashtra Disaster Vulnerability: Floods, Landslides & Droughts",
                                    subtopics: [
                                        {
                                            id: "st_g309_02_01",
                                            titleMr: "शहरी पूर (Urban Flooding): मुंबई (२६ जुलै २००५ ते सद्यस्थिती) व पुणे पूर; कारणे: मिठी नदीचे अतिक्रमण, वादळी पाण्याचा निचरा यंत्रणा (Storm Water) अपयश, आणि उपाय",
                                            titleEn: "Urban Flooding Pathology: Mumbai & Pune Deluges, Encroached Mithi River, Drainage Choke & Flood Mapping",
                                            chips: ["शहरी पूर (मुंबई, पुणे)", "मिठी नदी अतिक्रमण", "ड्रेनेज यंत्रणा अपयश"]
                                        },
                                        {
                                            id: "st_g309_02_02",
                                            titleMr: "दरडी कोसळणे व दुष्काळ: सह्याद्री पर्वतातील दरड आपत्ती (माळीण गाव, इर्शाळवाडी दुर्घटना - कारणे व प्रतिबंधात्मक उपाय) आणि मराठवाड्यातील तीव्र दुष्काळ व्यवस्थापन",
                                            titleEn: "Landslides & Droughts: Sahyadri Disasters (Malin, Irshalwadi Tragedies), Early Warning Sensors & Drought Mitigation",
                                            chips: ["दरड दुर्घटना (माळीण, इर्शाळवाडी)", "भूस्खलन प्रतिबंध", "दुष्काळ व्यवस्थापन"]
                                        }
                                    ],
                                    sources: [
                                        { book: "आपत्ती व्यवस्थापन - तुषार घोरपडे", standard: "प्रमाणित संदर्भ", chapterRef: "महाराष्ट्रातील आपत्ती व व्यवस्थापन" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग १०: अंतर्गत सुरक्षा, दहशतवाद व नक्षलवाद (Internal Security & Extremism)
                        // =========================================================================
                        {
                            id: "m_gs3_chap_10",
                            code: "G310",
                            section: "Internal Security & Extremism",
                            slug: "linkages-between-development-and-spread-of-extremism-insurgency",
                            nameMr: "विकास व अतिरेकवादाचा संबंध, नक्षलवाद (LWE), ईशान्येतील बंडखोरी व दहशतवाद",
                            nameEn: "Linkages Between Development and Spread of Extremism: Naxalism, Insurgency & Terrorism",
                            name: "अतिरेकवाद, नक्षलवाद व अंतर्गत सुरक्षा (Development & Spread of Extremism)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 10,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs3_10",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs3_chap_09",
                            nextChapterId: "m_gs3_chap_11",
                            metaDescriptionMr: "नक्षलवादाची सामाजिक-आर्थिक कारणे (लाल कॉरिडॉर), गडचिरोली मॉडेल (C-60 फोर्स), ईशान्य भारतातील बंडखोरी व शांतता करार, सीमापार दहशतवाद, आणि SAMADHAN धोरण.",
                            metaDescriptionEn: "Roots of Left Wing Extremism (Red Corridor), Gadchiroli policing model (C-60 commandos), Northeast insurgencies and peace accords, cross-border terror, and SAMADHAN doctrine.",
                            notesJsonPath: "/data/notes/mains_gs3/g310_extremism_security.json",
                            quizTag: "mains_gs3_sec_01",
                            tags: ["Internal Security", "Left Wing Extremism LWE", "Gadchiroli C-60 Police", "Northeast Insurgency Accords", "Cross-Border Terrorism", "SAMADHAN Doctrine"],
                            searchKeywords: ["left wing extremism naxalism causes", "gadchiroli c60 commandos success", "samadhan doctrine mha", "northeast insurgency peace accords", "विकास व अतिरेकवाद संबंध", "नक्षलवाद निर्मूलन", "गडचिरोली सी-६० कमांडो", "ईशान्य बंडखोरी"],
                            topics: [
                                {
                                    id: "top_g310_01",
                                    nameMr: "डाव्यांचा अतिरेकवाद (नक्षलवाद - LWE) व गडचिरोली पॅटर्न",
                                    nameEn: "Left-Wing Extremism (Naxalism) & Gadchiroli Policing Model",
                                    subtopics: [
                                        {
                                            id: "st_g310_01_01",
                                            titleMr: "नक्षलवादाची मुळे: जल, जंगल, जमीन हक्कांवर गदा, विकासाचा अभाव, आदिवासींचे शोषण, लाल कॉरिडॉर (Red Corridor), आणि गृह मंत्रालयाचे 'SAMADHAN' सूत्र",
                                            titleEn: "Roots of Naxalism: Jal-Jungle-Zameen Alienation, Governance Voids, Red Corridor Shrinkage & MHA's SAMADHAN Strategy",
                                            chips: ["नक्षलवाद कारणे", "लाल कॉरिडॉर", "SAMADHAN सूत्र", "आदिवासी अधिकार"]
                                        },
                                        {
                                            id: "st_g310_01_02",
                                            titleMr: "महाराष्ट्रातील नक्षलवाद निर्मूलन मॉडेल: गडचिरोली आणि गोंदिया; नक्षलविरोधी 'C-60' कमांडो पथकाचे यश, आत्मसमर्पण धोरण, आणि आदिवासी विकास कार्यक्रम",
                                            titleEn: "Maharashtra Anti-Naxal Paradigm: Gadchiroli Tactics, C-60 Elite Commandos, Surrender & Rehabilitation Policies",
                                            chips: ["गडचिरोली C-60 कमांडो", "आत्मसमर्पण योजना", "नक्षलवाद निर्मूलन"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारताची अंतर्गत सुरक्षा - अशोक कुमार (IPS)", standard: "प्रमाणित संदर्भ", chapterRef: "प्रकरण २: डाव्यांचा उग्रवाद (नक्षलवाद)" }
                                    ]
                                },
                                {
                                    id: "top_g310_02",
                                    nameMr: "ईशान्येतील बंडखोरी, शांतता करार व दहशतवाद",
                                    nameEn: "Northeast Insurgency, Peace Accords & Cross-Border Terrorism",
                                    subtopics: [
                                        {
                                            id: "st_g310_02_01",
                                            titleMr: "ईशान्य भारत: वांशिक संघर्ष, घुसखोरी, बंडखोर संघटना, AFSPA कायद्याचा आढावा, आणि शांतता करार (उदा. बोडो शांतता करार, नागा शांतता वाटाघाटी)",
                                            titleEn: "Northeast Insurgency: Ethnic Clashes, Infiltration, AFSPA Scaling Down & Historic Accords (Bodo, Naga Talks)",
                                            chips: ["ईशान्य बंडखोरी", "AFSPA कायदा", "बोडो शांतता करार", "नागा वाटाघाटी"]
                                        },
                                        {
                                            id: "st_g310_02_02",
                                            titleMr: "दहशतवाद व हायब्रिड वॉरफेअर (Hybrid Warfare): सीमापार प्रायोजित दहशतवाद, कट्टरतावाद (Radicalisation), आणि गुप्तचर संस्थांचे (IB, RAW, NIA) नेटवर्क",
                                            titleEn: "Terrorism & Hybrid Threats: State-Sponsored Cross-Border Proxy Wars, Youth Radicalisation & Counter-Terror Grid (NIA, IB)",
                                            chips: ["हायब्रिड वॉरफेअर", "कट्टरतावाद रोखणे", "राष्ट्रीय तपास संस्था (NIA)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Challenges to Internal Security of India - Bipin Anekanth", standard: "प्रमाणित संदर्भ", chapterRef: "Insurgency in the North-East & Terrorism" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग ११: सायबर सुरक्षा, सोशल मीडिया व काळा पैसा (Cyber Security & Money Laundering)
                        // =========================================================================
                        {
                            id: "m_gs3_chap_11",
                            code: "G311",
                            section: "Cyber Security & Money Laundering",
                            slug: "cyber-security-social-media-networking-sites-and-money-laundering",
                            nameMr: "सायबर सुरक्षा, सोशल मीडियाचा गैरवापर, मनी लॉन्ड्रिंग व काळा पैसा रोखणे",
                            nameEn: "Cyber Security, Basics of Cyber Warfare, Social Media Misuse & Money Laundering",
                            name: "सायबर सुरक्षा व मनी लॉन्ड्रिंग (Cyber Security & Money Laundering)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 10,
                            isMaharashtraReference: false,
                            trackingKey: "progress_m_gs3_11",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs3_chap_10",
                            nextChapterId: "m_gs3_chap_12",
                            metaDescriptionMr: "सायबर हल्ले (रॅन्समवेअर), गंभीर माहिती पायाभूत सुविधा (CII), CERT-In, सोशल मीडिया व फेक न्यूज, मनी लॉन्ड्रिंग (PMLA), आणि FATF चे निर्बंध.",
                            metaDescriptionEn: "Cyber warfare (Ransomware, Botnets), Critical Information Infrastructure (CII), CERT-In, Social media radicalisation, Money Laundering (PMLA), and FATF grey lists.",
                            notesJsonPath: "/data/notes/mains_gs3/g311_cyber_money_laundering.json",
                            quizTag: "mains_gs3_cyber_01",
                            tags: ["Cyber Security", "Ransomware Attacks", "CERT-In Mandates", "Social Media Misuse", "Money Laundering PMLA", "FATF Grey List", "Cryptocurrency Risks"],
                            searchKeywords: ["cyber security threats india", "cert-in cyber emergency", "money laundering techniques pmla act", "fatf terror financing", "social media and internal security", "सायबर सुरक्षा आव्हाने", "CERT-In", "मनी लॉन्ड्रिंग PMLA", "FATF दहशतवाद वित्तपुरवठा"],
                            topics: [
                                {
                                    id: "top_g307_01_ext",
                                    nameMr: "सायबर सुरक्षा, सायबर युद्ध व संस्थात्मक यंत्रणा",
                                    nameEn: "Cyber Threats, Cyber Warfare & National Security Grids",
                                    subtopics: [
                                        {
                                            id: "st_g311_01_01",
                                            titleMr: "सायबर सुरक्षेचे प्रकार: रॅन्समवेअर हल्ले, डिनायल ऑफ सर्व्हिस (DDoS), स्पायवेअर (पेगासस वाद), आणि महत्त्वाच्या राष्ट्रीय पायाभूत सुविधांवर (CII - उदा. पॉवर ग्रिड) सायबर हल्ले",
                                            titleEn: "Cyber Attack Spectrum: Ransomware, Zero-Day Exploits, Pegasus Spyware & Attacks on Critical Info Infrastructure (Power Grids)",
                                            chips: ["सायबर हल्ले", "रॅन्समवेअर", "क्रिटिकल इन्फ्रास्ट्रक्चर (CII)"]
                                        },
                                        {
                                            id: "st_g311_01_02",
                                            titleMr: "भारताची सायबर संरक्षण चौकट: राष्ट्रीय सायबर सुरक्षा धोरण, CERT-In (Computer Emergency Response Team), NCIIPC, आणि डेटा संरक्षण कायदा (DPDP 2023)",
                                            titleEn: "India's Cyber Defense Grid: CERT-In Reporting Norms, NCIIPC Protection & Digital Personal Data Protection (DPDP Act 2023)",
                                            chips: ["CERT-In", "NCIIPC", "डेटा संरक्षण कायदा DPDP 2023"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारताची अंतर्गत सुरक्षा - अशोक कुमार (IPS)", standard: "प्रमाणित संदर्भ", chapterRef: "सायबर सुरक्षा व सायबर युद्ध" }
                                    ]
                                },
                                {
                                    id: "top_g311_02",
                                    nameMr: "सोशल मीडियाचा गैरवापर, मनी लॉन्ड्रिंग व FATF",
                                    nameEn: "Social Media Vectors, Money Laundering & FATF Standards",
                                    subtopics: [
                                        {
                                            id: "st_g311_02_01",
                                            titleMr: "सोशल मीडिया व अंतर्गत सुरक्षा: फेक न्यूज (Fake News), डीपफेक, जमावहिंसा (Mob Lynching), अफवा पसरवणे, आणि आयटी नियम २०२१ (Intermediary Guidelines)",
                                            titleEn: "Social Media Weaponisation: Deepfakes, Misinformation Mobs, Digital Radicalisation & IT Rules 2021 Intermediary Norms",
                                            chips: ["फेक न्यूज व डीपफेक", "सोशल मीडिया गैरवापर", "आयटी नियम २०२१"]
                                        },
                                        {
                                            id: "st_g311_02_02",
                                            titleMr: "मनी लॉन्ड्रिंग (काळा पैसा पांढरा करणे): ३ टप्पे (Placement, Layering, Integration), हवाला रॅकेट, शेल कंपन्या, क्रिप्टो करन्सी धोके, आणि PMLA कायदा २००२",
                                            titleEn: "Money Laundering Dynamics: Placement, Layering, Integration, Hawala, Shell Firms, Crypto Channels & PMLA 2002 Powers",
                                            chips: ["मनी लॉन्ड्रिंग (३ टप्पे)", "हवाला मार्ग", "PMLA कायदा २००२", "क्रिप्टो करन्सी"]
                                        },
                                        {
                                            id: "st_g311_02_03",
                                            titleMr: "फायनान्शियल ॲक्शन टास्क फोर्स (FATF): उद्दिष्टे, काळी यादी (Black List) व राखाडी यादी (Grey List), आणि दहशतवादाला होणारा वित्तपुरवठा (Terror Financing) रोखणे",
                                            titleEn: "Financial Action Task Force (FATF): Grey/Black Listing Norms, Combating Terror Financing & Offshore Havens",
                                            chips: ["FATF टास्क फोर्स", "ग्रे लिस्ट व ब्लॅक लिस्ट", "दहशतवाद वित्तपुरवठा बंदी"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Enforcement Directorate (ED) Overview", standard: "शासकीय दस्तऐवज", chapterRef: "Prevention of Money Laundering Act Manual" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग १२: सीमा व्यवस्थापन व सुरक्षा दले (Border Security & Security Forces)
                        // =========================================================================
                        {
                            id: "m_gs3_chap_12",
                            code: "G312",
                            section: "Border Security & Defense Forces",
                            slug: "security-challenges-and-their-management-in-border-areas-mandate-of-security-forces",
                            nameMr: "सीमावर्ती भागातील सुरक्षा आव्हाने, सीमा व्यवस्थापन, सुरक्षा दले व त्यांचे अधिकार",
                            nameEn: "Security Challenges & Their Management in Border Areas; Mandate of Various Security Forces",
                            name: "सीमा व्यवस्थापन व सुरक्षा दले (Border Management & Security Forces)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 12,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs3_12",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs3_chap_11",
                            nextChapterId: null,
                            metaDescriptionMr: "सुवर्ण त्रिकोण (Golden Triangle) व सुवर्ण चंद्रकोर (Golden Crescent) अमली पदार्थ तस्करी, स्मार्ट बॉर्डर कुंपण (CIBMS), सागरी सुरक्षा, CAPF दलांचे कार्यक्षेत्र, आणि CDS पद.",
                            metaDescriptionEn: "Golden Triangle & Crescent drug trafficking, Comprehensive Integrated Border Management (CIBMS), Coastal security grid, Central Armed Police Forces (CAPF), and Chief of Defence Staff (CDS).",
                            notesJsonPath: "/data/notes/mains_gs3/g312_border_security.json",
                            quizTag: "mains_gs3_border_01",
                            tags: ["Border Management", "Golden Crescent Triangle", "Smart Fencing CIBMS", "Coastal Security Maharashtra", "CAPF Mandates BSF CRPF", "Theaterisation CDS"],
                            searchKeywords: ["border management challenges india", "golden crescent golden triangle drugs", "smart fencing cibms project", "coastal security 26 11 lessons", "capf forces bsf itbp ssb cisf", "theaterisation of armed forces cds", "सीमा व्यवस्थापन", "सुवर्ण चंद्रकोर व त्रिकोण", "स्मार्ट कुंपण CIBMS", "सागरी सुरक्षा", "CAPF सुरक्षा दले"],
                            topics: [
                                {
                                    id: "top_g312_01",
                                    nameMr: "सीमावर्ती भागातील आव्हाने, अमली पदार्थ तस्करी व CIBMS",
                                    nameEn: "Border Vulnerabilities, Drug Corridors & Smart Fencing",
                                    subtopics: [
                                        {
                                            id: "st_g312_01_01",
                                            titleMr: "भारताच्या सीमांसमोरील आव्हाने: कठीण भूरचना (पर्वत, दलदल, जंगले), सीमापार मानवी तस्करी, बनावट नोटा (FICN), आणि घुसखोरी",
                                            titleEn: "Land Border Vulnerabilities: Tough Terrains (Riverine, Himalayan), Infiltration, Smuggling & Fake Currency (FICN)",
                                            chips: ["सीमा आव्हाने", "बनावट नोटा (FICN)", "सीमापार घुसखोरी"]
                                        },
                                        {
                                            id: "st_g312_01_02",
                                            titleMr: "ड्रग कॉरिडॉर्स: 'गोल्डन क्रेसेंट' (सुवर्ण चंद्रकोर: इराण, अफगाणिस्तान, पाकिस्तान) आणि 'गोल्डन ट्रँगल' (सुवर्ण त्रिकोण: म्यानमार, थायलंड, लाओस) यांच्या मधे अडकलेला भारत",
                                            titleEn: "Narcotics Trap: India Sandwiched Between Golden Crescent (West) and Golden Triangle (East) Opium Pipelines",
                                            chips: ["सुवर्ण चंद्रकोर (Golden Crescent)", "सुवर्ण त्रिकोण (Golden Triangle)", "ड्रग्स तस्करी"]
                                        },
                                        {
                                            id: "st_g312_01_03",
                                            titleMr: "स्मार्ट सीमा व्यवस्थापन: एकात्मिक सीमा व्यवस्थापन प्रणाली (CIBMS - सेन्सर्स, लेझर कुंपण, थर्मल कॅमेरे, ड्रोन), आणि सीमावर्ती रस्ते बांधणी (BRO)",
                                            titleEn: "Smart Border Upgrades: Comprehensive Integrated Border Management System (CIBMS), Laser Walls, Drone Vigilance & BRO Roads",
                                            chips: ["CIBMS स्मार्ट कुंपण", "लेझर वॉल", "सीमा रस्ते संघटना (BRO)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारताची अंतर्गत सुरक्षा - अशोक कुमार (IPS)", standard: "प्रमाणित संदर्भ", chapterRef: "सीमा व्यवस्थापन व आव्हाने" }
                                    ]
                                },
                                {
                                    id: "top_g312_02",
                                    nameMr: "सागरी सुरक्षा, विविध सुरक्षा दले व थिएटर कमांड्स",
                                    nameEn: "Coastal Security, Security Forces Mandate & Integrated Commands",
                                    subtopics: [
                                        {
                                            id: "st_g312_02_01",
                                            titleMr: "सागरी सुरक्षा व महाराष्ट्र: २६/११ मुंबई हल्ल्यानंतरची सुधारणा, ३-स्तरीय सागरी सुरक्षा (नौदल, तटरक्षक दल - Coast Guard, सागरी पोलीस), आणि मच्छिमारांचे बायोमेट्रिक कार्ड्स",
                                            titleEn: "Coastal Security Architecture Post-26/11: 3-Tier Layering (Navy, Coast Guard, Marine Police) & Coastal Radar Grids",
                                            chips: ["सागरी सुरक्षा (२६/११ नंतर)", "तटरक्षक दल (Coast Guard)", "सागरी पोलीस"]
                                        },
                                        {
                                            id: "st_g312_02_02",
                                            titleMr: "केंद्रीय सशस्त्र पोलीस दले (CAPF): BSF (पाक/बांगलादेश सीमा), ITBP (चीन सीमा), SSB (नेपाळ/भूतान सीमा), CISF (विमानतळ/उद्योग), CRPF (अंतर्गत सुरक्षा) आणि आसाम रायफल्स",
                                            titleEn: "CAPF Mandates: BSF, ITBP, SSB, CISF, CRPF and Assam Rifles Specialised Deployments & Co-ordination Deficits",
                                            chips: ["BSF (सीमा सुरक्षा दल)", "ITBP", "CRPF", "CISF"]
                                        },
                                        {
                                            id: "st_g312_02_03",
                                            titleMr: "संरक्षण दलांमधील सुधारणा: चीफ ऑफ डिफेन्स स्टाफ (CDS पद निर्मिती), तिन्ही दलांचे संयुक्तिकरण (Theaterisation / Integrated Theater Commands), आणि अग्निपथ योजना",
                                            titleEn: "Military Modernisation: Chief of Defence Staff (CDS), Integrated Theater Commands (Theaterisation) & Agnipath Reforms",
                                            chips: ["CDS पद", "थिएटर कमांड्स (Theaterisation)", "अग्निपथ योजना"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Ministry of Home Affairs (MHA) & MoD Annual Reports", standard: "शासकीय अहवाल", chapterRef: "Border Management and Armed Forces Reforms" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: "rajyaseva_mains_paper_7",
            paperNumber: 7,
            code: "GS4",
            slug: "mains-general-studies-4",
            nameMr: "सामान्य अध्ययन ४: नीतिशास्त्र, सचोटी व अभियोग्यता",
            nameEn: "General Studies IV: Ethics, Integrity & Aptitude",
            type: "Merit",
            standard: "पदवी स्तर",
            durationHours: 3,
            marks: 250,
            subjects: [
                {
                    id: "sub_mains_gs4_ethics_integrity_aptitude",
                    code: "GS4_SUB",
                    slug: "mains-gs4-ethics-integrity-and-aptitude",
                    nameMr: "सामान्य अध्ययन ४: नीतिशास्त्र, सचोटी व अभियोग्यता",
                    nameEn: "General Studies IV: Ethics, Integrity and Aptitude",
                    name: "सामान्य अध्ययन ४ (Paper 7: General Studies IV - Ethics, Integrity & Aptitude - 250 Marks)",
                    officialScope: "MPSC State Services Mains Paper 7 (General Studies IV): Ethics, Integrity and Aptitude. This paper includes questions to test the candidates' attitude and approach to issues relating to integrity, probity in public life and problem-solving approach to various issues and conflicts faced by him/her in dealing with society. Questions may utilise the case study approach to determine these aspects (Section A: Theory - 125 Marks, Section B: Case Studies - 125 Marks, Total: 250 Marks, Duration: 3 Hours).",
                    version: "1.0",
                    verifiedDate: "2026-10-28",
                    notesJsonBaseDir: "/data/notes/mains_gs4/",


                    theme: {
                        primaryColor: "#4f46e5",        // Indigo / Ethical Integrity, Philosophy & Moral Leadership Theme
                        bgColor: "#eef2ff",
                        iconClass: "ri-compass-3-line"
                    },


                    metrics: {
                        totalChapters: 8,
                        totalEstimatedHours: 90,
                        totalMarks: 250,
                        targetMarks: 125,               // स्पर्धात्मक निवडीसाठी सुरक्षित जीएस-४ स्कोअर
                        paperDurationHours: 3
                    },


                    subjectTags: [
                        "Mains-Merit",
                        "Paper-7-Mains",
                        "GS-4",
                        "Descriptive-Subjective",
                        "Ethics-Human-Interface",
                        "Attitude-Foundational-Values",
                        "Emotional-Intelligence-EI",
                        "Moral-Thinkers-Philosophers",
                        "Public-Service-Values-Probity",
                        "Citizen-Charters-RTI",
                        "Practical-Case-Studies",
                        "High-Scoring-Rank-Decider"
                    ],


                    filterCategory: "MAINS_MERIT",
                    searchKeywords: [
                        "mpsc mains gs 4", "ethics integrity and aptitude", "moral thinkers maharashtra india",
                        "emotional intelligence in administration", "probity in governance",
                        "ethics case studies framework", "code of ethics conduct", "citizen charter work culture",
                        "सामान्य अध्ययन ४", "नीतिशास्त्र सचोटी व अभियोग्यता", "नैतिक विचारवंत", "भावनिक बुद्धिमत्ता", "प्रशासनातील सचोटी", "केस स्टडीज सोडवण्याची पद्धत"
                    ],


                    referenceSources: [
                        {
                            name: "MPSC राज्यसेवा मुख्य परीक्षा अधिकृत अभ्यासक्रम (Descriptive SSE)",
                            role: "अधिकृत परीक्षा-संदर्भ",
                            url: "https://mpsc.org.in/"
                        },
                        {
                            name: "Ethics, Integrity & Aptitude - G. Subba Rao & P.N. Roy Chowdhury (Access/LexisNexis)",
                            role: "सैद्धांतिक संकल्पना व तत्त्वज्ञानाची चौकट"
                        },
                        {
                            name: "द्वितीय प्रशासकीय सुधारणा आयोग (2nd ARC) - अहवाल ४: प्रशासनातील नीतिशास्त्र (Ethics in Governance)",
                            role: "शासकीय नैतिक संहिता, भ्रष्टाचार निर्मूलन व लोकसेवा मूल्ये"
                        },
                        {
                            name: "Justice: What's the Right Thing to Do? - Michael Sandel",
                            role: "उपयुक्ततावाद, कर्तव्यवाद व नैतिक पेचप्रसंग विश्लेषण"
                        },
                        {
                            name: "प्रशासकीय नीतिशास्त्र व केस स्टडीज - डॉ. तुकाराम जाधव / युनिक अकॅडमी",
                            role: "मराठी संदर्भ व प्रशासकीय केस स्टडीज संच"
                        }
                    ],


                    chapters: [
                        // =========================================================================
                        // प्रकरण १: नीतिशास्त्र आणि मानवी परस्परसंबंध (Ethics and Human Interface)
                        // =========================================================================
                        {
                            id: "m_gs4_chap_01",
                            code: "G401",
                            section: "Ethics & Human Interface",
                            slug: "ethics-and-human-interface-essence-determinants-and-consequences",
                            nameMr: "नीतिशास्त्र आणि मानवी परस्परसंबंध: सार, निर्धारक घटक, परिणाम व परिमाणे",
                            nameEn: "Ethics & Human Interface: Essence, Determinants, Consequences & Dimensions",
                            name: "नीतिशास्त्र आणि मानवी परस्परसंबंध (Ethics & Human Interface)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 12,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs4_01",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: null,
                            nextChapterId: "m_gs4_chap_02",
                            metaDescriptionMr: "नीतिशास्त्राचा गाभा, नैतिकतेचे निर्धारक घटक, खाजगी व सार्वजनिक संबंधांमधील नैतिकता, मानवी मूल्ये, कुटुंब-समाजाची भूमिका, आणि महापुरुषांचे आदर्श.",
                            metaDescriptionEn: "Essence of ethics, determinants and consequences in human actions, ethics in private vs public relationships, human values, and role of family/society.",
                            notesJsonPath: "/data/notes/mains_gs4/g401_ethics_interface.json",
                            quizTag: "mains_gs4_eth_01",
                            tags: ["Ethics Essence", "Determinants of Ethics", "Private vs Public Ethics", "Human Values", "Role of Family Society", "High-Yield"],
                            searchKeywords: ["essence of ethics", "determinants and consequences of ethics", "ethics in private and public relationships", "human values role of family", "नीतिशास्त्राचा सार", "नैतिकतेचे निर्धारक", "खाजगी vs सार्वजनिक नैतिकता", "मानवी मूल्ये"],
                            topics: [
                                {
                                    id: "top_g401_01",
                                    nameMr: "नीतिशास्त्राचा सार, निर्धारक घटक व परिणाम",
                                    nameEn: "Essence, Determinants & Consequences of Ethics in Human Action",
                                    subtopics: [
                                        {
                                            id: "st_g401_01_01",
                                            titleMr: "नीतिशास्त्र म्हणजे काय? नीतिशास्त्र (Ethics), नैतिकता (Morality) आणि कायदा (Law) यांमधील सूक्ष्म भेद व परस्परसंबंध",
                                            titleEn: "Essence of Ethics: Conceptual Clarity between Ethics, Morality, Values, Religion and the Rule of Law",
                                            chips: ["नीतिशास्त्र vs नैतिकता vs कायदा", "नीतिशास्त्राचा सार", "मूल्यांची निर्मिती"]
                                        },
                                        {
                                            id: "st_g401_01_02",
                                            titleMr: "मानवी कृतींमधील नैतिकतेचे निर्धारक घटक (Determinants): हेतू (Motive/Intention), परिस्थिती (Circumstances) आणि कृतीचे स्वरूप (Nature of Act)",
                                            titleEn: "Determinants of Morality: Intention, Means Adopted, Contextual Circumstances & Teleological Ends",
                                            chips: ["नैतिकतेचे निर्धारक घटक", "हेतू vs साधन vs साध्य", "परिस्थितीजन्य नैतिकता"]
                                        },
                                        {
                                            id: "st_g401_01_03",
                                            titleMr: "नीतिशास्त्राचे परिणाम व परिमाणे (Dimensions): व्यक्तिगत, संस्थात्मक, सामाजिक व जागतिक पातळीवरील परिणाम; वर्णनात्मक, निकषात्मक व उपयोजित नीतिशास्त्र",
                                            titleEn: "Consequences & Dimensions: Descriptive, Normative, Meta-Ethics & Applied Fields (Bioethics, Cyber-ethics)",
                                            chips: ["उपयोजित नीतिशास्त्र", "निकषात्मक नीतिशास्त्र", "व्यक्तिगत व सामाजिक परिणाम"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Ethics, Integrity & Aptitude - Subba Rao & Roy Chowdhury", standard: "प्रमाणित संदर्भ", chapterRef: "Chapter 1: Ethics and Human Interface" }
                                    ]
                                },
                                {
                                    id: "top_g401_02",
                                    nameMr: "खाजगी व सार्वजनिक संबंधांमधील नैतिकता आणि मूल्यांची रुजवणूक",
                                    nameEn: "Ethics in Private & Public Relationships & Inculcation of Values",
                                    subtopics: [
                                        {
                                            id: "st_g401_02_01",
                                            titleMr: "खाजगी विरुद्ध सार्वजनिक संबंधांमधील नैतिकता: कौटुंबिक स्नेह, विश्वास विरुद्ध प्रशासकीय उत्तरदायित्व, निष्पक्षता व स्वार्थ-हितसंबंधांचा संघर्ष (Conflict of Interest)",
                                            titleEn: "Private vs Public Ethics: Loyalty and Affection vs Impartiality, Transparency & Rule of Law",
                                            chips: ["खाजगी vs सार्वजनिक नैतिकता", "हितसंबंधांचा संघर्ष", "प्रशासकीय निष्पक्षता"]
                                        },
                                        {
                                            id: "st_g401_02_02",
                                            titleMr: "मूल्यांची रुजवणूक: मानवी मूल्यांच्या संवर्धनात कुटुंब (Family), शैक्षणिक संस्था (Educational Institutions) आणि समाज (Society) यांची भूमिका",
                                            titleEn: "Inculcating Values: The Transformative Role of Family, Schools/Universities, Peer Groups & Community",
                                            chips: ["कुटुंबाची भूमिका", "शिक्षण संस्थांची भूमिका", "मूल्य संवर्धन"]
                                        },
                                        {
                                            id: "st_g401_02_03",
                                            titleMr: "महान नेते व समाजसुधारकांचे जीवन संदेश: महात्मा गांधी (सत्य व अहिंसा), डॉ. बाबासाहेब आंबेडकर (समानता व बंधुता), छत्रपती शिवाजी महाराज (प्रजाहितदक्ष न्याय)",
                                            titleEn: "Emulating Ethical Icons: Lessons from Gandhi (Truth/Ahimsa), Ambedkar (Liberty/Equality), Shivaji Maharaj (Just Governance)",
                                            chips: ["गांधीवादी मूल्ये", "आंबेडकर विचार", "शिवकालीन नीतिमत्ता"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Justice - Michael Sandel", standard: "प्रमाणित संदर्भ", chapterRef: "Moral Dilemmas in Public Decisions" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण २: अभिवृत्ती — घटक, कार्य व राजकीय/नैतिक प्रभाव (Attitude)
                        // =========================================================================
                        {
                            id: "m_gs4_chap_02",
                            code: "G402",
                            section: "Attitude & Psychological Aspects",
                            slug: "attitude-content-structure-function-influence-and-persuasion",
                            nameMr: "अभिवृत्ती: रचना, घटक (CAB मॉडेल), कार्ये, नैतिक/राजकीय दृष्टिकोन व प्रवृत्ती बदल",
                            nameEn: "Attitude: Content, Structure, Function, Moral & Political Attitudes, Social Influence & Persuasion",
                            name: "अभिवृत्ती: रचना व प्रवृत्ती बदल (Attitude, Persuasion & Influence)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 10,
                            isMaharashtraReference: false,
                            trackingKey: "progress_m_gs4_02",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs4_chap_01",
                            nextChapterId: "m_gs4_chap_03",
                            metaDescriptionMr: "अभिवृत्तीचे CAB मॉडेल, विचार व वर्तनाचा संबंध, नैतिक व राजकीय अभिवृत्ती, सामाजिक प्रभाव (Social Influence), आणि मन वळवणे (Persuasion तंत्र).",
                            metaDescriptionEn: "Attitude structure (CAB Model), attitude-behavior consistency, moral and political attitudes, social influence, and persuasion strategies in public programs.",
                            notesJsonPath: "/data/notes/mains_gs4/g402_attitude.json",
                            quizTag: "mains_gs4_att_01",
                            tags: ["Attitude CAB Model", "Attitude vs Behavior", "Moral Attitude", "Political Attitude", "Persuasion Techniques", "Social Influence"],
                            searchKeywords: ["attitude cab model ethics", "attitude and behavior consistency", "persuasion techniques administration", "social influence swachh bharat", "अभिवृत्ती CAB मॉडेल", "वर्तन आणि अभिवृत्ती", "मन वळवणे (Persuasion)", "सामाजिक प्रभाव"],
                            topics: [
                                {
                                    id: "top_g402_01",
                                    nameMr: "अभिवृत्तीची रचना, CAB मॉडेल व वर्तनाशी संबंध",
                                    nameEn: "Attitude Architecture: CAB Model, Functions & Behavioral Link",
                                    subtopics: [
                                        {
                                            id: "st_g402_01_01",
                                            titleMr: "अभिवृत्तीची त्रिमितीय रचना (CAB Model): ज्ञानात्मक (Cognitive - विश्वास/माहिती), भावनिक (Affective - भावना/अनुभूती), आणि वर्तनात्मक (Behavioral - प्रत्यक्ष कृती)",
                                            titleEn: "Tripartite Model (CAB): Cognitive (Beliefs), Affective (Emotions) & Behavioral Intent Components",
                                            chips: ["CAB मॉडेल", "ज्ञानात्मक घटक", "भावनिक घटक", "वर्तनात्मक कृती"]
                                        },
                                        {
                                            id: "st_g402_01_02",
                                            titleMr: "अभिवृत्ती आणि वर्तन (Attitude-Behavior Link): अभिवृत्ती नेहमी वर्तनात परावर्तित होते का? सामाजिक दबाव, परिस्थितीचे घटक आणि सुसंगततेचे अडथळे",
                                            titleEn: "Attitude-Behavior Consistency: When Does Attitude Predict Action? Contextual Constraints & Cognitive Dissonance",
                                            chips: ["अभिवृत्ती vs वर्तन", "बौद्धिक विसंवाद (Cognitive Dissonance)", "वर्तन सुसंगती"]
                                        },
                                        {
                                            id: "st_g402_01_03",
                                            titleMr: "अभिवृत्तीची कार्ये: ज्ञानात्मक कार्य, बचावात्मक कार्य (Ego-Defensive), मूल्य-अभिव्यक्ती कार्य, आणि सामाजिक समायोजन",
                                            titleEn: "Functional Theory of Attitudes (Katz): Knowledge, Ego-Defensive, Value-Expressive & Utilitarian Roles",
                                            chips: ["अभिवृत्तीची कार्ये", "ईगो-डिफेन्सिव्ह कार्य", "मूल्य अभिव्यक्ती"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Social Psychology - Robert Baron", standard: "प्रमाणित संदर्भ", chapterRef: "Attitudes: Evaluating the Social World" }
                                    ]
                                },
                                {
                                    id: "top_g402_02",
                                    nameMr: "नैतिक/राजकीय दृष्टिकोन, सामाजिक प्रभाव व मन वळवणे (Persuasion)",
                                    nameEn: "Moral/Political Attitudes, Social Influence & Persuasion Strategies",
                                    subtopics: [
                                        {
                                            id: "st_g402_02_01",
                                            titleMr: "नैतिक व राजकीय अभिवृत्ती: न्याय, समता, मानवाधिकार यांबद्दलची नैतिक भूमिका; डावे, उजवे, मध्यममार्गी राजकीय विचार आणि पूर्वग्रह (Prejudices) व रूढीबद्धता (Stereotypes)",
                                            titleEn: "Moral & Political Leanings: Democratic Ethos, Ideological Polarization, Eradicating Prejudices & Stereotyping",
                                            chips: ["नैतिक अभिवृत्ती", "राजकीय दृष्टिकोन", "पूर्वग्रह व रूढीबद्धता निर्मूलन"]
                                        },
                                        {
                                            id: "st_g402_02_02",
                                            titleMr: "सामाजिक प्रभाव (Social Influence) व मन वळवणे (Persuasion): जनआंदोलनांमध्ये लोकांचे विचार बदलण्याचे तंत्र; स्वच्छ भारत अभियान, बेटी बचाओ आणि कोविड लसीकरण मोहिमांचे यश",
                                            titleEn: "Persuasion Dynamics in Public Policy: Role Models, Nudge Theory, Swachh Bharat Behavioral Shifts & Vaccine Drives",
                                            chips: ["मन वळवणे (Persuasion)", "नज सिद्धांत (Nudge Theory)", "स्वच्छ भारत लोकचळवळ", "सामाजिक प्रभाव"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Ethics, Integrity & Aptitude - Subba Rao", standard: "प्रमाणित संदर्भ", chapterRef: "Chapter 2: Attitude and Social Influence" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ३: नागरी सेवेची मूलभूत मूल्ये व अभियोग्यता (Foundational Values for Civil Services)
                        // =========================================================================
                        {
                            id: "m_gs4_chap_03",
                            code: "G403",
                            section: "Foundational Values",
                            slug: "aptitude-and-foundational-values-for-civil-service-integrity-empathy",
                            nameMr: "नागरी सेवेची मूलभूत मूल्ये: सचोटी, निष्पक्षता, अनामिकता, सहानुभूती व दुर्बलांबद्दल करुणा",
                            nameEn: "Aptitude & Foundational Values for Civil Service: Integrity, Impartiality, Empathy, Compassion & Dedication",
                            name: "नागरी सेवेची मूलभूत मूल्ये (Aptitude & Foundational Civil Service Values)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 12,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs4_03",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs4_chap_02",
                            nextChapterId: "m_gs4_chap_04",
                            metaDescriptionMr: "अभियोग्यता (Aptitude) vs कौशल्य, सचोटी (Integrity), गैर-पक्षपातीपणा (Non-partisanship), वस्तुनिष्ठता (Objectivity), आणि दुर्बल घटकांप्रती सहानुभूती (Empathy/Compassion).",
                            metaDescriptionEn: "Aptitude vs ability, Nolan Committee 7 principles, integrity, non-partisanship, objectivity, dedication to public service, empathy, tolerance, and compassion for weaker sections.",
                            notesJsonPath: "/data/notes/mains_gs4/g403_foundational_values.json",
                            quizTag: "mains_gs4_val_01",
                            tags: ["Nolan Committee 7 Principles", "Civil Service Integrity", "Objectivity vs Subjectivity", "Empathy and Compassion", "Non-Partisanship", "Dedication to Service"],
                            searchKeywords: ["nolan committee seven principles of public life", "foundational values for civil service", "integrity in public administration", "empathy and compassion for weaker sections", "नोलन समितीची ७ तत्त्वे", "नागरी सेवेतील सचोटी", "निष्पक्षता व वस्तुनिष्ठता", "दुर्बलांबद्दल करुणा"],
                            topics: [
                                {
                                    id: "top_g403_01",
                                    nameMr: "नोलन समितीची ७ तत्त्वे व प्रशासकीय सचोटी",
                                    nameEn: "Nolan Committee's Seven Principles of Public Life & Integrity",
                                    subtopics: [
                                        {
                                            id: "st_g403_01_01",
                                            titleMr: "नोलन समितीची सार्वजनिक जीवनातील ७ मार्गदर्शक तत्त्वे: निस्वार्थीपणा (Selflessness), सचोटी (Integrity), वस्तुनिष्ठता (Objectivity), उत्तरदायित्व (Accountability), खुलेपणा (Openness), प्रामाणिकपणा (Honesty), आणि नेतृत्व (Leadership)",
                                            titleEn: "Lord Nolan Committee Framework: Selflessness, Integrity, Objectivity, Accountability, Openness, Honesty & Leadership",
                                            chips: ["नोलन समिती ७ तत्त्वे", "निस्वार्थीपणा", "उत्तरदायित्व", "प्रामाणिकपणा व खुलेपणा"]
                                        },
                                        {
                                            id: "st_g403_01_02",
                                            titleMr: "सचोटी (Integrity): केवळ कायदेशीर प्रामाणिकपणा नव्हे तर कोणीही पाहत नसतानाही नैतिक मूल्यांशी एकनिष्ठ राहणे; बौद्धिक सचोटी व संस्थात्मक निष्ठा",
                                            titleEn: "Anatomy of Integrity: Beyond Rule Adherence; Moral Wholeness, Intellectual Consistency & Incorruptibility",
                                            chips: ["सचोटी (Integrity)", "नैतिक सुसंगतता", "अढळ प्रामाणिकपणा"]
                                        },
                                        {
                                            id: "st_g403_01_03",
                                            titleMr: "वस्तुनिष्ठता (Objectivity) विरुद्ध पूर्वग्रह: निर्णय प्रक्रियेत केवळ पुरावे, आकडेवारी आणि कायदेशीर निकषांवर भर देणे; वैयक्तिक आवडी-निवडींना दूर ठेवणे",
                                            titleEn: "Objectivity in Execution: Evidence-Based Decisions, Meritocratic Prerogatives & Rejecting Emotional Bias",
                                            chips: ["वस्तुनिष्ठ निर्णय (Objectivity)", "तथ्य-आधारित प्रशासन", "पूर्वग्रह निर्मूलन"]
                                        }
                                    ],
                                    sources: [
                                        { book: "2nd ARC 4th Report - Ethics in Governance", standard: "शासकीय अहवाल", chapterRef: "Foundational Values of Civil Service" }
                                    ]
                                },
                                {
                                    id: "top_g403_02",
                                    nameMr: "निष्पक्षता, समर्पण आणि दुर्बल घटकांप्रती सहानुभूती व करुणा",
                                    nameEn: "Non-Partisanship, Dedication & Compassion for Weaker Sections",
                                    subtopics: [
                                        {
                                            id: "st_g403_02_01",
                                            titleMr: "गैर-पक्षपातीपणा (Non-partisanship) व राजकीय तटस्थता: सत्ताधारी पक्ष बदलला तरी घटनेशी व कायद्याशी एकनिष्ठ राहून पक्षविरहित सेवा देणे",
                                            titleEn: "Non-Partisanship & Neutrality: Serving Shifting Political Executives with Unflinching Constitutional Loyalty",
                                            chips: ["राजकीय तटस्थता", "गैर-पक्षपाती प्रशासन", "घटनात्मक निष्ठा"]
                                        },
                                        {
                                            id: "st_g403_02_02",
                                            titleMr: "सहानुभूती (Empathy), सहवेदना (Sympathy) आणि करुणा (Compassion): फरक; दुर्बल, वंचित, आदिवासी व महिलांच्या दुःखाची जाणीव ठेवून मदतीसाठी सक्रिय पावले उचलणे",
                                            titleEn: "Sympathy vs Empathy vs Compassion: Emotional Identification leading to Proactive Redressal for Marginalized Strata",
                                            chips: ["सहानुभूती (Empathy)", "करुणा (Compassion)", "दुर्बल घटकांची सेवा"]
                                        },
                                        {
                                            id: "st_g403_02_03",
                                            titleMr: "लोकसेवेप्रति समर्पण (Dedication to Public Service): कठीण परिस्थितीत, अतिरिक्त वेळ देऊन आणि वैयक्तिक सुखाचा त्याग करून जनतेसाठी कार्य करण्याची वृत्ती",
                                            titleEn: "Dedication & Public Service Calling: Resilience in Adversity, Selfless Zeal & Serving Beyond Call of Duty",
                                            chips: ["लोकसेवा समर्पण", "कर्तव्यनिष्ठा", "जनहित प्राधान्य"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Ethics, Integrity & Aptitude - Subba Rao", standard: "प्रमाणित संदर्भ", chapterRef: "Chapter 3: Foundational Values for Civil Services" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ४: भावनिक बुद्धिमत्ता — संकल्पना, उपयोजन व प्रशासन (Emotional Intelligence)
                        // =========================================================================
                        {
                            id: "m_gs4_chap_04",
                            code: "G404",
                            section: "Emotional Intelligence",
                            slug: "emotional-intelligence-concepts-utilities-and-application-in-administration",
                            nameMr: "भावनिक बुद्धिमत्ता (EI): संकल्पना, डॅनियल गोलमन मॉडेल व प्रशासनातील उपयोजन",
                            nameEn: "Emotional Intelligence (EI): Concepts, Daniel Goleman Model, Utilities & Administrative Governance",
                            name: "भावनिक बुद्धिमत्ता व प्रशासन (Emotional Intelligence in Governance)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 10,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs4_04",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs4_chap_03",
                            nextChapterId: "m_gs4_chap_05",
                            metaDescriptionMr: "डॅनियल गोलमनचे ५ घटक (स्व-जाणीव, स्व-नियमन, प्रेरणा, सहानुभूती, सामाजिक कौशल्ये), IQ विरुद्ध EQ, जमाव नियंत्रण (Mob Control), आणि ताण व्यवस्थापन.",
                            metaDescriptionEn: "Daniel Goleman's 5 EI competencies (Self-awareness, Self-regulation, Motivation, Empathy, Social Skills), IQ vs EQ, Crisis management, and Conflict resolution.",
                            notesJsonPath: "/data/notes/mains_gs4/g404_emotional_intelligence.json",
                            quizTag: "mains_gs4_ei_01",
                            tags: ["Emotional Intelligence EI", "Daniel Goleman 5 Pillars", "IQ vs EQ Debate", "Crisis Management Administration", "Conflict Resolution", "Stress Management"],
                            searchKeywords: ["emotional intelligence daniel goleman", "emotional intelligence in administration", "iq vs eq civil services", "conflict resolution mob control ei", "भावनिक बुद्धिमत्ता", "डॅनियल गोलमन मॉडेल", "जमाव नियंत्रण", "प्रशासकीय ताण व्यवस्थापन"],
                            topics: [
                                {
                                    id: "top_g404_01",
                                    nameMr: "भावनिक बुद्धिमत्तेची संकल्पना व डॅनियल गोलमनचे प्रारूप",
                                    nameEn: "EI Framework, Goleman's 5 Competencies & IQ vs EQ",
                                    subtopics: [
                                        {
                                            id: "st_g404_01_01",
                                            titleMr: "भावनिक बुद्धिमत्ता (EI) म्हणजे काय? स्वतःच्या आणि इतरांच्या भावना ओळखणे, समजून घेणे आणि त्यांचे योग्य व्यवस्थापन करण्याची क्षमता",
                                            titleEn: "Defining Emotional Intelligence: Recognizing, Understanding & Regulating Own and Others' Emotional Vectors",
                                            chips: ["भावनिक बुद्धिमत्ता व्याख्या", "भावनांची ओळख", "भावनिक नियमन"]
                                        },
                                        {
                                            id: "st_g404_01_02",
                                            titleMr: "डॅनियल गोलमनचे ५ प्रमुख आधारस्तंभ: १) स्व-जाणीव (Self-Awareness), २) स्व-नियमन (Self-Regulation), ३) आंतरिक प्रेरणा (Motivation), ४) सहानुभूती (Empathy), आणि ५) सामाजिक कौशल्ये (Social Skills)",
                                            titleEn: "Daniel Goleman's 5 Dimensions: Self-Awareness, Self-Regulation, Intrinsic Motivation, Empathy & Social Skills",
                                            chips: ["डॅनियल गोलमन ५ घटक", "स्व-जाणीव", "स्व-नियमन", "सामाजिक कौशल्ये"]
                                        },
                                        {
                                            id: "st_g404_01_03",
                                            titleMr: "बौद्धिक गुणांक (IQ) विरुद्ध भावनिक गुणांक (EQ): प्रशासनात केवळ हुशारी पुरेशी नाही; तणावाखाली शांत राहणे व लोकांचे मन जिंकण्यासाठी EQ ची श्रेष्ठता",
                                            titleEn: "IQ vs EQ Dichotomy: Why High EQ Dictates Leadership Success and Crisis Stability Over Raw Cognitive IQ",
                                            chips: ["IQ vs EQ", "प्रशासकीय नेतृत्व", "भावनिक स्थैर्य"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Emotional Intelligence: Why It Can Matter More Than IQ - Daniel Goleman", standard: "प्रमाणित ग्रंथ", chapterRef: "The Emotional Brain & Applied Domains" }
                                    ]
                                },
                                {
                                    id: "top_g404_02",
                                    nameMr: "प्रशासनात भावनिक बुद्धिमत्तेचे व्यावहारिक उपयोजन",
                                    nameEn: "Practical Application of EI in Administrative Problem-Solving",
                                    subtopics: [
                                        {
                                            id: "st_g404_02_01",
                                            titleMr: "जमाव नियंत्रण व कायदा-सुव्यवस्था: हिंसक आंदोलने, मोर्चे, किंवा दंगलीच्या वेळी शांत राहून जमावाचा राग शांत करणे आणि रक्तपात टाळणे",
                                            titleEn: "Crisis & Riot De-escalation: Managing Volatile Crowds, Defusing Communal Flashpoints without Excessive Force",
                                            chips: ["जमाव नियंत्रण (Mob Control)", "हिंसाचार रोखणे", "शांतता वाटाघाटी"]
                                        },
                                        {
                                            id: "st_g404_02_02",
                                            titleMr: "संघर्ष निवारण (Conflict Resolution) व सहकाऱ्यांचे मनोधैर्य: शासकीय कर्मचाऱ्यांमधील ताण कमी करणे, प्रेरणा देणे आणि जनतेच्या तक्रारी शांतपणे ऐकणे",
                                            titleEn: "Workplace Harmony & Public Interface: Resolving Inter-Departmental Disputes, Motivating Subordinates & Handling Grievances",
                                            chips: ["संघर्ष निवारण", "कर्मचारी मनोधैर्य", "तक्रार निवारण कौशल्य"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Ethics, Integrity & Aptitude - Subba Rao", standard: "प्रमाणित संदर्भ", chapterRef: "Chapter 4: Emotional Intelligence in Administration" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ५: नैतिक विचारवंत व तत्त्वज्ञान (Moral Thinkers & Philosophers)
                        // =========================================================================
                        {
                            id: "m_gs4_chap_05",
                            code: "G405",
                            section: "Moral Philosophies & Thinkers",
                            slug: "contributions-of-moral-thinkers-and-philosophers-india-and-world",
                            nameMr: "नैतिक विचारवंत व तत्त्वज्ञ: भारतीय परंपरा, समाजसुधारक व पाश्चात्त्य नैतिक सिद्धांत",
                            nameEn: "Contributions of Moral Thinkers and Philosophers from India & the World",
                            name: "नैतिक विचारवंत व तत्त्वज्ञान (Moral Thinkers & Philosophers)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 14,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs4_05",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs4_chap_04",
                            nextChapterId: "m_gs4_chap_06",
                            metaDescriptionMr: "सॉक्रेटिस, प्लेटो, ॲरिस्टॉटल, कांटचा कर्तव्यवाद, बेंथम-मिलचा उपयुक्ततावाद, गांधींचे ७ सामाजिक पापे, कौटिल्य, आणि महाराष्ट्रातील फुले-शाहू-आंबेडकर नैतिक विचार.",
                            metaDescriptionEn: "Socrates, Plato, Aristotle's virtue ethics, Kant's categorical imperative, Utilitarianism (Bentham/Mill), Gandhi's 7 sins, Kautilya, and Maharashtra reformers.",
                            notesJsonPath: "/data/notes/mains_gs4/g405_moral_thinkers.json",
                            quizTag: "mains_gs4_phil_01",
                            tags: ["Western Moral Thinkers", "Kantian Deontology", "Utilitarianism Bentham Mill", "Aristotle Virtue Ethics", "Gandhian Ethics", "Maharashtra Reformers Phule Ambedkar"],
                            searchKeywords: ["kant categorical imperative deontology", "utilitarianism bentham j s mill", "aristotle virtue ethics golden mean", "mahatma gandhi seven social sins", "phule shahu ambedkar ethical thought", "इमॅन्युएल कांट कर्तव्यवाद", "उपयुक्ततावाद", "गांधीजींची ७ सामाजिक पापे", "फुले शाहू आंबेडकर नैतिक विचार"],
                            topics: [
                                {
                                    id: "top_g405_01",
                                    nameMr: "पाश्चात्त्य नैतिक सिद्धांत: कर्तव्यवाद, उपयुक्ततावाद व सद्गुण नीतिशास्त्र",
                                    nameEn: "Western Normative Theories: Deontology, Utilitarianism & Virtue Ethics",
                                    subtopics: [
                                        {
                                            id: "st_g405_01_01",
                                            titleMr: "इमॅन्युएल कांटचा कर्तव्यवाद (Kantian Deontology): निरपवाद आज्ञा (Categorical Imperative), कर्तव्यासाठी कर्तव्य, आणि मानवाला केवळ साध्य मानणे (साधन नव्हे)",
                                            titleEn: "Kantian Deontology: Categorical Imperative, Duty for Duty's Sake, and Treating Humanity as an End, Never Merely as Means",
                                            chips: ["कांटचा कर्तव्यवाद", "कॅटेगरीकल इम्पेरेटिव्ह", "माणूस हेच साध्य"]
                                        },
                                        {
                                            id: "st_g405_01_02",
                                            titleMr: "उपयुक्ततावाद (Utilitarianism): जेरेमी बेंथम (कमाल लोकांचे कमाल सुख - परिमाण) आणि जे. एस. मिल (सुखाची गुणवत्ता व अल्पसंख्याकांचे संरक्षण)",
                                            titleEn: "Utilitarian Teleology: Jeremy Bentham (Hedonistic Calculus) vs J.S. Mill (Qualitative Pleasures & Liberty Safeguards)",
                                            chips: ["उपयुक्ततावाद (Utilitarianism)", "कमाल लोकांचे कमाल सुख", "बेंथम vs मिल"]
                                        },
                                        {
                                            id: "st_g405_01_03",
                                            titleMr: "ग्रीक तत्त्वज्ञान: सॉक्रेटिस (सद्गुण हेच ज्ञान / Virtue is Knowledge), प्लेटोचे ४ मुख्य सद्गुण (न्याय, धैर्य, संयम, शहाणपण), आणि ॲरिस्टॉटलचा सुवर्णमध्य (Golden Mean)",
                                            titleEn: "Classical Greek Wisdom: Socrates' Examined Life, Plato's Cardinal Virtues & Aristotle's Golden Mean Ethics",
                                            chips: ["सॉक्रेटिस विचार", "प्लेटोचे ४ सद्गुण", "ॲरिस्टॉटलचा सुवर्णमध्य"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Ethics: History, Theory, and Contemporary Issues - Steven Cahn", standard: "प्रमाणित ग्रंथ", chapterRef: "Classical & Modern Moral Philosophies" }
                                    ]
                                },
                                {
                                    id: "top_g405_02",
                                    nameMr: "भारतीय नैतिक परंपरा, गांधीवाद व महाराष्ट्राचे समाजसुधारक",
                                    nameEn: "Indian Moral Traditions, Gandhian Ethics & Maharashtra Reformers",
                                    subtopics: [
                                        {
                                            id: "st_g405_02_01",
                                            titleMr: "कौटिल्याचे अर्थशास्त्र (योगक्षेम, राजाचे सुख प्रजेच्या सुखात) आणि भगवद्गीतेचा निष्काम कर्मयोग (फळाची आशा न धरता कर्तव्य करणे)",
                                            titleEn: "Ancient Indian Ethos: Kautilya's Yogakshema, Citizen-Centric Rulership & Bhagavad Gita's Nishkama Karma",
                                            chips: ["कौटिल्य अर्थशास्त्र (योगक्षेम)", "निष्काम कर्मयोग", "कर्तव्य पालन"]
                                        },
                                        {
                                            id: "st_g405_02_02",
                                            titleMr: "महात्मा गांधींची नीतिमत्ता: साधनांची शुद्धता (Purity of Means and Ends), विश्वस्त संकल्पना (Trusteeship), अंत्योदय (सर्वोदयासाठी शेवटच्या व्यक्तीचा विचार), आणि ७ सामाजिक पापे",
                                            titleEn: "Gandhian Moral Framework: Purity of Means, Trusteeship Doctrine, Talisman for Decision-Making & 7 Social Sins",
                                            chips: ["साधनांची शुद्धता", "गांधीजींचा ताईत (Talisman)", "७ सामाजिक पापे", "विश्वस्त संकल्पना"]
                                        },
                                        {
                                            id: "st_g405_02_03",
                                            titleMr: "महाराष्ट्रातील नैतिक प्रबोधन: महात्मा ज्योतिराव फुले (सत्यशोधक मानवकल्याण व शिक्षण), राजर्षी शाहू महाराज (सामाजिक न्याय व आरक्षण), आणि डॉ. बाबासाहेब आंबेडकर (घटनात्मक नैतिकता व मानवी प्रतिष्ठा)",
                                            titleEn: "Maharashtra's Moral Renaissance: Phule's Humanist Rationalism, Shahu Maharaj's Subaltern Compassion & Ambedkar's Constitutional Morality",
                                            chips: ["फुले सत्यशोधक नैतिकता", "शाहू महाराज समता", "आंबेडकर घटनात्मक नीतिमत्ता"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय विचारवंत व तत्त्वज्ञान - डॉ. अनिल कठारे / तुकाराम जाधव", standard: "प्रमाणित संदर्भ", chapterRef: "महाराष्ट्रातील नैतिक व सामाजिक विचार" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ६: लोकप्रशासनातील सार्वजनिक सेवा मूल्ये व नीतिशास्त्र (Ethics in Public Administration)
                        // =========================================================================
                        {
                            id: "m_gs4_chap_06",
                            code: "G406",
                            section: "Public Administration Ethics",
                            slug: "public-service-values-and-ethics-in-public-administration-dilemmas",
                            nameMr: "लोकप्रशासनातील सार्वजनिक मूल्ये, नैतिक पेचप्रसंग, कायदे, नियम व नैतिक मार्गदर्शन",
                            nameEn: "Public/Civil Service Values & Ethics in Public Administration: Dilemmas, Laws, Rules & Conscience",
                            name: "प्रशासनातील सार्वजनिक मूल्ये व पेचप्रसंग (Ethics in Public Administration)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 12,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs4_06",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs4_chap_05",
                            nextChapterId: "m_gs4_chap_07",
                            metaDescriptionMr: "प्रशासनातील नैतिक पेचप्रसंग (Ethical Dilemmas), सद्सद्विवेकबुद्धी (Conscience), कायदे vs नियम vs नीतिमत्ता, उत्तरदायित्व, आणि कॉर्पोरेट गव्हर्नन्स (CSR).",
                            metaDescriptionEn: "Ethical dilemmas in governance, voice of conscience, laws vs regulations vs ethical guidance, accountability mechanisms, and ethical issues in international aid/CSR.",
                            notesJsonPath: "/data/notes/mains_gs4/g406_public_ethics.json",
                            quizTag: "mains_gs4_pub_01",
                            tags: ["Ethical Dilemmas Administration", "Voice of Conscience", "Law vs Ethics", "Accountability in Governance", "Corporate Governance CSR", "Ethical Guidance"],
                            searchKeywords: ["ethical dilemmas in public administration", "voice of conscience as source of ethical guidance", "laws rules regulations and ethics", "accountability and ethical governance", "corporate governance ethics", "प्रशासकीय नैतिक पेचप्रसंग", "सद्सद्विवेकबुद्धी (Conscience)", "कायदे vs नीतिमत्ता", "कॉर्पोरेट गव्हर्नन्स"],
                            topics: [
                                {
                                    id: "top_g406_01",
                                    nameMr: "प्रशासकीय नैतिक पेचप्रसंग व सद्सद्विवेकबुद्धीचा आवाज",
                                    nameEn: "Administrative Dilemmas, Ethical Guidance & Voice of Conscience",
                                    subtopics: [
                                        {
                                            id: "st_g406_01_01",
                                            titleMr: "प्रशासनातील नैतिक पेचप्रसंग (Ethical Dilemmas): नियम पाळणे विरुद्ध मानवीय करुणा दाखवणे; गोपनीयतेचा अधिकार विरुद्ध पारदर्शकता; विकास प्रकल्प विरुद्ध विस्थापितांचे पुनर्वसन",
                                            titleEn: "Navigating Ethical Dilemmas: Strict Rules vs Human Discretion, Public Secrecy vs RTI, Development vs Displacement",
                                            chips: ["नैतिक पेचप्रसंग (Ethical Dilemmas)", "नियम vs करुणा", "विकास vs विस्थापन"]
                                        },
                                        {
                                            id: "st_g406_01_02",
                                            titleMr: "नैतिक मार्गदर्शनाचे स्रोत: कायदे (Laws), नियम (Rules), विनियम (Regulations) आणि सद्सद्विवेकबुद्धी (Voice of Conscience - अंतरात्म्याचा आवाज) जेव्हा कायदा मूक असतो",
                                            titleEn: "Sources of Ethical Guidance: External Legal Frameworks vs Internal Voice of Conscience when Rules are Silent",
                                            chips: ["सद्सद्विवेकबुद्धी (Conscience)", "अंतरात्म्याचा आवाज", "कायदे व नियमांची मर्यादा"]
                                        },
                                        {
                                            id: "st_g406_01_03",
                                            titleMr: "उत्तरदायित्व व नैतिक शासन (Ethical Governance): प्रशासकीय कृतींचे परिणाम स्वीकारणे, चूक मान्य करण्याचे धैर्य आणि सामाजिक लेखापरीक्षण यंत्रणा",
                                            titleEn: "Accountability Paradigms: Upward Bureaucratic Scrutiny vs Downward Citizen-Led Vigilance and Performance Audits",
                                            chips: ["प्रशासकीय उत्तरदायित्व", "नैतिक शासन", "पारदर्शकता"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Ethics in Public Management - H. George Frederickson", standard: "प्रमाणित ग्रंथ", chapterRef: "Resolving Conflicts and Dilemmas in Bureaucracy" }
                                    ]
                                },
                                {
                                    id: "top_g406_02",
                                    nameMr: "आंतरराष्ट्रीय संबंधांमधील नैतिकता व कॉर्पोरेट गव्हर्नन्स",
                                    nameEn: "Ethical Dimensions in Global Affairs & Corporate Governance",
                                    subtopics: [
                                        {
                                            id: "st_g406_02_01",
                                            titleMr: "आंतरराष्ट्रीय संबंधांमधील नैतिकता: युद्धाची नैतिकता (Just War Theory), निर्वासितांचे हक्क, हवामान न्यायातील विकसित देशांचे दायित्व, आणि परदेशी मदतीतील अटी",
                                            titleEn: "Ethics in IR: Just War Principles, Refugee Protection, Climate Justice Debates & Non-Exploitative Foreign Aid",
                                            chips: ["युद्धाची नैतिकता (Just War)", "हवामान न्याय (Climate Justice)", "निर्वासितांचे हक्क"]
                                        },
                                        {
                                            id: "st_g406_02_02",
                                            titleMr: "कॉर्पोरेट गव्हर्नन्स (Corporate Governance): भागधारकांचे संरक्षण, बोर्डाची स्वायत्तता, कंपन्यांचे सामाजिक उत्तरदायित्व (CSR - कंपनी कायदा कलम १३५), आणि व्यावसायिक सचोटी",
                                            titleEn: "Corporate Governance: Shareholder Rights, Independent Directors, Mandatory 2% CSR (Sec 135) & Whistleblower Shields",
                                            chips: ["कॉर्पोरेट गव्हर्नन्स", "CSR सामाजिक उत्तरदायित्व", "कंपनी कायदा कलम १३५"]
                                        }
                                    ],
                                    sources: [
                                        { book: "2nd ARC 4th Report - Ethics in Governance", standard: "शासकीय अहवाल", chapterRef: "Corporate Governance and Ethical Oversight" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ७: प्रशासनातील प्रामाणिकपणा व सुशासन (Probity in Governance)
                        // =========================================================================
                        {
                            id: "m_gs4_chap_07",
                            code: "G407",
                            section: "Probity & Work Culture",
                            slug: "probity-in-governance-citizens-charter-work-culture-and-corruption",
                            nameMr: "शासनातील सचोटी व प्रामाणिकपणा: माहिती देवाणघेवाण, कार्यसंस्कृती, व्हिसलब्लोअर व भ्रष्टाचार आव्हाने",
                            nameEn: "Probity in Governance: Information Sharing, Work Culture, Quality of Service Delivery & Corruption Challenges",
                            name: "शासनातील सचोटी, कार्यसंस्कृती व भ्रष्टाचार (Probity in Governance & Work Culture)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 10,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs4_07",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs4_chap_06",
                            nextChapterId: "m_gs4_chap_08",
                            metaDescriptionMr: "शासनातील प्रामाणिकपणा (Probity), माहितीचा अधिकार, नागरिक सनद, निकोप कार्यसंस्कृती (Work Culture), व्हिसलब्लोअर संरक्षण कायदा, आणि भ्रष्टाचार निर्मूलन धोरणे.",
                            metaDescriptionEn: "Probity in governance, philosophical basis of governance, information sharing, citizens charter, workplace culture, Whistleblowers Protection Act, and anti-corruption strategies.",
                            notesJsonPath: "/data/notes/mains_gs4/g407_probity_governance.json",
                            quizTag: "mains_gs4_prob_01",
                            tags: ["Probity in Governance", "Work Culture Public Sector", "Whistleblowers Protection", "Citizens Charter Sevottam", "Anti-Corruption 2nd ARC", "Public Funds Utilization"],
                            searchKeywords: ["probity in governance meaning", "work culture in government offices", "whistleblowers protection act india", "utilization of public funds ethics", "challenges of corruption 2nd arc", "शासनातील सचोटी Probity", "कार्यसंस्कृती", "व्हिसलब्लोअर संरक्षण", "सार्वजनिक निधी वापर", "भ्रष्टाचार निर्मूलन"],
                            topics: [
                                {
                                    id: "top_g407_01",
                                    nameMr: "शासनातील प्रामाणिकपणा, माहिती स्वातंत्र्य व नागरिक सनद",
                                    nameEn: "Probity Concept, Right to Information & Citizen's Charters",
                                    subtopics: [
                                        {
                                            id: "st_g407_01_01",
                                            titleMr: "शासनातील प्रामाणिकपणा (Probity in Governance): केवळ भ्रष्टाचाराचा अभाव नव्हे तर उच्च दर्जाची नैतिक सचोटी, कार्यक्षमता आणि सेवेचे समर्पण",
                                            titleEn: "Concept of Probity: Active Presence of Incorruptibility, Transparency & Devotion to Public Good",
                                            chips: ["शासनातील सचोटी (Probity)", "उच्च नैतिक मानके", "पारदर्शक प्रशासन"]
                                        },
                                        {
                                            id: "st_g407_01_02",
                                            titleMr: "माहिती देवाणघेवाण व पारदर्शकता: माहितीचा अधिकार (RTI) चे नैतिक परिमाण, सक्रिय प्रकटीकरण (Proactive Disclosure - कलम ४(१)(b)), आणि शासकीय गोपनीयता कायद्याचा गैरवापर टाळणे",
                                            titleEn: "Information Freedom: Moral Mandate of RTI, Section 4 Proactive Disclosures vs Misuse of Official Secrets Act",
                                            chips: ["माहितीचा अधिकार नैतिक मूल्य", "सक्रिय प्रकटीकरण (कलम ४)", "गोपनीयतेचा अतिरेक टाळणे"]
                                        },
                                        {
                                            id: "st_g407_01_03",
                                            titleMr: "नागरिक सनद (Citizen's Charter) व सेवांची गुणवत्ता: जनतेला अधिकार देणे, सेवा हमी (Time-bound delivery), 'सेवोत्तम मॉडेल' (Sevottam), आणि निष्क्रीयतेवर नियंत्रण",
                                            titleEn: "Citizen's Charter: Empowering the Citizen, Service Benchmarking, Sevottam Model & Eliminating Apathy",
                                            chips: ["नागरिक सनद", "सेवोत्तम मॉडेल", "सेवा हमी"]
                                        }
                                    ],
                                    sources: [
                                        { book: "2nd ARC 12th Report - Citizen Centric Administration", standard: "शासकीय अहवाल", chapterRef: "Core Strategies for Sevottam & Charters" }
                                    ]
                                },
                                {
                                    id: "top_g407_02",
                                    nameMr: "कार्यसंस्कृती, व्हिसलब्लोअर संरक्षण व भ्रष्टाचार निर्मूलन",
                                    nameEn: "Ethical Work Culture, Whistleblower Shields & Anti-Corruption Grid",
                                    subtopics: [
                                        {
                                            id: "st_g407_02_01",
                                            titleMr: "निकोप कार्यसंस्कृती (Work Culture): लालफितीशाही आणि बाबूशाहीचा अंत; कर्मचारी सक्षमीकरण, सकारात्मक वातावरण, सहकार्य आणि वेळेची शिस्त",
                                            titleEn: "Transforming Work Culture: Dismantling Red Tape, Bureaucratic Inertia, Merit Recognition & Citizen-First Mindset",
                                            chips: ["कार्यसंस्कृती बदल", "लालफितीशाही निर्मूलन", "नागरिक-केंद्री प्रशासन"]
                                        },
                                        {
                                            id: "st_g407_02_02",
                                            titleMr: "व्हिसलब्लोअर संरक्षण कायदा (Whistleblowers Protection Act): अंतर्गत भ्रष्टाचार उघड करणाऱ्या कर्मचाऱ्यांना संरक्षण, अनामिकता जपणे आणि सूडबुद्धीच्या कारवाईपासून बचाव",
                                            titleEn: "Whistleblower Protection: Legal Shields for Truth-Tellers, Identity Secrecy & Preventing Retaliatory Harassment",
                                            chips: ["व्हिसलब्लोअर संरक्षण", "भ्रष्टाचार उघड करणे", "सुरक्षा हमी"]
                                        },
                                        {
                                            id: "st_g407_02_03",
                                            titleMr: "सार्वजनिक निधीचा योग्य वापर व भ्रष्टाचार आव्हाने: निधीचा गैरवापर (Diversion of Funds), भ्रष्टाचार प्रतिबंधक कायदा (PC Act दुरुस्ती २०१८), आणि २nd ARC शिफारसी",
                                            titleEn: "Public Funds Stewardship: Plugging Diversions, Prevention of Corruption Act (2018 Amendments) & 2nd ARC Reforms",
                                            chips: ["सार्वजनिक निधी वापर", "भ्रष्टाचार प्रतिबंधक कायदा", "2nd ARC भ्रष्टाचार सुधारणा"]
                                        }
                                    ],
                                    sources: [
                                        { book: "2nd ARC 4th Report - Ethics in Governance", standard: "शासकीय अहवाल", chapterRef: "Combating Corruption: Institutional Measures" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ८: केस स्टडीज सोडवण्याची पद्धत व सराव (Case Studies Framework & Mastery)
                        // =========================================================================
                        {
                            id: "m_gs4_chap_08",
                            code: "G408",
                            section: "Case Studies Section B",
                            slug: "case-studies-on-ethics-integrity-aptitude-framework-and-drills",
                            nameMr: "केस स्टडीज सोडवण्याची मास्टर पद्धत: ६-टप्प्यांची चौकट, पर्याय मूल्यांकन व प्रत्यक्ष प्रशासकीय पेचप्रसंग",
                            nameEn: "Mastering Case Studies: 6-Step Analytical Framework, Option Evaluation & Real-World Case Drills",
                            name: "केस स्टडीज मास्टर चौकट व सराव (Case Studies Framework & Practical Drills)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 14,
                            isMaharashtraReference: true,
                            trackingKey: "progress_m_gs4_08",
                            hasNotes: true,
                            hasQuiz: false,
                            prevChapterId: "m_gs4_chap_07",
                            nextChapterId: null,
                            metaDescriptionMr: "सेक्शन B मधील १२५ गुणांच्या केस स्टडीजसाठी ६-टप्प्यांचे प्रारूप (घटक, पेचप्रसंग, पर्याय मूल्यमापन, अंतिम उपाय), दबाव, भ्रष्टाचार, दंगली व आपत्कालीन निर्णय.",
                            metaDescriptionEn: "6-step blueprint for Section B case studies (125 Marks): Stakeholder mapping, ethical dilemmas, pros/cons option matrix, balanced course of action, and real administrative scenarios.",
                            notesJsonPath: "/data/notes/mains_gs4/g408_case_studies.json",
                            quizTag: "mains_gs4_case_01",
                            tags: ["Case Studies Framework", "6-Step Approach", "Stakeholder Mapping", "Ethical Dilemmas Identification", "Option Matrix Evaluation", "125 Marks Section B", "High-Scoring"],
                            searchKeywords: ["ethics case studies framework", "how to solve ethics case studies mpsc", "stakeholder mapping ethics case studies", "ethical dilemma resolution options matrix", "केस स्टडीज सोडवण्याची पद्धत", "६-टप्प्यांची चौकट", "भाग ब केस स्टडीज १२५ गुण", "पर्याय मूल्यमापन"],
                            topics: [
                                {
                                    id: "top_g408_01",
                                    nameMr: "केस स्टडी सोडवण्याची ६-टप्प्यांची मास्टर चौकट",
                                    nameEn: "The 6-Step Standard Blueprint for Ethics Case Studies",
                                    subtopics: [
                                        {
                                            id: "st_g408_01_01",
                                            titleMr: "टप्पा १ व २: केस स्टडीचा सारांश/संदर्भ + सर्व संबंधित घटक (Stakeholders: उदा. जिल्हाधिकारी, स्थानिक जनता, राजकीय नेते, कंत्राटदार, मीडिया) स्पष्टपणे मांडणे",
                                            titleEn: "Steps 1 & 2: Concise Context Synopsis + Complete Stakeholder Mapping (Primary & Secondary Actors)",
                                            chips: ["टप्पा १: संदर्भ", "टप्पा २: सर्व संबंधित घटक (Stakeholders)"]
                                        },
                                        {
                                            id: "st_g408_01_02",
                                            titleMr: "टप्पा ३: केस स्टडीमधील मूळ नैतिक पेचप्रसंग (Ethical Dilemmas) ओळखणे: उदा. कर्तव्य vs करुणा, कायद्याचे पालन vs तत्काळ न्याय, विकास vs पर्यावरण",
                                            titleEn: "Step 3: Isolating Core Ethical Dilemmas: Duty vs Compassion, Transparency vs Secrecy, Development vs Tribal Rights",
                                            chips: ["टप्पा ३: नैतिक पेचप्रसंग (Dilemmas)", "कर्तव्य vs करुणा", "नियम vs मानवी हक्क"]
                                        },
                                        {
                                            id: "st_g408_01_03",
                                            titleMr: "टप्पा ४, ५ व ६: उपलब्ध पर्यायांची मांडणी (Options Matrix) -> प्रत्येक पर्यायाचे गुण-दोष (Merits & Demerits) -> सर्वोत्तम, व्यावहारिक व कायदेशीर कृती आराखडा (Final Course of Action)",
                                            titleEn: "Steps 4, 5 & 6: Available Options Matrix, Critical Merits-Demerits Analysis, and Justified Final Action Plan",
                                            chips: ["टप्पा ४: पर्याय मांडणी", "टप्पा ५: साधक-बाधक मूल्यमापन", "टप्पा ६: सर्वोत्तम उपाययोजना"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Ethics, Integrity & Aptitude - Subba Rao", standard: "प्रमाणित संदर्भ", chapterRef: "Case Studies Analytical Framework" }
                                    ]
                                },
                                {
                                    id: "top_g408_02",
                                    nameMr: "वारंवार विचारले जाणारे प्रशासकीय केस स्टडीज प्रकार व सराव",
                                    nameEn: "High-Frequency Thematic Case Study Types & Administrative Drills",
                                    subtopics: [
                                        {
                                            id: "st_g408_02_01",
                                            titleMr: "प्रकार १: राजकीय दबाव व निष्पक्षता (मंत्री किंवा आमदाराचा बेकायदेशीर कामासाठी दबाव, बदलीची धमकी, आणि नियमांवर ठाम राहण्याचे धैर्य)",
                                            titleEn: "Type 1: Political Coercion & Integrity: Resisting Illegal Demands, Transfer Threats & Protecting Subordinates",
                                            chips: ["राजकीय दबाव", "बदलीची धमकी", "नियमांवर ठाम राहणे"]
                                        },
                                        {
                                            id: "st_g408_02_02",
                                            titleMr: "प्रकार २: भ्रष्टाचार व लाचखोरी (वरिष्ठ अधिकाऱ्यांचे रॅकेट उघड करणे, कंत्राटदाराची लाच ऑफर नाकारणे, आणि व्हिसलब्लोअरची भूमिका)",
                                            titleEn: "Type 2: Bribery & Institutional Corruption: Handling Corrupt Superiors, Whistleblowing Dilemmas & Vendor Extortion",
                                            chips: ["लाचखोरी नकार", "वरिष्ठांचा भ्रष्टाचार", "व्हिसलब्लोअर पेचप्रसंग"]
                                        },
                                        {
                                            id: "st_g408_02_03",
                                            titleMr: "प्रकार ३: दंगली व कायदा-सुव्यवस्था (धार्मिक तणाव, जमाव नियंत्रण, सोशल मीडिया अफवा, आणि बळाचा किमान व आवश्यक वापर)",
                                            titleEn: "Type 3: Communal Flares & Mob Violence: Rumor Containment, Minimal Force, Impartial Policing & Curfew Protocols",
                                            chips: ["दंगल नियंत्रण", "अफवा रोखणे", "किमान बळाचा वापर"]
                                        },
                                        {
                                            id: "st_g408_02_04",
                                            titleMr: "प्रकार ४: विकास प्रकल्प व विस्थापितांचे प्रश्न (जमीन संपादन, आदिवासींचे स्थलांतर, पर्यावरणीय हानी, आणि योग्य मोबदला-पुनर्वसन)",
                                            titleEn: "Type 4: Land Acquisition & Displacement: Industrial Project Protests, Tribal Displacement & Fair Rehabilitation",
                                            chips: ["जमीन संपादन वाद", "आदिवासी विस्थापन", "पुनर्वसन समतोल"]
                                        }
                                    ],
                                    sources: [
                                        { book: "MPSC & UPSC GS 4 मागील १० वर्षांचे केस स्टडीज संच", standard: "२०१३ ते २०२५", chapterRef: "प्रशासकीय केस स्टडीज व टॉपर्स मॉडेल उत्तरे" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
    ]
};

export default rajyasevaMainsData;