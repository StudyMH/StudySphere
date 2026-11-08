export const groupBMainsData = {

    id: "mains",
    title: "संयुक्त मुख्य परीक्षा (Combined Mains Exam)",
    totalMarks: 400,
    negativeMarking: "1/4 (0.25)",
    papers: [
        {
            id: "group_b_mains_p1",
            paperNumber: 1,
            name: "पेपर १: भाषा (मराठी व इंग्रजी)",
            marks: 200,
            totalQuestions: 100,
            durationMinutes: 60,
            subjects: [
                {
                    id: "gb_mains_marathi",
                    code: "MAR",
                    slug: "marathi-language-grammar-vocabulary-comprehension",
                    nameMr: "मराठी भाषा व्याकरण, शब्दसंग्रह व उतारा आकलन",
                    nameEn: "Marathi Language Grammar, Vocabulary & Reading Comprehension",
                    name: "मराठी भाषा (Marathi Language - Mains Paper 1)",
                    officialScope: "Marathi Grammar (Phonetics, Sandhi, Parts of Speech, Declensions, Conjugations, Tenses, Voice, Compounds, Word Formation, Syntax, Figures of Speech), Vocabulary (Synonyms, Antonyms, Idioms, Proverbs), and Passage Comprehension for MPSC Group B Mains Paper 1",
                    version: "1.0",
                    verifiedDate: "2026-10-28",
                    notesJsonBaseDir: "/data/notes/group_b/mains/marathi/",


                    // UI Theme & Theming Metadata
                    theme: {
                        primaryColor: "#ea580c",        // Saffron / Traditional Marathi Literature Theme
                        bgColor: "#fff7ed",
                        iconClass: "ri-book-open-line"
                    },


                    // अभ्यास व डॅशबोर्ड ॲनालिटिक्स मेट्रिक्स
                    metrics: {
                        totalChapters: 18,
                        totalEstimatedHours: 60,
                        avgQuestionsInMains: 50,
                        targetMarks: 100,
                        weightageRange: "50 Questions / 100 Marks"
                    },


                    // विषय पातळीवरील स्मार्ट टॅग्ज
                    subjectTags: [
                        "Core-Mains",
                        "Mains-Paper-1",
                        "High-Scoring",
                        "Rule-Intensive",
                        "Vocabulary-Dominant",
                        "Standard-Literature-Walimbe"
                    ],


                    filterCategory: "LANGUAGE",
                    searchKeywords: [
                        "mpsc group b mains marathi syllabus", "marathi grammar mo ra walimbe balasaheb shinde",
                        "marathi varnavichar sandhi prayog samas", "shabdasiddhi upsarg pratyay",
                        "marathi idioms proverbs vakprachar mhani", "marathi utara aakalan passage comprehension",
                        "मराठी व्याकरण मो रा वाळंबे", "वर्णविचार संधी", "प्रयोग कर्तरी कर्मणी भावे", "समास अव्ययीभाव तत्पुरुष", "शब्दसिद्धी तत्सम तद्भव", "वाक्प्रचार व म्हणी", "मराठी शब्दसंग्रह"
                    ],


                    referenceSources: [
                        {
                            name: "MPSC Non-Gazetted Group B Combined Mains Syllabus",
                            role: "अधिकृत परीक्षा-संदर्भ",
                            url: "https://mpsc.gov.in"
                        },
                        {
                            name: "सुगम मराठी व्याकरण व लेखन - मो. रा. वाळंबे",
                            role: "MPSC चा सर्वोच्च प्रमाणित व प्रमाणभूत संदर्भ ग्रंथ"
                        },
                        {
                            name: "परिपूर्ण मराठी व्याकरण - बाळासाहेब शिंदे",
                            role: "नियम, शॉर्टकट ट्रिक्स व वस्तुनिष्ठ प्रश्न सराव"
                        },
                        {
                            name: "मराठी शब्दरत्न - बाळासाहेब शिंदे",
                            role: "सखोल शब्दसंग्रह, म्हणी व वाक्प्रचार"
                        },
                        {
                            name: "शासकीय मराठी शुद्धलेखन नियमावली - महाराष्ट्र राज्य साहित्य आणि संस्कृती मंडळ",
                            role: "शुद्धलेखन व प्रमाणभाषा नियम"
                        }
                    ],


                    chapters: [
                        // =========================================================================
                        // विभाग A — ध्वनीविचार, वर्णविचार व संधी (Phonetics & Sandhi)
                        // =========================================================================
                        {
                            id: "gb_mar_c01",
                            code: "M01",
                            section: "A",
                            slug: "varnavichar-marathi-alphabets-and-phonetics",
                            nameMr: "वर्णविचार: स्वर, स्वरादी, व्यंजने आणि उच्चारस्थाने",
                            nameEn: "Phonetics: Vowels, Swaradi, Consonants & Articulation Places",
                            name: "वर्णविचार व उच्चारस्थाने (Phonetics & Alphabets)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mar_c01",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: null,
                            nextChapterId: "gb_mar_c02",
                            metaDescriptionMr: "मराठीतील एकूण ५२ वर्ण (६ नोव्हेंबर २००९ शासन निर्णय), स्वर (१२+२ इंग्रजी 'ॲ', 'ऑ'), स्वरादी (अनुस्वार व विसर्ग), व्यंजने (स्पर्श, अर्धस्वर, उष्मे, महाप्राण 'ह', द्रविडियन 'ळ'), आणि उच्चारस्थाने (कंठ्य, तालव्य, मूर्धन्य, दंत्य, ओष्ठ्य).",
                            metaDescriptionEn: "In-depth review of Marathi Phonetics: 52 Alphabets (Nov 2009 GR), Vowels (12+2 English loan 'ॲ' & 'ऑ'), Swaradi, Consonants classification (Plosives, Semi-vowels, Sibilants, Mahapran 'ह', Dravidian 'ळ'), and Places of Articulation.",
                            notesJsonPath: "/data/notes/group_b/mains/marathi/c01_varnavichar.json",
                            quizTag: "gb_mar_varna_01",
                            tags: ["Marathi Grammar", "Varnavichar", "52 Alphabets", "Nov 2009 GR", "Places of Articulation", "Mahapran Ha", "High-Weightage"],
                            searchKeywords: ["marathi varnavichar 52 letters", "marathi vowels swar 12 plus 2 english", "swaradi anuswar visarga", "consonants sparsha ardhaswar ushme mahapran", "places of articulation kanthya talavya murdhanya", "वर्णविचार ५२ वर्ण", "स्वर स्वरादी व्यंजने", "उच्चारस्थाने कंठ्य तालव्य दंत्य", "महाप्राण ह", "द्रविडियन वर्ण ळ"],
                            topics: [
                                {
                                    id: "top_gb_m01_01",
                                    nameMr: "मराठी वर्णमाला रचना, ५२ वर्ण, वर्गीकरण आणि मुखातील उच्चारस्थाने",
                                    nameEn: "Phonetic Alphabet Matrix, 52 Letters Classification & Phonological Articulation",
                                    subtopics: [
                                        {
                                            id: "st_gb_m01_01_01",
                                            titleMr: "मराठी वर्णमालेची रचना (६ नोव्हेंबर २००९ चा शासन निर्णय): आधुनिक मराठी वर्णमालेत एकूण ५२ वर्ण आहेत; १) स्वर (१४: १२ पारंपारिक + २ इंग्रजीतून आलेले 'ॲ' आणि 'ऑ' - प्रा. अरविंद मंगरूळकर शिफारस); २) स्वरादी (२: अनुस्वार व विसर्ग); ३) व्यंजने (३४); ४) विशेष संयुक्त व्यंजने (२: 'क्ष' आणि 'ज्ञ' - म. पां. सबनीस यांनी वर्णमालेत स्थान दिले)",
                                            titleEn: "52 Alphabets Framework (6 Nov 2009 GR): Vowels (14: 12 traditional + 2 English 'ॲ' & 'ऑ' via Arvind Mangrulkar), Swaradi (2: Anuswar & Visarga), Consonants (34), Special Compound Consonants (2: 'क्ष' & 'ज्ञ' via M.P. Sabnis)",
                                            chips: ["५२ वर्ण (६ नोव्हेंबर २००९ GR)", "१४ स्वर (ॲ आणि ऑ समाविष्ट)", "२ स्वरादी", "३४ व्यंजने", "क्ष आणि ज्ञ (विशेष संयुक्त व्यंजने)"]
                                        },
                                        {
                                            id: "st_gb_m01_01_02",
                                            titleMr: "स्वरांचे प्रकार: १) ऱ्हस्व स्वर (उचारास कमी वेळ - अ, इ, उ, ऋ, लृ); २) दीर्घ स्वर (आ, ई, ऊ); ३) संयुक्त स्वर (दोन स्वर मिळून बनलेले: ए = अ + इ/ई, ऐ = आ + इ/ई, ओ = अ + उ/ऊ, औ = आ + उ/ऊ); ४) इंग्रजी स्वर (ॲ, ऑ); ५) सजातीय स्वर (एकाच उच्चार स्थानातून - अ-आ, इ-ई) विरुद्ध विजातीय स्वर (अ-इ, अ-उ)",
                                            titleEn: "Vowel Typology: Short Vowels (Hrasva: a, i, u, ri, lri), Long Vowels (Deergha: aa, ee, oo), Compound Vowels (Sanyukta: e, ai, o, au), English loan vowels (ॲ, ऑ), Homogeneous (Sajatiya) vs Heterogeneous (Vijatiya)",
                                            chips: ["ऱ्हस्व स्वर (५)", "दीर्घ स्वर (३)", "संयुक्त स्वर (ए, ऐ, ओ, औ)", "सजातीय व विजातीय स्वर"]
                                        },
                                        {
                                            id: "st_gb_m01_01_03",
                                            titleMr: "व्यंजनांचे प्रकार: १) स्पर्श व्यंजने (२५: कठोर व्यंजने १०, मृदू व्यंजने १०, अनुनासिके ५: ङ्, ञ्, ण्, न्, म्); २) अर्धस्वर / अंतःस्थ (४: य, र, ल, व - इ, ऋ, लृ, उ या स्वरांपासून निर्मिती); ३) उष्मे / घर्षक (३: श, ष, स); ४) महाप्राण (१: 'ह' - फुप्फुसातील हवा जोराने बाहेर पडते; इंग्रजीतील 'h' मिसळून १४ महाप्राण बनतात); ५) अल्पप्राण (ह चा उच्चार नसणारे २० वर्ण); ६) स्वतंत्र द्रविडियन वर्ण (१: 'ळ')",
                                            titleEn: "Consonant Taxonomy: Plosives (25: 10 Hard, 10 Soft, 5 Nasals), Semi-Vowels (4: ya, ra, la, va), Sibilants/Fricatives (3: sha, sha, sa), Mahapran (1: 'ha' + 14 aspirates), Dravidian unique letter ('ळ')",
                                            chips: ["स्पर्श व्यंजने २५", "अनुनासिके (परसवर्ण)", "अर्धस्वर (य, र, ल, व)", "उष्मे (श, ष, स)", "महाप्राण (ह)", "स्वतंत्र वर्ण (ळ)"]
                                        },
                                        {
                                            id: "st_gb_m01_01_04",
                                            titleMr: "मुखातील उच्चारस्थाने (MPSC चे आवडते कोष्टक): १) कंठ्य (क, ख, ग, घ, ङ, अ, आ, ह); २) तालव्य (च, छ, ज, झ, ञ, इ, ई, य, श); ३) मूर्धन्य (ट, ठ, ड, ढ, ण, ऋ, र, ष, ळ); ४) दंत्य (त, थ, द, ध, न, लृ, ल, स); ५) ओष्ठ्य (प, फ, ब, भ, म, उ, ऊ); ६) कंठतालव्य (ए, ऐ); ७) कंठोष्ठ्य (ओ, औ); ८) दंतोष्ठ्य (व); ९) दंततालव्य / वत्सर्य (च, छ, ज, झ - 'य' न मिसळता उच्चार: उदा. चमचा, जग, झरा)",
                                            titleEn: "Places of Articulation: Kanthya (Throat: ka-varga, a, aa, ha), Talavya (Palate: cha-varga, i, ee, ya, sha), Murdhanya (Roof: ta-varga, ri, ra, sha, la), Dantya (Teeth: ta-varga, la, sa), Oshthya (Lips: pa-varga, u, oo), Danto-talavya/Alveolar (cha, chha, ja, jha without 'ya' glide)",
                                            chips: ["कंठ्य (क-वर्ग)", "तालव्य (च-वर्ग)", "मूर्धन्य (ट-वर्ग व ळ)", "दंत्य (त-वर्ग)", "ओष्ठ्य (प-वर्ग)", "दंततालव्य (चमचा, जग)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सुगम मराठी व्याकरण व लेखन", standard: "मो. रा. वाळंबे", chapterRef: "प्रकरण १ व २: आपली भाषा व वर्णविचार" },
                                        { book: "परिपूर्ण मराठी व्याकरण", standard: "बाळासाहेब शिंदे", chapterRef: "प्रकरण १: वर्णविचार" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mar_c02",
                            code: "M02",
                            section: "A",
                            slug: "sandhi-svar-vyanjan-visarga-and-marathi-vishesh-sandhi",
                            nameMr: "संधी विचार: स्वरसंधी, व्यंजनसंधी, विसर्गसंधी व मराठीची विशेष संधी",
                            nameEn: "Sandhi Euphonic Junctions: Vowel, Consonant, Visarga & Special Marathi Sandhi",
                            name: "संधी व संधीचे प्रकार (Sandhi Euphonic Junctions)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mar_c02",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mar_c01",
                            nextChapterId: "gb_mar_c03",
                            metaDescriptionMr: "संधी (सांधणे/जोडणे), स्वरसंधी (दीर्घत्व, गुणादेश, वृद्धादेश, यणादेश), व्यंजनसंधी (प्रथम व्यंजन, तृतीय व्यंजन, अनुनासिक संधी), विसर्गसंधी (विसर्ग उकार, विसर्ग र), आणि मराठीची विशेष संधी (पूर्वरूप संधी व पररूप संधी).",
                            metaDescriptionEn: "In-depth review of Sandhi: Vowel Sandhi (Dirghatva, Gunadesh, Vriddhadesh, Yanadesh), Consonant Sandhi (First, Third, Nasal plosive shifts), Visarga Sandhi rules, and Special Marathi Sandhi (Pūrvarūpa & Pararūpa).",
                            notesJsonPath: "/data/notes/group_b/mains/marathi/c02_sandhi.json",
                            quizTag: "gb_mar_sandhi_01",
                            tags: ["Marathi Grammar", "Sandhi", "Svar Sandhi", "Gunadesh Yanadesh", "Vyanjan Sandhi", "Visarga Sandhi", "Purvarup Pararup", "High-Weightage"],
                            searchKeywords: ["marathi sandhi rules formulas", "svar sandhi dirghatva gunadesh vriddhadesh yanadesh", "vyanjan sandhi pratham tritiya anunasik", "visarga sandhi ukar r sandhi", "marathi special sandhi purvarup pararup", "संधी विचार", "स्वरसंधी गुणादेश यणादेश", "व्यंजनसंधी", "विसर्गसंधी", "पूर्वरूप संधी", "पररूप संधी"],
                            topics: [
                                {
                                    id: "top_gb_m02_01",
                                    nameMr: "स्वरसंधीचे नियम, व्यंजन रूपांतरणे, विसर्ग कार्य आणि मराठीची स्वतंत्र संधी",
                                    nameEn: "Vocalic Fusion, Consonant Assimilation, Visarga Mechanics & Native Marathi Sandhi",
                                    subtopics: [
                                        {
                                            id: "st_gb_m02_01_01",
                                            titleMr: "स्वरसंधी (Svar Sandhi) चे ४ मुख्य नियम: १) सजातीय दीर्घत्व संधी (अ+अ=आ, इ+इ=ई - उदा. विद्या+अभ्यास = विद्याभ्यास, कवी+ईश्वर = कवीश्वर); २) गुणादेश (Gunadesh: अ/आ पुढे इ/ई आल्यास 'ए', उ/ऊ आल्यास 'ओ', ऋ आल्यास 'अर्' होतो - उदा. ईश्वर+इच्छा = ईश्वरेच्छा, महा+उत्सव = महोत्सव, देव+ऋषी = देवर्षी); ३) वृद्धादेश (Vriddhadesh: अ/आ पुढे ए/ऐ आल्यास 'ऐ', ओ/औ आल्यास 'औ' होतो - उदा. एक+एक = एकैक, जल+ओघ = जलौघ); ४) यणादेश (Yanadesh: इ/उ/ऋ पुढे विजातीय स्वर आल्यास अनुक्रमे 'य्, व्, र्' बनतात - उदा. प्रीती+अर्थ = प्रीत्यर्थ, मनू+अंतर = मन्वंतर, पितृ+आज्ञा = पित्राज्ञा)",
                                            titleEn: "Vowel Sandhi Rules: Deerghatva (Vidyabhyas), Gunadesh (a+i=e, a+u=o, a+ri=ar: Ishwarechha, Mahotsav, Devarshi), Vriddhadesh (a+e=ai, a+o=au: Ekaik, Jalaugh), Yanadesh (i->y, u->v, ri->r: Preetyartha, Manvantar, Pitragya)",
                                            chips: ["गुणादेश (ए, ओ, अर्)", "वृद्धादेश (ऐ, औ)", "यणादेश (य्, व्, र्)", "दीर्घत्व संधी"]
                                        },
                                        {
                                            id: "st_gb_m02_01_02",
                                            titleMr: "व्यंजनसंधी (Consonant Sandhi): १) प्रथम व्यंजन संधी (कठोर व्यंजन येणे: उदा. विपद्+काल = विपत्काल, वाग्+पती = वाक्पती); २) तृतीय व्यंजन संधी (मृदू व्यंजन येणे: उदा. दिक्+अंबर = दिगंबर, सत्+आचार = सदाचार, जगत्+ईश्वर = जगदीश्वर); ३) अनुनासिक संधी (पहिल्या व्यंजनाबद्दल त्याच्याच वर्गातील अनुनासिक येणे: उदा. वाक्+निश्चय = वाङ्निश्चय, सत्+मार्ग = सन्मार्ग, जगत्+नाथ = जगन्नाथ); ४) 'छ' आणि 'त' संबंधी विशेष नियम (उदा. सत्+चरित्र = सच्चरित्र, उत्+ल्लंघन = उल्लंघन)",
                                            titleEn: "Consonant Sandhi: First Consonant Rule (Vipatkal), Third Consonant Rule (Digambar, Sadachar, Jagadishwar), Nasal Sandhi (Vangnischay, Sanmarga, Jagannath), 'T' Assimilation Rules (Sachcharitra, Ullanghan)",
                                            chips: ["प्रथम व्यंजन संधी (विपत्काल)", "तृतीय व्यंजन संधी (दिगंबर, सदाचार)", "अनुनासिक संधी (सन्मार्ग, जगन्नाथ)", "सच्चरित्र, उल्लंघन"]
                                        },
                                        {
                                            id: "st_gb_m02_01_03",
                                            titleMr: "विसर्गसंधी (Visarga Sandhi): १) विसर्ग उकार संधी (विसर्गाच्या मागे 'अ' व पुढे मृदू वर्ण आल्यास विसर्गाचा 'उ' होऊन मागील 'अ' मध्ये मिसळून 'ओ' होतो - उदा. मनः+रथ = मनोरथ, यशः+धन = यशोधन); २) विसर्ग र-संधी (विसर्गाच्या मागे अ/आ शिवाय इतर स्वर असल्यास विसर्गाचा 'र्' होतो - उदा. निः+उपाय = निरुपाय, दुः+जन = दुर्जन); ३) विसर्ग स-संधी (उदा. मनः+ताप = मनस्ताप, निः+तेज = निस्तेज)",
                                            titleEn: "Visarga Sandhi: Visarga Ukar (Manah+ratha = Manoratha, Yashodhan), Visarga R-Sandhi (Nih+upay = Nirupay, Durjan), Visarga S-Sandhi (Manah+tap = Manastap, Nistej)",
                                            chips: ["विसर्ग उकार संधी (मनोरथ, यशोधन)", "विसर्ग र-संधी (निरुपाय, दुर्जन)", "मनस्ताप, निस्तेज"]
                                        },
                                        {
                                            id: "st_gb_m02_01_04",
                                            titleMr: "मराठीची विशेष संधी (MPSC वारंवार विचारते): १) पूर्वरूप संधी (दोन स्वरांपैकी पहिला स्वर तसाच राहतो व दुसरा लोप पावतो: उदा. काही+सा = काहीसा, खिडकी+आत = खिडकीत, नदी+आत = नदीत); २) पररूप संधी (पहिला स्वर लोप पावतो व दुसरा स्वर कायम राहतो: उदा. हात+ऊन = हातून, घाम+ओळे = घामोळे, एक+एक = एकेक, कर+ऊन = करून)",
                                            titleEn: "Special Marathi Native Sandhi: Pūrvarūpa (1st vowel retained, 2nd dropped: Kahisa, Khidkit, Nadit) vs Pararūpa (1st vowel dropped, 2nd retained: Hatun, Ghamole, Ekek, Karun)",
                                            chips: ["पूर्वरूप संधी (खिडकीत, काहीसा)", "पररूप संधी (हातून, घामोळे, एकेक)", "मराठीची स्वतंत्र संधी"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सुगम मराठी व्याकरण व लेखन", standard: "मो. रा. वाळंबे", chapterRef: "प्रकरण ३: संधी विचार" },
                                        { book: "परिपूर्ण मराठी व्याकरण", standard: "बाळासाहेब शिंदे", chapterRef: "प्रकरण २: संधी व विग्रह" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग B — शब्दांच्या जाती (Parts of Speech: विकारी व अविकारी)
                        // =========================================================================
                        {
                            id: "gb_mar_c03",
                            code: "M03",
                            section: "B",
                            slug: "parts-of-speech-nouns-and-noun-types",
                            nameMr: "नाम आणि नामाचे प्रकार: विशेषनाम, सामान्यनाम व भाववाचक नाम",
                            nameEn: "Nouns & Classification: Proper, Common, Abstract Nouns & Functional Transitions",
                            name: "नाम व नामाचे प्रकार (Nouns & Classification)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mar_c03",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mar_c02",
                            nextChapterId: "gb_mar_c04",
                            metaDescriptionMr: "शब्दांच्या ८ जाती (विकारी व अविकारी), नाम, नामाचे ३ मुख्य प्रकार (सामान्यनाम, विशेषनाम, भाववाचक नाम/धर्मिवाचक व धर्मवाचक), धातूसाधित नामे, आणि नामांचा परस्परांमध्ये होणारा कार्यात्मक वापर.",
                            metaDescriptionEn: "In-depth review of Nouns: 8 Parts of Speech (Inflected vs Uninflected), 3 Primary Noun classes (Common, Proper, Abstract), Verbal Nouns, and functional inter-category transitions (Common used as Proper and vice versa).",
                            notesJsonPath: "/data/notes/group_b/mains/marathi/c03_nouns.json",
                            quizTag: "gb_mar_nouns_01",
                            tags: ["Marathi Grammar", "Parts of Speech", "Nouns", "Visheshnam", "Samanyanam", "Bhavvachak Nam", "High-Weightage"],
                            searchKeywords: ["marathi parts of speech 8 jatis vikari avikari", "nouns samanyanam visheshnam bhavvachak nam", "abstract nouns suffixes pan pana ta giri ki", "functional use of nouns proper to common", "शब्दांच्या ८ जाती", "नाम व नामाचे प्रकार", "विशेषनाम सामान्यनाम", "भाववाचक नाम (पण, पणा, ता, गिरी प्रत्यय)", "धातूसाधित नामे"],
                            topics: [
                                {
                                    id: "top_gb_m03_01",
                                    nameMr: "शब्दांच्या जातींची चौकट, नामाचे वर्गीकरण आणि कार्यात्मक बदल",
                                    nameEn: "Parts of Speech Taxonomy, Noun Classes & Functional Syntax Switches",
                                    subtopics: [
                                        {
                                            id: "st_gb_m03_01_01",
                                            titleMr: "शब्दांच्या ८ जातींची चौकट: १) संव्यय / विकारी (लिंग, वचन, विभक्तीने बदल होणारे - नाम, सर्वनाम, विशेषण, क्रियापद); २) अव्यय / अविकारी (बदल न होणारे - क्रियाविशेषण अव्यय, शब्दयोगी अव्यय, उभयान्वयी अव्यय, केवळप्रयोगी अव्यय)",
                                            titleEn: "8 Parts of Speech Framework: Declinable/Inflected (Vikari: Noun, Pronoun, Adjective, Verb) vs Indeclinable (Avikari: Adverb, Postposition, Conjunction, Interjection)",
                                            chips: ["८ जाती", "विकारी / संव्यय (४)", "अविकारी / अव्यय (४)"]
                                        },
                                        {
                                            id: "st_gb_m03_01_02",
                                            titleMr: "नामाचे ३ मुख्य प्रकार: १) सामान्यनाम (Common Noun: एकाच जातीच्या सर्व वस्तूंना लागू पडणारे नाव, अनेकवचन होते - उदा. मुलगा, नदी, पर्वत, शहर); २) विशेषनाम (Proper Noun: एका विशिष्ट व्यक्ती, स्थळ किंवा वस्तूचा बोध करून देणारे नाव, एकवचनी असते - उदा. राहुल, गंगा, हिमालय, मुंबई); ३) भाववाचक नाम / धर्मवाचक नाम (Abstract Noun: गुण, धर्म किंवा भाव दर्शवणारे - उदा. सौंदर्य, प्रामाणिकपणा, धैर्य, नम्रता, गोडी)",
                                            titleEn: "3 Primary Noun Types: Common Noun (Samanyanam - pluralizable: river, mountain), Proper Noun (Visheshnam - singular only: Ganga, Himalaya), Abstract Noun (Bhavvachak - qualities: beauty, honesty, courage)",
                                            chips: ["सामान्यनाम (जातीवाचक)", "विशेषनाम (व्यक्तिवाचक)", "भाववाचक नाम (गुणवाचक)"]
                                        },
                                        {
                                            id: "st_gb_m03_01_03",
                                            titleMr: "भाववाचक नामांची निर्मिती (प्रत्यय): सामान्यनाम, विशेषण, धातू यांना 'य', 'त्व', 'पण', 'पणा', 'ई', 'ता', 'गिरी', 'की', 'वा' हे प्रत्यय लागून भाववाचक नामे बनतात (उदा. सुंदर -> सौंदर्य, मनुष्य -> मनुष्यत्व, शहाणा -> शहाणपण, पाटील -> पाटीलकी, गुलाम -> गुलामी/गुलामगिरी, गोड -> गोडी, नम्र -> नम्रता)",
                                            titleEn: "Formation of Abstract Nouns: Suffixes attached to adjectives/nouns/verbs: -ya (Saundarya), -tva (Manushyatva), -pan/-pana (Shahapan), -giri (Gulamgiri), -ki (Patilki), -ta (Namrata)",
                                            chips: ["भाववाचक नाम प्रत्यय (ता, त्व, पण, गिरी, की)", "शहाणपण, सौंदर्य, मनुष्यत्व"]
                                        },
                                        {
                                            id: "st_gb_m03_01_04",
                                            titleMr: "नामांचा एकमेकांसाठी कार्यात्मक वापर (MPSC आवडता प्रश्न): १) सामान्यनामाचा विशेषनामासारखा वापर (उदा. 'आमची **तारा** यंदा पास झाली' - तारा हे मुलीचे विशेषनाम बनले; 'आम्ही **नगरला** गेलो' - नगर म्हणजे अहमदनगर); २) विशेषनामाचा सामान्यनामासारखा वापर (उपमा किंवा गुण दर्शवताना अनेकवचनी - उदा. 'तुमचा मुलगा म्हणजे **कुंभकर्णच**' - झोपाळू व्यक्ती; 'आमच्या गावात बरेच **नारद** आहेत' - भांडणे लावणारे)",
                                            titleEn: "Functional Syntactic Shifts: Common Noun used as Proper Noun ('Tara' or 'Nagar'), Proper Noun used as Common Noun to denote allegorical quality ('Kumbhakarna' for heavy sleeper, 'Narada' for trouble-maker)",
                                            chips: ["कार्यात्मक वापर", "कुंभकर्ण (सामान्यनामासारखा वापर)", "नगरला गेलो (विशेषनाम वापर)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सुगम मराठी व्याकरण व लेखन", standard: "मो. रा. वाळंबे", chapterRef: "प्रकरण ४: शब्दांच्या जाती - नाम" },
                                        { book: "परिपूर्ण मराठी व्याकरण", standard: "बाळासाहेब शिंदे", chapterRef: "प्रकरण ३: नाम" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mar_c04",
                            code: "M04",
                            section: "B",
                            slug: "gender-number-case-and-crude-form-samanyarup",
                            nameMr: "लिंगविचार, वचनविचार, विभक्ती (८ प्रकार) आणि सामान्यरूप",
                            nameEn: "Gender, Number, Case Inflections (8 Vibhakti) & Stem Modifications (Samanyarup)",
                            name: "लिंग, वचन, विभक्ती व सामान्यरूप (Declensions & Cases)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 5,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mar_c04",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mar_c03",
                            nextChapterId: "gb_mar_c05",
                            metaDescriptionMr: "लिंग (पुल्लिंग, स्त्रीलिंग, नपुंसकलिंग), वचन (एकवचन, अनेकवचन), ८ विभक्ती व त्यांचे कारकार्थ (प्रथमा कर्ता, द्वितीया कर्म, तृतीया करण, चतुर्थी संप्रदान, पंचमी अपादान, षष्ठी संबंध, सप्तमी अधिकरण, संबोधन हाक), आणि सामान्यरूप नियम.",
                            metaDescriptionEn: "In-depth review of Declensions: 3 Genders, Grammatical Number, 8 Vibhakti Cases & Primary Semantic Roles (Karta, Karma, Karana, Sampradana, Apadana, Sambandha, Adhikarana, Sambodhana), and Samanyarup (Stem modifications before postpositions).",
                            notesJsonPath: "/data/notes/group_b/mains/marathi/c04_declensions_cases.json",
                            quizTag: "gb_mar_vibhakti_01",
                            tags: ["Marathi Grammar", "Gender Number", "Vibhakti 8 Cases", "Karakartha", "Sampradana Apadana", "Samanyarup", "High-Weightage"],
                            searchKeywords: ["marathi vibhakti 8 types chart karakartha", "prathama karta dvitiya karma tritiya karana", "chaturthi sampradana panchami apadana saptami adhikarana", "marathi ling vachan vichar", "samanyarup rules stem changes", "विभक्ती ८ प्रकार व कारकार्थ", "प्रथमा कर्ता द्वितीया कर्म", "तृतीया करण चतुर्थी संप्रदान", "पंचमी अपादान सप्तमी अधिकरण", "सामान्यरूप नियम", "लिंग व वचन विचार"],
                            topics: [
                                {
                                    id: "top_gb_m04_01",
                                    nameMr: "व्याकरणीय लिंग-वचन, विभक्ती प्रत्यय, मुख्य कारकार्थ आणि सामान्यरूप",
                                    nameEn: "Grammatical Gender-Number, Case Suffixes, Semantic Roles & Stem Morphologies",
                                    subtopics: [
                                        {
                                            id: "st_gb_m04_01_01",
                                            titleMr: "लिंगविचार (Gender): मराठीत ३ लिंगे आहेत: पुल्लिंग ('तो'), स्त्रीलिंग ('ती'), नपुंसकलिंग ('ते'); काल्पनिक लिंग व्यवस्था; काही प्राणीवाचक नामांचे लिंग प्रत्यय लावून बदलते (उदा. वाघ-वाघीण, घोडा-घोडी, उंट-सांडणी, हंस-हंसी); दोन्ही/तीन्ही लिंगात आढळणारे शब्द (उदा. पोर, मूल, तट्टू, मांजर)",
                                            titleEn: "Gender: 3 Grammatical Genders: Masculine (To), Feminine (Ti), Neuter (Te); Irregular feminine suffixations (Vagh-Vaghin, Unt-Sandani); Ambiguous multi-gender nouns (Por, Mool, Manjar)",
                                            chips: ["पुल्लिंग, स्त्रीलिंग, नपुंसकलिंग", "वाघ-वाघीण", "उंट-सांडणी", "तीन्ही लिंगात आढळणारे शब्द"]
                                        },
                                        {
                                            id: "st_gb_m04_01_02",
                                            titleMr: "वचनविचार (Number): १) एकवचन, २) अनेकवचन (बहुवचन); आकारांत पुल्लिंगी नामाचे अनेकवचन एकांत होते (उदा. आंबा-आंबे, घोडा-घोडे; अपवाद: आजोबा, काका, दादा बदलत नाहीत); नेहमी अनेकवचनी आढळणारे शब्द: डोहाळे, रोमांच, आदरार्थी अनेकवचन (उदा. 'गुरुजी आले')",
                                            titleEn: "Number: Singular vs Plural; Masculine 'a'-ending becomes 'e' (Amba-Ambe, Ghoda-Ghode; Exceptions: Kaka, Ajoba invariant); Inherent plurals (Dohale, Romancha); Honorific pluralism (Guru-ji aale)",
                                            chips: ["एकवचन व अनेकवचन", "आकारांत ते एकांत (आंबे)", "आदरार्थी अनेकवचन", "नेहमी अनेकवचनी शब्द"]
                                        },
                                        {
                                            id: "st_gb_m04_01_03",
                                            titleMr: "विभक्ती व त्यांचे मुख्य कारकार्थ (MPSC हमखास प्रश्न तक्ता): १) प्रथमा (प्रत्यय नाही - कारकार्थ: कर्ता); २) द्वितीया (सलाते, सलानाते - कारकार्थ: कर्म); ३) तृतीया (ने, ए, शी, नी - कारकार्थ: करण / साधन); ४) चतुर्थी (सलाते, सलानाते - कारकार्थ: संप्रदान / दान किंवा भेट); ५) पंचमी (ऊन, हून - कारकार्थ: अपादान / वियोग किंवा दुरावा); ६) षष्ठी (चा, ची, चे, च्या - कारकार्थ: संबंध); ७) सप्तमी (त, ई, आ - कारकार्थ: अधिकरण / स्थळ किंवा काळ); ८) संबोधन (नो - कारकार्थ: हाक मारणे)",
                                            titleEn: "8 Vibhakti Cases & Prime Semantic Roles (Karakartha): Prathama (No suffix, Karta), Dvitiya (sa/la/te, Karma), Tritiya (ne/e/shee, Karana/Instrument), Chaturthi (sa/la/te, Sampradana/Donation), Panchami (un/hoon, Apadana/Separation), Shashthi (cha/chi/che, Sambandha), Saptami (t/ee/aa, Adhikarana/Location-Time), Sambodhana (no, Call/Address)",
                                            chips: ["प्रथमा (कर्ता)", "द्वितीया (कर्म)", "तृतीया (करण / साधन)", "चतुर्थी (संप्रदान / दान)", "पंचमी (अपादान / वियोग)", "सप्तमी (अधिकरण / स्थळ)", "संबोधन (हाक)"]
                                        },
                                        {
                                            id: "st_gb_m04_01_04",
                                            titleMr: "द्वितीया विरुद्ध चतुर्थी विभक्तीतील फरक: द्वितीया ही केवळ प्रत्यक्ष कर्माला प्रत्यय लागल्यास होते (उदा. 'रामाने रावणास मारले' - रावणास = द्वितीया); जेव्हा वाक्यात दानाची किंवा देण्याची क्रिया होते आणि ज्याला दान दिले जाते त्याला प्रत्यय लागतो तेव्हा चतुर्थी होते (उदा. 'राजाने भिकाऱ्यास दान दिले' - भिकाऱ्यास = चतुर्थी, संप्रदान)",
                                            titleEn: "Dvitiya vs Chaturthi Distinction: Dvitiya applies strictly to Direct Object (Raone Ravanas marle); Chaturthi applies when recipient receives gift/donation (Rajane bhikaryas dan dile - Sampradana)",
                                            chips: ["द्वितीया vs चतुर्थी फरक", "दानाचा अर्थ = चतुर्थी (संप्रदान)", "थेट कर्म = द्वितीया"]
                                        },
                                        {
                                            id: "st_gb_m04_01_05",
                                            titleMr: "सामान्यरूप (Samanyarup): नामाला किंवा सर्वनामाला विभक्ती प्रत्यय किंवा शब्दयोगी अव्यय जोडताना त्याच्या मूळ रूपात जो बदल होतो, त्याला 'सामान्यरूप' म्हणतात; उदा. 'घोडा' + ला = 'घोड्या'ला (सामान्यरूप: घोड्या); 'पाणी' + त = 'पाण्या'त; 'झाड' + वर = 'झाडा'वर; सामान्यरूप न होणारे शब्द (उदा. साधू, कवी, काका)",
                                            titleEn: "Samanyarup (Stem Mutation): Inflectional base modification before attaching case suffixes or postpositions; e.g., Ghoda -> Ghodya-la (Samanyarup: Ghodya), Paani -> Panya-t, Jhad -> Jhada-var; Unchanged stems",
                                            chips: ["सामान्यरूप (Samanyarup)", "घोडा -> घोड्याला", "झाड -> झाडावर", "सामान्यरूपाचे नियम"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सुगम मराठी व्याकरण व लेखन", standard: "मो. रा. वाळंबे", chapterRef: "प्रकरण ५, ६, ७, ८: लिंग, वचन, विभक्ती व सामान्यरूप" },
                                        { book: "परिपूर्ण मराठी व्याकरण", standard: "बाळासाहेब शिंदे", chapterRef: "प्रकरण ४ व ५: विभक्ती व कारकार्थ" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mar_c05",
                            code: "M05",
                            section: "B",
                            slug: "pronouns-adjectives-verbs-and-akhyat-vichar",
                            nameMr: "सर्वनाम, विशेषण, क्रियापद आणि आख्यात विचार (काळ व अर्थ)",
                            nameEn: "Pronouns, Adjectives, Verbs & Akhyat Vichar (Conjugation & Moods)",
                            name: "सर्वनाम, विशेषण व क्रियापद (Pronouns, Adjectives & Verbs)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 5,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mar_c05",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mar_c04",
                            nextChapterId: "gb_mar_c06",
                            metaDescriptionMr: "सर्वनामाचे ६ प्रकार (मूलभूत ९ सर्वनामे), विशेषणाचे ३ मुख्य प्रकार (गुण, संख्या, सार्वनामिक), क्रियापदाचे प्रकार (सकर्मक, अकर्मक, द्विकर्मक, प्रयोजक, शक्य), आख्यात विचार (७ आख्यात), आणि क्रियापदाचे ४ अर्थ.",
                            metaDescriptionEn: "In-depth review of Pronouns (9 basic, 6 types), Adjectives (Qualitative, Numerical, Pronominal), Verbs (Transitive, Intransitive, Divalent, Causal, Potential), Akhyat Vichar (7 Akhyat inflections), and Verb Moods (Swarth, Aagnyarth, Vidyarth, Sanketarth).",
                            notesJsonPath: "/data/notes/group_b/mains/marathi/c05_pronouns_adjectives_verbs.json",
                            quizTag: "gb_mar_verbs_01",
                            tags: ["Marathi Grammar", "Pronouns 6 Types", "Adjectives", "Verbs Sakarmak Akarmak", "Akhyat Vichar 7 Types", "Vidyarth Sanketarth", "High-Weightage"],
                            searchKeywords: ["marathi pronouns 9 basic 6 types purushvachak", "adjectives gunavachak sankhyavachak sarvanamik", "verbs sakarmak akarmak prayojak shakya", "akhyat vichar 7 akhyats ta l v u il", "verb moods swarth aagnyarth vidyarth sanketarth", "सर्वनाम ६ प्रकार ९ मूळ सर्वनामे", "विशेषण गुण संख्या सार्वनामिक", "सकर्मक व अकर्मक क्रियापद", "प्रयोजक व शक्य क्रियापद", "आख्यात विचार ७ आख्यात", "स्वार्थ आज्ञार्थ विध्यर्थ संकेतार्थ"],
                            topics: [
                                {
                                    id: "top_gb_m05_01",
                                    nameMr: "सर्वनामांचे प्रकार, विशेषण कार्य, क्रियापद भेद आणि आख्यात विकार",
                                    nameEn: "Pronominal Taxonomy, Adjectival Attributes, Verbal Valency & Conjugations",
                                    subtopics: [
                                        {
                                            id: "st_gb_m05_01_01",
                                            titleMr: "सर्वनाम (Pronouns): नामाऐवजी येणारा विकारी शब्द; मराठीत मूळ ९ सर्वनामे आहेत (मी, तू, तो, हा, जो, कोण, काय, आपण, स्वतः); सर्वनामांचे ६ प्रकार: १) पुरुषवाचक (प्रथम, द्वितीय, तृतीय पुरुष); २) दर्शक (हा, ही, हे, तो, ती, ते); ३) संबंधी (जो, जी, जे); ४) प्रश्नार्थक (कोण, काय - प्रश्न विचारण्यासाठी); ५) सामान्य / अनिश्चित (कोण, काय - निश्चित व्यक्तीचा बोध न होणे); ६) आत्मवाचक (आपण, स्वतः - 'त्याने **स्वतः** पाहिले')",
                                            titleEn: "Pronouns: 9 Basic Pronouns; 6 Functional Types: Personal (1st/2nd/3rd Person), Demonstrative (Ha, To), Relative (Jo), Interrogative (Kaun, Kaay with question), Indefinite, Reflexive (Aapan, Swatah)",
                                            chips: ["मूळ ९ सर्वनामे", "६ प्रकार", "दर्शक व संबंधी", "अनिश्चित सर्वनाम", "आत्मवाचक (स्वतः, आपण)"]
                                        },
                                        {
                                            id: "st_gb_m05_01_02",
                                            titleMr: "विशेषण (Adjectives): नामाबद्दल विशेष माहिती सांगून त्याची व्याप्ती मर्यादित करणारा शब्द; ३ मुख्य प्रकार: १) गुणविशेषण (कडू, गोड, हुशार, उंच); २) संख्याविशेषण (गणनावाचक, क्रमवाचक, आवृत्तीवाचक, पृथक्त्ववाचक, अनिश्चित); ३) सार्वनामिक विशेषण (सर्वनामापासून बनलेले - उदा. 'माझे पुस्तक', 'असा माणूस'); स्थानानुसार: अधिविशेषण (नामाच्या आधी) व विधिविशेषण (नामानंतर)",
                                            titleEn: "Adjectives: 3 Core Classes: Qualitative (Gunavachak: sweet, tall), Numerical (Sankhyavachak: cardinal, ordinal, multiplicative, distributive), Pronominal (Sarvanamik: my book); Attributive (Adhi) vs Predicative (Vidhi)",
                                            chips: ["गुणविशेषण", "संख्याविशेषण (क्रम, आवृत्ती)", "सार्वनामिक विशेषण", "अधिविशेषण व विधिविशेषण"]
                                        },
                                        {
                                            id: "st_gb_m05_01_03",
                                            titleMr: "क्रियापद व त्याचे प्रकार (Verbs): वाक्याचा अर्थ पूर्ण करणारा क्रियावाचक शब्द; १) सकर्मक (कर्माची गरज असणारे); २) अकर्मक (कर्माची गरज नसणारे - क्रिया कर्त्यापाशीच थांबते); ३) द्विकर्मक (प्रत्यक्ष कर्म वस्तू व अप्रत्यक्ष कर्म व्यक्ती); ४) उभयविध (सकर्मक व अकर्मक दोन्ही प्रकारे वापरले जाणारे); ५) प्रायोजक (दुसऱ्याकडून क्रिया करवून घेणे - उदा. 'आई बाळाला हसविते'); ६) शक्य (कर्त्याला क्रिया करणे शक्य असणे - उदा. 'मला आता चालवते'); ७) भावकर्तृक (कर्ता अदृश्य असणे - उदा. 'सांज झाली')",
                                            titleEn: "Verbs: Transitive (Sakarmak), Intransitive (Akarmak), Divalent (Dvikarmak), Ergative/Ambitransitive (Ubhayavidha), Causal (Prayojak - Laughing the baby), Potential (Shakya - Able to walk), Impersonal (Bhavkartruk - Dawn broke)",
                                            chips: ["सकर्मक व अकर्मक क्रियापद", "द्विकर्मक (प्रत्यक्ष व अप्रत्यक्ष कर्म)", "प्रयोजक क्रियापद (हसविते)", "शक्य क्रियापद (चालवते)", "भावकर्तृक"]
                                        },
                                        {
                                            id: "st_gb_m05_01_04",
                                            titleMr: "आख्यात विचार (Akhyat Vichar - MPSC मुख्य परीक्षेचा कळीचा मुद्दा): क्रियापदाच्या रूपावरून काळ व अर्थ समजण्यासाठी होणाऱ्या प्रत्यय विकाराला 'आख्यात' म्हणतात; एकूण ७ आख्यात: १) वर्तमानकाळ = प्रथमाख्यात (ताख्यात - करतो), २) भूतकाळ = द्वितीयाख्यात (लाख्यात - केले), ३) भविष्यकाळ = तृतीयाख्यात (ईलाख्यात - करील), ४) आज्ञार्थ = उ-आख्यात (करावे/करा), ५) विध्यर्थ = वा-आख्यात (करावे), ६) रीती भूतकाळ = ई-आख्यात (करी), ७) संकेतार्थ भूतकाळ = ताख्यात",
                                            titleEn: "Akhyat Vichar (7 Conjugational Suffixes): Prathamakhyat/T-akhyat (Present: karto), Dvitiyakhyat/L-akhyat (Past: kele), Tritiyakhyat/Il-akhyat (Future: karil), U-akhyat (Imperative), Va-akhyat (Potential/Duty: karave), I-akhyat (Habitual past)",
                                            chips: ["७ आख्यात (Akhyat Vichar)", "ताख्यात (वर्तमान)", "लाख्यात (भूतकाळ)", "वा-आख्यात (विध्यर्थ कर्तव्य)", "ईलाख्यात (भविष्यकाळ)"]
                                        },
                                        {
                                            id: "st_gb_m05_01_05",
                                            titleMr: "क्रियापदाचे ४ अर्थ (Moods): १) स्वार्थ (केवळ काळाचा बोध - उदा. 'मुले अभ्यास करतात'); २) आज्ञार्थ (आज्ञा, विनंती, उपदेश, प्रार्थना - उदा. 'अभ्यास करा', 'देवा मला सुखी ठेव'); ३) विध्यर्थ (कर्तव्य, शक्यता, योग्यता, इच्छा - शेवटी वा/वी/वे असते - उदा. 'नेहमी खरे बोलावे', 'आज पाऊस पडावा'); ४) संकेतार्थ (अट दर्शवणारे - जर-तर - उदा. 'चांगला अभ्यास केला असता तर पास झाला असता')",
                                            titleEn: "4 Verbal Moods: Swarth (Indicative factual), Aagnyarth (Imperative command/prayer), Vidyarth (Obligation, duty, possibility ending in va/vi/ve: One ought to speak truth), Sanketarth (Conditional if-then)",
                                            chips: ["स्वार्थ (काळ बोध)", "आज्ञार्थ (आज्ञा, प्रार्थना)", "विध्यर्थ (कर्तव्य, वा/वी/वे)", "संकेतार्थ (जर-तर)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सुगम मराठी व्याकरण व लेखन", standard: "मो. रा. वाळंबे", chapterRef: "प्रकरण ९, १०, ११, १२: सर्वनाम, विशेषण, क्रियापद व आख्यात विचार" },
                                        { book: "परिपूर्ण मराठी व्याकरण", standard: "बाळासाहेब शिंदे", chapterRef: "प्रकरण ६ व ७: क्रियापद व आख्यात" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mar_c06",
                            code: "M06",
                            section: "B",
                            slug: "tenses-and-their-aspects-in-marathi",
                            nameMr: "काळ आणि काळाचे प्रकार (Tenses & Aspects)",
                            nameEn: "Tenses & Aspectual Variations: Simple, Continuous, Perfect & Habitual",
                            name: "काळ व काळाचे प्रकार (Tenses & Aspects)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mar_c06",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mar_c05",
                            nextChapterId: "gb_mar_c07",
                            metaDescriptionMr: "३ मुख्य काळ (वर्तमान, भूत, भविष्य) आणि प्रत्येकाचे ४ उपप्रकार (साधा, चालू/अपूर्ण, पूर्ण, रीती काळ), संयुक्त क्रियापदे, आणि काळांचे वाक्यातील रूपांतर.",
                            metaDescriptionEn: "In-depth review of Tenses: 3 Primary Tenses (Present, Past, Future) and 4 Sub-aspects each (Simple, Continuous/Imperfect, Perfect, Habitual/Reeti), Auxiliary verbs, and Tense transformations.",
                            notesJsonPath: "/data/notes/group_b/mains/marathi/c06_tenses.json",
                            quizTag: "gb_mar_tenses_01",
                            tags: ["Marathi Grammar", "Tenses", "Vartamankal", "Bhutkal", "Bhavishyakal", "Reeti Kal Habitual", "High-Weightage"],
                            searchKeywords: ["marathi tenses 3 main 4 aspects", "sadha apurna purna reeti vartamankal", "reeti bhutkal habitual past tense", "joint verbs sahayyak kriyapad tenses", "काळ आणि काळाचे प्रकार", "साधा चालू पूर्ण रीती काळ", "रीती भूतकाळ", "काळ ओळखणे व बदलणे"],
                            topics: [
                                {
                                    id: "top_gb_m06_01",
                                    nameMr: "काळांचे १२ उपप्रकार, रीती काळाची रचना आणि क्रियापद परिवर्तने",
                                    nameEn: "12 Aspectual Tense Variations, Habitual Formulations & Verb Transformations",
                                    subtopics: [
                                        {
                                            id: "st_gb_m06_01_01",
                                            titleMr: "वर्तमानकाळाचे ४ प्रकार: १) साधा वर्तमानकाळ (Simple Present: 'मी आंबा खातो'); २) अपूर्ण / चालू वर्तमानकाळ (Continuous Present: 'मी आंबा खात आहे'); ३) पूर्ण वर्तमानकाळ (Perfect Present: 'मी आंबा खाल्ला आहे'); ४) रीती वर्तमानकाळ (Habitual Present - सातत्य दर्शवणारा: 'मी आंबा खात असतो')",
                                            titleEn: "4 Aspects of Present Tense: Simple Present (Khato), Continuous Present (Khat aahe), Perfect Present (Khalla aahe), Habitual/Reeti Present (Khat asto)",
                                            chips: ["साधा वर्तमानकाळ", "चालू वर्तमानकाळ (खात आहे)", "पूर्ण वर्तमानकाळ (खाल्ला आहे)", "रीती वर्तमानकाळ (खात असतो)"]
                                        },
                                        {
                                            id: "st_gb_m06_01_02",
                                            titleMr: "भूतकाळाचे ४ प्रकार: १) साधा भूतकाळ (Simple Past: 'मी आंबा खाल्ला'); २) अपूर्ण / चालू भूतकाळ (Continuous Past: 'मी आंबा खात होतो'); ३) पूर्ण भूतकाळ (Perfect Past: 'मी आंबा खाल्ला होता'); ४) रीती भूतकाळ (Habitual Past - वारंवार विचारला जाणारा: 'मी आंबा खात असे' किंवा 'तो नियमित व्यायाम करी')",
                                            titleEn: "4 Aspects of Past Tense: Simple Past (Khalla), Continuous Past (Khat hota), Perfect Past (Khalla hota), Habitual/Reeti Past (Khat ase or Kari)",
                                            chips: ["साधा भूतकाळ", "चालू भूतकाळ (खात होतो)", "पूर्ण भूतकाळ (खाल्ला होता)", "रीती भूतकाळ (खात असे)"]
                                        },
                                        {
                                            id: "st_gb_m06_01_03",
                                            titleMr: "भविष्यकाळाचे ४ प्रकार: १) साधा भविष्यकाळ (Simple Future: 'मी आंबा खाईन'); २) अपूर्ण / चालू भविष्यकाळ (Continuous Future: 'मी आंबा खात असेन'); ३) पूर्ण भविष्यकाळ (Perfect Future: 'मी आंबा खाल्ला असेल'); ४) रीती भविष्यकाळ (Habitual Future: 'मी आंबा खात जाईन' / 'तो अभ्यास करत राहील')",
                                            titleEn: "4 Aspects of Future Tense: Simple Future (Khain), Continuous Future (Khat asen), Perfect Future (Khalla asel), Habitual/Reeti Future (Khat jaeen)",
                                            chips: ["साधा भविष्यकाळ", "चालू भविष्यकाळ (खात असेन)", "पूर्ण भविष्यकाळ (खाल्ला असेल)", "रीती भविष्यकाळ (खात जाईन)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सुगम मराठी व्याकरण व लेखन", standard: "मो. रा. वाळंबे", chapterRef: "प्रकरण १३: काळ व त्याचे प्रकार" },
                                        { book: "परिपूर्ण मराठी व्याकरण", standard: "बाळासाहेब शिंदे", chapterRef: "प्रकरण ८: काळ विचार" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mar_c07",
                            code: "M07",
                            section: "B",
                            slug: "indeclinables-adverbs-prepositions-conjunctions-interjections",
                            nameMr: "अविकारी शब्द (अव्यये): क्रियाविशेषण, शब्दयोगी, उभयान्वयी व केवळप्रयोगी",
                            nameEn: "Indeclinables (Avyaye): Adverbs, Postpositions, Conjunctions & Interjections",
                            name: "अविकारी अव्यये (Indeclinable Parts of Speech)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mar_c07",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mar_c06",
                            nextChapterId: "gb_mar_c08",
                            metaDescriptionMr: "क्रियाविशेषण अव्यये (कालवाचक, स्थलवाचक, रीतिवाचक, परिमाणवाचक), शब्दयोगी अव्यये (नामाला जोडून येणारे), उभयान्वयी अव्यये (प्रधानत्वसूचक व गौणत्वसूचक), आणि केवळप्रयोगी अव्यये (भावना व्यक्त करणारे).",
                            metaDescriptionEn: "In-depth review of Indeclinables: Adverbs (Temporal, Spatial, Manner, Quantitative), Postpositions (Shabdayogi attached to nouns), Conjunctions (Coordinating Pradhanatva vs Subordinating Gaunatva), and Interjections (Kevalprayogi emotions).",
                            notesJsonPath: "/data/notes/group_b/mains/marathi/c07_indeclinables.json",
                            quizTag: "gb_mar_avyay_01",
                            tags: ["Marathi Grammar", "Indeclinables Avyaye", "Adverbs Kriyavisheshan", "Postpositions Shabdayogi", "Conjunctions Ubhayanvayi", "High-Weightage"],
                            searchKeywords: ["marathi avikari avyaye 4 types", "kriyavisheshan avyay kal sthal reeti pariman", "shabdayogi avyay postpositions attached to noun", "ubhayanvayi avyay pradhanatva gaunatva samuchay bodhak", "kevalprayogi avyay interjections", "अविकारी शब्द अव्यये", "क्रियाविशेषण अव्यय रीती काल स्थल", "शब्दयोगी अव्यय झाडावर", "उभयान्वयी अव्यय प्रधानत्व गौणत्व", "केवळप्रयोगी अव्यय अरेरे शाब्बास"],
                            topics: [
                                {
                                    id: "top_gb_m07_01",
                                    nameMr: "चार अव्यये, वर्गीकरण, अर्थपूर्ण कार्य आणि वाक्यातील ओळख",
                                    nameEn: "Four Indeclinables Taxonomy, Relational Connectives & Syntactic Roles",
                                    subtopics: [
                                        {
                                            id: "st_gb_m07_01_01",
                                            titleMr: "क्रियाविशेषण अव्यये (Adverbs): क्रियेबद्दल विशेष माहिती सांगून अविकारी राहणारे शब्द; अर्थानुसार ४ प्रकार: १) कालवाचक (केव्हा घडले: काल, आज, सतत, वारंवार); २) स्थलवाचक (कोठे घडले: येथे, तेथे, पलीकडे, वर); ३) रीतिवाचक (कसे घडले: हळूहळू, जलद, मुद्दाम, फुकट); ४) परिमाणवाचक / संख्यावाचक (किती प्रमाण: खूप, थोडे, किंचित, अत्यंत)",
                                            titleEn: "Adverbs (Kriyavisheshan Avyay): 4 Semantic Classes: Temporal/Time (Kalvachak), Spatial/Place (Sthalvachak), Manner (Reetivachak: slowly, quickly), Quantity/Measure (Parimanvachak: much, little)",
                                            chips: ["क्रियाविशेषण अव्यय", "कालवाचक (आज, काल)", "स्थलवाचक (येथे, तेथे)", "रीतिवाचक (हळूहळू, जलद)", "परिमाणवाचक"]
                                        },
                                        {
                                            id: "st_gb_m07_01_02",
                                            titleMr: "शब्दयोगी अव्यये (Postpositions): नामाला किंवा सर्वनामाला जोडून येणारे आणि वाक्यातील इतर शब्दांशी संबंध जोडणारे शब्द (यामुळे नामाचे सामान्यरूप होते); उदा. 'टेबला**वर**', 'घरा**समोर**', 'मित्रा**सह**', 'देशा**साठी**'; प्रकार: कालवाचक, स्थलवाचक, करणवाचक, हेतूवाचक, तुलनावाचक, योग्यतावाचक; शुद्ध शब्दयोगी अव्यये (सामान्यरूप न करणारे: च, मात्र, ना, पण, देखील - उदा. 'तोच', 'मीदेखील')",
                                            titleEn: "Postpositions (Shabdayogi Avyay): Joined directly to nouns/pronouns inducing Samanyarup (e.g., Table-a-var, Ghara-samor); Shuddha Shabdayogi (Do NOT induce Samanyarup: cha, matra, pan, dekhil)",
                                            chips: ["शब्दयोगी अव्यय (जोडून येणारे)", "सामान्यरूप घडवणारे", "शुद्ध शब्दयोगी अव्यये (च, मात्र, पण, देखील)"]
                                        },
                                        {
                                            id: "st_gb_m07_01_03",
                                            titleMr: "उभयान्वयी अव्यये (Conjunctions): दोन शब्द किंवा दोन वाक्ये जोडणारे अविकारी शब्द; दोन मुख्य गट: १) प्रधानत्वसूचक (संयुक्त वाक्य बनवणारे): समुच्चयबोधक (आणि, व), विकल्पबोधक (किंवा, अथवा), न्यूनत्वबोधक (पण, परंतु, किंतु), परिणामबोधक (म्हणून, यास्तव); २) गौणत्वसूचक (मिश्र वाक्य बनवणारे): स्वरूपबोधक (म्हणजे, की), कारणबोधक (कारण, का की), उद्देशबोधक (म्हणून, यास्तव, यासाठी), संकेतबोधक (जर-तर)",
                                            titleEn: "Conjunctions (Ubhayanvayi Avyay): 1) Coordinating/Pradhanatva (Compound Sentences: Cumulative 'ani/va', Alternative 'kinva/athava', Adversative 'pan/parantu', Illative 'mhanun'); 2) Subordinating/Gaunatva (Complex Sentences: Causal, Purpose, Conditional 'jar-tar')",
                                            chips: ["समुच्चयबोधक (आणि, व)", "विकल्पबोधक (किंवा, अथवा)", "न्यूनत्वबोधक (पण, परंतु)", "परिणामबोधक (म्हणून)", "संकेतबोधक (जर-तर)"]
                                        },
                                        {
                                            id: "st_gb_m07_01_04",
                                            titleMr: "केवळप्रयोगी अव्यये (Interjections): मनातील तीव्र भावना, उद्वेग किंवा उद्गार व्यक्त करणारे अव्यय; प्रकार: हर्षदर्शक (अहाहा, वा!), शोकदर्शक (अरेरे, हाय!), आश्चर्यदर्शक (अरेबापरे, ओहो!), प्रशंसादर्शक (शाब्बास, छान!), संमतीदर्शक (ठीक, जी!), तिरस्कारदर्शक (छी, थू!), मौनदर्शक (गप, चूप!)",
                                            titleEn: "Interjections (Kevalprayogi Avyay): Spontaneous emotive utterances: Joy (Ahaha), Grief (Arere), Wonder (Bapre), Praise (Shabbas), Disgust (Chhee), Silence (Chup)",
                                            chips: ["केवळप्रयोगी अव्यय (उद्गारवाचक)", "हर्षदर्शक (वा, अहाहा)", "शोकदर्शक (अरेरे)", "प्रशंसादर्शक (शाब्बास)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सुगम मराठी व्याकरण व लेखन", standard: "मो. रा. वाळंबे", chapterRef: "प्रकरण १४, १५, १६, १७: अविकारी अव्यये" },
                                        { book: "परिपूर्ण मराठी व्याकरण", standard: "बाळासाहेब शिंदे", chapterRef: "प्रकरण ९, १०, ११, १२: अव्यय विचार" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग C — प्रयोग, समास व शब्दसिद्धी (High-Weightage Core Grammar)
                        // =========================================================================
                        {
                            id: "gb_mar_c08",
                            code: "M08",
                            section: "C",
                            slug: "prayog-kartari-karmani-bhave-and-sankar-prayog",
                            nameMr: "प्रयोग विचार: कर्तरी, कर्मणी, भावे आणि संकर (मिश्र) प्रयोग",
                            nameEn: "Voice & Concord (Prayog): Active, Passive, Impersonal & Composite Voices",
                            name: "प्रयोग विचार (Voice & Subject-Verb Agreement)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 5,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mar_c08",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mar_c07",
                            nextChapterId: "gb_mar_c09",
                            metaDescriptionMr: "प्रयोग ओळखण्याच्या क्लृप्त्या, कर्तरी प्रयोग (सकर्मक व अकर्मक), कर्मणी प्रयोग (प्रधानकर्तृक, शक्य, प्राचीन/पुरातन, समापन, नवीन कर्मणी), भावे प्रयोग (सकर्मक, अकर्मक, अकर्तुक), आणि संकर प्रयोग (कर्तृ-कर्म, कर्तृ-भाव, कर्म-भाव).",
                            metaDescriptionEn: "Exhaustive coverage of Prayog: Kartari (Active - Subject in Prathama), Karmani (Passive - 5 sub-types: Pradhan-kartruk, Shakya, Puratan, Samapan, Navin Karmani by/kadoon), Bhave (Impersonal), and Sankar/Mishra composite voices.",
                            notesJsonPath: "/data/notes/group_b/mains/marathi/c08_prayog.json",
                            quizTag: "gb_mar_prayog_01",
                            tags: ["Core-Grammar", "Prayog", "Kartari Prayog", "Karmani Prayog 5 Types", "Bhave Prayog", "Sankar Prayog", "High-Weightage"],
                            searchKeywords: ["marathi prayog shortcut tricks identification", "kartari prayog sakarmak akarmak prathama", "karmani prayog pradhankartruk shakya samapan puratan navin karmani", "bhave prayog tritiya chaturthi ekvachani napunsaklingi", "sankar prayog kartri-karma kartri-bhava karma-bhava", "प्रयोग विचार क्लृप्त्या", "कर्तरी प्रयोग कर्ता प्रथमा", "कर्मणी प्रयोग ५ प्रकार", "शक्य कर्मणी समापन कर्मणी", "नवीन कर्मणी पॅसिव्ह व्हॉईस", "भावे प्रयोग", "संकर प्रयोग"],
                            topics: [
                                {
                                    id: "top_gb_m08_01",
                                    nameMr: "कर्तरी, कर्मणी व भावे प्रयोगांची लक्षणे, उपप्रकार आणि संकर प्रयोग",
                                    nameEn: "Tri-fold Voice Mechanics, Passive Sub-types, Impersonal Concord & Hybrids",
                                    subtopics: [
                                        {
                                            id: "st_gb_m08_01_01",
                                            titleMr: "कर्तरी प्रयोग (Active Voice): क्रियापद हे कर्त्याच्या लिंग, वचन व पुरुषानुसार बदलते; सुवर्ण नियम: कर्ता नेहमी 'प्रथमा' विभक्तीत असतो (कर्त्याला कोणताही प्रत्यय नसतो); १) सकर्मक कर्तरी (कर्म असते व त्याला प्रत्यय असू शकतो किंवा नसतो - उदा. 'राम आंबा खातो', 'तो निबंध लिहितो'); २) अकर्मक कर्तरी (कर्म नसते - उदा. 'तो हसतो', 'ती गावी जाते')",
                                            titleEn: "Kartari Prayog (Active): Verb agrees with Subject's gender/number; Golden Rule: Subject is STRICTLY in Prathama (uninflected); Sakarmak (with object: 'Ram eats mango') vs Akarmak (intransitive: 'He laughs')",
                                            chips: ["कर्तरी प्रयोग (कर्ता नेहमी प्रथमा)", "सकर्मक कर्तरी", "अकर्मक कर्तरी", "क्रियापद कर्त्यानुसार बदलते"]
                                        },
                                        {
                                            id: "st_gb_m08_01_02",
                                            titleMr: "कर्मणी प्रयोग (Passive Voice): क्रियापद हे कर्माच्या लिंग व वचनानुसार बदलते; सुवर्ण नियम: कर्त्याला तृतीया किंवा चतुर्थी प्रत्यय असतो आणि कर्म नेहमी 'प्रथमा' विभक्तीत (प्रत्ययरहित) असते; क्रियापद भूतकाळी असते; उदा. 'रामाने आंबा खाल्ला', 'मुलांनी चित्रे काढली'",
                                            titleEn: "Karmani Prayog (Passive): Verb agrees with Object; Golden Rule: Subject has Tritiya/Chaturthi suffix, Object is strictly in Prathama (uninflected); Verb is in past tense",
                                            chips: ["कर्मणी प्रयोग (कर्म नेहमी प्रथमा)", "कर्ता तृतीयेत", "क्रियापद कर्मानुसार बदलते", "रामाने आंबा खाल्ला"]
                                        },
                                        {
                                            id: "st_gb_m08_01_03",
                                            titleMr: "कर्मणी प्रयोगाचे ५ उपप्रकार (MPSC हमखास प्रश्न): १) प्रधानकर्तृक कर्मणी (कर्त्याला तृतीया प्रत्यय - 'रामाने काम केले'); २) शक्य कर्मणी (कर्त्याला क्रिया करणे शक्य असणे - 'त्याच्याने काम करवते'); ३) समापन कर्मणी (क्रिया पूर्ण झाल्याचे दर्शवणे, षष्ठी+ऊन - 'त्याचा अभ्यास करून झाला'); ४) पुरातन / प्राचीन कर्मणी (संस्कृत 'ज' प्रत्यय - 'जो जे वांछील तो ते लाहो', 'काय कर्म करीजे'); ५) नवीन कर्मणी / कर्मकर्तरी (इंग्रजी पॅसिव्ह व्हॉईस - 'कडून' प्रत्यय - 'चोरावर पोलिसांकडून लाठीमार करण्यात आला')",
                                            titleEn: "5 Sub-types of Karmani: 1) Pradhan-kartruk (Basic agentive: Ramane kam kele), 2) Shakya (Potential: Tyachyane kam karavate), 3) Samapan (Completion: Tyacha abhyas karun jhala), 4) Puratan/Ancient (Archaic 'j' suffix: Karije, boliyele), 5) Navin Karmani/Passive ('Kadoon' agent: Poliisankadoon chor dharla gela)",
                                            chips: ["प्रधानकर्तृक कर्मणी", "शक्य कर्मणी (करवते)", "समापन कर्मणी (करून झाला)", "पुरातन कर्मणी (करीजे)", "नवीन कर्मणी ('कडून' प्रत्यय)"]
                                        },
                                        {
                                            id: "st_gb_m08_01_04",
                                            titleMr: "भावे प्रयोग (Impersonal Voice): क्रियापद कर्त्यानुसार किंवा कर्मानुसार बदलत नाही, ते नेहमी तृतीयपुरुषी, नपुंसकलिंगी, एकवचनी व स्वतंत्र असते; सुवर्ण नियम: कर्त्याला व कर्माला दोघांनाही विभक्ती प्रत्यय असतो; १) सकर्मक भावे (उदा. 'रामाने रावणास मारले'); २) अकर्मक भावे (कर्म नसते - उदा. 'मुलांनी शांत बसावे', 'त्याने पळावे'); ३) अकर्तुक भावे / भावकर्तरी (कर्ता अदृश्य - उदा. 'आज दिवसभर सारखे गडगडते')",
                                            titleEn: "Bhave Prayog (Impersonal): Verb remains invariant in 3rd person singular neuter; Golden Rule: BOTH Subject and Object take case suffixes; Sakarmak ('Ramane Ravanas marle'), Akarmak ('Tyanne palave'), Akartruk/Bhavkartari ('Divasbhar gadgadte')",
                                            chips: ["भावे प्रयोग (कर्ता व कर्म दोघांना प्रत्यय)", "सकर्मक भावे (रामाने रावणास मारले)", "अकर्मक भावे", "अकर्तुक भावे (गडगडते)"]
                                        },
                                        {
                                            id: "st_gb_m08_01_05",
                                            titleMr: "संकर / मिश्र प्रयोग (Composite Voices): दोन प्रयोगांचे मिश्रण एकाच वाक्यात आढळणे; १) कर्तृ-कर्म संकर (उदा. 'तू पेरू खाल्लास' - कर्तरी व कर्मणी दोन्ही लक्षणे); २) कर्तृ-भाव संकर (उदा. 'तू गाढवाला मारलेस'); ३) कर्म-भाव संकर (उदा. 'राजाने शिपायाला बोलावले')",
                                            titleEn: "Sankar/Mishra Prayog (Hybrid Voices): Blending characteristics of two voices in a single predicate: Kartri-Karma, Kartri-Bhava, and Karma-Bhava",
                                            chips: ["संकर प्रयोग (मिश्र प्रयोग)", "कर्तृ-कर्म संकर (तू पेरू खाल्लास)", "कर्तृ-भाव संकर", "कर्म-भाव संकर"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सुगम मराठी व्याकरण व लेखन", standard: "मो. रा. वाळंबे", chapterRef: "प्रकरण १८: प्रयोग विचार" },
                                        { book: "परिपूर्ण मराठी व्याकरण", standard: "बाळासाहेब शिंदे", chapterRef: "प्रकरण १३: प्रयोग व प्रयोगाचे प्रकार" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mar_c09",
                            code: "M09",
                            section: "C",
                            slug: "samas-av Yayibhav-tatpurush-dvandva-and-bahuvrihi",
                            nameMr: "समास विचार: अव्ययीभाव, तत्पुरुष, द्वंद्व आणि बहुव्रीहि समास",
                            nameEn: "Compound Words (Samas): Avyayibhav, Tatpurush, Dvandva & Bahuvrihi",
                            name: "समास व समासाचे प्रकार (Compound Words / Samas)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 5,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mar_c09",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mar_c08",
                            nextChapterId: "gb_mar_c10",
                            metaDescriptionMr: "समासाचे ४ मुख्य प्रकार (पहिले पद प्रधान = अव्ययीभाव, दुसरे पद प्रधान = तत्पुरुष, दोन्ही पदे प्रधान = द्वंद्व, दोन्ही पदे गौण तिसराच अर्थ = बहुव्रीहि), कर्मधारय, द्विगु, मध्यमपदलोपी, आणि उपप्रकार.",
                            metaDescriptionEn: "In-depth review of Samas: 4 Cardinal Compound Types based on head-word dominance: Avyayibhav (1st word dominant), Tatpurush (2nd word dominant: Vibhakti, Karmadharay, Dvigu, Madhyamapadlopi, Aluk, Upapada), Dvandva (Both words dominant), and Bahuvrihi (Third entity reference).",
                            notesJsonPath: "/data/notes/group_b/mains/marathi/c09_samas.json",
                            quizTag: "gb_mar_samas_01",
                            tags: ["Core-Grammar", "Samas", "Avyayibhav Samas", "Tatpurush Karmadharay Dvigu", "Dvandva Samas", "Bahuvrihi Samas", "High-Weightage"],
                            searchKeywords: ["marathi samas 4 types vigraha rules", "avyayibhav samas pratham pad pradhan yathashakti prathidin", "tatpurush samas vibhakti karmadharay dvigu madhyamapadlopi", "dvandva samas itaretar vikalpak samahar", "bahuvrihi samas pradhan tisra arth gajanan lambodar", "समास विचार", "अव्ययीभाव समास यथाशक्ती प्रतिदिन", "तत्पुरुष समास कर्मधारय द्विगु", "मध्यमपदलोपी पुरणपोळी", "द्वंद्व समास", "बहुव्रीहि समास गजानन चक्रपाणी"],
                            topics: [
                                {
                                    id: "top_gb_m09_01",
                                    nameMr: "पदांच्या प्राधान्यावरून समासाचे ४ प्रकार, विग्रह आणि उपप्रकार",
                                    nameEn: "Compound Head-Word Dominance Hierarchy, Dissolution & Sub-Types",
                                    subtopics: [
                                        {
                                            id: "st_gb_m09_01_01",
                                            titleMr: "१) अव्ययीभाव समास (पहिले पद प्रधान): सामासिक शब्दातील पहिले पद महत्त्वाचे असून तो शब्द क्रियाविशेषण अव्ययाप्रमाणे कार्य करतो; उदा. १) संस्कृत उपसर्ग: यथा, प्रति, आ (यथाशक्ती, प्रतिदिन, आजन्म, आमरण); २) फारसी उपसर्ग: दर, हर, बे, बिन, गैर (दररोज, हरघडी, बेमालूम, बिनधास्त, गैरहजर); ३) शब्दांची द्विरुक्ती: गावोगाव, गल्लोगल्ली, दिवसेंदिवस, दारोदार",
                                            titleEn: "Avyayibhav Samas (1st Word Dominant): Compound behaves as an adverb; Sanskrit prefixes (Yatha, Prati, Aa: Yathashakti, Pratidin, Ajanma), Persian prefixes (Dar, Har, Be, Bin: Darroj, Bindhast), Reduplication (Gayogav, Gallogalli)",
                                            chips: ["अव्ययीभाव (पहिले पद प्रधान)", "यथाशक्ती, आजन्म (संस्कृत उपसर्ग)", "दररोज, बिनधास्त (फारसी उपसर्ग)", "गावोगाव, दिवसेंदिवस (द्विरुक्ती)"]
                                        },
                                        {
                                            id: "st_gb_m09_01_02",
                                            titleMr: "२) तत्पुरुष समास (दुसरे पद प्रधान): उपप्रकार: १) विभक्ती तत्पुरुष (विभक्ती प्रत्ययाचा लोप - उदा. सुखप्राप्त, तोंडपाठ, राजपुत्र, घरकाम); २) कर्मधारय समास (विशेषण + नाम संबंध - उदा. नीलकमल, रक्तचंदन, मुखचंद्रमा, महाराष्ट्र); ३) द्विगु समास (पहिले पद संख्याविशेषण - उदा. त्रिभुवन, नवरात्र, पंचवटी, त्रैलोक्य); ४) मध्यमपदलोपी समास (मधली पदे गाळणे - उदा. पुरणपोळी = पुरण घालून केलेली पोळी, कांदेपोहे, वांगीभात); ५) उपपद / कृदंत तत्पुरुष (दुसरे पद धातूसाधित - उदा. कुंभार = कुंभ करणारा, पंकज, नीरज); ६) नत्र तत्पुरुष (नकारार्थी - अ, अन, ना, बे - उदा. अयोग्य, नापसंत, अनादर); ७) अलुक तत्पुरुष (विभक्ती प्रत्ययाचा लोप न होणे - उदा. युधिष्ठिर, पंकेरुह, सरसिज)",
                                            titleEn: "Tatpurush Samas (2nd Word Dominant): Vibhakti Tatpurush, Karmadharay (Adjective-noun: Neelkamal, Maharashtra), Dvigu (Number prefix: Navaratra, Panchavati), Madhyamapadlopi (Dropped middle words: Puranpoli, Kande-pohe), Upapada/Kridanta (Pankaj, Kumbhar), Natra (Negative prefix: Ayogya), Aluk (Retained case suffix: Yudhishthira)",
                                            chips: ["तत्पुरुष (दुसरे पद प्रधान)", "कर्मधारय (नीलकमल)", "द्विगु (संख्या पंचवटी, नवरात्र)", "मध्यमपदलोपी (पुरणपोळी, कांदेपोहे)", "उपपद तत्पुरुष (पंकज)", "अलुक (युधिष्ठिर)"]
                                        },
                                        {
                                            id: "st_gb_m09_01_03",
                                            titleMr: "३) द्वंद्व समास (दोन्ही पदे प्रधान): दोन्ही पदांना जोडण्यासाठी उभयान्वयी अव्ययाचा वापर; ३ उपप्रकार: १) इतरेतर द्वंद्व ('आणि', 'व' ने विग्रह - उदा. आई-वडील, बहीण-भाऊ, स्त्री-पुरुष, कृष्णार्जुन); २) वैकल्पिक द्वंद्व ('किंवा', 'अथवा' ने विग्रह, परस्परविरोधी - उदा. खरे-खोटे, बरे-वाईट, पाप-पुण्य, पास-नापास); ३) समाहार द्वंद्व (त्याच जातीच्या इतर घटकांचा समावेश 'वगैरे' - उदा. मीठ-भाकर, चहा-पाणी, शेती-वाडी, केर-कचरा)",
                                            titleEn: "Dvandva Samas (Both Words Dominant): 1) Itaretar ('ani/va' conjunctive: Aai-Vadil, Bahin-Bhau), 2) Vaikalpik ('kinva/athava' alternative opposites: Khare-Khote, Pap-Punya), 3) Samahar ('vagere' category collective: Meeth-Bhakar, Chaha-Pani)",
                                            chips: ["द्वंद्व समास (दोन्ही पदे प्रधान)", "इतरेतर द्वंद्व (आई-वडील, आणि/व)", "वैकल्पिक द्वंद्व (खरे-खोटे, किंवा)", "समाहार द्वंद्व (मीठ-भाकर वगैरे)"]
                                        },
                                        {
                                            id: "st_gb_m09_01_04",
                                            titleMr: "४) बहुव्रीहि समास (दोन्ही पदे गौण, तिसऱ्याच घटकाचा बोध): सामासिक शब्दावरून तिसऱ्याच घटकाचे विशेषण तयार होते; उपप्रकार: १) समानाधिकरण बहुव्रीहि (दोन्ही पदांची विभक्ती प्रथमा - उदा. गजानन = गजासारखे आनन ज्याचे तो - गणपती, लंबोदर, पीतांबर); २) व्यधिकरण बहुव्रीहि (दोन्ही पदांची विभक्ती भिन्न - उदा. भालचंद्र = भालावर चंद्र ज्याचा तो - शिव, चक्रपाणी = चक्र आहे पाणीत ज्याच्या तो - विष्णू); ३) सहबहुव्रीहि (स / सह उपसर्ग - सानंद, सफल); ४) नत्र बहुव्रीहि (अनंत = नाही अंत ज्याला तो, निरक्षर)",
                                            titleEn: "Bahuvrihi Samas (Third Entity Dominant): Neither word is dominant; acts as adjective for third entity; Samanadhikarana (Gajanan, Lambodar, Pitambar), Vyadhikarana (Bhalachandra, Chakra-pani), Saha-bahuvrihi (Sananda), Natra-bahuvrihi (Ananta)",
                                            chips: ["बहुव्रीहि (तिसरा अर्थ प्रधान)", "गजानन, लंबोदर (गणपती)", "भालचंद्र, चक्रपाणी (शिव/विष्णू)", "पीतांबर", "अनंत"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सुगम मराठी व्याकरण व लेखन", standard: "मो. रा. वाळंबे", chapterRef: "प्रकरण १९: समास विचार" },
                                        { book: "परिपूर्ण मराठी व्याकरण", standard: "बाळासाहेब शिंदे", chapterRef: "प्रकरण १४: समास व विग्रह" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mar_c10",
                            code: "M10",
                            section: "C",
                            slug: "shabdasiddhi-tatsam-tadbhav-deshi-and-foreign-loanwords",
                            nameMr: "शब्दसिद्धी: तत्सम, तद्भव, देशी, परभाषीय (परकीय) शब्द व साधित शब्द",
                            nameEn: "Word Formation (Shabdasiddhi): Tatsam, Tadbhav, Indigenous Deshi & Loanwords",
                            name: "शब्दसिद्धी व शब्द उत्पत्ती (Word Formation / Shabdasiddhi)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 5,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mar_c10",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mar_c09",
                            nextChapterId: "gb_mar_c11",
                            metaDescriptionMr: "सिद्ध शब्द (तत्सम, तद्भव, देशी), परभाषीय शब्द (कानडी, पोर्तुगीज, फारसी, अरबी, इंग्रजी, गुजराती, तेलगू, तामिळ), साधित शब्द (उपसर्गघटित, प्रत्ययघटित, सामासिक, अभ्यस्त शब्द - अंशाभ्यस्त व पूर्णाभ्यस्त).",
                            metaDescriptionEn: "In-depth review of Shabdasiddhi: Inherent Siddha (Tatsam Sanskrit loanwords, Tadbhav evolved, Deshi indigenous), Foreign Loanwords (Kannada, Portuguese, Persian, Arabic, English, Gujarati, Telugu, Tamil), Derived Sadhita (Prefixes, Suffixes, Compounds), and Abhyasta reduplication.",
                            notesJsonPath: "/data/notes/group_b/mains/marathi/c10_shabdasiddhi.json",
                            quizTag: "gb_mar_shabdasiddhi_01",
                            tags: ["Core-Grammar", "Shabdasiddhi", "Tatsam Tadbhav", "Deshi Words", "Kannada Loanwords", "Portuguese Loanwords", "High-Weightage"],
                            searchKeywords: ["marathi shabdasiddhi classification", "tatsam words sanskrit as it is", "tadbhav words modified in marathi", "deshi native words dhonda zhad", "loanwords kannada anna akka tupa gulgul", "portuguese loanwords batata tamakhu hapus pagar", "abhyasta words purnabhyasta anshabhyasta", "शब्दसिद्धी तत्सम व तद्भव", "देशी शब्द धोंडा झाड दगड", "कानडी शब्द अण्णा अक्का तूप", "पोर्तुगीज शब्द बटाटा तंबाखू हापूस पगार", "फारसी अरबी शब्द", "अभ्यस्त शब्द"],
                            topics: [
                                {
                                    id: "top_gb_m10_01",
                                    nameMr: "सिद्ध व साधित शब्द, भाषिक उत्पत्ती, परकीय उसनवारी आणि अभ्यस्त रचना",
                                    nameEn: "Etymological Derivations, Native Marathi Lexicon, Linguistic Borrowings & Reduplications",
                                    subtopics: [
                                        {
                                            id: "st_gb_m10_01_01",
                                            titleMr: "तत्सम शब्द (Tatsam Words - संस्कृतमधून जसेच्या तसे आलेले): राजा, भूगोल, वृक्ष, जल, पृथ्वी, कन्या, सूर्य, अग्नी, पुत्र, ग्रंथ, कवी, भगवान, उत्सव, संसार, मंदिर, प्रीती; जोडाक्षरांचे प्रमाण अधिक असणारे शब्द",
                                            titleEn: "Tatsam Words (Unchanged Sanskrit loanwords): Raja, Vriksha, Jal, Prithvi, Kanya, Surya, Agni, Putra, Grantha, Kavi, Bhagwan, Utsav, Mandir",
                                            chips: ["तत्सम शब्द (संस्कृतमधून जसेच्या तसे)", "राजा, वृक्ष, जल, अग्नी", "कन्या, सूर्य, पृथ्वी"]
                                        },
                                        {
                                            id: "st_gb_m10_01_02",
                                            titleMr: "तद्भव शब्द (Tadbhav Words - संस्कृतातून मराठीत येताना बदल झालेले): संस्कृत -> मराठी: अग्नि -> आग, कर्ण -> कान, हस्त -> हात, पर्ण -> पान, पद -> पाय, दुग्ध -> दूध, मयूर -> मोर, ग्राम -> गाव, भ्राता -> भाऊ, चक्र -> चाक, कार्य -> काज/काम",
                                            titleEn: "Tadbhav Words (Phonetically evolved from Sanskrit to Marathi): Agni->Aag, Karna->Kaan, Hasta->Haat, Parna->Paan, Dugdha->Doodh, Mayur->Mor, Grama->Gaav, Chakra->Chaak",
                                            chips: ["तद्भव शब्द (संस्कृतातून बदललेले)", "अग्नि -> आग", "कर्ण -> कान", "दुग्ध -> दूध", "ग्राम -> गाव"]
                                        },
                                        {
                                            id: "st_gb_m10_01_03",
                                            titleMr: "देशी / देशज शब्द (महाराष्ट्रातील मूळ बोलीतील शब्द): झाड, धोंडा, दगड, गवत, घोडा, डोळा, पोट, गुडघा, कंबर, बाजरी, वांगे, लुगडे, चहाटळ, बोका, चिमणी, ओढा, हाड, शेतकरी",
                                            titleEn: "Deshi / Indigenous Words (Native Marathi roots): Jhad, Dhonda, Dagad, Gavat, Ghoda, Dola, Pot, Gudgha, Bajri, Lugade, Boka, Chimani",
                                            chips: ["देशी शब्द (मूळ बोली)", "झाड, धोंडा, दगड", "पोट, गुडघा, डोळा", "बाजरी, लुगडे, चिमणी"]
                                        },
                                        {
                                            id: "st_gb_m10_01_04",
                                            titleMr: "परभाषीय शब्द (MPSC चे सर्वात लाडके प्रश्न कोष्टक): १) कानडी (Kannada): अण्णा, अक्का, आप्पा, ताई, चाकरी, तूप, तूप, लोणी, भाकरी, अळू, खलबत्ता, गुढी, गाजर, किल्ली, शिकेकाई; २) पोर्तुगीज (Portuguese): बटाटा, तंबाखू, हापूस, पगार, बिस्कीट, चावी, घमेले, पाव, काडतूस, साबूदाणा, पेरू; ३) फारसी (Persian): दिवाणखाना, कारभार, पेशवा, कामगार, सामान, फडणवीस, हफ्ता, बाजार; ४) अरबी (Arabic): अर्ज, हुकूम, जाहीर, खर्च, इनाम, मेहनत, कायदा, नजर, तारीख; ५) गुजराती: दादर, ढोकळा, डबा, गरबा; ६) तेलगू: अनारसा, ताळा, शिकेकाई; ७) तामिळ: चिल्ली-पिल्ली, मट्ठा; ८) इंग्रजी: टेबल, पेन, डॉक्टर, बस, रेल्वे",
                                            titleEn: "Foreign Loanwords: Kannada (Anna, Akka, Appa, Toop, Loni, Bhakri, Khalbata, Killi); Portuguese (Batata, Tambakhu, Hapus, Pagar, Chavi, Paav, Sabudana); Persian (Diwankhana, Peshwa, Kamgar, Bazar); Arabic (Arj, Hukoom, Jahir, Kharch, Kayda, Tarikh); Gujarati (Dhokla, Daba); Telugu (Anarsa)",
                                            chips: ["कानडी (अण्णा, तूप, भाकरी, किल्ली)", "पोर्तुगीज (बटाटा, तंबाखू, हापूस, पगार, चावी)", "फारसी (दिवाणखाना, कामगार)", "अरबी (अर्ज, हुकूम, कायदा)", "गुजराती (ढोकळा)"]
                                        },
                                        {
                                            id: "st_gb_m10_01_05",
                                            titleMr: "साधित व अभ्यस्त शब्द: १) उपसर्गघटित (शब्दाच्या आधी उपसर्ग: गैरसोय, अवगुण, बेअब्रू, प्रगती); २) प्रत्ययघटित (शब्दानंतर प्रत्यय: खोडकर, दुकानदार, माणुसकी); ३) अभ्यस्त शब्द: अ) पूर्णाभ्यस्त (एकच शब्द पुन्हा येणे: घरघर, हळूहळू, लाललाल, तुकडे-तुकडे), ब) अंशाभ्यस्त (एखाद्या अक्षरात बदल होऊन येणे: दगड-धोंडा, गोड-धोड, शेजारी-पाजारी, बारीक-सारीक), क) अनुकरणवाचक (नाद निर्माण करणारे: खळखळ, फडफड, गडगड, पटपट)",
                                            titleEn: "Derived (Sadhita) & Reduplicated (Abhyasta): Prefix-derived, Suffix-derived; Purnabhyasta (Exact word duplicate: Gharghar, Haluhalu), Anshabhyasta (Partial rhyme duplicate: Dagad-dhonda, God-dhod), Anukaranvachak (Echo onomatopoeia: Khalkhal, Phadphad, Gadgad)",
                                            chips: ["उपसर्गघटित व प्रत्ययघटित", "पूर्णाभ्यस्त (हळूहळू, घरघर)", "अंशाभ्यस्त (दगड-धोंडा, शेजारी-पाजारी)", "अनुकरणवाचक (खळखळ, गडगड)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सुगम मराठी व्याकरण व लेखन", standard: "मो. रा. वाळंबे", chapterRef: "प्रकरण २०: शब्दसिद्धी" },
                                        { book: "परिपूर्ण मराठी व्याकरण", standard: "बाळासाहेब शिंदे", chapterRef: "प्रकरण १५: शब्दसिद्धी व शब्दसंग्रह" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग D — वाक्यविचार, वाक्यपृथक्करण व वाक्यरूपांतर (Syntax & Transformations)
                        // =========================================================================
                        {
                            id: "gb_mar_c11",
                            code: "M11",
                            section: "D",
                            slug: "syntax-sentence-analysis-and-transformation-vakya-rupantar",
                            nameMr: "वाक्यविचार, वाक्यपृथक्करण आणि वाक्यरूपांतर",
                            nameEn: "Syntax: Sentence Structure, Parsing (Analysis) & Sentence Transformation",
                            name: "वाक्यविचार व वाक्यरूपांतर (Syntax & Sentence Transformation)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mar_c11",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mar_c10",
                            nextChapterId: "gb_mar_c12",
                            metaDescriptionMr: "वाक्यपृथक्करण (उद्देश्य, उद्देश्यविस्तार, विधेय, विधेयविस्तार, कर्म, कर्मविस्तार, विधीपूरक), वाक्यांचे प्रकार (साधे वाक्य, संयुक्त वाक्य, मिश्र वाक्य), आणि परस्पर वाक्यरूपांतर (प्रश्नार्थी-विधानार्थी, होकारार्थी-नकारार्थी).",
                            metaDescriptionEn: "In-depth review of Marathi Syntax: Sentence Parsing (Subject Udyeshya, Predicate Vidheya, Object Karma, Extensions), 3 Structural Types (Keval Simple, Sanyukta Compound, Mishra Complex), and Sentence Transformations without changing meaning.",
                            notesJsonPath: "/data/notes/group_b/mains/marathi/c11_sentence_transformation.json",
                            quizTag: "gb_mar_syntax_01",
                            tags: ["Core-Grammar", "Syntax", "Vakya Prithakkaran", "Keval Sanyukta Mishra", "Sentence Transformation", "High-Weightage"],
                            searchKeywords: ["marathi syntax sentence analysis vakya prithakkaran", "udyeshya vidheya karma extension", "keval sanyukta mishra vakya identification", "sentence transformation affirmative negative interrogative", "वाक्यविचार व वाक्यपृथक्करण", "उद्देश्य व विधेय", "केवळ संयुक्त व मिश्र वाक्य", "वाक्यरूपांतर होकारार्थी नकारार्थी", "प्रश्नार्थी ते विधानार्थी"],
                            topics: [
                                {
                                    id: "top_gb_m11_01",
                                    nameMr: "वाक्य घटक पृथक्करण, केवल-संयुक्त-मिश्र वाक्य आणि रूपांतरण नियम",
                                    nameEn: "Syntactic Parsing, Structural Classifications & Semantic-Preserving Transformations",
                                    subtopics: [
                                        {
                                            id: "st_gb_m11_01_01",
                                            titleMr: "वाक्यपृथक्करण (Sentence Parsing / Analysis): वाक्याचे दोन मुख्य भाग: १) उद्देश्य विभाग (Subject Part: उद्देश्य = कर्ता, उद्देश्यविस्तार = कर्त्याबद्दल माहिती सांगणारे विशेषण शब्द); २) विधेय विभाग (Predicate Part: विधेय = क्रियापद, विधेयविस्तार = क्रिया कोठे, कधी, कशी घडली सांगणारे क्रियाविशेषण शब्द; कर्म = प्रत्यक्ष कर्म, कर्मविस्तार = कर्माचे विशेषण, विधानपूरक / विधीपूरक)",
                                            titleEn: "Sentence Parsing (Vakya Prithakkaran): 1) Subject Part (Udyeshya = Subject agent, Udyeshya Vistar = Subject adjectives); 2) Predicate Part (Vidheya = Main verb, Vidheya Vistar = Adverbial extensions of time/place/manner, Karma = Object, Karma Vistar)",
                                            chips: ["उद्देश्य (कर्ता)", "उद्देश्यविस्तार (विशेषण)", "विधेय (क्रियापद)", "विधेयविस्तार (क्रियाविशेषण)", "कर्म व कर्मविस्तार"]
                                        },
                                        {
                                            id: "st_gb_m11_01_02",
                                            titleMr: "रचनेनुसार वाक्यांचे ३ प्रकार (MPSC हमखास प्रश्न): १) केवल / साधे वाक्य (एकच उद्देश्य व एकच विधेय असणारे - उदा. 'तानाजी लढता लढता मेला'); २) संयुक्त वाक्य (दोन किंवा अधिक केवल वाक्ये प्रधानत्वसूचक उभयान्वयी अव्ययांनी जोडलेली - 'आणि, व, किंवा, पण, म्हणून' - उदा. 'विजा चमकू लागल्या आणि पावसाला सुरुवात झाली'); ३) मिश्र वाक्य (एक मुख्य प्रधान वाक्य व त्यावर अवलंबून असलेले एक किंवा अधिक गौण वाक्ये गौणत्वसूचक अव्ययांनी जोडलेली - 'जर-तर, की, कारण' - उदा. 'जो अभ्यास करतो, तो यशस्वी होतो')",
                                            titleEn: "3 Structural Sentence Types: 1) Keval (Simple: One subject, one predicate), 2) Sanyukta (Compound: Independent clauses joined by coordinating conjunctions 'ani/va/pan/mhanun'), 3) Mishra (Complex: One principal clause + dependent clauses joined by subordinating conjunctions 'jar-tar/ki/karan')",
                                            chips: ["केवल वाक्य (साधे)", "संयुक्त वाक्य (आणि, व, पण, म्हणून)", "मिश्र वाक्य (जर-तर, जो-तो, कारण)"]
                                        },
                                        {
                                            id: "st_gb_m11_01_03",
                                            titleMr: "वाक्यांचे अर्थानुसार प्रकार: १) विधानार्थी (साधे विधान), २) प्रश्नार्थी (प्रश्न विचारलेला), ३) उद्गारार्थी (मनातील भावना), ४) आज्ञार्थी (आज्ञा/विनंती), ५) होकारार्थी (करणरूपी) व ६) नकारार्थी (अकरणरूपी)",
                                            titleEn: "Functional Sentence Types: Declarative (Vidhanarthi), Interrogative (Prashnarthi), Exclamatory (Udgarthi), Imperative (Aagnyarthi), Affirmative (Hokararthi), Negative (Nakararthi)",
                                            chips: ["विधानार्थी वाक्य", "प्रश्नार्थी व उद्गारार्थी", "होकारार्थी व नकारार्थी"]
                                        },
                                        {
                                            id: "st_gb_m11_01_04",
                                            titleMr: "वाक्यरूपांतर (Transformation of Sentences - अर्थ न बदलता बदल करणे): १) प्रश्नार्थीचे विधानार्थी करणे (उदा. 'जगात सर्व सुखी कोण आहे?' -> 'जगात सर्व सुखी कोणीही नाही'); २) उद्गारार्थीचे विधानार्थी करणे (उदा. 'केवढी प्रचंड गर्दी ही!' -> 'येथे अतिशय प्रचंड गर्दी आहे'); ३) होकारार्थीचे नकारार्थी करणे (विरुद्धार्थी शब्द वापरून: उदा. 'तो श्रीमंत आहे' -> 'तो गरीब नाही'); ४) केवल वाक्याचे संयुक्त किंवा मिश्र वाक्यात रूपांतर",
                                            titleEn: "Sentence Transformation (Semantic Invariant): Interrogative to Assertive, Exclamatory to Assertive, Affirmative to Negative (using antonyms: 'He is rich' -> 'He is not poor'), Simple to Compound/Complex",
                                            chips: ["वाक्यरूपांतर (अर्थ न बदलणे)", "प्रश्नार्थी ते विधानार्थी", "होकारार्थी ते नकारार्थी", "उद्गारार्थी ते विधानार्थी"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सुगम मराठी व्याकरण व लेखन", standard: "मो. रा. वाळंबे", chapterRef: "प्रकरण २१ व २२: वाक्यविचार, वाक्यपृथक्करण व वाक्यरूपांतर" },
                                        { book: "परिपूर्ण मराठी व्याकरण", standard: "बाळासाहेब शिंदे", chapterRef: "प्रकरण १६ व १७: वाक्यपृथक्करण व रूपांतर" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mar_c12",
                            code: "M12",
                            section: "D",
                            slug: "figures-of-speech-alankar-and-shabdshakti",
                            nameMr: "अलंकार विचार (शब्दालंकार व अर्थालंकार) आणि शब्दशक्ती",
                            nameEn: "Figures of Speech (Alankar) & Semantic Word Powers (Shabdshakti)",
                            name: "अलंकार व शब्दशक्ती (Alankar & Shabdshakti)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mar_c12",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mar_c11",
                            nextChapterId: "gb_mar_c13",
                            metaDescriptionMr: "शब्दालंकार (अनुप्रास, यमक, श्लेष), अर्थालंकार (उपमा, उत्प्रेक्षा, रूपक, अपन्हुती, व्यतिरेक, अनन्वय, दृष्टांत, अर्थान्तरन्यास, अतिशयोक्ती), आणि ३ शब्दशक्ती (अभिधा, लक्षणा, व्यंजना).",
                            metaDescriptionEn: "In-depth review of Figures of Speech: Shabdālankāra (Anuprās, Yamak, Shlesh) vs Arthālankāra (Upamā, Utprekshā, Rūpak, Apanhuti, Vyatirek, Ananvaya, Drishtānt, Arthāntarnyās, Atishayokti), and 3 Word Powers (Abhidhā, Lakshanā, Vyanjanā).",
                            notesJsonPath: "/data/notes/group_b/mains/marathi/c12_alankar_shabdshakti.json",
                            quizTag: "gb_mar_alankar_01",
                            tags: ["Marathi Literature", "Alankar", "Shabdashakti Abhidha Lakshana Vyanjana", "Upama Utpreksha Rupak", "Shlesh Alankar", "High-Weightage"],
                            searchKeywords: ["marathi alankar types shabdshakti", "shabdalankar anupras yamak shlesh", "arthalankar upama utpreksha rupak vyatirek apanhuti", "ananvaya drishtant arthantarnyas atishayokti", "shabdshakti abhidha vachyartha lakshana lakshyartha vyanjana vyangyartha", "अलंकार विचार शब्दालंकार अर्थालंकार", "उपमा उत्प्रेक्षा रूपक व्यतिरेक", "श्लेष अलंकार", "अतिशयोक्ती", "शब्दशक्ती अभिधा लक्षणा व्यंजना"],
                            topics: [
                                {
                                    id: "top_gb_m12_01",
                                    nameMr: "तीन शब्दशक्ती, शब्दालंकार, उपमेय-उपमान संबंध आणि अर्थालंकार",
                                    nameEn: "Semantic Powers (Shabdshakti), Sound Ornaments & Trope Analogies",
                                    subtopics: [
                                        {
                                            id: "st_gb_m12_01_01",
                                            titleMr: "तीन शब्दशक्ती (Shabdshakti): १) अभिधा शक्ती (शब्दाचा उच्चार केल्यावर थेट रूढ प्राथमिक अर्थ समजणे -> 'वाच्यार्थ' - उदा. 'मी एक वाघ पाहिला'); २) लक्षणा शक्ती (मूळ वाच्यार्थाला बाधा येऊन दुसरा सुसंगत अर्थ घेणे -> 'लक्ष्यार्थ' - उदा. 'आम्ही **गहू** खातो', 'त्याच्या बोलण्यावर **काहूर** उठले', 'घरावरून हत्ती गेला'); ३) व्यंजना शक्ती (मूळ अर्थाला बाधा न आणता वेगळाच गूढ किंवा व्यंग्यात्मक अर्थ निघणे -> 'व्यंग्यार्थ' - उदा. 'सूर्य मावळला' - वेळ संपली/घरी जाण्याची वेळ झाली)",
                                            titleEn: "3 Semantic Word Powers (Shabdshakti): 1) Abhidhā (Direct literal meaning -> Vachyartha: 'I saw a tiger'), 2) Lakshanā (Metaphorical secondary meaning -> Lakshyartha: 'We eat wheat', 'Elephants passed over house'), 3) Vyanjanā (Subtle suggested hidden meaning -> Vyangyartha: 'The sun has set')",
                                            chips: ["अभिधा (वाच्यार्थ)", "लक्षणा (लक्ष्यार्थ आम्ही गहू खातो)", "व्यंजना (व्यंग्यार्थ सूर्य मावळला)", "३ शब्दशक्ती"]
                                        },
                                        {
                                            id: "st_gb_m12_01_02",
                                            titleMr: "शब्दालंकार (नाद व शब्दांवर आधारित): १) अनुप्रास (एकाच अक्षराची पुनरावृत्ती होऊन नादमाधुर्य निर्माण होणे - उदा. 'गडद निळे गडद निळे जलद भरुनी आले'); २) यमक (Rhyme - चरणाच्या शेवटी समान अक्षर येणे); ३) श्लेष अलंकार (एकाच वाक्यात एक शब्द दोन वेगवेगळ्या अर्थांनी वापरणे - उदा. 'श्रीकृष्ण नवरा मी नवरी, शिशुपाल नवरा मी न-वरी', 'मित्राच्या उदयाने कोणाला आनंद होत नाही? - मित्र=सूर्य/सखा')",
                                            titleEn: "Sound Ornaments (Shabdālankāra): 1) Anuprās (Alliteration: Repetition of identical consonant sounds), 2) Yamak (Rhyming couplets), 3) Shlesh (Double entendre/Pun: Single word yields two contextual meanings)",
                                            chips: ["अनुप्रास (अक्षरांची पुनरावृत्ती)", "यमक (Rhyme)", "श्लेष अलंकार (दोन अर्थ)"]
                                        },
                                        {
                                            id: "st_gb_m12_01_03",
                                            titleMr: "अर्थालंकार - उपमेय व उपमान संकल्पना: उपमेय (ज्याची तुलना करायची ती मूळ वस्तू), उपमान (ज्याच्याशी तुलना केली जाते ती श्रेष्ठ वस्तू), समान धर्म, साम्यवाचक शब्द; १) उपमा (दोन वस्तूंमधील साम्य: सारखा, सम, गत, प्रमाणे - उदा. 'सावळाच रंग तुझा पावसाळी नभा**परी**'); २) उत्प्रेक्षा (उपमेय हे जणू काही उपमानच आहे अशी कल्पना: जणू, जणूकाही, गमे, वाटे, भासे - उदा. 'हा आंबा **जणू** साखरच'); ३) रूपक (उपमेय व उपमान यांत पूर्ण एकरूपता - उदा. 'लहान मूल म्हणजे मातीचा गोळा'); ४) अपन्हुती (उपमेयाचा निषेध करून ते उपमानच आहे असे सांगणे: न, नव्हे, नसे - उदा. 'हे हृदय **नव्हे**, प्रिये, तळमळते जलधीचे पाणी')",
                                            titleEn: "Analogous Tropes (Upameya vs Upamana): Upamā (Explicit simile using 'pari/sam/sarkha'), Utprekshā (Imaginative conjecture using 'janu/gamé/vate'), Rūpak (Metaphorical complete identity: 'Child is lump of clay'), Apanhuti (Concealment of subject: 'This is not heart, but churning ocean')",
                                            chips: ["उपमेय व उपमान", "उपमा (सारखा, परी)", "उत्प्रेक्षा (जणू, वाटे, भासे)", "रूपक (पूर्ण एकरूपता)", "अपन्हुती (नव्हे, निषेध)"]
                                        },
                                        {
                                            id: "st_gb_m12_01_04",
                                            titleMr: "इतर प्रमुख अर्थालंकार: १) व्यतिरेक (उपमेय हे उपमानापेक्षा श्रेष्ठ असल्याचे दाखवणे - उदा. 'अमृताहूनी गोड नाम तुझे देवा'); २) अनन्वय (उपमेयाची तुलना कशाशीही होऊ शकत नाही म्हणून उपमेयाची तुलना उपमेयाशीच करणे - उदा. 'झाले बहू, होतील बहू, आहेतही बहू; परंतु यासम हा'); ३) अतिशयोक्ती (अतिशयोक्त फुगवून सांगणे - उदा. 'दमडीचं तेल आणलं, सासूबाईंचं न्हाणं झालं...'); ४) दृष्टांत (दाखला किंवा उदाहरण देणे - उदा. 'लहानपण देगा देवा...'); ५) अर्थान्तरन्यास (विशिष्ट विधानावरून सामान्य सिद्धांताकडे जाणे - उदा. 'होते कुरूपही रूपवान जनस्नेहे'); ६) स्वभावोक्ती (हुबेहूब स्वाभाविक वर्णन)",
                                            titleEn: "Advanced Tropes: Vyatirek (Subject superior to object: 'Amritahuni god'), Ananvaya (Incomparable subject compared to itself), Atishayokti (Hyperbole exaggeration), Drishtānt (Illustrative exemplar moral), Arthāntarnyās (General corroboration of particular instance), Swabhavokti",
                                            chips: ["व्यतिरेक (अमृताहूनी गोड)", "अनन्वय (यासम हाच)", "अतिशयोक्ती (फुगवून सांगणे)", "दृष्टांत (लहानपण देगा देवा)", "अर्थान्तरन्यास"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सुगम मराठी व्याकरण व लेखन", standard: "मो. रा. वाळंबे", chapterRef: "प्रकरण २३ व २४: अलंकार विचार व शब्दशक्ती" },
                                        { book: "परिपूर्ण मराठी व्याकरण", standard: "बाळासाहेब शिंदे", chapterRef: "प्रकरण १८ व १९: अलंकार व शब्दशक्ती" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mar_c13",
                            code: "M13",
                            section: "D",
                            slug: "vritta-vichar-chandas-and-ras-bhav",
                            nameMr: "वृत्तविचार (छंद) आणि नऊ रस व स्थायीभाव",
                            nameEn: "Prosody (Vritta / Chandas: Matra, Aksharagan) & Nine Aesthetic Rasas",
                            name: "वृत्तविचार व नऊ रस (Prosody / Vritta & Rasas)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mar_c13",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mar_c12",
                            nextChapterId: "gb_mar_c14",
                            metaDescriptionMr: "वृत्तविचार (लघू-गुरू नियम, य-मा-ता-रा-जा-भा-न-स-ल-गा सूत्र, ८ गण), अक्षरगणवृत्ते (इंद्रवज्रा, भुजंगप्रयात, वसंततिलका, शार्दूलविक्रीडित, मंदाक्रांता), मात्रावृत्ते (दिंडी, साकी), आणि नवरस व स्थायीभाव.",
                            metaDescriptionEn: "In-depth review of Marathi Prosody (Vritta): Laghu-Guru metrics, 8 Ganas (Yamatārajābhānasalagā mnemonic), Aksharaganavritta (Bhujangaprayat, Shardulvikridit, Vasantatilaka), Matravritta (Dindi, Saki), and the 9 Classical Aesthetic Rasas with Sthayibhavas.",
                            notesJsonPath: "/data/notes/group_b/mains/marathi/c13_vritta_rasa.json",
                            quizTag: "gb_mar_vritta_01",
                            tags: ["Marathi Literature", "Vrittavichar", "Laghu Guru Rules", "Aksharaganavritta Shardulvikridit", "Navaras Sthayibhava", "High-Weightage"],
                            searchKeywords: ["marathi vritta vichar laghu guru rules", "yamatarajabhanasalaga 8 ganas formulas", "aksharaganavritta bhujangaprayat 12 shardulvikridit 19", "matravritta dindi saki", "navaras in marathi shringar veer karun raudra bibhatsa sthayibhava", "वृत्तविचार लघु गुरु नियम", "यमाता राजभानसलगा ८ गण", "भुजंगप्रयात १२ अक्षरे", "शार्दूलविक्रीडित १९ अक्षरे", "नवरस व स्थायीभाव शृंगार वीर करुण"],
                            topics: [
                                {
                                    id: "top_gb_m13_01",
                                    nameMr: "लघू-गुरू मात्रा नियम, ८ गण, प्रमुख अक्षरावृत्ते आणि ९ रसविचार",
                                    nameEn: "Metrical Scansion (Laghu-Guru), 8 Gana Matrices, Akshara Meters & 9 Aesthetic Rasas",
                                    subtopics: [
                                        {
                                            id: "st_gb_m13_01_01",
                                            titleMr: "लघू-गुरू नियम व गणांची निर्मिती: १) लघू (अर्धचंद्र चिन्ह ˘ - १ मात्रा: ऱ्हस्व स्वर व व्यंजने); २) गुरू (आडवी रेषा — - २ मात्रा: दीर्घ स्वर, संयुक्त स्वर, अनुस्वारयुक्त किंवा विसर्गयुक्त अक्षर आणि जोडाक्षरापूर्वीचा आघात असणारा वर्ण); ८ गण सूत्र: 'य-मा-ता-रा-जा-भा-न-स-ल-गा' (य, म, त, र, ज, भ, न, स हे ८ गण; म-गण सर्वगुरू ———, न-गण सर्वलघू ˘˘˘)",
                                            titleEn: "Scansion & 8 Gana Matrix: Laghu (Crescent ˘, 1 matra: short vowels) vs Guru (Dash —, 2 matras: long, aspirated, conjunct-preceding); Master Formula: 'Ya-Ma-Ta-Ra-Ja-Bha-Na-Sa-La-Ga'; Ma-gana all guru, Na-gana all laghu",
                                            chips: ["लघू (१ मात्रा ˘)", "गुरू (२ मात्रा —)", "यमाता राजभानसलगा सूत्र", "८ गण (म-गण सर्वगुरू, न-गण सर्वलघू)"]
                                        },
                                        {
                                            id: "st_gb_m13_01_02",
                                            titleMr: "प्रमुख अक्षरगणवृत्ते (MPSC वारंवार विचारते): १) भुजंगप्रयात (प्रत्येक चरणात १२ अक्षरे, गण: य-य-य-य; उदा. 'मना सज्जना राघवी वस्ति कीजे'); २) वसंततिलका (१४ अक्षरे, गण: त-भ-ज-ज-गा-गा); ३) मालिनी (१५ अक्षरे, गण: न-न-म-य-य); ४) शार्दूलविक्रीडित (१९ अक्षरे, गण: म-स-ज-स-त-त-गा, यती १२ व्या अक्षरावर; उदा. 'माझे माहेर पंढरी...'); ५) मंदाक्रांता (१७ अक्षरे, गण: म-भ-न-त-त-गा-गा - कालिदासाचे मेघदूत)",
                                            titleEn: "Key Aksharaganavritta Meters: Bhujangaprayat (12 syllables, Y-Y-Y-Y: Mana Sajjana), Vasantatilaka (14 syllables), Malini (15 syllables), Shardulvikridit (19 syllables, M-S-J-S-T-T-G), Mandakranta (17 syllables - Meghdoot)",
                                            chips: ["भुजंगप्रयात (१२ अक्षरे, य-य-य-य)", "शार्दूलविक्रीडित (१९ अक्षरे)", "वसंततिलका (१४ अक्षरे)", "मालिनी (१५ अक्षरे)"]
                                        },
                                        {
                                            id: "st_gb_m13_01_03",
                                            titleMr: "मात्रावृत्ते व छंद: अक्षरांच्या संख्येऐवजी मात्रांच्या संख्येवर आधारित; १) दिंडी (१९ मात्रा - ९ व १० वर यती); २) साकी (२८ मात्रा); ३) पादाकुलक (१६ मात्रा); ४) आर्या (गीती - मोरोपंतांची प्रसिद्ध आर्या: पहिल्या चरणात १२, दुसऱ्यात १८ मात्रा); मुक्तछंद (Free verse)",
                                            titleEn: "Matravritta Meters: Based on total metric counts: Dindi (19 matras), Saki (28 matras), Padakulak (16 matras), Moropant's Arya meter",
                                            chips: ["मात्रावृत्ते (दिंडी १९ मात्रा)", "साकी २८ मात्रा", "मोरोपंतांची आर्या", "मुक्तछंद"]
                                        },
                                        {
                                            id: "st_gb_m13_01_04",
                                            titleMr: "नऊ रस व त्यांचे स्थायीभाव (Nava Rasas - MPSC हमखास जोड्या जुळवा प्रश्न): १) शृंगार रस (स्थायीभाव: रती / प्रेम); २) वीर रस (स्थायीभाव: उत्साह); ३) करुण रस (स्थायीभाव: शोक / दुःख); ४) रौद्र रस (स्थायीभाव: क्रोध); ५) हास्य रस (स्थायीभाव: हास); ६) भयानक रस (स्थायीभाव: भय); ७) बीभत्स रस (स्थायीभाव: जुगुप्सा / किळस); ८) अद्भुत रस (स्थायीभाव: विस्मय / आश्चर्य); ९) शांत रस (स्थायीभाव: शम / निर्वेद)",
                                            titleEn: "Nine Aesthetic Rasas & Permanent Emotions (Sthayibhavas): 1) Shringar (Rati/Love), 2) Veer (Utsaha/Valour), 3) Karun (Shok/Sorrow), 4) Raudra (Krodh/Fury), 5) Hasya (Hasa/Laughter), 6) Bhayanak (Bhaya/Terror), 7) Bibhatsa (Jugupsa/Disgust), 8) Adbhut (Vismay/Wonder), 9) Shanta (Shama/Peace)",
                                            chips: ["शृंगार (रती)", "वीर (उत्साह)", "करुण (शोक)", "रौद्र (क्रोध)", "बीभत्स (जुगुप्सा/किळस)", "शांत (शम)", "९ रस व स्थायीभाव"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सुगम मराठी व्याकरण व लेखन", standard: "मो. रा. वाळंबे", chapterRef: "प्रकरण २५ व २६: वृत्तविचार व रसविचार" },
                                        { book: "परिपूर्ण मराठी व्याकरण", standard: "बाळासाहेब शिंदे", chapterRef: "प्रकरण २० व २१: छंद, वृत्त व रस" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग E — शब्दसंग्रह, म्हणी, वाक्प्रचार व शुद्धलेखन (Vocabulary & Orthography)
                        // =========================================================================
                        {
                            id: "gb_mar_c14",
                            code: "M14",
                            section: "E",
                            slug: "synonyms-antonyms-and-confusing-words",
                            nameMr: "समानार्थी शब्द, विरुद्धार्थी शब्द आणि शब्दसमूहाबद्दल एक शब्द",
                            nameEn: "Vocabulary: Synonyms, Antonyms, One-Word Substitutions & Homonyms",
                            name: "समानार्थी, विरुद्धार्थी व शब्दसमूह (Vocabulary Enrichment)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 5,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mar_c14",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mar_c13",
                            nextChapterId: "gb_mar_c15",
                            metaDescriptionMr: "अति-महत्त्वाचे समानार्थी शब्द (अश्व, वारा, पाणी, सोने, सूर्य, चंद्र, कमळ), विरुद्धार्थी शब्द, शब्दसमूहाबद्दल एक शब्द (पांढरा कावळा, अजातशत्रू, वांझोटी), आणि समध्वनी भिन्नार्थी शब्द.",
                            metaDescriptionEn: "In-depth review of High-Frequency Vocabulary: Crucial Synonyms (Water, Gold, Sun, Moon, Lotus, Horse, Earth), Antonyms, One-Word Substitutions (Ajatashatru, Pandhra Kavla), and Homophonic Confusing Words.",
                            notesJsonPath: "/data/notes/group_b/mains/marathi/c14_vocabulary.json",
                            quizTag: "gb_mar_vocab_01",
                            tags: ["Vocabulary", "Synonyms Samanarthi", "Antonyms Viruddharthi", "One Word Substitution", "High-Weightage", "Scoring"],
                            searchKeywords: ["marathi samanarthi shabd synonyms list mpsc", "viruddharthi shabd antonyms list", "shabdasamuhabaddal ek shabd one word substitution", "confusing homophones marathi shabdratna", "समानार्थी शब्द यादी पाणी सूर्य चंद्र सोने", "विरुद्धार्थी शब्द", "शब्दसमूहाबद्दल एक शब्द", "अजातशत्रू पांढरा कावळा", "मराठी शब्दसंग्रह"],
                            topics: [
                                {
                                    id: "top_gb_m14_01",
                                    nameMr: "क्लिष्ट समानार्थी, विरुद्धार्थी जोड्या, शब्दसमूह आणि समोच्चारी शब्द",
                                    nameEn: "High-Frequency Synonyms, Antonym Pairs, One-Word Substitutes & Paronyms",
                                    subtopics: [
                                        {
                                            id: "st_gb_m14_01_01",
                                            titleMr: "परीक्षेतील अति-महत्त्वाचे समानार्थी शब्द (MPSC वारंवार विचारते): १) पाणी: जल, नीर, तोय, उदक, जीवन, पय, अंबू, वारी; २) सूर्य: रवी, भानू, भास्कर, दिनकर, आदित्य, मित्र, सविता, मार्तंड; ३) सोने: सुवर्ण, कनक, हेम, कांचन, कुंदन; ४) कमळ: पंकज, राजीव, पद्म, नलिनी, सरोज, अंबुज, अरविंद; ५) वारा: अनिल, पवन, वायू, मरुत, समीर, वात; ६) घोडा: अश्व, हय, वाजी, तुरंग, वारू; ७) डोळा: नयन, चक्षू, नेत्र, लोचन, दृष्टी; ८) पृथ्वी: धरणी, वसुंधरा, अवनी, भूमी, क्षमा, रसा, मही",
                                            titleEn: "High-Frequency Synonyms (Samanarthi): Water (Neer, Toy, Udak, Pay, Ambu), Sun (Bhaskar, Savita, Martand), Gold (Kanak, Hem, Kanchan), Lotus (Pankaj, Rajiv, Padmakar, Arvind), Wind (Anil, Marut, Sameer), Horse (Ashwa, Hay, Vaji, Turang), Earth (Vasundhara, Avani, Mahi)",
                                            chips: ["पाणी (नीर, तोय, उदक, अंबू)", "सूर्य (भास्कर, सविता, मार्तंड)", "सोने (कनक, हेम, कांचन)", "कमळ (राजीव, पद्म, अरविंद)", "घोडा (वाजी, तुरंग, हय)"]
                                        },
                                        {
                                            id: "st_gb_m14_01_02",
                                            titleMr: "विरुद्धार्थी शब्द (Antonyms): १) कृपण (कंजूष) × उदार/दानी; २) कृतज्ञ (उपकार जाणणारा) × कृतघ्न (उपकार विसरणारा); ३) ग्राह्य × त्याज्य; ४) विधायक × विघातक; ५) सुकाळ × दुष्काळ; ६) स्वार्थी × परार्थी; ७) प्राचीन × अर्वाचीन; ८) अनुज (लहान भाऊ) × अग्रज (मोठा भाऊ); ९) अतिवृष्टी × अनावृष्टी; १०) आस्था × अनास्था",
                                            titleEn: "Crucial Antonyms (Viruddharthi): Kripan x Udaar, Kritagya x Kritaghna, Graahya x Tyaajya, Prachin x Arvachin, Anuj x Agraj, Ativrushti x Anavrushti",
                                            chips: ["कृतज्ञ × कृतघ्न", "कृपण × उदार", "प्राचीन × अर्वाचीन", "अग्रज × अनुज", "ग्राह्य × त्याज्य"]
                                        },
                                        {
                                            id: "st_gb_m14_01_03",
                                            titleMr: "शब्दसमूहाबद्दल एक शब्द (One-Word Substitution): १) ज्याला कोणीही शत्रू नाही असा: 'अजातशत्रू'; २) दुर्मिळ किंवा निसर्गात नसलेली गोष्ट: 'पांढरा कावळा'; ३) स्वतःचेच हित पाहणारा: 'स्वार्थी'; ४) केलेले उपकार जाणणारा: 'कृतज्ञ'; ५) ज्याला कशाचीही उपमा देता येत नाही: 'अनुपमेय'; ६) विनामूल्य पाणी मिळण्याचे ठिकाण: 'पाणपोई'; ७) किल्ल्याभोवती खणलेली पाण्याची चर: 'खंदक'",
                                            titleEn: "One-Word Substitutions: Ajatashatru (Person with no enemies), Pandhra Kavla (Extremely rare/impossible phenomenon), Panpoi (Free drinking water kiosk), Khandak (Moat surrounding fort), Anupameya",
                                            chips: ["अजातशत्रू (शत्रू नसलेला)", "पांढरा कावळा (दुर्मिळ गोष्ट)", "खंदक (किल्ल्याभोवती चर)", "पाणपोई"]
                                        },
                                        {
                                            id: "st_gb_m14_01_04",
                                            titleMr: "समोच्चारी भिन्नार्थी शब्द (Homonyms/Paronyms): १) पाणी (हात - जसे 'चक्रपाणी') विरुद्ध पाणी (जल); २) सूत (मुलगा) विरुद्ध सूत (धागा); ३) दिन (दिवस) विरुद्ध दीन (गरीब/लाचार); ४) चिर (दीर्घकाळ) विरुद्ध चीर (वस्त्र/फाडणे); ५) सुमन (फूल) विरुद्ध सुमन (चांगले मन)",
                                            titleEn: "Confusing Homophones: Paani (Hand) vs Paani (Water), Soot (Son) vs Soot (Thread), Din (Day) vs Deen (Poor), Chir (Long-lasting) vs Cheer (Cloth)",
                                            chips: ["पाणी (हात) vs पाणी (जल)", "दिन (दिवस) vs दीन (गरीब)", "सूत (मुलगा) vs सूत (धागा)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "मराठी शब्दरत्न", standard: "बाळासाहेब शिंदे", chapterRef: "समानार्थी व विरुद्धार्थी शब्दसंग्रह" },
                                        { book: "सुगम मराठी व्याकरण व लेखन", standard: "मो. रा. वाळंबे", chapterRef: "प्रकरण २७: शब्दसंग्रह" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mar_c15",
                            code: "M15",
                            section: "E",
                            slug: "idioms-and-proverbs-vakprachar-and-mhani",
                            nameMr: "वाक्प्रचार आणि म्हणी: अर्थ, उत्पत्ती व वाक्यात उपयोग",
                            nameEn: "Idioms (Vakprachar) & Proverbs (Mhani): Contextual Origins & Practical Usage",
                            name: "वाक्प्रचार व म्हणी (Idioms & Proverbs)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mar_c15",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mar_c14",
                            nextChapterId: "gb_mar_c16",
                            metaDescriptionMr: "अति-महत्त्वाचे वाक्प्रचार व त्यांचे सूक्ष्म अर्थ (अकलेचा खंदक, उंटावरून शेळ्या हाकणे, कपाळमोक्ष होणे, काखा वर करणे), आणि लोकजीवनातील म्हणी (अति शहाणा त्याचा बैल रिकामा, कोल्हा काकडीला राजी, चोराच्या उलट्या बोंबा).",
                            metaDescriptionEn: "In-depth review of Marathi Idioms (Vakprachar: Aklecha Khandak, Kankankanavane, Kapalmoksha) and Cultural Proverbs (Mhani: Meaning, situational matching, and fill-in-the-blank applications).",
                            notesJsonPath: "/data/notes/group_b/mains/marathi/c15_idioms_proverbs.json",
                            quizTag: "gb_mar_idioms_01",
                            tags: ["Vocabulary", "Idioms Vakprachar", "Proverbs Mhani", "Cultural Metaphors", "High-Weightage", "Scoring"],
                            searchKeywords: ["marathi vakprachar idioms with meanings mpsc", "marathi mhani proverbs list with explanations", "aklecha khandak murkha manus", "untavarun shelya hakne", "kolha kakdila raji", "वाक्प्रचार व अर्थ", "अकलेचा खंदक मूर्ख माणूस", "उंटावरून शेळ्या हाकणे", "म्हणी व अर्थ कोल्हा काकडीला राजी", "अति शहाणा त्याचा बैल रिकामा"],
                            topics: [
                                {
                                    id: "top_gb_m15_01",
                                    nameMr: "वाक्प्रचारांचे सूक्ष्म अर्थ, म्हणींची जीवनदृष्टी आणि उपयोजित प्रश्न",
                                    nameEn: "Idiomatic Nuances, Proverbial Folk Wisdom & Applied Sentence Matching",
                                    subtopics: [
                                        {
                                            id: "st_gb_m15_01_01",
                                            titleMr: "परीक्षेतील महत्त्वाचे वाक्प्रचार व अर्थ: १) अकलेचा खंदक (अत्यंत मूर्ख माणूस); २) उंटावरून शेळ्या हाकणे (प्रत्यक्ष कामात न उतरता नुसते फुकटचे सल्ले देणे); ३) कपाळमोक्ष होणे (मरण पावणे); ४) काखा वर करणे (काहीही माहीत नाही असे दाखवणे / हात झटकणे); ५) गळ्यात गळा घालणे (अतिशय घट्ट मैत्री असणे); ६) चरचरीत बोलणे (सडेतोड व झोंबणारे बोलणे); ७) त्राटिका (कजाग व भांडखोर बाई); ८) पांढरा हत्ती (न परवडणारा खर्चिक पाहुणा/प्रकल्प); ९) राम नसणे (अर्थ किंवा जीव नसणे); १०) सुतोवाच करणे (प्रारंभ करणे/ओझरती कल्पना देणे)",
                                            titleEn: "Crucial Idioms (Vakprachar): Aklecha Khandak (Foolish person), Untavarun Shelya Hakne (Giving armchair advice), Kapalmoksha (Death), Kakha Var Karne (Feigning ignorance/helplessness), Pandhra Hatti (Expensive liability), Sutovach Karne (Forewarning/Initial indication)",
                                            chips: ["अकलेचा खंदक (मूर्ख व्यक्ती)", "उंटावरून शेळ्या हाकणे", "सुतोवाच करणे (प्रारंभ करणे)", "पांढरा हत्ती (खर्चिक बाब)", "त्राटिका (भांडखोर)"]
                                        },
                                        {
                                            id: "st_gb_m15_01_02",
                                            titleMr: "लोकजीवनातील प्रमुख म्हणी व त्यांचे अर्थ: १) अति शहाणा त्याचा बैल रिकामा (अति हुशारी दाखवणारा शेवटी तोट्यात येतो); २) कोल्हा काकडीला राजी (क्षुद्र लोक क्षुद्र गोष्टींनीच संतुष्ट होतात); ३) चोराच्या उलट्या बोंबा (स्वतः गुन्हा करून दुसऱ्यावर आळ घेणे); ४) पालथ्या घड्यावर पाणी (केलेला उपदेश वाया जाणे); ५) बळी तो कान पिळी (बलवान माणूस इतरांवर अधिकार गाजवतो); ६) वासरात लंगडी गाय शहाणी (अडाणी लोकांत अल्पज्ञानी माणूस शहाणा ठरतो); ७) शितावरून भाताची परीक्षा (एका लहान अंशावरून संपूर्ण वस्तूची परीक्षा करणे)",
                                            titleEn: "Famous Proverbs (Mhani): Kolha kakdila raji (Small minds satisfied with trivial gains), Chorachya ultya bomba (Accusing victim while guilty), Palthya ghadyavar paani (Advice wasted), Vasarat langadi gaay shahani (Among fools, half-wise is king)",
                                            chips: ["कोल्हा काकडीला राजी", "पालथ्या घड्यावर पाणी", "चोराच्या उलट्या बोंबा", "वासरात लंगडी गाय शहाणी", "शितावरून भाताची परीक्षा"]
                                        },
                                        {
                                            id: "st_gb_m15_01_03",
                                            titleMr: "समान अर्थाच्या व परस्परविरोधी म्हणी: १) समान अर्थाच्या: 'आडात नाही तर पोहऱ्यात कुठून येणार' = 'शितावरून भाताची परीक्षा'; 'गरज सरो वैद्य मरो' = 'कामापुरता मामा'; २) परस्परविरोधी म्हणी: 'अति तिथे माती' × 'शितावरून भाताची परीक्षा'; 'नाव मोठे लक्षण खोटे' × 'नाव तसे गुण'",
                                            titleEn: "Parallel & Opposing Proverbs: Synonymous Mhani ('Garaj saro vaidya maro' = 'Kamapurta Mama'); Antonymous Mhani ('Naav mothe lakshan khote' vs 'Naav tase gun')",
                                            chips: ["समान अर्थाच्या म्हणी (कामापुरता मामा)", "परस्परविरोधी म्हणी", "म्हणींची सांगड"]
                                        }
                                    ],
                                    sources: [
                                        { book: "मराठी शब्दरत्न", standard: "बाळासाहेब शिंदे", chapterRef: "वाक्प्रचार व म्हणी कोश" },
                                        { book: "सुगम मराठी व्याकरण व लेखन", standard: "मो. रा. वाळंबे", chapterRef: "प्रकरण २८: वाक्प्रचार व म्हणी" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mar_c16",
                            code: "M16",
                            section: "E",
                            slug: "shuddhalekhan-rules-punctuation-and-sentence-correction",
                            nameMr: "शुद्धलेखन नियम, विरामचिन्हे आणि वाक्यशुद्धीकरण",
                            nameEn: "Orthography (Shuddhalekhan Rules), Punctuation Marks & Sentence Correction",
                            name: "शुद्धलेखन, विरामचिन्हे व वाक्यशुद्धी (Shuddhalekhan & Punctuation)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mar_c16",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mar_c15",
                            nextChapterId: "gb_mar_c17",
                            metaDescriptionMr: "महाराष्ट्र साहित्य महामंडळाचे १८ शुद्धलेखन नियम (अनुस्वार, ऱ्हस्व-दीर्घ, एकाक्षरी शब्द), शुद्ध-अशुद्ध शब्द ओळखणे, विरामचिन्हे (स्वल्पविराम, अर्धविराम, अपूर्णविराम, अपसारण चिन्ह), आणि व्याकरणदृष्ट्या अशुद्ध वाक्य दुरुस्ती.",
                            metaDescriptionEn: "In-depth review of Marathi Orthography: 18 Shuddhalekhan Rules approved by Maharashtra Sahitya Mahamandal (Anuswar, Hrasva-Deergha, Monosyllables), Punctuation marks, and Error detection in ungrammatical sentences.",
                            notesJsonPath: "/data/notes/group_b/mains/marathi/c16_shuddhalekhan.json",
                            quizTag: "gb_mar_orthography_01",
                            tags: ["Orthography", "Shuddhalekhan 18 Rules", "Hrasva Deergha", "Anuswar Rules", "Punctuation Marks", "Sentence Correction", "High-Weightage"],
                            searchKeywords: ["marathi shuddhalekhan 18 rules maharashtra sahitya mandal", "hrasva deergha rules ekakshari shabd", "anuswar rules uchhar anusar", "punctuation marks viramchinhe ardhviram swalpaviram", "sentence correction marathi vakya shuddhikarana", "शुद्धलेखनाचे १८ नियम", "ऱ्हस्व दीर्घ नियम", "अनुस्वार नियम", "विरामचिन्हे स्वल्पविराम अर्धविराम", "शुद्ध शब्द ओळखणे आशीर्वाद", "वाक्यशुद्धीकरण"],
                            topics: [
                                {
                                    id: "top_gb_m16_01",
                                    nameMr: "शासकीय १८ शुद्धलेखन नियम, ऱ्हस्व-दीर्घ, विरामचिन्हे आणि वाक्यदुरुस्ती",
                                    nameEn: "18 Official Orthographic Canons, Vowel Quantity, Punctuation & Error Rectification",
                                    subtopics: [
                                        {
                                            id: "st_gb_m16_01_01",
                                            titleMr: "अनुस्वाराचे नियम: १) ज्या वर्णाचा उच्चार स्पष्ट व खणखणीत नाकातून होतो त्यावरच अनुस्वार द्यावा (उदा. आंबा, घंटा, चिंच); २) ज्या वर्णाचा उच्चार नाकातून होत नाही केवळ लांबट होतो त्यावर अनुस्वार देऊ नये (उदा. 'नाव', 'गाव' वर पूर्वी अनुस्वार देत, आता देत नाहीत); ३) तत्सम शब्दांमधील परसवर्ण अनुनासिके (उदा. पंकज किंवा पङ्कज, निबंध किंवा निबन्धात अनुस्वार चालतो)",
                                            titleEn: "Anuswar Orthographic Rules: Anuswar placed strictly on clear nasal sounds (Amba, Ghanta); Obsolete nasal slurs removed (Gaav, Naav no longer carry anuswar); Parasavarna nasal equivalents",
                                            chips: ["अनुस्वार नियम", "स्पष्ट नासिका उच्चार", "परसवर्ण (पंकज / पङ्कज)"]
                                        },
                                        {
                                            id: "st_gb_m16_01_02",
                                            titleMr: "ऱ्हस्व-दीर्घ महत्त्वाचे नियम (MPSC हमखास विचारते): १) मराठीतील एकाक्षरी शब्दातील 'ई' किंवा 'ऊ' नेहमी दीर्घ लिहावा (उदा. मी, तू, ती, बी, पी, धू; अपवाद: 'नि' हा उभयान्वयी अव्यय ऱ्हस्व); २) मराठी शब्दाच्या शेवटी येणारा 'इ-कार' किंवा 'उ-कार' नेहमी दीर्घ असतो (उदा. पाटी, वही, लाडू, पेरू, जासूद; अपवाद: तत्सम शब्द जसे 'कवी', 'गुरू', 'मती' संस्कृतप्रमाणे ऱ्हस्व किंवा दीर्घ); ३) उपान्त्य अक्षर नियम (शेवटच्या अक्षराच्या अलीकडील अक्षर): अ-कारान्त शब्दाचे उपान्त्य 'ई' व 'ऊ' दीर्घ असते (उदा. कीड, दूध, वीट, पूर); ४) 'आणि', 'परंतु', 'तथापि' हे शब्द नेहमी ऱ्हस्व शेवटी असतात",
                                            titleEn: "Hrasva-Deergha Vowel Length Rules: Monosyllabic words are Long/Deergha (Mee, Too, Bee); Word-ending 'i' & 'u' are Long in Marathi (Patee, Vahee, Ladoo); Penultimate vowels in consonant-ending words are Long (Keed, Doodh, Veet); 'Aani', 'Parantu', 'Tathapi' are always Short",
                                            chips: ["एकाक्षरी शब्द दीर्घ (मी, तू, बी)", "उपान्त्य अक्षर दीर्घ (दूध, वीट, कीड)", "आणि, परंतु, तथापि (ऱ्हस्व शेवट)", "कवी, गुरू तत्सम नियम"]
                                        },
                                        {
                                            id: "st_gb_m16_01_03",
                                            titleMr: "परीक्षेतील वारंवार विचारले जाणारे शुद्ध शब्द (शुद्ध रूपे पाठ असणे आवश्यक): १) आशीर्वाद (आशिर्वाद नाही), २) परीक्षा (परिक्षा नाही), ३) उज्वल / उज्ज्वल, ४) कनिष्ठ (कनिष्ठ), ५) पुनर्विचार (पुनरविचार नाही), ६) मुहूर्त (मुहुर्त नाही), ७) दीपावली, ८) शारीरिक (शारिरिक नाही), ९) नीलिमा, १०) माहिती, ११) मैत्रीण, १२) कुतूहल, १३) कवयित्री (कवयित्री - कवियत्री नाही)",
                                            titleEn: "Frequently Tested Pure Word Spellings: Aashirwaad, Pareeksha, Ujjwal, Punarvichar, Muhurta, Shaaririk, Kavaitri (NOT Kaviyatri), Maitreen, Kutuhal",
                                            chips: ["आशीर्वाद (शुद्ध रूप)", "परीक्षा (दीर्घ री)", "कवयित्री (कवियत्री चूक)", "शारीरिक", "मुहूर्त"]
                                        },
                                        {
                                            id: "st_gb_m16_01_04",
                                            titleMr: "विरामचिन्हे (Punctuation Marks): १) पूर्णविराम (.); २) स्वल्पविराम (, - एकाच जातीचे शब्द लागोपाठ आल्यास); ३) अर्धविराम (; - दोन छोटी वाक्ये उभयान्वयी अव्ययाने जोडताना); ४) अपूर्णविराम (: - पुढील तपशील द्यायचा असल्यास); ५) प्रश्नचिन्ह (?); ६) उद्गारचिन्ह (!); ७) अवतरण चिन्ह (एकेरी ' ' व दुहेरी \" \"); ८) संयोगचिन्ह (- दोन शब्द जोडताना किंवा ओळीच्या शेवटी शब्द तोडताना); ९) अपसारण चिन्ह / डॅश (— बोलता बोलता विचारमालिका तुटल्यास किंवा स्पष्टीकरण देताना)",
                                            titleEn: "Punctuation Marks: Full Stop, Comma (Swalpaviram), Semi-colon (Ardhviram - connecting clauses), Colon (Apoornaviram - enumerating details), Hyphen (Sanyogchinhe), Dash (Apasaran chinhe - broken thought process)",
                                            chips: ["अर्धविराम (;)", "स्वल्पविराम (,)", "अपूर्णविराम (:)", "अपसारण चिन्ह (— डॅश)", "संयोगचिन्ह (-)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सुगम मराठी व्याकरण व लेखन", standard: "मो. रा. वाळंबे", chapterRef: "प्रकरण २९ व ३०: शुद्धलेखन नियम व विरामचिन्हे" },
                                        { book: "महाराष्ट्र साहित्य परिषद शुद्धलेखन नियमावली", standard: "शासकीय प्रमाण ग्रंथ", chapterRef: "१८ अधिकृत नियम" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mar_c17",
                            code: "M17",
                            section: "E",
                            slug: "reading-comprehension-unseen-passage-analysis",
                            nameMr: "उतारा आकलन (Comprehension): गद्य उतारा विश्लेषण व प्रश्न सोडवणूक",
                            nameEn: "Reading Comprehension: Unseen Prose Passage Analysis & Inference Extraction",
                            name: "उतारा आकलन (Passage Comprehension)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mar_c17",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mar_c16",
                            nextChapterId: "gb_mar_c18",
                            metaDescriptionMr: "अपरिचित गद्य उतारा आकलन (५ प्रश्न, १० गुण), उताऱ्याचा मध्यवर्ती विचार, शीर्षक निश्चिती, लेखकाचा दृष्टिकोन, शब्दांचे संदर्भातील अर्थ, आणि जलद वाचन तंत्र (Skimming & Scanning).",
                            metaDescriptionEn: "In-depth review of Reading Comprehension for MPSC Mains: Unseen prose analysis (5 questions, 10 marks), Central thematic extraction, Title selection, Author's tone/attitude, Contextual vocabulary, and Skimming/Scanning tactics.",
                            notesJsonPath: "/data/notes/group_b/mains/marathi/c17_comprehension.json",
                            quizTag: "gb_mar_comprehension_01",
                            tags: ["Comprehension", "Unseen Passage", "5 Questions 10 Marks", "Central Theme", "Title Identification", "Skimming Scanning", "High-Weightage"],
                            searchKeywords: ["marathi comprehension unseen passage mpsc mains", "central theme of passage title selection", "authors tone attitude inference questions", "skimming and scanning reading technique marathi", "उतारा आकलन", "गद्य उतारा ५ प्रश्न १० गुण", "मध्यवर्ती विचार", "योग्य शीर्षक देणे", "लेखकाचा दृष्टिकोन", "स्पीड रीडिंग Skimming"],
                            topics: [
                                {
                                    id: "top_gb_m17_01",
                                    nameMr: "उताऱ्याचे जलद वाचन, मध्यवर्ती गाभा शोधणे, शीर्षक आणि थेट/अनुमानित प्रश्न",
                                    nameEn: "Speed Scanning, Core Thesis Extraction, Titular Precision & Inferential Logic",
                                    subtopics: [
                                        {
                                            id: "st_gb_m17_01_01",
                                            titleMr: "उतारा आकलन रणनीती (५ प्रश्न / १० गुण): १) प्रथम प्रश्न वाचणे (Reverse Strategy) - प्रश्नांमधील कीवर्ड्स लक्षात ठेवून उताऱ्याचे वाचन सुरू करणे; २) स्किमिंग व स्कॅनिंग तंत्र (Skimming & Scanning) - संपूर्ण उतारा एका दमात वाचून मुख्य विषय समजून घेणे; ३) वेळेचे व्यवस्थापन: ५ प्रश्नांसाठी कमाल ६ ते ८ मिनिटे देणे",
                                            titleEn: "Comprehension Strategy (5 Questions / 10 Marks): Reverse Strategy (Read questions first to spot keywords), Skimming & Scanning for thesis comprehension, Strict time allocation (6-8 minutes max)",
                                            chips: ["५ प्रश्न (१० गुण)", "रिव्हर्स स्ट्रॅटेजी (आधी प्रश्न वाचणे)", "स्किमिंग व स्कॅनिंग", "वेळ नियोजन ६-८ मिनिटे"]
                                        },
                                        {
                                            id: "st_gb_m17_01_02",
                                            titleMr: "प्रश्नांचे प्रकार व सोडवणूक तंत्र: १) थेट तथ्यात्मक प्रश्न (Factual Questions - उताऱ्यातील वाक्यात थेट उत्तर असणारे); २) अनुमानाधारित प्रश्न (Inferential Questions - उताऱ्यात थेट न सांगता गर्भित अर्थ काढणे); ३) लेखकाचा दृष्टिकोन / सूर (Tone: उपरोधिक, आक्रमक, वैज्ञानिक, चिंतनात्मक); ४) उताऱ्यातील शब्दाचा संदर्भानुसार अर्थ (Contextual Meaning)",
                                            titleEn: "Question Typologies: Factual (Direct literal match), Inferential (Implicit deductions), Author's Tone (Sarcastic, Analytical, Scientific, Philosophical), and Contextual Vocabulary in the passage",
                                            chips: ["थेट तथ्यात्मक प्रश्न", "अनुमानाधारित प्रश्न (Inference)", "लेखकाचा दृष्टिकोन (Tone)", "संदर्भातील शब्दार्थ"]
                                        },
                                        {
                                            id: "st_gb_m17_01_03",
                                            titleMr: "उताऱ्याला समर्पक शीर्षक देणे (Title Selection): उताऱ्याचे शीर्षक हे संपूर्ण उताऱ्याचा मध्यवर्ती विचार (Central Idea) व्यक्त करणारे असावे; केवळ पहिल्या किंवा शेवटच्या ओळीवरून शीर्षक ठरवू नये; अत्यंत संकुचित किंवा अति-विस्तृत शीर्षक टाळून सर्वसमावेशक, संक्षिप्त व वेधक शीर्षक निवडणे",
                                            titleEn: "Titular Selection Heuristics: Title must capture the central overarching theme; Avoid overly narrow or excessively generic options; Select balanced, concise, captivating title",
                                            chips: ["योग्य शीर्षक निवड", "मध्यवर्ती विचार (Central Idea)", "संक्षिप्त व सर्वसमावेशक पर्याय"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सुगम मराठी व्याकरण व लेखन", standard: "मो. रा. वाळंबे", chapterRef: "प्रकरण ३१: आकलन व गद्य उतारा" },
                                        { book: "MPSC मुख्य परीक्षा प्रश्नपत्रिका संच", standard: "२०१२ ते २०२५", chapterRef: "मराठी उतारा आकलन विश्लेषण" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mar_c18",
                            code: "M18",
                            section: "E",
                            slug: "marathi-master-revision-rules-tables-and-pyq-trends",
                            nameMr: "मराठी भाषा मास्टर रिव्हिजन: व्याकरण सूत्रे, शॉर्टकट तक्ते व PYQ विश्लेषण",
                            nameEn: "Marathi Master Revision: Grammatical Rules Matrix, Mnemonics & 10-Year PYQ Trends",
                            name: "मराठी भाषा मास्टर रिव्हिजन (Master Revision: Rules & PYQs)",
                            category: "REVISION",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mar_c18",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mar_c17",
                            nextChapterId: null,
                            metaDescriptionMr: "मराठी व्याकरण नियमांचा मास्टर तक्ता (प्रयोग, समास, विभक्ती, आख्यात, शब्दसिद्धी), हमखास चुका होणारे घटक, आणि MPSC गट-ब मुख्य परीक्षेतील १० वर्षांचे ५० प्रश्नांचे PYQ विश्लेषण.",
                            metaDescriptionEn: "Master consolidation module: Consolidated grammatical rule sheet (Prayog, Samas, Vibhakti, Akhyats, Shabdasiddhi), High-frequency error pitfalls, and 10-year MPSC Group B Mains Paper 1 (50 questions) trend analysis.",
                            notesJsonPath: "/data/notes/group_b/mains/marathi/c18_master_revision.json",
                            quizTag: "gb_mar_revision_01",
                            tags: ["Revision", "Grammar Master Sheet", "Prayog Samas Shortcuts", "High-Yield Rules", "MPSC Mains Paper 1 Trends", "50 Questions Strategy", "High-Weightage"],
                            searchKeywords: ["marathi grammar master revision formula table", "mpsc mains paper 1 marathi 50 questions strategy", "prayog samas vibhakti shortcuts", "mpsc group b mains marathi pyq trends 2012 to 2025", "elimination techniques marathi language", "मराठी व्याकरण मास्टर तक्ता", "५० प्रश्न १०० गुण रणनीती", "प्रयोग समास शॉर्टकट", "१० वर्षांचे PYQ विश्लेषण", "मास्टर रिव्हिजन"],
                            topics: [
                                {
                                    id: "top_gb_m18_01",
                                    nameMr: "व्याकरण मास्टर कोष्टक, हमखास येणारे घटक, जलद क्लृप्त्या आणि पेपर सोडवण्याची रणनीती",
                                    nameEn: "Grammar Master Concordance, High-Frequency Topics, Speed Mnemonics & Exam Strategy",
                                    subtopics: [
                                        {
                                            id: "st_gb_m18_01_01",
                                            titleMr: "व्याकरण शॉर्टकट मास्टर कोष्टक: १) प्रयोग: कर्ता प्रथमेत = कर्तरी; कर्म प्रथमेत = कर्मणी; कर्ता व कर्म दोघांना प्रत्यय = भावे; २) समास: १ ले पद प्रधान = अव्ययीभाव; २ रे पद प्रधान = तत्पुरुष; दोन्ही पदे प्रधान = द्वंद्व; ३ रा अर्थ = बहुव्रीहि; ३) आख्यात: ताख्यात = वर्तमान, लाख्यात = भूतकाळ, ईलाख्यात = भविष्यकाळ, वा-आख्यात = विध्यर्थ; ४) शब्दसिद्धी: बदल न झालेला = तत्सम, बदललेला = तद्भव, मूळचा = देशी",
                                            titleEn: "Grammar Shortcut Master Matrix: 1) Prayog: Subject in Prathama = Kartari, Object in Prathama = Karmani, Both inflected = Bhave; 2) Samas: 1st word = Avyayibhav, 2nd word = Tatpurush, Both = Dvandva, 3rd entity = Bahuvrihi; 3) Akhyat: T = Present, L = Past, Il = Future, Va = Vidyarth",
                                            chips: ["प्रयोग शॉर्टकट (कर्ता प्रथमा=कर्तरी)", "समास शॉर्टकट (पहिले=अव्ययीभाव)", "आख्यात शॉर्टकट", "शब्दसिद्धी क्लृप्ती"]
                                        },
                                        {
                                            id: "st_gb_m18_01_02",
                                            titleMr: "MPSC मुख्य पेपर १ गुणविभागणी विश्लेषण (५० प्रश्न / १०० गुण): १) शुद्ध व्याकरण (२५ ते २८ प्रश्न: वर्णविचार, संधी, नाम, विभक्ती, प्रयोग, समास, वाक्यरूपांतर, अलंकार); २) शब्दसंग्रह (१५ ते १८ प्रश्न: समानार्थी, विरुद्धार्थी, शब्दसिद्धी, वाक्प्रचार, म्हणी, शुद्ध शब्द); ३) उतारा आकलन (५ प्रश्न - हमखास १० गुण); वेळेचे नियोजन: ६० मिनिटांपैकी मराठीच्या ५० प्रश्नांसाठी कमाल २५ ते २८ मिनिटे",
                                            titleEn: "MPSC Mains Paper 1 Weightage Split (50 Questions / 100 Marks): Core Grammar (25-28 Qs), Vocabulary & Idioms (15-18 Qs), Reading Comprehension (5 Qs = 10 Marks); Time Allocation: 25-28 mins out of 60 mins for Marathi section",
                                            chips: ["व्याकरण २५-२८ प्रश्न", "शब्दसंग्रह १५-१८ प्रश्न", "उतारा ५ प्रश्न (१० गुण)", "वेळ २५-२८ मिनिटे"]
                                        },
                                        {
                                            id: "st_gb_m18_01_03",
                                            titleMr: "१० वर्षांचे MPSC PYQ ट्रेंड्स व एलिमिनेशन तंत्र: वाक्प्रचार व म्हणींमधील सूक्ष्म पर्यायांची तुलना; 'केवल', 'मिश्र' व 'संयुक्त' वाक्यांमधील उभयान्वयी अव्ययांवरून वर्गीकरण; मराठीत पैकीच्या पैकी (४५+ प्रश्न बरोबर) गुण मिळवण्यासाठी मो. रा. वाळंबे यांच्या उदाहरणांची तंतोतंत उजळणी",
                                            titleEn: "10-Year MPSC PYQ Trend Analysis & Elimination Strategy: Comparative evaluation of subtle idiom distractors; Clause conjunction filters; Achieving 45+ score through thorough mastery of Mo. Ra. Walimbe's classic examples",
                                            chips: ["PYQ ट्रेंड्स विश्लेषण", "४५+ प्रश्न अचूक सोडवणे", "मो रा वाळंबे उदाहरणे", "एलिमिनेशन पद्धत"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सुगम मराठी व्याकरण व लेखन", standard: "मो. रा. वाळंबे", chapterRef: "संपूर्ण व्याकरण उजळणी" },
                                        { book: "MPSC मुख्य परीक्षा मागील वर्षांच्या प्रश्नपत्रिका", standard: "२०१२ ते २०२५", chapterRef: "मराठी पेपर १ प्रश्न संच व विश्लेषण" }
                                    ]
                                }
                            ]
                        }
                    ]
                },


                {
                    id: "gb_mains_english",
                    code: "ENG",
                    slug: "english-language-grammar-vocabulary-comprehension",
                    nameMr: "इंग्रजी भाषा व्याकरण, शब्दसंग्रह व उतारा आकलन",
                    nameEn: "English Language Grammar, Vocabulary & Reading Comprehension",
                    name: "इंग्रजी भाषा (English Language - Mains Paper 1)",
                    officialScope: "English Grammar (Parts of Speech, Tenses, Voice, Narration, Subject-Verb Concord, Sentence Synthesis, Degrees of Comparison, Articles), Vocabulary (Synonyms, Antonyms, One-word Substitutions, Idioms, Phrasal Verbs, Spellings), and Reading Comprehension for MPSC Group B Mains Paper 1",
                    version: "1.0",
                    verifiedDate: "2026-10-28",
                    notesJsonBaseDir: "/data/notes/group_b/mains/english/",


                    // UI Theme & Theming Metadata
                    theme: {
                        primaryColor: "#2563eb",        // Royal Blue / Academic Oxford Theme
                        bgColor: "#eff6ff",
                        iconClass: "ri-english-input"
                    },


                    // अभ्यास व डॅशबोर्ड ॲनालिटिक्स मेट्रिक्स
                    metrics: {
                        totalChapters: 18,
                        totalEstimatedHours: 60,
                        avgQuestionsInMains: 50,
                        targetMarks: 100,
                        weightageRange: "50 Questions / 100 Marks"
                    },


                    // विषय पातळीवरील स्मार्ट टॅग्ज
                    subjectTags: [
                        "Core-Mains",
                        "Mains-Paper-1",
                        "High-Scoring",
                        "Rule-Based",
                        "Vocabulary-Intensive",
                        "Standard-Literature-Wren-Martin"
                    ],


                    filterCategory: "LANGUAGE",
                    searchKeywords: [
                        "mpsc group b mains english syllabus", "english grammar wren and martin balasaheb shinde",
                        "direct indirect speech active passive voice", "subject verb agreement rules syntax",
                        "idioms phrases phrasal verbs synonyms antonyms", "reading comprehension passage english mpsc",
                        "इंग्रजी व्याकरण", "Active and Passive Voice", "Direct Indirect Speech", "Subject Verb Concord", "Phrasal Verbs Idioms", "English Vocabulary"
                    ],


                    referenceSources: [
                        {
                            name: "MPSC Non-Gazetted Group B Combined Mains Syllabus",
                            role: "अधिकृत परीक्षा-संदर्भ",
                            url: "https://mpsc.gov.in"
                        },
                        {
                            name: "High School English Grammar & Composition - Wren & Martin",
                            role: "आंतरराष्ट्रीय प्रमाणित मूलभूत संदर्भ ग्रंथ"
                        },
                        {
                            name: "Objective General English - S.P. Bakshi (Arihant) / बाळासाहेब शिंदे",
                            role: "स्पर्धा परीक्षाभिमुख नियम व प्रश्न सराव"
                        },
                        {
                            name: "Word Power Made Easy - Norman Lewis",
                            role: "सखोल शब्दसंग्रह, मूळ धातू (Root Words) व व्युत्पत्ती"
                        },
                        {
                            name: "English Grammar in Use - Raymond Murphy (Cambridge)",
                            role: "व्यावहारिक व्याकरण व काळ संरचना"
                        }
                    ],


                    chapters: [
                        // =========================================================================
                        // विभाग A — Parts of Speech & Concord (मूलभूत व्याकरण घटक)
                        // =========================================================================
                        {
                            id: "gb_eng_c01",
                            code: "E01",
                            section: "A",
                            slug: "parts-of-speech-nouns-pronouns-and-adjectives",
                            nameMr: "पार्ट्स ऑफ स्पीच: नाम, सर्वनाम आणि विशेषण (नियम व एरर्स)",
                            nameEn: "Parts of Speech: Nouns, Pronouns, Adjectives & Common Errors",
                            name: "नाम, सर्वनाम व विशेषण (Nouns, Pronouns & Adjectives)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_eng_c01",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: null,
                            nextChapterId: "gb_eng_c02",
                            metaDescriptionMr: "Noun rules (Singular/Plural errors: Scenery, Furniture, Cattle), Possessive case apostrophe, Pronoun cases (Subjective, Objective, Relative pronouns: Who/Whom/Which/That), and Adjectives order & qualitative rules.",
                            metaDescriptionEn: "In-depth review of Nouns (Singular only nouns, plural in form but singular in use: Mathematics, News), Apostrophe rules, Pronoun order (231 rule in good manners, 123 in confessions), Relative pronouns, and Adjective order (OSASCOMP).",
                            notesJsonPath: "/data/notes/group_b/mains/english/c01_nouns_pronouns.json",
                            quizTag: "gb_eng_noun_01",
                            tags: ["English Grammar", "Parts of Speech", "Nouns Errors", "Pronouns 231 Rule", "Adjectives OSASCOMP", "High-Weightage"],
                            searchKeywords: ["nouns rules common errors scenery furniture cattle", "pronoun order rule 231 123", "relative pronouns who whom which that", "adjective order osascomp", "english grammar parts of speech mpsc", "नाम व सर्वनाम नियम", "Pronouns Rules", "Noun Number and Gender"],
                            topics: [
                                {
                                    id: "top_gb_e01_01",
                                    nameMr: "नामांचे व्याकरणीय नियम, सर्वनामांची रचना व विशेषणांचे क्रम",
                                    nameEn: "Nominal Inflections, Pronominal Orders & Adjectival Hierarchy",
                                    subtopics: [
                                        {
                                            id: "st_gb_e01_01_01",
                                            titleMr: "नामांचे महत्त्वाचे नियम (MPSC वारंवार विचारते): १) नेहमी एकवचनी वापरली जाणारी नामे (त्यांचे अनेकवचन होत नाही व एकवचनी क्रियापद घेतात: Scenery, Furniture, Advice, Information, Luggage, Poetry, Machinery); २) दिसायला अनेकवचनी पण अर्थाने एकवचनी नामे: Mathematics, Physics, News, Politics, Innings, Measles, Rickets; ३) दिसायला एकवचनी पण अर्थाने अनेकवचनी नामे (अनेकवचनी क्रियापद घेतात): Cattle, Gentry, Poultry, Folk, People, Police; ४) दोन भागांनी बनलेले नेहमी अनेकवचनी शब्द: Trousers, Scissors, Spectacles, Binoculars",
                                            titleEn: "Noun Rules & Concord: 1) Invariant Singulars (Uncountable taking singular verb: Scenery, Furniture, Luggage, Advice, Information); 2) Plural in Form, Singular in Use (Mathematics, News, Politics, Innings); 3) Singular in Form, Plural in Use (Cattle, Poultry, Gentry, Police take plural verb); 4) Paired items always plural (Scissors, Trousers, Spectacles)",
                                            chips: ["Scenery, Furniture (नेहमी एकवचनी)", "Cattle, Police (अनेकवचनी क्रियापद)", "Mathematics, News (एकवचनी)", "Scissors, Trousers"]
                                        },
                                        {
                                            id: "st_gb_e01_01_02",
                                            titleMr: "अपॉस्ट्रॉफीचे नियम (Possessive Case 's): सजीव वस्तूंना 's लागतो (Ram's book, Cow's milk); निर्जीव वस्तूंना सामान्यतः 's लागत नाही ('Table's leg' चूक -> 'The leg of the table' बरोबर); ज्या शब्दांचा शेवट 's' किंवा 's' च्या उच्चाराने होतो त्यांना केवळ अपॉस्ट्रॉफी लागते (Keats' poems, Boys' hostel); सयुंक्त नामांमध्ये शेवटच्या शब्दाला 's लागतो (Sister-in-law's house)",
                                            titleEn: "Apostrophe Rules: Used with living entities (Boy's pen); Not with non-living (Leg of table, not Table's leg); Sibilant 's' endings take apostrophe only (Boys' school, Keats' odes); Compound nouns take apostrophe on last word (Father-in-law's will)",
                                            chips: ["Apostrophe 's नियम", "निर्जीव वस्तूंना 's नाही", "Boys' school", "Sister-in-law's house"]
                                        },
                                        {
                                            id: "st_gb_e01_01_03",
                                            titleMr: "सर्वनामांचे नियम (Pronoun Rules): १) तिन्ही पुरुषांची सर्वनामे एकत्र आल्यास सामान्य वाक्यात क्रम: २-३-१ (Second Person, Third Person, First Person - उदा. 'You, he and I are friends'); वाईट कृत्य किंवा चूक मान्य करताना क्रम: १-२-३ ('I, you and he are guilty'); २) Than आणि As नंतर Subjective Case येते ('He is taller than I', not me); ३) Let, Between, Except नंतर Objective Case येते ('Let you and me do this')",
                                            titleEn: "Pronoun Sequences & Cases: 2-3-1 Rule for positive sentences (You, he and I); 1-2-3 Rule for confessions/faults (I, you and he); Subjective case after 'than/as' (Taller than I); Objective case after 'Let/Between/Except' (Between you and me)",
                                            chips: ["२३१ चा नियम (You, he and I)", "१२३ चा नियम (चूक मान्य करताना)", "Than I (not me)", "Between you and me"]
                                        },
                                        {
                                            id: "st_gb_e01_01_04",
                                            titleMr: "विशेषण नियम व क्रम (Adjectives): १) लॅटिन तुलनात्मक विशेषणांनंतर 'than' ऐवजी 'to' येतो (Senior, Junior, Superior, Inferior, Prior, Preferable + to; उदा. 'He is senior to me'); २) विशेषणांचा योग्य क्रम (OSASCOMP नियम: Opinion -> Size -> Age -> Shape -> Color -> Origin -> Material -> Purpose); ३) Little, A Little, The Little मधील फरक (Little = जवळजवळ नाही, A Little = थोडेफार, The Little = जे थोडे आहे ते सर्व)",
                                            titleEn: "Adjective Rules & Hierarchy: Latin comparatives take 'to' not 'than' (Senior to, Junior to, Preferable to); OSASCOMP sequence for multiple adjectives; Determiner nuances: Little (Negative), A Little (Some), The Little (All that remains)",
                                            chips: ["Senior / Junior to me ('than' नाही)", "OSASCOMP विशेषण क्रम", "Little, A Little, The Little", "Elder vs Older"]
                                        }
                                    ],
                                    sources: [
                                        { book: "High School English Grammar", standard: "Wren & Martin", chapterRef: "Chapters 5 to 13: Nouns, Pronouns, Adjectives" },
                                        { book: "Objective General English", standard: "S.P. Bakshi", chapterRef: "Unit 1: Nouns & Pronouns Rules" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_eng_c02",
                            code: "E02",
                            section: "A",
                            slug: "verbs-modal-auxiliaries-and-non-finites",
                            nameMr: "क्रियापद, मोडल ऑक्झिलरी आणि नॉन-फायनाईट व्हर्ब्स (Infinitive, Gerund, Participle)",
                            nameEn: "Verbs: Finite vs Non-Finite (Gerunds, Infinitives, Participles) & Modal Auxiliaries",
                            name: "क्रियापद, मोडल्स व नॉन-फायनाईट्स (Verbs & Modals)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_eng_c02",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_eng_c01",
                            nextChapterId: "gb_eng_c03",
                            metaDescriptionMr: "Transitive vs Intransitive verbs, Modals (Can, Could, May, Might, Must, Ought to, Should, Would, Used to), Gerund (V-ing as Noun), Infinitive (to + V1), Bare Infinitive, आणि Participle (Present/Past).",
                            metaDescriptionEn: "In-depth review of Verbs: Transitive/Intransitive verbs, Modal Auxiliaries (Permissions, Obligations, Probability, Past habits), Non-Finites: Gerunds (Verbs followed by Gerund: avoid, enjoy), Infinitives vs Bare Infinitives (make, let, bid), and Participles.",
                            notesJsonPath: "/data/notes/group_b/mains/english/c02_verbs_modals.json",
                            quizTag: "gb_eng_verbs_01",
                            tags: ["English Grammar", "Verbs", "Modal Auxiliaries", "Gerund V-ing", "Bare Infinitive", "Participles", "High-Weightage"],
                            searchKeywords: ["finite and non finite verbs english grammar", "modal auxiliaries can could may might must ought to", "gerund vs infinitive verbs followed by gerund", "bare infinitive without to make let see hear", "participles present past participle dangling modifier", "क्रियापद मोडल ऑक्झिलरी", "Gerund Infinitive नियम", "Bare Infinitive", "May vs Might"]
                        },
                        {
                            id: "gb_eng_c03",
                            code: "E03",
                            section: "A",
                            slug: "subject-verb-agreement-syntax-and-concord",
                            nameMr: "सब्जेक्ट-व्हर्ब ॲग्रीमेंट (Subject-Verb Concord / Syntax चे महत्त्वाचे नियम)",
                            nameEn: "Subject-Verb Agreement (Concord): Cardinal Rules & Error Spotting",
                            name: "सब्जेक्ट-व्हर्ब ॲग्रीमेंट (Subject-Verb Concord)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_eng_c03",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_eng_c02",
                            nextChapterId: "gb_eng_c04",
                            metaDescriptionMr: "Subject-Verb Concord चे २०+ सुवर्ण नियम: Either...or, Neither...nor, Not only...but also (दुसऱ्या कर्त्यानुसार), As well as, Along with, With (पहिल्या कर्त्यानुसार), Each, Every, One of the + Plural Noun + Singular Verb.",
                            metaDescriptionEn: "Exhaustive coverage of Subject-Verb Concord: 'As well as / Along with' (1st subject dictates), 'Either-or / Neither-nor' (Proximity to nearest subject dictates), 'One of the + Plural Noun + Singular Verb', collective nouns (Jury undivided vs divided), and indefinite pronouns.",
                            notesJsonPath: "/data/notes/group_b/mains/english/c03_subject_verb_agreement.json",
                            quizTag: "gb_eng_sva_01",
                            tags: ["Core-Grammar", "Subject Verb Agreement", "Concord Rules", "Either Or Neither Nor", "As Well As Rule", "One of the Plural Noun", "High-Weightage"],
                            searchKeywords: ["subject verb agreement rules mpsc error spotting", "either or neither nor verb agrees with nearest subject", "as well as with along with verb agrees with first subject", "one of the plural noun singular verb rule", "collective noun jury committee singular plural verb", "सब्जेक्ट व्हर्ब ॲग्रीमेंट", "Subject Verb Concord Rules", "Neither Nor Either Or", "As well as नियम"]
                        },
                        {
                            id: "gb_eng_c04",
                            code: "E04",
                            section: "A",
                            slug: "tenses-and-their-aspects-in-english",
                            nameMr: "काळांचे १२ प्रकार (Tenses): रचना, उपयोग, कंडिशन्स व सिक्वेन्स ऑफ टेन्सेस",
                            nameEn: "Tenses & Aspectual Framework: 12 Structures, Usage & Sequence of Tenses",
                            name: "काळ व रचना (12 Tenses & Sequence of Tenses)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 5,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_eng_c04",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_eng_c03",
                            nextChapterId: "gb_eng_c05",
                            metaDescriptionMr: "१२ काळांची सूत्रे, Simple Present (Universal truths, habits), Present Perfect vs Simple Past (Since/For, Ago), Past Perfect (दोन भूतकाळी क्रिया - पहिली क्रिया Had + V3, दुसरी V2), आणि Sequence of Tenses नियम.",
                            metaDescriptionEn: "In-depth review of 12 Tenses: Simple Present (Scientific truths, habituals), Present Perfect vs Past Simple (Keywords: since, yet, already vs ago, yesterday), Past Perfect dual actions (First action Had+V3, second action V2), and Sequence of Tenses rules.",
                            notesJsonPath: "/data/notes/group_b/mains/english/c04_tenses.json",
                            quizTag: "gb_eng_tenses_01",
                            tags: ["Core-Grammar", "Tenses 12 Structures", "Present Perfect vs Simple Past", "Past Perfect Dual Actions", "Sequence of Tenses", "Since For Usage", "High-Weightage"],
                            searchKeywords: ["12 tenses formulas english grammar rules", "simple present tense universal truth habits", "present perfect vs simple past since for ago", "past perfect tense two actions patient died before doctor came", "sequence of tenses rules mpsc", "काळांचे १२ प्रकार सूत्रे", "Past Perfect Had + V3", "Since आणि For फरक", "Sequence of Tenses"]
                        },
                        {
                            id: "gb_eng_c05",
                            code: "E05",
                            section: "A",
                            slug: "articles-determiners-and-prepositions",
                            nameMr: "आर्टिकल्स (A, An, The), डिटरमिनर्स आणि प्रिपोझिशन्सचे अचूक नियम",
                            nameEn: "Articles (Indefinite & Definite 'The'), Determiners & Appropriate Prepositions",
                            name: "आर्टिकल्स व प्रिपोझिशन्स (Articles & Prepositions)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 5,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_eng_c05",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_eng_c04",
                            nextChapterId: "gb_eng_c06",
                            metaDescriptionMr: "आर्टिकल्स (A/An उच्चारानुसार Vowel Sound, Definite Article 'The' चा वापर व ओमिशन/Omission of Articles), Prepositions (In/At, Between/Among, Beside/Besides, Since/For), आणि Fixed Prepositions (Accused of, Senior to).",
                            metaDescriptionEn: "In-depth review of Articles: Phonetic A/An usage (European, Honest, MBA, University), The usage (Rivers, Mountains, Superlatives) & Omission of Articles; Prepositional distinctions (In/Into, On/Upon, Beside/Besides), and Fixed Prepositions matrix.",
                            notesJsonPath: "/data/notes/group_b/mains/english/c05_articles_prepositions.json",
                            quizTag: "gb_eng_articles_01",
                            tags: ["Core-Grammar", "Articles A An The", "Omission of Articles", "Prepositions Rules", "Fixed Prepositions List", "Beside Besides", "High-Weightage"],
                            searchKeywords: ["articles a an the rules vowel sound european honest", "omission of articles before languages meals diseases", "prepositions difference between in at into on upon", "beside vs besides since vs for", "fixed prepositions list accused of addicted to senior to", "आर्टिकल्स A An The नियम", "Prepositions नियम", "Fixed Prepositions", "Beside vs Besides"]
                        },


                        // =========================================================================
                        // विभाग B — व्हॉईस, नरेशन व डिग्री (Voice, Speech & Comparison Transformations)
                        // =========================================================================
                        {
                            id: "gb_eng_c06",
                            code: "E06",
                            section: "B",
                            slug: "active-and-passive-voice-rules-and-transformations",
                            nameMr: "ॲक्टिव्ह आणि पॅसिव्ह व्हॉईस (Active & Passive Voice: सर्व काळांतील रूपांतरणे)",
                            nameEn: "Active & Passive Voice: Transformation Algorithms across Tenses, Modals & Imperatives",
                            name: "व्हॉईस: ॲक्टिव्ह व पॅसिव्ह (Active & Passive Voice)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 5,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_eng_c06",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_eng_c05",
                            nextChapterId: "gb_eng_c07",
                            metaDescriptionMr: "Active to Passive सूत्र (Subject-Object अदलाबदल, Be + V3), ८ काळांचे पॅसिव्ह (४ काळांचे पॅसिव्ह होत नाही), Imperative Sentences (Let + Object + be + V3), Who चे By whom, आणि Prepositional Passive.",
                            metaDescriptionEn: "Exhaustive coverage of Active & Passive Voice: Structural shifts, 8 translatable tenses (Continuous/Perfect, 4 non-translatable tenses), Imperative forms ('Let it be done' vs 'You are requested to'), Interrogatives ('Who' -> 'By whom'), and Verbs with fixed prepositions.",
                            notesJsonPath: "/data/notes/group_b/mains/english/c06_active_passive_voice.json",
                            quizTag: "gb_eng_voice_01",
                            tags: ["Core-Grammar", "Active Passive Voice", "Voice Transformation Rules", "Imperative Passive Let", "By Whom Interrogatives", "High-Weightage"],
                            searchKeywords: ["active passive voice rules chart all tenses", "passive of imperative sentences let be v3", "interrogative passive voice who to by whom", "verbs with fixed preposition in passive voice laughed at", "active to passive conversion shortcuts mpsc", "ॲक्टिव्ह पॅसिव्ह व्हॉईस नियम", "Let + Object + be + V3", "Who चे By whom", "Voice Transformation"]
                        },
                        {
                            id: "gb_eng_c07",
                            code: "E07",
                            section: "B",
                            slug: "direct-and-indirect-speech-narration",
                            nameMr: "डायरेक्ट आणि इनडायरेक्ट स्पीच (Direct & Indirect Speech / Narration)",
                            nameEn: "Direct & Indirect Speech: Reporting Verbs, Tense Shifts, Pronoun & Adverb Shifts",
                            name: "डायरेक्ट व इनडायरेक्ट स्पीच (Direct & Indirect Speech)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 5,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_eng_c07",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_eng_c06",
                            nextChapterId: "gb_eng_c08",
                            metaDescriptionMr: "Reporting Verb (Said/Told), Tense Shifts (Present -> Past, Past Simple -> Past Perfect), सार्वकालिक सत्यामध्ये काळ न बदलणे, Interrogative Sentences (If/Whether, Wh-words), Imperative (Ordered/Requested to), Exclamatory, आणि Adverbs बदल (Now -> Then, Today -> That day).",
                            metaDescriptionEn: "In-depth review of Direct & Indirect Speech: Reporting verb dynamics, Systematic back-shifting of tenses, Invariant universal truths/historical facts, Interrogatives (If/whether vs Wh-conjunctions), Imperatives (Infinitive 'to'), Exclamatories, and Time/Place deictic shifts.",
                            notesJsonPath: "/data/notes/group_b/mains/english/c07_direct_indirect_speech.json",
                            quizTag: "gb_eng_narration_01",
                            tags: ["Core-Grammar", "Direct Indirect Speech", "Narration Rules", "Tense Shifts", "Universal Truth Invariant", "If Whether Interrogatives", "High-Weightage"],
                            searchKeywords: ["direct indirect speech rules chart tenses", "reporting verb said to told asked requested", "universal truth no tense change indirect speech", "interrogative indirect speech if whether wh words", "time and place words change now then yesterday previous day", "डायरेक्ट इनडायरेक्ट स्पीच नियम", "Narration Tense Shifts", "If / Whether नियम", "Universal Truth"]
                        },
                        {
                            id: "gb_eng_c08",
                            code: "E08",
                            section: "B",
                            slug: "degrees-of-comparison-positive-comparative-superlative",
                            nameMr: "डिग्रीज ऑफ कम्पॅरिझन: पॉझिटिव्ह, कम्पॅरेटिव्ह व सुपरलेटिव्ह (परस्पर रूपांतरण)",
                            nameEn: "Degrees of Comparison: Positive, Comparative & Superlative Transformations",
                            name: "डिग्रीज ऑफ कम्पॅरिझन (Degrees of Comparison)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_eng_c08",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_eng_c07",
                            nextChapterId: "gb_eng_c09",
                            metaDescriptionMr: "Positive (as...as, so...as), Comparative (-er / more...than any other), Superlative (the -est / most), 'One of the' ची वाक्ये (Very few...as...as, than most other), आणि दोनच घटकांमधील तुलना (Superlative होत नाही).",
                            metaDescriptionEn: "In-depth review of Degrees of Comparison: Positive Degree (as...as / so...as), Comparative (-er / more than any other), Superlative (The best / -est); Special 'One of the' paradigm (Very few...as...as, than most other); Two-entity comparisons without superlative form.",
                            notesJsonPath: "/data/notes/group_b/mains/english/c08_degrees_comparison.json",
                            quizTag: "gb_eng_degrees_01",
                            tags: ["Core-Grammar", "Degrees of Comparison", "Positive Degree", "Comparative Degree", "Superlative Degree", "One of the Transformation", "High-Weightage"],
                            searchKeywords: ["degrees of comparison rules transformation", "positive comparative superlative formula chart", "one of the superlative to very few positive than most other", "no other as as than any other superlative", "two items comparison no superlative degree", "डिग्रीज ऑफ कम्पॅरिझन", "Positive to Comparative", "One of the नियम", "No other vs Very few"]
                        },


                        // =========================================================================
                        // विभाग C — वाक्यसंश्लेषण व रूपांतरण (Sentence Synthesis & Structures)
                        // =========================================================================
                        {
                            id: "gb_eng_c09",
                            code: "E09",
                            section: "C",
                            slug: "types-of-sentences-clauses-and-sentence-synthesis",
                            nameMr: "वाक्यांचे प्रकार, क्लॉजेस (Clauses) आणि वाक्यसंश्लेषण (Simple, Compound, Complex)",
                            nameEn: "Sentence Architecture: Clauses (Noun, Adjective, Adverb) & Synthesis (Simple, Compound, Complex)",
                            name: "वाक्यप्रकार, क्लॉजेस व संश्लेषण (Clauses & Synthesis)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 5,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_eng_c09",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_eng_c08",
                            nextChapterId: "gb_eng_c10",
                            metaDescriptionMr: "Principal व Subordinate Clauses (Noun, Adjective/Relative, Adverb Clauses of time, reason, condition), Simple Sentences, Compound Sentences (FANBOYS), Complex Sentences, आणि परस्पर वाक्यसंश्लेषण (Synthesis).",
                            metaDescriptionEn: "In-depth review of Clauses & Synthesis: Independent vs Dependent Clauses, Noun Clause, Adjective Clause, Adverb Clauses (9 sub-types), Sentence structures: Simple (one finite verb), Compound (FANBOYS coordinators), Complex (Subordinators), and Sentence Synthesis.",
                            notesJsonPath: "/data/notes/group_b/mains/english/c09_clauses_synthesis.json",
                            quizTag: "gb_eng_clauses_01",
                            tags: ["Core-Grammar", "Clauses Identification", "Noun Clause Adjective Clause", "Sentence Synthesis", "Simple Compound Complex", "FANBOYS", "High-Weightage"],
                            searchKeywords: ["clauses identification noun adjective adverb clause", "sentence synthesis simple compound complex conversion", "fanboys coordinating conjunctions compound sentence", "subordinating conjunctions complex sentence", "transforming simple to compound complex english", "क्लॉजेस Clauses प्रकार", "Simple Compound Complex Sentences", "वाक्यसंश्लेषण Synthesis", "FANBOYS"]
                        },
                        {
                            id: "gb_eng_c10",
                            code: "E10",
                            section: "C",
                            slug: "transformation-of-sentences-and-question-tags",
                            nameMr: "वाक्यरूपांतर (Remove Too, No sooner...than, As soon as) आणि क्वेश्चन टॅग्स (Question Tags)",
                            nameEn: "Sentence Transformations (Remove Too, No Sooner, Hardly When) & Question Tags",
                            name: "वाक्यरूपांतर व क्वेश्चन टॅग्ज (Transformations & Question Tags)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_eng_c10",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_eng_c09",
                            nextChapterId: "gb_eng_c11",
                            metaDescriptionMr: "Remove 'Too...to' (so...that...cannot/could not), 'No sooner...did/had...than', 'Hardly/Scarcely...had...when', 'As soon as', Question Tags चे नियम (सकारात्मक वाक्याला नकारात्मक टॅग, Let's = shall we, I am = aren't I, Imperative = will you).",
                            metaDescriptionEn: "In-depth review of Transformations: Remove 'Too...to' using 'So...that...not', Inversion structures ('No sooner had...than', 'Hardly had...when'), and Question Tags rules (Positive sentence -> Negative tag, 'I am' -> 'aren't I', Imperatives -> 'will you', 'Let's' -> 'shall we').",
                            notesJsonPath: "/data/notes/group_b/mains/english/c10_transformations_tags.json",
                            quizTag: "gb_eng_tags_01",
                            tags: ["Core-Grammar", "Question Tags Rules", "Aren't I Exception", "Remove Too So That Not", "No Sooner Did Had Than", "Hardly When Inversion", "High-Weightage"],
                            searchKeywords: ["question tags rules english grammar exceptions arent i", "remove too to using so that cannot could not", "no sooner than hardly when scarcely when rules inversion", "imperative sentence question tag will you", "lets question tag shall we", "क्वेश्चन टॅग्ज Question Tags नियम", "Aren't I", "No sooner had than", "Hardly had when", "Remove Too...to"]
                        },
                        {
                            id: "gb_eng_c11",
                            code: "E11",
                            section: "C",
                            slug: "conditional-sentences-and-subjunctive-mood",
                            nameMr: "कंडिशनल सेन्टेन्सेस (अटदर्शक वाक्ये: Type 0, 1, 2, 3) आणि सबजंक्टिव्ह मूड",
                            nameEn: "Conditional Sentences (Zero, First, Second, Third Conditionals) & Subjunctive Mood",
                            name: "कंडिशनल सेन्टेन्सेस (Conditionals & Subjunctive Mood)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_eng_c11",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_eng_c10",
                            nextChapterId: "gb_eng_c12",
                            metaDescriptionMr: "Zero Conditional (If + V1, V1), First Conditional (If + V1, will + V1), Second Conditional (If + V2/were, would + V1 - काल्पनिक इच्छा), Third Conditional (If + had + V3, would have + V3 - भूतकाळातील अशक्य अट), आणि 'Unless' चे नियम.",
                            metaDescriptionEn: "In-depth review of Conditionals: Zero Conditional (Scientific facts), Type 1 (Real/Probable: If + Present, Will + Verb), Type 2 (Unreal/Hypothetical: If + Past/Were, Would + Verb), Type 3 (Impossible Past: If + Past Perfect, Would have + V3), Subjunctive 'I wish I were', and 'Unless' rules.",
                            notesJsonPath: "/data/notes/group_b/mains/english/c11_conditionals.json",
                            quizTag: "gb_eng_conditionals_01",
                            tags: ["Core-Grammar", "Conditional Sentences", "Type 1 2 3 Conditionals", "If Had V3 Would Have V3", "Subjunctive Mood Were", "Unless Rules", "High-Weightage"],
                            searchKeywords: ["conditional sentences type 0 1 2 3 formulas", "third conditional if had v3 would have v3 error spotting", "second conditional hypothetical if i were a bird", "unless equals if not rules", "subjunctive mood english grammar", "कंडिशनल वाक्ये Type 1 2 3", "If had V3 would have V3", "If I were a king", "Unless चा वापर"]
                        },


                        // =========================================================================
                        // विभाग D — इंग्रजी शब्दसंग्रह (Vocabulary & Lexicon Mastery)
                        // =========================================================================
                        {
                            id: "gb_eng_c12",
                            code: "E12",
                            section: "D",
                            slug: "synonyms-and-antonyms-high-frequency-lexicon",
                            nameMr: "समानार्थी व विरुद्धार्थी शब्द (Synonyms & Antonyms: वारंवार विचारले जाणारे शब्द)",
                            nameEn: "High-Frequency Synonyms & Antonyms: Root Words & Contextual Vocabulary",
                            name: "समानार्थी व विरुद्धार्थी शब्द (Synonyms & Antonyms)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 5,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_eng_c12",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_eng_c11",
                            nextChapterId: "gb_eng_c13",
                            metaDescriptionMr: "MPSC मुख्य परीक्षेत वारंवार विचारले जाणारे २००+ अति-महत्त्वाचे Synonyms व Antonyms, लॅटिन व ग्रीक रूट वर्ड्स (Bene-, Mal-, Chron-, Phil-, Phobia), आणि शब्दांचा संदर्भातील वापर.",
                            metaDescriptionEn: "Exhaustive vocabulary compilation: 200+ High-yield Synonyms & Antonyms frequently tested in MPSC, Etymological Root Words (Norman Lewis methodology: Bene/Mal, Pathy, Loqu/Locut, Cred, Greg), and contextual tone evaluations.",
                            notesJsonPath: "/data/notes/group_b/mains/english/c12_synonyms_antonyms.json",
                            quizTag: "gb_eng_vocab_01",
                            tags: ["Vocabulary", "Synonyms", "Antonyms", "Root Words Norman Lewis", "MPSC Frequently Asked Words", "High-Weightage"],
                            searchKeywords: ["high frequency synonyms antonyms mpsc group b mains", "root words english vocabulary bene mal loquacious", "frequently asked synonyms in mpsc english", "word power made easy vocabulary list", "समानार्थी शब्द Synonyms", "विरुद्धार्थी शब्द Antonyms", "Root Words पद्धत", "MPSC इंग्रजी शब्दसंग्रह"]
                        },
                        {
                            id: "gb_eng_c13",
                            code: "E13",
                            section: "D",
                            slug: "one-word-substitutions-and-foreign-words",
                            nameMr: "शब्दसमूहाबद्दल एक शब्द (One-Word Substitutions) आणि परकीय शब्द (Foreign Expressions)",
                            nameEn: "One-Word Substitutions (Specialists, Phobias, Manias, Government) & Foreign Phrases",
                            name: "शब्दसमूह व परकीय शब्द (One-Word Substitutions & Foreign Words)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_eng_c13",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_eng_c12",
                            nextChapterId: "gb_eng_c14",
                            metaDescriptionMr: "One-Word Substitutions: Phobias (Claustrophobia, Hydrophobia), Manias, Cides (Homicide, Regicide), Governments (Plutocracy, Oligarchy, Autocracy), आणि Foreign Latin/French phrases (De facto, De jure, Ultra vires, Bona fide, Status quo).",
                            metaDescriptionEn: "In-depth review of One-Word Substitutions: Medical specialists (Cardiologist, Dermatologist), Phobias/Manias, Killings (-cide: Regicide, Patricide), Governance forms (-cracy: Plutocracy, Bureaucracy), and Legal/Latin Foreign phrases (De facto, De jure, Bona fide, Sine die).",
                            notesJsonPath: "/data/notes/group_b/mains/english/c13_one_word_foreign_words.json",
                            quizTag: "gb_eng_oneword_01",
                            tags: ["Vocabulary", "One Word Substitution", "Phobias and Manias", "Cide Suffix Killings", "Forms of Government", "Foreign Words Latin French", "High-Weightage"],
                            searchKeywords: ["one word substitution list mpsc english", "phobias manias cides list english vocabulary", "forms of government plutocracy oligarchy bureaucracy", "latin french foreign words in english de facto de jure bona fide sine die", "शब्दसमूहाबद्दल एक शब्द One Word Substitution", "Phobias आणि Manias", "De facto, De jure, Sine die", "Forms of Government"]
                        },
                        {
                            id: "gb_eng_c14",
                            code: "E14",
                            section: "D",
                            slug: "idioms-phrases-and-phrasal-verbs",
                            nameMr: "इडियम्स, वाक्प्रचार आणि फ्रेझल व्हर्ब्स (Idioms, Phrases & Phrasal Verbs)",
                            nameEn: "Idioms, Proverbs & Phrasal Verbs: Prepositional Verb Combinations & Idiomatic Usage",
                            name: "इडियम्स व फ्रेझल व्हर्ब्स (Idioms & Phrasal Verbs)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 5,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_eng_c14",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_eng_c13",
                            nextChapterId: "gb_eng_c15",
                            metaDescriptionMr: "वारंवार विचारले जाणारे Idioms (A bone of contention, Once in a blue moon, Break a leg, Apple of discord), Phrasal Verbs (Look after, Look into, Call off, Call on, Put out, Put up with, Give in, Give up), आणि वाक्यातील उपयोग.",
                            metaDescriptionEn: "In-depth review of Idiomatic English: Classical Idioms (A blessing in disguise, Burn the midnight oil, By leaps and bounds) and High-frequency Phrasal Verbs (Call off/on, Look into/after, Put up with/out, Give up/in, Turn down/up).",
                            notesJsonPath: "/data/notes/group_b/mains/english/c14_idioms_phrasal_verbs.json",
                            quizTag: "gb_eng_idioms_01",
                            tags: ["Vocabulary", "Idioms and Phrases", "Phrasal Verbs", "Call off Put up with", "Prepositional Verbs", "High-Weightage"],
                            searchKeywords: ["idioms and phrases with meanings and examples mpsc", "phrasal verbs list look into call off put out give in", "bone of contention apple of discord", "burn the midnight oil at sixes and sevens", "इडियम्स व वाक्प्रचार Idioms", "Phrasal Verbs Put up with Call off", "MPSC इंग्रजी फ्रेजेस"]
                        },
                        {
                            id: "gb_eng_c15",
                            code: "E15",
                            section: "D",
                            slug: "confusing-words-homophones-and-spelling-rules",
                            nameMr: "समोच्चारी गोंधळात टाकणारे शब्द (Homophones & Confusing Words) आणि स्पेलिंगचे नियम",
                            nameEn: "Homonyms, Confusing Word Pairs & Orthographic Spelling Rules",
                            name: "कन्फ्युजिंग वर्ड्स व स्पेलिंग्स (Confusing Words & Spellings)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_eng_c15",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_eng_c14",
                            nextChapterId: "gb_eng_c16",
                            metaDescriptionMr: "Confusing pairs (Accept/Except, Affect/Effect, Principal/Principle, Compliment/Complement, Stationary/Stationery, Site/Sight/Cite), आणि Spelling Rules ('i before e except after c', Doubling consonants, Lieutenant, Bureaucracy, Accommodation).",
                            metaDescriptionEn: "In-depth review of Confusing Word Pairs (Affect vs Effect, Compliment vs Complement, Advice vs Advise, Loose vs Lose) and Crucial Spelling Rules (IE/EI rules, Double consonants: Committee, Accommodation, Lieutenant, Millenium, Bureaucracy).",
                            notesJsonPath: "/data/notes/group_b/mains/english/c15_confusing_words_spellings.json",
                            quizTag: "gb_eng_spellings_01",
                            tags: ["Vocabulary", "Confusing Words", "Homophones", "Affect vs Effect", "Spelling Rules", "Commonly Misspelled Words Committee", "High-Weightage"],
                            searchKeywords: ["confusing word pairs affect effect compliment complement", "stationary stationery principal principle advice advise", "spelling rules i before e except after c", "commonly misspelled words in exams committee accommodation", "समोच्चारी शब्द Homophones", "Affect vs Effect", "Spelling Rules", "Committee, Lieutenant स्पेलिंग्स"]
                        },


                        // =========================================================================
                        // विभाग E — एरर डिटेक्शन, आकलन व रिव्हिजन (Applied Grammar, Reading & Master Trends)
                        // =========================================================================
                        {
                            id: "gb_eng_c16",
                            code: "E16",
                            section: "E",
                            slug: "spotting-the-errors-and-sentence-improvement",
                            nameMr: "स्पॉटिंग द एरर्स (त्रुटी शोधणे) आणि सेन्टेन्स इम्प्रूव्हमेंट तंत्र",
                            nameEn: "Error Spotting Methodologies & Sentence Improvement Heuristics",
                            name: "स्पॉटिंग द एरर्स (Spotting the Errors)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_eng_c16",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_eng_c15",
                            nextChapterId: "gb_eng_c17",
                            metaDescriptionMr: "MPSC मधील एरर स्पॉटिंगचे सर्व नियम: Subject-Verb mismatch, Prepositional lapses, Pronoun case errors, Tense conflicts, Redundancy / Superfluous expressions (Return back, Revert back, Cousin sister), आणि Sentence Improvement.",
                            metaDescriptionEn: "Exhaustive error detection mechanics: Subject-Verb disconcord, Misplaced modifiers, Tense parallelism, Superfluous redundant expressions (Cousin brother, Return back, Final conclusion), and Sentence Improvement options.",
                            notesJsonPath: "/data/notes/group_b/mains/english/c16_error_spotting.json",
                            quizTag: "gb_eng_error_01",
                            tags: ["Applied-Grammar", "Spotting Errors", "Sentence Improvement", "Superfluous Expressions", "Parallelism Errors", "High-Weightage"],
                            searchKeywords: ["spotting the errors english grammar rules mpsc", "sentence improvement practice questions", "superfluous expressions return back cousin sister final conclusion", "parallelism errors neither nor both and", "स्पॉटिंग द एरर्स नियम", "Sentence Improvement", "Superfluous expressions", "त्रुटी शोधणे इंग्रजी"]
                        },
                        {
                            id: "gb_eng_c17",
                            code: "E17",
                            section: "E",
                            slug: "reading-comprehension-english-unseen-passage",
                            nameMr: "रीडिंग कॉम्प्रिहेन्शन: अनसीन पॅसेज विश्लेषण, टोन व प्रश्न सोडवणूक",
                            nameEn: "Reading Comprehension: Unseen Prose Passage, Inference & Tone Extraction",
                            name: "उतारा आकलन (English Reading Comprehension)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_eng_c17",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_eng_c16",
                            nextChapterId: "gb_eng_c18",
                            metaDescriptionMr: "इंग्रजी अपरिचित उतारा आकलन (५ प्रश्न, १० गुण), Skimming & Scanning तंत्र, Central Theme शोधणे, Title निश्चिती, Author's Tone (Critical, Laudatory, Objective, Cynical, Sarcastic), आणि संदर्भातील शब्दार्थ.",
                            metaDescriptionEn: "In-depth review of English Reading Comprehension for MPSC Mains: 5 Questions (10 Marks), Question-first reverse strategy, Central Thesis extraction, Title identification, Author's tone taxonomy (Analytical, Satirical, Nostalgic), and Contextual vocabulary.",
                            notesJsonPath: "/data/notes/group_b/mains/english/c17_comprehension.json",
                            quizTag: "gb_eng_comprehension_01",
                            tags: ["Comprehension", "Unseen Passage English", "5 Questions 10 Marks", "Central Theme", "Authors Tone", "Skimming Scanning", "High-Weightage"],
                            searchKeywords: ["reading comprehension passage english mpsc mains 5 questions", "central idea of the passage title selection", "authors tone sarcastic analytical objective critical", "skimming scanning reading skills english", "इंग्रजी उतारा आकलन", "Reading Comprehension 5 questions 10 marks", "Central Theme and Title", "Author's Tone"]
                        },
                        {
                            id: "gb_eng_c18",
                            code: "E18",
                            section: "E",
                            slug: "english-master-revision-rules-matrix-and-pyq-trends",
                            nameMr: "इंग्रजी भाषा मास्टर रिव्हिजन: १०० सुवर्ण नियम, वेळ नियोजन व PYQ विश्लेषण",
                            nameEn: "English Master Revision: 100 Golden Grammar Rules Matrix & 10-Year PYQ Trends",
                            name: "इंग्रजी मास्टर रिव्हिजन (Master Revision: Rules & PYQs)",
                            category: "REVISION",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_eng_c18",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_eng_c17",
                            nextChapterId: null,
                            metaDescriptionMr: "इंग्रजी व्याकरणाचे १०० सुवर्ण नियम (Golden Rules of Grammar), ५० प्रश्नांसाठी वेळेचे व्यवस्थापन (३०-३२ मिनिटे), हमखास फसणारे प्रश्न, आणि MPSC मुख्य परीक्षेतील मागील १० वर्षांचे सखोल PYQ विश्लेषण.",
                            metaDescriptionEn: "Master consolidation module: 100 Golden Rules of English Grammar (Concord, Tenses, Modals, Prepositions), Time Allocation Strategy for 50 Questions (30-32 minutes in Mains Paper 1), Trap elimination, and 10-year MPSC Group B trend analysis.",
                            notesJsonPath: "/data/notes/group_b/mains/english/c18_master_revision.json",
                            quizTag: "gb_eng_revision_01",
                            tags: ["Revision", "100 Golden Rules of Grammar", "MPSC Mains Paper 1 English", "50 Questions Strategy", "Time Allocation 30 Mins", "PYQ Trends", "High-Weightage"],
                            searchKeywords: ["100 golden rules of english grammar pdf mpsc", "mpsc group b mains english 50 questions 100 marks strategy", "time management mains paper 1 marathi english 60 mins", "mpsc mains english pyq trend analysis 2012 to 2025", "elimination techniques english grammar", "इंग्रजी व्याकरण १०० सुवर्ण नियम", "५० प्रश्न १०० गुण इंग्रजी रणनीती", "१० वर्षांचे PYQ विश्लेषण", "पेपर १ वेळ नियोजन"]
                        }
                    ]
                }
            ]
        },
        {
            id: "group_b_mains_p2",
            paperNumber: 2,
            name: "पेपर २: सामान्य अध्ययन व बुद्धिमत्ता चाचणी (सर्व पदांसाठी संयुक्त)",
            marks: 200,
            totalQuestions: 100,
            durationMinutes: 60,
            subjects: [
                {
                    id: "gb_mains_aptitude",
                    code: "M_APT",
                    slug: "general-mental-ability-and-logical-reasoning",
                    nameMr: "सामान्य बुद्धिमत्ता चाचणी व तार्किक आकलन",
                    nameEn: "General Mental Ability, Analytical & Critical Reasoning",
                    name: "बुद्धिमत्ता व आकलन (Mental Ability & Critical Reasoning)",
                    officialScope: "Critical Reasoning, Statement-Assumptions, Statement-Arguments, Statement-Conclusions, Cause & Effect, Courses of Action, Machine Input-Output, Coded Inequalities, Multi-Variable Puzzles, Data Sufficiency, and Decision Making for MPSC Group B Mains Paper 2",
                    version: "1.0",
                    verifiedDate: "2026-10-28",
                    notesJsonBaseDir: "/data/notes/group_b/mains/aptitude/",


                    // UI Theme & Theming Metadata
                    theme: {
                        primaryColor: "#9333ea",        // Deep Purple / High-Order Analytical Logic Theme
                        bgColor: "#faf5ff",
                        iconClass: "ri-brain-line"
                    },


                    // अभ्यास व डॅशबोर्ड ॲनालिटिक्स मेट्रिक्स
                    metrics: {
                        totalChapters: 12,
                        totalEstimatedHours: 44,
                        avgQuestionsInMains: 10,
                        targetMarks: 20,
                        weightageRange: "10 Questions / 20 Marks"
                    },


                    // विषय पातळीवरील स्मार्ट टॅग्ज
                    subjectTags: [
                        "Core-Mains",
                        "Mains-Paper-2",
                        "High-Difficulty",
                        "Critical-Reasoning",
                        "Analytical-Puzzles",
                        "Decision-Making"
                    ],


                    filterCategory: "GS",
                    searchKeywords: [
                        "mpsc group b mains mental ability reasoning", "critical reasoning statements assumptions arguments",
                        "cause and effect course of action", "machine input output rearrangement shifting",
                        "coded inequalities greater than less than", "data sufficiency two statements mpsc",
                        "analytical multi floor puzzles", "decision making case studies",
                        "तार्किक आकलन विधाने गृहीतके", "युक्तिवाद प्रबळ दुर्बल", "कारण व परिणाम", "कृतीची दिशा", "इनपुट आउटपुट मशीन सायकल", "डेटा सफिशियन्सी", "निर्णयक्षमता"
                    ],


                    referenceSources: [
                        {
                            name: "MPSC Non-Gazetted Group B Combined Mains Syllabus",
                            role: "अधिकृत परीक्षा-संदर्भ",
                            url: "https://mpsc.gov.in"
                        },
                        {
                            name: "A Modern Approach to Verbal & Non-Verbal Reasoning - R.S. Aggarwal",
                            role: "विश्लेषणात्मक व तार्किक आकलनाचा मानक संदर्भ"
                        },
                        {
                            name: "संपूर्ण बुद्धिमत्ता चाचणी - सचिन ढवळे",
                            role: "MPSC मुख्य परीक्षाभिमुख उच्च पातळीवरील उदाहरणे व क्लृप्त्या"
                        },
                        {
                            name: "Analytical Reasoning - M.K. Pandey",
                            role: "Critical Reasoning (विधाने, गृहीतके, युक्तिवाद व कृती) सिद्धांतासाठी सर्वोत्कृष्ट ग्रंथ"
                        },
                        {
                            name: "तर्क व अनुमान बुद्धिमत्ता - नितीन महाले",
                            role: "मराठी भाषेतील तार्किक युक्तिवाद स्पष्टीकरण"
                        }
                    ],


                    chapters: [
                        // =========================================================================
                        // विभाग A — विश्लेषणात्मक व समीक्षात्मक युक्तिवाद (Critical Reasoning)
                        // =========================================================================
                        {
                            id: "gb_mapt_c01",
                            code: "MA01",
                            section: "A",
                            slug: "statement-and-assumptions-critical-thinking",
                            nameMr: "विधाने आणि गृहीतके (Statement & Assumptions): तार्किक पूर्वअट ओळख",
                            nameEn: "Critical Reasoning: Statement & Implicit Assumptions",
                            name: "विधाने व गृहीतके (Statement & Assumptions)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mapt_c01",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: null,
                            nextChapterId: "gb_mapt_c02",
                            metaDescriptionMr: "विधाने व गृहीतके (Implicit Assumptions), वक्त्याचे अंतर्मन व पूर्वअटी, गृहीतके वैध असण्याचे नियम, 'केवळ', 'सर्व', 'कधीच नाही' या टोकाच्या शब्दांचा प्रभाव, आणि सरकारी जाहिराती व आवाहनावरील गृहीतके.",
                            metaDescriptionEn: "In-depth review of Critical Reasoning: Statement & Assumptions; Unstated premises of speaker; Valid vs Invalid assumptions; Extreme qualifier filters (only, all, never), and Public notices/Advertisements context.",
                            notesJsonPath: "/data/notes/group_b/mains/aptitude/c01_statement_assumptions.json",
                            quizTag: "gb_mapt_assumptions_01",
                            tags: ["Critical Reasoning", "Statement & Assumptions", "Implicit Premise", "Extreme Words Trap", "High-Weightage"],
                            searchKeywords: ["statement and assumptions critical reasoning mpsc mains", "implicit assumptions rules shortcuts mk pandey", "identifying speaker premise public notices", "extreme words trap in assumptions", "विधाने आणि गृहीतके नियम", "अंतर्भूत गृहीतके ओळखणे", "वक्त्याचे गृहीतक", "क्रिटिकल रिझनिंग"],
                            topics: [
                                {
                                    id: "top_gb_ma01_01",
                                    nameMr: "गृहीतकांची व्याख्या, ओळखण्याचे नियम, टोकाचे शब्द आणि जाहिरातींवरील गृहीतके",
                                    nameEn: "Assumption Constructs, Validity Parameters, Qualifier Traps & Applied Public Adverts",
                                    subtopics: [
                                        {
                                            id: "st_gb_ma01_01_01",
                                            titleMr: "गृहीतकाची संकल्पना (Concept of Assumption): वक्ता किंवा लेखक कोणतेही विधान करताना मनात जी गोष्ट 'गृहीत' धरून बोलतो, तिला गृहीतक म्हणतात; गृहीतक हे विधानात प्रत्यक्ष न लिहिता त्या विधानाचा अदृश्य आधार (Unstated Premise) असते; जर गृहीतक खोटे ठरले, तर मूळ विधानच कोसळते",
                                            titleEn: "Concept of Assumption: An implicit presupposition taken for granted by the speaker before making the statement; It forms the unstated backbone; If the assumption fails, the statement collapses",
                                            chips: ["गृहीतक (अदृश्य आधार)", "वक्त्याचे अंतर्मन", "विधान पूर्वअट", "Implicit Premise"]
                                        },
                                        {
                                            id: "st_gb_ma01_01_02",
                                            titleMr: "गृहीतक वैध ठरण्याचे नियम: १) गृहीतक हे विधानाशी सुसंगत व सकारात्मक असावे; २) जाहिराती, आवाहने आणि सूचना (Advertisements & Notices): लोक जाहिराती वाचतात आणि त्याला प्रतिसाद देतात हे नेहमी वैध गृहीतक मानले जाते; ३) सरकारी आदेश व कायदे: नागरिक कायद्याचे पालन करतील हे गृहीत धरलेले असते",
                                            titleEn: "Validity Rules: Coherence with statement; Public Notices/Advertisements assume people read, comprehend and act upon them; Government laws assume citizen compliance",
                                            chips: ["जाहिरातींना प्रतिसाद मिळतो", "कायद्याचे पालन होते", "सुसंगत पूर्वअटी"]
                                        },
                                        {
                                            id: "st_gb_ma01_01_03",
                                            titleMr: "गृहीतक अवैध ठरण्याचे नियम (Negative Elimination Rules): १) विधानाची केवळ पुनरावृत्ती (Restatement) केलेले वाक्य कधीही गृहीतक नसते; २) टोकाचे शब्द असणारे वाक्य अवैध ठरते (उदा. केवळ, फक्त, सर्व, कधीच नाही - Only, All, None, Best); ३) विधानाच्या कक्षेबाहेरील काल्पनिक विधाने अवैध असतात",
                                            titleEn: "Invalidation Heuristics: Mere restatements are never assumptions; Extreme qualifiers invalidate assumptions (Only, All, None, Best); Remote or out-of-context conjectures are invalid",
                                            chips: ["पुनरावृत्ती गृहीतक नसते", "टोकाचे शब्द अवैध (केवळ, सर्व)", "कक्षेबाहेरील विचार"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Analytical Reasoning", standard: "M.K. Pandey", chapterRef: "Chapter: Statement and Assumptions" },
                                        { book: "संपूर्ण बुद्धिमत्ता चाचणी", standard: "सचिन ढवळे", chapterRef: "तार्किक विचार: विधाने व गृहीतके" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mapt_c02",
                            code: "MA02",
                            section: "A",
                            slug: "statement-and-arguments-strong-and-weak-logic",
                            nameMr: "विधाने आणि युक्तिवाद (Statement & Arguments): प्रबळ विरुद्ध दुर्बल युक्तिवाद",
                            nameEn: "Critical Reasoning: Statement & Arguments (Strong vs Weak Logic)",
                            name: "विधाने व युक्तिवाद (Statement & Arguments)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mapt_c02",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mapt_c01",
                            nextChapterId: "gb_mapt_c03",
                            metaDescriptionMr: "प्रबळ युक्तिवाद (Strong Argument - वस्तुस्थितीवर आधारित, देशाच्या हिताचा, व्यावहारिक) विरुद्ध दुर्बल युक्तिवाद (Weak Argument - अंधश्रद्धा, भावनिक, अस्पष्ट, किंवा निव्वळ तुलना).",
                            metaDescriptionEn: "In-depth review of Statement & Arguments: Criteria for Strong Arguments (Factual, Constitutional, Socio-economically feasible) vs Weak Arguments (Superstitious, Emotional, Ambiguous, Trivial, Simple opinion).",
                            notesJsonPath: "/data/notes/group_b/mains/aptitude/c02_statement_arguments.json",
                            quizTag: "gb_mapt_arguments_01",
                            tags: ["Critical Reasoning", "Statement & Arguments", "Strong vs Weak Logic", "Policy Debates", "High-Weightage"],
                            searchKeywords: ["statement and arguments strong weak logic mpsc", "criteria for strong argument mk pandey reasoning", "evaluating policy debates affirmative negative", "weak argument emotional vague comparison", "विधाने आणि युक्तिवाद", "प्रबळ युक्तिवाद", "दुर्बल युक्तिवाद निकष", "तार्किक वादविवाद"],
                            topics: [
                                {
                                    id: "top_gb_ma02_01",
                                    nameMr: "प्रबळ युक्तिवादाचे निकष, दुर्बल युक्तिवादाची लक्षणे आणि धोरणात्मक मूल्यमापन",
                                    nameEn: "Strong Argument Taxonomy, Fallacy Filtering & Socio-Policy Feasibility",
                                    subtopics: [
                                        {
                                            id: "st_gb_ma02_01_01",
                                            titleMr: "प्रबळ युक्तिवादाची लक्षणे (Strong Argument): १) विधानाशी थेट आणि महत्त्वपूर्ण संबंध असावा; २) वैज्ञानिक, कायदेशीर, घटनात्मक किंवा सार्वत्रिक सत्यतेवर आधारित असावा; ३) सामाजिक, आर्थिक किंवा राष्ट्रीय कल्याणाचा व्यापक विचार करणारा असावा; 'होय' किंवा 'नाही' याने फरक पडत नाही, त्यामागील कारण किती वजनदार आहे हे महत्त्वाचे असते",
                                            titleEn: "Criteria for Strong Arguments: Direct & substantial connection to statement; Backed by scientific, legal, constitutional or empirical logic; Fosters public welfare; Reason matters, not mere Yes/No",
                                            chips: ["प्रबळ युक्तिवाद (Strong Argument)", "सत्यता व पुरावे", "राष्ट्रीय व सामाजिक कल्याण", "वजनदार कारण"]
                                        },
                                        {
                                            id: "st_gb_ma02_01_02",
                                            titleMr: "दुर्बल युक्तिवादाची लक्षणे (Weak Argument): १) अस्पष्ट किंवा वरवरचा (Vague/Superficial); २) केवळ अंधश्रद्धा किंवा भावनिक आवाहनावर आधारित; ३) निव्वळ इतर देशांशी तुलना (उदा. 'अमेरिकेत असे करतात म्हणून आपणही करावे' - चुकीची तुलना); ४) टोकाचा किंवा अव्यवहार्य (Extreme/Impractical); ५) केवळ वैयक्तिक मत किंवा एकांगी विचार",
                                            titleEn: "Hallmarks of Weak Arguments: Vague or ambiguous; Based purely on emotion or superstition; Flawed comparison ('Because USA does it, we should do it'); Extreme/unfeasible; One-sided opinion without depth",
                                            chips: ["दुर्बल युक्तिवाद (Weak Argument)", "भावनिक अपील", "इतर देशांशी आंधळी तुलना", "अस्पष्ट युक्तिवाद"]
                                        },
                                        {
                                            id: "st_gb_ma02_01_03",
                                            titleMr: "प्रशासकीय व सामाजिक मुद्द्यांचे मूल्यमापन: परीक्षांमध्ये विचारले जाणारे विषय: १) खाजगीकरण, २) मोफत योजना, ३) विद्यापीठांमधील राजकारण, ४) प्लास्टिक बंदी, ५) अनिवार्य मतदान; या मुद्द्यांवर निःपक्षपातीपणे दोन्ही बाजूंच्या तर्कांचे मोजमाप करणे",
                                            titleEn: "Evaluation of Socio-Administrative Issues: Privatization, Freebies, Campus Politics, Plastic Ban, Compulsory Voting; Impartial weighing of both affirmative and negative logic",
                                            chips: ["प्रशासकीय धोरणे", "निःपक्षपाती मूल्यमापन", "आर्थिक व सामाजिक व्यवहार्यता"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Analytical Reasoning", standard: "M.K. Pandey", chapterRef: "Chapter: Statement and Arguments" },
                                        { book: "A Modern Approach to Verbal Reasoning", standard: "R.S. Aggarwal", chapterRef: "Statement - Arguments" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mapt_c03",
                            code: "MA03",
                            section: "A",
                            slug: "statement-and-course-of-action-problem-solving",
                            nameMr: "विधाने आणि कृतीची दिशा (Statement & Course of Action)",
                            nameEn: "Critical Reasoning: Statement & Courses of Action (Administrative Problem Solving)",
                            name: "विधाने व कृतीची दिशा (Courses of Action)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mapt_c03",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mapt_c02",
                            nextChapterId: "gb_mapt_c04",
                            metaDescriptionMr: "समस्या निवारण (Problem Solving), प्रशासकीय कृतीची दिशा (Course of Action), कृती व्यवहार्य व प्रमाणबद्ध असणे, टोकाची कृती (Extreme Action) टाळणे, आणि सुधारणावादी दृष्टिकोन.",
                            metaDescriptionEn: "In-depth review of Courses of Action: Administrative decision-making heuristics, Problem-solution fit, Proportionality principle, Feasibility tests, and Avoiding extreme punitive measures.",
                            notesJsonPath: "/data/notes/group_b/mains/aptitude/c03_course_of_action.json",
                            quizTag: "gb_mapt_action_01",
                            tags: ["Critical Reasoning", "Course of Action", "Administrative Problem Solving", "Proportionality Rule", "High-Weightage"],
                            searchKeywords: ["statement and courses of action reasoning mpsc mains", "administrative problem solving logic mk pandey", "proportionality rule avoiding extreme actions", "feasible and corrective course of action", "विधाने आणि कृतीची दिशा", "प्रशासकीय निर्णयक्षमता", "समस्या निवारण कृती", "प्रमाणबद्ध उपाय"],
                            topics: [
                                {
                                    id: "top_gb_ma03_01",
                                    nameMr: "प्रशासकीय उपाययोजना, कृतीची व्यवहार्यता, प्रमाणबद्धता आणि समस्या निवारण",
                                    nameEn: "Administrative Remediation, Feasibility Metrics, Proportionality & Crisis Mitigation",
                                    subtopics: [
                                        {
                                            id: "st_gb_ma03_01_01",
                                            titleMr: "कृतीची दिशा संकल्पना: विधानात एखादी समस्या, संकट किंवा परिस्थिती मांडलेली असते; त्यावर सुचवलेली कृती ही ती समस्या सोडवणारी (Corrective) किंवा तिच्यावर नियंत्रण ठेवणारी असावी; कृती ही व्यावहारिक (Feasible) व तातडीने राबवता येण्याजोगी असावी",
                                            titleEn: "Concept of Course of Action: An administrative step taken to resolve, reduce or mitigate the problem presented in statement; Action must be realistic, feasible and directly applicable",
                                            chips: ["समस्या निवारण", "सुधारणावादी कृती", "व्यवहार्य उपाय (Feasible)", "प्रशासकीय दृष्टिकोन"]
                                        },
                                        {
                                            id: "st_gb_ma03_01_02",
                                            titleMr: "योग्य कृतीचे ३ सुवर्ण नियम: १) प्रमाणबद्धता (Proportionality): रोगापेक्षा औषध भयंकर नसावे; समस्येच्या तीव्रतेनुसारच उपाय असावा; २) टोकाची कृती नसावी (No Extreme Action - उदा. कॉलेजमध्ये विद्यार्थ्याने चूक केली म्हणून संपूर्ण कॉलेज बंद करणे चुकीचे); ३) नवीन समस्या निर्माण न करणारी कृती असावी",
                                            titleEn: "3 Golden Rules of Valid Action: 1) Proportionality (Remedy shouldn't be worse than disease), 2) No Extreme Punitive Steps (Don't shut down college for one student's fault), 3) Must not create a fresh problem",
                                            chips: ["प्रमाणबद्धता (Proportionality)", "टोकाची कृती अवैध", "नवीन समस्या नको", "संतुलित तोडगा"]
                                        },
                                        {
                                            id: "st_gb_ma03_01_03",
                                            titleMr: "प्रशासकीय परिस्थिती उदाहरणे: १) पूर किंवा साथीचे रोग (तातडीने मदत व स्थलांतर); २) रेल्वे अपघात (चौकशी समिती + मृतांना मदत + सिग्नल दुरुस्ती); ३) रस्ते खड्डे व वाहतूक कोंडी; ४) पेपरफुटी (कठोर कायदेशीर कारवाई, यंत्रणा सुधारणा); अधिकारी म्हणून विचार करण्याची सवय",
                                            titleEn: "Public Crisis Scenarios: Epidemics/Floods (Immediate evacuation/medical aid), Railway accidents (Inquiry + compensation + safety audit), Question Paper leaks (Legal arrest + systemic overhaul)",
                                            chips: ["आपत्ती व्यवस्थापन कृती", "अपघात चौकशी व मदत", "कायदा व सुव्यवस्था उपाय"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Analytical Reasoning", standard: "M.K. Pandey", chapterRef: "Chapter: Statement and Courses of Action" },
                                        { book: "A Modern Approach to Verbal Reasoning", standard: "R.S. Aggarwal", chapterRef: "Statement - Course of Action" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mapt_c04",
                            code: "MA04",
                            section: "A",
                            slug: "cause-and-effect-and-assertion-reason",
                            nameMr: "कारण व परिणाम (Cause & Effect) आणि विधान-कारण (Assertion & Reason)",
                            nameEn: "Critical Reasoning: Cause & Effect Relationships & Assertion-Reasoning",
                            name: "कारण व परिणाम (Cause & Effect)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mapt_c04",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mapt_c03",
                            nextChapterId: "gb_mapt_c05",
                            metaDescriptionMr: "कारण व परिणाम (Cause & Effect: १ कारण व २ परिणाम, सामाईक कारणाचे परिणाम, स्वतंत्र कारणे), आणि विधान व कारण (Assertion 'A' & Reason 'R' - सत्यता व योग्य स्पष्टीकरण).",
                            metaDescriptionEn: "In-depth review of Cause & Effect (Immediate vs principal causes, independent effects, common cause effects) and Assertion & Reason (Factual validity of A and R, and whether R is the correct explanation of A).",
                            notesJsonPath: "/data/notes/group_b/mains/aptitude/c04_cause_effect.json",
                            quizTag: "gb_mapt_cause_01",
                            tags: ["Critical Reasoning", "Cause and Effect", "Assertion and Reason", "Common Cause Logic", "High-Weightage"],
                            searchKeywords: ["cause and effect reasoning mpsc mains questions", "identifying cause and effect independent causes", "common cause effects logic mk pandey", "assertion and reason solving strategy", "कारण व परिणाम", "विधान व कारण Assertion Reason", "सामाईक कारण", "स्वतंत्र परिणाम"],
                            topics: [
                                {
                                    id: "top_gb_ma04_01",
                                    nameMr: "कारण-परिणाम संबंधांचे प्रकार, सामाईक कारणे आणि विधानांची सत्यता पडताळणी",
                                    nameEn: "Causality Typology, Temporal Precedence, Common Causes & Assertion Verification",
                                    subtopics: [
                                        {
                                            id: "st_gb_ma04_01_01",
                                            titleMr: "कारण व परिणाम (Cause & Effect): १) कारण नेहमी परिणामाच्या आधी घडते (Temporal Precedence); २) कारणामुळेच परिणाम घडल्याचा थेट संबंध असावा; पर्याय रचना: विधान १ हे कारण व २ हा परिणाम; विधान २ हे कारण व १ हा परिणाम; दोन्ही विधाने स्वतंत्र कारणांचे परिणाम आहेत; दोन्ही विधाने सामाईक कारणाचे परिणाम आहेत",
                                            titleEn: "Cause & Effect Framework: Cause precedes effect temporally; Direct causal nexus required; Options matrix: 1 is cause & 2 is effect; 2 is cause & 1 is effect; Independent effects; Effects of common cause",
                                            chips: ["कारण आधी घडते (Cause First)", "परिणाम नंतर (Effect)", "सामाईक कारणाचे परिणाम", "स्वतंत्र कारणे"]
                                        },
                                        {
                                            id: "st_gb_ma04_01_02",
                                            titleMr: "सामाईक कारण विरुद्ध स्वतंत्र कारणे: उदा. १) 'शहरात भाज्यांचे भाव गगनाला भिडले' आणि २) 'शहरातील भाजीपाला बाजारात मालवाहू गाड्या पोहोचल्या नाहीत' (पेट्रोल-डिझेल वाहतूक संप हे सामाईक कारण); उदा. 'कांद्याचे भाव वाढले' व 'शिक्षकांचा संप सुरू झाला' (दोन्ही पूर्णपणे स्वतंत्र कारणांचे परिणाम)",
                                            titleEn: "Common vs Independent Causes: Vegetables scarce & trucks didn't arrive (Common cause: transport strike); Onion price inflation & Teacher strike (Independent unrelated causes)",
                                            chips: ["सामाईक कारण उदाहरण", "स्वतंत्र कारण उदाहरण", "वाहतूक संप व महागाई"]
                                        },
                                        {
                                            id: "st_gb_ma04_01_03",
                                            titleMr: "विधान व कारण (Assertion & Reason): विधानांची सत्यता पडताळणी: १) विधान A आणि कारण R दोन्ही वैयक्तिकरीत्या सत्य आहेत का? २) जर दोन्ही सत्य असतील, तर R हे A चे योग्य स्पष्टीकरण (Correct Explanation) आहे का? 'कारण / Because' शब्द जोडून वाक्य वाचल्यास स्पष्टीकरण तपासता येते",
                                            titleEn: "Assertion & Reason Strategy: Step 1: Verify individual factual truth of A and R; Step 2: Check if R is the true causative explanation of A using 'Because' link test",
                                            chips: ["विधान (Assertion A)", "कारण (Reason R)", "योग्य स्पष्टीकरण आहे/नाही", "'Because' चाचणी"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Analytical Reasoning", standard: "M.K. Pandey", chapterRef: "Chapter: Cause and Effect" },
                                        { book: "A Modern Approach to Verbal Reasoning", standard: "R.S. Aggarwal", chapterRef: "Assertion and Reason" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग B — प्रगत कोडी, इनपुट-आउटपुट व गणितीय बुद्धिमत्ता (Advanced Logic)
                        // =========================================================================
                        {
                            id: "gb_mapt_c05",
                            code: "MA05",
                            section: "B",
                            slug: "machine-input-output-rearrangement-steps",
                            nameMr: "मशीन इनपुट-आउटपुट: पायऱ्यांची रचना, शिफ्टिंग व अंतिम आउटपुट",
                            nameEn: "Machine Input-Output: Step-by-Step Rearrangements, Shifting & Sorting Logic",
                            name: "इनपुट-आउटपुट मशीन सायकल (Machine Input-Output)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mapt_c05",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mapt_c04",
                            nextChapterId: "gb_mapt_c06",
                            metaDescriptionMr: "मशीन इनपुट-आउटपुट (Input-Output Re-arrangement), संख्यांची चढती/उतरती मांडणी, शब्दांची वर्णमाला मांडणी, दोन्ही टोकांकडून होणारे बदल (Two-way shifting), आणि अंतिम पायरी ओळखणे.",
                            metaDescriptionEn: "In-depth review of Machine Input-Output: Algorithmic step-by-step rearrangement, Left/Right alternating shifts, Alphabetical & Numerical sorting rules, and Reverse-step identification rules.",
                            notesJsonPath: "/data/notes/group_b/mains/aptitude/c05_input_output.json",
                            quizTag: "gb_mapt_input_01",
                            tags: ["Advanced Logic", "Machine Input Output", "Step Rearrangement", "Two Way Shifting", "High-Weightage"],
                            searchKeywords: ["machine input output reasoning tricks mpsc", "step by step rearrangement logic shifting", "alphabetical and numerical order input output", "two way shifting at both ends", "मशीन इनपुट आउटपुट", "पायऱ्यांची पुनर्रचना", "अंतिम पायरी ओळखणे", "डाव्या व उजव्या टोकाकडून मांडणी"],
                            topics: [
                                {
                                    id: "top_gb_ma05_01",
                                    nameMr: "मशीन रिॲरेंजमेंट नियम, एकाच किंवा दोन्ही टोकांकडून क्रमवारी आणि पायऱ्यांचे विश्लेषण",
                                    nameEn: "Algorithmic Sorting, Unidirectional/Bidirectional Shifting & Step Mechanics",
                                    subtopics: [
                                        {
                                            id: "st_gb_ma05_01_01",
                                            titleMr: "इनपुट-आउटपुट मूलभूत संकल्पना: शब्दांची व संख्यांची एक इनपुट ओळ दिलेली असते; एका निश्चित नियमानुसार संगणक दर पायरीला एक किंवा दोन घटक बदलून मांडणी करतो; अंतिम पायरी (Final Step) पाहून आधी तो नियम शोधायचा असतो (उदा. शब्द वर्णमालेनुसार व संख्या उतरत्या क्रमाने)",
                                            titleEn: "Core Input-Output Logic: Input string of mixed words/numbers processed step-by-step; Deciphering logic from Final Step (e.g., Words descending alphabetically, Numbers ascending)",
                                            chips: ["इनपुट-आउटपुट संकल्पना", "अंतिम पायरीवरून नियम शोधणे", "वर्णमाला क्रम", "संख्यांची चढती/उतरती मांडणी"]
                                        },
                                        {
                                            id: "st_gb_ma05_01_02",
                                            titleMr: "मांडणीचे प्रकार: १) एकाच टोकाकडून शिफ्टिंग (डावीकडून किंवा उजवीकडून एक-एक घटक आणणे); २) दोन्ही टोकांकडून शिफ्टिंग (डाव्या टोकाला शब्द व उजव्या टोकाला संख्या); ३) गणितीय ऑपरेशन्स (संख्यांची दुप्पट, वर्गांची बेरीज, अंकांचे स्थान बदल)",
                                            titleEn: "Shifting Types: Single-end shifting (Left or Right), Bidirectional shifting (Words to left, Numbers to right), Mathematical digit manipulations",
                                            chips: ["एका टोकाकडून शिफ्टिंग", "दोन्ही टोकांकडून शिफ्टिंग (Two-way)", "अंकांची बेरीज"]
                                        },
                                        {
                                            id: "st_gb_ma05_01_03",
                                            titleMr: "परीक्षेतील महत्त्वाचा नियम: पुढे जाताना पायऱ्या काढता येतात, पण उलट जाता येत नाही; म्हणजेच जर 'पायरी ३' दिली असेल, तर 'पायरी १' किंवा 'इनपुट' निश्चितपणे सांगता येत नाही (उत्तर: 'सांगता येत नाही / Cannot be determined')",
                                            titleEn: "Golden Rule for Input-Output: Process is forward deterministic only; If Step 3 is given, Step 1 or original Input CANNOT be determined with certainty",
                                            chips: ["उलट जाता येत नाही (Cannot be determined)", "पायरीवरून इनपुट अशक्य", "वेळ वाचवण्याचे शॉर्टकट"]
                                        }
                                    ],
                                    sources: [
                                        { book: "संपूर्ण बुद्धिमत्ता चाचणी", standard: "सचिन ढवळे", chapterRef: "प्रकरण: मशीन इनपुट व आउटपुट" },
                                        { book: "A Modern Approach to Verbal Reasoning", standard: "R.S. Aggarwal", chapterRef: "Input-Output" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mapt_c06",
                            code: "MA06",
                            section: "B",
                            slug: "inequalities-mathematical-and-coded-statements",
                            nameMr: "असमानता: गणितीय व चिन्हांकित तुलना (Inequalities: >, <, =)",
                            nameEn: "Mathematical & Coded Inequalities: Direct & Symbol-Decoded Inferences",
                            name: "असमानता (Inequalities: Direct & Coded)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mapt_c06",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mapt_c05",
                            nextChapterId: "gb_mapt_c07",
                            metaDescriptionMr: "चिन्हांकित असमानता (Coded Inequalities: >, ≥, <, ≤, =), गेट पद्धत (Open Gate / Closed Gate शॉर्टकट), विधाने जोडणे, परस्परविरोधी चिन्हे आल्यास नो-रिलेशन, आणि Either-Or केस.",
                            metaDescriptionEn: "In-depth review of Inequalities: Direct & Coded forms, Open-Gate/Closed-Gate shortcut heuristics, Chain linkage, Opposite symbol blocks (No Relation), and Either-Or complementary conditions.",
                            notesJsonPath: "/data/notes/group_b/mains/aptitude/c06_inequalities.json",
                            quizTag: "gb_mapt_inequality_01",
                            tags: ["Advanced Logic", "Inequalities", "Open Gate Method", "Coded Inequalities", "Either Or Case", "High-Weightage"],
                            searchKeywords: ["inequalities reasoning open gate closed gate method", "coded inequalities symbols decoding tricks", "opposite signs no relation break in inequalities", "either or case in inequalities equality", "असमानता गणितीय तुलना", "Open Gate Closed Gate शॉर्टकट", "चिन्हांकित तुलना Coded Inequalities", "Either-Or असमानता"],
                            topics: [
                                {
                                    id: "top_gb_ma06_01",
                                    nameMr: "चिन्हांचे प्राधान्य, ओपन गेट पद्धत, शृंखला जोडणी आणि निष्कर्ष पडताळणी",
                                    nameEn: "Symbol Precedence Hierarchy, Open-Gate Logic, Relational Chains & Either-Or",
                                    subtopics: [
                                        {
                                            id: "st_gb_ma06_01_01",
                                            titleMr: "चिन्हांचे प्राधान्य व ओपन गेट पद्धत (Open Gate Method): १) प्राधान्य क्रम: > किंवा < (प्रथम प्राधान्य) -> ≥ किंवा ≤ (द्वितीय प्राधान्य) -> = (तृतीय प्राधान्य); २) ओपन गेट पद्धत: A > B म्हणजे A कडून B कडे दरवाजा उघडा आहे (प्रवास शक्य); जर मध्ये विरुद्ध चिन्ह आले (उदा. A > B < C), तर रस्ता बंद होतो (नो-रिलेशन / निष्कर्ष असत्य)",
                                            titleEn: "Precedence & Open Gate Heuristic: Symbol Hierarchy (> or < > >= or <= > =); Open Gate Concept (A > B means path open from A to B); Opposite facing signs (A > B < C) block path, rendering conclusion invalid",
                                            chips: ["ओपन गेट पद्धत (Open Gate)", "चिन्हांचा प्राधान्य क्रम", "विरुद्ध चिन्हे आल्यास रस्ता बंद (नो-रिलेशन)"]
                                        },
                                        {
                                            id: "st_gb_ma06_01_02",
                                            titleMr: "निष्कर्ष पडताळणीचे नियम: १) जर निष्कर्षात 'A > B' असेल, तर संपूर्ण प्रवासात किमान एका ठिकाणी '>' असणे अनिवार्य आहे; २) जर निष्कर्षात 'A ≥ B' असेल, तर प्रत्येक पायरीवर '≥' किंवा '=' असणे अनिवार्य आहे; एकाही ठिकाणी केवळ '>' आल्यास 'A ≥ B' चुकीचे ठरते",
                                            titleEn: "Verification Rules: For 'A > B' to be true, at least one single '>' gate must exist along the path; For 'A >= B' to be true, every gate must have '=' support",
                                            chips: ["A > B नियम (किमान १ मोठा)", "A >= B नियम (सर्वत्र बरोबर चिन्ह)", "अचूक निष्कर्ष"]
                                        },
                                        {
                                            id: "st_gb_ma06_01_03",
                                            titleMr: "चिन्हांकित असमानता व Either-Or: चिन्हे डीकोड करणे (उदा. P @ Q म्हणजे P हा Q पेक्षा लहान नाही म्हणजे ≥); Either-Or केस: १) संबंध निश्चित नसताना तिन्ही चिन्हे उपस्थित असल्यास (> , < , =); २) जेव्हा संबंध ≥ किंवा ≤ येतो आणि दोन निष्कर्षांत एकात > व दुसऱ्यात = दिलेले असते",
                                            titleEn: "Coded Decoding & Either-Or: Symbol substitution mapping; Either-Or conditions: When relation is indeterminate and all 3 signs present (> , < , =), or when compound >= breaks into separate > and =",
                                            chips: ["चिन्हांकित तुलना (Coded)", "Either-Or केस", "तिन्ही चिन्हे (> , < , =)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "संपूर्ण बुद्धिमत्ता चाचणी", standard: "सचिन ढवळे", chapterRef: "प्रकरण: असमानता व तुलना" },
                                        { book: "Analytical Reasoning", standard: "M.K. Pandey", chapterRef: "Coded Inequalities" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mapt_c07",
                            code: "MA07",
                            section: "B",
                            slug: "data-sufficiency-two-and-three-statements",
                            nameMr: "माहितीची पुरेशीता / डेटा सफिशियन्सी (Data Sufficiency)",
                            nameEn: "Data Sufficiency: Two-Statement & Three-Statement Sufficiency Heuristics",
                            name: "डेटा सफिशियन्सी (Data Sufficiency)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mapt_c07",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mapt_c06",
                            nextChapterId: "gb_mapt_c08",
                            metaDescriptionMr: "डेटा सफिशियन्सी (Data Sufficiency), प्रश्नाचे उत्तर शोधण्याची गरज नाही तर माहिती पुरेशी आहे का हे तपासणे, केवळ विधान १ पुरेसे, केवळ २ पुरेसे, दोन्ही मिळून पुरेसे, किंवा दोन्ही मिळूनही अपुरे.",
                            metaDescriptionEn: "In-depth review of Data Sufficiency: Methodology of testing sufficiency without calculating final numeric answers, Statement 1 alone, Statement 2 alone, Either alone, Both together, or Neither sufficient.",
                            notesJsonPath: "/data/notes/group_b/mains/aptitude/c07_data_sufficiency.json",
                            quizTag: "gb_mapt_sufficiency_01",
                            tags: ["Advanced Logic", "Data Sufficiency", "Sufficiency Heuristics", "Mathematical Sufficiency", "High-Weightage"],
                            searchKeywords: ["data sufficiency reasoning shortcuts mpsc mains", "statement 1 alone sufficient statement 2 alone", "either statement sufficient neither sufficient", "how to solve data sufficiency without calculations", "डेटा सफिशियन्सी माहितीची पुरेशीता", "विधान १ पुरेसे विधान २ पुरेसे", "दोन्ही मिळून पुरेसे", "माहिती अपुरी"],
                            topics: [
                                {
                                    id: "top_gb_ma07_01",
                                    nameMr: "डेटा सफिशियन्सीची सोडवणूक रणनीती, पर्यायांची रचना आणि पडताळणी",
                                    nameEn: "Sufficiency Decision Tree, Evaluation Protocol & Multi-Disciplinary Testing",
                                    subtopics: [
                                        {
                                            id: "st_gb_ma07_01_01",
                                            titleMr: "डेटा सफिशियन्सीचे सुवर्ण तत्त्व: संपूर्ण गणित सोडवून अंतिम उत्तर काढण्याची गरज नसते; दिलेल्या विधानांमधून एकमेव (Unique) उत्तर निघू शकते की नाही, केवळ हेच तपासायचे असते; जर एका विधानातून दोन वेगळी उत्तरे येत असतील, तर ती माहिती 'अपुरी' मानली जाते",
                                            titleEn: "Golden Principle of Data Sufficiency: Do NOT solve completely for numeric value; Only determine whether a unique answer is attainable; Multiple possible answers mean insufficient data",
                                            chips: ["उत्तर काढण्याची गरज नाही", "माहिती पुरेशी तपासणे", "एकमेव (Unique) उत्तर निकष"]
                                        },
                                        {
                                            id: "st_gb_ma07_01_02",
                                            titleMr: "तपासणीचा क्रम (Flowchart of Decisions): १) आधी केवळ विधान १ तपासा (जर पुरेसे असेल तर २ कडे जा); २) केवळ विधान २ स्वतंत्रपणे तपासा; ३) जर १ आणि २ स्वतंत्रपणे अपुरे असतील, तरच दोघांना एकत्र (Combine) करून तपासा; पर्यायांचे ५ मानक प्रकार (केवळ १, केवळ २, १ किंवा २ पैकी कोणताही एक, दोन्ही मिळून, दोन्ही मिळूनही अपुरे)",
                                            titleEn: "Decision Flowchart: Step 1: Test Statement 1 alone; Step 2: Test Statement 2 alone; Step 3: Combine 1 & 2 ONLY if both failed individually; 5 Standard outcome options",
                                            chips: ["तपासणीचा क्रम (१ -> २ -> एकत्र)", "स्वतंत्र पडताळणी", "५ मानक पर्याय"]
                                        },
                                        {
                                            id: "st_gb_ma07_01_03",
                                            titleMr: "कोणत्या घटकांवर डेटा सफिशियन्सी विचारली जाते: १) वयवारी, २) नातेसंबंध (A चे B शी नाते), ३) दिशा व अंतर, ४) बैठक व्यवस्था, ५) संख्यांवरील गणिते (सम/विषम); मुख्य परीक्षेत यावर २ प्रश्न हमखास असतात",
                                            titleEn: "Subject Coverage: Age equations, Blood relations, Direction sense, Seating rank, Number properties; High-frequency 2 questions in Mains Paper 2",
                                            chips: ["वयवारी सफिशियन्सी", "नातेसंबंध सफिशियन्सी", "बैठक व्यवस्था डेटा"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Analytical Reasoning", standard: "M.K. Pandey", chapterRef: "Chapter: Data Sufficiency" },
                                        { book: "संपूर्ण बुद्धिमत्ता चाचणी", standard: "सचिन ढवळे", chapterRef: "माहितीची पुरेशीता" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mapt_c08",
                            code: "MA08",
                            section: "B",
                            slug: "complex-multi-variable-puzzles-and-floor-arrangements",
                            nameMr: "गुंतागुंतीची कोडी: बहु-चलन मॅट्रिक्स आणि मजल्यांची रचना (Complex Puzzles)",
                            nameEn: "Complex Multi-Variable Logic Puzzles & Floor/Box Building Arrangements",
                            name: "गुंतागुंतीची कोडी (Complex Logic Puzzles)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mapt_c08",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mapt_c07",
                            nextChapterId: "gb_mapt_c09",
                            metaDescriptionMr: "उच्च काठिण्य पातळीची कोडी (Mains Level Puzzles), ७ मजली इमारतीवरील कोडी, व्यक्ती-वार-शहर-रंग ३ ते ४ चलनांची मॅट्रिक्स कोडी, डब्यांची थप्पी (Box Puzzles), आणि नकारात्मक माहितीचे निर्मूलन.",
                            metaDescriptionEn: "In-depth review of High-Level Analytical Puzzles: 7-8 storey Floor arrangements, 3-4 Multi-variable matrix grids (Person-City-Car-Color), Box stacking puzzles, and Negative constraint elimination.",
                            notesJsonPath: "/data/notes/group_b/mains/aptitude/c08_complex_puzzles.json",
                            quizTag: "gb_mapt_puzzles_01",
                            tags: ["Advanced Logic", "Complex Puzzles", "Floor Based Puzzles", "Box Stacking Puzzles", "Multi-Variable Matrix", "High-Weightage"],
                            searchKeywords: ["complex reasoning puzzles mpsc mains 4 variables", "floor based puzzles 7 8 storeys", "box puzzle stacking on top of another", "matrix grid puzzle person profession city car", "गुंतागुंतीची कोडी", "मजल्यांची कोडी ७ मजले", "डब्यांची थप्पी Box Puzzles", "मॅट्रिक्स कोडी"]
                        },


                        // =========================================================================
                        // विभाग C — संभाव्यता, क्रमपरिवर्तन व संयोजन (Modern Math in Mains)
                        // =========================================================================
                        {
                            id: "gb_mapt_c09",
                            code: "MA09",
                            section: "C",
                            slug: "permutations-and-combinations-fundamental-principles",
                            nameMr: "क्रमपरिवर्तन आणि संयोजन (Permutations & Combinations - P&C)",
                            nameEn: "Permutations & Combinations: Factorials, Arrangements & Selections",
                            name: "क्रमपरिवर्तन व संयोजन (P&C Principles)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mapt_c09",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mapt_c08",
                            nextChapterId: "gb_mapt_c10",
                            metaDescriptionMr: "क्रमपरिवर्तन (Permutations nPr = क्रम महत्त्वाची मांडणी), संयोजन (Combinations nCr = निवड), शब्दांमधील अक्षरांची मांडणी, हात मिळवणी (Handshakes n(n-1)/2), आणि समिती निवड उदाहरणे.",
                            metaDescriptionEn: "In-depth review of Permutations (nPr = n!/(n-r)! arrangements where order matters) & Combinations (nCr = n!/[r!(n-r)!] selections), Word letter rearrangements, Handshakes/Matches formula n(n-1)/2, and Committee selections.",
                            notesJsonPath: "/data/notes/group_b/mains/aptitude/c09_permutations_combinations.json",
                            quizTag: "gb_mapt_pnc_01",
                            tags: ["Modern Math", "Permutations nPr", "Combinations nCr", "Word Rearrangements", "Handshake Formula", "High-Weightage"],
                            searchKeywords: ["permutations and combinations formulas shortcuts", "npr and ncr formulas difference", "word letters rearrangement vowels together", "handshakes matches tournament formula n n minus 1 by 2", "committee selection men women p and c", "क्रमपरिवर्तन nPr आणि संयोजन nCr", "अक्षरांची मांडणी स्वर एकत्र येणे", "हात मिळवणी सूत्र n(n-१)/२", "समिती निवड"]
                        },
                        {
                            id: "gb_mapt_c10",
                            code: "MA10",
                            section: "C",
                            slug: "probability-classical-cards-dice-and-coins",
                            nameMr: "संभाव्यता (Probability): फासे, पत्ते, नाणी आणि चेंडूंच्या पिशव्या",
                            nameEn: "Probability: Sample Spaces, Playing Cards, Dice, Coins & Urn Models",
                            name: "संभाव्यता (Probability: Cards, Dice & Coins)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mapt_c10",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mapt_c09",
                            nextChapterId: "gb_mapt_c11",
                            metaDescriptionMr: "संभाव्यता सूत्र [P(E) = n(E) / n(S)], नाणी फेकणे (२ व ३ नाणी), दोन फासे फेकणे (n(S) = ३६), ५२ पत्त्यांचा संच (रंग, चिन्हे, चित्रयुक्त पत्ते Face Cards), आणि पिशवीतील चेंडू निवडणे.",
                            metaDescriptionEn: "In-depth review of Probability: P(E) = n(E)/n(S), Coin tossing sample spaces, Two dice rolling (n(S)=36, sum tables), 52 Playing Cards breakdown (Suits, 12 Face cards, Aces), and Colored ball urn selection problems using Combinations.",
                            notesJsonPath: "/data/notes/group_b/mains/aptitude/c10_probability.json",
                            quizTag: "gb_mapt_prob_01",
                            tags: ["Modern Math", "Probability", "Playing Cards 52", "Two Dice Sum", "Coin Toss Sample Space", "Urn Ball Models", "High-Weightage"],
                            searchKeywords: ["probability formulas shortcuts mpsc mains", "sample space tossing 2 3 coins", "two dice thrown sum is prime number", "52 playing cards probability face cards aces", "colored balls selected from bag probability", "संभाव्यता सूत्र P(E) = n(E)/n(S)", "५२ पत्ते फेस कार्ड्स", "दोन फासे ३६ नमुना अवकाश", "नाणी फेकणे", "चेंडू निवडणे"]
                        },


                        // =========================================================================
                        // विभाग D — निर्णयक्षमता व मास्टर रिव्हिजन (Decision Making & Master Strategy)
                        // =========================================================================
                        {
                            id: "gb_mapt_c11",
                            code: "MA11",
                            section: "D",
                            slug: "decision-making-and-administrative-case-studies",
                            nameMr: "निर्णयक्षमता (Decision Making): प्रशासकीय प्रसंग, नैतिक पेच आणि तोडगा",
                            nameEn: "Decision Making & Administrative Case Studies: Ethical Dilemmas & Policy Choices",
                            name: "निर्णयक्षमता व पेचप्रसंग (Decision Making & Case Studies)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mapt_c11",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mapt_c10",
                            nextChapterId: "gb_mapt_c12",
                            metaDescriptionMr: "निर्णयक्षमता (Decision Making), प्रशासकीय अधिकारी म्हणून नैतिक पेचप्रसंगांची (Ethical Dilemmas) उकल, भ्रष्टाचार व राजकीय दबाव, संवेदनशील परिस्थिती आणि निष्पक्ष तोडगा.",
                            metaDescriptionEn: "In-depth review of Decision Making: Navigating ethical dilemmas as an administrative civil servant, Political pressure vs Rule of law, Immediate disaster handling, Neutrality, and Conflict of interest resolution.",
                            notesJsonPath: "/data/notes/group_b/mains/aptitude/c11_decision_making.json",
                            quizTag: "gb_mapt_dm_01",
                            tags: ["Decision Making", "Administrative Case Studies", "Ethical Dilemmas", "Rule of Law", "Neutrality", "High-Weightage"],
                            searchKeywords: ["decision making administrative case studies mpsc mains", "ethical dilemmas civil servant rule of law", "conflict of interest political pressure handling", "disaster management immediate decisions", "निर्णयक्षमता केस स्टडीज", "प्रशासकीय नैतिक पेचप्रसंग", "कायद्याचे राज्य", "हितसंबंधांचा संघर्ष"]
                        },
                        {
                            id: "gb_mapt_c12",
                            code: "MA12",
                            section: "D",
                            slug: "mains-aptitude-master-revision-and-pyq-trends",
                            nameMr: "मुख्य बुद्धिमत्ता मास्टर रिव्हिजन: पेपर २ मधील १० प्रश्नांची रणनीती व PYQ विश्लेषण",
                            nameEn: "Mains Reasoning Master Revision: 10-Question Target Strategy & 10-Year PYQ Trends",
                            name: "बुद्धिमत्ता मास्टर रिव्हिजन (Master Revision: Mains Strategy)",
                            category: "REVISION",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mapt_c12",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mapt_c11",
                            nextChapterId: null,
                            metaDescriptionMr: "मुख्य परीक्षा पेपर २ मधील बुद्धिमत्ता चाचणीच्या १० प्रश्नांचे (२० गुण) अचूक नियोजन, वेळ व्यवस्थापन (१२-१४ मिनिटे), Critical Reasoning सोडवण्याचे नियम, आणि मागील १० वर्षांचे PYQ विश्लेषण.",
                            metaDescriptionEn: "Master consolidation module: Strategy for Mains Paper 2 Reasoning (10 questions = 20 marks), Time budgeting (12-14 minutes), Critical reasoning heuristics, and 10-year MPSC Mains trend analysis.",
                            notesJsonPath: "/data/notes/group_b/mains/aptitude/c12_master_revision.json",
                            quizTag: "gb_mapt_revision_01",
                            tags: ["Revision", "Mains Paper 2 Strategy", "10 Questions 20 Marks", "Time Management", "PYQ Trends", "High-Weightage"],
                            searchKeywords: ["mpsc group b mains paper 2 mental ability 10 questions strategy", "time allocation paper 2 gs reasoning 60 mins 100 questions", "critical reasoning elimination techniques", "mpsc mains reasoning pyq trend analysis 2012 to 2025", "मुख्य परीक्षा पेपर २ बुद्धिमत्ता रणनीती", "१० प्रश्न २० गुण", "वेळ नियोजन १२ मिनिटे", "PYQ विश्लेषण"]
                        }
                    ]
                },


                {
                    id: "gb_mains_quant_stats",
                    code: "M_STAT",
                    slug: "arithmetic-and-basic-statistics-mains",
                    nameMr: "अंकगणित व मूलभूत सांख्यिकी",
                    nameEn: "Quantitative Aptitude and Basic Statistics (Mains Special)",
                    name: "अंकगणित व सांख्यिकी (Aptitude & Statistics)",
                    officialScope: "Advanced Commercial Arithmetic, Surds & Indices, Linear Equations, Profit-Loss, Work-Time-Speed, and Basic Statistics (Measures of Central Tendency: Mean, Median, Mode; Measures of Dispersion: Standard Deviation, Variance; Frequency Distribution & Statistical Graphs) for MPSC Group B Mains Paper 2",
                    version: "1.0",
                    verifiedDate: "2026-10-28",
                    notesJsonBaseDir: "/data/notes/group_b/mains/statistics/",


                    // UI Theme & Theming Metadata
                    theme: {
                        primaryColor: "#1d4ed8",        // Royal Blue / Statistical Analytics Theme
                        bgColor: "#eff6ff",
                        iconClass: "ri-bar-chart-box-line"
                    },


                    // अभ्यास व डॅशबोर्ड ॲनालिटिक्स मेट्रिक्स
                    metrics: {
                        totalChapters: 12,
                        totalEstimatedHours: 42,
                        avgQuestionsInMains: 10,
                        targetMarks: 20,
                        weightageRange: "10 Questions / 20 Marks"
                    },


                    // विषय पातळीवरील स्मार्ट टॅग्ज
                    subjectTags: [
                        "Core-Mains",
                        "Mains-Paper-2",
                        "Formula-Intensive",
                        "Statistics-Special",
                        "High-Scoring",
                        "Data-Driven"
                    ],


                    filterCategory: "GS",
                    searchKeywords: [
                        "mpsc group b mains statistics syllabus", "measures of central tendency mean median mode grouped data",
                        "standard deviation variance coefficient of variation", "surds and indices simplification",
                        "frequency distribution histogram ogive", "mpsc mains arithmetic questions",
                        "मूलभूत सांख्यिकी मध्य मध्यक बहुलक", "प्रमाण विचलन स्टँडर्ड डिव्हिएशन", "वारंवारता वितरण संचित वारंवारता", "अंकगणित व सांख्यिकी", "MPSC मुख्य परीक्षा पेपर २ सांख्यिकी"
                    ],


                    referenceSources: [
                        {
                            name: "MPSC Non-Gazetted Group B Combined Mains Syllabus",
                            role: "अधिकृत परीक्षा-संदर्भ",
                            url: "https://mpsc.gov.in"
                        },
                        {
                            name: "NCERT Class 10 & 11 Mathematics (Statistics)",
                            role: "सांख्यिकी संकल्पना, मध्य, मध्यक, बहुलक व प्रमाण विचलन",
                            url: "https://ncert.nic.in"
                        },
                        {
                            name: "महाराष्ट्र राज्य पाठ्यपुस्तक मंडळ (Balbharati) इयत्ता १० वी गणित भाग १",
                            role: "प्रकरण ६: सांख्यिकी (मध्य, मध्यक, बहुलक सूत्रे व आलेख)"
                        },
                        {
                            name: "मॅजिक ऑफ मॅथ्स व सांख्यिकी - नितीन महाले",
                            role: "स्पर्धा परीक्षा शॉर्टकट्स व सूत्रे"
                        },
                        {
                            name: "संपूर्ण बुद्धिमत्ता व अंकगणित - सचिन ढवळे",
                            role: "MPSC मुख्य परीक्षा विश्लेषण व सराव"
                        }
                    ],


                    chapters: [
                        // =========================================================================
                        // विभाग A — मूलभूत सांख्यिकी (Basic Statistics - MPSC Mains Core)
                        // =========================================================================
                        {
                            id: "gb_mstat_c01",
                            code: "MS01",
                            section: "A",
                            slug: "statistics-data-collection-presentation-frequency-tables",
                            nameMr: "सामग्री संकलन, वारंवारता सारणी आणि सांख्यिकीय आलेख",
                            nameEn: "Basic Statistics: Data Collection, Frequency Distribution & Statistical Graphs",
                            name: "सामग्री व वारंवारता सारणी (Data Collection & Frequency Distribution)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mstat_c01",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: null,
                            nextChapterId: "gb_mstat_c02",
                            metaDescriptionMr: "प्राथमिक व दुय्यम सामग्री (Primary & Secondary Data), वर्गीकृत व अवर्गीकृत वारंवारता सारणी, वर्गमर्यादा, वर्गमध्य (Class Mark), स्तंभालेख (Histogram), वारंवारता बहुभुज (Frequency Polygon), आणि संचित वारंवारता वक्र (Ogive).",
                            metaDescriptionEn: "In-depth review of Data Collection: Primary vs Secondary Data, Grouped vs Ungrouped Frequency Distributions, Class Intervals, Class Marks, Histograms, Frequency Polygons, and Cumulative Frequency Curves (Ogives).",
                            notesJsonPath: "/data/notes/group_b/mains/statistics/c01_data_frequency.json",
                            quizTag: "gb_mstat_data_01",
                            tags: ["Statistics", "Primary Secondary Data", "Class Mark", "Frequency Distribution", "Histogram", "Cumulative Frequency Ogive", "High-Weightage"],
                            searchKeywords: ["statistics data collection primary secondary data", "frequency distribution grouped ungrouped class mark", "histogram frequency polygon cumulative frequency curve ogive", "class limits lower upper inclusive exclusive", "सामग्री संकलन प्राथमिक दुय्यम माहिती", "वारंवारता वितरण सारणी", "वर्गमध्य Class Mark", "स्तंभालेख Histogram", "संचित वारंवारता वक्र Ogive"],
                            topics: [
                                {
                                    id: "top_gb_ms01_01",
                                    nameMr: "सामग्रीचे प्रकार, वर्ग रचना, वारंवारता वितरण आणि आलेखांचे प्रकार",
                                    nameEn: "Data Taxonomies, Class Intervals, Frequency Distribution & Graphical Displays",
                                    subtopics: [
                                        {
                                            id: "st_gb_ms01_01_01",
                                            titleMr: "सामग्रीचे प्रकार (Types of Data): १) प्राथमिक सामग्री (Primary Data: संशोधकाने किंवा अन्वेषकाने स्वतः प्रत्यक्ष भेट देऊन गोळा केलेली ताजी व मूळ माहिती - उदा. जनगणनेची माहिती, सर्वेक्षण); २) दुय्यम सामग्री (Secondary Data: आधीच इतर संस्थांनी किंवा व्यक्तींनी गोळा केलेली व प्रकाशित/अप्रकाशित स्वरूपातील माहिती - उदा. शासकीय गॅझेटियर, पुस्तके, वर्तमानपत्रे)",
                                            titleEn: "Primary vs Secondary Data: Primary Data (Collected first-hand by investigator for specific purpose: Census, field surveys); Secondary Data (Already compiled and processed by external agency: Govt records, published reports)",
                                            chips: ["प्राथमिक सामग्री (Primary Data)", "दुय्यम सामग्री (Secondary Data)", "सर्वेक्षण व गॅझेटियर"]
                                        },
                                        {
                                            id: "st_gb_ms01_01_02",
                                            titleMr: "वारंवारता वितरण संकल्पना (Frequency Terminology): १) वर्गमर्यादा (Class Limits: खालची मर्यादा L व वरची मर्यादा U); २) वर्गमध्य (Class Mark = [खालची मर्यादा + वरची मर्यादा] / २); ३) वर्ग अवकाश / वर्गांतर (Class Width / Size = वरची मर्यादा - खालची मर्यादा); ४) समावेशक पद्धत (Inclusive: १०-१९, २०-२९) विरुद्ध अपवर्जक पद्धत (Exclusive: १०-२०, २०-३०); ताळ्याच्या खुणा (Tally Marks)",
                                            titleEn: "Statistical Class Metrics: Class Limits (Lower L & Upper U); Class Mark = (L + U)/2; Class Interval/Width = Upper - Lower; Inclusive (Discrete) vs Exclusive (Continuous) classes; Tally Marks counting",
                                            chips: ["वर्गमध्य (L + U)/२", "वर्गांतर Class Width", "समावेशक विरुद्ध अपवर्जक पद्धत", "ताळ्याच्या खुणा"]
                                        },
                                        {
                                            id: "st_gb_ms01_01_03",
                                            titleMr: "सांख्यिकीय आलेख (Statistical Graphs): १) स्तंभालेख / आयतालेख (Histogram: सलग वर्गांसाठी काढलेले संलग्न आयत - आयताचे क्षेत्रफळ वारंवारतेशी समप्रमाणात असते); २) वारंवारता बहुभुज (Frequency Polygon: आयतालेखाच्या प्रत्येक वर्गाच्या वर्गमध्याचे बिंदू सरळ रेषांनी जोडून तयार होणारा बहुभुज); ३) संचित वारंवारता वक्र / ओजाइव्ह (Ogive: पेक्षा कमी व पेक्षा जास्त संचित वारंवारतेचा वक्र; दोन्ही वक्र ज्या बिंदूवर छेदतात त्यावरून 'मध्यक' / Median काढता येतो)",
                                            titleEn: "Graphical Displays: Histogram (Contiguous rectangular bars for continuous data), Frequency Polygon (Connecting midpoints of class intervals), Cumulative Frequency Curve (Ogive: Intersection of 'less than' and 'more than' ogives yields Median)",
                                            chips: ["आयतालेख (Histogram)", "वारंवारता बहुभुज (Frequency Polygon)", "संचित वारंवारता वक्र (Ogive)", "ओजाइव्ह छेदनबिंदूवरून मध्यक (Median)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "बालभारती गणित भाग १", standard: "इयत्ता १० वी", chapterRef: "प्रकरण ६: सांख्यिकी - वारंवारता वितरण" },
                                        { book: "NCERT Statistics", standard: "Class 11", chapterRef: "Presentation of Data & Frequency Curves" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mstat_c02",
                            code: "MS02",
                            section: "A",
                            slug: "measures-of-central-tendency-mean-median-mode",
                            nameMr: "केंद्रीय प्रवृत्तीची मापे: मध्य (Mean), मध्यक (Median) आणि बहुलक (Mode)",
                            nameEn: "Measures of Central Tendency: Mean, Median & Mode Formulations",
                            name: "केंद्रीय प्रवृत्तीची मापे (Mean, Median & Mode)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 5,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mstat_c02",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mstat_c01",
                            nextChapterId: "gb_mstat_c03",
                            metaDescriptionMr: "अवर्गीकृत व वर्गीकृत सामग्रीचा मध्य (Mean = Σfx/Σf), मध्यक (Median), बहुलक (Mode - सर्वाधिक वारंवारता), तिन्हींमधील परस्पर संबंध सूत्र [Mode = 3(Median) - 2(Mean)], आणि गुणधर्म.",
                            metaDescriptionEn: "In-depth review of Measures of Central Tendency: Arithmetic Mean (Direct, Assumed Mean, Step-deviation), Median (Position formula & Grouped interpolation), Mode (Maximum frequency class formula), and Empirical Relationship [Mode = 3*Median - 2*Mean].",
                            notesJsonPath: "/data/notes/group_b/mains/statistics/c02_mean_median_mode.json",
                            quizTag: "gb_mstat_mean_01",
                            tags: ["Statistics", "Measures of Central Tendency", "Mean Median Mode", "Empirical Relationship Formula", "Grouped Data Formulas", "High-Weightage"],
                            searchKeywords: ["measures of central tendency mean median mode formulas", "empirical relationship mode 3 median minus 2 mean", "mean grouped data assumed mean step deviation", "median formula grouped data l plus n by 2 cf", "mode formula l plus f1 minus f0", "केंद्रीय प्रवृत्तीची मापे", "मध्य अंकगणितीय सरासरी", "मध्यक Median", "बहुलक Mode", "बहुलक = ३ मध्यक - २ मध्य सूत्र"],
                            topics: [
                                {
                                    id: "top_gb_ms02_01",
                                    nameMr: "मध्य, मध्यक, बहुलक यांची सूत्रे, अनुभवजन्य संबंध आणि गुणधर्मांची तुलना",
                                    nameEn: "Parametric Estimations, Grouped Mathematical Formulations & Empirical Symmetry",
                                    subtopics: [
                                        {
                                            id: "st_gb_ms02_01_01",
                                            titleMr: "अंकगणितीय मध्य (Arithmetic Mean - X̄): १) अवर्गीकृत सामग्रीचा मध्य: X̄ = (सर्व प्राप्तांकांची बेरीज) / एकूण संख्या = Σx / n; २) वर्गीकृत सामग्रीचा प्रत्यक्ष मध्य: X̄ = Σ(fi × xi) / Σfi (येथे xi = वर्गमध्य, fi = वारंवारता); ३) गृहीत मध्य पद्धत (Assumed Mean Method: X̄ = A + [Σ(fi × di) / Σfi]); ४) मध्य हा टोकाच्या मूल्यांमुळे (Outliers / Extreme Values) सर्वाधिक प्रभावित होतो; सर्व प्राप्तांकांच्या मध्यापासूनच्या विचलनांची बेरीज नेहमी शून्य असते: Σ(x - X̄) = ०",
                                            titleEn: "Arithmetic Mean (X̄): Raw Data X̄ = Σx/n; Grouped Direct Method X̄ = Σ(fi*xi)/Σfi; Assumed Mean Method X̄ = A + Σ(fi*di)/Σfi; Highly sensitive to extreme outliers; Sum of deviations from mean is always ZERO: Σ(x - X̄) = 0",
                                            chips: ["मध्य सूत्र X̄ = Σfx / Σf", "गृहीत मध्य पद्धत (Assumed Mean)", "मध्यापासून विचलनांची बेरीज शून्य", "टोकाच्या मूल्यांचा परिणाम"]
                                        },
                                        {
                                            id: "st_gb_ms02_01_02",
                                            titleMr: "मध्यक (Median - M): सामग्री चढत्या किंवा उतरत्या क्रमाने मांडल्यावर बरोबर मध्यभागी येणारा प्राप्तांक; १) अवर्गीकृत: जर n विषम असेल तर मध्यक = [(n + १) / २] वे पद; जर n सम असेल तर मध्यक = [(n/२) वे पद + (n/२ + १) वे पद] / २; २) वर्गीकृत सामग्रीचा मध्यक सूत्र: Median = L + [{(N/२) - cf} / f] × h (येथे L = मध्यक वर्गाची खालची मर्यादा, N = एकूण वारंवारता, cf = आधीच्या वर्गाची संचित वारंवारता, f = मध्यक वर्गाची वारंवारता, h = वर्गांतर); टोकाच्या मूल्यांचा मध्यकावर परिणाम होत नाही",
                                            titleEn: "Median (M): Middle positional value; Raw Data: (n+1)/2 term for odd n, average of n/2 and (n/2 + 1) for even n; Grouped Formula: Median = L + [{(N/2) - cf} / f] * h; Robust to extreme outliers",
                                            chips: ["मध्यक (Median - मध्यभागी येणारा)", "वर्गीकृत मध्यक सूत्र L + [(N/२ - cf)/f] × h", "टोकाच्या मूल्यांचा परिणाम नाही"]
                                        },
                                        {
                                            id: "st_gb_ms02_01_03",
                                            titleMr: "बहुलक (Mode - Z): सामग्रीमध्ये सर्वात जास्त वेळा येणारा (कमाल वारंवारता असणारा) प्राप्तांक; एका सामग्रीला एक, दोन (Bimodal) किंवा अनेक बहुलक असू शकतात; वर्गीकृत सामग्रीचा बहुलक सूत्र: Mode = L + [(f१ - f०) / (२f१ - f० - f२)] × h (येथे L = बहुलक वर्गाची खालची मर्यादा, f१ = बहुलक वर्गाची वारंवारता, f० = आधीच्या वर्गाची, f२ = नंतरच्या वर्गाची वारंवारता, h = वर्गांतर)",
                                            titleEn: "Mode (Z): Value with maximum frequency; Can be unimodal, bimodal or multimodal; Grouped Formula: Mode = L + [(f1 - f0) / (2f1 - f0 - f2)] * h (where f1 is modal frequency, f0 preceding, f2 succeeding)",
                                            chips: ["बहुलक (Mode - सर्वाधिक वारंवारता)", "वर्गीकृत बहुलक सूत्र", "Bimodal सामग्री"]
                                        },
                                        {
                                            id: "st_gb_ms02_01_04",
                                            titleMr: "अनुभवजन्य संबंध सूत्र (Empirical Relationship - MPSC चा सर्वात आवडता प्रश्न): विषम (Asymmetric / Skewed) वारंवारता वितरणासाठी मध्य, मध्यक व बहुलक यांमधील संबंध: बहुलक = ३(मध्यक) - २(मध्य) म्हणजेच Mode = ३(Median) - २(Mean); सममित वितरणात (Symmetrical Bell Curve) तिन्ही मूल्ये तंतोतंत समान असतात: Mean = Median = Mode",
                                            titleEn: "Empirical Relationship Formula (High-Yield): For moderately skewed distributions: Mode = 3*Median - 2*Mean; For perfectly symmetrical normal distributions: Mean = Median = Mode",
                                            chips: ["बहुलक = ३(मध्यक) - २(मध्य)", "Mode = 3(Median) - 2(Mean)", "सममित वितरणात Mean = Median = Mode"]
                                        }
                                    ],
                                    sources: [
                                        { book: "बालभारती गणित भाग १", standard: "इयत्ता १० वी", chapterRef: "प्रकरण ६: सांख्यिकी - मध्य, मध्यक व बहुलक" },
                                        { book: "मॅजिक ऑफ मॅथ्स व सांख्यिकी", standard: "नितीन महाले", chapterRef: "केंद्रीय प्रवृत्तीची मापे" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mstat_c03",
                            code: "MS03",
                            section: "A",
                            slug: "measures-of-dispersion-range-variance-and-standard-deviation",
                            nameMr: "अपस्करणाची मापे: विस्तार (Range), विचरण (Variance) व प्रमाण विचलन (Standard Deviation)",
                            nameEn: "Measures of Dispersion: Range, Mean Deviation, Variance & Standard Deviation",
                            name: "अपस्करणाची मापे (Dispersion, Variance & SD)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mstat_c03",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mstat_c02",
                            nextChapterId: "gb_mstat_c04",
                            metaDescriptionMr: "अपस्करणाची मापे (Dispersion), विस्तार (Range = L - S), विचरण (Variance σ²), प्रमाण विचलन (Standard Deviation σ = √Variance), आणि विचरण गुणांक (Coefficient of Variation CV = [σ/X̄] * 100).",
                            metaDescriptionEn: "In-depth review of Measures of Dispersion: Range (Max - Min), Mean Deviation, Variance (Average of squared deviations from mean), Standard Deviation (Square root of Variance), and Coefficient of Variation (CV consistency test).",
                            notesJsonPath: "/data/notes/group_b/mains/statistics/c03_dispersion_deviation.json",
                            quizTag: "gb_mstat_dispersion_01",
                            tags: ["Statistics", "Measures of Dispersion", "Range", "Variance Formula", "Standard Deviation Sigma", "Coefficient of Variation CV", "High-Weightage"],
                            searchKeywords: ["measures of dispersion range variance standard deviation", "range largest value minus smallest value", "variance sigma squared formula", "standard deviation square root of variance", "coefficient of variation cv consistency formula", "अपस्करणाची मापे", "विस्तार Range", "विचरण Variance", "प्रमाण विचलन Standard Deviation", "विचरण गुणांक CV"],
                            topics: [
                                {
                                    id: "top_gb_ms03_01",
                                    nameMr: "विस्तार, विचलनाची संकल्पना, प्रमाण विचलन आणि सातत्य तपासणी",
                                    nameEn: "Dispersion Metrics, Variance Mechanics, Standard Deviation & Consistency Profiling",
                                    subtopics: [
                                        {
                                            id: "st_gb_ms03_01_01",
                                            titleMr: "विस्तार (Range): अपस्करणाचे सर्वात सोपे माप; विस्तार = सामग्रीतील सर्वात मोठा प्राप्तांक (L) - सर्वात लहान प्राप्तांक (S); विस्ताराचा सहगुणक = (L - S) / (L + S); केवळ टोकाच्या दोन मूल्यांवर अवलंबून असल्याने मर्यादित उपयुक्तता",
                                            titleEn: "Range & Coefficient of Range: Simplest measure; Range = Largest Value (L) - Smallest Value (S); Coefficient of Range = (L - S) / (L + S); Influenced only by extreme values",
                                            chips: ["विस्तार Range = L - S", "विस्ताराचा सहगुणक (L-S)/(L+S)", "सोपे माप"]
                                        },
                                        {
                                            id: "st_gb_ms03_01_02",
                                            titleMr: "विचरण (Variance - σ²): प्राप्तांकांच्या त्यांच्या मध्यापासूनच्या (Mean) विचलनांच्या वर्गांची सरासरी; सूत्र: विचरण σ² = Σ(x - X̄)² / n (येथे x = प्राप्तांक, X̄ = मध्य, n = एकूण संख्या); विचरण हे नेहमी धन संख्या असते",
                                            titleEn: "Variance (σ²): Average of squared deviations from the Arithmetic Mean; Formula: Variance σ² = Σ(x - X̄)² / n; Variance is always a non-negative value",
                                            chips: ["विचरण (Variance σ²)", "σ² = Σ(x - X̄)² / n", "विचलनांच्या वर्गांची सरासरी"]
                                        },
                                        {
                                            id: "st_gb_ms03_01_03",
                                            titleMr: "प्रमाण विचलन (Standard Deviation - σ): कार्ल पियर्सन यांनी १८९३ मध्ये संकल्पना मांडली; अपस्करणाचे सर्वोत्तम व सर्वाधिक वापरले जाणारे निरपेक्ष माप; प्रमाण विचलन हे विचरणाचे वर्गमूळ असते: SD (σ) = √(विचरण / Variance); जर सर्व प्राप्तांकांमध्ये समान संख्या मिळवली किंवा वजा केली, तर प्रमाण विचलन बदलत नाही (Invariant); पण गुणल्यास प्रमाण विचलन तेवढ्या पटीने वाढते",
                                            titleEn: "Standard Deviation (σ): Introduced by Karl Pearson (1893); Best and universally used measure of absolute dispersion; SD is positive square root of Variance: σ = √(Variance); Shift of origin leaves SD invariant; Change of scale changes SD proportionally",
                                            chips: ["प्रमाण विचलन (Standard Deviation σ)", "कार्ल पियर्सन १८९३", "SD = √(विचरण / Variance)", "उत्कृष्ट माप"]
                                        },
                                        {
                                            id: "st_gb_ms03_01_04",
                                            titleMr: "विचरण गुणांक (Coefficient of Variation - CV): दोन वेगवेगळ्या सामग्रीच्या स्थिरतेची किंवा सातत्याची तुलना करण्यासाठी वापरले जाणारे सापेक्ष माप; सूत्र: CV = (प्रमाण विचलन σ / मध्य X̄) × १००; ज्या सामग्रीचा CV कमी असतो ती सामग्री 'अधिक सातत्यपूर्ण / स्थिर / विश्वासार्ह' (More Consistent / Stable) मानली जाते; ज्याचा CV जास्त ती 'अधिक अस्थिर' असते",
                                            titleEn: "Coefficient of Variation (CV): Relative metric to compare consistency between distributions; Formula: CV = (σ / X̄) * 100; Series with LOWER CV is termed MORE CONSISTENT, stable and homogeneous",
                                            chips: ["विचरण गुणांक CV = (σ / X̄) × १००", "कमी CV = अधिक सातत्य / स्थिरता", "क्रिकेटर सातत्य तुलना"]
                                        }
                                    ],
                                    sources: [
                                        { book: "NCERT Statistics for Economics", standard: "Class 11", chapterRef: "Chapter 6: Measures of Dispersion" },
                                        { book: "मॅजिक ऑफ मॅथ्स व सांख्यिकी", standard: "नितीन महाले", chapterRef: "अपस्करणाची मापे व प्रमाण विचलन" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग B — अंकगणित प्रगत घटक (Advanced Commercial Arithmetic)
                        // =========================================================================
                        {
                            id: "gb_mstat_c04",
                            code: "MS04",
                            section: "B",
                            slug: "mains-surds-indices-and-algebraic-simplification",
                            nameMr: "घातांक, करणी (Surds & Indices) आणि बीजगणितीय नित्यसमीकरणे",
                            nameEn: "Advanced Surds, Indices & Algebraic Identities (Mains Level)",
                            name: "घातांक, करणी व नित्यसमीकरणे (Surds, Indices & Algebra)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mstat_c04",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mstat_c03",
                            nextChapterId: "gb_mstat_c05",
                            metaDescriptionMr: "घातांकाचे नियम, करणींचे नियम (सजातीय व विजातीय करणी, करणींचे परिमेयकरण - Rationalization of Surds), बीजगणितीय नित्यसमीकरणे [(a+b)², (a+b)³, a³+b³+c³-3abc], आणि जटिल पदावली.",
                            metaDescriptionEn: "In-depth review of Advanced Surds & Indices: Rationalization of binomial surds via conjugate surds, Radical order comparisons, and Algebraic identities [(a+b)^3, a^3+b^3+c^3 = 3abc if a+b+c=0].",
                            notesJsonPath: "/data/notes/group_b/mains/statistics/c04_surds_indices_algebra.json",
                            quizTag: "gb_mstat_surds_01",
                            tags: ["Advanced Arithmetic", "Surds and Indices", "Rationalization of Surds", "Algebraic Identities", "Conjugate Surds", "High-Weightage"],
                            searchKeywords: ["surds and indices advanced rules mpsc mains", "rationalization of surds conjugate pairs denominator", "algebraic identities a3 b3 c3 3abc", "comparing order of surds square root cube root", "घातांक व करणी नियम", "करणीचे परिमेयकरण Rationalization", "बीजगणितीय नित्यसमीकरणे सूत्रे"],
                            topics: [
                                {
                                    id: "top_gb_ms04_01",
                                    nameMr: "करणींचे नियम, परिमेयकरण, करणींची तुलना आणि बीजगणितीय सूत्रांचे उपयोजन",
                                    nameEn: "Radical Mechanics, Rationalization Procedures, Surd Ranking & Algebraic Factorizations",
                                    subtopics: [
                                        {
                                            id: "st_gb_ms04_01_01",
                                            titleMr: "करणी व तिचे प्रकार: ज्या संख्येचे मूळ पूर्ण संख्येत काढता येत नाही तिला करणी (Surd / Irrational Root) म्हणतात; १) सजातीय करणी (समान कोटी व समान करणीस्थ संख्या); २) करणींचे परिमेयकरण (Rationalization of Denominator): छेदातील करणी दूर करण्यासाठी तिच्या अनुबद्ध जोडीने (Conjugate Surd) गुणणे - उदा. (√a + √b) ची अनुबद्ध जोडी (√a - √b) असते",
                                            titleEn: "Surds & Rationalization: Irrational root; Like vs Unlike Surds; Rationalizing the Denominator via Conjugate Surds: Conjugate pair of (√a + √b) is (√a - √b) using identity a^2 - b^2",
                                            chips: ["करणी (Surds)", "अनुबद्ध जोडी (Conjugate Surd)", "छेदाचे परिमेयकरण", "सजातीय करणी"]
                                        },
                                        {
                                            id: "st_gb_ms04_01_02",
                                            titleMr: "करणींची लहान-मोठेपणा तुलना (Comparing Surds): वेगवेगळ्या कोटी असणाऱ्या करणींची (उदा. √२, ∛३, ∜४) तुलना करण्यासाठी आधी त्यांच्या कोटींचा लसावि काढणे आणि सर्व करणींना एकाच कोटीत आणून अंतर्गत मूल्यावरून क्रम लावणे",
                                            titleEn: "Comparing Orders of Surds: To compare square root, cube root and fourth root, find LCM of their index roots, equate indices and rank interior values",
                                            chips: ["करणींची तुलना", "कोटीचा लसावि पद्धत", "चढता व उतरता क्रम"]
                                        },
                                        {
                                            id: "st_gb_ms04_01_03",
                                            titleMr: "बीजगणितीय नित्यसमीकरणे (MPSC मुख्य परीक्षेत वारंवार वापर): १) a² - b² = (a - b)(a + b); २) a³ + b³ = (a + b)(a² - ab + b²); ३) a³ - b³ = (a - b)(a² + ab + b²); ४) जर a + b + c = ० असेल, तर a³ + b³ + c³ = ३abc (अति-महत्त्वाचा शॉर्टकट); ५) (x + १/x) = k असल्यास (x² + १/x²) = k² - २",
                                            titleEn: "Crucial Algebraic Identities: a^2 - b^2, a^3 + b^3, a^3 - b^3; Special Identity: If a + b + c = 0, then a^3 + b^3 + c^3 = 3abc; Reciprocal identities: If (x + 1/x) = k, then (x^2 + 1/x^2) = k^2 - 2",
                                            chips: ["a³ + b³ + c³ = ३abc (जर a+b+c=०)", "a³ + b³ सूत्र", "(x + १/x) = k शॉर्टकट", "बीजगणितीय विस्तार"]
                                        }
                                    ],
                                    sources: [
                                        { book: "मॅजिक ऑफ मॅथ्स", standard: "नितीन महाले", chapterRef: "प्रकरण: घातांक, करणी व बीजगणित" },
                                        { book: "बालभारती गणित भाग १", standard: "इयत्ता ९ वी", chapterRef: "प्रकरण २: वास्तव संख्या - करणी" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mstat_c05",
                            code: "MS05",
                            section: "B",
                            slug: "linear-equations-and-arithmetic-word-problems",
                            nameMr: "रेषीय समीकरणे, चलन (Variation) आणि संख्यांवरील क्लिष्ट शाब्दिक उदाहरणे",
                            nameEn: "Linear Equations, Direct/Inverse Variations & Number Word Problems",
                            name: "समीकरणे व शाब्दिक गणिते (Linear Equations & Word Problems)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mstat_c05",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mstat_c04",
                            nextChapterId: "gb_mstat_c06",
                            metaDescriptionMr: "एका चलातील व दोन चलांतील रेषीय समीकरणे (ax + by = c), समचलन व व्यस्त चलन, दोन अंकी संख्येतील स्थानांची अदलाबदल, आणि नोटा-नाणी व डोके-पाय यांवरील शाब्दिक गणिते.",
                            metaDescriptionEn: "In-depth review of Simultaneous Linear Equations in two variables, Direct vs Inverse Variations, Two-digit number digit-inversion puzzles, Currency notes-denominations, and Animals Head-Leg count formulations.",
                            notesJsonPath: "/data/notes/group_b/mains/statistics/c05_equations_word_problems.json",
                            quizTag: "gb_mstat_equations_01",
                            tags: ["Advanced Arithmetic", "Linear Equations", "Two Variables", "Direct Inverse Variation", "Heads and Legs Problems", "High-Weightage"],
                            searchKeywords: ["linear equations two variables word problems mpsc", "direct variation inverse variation constant k", "two digit number digits interchanged 10x y", "animals head and legs count shortcuts", "currency denomination notes ratio", "दोन चलांतील रेषीय समीकरणे", "समचलन व व्यस्त चलन", "दोन अंकी संख्येचे अंक उलटे करणे", "डोके व पाय गणिते (बकऱ्या व बदके)"],
                            topics: [
                                {
                                    id: "top_gb_ms05_01",
                                    nameMr: "दोन चलांतील समीकरणे, चलन सिद्धांत आणि परीक्षाभिमुख व्यावहारिक क्लृप्त्या",
                                    nameEn: "Simultaneous Equations, Proportional Variation Constants & Practical Algebra",
                                    subtopics: [
                                        {
                                            id: "st_gb_ms05_01_01",
                                            titleMr: "दोन चलांतील रेषीय समीकरणे: ax + by = c; चलांचे निरसन (Elimination Method) किंवा क्रेमरची पद्धत (Cramer's Rule / निश्चयक Determinants: D, Dx, Dy); दोन अंकी संख्या मांडणी: एकक स्थानी y व दशक स्थानी x असल्यास संख्या = १०x + y; अंकांचे स्थान बदलल्यास संख्या = १०y + x (मूळ व नवीन संख्येतील फरक नेहमी ९ च्या पटीत असतो)",
                                            titleEn: "Linear Simultaneous Equations: ax + by = c; Elimination Method & Cramer's Rule via Determinants; Two-digit number represented as (10x + y); Swapped number (10y + x); Difference between original and swapped number is always a multiple of 9",
                                            chips: ["दोन चलांतील समीकरणे", "क्रेमरची पद्धत (Cramer's Rule)", "दोन अंकी संख्या (१०x + y)", "संख्येतील फरक ९ च्या पटीत"]
                                        },
                                        {
                                            id: "st_gb_ms05_01_02",
                                            titleMr: "समचलन व व्यस्त चलन (Variations): १) समचलन (Direct Variation: x ∝ y => x = k × y; एकाचे मूल्य वाढल्यास दुसऱ्याचे वाढते); २) व्यस्त चलन (Inverse Variation: x ∝ १/y => x × y = k स्थिरांक; मजूर वाढल्यास दिवस कमी होतात); ३) संयुक्त चलन (Joint Variation)",
                                            titleEn: "Direct & Inverse Variations: Direct Variation (x = k*y, constant ratio); Inverse Variation (x*y = k, constant product, e.g., speed and travel time, workers and days)",
                                            chips: ["समचलन (x = ky)", "व्यस्त चलन (xy = k)", "चलन स्थिरांक k"]
                                        },
                                        {
                                            id: "st_gb_ms05_01_03",
                                            titleMr: "डोके व पायांची संख्या शॉर्टकट (Heads & Legs Trick): प्राण्यांच्या समूहात एकूण डोकी H व एकूण पाय L दिल्यास: ४ पायांच्या प्राण्यांची संख्या (बकऱ्या/गाय) = (L / २) - H; २ पायांच्या प्राण्यांची संख्या (कोंबड्या/बदके) = H - (४ पायांचे प्राणी); पर्यायावरून थेट पडताळणी पद्धत",
                                            titleEn: "Heads & Legs Shortcut Rule: For a farm with total heads H and total legs L: Number of 4-legged animals = (Total Legs / 2) - Total Heads; Number of 2-legged animals = Total Heads - 4-legged animals",
                                            chips: ["डोके व पाय शॉर्टकट सूत्र", "४ पायांचे प्राणी = (L/२) - H", "कोंबड्या व बकऱ्या गणित"]
                                        }
                                    ],
                                    sources: [
                                        { book: "बालभारती गणित भाग १", standard: "इयत्ता १० वी", chapterRef: "प्रकरण १: दोन चलांतील रेषीय समीकरणे" },
                                        { book: "मॅजिक ऑफ मॅथ्स", standard: "नितीन महाले", chapterRef: "समीकरणे व शाब्दिक गणिते" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mstat_c06",
                            code: "MS06",
                            section: "B",
                            slug: "advanced-profit-loss-discount-and-installment-schemes",
                            nameMr: "प्रगत नफा-तोटा, सूट आणि हप्ते पद्धती (Installments / EMI)",
                            nameEn: "Advanced Commercial Math: Successive Discounts, Dishonest Weights & Installments",
                            name: "प्रगत नफा-तोटा व हप्ते (Advanced Profit, Loss & EMI)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mstat_c06",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mstat_c05",
                            nextChapterId: "gb_mstat_c07",
                            metaDescriptionMr: "मुख्य परीक्षा पातळीवरील नफा-तोटा (समान विक्री किमतीवर व्यवहार), छापील किमतीवर सलग तीन सूट, खऱ्या व खोट्या वजनातील नफा, आणि सरळव्याज व चक्रवाढव्याज आधारित हप्ते पद्धती (Installments/EMI).",
                            metaDescriptionEn: "In-depth review of Advanced Commercial Mathematics: Complex Profit & Loss at identical Selling Prices, Triple successive discounts, Advanced false balance fraud, and Equated Monthly Installment (EMI) formulations in SI & CI.",
                            notesJsonPath: "/data/notes/group_b/mains/statistics/c06_advanced_profit_installments.json",
                            quizTag: "gb_mstat_advanced_profit_01",
                            tags: ["Advanced Arithmetic", "Advanced Profit Loss", "Successive Discounts", "EMI Installment Calculations", "High-Weightage"],
                            searchKeywords: ["advanced profit loss questions mpsc mains", "installment schemes simple compound interest emi formula", "dishonest shopkeeper goods bought and sold using false weights", "triple successive discount equivalent discount", "प्रगत नफा तोटा मुख्य परीक्षा", "हप्ते पद्धती EMI सूत्र", "सलग तीन सूट", "खोटे वजन नफा गणित"]
                        },
                        {
                            id: "gb_mstat_c07",
                            code: "MS07",
                            section: "B",
                            slug: "advanced-time-work-wages-and-pipes",
                            nameMr: "प्रगत काम-काळ: कार्यक्षमता गुणोत्तर, एकांतर दिवस (Alternate Days) व नळ-टाकी",
                            nameEn: "Advanced Time & Work: Alternate Days, Negative Work & Efficiency Ratios",
                            name: "प्रगत काम-काळ व टाकी (Advanced Time & Work)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mstat_c07",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mstat_c06",
                            nextChapterId: "gb_mstat_c08",
                            metaDescriptionMr: "कार्यक्षमतेचे गुणोत्तर (A हा B पेक्षा ६०% अधिक कार्यक्षम), एकांतर दिवस काम करणे (Alternate Days Work), काम संपण्याच्या x दिवस आधी सोडून जाणे, आणि नळ व टाकीतील एकाआड एक भरणारे नळ.",
                            metaDescriptionEn: "In-depth review of Advanced Work & Time: Relative Efficiency multiples (A is 60% more efficient than B), Alternate days cycle working, Workers leaving x days before scheduled finish, and Alternating Inlet/Outlet pipes.",
                            notesJsonPath: "/data/notes/group_b/mains/statistics/c07_advanced_time_work.json",
                            quizTag: "gb_mstat_advanced_work_01",
                            tags: ["Advanced Arithmetic", "Time and Work Advanced", "Alternate Days Work", "Efficiency Multiples", "Leaving Before Completion", "High-Weightage"],
                            searchKeywords: ["time and work alternate days problems shortcuts", "a is 60 percent more efficient than b time taken", "worker leaves x days before work completion", "pipes and cisterns opened alternately empty tank", "एकांतर दिवस काम Alternate Days", "कार्यक्षमता ६० टक्के जास्त", "काम संपण्याआधी सोडून जाणे", "नळ व टाकी प्रगत गणिते"]
                        },
                        {
                            id: "gb_mstat_c08",
                            code: "MS08",
                            section: "B",
                            slug: "advanced-speed-distance-trains-races-and-circular-motion",
                            nameMr: "प्रगत वेग-अंतर: रेल्वे क्रॉसिंग, धावण्याच्या शर्यती (Races) आणि वर्तुळाकार गती",
                            nameEn: "Advanced Speed & Distance: Train Crossing Times, Linear Races & Circular Tracks",
                            name: "प्रगत वेग, शर्यती व वर्तुळाकार गती (Races & Circular Motion)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mstat_c08",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mstat_c07",
                            nextChapterId: "gb_mstat_c09",
                            metaDescriptionMr: "दोन गाड्या एकमेकांना भेटल्यानंतर गंतव्य स्थानी पोहोचण्याचा वेळ [S1/S2 = √(t2/t1)], धावण्याच्या शर्यती (Races - A ने B ला १० मीटरची आघाडी दिली), आणि वर्तुळाकार ट्रॅकवर धावणे.",
                            metaDescriptionEn: "In-depth review of Advanced Speed & Motion: Post-meeting arrival speed formula [S1/S2 = √(t2/t1)], Linear Race handicap problems (Start of distance vs start of time, dead heat), and Circular motion lap crossings.",
                            notesJsonPath: "/data/notes/group_b/mains/statistics/c08_advanced_speed_races.json",
                            quizTag: "gb_mstat_advanced_speed_01",
                            tags: ["Advanced Arithmetic", "Speed Distance Advanced", "Train Meeting Formula S1 S2", "Races and Games of Skill", "Circular Motion Laps", "High-Weightage"],
                            searchKeywords: ["two trains cross each other speed formula s1 by s2 sqrt t2 by t1", "races and games of skill 100m race head start beat by", "circular track meeting at starting point again", "average speed variable distances", "दोन गाड्या भेटल्यानंतरचा वेग सूत्र", "धावण्याच्या शर्यती Races गणिते", "आघाडी देणे Start", "वर्तुळाकार ट्रॅक फेरी"]
                        },


                        // =========================================================================
                        // विभाग C — प्रगत भूमिती, क्षेत्रफळ व घनफळ (Advanced Mensuration)
                        // =========================================================================
                        {
                            id: "gb_mstat_c09",
                            code: "MS09",
                            section: "C",
                            slug: "mensuration-2d-triangles-quadrilaterals-and-circles",
                            nameMr: "द्विमितीय भूमिती (2D Mensuration): त्रिकोण, चौकोन, वर्तुळ आणि क्षेत्रफळ",
                            nameEn: "2D Mensuration: Triangles, Quadrilaterals, Polygons & Circles (Perimeter & Area)",
                            name: "द्विमितीय क्षेत्रफळ व परिमिती (2D Mensuration)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mstat_c09",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mstat_c08",
                            nextChapterId: "gb_mstat_c10",
                            metaDescriptionMr: "त्रिकोणाचे क्षेत्रफळ (हेरोनचे सूत्र s(s-a)(s-b)(s-c), समभुज त्रिकोण (√3/4)a²), चौकोन (आयत, चौरस, समांतरभुज, समभुज, समलंब), वर्तुळ व वर्तुळपाकळीचे क्षेत्रफळ, आणि बागेभोवती रस्ता.",
                            metaDescriptionEn: "In-depth review of 2D Mensuration: Heron's formula, Equilateral triangle area [(√3/4)*a^2], Quadrilaterals (Parallelogram, Rhombus diagonals, Trapezium), Circles & Sectors, and Pathways around rectangular lawns.",
                            notesJsonPath: "/data/notes/group_b/mains/statistics/c09_mensuration_2d.json",
                            quizTag: "gb_mstat_2d_01",
                            tags: ["Mensuration", "2D Mensuration", "Herons Formula", "Equilateral Triangle", "Rhombus Trapezium Area", "Circle Sector Area", "High-Weightage"],
                            searchKeywords: ["2d mensuration formulas area perimeter", "herons formula for triangle area s s minus a", "equilateral triangle area formula root 3 by 4 a square", "area of rhombus half d1 d2 trapezium", "area of pathway running inside outside rectangular park", "द्विमितीय भूमिती क्षेत्रफळ व परिमिती", "हेरोनचे सूत्र", "समभुज त्रिकोण क्षेत्रफळ", "समभुज चौकोन कर्ण १/२ d1 d2", "वर्तुळपाकळी क्षेत्रफळ"]
                        },
                        {
                            id: "gb_mstat_c10",
                            code: "MS10",
                            section: "C",
                            slug: "mensuration-3d-cubes-cylinders-cones-and-spheres",
                            nameMr: "त्रिमितीय भूमिती (3D Mensuration): घन, वृत्तचिती, शंकू आणि गोल (पृष्ठफळ व घनफळ)",
                            nameEn: "3D Mensuration: Cubes, Cuboids, Cylinders, Cones & Spheres (Surface Area & Volume)",
                            name: "त्रिमितीय घनफळ व पृष्ठफळ (3D Mensuration)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mstat_c10",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mstat_c09",
                            nextChapterId: "gb_mstat_c11",
                            metaDescriptionMr: "घन व इष्टिकाचिती (Volume lbh, कर्ण √(l²+b²+h²)), वृत्तचिती / दंडगोल (Cylinder πr²h), शंकू (Cone ⅓πr²h, तिरकस उंची l = √(r²+h²)), गोल (Sphere ⁴/₃πr³) व अर्धगोल, आणि धातू वितळवून नवीन वस्तू बनवणे.",
                            metaDescriptionEn: "In-depth review of 3D Mensuration: Cuboid (Volume, Total Surface Area, Longest diagonal), Cylinder (Curved & Total surface area, Volume), Cone (Slant height, Volume 1/3 pi r^2 h), Sphere & Hemisphere, and Melting/Recasting metallic solids.",
                            notesJsonPath: "/data/notes/group_b/mains/statistics/c10_mensuration_3d.json",
                            quizTag: "gb_mstat_3d_01",
                            tags: ["Mensuration", "3D Mensuration", "Cylinder Cone Sphere Volume", "Longest Diagonal Cuboid", "Melting and Recasting", "High-Weightage"],
                            searchKeywords: ["3d mensuration volume and surface area formulas", "cuboid longest rod diagonal root l2 b2 h2", "cylinder curved surface area volume pi r2 h", "cone slant height curved surface area pi r l", "sphere hemisphere volume 4 by 3 pi r cube", "melting metal sphere recasting small cones count", "त्रिमितीय घनफळ व पृष्ठफळ सूत्रे", "इष्टिकाचिती सर्वात लांब काठी", "दंडगोल वृत्तचिती", "शंकू तिरकस उंची", "गोल व अर्धगोल घनफळ", "धातू वितळवून गोळे बनवणे"]
                        },


                        // =========================================================================
                        // विभाग D — प्रगत सांख्यिकी विश्लेषण व मास्टर रिव्हिजन (Advanced Stats & Strategy)
                        // =========================================================================
                        {
                            id: "gb_mstat_c11",
                            code: "MS11",
                            section: "D",
                            slug: "advanced-data-interpretation-caselets-and-radar-graphs",
                            nameMr: "प्रगत सामग्री विश्लेषण: केसलेट्स (परिच्छेद DI) आणि रडार/मिश्र आलेख",
                            nameEn: "Advanced Data Interpretation: Paragraph Caselets, Radar Charts & Mixed Infographics",
                            name: "प्रगत सामग्री विश्लेषण (Advanced Caselet DI)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mstat_c11",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mstat_c10",
                            nextChapterId: "gb_mstat_c12",
                            metaDescriptionMr: "केसलेट्स DI (परिच्छेद वाचून तक्ता बनवणे), मिश्र आलेख (Pie Chart + Table), गहाळ माहिती विश्लेषण (Missing Data DI), आणि मुख्य परीक्षेतील उच्चस्तरीय आकडेमोड तंत्र.",
                            metaDescriptionEn: "In-depth review of Advanced DI: Paragraph Caselets (Translating text to tabular data matrices), Dual Infographics (Pie Chart + Table combinations), Missing Data DI, and High-precision arithmetic heuristics.",
                            notesJsonPath: "/data/notes/group_b/mains/statistics/c11_advanced_di.json",
                            quizTag: "gb_mstat_advanced_di_01",
                            tags: ["Data Interpretation", "Caselet DI", "Mixed Graphs Pie Table", "Missing Data DI", "High-Weightage"],
                            searchKeywords: ["caselet data interpretation paragraph based questions", "mixed di pie chart and table combination", "missing data interpretation table mpsc mains", "advanced di calculation techniques", "केसलेट DI परिच्छेद विश्लेषण", "मिश्र आलेख पाय चार्ट आणि तक्ता", "गहाळ माहिती शोधणे Missing DI"]
                        },
                        {
                            id: "gb_mstat_c12",
                            code: "MS12",
                            section: "D",
                            slug: "mains-quant-stats-master-revision-formula-sheet-pyq",
                            nameMr: "अंकगणित-सांख्यिकी मास्टर रिव्हिजन: सर्व सूत्रांचा तक्ता व १० वर्षांचे PYQ विश्लेषण",
                            nameEn: "Quant & Stats Master Revision: Master Formula Concordance & 10-Year PYQ Insights",
                            name: "अंकगणित व सांख्यिकी मास्टर रिव्हिजन (Master Formula Sheet & PYQs)",
                            category: "REVISION",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mstat_c12",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mstat_c11",
                            nextChapterId: null,
                            metaDescriptionMr: "सांख्यिकी व अंकगणिताचा संपूर्ण फॉर्म्युला चार्ट (Mean, Median, Mode, SD, Variance, Mensuration 2D/3D), मुख्य परीक्षेतील १० प्रश्नांचे नियोजन (१२ मिनिटे), आणि १० वर्षांचे PYQ विश्लेषण.",
                            metaDescriptionEn: "Master consolidation module: Complete formula cheat-sheet (Mean, Median, Mode, SD, Variance, 2D/3D Mensuration), Speed calculation heuristics, 12-minute exam allocation strategy, and 10-year MPSC Mains trend analysis.",
                            notesJsonPath: "/data/notes/group_b/mains/statistics/c12_master_revision.json",
                            quizTag: "gb_mstat_revision_01",
                            tags: ["Revision", "Formula Sheet Statistics", "Mean Median Mode Formulas", "Standard Deviation Variance", "Mains Paper 2 Strategy", "High-Weightage"],
                            searchKeywords: ["mpsc mains paper 2 statistics arithmetic formula sheet", "mean median mode sd variance cheat sheet", "mensuration all formulas 2d 3d pdf", "mpsc group b mains paper 2 quant stats pyq analysis", "सांख्यिकी सूत्र तक्ता", "मध्य मध्यक बहुलक प्रमाण विचलन सूत्रे", "क्षेत्रफळ व घनफळ सूत्र चार्ट", "१० वर्षांचे PYQ विश्लेषण"]
                        }
                    ]
                },


                {
                    id: "gb_mains_current_affairs",
                    code: "M_CA",
                    slug: "current-affairs-mains-administrative-focus",
                    nameMr: "चालू घडामोडी (राष्ट्रीय, आंतरराष्ट्रीय व महाराष्ट्र - मुख्य परीक्षा विशेष)",
                    nameEn: "Current Affairs (National, International & Maharashtra - Mains Analytical Focus)",
                    name: "चालू घडामोडी (Mains Current Affairs)",
                    officialScope: "High-level Analytical Current Affairs covering National Policies, Administrative Reforms, Maharashtra Industrial & Social Policies, Geopolitical Shifts, Digital Governance (DPDP Act, AI), Climate Conventions, and Judicial Pronouncements for MPSC Group B Mains Paper 2",
                    version: "1.0",
                    verifiedDate: "2026-10-28",
                    notesJsonBaseDir: "/data/notes/group_b/mains/current_affairs/",


                    // UI Theme & Theming Metadata
                    theme: {
                        primaryColor: "#be123c",        // Crimson / Strategic Policy Theme
                        bgColor: "#fff1f2",
                        iconClass: "ri-global-line"
                    },


                    // अभ्यास व डॅशबोर्ड ॲनालिटिक्स मेट्रिक्स
                    metrics: {
                        totalChapters: 12,
                        totalEstimatedHours: 42,
                        avgQuestionsInMains: 10,
                        targetMarks: 20,
                        weightageRange: "10 Questions / 20 Marks"
                    },


                    // विषय पातळीवरील स्मार्ट टॅग्ज
                    subjectTags: [
                        "Core-Mains",
                        "Mains-Paper-2",
                        "Policy-Oriented",
                        "Analytical-Current-Affairs",
                        "High-Weightage",
                        "Governance-Focused"
                    ],


                    filterCategory: "GS",
                    searchKeywords: [
                        "mpsc group b mains current affairs syllabus", "national policies dpdp act 2023 ai governance",
                        "maharashtra ev policy industrial corridors", "green hydrogen mission renewable targets",
                        "geopolitics imec corridor red sea crisis", "judicial pronouncements electoral bonds sc verdict",
                        "चालू घडामोडी मुख्य परीक्षा", "महाराष्ट्र औद्योगिक धोरण", "DPDP डेटा संरक्षण कायदा २०२३", "हरित हायड्रोजन मोहीम", "निवडणूक रोखे सर्वोच्च न्यायालय निकाल", "भू-राजकीय संघर्ष"
                    ],


                    referenceSources: [
                        {
                            name: "MPSC Non-Gazetted Group B Combined Mains Syllabus",
                            role: "अधिकृत परीक्षा-संदर्भ",
                            url: "https://mpsc.gov.in"
                        },
                        {
                            name: "प्रेस इन्फॉर्मेशन ब्युरो (PIB India)",
                            role: "केंद्रीय मंत्रिमंडळाचे निर्णय, धोरणे व अधिकृत आकडेवारी"
                        },
                        {
                            name: "लोकराज्य मासिक (माहिती व जनसंपर्क महासंचालनालय, महाराष्ट्र शासन)",
                            role: "महाराष्ट्र शासनाचे अधिकृत धोरणात्मक निर्णय व योजना"
                        },
                        {
                            name: "योजना व कुरुक्षेत्र मासिके (Yojana & Kurukshetra)",
                            role: "विकास, कृषी व प्रशासकीय धोरणांचे सखोल विश्लेषण"
                        },
                        {
                            name: "पृथ्वी परिक्रमा / सिम्पलीफाइड चालू घडामोडी - मुख्य परीक्षा विशेषांक",
                            role: "विश्लेषणात्मक संदर्भ व MPSC मुख्य परीक्षा कल"
                        }
                    ],


                    chapters: [
                        // =========================================================================
                        // विभाग A — राष्ट्रीय धोरणे, डिजिटल प्रशासन व कायदेशीर सुधारणा
                        // =========================================================================
                        {
                            id: "gb_mca_c01",
                            code: "MC01",
                            section: "A",
                            slug: "national-governance-policies-and-administrative-reforms",
                            nameMr: "राष्ट्रीय विकास धोरणे, डिजिटल प्रशासन आणि DPDP कायदा २०२३",
                            nameEn: "National Governance Policies, Digital Public Infrastructure & DPDP Act 2023",
                            name: "राष्ट्रीय धोरणे व डिजिटल प्रशासन (National Policies & DPDP Act)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mca_c01",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: null,
                            nextChapterId: "gb_mca_c02",
                            metaDescriptionMr: "डिजिटल वैयक्तिक डेटा संरक्षण कायदा २०२३ (DPDP Act - डेटा फिडुशिअरी, दंड २५० कोटी रु.), इंडिया स्टॅक (DPI), राष्ट्रीय क्वांटम मोहीम, इंडिया AI मिशन, आणि मिशन कर्मयोगी.",
                            metaDescriptionEn: "In-depth review of National Policies: Digital Personal Data Protection Act 2023 (Data Fiduciary, penalties up to Rs 250 Cr), India Stack (Digital Public Infrastructure), National Quantum Mission, IndiaAI Mission, and Mission Karmayogi.",
                            notesJsonPath: "/data/notes/group_b/mains/current_affairs/c01_national_policies.json",
                            quizTag: "gb_mca_policies_01",
                            tags: ["Mains Current Affairs", "DPDP Act 2023", "Digital Public Infrastructure", "National Quantum Mission", "Mission Karmayogi", "IndiaAI", "High-Weightage"],
                            searchKeywords: ["digital personal data protection act dpdp 2023 provisions penalty", "data fiduciary data principal consent", "digital public infrastructure dpi india stack upi", "national quantum mission indiaai mission", "mission karmayogi civil services capacity building", "DPDP कायदा २०२३", "डिजिटल वैयक्तिक डेटा संरक्षण", "डेटा फिडुशिअरी", "राष्ट्रीय क्वांटम मोहीम", "मिशन कर्मयोगी"],
                            topics: [
                                {
                                    id: "top_gb_mc01_01",
                                    nameMr: "डेटा संरक्षण कायदा, डिजिटल पायाभूत सुविधा, AI परिसंस्था आणि नागरी सेवा सुधारणा",
                                    nameEn: "Data Privacy Architecture, DPI Framework, Frontier AI Initiatives & Civil Service Reforms",
                                    subtopics: [
                                        {
                                            id: "st_gb_mc01_01_01",
                                            titleMr: "डिजिटल वैयक्तिक डेटा संरक्षण कायदा २०२३ (DPDP Act 2023): संविधानातील कलम २१ (गोपनीयतेचा हक्क - पुट्टास्वामी निकाल २०१७) ची अंमलबजावणी; १) डेटा प्रिन्सिपल (नागरिक) व डेटा फिडुशिअरी (डेटा वापरणारी संस्था); २) संमती (Consent) अनिवार्य; ३) बालकांच्या डेटासाठी पालकांची संमती; ४) भारतीय डेटा संरक्षण मंडळ (DPBI) स्थापना; ५) डेटा उल्लंघनावर २५० कोटी रुपयांपर्यंत दंड",
                                            titleEn: "DPDP Act 2023: Enforces Puttaswamy Right to Privacy verdict (Art 21); Defines Data Principal & Data Fiduciary; Explicit consent architecture; Parental consent for minors; Data Protection Board of India; Non-compliance penalties up to Rs 250 Cr",
                                            chips: ["DPDP कायदा २०२३", "पुट्टास्वामी निकाल (कलम २१)", "डेटा प्रिन्सिपल व फिडुशिअरी", "२५० कोटी रु. दंड", "डेटा संरक्षण मंडळ"]
                                        },
                                        {
                                            id: "st_gb_mc01_01_02",
                                            titleMr: "डिजिटल पब्लिक इन्फ्रास्ट्रक्चर (DPI - India Stack): आधार (ओळख), UPI (पेमेंट्स), आणि डिजिलॉकर (कागदपत्रे); जागतिक स्तरावर G20 द्वारे भारताच्या DPI मॉडेलचा स्वीकार; ONDC (Open Network for Digital Commerce - ई-कॉमर्सचे लोकशाहीकरण)",
                                            titleEn: "Digital Public Infrastructure (India Stack): Unified multi-layer architecture (Aadhaar, UPI, DigiLocker); Endorsed globally at G20; ONDC democratizing digital retail commerce",
                                            chips: ["DPI इंडिया स्टॅक", "UPI जागतिकीकरण", "डिजिलॉकर", "ONDC ई-कॉमर्स"]
                                        },
                                        {
                                            id: "st_gb_mc01_01_03",
                                            titleMr: "राष्ट्रीय क्वांटम मोहीम व इंडिया AI मिशन: १) राष्ट्रीय क्वांटम मोहीम (NQM - ६,००३ कोटी रु. मंजूर - क्वांटम कॉम्प्युटिंग, संप्रेषण व सेन्सर्स विकास - भारत जगातील ७ वा देश); २) इंडिया AI मोहीम (१०,३७० कोटी रु. - GPU संगणकीय पायाभूत सुविधा, कृत्रिम बुद्धिमत्ता स्टार्टअप्सना प्रोत्साहन)",
                                            titleEn: "National Quantum Mission (Rs 6,003 Cr, quantum computing development) & IndiaAI Mission (Rs 10,370 Cr for sovereign compute capacity, GPU clusters, and indigenous LLM models)",
                                            chips: ["राष्ट्रीय क्वांटम मोहीम NQM", "क्वांटम कॉम्प्युटिंग", "इंडिया AI मिशन", "GPU संगणकीय पायाभूत सुविधा"]
                                        },
                                        {
                                            id: "st_gb_mc01_01_04",
                                            titleMr: "मिशन कर्मयोगी (National Programme for Civil Services Capacity Building - NPCSCB): नागरी सेवकांचे कार्यक्षमतेवर आधारित सक्षमीकरण; 'नियम-आधारित' ऐवजी 'भूमिका-आधारित' (Rule to Role) प्रशासनाकडे संक्रमण; iGOT कर्मयोगी डिजिटल प्लॅटफॉर्म; क्षमता निर्माण आयोग (CBC)",
                                            titleEn: "Mission Karmayogi: Shift from 'Rule-based' to 'Role-based' civil service governance; iGOT Karmayogi digital training portal; Capacity Building Commission (CBC)",
                                            chips: ["मिशन कर्मयोगी", "Rule to Role संक्रमण", "iGOT प्लॅटफॉर्म", "क्षमता निर्माण आयोग"]
                                        }
                                    ],
                                    sources: [
                                        { book: "प्रेस इन्फॉर्मेशन ब्युरो (PIB)", standard: "इलेक्ट्रॉनिक्स व माहिती तंत्रज्ञान मंत्रालय", chapterRef: "DPDP कायदा व AI मिशन अहवाल" },
                                        { book: "योजना मासिक", standard: "प्रशासन विशेषांक", chapterRef: "डिजिटल इंडिया व प्रशासकीय सुधारणा" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mca_c02",
                            code: "MC02",
                            section: "A",
                            slug: "constitutional-benches-and-landmark-judicial-pronouncements",
                            nameMr: "सर्वोच्च न्यायालयाचे महत्त्वाचे घटनापीठ निकाल व कायदेशीर प्रवाह",
                            nameEn: "Landmark Supreme Court Verdicts, Constitutional Benches & Legal Precedents",
                            name: "सर्वोच्च न्यायालयाचे निकाल (Landmark Judicial Verdicts)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mca_c02",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mca_c01",
                            nextChapterId: "gb_mca_c03",
                            metaDescriptionMr: "निवडणूक रोखे योजना रद्द (Electoral Bonds Case - कलम १९(१)(a) माहितीचा हक्क), कलम ३७० रद्दबातल ठरवण्यावर शिक्कामोर्तब, राज्यपालांचे विधेयक रोखण्याचे अधिकार (अनुच्छेद २००), आणि महाराष्ट्र सत्तासंघर्ष निकाल.",
                            metaDescriptionEn: "In-depth review of Landmark SC Verdicts: Electoral Bonds Scheme struck down as unconstitutional under Art 19(1)(a), Abrogation of Article 370 upheld, Governor's assent limits under Art 200, and Maharashtra Political Crisis verdict on Speaker powers.",
                            notesJsonPath: "/data/notes/group_b/mains/current_affairs/c02_landmark_verdicts.json",
                            quizTag: "gb_mca_verdicts_01",
                            tags: ["Mains Current Affairs", "Supreme Court Verdicts", "Electoral Bonds Unconstitutional", "Article 370 Abrogation Upheld", "Maharashtra Political Case", "High-Weightage"],
                            searchKeywords: ["supreme court electoral bonds verdict association for democratic reforms", "article 370 abrogation upheld constitution bench", "article 200 governor assent to bills supreme court ruling", "maharashtra political crisis subhash desai vs governor", "same sex marriage supreme court verdict supriyo", "निवडणूक रोखे योजना रद्द निकाल", "कलम ३७० निकाल", "कलम २०० राज्यपालांचे अधिकार निकाल", "महाराष्ट्र सत्तासंघर्ष निकाल सर्वोच्च न्यायालय"],
                            topics: [
                                {
                                    id: "top_gb_mc02_01",
                                    nameMr: "निवडणूक रोखे बंदी निकाल, ३७० कलम प्रमाणीकरण आणि संघराज्यीय न्यायनिर्णय",
                                    nameEn: "Electoral Transparency Jurisprudence, Art 370 Review & Federal Governor Limits",
                                    subtopics: [
                                        {
                                            id: "st_gb_mc02_01_01",
                                            titleMr: "निवडणूक रोखे योजना असंवैधानिक निकाल (Electoral Bonds Case - फेब्रुवारी २०२४): ५ न्यायाधीशांच्या घटनापीठाचा एकमुखी निकाल; निवडणूक रोखे योजना ही संविधानाच्या कलम १९(१)(a) मधील मतदारांच्या 'माहिती मिळवण्याच्या मूलभूत हक्काचा' भंग करते; SBI ला सर्व खरेदी व रोखीकरणाचा डेटा निवडणूक आयोगाला देण्याचे आदेश; राजकीय निधीमध्ये पारदर्शकता अनिवार्य",
                                            titleEn: "Electoral Bonds Verdict (Feb 2024): 5-judge Constitution Bench struck down 2018 scheme as unconstitutional; Violates voters' Right to Information under Art 19(1)(a); Directed SBI to disclose all donor/recipient data",
                                            chips: ["निवडणूक रोखे योजना रद्द", "कलम १९(१)(a) माहितीचा हक्क", "५ न्यायाधीशांचे घटनापीठ", "SBI डेटा सार्वजनिक"]
                                        },
                                        {
                                            id: "st_gb_mc02_01_02",
                                            titleMr: "कलम ३७० रद्दबातल ठरवण्यावर सर्वोच्च न्यायालयाची मोहोर (डिसेंबर २०२३): ५ न्यायाधीशांचे घटनापीठ (सरन्यायाधीश डी. वाय. चंद्रचूड अध्यक्ष); राष्ट्रपतींचा ऑगस्ट २०१९ चा निर्णय वैध; जम्मू-काश्मीरचे सार्वभौमत्व विलीन झाल्याने संपुष्टात आले होते; ३० सप्टेंबर २०२४ पूर्वी जम्मू-काश्मीरमध्ये विधानसभा निवडणुका घेण्याचे व राज्याचा दर्जा लवकरात लवकर पुनर्स्थापित करण्याचे निर्देश",
                                            titleEn: "Article 370 Abrogation Upheld (Dec 2023): 5-judge bench unanimously validated August 2019 presidential order; J&K possessed no internal sovereignty post-accession; Directed EC to hold assembly polls by Sept 2024",
                                            chips: ["कलम ३७० निकाल वैध", "५ न्यायाधीशांचे घटनापीठ", "जम्मू-काश्मीर विधानसभा निवडणुका", "राज्याचा दर्जा पुनर्स्थापना"]
                                        },
                                        {
                                            id: "st_gb_mc02_01_03",
                                            titleMr: "राज्यपालांच्या अधिकारांवर सर्वोच्च न्यायालयाचे ताशेरे (कलम २००): पंजाब व तामिळनाडू खटले; विधिमंडळाने मंजूर केलेली विधेयके राज्यपाल अनिश्चित काळासाठी रोखून (Pocket Veto) धरू शकत नाहीत; जर राज्यपालांनी विधेयक पुनर्विचारासाठी परत पाठवले आणि सभागृहाने ते पुन्हा मंजूर केले, तर राज्यपालांना संमती देणे अनिवार्य आहे",
                                            titleEn: "Judicial Limits on Governors (Art 200): Punjab & TN cases; Governors cannot sit on bills indefinitely; If legislature repasses returned bill, Governor MUST grant assent; Prevents misuse of pocket veto",
                                            chips: ["कलम २०० राज्यपालांचे अधिकार", "विधेयक रोखून ठेवण्यास मनाई", "पुन्हा मंजूर विधेयकाला संमती अनिवार्य"]
                                        },
                                        {
                                            id: "st_gb_mc02_01_04",
                                            titleMr: "महाराष्ट्र सत्तासंघर्ष निकाल (सुभाष देसाई विरुद्ध राज्यपाल / नबाम रेबिया संदर्भ): १० वे परिशिष्ट (पक्षांतर बंदी); विधानसभा अध्यक्षांचा निर्णय घेण्याचा अधिकार; राज्यपालांनी बहुमत चाचणी (Floor Test) बोलावण्याचा निर्णय बेकायदेशीर होता असा निकाल, मात्र तत्कालीन मुख्यमंत्र्यांनी राजीनामा दिल्यामुळे पूर्वीची स्थिती पूर्ववत करता येणार नाही हे स्पष्ट केले",
                                            titleEn: "Maharashtra Political Crisis Verdict: Constitution Bench evaluated 10th Schedule; Speaker's role; Ruled Governor's floor test call was illegal, but status quo ante could not be restored as CM had resigned voluntarily",
                                            chips: ["महाराष्ट्र सत्तासंघर्ष निकाल", "१० वे परिशिष्ट पक्षांतर बंदी", "विधानसभा अध्यक्ष अधिकार", "फ्लोअर टेस्ट बेकायदेशीर निकाल"]
                                        }
                                    ],
                                    sources: [
                                        { book: "द हिंदू / सुप्रीम कोर्ट केसेस (SCC)", standard: "कायदेशीर मासिक", chapterRef: "घटनापीठ निकाल २०२३-२४" },
                                        { book: "पृथ्वी परिक्रमा", standard: "चालू घडामोडी विशेषांक", chapterRef: "न्यायव्यवस्था व कायदे" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग B — महाराष्ट्र शासनाची धोरणे, अर्थव्यवस्था व पायाभूत कॉरिडॉर
                        // =========================================================================
                        {
                            id: "gb_mca_c03",
                            code: "MC03",
                            section: "B",
                            slug: "maharashtra-industrial-ev-and-infrastructure-policies",
                            nameMr: "महाराष्ट्राचे औद्योगिक धोरण, इलेक्ट्रिक वाहन (EV) धोरण आणि मेगा कॉरिडॉर",
                            nameEn: "Maharashtra Industrial Policy, EV Policy & Trans-State Logistics Corridors",
                            name: "महाराष्ट्र औद्योगिक व EV धोरण (Maharashtra Industrial & EV Policy)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mca_c03",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mca_c02",
                            nextChapterId: "gb_mca_c04",
                            metaDescriptionMr: "महाराष्ट्र इलेक्ट्रिक वाहन धोरण २०२१-२५, दावोस (WEF) गुंतवणूक करार, महाराष्ट्र लॉजिस्टिक्स धोरण २०२४, शक्तिपीठ महामार्ग (नागपूर-गोवा), आणि ग्रीन हायड्रोजन धोरण.",
                            metaDescriptionEn: "In-depth review of Maharashtra Industrial & Infrastructure Policies: EV Policy 2021-25 targets, Davos WEF investment pledges, Maharashtra Logistics Policy 2024, Shaktipeeth Expressway (Nagpur-Goa), and Green Hydrogen Policy.",
                            notesJsonPath: "/data/notes/group_b/mains/current_affairs/c03_mh_policies_corridors.json",
                            quizTag: "gb_mca_mh_policy_01",
                            tags: ["Maharashtra Focus", "EV Policy 2025", "Shaktipeeth Expressway", "Davos WEF MoUs", "Logistics Policy 2024", "High-Weightage"],
                            searchKeywords: ["maharashtra electric vehicle ev policy targets incentives", "shaktipeeth expressway nagpur to goa route districts", "maharashtra industrial policy davos wef investment mous", "maharashtra logistics policy 2024", "green hydrogen policy maharashtra", "महाराष्ट्र इलेक्ट्रिक वाहन धोरण EV", "शक्तिपीठ महामार्ग नागपूर ते गोवा", "दावोस गुंतवणूक करार", "महाराष्ट्र लॉजिस्टिक्स धोरण", "ग्रीन हायड्रोजन धोरण महाराष्ट्र"],
                            topics: [
                                {
                                    id: "top_gb_mc03_01",
                                    nameMr: "महाराष्ट्र ई-वाहन क्रांती, ग्रीन हायड्रोजन, दावोस गुंतवणूक आणि शक्तिपीठ एक्सप्रेसवे",
                                    nameEn: "EV Transition Blueprint, Green Hydrogen Mandate, Global Investments & Expressway Grids",
                                    subtopics: [
                                        {
                                            id: "st_gb_mc03_01_01",
                                            titleMr: "महाराष्ट्र इलेक्ट्रिक वाहन धोरण (EV Policy २०२१-२५): उद्दिष्ट: २०२५ पर्यंत नवीन वाहन नोंदणीमध्ये १०% वाटा इलेक्ट्रिक वाहनांचा असणे; सार्वजनिक वाहतुकीचे ५०% ई-वाहनांमध्ये रूपांतर; मुंबई, पुणे, नागपूर, नाशिक शहरांमध्ये जलद चार्जिंग स्टेशन जाळे; वाहन खरेदीवर सबसिडी व नोंदणी शुल्कात १००% सूट",
                                            titleEn: "Maharashtra EV Policy (2021-25): Target 10% share of EVs in new vehicle registrations by 2025; 25% fleet electrification in public transport; Subsidies, road tax and registration fee waivers",
                                            chips: ["महाराष्ट्र EV धोरण", "१०% ई-वाहन उद्दिष्ट २०२५", "नोंदणी शुल्कात सूट", "चार्जिंग स्टेशन्स"]
                                        },
                                        {
                                            id: "st_gb_mc03_01_02",
                                            titleMr: "महाराष्ट्र हरित हायड्रोजन धोरण (Green Hydrogen Policy): हरित हायड्रोजन धोरण जाहीर करणारे महाराष्ट्र हे देशातील पहिले राज्य; ५०० अब्ज रुपयांची गुंतवणूक आकर्षित करण्याचे उद्दिष्ट; विजेवर ट्रान्समिशन शुल्क सवलत व भांडवली अनुदान",
                                            titleEn: "Maharashtra Green Hydrogen Policy: First state to announce a comprehensive Green Hydrogen Policy; Aims to attract Rs 500 Billion investment with power transmission fee exemptions",
                                            chips: ["हरित हायड्रोजन धोरण महाराष्ट्र", "पहिले राज्य", "५०० अब्ज रु. गुंतवणूक", "पारreshaण शुल्क सूट"]
                                        },
                                        {
                                            id: "st_gb_mc03_01_03",
                                            titleMr: "शक्तिपीठ महामार्ग (नागपूर-गोवा द्रुतगती मार्ग): लांबी सुमारे ८०२ किमी; १२ जिल्ह्यांमधून जाणारा मार्ग; महाराष्ट्रातील प्रमुख धार्मिक तीर्थक्षेत्रे जोडणे (पवनार, माहूर, तुळजापूर, पंढरपूर, कोल्हापूर, औंध); विदर्भ, मराठवाडा आणि पश्चिम महाराष्ट्र थेट गोव्याशी जोडणारा कॉरिडॉर",
                                            titleEn: "Shaktipeeth Expressway (Nagpur to Goa): 802 km 6-lane access-controlled highway across 12 districts; Connects religious shrines (Mahur, Tuljapur, Pandharpur, Kolhapur) linking Vidarbha, Marathwada to Konkan/Goa",
                                            chips: ["शक्तिपीठ महामार्ग ८०२ किमी", "नागपूर ते गोवा", "१२ जिल्हे कव्हरेज", "तीर्थक्षेत्र कॉरिडॉर"]
                                        },
                                        {
                                            id: "st_gb_mc03_01_04",
                                            titleMr: "दावोस (World Economic Forum) गुंतवणूक करार आणि लॉजिस्टिक्स धोरण: दावोस येथे महाराष्ट्राने स्वाक्षरी केलेले ३ लाख कोटींहून अधिक रकमेचे सामंजस्य करार (MoUs - डेटा सेंटर्स, अक्षय ऊर्जा, ऑटोमोबाईल्स); महाराष्ट्र लॉजिस्टिक्स धोरण २०२४ (३०,००० कोटी गुंतवणूक व ५ लाख रोजगार निर्मितीचे लक्ष्य)",
                                            titleEn: "Davos WEF MoUs & Logistics Policy: Rs 3+ Lakh Crore investment pacts in Data Centers, Renewables, Auto; Maharashtra Logistics Policy 2024 (Targeting Rs 30,000 Cr investment & 5 Lakh jobs)",
                                            chips: ["दावोस WEF करार ३ लाख कोटी", "डेटा सेंटर हब", "महाराष्ट्र लॉजिस्टिक्स धोरण २०२४", "रोजगार निर्मिती"]
                                        }
                                    ],
                                    sources: [
                                        { book: "लोकराज्य मासिक", standard: "महाराष्ट्र शासन", chapterRef: "उद्योग, ऊर्जा व पायाभूत सुविधा विशेषांक" },
                                        { book: "महाराष्ट्राचा आर्थिक पाहणी अहवाल", standard: "नियोजन विभाग", chapterRef: "उद्योग व पायाभूत विकास" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mca_c04",
                            code: "MC04",
                            section: "B",
                            slug: "maharashtra-social-welfare-tribal-and-education-reforms",
                            nameMr: "महाराष्ट्रातील सामाजिक न्याय, आदिवासी कल्याण आणि शैक्षणिक सुधारणा",
                            nameEn: "Maharashtra Social Welfare, Tribal Empowerment & Educational Overhauls",
                            name: "सामाजिक न्याय व आदिवासी कल्याण (Social Welfare & Tribal Affairs)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mca_c04",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mca_c03",
                            nextChapterId: "gb_mca_c05",
                            metaDescriptionMr: "शबरी आदिवासी घरकुल योजना, पेसा (PESA) क्षेत्रातील अंमलबजावणी, डॉ. पंजाबराव देशमुख वसतिगृह निर्वाह भत्ता, छत्रपती शाहू महाराज संशोधन प्रशिक्षण संस्था (SARTHI), बार्टी (BARTI), आणि महाज्योती.",
                            metaDescriptionEn: "In-depth review of Maharashtra Social Justice: Shabari Adivasi Gharkul Yojana, PESA Act grassroots implementation, Panjabrao Deshmukh Hostel Allowance, and Autonomous Research Training Institutes (BARTI, SARTHI, MAHAJYOTI, TRTI, AMRIT).",
                            notesJsonPath: "/data/notes/group_b/mains/current_affairs/c04_mh_social_welfare.json",
                            quizTag: "gb_mca_mh_social_01",
                            tags: ["Maharashtra Focus", "Social Justice", "Tribal Welfare PESA", "BARTI SARTHI MAHAJYOTI", "Shabari Gharkul", "High-Weightage"],
                            searchKeywords: ["maharashtra social welfare schemes barti sarthi mahajyoti", "shabari adivasi gharkul yojana eligibility", "pesa act maharashtra tribal forest rights", "dr panjabrao deshmukh hostel allowance scheme", "barti ambedkar sarthi maratha mahajyoti obc trti", "बार्टी BARTI", "सारथी SARTHI", "महाज्योती MAHAJYOTI", "शबरी घरकुल योजना", "पेसा कायदा PESA महाराष्ट्र"],
                            topics: [
                                {
                                    id: "top_gb_mc04_01",
                                    nameMr: "स्वायत्त प्रशिक्षण संस्था, वंचित घटकांसाठीच्या योजना आणि पेसा अंमलबजावणी",
                                    nameEn: "Autonomous Training Institutes, Marginalized Welfare Schemes & PESA Enforcement",
                                    subtopics: [
                                        {
                                            id: "st_gb_mc04_01_01",
                                            titleMr: "महाराष्ट्रातील ५ स्वायत्त संशोधन व प्रशिक्षण संस्था (MPSC वारंवार विचारते): १) बार्टी (BARTI - डॉ. बाबासाहेब आंबेडकर संशोधन व प्रशिक्षण संस्था, पुणे - SC प्रवर्गासाठी); २) सारथी (SARTHI - छत्रपती शाहू महाराज संस्था, पुणे - मराठा, कुणबी समाजासाठी); ३) महाज्योती (MAHAJYOTI - नागपूर - OBC, VJNT, SBC प्रवर्गासाठी); ४) टीआरटीआय (TRTI - आदिवासी संशोधन व प्रशिक्षण संस्था, पुणे - ST प्रवर्गासाठी); ५) अमृत (AMRIT - खुल्या प्रवर्गातील आर्थिक दुर्बल घटकांसाठी EWS)",
                                            titleEn: "5 Autonomous Research & Training Institutes: BARTI (SC, Pune), SARTHI (Maratha/Kunbi, Pune), MAHAJYOTI (OBC/VJNT/SBC, Nagpur), TRTI (ST, Pune), and AMRIT (EWS open category)",
                                            chips: ["बार्टी BARTI (SC पुणे)", "सारथी SARTHI (मराठा पुणे)", "महाज्योती MAHAJYOTI (OBC नागपूर)", "TRTI (आदिवासी पुणे)", "अमृत AMRIT (EWS)"]
                                        },
                                        {
                                            id: "st_gb_mc04_01_02",
                                            titleMr: "आदिवासी विकास व पेसा (PESA) अंमलबजावणी: पेसा कायदा १९९६ (Panchayats Extension to Scheduled Areas) - महाराष्ट्रातील १३ जिल्ह्यांमधील अनुसूचित क्षेत्रांत अंमलबजावणी; ग्रामसभेला गौण वनोपजाचे (MFP) अधिकार; शबरी आदिवासी घरकुल योजना; बिरसा मुंडा कृषी क्रांती योजना (आदिवासी शेतकऱ्यांना सिंचनासाठी विहिरी व सोलर पंप)",
                                            titleEn: "Tribal Welfare & PESA Enforcement: PESA 1996 in 13 scheduled districts of MH; Gram Sabha authority over Minor Forest Produce (MFP); Shabari Adivasi Gharkul Housing; Birsa Munda Krishi Kranti Yojana (Irrigation wells & solar pumps)",
                                            chips: ["पेसा कायदा (PESA १३ जिल्हे)", "ग्रामसभा वनोपज अधिकार", "शबरी घरकुल योजना", "बिरसा मुंडा कृषी क्रांती"]
                                        },
                                        {
                                            id: "st_gb_mc04_01_03",
                                            titleMr: "उच्च शिक्षण व वसतिगृह योजना: डॉ. पंजाबराव देशमुख वसतिगृह निर्वाह भत्ता योजना (अल्पभूधारक शेतकरी व शेतमजुरांच्या पाल्यांना शहरात राहण्यासाठी वार्षिक ३०,००० ते ६०,००० रु. भत्ता); स्वाधार योजना (SC/ST विद्यार्थ्यांना शासकीय वसतिगृहात प्रवेश न मिळाल्यास भोजन व निवासासाठी थेट भत्ता)",
                                            titleEn: "Higher Education Housing Subsidies: Dr. Panjabrao Deshmukh Hostel Allowance (Rs 30k-60k/yr for children of marginal farmers); Swadhar Scheme (Direct cash grant for SC/ST students lacking government hostel seats)",
                                            chips: ["डॉ पंजाबराव देशमुख वसतिगृह भत्ता", "स्वाधार योजना", "थेट बँक हस्तांतरण"]
                                        }
                                    ],
                                    sources: [
                                        { book: "लोकराज्य मासिक", standard: "सामाजिक न्याय विभाग", chapterRef: "वंचित घटकांचे सक्षमीकरण" },
                                        { book: "आदिवासी विकास विभाग महाराष्ट्र शासन", standard: "वार्षिक अहवाल", chapterRef: "आदिवासी कल्याण व पेसा" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग C — आंतरराष्ट्रीय अर्थव्यवस्था, भू-राजकीय संघर्ष व व्यापार कॉरिडॉर
                        // =========================================================================
                        {
                            id: "gb_mca_c05",
                            code: "MC05",
                            section: "C",
                            slug: "global-geopolitics-trade-routes-and-choke-points",
                            nameMr: "जागतिक भू-राजकारण, सागरी व्यापारी मार्ग (Choke Points) व आंतरराष्ट्रीय संघर्ष",
                            nameEn: "Geopolitics, Maritime Choke Points, Regional Conflicts & Strategic Trade Corridors",
                            name: "भू-राजकारण व व्यापारी मार्ग (Geopolitics & Strategic Corridors)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mca_c05",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mca_c04",
                            nextChapterId: "gb_mca_c06",
                            metaDescriptionMr: "लाल समुद्र संकट (बाब-अल-मंदेब सामुद्रधुनी, हुथी बंडखोर), सुएझ कालवा विरुद्ध केप ऑफ गुड होप मार्ग, भारत-मध्य पूर्व-युरोप कॉरिडॉर (IMEC), चाबहार बंदर करार (भारत व इराण १० वर्षे करार), आणि मलाक्का सामुद्रधुनी.",
                            metaDescriptionEn: "In-depth review of Global Geopolitics: Red Sea crisis (Bab-el-Mandeb Strait, Houthi attacks), Suez Canal diversion to Cape of Good Hope, IMEC Corridor, Chabahar Port 10-year bilateral agreement with Iran, and Malacca Strait vulnerability.",
                            notesJsonPath: "/data/notes/group_b/mains/current_affairs/c05_geopolitics_trade.json",
                            quizTag: "gb_mca_geopolitics_01",
                            tags: ["Geopolitics", "Red Sea Crisis", "Chabahar Port Iran 10 Years", "IMEC Trade Corridor", "Maritime Choke Points", "High-Weightage"],
                            searchKeywords: ["red sea crisis bab el mandeb strait houthi attacks trade impact", "chabahar port shahid beheshti terminal india iran 10 year pact", "india middle east europe economic corridor imec", "maritime choke points straits hormuz malacca", "suez canal diversion cape of good hope shipping inflation", "लाल समुद्र संकट बाब अल मंदेब", "चाबहार बंदर भारत इराण करार", "IMEC व्यापारी कॉरिडॉर", "सुएझ कालवा", "सामुद्रधुनी होर्मुझ मलाक्का"],
                            topics: [
                                {
                                    id: "top_gb_mc05_01",
                                    nameMr: "सागरी कोंडी बिंदू, चाबहार बंदर धोरण, IMEC आणि भारताची पुरवठा साखळी",
                                    nameEn: "Maritime Choke Points, Chabahar Strategic Anchor, IMEC & Supply Chain Resilience",
                                    subtopics: [
                                        {
                                            id: "st_gb_mc05_01_01",
                                            titleMr: "लाल समुद्र संकट व जागतिक पुरवठा साखळी: बाब-अल-मंदेब (Bab-el-Mandeb) सामुद्रधुनीतून जाणारी मालवाहू जहाजे आणि येमेनच्या हुथी बंडखोरांचे हल्ले; सुएझ कालव्याऐवजी आफ्रिकेला वळसा घालून केप ऑफ गुड होप (Cape of Good Hope) मार्गे प्रवास (प्रवासाचे दिवस १०-१४ दिवसांनी वाढले, मालवाहतूक भाडे दुप्पट); भारताच्या निर्यातीवर परिणाम",
                                            titleEn: "Red Sea Crisis: Houthi attacks in Bab-el-Mandeb Strait targeting commercial shipping; Forced rerouting around Africa via Cape of Good Hope (+10-14 days transit, doubled freight rates); Impact on Indian exports",
                                            chips: ["लाल समुद्र संकट", "बाब-अल-मंदेब सामुद्रधुनी", "सुएझ कालवा विस्कळीत", "केप ऑफ गुड होप मार्ग", "महागाई परिणाम"]
                                        },
                                        {
                                            id: "st_gb_mc05_01_02",
                                            titleMr: "चाबहार बंदर ऐतिहासिक करार (मे २०२४): भारत आणि इराण यांच्यात 'शाहिद बेहेश्ती टर्मिनल' (Shahid Beheshti Terminal) च्या विकासासाठी १० वर्षांचा दीर्घकालीन द्विपक्षीय करार; पाकिस्तानला वळसा घालून अफगाणिस्तान व मध्य आशियाशी थेट व्यापार जोडणी; INSTC (International North-South Transport Corridor) चा मुख्य दुवा",
                                            titleEn: "Chabahar Port 10-Year Long-Term Pact (May 2024): India & Iran agreement for Shahid Beheshti Terminal operations; Strategic bypass of Pakistan for direct access to Afghanistan & Central Asia; Anchor of INSTC",
                                            chips: ["चाबहार बंदर (इराण)", "शाहिद बेहेश्ती टर्मिनल", "१० वर्षांचा दीर्घकालीन करार", "INSTC कॉरिडॉर", "पाकिस्तानला पर्याय"]
                                        },
                                        {
                                            id: "st_gb_mc05_01_03",
                                            titleMr: "भारत-मध्य पूर्व-युरोप आर्थिक कॉरिडॉर (IMEC): G20 शिखर परिषदेत घोषणा; चीनच्या BRI (Belt and Road Initiative) ला लोकशाही व शाश्वत पर्याय; घटक: पूर्व कॉरिडॉर (भारत ते अरेबियन गल्फ) व उत्तर कॉरिडॉर (गल्फ ते युरोप); रेल्वे, जहाज वाहतूक, वीज केबल्स व हायड्रोजन पाईपलाईनचे जाळे",
                                            titleEn: "India-Middle East-Europe Economic Corridor (IMEC): Announced at G20 New Delhi; Counter to China's BRI; Two segments: East Corridor (India to Arabian Gulf) & Northern Corridor (Gulf to Europe) via rail and maritime networks",
                                            chips: ["IMEC कॉरिडॉर", "चीनच्या BRI ला पर्याय", "भारत-गल्फ-युरोप", "रेल्वे व सागरी वाहतूक"]
                                        },
                                        {
                                            id: "st_gb_mc05_01_04",
                                            titleMr: "जागतिक सागरी कोंडी बिंदू (Maritime Choke Points): १) मलाक्का सामुद्रधुनी (Strait of Malacca - भारत व पूर्व आशिया), २) होर्मुझची सामुद्रधुनी (Strait of Hormuz - जगातील २०% खनिज तेल वाहतूक), ३) बोस्फोरस सामुद्रधुनी (काळा समुद्र), ४) पनामा कालवा (दुष्काळामुळे जलपातळी घसरल्याने वाहतूक संथ)",
                                            titleEn: "Global Choke Points: Strait of Malacca (Indo-Pacific lifeline), Strait of Hormuz (20% of world petroleum passage), Bosphorus Strait (Black Sea), Panama Canal (Severe drought restricting transit slots)",
                                            chips: ["होर्मुझची सामुद्रधुनी (खनिज तेल)", "मलाक्का सामुद्रधुनी", "पनामा कालवा दुष्काळ"]
                                        }
                                    ],
                                    sources: [
                                        { book: "परराष्ट्र मंत्रालय भारत सरकार (mea.gov.in)", standard: "अधिकृत अहवाल", chapterRef: "चाबहार व IMEC द्विपक्षीय करार" },
                                        { book: "द हिंदू / इंडियन एक्सप्रेस", standard: "आंतरराष्ट्रीय संबंध", chapterRef: "लाल समुद्र भू-राजकीय संकट" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mca_c06",
                            code: "MC06",
                            section: "C",
                            slug: "global-climate-finance-and-renewable-energy-transitions",
                            nameMr: "जागतिक हवामान वित्तपुरवठा, COP28/29 आणि भारताचे अक्षय ऊर्जा संक्रमण",
                            nameEn: "Global Climate Finance, COP Summits & India's Renewable Energy Transition",
                            name: "हवामान वित्त व अक्षय ऊर्जा (Climate Finance & Renewable Energy)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mca_c06",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mca_c05",
                            nextChapterId: "gb_mca_c07",
                            metaDescriptionMr: "ग्लोबल स्टॉकटेक (GST), राष्ट्रीय हरित हायड्रोजन मोहीम (National Green Hydrogen Mission - १९,७४४ कोटी रु.), PM सूर्यघर मोफत वीज योजना (१ कोटी घरे), आंतरराष्ट्रीय सौर आघाडी (ISA), आणि कार्बन सीमा कर (CBAM).",
                            metaDescriptionEn: "In-depth review of Climate Finance: Global Stocktake (GST at COP28), National Green Hydrogen Mission (Rs 19,744 Cr, 5 MMT target by 2030), PM Surya Ghar Muft Bijli Yojana (1 Crore households, 300 units free), International Solar Alliance (ISA), and EU's Carbon Border Adjustment Mechanism (CBAM).",
                            notesJsonPath: "/data/notes/group_b/mains/current_affairs/c06_climate_finance_renewables.json",
                            quizTag: "gb_mca_climate_01",
                            tags: ["Environment", "Climate Finance", "National Green Hydrogen Mission", "PM Surya Ghar 300 Units", "ISA Solar Alliance", "CBAM Carbon Tax", "High-Weightage"],
                            searchKeywords: ["cop28 global stocktake uae consensus fossil fuels", "national green hydrogen mission 19744 cr sitharaman", "pm surya ghar muft bijli yojana 1 crore rooftop solar", "international solar alliance isa hq gurugram", "eu carbon border adjustment mechanism cbam impact india", "हवामान वित्तपुरवठा", "राष्ट्रीय हरित हायड्रोजन मोहीम", "PM सूर्यघर मोफत वीज योजना", "आंतरराष्ट्रीय सौर आघाडी ISA", "CBAM कार्बन टॅक्स"],
                            topics: [
                                {
                                    id: "top_gb_mc06_01",
                                    nameMr: "हरित हायड्रोजन उद्दिष्टे, सौर ऊर्जा छप्पर योजना, आंतरराष्ट्रीय सौर आघाडी आणि CBAM",
                                    nameEn: "Hydrogen Energy Metrics, Rooftop Solar Decentralization, ISA & Carbon Border Tariffs",
                                    subtopics: [
                                        {
                                            id: "st_gb_mc06_01_01",
                                            titleMr: "राष्ट्रीय हरित हायड्रोजन मोहीम (National Green Hydrogen Mission): केंद्रीय मंत्रिमंडळाची मंजुरी; एकूण परिव्यय १९,७४४ कोटी रु.; २०३० पर्यंतची प्रमुख उद्दिष्टे: १) दरवर्षी किमान ५ दशलक्ष मेट्रिक टन (5 MMT) हरित हायड्रोजन निर्मिती क्षमता, २) सुमारे ५० दशलक्ष मेट्रिक टन CO2 उत्सर्जन कपात, ३) १ लाख कोटी रुपयांच्या जीवाश्म इंधन आयातीची बचत; SIGHT कार्यक्रम (इलेक्ट्रोलायझर निर्मिती सबसिडी)",
                                            titleEn: "National Green Hydrogen Mission: Rs 19,744 Cr outlay; 2030 Targets: 5 MMT annual green hydrogen production, 50 MMT CO2 abatement, Rs 1 Lakh Cr fossil fuel import savings; SIGHT scheme for electrolyzer manufacturing",
                                            chips: ["हरित हायड्रोजन मोहीम १९,७४४ कोटी", "२०३० पर्यंत ५ MMT उत्पादन", "SIGHT कार्यक्रम", "इलेक्ट्रोलायझर अनुदान"]
                                        },
                                        {
                                            id: "st_gb_mc06_01_02",
                                            titleMr: "PM सूर्यघर: मोफत वीज योजना (PM Surya Ghar Muft Bijli Yojana - फेब्रुवारी २०२४): ७५,०२१ कोटी रुपयांची योजना; देशभरातील १ कोटी घरांच्या छतावर रूफटॉप सोलर यंत्रणा बसवणे; दरमहा ३०० युनिट्स मोफत वीज; शिल्लक वीज ग्रीडला विकून उत्पन्नाची संधी; ३०,००० ते ७८,००० रुपयांपर्यंत थेट सरकारी सबसिडी",
                                            titleEn: "PM Surya Ghar Muft Bijli Yojana (Feb 2024): Rs 75,021 Cr outlay; 1 Crore rooftop solar installations; Up to 300 units free electricity per month; Direct central subsidy from Rs 30k to Rs 78k; Net-metering surplus sale",
                                            chips: ["PM सूर्यघर योजना", "१ कोटी घरे रूफटॉप सोलर", "दरमहा ३०० युनिट्स मोफत वीज", "७५,०२१ कोटी रु. निधी"]
                                        },
                                        {
                                            id: "st_gb_mc06_01_03",
                                            titleMr: "आंतरराष्ट्रीय सौर आघाडी (ISA - International Solar Alliance): भारत आणि फ्रान्स यांच्या संयुक्त पुढाकाराने COP21 पॅरिस परिषदेत स्थापना; मुख्यालय: ग्वालपहाडी, गुरुग्राम (हरियाणा - भारतात आंतरराष्ट्रीय संघटनेचे पहिले मुख्यालय); उद्दिष्ट: 'वन सन, वन वर्ल्ड, वन ग्रिड' (OSOWOG); १०० हून अधिक देश पूर्ण सदस्य",
                                            titleEn: "International Solar Alliance (ISA): Formed at COP21 Paris by India & France; HQ Gurugram, India (1st international treaty-based body HQ in India); Mission: 'One Sun, One World, One Grid' (OSOWOG)",
                                            chips: ["आंतरराष्ट्रीय सौर आघाडी ISA", "मुख्यालय गुरुग्राम (हरियाणा)", "भारत व फ्रान्स पुढाकार", "OSOWOG ग्रिड"]
                                        },
                                        {
                                            id: "st_gb_mc06_01_04",
                                            titleMr: "कार्बन सीमा समायोजन यंत्रणा (CBAM - Carbon Border Adjustment Mechanism): युरोपियन युनियनचा (EU) कार्बन टॅक्स; पोलाद, सिमेंट, ॲल्युमिनियम, खते व वीज या उच्च कार्बन उत्सर्जक वस्तूंच्या आयातीवर कार्बन कर आकारणी; भारताच्या धातू व अभियांत्रिकी निर्यातीवर मोठा परिणाम होण्याची शक्यता; भारताचा WTO मध्ये विरोध",
                                            titleEn: "EU's Carbon Border Adjustment Mechanism (CBAM): Carbon border tariff on carbon-intensive imports (Steel, Aluminium, Cement, Fertilizers); Potential threat to India's engineering exports; Challenged by India at WTO",
                                            chips: ["CBAM कार्बन टॅक्स EU", "पोलाद व ॲल्युमिनियम कर", "भारताच्या निर्यातीवर परिणाम", "WTO मध्ये आव्हान"]
                                        }
                                    ],
                                    sources: [
                                        { book: "नवीन व नवीकरणीय ऊर्जा मंत्रालय (MNRE)", standard: "वार्षिक अहवाल", chapterRef: "ग्रीन हायड्रोजन व रूफटॉप सोलर" },
                                        { book: "योजना मासिक", standard: "पर्यावरण व ऊर्जा विशेषांक", chapterRef: "हवामान बदल व संक्रमण" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग D — कृषी अर्थशास्त्र, अन्न सुरक्षा व व्यापार मंच
                        // =========================================================================
                        {
                            id: "gb_mca_c07",
                            code: "MC07",
                            section: "D",
                            slug: "agri-tech-nano-fertilizers-and-msp-procurement-policies",
                            nameMr: "कृषी तंत्रज्ञान, नॅनो खते, MSP खरेदी धोरणे आणि e-NAM मंच",
                            nameEn: "Agri-Tech Reforms, Nano Urea/DAP, MSP Procurement Operations & e-NAM Platform",
                            name: "कृषी तंत्रज्ञान व हमीभाव धोरणे (Agri-Tech & MSP Policies)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mca_c07",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mca_c06",
                            nextChapterId: "gb_mca_c08",
                            metaDescriptionMr: "नॅनो युरिया व नॅनो DAP (IFFCO निर्मिती), पीएम किसान समृद्धी केंद्रे (PM-KSK), ड्रोन दीदी योजना, e-NAM राष्ट्रीय कृषी बाजार, आणि खरीप/रब्बी हमीभाव (MSP) खरेदीतील अलीकडील बदल.",
                            metaDescriptionEn: "In-depth review of Agri-Tech: Nano Liquid Urea & Nano DAP (IFFCO Kalol), PM Kisan Samruddhi Kendras, Namo Drone Didi scheme for women SHGs, e-NAM integration, and dynamic MSP procurement shifts.",
                            notesJsonPath: "/data/notes/group_b/mains/current_affairs/c07_agri_tech_msp.json",
                            quizTag: "gb_mca_agri_01",
                            tags: ["Agriculture", "Nano Urea IFFCO", "Namo Drone Didi", "e-NAM Agri Market", "PM-KSK", "High-Weightage"],
                            searchKeywords: ["nano liquid urea nano dap iffco kalol plant", "namo drone didi scheme women self help groups shg", "pm kisan samruddhi kendras pmksk fertilizer retail", "enam electronic national agriculture market apmc", "msp kharif rabi procurement swaminathan c2 50", "नॅनो युरिया IFFCO", "नमो ड्रोन दीदी योजना", "e-NAM राष्ट्रीय कृषी बाजार", "किमान आधारभूत किंमत MSP बदल"],
                            topics: [
                                {
                                    id: "top_gb_mc07_01",
                                    nameMr: "नॅनो खते क्रांती, कृषी ड्रोन तंत्रज्ञान आणि डिजिटल कृषी बाजारपेठ",
                                    nameEn: "Nano-Fertilizer Innovation, Precision Agricultural Drones & National Mandi Interlinks",
                                    subtopics: [
                                        {
                                            id: "st_gb_mc07_01_01",
                                            titleMr: "नॅनो लिक्विड खते (Nano Urea & Nano DAP): IFFCO द्वारे जगातील पहिल्या नॅनो लिक्विड युरियाचे उत्पादन (कलोल, गुजरात प्रकल्प); पारंपारिक युरियाच्या एका पोत्याची जागा ५०० मिली ची बाटली घेते; कार्यक्षमता ८०% पेक्षा जास्त (पारंपारिक खतांची कार्यक्षमता केवळ ३०-४०%); माती व भूगर्भातील पाण्याचे प्रदूषण रोखणे",
                                            titleEn: "Nano Liquid Fertilizers (IFFCO): World's 1st Nano Liquid Urea from Kalol, Gujarat; 500ml bottle replaces 45kg conventional bag; Nutrient use efficiency exceeds 80% (vs 30-40% for granular urea); Curbs soil/groundwater pollution",
                                            chips: ["नॅनो लिक्विड युरिया (IFFCO)", "कलोल प्रकल्प", "५०० मिली = १ पोते युरिया", "८०% कार्यक्षमता"]
                                        },
                                        {
                                            id: "st_gb_mc07_01_02",
                                            titleMr: "नमो ड्रोन दीदी योजना (Namo Drone Didi): महिला बचत गटांना (SHGs) शेतीमध्ये खते व कीटकनाशकांची फवारणी करण्यासाठी १५,००० ड्रोनचे वाटप; ग्रामीण महिलांचे आर्थिक सक्षमीकरण व अचूक शेती (Precision Agriculture); ड्रोन खरेदीसाठी ८०% पर्यंत (कमाल ८ लाख रु.) सरकारी अनुदान",
                                            titleEn: "Namo Drone Didi Scheme: Allotment of 15,000 agricultural drones to Women Self-Help Groups (SHGs) for precision liquid fertilizer/pesticide spraying; Up to 80% (max Rs 8 Lakhs) central subsidy",
                                            chips: ["नमो ड्रोन दीदी", "महिला बचत गट १५,००० ड्रोन", "८०% सरकारी अनुदान", "अचूक शेती फवारणी"]
                                        },
                                        {
                                            id: "st_gb_mc07_01_03",
                                            titleMr: "e-NAM (राष्ट्रीय कृषी बाजार): इलेक्ट्रॉनिक ट्रेडिंग पोर्टल; देशातील १,४०० हून अधिक APMC बाजार समित्यांचे एकात्मिक जाळे; 'एक देश, एक कृषी बाजार'; शेतकऱ्यांना देशभरातील व्यापाऱ्यांकडून सर्वोच्च बोली (Online Bidding) मिळवून देणे; मध्यस्थांचे उच्चाटन",
                                            titleEn: "e-NAM (Electronic National Agriculture Market): Pan-India electronic trading portal integrating 1400+ APMC mandis; Real-time price discovery via online competitive bidding for farmers",
                                            chips: ["e-NAM राष्ट्रीय बाजार", "APMC बाजार समित्या जोडणी", "ऑनलाइन लिलाव पद्धत", "शेतकरी थेट विक्री"]
                                        }
                                    ],
                                    sources: [
                                        { book: "कृषी व शेतकरी कल्याण मंत्रालय", standard: "अधिकृत अहवाल", chapterRef: "नॅनो खते व ड्रोन योजना" },
                                        { book: "कुरुक्षेत्र मासिक", standard: "ग्रामीण विकास विशेषांक", chapterRef: "कृषी तंत्रज्ञान व विपणन" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mca_c08",
                            code: "MC08",
                            section: "D",
                            slug: "social-justice-caste-surveys-and-reservation-discourse",
                            nameMr: "सामाजिक न्याय, जातनिहाय सर्वेक्षणे आणि आरक्षण प्रवाह",
                            nameEn: "Social Justice Dynamics: Socio-Economic Caste Censuses & Reservation Precedents",
                            name: "सामाजिक न्याय व आरक्षण प्रवाह (Social Justice & Reservation)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mca_c08",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mca_c07",
                            nextChapterId: "gb_mca_c09",
                            metaDescriptionMr: "बिहार जातनिहाय सर्वेक्षण २०२३ (निष्कर्ष व कायदेशीर बाजू), महाराष्ट्रातील मराठा आरक्षण (कुणबी दाखले - न्या. संदीप शिंदे समिती, न्या. शुक्रे आयोग), १०३ वी घटनादुरुस्ती (EWS आरक्षण सर्वोच्च न्यायालय निकाल), आणि ५०% आरक्षण मर्यादा (इंदिरा साहनी खटला).",
                            metaDescriptionEn: "In-depth review of Affirmative Action: Bihar Caste Survey 2023 methodology & findings, Maharashtra Maratha Reservation (Kunbi caste certificates - Justice Shinde panel, Justice Shukre Commission), 103rd Amendment EWS upholding, and 50% reservation ceiling.",
                            notesJsonPath: "/data/notes/group_b/mains/current_affairs/c08_social_justice_reservation.json",
                            quizTag: "gb_mca_reservation_01",
                            tags: ["Social Justice", "Caste Census Bihar", "Maratha Reservation Maharashtra", "Justice Shukre Commission", "EWS 103rd Amendment", "High-Weightage"],
                            searchKeywords: ["bihar caste based survey results breakdown obc ebc", "maratha reservation justice sandeep shinde committee kunbi", "justice sunil shukre commission maratha quota act 2024", "103rd constitutional amendment ews reservation upheld supreme court", "50 percent reservation ceiling indra sawhney case", "जातनिहाय सर्वेक्षण बिहार निकाल", "मराठा आरक्षण कुणबी दाखले शिंदे समिती", "न्यायमूर्ती शुक्रे आयोग २०२४", "EWS आरक्षण १०३ वी दुरुस्ती वैध निकाल", "५०% आरक्षण मर्यादा इंदिरा साहनी"],
                            topics: [
                                {
                                    id: "top_gb_mc08_01",
                                    nameMr: "जात सर्वेक्षण निष्कर्ष, कुणबी-मराठा कायदेशीर प्रक्रिया आणि आरक्षणाची घटनात्मक चौकट",
                                    nameEn: "Caste Survey Data, Kunbi-Maratha Inquiries & 50% Quota Jurisprudence",
                                    subtopics: [
                                        {
                                            id: "st_gb_mc08_01_01",
                                            titleMr: "बिहार जातनिहाय सर्वेक्षण २०२३: स्वतंत्र भारतात जातनिहाय आकडेवारी प्रकाशित करणारे पहिले राज्य; लोकसंख्या टक्केवारी: अत्यंत मागास प्रवर्ग (EBC - ३६.०१%), इतर मागासवर्ग (OBC - २७.१२%, एकूण मागास ६३%), अनुसूचित जाती (SC - १९.६५%), अनुसूचित जमाती (ST - १.६८%), खुला प्रवर्ग (General - १५.५२%); आरक्षणाची मर्यादा ६५% (EWS सह ७५%) पर्यंत वाढवण्याचा निर्णय",
                                            titleEn: "Bihar Caste Survey 2023: First state in post-independence India to publish caste data; Demography: EBC (36.01%), OBC (27.12%), SC (19.65%), ST (1.68%), General (15.52%); Legislative move to expand quota to 65% (75% with EWS)",
                                            chips: ["बिहार जात सर्वेक्षण २०२३", "EBC ३६% व OBC २७%", "एकूण मागास ६३%", "७५% आरक्षण मर्यादा वाढ"]
                                        },
                                        {
                                            id: "st_gb_mc08_01_02",
                                            titleMr: "महाराष्ट्रातील मराठा आरक्षण कायदेशीर घडामोडी: १) न्यायमूर्ती संदीप शिंदे समिती (मराठवाड्यातील निजामकालीन कुणबी नोंदी तपासून कुणबी प्रमाणपत्रे देणे); २) न्यायमूर्ती सुनील शुक्रे राज्य मागासवर्ग आयोग अहवाल (महाराष्ट्र शासनाने फेब्रुवारी २०२४ मध्ये विशेष अधिवेशनात मराठा समाजाला शिक्षण व नोकऱ्यांत १०% स्वतंत्र आरक्षण देणारा कायदा मंजूर केला); ५०% आरक्षण मर्यादेचे कायदेशीर आव्हान",
                                            titleEn: "Maharashtra Maratha Reservation Track: 1) Justice Sandeep Shinde Committee (Nizam-era records for Kunbi caste certificates), 2) Justice Sunil Shukre State Backward Classes Commission (Report formed basis for 10% separate quota bill passed in Feb 2024)",
                                            chips: ["न्यायमूर्ती संदीप शिंदे समिती (कुणबी नोंदी)", "न्यायमूर्ती सुनील शुक्रे आयोग", "१०% मराठा आरक्षण कायदा २०२४", "मागासवर्ग आयोग"]
                                        },
                                        {
                                            id: "st_gb_mc08_01_03",
                                            titleMr: "१०३ वी घटनादुरुस्ती व ५०% मर्यादा (EWS Supreme Court Verdict - जनहित अभियान खटला): सर्वोच्च न्यायालयाच्या ५ न्यायाधीशांच्या घटनापीठाने ३:२ बहुमताने १०% EWS आरक्षण वैध ठरवले; आर्थिक निकषांवर आरक्षण देणे संविधानाच्या मूलभूत चौकटीचा भंग करत नाही; ५०% ची मर्यादा ही केवळ सामाजिक व शैक्षणिक मागास घटकांसाठी (SEBC) लागू आहे हे स्पष्ट",
                                            titleEn: "103rd Amendment EWS Verdict (Janhit Abhiyan Case): 5-judge bench upheld 10% EWS quota by 3:2; Economic criteria alone does not violate basic structure; 50% ceiling applies strictly to non-EWS social reservations",
                                            chips: ["१०३ वी दुरुस्ती EWS वैध निकाल", "जनहित अभियान खटला", "३:२ बहुमत निकाल", "५०% मर्यादा अपवाद"]
                                        }
                                    ],
                                    sources: [
                                        { book: "द हिंदू / इंडियन एक्सप्रेस", standard: "घटनात्मक विश्लेषण", chapterRef: "आरक्षण व सामाजिक न्याय" },
                                        { book: "महाराष्ट्र शासन गॅझेट", standard: "फेब्रुवारी २०२४", chapterRef: "महाराष्ट्र सामाजिक व शैक्षणिक मागासवर्ग आरक्षण अधिनियम २०२४" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग E — सायबर सुरक्षा, अंतराळ कायदे व नवसंशोधन (Frontier Tech & Security)
                        // =========================================================================
                        {
                            id: "gb_mca_c09",
                            code: "MC09",
                            section: "E",
                            slug: "cyber-security-artificial-intelligence-and-space-economy",
                            nameMr: "सायबर सुरक्षा, कृत्रिम बुद्धिमत्ता (AI) नियमन आणि अंतराळ अर्थव्यवस्था",
                            nameEn: "Frontier Technologies: Cybersecurity, AI Governance, Deepfakes & Space Economy",
                            name: "सायबर सुरक्षा व AI नियमन (Cybersecurity & AI Governance)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mca_c09",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mca_c08",
                            nextChapterId: "gb_mca_c10",
                            metaDescriptionMr: "सायबर गुन्हेगारी (Ransomware, Phishing, Deepfakes), CERT-In मार्गदर्शक तत्त्वे, भारतीय सायबर गुन्हे समन्वय केंद्र (I4C), युरोपियन युनियनचा जगातील पहिला AI Act, आणि भारताचे राष्ट्रीय अंतराळ धोरण २०२३ (IN-SPACe).",
                            metaDescriptionEn: "In-depth review of Frontier Technologies: Cyber threats (Deepfakes, Ransomware), CERT-In directives, I4C Portal & 1930 Helpline, European Union's landmark Artificial Intelligence Act 2024, and Indian Space Policy 2023 (IN-SPACe commercial opening).",
                            notesJsonPath: "/data/notes/group_b/mains/current_affairs/c09_cyber_ai_space.json",
                            quizTag: "gb_mca_cyber_01",
                            tags: ["Frontier Tech", "Cybersecurity CERT-In", "I4C 1930 Helpline", "EU AI Act 2024", "Deepfake Regulations", "IN-SPACe Space Policy", "High-Weightage"],
                            searchKeywords: ["cybersecurity cert in guidelines incident reporting 6 hours", "indian cyber crime coordination centre i4c helpline 1930", "deepfakes it rules 2021 advisory misinformation", "european union ai act 2024 risk based approach", "indian space policy 2023 in-space nsil commercial space", "सायबर सुरक्षा CERT-In", "I4C १९३० सायबर हेल्पलाइन", "डीपफेक कायदेशीर नियमन", "EU कृत्रिम बुद्धिमत्ता कायदा AI Act", "भारतीय अंतराळ धोरण २०२३ IN-SPACe"],
                            topics: [
                                {
                                    id: "top_gb_mc09_01",
                                    nameMr: "सायबर सुरक्षेची मानके, डीपफेक आव्हान, जागतिक AI कायदे आणि खाजगी अंतराळ सहभाग",
                                    nameEn: "Cyber Threat Architectures, Deepfake Forensics, Global AI Treaties & Space Deregulation",
                                    subtopics: [
                                        {
                                            id: "st_gb_mc09_01_01",
                                            titleMr: "सायबर सुरक्षा आणि संस्थात्मक चौकट: १) CERT-In (Computer Emergency Response Team - India: सायबर हल्ल्यांची ६ तासांच्या आत नोंदणी करणे बंधनकारक); २) I4C (Indian Cyber Crime Coordination Centre - गृहमंत्रालय; राष्ट्रीय सायबर क्राईम हेल्पलाइन '१९३०'); ३) डीपफेक (Deepfake) व AI गैरवापर: IT नियम २०२१ अन्वये सोशल मीडिया प्लॅटफॉर्म्सना २४ तासांत आक्षेपार्ह AI सामग्री हटवण्याचे आदेश",
                                            titleEn: "Cybersecurity & Institutional Framework: CERT-In (Mandatory 6-hour incident reporting); I4C under MHA operating National Cybercrime Portal & 1930 Helpline; Deepfake regulation under IT Rules 2021 (Takedown within 24 hours)",
                                            chips: ["CERT-In (६ तासांत रिपोर्टिंग)", "I4C सायबर हेल्पलाइन १९३०", "डीपफेक नियमन (IT Rules २०२१)", "रॅन्समवेअर हल्ले"]
                                        },
                                        {
                                            id: "st_gb_mc09_01_02",
                                            titleMr: "जागतिक कृत्रिम बुद्धिमत्ता नियमन (EU AI Act २०२४): जगातील पहिला सर्वसमावेशक AI कायदा; जोखमीवर आधारित वर्गीकरण (Risk-based: Unacceptable risk बंदी, High risk कडक नियमन, Generative AI पारदर्शकता); ब्लेचली पार्क घोषणापत्र (Bletchley Declaration - AI सुरक्षिततेवरील जागतिक सहमती)",
                                            titleEn: "Global AI Governance: European Union AI Act 2024 (World's first comprehensive horizontal AI law adopting risk-tier approach: Unacceptable, High, General Purpose AI); Bletchley Park AI Safety Declaration",
                                            chips: ["EU AI Act २०२४ (पहिला AI कायदा)", "जोखमीवर आधारित वर्गीकरण", "ब्लेचली पार्क घोषणापत्र (UK)", "AI सुरक्षा नियम"]
                                        },
                                        {
                                            id: "st_gb_mc09_01_03",
                                            titleMr: "भारतीय अंतराळ धोरण २०२३ (Indian Space Policy २०२३): इस्रोचे संशोधन व विकासावर लक्ष केंद्रित; व्यावसायिक उड्डाणांसाठी NSIL (NewSpace India Limited); खाजगी अंतराळ कंपन्यांना परवानगी व प्रोत्साहन देण्यासाठी IN-SPACe (Indian National Space Promotion and Authorization Centre); अग्निकुल कॉसमॉस (3D-प्रिंटेड इंजिन प्रक्षेपण) व स्कायमूट एरोस्पेस",
                                            titleEn: "Indian Space Policy 2023: Commercialization of space; ISRO dedicated to advanced R&D; NSIL handles operational missions; IN-SPACe acts as single-window nodal agency for private space startups (Agnikul 3D engine, Skyroot)",
                                            chips: ["भारतीय अंतराळ धोरण २०२३", "IN-SPACe (खाजगी परवानगी केंद्र)", "NSIL व्यावसायिक शाखा", "अग्निकुल ३D प्रिंटेड रॉकेट"]
                                        }
                                    ],
                                    sources: [
                                        { book: "इलेक्ट्रॉनिक्स व माहिती तंत्रज्ञान मंत्रालय (MeitY)", standard: "अधिकृत अहवाल", chapterRef: "सायबर सुरक्षा व IT नियम" },
                                        { book: "अंतराळ विभाग भारत सरकार", standard: "धोरण दस्तऐवज", chapterRef: "भारतीय अंतराळ धोरण २०२३" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mca_c10",
                            code: "MC10",
                            section: "E",
                            slug: "sports-policy-khelo-india-and-anti-doping-act",
                            nameMr: "क्रीडा धोरण, खेलो इंडिया, राष्ट्रीय उत्तेजक द्रव्य विरोधी कायदा (NADA)",
                            nameEn: "Sports Governance: National Sports Policy, Target Olympic Podium (TOPS) & Anti-Doping Act",
                            name: "क्रीडा धोरण व नाडा (Sports Policy & NADA Anti-Doping)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mca_c10",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mca_c09",
                            nextChapterId: "gb_mca_c11",
                            metaDescriptionMr: "राष्ट्रीय उत्तेजक द्रव्य विरोधी कायदा २०२२ (National Anti-Doping Act / NADA), TOPS योजना (Target Olympic Podium Scheme), खेलो इंडिया कार्यक्रम (महाराष्ट्र वर्चस्व), आणि भारताची २०३६ ऑलिम्पिक यजमानपदाची दावेदारी.",
                            metaDescriptionEn: "In-depth review of Sports Governance: National Anti-Doping Act 2022 (Statutory backing to NADA, WADA code compliance), TOPS scheme athlete funding, Khelo India ecosystem, and India's formal bid for 2036 Summer Olympics.",
                            notesJsonPath: "/data/notes/group_b/mains/current_affairs/c10_sports_governance.json",
                            quizTag: "gb_mca_sports_gov_01",
                            tags: ["Sports Governance", "Anti-Doping Act 2022 NADA", "TOPS Scheme", "Khelo India", "2036 Olympics Bid", "High-Weightage"],
                            searchKeywords: ["national anti doping act 2022 nada wada compliance", "target olympic podium scheme tops athletes stipend", "khelo india youth games winter games maharashtra", "india 2036 summer olympics hosting bid ioc session mumbai", "क्रीडा धोरण नाडा NADA कायदा", "TOPS योजना ऑलिम्पिक", "खेलो इंडिया महाराष्ट्र", "२०३६ ऑलिम्पिक यजमानपद"],
                            topics: [
                                {
                                    id: "top_gb_mc10_01",
                                    nameMr: "उत्तेजक द्रव्य प्रतिबंध कायदेशीर चौकट, TOPS योजना आणि ऑलिम्पिक दावेदारी",
                                    nameEn: "Anti-Doping Legal Framework, Athlete Sponsorship Architectures & Olympic Bidding",
                                    subtopics: [
                                        {
                                            id: "st_gb_mc10_01_01",
                                            titleMr: "राष्ट्रीय उत्तेजक द्रव्य विरोधी कायदा २०२२ (National Anti-Doping Act २०२२): खेळांमध्ये उत्तेजक द्रव्यांच्या (Doping) वापरावर बंदी घालणारा कायदा; राष्ट्रीय उत्तेजक द्रव्य विरोधी संस्थेला (NADA) वैधानिक अधिकार प्रदान; जागतिक उत्तेजक द्रव्य विरोधी संस्थेच्या (WADA) आचारसंहितेची अंमलबजावणी; राष्ट्रीय उत्तेजक द्रव्य विरोधी न्यायाधिकरण स्थापना",
                                            titleEn: "National Anti-Doping Act 2022: Statutory framework prohibiting doping in sports; Endows NADA with statutory search and inquiry powers; Enforces WADA compliance; Establishes National Anti-Doping Disciplinary Panel",
                                            chips: ["NADA कायदा २०२२", "उत्तेजक द्रव्य बंदी (Anti-Doping)", "WADA आचारसंहिता", "NADA वैधानिक दर्जा"]
                                        },
                                        {
                                            id: "st_gb_mc10_01_02",
                                            titleMr: "TOPS योजना व ऑलिम्पिक पूर्वतयारी: टार्गेट ऑलिम्पिक पोडियम योजना (TOPS - Target Olympic Podium Scheme): संभाव्य पदक विजेत्या खेळाडूंना जागतिक दर्जाचे प्रशिक्षण, परदेशी मार्गदर्शक व दरमहा ५०,००० रु. आउट-ऑफ-पॉकेट भत्ता; मिशन ऑलिम्पिक सेल (MOC)",
                                            titleEn: "Target Olympic Podium Scheme (TOPS): Provides elite customized training, foreign coaching stints, state-of-the-art sports science and Rs 50,000/month out-of-pocket allowance; Mission Olympic Cell",
                                            chips: ["TOPS योजना (ऑलिम्पिक पदक)", "दरमहा ५०,००० रु. भत्ता", "मिशन ऑलिम्पिक सेल", "परदेशी प्रशिक्षण"]
                                        },
                                        {
                                            id: "st_gb_mc10_01_03",
                                            titleMr: "भारताची २०३६ ऑलिम्पिक दावेदारी आणि १४१ वी IOC परिषद: ऑक्टोबर २०२३ मध्ये मुंबई येथे १४१ व्या आंतरराष्ट्रीय ऑलिम्पिक समिती (IOC) सत्राचे ऐतिहासिक आयोजन (४० वर्षांनंतर भारतात); भारताने २०३६ च्या उन्हाळी ऑलिम्पिकचे यजमानपद मिळवण्यासाठी अधिकृत इच्छा (Letter of Intent) व्यक्त केली",
                                            titleEn: "India's 2036 Olympic Bid: 141st International Olympic Committee (IOC) Session hosted at Mumbai in Oct 2023; India officially submitted Letter of Intent to Future Host Commission for 2036 Games",
                                            chips: ["१४१ वी IOC परिषद मुंबई", "२०३६ ऑलिम्पिक यजमानपद दावेदारी", "आंतरराष्ट्रीय ऑलिम्पिक समिती"]
                                        }
                                    ],
                                    sources: [
                                        { book: "युवा व क्रीडा मंत्रालय भारत सरकार", standard: "अधिकृत अहवाल", chapterRef: "क्रीडा कायदे व ऑलिम्पिक तयारी" },
                                        { book: "पृथ्वी परिक्रमा", standard: "क्रीडा विशेषांक", chapterRef: "क्रीडा धोरणे व संस्था" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग F — महाराष्ट्र विशेष अहवाल, पुरस्कार व मास्टर रिव्हिजन
                        // =========================================================================
                        {
                            id: "gb_mca_c11",
                            code: "MC11",
                            section: "F",
                            slug: "maharashtra-socio-economic-survey-and-budget-highlights",
                            nameMr: "महाराष्ट्र अर्थसंकल्प, आर्थिक पाहणी अहवाल व शाश्वत विकास उद्दिष्टे (SDG)",
                            nameEn: "Maharashtra Budget Highlights, Economic Survey Indicators & State SDG Ranking",
                            name: "महाराष्ट्र अर्थसंकल्प व पाहणी अहवाल (Maharashtra Budget & Survey)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mca_c11",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mca_c10",
                            nextChapterId: "gb_mca_c12",
                            metaDescriptionMr: "महाराष्ट्र अर्थसंकल्पातील 'पंचामृत' ध्येये, आर्थिक पाहणी अहवालातील चालू वाढीचा दर, कृषी-उद्योग-सेवा क्षेत्रांची कामगिरी, नीती आयोग SDG इंडिया इंडेक्समध्ये महाराष्ट्राचे स्थान, आणि नागरी पायाभूत सुविधा.",
                            metaDescriptionEn: "In-depth review of Maharashtra Budget 'Panchamrit' goals, Economic Survey growth statistics, Sectoral health (Agri, Industry, Services), NITI Aayog's SDG India Index State rankings, and Municipal infrastructure outlays.",
                            notesJsonPath: "/data/notes/group_b/mains/current_affairs/c11_mh_budget_survey.json",
                            quizTag: "gb_mca_mh_budget_01",
                            tags: ["Maharashtra Focus", "State Budget Panchamrit", "Economic Survey MH", "NITI Aayog SDG Index", "Fiscal Deficit MH", "High-Weightage"],
                            searchKeywords: ["maharashtra budget panchamrit 5 goals finance minister", "economic survey maharashtra gsdp growth rate sectoral", "niti aayog sdg india index maharashtra ranking front runner", "fiscal deficit revenue deficit maharashtra budget", "महाराष्ट्र अर्थसंकल्प पंचामृत ध्येये", "आर्थिक पाहणी अहवाल महाराष्ट्र GSDP", "नीती आयोग SDG निर्देशांक महाराष्ट्र मानांकन", "वित्तीय तूट महाराष्ट्र"],
                            topics: [
                                {
                                    id: "top_gb_mc11_01",
                                    nameMr: "महाराष्ट्र अर्थसंकल्प पंचामृत, GSDP वाढीचे आकडे आणि SDG मानांकन",
                                    nameEn: "State Budget Panchamrit Imperatives, GSDP Trajectories & NITI Aayog SDG Index",
                                    subtopics: [
                                        {
                                            id: "st_gb_mc11_01_01",
                                            titleMr: "महाराष्ट्र अर्थसंकल्प पंचामृत (५ प्रमुख ध्येये): १) शाश्वत शेती-समृद्ध शेतकरी, २) महिला, आदिवासी, मागासवर्ग, अल्पसंख्याक सक्षमीकरण, ३) भरीव पायाभूत सुविधा विकास, ४) रोजगारनिर्मिती - सक्षम, कुशल, रोजगारक्षम तरुण, ५) पर्यावरणपूरक विकास; १ ट्रिलियन डॉलर अर्थव्यवस्थेचे लक्ष्य",
                                            titleEn: "Maharashtra Budget 'Panchamrit' (5 Pillars): 1) Sustainable Agriculture, 2) Inclusive Social Welfare (Women/Tribals/Backward), 3) Megaproject Infrastructure, 4) Youth Skilling & Employment, 5) Eco-friendly Development; Target $1 Trillion State Economy",
                                            chips: ["अर्थसंकल्प पंचामृत (५ ध्येये)", "१ ट्रिलियन डॉलर अर्थव्यवस्था उद्दिष्ट", "शाश्वत शेती", "युवा रोजगार"]
                                        },
                                        {
                                            id: "st_gb_mc11_01_02",
                                            titleMr: "आर्थिक पाहणी अहवाल चालू आकडेवारी: महाराष्ट्राचा GSDP वाढीचा दर; कृषी क्षेत्रातील वाढ व हवामानाचे आव्हान; उद्योग क्षेत्रातील FDI ओघ (देशातील एकूण FDI पैकी सुमारे ३०-३५% गुंतवणूक एकट्या महाराष्ट्रात - देशात अव्वल); सेवा क्षेत्राचा स्थिर वाढीचा कल",
                                            titleEn: "Economic Survey Key Indicators: State GSDP expansion; Agricultural weather vulnerability; Maharashtra ranks 1st in FDI inflows (Attracting ~30-35% of India's total foreign direct investments); Dominant Services growth",
                                            chips: ["FDI मध्ये देशात प्रथम (३०-३५%)", "GSDP वाढीचा दर", "कृषी व सेवा क्षेत्र", "गुंतवणुकीत अव्वल महाराष्ट्र"]
                                        },
                                        {
                                            id: "st_gb_mc11_01_03",
                                            titleMr: "नीती आयोग शाश्वत विकास उद्दिष्टे (SDG India Index): महाराष्ट्राची 'आघाडीचे राज्य' (Front Runner) श्रेणीमध्ये कामगिरी; गरिबी निर्मूलन (SDG 1), दर्जेदार शिक्षण (SDG 4), परवडणारी व स्वच्छ ऊर्जा (SDG 7) आणि उद्योग-पायाभूत सुविधा (SDG 9) या उद्दिष्टांमध्ये उल्लेखनीय गुण",
                                            titleEn: "NITI Aayog SDG India Index: Maharashtra performs in 'Front Runner' category (Score 70+); Commendable ranks in Zero Poverty (SDG 1), Quality Education (SDG 4), Affordable Clean Energy (SDG 7), and Industry/Innovation (SDG 9)",
                                            chips: ["SDG इंडिया इंडेक्स (नीती आयोग)", "Front Runner आघाडीचे राज्य", "SDG 1 दारिद्र्य निर्मूलन", "SDG 7 स्वच्छ ऊर्जा"]
                                        }
                                    ],
                                    sources: [
                                        { book: "अर्थ व सांख्यिकी संचालनालय", standard: "महाराष्ट्र शासन", chapterRef: "आर्थिक पाहणी अहवाल २०२३-२४" },
                                        { book: "नीती आयोग (NITI Aayog)", standard: "SDG अहवाल", chapterRef: "SDG India Index State Rankings" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mca_c12",
                            code: "MC12",
                            section: "F",
                            slug: "mains-current-affairs-master-revision-and-pyq-trends",
                            nameMr: "मुख्य चालू घडामोडी मास्टर रिव्हिजन: १० प्रश्नांची विश्लेषणात्मक रणनीती व PYQ कल",
                            nameEn: "Mains Current Affairs Master Revision: 10-Question Strategy & 10-Year Analytical Trends",
                            name: "चालू घडामोडी मास्टर रिव्हिजन (Master Revision: Mains Strategy)",
                            category: "REVISION",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mca_c12",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mca_c11",
                            nextChapterId: null,
                            metaDescriptionMr: "मुख्य परीक्षा पेपर २ मधील चालू घडामोडींच्या १० प्रश्नांचे (२० गुण) नियोजन, बहु-विधानात्मक प्रश्नांची सोडवणूक पद्धत, धोरणे व शासन निर्णयांवर भर, आणि १० वर्षांचे MPSC मुख्य परीक्षा PYQ ट्रेंड्स.",
                            metaDescriptionEn: "Master consolidation module: Strategy for Mains Paper 2 Current Affairs (10 questions = 20 marks), Multi-statement question elimination heuristics, Focus on Government Resolutions & Acts, and 10-year MPSC Mains trend insights.",
                            notesJsonPath: "/data/notes/group_b/mains/current_affairs/c12_master_revision.json",
                            quizTag: "gb_mca_revision_01",
                            tags: ["Revision", "Mains Paper 2 Strategy", "10 Questions 20 Marks", "Multi-Statement Elimination", "PYQ Trends", "High-Weightage"],
                            searchKeywords: ["mpsc group b mains paper 2 current affairs 10 questions strategy", "multi statement current affairs question elimination", "maharashtra government resolutions gr questions mains", "mpsc mains current affairs pyq trends 2012 to 2025", "मुख्य परीक्षा पेपर २ चालू घडामोडी रणनीती", "१० प्रश्न २० गुण", "बहु-विधानात्मक प्रश्न एलिमिनेशन", "PYQ ट्रेंड्स विश्लेषण"]
                        }
                    ]
                },


                {
                    id: "gb_mains_rti_rts",
                    code: "M_RTI_RTS",
                    slug: "right-to-information-2005-and-maharashtra-right-to-services-2015",
                    nameMr: "माहितीचा अधिकार अधिनियम (RTI २००५) व महाराष्ट्र लोकसेवा हक्क अधिनियम (RTS २०१५)",
                    nameEn: "Right to Information Act, 2005 & Maharashtra Right to Public Services Act, 2015",
                    name: "माहितीचा अधिकार व लोकसेवा हक्क (RTI 2005 & RTS 2015)",
                    officialScope: "Comprehensive section-by-section statutory study of Right to Information Act 2005 (Background, Definitions, PIO Duties, Exemptions u/s 8, CIC/SIC setup, Appeals u/s 19, Penalties u/s 20, 2019 Amendments) and Maharashtra Right to Public Services Act 2015 (Designated Officers, Delivery Timelines, 1st & 2nd Appellate Authorities, State Commission for Right to Services, Penalties, Aaple Sarkar portal) for MPSC Group B Mains Paper 2",
                    version: "1.0",
                    verifiedDate: "2026-10-28",
                    notesJsonBaseDir: "/data/notes/group_b/mains/rti_rts/",


                    // UI Theme & Theming Metadata
                    theme: {
                        primaryColor: "#d97706",        // Amber / Statutory Citizen Empowerment Theme
                        bgColor: "#fffbeb",
                        iconClass: "ri-shield-check-line"
                    },


                    // अभ्यास व डॅशबोर्ड ॲनालिटिक्स मेट्रिक्स
                    metrics: {
                        totalChapters: 10,
                        totalEstimatedHours: 32,
                        avgQuestionsInMains: 10,
                        targetMarks: 20,
                        weightageRange: "10 Questions / 20 Marks"
                    },


                    // विषय पातळीवरील स्मार्ट टॅग्ज
                    subjectTags: [
                        "Core-Mains",
                        "Mains-Paper-2",
                        "Bare-Act-Centric",
                        "Section-Intensive",
                        "High-Scoring",
                        "100-Percent-Accuracy-Potential"
                    ],


                    filterCategory: "LAW",
                    searchKeywords: [
                        "mpsc group b mains rti act 2005 sections", "right to information act 2005 section 4 6 7 8 19 20",
                        "rti amendment act 2019 cic sic term salary", "maharashtra right to public services act 2015 rts",
                        "rts act 2015 sections designated officer appellate authority", "state commission for right to services maharashtra aaple sarkar",
                        "माहितीचा अधिकार अधिनियम २००५ कलमे", "कलम ८ माहिती देण्यापासून सूट", "केंद्रीय व राज्य माहिती आयोग", "कलम १९ अपील कलम २० शास्ती", "महाराष्ट्र लोकसेवा हक्क अधिनियम २०१५", "पदनिर्देशित अधिकारी प्रथम द्वितीय अपील", "राज्य लोकसेवा हक्क आयोग आपले सरकार"
                    ],


                    referenceSources: [
                        {
                            name: "MPSC Non-Gazetted Group B Combined Mains Syllabus",
                            role: "अधिकृत परीक्षा-संदर्भ",
                            url: "https://mpsc.gov.in"
                        },
                        {
                            name: "The Right to Information Act, 2005 (Central Act No. 22 of 2005)",
                            role: "मूळ वैधानिक कायदा (Bare Act)"
                        },
                        {
                            name: "महाराष्ट्र लोकसेवा हक्क अधिनियम, २०१५ (महाराष्ट्र अधिनियम क्र. ३१/२०१५)",
                            role: "महाराष्ट्र शासन अधिकृत गॅझेट (Bare Act)"
                        },
                        {
                            name: "माहितीचा अधिकार व लोकसेवा हक्क - के. सागर / किशोर लवटे",
                            role: "कलमनिहाय सखोल विश्लेषण व वस्तुनिष्ठ प्रश्न सराव"
                        },
                        {
                            name: "महाराष्ट्र राज्य मुख्य माहिती आयोग व लोकसेवा हक्क आयोग अधिकृत नियमावली",
                            role: "नियम, परिपत्रके व अपीलीय कार्यपद्धती"
                        }
                    ],


                    chapters: [
                        // =========================================================================
                        // विभाग A — माहितीचा अधिकार अधिनियम, २००५ (RTI Act 2005: प्रकरणे १ ते ५)
                        // =========================================================================
                        {
                            id: "gb_mrti_c01",
                            code: "RTI01",
                            section: "A",
                            slug: "rti-2005-background-definitions-and-obligations-sec-1-to-5",
                            nameMr: "RTI २००५: ऐतिहासिक पार्श्वभूमी, उद्देश, व्याख्या (कलम २) आणि प्राधिकरणांची कर्तव्ये (कलम ४)",
                            nameEn: "RTI 2005: Historical Genesis, Preamble, Definitions (Sec 2) & Proactive Disclosure (Sec 4)",
                            name: "RTI पार्श्वभूमी, व्याख्या व कर्तव्ये (RTI Genesis, Sec 2 & 4)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mrti_c01",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: null,
                            nextChapterId: "gb_mrti_c02",
                            metaDescriptionMr: "RTI ची जागतिक व भारतीय पार्श्वभूमी (स्वीडन १७६६, MKSS राजस्थान, महाराष्ट्र २००२ कायदा), कायदा संमत तारखा, कलम २ (माहिती, सार्वजनिक प्राधिकरण, सक्षम अधिकारी), आणि कलम ४ (माहितीचे स्वयंस्फूर्त प्रकटीकरण).",
                            metaDescriptionEn: "In-depth review of RTI 2005: Historical genesis (Sweden 1766, MKSS Aruna Roy, Anna Hazare, MH RTI 2002), Enactment dates, Definitions under Section 2 (Information, Public Authority, Competent Authority), and Section 4 Proactive Disclosures.",
                            notesJsonPath: "/data/notes/group_b/mains/rti_rts/c01_rti_background_definitions.json",
                            quizTag: "gb_mrti_definitions_01",
                            tags: ["RTI Act 2005", "Section 2 Definitions", "Section 4 Proactive Disclosure", "Public Authority", "Competent Authority", "High-Weightage"],
                            searchKeywords: ["rti act 2005 background sweden 1766 mkss aruna roy", "rti enactment date 15 june 2005 enforcement 12 october 2005", "section 2 definitions information public authority record", "section 2e competent authority lok sabha speaker cji", "section 4 1 b 17 proactive disclosures", "माहिती अधिकार २००५ पार्श्वभूमी", "१२ ऑक्टोबर २००५ लागू", "कलम २ व्याख्या माहिती सार्वजनिक प्राधिकरण", "सक्षम अधिकारी", "कलम ४ स्वयंस्फूर्त प्रकटीकरण १७ बाबी"],
                            topics: [
                                {
                                    id: "top_gb_mr01_01",
                                    nameMr: "RTI ऐतिहासिक प्रवास, वैधानिक तारखा, कलम २ मधील व्याख्या आणि कलम ४ चे बंधन",
                                    nameEn: "Legislative Evolution, Enactment Chronology, Statutory Definitions & Section 4 Mandates",
                                    subtopics: [
                                        {
                                            id: "st_gb_mr01_01_01",
                                            titleMr: "ऐतिहासिक पार्श्वभूमी व वैधानिक तारखा: १) जगात सर्वप्रथम माहितीचा अधिकार देणारा देश: स्वीडन (१७६६); २) भारतातील चळवळ: 'मजदूर किसान शक्ती संघटना' (MKSS - अरुणा रॉय, राजस्थान); ३) महाराष्ट्रात अण्णा हजारे यांचे आंदोलन व 'महाराष्ट्र माहितीचा अधिकार अधिनियम २००२' (१० ऑगस्ट २००३ लागू - देशात अग्रेसर); ४) केंद्रीय RTI कायदा संसदेत मंजूर: १५ जून २००५ (राष्ट्रपतींची संमती); ५) संपूर्ण देशात प्रत्यक्ष लागू: १२ ऑक्टोबर २००५ (अधिनियमाच्या १२० व्या दिवशी - कलम १२, १३, १५, १६, २४, २७, २८ तात्काळ लागू झाले होते); जम्मू-काश्मीर पुनर्रचना कायदा २०१९ नंतर संपूर्ण भारतात लागू",
                                            titleEn: "Historical Evolution & Milestone Dates: Sweden 1st in world (1766); India's MKSS movement (Aruna Roy in Rajasthan); Anna Hazare & Maharashtra RTI 2002 (enacted 10 Aug 2003); Central RTI enacted on 15 June 2005, enforced on 12 October 2005 (120th day); Fully applies across India",
                                            chips: ["स्वीडन १७६६ (जगात पहिला)", "महाराष्ट्र २००२ कायदा (अण्णा हजारे)", "१५ जून २००५ राष्ट्रपती संमती", "१२ ऑक्टोबर २००५ पूर्ण लागू", "१२० वा दिवस"]
                                        },
                                        {
                                            id: "st_gb_mr01_01_02",
                                            titleMr: "कलम २ - महत्त्वाच्या व्याख्या (MPSC हमखास प्रश्न): १) कलम २(f) 'माहिती' (Information): कोणत्याही स्वरूपातील साहित्य - अभिलेख, दस्तऐवज, ज्ञापने, ई-मेल्स, मत, सल्ला, प्रसिद्धीपत्रके, परिपत्रके, आदेश, लॉगबुक्स, करार, नमुने व इलेक्ट्रॉनिक डेटा; २) कलम २(i) 'अभिलेख' (Record): कोणताही दस्तऐवज, हस्तलिखित, फाईल, मायक्रोफिल्म, फॅक्स प्रत; ३) कलम २(j) 'माहितीचा अधिकार': सार्वजनिक प्राधिकरणाकडे असलेल्या माहितीची पाहणी (Inspection), कामाचे नमुने घेणे, प्रमाणित प्रती घेणे, फ्लॉपी/पेन ड्राईव्ह स्वरूपात मिळवणे",
                                            titleEn: "Section 2 Core Definitions: Sec 2(f) 'Information' (Any material in any form: records, documents, emails, memos, data in electronic form); Sec 2(i) 'Record'; Sec 2(j) 'Right to Information' (Inspection of work/documents, certified copies, certified samples)",
                                            chips: ["कलम २(f) माहिती व्याख्या", "कलम २(i) अभिलेख", "कलम २(j) माहितीचा अधिकार", "कामाचे नमुने घेणे"]
                                        },
                                        {
                                            id: "st_gb_mr01_01_03",
                                            titleMr: "कलम २ मधील संस्थात्मक व्याख्या: १) कलम २(h) 'सार्वजनिक प्राधिकरण' (Public Authority): संविधानाद्वारे, संसदेच्या किंवा राज्य विधिमंडळाच्या कायद्याने, अथवा सरकारच्या अधिसूचनेने स्थापन झालेली कोणतीही संस्था; यामध्ये सरकारकडून थेट किंवा अप्रत्यक्षपणे मोठ्या प्रमाणावर अर्थसहाय्य मिळणाऱ्या बिगर-सरकारी संस्थांचाही (NGO) समावेश होतो; २) कलम २(e) 'सक्षम अधिकारी' (Competent Authority): लोकसभेसाठी अध्यक्ष, राज्यसभेसाठी सभापती, सर्वोच्च न्यायालयासाठी सरन्यायाधीश, उच्च न्यायालयासाठी मुख्य न्यायाधीश, संविधानाने स्थापन प्राधिकरणांसाठी राष्ट्रपती किंवा राज्यपाल",
                                            titleEn: "Institutional Definitions: Sec 2(h) 'Public Authority' (Bodies established by Constitution, Parliament, State Legislature, or Govt notification, including substantially financed NGOs); Sec 2(e) 'Competent Authority' (Speaker for Lok Sabha, CJI for SC, Chief Justice for HC, Governor/President)",
                                            chips: ["कलम २(h) सार्वजनिक प्राधिकरण", "मोठ्या प्रमाणावर अर्थसहाय्यित NGO", "कलम २(e) सक्षम अधिकारी", "सरन्यायाधीश / राज्यपाल"]
                                        },
                                        {
                                            id: "st_gb_mr01_01_04",
                                            titleMr: "कलम ४ - सार्वजनिक प्राधिकरणांची कर्तव्ये (सुओ-मोटो प्रकटीकरण): कलम ४(१)(a) सर्व अभिलेख संगणकीकृत व सुव्यवस्थित ठेवणे; कलम ४(१)(b) कायद्याच्या अंमलबजावणीपासून १२० दिवसांच्या आत प्राधिकरणाने स्वतःहून १७ बाबींची माहिती प्रसिद्ध करणे (जसे: संस्थेची रचना, अधिकार, कर्तव्ये, कर्मचाऱ्यांचे पगार, अंदाजपत्रक, योजना, PIO ची नावे); माहिती दरवर्षी अद्ययावत करणे बंधनकारक; यामुळे नागरिकांना अर्ज करण्याची गरज कमी पडते",
                                            titleEn: "Section 4 Proactive Disclosures: Sec 4(1)(a) Indexing & computerizing records; Sec 4(1)(b) Publish 17 manuals of information within 120 days (Organization structure, powers, employee salaries, budgets, PIO details); Mandatory annual updating",
                                            chips: ["कलम ४(१)(a) अभिलेख संगणकीकरण", "कलम ४(१)(b) १७ कलमी माहिती", "१२० दिवसांत प्रसिद्धी", "वार्षिक अद्ययावत करणे"]
                                        }
                                    ],
                                    sources: [
                                        { book: "The Right to Information Act, 2005", standard: "Bare Act", chapterRef: "Chapter I & II: Preliminary & Obligations of Public Authorities" },
                                        { book: "माहितीचा अधिकार व लोकसेवा हक्क", standard: "के. सागर", chapterRef: "प्रकरण १ व २: पार्श्वभूमी, व्याख्या व कलम ४" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mrti_c02",
                            code: "RTI02",
                            section: "A",
                            slug: "rti-procedure-pio-duties-timelines-sec-5-6-7",
                            nameMr: "RTI माहिती मिळवण्याची कार्यपद्धती, जन माहिती अधिकारी व कालमर्यादा (कलम ५, ६ व ७)",
                            nameEn: "RTI Procedure: Public Information Officers (PIO), Filing Requests & Timelines (Sec 5, 6, 7)",
                            name: "माहिती मिळवण्याची कार्यपद्धती व मुदत (Procedure & Timelines - Sec 5 to 7)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mrti_c02",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mrti_c01",
                            nextChapterId: "gb_mrti_c03",
                            metaDescriptionMr: "जन माहिती अधिकारी (PIO) पदनिर्देशन (कलम ५), माहिती मिळवण्यासाठी अर्ज (कलम ६ - कारण सांगण्याची गरज नाही, अर्ज हस्तांतरण ५ दिवस), आणि माहिती देण्याची कालमर्यादा (कलम ७ - सामान्य ३० दिवस, सहाय्यक PIO ३५ दिवस, जीवित व वैयक्तिक स्वातंत्र्य ४८ तास, मोफत माहिती).",
                            metaDescriptionEn: "In-depth review of RTI Execution: PIO Designation (Sec 5), Filing Requests (Sec 6 - No reasons required, Transfer to another authority within 5 days), Timelines u/s 7 (Normal 30 days, APIO 35 days, Life & Liberty 48 hours, Free information on delay, BPL exemptions).",
                            notesJsonPath: "/data/notes/group_b/mains/rti_rts/c02_rti_procedure_timelines.json",
                            quizTag: "gb_mrti_procedure_01",
                            tags: ["RTI Act 2005", "Section 5 PIO APIO", "Section 6 Filing Request", "Section 7 Timelines", "Life and Liberty 48 Hours", "30 Days Limit", "High-Weightage"],
                            searchKeywords: ["rti act section 5 public information officer apio", "rti section 6 filing request transfer within 5 days", "rti section 7 disposal of request timelines", "rti life and liberty 48 hours deadline", "normal timeline 30 days 35 days apio", "bpl exemption from rti fees free information on delay", "कलम ५ जन माहिती अधिकारी", "कलम ६ माहिती मिळवण्यासाठी अर्ज", "कलम ६(३) अर्ज हस्तांतरण ५ दिवस", "कलम ७ माहिती देण्याची मुदत", "जीवित व स्वातंत्र्य ४८ तास", "३० दिवसांची मुदत", "दारिद्र्यरेषेखालील BPL फी मुक्ती"],
                            topics: [
                                {
                                    id: "top_gb_mr02_01",
                                    nameMr: "PIO ची नियुक्ती, अर्ज दाखल करणे, ५ दिवसांत वर्ग करणे आणि ७ वेगवेगळ्या कालमर्यादा",
                                    nameEn: "PIO Designation, Application Formalities, Inter-Authority Transfer & Disposal Timelines",
                                    subtopics: [
                                        {
                                            id: "st_gb_mr02_01_01",
                                            titleMr: "कलम ५ - जन माहिती अधिकाऱ्यांची नियुक्ती: कायद्याच्या १०० दिवसांच्या आत प्रत्येक सार्वजनिक प्राधिकरणाने सर्व प्रशासकीय घटकांमध्ये 'केंद्रीय जन माहिती अधिकारी' (CPIO) किंवा 'राज्य जन माहिती अधिकारी' (SPIO) पदनिर्देशित करणे बंधनकारक; उप-जिल्हा किंवा तालुका स्तरावर अर्ज स्वीकारण्यासाठी 'सहाय्यक जन माहिती अधिकारी' (APIO) नियुक्ती",
                                            titleEn: "Section 5 PIO Designation: Public authorities must designate Central/State Public Information Officers (CPIO/SPIO) in all administrative units within 100 days; Designate Assistant PIOs (APIO) at sub-divisional/taluka levels",
                                            chips: ["कलम ५ PIO नियुक्ती", "१०० दिवसांत नियुक्ती", "CPIO व SPIO", "सहाय्यक माहिती अधिकारी APIO"]
                                        },
                                        {
                                            id: "st_gb_mr02_01_02",
                                            titleMr: "कलम ६ - माहिती मिळवण्यासाठी अर्ज: अर्ज लेखी किंवा इलेक्ट्रॉनिक स्वरूपात इंग्रजी, हिंदी किंवा राज्याच्या अधिकृत भाषेत विहित शुल्कासह करावा; कलम ६(२): अर्जदाराला माहिती मागण्याचे कोणतेही 'कारण' देण्याची किंवा वैयक्तिक तपशील देण्याची गरज नाही (केवळ संपर्काचा पत्ता पुरेसा); कलम ६(३) अर्ज हस्तांतरण: माहिती दुसऱ्या प्राधिकरणाशी संबंधित असल्यास अर्ज ५ दिवसांच्या आत संबंधित प्राधिकरणाकडे हस्तांतरित करून अर्जदारास तात्काळ कळवावे",
                                            titleEn: "Section 6 Filing Requests: Written or electronic request with fees; Sec 6(2): Applicant NOT required to state reason or personal details except contact address; Sec 6(3) Transfer: If held by another authority, transfer within 5 days and inform applicant immediately",
                                            chips: ["कलम ६ अर्ज पद्धत", "कारण सांगण्याची गरज नाही (कलम ६(२))", "अर्ज हस्तांतरण ५ दिवसांत (कलम ६(३))", "विहित शुल्क"]
                                        },
                                        {
                                            id: "st_gb_mr02_01_03",
                                            titleMr: "कलम ७ - माहिती देण्याची कालमर्यादा (MPSC चे आवडते संख्यात्मक कोष्टक): १) सामान्य प्रकरणे: अर्ज मिळाल्यापासून ३० दिवसांच्या आत माहिती देणे किंवा नकार कळवणे; २) सहाय्यक माहिती अधिकाऱ्याकडे (APIO) अर्ज दिला असल्यास: ३५ दिवस (५ दिवस अतिरिक्त); ३) व्यक्तीचे जीवित किंवा वैयक्तिक स्वातंत्र्य (Life or Personal Liberty) धोक्यात असल्यास: अर्ज मिळाल्यापासून ४८ तासांच्या आत माहिती देणे बंधनकारक; ४) अर्ज फेटाळल्यास नाकाराची कारणे, अपीलाची मुदत व अपीलीय प्राधिकरणाचा पत्ता देणे बंधनकारक",
                                            titleEn: "Section 7 Disposal Timelines: 1) Normal cases: 30 days; 2) Filed with APIO: 35 days (5 days added); 3) Matters involving Life or Personal Liberty: strictly 48 HOURS; 4) Rejection requires grounds, appeal period, and appellate authority details",
                                            chips: ["सामान्य मुदत ३० दिवस", "APIO कडे अर्ज ३५ दिवस", "जीवित व स्वातंत्र्य ४८ तास", "अर्जाचा निपटारा कलम ७"]
                                        },
                                        {
                                            id: "st_gb_mr02_01_04",
                                            titleMr: "कलम ७ मधील शुल्क व मोफत माहितीचे नियम: १) दारिद्र्यरेषेखालील व्यक्तींना (BPL - पिवळे रेशनकार्ड) सर्व अर्ज शुल्क व माहिती शुल्क पूर्णपणे मोफत; २) कलम ७(६): जर जन माहिती अधिकारी विहित मुदतीत (३० दिवस किंवा ४८ तास) माहिती देण्यास अयशस्वी ठरला, तर अर्जदाराला ती माहिती 'पूर्णपणे विनामूल्य' (Free of Cost) देणे बंधनकारक असते",
                                            titleEn: "Fees & Free Information Rules: Sec 7(5): BPL cardholders exempted from all application/copying fees; Sec 7(6): If PIO fails to supply information within statutory deadline (30 days/48 hrs), information MUST be provided FREE OF COST",
                                            chips: ["BPL दारिद्र्यरेषेखालील मोफत", "कलम ७(६) मुदत उलटल्यास मोफत माहिती", "छापणी शुल्क नियम"]
                                        }
                                    ],
                                    sources: [
                                        { book: "The Right to Information Act, 2005", standard: "Bare Act", chapterRef: "Chapter II: Sections 5, 6 and 7" },
                                        { book: "माहितीचा अधिकार व लोकसेवा हक्क", standard: "के. सागर", chapterRef: "प्रकरण ३: माहिती मिळवण्याची कार्यपद्धती" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mrti_c03",
                            code: "RTI03",
                            section: "A",
                            slug: "rti-exemptions-from-disclosure-sec-8-9-10-11",
                            nameMr: "माहिती प्रकटीकरणापासून सूट (कलम ८ व ९), अंशता प्रकटीकरण (कलम १०) व त्रयस्थ पक्ष माहिती (कलम ११)",
                            nameEn: "Exemptions from Disclosure (Sec 8 & 9), Severability (Sec 10) & Third Party Information (Sec 11)",
                            name: "माहिती देण्यापासून सूट व अपवाद (Exemptions & Third Party - Sec 8 to 11)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mrti_c03",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mrti_c02",
                            nextChapterId: "gb_mrti_c04",
                            metaDescriptionMr: "कलम ८(१) मधील १० अपवाद (देशाचे सार्वभौमत्व, न्यायालयाचा अवमान, विशेषाधिकार भंग, व्यावसायिक गुप्तता, विश्वासू नातेसंबंधातील माहिती, कॅबिनेट कागदपत्रे), कलम ८(२) लोकहित निकष, कलम ८(३) २० वर्षांचा नियम, कलम ९, कलम १०, आणि कलम ११ (त्रयस्थ पक्ष माहिती).",
                            metaDescriptionEn: "In-depth review of RTI Exemptions: Section 8(1) 10 exempt categories (Sovereignty, Contempt of court, Parliamentary privilege, Commercial confidence, Fiduciary, Cabinet papers), Sec 8(2) Public interest override, Sec 8(3) 20-year rule, Sec 10 Severability, and Sec 11 Third Party procedure.",
                            notesJsonPath: "/data/notes/group_b/mains/rti_rts/c03_rti_exemptions.json",
                            quizTag: "gb_mrti_exemptions_01",
                            tags: ["RTI Act 2005", "Section 8 Exemptions", "Public Interest Override", "Section 8 3 Twenty Years Rule", "Section 10 Severability", "Section 11 Third Party", "High-Weightage"],
                            searchKeywords: ["rti act section 8 1 exemptions 10 categories", "section 8 1 j personal information privacy", "section 8 2 public interest override official secrets act", "section 8 3 twenty years old events disclosure", "section 9 copyright infringement", "section 10 severability doctrine partial disclosure", "section 11 third party information notice within 5 days", "कलम ८ माहिती देण्यापासून सूट १० बाबी", "कलम ८(२) व्यापक लोकहित", "कलम ८(३) २० वर्षांचा नियम", "कलम १० अंशतः प्रकटीकरण", "कलम ११ त्रयस्थ पक्ष माहिती"],
                            topics: [
                                {
                                    id: "top_gb_mr03_01",
                                    nameMr: "कलम ८ चे १० अपवाद, २० वर्षांची मुदत, पृथक्करणीयता आणि त्रयस्थ पक्षाची सुनावणी",
                                    nameEn: "Ten Exemption Heads, Twenty-Year Sunsetting, Severability & Third-Party Procedures",
                                    subtopics: [
                                        {
                                            id: "st_gb_mr03_01_01",
                                            titleMr: "कलम ८(१) - माहिती प्रकटीकरणापासून सूट (१० प्रमुख अपवाद): १) ८(१)(a): भारताचे सार्वभौमत्व, अखंडता, सुरक्षा व सामरिक संबंधांना बाधा आणणारी माहिती; २) ८(१)(b): न्यायालयाने किंवा न्यायाधिकरणाने प्रसिद्ध करण्यास मनाई केलेली माहिती; ३) ८(१)(c): संसदेच्या किंवा राज्य विधिमंडळाच्या विशेषाधिकारांचा भंग करणारी माहिती; ४) ८(१)(d): व्यावसायिक गुप्तता (Commercial Confidence), बौद्धिक संपदा; ५) ८(१)(e): विश्वासू नातेसंबंधात (Fiduciary Relationship) मिळालेली माहिती; ६) ८(१)(f): परकीय सरकारकडून मिळालेली गोपनीय माहिती; ७) ८(१)(g): व्यक्तीचे जीवित धोक्यात आणणारी किंवा कायद्याची अंमलबजावणी रोखणारी; ८) ८(१)(h): गुन्हेगारांचा तपास किंवा खटला चालवण्यात अडथळा आणणारी माहिती; ९) ८(१)(i): मंत्रिमंडळाची कागदपत्रे (Cabinet Papers - निर्णय होईपर्यंत गुप्त, मात्र निर्णयानंतर खुली); १०) ८(१)(j): वैयक्तिक माहिती (Personal Information - ज्याचा सार्वजनिक हिताशी संबंध नाही)",
                                            titleEn: "Section 8(1) Ten Exemption Heads: 8(1)(a) Sovereignty & National Security; (b) Contempt of Court; (c) Parliamentary Privilege breach; (d) Commercial Confidence & Intellectual Property; (e) Fiduciary Relationship; (f) Foreign Govt secrets; (g) Life safety/law enforcement; (h) Investigation impediment; (i) Cabinet Papers (Protected till decision taken); (j) Personal information invading privacy",
                                            chips: ["कलम ८(१) १० अपवाद", "८(१)(a) राष्ट्रीय सुरक्षा", "८(१)(c) विशेषाधिकार", "८(१)(e) विश्वासू नातेसंबंध", "८(१)(i) मंत्रिमंडळ कागदपत्रे", "८(१)(j) वैयक्तिक माहिती"]
                                        },
                                        {
                                            id: "st_gb_mr03_01_02",
                                            titleMr: "कलम ८(२) लोकहित अधिरोहण आणि कलम ८(३) २० वर्षांचा नियम: १) कलम ८(२): शासकीय गुप्तता कायदा, १९२३ (Official Secrets Act 1923) मधील कोणत्याही तरतुदीपेक्षा किंवा कलम ८(१) मधील अपवादांपेक्षा 'जर माहिती उघड केल्याने होणारा सार्वजनिक फायदा हा गुप्तता राखण्यापेक्षा मोठा असेल, तर ती माहिती उघड करावीच लागेल'; २) कलम ८(३) २० वर्षांचा नियम: कोणतीही घटना घडल्याच्या तारखेपासून २० वर्षांनंतर कलम ८(१)(a), (c) आणि (i) वगळता इतर सर्व अपवादांखालील माहिती उघड करणे अनिवार्य असते",
                                            titleEn: "Public Interest Override & 20-Year Rule: Sec 8(2) Public Interest overrides Official Secrets Act 1923 and Sec 8(1) exemptions; Sec 8(3): Information older than 20 years must be disclosed, except clauses (a), (c), and (i)",
                                            chips: ["कलम ८(२) व्यापक लोकहित", "शासकीय गुप्तता कायदा १९२३ वर वरचढ", "कलम ८(३) २० वर्षांचा नियम", "२० वर्षांनंतर माहिती खुली"]
                                        },
                                        {
                                            id: "st_gb_mr03_01_03",
                                            titleMr: "कलम ९ (कॉपीराइट) आणि कलम १० (अंशतः प्रकटीकरण / Doctrine of Severability): कलम ९: केंद्र किंवा राज्याव्यतिरिक्त इतर कोणत्याही व्यक्तीच्या कॉपीराइटचा (स्वामित्व हक्काचा) भंग होत असल्यास माहिती नाकारता येते; कलम १०: जर एखाद्या दस्तऐवजातील काही भाग कलम ८ अन्वये सूट मिळालेला असेल, परंतु सूट मिळालेला भाग वगळून (Severing) उर्वरित माहिती देता येणे शक्य असेल, तर तेवढीच माहिती अर्जदाराला दिली पाहिजे",
                                            titleEn: "Section 9 (Copyright) & Section 10 (Doctrine of Severability): Sec 9 rejects requests infringing non-state copyright; Sec 10 allows partial disclosure by redacting/severing exempt portions from the non-exempt record",
                                            chips: ["कलम ९ कॉपीराइट भंग नकार", "कलम १० अंशतः प्रकटीकरण (Severability)", "सूट मिळालेला भाग वगळून माहिती"]
                                        },
                                        {
                                            id: "st_gb_mr03_01_04",
                                            titleMr: "कलम ११ - त्रयस्थ पक्ष माहिती (Third Party Information): माहिती जर एखाद्या तिसऱ्या व्यक्तीशी संबंधित असेल किंवा तिने ती गोपनीय म्हणून पुरवली असेल, तर: १) PIO ने अर्ज आल्यापासून ५ दिवसांच्या आत त्रयस्थ पक्षाला लेखी नोटीस द्यावी; २) त्रयस्थ पक्षाला आपले म्हणणे मांडण्यासाठी नोटीस मिळाल्यापासून १० दिवसांची मुदत असते; ३) PIO ने अर्ज मिळाल्यापासून ४० दिवसांच्या आत अंतिम निर्णय घ्यावा",
                                            titleEn: "Section 11 Third Party Information: If information concerns a 3rd party who treated it confidential: 1) PIO issues notice within 5 days; 2) 3rd party gets 10 days to make representation; 3) PIO must make final decision within 40 days of receipt",
                                            chips: ["कलम ११ त्रयस्थ पक्ष माहिती", "५ दिवसांत त्रयस्थ पक्षाला नोटीस", "१० दिवसांत म्हणणे मांडणे", "४० दिवसांत अंतिम निर्णय"]
                                        }
                                    ],
                                    sources: [
                                        { book: "The Right to Information Act, 2005", standard: "Bare Act", chapterRef: "Chapter II: Sections 8, 9, 10, 11" },
                                        { book: "माहितीचा अधिकार व लोकसेवा हक्क", standard: "के. सागर", chapterRef: "प्रकरण ४: माहिती देण्यापासून सूट व अपवाद" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mrti_c04",
                            code: "RTI04",
                            section: "A",
                            slug: "central-and-state-information-commissions-sec-12-to-17",
                            nameMr: "केंद्रीय व राज्य माहिती आयोग: रचना, नियुक्ती, सेवाशर्ती आणि २०१९ ची सुधारणा (कलम १२ ते १७)",
                            nameEn: "Central & State Information Commissions: Composition, Appointment, Removal & 2019 Amendments (Sec 12 to 17)",
                            name: "केंद्रीय व राज्य माहिती आयोग (CIC & SIC - Sec 12 to 17)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mrti_c04",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mrti_c03",
                            nextChapterId: "gb_mrti_c05",
                            metaDescriptionMr: "केंद्रीय माहिती आयोग (कलम १२-१४), राज्य माहिती आयोग (कलम १५-१७ - महाराष्ट्र राज्य मुख्य माहिती आयोग, खंडपीठे), नियुक्ती समित्या (पंतप्रधान/मुख्यमंत्री अध्यक्ष), पदावरून दूर करणे, आणि २०१९ चा RTI सुधारणा कायदा (कार्यकाळ व पगार केंद्राच्या मर्जीवर).",
                            metaDescriptionEn: "In-depth review of Commissions: CIC (Sec 12-14) & SIC (Sec 15-17), Composition (1 Chief + max 10 ICs), Appointment panels (PM vs CM), Removal through SC inquiry (Sec 14/17), and Landmark 2019 RTI Amendment Act shifting tenure & salaries to Central Govt rules.",
                            notesJsonPath: "/data/notes/group_b/mains/rti_rts/c04_information_commissions.json",
                            quizTag: "gb_mrti_commissions_01",
                            tags: ["RTI Act 2005", "Central Information Commission Sec 12", "State Information Commission Sec 15", "Appointment Committee", "RTI Amendment 2019", "High-Weightage"],
                            searchKeywords: ["central information commission section 12 13 14", "state information commission section 15 16 17", "appointment committee prime minister chief minister leader of opposition", "removal of information commissioner supreme court inquiry", "rti amendment act 2019 tenure salary central government rules", "केंद्रीय माहिती आयोग कलम १२", "राज्य माहिती आयोग कलम १५", "माहिती आयुक्त निवड समिती", "RTI सुधारणा कायदा २०१९ कार्यकाळ पगार केंद्र नियम", "महाराष्ट्र माहिती आयोग खंडपीठे"],
                            topics: [
                                {
                                    id: "top_gb_mr04_01",
                                    nameMr: "CIC व SIC ची रचना, निवड समित्या, पदमुक्ती प्रक्रिया आणि २०१९ च्या दुरुस्त्या",
                                    nameEn: "Commission Structures, Selection Collegiums, Supreme Court Inquiries & 2019 Sittings",
                                    subtopics: [
                                        {
                                            id: "st_gb_mr04_01_01",
                                            titleMr: "केंद्रीय माहिती आयोग (CIC - कलम १२ व १३): रचना: १ मुख्य माहिती आयुक्त (CIC) + जास्तीत जास्त १० माहिती आयुक्त (ICs); नियुक्ती राष्ट्रपतींद्वारे ३ सदस्यीय समितीच्या शिफारशीने होते: १) पंतप्रधान (अध्यक्ष), २) लोकसभेतील विरोधी पक्षनेता, ३) पंतप्रधानांनी नामनिर्देशित केलेला केंद्रीय कॅबिनेट मंत्री; सार्वजनिक जीवनातील विधी, विज्ञान, तंत्रज्ञान, समाजसेवा, पत्रकारिता क्षेत्रातील निष्णात व्यक्ती असावी; खासदार किंवा आमदार नसावा",
                                            titleEn: "Central Information Commission (CIC - Sec 12-13): 1 Chief IC + max 10 Information Commissioners; Appointed by President on recommendation of 3-member committee (PM as Chair, Leader of Opposition in Lok Sabha, Union Cabinet Minister nominated by PM)",
                                            chips: ["कलम १२ केंद्रीय माहिती आयोग", "१ मुख्य + कमाल १० माहिती आयुक्त", "राष्ट्रपतींद्वारे नियुक्ती", "निवड समिती (पंतप्रधान अध्यक्ष)"]
                                        },
                                        {
                                            id: "st_gb_mr04_01_02",
                                            titleMr: "राज्य माहिती आयोग (SIC - कलम १५ व १६): रचना: १ राज्य मुख्य माहिती आयुक्त + जास्तीत जास्त १० राज्य माहिती आयुक्त; नियुक्ती राज्यपालांद्वारे ३ सदस्यीय समितीच्या शिफारशीने होते: १) मुख्यमंत्री (अध्यक्ष), २) विधानसभेतील विरोधी पक्षनेता, ३) मुख्यमंत्र्यांनी नामनिर्देशित केलेला एक कॅबिनेट मंत्री; महाराष्ट्र राज्य माहिती आयोगाचे मुख्य पीठ मुंबई येथे असून अमरावती, छत्रपती संभाजीनगर, कोकण, नागपूर, नाशिक, पुणे येथे खंडपीठे आहेत",
                                            titleEn: "State Information Commission (SIC - Sec 15-16): 1 State Chief IC + max 10 State ICs; Appointed by Governor on recommendation of 3-member committee (CM as Chair, Leader of Opposition in Legislative Assembly, State Cabinet Minister nominated by CM); Maharashtra SIC Benches",
                                            chips: ["कलम १५ राज्य माहिती आयोग", "राज्यपालांद्वारे नियुक्ती", "निवड समिती (मुख्यमंत्री अध्यक्ष)", "महाराष्ट्र खंडपीठे (पुणे, नाशिक, नागपूर)"]
                                        },
                                        {
                                            id: "st_gb_mr04_01_03",
                                            titleMr: "माहिती अधिकार सुधारणा कायदा २०१९ (MPSC हमखास विचारते): मूळ २००५ कायद्यात आयुक्तांचा कार्यकाळ ५ वर्षे किंवा वयाची ६५ वर्षे निश्चित होता आणि पगार निवडणूक आयुक्तांइतका होता; २०१९ च्या सुधारणेने: १) मुख्य माहिती आयुक्त व इतर आयुक्तांचा कार्यकाळ 'केंद्र सरकार ठरवेल तितका' असेल (सध्या नियमावलीत ३ वर्षे निश्चित केला आहे); २) त्यांचे पगार व सेवाशर्ती ठरवण्याचे सर्व अधिकार केंद्र सरकारने स्वतःकडे घेतले; पुनर्नियुक्तीस बंदी कायम",
                                            titleEn: "RTI Amendment Act 2019: Substituted fixed 5-year tenure with 'Term prescribed by Central Government' (Current rules set it to 3 years or 65 years age); Salaries, allowances and service conditions also delegated entirely to Central Govt rules; No reappointment",
                                            chips: ["RTI सुधारणा कायदा २०१९", "कार्यकाळ केंद्र सरकार ठरवेल (३ वर्षे)", "पगार केंद्र सरकार ठरवेल", "पुनर्नियुक्तीस बंदी"]
                                        },
                                        {
                                            id: "st_gb_mr04_01_04",
                                            titleMr: "पदावरून दूर करण्याची प्रक्रिया (कलम १४ व १७): केवळ 'सिद्ध झालेली गैरवर्तणूक' (Misbehaviour) किंवा 'अकार्यक्षमता' (Incapacity) या कारणावरून; राष्ट्रपतींनी (राज्यासाठी राज्यपालांनी) हे प्रकरण चौकशीसाठी सर्वोच्च न्यायालयाकडे पाठवावे लागते; सर्वोच्च न्यायालयाच्या चौकशी अहवालात दोषी आढळल्यानंतरच राष्ट्रपती/राज्यपाल त्यांना पदावरून दूर करू शकतात",
                                            titleEn: "Removal Process (Sec 14 & 17): On grounds of proved misbehaviour or incapacity only after Supreme Court inquiry on presidential/gubernatorial reference; Binding SC report required for removal",
                                            chips: ["कलम १४ व १७ पदमुक्ती", "सर्वोच्च न्यायालय चौकशी अनिवार्य", "सिद्ध झालेली गैरवर्तणूक", "राष्ट्रपती/राज्यपाल अधिकार"]
                                        }
                                    ],
                                    sources: [
                                        { book: "The Right to Information Act, 2005", standard: "Bare Act", chapterRef: "Chapter III & IV: The Central & State Information Commissions" },
                                        { book: "The Right to Information (Amendment) Act, 2019", standard: "Gazette of India", chapterRef: "Act No. 24 of 2019" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mrti_c05",
                            code: "RTI05",
                            section: "A",
                            slug: "rti-appeals-penalties-jurisdiction-sec-18-to-31",
                            nameMr: "अपील (कलम १९), शास्ती/दंड (कलम २०), न्यायालयांना मनाई (कलम २३) व नियम",
                            nameEn: "RTI Inquiries (Sec 18), Appeals (Sec 19), Penalties (Sec 20) & Bar of Jurisdiction (Sec 23)",
                            name: "तक्रार, अपील, शास्ती व अधिकारक्षेत्र (Inquiries, Appeals & Penalties - Sec 18 to 31)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mrti_c05",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mrti_c04",
                            nextChapterId: "gb_mrti_c06",
                            metaDescriptionMr: "कलम १८ (आयोगाचे तक्रार चौकशी अधिकार, दिवाणी न्यायालयाचे अधिकार), कलम १९ (प्रथम अपील ३० दिवस, द्वितीय अपील ९० दिवस), कलम २० (दररोज २५० रु. कमाल २५,००० रु. शास्ती/दंड), कलम २३ (न्यायालयांना मनाई), आणि कलम २४ (सूट मिळालेल्या सुरक्षा संस्था).",
                            metaDescriptionEn: "In-depth review of RTI Enforcement: Sec 18 Complaints & Civil Court powers, Sec 19 Appeals (1st Appeal 30 days to senior officer, 2nd Appeal 90 days to Commission, burden of proof on PIO), Sec 20 Penalties (Rs 250/day up to max Rs 25,000 & disciplinary action), Sec 23 Bar of Court Jurisdiction, and Sec 24 Exempted Security Agencies (2nd Schedule).",
                            notesJsonPath: "/data/notes/group_b/mains/rti_rts/c05_rti_appeals_penalties.json",
                            quizTag: "gb_mrti_appeals_01",
                            tags: ["RTI Act 2005", "Section 18 Complaints", "Section 19 First Second Appeal", "Section 20 Penalty 25000", "Section 23 Bar of Courts", "Section 24 Security Agencies", "High-Weightage"],
                            searchKeywords: ["rti section 18 complaints civil court powers", "rti section 19 first appeal 30 days second appeal 90 days", "burden of proof lies on pio section 19 5", "rti section 20 penalty rs 250 per day max 25000", "section 23 bar of jurisdiction of courts", "section 24 exempted intelligence and security organizations 2nd schedule", "कलम १८ तक्रार दिवाणी न्यायालय अधिकार", "कलम १९ प्रथम अपील ३० दिवस द्वितीय अपील ९० दिवस", "कलम २० दंड दररोज २५० कमाल २५००० रु", "कलम २३ न्यायालयांच्या अधिकारक्षेत्रास मनाई", "कलम २४ सुरक्षा संस्था गुप्तवार्ता संघटना"],
                            topics: [
                                {
                                    id: "top_gb_mr05_01",
                                    nameMr: "आयोगाचे अधिकार, प्रथम व द्वितीय अपील, दंड आकारणी (कलम २०) आणि न्यायिक निर्बंध",
                                    nameEn: "Inquiry Invocations, Dual Appeal Mechanics, Statutory Fines & Jurisdictional Immunity",
                                    subtopics: [
                                        {
                                            id: "st_gb_mr05_01_01",
                                            titleMr: "कलम १८ - आयोगाचे तक्रार चौकशी अधिकार: जर PIO ची नियुक्ती झाली नसेल, माहिती नाकारली असेल, किंवा अवाजवी फी मागितली असेल, तर नागरिक थेट आयोगाकडे कलम १८ अन्वये तक्रार करू शकतात; चौकशी करताना केंद्रीय व राज्य माहिती आयोगाला 'दिवाणी न्यायालयाचे' (Civil Court समन्स काढणे, कागदपत्रे तपासणे) अधिकार असतात; कलम १८(४): कोणतीही शासकीय संस्था आयोगापासून आपले दस्तऐवज लपवून ठेवू शकत नाही",
                                            titleEn: "Section 18 Inquiries & Civil Court Powers: Commission can receive direct complaints if PIO not appointed or information refused; Commission enjoys Civil Court powers (Summoning witnesses, requisitioning records); Sec 18(4) allows inspection of any record held by public authority",
                                            chips: ["कलम १८ तक्रार अधिकार", "दिवाणी न्यायालयाचे अधिकार (Civil Court)", "समन्स व कागदपत्रे तपासणी"]
                                        },
                                        {
                                            id: "st_gb_mr05_01_02",
                                            titleMr: "कलम १९ - अपीलांची कार्यपद्धती (MPSC चे आवडते कलम): १) प्रथम अपील [कलम १९(१)]: विहित मुदतीत माहिती न मिळाल्यास किंवा निर्णयाविरुद्ध ३० दिवसांच्या आत सार्वजनिक प्राधिकरणातील वरिष्ठ अधिकाऱ्याकडे (First Appellate Authority - FAA) करावे; प्रथम अपीलाचा निकाल ३० दिवसांत (अपवादात्मक परिस्थितीत ४५ दिवसांत) द्यावा लागतो; २) द्वितीय अपील [कलम १९(३)]: प्रथम अपीलाच्या निर्णयानंतर ९० दिवसांच्या आत थेट केंद्रीय किंवा राज्य माहिती आयोगाकडे करावे; कलम १९(५): माहिती देण्याचा नकार कसा योग्य होता हे सिद्ध करण्याची जबाबदारी (Burden of Proof) पूर्णपणे 'जन माहिती अधिकाऱ्यावर' (PIO) असते; आयोगाचा निर्णय अंतिम व बंधनकारक असतो",
                                            titleEn: "Section 19 Appeals Hierarchy: First Appeal (Within 30 days to Senior Officer FAA, disposed in 30-45 days); Second Appeal (Within 90 days to Central/State Information Commission); Sec 19(5): Burden of Proof that denial was justified lies strictly on the PIO; Commission's decision is final and binding",
                                            chips: ["कलम १९ अपील", "प्रथम अपील ३० दिवसांत (वरिष्ठ अधिकारी)", "प्रथम अपील निकाल ३०-४५ दिवस", "द्वितीय अपील ९० दिवसांत (आयोग)", "सिद्ध करण्याची जबाबदारी PIO वर (कलम १९(५))"]
                                        },
                                        {
                                            id: "st_gb_mr05_01_03",
                                            titleMr: "कलम २० - शास्ती / दंड (Penalties): जर PIO ने विनाकारण अर्ज स्वीकारण्यास नकार दिला, मुदतीत माहिती दिली नाही, दुर्बुद्धीने खोटी/अपूर्ण माहिती दिली किंवा माहिती नष्ट केली, तर: १) माहिती देईपर्यंत दररोज २५० रुपये दंड आकारला जातो; २) एकूण दंडाची कमाल मर्यादा २५,००० रुपये असते; ३) दंडाची रक्कम PIO च्या पगारातून कापली जाते; ४) याव्यतिरिक्त PIO विरुद्ध विभागीय चौकशी व शिस्तभंगाची कारवाई (Disciplinary Action) करण्याची शिफारस आयोग करू शकतो; दंड आकारण्यापूर्वी PIO ला बाजू मांडण्याची संधी दिली जाते",
                                            titleEn: "Section 20 Statutory Penalties: If PIO refuses, delays, gives misleading or destroys information without reasonable cause: 1) Fine of Rs 250 per day until information is provided; 2) Maximum penalty capped at Rs 25,000; 3) Deducted from personal salary; 4) Commission can recommend service disciplinary action",
                                            chips: ["कलम २० शास्ती / दंड", "दररोज २५० रुपये दंड", "कमाल मर्यादा २५,००० रुपये", "पगारातून कपात", "शिस्तभंगाची कारवाई"]
                                        },
                                        {
                                            id: "st_gb_mr05_01_04",
                                            titleMr: "कलम २१ ते २४ मधील महत्त्वाच्या तरतुदी: १) कलम २१: सद्भावनेने केलेल्या कृतीस संरक्षण; २) कलम २२: या कायद्याचा इतर सर्व कायद्यांवर (शासकीय गुप्तता कायद्यासह) वरचढ प्रभाव (Overriding effect) राहील; ३) कलम २३: कोणत्याही न्यायालयाला या अधिनियमान्वये केलेल्या आदेशाविरुद्ध दावा दाखल करून घेण्याचा अधिकार असणार नाही (न्यायालयांना मनाई); ४) कलम २४: दुसऱ्या अनुसूचीतील सुरक्षा व गुप्तवार्ता संस्थांना हा कायदा लागू नाही (उदा. IB, RAW, CBI इ.; अपवाद: भ्रष्टाचाराचे आणि मानवाधिकार उल्लंघनाचे आरोप असल्यास माहिती देणे बंधनकारक, मानवाधिकारासाठी आयोगाची संमती आवश्यक)",
                                            titleEn: "Sections 21-24 Safeguards & Immunities: Sec 21 Good faith protection; Sec 22 Overriding effect over Official Secrets Act; Sec 23 Bar of Court Jurisdiction (No civil court can entertain any suit); Sec 24 Exempts intelligence & security organizations in 2nd Schedule (Except corruption & human rights violations)",
                                            chips: ["कलम २२ कायद्याचा वरचढ प्रभाव", "कलम २३ न्यायालयांना मनाई", "कलम २४ सुरक्षा संस्था (IB, RAW, CBI)", "भ्रष्टाचार व मानवाधिकार उल्लंघन अपवाद"]
                                        }
                                    ],
                                    sources: [
                                        { book: "The Right to Information Act, 2005", standard: "Bare Act", chapterRef: "Chapter V: Sections 18, 19, 20, 22, 23, 24" },
                                        { book: "माहितीचा अधिकार व लोकसेवा हक्क", standard: "के. सागर", chapterRef: "प्रकरण ५: तक्रार, अपील, शास्ती व अपवाद" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग B — महाराष्ट्र लोकसेवा हक्क अधिनियम, २०१५ (RTS Act 2015: प्रकरणे ६ ते १०)
                        // =========================================================================
                        {
                            id: "gb_mrts_c06",
                            code: "RTS01",
                            section: "B",
                            slug: "rts-2015-background-enactment-and-definitions-sec-1-to-2",
                            nameMr: "RTS २०१५: पार्श्वभूमी, उद्देश, व्याप्ती व व्याख्या (कलम १ व २)",
                            nameEn: "Maharashtra RTS 2015: Background, Preamble, Enactment & Definitions (Sec 1 & 2)",
                            name: "RTS पार्श्वभूमी व व्याख्या (RTS Genesis & Sec 2)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mrts_c06",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mrti_c05",
                            nextChapterId: "gb_mrts_c07",
                            metaDescriptionMr: "महाराष्ट्र लोकसेवा हक्क अधिनियम २०१५ ची पार्श्वभूमी, अध्यादेश (२८ एप्रिल २०१५), विधिमंडळ मंजुरी (२१ ऑगस्ट २०१५ लागू), कलम २ मधील व्याख्या (पात्र व्यक्ती, पदनिर्देशित अधिकारी, सार्वजनिक प्राधिकरण, लोकसेवा).",
                            metaDescriptionEn: "In-depth review of Maharashtra Right to Public Services Act 2015: Historical genesis, Ordinance promulgation (28 April 2015), Enactment on 21 August 2015 (Act No. 31 of 2015), Preamble, and Section 2 Definitions (Eligible person, Designated Officer, Public authority, Public services).",
                            notesJsonPath: "/data/notes/group_b/mains/rti_rts/c06_rts_background_definitions.json",
                            quizTag: "gb_mrts_definitions_01",
                            tags: ["RTS Act 2015", "Maharashtra Right to Public Services", "Ordinance 28 April 2015", "Act No 31 of 2015", "Section 2 Definitions", "Designated Officer", "High-Weightage"],
                            searchKeywords: ["maharashtra right to public services act 2015 background preamble", "rts act enactment 21 august 2015 ordinance 28 april 2015", "act no 31 of 2015 maharashtra", "section 2 definitions eligible person designated officer public services", "transparent efficient timely service delivery", "महाराष्ट्र लोकसेवा हक्क अधिनियम २०१५", "अध्यादेश २८ एप्रिल २०१५", "२१ ऑगस्ट २०१५ लागू कायदा क्र ३१", "कलम २ व्याख्या पात्र व्यक्ती", "पदनिर्देशित अधिकारी लोकसेवा"],
                            topics: [
                                {
                                    id: "top_gb_ms06_01",
                                    nameMr: "RTS कायद्याची पार्श्वभूमी, वैधानिक तारखा, उद्देश आणि कलम २ मधील व्याख्या",
                                    nameEn: "Legislative Context, Ordinance Dates, Preamble & Section 2 Lexicon",
                                    subtopics: [
                                        {
                                            id: "st_gb_ms06_01_01",
                                            titleMr: "पार्श्वभूमी व वैधानिक तारखा: १) नागरिकांना पारदर्शक, तत्पर व मुदतीत लोकसेवा पुरवण्यासाठी; २) सर्वप्रथम राज्यपाल सी. विद्यासागर राव यांनी 'महाराष्ट्र लोकसेवा हक्क अध्यादेश २०१५' जारी केला: २८ एप्रिल २०१५; ३) महाराष्ट्र विधिमंडळाने (विधानसभा व विधानपरिषद) विधेयक मंजूर केले आणि राज्यपालांची स्वाक्षरी होऊन कायद्यात रूपांतर झाले: २१ ऑगस्ट २०१५ (महाराष्ट्र अधिनियम क्र. ३१/२०१५); ४) कायदा लागू होण्याची पूर्वलक्षी तारीख: २८ एप्रिल २०१५ पासून लागू मानण्यात आला",
                                            titleEn: "Legislative Chronology: Enacted to provide transparent, efficient and timely public services; Promulgated via Governor Ordinance on 28 April 2015; Passed by Legislature and enacted on 21 August 2015 (Maharashtra Act No. 31 of 2015); Deemed enforced retrospectively from 28 April 2015",
                                            chips: ["महाराष्ट्र अधिनियम क्र. ३१/२०१५", "अध्यादेश २८ एप्रिल २०१५", "कायदा संमत २१ ऑगस्ट २०१५", "पारदर्शक व तत्पर लोकसेवा"]
                                        },
                                        {
                                            id: "st_gb_ms06_01_02",
                                            titleMr: "कायद्याचा उद्देश व वैशिष्ट्ये: नागरिकांना त्यांचे हक्क म्हणून पारदर्शक, गतिमान, कार्यक्षम व वेळेत लोकसेवा मिळण्याची हमी देणे; विलंब झाल्यास जबाबदार अधिकाऱ्यांवर दंड आकारणे; प्रशासकीय कामकाजात ई-प्रशासनाचा (E-Governance) अनिवार्य वापर करणे",
                                            titleEn: "Preamble & Statutory Purpose: Delivery of notified public services to citizens as a matter of right within specified time limits; Fixing accountability on erring civil servants via statutory penalties; Mandatory induction of e-governance mechanisms",
                                            chips: ["हक्काने लोकसेवा", "विहित वेळेत सेवा", "अधिकारी उत्तरदायित्व", "ई-प्रशासन प्रणाली"]
                                        },
                                        {
                                            id: "st_gb_ms06_01_03",
                                            titleMr: "कलम २ - महत्त्वाच्या व्याख्या: १) कलम २(c) 'पात्र व्यक्ती' (Eligible Person): विहित वेळेत लोकसेवा मिळवण्यासाठी पात्र असलेली कोणतीही व्यक्ती; २) कलम २(e) 'पदनिर्देशित अधिकारी' (Designated Officer): अधिसूचित लोकसेवा देण्यासाठी प्रत्येक कार्यालयात कलम ३ अन्वये अधिसूचित केलेला शासकीय अधिकारी; ३) कलम २(n) 'लोकसेवा' (Public Services): कायद्यान्वये नागरिकांना देण्यासाठी शासनाने अधिसूचित केलेली कोणतीही शासकीय सेवा (जसे दाखले, परवाने, नोंदी)",
                                            titleEn: "Section 2 Core Definitions: Sec 2(c) 'Eligible Person' (Person entitled to receive notified service); Sec 2(e) 'Designated Officer' (Civil servant notified u/s 3 to deliver public service); Sec 2(n) 'Public Services' (Services notified by State Govt from time to time: certificates, licenses, revenue extracts)",
                                            chips: ["कलम २(c) पात्र व्यक्ती", "कलम २(e) पदनिर्देशित अधिकारी", "कलम २(n) लोकसेवा", "अधिसूचित शासकीय सेवा"]
                                        },
                                        {
                                            id: "st_gb_ms06_01_04",
                                            titleMr: "इतर व्याख्या: कलम २(a) 'आयोग' (महाराष्ट्र राज्य लोकसेवा हक्क आयोग); कलम २(b) 'मुख्य आयुक्त' (राज्य मुख्य लोकसेवा हक्क आयुक्त); कलम २(f) 'प्रथम अपीलीय अधिकारी'; कलम २(g) 'द्वितीय अपीलीय अधिकारी'; कलम २(k) 'विहित कालमर्यादा' (लोकसेवा देण्यासाठी कलम ३ अन्वये अधिसूचित केलेली कामकाजाच्या दिवसांची मुदत)",
                                            titleEn: "Ancillary Definitions: Sec 2(a) 'Commission', Sec 2(b) 'Chief Commissioner', Sec 2(f) 'First Appellate Authority', Sec 2(g) 'Second Appellate Authority', Sec 2(k) 'Stipulated Time Limit' (Notified working days deadline)",
                                            chips: ["कलम २(a) आयोग", "कलम २(f) प्रथम अपीलीय अधिकारी", "कलम २(g) द्वितीय अपीलीय अधिकारी", "कलम २(k) विहित कालमर्यादा"]
                                        }
                                    ],
                                    sources: [
                                        { book: "महाराष्ट्र लोकसेवा हक्क अधिनियम, २०१५", standard: "Bare Act", chapterRef: "प्रकरण १: प्राथमिक - कलम १ व २" },
                                        { book: "माहितीचा अधिकार व लोकसेवा हक्क", standard: "के. सागर", chapterRef: "प्रकरण ६: RTS २०१५ पार्श्वभूमी व व्याख्या" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mrts_c07",
                            code: "RTS02",
                            section: "B",
                            slug: "rts-notification-of-services-and-procedure-sec-3-to-7",
                            nameMr: "RTS लोकसेवांचे अधिसूचना, पदनिर्देशित अधिकारी व कार्यपद्धती (कलम ३ ते ७)",
                            nameEn: "RTS Services Notification, Designated Officers, Application Procedures & Receipts (Sec 3 to 7)",
                            name: "लोकसेवा, अधिकारी व कार्यपद्धती (Service Delivery Procedures - Sec 3 to 7)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mrts_c07",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mrts_c06",
                            nextChapterId: "gb_mrts_c08",
                            metaDescriptionMr: "कलम ३ (सार्वजनिक सेवा, कालमर्यादा व अधिकाऱ्यांची अधिसूचना), कलम ४ (माहिती फलक लावणे), कलम ५ (मुदतीत सेवा मिळवण्याचा अधिकार), कलम ६ (पावती देणे, युनिक ॲप्लिकेशन नंबर), आणि कलम ७ (सेवा देणे किंवा नकार कळवणे).",
                            metaDescriptionEn: "In-depth review of RTS Mechanics: Section 3 (Notification of public services, timelines, first/second appellate authorities), Section 4 (Notice board displays), Section 5 (Right to obtain services within time limit), Section 6 (Mandatory receipt & Unique Application Number), and Section 7 (Disposal/rejection).",
                            notesJsonPath: "/data/notes/group_b/mains/rti_rts/c07_rts_procedure_notifications.json",
                            quizTag: "gb_mrts_procedure_01",
                            tags: ["RTS Act 2015", "Section 3 Notification of Services", "Section 4 Display Boards", "Section 5 Right to Public Services", "Section 6 Application Receipt", "Section 7 Disposal", "High-Weightage"],
                            searchKeywords: ["rts act section 3 notification of public services stipulated time limit", "rts act section 4 display on notice board website", "rts act section 5 right to obtain public service within time", "rts act section 6 mandatory acknowledgment receipt unique application number", "section 7 rejection of application reasons in writing", "कलम ३ लोकसेवा अधिसूचना कालमर्यादा", "कलम ४ माहिती फलकावर प्रसिद्धी", "कलम ५ सेवा मिळवण्याचा नागरिकाचा अधिकार", "कलम ६ पोचपावती युनिक ॲप्लिकेशन नंबर", "कलम ७ सेवेचा निपटारा नकार लेखी"],
                            topics: [
                                {
                                    id: "top_gb_ms07_01",
                                    nameMr: "लोकसेवांची अधिसूचना, माहिती फलक, पोचपावतीचे नियम आणि अर्ज मंजुरी/नकार",
                                    nameEn: "Service Notification Mandates, Display Compliance, Application Tracking & Rejection Protocols",
                                    subtopics: [
                                        {
                                            id: "st_gb_ms07_01_01",
                                            titleMr: "कलम ३ - लोकसेवा, अधिकारी व मुदतीची अधिसूचना: कायद्याच्या अंमलबजावणीपासून ३ महिन्यांच्या आत प्रत्येक सार्वजनिक प्राधिकरणाने राजपत्रात (गॅझेट) खालील बाबी अधिसूचित करणे बंधनकारक आहे: १) पुरवण्यात येणाऱ्या सर्व लोकसेवांची यादी, २) पदनिर्देशित अधिकारी (Designated Officer), ३) विहित कालमर्यादा (कामकाजाचे दिवस), ४) प्रथम अपीलीय अधिकारी, ५) द्वितीय अपीलीय अधिकारी",
                                            titleEn: "Section 3 Notification: Every public authority must notify in Official Gazette within 3 months: 1) List of public services, 2) Designated Officers, 3) Stipulated time limits (working days), 4) First Appellate Authority, 5) Second Appellate Authority",
                                            chips: ["कलम ३ अधिसूचना (३ महिन्यांत)", "लोकसेवांची सूची", "पदनिर्देशित अधिकारी", "विहित कालमर्यादा", "प्रथम व द्वितीय अपीलीय अधिकारी"]
                                        },
                                        {
                                            id: "st_gb_ms07_01_02",
                                            titleMr: "कलम ४ - माहिती फलकावर प्रसिद्धी: सर्व पदनिर्देशित अधिकारी, अपीलीय अधिकारी यांची नावे, संपर्क क्रमांक, विहित मुदत आणि आवश्यक कागदपत्रांची यादी कार्यालयाच्या दर्शनी भागातील 'माहिती फलकावर' (Notice Board) तसेच अधिकृत संकेतस्थळावर (Website) मराठी व इंग्रजीत लावणे बंधनकारक",
                                            titleEn: "Section 4 Public Display: Mandatory display of notified services, designated officers, appellate authorities, timelines and requisite document checklists on Notice Boards at office premises and websites in Marathi & English",
                                            chips: ["कलम ४ माहिती फलक", "संकेतस्थळावर प्रसिद्धी", "कागदपत्रांची यादी", "नागरिकांसाठी पारदर्शकता"]
                                        },
                                        {
                                            id: "st_gb_ms07_01_03",
                                            titleMr: "कलम ५ (अधिकार) आणि कलम ६ (पोचपावती): कलम ५: प्रत्येक पात्र व्यक्तीला विहित वेळेत लोकसेवा मिळवण्याचा कायदेशीर अधिकार असेल; कलम ६: अर्ज सादर केल्यावर पदनिर्देशित अधिकाऱ्याने किंवा कर्मचाऱ्याने तात्काळ 'लेखी किंवा इलेक्ट्रॉनिक पोचपावती' देणे बंधनकारक आहे; पावतीवर स्पष्ट 'तारीख, वेळ आणि युनिक ॲप्लिकेशन नंबर' (Unique Application Number) असणे आवश्यक; जर आवश्यक कागदपत्रे अपूर्ण असतील, तर ते पावतीवर नोंदवणे अनिवार्य",
                                            titleEn: "Section 5 (Right) & Section 6 (Acknowledgment Receipt): Sec 5 guarantees legal right to timely service; Sec 6 mandates immediate written/electronic acknowledgment receipt with date, time and Unique Application Number; Deficiency checklist",
                                            chips: ["कलम ५ मुदतीत सेवा मिळवण्याचा अधिकार", "कलम ६ पोचपावती अनिवार्य", "युनिक ॲप्लिकेशन नंबर", "कागदपत्र त्रुटी नोंद"]
                                        },
                                        {
                                            id: "st_gb_ms07_01_04",
                                            titleMr: "कलम ७ - अर्जाचा निपटारा: पदनिर्देशित अधिकाऱ्याने विहित वेळेत सेवा मंजूर करावी किंवा अर्ज फेटाळला असल्यास त्याची 'लेखी कारणे' अर्जदारास कळवावीत; तसेच नकाराविरुद्ध प्रथम अपील किती दिवसांत व कोणाकडे करावे याची माहिती अर्जात देणे बंधनकारक असते",
                                            titleEn: "Section 7 Disposal: Designated Officer must either provide the service within stipulated time or reject application stating reasons in writing, and communicate details of First Appeal deadline to applicant",
                                            chips: ["कलम ७ अर्जाचा निपटारा", "लेखी कारणे देणे", "अपीलाची माहिती कळवणे"]
                                        }
                                    ],
                                    sources: [
                                        { book: "महाराष्ट्र लोकसेवा हक्क अधिनियम, २०१५", standard: "Bare Act", chapterRef: "प्रकरण २: लोकसेवांची अधिसूचना व कार्यपद्धती (कलम ३ ते ७)" },
                                        { book: "माहितीचा अधिकार व लोकसेवा हक्क", standard: "के. सागर", chapterRef: "प्रकरण ७: लोकसेवा मिळवण्याची कार्यपद्धती" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mrts_c08",
                            code: "RTS03",
                            section: "B",
                            slug: "rts-appeals-structure-and-timelines-sec-8-to-12",
                            nameMr: "RTS अपीलीय रचना: प्रथम अपील (कलम ८), द्वितीय अपील (कलम ९) व पुनर्विलोकन",
                            nameEn: "RTS Appellate Hierarchy: First Appeal (Sec 8), Second Appeal (Sec 9) & Revision (Sec 10-12)",
                            name: "RTS अपीलीय रचना व मुदती (RTS Appeals - Sec 8 to 12)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mrts_c08",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mrts_c07",
                            nextChapterId: "gb_mrts_c09",
                            metaDescriptionMr: "प्रथम अपील (कलम ८ - ३० दिवसांत, निकाल ३० दिवसांत), द्वितीय अपील (कलम ९ - ३० दिवसांत, निकाल ३० ते ४५ दिवसांत), पदनिर्देशित अधिकाऱ्याला सेवा देण्याचे निर्देश, आणि कलम १० (पुनर्विलोकन अर्ज).",
                            metaDescriptionEn: "In-depth review of RTS Appellate Hierarchy: Section 8 First Appeal (Within 30 days to First Appellate Authority, disposed within 30 days), Section 9 Second Appeal (Within 30 days to Second Appellate Authority, disposed in 30-45 days), and Section 10 Revision.",
                            notesJsonPath: "/data/notes/group_b/mains/rti_rts/c08_rts_appeals.json",
                            quizTag: "gb_mrts_appeals_01",
                            tags: ["RTS Act 2015", "Section 8 First Appeal 30 Days", "Section 9 Second Appeal 30 Days", "Disposal 30 Days", "Section 10 Revision", "High-Weightage"],
                            searchKeywords: ["maharashtra rts act section 8 first appeal 30 days disposal", "rts act section 9 second appeal 30 days disposal 45 days", "section 10 revision to commission", "burden of timely delivery on designated officer", "first appellate authority vs second appellate authority", "महाराष्ट्र RTS कलम ८ प्रथम अपील ३० दिवस", "कलम ९ द्वितीय अपील ३० दिवस", "अपील निकाल मुदत ३० ते ४५ दिवस", "कलम १० पुनर्विलोकन Revision"],
                            topics: [
                                {
                                    id: "top_gb_ms08_01",
                                    nameMr: "RTS दोन स्तरांची अपीलीय रचना, ३० दिवसांची कालमर्यादा आणि अपीलांचे अधिकार",
                                    nameEn: "Two-Tier Appellate Framework, 30-Day Windows & Adjudication Powers",
                                    subtopics: [
                                        {
                                            id: "st_gb_ms08_01_01",
                                            titleMr: "कलम ८ - प्रथम अपील (First Appeal): जर पदनिर्देशित अधिकाऱ्याने विहित मुदतीत सेवा दिली नाही किंवा अर्ज फेटाळला, तर: १) मुदत संपल्यापासून किंवा नकार मिळाल्यापासून '३० दिवसांच्या आत' प्रथम अपीलीय अधिकाऱ्याकडे अपील करता येते (वाजवी कारण असल्यास ३० दिवसांनंतरही अपील स्वीकारता येते); २) प्रथम अपीलीय अधिकाऱ्याने अपील मिळाल्यापासून '३० दिवसांच्या आत' आदेश देणे बंधनकारक असते; ३) तो पदनिर्देशित अधिकाऱ्याला विहित मुदतीत सेवा देण्याचे निर्देश देऊ शकतो किंवा अपील फेटाळू शकतो",
                                            titleEn: "Section 8 First Appeal: Filed within 30 days of deadline expiry or rejection to First Appellate Authority (Condonation of delay permissible); FAA must dispose appeal within 30 days; Can direct Designated Officer to provide service within specified days",
                                            chips: ["कलम ८ प्रथम अपील", "३० दिवसांच्या आत अपील", "प्रथम अपीलीय अधिकारी निकाल ३० दिवस", "सेवा देण्याचे निर्देश"]
                                        },
                                        {
                                            id: "st_gb_ms08_01_02",
                                            titleMr: "कलम ९ - द्वितीय अपील (Second Appeal): प्रथम अपीलीय अधिकाऱ्याच्या निर्णयाविरुद्ध किंवा त्याने ३० दिवसांत निर्णय न दिल्यास: १) निर्णयाच्या तारखेपासून '३० दिवसांच्या आत' द्वितीय अपीलीय अधिकाऱ्याकडे अपील करता येते; २) द्वितीय अपीलीय अधिकाऱ्याने अपील मिळाल्यापासून '३० दिवसांच्या आत' (अपवादात्मक परिस्थितीत लेखी कारणे नोंदवून कमाल ४५ दिवसांत) आदेश देणे बंधनकारक; ३) द्वितीय अपीलीय अधिकारी दोषी पदनिर्देशित अधिकाऱ्यावर कलम १८ अन्वये दंड आकारण्याचे आदेश देऊ शकतो",
                                            titleEn: "Section 9 Second Appeal: Filed within 30 days from First Appeal order to Second Appellate Authority; Must be disposed within 30 days (max 45 days with written reasons); Authority empowered to initiate penalty proceedings u/s 18",
                                            chips: ["कलम ९ द्वितीय अपील", "३० दिवसांच्या आत अपील", "निकाल ३० ते ४५ दिवस", "दंड आकारणीचे अधिकार"]
                                        },
                                        {
                                            id: "st_gb_ms08_01_03",
                                            titleMr: "कलम १० - पुनर्विलोकन (Revision) आणि कलम ११: १) कलम १०: द्वितीय अपीलीय अधिकाऱ्याच्या निर्णयाविरुद्ध व्यथित झालेली कोणतीही व्यक्ती किंवा पदनिर्देशित अधिकारी आदेशाच्या ६० दिवसांच्या आत थेट 'महाराष्ट्र राज्य लोकसेवा हक्क आयोगाकडे' पुनर्विलोकन अर्ज (Revision Application) करू शकतात; २) कलम ११: अपीलीय अधिकाऱ्यांना साक्षीदारांना समन्स काढणे, कागदपत्रे तपासणे याबाबत दिवाणी प्रक्रिया संहितेचे (CPC) अधिकार असतात",
                                            titleEn: "Section 10 Revision & Section 11 Powers: Sec 10 allows aggrieved person or Designated Officer to file Revision before State Commission for Right to Services within 60 days; Sec 11 vests Civil Court procedural powers (CPC)",
                                            chips: ["कलम १० पुनर्विलोकन (Revision ६० दिवस)", "आयोगाकडे पुनर्विलोकन", "कलम ११ दिवाणी अधिकार"]
                                        }
                                    ],
                                    sources: [
                                        { book: "महाराष्ट्र लोकसेवा हक्क अधिनियम, २०१५", standard: "Bare Act", chapterRef: "प्रकरण ३: अपील व पुनर्विलोकन (कलम ८ ते १२)" },
                                        { book: "माहितीचा अधिकार व लोकसेवा हक्क", standard: "के. सागर", chapterRef: "प्रकरण ८: RTS अपीलीय कार्यपद्धती" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mrts_c09",
                            code: "RTS04",
                            section: "B",
                            slug: "rts-state-commission-composition-and-powers-sec-13-to-17",
                            nameMr: "महाराष्ट्र राज्य लोकसेवा हक्क आयोग: रचना, नियुक्ती आणि अधिकार (कलम १३ ते १७)",
                            nameEn: "Maharashtra State Commission for Right to Services: Setup, Powers & Appointments (Sec 13 to 17)",
                            name: "राज्य लोकसेवा हक्क आयोग (State RTS Commission - Sec 13 to 17)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mrts_c09",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mrts_c08",
                            nextChapterId: "gb_mrts_c10",
                            metaDescriptionMr: "महाराष्ट्र राज्य लोकसेवा हक्क आयोग (कलम १३ - १ राज्य मुख्य आयुक्त + विभागीय आयुक्त), नियुक्ती समिती (मुख्यमंत्री, विरोधी पक्षनेता, मंत्री), कार्यकाळ (५ वर्षे किंवा वयाची ६५ वर्षे), स्वावलंबन व अधिकार (कलम १६), आणि पहिले मुख्य आयुक्त स्वाधीन क्षत्रिय.",
                            metaDescriptionEn: "In-depth review of State Commission for Right to Services: Setup u/s 13 (1 State Chief Commissioner + Divisional Commissioners), 3-member appointment committee (CM, LoP, Cabinet Minister), 5-year tenure/65-year age ceiling, Powers u/s 16, and First Chief Commissioner Swadheen Kshatriya.",
                            notesJsonPath: "/data/notes/group_b/mains/rti_rts/c09_rts_commission.json",
                            quizTag: "gb_mrts_commission_01",
                            tags: ["RTS Act 2015", "Section 13 State Commission", "State Chief Commissioner", "Divisional Commissioners", "Appointment Committee CM", "Tenure 5 Years 65 Years", "High-Weightage"],
                            searchKeywords: ["maharashtra state commission for right to services section 13", "composition 1 chief commissioner and divisional commissioners", "appointment panel chief minister leader of opposition", "tenure 5 years or 65 years age limit rts commissioner", "swadheen kshatriya first chief commissioner rts", "powers of commission section 16 rts act", "महाराष्ट्र राज्य लोकसेवा हक्क आयोग कलम १३", "मुख्य आयुक्त व विभागीय आयुक्त", "निवड समिती मुख्यमंत्री अध्यक्ष", "कार्यकाळ ५ वर्षे किंवा ६५ वर्षे", "पहिले मुख्य आयुक्त स्वाधीन क्षत्रिय", "आयोगाचे अधिकार कलम १६"],
                            topics: [
                                {
                                    id: "top_gb_ms09_01",
                                    nameMr: "आयोगाची रचना, विभागीय स्वरूप, निवड समिती, सेवाशर्ती आणि मुख्य आयुक्तांचे अधिकार",
                                    nameEn: "Statutory Setup, Divisional Benches, Collegium Selection & Administrative Prerogatives",
                                    subtopics: [
                                        {
                                            id: "st_gb_ms09_01_01",
                                            titleMr: "आयोगाची स्थापना व रचना (कलम १३): १) महाराष्ट्र राज्य लोकसेवा हक्क आयोग (MCRTS) ची स्थापना; २) रचना: १ राज्य मुख्य लोकसेवा हक्क आयुक्त (State Chief Commissioner) + प्रत्येक महसुली मुख्यालयाच्या ठिकाणी १ आयुक्त (विभागीय आयुक्त स्तरावर - उदा. कोकण, पुणे, नाशिक, छत्रपती संभाजीनगर, अमरावती, नागपूर); मुख्य आयुक्तांचे कार्यालय मुंबई येथे असेल; महाराष्ट्राचे पहिले मुख्य लोकसेवा हक्क आयुक्त: स्वाधीन क्षत्रिय (माजी मुख्य सचिव)",
                                            titleEn: "Section 13 Commission Setup: State Commission for Right to Services consists of 1 State Chief Commissioner + Divisional Commissioners for each revenue division (Mumbai, Pune, Nashik, Chhatrapati Sambhajinagar, Amravati, Nagpur); First Chief Commissioner: Swadheen Kshatriya",
                                            chips: ["कलम १३ राज्य लोकसेवा हक्क आयोग", "१ मुख्य आयुक्त + विभागीय आयुक्त", "मुख्यालय मुंबई", "पहिले मुख्य आयुक्त स्वाधीन क्षत्रिय"]
                                        },
                                        {
                                            id: "st_gb_ms09_01_02",
                                            titleMr: "नियुक्ती समिती व पात्रता (कलम १३(३)): मुख्य आयुक्त व इतर आयुक्तांची नियुक्ती राज्यपालांद्वारे ३ सदस्यीय निवड समितीच्या शिफारशीने होते: १) मुख्यमंत्री (अध्यक्ष), २) विधानसभेतील विरोधी पक्षनेता (सदस्य), ३) मुख्यमंत्र्यांनी नामनिर्देशित केलेला एक कॅबिनेट मंत्री (सदस्य); आयुक्त हे सार्वजनिक प्रशासन, विधी, विज्ञान किंवा व्यवस्थापन क्षेत्रातील प्रख्यात व्यक्ती असावी; त्यांनी महाराष्ट्र शासनाच्या मुख्य सचिव पदापेक्षा किंवा भारत सरकारच्या सचिव पदापेक्षा कमी दर्जाचे पद भूषवलेले नसावे",
                                            titleEn: "Appointment Committee & Eligibility: Appointed by Governor on recommendation of 3-member collegium: 1) Chief Minister (Chair), 2) Leader of Opposition in Legislative Assembly, 3) Cabinet Minister nominated by CM; Must have held rank of Chief Secretary of State or Secretary to GoI",
                                            chips: ["आयुक्त नियुक्ती समिती", "मुख्यमंत्री अध्यक्ष", "विधानसभा विरोधी पक्षनेता", "मुख्य सचिव दर्जा"]
                                        },
                                        {
                                            id: "st_gb_ms09_01_03",
                                            titleMr: "कार्यकाळ आणि सेवाशर्ती (कलम १३(४)): मुख्य आयुक्त आणि इतर आयुक्त हे पद स्वीकारल्याच्या तारखेपासून '५ वर्षे' किंवा वयाची '६५ वर्षे' पूर्ण होईपर्यंत (जे आधी असेल ते) पदावर राहतील; त्यांना कोणत्याही परिस्थितीत पुनर्नियुक्ती (Reappointment) मिळण्यास बंदी असेल",
                                            titleEn: "Tenure & Terms (Sec 13(4)): Chief Commissioner & Commissioners hold office for a term of 5 YEARS or until age of 65 YEARS, whichever is earlier; Ineligible for reappointment",
                                            chips: ["कार्यकाळ ५ वर्षे किंवा ६५ वर्षे वय", "पुनर्नियुक्तीस बंदी", "सेवाशर्ती कलम १३"]
                                        },
                                        {
                                            id: "st_gb_ms09_01_04",
                                            titleMr: "आयोगाचे अधिकार व कार्ये (कलम १६ व १७): १) कायद्याच्या अंमलबजावणीवर देखरेख ठेवणे; २) स्वतःहून (Suo-Motu) चौकशी करण्याचे अधिकार; ३) पदनिर्देशित अधिकाऱ्यांवर शिस्तभंगाची कारवाई करण्याची शिफारस शासनास करणे; ४) लोकसेवा वेळेत देण्यासाठी राज्य शासनाला नवीन सेवा अधिसूचित करण्याचे व ई-प्रशासन प्रणाली सुधारण्याचे सल्ले देणे; ५) वार्षिक अहवाल राज्य शासनास सादर करणे (शासनाने तो विधिमंडळासमोर मांडणे बंधनकारक)",
                                            titleEn: "Powers & Functions (Sec 16 & 17): Oversee enforcement; Suo-motu inquiry powers; Recommend departmental disciplinary action; Advise State Govt on e-governance and service delivery overhauls; Submit annual report to State Legislature",
                                            chips: ["कलम १६ आयोगाचे अधिकार", "सुओ-मोटो (Suo-Motu) चौकशी अधिकार", "शासनाला शिफारस", "वार्षिक अहवाल विधिमंडळात"]
                                        }
                                    ],
                                    sources: [
                                        { book: "महाराष्ट्र लोकसेवा हक्क अधिनियम, २०१५", standard: "Bare Act", chapterRef: "प्रकरण ४: महाराष्ट्र राज्य लोकसेवा हक्क आयोग (कलम १३ ते १७)" },
                                        { book: "महाराष्ट्र राज्य लोकसेवा हक्क आयोग अधिकृत संकेतस्थळ (aaplesarkar.mahaonline.gov.in)", standard: "आयोग अहवाल", chapterRef: "रचना व अधिकार" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mrts_c10",
                            code: "RTS05",
                            section: "B",
                            slug: "rts-penalties-aaple-sarkar-portal-and-master-revision",
                            nameMr: "RTS दंड/शास्ती (कलम १८ व १९), 'आपले सरकार' पोर्टल आणि मास्टर रिव्हिजन",
                            nameEn: "RTS Penalties (Sec 18 & 19), 'Aaple Sarkar' Digital Platform & Master Revision",
                            name: "RTS दंड, आपले सरकार व मास्टर रिव्हिजन (Penalties & Master Revision)",
                            category: "REVISION",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mrts_c10",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mrts_c09",
                            nextChapterId: null,
                            metaDescriptionMr: "RTS कलम १८ (दंड: किमान ५०० रु. ते कमाल ५,००० रु.), प्रोत्साहन भत्ता, कलम १९ (शिस्तभंगाची कारवाई), कलम २४ (न्यायालयांना मनाई), 'आपले सरकार' डिजिटल सेवा पोर्टल (५००+ सेवा), आणि RTI vs RTS तुलनात्मक मास्टर तक्ता.",
                            metaDescriptionEn: "In-depth review of RTS Penalties: Section 18 (Fine min Rs 500 up to max Rs 5,000 deducted from salary, Cash incentive to applicant), Section 19 Disciplinary action, Section 24 Bar of Civil Courts, 'Aaple Sarkar' Portal, and 10-Year Mains PYQ comparative synthesis.",
                            notesJsonPath: "/data/notes/group_b/mains/rti_rts/c10_rts_penalties_master_revision.json",
                            quizTag: "gb_mrts_penalties_01",
                            tags: ["RTS Act 2015", "Section 18 Penalty 500 to 5000", "Compensation to Applicant", "Section 19 Disciplinary Action", "Section 24 Bar of Courts", "Aaple Sarkar Portal", "High-Weightage"],
                            searchKeywords: ["rts act section 18 penalty min 500 max 5000 salary deduction", "compensation out of penalty to eligible person", "section 19 departmental inquiry persistent failure", "section 24 bar of jurisdiction of courts rts", "aaple sarkar maharashtra citizen portal 500 services", "rti 2005 vs rts 2015 comparative table mpsc mains", "कलम १८ दंड किमान ५०० ते कमाल ५००० रु", "अर्जदाराला नुकसानभरपाई", "कलम १९ शिस्तभंगाची कारवाई", "कलम २४ न्यायालयांना मनाई", "आपले सरकार पोर्टल", "RTI विरुद्ध RTS तुलनात्मक तक्ता"],
                            topics: [
                                {
                                    id: "top_gb_ms10_01",
                                    nameMr: "RTS दंड आकारणी, प्रोत्साहन रक्कम, ई-सेवा पोर्टल आणि RTI-RTS तुलनात्मक विश्लेषण",
                                    nameEn: "Statutory Penalty Mechanics, Compensation Grants, Digital Delivery & RTI-RTS Comparative Matrix",
                                    subtopics: [
                                        {
                                            id: "st_gb_ms10_01_01",
                                            titleMr: "कलम १८ - शास्ती / दंड (Penalties under RTS - MPSC वारंवार विचारते): जर पदनिर्देशित अधिकारी वाजवी कारणाशिवाय विहित मुदतीत लोकसेवा पुरवण्यात अयशस्वी ठरला किंवा प्रथम अपीलीय अधिकाऱ्याने विहित मुदतीत अपील निकाली काढले नाही, तर: १) द्वितीय अपीलीय अधिकारी किंवा आयोग दोषी अधिकाऱ्यावर 'किमान ५०० रुपये ते कमाल ५,००० रुपये' इतका दंड आकारू शकतो; २) दंडाची रक्कम संबंधित अधिकाऱ्याच्या पगारातून कापली जाते; ३) कलम १८(२): गोळा केलेल्या दंडाच्या रकमेतून काही भाग किंवा संपूर्ण रक्कम अर्जदारास 'भरपाई / नुकसानभरपाई' (Compensation) म्हणून देण्याचे आदेश देता येतात",
                                            titleEn: "Section 18 Penalties: If Designated Officer or FAA fails without reasonable cause: 1) Penalty of MINIMUM Rs 500 up to MAXIMUM Rs 5,000; 2) Deducted from salary of defaulting officer; 3) Sec 18(2) empowers authority to award portion/entire penalty to applicant as compensation",
                                            chips: ["कलम १८ शास्ती / दंड", "किमान ५०० रु. ते कमाल ५००० रु.", "पगारातून कपात", "अर्जदाराला भरपाई (Compensation)"]
                                        },
                                        {
                                            id: "st_gb_ms10_01_02",
                                            titleMr: "कलम १९ (शिस्तभंगाची कारवाई) आणि कलम २४ (न्यायालयांना मनाई): १) कलम १९: जर एखाद्या पदनिर्देशित अधिकाऱ्याने किंवा अपीलीय अधिकाऱ्याने सातत्याने आणि वारंवार कर्तव्यात कसूर केली, तर आयोग त्याच्याविरुद्ध सक्षम शिस्तभंग प्राधिकरणाकडे विभागीय चौकशी (Departmental Disciplinary Action) करण्याची शिफारस करू शकतो; २) कलम २४: कोणत्याही दिवाणी न्यायालयाला (Civil Court) या कायद्यान्वये दिलेल्या आदेशाविरुद्ध दावा चालवण्याचा अधिकार नसेल",
                                            titleEn: "Section 19 Disciplinary Action & Section 24 Bar of Courts: Persistent failure triggers formal departmental inquiry recommendations by Commission; Section 24 grants civil court immunity to orders passed under RTS Act",
                                            chips: ["कलम १९ शिस्तभंगाची कारवाई", "वारंवार कसूर केल्यास विभागीय चौकशी", "कलम २४ न्यायालयांना मनाई"]
                                        },
                                        {
                                            id: "st_gb_ms10_01_03",
                                            titleMr: "'आपले सरकार' डिजिटल सेवा मंच (Aaple Sarkar Portal): महाराष्ट्र शासनाचा फ्लॅगशिप ई-प्रशासन मंच; ५०० हून अधिक अधिसूचित नागरी सेवा ऑनलाइन उपलब्ध (महसूल दाखले, जातीचे प्रमाणपत्र, रहिवासी, उत्पन्न, सातबारा, शॉप ॲक्ट, विवाह नोंदणी); 'RTS Maharashtra' मोबाईल ॲप; अर्जदाराला अर्जाची सद्यस्थिती ट्रॅक करण्याची सोय; डिजिटल स्वाक्षरीयुक्त प्रमाणपत्रे मिळणे",
                                            titleEn: "Aaple Sarkar Citizen Services Portal (aaplesarkar.mahaonline.gov.in): Single-window e-governance platform integrating 500+ notified services (Income, Caste, Domicile, 7/12 extracts, Shop Act); RTS Mobile App for real-time tracking with digitally signed certificates",
                                            chips: ["आपले सरकार पोर्टल", "५००+ ऑनलाइन लोकसेवा", "RTS मोबाईल ॲप", "डिजिटल स्वाक्षरी दाखले"]
                                        },
                                        {
                                            id: "st_gb_ms10_01_04",
                                            titleMr: "RTI २००५ विरुद्ध RTS २०१५ तुलनात्मक मास्टर कोष्टक: १) उद्दिष्ट: RTI चा उद्देश माहिती मिळवणे, तर RTS चा उद्देश विहित वेळेत शासकीय सेवा मिळवणे; २) मुदत: RTI सामान्य मुदत ३० दिवस (जीवित ४८ तास), तर RTS ची मुदत सेवेनुसार अधिसूचित कामकाजाचे दिवस; ३) प्रथम अपील: RTI मध्ये ३० दिवसांत FAA कडे, RTS मध्ये ३० दिवसांत FAA कडे; ४) द्वितीय अपील: RTI मध्ये ९० दिवसांत आयोगाकडे, RTS मध्ये ३० दिवसांत SAA कडे; ५) दंड: RTI मध्ये दररोज २५० रु. कमाल २५,००० रु., तर RTS मध्ये किमान ५०० रु. कमाल ५,००० रु.; ६) भरपाई: RTI मध्ये दंडाची रक्कम सरकारी तिजोरीत जाते, RTS मध्ये दंडातील रक्कम अर्जदाराला नुकसानभरपाई म्हणून मिळू शकते",
                                            titleEn: "Master Comparative Matrix (RTI 2005 vs RTS 2015): Objectives (Information vs Service delivery); Normal timelines (30 days vs Notified working days); 1st Appeal (30 days in both); 2nd Appeal (90 days to Commission in RTI vs 30 days to SAA in RTS); Penalties (Rs 250/day max 25k in RTI vs Flat Rs 500 to 5000 in RTS); Compensation to applicant is a unique feature of RTS",
                                            chips: ["RTI vs RTS मास्टर तक्ता", "RTI दंड (दररोज २५०, कमाल २५०००)", "RTS दंड (किमान ५००, कमाल ५०००)", "RTS मध्ये अर्जदाराला भरपाई", "मुख्य परीक्षा १०/१० प्रश्न खात्री"]
                                        }
                                    ],
                                    sources: [
                                        { book: "महाराष्ट्र लोकसेवा हक्क अधिनियम, २०१५", standard: "Bare Act", chapterRef: "प्रकरण ५: शास्ती व संकीर्ण (कलम १८ ते ३०)" },
                                        { book: "माहितीचा अधिकार व लोकसेवा हक्क", standard: "के. सागर", chapterRef: "प्रकरण ९ व १०: दंड, आपले सरकार व तुलनात्मक तक्ता" }
                                    ]
                                }
                            ]
                        }
                    ]
                },


                {
                    id: "gb_mains_polity_governance",
                    code: "M_POL",
                    slug: "indian-constitution-political-system-governance-mains",
                    nameMr: "भारतीय राज्यघटना, राजकीय यंत्रणा आणि प्रशासन",
                    nameEn: "Indian Constitution, Political System & Administrative Governance (Mains Core)",
                    name: "राज्यघटना व प्रशासन (Mains Constitution & Governance)",
                    officialScope: "Comprehensive Constitutional Jurisprudence, Philosophical Matrix of Preamble, Fundamental Rights & Landmark Case Laws, Federal Structure & Center-State Dynamics, Union & State Legislature Mechanics, Higher Judiciary & Public Interest Litigation (PIL), Maharashtra State Administrative Hierarchy (Mantralaya to Talathi), Constitutional Authorities, and Electoral Reforms for MPSC Group B Mains Paper 2",
                    version: "1.0",
                    verifiedDate: "2026-10-28",
                    notesJsonBaseDir: "/data/notes/group_b/mains/polity_governance/",


                    // UI Theme & Theming Metadata
                    theme: {
                        primaryColor: "#1e1b4b",        // Deep Navy / Constitutional Sovereign Pillar Theme
                        bgColor: "#eef2ff",
                        iconClass: "ri-scales-3-line"
                    },


                    // अभ्यास व डॅशबोर्ड ॲनालिटिक्स मेट्रिक्स
                    metrics: {
                        totalChapters: 18,
                        totalEstimatedHours: 62,
                        avgQuestionsInMains: 18,
                        targetMarks: 36,
                        weightageRange: "15-20 Questions / 30-40 Marks"
                    },


                    // विषय पातळीवरील स्मार्ट टॅग्ज
                    subjectTags: [
                        "Core-Mains",
                        "Mains-Paper-2",
                        "Judicial-Precedents",
                        "Administrative-Machinery-MH",
                        "High-Weightage",
                        "Constitution-Deep-Dive"
                    ],


                    filterCategory: "GS",
                    searchKeywords: [
                        "mpsc group b mains polity syllabus", "indian constitution landmark supreme court cases",
                        "center state administrative financial relations commissions", "anti defection law 10th schedule speaker powers",
                        "maharashtra administrative machinery mantralaya chief secretary collector",
                        "judicial activism public interest litigation pil", "electoral reforms model code of conduct",
                        "भारतीय राज्यघटना मुख्य परीक्षा", "सर्वोच्च न्यायालय महत्त्वाचे खटले", "केंद्र राज्य संबंध ७ वे परिशिष्ट", "पक्षांतर बंदी १० वे परिशिष्ट", "महाराष्ट्र मंत्रालय मुख्य सचिव जिल्हाधिकारी रचना", "जनहित याचिका PIL", "निवडणूक सुधारणा"
                    ],


                    referenceSources: [
                        {
                            name: "MPSC Non-Gazetted Group B Combined Mains Syllabus",
                            role: "अधिकृत परीक्षा-संदर्भ",
                            url: "https://mpsc.gov.in"
                        },
                        {
                            name: "भारतीय राज्यघटना व राजकारण - एम. लक्ष्मीकांत (के. सागर अनुवाद)",
                            role: "संविधान, संसद, न्यायव्यवस्था व घटनात्मक संस्थांचा आधारभूत ग्रंथ"
                        },
                        {
                            name: "भारतीय राज्यघटना, राजकीय व्यवस्था व पंचायत राज - रंजन कोळंबे",
                            role: "संकल्पनात्मक स्पष्टता व मुख्य परीक्षाभिमुख विश्लेषण"
                        },
                        {
                            name: "महाराष्ट्र राज्य प्रशासन व जिल्हा प्रशासन - डॉ. बी. बी. पाटील / के. सागर",
                            role: "महाराष्ट्राची प्रशासकीय रचना (मंत्रालय ते तलाठी) विशेष संदर्भ"
                        },
                        {
                            name: "The Constitution of India (Ministry of Law and Justice, GoI)",
                            role: "मूळ वैधानिक राज्यघटना (Bare Act) व अद्ययावत दुरुस्त्या"
                        }
                    ],


                    chapters: [
                        // =========================================================================
                        // विभाग A — घटनात्मक तत्त्वज्ञान, मूलभूत चौकट व न्यायनिर्णय (Constitutional Philosophy)
                        // =========================================================================
                        {
                            id: "gb_mpol_c01",
                            code: "MP01",
                            section: "A",
                            slug: "constitution-making-drafting-debates-and-preamble-jurisprudence",
                            nameMr: "संविधान निर्मितीची प्रक्रिया, मसुदा वादविवाद आणि सरनाम्याचे न्यायतत्त्व",
                            nameEn: "Constitutional Assembly Debates, Drafting Process & Preamble Jurisprudence",
                            name: "संविधान निर्मिती व सरनामा (Assembly Debates & Preamble)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mpol_c01",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: null,
                            nextChapterId: "gb_mpol_c02",
                            metaDescriptionMr: "संविधान सभा कामकाज, डॉ. आंबेडकरांचे मसुदा वादविवाद, संविधानाची हस्तलिखित प्रत (प्रेमबिहारी रायजादा, नंदलाल बोस), सरनाम्याचे न्यायालयीन स्थान, बेरुबारी, केशवानंद भारती आणि SR बोम्मई खटल्यांमधील धर्मनिरपेक्षता तत्त्व.",
                            metaDescriptionEn: "In-depth review of Constituent Assembly debates: Dr. Ambedkar's final address, Calligraphy & Illumination (Prem Behari Raizada, Nandalal Bose), and Preamble Jurisprudence across landmark cases (Berubari 1960, Kesavananda 1973, S.R. Bommai 1994 secularism doctrine).",
                            notesJsonPath: "/data/notes/group_b/mains/polity_governance/c01_assembly_preamble.json",
                            quizTag: "gb_mpol_preamble_01",
                            tags: ["Constitutional Law", "Assembly Debates", "Dr Ambedkar", "Preamble Jurisprudence", "Basic Structure", "SR Bommai Secularism", "High-Weightage"],
                            searchKeywords: ["constituent assembly debates ambedkar final address grammar of anarchy", "calligraphy of indian constitution prem behari raizada nandalal bose", "preamble as basic structure kesavananda bharati", "sr bommai case secularism basic structure", "berubari union 1960 vs lic of india 1995", "संविधान सभा वादविवाद", "डॉ आंबेडकर भाषण", "संविधानाचे सुलेखन प्रेमबिहारी रायजादा", "सरनामा मूलभूत चौकट निकाल", "एस आर बोम्मई निकाल धर्मनिरपेक्षता"],
                            topics: [
                                {
                                    id: "top_gb_mp01_01",
                                    nameMr: "संविधान सभेचे वैचारिक वादविवाद, सुलेखन कला आणि सरनाम्याचे न्यायिक मूल्य",
                                    nameEn: "Constituent Assembly Deliberations, Calligraphic Heritage & Judicial Doctrine of Preamble",
                                    subtopics: [
                                        {
                                            id: "st_gb_mp01_01_01",
                                            titleMr: "संविधान सभेतील महत्त्वाचे वादविवाद व डॉ. आंबेडकरांचे अंतिम भाषण: २५ नोव्हेंबर १९४९ चे ऐतिहासिक भाषण; 'अराजकतेचे व्याकरण' (Grammar of Anarchy - लोकशाहीत आंदोलनांचे असंवैधानिक मार्ग टाळणे); राजकीय लोकशाहीचे सामाजिक लोकशाहीत (Social Democracy) रूपांतर करण्याची गरज; व्यक्तीपूजा (Bhakti / Hero-Worship) लोकशाहीसाठी धोकादायक असल्याचा इशारा",
                                            titleEn: "Constituent Assembly Landmark Debates: Dr. Ambedkar's historic address (25 Nov 1949); Cautioned against 'Grammar of Anarchy'; Emphasized Social Democracy (Liberty, Equality, Fraternity as a trinity); Warned against Hero-Worship/Bhakti in politics",
                                            chips: ["डॉ आंबेडकरांचे अंतिम भाषण २५ नोव्हें १९४९", "अराजकतेचे व्याकरण (Grammar of Anarchy)", "सामाजिक लोकशाही त्रयी", "व्यक्तीपूजा इशारा"]
                                        },
                                        {
                                            id: "st_gb_mp01_01_02",
                                            titleMr: "संविधानाची मूळ हस्तलिखित प्रत व कलात्मकता: मूळ संविधान इंग्रजी व हिंदीत हाताने लिहिलेले (Calligraphy): प्रेमबिहारी नारायण रायजादा यांनी इटॅलिक शैलीत सुलेखन केले; प्रत्येक पानावरील चित्रे शांतिनिकेतनच्या नंदलाल बोस व ब्योहर राममनोहर सिन्हा यांनी काढली; मूळ प्रती संसदेच्या ग्रंथालयात हेलियमने भरलेल्या काचेच्या पेटीत सुरक्षित",
                                            titleEn: "Original Manuscript Calligraphy & Illumination: Calligraphed by Prem Behari Narain Raizada in flowing Italic style; Illuminated with heritage art by Nandalal Bose & Beohar Rammanohar Sinha (Santiniketan); Preserved in helium-filled cases in Parliament",
                                            chips: ["प्रेमबिहारी रायजादा (सुलेखनकार)", "नंदलाल बोस (शांतिनिकेतन चित्रे)", "मूळ हस्तलिखित प्रत", "हेलियम पेटी संसद ग्रंथालय"]
                                        },
                                        {
                                            id: "st_gb_mp01_01_03",
                                            titleMr: "सरनाम्याचे न्यायतत्त्व व न्यायालयीन खटले: १) बेरुबारी खटला (१९६०): सरनामा हा संविधानाचा भाग नाही असा तात्कालिक निकाल; २) केशवानंद भारती खटला (१९७३): १३ न्यायाधीशांचे खंडपीठ - सरनामा हा संविधानाचा अविभाज्य भाग असून तो संविधानाच्या मूलभूत चौकटीचे (Basic Structure) प्रतिनिधित्व करतो; ३) एस. आर. बोम्मई खटला (१९९४): 'धर्मनिरपेक्षता' (Secularism) हे संविधानाचे मूलभूत वैशिष्ट्य आहे",
                                            titleEn: "Preamble Jurisprudence: Berubari (1960 - Not part); Kesavananda Bharati (1973 - Integral part & window to Basic Structure); S.R. Bommai (1994 - Secularism is an unalterable Basic Feature of the Constitution)",
                                            chips: ["बेरुबारी निकाल १९६०", "केशवानंद भारती १९७३ (अविभाज्य भाग)", "एस आर बोम्मई १९९४ (धर्मनिरपेक्षता मूलभूत चौकट)", "सरनामा दुरुस्ती मर्यादा"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय राज्यघटना व राजकारण", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण २ व ४: घटना निर्मिती व उद्देशिका" },
                                        { book: "Constituent Assembly Debates", standard: "Lok Sabha Secretariat", chapterRef: "Volume XI: Final Addresses" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mpol_c02",
                            code: "MP02",
                            section: "A",
                            slug: "fundamental-rights-jurisprudence-and-landmark-cases",
                            nameMr: "मूलभूत हक्क न्यायशास्त्र: कलम १२ ते ३५ आणि सर्वोच्च न्यायालयाचे महत्त्वाचे खटले",
                            nameEn: "Fundamental Rights Jurisprudence: Articles 12 to 35 & Judicial Evolution",
                            name: "मूलभूत हक्क व खटले (Fundamental Rights Jurisprudence)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 5,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mpol_c02",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mpol_c01",
                            nextChapterId: "gb_mpol_c03",
                            metaDescriptionMr: "कलम १४ (कायद्याचे अधिराज्य, मनमानी कारभाराला मनाई), कलम १९ मधील वाजवी निर्बंध (Reasonable Restrictions), कलम २१ ची उत्क्रांती (ए. के. गोपालन ते मनेका गांधी खटला - विधी स्थापित प्रक्रिया विरुद्ध विधीची योग्य पद्धत), आणि पुट्टास्वामी निकाल (निजतेचा अधिकार).",
                            metaDescriptionEn: "In-depth review of Fundamental Rights: Article 14 substantive equality & anti-arbitrariness, Article 19 reasonable restrictions, Article 21 metamorphosis (A.K. Gopalan 1950 'Procedure Established by Law' to Maneka Gandhi 1978 'Due Process of Law'), and K.S. Puttaswamy 2017 (Right to Privacy).",
                            notesJsonPath: "/data/notes/group_b/mains/polity_governance/c02_fundamental_rights_cases.json",
                            quizTag: "gb_mpol_fr_cases_01",
                            tags: ["Constitutional Law", "Fundamental Rights", "Article 21 Evolution", "Maneka Gandhi 1978", "Puttaswamy Privacy 2017", "High-Weightage"],
                            searchKeywords: ["article 21 procedure established by law vs due process of law", "maneka gandhi case 1978 golden triangle articles 14 19 21", "k s puttaswamy case 2017 right to privacy fundamental right", "ak gopalan case 1950 narrow interpretation", "article 19 2 reasonable restrictions grounds", "कलम २१ विधीची योग्य पद्धत", "मनेका गांधी खटला १९७८ सुवर्ण त्रिकोण", "पुट्टास्वामी निकाल २०१७ निजतेचा अधिकार", "कलम १४ मनमानी कारभाराला मनाई"],
                            topics: [
                                {
                                    id: "top_gb_mp02_01",
                                    nameMr: "कलम २१ चा विस्तार, सुवर्ण त्रिकोण, निजतेचा अधिकार आणि वाजवी निर्बंध",
                                    nameEn: "Article 21 Expansion, Golden Triangle (14-19-21), Privacy Doctrine & Reasonable Restraints",
                                    subtopics: [
                                        {
                                            id: "st_gb_mp02_01_01",
                                            titleMr: "कलम २१ ची न्यायालयीन उत्क्रांती (A.K. Gopalan to Maneka Gandhi): १) ए. के. गोपालन खटला (१९५०): सर्वोच्च न्यायालयाने कलम २१ चा संकुचित अर्थ लावला ('Procedure Established by Law' - विधीने स्थापित केलेली प्रक्रिया कायदेशीर असेल तर जीवित हिरावून घेता येते); २) मनेका गांधी खटला (१९७८): न्यायालयाने अमेरिकन 'Due Process of Law' (विधीची योग्य व न्याय्य पद्धत) तत्त्व स्वीकारले; कायदा केवळ अस्तित्वात असून चालत नाही, तो वाजवी, रास्त आणि न्याय्य (Just, Fair and Reasonable) असावा",
                                            titleEn: "Article 21 Evolution: A.K. Gopalan 1950 (Narrow literalism: 'Procedure established by law'); Overturned in Maneka Gandhi 1978 (Substantive Due Process: Law depriving personal liberty must be 'Just, Fair and Reasonable', not arbitrary)",
                                            chips: ["ए के गोपालन खटला १९५०", "मनेका गांधी खटला १९७८", "विधी स्थापित प्रक्रिया", "विधीची योग्य पद्धत (Due Process)", "Just Fair and Reasonable"]
                                        },
                                        {
                                            id: "st_gb_mp02_01_02",
                                            titleMr: "संविधानाचा सुवर्ण त्रिकोण (The Golden Triangle - Articles 14, 19, 21): मनेका गांधी खटल्यात न्यायालयाने स्पष्ट केले की कलम १४ (समानता), कलम १९ (स्वातंत्र्य) आणि कलम २१ (जीवित) हे स्वतंत्र नसून एकमेकांशी अतूट जोडलेले आहेत; कोणत्याही कायद्याने नागरिकांचे स्वातंत्र्य हिरावताना या तिन्ही कलमांच्या चाचणीत तो कायदा खरा उतरावा लागतो",
                                            titleEn: "The Golden Triangle of the Constitution: Articles 14, 19 and 21 are mutually inclusive; A law infringing personal liberty under Art 21 must also satisfy test of non-arbitrariness under Art 14 and reasonableness under Art 19",
                                            chips: ["सुवर्ण त्रिकोण (कलम १४, १९, २१)", "मनमानी कारभाराला बंदी", "अतूट परस्पर संबंध", "घटनात्मक संरक्षण"]
                                        },
                                        {
                                            id: "st_gb_mp02_01_03",
                                            titleMr: "निजतेचा अधिकार (Right to Privacy - पुट्टास्वामी निकाल २०१७): न्या. के. एस. पुट्टास्वामी विरुद्ध भारत सरकार खटल्यात ९ न्यायाधीशांच्या घटनापीठाने एकमताने निकाल दिला; 'निजतेचा / गोपनीयतेचा अधिकार' (Right to Privacy) हा कलम २१ मधील जीवित व वैयक्तिक स्वातंत्र्याचा अविभाज्य मूलभूत हक्क आहे; बायोमेट्रिक व डिजिटल डेटा संरक्षणाची कायदेशीर गरज स्पष्ट केली",
                                            titleEn: "Right to Privacy (K.S. Puttaswamy Case 2017): 9-judge Constitution Bench unanimously ruled Privacy as an intrinsic Fundamental Right protected under Article 21; Paved way for Data Protection legislations",
                                            chips: ["पुट्टास्वामी निकाल २०१७", "९ न्यायाधीशांचे घटनापीठ", "निजतेचा अधिकार मूलभूत हक्क", "डिजिटल गोपनीयता"]
                                        },
                                        {
                                            id: "st_gb_mp02_01_04",
                                            titleMr: "कलम १९(१) ची स्वातंत्र्ये व १९(२) मधील वाजवी निर्बंध: मूलभूत हक्क अमर्याद नाहीत; भाषण व अभिव्यक्ती स्वातंत्र्यावर घालता येणारे ८ घटनात्मक निर्बंध: १) भारताचे सार्वभौमत्व व अखंडता, २) राज्याची सुरक्षा, ३) परकीय देशांशी मित्रत्वाचे संबंध, ४) सार्वजनिक सुव्यवस्था (Public Order), ५) सभ्यता व नैतिकता, ६) न्यायालयाचा अवमान, ७) बदनामी, ८) गुन्ह्यास प्रोत्साहन",
                                            titleEn: "Article 19(2) Grounds of Reasonable Restrictions: Fundamental freedoms are not absolute; 8 constitutional grounds: Sovereignty & Integrity of India, Security of State, Friendly foreign relations, Public Order, Decency/Morality, Contempt of Court, Defamation, Incitement to offence",
                                            chips: ["कलम १९(२) वाजवी निर्बंध", "सार्वजनिक सुव्यवस्था", "न्यायालयाचा अवमान", "सार्वभौमत्व व अखंडता"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय राज्यघटना व राजकारण", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण ७: मूलभूत हक्क" },
                                        { book: "Landmark Judgments that Changed India", standard: "Asok Kumar Ganguly", chapterRef: "Maneka Gandhi & Puttaswamy Cases" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mpol_c03",
                            code: "MP03",
                            section: "A",
                            slug: "dpsp-fundamental-duties-and-basic-structure-doctrine",
                            nameMr: "मार्गदर्शक तत्त्वे (DPSP), मूलभूत कर्तव्ये आणि मूलभूत चौकट सिद्धांत (Basic Structure)",
                            nameEn: "DPSP, Fundamental Duties & Harmonious Construction with Basic Structure Doctrine",
                            name: "DPSP, कर्तव्ये व मूलभूत चौकट (DPSP, Duties & Basic Structure)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mpol_c03",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mpol_c02",
                            nextChapterId: "gb_mpol_c04",
                            metaDescriptionMr: "मूलभूत हक्क विरुद्ध मार्गदर्शक तत्त्वे संघर्ष (चंपकम दोराईराजन, गोलकनाथ, २५ वी व ४२ वी दुरुस्ती), मिनर्व्हा मिल्स खटला १९८० (समतोल सिद्धांत), मूलभूत चौकट सिद्धांत (केशवानंद भारती १९७३), आणि मूलभूत कर्तव्यांची अंमलबजावणी (वर्मा समिती १९९९).",
                            metaDescriptionEn: "In-depth review of FR vs DPSP conflicts: Champakam Dorairajan 1951, Golaknath 1967, 25th & 42nd Amendments, Minerva Mills 1980 (Doctrine of Harmonious Construction), Basic Structure Doctrine (Kesavananda Bharati 1973), and Justice Verma Committee (1999) on Fundamental Duties.",
                            notesJsonPath: "/data/notes/group_b/mains/polity_governance/c03_dpsp_basic_structure.json",
                            quizTag: "gb_mpol_basic_struct_01",
                            tags: ["Constitutional Law", "Basic Structure Doctrine", "Kesavananda Bharati 1973", "Minerva Mills 1980", "DPSP FR Conflict", "Verma Committee 1999", "High-Weightage"],
                            searchKeywords: ["basic structure doctrine elements kesavananda bharati 1973", "conflict between fundamental rights and dpsp minerva mills 1980", "article 31c validity 25th amendment act", "justice verma committee 1999 fundamental duties", "harmonious construction between part iii and part iv", "मूलभूत चौकट सिद्धांत", "केशवानंद भारती खटला १९७३", "मिनर्व्हा मिल्स खटला १९८०", "कलम ३१C घटनात्मकता", "वर्मा समिती १९९९ मूलभूत कर्तव्ये"],
                            topics: [
                                {
                                    id: "top_gb_mp03_01",
                                    nameMr: "मूलभूत हक्क व DPSP संघर्ष, समतोल सिद्धांत आणि मूलभूत चौकटीचे घटक",
                                    nameEn: "FR-DPSP Jurisprudential Clashes, Harmonious Balance & Basic Structure Matrix",
                                    subtopics: [
                                        {
                                            id: "st_gb_mp03_01_01",
                                            titleMr: "हक्क व मार्गदर्शक तत्त्वे संघर्ष कालरेषा: १) चंपकम दोराईराजन (१९५१ - मूलभूत हक्क श्रेष्ठ, DPSP दुय्यम); २) गोलकनाथ खटला (१९६७ - संसदेला मूलभूत हक्क हिरावून घेण्याचा अधिकार नाही); ३) २५ वी दुरुस्ती (१९७१ - कलम ३१C जोडले: कलम ३९(b) व (c) मधील समाजवादी DPSP लागू करताना कलम १४ व १९ च्या उल्लंघनावरून न्यायालयात आव्हान देता येणार नाही); ४) ४२ वी दुरुस्ती (सर्व DPSP ला हक्कांवर प्राधान्य देण्याचा संसदेचा प्रयत्न)",
                                            titleEn: "FR vs DPSP Conflict Chronology: Champakam (1951 - FRs superior); Golaknath (1967 - Parliament cannot abridge FRs); 25th Amendment 1971 (Inserted Art 31C shielding Art 39(b) & (c) from Arts 14 and 19 scrutiny); 42nd Amendment overreach",
                                            chips: ["चंपकम दोराईराजन १९५१", "गोलकनाथ खटला १९६७", "२५ वी दुरुस्ती (कलम ३१C)", "कलम ३९(b) व (c) संरक्षण"]
                                        },
                                        {
                                            id: "st_gb_mp03_01_02",
                                            titleMr: "मिनर्व्हा मिल्स खटला (१९८०) व समतोल सिद्धांत: सर्वोच्च न्यायालयाने ४२ व्या दुरुस्तीतील कलम ३१C चा विस्तार असंवैधानिक ठरवला; 'भारतीय संविधान हे मूलभूत हक्क (भाग ३) आणि मार्गदर्शक तत्त्वे (भाग ४) यांच्यातील समतोलाच्या पायावर उभे आहे. दोघांमधील संतुलन हे संविधानाच्या मूलभूत चौकटीचा भाग आहे' - एका घटकाला श्रेष्ठ ठरवून दुसऱ्याचा संकोच करता येणार नाही",
                                            titleEn: "Minerva Mills Case 1980 & Balance Doctrine: Struck down 42nd amendment expansion of Art 31C; Held that the Constitution is founded on the bedrock of the balance between Part III and Part IV; To give absolute primacy to one over the other destroys the harmony",
                                            chips: ["मिनर्व्हा मिल्स खटला १९८०", "समतोल सिद्धांत (Bedrock of Balance)", "दोन्ही रथाची दोन चाके", "मूलभूत चौकट"]
                                        },
                                        {
                                            id: "st_gb_mp03_01_03",
                                            titleMr: "मूलभूत चौकट सिद्धांताचे घटक (Basic Structure Matrix): २४ एप्रिल १९७३ च्या केशवानंद भारती निकालानुसार संसद कलम ३६८ अन्वये संविधानाची मूळ चौकट नष्ट करू शकत नाही; न्यायालयीन निकालांद्वारे निश्चित झालेले घटक: १) संविधानाचे सर्वोच्च स्थान, २) प्रजासत्ताक व लोकशाही स्वरूप, ३) धर्मनिरपेक्षता, ४) अधिकारांचे विभाजन (Separation of Powers), ५) संघराज्य रचना, ६) न्यायालयीन पुनर्विलोकन (Judicial Review), ७) निष्पक्ष निवडणुका, ८) कायद्याचे राज्य",
                                            titleEn: "Constituent Elements of Basic Structure: Established in Kesavananda Bharati (1973); Parliament's Art 368 amending power is limited; Non-amendable features: Supremacy of Constitution, Republican & Democratic form, Secularism, Separation of Powers, Judicial Review, Federalism, Rule of Law",
                                            chips: ["मूलभूत चौकट घटक", "संविधानाचे सर्वोच्चत्व", "न्यायालयीन पुनर्विलोकन", "अधिकारांचे विभाजन", "कायद्याचे राज्य"]
                                        },
                                        {
                                            id: "st_gb_mp03_01_04",
                                            titleMr: "मूलभूत कर्तव्यांची अंमलबजावणी व वर्मा समिती (१९९९): मूलभूत कर्तव्ये (कलम ५१A) ही अ-न्यायप्रविष्ट असली, तरी त्यांच्या अंमलबजावणीसाठी आधीच अस्तित्वात असलेल्या कायद्यांची सूची न्या. वर्मा समितीने मांडली: राष्ट्रीय सन्मान अपमान प्रतिबंध कायदा १९७१, वन्यजीव संरक्षण कायदा १९७२, वन संवर्धन कायदा १९८०, लोकप्रतिनिधित्व कायदा १९५१",
                                            titleEn: "Operationalisation of Fundamental Duties (Justice Verma Committee 1999): Identified existing statutory enactments enforcing duties: Prevention of Insults to National Honour Act 1971, Wildlife Protection Act 1972, Forest Conservation Act 1980",
                                            chips: ["वर्मा समिती १९९९", "राष्ट्रीय सन्मान कायदा १९७१", "वन्यजीव संरक्षण १९७२", "कर्तव्यांचे वैधानिक समर्थन"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय राज्यघटना व राजकारण", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण ८, ९ व ११: DPSP, कर्तव्ये व संविधानाची मूलभूत चौकट" },
                                        { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ६ व १७: मूलभूत चौकट व घटना दुरुस्ती" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग B — संघराज्य रचना, केंद्र-राज्य संबंध व आंतरराज्य सहकार्य (Federalism)
                        // =========================================================================
                        {
                            id: "gb_mpol_c04",
                            code: "MP04",
                            section: "B",
                            slug: "indian-federalism-and-legislative-administrative-relations",
                            nameMr: "भारतीय संघराज्य: कायदेविषयक व प्रशासकीय संबंध (कलम २४५ ते २६३)",
                            nameEn: "Indian Federalism: Legislative & Administrative Centre-State Relations (Arts 245 to 263)",
                            name: "संघराज्य व केंद्र-राज्य संबंध (Federal Matrix: Legislative & Administrative)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mpol_c04",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mpol_c03",
                            nextChapterId: "gb_mpol_c05",
                            metaDescriptionMr: "कायदेविषयक संबंध (कलम २४५-२५५, ७ वे परिशिष्ट, संसदेचा राज्यसूचीवर कायदा करण्याचा अधिकार - कलम २४९, २५०, २५२, २५३), प्रशासकीय संबंध (कलम २५६-२६३), अखिल भारतीय सेवा (AIS कलम ३१२), आणि आंतरराज्य जलविवाद (कलम २६२).",
                            metaDescriptionEn: "In-depth review of Legislative Relations (Arts 245-255, 7th Schedule Lists, Territorial jurisdiction, Parliament legislating on State List u/s 249, 250, 252, 253), Administrative Relations (Arts 256-263), All India Services (Art 312), and River Water Disputes (Art 262).",
                            notesJsonPath: "/data/notes/group_b/mains/polity_governance/c04_centre_state_relations.json",
                            quizTag: "gb_mpol_fed_rel_01",
                            tags: ["Federalism", "Centre-State Relations", "7th Schedule Lists", "Article 249 State List", "Article 312 All India Services", "Inter-State Water Disputes Art 262", "High-Weightage"],
                            searchKeywords: ["center state legislative relations articles 245 to 255", "parliament power to legislate on state list articles 249 250 252 253", "all india services article 312 federal friction", "inter state river water disputes act article 262 krishna godavari", "doctrine of pith and substance territorial nexus", "कायदेविषयक केंद्र राज्य संबंध", "संसदेचा राज्यसूचीवर अधिकार कलम २४९", "अखिल भारतीय सेवा कलम ३१२", "आंतरराज्य नदी जलविवाद कलम २६२", "सारतत्त्व सिद्धांत Pith and Substance"],
                            topics: [
                                {
                                    id: "top_gb_mp04_01",
                                    nameMr: "कायदेविषयक अधिकारांचे वाटप, अपवादात्मक केंद्रीय अधिकार, प्रशासकीय नियंत्रण आणि जलविवाद",
                                    nameEn: "Legislative Competence, Parliamentary Inroads into State List, Administrative Directives & Water Tribunals",
                                    subtopics: [
                                        {
                                            id: "st_gb_mp04_01_01",
                                            titleMr: "कायदेविषयक अधिकारांचे वाटप (कलम २४५ ते २५५ व ७ वे परिशिष्ट): १) भूप्रदेशीय व्याप्ती (Territorial Jurisdiction कलम २४५): संसद संपूर्ण भारतासाठी व राज्य विधिमंडळ राज्यापुरता कायदा करू शकते; २) विषयांचे वाटप: संघसूची (Union List - १०० विषय: संरक्षण, परराष्ट्र, अणुऊर्जा, बँकिंग), राज्यसूची (State List - ६१ विषय: पोलीस, तुरुंग, सार्वजनिक आरोग्य, शेती), समवर्ती सूची (Concurrent List - ५२ विषय: शिक्षण, वने, फौजदारी कायदा); शेषाधिकार (Residuary Powers कलम २४८) केवळ केंद्राकडे",
                                            titleEn: "Legislative Devolution (Arts 245-255 & 7th Schedule): Territorial extent; Subject Distribution: Union List (100 items), State List (61 items: Police, Agriculture, Health), Concurrent List (52 items: Education, Forests); Residuary Powers (Art 248) vested solely in Parliament",
                                            chips: ["७ वे परिशिष्ट (Union, State, Concurrent)", "संघसूची १००", "राज्यसूची ६१", "समवर्ती सूची ५२", "शेषाधिकार केंद्राकडे (कलम २४८)"]
                                        },
                                        {
                                            id: "st_gb_mp04_01_02",
                                            titleMr: "संसदेचा राज्यसूचीतील विषयांवर कायदा करण्याचा अधिकार (५ अपवादात्मक परिस्थिती - MPSC हमखास प्रश्न): १) कलम २४९: राज्यसभेने उपस्थित व मतदान करणाऱ्या २/३ बहुमताने राष्ट्रहिताचा ठराव मंजूर केल्यास (१ वर्षासाठी); २) कलम २५०: राष्ट्रीय आणीबाणी लागू असताना; ३) कलम २५२: दोन किंवा अधिक राज्यांच्या विधिमंडळांनी विनंती केल्यास; ४) कलम २५३: आंतरराष्ट्रीय करार किंवा संमतीच्या अंमलबजावणीसाठी; ५) कलम ३५६: राज्यात राष्ट्रपती राजवट लागू असताना",
                                            titleEn: "Parliament Legislating on State List (5 Exceptional Scenarios): 1) Art 249 (Rajya Sabha passes resolution by 2/3rd majority in national interest), 2) Art 250 (During National Emergency), 3) Art 252 (Two or more states request), 4) Art 253 (To implement international treaties), 5) Art 356 (During President's Rule)",
                                            chips: ["कलम २४९ (राज्यसभा ठराव)", "कलम २५० (आणीबाणी)", "कलम २५२ (राज्यांची विनंती)", "कलम २५३ (आंतरराष्ट्रीय करार)", "कलम ३५६"]
                                        },
                                        {
                                            id: "st_gb_mp04_01_03",
                                            titleMr: "प्रशासकीय संबंध व अखिल भारतीय सेवा (कलम २५६ ते २६३): कलम २५६ व २५७: केंद्राचे राज्यांना निर्देश देण्याचे अधिकार (रेल्वे मालमत्ता रक्षण, लष्करी संप्रेषण); केंद्राच्या निर्देशांचे पालन न केल्यास कलम ३६५ अन्वये राज्यात घटनात्मक यंत्रणा ठप्प झाल्याचे मानून कलम ३५६ लागू करता येते; अखिल भारतीय सेवा (AIS - कलम ३१२: IAS, IPS, IFS - नियुक्ती केंद्राकडून, काम राज्यात, संघराज्यातील दुवा व तणावाचे कारण)",
                                            titleEn: "Administrative Directives & All India Services (Arts 256-263): Arts 256/257 Centre's binding directions to States; Failure to comply triggers Art 365 enabling President's Rule under Art 356; All India Services (Art 312: IAS, IPS, IFoS - recruited by Centre, serve States, instrument of unity)",
                                            chips: ["कलम २५६ व २५७ (केंद्राचे निर्देश)", "कलम ३६५ (निर्देशांचे उल्लंघन)", "कलम ३१२ (अखिल भारतीय सेवा AIS)", "IAS व IPS दुवा"]
                                        },
                                        {
                                            id: "st_gb_mp04_01_04",
                                            titleMr: "आंतरराज्य जलविवाद (कलम २६२) व आंतरराज्य परिषद (कलम २६३): कलम २६२: आंतरराज्य नद्यांच्या पाणी वाटपाच्या तंट्यांच्या निवाड्यासाठी संसद कायद्याने न्यायाधिकरण (Tribunals) स्थापन करू शकते; अशा वादांमध्ये सर्वोच्च किंवा इतर कोणत्याही न्यायालयाचा हस्तक्षेप संसदेने कायद्याने रोखला आहे (उदा. आंतरराज्य नदी जलविवाद कायदा १९५६: कृष्णा व गोदावरी जलविवाद न्यायाधिकरण); कलम २६३: आंतरराज्य परिषद (पंतप्रधान अध्यक्ष, सर्व मुख्यमंत्री सदस्य)",
                                            titleEn: "Inter-State Water Disputes (Art 262) & Council (Art 263): Art 262 empowers Parliament to adjudicate river disputes via Tribunals, barring jurisdiction of SC/HCs (Inter-State River Water Disputes Act 1956 - Krishna/Godavari Tribunals); Art 263 Inter-State Council headed by PM",
                                            chips: ["कलम २६२ (नदी जलविवाद न्यायाधिकरण)", "कृष्णा व गोदावरी न्यायाधिकरण", "न्यायालयांना मनाई", "कलम २६३ (आंतरराज्य परिषद)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय राज्यघटना व राजकारण", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण १४ व १५: केंद्र-राज्य संबंध व आंतरराज्य संबंध" },
                                        { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ८: संघराज्य रचना व संबंध" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mpol_c05",
                            code: "MP05",
                            section: "B",
                            slug: "financial-relations-gst-council-and-federal-commissions",
                            nameMr: "वित्तीय केंद्र-राज्य संबंध, वित्त आयोग, GST परिषद आणि केंद्र-राज्य आयोग",
                            nameEn: "Fiscal Federalism: Financial Relations, Finance Commission, GST Council & Sarkaria/Punchhi Reforms",
                            name: "वित्तीय संबंध व केंद्र-राज्य आयोग (Fiscal Federalism & Commissions)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mpol_c05",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mpol_c04",
                            nextChapterId: "gb_mpol_c06",
                            metaDescriptionMr: "वित्तीय संबंध (कलम २६८ ते २९३), कर महसूल वाटप (कलम २७०), वैधानिक अनुदाने (कलम २७५), वित्त आयोग (कलम २८०), GST परिषद (कलम २७९A रचना व मतदान), सरकारिया आयोग (१९८३) आणि एम. एम. पुंछी आयोग (२००७) शिफारशी.",
                            metaDescriptionEn: "In-depth review of Fiscal Federalism: Articles 268-293, Tax Devolution (Art 270), Grants-in-Aid (Art 275 statutory vs Art 282 discretionary), Finance Commission (Art 280), GST Council (Art 279A), and comprehensive evaluation of Sarkaria (1983) and Punchhi (2007) Commissions.",
                            notesJsonPath: "/data/notes/group_b/mains/polity_governance/c05_fiscal_federalism.json",
                            quizTag: "gb_mpol_fiscal_fed_01",
                            tags: ["Fiscal Federalism", "Finance Commission Article 280", "GST Council Article 279A", "Sarkaria Commission 1983", "Punchhi Commission 2007", "Grants Article 275", "High-Weightage"],
                            searchKeywords: ["financial relations centre state articles 268 to 293", "tax devolution article 270 grants in aid article 275", "finance commission article 280 criteria vertical horizontal", "gst council article 279a voting weightage federal dispute", "sarkaria commission recommendations article 356 governor", "punchhi commission 2007 local self government", "वित्तीय केंद्र राज्य संबंध", "कर महसूल वाटप कलम २७०", "अनुदाने कलम २७५", "वित्त आयोग निकष कलम २८०", "GST परिषद कलम २७९A", "सरकारिया आयोग शिफारशी", "पुंछी आयोग २००७"],
                            topics: [
                                {
                                    id: "top_gb_mp05_01",
                                    nameMr: "कर महसूल वाटप, वित्त आयोग निकष, GST संघराज्य रचना आणि केंद्र-राज्य सुधारणा आयोग",
                                    nameEn: "Tax Devolution Matrix, Finance Commission Allocations, GST Federalism & Inquiry Commissions",
                                    subtopics: [
                                        {
                                            id: "st_gb_mp05_01_01",
                                            titleMr: "वित्तीय अधिकारांची विभागणी (कलम २६८ ते २९३): १) केंद्राने लादलेले पण राज्यांनी गोळा केलेले व वापरलेले कर (कलम २६८ - स्टॅम्प ड्युटी); २) आंतरराज्य व्यापारावरील GST केंद्र गोळा करते व वाटप करते (कलम २६९A - IGST); ३) केंद्र गोळा करते व केंद्र-राज्यांत विभागून घेते (कलम २७० - डिव्हिजिबल पूल); ४) वैधानिक अनुदाने (कलम २७५ - वित्त आयोगाच्या शिफारशीने राज्यांना तूट भरून काढण्यासाठी संसदेने दिलेली अनुदाने); ५) स्वेच्छाधीन अनुदाने (कलम २८२)",
                                            titleEn: "Fiscal Revenue Distribution (Arts 268-293): Art 268 (Stamp duties levied by Centre, collected by States), Art 269A (IGST on inter-state trade), Art 270 (Divisible Tax Pool shared via Finance Commission), Art 275 (Statutory Grants-in-aid recommended by FC), Art 282 (Discretionary Grants)",
                                            chips: ["कलम २६८ (स्टॅम्प ड्युटी)", "कलम २६९A (IGST वाटप)", "कलम २७० (डिव्हिजिबल पूल)", "कलम २७५ (वैधानिक अनुदाने)"]
                                        },
                                        {
                                            id: "st_gb_mp05_01_02",
                                            titleMr: "वित्त आयोग (Finance Commission, कलम २८०): दर ५ वर्षांनी राष्ट्रपतींकडून स्थापना; १ अध्यक्ष + ४ सदस्य; उभी विभागणी (Vertical Devolution: केंद्र व सर्व राज्यांमध्ये कर महसुलाची विभागणी); आडवी विभागणी (Horizontal Devolution: राज्याराज्यांमध्ये वाटप निकष - उत्पन्नातील तफावत Income Distance ४५%, लोकसंख्या १५%, क्षेत्रफळ १५%, वनाच्छादन व पर्यावरण १०%, लोकसंख्याशास्त्रीय कामगिरी १२.५%, कर प्रयत्न २.५%)",
                                            titleEn: "Finance Commission (Article 280): Constituted every 5 years by President; 1 Chair + 4 Members; Vertical Devolution (Union to States) & Horizontal Devolution Formula (Income distance 45%, Population 15%, Area 15%, Forest ecology 10%, Demographic performance 12.5%, Tax effort 2.5%)",
                                            chips: ["कलम २८० वित्त आयोग", "उभी विभागणी (Vertical)", "आडवी विभागणी (Horizontal)", "उत्पन्नातील अंतर ४५% निकष"]
                                        },
                                        {
                                            id: "st_gb_mp05_01_03",
                                            titleMr: "GST परिषद आणि सहकारी संघराज्य (कलम २७९A): १०१ वी घटनादुरुस्ती २०१६; अध्यक्ष केंद्रीय अर्थमंत्री, सदस्य राज्यांचे अर्थमंत्री; मतदानाचे वजन: केंद्र सरकार १/३ (३३.३३%) आणि सर्व राज्य सरकारे एकत्रित २/३ (६६.६७%); कोणताही निर्णय मंजूर होण्यासाठी ३/४ (७५%) बहुमताची गरज; केंद्राला किंवा सर्व राज्यांना एकत्र आल्याशिवाय एकतर्फी निर्णय घेता येत नाही",
                                            titleEn: "GST Council & Cooperative Federalism (Art 279A): Chaired by Union FM; Voting weights: Centre 1/3rd (33.33%), States combined 2/3rd (66.67%); Decision threshold is 3/4th (75%) weighted majority; Neither Centre nor States can unilaterally push decisions",
                                            chips: ["कलम २७९A GST परिषद", "केंद्राचे मतदान १/३", "राज्यांचे मतदान २/३", "निर्णयासाठी ३/४ बहुमत", "सहकारी संघराज्य"]
                                        },
                                        {
                                            id: "st_gb_mp05_01_04",
                                            titleMr: "सरकारिया आयोग (१९८३) व पुंछी आयोग (२००७) शिफारशी: १) सरकारिया आयोग (न्या. आर. एस. सरकारिया): कलम ३५६ चा वापर 'अंतिम अस्त्र' (Last Resort) म्हणून करावा; राज्यपालांची नियुक्ती करताना संबंधित राज्याच्या मुख्यमंत्र्यांचा सल्ला घ्यावा; आंतरराज्य परिषद स्थापन करावी; २) मदन मोहन पुंछी आयोग (२००७): राष्ट्रपतींप्रमाणे राज्यपालांवरही महाभियोग चालवण्याची तरतूद असावी; राज्यपालांना विद्यापीठांचे कुलपती पद देऊ नये; स्थानिक स्वराज्य संस्थांचे सक्षमीकरण",
                                            titleEn: "Landmark Federal Commissions: Sarkaria Commission 1983 (Art 356 as extreme last resort; CM consultation prior to Governor appointment; Inter-State Council setup); Punchhi Commission 2007 (State Governor impeachment on lines of President; Stripping Chancellorship of Universities from Governors)",
                                            chips: ["सरकारिया आयोग १९८३ (कलम ३५६ अंतिम उपाय)", "मुख्यमंत्र्यांचा सल्ला राज्यपाल नियुक्ती", "पुंछी आयोग २००७ (राज्यपाल महाभियोग शिफारस)", "कुलपती पद बंदी"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय राज्यघटना व राजकारण", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण १४ व ४५: वित्तीय संबंध व वित्त आयोग" },
                                        { book: "Commission on Centre-State Relations", standard: "M.M. Punchhi Commission Report 2010", chapterRef: "Volume II & III" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग C — केंद्रीय व राज्य विधिमंडळ: कामकाज व कायदेप्रक्रिया (Legislatures)
                        // =========================================================================
                        {
                            id: "gb_mpol_c06",
                            code: "MP06",
                            section: "C",
                            slug: "parliamentary-procedures-motions-and-financial-business",
                            nameMr: "संसदीय कामकाज कार्यपद्धती: प्रश्नोत्तरे, विविध प्रस्ताव व अर्थसंकल्प मंजुरी",
                            nameEn: "Parliamentary Procedures: Sessions, Devices (Questions & Motions) & Budget Enactment",
                            name: "संसदीय कामकाज व प्रस्ताव (Parliamentary Devices & Budget Passage)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mpol_c06",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mpol_c05",
                            nextChapterId: "gb_mpol_c07",
                            metaDescriptionMr: "संसदीय सत्रे (अर्थसंकल्पीय, पावसाळी, हिवाळी), प्रश्नोत्तरांचा तास (तारांकित, अतारांकित, अल्पसूचनेचे), शून्य प्रहर (Zero Hour), अविश्वास प्रस्ताव (No-Confidence Motion), तहकुबी प्रस्ताव, आणि अर्थसंकल्प मंजुरीचे ६ टप्पे.",
                            metaDescriptionEn: "In-depth review of Parliamentary Procedures: Sessions & Prorogation, Question Hour (Starred oral, Unstarred written, Short notice), Zero Hour (Indian innovation 1962), Motions (Adjournment, No-Confidence 50 MPs support, Censure, Privilege), and 6 Stages of Budget Enactment.",
                            notesJsonPath: "/data/notes/group_b/mains/polity_governance/c06_parliamentary_procedures.json",
                            quizTag: "gb_mpol_parl_proc_01",
                            tags: ["Parliamentary System", "Question Hour Starred Unstarred", "Zero Hour 1962", "No Confidence Motion 50 MPs", "Adjournment Motion", "Cut Motions", "High-Weightage"],
                            searchKeywords: ["parliamentary procedures question hour starred unstarred green white", "zero hour indian innovation 1962", "no confidence motion rule 198 50 members", "adjournment motion 50 members 2.5 hours", "budget passage 6 stages appropriation finance bill", "cut motions policy economy token", "संसदीय कामकाज", "प्रश्नोत्तरांचा तास तारांकित अतारांकित", "शून्य प्रहर Zero Hour", "अविश्वास प्रस्ताव ५० सदस्य", "कामकाज तहकुबी प्रस्ताव", "कपात प्रस्ताव"],
                            topics: [
                                {
                                    id: "top_gb_mp06_01",
                                    nameMr: "प्रश्नांचे प्रकार, संसदेतील विविध प्रस्ताव, अर्थसंकल्प मंजुरीचे टप्पे आणि कपात प्रस्ताव",
                                    nameEn: "Parliamentary Inquisitions, Motions Typology, Budgetary Stages & Cut Motions",
                                    subtopics: [
                                        {
                                            id: "st_gb_mp06_01_01",
                                            titleMr: "संसदीय कामकाजाची साधने (प्रश्नोत्तरांचा तास व शून्य प्रहर): १) प्रश्नोत्तरांचा तास (Question Hour: सत्राचा पहिला तास, सकाळी ११ ते १२; तारांकित प्रश्न / Starred: तोंडी उत्तर दिले जाते, पूरक प्रश्न विचारता येतात; अतारांकित प्रश्न / Unstarred: लेखी उत्तर दिले जाते, पूरक प्रश्न विचारता येत नाहीत; अल्पसूचनेचे प्रश्न: १० दिवसांपेक्षा कमी नोटीसवर); २) शून्य प्रहर (Zero Hour: दुपारी १२ ते १; भारतीय संसदेने जगाला दिलेली देणगी - १९६२ पासून सुरुवात; नियमावलीत उल्लेख नाही; तातडीच्या सार्वजनिक महत्त्वाच्या बाबी मांडणे)",
                                            titleEn: "Parliamentary Inquisitions: Question Hour (11 AM to 12 PM; Starred oral questions allowing supplementaries; Unstarred written questions with no supplementaries; Short Notice questions); Zero Hour (12 PM to 1 PM, Indian parliamentary innovation since 1962 without rulebook mention)",
                                            chips: ["प्रश्नोत्तरांचा तास (११ ते १२)", "तारांकित प्रश्न (तोंडी उत्तर, पूरक प्रश्न)", "अतारांकित प्रश्न (लेखी उत्तर)", "शून्य प्रहर (Zero Hour १९६२)"]
                                        },
                                        {
                                            id: "st_gb_mp06_01_02",
                                            titleMr: "महत्त्वाचे संसदीय प्रस्ताव (Motions): १) अविश्वास प्रस्ताव (No-Confidence Motion: केवळ लोकसभेत मांडला जातो; किमान ५० सदस्यांचा पाठिंबा आवश्यक; सरकारचे बहुमत तपासण्यासाठी; मंजूर झाल्यास मंत्रिमंडळाला राजीनामा द्यावा लागतो); २) निंदाव्यंजक प्रस्ताव (Censure Motion: सरकारच्या विशिष्ट धोरणावर नाराजी; राजीनामा देणे बंधनकारक नसते); ३) तहकुबी प्रस्ताव (Adjournment Motion: चालू कामकाज थांबवून तातडीच्या बाबीवर चर्चा; ५० सदस्यांचा पाठिंबा, किमान २.५ तास चर्चा); ४) हक्कभंग प्रस्ताव (Privilege Motion)",
                                            titleEn: "Parliamentary Motions: No-Confidence Motion (Lok Sabha only, 50 MPs support, tests majority, ministry must resign if passed); Censure Motion (Expresses regret on specific policy, no resignation); Adjournment Motion (Urgent definite public matter, halts business, 50 MPs support, min 2.5 hrs debate); Privilege Motion",
                                            chips: ["अविश्वास प्रस्ताव (केवळ लोकसभा, ५० खासदार)", "मंत्रिमंडळ राजीनामा", "तहकुबी प्रस्ताव (२.५ तास चर्चा)", "हक्कभंग प्रस्ताव"]
                                        },
                                        {
                                            id: "st_gb_mp06_01_03",
                                            titleMr: "अर्थसंकल्प मंजुरीचे ६ टप्पे आणि कपात प्रस्ताव: टप्पे: १) अर्थसंकल्प सादर करणे, २) सर्वसाधारण चर्चा, ३) विभागीय स्थायी समित्यांकडून छाननी, ४) अनुदानाच्या मागण्यांवर मतदान (केवळ लोकसभा), ५) विनियोजन विधेयक (Appropriation Bill कलम ११४ - एकत्रित निधीतून पैसे काढण्यासाठी), ६) वित्त विधेयक (Finance Bill - कर आकारणीसाठी); कपात प्रस्ताव (Cut Motions): १) धोरण कपात (Disapproval of Policy - मागणीची रक्कम १ रु. करणे), २) काटकसर कपात (Economy Cut - ठराविक रक्कम कमी करणे), ३) टोकन/प्रतिकात्मक कपात (Token Cut - १०० रु. कमी करणे)",
                                            titleEn: "Budget Enactment Stages & Cut Motions: 6 Stages (Presentation, General discussion, Standing committee scrutiny, Voting on Demands for Grants in Lok Sabha, Appropriation Bill Art 114, Finance Bill); Cut Motions: Policy Cut (Reduce demand to Re 1), Economy Cut (Specific amount reduction), Token Cut (Reduce by Rs 100)",
                                            chips: ["अर्थसंकल्प ६ टप्पे", "विनियोजन विधेयक (कलम ११४)", "धोरण कपात (रक्कम १ रु.)", "टोकन कपात (१०० रु.)", "अनुदानाच्या मागण्यांवर मतदान"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय राज्यघटना व राजकारण", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण २२: संसद - कामकाजाची साधने व कायदे प्रक्रिया" },
                                        { book: "Practice and Procedure of Parliament", standard: "M.N. Kaul & S.L. Shakdher", chapterRef: "Chapter 18 & 21: Questions & Motions" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mpol_c07",
                            code: "MP07",
                            section: "C",
                            slug: "anti-defection-law-tenth-schedule-and-speaker-jurisdiction",
                            nameMr: "पक्षांतर बंदी कायदा (१० वे परिशिष्ट), अपात्रता आणि विधिमंडळ अध्यक्षांचे अधिकार",
                            nameEn: "Anti-Defection Law (Tenth Schedule): Grounds for Disqualification & Speaker's Powers",
                            name: "पक्षांतर बंदी कायदा व १० वे परिशिष्ट (Anti-Defection Law)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mpol_c07",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mpol_c06",
                            nextChapterId: "gb_mpol_c08",
                            metaDescriptionMr: "५२ वी घटनादुरुस्ती (१९८५ - १० वे परिशिष्ट), ९१ वी घटनादुरुस्ती (२००३ - १/३ फूट संरक्षण रद्द, २/३ विलीनीकरण आवश्यक), अपात्रतेचे निकष (पक्षाचा व्हिप मोडणे, स्वेच्छेने पक्ष सोडणे), किहोटो होलोहन खटला (न्यायालयीन पुनर्विलोकन), आणि केहशाम मेघचंद्र निकाल.",
                            metaDescriptionEn: "In-depth review of Anti-Defection Law: 52nd Amendment Act 1985 (10th Schedule), 91st Amendment 2003 (Abolished 1/3rd split defence; mandates 2/3rd merger), Disqualification grounds (Voluntary resignation, Defying party whip), Kihoto Hollohan 1992 (Speaker acts as Tribunal, subject to judicial review), and Keisham Meghachandra (3-month decision deadline).",
                            notesJsonPath: "/data/notes/group_b/mains/polity_governance/c07_anti_defection_law.json",
                            quizTag: "gb_mpol_defection_01",
                            tags: ["Constitutional Law", "10th Schedule", "52nd Amendment 1985", "91st Amendment 2003", "Kihoto Hollohan 1992", "Speaker As Tribunal", "High-Weightage"],
                            searchKeywords: ["anti defection law tenth schedule 52nd amendment 1985", "91st constitutional amendment act 2003 split deleted 2 3rd merger", "grounds of disqualification defying party whip voluntary giving up membership", "kihoto hollohan case 1992 speaker judicial review tribunal", "keisham meghachandra case 3 months speaker deadline", "पक्षांतर बंदी कायदा १० वे परिशिष्ट", "५२ वी घटनादुरुस्ती १९८५", "९१ वी दुरुस्ती २००३ विलीनीकरण २/३", "किहोटो होलोहन निकाल १९९२", "विधानसभा अध्यक्ष लवाद भूमिका", "व्हिप Whip उल्लंघन"],
                            topics: [
                                {
                                    id: "top_gb_mp07_01",
                                    nameMr: "१० व्या परिशिष्टाची पार्श्वभूमी, अपात्रतेचे निकष, अपवाद आणि अध्यक्षांची लवाद भूमिका",
                                    nameEn: "Tenth Schedule Genesis, Disqualification Parameters, Merger Exceptions & Tribunal Adjudication",
                                    subtopics: [
                                        {
                                            id: "st_gb_mp07_01_01",
                                            titleMr: "पक्षांतर बंदी कायद्याची ऐतिहासिक पार्श्वभूमी व घटनादुरुस्त्या: 'आया राम गया राम' संस्कृती संपवण्यासाठी राजीव गांधी सरकारने ५२ वी घटनादुरुस्ती १९८५ अन्वये संविधानात १० वे परिशिष्ट जोडले; ९१ वी घटनादुरुस्ती कायदा २००३: या दुरुस्तीने १/३ सदस्यांच्या फुटीला (Split) मिळणारे कायदेशीर संरक्षण रद्द केले; सध्या पक्षांतरापासून संरक्षण मिळवण्यासाठी किमान २/३ सदस्यांसह दुसऱ्या पक्षात संपूर्ण 'विलीनीकरण' (Merger) होणे अनिवार्य आहे",
                                            titleEn: "Legislative Genesis & Amendments: 52nd Constitutional Amendment 1985 inserted 10th Schedule; 91st Amendment 2003 deleted the exception of 1/3rd 'split'; Now mandates full party 'merger' supported by at least 2/3rd of the legislative wing members",
                                            chips: ["१० वे परिशिष्ट (५२ वी दुरुस्ती १९८५)", "आया राम गया राम", "९१ वी दुरुस्ती २००३ (१/३ फूट रद्द)", "किमान २/३ विलीनीकरण अनिवार्य"]
                                        },
                                        {
                                            id: "st_gb_mp07_01_02",
                                            titleMr: "अपात्रतेचे ४ मुख्य निकष (Grounds for Disqualification): १) राजकीय पक्षाच्या सदस्याने स्वेच्छेने पक्षाचे सदस्यत्व सोडल्यास (Voluntarily giving up membership - केवळ राजीनामा देणे नव्हे, तर पक्षविरोधी वर्तनाचाही समावेश); २) पक्षाने जारी केलेल्या व्हिपच्या (Whip) विरोधात जाऊन मतदान केल्यास किंवा मतदानाला गैरहजर राहिल्यास (पक्षाने १५ दिवसांत माफ न केल्यास); ३) अपक्ष सदस्याने निवडणुकीनंतर कोणत्याही राजकीय पक्षात प्रवेश केल्यास; ४) नामनिर्देशित सदस्याने शपथ घेतल्यापासून ६ महिन्यांनंतर राजकीय पक्षात प्रवेश केल्यास",
                                            titleEn: "4 Grounds for Disqualification: 1) Voluntarily giving up party membership (broadly interpreted to include anti-party conduct), 2) Voting or abstaining contrary to Party Whip without 15-day condonation, 3) Independent member joining any political party, 4) Nominated member joining a party AFTER 6 months",
                                            chips: ["स्वेच्छेने पक्ष सोडणे", "व्हिप (Whip) उल्लंघन", "अपक्ष सदस्याने पक्षात जाणे", "नामनिर्देशित सदस्य (६ महिने मर्यादा)"]
                                        },
                                        {
                                            id: "st_gb_mp07_01_03",
                                            titleMr: "किहोटो होलोहन खटला (१९९२) आणि अध्यक्षांचे अधिकारक्षेत्र: १० व्या परिशिष्टातील परिच्छेद ७ (अध्यक्षांच्या निर्णयाला न्यायालयात आव्हान देता येणार नाही ही तरतूद) सर्वोच्च न्यायालयाने असंवैधानिक ठरवला; अपात्रतेचा निर्णय घेताना लोकसभा अध्यक्ष किंवा विधानसभा अध्यक्ष हे 'लवाद' (Tribunal) म्हणून काम करतात; त्यामुळे अध्यक्षांचा अंतिम निकाल हा उच्च व सर्वोच्च न्यायालयाच्या 'न्यायालयीन पुनर्विलोकनाच्या' (Judicial Review) कक्षेत येतो; केहशाम मेघचंद्र खटला (२०२०): अध्यक्षांनी अपात्रतेच्या याचिकांवर कमाल ३ महिन्यांच्या आत निर्णय घेतला पाहिजे",
                                            titleEn: "Kihoto Hollohan 1992 & Judicial Review: Paragraph 7 barring judicial review struck down; Speaker acts as a statutory 'Tribunal' while deciding disqualification petitions; Final orders subject to High Court/Supreme Court judicial review; Keisham Meghachandra (2020) ruled Speaker should decide petitions within 3 months",
                                            chips: ["किहोटो होलोहन खटला १९९२", "विधानसभा अध्यक्ष = लवाद (Tribunal)", "न्यायालयीन पुनर्विलोकन शक्य", "केहशाम मेघचंद्र निकाल (३ महिने मुदत)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय राज्यघटना व राजकारण", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण ७९: पक्षांतर बंदी कायदा" },
                                        { book: "Supreme Court Cases (SCC)", standard: "Landmark Rulings", chapterRef: "Kihoto Hollohan (1992) & Keisham Meghachandra (2020)" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग D — उच्च न्यायव्यवस्था व जनहित याचिका (Judicial Administration)
                        // =========================================================================
                        {
                            id: "gb_mpol_c08",
                            code: "MP08",
                            section: "D",
                            slug: "higher-judiciary-collegium-system-and-judicial-activism",
                            nameMr: "उच्च न्यायव्यवस्था: कॉलेजियम पद्धत, न्यायिक सक्रियता आणि जनहित याचिका (PIL)",
                            nameEn: "Higher Judiciary: Collegium System Controversy, Judicial Activism & PIL Dynamics",
                            name: "न्यायालयीन कॉलेजियम व जनहित याचिका (Judicial Activism & PIL)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mpol_c08",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mpol_c07",
                            nextChapterId: "gb_mpol_c09",
                            metaDescriptionMr: "Three Judges Cases (१९८१, १९९३, १९९८), कॉलेजियम पद्धतीची उत्क्रांती (CJI + ४ ज्येष्ठ न्यायाधीश), ९९ वी घटनादुरुस्ती (NJAC रद्द निकाल), न्यायिक सक्रियता (Judicial Activism) विरुद्ध न्यायालयीन अतिक्रमण, आणि जनहित याचिका (PIL - न्या. पी. एन. भगवती).",
                            metaDescriptionEn: "In-depth review of Higher Judiciary Administration: Three Judges Cases (1981 First, 1993 Second, 1998 Third Judges Case establishing CJI + 4 collegium), NJAC 99th Amendment struck down (Fourth Judges Case 2015), Judicial Activism vs Overreach, and Public Interest Litigation (PIL pioneers: Justice P.N. Bhagwati & V.R. Krishna Iyer).",
                            notesJsonPath: "/data/notes/group_b/mains/polity_governance/c08_judiciary_collegium_pil.json",
                            quizTag: "gb_mpol_jud_act_01",
                            tags: ["Judiciary", "Collegium System", "Three Judges Cases", "NJAC 99th Amendment Struck Down", "Judicial Activism", "PIL Justice Bhagwati", "High-Weightage"],
                            searchKeywords: ["three judges cases collegium system first second third judges case", "njac 99th constitutional amendment fourth judges case struck down", "collegium composition cji plus 4 senior most judges", "public interest litigation pil justice p n bhagwati v r krishna iyer", "judicial activism vs judicial overreach separation of powers", "कॉलेजियम पद्धत खटले", "NJAC ९९ वी घटनादुरुस्ती रद्द", "CJI + ४ ज्येष्ठ न्यायाधीश कॉलेजियम", "जनहित याचिका PIL पी एन भगवती", "न्यायिक सक्रियता"]
                        },


                        // =========================================================================
                        // विभाग E — महाराष्ट्र राज्य शासन व प्रशासकीय उतरंड (Maharashtra Administrative Machinery)
                        // =========================================================================
                        {
                            id: "gb_mpol_c09",
                            code: "MP09",
                            section: "E",
                            slug: "maharashtra-state-administrative-machinery-mantralaya-to-divisional-level",
                            nameMr: "महाराष्ट्र राज्य प्रशासन: मंत्रालय, मुख्य सचिव व विभागीय आयुक्त रचना",
                            nameEn: "Maharashtra State Administration: Mantralaya Secretariat, Chief Secretary & Divisional Commissioner",
                            name: "महाराष्ट्र राज्य प्रशासन: मंत्रालय ते विभाग (State Secretariat & Divisional Administration)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 5,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mpol_c09",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mpol_c08",
                            nextChapterId: "gb_mpol_c10",
                            metaDescriptionMr: "महाराष्ट्र राज्य प्रशासकीय यंत्रणा, मंत्रालय (सचिवालय) कार्यपद्धती, मुख्य सचिव (Chief Secretary - पदानुक्रम, अधिकार, मुख्यमंत्र्यांचे मुख्य सल्लागार), विभागीय आयुक्त (Divisional Commissioner - महसूल व कायदा-सुव्यवस्था समन्वय), आणि ६ महसूल विभाग.",
                            metaDescriptionEn: "In-depth review of Maharashtra Administrative Hierarchy: Mantralaya State Secretariat workflow, Office of the Chief Secretary (Powers, tenure, principal advisor to CM, Cabinet Secretary of State), Divisional Commissioner (Revenue jurisdiction, coordination between State and Districts), and the 6 Revenue Divisions.",
                            notesJsonPath: "/data/notes/group_b/mains/polity_governance/c09_mh_state_secretariat.json",
                            quizTag: "gb_mpol_mh_admin_01",
                            tags: ["Maharashtra Administration", "Mantralaya Secretariat", "Chief Secretary Powers", "Divisional Commissioner", "6 Revenue Divisions", "High-Weightage"],
                            searchKeywords: ["maharashtra state administration structure mantralaya", "chief secretary of maharashtra powers role secretary to cabinet", "divisional commissioner revenue administration coordinator", "6 revenue divisions maharashtra konkan pune nashik chhatrapati sambhajinagar amravati nagpur", "line agency vs staff agency secretariat", "महाराष्ट्र शासन प्रशासकीय यंत्रणा मंत्रालय", "मुख्य सचिव अधिकार व कार्ये", "विभागीय आयुक्त महसूल", "६ प्रशासकीय महसूल विभाग"],
                            topics: [
                                {
                                    id: "top_gb_mp09_01",
                                    nameMr: "मंत्रालयाची प्रशासकीय रचना, मुख्य सचिवांचे स्थान, अधिकार आणि विभागीय आयुक्तांची भूमिका",
                                    nameEn: "Secretariat Workflow, Chief Secretary Precedence, Line-Staff Functions & Divisional Revenue Supervision",
                                    subtopics: [
                                        {
                                            id: "st_gb_mp09_01_01",
                                            titleMr: "मंत्रालय (राज्य सचिवालय - Mantralaya): राज्याच्या प्रशासनाचा केंद्रबिंदू (मुख्यालय: मुंबई); धोरणनिर्मिती करणारी संस्था (Staff Agency); राजकीय प्रमुख: संबंधित खात्याचा मंत्री; प्रशासकीय प्रमुख: खात्याचा प्रधान सचिव / सचिव (IAS); विभागांची रचना: सामान्य प्रशासन विभाग (GAD - मुख्यमंत्र्यांच्या अखत्यारीत, सर्वात महत्त्वाचा विभाग), गृह विभाग, महसूल विभाग, वित्त विभाग; कार्यपद्धती नियमावली (Rules of Business)",
                                            titleEn: "Mantralaya (State Secretariat): Policy-making hub at Mumbai; Operates as a Staff Agency; Political Head is Cabinet Minister, Administrative Head is Principal Secretary/Secretary (IAS); General Administration Department (GAD under CM) is apex nodal wing; State Rules of Business",
                                            chips: ["मंत्रालय (राज्य सचिवालय Staff Agency)", "सामान्य प्रशासन विभाग (GAD)", "प्रधान सचिव / सचिव", "धोरणनिर्मिती केंद्र"]
                                        },
                                        {
                                            id: "st_gb_mp09_01_02",
                                            titleMr: "मुख्य सचिव (Chief Secretary of Maharashtra): राज्यातील प्रशासकीय यंत्रणेचे सर्वोच्च प्रमुख (पदानुक्रमात राज्यात प्रथम); मुख्यमंत्र्यांचे मुख्य प्रशासकीय सल्लागार; राज्य मंत्रिमंडळाचे सचिव (Secretary to Cabinet - मंत्रिमंडळ बैठकांचे इतिवृत्त नोंदवणे); सामान्य प्रशासन विभागाचे (GAD) प्रशासकीय प्रमुख; आपत्कालीन परिस्थितीत संकट व्यवस्थापक (Crisis Manager-in-Chief); केंद्र व राज्य शासनामधील मुख्य दुवा",
                                            titleEn: "Chief Secretary of Maharashtra: Apex civil servant of state bureaucracy; Senior-most IAS officer; Principal advisor to Chief Minister; Secretary to State Cabinet (records minutes); Administrative head of GAD; Crisis Manager-in-Chief during state disasters; Nodal link with Union Government",
                                            chips: ["मुख्य सचिव (सर्वोच्च प्रशासकीय प्रमुख)", "मंत्रिमंडळाचे सचिव", "मुख्यमंत्र्यांचे मुख्य सल्लागार", "क्रायसिस मॅनेजर (Crisis Manager)", "GAD प्रमुख"]
                                        },
                                        {
                                            id: "st_gb_mp09_01_03",
                                            titleMr: "विभागीय आयुक्त (Divisional Commissioner): राज्य सरकार आणि जिल्हा प्रशासन यांमधील मुख्य दुवा; महसूल विभागाचा प्रशासकीय प्रमुख (कोकण, पुणे, नाशिक, छत्रपती संभाजीनगर, अमरावती, नागपूर); अधिकार: महसूल अपीलांची सुनावणी, नैसर्गिक आपत्ती नियंत्रण, जिल्ह्यातील कायदा-सुव्यवस्था समन्वय, जिल्हाधिकाऱ्यांच्या कामकाजावर पर्यवेक्षण; विभागीय दक्षता पथकाचे प्रमुख",
                                            titleEn: "Divisional Commissioner: Intermediary link between State Secretariat and District Collectorates across 6 Revenue Divisions; Senior IAS officer exercising revenue appellate jurisdiction, disaster relief coordination, law & order oversight and vigilance over district collectors",
                                            chips: ["विभागीय आयुक्त (Divisional Commissioner)", "६ महसूल विभाग", "जिल्हाधिकारी पर्यवेक्षण", "महसूल अपील सुनावणी", "दुवा संस्था"]
                                        }
                                    ],
                                    sources: [
                                        { book: "महाराष्ट्र राज्य प्रशासन", standard: "डॉ. बी. बी. पाटील", chapterRef: "प्रकरण १ व २: मंत्रालय व मुख्य सचिव" },
                                        { book: "जिल्हा प्रशासन व स्थानिक संस्था", standard: "के. सागर", chapterRef: "विभागीय आयुक्त रचना व अधिकार" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mpol_c10",
                            code: "MP10",
                            section: "E",
                            slug: "district-administration-collector-sdm-tahsildar-and-talathi",
                            nameMr: "जिल्हा व महसूल प्रशासन: जिल्हाधिकारी, उपविभागीय अधिकारी (SDO), तहसीलदार व तलाठी",
                            nameEn: "District & Revenue Administration: District Collector, SDO, Tahsildar & Talathi",
                            name: "जिल्हा व तालुका प्रशासन (District Administration: Collector to Talathi)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 5,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mpol_c10",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mpol_c09",
                            nextChapterId: "gb_mpol_c11",
                            metaDescriptionMr: "जिल्हा प्रशासन (वॉरेन हेस्टिंग्स १७७२), जिल्हाधिकाऱ्यांची चतुर्विध भूमिका (जिल्हा दंडाधिकारी DM, जिल्हा महसूल अधिकारी, जिल्हा निवडणूक अधिकारी, आपत्ती व्यवस्थापन प्राधिकरण अध्यक्ष), उपविभागीय अधिकारी (SDO/प्रांत), तहसीलदार (तालुका कार्यकारी दंडाधिकारी), मंडळ अधिकारी, आणि तलाठी (गावचा महसूल दप्तरदार - सातबारा नोंद).",
                            metaDescriptionEn: "In-depth review of District Administration: Genesis of Collector (Warren Hastings 1772), Quadruple role of District Collector (DM, District Collector, District Election Officer, Disaster Management Chair), Sub-Divisional Officer (SDO/Prant), Tahsildar (Taluka Executive Magistrate), Circle Officer, and Talathi (Patwari - village 7/12 land records maintainer).",
                            notesJsonPath: "/data/notes/group_b/mains/polity_governance/c10_district_administration.json",
                            quizTag: "gb_mpol_collector_01",
                            tags: ["Maharashtra Administration", "District Collector", "District Magistrate DM", "Tahsildar Taluka Executive", "Talathi Village Level", "7/12 Land Records", "High-Weightage"],
                            searchKeywords: ["district administration warren hastings 1772 genesis", "district collector quadruple role dm revenue election officer", "sub divisional officer sdo prant officer powers", "tahsildar taluka executive magistrate duties", "talathi patwari village level revenue officer 7 12 records", "circle inspector mandal adhikari", "जिल्हाधिकारी पद निर्मिती वॉरेन हेस्टिंग्स १७७२", "जिल्हा दंडाधिकारी DM अधिकार", "उपविभागीय अधिकारी प्रांत", "तहसीलदार तालुका दंडाधिकारी", "तलाठी सातबारा गाव पातळी महसूल"],
                            topics: [
                                {
                                    id: "top_gb_mp10_01",
                                    nameMr: "जिल्हाधिकाऱ्यांची बहुविध पदे, तालुका महसूल यंत्रणा आणि गाव पातळीवरील तलाठी",
                                    nameEn: "Collector's Multi-Faceted Prerogatives, Sub-Divisional Operations & Talathi Grassroots Registrations",
                                    subtopics: [
                                        {
                                            id: "st_gb_mp10_01_01",
                                            titleMr: "जिल्हाधिकारी (District Collector): पदनिर्मिती: वॉरेन हेस्टिंग्स यांनी १७७२ मध्ये केली; जिल्ह्याचा प्रशासकीय प्रमुख; चतुर्विध भूमिका: १) जिल्हाधिकारी (Collector - जमीन महसूल गोळा करणे, महाराष्ट्र जमीन महसूल अधिनियम १९६६ ची अंमलबजावणी); २) जिल्हा दंडाधिकारी (District Magistrate - कलम १४४ CrPC संचारबंदी जारी करणे, पोलीस दलावर नियंत्रण, कायदा व सुव्यवस्था); ३) जिल्हा निवडणूक अधिकारी (लोकसभा, विधानसभा निवडणुकांचे संचालन); ४) जिल्हा आपत्ती व्यवस्थापन प्राधिकरण अध्यक्ष (DDMA)",
                                            titleEn: "District Collector: Created in 1772 by Warren Hastings; Multi-dimensional roles: 1) Revenue Collector (MLR Code 1966 enforcement), 2) District Magistrate (CrPC Sec 144 curfew, law & order, police oversight), 3) District Election Officer (Conducting Parliamentary/Assembly polls), 4) Chairman of District Disaster Management Authority (DDMA)",
                                            chips: ["जिल्हाधिकारी (वॉरेन हेस्टिंग्स १७७२)", "जिल्हा दंडाधिकारी (DM कलम १४४)", "जिल्हा निवडणूक अधिकारी", "आपत्ती व्यवस्थापन अध्यक्ष DDMA", "महाराष्ट्र जमीन महसूल संहिता १९६६"]
                                        },
                                        {
                                            id: "st_gb_mp10_01_02",
                                            titleMr: "उपविभागीय अधिकारी (SDO / प्रांत अधिकारी): जिल्ह्याचे विभाजन उपविभागात (Sub-Divisions) केले जाते; प्रमुख: उपविभागीय अधिकारी (IAS किंवा उपजिल्हाधिकारी दर्जाचा वर्ग-१ अधिकारी); अधिकार: उपविभागीय दंडाधिकारी (SDM), महसूल अपीलांची सुनावणी, जात प्रमाणपत्र पडताळणी व तहसीलदारांच्या कामकाजावर थेट नियंत्रण",
                                            titleEn: "Sub-Divisional Officer (SDO / Prant Officer): Heads sub-division of a district (IAS or Deputy Collector Class-1); Sub-Divisional Magistrate (SDM), appellate revenue authority over Tahsildar, caste certificate verifications, land acquisition officer",
                                            chips: ["उपविभागीय अधिकारी (SDO / प्रांत)", "उपजिल्हाधिकारी दर्जा", "उपविभागीय दंडाधिकारी SDM", "तहसीलदार नियंत्रण"]
                                        },
                                        {
                                            id: "st_gb_mp10_01_03",
                                            titleMr: "तहसीलदार (Tahsildar): तालुक्याचा प्रशासकीय प्रमुख व तालुका कार्यकारी दंडाधिकारी (Executive Magistrate); नियुक्ती MPSC द्वारे (वर्ग-१ राजपत्रित); कार्ये: तालुक्यातील जमीन महसूल वसुली, नैसर्गिक आपत्तीत पंचनामे व भरपाई वाटप, रेशनिंग/अन्नधान्य पुरवठा व्यवस्था, जात व उत्पन्नाचे दाखले देणे, संजय गांधी निराधार योजनेच्या समितीचे सचिव",
                                            titleEn: "Tahsildar: Administrative head of Taluka and Taluka Executive Magistrate; Appointed via MPSC (Class-1 Gazetted); Functions: Revenue collection, disaster assessment panchnamas, public food distribution, issuing domicile/income certificates, Sanjay Gandhi Niradhar committee",
                                            chips: ["तहसीलदार (तालुका कार्यकारी दंडाधिकारी)", "MPSC वर्ग-१ राजपत्रित", "महसूल वसुली व दाखले", "आपत्ती पंचनामे"]
                                        },
                                        {
                                            id: "st_gb_mp10_01_04",
                                            titleMr: "मंडळ अधिकारी (Circle Officer) आणि तलाठी (Talathi): मंडळ अधिकारी: तलाठ्यांच्या कामकाजावर पर्यवेक्षण करणारा मंडल स्तरावरील अधिकारी; तलाठी (पटवारी): गाव पातळीवरील सर्वात महत्त्वाचा महसूल कर्मचारी (वर्ग-३); 'गावचा दप्तरदार'; कार्ये: गावातील जमिनीच्या मालकी हक्कांच्या नोंदी ठेवणे, ७/१२ (सातबारा) उतारा देणे, ८-अ नोंदवही ठेवणे, पीक पाहणी (ई-पीक पाहणी) करणे व फेरफार नोंदी (Mutation Entries) प्रमाणित करणे",
                                            titleEn: "Circle Officer & Talathi (Patwari): Circle Officer supervises talathis; Talathi is grassroots village revenue officer (Class-3); Custodian of village land records; Maintains Record of Rights (7/12 extract), 8-A register, crop inspections (e-Peek Pahani), and Mutation entries",
                                            chips: ["मंडळ अधिकारी (Circle Officer)", "तलाठी (गावचा महसूल दप्तरदार)", "७/१२ (सातबारा उतारा)", "८-अ नोंदवही", "फेरफार नोंदी (Mutation)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "जिल्हा प्रशासन", standard: "के. सागर", chapterRef: "प्रकरण ३ व ४: जिल्हाधिकारी ते तलाठी महसूल यंत्रणा" },
                                        { book: "महाराष्ट्र जमीन महसूल संहिता, १९६६", standard: "शासकीय गॅझेट", chapterRef: "महसूल अधिकारी व अधिकार" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग F — निवडणूक सुधारणा, आयोग व मास्टर रिव्हिजन (Electoral & Master Synthesis)
                        // =========================================================================
                        {
                            id: "gb_mpol_c11",
                            code: "MP11",
                            section: "F",
                            slug: "electoral-process-model-code-of-conduct-and-reforms",
                            nameMr: "निवडणूक प्रक्रिया, आदर्श आचारसंहिता (MCC) आणि लोकप्रतिनिधित्व कायदे",
                            nameEn: "Electoral Process: Model Code of Conduct (MCC), RPA 1950/1951 & Reforms",
                            name: "निवडणूक प्रक्रिया व आचारसंहिता (Electoral Process & RPA)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mpol_c11",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mpol_c10",
                            nextChapterId: "gb_mpol_c12",
                            metaDescriptionMr: "लोकप्रतिनिधित्व कायदा १९५० व १९५१ मधील फरक, आदर्श आचारसंहिता (MCC - स्वरूप व अंमलबजावणी), उमेदवारांची अपात्रता (लिली थॉमस खटला - २ वर्षे शिक्षेवर तात्काळ अपात्रता), EVM-VVPAT कायदेशीर चौकट, आणि निवडणूक निधी.",
                            metaDescriptionEn: "In-depth review of Electoral Mechanics: Representation of the People Acts (RPA 1950 vs RPA 1951), Model Code of Conduct (MCC non-statutory enforceability), Disqualification of MPs/MLAs (Lily Thomas 2013 verdict striking down Sec 8(4)), EVM-VVPAT integrity, and Electoral funding reforms.",
                            notesJsonPath: "/data/notes/group_b/mains/polity_governance/c11_electoral_reforms.json",
                            quizTag: "gb_mpol_electoral_01",
                            tags: ["Electoral Reforms", "RPA 1950 RPA 1951", "Model Code of Conduct MCC", "Lily Thomas Case 2013", "EVM VVPAT Paper Trail", "High-Weightage"],
                            searchKeywords: ["representation of the people act 1950 vs 1951 differences", "model code of conduct mcc election commission enforceable", "lily thomas case 2013 section 8 4 unconstitutional disqualification", "evm vvpat supreme court verification guidelines", "election expenditure limits candidate political parties", "लोकप्रतिनिधित्व कायदा १९५० व १९५१ फरक", "आदर्श आचारसंहिता MCC", "लिली थॉमस खटला २०१३ अपात्रता", "EVM VVPAT सर्वोच्च न्यायालय निकाल", "निवडणूक सुधारणा समित्या"],
                            topics: [
                                {
                                    id: "top_gb_mp11_01",
                                    nameMr: "लोकप्रतिनिधित्व कायदे (RPA), आचारसंहितेचे नियम, अपात्रता आणि EVM-VVPAT पडताळणी",
                                    nameEn: "Statutory RPA Architecture, MCC Enforcement, Disqualification Precedents & EVM Integrity",
                                    subtopics: [
                                        {
                                            id: "st_gb_mp11_01_01",
                                            titleMr: "लोकप्रतिनिधित्व कायदे १९५० विरुद्ध १९५१ (RPA 1950 vs 1951 - MPSC चा आवडता फरक): १) RPA १९५०: मतदारसंघ सीमांकन, मतदारांची अर्हता, मतदार याद्या तयार करणे व संसदेतील जागांची विभागणी; २) RPA १९५१: प्रत्यक्ष निवडणुकांचे संचालन, उमेदवारांची पात्रता व अपात्रता, राजकीय पक्षांची नोंदणी (कलम २९A), भ्रष्ट गैरव्यवहार (Corrupt Practices), निवडणूक विवाद व याचिका",
                                            titleEn: "RPA 1950 vs RPA 1951: RPA 1950 governs delimitation of constituencies, voter qualifications, preparation of electoral rolls; RPA 1951 governs conduct of elections, qualifications/disqualifications of candidates, registration of parties (Sec 29A), corrupt practices, and election disputes",
                                            chips: ["RPA १९५० (मतदार याद्या व सीमांकन)", "RPA १९५१ (निवडणूक संचालन व पात्रता)", "कलम २९A पक्ष नोंदणी", "भ्रष्ट गैरव्यवहार"]
                                        },
                                        {
                                            id: "st_gb_mp11_01_02",
                                            titleMr: "आदर्श आचारसंहिता (Model Code of Conduct - MCC): निवडणूक आयोगाद्वारे निवडणूक कार्यक्रम जाहीर झाल्याच्या क्षणापासून ते निकाल जाहीर होईपर्यंत लागू; हा कोणताही वैधानिक कायदा नसून राजकीय पक्षांच्या सहमतीने तयार झालेली आचारसंहिता आहे; मंत्र्यांना शासकीय वाहने, विमाने व योजनांच्या घोषणा करण्यास बंदी; कलम ३२४ अन्वये आयोगाचे अनिर्बंध अधिकार",
                                            titleEn: "Model Code of Conduct (MCC): Operative from date of election schedule announcement till declaration of results; Non-statutory consensus code enforced by EC under plenary powers of Article 324; Bars ministers from using public state machinery, advertisements or launching new schemes",
                                            chips: ["आदर्श आचारसंहिता (MCC)", "निवडणूक जाहीर होताच लागू", "वैधानिक कायदा नाही (सहमती नियम)", "कलम ३२४ अधिकार"]
                                        },
                                        {
                                            id: "st_gb_mp11_01_03",
                                            titleMr: "उमेदवारांची अपात्रता आणि लिली थॉमस खटला (२०१३): RPA १९५१ च्या कलम ८(३) अन्वये २ वर्षे किंवा त्यापेक्षा जास्त कारावासाची शिक्षा झाल्यास लोकप्रतिनिधी तात्काळ अपात्र ठरतो व शिक्षेच्या कालावधीनंतर पुढील ६ वर्षे निवडणूक लढवण्यास बंदी असते; लिली थॉमस खटल्यात सर्वोच्च न्यायालयाने कलम ८(४) असंवैधानिक ठरवले (पूर्वी अपीलासाठी मिळणारी ३ महिन्यांची सूट रद्द करून शिक्षा होताच 'तात्काळ अपात्रता' लागू केली)",
                                            titleEn: "Disqualification & Lily Thomas Case (2013): RPA Sec 8(3) disqualifies any MP/MLA convicted of an offense and sentenced to 2+ years imprisonment, plus 6-year ban post-release; Lily Thomas struck down Sec 8(4) which previously provided 3-month protection if appeal was filed; Instant disqualification applies",
                                            chips: ["लिली थॉमस खटला २०१३", "कलम ८(४) रद्द (तात्काळ अपात्रता)", "२ वर्षे शिक्षा = अपात्र", "पुढील ६ वर्षे बंदी"]
                                        },
                                        {
                                            id: "st_gb_mp11_01_04",
                                            titleMr: "EVM, VVPAT आणि निवडणूक पारदर्शकता: EVM (Electronic Voting Machine - १९८२ मध्ये केरळच्या परावूर मतदारसंघात प्रायोगिक वापर; भारत इलेक्ट्रॉनिक्स BEL व ECIL निर्मिती); VVPAT (Voter Verifiable Paper Audit Trail - मतदाराला ७ सेकंद दिसणारी छापील स्लिप); सर्वोच्च न्यायालय निकाल: प्रत्येक विधानसभा मतदारसंघातील यादृच्छिक ५ मतदान केंद्रांवरील VVPAT स्लिप्सची EVM मतांशी १००% पडताळणी करणे बंधनकारक",
                                            titleEn: "EVM & VVPAT Verifications: EVMs (Manufactured by BEL & ECIL); VVPAT (Paper audit trail slip visible for 7 seconds); Supreme Court mandate: Mandatory 100% physical matching of VVPAT slips with EVM count in 5 randomly selected polling stations per assembly constituency",
                                            chips: ["EVM यंत्र (BEL व ECIL)", "VVPAT (७ सेकंद स्लिप)", "५ मतदान केंद्रांवर १००% पडताळणी", "निवडणूक पारदर्शकता"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय राज्यघटना व राजकारण", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण ६७, ६८ व ६९: निवडणूक आयोग, निवडणूक कायदे व सुधारणा" },
                                        { book: "Election Commission of India Compendium", standard: "ECI Manual", chapterRef: "Model Code of Conduct & RPA Manual" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mpol_c12",
                            code: "MP12",
                            section: "F",
                            slug: "mains-polity-master-revision-articles-amendments-and-pyq-trends",
                            nameMr: "मुख्य राज्यघटना मास्टर रिव्हिजन: कलमे, महत्त्वाच्या दुरुस्त्या व १० वर्षांचे PYQ विश्लेषण",
                            nameEn: "Mains Polity Master Revision: High-Yield Article Matrix, Landmark Amendments & 10-Year PYQ Insights",
                            name: "राज्यघटना मास्टर रिव्हिजन (Master Revision: Articles & PYQs)",
                            category: "REVISION",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mpol_c12",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mpol_c11",
                            nextChapterId: null,
                            metaDescriptionMr: "मुख्य परीक्षा पेपर २ राज्यघटनेच्या १५ ते २० प्रश्नांची (३० ते ४० गुण) अचूक रणनीती, उच्च काठिण्य पातळीच्या विधानांची सोडवणूक, कलमांचा मास्टर संदर्भ, आणि २०१२ ते २०२५ मधील MPSC गट-ब मुख्य परीक्षेतील PYQ ट्रेंड्स.",
                            metaDescriptionEn: "Master consolidation module: Strategic blueprint for scoring 32+ marks in Mains Paper 2 Polity (15-20 questions), Complex multi-statement elimination heuristics, Constitutional articles quick-sheet, and 10-year MPSC Group B Mains analytical trends.",
                            notesJsonPath: "/data/notes/group_b/mains/polity_governance/c12_master_revision.json",
                            quizTag: "gb_mpol_revision_01",
                            tags: ["Revision", "Mains Paper 2 Strategy", "30 to 40 Marks Target", "High-Yield Articles", "PYQ Trends", "High-Weightage"],
                            searchKeywords: ["mpsc group b mains paper 2 polity 20 questions strategy", "constitution articles master revision sheet mains", "mpsc mains polity pyq trend analysis 2012 to 2025", "multi statement polity questions elimination techniques", "मुख्य परीक्षा पेपर २ राज्यघटना रणनीती", "३० ते ४० गुण लक्ष्य", "कलमे मास्टर रिव्हिजन", "१० वर्षांचे PYQ विश्लेषण"]
                        }
                    ]
                },


                {
                    id: "gb_mains_history",
                    code: "M_HIST",
                    slug: "modern-history-of-india-and-maharashtra-mains",
                    nameMr: "आधुनिक भारताचा विशेषतः महाराष्ट्राचा इतिहास व समाजसुधारक",
                    nameEn: "Modern History of India with Special Reference to Maharashtra & Social Reformers (Mains)",
                    name: "आधुनिक इतिहास व समाजसुधारक (Mains Modern History & Reformers)",
                    officialScope: "Modern Indian History (1818-1960) with special reference to Maharashtra: Socio-religious reform movements, Institutional renaissance, Pioneer social reformers (Phule, Shahu, Ambedkar, Karve, Agarkar, Shinde), Press & Literary awakening, Peasant & Working-class movements, National movement milestones, Marathwada Liberation, and Samyukta Maharashtra Movement for MPSC Group B Mains Paper 2",
                    version: "1.0",
                    verifiedDate: "2026-10-28",
                    notesJsonBaseDir: "/data/notes/group_b/mains/history/",


                    // UI Theme & Theming Metadata
                    theme: {
                        primaryColor: "#b45309",        // Antique Amber / Bronze Heritage Theme
                        bgColor: "#fffbeb",
                        iconClass: "ri-monument-line"
                    },


                    // अभ्यास व डॅशबोर्ड ॲनालिटिक्स मेट्रिक्स
                    metrics: {
                        totalChapters: 16,
                        totalEstimatedHours: 50,
                        avgQuestionsInMains: 11,
                        targetMarks: 22,
                        weightageRange: "10-12 Questions / 20-24 Marks"
                    },


                    // विषय पातळीवरील स्मार्ट टॅग्ज
                    subjectTags: [
                        "Core-Mains",
                        "Mains-Paper-2",
                        "Social-Reformers-Heavy",
                        "Maharashtra-Dominant",
                        "Factual-Analytical",
                        "Institutional-History"
                    ],


                    filterCategory: "GS",
                    searchKeywords: [
                        "mpsc group b mains history syllabus", "maharashtra social reformers phule shahu ambedkar karve",
                        "satyashodhak samaj newspapers darpan prabhakar kesari", "peasant working class movements narayan meghaji lokhande",
                        "marathwada mukti sangram samyukta maharashtra movement 106 martyrs", "satara pratisarkar nana patil",
                        "आधुनिक इतिहास मुख्य परीक्षा", "महाराष्ट्रातील समाजसुधारक सखोल", "सत्यशोधक समाज फुले शाहू आंबेडकर", "वृत्तपत्रांचा इतिहास", "कामगार चळवळ नारायण मेघाजी लोखंडे", "संयुक्त महाराष्ट्र चळवळ १०६ हुतात्मे"
                    ],


                    referenceSources: [
                        {
                            name: "MPSC Non-Gazetted Group B Combined Mains Syllabus",
                            role: "अधिकृत परीक्षा-संदर्भ",
                            url: "https://mpsc.gov.in"
                        },
                        {
                            name: "आधुनिक महाराष्ट्राचा इतिहास - डॉ. एस. एस. गाथाळ",
                            role: "समाजसुधारक व संस्थात्मक इतिहासाचा मुख्य संदर्भ"
                        },
                        {
                            name: "महाराष्ट्राचा इतिहास - डॉ. अनिल कठारे",
                            role: "राजकीय, शेतकरी व कामगार चळवळींचा सखोल संदर्भ"
                        },
                        {
                            name: "आधुनिक भारताचा इतिहास - बिपिन चंद्र / ग्रोव्हर",
                            role: "राष्ट्रीय चळवळ व ब्रिटिश प्रशासकीय धोरणे"
                        },
                        {
                            name: "महाराष्ट्र राज्य साहित्य आणि संस्कृती मंडळ ग्रंथमाला",
                            role: "ऐतिहासिक चरित्र ग्रंथ व मूळ दस्तऐवज"
                        }
                    ],


                    chapters: [
                        // =========================================================================
                        // विभाग A — ब्रिटिश सत्ता, प्रशासन व आद्य वैचारिक प्रबोधन (Colonial Impact)
                        // =========================================================================
                        {
                            id: "gb_mhist_c01",
                            code: "MH01",
                            section: "A",
                            slug: "colonial-rule-in-bombay-presidency-and-elphinstone-policy",
                            nameMr: "मुंबई इलाख्यातील ब्रिटिश राजवट, एल्फिन्स्टनचे धोरण व महसूल-न्याय प्रशासन",
                            nameEn: "Colonial Rule in Bombay Presidency: Elphinstone's Policies, Revenue & Judicial Setup",
                            name: "मुंबई इलाखा व ब्रिटिश प्रशासन (Bombay Presidency & Administration)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mhist_c01",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: null,
                            nextChapterId: "gb_mhist_c02",
                            metaDescriptionMr: "१८१८ नंतर पेशवाईचा अस्त, माऊंटस्ट्युअर्ट एल्फिन्स्टनचे धोरण (दक्षिण मराठा प्रांतातील वतनदार-सरदार व्यवस्था, गावगाडा रक्षण), मुंबई इलाख्यातील रयतवारी, विंगेट महसूल पाहणी, आणि १८२७ चा एल्फिन्स्टन कोड.",
                            metaDescriptionEn: "In-depth review of post-1818 Maharashtra: Fall of Peshwai, Mountstuart Elphinstone's administrative philosophy (Preservation of Watandars, traditional village panchayats), Bombay Ryotwari evolution, Goldsmid-Wingate settlement, and the Elphinstone Code of 1827.",
                            notesJsonPath: "/data/notes/group_b/mains/history/c01_bombay_presidency_admin.json",
                            quizTag: "gb_mhist_admin_01",
                            tags: ["Mains History", "Bombay Presidency", "Mountstuart Elphinstone", "Elphinstone Code 1827", "Wingate Survey", "Watandar Policy", "High-Weightage"],
                            searchKeywords: ["bombay presidency administration elphinstone 1819 1827", "elphinstone code 1827 judicial regulations", "goldsmid wingate revenue settlement 1835 1836", "watandar sardar policy post peshwai 1818", "dakshina prize fund evolution", "मुंबई इलाखा प्रशासन एल्फिन्स्टन", "एल्फिन्स्टन कोड १८२७", "विंगेट महसूल पाहणी", "दक्षिणा प्राईज फंड", "वतनदार सरदार धोरण"],
                            topics: [
                                {
                                    id: "top_gb_mh01_01",
                                    nameMr: "पेशवाईच्या अस्तानंतरची प्रशासकीय चौकट, एल्फिन्स्टन कोड आणि महसूल पाहणी",
                                    nameEn: "Post-1818 Administrative Architecture, Elphinstone Code & Revenue Settlements",
                                    subtopics: [
                                        {
                                            id: "st_gb_mh01_01_01",
                                            titleMr: "माऊंटस्ट्युअर्ट एल्फिन्स्टनचे प्रशासकीय तत्त्वज्ञान: १८१८ च्या तिसऱ्या आंग्ल-मराठा युद्धानंतर पेशवाईचा अस्त; एल्फिन्स्टनची दक्षिण मराठा प्रांताचा आयुक्त (१८१८) व मुंबईचा गव्हर्नर (१८१९-१८२७) म्हणून कारकीर्द; 'परंपरा आणि बदल' यातील सुवर्णमध्य: स्थानिक सरदारांचे वतन टिकवणे, गावगाडा व जात पंचायती तात्काळ न मोडणे; १८२७ चा एल्फिन्स्टन कोड (कायद्यांचे संहितीकरण)",
                                            titleEn: "Elphinstone's Administrative Philosophy: Annexation of Peshwa territories in 1818; Dual policy of cautious modernization without dismantling indigenous village elites/watandars; The 1827 Elphinstone Code establishing structured judicial and civil procedure regulations",
                                            chips: ["माऊंटस्ट्युअर्ट एल्फिन्स्टन (१८१९-१८२७)", "एल्फिन्स्टन कोड १८२७", "गावगाडा रक्षण धोरण", "वतनदार सरदार व्यवस्था"]
                                        },
                                        {
                                            id: "st_gb_mh01_01_02",
                                            titleMr: "मुंबई इलाख्यातील महसूल सुधारणा व विंगेट पाहणी: रॉबर्ट प्रिंगलची महसूल पाहणी (१८२८) अपयशी ठरल्यानंतर १८३५ मध्ये कॅप्टन विंगेट आणि गोल्डस्मिड यांची सुधारित रयतवारी पाहणी; जमिनीचे वर्गीकरण व ३० वर्षांचा कायमस्वरूपी महसूल बंदोबस्त; थेट रयतेकडून रोख स्वरूपात महसूल गोळा केल्याने सावकारी पाशाचा उदय",
                                            titleEn: "Revenue Settlements in Bombay Presidency: Pringle's flawed survey (1828); Goldsmid-Wingate Survey (1835-36) establishing standardized 30-year cash assessment Ryotwari settlement; Unintended consequence: Rise of rural moneylender dominance",
                                            chips: ["प्रिंगल पाहणी १८२८", "गोल्डस्मिड व विंगेट पाहणी १८३५", "३० वर्षांचा बंदोबस्त", "सावकारी पाश"]
                                        },
                                        {
                                            id: "st_gb_mh01_01_03",
                                            titleMr: "दक्षिणा प्राईज फंड व शैक्षणिक धोरण: पेशवेकालीन विद्वान ब्राह्मणांना दिल्या जाणाऱ्या 'दक्षिणा' निधीचे रूपांतर एल्फिन्स्टनने पाश्चात्त्य शिक्षण, भाषांतर आणि ग्रंथनिर्मितीसाठी 'दक्षिणा प्राईज फंड' मध्ये केले; मुंबई नेटिव्ह स्कूल बुक अँड स्कूल सोसायटी (१८२२) ची स्थापना; मराठीत विज्ञानाची पुस्तके आणण्याचा पाया",
                                            titleEn: "Dakshina Prize Fund & Education: Redirection of traditional Peshwa religious charity into English & vernacular secular education and book translation; Foundation of Bombay Native School Book and School Society (1822)",
                                            chips: ["दक्षिणा प्राईज फंड", "बॉम्बे नेटिव्ह स्कूल बुक सोसायटी १८२२", "पाश्चात्त्य शिक्षणाचा पाया"]
                                        }
                                    ],
                                    sources: [
                                        { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण १ व २: ब्रिटिशांचे आगमन व प्रशासकीय धोरणे" },
                                        { book: "महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण १: एल्फिन्स्टनकालीन महाराष्ट्र" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mhist_c02",
                            code: "MH02",
                            section: "A",
                            slug: "early-intellectual-awakening-jambhekar-lokhitwadi-and-tarkhadkar",
                            nameMr: "प्रबोधनाची पहाट: बाळशास्त्री जांभेकर, लोकहितवादी, भाऊ महाजन व तर्खडकर बंधू",
                            nameEn: "Dawn of Renaissance: Balshastri Jambhekar, Lokhitwadi, Bhau Mahajan & Tarkhadkar Brothers",
                            name: "प्रबोधनाची पहाट व विचारवंत (Early Renaissance & Thinkers)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mhist_c02",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mhist_c01",
                            nextChapterId: "gb_mhist_c03",
                            metaDescriptionMr: "बाळशास्त्री जांभेकर (दर्पण, दिग्दर्शन, शेषाद्री प्रकरण, ज्ञानेश्वरी मुद्रण), लोकहितवादी गोपाळ हरी देशमुख (शतपत्रे, लक्ष्मीज्ञान, स्वावलंबन), भाऊ महाजन (प्रभाकर, धूमकेतू, फ्रेंच क्रांती), आणि दादोबा पांडुरंग (परमहंस सभा व धर्मसुधारणा).",
                            metaDescriptionEn: "In-depth review of Early Thinkers: Balshastri Jambhekar (Darpan 1832, Digdarshan, Sheshadri re-conversion case, Printing Dnyaneshwari), Lokhitwadi Gopal Hari Deshmukh (100 Shatapatre, Lakshmi-Gyan), Bhau Mahajan (Prabhakar, French Revolution in Marathi), and Dadoba Pandurang Tarkhadkar (Paramhansa Sabha).",
                            notesJsonPath: "/data/notes/group_b/mains/history/c02_early_intellectuals.json",
                            quizTag: "gb_mhist_thinkers_01",
                            tags: ["Mains History", "Social Reformers", "Balshastri Jambhekar", "Lokhitwadi Shatapatre", "Bhau Mahajan", "Paramhansa Sabha", "High-Weightage"],
                            searchKeywords: ["balshastri jambhekar darpan 6 january 1832 digdarshan shripati sheshadri", "lokhitwadi gopal hari deshmukh shatapatre prabhakar lakshmigyan", "bhau mahajan prabhakar dhumketu french revolution", "dadoba pandurang tarkhadkar paramhansa sabha 1849", "बाळशास्त्री जांभेकर दर्पण ६ जाने १८३२", "श्रीपती शेषाद्री प्रकरण", "लोकहितवादी शतपत्रे प्रभाकर", "भाऊ महाजन", "दादोबा पांडुरंग परमहंस सभा १८४९"],
                            topics: [
                                {
                                    id: "top_gb_mh02_01",
                                    nameMr: "आद्य विचारवंतांचे योगदान, वृत्तपत्रे, ग्रंथसंपदा आणि धर्मसुधारणा",
                                    nameEn: "Pioneer Intellectuals, Periodical Awakening, Social Critique & Religious Reform",
                                    subtopics: [
                                        {
                                            id: "st_gb_mh02_01_01",
                                            titleMr: "बाळशास्त्री जांभेकर (१८१२-१८४६): मराठी वृत्तपत्रसृष्टीचे जनक; ६ जानेवारी १८३२ रोजी 'दर्पण' (मराठी व इंग्रजी द्विभाषिक) सुरू; मे १८४० मध्ये 'दिग्दर्शन' हे पहिले मराठी मासिक सुरू; श्रीपती शेषाद्री पुनर्प्रवेश प्रकरण (ख्रिस्ती झालेल्या मुलाला हिंदू धर्मात शुद्ध करून घेणे); १८४५ मध्ये ज्ञानेश्वरीचे पहिले छापील मुद्रण; इतिहास व विज्ञानावर ग्रंथनिर्मिती",
                                            titleEn: "Balshastri Jambhekar (1812-1846): Father of Marathi Journalism; Launched 'Darpan' bilingual on 6 Jan 1832; 'Digdarshan' 1st Marathi monthly (1840); Shripati Sheshadri re-conversion case; 1st printed edition of Dnyaneshwari (1845)",
                                            chips: ["बाळशास्त्री जांभेकर (वृत्तपत्रसृष्टीचे जनक)", "दर्पण ६ जानेवारी १८३२", "दिग्दर्शन मासिक १८४०", "श्रीपती शेषाद्री प्रकरण", "ज्ञानेश्वरी मुद्रण १८४५"]
                                        },
                                        {
                                            id: "st_gb_mh02_01_02",
                                            titleMr: "गोपाळ हरी देशमुख 'लोकहितवादी' (१८२३-१८९२): १८४८ ते १८५० या काळात भाऊ महाजन यांच्या 'प्रभाकर' साप्ताहिकात प्रसिद्ध झालेली १०० शतपत्रे; धार्मिक कर्मठतेवर सडेतोड प्रहार; 'लक्ष्मीज्ञान' (१८४९ - भारतातील पहिले अर्थशास्त्रावरील पुस्तक); स्वदेशी वस्तूंचा वापर व व्यापार वृद्धीचा विचार; पुण्यात ग्रंथोत्तेजक सभा व पुनर्विवाह मंडळाची स्थापना",
                                            titleEn: "Gopal Hari Deshmukh 'Lokhitwadi': Published 100 'Shatapatre' in Prabhakar (1848-50); Denounced orthodox clerical ritualism; Authored 'Lakshmi-Gyan' (1849, 1st Marathi economics book); Advocated Swadeshi, enterprise and widow remarriage",
                                            chips: ["लोकहितवादी (गोपाळ हरी देशमुख)", "शतपत्रे (प्रभाकर १८४८-५०)", "लक्ष्मीज्ञान १८४९", "स्वदेशी विचार", "पुनर्विवाह मंडळ"]
                                        },
                                        {
                                            id: "st_gb_mh02_01_03",
                                            titleMr: "भाऊ महाजन व दादोबा पांडुरंग: १) भाऊ महाजन (गोविंद विठ्ठल कुंटे): 'प्रभाकर' (१८४१), 'धूमकेतू' (१८५३) व 'ज्ञानदर्शन' चे संपादक; फ्रेंच राज्यक्रांतीचा इतिहास मराठीत आणणारे; २) दादोबा पांडुरंग तर्खडकर: मराठी भाषेचे पाणिनी; मानवधर्म सभा (सुरत १८४४) व परमहंस सभा (मुंबई ३१ जुलै १८४९ - गुप्त सभा, जातीभेद निर्मूलन व एकेश्वरवाद)",
                                            titleEn: "Bhau Mahajan & Dadoba Pandurang: Bhau Mahajan edited Prabhakar, Dhumketu, introduced French Revolution; Dadoba Pandurang Tarkhadkar (Marathi Panini) co-founded Manavdharma Sabha (1844) & Paramhansa Sabha (1849 secret society against caste)",
                                            chips: ["भाऊ महाजन (प्रभाकर, धूमकेतू)", "फ्रेंच राज्यक्रांती परिचय", "दादोबा पांडुरंग (मराठी भाषेचे पाणिनी)", "परमहंस सभा १८४९ (गुप्त सभा)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "महाराष्ट्राचा इतिहास (समाजसुधारक विशेष)", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण ५: आद्य प्रबोधनकार" },
                                        { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण ३: प्रबोधन पर्व" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग B — महाराष्ट्रातील अग्रगण्य समाजसुधारक (Pioneer Reformers - सखोल अभ्यास)
                        // =========================================================================
                        {
                            id: "gb_mhist_c03",
                            code: "MH03",
                            section: "B",
                            slug: "mahatma-jyotirao-phule-and-satyashodhak-movement-in-depth",
                            nameMr: "महात्मा जोतीराव फुले, सावित्रीबाई फुले आणि सत्यशोधक चळवळ (सखोल अभ्यास)",
                            nameEn: "Mahatma Jyotirao Phule, Savitribai Phule & Satyashodhak Samaj (Comprehensive)",
                            name: "महात्मा फुले व सत्यशोधक समाज (Mahatma Phule & Satyashodhak Samaj)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 5,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mhist_c03",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mhist_c02",
                            nextChapterId: "gb_mhist_c04",
                            metaDescriptionMr: "महात्मा जोतीराव फुले: शैक्षणिक संस्था, मुलींची शाळा (१८४८), बालहत्या प्रतिबंधक गृह (१८६३), सत्यशोधक समाज (२४ सप्टेंबर १८७३), संपूर्ण ग्रंथसंपदा (गुलामगिरी, शेतकऱ्याचा आसूड), हंटर आयोग साक्ष, आणि सावित्रीबाई फुले यांचे कार्य.",
                            metaDescriptionEn: "In-depth review of Mahatma Jyotirao Phule: 1848 Girls' School at Bhide Wada, Native Female School, 1863 Infanticide Prohibition Home, Satyashodhak Samaj (24 Sept 1873), Complete Literature (Tritya Ratna, Gulamgiri, Asud, Sarvajanik Satyadharma), Hunter Commission 1882, and Savitribai Phule's crusade.",
                            notesJsonPath: "/data/notes/group_b/mains/history/c03_mahatma_phule.json",
                            quizTag: "gb_mhist_phule_01",
                            tags: ["Mains History", "Social Reformers", "Mahatma Phule", "Satyashodhak Samaj 1873", "Gulamgiri", "Shetkaryacha Asud", "Savitribai Phule", "High-Weightage"],
                            searchKeywords: ["mahatma jyotirao phule detailed works", "satyashodhak samaj 24 september 1873 motto sarvasakshi jagatpati", "gulamgiri dedicated to american negro slaves", "shetkaryacha asud 1883 agrarian crisis", "hunter education commission 1882 phule deposition", "savitribai phule kavyaphule bavan kashi", "महात्मा फुले सत्यशोधक समाज १८७३", "गुलामगिरी अमेरिकन निग्रो समर्पण", "शेतकऱ्याचा आसूड १८८३", "हंटर कमिशन साक्ष १८८२", "सावित्रीबाई फुले काव्यफुले बावनकशी"],
                            topics: [
                                {
                                    id: "top_gb_mh03_01",
                                    nameMr: "महात्मा फुल्यांचे शैक्षणिक-सामाजिक बंड, सत्यशोधक तत्त्वज्ञान आणि ग्रंथसंपदा",
                                    nameEn: "Educational Crusade, Anti-Brahminical Hegemony, Satyashodhak Philosophy & Literary Opus",
                                    subtopics: [
                                        {
                                            id: "st_gb_mh03_01_01",
                                            titleMr: "शैक्षणिक संस्था व सामाजिक लढे: भिडे वाडा मुलींची पहिली शाळा (१ जानेवारी १८४८ - तात्यासाहेब भिडे यांच्या वाड्यात); अस्पृश्यांसाठी महारवाड्यात शाळा (१८५१/५२); 'द पूना नेटिव्ह फिमेल स्कूल' ची स्थापना; बालहत्या प्रतिबंधक गृह (१८६३ - काशीबाई या ब्राह्मण विधवेचा मुलगा यशवंत दत्तक); पाण्याचा हौद अस्पृश्यांसाठी खुला करणे (१८६८); तळेगाव-ढमढेरे येथील नाव्ह्यांचा संप (१८६९ - विधवांचे केशवपन रोखण्यासाठी)",
                                            titleEn: "Institutional Timeline: 1st Girls' School at Bhide Wada (1 Jan 1848), Native Female School, Untouchable Schools (1851/52), Infanticide Prohibition Home (1863, adopted Yashwant), Opened family drinking water reservoir to Dalits (1868), Barbers' strike against tonsure at Talegaon (1869)",
                                            chips: ["भिडे वाडा शाळा १८४८", "बालहत्या प्रतिबंधक गृह १८६३", "पाण्याचा हौद खुला १८६८", "नाव्ह्यांचा संप १८६९", "यशवंत दत्तकपुत्र"]
                                        },
                                        {
                                            id: "st_gb_mh03_01_02",
                                            titleMr: "सत्यशोधक समाज (२४ सप्टेंबर १८७३): ध्येय: शूद्रातिशूद्रांना पुरोहितांच्या मध्यस्थीशिवाय धार्मिक व सामाजिक हक्क मिळवून देणे; ब्रीदवाक्य: 'सर्वसाक्षी जगत्पती त्याला नकोच मध्यस्थी'; सत्यशोधक विवाह पद्धत (मंत्रविरहित, पुरोहिताशिवाय विवाह); 'दीनबंधू' वृत्तपत्र (कृष्णराव भालेकर यांनी १८७७ मध्ये सुरू केले - सत्यशोधक समाजाचे मुखपत्र)",
                                            titleEn: "Satyashodhak Samaj (24 Sept 1873): Mission to emancipate Shudras/Ati-Shudras from priestly tyranny; Motto: 'Sarvasakshi Jagatpati, Tyala Nakoch Madhyasthi'; Priestless rational marriages; 'Deenbandhu' newspaper launched by Krishnarao Bhalekar (1877) as official organ",
                                            chips: ["सत्यशोधक समाज २४ सप्टें १८७३", "सर्वसाक्षी जगत्पती", "दीनबंधू वृत्तपत्र १८७७", "कृष्णराव भालेकर", "पुरोहिताशिवाय विवाह"]
                                        },
                                        {
                                            id: "st_gb_mh03_01_03",
                                            titleMr: "ग्रंथसंपदा व विचारप्रणाली (MPSC वारंवार विधाने विचारते): १) तृतीय रत्न (नाटक १८५५ - शिक्षणाचे महत्त्व); २) ब्राह्मणांचे कसब (१८६९); ३) छत्रपती शिवाजीराजे भोसले यांचा पोवाडा (१८६९ - शिवरायांचा उल्लेख 'कुळवाडी भूषण'); ४) गुलामगिरी (१८७३ - अमेरिकेतील कृष्णवर्णीय निग्रो दासांना मुक्त करणाऱ्या अमेरिकन जनतेस समर्पित); ५) शेतकऱ्याचा आसूड (१८८३ - कृषी संकट व शोषण); ६) इशारा (१८८५); ७) सार्वजनिक सत्यधर्म (१८९१ - मरणोत्तर प्रकाशित, निर्मिक संकल्पना); १८८८ मध्ये मुंबईतील मांडवी कोळीवाड्यात जनतेने दिलेली 'महात्मा' पदवी (रावबहादूर वडेदार यांच्या हस्ते)",
                                            titleEn: "Literary Corpus: Tritya Ratna (1855 drama), Powada of Shivaji (1869 - Kulwadi Bhushan), Gulamgiri (1873 - dedicated to US abolitionists of slavery), Shetkaryacha Asud (1883 - agrarian crisis), Sarvajanik Satyadharma (1891 posthumous, concept of Nirmik); 'Mahatma' title conferred at Mandvi Bombay (1888)",
                                            chips: ["तृतीय रत्न १८५५", "शिवाजी महाराजांचा पोवाडा १८६९", "गुलामगिरी १८७३ (अमेरिकन जनतेस समर्पित)", "शेतकऱ्याचा आसूड १८८३", "सार्वजनिक सत्यधर्म १८९१", "महात्मा पदवी १८८८"]
                                        },
                                        {
                                            id: "st_gb_mh03_01_04",
                                            titleMr: "क्रांतीज्योती सावित्रीबाई फुले (१८३१-१८९७): भारतातील पहिल्या महिला मुख्याध्यापिका व शिक्षिका; फातिमा शेख यांच्या साथीने मुलींच्या शिक्षणासाठी संघर्ष; काव्यसंग्रह: 'काव्यफुले' (१८५४ - निसर्ग व सामाजिक सुधारणा) आणि 'बावनकशी सुबोध रत्नाकर' (१८९२ - सत्यशोधक विचार); महात्मा फुल्यांच्या निधनानंतर (१८९०) सत्यशोधक समाजाचे अध्यक्षपद भूषवले; १८९७ च्या पुण्याच्या प्लेगमध्ये रुग्णांची सेवा करताना बलिदान",
                                            titleEn: "Savitribai Phule (1831-1897): 1st Indian female headmistress; Collaborated with Fatima Sheikh; Poetry: 'Kavya Phule' (1854) & 'Bavan Kashi Subodh Ratnakar' (1892); Headed Satyashodhak Samaj after Jyotirao's death (1890); Martyrdom while treating plague patients (1897)",
                                            chips: ["सावित्रीबाई फुले", "पहिल्या महिला मुख्याध्यापिका", "काव्यफुले १८५४", "बावनकशी सुबोध रत्नाकर १८९२", "सत्यशोधक नेतृत्व १८९०", "प्लेग सेवा बलिदान १८९७"]
                                        }
                                    ],
                                    sources: [
                                        { book: "महात्मा जोतीराव फुले समग्र वाङ्मय", standard: "महाराष्ट्र राज्य साहित्य आणि संस्कृती मंडळ", chapterRef: "संपूर्ण साहित्य खंड" },
                                        { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण ६: महात्मा जोतीराव फुले" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mhist_c04",
                            code: "MH04",
                            section: "B",
                            slug: "rajarshi-chhatrapati-shahu-maharaj-policies-and-administration",
                            nameMr: "राजर्षी छत्रपती शाहू महाराज: कोल्हापूर प्रशासन, आरक्षण व बहुजन प्रबोधन",
                            nameEn: "Rajarshi Chhatrapati Shahu Maharaj: Kolhapur Administration, 1902 Quota & Reforms",
                            name: "राजर्षी शाहू महाराज व आरक्षण (Rajarshi Shahu Maharaj)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 5,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mhist_c04",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mhist_c03",
                            nextChapterId: "gb_mhist_c05",
                            metaDescriptionMr: "राजर्षी शाहू महाराज: ५०% आरक्षण जाहीरनामा (२६ जुलै १९०२), मोफत व सक्तीचे प्राथमिक शिक्षण कायदा (१९१७), वसतिगृह चळवळ, वेदोक्त प्रकरण (१८९९), आंतरजातीय विवाह कायदा (१९१९), माणगाव परिषद (१९२०), आणि डॉ. आंबेडकरांना सहकार्य.",
                            metaDescriptionEn: "In-depth review of Rajarshi Chhatrapati Shahu Maharaj: Historic 50% Backward Class Reservation Decree (26 July 1902), Free & Compulsory Primary Education Act 1917, Boarding House movement, Vedokta controversy 1899, Inter-caste Marriage Act 1919, Mangaon Parishad 1920 with Dr. Ambedkar, and industrial initiatives.",
                            notesJsonPath: "/data/notes/group_b/mains/history/c04_shahu_maharaj.json",
                            quizTag: "gb_mhist_shahu_01",
                            tags: ["Mains History", "Social Reformers", "Rajarshi Shahu Maharaj", "Reservation 26 July 1902", "Vedokta 1899", "Mangaon Parishad 1920", "High-Weightage"],
                            searchKeywords: ["rajarshi chhatrapati shahu maharaj reservation 26 july 1902 kolhapur gazette", "vedokta episode narayan bhat kshatra jagadguru", "free compulsory primary education act 1917 shahu", "inter caste marriage act 1919 shahu kolhapur", "mangaon parishad 1920 shahu ambedkar alliance", "boarding hostel movement victoria maratha jain", "राजर्षी शाहू महाराज २६ जुलै १९०२ आरक्षण", "वेदोक्त प्रकरण १८९९", "सक्तीचे शिक्षण १९१७", "आंतरजातीय विवाह कायदा १९१९", "माणगाव परिषद १९२०", "वसतिगृह चळवळ कोल्हापूर"],
                            topics: [
                                {
                                    id: "top_gb_mh04_01",
                                    nameMr: "आरक्षण जाहीरनामा, वेदोक्त प्रकरण, सामाजिक कायदे आणि डॉ. आंबेडकरांशी सहकार्य",
                                    nameEn: "50% Reservation Decree, Vedokta Struggle, Progressive Statutes & Dalit Emancipation",
                                    subtopics: [
                                        {
                                            id: "st_gb_mh04_01_01",
                                            titleMr: "ऐतिहासिक ५०% आरक्षण जाहीरनामा (२६ जुलै १९०२): कोल्हापूर संस्थानाच्या अधिकृत गॅझेटमध्ये प्रसिद्ध; संस्थानातील सर्व प्रशासकीय व शासकीय नोकऱ्यांमध्ये मागासवर्गीय व बहुजन समाजासाठी ५०% जागा राखीव; भारतातील आरक्षणाचे जनक; संस्थानात प्रशासकीय फेररचना करून बहुजन तरुणांची नोकऱ्यांवर नियुक्ती",
                                            titleEn: "50% Reservation Decree (26 July 1902): Published in Kolhapur State Gazette; Mandated 50% quota in state administration for backward/non-Brahmin communities; Father of Affirmative Action in India",
                                            chips: ["२६ जुलै १९०२ आरक्षण जाहीरनामा", "५० टक्के आरक्षण (कोल्हापूर गॅझेट)", "आरक्षणाचे जनक", "सामाजिक न्याय दिन"]
                                        },
                                        {
                                            id: "st_gb_mh04_01_02",
                                            titleMr: "वेदोक्त प्रकरण (१८९९) व धार्मिक सुधारणा: कार्तिक स्नानावेळी पुरोहित नारायण भट यांनी वेदोक्त ऐवजी पुराणोक्त मंत्र म्हटल्याने वाद; पुरोहितशाहीला आव्हान; सत्यशोधक समाजाला अधिकृत राजाश्रय (१९११); १९२० मध्ये 'क्षात्रजगद्गुरू' पीठाची स्थापना करून सदाशिवराव लक्ष्मण बेनाडीकर यांची पहिले क्षात्रजगद्गुरू म्हणून नियुक्ती; मराठा पुरोहित तयार करण्यासाठी पाठशाळा सुरू केली",
                                            titleEn: "Vedokta Controversy (1899): Priest Narayan Bhat recited Puranic instead of Vedic hymns; Confrontation with orthodox clergy; Official patronage to Satyashodhak Samaj (1911); Created 'Kshatra Jagadguru' seat (1920, Sadashivrao Benadikar)",
                                            chips: ["वेदोक्त प्रकरण १८९९", "नारायण भट", "सत्यशोधक समाज राजाश्रय १९११", "क्षात्रजगद्गुरू पीठ १९२०", "सदाशिवराव बेनाडीकर"]
                                        },
                                        {
                                            id: "st_gb_mh04_01_03",
                                            titleMr: "पुरोगामी कायदे व वसतिगृह चळवळ: १) मोफत व सक्तीच्या प्राथमिक शिक्षणाचा कायदा (२५ जुलै १९१७); २) आंतरजातीय व आंतरधर्मीय विवाह कायदा (१२ जुलै १९१९); ३) घटस्फोटाचा कायदा (१९२०); ४) देवदासी प्रथा, जोगती प्रथा व जोगतीपण प्रतिबंध कायदा; ५) वसतिगृहांची स्थापना: व्हिक्टोरिया मराठा बोर्डिंग (१९०१), जैन, लिंगायत, मुस्लिम, महार (मिस क्लार्क) वसतिगृहे - बहुजन शिक्षणाची पायाभरणी",
                                            titleEn: "Legislative Milestones & Hostels: Free & Compulsory Primary Education Act (1917), Inter-caste/Inter-religious Marriage Act (1919), Legal Divorce Act (1920), Abolition of Devadasi system; Built network of community student hostels (Victoria Maratha 1901, Jain, Lingayat, Dalit)",
                                            chips: ["सक्तीचे शिक्षण कायदा १९१७", "आंतरजातीय विवाह कायदा १९१९", "घटस्फोट कायदा १९२०", "देवदासी प्रथा बंदी", "वसतिगृहांचे जनक (Victoria Boarding १९०१)"]
                                        },
                                        {
                                            id: "st_gb_mh04_01_04",
                                            titleMr: "दलित मुक्ती व डॉ. आंबेडकरांना सहकार्य: गुन्हेगार जमाती कायदा रद्द (१९१८ - दररोजची हाजिरी पद्धत बंद केली); अस्पृश्यांसाठी विहिरी व धर्मशाळा खुल्या केल्या; बलुतेदारी पद्धत नष्ट केली; २१-२२ मार्च १९२० रोजी 'माणगाव परिषद' (Mangaon Parishad) चे आयोजन करून 'तुम्हाला बाबासाहेबांच्या रूपाने तुमचा खरा नेता मिळाला आहे' अशी जाहीर घोषणा; डॉ. आंबेडकरांच्या 'मूकनायक' वृत्तपत्राला २,५०० रुपयांची आर्थिक मदत",
                                            titleEn: "Dalit Emancipation & Ambedkar Alliance: Abolished Hajiri attendance under Criminal Tribes Act (1918); Eradicated Balutedari bonded labor; Organized Mangaon Parishad (March 1920) hailing Dr. Ambedkar as undisputed leader; Funded Rs 2,500 for Mooknayak",
                                            chips: ["माणगाव परिषद (२१-२२ मार्च १९२०)", "डॉ आंबेडकरांना नेता म्हणून घोषणा", "मूकनायक आर्थिक सहाय्य (२५०० रु.)", "हाजिरी पद्धत रद्द १९१८", "बलुतेदारी अंत"]
                                        }
                                    ],
                                    sources: [
                                        { book: "राजर्षी शाहू छत्रपती: जीवन व कार्य", standard: "धनंजय कीर", chapterRef: "संपूर्ण चरित्र ग्रंथ" },
                                        { book: "महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण ११: राजर्षी छत्रपती शाहू महाराज" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mhist_c05",
                            code: "MH05",
                            section: "B",
                            slug: "dr-b-r-ambedkar-emancipation-struggles-and-institution-building",
                            nameMr: "डॉ. बाबासाहेब आंबेडकर: सामाजिक लढे, संस्था, पक्ष, वृत्तपत्रे व घटनात्मक कार्य",
                            nameEn: "Dr. B.R. Ambedkar: Emancipation Movements, Institutions, Parties, Press & Constitution",
                            name: "डॉ. बाबासाहेब आंबेडकर (Dr. B.R. Ambedkar)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 6,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mhist_c05",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mhist_c04",
                            nextChapterId: "gb_mhist_c06",
                            metaDescriptionMr: "डॉ. बाबासाहेब आंबेडकर: संघटना (बहिष्कृत हितकारिणी सभा १९२४), वृत्तपत्रे (मूकनायक, बहिष्कृत भारत, जनता), महाड सत्याग्रह (२० मार्च १९२७), मनुस्मृती दहन, काळाराम मंदिर सत्याग्रह (१९३०-३५), गोलमेज परिषदा, पुणे करार (१९३२), राजकीय पक्ष (स्वतंत्र मजूर पक्ष, SCF), आणि धम्मक्रांती (१९५६).",
                            metaDescriptionEn: "Exhaustive coverage of Dr. B.R. Ambedkar: Bahishkrit Hitakarini Sabha (1924), Periodicals (Mooknayak, Bahishkrit Bharat, Janata, Prabuddha Bharat), Mahad Satyagraha (20 March 1927), Manusmriti Dahan, Kalaram Temple Satyagraha (1930-35), Round Table Conferences, Poona Pact 1932, Political Parties (ILP 1936, SCF 1942), People's Education Society, and 1956 Buddhist Conversion.",
                            notesJsonPath: "/data/notes/group_b/mains/history/c05_dr_ambedkar.json",
                            quizTag: "gb_mhist_ambedkar_01",
                            tags: ["Mains History", "Social Reformers", "Dr Ambedkar", "Mahad Satyagraha 1927", "Poona Pact 1932", "ILP 1936", "Deekshabhoomi 1956", "High-Weightage"],
                            searchKeywords: ["dr br ambedkar detailed life institutions", "bahishkrit hitakarini sabha 20 july 1924 educate agitate organise", "mahad chavdar tale satyagraha 20 march 1927", "manusmriti dahan 25 december 1927", "kalaram temple entry satyagraha nashik 1930 1935", "round table conferences london poona pact 1932 yerwada", "independent labour party 1936 scheduled castes federation 1942", "peoples education society siddharth milind college", "deekshabhoomi nagpur 14 october 1956 buddhism conversion", "डॉ बाबासाहेब आंबेडकर संस्था वृत्तपत्रे", "बहिष्कृत हितकारिणी सभा १९२४", "महाड सत्याग्रह २० मार्च १९२७", "मनुस्मृती दहन २५ डिसेंबर १९२७", "काळाराम मंदिर सत्याग्रह १९३०", "पुणे करार २४ सप्टेंबर १९३२", "स्वतंत्र मजूर पक्ष १९३६", "दीक्षाभूमी नागपूर १४ ऑक्टोबर १९५६"],
                            topics: [
                                {
                                    id: "top_gb_mh05_01",
                                    nameMr: "डॉ. आंबेडकरांचे संस्थात्मक कार्य, वृत्तपत्रे, ऐतिहासिक सत्याग्रह आणि राजकीय पक्ष",
                                    nameEn: "Institutional Foundations, Journalism, Mass Civil Rights Satyagrahas & Political Parties",
                                    subtopics: [
                                        {
                                            id: "st_gb_mh05_01_01",
                                            titleMr: "संघटना व वृत्तपत्रसृष्टी: १) मूकनायक (३१ जानेवारी १९२० - पाक्षिक, ब्रीदवाक्य: संत तुकारामांचे अभंग); २) बहिष्कृत हितकारिणी सभा (२० जुलै १९२४ - ब्रीदवाक्य: 'शिका, संघटित व्हा आणि संघर्ष करा'); ३) बहिष्कृत भारत (३ एप्रिल १९२७ - ज्ञानेश्वरांचे अभंग); ४) समता (१९२८) व जनता (१९३०); ५) प्रबुद्ध भारत (१९५६); ६) समता सैनिक दल (१९२७ - सत्याग्रहांच्या संरक्षणासाठी स्वयंसेवक संघटना)",
                                            titleEn: "Organisational & Journalistic Milestones: Mooknayak (31 Jan 1920 fortnightly with Tukaram's abhangs); Bahishkrit Hitakarini Sabha (20 July 1924: 'Educate, Agitate, Organise'); Bahishkrit Bharat (1927); Janata (1930); Prabuddha Bharat (1956); Samata Sainik Dal (1927)",
                                            chips: ["मूकनायक ३१ जाने १९२०", "बहिष्कृत हितकारिणी सभा २० जुलै १९२४", "बहिष्कृत भारत १९२७", "जनता व प्रबुद्ध भारत", "समता सैनिक दल १९२७"]
                                        },
                                        {
                                            id: "st_gb_mh05_01_02",
                                            titleMr: "ऐतिहासिक मानवी हक्क लढे (महाड व काळाराम): १) महाड चवदार तळे सत्याग्रह (२० मार्च १९२७): सार्वजनिक पाण्याचा हक्क प्रस्थापित करण्यासाठी; 'सामाजिक सबलीकरण दिन'; २) मनुस्मृती दहन (२५ डिसेंबर १९२७): महाड येथील दुसऱ्या परिषदेत सहस्रबुद्धे यांच्या हस्ते मनुस्मृतीचे दहन; ३) काळाराम मंदिर सत्याग्रह, नाशिक (२ मार्च १९३० ते १९३५): कर्मवीर दादासाहेब गायकवाड यांच्या नेतृत्वाखाली मंदिर प्रवेश लढा; शेवटी आंबेडकरांनी जाहीर केले: 'मी हिंदू म्हणून जन्मलो असलो, तरी हिंदू म्हणून मरणार नाही' (येवला परिषद १३ ऑक्टोबर १९३५)",
                                            titleEn: "Civil Rights Satyagrahas: Mahad Chavdar Tale (20 March 1927 - Social Empowerment Day); Manusmriti Dahan (25 Dec 1927); Kalaram Temple Satyagraha at Nashik (1930-35 led by Bhaurao Gaikwad); Yeola Declaration (13 Oct 1935: 'I was born a Hindu, but I will not die a Hindu')",
                                            chips: ["महाड सत्याग्रह २० मार्च १९२७", "चवदार तळे", "मनुस्मृती दहन २५ डिसें १९२७", "काळाराम मंदिर सत्याग्रह १९३०", "येवला घोषणा १३ ऑक्टो १९३५"]
                                        },
                                        {
                                            id: "st_gb_mh05_01_03",
                                            titleMr: "गोलमेज परिषदा, जातीय निवाडा आणि पुणे करार (१९३२): तिन्ही गोलमेज परिषदांना (लंडन १९३०, १९३१, १९३२) उपस्थित राहून दलितांसाठी स्वतंत्र मतदारसंघांची मागणी; १६ ऑगस्ट १९३२ रोजी ब्रिटिश पंतप्रधान रॅम्से मॅकडोनाल्ड यांचा जातीय निवाडा (Communal Award); गांधीजींचे येरवडा कारागृहात आमरण उपोषण; २४ सप्टेंबर १९३२ रोजी ऐतिहासिक 'पुणे करार' (Poona Pact - येरवडा जेल: मदन मोहन मालवीय व डॉ. आंबेडकर यांच्या स्वाक्षऱ्या; स्वतंत्र मतदारसंघ रद्द करून प्रांतिक कायदेमंडळात १४८ राखीव जागा आणि केंद्रीय कायदेमंडळात १८% जागा)",
                                            titleEn: "Round Table Conferences & Poona Pact: Attended all 3 RTCs demanding separate electorates; Communal Award (1932); Gandhi's fast unto death at Yerwada; Poona Pact (24 Sept 1932: Signed by Malaviya & Ambedkar, surrendered separate electorates for 148 reserved seats in provincial assemblies & 18% in central assembly)",
                                            chips: ["तिन्ही गोलमेज परिषदा", "जातीय निवाडा १९३२", "गांधीजी उपोषण येरवडा", "पुणे करार २४ सप्टेंबर १९३२", "१४८ राखीव जागा"]
                                        },
                                        {
                                            id: "st_gb_mh05_01_04",
                                            titleMr: "राजकीय पक्ष व शैक्षणिक संस्था: १) स्वतंत्र मजूर पक्ष (Independent Labour Party - ILP १९३६): १९३७ च्या मुंबई विधानसभा निवडणुकीत १७ पैकी १५ जागांवर दणदणीत विजय; २) शेड्युल्ड कास्ट्स फेडरेशन (SCF १९४२); ३) रिपब्लिकन पार्टी ऑफ इंडिया (RPI - मरणोत्तर १९५७ मध्ये स्थापन); ४) पीपल्स एज्युकेशन सोसायटी (१९४५): मुंबईत सिद्धार्थ कॉलेज (१९४६) व औरंगाबाद येथे मिलिंद कॉलेज (१९५०) ची स्थापना",
                                            titleEn: "Political Parties & Education Society: Independent Labour Party (ILP 1936, won 15/17 seats in 1937 Bombay elections); Scheduled Castes Federation (SCF 1942); Republican Party of India (RPI 1957); People's Education Society (1945: Siddharth College Mumbai 1946, Milind College Aurangabad 1950)",
                                            chips: ["स्वतंत्र मजूर पक्ष ILP १९३६", "१९३७ च्या निवडणुकीत विजय", "शेड्युल्ड कास्ट्स फेडरेशन १९४२", "पीपल्स एज्युकेशन सोसायटी १९४५", "सिद्धार्थ व मिलिंद कॉलेज"]
                                        },
                                        {
                                            id: "st_gb_mh05_01_05",
                                            titleMr: "घटना मसुदा समिती, हिंदू कोड बिल आणि धम्मदीक्षा: मसुदा समितीचे अध्यक्ष (२९ ऑगस्ट १९४७); स्वतंत्र भारताचे पहिले कायदेमंत्री; 'हिंदू कोड बिल' (स्त्री हक्क, वारसाहक्क व विवाह सुधारणा) संसदेत अडवल्यामुळे सप्टेंबर १९५१ मध्ये कायदेमंत्री पदाचा राजीनामा; १४ ऑक्टोबर १९५६ रोजी विजयादशमीदिनी दीक्षाभूमी, नागपूर येथे ५ लाख अनुयायांसह बौद्ध धम्माची दीक्षा (२२ प्रतिज्ञा); ६ डिसेंबर १९५६ रोजी महापरिनिर्वाण (चैत्यभूमी, दादर मुंबई); १९९० मध्ये मरणोत्तर 'भारतरत्न'",
                                            titleEn: "Drafting Constitution, Hindu Code Bill & Buddhist Conversion: Chairman of Drafting Committee; First Law Minister; Resigned in Sept 1951 over stalling of Hindu Code Bill; Historic Conversion to Buddhism at Deekshabhoomi Nagpur (14 Oct 1956, 22 Vows); Mahaparinirvana (6 Dec 1956, Chaityabhoomi Dadar); Posthumous Bharat Ratna (1990)",
                                            chips: ["मसुदा समिती अध्यक्ष", "पहिले कायदा मंत्री", "हिंदू कोड बिल राजीनामा १९५१", "धम्मदीक्षा १४ ऑक्टोबर १९५६ (नागपूर)", "२२ प्रतिज्ञा", "महापरिनिर्वाण ६ डिसेंबर १९५६", "भारतरत्न १९९०"]
                                        }
                                    ],
                                    sources: [
                                        { book: "डॉ. बाबासाहेब आंबेडकर चरित्र", standard: "धनंजय कीर", chapterRef: "संपूर्ण चरित्र ग्रंथ" },
                                        { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण १२: डॉ. बाबासाहेब आंबेडकर व दलित चळवळ" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mhist_c06",
                            code: "MH06",
                            section: "B",
                            slug: "intellectual-and-grassroots-reformers-karve-agarkar-shinde",
                            nameMr: "स्त्री प्रबोधन, बुद्धिप्रामाण्यवाद व बहुजन संत: कर्वे, आगरकर, वि. रा. शिंदे व इतर सुधारक",
                            nameEn: "Women's Education, Rationalism & Depressed Classes: Karve, Agarkar, V.R. Shinde & Others",
                            name: "कर्वे, आगरकर, शिंदे व इतर सुधारक (Karve, Agarkar & Shinde)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 5,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mhist_c06",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mhist_c05",
                            nextChapterId: "gb_mhist_c07",
                            metaDescriptionMr: "महर्षी धोंडो केशव कर्वे (हिंगणे अनाथ बालिकाश्रम, पहिले महिला विद्यापीठ १९१६, भारतरत्न १९५८), गोपाळ गणेश आगरकर (सुधारक, बुद्धिप्रामाण्यवाद, आधी सामाजिक सुधारणा), महर्षी विठ्ठल रामजी शिंदे (डिप्रेस्ड क्लासेस मिशन १९०६), पंडिता रमाबाई, आणि ताराबाई शिंदे.",
                            metaDescriptionEn: "In-depth review of Reformers: Maharshi D.K. Karve (Hingne Ashram, SNDT Women's University 1916, Bharat Ratna 1958), Gopal Ganesh Agarkar (Sudharak 1888, Rationalism, Social reform priority over political), Maharshi V.R. Shinde (Depressed Classes Mission 1906), Pandita Ramabai (Sharada Sadan), and Tarabai Shinde (Stri Purush Tulana 1882).",
                            notesJsonPath: "/data/notes/group_b/mains/history/c06_karve_agarkar_shinde.json",
                            quizTag: "gb_mhist_reformers_01",
                            tags: ["Mains History", "Social Reformers", "Maharshi Karve SNDT 1916", "Agarkar Sudharak", "VR Shinde Depressed Classes", "Pandita Ramabai", "High-Weightage"],
                            searchKeywords: ["maharshi dhondo keshav karve sndt womens university 1916 bharat ratna 1958", "gopal ganesh agarkar sudharak 1888 rationalism tilak agarkar debate", "maharshi vitthal ramji shinde depressed classes mission 1906", "pandita ramabai arya mahila samaj sharada sadan mukti sadan", "tarabai shinde stri purush tulana 1882 buldhana", "महर्षी धोंडो केशव कर्वे महिला विद्यापीठ १९१६", "गोपाळ गणेश आगरकर सुधारक १८८८", "विठ्ठल रामजी शिंदे डिप्रेस्ड क्लासेस मिशन १९०६", "पंडिता रमाबाई शारदा सदन", "ताराबाई शिंदे स्त्री-पुरुष तुलना १८८२"],
                            topics: [
                                {
                                    id: "top_gb_mh06_01",
                                    nameMr: "महर्षी कर्वे यांचे स्त्री शिक्षण, आगरकरांचा बुद्धिप्रामाण्यवाद आणि वि. रा. शिंदेंचे कार्य",
                                    nameEn: "Women's University Foundation, Agarkar's Rationalism & Shinde's Anti-Untouchability Crusade",
                                    subtopics: [
                                        {
                                            id: "st_gb_mh06_01_01",
                                            titleMr: "महर्षी धोंडो केशव कर्वे (१८५८-१९६२): स्त्री शिक्षणाचे हिमालय; स्वतः गोदुबाई (शारदा सदनमधील विधवा) यांच्याशी पुनर्विवाह (१८९३); अनाथ बालिकाश्रम (हिंगणे, पुणे १८९९); निष्काम कर्म मठ (१९१०); जपानच्या महिला विद्यापीठाच्या धर्तीवर भारतातील पहिले महिला विद्यापीठ: 'श्रीमती नाथीबाई दामोदर ठाकरसी (SNDT) महिला विद्यापीठ' (१९१६ - सर विठ्ठलदास ठाकरसी यांनी १५ लाखांची देणगी दिली); आत्मवृत्त 'आत्मवृत्त' (Looking Back); १९५८ मध्ये १०० व्या वाढदिवशी 'भारतरत्न' सन्मान",
                                            titleEn: "Maharshi D.K. Karve (1858-1962): Champion of widow rehabilitation; Married widow Godubai (1893); Hingne Anath Balikashram (1899); Founded India's 1st Women's University (SNDT 1916 with Rs 15 Lakh donation from Sir Vithaldas Thackersey); Conferred Bharat Ratna on centennial birthday (1958)",
                                            chips: ["महर्षी कर्वे (भारतरत्न १९५८)", "हिंगणे अनाथ बालिकाश्रम १८९९", "SNDT महिला विद्यापीठ १९१६", "विठ्ठलदास ठाकरसी", "निष्काम कर्म मठ"]
                                        },
                                        {
                                            id: "st_gb_mh06_01_02",
                                            titleMr: "गोपाळ गणेश आगरकर (१८५६-१८९५): जहाल समाजसुधारक, बुद्धिप्रामाण्यवाद व व्यक्तिस्वातंत्र्याचे पुरस्कर्ते; 'इष्ट असेल ते बोलणार आणि साध्य असेल ते करणार'; केसरीचे पहिले संपादक (१८८१); टिळक-आगरकर वाद: 'आधी सामाजिक सुधारणा की आधी राजकीय स्वातंत्र्य' (आगरकरांचा भर आधी सामाजिक सुधारणेवर होता); ऑक्टोबर १८८८ मध्ये स्वतंत्र 'सुधारक' साप्ताहिक सुरू केले; संमती वयाचा कायदा (Age of Consent Act १८९१) ला पाठिंबा; ग्रंथ: 'डोंगरीच्या तुरुंगातील आमचे १०१ दिवस', 'विकारविलसित' (शेक्सपिअरच्या हॅम्लेटचे भाषांतर)",
                                            titleEn: "Gopal Ganesh Agarkar (1856-1895): Radical Rationalist; First editor of Kesari (1881); Tilak-Agarkar ideological rift: Social reform must precede political freedom; Founded 'Sudharak' (1888); Supported Age of Consent Bill 1891; Works: 101 Days in Dongri Jail, Vikarvilasit (Hamlet translation)",
                                            chips: ["गोपाळ गणेश आगरकर", "सुधारक साप्ताहिक १८८८", "आधी सामाजिक सुधारणा वाद", "बुद्धिप्रामाण्यवाद", "संमती वय विधेयक १८९१", "डोंगरीच्या तुरुंगातील १०१ दिवस"]
                                        },
                                        {
                                            id: "st_gb_mh06_01_03",
                                            titleMr: "महर्षी विठ्ठल रामजी शिंदे (१८७३-१९४४): प्रार्थना समाजाचे प्रचारक; १८ ऑक्टोबर १९०६ रोजी मुंबईत 'डिप्रेस्ड क्लासेस मिशन' (Depressed Classes Mission of India) ची स्थापना; अस्पृश्यांसाठी शाळा, वसतिगृहे व उद्योग केंद्रे सुरू केली; १९१८ मध्ये मुंबईत अखिल भारतीय अस्पृश्यता निवारण परिषद भरवली (सयाजीराव गायकवाड अध्यक्ष); बहुजन समाज पक्ष स्थापना; येरवडा कारागृहात असताना 'भारतीय अस्पृश्यतेचा प्रश्न' हा संशोधनपर ग्रंथ लिहिला; आत्मचरित्र: 'माझ्या आठवणी व अनुभव'",
                                            titleEn: "Maharshi Vitthal Ramji Shinde (1873-1944): Prarthana Samaj missionary; Established Depressed Classes Mission (18 Oct 1906 at Bombay); Organized All India Anti-Untouchability Conference 1918 (Sayajirao Gaikwad chair); Wrote seminal research 'Bharatiya Asprushyatecha Prashna'; Autobiography: Majhya Aathvani Va Anubhav",
                                            chips: ["विठ्ठल रामजी शिंदे", "डिप्रेस्ड क्लासेस मिशन १८ ऑक्टो १९०६", "भारतीय अस्पृश्यतेचा प्रश्न", "अस्पृश्यता निवारण परिषद १९१८", "माझ्या आठवणी व अनुभव"]
                                        },
                                        {
                                            id: "st_gb_mh06_01_04",
                                            titleMr: "पंडिता रमाबाई व ताराबाई शिंदे: १) पंडिता रमाबाई (१८५८-१९२२): आर्य महिला समाज (पुणे १८८२); हंटर कमिशन साक्ष; 'The High Caste Hindu Woman' (१८८७); शारदा सदन (मुंबई १८८९/पुणे - विधवा महिलांचे वसतिगृह); मुक्ती सदन (केडगाव १८९८ - अनाथ मुली व निराधार स्त्रियांसाठी); २) ताराबाई शिंदे (बुलढाणा): १८८२ मध्ये 'स्त्री-पुरुष तुलना' हा भारतातील पहिला जहाल स्त्रीवादी ग्रंथ लिहिला (विजयालक्ष्मी या विधवेवर झालेल्या अन्यायाविरुद्ध सडेतोड वैचारिक प्रहार)",
                                            titleEn: "Pandita Ramabai & Tarabai Shinde: Pandita Ramabai founded Arya Mahila Samaj (1882), Sharada Sadan (1889), Mukti Sadan at Kedgaon (1898); Tarabai Shinde authored 'Stri Purush Tulana' (1882) - India's 1st radical feminist critique against patriarchal double standards",
                                            chips: ["पंडिता रमाबाई (शारदा सदन १८८९)", "मुक्ती सदन केडगाव", "ताराबाई शिंदे (स्त्री-पुरुष तुलना १८८२)", "पहिले स्त्रीवादी पुस्तक"]
                                        }
                                    ],
                                    sources: [
                                        { book: "महाराष्ट्राचा इतिहास (समाजसुधारक विशेष)", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण ७, ८, ९, १०: कर्वे, आगरकर, शिंदे व रमाबाई" },
                                        { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण ४ व ५: महाराष्ट्रातील प्रबोधन पर्व" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग C — वर्तमानपत्रे, साहित्य व जनसंस्कृती (Press & Literature in Freedom Struggle)
                        // =========================================================================
                        {
                            id: "gb_mhist_c07",
                            code: "MH07",
                            section: "C",
                            slug: "press-newspapers-and-literature-in-maharashtra-freedom-struggle",
                            nameMr: "महाराष्ट्रातील वृत्तपत्रे, नियतकालिके, नाटक आणि स्वातंत्र्य चळवळीतील साहित्य",
                            nameEn: "The Press, Historical Newspapers, Theatre & Nationalist Literature in Maharashtra",
                            name: "वृत्तपत्रे, साहित्य व रंगभूमी (Press & Nationalist Literature)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mhist_c07",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mhist_c06",
                            nextChapterId: "gb_mhist_c08",
                            metaDescriptionMr: "महाराष्ट्रातील ऐतिहासिक वृत्तपत्रे व संपादक (ज्ञानप्रकाश, इंदुप्रकाश, केसरी, मराठा, सुधारक, काळ - शिवराम परांजपे, नवकाळ), ब्रिटिश वृत्तपत्र प्रतिबंधक कायदे (व्हर्नाक्युलर प्रेस ॲक्ट १८७८), किचकवध नाटक (खाडिलकर बंदी), आणि राष्ट्रीय गीते.",
                            metaDescriptionEn: "In-depth review of Historical Press: Dnyanprakash, Induprakash, Kesari, Mahratta, Sudharak, Kaal (S.M. Paranjape), Navakal (Khadilkar), Vernacular Press Act 1878, Banned plays (Kichak Vadh by K.P. Khadilkar allegorizing Lord Curzon), and Nationalist Literature.",
                            notesJsonPath: "/data/notes/group_b/mains/history/c07_press_literature.json",
                            quizTag: "gb_mhist_press_01",
                            tags: ["Mains History", "Historical Press", "Newspapers Editors", "Kesari Mahratta Tilak", "Kaal Paranjape", "Kichak Vadh Play", "High-Weightage"],
                            searchKeywords: ["historical newspapers in maharashtra editors list", "kesari mahratta 1881 tilak agarkar", "kaal newspaper shivram mahadev paranjape", "kichak vadh play ban kp khadilkar lord curzon", "vernacular press act 1878 gagging act lord lytton", "dnyanprakash induprakash dnyanodaya", "महाराष्ट्रातील वृत्तपत्रे व संपादक यादी", "केसरी व मराठा १८८१", "काळ शिवराम महादेव परांजपे", "किचकवध नाटक खाडिलकर बंदी", "व्हर्नाक्युलर प्रेस ॲक्ट १८७८"],
                            topics: [
                                {
                                    id: "top_gb_mh07_01",
                                    nameMr: "ऐतिहासिक वर्तमानपत्रे, संपादक सूची, ब्रिटिश दडपशाही कायदे आणि राजकीय रंगभूमी",
                                    nameEn: "Newspaper Concordance, Editor Index, Press Censorship Acts & Subversive Theater",
                                    subtopics: [
                                        {
                                            id: "st_gb_mh07_01_01",
                                            titleMr: "प्रमुख ऐतिहासिक वृत्तपत्रे व त्यांचे संपादक (MPSC चा आवडता जोड्या जुळवा प्रश्न): १) दर्पण (१८३२ - बाळशास्त्री जांभेकर); २) प्रभाकर (१८४१ - भाऊ महाजन); ३) ज्ञानोदय (१८४२ - ख्रिस्ती मिशनरी अहमदनगर); ४) ज्ञानप्रकाश (१८४९ - कृष्णाजी त्र्यंबक रानडे); ५) इंदुप्रकाश (१८६२ - विष्णुपरशुराम शास्त्री पंडित - रानडे यांचे लेख); ६) नेटिव्ह ओपिनियन (१८६४ - व्ही. एन. मंडलिक); ७) दीनबंधू (१८७७ - कृष्णराव भालेकर); ८) केसरी व मराठा (१८८१ - टिळक, आगरकर); ९) सुधारक (१८८८ - आगरकर); १०) काळ (१८९८ - शिवराम महादेव परांजपे - जहाल विचारसरणी); ११) नवकाळ (१९२३ - कृ. प्र. खाडिलकर)",
                                            titleEn: "Master Newspaper-Editor Concordance: Darpan (1832 Jambhekar), Prabhakar (1841 Bhau Mahajan), Dnyanodaya (1842 Missionary), Dnyanprakash (1849 K.T. Ranade), Induprakash (1862 V.P. Pandit), Native Opinion (1864 Mandlik), Deenbandhu (1877 Bhalekar), Kesari/Mahratta (1881), Sudharak (1888), Kaal (1898 S.M. Paranjape), Navakal (1923 Khadilkar)",
                                            chips: ["दर्पण (जांभेकर)", "प्रभाकर (भाऊ महाजन)", "ज्ञानप्रकाश (रानडे)", "इंदुप्रकाश (विष्णुशास्त्री पंडित)", "काळ (शिवराम परांजपे)", "नवकाळ (खाडिलकर)"]
                                        },
                                        {
                                            id: "st_gb_mh07_01_02",
                                            titleMr: "ब्रिटिश वृत्तपत्र दडपशाही कायदे: १) वृत्तपत्र नियंत्रण कायदा १८२३; २) मेटकाफ कायदा १८३५ (चार्ल्स मेटकाफ - 'भारतीय वृत्तपत्रसृष्टीचा मुक्तिदाता'); ३) व्हर्नाक्युलर प्रेस ॲक्ट १८७८ (लॉर्ड लिटन - 'गॅगिंग ॲक्ट' / देशी वृत्तपत्र गळचेपी कायदा - केवळ देशी भाषेतील वृत्तपत्रांवर निर्बंध; अमृत बाजार पत्रिका एका रात्रीत इंग्रजी बनले; १८८१ मध्ये लॉर्ड रिपनने हा कायदा रद्द केला); ४) वृत्तपत्र कायदा १९०८ आणि भारतीय वृत्तपत्र कायदा १९१० (टिळकांच्या अटकेनंतर कडक नियंत्रणे)",
                                            titleEn: "Colonial Press Censorship Acts: Metcalfe Act 1835 (Liberator of Indian Press); Vernacular Press Act 1878 (Lord Lytton's Gagging Act discriminating against native language papers; Amrita Bazar Patrika turned English overnight; Repealed by Lord Ripon in 1881); Newspaper Act 1908 & Press Act 1910",
                                            chips: ["चार्ल्स मेटकाफ (वृत्तपत्रांचा मुक्तिदाता)", "व्हर्नाक्युलर प्रेस ॲक्ट १८७८ (लॉर्ड लिटन)", "गॅगिंग ॲक्ट", "लॉर्ड रिपनने रद्द केला १८८१"]
                                        },
                                        {
                                            id: "st_gb_mh07_01_03",
                                            titleMr: "राजकीय रंगभूमी व किचकवध नाटक (Kichak Vadh): कृ. प्र. खाडिलकर लिखित 'किचकवध' (१९०७) नाटक; महाभारतातील कथेच्या माध्यमातून तत्कालीन राजकीय परिस्थितीवर रूपक; किचक = लॉर्ड कर्झन, द्रौपदी = भारतमाता, युधिष्ठिर = मवाळ नेते, आणि भीम = जहाल नेते (लोकमान्य टिळक); प्रेक्षकांमध्ये प्रचंड ब्रिटिशविरोधी असंतोष निर्माण झाल्याने १९१० मध्ये ब्रिटिश सरकारने या नाटकावर अधिकृत बंदी घातली",
                                            titleEn: "Nationalist Theater & 'Kichak Vadh' (1907): Allegorical political drama by K.P. Khadilkar; Characters mapped: Kichak = Lord Curzon, Draupadi = Mother India, Yudhishthira = Moderates, Bhima = Extremists/Tilak; British Govt officially banned the play in 1910 under Dramatic Performances Act",
                                            chips: ["किचकवध नाटक १९०७ (कृ प्र खाडिलकर)", "किचक = लॉर्ड कर्झन", "भीम = लोकमान्य टिळक", "द्रौपदी = भारतमाता", "ब्रिटिश सरकारकडून बंदी १९१०"]
                                        }
                                    ],
                                    sources: [
                                        { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण ४: वृत्तपत्रे व साहित्याचा इतिहास" },
                                        { book: "महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण १४: वृत्तपत्रे व राजकीय जागृती" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग D — शेतकरी, आदिवासी, कामगार लढे व सशस्त्र क्रांती (Mass Struggles)
                        // =========================================================================
                        {
                            id: "gb_mhist_c08",
                            code: "MH08",
                            section: "D",
                            slug: "peasant-tribal-and-working-class-movements-in-depth",
                            nameMr: "शेतकरी उठाव (दख्खनचे दंगे), आदिवासी लढे आणि नारायण मेघाजी लोखंडे कामगार चळवळ",
                            nameEn: "Agrarian Revolts (Deccan Riots), Tribal Uprisings & Working-Class Struggle",
                            name: "शेतकरी, आदिवासी व कामगार चळवळी (Peasant, Tribal & Labor Movements)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mhist_c08",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mhist_c07",
                            nextChapterId: "gb_mhist_c09",
                            metaDescriptionMr: "दख्खनचे दंगे (मे १८७५ - सुपे, पुणे, नगर सावकारविरोधी उठाव, डेक्कन ॲग्रिकल्चरिस्ट्स रिलीफ ॲक्ट १८७९), आदिवासी लढे (रामोशी, भिल्ल, कोळी, वारली उठाव - गोदावरी परुळेकर), आणि नारायण मेघाजी लोखंडे (बॉम्बे मिलहँड्स असोसिएशन १८९०, कामगार चळवळीचे जनक).",
                            metaDescriptionEn: "In-depth review of Mass Movements: Deccan Riots (May 1875, Supe Pune, moneylender account book burning, Deccan Agriculturists' Relief Act 1879), Tribal revolts (Ramoshi, Bhil, Koli, Warli revolt under Godavari Parulekar), and Narayan Meghaji Lokhande (Father of Indian Labour Movement, Bombay Millhands Association 1890).",
                            notesJsonPath: "/data/notes/group_b/mains/history/c08_peasant_labour_movements.json",
                            quizTag: "gb_mhist_labour_01",
                            tags: ["Mains History", "Deccan Riots 1875", "Narayan Meghaji Lokhande", "Bombay Millhands 1890", "Warli Revolt Godavari Parulekar", "High-Weightage"],
                            searchKeywords: ["deccan riots may 1875 supe pune commission 1879 relief act", "narayan meghaji lokhande father of indian labour movement", "bombay millhands association 1890 sunday holiday", "warli adivasi movement thane godavari parulekar", "girni kamgar union sa dange", "दख्खनचे दंगे मे १८७५ सुपे", "डेक्कन ॲग्रिकल्चरिस्ट्स रिलीफ ॲक्ट १८७९", "नारायण मेघाजी लोखंडे कामगार चळवळीचे जनक", "बॉम्बे मिलहँड्स असोसिएशन १८९०", "वारली उठाव गोदावरी परुळेकर"],
                            topics: [
                                {
                                    id: "top_gb_mh08_01",
                                    nameMr: "दख्खनचे दंगे, सावकारशाही विरोध, कामगार चळवळीचा पाया आणि वारली लढा",
                                    nameEn: "Deccan Riots Inquest, Anti-Usury Mobilization, Pioneer Labor Unions & Warli Resistance",
                                    subtopics: [
                                        {
                                            id: "st_gb_mh08_01_01",
                                            titleMr: "दख्खनचे दंगे (Deccan Riots - मे १८७५): पार्श्वभूमी: अमेरिकन यादवी युद्ध संपल्याने कापसाचे भाव कोसळणे, दुष्काळ आणि विंगेट महसूल वाढ; उठावाची सुरुवात: १२ मे १८७५ रोजी सुपे (ता. बारामती, जि. पुणे) येथे सावकारांविरुद्ध; पुणे व अहमदनगर जिल्ह्यांमधील ३३ गावांमध्ये विस्तार; सावकारांची घरे व कर्जरोख्यांची कागदपत्रे जाळणे; ब्रिटिश सरकारने 'दख्खन दंगे चौकशी आयोग' नेमला; आयोगाच्या शिफारशीवरून 'डेक्कन ॲग्रिकल्चरिस्ट्स रिलीफ ॲक्ट' (१८७९) संमत झाला (शेतकऱ्यांची जमीन सावकारांना जप्त करण्यास बंदी)",
                                            titleEn: "Deccan Riots (May 1875): Triggered by post-Civil War cotton crash, famines and tax enhancement; Erupted on 12 May 1875 at Supe (Baramati, Pune) targeting Gujarati/Marwadi usurious moneylenders; Spread across 33 villages; Burning of debt bonds; Led to Deccan Riots Commission and Deccan Agriculturists' Relief Act 1879",
                                            chips: ["दख्खनचे दंगे (१२ मे १८७५ सुपे)", "सावकार कर्जरोखे जाळणे", "दख्खन दंगे आयोग १८७६", "डेक्कन ॲग्रिकल्चरिस्ट्स रिलीफ ॲक्ट १८७९"]
                                        },
                                        {
                                            id: "st_gb_mh08_01_02",
                                            titleMr: "नारायण मेघाजी लोखंडे (१८४८-१८९७): भारतीय कामगार चळवळीचे जनक; सत्यशोधक समाजाचे निष्ठावान कार्यकर्ते; १८८० मध्ये 'दीनबंधू' चे संपादन स्वतःकडे घेतले; २३ सप्टेंबर १८८४ रोजी मुंबईत कामगारांची ऐतिहासिक जाहीर सभा; २४ एप्रिल १८९० रोजी 'बॉम्बे मिलहँड्स असोसिएशन' ची स्थापना (भारतातील पहिली कामगार संघटना); कामगारांच्या मागण्या: रविवारची साप्ताहिक सुट्टी, कामाचे तास मर्यादित करणे, दुपारची अर्ध्या तासाची जेवणाची सुट्टी, अपघाती नुकसानभरपाई; ब्रिटिश सरकारने त्यांना 'रावबहादूर' व 'जे.पी.' (जस्टिस ऑफ पीस) पदवी दिली",
                                            titleEn: "Narayan Meghaji Lokhande (1848-1897): Father of Indian Labour Movement; Satyashodhak stalwart; Edited Deenbandhu; Organized 1st labor rally (1884); Founded Bombay Millhands Association (1890, 1st labor union in India); Secured Sunday weekly holiday, meal breaks & injury compensation; Conferred 'Rao Bahadur' & 'JP'",
                                            chips: ["नारायण मेघाजी लोखंडे (कामगार चळवळीचे जनक)", "बॉम्बे मिलहँड्स असोसिएशन १८९० (पहिली कामगार संघटना)", "रविवारची सुट्टी", "दीनबंधू संपादक", "रावबहादूर पदवी"]
                                        },
                                        {
                                            id: "st_gb_mh08_01_03",
                                            titleMr: "वारली आदिवासी लढा व गोदावरी परुळेकर (१९४५-४७): ठाणे जिल्ह्यातील (डहाणू, उंबरगाव, तलासरी) वारली आदिवासींवर जमीनदार, सावकार व जंगल ठेकेदारांचे अमानुष शोषण व वेठबिगारी पद्धत (लग्नगडी); किसान सभेच्या नेत्या गोदावरी परुळेकर आणि श्यामराव परुळेकर यांचे नेतृत्व; 'वेठबिगारी नष्ट करा' व 'किमान मजुरी द्या' यासाठी ऐतिहासिक संप; 'जेव्हा माणूस जागा होतो' (साहित्य अकादमी पुरस्कार प्राप्त आत्मवृत्त)",
                                            titleEn: "Warli Adivasi Revolt (1945-47): Thane district (Dahanu, Talasari); Uprising against brutal bonded labor (Lagna-gadi) and landlord exploitation; Led by Kisan Sabha communist leaders Godavari & Shamrao Parulekar; Documented in award-winning autobiography 'Jevha Manus Jaga Hoto'",
                                            chips: ["वारली लढा (१९४५-४७)", "गोदावरी परुळेकर", "वेठबिगारी निर्मूलन (लग्नगडी)", "जेव्हा माणूस जागा होतो", "किसान सभा"]
                                        }
                                    ],
                                    sources: [
                                        { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण ११ व १५: शेतकरी लढे व कामगार चळवळ" },
                                        { book: "महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण १५: शेतकरी उठाव व कामगार संघटना" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mhist_c09",
                            code: "MH09",
                            section: "D",
                            slug: "armed-revolutionaries-vasudev-phadke-chapekar-and-savarkar",
                            nameMr: "महाराष्ट्रातील सशस्त्र क्रांतिकारक: फडके, चापेकर बंधू व स्वातंत्र्यवीर सावरकर",
                            nameEn: "Armed Revolutionary Movements: Vasudev Balwant Phadke, Chapekars & V.D. Savarkar",
                            name: "महाराष्ट्रातील सशस्त्र क्रांती (Armed Revolutionary Movements)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mhist_c09",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mhist_c08",
                            nextChapterId: "gb_mhist_c10",
                            metaDescriptionMr: "वासुदेव बळवंत फडके (रामोशींचे संघटन, एडन कारावास), चापेकर बंधू (प्लेग कमिशनर रँडचा वध १८९७), विनायक दामोदर सावरकर (मित्रमेळा, अभिनव भारत १९०४, अंदमान काळेपाणी), नाशिकचा जॅक्सन वध (अनंत कान्हेरे), आणि सेनापती बापट (बॉम्ब मॅन्युअल).",
                            metaDescriptionEn: "In-depth review of Armed Revolutionaries: Vasudev Balwant Phadke (Ramoshi mobilization, Daulatrao Naik, Aden martyrdom 1883), Chapekar Brothers (Assassination of Rand 1897), V.D. Savarkar (Mitra Mela 1899, Abhinav Bharat 1904, 1857 War of Independence, Cellular Jail), Jackson murder by Anant Kanhere 1909, and Senapati Bapat.",
                            notesJsonPath: "/data/notes/group_b/mains/history/c09_armed_revolutionaries.json",
                            quizTag: "gb_mhist_revolution_01",
                            tags: ["Mains History", "Armed Revolutionaries", "Vasudev Balwant Phadke", "Chapekar Brothers 1897", "VD Savarkar Abhinav Bharat", "Jackson Murder 1909", "High-Weightage"],
                            searchKeywords: ["vasudev balwant phadke armed rebellion ramoshis aden 1883", "chapekar brothers assassination of rand 22 june 1897", "swatantryaveer vinayak damodar savarkar abhinav bharat 1904", "anant laxman kanhere jackson assassination nashik 1909", "senapati bapat bomb manual paris", "वासुदेव बळवंत फडके आद्य क्रांतिकारक", "चापेकर बंधू रँड वध १८९७", "स्वातंत्र्यवीर सावरकर अभिनव भारत १९०४", "अनंत कान्हेरे जॅक्सन वध १९०९", "सेनापती बापट"],
                            topics: [
                                {
                                    id: "top_gb_mh09_01",
                                    nameMr: "सशस्त्र क्रांतीची बीजे, चापेकर बंधूंचे बलिदान, अभिनव भारत आणि नाशिक कट",
                                    nameEn: "Armed Revolutionary Vanguard, Rand Execution, Abhinav Bharat & Nashik Conspiracy",
                                    subtopics: [
                                        {
                                            id: "st_gb_mh09_01_01",
                                            titleMr: "वासुदेव बळवंत फडके (१८४५-१८८३): महाराष्ट्रातील सशस्त्र क्रांतीचे आद्य जनक; पुण्यात ऐक्यवर्धनी सभा व पूना नेटिव्ह इन्स्टिट्यूट (भावे स्कूल) ची स्थापना; १८७६-७७ च्या दुष्काळात इंग्रजांच्या निष्ठुरतेविरुद्ध बंड; दौलतराव नाईक यांच्या साथीने रामोशी व कोळ्यांचे सशस्त्र सैन्य उभे केले; धामारी, लोणी येथे सरकारी तिजोरी लुटली; २० जुलै १८७९ रोजी हैदराबाद संस्थानात अटक; गणेश वासुदेव जोशी (सार्वजनिक काका) यांनी खटला लढवला; एडनच्या तुरुंगात १७ फेब्रुवारी १८८३ रोजी मृत्यू",
                                            titleEn: "Vasudev Balwant Phadke (1845-1883): Father of Indian Armed Rebellion; Mobilized Ramoshis & Kolis under Daulatrao Naik during 1876 famine; Treasury raids; Arrested in Hyderabad (1879); Defended by Sarvajanik Kaka; Martyrdom in Aden jail on 17 Feb 1883",
                                            chips: ["वासुदेव बळवंत फडके (आद्य क्रांतिकारक)", "रामोशी सैन्य (दौलतराव नाईक)", "सार्वजनिक काकांनी खटला लढवला", "एडन जेल १८८३ मृत्यू"]
                                        },
                                        {
                                            id: "st_gb_mh09_01_02",
                                            titleMr: "चापेकर बंधू व रँड वध (१८९७): पुण्यात १८९६-९७ च्या प्लेग साथीच्या वेळी प्लेग कमिशनर वॉल्टर चार्ल्स रँड याने घरात घुसून सैनिकांमार्फत जनतेवर केलेले अत्याचार; दामोदर व बाळकृष्ण चापेकर यांनी राणी व्हिक्टोरियाच्या हीरक महोत्सवाच्या दिवशी २२ जून १८९७ रोजी गणेशखिंड (पुणे) येथे रँड व आयर्स्ट यांचा गोळ्या झाडून वध केला; द्रविड बंधूंनी फितुरी केल्याने चापेकर बंधूंना फाशी; वासुदेव चापेकर व महादेव रानडे यांनी द्रविड बंधूंचा वध केला",
                                            titleEn: "Chapekar Brothers & Rand Assassination (1897): Retaliation against tyrannical plague operations by Commissioner Walter Charles Rand; Damodar & Balkrishna Chapekar shot Rand & Ayerst on 22 June 1897 at Ganeshkhind; Betrayed by Dravid brothers; Chapekar brothers martyred by hanging",
                                            chips: ["चापेकर बंधू (दामोदर, बाळकृष्ण, वासुदेव)", "रँड व आयर्स्ट वध २२ जून १८९७", "गणेशखिंड पुणे", "द्रविड बंधू फितुरी"]
                                        },
                                        {
                                            id: "st_gb_mh09_01_03",
                                            titleMr: "स्वातंत्र्यवीर सावरकर व अभिनव भारत (१९०४): विनायक दामोदर सावरकर यांनी नाशिकमध्ये 'मित्रमेळा' (१८९९) ची स्थापना केली, त्याचे रूपांतर १९०४ मध्ये 'अभिनव भारत' या गुप्त क्रांतिकारी संघटनेत झाले (इटलीच्या जोसेफ मॅझिनीच्या यंग इटलीवरून प्रेरणा); '१८५७ चे स्वातंत्र्यसमर' ग्रंथ; लंडनमधील इंडिया हाऊस येथे बॉम्ब बनवण्याचे तंत्र शिकून भारतात पाठवले; पांडुरंग महादेव (सेनापती) बापट पॅरिसला जाऊन बॉम्ब बनवण्याचे मॅन्युअल घेऊन आले",
                                            titleEn: "Swatantryaveer V.D. Savarkar & Abhinav Bharat (1904): Founded Mitra Mela (1899) in Nashik, renamed Abhinav Bharat (1904, inspired by Mazzini's Young Italy); Authored '1857: The War of Independence'; India House in London; Senapati Bapat brought Russian Bomb Manual from Paris",
                                            chips: ["मित्रमेळा १८९९ -> अभिनव भारत १९०४", "स्वातंत्र्यवीर सावरकर", "१८५७ चे स्वातंत्र्यसमर ग्रंथ", "सेनापती बापट (पॅरिस बॉम्ब मॅन्युअल)"]
                                        },
                                        {
                                            id: "st_gb_mh09_01_04",
                                            titleMr: "नाशिकचा जॅक्सन वध आणि अंदमान शिक्षा: बाबाराव सावरकर यांना काळेपाण्याची शिक्षा देणाऱ्या नाशिकचा कलेक्टर ए. एम. टी. जॅक्सन याचा २१ डिसेंबर १९०९ रोजी विजयानंद नाटकगृहात अनंत लक्ष्मण कान्हेरे या तरुणाने गोळ्या झाडून वध केला (सहकारी: कृष्णाजी कर्वे व विनायक देशपांडे - तिघांना ठाणे जेलमध्ये फाशी); सावरकरांना लंडनमध्ये अटक, मार्सेलिस बंदरात उडी (८ जुलै १९१०), आणि दोन जन्मठेपांची (५० वर्षे) अंदमान काळेपाणी शिक्षा",
                                            titleEn: "Jackson Murder (1909) & Andaman Exile: Anant Laxman Kanhere shot Nashik Collector A.M.T. Jackson on 21 Dec 1909 at Vijayanand Theatre; Kanhere, Karve, Deshpande executed; Savarkar arrested in London, historic leap into sea at Marseilles (1910), sentenced to 50 years at Cellular Jail",
                                            chips: ["अनंत कान्हेरे (जॅक्सन वध २१ डिसें १९०९)", "विजयानंद नाटकगृह नाशिक", "मार्सेलिस उडी १९१०", "सावरकर ५० वर्षे काळेपाणी शिक्षा"]
                                        }
                                    ],
                                    sources: [
                                        { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण १०: महाराष्ट्रातील सशस्त्र क्रांती" },
                                        { book: "महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण १० व ११: क्रांतिकारी चळवळी" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग E — राष्ट्रीय स्वातंत्र्यलढ्यात महाराष्ट्राचे योगदान (National Movement)
                        // =========================================================================
                        {
                            id: "gb_mhist_c10",
                            code: "MH10",
                            section: "E",
                            slug: "congress-foundation-in-bombay-and-moderate-extremist-phases",
                            nameMr: "काँग्रेसची मुंबईत स्थापना (१८८५), मवाळ कालखंड आणि लोकमान्य टिळक युग",
                            nameEn: "INC Foundation in Bombay (1885), Moderate Phase & Lokmanya Tilak Era",
                            name: "काँग्रेस स्थापना व टिळक युग (INC Foundation & Tilak Era)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 5,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mhist_c10",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mhist_c09",
                            nextChapterId: "gb_mhist_c11",
                            metaDescriptionMr: "काँग्रेस स्थापना (२८ डिसेंबर १८८५ - गोकुळदास तेजपाल संस्कृत कॉलेज, मुंबई, ७२ प्रतिनिधी), मवाळ नेते (फिरोजशाह मेहता, दिनशा वाच्छा, गोखले), लोकमान्य बाळ गंगाधर टिळक (सार्वजनिक गणेशोत्सव, शिवजयंती, केसरी-मराठा, मंडले कारावास), आणि होमरूल चळवळ.",
                            metaDescriptionEn: "In-depth review of Nationalist Origins: INC Foundation (28 Dec 1885 at Gokuldas Tejpal College Bombay, 72 delegates, W.C. Bonnerjee), Bombay Presidency Association, Moderate stalwarts (Gokhale, Pherozeshah Mehta), Lokmanya Bal Gangadhar Tilak (Ganeshotsav, Shiv Jayanti, 4-point program, 6-year Mandalay sedition exile), and Home Rule League 1916.",
                            notesJsonPath: "/data/notes/group_b/mains/history/c10_congress_tilak_era.json",
                            quizTag: "gb_mhist_congress_01",
                            tags: ["Mains History", "Congress Foundation 1885", "Bombay Gokuldas Tejpal", "Gopal Krishna Gokhale", "Lokmanya Tilak Era", "Mandalay Jail", "Home Rule 1916", "High-Weightage"],
                            searchKeywords: ["indian national congress foundation 28 december 1885 bombay 72 delegates", "w c bonnerjee a o hume gokuldas tejpal college", "gopal krishna gokhale servants of india society 1905", "lokmanya bal gangadhar tilak ganeshotsav 1893 shivaji festival 1895", "tilak sedition trial 1908 mandalay jail geetarahasya", "home rule league belgaum 1916 tilak", "काँग्रेस स्थापना २८ डिसेंबर १८८५ मुंबई", "गोकुळदास तेजपाल कॉलेज ७२ प्रतिनिधी", "गोपाळ कृष्ण गोखले भारत सेवक समाज", "लोकमान्य टिळक चतुःसूत्री", "मंडले जेल गीतारहस्य", "होमरूल लीग बेळगाव १९१६"],
                            topics: [
                                {
                                    id: "top_gb_mh10_01",
                                    nameMr: "मुंबईतील काँग्रेस स्थापना, मवाळ नेतृत्व, टिळकांचे जहाल राजकारण आणि होमरूल",
                                    nameEn: "Bombay INC Inception, Moderate Constitutionalism, Tilak's Mass Politics & Home Rule",
                                    subtopics: [
                                        {
                                            id: "st_gb_mh10_01_01",
                                            titleMr: "भारतीय राष्ट्रीय काँग्रेसची मुंबईतील स्थापना: २८ डिसेंबर १८८५ रोजी मुंबईच्या 'गोकुळदास तेजपाल संस्कृत कॉलेज' मध्ये पहिले अधिवेशन; पुण्यात कॉलऱ्याची साथ आल्यामुळे अधिवेशन मुंबईला हलवले; संस्थापक: ॲलन ऑक्टाव्हियन ह्युम; पहिले अध्यक्ष: व्योमेशचंद्र बॅनर्जी; एकूण ७२ प्रतिनिधी उपस्थित (महाराष्ट्रातून फिरोजशाह मेहता, दादाभाई नौरोजी, के. टी. तेलंग, गोपाळ गणेश आगरकर, गवा जोशी सहभाग)",
                                            titleEn: "Foundation of INC: 28 Dec 1885 at Gokuldas Tejpal Sanskrit College Bombay; Shifted from Pune due to cholera outbreak; A.O. Hume facilitator; W.C. Bonnerjee first president; 72 founding delegates (Maharashtra stalwarts: Dadabhai, Pherozeshah Mehta, K.T. Telang, Agarkar, G.V. Joshi)",
                                            chips: ["काँग्रेस स्थापना २८ डिसें १८८५ (मुंबई)", "गोकुळदास तेजपाल कॉलेज", "७२ प्रतिनिधी उपस्थित", "व्योमेशचंद्र बॅनर्जी पहिले अध्यक्ष", "ए ओ ह्युम"]
                                        },
                                        {
                                            id: "st_gb_mh10_01_02",
                                            titleMr: "मवाळ कालखंड व गोपाळ कृष्ण गोखले: सनदशीर मार्गाने अर्ज-विनंत्यांचे राजकारण; नामदार गोपाळ कृष्ण गोखले (१८६६-१९१५): महात्मा गांधींचे राजकीय गुरू; १९०५ मध्ये पुण्यात 'भारत सेवक समाज' (Servants of India Society) ची स्थापना; १९०५ च्या बनारस काँग्रेस अधिवेशनाचे अध्यक्ष; वेल्बी कमिशनसमोर साक्ष; इंपिरिअल लेजिस्लेटिव्ह कौन्सिलमध्ये अर्थसंकल्पावरील प्रभावी भाषणे",
                                            titleEn: "Moderate Era & Gopal Krishna Gokhale: Constitutional petitions and legislative scrutiny; Gokhale (1866-1915): Political guru of Mahatma Gandhi; Founded Servants of India Society (1905 at Pune); Chaired 1905 Banaras Congress; Welby Commission deposition; Imperial Council budget critiques",
                                            chips: ["गोपाळ कृष्ण गोखले (गांधीजींचे राजकीय गुरू)", "भारत सेवक समाज १९०५ (पुणे)", "बनारस काँग्रेस अध्यक्ष १९०५", "वेल्बी कमिशन साक्ष"]
                                        },
                                        {
                                            id: "st_gb_mh10_01_03",
                                            titleMr: "लोकमान्य बाळ गंगाधर टिळक (१८५६-१९२०) व जहाल युग: 'स्वराज्य हा माझा जन्मसिद्ध हक्क आहे आणि तो मी मिळवणारच'; लोकजागृतीची साधने: सार्वजनिक गणेशोत्सव (१८९३) व शिवजयंती उत्सव (१८९५); काँग्रेसची चतुःसूत्री: स्वदेशी, बहिष्कार, राष्ट्रीय शिक्षण, स्वराज्य; लाला लजपत राय, बाळ गंगाधर टिळक, बिपिन चंद्र पाल (लाल-बाल-पाल); १९०८ मधील राजद्रोह खटल्यात ६ वर्षांची काळेपाणी शिक्षा; ब्रह्मदेशातील 'मंडले तुरुंगात' असताना 'गीतारहस्य' ग्रंथाचे लेखन",
                                            titleEn: "Lokmanya Tilak & Assertive Nationalism: 'Swaraj is my birthright and I shall have it'; Mass mobilization: Public Ganeshotsav (1893) & Shiv Jayanti (1895); 4-Point Action Programme: Swadeshi, Boycott, National Education, Swaraj; Sedition Trial (1908) by Justice Davar; Wrote 'Gita Rahasya' in Mandalay Jail",
                                            chips: ["लोकमान्य टिळक (जहाल युग)", "सार्वजनिक गणेशोत्सव १८९३", "शिवजयंती १८९५", "चतुःसूत्री (स्वदेशी बहिष्कार)", "मंडले जेल ६ वर्षे शिक्षा", "गीतारहस्य ग्रंथ"]
                                        },
                                        {
                                            id: "st_gb_mh10_01_04",
                                            titleMr: "होमरूल चळवळ (१९१६): टिळकांनी २८ एप्रिल १९१६ रोजी बेळगाव येथे 'इंडियन होमरूल लीग' ची स्थापना केली (महाराष्ट्र, मध्य प्रांत व कर्नाटक कार्यक्षेत्र; मुख्यालय: पुणे; जोसेफ बॅप्टिस्टा पहिले अध्यक्ष, एन. सी. केळकर सचिव); ॲनी बेझंट यांनी सप्टेंबर १९१६ मध्ये मद्रास येथे लीग सुरू केली; लखनौ करार (१९१६ - मवाळ-जहाल एकत्र आले आणि काँग्रेस-मुस्लिम लीग एकजूट झाली)",
                                            titleEn: "Home Rule League (1916): Tilak launched Indian Home Rule League on 28 April 1916 at Belgaum (Maharashtra except Bombay city, Central Provinces, Berar & Karnataka; HQ Pune; Joseph Baptista President, N.C. Kelkar Secretary); Lucknow Pact 1916",
                                            chips: ["होमरूल लीग बेळगाव (२८ एप्रिल १९१६)", "टिळक मुख्यालय पुणे", "जोसेफ बॅप्टिस्टा अध्यक्ष", "लखनौ करार १९१६ (एकजूट)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "आधुनिक भारताचा इतिहास", standard: "बिपिन चंद्र", chapterRef: "काँग्रेसची स्थापना व जहाल चळवळ" },
                                        { book: "महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण ८ व ९: लोकमान्य टिळक व राष्ट्रीय लढा" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mhist_c11",
                            code: "MH11",
                            section: "E",
                            slug: "gandhian-mass-movements-in-maharashtra-1920-to-1942",
                            nameMr: "गांधीवादी जनआंदोलने आणि महाराष्ट्र (१९२० ते १९४२): असहकार, सविनय कायदेभंग व चले जाव",
                            nameEn: "Gandhian Mass Movements in Maharashtra (1920-1942): NCM, Civil Disobedience & Quit India",
                            name: "गांधीवादी आंदोलने व महाराष्ट्र (Gandhian Movements in Maharashtra)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 5,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mhist_c11",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mhist_c10",
                            nextChapterId: "gb_mhist_c12",
                            metaDescriptionMr: "असहकार चळवळ (१९२०), सविनय कायदेभंग (१९३० - दांडी यात्रा, वडाळा-शिरोडा मीठ सत्याग्रह, सोलापूर मार्शल लॉ चार हुतात्मे, बिळाशी जंगल सत्याग्रह, बाबू गेणू बलिदान), फैजपूर ग्रामीण काँग्रेस (१९३६), आणि चले जाव (१९४२ - मुंबई ग्वालिया टँक, आझाद रेडिओ).",
                            metaDescriptionEn: "In-depth review of Gandhian Struggles in Maharashtra: Non-Cooperation 1920, Civil Disobedience 1930 (Salt satyagraha at Wadala/Shiroda, Solapur Martial Law 4 martyrs, Forest satyagrahas at Bilashi/Chirner, Babu Genu martyrdom), Faizpur 1st Rural Congress 1936, and Quit India 1942 (Gowalia Tank Bombay, Usha Mehta's Underground Radio).",
                            notesJsonPath: "/data/notes/group_b/mains/history/c11_gandhian_movements_mh.json",
                            quizTag: "gb_mhist_gandhian_01",
                            tags: ["Mains History", "Civil Disobedience 1930", "Solapur Martial Law 4 Martyrs", "Forest Satyagraha Bilashi", "Faizpur Congress 1936", "Quit India 1942", "High-Weightage"],
                            searchKeywords: ["civil disobedience 1930 maharashtra salt satyagraha wadala shiroda", "solapur martial law four martyrs dhanshetti shinde kurban sarda", "forest satyagraha bilashi sangli chirner raigad", "faizpur rural congress 1936 nehru sane guruji", "quit india movement 1942 gowalia tank bombay usha mehta azad radio", "सविनय कायदेभंग १९३० वडाळा शिरोडा मीठ सत्याग्रह", "सोलापूरचे चार हुतात्मे १२ जानेवारी १९३१", "बिळाशी जंगल सत्याग्रह झेंडा रक्षण", "फैजपूर ग्रामीण काँग्रेस १९३६", "चले जाव आंदोलन १९४२ मुंबई", "उषा मेहता आझाद रेडिओ"],
                            topics: [
                                {
                                    id: "top_gb_mh11_01",
                                    nameMr: "सविनय कायदेभंग, सोलापूरचे हुतात्मे, जंगल सत्याग्रह, फैजपूर अधिवेशन व चले जाव",
                                    nameEn: "Civil Disobedience, Solapur Commune, Forest Agitations, Faizpur Plenum & Quit India",
                                    subtopics: [
                                        {
                                            id: "st_gb_mh11_01_01",
                                            titleMr: "सविनय कायदेभंग व महाराष्ट्रातील मिठाचे सत्याग्रह (१९३०): १२ मार्च १९३० रोजी दांडी यात्रेत महाराष्ट्रातील अवंतिकाबाई गोखले यांचा सहभाग; महाराष्ट्रात मिठाचे सत्याग्रह: १) वडाळा (मुंबई - हजारो सत्याग्रहींचा मिठाच्या गोदामावर मोर्चा), २) शिरोडा (मालवण/सिंधुदुर्ग - आचार्य काका कालेलकर), ३) उरण व भाटी (रत्नागिरी); बाबू गेणू सैद यांचे बलिदान (१२ डिसेंबर १९३० - मुंबईच्या काळबादेवी भागात विदेशी कापडाचा ट्रक अडवताना आत्मार्पण)",
                                            titleEn: "Civil Disobedience & Salt Satyagrahas (1930): Avantikabai Gokhale marched in Dandi; Maharashtra centers: Wadala (Bombay salt pan raids), Shiroda (Malvan under Kaka Kalelkar), Uran; Martyrdom of Babu Genu Said (12 Dec 1930 at Kalbadevi Bombay blocking foreign textile truck)",
                                            chips: ["सविनय कायदेभंग १९३०", "वडाळा मीठ सत्याग्रह", "शिरोडा मालवण", "बाबू गेणू बलिदान (१२ डिसें १९३०)", "विदेशी माल बहिष्कार"]
                                        },
                                        {
                                            id: "st_gb_mh11_01_02",
                                            titleMr: "सोलापूरचा लढा व मार्शल लॉ (मे १९३०): गांधीजींच्या अटकेनंतर सोलापूरच्या कापड गिरणी कामगारांचा अभूतपूर्व उठाव; म्युनिसिपालिटीवर तिरंगा फडकवला व जनतेने शहराचा ताबा घेतला (सोलापूर कम्यून); ब्रिटिश सरकारने मार्शल लॉ लागू केला; गोळीबारात अनेक निष्पाप मारले गेले; सोलापूरचे चार हुतात्मे: १) मल्लप्पा धनशेट्टी, २) जगन्नाथ शिंदे, ३) कुर्बान हुसेन, ४) किसन सारडा (१२ जानेवारी १९३१ रोजी पुण्याच्या येरवडा जेलमध्ये फाशी)",
                                            titleEn: "Solapur Uprising & Martial Law (May 1930): Mill workers revolted post-Gandhi arrest; Solapur Commune established; British imposed Martial Law; 4 Heroes executed on 12 Jan 1931 at Yerwada: Mallappa Dhanshetti, Jagannath Shinde, Kurban Hussain, Kisan Sarda",
                                            chips: ["सोलापूर मार्शल लॉ मे १९३०", "चार हुतात्मे", "मल्लप्पा धनशेट्टी", "जगन्नाथ शिंदे", "कुर्बान हुसेन", "किसन सारडा (१२ जाने १९३१ फाशी)"]
                                        },
                                        {
                                            id: "st_gb_mh11_01_03",
                                            titleMr: "महाराष्ट्रातील जंगल सत्याग्रह (१९३०): वन कायदे मोडणे; १) बिळाशी (जि. सांगली - राष्ट्रध्वज संरक्षणाचा ऐतिहासिक लढा, पोलिसांचा गोळीबार); २) चिरनेर (जि. रायगड - मामलेदारासह अनेक पोलिसांचा मृत्यू, जनतेचा प्रचंड प्रतिकार); ३) संगमनेर व अकोले (अहमदनगर); ४) पुसद (यवतमाळ - लोकनायक बापूजी अणे यांच्या नेतृत्वाखाली); ५) कलवण (नाशिक)",
                                            titleEn: "Forest Satyagrahas in Maharashtra (1930): Violating British forest laws; Bilashi (Sangli - epic flag protection battle), Chirner (Raigad - clash with colonial police), Sangamner, Akole, Pusad (Yavatmal led by Loknayak Bapuji Aney), Kalwan",
                                            chips: ["बिळाशी जंगल सत्याग्रह (सांगली)", "चिरनेर सत्याग्रह (रायगड)", "पुसद (बापूजी अणे)", "वन कायदेभंग"]
                                        },
                                        {
                                            id: "st_gb_mh11_01_04",
                                            titleMr: "फैजपूर काँग्रेस अधिवेशन (१९३६): काँग्रेसचे ५० वे अधिवेशन आणि पहिलेच 'ग्रामीण अधिवेशन'; जळगाव (खान्देश) जिल्ह्यातील फैजपूर येथे; अध्यक्ष: पं. जवाहरलाल नेहरू; स्वागत समिती: साने गुरुजी व धनजीशेट चौधरी; शेतकरी मागण्यांचा जाहीरनामा (Agrarian Programme) संमत; साने गुरुजींनी 'काँग्रेस ध्वज वंदना' गीत लिहिले",
                                            titleEn: "Faizpur Congress Session (1936): 50th Plenum and 1st Rural Session of INC held at Faizpur (Jalgaon, Khandesh); Chaired by Jawaharlal Nehru; Key organizers: Sane Guruji; Passed historic Agrarian Programme demanding land rent reduction and debt moratorium",
                                            chips: ["फैजपूर काँग्रेस १९३६ (पहिले ग्रामीण अधिवेशन)", "पं नेहरू अध्यक्ष", "साने गुरुजी", "शेतकरी अजेंडा"]
                                        },
                                        {
                                            id: "st_gb_mh11_01_05",
                                            titleMr: "चले जाव आंदोलन (१९४२ - भारत छोडो): ८ ऑगस्ट १९४२ रोजी मुंबईच्या 'ग्वालिया टँक' (ऑगस्ट क्रांती मैदान) येथे गांधीजींचे भाषण - 'करेंगे या मरेंगे'; ९ ऑगस्टला सर्व बड्या नेत्यांची अटक; मुंबईत जनतेचा प्रचंड उद्रेक; भूमिगत आझाद रेडिओ (Underground Congress Radio): डॉ. उषा मेहता, विठ्ठलभाई झवेरी, राममनोहर लोहिया; नंदुरबार येथे तिरंगा हाती घेऊन गोळ्या झेलणारे बालवीर हुतात्मा शिरीषकुमार (९ सप्टेंबर १९४२)",
                                            titleEn: "Quit India Movement (1942): Launched 8 Aug 1942 at Gowalia Tank (August Kranti Maidan) Bombay with 'Do or Die'; Leaders arrested 9 Aug; Underground Azad Radio operated secretly by Dr. Usha Mehta & Ram Manohar Lohia; Martyr Shirishkumar (9 Sept 1942 at Nandurbar)",
                                            chips: ["ऑगस्ट क्रांती मैदान मुंबई", "करेंगे या मरेंगे (८ ऑगस्ट १९४२)", "उषा मेहता (आझाद रेडिओ)", "शिरीषकुमार बलिदान (नंदुरबार)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण १६: गांधीवादी आंदोलने व महाराष्ट्र" },
                                        { book: "महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण १२ व १३: स्वातंत्र्य चळवळीतील महाराष्ट्र" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mhist_c12",
                            code: "MH12",
                            section: "E",
                            slug: "satara-parallel-government-pratisarkar-and-underground-struggle",
                            nameMr: "क्रांतिसिंह नाना पाटील यांचे सातारा प्रतिसरकार (पत्री सरकार) आणि समांतर क्रांती",
                            nameEn: "Krantisinh Nana Patil's Satara Pratisarkar (Parallel Government: 1943-1946)",
                            name: "साताऱ्याचे प्रतिसरकार (Satara Pratisarkar 1943-46)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mhist_c12",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mhist_c11",
                            nextChapterId: "gb_mhist_c13",
                            metaDescriptionMr: "क्रांतिसिंह नाना पाटील यांचे सातारा प्रतिसरकार (१९४३-१९४६), तुफान सेना (भाऊराव बाबर, जी. डी. लाड, नागनाथअण्णा नायकवडी), धुळे खजिना लूट, न्यायदान मंडळे (लोकअदालती), पत्री सरकारची कार्यपद्धती, आणि गांधी विवाह पद्धत.",
                            metaDescriptionEn: "In-depth review of Satara Parallel Government (Pratisarkar 1943-46): Krantisinh Nana Patil, Toofan Sena military wing (Bhaurao Babar, G.D. Bapu Lad, Nagnath Nayakwadi), Dhule train treasury heist, Nyayadan Mandals (People's courts), and the unique 'Patri Sarkar' anti-informer enforcement.",
                            notesJsonPath: "/data/notes/group_b/mains/history/c12_satara_pratisarkar.json",
                            quizTag: "gb_mhist_pratisarkar_01",
                            tags: ["Mains History", "Satara Pratisarkar 1943 1946", "Krantisinh Nana Patil", "Toofan Sena", "Patri Sarkar", "Nyayadan Mandals", "High-Weightage"],
                            searchKeywords: ["satara pratisarkar 1943 1946 krantisinh nana patil", "toofan sena bhaurao babar gd bapu lad nagnath nayakwadi", "patri sarkar punishing british police informers", "dhule treasury train dacoity chinchode", "nyayadan mandal peoples court satara", "साताऱ्याचे प्रतिसरकार १९४३ ते १९४६", "क्रांतिसिंह नाना पाटील", "तुफान सेना जी डी लाड", "पत्री सरकार", "धुळे खजिना लूट", "न्यायदान मंडळे लोकअदालत"],
                            topics: [
                                {
                                    id: "top_gb_mh12_01",
                                    nameMr: "प्रतिसरकारची स्थापना, तुफान सेनेच्या सशस्त्र कारवाया आणि न्यायदान व्यवस्था",
                                    nameEn: "Parallel State Machinery, Guerrilla Actions, Nyayadan Mandals & Retributive Justice",
                                    subtopics: [
                                        {
                                            id: "st_gb_mh12_01_01",
                                            titleMr: "प्रतिसरकारची स्थापना व नेतृत्व (१९४३-१९४६): चले जाव आंदोलनाच्या दडपशाहीनंतर सातारा, सांगली भागात ब्रिटिश सत्तेला समांतर शासन स्थापन केले; प्रमुख नेते: क्रांतिसिंह नाना पाटील, किसन वीर, जी. डी. (बापू) लाड, नागनाथअण्णा नायकवडी, अच्युतराव पटवर्धन; १५० हून अधिक गावांमध्ये ब्रिटिश राजवट पूर्णपणे निष्प्रभ करून स्वतःचे शासन चालवले",
                                            titleEn: "Foundation & Leadership of Pratisarkar (1943-46): Established in Satara-Sangli region after brutal suppression of Quit India; Completely ousted British administrative machinery across 150+ villages; Leaders: Krantisinh Nana Patil, Kisan Veer, G.D. Bapu Lad, Nagnath Nayakwadi, Achyut Patwardhan",
                                            chips: ["प्रतिसरकार स्थापना १९४३-४६", "क्रांतिसिंह नाना पाटील", "किसन वीर", "जी डी बापू लाड", "नागनाथअण्णा नायकवडी", "ब्रिटिश सत्तेला आव्हान"]
                                        },
                                        {
                                            id: "st_gb_mh12_01_02",
                                            titleMr: "तुफान सेना (Toofan Sena) व सशस्त्र धाडी: प्रतिसरकारची अधिकृत लष्करी शाखा; फील्ड मार्शल: कॅप्टन भाऊराव बाबर; कुंडल येथे मुख्यालय; ऐतिहासिक धुळे रेल्वे खजिना लूट (७ जून १९४३ - चिंचोडे रेल्वे स्थानकाजवळ सरकारी खजिन्याची ५.५ लाख रुपयांची लूट); लुटलेला पैसा प्रतिसरकार चालवण्यासाठी व शस्त्रास्त्रे खरेदीसाठी वापरला",
                                            titleEn: "Toofan Sena Guerrilla Operations: Armed wing commanded by Field Marshal Captain Bhaurao Babar; HQ Kundal; Historic Dhule Treasury Train Raid (7 June 1943 at Chinchode station looting Rs 5.5 Lakhs of British funds) led by Nagnath Nayakwadi & G.D. Lad",
                                            chips: ["तुफान सेना (लष्करी शाखा)", "कॅप्टन भाऊराव बाबर", "धुळे खजिना लूट ७ जून १९४३", "कुंडल मुख्यालय"]
                                        },
                                        {
                                            id: "st_gb_mh12_01_03",
                                            titleMr: "प्रशासकीय कार्यप्रणाली व 'पत्री सरकार' नाव: १) न्यायदान मंडळे (People's Courts): सावकारी कर्जे रद्द केली, जमिनीच्या वादांचे जागेवरच मोफत व निष्पक्ष निकाल; २) सामाजिक सुधारणा: दारूबंदी, हुंडाबंदी, गांधी विवाह पद्धत (कमी खर्चात विवाह); ३) 'पत्री सरकार' नाव पडण्याचे कारण: ब्रिटिशांच्या गुप्तहेर व खबऱ्यांना (Informers) पकडून त्यांच्या पायाच्या तळव्यावर लाकडी काठीने मारणे किंवा खिळे/पत्रा ठोकण्याची शिक्षा देणे",
                                            titleEn: "Civil Machinery & 'Patri Sarkar' Nomenclature: Nyayadan Mandals dispensed swift grassroots justice; Enforced total alcohol prohibition & dowry-less Gandhi marriages; Known as 'Patri Sarkar' because British police informers were punished by beating/nailing wooden plates ('patri') to their feet",
                                            chips: ["न्यायदान मंडळे (लोकअदालत)", "पत्री सरकार (खबऱ्यांना शिक्षा)", "गांधी विवाह पद्धत", "सावकारी नियंत्रण", "दारूबंदी"]
                                        }
                                    ],
                                    sources: [
                                        { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण १७: साताऱ्याचे प्रतिसरकार" },
                                        { book: "क्रांतिसिंह नाना पाटील", standard: "महाराष्ट्र राज्य साहित्य आणि संस्कृती मंडळ", chapterRef: "तुफान सेना व पत्री सरकार" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग F — स्वातंत्र्योत्तर महाराष्ट्र: मराठवाडा मुक्ती व संयुक्त महाराष्ट्र चळवळ (State Formation)
                        // =========================================================================
                        {
                            id: "gb_mhist_c13",
                            code: "MH13",
                            section: "F",
                            slug: "hyderabad-freedom-struggle-and-marathwada-liberation-1948",
                            nameMr: "हैदराबाद मुक्तिसंग्राम आणि मराठवाडा मुक्ती लढा (ऑपरेशन पोलो १७ सप्टेंबर १९४८)",
                            nameEn: "Hyderabad Freedom Struggle & Marathwada Liberation (Operation Polo: 17 Sept 1948)",
                            name: "मराठवाडा मुक्तिसंग्राम (Marathwada Liberation Struggle)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mhist_c13",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mhist_c12",
                            nextChapterId: "gb_mhist_c14",
                            metaDescriptionMr: "हैदराबाद संस्थान (निजाम मीर उस्मान अली), कासिम रझवी व रझाकार अत्याचार, स्वामी रामानंद तीर्थ (हैदराबाद स्टेट काँग्रेस), वंदे मातरम चळवळ (१९३८), उमरखेड कॅम्प, ऑपरेशन पोलो (१३ ते १७ सप्टेंबर १९४८), आणि मराठवाडा मुक्ती दिन.",
                            metaDescriptionEn: "In-depth review of Marathwada Liberation: Nizam Mir Osman Ali, Kasim Razvi's Razakar brutality, Swami Ramanand Teerth (Hyderabad State Congress), Vande Mataram Movement 1938, Border camps (Umarkhed), Police Action 'Operation Polo' (13-17 Sept 1948), and 17 Sept Liberation Day.",
                            notesJsonPath: "/data/notes/group_b/mains/history/c13_marathwada_liberation.json",
                            quizTag: "gb_mhist_marathwada_01",
                            tags: ["Mains History", "Marathwada Mukti Sangram", "Swami Ramanand Teerth", "Operation Polo 17 Sept 1948", "Razakars Kasim Razvi", "High-Weightage"],
                            searchKeywords: ["hyderabad liberation struggle marathwada mukti sangram 1948", "swami ramanand teerth hyderabad state congress", "operation polo 13 to 17 september 1948 general jn chaudhuri", "razakars terror kasim razvi majlis", "vande mataram movement 1938 osmania university", "umarkhed border camp govindbhai shroff", "मराठवाडा मुक्तिसंग्राम", "स्वामी रामानंद तीर्थ", "ऑपरेशन पोलो १७ सप्टेंबर १९४८", "रझाकार कासिम रझवी", "वंदे मातरम आंदोलन १९३८", "उमरखेड कॅम्प गोविंदभाई श्रॉफ"],
                            topics: [
                                {
                                    id: "top_gb_mh13_01",
                                    nameMr: "निजाम राजवट, रझाकार अत्याचार, स्टेट काँग्रेस लढा आणि ऑपरेशन पोलो",
                                    nameEn: "Nizam's Feudal Tyranny, Razakar Terror, State Congress Mobilization & Operation Polo",
                                    subtopics: [
                                        {
                                            id: "st_gb_mh13_01_01",
                                            titleMr: "निजाम राजवट व अन्यायकारक स्थिती: हैदराबाद संस्थानाचा शेवटचा निजाम: मीर उस्मान अली खान; तेलगू, कन्नड व मराठी (८ जिल्हे - मराठवाडा) भाषक जनता; जनतेवर उर्दूमधून शिक्षण लादणे; वंदे मातरम आंदोलन (१९३८ - उस्मानिया विद्यापीठातील विद्यार्थ्यांवर वंदे मातरम म्हणण्यावर बंदी घातल्याने झालेला लढा - गोविंदभाई श्रॉफ, रामराव देशमुख सहभाग); कासिम रझवीच्या 'रझाकार' या निमलष्करी संघटनेचे हिंदू जनतेवर भीषण अत्याचार",
                                            titleEn: "Nizam Oppression & Early Sparks: Last Nizam Mir Osman Ali; Forced Urdu imposition on Marathi-speaking Marathwada; Vande Mataram Movement (1938 at Osmania University led by Govindbhai Shroff); Kasim Razvi's communal private militia 'Razakars' unleashing atrocities",
                                            chips: ["निजाम मीर उस्मान अली", "वंदे मातरम आंदोलन १९३८", "उस्मानिया विद्यापीठ", "कासिम रझवी (रझाकार)", "गोविंदभाई श्रॉफ"]
                                        },
                                        {
                                            id: "st_gb_mh13_01_02",
                                            titleMr: "स्वामी रामानंद तीर्थ आणि हैदराबाद स्टेट काँग्रेस: संन्यासी नेते स्वामी रामानंद तीर्थ (मूळ नाव: भालचंद्र व्यंकटेश खेडगीकर); १९३८ मध्ये हैदराबाद स्टेट काँग्रेसची स्थापना केली; निजामाकडून बंदी; 'संस्थान भारतात विलीन करा' ही थेट मागणी; सहकारी: गोविंदभाई श्रॉफ, बाबासाहेब परांजपे, दिगंबरराव बिंदू, अनंत भालेराव (मराठवाडा दैनिक); सीमेवर उमरखेड, वाशिम येथे कॅम्प उभारून सशस्त्र प्रतिकार",
                                            titleEn: "Swami Ramanand Teerth & State Congress: Monk-patriot Swami Ramanand Teerth (Bhalchandra Khedgikar); Founded Hyderabad State Congress (1938, banned by Nizam); Uncompromising demand for Indian accession; Border resistance camps at Umarkhed/Washim",
                                            chips: ["स्वामी रामानंद तीर्थ", "हैदराबाद स्टेट काँग्रेस १९३८", "उमरखेड कॅम्प", "बाबासाहेब परांजपे", "अनंत भालेराव (दैनिक मराठवाडा)"]
                                        },
                                        {
                                            id: "st_gb_mh13_01_03",
                                            titleMr: "ऑपरेशन पोलो व मराठवाडा मुक्ती (१७ सप्टेंबर १९४८): भारत सरकारचे गृहमंत्री सरदार वल्लभभाई पटेल यांचा कणखर निर्णय; १३ सप्टेंबर १९४८ रोजी हैदराबाद संस्थानावर पोलीस कारवाई सुरू (सांकेतिक नाव: 'ऑपरेशन पोलो' / Operation Polo); लष्करप्रमुख: मेजर जनरल जे. एन. चौधरी; चारही बाजूंनी भारतीय सैन्याची धडक; १७ सप्टेंबर १९४८ रोजी निजामाने शरणागती पत्करली; मराठवाडा स्वतंत्र भारतात सामील; १७ सप्टेंबर हा 'मराठवाडा मुक्ती दिन' म्हणून साजरा केला जातो",
                                            titleEn: "Operation Polo (13-17 Sept 1948): Decisive action by Home Minister Sardar Patel; Military action code-named 'Operation Polo' commanded by Maj Gen J.N. Chaudhuri commenced 13 Sept; Nizam surrendered 17 Sept 1948; 17 September observed as Marathwada Liberation Day",
                                            chips: ["ऑपरेशन पोलो (१३ ते १७ सप्टेंबर १९४८)", "सरदार वल्लभभाई पटेल", "मेजर जनरल जे एन चौधरी", "निजामाची शरणागती", "१७ सप्टेंबर मराठवाडा मुक्ती दिन"]
                                        }
                                    ],
                                    sources: [
                                        { book: "हैदराबाद स्वातंत्र्यसंग्राम", standard: "स्वामी रामानंद तीर्थ", chapterRef: "संपूर्ण आत्मवृत्त" },
                                        { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण १८: हैदराबाद मुक्तिसंग्राम व मराठवाडा" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mhist_c14",
                            code: "MH14",
                            section: "F",
                            slug: "samyukta-maharashtra-movement-commissions-and-106-martyrs",
                            nameMr: "संयुक्त महाराष्ट्र चळवळ: आयोग, नागपूर करार, १०६ हुतात्मे आणि १ मे १९६० स्थापना",
                            nameEn: "Samyukta Maharashtra Movement: Commissions, Nagpur Pact, 106 Martyrs & State Formation",
                            name: "संयुक्त महाराष्ट्र चळवळ (Samyukta Maharashtra Movement 1946-1960)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 5,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mhist_c14",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mhist_c13",
                            nextChapterId: "gb_mhist_c15",
                            metaDescriptionMr: "भाषावार प्रांतरचना (धर कमिशन १९४८, JVP समिती, फाझल अली आयोग १९५३), नागपूर करार (२८ सप्टेंबर १९५३), संयुक्त महाराष्ट्र समिती (स्थापना ६ फेब्रुवारी १९५६ - डांगे, एस. एम. जोशी, आचार्य अत्रे), १०६ हुतात्मे (फ्लोरा फाउंटन), आणि १ मे १९६० रोजी मुंबईसह स्वतंत्र महाराष्ट्र स्थापना.",
                            metaDescriptionEn: "In-depth review of Samyukta Maharashtra Movement: Linguistic Commissions (Dhar 1948, JVP 1948, Fazal Ali 1953), Nagpur Pact (28 Sept 1953), Samyukta Maharashtra Samiti (6 Feb 1956: S.A. Dange, S.M. Joshi, Acharya Atre), 106 Martyrs at Flora Fountain, and Official inauguration of Maharashtra State on 1 May 1960.",
                            notesJsonPath: "/data/notes/group_b/mains/history/c14_samyukta_maharashtra.json",
                            quizTag: "gb_mhist_samyukta_01",
                            tags: ["Mains History", "Samyukta Maharashtra Movement", "Nagpur Pact 1953", "Samyukta Maharashtra Samiti 1956", "106 Martyrs Flora Fountain", "Acharya Atre Maratha", "1 May 1960", "High-Weightage"],
                            searchKeywords: ["samyukta maharashtra movement 1946 1960 detailed", "nagpur pact 28 september 1953 statutory development boards", "dhar commission jvp committee fazal ali states reorganisation", "samyukta maharashtra samiti 6 february 1956 dange sm joshi atre", "106 martyrs hutatma chowk flora fountain police firing", "1 may 1960 yashwantrao chavan mangal kalash", "संयुक्त महाराष्ट्र चळवळ", "नागपूर करार २८ सप्टेंबर १९५३", "फाझल अली आयोग राज्य पुनर्रचना", "संयुक्त महाराष्ट्र समिती ६ फेब्रुवारी १९५६", "१०६ हुतात्मे हुतात्मा चौक", "आचार्य अत्रे दैनिक मराठा", "१ मे १९६० यशवंतराव चव्हाण मंगल कलश"],
                            topics: [
                                {
                                    id: "top_gb_mh14_01",
                                    nameMr: "भाषावार प्रांतरचना आयोग, नागपूर करार, समितीची स्थापना, हुतात्म्यांचे बलिदान व राज्य निर्मिती",
                                    nameEn: "Linguistic Commissions, Nagpur Pact Concord, Samiti Agitation, 106 Martyrs & Statehood",
                                    subtopics: [
                                        {
                                            id: "st_gb_mh14_01_01",
                                            titleMr: "भाषावार प्रांतरचना आयोगांचा प्रवास: १) एस. के. धर कमिशन (१९४८): भाषावार प्रांतरचना राष्ट्रीय हितास घातक असल्याचे मत मांडले; २) जेव्हीपी समिती (JVP १९४८ - जवाहरलाल, वल्लभभाई, पट्टाभी): महाराष्ट्राला मुंबई देण्यास नकार; ३) फाझल अली राज्य पुनर्रचना आयोग (१९५३ - सदस्य: पणिक्कर, कुंझरू): विदर्भाचे वेगळे राज्य व मुंबईसह द्विभाषिक राज्याची शिफारस; महाराष्ट्रात तीव्र असंतोष",
                                            titleEn: "Linguistic Reorganisation Commissions: Dhar Commission (1948 rejected linguistic states as divisive); JVP Committee (1948 refused Bombay to Maharashtra); Fazal Ali Commission (1953 recommended separate Vidarbha and Bilingual Bombay State, sparking mass fury)",
                                            chips: ["धर कमिशन १९४८", "JVP समिती १९४८", "फाझल अली आयोग १९५३", "द्विभाषिक मुंबई शिफारस"]
                                        },
                                        {
                                            id: "st_gb_mh14_01_02",
                                            titleMr: "नागपूर करार (२८ सप्टेंबर १९५३): पश्चिम महाराष्ट्र, विदर्भ आणि मराठवाडा या तिन्ही प्रांतांच्या नेत्यांमध्ये मुंबईत झालेला ऐतिहासिक करार; स्वाक्षरीकर्ते: यशवंतराव चव्हाण, भाऊसाहेब हिरे, देवकीनंदन, आर. के. पाटील, रामराव देशमुख; प्रमुख अटी: १) मुंबईसह संयुक्त महाराष्ट्र राज्य व्हावे, २) नागपूर हे उपराजधानी असावे व वर्षातून किमान एक अधिवेशन नागपूरला व्हावे, ३) विदर्भ व मराठवाड्यासाठी वैधानिक विकास महामंडळांची तरतूद (कलम ३७१(२))",
                                            titleEn: "Nagpur Pact (28 Sept 1953): Historic concord signed by leaders of Western Maharashtra, Vidarbha & Marathwada (Yashwantrao Chavan, Bhausaheb Hire, Ramrao Deshmukh); Stipulated: Bombay as capital, Nagpur as second capital hosting winter legislative session, and separate Statutory Development Boards",
                                            chips: ["नागपूर करार २८ सप्टेंबर १९५३", "यशवंतराव चव्हाण", "नागपूर उपराजधानी (हिवाळी अधिवेशन)", "वैधानिक विकास महामंडळे तरतूद"]
                                        },
                                        {
                                            id: "st_gb_mh14_01_03",
                                            titleMr: "संयुक्त महाराष्ट्र समितीची स्थापना (६ फेब्रुवारी १९५६): पुण्यातील टिळक स्मारक मंदिरात स्थापना; अध्यक्ष: श्रीपाद अमृत डांगे (कम्युनिस्ट नेते); सरचिटणीस: एस. एम. जोशी (समाजवादी नेते); उपाध्यक्ष: डॉ. त्र्यं. रा. नरवणे; प्रमुख नेते: प्रल्हाद केशव (आचार्य) अत्रे (त्यांचे 'दैनिक मराठा' हे चळवळीचे तोफगोळा ठरले), सेनापती बापट, प्रबोधनकार केशव सीताराम ठाकरे, शाहीर अमर शेख, शाहीर अण्णाभाऊ साठे, क्रांतीसिंह नाना पाटील",
                                            titleEn: "Samyukta Maharashtra Samiti (6 Feb 1956): Founded at Tilak Smarak Mandir Pune; President: S.A. Dange; General Secretary: S.M. Joshi; Vanguard: Acharya P.K. Atre (his 'Dainik Maratha' newspaper galvanized the masses), Senapati Bapat, Prabodhankar Thackeray, Shahir Amar Shaikh, Annabhau Sathe",
                                            chips: ["संयुक्त महाराष्ट्र समिती (६ फेब्रुवारी १९५६)", "श्रीपाद अमृत डांगे अध्यक्ष", "एस एम जोशी सरचिटणीस", "आचार्य अत्रे (दैनिक मराठा)", "शाहीर अमर शेख व अण्णाभाऊ साठे"]
                                        },
                                        {
                                            id: "st_gb_mh14_01_04",
                                            titleMr: "१०६ हुतात्म्यांचे बलिदान (Flora Fountain): मोरारजी देसाई यांच्या सरकारने चळवळ दडपण्यासाठी गोळीबाराचे आदेश दिले; २१ नोव्हेंबर १९५५ रोजी फ्लोरा फाउंटन येथे पोलिसांच्या गोळीबारात १५ जण ठार झाले; १६ ते २२ जानेवारी १९५६ या काळात मुंबईत झालेल्या गोळीबारात एकूण १०६ आंदोलक हुतात्मा झाले; मुंबई महानगरपालिकेने आचार्य अत्र्यांच्या पुढाकाराने 'मुंबईसह महाराष्ट्र' ठराव मंजूर केला; हुतात्मा चौक स्मारकाची उभारणी",
                                            titleEn: "Sacrifice of 106 Martyrs: Brutal police firing ordered by Morarji Desai's administration; 15 killed on 21 Nov 1955 at Flora Fountain; 106 peaceful agitators martyred in firing between 16-22 Jan 1956 across Bombay; Commemorated at Hutatma Chowk memorial",
                                            chips: ["१०६ हुतात्मे", "फ्लोरा फाउंटन गोळीबार (२१ नोव्हें १९५५)", "१६-२२ जानेवारी १९५६ गोळीबार", "हुतात्मा चौक स्मारक मुंबई", "मोरारजी देसाई दडपशाही"]
                                        },
                                        {
                                            id: "st_gb_mh14_01_05",
                                            titleMr: "द्विभाषिक राज्याचा पराभव व १ मे १९६० महाराष्ट्र राज्याची स्थापना: १९५७ च्या सार्वत्रिक निवडणुकीत संयुक्त महाराष्ट्र समितीने काँग्रेसचा दारुण पराभव केला; केंद्र सरकारला नमते घ्यावे लागले; बॉम्बे पुनर्रचना कायदा १९६० संमत; १ मे १९६० (कामगार दिन) रोजी राजभवन येथे पंतप्रधान पं. जवाहरलाल नेहरू यांच्या हस्ते मुंबईसह स्वतंत्र महाराष्ट्र राज्याची स्थापना झाली; महाराष्ट्राचे पहिले मुख्यमंत्री यशवंतराव चव्हाण यांनी 'मंगल कलश' स्वीकारला",
                                            titleEn: "Triumph & Statehood (1 May 1960): Samiti routed Congress in 1957 elections; Centre conceded unilingual demand via Bombay Reorganisation Act 1960; PM Nehru inaugurated unilingual State of Maharashtra with Bombay on 1 May 1960; First CM Yashwantrao Chavan accepted the ceremonial 'Mangal Kalash'",
                                            chips: ["१ मे १९६० महाराष्ट्र राज्य स्थापना", "मुंबईसह संयुक्त महाराष्ट्र", "पहिले मुख्यमंत्री यशवंतराव चव्हाण", "मंगल कलश स्वीकृती", "बॉम्बे पुनर्रचना कायदा १९६०"]
                                        }
                                    ],
                                    sources: [
                                        { book: "कऱ्हेचे पाणी (आत्मचरित्र ५ खंड)", standard: "आचार्य प्र. के. अत्रे", chapterRef: "संयुक्त महाराष्ट्र चळवळ पर्व" },
                                        { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण १९: संयुक्त महाराष्ट्र आंदोलन" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mhist_c15",
                            code: "MH15",
                            section: "F",
                            slug: "post-independence-maharashtra-agrarian-industrial-cultural-growth",
                            nameMr: "स्वातंत्र्योत्तर महाराष्ट्र: कृषी विकास, रोजगार हमी योजना व सहकार चळवळ",
                            nameEn: "Post-Independence Maharashtra: Agrarian Reforms, EGS, Co-operatives & Industrialization",
                            name: "स्वातंत्र्योत्तर महाराष्ट्र विकास (Post-Independence Maharashtra: 1960-1980)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mhist_c15",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mhist_c14",
                            nextChapterId: "gb_mhist_c16",
                            metaDescriptionMr: "स्वातंत्र्योत्तर महाराष्ट्राचे पहिले मुख्यमंत्री यशवंतराव चव्हाण (कृषी-औद्योगिक विकास), वसंतराव नाईक (हरितक्रांती व रोहयो), वि. स. पागे यांची रोजगार हमी योजना (१९७२), आणि सहकारी साखर कारखानदारी व सहकार महर्षी.",
                            metaDescriptionEn: "In-depth review of Post-Independence Maharashtra (1960-1980): Yashwantrao Chavan's vision of agro-industrial society, Vasantrao Naik's record tenure (Green Revolution, 1972 Famine handling), V.S. Page's Employment Guarantee Scheme (EGS), and Cooperative Sugar Factory expansion.",
                            notesJsonPath: "/data/notes/group_b/mains/history/c15_post_independence_mh.json",
                            quizTag: "gb_mhist_post_1960_01",
                            tags: ["Mains History", "Yashwantrao Chavan", "Vasantrao Naik", "EGS VS Page 1972", "Cooperative Sugar Empire", "High-Weightage"],
                            searchKeywords: ["post independence maharashtra development 1960 1980", "yashwantrao chavan modern maharashtra builder agro industrial", "vasantrao naik longest serving chief minister green revolution", "employment guarantee scheme egs 1972 v s page", "cooperative sugar factories western maharashtra vikhe patil", "स्वातंत्र्योत्तर महाराष्ट्र विकास", "यशवंतराव चव्हाण कृषी औद्योगिक समाज", "वसंतराव नाईक हरितक्रांती", "रोजगार हमी योजना १९७२ वि स पागे", "सहकारी साखर कारखानदारी"]
                        },
                        {
                            id: "gb_mhist_c16",
                            code: "MH16",
                            section: "F",
                            slug: "mains-history-master-revision-reformers-matrix-and-pyq-trends",
                            nameMr: "मुख्य इतिहास मास्टर रिव्हिजन: समाजसुधारक मास्टर तक्ता, संस्था व १० वर्षांचे PYQ विश्लेषण",
                            nameEn: "Mains History Master Revision: Reformers Master Matrix, Institutions Index & 10-Year PYQ Trends",
                            name: "इतिहास मास्टर रिव्हिजन (Master Revision: Reformers & PYQs)",
                            category: "REVISION",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mhist_c16",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mhist_c15",
                            nextChapterId: null,
                            metaDescriptionMr: "महाराष्ट्रातील सर्व समाजसुधारकांचा तुलनात्मक मास्टर तक्ता (सुधारक, संस्था, वृत्तपत्रे, ग्रंथ, स्थापना वर्षे), मुख्य परीक्षा पेपर २ मधील १०-१२ प्रश्नांचे अचूक नियोजन, आणि २०१२ ते २०२५ मधील MPSC मुख्य परीक्षा PYQ विश्लेषण.",
                            metaDescriptionEn: "Master consolidation module: Comparative Master Matrix of Maharashtra Social Reformers (Thinker, Organization, Periodicals, Books, Foundation dates), 10-12 Questions Target Strategy for Mains Paper 2, and 10-year MPSC Group B Mains historical trend analysis.",
                            notesJsonPath: "/data/notes/group_b/mains/history/c16_master_revision.json",
                            quizTag: "gb_mhist_revision_01",
                            tags: ["Revision", "Mains Paper 2 Strategy", "Reformers Master Table", "Institutions Timeline", "PYQ Trends 2012 to 2025", "High-Weightage"],
                            searchKeywords: ["mpsc group b mains history 10 questions strategy", "maharashtra social reformers comparative master table", "institutions newspapers books timeline history", "mpsc mains history pyq trend analysis 2012 to 2025", "multi statement history questions elimination", "इतिहास मास्टर रिव्हिजन", "समाजसुधारक मास्टर तक्ता", "संस्था व वृत्तपत्रे कालरेषा", "१० वर्षांचे PYQ विश्लेषण"]
                        }
                    ]
                },


                {
                    id: "gb_mains_geography",
                    code: "M_GEOG",
                    slug: "geography-of-india-maharashtra-and-environment-mains",
                    nameMr: "भारताचा व महाराष्ट्राचा भूगोल आणि पर्यावरण भूगोल",
                    nameEn: "Geography of India & Maharashtra with Environmental Geography (Mains)",
                    name: "भूगोल व पर्यावरण (Mains Geography & Environment)",
                    officialScope: "Physical, Economic, Social and Environmental Geography of Maharashtra and India: Geomorphology, Monsoon & Drought Dynamics, River Basin Water Disputes & Watershed Management, Forest & Wildlife Ecology (Western Ghats Gadgil/Kasturirangan reports), Mineral & Power Infrastructure, Urbanization & Migration Patterns, and Basics of Remote Sensing (GIS/GPS) for MPSC Group B Mains Paper 2",
                    version: "1.0",
                    verifiedDate: "2026-10-28",
                    notesJsonBaseDir: "/data/notes/group_b/mains/geography/",


                    // UI Theme & Theming Metadata
                    theme: {
                        primaryColor: "#047857",        // Forest Green / Environmental Ecology Theme
                        bgColor: "#ecfdf5",
                        iconClass: "ri-landscape-line"
                    },


                    // अभ्यास व डॅशबोर्ड ॲनालिटिक्स मेट्रिक्स
                    metrics: {
                        totalChapters: 16,
                        totalEstimatedHours: 52,
                        avgQuestionsInMains: 11,
                        targetMarks: 22,
                        weightageRange: "10-12 Questions / 20-24 Marks"
                    },


                    // विषय पातळीवरील स्मार्ट टॅग्ज
                    subjectTags: [
                        "Core-Mains",
                        "Mains-Paper-2",
                        "Environment-Ecology",
                        "Maharashtra-Dominant",
                        "Map-Based-Analytical",
                        "Remote-Sensing-Intro"
                    ],


                    filterCategory: "GS",
                    searchKeywords: [
                        "mpsc group b mains geography syllabus", "maharashtra physical geomorphology basalt deccan trap",
                        "environmental geography western ghats madhav gadgil kasturirangan report",
                        "inter state water disputes krishna godavari tribunals", "remote sensing gis gps basics mpsc",
                        "watershed management jalyukt shivar 2 0", "census 2011 urbanization migration maharashtra",
                        "भूगोल मुख्य परीक्षा", "महाराष्ट्राची भूरचना बेसाल्ट", "पर्यावरण भूगोल पश्चिम घाट गाडगीळ समिती", "नदी खोरे जलविवाद", "रिमोट सेन्सिंग GIS GPS", "जलयुक्त शिवार जलसंधारण", "नागरीकरण व स्थलांतर"
                    ],


                    referenceSources: [
                        {
                            name: "MPSC Non-Gazetted Group B Combined Mains Syllabus",
                            role: "अधिकृत परीक्षा-संदर्भ",
                            url: "https://mpsc.gov.in"
                        },
                        {
                            name: "द मेगा स्टेट महाराष्ट्र - ए. बी. सवदी",
                            role: "महाराष्ट्राचा सखोल भूगोल, नकाशे व आकडेवारी"
                        },
                        {
                            name: "महाराष्ट्राचा भूगोल - प्रा. अनिरुद्ध / दीपस्तंभ",
                            role: "प्राकृतिक, आर्थिक व मानवी भूगोल संकल्पना"
                        },
                        {
                            name: "पर्यावरण व परिस्थितीकी - तुषार घोरपडे / युनिक अकॅडमी",
                            role: "पर्यावरण भूगोल, जैवविविधता व समित्यांचा अभ्यास"
                        },
                        {
                            name: "NCERT Class 11 & 12 Geography (Physical & Human)",
                            role: "राष्ट्रीय भूरूपशास्त्र, हवामान व सुदूर संवेदन (Remote Sensing)"
                        }
                    ],


                    chapters: [
                        // =========================================================================
                        // विभाग A — भूरूपशास्त्र, दख्खन ट्रॅप व प्राकृतिक रचना (Geomorphology)
                        // =========================================================================
                        {
                            id: "gb_mgeog_c01",
                            code: "MG01",
                            section: "A",
                            slug: "geomorphology-deccan-traps-and-maharashtra-landforms",
                            nameMr: "भूरूपशास्त्र: दख्खन ट्रॅप (बेसाल्ट खडक), ज्वालामुखी उद्रेक व महाराष्ट्राची प्राकृतिक रचना",
                            nameEn: "Geomorphology: Deccan Traps Formation, Basalt Volcanism & Maharashtra Landforms",
                            name: "भूरूपशास्त्र व दख्खन ट्रॅप (Geomorphology & Deccan Traps)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mgeog_c01",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: null,
                            nextChapterId: "gb_mgeog_c02",
                            metaDescriptionMr: "दख्खन ट्रॅपची निर्मिती (क्रेतेशियस कालखंड, २९ भेगी उद्रेक, अल्कली बेसाल्ट), पश्चिम घाटाचा प्रस्तरभंग (Fault Scarp), महाराष्ट्रातील भूकंपाचे क्षेत्र (कोयना भूकंप १९६७, लातूर किल्लारी १९९३), आणि पठारी भूरूपे.",
                            metaDescriptionEn: "In-depth review of Geomorphology: Cretaceous volcanism, 29 fissure lava eruptions forming Deccan Traps, Western Ghats fault-scarp genesis, Seismic zonation of Maharashtra (Zone III & IV: Koyna 1967, Latur Killari 1993), and Plateau landforms.",
                            notesJsonPath: "/data/notes/group_b/mains/geography/c01_geomorphology_deccan_traps.json",
                            quizTag: "gb_mgeog_geomorp_01",
                            tags: ["Mains Geography", "Geomorphology", "Deccan Traps Basalt", "Fissure Eruption", "Seismic Zones Koyna Killari", "Western Ghats Fault", "High-Weightage"],
                            searchKeywords: ["deccan traps basalt formation cretaceous period fissure eruption", "western ghats escarpment block mountain faulting", "seismic zones of maharashtra koyna 1967 killari latur 1993", "rock systems of maharashtra archaean gondwana dharwar", "भूरूपशास्त्र दख्खन ट्रॅप", "भेगी ज्वालामुखी उद्रेक बेसाल्ट खडक", "सह्याद्री प्रस्तरभंग", "महाराष्ट्र भूकंप क्षेत्र कोयना किल्लारी", "खडक प्रणाली आर्कियन धारवाड गोंडवाना"],
                            topics: [
                                {
                                    id: "top_gb_mg01_01",
                                    nameMr: "दख्खन लाव्हा प्रवाह, खडक प्रणाली, सह्याद्रीची निर्मिती आणि भूकंप प्रवण क्षेत्रे",
                                    nameEn: "Lava Stratigraphy, Lithological Formations, Escarpment Genesis & Seismotectonics",
                                    subtopics: [
                                        {
                                            id: "st_gb_mg01_01_01",
                                            titleMr: "दख्खन ट्रॅपची निर्मिती व लाव्हा स्तररचना: सुमारे ६.५ कोटी वर्षांपूर्वी (क्रेतेशियस कालखंड); रियुनियन हॉटस्पॉटवरून (Reunion Hotspot) भारतीय प्लेट सरकताना भूगर्भातील भेगांमधून (Fissure Eruptions) २९ वेळा लाव्हाचे शांत उद्रेक झाले; पायऱ्यांसारखी रचना (Deccan Trap: 'Trap' म्हणजे पायरी); बेसाल्ट खडकाची जाडी पश्चिमेकडे (मुंबई-महाबळेश्वर २ ते ३ किमी) सर्वाधिक असून पूर्वेकडे नागपूरकडे कमी होत जाते; महाराष्ट्राचा ८५-९०% भूभाग बेसाल्टने व्यापला आहे",
                                            titleEn: "Deccan Traps Genesis: Formed ~65 million years ago (Cretaceous era) via Reunion Hotspot plume activity; 29 episodic fissure eruptions of basic basalt lava; Step-like trappean topography ('Trappa' = stairs); Thickness varies from 2-3 km in west (Mumbai/Mahabaleshwar) tapering eastwards; Covers 85-90% of Maharashtra",
                                            chips: ["दख्खन ट्रॅप (क्रेतेशियस काळ)", "२९ भेगी उद्रेक", "रियुनियन हॉटस्पॉट", "पायऱ्यांसारखी रचना (Deccan Trap)", "बेसाल्ट पश्चिमेस जाड"]
                                        },
                                        {
                                            id: "st_gb_mg01_01_02",
                                            titleMr: "महाराष्ट्रातील प्राचीन खडक प्रणाली: १) आर्कियन खडक (सर्वात प्राचीन रूपांतरित खडक - पूर्व विदर्भ: गडचिरोली, भंडारा व दक्षिण कोकण: सावंतवाडी - लोह व मँगनीजयुक्त); २) धारवाड खडक (साकोली व सौसर मालिका - नागपूर, भंडारा); ३) गोंडवाना खडक (दगडी कोळसा साठे - वर्धा, वैनगंगा व कान्हान खोरे - बल्लारपूर, वणी); ४) विंध्यन व कुडप्पा खडक (चुनखडक साठे - यवतमाळ); ५) जांभा खडक (अति-पावसाचा पट्टा - दक्षिण कोकण)",
                                            titleEn: "Non-Basaltic Rock Systems in Maharashtra: Archaean Metamorphic (Oldest rocks in Gadchiroli, Sindhudurg with Iron/Manganese); Dharwar System (Sausar & Sakoli series); Gondwana System (Coal bearing strata in Wardha-Wainganga basins); Vindhyan/Cuddapah (Limestone in Yavatmal); Laterite in South Konkan",
                                            chips: ["आर्कियन खडक (गडचिरोली, सावंतवाडी)", "धारवाड मालिका (नागपूर, भंडारा)", "गोंडवाना खडक (कोळसा साठे)", "जांभा खडक (कोकण)"]
                                        },
                                        {
                                            id: "st_gb_mg01_01_03",
                                            titleMr: "सह्याद्रीची निर्मिती व पश्चिमेकडील प्रस्तरभंग (Fault Scarp): सह्याद्री हा घडीचा पर्वत नसून 'अवशिष्ट / प्रस्तरभंग कडा' (Block Mountain / Fault Scarp) आहे; अरबी समुद्राकडील भूभाग खचल्याने (Faulting) पश्चिमेकडे तीव्र कडा निर्माण झाला व नद्या वेगाने पश्चिमेकडे वाहू लागल्या; पूर्व उतार मंद असून त्यावर विस्तृत नदी खोरी निर्माण झाली आहेत",
                                            titleEn: "Western Ghats Orogeny & Escarpment: Sahyadri is not a fold mountain, but an elevated fault-scarp formed by the subsidence of the Arabian Sea landmass; Steep western slope (scarp) contrasted with gentle eastward plateau slope",
                                            chips: ["सह्याद्री (प्रस्तरभंग कडा Fault Scarp)", "अरबी समुद्र खचणे", "पश्चिम उतार तीव्र", "पूर्व उतार मंद"]
                                        },
                                        {
                                            id: "st_gb_mg01_01_04",
                                            titleMr: "महाराष्ट्रातील भूकंप प्रवण क्षेत्रे व टेक्टॉनिक्स: भारतीय मानक ब्युरो (BIS) नुसार महाराष्ट्राचा समावेश भूकंप झोन II, III व IV मध्ये होतो; प्रमुख भूकंप प्रवण क्षेत्रे: १) कोयना भूकंप (११ डिसेंबर १९६७ - ६.५ रिश्टर स्केल - धरण प्रेरित भूकंप Reservoir Induced Seismicity); २) किल्लारी-लातूर भूकंप (३० सप्टेंबर १९९३ - ६.२ रिश्टर स्केल - इंट्रा-प्लेट भूकंप Intraplate Faulting); ३) कोकण व पश्चिम घाट पट्टा (झोन IV)",
                                            titleEn: "Seismotectonics of Maharashtra: BIS classifies MH into Seismic Zones II, III & IV; Landmark events: Koyna Earthquake (11 Dec 1967, 6.5 Richter - Reservoir Induced Seismicity RIS); Killari-Latur Earthquake (30 Sept 1993, 6.2 Richter - Intraplate fault reactivation); Western coastal belt in Zone IV",
                                            chips: ["भूकंप झोन III व IV", "कोयना भूकंप १९६७ (धरण प्रेरित RIS)", "किल्लारी-लातूर भूकंप १९९३ (६.२ रिश्टर)", "इंट्रा-प्लेट फॉल्ट"]
                                        }
                                    ],
                                    sources: [
                                        { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण १ व २: भूगर्भीय रचना व प्राकृतिक विभाग" },
                                        { book: "महाराष्ट्राचा भूगोल", standard: "प्रा. अनिरुद्ध", chapterRef: "प्रकरण १: खडक प्रणाली व भूरचना" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mgeog_c02",
                            code: "MG02",
                            section: "A",
                            slug: "climate-dynamics-monsoon-variability-and-drought-in-maharashtra",
                            nameMr: "हवामान गतिशास्त्र: मान्सून अनिश्चितता, अल निनो, अवर्षण पट्टा व हवामान बदल",
                            nameEn: "Climate Dynamics: Monsoon Vulnerability, ENSO Impacts & Drought Management in Maharashtra",
                            name: "हवामान गतिशास्त्र व दुष्काळ (Climate Dynamics & Droughts)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mgeog_c02",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mgeog_c01",
                            nextChapterId: "gb_mgeog_c03",
                            metaDescriptionMr: "महाराष्ट्रातील मान्सूनचे वितरण, अल निनो (El-Nino) व इंडियन ओशन डायपोल (IOD) चा प्रभाव, अवर्षणप्रवण क्षेत्र कार्यक्रम (DPAP), पर्जन्यछायेतील तालुके (सुके), आणि हवामान बदलाचा (Climate Change) शेतीवरील परिणाम.",
                            metaDescriptionEn: "In-depth review of Climate Dynamics: Spatial rainfall variability, ENSO (El Nino / La Nina) and IOD correlation with monsoon failure, Drought Prone Areas Programme (DPAP), Rain-shadow core talukas in Maharashtra, and Climate Change mitigation.",
                            notesJsonPath: "/data/notes/group_b/mains/geography/c02_climate_droughts.json",
                            quizTag: "gb_mgeog_climate_01",
                            tags: ["Mains Geography", "Climate Dynamics", "Monsoon Vulnerability", "El Nino La Nina IOD", "Drought Prone Belt DPAP", "Climate Change Mitigation", "High-Weightage"],
                            searchKeywords: ["maharashtra monsoon variability el nino enso impact", "indian ocean dipole iod positive negative", "drought prone areas programme dpap maharashtra rain shadow", "sukhi talukas ahmednagar solapur sangli beed dharashiv", "climate change impact on kharif agriculture maharashtra", "हवामान गतिशास्त्र मान्सून", "अल निनो व ला निना प्रभाव", "पर्जन्यछायेचा पट्टा DPAP", "अवर्षणग्रस्त तालुके सोलापूर नगर", "हवामान बदल शेती परिणाम"],
                            topics: [
                                {
                                    id: "top_gb_mg02_01",
                                    nameMr: "मान्सूनची तफावत, अल-निनोचे परिणाम, अवर्षण पट्टा आणि दुष्काळ निवारण नीती",
                                    nameEn: "Precipitation Skew, Teleconnections (ENSO/IOD), Aridity Core & Drought Adaptation",
                                    subtopics: [
                                        {
                                            id: "st_gb_mg02_01_01",
                                            titleMr: "मान्सूनची प्रादेशिक तफावत व विसंगती: कोकणात ३,००० मिमी पाऊस, तर अवर्षण पट्ट्यात ५०० मिमी पेक्षा कमी पाऊस; मान्सूनचे खंड (Monsoon Breaks); परतीचा मान्सून (Retreating Monsoon - ऑक्टोबर-नोव्हेंबरमध्ये वादळी पावसाचा प्रभाव); हवामान बदल आणि गारपीट (Hailstorms - मराठवाडा व विदर्भातील पिकांचे नुकसान)",
                                            titleEn: "Precipitation Skew & Extreme Events: Steep gradient from Konkan (3000+ mm) to rain-shadow core (<500 mm); Monsoon breaks; Unseasonal rains and severe hailstorms in Marathwada & Vidarbha driven by climate change",
                                            chips: ["पर्जन्य तफावत (३००० मिमी vs ५०० मिमी)", "मान्सूनचे खंड (Monsoon Breaks)", "गारपीट (Hailstorms विदर्भ-मराठवाडा)", "परतीचा पाऊस"]
                                        },
                                        {
                                            id: "st_gb_mg02_01_02",
                                            titleMr: "अल निनो (El-Nino), ला निना आणि IOD चा महाराष्ट्रावर प्रभाव: १) अल निनो (प्रशांत महासागराचे पाणी अस्वाभाविक तापणे - भारतात व महाराष्ट्रात दुष्काळाची दाट शक्यता); २) ला निना (पाणी थंड होणे - मुसळधार पाऊस व पूर); ३) धन (Positive) इंडियन ओशन डायपोल (IOD - अरबी समुद्रातील अनुकूल तापमान मान्सूनला बळकट करते); जागतिक हवामान संबंध (Teleconnections)",
                                            titleEn: "Teleconnections (ENSO & IOD): El Nino (Pacific warming causing monsoon deficit and severe droughts in Maharashtra); La Nina (Excess precipitation and flood hazards); Positive IOD (Arabian Sea warming neutralizing El Nino impacts)",
                                            chips: ["अल निनो (दुष्काळ शक्यता)", "ला निना (अतिवृष्टी)", "Positive IOD (अनुकूल मान्सून)", "ग्लोबल टेलिकनेक्शन्स"]
                                        },
                                        {
                                            id: "st_gb_mg02_01_03",
                                            titleMr: "महाराष्ट्रातील अवर्षण प्रवण क्षेत्र कार्यक्रम (DPAP) व दुष्काळी पट्टा: सह्याद्रीच्या पूर्वेकडील ५० ते ७० किमी रुंद पट्टा; अहमदनगर, सोलापूर, सांगलीचा पूर्व भाग, साताराचा पूर्व भाग, बीड, धाराशिव (उस्मानाबाद) या जिल्ह्यांमधील तालुके; कोरडवाहू शेतीची आव्हाने; जनावरांचे छावण्या व टँकरने पाणी पुरवठा",
                                            titleEn: "Drought Prone Areas Programme (DPAP) & Rain-Shadow Core: 50-70 km leeward belt; Core districts: Ahmednagar, Solapur, Eastern Sangli, Eastern Satara, Beed, Dharashiv; Dryland farming vulnerabilities and tanker economies",
                                            chips: ["अवर्षण पट्टा DPAP", "सोलापूर, नगर, बीड, धाराशिव", "कोरडवाहू शेती", "टँकरग्रस्त तालुके"]
                                        }
                                    ],
                                    sources: [
                                        { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण ४: हवामान व अवर्षण" },
                                        { book: "पर्यावरण व परिस्थितीकी", standard: "तुषार घोरपडे", chapterRef: "हवामान बदल व मान्सून" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग B — जलसंपदा, आंतरराज्य नदी जलविवाद व जलसंधारण (Hydrology & Water Disputes)
                        // =========================================================================
                        {
                            id: "gb_mgeog_c03",
                            code: "MG03",
                            section: "B",
                            slug: "inter-state-river-water-disputes-and-tribunals-maharashtra",
                            nameMr: "आंतरराज्य नदी जलविवाद लवादाचे निवाडे: कृष्णा व गोदावरी पाणी वाटप",
                            nameEn: "Inter-State River Water Disputes: Krishna & Godavari Tribunals (KWDT & GWDT)",
                            name: "नदी जलविवाद व लवादाचे निवाडे (Inter-State River Water Tribunals)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mgeog_c03",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mgeog_c02",
                            nextChapterId: "gb_mgeog_c04",
                            metaDescriptionMr: "आंतरराज्य नदी जलविवाद कायदा १९५६, कृष्णा जलविवाद लवाद १ व २ (KWDT - न्या. बचावत व न्या. ब्रिजेश कुमार निवाडा), गोदावरी जलविवाद लवाद (GWDT), अलमट्टी धरण वाद (कर्नाटक), आणि महाराष्ट्राचा पाणी वाटा.",
                            metaDescriptionEn: "In-depth review of Inter-State River Water Disputes (IRWD Act 1956): Krishna Water Disputes Tribunals (KWDT-I Bachawat Award & KWDT-II Brijesh Kumar Award), Godavari Tribunal (GWDT), Almatti Dam dispute with Karnataka, and Maharashtra's allocated quota in TMC.",
                            notesJsonPath: "/data/notes/group_b/mains/geography/c03_water_disputes_tribunals.json",
                            quizTag: "gb_mgeog_disputes_01",
                            tags: ["Mains Geography", "Inter-State Water Disputes", "Krishna Water Tribunal KWDT", "Bachawat Award", "Godavari Tribunal GWDT", "Almatti Dam Height", "High-Weightage"],
                            searchKeywords: ["krishna water disputes tribunal kwdt bachawat award brijesh kumar", "godavari water disputes tribunal gwdt bachawat award", "almatti dam height dispute maharashtra karnataka flood", "inter state river water disputes act 1956 article 262", "tmc water allocation maharashtra", "कृष्णा जलविवाद लवाद बचावत निवाडा", "बृजेश कुमार लवाद", "गोदावरी जलविवाद लवाद GWDT", "अलमट्टी धरण उंची वाद", "TMC पाणी वाटप महाराष्ट्र"],
                            topics: [
                                {
                                    id: "top_gb_mg03_01",
                                    nameMr: "आंतरराज्य जलविवाद कायदा, कृष्णा-गोदावरी लवादाचे निवाडे आणि अलमट्टी धरण वाद",
                                    nameEn: "Statutory Tribunal Mechanism, Bachawat/Brijesh Allocations & Almatti Dam Hydropolitics",
                                    subtopics: [
                                        {
                                            id: "st_gb_mg03_01_01",
                                            titleMr: "आंतरराज्य नदी जलविवाद कायदा, १९५६ (कलम २६२): संविधानातील कलम २६२ नुसार संसदेने हा कायदा केला; दोन किंवा अधिक राज्यांमधील नदी पाणी वाटपाच्या तंट्यासाठी केंद्र सरकार 'लवाद' (Tribunal) स्थापन करते; लवादाचा निर्णय सर्वोच्च न्यायालयाच्या हुकूमनाम्याइतका बंधनकारक असतो; सर्वोच्च किंवा इतर न्यायालयांना थेट हस्तक्षेपास मनाई",
                                            titleEn: "Inter-State River Water Disputes Act 1956 (Art 262): Enacted to adjudicate river conflicts between states via Tribunals; Award has the force of an order/decree of the Supreme Court; Civil courts barred from jurisdiction",
                                            chips: ["जलविवाद कायदा १९५६", "कलम २६२ न्यायाधिकरण", "लवादाचा निर्णय बंधनकारक", "न्यायालयांना मनाई"]
                                        },
                                        {
                                            id: "st_gb_mg03_01_02",
                                            titleMr: "कृष्णा जलविवाद लवाद (KWDT): १) KWDT-I (बचावत लवाद १९६९ - निकाल १९७६): ७५% विश्वासार्हतेवर २०६० TMC पाणी वाटप (महाराष्ट्राला ५६० TMC, कर्नाटकाला ७०० TMC, आंध्र प्रदेशला ८०० TMC); कोयना जलविद्युतसाठी पश्चिमेकडे ६७ TMC पाणी वळवण्यास मान्यता; २) KWDT-II (न्या. ब्रिजेश कुमार लवाद २००४ - निकाल २०१०): ६५% विश्वासार्हतेवर अतिरिक्त पाणी वाटप (महाराष्ट्राला ८१ TMC अतिरिक्त मंजूर)",
                                            titleEn: "Krishna Water Disputes Tribunals (KWDT): KWDT-I (Bachawat Award 1976: Allocated 2060 TMC at 75% dependability - MH 560 TMC, KA 700 TMC, AP 800 TMC; Approved 67 TMC Koyna west diversion); KWDT-II (Brijesh Kumar Award 2010: Allocated surplus flows at 65% dependability, granting additional 81 TMC to MH)",
                                            chips: ["बचावत लवाद १९७६ (KWDT-I)", "महाराष्ट्राला ५६० TMC वाटा", "कोयना पश्चिमेकडे पाणी वळवणे", "ब्रिजेश कुमार लवाद २०१० (KWDT-II)"]
                                        },
                                        {
                                            id: "st_gb_mg03_01_03",
                                            titleMr: "अलमट्टी धरण वाद (Almatti Dam Dispute): कर्नाटक सरकारने बागलकोट येथे कृष्णा नदीवर बांधलेले अलमट्टी धरण; धरणाची उंची ५१९.६ मीटरवरून ५२४.२५ मीटरपर्यंत वाढवण्याचा कर्नाटकचा प्रयत्न; धरणाची उंची वाढल्यास बॅकवॉटरमुळे (Backwater Effect) महाराष्ट्रातील सांगली व कोल्हापूर जिल्ह्यांत महापूर (Floods) येण्याचा धोका निर्माण होतो; महाराष्ट्राचा या उंची वाढीस सर्वोच्च न्यायालयात तीव्र विरोध",
                                            titleEn: "Almatti Dam Hydropolitics: Built across Krishna in Bagalkot, Karnataka; Dispute over raising Full Reservoir Level (FRL) from 519.6m to 524.25m; Maharashtra objects due to severe backwater submergence and flood inundation in Sangli and Kolhapur districts",
                                            chips: ["अलमट्टी धरण वाद (कर्नाटक)", "धरणाची उंची ५२४.२५ मीटर वाद", "सांगली-कोल्हापूर महापूर धोका", "बॅकवॉटर प्रभाव (Backwater)"]
                                        },
                                        {
                                            id: "st_gb_mg03_01_04",
                                            titleMr: "गोदावरी जलविवाद लवाद (GWDT): न्या. बचावत लवाद (१९६९ मध्ये नियुक्ती, १९८० मध्ये अंतिम निवाडा); महाराष्ट्र, आंध्र प्रदेश, मध्य प्रदेश, कर्नाटक व ओडिसा या ५ राज्यांमध्ये द्विपक्षीय व बहुपक्षीय करारांद्वारे पाणी वाटप; गोदावरी खोऱ्यात महाराष्ट्राला त्याच्या भौगोलिक वाट्यानुसार धरणांसाठी पाणी वापरण्यास मंजुरी (उदा. जायकवाडी, बाभळी बंधारा वाद)",
                                            titleEn: "Godavari Water Disputes Tribunal (GWDT): Chaired by Justice Bachawat (Constituted 1969, Final Award 1980); Water allocated through sub-basin bilateral accords among 5 riparian states (MH, AP, MP, KA, Odisha); Jayakwadi & Babhali Barrage allocations",
                                            chips: ["गोदावरी लवाद १९८० (GWDT)", "५ राज्यांत करार", "जायकवाडी धरण वाटा", "बाभळी बंधारा वाद"]
                                        }
                                    ],
                                    sources: [
                                        { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण ३: जलसंपदा व आंतरराज्य वाद" },
                                        { book: "महाराष्ट्र जलसंपत्ती नियमन प्राधिकरण (MWRRA)", standard: "अधिकृत अहवाल", chapterRef: "कृष्णा व गोदावरी पाणी वाटप" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mgeog_c04",
                            code: "MG04",
                            section: "B",
                            slug: "watershed-management-and-irrigation-projects-in-maharashtra",
                            nameMr: "जलसंधारण, पाणलोट क्षेत्र विकास आणि सिंचन प्रकल्प (जलयुक्त शिवार २.०)",
                            nameEn: "Watershed Management, Irrigation Infrastructure & Water Conservation Programs",
                            name: "जलसंधारण व सिंचन प्रकल्प (Watershed Management & Irrigation)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mgeog_c04",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mgeog_c03",
                            nextChapterId: "gb_mgeog_c05",
                            metaDescriptionMr: "महाराष्ट्रातील सिंचन अनुशेष, ५ पाटबंधारे विकास महामंडळे, जलयुक्त शिवार अभियान २.०, गाळमुक्त धरण व गाळयुक्त शिवार, माथा ते पायथा (Ridge to Valley) पाणलोट उपचार, आणि सूक्ष्म सिंचन.",
                            metaDescriptionEn: "In-depth review of Irrigation & Watershed Development in Maharashtra: 5 Irrigation Development Corporations, Jalyukt Shivar Abhiyan 2.0, Galmukt Dharan Gal-yukt Shivar, Ridge to Valley contour bunding, percolation tanks, and micro-irrigation (Drip/Sprinkler).",
                            notesJsonPath: "/data/notes/group_b/mains/geography/c04_watershed_irrigation.json",
                            quizTag: "gb_mgeog_watershed_01",
                            tags: ["Mains Geography", "Watershed Management", "Jalyukt Shivar 2.0", "Ridge to Valley Concept", "5 Irrigation Corporations", "Galmukt Dharan", "High-Weightage"],
                            searchKeywords: ["watershed management ridge to valley contour bunds cct", "jalyukt shivar abhiyan 2 0 drought free maharashtra", "galmukt dharan galyukt shivar desiltation", "5 irrigation development corporations maharashtra mkvdc gmdc", "micro irrigation drip sprinkler subsidy", "पाणलोट क्षेत्र विकास माथा ते पायथा", "जलयुक्त शिवार अभियान २.०", "गाळमुक्त धरण गाळयुक्त शिवार", "५ पाटबंधारे विकास महामंडळे", "ठिबक सिंचन सबसिडी"],
                            topics: [
                                {
                                    id: "top_gb_mg04_01",
                                    nameMr: "पाणलोट उपचार, जलयुक्त शिवार धोरण, गाळ काढणे आणि ५ पाटबंधारे महामंडळे",
                                    nameEn: "Watershed Engineering (Ridge to Valley), Jalyukt Shivar 2.0, Reservoir Desiltation & Irrigation Corporations",
                                    subtopics: [
                                        {
                                            id: "st_gb_mg04_01_01",
                                            titleMr: "माथा ते पायथा (Ridge to Valley) पाणलोट उपचार तंत्रज्ञान: १) माथ्यावर: सलग समपातळी चर (Continuous Contour Trenches - CCT), दीप समपातळी चर (Deep CCT), वनराई बंधारे; २) उतारावर: दगडी बांध (Loose Boulder Structures), गॅबियन बंधारे; ३) पायथ्याशी: माती नाला बांध, सिमेंट नाला बांध, शेततळे (Farm Ponds) आणि पाझर तलाव; पाणी अडवणे व जिरवणे",
                                            titleEn: "Ridge-to-Valley Watershed Interventions: Top Ridge (Continuous Contour Trenches CCT, Deep CCT, afforestation); Slopes (Loose Boulder, Gabion structures); Valley/Foot (Check dams, Cement nala bunds, Percolation tanks, Farm Ponds) to arrest runoff and maximize groundwater recharge",
                                            chips: ["माथा ते पायथा (Ridge to Valley)", "सलग समपातळी चर (CCT)", "गॅबियन बंधारे", "पाझर तलाव व शेततळे"]
                                        },
                                        {
                                            id: "st_gb_mg04_01_02",
                                            titleMr: "जलयुक्त शिवार अभियान २.०: 'दुष्काळमुक्त महाराष्ट्र' करण्याचे उद्दिष्ट; भूजल पातळीत वाढ करणे, वाहून जाणारे पाणी गावातच अडवणे; पहिल्या टप्प्यानंतर दुसऱ्या टप्प्यात (२.०) सुमारे ५,००० गावांची निवड; लोकसहभागातून जलसंधारण; डीटीपी (Digital Tracking) व जीआयएस मॅपिंग",
                                            titleEn: "Jalyukt Shivar Abhiyan 2.0: Mission for Drought-Free Maharashtra; Groundwater rejuvenation by decentralised water harvesting structures; Phase 2 targets 5,000 vulnerable villages with public participation and GIS monitoring",
                                            chips: ["जलयुक्त शिवार २.०", "दुष्काळमुक्त महाराष्ट्र", "भूजल पातळी वाढवणे", "लोकसहभाग जलसंधारण"]
                                        },
                                        {
                                            id: "st_gb_mg04_01_03",
                                            titleMr: "गाळमुक्त धरण व गाळयुक्त शिवार योजना: लहान-मध्यम तलावांमधील गाळ (Silt) उपसा करून जलाशयांची मूळ साठवण क्षमता पुनर्स्थापित करणे; काढलेला सुपीक गाळ शेतकऱ्यांनी स्वतःच्या खर्चाने शेतात पसरवणे; यामुळे धरणांची पाणी साठवण क्षमता वाढते आणि शेतीची सुपीकता वाढून खतांचा खर्च वाचतो",
                                            titleEn: "Galmukt Dharan, Galyukt Shivar Scheme: Desiltation of small and medium water reservoirs to restore original storage capacity; Farmers transport excavated nutrient-rich fertile silt to farmlands, enhancing crop yield and water security",
                                            chips: ["गाळमुक्त धरण गाळयुक्त शिवार", "तलावातील गाळ उपसा", "साठवण क्षमता पुनर्स्थापना", "शेती सुपीकता वाढ"]
                                        },
                                        {
                                            id: "st_gb_mg04_01_04",
                                            titleMr: "महाराष्ट्रातील ५ पाटबंधारे विकास महामंडळे: सिंचन प्रकल्पांना गती देण्यासाठी स्थापन: १) महाराष्ट्र कृष्णा खोरे विकास महामंडळ (MKVDC, पुणे - १९९६), २) विदर्भ पाटबंधारे विकास महामंडळ (VIDC, नागपूर - १९९७), ३) कोकण पाटबंधारे विकास महामंडळ (KIDC, ठाणे - १९९७), ४) तापी पाटबंधारे विकास महामंडळ (TIDC, जळगाव - १९९७), ५) गोदावरी मराठवाडा पाटबंधारे विकास महामंडळ (GMIDC, छत्रपती संभाजीनगर - १९९८)",
                                            titleEn: "5 Irrigation Development Corporations in Maharashtra: Established to expedite stalled projects: 1) MKVDC Pune (Krishna, 1996), 2) VIDC Nagpur (Vidarbha, 1997), 3) KIDC Thane (Konkan, 1997), 4) TIDC Jalgaon (Tapi, 1997), 5) GMIDC Chhatrapati Sambhajinagar (Godavari Marathwada, 1998)",
                                            chips: ["५ पाटबंधारे महामंडळे", "MKVDC पुणे (कृष्णा १९९६)", "VIDC नागपूर (विदर्भ १९९७)", "GMIDC छत्रपती संभाजीनगर (गोदावरी १९९८)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण ५: जलसंधारण व सिंचन व्यवस्था" },
                                        { book: "मृद व जलसंधारण विभाग शासन निर्णय", standard: "महाराष्ट्र शासन", chapterRef: "जलयुक्त शिवार २.० मार्गदर्शक सूचना" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग C — पर्यावरण भूगोल, जैवविविधता व पश्चिम घाट अहवाल (Environmental Geography)
                        // =========================================================================
                        {
                            id: "gb_mgeog_c05",
                            code: "MG05",
                            section: "C",
                            slug: "western-ghats-ecology-gadgil-and-kasturirangan-reports",
                            nameMr: "पश्चिम घाट पर्यावरण संवर्धन: माधव गाडगीळ व कस्तुरीरंगन समिती अहवाल",
                            nameEn: "Western Ghats Ecology: Madhav Gadgil (WGEEP) vs Kasturirangan (HLWG) Reports",
                            name: "पश्चिम घाट संवर्धन अहवाल (Western Ghats: Gadgil vs Kasturirangan)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 5,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mgeog_c05",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mgeog_c04",
                            nextChapterId: "gb_mgeog_c06",
                            metaDescriptionMr: "पश्चिम घाट जैवविविधता हॉटस्पॉट, माधव गाडगीळ समिती अहवाल २०११ (WGEEP - संपूर्ण पश्चिम घाट पर्यावरण संवेदनशील घोषित, ३ झोन ESZ 1, 2, 3), डॉ. के. कस्तुरीरंगन समिती २०१३ (HLWG - ३७% क्षेत्र संवेदनशील), आणि महाराष्ट्रातील वाद.",
                            metaDescriptionEn: "In-depth review of Western Ghats Ecology: World Biodiversity Hotspot, Western Ghats Ecology Expert Panel (WGEEP 2011 Madhav Gadgil - whole Western Ghats as Ecologically Sensitive Area ESA with 3 zones), High Level Working Group (HLWG 2013 Kasturirangan - only 37% area as ESA, red-category bans), and state objections.",
                            notesJsonPath: "/data/notes/group_b/mains/geography/c05_western_ghats_reports.json",
                            quizTag: "gb_mgeog_ghats_01",
                            tags: ["Environmental Geography", "Western Ghats Biodiversity Hotspot", "Madhav Gadgil Committee WGEEP", "Kasturirangan Committee HLWG", "Ecologically Sensitive Area ESA", "High-Weightage"],
                            searchKeywords: ["western ghats ecology expert panel wgeep madhav gadgil 2011", "high level working group hlwg k kasturirangan report 2013", "ecologically sensitive area esa 37 percent vs whole ghats", "esz 1 esz 2 esz 3 zoning gadgil", "mining quarrying thermal power ban western ghats", "माधव गाडगीळ समिती अहवाल २०११ WGEEP", "कस्तुरीरंगन समिती २०१३ HLWG", "पश्चिम घाट पर्यावरण संवेदनशील क्षेत्र ESA", "खाणकाम व औष्णिक ऊर्जा प्रकल्प बंदी", "ESZ झोनिंग"],
                            topics: [
                                {
                                    id: "top_gb_mg05_01",
                                    nameMr: "पश्चिम घाट जैवविविधता मूल्य, गाडगीळ समितीच्या शिफारशी, कस्तुरीरंगन अहवाल आणि संघर्ष",
                                    nameEn: "Ghats Hotspot Ecology, WGEEP Radical Conservation, HLWG Pragmatism & State Conflicts",
                                    subtopics: [
                                        {
                                            id: "st_gb_mg05_01_01",
                                            titleMr: "पश्चिम घाट जागतिक वारसा व पर्यावरणीय महत्त्व: जगातील ८ अति-संवेदनशील जैवविविधता हॉटस्पॉट्सपैकी (Biodiversity Hotspots) एक; २०१२ मध्ये युनेस्कोकडून (UNESCO) जागतिक नैसर्गिक वारसा स्थळ दर्जा (महाराष्ट्रातील कास पठार, चांदोली, कोयना समाविष्ट); ६ राज्यांमध्ये विस्तार (गुजरात, महाराष्ट्र, गोवा, कर्नाटक, तामिळनाडू, केरळ); १,६०० किमी लांबी; नद्यांचे उगमस्थान व मौल्यवान प्रजातींचे वसतिस्थान",
                                            titleEn: "Western Ghats Hotspot Significance: One of the world's 8 'Hottest Hotspots' of biodiversity; UNESCO World Heritage Site (2012, includes Kaas Plateau, Chandoli, Koyna in MH); Spans 1,600 km across 6 states (GJ, MH, GA, KA, TN, KL); Water tower of peninsular India",
                                            chips: ["जैवविविधता हॉटस्पॉट (Hotspot)", "UNESCO वारसा स्थळ २०१२ (कास पठार)", "६ राज्यांमध्ये विस्तार", "द्वीपकल्पीय नद्यांचे उगमस्थान"]
                                        },
                                        {
                                            id: "st_gb_mg05_01_02",
                                            titleMr: "माधव गाडगीळ समिती अहवाल (WGEEP २०११): पर्यावरण मंत्रालयाने २०१० मध्ये नेमलेली समिती; प्रमुख शिफारशी: १) संपूर्ण पश्चिम घाट (१००% क्षेत्र) 'पर्यावरण संवेदनशील क्षेत्र' (ESA) म्हणून घोषित करावा; २) संवेदनशीलतेनुसार ३ झोन: ESZ-1 (सर्वोच्च संरक्षण - खाणकाम, धरणे, रासायनिक कारखाने पूर्ण बंदी), ESZ-2 आणि ESZ-3; ३) 'पश्चिम घाट पर्यावरण प्राधिकरण' (WGEA) स्थापन करावे; ४) तळागाळातील ग्रामपंचायतींना अधिक अधिकार द्यावे; सर्व ६ राज्यांनी हा अहवाल अति-कडक म्हणून फेटाळला",
                                            titleEn: "Madhav Gadgil Panel (WGEEP 2011): Recommended entire Western Ghats (100%) be designated Ecologically Sensitive Area (ESA); Graded into 3 zones (ESZ-1 highest protection, ban on mining/quarrying/thermal plants/large dams; ESZ-2 & ESZ-3); Statutory Western Ghats Ecology Authority; Rejected by states as anti-development",
                                            chips: ["माधव गाडगीळ समिती २०११ (WGEEP)", "संपूर्ण घाट ESA घोषित शिफारस", "ESZ-1, ESZ-2, ESZ-3 झोन", "खाणकाम व मोठे धरणे पूर्ण बंदी"]
                                        },
                                        {
                                            id: "st_gb_mg05_01_03",
                                            titleMr: "डॉ. के. कस्तुरीरंगन समिती अहवाल (HLWG २०१३): गाडगीळ अहवालाचा फेरविचार करण्यासाठी उच्चस्तरीय समिती; प्रमुख शिफारशी: १) संपूर्ण पश्चिम घाट नव्हे, तर केवळ ३७% नैसर्गिक भूभाग 'पर्यावरण संवेदनशील क्षेत्र' (ESA - सुमारे ६०,००० चौ.किमी) घोषित करावा; २) उर्वरित ६३% क्षेत्र मानवनिर्मित वसाहती व शेती असल्याने विकासासाठी खुले ठेवावे; ३) ESA मध्ये खाणकाम, दगडखाणी, औष्णिक वीज प्रकल्प आणि लाल श्रेणीतील (Red Category) प्रदूषणकारी उद्योगांवर पूर्ण बंदी; महाराष्ट्रातील गावे वगळण्याची मागणी",
                                            titleEn: "Dr. K. Kasturirangan Working Group (HLWG 2013): Pragmatic dilution of Gadgil report; Designated only 37% of Western Ghats as Ecologically Sensitive Area (~60,000 sq km); Excluded 63% cultural/agricultural landscapes; Complete ban on mining, quarrying, thermal plants, and Red Category polluting industries in ESA",
                                            chips: ["कस्तुरीरंगन समिती २०१३ (HLWG)", "केवळ ३७% क्षेत्र ESA घोषित", "६३% क्षेत्र विकासासाठी मोकळे", "रेड कॅटेगरी उद्योग बंदी", "गावे वगळण्याची मागणी"]
                                        }
                                    ],
                                    sources: [
                                        { book: "पर्यावरण व परिस्थितीकी", standard: "तुषार घोरपडे", chapterRef: "प्रकरण ५: पश्चिम घाट संवर्धन अहवाल" },
                                        { book: "MoEFCC Reports", standard: "Government of India", chapterRef: "WGEEP (2011) & HLWG (2013) Summary" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mgeog_c06",
                            code: "MG06",
                            section: "C",
                            slug: "biodiversity-conservation-protected-areas-and-forest-policy",
                            nameMr: "जैवविविधता संवर्धन, संरक्षित क्षेत्र जाळे आणि राष्ट्रीय वनधोरण",
                            nameEn: "Biodiversity Conservation: In-situ/Ex-situ, Protected Area Network & Forest Policy",
                            name: "जैवविविधता व वन संवर्धन (Biodiversity & Protected Areas)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mgeog_c06",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mgeog_c05",
                            nextChapterId: "gb_mgeog_c07",
                            metaDescriptionMr: "स्व-स्थाने संवर्धन (In-situ: राष्ट्रीय उद्याने, अभयारण्ये, बायोस्फीअर रिझर्व्ह) विरुद्ध पर-स्थाने संवर्धन (Ex-situ: प्राणीसंग्रहालय, बीज बँका), राष्ट्रीय वनधोरण १९८८ (३३% वनाच्छादन लक्ष्य), ISFR अहवाल, आणि महाराष्ट्रातील देवराया (Sacred Groves).",
                            metaDescriptionEn: "In-depth review of Conservation Biology: In-situ (National Parks, Wildlife Sanctuaries, Biosphere Reserves) vs Ex-situ (Zoos, Botanical Gardens, Seed Banks, Cryopreservation), National Forest Policy 1988 (33% forest target), ISFR Forest Survey, and Maharashtra's Sacred Groves (Devrais).",
                            notesJsonPath: "/data/notes/group_b/mains/geography/c06_biodiversity_conservation.json",
                            quizTag: "gb_mgeog_biodiv_01",
                            tags: ["Environmental Geography", "In-situ Ex-situ Conservation", "National Forest Policy 1988 33 Percent", "ISFR Forest Cover", "Biosphere Reserves", "Devrai Sacred Groves", "High-Weightage"],
                            searchKeywords: ["biodiversity conservation in-situ ex-situ differences", "biosphere reserves core buffer transition zones", "national forest policy 1988 33 percent target plains hills", "india state of forest report isfr maharashtra tree cover", "sacred groves devraies of maharashtra western ghats", "स्व-स्थाने व पर-स्थाने संवर्धन In-situ Ex-situ", "बायोस्फीअर रिझर्व्ह कोअर बफर झोन", "राष्ट्रीय वनधोरण १९८८ ३३ टक्के लक्ष्य", "ISFR वन अहवाल महाराष्ट्र", "देवराया Sacred Groves"],
                            topics: [
                                {
                                    id: "top_gb_mg06_01",
                                    nameMr: "संवर्धनाचे प्रकार, बायोस्फीअर रिझर्व्ह रचना, वनधोरण उद्दिष्टे आणि देवराया",
                                    nameEn: "Conservation Strategies, Biosphere Reserve Zonation, Forest Policy & Sacred Groves",
                                    subtopics: [
                                        {
                                            id: "st_gb_mg06_01_01",
                                            titleMr: "संवर्धनाच्या दोन मुख्य पद्धती: १) स्व-स्थाने संवर्धन (In-situ Conservation: जीवांचे त्यांच्या नैसर्गिक अधिवासातच संवर्धन करणे - उदा. राष्ट्रीय उद्याने, अभयारण्ये, बायोस्फीअर रिझर्व्ह, सागरी संरक्षित क्षेत्रे, देवराया); २) पर-स्थाने संवर्धन (Ex-situ Conservation: संकटग्रस्त प्रजातींना त्यांच्या नैसर्गिक अधिवासाबाहेर मानवनिर्मित सुरक्षेत ठेवणे - उदा. प्राणीसंग्रहालय, वनस्पती उद्याने Botanical Gardens, जनुक बँका Gene Banks, बीज बँका, क्रायोप्रिझर्व्हेशन)",
                                            titleEn: "Conservation Modes: In-situ (On-site within natural habitat: National Parks, Sanctuaries, Biosphere Reserves, Sacred Groves) vs Ex-situ (Off-site artificial preservation: Zoos, Botanical Gardens, Seed Banks, Cryopreservation of gametes)",
                                            chips: ["स्व-स्थाने संवर्धन (In-situ नैसर्गिक अधिवास)", "पर-स्थाने संवर्धन (Ex-situ मानवनिर्मित)", "राष्ट्रीय उद्याने In-situ", "बीज बँक Ex-situ"]
                                        },
                                        {
                                            id: "st_gb_mg06_01_02",
                                            titleMr: "बायोस्फीअर रिझर्व्हची रचना (Man and Biosphere - MAB युनेस्को): ३ समकेंद्री झोन: १) गाभा क्षेत्र (Core Zone: मानवी हस्तक्षेपास पूर्ण बंदी, केवळ निसर्ग व संशोधन); २) बफर क्षेत्र (Buffer Zone: नियंत्रित संशोधन, पर्यावरण पर्यटन व शिक्षण); ३) संक्रमण क्षेत्र (Transition Zone: स्थानिक मानवी वस्त्या, शाश्वत शेती व विकास); भारतात एकूण १८ बायोस्फीअर रिझर्व्ह (पहिले निलगिरी १९८६)",
                                            titleEn: "Biosphere Reserve Zonation (UNESCO MAB): Core Zone (Strictly legally protected, zero human interference), Buffer Zone (Controlled eco-tourism & research), Transition Zone (Human settlements, sustainable forestry); 18 Biosphere Reserves in India (1st Nilgiri 1986)",
                                            chips: ["बायोस्फीअर रिझर्व्ह (३ झोन)", "गाभा क्षेत्र Core Zone (मानवी बंदी)", "बफर क्षेत्र Buffer", "संक्रमण क्षेत्र Transition", "१८ बायोस्फीअर रिझर्व्ह"]
                                        },
                                        {
                                            id: "st_gb_mg06_01_03",
                                            titleMr: "राष्ट्रीय वनधोरण १९८८ आणि ISFR अहवाल: राष्ट्रीय वनधोरण १९८८ चे उद्दिष्ट: देशातील एकूण भूभागाच्या किमान ३३% क्षेत्र वनाच्छादित असणे (मैदानी भागात २०% व पर्वतीय भागात ६०%); ISFR (India State of Forest Report - द्वैवार्षिक अहवाल): महाराष्ट्रात एकूण वनक्षेत्र सुमारे २०% च्या आसपास; सर्वाधिक वनक्षेत्र असणारा जिल्हा: गडचिरोली; सर्वात कमी वनक्षेत्र: लातूर व मुंबई शहर",
                                            titleEn: "National Forest Policy 1988 & ISFR: Mandates 33% national forest/tree cover (20% in plains, 60% in hills); Maharashtra forest cover ~20%; Highest forest district: Gadchiroli; Lowest forest cover: Latur & Mumbai City",
                                            chips: ["राष्ट्रीय वनधोरण १९८८ (३३% उद्दिष्ट)", "पर्वतीय भागात ६०% वने", "महाराष्ट्र वनक्षेत्र ~२०%", "गडचिरोली सर्वाधिक वने", "लातूर सर्वात कमी"]
                                        },
                                        {
                                            id: "st_gb_mg06_01_04",
                                            titleMr: "महाराष्ट्रातील देवराया (Sacred Groves): धर्माच्या व श्रद्धेच्या आधारावर स्थानिक समुदायाने संरक्षित केलेले जंगल; पश्चिम घाट व सह्याद्रीच्या पट्ट्यात हजारो देवराया; अत्यंत दुर्मिळ, औषधी व संकटग्रस्त वनस्पतींचे नैसर्गिक भांडार; जैवविविधतेचे इन-सिटू संवर्धन करणारे पारंपारिक ज्ञान",
                                            titleEn: "Sacred Groves (Devrais) of Maharashtra: Community-conserved forest patches protected through traditional religious taboos; Abundant in Western Ghats; Gene pool sanctuaries harboring endemic, medicinal, and threatened species",
                                            chips: ["देवराया (Sacred Groves)", "पारंपारिक संवर्धन", "औषधी वनस्पती भांडार", "सह्याद्री देवराया"]
                                        }
                                    ],
                                    sources: [
                                        { book: "पर्यावरण व परिस्थितीकी", standard: "तुषार घोरपडे", chapterRef: "प्रकरण ६: जैवविविधता व संवर्धन" },
                                        { book: "India State of Forest Report (ISFR)", standard: "FSI Dehradun", chapterRef: "Maharashtra State Forest Assessment" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग D — ऊर्जा संसाधने, खनिजे व औद्योगिक भूगोल (Economic Geography)
                        // =========================================================================
                        {
                            id: "gb_mgeog_c07",
                            code: "MG07",
                            section: "D",
                            slug: "energy-resources-power-generation-and-non-conventional-sources-mh",
                            nameMr: "ऊर्जा संसाधने: औष्णिक, जलविद्युत, अणू आणि अपारंपरिक ऊर्जा निर्मिती",
                            nameEn: "Energy Resources: Thermal, Hydroelectric, Nuclear & Non-Conventional Grid in Maharashtra",
                            name: "ऊर्जा संसाधने व वीज निर्मिती (Energy Resources & Power Grid)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mgeog_c07",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mgeog_c06",
                            nextChapterId: "gb_mgeog_c08",
                            metaDescriptionMr: "महाराष्ट्रातील ऊर्जा निर्मिती (महाजेनको MAHAGENCO), औष्णिक ऊर्जा केंद्रे (कोराडी, खापरखेडा, पारस, तुर्भे), जलविद्युत (कोयना, खोपोली), अणुऊर्जा (तारापूर व जैतापूर प्रस्तावित), पवन ऊर्जा (चाळकेवाडी), आणि सौर ऊर्जा प्रकल्प.",
                            metaDescriptionEn: "In-depth review of Maharashtra's Power Matrix: MAHAGENCO, Coal Thermal stations (Koradi, Khaparkheda, Paras, Trombay), Hydroelectric powerhouse Koyna, Nuclear (Tarapur operational & Jaitapur EPR proposed), Wind energy hubs (Chalkewadi Satara), and Solar parks.",
                            notesJsonPath: "/data/notes/group_b/mains/geography/c07_energy_resources_mh.json",
                            quizTag: "gb_mgeog_energy_01",
                            tags: ["Economic Geography", "Energy Resources", "MAHAGENCO Thermal", "Koyna Hydroelectric", "Tarapur Jaitapur Nuclear", "Wind Solar Non-Conventional", "High-Weightage"],
                            searchKeywords: ["maharashtra power generation thermal stations koradi khaparkheda", "koyna hydroelectric project lake tapping shivsagar", "tarapur atomic power station jaitapur epr nuclear", "wind power satara chalkewadi dhule", "mahagenco non conventional renewable energy maharashtra", "ऊर्जा संसाधने महाराष्ट्र", "औष्णिक वीज केंद्रे कोराडी खापरखेडा", "कोयना जलविद्युत लेक टॅपिंग", "तारापूर अणुऊर्जा जैतापूर", "पवन ऊर्जा चाळकेवाडी सातारा", "महाजेनको MAHAGENCO"],
                            topics: [
                                {
                                    id: "top_gb_mg07_01",
                                    nameMr: "पारंपारिक वीज केंद्रे, कोयना लेक टॅपिंग, अणू प्रकल्प आणि अपारंपरिक ऊर्जा पट्टे",
                                    nameEn: "Thermal Generation Hubs, Koyna Lake Tapping, Nuclear Prospects & Renewable Belts",
                                    subtopics: [
                                        {
                                            id: "st_gb_mg07_01_01",
                                            titleMr: "औष्णिक वीज निर्मिती (Thermal Power - MAHAGENCO): महाराष्ट्रातील एकूण वीज निर्मितीत औष्णिक ऊर्जेचा वाटा सुमारे ६५-७०% (सर्वाधिक); प्रमुख केंद्रे: १) नागपूर: कोराडी व खापरखेडा; २) चंद्रपूर: चंद्रपूर सुपर थर्मल पॉवर स्टेशन (राज्यातील सर्वात मोठे); ३) अकोला: पारस; ४) बीड: परळी वैजनाथ; ५) भुसावळ: एकलहरे (नाशिक); ६) मुंबई: तुर्भे (टाटा पॉवर)",
                                            titleEn: "Thermal Power Infrastructure: Accounts for 65-70% of state generation; Core plants: Chandrapur Super Thermal Power Station (largest in MH), Koradi & Khaparkheda (Nagpur), Paras (Akola), Parli Vaijnath (Beed), Eklahare (Nashik), Trombay (Tata Power)",
                                            chips: ["औष्णिक ऊर्जा ६५-७०%", "चंद्रपूर सुपर थर्मल (सर्वात मोठे)", "कोराडी व खापरखेडा (नागपूर)", "पारस व परळी वैजनाथ"]
                                        },
                                        {
                                            id: "st_gb_mg07_01_02",
                                            titleMr: "जलविद्युत ऊर्जा व कोयना लेक टॅपिंग तंत्रज्ञान: खोपोली (रायगड - टाटा समूहाने १९१५ मध्ये सुरू केलेले भारतातील पहिले व्यावसायिक जलविद्युत केंद्र); कोयना जलविद्युत प्रकल्प (१९६० मे - 'महाराष्ट्राची भाग्यलक्ष्मी' - १९६० मेगावॅट क्षमता); आशियातील पहिले लेक टॅपिंग (Lake Tapping - १३ मार्च १९९९ रोजी शिवसागर जलाशयात बोगदा फोडून थेट पाणी टर्बाइनकडे वळवले; दुसरे लेक टॅपिंग २०१२); घाटघर जलविद्युत प्रकल्प (अहमदनगर - पंप स्टोरेज प्रकल्प)",
                                            titleEn: "Hydroelectric Power & Koyna Lake Tapping: Khopoli (1915 by Tatas, 1st commercial hydro in India); Koyna Hydroelectric Project (1960 MW, 'Lifeline of Maharashtra'); Asia's 1st Lake Tapping performed at Koyna on 13 March 1999 (2nd in 2012); Ghatghar Pumped Storage Project in Ahmednagar",
                                            chips: ["कोयना जलविद्युत (१९६० MW)", "महाराष्ट्राची भाग्यलक्ष्मी", "लेक टॅपिंग (Lake Tapping १९९९)", "खोपोली (पहिले जलविद्युत १९१५)", "घाटघर पंप स्टोरेज"]
                                        },
                                        {
                                            id: "st_gb_mg07_01_03",
                                            titleMr: "अणुऊर्जा व अपारंपरिक ऊर्जा निर्मिती: १) तारापूर अणुऊर्जा केंद्र (पालघर - भारतातील पहिले अणुऊर्जा केंद्र १९६९, BWR व PHWR तंत्रज्ञान); २) जैतापूर अणू प्रकल्प (रत्नागिरी - फ्रान्सच्या सहकार्याने प्रस्तावित ९,९०० MW क्षमतेचा जगातील सर्वात मोठा अणू प्रकल्प); ३) पवन ऊर्जा: चाळकेवाडी व ठोसेघर (सातारा), जामगोडे (धुळे); ४) महाऊर्जा (MEDA - महाराष्ट्र ऊर्जा विकास अभिकरण)",
                                            titleEn: "Nuclear & Non-Conventional Renewable Energy: Tarapur (Palghar, 1969, India's 1st commercial nuclear station); Jaitapur (Ratnagiri, proposed 9900 MW with French Areva EPR technology); Wind Energy hubs (Chalkewadi Satara); MEDA nodal agency",
                                            chips: ["तारापूर अणुऊर्जा केंद्र १९६९", "जैतापूर अणू प्रकल्प (प्रस्तावित ९९०० MW)", "चाळकेवाडी पवन ऊर्जा (सातारा)", "महाऊर्जा (MEDA)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण ७: खनिजे व ऊर्जा संसाधने" },
                                        { book: "महाजेनको (MAHAGENCO) अधिकृत अहवाल", standard: "ऊर्जा विभाग महाराष्ट्र शासन", chapterRef: "वीज निर्मिती आकडेवारी" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mgeog_c08",
                            code: "MG08",
                            section: "D",
                            slug: "industrial-regions-special-economic-zones-and-ports-mh",
                            nameMr: "महाराष्ट्रातील औद्योगिक प्रदेश, सेझ (SEZ), लॉजिस्टिक्स कॉरिडॉर व सागरी बंदरे",
                            nameEn: "Industrial Corridors, SEZs, Logistics Ecosystem & Maritime Ports in Maharashtra",
                            name: "उद्योग, सेझ व सागरी बंदरे (Industries, SEZs & Ports)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mgeog_c08",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mgeog_c07",
                            nextChapterId: "gb_mgeog_c09",
                            metaDescriptionMr: "मुंबई-पुणे औद्योगिक पट्टा, दिल्ली-मुंबई इंडस्ट्रिअल कॉरिडॉर (DMIC - शेंद्रा-बिडकीन नोड), विशेष आर्थिक क्षेत्र (SEZ धोरण), JNPT बंदर आधुनिकीकरण, वाढवण महाबंदर, आणि मल्टी-मॉडल लॉजिस्टिक्स पार्क.",
                            metaDescriptionEn: "In-depth review of Industrial Geography: Mumbai-Pune-Thane industrial belt, Delhi-Mumbai Industrial Corridor (DMIC - Shendra-Bidkin Node AURIC), SEZ Act & export clusters, JNPT container expansion, Vadhavan Port, and Multi-Modal Logistics Parks (MMLPs).",
                            notesJsonPath: "/data/notes/group_b/mains/geography/c08_industries_sez_ports.json",
                            quizTag: "gb_mgeog_industry_01",
                            tags: ["Economic Geography", "Industrial Corridors", "DMIC Shendra Bidkin AURIC", "Special Economic Zones SEZ", "JNPT Port Nhava Sheva", "Vadhavan Mega Port", "High-Weightage"],
                            searchKeywords: ["mumbai pune thane industrial corridor auto pharma it", "delhi mumbai industrial corridor dmic auric shendra bidkin", "sez special economic zones maharashtra export processing", "jnpt nhava sheva container port expansion", "vadhavan port dahanu palghar 13th major port", "मुंबई पुणे औद्योगिक पट्टा", "DMIC ऑरिक शेंद्रा-बिडकीन", "विशेष आर्थिक क्षेत्र SEZ", "JNPT न्हावा शेवा बंदर", "वाढवण बंदर पालघर"],
                            topics: [
                                {
                                    id: "top_gb_mg08_01",
                                    nameMr: "औद्योगिक पट्टे, DMIC स्मार्ट सिटीज, सेझ निर्यातीचे धोरण आणि सागरी बंदरे",
                                    nameEn: "Industrial Concentration, DMIC AURIC Nodes, SEZ Framework & Port Modernization",
                                    subtopics: [
                                        {
                                            id: "st_gb_mg08_01_01",
                                            titleMr: "मुंबई-पुणे-ठाणे औद्योगिक पट्टा: भारतातील सर्वात जुना व विकसित औद्योगिक प्रदेश; सुती कापड, पेट्रोकेमिकल्स (ठाणे-बेलापूर पट्टा), औषध निर्माण (Pharma), ऑटोमोबाईल (पिंपरी-चिंचवड, चाकण, तळेगाव), आणि माहिती तंत्रज्ञान (हिंजवडी राजीव गांधी IT पार्क, मगरपट्टा); कुशल मनुष्यबळ व मुंबई बंदराची अनुकूलता",
                                            titleEn: "Mumbai-Pune-Thane Industrial Node: Premier industrial cluster in India; Diversified into Petrochemicals (Thane-Belapur belt), Pharmaceuticals, Automobiles (Pimpri-Chinchwad, Chakan, Talegaon), and IT software parks (Hinjawadi, Magarpatta)",
                                            chips: ["मुंबई-पुणे औद्योगिक पट्टा", "चाकण ऑटो हब", "ठाणे-बेलापूर पेट्रोकेमिकल्स", "हिंजवडी राजीव गांधी IT पार्क"]
                                        },
                                        {
                                            id: "st_gb_mg08_01_02",
                                            titleMr: "दिल्ली-मुंबई इंडस्ट्रिअल कॉरिडॉर (DMIC) व ऑरिक (AURIC): जपानच्या आर्थिक सहकार्याने उभारण्यात येणारा १,५०४ किमीचा मेगा कॉरिडॉर; महाराष्ट्रातील नोड्स: शेंद्रा-बिडकीन औद्योगिक क्षेत्र (छत्रपती संभाजीनगर - 'ऑरिक' / AURIC - Aurangabad Industrial City: देशातील पहिली सुनियोजित स्मार्ट इंडस्ट्रिअल ग्रीनफिल्ड सिटी) आणि दिघी बंदर नोड (रायगड)",
                                            titleEn: "Delhi-Mumbai Industrial Corridor (DMIC) & AURIC: 1,504 km corridor backed by Japan; Key nodes in MH: Shendra-Bidkin Industrial Park (AURIC - Aurangabad Industrial City, India's 1st planned greenfield smart industrial city) and Dighi Port node",
                                            chips: ["DMIC कॉरिडॉर (जपान सहकार्य)", "ऑरिक AURIC (शेंद्रा-बिडकीन)", "ग्रीनफिल्ड स्मार्ट सिटी", "दिघी बंदर नोड"]
                                        },
                                        {
                                            id: "st_gb_mg08_01_03",
                                            titleMr: "सागरी बंदरे व वाढवण महाबंदर प्रकल्प: १) मुंबई बंदर (नैसर्गिक खोल बंदर); २) जवाहरलाल नेहरू बंदर (JNPT / न्हावा शेवा - देशातील ५०% पेक्षा जास्त कंटेनर वाहतूक हाताळणारे सर्वात मोठे कंटेनर बंदर); ३) वाढवण बंदर (डहाणू, पालघर - देशातील १३ वे मोठे महाबंदर - नैसर्गिक २० मीटर खोली, ७६,२०० कोटी गुंतवणूक; जगातील अव्वल १० कंटेनर बंदरांमध्ये समावेशाचे लक्ष्य)",
                                            titleEn: "Seaport Logistics & Vadhavan Mega Port: Mumbai Port (Traditional natural harbor); JNPA/Nhava Sheva (Handles >50% of India's container traffic); Vadhavan Port (Palghar, 13th Major Port, 20m natural draft, Rs 76,200 Cr outlay to rank in world top-10 container ports)",
                                            chips: ["मुंबई बंदर (नैसर्गिक)", "JNPT न्हावा शेवा (कंटेनर बंदर)", "वाढवण बंदर (पालघर १३ वे महाबंदर)", "२० मीटर नैसर्गिक खोली"]
                                        }
                                    ],
                                    sources: [
                                        { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण ९: उद्योगधंदे, सेझ व बंदरे" },
                                        { book: "उद्योग संचालनालय महाराष्ट्र शासन", standard: "वार्षिक अहवाल", chapterRef: "DMIC व औद्योगिक गुंतवणूक" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग E — मानवी भूगोल, नागरीकरण व वस्त्यांचे प्रारूप (Human Geography)
                        // =========================================================================
                        {
                            id: "gb_mgeog_c09",
                            code: "MG09",
                            section: "E",
                            slug: "urbanization-trends-migration-and-metropolitan-regions-mh",
                            nameMr: "नागरीकरण कल, स्थलांतर आणि महानगर प्रदेश (MMR, PMRDA) समस्या",
                            nameEn: "Urbanization Dynamics, Migration Streams & Metropolitan Planning (MMR, PMRDA)",
                            name: "नागरीकरण, स्थलांतर व महानगर विकास (Urbanization & Metropolitan Planning)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mgeog_c09",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mgeog_c08",
                            nextChapterId: "gb_mgeog_c10",
                            metaDescriptionMr: "महाराष्ट्रातील नागरीकरणाचा वेग (४५.२%), स्थलांतराचे प्रकार (ग्रामीण ते नागरी), झोपडपट्ट्यांची समस्या (धारावी पुनर्विकास), मुंबई महानगर प्रदेश (MMRDA), पुणे महानगर प्रदेश (PMRDA), आणि स्मार्ट सिटीज.",
                            metaDescriptionEn: "In-depth review of Urban Geography: Maharashtra Urbanization velocity (45.2%, Census 2011), Rural-to-Urban migration push/pull factors, Slum proliferation & Dharavi Redevelopment, Metropolitan Authorities (MMRDA, PMRDA), and Urban Smart City sustainability.",
                            notesJsonPath: "/data/notes/group_b/mains/geography/c09_urbanization_migration.json",
                            quizTag: "gb_mgeog_urban_01",
                            tags: ["Human Geography", "Urbanization 45.2 Percent", "Rural Urban Migration", "MMRDA PMRDA Planning", "Dharavi Slum Redevelopment", "Smart Cities", "High-Weightage"],
                            searchKeywords: ["urbanization in maharashtra census 2011 trends", "rural to urban migration push pull factors employment", "mumbai metropolitan region development authority mmrda pmrda", "dharavi redevelopment project slum rehabilitation", "urban challenges traffic water waste management", "नागरीकरण कल महाराष्ट्र ४५.२%", "ग्रामीण ते नागरी स्थलांतर Push Pull", "MMRDA मुंबई महानगर प्रदेश PMRDA", "धारावी झोपडपट्टी पुनर्विकास", "नागरी समस्या घनकचरा वाहतूक"],
                            topics: [
                                {
                                    id: "top_gb_mg09_01",
                                    nameMr: "नागरीकरणाचा आलेख, स्थलांतराचे प्रवाह, महानगर नियोजन आणि नागरी समस्या",
                                    nameEn: "Urbanization Trajectories, Migration Demographics, Metropolitan Agencies & Urban Crisis",
                                    subtopics: [
                                        {
                                            id: "st_gb_mg09_01_01",
                                            titleMr: "महाराष्ट्रातील नागरीकरणाचा आलेख (Census 2011): राज्यातील नागरी लोकसंख्या ४५.२२% (देशात सर्वाधिक नागरी लोकसंख्या संख्यात्मकदृष्ट्या महाराष्ट्रात - ५.०८ कोटी); १००% नागरी जिल्हे: मुंबई शहर व मुंबई उपनगर; सर्वाधिक नागरीकरण झालेले जिल्हे: ठाणे (७७%), नागपूर (६८%), पुणे (६१%); नागरीकरणाचा वेग वाढवणारे घटक: औद्योगिकीकरण, सेवा क्षेत्राचा विस्तार व रोजगार",
                                            titleEn: "Urbanization Demographics: 45.22% urban population (Census 2011); Highest absolute urban headcount in India (5.08 Crore); 100% urban districts: Mumbai City & Suburban; High urban districts: Thane (77%), Nagpur (68%), Pune (61%) driven by industrial agglomeration",
                                            chips: ["नागरीकरण ४५.२२%", "५.०८ कोटी नागरी लोकसंख्या", "मुंबई शहर व उपनगर १००% नागरी", "ठाणे ७७% नागरी"]
                                        },
                                        {
                                            id: "st_gb_mg09_01_02",
                                            titleMr: "स्थलांतराचे प्रवाह (Migration Streams): १) ग्रामीण ते नागरी (Rural to Urban - सर्वाधिक वेगाने वाढणारा प्रवाह, रोजगारासाठी); २) ग्रामीण ते ग्रामीण (विवाह व शेतमजुरी); ३) नागरी ते नागरी; ढकलणारे घटक (Push Factors: ग्रामीण भागातील दारिद्र्य, दुष्काळ, शेतीतील तोटा); खेचणारे घटक (Pull Factors: शहरांमधील उच्च वेतन, रोजगार, शिक्षण, उत्तम आरोग्य सुविधा)",
                                            titleEn: "Migration Dynamics: Rural-to-Urban (Fastest growing stream driven by economic livelihood); Push Factors (Rural distress, recurring droughts, farm unviability) vs Pull Factors (Higher industrial wages, educational institutions, healthcare access)",
                                            chips: ["ग्रामीण ते नागरी स्थलांतर", "Push Factors (दारिद्र्य, दुष्काळ)", "Pull Factors (रोजगार, शिक्षण)", "स्थलांतर समस्या"]
                                        },
                                        {
                                            id: "st_gb_mg09_01_03",
                                            titleMr: "महानगर प्रदेश नियोजन व समस्या: १) MMRDA (मुंबई महानगर प्रदेश विकास प्राधिकरण - मुंबई, ठाणे, पालघर, रायगड क्षेत्राचा एकात्मिक विकास); २) PMRDA (पुणे महानगर प्रदेश विकास प्राधिकरण); नागरी समस्या: झोपडपट्ट्यांची वाढ (उदा. धारावी - आशियातील सर्वात मोठी झोपडपट्टी, पुनर्विकास प्रकल्प), वाहतूक कोंडी (Traffic Congestion), सांडपाणी व घनकचरा व्यवस्थापन (Solid Waste Management), आणि पिण्याच्या पाण्याचा तुटवडा",
                                            titleEn: "Metropolitan Planning & Urban Crisis: MMRDA & PMRDA regional infrastructure execution; Severe urban externalities: Slum proliferation (Dharavi redevelopment challenge), vehicular congestion, municipal solid waste management, and drinking water shortages",
                                            chips: ["MMRDA (मुंबई महानगर प्राधिकरण)", "PMRDA पुणे", "धारावी पुनर्विकास प्रकल्प", "घनकचरा व्यवस्थापन", "वाहतूक कोंडी"]
                                        }
                                    ],
                                    sources: [
                                        { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण ११: मानवी भूगोल व नागरीकरण" },
                                        { book: "आर्थिक पाहणी अहवाल महाराष्ट्र", standard: "नियोजन विभाग", chapterRef: "नागरी विकास व पायाभूत सुविधा" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग F — सुदूर संवेदन (Remote Sensing), GIS, GPS आणि मास्टर रिव्हिजन
                        // =========================================================================
                        {
                            id: "gb_mgeog_c10",
                            code: "MG10",
                            section: "F",
                            slug: "remote-sensing-gis-and-gps-fundamentals-mains",
                            nameMr: "सुदूर संवेदन (Remote Sensing), भौगोलिक माहिती प्रणाली (GIS) व GPS चे मूलभूत तत्त्वज्ञान",
                            nameEn: "Fundamentals of Remote Sensing, Geographic Information System (GIS) & GPS",
                            name: "सुदूर संवेदन, GIS व GPS (Remote Sensing, GIS & GPS)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mgeog_c10",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mgeog_c09",
                            nextChapterId: "gb_mgeog_c11",
                            metaDescriptionMr: "सुदूर संवेदन (Remote Sensing - विद्युतचुंबकीय स्पेक्ट्रम, ॲक्टिव्ह व पॅसिव्ह सेन्सर्स), उपग्रहांचे प्रकार (ध्रुवीय सूर्य-समकालिक LEO व भू-स्थिर GEO), GIS (रॅस्टर व व्हेक्टर डेटा), GPS व भारताची नाविक (NavIC) प्रणाली.",
                            metaDescriptionEn: "In-depth review of Geoinformatics: Remote Sensing (Electromagnetic spectrum, Active vs Passive sensors), Satellite Orbits (Sun-Synchronous Polar LEO vs Geostationary GEO), GIS (Raster vs Vector data models, spatial layers), and GPS / India's NavIC (IRNSS) constellation.",
                            notesJsonPath: "/data/notes/group_b/mains/geography/c10_remote_sensing_gis_gps.json",
                            quizTag: "gb_mgeog_remote_01",
                            tags: ["Geoinformatics", "Remote Sensing", "Active Passive Sensors", "Sun Synchronous Geostationary", "GIS Raster Vector", "GPS NavIC IRNSS", "High-Weightage"],
                            searchKeywords: ["remote sensing electromagnetic spectrum active passive sensors", "satellite orbits sun synchronous polar vs geostationary", "gis geographic information system raster vector data layers", "global positioning system gps navic irnss 7 satellites", "isro remote sensing satellites cartosat resourcesat", "सुदूर संवेदन रिमोट सेन्सिंग", "ॲक्टिव्ह व पॅसिव्ह सेन्सर्स", "ध्रुवीय सूर्य समकालिक उपग्रह", "GIS रॅस्टर व्हेक्टर डेटा", "GPS व नाविक NavIC प्रणाली"],
                            topics: [
                                {
                                    id: "top_gb_mg10_01",
                                    nameMr: "विद्युतचुंबकीय स्पेक्ट्रम, उपग्रह कक्षा, GIS डेटा मॉडेल्स आणि नाविक प्रणाली",
                                    nameEn: "Electromagnetic Spectrum, Orbital Mechanics, GIS Spatial Layers & NavIC Geometry",
                                    subtopics: [
                                        {
                                            id: "st_gb_mg10_01_01",
                                            titleMr: "सुदूर संवेदन संकल्पना व सेन्सर्स (Remote Sensing): प्रत्यक्ष संपर्क न येता दूरवरून वस्तूची माहिती गोळा करणे; विद्युतचुंबकीय लहरींचा वापर (EM Spectrum - दृश्य प्रकाश, इन्फ्रारेड, मायक्रोव्हेव्ह); १) पॅसिव्ह सेन्सर (Passive: नैसर्गिक सूर्यप्रकाशाच्या परावर्तनावर चालणारे - उदा. कॅमेरे); २) ॲक्टिव्ह सेन्सर (Active: स्वतःची ऊर्जा सोडून परावर्तित लहरी मोजणारे - उदा. रडार / RADAR, लिडार / LiDAR); इस्रोचे उपग्रह: कार्टोसॅट (Cartosat - नकाशे), रिसोर्ससॅट (शेती व जलसाठे)",
                                            titleEn: "Remote Sensing Fundamentals: Acquiring object data from a distance without physical contact via EM radiation; Passive Sensors (Rely on reflected solar energy, e.g., multispectral cameras) vs Active Sensors (Emit their own radiation source, e.g., RADAR, LiDAR); ISRO's Cartosat & Resourcesat",
                                            chips: ["सुदूर संवेदन (Remote Sensing)", "पॅसिव्ह सेन्सर (सूर्यप्रकाश परावर्तन)", "ॲक्टिव्ह सेन्सर (RADAR, LiDAR)", "कार्टोसॅट Cartosat"]
                                        },
                                        {
                                            id: "st_gb_mg10_01_02",
                                            titleMr: "उपग्रह कक्षांचे प्रकार (Satellite Orbits): १) ध्रुवीय सूर्य-समकालिक कक्षा (Sun-Synchronous Polar Orbit - उंची ६०० ते ८०० किमी, उत्तर-दक्षिण ध्रुवावरून फिरणारे; पृथ्वीवरील प्रत्येक ठिकाणाहून जाताना समान सूर्यप्रकाश मिळतो; रिमोट सेन्सिंग व हवामान अभ्यासासाठी वापर); २) भू-स्थिर कक्षा (Geostationary Orbit - विषुववृत्तावर ३६,००० किमी उंचीवर; पृथ्वीच्या परिवलनाइतकाच २४ तासांचा परिभ्रमण काळ; पृथ्वीवरून उपग्रह एकाच जागी स्थिर भासतो; दूरसंचार व DTH साठी वापर)",
                                            titleEn: "Satellite Orbits: 1) Sun-Synchronous Polar LEO (Altitude 600-800 km, passes over poles, constant solar illumination, ideal for remote sensing mapping); 2) Geostationary GEO (Altitude 35,786 km above equator, 24-hr orbital period matching Earth's rotation, ideal for telecommunications)",
                                            chips: ["ध्रुवीय सूर्य-समकालिक (६००-८०० किमी)", "रिमोट सेन्सिंगसाठी वापर", "भू-स्थिर कक्षा (३६,००० किमी)", "दूरसंचारसाठी वापर"]
                                        },
                                        {
                                            id: "st_gb_mg10_01_03",
                                            titleMr: "भौगोलिक माहिती प्रणाली (GIS) डेटा प्रकार: अवकाशीय माहितीचे संकलन, साठवणूक व विश्लेषण करणारी प्रणाली; २ मुख्य डेटा प्रकार: १) रॅस्टर डेटा (Raster Data: पिक्सेल / ग्रिड्सच्या स्वरूपात - उदा. उपग्रह छायाचित्रे, डिजिटल एलिव्हेशन मॉडेल); २) व्हेक्टर डेटा (Vector Data: बिंदू Point, रेषा Line आणि बहुभुज Polygon च्या स्वरूपात - उदा. विहीर=बिंदू, नदी/रस्ता=रेषा, शेत/जिल्हा=पॉलिगॉन); लेयरिंग तंत्र (Thematic Layers)",
                                            titleEn: "GIS Spatial Data Models: Hardware-software system capturing and analyzing spatial data; 1) Raster Data (Pixel grid matrix representing continuous variables: satellite images, temperature elevation); 2) Vector Data (Coordinate geometry: Points for wells, Lines for roads/rivers, Polygons for district boundaries)",
                                            chips: ["GIS भौगोलिक माहिती प्रणाली", "रॅस्टर डेटा (पिक्सेल ग्रिड्स)", "व्हेक्टर डेटा (Point, Line, Polygon)", "थीमॅटिक लेयर्स (Thematic Layers)"]
                                        },
                                        {
                                            id: "st_gb_mg10_01_04",
                                            titleMr: "GPS आणि भारताची 'नाविक' प्रणाली (NavIC / IRNSS): १) GPS (Global Positioning System - अमेरिकेची २४ उपग्रहांची जागतिक नेव्हिगेशन प्रणाली); २) नाविक (NavIC - Navigation with Indian Constellation / IRNSS): इस्रोने विकसित केलेली भारताची स्वतंत्र प्रादेशिक प्रणाली; एकूण ७ उपग्रह (३ भू-स्थिर GEO + ४ भू-समकालिक GSO); भारताच्या सीमांच्या पलीकडे १,५०० किमी पर्यंत अचूक स्थान निश्चिती (५ ते १० मीटर अचूकता)",
                                            titleEn: "GPS & India's NavIC (IRNSS): GPS (US military 24-satellite global system); NavIC (ISRO's regional satellite navigation system with 7 satellites: 3 Geostationary + 4 Geosynchronous); Accurate positioning across India and up to 1,500 km beyond sovereign land borders",
                                            chips: ["नाविक NavIC (इस्रोची स्वदेशी प्रणाली)", "७ उपग्रह (३ GEO + ४ GSO)", "१,५०० किमी सीमा कव्हरेज", "GPS अमेरिका"]
                                        }
                                    ],
                                    sources: [
                                        { book: "NCERT Class 11 Practical Geography", standard: "NCERT", chapterRef: "Chapter 6 & 7: Introduction to Remote Sensing & GIS" },
                                        { book: "इस्रो अधिकृत संकेतस्थळ (isro.gov.in)", standard: "स्पेस ॲप्लिकेशन्स केंद्र", chapterRef: "रिमोट सेन्सिंग व नाविक प्रणाली" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mgeog_c11",
                            code: "MG11",
                            section: "F",
                            slug: "mains-geography-environment-master-revision-and-pyq-trends",
                            nameMr: "मुख्य भूगोल-पर्यावरण मास्टर रिव्हिजन: नकाशे, समित्यांचे अहवाल व १० वर्षांचे PYQ विश्लेषण",
                            nameEn: "Mains Geography & Environment Master Revision: Maps, Ecological Committees & 10-Year PYQ Trends",
                            name: "भूगोल-पर्यावरण मास्टर रिव्हिजन (Master Revision: Geography & PYQs)",
                            category: "REVISION",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mgeog_c11",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mgeog_c10",
                            nextChapterId: null,
                            metaDescriptionMr: "मुख्य परीक्षा पेपर २ मधील भूगोल व पर्यावरणाच्या १० ते १२ प्रश्नांचे (२० ते २४ गुण) अचूक नियोजन, नकाशे आधारित बहु-विधानात्मक प्रश्न, पर्यावरण समित्यांचे तुलनात्मक कोष्टक, आणि २०१२ ते २०२५ मधील MPSC मुख्य परीक्षा PYQ विश्लेषण.",
                            metaDescriptionEn: "Master consolidation module: Strategy for Mains Paper 2 Geography & Environment (10-12 questions = 20-24 marks), Spatial map-based multi-statement elimination heuristics, Ecological committee comparison matrix (Gadgil vs Kasturirangan), and 10-year MPSC Group B trend analysis.",
                            notesJsonPath: "/data/notes/group_b/mains/geography/c11_master_revision.json",
                            quizTag: "gb_mgeog_revision_01",
                            tags: ["Revision", "Mains Paper 2 Strategy", "20 to 24 Marks Target", "Gadgil vs Kasturirangan Table", "PYQ Trends 2012 to 2025", "High-Weightage"],
                            searchKeywords: ["mpsc group b mains paper 2 geography 12 questions strategy", "environmental geography gadgil vs kasturirangan table", "remote sensing questions mains pyq trends", "mpsc mains geography pyq trend analysis 2012 to 2025", "multi statement geography questions elimination", "मुख्य परीक्षा पेपर २ भूगोल रणनीती", "पर्यावरण भूगोल समित्या तक्ता", "रिमोट सेन्सिंग PYQ प्रश्न", "१० वर्षांचे PYQ विश्लेषण"]
                        }
                    ]
                },


                {
                    id: "gb_mains_economics_planning",
                    code: "M_ECO",
                    slug: "indian-economy-planning-and-public-finance-mains",
                    nameMr: "भारतीय अर्थव्यवस्था, नियोजन, बँकिंग व शासकीय वित्त (मुख्य परीक्षा विशेष)",
                    nameEn: "Indian Economy, Planning, Banking, Public Finance & External Sector (Mains)",
                    name: "अर्थव्यवस्था व नियोजन (Mains Economy & Planning)",
                    officialScope: "Macroeconomics, National Income Dynamics (GVA, Deflator), Planning Evolution & NITI Aayog, Poverty & Multidimensional Poverty Index (MPI), Banking Reforms (NPA, IBC 2016, Basel Norms), Fiscal Policy & Deficit Metrics (FRBM Act, NK Singh Report), Taxation (GST, 15th Finance Commission), External Sector & Balance of Payments (BoP, FDI/FPI, WTO), and Maharashtra Economy & Cooperatives for MPSC Group B Mains Paper 2",
                    version: "1.0",
                    verifiedDate: "2026-10-28",
                    notesJsonBaseDir: "/data/notes/group_b/mains/economics/",


                    // UI Theme & Theming Metadata
                    theme: {
                        primaryColor: "#0f766e",        // Deep Teal / Fiscal Treasury Theme
                        bgColor: "#f0fdfa",
                        iconClass: "ri-bank-line"
                    },


                    // अभ्यास व डॅशबोर्ड ॲनालिटिक्स मेट्रिक्स
                    metrics: {
                        totalChapters: 16,
                        totalEstimatedHours: 54,
                        avgQuestionsInMains: 18,
                        targetMarks: 36,
                        weightageRange: "15-20 Questions / 30-40 Marks"
                    },


                    // विषय पातळीवरील स्मार्ट टॅग्ज
                    subjectTags: [
                        "Core-Mains",
                        "Mains-Paper-2",
                        "Macroeconomics-Deep-Dive",
                        "Banking-Reforms-IBC",
                        "Fiscal-Policy-FRBM",
                        "High-Weightage",
                        "Data-Driven-Analytical"
                    ],


                    filterCategory: "GS",
                    searchKeywords: [
                        "mpsc group b mains economics syllabus", "macroeconomics national income gva gdp deflator",
                        "niti aayog governing council sdg india index", "multidimensional poverty index mpi niti aayog",
                        "banking reforms non performing assets npa insolvency bankruptcy code ibc 2016",
                        "basel norms 1 2 3 capital adequacy ratio car", "fiscal policy budget deficits frbm act nk singh",
                        "15th finance commission recommendations vertical horizontal devolution",
                        "balance of payments bop current account deficit cad fdi fpi",
                        "अर्थव्यवस्था मुख्य परीक्षा", "समग्रलक्षी अर्थशास्त्र GVA GDP", "नीती आयोग गव्हर्निंग कौन्सिल", "बहुआयामी दारिद्र्य निर्देशांक MPI", "बँकिंग सुधारणा NPA दिवाळखोरी संहिता IBC २०१६", "बॅसेल निकष Basel III", "FRBM कायदा एन के सिंह समिती", "१५ वा वित्त आयोग शिफारशी", "परकीय व्यापार व्यवहारतोल BoP"
                    ],


                    referenceSources: [
                        {
                            name: "MPSC Non-Gazetted Group B Combined Mains Syllabus",
                            role: "अधिकृत परीक्षा-संदर्भ",
                            url: "https://mpsc.gov.in"
                        },
                        {
                            name: "भारतीय अर्थव्यवस्था (भाग १ व २) - रंजन कोळंबे",
                            role: "समग्रलक्षी अर्थशास्त्र, बँकिंग व शासकीय वित्ताचा पायाभूत संदर्भ ग्रंथ"
                        },
                        {
                            name: "भारतीय अर्थव्यवस्था - किरण देसले (Deepstambh)",
                            role: "आकडेवारी, आयोग अहवाल व योजनांचे सखोल विश्लेषण"
                        },
                        {
                            name: "Economic Survey of India & Union Budget (Ministry of Finance)",
                            role: "केंद्रीय आर्थिक पाहणी व अर्थसंकल्पीय आकडेवारी"
                        },
                        {
                            name: "महाराष्ट्राचा आर्थिक पाहणी अहवाल (अर्थ व सांख्यिकी संचालनालय)",
                            role: "महाराष्ट्र GSDP, सहकार व प्रादेशिक विकास आकडेवारी"
                        }
                    ],


                    chapters: [
                        // =========================================================================
                        // विभाग A — समग्रलक्षी अर्थशास्त्र व राष्ट्रीय उत्पन्न (Macroeconomic Dynamics)
                        // =========================================================================
                        {
                            id: "gb_meco_c01",
                            code: "ME01",
                            section: "A",
                            slug: "macroeconomics-national-income-gva-and-deflator-dynamics",
                            nameMr: "समग्रलक्षी अर्थशास्त्र: राष्ट्रीय उत्पन्न, स्थूल मूल्यवर्धन (GVA) व GDP डिफ्लेटर",
                            nameEn: "Macroeconomics: National Income Aggregates, Gross Value Added (GVA) & GDP Deflator",
                            name: "समग्रलक्षी अर्थशास्त्र व GVA (Macroeconomics, GVA & Deflator)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_meco_c01",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: null,
                            nextChapterId: "gb_meco_c02",
                            metaDescriptionMr: "समग्रलक्षी अर्थशास्त्र संकल्पना, GDP vs GVA मधील संबंध सूत्र [GDP = GVA + उत्पादन कर - उत्पादन अनुदाने], चालू व स्थिर किमतींनुसार मोजमाप, GDP डिफ्लेटर, आणि CSO/NSO ची २०१५ मधील सुधारित पद्धत.",
                            metaDescriptionEn: "In-depth review of Macroeconomics: National Income metrics, Interlink between GDP and GVA [GDP = GVA at basic prices + Product Taxes - Product Subsidies], Real vs Nominal GDP, GDP Deflator mechanics, and NSO's 2015 methodological revisions.",
                            notesJsonPath: "/data/notes/group_b/mains/economics/c01_macroeconomics_gva.json",
                            quizTag: "gb_meco_macro_01",
                            tags: ["Macroeconomics", "National Income", "Gross Value Added GVA", "GDP Deflator", "Base Year 2011-12", "NSO Method 2015", "High-Weightage"],
                            searchKeywords: ["gva gross value added formula basic prices gdp", "gdp deflator nominal real gdp ratio", "national income new methodology 2015 cso base year 2011 12", "difference between gdp and gva macroeconomics", "समग्रलक्षी अर्थशास्त्र", "स्थूल मूल्यवर्धन GVA सूत्र", "GDP डिफ्लेटर", "नवीन मोजमाप पद्धती २०१५", "आधारभूत वर्ष २०११-१२ NSO"],
                            topics: [
                                {
                                    id: "top_gb_me01_01",
                                    nameMr: "समग्रलक्षी समतोल, GDP विरुद्ध GVA संबंध, उत्पादन कर आणि डिफ्लेटर",
                                    nameEn: "Macroeconomic Aggregates, GDP-GVA Formulations, Product Taxes & Price Deflators",
                                    subtopics: [
                                        {
                                            id: "st_gb_me01_01_01",
                                            titleMr: "GVA (Gross Value Added - स्थूल मूल्यवर्धन): जानेवारी २०१५ मध्ये सांख्यिकी विभागाने (CSO/NSO) राष्ट्रीय उत्पन्नाच्या मोजमापात मूलभूत बदल केले; GVA हे पुरवठा बाजूने (Supply Side) प्रत्येक क्षेत्राचे (कृषी, उद्योग, सेवा) अर्थव्यवस्थेतील प्रत्यक्ष योगदान मोजते; GVA चे सूत्र: GVA = एकूण उत्पादन मूल्य (Value of Output) - मध्यवर्ती उपभोग खर्च (Intermediate Consumption)",
                                            titleEn: "Gross Value Added (GVA): Methodological overhaul in Jan 2015 by CSO/NSO; Measures supply-side sector contribution (Agri, Industry, Services); Formula: GVA = Gross Value of Output - Intermediate Consumption",
                                            chips: ["GVA स्थूल मूल्यवर्धन", "पुरवठा बाजू मोजमाप (Supply Side)", "जानेवारी २०१५ बदल", "मध्यवर्ती उपभोग वजावट"]
                                        },
                                        {
                                            id: "st_gb_me01_01_02",
                                            titleMr: "GDP आणि GVA मधील संबंध सूत्र (MPSC वारंवार विचारते): १) मूलभूत किमतींनुसार GVA (GVA at Basic Prices) = घटक खर्चानुसार GVA (GVA at Factor Cost) + उत्पादन कर (Production Taxes) - उत्पादन अनुदाने (Production Subsidies); २) बाजारभावानुसार GDP (GDP at Market Price) = मूलभूत किमतींनुसार GVA + वस्तू कर (Product Taxes) - वस्तू अनुदाने (Product Subsidies); आंतरराष्ट्रीय मानकांनुसार आता भारताचा अधिकृत विकास दर हा 'GDP at Market Price' मानला जातो",
                                            titleEn: "GDP-GVA Relationship Equations: 1) GVA at Basic Prices = GVA at Factor Cost + Production Taxes - Production Subsidies; 2) GDP at Market Price = GVA at Basic Prices + Product Taxes - Product Subsidies; Official headline growth pegged to GDP at Market Price",
                                            chips: ["GDP = GVA + वस्तू कर - अनुदाने", "मूलभूत किमती (Basic Prices)", "उत्पादन कर vs वस्तू कर", "बाजारभावानुसार GDP"]
                                        },
                                        {
                                            id: "st_gb_me01_01_03",
                                            titleMr: "GDP डिफ्लेटर (GDP Deflator) आणि वास्तव विकास दर: १) नाममात्र GDP (Nominal GDP - चालू किमतींनुसार) आणि वास्तव GDP (Real GDP - २०११-१२ च्या स्थिर किमतींनुसार); २) GDP डिफ्लेटर = (Nominal GDP / Real GDP) × १००; महागाई मोजण्याचे देशातील सर्वात व्यापक साधन (कारण यात अर्थव्यवस्थेतील सर्व वस्तू व सेवांचा समावेश असतो, जो WPI किंवा CPI पेक्षा विस्तृत आहे)",
                                            titleEn: "GDP Deflator & Real Growth: Nominal GDP (current prices) vs Real GDP (constant 2011-12 base prices); GDP Deflator = (Nominal GDP / Real GDP) * 100; Broadest measure of domestic inflation covering entire economic basket unlike CPI/WPI",
                                            chips: ["GDP डिफ्लेटर = (Nominal/Real) × १००", "सर्वसमावेशक महागाई माप", "वास्तव GDP (स्थिर किमती)", "नाममात्र GDP (चालू किमती)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय अर्थव्यवस्था (भाग १)", standard: "रंजन कोळंबे", chapterRef: "प्रकरण १: राष्ट्रीय उत्पन्न व GVA" },
                                        { book: "Central Statistics Office (CSO) Note", standard: "Ministry of Statistics (MoSPI)", chapterRef: "Changes in Methodology of National Accounts 2015" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_meco_c02",
                            code: "ME02",
                            section: "A",
                            slug: "planning-evolution-niti-aayog-and-sdg-india-index",
                            nameMr: "आर्थिक नियोजन: पंचवार्षिक योजनांचे मूल्यमापन, नीती आयोग व SDG इंडिया इंडेक्स",
                            nameEn: "Economic Planning: Five Year Plans Appraisal, NITI Aayog Framework & SDG India Index",
                            name: "नियोजन, नीती आयोग व SDG (Planning, NITI Aayog & SDGs)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_meco_c02",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_meco_c01",
                            nextChapterId: "gb_meco_c03",
                            metaDescriptionMr: "नियोजन मंडळ विरुद्ध नीती आयोग तुलना, नीती आयोगाची रचना (अध्यक्ष, उपाध्यक्ष, CEO), गव्हर्निंग कौन्सिल, ७ मार्गदर्शक आधारस्तंभ, ॲस्पिरेशनल डिस्ट्रिक्ट्स प्रोग्राम (ADP), आणि नीती आयोगाचा SDG इंडिया इंडेक्स.",
                            metaDescriptionEn: "In-depth review of Planning: Planning Commission vs NITI Aayog structural contrasts, NITI Aayog setup (Chair PM, Vice-Chair, CEO, Full-time members), Governing Council, 7 Pillars of Governance, Aspirational Districts Programme (ADP), and SDG India Index monitoring.",
                            notesJsonPath: "/data/notes/group_b/mains/economics/c02_planning_niti_sdg.json",
                            quizTag: "gb_meco_niti_01",
                            tags: ["Economic Planning", "NITI Aayog Architecture", "Governing Council", "SDG India Index", "Aspirational Districts ADP", "Cooperative Federalism", "High-Weightage"],
                            searchKeywords: ["planning commission vs niti aayog top down bottom up", "niti aayog governing council composition team india", "7 pillars of niti aayog effective governance", "aspirational districts programme adp composite ranking", "sdg india index niti aayog goals front runner states", "नियोजन मंडळ vs नीती आयोग तुलना", "नीती आयोग ७ आधारस्तंभ", "ॲस्पिरेशनल डिस्ट्रिक्ट्स प्रोग्राम ADP", "SDG इंडिया इंडेक्स मानांकन", "सहकारी संघराज्य"]
                        },
                        {
                            id: "gb_meco_c03",
                            code: "ME03",
                            section: "A",
                            slug: "poverty-dynamics-multidimensional-poverty-index-and-inequality",
                            nameMr: "दारिद्र्य गतिशास्त्र, बहुआयामी दारिद्र्य निर्देशांक (MPI) आणि उत्पन्न विषमता",
                            nameEn: "Poverty Dynamics: Tendulakar/Rangarajan Lines, Multidimensional Poverty Index (MPI) & Inequality",
                            name: "दारिद्र्य, MPI व विषमता (Poverty, MPI & Inequality)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_meco_c03",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_meco_c02",
                            nextChapterId: "gb_meco_c04",
                            metaDescriptionMr: "सुरेश तेंडुलकर व सी. रंगराजन दारिद्र्य रेषा निकष, नीती आयोगाचा राष्ट्रीय बहुआयामी दारिद्र्य निर्देशांक (National MPI - १२ निर्देशक, ३ मिती: आरोग्य, शिक्षण, राहणीमान), दारिद्र्यातील घसरण, आणि लॉरेन्झ वक्र व गिन्नी गुणांक.",
                            metaDescriptionEn: "In-depth review of Poverty & Inequality: Tendulkar & Rangarajan methodology critique, NITI Aayog's National Multidimensional Poverty Index (MPI - 12 indicators across Health, Education, Standard of living), Steep decline trends, and Lorenz Curve/Gini Coefficient mathematical metrics.",
                            notesJsonPath: "/data/notes/group_b/mains/economics/c03_poverty_mpi_inequality.json",
                            quizTag: "gb_meco_poverty_01",
                            tags: ["Poverty & Inequality", "Tendulkar Committee", "Rangarajan Committee", "National MPI NITI Aayog", "12 Indicators MPI", "Gini Coefficient Lorenz", "High-Weightage"],
                            searchKeywords: ["national multidimensional poverty index mpi niti aayog report", "mpi 3 dimensions 12 indicators health education standard of living", "tendulkar committee vs rangarajan committee poverty estimates", "lorenz curve gini coefficient formula income inequality", "poverty reduction trends maharashtra", "बहुआयामी दारिद्र्य निर्देशांक MPI नीती आयोग", "MPI १२ निर्देशक ३ परिमाणे", "तेंडुलकर vs रंगराजन दारिद्र्य रेषा", "लॉरेन्झ वक्र गिन्नी गुणांक", "दारिद्र्य घट आकडेवारी"]
                        },


                        // =========================================================================
                        // विभाग B — बँकिंग सुधारणा, मौद्रिक नीती व वित्तीय समावेशन (Banking & Money)
                        // =========================================================================
                        {
                            id: "gb_meco_c04",
                            code: "ME04",
                            section: "B",
                            slug: "banking-reforms-npa-resolution-and-insolvency-bankruptcy-code-ibc",
                            nameMr: "बँकिंग सुधारणा, अनुत्पादक मालमत्ता (NPA) व दिवाळखोरी संहिता (IBC २०१६)",
                            nameEn: "Banking Sector Overhaul: NPA Menace, Bad Banks (NARCL) & Insolvency and Bankruptcy Code (IBC 2016)",
                            name: "बँकिंग सुधारणा, NPA व IBC (Banking Reforms, NPA & IBC)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 5,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_meco_c04",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_meco_c03",
                            nextChapterId: "gb_meco_c05",
                            metaDescriptionMr: "अनुत्पादक मालमत्ता (NPA - ९० दिवसांचा नियम, Sub-standard, Doubtful, Loss assets), सरफेसी कायदा २००२ (SARFAESI), दिवाळखोरी आणि दिवाळखोर संहिता २०१६ (IBC - NCLT, IBBI), आणि बॅड बँक (NARCL-IDRCL).",
                            metaDescriptionEn: "In-depth review of Banking Stress & Resolution: Non-Performing Assets (NPA 90-day default criteria, Sub-standard, Doubtful, Loss classification), SARFAESI Act 2002, Insolvency and Bankruptcy Code 2016 (IBC - NCLT, CoC, IBBI 180-330 days resolution), and National Asset Reconstruction Company (NARCL Bad Bank).",
                            notesJsonPath: "/data/notes/group_b/mains/economics/c04_banking_npa_ibc.json",
                            quizTag: "gb_meco_npa_ibc_01",
                            tags: ["Banking Sector", "Non Performing Assets NPA", "SARFAESI Act 2002", "Insolvency Bankruptcy Code IBC 2016", "NCLT IBBI", "Bad Bank NARCL", "High-Weightage"],
                            searchKeywords: ["non performing assets npa 90 days default criteria classification", "sarfaesi act 2002 enforcement of security interest", "insolvency and bankruptcy code ibc 2016 nclt ibbi timeline", "committee of creditors coc resolution professional", "bad bank national asset reconstruction company limited narcl idrcl", "अनुत्पादक मालमत्ता NPA ९० दिवस नियम", "सरफेसी कायदा २००२", "दिवाळखोरी संहिता IBC २०१६", "NCLT लवाद", "बॅड बँक NARCL"]
                        },
                        {
                            id: "gb_meco_c05",
                            code: "ME05",
                            section: "B",
                            slug: "rbi-monetary-policy-framework-and-basel-accords-1-2-3",
                            nameMr: "RBI मौद्रिक धोरण चौकट (MPC) आणि आंतरराष्ट्रीय बॅसेल निकष (Basel I, II, III)",
                            nameEn: "RBI Monetary Policy Architecture (MPC) & Global Basel Accords (Basel I, II, III)",
                            name: "मौद्रिक धोरण व बॅसेल निकष (Monetary Policy & Basel Accords)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_meco_c05",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_meco_c04",
                            nextChapterId: "gb_meco_c06",
                            metaDescriptionMr: "लवचिक चलनवाढ लक्ष्यीकरण (FIT - ४% +/- २%), मौद्रिक धोरण समिती (MPC रचना व कार्यपद्धती), तरलता व्यवस्थापन (LAF, MSF, SDF - स्थायी ठेव सुविधा), आणि बॅसेल निकष (Basel I, II, III - भांडवल पर्याप्तता गुणोत्तर CAR/CRAR ९%, Tier 1 व Tier 2 भांडवल).",
                            metaDescriptionEn: "In-depth review of RBI Monetary Architecture: Flexible Inflation Targeting (FIT 4% +/- 2%), Monetary Policy Committee (MPC voting, 6 members), Liquidity Corridor (Repo, Standing Deposit Facility SDF, MSF), and Basel Accords (Basel I, II, III - Capital to Risk-Weighted Assets Ratio CRAR 9% in India, Tier-1 & Tier-2 capital).",
                            notesJsonPath: "/data/notes/group_b/mains/economics/c05_monetary_policy_basel.json",
                            quizTag: "gb_meco_basel_01",
                            tags: ["Banking & Monetary", "Monetary Policy Committee MPC", "Standing Deposit Facility SDF", "Flexible Inflation Targeting", "Basel III Norms", "CRAR Capital Adequacy", "High-Weightage"],
                            searchKeywords: ["flexible inflation targeting fit rbi act section 45zb", "monetary policy committee mpc 6 members governor casting vote", "standing deposit facility sdf collateral free liquidity absorption", "basel 3 norms capital adequacy ratio crar tier 1 tier 2", "bank for international settlements bis basel committee bcbs", "मौद्रिक धोरण समिती MPC कलम ४५ZB", "स्थायी ठेव सुविधा SDF", "बॅसेल ३ निकष Basel III", "भांडवल पर्याप्तता गुणोत्तर CRAR CAR", "BIS बँक स्वित्झर्लंड"]
                        },


                        // =========================================================================
                        // विभाग C — शासकीय वित्त, राजकोषीय धोरण व करप्रणाली (Fiscal Policy & Taxation)
                        // =========================================================================
                        {
                            id: "gb_meco_c06",
                            code: "ME06",
                            section: "C",
                            slug: "fiscal-policy-frbm-act-review-and-public-debt-management",
                            nameMr: "राजकोषीय धोरण, FRBM पुनरावलोकन (एन. के. सिंह समिती) व सार्वजनिक कर्ज व्यवस्थापन",
                            nameEn: "Fiscal Policy Dynamics, FRBM Review (N.K. Singh Committee) & Sovereign Debt Management",
                            name: "राजकोषीय नीती व FRBM कायदा (Fiscal Policy & FRBM Reforms)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_meco_c06",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_meco_c05",
                            nextChapterId: "gb_meco_c07",
                            metaDescriptionMr: "राजकोषीय धोरण (विस्तारवादी व संकोचकारी), अर्थसंकल्पीय तुटींची गणना (वित्तीय, महसुली, प्राथमिक), FRBM पुनरावलोकन समिती (एन. के. सिंह २०१६ - ६०% कर्ज-जीडीपी लक्ष्य, एस्केप क्लॉज Escape Clause), आणि भारताचे अंतर्गत व बाह्य कर्ज.",
                            metaDescriptionEn: "In-depth review of Fiscal Policy: Expansionary vs Contractionary fiscal tools, Deficit mathematics (Fiscal, Revenue, Effective Revenue, Primary), N.K. Singh FRBM Review Committee 2016 (Debt-to-GDP anchor 60% total - 40% Centre, 20% States; Escape Clause triggers), and Public Debt dynamics.",
                            notesJsonPath: "/data/notes/group_b/mains/economics/c06_fiscal_policy_frbm.json",
                            quizTag: "gb_meco_frbm_01",
                            tags: ["Public Finance", "Fiscal Policy", "Deficit Financing", "FRBM Act Review", "NK Singh Committee 2016", "Debt to GDP Ratio 60", "Escape Clause", "High-Weightage"],
                            searchKeywords: ["fiscal policy tools expansionary contractionary", "fiscal deficit calculation revenue deficit primary deficit", "nk singh committee frbm review 2016 recommendations", "debt to gdp ratio 60 percent 40 centre 20 state", "frbm escape clause war national calamity structural reforms", "public debt management internal external debt", "राजकोषीय धोरण वित्तीय तूट", "FRBM पुनरावलोकन एन के सिंह समिती २०१६", "कर्ज-जीडीपी गुणोत्तर ६०%", "एस्केप क्लॉज Escape Clause", "सार्वजनिक कर्ज व्यवस्थापन"]
                        },
                        {
                            id: "gb_meco_c07",
                            code: "ME07",
                            section: "C",
                            slug: "taxation-reforms-gst-council-and-fifteenth-finance-commission",
                            nameMr: "कररचना सुधारणा, GST परिषदेची कार्यपद्धती आणि १५ वा वित्त आयोग (एन. के. सिंह)",
                            nameEn: "Tax Reforms, GST Federal Disputes, Cesses/Surcharges & 15th Finance Commission",
                            name: "कररचना, GST व १५ वा वित्त आयोग (Taxation, GST & 15th FC)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 5,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_meco_c07",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_meco_c06",
                            nextChapterId: "gb_meco_c08",
                            metaDescriptionMr: "थेट व अप्रत्यक्ष कर सुधारणा, उपकर व अधिभार (Cess & Surcharge - डिव्हिजिबल पूलमधून वगळणे), GST विवाद व भरपाई उपकर समाप्ती, १५ वा वित्त आयोग (अध्यक्ष एन. के. सिंह - उभी विभागणी ४१%, २०११ ची जनगणना निकष, ५ वर्षे कालावधी २०२०-२६).",
                            metaDescriptionEn: "In-depth review of Taxation & Inter-governmental Transfers: Direct/Indirect reforms, Cess & Surcharge controversy (Excluded from divisible pool), GST compensation cessation, 15th Finance Commission under N.K. Singh (Vertical devolution 41%, Horizontal formula using 2011 Census, 2020-26 recommendations).",
                            notesJsonPath: "/data/notes/group_b/mains/economics/c07_taxation_gst_15fc.json",
                            quizTag: "gb_meco_tax_fc_01",
                            tags: ["Public Finance", "Tax Reforms", "GST Council Dynamics", "Cess and Surcharge", "15th Finance Commission NK Singh", "Vertical Devolution 41", "High-Weightage"],
                            searchKeywords: ["15th finance commission recommendations nk singh report", "vertical devolution 41 percent states share jammu kashmir 1 percent", "horizontal devolution criteria 2011 census 15 percent", "cess and surcharge divisible pool center state friction", "gst compensation cess expiry impact on state finances", "१५ वा वित्त आयोग शिफारशी एन के सिंह", "उभी विभागणी ४१ टक्के", "आडवी विभागणी २०११ जनगणना निकष", "उपकर आणि अधिभार Cess Surcharge वाद", "GST भरपाई उपकर"]
                        },


                        // =========================================================================
                        // विभाग D — परकीय व्यापार, व्यवहारतोल व बहुपक्षीय संस्था (External Sector)
                        // =========================================================================
                        {
                            id: "gb_meco_c08",
                            code: "ME08",
                            section: "D",
                            slug: "balance-of-payments-cad-management-and-foreign-investments",
                            nameMr: "व्यवहारतोल गतिशास्त्र, चालू खात्यावरील तूट (CAD) व परकीय भांडवल प्रवाह (FDI/FPI)",
                            nameEn: "External Sector: Balance of Payments (BoP), CAD Management, Rupee Volatility & FDI/FPI",
                            name: "व्यवहारतोल, CAD व परकीय गुंतवणूक (BoP, CAD & Foreign Capital)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_meco_c08",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_meco_c07",
                            nextChapterId: "gb_meco_c09",
                            metaDescriptionMr: "व्यवहारतोल (BoP) खात्यांची रचना, चालू खात्यावरील तूट (CAD - टिकाऊ मर्यादा GDP च्या २.५%), रुपयाचे अवमूल्यन विरुद्ध घसरण (Devaluation vs Depreciation), परकीय चलन साठा (Forex Reserves), आणि विदेशी गुंतवणूक नियमन.",
                            metaDescriptionEn: "In-depth review of External Sector: BoP double-entry framework, Current Account Deficit (CAD threshold ~2.5% of GDP), Currency mechanics (Official Devaluation vs Market Depreciation), Foreign Exchange Reserves composition (Gold, SDR, RTP, Foreign Currency Assets), and FDI/FPI regulatory thresholds.",
                            notesJsonPath: "/data/notes/group_b/mains/economics/c08_bop_cad_fdi.json",
                            quizTag: "gb_meco_bop_01",
                            tags: ["External Sector", "Balance of Payments BoP", "Current Account Deficit CAD", "Forex Reserves Composition", "Devaluation vs Depreciation", "FDI Cap Rules", "High-Weightage"],
                            searchKeywords: ["balance of payments bop current capital account rbi", "current account deficit cad sustainable threshold 2.5 percent gdp", "devaluation of currency vs depreciation market forces", "foreign exchange reserves components fca gold sdr rtp", "foreign direct investment fdi automatic vs government route", "व्यवहारतोल BoP चालू व भांडवली खाते", "चालू खात्यावरील तूट CAD", "रुपयाचे अवमूल्यन विरुद्ध घसरण", "परकीय चलन साठा घटक", "FDI थेट परकीय गुंतवणूक मार्ग"]
                        },
                        {
                            id: "gb_meco_c09",
                            code: "ME09",
                            section: "D",
                            slug: "wto-multilateral-trade-agreements-and-indian-interests",
                            nameMr: "जागतिक व्यापार संघटना (WTO), बहुपक्षीय करार आणि भारताचे कृषी/बौद्धिक हितसंबंध",
                            nameEn: "WTO Multilateralism: Agreement on Agriculture (AoA), TRIPS, TRIMS & Dispute Resolution",
                            name: "WTO करार व भारताचे हितसंबंध (WTO, Agriculture & TRIPS)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_meco_c09",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_meco_c08",
                            nextChapterId: "gb_meco_c10",
                            metaDescriptionMr: "WTO रचना व मंत्रिपरीषद (MC12, MC13 अबुधाबी), कृषी करार (AoA - अंबर, निळा, हिरवा बॉक्स), अन्न सुरक्षेसाठी शांतता कलम (Peace Clause - बाली परिषद २०१३), TRIPS (पेटंट, भौगोलिक निर्देशांक GI), आणि अपीलीय मंडळ संकट.",
                            metaDescriptionEn: "In-depth review of WTO Multilateralism: Ministerial Conferences (MC12, MC13 Abu Dhabi), Agreement on Agriculture (AoA subsidy boxes: Amber, Blue, Green), Bali Peace Clause 2013 on Public Stockholding for Food Security, TRIPS patent flexibility (Compulsory Licensing), and Appellate Body crisis.",
                            notesJsonPath: "/data/notes/group_b/mains/economics/c09_wto_agreements.json",
                            quizTag: "gb_meco_wto_01",
                            tags: ["External Sector", "WTO Multilateralism", "Agreement on Agriculture AoA", "Bali Peace Clause Food Security", "TRIPS Compulsory Licensing", "WTO Subsidy Boxes", "High-Weightage"],
                            searchKeywords: ["wto agreement on agriculture aoa amber blue green box", "bali ministerial conference 2013 peace clause public stockholding", "trips intellectual property rights compulsory licensing patents", "wto dispute settlement mechanism appellate body quorum crisis", "wto mc13 abu dhabi fisheries subsidies e-commerce moratorium", "जागतिक व्यापार संघटना WTO कृषी करार", "सबसिडी बॉक्सेस अंबर ब्लू ग्रीन", "बाली शांतता कलम Peace Clause अन्न सुरक्षा", "TRIPS बौद्धिक संपदा पेटंट", "WTO विवाद निवारण लवाद"]
                        },


                        // =========================================================================
                        // विभाग E — कृषी, अन्न सुरक्षा व ग्रामीण वित्तपुरवठा (Agrarian Economy)
                        // =========================================================================
                        {
                            id: "gb_meco_c10",
                            code: "ME10",
                            section: "E",
                            slug: "agricultural-credit-nabard-and-priority-sector-lending",
                            nameMr: "कृषी पतपुरवठा, नाबार्ड (NABARD) आणि अग्रक्रम क्षेत्र कर्जवाटप (PSL)",
                            nameEn: "Agricultural Credit Architecture: Rural Financial Institutions, NABARD & PSL Mandates",
                            name: "कृषी पतपुरवठा व नाबार्ड (Agri-Credit, NABARD & PSL)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_meco_c10",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_meco_c09",
                            nextChapterId: "gb_meco_c11",
                            metaDescriptionMr: "ग्रामीण पतपुरवठा रचना, नाबार्ड (१२ जुलै १९८२ - शिवरामन समिती), RIDF (ग्रामीण पायाभूत सुविधा विकास निधी), अग्रक्रम क्षेत्र कर्जवाटप (PSL - बँकांना ४०% अनिवार्य कर्जवाटप, कृषी १८%), आणि किसान क्रेडिट कार्ड (KCC).",
                            metaDescriptionEn: "In-depth review of Rural Financial Infrastructure: Multi-agency credit approach, NABARD statutory mandate (12 July 1982 via B. Sivaraman panel), Rural Infrastructure Development Fund (RIDF), Priority Sector Lending (PSL 40% target, 18% agriculture sub-target), and Kisan Credit Card (KCC) scheme.",
                            notesJsonPath: "/data/notes/group_b/mains/economics/c10_agri_credit_nabard.json",
                            quizTag: "gb_meco_agri_credit_01",
                            tags: ["Agrarian Economy", "NABARD Act 1981", "Sivaraman Committee 1982", "Priority Sector Lending PSL 40", "Rural Infrastructure RIDF", "Kisan Credit Card KCC", "High-Weightage"],
                            searchKeywords: ["nabard establishment 12 july 1982 sivaraman committee", "priority sector lending psl targets domestic banks 40 percent", "psl agriculture sub-target 18 percent small marginal farmers", "rural infrastructure development fund ridf nabard", "kisan credit card kcc scheme rbi nabard interest subvention", "नाबार्ड स्थापना १२ जुलै १९८२ शिवरामन समिती", "अग्रक्रम क्षेत्र कर्जवाटप PSL ४० टक्के", "PSL कृषी १८ टक्के उप-उद्दिष्ट", "RIDF ग्रामीण पायाभूत सुविधा निधी", "किसान क्रेडिट कार्ड KCC योजना"]
                        },
                        {
                            id: "gb_meco_c11",
                            code: "ME11",
                            section: "E",
                            slug: "food-security-procurement-pricing-and-public-distribution-reforms",
                            nameMr: "अन्न सुरक्षा, MSP किंमत निर्धारण, बफर स्टॉक व PDS मधील आधुनिक सुधारणा",
                            nameEn: "Food Security Economics: CACP Price Support (MSP), Buffer Stocks & Targeted PDS Reforms",
                            name: "अन्न सुरक्षा व हमीभाव (Food Security, MSP & TPDS)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_meco_c11",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_meco_c10",
                            nextChapterId: "gb_meco_c12",
                            metaDescriptionMr: "किमान आधारभूत किंमत निर्धारण (CACP सूत्रे A2, A2+FL, C2), शांता कुमार समिती अहवाल २०१५ (FCI पुनर्रचना व PDS सुधारणा), वन नेशन वन रेशन कार्ड (ONORC), आणि अन्न सुरक्षा अनुदानांचे अर्थकारण.",
                            metaDescriptionEn: "In-depth review of Food Security Economics: CACP pricing methodologies (Cost A2, A2+FL, C2 comprehensive cost), Shanta Kumar High-Level Committee Report 2015 on FCI restructuring, One Nation One Ration Card (ONORC) portability, and Food Subsidy fiscal burden.",
                            notesJsonPath: "/data/notes/group_b/mains/economics/c11_food_security_msp.json",
                            quizTag: "gb_meco_food_sec_01",
                            tags: ["Agrarian Economy", "MSP Determination CACP", "C2 Cost Formula", "Shanta Kumar Committee 2015", "ONORC One Nation One Ration Card", "Food Subsidy Fiscal", "High-Weightage"],
                            searchKeywords: ["commission for agricultural costs and prices cacp msp formula a2 fl c2", "shanta kumar committee recommendations fci restructuring 2015", "one nation one ration card onorc migrant portability", "food subsidy bill economic cost fci issues", "किमान आधारभूत किंमत CACP सूत्र C2", "शांता कुमार समिती अहवाल २०१५ FCI", "वन नेशन वन रेशन कार्ड ONORC", "अन्न सबसिडी आर्थिक बोजा"]
                        },


                        // =========================================================================
                        // विभाग F — महाराष्ट्र अर्थव्यवस्था, सहकार व मास्टर रिव्हिजन (Maharashtra Special)
                        // =========================================================================
                        {
                            id: "gb_meco_c12",
                            code: "ME12",
                            section: "F",
                            slug: "maharashtra-state-finances-fiscal-indicators-and-economic-survey",
                            nameMr: "महाराष्ट्राचे सार्वजनिक वित्त, राजकोषीय निर्देशांक व चालू आर्थिक पाहणी",
                            nameEn: "Maharashtra State Finances: Fiscal Deficit Trends, Revenue Buoyancy & Economic Survey Review",
                            name: "महाराष्ट्राचे शासकीय वित्त (Maharashtra State Public Finance)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_meco_c12",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_meco_c11",
                            nextChapterId: "gb_meco_c13",
                            metaDescriptionMr: "महाराष्ट्राचा GSDP वाढीचा आलेख, महसुली जमा व खर्च, राजकोषीय तूट मर्यादा (राज्य FRBM कायदा २००५ - ३% मर्यादा), सार्वजनिक कर्जाचा बोजा, आणि महाराष्ट्राच्या आर्थिक पाहणी अहवालातील चालू सांख्यिकी.",
                            metaDescriptionEn: "In-depth review of Maharashtra Public Finance: Gross State Domestic Product (GSDP) sectoral composition, State Revenue Receipts vs Expenditure, Maharashtra Fiscal Responsibility and Budget Management Act 2005 (3% fiscal deficit limit), Sovereign Debt burden, and Latest Economic Survey indicators.",
                            notesJsonPath: "/data/notes/group_b/mains/economics/c12_mh_state_finances.json",
                            quizTag: "gb_meco_mh_finances_01",
                            tags: ["Maharashtra Economy", "State Finances", "Maharashtra FRBM Act 2005", "GSDP Growth Trajectory", "State Debt Burden", "Economic Survey Analysis", "High-Weightage"],
                            searchKeywords: ["maharashtra state finances revenue receipts expenditure", "maharashtra fiscal responsibility and budget management act 2005 3 percent", "gsdp growth rate sectoral share services industry agriculture", "public debt of maharashtra debt to gsdp ratio", "economic survey of maharashtra latest statistics", "महाराष्ट्र राज्य वित्त महसुली जमा खर्च", "महाराष्ट्र FRBM कायदा २००५ तूट मर्यादा ३%", "GSDP वृद्धी दर सेवा उद्योग शेती वाटा", "महाराष्ट्राचा सार्वजनिक कर्ज बोजा", "आर्थिक पाहणी अहवाल सांख्यिकी"]
                        },
                        {
                            id: "gb_meco_c13",
                            code: "ME13",
                            section: "F",
                            slug: "cooperative-banking-credit-structure-and-amendments-in-maharashtra",
                            nameMr: "सहकारी बँकिंग, नागरी सहकारी बँका (UCB) नियमन आणि ९७ वी घटनादुरुस्ती",
                            nameEn: "Cooperative Banking Structure: DCCB, MSCB, Urban Co-op Banks (UCB) & 97th Constitutional Amendment",
                            name: "सहकारी बँकिंग व ९७ वी घटनादुरुस्ती (Cooperative Banking & 97th Amendment)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_meco_c13",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_meco_c12",
                            nextChapterId: "gb_meco_c14",
                            metaDescriptionMr: "महाराष्ट्रातील त्रिस्तरीय सहकारी पतसंस्था रचना (PACS, DCCB, MSCB), नागरी सहकारी बँका (UCB - RBI चे दुहेरी नियंत्रण सुधारणा BR Act २०२०), ९७ वी घटनादुरुस्ती कायदा २०११ (कलम १९(१)(c), भाग ९B), आणि सर्वोच्च न्यायालयाचा निकाल.",
                            metaDescriptionEn: "In-depth review of Cooperative Banking: 3-tier Rural Credit Architecture (PACS, DCCB, MSC Bank), Urban Cooperative Banks (UCBs - Dual regulation resolved via Banking Regulation Amendment Act 2020 giving RBI supervisory powers), 97th Constitutional Amendment 2011 (Part IXB, Art 19(1)(c), Art 43B), and Supreme Court partial strike-down.",
                            notesJsonPath: "/data/notes/group_b/mains/economics/c13_cooperative_banking_97th.json",
                            quizTag: "gb_meco_coop_bank_01",
                            tags: ["Maharashtra Economy", "Cooperative Banking Structure", "Urban Cooperative Banks UCBs", "Banking Regulation Amendment 2020", "97th Constitutional Amendment", "Part IXB Cooperatives", "High-Weightage"],
                            searchKeywords: ["97th constitutional amendment act 2011 cooperatives part 9b supreme court verdict", "urban cooperative banks ucbs dual regulation rbi banking regulation act 2020", "three tier cooperative credit structure pacs dccb mscb", "maharashtra cooperative societies act 1960 banking provisions", "article 19 1 c right to form cooperative societies article 43b", "९७ वी घटनादुरुस्ती कायदा २०११ सहकार भाग ९B निकाल", "नागरी सहकारी बँका UCBs दुहेरी नियंत्रण RBI सुधारणा", "त्रिस्तरीय सहकारी पतसंस्था रचना PACS DCCB", "महाराष्ट्र सहकारी संस्था कायदा १९६०", "कलम ४३B सहकार प्रोत्साहन"]
                        },
                        {
                            id: "gb_meco_c14",
                            code: "ME14",
                            section: "F",
                            slug: "regional-imbalance-in-maharashtra-and-dr-vijay-kelkar-committee",
                            nameMr: "महाराष्ट्रातील प्रादेशिक असमतोल आणि डॉ. विजय केळकर उच्चस्तरीय समिती अहवाल (२०१३)",
                            nameEn: "Regional Disparities in Maharashtra: Backlog Politics & Dr. Vijay Kelkar Committee Report (2013)",
                            name: "प्रादेशिक असमतोल व केळकर समिती (Regional Imbalance & Kelkar Committee)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_meco_c14",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_meco_c13",
                            nextChapterId: "gb_meco_c15",
                            metaDescriptionMr: "विदर्भ व मराठवाड्याचा वैधानिक विकास अनुशेष (Backlog), व्ही. एम. दांडेकर समिती अहवाल १९८४ (सिंचन अनुशेष), डॉ. विजय केळकर समिती अहवाल २०१३ (महत्त्वाच्या शिफारशी: सिंचन, निधी वाटप सूत्र, मानव विकास निर्देशांक आधारित निधी वाटप).",
                            metaDescriptionEn: "In-depth review of Regional Disparities: Historical backlog of Vidarbha and Marathwada, V.M. Dandekar Fact-Finding Committee 1984 (Irrigation physical backlog), Dr. Vijay Kelkar High-Level Committee Report 2013 (Critical appraisal, moving away from Dandekar formula to Human Development Index and water security based allocations).",
                            notesJsonPath: "/data/notes/group_b/mains/economics/c14_regional_imbalance_kelkar.json",
                            quizTag: "gb_meco_kelkar_01",
                            tags: ["Maharashtra Economy", "Regional Imbalance", "Dr Vijay Kelkar Committee 2013", "VM Dandekar Committee 1984", "Vidarbha Marathwada Backlog", "Statutory Development Boards", "High-Weightage"],
                            searchKeywords: ["dr vijay kelkar committee report 2013 regional imbalance balanced development maharashtra", "vm dandekar committee 1984 irrigation backlog vidarbha marathwada", "statutory development boards article 371 2 governor directives", "human development index based fund allocation kelkar", "प्रादेशिक असमतोल महाराष्ट्र", "डॉ विजय केळकर समिती अहवाल २०१३ शिफारशी", "व्ही एम दांडेकर समिती १९८४ सिंचन अनुशेष", "विदर्भ मराठवाडा विकास मंडळे कलम ३७१(२)", "HDI आधारित निधी वाटप सूत्र"]
                        },
                        {
                            id: "gb_meco_c15",
                            code: "ME15",
                            section: "F",
                            slug: "money-capital-markets-and-sebi-regulatory-supervision",
                            nameMr: "नाणेबाजार, भांडवल बाजार आणि सेबीची (SEBI) गुंतवणूकदार संरक्षण चौकट",
                            nameEn: "Financial System: Money Market, Stock Exchanges & SEBI's Investor Protection Architecture",
                            name: "वित्तीय बाजार व सेबी नियमन (Financial Markets & SEBI)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_meco_c15",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_meco_c14",
                            nextChapterId: "gb_meco_c16",
                            metaDescriptionMr: "नाणेबाजार साधने (T-Bills, Commercial Paper, CD, Call Money), प्राथमिक व दुय्यम भांडवल बाजार (IPO, FPO, Offer for Sale), BSE व NSE, आणि सेबी (SEBI कायदा १९९२ - इनसायडर ट्रेडिंग नियंत्रण, म्युच्युअल फंड नियमन).",
                            metaDescriptionEn: "In-depth review of Indian Financial Architecture: Money Market liquidity tools (Treasury Bills 91/182/364 days, CPs, CDs, Call/Notice money), Capital Market instruments (Equities, Debentures, IPOs, OFS), Stock Exchanges (BSE, NSE), and SEBI Act 1992 regulatory surveillance (Insider trading deterrence, Mutual Fund code).",
                            notesJsonPath: "/data/notes/group_b/mains/economics/c15_financial_markets_sebi.json",
                            quizTag: "gb_meco_sebi_01",
                            tags: ["Financial Markets", "Money Market Instruments", "Capital Market IPO", "BSE Sensex NSE Nifty", "SEBI Act 1992", "Insider Trading Prohibition", "High-Weightage"],
                            searchKeywords: ["money market vs capital market instruments differences", "treasury bills t bills rbi 91 182 364 days", "securities and exchange board of india sebi act 1992 powers", "insider trading mutual funds regulation sebi", "primary market ipo fpo secondary market stock exchange", "नाणेबाजार साधने ट्रेझरी बिल्स T-Bills", "भांडवल बाजार IPO", "सेबी SEBI कायदा १९९२ अधिकार", "इनसायडर ट्रेडिंग नियंत्रण", "मुंबई शेअर बाजार BSE NSE"]
                        },
                        {
                            id: "gb_meco_c16",
                            code: "ME16",
                            section: "F",
                            slug: "mains-economics-master-revision-concepts-and-pyq-trends",
                            nameMr: "मुख्य अर्थव्यवस्था मास्टर रिव्हिजन: संकल्पना सूत्रे, आयोग शिफारशी व १० वर्षांचे PYQ विश्लेषण",
                            nameEn: "Mains Economics Master Revision: Theoretical Formulae, Committee Compendium & 10-Year PYQ Trends",
                            name: "अर्थव्यवस्था मास्टर रिव्हिजन (Master Revision: Formulae & PYQs)",
                            category: "REVISION",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_meco_c16",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_meco_c15",
                            nextChapterId: null,
                            metaDescriptionMr: "मुख्य परीक्षा पेपर २ मधील अर्थव्यवस्थेच्या १५ ते २० प्रश्नांची (३० ते ४० गुण) अचूक तयारी, सर्व आर्थिक सूत्रे (GVA, Fiscal Deficit, CRAR, BoP), समित्यांची उद्दिष्टे, आणि २०१२ ते २०२५ मधील MPSC मुख्य परीक्षा PYQ ट्रेंड्स.",
                            metaDescriptionEn: "Master consolidation module: Strategy for scoring 32+ marks in Mains Paper 2 Economics (15-20 questions = 30-40 marks), Mathematical & conceptual formula bank (GVA, Deficits, CRAR, BoP), Committee matrix (Narasimham, Urjit Patel, NK Singh, Kelkar), and 10-year MPSC Group B Mains analytical trends.",
                            notesJsonPath: "/data/notes/group_b/mains/economics/c16_master_revision.json",
                            quizTag: "gb_meco_revision_01",
                            tags: ["Revision", "Mains Paper 2 Strategy", "30 to 40 Marks Target", "Economics Formulas Cheatsheet", "Committee Matrix", "PYQ Trends 2012 to 2025", "High-Weightage"],
                            searchKeywords: ["mpsc group b mains paper 2 economics 20 questions strategy", "economics formulas gva fiscal deficit primary deficit cheatsheet", "committees economics narasimham urjit patel nk singh kelkar", "mpsc mains economics pyq trend analysis 2012 to 2025", "multi statement economics elimination techniques", "मुख्य परीक्षा पेपर २ अर्थव्यवस्था रणनीती", "३० ते ४० गुण लक्ष्य अर्थशास्त्र", "सर्व आर्थिक सूत्रे तक्ता GVA तूट", "आर्थिक समित्या सारांश", "१० वर्षांचे PYQ विश्लेषण"]
                        }
                    ]
                },


                {
                    id: "gb_mains_science_tech",
                    code: "M_SCI_TECH",
                    slug: "general-science-and-applied-technology-mains",
                    nameMr: "सामान्य विज्ञान व आधुनिक तंत्रज्ञान (सुदूर संवेदन, स्पेस, आयसीटी व बायोटेक)",
                    nameEn: "General Science & Applied Technology (Remote Sensing, Space, ICT & Biotechnology)",
                    name: "विज्ञान व तंत्रज्ञान (Science & Technology - Mains)",
                    officialScope: "Applied Science & Modern Technology: Remote Sensing (Physics of RS, Sensors, Resolutions, Aerial Platforms), Space Technology (ISRO Launch Vehicles, Deep Space Probes, Satellite Applications), Biotechnology (rDNA Technology, Transgenic Crops, Gene Editing, Stem Cells), Information & Communication Technology (5G/6G, AI, IoT, Blockchain, Supercomputing, Cyber Security), Nanotechnology, and Nuclear Energy for MPSC Group B Mains Paper 2",
                    version: "1.0",
                    verifiedDate: "2026-10-28",
                    notesJsonBaseDir: "/data/notes/group_b/mains/science_tech/",


                    // UI Theme & Theming Metadata
                    theme: {
                        primaryColor: "#0891b2",        // Cyan-Teal / Advanced Technology Theme
                        bgColor: "#ecfeff",
                        iconClass: "ri-cpu-line"
                    },


                    // अभ्यास व डॅशबोर्ड ॲनालिटिक्स मेट्रिक्स
                    metrics: {
                        totalChapters: 14,
                        totalEstimatedHours: 48,
                        avgQuestionsInMains: 12,
                        targetMarks: 24,
                        weightageRange: "10-15 Questions / 20-30 Marks"
                    },


                    // विषय पातळीवरील स्मार्ट टॅग्ज
                    subjectTags: [
                        "Core-Mains",
                        "Mains-Paper-2",
                        "Applied-Science",
                        "High-Tech-Oriented",
                        "High-Weightage",
                        "ISRO-Biotech-ICT"
                    ],


                    filterCategory: "GS",
                    searchKeywords: [
                        "mpsc group b mains science and technology syllabus", "remote sensing physics sensors resolution spatial spectral",
                        "space technology isro pslv gslv lvm3 cryo sslv", "biotechnology crispr cas9 gene editing bt cotton cloning",
                        "information communication technology ict ai iot blockchain 5g", "supercomputers param airawat supercomputing mission",
                        "nanotechnology carbon nanotubes graphene applications", "nuclear energy india three stage nuclear power program",
                        "विज्ञान व तंत्रज्ञान मुख्य परीक्षा", "सुदूर संवेदन रिमोट सेन्सिंग", "इस्रो अंतराळ तंत्रज्ञान PSLV LVM3", "जैवतंत्रज्ञान ट्रान्सजेनिक पिके CRISPR", "माहिती संप्रेषण तंत्रज्ञान AI ब्लॉकचेन", "सुपरकॉम्प्युटर ऐरावत परम", "नॅनोतंत्रज्ञान व ३-टप्प्यांचा अणुकार्यक्रम"
                    ],


                    referenceSources: [
                        {
                            name: "MPSC Non-Gazetted Group B Combined Mains Syllabus",
                            role: "अधिकृत परीक्षा-संदर्भ",
                            url: "https://mpsc.gov.in"
                        },
                        {
                            name: "विज्ञान आणि तंत्रज्ञान - डॉ. सचिन भस्के",
                            role: "MPSC मुख्य परीक्षेसाठी तंत्रज्ञान घटकांचा सर्वसमावेशक संदर्भ"
                        },
                        {
                            name: "सायन्स अँड टेक्नॉलॉजी - कोळंबे / युनिक अकॅडमी",
                            role: "इस्रो, जैवतंत्रज्ञान व आयसीटी सखोल विश्लेषण"
                        },
                        {
                            name: "इस्रो (ISRO) अधिकृत वार्षिक अहवाल व मिशन दस्तऐवज",
                            role: "अंतराळ तंत्रज्ञान, रॉकेट्स व उपग्रह अधिकृत डेटा"
                        },
                        {
                            name: "डिपार्टमेंट ऑफ बायोटेक्नॉलॉजी (DBT) व MeitY अहवाल",
                            role: "जैवतंत्रज्ञान व डिजिटल तंत्रज्ञान मानके"
                        }
                    ],


                    chapters: [
                        // =========================================================================
                        // विभाग A — सुदूर संवेदन व भौगोलिक माहिती प्रणाली (Remote Sensing & GIS)
                        // =========================================================================
                        {
                            id: "gb_mtech_c01",
                            code: "MT01",
                            section: "A",
                            slug: "remote-sensing-principles-sensors-and-resolutions",
                            nameMr: "सुदूर संवेदन (Remote Sensing): भौतिक तत्त्वज्ञान, सेन्सर्स व रेझोल्युशनचे प्रकार",
                            nameEn: "Remote Sensing: Physical Principles, Sensor Dynamics & Resolution Metrics",
                            name: "सुदूर संवेदन तत्त्वज्ञान व सेन्सर्स (Remote Sensing Principles)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mtech_c01",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: null,
                            nextChapterId: "gb_mtech_c02",
                            metaDescriptionMr: "सुदूर संवेदन भौतिकी (विद्युतचुंबकीय स्पेक्ट्रम, वातावरणीय खिडक्या Atmospheric Windows), ॲक्टिव्ह व पॅसिव्ह सेन्सर्स (RADAR, LiDAR, Multi-spectral), आणि रेझोल्युशनचे ४ प्रकार (Spatial, Spectral, Radiometric, Temporal).",
                            metaDescriptionEn: "In-depth review of Remote Sensing Physics: Electromagnetic radiation, Atmospheric windows, Sensor typologies (Active RADAR/LiDAR vs Passive Optical/Infrared), and the 4 Resolution Metrics (Spatial, Spectral, Radiometric bit-depth, Temporal revisit rate).",
                            notesJsonPath: "/data/notes/group_b/mains/science_tech/c01_remote_sensing_physics.json",
                            quizTag: "gb_mtech_rs_01",
                            tags: ["Remote Sensing", "EM Spectrum", "Atmospheric Windows", "Four Resolutions", "Spatial Spectral Radiometric Temporal", "Active Passive Sensors", "High-Weightage"],
                            searchKeywords: ["remote sensing physical principles em spectrum atmospheric windows", "sensors active passive radar lidar thermal infrared", "four resolutions spatial spectral radiometric temporal", "false colour composite fcc true colour composite", "isro nrsc hyderabad national remote sensing centre", "सुदूर संवेदन भौतिक तत्त्वे", "वातावरणीय खिडक्या", "४ रेझोल्युशन प्रकार", "ॲक्टिव्ह व पॅसिव्ह सेन्सर्स", "राष्ट्रीय सुदूर संवेदन केंद्र NRSC हैदराबाद"],
                            topics: [
                                {
                                    id: "top_gb_mt01_01",
                                    nameMr: "विद्युतचुंबकीय प्रारण, वातावरणीय खिडक्या, ४ रेझोल्युशन आणि सेन्सर्स तंत्रज्ञान",
                                    nameEn: "Electromagnetic Radiation, Atmospheric Windows, 4 Resolution Metrics & Sensor Mechanics",
                                    subtopics: [
                                        {
                                            id: "st_gb_mt01_01_01",
                                            titleMr: "सुदूर संवेदन भौतिकी व वातावरणीय खिडक्या (Atmospheric Windows): ऊर्जा स्रोत (सूर्य); विद्युतचुंबकीय प्रारण (EMR: दृश्य प्रकाश ०.४ ते ०.७ µm, अवरक्त/Infrared, सूक्ष्मतरंग/Microwave); वातावरणातील शोषण व विकिरण; वातावरणीय खिडक्या: वातावरणातील वायू ज्या विशिष्ट तरंगलांबीच्या प्रारणांचे शोषण न करता त्यांना पृथ्वीपर्यंत आणि उपग्रहापर्यंत आरपार जाऊ देतात, त्या पट्ट्यांना 'वातावरणीय खिडक्या' म्हणतात (उदा. दृश्य प्रकाश, निअर-इन्फ्रारेड व मायक्रोव्हेव्ह पट्टा)",
                                            titleEn: "Remote Sensing Physics & Atmospheric Windows: EMR Spectrum (Visible 0.4-0.7 um, Infrared, Microwave); Atmospheric absorption & scattering (Rayleigh, Mie, Non-selective); Atmospheric Windows: Specific spectral bands where atmosphere is transparent and allows radiation to transmit freely without major attenuation",
                                            chips: ["EMR विद्युतचुंबकीय स्पेक्ट्रम", "वातावरणीय खिडक्या (Atmospheric Windows)", "इन्फ्रारेड व मायक्रोव्हेव्ह", "परावर्तित ऊर्जा स्वाक्षरी"]
                                        },
                                        {
                                            id: "st_gb_mt01_01_02",
                                            titleMr: "सेन्सर्सचे वर्गीकरण: १) पॅसिव्ह सेन्सर्स (Passive Sensors: स्वतःचा प्रकाश नसतो; सूर्याच्या परावर्तित प्रकाशावर किंवा वस्तूने उत्सर्जित केलेल्या उष्णतेवर कार्य करतात - उदा. मल्टिस्पेक्ट्रल कॅमेरे, थर्मल स्कॅनर; केवळ दिवसा कार्यक्षम); २) ॲक्टिव्ह सेन्सर्स (Active Sensors: स्वतःचे प्रारण उत्सर्जित करून परावर्तित लहरी मोजतात - उदा. RADAR, LiDAR, सोनार; ढग, पाऊस व रात्रीच्या अंधारातही अखंड कार्यरत)",
                                            titleEn: "Sensor Typology: Passive (Detects natural reflected sunlight or emitted thermal radiation; daytime optical systems) vs Active (Emits own electromagnetic pulses and measures backscatter; e.g., Synthetic Aperture Radar SAR, LiDAR; all-weather day-and-night imaging)",
                                            chips: ["पॅसिव्ह सेन्सर (सूर्यप्रकाश परावर्तन)", "ॲक्टिव्ह सेन्सर (RADAR, LiDAR)", "सर्व-हवामान कार्यक्षमता (All-weather)", "थर्मल इन्फ्रारेड"]
                                        },
                                        {
                                            id: "st_gb_mt01_01_03",
                                            titleMr: "रेझोल्युशनचे ४ प्रकार (MPSC हमखास प्रश्न): १) अवकाशीय विभेदन (Spatial Resolution: प्रतिमेत ओळखता येणाऱ्या सर्वात लहान भूभागाचा आकार - पिक्सेल आकार; उदा. कार्टोसॅटचे ०.२५ मीटर रेझोल्युशन); २) वर्णपटीय विभेदन (Spectral Resolution: सेन्सर किती वेगवेगळ्या तरंगलांबींच्या बँड्समध्ये डेटा नोंदवू शकतो - उदा. मल्टिस्पेक्ट्रल vs हायपरस्पेक्ट्रल); ३) किरणोत्सर्गी विभेदन (Radiometric Resolution: प्रकाशाच्या तीव्रतेतील सूक्ष्म बदल नोंदवण्याची क्षमता - बिट्समध्ये: ८-बिट = २५६ शेड्स, १०-बिट = १०२४ शेड्स); ४) कालिक विभेदन (Temporal Resolution: उपग्रह एकाच ठिकाणावर पुन्हा किती दिवसांनी येतो - Revisit Time: उदा. २ दिवस किंवा १६ दिवस)",
                                            titleEn: "The 4 Resolution Metrics: 1) Spatial (Smallest resolvable area on ground/pixel size, e.g., Cartosat sub-meter), 2) Spectral (Number and width of wavelength bands recorded), 3) Radiometric (Bit-depth sensitivity to energy magnitude differences, 8-bit vs 12-bit), 4) Temporal (Revisit frequency of satellite over exact same area)",
                                            chips: ["अवकाशीय (Spatial Resolution पिक्सेल)", "वर्णपटीय (Spectral Bands)", "किरणोत्सर्गी (Radiometric Bit-depth)", "कालिक (Temporal Revisit Time)"]
                                        },
                                        {
                                            id: "st_gb_mt01_01_04",
                                            titleMr: "उपग्रह प्रतिमा रंगसंगती (FCC vs TCC): १) सत्य रंग प्रतिमा (True Colour Composite - TCC: लाल, हिरवा, निळा नैसर्गिक रंगांत दिसणे); २) असत्य रंग प्रतिमा (False Colour Composite - FCC: निरोगी हिरवी वनस्पती ही इन्फ्रारेड प्रारणांचे उच्च परावर्तन करत असल्याने FCC प्रतिमेत ती 'लाल रंगात' (Red Colour) दिसते; पाणी 'गडद काळे किंवा निळे' दिसते; नागरी वस्त्या 'सायन/राखाडी' दिसतात)",
                                            titleEn: "Image Composition (FCC vs TCC): True Colour Composite (Natural visual reproduction); False Colour Composite (Standard FCC assigns Near-Infrared NIR to Red channel; Healthy vegetation reflects NIR intensely and appears bright RED; Clear water absorbs NIR and appears deep black/blue; Built-up areas appear cyan)",
                                            chips: ["असत्य रंग प्रतिमा (FCC)", "FCC मध्ये वनस्पती लाल रंगात", "पाणी काळे/निळे", "इन्फ्रारेड परावर्तन"]
                                        }
                                    ],
                                    sources: [
                                        { book: "विज्ञान आणि तंत्रज्ञान", standard: "डॉ. सचिन भस्के", chapterRef: "प्रकरण: सुदूर संवेदन व अंतराळ तंत्रज्ञान" },
                                        { book: "National Remote Sensing Centre (NRSC)", standard: "ISRO Training Manual", chapterRef: "Principles of Remote Sensing" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gb_mtech_c02",
                            code: "MT02",
                            section: "A",
                            slug: "remote-sensing-applications-gis-and-geoinformatics",
                            nameMr: "सुदूर संवेदनाचा उपयोजित वापर, GIS विश्लेषण व भारताची नाविक (NavIC) प्रणाली",
                            nameEn: "Remote Sensing Applications in Governance, GIS Spatial Modeling & NavIC Constellation",
                            name: "सुदूर संवेदन उपयोजन व GIS (RS Applications, GIS & NavIC)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mtech_c02",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mtech_c01",
                            nextChapterId: "gb_mtech_c03",
                            metaDescriptionMr: "सुदूर संवेदनाचा प्रत्यक्ष वापर (पिकांचे अंदाज FASAL, दुष्काळ मॉनिटरिंग, भूजल नकाशे, वन वणवे FSI, आपत्ती नियंत्रण), भुवन (Bhuvan पोर्टल), GIS विदा पृथक्करण (Overlay analysis), आणि NavIC (नाविक ७ उपग्रह रचना).",
                            metaDescriptionEn: "In-depth review of Remote Sensing Applications: FASAL crop estimation, Drought surveillance, Forest Fire alert system (FSI), Flood/Cyclone tracking, ISRO's Bhuvan Geo-portal, GIS Vector Overlay Analysis, and NavIC (IRNSS 7-satellite positioning architecture).",
                            notesJsonPath: "/data/notes/group_b/mains/science_tech/c02_rs_applications_gis.json",
                            quizTag: "gb_mtech_rs_apps_01",
                            tags: ["Remote Sensing Applications", "Bhuvan Geoportal", "FASAL Crop Forecasting", "GIS Spatial Overlay", "NavIC IRNSS 7 Satellites", "Disaster Management", "High-Weightage"],
                            searchKeywords: ["remote sensing applications agriculture fasal scheme isro", "bhuvan geo portal isro national remote sensing application", "gis overlay analysis buffering spatial querying", "navic irnss indigenous satellite constellation 7 satellites", "disaster management remote sensing flood cyclone tracking", "सुदूर संवेदन शेती उपयोजन FASAL", "इस्रो भुवन पोर्टल Bhuvan", "GIS स्थानिक विश्लेषण", "नाविक NavIC स्वदेशी GPS ७ उपग्रह", "आपत्ती व्यवस्थापन उपग्रह वापर"]
                        },


                        // =========================================================================
                        // विभाग B — अंतराळ तंत्रज्ञान व इस्रो मोहिमा (Space Technology & ISRO)
                        // =========================================================================
                        {
                            id: "gb_mtech_c03",
                            code: "MT03",
                            section: "B",
                            slug: "isro-launch-vehicles-slv-aslv-pslv-gslv-lvm3-sslv",
                            nameMr: "इस्रोची उपग्रह प्रक्षेपक वाहने: PSLV, GSLV, LVM3, SSLV आणि क्रायोजेनिक इंजिन",
                            nameEn: "ISRO Launch Vehicle Evolution: PSLV, GSLV Mk-II, LVM3, SSLV & Cryogenic Propulsion",
                            name: "प्रक्षेपक वाहने व क्रायोजेनिक्स (Launch Vehicles & Propulsion)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mtech_c03",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mtech_c02",
                            nextChapterId: "gb_mtech_c04",
                            metaDescriptionMr: "प्रक्षेपकांचा विकास (SLV-3, ASLV, PSLV - इस्रोचा वर्कहॉर्स, ४ टप्पे घन-द्रव-घन-द्रव), GSLV (३ टप्पे, स्वदेशी क्रायोजेनिक इंजिन CE-7.5 व CE-20), LVM3 (बाहुबली रॉकेट), आणि लहान उपग्रहांसाठी SSLV.",
                            metaDescriptionEn: "In-depth review of Launch Vehicle Technology: Historical SLV/ASLV, PSLV ('Workhorse of ISRO', 4-stage Solid-Liquid-Solid-Liquid with Vikas engine), GSLV Mk-II, LVM3 ('Fat Boy/Bahubali' heavy-lift launcher), Indigenous Cryogenic Upper Stage (CE-7.5 & CE-20 using liquid hydrogen/oxygen), and SSLV for small satellites.",
                            notesJsonPath: "/data/notes/group_b/mains/science_tech/c03_launch_vehicles.json",
                            quizTag: "gb_mtech_lv_01",
                            tags: ["Space Technology", "Launch Vehicles", "PSLV 4 Stages", "GSLV Cryogenic Stage", "LVM3 Bahubali", "CE-20 Engine", "SSLV Small Satellites", "High-Weightage"],
                            searchKeywords: ["isro launch vehicles evolution slv aslv pslv gslv lvm3", "pslv 4 stages alternate solid liquid htpb uh25 vikas engine", "cryogenic upper stage cus ce 7.5 ce 20 liquid hydrogen liquid oxygen", "lvm3 launch vehicle mark 3 bahubali chandrayaan gaganyaan", "sslv small satellite launch vehicle 3 solid stages", "प्रक्षेपक वाहने PSLV चार टप्पे", "GSLV क्रायोजेनिक इंजिन CE-20", "LVM3 बाहुबली रॉकेट", "SSLV लहान उपग्रह प्रक्षेपक", "विकास इंजिन"]
                        },
                        {
                            id: "gb_mtech_c04",
                            code: "MT04",
                            section: "B",
                            slug: "isro-planetary-exploration-and-satellite-applications",
                            nameMr: "इस्रोच्या ग्रहीय मोहिमा, उपग्रह मालिका, अंतराळ कचरा व व्यावसायिक धोरण",
                            nameEn: "ISRO Planetary Exploration (Mars, Venus), Space Debris (NETRA) & Space Commerce",
                            name: "ग्रहीय मोहिमा व अंतराळ धोरण (Planetary Probes & Space Policy)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mtech_c04",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mtech_c03",
                            nextChapterId: "gb_mtech_c05",
                            metaDescriptionMr: "चांद्रयान मालिका (१, २, ३ - चंद्रावर पाणी व सल्फर शोध), मंगलयान (MOM २०१३), प्रस्तावित शुक्र मोहीम (शुक्रयान), अंतराळ कचरा व्यवस्थापन (प्रोजेक्ट नेत्र NETRA), आणि अंतराळ वाणिज्य (Antrix, NSIL व IN-SPACe).",
                            metaDescriptionEn: "In-depth review of Planetary Missions: Chandrayaan series (Chandrayaan-1 water discovery, Chandrayaan-3 south pole success), Mangalyaan (MOM 2013 Mars orbiter), Shukrayaan Venus mission, Space Debris surveillance (Project NETRA), and Commercial Space Entities (Antrix, NSIL, IN-SPACe).",
                            notesJsonPath: "/data/notes/group_b/mains/science_tech/c04_planetary_space_policy.json",
                            quizTag: "gb_mtech_space_policy_01",
                            tags: ["Space Technology", "Chandrayaan Series", "Mangalyaan MOM", "Shukrayaan Venus", "Project NETRA Space Debris", "IN-SPACe Privatization", "High-Weightage"],
                            searchKeywords: ["isro chandrayaan 1 2 3 key payloads discoveries", "mars orbiter mission mangalyaan pslv c25 methane sensor", "shukrayaan 1 venus orbiter mission payloads", "project netra network for space object tracking and analysis space debris", "commercial space ecosystem antrix nsil in-space", "इस्रो चांद्रयान मालिका १ २ ३", "मंगलयान MOM २०१३", "शुक्रयान मोहीम", "प्रोजेक्ट नेत्र NETRA अंतराळ कचरा", "IN-SPACe खाजगी अंतराळ सहभाग"]
                        },


                        // =========================================================================
                        // विभाग C — जैवतंत्रज्ञान (Biotechnology)
                        // =========================================================================
                        {
                            id: "gb_mtech_c05",
                            code: "MT05",
                            section: "C",
                            slug: "biotechnology-genetic-engineering-and-recombinant-dna-technology",
                            nameMr: "जैवतंत्रज्ञान: जनुकीय अभियांत्रिकी, रिकॉम्बिनंट DNA तंत्रज्ञान व क्लोनिंग",
                            nameEn: "Biotechnology: Genetic Engineering, Recombinant DNA (rDNA) Technology & Cloning",
                            name: "जनुकीय अभियांत्रिकी व क्लोनिंग (rDNA Technology & Cloning)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mtech_c05",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mtech_c04",
                            nextChapterId: "gb_mtech_c06",
                            metaDescriptionMr: "रीकॉम्बिनंट DNA तंत्रज्ञान (rDNA - रेस्ट्रिक्शन एन्झाइम्स / रासायनिक कात्री, DNA लाइगेज / रासायनिक डिंक, प्लाझमिड व्हेक्टर), PCR तंत्रज्ञान (पॉलिमरेज चेन रिॲक्शन), क्लोनिंग (डॉली मेंढी १९९६), आणि स्टेम सेल्स (मूलपेशी).",
                            metaDescriptionEn: "In-depth review of Genetic Engineering: Recombinant DNA (rDNA) tools (Restriction Endonucleases molecular scissors, DNA Ligase molecular glue, Plasmids pBR322), PCR (Polymerase Chain Reaction - Kary Mullis), Animal Cloning (Dolly sheep 1996 somatic cell nuclear transfer), and Stem Cell Therapy (Embryonic vs Adult stem cells).",
                            notesJsonPath: "/data/notes/group_b/mains/science_tech/c05_rdna_cloning.json",
                            quizTag: "gb_mtech_biotech_01",
                            tags: ["Biotechnology", "Genetic Engineering", "rDNA Technology", "Restriction Enzymes", "PCR Kary Mullis", "Dolly Sheep Cloning", "Stem Cell Therapy", "High-Weightage"],
                            searchKeywords: ["recombinant dna technology steps tools restriction enzymes ligase", "molecular scissors restriction endonucleases molecular glue ligase", "polymerase chain reaction pcr kary mullis denaturation annealing extension", "animal cloning dolly sheep 1996 ian wilmut scnt", "stem cells pluripotent multipotent embryonic adult stem cell therapy", "रिकॉम्बिनंट DNA तंत्रज्ञान rDNA", "रेस्ट्रिक्शन एन्झाइम्स रासायनिक कात्री", "PCR तंत्रज्ञान", "डॉली मेंढी क्लोनिंग १९९६", "स्टेम सेल्स मूलपेशी उपचार"]
                        },
                        {
                            id: "gb_mtech_c06",
                            code: "MT06",
                            section: "C",
                            slug: "applied-biotechnology-transgenic-crops-and-crispr-cas9",
                            nameMr: "उपयोजित जैवतंत्रज्ञान: ट्रान्सजेनिक पिके (Bt-कापूस, जीएम मोहरी) आणि CRISPR-Cas9",
                            nameEn: "Applied Biotechnology: Transgenic Crops (Bt-Cotton, DMH-11), Biosafety & CRISPR-Cas9",
                            name: "ट्रान्सजेनिक पिके व CRISPR (GM Crops & Gene Editing)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mtech_c06",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mtech_c05",
                            nextChapterId: "gb_mtech_c07",
                            metaDescriptionMr: "ट्रान्सजेनिक / GM पिके (Bt-कापूस - बॅसिलस थुरिन्जिन्सिस Cry1Ac जनुक, जीएम मोहरी DMH-11), गोल्डन राईस (व्हिटॅमिन A), CRISPR-Cas9 जनुक संपादन तंत्रज्ञान (नोबेल २०२०), जैवसुरक्षा नियमन (GEAC), आणि जैव-खते/जैव-कीटकनाशके.",
                            metaDescriptionEn: "In-depth review of Applied Biotechnology: Genetically Modified crops (Bt-Cotton with Bacillus thuringiensis Cry genes, GM Mustard DMH-11 Bar-Barnase-Barstar system), Golden Rice (Beta-carotene), CRISPR-Cas9 Gene Editing mechanism (2020 Nobel Charpentier & Doudna), Biosafety regulatory framework (GEAC under MoEFCC), and Bio-fertilizers (Rhizobium, Azotobacter).",
                            notesJsonPath: "/data/notes/group_b/mains/science_tech/c06_gm_crops_crispr.json",
                            quizTag: "gb_mtech_biotech_apps_01",
                            tags: ["Biotechnology", "Transgenic Crops", "Bt Cotton Cry Genes", "GM Mustard DMH-11", "CRISPR-Cas9 Gene Editing", "GEAC Biosafety", "Biofertilizers", "High-Weightage"],
                            searchKeywords: ["transgenic crops bt cotton bacillus thuringiensis cry1ac cry2ab", "gm mustard dmh 11 barnase barstar deepak pental geac", "golden rice beta carotene provitamin a biofortification", "crispr cas9 gene editing technology nobel prize 2020 doudna charpentier", "genetic engineering appraisal committee geac approval", "biofertilizers rhizobium azotobacter blue green algae mycorrhiza", "ट्रान्सजेनिक पिके Bt कापूस Cry जनुक", "जीएम मोहरी DMH-11", "गोल्डन राईस व्हिटॅमिन A", "CRISPR-Cas9 जनुक संपादन नोबेल २०२०", "GEAC जैवसुरक्षा नियामक समिती", "जैवखते रायझोबियम"]
                        },


                        // =========================================================================
                        // विभाग D — माहिती व संप्रेषण तंत्रज्ञान (Information & Communication Technology)
                        // =========================================================================
                        {
                            id: "gb_mtech_c07",
                            code: "MT07",
                            section: "D",
                            slug: "ict-telecom-networks-5g-6g-iot-and-cloud-computing",
                            nameMr: "माहिती व संप्रेषण तंत्रज्ञान (ICT): 5G/6G, इंटरनेट ऑफ थिंग्ज (IoT) व क्लाउड कॉम्प्युटिंग",
                            nameEn: "ICT & Telecom Architecture: 5G/6G Rollouts, Internet of Things (IoT) & Cloud Infrastructure",
                            name: "ICT, 5G/6G व क्लाउड कॉम्प्युटिंग (ICT, 5G & Cloud Infrastructure)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mtech_c07",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mtech_c06",
                            nextChapterId: "gb_mtech_c08",
                            metaDescriptionMr: "दूरसंचार पिढ्या (1G ते 5G तुलना, मिलीमिटर वेव्ह, लेटन्सी Latency < 1ms), भारत 6G मिशन, इंटरनेट ऑफ थिंग्ज (IoT - सेन्सर्स, स्मार्ट शहरे), क्लाउड कॉम्प्युटिंग (IaaS, PaaS, SaaS, मेघराज MEGHRAJ), आणि एज कॉम्प्युटिंग.",
                            metaDescriptionEn: "In-depth review of ICT: Cellular mobile evolution (1G to 5G comparison, Millimeter wave bands, Ultra-low latency <1ms, Network slicing), Bharat 6G Vision, Internet of Things (IoT smart architecture), Cloud Computing deployment models (IaaS, PaaS, SaaS, GI Cloud 'Meghraj'), and Edge Computing.",
                            notesJsonPath: "/data/notes/group_b/mains/science_tech/c07_ict_telecom_cloud.json",
                            quizTag: "gb_mtech_ict_01",
                            tags: ["ICT", "5G Technology", "Ultra Low Latency", "Bharat 6G Vision", "Internet of Things IoT", "Cloud Computing SaaS IaaS", "Meghraj Cloud", "High-Weightage"],
                            searchKeywords: ["5g mobile technology features millimeter wave beamforming latency", "bharat 6g vision document dot apex council", "internet of things iot smart cities rfid sensors", "cloud computing models iaas paas saas", "meghraj gi cloud government of india nic", "5G तंत्रज्ञान व लेटन्सी Latency", "भारत 6G मिशन", "इंटरनेट ऑफ थिंग्ज IoT", "क्लाउड कॉम्प्युटिंग SaaS IaaS", "मेघराज सरकारी क्लाउड"]
                        },
                        {
                            id: "gb_mtech_c08",
                            code: "MT08",
                            section: "D",
                            slug: "artificial-intelligence-machine-learning-and-blockchain-technology",
                            nameMr: "कृत्रिम बुद्धिमत्ता (AI), मशिन लर्निंग आणि ब्लॉकचेन तंत्रज्ञान (Web3)",
                            nameEn: "Artificial Intelligence (AI), Machine Learning, Generative AI & Blockchain Technology",
                            name: "AI, मशिन लर्निंग व ब्लॉकचेन (AI, ML & Blockchain)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mtech_c08",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mtech_c07",
                            nextChapterId: "gb_mtech_c09",
                            metaDescriptionMr: "कृत्रिम बुद्धिमत्ता (AI - Weak vs Strong AI), मशिन लर्निंग व डीप लर्निंग, जनरेटिव्ह AI (LLMs - ChatGPT, भारतGPT), ब्लॉकचेन तंत्रज्ञान (विकेंद्रित लेजर, ब्लॉक रचना, क्रिप्टोग्राफी), स्मार्ट कॉन्ट्रॅक्ट्स, आणि क्रिप्टोकरन्सी.",
                            metaDescriptionEn: "In-depth review of Emerging Computing: Artificial Intelligence classifications (Narrow vs General AI), Machine Learning neural networks, Generative AI (Large Language Models, BharatGPT, GenAI ethics), Blockchain Technology (Distributed ledger, cryptographic hashing, Proof of Work/Stake), Smart Contracts, and Web3 applications in governance.",
                            notesJsonPath: "/data/notes/group_b/mains/science_tech/c08_ai_blockchain.json",
                            quizTag: "gb_mtech_ai_01",
                            tags: ["Emerging Tech", "Artificial Intelligence AI", "Generative AI LLM", "BharatGPT", "Blockchain Technology", "Distributed Ledger", "Smart Contracts", "High-Weightage"],
                            searchKeywords: ["artificial intelligence narrow vs general vs super ai", "machine learning deep learning neural networks", "generative ai large language models llm bharatgpt", "blockchain technology distributed ledger cryptographic hash", "smart contracts ethereum proof of work proof of stake", "कृत्रिम बुद्धिमत्ता AI मशिन लर्निंग", "जनरेटिव्ह AI LLM भारतGPT", "ब्लॉकचेन तंत्रज्ञान डिस्ट्रीब्युटेड लेजर", "स्मार्ट कॉन्ट्रॅक्ट्स", "वेब३ Web3"]
                        },
                        {
                            id: "gb_mtech_c09",
                            code: "MT09",
                            section: "D",
                            slug: "supercomputing-in-india-national-supercomputing-mission-param-series",
                            nameMr: "सुपरकॉम्प्युटिंग: राष्ट्रीय सुपरकॉम्प्युटिंग मोहीम (NSM), 'परम' मालिका व 'ऐरावत' (AIRAWAT)",
                            nameEn: "Supercomputing Infrastructure: National Supercomputing Mission (NSM), PARAM Series & AIRAWAT",
                            name: "सुपरकॉम्प्युटिंग व परम मालिका (Supercomputing & PARAM Series)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mtech_c09",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mtech_c08",
                            nextChapterId: "gb_mtech_c10",
                            metaDescriptionMr: "सुपरकॉम्प्युटर संकल्पना (फ्लॉप्स FLOPS - PetaFLOPS, ExaFLOPS), राष्ट्रीय सुपरकॉम्प्युटिंग मोहीम (NSM २०१५ - C-DAC पुणे व IISc), डॉ. विजय भटकर (परम ८००० जनक), परम मालिका (परम शिवाय, परम शक्ती, परम प्रवेग), आणि भारताचा AI सुपरकॉम्प्युटर 'ऐरावत' (जागतिक TOP500 रँकिंग).",
                            metaDescriptionEn: "In-depth review of Supercomputing: Computational benchmarking (FLOPS: PetaFLOPS, ExaFLOPS), National Supercomputing Mission (NSM 2015 joint C-DAC Pune & IISc), Dr. Vijay Bhatkar (Father of PARAM 8000), PARAM Series (Param Shivay, Param Shakti, Param Pravega), and India's AI supercomputer 'AIRAWAT' at C-DAC Pune.",
                            notesJsonPath: "/data/notes/group_b/mains/science_tech/c09_supercomputing_nsm.json",
                            quizTag: "gb_mtech_supercomp_01",
                            tags: ["Computing Infrastructure", "Supercomputers", "FLOPS Benchmark", "National Supercomputing Mission NSM", "PARAM Series CDAC Pune", "Dr Vijay Bhatkar", "AIRAWAT AI Supercomputer", "High-Weightage"],
                            searchKeywords: ["supercomputers benchmarking flops petaflops exaflops frontier", "national supercomputing mission nsm 2015 cdac pune iisc", "dr vijay bhatkar father of indian supercomputing param 8000", "param series param shivay param shakti param pravega", "airawat ai supercomputer cdac pune top 500 global rank", "सुपरकॉम्प्युटर FLOPS बेटाफ्लॉप्स", "राष्ट्रीय सुपरकॉम्प्युटिंग मोहीम NSM", "डॉ विजय भटकर परम ८००० जनक", "C-DAC पुणे परम मालिका", "ऐरावत AI सुपरकॉम्प्युटर रँकिंग"]
                        },


                        // =========================================================================
                        // विभाग E — नॅनोतंत्रज्ञान, अणुऊर्जा व संरक्षण तंत्रज्ञान (Nanotech & Nuclear)
                        // =========================================================================
                        {
                            id: "gb_mtech_c10",
                            code: "MT10",
                            section: "E",
                            slug: "nanotechnology-carbon-nanotubes-and-nano-medicine",
                            nameMr: "नॅनोतंत्रज्ञान: नॅनोकण, कार्बन नॅनोट्यूब्ज, ग्राफीन आणि वैद्यकीय/कृषी उपयोजन",
                            nameEn: "Nanotechnology: Nanomaterials, Carbon Nanotubes, Graphene & Nano-Medicine/Agriculture",
                            name: "नॅनोतंत्रज्ञान व नॅनोमटेरियल्स (Nanotechnology & Applications)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gb_mtech_c10",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mtech_c09",
                            nextChapterId: "gb_mtech_c11",
                            metaDescriptionMr: "नॅनो स्केल (१ ते १०० नॅनोमीटर, १०⁻⁹ मी), रिचर्ड फेनमन ('There's Plenty of Room at the Bottom'), कार्बन नॅनोट्यूब्ज (CNT), ग्राफीन (२D चमत्कारिक पदार्थ), नॅनो-मेडिसिन (टार्गेटेड ड्रग डिलिव्हरी), नॅनो खते, आणि नॅनो मिशन भारत.",
                            metaDescriptionEn: "In-depth review of Nanotechnology: Nanoscale domain (1-100 nm, 10^-9 m), Richard Feynman genesis, Carbon Nanotubes (Single/Multi-walled CNTs), Graphene (2D honeycomb monolayer), Targeted Drug Delivery in cancer therapy, Nano-fertilizers, and Nano Mission India.",
                            notesJsonPath: "/data/notes/group_b/mains/science_tech/c10_nanotechnology.json",
                            quizTag: "gb_mtech_nano_01",
                            tags: ["Frontier Science", "Nanotechnology 1 to 100 nm", "Richard Feynman", "Carbon Nanotubes CNT", "Graphene 2D Material", "Targeted Drug Delivery", "Nano Mission India", "High-Weightage"],
                            searchKeywords: ["nanotechnology scale 1 to 100 nanometres properties", "richard feynman there is plenty of room at the bottom 1959", "carbon nanotubes cnt single walled multi walled strength", "graphene 2d carbon material electrical conductivity", "targeted drug delivery cancer nano medicine gold nanoparticles", "nano mission government of india dst", "नॅनोतंत्रज्ञान १ ते १०० नॅनोमीटर", "रिचर्ड फेनमन", "कार्बन नॅनोट्यूब्ज CNT", "ग्राफीन Graphene २D पदार्थ", "नॅनो-मेडिसिन टार्गेटेड ड्रग डिलिव्हरी", "नॅनो मिशन भारत"]
                        },
                        {
                            id: "gb_mtech_c11",
                            code: "MT11",
                            section: "E",
                            slug: "indias-three-stage-nuclear-power-programme-and-thorium-utilization",
                            nameMr: "भारताचा तीन-टप्प्यांचा अणुऊर्जा कार्यक्रम आणि थोरियम आधारित ऊर्जा भविष्य",
                            nameEn: "India's Three-Stage Nuclear Power Programme: PHWR, FBR, AHWR & Thorium Utilization",
                            name: "भारताचा ३-टप्प्यांचा अणुकार्यक्रम (Three-Stage Nuclear Programme)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mtech_c11",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mtech_c10",
                            nextChapterId: "gb_mtech_c12",
                            metaDescriptionMr: "डॉ. होमी भाभा यांची संकल्पना, टप्पा १ (PHWR - नैसर्गिक युरेनियम, जड पाणी, प्लुटोनियम निर्मिती), टप्पा २ (FBR - फास्ट ब्रीडर रिॲक्टर, कल्पक्कम PFBR, प्लुटोनियम व थोरियम), टप्पा ३ (AHWR - थोरियम-२३२ चे युरेनियम-२३३ मध्ये रूपांतर), आणि मोनाझाईट वाळू साठे (केरळ व महाराष्ट्र किनारपट्टी).",
                            metaDescriptionEn: "In-depth review of India's Three-Stage Nuclear Power Programme devised by Dr. Homi Bhabha: Stage 1 (Pressurised Heavy Water Reactors PHWR fueled by natural uranium yielding Plutonium-239), Stage 2 (Fast Breeder Reactors FBR fueled by Pu-239 breeding U-233 from Thorium blankets, Kalpakkam PFBR), and Stage 3 (Advanced Heavy Water Reactors AHWR fueled by Thorium-U233 cycle utilizing India's monazite beach sands).",
                            notesJsonPath: "/data/notes/group_b/mains/science_tech/c11_nuclear_programme.json",
                            quizTag: "gb_mtech_nuclear_01",
                            tags: ["Nuclear Technology", "Dr Homi Bhabha", "Three Stage Nuclear Programme", "Stage 1 PHWR", "Stage 2 FBR PFBR Kalpakkam", "Stage 3 Thorium AHWR", "Monazite Sand", "High-Weightage"],
                            searchKeywords: ["dr homi bhabha three stage nuclear power programme india", "stage 1 phwr natural uranium heavy water d2o plutonium 239", "stage 2 fbr fast breeder reactor pfbr kalpakkam liquid sodium", "stage 3 ahwr thorium 232 to uranium 233 self sustaining", "monazite sand beach deposits kerala maharashtra thorium reserves", "भारताचा तीन टप्प्यांचा अणुकार्यक्रम", "डॉ होमी भाभा जनक", "पहिला टप्पा PHWR नैसर्गिक युरेनियम", "दुसरा टप्पा FBR फास्ट ब्रीडर कल्पक्कम", "तिसरा टप्पा थोरियम AHWR", "मोनाझाईट वाळू थोरियम"]
                        },


                        // =========================================================================
                        // विभाग F — सायबर सुरक्षा, आपत्ती तंत्रज्ञान व मास्टर रिव्हिजन (Security & Master Trends)
                        // =========================================================================
                        {
                            id: "gb_mtech_c12",
                            code: "MT12",
                            section: "F",
                            slug: "disaster-management-technologies-early-warning-systems",
                            nameMr: "आपत्ती व्यवस्थापनातील आधुनिक तंत्रज्ञान: पूर्वसूचना प्रणाली (Early Warning Systems) व रडार",
                            nameEn: "Disaster Management Technologies: Early Warning Systems, Doppler Radars & Tsunami Buoys",
                            name: "आपत्ती व्यवस्थापन तंत्रज्ञान (Disaster Early Warning Tech)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mtech_c12",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mtech_c11",
                            nextChapterId: "gb_mtech_c13",
                            metaDescriptionMr: "डॉप्लर हवामान रडार (DWR - मुंबई, रत्नागिरी), त्सुनामी पूर्वसूचना प्रणाली (INCOIS हैदराबाद, बॉटम प्रेशर रेकॉर्डर्स), चक्रीवादळ मॉनिटरिंग (IMD ट्रॅकिंग), पूर अंदाज (CWC), आणि भूस्खलन पूर्वसूचना (माळीण व इरशाळवाडी दुर्घटनेनंतरचे सेन्सर्स).",
                            metaDescriptionEn: "In-depth review of Disaster Management Geotechnologies: Doppler Weather Radars (DWR at Mumbai/Ratnagiri for severe convective nowcasting), Indian Tsunami Early Warning Centre (ITEWC at INCOIS Hyderabad using Deep Ocean Bottom Pressure Recorders), IMD Cyclone Track Prediction, and Landslide Early Warning Systems (GSI automated sensors post-Malin/Irshalwadi landslides).",
                            notesJsonPath: "/data/notes/group_b/mains/science_tech/c12_disaster_technologies.json",
                            quizTag: "gb_mtech_disaster_01",
                            tags: ["Disaster Technology", "Doppler Weather Radar DWR", "Tsunami Early Warning INCOIS", "IMD Cyclone Tracking", "Landslide Warning GSI", "High-Weightage"],
                            searchKeywords: ["doppler weather radar dwr nowcasting mumbai ratnagiri imd", "tsunami early warning system incois hyderabad bpr buoys", "cyclone early warning tracking system satellites insat 3dr", "landslide early warning automated rain gauges gsi malin irshalwadi", "cwc flood forecasting mobile app floodwatch", "डॉप्लर हवामान रडार DWR मुंबई", "त्सुनामी पूर्वसूचना केंद्र INCOIS हैदराबाद", "चक्रीवादळ ट्रॅकिंग IMD", "भूस्खलन पूर्वसूचना सेन्सर्स माळीण इरशाळवाडी"]
                        },
                        {
                            id: "gb_mtech_c13",
                            code: "MT13",
                            section: "F",
                            slug: "cyber-security-legal-framework-it-act-2000-and-threat-vectors",
                            nameMr: "सायबर सुरक्षा, माहिती तंत्रज्ञान कायदा २००० (IT Act) आणि सायबर धोके",
                            nameEn: "Cybersecurity Architecture: Threat Vectors, Malware Classification & Information Technology Act 2000",
                            name: "सायबर सुरक्षा व IT कायदा २००० (Cybersecurity & IT Act 2000)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mtech_c13",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mtech_c12",
                            nextChapterId: "gb_mtech_c14",
                            metaDescriptionMr: "सायबर धोके (Malware, Trojan, Ransomware, Phishing, DDoS हल्ले), माहिती तंत्रज्ञान कायदा २००० (IT Act - कलम ४३, ६६, ६६A रद्द निकाल - श्रेया सिंघल खटला, कलम ६७), आणि सायबर सुरक्षा संस्था (NCIIPC, CERT-In).",
                            metaDescriptionEn: "In-depth review of Cybersecurity & Cyber Laws: Threat Vectors (Malware, Spyware, Ransomware WannaCry, Phishing, DDoS attacks), Information Technology Act 2000 (Key Penal Sections: 43 data theft, 66 hacking, 66A struck down in landmark Shreya Singhal case 2015, 67 obscenity), Critical Information Infrastructure protection (NCIIPC), and National Cyber Security Policy.",
                            notesJsonPath: "/data/notes/group_b/mains/science_tech/c13_cyber_security_it_act.json",
                            quizTag: "gb_mtech_cyber_sec_01",
                            tags: ["Cybersecurity", "IT Act 2000", "Section 66A Struck Down Shreya Singhal", "Malware Ransomware DDoS", "Critical Infrastructure NCIIPC", "CERT-In", "High-Weightage"],
                            searchKeywords: ["information technology act 2000 key sections 43 66 67", "section 66a it act struck down shreya singhal case 2015 free speech", "cyber threat vectors malware ransomware phishing ddos attack", "national critical information infrastructure protection centre nciipc", "cert-in mandate incident response 6 hours", "माहिती तंत्रज्ञान कायदा २००० IT Act कलमे", "कलम ६६A रद्द श्रेया सिंघल खटला २०१५", "सायबर गुन्हे रॅन्समवेअर फिशिंग", "NCIIPC क्रिटिकल इन्फ्रास्ट्रक्चर", "CERT-In सायबर सुरक्षा"]
                        },
                        {
                            id: "gb_mtech_c14",
                            code: "MT14",
                            section: "F",
                            slug: "mains-science-and-technology-master-revision-and-pyq-trends",
                            nameMr: "विज्ञान-तंत्रज्ञान मास्टर रिव्हिजन: संक्षिप्त रूपे, तंत्रज्ञान तक्ते व १० वर्षांचे PYQ विश्लेषण",
                            nameEn: "Science & Technology Master Revision: Tech Glossary, Institutional Matrix & 10-Year PYQ Insights",
                            name: "विज्ञान-तंत्रज्ञान मास्टर रिव्हिजन (Master Revision: Tech & PYQs)",
                            category: "REVISION",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gb_mtech_c14",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gb_mtech_c13",
                            nextChapterId: null,
                            metaDescriptionMr: "मुख्य परीक्षा पेपर २ मधील विज्ञान व तंत्रज्ञानाच्या १० ते १५ प्रश्नांची (२० ते ३० गुण) अचूक रणनीती, तांत्रिक संकल्पनांचा मास्टर तक्ता (ISRO, Biotech, ICT, Nuclear), आणि २०१२ ते २०२५ मधील MPSC मुख्य परीक्षा PYQ ट्रेंड्स.",
                            metaDescriptionEn: "Master consolidation module: Strategy for scoring 24+ marks in Mains Paper 2 Science & Tech (10-15 questions = 20-30 marks), Technical terminology concordance (PSLV/GSLV stages, CRISPR mechanisms, Nuclear fuels, 5G bands), and 10-year MPSC Group B Mains analytical trends.",
                            notesJsonPath: "/data/notes/group_b/mains/science_tech/c14_master_revision.json",
                            quizTag: "gb_mtech_revision_01",
                            tags: ["Revision", "Mains Paper 2 Strategy", "20 to 30 Marks Target", "Science Tech Glossary", "PYQ Trends 2012 to 2025", "High-Weightage"],
                            searchKeywords: ["mpsc group b mains paper 2 science technology 15 questions strategy", "isro biotech ict master revision cheat sheet", "mpsc mains science tech pyq trend analysis 2012 to 2025", "multi statement tech questions elimination techniques", "मुख्य परीक्षा पेपर २ विज्ञान तंत्रज्ञान रणनीती", "२० ते ३० गुण लक्ष्य सायन्स टेक", "इस्रो बायोटेक आयसीटी मास्टर तक्ता", "१० वर्षांचे PYQ विश्लेषण"]
                        }
                    ]
                }
            ]
        }
    ]
}

export default groupBMainsData;