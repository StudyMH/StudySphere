export const groupCPrelimsData = {
    
    id: "prelims",
    title: "संयुक्त पूर्व परीक्षा (Combined Prelims)",
    totalMarks: 100,
    durationMinutes: 60,
    negativeMarking: "1/4 (0.25)",
    subjects: [
        {
            id: "gc_pre_history",
            code: "HIST",
            slug: "history-modern-india-maharashtra",
            nameMr: "आधुनिक भारताचा विशेषतः महाराष्ट्राचा इतिहास",
            nameEn: "History of Modern India with Special Reference to Maharashtra",
            name: "इतिहास (History)",
            officialScope: "History of Modern India and Maharashtra (1857-1947), Socio-religious awakening, British administrative impact, National movement, and Maharashtra's contribution",
            version: "1.0",
            verifiedDate: "2026-10-28",
            notesJsonBaseDir: "/data/notes/group_c/prelims/history/",
            theme: { primaryColor: "#b45309", bgColor: "#fffbeb", iconClass: "ri-monument-line" },
            metrics: { totalChapters: 18, totalEstimatedHours: 45, avgQuestionsInPrelims: 15, targetMarks: 15, weightageRange: "14-16 Questions" },
            subjectTags: ["Core-GS", "Group-C-Prelims", "Combined-Common", "Pre-Cum-Mains", "High-Weightage"],
            filterCategory: "GS",
            searchKeywords: ["mpsc group c history", "modern india maharashtra history", "1857 revolt", "social reformers", "इतिहास"],
            referenceSources: [
                { name: "आधुनिक भारताचा इतिहास - बिपिन चंद्र / ग्रोव्हर", role: "राष्ट्रीय चळवळ संदर्भ" },
                { name: "आधुनिक महाराष्ट्राचा इतिहास - डॉ. एस. एस. गाथाळ", role: "महाराष्ट्र विशेष व समाजसुधारक" }
            ],
            chapters: [
                {
                    id: "gc_pre_history",
                    code: "HIST",
                    slug: "history-modern-india-maharashtra-prelims",
                    nameMr: "आधुनिक भारताचा विशेषतः महाराष्ट्राचा इतिहास",
                    nameEn: "History of Modern India with Special Reference to Maharashtra",
                    name: "इतिहास (Modern History)",
                    officialScope: "History of Modern India and Maharashtra (1818-1960), Socio-religious awakening, British administrative impact, Early armed revolts, 1857 Rebellion, Reformers, Press & Literature, Peasant & Working-class movements, National Movement (Moderates, Extremists, Gandhian Era), and Samyukta Maharashtra Movement",
                    version: "1.0",
                    verifiedDate: "2026-10-28",
                    notesJsonBaseDir: "/data/notes/group_c/prelims/history/",


                    theme: {
                        primaryColor: "#b45309",
                        bgColor: "#fffbeb",
                        iconClass: "ri-monument-line"
                    },


                    metrics: {
                        totalChapters: 18,
                        totalEstimatedHours: 45,
                        avgQuestionsInPrelims: 15,
                        targetMarks: 15,
                        weightageRange: "14-16 Questions"
                    },


                    subjectTags: [
                        "Core-GS",
                        "Group-C-Prelims",
                        "Pre-Cum-Mains",
                        "Maharashtra-Focus",
                        "High-Weightage",
                        "Standard-Gathal-Kathare"
                    ],


                    filterCategory: "GS",
                    searchKeywords: [
                        "mpsc group c history prelims", "modern history maharashtra india", "1857 revolt maharashtra",
                        "social reformers maharashtra phule shahu ambedkar", "bombay presidency administration elphinstone",
                        "peasant tribal movements", "national movement tilak gandhi era", "samyukta maharashtra movement",
                        "इतिहास पूर्व परीक्षा", "महाराष्ट्राचा इतिहास", "१८५७ चा उठाव", "समाजसुधारक", "स्वातंत्र्य लढा"
                    ],


                    referenceSources: [
                        {
                            name: "आधुनिक महाराष्ट्राचा इतिहास - डॉ. एस. एस. गाथाळ",
                            role: "महाराष्ट्राचा इतिहास व समाजसुधारक पायाभूत संदर्भ ग्रंथ"
                        },
                        {
                            name: "महाराष्ट्राचा इतिहास - डॉ. अनिल कठारे",
                            role: "सामाजिक, राजकीय व शेतकरी-कामगार चळवळींचे सखोल विश्लेषण"
                        },
                        {
                            name: "आधुनिक भारताचा इतिहास - बिपिन चंद्र / बी. एल. ग्रोव्हर",
                            role: "राष्ट्रीय चळवळ व ब्रिटिश प्रशासकीय धोरणे"
                        }
                    ],


                    chapters: [
                        // =========================================================================
                        // प्रकरण १: युरोपियनांचे आगमन, आंग्ल-मराठा युद्धे व पेशवाईचा अस्त (१८१८)
                        // =========================================================================
                        {
                            id: "gc_hist_c01",
                            code: "CH01",
                            section: "A",
                            slug: "advent-of-europeans-anglo-maratha-wars-fall-of-peshwai",
                            nameMr: "युरोपियनांचे आगमन, आंग्ल-मराठा युद्धे व पेशवाईचा अस्त (१८१८)",
                            nameEn: "Advent of Europeans, Anglo-Maratha Wars & Fall of the Peshwai (1818)",
                            name: "ब्रिटिश सत्ता विस्तार व पेशवाईचा अस्त",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_hist_c01",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: null,
                            nextChapterId: "gc_hist_c02",
                            metaDescriptionMr: "तीन आंग्ल-मराठा युद्धे, वसईचा तह (१८०२), बाजीराव दुसरा, खडकी-कोरेगाव-अष्टीच्या लढाया, १८१८ मध्ये मराठा साम्राज्याचा अस्त आणि मुंबई इलाख्याची स्थापना.",
                            metaDescriptionEn: "Three Anglo-Maratha wars, Treaty of Bassein (1802), Baji Rao II, Battles of Khadki, Koregaon & Ashti, collapse of the Peshwai in 1818, and establishment of British administration under Elphinstone.",
                            notesJsonPath: "/data/notes/group_c/prelims/history/c01_british_expansion.json",
                            quizTag: "gc_hist_expansion_01",
                            tags: ["Anglo-Maratha Wars", "Treaty of Bassein", "Fall of Peshwai 1818", "Battle of Koregaon", "Elphinstone"],
                            searchKeywords: ["anglo maratha wars treaty of bassein 1802", "battle of khadki koregaon ashti 1817 1818", "fall of peshwai baji rao ii mountstuart elphinstone", "आंग्ल मराठा युद्धे", "वसईचा तह", "खडकीची लढाई", "कोरेगाव भीमा १८१८", "पेशवाईचा अस्त"],
                            topics: [
                                {
                                    id: "top_gc_h01_01",
                                    nameMr: "मराठा सत्तेचा ऱ्हास, आंग्ल-मराठा संघर्ष आणि पेशवाईचा अंत",
                                    nameEn: "Decline of Maratha Confederacy, Anglo-Maratha Wars & Fall of Peshwai",
                                    subtopics: [
                                        {
                                            id: "st_gc_h01_01_01",
                                            titleMr: "वसईचा तह व दुसरे आंग्ल-मराठा युद्ध: ३१ डिसेंबर १८०२ रोजी दुसऱ्या बाजीराव पेशव्याने ब्रिटिशांशी केलेला तैनाती फौजेचा तह; मराठा सरदारांचा (दौलतराव शिंदे व रघोजी भोसले) विरोध; अलाई व असीरगडच्या लढाया; ब्रिटिशांचे मराठा साम्राज्यावर राजकीय वर्चस्व",
                                            titleEn: "Treaty of Bassein & Second Anglo-Maratha War: Subsidiary Alliance signed by Baji Rao II on 31 Dec 1802; military opposition by Scindia and Bhonsle; establishment of British paramountcy over the Deccan",
                                            chips: ["वसईचा तह १८०२", "तैनाती फौज", "दुसरे आंग्ल-मराठा युद्ध", "बाजीराव दुसरा", "दौलतराव शिंदे"]
                                        },
                                        {
                                            id: "st_gc_h01_01_02",
                                            titleMr: "तिसरे आंग्ल-मराठा युद्ध व निर्णायक लढाया (१८१७-१८१८): खडकीची लढाई (५ नोव्हेंबर १८१७), कोरेगाव भीमाची लढाई (१ जानेवारी १८१८), आणि अष्टीची लढाई (१९ फेब्रुवारी १८१८ - सेनापती बापू गोखले यांचे धारातीर्थी पतन); ३ जून १८१८ रोजी दुसऱ्या बाजीरावांची सर जॉन माल्कमकडे शरणागती; मराठा साम्राज्याचा अधिकृत अस्त",
                                            titleEn: "Third Anglo-Maratha War & Decisive Battles (1817-1818): Battle of Khadki, Battle of Koregaon (1 Jan 1818), and Battle of Ashti (fall of General Bapu Gokhale); Baji Rao II surrendered to Sir John Malcolm on 3 June 1818",
                                            chips: ["खडकीची लढाई १८१७", "कोरेगाव भीमा १८१८", "अष्टीची लढाई बापू गोखले", "बाजीराव शरणागती", "पेशवाईचा अंत १८१८"]
                                        },
                                        {
                                            id: "st_gc_h01_01_03",
                                            titleMr: "माऊंटस्ट्युअर्ट एल्फिन्स्टनचे प्रशासकीय धोरण: १८१९ मध्ये मुंबई इलाख्याचा गव्हर्नर; मराठा सरदारांची वतने व इनाम जमिनी टिकवून ठेवण्याचे धोरण; गावगाडा व पारंपरिक पंचायतींचे रक्षण; १८२७ चा एल्फिन्स्टन कोड (दिवाणी व फौजदारी कायद्यांचे संहितीकरण)",
                                            titleEn: "Elphinstone's Administrative System: Governor of Bombay (1819-1827); preservation of watandars and sardars; non-interference in caste panchayats; codification through the 1827 Elphinstone Code",
                                            chips: ["माऊंटस्ट्युअर्ट एल्फिन्स्टन", "मुंबई इलाखा गव्हर्नर", "एल्फिन्स्टन कोड १८२७", "वतनदार सरदार व्यवस्था", "गावगाडा रक्षण"]
                                        }
                                    ],
                                    sources: [
                                        { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण १: ब्रिटिश सत्तेची स्थापना व पेशवाईचा अस्त" },
                                        { book: "महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण १: आंग्ल-मराठा संबंध" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण २: महाराष्ट्रातील सुरुवातीचे सशस्त्र उठाव: उमाजी नाईक, भिल्ल व कोळी बंड
                        // =========================================================================
                        {
                            id: "gc_hist_c02",
                            code: "CH02",
                            section: "A",
                            slug: "early-revolts-in-maharashtra-umaji-naik-and-tribals",
                            nameMr: "महाराष्ट्रातील सुरुवातीचे सशस्त्र उठाव: उमाजी नाईक, भिल्ल, कोळी व रामोशी बंड",
                            nameEn: "Early Armed Revolts in Maharashtra: Umaji Naik, Bhil, Koli & Ramoshi Uprisings",
                            name: "सुरुवातीचे सशस्त्र उठाव (उमाजी नाईक व आदिवासी)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_hist_c02",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_hist_c01",
                            nextChapterId: "gc_hist_c03",
                            metaDescriptionMr: "आद्य क्रांतिकारक उमाजी नाईक (रामोशी उठाव, इंग्रजविरोधी जाहीरनामा १८३१, फाशी ३ फेब्रुवारी १८३२), खान्देशातील भिल्ल उठाव (चिल नाईक, काजीसिंग), आणि कोळ्यांचे बंड (रामजी भांगरे).",
                            metaDescriptionEn: "Early resistance movements: Umaji Naik's Ramoshi rebellion, historic anti-British proclamation of 1831, execution on 3 Feb 1832, Khandesh Bhil uprisings (Chil Naik, Kajisingh), and Koli rebellions under Ramji Bhangre.",
                            notesJsonPath: "/data/notes/group_c/prelims/history/c02_early_revolts.json",
                            quizTag: "gc_hist_early_revolts_01",
                            tags: ["Early Armed Revolts", "Umaji Naik Proclamation 1831", "Ramoshi Rebellion", "Khandesh Bhil Uprising", "Koli Rebellion Ramji Bhangre"],
                            searchKeywords: ["umaji naik ramoshi rebellion proclamation 1831 hanged 1832", "khandesh bhil uprising chil naik kajisingh", "koli rebellion ramji bhangre raghoji bhangre", "उमाजी नाईक जाहीरनामा १८३१", "रामोशी उठाव", "भिल्ल उठाव खान्देश", "कोळी बंड रामजी भांगरे"],
                            topics: [
                                {
                                    id: "top_gc_h02_01",
                                    nameMr: "उमाजी नाईकांचे बंड, भिल्ल उठाव आणि कोळी समाजाचा संघर्ष",
                                    nameEn: "Umaji Naik's Insurgency, Bhil Revolts in Khandesh & Koli Agitations",
                                    subtopics: [
                                        {
                                            id: "st_gc_h02_01_01",
                                            titleMr: "आद्य क्रांतिकारक उमाजी नाईक (१७९१-१८३२): रामोशी समाजाचे संघटन; पुरंदर, सासवड व पुणे परिसरात ब्रिटिशांविरुद्ध लढा; १५ डिसेंबर १८३१ रोजी प्रसिद्ध केलेला जाहीरनामा: 'रयतेने ब्रिटिशांना महसूल देऊ नये, त्यांची तिजोरी लुटावी आणि स्वतंत्र राज्य स्थापावे'; काळू व नाना यांनी केलेल्या फितुरीमुळे अटक; ३ फेब्रुवारी १८३२ रोजी पुणे येथे फाशी",
                                            titleEn: "Umaji Naik (1791-1832): Mobilized Ramoshis in Purandar and Pune; Issued the historic Proclamation of 15 Dec 1831 urging citizens to withhold tax and rebel against the Company; Betrayed and executed by hanging in Pune on 3 Feb 1832",
                                            chips: ["उमाजी नाईक (आद्य क्रांतिकारक)", "१५ डिसेंबर १८३१ जाहीरनामा", "३ फेब्रुवारी १८३२ फाशी पुणे", "रामोशी बंड"]
                                        },
                                        {
                                            id: "st_gc_h02_01_02",
                                            titleMr: "खान्देशातील भिल्ल उठाव (१८१८-१८५०): सातपुडा व अजिंठा डोंगररांगांमधील भिल्लांचे ब्रिटिश महसूल पद्धतीविरुद्ध उठाव; प्रमुख नेते: चिल नाईक, हिऱ्या, काजीसिंग (कजारसिंग); कॅप्टन आऊट्रमने 'भिल्ल कोर' (Bhil Corps १८२५) स्थापन करून काहींना सैन्यात भरती केले, तर काहींचा बीमोड केला",
                                            titleEn: "Bhil Uprisings in Khandesh (1818-1850): Tribal unrest across Satpura and Ajanta ranges; Led by Chil Naik, Hirya, and Kajisingh; Captain Outram formed the Bhil Corps in 1825 to assimilate and pacify rebels",
                                            chips: ["खान्देश भिल्ल उठाव", "चिल नाईक व काजीसिंग", "कॅप्टन आऊट्रम", "भिल्ल कोर १८२५"]
                                        },
                                        {
                                            id: "st_gc_h02_01_03",
                                            titleMr: "कोळी आणि इतर उठाव: अहमदनगर व नाशिक परिसरातील कोळ्यांचे बंड; रामजी भांगरे व त्यांचे सुपुत्र राघोजी भांगरे यांचे सावकार व ब्रिटिशांविरुद्ध सशस्त्र आंदोलन; कोकणातील सावंतवाडी व गडकरी उठाव (१८४४ - कोल्हापूर संस्थानात किल्ल्यांचे संरक्षण काढून घेतल्याने गडकरींचे बंड)",
                                            titleEn: "Koli & Gadkari Uprisings: Koli rebellions led by Ramji and Raghoji Bhangre in Ahmednagar; Gadkari revolt of 1844 in Kolhapur sparked by British dismantling of traditional fort garrisons",
                                            chips: ["कोळी उठाव (राघोजी भांगरे)", "गडकरी उठाव १८४४ (कोल्हापूर)", "किल्लेदार संरक्षण", "सावंतवाडी बंड"]
                                        }
                                    ],
                                    sources: [
                                        { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण ३: महाराष्ट्रातील सुरुवातीचे उठाव" },
                                        { book: "महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण २: उमाजी नाईक व आदिवासी लढे" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ३: १८५७ चा राष्ट्रीय उठाव आणि महाराष्ट्रातील पडसाद
                        // =========================================================================
                        {
                            id: "gc_hist_c03",
                            code: "CH03",
                            section: "A",
                            slug: "revolt-of-1857-and-its-manifestation-in-maharashtra",
                            nameMr: "१८५७ चा राष्ट्रीय उठाव आणि महाराष्ट्रातील पडसाद",
                            nameEn: "The Revolt of 1857 & Its Manifestation across Maharashtra",
                            name: "१८५७ चा उठाव व महाराष्ट्र (Revolt of 1857)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_hist_c03",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_hist_c02",
                            nextChapterId: "gc_hist_c04",
                            metaDescriptionMr: "१८५७ च्या उठावाची कारणे, सातारा (रंगो बापूजी गुप्ते), कोल्हापूर (चिमणासाहेब), पेठ (राजा भगवंतराव), जमखंडी, नागपूर, खान्देश (भागा नाईक), आणि मुधोळचा उठाव.",
                            metaDescriptionEn: "1857 Revolt dynamics in Maharashtra: Rango Bapuji Gupte at Satara, Chhimnasaheb at Kolhapur, Peth tribal uprising under Raja Bhagwantrao, Jamkhandi, Khandesh, and Mudhol arms resistance.",
                            notesJsonPath: "/data/notes/group_c/prelims/history/c03_revolt_1857_maharashtra.json",
                            quizTag: "gc_hist_1857_01",
                            tags: ["1857 Revolt", "Rango Bapuji Gupte", "Kolhapur Uprising", "Peth Raja Bhagwantrao", "Khandesh Khajya Naik", "High-Weightage"],
                            searchKeywords: ["1857 revolt in maharashtra centres leaders", "rango bapuji gupte satara conspiracy", "kolhapur chimnasaheb 1857 revolt", "peth tribal revolt raja bhagwantrao hanged", "केंद्रे नेते १८५७ महाराष्ट्र", "रंगो बापूजी गुप्ते सातारा", "कोल्हापूर चिमणासाहेब १८५७", "पेठ राजा भगवंतराव"],
                            topics: [
                                {
                                    id: "top_gc_h03_01",
                                    nameMr: "महाराष्ट्रातील १८५७ चे उठावकेंद्र, स्थानिक नेते आणि ब्रिटिशांची दडपशाही",
                                    nameEn: "1857 Insurgency Hubs in Maharashtra, Indigenous Leadership & Suppression",
                                    subtopics: [
                                        {
                                            id: "st_gc_h03_01_01",
                                            titleMr: "सातारा व कोल्हापूर येथील उठाव: साताऱ्याचे छत्रपती प्रतापसिंह यांचे वारसा हक्क मिळवण्यासाठी लंडनला गेलेले रंगो बापूजी गुप्ते यांनी साताऱ्यात येऊन रामोशी व कोळ्यांना एकत्र करून ब्रिटिशांविरुद्ध कट रचला; कोल्हापूर येथे २७ व्या पलटणीतील सैनिकांचा उठाव (नेतृत्व: रामजी शिरसाट व चिमणासाहेब); ब्रिटिश अधिकारी जेकॉब याने उठाव मोडून काढला",
                                            titleEn: "Satara & Kolhapur Epicenters: Rango Bapuji Gupte organized Ramoshis & Mangs at Satara to restore Pratap Singh's throne; Kolhapur 27th Native Infantry mutiny led by Ramji Shirsat and patronized by Chimnasaheb; Suppressed by Major Jacob",
                                            chips: ["रंगो बापूजी गुप्ते (सातारा)", "छत्रपती प्रतापसिंह वकील", "कोल्हापूर २७ वी पलटण", "चिमणासाहेब", "मेजर जेकॉब"]
                                        },
                                        {
                                            id: "st_gc_h03_01_02",
                                            titleMr: "नाशिक, पेठ व खान्देशातील लढा: पेठ (नाशिक) येथील आदिवासींचा उठाव: राजा भगवंतराव नीळकंठराव यांच्या नेतृत्वाखाली पेठचा खजिना लुटला; राजा भगवंतरावांना ब्रिटिशांनी फाशी दिली; खान्देशात खाज्या नाईक व भीमा नाईक यांच्या नेतृत्वाखाली भिल्लांचा लढा; आंबापाणी (बडवानीजवळ) येथील लढाईत शेकडो भिल्ल हुतात्मा",
                                            titleEn: "Peth & Khandesh Rebellions: Tribal uprising at Peth (Nashik) led by local ruler Raja Bhagwantrao Nilkanthrao who was hanged; Khandesh tribal war led by Khajya Naik and Bhima Naik; Battle of Ambapani saw heavy Bhil martyrdom",
                                            chips: ["पेठ उठाव (राजा भगवंतराव फाशी)", "खान्देश (खाज्या नाईक व भीमा नाईक)", "आंबापाणीची लढाई", "भिल्ल स्वातंत्र्य लढा"]
                                        },
                                        {
                                            id: "st_gc_h03_01_03",
                                            titleMr: "नागपूर, मुधोळ व इतर उठाव: नागपूर येथे भोसल्यांच्या सैनिकांचा उठाव करण्याचा कट फितुरीमुळे फसला; मुधोळ (कर्नाटक सीमा) येथे बेरड समाजाचा शस्त्रबंदी कायद्याविरुद्ध उठाव (बाबाजी निसरगी); मुंबईत शिपायांचा उठाव करण्याचा कट पोलीस कमिशनर फॉर्गेट याने हाणून पाडला (मंगळ व सय्यद हुसेन यांना तोफेच्या तोंडी दिले)",
                                            titleEn: "Nagpur, Mudhol & Mumbai Conspiracies: Mutiny plot of Bhonsle cavalry at Nagpur foiled by betrayal; Mudhol Berad tribal resistance against Disarming Act led by Babaji Nisaragi; Police Commissioner Forjett crushed sepoy plot in Mumbai",
                                            chips: ["नागपूर कट", "मुधोळ बेरड उठाव (बाबाजी निसरगी)", "मुंबई कट (कमिशनर फॉर्गेट)", "तोफेच्या तोंडी दिले"]
                                        }
                                    ],
                                    sources: [
                                        { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण ४: १८५७ चा उठाव व महाराष्ट्र" },
                                        { book: "महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण ३: १८५७ चे रणसंग्राम" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ४: प्रबोधनाची पहाट: बाळशास्त्री जांभेकर, लोकहितवादी व दादोबा पांडुरंग
                        // =========================================================================
                        {
                            id: "gc_hist_c04",
                            code: "CH04",
                            section: "B",
                            slug: "early-intellectual-awakening-jambhekar-lokhitwadi-tarkhadkar",
                            nameMr: "प्रबोधनाची पहाट: बाळशास्त्री जांभेकर, लोकहितवादी व दादोबा पांडुरंग",
                            nameEn: "Dawn of Renaissance: Balshastri Jambhekar, Lokhitwadi & Dadoba Pandurang",
                            name: "आद्य प्रबोधनकार (Early Renaissance Thinkers)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_hist_c04",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_hist_c03",
                            nextChapterId: "gc_hist_c05",
                            metaDescriptionMr: "बाळशास्त्री जांभेकर (दर्पण १८३२, दिग्दर्शन, ज्ञानेश्वरी मुद्रण), लोकहितवादी गोपाळ हरी देशमुख (शतपत्रे, लक्ष्मीज्ञान), आणि दादोबा पांडुरंग तर्खडकर (परमहंस सभा १८४९, मराठी व्याकरण).",
                            metaDescriptionEn: "Early Intellectuals: Balshastri Jambhekar (Darpan 1832, Digdarshan, Sheshadri case), Lokhitwadi Gopal Hari Deshmukh (100 Shatapatre, Lakshmi-Gyan), Dadoba Pandurang (Paramhansa Sabha 1849).",
                            notesJsonPath: "/data/notes/group_c/prelims/history/c04_early_thinkers.json",
                            quizTag: "gc_hist_thinkers_01",
                            tags: ["Social Reformers", "Balshastri Jambhekar", "Darpan 1832", "Lokhitwadi Shatapatre", "Paramhansa Sabha 1849"],
                            searchKeywords: ["balshastri jambhekar darpan 6 jan 1832 digdarshan", "lokhitwadi gopal hari deshmukh shatapatre prabhakar", "dadoba pandurang tarkhadkar paramhansa sabha 1849", "बाळशास्त्री जांभेकर दर्पण", "लोकहितवादी शतपत्रे", "दादोबा पांडुरंग परमहंस सभा"],
                            topics: [
                                {
                                    id: "top_gc_h04_01",
                                    nameMr: "बाळशास्त्री जांभेकर, लोकहितवादी आणि दादोबा पांडुरंग यांचे कार्य",
                                    nameEn: "Pioneer Reformers: Jambhekar's Journalism, Lokhitwadi's Critique & Tarkhadkar's Organizations",
                                    subtopics: [
                                        {
                                            id: "st_gc_h04_01_01",
                                            titleMr: "बाळशास्त्री जांभेकर (१८१२-१८४६): मराठी वृत्तपत्रसृष्टीचे जनक; ६ जानेवारी १८३२ रोजी 'दर्पण' (मराठी व इंग्रजी द्विभाषिक) सुरू केले; मे १८४० मध्ये 'दिग्दर्शन' हे पहिले मराठी मासिक सुरू केले; श्रीपती शेषाद्री शुद्धीकरण प्रकरण (ख्रिस्ती झालेल्या हिंदू मुलास पुन्हा धर्मात घेणे); १८४५ मध्ये ज्ञानेश्वरीचे पहिले छापील मुद्रण; मुंबई प्रांताचे पहिले नेटिव्ह स्कूल इन्स्पेक्टर",
                                            titleEn: "Balshastri Jambhekar (1812-1846): Father of Marathi Journalism; Founded 'Darpan' on 6 Jan 1832; Started 1st Marathi monthly 'Digdarshan' (1840); Led Shripati Sheshadri re-conversion movement; Printed 1st lithograph edition of Dnyaneshwari (1845)",
                                            chips: ["बाळशास्त्री जांभेकर (वृत्तपत्रसृष्टीचे जनक)", "दर्पण ६ जानेवारी १८३२", "दिग्दर्शन मासिक १८४०", "श्रीपती शेषाद्री प्रकरण", "ज्ञानेश्वरी मुद्रण १८४५"]
                                        },
                                        {
                                            id: "st_gc_h04_01_02",
                                            titleMr: "गोपाळ हरी देशमुख 'लोकहितवादी' (१८२३-१८९२): १८४८ ते १८५० या काळात भाऊ महाजन यांच्या 'प्रभाकर' साप्ताहिकात प्रसिद्ध झालेली १०० शतपत्रे; धार्मिक कर्मठतेवर व भिक्षुकशाहीवर सडेतोड प्रहार; 'लक्ष्मीज्ञान' (१८४९ - अर्थशास्त्रावरील पहिले मराठी पुस्तक); स्वदेशी वस्तूंचा वापर व व्यापार वृद्धीचा पुरस्कार; विधवा पुनर्विवाह मंडळाची स्थापना",
                                            titleEn: "Gopal Hari Deshmukh 'Lokhitwadi': Published 100 'Shatapatre' in Prabhakar (1848-1850); Severe critique of orthodox social decay; Wrote 'Lakshmi-Gyan' (1849, 1st Marathi political economy book); Advocated Swadeshi, enterprise and widow rehabilitation",
                                            chips: ["लोकहितवादी", "शतपत्रे (प्रभाकर १८४८-५०)", "लक्ष्मीज्ञान १८४९", "स्वदेशी विचार", "विधवा पुनर्विवाह पुरस्कार"]
                                        },
                                        {
                                            id: "st_gc_h04_01_03",
                                            titleMr: "दादोबा पांडुरंग तर्खडकर (१८१४-१८८२): 'मराठी भाषेचे पाणिनी'; 'महाराष्ट्र भाषेचे व्याकरण' हा प्रमाण ग्रंथ लिहिला; सुरत येथे दुर्गाराम मंच्छाराम यांच्या साथीने 'मानवधर्म सभा' (१८४४); मुंबईत ३१ जुलै १८४९ रोजी 'परमहंस सभा' (गुप्त समाजसुधारक संघटना - जातिभेद निर्मूलन व एकेश्वरवाद) स्थापन केली",
                                            titleEn: "Dadoba Pandurang Tarkhadkar: 'Panini of Marathi Language'; Co-founded Manavdharma Sabha at Surat (1844); Founded Paramhansa Sabha in Mumbai (31 July 1849, secret society promoting casteless monotheism)",
                                            chips: ["दादोबा पांडुरंग (मराठी भाषेचे पाणिनी)", "मानवधर्म सभा १८४४", "परमहंस सभा ३१ जुलै १८४९", "जातिभेद निर्मूलन"]
                                        }
                                    ],
                                    sources: [
                                        { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण ५: प्रबोधनाची पहाट" },
                                        { book: "महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण ४: आद्य समाजसुधारक" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ५: महात्मा जोतीराव फुले आणि सत्यशोधक समाज चळवळ
                        // =========================================================================
                        {
                            id: "gc_hist_c05",
                            code: "CH05",
                            section: "B",
                            slug: "mahatma-jyotirao-phule-and-satyashodhak-samaj",
                            nameMr: "महात्मा जोतीराव फुले आणि सत्यशोधक समाज चळवळ",
                            nameEn: "Mahatma Jyotirao Phule & The Satyashodhak Samaj Movement",
                            name: "महात्मा जोतीराव फुले व सत्यशोधक समाज",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_hist_c05",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_hist_c04",
                            nextChapterId: "gc_hist_c06",
                            metaDescriptionMr: "महात्मा फुले: भिडे वाडा मुलींची शाळा १८४८, बालहत्या प्रतिबंधक गृह १८६३, सत्यशोधक समाज (२४ सप्टेंबर १८७३), ग्रंथसंपदा (गुलामगिरी, शेतकऱ्याचा आसूड), हंटर आयोग साक्ष, आणि सावित्रीबाई फुले यांचे कार्य.",
                            metaDescriptionEn: "Mahatma Jyotirao Phule: 1848 Girls' School at Bhide Wada, Infanticide prohibition home 1863, Satyashodhak Samaj (24 Sept 1873), literature (Gulamgiri, Shetkaryacha Asud), Hunter Commission, Savitribai Phule.",
                            notesJsonPath: "/data/notes/group_c/prelims/history/c05_mahatma_phule.json",
                            quizTag: "gc_hist_phule_01",
                            tags: ["Social Reformers", "Mahatma Phule", "Satyashodhak Samaj 1873", "Gulamgiri", "Shetkaryacha Asud", "Savitribai Phule", "High-Weightage"],
                            searchKeywords: ["mahatma jyotirao phule satyashodhak samaj 24 sept 1873", "gulamgiri shetkaryacha asud sarvajanik satyadharma", "savitribai phule kavyaphule 1848 girls school", "महात्मा फुले सत्यशोधक समाज", "गुलामगिरी शेतकऱ्याचा आसूड", "सावित्रीबाई फुले काव्यफुले"],
                            topics: [
                                {
                                    id: "top_gc_h05_01",
                                    nameMr: "महात्मा फुल्यांचे शैक्षणिक-सामाजिक कार्य, सत्यशोधक समाज आणि विचारप्रणाली",
                                    nameEn: "Mahatma Phule's Educational Awakening, Satyashodhak Philosophy & Literary Oeuvre",
                                    subtopics: [
                                        {
                                            id: "st_gc_h05_01_01",
                                            titleMr: "शैक्षणिक व सामाजिक संस्था: १ जानेवारी १८४८ रोजी पुण्यात भिडे वाड्यात मुलींची पहिली शाळा सुरू केली; १८४८ ते १८५२ या काळात अस्पृश्यांसाठी व मुलींसाठी अनेक शाळा काढल्या; १८६३ मध्ये बालहत्या प्रतिबंधक गृहाची स्थापना (काशीबाई या ब्राह्मण विधवेचा मुलगा यशवंत दत्तक घेतला); १८६८ मध्ये स्वतःच्या घरातील पाण्याचा हौद अस्पृश्यांसाठी खुला केला",
                                            titleEn: "Institutional Crusade: Founded India's 1st indigenous girls' school at Bhide Wada, Pune (1 Jan 1848); Opened schools for Dalits (1851-52); Established Infanticide Prohibition Home (1863) and adopted Yashwant; Opened private drinking water well to untouchables (1868)",
                                            chips: ["भिडे वाडा शाळा १८४८", "बालहत्या प्रतिबंधक गृह १८६३", "पाण्याचा हौद खुला १८६८", "यशवंत दत्तकपुत्र"]
                                        },
                                        {
                                            id: "st_gc_h05_01_02",
                                            titleMr: "सत्यशोधक समाज (२४ सप्टेंबर १८७३): बहुजन समाजाला धार्मिक गुलामगिरी व पुरोहितांच्या मध्यस्थीतून मुक्त करण्यासाठी स्थापना; ब्रीदवाक्य: 'सर्वसाक्षी जगत्पती त्याला नकोच मध्यस्थी'; पुरोहिताशिवाय सत्यशोधक विवाह पद्धत सुरू केली; कृष्णराव भालेकर यांनी १८७७ मध्ये 'दीनबंधू' हे सत्यशोधक समाजाचे मुखपत्र सुरू केले",
                                            titleEn: "Satyashodhak Samaj (24 Sept 1873): Founded to liberate Shudras from clerical exploitation; Motto: 'Sarvasakshi Jagatpati, Tyala Nakoch Madhyasthi'; Introduced rational priestless weddings; Krishnarao Bhalekar launched official mouthpiece 'Deenbandhu' in 1877",
                                            chips: ["सत्यशोधक समाज २४ सप्टें १८७३", "सर्वसाक्षी जगत्पती", "दीनबंधू १८७७", "कृष्णराव भालेकर", "सत्यशोधक विवाह"]
                                        },
                                        {
                                            id: "st_gc_h05_01_03",
                                            titleMr: "ग्रंथसंपदा व गौरव: १) तृतीय रत्न (नाटक १८५५); २) ब्राह्मणांचे कसब (१८६९); ३) छत्रपती शिवाजीराजे भोसले यांचा पोवाडा (१८६९ - कुळवाडी भूषण); ४) गुलामगिरी (१८७३ - अमेरिकेतील निग्रो दास्यमुक्ती चळवळीस समर्पित); ५) शेतकऱ्याचा आसूड (१८८३); ६) सार्वजनिक सत्यधर्म (१८९१); १८८२ च्या हंटर कमिशनसमोर मोफत व सक्तीच्या प्राथमिक शिक्षणाची मागणी; १८८८ मध्ये मुंबईत जनतेने 'महात्मा' पदवी बहाल केली",
                                            titleEn: "Literary Works & Honors: Tritya Ratna (1855), Powada of Shivaji (1869, hailed as Kulwadi Bhushan), Gulamgiri (1873, dedicated to American anti-slavery reformers), Shetkaryacha Asud (1883), Sarvajanik Satyadharma (1891); Hunter Commission deposition (1882); Conferred 'Mahatma' in Mumbai (1888)",
                                            chips: ["गुलामगिरी १८७३", "शेतकऱ्याचा आसूड १८८३", "सार्वजनिक सत्यधर्म १८९१", "हंटर कमिशन १८८२", "महात्मा पदवी १८८८"]
                                        },
                                        {
                                            id: "st_gc_h05_01_04",
                                            titleMr: "सावित्रीबाई फुले (१८३१-१८९७): भारतातील पहिल्या महिला मुख्याध्यापिका व शिक्षिका; जोतीरावांना खांद्याला खांदा लावून शिक्षण कार्यात साथ; काव्यसंग्रह: 'काव्यफुले' (१८५४) व 'बावनकशी सुबोध रत्नाकर' (१८९२); जोतीरावांच्या मृत्यूनंतर (१८९०) सत्यशोधक समाजाचे नेतृत्व केले; १८९७ च्या प्लेग साथीमध्ये रुग्णांची सेवा करताना वीरमरण",
                                            titleEn: "Savitribai Phule (1831-1897): India's 1st female teacher and headmistress; Authored poetry collections 'Kavya Phule' (1854) and 'Bavan Kashi Subodh Ratnakar' (1892); Led Satyashodhak Samaj post-1890; Sacrificed life treating plague patients in 1897",
                                            chips: ["सावित्रीबाई फुले", "पहिल्या महिला मुख्याध्यापिका", "काव्यफुले १८५४", "बावनकशी सुबोध रत्नाकर", "प्लेग सेवा बलिदान १८९७"]
                                        }
                                    ],
                                    sources: [
                                        { book: "महात्मा जोतीराव फुले समग्र वाङ्मय", standard: "महाराष्ट्र शासन", chapterRef: "संपूर्ण ग्रंथ खंड" },
                                        { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण ६: महात्मा जोतीराव फुले" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ६: राजर्षी छत्रपती शाहू महाराज: आरक्षण धोरण, सामाजिक कायदे व बहुजन प्रबोधन
                        // =========================================================================
                        {
                            id: "gc_hist_c06",
                            code: "CH06",
                            section: "B",
                            slug: "rajarshi-chhatrapati-shahu-maharaj-reforms",
                            nameMr: "राजर्षी छत्रपती शाहू महाराज: आरक्षण धोरण, सामाजिक कायदे व बहुजन प्रबोधन",
                            nameEn: "Rajarshi Chhatrapati Shahu Maharaj: 1902 Reservation Decree & Social Statutes",
                            name: "राजर्षी छत्रपती शाहू महाराज (Rajarshi Shahu Maharaj)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_hist_c06",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_hist_c05",
                            nextChapterId: "gc_hist_c07",
                            metaDescriptionMr: "राजर्षी शाहू महाराज: ५०% आरक्षण जाहीरनामा (२६ जुलै १९०२), मोफत व सक्तीचे शिक्षण १९१७, आंतरजातीय विवाह कायदा १९१९, वसतिगृह चळवळ, वेदोक्त प्रकरण, आणि माणगाव परिषद १९२०.",
                            metaDescriptionEn: "Rajarshi Chhatrapati Shahu Maharaj: Historic 50% reservation decree (26 July 1902), Free & compulsory education 1917, Inter-caste marriage act 1919, Student boarding houses, Vedokta case, Mangaon Parishad 1920.",
                            notesJsonPath: "/data/notes/group_c/prelims/history/c06_shahu_maharaj.json",
                            quizTag: "gc_hist_shahu_01",
                            tags: ["Social Reformers", "Rajarshi Shahu Maharaj", "50 Percent Reservation 1902", "Free Education 1917", "Mangaon Parishad 1920", "High-Weightage"],
                            searchKeywords: ["rajarshi chhatrapati shahu maharaj reservation 26 july 1902", "vedokta episode kshatra jagadguru", "free primary education 1917 intercaste marriage 1919", "mangaon parishad 1920 ambedkar", "राजर्षी शाहू महाराज आरक्षण १९०२", "वेदोक्त प्रकरण", "सक्तीचे शिक्षण १९१७", "माणगाव परिषद १९२०"],
                            topics: [
                                {
                                    id: "top_gc_h06_01",
                                    nameMr: "आरक्षण धोरण, सामाजिक कायदे, वसतिगृहांचे जाळे आणि दलितोद्धार",
                                    nameEn: "Reservation Decree, Progressive Enactments, Hostel Network & Dalit Upliftment",
                                    subtopics: [
                                        {
                                            id: "st_gc_h06_01_01",
                                            titleMr: "ऐतिहासिक ५०% आरक्षण जाहीरनामा (२६ जुलै १९०२): कोल्हापूर संस्थानाच्या गॅझेटमध्ये प्रसिद्ध; संस्थानातील प्रशासकीय नोकऱ्यांमध्ये मागासवर्गीय व बहुजन समाजासाठी ५०% जागा राखीव; भारतातील आरक्षणाचे जनक; मागासवर्गीय तरुणांना प्रशासनात संधी दिली",
                                            titleEn: "50% Reservation Decree (26 July 1902): Published in Kolhapur State Gazette; Mandated 50% reservation in government jobs for non-Brahmin backward communities; Pioneer of Affirmative Action in India",
                                            chips: ["२६ जुलै १९०२ आरक्षण जाहीरनामा", "५० टक्के आरक्षण", "आरक्षणाचे जनक", "कोल्हापूर गॅझेट"]
                                        },
                                        {
                                            id: "st_gc_h06_01_02",
                                            titleMr: "वेदोक्त प्रकरण व धार्मिक सुधारणा (१८९९): पंचगंगा नदीकाठी कार्तिक स्नानावेळी पुरोहित नारायण भट यांनी वेदोक्त ऐवजी पुराणोक्त मंत्र म्हटल्याने वाद; पुरोहितशाहीला आव्हान देऊन १९२० मध्ये 'क्षात्रजगद्गुरू' पीठाची स्थापना; सदाशिवराव बेनाडीकर पहिले क्षात्रजगद्गुरू; सत्यशोधक समाजाला राजाश्रय",
                                            titleEn: "Vedokta Controversy (1899): Priest Narayan Bhat refused Vedic chants to Shahu Maharaj citing non-Kshatriya status; Challenged orthodoxy; Patronized Satyashodhak Samaj; Founded 'Kshatra Jagadguru' seat in 1920 appointing Sadashivrao Benadikar",
                                            chips: ["वेदोक्त प्रकरण १८९९", "नारायण भट", "क्षात्रजगद्गुरू पीठ १९२०", "सदाशिवराव बेनाडीकर"]
                                        },
                                        {
                                            id: "st_gc_h06_01_03",
                                            titleMr: "पुरोगामी कायदे व वसतिगृह चळवळ: २५ जुलै १९१७ रोजी मोफत व सक्तीच्या प्राथमिक शिक्षणाचा कायदा; १२ जुलै १९१९ रोजी आंतरजातीय व आंतरधर्मीय विवाह कायदा; घटस्फोटाचा कायदा (१९२०); देवदासी प्रथा बंदी; वसतिगृहांची स्थापना: व्हिक्टोरिया मराठा बोर्डिंग (१९०१), जैन, लिंगायत, मुस्लिम, आणि मिस क्लार्क महार वसतिगृह",
                                            titleEn: "Progressive Statutes & Student Hostels: Free & Compulsory Primary Education Act (1917), Inter-caste/Inter-religious Marriage Act (1919), Legal Divorce Act (1920), Ban on Devadasi system; Built community hostels (Victoria Maratha 1901, Jain, Lingayat, Miss Clarke Dalit hostel)",
                                            chips: ["सक्तीचे शिक्षण कायदा १९१७", "आंतरजातीय विवाह कायदा १९१९", "घटस्फोट कायदा १९२०", "व्हिक्टोरिया मराठा बोर्डिंग १९०१", "वसतिगृहांचे जनक"]
                                        },
                                        {
                                            id: "st_gc_h06_01_04",
                                            titleMr: "दलितोद्धार व डॉ. आंबेडकरांना सहकार्य: १९१८ मध्ये गुन्हेगार जमाती कायदा रद्द करून दररोजची हाजिरी पद्धत बंद केली; अस्पृश्यांसाठी विहिरी व धर्मशाळा खुल्या केल्या; बलुतेदारी पद्धत रद्द केली; २१-२२ मार्च १९२० रोजी माणगाव परिषद भरवून 'डॉ. आंबेडकर हे तुमचे खरे नेते आहेत' अशी घोषणा केली; मूकनायक साप्ताहिकाला आर्थिक सहाय्य दिले",
                                            titleEn: "Dalit Emancipation & Ambedkar Alliance: Repealed daily roll-call under Criminal Tribes Act (1918); Abolished Balutedari bonded labor; Organized Mangaon Parishad (March 1920) proclaiming Dr. Ambedkar as undisputed Dalit leader; Financed Mooknayak",
                                            chips: ["हाजिरी पद्धत रद्द १९१८", "बलुतेदारी निर्मूलन", "माणगाव परिषद १९२०", "डॉ आंबेडकरांना नेता म्हणून घोषणा", "मूकनायक आर्थिक सहाय्य"]
                                        }
                                    ],
                                    sources: [
                                        { book: "राजर्षी शाहू छत्रपती: जीवन व कार्य", standard: "धनंजय कीर", chapterRef: "संपूर्ण चरित्र ग्रंथ" },
                                        { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण ११: राजर्षी शाहू महाराज" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ७: डॉ. बाबासाहेब आंबेडकर: सामाजिक मुक्ती लढा, संस्था, वृत्तपत्रे व घटनात्मक कार्य
                        // =========================================================================
                        {
                            id: "gc_hist_c07",
                            code: "CH07",
                            section: "B",
                            slug: "dr-b-r-ambedkar-dalit-emancipation-and-constitution",
                            nameMr: "डॉ. बाबासाहेब आंबेडकर: सामाजिक मुक्ती लढा, संस्था, वृत्तपत्रे व घटनात्मक कार्य",
                            nameEn: "Dr. B.R. Ambedkar: Emancipation Movements, Institutions, Press & Constitution",
                            name: "डॉ. बाबासाहेब आंबेडकर (Dr. B.R. Ambedkar)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_hist_c07",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_hist_c06",
                            nextChapterId: "gc_hist_c08",
                            metaDescriptionMr: "बहिष्कृत हितकारिणी सभा (१९२४), वृत्तपत्रे (मूकनायक, बहिष्कृत भारत, जनता), महाड सत्याग्रह (२० मार्च १९२७), मनुस्मृती दहन, गोलमेज परिषदा, पुणे करार (१९३२), आणि स्वतंत्र मजूर पक्ष (१९३६).",
                            metaDescriptionEn: "Dr. B.R. Ambedkar: Bahishkrit Hitakarini Sabha (1924), Periodicals (Mooknayak, Bahishkrit Bharat, Janata), Mahad Satyagraha (20 March 1927), Manusmriti Dahan, Round Table Conferences, Poona Pact (1932), Independent Labour Party (1936).",
                            notesJsonPath: "/data/notes/group_c/prelims/history/c07_dr_ambedkar.json",
                            quizTag: "gc_hist_ambedkar_01",
                            tags: ["Social Reformers", "Dr Ambedkar", "Mahad Satyagraha 1927", "Poona Pact 1932", "ILP 1936", "Bahishkrit Hitakarini", "High-Weightage"],
                            searchKeywords: ["dr br ambedkar mahad satyagraha 20 march 1927", "bahishkrit hitakarini sabha 1924 mooknayak", "poona pact 24 sept 1932 independent labour party", "काळाराम मंदिर सत्याग्रह", "डॉ बाबासाहेब आंबेडकर महाड सत्याग्रह", "पुणे करार १९३२", "बहिष्कृत हितकारिणी सभा"],
                            topics: [
                                {
                                    id: "top_gc_h07_01",
                                    nameMr: "डॉ. आंबेडकरांचे संस्थात्मक कार्य, वृत्तपत्रे, ऐतिहासिक लढे आणि राजकीय वाटचाल",
                                    nameEn: "Institutional Foundations, Journalism, Mass Civil Rights Movements & Political Parties",
                                    subtopics: [
                                        {
                                            id: "st_gc_h07_01_01",
                                            titleMr: "संघटना व वृत्तपत्रे: ३१ जानेवारी १९२० रोजी 'मूकनायक' पाक्षिक सुरू केले (संत तुकारामांचे अभंग); २० जुलै १९२४ रोजी 'बहिष्कृत हितकारिणी सभा' स्थापन (ब्रीदवाक्य: 'शिका, संघटित व्हा आणि संघर्ष करा'); ३ एप्रिल १९२७ रोजी 'बहिष्कृत भारत' पाक्षिक सुरू केले (संत ज्ञानेश्वरांचे अभंग); 'समता' (१९२८), 'जनता' (१९३०) आणि 'प्रबुद्ध भारत' (१९५६); समता सैनिक दल (१९२७)",
                                            titleEn: "Organizations & Journalism: Launched 'Mooknayak' (31 Jan 1920 with Tukaram's verses); Founded 'Bahishkrit Hitakarini Sabha' (20 July 1924: 'Educate, Agitate, Organise'); 'Bahishkrit Bharat' (1927 with Dnyaneshwar's verses); 'Samata' (1928), 'Janata' (1930), 'Prabuddha Bharat' (1956); Samata Sainik Dal (1927)",
                                            chips: ["मूकनायक १९२०", "बहिष्कृत हितकारिणी सभा १९२४", "शिका संघटित व्हा संघर्ष करा", "बहिष्कृत भारत १९२७", "समता सैनिक दल"]
                                        },
                                        {
                                            id: "st_gc_h07_01_02",
                                            titleMr: "ऐतिहासिक सत्याग्रह लढे: १) महाड चवदार तळे सत्याग्रह (२० मार्च १९२७ - सार्वजनिक पाण्याचा हक्क प्रस्थापित केला, सामाजिक सबलीकरण दिन); २) मनुस्मृती दहन (२५ डिसेंबर १९२७ - महाड येथे सहस्रबुद्धे यांच्या हस्ते); ३) काळाराम मंदिर सत्याग्रह (नाशिक, २ मार्च १९३० ते १९३५ - कर्मवीर दादासाहेब गायकवाड यांच्या नेतृत्वाखाली); १३ ऑक्टोबर १९३५ रोजी येवला येथे घोषणा: 'मी हिंदू म्हणून जन्मलो असलो तरी हिंदू म्हणून मरणार नाही'",
                                            titleEn: "Human Rights Satyagrahas: Mahad Chavdar Tale (20 March 1927, Social Empowerment Day); Manusmriti Dahan (25 Dec 1927 at Mahad); Kalaram Temple Satyagraha at Nashik (1930-1935 under Bhaurao Gaikwad); Yeola Declaration (13 Oct 1935: 'I will not die a Hindu')",
                                            chips: ["महाड सत्याग्रह २० मार्च १९२७", "चवदार तळे पाणी हक्क", "मनुस्मृती दहन २५ डिसें १९२७", "काळाराम मंदिर सत्याग्रह १९३०", "येवला घोषणा १९३५"]
                                        },
                                        {
                                            id: "st_gc_h07_01_03",
                                            titleMr: "गोलमेज परिषदा व पुणे करार (१९३२): तिन्ही गोलमेज परिषदांना (१९३०, १९३१, १९३२) उपस्थिती; दलितांसाठी स्वतंत्र मतदारसंघांची मागणी; १६ ऑगस्ट १९३२ चा जातीय निवाडा; गांधीजींचे येरवडा जेलमध्ये उपोषण; २४ सप्टेंबर १९३२ रोजी ऐतिहासिक 'पुणे करार' (Poona Pact - मदन मोहन मालवीय व डॉ. आंबेडकर यांच्या स्वाक्षऱ्या; स्वतंत्र मतदारसंघ रद्द करून प्रांतिक कायदेमंडळात १४८ राखीव जागा मिळाल्या)",
                                            titleEn: "Round Table Conferences & Poona Pact: Attended all 3 RTCs demanding separate electorates; Communal Award (1932); Gandhi's fast unto death at Yerwada; Poona Pact (24 Sept 1932: signed by Malaviya & Ambedkar, surrendered separate electorates for 148 reserved provincial seats and 18% central seats)",
                                            chips: ["तिन्ही गोलमेज परिषदा", "जातीय निवाडा १९३२", "गांधीजी उपोषण येरवडा", "पुणे करार २४ सप्टें १९३२", "१४८ राखीव जागा"]
                                        },
                                        {
                                            id: "st_gc_h07_01_04",
                                            titleMr: "पक्ष, घटना निर्मिती व धम्मदीक्षा: स्वतंत्र मजूर पक्ष (ILP १९३६); शेड्युल्ड कास्ट्स फेडरेशन (SCF १९४२); पीपल्स एज्युकेशन सोसायटी (१९४५ - मुंबईत सिद्धार्थ व औरंगाबादला मिलिंद कॉलेज); संविधान मसुदा समितीचे अध्यक्ष; स्वतंत्र भारताचे पहिले कायदेमंत्री (हिंदू कोड बिलावरून राजीनामा); १४ ऑक्टोबर १९५६ रोजी दीक्षाभूमी, नागपूर येथे बौद्ध धम्माची दीक्षा (२२ प्रतिज्ञा); ६ डिसेंबर १९५६ रोजी महापरिनिर्वाण (चैत्यभूमी, दादर); १९९० मध्ये 'भारतरत्न'",
                                            titleEn: "Parties, Constitution & Buddhist Conversion: Independent Labour Party (1936); Scheduled Castes Federation (1942); People's Education Society (1945: Siddharth & Milind Colleges); Chairman of Drafting Committee; 1st Law Minister; Conversion to Buddhism at Deekshabhoomi Nagpur (14 Oct 1956, 22 Vows); Mahaparinirvana (6 Dec 1956); Bharat Ratna (1990)",
                                            chips: ["स्वतंत्र मजूर पक्ष १९३६", "मसुदा समिती अध्यक्ष", "पहिले कायदा मंत्री", "धम्मदीक्षा १४ ऑक्टो १९५६", "महापरिनिर्वाण ६ डिसें १९५६", "भारतरत्न १९९०"]
                                        }
                                    ],
                                    sources: [
                                        { book: "डॉ. बाबासाहेब आंबेडकर चरित्र", standard: "धनंजय कीर", chapterRef: "संपूर्ण चरित्र ग्रंथ" },
                                        { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण १२: डॉ. बाबासाहेब आंबेडकर व दलित चळवळ" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ८: स्त्री शिक्षण व समाजप्रबोधन: महर्षी कर्वे, आगरकर, वि. रा. शिंदे व पंडिता रमाबाई
                        // =========================================================================
                        {
                            id: "gc_hist_c08",
                            code: "CH08",
                            section: "B",
                            slug: "other-pioneer-reformers-karve-agarkar-and-shinde",
                            nameMr: "स्त्री शिक्षण व समाजप्रबोधन: महर्षी कर्वे, आगरकर, वि. रा. शिंदे व पंडिता रमाबाई",
                            nameEn: "Pioneer Reformers: Maharshi Karve, Agarkar, V.R. Shinde & Pandita Ramabai",
                            name: "कर्वे, आगरकर, शिंदे व इतर सुधारक",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_hist_c08",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_hist_c07",
                            nextChapterId: "gc_hist_c09",
                            metaDescriptionMr: "महर्षी धोंडो केशव कर्वे (हिंगणे आश्रम, पहिले महिला विद्यापीठ १९१६, भारतरत्न १९५८), गोपाळ गणेश आगरकर (सुधारक १८८८), महर्षी वि. रा. शिंदे (डिप्रेस्ड क्लासेस मिशन १९०६), आणि पंडिता रमाबाई (शारदा सदन).",
                            metaDescriptionEn: "Maharshi D.K. Karve (Hingne Ashram, SNDT 1916, Bharat Ratna 1958), G.G. Agarkar (Sudharak 1888, rationalism), Maharshi V.R. Shinde (Depressed Classes Mission 1906), Pandita Ramabai (Sharada Sadan 1889).",
                            notesJsonPath: "/data/notes/group_c/prelims/history/c08_karve_agarkar_shinde.json",
                            quizTag: "gc_hist_reformers_01",
                            tags: ["Social Reformers", "Maharshi Karve SNDT", "Gopal Ganesh Agarkar", "VR Shinde Depressed Classes", "Pandita Ramabai"],
                            searchKeywords: ["maharshi dk karve sndt womens university 1916", "gopal ganesh agarkar sudharak rationalism", "vr shinde depressed classes mission 1906", "pandita ramabai sharada sadan arya mahila samaj", "महर्षी कर्वे महिला विद्यापीठ", "आगरकर सुधारक", "विठ्ठल रामजी शिंदे डिप्रेस्ड क्लासेस मिशन", "पंडिता रमाबाई"],
                            topics: [
                                {
                                    id: "top_gc_h08_01",
                                    nameMr: "महर्षी कर्वे, आगरकर, वि. रा. शिंदे आणि पंडिता रमाबाई यांचे कार्य",
                                    nameEn: "Pioneering Reformers: Karve's Female Education, Agarkar's Rationalism, Shinde & Ramabai",
                                    subtopics: [
                                        {
                                            id: "st_gc_h08_01_01",
                                            titleMr: "महर्षी धोंडो केशव कर्वे (१८५८-१९६२): विधवा विवाहाचा पुरस्कार व स्वतः गोदुबाई या विधवेशी पुनर्विवाह (१८९३); अनाथ बालिकाश्रम (हिंगणे, पुणे १८९९); निष्काम कर्म मठ (१९१०); जपानच्या महिला विद्यापीठाच्या धर्तीवर भारतातील पहिले महिला विद्यापीठ: SNDT महिला विद्यापीठ (१९१६ - सर विठ्ठलदास ठाकरसी यांनी १५ लाखांची देणगी दिली); आत्मचरित्र 'आत्मवृत्त'; १९५८ मध्ये १०० व्या वाढदिवशी 'भारतरत्न' सन्मान",
                                            titleEn: "Maharshi D.K. Karve: Champion of widow rehabilitation; Married widow Godubai (1893); Hingne Anath Balikashram (1899); Founded India's 1st Women's University (SNDT 1916 with donation from Sir Vithaldas Thackersey); Autobiography 'Atmvrutta'; Conferred Bharat Ratna on centennial birthday (1958)",
                                            chips: ["महर्षी कर्वे (भारतरत्न १९५८)", "हिंगणे अनाथ बालिकाश्रम १८९९", "SNDT महिला विद्यापीठ १९१६", "विठ्ठलदास ठाकरसी देणगी"]
                                        },
                                        {
                                            id: "st_gc_h08_01_02",
                                            titleMr: "गोपाळ गणेश आगरकर (१८५६-१८९५): जहाल समाजसुधारक व बुद्धिप्रामाण्यवादी विचारवंत; 'इष्ट असेल ते बोलणार आणि साध्य असेल ते करणार'; केसरीचे पहिले संपादक (१८८१); टिळकांशी मतभेद झाल्याने ऑक्टोबर १८८८ मध्ये 'सुधारक' साप्ताहिक सुरू केले; 'आधी सामाजिक सुधारणा की आधी राजकीय स्वातंत्र्य' वादात सामाजिक सुधारणेला प्राधान्य; संमती वयाचा कायदा (१८९१) ला पाठिंबा",
                                            titleEn: "Gopal Ganesh Agarkar: Rationalist icon; First editor of Kesari (1881); Split with Tilak and founded 'Sudharak' (1888); Championed social reform before political freedom; Supported Age of Consent Act 1891; Works: 101 Days in Dongri Jail, Vikarvilasit",
                                            chips: ["गोपाळ गणेश आगरकर", "सुधारक साप्ताहिक १८८८", "आधी सामाजिक सुधारणा वाद", "बुद्धिप्रामाण्यवाद", "संमती वय कायदा १८९१"]
                                        },
                                        {
                                            id: "st_gc_h08_01_03",
                                            titleMr: "महर्षी विठ्ठल रामजी शिंदे (१८७३-१९४४): १८ ऑक्टोबर १९०६ रोजी मुंबईत 'डिप्रेस्ड क्लासेस मिशन' (Depressed Classes Mission of India) ची स्थापना; अस्पृश्यांसाठी शाळा व वसतिगृहे; १९१८ मध्ये मुंबईत अखिल भारतीय अस्पृश्यता निवारण परिषद भरवली (सयाजीराव गायकवाड अध्यक्ष); येरवडा जेलमध्ये 'भारतीय अस्पृश्यतेचा प्रश्न' हा संशोधनपर ग्रंथ लिहिला; आत्मचरित्र: 'माझ्या आठवणी व अनुभव'",
                                            titleEn: "Maharshi Vitthal Ramji Shinde: Founded Depressed Classes Mission in Mumbai (18 Oct 1906); Organized All India Anti-Untouchability Conference 1918 (Sayajirao Gaikwad chair); Wrote 'Bharatiya Asprushyatecha Prashna' in Yerwada jail; Autobiography: Majhya Aathvani Va Anubhav",
                                            chips: ["विठ्ठल रामजी शिंदे", "डिप्रेस्ड क्लासेस मिशन १८ ऑक्टो १९०६", "भारतीय अस्पृश्यतेचा प्रश्न", "अस्पृश्यता निवारण परिषद १९१८"]
                                        },
                                        {
                                            id: "st_gc_h08_01_04",
                                            titleMr: "पंडिता रमाबाई (१८५८-१९२२): आर्य महिला समाज (पुणे १८८२); हंटर कमिशन साक्ष; 'The High Caste Hindu Woman' (१८८७); शारदा सदन (मुंबई १८८९/पुणे - विधवा महिलांचे वसतिगृह); मुक्ती सदन (केडगाव १८९८ - अनाथ मुलींसाठी); ताराबाई शिंदे: १८८२ मध्ये 'स्त्री-पुरुष तुलना' हा भारतातील पहिला जहाल स्त्रीवादी ग्रंथ लिहिला",
                                            titleEn: "Pandita Ramabai & Tarabai Shinde: Pandita Ramabai founded Arya Mahila Samaj (1882), Sharada Sadan (1889), Mukti Sadan at Kedgaon (1898); Tarabai Shinde authored 'Stri Purush Tulana' (1882) - India's 1st radical feminist treatise against patriarchy",
                                            chips: ["पंडिता रमाबाई (शारदा सदन १८८९)", "मुक्ती सदन केडगाव", "ताराबाई शिंदे (स्त्री-पुरुष तुलना १८८२)", "पहिले स्त्रीवादी पुस्तक"]
                                        }
                                    ],
                                    sources: [
                                        { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण ७, ८, ९, १०: कर्वे, आगरकर, शिंदे व रमाबाई" },
                                        { book: "महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण ५: महाराष्ट्रातील समाजसुधारक" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ९: शेतकरी उठाव (दख्खनचे दंगे १८७५) आणि नारायण मेघाजी लोखंडे यांची कामगार चळवळ
                        // =========================================================================
                        {
                            id: "gc_hist_c09",
                            code: "CH09",
                            section: "C",
                            slug: "peasant-revolts-deccan-riots-and-working-class-movement",
                            nameMr: "शेतकरी उठाव (दख्खनचे दंगे १८७५) आणि नारायण मेघाजी लोखंडे यांची कामगार चळवळ",
                            nameEn: "Agrarian Revolts (Deccan Riots 1875) & N.M. Lokhande's Labor Movement",
                            name: "शेतकरी उठाव व कामगार चळवळ",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 2,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_hist_c09",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_hist_c08",
                            nextChapterId: "gc_hist_c10",
                            metaDescriptionMr: "दख्खनचे दंगे (सुपे, पुणे १८७५, सावकार कर्जरोखे जाळणे, डेक्कन ॲग्रिकल्चरिस्ट्स रिलीफ ॲक्ट १८७९), आणि नारायण मेघाजी लोखंडे (बॉम्बे मिलहँड्स असोसिएशन १८९०, कामगार चळवळीचे जनक, रविवारची सुट्टी).",
                            metaDescriptionEn: "Deccan Riots (May 1875 at Supe Pune, moneylender account book burning, Deccan Agriculturists' Relief Act 1879), and Narayan Meghaji Lokhande (Bombay Millhands Association 1890, Sunday holiday).",
                            notesJsonPath: "/data/notes/group_c/prelims/history/c09_peasant_labour.json",
                            quizTag: "gc_hist_peasant_01",
                            tags: ["Peasant Revolts", "Deccan Riots 1875", "Relief Act 1879", "Narayan Meghaji Lokhande", "Bombay Millhands 1890"],
                            searchKeywords: ["deccan riots 1875 supe pune commission relief act 1879", "narayan meghaji lokhande bombay millhands association 1890", "sunday holiday labor movement", "दख्खनचे दंगे १८७५ सुपे", "डेक्कन ॲग्रिकल्चरिस्ट्स रिलीफ ॲक्ट", "नारायण मेघाजी लोखंडे कामगार चळवळ"],
                            topics: [
                                {
                                    id: "top_gc_h09_01",
                                    nameMr: "दख्खनचे दंगे, सावकारशाही विरोध आणि भारतातील पहिली कामगार संघटना",
                                    nameEn: "Deccan Riots Inquest, Anti-Moneylender Uprising & Pioneer Labor Movement",
                                    subtopics: [
                                        {
                                            id: "st_gc_h09_01_01",
                                            titleMr: "दख्खनचे दंगे (Deccan Riots - मे १८७५): अमेरिकन यादवी युद्ध संपल्याने कापसाचे भाव कोसळणे, दुष्काळ आणि विंगेट महसूल वाढीमुळे शेतकरी कर्जात बुडाले; १२ मे १८७५ रोजी सुपे (ता. बारामती, जि. पुणे) येथे सावकारांविरुद्ध उठावाची सुरुवात; सावकारांची घरे लुटली व कर्जरोखे जाळले; ब्रिटिश सरकारने 'दख्खन दंगे चौकशी आयोग' नेमला; शिफारशीवरून 'डेक्कन ॲग्रिकल्चरिस्ट्स रिलीफ ॲक्ट' (१८७९) संमत झाला",
                                            titleEn: "Deccan Riots (May 1875): Post-Civil War cotton crash and enhanced revenue pushed peasants into debt traps; Outbreak on 12 May 1875 at Supe (Baramati, Pune) targeting moneylenders; Debt bonds burned; Resulted in Deccan Riots Commission and Deccan Agriculturists' Relief Act 1879",
                                            chips: ["दख्खनचे दंगे १२ मे १८७५ (सुपे)", "सावकार कर्जरोखे जाळणे", "दख्खन दंगे आयोग १८७६", "डेक्कन ॲग्रिकल्चरिस्ट्स रिलीफ ॲक्ट १८७९"]
                                        },
                                        {
                                            id: "st_gc_h09_01_02",
                                            titleMr: "नारायण मेघाजी लोखंडे (१८४८-१८९७): भारतीय कामगार चळवळीचे जनक; सत्यशोधक समाजाचे निष्ठावान कार्यकर्ते; १८८० मध्ये 'दीनबंधू' चे संपादन स्वतःकडे घेतले; २४ एप्रिल १८९० रोजी 'बॉम्बे मिलहँड्स असोसिएशन' ची स्थापना केली (भारतातील पहिली कामगार संघटना); कामगारांना रविवारची साप्ताहिक सुट्टी, दुपारची जेवणाची अर्धा तास सुट्टी आणि कामाचे तास निश्चित करून घेतले; 'रावबहादूर' व 'जे.पी.' पदवी",
                                            titleEn: "Narayan Meghaji Lokhande (1848-1897): Father of Indian Labour Movement; Satyashodhak stalwart; Edited Deenbandhu; Founded Bombay Millhands Association on 24 April 1890 (1st labor union in India); Secured Sunday weekly holiday and 30-min lunch breaks; Conferred 'Rao Bahadur'",
                                            chips: ["नारायण मेघाजी लोखंडे (कामगार चळवळीचे जनक)", "बॉम्बे मिलहँड्स असोसिएशन १८९० (पहिली कामगार संघटना)", "रविवारची सुट्टी", "दीनबंधू संपादक", "रावबहादूर पदवी"]
                                        }
                                    ],
                                    sources: [
                                        { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण १५: शेतकरी लढे व कामगार चळवळ" },
                                        { book: "महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण ११: दख्खनचे दंगे व कामगार संघटना" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १०: महाराष्ट्रातील वृत्तपत्रे, नियतकालिके आणि राजकीय प्रबोधन
                        // =========================================================================
                        {
                            id: "gc_hist_c10",
                            code: "CH10",
                            section: "C",
                            slug: "press-and-newspapers-in-maharashtra-national-movement",
                            nameMr: "महाराष्ट्रातील वृत्तपत्रे, नियतकालिके आणि राजकीय प्रबोधन",
                            nameEn: "Newspapers, Periodicals & Political Awakening in Maharashtra",
                            name: "वृत्तपत्रे व राजकीय प्रबोधन (Historical Press)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 2,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_hist_c10",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_hist_c09",
                            nextChapterId: "gc_hist_c11",
                            metaDescriptionMr: "ऐतिहासिक वृत्तपत्रे व संपादक (ज्ञानप्रकाश, इंदुप्रकाश, दीनबंधू, केसरी, मराठा, काळ - शिवराम परांजपे, नवकाळ), आणि व्हर्नाक्युलर प्रेस ॲक्ट १८७८.",
                            metaDescriptionEn: "Historical Press in Maharashtra: Editors and periodicals (Dnyanprakash, Induprakash, Deenbandhu, Kesari, Mahratta, Kaal by S.M. Paranjape), and Vernacular Press Act 1878.",
                            notesJsonPath: "/data/notes/group_c/prelims/history/c10_press_newspapers.json",
                            quizTag: "gc_hist_press_01",
                            tags: ["Historical Press", "Newspapers Editors", "Kesari Mahratta", "Kaal Paranjape", "Vernacular Press Act 1878"],
                            searchKeywords: ["newspapers in maharashtra editors darpan kesari kaal", "shivram mahadev paranjape kaal", "vernacular press act 1878 lytton", "वृत्तपत्रे संपादक यादी", "केसरी मराठा", "काळ वृत्तपत्र", "व्हर्नाक्युलर प्रेस ॲक्ट"],
                            topics: [
                                {
                                    id: "top_gc_h10_01",
                                    nameMr: "महाराष्ट्रातील ऐतिहासिक वृत्तपत्रे, संपादक आणि ब्रिटिश वृत्तपत्र कायदे",
                                    nameEn: "Historical Press Concordance, Prominent Editors & Colonial Press Laws",
                                    subtopics: [
                                        {
                                            id: "st_gc_h10_01_01",
                                            titleMr: "प्रमुख वृत्तपत्रे व संपादक: दर्पण (१८३२ - बाळशास्त्री जांभेकर); प्रभाकर (१८४१ - भाऊ महाजन); ज्ञानोदय (१८४२ - ख्रिस्ती मिशनरी); ज्ञानप्रकाश (१८४९ - कृष्णाजी त्र्यंबक रानडे); इंदुप्रकाश (१८६२ - विष्णुपरशुराम शास्त्री पंडित); नेटिव्ह ओपिनियन (१८६४ - व्ही. एन. मंडलिक); दीनबंधू (१८७७ - कृष्णराव भालेकर); केसरी व मराठा (१८८१ - टिळक, आगरकर); सुधारक (१८८८ - आगरकर); काळ (१८९८ - शिवराम महादेव परांजपे); नवकाळ (१९२३ - कृ. प्र. खाडिलकर)",
                                            titleEn: "Master Newspaper Index: Darpan (1832 Jambhekar), Prabhakar (1841 Bhau Mahajan), Dnyanodaya (1842), Dnyanprakash (1849 K.T. Ranade), Induprakash (1862 V.P. Pandit), Native Opinion (1864 Mandlik), Deenbandhu (1877 Bhalekar), Kesari & Mahratta (1881), Sudharak (1888), Kaal (1898 S.M. Paranjape), Navakal (1923 Khadilkar)",
                                            chips: ["दर्पण (जांभेकर)", "प्रभाकर (भाऊ महाजन)", "ज्ञानप्रकाश (रानडे)", "इंदुप्रकाश (विष्णुशास्त्री पंडित)", "काळ (शिवराम परांजपे)", "नवकाळ (खाडिलकर)"]
                                        },
                                        {
                                            id: "st_gc_h10_01_02",
                                            titleMr: "ब्रिटिश वृत्तपत्र दडपशाही कायदे: मेटकाफ कायदा १८३५ (चार्ल्स मेटकाफ - 'भारतीय वृत्तपत्रसृष्टीचा मुक्तिदाता'); व्हर्नाक्युलर प्रेस ॲक्ट १८७८ (लॉर्ड लिटन - 'गॅगिंग ॲक्ट' / देशी वृत्तपत्र गळचेपी कायदा; केवळ भारतीय भाषेतील वृत्तपत्रांवर निर्बंध; १८८१ मध्ये लॉर्ड रिपनने हा कायदा रद्द केला); वृत्तपत्र कायदा १९०८ आणि भारतीय वृत्तपत्र कायदा १९१०",
                                            titleEn: "Colonial Press Enactments: Metcalfe Act 1835 (Liberator of Indian Press); Vernacular Press Act 1878 (Lord Lytton's Gagging Act against vernacular journalism, repealed by Lord Ripon in 1881); Newspapers Act 1908 and Indian Press Act 1910",
                                            chips: ["चार्ल्स मेटकाफ (वृत्तपत्रांचा मुक्तिदाता)", "व्हर्नाक्युलर प्रेस ॲक्ट १८७८ (लॉर्ड लिटन)", "गॅगिंग ॲक्ट", "लॉर्ड रिपनने रद्द केला १८८१"]
                                        }
                                    ],
                                    sources: [
                                        { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण १४: वृत्तपत्रे व जनजागृती" },
                                        { book: "महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण ४: वृत्तपत्रांचा इतिहास" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ११: महाराष्ट्रातील सशस्त्र क्रांतिकारक: फडके, चापेकर बंधू व स्वातंत्र्यवीर सावरकर
                        // =========================================================================
                        {
                            id: "gc_hist_c11",
                            code: "CH11",
                            section: "D",
                            slug: "armed-revolutionaries-phadke-chapekar-and-savarkar",
                            nameMr: "महाराष्ट्रातील सशस्त्र क्रांतिकारक: फडके, चापेकर बंधू व स्वातंत्र्यवीर सावरकर",
                            nameEn: "Armed Revolutionary Movements: Vasudev Balwant Phadke, Chapekars & Savarkar",
                            name: "सशस्त्र क्रांतिकारक (Armed Revolutionaries)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_hist_c11",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_hist_c10",
                            nextChapterId: "gc_hist_c12",
                            metaDescriptionMr: "आद्य क्रांतिकारक वासुदेव बळवंत फडके (रामोशी सैन्य, एडन तुरुंग), चापेकर बंधू (रँडचा वध १८९७), विनायक दामोदर सावरकर (अभिनव भारत १९०४, अंदमान), आणि नाशिकचा जॅक्सन वध (अनंत कान्हेरे १९०९).",
                            metaDescriptionEn: "Armed resistance: Vasudev Balwant Phadke (1879 rebellion, Aden), Chapekar brothers (Rand murder 1897), V.D. Savarkar (Abhinav Bharat 1904, Cellular Jail), Anant Kanhere (Jackson assassination 1909).",
                            notesJsonPath: "/data/notes/group_c/prelims/history/c11_armed_revolutionaries.json",
                            quizTag: "gc_hist_revolution_01",
                            tags: ["Armed Revolutionaries", "Vasudev Balwant Phadke", "Chapekar Brothers 1897", "VD Savarkar Abhinav Bharat", "Anant Kanhere 1909"],
                            searchKeywords: ["vasudev balwant phadke ramoshi rebellion aden", "chapekar brothers rand assassination 1897", "vd savarkar abhinav bharat 1904", "anant kanhere jackson murder 1909", "वासुदेव बळवंत फडके", "चापेकर बंधू रँड वध", "सावरकर अभिनव भारत", "अनंत कान्हेरे"],
                            topics: [
                                {
                                    id: "top_gc_h11_01",
                                    nameMr: "सशस्त्र क्रांतीचा उदय: फडके, चापेकर बंधूंचे बलिदान आणि अभिनव भारत",
                                    nameEn: "Genesis of Armed Insurgency: Phadke, Chapekar Martyrdom & Abhinav Bharat",
                                    subtopics: [
                                        {
                                            id: "st_gc_h11_01_01",
                                            titleMr: "वासुदेव बळवंत फडके (१८४५-१८८३): महाराष्ट्रातील सशस्त्र क्रांतीचे जनक; १८७६-७७ च्या दुष्काळात ब्रिटिश निष्ठुरतेविरुद्ध बंड; दौलतराव नाईक यांच्या साथीने रामोशी व कोळ्यांचे सशस्त्र सैन्य उभे केले; सरकारी तिजोऱ्या लुटल्या; २० जुलै १८७९ रोजी हैदराबाद संस्थानात अटक; सार्वजनिक काकांनी खटला लढवला; एडनच्या तुरुंगात १७ फेब्रुवारी १८८३ रोजी मृत्यू",
                                            titleEn: "Vasudev Balwant Phadke (1845-1883): Father of Indian Armed Rebellion; Mobilized Ramoshis under Daulatrao Naik during 1876 famine; Raided treasuries; Arrested in Hyderabad (1879); Defended by Sarvajanik Kaka; Martyrdom in Aden jail on 17 Feb 1883",
                                            chips: ["वासुदेव बळवंत फडके (आद्य क्रांतिकारक)", "रामोशी सैन्य (दौलतराव नाईक)", "सार्वजनिक काकांनी खटला लढवला", "एडन जेल १८८३ मृत्यू"]
                                        },
                                        {
                                            id: "st_gc_h11_01_02",
                                            titleMr: "चापेकर बंधू व रँड वध (१८९७): पुण्यात १८९६-९७ च्या प्लेग साथीच्या वेळी प्लेग कमिशनर वॉल्टर चार्ल्स रँड याने केलेल्या अत्याचारांचा बदला; दामोदर व बाळकृष्ण चापेकर यांनी २२ जून १८९७ रोजी गणेशखिंड (पुणे) येथे रँड व आयर्स्ट यांचा गोळ्या झाडून वध केला; द्रविड बंधूंच्या फितुरीमुळे चापेकर बंधूंना फाशी; वासुदेव चापेकर व महादेव रानडे यांनी द्रविड बंधूंचा वध केला",
                                            titleEn: "Chapekar Brothers & Rand Assassination (1897): Retaliation against tyrannical plague operations by Commissioner Walter Charles Rand; Damodar & Balkrishna Chapekar shot Rand & Ayerst on 22 June 1897 at Ganeshkhind; Betrayed by Dravid brothers; Chapekar brothers executed",
                                            chips: ["चापेकर बंधू (दामोदर, बाळकृष्ण, वासुदेव)", "रँड व आयर्स्ट वध २२ जून १८९७", "गणेशखिंड पुणे", "द्रविड बंधू फितुरी"]
                                        },
                                        {
                                            id: "st_gc_h11_01_03",
                                            titleMr: "स्वातंत्र्यवीर सावरकर व अभिनव भारत (१९०४): विनायक दामोदर सावरकर यांनी नाशिकमध्ये 'मित्रमेळा' (१८९९) स्थापन केली, त्याचे रूपांतर १९०४ मध्ये 'अभिनव भारत' या गुप्त क्रांतिकारी संघटनेत झाले; '१८५७ चे स्वातंत्र्यसमर' ग्रंथ; लंडनमध्ये इंडिया हाऊस येथून बॉम्ब बनवण्याचे तंत्र शिकून भारतात पाठवले; नाशिकचा कलेक्टर जॅक्सन याचा २१ डिसेंबर १९०९ रोजी अनंत लक्ष्मण कान्हेरे यांनी गोळ्या झाडून वध केला; सावरकरांना ५० वर्षे अंदमान काळेपाणी शिक्षा",
                                            titleEn: "Swatantryaveer V.D. Savarkar & Abhinav Bharat (1904): Founded Mitra Mela (1899) in Nashik, renamed Abhinav Bharat (1904); Authored '1857: War of Independence'; Anant Laxman Kanhere assassinated Nashik Collector Jackson on 21 Dec 1909; Savarkar sentenced to 50 years at Cellular Jail",
                                            chips: ["मित्रमेळा १८९९ -> अभिनव भारत १९०४", "स्वातंत्र्यवीर सावरकर", "१८५७ चे स्वातंत्र्यसमर ग्रंथ", "अनंत कान्हेरे (जॅक्सन वध १९०९)", "अंदमान काळेपाणी शिक्षा"]
                                        }
                                    ],
                                    sources: [
                                        { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण १०: क्रांतिकारी चळवळी" },
                                        { book: "महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण १०: महाराष्ट्रातील सशस्त्र लढा" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १२: राष्ट्रीय काँग्रेसची मुंबईत स्थापना (१८८५) आणि मवाळ-जहाल कालखंड
                        // =========================================================================
                        {
                            id: "gc_hist_c12",
                            code: "CH12",
                            section: "E",
                            slug: "indian-national-congress-foundation-in-bombay-1885",
                            nameMr: "राष्ट्रीय काँग्रेसची मुंबईत स्थापना (१८८५) आणि मवाळ-जहाल कालखंड",
                            nameEn: "INC Foundation in Bombay (1885), Moderate Phase & Extremist Era",
                            name: "काँग्रेस स्थापना व मवाळ-जहाल कालखंड",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 2,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_hist_c12",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_hist_c11",
                            nextChapterId: "gc_hist_c13",
                            metaDescriptionMr: "काँग्रेसचे पहिले अधिवेशन (गोकुळदास तेजपाल संस्कृत कॉलेज, मुंबई २८ डिसेंबर १८८५, व्योमेशचंद्र बॅनर्जी, ७२ प्रतिनिधी), मवाळ नेते (फिरोजशाह मेहता, नामदार गोखले - भारत सेवक समाज १९०५), आणि सुरत फूट (१९०७).",
                            metaDescriptionEn: "INC 1st Session (28 Dec 1885 at Gokuldas Tejpal College Bombay, W.C. Bonnerjee, 72 delegates), Moderate leadership (Pherozeshah Mehta, G.K. Gokhale Servants of India Society 1905), Surat Split (1907).",
                            notesJsonPath: "/data/notes/group_c/prelims/history/c12_inc_foundation.json",
                            quizTag: "gc_hist_inc_01",
                            tags: ["INC Foundation 1885", "Bombay Gokuldas Tejpal", "Gopal Krishna Gokhale", "Servants of India 1905", "Surat Split 1907"],
                            searchKeywords: ["indian national congress 1885 bombay 72 delegates", "gopal krishna gokhale servants of india society 1905", "surat split 1907 moderates extremists", "काँग्रेस स्थापना १८८५ मुंबई", "गोपाळ कृष्ण गोखले भारत सेवक समाज", "सुरत फूट १९०७"],
                            topics: [
                                {
                                    id: "top_gc_h12_01",
                                    nameMr: "काँग्रेसची स्थापना, मवाळ विचारसरणी आणि सुरत फूट",
                                    nameEn: "Foundation of INC in Bombay, Moderate Politics & The 1907 Surat Split",
                                    subtopics: [
                                        {
                                            id: "st_gc_h12_01_01",
                                            titleMr: "राष्ट्रीय काँग्रेसची मुंबईतील स्थापना: २८ डिसेंबर १८८५ रोजी मुंबईच्या 'गोकुळदास तेजपाल संस्कृत कॉलेज' मध्ये पहिले अधिवेशन भरले; पुण्यात कॉलऱ्याची साथ आल्यामुळे अधिवेशन मुंबईला हलवले; संस्थापक: ॲलन ऑक्टाव्हियन ह्युम (A.O. Hume); पहिले अध्यक्ष: व्योमेशचंद्र बॅनर्जी; एकूण ७२ प्रतिनिधी उपस्थित (महाराष्ट्रातून फिरोजशाह मेहता, दादाभाई नौरोजी, के. टी. तेलंग, गोपाळ गणेश आगरकर, गवा जोशी सहभाग)",
                                            titleEn: "Foundation of INC: 28 Dec 1885 at Gokuldas Tejpal Sanskrit College Bombay; Shifted from Pune due to cholera; A.O. Hume founder; W.C. Bonnerjee first president; 72 founding delegates attended",
                                            chips: ["काँग्रेस स्थापना २८ डिसें १८८५ (मुंबई)", "गोकुळदास तेजपाल कॉलेज", "७२ प्रतिनिधी उपस्थित", "व्योमेशचंद्र बॅनर्जी पहिले अध्यक्ष", "ए ओ ह्युम"]
                                        },
                                        {
                                            id: "st_gc_h12_01_02",
                                            titleMr: "मवाळ नेतृत्व व गोपाळ कृष्ण गोखले: सनदशीर मार्गाने अर्ज-विनंत्यांचे राजकारण; नामदार गोपाळ कृष्ण गोखले (१८६६-१९१५): महात्मा गांधींचे राजकीय गुरू; १९०५ मध्ये पुण्यात 'भारत सेवक समाज' (Servants of India Society) ची स्थापना; १९०५ च्या बनारस काँग्रेस अधिवेशनाचे अध्यक्ष; वेल्बी कमिशनसमोर प्रभावी साक्ष",
                                            titleEn: "Moderate Leadership & Gokhale: Constitutional petitions; Gokhale (1866-1915): Political guru of Mahatma Gandhi; Founded Servants of India Society (1905 at Pune); Chaired 1905 Banaras Congress; Welby Commission testimony",
                                            chips: ["गोपाळ कृष्ण गोखले (गांधीजींचे राजकीय गुरू)", "भारत सेवक समाज १९०५ (पुणे)", "बनारस काँग्रेस अध्यक्ष १९०५", "वेल्बी कमिशन साक्ष"]
                                        },
                                        {
                                            id: "st_gc_h12_01_03",
                                            titleMr: "सुरत फूट (१९०७): काँग्रेसच्या सुरत अधिवेशनात मवाळ व जहाल गटांमध्ये तीव्र संघर्ष; अध्यक्षपदावरून वाद (रासबिहारी घोष अध्यक्ष झाले); जहाल गटाचे नेते लोकमान्य टिळक, लाला लजपत राय, बिपिन चंद्र पाल यांनी स्वतंत्र भूमिका घेतली; काँग्रेसमधून जहालांची हकालपट्टी झाली",
                                            titleEn: "Surat Split (1907): Clashes between Moderates and Extremists at Surat Session over presidency (Rash Behari Ghosh chaired); Extremist leaders (Lal-Bal-Pal) expelled from Congress organization until 1916",
                                            chips: ["सुरत फूट १९०७", "रासबिहारी घोष अध्यक्ष", "मवाळ vs जहाल संघर्ष", "लाल-बाल-पाल"]
                                        }
                                    ],
                                    sources: [
                                        { book: "आधुनिक भारताचा इतिहास", standard: "बिपिन चंद्र", chapterRef: "काँग्रेसची स्थापना व मवाळ कालखंड" },
                                        { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण ८: काँग्रेस स्थापना व महाराष्ट्र" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १३: लोकमान्य बाळ गंगाधर टिळक: चतुःसूत्री, गणेशोत्सव, शिवजयंती व होमरूल चळवळ
                        // =========================================================================
                        {
                            id: "gc_hist_c13",
                            code: "CH13",
                            section: "E",
                            slug: "lokmanya-bal-gangadhar-tilak-and-home-rule-league",
                            nameMr: "लोकमान्य बाळ गंगाधर टिळक: चतुःसूत्री, गणेशोत्सव, शिवजयंती व होमरूल चळवळ",
                            nameEn: "Lokmanya Bal Gangadhar Tilak: Four-Point Program & Home Rule Movement",
                            name: "लोकमान्य टिळक व होमरूल चळवळ",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_hist_c13",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_hist_c12",
                            nextChapterId: "gc_hist_c14",
                            metaDescriptionMr: "लोकमान्य टिळक: सार्वजनिक गणेशोत्सव (१८९३), शिवजयंती (१८९५), चतुःसूत्री (स्वदेशी, बहिष्कार, राष्ट्रीय शिक्षण, स्वराज्य), मंडले तुरुंगवास (गीतारहस्य), आणि बेळगाव होमरूल लीग (१९१६).",
                            metaDescriptionEn: "Lokmanya Tilak: Public Ganeshotsav (1893), Shiv Jayanti (1895), 4-Point program, 1908 sedition trial & Mandalay exile (Gita Rahasya), Belgaum Home Rule League (April 1916).",
                            notesJsonPath: "/data/notes/group_c/prelims/history/c13_tilak_homerule.json",
                            quizTag: "gc_hist_tilak_01",
                            tags: ["Lokmanya Tilak", "Four Point Program", "Ganeshotsav 1893", "Mandalay Jail Gita Rahasya", "Home Rule League 1916"],
                            searchKeywords: ["lokmanya tilak ganeshotsav 1893 shivaji festival 1895", "swadeshi boycott national education swaraj", "mandalay jail gita rahasya 1908", "home rule league belgaum 1916 tilak", "लोकमान्य टिळक चतुःसूत्री", "गणेशोत्सव १८९३", "मंडले जेल गीतारहस्य", "होमरूल लीग बेळगाव १९१६"],
                            topics: [
                                {
                                    id: "top_gc_h13_01",
                                    nameMr: "लोकमान्य टिळकांचे जहाल राजकारण, चतुःसूत्री आणि होमरूल आंदोलन",
                                    nameEn: "Lokmanya Tilak's Nationalist Militancy, 4-Point Strategy & Home Rule Campaign",
                                    subtopics: [
                                        {
                                            id: "st_gc_h13_01_01",
                                            titleMr: "लोकजागृतीची साधने व चतुःसूत्री: 'स्वराज्य हा माझा जन्मसिद्ध हक्क आहे आणि तो मी मिळवणारच'; जनसामान्यांना एकत्र आणण्यासाठी सार्वजनिक गणेशोत्सव (१८९३) व शिवजयंती उत्सव (१८९५) सुरू केले; राष्ट्रीय चळवळीची चतुःसूत्री: १) स्वदेशी, २) बहिष्कार, ३) राष्ट्रीय शिक्षण, ४) स्वराज्य; केसरी व मराठा वृत्तपत्रांतून सरकारवर सडेतोड प्रहार ('सरकारचे डोके ठिकाणावर आहे काय?')",
                                            titleEn: "Mass Mobilization & 4-Point Program: 'Swaraj is my birthright and I shall have it'; Institutionalized Public Ganeshotsav (1893) and Shiv Jayanti (1895); Four-fold strategy: Swadeshi, Boycott, National Education, Swaraj; Fiery editorials in Kesari & Mahratta",
                                            chips: ["सार्वजनिक गणेशोत्सव १८९३", "शिवजयंती उत्सव १८९५", "चतुःसूत्री (स्वदेशी बहिष्कार)", "सरकारचे डोके ठिकाणावर आहे काय?"]
                                        },
                                        {
                                            id: "st_gc_h13_01_02",
                                            titleMr: "राजद्रोह खटला व मंडले तुरुंगवास (१९०८-१९१४): मुझफ्फरपूर बॉम्बस्फोटानंतर केसरीत 'देशाचे दुर्भाग्य' हा लेख लिहिल्याबद्दल राजद्रोहाचा गुन्हा दाखल; न्या. दावर यांनी ६ वर्षांची काळेपाणी शिक्षा ठोठावली; ब्रह्मदेशातील मंडले तुरुंगात असताना 'गीतारहस्य' (कर्मयोगशास्त्र) हा प्रसिद्ध ग्रंथ लिहिला; 'द आर्क्टिक होम इन द वेदाज' हा संशोधनपर ग्रंथ लिहिला",
                                            titleEn: "Sedition Trial & Mandalay Exile (1908-1914): Charged with sedition for article 'Deshache Durbhagya'; Sentenced to 6 years imprisonment by Justice Davar; Wrote monumental philosophical treatise 'Gita Rahasya' (Karmayoga) in Mandalay Prison; Wrote 'The Arctic Home in the Vedas'",
                                            chips: ["राजद्रोह खटला १९०८", "मंडले जेल ६ वर्षे शिक्षा", "गीतारहस्य ग्रंथ", "द आर्क्टिक होम इन द वेदाज"]
                                        },
                                        {
                                            id: "st_gc_h13_01_03",
                                            titleMr: "होमरूल लीग चळवळ (१९१६): टिळकांनी २८ एप्रिल १९१६ रोजी बेळगाव प्रांतिक परिषदेत 'इंडियन होमरूल लीग' ची स्थापना केली (महाराष्ट्र, मध्य प्रांत व कर्नाटक कार्यक्षेत्र; जोसेफ बॅप्टिस्टा पहिले अध्यक्ष, एन. सी. केळकर सचिव); लखनौ करार (१९१६ - मवाळ-जहाल पुन्हा काँग्रेसमध्ये एकत्र आले व काँग्रेस-मुस्लिम लीग ऐक्य झाले)",
                                            titleEn: "Home Rule League (1916): Launched Indian Home Rule League on 28 April 1916 at Belgaum (Maharashtra, Central Provinces & Karnataka; Joseph Baptista President, N.C. Kelkar Secretary); Architect of historic Lucknow Pact 1916",
                                            chips: ["होमरूल लीग बेळगाव (२८ एप्रिल १९१६)", "जोसेफ बॅप्टिस्टा अध्यक्ष", "एन सी केळकर सचिव", "लखनौ करार १९१६"]
                                        }
                                    ],
                                    sources: [
                                        { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण ९: लोकमान्य टिळक युग" },
                                        { book: "महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण ८: टिळक आणि जहाल चळवळ" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १४: असहकार चळवळ (१९२०) आणि स्वराज्य पक्षाचे महाराष्ट्रातील कार्य
                        // =========================================================================
                        {
                            id: "gc_hist_c14",
                            code: "CH14",
                            section: "E",
                            slug: "non-cooperation-movement-and-swaraj-party-in-maharashtra",
                            nameMr: "असहकार चळवळ (१९२०) आणि स्वराज्य पक्षाचे महाराष्ट्रातील कार्य",
                            nameEn: "Non-Cooperation Movement (1920) & Swaraj Party in Maharashtra",
                            name: "असहकार चळवळ व स्वराज्य पक्ष",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 2,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_hist_c14",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_hist_c13",
                            nextChapterId: "gc_hist_c15",
                            metaDescriptionMr: "असहकार चळवळ (१९२०-२२), पदव्या व न्यायालयांवर बहिष्कार, टिळक स्वराज्य फंड, मुळशी सत्याग्रह (सेनापती बापट १९२१), आणि स्वराज्य पक्ष (१९२३ - चित्तरंजन दास, मोतीलाल नेहरू, एन. सी. केळकर).",
                            metaDescriptionEn: "Non-Cooperation Movement in Maharashtra (1920-22), Tilak Swaraj Fund, Mulshi Satyagraha under Senapati Bapat (1921), and Swaraj Party (1923, N.C. Kelkar).",
                            notesJsonPath: "/data/notes/group_c/prelims/history/c14_non_cooperation_swaraj.json",
                            quizTag: "gc_hist_ncm_01",
                            tags: ["Non Cooperation 1920", "Mulshi Satyagraha Senapati Bapat", "Tilak Swaraj Fund", "Swaraj Party 1923 NC Kelkar"],
                            searchKeywords: ["non cooperation movement maharashtra 1920 1922", "mulshi satyagraha senapati bapat tata dam", "swaraj party 1923 n c kelkar maharashtra", "असहकार चळवळ महाराष्ट्र", "मुळशी सत्याग्रह सेनापती बापट", "स्वराज्य पक्ष १९२३"],
                            topics: [
                                {
                                    id: "top_gc_h14_01",
                                    nameMr: "असहकार आंदोलन, मुळशी धरण सत्याग्रह आणि स्वराज्य पक्षाची वाटचाल",
                                    nameEn: "Non-Cooperation Mobilization, Mulshi Satyagraha & Swarajist Politics",
                                    subtopics: [
                                        {
                                            id: "st_gc_h14_01_01",
                                            titleMr: "असहकार चळवळ व महाराष्ट्र: १ ऑगस्ट १९२० रोजी लोकमान्य टिळकांचे निधन व त्याच दिवशी गांधीजींनी असहकार चळवळ सुरू केली; मुंबईत परदेशी कापडाची होळी; टिळक स्वराज्य फंडासाठी महाराष्ट्रातून लाखो रुपयांचे योगदान; वकिलांनी न्यायालयांवर व विद्यार्थ्यांनी शाळा-कॉलेजांवर बहिष्कार टाकला; राष्ट्रीय शाळांची स्थापना (उदा. पुणे विद्यार्थी गृह, टिळक महाराष्ट्र विद्यापीठ १९२१)",
                                            titleEn: "Non-Cooperation in Maharashtra: Commenced 1 Aug 1920 coinciding with Tilak's death; Mass bonfires of foreign cloth in Mumbai; Massive contributions to Tilak Swaraj Fund; Boycott of British courts/schools; Foundation of Tilak Maharashtra Vidyapeeth (1921)",
                                            chips: ["असहकार चळवळ १ ऑगस्ट १९२०", "टिळक स्वराज्य फंड", "परदेशी कापडाची होळी", "टिळक महाराष्ट्र विद्यापीठ १९२१"]
                                        },
                                        {
                                            id: "st_gc_h14_01_02",
                                            titleMr: "मुळशी सत्याग्रह (१९२१-१९२४): टाटा कंपनीच्या जलविद्युत प्रकल्पासाठी मुळशी (जि. पुणे) भागातील ५४ गावांमधील शेतकऱ्यांच्या जमिनी पाण्याखाली जात असल्याने झालेला लढा; जगातील पहिला धरणविरोधी पर्यावरण-शेतकरी लढा; पांडुरंग महादेव बापट यांनी नेतृत्व केले, म्हणून जनतेने त्यांना 'सेनापती बापट' ही पदवी दिली; बापटांना ७ वर्षांची सक्तमजुरी झाली",
                                            titleEn: "Mulshi Satyagraha (1921-1924): World's first anti-dam peasant resistance against Tata Power hydroelectric project submerging 54 villages; Led by Pandurang Mahadev Bapat who was conferred title 'Senapati Bapat' by grateful peasants; Sentenced to 7 years imprisonment",
                                            chips: ["मुळशी सत्याग्रह १९२१-२४", "टाटा धरण विरोध", "सेनापती बापट पदवी", "पहिला धरणविरोधी लढा"]
                                        },
                                        {
                                            id: "st_gc_h14_01_03",
                                            titleMr: "स्वराज्य पक्ष (१९२३): चौरीचौरा घटनेनंतर असहकार मागे घेतल्याने कायदेमंडळात प्रवेश करण्यासाठी चित्तरंजन दास व मोतीलाल नेहरू यांनी स्वराज्य पक्ष स्थापन केला; महाराष्ट्रात एन. सी. केळकर, एम. आर. जयकर यांनी नेतृत्व केले; १९२३ च्या निवडणुकीत मुंबई कायदेमंडळात मोठे यश मिळवले",
                                            titleEn: "Swaraj Party in Maharashtra (1923): Formed by C.R. Das and Motilal Nehru to contest elections post-Chauri Chaura; Maharashtra unit led by N.C. Kelkar and M.R. Jayakar; Won substantial seats in Bombay Legislative Council",
                                            chips: ["स्वराज्य पक्ष १९२३", "एन सी केळकर", "एम आर जयकर", "मुंबई कायदेमंडळ यश"]
                                        }
                                    ],
                                    sources: [
                                        { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण १६: असहकार चळवळ व मुळशी लढा" },
                                        { book: "महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण १२: गांधीवादी युग" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १५: सविनय कायदेभंग चळवळ (१९३०): मिठाचे सत्याग्रह, सोलापूर मार्शल लॉ व जंगल सत्याग्रह
                        // =========================================================================
                        {
                            id: "gc_hist_c15",
                            code: "CH15",
                            section: "E",
                            slug: "civil-disobedience-movement-in-maharashtra-1930",
                            nameMr: "सविनय कायदेभंग चळवळ (१९३०): मिठाचे सत्याग्रह, सोलापूर मार्शल लॉ व जंगल सत्याग्रह",
                            nameEn: "Civil Disobedience Movement in Maharashtra (1930): Salt, Solapur & Forest Satyagrahas",
                            name: "सविनय कायदेभंग चळवळ (Civil Disobedience 1930)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_hist_c15",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_hist_c14",
                            nextChapterId: "gc_hist_c16",
                            metaDescriptionMr: "वडाळा व शिरोडा मिठाचा सत्याग्रह, बाबू गेणूचे बलिदान (१२ डिसेंबर १९३०), सोलापूरचे चार हुतात्मे (धनशेट्टी, शिंदे, हुसेन, सारडा - १२ जानेवारी १९३१ फाशी), बिळाशी व चिरनेर जंगल सत्याग्रह.",
                            metaDescriptionEn: "Civil Disobedience in Maharashtra (1930): Wadala & Shiroda Salt satyagrahas, Babu Genu martyrdom, Solapur Martial Law 4 martyrs executed on 12 Jan 1931, Bilashi & Chirner forest satyagrahas.",
                            notesJsonPath: "/data/notes/group_c/prelims/history/c15_civil_disobedience_1930.json",
                            quizTag: "gc_hist_cdm_01",
                            tags: ["Civil Disobedience 1930", "Solapur Martial Law 4 Martyrs", "Babu Genu 1930", "Bilashi Forest Satyagraha", "High-Weightage"],
                            searchKeywords: ["civil disobedience 1930 maharashtra salt satyagraha wadala shiroda", "solapur martial law four martyrs dhanshetti shinde kurban sarda", "babu genu martyrdom kalbadevi bombay", "forest satyagraha bilashi chirner", "सविनय कायदेभंग १९३०", "सोलापूरचे चार हुतात्मे", "बाबू गेणू", "बिळाशी जंगल सत्याग्रह"],
                            topics: [
                                {
                                    id: "top_gc_h15_01",
                                    nameMr: "मिठाचे सत्याग्रह, सोलापूरचा उठाव व हुतात्मे आणि जंगल सत्याग्रह",
                                    nameEn: "Salt Raids, Solapur Martial Law Martyrs & Forest Law Agitations",
                                    subtopics: [
                                        {
                                            id: "st_gc_h15_01_01",
                                            titleMr: "महाराष्ट्रातील मिठाचे सत्याग्रह व बाबू गेणू: १२ मार्च १९३० च्या दांडी यात्रेत महाराष्ट्रातील अवंतिकाबाई गोखले यांचा सहभाग; महाराष्ट्रातील प्रमुख मिठाचे सत्याग्रह: १) वडाळा (मुंबई - हजारो सत्याग्रहींचे मिठाच्या आगारवार हल्ले), २) शिरोडा (मालवण - आचार्य काका कालेलकर); १२ डिसेंबर १९३० रोजी मुंबईत काळबादेवी भागात विदेशी कापडाचा ट्रक अडवताना तरुण मिल कामगार बाबू गेणू सैद यांनी हौतात्म्य पत्करले",
                                            titleEn: "Salt Satyagrahas & Babu Genu: Avantikabai Gokhale joined Dandi March; Salt satyagraha centers at Wadala (Mumbai) and Shiroda (Malvan under Kaka Kalelkar); Martyrdom of mill worker Babu Genu Said on 12 Dec 1930 crushed by foreign cloth truck at Kalbadevi",
                                            chips: ["वडाळा मीठ सत्याग्रह", "शिरोडा (मालवण)", "बाबू गेणू बलिदान १२ डिसें १९३०", "विदेशी माल बहिष्कार"]
                                        },
                                        {
                                            id: "st_gc_h15_01_02",
                                            titleMr: "सोलापूरचा उठाव व मार्शल लॉ (मे १९३०): गांधीजींच्या अटकेनंतर सोलापूरच्या कापड कामगारांनी उठाव केला; म्युनिसिपालिटीवर तिरंगा फडकवून जनतेचे राज्य घोषित केले (सोलापूर कम्यून); संतप्त जनतेने पोलीस ठाणे जाळले; ब्रिटिश सरकारने मार्शल लॉ लादून सैन्यामार्फत क्रूर दडपशाही केली; १२ जानेवारी १९३१ रोजी पुण्याच्या येरवडा जेलमध्ये चार हुतात्म्यांना फाशी: १) मल्लप्पा धनशेट्टी, २) जगन्नाथ शिंदे, ३) कुर्बान हुसेन, ४) किसन सारडा",
                                            titleEn: "Solapur Uprising & Martial Law (May 1930): Massive mill-worker rebellion post-Gandhi arrest; Raised tricolor on municipality running people's rule (Solapur Commune); British imposed brutal Martial Law; 4 Martyrs executed at Yerwada on 12 Jan 1931: Mallappa Dhanshetti, Jagannath Shinde, Kurban Hussain, Kisan Sarda",
                                            chips: ["सोलापूर मार्शल लॉ मे १९३०", "चार हुतात्मे १२ जानेवारी १९३१", "मल्लप्पा धनशेट्टी", "जगन्नाथ शिंदे", "कुर्बान हुसेन", "किसन सारडा"]
                                        },
                                        {
                                            id: "st_gc_h15_01_03",
                                            titleMr: "महाराष्ट्रातील जंगल सत्याग्रह (१९३०): मिठाच्या सत्याग्रहाव्यतिरिक्त शेतकरी व आदिवासींनी वन कायदे मोडले; १) बिळाशी (जि. सांगली - राष्ट्रध्वज संरक्षणाचा लढा, पोलिसांचा गोळीबार); २) चिरनेर (जि. रायगड - मामलेदारासह अनेक पोलिसांचा मृत्यू); ३) पुसद (यवतमाळ - बापूजी अणे यांच्या नेतृत्वाखाली); ४) संगमनेर व अकोले (अहमदनगर); ५) कलवण (नाशिक)",
                                            titleEn: "Forest Satyagrahas: Peasant violation of British grazing and forest laws; Bilashi (Sangli - epic national flag defense), Chirner (Raigad - clash resulting in mamlatdar death), Pusad (Yavatmal led by Bapuji Aney), Sangamner, Akole, Kalwan",
                                            chips: ["बिळाशी जंगल सत्याग्रह (सांगली)", "चिरनेर सत्याग्रह (रायगड)", "पुसद (बापूजी अणे)", "वन कायदेभंग"]
                                        }
                                    ],
                                    sources: [
                                        { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण १६: सविनय कायदेभंग व सोलापूर लढा" },
                                        { book: "महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण १३: सविनय कायदेभंग चळवळ" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १६: फैजपूर काँग्रेस (१९३६) आणि चले जाव आंदोलन (१९४२ - भारत छोडो)
                        // =========================================================================
                        {
                            id: "gc_hist_c16",
                            code: "CH16",
                            section: "E",
                            slug: "faizpur-congress-1936-and-quit-india-movement-1942",
                            nameMr: "फैजपूर काँग्रेस (१९३६) आणि चले जाव आंदोलन (१९४२ - भारत छोडो)",
                            nameEn: "Faizpur Congress (1936) & Quit India Movement (1942)",
                            name: "फैजपूर काँग्रेस व चले जाव आंदोलन (१९३६-१९४२)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_hist_c16",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_hist_c15",
                            nextChapterId: "gc_hist_c17",
                            metaDescriptionMr: "पहिले ग्रामीण काँग्रेस अधिवेशन (फैजपूर १९३६ - पं. नेहरू अध्यक्ष, साने गुरुजी), चले जाव (८ ऑगस्ट १९४२ - ऑगस्ट क्रांती मैदान, मुंबई), भूमिगत आझाद रेडिओ (उषा मेहता), आणि नंदुरबारचे बाल हुतात्मा शिरीषकुमार.",
                            metaDescriptionEn: "1st Rural Congress at Faizpur 1936 (Jawaharlal Nehru, Sane Guruji), Quit India Movement (8 Aug 1942 at Gowalia Tank Bombay), Underground Azad Radio (Usha Mehta), Martyr Shirishkumar at Nandurbar.",
                            notesJsonPath: "/data/notes/group_c/prelims/history/c16_faizpur_quit_india.json",
                            quizTag: "gc_hist_quit_india_01",
                            tags: ["Faizpur Rural Congress 1936", "Quit India 1942 Gowalia Tank", "Usha Mehta Azad Radio", "Martyr Shirishkumar"],
                            searchKeywords: ["faizpur congress 1936 first rural session nehru sane guruji", "quit india movement 1942 gowalia tank august kranti maidan", "usha mehta underground azad radio", "shirishkumar martyr nandurbar 1942", "फैजपूर काँग्रेस १९३६", "चले जाव आंदोलन १९४२", "उषा मेहता आझाद रेडिओ", "शिरीषकुमार नंदुरबार"],
                            topics: [
                                {
                                    id: "top_gc_h16_01",
                                    nameMr: "फैजपूर ग्रामीण काँग्रेस अधिवेशन आणि चले जाव चळवळीतील मुंबईचा उठाव",
                                    nameEn: "Faizpur Rural Congress Plenum & The Quit India Storm in Bombay",
                                    subtopics: [
                                        {
                                            id: "st_gc_h16_01_01",
                                            titleMr: "फैजपूर काँग्रेस अधिवेशन (१९३६): राष्ट्रीय काँग्रेसचे ५० वे अधिवेशन आणि पहिलेच 'ग्रामीण अधिवेशन'; जळगाव जिल्ह्यातील फैजपूर येथे भरले; अध्यक्ष: पं. जवाहरलाल नेहरू; स्वागताध्यक्ष: धनजीशेट चौधरी; साने गुरुजी यांनी अधिवेशनासाठी प्रचंड मेहनत घेतली व 'काँग्रेस ध्वज वंदना' गीत लिहिले; काँग्रेसचा शेतकरी कार्यक्रम (Agrarian Programme) संमत",
                                            titleEn: "Faizpur Congress (1936): 50th Plenum and the first-ever rural session held at Faizpur (Jalgaon); Chaired by Jawaharlal Nehru; Key organizer Sane Guruji; Passed comprehensive Agrarian Programme demanding agricultural debt relief",
                                            chips: ["फैजपूर काँग्रेस १९३६ (पहिले ग्रामीण अधिवेशन)", "पं जवाहरलाल नेहरू अध्यक्ष", "साने गुरुजी", "शेतकरी अजेंडा"]
                                        },
                                        {
                                            id: "st_gc_h16_01_02",
                                            titleMr: "८ ऑगस्ट १९४२ चले जाव ठराव (मुंबई): मुंबईच्या 'ग्वालिया टँक' (ऑगस्ट क्रांती मैदान) येथे अखिल भारतीय काँग्रेस कमिटीची ऐतिहासिक बैठक; चले जाव ठराव मंजूर; महात्मा गांधींनी 'करेंगे या मरेंगे' चा महामंत्र दिला; ९ ऑगस्टच्या पहाटे गांधीजींसह सर्व प्रमुख नेत्यांना अटक; अरुणा असफ अली यांनी ऑगस्ट क्रांती मैदानावर तिरंगा फडकवला",
                                            titleEn: "Quit India Resolution (8 Aug 1942): Historic AICC session at Gowalia Tank (August Kranti Maidan) Bombay; Gandhi gave 'Do or Die' call; British arrested all top leaders on 9 August; Aruna Asaf Ali hoisted national tricolor amidst police tear gas",
                                            chips: ["ग्वालिया टँक (ऑगस्ट क्रांती मैदान)", "करेंगे या मरेंगे (८ ऑगस्ट १९४२)", "अरुणा असफ अली तिरंगा", "चले जाव आंदोलन"]
                                        },
                                        {
                                            id: "st_gc_h16_01_03",
                                            titleMr: "भूमिगत चळवळ, आझाद रेडिओ व शिरीषकुमार: डॉ. उषा मेहता, बाबूभाई झावेरी, राममनोहर लोहिया यांनी मुंबईतून चालवलेला गुप्त 'काँग्रेस रेडिओ' (आझाद रेडिओ); ९ सप्टेंबर १९४२ रोजी नंदुरबार येथे तिरंगा हाती घेऊन शांततापूर्ण प्रभातफेरी काढणाऱ्या विद्यार्थ्यांवर पोलिसांनी गोळीबार केला; बालवीर शिरीषकुमार, लालदास, धनसुखलाल, शशिकांत, घनश्याम हुतात्मा झाले",
                                            titleEn: "Underground Network & Shirishkumar: Underground Congress Radio operated secretly from Mumbai by Dr. Usha Mehta & Ram Manohar Lohia; Police firing on student procession in Nandurbar on 9 Sept 1942; Martyrdom of 15-year-old Shirishkumar and schoolmates",
                                            chips: ["उषा मेहता (आझाद रेडिओ)", "नंदुरबार गोळीबार", "हुतात्मा शिरीषकुमार (९ सप्टेंबर १९४२)", "भूमिगत लढा"]
                                        }
                                    ],
                                    sources: [
                                        { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण १६: चले जाव आंदोलन व महाराष्ट्र" },
                                        { book: "महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण १३: भारत छोडो आंदोलन" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १७: क्रांतिसिंह नाना पाटील यांचे सातारा प्रतिसरकार (१९४३-१९४६)
                        // =========================================================================
                        {
                            id: "gc_hist_c17",
                            code: "CH17",
                            section: "E",
                            slug: "satara-parallel-government-pratisarkar-nana-patil",
                            nameMr: "क्रांतिसिंह नाना पाटील यांचे सातारा प्रतिसरकार (१९४३-१९४६)",
                            nameEn: "Krantisinh Nana Patil's Satara Pratisarkar (Parallel Government: 1943-1946)",
                            name: "साताऱ्याचे प्रतिसरकार (Satara Pratisarkar)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 2,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_hist_c17",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_hist_c16",
                            nextChapterId: "gc_hist_c18",
                            metaDescriptionMr: "सातारा प्रतिसरकार: क्रांतिसिंह नाना पाटील, तुफान सेना (कॅप्टन भाऊराव बाबर, जी. डी. लाड, नागनाथअण्णा नायकवडी), धुळे खजिना लूट (७ जून १९४३), न्यायदान मंडळे, आणि पत्री सरकार.",
                            metaDescriptionEn: "Satara Parallel Government (1943-46): Krantisinh Nana Patil, Toofan Sena (Bhaurao Babar, G.D. Bapu Lad, Nagnath Nayakwadi), Dhule train treasury raid (June 1943), Nyayadan Mandals.",
                            notesJsonPath: "/data/notes/group_c/prelims/history/c17_satara_pratisarkar.json",
                            quizTag: "gc_hist_pratisarkar_01",
                            tags: ["Satara Pratisarkar 1943 1946", "Krantisinh Nana Patil", "Toofan Sena", "Dhule Treasury Raid", "Patri Sarkar"],
                            searchKeywords: ["satara pratisarkar 1943 1946 krantisinh nana patil", "toofan sena bhaurao babar gd lad nagnath nayakwadi", "dhule treasury raid 1943", "patri sarkar nyayadan mandal", "साताऱ्याचे प्रतिसरकार", "क्रांतिसिंह नाना पाटील", "तुफान सेना", "धुळे खजिना लूट"],
                            topics: [
                                {
                                    id: "top_gc_h17_01",
                                    nameMr: "प्रतिसरकारची स्थापना, तुफान सेनेची रचना आणि न्यायदान मंडळे",
                                    nameEn: "Genesis of Pratisarkar, Toofan Sena Armed Actions & People's Courts",
                                    subtopics: [
                                        {
                                            id: "st_gc_h17_01_01",
                                            titleMr: "प्रतिसरकारची स्थापना व नेतृत्व: चले जाव आंदोलनाच्या दडपशाहीनंतर १९४३ मध्ये सातारा-सांगली भागात ब्रिटिश सत्तेला समांतर असे 'प्रतिसरकार' स्थापन झाले; मुख्य नेते: क्रांतिसिंह नाना पाटील, किसन वीर, जी. डी. (बापू) लाड, नागनाथअण्णा नायकवडी; सुमारे १५० गावांमध्ये स्वतःचे प्रशासन चालवले",
                                            titleEn: "Foundation & Leadership: Parallel government established in Satara-Sangli in 1943; Substituted British rule across 150+ villages; Vanguard leaders: Krantisinh Nana Patil, Kisan Veer, G.D. Bapu Lad, Nagnath Nayakwadi",
                                            chips: ["सातारा प्रतिसरकार १९४३-४६", "क्रांतिसिंह नाना पाटील", "किसन वीर", "जी डी बापू लाड", "नागनाथअण्णा नायकवडी"]
                                        },
                                        {
                                            id: "st_gc_h17_01_02",
                                            titleMr: "तुफान सेना व धुळे खजिना लूट: प्रतिसरकारची अधिकृत सशस्त्र शाखा 'तुफान सेना'; फील्ड मार्शल: कॅप्टन भाऊराव बाबर; कुंडल हे मुख्य केंद्र; ७ जून १९४३ रोजी चिंचोडे रेल्वे स्थानकाजवळ (जि. धुळे) सरकारी खजिना घेऊन जाणारी रेल्वे अडवून ५.५ लाख रुपयांची ऐतिहासिक लूट केली; हा पैसा लोककल्याण व शस्त्रास्त्रांसाठी वापरला",
                                            titleEn: "Toofan Sena & Dhule Train Raid: Armed militia commanded by Field Marshal Captain Bhaurao Babar; HQ Kundal; Historic Dhule Treasury Train Raid on 7 June 1943 at Chinchode looting Rs 5.5 Lakhs of colonial funds for movement operations",
                                            chips: ["तुफान सेना", "कॅप्टन भाऊराव बाबर", "धुळे खजिना लूट ७ जून १९४३", "कुंडल मुख्यालय"]
                                        },
                                        {
                                            id: "st_gc_h17_01_03",
                                            titleMr: "प्रशासकीय कार्यप्रणाली व 'पत्री सरकार': १) न्यायदान मंडळे (People's Courts): सावकारांची कर्जे रद्द केली, जमिनीचे तंटे जागेवरच मिटवले; २) गांधी विवाह पद्धत: हुंडाबंदी व साध्या पद्धतीने विवाह; ३) पत्री सरकार नाव: ब्रिटिशांच्या खबऱ्यांना (Informers) पायाच्या तळव्यावर लाकडी काठीने फटके मारण्याची शिक्षा दिली जात असल्याने 'पत्री सरकार' हे नाव पडले",
                                            titleEn: "Governance & 'Patri Sarkar' Name: Nyayadan Mandals provided swift, free arbitration; Promoted dowry-less simple Gandhi marriages; Known as 'Patri Sarkar' because British police informers were penalized by beating/nailing wooden strips ('patri') to their feet",
                                            chips: ["न्यायदान मंडळे (लोकअदालत)", "गांधी विवाह पद्धत", "पत्री सरकार", "खबऱ्यांना शिक्षा", "दारूबंदी"]
                                        }
                                    ],
                                    sources: [
                                        { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण १७: साताऱ्याचे प्रतिसरकार" },
                                        { book: "क्रांतिसिंह नाना पाटील चरित्र", standard: "महाराष्ट्र राज्य साहित्य आणि संस्कृती मंडळ", chapterRef: "तुफान सेना व लढा" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १८: हैदराबाद मुक्ती लढा (ऑपरेशन पोलो) आणि संयुक्त महाराष्ट्र चळवळ (१०६ हुतात्मे ते १ मे १९६०)
                        // =========================================================================
                        {
                            id: "gc_hist_c18",
                            code: "CH18",
                            section: "F",
                            slug: "marathwada-liberation-and-samyukta-maharashtra-movement",
                            nameMr: "हैदराबाद मुक्ती लढा (ऑपरेशन पोलो) आणि संयुक्त महाराष्ट्र चळवळ (१०६ हुतात्मे ते १ मे १९६०)",
                            nameEn: "Marathwada Liberation (Operation Polo 1948) & Samyukta Maharashtra Movement (1946-1960)",
                            name: "मराठवाडा मुक्ती व संयुक्त महाराष्ट्र चळवळ",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_hist_c18",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_hist_c17",
                            nextChapterId: null,
                            metaDescriptionMr: "हैदराबाद मुक्तिसंग्राम (स्वामी रामानंद तीर्थ, ऑपरेशन पोलो १७ सप्टेंबर १९४८), भाषावार प्रांतरचना आयोग (धर, JVP, फाझल अली), नागपूर करार (१९५३), संयुक्त महाराष्ट्र समिती (१९५६), १०६ हुतात्मे, आणि १ मे १९६० महाराष्ट्र स्थापना.",
                            metaDescriptionEn: "Marathwada Liberation (Swami Ramanand Teerth, Operation Polo 17 Sept 1948), Nagpur Pact 1953, Samyukta Maharashtra Samiti 1956 (S.A. Dange, S.M. Joshi, Atre), 106 Martyrs, and Maharashtra Statehood on 1 May 1960.",
                            notesJsonPath: "/data/notes/group_c/prelims/history/c18_samyukta_maharashtra.json",
                            quizTag: "gc_hist_samyukta_01",
                            tags: ["Marathwada Mukti Sangram", "Operation Polo 1948", "Samyukta Maharashtra 1956", "106 Martyrs", "1 May 1960 Statehood", "High-Weightage"],
                            searchKeywords: ["marathwada liberation operation polo 17 sept 1948 swami ramanand teerth", "samyukta maharashtra samiti 6 feb 1956 dange sm joshi atre", "106 martyrs flora fountain hutatma chowk", "1 may 1960 maharashtra state inauguration yashwantrao chavan", "मराठवाडा मुक्तिसंग्राम ऑपरेशन पोलो", "स्वामी रामानंद तीर्थ", "संयुक्त महाराष्ट्र समिती १९५६", "१०६ हुतात्मे", "१ मे १९६० महाराष्ट्र राज्य स्थापना"],
                            topics: [
                                {
                                    id: "top_gc_h18_01",
                                    nameMr: "मराठवाडा मुक्तिसंग्राम आणि संयुक्त महाराष्ट्र चळवळीचा ऐतिहासिक लढा",
                                    nameEn: "Marathwada Liberation Struggle & Samyukta Maharashtra Mass Movement",
                                    subtopics: [
                                        {
                                            id: "st_gc_h18_01_01",
                                            titleMr: "हैदराबाद मुक्तिसंग्राम व ऑपरेशन पोलो: हैदराबाद संस्थानाचा शेवटचा निजाम मीर उस्मान अली खान; कासिम रझवीच्या रझाकारांचे जनतेवर अत्याचार; स्वामी रामानंद तीर्थ यांनी 'हैदराबाद स्टेट काँग्रेस' स्थापन करून लढा उभारला; भारत सरकारचे गृहमंत्री सरदार वल्लभभाई पटेल यांनी १३ सप्टेंबर १९४८ रोजी 'ऑपरेशन पोलो' (पोलीस ॲक्शन - लष्करप्रमुख जे. एन. चौधरी) सुरू केले; १७ सप्टेंबर १९४८ रोजी निजामाने शरणागती पत्करली; मराठवाडा भारतात मुक्त झाला (१७ सप्टेंबर मराठवाडा मुक्ती दिन)",
                                            titleEn: "Hyderabad Liberation & Operation Polo: Nizam Mir Osman Ali's autocratic rule; Kasim Razvi's communal Razakar atrocities; Swami Ramanand Teerth led Hyderabad State Congress; Sardar Patel launched 'Operation Polo' on 13 Sept 1948 under Maj Gen J.N. Chaudhuri; Nizam surrendered 17 Sept 1948 (Marathwada Liberation Day)",
                                            chips: ["स्वामी रामानंद तीर्थ", "हैदराबाद स्टेट काँग्रेस", "ऑपरेशन पोलो (१३ ते १७ सप्टेंबर १९४८)", "१७ सप्टेंबर मराठवाडा मुक्ती दिन", "रझाकार कासिम रझवी"]
                                        },
                                        {
                                            id: "st_gc_h18_01_02",
                                            titleMr: "भाषावार प्रांतरचना आयोग व नागपूर करार (१९५३): १) एस. के. धर कमिशन (१९४८) व JVP समिती (१९४८) यांनी महाराष्ट्राला मुंबई देण्यास नकार दिला; २) फाझल अली राज्य पुनर्रचना आयोग (१९५३) ने विदर्भाचे वेगळे राज्य व द्विभाषिक मुंबईची शिफारस केली; ३) २८ सप्टेंबर १९५३ रोजी पश्चिम महाराष्ट्र, विदर्भ व मराठवाड्याच्या नेत्यांमध्ये 'नागपूर करार' झाला (यशवंतराव चव्हाण, भाऊसाहेब हिरे सहभाग; मुंबई राजधानी, नागपूर उपराजधानी व विकास महामंडळांची तरतूद)",
                                            titleEn: "Linguistic Commissions & Nagpur Pact (1953): Dhar Commission & JVP Committee opposed linguistic statehood for Maharashtra with Bombay; Fazal Ali Commission (1953) recommended Bilingual State; Historic Nagpur Pact signed on 28 Sept 1953 uniting Western MH, Vidarbha, and Marathwada",
                                            chips: ["धर कमिशन १९४८", "JVP समिती", "फाझल अली आयोग १९५३", "नागपूर करार २८ सप्टेंबर १९५३", "नागपूर उपराजधानी"]
                                        },
                                        {
                                            id: "st_gc_h18_01_03",
                                            titleMr: "संयुक्त महाराष्ट्र समिती (६ फेब्रुवारी १९५६) व १०६ हुतात्मे: पुण्यात टिळक स्मारक मंदिरात स्थापना; अध्यक्ष: श्रीपाद अमृत डांगे, सरचिटणीस: एस. एम. जोशी; प्रमुख नेते: प्रल्हाद केशव (आचार्य) अत्रे (दैनिक मराठा), सेनापती बापट, प्रबोधनकार ठाकरे, शाहीर अमर शेख, शाहीर अण्णाभाऊ साठे; मोरारजी देसाई सरकारच्या पोलिसांच्या गोळीबारात मुंबईत फ्लोरा फाउंटन येथे १०६ आंदोलक हुतात्मा झाले (हुतात्मा चौक)",
                                            titleEn: "Samyukta Maharashtra Samiti (6 Feb 1956) & 106 Martyrs: Founded at Pune; President S.A. Dange, General Secretary S.M. Joshi; Vanguard: Acharya P.K. Atre (Dainik Maratha), Senapati Bapat, Prabodhankar Thackeray, Shahir Amar Shaikh; 106 peaceful demonstrators martyred in police firing at Flora Fountain (Hutatma Chowk)",
                                            chips: ["संयुक्त महाराष्ट्र समिती ६ फेब्रुवारी १९५६", "श्रीपाद अमृत डांगे अध्यक्ष", "एस एम जोशी", "आचार्य अत्रे दैनिक मराठा", "१०६ हुतात्मे (हुतात्मा चौक फ्लोरा फाउंटन)"]
                                        },
                                        {
                                            id: "st_gc_h18_01_04",
                                            titleMr: "१ मे १९६० महाराष्ट्र राज्याची स्थापना: १९५७ च्या निवडणुकीत समितीने काँग्रेसचा पराभव केला; केंद्र सरकारने बॉम्बे पुनर्रचना कायदा १९६० संमत केला; १ मे १९६० रोजी पंडित जवाहरलाल नेहरू यांच्या हस्ते राजभवन (मुंबई) येथे मुंबईसह स्वतंत्र महाराष्ट्र राज्याची स्थापना झाली; महाराष्ट्राचे पहिले मुख्यमंत्री यशवंतराव चव्हाण यांनी 'मंगल कलश' स्वीकारला",
                                            titleEn: "Inauguration of Maharashtra State (1 May 1960): 1957 election victory forced Parliament to pass Bombay Reorganisation Act 1960; PM Nehru inaugurated unilingual Maharashtra State with Bombay on 1 May 1960; First Chief Minister Yashwantrao Chavan received the ceremonial 'Mangal Kalash'",
                                            chips: ["१ मे १९६० महाराष्ट्र राज्य स्थापना", "मुंबईसह संयुक्त महाराष्ट्र", "पहिले मुख्यमंत्री यशवंतराव चव्हाण", "मंगल कलश", "बॉम्बे पुनर्रचना कायदा १९६०"]
                                        }
                                    ],
                                    sources: [
                                        { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण १८ व १९: मराठवाडा मुक्ती व संयुक्त महाराष्ट्र लढा" },
                                        { book: "कऱ्हेचे पाणी (आत्मचरित्र)", standard: "आचार्य प्र. के. अत्रे", chapterRef: "संयुक्त महाराष्ट्र चळवळ" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },


        // २. भूगोल (`gc_pre_geography`)
        {
            id: "gc_pre_geography",
            code: "GEOG",
            slug: "geography-maharashtra-india-general",
            nameMr: "भूगोल (महाराष्ट्र, भारत व सामान्य)",
            nameEn: "Geography (Maharashtra, India & Physical Geography)",
            name: "भूगोल (Geography)",
            officialScope: "Physical, Economic and Social Geography of Maharashtra and India: Landforms, Rivers, Climate, Soils, Forests, Minerals, Agriculture, and Demography",
            version: "1.0",
            verifiedDate: "2026-10-28",
            notesJsonBaseDir: "/data/notes/group_c/prelims/geography/",
            theme: { primaryColor: "#047857", bgColor: "#ecfdf5", iconClass: "ri-earth-line" },
            metrics: { totalChapters: 18, totalEstimatedHours: 45, avgQuestionsInPrelims: 15, targetMarks: 15, weightageRange: "14-16 Questions" },
            subjectTags: ["Core-GS", "Group-C-Prelims", "Combined-Common", "High-Scoring", "Map-Based"],
            filterCategory: "GS",
            searchKeywords: ["mpsc group c geography", "maharashtra rivers climate soil", "census 2011 maharashtra", "भूगोल"],
            referenceSources: [
                { name: "द मेगा स्टेट महाराष्ट्र - ए. बी. सवदी", role: "महाराष्ट्र भूगोल प्रमाण संदर्भ" }
            ],
            chapters: [
                {
                    id: "gc_pre_geography",
                    code: "GEOG",
                    slug: "geography-maharashtra-india-general-prelims",
                    nameMr: "भूगोल (महाराष्ट्र, भारत व सामान्य भूगोल)",
                    nameEn: "Geography (Maharashtra, India & Physical Geography)",
                    name: "भूगोल (Geography)",
                    officialScope: "Physical, Economic and Social Geography of Maharashtra and India: Geomorphology, Drainage Systems, Climate, Soils, Natural Vegetation, Minerals, Energy, Industries, Transportation, and 2011 Census Demography",
                    version: "1.0",
                    verifiedDate: "2026-10-28",
                    notesJsonBaseDir: "/data/notes/group_c/prelims/geography/",


                    theme: {
                        primaryColor: "#047857",
                        bgColor: "#ecfdf5",
                        iconClass: "ri-earth-line"
                    },


                    metrics: {
                        totalChapters: 18,
                        totalEstimatedHours: 45,
                        avgQuestionsInPrelims: 15,
                        targetMarks: 15,
                        weightageRange: "14-16 Questions"
                    },


                    subjectTags: [
                        "Core-GS",
                        "Group-C-Prelims",
                        "Pre-Cum-Mains",
                        "Maharashtra-Focus",
                        "Map-Based",
                        "High-Scoring",
                        "Standard-Savadi"
                    ],


                    filterCategory: "GS",
                    searchKeywords: [
                        "mpsc group c geography prelims", "maharashtra physical geography", "deccan trap basalt",
                        "maharashtra rivers godavari krishna bhima tapi", "climate rainfall monsoon rain shadow",
                        "soils forests wildlife sanctuaries minerals", "census 2011 maharashtra demography",
                        "भूगोल पूर्व परीक्षा", "महाराष्ट्राचा भूगोल", "नदी प्रणाली", "हवामान", "मृदा व वने", "जनगणना २०११"
                    ],


                    referenceSources: [
                        {
                            name: "द मेगा स्टेट महाराष्ट्र - ए. बी. सवदी",
                            role: "महाराष्ट्राचा सखोल भूगोल, नकाशे व सांख्यिकी संदर्भ"
                        },
                        {
                            name: "महाराष्ट्राचा भूगोल - प्रा. अनिरुद्ध / दीपस्तंभ",
                            role: "प्राकृतिक, आर्थिक व मानवी भूगोल संकल्पना"
                        },
                        {
                            name: "NCERT Class 11 & 12 Geography",
                            role: "प्राकृतिक भूगोल व भारताचा भूगोल पायाभूत संकल्पना"
                        }
                    ],


                    chapters: [
                        // =========================================================================
                        // प्रकरण १: महाराष्ट्राचे स्थान, विस्तार, सीमा आणि ६ प्रशासकीय महसूल विभाग
                        // =========================================================================
                        {
                            id: "gc_geog_c01",
                            code: "CG01",
                            section: "A",
                            slug: "location-extent-and-administrative-divisions-of-maharashtra",
                            nameMr: "महाराष्ट्राचे स्थान, विस्तार, सीमा आणि ६ प्रशासकीय महसूल विभाग",
                            nameEn: "Maharashtra Location, Territorial Extent, Borders & 6 Administrative Divisions",
                            name: "स्थान, विस्तार व प्रशासकीय विभाग",
                            category: "CORE",
                            difficulty: "EASY",
                            priority: "HIGH",
                            estimatedHours: 2,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_geog_c01",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: null,
                            nextChapterId: "gc_geog_c02",
                            metaDescriptionMr: "महाराष्ट्राचे अक्षांश-रेखांश विस्तार, क्षेत्रफळ (३,०७,७१३ चौ.किमी - देशात तिसरा क्रमांक ९.३६%), शेजारील ६ राज्ये व १ केंद्रशासित प्रदेश, आणि ६ प्रशासकीय महसूल विभाग (३६ जिल्हे).",
                            metaDescriptionEn: "Geographical coordinates, Latitudinal and longitudinal extent, Total area 3,07,713 sq km (9.36% of India, 3rd rank), Neighboring states border interfaces, and 6 Administrative Revenue Divisions.",
                            notesJsonPath: "/data/notes/group_c/prelims/geography/c01_location_extent.json",
                            quizTag: "gc_geog_location_01",
                            tags: ["Location Extent", "Coordinates", "Area 307713 sq km", "6 Revenue Divisions", "Border Districts", "High-Weightage"],
                            searchKeywords: [
                                "maharashtra geographical location coordinates latitude longitude",
                                "area of maharashtra 307713 sq km 9.36 percent",
                                "neighbouring states borders gujarat mp chhattisgarh telangana karnataka goa",
                                "6 administrative revenue divisions 36 districts",
                                "महाराष्ट्राचे स्थान व विस्तार",
                                "क्षेत्रफळ ३०७७१३ चौ किमी",
                                "६ प्रशासकीय विभाग",
                                "शेजारील राज्ये सीमा"
                            ],
                            topics: [
                                {
                                    id: "top_gc_g01_01",
                                    nameMr: "महाराष्ट्राचे भौगोलिक स्थान, अक्षांश-रेखांश विस्तार आणि सीमावर्ती राज्ये",
                                    nameEn: "Geographical Coordinates, Territorial Boundaries & Border Interfaces",
                                    subtopics: [
                                        {
                                            id: "st_gc_g01_01_01",
                                            titleMr: "स्थान व विस्तार: अक्षांश विस्तार १५°४४' उत्तर ते २२°६' उत्तर अक्षांश; रेखांश विस्तार ७२°३६' पूर्व ते ८०°५४' पूर्व रेखांश; पूर्व-पश्चिम लांबी सुमारे ८०० किमी, उत्तर-दक्षिण रुंदी सुमारे ७०० किमी; भारताच्या पश्चिम-मध्य भागात स्थान",
                                            titleEn: "Location & Extent: Latitudinal span 15°44' N to 22°6' N; Longitudinal span 72°36' E to 80°54' E; East-West length approx 800 km, North-South width approx 700 km; Situated in west-central India",
                                            chips: ["१५°४४' उ. ते २२°६' उ. अक्षांश", "७२°३६' पू. ते ८०°५४' पू. रेखांश", "पूर्व-पश्चिम लांबी ८०० किमी", "उत्तर-दक्षिण रुंदी ७०० किमी"]
                                        },
                                        {
                                            id: "st_gc_g01_01_02",
                                            titleMr: "क्षेत्रफळ व राष्ट्रीय वाटा: महाराष्ट्राचे एकूण क्षेत्रफळ ३,०७,७१३ चौ.किमी; भारताच्या एकूण क्षेत्रफळापैकी ९.३६% भाग व्यापतो; क्षेत्रफळात भारतात तिसरा क्रमांक (राजस्थान व मध्य प्रदेश यांच्यानंतर); सागरी किनारपट्टी ७२० किमी",
                                            titleEn: "Area & National Share: Total geographic area 3,07,713 sq km; Occupies 9.36% of India's total landmass; Ranks 3rd in India after Rajasthan and Madhya Pradesh; Coastline of 720 km",
                                            chips: ["क्षेत्रफळ ३,०७,७१३ चौ.किमी", "भारताचा ९.३६% वाटा", "भारतात ३ रा क्रमांक", "७२० किमी किनारपट्टी"]
                                        },
                                        {
                                            id: "st_gc_g01_01_03",
                                            titleMr: "सीमावर्ती राज्ये व जिल्हे: ६ घटक राज्ये व १ केंद्रशासित प्रदेश (दादरा व नगर हवेली आणि दमण-दीव); मध्य प्रदेश (सर्वाधिक ८ जिल्हे सीमावर्ती); कर्नाटक (७ जिल्हे); गुजरात (४ जिल्हे); तेलंगणा (४ जिल्हे); छत्तीसगड (२ जिल्हे: गोंदिया, गडचिरोली); गोवा (१ जिल्हा: सिंधुदुर्ग); कोणत्याही राज्याशी सीमा नसलेले अंतर्गत जिल्हे",
                                            titleEn: "Bordering States & Districts: 6 States and 1 Union Territory; Madhya Pradesh (max 8 border districts); Karnataka (7 districts); Gujarat (4 districts); Telangana (4 districts); Chhattisgarh (2 districts); Goa (1 district); Landlocked non-border districts",
                                            chips: ["मध्य प्रदेश ८ जिल्हे सीमा", "कर्नाटक ७ जिल्हे", "गुजरात ४ जिल्हे", "छत्तीसगड २ जिल्हे", "गोवा १ जिल्हा"]
                                        }
                                    ],
                                    sources: [
                                        { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण १: स्थान, विस्तार व सीमा" },
                                        { book: "महाराष्ट्राचा भूगोल", standard: "प्रा. अनिरुद्ध", chapterRef: "प्रकरण १: राजकीय व प्रशासकीय भूगोल" }
                                    ]
                                },
                                {
                                    id: "top_gc_g01_02",
                                    nameMr: "महाराष्ट्राचे ६ प्रशासकीय महसूल विभाग आणि प्रादेशिक रचना",
                                    nameEn: "Six Administrative Revenue Divisions & Regional Classifications",
                                    subtopics: [
                                        {
                                            id: "st_gc_g01_02_01",
                                            titleMr: "६ प्रशासकीय महसूल विभाग: १) कोकण (७ जिल्हे, ४७ तालुके - क्षेत्रफळाने सर्वात लहान); २) पुणे / पश्चिम महाराष्ट्र (५ जिल्हे, ५८ तालुके); ३) नाशिक / खान्देश (५ जिल्हे, ५४ तालुके); ४) छत्रपती संभाजीनगर / मराठवाडा (८ जिल्हे, ७६ तालुके - सर्वाधिक जिल्हे व तालुके); ५) अमरावती / पश्चिम विदर्भ (५ जिल्हे, ५६ तालुके); ६) नागपूर / पूर्व विदर्भ (६ जिल्हे, ६४ तालुके); एकूण ३६ जिल्हे व ३५८ तालुके (मुंबई उपनगरातील ३ प्रशासकीय तालुके मिळून ३५८)",
                                            titleEn: "Six Revenue Divisions: 1) Konkan (7 districts, 47 talukas - smallest in area); 2) Pune (5 districts, 58 talukas); 3) Nashik (5 districts, 54 talukas); 4) Chhatrapati Sambhajinagar (8 districts, 76 talukas - highest districts and talukas); 5) Amravati (5 districts, 56 talukas); 6) Nagpur (6 districts, 64 talukas); Total 36 districts and 358 talukas",
                                            chips: ["कोकण विभाग (७ जिल्हे)", "छत्रपती संभाजीनगर (८ जिल्हे सर्वाधिक)", "नागपूर विभाग (६ जिल्हे)", "एकूण ३६ जिल्हे", "३५८ तालुके"]
                                        },
                                        {
                                            id: "st_gc_g01_02_02",
                                            titleMr: "५ प्राकृतिक / प्रादेशिक विभाग: १) कोकण, २) पश्चिम महाराष्ट्र (देश), ३) खान्देश (उत्तर महाराष्ट्र - ३ जिल्हे: जळगाव, धुळे, नंदुरबार), ४) मराठवाडा (८ जिल्हे), ५) विदर्भ (११ जिल्हे - अमरावती व नागपूर विभाग मिळून); प्रादेशिक व प्रशासकीय विभागांमधील फरक",
                                            titleEn: "Five Natural / Socio-Cultural Regions: Konkan, Western Maharashtra (Desh), Khandesh (3 districts: Jalgaon, Dhule, Nandurbar), Marathwada (8 districts), and Vidarbha (11 districts comprising Amravati and Nagpur divisions)",
                                            chips: ["५ प्रादेशिक विभाग", "खान्देश (३ जिल्हे)", "विदर्भ (११ जिल्हे)", "मराठवाडा (८ जिल्हे)"]
                                        },
                                        {
                                            id: "st_gc_g01_02_03",
                                            titleMr: "जिल्हा निर्मिती कालरेषा (१ मे १९६० ते आजपर्यंत): १ मे १९६० रोजी राज्यात २६ जिल्हे व २३५ तालुके होते; त्यानंतर झालेले १० नवीन जिल्हे: १) रत्नागिरीतून सिंधुदुर्ग (१ मे १९८१), २) छत्रपती संभाजीनगरमधून जालना (१ मे १९८१), ३) उस्मानाबादमधून लातूर (१६ ऑगस्ट १९८२), ४) चंद्रपूरमधून गडचिरोली (२६ ऑगस्ट १९८२), ५) बृहन्मुंबईचे विभाजन: मुंबई शहर व मुंबई उपनगर (१ ऑक्टोबर १९९०), ६) अकोल्यातून वाशीम (१ जुलै १९९८), ७) धुळ्यातून नंदुरबार (१ जुलै १९९८), ८) परभणीतून हिंगोली (१ मे १९९९), ९) भंडाऱ्यातून गोंदिया (१ मे १९९९), १०) ठाण्यातून पालघर (१ ऑगस्ट २०१४ - ३६ वा जिल्हा)",
                                            titleEn: "District Bifurcation Timeline (1960 to Present): 26 districts existed on 1 May 1960; 10 new districts created: Sindhudurg & Jalna (1981), Latur & Gadchiroli (1982), Mumbai Suburban (1990), Washim & Nandurbar (1998), Hingoli & Gondia (1999), and Palghar from Thane on 1 Aug 2014 (36th district)",
                                            chips: ["१ मे १९६० रोजी २६ जिल्हे", "१० नवीन जिल्हे निर्मिती", "पालघर ३६ वा जिल्हा (१ ऑगस्ट २०१४)", "सिंधुदुर्ग व जालना १९८१"]
                                        }
                                    ],
                                    sources: [
                                        { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण १: प्रशासकीय विभाग व जिल्हा निर्मिती" },
                                        { book: "महाराष्ट्र शासन अधिकृत गॅझेट", standard: "महसूल व वन विभाग", chapterRef: "जिल्हा व तालुका पुनर्रचना" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण २: कोकण किनारपट्टी: निर्मिती, विस्तार, खाड्या, बेटे व भूरचना
                        // =========================================================================
                        {
                            id: "gc_geog_c02",
                            code: "CG02",
                            section: "A",
                            slug: "konkan-coastal-lowlands-geomorphology-creeks-and-islands",
                            nameMr: "कोकण किनारपट्टी: निर्मिती, विस्तार, खाड्या, बेटे व भूरचना",
                            nameEn: "Konkan Coastal Lowlands: Genesis, Sub-divisions, Creeks, Islands & Relief",
                            name: "कोकण किनारपट्टी व खाड्या",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_geog_c02",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_geog_c01",
                            nextChapterId: "gc_geog_c03",
                            metaDescriptionMr: "कोकण किनारपट्टीची लांबी (७२० किमी), रुंदी (उत्तर कोकण ९०-१२० किमी, दक्षिण कोकण ४०-४५ किमी), उत्तर व दक्षिण कोकणातील फरक, खाड्यांचा उत्तर-दक्षिण क्रम (दमनगंगा ते तेरेखोल), आणि बेटे.",
                            metaDescriptionEn: "Konkan Coast physical features: 720 km shoreline, North Konkan vs South Konkan morphology, Estuarine creeks north-to-south sequence (Dahanu to Terekhol), and coastal islands.",
                            notesJsonPath: "/data/notes/group_c/prelims/geography/c02_konkan_coast.json",
                            quizTag: "gc_geog_konkan_01",
                            tags: ["Konkan Coast 720 km", "Creeks North to South", "North South Konkan", "Coastal Islands", "High-Weightage"],
                            searchKeywords: ["konkan coast 720 km coastline width north south", "konkan creeks north to south order dahanu dharamtar dabhol terekhol", "islands salsette elephanta arnala", "कोकण किनारपट्टी ७२० किमी", "कोकणातील खाड्या उत्तर दक्षिण क्रम", "दमनगंगा ते तेरेखोल खाडी"],
                            topics: [
                                {
                                    id: "top_gc_g02_01",
                                    nameMr: "कोकण किनारपट्टीची प्राकृतिक रचना, खाड्या आणि बेटे",
                                    nameEn: "Konkan Physical Relief, Estuarine Creeks & Coastal Islands",
                                    subtopics: [
                                        {
                                            id: "st_gc_g02_01_01",
                                            titleMr: "कोकण किनारपट्टीची निर्मिती व वैशिष्ट्ये: पश्चिमेकडील भूभाग खचल्यामुळे निर्माण झालेली निमज्जन किनारपट्टी (Submergence Coastline); लांबी सुमारे ७२० किमी; रुंदी: उत्तरेकडे उल्हास खोऱ्यात ९० ते १२० किमी (रुंद), तर दक्षिणेकडे सिंधुदुर्गमध्ये ४० ते ४५ किमी (अरुंद); क्षेत्रफळ सुमारे ३०,३९४ चौ.किमी; खलाटी (किनारपट्टीचा सखल भाग) आणि वलाटी (सह्याद्रीच्या पायथ्याकडील उंचसखल भाग)",
                                            titleEn: "Konkan Relief Morphology: Coastline of submergence; Shoreline length ~720 km; Width varies from 90-120 km in north (Ulhas basin) tapering to 40-45 km in south (Sindhudurg); Khalati (coastal lowlands) vs Walati (foothill undulating uplands)",
                                            chips: ["७२० किमी लांबी", "खलाटी (सखल किनारपट्टी)", "वलाटी (पायथ्याकडील भाग)", "उत्तरेकडे रुंद दक्षिणेकडे अरुंद"]
                                        },
                                        {
                                            id: "st_gc_g02_01_02",
                                            titleMr: "कोकणातील खाड्यांचा उत्तर ते दक्षिण क्रम (MPSC हमखास प्रश्न): १) पालघर: डहाणू, दांडी, तारापूर, शिरगाव, माहीम, केळवे, वसई; २) ठाणे/मुंबई: मनोरी, मालाड, माहीम, ठाणे खाडी; ३) रायगड: धरमतर (अंबा नदी), रोहा/कुंडलिका, राजापुरी, बाणकोट (सावित्री नदी); ४) रत्नागिरी: केळशी, दाभोळ (वशिष्ठी नदी), जयगड (शास्त्री नदी), भाट्ये (काजळी नदी), पूर्णगड (मुचकुंदी नदी), जैतापूर (काजवी नदी); ५) सिंधुदुर्ग: विजयदुर्ग, देवगड, आचरा, कर्ली, तेरेखोल (तेरेखोल नदी - राज्याची दक्षिण सीमा)",
                                            titleEn: "Sequential North-to-South Order of Konkan Creeks: Palghar (Dahanu, Tarapur, Vasai); Thane/Mumbai (Manori, Malad, Thane Creek); Raigad (Dharamtar, Roha, Rajapuri, Bankot); Ratnagiri (Kelshi, Dabhol, Jaigad, Bhatye, Purnagad, Jaitapur); Sindhudurg (Vijaydurg, Devgad, Achra, Karli, Terekhol)",
                                            chips: ["खाड्यांचा उत्तर-दक्षिण क्रम", "धरमतर खाडी (अंबा नदी)", "दाभोळ खाडी (वशिष्ठी)", "जयगड खाडी (शास्त्री)", "तेरेखोल खाडी (दक्षिण सीमा)"]
                                        },
                                        {
                                            id: "st_gc_g02_01_03",
                                            titleMr: "किनारपट्टीवरील बेटे व सागरी किल्ले: साष्टी बेट (मुंबई शहर व उपनगर वसलेले बेट), घारापुरी / एलिफंटा बेट (उरणजवळ, ऐतिहासिक लेणी), जंजिरा (मुरुडजवळ जलदुर्ग), अर्नाळा (वसई), खांदेरी-उंदेरी बेटे, पद्मदुर्ग, विजयदुर्ग, आणि सिंधुदुर्ग (कुरटे बेटावर छत्रपती शिवाजी महाराजांनी बांधलेला किल्ला)",
                                            titleEn: "Coastal Islands & Sea Forts: Salsette Island (houses Mumbai urban core), Gharapuri/Elephanta, Janjira sea fort, Arnala, Khanderi-Underi, Padmadurg, and Sindhudurg (built by Chhatrapati Shivaji Maharaj on Kurte island)",
                                            chips: ["साष्टी बेट (मुंबई)", "घारापुरी बेट (एलिफंटा लेणी)", "सिंधुदुर्ग (कुरटे बेट)", "जंजिरा जलदुर्ग"]
                                        }
                                    ],
                                    sources: [
                                        { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण २: कोकण किनारपट्टी व भूरूपे" },
                                        { book: "महाराष्ट्राचा भूगोल", standard: "प्रा. अनिरुद्ध", chapterRef: "प्रकरण २: कोकण प्राकृतिक रचना" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ३: सह्याद्री पर्वत (पश्चिम घाट): प्रमुख शिखरे, घाट रस्ते व पठारे
                        // =========================================================================
                        {
                            id: "gc_geog_c03",
                            code: "CG03",
                            section: "A",
                            slug: "sahyadri-western-ghats-peaks-passes-and-tablelands",
                            nameMr: "सह्याद्री पर्वत (पश्चिम घाट): प्रमुख शिखरे, घाट रस्ते (खिंडी) व पठारे",
                            nameEn: "Sahyadri (Western Ghats): Prominent Peaks, Mountain Passes (Ghats) & Tablelands",
                            name: "सह्याद्री, शिखरे व घाट रस्ते",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_geog_c03",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_geog_c02",
                            nextChapterId: "gc_geog_c04",
                            metaDescriptionMr: "सह्याद्री लांबी (महाराष्ट्रात ४४० किमी), सरासरी उंची (९००-१२०० मी), प्रमुख शिखरे उंचीनुसार उतरता क्रम (कळसूबाई १६४६ मी, साल्हेर १५६७ मी, महाबळेश्वर, हरिश्चंद्रगड), आणि प्रमुख घाट रस्ते (थळघाट, बोरघाट, वरंधा, कुंभार्ली, आंबोली).",
                            metaDescriptionEn: "Sahyadri mountain range: 440 km extent in Maharashtra, peaks hierarchy (Kalsubai 1646m, Salher 1567m, Mahabaleshwar), and mountain transport passes linking coastal ports to plateau (Thalghat, Borghat, Amboli).",
                            notesJsonPath: "/data/notes/group_c/prelims/geography/c03_sahyadri_peaks_passes.json",
                            quizTag: "gc_geog_sahyadri_01",
                            tags: ["Sahyadri Western Ghats", "Kalsubai Peak 1646m", "Mountain Passes Ghats", "Thalghat Kasara", "Borghat Khandala", "High-Weightage"],
                            searchKeywords: ["sahyadri western ghats peaks height descending order kalsubai salher mahabaleshwar", "mountain passes connecting cities thalghat mumbai nashik borghat mumbai pune", "amboli ghat sawantwadi belgaum", "सह्याद्री प्रमुख शिखरे उतरता क्रम कळसूबाई साल्हेर", "घाट रस्ते थळघाट कसारा बोरघाट खंडाळा", "आंबोली घाट"],
                            topics: [
                                {
                                    id: "top_gc_g03_01",
                                    nameMr: "सह्याद्रीची शिखरे, उंचीनुसार क्रम, प्रमुख घाट रस्ते व थंड हवेची ठिकाणे",
                                    nameEn: "Sahyadri Peaks Hierarchy, Trans-Ghat Transportation Passes & Hill Stations",
                                    subtopics: [
                                        {
                                            id: "st_gc_g03_01_01",
                                            titleMr: "सह्याद्रीची प्रमुख शिखरे (उंचीनुसार उतरता क्रम): १) कळसूबाई (१६४६ मी - अहमदनगर/नाशिक सीमा, महाराष्ट्रातील सर्वोच्च शिखर); २) साल्हेर (१५६७ मी - नाशिक, सर्वोच्च किल्ला); ३) महाबळेश्वर (१४३८ मी - सातारा); ४) हरिश्चंद्रगड (१४२४ मी - अहमदनगर); ५) सप्तशृंगी (१४१६ मी - नाशिक); ६) तोरणा (१४०४ मी - पुणे); ७) राजगड (१३७६ मी - पुणे); ८) रायेश्वर (१३३७ मी); ९) त्र्यंबकेश्वर (१३०४ मी - नाशिक); शिखरे लक्षात ठेवण्याची क्लृप्ती: 'कळसा मी हस्तो'",
                                            titleEn: "Descending Hierarchy of Sahyadri Peaks: 1) Kalsubai (1646m - Ahmednagar/Nashik, highest peak in MH), 2) Salher (1567m - Nashik, highest fort), 3) Mahabaleshwar (1438m - Satara), 4) Harishchandragad (1424m - Ahmednagar), 5) Saptashrungi (1416m - Nashik), 6) Torna (1404m - Pune), 7) Rajgad (1376m - Pune), 8) Trimbakeshwar (1304m - Nashik)",
                                            chips: ["कळसूबाई (१६४६ मी सर्वोच्च)", "साल्हेर (१५६७ मी)", "महाबळेश्वर (१४३८ मी)", "हरिश्चंद्रगड (१४२४ मी)", "सप्तशृंगी (१४१६ मी)"]
                                        },
                                        {
                                            id: "st_gc_g03_01_02",
                                            titleMr: "प्रमुख घाट रस्ते (जोडणारी शहरे): १) थळघाट / कसारा घाट: मुंबई ते नाशिक (NH 3 / NH 160); २) बोरघाट / खंडाळा घाट: मुंबई ते पुणे (NH 4 / NH 48); ३) माळशेज घाट: ठाणे/कल्याण ते ओतूर/जुन्नर/अहमदनगर; ४) वरंधा घाट: भोर ते महाड; ५) पसरणी घाट: वाई ते पाचगणी/महाबळेश्वर; ६) कुंभार्ली घाट: कराड ते चिपळूण; ७) आंबा घाट: कोल्हापूर ते रत्नागिरी; ८) फोंडा घाट: कोल्हापूर ते देवगड; ९) आंबोली घाट: सावंतवाडी ते बेळगाव",
                                            titleEn: "Strategic Mountain Transport Passes: Thalghat/Kasara (Mumbai-Nashik), Borghat/Khandala (Mumbai-Pune), Malshej Ghat (Kalyan-Junnar/Ahmednagar), Varandha (Bhor-Mahad), Pasarni (Wai-Mahabaleshwar), Kumbharli (Karad-Chiplun), Amba (Kolhapur-Ratnagiri), Phonda (Kolhapur-Devgad), Amboli (Sawantwadi-Belgaum)",
                                            chips: ["थळघाट (मुंबई-नाशिक)", "बोरघाट (मुंबई-पुणे)", "कुंभार्ली घाट (कराड-चिपळूण)", "आंबा घाट (कोल्हापूर-रत्नागिरी)", "आंबोली घाट (सावंतवाडी-बेळगाव)"]
                                        },
                                        {
                                            id: "st_gc_g03_01_03",
                                            titleMr: "पठारे व थंड हवेची ठिकाणे: १) पाचगणी व महाबळेश्वर (सातारा - टेबल लँड Table Land); २) माथेरान (रायगड - समुद्रसपाटीपासून सर्वात जवळचे, वाहनांना बंदी असलेले पर्यावरणपूरक थंड हवेचे ठिकाण); ३) लोणावळा व खंडाळा (पुणे); ४) चिखलदरा (अमरावती - विदर्भाचे नंदनवन, मेळघाट); ५) तोरणमाळ (नंदुरबार - सातपुडा पर्वत रांगेतील थंड हवेचे ठिकाण, यशवंत तलाव); ६) पन्हाळा (कोल्हापूर)",
                                            titleEn: "Hill Stations & Tablelands: Panchgani & Mahabaleshwar (Table Land plateau), Matheran (Raigad - automobile-free eco-sensitive hill station), Chikhaldara (Amravati - Vidarbha's hill retreat in Satpura range), Toranmal (Nandurbar - Yashwant Lake in Satpuras), Panhala (Kolhapur)",
                                            chips: ["माथेरान (पर्यावरणपूरक वाहनांना बंदी)", "चिखलदरा (विदर्भाचे नंदनवन अमरावती)", "तोरणमाळ (नंदुरबार सातपुडा)", "पाचगणी टेबल लँड"]
                                        }
                                    ],
                                    sources: [
                                        { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण २: सह्याद्री व घाट रस्ते" },
                                        { book: "महाराष्ट्राचा भूगोल", standard: "प्रा. अनिरुद्ध", chapterRef: "प्रकरण ३: शिखरे व खिंडी" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ४: महाराष्ट्र पठार (देश): बेसाल्ट खडकाची रचना आणि तीन प्रमुख डोंगररांगा
                        // =========================================================================
                        {
                            id: "gc_geog_c04",
                            code: "CG04",
                            section: "A",
                            slug: "maharashtra-plateau-desh-basalt-and-hill-ranges",
                            nameMr: "महाराष्ट्र पठार (देश): बेसाल्ट खडकाची रचना आणि तीन प्रमुख डोंगररांगा",
                            nameEn: "Maharashtra Plateau (Desh): Basalt Structure & 3 Major Eastward Offshoot Ranges",
                            name: "महाराष्ट्र पठार व डोंगररांगा",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_geog_c04",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_geog_c03",
                            nextChapterId: "gc_geog_c05",
                            metaDescriptionMr: "महाराष्ट्र पठाराने व्यापलेला भूभाग (९०%), बेसाल्ट खडक थर, आणि सह्याद्रीच्या ३ प्रमुख उपरांगा: सातमाळा-अजिंठा रांग, हरिश्चंद्र-बालाघाट रांग, शंभू-महादेव रांग व संबंधित नदी खोऱ्यांचे जलविभाजक.",
                            metaDescriptionEn: "Maharashtra Plateau (90% state area): Basalt stratigraphy and 3 primary eastward offshoot ranges acting as drainage divides: Satmala-Ajanta, Harishchandra-Balaghat, and Shambhu-Mahadev.",
                            notesJsonPath: "/data/notes/group_c/prelims/geography/c04_plateau_ranges.json",
                            quizTag: "gc_geog_ranges_01",
                            tags: ["Maharashtra Plateau", "Basalt Deccan Trap", "Satmala Ajanta", "Harishchandra Balaghat", "Shambhu Mahadev", "Drainage Divides"],
                            searchKeywords: ["maharashtra plateau basalt lava 90 percent area", "three offshoot ranges satmala ajanta harishchandra balaghat shambhu mahadev", "water divides river basins godavari bhima krishna tapi", "महाराष्ट्र पठार देश बेसाल्ट", "सातमाळा अजिंठा रांग", "हरिश्चंद्र बालाघाट रांग", "शंभू महादेव रांग जलविभाजक"],
                            topics: [
                                {
                                    id: "top_gc_g04_01",
                                    nameMr: "महाराष्ट्र पठाराची भूरचना आणि ३ प्रमुख पूर्व-पश्चिम डोंगररांगा",
                                    nameEn: "Plateau Geomorphology & The 3 Major River Basin Dividing Offshoots",
                                    subtopics: [
                                        {
                                            id: "st_gc_g04_01_01",
                                            titleMr: "महाराष्ट्र पठाराचे सामान्य स्वरूप: दख्खनच्या पठाराचा भाग; महाराष्ट्राच्या एकूण क्षेत्रफळाचा सुमारे ९०% भाग पठाराने व्यापला आहे; पश्चिमेकडून पूर्वेकडे मंद उतार (सरासरी उंची पश्चिमेस ६०० मी, पूर्वेस ३०० मी); बेसाल्ट खडकाचे क्षितिजसमांतर थर; पश्चिमेकडील सह्याद्रीच्या मुख्य रांगेतून ३ प्रमुख डोंगररांगा पूर्व दिशेला पसरल्या आहेत",
                                            titleEn: "General Features of Maharashtra Plateau: Constitutes 90% of state landmass; Gentle eastward slope (altitude drops from 600m in west to 300m in east); Horizontal basalt trappean lava beds dissected by 3 major eastward mountain ranges",
                                            chips: ["पठाराने व्यापला ९०% भाग", "पूर्वेकडे मंद उतार", "क्षितिजसमांतर बेसाल्ट थर", "३ प्रमुख डोंगररांगा"]
                                        },
                                        {
                                            id: "st_gc_g04_01_02",
                                            titleMr: "सातमाळा-अजिंठा डोंगररांग: सह्याद्रीतून नाशिक जिल्ह्यात उगम पावते; पश्चिमेकडे नाशिक भागात 'सातमाळा' व पूर्वेकडे छत्रपती संभाजीनगर, जालना, बुलढाणा भागात 'अजिंठा' रांग म्हणतात; जलविभाजक: तापी-पूर्णा नदी खोरे आणि गोदावरी नदी खोरे यांना परस्परांपासून वेगळे करते; जागतिक कीर्तीच्या अजिंठा लेणी याच रांगेत आहेत",
                                            titleEn: "Satmala-Ajanta Hill Range: Branches from Sahyadri in Nashik; Known as Satmala in Nashik and Ajanta in Chhatrapati Sambhajinagar/Jalna; Acts as drainage divide separating Tapi-Purna basin in north from Godavari basin in south; Houses Ajanta Caves",
                                            chips: ["सातमाळा-अजिंठा रांग", "तापी व गोदावरी जलविभाजक", "अजिंठा लेणी", "नाशिक ते जालना"]
                                        },
                                        {
                                            id: "st_gc_g04_01_03",
                                            titleMr: "हरिश्चंद्र-बालाघाट डोंगररांग: सह्याद्रीतून अहमदनगर जिल्ह्यात सुरू होते; पश्चिमेकडे 'हरिश्चंद्र' रांग व पूर्वेकडे बीड, धाराशिव, लातूर भागात 'बालाघाट' पठार/रांग म्हणतात; जलविभाजक: उत्तरेकडील गोदावरी नदी खोरे आणि दक्षिणेकडील भीमा नदी खोरे यांना परस्परांपासून वेगळे करते",
                                            titleEn: "Harishchandra-Balaghat Range: Extends east from Ahmednagar through Beed, Dharashiv and Latur; Forms the critical drainage divide separating Godavari basin in north from Bhima basin in south",
                                            chips: ["हरिश्चंद्र-बालाघाट रांग", "गोदावरी व भीमा जलविभाजक", "अहमदनगर, बीड, लातूर"]
                                        },
                                        {
                                            id: "st_gc_g04_01_04",
                                            titleMr: "शंभू-महादेव डोंगररांग: महाबळेश्वरजवळून सातारा जिल्ह्यातून आग्नेयेकडे सांगली व सोलापूर जिल्ह्यांत पसरलेली रांग; जलविभाजक: उत्तरेकडील भीमा नदी खोरे आणि दक्षिणेकडील कृष्णा नदी खोरे यांना परस्परांपासून वेगळे करते; औंधचे पठार व खानापूरचे पठार याच रांगेत आहेत",
                                            titleEn: "Shambhu-Mahadev Range: Branches near Mahabaleshwar in Satara, extending southeast into Sangli and Solapur; Forms the drainage divide separating Bhima basin in north from Krishna basin in south; Includes Aundh and Khanapur plateaus",
                                            chips: ["शंभू-महादेव रांग", "भीमा व कृष्णा जलविभाजक", "सातारा, सांगली, सोलापूर", "खानापूर पठार"]
                                        }
                                    ],
                                    sources: [
                                        { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण २: महाराष्ट्र पठार व डोंगररांगा" },
                                        { book: "महाराष्ट्राचा भूगोल", standard: "प्रा. अनिरुद्ध", chapterRef: "प्रकरण २: जलविभाजक व उपरांगा" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ५: गोदावरी नदी प्रणाली: उगम, उपनद्या, धरणे, संगम व खोऱ्याचे वैशिष्ट्ये
                        // =========================================================================
                        {
                            id: "gc_geog_c05",
                            code: "CG05",
                            section: "B",
                            slug: "drainage-system-godavari-river-basin-in-depth",
                            nameMr: "गोदावरी नदी प्रणाली: उगम, उपनद्या, धरणे, संगम व खोऱ्याचे वैशिष्ट्ये",
                            nameEn: "Godavari River System: Origin, Tributaries, Dams, Confluences & Basin Morphology",
                            name: "गोदावरी नदी प्रणाली (Godavari River Basin)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_geog_c05",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_geog_c04",
                            nextChapterId: "gc_geog_c06",
                            metaDescriptionMr: "गोदावरी नदी: त्र्यंबकेश्वर उगम, लांबी (महाराष्ट्रात ६६८ किमी), खोऱ्याचे क्षेत्रफळ (४९%), डाव्या व उजव्या तीरावरील उपनद्या (प्रवरा, मुळा, दारणा, सिंधफणा, मांजरा, दुधना, पूर्णा, प्राणहिता, इंद्रावती), जायकवाडी धरण, आणि धार्मिक संगमे.",
                            metaDescriptionEn: "Godavari River Basin: Trimbakeshwar origin, 668 km length in Maharashtra (49% state drainage area), left/right bank tributaries (Pravara, Manjara, Purna, Pranhita, Indravati), Jayakwadi Dam, and holy river confluences.",
                            notesJsonPath: "/data/notes/group_c/prelims/geography/c05_godavari_basin.json",
                            quizTag: "gc_geog_godavari_01",
                            tags: ["Godavari Basin", "Trimbakeshwar Origin", "49 Percent State Area", "Pravara Manjara Pranhita", "Jayakwadi Dam", "High-Weightage"],
                            searchKeywords: ["godavari river basin maharashtra origin trimbakeshwar nashik length 668 km", "tributaries pravara darna manjara purna pranhita indravati", "jayakwadi dam nath sagar aurangabad", "river confluences toka sangam pravara godavari", "गोदावरी नदी खोरे त्र्यंबकेश्वर", "६६८ किमी लांबी ४९% क्षेत्रफळ", "प्रवरा मांजरा प्राणहिता उपनद्या", "जायकवाडी धरण नाथसागर", "नदी संगम टोके"],
                            topics: [
                                {
                                    id: "top_gc_g05_01",
                                    nameMr: "गोदावरी नदी खोरे, उपनद्यांचे जाळे, धरणे आणि नदी संगम",
                                    nameEn: "Godavari Drainage Architecture, Tributary Network, Dams & Sacred Confluences",
                                    subtopics: [
                                        {
                                            id: "st_gc_g05_01_01",
                                            titleMr: "गोदावरी नदीची मूलभूत वैशिष्ट्ये: उगम: नाशिक जिल्ह्यातील त्र्यंबकेश्वर येथे ब्रह्मगिरी पर्वतावर; एकूण लांबी १,४६५ किमी (महाराष्ट्रात ६६८ किमी); महाराष्ट्राच्या एकूण क्षेत्रफळापैकी सुमारे ४९% क्षेत्र (१,५२,५८८ चौ.किमी) गोदावरीच्या खोऱ्याने व्यापले आहे; 'दक्षिण भारताची गंगा' किंवा 'वृद्ध गंगा' म्हणतात; नाशिक, अहमदनगर, छत्रपती संभाजीनगर, जालना, बीड, परभणी, नांदेड, गडचिरोली या जिल्ह्यांतून प्रवास",
                                            titleEn: "Godavari System Basics: Origin at Brahmagiri hills, Trimbakeshwar (Nashik); Total length 1465 km (668 km in MH); Drains ~49% of Maharashtra's geographic area; Termed 'Dakshin Ganga' or 'Vridha Ganga'; Traverses 8 key districts eastward into Bay of Bengal",
                                            chips: ["त्र्यंबकेश्वर ब्रह्मगिरी उगम", "महाराष्ट्रात लांबी ६६८ किमी", "खोऱ्याने व्यापले ४९% क्षेत्र", "दक्षिण गंगा / वृद्ध गंगा"]
                                        },
                                        {
                                            id: "st_gc_g05_01_02",
                                            titleMr: "गोदावरीच्या उपनद्या (डावा व उजवा तीर): १) डाव्या तीरावरील (उत्तरेकडून मिळणाऱ्या): कादवा, शिवना, खाम, दुधना, पूर्णा, बाणगंगा, आणि विदर्भातील प्राणहिता (वर्धा + वैनगंगा + पेनगंगा यांचे एकत्र पाणी) व इंद्रावती; २) उजव्या तीरावरील (दक्षिणेकडून मिळणाऱ्या): दारणा, प्रवरा (उपनदी मुळा), कुंडलिका, सिंधफणा, आणि मांजरा (उगम बालाघाट पठार - पाटोदा, बीड - लातूर, नांदेड मार्गे वाहते)",
                                            titleEn: "Left & Right Bank Tributaries: Left Bank (from north): Kadva, Shivna, Dudhna, Purna, and Pranhita (combined flow of Wardha, Wainganga, Penganga), Indravati; Right Bank (from south): Darna, Pravara (with Mula), Sindphana, and Manjara (originating on Balaghat plateau in Beed)",
                                            chips: ["प्राणहिता (वर्धा + वैनगंगा + पेनगंगा)", "मांजरा नदी (उजवा तीर)", "प्रवरा व मुळा", "दुधना व पूर्णा"]
                                        },
                                        {
                                            id: "st_gc_g05_01_03",
                                            titleMr: "धरणे व नदी संगम: १) जायकवाडी धरण (पैठण, छत्रपती संभाजीनगर - 'नाथसागर' जलाशय); २) गंगापूर धरण (नाशिक - भारतातील पहिले मातीचे धरण); ३) प्रवरा नदीवर भंडारदरा धरण (आर्थर लेक); नदी संगम: प्रवरा-गोदावरी संगम (प्रवरासंगम / टोके, नेवासाजवळ); सिंधफणा-गोदावरी संगम (मांजरथ); मांजरा-गोदावरी संगम (कुंडलवाडी / बाभळी); प्राणहिता-गोदावरी संगम (सिरोंचा, गडचिरोली)",
                                            titleEn: "Dams & Sacred Confluences: Jayakwadi Dam (Nath Sagar at Paithan); Gangapur Dam (Nashik - India's 1st earthen dam); Bhandardara (Arthur Lake on Pravara); Confluences: Pravara-Godavari at Pravarasangam/Toke (Nevasa), Sindphana at Manjrath, Manjara at Kundalwadi, Pranhita at Sironcha (Gadchiroli)",
                                            chips: ["जायकवाडी धरण (नाथसागर)", "गंगापूर धरण (पहिले मातीचे धरण)", "प्रवरा संगम (टोके नेवासा)", "प्राणहिता संगम (सिरोंचा)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण ३: गोदावरी नदी प्रणाली" },
                                        { book: "महाराष्ट्राचा भूगोल", standard: "प्रा. अनिरुद्ध", chapterRef: "प्रकरण ४: नदी खोरी" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ६: भीमा आणि कृष्णा नदी प्रणाली: उगम, उपनद्या, धरणे व आंतरजिल्हा प्रवाह
                        // =========================================================================
                        {
                            id: "gc_geog_c06",
                            code: "CG06",
                            section: "B",
                            slug: "drainage-system-bhima-and-krishna-river-basins",
                            nameMr: "भीमा आणि कृष्णा नदी प्रणाली: उगम, उपनद्या, धरणे व आंतरजिल्हा प्रवाह",
                            nameEn: "Bhima & Krishna River Systems: Origins, Tributaries, Dams & Drainage Patterns",
                            name: "भीमा व कृष्णा नदी प्रणाली",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_geog_c06",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_geog_c05",
                            nextChapterId: "gc_geog_c07",
                            metaDescriptionMr: "भीमा नदी (भीमाशंकर उगम, महाराष्ट्रात ४५१ किमी, उजनी धरण, इंद्रायणी, मुळा-मुठा, नीरा, सीना उपनद्या) आणि कृष्णा नदी (महाबळेश्वर उगम, २८२ किमी, कोयना धरण शिवसागर, वारणा, पंचगंगा उपनद्या, नृसिंहवाडी संगम).",
                            metaDescriptionEn: "Bhima Basin (Bhimashankar origin, 451 km, Ujani Dam, Indrayani, Mula-Mutha, Nira, Sina) and Krishna Basin (Mahabaleshwar origin, 282 km in MH, Koyna Dam Shivsagar, Panchganga, Narsobachi Wadi confluence).",
                            notesJsonPath: "/data/notes/group_c/prelims/geography/c06_bhima_krishna_basins.json",
                            quizTag: "gc_geog_krishna_01",
                            tags: ["Bhima River Basin", "Ujani Dam", "Krishna River Basin", "Koyna Dam Shivsagar", "Panchganga Confluence", "High-Weightage"],
                            searchKeywords: ["bhima river basin bhimashankar ujani dam indrayani nira", "krishna river basin mahabaleshwar koyna dam shivsagar", "panchganga river confluence narsobachi wadi", "भीमा नदी खोरे भीमाशंकर उजनी धरण", "कृष्णा नदी महाबळेश्वर", "कोयना धरण शिवसागर", "पंचगंगा संगम नृसिंहवाडी"],
                            topics: [
                                {
                                    id: "top_gc_g06_01",
                                    nameMr: "भीमा व कृष्णा नदी खोरे, उपनद्या, जलाशय आणि जलसंगम",
                                    nameEn: "Bhima & Krishna Drainage Geometry, Tributaries, Reservoirs & Confluences",
                                    subtopics: [
                                        {
                                            id: "st_gc_g06_01_01",
                                            titleMr: "भीमा नदी खोरे: उगम: पुणे जिल्ह्यातील भीमाशंकर (ज्योतिर्लिंग) येथे; महाराष्ट्रात लांबी ४५१ किमी (एकूण ८६१ किमी); कर्नाटक सीमेजवळ कुडलसंगम येथे कृष्णा नदीस मिळते; पंढरपूर येथे चंद्रकोरेसारखा आकार धारण करत असल्याने 'चंद्रभागा' नाव; खोऱ्याने महाराष्ट्राचा सुमारे १५% भूभाग व्यापला आहे; उपनद्या: डाव्या तीरावरून घोड, सीना; उजव्या तीरावरून भामा, इंद्रायणी, मुळा-मुठा, नीरा, माण",
                                            titleEn: "Bhima Basin Dynamics: Origin at Bhimashankar (Pune); Length in MH 451 km (total 861 km); Confluences with Krishna at Kudalsangam (Karnataka); Known as 'Chandrabhaga' at Pandharpur due to crescent curve; Drains ~15% of state; Tributaries: Left bank Ghod, Sina; Right bank Indrayani, Mula-Mutha, Nira, Maan",
                                            chips: ["भीमाशंकर उगम", "महाराष्ट्रात लांबी ४५१ किमी", "पंढरपूर येथे चंद्रभागा नाव", "इंद्रायणी, मुळा-मुठा, नीरा, सीना"]
                                        },
                                        {
                                            id: "st_gc_g06_01_02",
                                            titleMr: "भीमा खोऱ्यातील धरणे व संगम: उजनी धरण (सोलापूर - 'यशवंतसागर' जलाशय, भीमा नदीवर); खडकवासला धरण (मुठा नदी); वीर व भाटघर धरण (नीरा नदी); चासकमान (भीमा नदी); संगम: मुळा-मुठा संगम (पुणे), इंद्रायणी-भीमा संगम (तुळापूर - छत्रपती संभाजी महाराज समाधी), नीरा-भीमा संगम (नीरा नरसिंहपूर), सीना-भीमा संगम (कुंडल)",
                                            titleEn: "Bhima Dams & Confluences: Ujani Dam (Yashwant Sagar, Solapur); Khadakwasla (Mutha); Bhatghar/Veer (Nira); Chaskaman (Bhima); Confluences: Mula-Mutha at Pune, Indrayani-Bhima at Tulapur (Chhatrapati Sambhaji Maharaj samadhi), Nira-Bhima at Nira Narsinghpur",
                                            chips: ["उजनी धरण (यशवंतसागर)", "खडकवासला धरण", "तुळापूर संगम (इंद्रायणी-भीमा)", "नीरा नरसिंहपूर संगम"]
                                        },
                                        {
                                            id: "st_gc_g06_01_03",
                                            titleMr: "कृष्णा नदी प्रणाली: उगम: सातारा जिल्ह्यातील महाबळेश्वर येथे; महाराष्ट्रात लांबी २८२ किमी (एकूण १,४०० किमी); खोऱ्याचे क्षेत्रफळ सुमारे २९,००० चौ.किमी; उपनद्या: कोयना, वेण्णा, उरमोडी, तारळी, वारणा, पंचगंगा (कुंभी, कासारी, तुळशी, भोगावती, सरस्वती), दूधगंगा, वेदगंगा; कोयना धरण ('शिवसागर' जलाशय - हेळवाक); संगम: कृष्णा-वेण्णा संगम (माहुली), कृष्णा-कोयना संगम (कराड - 'प्रीतीसंगम' - यशवंतराव चव्हाण समाधी), कृष्णा-पंचगंगा संगम (नृसिंहवाडी / नरसोबाची वाडी)",
                                            titleEn: "Krishna River System: Originates at Mahabaleshwar (Satara); Length in MH 282 km (total 1400 km); Tributaries: Koyna, Venna, Urmodi, Varna, Panchganga (Kumbhi, Kasari, Tulsi, Bhogavati, Saraswati), Dudhganga; Koyna Dam (Shivsagar); Confluences: Krishna-Venna at Mahuli, Krishna-Koyna at Karad ('Preetisangam'), Krishna-Panchganga at Narsobachi Wadi",
                                            chips: ["महाबळेश्वर उगम (कृष्णा २८२ किमी)", "कोयना धरण (शिवसागर)", "प्रीतीसंगम कराड (कृष्णा-कोयना)", "नृसिंहवाडी संगम (कृष्णा-पंचगंगा)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण ३: भीमा व कृष्णा नदी प्रणाली" },
                                        { book: "महाराष्ट्राचा भूगोल", standard: "प्रा. अनिरुद्ध", chapterRef: "प्रकरण ४: दक्षिण महाराष्ट्र जलप्रणाली" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ७: तापी-पूर्णा खोरे आणि पश्चिमेकडे वाहणाऱ्या कोकणातील तीव्र उताराच्या नद्या
                        // =========================================================================
                        {
                            id: "gc_geog_c07",
                            code: "CG07",
                            section: "B",
                            slug: "drainage-system-tapi-purna-and-west-flowing-konkan-rivers",
                            nameMr: "तापी-पूर्णा खोरे आणि पश्चिमेकडे वाहणाऱ्या कोकणातील तीव्र उताराच्या नद्या",
                            nameEn: "Tapi-Purna Rift Valley Basin & West-Flowing Short Coastal Rivers of Konkan",
                            name: "तापी-पूर्णा व कोकणातील नद्या",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_geog_c07",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_geog_c06",
                            nextChapterId: "gc_geog_c08",
                            metaDescriptionMr: "तापी नदी (मुलताई उगम, खचदरीतून पश्चिमेकडे प्रवाह, हतनूर धरण), पूर्णा नदी, आणि कोकणातील पश्चिम वाहिनी नद्या (वैतरणा, उल्हास - सर्वात लांब १३० किमी, सावित्री, वशिष्ठी, शास्त्री, तेरेखोल).",
                            metaDescriptionEn: "Tapi-Purna Rift Valley drainage (Multai origin, westward flow through Khandesh, Hatnur Dam), and short, rapid west-flowing Konkan rivers (Vaitarna, Ulhas - longest 130 km, Savitri, Vashishti, Terekhol).",
                            notesJsonPath: "/data/notes/group_c/prelims/geography/c07_tapi_konkan_rivers.json",
                            quizTag: "gc_geog_tapi_01",
                            tags: ["Tapi Purna Basin", "Rift Valley Westward Flow", "Hatnur Dam", "Konkan Rivers Ulhas Vaitarna", "Estuaries"],
                            searchKeywords: ["tapi river rift valley khandesha multai hatnur dam", "purna river tributary tapi", "konkan west flowing rivers ulhas 130 km vaitarna savitri", "तापी पूर्णा नदी खोरे खचदरी", "हतनूर धरण जळगाव", "कोकणातील पश्चिम वाहिनी नद्या उल्हास वैतरणा"],
                            topics: [
                                {
                                    id: "top_gc_g07_01",
                                    nameMr: "तापी-पूर्णा खचदरी खोरे आणि कोकणातील वेगवान पश्चिम वाहिनी नद्या",
                                    nameEn: "Tapi-Purna Rift Valley Mechanics & Fast Coastal Drainage of Konkan",
                                    subtopics: [
                                        {
                                            id: "st_gc_g07_01_01",
                                            titleMr: "तापी-पूर्णा नदी प्रणाली: सातपुडा पर्वत व अजिंठा डोंगररांग यांच्या दरम्यानच्या खचदरीत (Rift Valley) पश्चिमेकडे वाहणारी प्रमुख नदी; उगम: मध्य प्रदेशातील बैतुल जिल्ह्यातील मुलताई येथे; महाराष्ट्रात लांबी २०८ किमी (एकूण ७२४ किमी); खान्देशची जीवनवाहिनी; पूर्णा नदी (अमरावतीतील गाविलगड टेकड्यांवर उगम) ही तापीची प्रमुख उपनदी; तापी-पूर्णा संगम: चांगदेव (जि. जळगाव); धरण: हतनूर धरण (जळगाव)",
                                            titleEn: "Tapi-Purna Rift System: Major westward river flowing through rift valley between Satpuras and Ajanta hills; Origin at Multai (Betul, MP); Length in MH 208 km (total 724 km); Lifeline of Khandesh; Purna river joins Tapi at Changdev (Jalgaon); Hatnur Dam",
                                            chips: ["तापी नदी (खचदरीत पश्चिमेकडे प्रवाह)", "मुलताई उगम बैतुल", "पूर्णा नदी उपनदी", "चांगदेव संगम (जळगाव)", "हतनूर धरण"]
                                        },
                                        {
                                            id: "st_gc_g07_01_02",
                                            titleMr: "कोकणातील पश्चिम वाहिनी नद्यांची वैशिष्ट्ये: सह्याद्रीच्या पश्चिम उतारावर उगम पावून अरबी समुद्राला मिळणाऱ्या नद्या; तीव्र उतार, उथळ खोरे आणि अतिशय वेगाने वाहणाऱ्या नद्या (पावसाळ्यात प्रचंड पूर, उन्हाळ्यात कोरड्या); त्रिभुज प्रदेश (Deltas) निर्माण न करता समुद्राला मिळताना खाड्या (Estuaries/Creeks) निर्माण करतात; जलविद्युत निर्मितीसाठी अनुकूल",
                                            titleEn: "Characteristics of Konkan Rivers: Originate on western scarp of Sahyadri flowing directly into Arabian Sea; Very short length, steep gradient, high velocity; Seasonal torrential flows forming estuaries/creeks rather than deltas; Excellent for hydropower generation",
                                            chips: ["पश्चिम वाहिनी नद्या (अरबी समुद्रास मिळतात)", "तीव्र उतार व वेगवान प्रवाह", "त्रिभुज प्रदेश नाही (खाड्या निर्माण करतात)"]
                                        },
                                        {
                                            id: "st_gc_g07_01_03",
                                            titleMr: "कोकणातील प्रमुख नद्या (उत्तर ते दक्षिण): १) पालघर: दमनगंगा, सूर्या, वैतरणा (पालघर/ठाणे - मुंबईला पाणीपुरवठा); २) ठाणे/रायगड: उल्हास नदी (कोकणातील सर्वात लांब नदी - लांबी १३० किमी); ३) रायगड: पाताळगंगा, अंबा, कुंडलिका (जलक्रीडा/रिव्हर राफ्टिंग), काळ, सावित्री (महाड); ४) रत्नागिरी: वशिष्ठी (चिपळूण), शास्त्री, काजळी, मुचकुंदी, काजवी; ५) सिंधुदुर्ग: शुक, गड, कर्ली, तेरेखोल (महाराष्ट्राची दक्षिणेकडील सीमा)",
                                            titleEn: "Prominent Konkan Rivers North to South: Damanganga, Surya, Vaitarna, Ulhas (longest Konkan river - 130 km), Patalganga, Amba, Kundalika (famed for white water rafting), Savitri, Vashishti (Chiplun), Shastri, Kajali, Karli, Terekhol (southernmost state boundary)",
                                            chips: ["उल्हास नदी (कोकणातील सर्वात लांब १३० किमी)", "वैतरणा नदी (मुंबई पाणीपुरवठा)", "कुंडलिका (रिव्हर राफ्टिंग)", "सावित्री नदी (महाड)", "तेरेखोल नदी (दक्षिण सीमा)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण ३: तापी व कोकणातील नद्या" },
                                        { book: "महाराष्ट्राचा भूगोल", standard: "प्रा. अनिरुद्ध", chapterRef: "प्रकरण ४: पश्चिम वाहिनी नद्या" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ८: महाराष्ट्राचे हवामान: नैऋत्य मान्सून वारे, प्रतिरोध पाऊस आणि पर्जन्यछायेचा पट्टा
                        // =========================================================================
                        {
                            id: "gc_geog_c08",
                            code: "CG08",
                            section: "C",
                            slug: "climate-of-maharashtra-monsoon-winds-and-rainfall-distribution",
                            nameMr: "महाराष्ट्राचे हवामान: नैऋत्य मान्सून वारे, प्रतिरोध पाऊस आणि पर्जन्यछायेचा पट्टा",
                            nameEn: "Maharashtra Climate: Southwest Monsoon, Orographic Rainfall & Rain-Shadow Zones",
                            name: "हवामान, मान्सून व पर्जन्यछायेचा पट्टा",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_geog_c08",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_geog_c07",
                            nextChapterId: "gc_geog_c09",
                            metaDescriptionMr: "महाराष्ट्राचे उष्णकटिबंधीय मान्सून हवामान, प्रतिरोध पाऊस (Orographic Rainfall), सर्वाधिक पावसाचे ठिकाण (आंबोली सुमारे ७५० सेमी, महाबळेश्वर), पर्जन्यछायेचा पट्टा (अहमदनगर, सोलापूर ५० सेमी पेक्षा कमी पाऊस), आणि तीन ऋतू चक्र.",
                            metaDescriptionEn: "Maharashtra's Tropical Monsoon Climate: Orographic mechanism along Western Ghats, peak rainfall nodes (Amboli ~750 cm, Mahabaleshwar), rain-shadow aridity (Ahmednagar, Solapur <50 cm), and three seasonal cycles.",
                            notesJsonPath: "/data/notes/group_c/prelims/geography/c08_climate_rainfall.json",
                            quizTag: "gc_geog_rain_01",
                            tags: ["Climate Monsoon", "Orographic Rainfall", "Amboli Wettest Place", "Rain Shadow Zone Ahmednagar Solapur", "High-Weightage"],
                            searchKeywords: ["maharashtra climate southwest monsoon orographic rainfall", "amboli wettest place maharashtra 750 cm", "rain shadow zone maharashtra ahmednagar solapur", "three seasons winter summer rainy", "महाराष्ट्राचे हवामान प्रतिरोध पाऊस", "आंबोली सर्वाधिक पाऊस", "पर्जन्यछायेचा पट्टा अहमदनगर सोलापूर", "मान्सून वितरण"],
                            topics: [
                                {
                                    id: "top_gc_g08_01",
                                    nameMr: "मान्सूनची यंत्रणा, प्रतिरोध पर्जन्य, पर्जन्यछायेचा प्रदेश आणि ऋतूचक्र",
                                    nameEn: "Monsoon Dynamics, Orographic Precipitation, Rain-Shadow Aridity & Seasonality",
                                    subtopics: [
                                        {
                                            id: "st_gc_g08_01_01",
                                            titleMr: "नैऋत्य मान्सून वारे व प्रतिरोध पाऊस (Orographic Rainfall): अरबी समुद्रावरून येणारे बाष्पयुक्त नैऋत्य मान्सून वारे सह्याद्री पर्वताला अडतात; वर चढताना हवा थंड होऊन सांद्रीभवन होते आणि सह्याद्रीच्या पश्चिमेकडील कोकण व घाटमाथ्यावर मुसळधार 'प्रतिरोध पाऊस' पडतो; महाराष्ट्रातील ८५% पाऊस जून ते सप्टेंबर या काळात पडतो",
                                            titleEn: "Southwest Monsoon & Orographic Mechanism: Moisture-laden winds from Arabian Sea strike Sahyadri escarpment; Forced adiabatic cooling triggers heavy orographic rainfall on windward Konkan and Ghat tops; Contributes 85% of state's annual precipitation",
                                            chips: ["प्रतिरोध पाऊस (Orographic Rainfall)", "नैऋत्य मान्सून वारे (जून ते सप्टेंबर)", "सह्याद्री अडथळा", "८५% पाऊस मान्सूनपासून"]
                                        },
                                        {
                                            id: "st_gc_g08_01_02",
                                            titleMr: "सर्वाधिक पावसाची ठिकाणे: १) आंबोली (जि. सिंधुदुर्ग - सरासरी वार्षिक पर्जन्य सुमारे ७५० सेमी - महाराष्ट्रातील चेरापुंजी / सर्वाधिक पावसाचे ठिकाण); २) महाबळेश्वर (जि. सातारा - सुमारे ६०० सेमी); ३) माथेरान (रायगड - सुमारे ५०० सेमी); घाटमाथ्यावर पश्चिमेकडून पूर्वेकडे जाताना पावसाचे प्रमाण अत्यंत वेगाने कमी होते",
                                            titleEn: "Highest Rainfall Centers: 1) Amboli (Sindhudurg - ~750 cm average, wettest place in Maharashtra / Cherrapunji of MH); 2) Mahabaleshwar (Satara - ~600 cm); 3) Matheran (Raigad - ~500 cm); Rainfall drops sharply eastward past Ghat crests",
                                            chips: ["आंबोली (७५० सेमी सर्वाधिक पाऊस)", "महाराष्ट्राचे चेरापुंजी", "महाबळेश्वर ६०० सेमी", "माथेरान ५०० सेमी"]
                                        },
                                        {
                                            id: "st_gc_g08_01_03",
                                            titleMr: "पर्जन्यछायेचा पट्टा (Rain-Shadow Zone): वारे सह्याद्री ओलांडून पूर्वेकडे उतरताना खाली दाबामुळे तापतात, त्यांची बाष्पधारण क्षमता वाढते आणि पाऊस अचानक कमी होतो; सह्याद्रीच्या पूर्वेकडील ५० ते ७० किमीचा पट्टा 'पर्जन्यछायेचा प्रदेश' बनतो; अहमदनगर, सोलापूर, बीड, सांगली व साताऱ्याचा पूर्व भाग येथे वार्षिक ५० ते ६० सेमीपेक्षा कमी पाऊस पडतो; सातारा जिल्ह्यातील 'दहीवडी' व सोलापूर जिल्ह्यातील 'माळशिरस/अकलूज' हे सर्वात कमी पावसाचे भाग मानले जातात",
                                            titleEn: "Rain-Shadow Phenomenon: Descending air on leeward side warms adiabatically, increasing moisture capacity and suppressing precipitation; 50-70 km leeward belt receives <50-60 cm annual rain; Core districts: Ahmednagar, Solapur, Beed, East Sangli, East Satara (Dahiwadi, Malsiras recorded lowest)",
                                            chips: ["पर्जन्यछायेचा प्रदेश (Rain-Shadow)", "५० ते ६० सेमी कमी पाऊस", "अहमदनगर व सोलापूर", "दहीवडी सर्वात कमी पाऊस सातारा"]
                                        },
                                        {
                                            id: "st_gc_g08_01_04",
                                            titleMr: "महाराष्ट्रातील ऋतूचक्र व तापमान: १) उन्हाळा (मार्च ते मे - विदर्भात सर्वाधिक तापमान, चंद्रपूर व नागपूर ४५°C+); २) पावसाळा (जून ते सप्टेंबर); ३) हिवाळा (ऑक्टोबर ते फेब्रुवारी - निफाड नाशिक व महाबळेश्वर येथे सर्वात कमी तापमान); ऑक्टोबर हीट (October Heat - ऑक्टोबर महिन्यात पावसाळा संपल्यावर दमटपणा व उष्णतेमुळे होणारा असह्य उकाडा)",
                                            titleEn: "Seasonal Cycle & Extremes: Summer (March-May, highest heat in Vidarbha, Chandrapur/Nagpur 45°C+); Rainy (June-Sept); Winter (Oct-Feb, lowest temperatures at Niphad Nashik); October Heat (oppressive transition mugginess post-monsoon retreat)",
                                            chips: ["चंद्रपूर (उन्हाळ्यात उच्च तापमान)", "निफाड नाशिक (हिवाळ्यात नीचांकी तापमान)", "ऑक्टोबर हीट (October Heat)", "ऋतूचक्र"]
                                        }
                                    ],
                                    sources: [
                                        { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण ४: हवामान व पर्जन्य वितरण" },
                                        { book: "महाराष्ट्राचा भूगोल", standard: "प्रा. अनिरुद्ध", chapterRef: "प्रकरण ५: हवामान व ऋतू" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ९: महाराष्ट्रातील मृदा प्रकार: काळी रेगुर मृदा, जांभी मृदा व तांबडी-पिवळसर मृदा
                        // =========================================================================
                        {
                            id: "gc_geog_c09",
                            code: "CG09",
                            section: "D",
                            slug: "soil-types-characteristics-and-distribution-in-maharashtra",
                            nameMr: "महाराष्ट्रातील मृदा प्रकार: काळी रेगुर मृदा, जांभी मृदा व तांबडी-पिवळसर मृदा",
                            nameEn: "Soil Types of Maharashtra: Black Regur, Laterite, Alluvial & Red-Yellowish Soils",
                            name: "मृदा प्रकार व वैशिष्ट्ये",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 2,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_geog_c09",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_geog_c08",
                            nextChapterId: "gc_geog_c10",
                            metaDescriptionMr: "काळी कापसाची रेगुर मृदा (बेसाल्ट विदारण, टिटॅनिफेरस मॅग्नेटाईट, ओलावा टिकवून ठेवण्याची क्षमता, कापूस व ऊस), जांभी मृदा (दक्षिण कोकण, बॉक्साईट व लोहयुक्त), गाळाची मृदा, आणि मृदा धूप.",
                            metaDescriptionEn: "Soil classification: Black Regur Soil (Basalt weathering, titaniferous magnetite, moisture retention, cotton belt), Laterite Soil (High rainfall South Konkan, leaching, bauxite rich), Alluvial, and soil erosion.",
                            notesJsonPath: "/data/notes/group_c/prelims/geography/c09_soils_distribution.json",
                            quizTag: "gc_geog_soils_01",
                            tags: ["Soil Types", "Black Regur Soil", "Titaniferous Magnetite", "Laterite Soil Konkan", "Soil Erosion", "High-Weightage"],
                            searchKeywords: ["soil types in maharashtra black regur cotton soil basalt", "titaniferous magnetite moisture retention", "laterite soil south konkan ratnagiri sindhudurg leaching", "alluvial coastal river valleys", "काळी रेगुर मृदा बेसाल्ट कापूस", "टिटॅनिफेरस मॅग्नेटाईट", "जांभी मृदा दक्षिण कोकण", "मृदा धूप"],
                            topics: [
                                {
                                    id: "top_gc_g09_01",
                                    nameMr: "महाराष्ट्रातील प्रमुख मृदा प्रकार, रासायनिक घटक आणि पीक वितरण",
                                    nameEn: "Soil Taxonomy, Chemical Profiles, Leaching Processes & Agronomic Cropping",
                                    subtopics: [
                                        {
                                            id: "st_gc_g09_01_01",
                                            titleMr: "काळी रेगुर मृदा (Black Cotton Soil): बेसाल्ट खडकाच्या विदारणातून निर्मिती; महाराष्ट्रातील सुमारे ७५-८०% भूभाग व्यापते; काळा रंग 'टिटॅनिफेरस मॅग्नेटाईट' (Titaniferous Magnetite) या लोह घटकामुळे येतो; वैशिष्ट्ये: ओलावा टिकवून ठेवण्याची प्रचंड क्षमता (High Moisture Retention), सुकल्यावर मोठ्या भेगा पडतात (Self-ploughing); चुनखडी, पोटॅश, मॅग्नेशियमचे प्रमाण जास्त; नायट्रोजन, फॉस्फरस व सेंद्रिय द्रव्यांची कमतरता; कापूस, ऊस, ज्वारी, सोयाबीन पिकांसाठी अत्यंत सुपीक",
                                            titleEn: "Black Regur Soil: Formed via weathering of basalt lava; Covers 75-80% of state; Black hue caused by Titaniferous Magnetite; High clay content and moisture retention; Develops deep cracks upon drying; Rich in lime, potash, magnesium; Deficient in nitrogen, phosphorus; Ideal for cotton, sugarcane, jowar",
                                            chips: ["काळी रेगुर मृदा (७५-८०% क्षेत्र)", "टिटॅनिफेरस मॅग्नेटाईट (काळा रंग)", "ओलावा टिकवणे", "कापसाची काळी माती", "नायट्रोजन कमतरता"]
                                        },
                                        {
                                            id: "st_gc_g09_01_02",
                                            titleMr: "जांभी मृदा (Laterite Soil): २०० सेमीपेक्षा जास्त पाऊस व उष्ण हवामानाच्या पट्ट्यात निर्मिती; अपक्षालन / लीचिंग (Leaching) प्रक्रियेमुळे सिलिका वाहून जाऊन लोह व ॲल्युमिनियमचे संयुगे पृष्ठभागावर उरतात; रंग तांबूस-तपकिरी; आढळ: दक्षिण कोकण (रत्नागिरी, सिंधुदुर्ग) आणि कोल्हापूर-सातारा घाटमाथा; सेंद्रिय द्रव्ये, नायट्रोजन व पोटॅशची कमतरता; काजू, आंबा (हापूस), सुपारी व नारळ बागायतीसाठी उपयुक्त",
                                            titleEn: "Laterite Soil: Developed in heavy rainfall (>200 cm) tropical zones via intense leaching of silica; Rich in Iron and Aluminium sesquioxides; Found in South Konkan (Ratnagiri, Sindhudurg) and Mahabaleshwar plateau; Acidic and low fertility; Famed for cashew, Alphonso mango, and betel nut horticulture",
                                            chips: ["जांभी मृदा (Laterite Soil)", "लीचिंग / अपक्षालन प्रक्रिया", "दक्षिण कोकण (रत्नागिरी, सिंधुदुर्ग)", "हापूस आंबा व काजू बागायत"]
                                        },
                                        {
                                            id: "st_gc_g09_01_03",
                                            titleMr: "तांबडी-पिवळसर व गाळाची मृदा: १) तांबडी-पिवळसर मृदा: पूर्व विदर्भातील प्राचीन आर्कियन व धारवाड खडकांच्या विदारणातून (गोंदिया, भंडारा, गडचिरोली, चंद्रपूर); लोहाचे प्रमाण जास्त असल्याने तांबडा रंग; भात (तांदूळ) शेतीसाठी अत्यंत उपयुक्त; २) गाळाची मृदा (Alluvial Soil): कोकणातील नद्यांच्या मुखाशी व तापी-गोदावरीच्या पूर मैदानात; अत्यंत सुपीक व बागायती पिकांसाठी उपयुक्त",
                                            titleEn: "Red-Yellow & Alluvial Soils: Red-Yellow derived from ancient Archaean/Dharwar crystalline rocks in East Vidarbha (Gondia, Bhandara, Gadchiroli); High iron content, acidic, ideal for paddy/rice cultivation; Alluvial soils found along coastal river mouths and Tapi floodplains",
                                            chips: ["तांबडी मृदा (आर्कियन खडक पूर्व विदर्भ)", "भात शेतीसाठी उपयुक्त (गोंदिया, गडचिरोली)", "गाळाची सुपीक मृदा (किनारपट्टी)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण ६: महाराष्ट्रातील मृदा संपत्ती" },
                                        { book: "महाराष्ट्राचा भूगोल", standard: "प्रा. अनिरुद्ध", chapterRef: "प्रकरण ६: मृदा व कृषी" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १०: नैसर्गिक वनस्पती: वनांचे ५ प्रकार आणि प्रमुख वृक्ष प्रजाती
                        // =========================================================================
                        {
                            id: "gc_geog_c10",
                            code: "CG10",
                            section: "D",
                            slug: "natural-vegetation-forest-types-and-timber-species-mh",
                            nameMr: "नैसर्गिक वनस्पती: वनांचे ५ प्रकार आणि प्रमुख वृक्ष प्रजाती",
                            nameEn: "Natural Vegetation: 5 Major Forest Types & Commercial Timber Species in Maharashtra",
                            name: "वने व वृक्ष संपदा",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 2,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_geog_c10",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_geog_c09",
                            nextChapterId: "gc_geog_c11",
                            metaDescriptionMr: "उष्णकटिबंधीय सदाहरित वने (महाबळेश्वर, आंबोली), निम-सदाहरित, आर्द्र पानझडी (सागवान, विदर्भ), शुष्क पानझडी, आणि काटेरी झुडपी वने (पर्जन्यछाया पट्टा - बाभळ, बोर, निवडुंग).",
                            metaDescriptionEn: "5 Forest Types of Maharashtra: Tropical Semi-Evergreen, Moist Deciduous (Teak in Vidarbha), Dry Deciduous, Tropical Thorn Scrub (Rain-shadow: Acacia, Babul), and Mangroves along Konkan creeks.",
                            notesJsonPath: "/data/notes/group_c/prelims/geography/c10_forests_vegetation.json",
                            quizTag: "gc_geog_forests_01",
                            tags: ["Natural Vegetation", "Forest Types 5 Classes", "Moist Deciduous Teak", "Thorn Forest Rain Shadow", "Mangroves"],
                            searchKeywords: ["forest types in maharashtra tropical evergreen moist deciduous", "teak sagwan forests vidarbha allapalli", "thorn scrub forest rain shadow babul", "mangrove tidal forests konkan creek", "महाराष्ट्रातील वने ५ प्रकार", "पानझडी वने सागवान अल्लापल्ली", "काटेरी वने बाभळ", "खारफुटी वने कोकण"],
                            topics: [
                                {
                                    id: "top_gc_g10_01",
                                    nameMr: "महाराष्ट्रातील ५ प्रमुख वनप्रकार, वृक्षांच्या जाती आणि व्यापारी महत्त्व",
                                    nameEn: "5 Forest Classification Types, Floral Species & Commercial Forestry",
                                    subtopics: [
                                        {
                                            id: "st_gc_g10_01_01",
                                            titleMr: "उष्णकटिबंधीय सदाहरित व निम-सदाहरित वने: २०० सेमीपेक्षा जास्त पावसाच्या भागात; सदाहरित: पाने एकाच वेळी गळत नाहीत; आढळ: आंबोली, महाबळेश्वर, माथेरान, राधानगरी; वृक्ष: जांभूळ, फणस, नागचंपा, पांढरा सिदार, बेहेडा, आंबा; निम-सदाहरित: कोकण किनारपट्टीच्या लगत व सह्याद्रीच्या उतारावर; वृक्ष: किंजळ, ऐन, कदम, शिसम",
                                            titleEn: "Tropical Evergreen & Semi-Evergreen: High rainfall (>200 cm); Dense foliage without synchronized leaf-fall; Found in Amboli, Mahabaleshwar, Matheran; Species: Jamun, Jackfruit, White Cedar, Mango; Semi-evergreen belt on lower Sahyadri slopes with Kinjal, Ain, Kadam, Shisham",
                                            chips: ["सदाहरित वने (>२०० सेमी पाऊस)", "आंबोली, महाबळेश्वर", "जांभूळ, फणस, बेहेडा", "निम-सदाहरित वने"]
                                        },
                                        {
                                            id: "st_gc_g10_01_02",
                                            titleMr: "उष्णकटिबंधीय आर्द्र व शुष्क पानझडी वने (Deciduous Forests): १) आर्द्र पानझडी (पाऊस १०० ते १५० सेमी): उन्हाळ्यात बाष्पीभवन रोखण्यासाठी पाने गळतात; पूर्व विदर्भ (गडचिरोली, चंद्रपूर, भंडारा - अल्लापल्लीची जंगले); मुख्य वृक्ष: 'सागवान' (Teak - उत्कृष्ट इमारती लाकूड), बांबू, हळदू, बिबळा, तेंदू; २) शुष्क पानझडी (पाऊस ८० ते १०० सेमी): सातपुडा पर्वत व मराठवाड्याचा काही भाग; वृक्ष: धावडा, खैर, पळस, सालई",
                                            titleEn: "Tropical Moist & Dry Deciduous Forests: Moist Deciduous (100-150 cm rain) in East Vidarbha (Chandrapur, Gadchiroli - famed Allapalli Teak forests), Bamboo, Tendu; Dry Deciduous (80-100 cm rain) across Satpuras and Marathwada yielding Dhavda, Khair, Palas",
                                            chips: ["आर्द्र पानझडी वने (विदर्भ)", "अल्लापल्लीची जंगले (सागवान Teak)", "तेंदू व बांबू", "शुष्क पानझडी वने (पळस, खैर)"]
                                        },
                                        {
                                            id: "st_gc_g10_01_03",
                                            titleMr: "काटेरी झुडपी वने आणि खारफुटी वने: १) उष्णकटिबंधीय काटेरी वने: पर्जन्यछायेचा पट्टा (अहमदनगर, सोलापूर, बीड, सांगली ५० सेमीपेक्षा कमी पाऊस); पाने लहान, काटेरी, मुळे खोल; वृक्ष: बाभळ, बोर, निवडुंग, हिवर, खैर; २) खारफुटी वने (Mangrove Forests / वेलांचली वने): कोकणातील नद्यांच्या मुखाशी खाड्यांच्या दलदलीत; वृक्ष: सुंदरी, तिवर, कांदळ (सुनामी व सागरी धूप रोखतात)",
                                            titleEn: "Thorn Scrub & Mangrove Forests: Thorn forests in rain-shadow core (<50 cm rain: Ahmednagar, Solapur) featuring Babul, Ber, Cactus, Hiwar; Mangroves (Tidal/Littoral) in Konkan estuarine mudflats (Tiwar, Kandal) protecting coastlines from storm surges",
                                            chips: ["काटेरी वने (पर्जन्यछाया पट्टा बाभळ, बोर)", "खारफुटी वने / तिवर (कोकण खाड्या)", "किनारपट्टी धूप रक्षण"]
                                        }
                                    ],
                                    sources: [
                                        { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण ५: वने व वनस्पती संपत्ती" },
                                        { book: "महाराष्ट्राचा भूगोल", standard: "प्रा. अनिरुद्ध", chapterRef: "प्रकरण ७: वन संपदा" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ११: वन्यजीव संवर्धन: महाराष्ट्रातील ६ राष्ट्रीय उद्याने आणि ६ व्याघ्र प्रकल्प
                        // =========================================================================
                        {
                            id: "gc_geog_c11",
                            code: "CG11",
                            section: "D",
                            slug: "wildlife-sanctuaries-national-parks-and-tiger-reserves-mh",
                            nameMr: "वन्यजीव संवर्धन: महाराष्ट्रातील ६ राष्ट्रीय उद्याने आणि ६ व्याघ्र प्रकल्प",
                            nameEn: "Wildlife Conservation: 6 National Parks & 6 Tiger Reserves in Maharashtra",
                            name: "राष्ट्रीय उद्याने व व्याघ्र प्रकल्प",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_geog_c11",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_geog_c10",
                            nextChapterId: "gc_geog_c12",
                            metaDescriptionMr: "६ राष्ट्रीय उद्याने (ताडोबा, नवेगाव, पेंच, गुगामल, संजय गांधी, चांदोली), ६ व्याघ्र प्रकल्प (ताडोबा-अंधारी, मेळघाट - पहिला १९७३, पेंच, सह्याद्री, नवेगाव-नागझिरा, बोर - देशातील सर्वात लहान), आणि प्रमुख पक्षी/वन्यजीव अभयारण्ये.",
                            metaDescriptionEn: "6 National Parks (Tadoba, Navegaon, Pench, Gugamal, Sanjay Gandhi Borivali, Chandoli), 6 Tiger Reserves (Melghat 1st in 1973, Tadoba, Pench, Sahyadri, Bor - smallest in India), and key wildlife/bird sanctuaries.",
                            notesJsonPath: "/data/notes/group_c/prelims/geography/c11_wildlife_tiger_reserves.json",
                            quizTag: "gc_geog_wildlife_01",
                            tags: ["National Parks 6", "Tiger Reserves 6", "Tadoba Chandoli", "Melghat First 1973", "Bor Smallest Tiger Reserve", "High-Weightage"],
                            searchKeywords: ["6 national parks in maharashtra tadoba navegaon pench gugamal sanjay gandhi chandoli", "6 tiger reserves melghat 1973 bor smallest tiger reserve", "bhimashankar shekru giant squirrel sanctuary", "karnala bird sanctuary", "६ राष्ट्रीय उद्याने ताडोबा चांदोली", "६ व्याघ्र प्रकल्प मेळघाट पेंच बोर", "भीमाशंकर शेकरू खार", "कर्नाळा पक्षी अभयारण्य"],
                            topics: [
                                {
                                    id: "top_gc_g11_01",
                                    nameMr: "महाराष्ट्रातील ६ राष्ट्रीय उद्याने, ६ व्याघ्र प्रकल्प आणि विशेष अभयारण्ये",
                                    nameEn: "Six National Parks, Six Project Tiger Reserves & Niche Wildlife Sanctuaries",
                                    subtopics: [
                                        {
                                            id: "st_gc_g11_01_01",
                                            titleMr: "महाराष्ट्रातील ६ राष्ट्रीय उद्याने (स्थापनेनुसार क्रम): १) ताडोबा राष्ट्रीय उद्यान (१९५५ - चंद्रपूर, महाराष्ट्रातील पहिले राष्ट्रीय उद्यान); २) पेंच / पंडित जवाहरलाल नेहरू राष्ट्रीय उद्यान (१९७५ - नागपूर); ३) नवेगाव बांध राष्ट्रीय उद्यान (१९७५ - गोंदिया); ४) गुगामल राष्ट्रीय उद्यान (१९८७ - अमरावती, मेळघाट पट्टा); ५) संजय गांधी / बोरीवली राष्ट्रीय उद्यान (१९९६ - मुंबई उपनगर/ठाणे, कान्हेरी लेणी); ६) चांदोली राष्ट्रीय उद्यान (२००४ - सांगली, सातारा, कोल्हापूर, रत्नागिरी - सर्वात शेवटी घोषित)",
                                            titleEn: "6 National Parks in Maharashtra: 1) Tadoba (1955 - Chandrapur, 1st in MH), 2) Pench/Jawaharlal Nehru (1975 - Nagpur), 3) Navegaon (1975 - Gondia), 4) Gugamal (1987 - Amravati, Melghat), 5) Sanjay Gandhi/Borivali (1996 - Mumbai/Thane, Kanheri Caves), 6) Chandoli (2004 - Sangli/Satara/Kolhapur/Ratnagiri, newest)",
                                            chips: ["ताडोबा (पहिले राष्ट्रीय उद्यान १९५५ चंद्रपूर)", "चांदोली (नवीनतम २००४)", "संजय गांधी (बोरीवली कान्हेरी)", "गुगामल (अमरावती)", "नवेगाव (गोंदिया)", "पेंच (नागपूर)"]
                                        },
                                        {
                                            id: "st_gc_g11_01_02",
                                            titleMr: "महाराष्ट्रातील ६ व्याघ्र प्रकल्प (Project Tiger): १) मेळघाट व्याघ्र प्रकल्प (अमरावती - १९७३/७४, महाराष्ट्रातील पहिला व्याघ्र प्रकल्प); २) ताडोबा-अंधारी व्याघ्र प्रकल्प (चंद्रपूर - १९९५); ३) पेंच व्याघ्र प्रकल्प (नागपूर - १९९९); ४) सह्याद्री व्याघ्र प्रकल्प (कोल्हापूर, सातारा, सांगली, रत्नागिरी - २००८, पश्चिम महाराष्ट्रातील एकमेव); ५) नवेगाव-नागझिरा व्याघ्र प्रकल्प (गोंदिया, भंडारा - २०१३); ६) बोर व्याघ्र प्रकल्प (वर्धा - २०१४, भारतातील सर्वात लहान व्याघ्र प्रकल्प - क्षेत्रफळ १३८ चौ.किमी)",
                                            titleEn: "6 Tiger Reserves under Project Tiger: 1) Melghat (Amravati - 1973/74, 1st in MH), 2) Tadoba-Andhari (Chandrapur - 1995), 3) Pench (Nagpur - 1999), 4) Sahyadri (2008 - only tiger reserve in Western Ghats MH), 5) Navegaon-Nagzira (2013), 6) Bor (Wardha - 2014, smallest tiger reserve in India with 138 sq km area)",
                                            chips: ["मेळघाट (पहिला व्याघ्र प्रकल्प १९७३)", "बोर (भारतातील सर्वात लहान वर्धा)", "सह्याद्री व्याघ्र प्रकल्प", "ताडोबा-अंधारी", "नवेगाव-नागझिरा"]
                                        },
                                        {
                                            id: "st_gc_g11_01_03",
                                            titleMr: "विशेष वन्यजीव व पक्षी अभयारण्ये: १) भीमाशंकर अभयारण्य (पुणे - राज्य प्राणी 'शेकरू' / उडणारी मोठी खार); २) राधानगरी अभयारण्य (कोल्हापूर - 'गवे' / Bison साठी प्रसिद्ध, पहिले अभयारण्य १९५८); ३) मालढोक अभयारण्य (नान्नज, सोलापूर/अहमदनगर - ग्रेट इंडियन बस्टर्ड); ४) कर्नाळा पक्षी अभयारण्य (रायगड); ५) जायकवाडी पक्षी अभयारण्य (छत्रपती संभाजीनगर); ६) नांदूर मध्यमेश्वर (नाशिक - महाराष्ट्राचे भरतपूर, रामसर स्थळ); ७) लोणार अभयारण्य (बुलढाणा - उल्का सरोवर, रामसर स्थळ)",
                                            titleEn: "Special Wildlife & Bird Sanctuaries: Bhimashankar (Pune - State Animal 'Shekru' Giant Squirrel), Radhanagari (Kolhapur - 1st sanctuary in MH 1958 for Bison/Gava), Great Indian Bustard Sanctuary (Nannaj, Solapur), Karnala (Raigad), Nandur Madhmeshwar (Nashik - Bharatpur of MH, Ramsar Site), Lonar Lake (Buldhana Ramsar Site)",
                                            chips: ["भीमाशंकर (शेकरू खार राज्य प्राणी)", "राधानगरी (गवे कोल्हापूर १९५८)", "मालढोक पक्षी (नान्नज सोलापूर)", "नांदूर मध्यमेश्वर (रामसर स्थळ नाशिक)", "लोणार (उल्का सरोवर)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण ५: वन्यजीव व अभयारण्ये" },
                                        { book: "पर्यावरण व परिस्थितीकी", standard: "तुषार घोरपडे", chapterRef: "महाराष्ट्रातील संरक्षित क्षेत्रे" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १२: खनिज संसाधने: लोहखनिज, बॉक्साईट, मँगनीज, दगडी कोळसा व चुनखडक
                        // =========================================================================
                        {
                            id: "gc_geog_c12",
                            code: "CG12",
                            section: "E",
                            slug: "mineral-resources-and-spatial-distribution-in-maharashtra",
                            nameMr: "खनिज संसाधने: लोहखनिज, बॉक्साईट, मँगनीज, दगडी कोळसा व चुनखडक",
                            nameEn: "Mineral Resources: Iron Ore, Bauxite, Manganese, Coal & Limestone Belts",
                            name: "खनिज संपत्ती व जिल्हे",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_geog_c12",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_geog_c11",
                            nextChapterId: "gc_geog_c13",
                            metaDescriptionMr: "महाराष्ट्रातील खनिज पट्टे (पूर्व विदर्भ व दक्षिण कोकण): लोहखनिज (गडचिरोली - सुरजागड, सिंधुदुर्ग - रेडी बंदर), मँगनीज (भंडारा, नागपूर), दगडी कोळसा (चंद्रपूर - बल्लारपूर), बॉक्साईट (कोल्हापूर, रत्नागिरी), आणि चुनखडक (यवतमाळ).",
                            metaDescriptionEn: "Spatial distribution of minerals: Iron Ore (Gadchiroli Surjagarh, Sindhudurg Redi port), Manganese (Bhandara, Nagpur), Coal (Chandrapur Ballarpur Gondwana belt), Bauxite (Kolhapur, Ratnagiri aluminium raw material), Limestone in Yavatmal.",
                            notesJsonPath: "/data/notes/group_c/prelims/geography/c12_minerals_distribution.json",
                            quizTag: "gc_geog_minerals_01",
                            tags: ["Minerals Distribution", "Iron Ore Surjagarh Redi", "Manganese Bhandara", "Coal Ballarpur Chandrapur", "Bauxite Kolhapur", "High-Weightage"],
                            searchKeywords: ["mineral resources in maharashtra district distribution", "iron ore gadchiroli surjagarh sindhudurg redi port", "manganese deposits bhandara nagpur", "coal mines chandrapur ballarpur wani", "bauxite kolhapur aluminium", "खनिज संपत्ती जिल्हे महाराष्ट्र", "लोहखनिज सुरजागड रेडी", "मँगनीज भंडारा नागपूर", "दगडी कोळसा बल्लारपूर", "बॉक्साईट कोल्हापूर"],
                            topics: [
                                {
                                    id: "top_gc_g12_01",
                                    nameMr: "महाराष्ट्रातील प्रमुख खनिज पट्टे, खाणी आणि जिल्हावार वितरण",
                                    nameEn: "Geological Mineral Belts, Mining Centers & District Distribution",
                                    subtopics: [
                                        {
                                            id: "st_gc_g12_01_01",
                                            titleMr: "खनिजांचे प्रादेशिक वितरण: महाराष्ट्राच्या एकूण क्षेत्रफळापैकी केवळ १२ ते १५% भागात खनिजे आढळतात; प्रमुख दोन पट्टे: १) पूर्व विदर्भ (आर्कियन, धारवाड व गोंडवाना खडक - चंद्रपूर, गडचिरोली, नागपूर, भंडारा, यवतमाळ); २) दक्षिण कोकण व दक्षिण महाराष्ट्र (जांभा खडक - सिंधुदुर्ग, रत्नागिरी, कोल्हापूर); मध्य महाराष्ट्रात बेसाल्टमुळे खनिजांचा पूर्ण अभाव",
                                            titleEn: "Regional Mineral Belts: Only 12-15% of Maharashtra bears economic minerals, concentrated in two distinct zones: East Vidarbha (Archaean, Dharwar, Gondwana rocks) and South Konkan (Laterite terrain); Central basaltic plateau is devoid of metallic minerals",
                                            chips: ["पूर्व विदर्भ खनिज पट्टा", "दक्षिण कोकण पट्टा", "केवळ १२-१५% भागात खनिजे", "मध्य पठारावर खनिजांचा अभाव"]
                                        },
                                        {
                                            id: "st_gc_g12_01_02",
                                            titleMr: "लोहखनिज व मँगनीज: १) लोहखनिज (Iron Ore): हेमेटाईट व मॅग्नेटाईट प्रकार; गडचिरोली (सुरजागड, देचली, दामकोड), चंद्रपूर आणि सिंधुदुर्ग (रेडी बंदर - लोहखनिज जपानला निर्यात होते); २) मँगनीज (Manganese): पायरोलुसाईट व सायलोमेलीन; देशातील एकूण साठ्यापैकी मोठा वाटा; भंडारा (तुमसूर, चिकला) आणि नागपूर (रामटेक, सावनेर, मनसर); MOIL (मँगनीज ओर इंडिया लिमिटेड - नागपूर मुख्यालय)",
                                            titleEn: "Iron Ore & Manganese: Iron Ore (Haematite grade in Gadchiroli's Surjagarh, Chandrapur, and Sindhudurg Redi port exporting to Japan); Manganese (Pyrolusite/Psilomelane in Bhandara Tumsar/Chikla and Nagpur Ramtek/Mansar; MOIL HQ at Nagpur)",
                                            chips: ["लोहखनिज (सुरजागड गडचिरोली)", "रेडी बंदर (सिंधुदुर्ग जपान निर्यात)", "मँगनीज (भंडारा, नागपूर)", "MOIL नागपूर मुख्यालय"]
                                        },
                                        {
                                            id: "st_gc_g12_01_03",
                                            titleMr: "दगडी कोळसा, बॉक्साईट व चुनखडक: १) दगडी कोळसा (Coal): बिट्युमिनस दर्जाचा; गोंडवाना खडक प्रणाली; चंद्रपूर (बल्लारपूर, घुग्गुस, माजरी), यवतमाळ (वणी), नागपूर (उमरेड, कामठी); २) बॉक्साईट (Bauxite): ॲल्युमिनियमचे प्रमुख धातुक; जांभा खडकात आढळ; कोल्हापूर (राधानगरी, शाहूवाडी, चंदगड), रत्नागिरी, रायगड; बेळगाव व जयगड ॲल्युमिनियम प्रकल्पांना पुरवठा; ३) चुनखडक (Limestone): सिमेंट उद्योगासाठी कच्चा माल; यवतमाळ (राजूर) आणि चंद्रपूर",
                                            titleEn: "Coal, Bauxite & Limestone: Coal (Bituminous grade in Gondwana rocks: Chandrapur Ballarpur/Ghugus, Yavatmal Wani, Nagpur Umred); Bauxite (Aluminium ore in laterite: Kolhapur Radhanagari/Chandgad, Ratnagiri feeding Belgaum smelter); Limestone in Yavatmal Rajur & Chandrapur for cement industry",
                                            chips: ["दगडी कोळसा (बल्लारपूर चंद्रपूर)", "गोंडवाना खडक", "बॉक्साईट (कोल्हापूर, रत्नागिरी)", "चुनखडक (यवतमाळ सिमेंट उद्योग)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण ७: खनिज संपत्ती" },
                                        { book: "भूविज्ञान व खनिकर्म संचालनालय", standard: "महाराष्ट्र शासन अहवाल", chapterRef: "खनिज साठे व उत्पादन" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १३: ऊर्जा संसाधने: औष्णिक (Thermal), जलविद्युत (Hydro) व अणुऊर्जा (Nuclear) प्रकल्प
                        // =========================================================================
                        {
                            id: "gc_geog_c13",
                            code: "CG13",
                            section: "E",
                            slug: "energy-resources-thermal-hydroelectric-and-nuclear-projects-mh",
                            nameMr: "ऊर्जा संसाधने: औष्णिक (Thermal), जलविद्युत (Hydro) व अणुऊर्जा (Nuclear) प्रकल्प",
                            nameEn: "Energy Resources: Thermal Power Plants, Hydro Projects & Tarapur Nuclear",
                            name: "ऊर्जा संसाधने व वीज निर्मिती",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 2,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_geog_c13",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_geog_c12",
                            nextChapterId: "gc_geog_c14",
                            metaDescriptionMr: "औष्णिक वीज केंद्रे (चंद्रपूर - सर्वात मोठे, कोराडी, खापरखेडा, पारस, परळी वैजनाथ, एकलहरे), जलविद्युत (कोयना, खोपोली - पहिले १९१५), अणुऊर्जा (तारापूर - देशातील पहिले १९६९), आणि पवन ऊर्जा (चाळकेवाडी, सातारा).",
                            metaDescriptionEn: "Energy installations: Thermal Power Plants (Chandrapur largest, Koradi, Khaparkheda, Paras, Parli), Hydro (Koyna, Khopoli 1915), Nuclear (Tarapur 1969 1st in India), and Wind energy (Chalkewadi Satara).",
                            notesJsonPath: "/data/notes/group_c/prelims/geography/c13_energy_power_projects.json",
                            quizTag: "gc_geog_energy_01",
                            tags: ["Power Generation", "Thermal Power Chandrapur", "Hydroelectric Koyna Khopoli", "Tarapur Nuclear 1969", "Wind Energy Chalkewadi"],
                            searchKeywords: ["thermal power plants in maharashtra chandrapur koradi khaparkheda parli", "hydroelectric projects koyna khopoli 1915", "tarapur atomic power station 1969 palghar", "wind energy chalkewadi satara", "औष्णिक वीज केंद्रे चंद्रपूर कोराडी", "कोयना जलविद्युत", "तारापूर अणुऊर्जा केंद्र १९६९", "पवन ऊर्जा चाळकेवाडी"],
                            topics: [
                                {
                                    id: "top_gc_g13_01",
                                    nameMr: "महाराष्ट्रातील वीज निर्मिती प्रकल्प: औष्णिक, जल, अणू व पवन ऊर्जा",
                                    nameEn: "Power Generation Matrix: Thermal Stations, Hydro Dams, Nuclear & Wind Farms",
                                    subtopics: [
                                        {
                                            id: "st_gc_g13_01_01",
                                            titleMr: "औष्णिक वीज केंद्रे (Thermal Power - कोळशावर आधारित): १) चंद्रपूर (चंद्रपूर सुपर थर्मल - महाराष्ट्रातील सर्वात मोठे); २) नागपूर: कोराडी व खापरखेडा; ३) अकोला: पारस (सर्वात जुने); ४) बीड: परळी वैजनाथ; ५) नाशिक: एकलहरे; ६) जळगाव: भुसावळ (दीपनगर); ७) ठाणे/मुंबई: तुर्भे (ट्रॉम्बे - टाटा); महाजेनको (MAHAGENCO) द्वारे व्यवस्थापन",
                                            titleEn: "Thermal Power Stations: Chandrapur (Largest in state), Koradi & Khaparkheda (Nagpur), Paras (Akola - oldest), Parli Vaijnath (Beed), Eklahare (Nashik), Bhusawal/Deepnagar (Jalgaon), Trombay (Tata Power in Mumbai)",
                                            chips: ["चंद्रपूर सुपर थर्मल (सर्वात मोठे)", "कोराडी व खापरखेडा (नागपूर)", "पारस (अकोला)", "परळी वैजनाथ (बीड)", "एकलहरे (नाशिक)"]
                                        },
                                        {
                                            id: "st_gc_g13_01_02",
                                            titleMr: "जलविद्युत प्रकल्प (Hydroelectric Power): १) खोपोली (रायगड - १९१५ मध्ये टाटा समूहाने सुरू केलेले भारतातील पहिले जलविद्युत केंद्र); २) कोयना जलविद्युत प्रकल्प (सातारा - 'महाराष्ट्राची भाग्यलक्ष्मी', १९६० MW क्षमता, शिवसागर जलाशय, लेक टॅपिंग तंत्र); ३) इतर प्रकल्प: वैतरणा (नाशिक), भाटघर (पुणे), तिलारी (कोल्हापूर), घाटघर (अहमदनगर - पंप स्टोरेज प्रकल्प)",
                                            titleEn: "Hydroelectric Projects: Khopoli (Raigad - 1915 by Tatas, India's 1st commercial hydro station); Koyna Hydroelectric Project (Satara - 1960 MW, 'Lifeline of Maharashtra', Shivsagar, Lake Tapping); Ghatghar (Ahmednagar Pumped Storage)",
                                            chips: ["कोयना जलविद्युत (महाराष्ट्राची भाग्यलक्ष्मी)", "खोपोली (पहिले जलविद्युत केंद्र १९१५)", "घाटघर पंप स्टोरेज", "तिलारी कोल्हापूर"]
                                        },
                                        {
                                            id: "st_gc_g13_01_03",
                                            titleMr: "अणुऊर्जा व अपारंपरिक ऊर्जा: १) तारापूर अणुऊर्जा केंद्र (पालघर - अमेरिकेच्या सहकार्याने ऑक्टोबर १९६९ मध्ये सुरू झालेले भारतातील पहिले अणुऊर्जा केंद्र); २) जैतापूर अणू प्रकल्प (रत्नागिरी - फ्रान्सच्या सहकार्याने प्रस्तावित); ३) पवन ऊर्जा: चाळकेवाडी व ठोसेघर (सातारा), जामगोडे (धुळे); ४) सौर ऊर्जा: साक्री (धुळे) सौर प्रकल्प",
                                            titleEn: "Nuclear & Renewable Energy: Tarapur Atomic Power Station (Palghar - commissioned Oct 1969 with US aid, 1st nuclear plant in India); Jaitapur Nuclear Project (Ratnagiri - proposed with French tech); Wind energy hubs at Chalkewadi (Satara) and Sakri Solar (Dhule)",
                                            chips: ["तारापूर अणुऊर्जा केंद्र (पहिले १९६९)", "जैतापूर अणू प्रकल्प (रत्नागिरी प्रस्तावित)", "चाळकेवाडी पवन ऊर्जा (सातारा)", "साक्री सौर प्रकल्प (धुळे)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण ७: ऊर्जा साधने" },
                                        { book: "महाजेनको अहवाल", standard: "महाराष्ट्र शासन", chapterRef: "वीज निर्मिती आकडेवारी" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १४: महाराष्ट्रातील प्रमुख उद्योग: साखर उद्योग, सुती कापड, ऑटोमोबाईल व IT हब
                        // =========================================================================
                        {
                            id: "gc_geog_c14",
                            code: "CG14",
                            section: "E",
                            slug: "major-industries-sugar-textile-automobile-and-it-hubs",
                            nameMr: "महाराष्ट्रातील प्रमुख उद्योग: साखर उद्योग, सुती कापड, ऑटोमोबाईल व IT हब",
                            nameEn: "Major Industries: Sugar Mills, Cotton Textiles, Automobile Corridors & IT Hubs",
                            name: "प्रमुख उद्योगधंदे व औद्योगिक पट्टे",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 2,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_geog_c14",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_geog_c13",
                            nextChapterId: "gc_geog_c15",
                            metaDescriptionMr: "सुती कापड उद्योग (मुंबई - कापसाचे मँचेस्टर / कॉटनोपोलिस), सहकारी साखर कारखानदारी (पहिला सहकारी कारखाना प्रवरानगर १९४९ विखे पाटील), ऑटोमोबाईल (पुणे, चाकण, पिंपरी-चिंचवड), आणि IT हब (हिंजवडी).",
                            metaDescriptionEn: "Industrial concentrations: Cotton textile ('Cottonopolis' Mumbai), Cooperative Sugar Mills (1st at Pravaranagar 1949 by Vikhe Patil), Automobile corridor (Chakan, Pune), and IT software parks (Hinjawadi).",
                            notesJsonPath: "/data/notes/group_c/prelims/geography/c14_major_industries.json",
                            quizTag: "gc_geog_industry_01",
                            tags: ["Major Industries", "Cottonopolis Mumbai", "Cooperative Sugar Pravaranagar 1949", "Automobile Chakan Pune", "Hinjawadi IT"],
                            searchKeywords: ["cotton textile industry mumbai cottonopolis manchester", "sugar industry first cooperative pravaranagar 1949 vikhe patil", "automobile corridor pune chakan pimpri", "hinjawadi it software park rajiv gandhi", "सुती कापड उद्योग मुंबई कॉटनोपोलिस", "पहिला सहकारी साखर कारखाना प्रवरा १९४९", "ऑटोमोबाईल चाकण पुणे", "हिंजवडी IT पार्क"],
                            topics: [
                                {
                                    id: "top_gc_g14_01",
                                    nameMr: "पारंपारिक व आधुनिक उद्योग: कापड, साखर, ऑटोमोबाईल आणि आयटी क्षेत्र",
                                    nameEn: "Traditional Agro-Industries, Automobile Belts & Knowledge Economy Hubs",
                                    subtopics: [
                                        {
                                            id: "st_gc_g14_01_01",
                                            titleMr: "सुती कापड व साखर उद्योग: १) सुती कापड उद्योग: १८५४ मध्ये कावसजी दावर यांनी मुंबईत पहिली आधुनिक कापड गिरणी (बॉम्बे स्पिनिंग अँड विव्हिंग कंपनी) सुरू केली; मुंबईला 'भारताचे मँचेस्टर' किंवा 'कॉटनोपोलिस' (Cottonopolis) म्हणतात; सोलापूर (चादरी), इचलकरंजी (महाराष्ट्राचे मँचेस्टर); २) साखर उद्योग: पहिला सहकारी साखर कारखाना १९४९ मध्ये विठ्ठलराव विखे पाटील यांनी प्रवरानगर (लोणी, जि. अहमदनगर) येथे सुरू केला; पश्चिम महाराष्ट्रात (कोल्हापूर, सांगली, पुणे, अहमदनगर) साखर उद्योगाचे केंद्रीकरण",
                                            titleEn: "Textile & Sugar Industries: 1st modern textile mill started in Mumbai (1854 by Cowasji Davar); Mumbai hailed as 'Cottonopolis of India'; Ichalkaranji (Manchester of Maharashtra); 1st cooperative sugar factory at Pravaranagar (1949 by Vitthalrao Vikhe Patil); Concentration in Western Maharashtra",
                                            chips: ["पहिली कापड गिरणी १८५४ (कावसजी दावर)", "मुंबई कॉटनोपोलिस", "इचलकरंजी (महाराष्ट्राचे मँचेस्टर)", "पहिला सहकारी साखर कारखाना प्रवरानगर १९४९"]
                                        },
                                        {
                                            id: "st_gc_g14_01_02",
                                            titleMr: "ऑटोमोबाईल व माहिती तंत्रज्ञान (IT) उद्योग: १) ऑटोमोबाईल: पुणे, पिंपरी-चिंचवड, चाकण, तळेगाव दाभाडे (टाटा मोटर्स, बजाज, महिंद्रा, भारत फोर्ज - 'ऑटो हब'); छत्रपती संभाजीनगर (बजाज, स्कोडा); २) माहिती तंत्रज्ञान: हिंजवडी (राजीव गांधी इन्फोटेक पार्क, पुणे), मगरपट्टा सायबरसिटी, नवी मुंबई (मिलेनियम बिझनेस पार्क) व सीप्झ (SEEPZ, अंधेरी मुंबई)",
                                            titleEn: "Automobile Corridors & IT Hubs: Automobile manufacturing concentrated in Pune-Pimpri-Chakan-Talegaon belt (Tata Motors, Bajaj, Bharat Forge) and Chhatrapati Sambhajinagar; Software IT clusters in Hinjawadi (Rajiv Gandhi Infotech Park), Magarpatta, Navi Mumbai MBP, and SEEPZ Andheri",
                                            chips: ["चाकण व पिंपरी (ऑटो हब)", "हिंजवडी IT पार्क (पुणे)", "मगरपट्टा सायबरसिटी", "SEEPZ अंधेरी"]
                                        }
                                    ],
                                    sources: [
                                        { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण ९: उद्योगधंदे व औद्योगिक पट्टे" },
                                        { book: "महाराष्ट्राचा भूगोल", standard: "प्रा. अनिरुद्ध", chapterRef: "प्रकरण ८: प्रमुख उद्योग" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १५: वाहतूक व्यवस्था: राष्ट्रीय महामार्ग, समृद्धी महामार्ग, रेल्वे झोन व बंदरे
                        // =========================================================================
                        {
                            id: "gc_geog_c15",
                            code: "CG15",
                            section: "F",
                            slug: "transportation-network-highways-railways-and-ports",
                            nameMr: "वाहतूक व्यवस्था: राष्ट्रीय महामार्ग, समृद्धी महामार्ग, रेल्वे झोन व बंदरे",
                            nameEn: "Transport Infrastructure: National Highways, Samruddhi Expressway, Railways & Seaports",
                            name: "वाहतूक: रस्ते, रेल्वे व बंदरे",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 2,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_geog_c15",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_geog_c14",
                            nextChapterId: "gc_geog_c16",
                            metaDescriptionMr: "महाराष्ट्रातील महामार्ग (समृद्धी महामार्ग ७०१ किमी नागपूर-मुंबई, अटल सेतू MTHL २१.८ किमी), रेल्वे (पहिली रेल्वे १६ एप्रिल १८५३ बोरीबंदर ते ठाणे, मध्य व पश्चिम रेल्वे मुख्यालय), आणि बंदरे (JNPT न्हावा शेवा).",
                            metaDescriptionEn: "Transport logistics: Samruddhi Expressway (701 km Nagpur-Mumbai), Atal Setu MTHL (21.8 km longest sea bridge), Railways (16 April 1853 1st train Bori Bunder to Thane; Central & Western Railway HQs), and JNPT seaport.",
                            notesJsonPath: "/data/notes/group_c/prelims/geography/c15_transport_infrastructure.json",
                            quizTag: "gc_geog_transport_01",
                            tags: ["Transportation", "Samruddhi Expressway 701 km", "Atal Setu MTHL 21.8 km", "First Train 1853 Thane", "JNPT Nhava Sheva", "High-Weightage"],
                            searchKeywords: ["samruddhi mahamarg 701 km nagpur to mumbai districts", "atal setu mthl sewri nhava sheva 21.8 km longest sea bridge", "first train in india 16 april 1853 bori bunder thane", "central railway western railway headquarter mumbai", "jnpt nhava sheva major port", "समृद्धी महामार्ग ७०१ किमी", "अटल सेतू MTHL २१.८ किमी", "पहिली रेल्वे १८५३ बोरीबंदर ठाणे", "मध्य रेल्वे मुख्यालय", "JNPT न्हावा शेवा बंदर"],
                            topics: [
                                {
                                    id: "top_gc_g15_01",
                                    nameMr: "रस्ते महामार्ग, ऐतिहासिक रेल्वे विकास, मेट्रो आणि प्रमुख सागरी बंदरे",
                                    nameEn: "Road Expressways, Railway Heritage, Urban Metro & Seaport Terminals",
                                    subtopics: [
                                        {
                                            id: "st_gc_g15_01_01",
                                            titleMr: "रस्ते वाहतूक व एक्सप्रेसवे: १) हिंदुहृदयसम्राट बाळासाहेब ठाकरे महाराष्ट्र समृद्धी महामार्ग: लांबी ७०१ किमी; नागपूर ते मुंबई (शिवणे, ठाणे); १० जिल्ह्यांमधून जाणारा ६ पदरी द्रुतगती महामार्ग; २) अटल बिहारी वाजपेयी शिवडी-न्हावा शेवा अटल सेतू (MTHL): लांबी २१.८ किमी (समुद्रावरील १६.५ किमी - भारतातील सर्वात लांब सागरी पूल); ३) मुंबई-पुणे यशवंतराव चव्हाण एक्सप्रेसवे (भारतातील पहिला ६ पदरी द्रुतगती मार्ग)",
                                            titleEn: "Road Logistics & Expressways: Samruddhi Mahamarg (701 km, Nagpur to Mumbai crossing 10 districts, 6-lane access-controlled); Atal Setu MTHL (21.8 km total, 16.5 km over sea - India's longest sea bridge connecting Sewri to Nhava Sheva); Mumbai-Pune Expressway (India's 1st 6-lane expressway)",
                                            chips: ["समृद्धी महामार्ग (७०१ किमी नागपूर-मुंबई)", "अटल सेतू MTHL (२१.८ किमी सर्वात लांब सागरी पूल)", "मुंबई-पुणे एक्सप्रेसवे"]
                                        },
                                        {
                                            id: "st_gc_g15_01_02",
                                            titleMr: "रेल्वे वाहतूक: १६ एप्रिल १८५३ रोजी भारतातील पहिली प्रवासी रेल्वे मुंबई (बोरीबंदर) ते ठाणे दरम्यान धावली (३४ किमी अंतर, तीन इंजिने: सिंध, सुलतान, साहिब); महाराष्ट्रात भारतीय रेल्वेच्या दोन विभागांची मुख्यालये आहेत: १) मध्य रेल्वे (Central Railway - छत्रपती शिवाजी महाराज टर्मिनस CSMT), २) पश्चिम रेल्वे (Western Railway - चर्चगेट, मुंबई); सोलापूर व भुसावळ हे महत्त्वाचे रेल्वे विभाग",
                                            titleEn: "Railways Infrastructure: 1st train in India operated on 16 April 1853 between Bori Bunder and Thane (34 km, locomotives: Sindh, Sultan, Sahib); Houses two Zonal Railway Headquarters: Central Railway (CSMT) and Western Railway (Churchgate)",
                                            chips: ["पहिली रेल्वे १६ एप्रिल १८५३ (बोरीबंदर ते ठाणे ३४ किमी)", "सिंध, सुलतान, साहिब इंजिने", "मध्य रेल्वे मुख्यालय (CSMT)", "पश्चिम रेल्वे (चर्चगेट)"]
                                        },
                                        {
                                            id: "st_gc_g15_01_03",
                                            titleMr: "सागरी बंदरे: १) मुंबई बंदर: नैसर्गिक खोल पाण्याचे जुने बंदर; २) जवाहरलाल नेहरू बंदर (JNPT / न्हावा शेवा, उरण, रायगड): भारतातील सर्वात मोठे कंटेनर वाहतूक हाताळणारे कृत्रिम बंदर; ३) वाढवण बंदर (डहाणू, पालघर - देशातील १३ वे मोठे महाबंदर म्हणून मंजुरी)",
                                            titleEn: "Seaports Architecture: Mumbai Port (Natural deep harbor); Jawaharlal Nehru Port Authority JNPA (Nhava Sheva, Raigad - premier container handling port of India); Vadhavan Port (Palghar - approved 13th Major Port)",
                                            chips: ["मुंबई बंदर (नैसर्गिक)", "JNPT न्हावा शेवा (सर्वात मोठे कंटेनर बंदर)", "वाढवण बंदर (पालघर १३ वे महाबंदर)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण १०: वाहतूक व संप्रेषण" },
                                        { book: "महाराष्ट्र राज्य रस्ते विकास महामंडळ (MSRDC)", standard: "अधिकृत अहवाल", chapterRef: "समृद्धी महामार्ग व अटल सेतू" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १६: जनगणना २०११ (महाराष्ट्र सांख्यिकी): लोकसंख्या, घनता, साक्षरता व लिंगगुणोत्तर
                        // =========================================================================
                        {
                            id: "gc_geog_c16",
                            code: "CG16",
                            section: "F",
                            slug: "census-2011-maharashtra-demography-literacy-and-sex-ratio",
                            nameMr: "जनगणना २०११ (महाराष्ट्र सांख्यिकी): लोकसंख्या, घनता, साक्षरता व लिंगगुणोत्तर",
                            nameEn: "Census 2011 (Maharashtra Demography): Population, Density, Literacy & Sex Ratio",
                            name: "जनगणना २०११ सांख्यिकी",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_geog_c16",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_geog_c15",
                            nextChapterId: "gc_geog_c17",
                            metaDescriptionMr: "महाराष्ट्राची लोकसंख्या (११.२४ कोटी - देशात ९.२८% दुसरा क्रमांक), घनता (३६५ प्रति चौ.किमी), साक्षरता (८२.३% - सर्वाधिक मुंबई उपनगर, सर्वात कमी नंदुरबार), लिंगगुणोत्तर (९२९ - सर्वाधिक रत्नागिरी ११२२, सर्वात कमी मुंबई शहर ८३२), आणि बाल लिंगगुणोत्तर (८९४).",
                            metaDescriptionEn: "Census 2011 demographics: Population 11.24 Crore (9.28% of India, 2nd rank), Density 365/sq km, Literacy 82.3% (Top: Mumbai Suburban, Lowest: Nandurbar), Sex Ratio 929 (Highest: Ratnagiri 1122, Lowest: Mumbai City 832), Child Sex Ratio 894.",
                            notesJsonPath: "/data/notes/group_c/prelims/geography/c16_census_2011_demography.json",
                            quizTag: "gc_geog_census_01",
                            tags: ["Census 2011", "Population 11.24 Crore", "Density 365", "Literacy 82.3 Percent", "Sex Ratio 929 Ratnagiri", "Child Sex Ratio 894", "High-Weightage"],
                            searchKeywords: ["census 2011 maharashtra population 11.24 crore 2nd rank", "population density maharashtra 365 sq km", "literacy rate 82.3 percent highest mumbai suburban lowest nandurbar", "sex ratio 929 highest ratnagiri 1122 lowest mumbai city 832", "child sex ratio 0 to 6 years 894 lowest beed 807", "जनगणना २०११ महाराष्ट्र आकडेवारी", "लोकसंख्या ११.२४ कोटी घनता ३६५", "साक्षरता ८२.३% मुंबई उपनगर नंदुरबार", "लिंगगुणोत्तर ९२९ रत्नागिरी ११२२", "बाल लिंगगुणोत्तर ८९४ बीड"],
                            topics: [
                                {
                                    id: "top_gc_g16_01",
                                    nameMr: "जनगणना २०११ महाराष्ट्र: लोकसंख्या घनता, साक्षरता, लिंगगुणोत्तर आणि बाल सांख्यिकी",
                                    nameEn: "Census 2011 State Analytics: Demographic Density, Literacy, Sex Ratio & Child Metrics",
                                    subtopics: [
                                        {
                                            id: "st_gc_g16_01_01",
                                            titleMr: "लोकसंख्या व घनता सांख्यिकी: १) एकूण लोकसंख्या: ११,२३,७४,३३३ (११.२४ कोटी - देशाच्या लोकसंख्येच्या ९.२८% - उत्तर प्रदेशानंतर भारतात दुसरा क्रमांक); दशवार्षिक वाढ दर: १५.९९%; २) लोकसंख्येची घनता: ३६५ व्यक्ती प्रति चौ.किमी (भारताची घनता ३८२); सर्वाधिक घनतेचे जिल्हे: मुंबई उपनगर (२०,९८०), मुंबई शहर (१९,६५२), ठाणे (१,१५७), पुणे (६०३); सर्वात कमी घनतेचे जिल्हे: गडचिरोली (७४), सिंधुदुर्ग (१६३), चंद्रपूर (१९३)",
                                            titleEn: "Population Scale & Density: Total Population 11.24 Crore (9.28% of India, 2nd rank after UP); Decadal Growth Rate 15.99%; Density 365 persons/sq km (National 382); Highest density: Mumbai Suburban (20,980), Mumbai City (19,652), Thane (1,157); Lowest density: Gadchiroli (74), Sindhudurg (163)",
                                            chips: ["लोकसंख्या ११.२४ कोटी (२ रा क्रमांक)", "घनता ३६५ प्रति चौ.किमी", "मुंबई उपनगर सर्वाधिक घनता", "गडचिरोली सर्वात कमी घनता (७४)"]
                                        },
                                        {
                                            id: "st_gc_g16_01_02",
                                            titleMr: "साक्षरता दर (Literacy Rate): महाराष्ट्राचा एकूण साक्षरता दर: ८२.३४% (पुरुष साक्षरता: ८८.३८%, स्त्री साक्षरता: ७५.८७% - लिंग तफावत १२.५१%); सर्वाधिक साक्षर जिल्हे: १) मुंबई उपनगर (८९.९१%), २) नागपूर (८८.३९%), ३) मुंबई शहर (८९.२१%), ४) अमरावती; सर्वात कमी साक्षर जिल्हे: १) नंदुरबार (६४.३८% - सर्वात कमी), २) जालना (७१.५२%), ३) धुळे (७२.८०%)",
                                            titleEn: "Literacy Distribution: State literacy rate 82.34% (Male 88.38%, Female 75.87% - gender gap 12.51%); Top literacy districts: Mumbai Suburban (89.91%), Nagpur (88.39%), Mumbai City; Lowest literacy districts: Nandurbar (64.38%), Jalna (71.52%), Dhule",
                                            chips: ["साक्षरता दर ८२.३४%", "पुरुष ८८.३८% स्त्री ७५.८७%", "मुंबई उपनगर सर्वाधिक साक्षर", "नंदुरबार सर्वात कमी साक्षर (६४.३८%)"]
                                        },
                                        {
                                            id: "st_gc_g16_01_03",
                                            titleMr: "लिंगगुणोत्तर आणि बाल लिंगगुणोत्तर (० ते ६ वर्षे): १) सर्वसाधारण लिंगगुणोत्तर: ९२९ स्त्रिया प्रति १००० पुरुष (भारताचे ९४३); सर्वाधिक लिंगगुणोत्तर: रत्नागिरी (१,१२२ - स्थलांतरामुळे), सिंधुदुर्ग (१,०३६), गोंदिया (९९९), सातारा (९८८); सर्वात कमी लिंगगुणोत्तर: मुंबई शहर (८३२), मुंबई उपनगर (८६०), ठाणे (८८६); २) बाल लिंगगुणोत्तर (०-६ वयोगट): ८९४ (चिंताजनक घसरण); सर्वात कमी बाल लिंगगुणोत्तर: बीड (८०७), जळगाव (८४२), अहमदनगर (८५२); सर्वाधिक बाल लिंगगुणोत्तर: गडचिरोली (९६१)",
                                            titleEn: "Sex Ratio & Child Sex Ratio (0-6 Years): Overall Sex Ratio 929 females/1000 males (National 943); Highest sex ratio: Ratnagiri (1,122 due to male migration to Mumbai), Sindhudurg (1,036), Gondia (999); Lowest sex ratio: Mumbai City (832), Mumbai Suburban (860); Child Sex Ratio: 894; Lowest Child Sex Ratio: Beed (807); Highest Child Sex Ratio: Gadchiroli (961)",
                                            chips: ["लिंगगुणोत्तर ९२९ (रत्नागिरी १,१२२ सर्वाधिक)", "मुंबई शहर सर्वात कमी (८३२)", "बाल लिंगगुणोत्तर ८९४", "बीड सर्वात कमी बाल लिंगगुणोत्तर (८०७)", "गडचिरोली सर्वाधिक बाल लिंगगुणोत्तर (९६१)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण ११: जनगणना २०११ सांख्यिकी" },
                                        { book: "Directorate of Census Operations Maharashtra", standard: "Census 2011 Handbook", chapterRef: "Demographic Profile of Maharashtra" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १७: भारताचा सामान्य भूगोल: हिमालय, उत्तर भारतीय मैदाने व द्वीपकल्पीय पठार
                        // =========================================================================
                        {
                            id: "gc_geog_c17",
                            code: "CG17",
                            section: "F",
                            slug: "indian-geography-physiography-himalayas-plains-and-peninsula",
                            nameMr: "भारताचा सामान्य भूगोल: हिमालय, उत्तर भारतीय मैदाने व द्वीपकल्पीय पठार",
                            nameEn: "Physical Geography of India: Himalayas, Northern Plains & Peninsular Plateau",
                            name: "भारताचा सामान्य भूगोल",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_geog_c17",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_geog_c16",
                            nextChapterId: "gc_geog_c18",
                            metaDescriptionMr: "भारताचे प्राकृतिक विभाग: हिमालय पर्वत (हिमाद्री, हिमाचल, शिवालिक), उत्तर भारतीय गाळाची मैदाने (भाबर, तराई, भांगर, खादर), द्वीपकल्पीय पठार, भारतीय नद्या (सिंधू, गंगा, ब्रह्मपुत्रा), आणि भारतीय बेटे (अंदमान-निकोबार, लक्षद्वीप).",
                            metaDescriptionEn: "Physiographic divisions of India: Himalayas (Himadri, Himachal, Shiwalik), Northern Plains (Bhabar, Tarai, Bhangar, Khadar), Peninsular Plateau, Major river systems (Ganga, Indus, Brahmaputra), and Island groups (Andaman-Nicobar 10-degree channel, Lakshadweep).",
                            notesJsonPath: "/data/notes/group_c/prelims/geography/c17_india_physiography.json",
                            quizTag: "gc_geog_india_01",
                            tags: ["Indian Geography", "Himalayas Himadri Shiwalik", "Northern Plains Bhabar Tarai", "Ganga River Basin", "Andaman Nicobar 10 Degree Channel"],
                            searchKeywords: ["physiographic divisions of india himalayas northern plains plateau", "bhabar tarai bhangar khadar plains classification", "himalayan rivers vs peninsular rivers", "ganga river origin gangotri yamuna tributary", "andaman nicobar 10 degree channel separation", "भारताचा प्राकृतिक भूगोल हिमालय", "उत्तर भारतीय मैदाने भाबर तराई खादर", "गंगा नदी प्रणाली", "अंदमान निकोबार १० डिग्री चॅनल"],
                            topics: [
                                {
                                    id: "top_gc_g17_01",
                                    nameMr: "भारताचे प्राकृतिक विभाग, हिमालय रचना, गंगेचे मैदान आणि बेट समूह",
                                    nameEn: "Physiographic Provinces of India, Himalayan Orography, Indo-Gangetic Plains & Islands",
                                    subtopics: [
                                        {
                                            id: "st_gc_g17_01_01",
                                            titleMr: "हिमालय पर्वत प्रणाली (उत्तर पर्वतीय प्रदेश): टेथिस समुद्रातून वलीकरण होऊन निर्माण झालेला नवीन घडीचा पर्वत; तीन समांतर रांगा: १) बृहद हिमालय / हिमाद्री (Great Himalayas - सरासरी उंची ६००० मी, माउंट एव्हरेस्ट ८८४८ मी, कांचनगंगा ८५८६ मी - भारतातील सर्वोच्च शिखर); २) मध्य हिमालय / हिमाचल (पीर पंजाल, धौलाधार रांगा, सिमला, कुलू-मनाली); ३) बाह्य हिमालय / शिवालिक (Shivaliks - सर्वात दक्षिणेकडील रांग, डून दऱ्या - उदा. देहरादून)",
                                            titleEn: "Himalayan Mountain System: Young fold mountain formed via Tethys geosyncline collision; Three parallel zones: Greater Himalayas/Himadri (Everest, Kanchenjunga 8586m), Lesser Himalayas/Himachal (Pir Panjal, Dhauladhar), Outer Himalayas/Shiwaliks (Doon valleys like Dehradun)",
                                            chips: ["हिमाद्री (कांचनगंगा ८५८६ मी)", "हिमाचल (पीर पंजाल)", "शिवालिक (दून दऱ्या देहरादून)", "घडीचा पर्वत"]
                                        },
                                        {
                                            id: "st_gc_g17_01_02",
                                            titleMr: "उत्तर भारतीय गाळाची मैदाने (Indo-Gangetic Plains): सिंधू, गंगा व ब्रह्मपुत्रा नद्यांनी आणलेल्या गाळाच्या संचयनातून निर्मिती; उत्तरेकडून दक्षिणेकडे ४ पट्टे: १) भाबर (Bhabar: शिवालिक पायथ्याशी दगड-गोट्यांचा सच्छिद्र पट्टा, नद्या लुप्त होतात); २) तराई (Tarai: दलदलीचा, दाट जंगलाचा पट्टा, नद्या पुन्हा प्रकट होतात); ३) भांगर (Bhangar: जुन्या गाळाचा उंच प्रदेश, कंकरयुक्त); ४) खादर (Khadar: नव्या गाळाचा अत्यंत सुपीक पूर पट्टा); सुंदरबन त्रिभुज प्रदेश (जगातील सर्वात मोठा डेल्टा)",
                                            titleEn: "Indo-Gangetic Plains Morphology: Depositional alluvial plain of Indus, Ganga, and Brahmaputra; 4 Geomorphological belts: Bhabar (Porous boulder belt where streams disappear), Tarai (Marshy re-emergent zone), Bhangar (Older alluvium with kankar), Khadar (New fertile floodplains); Sundarbans Delta",
                                            chips: ["भाबर (दगड-गोटे नद्या लुप्त)", "तराई (दलदलीचा पट्टा)", "भांगर (जुना गाळ)", "खादर (नवा सुपीक गाळ)", "सुंदरबन त्रिभुज प्रदेश"]
                                        },
                                        {
                                            id: "st_gc_g17_01_03",
                                            titleMr: "भारतीय नद्या व बेट समूह: १) नद्या: गंगा नदी (गंगोत्री/भागीरथी उगम, देवप्रयाग येथे अलकनंदा-भागीरथी संगम होऊन गंगा नाव, लांबी २,५२५ किमी, यमुना मुख्य उपनदी); ब्रह्मपुत्रा (तिबेटमध्ये त्सांगपो नाव); २) बेटे: अंदमान व निकोबार बेटे (बंगालचा उपसागर - १०° चॅनलने अंदमान व निकोबार वेगळे होतात; बॅरन बेट - भारतातील एकमेव जागृत ज्वालामुखी; इंदिरा पॉईंट - भारताचे दक्षिणेकडील टोक); लक्षद्वीप बेटे (अरबी समुद्र - प्रवाळांची बेटे / Coral Atolls, ९° चॅनल)",
                                            titleEn: "Drainage & Islands: Ganga River (Origin Gangotri, Alaknanda-Bhagirathi confluence at Devprayag, 2525 km, Yamuna tributary); Brahmaputra (Tsangpo in Tibet); Andaman & Nicobar (10 Degree Channel separates Andaman and Nicobar; Barren Island active volcano; Indira Point); Lakshadweep (Coral atolls, 9 Degree Channel)",
                                            chips: ["गंगा नदी (देवप्रयाग संगम २५२५ किमी)", "१०° चॅनल (अंदमान-निकोबार विभाजन)", "बॅरन बेट (जागृत ज्वालामुखी)", "लक्षद्वीप (प्रवाळ बेटे)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "NCERT Class 11 India: Physical Environment", standard: "NCERT", chapterRef: "Chapter 2: Structure and Physiography" },
                                        { book: "भारताचा भूगोल", standard: "माजिद हुसेन / के. सागर", chapterRef: "प्रकरण २ व ३: भूरचना व जलप्रणाली" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १८: भूगोल पूर्व परीक्षा मास्टर रिव्हिजन: नकाशे, महत्त्वाच्या जोड्या व १० वर्षांचे PYQ विश्लेषण
                        // =========================================================================
                        {
                            id: "gc_geog_c18",
                            code: "CG18",
                            section: "F",
                            slug: "prelims-geography-master-revision-and-pyq-trends",
                            nameMr: "भूगोल पूर्व परीक्षा मास्टर रिव्हिजन: नकाशे, महत्त्वाच्या जोड्या व १० वर्षांचे PYQ विश्लेषण",
                            nameEn: "Prelims Geography Master Revision: Map Overlays, Fact Matrix & 10-Year PYQ Insights",
                            name: "भूगोल मास्टर रिव्हिजन",
                            category: "REVISION",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_geog_c18",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_geog_c17",
                            nextChapterId: null,
                            metaDescriptionMr: "गट-क पूर्व परीक्षा भूगोलाच्या १५ प्रश्नांची (१५ गुण) अचूक रणनीती, नकाशे वाचन (नद्या, शिखरे, खिंडी, खनिज पट्टे), हमखास येणाऱ्या जोड्या (नदी संगम, धरणे, तालुके), आणि २०१३ ते २०२५ मधील MPSC PYQ ट्रेंड्स.",
                            metaDescriptionEn: "Consolidated Master Revision for Prelims Geography (15 questions target): Map-reading heuristics, High-frequency matching tables (River confluences, reservoirs, districts, minerals), and 10-year MPSC Group C trend analysis.",
                            notesJsonPath: "/data/notes/group_c/prelims/geography/c18_master_revision.json",
                            quizTag: "gc_geog_revision_01",
                            tags: ["Revision", "Prelims Strategy", "15 Marks Target", "Map Reading", "River Confluences Table", "PYQ Trends 2013 to 2025", "High-Weightage"],
                            searchKeywords: ["mpsc group c geography 15 questions strategy", "map reading maharashtra rivers peaks ghats", "river confluences dams reservoirs matching list", "mpsc prelims geography pyq trend analysis 2013 to 2025", "भूगोल पूर्व परीक्षा रणनीती १५ गुण", "नकाशे वाचन नदी संगम धरणे", "१० वर्षांचे PYQ विश्लेषण"],
                            topics: [
                                {
                                    id: "top_gc_g18_01",
                                    nameMr: "नकाशे वाचन तंत्र, जोड्या जुळवा मास्टर कोष्टके आणि १० वर्षांचे MPSC PYQ विश्लेषण",
                                    nameEn: "Cartographic Decoding, High-Frequency Matching Concordance & 10-Year PYQ Trends",
                                    subtopics: [
                                        {
                                            id: "st_gc_g18_01_01",
                                            titleMr: "नकाशा आधारित महत्त्वाच्या जोड्यांचा मास्टर तक्ता: १) थंड हवेची ठिकाणे: माथेरान (रायगड), चिखलदरा (अमरावती), तोरणमाळ (नंदुरबार), महेशमाळ (छत्रपती संभाजीनगर), पन्हाळा (कोल्हापूर); २) गरम पाण्याचे झरे: वज्रेश्वरी, अकलोली, गणेशपुरी (ठाणे/पालघर), उन्हावरे (रत्नागिरी), उन्पदेव-सुनपदेव (जळगाव), साव (रायगड), उपणदेव; ३) जलप्रपात/धबधबे: ठोसेघर (सातारा), रंधा फॉल्स (प्रवरा नदी, अहमदनगर), मार्लेश्वर (रत्नागिरी), सहस्त्रकुंड (नांदेड/यवतमाळ - पैनगंगा नदी)",
                                            titleEn: "Map-Based High-Yield Concordance: Hill Stations: Matheran (Raigad), Chikhaldara (Amravati), Toranmal (Nandurbar), Maheshmal (Chhatrapati Sambhajinagar); Hot Springs: Vajreshwari/Ganeshpuri (Thane/Palghar), Unhavare (Ratnagiri), Unapdev (Jalgaon); Waterfalls: Thoseghar (Satara), Randha Falls (Pravara, Ahmednagar), Sahastrakund (Painganga)",
                                            chips: ["गरम पाण्याचे झरे (वज्रेश्वरी, उन्हावरे)", "धबधबे (ठोसेघर, रंधा फॉल्स, सहस्त्रकुंड)", "थंड हवेची ठिकाणे जोड्या"]
                                        },
                                        {
                                            id: "st_gc_g18_01_02",
                                            titleMr: "धरणे व जलाशयांची नावे जोड्या: १) जायकवाडी - नाथसागर (गोदावरी); २) कोयना - शिवसागर (कृष्णा खोरे); ३) उजनी - यशवंतसागर (भीमा); ४) तोतलाडोह - मेघदूत जलाशय (पेंच); ५) भंडारदरा - आर्थर लेक (प्रवरा); ६) राधानगरी - लक्ष्मीबाई तलाव (भोगावती); ७) चांदोली - वसंतसागर (वारणा); ८) मांजरा धरण - निजामसागर (मांजरा नदी); ९) गोसीखुर्द धरण - इंदिरा सागर (वैनगंगा नदी)",
                                            titleEn: "Dams & Reservoir Official Names Matrix: Jayakwadi (Nath Sagar), Koyna (Shivsagar), Ujani (Yashwant Sagar), Totladoh (Meghdoot, Pench), Bhandardara (Arthur Lake), Radhanagari (Laxmibai Lake), Chandoli (Vasant Sagar), Gosikhurd (Indira Sagar, Wainganga)",
                                            chips: ["जायकवाडी (नाथसागर)", "कोयना (शिवसागर)", "उजनी (यशवंतसागर)", "भंडारदरा (आर्थर लेक)", "गोसीखुर्द (इंदिरा सागर)"]
                                        },
                                        {
                                            id: "st_gc_g18_01_03",
                                            titleMr: "MPSC पूर्व परीक्षा भूगोल १० वर्षांचे विश्लेषण (१५ पैकी १३+ गुण मिळवण्याची रणनीती): प्रश्न वितरणाचा कल: महाराष्ट्राचा प्राकृतिक भूगोल (३-४ प्रश्न: नद्या, खाड्या, शिखरे, डोंगररांगा), हवामान व मृदा (२-३ प्रश्न), वने व खनिजे (२-३ प्रश्न), उद्योग व वाहतूक (२ प्रश्न), जनगणना २०११ (२ प्रश्न हमखास), भारताचा सामान्य भूगोल (२-३ प्रश्न); पर्यायांवरून उत्तरांची पडताळणी करण्याची पद्धत",
                                            titleEn: "10-Year MPSC Group C Geography Trend Analytics: Question Distribution: Maharashtra Physical/Rivers (3-4 Qs), Climate & Soils (2-3 Qs), Minerals/Forests (2-3 Qs), Transport/Industries (2 Qs), Census 2011 (2 guaranteed Qs), Indian Physical Geography (2-3 Qs); Elimination strategies for securing 13+ marks",
                                            chips: ["PYQ ट्रेंड्स विश्लेषण", "१५ पैकी १३+ गुण रणनीती", "जनगणना २०११ हमखास २ प्रश्न", "नदी खोरी ३-४ प्रश्न", "एलिमिनेशन तंत्र"]
                                        }
                                    ],
                                    sources: [
                                        { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "मास्टर उजळणी व सांख्यिकी तक्ते" },
                                        { book: "MPSC मागील वर्षांच्या प्रश्नपत्रिका संच", standard: "२०१३ ते २०२५", chapterRef: "भूगोल पूर्व परीक्षा प्रश्न विश्लेषण" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },


        // ३. राज्यव्यवस्था (`gc_pre_polity`)
        {
            id: "gc_pre_polity",
            code: "POL",
            slug: "indian-polity-and-panchayati-raj",
            nameMr: "भारतीय राज्यव्यवस्था आणि पंचायत राज",
            nameEn: "Indian Polity, Constitution & Panchayati Raj Governance",
            name: "राज्यव्यवस्था (Polity)",
            officialScope: "Indian Constitution, Preamble, Fundamental Rights, Directive Principles, Union & State Executive, Parliament, Judiciary, and 73rd-74th Amendments",
            version: "1.0",
            verifiedDate: "2026-10-28",
            notesJsonBaseDir: "/data/notes/group_c/prelims/polity/",
            theme: { primaryColor: "#1e1b4b", bgColor: "#eef2ff", iconClass: "ri-government-line" },
            metrics: { totalChapters: 18, totalEstimatedHours: 46, avgQuestionsInPrelims: 15, targetMarks: 15, weightageRange: "14-16 Questions" },
            subjectTags: ["Core-GS", "Group-C-Prelims", "Combined-Common", "Rule-Based", "High-Accuracy"],
            filterCategory: "GS",
            searchKeywords: ["mpsc group c polity", "indian constitution fundamental rights", "panchayati raj 73rd amendment", "राज्यव्यवस्था"],
            referenceSources: [
                { name: "भारतीय राज्यघटना व राजकारण - एम. लक्ष्मीकांत", role: "मानक संदर्भ ग्रंथ" },
                { name: "भारतीय राज्यघटना - रंजन कोळंबे", role: "परीक्षाभिमुख विश्लेषण" }
            ],
            chapters: [
                {
                    id: "gc_pre_polity",
                    code: "POL",
                    slug: "indian-polity-and-panchayati-raj-prelims",
                    nameMr: "भारतीय राज्यव्यवस्था आणि पंचायत राज",
                    nameEn: "Indian Polity, Constitution & Panchayati Raj Governance",
                    name: "राज्यव्यवस्था (Polity)",
                    officialScope: "Indian Constitution, Historical Genesis, Preamble, Fundamental Rights, Directive Principles, Fundamental Duties, Union & State Executive, Parliament, State Legislature, Higher & Subordinate Judiciary, Centre-State Relations, Constitutional & Statutory Bodies, and 73rd-74th Amendments Panchayati Raj Systems in Maharashtra",
                    version: "1.0",
                    verifiedDate: "2026-10-28",
                    notesJsonBaseDir: "/data/notes/group_c/prelims/polity/",


                    theme: {
                        primaryColor: "#1e1b4b",
                        bgColor: "#eef2ff",
                        iconClass: "ri-government-line"
                    },


                    metrics: {
                        totalChapters: 18,
                        totalEstimatedHours: 46,
                        avgQuestionsInPrelims: 15,
                        targetMarks: 15,
                        weightageRange: "14-16 Questions"
                    },


                    subjectTags: [
                        "Core-GS",
                        "Group-C-Prelims",
                        "Pre-Cum-Mains",
                        "Rule-Based",
                        "High-Accuracy",
                        "Panchayati-Raj-Heavy",
                        "Standard-Laxmikanth-Kolambe"
                    ],


                    filterCategory: "GS",
                    searchKeywords: [
                        "mpsc group c polity prelims", "indian constitution fundamental rights dpsp",
                        "president governor parliament legislative assembly", "supreme court high court judicial review",
                        "panchayati raj 73rd 74th amendment maharashtra zilla parishad gram panchayat",
                        "constitutional bodies election commission upsc mpsc cag",
                        "राज्यव्यवस्था पूर्व परीक्षा", "भारतीय राज्यघटना", "मूलभूत हक्क मार्गदर्शक तत्त्वे", "संसद व राष्ट्रपती", "पंचायत राज व्यवस्था", "स्थानिक स्वराज्य संस्था"
                    ],


                    referenceSources: [
                        {
                            name: "भारतीय राज्यघटना व राजकारण - एम. लक्ष्मीकांत",
                            role: "संविधान व राजकीय प्रणालीचा आधारभूत मानक ग्रंथ"
                        },
                        {
                            name: "भारतीय राज्यघटना व राजकीय व्यवस्था - रंजन कोळंबे",
                            role: "संकल्पनात्मक स्पष्टता व स्पर्धा परीक्षाभिमुख विश्लेषण"
                        },
                        {
                            name: "पंचायत राज व्यवस्था - किशोर लवटे / के. सागर",
                            role: "महाराष्ट्रातील स्थानिक स्वराज्य संस्था व समित्यांचे सखोल विश्लेषण"
                        }
                    ],


                    chapters: [
                        // =========================================================================
                        // प्रकरण १: ऐतिहासिक पार्श्वभूमी व संविधान निर्मिती प्रक्रिया
                        // =========================================================================
                        {
                            id: "gc_pol_c01",
                            code: "CP01",
                            section: "A",
                            slug: "historical-background-and-making-of-indian-constitution",
                            nameMr: "ऐतिहासिक पार्श्वभूमी (१९३५ चा कायदा) आणि संविधान निर्मिती प्रक्रिया",
                            nameEn: "Historical Evolution (GoI Act 1935) & Making of the Indian Constitution",
                            name: "संविधान निर्मिती प्रक्रिया",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 2,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_pol_c01",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: null,
                            nextChapterId: "gc_pol_c02",
                            metaDescriptionMr: "कॅबिनेट मिशन १९४६, संविधान सभेची रचना (३८९ सदस्य, फाळणीनंतर २९९), पहिल्या बैठका (९ व ११ डिसेंबर १९४६), डॉ. सच्चिदानंद सिन्हा, डॉ. राजेंद्र प्रसाद, मसुदा समिती (डॉ. बी. आर. आंबेडकर), आणि २६ नोव्हेंबर १९४९ स्वीकृती.",
                            metaDescriptionEn: "Cabinet Mission 1946, Constituent Assembly elections & composition, Key sessions, Sachchidananda Sinha, Dr. Rajendra Prasad, Drafting Committee (Dr. B.R. Ambedkar), and Adoption on 26 Nov 1949.",
                            notesJsonPath: "/data/notes/group_c/prelims/polity/c01_making_of_constitution.json",
                            quizTag: "gc_pol_making_01",
                            tags: ["Constituent Assembly", "Drafting Committee", "Dr Ambedkar", "Objective Resolution", "26 Nov 1949", "High-Weightage"],
                            searchKeywords: ["making of indian constitution constituent assembly cabinet mission 1946", "drafting committee members dr br ambedkar chairman", "objective resolution jawaharlal nehru 13 dec 1946", "constitution adopted 26 november 1949 enforced 26 january 1950", "संविधान निर्मिती", "संविधान सभा मसुदा समिती", "डॉ आंबेडकर", "उद्दिष्टांचा ठराव", "२६ नोव्हेंबर १९४९ संविधान दिन"],
                            topics: [
                                {
                                    id: "top_gc_p01_01",
                                    nameMr: "संविधान सभेची स्थापना, समित्या आणि मसुदा निर्मिती प्रक्रिया",
                                    nameEn: "Constituent Assembly Formulation, Committees & Drafting Chronology",
                                    subtopics: [
                                        {
                                            id: "st_gc_p01_01_01",
                                            titleMr: "संविधान सभेची रचना व निवडणुका: कॅबिनेट मिशन (त्रिमंत्री योजना १९४६) अन्वये निर्मिती; एकूण ३८९ जागा (२९२ ब्रिटिश प्रांत, ९३ देशी संस्थाने, ४ मुख्य आयुक्त प्रांत); फाळणीनंतर सदस्य संख्या २९९ झाली; अप्रत्यक्ष निवडणूक पद्धतीने प्रांतिक कायदेमंडळातील सदस्यांकडून एकल संक्रमणीय मताद्वारे निवड; एकूण १५ महिला सदस्य",
                                            titleEn: "Assembly Setup & Composition: Formed via Cabinet Mission Plan 1946; Initially 389 seats (reduced to 299 post-partition); Elected indirectly by provincial assemblies via single transferable vote; Comprised 15 female members",
                                            chips: ["कॅबिनेट मिशन १९४६", "एकूण ३८९ -> २९९ जागा", "अप्रत्यक्ष निवडणूक", "१५ महिला सदस्य"]
                                        },
                                        {
                                            id: "st_gc_p01_01_02",
                                            titleMr: "महत्त्वाच्या बैठका व उद्दिष्टांचा ठराव: पहिली बैठक ९ डिसेंबर १९४६ (तात्पुरते अध्यक्ष: डॉ. सच्चिदानंद सिन्हा - फ्रेंच पद्धतीनुसार ज्येष्ठतम सदस्य); ११ डिसेंबर १९४६ रोजी डॉ. राजेंद्र प्रसाद यांची कायमस्वरूपी अध्यक्ष म्हणून तर एच. सी. मुखर्जी यांची उपाध्यक्ष म्हणून निवड; १३ डिसेंबर १९४६ रोजी पं. जवाहरलाल नेहरू यांनी 'उद्दिष्टांचा ठराव' मांडला (२२ जानेवारी १९४७ रोजी एकमताने संमत, जो पुढे सरनाम्याचा आधार बनला)",
                                            titleEn: "Initial Sessions & Objective Resolution: 1st sitting on 9 Dec 1946 (Interim Chair Dr. Sachchidananda Sinha); Dr. Rajendra Prasad elected permanent President on 11 Dec 1946; Nehru moved historic Objective Resolution on 13 Dec 1946 (adopted 22 Jan 1947, later became Preamble)",
                                            chips: ["पहिली बैठक ९ डिसेंबर १९४६", "डॉ सच्चिदानंद सिन्हा", "डॉ राजेंद्र प्रसाद कायम अध्यक्ष", "उद्दिष्टांचा ठराव १३ डिसेंबर १९४६", "नेहरू"]
                                        },
                                        {
                                            id: "st_gc_p01_01_03",
                                            titleMr: "मसुदा समिती (Drafting Committee): २९ ऑगस्ट १९४७ रोजी स्थापना; अध्यक्ष: डॉ. बाबासाहेब आंबेडकर ('भारतीय संविधानाचे शिल्पकार'); एकूण ७ सदस्य (डॉ. आंबेडकर, एन. गोपालस्वामी अय्यंगार, अल्लादी कृष्णास्वामी अय्यर, डॉ. के. एम. मुन्शी, सय्यद मोहम्मद सादुल्ला, बी. एल. मित्तर यांच्या जागी एन. माधवराव, डी. पी. खेतान यांच्या जागी टी. टी. कृष्णमाचारी); संविधानाचे कायदेशीर सल्लागार: बी. एन. राव",
                                            titleEn: "Drafting Committee Setup: Constituted on 29 Aug 1947; Chaired by Dr. B.R. Ambedkar ('Architect of the Constitution'); 7 members total; Constitutional Advisor was Sir B.N. Rau",
                                            chips: ["मसुदा समिती २९ ऑगस्ट १९४७", "डॉ आंबेडकर अध्यक्ष (शिल्पकार)", "७ सदस्य समिती", "बी एन राव कायदेशीर सल्लागार"]
                                        },
                                        {
                                            id: "st_gc_p01_01_04",
                                            titleMr: "स्वीकृती व अंमलबजावणी: संविधान पूर्ण होण्यास २ वर्षे, ११ महिने आणि १८ दिवस लागले; २६ नोव्हेंबर १९४९ रोजी संविधानाचा मसुदा संविधान सभेकडून स्वीकृत व संमत झाला (२८४ सदस्यांच्या स्वाक्षऱ्या; नागरिकत्व, निवडणुका तात्काळ लागू); संपूर्ण राज्यघटना २६ जानेवारी १९५० रोजी अमलात आली (प्रजासत्ताक दिन - १९३० च्या लाहोर पूर्ण स्वराज दिनाचे स्मरण); मूळ राज्यघटनेत ३९५ कलमे, २२ भाग आणि ८ परिशिष्टे होती",
                                            titleEn: "Adoption & Enforcement: Took 2 years, 11 months, 18 days; Adopted on 26 Nov 1949 (284 signatures; Citizenship & elections operationalized); Fully enforced on 26 Jan 1950 (Republic Day commemorating 1930 Purna Swaraj); Original draft contained 395 Articles, 22 Parts, 8 Schedules",
                                            chips: ["२ वर्षे ११ महिने १८ दिवस", "२६ नोव्हेंबर १९४९ स्वीकृती (संविधान दिन)", "२६ जानेवारी १९५० प्रजासत्ताक दिन", "मूळ ३९५ कलमे ८ परिशिष्टे"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय राज्यघटना व राजकारण", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण २: संविधान निर्मिती" },
                                        { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण २: घटना निर्मितीची प्रक्रिया" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण २: संविधानाची ठळक वैशिष्ट्ये, सरनामा (Preamble) व परिशिष्टे
                        // =========================================================================
                        {
                            id: "gc_pol_c02",
                            code: "CP02",
                            section: "A",
                            slug: "salient-features-preamble-sources-and-schedules",
                            nameMr: "संविधानाची ठळक वैशिष्ट्ये, सरनामा (Preamble), विविध स्रोत आणि परिशिष्टे",
                            nameEn: "Salient Features, Preamble Philosophy, Global Sources & 12 Schedules",
                            name: "वैशिष्ट्ये, सरनामा, स्रोत व परिशिष्टे",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_pol_c02",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_pol_c01",
                            nextChapterId: "gc_pol_c03",
                            metaDescriptionMr: "संविधानाची वैशिष्ट्ये, सरनाम्यातील शब्दक्रम (सार्वभौम, समाजवादी, धर्मनिरपेक्ष, लोकशाही, प्रजासत्ताक), ४२ वी दुरुस्ती १९७६, सरनाम्यावरील खटले (बेरुबारी, केशवानंद), जागतिक स्रोत, आणि १२ परिशिष्टे.",
                            metaDescriptionEn: "Constitutional Features, Sequence of words in Preamble (Sovereign, Socialist, Secular, Democratic, Republic), 42nd Amendment 1976, Preamble cases, Global Borrowed Sources, and 12 Schedules.",
                            notesJsonPath: "/data/notes/group_c/prelims/polity/c02_preamble_sources_schedules.json",
                            quizTag: "gc_pol_preamble_01",
                            tags: ["Preamble", "Sovereign Socialist Secular", "42nd Amendment 1976", "Global Sources", "12 Schedules", "High-Weightage"],
                            searchKeywords: ["preamble sequence sovereign socialist secular democratic republic", "42nd amendment 1976 socialist secular integrity added", "sources of indian constitution 1935 act uk usa ussr ireland", "12 schedules of indian constitution 7th 8th 10th 11th 12th", "kesavananda bharati case preamble integral part", "सरनामा शब्दक्रम", "४२ वी घटनादुरुस्ती १९७६", "संविधानाचे परकीय स्रोत", "१२ परिशिष्टे", "केशवानंद भारती खटला"],
                            topics: [
                                {
                                    id: "top_gc_p02_01",
                                    nameMr: "सरनाम्याचे तत्त्वज्ञान, शब्दक्रम, न्यायालयीन निवाडे आणि १२ परिशिष्टे",
                                    nameEn: "Preamble Philosophy, Textual Order, Landmark Judgments & 12 Schedules",
                                    subtopics: [
                                        {
                                            id: "st_gc_p02_01_01",
                                            titleMr: "सरनाम्यातील मूल्यांचा अधिकृत क्रम: 'आम्ही भारताचे लोक... भारताचे एक सार्वभौम, समाजवादी, धर्मनिरपेक्ष, लोकशाही, प्रजासत्ताक घडवण्याचा'; न्याय (सामाजिक, आर्थिक, राजकीय - रशियन क्रांतीतून); स्वातंत्र्य (विचार, अभिव्यक्ती, विश्वास, श्रद्धा व उपासना - फ्रेंच क्रांतीतून); समता (दर्जाची व संधीची) आणि बंधुता; २६ नोव्हेंबर १९४९ रोजी अंगीकृत व अधिनियमित",
                                            titleEn: "Textual Sequence of the Preamble: 'We, the People of India... Sovereign, Socialist, Secular, Democratic, Republic'; Justice (Social, Economic, Political from Russian Revolution); Liberty (Thought, Expression, Belief, Faith, Worship from French Revolution); Equality and Fraternity",
                                            chips: ["सार्वभौम, समाजवादी, धर्मनिरपेक्ष, लोकशाही, प्रजासत्ताक", "न्याय (३ प्रकार)", "स्वातंत्र्य (५ प्रकार)", "समता व बंधुता"]
                                        },
                                        {
                                            id: "st_gc_p02_01_02",
                                            titleMr: "४२ वी घटनादुरुस्ती (१९७६) व न्यायालयीन खटले: ४२ व्या दुरुस्तीद्वारे सरनाम्यात 'समाजवादी', 'धर्मनिरपेक्ष' आणि 'एकात्मता' हे तीन नवीन शब्द जोडले गेले (सरनाम्यात आतापर्यंत झालेली एकमेव दुरुस्ती); बेरुबारी खटला (१९६०) - सरनामा संविधानाचा भाग नाही; केशवानंद भारती खटला (१९७३) - सरनामा हा संविधानाचा अविभाज्य भाग आहे व मूलभूत चौकटीला धक्का न लावता त्यात दुरुस्ती करता येते",
                                            titleEn: "42nd Amendment 1976 & Case Laws: Added 'Socialist', 'Secular', and 'Integrity' (only amendment to Preamble); Berubari Union Case (1960) held Preamble not part of Constitution; Kesavananda Bharati (1973) overruled, ruling Preamble is an integral part subject to Basic Structure doctrine",
                                            chips: ["४२ वी घटनादुरुस्ती १९७६", "समाजवादी, धर्मनिरपेक्ष, एकात्मता", "बेरुबारी खटला १९६०", "केशवानंद भारती खटला १९७३", "मूलभूत चौकट"]
                                        },
                                        {
                                            id: "st_gc_p02_01_03",
                                            titleMr: "संविधानाचे प्रमुख स्रोत व १२ परिशिष्टे: भारत सरकार कायदा १९३५ (संघराज्यीय रचना, राज्यपाल कार्यालय, न्यायव्यवस्था); ब्रिटन (संसदीय शासन, कायद्याचे राज्य, एकेरी नागरिकत्व); अमेरिका (मूलभूत हक्क, न्यायालयीन पुनर्विलोकन); आयर्लंड (DPSP); ऑस्ट्रेलिया (समवर्ती सूची); १२ परिशिष्टे: १ ले (राज्ये-केंद्रशासित प्रदेश), २ रे (वेतन-भत्ते), ३ रे (शपथांचे नमुने), ४ थे (राज्यसभा जागा वाटप), ५ वे व ६ वे (अनुसूचित व आदिवासी क्षेत्रे), ७ वे (३ सूची), ८ वे (२२ अधिकृत भाषा), ९ वे (जमीन सुधारणा कायदे), १० वे (पक्षांतर बंदी), ११ वे (पंचायत राज २९ विषय), १२ वे (नागरी संस्था १८ विषय)",
                                            titleEn: "Borrowed Sources & 12 Schedules: 1935 Act (Federal scheme, Judiciary); UK (Parliamentary system, Rule of Law); US (Fundamental Rights, Judicial Review); Ireland (DPSP); 12 Schedules: 1st (States/UTs), 2nd (Salaries), 3rd (Oaths), 4th (Rajya Sabha seats), 7th (Union/State/Concurrent lists), 8th (22 Languages), 10th (Anti-defection), 11th (Panchayats 29 items), 12th (Municipalities 18 items)",
                                            chips: ["जागतिक स्रोत (UK, USA, आयर्लंड)", "७ वे परिशिष्ट (३ सूची)", "८ वे परिशिष्ट (२२ भाषा)", "१० वे (पक्षांतर बंदी)", "११ वे (पंचायत राज)", "१२ वे (नागरी संस्था)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय राज्यघटना व राजकारण", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण ३ व ४: संविधानाची वैशिष्ट्ये व सरनामा" },
                                        { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ३: सरनामा व परिशिष्टे" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ३: संघराज्य व त्याचे राज्यक्षेत्र आणि नागरिकत्व
                        // =========================================================================
                        {
                            id: "gc_pol_c03",
                            code: "CP03",
                            section: "A",
                            slug: "union-and-territory-citizenship-articles-1-to-11",
                            nameMr: "संघराज्य व त्याचे राज्यक्षेत्र (कलम १ ते ४) आणि नागरिकत्व (कलम ५ ते ११)",
                            nameEn: "Union and Its Territory (Articles 1-4) & Citizenship Dynamics (Articles 5-11)",
                            name: "संघराज्य क्षेत्र व नागरिकत्व (Articles 1 to 11)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 2,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_pol_c03",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_pol_c02",
                            nextChapterId: "gc_pol_c04",
                            metaDescriptionMr: "कलम १ (राज्यांचा संघ India that is Bharat), कलम २ व ३ (नवीन राज्यांची निर्मिती, सीमा बदल), भाषावार प्रांतरचना आयोग (धर कमिशन, जेव्हीपी समिती, फाझल अली आयोग १९५३), आणि नागरिकत्व प्राप्ती व समाप्तीचे मार्ग.",
                            metaDescriptionEn: "Article 1 (Union of States), Articles 2 & 3 (Creation of new states, boundary alteration), Reorganisation Commissions (Dhar, JVP, Fazal Ali 1953), and Citizenship Act 1955 modes of acquisition and loss.",
                            notesJsonPath: "/data/notes/group_c/prelims/polity/c03_union_citizenship.json",
                            quizTag: "gc_pol_citizenship_01",
                            tags: ["Article 1 Union of States", "Article 3 State Reorganization", "Fazal Ali Commission 1953", "Citizenship Act 1955", "Single Citizenship"],
                            searchKeywords: ["article 1 union of states india that is bharat", "article 3 formation of new states simple majority", "state reorganisation commissions dhar jvp fazal ali 1953", "citizenship act 1955 birth descent registration naturalisation", "single citizenship borrowed from uk", "कलम १ राज्यांचा संघ", "कलम ३ नवीन राज्य निर्मिती", "फाझल अली आयोग १९५३", "नागरिकत्व कायदा १९५५", "एकल नागरिकत्व"],
                            topics: [
                                {
                                    id: "top_gc_p03_01",
                                    nameMr: "राज्यांची पुनर्रचना, संसदेचे अधिकार आणि नागरिकत्व प्राप्ती-समाप्ती",
                                    nameEn: "Territorial Integration, Parliamentary Jurisdiction & Citizenship Framework",
                                    subtopics: [
                                        {
                                            id: "st_gc_p03_01_01",
                                            titleMr: "संघराज्य व राज्यक्षेत्र (कलम १ ते ४): कलम १: 'इंडिया म्हणजेच भारत हा राज्यांचा संघ असेल' (Union of States - विनाशी राज्यांचा अविनाशी संघ); कलम २: नवीन राज्यांना संघराज्यात दाखल करून घेणे; कलम ३: अस्तित्वात असलेल्या राज्यांच्या सीमा बदलणे, क्षेत्र कमी-जास्त करणे किंवा नाव बदलणे (संसदेला साध्या बहुमताने अधिकार, संबंधित राज्य विधिमंडळाचा सल्ला राष्ट्रपतींवर बंधनकारक नसतो)",
                                            titleEn: "Union and Territory (Articles 1-4): Article 1 declares 'India, that is Bharat, shall be a Union of States' (Indestructible Union of destructible states); Article 2 allows admission of foreign territories; Article 3 empowers Parliament by simple majority to alter state boundaries or names without mandatory state concurrence",
                                            chips: ["कलम १ राज्यांचा संघ (Union of States)", "कलम २ नवीन राज्य दाखल", "कलम ३ सीमा व नाव बदल", "संसदेचे साधे बहुमत"]
                                        },
                                        {
                                            id: "st_gc_p03_01_02",
                                            titleMr: "भाषावार प्रांतरचना आयोग: १) एस. के. धर आयोग (१९४८ - भाषेऐवजी प्रशासकीय सोयीला प्राधान्य दिले); २) JVP समिती (१९४८ - जवाहरलाल नेहरू, वल्लभभाई पटेल, पट्टाभी सीतारामय्या - भाषावार तत्त्व नाकारले); पोटी श्रीरामुलू यांच्या ५६ दिवसांच्या उपोषणानंतर पहिले भाषावार राज्य 'आंध्र प्रदेश' (१ ऑक्टो १९५३); ३) फाझल अली आयोग (१९५३ - हृदयनाथ कुंझरू व के. एम. पणिककर सदस्य - ७ वी घटनादुरुस्ती १९५६ अन्वये १४ राज्ये व ६ केंद्रशासित प्रदेश स्थापन)",
                                            titleEn: "State Reorganisation Commissions: S.K. Dhar Commission (1948, rejected language basis); JVP Committee (1948, rejected linguistic states); Potti Sreeramulu fast led to Andhra 1st linguistic state (1 Oct 1953); Fazal Ali Commission (1953 with Kunzru & Panikkar) led to 7th Amendment 1956 (14 States & 6 UTs)",
                                            chips: ["धर आयोग १९४८", "JVP समिती", "आंध्र प्रदेश (पहिले भाषावार राज्य १९५३)", "फाझल अली आयोग १९५३", "७ वी दुरुस्ती १९५६"]
                                        },
                                        {
                                            id: "st_gc_p03_01_03",
                                            titleMr: "नागरिकत्व (कलम ५ ते ११): भाग २; संविधानाने भारतासाठी 'एकेरी नागरिकत्व' (Single Citizenship) दिले आहे; नागरिकत्व कायदा १९५५ अन्वये नागरिकत्व मिळवण्याचे ५ मार्ग: १) जन्माने, २) वंशपरंपरेने, ३) नोंदणीने, ४) स्वीकृतीने/नैसर्गिकीकरणाने, ५) भूप्रदेशाच्या विलीनीकरणाने; नागरिकत्व संपुष्टात येण्याचे ३ मार्ग: १) स्वेच्छेने त्याग करणे, २) दुसऱ्या देशाचे नागरिकत्व स्वीकारल्यास आपोआप संपुष्टात येणे, ३) सरकारकडून हिरावून घेणे",
                                            titleEn: "Citizenship Mechanics (Articles 5-11): Part II; Establishes Single Citizenship; Citizenship Act 1955 prescribes 5 modes of acquisition (Birth, Descent, Registration, Naturalisation, Incorporation of territory) and 3 modes of loss (Renunciation, Termination, Deprivation)",
                                            chips: ["एकेरी नागरिकत्व (UK कडून)", "नागरिकत्व कायदा १९५५", "५ मार्ग मिळवण्याचे", "३ मार्ग संपुष्टात येण्याचे"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय राज्यघटना व राजकारण", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण ५ व ६: संघराज्य व नागरिकत्व" },
                                        { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ४: राज्यक्षेत्र व नागरिकत्व" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ४: मूलभूत हक्क (कलम १२ ते ३५) व घटनात्मक उपाय
                        // =========================================================================
                        {
                            id: "gc_pol_c04",
                            code: "CP04",
                            section: "B",
                            slug: "fundamental-rights-articles-12-to-35-and-writs",
                            nameMr: "मूलभूत हक्क (कलम १२ ते ३५): ६ स्वातंत्र्ये, घटनात्मक उपाय व ५ रिट (Writs)",
                            nameEn: "Fundamental Rights (Articles 12-35): 6 Freedoms, Exceptions & Article 32 Writs",
                            name: "मूलभूत हक्क व रिट अधिकारक्षेत्र (Fundamental Rights & Writs)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_pol_c04",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_pol_c03",
                            nextChapterId: "gc_pol_c05",
                            metaDescriptionMr: "समानतेचा हक्क (कलम १४-१८), स्वातंत्र्याचा हक्क (कलम १९-२२), शोषणाविरुद्ध हक्क (कलम २३-२४), धार्मिक स्वातंत्र्य (कलम २५-२८), कलम २१ (जीवित व स्वातंत्र्य), कलम २१A (मोफत शिक्षण), आणि कलम ३२ (५ रिट प्राधिलेख: बंदीप्रत्यक्षीकरण, परमादेश, प्रतिषेध, उत्प्रेषण, अधिकारपृच्छा).",
                            metaDescriptionEn: "In-depth review of Articles 12-35: Right to Equality (14-18), Freedoms (19-22), Protection against Exploitation (23-24), Religious Freedom (25-28), Article 21 & 21A, and Article 32 Writs (Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto).",
                            notesJsonPath: "/data/notes/group_c/prelims/polity/c04_fundamental_rights.json",
                            quizTag: "gc_pol_fr_01",
                            tags: ["Fundamental Rights", "Article 14 Equality", "Article 19 Six Freedoms", "Article 21 Life Liberty", "Article 32 Writs", "Heart and Soul", "High-Weightage"],
                            searchKeywords: ["fundamental rights articles 12 to 35 part iii magna carta", "article 14 equality before law equal protection", "article 19 1 six freedoms speech assembly movement", "article 21 protection of life personal liberty puttaswamy privacy", "article 32 constitutional remedies heart and soul dr ambedkar", "five writs habeas corpus mandamus prohibition certiorari quo warranto", "मूलभूत हक्क कलम १२ ते ३५", "कलम १४ समानता", "कलम १९ भाषण स्वातंत्र्य", "कलम २१ जीवित स्वातंत्र्य", "कलम ३२ घटनात्मक उपाय ५ रिट", "बंदीप्रत्यक्षीकरण परमादेश"],
                            topics: [
                                {
                                    id: "top_gc_p04_01",
                                    nameMr: "समानता, स्वातंत्र्य, जीवित रक्षण आणि ५ रिट प्राधिलेख",
                                    nameEn: "Equality, Civil Freedoms, Personal Liberty & The Five Prerogative Writs",
                                    subtopics: [
                                        {
                                            id: "st_gc_p04_01_01",
                                            titleMr: "समानतेचा हक्क (कलम १४ ते १८): कलम १४: कायद्यापुढे समानता व कायद्याचे समान संरक्षण; कलम १५: धर्म, वंश, जात, लिंग किंवा जन्मस्थान यावरून भेदभावास बंदी (महिला, मुले व मागासवर्गीयांसाठी विशेष तरतुदी अपवाद); कलम १६: सार्वजनिक नोकऱ्यांमध्ये समान संधी (आरक्षण तरतुदी); कलम १७: अस्पृश्यता निर्मूलन (अस्पृश्यता निवारण कायदा १९५५ / नागरी हक्क संरक्षण कायदा); कलम १८: पदव्यांची समाप्ती (सैनिकी व शैक्षणिक पदव्या वगळून)",
                                            titleEn: "Right to Equality (Articles 14-18): Article 14 (Equality before Law & Equal Protection of Laws); Article 15 (Prohibition of discrimination with affirmative action caveats); Article 16 (Equal opportunity in public employment); Article 17 (Abolition of Untouchability); Article 18 (Abolition of Titles)",
                                            chips: ["कलम १४ कायद्यापुढे समानता", "कलम १५ भेदभावास बंदी", "कलम १६ नोकऱ्यांत समान संधी", "कलम १७ अस्पृश्यता निर्मूलन", "कलम १८ पदव्या समाप्ती"]
                                        },
                                        {
                                            id: "st_gc_p04_01_02",
                                            titleMr: "स्वातंत्र्याचा हक्क (कलम १९ ते २२) व जीवित रक्षण: कलम १९(१): नागरिकांना ६ मूलभूत स्वातंत्र्ये (भाषण-अभिव्यक्ती, शांततापूर्ण सभा, संघटना, संचार, वास्तव्य, व्यवसाय); कलम २०: गुन्ह्यांच्या दोषासिद्धीबाबत संरक्षण (पूर्वव्यापी फौजदारी कायद्यास बंदी, दुहेरी शिक्षा बंदी); कलम २१: कायद्याने प्रस्थापित केलेल्या पद्धतीशिवाय जीवित व व्यक्तिगत स्वातंत्र्यापासून वंचित ठेवता येणार नाही (पुट्टास्वामी खटला २०१७ - गोपनीयतेचा हक्क हा कलम २१ चा भाग); कलम २१A: ६ ते १४ वर्षे वयोगटातील मुलांना मोफत व सक्तीचे शिक्षण (८६ वी दुरुस्ती २००२)",
                                            titleEn: "Right to Freedom (Articles 19-22): Article 19(1) (Six democratic freedoms with reasonable restrictions); Article 20 (Protection against retrospective criminal laws and double jeopardy); Article 21 (Protection of Life & Personal Liberty; Right to Privacy under Puttaswamy 2017); Article 21A (Free and compulsory education 6-14 years via 86th Amendment 2002)",
                                            chips: ["कलम १९ (६ स्वातंत्र्ये)", "कलम २१ जीवित व स्वातंत्र्य", "निजता हक्क (Privacy Puttaswamy)", "कलम २१A मोफत शिक्षण (८६ वी दुरुस्ती)"]
                                        },
                                        {
                                            id: "st_gc_p04_01_03",
                                            titleMr: "धार्मिक स्वातंत्र्य व शोषणाविरुद्ध हक्क (कलम २३ ते २८): कलम २३: मानवी व्यापार व वेठबिगारीस बंदी; कलम २४: १४ वर्षांखालील बालकांना कारखाने किंवा धोकादायक कामांवर ठेवण्यास पूर्ण बंदी; कलम २५: सदसद्विवेकबुद्धीचे स्वातंत्र्य व धर्माचे आचरण-प्रसार; कलम २६: धार्मिक व्यवहारांचे व्यवस्थापन; कलम २७: विशिष्ट धर्माच्या संवर्धनासाठी कर देण्याची सक्ती करण्यास बंदी; कलम २८: शैक्षणिक संस्थांमध्ये धार्मिक शिक्षण देण्याबाबत बंधने",
                                            titleEn: "Exploitation & Religious Freedoms (Articles 23-28): Article 23 (Prohibition of human trafficking and forced labour); Article 24 (Ban on child labour below 14 years in hazardous industries); Article 25 (Freedom of conscience and free profession of religion); Article 27 (Freedom from taxation for religious promotion)",
                                            chips: ["कलम २३ वेठबिगारीस बंदी", "कलम २४ बालमजुरी बंदी", "कलम २५ धार्मिक स्वातंत्र्य", "कलम २७ धार्मिक कर सक्ती बंदी"]
                                        },
                                        {
                                            id: "st_gc_p04_01_04",
                                            titleMr: "घटनात्मक उपायांचा हक्क व ५ रिट (कलम ३२ व २२६): डॉ. आंबेडकरांच्या मते कलम ३२ हा 'संविधानाचा आत्मा व हृदय' आहे; सर्वोच्च न्यायालयाला (कलम ३२) व उच्च न्यायालयाला (कलम २२६) मूलभूत हक्कांच्या संरक्षणासाठी ५ प्राधिलेख (Writs) काढण्याचा अधिकार: १) बंदीप्रत्यक्षीकरण (Habeas Corpus - बेकायदेशीर अटकेतून सुटका), २) परमादेश (Mandamus - कर्तव्य बजावण्याचा आदेश), ३) प्रतिषेध (Prohibition - कनिष्ठ न्यायालयाला अधिकार क्षेत्राबाहेर जाण्यास मनाई), ४) उत्प्रेषण (Certiorari - खटला स्वतःकडे वर्ग करून घेणे), ५) अधिकारपृच्छा (Quo-Warranto - पदाचा कायदेशीर अधिकार विचारणे)",
                                            titleEn: "Constitutional Remedies & 5 Writs (Articles 32 & 226): Dr. Ambedkar hailed Article 32 as 'Heart and Soul' of the Constitution; Supreme Court (Art 32) and High Courts (Art 226) issue 5 Writs: 1) Habeas Corpus (Produce the body against unlawful detention), 2) Mandamus (We command public duty), 3) Prohibition (Stop lower courts), 4) Certiorari (Quash and certify transfer), 5) Quo-Warranto (By what warrant)",
                                            chips: ["कलम ३२ (संविधानाचा आत्मा)", "बंदीप्रत्यक्षीकरण (Habeas Corpus)", "परमादेश (Mandamus)", "प्रतिषेध (Prohibition)", "उत्प्रेषण (Certiorari)", "अधिकारपृच्छा (Quo-Warranto)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय राज्यघटना व राजकारण", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण ७: मूलभूत हक्क" },
                                        { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ५: मूलभूत हक्क व रिट्स" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ५: राज्य धोरणाची मार्गदर्शक तत्त्वे (DPSP) व मूलभूत कर्तव्ये
                        // =========================================================================
                        {
                            id: "gc_pol_c05",
                            code: "CP05",
                            section: "B",
                            slug: "directive-principles-of-state-policy-and-fundamental-duties",
                            nameMr: "मार्गदर्शक तत्त्वे (DPSP - कलम ३६ ते ५१) आणि मूलभूत कर्तव्ये (कलम ५१A)",
                            nameEn: "Directive Principles of State Policy (Part IV) & Fundamental Duties (Part IVA)",
                            name: "DPSP व मूलभूत कर्तव्ये (DPSP & Fundamental Duties)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_pol_c05",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_pol_c04",
                            nextChapterId: "gc_pol_c06",
                            metaDescriptionMr: "DPSP चे ३ वर्गीकरण (समाजवादी, गांधीवादी, उदारमतवादी), कलम ४० (ग्रामपंचायत), कलम ४४ (समान नागरी कायदा UCC), कलम ५० (न्यायव्यवस्था वेगळी), सुवर्णानंद सिंह समिती (४२ वी दुरुस्ती १९७६), आणि ११ मूलभूत कर्तव्ये (८६ वी दुरुस्ती २००२).",
                            metaDescriptionEn: "DPSP classification (Socialistic, Gandhian, Liberal-Intellectual), Article 40 Village Panchayats, Article 44 UCC, Article 50 Separation of Judiciary, Swaran Singh Committee (42nd Amendment 1976), and 11 Fundamental Duties under Article 51A.",
                            notesJsonPath: "/data/notes/group_c/prelims/polity/c05_dpsp_duties.json",
                            quizTag: "gc_pol_dpsp_01",
                            tags: ["DPSP Articles 36-51", "Article 40 Gram Panchayat", "Article 44 Uniform Civil Code", "Article 51A Fundamental Duties", "Swaran Singh Committee", "High-Weightage"],
                            searchKeywords: ["dpsp part iv articles 36 to 51 borrowed from ireland", "article 40 organization of village panchayats gandhian", "article 44 uniform civil code ucc", "article 50 separation of judiciary from executive", "fundamental duties article 51a part iva swaran singh committee 1976", "86th amendment act 2002 11th fundamental duty education", "मार्गदर्शक तत्त्वे कलम ३६ ते ५१", "कलम ४० ग्रामपंचायत", "कलम ४४ समान नागरी कायदा", "मूलभूत कर्तव्ये कलम ५१A स्वर्णसिंग समिती", "८६ वी घटनादुरुस्ती"],
                            topics: [
                                {
                                    id: "top_gc_p05_01",
                                    nameMr: "DPSP तत्त्वज्ञान, वर्गीकरण, महत्त्वाच्या सुधारणा आणि मूलभूत कर्तव्ये",
                                    nameEn: "DPSP Categorization, Judicial Harmonization & Article 51A Citizen Duties",
                                    subtopics: [
                                        {
                                            id: "st_gc_p05_01_01",
                                            titleMr: "DPSP संकल्पना व वर्गीकरण (कलम ३६ ते ५१): भाग ४; आयर्लंडच्या राज्यघटनेवरून स्वीकार; कल्याणकारी राज्याची (Welfare State) स्थापना करणे हे उद्दिष्ट; हे हक्क न्यायप्रविष्ट नाहीत (Non-justiciable कलम ३७); ३ विचारसरणींमध्ये वर्गीकरण: १) समाजवादी (कलम ३८, ३९, ३९A मोफत विधी सहाय्य, ४१, ४२, ४३); २) गांधीवादी (कलम ४० ग्रामपंचायतींचे संघटन, ४३ कुटीर उद्योग, ४६ दुर्बल घटकांचे हित, ४७ दारूबंदी, ४८ गोवंश हत्या बंदी); ३) उदारमतवादी-बुद्धिवादी (कलम ४४ समान नागरी कायदा UCC, ४५, ४८A पर्यावरण संरक्षण, ५० न्यायव्यवस्था कार्यकारी मंडळापासून वेगळी, ५१ आंतरराष्ट्रीय शांतता)",
                                            titleEn: "DPSP Dynamics & 3-Tier Classification: Part IV (Articles 36-51); Borrowed from Ireland; Establishes Socio-Economic Welfare State; Non-justiciable (Art 37); Classified into: 1) Socialistic (Arts 38, 39, 39A Free Legal Aid, 41, 42, 43), 2) Gandhian (Art 40 Panchayats, 43 Cottage industries, 46 SC/ST protection, 47 Prohibition of liquor, 48 Cow slaughter ban), 3) Liberal-Intellectual (Art 44 Uniform Civil Code, 48A Environment, 50 Separation of Judiciary, 51 International Peace)",
                                            chips: ["आयर्लंडकडून DPSP (कल्याणकारी राज्य)", "कलम ३९A (मोफत विधी सहाय्य)", "कलम ४० (ग्रामपंचायत संघटन)", "कलम ४४ (समान नागरी कायदा UCC)", "कलम ५० (न्यायव्यवस्था पृथक्करण)"]
                                        },
                                        {
                                            id: "st_gc_p05_01_02",
                                            titleMr: "मूलभूत कर्तव्ये (Fundamental Duties - कलम ५१A): भाग ४A; मूळ संविधानात कर्तव्यांचा समावेश नव्हता; सरदार स्वर्णसिंग समितीच्या (१९७६) शिफारशीनुसार ४२ व्या घटनादुरुस्तीने (१९७६) १० मूलभूत कर्तव्ये जोडली (रशिया/USSR कडून प्रेरणा); ८६ व्या घटनादुरुस्तीने (२००२) ११ वे कर्तव्य जोडले: ६ ते १४ वर्षे वयोगटातील पाल्यास शिक्षणाची संधी उपलब्ध करून देणे हे पालकांचे कर्तव्य असेल; कर्तव्ये न्यायप्रविष्ट नाहीत (वर्मा समिती १९९९)",
                                            titleEn: "Fundamental Duties (Article 51A): Part IVA; Not in original constitution; Added via 42nd Amendment 1976 based on Swaran Singh Committee recommendations (10 duties borrowed from USSR); 86th Amendment 2002 added 11th duty (Parent/guardian duty to educate child 6-14 years); Non-justiciable but legally enforceable via statutory enactments (Verma Committee 1999)",
                                            chips: ["कलम ५१A मूलभूत कर्तव्ये", "स्वर्णसिंग समिती १९७६", "४२ वी दुरुस्ती (१० कर्तव्ये)", "८६ वी दुरुस्ती २००२ (११ वे कर्तव्य)", "USSR कडून स्वीकार"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय राज्यघटना व राजकारण", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण ८ व ९: DPSP व मूलभूत कर्तव्ये" },
                                        { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ६: मार्गदर्शक तत्त्वे व कर्तव्ये" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ६: भारताचे राष्ट्रपती व उपराष्ट्रपती
                        // =========================================================================
                        {
                            id: "gc_pol_c06",
                            code: "CP06",
                            section: "C",
                            slug: "president-and-vice-president-of-india",
                            nameMr: "भारताचे राष्ट्रपती (कलम ५२ ते ६२) आणि उपराष्ट्रपती (कलम ६३ ते ७१)",
                            nameEn: "President of India (Powers, Election, Impeachment) & Vice-President",
                            name: "राष्ट्रपती व उपराष्ट्रपती (President & Vice-President)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_pol_c06",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_pol_c05",
                            nextChapterId: "gc_pol_c07",
                            metaDescriptionMr: "राष्ट्रपती निवडणूक पद्धत (इलेक्टोरल कॉलेज, मतांचे मूल्य), महाभियोग प्रक्रिया (कलम ६१), वटहुकूम अधिकार (कलम १२३), दयेचा अधिकार (कलम ७२), आणीबाणी अधिकार (कलम ३५२, ३५६, ३६०), आणि उपराष्ट्रपती (राज्यसभेचे पदसिद्ध सभापती).",
                            metaDescriptionEn: "Presidential Electoral College, Impeachment under Article 61, Ordinance Power (Art 123), Pardoning Power (Art 72), Emergency Powers (Arts 352, 356, 360), and Vice-President as Ex-officio Chairman of Rajya Sabha.",
                            notesJsonPath: "/data/notes/group_c/prelims/polity/c06_president_vice_president.json",
                            quizTag: "gc_pol_president_01",
                            tags: ["President Article 52", "Electoral College", "Article 61 Impeachment", "Article 72 Pardoning", "Article 123 Ordinance", "Vice President", "High-Weightage"],
                            searchKeywords: ["president of india election electoral college mps mlas value of vote", "article 61 impeachment procedure 2 3rd total membership", "article 72 pardoning power pardon commute remit respite reprieve", "article 123 ordinance making power maximum life 6 months 6 weeks", "vice president article 63 ex officio chairman rajya sabha article 64", "राष्ट्रपती निवडणूक पद्धत", "कलम ६१ महाभियोग प्रक्रिया", "कलम ७२ दयेचा अधिकार", "कलम १२३ वटहुकूम अधिकार", "उपराष्ट्रपती राज्यसभा सभापती"],
                            topics: [
                                {
                                    id: "top_gc_p06_01",
                                    nameMr: "राष्ट्रपतींची निवडणूक, महाभियोग, वटहुकूम, दयेचे अधिकार व उपराष्ट्रपती पद",
                                    nameEn: "Presidential Electoral College, Impeachment Architecture, Ordinances & Vice-Presidency",
                                    subtopics: [
                                        {
                                            id: "st_gc_p06_01_01",
                                            titleMr: "राष्ट्रपती निवडणूक पद्धत (कलम ५४ व ५५): राष्ट्रपतींची निवडणूक अप्रत्यक्षपणे निर्वाचक गणाद्वारे (Electoral College) होते; निर्वाचक गणात समाविष्ट: १) संसदेच्या दोन्ही सभागृहांचे निर्वाचित सदस्य (लोकसभा व राज्यसभा), २) घटक राज्यांच्या विधानसभांचे निर्वाचित आमदार (MLAs), ३) दिल्ली, पुद्दुचेरी व जम्मू-काश्मीर विधानसभांचे निर्वाचित सदस्य; (नामनिर्देशित सदस्यांना मतदानाचा अधिकार नाही); प्रमाणशीर प्रतिनिधित्वाची एकल संक्रमणीय गुप्त मतदान पद्धत; आमदारांच्या व खासदारांच्या मतांचे मूल्य सूत्र",
                                            titleEn: "Presidential Electoral College (Articles 54 & 55): Elected indirectly by Electoral College comprising: 1) Elected MPs of Lok Sabha & Rajya Sabha, 2) Elected MLAs of State Legislative Assemblies, 3) Elected MLAs of Delhi & Puducherry UTs; Nominated members cannot vote; System of proportional representation by single transferable vote",
                                            chips: ["कलम ५४ निर्वाचक गण (Electoral College)", "केवळ निर्वाचित सदस्य", "नामनिर्देशित सदस्यांना बंदी", "एकल संक्रमणीय मतदान"]
                                        },
                                        {
                                            id: "st_gc_p06_01_02",
                                            titleMr: "महाभियोग प्रक्रिया (कलम ६१): संविधानाचा भंग केल्याच्या एकाच कारणावरून महाभियोग चालवता येतो; संसदेच्या कोणत्याही एका सभागृहात महाभियोगाचा ठराव मांडता येतो (सभागृहातील किमान १/४ सदस्यांच्या स्वाक्षऱ्या आवश्यक); १४ दिवसांची पूर्वसूचना राष्ट्रपतींना देणे अनिवार्य; दोन्ही सभागृहांमध्ये स्वतंत्रपणे एकूण सदस्य संख्येच्या २/३ बहुमताने (Special Majority) ठराव संमत झाल्यास राष्ट्रपती तात्काळ पदमुक्त होतात; (महाभियोगात नामनिर्देशित सदस्यही भाग घेतात)",
                                            titleEn: "Impeachment Mechanism (Article 61): Sole ground: 'Violation of the Constitution'; Charges initiated in either House (14 days advance notice signed by 1/4th members); Requires special majority of 2/3rd of the TOTAL membership of each House independently; Nominated MPs participate in impeachment",
                                            chips: ["कलम ६१ महाभियोग प्रक्रिया", "संविधानाचा भंग (एकमेव कारण)", "१४ दिवसांची नोटीस", "एकूण सदस्यसंख्येच्या २/३ बहुमत"]
                                        },
                                        {
                                            id: "st_gc_p06_01_03",
                                            titleMr: "वटहुकूम व दयेचा अधिकार: १) वटहुकूम काढण्याचा अधिकार (कलम १२३): संसदेचे अधिवेशन चालू नसताना राष्ट्रपती वटहुकूम जारी करू शकतात; संसदेच्या कायद्याइतकेच सामर्थ्य; संसदेचे अधिवेशन सुरू झाल्यापासून ६ आठवड्यांच्या आत मंजुरी आवश्यक (वटहुकुमाचे कमाल आयुष्य ६ महिने ६ आठवडे); २) दयेचा अधिकार (कलम ७२): केंद्रीय कायद्याविरुद्धच्या गुन्ह्यांसाठी, कोर्ट मार्शल (लष्करी अदालत) आणि फाशीच्या शिक्षेबाबत क्षमा (Pardon), तहकुबी (Reprieve), सूट (Respite), विराम (Remission), लघुकरण (Commutation) करण्याचे अधिकार",
                                            titleEn: "Ordinance & Clemency Powers: Article 123 empowers President to promulgate ordinances when either House is in recess (maximum life 6 months and 6 weeks); Article 72 pardoning power over Union laws, court-martial, and death sentences (Pardon, Commutation, Remission, Respite, Reprieve)",
                                            chips: ["कलम १२३ वटहुकूम (कमाल ६ महिने ६ आठवडे)", "कलम ७२ दयेचा अधिकार", "फाशी क्षमा करण्याचा अधिकार", "कोर्ट मार्शल"]
                                        },
                                        {
                                            id: "st_gc_p06_01_04",
                                            titleMr: "उपराष्ट्रपती (कलम ६३ ते ७१): देशातील दुसऱ्या क्रमांकाचे सर्वोच्च पद; निवडणूक संसदेच्या दोन्ही सभागृहांच्या सर्व सदस्यांकडून (निर्वाचित + नामनिर्देशित) होते (विधानसभा आमदारांना मतदानाचा अधिकार नसतो); उपराष्ट्रपती हे राज्यसभेचे 'पदसिद्ध सभापती' (Ex-officio Chairman कलम ६४) असतात; राष्ट्रपतींचे पद रिक्त झाल्यास कमाल ६ महिन्यांपर्यंत हंगामी राष्ट्रपती म्हणून काम पाहू शकतात",
                                            titleEn: "Vice-President (Articles 63-71): Second highest constitutional office; Elected by electoral college of ALL MPs (both elected and nominated; MLAs excluded); Ex-officio Chairman of Rajya Sabha (Art 64); Acts as President during vacancies for a maximum period of 6 months",
                                            chips: ["उपराष्ट्रपती कलम ६३", "राज्यसभेचे पदसिद्ध सभापती (कलम ६४)", "निवडणुकीत सर्व खासदार सहभागी", "हंगामी राष्ट्रपती (कमाल ६ महिने)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय राज्यघटना व राजकारण", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण १७ व १८: राष्ट्रपती व उपराष्ट्रपती" },
                                        { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ७: केंद्रीय कार्यकारी मंडळ" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ७: पंतप्रधान, केंद्रीय मंत्रिमंडळ व महान्यायवादी
                        // =========================================================================
                        {
                            id: "gc_pol_c07",
                            code: "CP07",
                            section: "C",
                            slug: "prime-minister-union-council-of-ministers-and-attorney-general",
                            nameMr: "पंतप्रधान, केंद्रीय मंत्रिमंडळ (कलम ७४, ७५) आणि भारताचे महान्यायवादी (कलम ७६)",
                            nameEn: "Prime Minister, Union Council of Ministers & Attorney General of India (Art 76)",
                            name: "पंतप्रधान, मंत्रिमंडळ व महान्यायवादी",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 2,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_pol_c07",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_pol_c06",
                            nextChapterId: "gc_pol_c08",
                            metaDescriptionMr: "पंतप्रधान (शासनाचे प्रमुख De Facto Head), केंद्रीय मंत्रिमंडळाचे सामुदायिक उत्तरदायित्व (कलम ७५(३) - लोकसभेला जबाबदार), ९१ वी घटनादुरुस्ती (मंत्र्यांची कमाल संख्या १५%), आणि महान्यायवादी (कलम ७६ - देशातील सर्वोच्च कायदे अधिकारी).",
                            metaDescriptionEn: "Prime Minister as real executive, Council of Ministers collective responsibility to Lok Sabha (Art 75(3)), 91st Amendment 15% cabinet ceiling, and Attorney General of India (Article 76, supreme law officer).",
                            notesJsonPath: "/data/notes/group_c/prelims/polity/c07_pm_cabinet_ag.json",
                            quizTag: "gc_pol_pm_01",
                            tags: ["Prime Minister De Facto", "Article 75 3 Collective Responsibility", "91st Amendment 15 Percent Ceiling", "Attorney General Article 76"],
                            searchKeywords: ["prime minister real executive de facto vs president de jure", "article 74 aid and advice of council of ministers binding", "article 75 3 collective responsibility of cabinet to lok sabha", "91st constitutional amendment act 2003 ministerial limit 15 percent", "attorney general of india article 76 qualification supreme court judge", "पंतप्रधान व मंत्रिमंडळ", "कलम ७५(३) सामुदायिक जबाबदारी", "९१ वी दुरुस्ती १५% मर्यादा", "महान्यायवादी कलम ७६"],
                            topics: [
                                {
                                    id: "top_gc_p07_01",
                                    nameMr: "पंतप्रधान स्थान, मंत्रिमंडळाचे उत्तरदायित्व आणि महान्यायवादी अधिकार",
                                    nameEn: "Prime Ministerial Leadership, Cabinet Accountability & Attorney General Mandate",
                                    subtopics: [
                                        {
                                            id: "st_gc_p07_01_01",
                                            titleMr: "पंतप्रधान व मंत्रिमंडळ रचना: राष्ट्रपती हे नामधारी प्रमुख (De Jure) तर पंतप्रधान हे वास्तव कार्यकारी प्रमुख (De Facto) असतात; कलम ७४: राष्ट्रपतींना सहाय्य व सल्ला देण्यासाठी पंतप्रधानांच्या नेतृत्वाखाली मंत्रिमंडळ असेल (४४ व्या दुरुस्तीनुसार सल्ला एकदा फेरविचारासाठी पाठवता येतो, परंतु फेरविचारानंतरचा सल्ला बंधनकारक); कलम ७५: पंतप्रधानांची नियुक्ती राष्ट्रपती करतात व पंतप्रधानांच्या सल्ल्याने इतर मंत्र्यांची नियुक्ती होते; ९१ वी घटनादुरुस्ती (२००३): मंत्रिमंडळातील एकूण मंत्र्यांची संख्या (पंतप्रधानांसह) लोकसभेच्या एकूण सदस्य संख्येच्या १५% पेक्षा जास्त असणार नाही",
                                            titleEn: "Prime Minister & Council of Ministers: President is De Jure head while PM is De Facto real executive; Article 74 (Binding aid and advice of Council of Ministers); Article 75 (PM appointed by President; ministers appointed on PM advice); 91st Constitutional Amendment 2003 capped Council of Ministers at 15% of Lok Sabha strength",
                                            chips: ["पंतप्रधान वास्तव प्रमुख (De Facto)", "कलम ७४ (सल्ला बंधनकारक)", "९१ वी दुरुस्ती १५% कमाल मर्यादा", "मंत्र्यांची नियुक्ती"]
                                        },
                                        {
                                            id: "st_gc_p07_01_02",
                                            titleMr: "सामुदायिक उत्तरदायित्व (Collective Responsibility): कलम ७५(३) नुसार मंत्रिमंडळ हे 'लोकसभेला सामुदायिकरीत्या जबाबदार' असते (संसदेला नव्हे); लोकसभेत अविश्वास ठराव (No-Confidence Motion) संमत झाल्यास संपूर्ण मंत्रिमंडळाला राजीनामा द्यावा लागतो; 'ते एकत्र पोहतात आणि एकत्र बुडतात' (They swim and sink together); वैयक्तिक उत्तरदायित्व: कलम ७५(२) नुसार मंत्री राष्ट्रपतींची मर्जी असेपर्यंत (Pleasure of President) पदावर राहतात",
                                            titleEn: "Collective Responsibility (Article 75(3)): Council of Ministers is collectively responsible to Lok Sabha alone; Defeat on a No-Confidence Motion forces the entire cabinet to resign; Individual responsibility: Ministers hold office during the pleasure of the President (Art 75(2))",
                                            chips: ["कलम ७५(३) सामुदायिक जबाबदारी", "केवळ लोकसभेला जबाबदार", "अविश्वास ठराव राजीनामा", "एकत्र पोहतात एकत्र बुडतात"]
                                        },
                                        {
                                            id: "st_gc_p07_01_03",
                                            titleMr: "भारताचे महान्यायवादी (Attorney General of India - कलम ७६): देशातील सर्वोच्च कायदेविषयक अधिकारी; नियुक्ती राष्ट्रपतींकडून; पात्रता: सर्वोच्च न्यायालयाचा न्यायाधीश होण्यास पात्र असणारी व्यक्ती; राष्ट्रपतींची मर्जी असेपर्यंत पदावर राहतात; अधिकार: संसदेच्या दोन्ही सभागृहांच्या कामकाजात बोलण्याचा व भाग घेण्याचा अधिकार आहे, परंतु मतदान करण्याचा अधिकार नाही (कलम ८८); देशातील कोणत्याही न्यायालयात उपस्थित राहण्याचा अधिकार (Right of Audience)",
                                            titleEn: "Attorney General of India (Article 76): Chief legal advisor to Union Government; Appointed by President; Qualified to be Supreme Court judge; Holds office during presidential pleasure; Article 88 grants right to speak and take part in parliamentary proceedings without voting rights",
                                            chips: ["महान्यायवादी कलम ७६ (सर्वोच्च कायदे अधिकारी)", "सर्वोच्च न्यायालय न्यायाधीश पात्रता", "संसदेत बोलण्याचा अधिकार पण मतदानाचा नाही (कलम ८८)", "राष्ट्रपतींची मर्जी"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय राज्यघटना व राजकारण", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण १९, २० व २१: पंतप्रधान, मंत्रिमंडळ व महान्यायवादी" },
                                        { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ७: केंद्रीय कार्यकारी मंडळ" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ८: राज्यपाल, मुख्यमंत्री व महाधिवक्ता
                        // =========================================================================
                        {
                            id: "gc_pol_c08",
                            code: "CP08",
                            section: "C",
                            slug: "governor-chief-minister-state-council-and-advocate-general",
                            nameMr: "राज्यपाल (कलम १५३ ते १६१), मुख्यमंत्री व महाधिवक्ता (कलम १६५)",
                            nameEn: "Governor (Powers & Discretion), Chief Minister & Advocate General of Maharashtra",
                            name: "राज्यपाल, मुख्यमंत्री व महाधिवक्ता",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_pol_c08",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_pol_c07",
                            nextChapterId: "gc_pol_c09",
                            metaDescriptionMr: "राज्यपाल नियुक्ती (कलम १५५, राष्ट्रपतींची मर्जी), स्वेच्छाधीन अधिकार (कलम १६३), वटहुकूम अधिकार (कलम २१३), राष्ट्रपती राजवट शिफारस (कलम ३५६), मुख्यमंत्री कार्ये, आणि महाराष्ट्राचे महाधिवक्ता (कलम १६५).",
                            metaDescriptionEn: "Governor appointment (Art 155), Discretionary powers (Art 163), Ordinance power (Art 213), Art 356 recommendations, Chief Minister leadership, and Advocate General of State (Article 165).",
                            notesJsonPath: "/data/notes/group_c/prelims/polity/c08_governor_cm_advocate_general.json",
                            quizTag: "gc_pol_governor_01",
                            tags: ["Governor Article 153", "Discretionary Powers 163", "Ordinance 213", "Article 356 Presidents Rule", "Advocate General Article 165", "High-Weightage"],
                            searchKeywords: ["governor appointment article 155 tenure pleasure of president", "article 163 discretionary powers of governor", "article 213 ordinance making power of governor", "article 356 recommendation of presidents rule breakdown of machinery", "advocate general of state article 165 high court judge qualification", "राज्यपाल पद कलम १५३", "स्वेच्छाधीन अधिकार कलम १६३", "वटहुकूम कलम २१३", "कलम ३५६ राष्ट्रपती राजवट", "महाधिवक्ता कलम १६५"],
                            topics: [
                                {
                                    id: "top_gc_p08_01",
                                    nameMr: "राज्यपाल पद, स्वेच्छाधीन अधिकार, वटहुकूम आणि महाधिवक्ता",
                                    nameEn: "Gubernatorial Discretion, Legislative Powers & Advocate General Office",
                                    subtopics: [
                                        {
                                            id: "st_gc_p08_01_01",
                                            titleMr: "राज्यपाल पद व नियुक्ती (कलम १५३ ते १५६): प्रत्येक राज्यासाठी एक राज्यपाल असेल (७ व्या घटनादुरुस्तीनुसार एकाच व्यक्तीची दोन किंवा अधिक राज्यांसाठी राज्यपाल म्हणून नियुक्ती होऊ शकते); नियुक्ती राष्ट्रपतींद्वारे; कार्यकाळ राष्ट्रपतींची मर्जी असेपर्यंत (कलम १५६); पात्रता: भारताचा नागरिक असावा, वयाची ३५ वर्षे पूर्ण असावीत; राज्यपाल हे राज्याचे घटनात्मक प्रमुख तसेच केंद्राचे प्रतिनिधी म्हणून दुहेरी भूमिका बजावतात",
                                            titleEn: "Governor Appointment (Articles 153-156): Article 153 provisions; 7th Amendment 1956 enabled one person to act as Governor for multiple states; Appointed by President; Holds office during pleasure of President; Minimum age 35 years; Serves dual role as constitutional head and Union agent",
                                            chips: ["राज्यपाल कलम १५३", "राष्ट्रपतींची मर्जी (कलम १५६)", "किमान वय ३५ वर्षे", "दुहेरी भूमिका (केंद्राचा प्रतिनिधी)"]
                                        },
                                        {
                                            id: "st_gc_p08_01_02",
                                            titleMr: "स्वेच्छाधीन अधिकार (कलम १६३) व वटहुकूम: राष्ट्रपतींपेक्षा राज्यपालांना संविधानात स्पष्ट स्वेच्छाधीन अधिकार (Discretionary Powers) आहेत; कलम १६३ नुसार राज्यपाल आपल्या स्वेच्छेने निर्णय घेऊ शकतात व त्या निर्णयाला न्यायालयात आव्हान देता येत नाही; त्रिशंकू विधानसभेत मुख्यमंत्री निवड, बहुमताची चाचणी घेणे, विधेयक राष्ट्रपतींच्या विचारार्थ राखून ठेवणे (कलम २००); कलम २१३: विधिमंडळाचे अधिवेशन चालू नसताना वटहुकूम काढण्याचा अधिकार (कमाल ६ महिने ६ आठवडे); कलम ३५६: राष्ट्रपती राजवटीची शिफारस करणे",
                                            titleEn: "Discretionary & Legislative Powers: Article 163 grants constitutional discretion (unquestionable in court of law); Discretion in hung assemblies, floor tests, and reserving bills for President (Art 200); Article 213 (Ordinance making power during legislative recess); Article 356 reports",
                                            chips: ["स्वेच्छाधीन अधिकार कलम १६३", "विधेयक राखून ठेवणे (कलम २००)", "वटहुकूम अधिकार कलम २१३", "राष्ट्रपती राजवट शिफारस ३५६"]
                                        },
                                        {
                                            id: "st_gc_p08_01_03",
                                            titleMr: "राज्याचे महाधिवक्ता (Advocate General - कलम १६५): राज्याचा सर्वोच्च कायदेविषयक अधिकारी; नियुक्ती राज्यपालाकडून; पात्रता: उच्च न्यायालयाचा न्यायाधीश होण्यास पात्र असणारी व्यक्ती; राज्यपालांची मर्जी असेपर्यंत पदावर राहतात; अधिकार: राज्य विधिमंडळाच्या दोन्ही सभागृहांत बोलण्याचा व भाग घेण्याचा अधिकार, परंतु मतदानाचा अधिकार नाही (कलम १७७)",
                                            titleEn: "Advocate General of the State (Article 165): Highest law officer of the state government; Appointed by Governor; Qualified to be High Court judge; Holds office during pleasure of Governor; Article 177 confers right to speak in State Legislature without voting rights",
                                            chips: ["महाधिवक्ता कलम १६५", "उच्च न्यायालय न्यायाधीश पात्रता", "विधिमंडळात बोलण्याचा अधिकार (कलम १७७)", "राज्यपालांची मर्जी"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय राज्यघटना व राजकारण", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण ३०, ३१ व ३३: राज्यपाल, मुख्यमंत्री व महाधिवक्ता" },
                                        { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ८: राज्य कार्यकारी मंडळ" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ९: भारतीय संसद: लोकसभा, राज्यसभा व कामकाज
                        // =========================================================================
                        {
                            id: "gc_pol_c09",
                            code: "CP09",
                            section: "D",
                            slug: "parliament-of-india-lok-sabha-rajya-sabha-and-presiding-officers",
                            nameMr: "भारतीय संसद: राज्यसभा, लोकसभा, कामकाज पद्धती आणि पीठासीन अधिकारी",
                            nameEn: "Parliament of India: Rajya Sabha, Lok Sabha, Proceedings & Presiding Officers",
                            name: "संसद: लोकसभा, राज्यसभा व कामकाज",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_pol_c09",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_pol_c08",
                            nextChapterId: "gc_pol_c10",
                            metaDescriptionMr: "संसदेची रचना (कलम ७९), राज्यसभा (२५० कमाल, महाराष्ट्रातून १९ खासदार), लोकसभा (५४३ निर्वाचित, महाराष्ट्रातून ४८ खासदार), लोकसभा अध्यक्ष व उपाध्यक्ष (कलम ९३), प्रश्नोत्तरे तास, शून्य प्रहर, आणि गणसंख्या (Quorum १/१०).",
                            metaDescriptionEn: "Parliament setup (Art 79), Rajya Sabha (250 cap, 19 from MH), Lok Sabha (543 elected, 48 from MH), Speaker & Deputy Speaker (Art 93), Question Hour, Zero Hour, and Quorum (1/10th).",
                            notesJsonPath: "/data/notes/group_c/prelims/polity/c09_parliament_structure.json",
                            quizTag: "gc_pol_parl_struct_01",
                            tags: ["Parliament Article 79", "Lok Sabha 543", "Rajya Sabha 250", "Speaker Powers", "Question Hour Zero Hour", "Quorum 1 10th", "High-Weightage"],
                            searchKeywords: ["parliament composition article 79 president ls rs", "rajya sabha permanent house 6 years 1 3rd retire biennial 19 seats mh", "lok sabha 543 elected members 48 seats maharashtra 2nd highest", "speaker of lok sabha casting vote money bill certification", "question hour zero hour adjournment sine die", "quorum 1 10th membership article 100", "संसद रचना कलम ७९", "लोकसभा ५४३ खासदार (महाराष्ट्र ४८ जागा)", "राज्यसभा २५० (महाराष्ट्र १९ जागा)", "लोकसभा अध्यक्ष अधिकार", "प्रश्नोत्तरांचा तास शून्य प्रहर", "कोरम १/१०"],
                            topics: [
                                {
                                    id: "top_gc_p09_01",
                                    nameMr: "संसदेची सभागृहे, खासदारांची रचना, पीठासीन अधिकारी आणि कामकाजाचे नियम",
                                    nameEn: "Bicameral Chambers, Seat Distribution, Presiding Officers & Parliamentary Devices",
                                    subtopics: [
                                        {
                                            id: "st_gc_p09_01_01",
                                            titleMr: "संसदेची रचना व सभागृहे (कलम ७९, ८०, ८१): कलम ७९: संसदेमध्ये राष्ट्रपती, राज्यसभा व लोकसभा यांचा समावेश होतो; १) राज्यसभा (कलम ८०): वरिष्ठ व स्थायी सभागृह (कधीही विसर्जित होत नाही; १/३ सदस्य दर २ वर्षांनी निवृत्त, कार्यकाळ ६ वर्षे); कमाल सदस्य २५० (२३८ निर्वाचित + १२ राष्ट्रपती नामनिर्देशित - साहित्य, विज्ञान, कला, समाजसेवा); महाराष्ट्रातून १९ खासदार राज्यसभेत जातात; २) लोकसभा (कलम ८१): कनिष्ठ व लोकांचे सभागृह; कमाल ५५० निर्वाचित सदस्य (१०४ व्या दुरुस्तीने अँग्लो-इंडियन २ जागा रद्द); सध्या ५४३ निर्वाचित सदस्य; महाराष्ट्रातून ४८ खासदार लोकसभेत निवडून जातात (उत्तर प्रदेशनंतर देशात सर्वाधिक जागा)",
                                            titleEn: "Parliament Composition (Articles 79-81): Article 79 comprises President, Council of States (Rajya Sabha), and House of the People (Lok Sabha); Rajya Sabha (Art 80: max 250, permanent chamber, 6-year tenure, 1/3rd retire biennially, 12 nominated; Maharashtra has 19 seats); Lok Sabha (Art 81: 543 elected members post-104th Amendment abolishing Anglo-Indian quotas; Maharashtra has 48 seats - second highest in India)",
                                            chips: ["संसद कलम ७९ (राष्ट्रपती + LS + RS)", "राज्यसभा स्थायी (महाराष्ट्र १९ जागा)", "लोकसभा ५४३ (महाराष्ट्र ४८ जागा)", "१०४ वी दुरुस्ती अँग्लो इंडियन रद्द"]
                                        },
                                        {
                                            id: "st_gc_p09_01_02",
                                            titleMr: "लोकसभा अध्यक्ष व उपाध्यक्ष (कलम ९३): लोकसभेचे सदस्य आपल्यामधूनच एकाची अध्यक्ष व एकाची उपाध्यक्ष म्हणून निवड करतात; अध्यक्ष सभागृहाचे प्रमुख असतात; पक्षांतर बंदी कायद्यांतर्गत (१० वे परिशिष्ट) अपात्रतेचा निर्णय घेतात; धन विधेयक प्रमाणित करण्याचा अंतिम अधिकार अध्यक्षांना असतो; संयुक्त बैठकीचे अध्यक्षपद भूषवतात; समान मते पडल्यास 'निर्णायक मत' (Casting Vote कलम १००) देण्याचा अधिकार; राजीनामा उपाध्यक्षांकडे देतात",
                                            titleEn: "Speaker and Deputy Speaker (Article 93): Elected by Lok Sabha from among its members; Speaker maintains order, decides anti-defection disqualification under 10th Schedule, certifies Money Bills, presides over Joint Sittings, and exercises Casting Vote in case of a tie (Article 100); Resigns to Deputy Speaker",
                                            chips: ["लोकसभा अध्यक्ष कलम ९३", "धन विधेयक प्रमाणपत्र अधिकार", "संयुक्त बैठक अध्यक्षपद", "निर्णायक मत (Casting Vote)", "१० वे परिशिष्ट निर्णय"]
                                        },
                                        {
                                            id: "st_gc_p09_01_03",
                                            titleMr: "संसदीय कामकाजाची साधने व कोरम: १) गणसंख्या / कोरम (Quorum - कलम १००): सभागृहाचे कामकाज चालवण्यासाठी एकूण सदस्य संख्येच्या किमान १/१० सदस्य उपस्थित असणे बंधनकारक; २) प्रश्नोत्तरे तास (Question Hour): बैठकीचा पहिला तास (सकाळी ११ ते १२); तारांकित प्रश्न (मौखिक उत्तर व पुरवणी प्रश्न विचारता येतात) आणि अतारांकित प्रश्न (लेखी उत्तर); ३) शून्य प्रहर (Zero Hour): प्रश्नोत्तराच्या तासानंतर दुपारी १२ वाजता सुरू होणारा प्रहर (भारतीय संसदीय परंपरेने १९६२ मध्ये सुरू केलेली स्वदेशी संकल्पना, नियमावलीत उल्लेख नाही); ४) तहकुबी प्रस्ताव (Adjournment Motion)",
                                            titleEn: "Parliamentary Devices & Quorum: Quorum under Article 100 is 1/10th of total membership; Question Hour (11 AM to 12 PM: Starred questions allow oral answers and supplementaries; Unstarred require written replies); Zero Hour (starts at 12 PM, an Indian procedural innovation since 1962 not in rulebook); Adjournment Motion",
                                            chips: ["कोरम १/१० भाग (कलम १००)", "प्रश्नोत्तरांचा तास (११ ते १२)", "तारांकित व अतारांकित प्रश्न", "शून्य प्रहर (Zero Hour भारतीय संकल्पना)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय राज्यघटना व राजकारण", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण २२: संसद" },
                                        { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ९: केंद्रीय कायदेमंडळ" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १०: कायदेप्रक्रिया, अर्थसंकल्प व संसदीय समित्या
                        // =========================================================================
                        {
                            id: "gc_pol_c10",
                            code: "CP10",
                            section: "D",
                            slug: "legislative-procedure-bills-budget-and-parliamentary-committees",
                            nameMr: "कायदेप्रक्रिया, विधेयकांचे प्रकार (साधे, धन, वित्त), अर्थसंकल्प व संसदीय समित्या",
                            nameEn: "Legislative Procedure: Types of Bills (Money Bill Art 110), Budget & Committees",
                            name: "कायदेप्रक्रिया, अर्थसंकल्प व समित्या",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_pol_c10",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_pol_c09",
                            nextChapterId: "gc_pol_c11",
                            metaDescriptionMr: "सर्वसाधारण विधेयक, धन विधेयक (कलम ११० - अध्यक्षांचे अंतिम प्रमाणपत्र, राज्यसभेला १४ दिवसांची मुदत), संयुक्त बैठक (कलम १०८), अर्थसंकल्प (कलम ११२), आणि ३ वित्तीय समित्या (PAC लोकलेखा २२ सदस्य, अंदाज समिती ३० सदस्य, CoPU).",
                            metaDescriptionEn: "Ordinary vs Money Bill (Art 110 Speaker certification, RS 14-day limit), Joint Sitting (Art 108), Annual Financial Statement (Art 112), and Standing Financial Committees (Public Accounts Committee PAC 22 members, Estimates Committee 30 members).",
                            notesJsonPath: "/data/notes/group_c/prelims/polity/c10_legislative_procedure.json",
                            quizTag: "gc_pol_bills_01",
                            tags: ["Money Bill Article 110", "Joint Sitting Article 108", "Budget Article 112", "Public Accounts Committee PAC", "Estimates Committee 30", "High-Weightage"],
                            searchKeywords: ["money bill article 110 certified by speaker rajya sabha 14 days", "joint sitting of parliament article 108 presided by speaker", "annual financial statement budget article 112 appropriation bill", "public accounts committee pac 22 members 15 ls 7 rs cag report", "estimates committee 30 members lok sabha only largest committee", "धन विधेयक कलम ११०", "संसदेची संयुक्त बैठक कलम १०८", "अर्थसंकल्प कलम ११२", "लोकलेखा समिती PAC २२ सदस्य", "अंदाज समिती ३० सदस्य"],
                            topics: [
                                {
                                    id: "top_gc_p10_01",
                                    nameMr: "विधेयक पारित करण्याची प्रक्रिया, धन विधेयक, अर्थसंकल्प आणि वित्तीय समित्या",
                                    nameEn: "Legislative Enactments, Money Bill Mechanics, Budget Cycles & Financial Committees",
                                    subtopics: [
                                        {
                                            id: "st_gc_p10_01_01",
                                            titleMr: "धन विधेयक (Money Bill - कलम ११०): केवळ कर लावणे, रद्द करणे, कर्ज घेणे किंवा भारताच्या संचित निधीतून खर्च करण्याशी संबंधित विषय; केवळ लोकसभेत आणि राष्ट्रपतींच्या पूर्वपरवानगीनेच मांडता येते; एखादे विधेयक धन विधेयक आहे की नाही हे ठरवण्याचा अंतिम अधिकार लोकसभा अध्यक्षांना असतो; राज्यसभेला धन विधेयकात दुरुस्ती करण्याचा अधिकार नाही, ती केवळ १४ दिवसांपर्यंत विधेयक रोखून धरू शकते; १४ दिवसांत संमत न केल्यास ते मूळ स्वरूपात दोन्ही सभागृहांनी संमत केल्याचे मानले जाते; संयुक्त बैठकीची तरतूद नसते",
                                            titleEn: "Money Bill Mechanism (Article 110): Covers taxation, borrowing, and Consolidated Fund withdrawals; Introduced ONLY in Lok Sabha with prior recommendation of President; Speaker has final authority to certify Money Bill; Rajya Sabha cannot amend, can only delay for 14 days; No joint sitting provision",
                                            chips: ["धन विधेयक कलम ११०", "केवळ लोकसभेत मांडले जाते", "अध्यक्षांचे अंतिम प्रमाणपत्र", "राज्यसभेला १४ दिवसांची मुदत", "संयुक्त बैठक नसते"]
                                        },
                                        {
                                            id: "st_gc_p10_01_02",
                                            titleMr: "संयुक्त बैठक (Joint Sitting - कलम १०८): सर्वसाधारण विधेयकावरून दोन्ही सभागृहांमध्ये ६ महिन्यांपेक्षा जास्त काळ गतिरोध (Deadlock) निर्माण झाल्यास राष्ट्रपती संयुक्त बैठक बोलावतात; संयुक्त बैठकीचे अध्यक्षपद लोकसभा अध्यक्ष भूषवतात; निर्णय उपस्थित आणि मतदान करणाऱ्या सदस्यांच्या साध्या बहुमताने घेतला जातो (लोकसभेचे संख्याबळ जास्त असल्याने लोकसभेची सरशी होते); धन विधेयक व घटनादुरुस्ती विधेयकाबाबत संयुक्त बैठक घेता येत नाही",
                                            titleEn: "Joint Sitting of Parliament (Article 108): Summoned by President to resolve legislative deadlock on Ordinary Bills pending over 6 months; Presided by Speaker of Lok Sabha; Decided by simple majority of total members present and voting; Prohibited for Money Bills and Constitutional Amendment Bills",
                                            chips: ["संयुक्त बैठक कलम १०८ (राष्ट्रपती बोलावतात)", "लोकसभा अध्यक्ष अध्यक्षस्थानी", "साधे बहुमत", "धन व घटनादुरुस्ती विधेयकास लागू नाही"]
                                        },
                                        {
                                            id: "st_gc_p10_01_03",
                                            titleMr: "अर्थसंकल्प व संचित निधी: कलम ११२: संविधानात 'बजेट' शब्दाचा उल्लेख नसून 'वार्षिक वित्तीय पत्रक' (Annual Financial Statement) म्हटले आहे; कलम ११४: विनियोजन विधेयक (Appropriation Bill - संसदेने संमत केल्याशिवाय भारताच्या संचित निधीतून एकही रुपया काढता येत नाही); भारताचा संचित निधी (Consolidated Fund of India - कलम २६६); भारताचा आकस्मिकता निधी (Contingency Fund - कलम २६७ - राष्ट्रपतींच्या अखत्यारीत)",
                                            titleEn: "Budget & Funds: Article 112 refers to Budget as 'Annual Financial Statement'; Article 114 Appropriation Bill legally permits withdrawals from Consolidated Fund of India (Article 266); Contingency Fund of India (Article 267) held at President's disposal",
                                            chips: ["वार्षिक वित्तीय पत्रक कलम ११२", "विनियोजन विधेयक कलम ११४", "संचित निधी कलम २६६", "आकस्मिकता निधी कलम २६७"]
                                        },
                                        {
                                            id: "st_gc_p10_01_04",
                                            titleMr: "संसदीय वित्तीय समित्या: १) लोकलेखा समिती (Public Accounts Committee - PAC १९२१): एकूण २२ सदस्य (१५ लोकसभा + ७ राज्यसभा, कार्यकाळ १ वर्ष); अध्यक्ष विरोधी पक्षाचा असतो; CAG च्या अहवालांची तपासणी करते ('CAG चा मित्र व मार्गदर्शक'); २) अंदाज समिती (Estimates Committee १९५०): संसदेची सर्वात मोठी समिती; एकूण ३० सदस्य (सर्वच्या सर्व ३० सदस्य केवळ लोकसभेचे असतात, राज्यसभेला प्रतिनिधित्व नसते); ३) सार्वजनिक उपक्रम समिती (CoPU): २२ सदस्य (१५ लोकसभा + ७ राज्यसभा)",
                                            titleEn: "Parliamentary Standing Financial Committees: Public Accounts Committee (PAC 1921: 22 members - 15 LS, 7 RS; opposition MP chairs; examines CAG audit reports); Estimates Committee (1950: largest committee with 30 members ALL from Lok Sabha); Committee on Public Undertakings (CoPU: 22 members)",
                                            chips: ["लोकलेखा समिती PAC (२२ सदस्य १५+७)", "विरोधी पक्षनेता अध्यक्ष PAC", "अंदाज समिती (३० सदस्य केवळ लोकसभा)", "सर्वात मोठी समिती"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय राज्यघटना व राजकारण", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण २२ व २३: संसद व संसदीय समित्या" },
                                        { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ९: कायदेप्रक्रिया व बजेट" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ११: राज्य विधिमंडळ: महाराष्ट्र विधानसभा व विधानपरिषद
                        // =========================================================================
                        {
                            id: "gc_pol_c11",
                            code: "CP11",
                            section: "D",
                            slug: "state-legislature-vidhan-sabha-and-vidhan-parishad-maharashtra",
                            nameMr: "राज्य विधिमंडळ: महाराष्ट्र विधानसभा (२८८ जागा) व विधानपरिषद (७८ जागा)",
                            nameEn: "State Legislature: Maharashtra Legislative Assembly (288) & Council (78)",
                            name: "राज्य विधिमंडळ: विधानसभा व विधानपरिषद",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_pol_c11",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_pol_c10",
                            nextChapterId: "gc_pol_c12",
                            metaDescriptionMr: "विधानसभा रचना (कलम १७० - महाराष्ट्र २८८ जागा, कार्यकाळ ५ वर्षे), विधानपरिषद निर्मिती व बरखास्ती (कलम १६९ - महाराष्ट्र ७८ जागा, स्थायी सभागृह), विधानपरिषद निवडणूक पद्धत (५ घटक मतदारसंघ), आणि विधिमंडळ अधिवेशन (मुंबई व नागपूर हिवाळी).",
                            metaDescriptionEn: "Legislative Assembly (Art 170, MH 288 seats), Legislative Council creation/abolition (Art 169, MH 78 seats), Legislative Council electoral constituencies (Teachers, Graduates, Local bodies, MLAs, Governor nominated), and Sessions.",
                            notesJsonPath: "/data/notes/group_c/prelims/polity/c11_state_legislature_mh.json",
                            quizTag: "gc_pol_state_leg_01",
                            tags: ["State Legislature", "Vidhan Sabha 288 Seats", "Vidhan Parishad 78 Seats", "Article 169 Council Abolition", "Winter Session Nagpur", "High-Weightage"],
                            searchKeywords: ["maharashtra legislative assembly vidhan sabha 288 seats tenure", "vidhan parishad 78 seats permanent house 1 3rd biennial", "article 169 creation and abolition of legislative councils", "vidhan parishad composition 1 3rd mlas 1 3rd local bodies 1 12th teachers graduates 1 6th governor", "nagpur winter session pact", "महाराष्ट्र विधानसभा २८८ जागा", "विधानपरिषद ७८ जागा", "कलम १६९ विधानपरिषद निर्मिती", "शिक्षक पदवीधर मतदारसंघ", "नागपूर हिवाळी अधिवेशन"],
                            topics: [
                                {
                                    id: "top_gc_p11_01",
                                    nameMr: "महाराष्ट्र विधानसभा व विधानपरिषद रचना, मतदारसंघ सूत्र आणि कायदेमंडळ अधिकार",
                                    nameEn: "Maharashtra Bicameral Legislature, Seat Equations & Legislative Powers",
                                    subtopics: [
                                        {
                                            id: "st_gc_p11_01_01",
                                            titleMr: "महाराष्ट्र विधानसभा (Vidhan Sabha - कलम १७०): कनिष्ठ व लोकांचे सभागृह; महाराष्ट्रात एकूण २८८ निर्वाचित जागा (SC साठी २९ व ST साठी २५ जागा राखीव); कार्यकाळ ५ वर्षे (आणीबाणीत संसदेकडून एका वेळी १ वर्षाने वाढवता येतो); अध्यक्ष व उपाध्यक्ष निवड स्वतःच्या सदस्यांमधून; अविश्वास ठराव केवळ विधानसभेत मांडता येतो; विधानसभेचा कार्यकाळ पूर्ण होण्याआधी राज्यपाल विसर्जित करू शकतात",
                                            titleEn: "Maharashtra Legislative Assembly (Article 170): Lower chamber directly elected; 288 elected seats (29 SC and 25 ST reserved); 5-year tenure; Elects Speaker and Deputy Speaker; No-Confidence motions solely moved in Assembly",
                                            chips: ["विधानसभा २८८ जागा (महाराष्ट्र)", "SC २९ व ST २५ राखीव जागा", "कार्यकाळ ५ वर्षे", "अध्यक्ष व उपाध्यक्ष"]
                                        },
                                        {
                                            id: "st_gc_p11_01_02",
                                            titleMr: "महाराष्ट्र विधानपरिषद (Vidhan Parishad - कलम १६९ व १७१): वरिष्ठ व स्थायी सभागृह (कधीही विसर्जित होत नाही; १/३ सदस्य दर २ वर्षांनी निवृत्त, कार्यकाळ ६ वर्षे); महाराष्ट्रात एकूण ७८ सदस्य; भारतातील केवळ ६ राज्यांत विधानपरिषद अस्तित्वात आहे (महाराष्ट्र, कर्नाटक, उत्तर प्रदेश, बिहार, आंध्र प्रदेश, तेलंगणा); कलम १६९: संसदेला संबंधित राज्याच्या विधानसभेने २/३ विशेष बहुमताने ठराव मंजूर केल्यास विधानपरिषद स्थापन करण्याचा किंवा रद्द करण्याचा अधिकार आहे",
                                            titleEn: "Maharashtra Legislative Council (Articles 169 & 171): Permanent upper house with 78 seats; 1/3rd members retire biennially, 6-year tenure; Exists in only 6 Indian states (MH, KA, UP, BR, AP, TS); Article 169 empowers Parliament to create/abolish Legislative Councils upon 2/3rd special resolution passed by State Assembly",
                                            chips: ["विधानपरिषद ७८ जागा (महाराष्ट्र)", "स्थायी सभागृह (६ वर्षे कार्यकाळ)", "भारतात ६ राज्यांत द्विगृही", "कलम १६९ निर्मिती/बरखास्ती"]
                                        },
                                        {
                                            id: "st_gc_p11_01_03",
                                            titleMr: "विधानपरिषद सदस्य निवड सूत्र (MPSC वारंवार विचारते): ७८ सदस्यांची विभागणी: १) १/३ सदस्य (२६ सदस्य) - विधानसभेच्या आमदारांकडून निर्वाचित; २) १/३ सदस्य (२२ सदस्य) - स्थानिक स्वराज्य संस्थांमधून निर्वाचित; ३) १/१२ सदस्य (७ सदस्य) - किमान ३ वर्षे पदवीधर असलेल्या पदवीधर मतदारसंघातून; ४) १/१२ सदस्य (७ सदस्य) - किमान ३ वर्षे माध्यमिक शिक्षक असलेल्या शिक्षक मतदारसंघातून; ५) १/६ सदस्य (१२ सदस्य) - राज्यपालांकडून नामनिर्देशित (साहित्य, विज्ञान, कला, सहकार चळवळ, समाजसेवा - संविधानात राज्यासाठी 'सहकार' हा अतिरिक्त विषय आहे)",
                                            titleEn: "Electoral Formula of Vidhan Parishad: 78 members divided: 1/3rd (26) by MLAs, 1/3rd (22) by Local Self-Government bodies, 1/12th (7) by Graduates constituency, 1/12th (7) by Teachers constituency, and 1/6th (12) nominated by Governor (Literature, Science, Art, Cooperative Movement, Social Service)",
                                            chips: ["१/३ आमदार (२६ जागा)", "१/३ स्थानिक संस्था (२२ जागा)", "१/१२ पदवीधर (७ जागा)", "१/१२ शिक्षक (७ जागा)", "१/६ राज्यपाल नामनिर्देशित (१२ जागा)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय राज्यघटना व राजकारण", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण ३२: राज्य विधिमंडळ" },
                                        { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण १०: राज्य कायदेमंडळ" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १२: न्यायव्यवस्था: सर्वोच्च व उच्च न्यायालये
                        // =========================================================================
                        {
                            id: "gc_pol_c12",
                            code: "CP12",
                            section: "E",
                            slug: "judiciary-supreme-court-bombay-high-court-and-subordinate-courts",
                            nameMr: "भारतीय न्यायव्यवस्था: सर्वोच्च न्यायालय, मुंबई उच्च न्यायालय व दुय्यम न्यायालये",
                            nameEn: "Judiciary: Supreme Court of India, Bombay High Court & Subordinate Judiciary",
                            name: "न्यायव्यवस्था: SC व मुंबई उच्च न्यायालय",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_pol_c12",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_pol_c11",
                            nextChapterId: "gc_pol_c13",
                            metaDescriptionMr: "सर्वोच्च न्यायालय (कलम १२४ ते १४७ - रचना १ CJI + ३३ न्यायाधीश, अधिकारक्षेत्र, अभिलेख न्यायालय कलम १२९), मुंबई उच्च न्यायालय (स्थापना १८६२, अधिकारक्षेत्र महाराष्ट्र, गोवा, दादरा-नगर हवेली, ३ खंडपीठे: नागपूर, छत्रपती संभाजीनगर, पणजी), आणि जिल्हा न्यायालये.",
                            metaDescriptionEn: "Supreme Court (Arts 124-147, 1+33 judges, Jurisdictions, Court of Record Art 129), Bombay High Court (Established 1862, jurisdiction over MH, Goa, Daman-Diu, 3 Benches: Nagpur, Aurangabad, Panaji), and District Courts.",
                            notesJsonPath: "/data/notes/group_c/prelims/polity/c12_judiciary_sc_hc.json",
                            quizTag: "gc_pol_judiciary_01",
                            tags: ["Supreme Court Article 124", "CJI Plus 33 Judges", "Bombay High Court 1862", "Three Benches Nagpur Aurangabad Panaji", "Court of Record 129", "High-Weightage"],
                            searchKeywords: ["supreme court of india composition 1 cji 33 judges article 124", "original appellate advisory jurisdiction article 143", "court of record article 129 contempt of court", "bombay high court established 14 august 1862 jurisdiction", "three benches of bombay high court nagpur chhatrapati sambhajinagar panaji", "सर्वोच्च न्यायालय कलम १२४ (१ सरन्यायाधीश + ३३ न्यायाधीश)", "अभिलेख न्यायालय कलम १२९", "सल्लागार अधिकारक्षेत्र कलम १४३", "मुंबई उच्च न्यायालय १८६२", "३ खंडपीठे नागपूर छत्रपती संभाजीनगर पणजी"],
                            topics: [
                                {
                                    id: "top_gc_p12_01",
                                    nameMr: "सर्वोच्च न्यायालय अधिकारक्षेत्र, मुंबई उच्च न्यायालय व खंडपीठे आणि कॉलेजियम",
                                    nameEn: "Supreme Court Jurisdictions, Bombay High Court Architecture & Collegium Dynamics",
                                    subtopics: [
                                        {
                                            id: "st_gc_p12_01_01",
                                            titleMr: "सर्वोच्च न्यायालय (Supreme Court - कलम १२४ ते १४७): भारताची एकात्मिक न्यायव्यवस्था; रचना: १ सरन्यायाधीश (CJI) + ३३ इतर न्यायाधीश = एकूण ३४; नियुक्ती राष्ट्रपतींद्वारे कॉलेजियम (CJI + ४ ज्येष्ठ न्यायाधीश) शिफारशीनुसार; निवृत्ती वय: ६५ वर्षे; पदच्युती: संसदेच्या दोन्ही सभागृहांत विशेष बहुमताने ठराव संमत करून राष्ट्रपतींच्या आदेशाने; कलम १२९: अभिलेख न्यायालय (Court of Record - स्वतःच्या अवमानाबद्दल शिक्षा देण्याचा अधिकार)",
                                            titleEn: "Supreme Court Setup (Articles 124-147): Single integrated judiciary; Sanctioned bench: 1 Chief Justice + 33 Judges = 34 total; Appointed by President via Collegium system (CJI + 4 senior-most judges); Retirement age 65 years; Removal by parliamentary special address; Article 129 declares it a Court of Record",
                                            chips: ["सर्वोच्च न्यायालय कलम १२४", "१ सरन्यायाधीश + ३३ न्यायाधीश = ३४", "निवृत्ती वय ६५ वर्षे", "अभिलेख न्यायालय कलम १२९", "कॉलेजियम पद्धत"]
                                        },
                                        {
                                            id: "st_gc_p12_01_02",
                                            titleMr: "सर्वोच्च न्यायालयाचे अधिकारक्षेत्र: १) मूळ अधिकारक्षेत्र (Original Jurisdiction कलम १३१ - केंद्र विरुद्ध राज्ये किंवा राज्या-राज्यांमधील तंटे); २) अपीलीय अधिकारक्षेत्र (दिवाणी, फौजदारी व घटनात्मक खटल्यांमध्ये उच्च न्यायालयाविरुद्ध अपील); ३) सल्लागार अधिकारक्षेत्र (Advisory Jurisdiction कलम १४३ - राष्ट्रपतींनी विचारलेल्या सार्वजनिक महत्त्वाच्या प्रश्नावर सल्ला देणे, राष्ट्रपतींवर सल्ला बंधनकारक नसतो); ४) न्यायालयीन पुनर्विलोकन (Judicial Review - संसदेने केलेला कायदा संविधानाशी विसंगत असल्यास तो अवैध ठरवणे)",
                                            titleEn: "Supreme Court Jurisdictions: 1) Original (Article 131 - disputes between Centre and States), 2) Appellate (Constitutional, civil, criminal appeals), 3) Advisory (Article 143 - President seeking opinion, not binding), 4) Judicial Review to strike down unconstitutional legislation",
                                            chips: ["मूळ अधिकारक्षेत्र कलम १३१", "सल्लागार अधिकारक्षेत्र कलम १४३", "न्यायालयीन पुनर्विलोकन", "अंतिम घटनात्मक व्याख्याता"]
                                        },
                                        {
                                            id: "st_gc_p12_01_03",
                                            titleMr: "मुंबई उच्च न्यायालय (Bombay High Court): भारतीय उच्च न्यायालय कायदा १८६१ अन्वये १४ ऑगस्ट १८६२ रोजी स्थापना; अधिकारक्षेत्र: महाराष्ट्र राज्य, गोवा राज्य, आणि दादरा-नगर हवेली व दमण-दीव केंद्रशासित प्रदेश; मूळ आसन: मुंबई; ३ खंडपीठे (Benches): १) नागपूर, २) छत्रपती संभाजीनगर (औरंगाबाद), ३) पणजी (गोवा); उच्च न्यायालयाच्या न्यायाधीशांचे निवृत्ती वय ६२ वर्षे असते; कलम २२६ अन्वये रिट जारी करण्याचा अधिकार (सर्वोच्च न्यायालयापेक्षा व्यापक)",
                                            titleEn: "Bombay High Court Architecture: Established on 14 August 1862 under High Courts Act 1861; Territorial jurisdiction over Maharashtra, Goa, and Dadra & Nagar Haveli and Daman & Diu; Principal seat at Mumbai; 3 Permanent Benches at Nagpur, Chhatrapati Sambhajinagar, and Panaji; Retirement age 62 years; Article 226 writ jurisdiction",
                                            chips: ["मुंबई उच्च न्यायालय (१४ ऑगस्ट १८६२)", "३ खंडपीठे (नागपूर, छत्रपती संभाजीनगर, पणजी)", "गोवा व दादरा-नगर हवेली अधिकारक्षेत्र", "निवृत्ती वय ६२ वर्षे", "कलम २२६ रिट अधिकार"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय राज्यघटना व राजकारण", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण २६ व ३४: सर्वोच्च व उच्च न्यायालय" },
                                        { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ११: न्यायव्यवस्था" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १३: केंद्र-राज्य संबंध व आणीबाणी तरतुदी
                        // =========================================================================
                        {
                            id: "gc_pol_c13",
                            code: "CP13",
                            section: "E",
                            slug: "centre-state-relations-and-emergency-provisions",
                            nameMr: "केंद्र-राज्य संबंध (७ वे परिशिष्ट, ३ सूची) आणि आणीबाणीविषयक तरतुदी (कलम ३५२ ते ३६०)",
                            nameEn: "Centre-State Relations (7th Schedule Lists) & Emergency Provisions (Arts 352-360)",
                            name: "केंद्र-राज्य संबंध व आणीबाणी",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_pol_c13",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_pol_c12",
                            nextChapterId: "gc_pol_c14",
                            metaDescriptionMr: "७ वे परिशिष्ट (संघसूची १००, राज्यसूची ६१, समवर्ती सूची ५२ विषय), शेषाधिकार (कलम २४८), राष्ट्रीय आणीबाणी (कलम ३५२ - ४४ वी दुरुस्ती), राष्ट्रपती राजवट (कलम ३५६ - SR बोम्मई खटला), आणि वित्तीय आणीबाणी (कलम ३६०).",
                            metaDescriptionEn: "7th Schedule Legislative Lists (Union 100, State 61, Concurrent 52), Residuary Powers (Art 248), National Emergency (Art 352, 44th Amendment), President's Rule (Art 356, S.R. Bommai case), Financial Emergency (Art 360).",
                            notesJsonPath: "/data/notes/group_c/prelims/polity/c13_centre_state_emergency.json",
                            quizTag: "gc_pol_emergency_01",
                            tags: ["7th Schedule Lists", "Union State Concurrent", "Article 352 National Emergency", "Article 356 Presidents Rule", "Article 360 Financial Emergency", "High-Weightage"],
                            searchKeywords: ["7th schedule legislative lists union 100 state 61 concurrent 52", "residuary powers parliament article 248", "national emergency article 352 cabinet written advice 44th amendment", "presidents rule article 356 sr bommai case judicial review", "financial emergency article 360 never declared", "७ वे परिशिष्ट तीन सूची संघ राज्य समवर्ती", "शेषाधिकार कलम २४८", "राष्ट्रीय आणीबाणी कलम ३५२", "राष्ट्रपती राजवट कलम ३५६", "वित्तीय आणीबाणी कलम ३६०"],
                            topics: [
                                {
                                    id: "top_gc_p13_01",
                                    nameMr: "तीन वैधानिक सूची, शेषाधिकार, सरकारिया आयोग आणि तीन आणीबाणी",
                                    nameEn: "Seventh Schedule Lists, Sarkaria Commission & Tripartite Emergency Types",
                                    subtopics: [
                                        {
                                            id: "st_gc_p13_01_01",
                                            titleMr: "७ वे परिशिष्ट व कायदेविषयक अधिकार विभागणी: १) संघसूची (Union List): मूळ ९७ विषय, सध्या १०० विषय (संरक्षण, अणुऊर्जा, परराष्ट्र संबंध, रेल्वे, बँकिंग); २) राज्यसूची (State List): मूळ ६६ विषय, सध्या ६१ विषय (पोलीस, सार्वजनिक आरोग्य, शेती, कारागृह, स्थानिक शासन); ३) समवर्ती सूची (Concurrent List - ऑस्ट्रेलियाकडून स्वीकार): मूळ ४७ विषय, सध्या ५२ विषय (शिक्षण, वने, विवाह, वीज - ४२ व्या दुरुस्तीने ५ विषय राज्यसूचीतून समवर्तीत आणले); कलम २४८: शेषाधिकार (Residuary Powers) केवळ संसदेकडे",
                                            titleEn: "Seventh Schedule Legislative Distribution: Union List (100 items: Defence, Foreign Affairs, Railways); State List (61 items: Police, Public Health, Agriculture, Local Government); Concurrent List (52 items: Education, Forests, Marriage - 5 items shifted via 42nd Amendment); Article 248 vests Residuary Powers solely in Parliament",
                                            chips: ["संघसूची १०० विषय", "राज्यसूची ६१ विषय (पोलीस)", "समवर्ती सूची ५२ विषय (शिक्षण, वने)", "शेषाधिकार संसदेकडे (कलम २४८)"]
                                        },
                                        {
                                            id: "st_gc_p13_01_02",
                                            titleMr: "केंद्र-राज्य संबंध आयोग: १) सरकारिया आयोग (१९८३ - न्या. आर. एस. सरकारिया - कलम ३५६ चा वापर अपवादात्मक करावा, आंतरराज्य परिषद कलम २६३ ची स्थापना करावी अशी शिफारस); २) एम. एम. पुंछी आयोग (२००७ - राज्यपालांचा कार्यकाळ निश्चित ५ वर्षे असावा, राज्यपालांच्या महाभियोगाची शिफारस)",
                                            titleEn: "Federalism Enquiry Commissions: Sarkaria Commission (1983 - Recommended rare use of Article 356, Inter-State Council under Art 263); Punchhi Commission (2007 - Recommended 5-year fixed tenure for Governors and localized emergency provisions)",
                                            chips: ["सरकारिया आयोग १९८३", "आंतरराज्य परिषद (कलम २६३)", "पुंछी आयोग २००७", "कलम ३५६ संयमित वापर"]
                                        },
                                        {
                                            id: "st_gc_p13_01_03",
                                            titleMr: "आणीबाणीविषयक तरतुदी (कलम ३५२ ते ३६०): भाग १८ (जर्मनीच्या वेइमार संविधानाकडून मूलभूत हक्क स्थगिती स्वीकारली); १) राष्ट्रीय आणीबाणी (कलम ३५२): युद्ध, परकीय आक्रमण किंवा सशस्त्र बंड (४४ व्या दुरुस्तीने 'अंतर्गत अशांतता' शब्द बदलून 'सशस्त्र बंड' केला; मंत्रिमंडळाची लेखी शिफारस बंधनकारक; १ महिन्यात संसदेच्या २/३ बहुमताने संमती आवश्यक); २) राष्ट्रपती राजवट (कलम ३५६): राज्यातील घटनात्मक यंत्रणा ठप्प झाल्यास; एस. आर. बोम्मई खटला १९९४ न्यायालयीन पुनर्विलोकन; ३) वित्तीय आणीबाणी (कलम ३६०): देशाचे आर्थिक स्थैर्य धोक्यात आल्यास (भारतात एकदाही लागू नाही)",
                                            titleEn: "Emergency Typology (Articles 352-360): Part XVIII; 1) National Emergency (Article 352: War, external aggression, or armed rebellion; 44th Amendment mandated written Cabinet advice; Requires 2/3rd special majority approval within 1 month), 2) President's Rule (Article 356: Failure of constitutional machinery; S.R. Bommai 1994 checks misuse), 3) Financial Emergency (Article 360: Never declared in India)",
                                            chips: ["राष्ट्रीय आणीबाणी कलम ३५२ (सशस्त्र बंड)", "कॅबिनेटची लेखी शिफारस", "राष्ट्रपती राजवट कलम ३५६ (बोम्मई निकाल)", "वित्तीय आणीबाणी कलम ३६० (कधीही नाही)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय राज्यघटना व राजकारण", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण १४, १५ व १६: केंद्र-राज्य संबंध व आणीबाणी" },
                                        { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण १२: संघराज्य व आणीबाणी" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १४: घटनादुरुस्ती पद्धत (कलम ३६८) व ऐतिहासिक दुरुस्त्या
                        // =========================================================================
                        {
                            id: "gc_pol_c14",
                            code: "CP14",
                            section: "E",
                            slug: "amendment-of-the-constitution-article-368-and-landmark-amendments",
                            nameMr: "घटनादुरुस्ती पद्धत (कलम ३६८) आणि ऐतिहासिक घटनादुरुस्त्या (४२ वी, ४४ वी, १०१ वी ते १०६ वी)",
                            nameEn: "Amendment Procedure (Article 368) & Landmark Amendments (42nd, 44th, 101st to 106th)",
                            name: "घटनादुरुस्ती पद्धत व महत्त्वाच्या दुरुस्त्या",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 2,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_pol_c14",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_pol_c13",
                            nextChapterId: "gc_pol_c15",
                            metaDescriptionMr: "कलम ३६८ अन्वये घटनादुरुस्तीचे ३ प्रकार (साधे बहुमत, विशेष बहुमत, विशेष + ५०% राज्यांची संमती), ४२ वी दुरुस्ती १९७६ (मिनी संविधान), ४४ वी दुरुस्ती १९७८, ५२ वी (पक्षांतर बंदी), १०१ वी (GST), १०३ वी (EWS १०%), आणि १०६ वी (महिला आरक्षण).",
                            metaDescriptionEn: "Article 368 Amendment mechanisms (Simple, Special 2/3rd, Special with 50% State ratifications), 42nd Amendment 1976 ('Mini Constitution'), 44th 1978, 52nd Anti-defection, 101st GST, 103rd EWS 10%, 106th Nari Shakti Vandan Act.",
                            notesJsonPath: "/data/notes/group_c/prelims/polity/c14_amendments_art368.json",
                            quizTag: "gc_pol_amendments_01",
                            tags: ["Article 368 Amendment", "42nd Amendment Mini Constitution", "44th Amendment 1978", "101st GST Amendment", "103rd EWS Amendment", "106th Women Reservation", "High-Weightage"],
                            searchKeywords: ["amendment of constitution article 368 part xx borrowed from south africa", "42nd amendment act 1976 mini constitution swaran singh", "44th amendment act 1978 right to property deleted", "52nd amendment 1985 anti defection 10th schedule", "101st amendment gst 103rd ews 106th women reservation नारी शक्ती वंदन", "घटनादुरुस्ती कलम ३६८ दक्षिण आफ्रिका स्रोत", "४२ वी दुरुस्ती १९७६ मिनी संविधान", "४४ वी दुरुस्ती मालमत्ता हक्क रद्द", "१०१ वी दुरुस्ती GST", "१०६ वी दुरुस्ती नारी शक्ती वंदन"],
                            topics: [
                                {
                                    id: "top_gc_p14_01",
                                    nameMr: "कलम ३६८ घटनादुरुस्ती पद्धती आणि प्रमुख ऐतिहासिक घटनादुरुस्त्या",
                                    nameEn: "Article 368 Amendment Mechanics & Transformative Constitutional Acts",
                                    subtopics: [
                                        {
                                            id: "st_gc_p14_01_01",
                                            titleMr: "घटनादुरुस्ती पद्धती (कलम ३६८): भाग २०; दक्षिण आफ्रिकेच्या संविधानाकडून स्वीकार; संविधानात दुरुस्ती करण्याचे ३ प्रकार: १) संसदेच्या साध्या बहुमताने (कलम २, ३, नागरिकत्व - याला कलम ३६८ अंतर्गत दुरुस्ती मानले जात नाही); २) संसदेच्या विशेष बहुमताने (कलम ३६८ - एकूण सदस्य संख्येच्या ५०% पेक्षा जास्त व उपस्थित-मतदान करणाऱ्या २/३ बहुमताने - उदा. मूलभूत हक्क व DPSP); ३) संसदेचे विशेष बहुमत + किमान निम्म्या (५०%) राज्यांच्या विधिमंडळांची साध्या बहुमताने संमती (संघराज्य संरचनेशी संबंधित - उदा. राष्ट्रपती निवडणूक, सर्वोच्च न्यायालय, ७ वे परिशिष्ट, GST); केशवानंद भारती निकालानुसार संविधानाच्या 'मूलभूत चौकटीला' (Basic Structure) धक्का लावता येत नाही",
                                            titleEn: "Amendment Pathways (Article 368): Part XX; Borrowed from South Africa; 3 Procedure Types: 1) Simple Majority (outside Art 368: Arts 2, 3), 2) Special Majority of Parliament (Art 368: 2/3rd present and voting + absolute majority - Fundamental Rights, DPSP), 3) Special Majority + Ratification by 50% State Assemblies (Federal matters: President election, Judiciary, 7th Schedule); Bound by Basic Structure doctrine",
                                            chips: ["कलम ३६८ (दक्षिण आफ्रिका स्रोत)", "विशेष बहुमत (२/३ उपस्थित-मतदान)", "५०% राज्यांची संमती (संघराज्य दुरुस्ती)", "मूलभूत चौकट Basic Structure"]
                                        },
                                        {
                                            id: "st_gc_p14_01_02",
                                            titleMr: "महत्त्वाच्या ऐतिहासिक घटनादुरुस्त्या (MPSC हमखास प्रश्न): १) ४२ वी दुरुस्ती (१९७६): 'लघु संविधान' / मिनी कॉन्स्टिट्यूशन (सरनाम्यात बदल, मूलभूत कर्तव्ये जोडली, लोकसभा कार्यकाळ ६ वर्षे केला); २) ४४ वी दुरुस्ती (१९७८): मोरारजी देसाई सरकार (मालमत्तेचा हक्क मूलभूत हक्कातून वगळून कलम ३००A मध्ये कायदेशीर हक्क केला, अंतर्गत अशांतता ऐवजी सशस्त्र बंड); ३) ५२ वी दुरुस्ती (१९८५): पक्षांतर बंदी कायदा (१० वे परिशिष्ट); ४) ६१ वी दुरुस्ती (१९८८): मतदानाचे वय २१ वरून १८ वर्षे केले; ५) ८६ वी दुरुस्ती (२००२): शिक्षणाचा मूलभूत हक्क कलम २१A",
                                            titleEn: "Landmark Constitutional Amendments: 42nd Amendment 1976 ('Mini Constitution': Preamble amended, Fundamental Duties added); 44th Amendment 1978 (Right to Property demoted to legal right under Art 300A, restored democratic checks); 52nd Amendment 1985 (Anti-Defection Law, 10th Schedule); 61st Amendment 1988 (Voting age reduced from 21 to 18); 86th Amendment 2002 (Right to Education Art 21A)",
                                            chips: ["४२ वी दुरुस्ती १९७६ (मिनी संविधान)", "४४ वी दुरुस्ती १९७८ (मालमत्ता हक्क रद्द कलम ३००A)", "५२ वी दुरुस्ती १९८५ (पक्षांतर बंदी)", "६१ वी दुरुस्ती (मतदान वय १८ वर्षे)", "८६ वी दुरुस्ती (शिक्षण २१A)"]
                                        },
                                        {
                                            id: "st_gc_p14_01_03",
                                            titleMr: "अद्ययावत घटनादुरुस्त्या (१०० वी ते १०६ वी): १) १०० वी दुरुस्ती (२०१५): भारत-बांगलादेश भूसीमा करार; २) १०१ वी दुरुस्ती (२०१६): वस्तू व सेवा कर (GST लागू - कलम २४६A, २६९A, २७९A GST परिषद); ३) १०२ वी दुरुस्ती (२०१८): राष्ट्रीय मागासवर्गीय आयोगाला (NCBC) घटनात्मक दर्जा (कलम ३३८B); ४) १०३ वी दुरुस्ती (२०१९): आर्थिकदृष्ट्या दुर्बल घटकांसाठी (EWS) १०% आरक्षण (कलम १५(६) व १६(६)); ५) १०४ वी दुरुस्ती (२०२०): SC/ST राजकीय आरक्षण १० वर्षांनी वाढवले, अँग्लो-इंडियन नामनिर्देशन रद्द; ६) १०६ वी दुरुस्ती (२०२३): 'नारी शक्ती वंदन अधिनियम' - लोकसभा व राज्य विधानसभांमध्ये महिलांसाठी ३३% (१/३) जागा राखीव (कलम ३३०A व ३३२A)",
                                            titleEn: "Recent Constitutional Amendments (100th to 106th): 100th (Indo-Bangladesh Land Boundary 2015); 101st (GST Act 2016, Art 279A); 102nd (Constitutional status to NCBC Art 338B); 103rd (10% EWS reservation Arts 15(6) & 16(6)); 104th (SC/ST reservation extended, Anglo-Indian quota abolished); 106th Amendment 2023 ('Nari Shakti Vandan Adhiniyam' reserving 33% seats for women in Lok Sabha and Assemblies)",
                                            chips: ["१०१ वी दुरुस्ती २०१६ (GST)", "१०२ वी दुरुस्ती (NCBC घटनात्मक दर्जा)", "१०३ वी दुरुस्ती (EWS १०% आरक्षण)", "१०४ वी (अँग्लो-इंडियन रद्द)", "१०६ वी दुरुस्ती २०२३ (महिला ३३% आरक्षण)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय राज्यघटना व राजकारण", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण १०: घटनादुरुस्ती" },
                                        { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण १३: महत्त्वाच्या घटनादुरुस्त्या" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १५: घटनात्मक व वैधानिक संस्था
                        // =========================================================================
                        {
                            id: "gc_pol_c15",
                            code: "CP15",
                            section: "F",
                            slug: "constitutional-and-statutory-bodies-ec-upsc-mpsc-cag",
                            nameMr: "घटनात्मक व वैधानिक संस्था: निवडणूक आयोग, MPSC, CAG आणि वित्त आयोग",
                            nameEn: "Constitutional & Statutory Bodies: Election Commission, MPSC, CAG & Finance Commission",
                            name: "घटनात्मक संस्था: निवडणूक आयोग, MPSC व CAG",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_pol_c15",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_pol_c14",
                            nextChapterId: "gc_pol_c16",
                            metaDescriptionMr: "निवडणूक आयोग (कलम ३२४ - मुख्य निवडणूक आयुक्त व २ आयुक्त), MPSC व UPSC (कलम ३१५ ते ३२३ - रचना, कार्यकाळ ६ वर्षे किंवा ६२ वर्षे वय), नियंत्रक व महालेखापरीक्षक (CAG कलम १४८), आणि वित्त आयोग (कलम २८०).",
                            metaDescriptionEn: "Election Commission (Art 324, 1 CEC + 2 ECs), MPSC & UPSC (Arts 315-323, tenure 6 years or 62 years for state), CAG (Art 148, Guardian of Public Purse), and Finance Commission (Art 280).",
                            notesJsonPath: "/data/notes/group_c/prelims/polity/c15_constitutional_bodies.json",
                            quizTag: "gc_pol_bodies_01",
                            tags: ["Election Commission Article 324", "MPSC UPSC Article 315", "CAG Article 148", "Finance Commission Article 280", "High-Weightage"],
                            searchKeywords: ["election commission of india article 324 cec appointment tenure 6 years 65 age", "state public service commission mpsc article 315 tenure 6 years 62 age", "cag comptroller and auditor general article 148 guardian public purse", "finance commission article 280 constituted by president every 5 years", "निवडणूक आयोग कलम ३२४", "MPSC लोकसेवा आयोग कलम ३१५ कार्यकाळ ६/६२", "कॅग CAG कलम १४८", "वित्त आयोग कलम २८०"],
                            topics: [
                                {
                                    id: "top_gc_p15_01",
                                    nameMr: "केंद्रीय व राज्य संस्था: निवडणूक आयोग, MPSC, CAG आणि वित्त आयोग कार्ये",
                                    nameEn: "Constitutional Watchdogs: ECI, State Public Service Commission, CAG & Finance Commission",
                                    subtopics: [
                                        {
                                            id: "st_gc_p15_01_01",
                                            titleMr: "भारतीय निवडणूक आयोग (Election Commission of India - कलम ३२४): संसद, राष्ट्रपती, उपराष्ट्रपती व राज्य विधिमंडळांच्या निवडणुका घेणारी स्वतंत्र संस्था (स्थानिक स्वराज्य संस्थांच्या निवडणुका राज्य निवडणूक आयोग घेतो कलम २४३K); रचना: १ मुख्य निवडणूक आयुक्त (CEC) व २ निवडणूक आयुक्त; कार्यकाळ: ६ वर्षे किंवा वयाची ६५ वर्षे; पदच्युती: सर्वोच्च न्यायालयाच्या न्यायाधीशाप्रमाणेच संसदेच्या विशेष बहुमताने; आचारसंहिता (Model Code of Conduct) लागू करणे, पक्षांना मान्यता व चिन्हे वाटप",
                                            titleEn: "Election Commission of India (Article 324): Conducts elections to Parliament, State Legislatures, President & VP; Multi-member body: 1 CEC + 2 ECs; Tenure: 6 years or 65 years of age; Removal of CEC identical to Supreme Court judge; Administers Model Code of Conduct and party recognition",
                                            chips: ["निवडणूक आयोग कलम ३२४", "१ CEC + २ आयुक्त", "कार्यकाळ ६ वर्षे किंवा ६५ वय", "आचारसंहिता अंमलबजावणी"]
                                        },
                                        {
                                            id: "st_gc_p15_01_02",
                                            titleMr: "UPSC व महाराष्ट्र लोकसेवा आयोग (MPSC - कलम ३१५ ते ३२३): १) MPSC रचना: अध्यक्ष व सदस्य यांची नियुक्ती राज्यपालाकडून होते, परंतु त्यांना पदावरून दूर करण्याचा अधिकार केवळ राष्ट्रपतींना असतो (सर्वोच्च न्यायालयाच्या चौकशीनंतर); कार्यकाळ: ६ वर्षे किंवा वयाची ६२ वर्षे (UPSC साठी ६ वर्षे किंवा ६५ वर्षे); राजीनामा राज्यपालांकडे देतात; स्पर्धा परीक्षांद्वारे गुणवत्ता यादी तयार करून शासनाला शिफारस करणे",
                                            titleEn: "UPSC & State PSC / MPSC (Articles 315-323): MPSC Chairman and members appointed by Governor, but removable ONLY by the President on grounds of misbehavior post-Supreme Court inquiry; MPSC tenure: 6 years or 62 years of age (UPSC 6 years or 65 age); Submits annual report to Governor",
                                            chips: ["MPSC कलम ३१५", "नियुक्ती राज्यपाल / पदमुक्ती राष्ट्रपती", "कार्यकाळ ६ वर्षे किंवा ६२ वर्षे वय", "वार्षिक अहवाल"]
                                        },
                                        {
                                            id: "st_gc_p15_01_03",
                                            titleMr: "CAG आणि वित्त आयोग: १) नियंत्रक व महालेखापरीक्षक (CAG - कलम १४८): 'सार्वजनिक तिजोरीचे रक्षक' (Guardian of Public Purse) व डॉ. आंबेडकरांच्या मते संविधानातील सर्वात महत्त्वाचे पद; नियुक्ती राष्ट्रपतींकडून; कार्यकाळ ६ वर्षे किंवा ६५ वर्षे वय; केंद्र व राज्यांचे हिशेब तपासणे; २) वित्त आयोग (Finance Commission - कलम २८०): दर ५ वर्षांनी राष्ट्रपतींकडून स्थापना; १ अध्यक्ष + ४ सदस्य; केंद्र व राज्यांमध्ये कर महसुलाची विभागणी (Devolution of Taxes) करण्याची शिफारस करणे",
                                            titleEn: "CAG & Finance Commission: CAG (Article 148: Guardian of the Public Purse; 6-year/65-age tenure; audits Union and State accounts); Finance Commission (Article 280: Quasi-judicial body appointed by President every 5 years; 1 Chairman + 4 Members; Recommends tax devolution formula between Centre and States)",
                                            chips: ["कॅग CAG कलम १४८ (तिजोरीचे रक्षक)", "कार्यकाळ ६ वर्षे / ६५ वय", "वित्त आयोग कलम २८० (दर ५ वर्षांनी)", "कर वाटप शिफारस"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय राज्यघटना व राजकारण", standard: "एम. लक्ष्मीकांत", chapterRef: "भाग ७: घटनात्मक संस्था (EC, UPSC, CAG, FC)" },
                                        { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण १४: घटनात्मक व वैधानिक आयोग" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १६: पंचायत राज उत्क्रांती, विविध समित्या व ७३ वी घटनादुरुस्ती
                        // =========================================================================
                        {
                            id: "gc_pol_c16",
                            code: "CP16",
                            section: "F",
                            slug: "panchayati-raj-evolution-committees-and-73rd-amendment-1992",
                            nameMr: "पंचायत राजची उत्क्रांती: बलवंतराय मेहता, वसंतराव नाईक समिती व ७३ वी घटनादुरुस्ती (१९९२)",
                            nameEn: "Panchayati Raj Evolution: Balwantrai Mehta, Vasantrao Naik Panel & 73rd Amendment 1992",
                            name: "पंचायत राज उत्क्रांती व ७३ वी दुरुस्ती",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_pol_c16",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_pol_c15",
                            nextChapterId: "gc_pol_c17",
                            metaDescriptionMr: "बलवंतराय मेहता समिती (१९५७ - त्रिस्तरीय व्यवस्था), अशोक मेहता (१९७७ - द्विस्तरीय), वसंतराव नाईक समिती (१९६० - जिल्हा परिषद सर्वोच्च संस्था शिफारस), १ मे १९६२ महाराष्ट्र पंचायत राज स्थापना, ७३ वी घटनादुरुस्ती १९९२ (भाग ९, ११ वे परिशिष्ट २९ विषय, कलम २४३ ते २४३O).",
                            metaDescriptionEn: "Balwantrai Mehta (1957 3-tier), Ashok Mehta (1977 2-tier), Vasantrao Naik Committee (1960 MH model ZP apex body), Maharashtra Panchayati Raj inception on 1 May 1962, and 73rd Amendment 1992 (Part IX, 11th Schedule 29 items, Arts 243-243O).",
                            notesJsonPath: "/data/notes/group_c/prelims/polity/c16_panchayati_raj_73rd.json",
                            quizTag: "gc_pol_pr_73rd_01",
                            tags: ["Panchayati Raj", "73rd Amendment 1992", "Part IX 11th Schedule 29 Items", "Balwantrai Mehta 1957", "Vasantrao Naik Committee 1960", "1 May 1962 MH PR", "High-Weightage"],
                            searchKeywords: ["73rd constitutional amendment act 1992 part ix 11th schedule 29 items", "balwantrai mehta committee 1957 democratic decentralisation", "vasantrao naik committee 1960 maharashtra zilla parishad powerful body", "maharashtra 9th state to adopt panchayati raj 1 may 1962", "article 243d reservation for women 50 percent maharashtra", "पंचायत राज ७३ वी घटनादुरुस्ती १९९२", "११ वे परिशिष्ट २९ विषय भाग ९", "बलवंतराय मेहता समिती १९५७", "वसंतराव नाईक समिती १९६० (ZP सर्वोच्च)", "१ मे १९६२ महाराष्ट्र पंचायत राज", "५०% महिला आरक्षण"],
                            topics: [
                                {
                                    id: "top_gc_p16_01",
                                    nameMr: "पंचायत राज समित्यांची वाटचाल, वसंतराव नाईक अहवाल आणि ७३ वी घटनादुरुस्ती",
                                    nameEn: "Panchayati Raj Evolution, Vasantrao Naik Framework & The 73rd Amendment Act",
                                    subtopics: [
                                        {
                                            id: "st_gc_p16_01_01",
                                            titleMr: "राष्ट्रीय स्तरावरील समित्या: १) बलवंतराय मेहता समिती (१९५७): समुदाय विकास कार्यक्रमाच्या मूल्यमापनासाठी; 'लोकशाही विकेंद्रीकरण' (Democratic Decentralisation) ही संकल्पना मांडली; त्रिस्तरीय पंचायत राज व्यवस्थेची शिफारस (ग्रामपंचायत, पंचायत समिती, जिल्हा परिषद); २ ऑक्टोबर १९५९ रोजी राजस्थानमधील नागौर येथे पं. नेहरूंच्या हस्ते भारतातील पहिल्या पंचायत राज व्यवस्थेचे उद्घाटन झाले; २) अशोक मेहता समिती (१९७७): जनता पक्षाने नेमलेली समिती; द्विस्तरीय मॉडेलची शिफारस (जिल्हा परिषद व मंडळ पंचायत); ३) एल. एम. सिंघवी समिती (१९८६): पंचायत राज संस्थांना घटनात्मक दर्जा देण्याची सर्वप्रथम शिफारस",
                                            titleEn: "National Panchayati Raj Committees: Balwantrai Mehta Committee (1957) coined 'Democratic Decentralisation' recommending 3-tier structure (Gram Panchayat, Panchayat Samiti, ZP); Incepted at Nagaur (Rajasthan) on 2 Oct 1959; Ashok Mehta Committee (1977) recommended 2-tier system (ZP & Mandal Panchayat); L.M. Singhvi Committee (1986) demanded constitutional status",
                                            chips: ["बलवंतराय मेहता समिती १९५७ (त्रिस्तरीय)", "नागौर राजस्थान २ ऑक्टो १९५९ (पहिले राज्य)", "अशोक मेहता समिती १९७७ (द्विस्तरीय)", "एल एम सिंघवी (घटनात्मक दर्जा शिफारस)"]
                                        },
                                        {
                                            id: "st_gc_p16_01_02",
                                            titleMr: "महाराष्ट्रातील पंचायत राज समित्या: १) वसंतराव नाईक समिती (१९६०): महाराष्ट्र पंचायत राजचा पाया; मेहता समितीच्या विरुद्ध जाऊन महाराष्ट्रात 'जिल्हा परिषद' ही सर्वात शक्तिशाली व मुख्य प्रशासकीय संस्था असावी अशी शिफारस केली; IAS दर्जाचा मुख्य कार्यकारी अधिकारी (CEO) नेमण्याची शिफारस; शिफारशीनुसार १ मे १९६२ रोजी महाराष्ट्रात त्रिस्तरीय पंचायत राज व्यवस्था अस्तित्वात आली (महाराष्ट्र हे पंचायत राज स्वीकारणारे देशातील ९ वे राज्य ठरले); २) ल. ना. बोंगिरवार समिती (१९७०); ३) पी. बी. पाटील समिती (१९८४ - सरपंच थेट लोकांमधून निवडण्याची शिफारस)",
                                            titleEn: "Maharashtra State Committees: Vasantrao Naik Committee (1960) established the Maharashtra Model deviating from Mehta panel by making Zilla Parishad the apex powerful body with an IAS Chief Executive Officer (CEO); Maharashtra became the 9th state on 1 May 1962; L.N. Bongirwar Committee (1970); P.B. Patil Committee (1984)",
                                            chips: ["वसंतराव नाईक समिती १९६० (ZP सर्वोच्च संस्था)", "१ मे १९६२ (महाराष्ट्र ९ वे राज्य)", "ल ना बोंगिरवार समिती १९७०", "पी बी पाटील समिती १९८४"]
                                        },
                                        {
                                            id: "st_gc_p16_01_03",
                                            titleMr: "७३ वी घटनादुरुस्ती कायदा (१९९२): २४ एप्रिल १९९३ रोजी अंमलात आला (म्हणून २४ एप्रिल हा 'राष्ट्रीय पंचायत राज दिन'); संविधानात 'भाग ९' पुन्हा समाविष्ट केला (कलम २४३ ते २४३O); संविधानात '११ वे परिशिष्ट' जोडले (पंचायत राजच्या अखत्यारीतील २९ विषय); अनिवार्य तरतुदी: त्रिस्तरीय रचना, ५ वर्षांचा निश्चित कार्यकाळ, कलम २४३K राज्य निवडणूक आयोग, कलम २४३I राज्य वित्त आयोग; कलम २४३D आरक्षण: SC/ST ना लोकसंख्येच्या प्रमाणात आणि महिलांना किमान १/३ आरक्षण (महाराष्ट्रात एप्रिल २०११ पासून महिलांना ५०% आरक्षण लागू)",
                                            titleEn: "73rd Constitutional Amendment Act 1992: Enforced on 24 April 1993 (National Panchayati Raj Day); Inserted Part IX (Articles 243 to 243O) and Eleventh Schedule containing 29 functional items; Mandatory features: 3-tier structure, 5-year fixed tenure, State Election Commission (243K), State Finance Commission (243I); Article 243D reservations (Maharashtra implemented 50% women reservation in 2011)",
                                            chips: ["७३ वी घटनादुरुस्ती १९९२ (२४ एप्रिल १९९३ लागू)", "भाग ९ (कलम २४३ ते २४३O)", "११ वे परिशिष्ट (२९ विषय)", "राज्य निवडणूक आयोग (२४३K)", "महिला आरक्षण ५०% (महाराष्ट्र)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "पंचायत राज व्यवस्था", standard: "किशोर लवटे", chapterRef: "प्रकरण १ व २: पंचायत राज उत्क्रांती व समित्या" },
                                        { book: "भारतीय राज्यघटना व राजकारण", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण ३८: पंचायत राज" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १७: महाराष्ट्रातील ग्रामीण स्थानिक स्वराज्य संस्था (GP, PS, ZP)
                        // =========================================================================
                        {
                            id: "gc_pol_c17",
                            code: "CP17",
                            section: "F",
                            slug: "rural-local-government-in-maharashtra-gram-panchayat-ps-zp",
                            nameMr: "महाराष्ट्रातील ग्रामीण स्थानिक स्वराज्य संस्था: ग्रामपंचायत, पंचायत समिती व जिल्हा परिषद",
                            nameEn: "Rural Local Bodies in Maharashtra: Gram Panchayat, Panchayat Samiti & Zilla Parishad",
                            name: "ग्रामीण स्थानिक संस्था: GP, PS व ZP",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_pol_c17",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_pol_c16",
                            nextChapterId: "gc_pol_c18",
                            metaDescriptionMr: "मुंबई ग्रामपंचायत अधिनियम १९५८ (रचना ७ ते १७ सदस्य, सरपंच, ग्रामसभा वर्षातून किमान ४, ग्रामसेवक), महाराष्ट्र जिल्हा परिषद व पंचायत समिती अधिनियम १९६१ (ZP रचना ५० ते ७५ सदस्य, ZP अध्यक्ष, CEO मुख्य कार्यकारी अधिकारी IAS, BDO गट विकास अधिकारी, समित्या).",
                            metaDescriptionEn: "Maharashtra Village Panchayats Act 1958 (7-17 members, Sarpanch, Gram Sabha min 4 sittings, Gram Sevak secretary), and Maharashtra Zilla Parishad & Panchayat Samiti Act 1961 (ZP 50-75 members, ZP President, CEO IAS, BDO, Subject Committees).",
                            notesJsonPath: "/data/notes/group_c/prelims/polity/c17_rural_local_government_mh.json",
                            quizTag: "gc_pol_rural_local_01",
                            tags: ["Gram Panchayat Act 1958", "Sarpanch Gram Sevak", "Gram Sabha 4 Meetings", "Zilla Parishad Act 1961", "CEO IAS Officer", "BDO Panchayat Samiti", "High-Weightage"],
                            searchKeywords: ["maharashtra village panchayat act 1958 members 7 to 17", "gram sabha minimum 4 meetings in a financial year sarpanch head", "gram sevak secretary of gram panchayat appointed by ceo zp", "maharashtra zilla parishad and panchayat samiti act 1961", "chief executive officer ceo ias administrative head of zp", "block development officer bdo administrative head of panchayat samiti", "ग्रामपंचायत कायदा १९५८ सदस्य संख्या ७ ते १७", "ग्रामसभा वर्षातून ४ बैठका", "सरपंच व ग्रामसेवक", "जिल्हा परिषद कायदा १९६१", "मुख्य कार्यकारी अधिकारी CEO IAS", "गट विकास अधिकारी BDO"],
                            topics: [
                                {
                                    id: "top_gc_p17_01",
                                    nameMr: "ग्रामपंचायत, पंचायत समिती व जिल्हा परिषद रचना, पदाधिकारी व प्रशासकीय अधिकारी",
                                    nameEn: "Tripartite Rural Administration: Statutory Codes, Elected Leaders & Bureaucracy",
                                    subtopics: [
                                        {
                                            id: "st_gc_p17_01_01",
                                            titleMr: "ग्रामपंचायत प्रशासन (मुंबई ग्रामपंचायत अधिनियम १९५८): त्रिस्तरीय रचनेचा पायाभूत घटक; किमान ६०० लोकसंख्येसाठी (डोंगराळ भागात ३००) स्थापन; सदस्य संख्या: लोकसंख्येनुसार ७ ते १७ (विषम संख्येत); वॉर्डांमधून प्रौढ मतदान पद्धतीने निवड; राजकीय प्रमुख: सरपंच (उपसरपंच); प्रशासकीय प्रमुख: 'ग्रामसेवक' (जिल्हा परिषदेचा वर्ग-३ चा सेवक, नियुक्ती ZP मुख्य कार्यकारी अधिकाऱ्याकडून CEO); ग्रामसभा: गावातील सर्व प्रौढ नोंदणीकृत मतदारांची सभा; आर्थिक वर्षात किमान ४ बैठका घेणे अनिवार्य (१ मे, १५ ऑगस्ट, २ ऑक्टोबर, २६ जानेवारी); अध्यक्षस्थान सरपंच भूषवतात",
                                            titleEn: "Gram Panchayat Setup (Bombay Village Panchayats Act 1958): Base tier established for population >600 (300 in hilly areas); Member strength: 7 to 17 based on population; Political head: Sarpanch; Administrative head: Gram Sevak (Class-III staff appointed by ZP CEO); Gram Sabha consists of all adult registered voters in village, requiring minimum 4 statutory sittings per financial year chaired by Sarpanch",
                                            chips: ["ग्रामपंचायत कायदा १९५८", "सदस्य संख्या ७ ते १७", "सरपंच राजकीय प्रमुख", "ग्रामसेवक (ZP CEO कडून नियुक्ती)", "ग्रामसभा (किमान ४ बैठका अनिवार्य)"]
                                        },
                                        {
                                            id: "st_gc_p17_01_02",
                                            titleMr: "पंचायत समिती (महाराष्ट्र ZP व PS अधिनियम १९६१): मध्यम स्तर / तालुका पातळीवरील दुवा; सदस्य रचना: थेट लोकांमधून निर्वाचित सदस्य (किमान १५ ते कमाल २५); राजकीय प्रमुख: सभापती (उपसभापती - अडीच वर्षे कार्यकाळ); प्रशासकीय प्रमुख: 'गट विकास अधिकारी' (Block Development Officer - BDO वर्ग-१ चा अधिकारी, MPSC द्वारे निवड व शासनाकडून नियुक्ती); पंचायत समितीचा सचिव म्हणून BDO काम पाहतो; विकास गट स्तरावर विविध शासकीय योजना राबवणे हे मुख्य कार्य",
                                            titleEn: "Panchayat Samiti Framework (Act of 1961): Intermediate block tier; Directly elected member strength varies between 15 and 25; Political head: Sabhapati (2.5 years term); Administrative executive: Block Development Officer (BDO Class-I appointed by State via MPSC selection) acting as Samiti ex-officio Secretary",
                                            chips: ["पंचायत समिती (मध्यम स्तर तालुका)", "महाराष्ट्र ZP व PS कायदा १९६१", "सभापती (अडीच वर्षे कार्यकाळ)", "गट विकास अधिकारी (BDO वर्ग-१)"]
                                        },
                                        {
                                            id: "st_gc_p17_01_03",
                                            titleMr: "जिल्हा परिषद (Zilla Parishad - अधिनियम १९६१): महाराष्ट्रातील पंचायत राजची सर्वोच्च व सर्वात शक्तिशाली संस्था; सदस्य संख्या: किमान ५० ते कमाल ७५ थेट निर्वाचित सदस्य; राजकीय प्रमुख: 'जिल्हा परिषद अध्यक्ष' (राज्यमंत्र्याचा दर्जा, अडीच वर्षे कार्यकाळ); प्रशासकीय प्रमुख: 'मुख्य कार्यकारी अधिकारी' (Chief Executive Officer - CEO, भारतीय प्रशासकीय सेवेतील IAS दर्जाचा वरिष्ठ अधिकारी, शासनाकडून नियुक्ती); समित्यांची रचना: स्थायी समिती (सर्वात महत्त्वाची - ZP अध्यक्ष पदसिद्ध अध्यक्ष असतात) + ९ विषय समित्या (वित्त, बांधकाम, कृषी, शिक्षण, आरोग्य इ.)",
                                            titleEn: "Zilla Parishad Architecture (Act of 1961): Apex tier of rural local governance; Directly elected membership ranges from 50 to 75; Political head: ZP President (enjoys status of Minister of State, 2.5-year term); Administrative head: Chief Executive Officer (CEO - Senior IAS officer appointed by State); Standing Committee (chaired by ZP President) alongside 9 Subject Committees",
                                            chips: ["जिल्हा परिषद सर्वोच्च संस्था", "सदस्य संख्या ५० ते ७५", "ZP अध्यक्ष (राज्यमंत्री दर्जा)", "मुख्य कार्यकारी अधिकारी (CEO - IAS)", "स्थायी समिती"]
                                        }
                                    ],
                                    sources: [
                                        { book: "पंचायत राज व्यवस्था", standard: "किशोर लवटे", chapterRef: "प्रकरण ३, ४ व ५: ग्रामपंचायत, पंचायत समिती व जिल्हा परिषद" },
                                        { book: "महाराष्ट्र स्थानिक स्वराज्य संस्था अधिनियम", standard: "शासकीय गॅझेट", chapterRef: "१९५८ व १९६१ अधिनियम कलमे" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १८: नागरी स्थानिक संस्था (७४ वी दुरुस्ती) व मास्टर रिव्हिजन
                        // =========================================================================
                        {
                            id: "gc_pol_c18",
                            code: "CP18",
                            section: "F",
                            slug: "urban-local-bodies-74th-amendment-and-prelims-polity-revision",
                            nameMr: "नागरी स्थानिक संस्था (७४ वी दुरुस्ती, मनपा, नगरपालिका, नगरपंचायत) व मास्टर रिव्हिजन",
                            nameEn: "Urban Local Bodies (74th Amendment: Municipal Corporations, Councils) & Master Revision",
                            name: "नागरी स्थानिक संस्था व मास्टर रिव्हिजन",
                            category: "REVISION",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_pol_c18",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_pol_c17",
                            nextChapterId: null,
                            metaDescriptionMr: "७४ वी घटनादुरुस्ती १९९२ (भाग ९A, १२ वे परिशिष्ट १८ विषय), महानगरपालिका (महापौर, मनपा आयुक्त IAS, प्रभाग समित्या), नगरपरिषद (अ, ब, क वर्ग, मुख्याधिकारी), नगरपंचायत, कटक मंडळे (Cantonment Boards संरक्षण मंत्रालय), आणि १० वर्षांचे PYQ विश्लेषण.",
                            metaDescriptionEn: "74th Amendment 1992 (Part IXA, 12th Schedule 18 items), Municipal Corporation (Mayor, Municipal Commissioner IAS, Ward Committees), Municipal Councils (A, B, C classes, Chief Officer), Cantonment Boards, and 10-Year MPSC Prelims PYQ Trends.",
                            notesJsonPath: "/data/notes/group_c/prelims/polity/c18_urban_local_bodies_revision.json",
                            quizTag: "gc_pol_urban_local_01",
                            tags: ["74th Amendment 1992", "Part IXA 12th Schedule 18 Items", "Municipal Corporation Mayor", "Municipal Commissioner IAS", "Cantonment Boards Defence", "PYQ Trends", "High-Weightage"],
                            searchKeywords: ["74th constitutional amendment act 1992 part ixa 12th schedule 18 items", "municipal corporation maharashtra commissioner ias mayor 2.5 years", "municipal council classification a b c chief officer", "cantonment boards cantonment act 2006 ministry of defence 7 in maharashtra", "mpsc prelims polity 15 questions strategy pyq trend analysis", "७४ वी घटनादुरुस्ती १९९२ भाग ९A १२ वे परिशिष्ट १८ विषय", "महानगरपालिका महापौर व आयुक्त IAS", "नगरपरिषद मुख्याधिकारी अ ब क वर्ग", "कटक मंडळे संरक्षण मंत्रालय (महाराष्ट्रात ७)", "१० वर्षांचे PYQ विश्लेषण"],
                            topics: [
                                {
                                    id: "top_gc_p18_01",
                                    nameMr: "नागरी स्थानिक संस्था (मनपा, नगरपरिषद, कटक मंडळे) आणि पोलिटी मास्टर रिव्हिजन",
                                    nameEn: "Urban Governance Tiers, Cantonment Architecture & Prelims Polity Consolidation",
                                    subtopics: [
                                        {
                                            id: "st_gc_p18_01_01",
                                            titleMr: "७४ वी घटनादुरुस्ती (१९९२) व नागरी संस्था प्रकार: १ जून १९९३ रोजी अंमलात आली; संविधानात 'भाग ९A' (कलम २४३P ते २४३ZG) आणि '१२ वे परिशिष्ट' (नागरी संस्थांचे १८ विषय) जोडले; ३ प्रकारच्या संस्था: १) नगरपंचायत (ग्रामीण भागातून नागरी भागात रूपांतरित होणारा संक्रमणशील भाग - लोकसंख्या १०,००० ते २५,०००, सदस्य संख्या १७), २) नगरपरिषद / नगरपालिका (लहान नागरी क्षेत्र - लोकसंख्या २५,००० पेक्षा जास्त, अ, ब, क वर्ग वर्गीकरण; राजकीय प्रमुख नगराध्यक्ष, प्रशासकीय प्रमुख मुख्याधिकारी Chief Officer), ३) महानगरपालिका (मोठे नागरी क्षेत्र - लोकसंख्या ३ लाखांपेक्षा जास्त)",
                                            titleEn: "74th Amendment Act 1992 & Urban Tiers: Effective 1 June 1993; Inserted Part IXA (Articles 243P to 243ZG) and Twelfth Schedule (18 functional items); 3 Urban Tiers: 1) Nagar Panchayat (Transitional rural-to-urban areas with 10k-25k population, 17 members), 2) Municipal Council (Small urban area >25k classified into A, B, C grades; Political head: Nagaradhyaksha; Executive: Chief Officer), 3) Municipal Corporation (>3 Lakh population)",
                                            chips: ["७४ वी घटनादुरुस्ती १९९२", "भाग ९A (१२ वे परिशिष्ट १८ विषय)", "नगरपंचायत (१७ सदस्य)", "नगरपरिषद मुख्याधिकारी", "महानगरपालिका"]
                                        },
                                        {
                                            id: "st_gc_p18_01_02",
                                            titleMr: "महानगरपालिका व कटक मंडळे: १) महानगरपालिका (Municipal Corporation): मुंबई महानगरपालिका कायदा १८८८ व महाराष्ट्र महानगरपालिका अधिनियम १९४९; राजकीय प्रमुख: महापौर (Mayor - अडीच वर्षे कार्यकाळ, शहराचा प्रथम नागरिक); प्रशासकीय प्रमुख: 'महानगरपालिका आयुक्त' (Municipal Commissioner - वरिष्ठ IAS अधिकारी, शासनाकडून नियुक्ती, सर्व कार्यकारी अधिकार); प्रभाग समित्या (Ward Committees); २) कटक मंडळे (Cantonment Boards): छावणी परिषद कायदा २००६; केंद्रीय संरक्षण मंत्रालयाच्या (Ministry of Defence) थेट नियंत्रणाखाली; महाराष्ट्रात एकूण ७ कटक मंडळे आहेत (पुणे, खडकी, देहूरोड, अहमदनगर, देवळाली नाशिक, कामठी नागपूर, औरंगाबाद)",
                                            titleEn: "Corporations & Cantonment Boards: Municipal Corporation (Act of 1949 & BMC 1888): Political head Mayor (2.5 years term); Executive head Municipal Commissioner (Senior IAS wielding full administrative powers); Cantonment Boards (Cantonments Act 2006 under Union Ministry of Defence; Maharashtra has 7 Cantonment Boards: Pune, Khadki, Dehu Road, Ahmednagar, Deolali, Kamptee, Aurangabad)",
                                            chips: ["महानगरपालिका महापौर (प्रथम नागरिक)", "मनपा आयुक्त (IAS अधिकारी)", "कटक मंडळे Cantonment Boards (संरक्षण मंत्रालय)", "महाराष्ट्रात ७ कटक मंडळे"]
                                        },
                                        {
                                            id: "st_gc_p18_01_03",
                                            titleMr: "MPSC पूर्व परीक्षा पोलिटी १० वर्षांचे विश्लेषण (१५ पैकी १५ गुण रणनीती): प्रश्न वितरणाचा कल: मूलभूत हक्क व DPSP (३-४ प्रश्न हमखास), संसद व कायदेप्रक्रिया (२-३ प्रश्न), राष्ट्रपती व राज्यपाल तुलना (२ प्रश्न), न्यायव्यवस्था व आयोग (२ प्रश्न), ७३ वी व ७४ वी घटनादुरुस्ती आणि महाराष्ट्र स्थानिक स्वराज्य संस्था (४-५ प्रश्न - सर्वाधिक वेटेज); कलमे, घटनादुरुस्त्या आणि विधाने-कारणे सोडवण्याची अचूक एलिमिनेशन पद्धत",
                                            titleEn: "10-Year MPSC Group C Polity Trend Analytics (15/15 Marks Strategy): High-yield distribution: Fundamental Rights & DPSP (3-4 Qs), Parliament & Bills (2-3 Qs), President vs Governor comparison (2 Qs), Judiciary & Bodies (2 Qs), 73rd/74th Amendments & Maharashtra Panchayati Raj (4-5 Qs - highest weightage); Clause-based elimination techniques",
                                            chips: ["PYQ ट्रेंड्स विश्लेषण", "१५ पैकी १५ गुण रणनीती", "पंचायत राज ४-५ प्रश्न हमखास", "मूलभूत हक्क ३ प्रश्न", "एलिमिनेशन तंत्र"]
                                        }
                                    ],
                                    sources: [
                                        { book: "पंचायत राज व्यवस्था", standard: "किशोर लवटे", chapterRef: "प्रकरण ६ व ७: नागरी स्थानिक संस्था व कटक मंडळे" },
                                        { book: "MPSC मागील वर्षांच्या प्रश्नपत्रिका संच", standard: "२०१३ ते २०२५", chapterRef: "राज्यव्यवस्था व पंचायत राज प्रश्न विश्लेषण" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },


        // ४. अर्थव्यवस्था (`gc_pre_economics`)
        {
            id: "gc_pre_economics",
            code: "ECO",
            slug: "indian-economy-planning-public-finance",
            nameMr: "भारतीय अर्थव्यवस्था, नियोजन व शासकीय वित्त",
            nameEn: "Indian Economy, Planning & Public Finance",
            name: "अर्थव्यवस्था (Economics)",
            officialScope: "National Income, Five Year Plans & NITI Aayog, Poverty & Unemployment, Banking & RBI, Public Finance & Budget, Inflation, and Foreign Trade",
            version: "1.0",
            verifiedDate: "2026-10-28",
            notesJsonBaseDir: "/data/notes/group_c/prelims/economics/",
            theme: { primaryColor: "#0f766e", bgColor: "#f0fdfa", iconClass: "ri-bank-line" },
            metrics: { totalChapters: 16, totalEstimatedHours: 44, avgQuestionsInPrelims: 15, targetMarks: 15, weightageRange: "14-16 Questions" },
            subjectTags: ["Core-GS", "Group-C-Prelims", "Combined-Common", "Data-Oriented", "High-Weightage"],
            filterCategory: "GS",
            searchKeywords: ["mpsc group c economics", "national income gdp gva", "banking rbi monetary policy", "अर्थव्यवस्था"],
            referenceSources: [
                { name: "भारतीय अर्थव्यवस्था - रंजन कोळंबे", role: "पायाभूत संकल्पना" },
                { name: "भारतीय अर्थव्यवस्था - किरण देसले", role: "आकडेवारी व योजना" }
            ],
            chapters: [
                {
                    id: "gc_pre_economics",
                    code: "ECO",
                    slug: "indian-economy-planning-public-finance-prelims",
                    nameMr: "भारतीय अर्थव्यवस्था, नियोजन व शासकीय वित्त",
                    nameEn: "Indian Economy, Planning & Public Finance",
                    name: "अर्थव्यवस्था (Economics)",
                    officialScope: "Indian Economy, Sectoral Composition, National Income Aggregates (GDP, GVA), Planning Evolution & NITI Aayog, Poverty & Unemployment Estimation, Inflation Metrics (CPI, WPI), RBI & Monetary Policy, Banking Structure & Reforms (NPA, IBC), Public Finance & Deficit Framework (FRBM Act), Taxation System & GST, External Trade & Balance of Payments (BoP), International Financial Institutions (IMF, World Bank, WTO), and Agriculture & Cooperatives in Maharashtra",
                    version: "1.0",
                    verifiedDate: "2026-10-28",
                    notesJsonBaseDir: "/data/notes/group_c/prelims/economics/",


                    theme: {
                        primaryColor: "#0f766e",        // Deep Teal / Fiscal Treasury Theme
                        bgColor: "#f0fdfa",
                        iconClass: "ri-bank-line"
                    },


                    metrics: {
                        totalChapters: 16,
                        totalEstimatedHours: 44,
                        avgQuestionsInPrelims: 15,
                        targetMarks: 15,
                        weightageRange: "14-16 Questions"
                    },


                    subjectTags: [
                        "Core-GS",
                        "Group-C-Prelims",
                        "Pre-Cum-Mains",
                        "Data-Driven",
                        "Concept-Heavy",
                        "High-Weightage",
                        "Standard-Kolambe-Desale"
                    ],


                    filterCategory: "GS",
                    searchKeywords: [
                        "mpsc group c economics prelims", "national income gdp gva cso base year 2011 12",
                        "five year plans niti aayog governing council", "poverty line tendulkar rangarajan committee mpi",
                        "unemployment plfs inflation cpi wpi rbi monetary policy repo rate",
                        "banking nationalisation npa sarfaesi ibc 2016", "budget fiscal deficit frbm act gst finance commission",
                        "balance of payments bop current account deficit imf world bank wto",
                        "अर्थव्यवस्था पूर्व परीक्षा", "राष्ट्रीय उत्पन्न GDP GVA", "नियोजन व नीती आयोग", "दारिद्र्य तेंडुलकर समिती", "चलनवाढ CPI WPI", "RBI मौद्रिक धोरण", "बँकिंग सुधारणा NPA", "शासकीय वित्त वित्तीय तूट FRBM", "GST कररचना"
                    ],


                    referenceSources: [
                        {
                            name: "भारतीय अर्थव्यवस्था (भाग १ व २) - रंजन कोळंबे",
                            role: "समग्रलक्षी अर्थशास्त्र, बँकिंग व शासकीय वित्ताचा पायाभूत संदर्भ ग्रंथ"
                        },
                        {
                            name: "भारतीय अर्थव्यवस्था - किरण देसले (Deepstambh)",
                            role: "आकडेवारी, आयोग अहवाल व शासकीय योजनांचे सखोल विश्लेषण"
                        },
                        {
                            name: "Economic Survey of Maharashtra & Union Budget",
                            role: "अधिकृत आर्थिक पाहणी व चालू आकडेवारी"
                        },
                        {
                            name: "NCERT Class 11 & 12 Economics",
                            role: "समग्रलक्षी अर्थशास्त्र व भारतीय आर्थिक विकास पायाभूत संकल्पना"
                        }
                    ],


                    chapters: [
                        // =========================================================================
                        // प्रकरण १: भारतीय अर्थव्यवस्थेची मूलभूत वैशिष्ट्ये व क्षेत्रांची रचना
                        // =========================================================================
                        {
                            id: "gc_eco_c01",
                            code: "CE01",
                            section: "A",
                            slug: "characteristics-of-indian-economy-and-sectoral-composition",
                            nameMr: "भारतीय अर्थव्यवस्थेची मूलभूत वैशिष्ट्ये व क्षेत्रांची रचना (कृषी, उद्योग, सेवा)",
                            nameEn: "Characteristics of Indian Economy & Sectoral Composition (Agri, Industry, Services)",
                            name: "अर्थव्यवस्थेची वैशिष्ट्ये व क्षेत्रे",
                            category: "CORE",
                            difficulty: "EASY",
                            priority: "HIGH",
                            estimatedHours: 2,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_eco_c01",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: null,
                            nextChapterId: "gc_eco_c02",
                            metaDescriptionMr: "विकसनशील अर्थव्यवस्थेची लक्षणे (कमी दरडोई उत्पन्न, शेतीवरील अतिरिक्त भार, लोकसंख्या विस्फोट, भांडवलाची टंचाई), आणि प्राथमिक, दुय्यम व तृतीयक क्षेत्रांचा GDP व रोजगारातील बदलता वाटा.",
                            metaDescriptionEn: "Developing economy features: Low per-capita income, agrarian dependency, disguised unemployment, capital deficiency; Shift in Sectoral Share across Primary, Secondary, and Tertiary sectors in GVA vs Employment.",
                            notesJsonPath: "/data/notes/group_c/prelims/economics/c01_characteristics_sectoral.json",
                            quizTag: "gc_eco_char_01",
                            tags: ["Developing Economy", "Sectoral Share GVA", "Primary Secondary Tertiary", "Employment Share", "High-Weightage"],
                            searchKeywords: ["characteristics of indian economy developing economy mixed economy", "sectoral share in gva agriculture industry services trends", "employment share across primary secondary tertiary", "structural change in indian economy", "भारतीय अर्थव्यवस्थेची वैशिष्ट्ये मिश्र अर्थव्यवस्था", "GVA क्षेत्रांचा वाटा कृषी उद्योग सेवा", "रोजगार निर्मिती कल"],
                            topics: [
                                {
                                    id: "top_gc_e01_01",
                                    nameMr: "भारतीय अर्थव्यवस्थेची लक्षणे आणि तिन्ही क्षेत्रांचे बदलते योगदान",
                                    nameEn: "Features of Developing India & Structural Transitions Across Economic Sectors",
                                    subtopics: [
                                        {
                                            id: "st_gc_e01_01_01",
                                            titleMr: "विकसनशील अर्थव्यवस्थेची ठळक वैशिष्ट्ये: मिश्र अर्थव्यवस्था (सार्वजनिक व खाजगी क्षेत्रांचे सहअस्तित्व); अल्प दरडोई उत्पन्न (Low Per Capita Income); शेती क्षेत्रावरील प्रचंड अवलंबित्व (अजूनही सुमारे ४५-४८% श्रमशक्ती शेतीत कार्यरत); लोकसंख्येचा प्रचंड दबाव; उत्पन्नातील विषमता (Gini Coefficient द्वारे मोजमाप); भांडवल निर्मितीचा कमी दर आणि प्रच्छन्न/छुपी बेरोजगारी",
                                            titleEn: "Salient Features of Indian Economy: Dualistic Mixed Economy; Low per-capita income compared to developed nations; Heavy dependency on agriculture (~45-48% workforce); Population explosion pressure; Pronounced income inequalities; Low rate of capital formation and agrarian disguised unemployment",
                                            chips: ["मिश्र अर्थव्यवस्था (Mixed Economy)", "अल्प दरडोई उत्पन्न", "शेतीवर ४५-४८% अवलंबित्व", "भांडवल टंचाई", "उत्पन्नातील विषमता"]
                                        },
                                        {
                                            id: "st_gc_e01_01_02",
                                            titleMr: "क्षेत्रनिहाय GVA योगदान व विसंगती: १) प्राथमिक क्षेत्र (कृषी व संलग्न - GVA मधील वाटा सुमारे १८-२०%, परंतु रोजगार वाटा सुमारे ४५%); २) दुय्यम क्षेत्र (उद्योग, उत्पादन, बांधकाम - GVA वाटा सुमारे २८-३०%); ३) तृतीयक क्षेत्र (सेवा क्षेत्र - GVA मधील वाटा ५२-५५% सर्वाधिक, परंतु रोजगार वाटा केवळ ३०-३२%); विसंगती: भारताने दुय्यम क्षेत्राचा पूर्ण विकास न करता थेट कृषीकडून सेवा क्षेत्राकडे संक्रमण केले (Service-led Growth)",
                                            titleEn: "Sectoral Share Transition & Asymmetry: Primary (Agriculture: ~18-20% in GVA, ~45% employment); Secondary (Industry & Manufacturing: ~28-30% GVA); Tertiary (Services: ~52-55% GVA, ~30-32% employment); Unique structural paradox of leaping directly from agrarian to service-led economy bypassing manufacturing maturity",
                                            chips: ["सेवा क्षेत्र ५२-५५% GVA वाटा", "कृषी क्षेत्र ४५% रोजगार वाटा", "प्राथमिक दुय्यम तृतीयक रचना", "सर्व्हिस-लेड ग्रोथ (Service-led Growth)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय अर्थव्यवस्था (भाग १)", standard: "रंजन कोळंबे", chapterRef: "प्रकरण १: भारतीय अर्थव्यवस्था - स्वरूप व आव्हाने" },
                                        { book: "भारतीय अर्थव्यवस्था", standard: "किरण देसले", chapterRef: "प्रकरण १: भारताची अर्थव्यवस्था एक दृष्टिक्षेप" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण २: राष्ट्रीय उत्पन्न: संकल्पना, मोजमाप पद्धती, GDP, GNP व GVA
                        // =========================================================================
                        {
                            id: "gc_eco_c02",
                            code: "CE02",
                            section: "A",
                            slug: "national-income-aggregates-gdp-gnp-and-gva-measurement",
                            nameMr: "राष्ट्रीय उत्पन्न: संकल्पना, मोजमाप पद्धती, GDP, GNP व स्थूल मूल्यवर्धन (GVA)",
                            nameEn: "National Income Aggregates: Conceptual Framework, GDP, GNP & GVA Mechanics",
                            name: "राष्ट्रीय उत्पन्न व GVA मोजमाप",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_eco_c02",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_eco_c01",
                            nextChapterId: "gc_eco_c03",
                            metaDescriptionMr: "राष्ट्रीय उत्पन्न संकल्पना (GDP, NDP, GNP, NNP), साधन खर्चानुसार vs बाजारभावानुसार मोजमाप, GVA संकल्पना, CSO/NSO ची २०१५ मधील सुधारित पद्धत (आधारभूत वर्ष २०११-१२), आणि तिन्ही मोजमाप पद्धती.",
                            metaDescriptionEn: "National Income aggregates (GDP, NDP, GNP, NNP at Factor Cost vs Market Price), Gross Value Added (GVA), CSO/NSO revised methodology 2015, Base Year 2011-12, and Three calculation methods (Product, Income, Expenditure).",
                            notesJsonPath: "/data/notes/group_c/prelims/economics/c02_national_income_gva.json",
                            quizTag: "gc_eco_ni_01",
                            tags: ["National Income", "GDP GNP NNP", "Gross Value Added GVA", "Base Year 2011-12", "CSO NSO 2015", "High-Weightage"],
                            searchKeywords: ["national income concepts gdp ndp gnp nnp formulas", "gva gross value added basic prices gdp market price formula", "national income calculation methods product income expenditure", "base year 2011 12 cso mospi revised methodology 2015", "depreciation nfia net factor income from abroad", "राष्ट्रीय उत्पन्न संकल्पना GDP GNP", "स्थूल मूल्यवर्धन GVA सूत्र", "राष्ट्रीय उत्पन्न मोजमाप पद्धती", "आधारभूत वर्ष २०११-१२ CSO NSO", "घसारा व परदेशातील निव्वळ उत्पन्न NFIA"],
                            topics: [
                                {
                                    id: "top_gc_e02_01",
                                    nameMr: "राष्ट्रीय उत्पन्नाच्या मूलभूत संकल्पना, सूत्रे, GVA आणि मोजमापाच्या पद्धती",
                                    nameEn: "National Income Aggregates, GDP-GVA Interlink Equations & Measurement Modes",
                                    subtopics: [
                                        {
                                            id: "st_gc_e02_01_01",
                                            titleMr: "राष्ट्रीय उत्पन्नाच्या संकल्पना व सूत्रे: १) स्थूल देशांतर्गत उत्पादन (GDP): एका आर्थिक वर्षात देशाच्या भौगोलिक सीमेत उत्पादित अंतिम वस्तू व सेवांचे बाजारमूल्य; २) निव्वळ देशांतर्गत उत्पादन (NDP) = GDP - घसारा (Depreciation); ३) स्थूल राष्ट्रीय उत्पादन (GNP) = GDP + परदेशातील निव्वळ घटक उत्पन्न (NFIA - Net Factor Income from Abroad); ४) निव्वळ राष्ट्रीय उत्पन्न (NNP) = GNP - घसारा; अधिकृत राष्ट्रीय उत्पन्न हे 'साधन खर्चानुसार NNP' (NNP at Factor Cost) मानले जायचे",
                                            titleEn: "National Income Aggregates & Formulas: GDP (Market value of all final goods and services produced within domestic boundaries in a financial year); NDP = GDP - Depreciation; GNP = GDP + NFIA (Net Factor Income from Abroad); NNP = GNP - Depreciation; Traditionally, National Income was defined as NNP at Factor Cost",
                                            chips: ["GDP स्थूल देशांतर्गत उत्पादन", "NDP = GDP - घसारा", "GNP = GDP + NFIA", "NNP = GNP - घसारा", "राष्ट्रीय उत्पन्न NNP at FC"]
                                        },
                                        {
                                            id: "st_gc_e02_01_02",
                                            titleMr: "GVA संकल्पना व २०१५ ची नवीन पद्धती: जानेवारी २०१५ मध्ये सांख्यिकी विभागाने (CSO/NSO) राष्ट्रीय उत्पन्नाच्या मोजमापात बदल केले; आधारभूत वर्ष २००४-०५ वरून २०११-१२ केले; GVA (Gross Value Added) ही पुरवठा बाजूने उत्पादन मोजण्याची पद्धत लागू केली; महत्त्वाचे संबंध सूत्र: बाजारभावानुसार GDP (GDP at MP) = मूलभूत किमतींनुसार GVA (GVA at Basic Prices) + वस्तू कर (Product Taxes) - वस्तू अनुदाने (Product Subsidies); भारताचा अधिकृत विकास दर आता 'GDP at Market Price' मानला जातो",
                                            titleEn: "GVA Framework & 2015 NSO Methodological Shift: January 2015 overhaul shifted base year to 2011-12; Shifted headline measure to Gross Value Added (GVA at basic prices) for sectoral growth; Headline GDP Formula: GDP at Market Price = GVA at Basic Prices + Product Taxes - Product Subsidies",
                                            chips: ["GVA स्थूल मूल्यवर्धन (पुरवठा बाजू)", "आधारभूत वर्ष २०११-१२", "GDP at MP = GVA + वस्तू कर - अनुदाने", "NSO नवीन पद्धती २०१५"]
                                        },
                                        {
                                            id: "st_gc_e02_01_03",
                                            titleMr: "राष्ट्रीय उत्पन्न मोजमापाच्या ३ पद्धती: १) उत्पादन पद्धत (Product / Output Method): प्रत्येक टप्प्यावरील निव्वळ मूल्यवर्धन मोजणे (दुहेरी गणना टाळणे); कृषी व उद्योग क्षेत्रात वापर; २) उत्पन्न पद्धत (Income Method): उत्पादन घटकांना मिळालेले मोबदले (खंड, वेतन, व्याज, नफा) यांची बेरीज; ३) खर्च पद्धत (Expenditure Method): उपभोग, गुंतवणूक, सरकारी खर्च व निव्वळ निर्यात यांची बेरीज [Y = C + I + G + (X - M)]",
                                            titleEn: "Three Measurement Methodologies: 1) Product/Output Method (Value-added method, avoids double counting, used in agriculture and manufacturing); 2) Income Method (Summation of factor payments: Rent, Wages, Interest, Profit); 3) Expenditure Method [Y = C + I + G + (X - M)]",
                                            chips: ["उत्पादन पद्धत (मूल्यवर्धन)", "उत्पन्न पद्धत (घटक मोबदला)", "खर्च पद्धत [C + I + G + (X-M)]", "दुहेरी गणना टाळणे"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय अर्थव्यवस्था (भाग १)", standard: "रंजन कोळंबे", chapterRef: "प्रकरण २: राष्ट्रीय उत्पन्न व मोजमाप पद्धती" },
                                        { book: "Central Statistics Office (MoSPI)", standard: "अधिकृत सांख्यिकी दस्तऐवज", chapterRef: "National Accounts Statistics 2015 Methodology" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ३: आर्थिक नियोजन: पंचवार्षिक योजनांचे मूल्यमापन (१ ली ते १२ वी योजना)
                        // =========================================================================
                        {
                            id: "gc_eco_c03",
                            code: "CE03",
                            section: "A",
                            slug: "economic-planning-evolution-and-five-year-plans-appraisal",
                            nameMr: "आर्थिक नियोजन: पंचवार्षिक योजनांचे मूल्यमापन (१ ली ते १२ वी योजना)",
                            nameEn: "Economic Planning: Evaluation & Achievements of Five Year Plans (1st to 12th)",
                            name: "आर्थिक नियोजन व पंचवार्षिक योजना",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_eco_c03",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_eco_c02",
                            nextChapterId: "gc_eco_c04",
                            metaDescriptionMr: "नियोजन मंडळाची स्थापना (१५ मार्च १९५०), राष्ट्रीय विकास परिषद (NDC १९५२), १ ली ते १२ वी पंचवार्षिक योजनांची उद्दिष्टे, प्रतिमाने (हॅरॉड-डोमर, महालनोबिस), योजना सुट्टी (१९६६-६९), रोलिंग प्लॅन, आणि मूल्यमापन.",
                            metaDescriptionEn: "Planning Commission setup (15 March 1950), National Development Council (NDC 1952), 1st to 12th Five-Year Plans, Growth models (Harrod-Domar, Mahalanobis), Plan Holidays (1966-69), Rolling Plan, and Plan Outcomes.",
                            notesJsonPath: "/data/notes/group_c/prelims/economics/c03_planning_five_year_plans.json",
                            quizTag: "gc_eco_plans_01",
                            tags: ["Economic Planning", "Five Year Plans 1 to 12", "Harrod Domar Model", "Mahalanobis Model", "Plan Holiday 1966 69", "High-Weightage"],
                            searchKeywords: ["five year plans india 1st to 12th objectives targets growth models", "1st plan harrod domar 2nd plan mahalanobis heavy industries", "plan holiday 1966 to 1969 annual plans green revolution", "rolling plan 1978 80 janata party lakdawala", "planning commission 15 march 1950 ndc 6 august 1952", "पंचवार्षिक योजना १ ते १२", "हॅरॉड डोमर प्रतिमान १ ली योजना", "महालनोबिस जड उद्योग २ री योजना", "योजना सुट्टी १९६६ ते ६९ हरितक्रांती", "रोलिंग प्लॅन १९७८-८०", "नियोजन मंडळ NDC"],
                            topics: [
                                {
                                    id: "top_gc_e03_01",
                                    nameMr: "नियोजन मंडळाची रचना, पंचवार्षिक योजनांचे टप्पे, प्रतिमाने आणि योजना सुट्टी",
                                    nameEn: "Planning Institutional Setup, Plan Phasing, Macroeconomic Models & Interim Holidays",
                                    subtopics: [
                                        {
                                            id: "st_gc_e03_01_01",
                                            titleMr: "नियोजनाची पार्श्वभूमी व संस्थात्मक रचना: भारतात नियोजनाचे जनक सर मोक्षगुंडम विश्वेश्वरय्या ('Planned Economy for India' १९३४); १५ मार्च १९५० रोजी केंद्रीय मंत्रिमंडळाच्या ठरावाद्वारे 'नियोजन मंडळ' (Planning Commission) स्थापन (असंविधानात्मक व सल्लागार संस्था; पदसिद्ध अध्यक्ष पंतप्रधान); ६ ऑगस्ट १९५२ रोजी 'राष्ट्रीय विकास परिषद' (NDC - National Development Council) स्थापन (योजनांना अंतिम मंजुरी देणारी सर्वोच्च संस्था)",
                                            titleEn: "Planning Architecture: Pioneer Sir M. Visvesvaraya (Planned Economy for India, 1934); Planning Commission established via executive resolution on 15 March 1950 (Non-constitutional, advisory; Chaired by PM); National Development Council (NDC) set up on 6 Aug 1952 as apex plan approving body",
                                            chips: ["सर एम विश्वेश्वरय्या १९३४", "नियोजन मंडळ १५ मार्च १९५०", "राष्ट्रीय विकास परिषद NDC १९५२", "पंतप्रधान पदसिद्ध अध्यक्ष"]
                                        },
                                        {
                                            id: "st_gc_e03_01_02",
                                            titleMr: "सुरुवातीच्या योजना व प्रमुख प्रतिमाने: १) पहिली योजना (१९५१-५६): हॅरॉड-डोमर प्रतिमान; शेती व सिंचनाला सर्वोच्च प्राधान्य (भाक्रा-नांगल, दामोदर, हिराकुड धरणे); उद्दिष्ट २.१%, साध्य ३.६% (यशस्वी); २) दुसरी योजना (१९५६-६१): पी. सी. महालनोबिस प्रतिमान; जड व पायाभूत उद्योगांना प्राधान्य (भिलाई, रुरकेला, दुर्गापूर पोलाद प्रकल्प); ३) तिसरी योजना (१९६१-६६): कृषी व उद्योग स्वावलंबन; भारत-चीन (१९६२) व भारत-पाक (१९६५) युद्धे आणि भीषण दुष्काळामुळे अपयशी; ४) योजना सुट्टी (Plan Holiday १९६६-६९): ३ वार्षिक योजना; हरितक्रांतीची सुरुवात (१९६६)",
                                            titleEn: "Early Plans & Models: 1st Plan (1951-56: Harrod-Domar model, agri-irrigation focus, target 2.1%, achieved 3.6%); 2nd Plan (1956-61: P.C. Mahalanobis heavy industrialisation model, Bhilai/Rourkela/Durgapur steel plants); 3rd Plan (1961-66: Self-reliance, failed due to 1962 China war, 1965 Pak war & drought); Plan Holiday (1966-69: Three annual plans, Green Revolution rollout)",
                                            chips: ["१ ली योजना (हॅरॉड-डोमर शेती)", "२ री योजना (महालनोबिस जड उद्योग)", "३ री योजना युद्ध दुष्काळ अपयशी", "योजना सुट्टी १९६६-६९ (हरितक्रांती)"]
                                        },
                                        {
                                            id: "st_gc_e03_01_03",
                                            titleMr: "उत्तरोत्तर योजना, रोलिंग प्लॅन व १२ वी योजना: ५ वी योजना (१९७४-७९): 'गरिबी हटाव' व स्वावलंबन उद्दिष्ट; रोलिंग प्लॅन (१९७८-८०): जनता पक्षाने ५ वी योजना १ वर्ष आधी संपवून गुन्नार मिर्डाल यांच्या संकल्पनेवर सुरू केला; ६ वी योजना (१९८०-८५): दारिद्र्य निर्मूलन व ग्रामीण विकास (IRDP, NREP); ८ वी योजना (१९९२-९७): राव-मनमोहन प्रतिमान (LPG सुधारणा, साध्य ६.८% यशस्वी); १२ वी योजना (२०१२-१७): 'अधिक वेगवान, शाश्वत व अधिक सर्वसमावेशक विकास'; १ जानेवारी २०१५ रोजी नियोजन मंडळाचे विसर्जन",
                                            titleEn: "Later Plans & Dissolution: 5th Plan (1974-79: 'Garibi Hatao' slogan); Rolling Plan (1978-80 under Janata Govt via Gunnar Myrdal concept); 6th Plan (1980-85: IRDP, NREP poverty alleviation); 8th Plan (1992-97: Rao-Manmohan model post-LPG, 6.8% growth); 12th Plan (2012-17: 'Faster, Sustainable and More Inclusive Growth'); Planning Commission dissolved on 1 Jan 2015",
                                            chips: ["५ वी योजना (गरिबी हटाव)", "रोलिंग प्लॅन १९७८-८० (लखडावाला)", "८ वी योजना (LPG सुधारणा यशस्वी)", "१२ वी योजना (सर्वसमावेशक विकास)", "नियोजन मंडळ विसर्जन २०१५"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय अर्थव्यवस्था (भाग १)", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ३: भारतातील आर्थिक नियोजन" },
                                        { book: "भारतीय अर्थव्यवस्था", standard: "किरण देसले", chapterRef: "प्रकरण २: आर्थिक नियोजन व पंचवार्षिक योजना" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ४: नीती आयोग (NITI Aayog): रचना, कार्यप्रणाली व ७ आधारस्तंभ
                        // =========================================================================
                        {
                            id: "gc_eco_c04",
                            code: "CE04",
                            section: "A",
                            slug: "niti-aayog-architecture-governing-council-and-sdg-index",
                            nameMr: "नीती आयोग (NITI Aayog): रचना, कार्यप्रणाली व ७ आधारस्तंभ",
                            nameEn: "NITI Aayog Framework: Governance Architecture, 7 Pillars & SDG Index",
                            name: "नीती आयोग व SDG निर्देशांक",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 2,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_eco_c04",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_eco_c03",
                            nextChapterId: "gc_eco_c05",
                            metaDescriptionMr: "१ जानेवारी २०१५ रोजी नीती आयोगाची स्थापना, नियोजन मंडळ vs नीती आयोग तुलना (Bottom-Up दृष्टिकोन), गव्हर्निंग कौन्सिल, ७ मार्गदर्शक आधारस्तंभ, ॲस्पिरेशनल डिस्ट्रिक्ट्स प्रोग्राम (ADP), आणि SDG इंडिया इंडेक्स.",
                            metaDescriptionEn: "NITI Aayog established 1 Jan 2015, Planning Commission vs NITI Aayog (Bottom-Up cooperative federalism), Governing Council composition, 7 Pillars of Governance, Aspirational Districts Programme (ADP), and SDG India Index.",
                            notesJsonPath: "/data/notes/group_c/prelims/economics/c04_niti_aayog_sdg.json",
                            quizTag: "gc_eco_niti_01",
                            tags: ["NITI Aayog 1 Jan 2015", "Bottom Up Approach", "Governing Council", "7 Pillars NITI", "Aspirational Districts ADP", "SDG India Index", "High-Weightage"],
                            searchKeywords: ["niti aayog established 1 january 2015 national institution for transforming india", "planning commission top down vs niti aayog bottom up cooperative federalism", "governing council of niti aayog all chief ministers lt governors", "7 pillars of niti aayog pro people pro activity participation", "aspirational districts programme adp composite rank", "sdg india index niti aayog sustainable development goals", "नीती आयोग स्थापना १ जानेवारी २०१५", "नियोजन मंडळ vs नीती आयोग बॉटम-अप", "गव्हर्निंग कौन्सिल सर्व मुख्यमंत्री", "नीती आयोग ७ आधारस्तंभ", "ॲस्पिरेशनल डिस्ट्रिक्ट्स प्रोग्राम ADP", "SDG इंडिया इंडेक्स"],
                            topics: [
                                {
                                    id: "top_gc_e04_01",
                                    nameMr: "नीती आयोगाची रचना, सहकारी संघराज्य, ७ आधारस्तंभ आणि ॲस्पिरेशनल डिस्ट्रिक्ट्स",
                                    nameEn: "NITI Aayog Structural Design, Cooperative Federalism, 7 Pillars & Flagship Indices",
                                    subtopics: [
                                        {
                                            id: "st_gc_e04_01_01",
                                            titleMr: "नीती आयोगाची स्थापना व रचना: १ जानेवारी २०१५ रोजी केंद्रीय मंत्रिमंडळाच्या ठरावाद्वारे स्थापना (National Institution for Transforming India); नियोजन मंडळाच्या 'Top-Down' पद्धतीऐवजी 'Bottom-Up' दृष्टिकोन आणि सहकारी संघराज्य (Cooperative Federalism); रचना: अध्यक्ष: पंतप्रधान; उपाध्यक्ष (कॅबिनेट मंत्री दर्जा, पंतप्रधानांकडून नियुक्ती); मुख्य कार्यकारी अधिकारी (CEO - सचिव दर्जा); पूर्णवेळ सदस्य; पदसिद्ध सदस्य (कमाल ४ केंद्रीय मंत्री); नियामक परिषद (Governing Council): सर्व राज्यांचे मुख्यमंत्री व केंद्रशासित प्रदेशांचे नायब राज्यपाल समाविष्ट",
                                            titleEn: "NITI Aayog Setup: Established on 1 Jan 2015 replacing Planning Commission; Replaced top-down directives with a bottom-up cooperative federalism model; Structure: Chairperson (PM), Vice-Chairperson (Cabinet rank, PM appointed), CEO (Secretary rank), Full-time members, Ex-officio members (4 Union ministers); Governing Council comprises ALL State Chief Ministers and UT Lt. Governors",
                                            chips: ["नीती आयोग १ जानेवारी २०१५", "पंतप्रधान अध्यक्ष", "गव्हर्निंग कौन्सिल (सर्व मुख्यमंत्री)", "बॉटम-अप दृष्टिकोन (Bottom-Up)", "सहकारी संघराज्य"]
                                        },
                                        {
                                            id: "st_gc_e04_01_02",
                                            titleMr: "७ मार्गदर्शक आधारस्तंभ व महत्त्वाचे निर्देशांक: नीती आयोगाचे ७ आधारस्तंभ: १) प्रो-पीपल (जनतेची काळजी), २) प्रो-ॲक्टिव्हिटी (सकारात्मक प्रतिसाद), ३) सहभाग (Participation), ४) सक्षमीकरण (Empowerment), ५) सर्वांचा समावेश (Inclusion of all), ६) समानता (Equality), ७) पारदर्शकता (Transparency); प्रमुख उपक्रम: १) ॲस्पिरेशनल डिस्ट्रिक्ट्स प्रोग्राम (ADP २०१८ - देशातील ११२ मागास जिल्ह्यांचा वेगाने विकास करणे); २) SDG इंडिया इंडेक्स (शाश्वत विकास उद्दिष्टे साध्य करणाऱ्या राज्यांचे मानांकन: फ्रंट रनर, अचिव्हर, परफॉर्मर)",
                                            titleEn: "7 Pillars & Flagship Programmes: 7 Guiding Pillars (Pro-people, Pro-activity, Participation, Empowerment, Inclusion of all, Equality, Transparency); Flagship Programmes: Aspirational Districts Programme (ADP 2018 - rapid transformation of 112 underdeveloped districts); SDG India Index tracking state progress on 17 Sustainable Development Goals",
                                            chips: ["नीती आयोग ७ आधारस्तंभ", "ॲस्पिरेशनल डिस्ट्रिक्ट्स प्रोग्राम (ADP)", "११२ मागास जिल्हे", "SDG इंडिया इंडेक्स", "थिंक टँक Think Tank"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय अर्थव्यवस्था (भाग १)", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ४: नीती आयोग व नियोजन" },
                                        { book: "नीती आयोग अधिकृत संकेतस्थळ", standard: "niti.gov.in", chapterRef: "Overview & Governing Council Reports" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ५: दारिद्र्य संकल्पना, समित्या (तेंडुलकर, रंगराजन) व दारिद्र्य निर्मूलन
                        // =========================================================================
                        {
                            id: "gc_eco_c05",
                            code: "CE05",
                            section: "A",
                            slug: "poverty-dynamics-estimation-committees-and-eradication-schemes",
                            nameMr: "दारिद्र्य संकल्पना, समित्या (तेंडुलकर, रंगराजन) व दारिद्र्य निर्मूलन",
                            nameEn: "Poverty Economics: Measurement Committees (Tendulkar, Rangarajan) & Welfare Programs",
                            name: "दारिद्र्य रेषा, समित्या व MPI",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_eco_c05",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_eco_c04",
                            nextChapterId: "gc_eco_c06",
                            metaDescriptionMr: "निरपेक्ष vs सापेक्ष दारिद्र्य, दांडेकर-रथ फॉर्म्युला (२२५० कॅलरी), अलघ कार्यगट (ग्रामीण २४००, नागरी २१०० कॅलरी), सुरेश तेंडुलकर समिती २००९ (प्रति व्यक्ती मासिक उपभोग खर्च), सी. रंगराजन समिती २०१४, नीती आयोग राष्ट्रीय MPI, आणि प्रमुख योजना.",
                            metaDescriptionEn: "Absolute vs Relative poverty, Dandekar-Rath (2250 calories), Alagh Committee (2400 rural / 2100 urban calories), Suresh Tendulkar Committee 2009 (MRRP consumption basket), C. Rangarajan Committee 2014, NITI Aayog Multidimensional Poverty Index (MPI), and welfare schemes.",
                            notesJsonPath: "/data/notes/group_c/prelims/economics/c05_poverty_committees_mpi.json",
                            quizTag: "gc_eco_poverty_01",
                            tags: ["Poverty Line", "Absolute vs Relative Poverty", "Tendulkar Committee 2009", "Rangarajan Committee 2014", "National MPI NITI Aayog", "MGNREGA", "High-Weightage"],
                            searchKeywords: ["poverty line in india calories 2400 rural 2100 urban alagh committee", "suresh tendulkar committee 2009 poverty estimates 21.9 percent", "tendulkar committee rural 27.2 rs urban 33.3 rs daily", "c rangarajan committee 2014 poverty estimates 29.5 percent", "national multidimensional poverty index mpi niti aayog 12 indicators", "mgnrega 100 days wage employment 2005", "दारिद्र्य रेषा कॅलरी निकष", "सुरेश तेंडुलकर समिती २००९ दारिद्र्य २१.९%", "सी रंगराजन समिती २०१४ दारिद्र्य २९.५%", "बहुआयामी दारिद्र्य निर्देशांक MPI नीती आयोग", "मनरेगा MGNREGA रोजगार योजना"],
                            topics: [
                                {
                                    id: "top_gc_e05_01",
                                    nameMr: "दारिद्र्य प्रकार, कॅलरी निकष, तेंडुलकर-रंगराजन समित्या आणि बहुआयामी दारिद्र्य",
                                    nameEn: "Poverty Typology, Caloric Thresholds, Tendulkar-Rangarajan Metrics & National MPI",
                                    subtopics: [
                                        {
                                            id: "st_gc_e05_01_01",
                                            titleMr: "दारिद्र्य प्रकार व सुरुवातीचे निकष: १) निरपेक्ष दारिद्र्य (Absolute Poverty: जीवनावश्यक किमान गरजा भागवता न येणे - विकसनशील देशात आढळते); २) सापेक्ष दारिद्र्य (Relative Poverty: समाजातील उच्च व कनिष्ठ गटांमधील उत्पन्नाची तुलना - विकसित देशात आढळते); व्ही. एम. दांडेकर व नीळकंठ रथ (१९७१): दारिद्र्य रेषेसाठी दररोज दरडोई २,२५० कॅलरी निकष; वाय. के. अलघ कार्यगट (१९७९) व लखडावाला समिती (१९९३): ग्रामीण भागात दररोज २,४०० कॅलरी आणि नागरी भागात २,१०० कॅलरी निकष ठरवला",
                                            titleEn: "Poverty Types & Calorie Baselines: Absolute Poverty (Inability to fulfill minimum subsistence basket, prevalent in developing nations); Relative Poverty (Income inequality distribution, prevalent in developed nations); Dandekar-Rath (1971: 2250 calories); Y.K. Alagh (1979) and Lakdawala (1993) pegged poverty line to 2400 calories/day in rural areas and 2100 calories/day in urban areas",
                                            chips: ["निरपेक्ष दारिद्र्य vs सापेक्ष दारिद्र्य", "दांडेकर-रथ (२२५० कॅलरी)", "अलघ कार्यगट (ग्रामीण २४००, नागरी २१०० कॅलरी)", "लखडावाला समिती"]
                                        },
                                        {
                                            id: "st_gc_e05_01_02",
                                            titleMr: "सुरेश तेंडुलकर समिती (२००९): कॅलरी निकष सोडून 'प्रति व्यक्ती मासिक उपभोग खर्च' (MPCE) निकष स्वीकारला; अन्नासोबत शिक्षण व आरोग्यावरील खाजगी खर्चाचा समावेश केला; २०११-१२ च्या आकडेवारीनुसार: ग्रामीण भागात दरमहा दरडोई रु. ८१६ (दररोज रु. २७.२) आणि नागरी भागात दरमहा दरडोई रु. १,००० (दररोज रु. ३३.३); यानुसार भारतात २१.९% दारिद्र्य (ग्रामीण २५.७%, नागरी १३.७%); महाराष्ट्रात एकूण दारिद्र्य १७.४%",
                                            titleEn: "Suresh Tendulkar Committee (2009): Discarded caloric baseline in favor of Monthly Per Capita Consumption Expenditure (MPCE); Included education and healthcare out-of-pocket spending; 2011-12 Poverty Lines: Rural Rs 816/month (Rs 27.2/day), Urban Rs 1000/month (Rs 33.3/day); Estimated India's poverty at 21.9% (Rural 25.7%, Urban 13.7%) and Maharashtra at 17.4%",
                                            chips: ["सुरेश तेंडुलकर समिती २००९", "भारतात २१.९% दारिद्र्य", "महाराष्ट्रात १७.४% दारिद्र्य", "ग्रामीण रु. ८१६ / नागरी रु. १०००", "शिक्षण व आरोग्य खर्च समाविष्ट"]
                                        },
                                        {
                                            id: "st_gc_e05_01_03",
                                            titleMr: "सी. रंगराजन समिती (२०१४) व नीती आयोग MPI: १) रंगराजन समिती (२०१४): पोषण, प्रथिने, चरबी आणि गैर-अन्न घटकांचा विचार केला; दारिद्र्य रेषा: ग्रामीण दरमहा रु. ९७२ (दररोज रु. ३२) आणि नागरी दरमहा रु. १,४०७ (दररोज रु. ४७); यानुसार भारतात २९.५% दारिद्र्य (ग्रामीण ३०.९%, नागरी २६.४%); २) नीती आयोगाचा राष्ट्रीय बहुआयामी दारिद्र्य निर्देशांक (National MPI): ऑक्सफर्ड पद्धतीवर आधारित ३ परिमाणे (आरोग्य, शिक्षण, राहणीमान) आणि १२ निर्देशकांवर मोजमाप; दारिद्र्यात वेगाने घट",
                                            titleEn: "C. Rangarajan Committee (2014) & National MPI: Rangarajan proposed revised poverty line of Rural Rs 972/month (Rs 32/day) and Urban Rs 1407/month (Rs 47/day), estimating India's poverty at 29.5%; NITI Aayog's National Multidimensional Poverty Index (MPI) measures deprivation across 3 dimensions (Health, Education, Standard of living) and 12 indicators",
                                            chips: ["रंगराजन समिती २०१४ (२९.५% दारिद्र्य)", "ग्रामीण रु. ९७२ / नागरी रु. १४०७", "नीती आयोग MPI (३ परिमाणे १२ निर्देशक)", "बहुआयामी दारिद्र्य"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय अर्थव्यवस्था (भाग १)", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ५: दारिद्र्य व दारिद्र्य निर्मूलन" },
                                        { book: "भारतीय अर्थव्यवस्था", standard: "किरण देसले", chapterRef: "प्रकरण ३: दारिद्र्य व बेरोजगारी" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ६: बेरोजगारीचे प्रकार, मोजमाप निकष आणि रोजगार निर्मिती धोरणे
                        // =========================================================================
                        {
                            id: "gc_eco_c06",
                            code: "CE06",
                            section: "A",
                            slug: "unemployment-typology-measurement-metrics-and-employment-schemes",
                            nameMr: "बेरोजगारीचे प्रकार, मोजमाप निकष आणि रोजगार निर्मिती धोरणे",
                            nameEn: "Unemployment Economics: Classifications, PLFS Metrics & Employment Schemes",
                            name: "बेरोजगारी प्रकार व मोजमाप (PLFS)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 2,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_eco_c06",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_eco_c05",
                            nextChapterId: "gc_eco_c07",
                            metaDescriptionMr: "बेरोजगारीचे प्रकार (प्रच्छन्न/छुपी, हंगामी, संरचनात्मक, चक्रीय, घर्षणात्मक), NSSO मोजमाप पद्धती (UPS, USWS, CDS), आवर्ती कामगार बल सर्वेक्षण (PLFS अहवाल), आणि रोजगार योजना.",
                            metaDescriptionEn: "Unemployment classification: Disguised (zero marginal productivity), Seasonal, Structural, Cyclical, Frictional; NSSO measurement criteria (UPS, USWS, CDS); Periodic Labour Force Survey (PLFS); Employment generation missions.",
                            notesJsonPath: "/data/notes/group_c/prelims/economics/c06_unemployment_plfs.json",
                            quizTag: "gc_eco_unemp_01",
                            tags: ["Unemployment Types", "Disguised Unemployment", "Structural Unemployment", "NSSO Measurement UPS CDS", "Periodic Labour Force Survey PLFS"],
                            searchKeywords: ["unemployment types disguised agricultural seasonal structural cyclical", "disguised unemployment marginal productivity of labor zero", "nsso measurement of unemployment ups usws cds", "periodic labour force survey plfs mospi labour force participation rate", "pradhan mantri kaushal vikas yojana pmkvy", "बेरोजगारीचे प्रकार प्रच्छन्न छुपी बेरोजगारी", "शून्य सीमांत उत्पादकता", "NSSO बेरोजगारी मोजमाप UPS CDS", "PLFS आवर्ती कामगार बल सर्वेक्षण", "पंतप्रधान कौशल विकास योजना"],
                            topics: [
                                {
                                    id: "top_gc_e06_01",
                                    nameMr: "बेरोजगारीची वर्गवारी, मोजमापाच्या पद्धती आणि कामगार बल सर्वेक्षण",
                                    nameEn: "Unemployment Classification, NSSO Measurement Criteria & PLFS Labour Analytics",
                                    subtopics: [
                                        {
                                            id: "st_gc_e06_01_01",
                                            titleMr: "बेरोजगारीचे प्रमुख प्रकार: १) प्रच्छन्न / छुपी बेरोजगारी (Disguised Unemployment): क्षमतेपेक्षा जास्त मजूर कामावर असणे; काही मजुरांना कामावरून काढून टाकले तरी एकूण उत्पादनात फरक पडत नाही; मजुरांची 'सीमांत उत्पादकता शून्य' (Zero Marginal Productivity) असते (भारतीय शेतीत मोठ्या प्रमाणावर आढळते); २) हंगामी बेरोजगारी (शेती व साखर कारखाने); ३) संरचनात्मक बेरोजगारी (Structural: अर्थव्यवस्थेतील बदलामुळे कौशल्याची कमतरता); ४) चक्रीय बेरोजगारी (मंदीमुळे निर्माण होणारी); ५) घर्षणात्मक बेरोजगारी (एक नोकरी सोडून दुसरी मिळेपर्यंतचा काळ); ६) सुशिक्षित बेरोजगारी",
                                            titleEn: "Unemployment Typology: 1) Disguised Unemployment (Marginal physical productivity of labor is zero; removing excess workers leaves total output unchanged; rampant in Indian agriculture); 2) Seasonal Unemployment (Farming, sugar crushing); 3) Structural Unemployment (Mismatch between skills available and jobs demanded); 4) Cyclical Unemployment (Recessionary demand deficit); 5) Frictional Unemployment (Transitional job shifts)",
                                            chips: ["प्रच्छन्न / छुपी बेरोजगारी (शेती)", "सीमांत उत्पादकता शून्य (Zero Marginal Productivity)", "संरचनात्मक बेरोजगारी", "चक्रीय बेरोजगारी", "हंगामी बेरोजगारी"]
                                        },
                                        {
                                            id: "st_gc_e06_01_02",
                                            titleMr: "NSSO व PLFS मोजमाप पद्धती: १) नॅशनल सॅम्पल सर्व्हे ऑफिस (NSSO) च्या ३ पद्धती: अ) नित्य प्रमुख दर्जा (UPS - Usual Principal Status: वर्षातील बहुतांश काळ १८३ दिवस किंवा अधिक बेरोजगार असणे), ब) चालू साप्ताहिक दर्जा (CWS: आठवड्यात १ तास काम न मिळणे), क) चालू दैनिक दर्जा (CDS: दिवसात ४ तास काम न मिळणे - बेरोजगारीचे सर्वात वास्तववादी माप); २) आवर्ती कामगार बल सर्वेक्षण (PLFS - Periodic Labour Force Survey): MoSPI द्वारे २०१७ पासून नियमित बेरोजगारी, LFPR (कामगार बल सहभाग दर) व WPR आकडेवारी प्रसिद्ध केली जाते",
                                            titleEn: "Measurement Modes (NSSO & PLFS): NSSO 3 Status Criteria: a) Usual Principal Status (UPS: unemployed for majority of 365 days), b) Current Weekly Status (CWS: unable to get 1 hour of work in survey week), c) Current Daily Status (CDS: unable to get 4 hours work in a day, most realistic metric); Periodic Labour Force Survey (PLFS launched in 2017 by MoSPI) tracking regular LFPR and unemployment rates",
                                            chips: ["NSSO बेरोजगारी मोजमाप (UPS, CWS, CDS)", "CDS सर्वात वास्तववादी माप", "PLFS आवर्ती कामगार बल सर्वेक्षण", "LFPR कामगार सहभाग दर"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय अर्थव्यवस्था (भाग १)", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ५: बेरोजगारी व रोजगार धोरण" },
                                        { book: "भारतीय अर्थव्यवस्था", standard: "किरण देसले", chapterRef: "प्रकरण ३: बेरोजगारी स्वरूप व मोजमाप" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ७: चलनवाढ (महागाई): प्रकार, कारणे, मोजमाप (CPI, WPI) व नियंत्रण
                        // =========================================================================
                        {
                            id: "gc_eco_c07",
                            code: "CE07",
                            section: "B",
                            slug: "inflation-dynamics-types-causes-cpi-wpi-and-control-mechanisms",
                            nameMr: "चलनवाढ (महागाई): प्रकार, कारणे, मोजमाप (CPI, WPI) व नियंत्रण",
                            nameEn: "Inflation Dynamics: Typology, Drivers, Indices (CPI vs WPI) & Stabilization",
                            name: "चलनवाढ (महागाई), CPI व WPI",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_eco_c07",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_eco_c06",
                            nextChapterId: "gc_eco_c08",
                            metaDescriptionMr: "चलनवाढ व्याख्या व प्रकार (मागणी-ताण, खर्च-दाब), वेगावरून प्रकार (रांगणारी, चालणारी, पळणारी, बेसुमार Hyperinflation), घाऊक किंमत निर्देशांक (WPI आधारभूत वर्ष २०११-१२), ग्राहक किंमत निर्देशांक (CPI संयुक्त), आणि नियंत्रण उपाय.",
                            metaDescriptionEn: "Inflation mechanics, Demand-Pull vs Cost-Push, Speed-based classifications (Creeping, Walking, Running, Galloping, Hyperinflation), Wholesale Price Index (WPI base year 2011-12), Consumer Price Index (CPI-Combined), and monetary/fiscal remedies.",
                            notesJsonPath: "/data/notes/group_c/prelims/economics/c07_inflation_cpi_wpi.json",
                            quizTag: "gc_eco_inflation_01",
                            tags: ["Inflation", "Demand Pull Cost Push", "WPI Base Year 2011-12", "CPI Combined", "Hyperinflation", "Urjit Patel Committee", "High-Weightage"],
                            searchKeywords: ["inflation types demand pull vs cost push inflation", "speed of inflation creeping walking running hyperinflation", "wholesale price index wpi base year 2011 12 dpiit 697 items", "consumer price index cpi combined base year 2012 nsso headline inflation", "inflation control monetary fiscal administrative measures", "चलनवाढ महागाई प्रकार मागणी ताण खर्च दाब", "घाऊक किंमत निर्देशांक WPI २०११-१२", "ग्राहक किंमत निर्देशांक CPI संयुक्त", "हायपरइन्फ्लेशन बेसुमार महागाई", "महागाई नियंत्रण मौद्रिक उपाय"],
                            topics: [
                                {
                                    id: "top_gc_e07_01",
                                    nameMr: "चलनवाढीची कारणे, प्रकार, WPI vs CPI निर्देशांक आणि नियंत्रण उपाय",
                                    nameEn: "Inflation Drivers, Speed Classification, WPI vs CPI Baskets & Control Levers",
                                    subtopics: [
                                        {
                                            id: "st_gc_e07_01_01",
                                            titleMr: "चलनवाढीची व्याख्या व प्रकार: वस्तू व सेवांच्या सर्वसाधारण किंमत पातळीत होणारी सातत्यपूर्ण व अनियंत्रित वाढ म्हणजे चलनवाढ; पैशाचे मूल्य कमी होते; १) कारणांवरून प्रकार: अ) मागणी-ताण चलनवाढ (Demand-Pull: लोकांच्या हातात पैसा वाढल्याने मागणी वाढते, परंतु पुरवठा कमी पडतो), ब) खर्च-दाब चलनवाढ (Cost-Push: कच्चा माल, इंधन किंवा मजुरी वाढल्याने उत्पादन खर्च वाढतो); २) वेगावरून प्रकार: रांगणारी (Creeping: ३% पर्यंत), चालणारी (Walking: ३ ते १०%), पळणारी (Running: १० ते २०%), बेसुमार/अति-चलनवाढ (Hyperinflation: २०% पेक्षा जास्त, उदा. जर्मनी, झिम्बाब्वे)",
                                            titleEn: "Inflation Fundamentals & Types: Persistent upward trend in aggregate price levels eroding purchasing power; 1) Causes: Demand-Pull Inflation (Too much money chasing too few goods) vs Cost-Push Inflation (Surge in raw materials, wages, crude oil); 2) Speed: Creeping (<3%), Walking (3-10%), Running (10-20%), Galloping/Hyperinflation (>20% or astronomical price surges)",
                                            chips: ["मागणी-ताण चलनवाढ (Demand-Pull)", "खर्च-दाब चलनवाढ (Cost-Push)", "रांगणारी महागाई (<३%)", "बेसुमार महागाई (Hyperinflation)", "पैशाचे मूल्य घसरणे"]
                                        },
                                        {
                                            id: "st_gc_e07_01_02",
                                            titleMr: "WPI विरुद्ध CPI तुलना (MPSC हमखास प्रश्न): १) घाऊक किंमत निर्देशांक (WPI): वाणिज्य व उद्योग मंत्रालयाचे DPIIT कार्यालय प्रसिद्ध करते; आधारभूत वर्ष २०११-१२; एकूण ६९७ वस्तू; यात केवळ 'वस्तूंचा' समावेश होतो, सेवांचा समावेश नसतो; सर्वाधिक भार: उत्पादित वस्तू (Manufactured Products सुमारे ६४.२%); २) ग्राहक किंमत निर्देशांक (CPI - संयुक्त): NSO सांख्यिकी मंत्रालय प्रसिद्ध करते; आधारभूत वर्ष २०१२; यात 'वस्तू आणि सेवा' दोन्हींचा समावेश असतो; सर्वाधिक भार: अन्न व पेये (Food and Beverages सुमारे ४५.८६%); उर्जित पटेल समितीच्या (२०१४) शिफारशीनुसार RBI आता महागाई मोजण्यासाठी 'CPI-Combined' निर्देशांक वापरते",
                                            titleEn: "WPI vs CPI Comparison: 1) Wholesale Price Index (WPI: Published by DPIIT, Ministry of Commerce; Base year 2011-12; 697 items; Covers ONLY Goods, excludes Services; Highest weightage: Manufactured Products ~64.2%); 2) Consumer Price Index (CPI-Combined: Published by NSO; Base year 2012; Covers Goods AND Services; Highest weightage: Food & Beverages ~45.86%); RBI officially anchors monetary policy to CPI-Combined headline inflation (Urjit Patel Committee 2014)",
                                            chips: ["WPI घाऊक निर्देशांक (DPIIT २०११-१२)", "WPI मध्ये सेवांचा समावेश नाही", "CPI ग्राहक निर्देशांक (NSO २०१२)", "CPI मध्ये अन्न घटकांचा भार जास्त", "RBI महागाई मोजण्यासाठी CPI वापरते"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय अर्थव्यवस्था (भाग १)", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ६: चलनवाढ (महागाई)" },
                                        { book: "भारतीय अर्थव्यवस्था", standard: "किरण देसले", chapterRef: "प्रकरण ४: किंमत वाढ व निर्देशांक" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ८: भारतीय रिझर्व्ह बँक (RBI): कार्ये, मौद्रिक धोरण साधने
                        // =========================================================================
                        {
                            id: "gc_eco_c08",
                            code: "CE08",
                            section: "B",
                            slug: "reserve-bank-of-india-functions-and-monetary-policy-tools",
                            nameMr: "भारतीय रिझर्व्ह बँक (RBI): कार्ये, मौद्रिक धोरण साधने (Repo, Reverse Repo, CRR, SLR)",
                            nameEn: "Reserve Bank of India: Mandate, Currency Management & Monetary Policy Tools",
                            name: "RBI व मौद्रिक धोरण (Repo, CRR, SLR)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_eco_c08",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_eco_c07",
                            nextChapterId: "gc_eco_c09",
                            metaDescriptionMr: "RBI स्थापना (हिल्टन यंग कमिशन, १ एप्रिल १९३५), राष्ट्रीयीकरण (१ जानेवारी १९४९), मध्यवर्ती बँकेची कार्ये, मौद्रिक धोरणाची परिमाणात्मक साधने (Repo, Reverse Repo, Bank Rate, CRR, SLR, SDF), आणि मौद्रिक धोरण समिती (MPC).",
                            metaDescriptionEn: "RBI genesis (Hilton Young Commission, 1 April 1935, nationalized 1 Jan 1949), Central banking functions, Quantitative tools (Repo, Reverse Repo, Marginal Standing Facility MSF, Standing Deposit Facility SDF, Bank Rate, CRR, SLR), and Monetary Policy Committee (MPC).",
                            notesJsonPath: "/data/notes/group_c/prelims/economics/c08_rbi_monetary_policy.json",
                            quizTag: "gc_eco_rbi_01",
                            tags: ["Reserve Bank of India RBI", "RBI Act 1934", "Repo Rate Reverse Repo", "Cash Reserve Ratio CRR", "Statutory Liquidity Ratio SLR", "Monetary Policy Committee MPC", "High-Weightage"],
                            searchKeywords: ["reserve bank of india rbi established 1 april 1935 hilton young", "rbi nationalisation 1 january 1949 first governor osborne smith", "quantitative instruments repo rate reverse repo bank rate crr slr", "standing deposit facility sdf collateral free liquidity absorption", "monetary policy committee mpc 6 members inflation targeting 4 plus minus 2", "रिझर्व्ह बँक ऑफ इंडिया स्थापना १ एप्रिल १९३५", "RBI राष्ट्रीयीकरण १ जानेवारी १९४९", "रेपो रेट रिव्हर्स रेपो बँक दर", "रोख राखीव गुणोत्तर CRR वैधानिक तरलता SLR", "मौद्रिक धोरण समिती MPC चलनवाढ लक्ष्य"],
                            topics: [
                                {
                                    id: "top_gc_e08_01",
                                    nameMr: "RBI ची वैधानिक स्थापना, मध्यवर्ती कार्ये, मौद्रिक साधने आणि MPC रचना",
                                    nameEn: "Statutory Evolution of RBI, Core Mandate, Quantitative Tools & MPC Architecture",
                                    subtopics: [
                                        {
                                            id: "st_gc_e08_01_01",
                                            titleMr: "RBI ची स्थापना व इतिहास: हिल्टन यंग कमिशनच्या (१९२६ - Royal Commission on Indian Currency) शिफारशीनुसार 'RBI कायदा १९३४' संमत; १ एप्रिल १९३५ रोजी ५ कोटी रुपयांच्या भागभांडवलासह खाजगी बँक म्हणून कोलकात्यात स्थापना (१९३७ मध्ये मुख्यालय मुंबईला हलवले); १ जानेवारी १९४९ रोजी RBI चे राष्ट्रीयीकरण झाले; पहिले गव्हर्नर: सर ऑस्बॉर्न स्मिथ; पहिले भारतीय गव्हर्नर: सी. डी. देशमुख (चिंतामणराव देशमुख); मध्यवर्ती कार्ये: चलन निर्मिती (रु. १ ची नोट व नाणी वगळून, त्यावर वित्त सचिवांची स्वाक्षरी असते), बँकांची बँक, सरकारची बँक, परकीय चलन साठ्याचे रक्षण",
                                            titleEn: "Genesis & Core Mandate of RBI: Recommended by Hilton Young Commission (1926); Enacted RBI Act 1934; Established on 1 April 1935 in Kolkata with Rs 5 Crore capital (HQ shifted to Mumbai in 1937); Nationalised on 1 Jan 1949; 1st Governor: Sir Osborne Smith; 1st Indian Governor: C.D. Deshmukh; Functions: Sole note issuer (except Re 1 note signed by Finance Secretary), Banker to Banks, Banker to Government, Forex Custodian",
                                            chips: ["हिल्टन यंग कमिशन १९२६", "RBI स्थापना १ एप्रिल १९३५", "राष्ट्रीयीकरण १ जानेवारी १९४९", "पहिले भारतीय गव्हर्नर सी डी देशमुख", "मुख्यालय मुंबई १९३७"]
                                        },
                                        {
                                            id: "st_gc_e08_01_02",
                                            titleMr: "परिमाणात्मक मौद्रिक साधने (Quantitative Tools): १) रेपो रेट (Repo Rate): ज्या व्याजदराने RBI व्यापारी बँकांना अल्पमुदतीसाठी (Short-term) कर्ज देते; महागाई वाढल्यास RBI रेपो रेट वाढवते; २) रिव्हर्स रेपो रेट (Reverse Repo): बँकांचे अतिरिक्त पैसे RBI कडे ठेवल्यावर मिळणारा व्याजदर; ३) बँक दर (Bank Rate): दीर्घमुदतीचा पुनर्वित्त दर; ४) CRR (Cash Reserve Ratio - रोख राखीव गुणोत्तर): बँकांनी स्वतःच्या NDTL पैकी ठराविक रोख रक्कम RBI कडे मोफत ठेवणे; ५) SLR (Statutory Liquidity Ratio): बँकांनी स्वतःजवळ रोख, सोने किंवा सरकारी रोख्यांच्या स्वरूपात ठेवायचा निधी; ६) SDF (Standing Deposit Facility): विनातारण अतिरिक्त तरलता शोषून घेण्याचे साधन",
                                            titleEn: "Quantitative Monetary Instruments: 1) Repo Rate (Rate at which RBI lends short-term liquidity against government securities; raised to curb inflation); 2) Reverse Repo Rate (Rate RBI pays banks for surplus funds); 3) Bank Rate (Long-term collateral-free penal rate); 4) CRR (Cash Reserve Ratio held with RBI); 5) SLR (Statutory Liquidity Ratio held by banks in cash, gold, G-Secs); 6) Standing Deposit Facility (SDF for collateral-free liquidity absorption)",
                                            chips: ["रेपो रेट (अल्पमुदत कर्ज दर)", "रिव्हर्स रेपो रेट", "बँक दर (दीर्घमुदत दर)", "CRR रोख राखीव गुणोत्तर", "SLR वैधानिक तरलता प्रमाण", "SDF स्थायी ठेव सुविधा"]
                                        },
                                        {
                                            id: "st_gc_e08_01_03",
                                            titleMr: "मौद्रिक धोरण समिती (MPC - Monetary Policy Committee): २०१६ मध्ये RBI कायद्यात सुधारणा करून स्थापना (कलम ४५ZB); एकूण ६ सदस्य: ३ सदस्य RBI चे (गव्हर्नर, डेप्युटी गव्हर्नर व एक अधिकारी) + ३ सदस्य केंद्र सरकारकडून नियुक्त तज्ज्ञ; अध्यक्ष: RBI गव्हर्नर (समान मते पडल्यास निर्णायक मत Casting Vote अधिकार); कार्य: लवचिक चलनवाढ लक्ष्यीकरण (FIT - Flexible Inflation Targeting: महागाई ४% सह +/- २% म्हणजेच २% ते ६% च्या मर्यादेत ठेवणे); वर्षातून किमान ४ बैठका",
                                            titleEn: "Monetary Policy Committee (MPC): Institutionalised in 2016 amending RBI Act (Section 45ZB); 6 Members: 3 from RBI (Governor as ex-officio Chair with casting vote, Deputy Governor, one officer) + 3 external experts appointed by Centre; Mandated with Flexible Inflation Targeting (FIT: 4% +/- 2%, tolerance band of 2% to 6%); Sits minimum 4 times a year",
                                            chips: ["मौद्रिक धोरण समिती MPC (६ सदस्य)", "RBI गव्हर्नर अध्यक्ष (कास्टिंग व्होट)", "चलनवाढ लक्ष्य ४% (+/- २%)", "कलम ४५ZB RBI कायदा"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय अर्थव्यवस्था (भाग १)", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ७: भारतीय रिझर्व्ह बँक व मौद्रिक धोरण" },
                                        { book: "भारतीय अर्थव्यवस्था", standard: "किरण देसले", chapterRef: "प्रकरण ५: बँकिंग प्रणाली व RBI" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ९: भारतीय बँकिंग व्यवस्था: व्यापारी बँका, राष्ट्रीयीकरण, RRB व पेमेंट बँका
                        // =========================================================================
                        {
                            id: "gc_eco_c09",
                            code: "CE09",
                            section: "B",
                            slug: "indian-banking-system-nationalisation-rrb-and-payment-banks",
                            nameMr: "भारतीय बँकिंग व्यवस्था: व्यापारी बँका, राष्ट्रीयीकरण, RRB व पेमेंट बँका",
                            nameEn: "Indian Commercial Banking: Nationalisation, Regional Rural Banks & Differentiated Banks",
                            name: "बँकिंग व्यवस्था, राष्ट्रीयीकरण व RRB",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_eco_c09",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_eco_c08",
                            nextChapterId: "gc_eco_c10",
                            metaDescriptionMr: "१९ जुलै १९६९ मधील १४ मोठ्या बँकांचे राष्ट्रीयीकरण (५० कोटी ठेव मर्यादा), १५ एप्रिल १९८० मधील ६ बँकांचे राष्ट्रीयीकरण (२०० कोटी मर्यादा), SBI ची स्थापना (१९५५), प्रादेशिक ग्रामीण बँका (RRB १९७५), स्मॉल फायनान्स बँका, पेमेंट बँका, आणि जनधन योजना.",
                            metaDescriptionEn: "Bank nationalisation milestones: 19 July 1969 (14 banks, deposit threshold Rs 50 Cr) and 15 April 1980 (6 banks, threshold Rs 200 Cr), State Bank of India (SBI 1955 via Imperial Bank), Regional Rural Banks (RRB Act 1976), Small Finance Banks, Payment Banks, and Financial Inclusion (PMJDY).",
                            notesJsonPath: "/data/notes/group_c/prelims/economics/c09_banking_structure_rrb.json",
                            quizTag: "gc_eco_banking_01",
                            tags: ["Bank Nationalisation 1969", "Bank Nationalisation 1980", "State Bank of India SBI 1955", "Regional Rural Banks RRB 1975", "Payment Banks", "High-Weightage"],
                            searchKeywords: ["bank nationalisation in india 14 banks 19 july 1969 50 crore", "6 banks nationalised 15 april 1980 200 crore indira gandhi", "imperial bank of india to sbi 1 july 1955 gorewala committee", "regional rural banks rrb established 2 october 1975 prathama bank", "payment banks vs small finance banks nachiket mor committee", "बँकांचे राष्ट्रीयीकरण १४ बँका १९ जुलै १९६९", "६ बँकांचे राष्ट्रीयीकरण १५ एप्रिल १९८०", "स्टेट बँक ऑफ इंडिया SBI १ जुलै १९५५", "प्रादेशिक ग्रामीण बँका RRB १९७५ प्रथमा बँक", "पेमेंट बँका नचिकेत मोर समिती"],
                            topics: [
                                {
                                    id: "top_gc_e09_01",
                                    nameMr: "बँकांचे राष्ट्रीयीकरण, SBI चा इतिहास, ग्रामीण बँका आणि विभेदित बँका",
                                    nameEn: "Bank Nationalisation Waves, SBI Evolution, Rural Credit & Differentiated Banking",
                                    subtopics: [
                                        {
                                            id: "st_gc_e09_01_01",
                                            titleMr: "बँकांचे राष्ट्रीयीकरण व SBI इतिहास: १) स्टेट बँक ऑफ इंडिया (SBI): तिन्ही प्रेसिडेन्सी बँका एकत्र करून १९२१ मध्ये 'इम्पिरियल बँक ऑफ इंडिया' स्थापन झाली; एडी गोरवाला समितीच्या शिफारशीवरून १ जुलै १९५५ रोजी इम्पिरियल बँकेचे रूपांतर 'स्टेट बँक ऑफ इंडिया' (SBI) मध्ये झाले; २) बँकांचे राष्ट्रीयीकरण (इंदिरा गांधी सरकार): अ) १९ जुलै १९६९: ज्या बँकांच्या ठेवी ५० कोटी रुपयांपेक्षा जास्त होत्या अशा १४ मोठ्या व्यापारी बँकांचे राष्ट्रीयीकरण; ब) १५ एप्रिल १९८०: ज्या बँकांच्या ठेवी २०० कोटी रुपयांपेक्षा जास्त होत्या अशा ६ बँकांचे राष्ट्रीयीकरण",
                                            titleEn: "Nationalisation & SBI Genesis: Imperial Bank of India (amalgamated from 3 Presidency Banks in 1921) nationalised as State Bank of India (SBI) on 1 July 1955 per A.D. Gorwala Committee; Nationalisation waves: 1st on 19 July 1969 (14 private banks with deposits >Rs 50 Cr) and 2nd on 15 April 1980 (6 private banks with deposits >Rs 200 Cr)",
                                            chips: ["इम्पिरियल बँक ते SBI (१ जुलै १९५५)", "१४ बँकांचे राष्ट्रीयीकरण (१९ जुलै १९६९)", "६ बँकांचे राष्ट्रीयीकरण (१५ एप्रिल १९८०)", "गोरवाला समिती"]
                                        },
                                        {
                                            id: "st_gc_e09_01_02",
                                            titleMr: "प्रादेशिक ग्रामीण बँका (RRB) व विभेदित बँका: १) प्रादेशिक ग्रामीण बँका (RRBs): एम. नरसिंहम कार्यगटाच्या शिफारशीवरून २ ऑक्टोबर १९७५ रोजी पहिली ग्रामीण बँक 'प्रथमा बँक' (मुरादाबाद, उत्तर प्रदेश - सिंडिकेट बँकेने प्रायोजित केली) स्थापन झाली; भागभांडवल रचना: केंद्र सरकार ५०%, संबंधित राज्य सरकार १५%, आणि प्रायोजक बँक (Sponsor Bank) ३५%; २) विभेदित बँका (Differentiated Banks - नचिकेत मोर समिती शिफारस): अ) पेमेंट बँका (कमाल २ लाख ठेवी स्वीकारू शकतात, क्रेडिट कार्ड व कर्ज देऊ शकत नाहीत - उदा. इंडिया पोस्ट पेमेंट बँक, एअरटेल), ब) स्मॉल फायनान्स बँका (कर्ज वाटपावर भर)",
                                            titleEn: "Regional Rural Banks (RRBs) & Niche Banks: RRBs initiated on 2 Oct 1975 per Narasimham panel; First RRB 'Prathama Bank' (Moradabad, UP sponsored by Syndicate Bank); Equity share: Centre 50%, State 15%, Sponsor Bank 35%; Differentiated Banks (Nachiket Mor Committee): Payment Banks (Can accept demand deposits up to Rs 2 Lakh, CANNOT issue credit cards or loans) and Small Finance Banks",
                                            chips: ["प्रादेशिक ग्रामीण बँका RRB (२ ऑक्टोबर १९७५)", "प्रथमा बँक पहिली RRB", "भांडवल वाटा ५०:१५:३५", "पेमेंट बँका (कर्ज देण्यास मनाई)", "नचिकेत मोर समिती"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय अर्थव्यवस्था (भाग १)", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ७: व्यापारी बँका व राष्ट्रीयीकरण" },
                                        { book: "भारतीय अर्थव्यवस्था", standard: "किरण देसले", chapterRef: "प्रकरण ५: भारतीय बँकिंग रचना" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १०: बँकिंग क्षेत्रातील सुधारणा: NPA समस्या, सरफेसी कायदा व IBC २०१६
                        // =========================================================================
                        {
                            id: "gc_eco_c10",
                            code: "CE10",
                            section: "B",
                            slug: "banking-reforms-npa-resolution-sarfaesi-and-ibc-2016",
                            nameMr: "बँकिंग क्षेत्रातील सुधारणा: NPA समस्या, सरफेसी कायदा व IBC २०१६",
                            nameEn: "Banking Sector Overhaul: NPA Dynamics, SARFAESI Framework & IBC 2016",
                            name: "बँकिंग सुधारणा, NPA व IBC कायदा",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_eco_c10",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_eco_c09",
                            nextChapterId: "gc_eco_c11",
                            metaDescriptionMr: "नरसिंहम समिती १ व २ (१९९१ व १९९८), अनुत्पादक मालमत्ता (NPA - ९० दिवसांचा नियम, Sub-standard, Doubtful, Loss assets), सरफेसी कायदा २००२ (SARFAESI), दिवाळखोरी आणि नादारी संहिता २०१६ (IBC - NCLT लवाद), आणि बॅड बँक (NARCL).",
                            metaDescriptionEn: "Narasimham Committees I & II (1991, 1998), Non-Performing Assets (NPA 90-day overdue norms, classification into Sub-standard, Doubtful, Loss), SARFAESI Act 2002, Insolvency and Bankruptcy Code 2016 (IBC, NCLT, IBBI), and National Asset Reconstruction Company (NARCL Bad Bank).",
                            notesJsonPath: "/data/notes/group_c/prelims/economics/c10_npa_ibc_reforms.json",
                            quizTag: "gc_eco_npa_01",
                            tags: ["Banking Reforms", "Narasimham Committee 1991", "NPA 90 Days Default", "SARFAESI Act 2002", "Insolvency Bankruptcy Code IBC 2016", "Bad Bank NARCL", "High-Weightage"],
                            searchKeywords: ["narasimham committee 1991 1998 banking sector reforms car crar", "non performing assets npa 90 days classification sub standard doubtful loss", "sarfaesi act 2002 securitisation enforcement of security interest", "insolvency and bankruptcy code ibc 2016 nclt ibbi resolution timeline", "bad bank national asset reconstruction company limited narcl idrcl", "नरसिंहम समिती १९९१ व १९९८", "अनुत्पादक मालमत्ता NPA ९० दिवस नियम", "सरफेसी कायदा २००२", "दिवाळखोरी संहिता IBC २०१६ NCLT", "बॅड बँक NARCL"],
                            topics: [
                                {
                                    id: "top_gc_e10_01",
                                    nameMr: "NPA चे निकष, वर्गीकरण, नरसिंहम सुधारणा, सरफेसी कायदा व दिवाळखोरी संहिता",
                                    nameEn: "NPA Recognition Norms, Asset Classification, SARFAESI Recourse & IBC Resolution",
                                    subtopics: [
                                        {
                                            id: "st_gc_e10_01_01",
                                            titleMr: "NPA संकल्पना व वर्गीकरण: जर एखाद्या कर्जावरील मुद्दल किंवा व्याज सलग ९० दिवस (90 days) बँकेला प्राप्त झाले नाही, तर ते कर्ज 'अनुत्पादक मालमत्ता' (NPA - Non-Performing Asset) ठरते (शेती कर्जासाठी: अल्पमुदती पिकांसाठी २ हंगाम आणि दीर्घमुदती पिकांसाठी १ हंगाम थकबाकी); NPA चे ३ प्रकार: १) दुय्यम मालमत्ता (Sub-standard: १२ महिन्यांपर्यंत NPA राहिलेली मालमत्ता), २) संशयित मालमत्ता (Doubtful: १२ महिन्यांपेक्षा जास्त काळ दुय्यम राहिलेली मालमत्ता), ३) तोटा मालमत्ता (Loss Asset: कधीही वसूल न होऊ शकणारी मालमत्ता); बँकांना यासाठी तरतूद (Provisioning) करावी लागते",
                                            titleEn: "NPA Mechanics & 3-Tier Classification: Loan asset classified as Non-Performing Asset (NPA) if interest/principal remains overdue for >90 days (Agri loans: overdue for 2 crop seasons for short duration crops or 1 season for long duration crops); 3 Asset Categories: 1) Sub-standard Assets (NPA <= 12 months), 2) Doubtful Assets (NPA > 12 months), 3) Loss Assets (Identified by bank/auditor/RBI as uncollectible)",
                                            chips: ["NPA ९० दिवसांचा नियम", "दुय्यम मालमत्ता (Sub-standard <=१२ महिने)", "संशयित मालमत्ता (Doubtful)", "तोटा मालमत्ता (Loss Asset)", "शेती कर्ज हंगाम निकष"]
                                        },
                                        {
                                            id: "st_gc_e10_01_02",
                                            titleMr: "सरफेसी कायदा, IBC २०१६ व बॅड बँक: १) सरफेसी कायदा (SARFAESI Act २००२): न्यायालयात न जाता कर्जदाराने तारण ठेवलेली अचल मालमत्ता जप्त करून विकण्याचा बँकांना कायदेशीर अधिकार; २) दिवाळखोरी व नादारी संहिता (IBC २०१६): कॉर्पोरेट दिवाळखोरी जलद गतीने मिटवण्यासाठी ऐतिहासिक कायदा; NCLT (नॅशनल कंपनी लॉ ट्रिब्युनल) ही लवाद संस्था; निराकरणासाठी १८० ते कमाल ३३० दिवसांची मुदत; IBBI नियमन करते; ३) बॅड बँक (Bad Bank - NARCL): बँकांकडील बुडीत कर्जे स्वतःकडे विकत घेऊन त्यांचे पुनरुत्थान करणारी संस्था",
                                            titleEn: "Resolution Architecture (SARFAESI, IBC 2016 & Bad Bank): 1) SARFAESI Act 2002 (Enables banks to seize and auction pledged residential/commercial collateral without court intervention); 2) Insolvency and Bankruptcy Code 2016 (IBC provides time-bound 180 to 330-day resolution via National Company Law Tribunal NCLT; overseen by IBBI); 3) Bad Bank (NARCL-IDRCL setup to aggregate and resolve stressed bank debts)",
                                            chips: ["सरफेसी कायदा २००२ (विनान्यायालय जप्ती)", "दिवाळखोरी संहिता IBC २०१६", "NCLT लवाद संस्था", "१८० ते ३३० दिवस निराकरण मुदत", "बॅड बँक NARCL"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय अर्थव्यवस्था (भाग १)", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ७: बँकिंग सुधारणा, NPA व IBC" },
                                        { book: "भारतीय अर्थव्यवस्था", standard: "किरण देसले", chapterRef: "प्रकरण ५: बँकिंग समोरील आव्हाने" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ११: शासकीय वित्त: अर्थसंकल्प, तुटींचे प्रकार आणि FRBM कायदा २००३
                        // =========================================================================
                        {
                            id: "gc_eco_c11",
                            code: "CE11",
                            section: "C",
                            slug: "public-finance-budget-deficit-metrics-and-frbm-act-2003",
                            nameMr: "शासकीय वित्त: अर्थसंकल्प, तुटींचे प्रकार आणि FRBM कायदा २००३",
                            nameEn: "Public Finance Architecture: Budgetary Structure, Deficit Formulations & FRBM Act 2003",
                            name: "शासकीय वित्त, तुटींचे प्रकार व FRBM",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_eco_c11",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_eco_c10",
                            nextChapterId: "gc_eco_c12",
                            metaDescriptionMr: "अर्थसंकल्पाची रचना (महसुली खाते vs भांडवली खाते), तुटींचे प्रकार (महसुली तूट, वित्तीय तूट Fiscal Deficit, प्राथमिक तूट), तुटीचा भरणा, FRBM कायदा २००३ (एन. के. सिंह समिती अहवाल, ६०% कर्ज-जीडीपी मर्यादा).",
                            metaDescriptionEn: "Budget matrix (Revenue Account vs Capital Account), Deficit mathematics (Revenue Deficit, Fiscal Deficit, Primary Deficit formulas), Deficit financing, FRBM Act 2003 (N.K. Singh Review Committee, 60% Debt-to-GDP anchor).",
                            notesJsonPath: "/data/notes/group_c/prelims/economics/c11_public_finance_frbm.json",
                            quizTag: "gc_eco_finance_01",
                            tags: ["Public Finance", "Revenue vs Capital Account", "Fiscal Deficit Formula", "Primary Deficit Formula", "FRBM Act 2003", "NK Singh Committee", "High-Weightage"],
                            searchKeywords: ["public finance budget revenue receipts vs capital receipts", "revenue deficit formula revenue expenditure minus revenue receipts", "fiscal deficit formula total expenditure minus non debt receipts borrowings", "primary deficit formula fiscal deficit minus interest payments", "frbm act 2003 targets fiscal deficit 3 percent nk singh committee debt to gdp 60", "शासकीय वित्त महसुली जमा भांडवली जमा", "महसुली तूट सूत्र", "वित्तीय तूट सूत्र (Fiscal Deficit)", "प्राथमिक तूट सूत्र", "FRBM कायदा २००३ वित्तीय शिस्त", "एन के सिंह समिती कर्ज-जीडीपी ६०%"],
                            topics: [
                                {
                                    id: "top_gc_e11_01",
                                    nameMr: "अर्थसंकल्प खाती, चार प्रकारच्या तुटींची सूत्रे आणि FRBM कायदा सुधारणा",
                                    nameEn: "Budgetary Accounts, Deficit Mathematical Equations & FRBM Fiscal Roadmap",
                                    subtopics: [
                                        {
                                            id: "st_gc_e11_01_01",
                                            titleMr: "अर्थसंकल्पाची खाती: १) महसुली खाते (Revenue Account): शासनाच्या दैनंदिन कामकाजाशी संबंधित; अ) महसुली जमा: कर महसूल (प्रत्यक्ष व अप्रत्यक्ष कर) आणि कर-व्यतिरिक्त महसूल (व्याज, लाभांश, फी); ब) महसुली खर्च: पगार, पेन्शन, कर्जावरील व्याज आणि अनुदाने (यातून कोणतीही संपत्ती निर्माण होत नाही); २) भांडवली खाते (Capital Account): अ) भांडवली जमा: कर्जे उभारणे, निर्गुंतवणूक (Disinvestment), कर्जांची वसुली; ब) भांडवली खर्च: रस्ते, धरणे, कारखाने उभारणी, राज्य सरकारांना कर्जे देणे (यातून संपत्ती निर्माण होते किंवा दायित्व कमी होते)",
                                            titleEn: "Structure of Government Budget: 1) Revenue Account (Recurring operational flows; Revenue Receipts: Tax & Non-tax; Revenue Expenditure: Salaries, pensions, subsidies, interest payments - creates no physical assets); 2) Capital Account (Creates assets or reduces liabilities; Capital Receipts: Market borrowings, disinvestment, loan recoveries; Capital Expenditure: Infrastructure, highways, capital asset investments)",
                                            chips: ["महसुली जमा (कर व कर-व्यतिरिक्त)", "महसुली खर्च (पगार, पेन्शन, व्याज)", "भांडवली जमा (कर्जे, निर्गुंतवणूक)", "भांडवली खर्च (पायाभूत सुविधा संपत्ती)"]
                                        },
                                        {
                                            id: "st_gc_e11_01_02",
                                            titleMr: "तुटींचे प्रकार व अचूक सूत्रे (MPSC हमखास प्रश्न): १) महसुली तूट (Revenue Deficit) = एकूण महसुली खर्च - एकूण महसुली जमा; २) प्रभावी महसुली तूट (Effective Revenue Deficit) = महसुली तूट - भांडवली मालमत्ता निर्मितीसाठी राज्यांना दिलेली अनुदाने; ३) वित्तीय तूट (Fiscal Deficit) = एकूण खर्च - (एकूण महसुली जमा + बिगर-कर्ज भांडवली जमा); म्हणजेच वित्तीय तूट ही 'सरकारचे त्या वर्षातील एकूण कर्ज' (Total Borrowings) दर्शवते; ४) प्राथमिक तूट (Primary Deficit) = वित्तीय तूट - कर्जावरील व्याजाची परतफेड (Interest Payments)",
                                            titleEn: "Deficit Metrics & Formulas: 1) Revenue Deficit = Revenue Expenditure - Revenue Receipts; 2) Effective Revenue Deficit = Revenue Deficit - Grants for creation of capital assets; 3) Fiscal Deficit = Total Expenditure - (Revenue Receipts + Non-debt Capital Receipts); Fiscal Deficit equals Total Government Borrowings for the year; 4) Primary Deficit = Fiscal Deficit - Interest Payments",
                                            chips: ["महसुली तूट = महसुली खर्च - महसुली जमा", "वित्तीय तूट = एकूण खर्च - बिगर कर्ज जमा (एकूण कर्जे)", "प्राथमिक तूट = वित्तीय तूट - व्याज परतफेड", "तुटीची सूत्रे"]
                                        },
                                        {
                                            id: "st_gc_e11_01_03",
                                            titleMr: "FRBM कायदा २००३ व एन. के. सिंह समिती: १) FRBM कायदा (राजकोषीय जबाबदारी व अर्थसंकल्प व्यवस्थापन अधिनियम २००३): वित्तीय शिस्त आणणे आणि आंतर-पिढी समता प्रस्थापित करणे हे उद्दिष्ट; वित्तीय तूट GDP च्या ३% पर्यंत आणणे आणि महसुली तूट शून्य करणे लक्ष्य; २) एन. के. सिंह FRBM पुनरावलोकन समिती (२०१६): केवळ तुटीऐवजी 'सार्वजनिक कर्ज-जीडीपी गुणोत्तर' (Debt-to-GDP Ratio) हे मुख्य प्रमाण मानण्याची शिफारस; लक्ष्य: एकूण कर्ज-जीडीपी गुणोत्तर ६०% (केंद्र सरकार ४०% आणि राज्य सरकारे २०%); आपत्कालीन परिस्थितीत वित्तीय तूट ०.५% ने वाढवण्याची सूट (Escape Clause)",
                                            titleEn: "FRBM Act 2003 & N.K. Singh Panel: FRBM Act enacted in 2003 to enforce fiscal prudence, targeting Fiscal Deficit at 3% of GDP and eliminating Revenue Deficit; N.K. Singh Review Committee (2016) anchored fiscal path to Debt-to-GDP ratio target of 60% (40% Centre + 20% States) and recommended an Escape Clause (0.5% deficit deviation during war/calamity/structural reforms)",
                                            chips: ["FRBM कायदा २००३ (वित्तीय तूट ३% उद्दिष्ट)", "एन के सिंह समिती २०१६", "कर्ज-जीडीपी गुणोत्तर ६०% (केंद्र ४०%, राज्य २०%)", "एस्केप क्लॉज Escape Clause"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय अर्थव्यवस्था (भाग १)", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ८: शासकीय वित्त, तूट व FRBM" },
                                        { book: "भारतीय अर्थव्यवस्था", standard: "किरण देसले", chapterRef: "प्रकरण ६: सार्वजनिक वित्त व अर्थसंकल्प" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १२: भारतीय कररचना: प्रत्यक्ष व अप्रत्यक्ष कर, GST प्रणाली आणि वित्त आयोग
                        // =========================================================================
                        {
                            id: "gc_eco_c12",
                            code: "CE12",
                            section: "C",
                            slug: "taxation-system-direct-indirect-taxes-gst-and-finance-commission",
                            nameMr: "भारतीय कररचना: प्रत्यक्ष व अप्रत्यक्ष कर, GST प्रणाली आणि वित्त आयोग",
                            nameEn: "Taxation Architecture: Direct/Indirect Taxes, GST Network & Finance Commission Devolution",
                            name: "कररचना, GST व वित्त आयोग",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_eco_c12",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_eco_c11",
                            nextChapterId: "gc_eco_c13",
                            metaDescriptionMr: "प्रत्यक्ष कर (आयकर, महामंडळ कर Corporation Tax), अप्रत्यक्ष कर (कस्टम्स, उत्पादन शुल्क), १०१ वी घटनादुरुस्ती कायदा २०१६ (GST - १ जुलै २०१७ लागू), GST परिषद (कलम २७९A), आणि १५ वा वित्त आयोग (एन. के. सिंह - उभी विभागणी ४१%).",
                            metaDescriptionEn: "Direct Taxes (Income Tax, Corporation Tax), Indirect Taxes (Customs, Excise), 101st Constitutional Amendment Act 2016 (GST rolled out 1 July 2017), GST Council (Article 279A), and 15th Finance Commission under N.K. Singh (Vertical devolution 41%).",
                            notesJsonPath: "/data/notes/group_c/prelims/economics/c12_taxation_gst_finance_commission.json",
                            quizTag: "gc_eco_tax_01",
                            tags: ["Direct Taxes", "Corporate Tax Income Tax", "101st Amendment GST 2016", "GST Council Article 279A", "15th Finance Commission 41 Percent", "High-Weightage"],
                            searchKeywords: ["direct taxes vs indirect taxes progressive regressive taxation", "corporation tax income tax securities transaction tax stt", "101st constitutional amendment act 2016 gst 1 july 2017 cgst sgst igst", "gst council article 279a composition weighted voting", "15th finance commission recommendations nk singh 41 percent horizontal devolution", "प्रत्यक्ष कर vs अप्रत्यक्ष कर", "महामंडळ कर आयकर", "१०१ वी घटनादुरुस्ती GST २०१६ १ जुलै २०१७", "GST परिषद कलम २७९A", "१५ वा वित्त आयोग एन के सिंह उभी विभागणी ४१%"],
                            topics: [
                                {
                                    id: "top_gc_e12_01",
                                    nameMr: "कर प्रकार, १०१ वी घटनादुरुस्ती GST, परिषद रचना आणि १५ वा वित्त आयोग",
                                    nameEn: "Tax Taxonomy, 101st Amendment GST Framework, Council Voting & 15th FC Award",
                                    subtopics: [
                                        {
                                            id: "st_gc_e12_01_01",
                                            titleMr: "प्रत्यक्ष कर विरुद्ध अप्रत्यक्ष कर: १) प्रत्यक्ष कर (Direct Tax): कराचा आघात (Impact) आणि भार (Incidence) एकाच व्यक्तीवर पडतो; कर दुसऱ्यावर ढकलता येत नाही; पुरोगामी (Progressive: उत्पन्न वाढेल तसा कर वाढतो); उदा. वैयक्तिक आयकर (Income Tax), महामंडळ कर (Corporation Tax - कंपन्यांच्या निव्वळ नफ्यावरील कर), भांडवली नफा कर (Capital Gains Tax), STT; २) अप्रत्यक्ष कर (Indirect Tax): कराचा भार ग्राहकांवर ढकलला जातो; प्रतिगामी (Regressive); उदा. GST, सीमा शुल्क (Customs Duty), अबकारी शुल्क",
                                            titleEn: "Direct vs Indirect Taxation: Direct Taxes (Impact and incidence fall on the same entity; non-transferable; progressive nature; e.g., Personal Income Tax, Corporation Tax, Capital Gains Tax, STT); Indirect Taxes (Incidence shifted to end consumer; regressive nature; e.g., GST, Customs Duty, Excise Duty)",
                                            chips: ["प्रत्यक्ष कर (आयकर, महामंडळ कर)", "अप्रत्यक्ष कर (GST, कस्टम्स)", "पुरोगामी कर (Progressive)", "प्रतिगामी कर (Regressive)"]
                                        },
                                        {
                                            id: "st_gc_e12_01_02",
                                            titleMr: "वस्तू व सेवा कर (GST - १०१ वी घटनादुरुस्ती २०१६): १ जुलै २०१७ रोजी भारतात 'एक देश, एक कर' (One Nation, One Tax) लागू; १७ अप्रत्यक्ष कर आणि २३ सेस समाविष्ट करून एकच कर केला; ३ घटक: CGST (केंद्र), SGST (राज्य) आणि IGST (आंतरराज्य व्यापारावर केंद्र सरकारकडून आकारणी व वाटप - कलम २६९A); कर टप्पे (Slabs): ०%, ५%, १२%, १८%, २८%; पेट्रोलियम उत्पादने व मद्य सध्या GST च्या बाहेर; GST परिषद (कलम २७९A): अध्यक्ष केंद्रीय अर्थमंत्री, सर्व राज्यांचे अर्थमंत्री सदस्य; निर्णय ३/४ बहुमताने (केंद्राचे मत १/३ आणि सर्व राज्यांचे मिळून २/३ मत मूल्य)",
                                            titleEn: "Goods and Services Tax (GST - 101st Amendment 2016): Rolled out on 1 July 2017 ('One Nation, One Tax'); Subsumed 17 indirect taxes and 23 cesses; Dual Structure: CGST, SGST, and IGST (Art 269A on inter-state supply); 5 Slabs (0%, 5%, 12%, 18%, 28%); Crude oil, petrol, diesel, ATF and alcohol outside GST; GST Council (Article 279A chaired by Union Finance Minister; Decisions require 3/4th weighted majority: Centre holds 1/3rd, States hold 2/3rd votes)",
                                            chips: ["GST १०१ वी दुरुस्ती २०१६", "१ जुलै २०१७ लागू", "CGST, SGST, IGST", "GST परिषद कलम २७९A", "३/४ बहुमत निर्णय"]
                                        },
                                        {
                                            id: "st_gc_e12_01_03",
                                            titleMr: "१५ वा वित्त आयोग (एन. के. सिंह आयोग): कलम २८० अन्वये राष्ट्रपतींनी नियुक्ती केली; कालावधी: २०२० ते २०२६ (६ वर्षे); प्रमुख शिफारशी: १) उभी विभागणी (Vertical Devolution): केंद्रीय कर महसुलातील राज्य सरकारांचा वाटा '४१%' ठरवला (१४ व्या आयोगाच्या ४२% वाट्यातून १% कमी करून तो नव्याने निर्माण झालेल्या जम्मू-काश्मीर व लडाख केंद्रशासित प्रदेशांसाठी ठेवला); २) आडवी विभागणी (Horizontal Devolution निकष): उत्पन्नातील अंतर ४५%, क्षेत्रफळ १५%, २०११ ची लोकसंख्या १५% (१९७१ ची लोकसंख्या पूर्णपणे वगळली), वन व पर्यावरण १०%, लोकसंख्याशास्त्रीय कामगिरी १२.५%, आणि कर प्रयत्न २.५%",
                                            titleEn: "15th Finance Commission (Chaired by N.K. Singh): Applicable for 2020-2026; Key Awards: Vertical Devolution fixed at 41% (reduced by 1% from 14th FC's 42% to accommodate newly formed UTs of J&K and Ladakh); Horizontal formula weights: Income Distance 45%, Area 15%, Population (2011 Census only) 15%, Forest & Ecology 10%, Demographic Performance 12.5%, Tax Effort 2.5%",
                                            chips: ["१५ वा वित्त आयोग (एन के सिंह)", "उभी विभागणी ४१% वाटा", "२०११ ची जनगणना निकष (१५%)", "उत्पन्नातील अंतर ४५%", "कालावधी २०२०-२६"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय अर्थव्यवस्था (भाग १)", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ९: कररचना, GST व वित्त आयोग" },
                                        { book: "Finance Commission of India", standard: "15th FC Final Report", chapterRef: "Devolution Formula & State Recommendations" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १३: परकीय व्यापार, व्यवहारतोल (BoP) आणि रुपयाची परिवर्तनीयता
                        // =========================================================================
                        {
                            id: "gc_eco_c13",
                            code: "CE13",
                            section: "D",
                            slug: "foreign-trade-balance-of-payments-and-rupee-convertibility",
                            nameMr: "परकीय व्यापार, व्यवहारतोल (BoP) आणि रुपयाची परिवर्तनीयता",
                            nameEn: "External Sector: Trade Policy, Balance of Payments (BoP) & Rupee Convertibility",
                            name: "परकीय व्यापार, BoP व विदेशी विनिमय",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_eco_c13",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_eco_c12",
                            nextChapterId: "gc_eco_c14",
                            metaDescriptionMr: "व्यापारतोल vs व्यवहारतोल (BoP), चालू खाते (Current Account) vs भांडवली खाते (Capital Account), चालू खात्यावरील तूट (CAD), परकीय चलन साठा (FOREX), रुपयाचे अवमूल्यन (Devaluation), आणि तारापोर समिती.",
                            metaDescriptionEn: "Balance of Trade vs Balance of Payments (BoP), Current Account vs Capital Account components, Current Account Deficit (CAD), Foreign Exchange Reserves composition (FCA, Gold, SDR, RTP), Currency Devaluation vs Depreciation, and Tarapore Committees.",
                            notesJsonPath: "/data/notes/group_c/prelims/economics/c13_bop_forex_trade.json",
                            quizTag: "gc_eco_bop_01",
                            tags: ["Balance of Payments BoP", "Current Account Deficit CAD", "Capital Account FDI FPI", "Forex Reserves RBI", "Rupee Convertibility Tarapore", "High-Weightage"],
                            searchKeywords: ["balance of payments bop current account vs capital account", "current account deficit cad sustainable limit 2.5 percent gdp", "foreign exchange reserves components fca gold sdr rtp", "devaluation of rupee vs market depreciation 1949 1966 1991", "full convertibility of rupee current account 1994 ss tarapore committee", "व्यवहारतोल BoP चालू खाते भांडवली खाते", "चालू खात्यावरील तूट CAD", "परकीय चलन साठा FOREX घटक", "रुपयाचे अवमूल्यन १९४९ १९६६ १९९१", "तारापोर समिती रुपया परिवर्तनीयता"],
                            topics: [
                                {
                                    id: "top_gc_e13_01",
                                    nameMr: "व्यवहारतोल रचना, CAD व्यवस्थापन, परकीय चलन साठा आणि रुपया परिवर्तनीयता",
                                    nameEn: "BoP Accounting Framework, CAD Mechanics, Forex Composition & Rupee Convertibility",
                                    subtopics: [
                                        {
                                            id: "st_gc_e13_01_01",
                                            titleMr: "व्यापारतोल व व्यवहारतोल (BoP) रचना: १) व्यापारतोल (Balance of Trade - BoT): केवळ दृश्य वस्तूंची आयात आणि निर्यात यांमधील फरक; २) व्यवहारतोल (Balance of Payments - BoP): एका आर्थिक वर्षात देशाने जगाशी केलेल्या सर्व आर्थिक व्यवहारांची पद्धतशीर नोंद (दुहेरी नोंद पद्धत); BoP ची २ खाती: अ) चालू खाते (Current Account): दृश्य वस्तू व्यापार + अदृश्य व्यवहार (सेवा software, पर्यटन + उत्पन्न व्याज, लाभांश + एकतर्फी हस्तांतरणे विप्रेषणे Remittances); ब) भांडवली खाते (Capital Account): थेट परकीय गुंतवणूक (FDI), परकीय संस्थागत गुंतवणूक (FPI), विदेशी कर्जे (ECB) आणि अनिवासी भारतीय (NRI) ठेवी",
                                            titleEn: "BoT vs BoP Framework: Balance of Trade (BoT measures only visible merchandise export-import balance); Balance of Payments (BoP is double-entry record of ALL economic transactions with rest of the world); Two Accounts: a) Current Account (Visible goods trade + Invisibles: Services, factor income, remittances), b) Capital Account (Foreign Direct Investment FDI, Foreign Portfolio Investment FPI, External Commercial Borrowings ECB, NRI deposits)",
                                            chips: ["व्यापारतोल BoT (केवळ दृश्य वस्तू)", "व्यवहारतोल BoP (दृश्य + अदृश्य + भांडवल)", "चालू खाते (Current Account)", "भांडवली खाते (FDI, FPI, कर्जे)"]
                                        },
                                        {
                                            id: "st_gc_e13_01_02",
                                            titleMr: "CAD, परकीय चलन साठा व रुपया परिवर्तनीयता: १) चालू खात्यावरील तूट (CAD - Current Account Deficit): जेव्हा परकीय चलनाची चालू खात्यावरील आवक ही जावक खर्चापेक्षा कमी असते; GDP च्या २.५% पर्यंत CAD सुरक्षित मानली जाते; २) परकीय चलन साठा (FOREX): RBI कस्टोडियन असते; ४ घटक: परकीय चलन मालमत्ता (FCA), सोने (Gold), विशेष उचल अधिकार (SDR), आणि आंतरराष्ट्रीय नाणेनिधीतील राखीव गंगाजळी (RTP); ३) रुपया परिवर्तनीयता: ऑगस्ट १९९४ मध्ये रुपया चालू खात्यावर पूर्ण परिवर्तनीय करण्यात आला; एस. एस. तारापोर समिती (१९९७ व २००६) ने भांडवली खात्यावर पूर्ण परिवर्तनीयतेसाठी पूर्वअटी सुचवल्या",
                                            titleEn: "CAD, Forex Reserves & Convertibility: CAD occurs when value of imported goods/services exceeds exports (sustainable under 2.5% of GDP); India's Forex Reserves held by RBI in 4 assets: Foreign Currency Assets (FCA), Gold, Special Drawing Rights (SDR), and Reserve Tranche Position (RTP) in IMF; Rupee made fully convertible on Current Account in August 1994; S.S. Tarapore Committees (1997, 2006) laid preconditions for Capital Account Convertibility",
                                            chips: ["चालू खात्यावरील तूट CAD (मर्यादा २.५% GDP)", "परकीय चलन साठा FOREX ४ घटक (FCA, Gold, SDR, RTP)", "चालू खात्यावर पूर्ण परिवर्तनीयता (१९९४)", "तारापोर समिती (भांडवली खाते)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय अर्थव्यवस्था (भाग १)", standard: "रंजन कोळंबे", chapterRef: "प्रकरण १०: परकीय व्यापार व व्यवहारतोल" },
                                        { book: "भारतीय अर्थव्यवस्था", standard: "किरण देसले", chapterRef: "प्रकरण ७: भारताचा परकीय व्यापार व विदेशी गुंतवणूक" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १४: आंतरराष्ट्रीय वित्तीय संस्था: IMF, जागतिक बँक आणि WTO
                        // =========================================================================
                        {
                            id: "gc_eco_c14",
                            code: "CE14",
                            section: "D",
                            slug: "international-financial-institutions-imf-world-bank-and-wto",
                            nameMr: "आंतरराष्ट्रीय वित्तीय संस्था: IMF, जागतिक बँक आणि WTO",
                            nameEn: "International Financial & Trade Architecture: IMF, World Bank Group & WTO",
                            name: "आंतरराष्ट्रीय संस्था: IMF, World Bank व WTO",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 2,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_eco_c14",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_eco_c13",
                            nextChapterId: "gc_eco_c15",
                            metaDescriptionMr: "ब्रेटन वूड्स परिषद १९४४, आंतरराष्ट्रीय नाणेनिधी (IMF - SDR पेपर गोल्ड), जागतिक बँक गट (IBRD, IDA, IFC, MIGA, ICSID), GATT ते जागतिक व्यापार संघटना (WTO १ जानेवारी १९९५), कृषी करार (AoA सबसिडी बॉक्सेस), आणि TRIPS.",
                            metaDescriptionEn: "Bretton Woods Conference 1944, International Monetary Fund (IMF, SDR Paper Gold currency basket), World Bank Group (IBRD, IDA soft-loan window, IFC, MIGA, ICSID), GATT transition to WTO on 1 Jan 1995 (Marrakesh Agreement), Agreement on Agriculture (AoA subsidy boxes), and TRIPS.",
                            notesJsonPath: "/data/notes/group_c/prelims/economics/c14_imf_worldbank_wto.json",
                            quizTag: "gc_eco_wto_01",
                            tags: ["Bretton Woods 1944", "International Monetary Fund IMF", "Special Drawing Rights SDR", "World Bank IBRD IDA", "World Trade Organization WTO 1995", "TRIPS AoA"],
                            searchKeywords: ["bretton woods conference 1944 imf and world bank twin sisters", "international monetary fund imf balance of payments crisis sdr paper gold", "sdr currency basket dollar euro renminbi yen pound", "world bank group 5 institutions ibrd ida soft loan window ifc", "world trade organization wto established 1 january 1995 marrakesh agreement", "wto agreement on agriculture aoa amber blue green box subsidies", "ब्रेटन वूड्स परिषद १९४४ IMF व जागतिक बँक", "आंतरराष्ट्रीय नाणेनिधी IMF व्यवहारतोल मदत", "SDR पेपर गोल्ड ५ चलने", "जागतिक बँक IDA सवलतीचे कर्ज खिडकी", "जागतिक व्यापार संघटना WTO १ जानेवारी १९९५", "WTO कृषी करार AoA अंबर ब्लू ग्रीन बॉक्स"],
                            topics: [
                                {
                                    id: "top_gc_e14_01",
                                    nameMr: "ब्रेटन वूड्स जुळी संस्था (IMF, World Bank), SDR आणि WTO करार",
                                    nameEn: "Bretton Woods Architecture (IMF, World Bank), SDR Basket & WTO Regime",
                                    subtopics: [
                                        {
                                            id: "st_gc_e14_01_01",
                                            titleMr: "IMF आणि जागतिक बँक (ब्रेटन वूड्स संस्था): १९४४ च्या ब्रेटन वूड्स परिषदेतून निर्मिती (दोन्हींचे मुख्यालय वॉशिंग्टन डी.सी.); १) आंतरराष्ट्रीय नाणेनिधी (IMF): व्यवहारतोल (BoP) संकटात सापडलेल्या सदस्य देशांना अल्पमुदती कर्ज सहाय्य देणे; चलन: SDR (Special Drawing Rights - 'पेपर गोल्ड', ५ चलनांचा बास्केट: US डॉलर, युरो, चिनी युआन/रेन्मिन्बी, जपानी येन, ब्रिटिश पाउंड); २) जागतिक बँक गट (World Bank Group): विकसनशील देशांच्या आर्थिक विकासासाठी व पायाभूत सुविधांसाठी दीर्घमुदती कर्जे देणे; ५ संस्था: IBRD, IDA ('सुलभ कर्जाची खिडकी' - बिनव्याजी कर्जे), IFC (खाजगी क्षेत्राला कर्ज), MIGA, ICSID (भारत सदस्य नाही)",
                                            titleEn: "Bretton Woods Twins (IMF & World Bank): Established via 1944 conference; HQ Washington D.C.; 1) IMF (Addresses Balance of Payments crises; issues Special Drawing Rights SDR 'Paper Gold' pegged to 5 currencies: USD, EUR, CNY, JPY, GBP); 2) World Bank Group (Provides long-term project loans; Comprises 5 bodies: IBRD, IDA 'Soft Loan Window' giving interest-free credits, IFC for private enterprise, MIGA, ICSID of which India is NOT a member)",
                                            chips: ["ब्रेटन वूड्स परिषद १९४४ (वॉशिंग्टन HQ)", "IMF व्यवहारतोल BoP संकट मदत", "SDR पेपर गोल्ड (५ चलने)", "जागतिक बँक IDA (सुलभ कर्ज खिडकी)", "भारत ICSID चा सदस्य नाही"]
                                        },
                                        {
                                            id: "st_gc_e14_01_02",
                                            titleMr: "जागतिक व्यापार संघटना (WTO): १ जानेवारी १९९५ रोजी डंकेल प्रस्तावांवर आधारित 'मराकेश कराराने' GATT चे रूपांतर WTO मध्ये झाले; मुख्यालय: जिनिव्हा (स्वित्झर्लंड); आंतरराष्ट्रीय व्यापारातील जकात व अडथळे दूर करणे; प्रमुख करार: १) कृषी करार (Agreement on Agriculture - AoA): अनुदानांचे ३ बॉक्सेस: अ) ग्रीन बॉक्स (व्यापार विकृत न करणारी अनुदाने - मर्यादेशिवाय मुभा), ब) ब्लू बॉक्स (उत्पादन मर्यादित ठेवणारी अनुदाने), क) अंबर बॉक्स (किंमत आधार देणारी व्यापार विकृत करणारी अनुदाने - मर्यादित); २) TRIPS: बौद्धिक संपदा हक्क (पेटंट, कॉपीराइट, भौगोलिक निर्देशांक GI); ३) TRIMS: गुंतवणूक उपाय",
                                            titleEn: "World Trade Organization (WTO): Replaced GATT on 1 Jan 1995 via Marrakesh Agreement; HQ Geneva; Promotes barrier-free rules-based multilateral trade; Core Accords: Agreement on Agriculture (AoA Subsidies: Green Box non-distorting permitted, Blue Box production-limiting, Amber Box trade-distorting subject to De Minimis caps); TRIPS (Intellectual property: Patents, GI tags); TRIMS",
                                            chips: ["WTO १ जानेवारी १९९५ (मराकेश करार)", "मुख्यालय जिनिव्हा (GATT चे रूपांतर)", "कृषी करार AoA (अंबर, निळा, हिरवा बॉक्स)", "TRIPS बौद्धिक संपदा पेटंट", "GI टॅग"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय अर्थव्यवस्था (भाग १)", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ११: आंतरराष्ट्रीय वित्तीय संघटना" },
                                        { book: "भारतीय अर्थव्यवस्था", standard: "किरण देसले", chapterRef: "प्रकरण ८: WTO, IMF व जागतिक बँक" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १५: कृषी अर्थव्यवस्था, अन्न सुरक्षा, हमीभाव (MSP) व सहकार
                        // =========================================================================
                        {
                            id: "gc_eco_c15",
                            code: "CE15",
                            section: "E",
                            slug: "agricultural-economy-food-security-msp-and-cooperatives",
                            nameMr: "कृषी अर्थव्यवस्था, अन्न सुरक्षा, हमीभाव (MSP) व सहकार चळवळ",
                            nameEn: "Agrarian Economy: Rural Credit (NABARD), Food Security, MSP & Cooperatives",
                            name: "कृषी पतपुरवठा, हमीभाव MSP व सहकार",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_eco_c15",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_eco_c14",
                            nextChapterId: "gc_eco_c16",
                            metaDescriptionMr: "नाबार्ड (NABARD कायदा १९८१, स्थापना १२ जुलै १९८२ शिवरामन समिती), किसान क्रेडिट कार्ड (KCC १९९८), किमान आधारभूत किंमत (MSP - CACP द्वारे २२+१ पिकांसाठी घोषणा), स्वामिनाथन आयोग शिफारशी (C2+50%), सार्वजनिक वितरण व्यवस्था (PDS), आणि महाराष्ट्रातील सहकार चळवळ.",
                            metaDescriptionEn: "NABARD Act 1981 (Est 12 July 1982 via B. Sivaraman panel), Kisan Credit Card (KCC 1998), Minimum Support Price (MSP fixed by CACP for 22+1 mandated crops), Swaminathan Commission (C2+50% cost formula), Targeted PDS, and Cooperative Movement in Maharashtra.",
                            notesJsonPath: "/data/notes/group_c/prelims/economics/c15_agriculture_msp_nabard.json",
                            quizTag: "gc_eco_agri_01",
                            tags: ["NABARD 12 July 1982", "Sivaraman Committee", "Kisan Credit Card KCC", "MSP CACP 22 Crops", "Swaminathan Commission C2", "Cooperatives Maharashtra", "High-Weightage"],
                            searchKeywords: ["nabard established 12 july 1982 sivaraman committee apex rural credit", "kisan credit card kcc scheme 1998 rv gupta model", "minimum support price msp cacp 22 mandated crops plus sugarcane frp", "swaminathan commission recommendations comprehensive cost c2 plus 50 percent", "targeted public distribution system tpds national food security act 2013 nfsa", "cooperative movement in maharashtra sugar dairy credit pacs", "नाबार्ड स्थापना १२ जुलै १९८२ शिवरामन समिती", "किसान क्रेडिट कार्ड KCC १९९८", "किमान आधारभूत किंमत MSP CACP २२ पिके", "स्वामिनाथन आयोग C2+50% सूत्र", "राष्ट्रीय अन्न सुरक्षा कायदा २०१३ NFSA", "महाराष्ट्रातील सहकार साखर दूध पतसंस्था"],
                            topics: [
                                {
                                    id: "top_gc_e15_01",
                                    nameMr: "नाबार्ड पतपुरवठा, हमीभाव निर्धारण पद्धती, अन्न सुरक्षा आणि सहकार",
                                    nameEn: "NABARD Rural Refinance, MSP Fixing Formulations, NFSA & Cooperative Credit",
                                    subtopics: [
                                        {
                                            id: "st_gc_e15_01_01",
                                            titleMr: "नाबार्ड (NABARD) व कृषी पतपुरवठा रचना: बी. शिवरामन समितीच्या शिफारशीनुसार 'नाबार्ड कायदा १९८१' संमत; १२ जुलै १९८२ रोजी नाबार्डची स्थापना (मुख्यालय मुंबई); कृषी व ग्रामीण विकासाला पतपुरवठा करणारी देशातील सर्वोच्च पुनर्वित्त (Refinance) संस्था; त्रिस्तरीय सहकारी पतपुरवठा रचना: १) राज्य सहकारी बँक (MSCB - शिखर बँक), २) जिल्हा मध्यवर्ती सहकारी बँका (DCCB - जिल्हा स्तर), ३) प्राथमिक कृषी पतसंस्था (PACS - गाव स्तर); किसान क्रेडिट कार्ड (KCC): आर. व्ही. गुप्ता समितीच्या शिफारशीवरून १९९८ मध्ये शेतकऱ्यांना अल्पमुदती पीक कर्ज देण्यासाठी सुरू",
                                            titleEn: "NABARD & Rural Credit Architecture: Recommended by B. Sivaraman Committee; Formed under NABARD Act 1981 on 12 July 1982 (HQ Mumbai); Apex refinancing institution for agriculture and rural crafts; Three-tier cooperative credit pyramid: State Cooperative Bank (MSCB apex), District Central Cooperative Banks (DCCB), Primary Agricultural Credit Societies (PACS at village level); Kisan Credit Card (KCC introduced 1998 per R.V. Gupta model)",
                                            chips: ["नाबार्ड NABARD (१२ जुलै १९८२)", "शिवरामन समिती शिफारस", "शिखर बँक (MSCB) -> DCCB -> PACS", "किसान क्रेडिट कार्ड KCC (१९९८)"]
                                        },
                                        {
                                            id: "st_gc_e15_01_02",
                                            titleMr: "किमान आधारभूत किंमत (MSP) व स्वामिनाथन आयोग: कृषी खर्च व मूल्य आयोग (CACP - स्थापना १९६५) च्या शिफारशीवरून केंद्र सरकार पेरणीपूर्वी २२ अनिवार्य पिकांसाठी MSP आणि उसासाठी 'वाजवी व फायदेशीर भाव' (FRP) जाहीर करते; MSP मोजण्याची ३ सूत्रे: १) A2 खर्च (बियाणे, खते, कीटकनाशके, मजुरी प्रत्यक्ष खर्च), २) A2 + FL (A2 अधिक कुटुंबाच्या श्रमाचे मूल्य), ३) C2 खर्च (सर्वंकष खर्च: जमीन भाडे व भांडवलावरील व्याजासह); डॉ. एम. एस. स्वामिनाथन राष्ट्रीय शेतकरी आयोग (२००६) शिफारस: शेतकऱ्यांना उत्पादन खर्चाच्या दीडपट म्हणजेच 'C2 + ५०%' हमीभाव दिला पाहिजे",
                                            titleEn: "Minimum Support Price (MSP) & Swaminathan Formula: Commission for Agricultural Costs and Prices (CACP founded 1965) recommends MSP for 22 mandated crops and Fair and Remunerative Price (FRP) for sugarcane before sowing; Cost Formulations: A2 (Paid-out operational costs), A2+FL (A2 plus imputed value of family labor), C2 (Comprehensive economic cost including land rent and capital interest); National Commission on Farmers (M.S. Swaminathan 2006) recommended MSP at C2 + 50%",
                                            chips: ["किमान आधारभूत किंमत MSP (CACP शिफारस)", "२२ पिके + ऊस FRP भाव", "A2 + FL सूत्र vs C2 सर्वंकष खर्च", "स्वामिनाथन आयोग शिफारस (C2 + ५०%)"]
                                        },
                                        {
                                            id: "st_gc_e15_01_03",
                                            titleMr: "राष्ट्रीय अन्न सुरक्षा कायदा (NFSA २०१३) व सहकार: १) NFSA २०१३: देशातील ६७% लोकसंख्येला (ग्रामीण ७५% व नागरी ५०%) सवलतीच्या दरात अन्नधान्य मिळण्याचा कायदेशीर अधिकार; अंत्योदय कुटुंबांना दरमहा ३५ किलो आणि प्राधान्य कुटुंब लाभार्थ्यांना दरडोई दरमहा ५ किलो धान्य (तांदूळ रु. ३, गहू रु. २, भरडधान्य रु. १ प्रति किलो, सध्या मोफत PMGKAY); २) महाराष्ट्रातील सहकार: आशियातील पहिला सहकारी साखर कारखाना प्रवरानगर (१९४९ - विखे पाटील); दुग्ध सहकार (आनंद मॉडेल, वारणा, गोकुळ)",
                                            titleEn: "National Food Security Act (NFSA 2013) & Cooperatives: NFSA 2013 legally guarantees subsidized foodgrains to 67% population (75% rural, 50% urban); Provides 35 kg/month for Antyodaya and 5 kg/person/month for Priority Households; Maharashtra Cooperatives: First cooperative sugar factory at Pravaranagar (1949 by Vikhe Patil) and dairy cooperatives (Gokul, Warana)",
                                            chips: ["राष्ट्रीय अन्न सुरक्षा कायदा २०१३ NFSA", "६७% लोकसंख्येला कायदेशीर अन्न हक्क", "अंत्योदय ३५ किलो धान्य", "महाराष्ट्रात सहकार चळवळ (प्रवरानगर १९४९)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय अर्थव्यवस्था (भाग १)", standard: "रंजन कोळंबे", chapterRef: "प्रकरण १२: कृषी पतपुरवठा, MSP व अन्न सुरक्षा" },
                                        { book: "भारतीय अर्थव्यवस्था", standard: "किरण देसले", chapterRef: "प्रकरण ९: कृषी व सहकार विकास" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १६: पूर्व परीक्षा अर्थव्यवस्था मास्टर रिव्हिजन, संकल्पना सूत्रे व १० वर्षांचे PYQ ट्रेंड्स
                        // =========================================================================
                        {
                            id: "gc_eco_c16",
                            code: "CE16",
                            section: "E",
                            slug: "prelims-economics-master-revision-formulae-and-pyq-trends",
                            nameMr: "पूर्व परीक्षा अर्थव्यवस्था मास्टर रिव्हिजन, संकल्पना सूत्रे व १० वर्षांचे PYQ ट्रेंड्स",
                            nameEn: "Prelims Economics Master Consolidation: Conceptual Formulae & 10-Year PYQ Trends",
                            name: "अर्थव्यवस्था मास्टर रिव्हिजन",
                            category: "REVISION",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_eco_c16",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_eco_c15",
                            nextChapterId: null,
                            metaDescriptionMr: "गट-क पूर्व परीक्षा अर्थव्यवस्थेच्या १५ प्रश्नांची (१५ गुण) अचूक रणनीती, सर्व आर्थिक सूत्रे (GDP, NNP, Fiscal Deficit, Primary Deficit, CRR, SLR), महत्त्वाच्या समित्या, आणि २०१३ ते २०२५ मधील MPSC PYQ ट्रेंड्स.",
                            metaDescriptionEn: "Strategic Master Revision for Prelims Economics (15/15 Target): Comprehensive formula bank (GDP, GVA, Fiscal Deficit, Primary Deficit, CRR, SLR), Key Policy Committees, and 10-Year MPSC Group C trend analytics.",
                            notesJsonPath: "/data/notes/group_c/prelims/economics/c16_master_revision.json",
                            quizTag: "gc_eco_revision_01",
                            tags: ["Revision", "Prelims Strategy", "15 Marks Target", "Economics Formulas Cheatsheet", "Committee Matrix", "PYQ Trends 2013 to 2025", "High-Weightage"],
                            searchKeywords: ["mpsc group c economics 15 questions strategy", "economics formulas cheatsheet gdp fiscal deficit primary deficit", "economic committees tandon narasimham urjit patel kelkar", "mpsc prelims economics pyq trend analysis 2013 to 2025", "multi statement economics elimination techniques", "अर्थव्यवस्था पूर्व परीक्षा रणनीती १५ गुण", "सर्व आर्थिक सूत्रे तक्ता GDP तूट", "आर्थिक समित्या सारांश", "१० वर्षांचे PYQ विश्लेषण"],
                            topics: [
                                {
                                    id: "top_gc_e16_01",
                                    nameMr: "आर्थिक सूत्रांची मास्टर यादी, समित्यांचे कोष्टक आणि १० वर्षांचे MPSC PYQ विश्लेषण",
                                    nameEn: "Mathematical Macroeconomic Formulas, Committee Matrix & 10-Year PYQ Insights",
                                    subtopics: [
                                        {
                                            id: "st_gc_e16_01_01",
                                            titleMr: "महत्त्वाच्या आर्थिक सूत्रांचा मास्टर तक्ता: १) GDP at MP = GVA at Basic Prices + वस्तू कर - वस्तू अनुदाने; २) GDP डिफ्लेटर = (Nominal GDP / Real GDP) × १००; ३) NNP at FC = NNP at MP - अप्रत्यक्ष कर + अनुदाने; ४) महसुली तूट = महसुली खर्च - महसुली जमा; ५) वित्तीय तूट = एकूण खर्च - (महसुली जमा + बिगर-कर्ज भांडवली जमा); ६) प्राथमिक तूट = वित्तीय तूट - व्याज परतफेड; ७) चालू खात्यावरील तूट (CAD) = (दृश्य आयात + अदृश्य आयात) - (दृश्य निर्यात + अदृश्य निर्यात)",
                                            titleEn: "Master Formula Cheatsheet: 1) GDP at MP = GVA at Basic Prices + Product Taxes - Product Subsidies; 2) GDP Deflator = (Nominal GDP / Real GDP) * 100; 3) NNP at FC = NNP at MP - Indirect Taxes + Subsidies; 4) Revenue Deficit = Revenue Expenditure - Revenue Receipts; 5) Fiscal Deficit = Total Expenditure - Non-debt Receipts; 6) Primary Deficit = Fiscal Deficit - Interest Payments; 7) CAD = Total Imports (Goods+Invisibles) - Total Exports",
                                            chips: ["GDP डिफ्लेटर सूत्र", "वित्तीय तूट सूत्र", "प्राथमिक तूट सूत्र", "महसुली तूट सूत्र", "GVA ते GDP रूपांतरण"]
                                        },
                                        {
                                            id: "st_gc_e16_01_02",
                                            titleMr: "महत्त्वाच्या आर्थिक समित्यांचे कोष्टक: १) बँकिंग सुधारणा: एम. नरसिंहम समिती (१९९१ व १९९८); २) कर सुधारणा: राजा चेलय्या समिती (१९९१) व विजय केळकर कार्यगट (२००२); ३) वित्तीय शिस्त: एन. के. सिंह समिती (२०१६); ४) चलनवाढ लक्ष्यीकरण: उर्जित पटेल समिती (२०१४); ५) दारिद्र्य मापन: सुरेश तेंडुलकर (२००९) व सी. रंगराजन (२०१४); ६) भांडवली परिवर्तनीयता: एस. एस. तारापोर समिती (१९९७, २००६); ७) विभेदित बँका: नचिकेत मोर समिती (२०१३)",
                                            titleEn: "Macroeconomic Committees Concordance: 1) Banking Reforms: M. Narasimham (1991, 1998); 2) Tax Reforms: Raja Chelliah (1991) & Vijay Kelkar (2002); 3) Fiscal Roadmap: N.K. Singh (2016); 4) Monetary Policy Framework: Urjit Patel (2014); 5) Poverty Baselines: Tendulkar (2009) & Rangarajan (2014); 6) Capital Account Convertibility: Tarapore (1997, 2006); 7) Financial Inclusion/Niche Banks: Nachiket Mor (2013)",
                                            chips: ["नरसिंहम समिती (बँकिंग)", "चेलय्या व केळकर (कर सुधारणा)", "उर्जित पटेल (महागाई लक्ष्यीकरण)", "तेंडुलकर व रंगराजन (दारिद्र्य)", "तारापोर (रुपया परिवर्तनीयता)"]
                                        },
                                        {
                                            id: "st_gc_e16_01_03",
                                            titleMr: "MPSC पूर्व परीक्षा १० वर्षांचे विश्लेषण (१५ पैकी १४+ गुण रणनीती): प्रश्न वितरणाचा कल: राष्ट्रीय उत्पन्न व GVA (२ प्रश्न), नियोजन व नीती आयोग (२ प्रश्न), दारिद्र्य व बेरोजगारी (२-३ प्रश्न - हमखास समित्या), चलनवाढ व CPI/WPI (१-२ प्रश्न), बँकिंग व RBI मौद्रिक धोरण (२-३ प्रश्न - Repo/CRR/NPA), शासकीय वित्त, अर्थसंकल्प व FRBM (२-३ प्रश्न), परकीय व्यापार व BoP (१-२ प्रश्न); चालू आर्थिक पाहणी (Economic Survey) व बजेटमधील आकडेवारीचे अचूक वाचन; बहुविधानात्मक प्रश्नांमध्ये एलिमिनेशन तंत्राचा वापर",
                                            titleEn: "10-Year MPSC Group C Economics Trend Analytics (14+/15 Strategy): High-yield question clusters: National Income & GVA (2 Qs), Planning & NITI Aayog (2 Qs), Poverty & Unemployment committees (2-3 Qs guaranteed), Inflation CPI/WPI (1-2 Qs), RBI Monetary Policy & Banking (2-3 Qs), Public Finance, Deficits & FRBM (2-3 Qs), External Sector & BoP (1-2 Qs); Synthesis of latest Economic Survey data and elimination tricks",
                                            chips: ["PYQ ट्रेंड्स विश्लेषण", "१५ पैकी १४+ गुण रणनीती", "दारिद्र्य व बेरोजगारी समित्या", "RBI मौद्रिक धोरण प्रश्न", "अर्थसंकल्पीय तूट प्रश्न", "एलिमिनेशन तंत्र"]
                                        }
                                    ],
                                    sources: [
                                        { book: "भारतीय अर्थव्यवस्था (भाग १ व २)", standard: "रंजन कोळंबे", chapterRef: "मास्टर उजळणी व सांख्यिकी सारांश" },
                                        { book: "MPSC मागील वर्षांच्या प्रश्नपत्रिका संच", standard: "२०१३ ते २०२५", chapterRef: "अर्थव्यवस्था पूर्व परीक्षा प्रश्न विश्लेषण" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },


        // ५. सामान्य विज्ञान (`gc_pre_science`)
        {
            id: "gc_pre_science",
            code: "SCI",
            slug: "general-science-physics-chemistry-biology-health",
            nameMr: "सामान्य विज्ञान (भौतिकशास्त्र, रसायनशास्त्र, जीवशास्त्र व आरोग्यशास्त्र)",
            nameEn: "General Science (Physics, Chemistry, Botany, Zoology & Human Health)",
            name: "सामान्य विज्ञान (General Science)",
            officialScope: "Physics (Light, Sound, Electricity, Motion), Chemistry (Matter, Atomic Structure, Periodic Table, Acids-Bases), Biology (Classification, Human Physiology, Nutrition, Diseases)",
            version: "1.0",
            verifiedDate: "2026-10-28",
            notesJsonBaseDir: "/data/notes/group_c/prelims/science/",
            theme: { primaryColor: "#0284c7", bgColor: "#f0f9ff", iconClass: "ri-flask-line" },
            metrics: { totalChapters: 18, totalEstimatedHours: 50, avgQuestionsInPrelims: 15, targetMarks: 15, weightageRange: "15-17 Questions" },
            subjectTags: ["Core-GS", "Group-C-Prelims", "Combined-Common", "Conceptual", "High-Weightage"],
            filterCategory: "GS",
            searchKeywords: ["mpsc group c science", "physics chemistry biology diseases classification", "सामान्य विज्ञान"],
            referenceSources: [
                { name: "सामान्य विज्ञान - डॉ. सचिन भस्के", role: "स्पर्धा परीक्षा मानक संदर्भ" }
            ],
            chapters: [
                {
                    id: "gc_pre_science",
                    code: "SCI",
                    slug: "general-science-physics-chemistry-biology-health-prelims",
                    nameMr: "सामान्य विज्ञान (भौतिकशास्त्र, रसायनशास्त्र, जीवशास्त्र व आरोग्यशास्त्र)",
                    nameEn: "General Science (Physics, Chemistry, Botany, Zoology & Human Health)",
                    name: "सामान्य विज्ञान (General Science)",
                    officialScope: "General Science for MPSC Group C Combined Prelims: Physics (Motion, Force, Gravitation, Work, Energy, Sound, Light, Electricity, Magnetism, Heat), Chemistry (Matter, Atomic Structure, Periodic Table, Chemical Bonding, Acids-Bases, Metals-Nonmetals, Carbon Compounds), Botany (Plant Kingdom, Plant Physiology, Photosynthesis), Zoology (Animal Kingdom, Cytology, Human Anatomy: Digestive, Circulatory, Respiratory, Excretory, Nervous, Endocrine Systems), and Hygiene (Nutrition, Vitamins, Deficiency Diseases, Bacterial, Viral & Vector-Borne Diseases)",
                    version: "1.0",
                    verifiedDate: "2026-10-28",
                    notesJsonBaseDir: "/data/notes/group_c/prelims/science/",


                    theme: {
                        primaryColor: "#0284c7",        // Electric Science Blue / Empirical Lab Theme
                        bgColor: "#f0f9ff",
                        iconClass: "ri-flask-line"
                    },


                    metrics: {
                        totalChapters: 18,
                        totalEstimatedHours: 50,
                        avgQuestionsInPrelims: 15,
                        targetMarks: 15,
                        weightageRange: "15-16 Questions"
                    },


                    subjectTags: [
                        "Core-GS",
                        "Group-C-Prelims",
                        "Pre-Cum-Mains",
                        "Conceptual-Intensive",
                        "High-Weightage",
                        "Science-Foundation",
                        "Standard-Bhaske-NCERT"
                    ],


                    filterCategory: "GS",
                    searchKeywords: [
                        "mpsc group c general science prelims", "physics sound light electricity newton laws",
                        "chemistry periodic table modern moseley acids bases metals non metals",
                        "botany cryptogams phanerogams photosynthesis xylem phloem",
                        "zoology animal classification cytology human anatomy circulation digestion",
                        "vitamins deficiency diseases bacterial viral diseases hygiene",
                        "सामान्य विज्ञान पूर्व परीक्षा", "भौतिकशास्त्र गतीचे नियम ध्वनी प्रकाश विद्युत", "रसायनशास्त्र आवर्तसारणी आम्ल आम्लारी", "वनस्पती व प्राणी वर्गीकरण पेशी", "मानवी शरीर संस्था पचन रक्तभिसरण", "जीवनसत्त्वे व रोग आरोग्यशास्त्र"
                    ],


                    referenceSources: [
                        {
                            name: "सामान्य विज्ञान - डॉ. सचिन भस्के",
                            role: "स्पर्धा परीक्षांसाठी भौतिक, रसायन व जीवशास्त्राचा सर्वसमावेशक प्रमाण संदर्भ"
                        },
                        {
                            name: "सामान्य विज्ञान - चंद्रकांत गोरे / दीपस्तंभ",
                            role: "आकृत्या, वर्गीकरण तक्ते व परीक्षाभिमुख मायक्रो विश्लेषण"
                        },
                        {
                            name: "NCERT Science Class 8 to 11 (Physics, Chemistry, Biology)",
                            role: "राष्ट्रीय वैज्ञानिक संकल्पना व पायाभूत सिद्धांत"
                        },
                        {
                            name: "महाराष्ट्र राज्य पाठ्यपुस्तक मंडळ (इयत्ता ५ वी ते १० वी बालभारती)",
                            role: "राज्य अभ्यासक्रमावर आधारित मूलभूत सामान्य विज्ञान"
                        }
                    ],


                    chapters: [
                        // =========================================================================
                        // विभाग A — भौतिकशास्त्र (Physics)
                        // =========================================================================
                        {
                            id: "gc_sci_c01",
                            code: "CS01",
                            section: "A",
                            slug: "physical-quantities-units-motion-force-and-newtons-laws",
                            nameMr: "भौतिक राशी, एकके (SI/CGS), गती, बल आणि न्यूटनचे गतीविषयक नियम",
                            nameEn: "Physical Quantities, SI/CGS Units, Kinematics, Dynamics & Newton's Laws",
                            name: "राशी, एकके, गती व न्यूटनचे नियम",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_sci_c01",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: null,
                            nextChapterId: "gc_sci_c02",
                            metaDescriptionMr: "मूलभूत व साधीत राशी, SI व CGS एकके, सदिश vs अदिश राशी, चाल, वेग, त्वरण, न्यूटनचे गतीविषयक तीन नियम, संवेग अक्षय्यतेचा सिद्धांत, आणि घर्षण बल.",
                            metaDescriptionEn: "Fundamental and Derived units, SI/CGS metrics, Scalar vs Vector quantities, Speed, Velocity, Acceleration, Newton's 3 Laws of Motion, Law of Conservation of Momentum, and Friction mechanics.",
                            notesJsonPath: "/data/notes/group_c/prelims/science/c01_units_motion_newton.json",
                            quizTag: "gc_sci_motion_01",
                            tags: ["Physics", "SI CGS Units", "Scalar Vector", "Newtons 3 Laws", "Momentum Conservation", "Friction", "High-Weightage"],
                            searchKeywords: ["physical quantities fundamental derived units si cgs system", "scalar vs vector quantities speed velocity acceleration", "newtons three laws of motion inertia force f equals ma action reaction", "law of conservation of momentum recoil of gun rocket propulsion", "friction types static kinetic rolling friction", "भौतिक राशी एकके SI CGS पद्धत", "सदिश व अदिश राशी", "न्यूटनचे गतीविषयक तीन नियम जडत्व", "संवेग अक्षय्यता सिद्धांत रॉकेट", "घर्षण बल"],
                            topics: [
                                {
                                    id: "top_gc_s01_01",
                                    nameMr: "भौतिक राशी, एकके, गतीचे प्रकार आणि न्यूटनचे तीन नियम",
                                    nameEn: "Physical Measurements, Motion Variables & Newton's Mechanics",
                                    subtopics: [
                                        {
                                            id: "st_gc_s01_01_01",
                                            titleMr: "भौतिक राशी व एकके (Units & Dimensions): १) मूलभूत राशी (७ मूलभूत राशी: लांबी-मीटर m, वस्तुमान-किलोग्रॅम kg, वेळ-सेकंद s, तापमान-केल्विन K, विद्युतधारा-अँपिअर A, प्रकाशाची तीव्रता-कॅन्डेला cd, द्रव्याचे प्रमाण-मोल mol); २) साधीत राशी (Derived: वेग m/s, त्वरण m/s², बल Newton, दाब Pascal); ३) अदिश राशी (केवळ परिमाण: वस्तुमान, अंतर, चाल, तापमान, कार्य) vs सदिश राशी (परिमाण व दिशा दोन्ही: विस्थापन, वेग, त्वरण, बल, संवेग)",
                                            titleEn: "Physical Quantities & Dimensions: 7 Fundamental SI Units (Length-m, Mass-kg, Time-s, Temperature-K, Electric Current-A, Luminous Intensity-cd, Amount of Substance-mol); Derived Units (Force-Newton, Pressure-Pascal); Scalar (Magnitude only: Speed, Work, Mass) vs Vector (Magnitude + Direction: Displacement, Velocity, Acceleration, Force, Momentum)",
                                            chips: ["७ मूलभूत राशी (SI Units)", "साधीत राशी (बल, दाब, कार्य)", "अदिश राशी (Scalar)", "सदिश राशी (Vector विस्थापन, वेग)"]
                                        },
                                        {
                                            id: "st_gc_s01_01_02",
                                            titleMr: "गती, वेग, त्वरण आणि आलेख: १) अंतर (प्रत्यक्ष पार केलेले अंतर - अदिश) vs विस्थापन (आरंभीचे व अंतिम बिंदूतील सर्वात कमी सरळ अंतर - सदिश); २) चाल (अंतर/वेळ) vs वेग (विस्थापन/वेळ); ३) त्वरण (Acceleration: वेगातील बदलाचा दर $a = \frac{v - u}{t}$, SI एकक $m/s^2$); मंदन (Deceleration - ऋण त्वरण); ४) गतीविषयक ३ समीकरणे: $v = u + at$, $s = ut + \frac{1}{2}at^2$, $v^2 = u^2 + 2as$",
                                            titleEn: "Kinematics Equations: Distance vs Displacement; Speed vs Velocity; Acceleration ($a = (v-u)/t$, SI unit $m/s^2$); Deceleration/Retardation; Kinematic equations of rectilinear motion: $v = u + at$, $s = ut + \frac{1}{2}at^2$, $v^2 = u^2 + 2as$",
                                            chips: ["अंतर vs विस्थापन", "चाल vs वेग", "त्वरण $a = (v-u)/t$ ($m/s^2$)", "गतीची ३ समीकरणे"]
                                        },
                                        {
                                            id: "st_gc_s01_01_03",
                                            titleMr: "न्यूटनचे गतीविषयक तीन नियम व संवेग: १) पहिला नियम (जडत्वाचा नियम - Law of Inertia): बाह्य असंतुलित बल कार्य करत नसेल तोपर्यंत वस्तू स्थिर किंवा सरळ रेषेत एकसमान गतीत राहते; (बलाची व्याख्या मिळते); २) दुसरा नियम ($F = ma$): संवेग परिवर्तनाचा दर प्रयुक्त बलाशी समानुपाती असतो (संवेग $P = mv$ वस्तुमान × वेग; बलाचे परिमाण मिळते); ३) तिसरा नियम: प्रत्येक क्रिया बलास समान परिमाणाचे व विरुद्ध दिशेचे प्रतिक्रिया बल असते (उदा. रॉकेट प्रक्षेपण, बंदुकीची गोळी सुटल्यावर बंदूक मागे सरकणे); संवेग अक्षय्यतेचा सिद्धांत ($m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2$)",
                                            titleEn: "Newton's 3 Laws & Momentum: 1st Law (Law of Inertia: defines force); 2nd Law (Rate of change of momentum is proportional to applied force, yields $F = ma$, SI unit Newton, CGS Dyne; $1\text{ N} = 10^5\text{ Dynes}$); 3rd Law (Every action has an equal and opposite reaction; rocket propulsion, gun recoil); Law of Conservation of Momentum",
                                            chips: ["न्यूटनचा पहिला नियम (जडत्व)", "दुसरा नियम $F = ma$ (बलाचे परिमाण)", "तिसरा नियम (क्रिया-प्रतिक्रिया)", "रॉकेट प्रक्षेपण", "$1\text{ N} = 10^5\text{ Dyne}$"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सामान्य विज्ञान", standard: "डॉ. सचिन भस्के", chapterRef: "भौतिकशास्त्र: गती, बल व न्यूटनचे नियम" },
                                        { book: "NCERT Class 9 Science", standard: "NCERT", chapterRef: "Chapter 8 & 9: Motion & Force and Laws of Motion" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gc_sci_c02",
                            code: "CS02",
                            section: "A",
                            slug: "work-energy-power-gravitation-and-circular-motion",
                            nameMr: "कार्य, ऊर्जा, शक्ती, गुरुत्वाकर्षण आणि वर्तुळाकार गती",
                            nameEn: "Work, Energy, Power, Universal Gravitation & Circular Motion",
                            name: "कार्य, ऊर्जा, शक्ती व गुरुत्वाकर्षण",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_sci_c02",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_sci_c01",
                            nextChapterId: "gc_sci_c03",
                            metaDescriptionMr: "कार्य (धन, ऋण, शून्य कार्य), गतिज ऊर्जा ($\frac{1}{2}mv^2$), स्थितिज ऊर्जा ($mgh$), शक्ती (वॅट, अश्वशक्ती $1\text{ HP} = 746\text{ W}$), न्यूटनचा गुरुत्वाकर्षण नियम ($G$), 'g' चे मूल्य बदल, मुक्ती वेग, आणि अभिकेंद्री बल.",
                            metaDescriptionEn: "Work (Positive, Negative, Zero), Kinetic Energy, Potential Energy, Power (Watt, Horsepower $1\text{ HP} = 746\text{ W}$), Universal Law of Gravitation, Variation of 'g' with altitude/depth, Escape Velocity, and Centripetal Force.",
                            notesJsonPath: "/data/notes/group_c/prelims/science/c02_work_energy_gravitation.json",
                            quizTag: "gc_sci_gravitation_01",
                            tags: ["Work Energy Power", "Kinetic Energy", "Potential Energy", "Horsepower 746W", "Gravitational Constant G", "Acceleration due to Gravity g", "Escape Velocity", "High-Weightage"],
                            searchKeywords: ["work formula w equals fs cos theta positive negative zero work", "kinetic energy half mv square potential energy mgh", "power work per unit time watt horsepower 1 hp 746 watts", "newtons universal law of gravitation g value 6.67 into 10 minus 11", "acceleration due to gravity g 9.8 m per sec square poles equator center", "escape velocity earth 11.2 km per second centripetal centrifugal", "कार्य धन ऋण शून्य कार्य", "गतिज ऊर्जा स्थितिज ऊर्जा", "शक्ती वॅट १ अश्वशक्ती ७४६ वॅट", "गुरुत्वाकर्षण G स्थिरांक", "गुरुत्वीय त्वरण g चे बदल ध्रुव विषुववृत्त", "मुक्ती वेग ११.२ किमी/सेकंद", "अभिकेंद्री बल"],
                            topics: [
                                {
                                    id: "top_gc_s02_01",
                                    nameMr: "कार्य-ऊर्जा-शक्ती संकल्पना, गुरुत्वीय नियम, 'g' चे बदल आणि मुक्ती वेग",
                                    nameEn: "Work-Energy Theorem, Power, Gravitational Dynamics & Escape Velocity",
                                    subtopics: [
                                        {
                                            id: "st_gc_s02_01_01",
                                            titleMr: "कार्य, ऊर्जा व शक्ती (Work, Energy & Power): १) कार्य ($W = F \cdot s \cdot \cos\theta$): SI एकक ज्यूल (Joule), CGS अर्ग (Erg), $1\text{ J} = 10^7\text{ Ergs}$; धन कार्य (बलाच्या दिशेने विस्थापन $\theta=0^\circ$), ऋण कार्य (विरोधी दिशेने $\theta=180^\circ$ उदा. घर्षण), शून्य कार्य ($\theta=90^\circ$ उदा. डोक्यावर ओझे घेऊन चालणे); २) ऊर्जा: कार्य करण्याची क्षमता; गतिज ऊर्जा ($KE = \frac{1}{2}mv^2$), स्थितिज ऊर्जा ($PE = mgh$); ऊर्जा अक्षय्यतेचा नियम; ३) शक्ती ($P = \frac{W}{t}$): कार्य करण्याचा दर, SI एकक वॅट (Watt), १ अश्वशक्ती ($1\text{ Horsepower} = 746\text{ Watts}$); व्यावसायिक विद्युत एकक: $1\text{ kWh} (Unit) = 3.6 \times 10^6\text{ Joules}$",
                                            titleEn: "Work, Energy & Power Formulation: Work ($W = F \cdot s \cdot \cos\theta$; SI Joule, CGS Erg, $1\text{ J} = 10^7\text{ Ergs}$; Positive, Negative, Zero work); Kinetic Energy ($KE = \frac{1}{2}mv^2$); Gravitational Potential Energy ($PE = mgh$); Power ($P = W/t$, SI Watt; $1\text{ HP} = 746\text{ W}$; Commercial unit $1\text{ kWh} = 3.6 \times 10^6\text{ J}$)",
                                            chips: ["कार्य $W = F \cdot s$ (धन, ऋण, शून्य)", "$1\text{ Joule} = 10^7\text{ Ergs}$", "गतिज ऊर्जा $\\frac{1}{2}mv^2$", "स्थितिज ऊर्जा $mgh$", "१ HP = ७४६ Watts", "$1\text{ kWh} = 3.6 \\times 10^6\text{ J}$"]
                                        },
                                        {
                                            id: "st_gc_s02_01_02",
                                            titleMr: "गुरुत्वाकर्षण व गुरुत्वीय त्वरण ('g' चे बदल): १) न्यूटनचा वैश्विक गुरुत्वाकर्षण नियम ($F = \frac{G \cdot m_1 \cdot m_2}{r^2}$); वैश्विक गुरुत्वीय स्थिरांक $G = 6.673 \times 10^{-11}\text{ N}\cdot\text{m}^2/\text{kg}^2$ (कॅव्हेंडिशने मोजला); २) गुरुत्वीय त्वरण ($g = \frac{GM}{R^2}$): पृथ्वीच्या पृष्ठभागावर सरासरी मूल्य $9.8\text{ m/s}^2$; 'g' च्या मूल्यातील बदल: अ) ध्रुवांवर (Poles) पृथ्वी चपटी असल्याने त्रिज्या कमी, म्हणून 'g' चे मूल्य सर्वाधिक ($9.83\text{ m/s}^2$), ब) विषुववृत्तावर (Equator) त्रिज्या जास्त असल्याने 'g' चे मूल्य सर्वात कमी ($9.78\text{ m/s}^2$), क) पृथ्वीच्या केंद्रावर $g = 0$, ड) उंचावर जाताना व पृथ्वीच्या आत खोल जाताना 'g' चे मूल्य कमी होते; वस्तुमान (Mass - स्थिर) vs वजन (Weight $W = mg$ - ठिकाणानुसार बदलते)",
                                            titleEn: "Universal Gravitation & 'g' Variations: Newton's Law ($F = G \cdot m_1 \cdot m_2 / r^2$; $G = 6.67 \times 10^{-11}\text{ N}\cdot\text{m}^2/\text{kg}^2$); Acceleration due to gravity ($g = GM/R^2$, average $9.8\text{ m/s}^2$); Spatial variations: Maximum at Poles ($9.83\text{ m/s}^2$), Minimum at Equator ($9.78\text{ m/s}^2$), Zero at Earth Center; Decreases with altitude and depth; Mass (constant) vs Weight ($W = mg$ variable)",
                                            chips: ["गुरुत्वाकर्षण नियम $G = 6.67 \\times 10^{-11}$", "सरासरी $g = 9.8\text{ m/s}^2$", "ध्रुवांवर 'g' सर्वाधिक", "विषुववृत्तावर 'g' सर्वात कमी", "केंद्रावर $g = 0$", "वस्तुमान vs वजन"]
                                        },
                                        {
                                            id: "st_gc_s02_01_03",
                                            titleMr: "मुक्ती वेग आणि वर्तुळाकार गती: १) मुक्ती वेग (Escape Velocity $v_e = \sqrt{2gR}$): ज्या किमान वेगाने फेकलेली वस्तू पृथ्वीच्या गुरुत्वीय क्षेत्राच्या बाहेर निघून जाते व परत येत नाही; पृथ्वीवरील मुक्ती वेग = $11.2\text{ km/s}$ (चंद्रावर केवळ $2.4\text{ km/s}$ असल्याने तेथे वातावरण टिकत नाही); २) वर्तुळाकार गती: अभिकेंद्री बल (Centripetal Force: केंद्राच्या दिशेने लागणारे बल, उदा. ग्रहांचे सूर्याभोवती परिभ्रमण) vs अपकेंद्री बल (Centrifugal Force: आभासी बल, केंद्राच्या विरुद्ध दिशेने, उदा. वॉशिंग मशिनचे ड्रायर, दुधातून लोणी वेगळे करण्याचे सेंट्रिफ्युज)",
                                            titleEn: "Escape Velocity & Circular Dynamics: Escape Velocity ($v_e = \sqrt{2gR}$, Earth $v_e = 11.2\text{ km/s}$, Moon $2.4\text{ km/s}$ explaining absence of lunar atmosphere); Centripetal Force (center-seeking force governing orbital mechanics) vs Centrifugal Force (apparent outward inertia, cream separators, washing machine centrifuges)",
                                            chips: ["मुक्ती वेग ११.२ किमी/सेकंद", "चंद्रावर मुक्ती वेग २.४ किमी/से", "अभिकेंद्री बल (Centripetal)", "अपकेंद्री बल (Centrifugal वॉशिंग मशिन)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सामान्य विज्ञान", standard: "डॉ. सचिन भस्के", chapterRef: "भौतिकशास्त्र: कार्य, ऊर्जा व गुरुत्वाकर्षण" },
                                        { book: "NCERT Class 9 & 11 Physics", standard: "NCERT", chapterRef: "Gravitation & Work, Energy and Power" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gc_sci_c03",
                            code: "CS03",
                            section: "A",
                            slug: "sound-waves-propagation-echo-doppler-effect-and-sonar",
                            nameMr: "ध्वनी (Sound): निर्मिती, प्रसारण, प्रतिध्वनी, डॉपलर प्रभाव व सोनार (SONAR)",
                            nameEn: "Acoustics: Wave Propagation, Echo Dynamics, Doppler Effect & SONAR",
                            name: "ध्वनीशास्त्र (Sound, Echo & Waves)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_sci_c03",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_sci_c02",
                            nextChapterId: "gc_sci_c04",
                            metaDescriptionMr: "ध्वनी लहरी (अनुतरंग लहरी Longitudinal), ध्वनीचा विविध माध्यमांतील वेग (स्थायू > द्रव > वायू, निर्वातात शून्य), श्राव्य ध्वनी (२० Hz ते २०,००० Hz), प्रतिध्वनी निकष (१७.२ मी), निनाद, डॉपलर प्रभाव, आणि सोनार (SONAR).",
                            metaDescriptionEn: "Acoustic physics: Longitudinal mechanical waves, Speed across media (Solids > Liquids > Gases, zero in vacuum), Audible spectrum (20 Hz to 20,000 Hz), Infrasonic vs Ultrasonic, Echo threshold (17.2m), Reverberation, Doppler Effect, and SONAR.",
                            notesJsonPath: "/data/notes/group_c/prelims/science/c03_sound_acoustics.json",
                            quizTag: "gc_sci_sound_01",
                            tags: ["Sound Physics", "Longitudinal Waves", "Speed in Media Solid Liquid Gas", "Audible 20 to 20000 Hz", "Ultrasonic Infrasonic", "Echo 17.2m", "Doppler Effect", "SONAR", "High-Weightage"],
                            searchKeywords: ["sound waves mechanical longitudinal compression rarefaction", "speed of sound solids liquids gases dry air 343 m per sec vacuum", "frequency audibility range 20 hz to 20000 hz infrasonic ultrasonic bats", "echo calculation minimum distance 17.2 meters time 0.1 second", "reverberation acoustic design auditoriums", "doppler effect pitch change moving source observer", "sonar sound navigation and ranging ultrasound ocean depth", "ध्वनी लहरी अनुतरंग", "ध्वनीचा वेग स्थायू द्रव वायू निर्वात", "श्राव्य ध्वनी २० ते २०००० हर्ट्झ", "श्राव्यातीत अल्ट्रासोनिक वटवाघूळ", "प्रतिध्वनी किमान अंतर १७.२ मीटर", "निनाद", "डॉपलर प्रभाव", "सोनार SONAR समुद्र खोली"],
                            topics: [
                                {
                                    id: "top_gc_s03_01",
                                    nameMr: "ध्वनी लहरींचे भौतिकशास्त्र, वारंवारता पल्ला, प्रतिध्वनी आणि सोनार तंत्रज्ञान",
                                    nameEn: "Acoustic Wave Mechanics, Spectral Bandwidth, Echo Thresholds & SONAR Applications",
                                    subtopics: [
                                        {
                                            id: "st_gc_s03_01_01",
                                            titleMr: "ध्वनीचे प्रसारण व वेग: ध्वनी ही यांत्रिक अनुतरंग लहरी (Longitudinal Mechanical Wave) आहे; प्रसारणासाठी माध्यमाची (स्थायू, द्रव, वायू) आवश्यकता असते; निर्वात पोकळीतून (Vacuum) ध्वनी प्रवास करू शकत नाही; ध्वनीचा वेग: स्थायू > द्रव > वायू (घनतेपेक्षा स्थितीस्थापकतेवर जास्त अवलंबून); हवेत कोरड्या हवेतील वेग ०°C ला ३३२ m/s व २२°C ला सुमारे ३४४ m/s; स्टीलमध्ये सुमारे ५,९६० m/s; तापमान वाढल्यास हवेत ध्वनीचा वेग वाढतो (दर १°C ला ०.६ m/s ने वाढ)",
                                            titleEn: "Propagation & Speed across Media: Sound travels as longitudinal mechanical waves (compressions and rarefactions); Requires material medium; Cannot travel through vacuum; Velocity profile: Solids > Liquids > Gases; Speed in dry air is ~332 m/s at 0°C and ~344 m/s at 22°C (Steel ~5960 m/s); Increases by 0.6 m/s for every 1°C temperature rise",
                                            chips: ["अनुतरंग लहरी (Longitudinal Waves)", "निर्वातात ध्वनी प्रवास करत नाही", "वेग: स्थायू > द्रव > वायू", "हवेत वेग ३४४ m/s", "तापमान वाढल्यास वेग वाढतो"]
                                        },
                                        {
                                            id: "st_gc_s03_01_02",
                                            titleMr: "वारंवारता पल्ला व प्रकार (Frequency Spectrum): वारंवारतेचे एकक हर्ट्झ (Hz); १) श्राव्य ध्वनी (Audible Sound): २० Hz ते २०,००० Hz (मानवी कान ऐकू शकतात); २) अवश्राव्य ध्वनी (Infrasonic Sound): २० Hz पेक्षा कमी वारंवारता (भूकंप लहरी, हत्ती, व्हेल मासे, गेंडे); ३) श्राव्यातीत ध्वनी (Ultrasonic Sound): २०,००० Hz पेक्षा जास्त वारंवारता (मानवाला ऐकू येत नाही; वटवाघळे, डॉल्फिन, कुत्रे); श्राव्यातीत ध्वनीचा वापर: सोनोग्राफी (USG), दुधातील जंतू मारणे, दातांचे उपचार",
                                            titleEn: "Frequency Typology: Measured in Hertz (Hz); 1) Audible Sound (20 Hz to 20,000 Hz human limit); 2) Infrasonic Sound (<20 Hz: Earthquakes, Elephants, Whales); 3) Ultrasonic Sound (>20,000 Hz: Bats, Dolphins, Dogs); Applications of Ultrasound: Medical Sonography (USG), echolocation, industrial flaw detection, milk homogenization",
                                            chips: ["श्राव्य ध्वनी (२० ते २०,००० Hz)", "अवश्राव्य ध्वनी (<२० Hz भूकंप)", "श्राव्यातीत ध्वनी (>२०,००० Hz)", "सोनोग्राफी USG वापर", "वटवाघूळ प्रतिध्वनी"]
                                        },
                                        {
                                            id: "st_gc_s03_01_03",
                                            titleMr: "प्रतिध्वनी, डॉपलर प्रभाव व सोनार: १) प्रतिध्वनी (Echo): मूळ ध्वनी अडथळ्यावर आदळून पुन्हा ऐकू येणे; मानवी मेंदूवर ध्वनीची संवेदना ०.१ सेकंद (0.1 sec) टिकते; स्पष्ट प्रतिध्वनी ऐकण्यासाठी श्रोता व परावर्तक पृष्ठभाग यात किमान अंतर = १७.२ मीटर (17.2 m) असावे लागते; २) निनाद (Reverberation): सभागृहात वारंवार परावर्तनामुळे ध्वनी लांबणे; ३) डॉपलर प्रभाव (Doppler Effect): ध्वनीचा स्त्रोत व श्रोता यांच्यातील सापेक्ष गतीमुळे भासणारी वारंवारतेतील वाढ/घट; ४) सोनार (SONAR - Sound Navigation and Ranging): समुद्राची खोली व बुडालेल्या जहाजांचा शोध घेण्यासाठी श्राव्यातीत लहरींचा वापर",
                                            titleEn: "Echo, Doppler Effect & SONAR: Echo requires persistence of hearing window >0.1s; Minimum obstacle distance in air at 22°C = 17.2 meters; Reverberation (persistent multiple reflections in halls); Doppler Effect (perceived pitch frequency shift due to relative motion between source and observer); SONAR (Sound Navigation and Ranging using ultrasonic pulses to gauge ocean depth and submarine detection)",
                                            chips: ["प्रतिध्वनी किमान अंतर १७.२ मीटर (०.१ सेकंद)", "निनाद (Reverberation)", "डॉपलर प्रभाव (Doppler Effect)", "सोनार SONAR (समुद्र खोली)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सामान्य विज्ञान", standard: "डॉ. सचिन भस्के", chapterRef: "भौतिकशास्त्र: ध्वनीशास्त्र व लहरी" },
                                        { book: "NCERT Class 9 Science", standard: "NCERT", chapterRef: "Chapter 12: Sound" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gc_sci_c04",
                            code: "CS04",
                            section: "A",
                            slug: "light-optics-reflection-refraction-lenses-and-human-eye",
                            nameMr: "प्रकाश (Light): परावर्तन, अपवर्तन, भिंगे, मानवी डोळा व दृष्टीदोष",
                            nameEn: "Optics: Reflection, Refraction, Lenses, Dispersion & Human Eye Defects",
                            name: "प्रकाशशास्त्र व दृष्टीदोष (Optics & Human Eye)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_sci_c04",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_sci_c03",
                            nextChapterId: "gc_sci_c05",
                            metaDescriptionMr: "प्रकाशाचा वेग ($3 \times 10^8\text{ m/s}$), परावर्तन, सपाट/अंतर्गोल/बहिर्गोल आरसे, अपवर्तन, स्नेलचा नियम, पूर्ण अंतर्गत परावर्तन (हिऱ्याचे चकाकणे, ऑप्टिकल फायबर), भिंगाची शक्ती (Dioptre), मानवी डोळा, आणि दृष्टीदोष (मायोपिया, हायपरमेट्रोपिया).",
                            metaDescriptionEn: "Speed of light, Reflection laws, Concave/Convex mirrors, Refraction, Snell's law, Total Internal Reflection (TIR, Diamond sparkle, Optical Fiber), Lens formula, Power of lens (Dioptre), Human Eye anatomy, and Defects (Myopia, Hypermetropia, Presbyopia).",
                            notesJsonPath: "/data/notes/group_c/prelims/science/c04_light_optics_eye.json",
                            quizTag: "gc_sci_optics_01",
                            tags: ["Optics Light", "Speed of Light 3x10^8", "Total Internal Reflection TIR", "Optical Fiber", "Lenses Dioptre", "Myopia Concave", "Hypermetropia Convex", "High-Weightage"],
                            searchKeywords: ["speed of light vacuum 3 into 10 power 8 m per sec electromagnetic transverse", "laws of reflection concave convex mirrors shaving mirror vehicle rear view", "refraction snells law refractive index", "total internal reflection tir critical angle diamond optical fibre mirage", "lens formula power of lens dioptre p equals 1 by f in meters", "human eye defects myopia concave lens hypermetropia convex lens presbyopia", "प्रकाशाचा वेग ३ लाख किमी/सेकंद", "अंतर्गोल आरसा दाढीचा बहिर्गोल गाडीचा", "प्रकाशाचे अपवर्तन स्नेलचा नियम", "पूर्ण अंतर्गत परावर्तन ऑप्टिकल फायबर हिरा", "भिंगाची शक्ती डायॉप्टर", "निकटदृष्टिता अंतर्गोल भिंग", "दूरदृष्टिता बहिर्गोल भिंग", "मोतीबिंदू"],
                            topics: [
                                {
                                    id: "top_gc_s04_01",
                                    nameMr: "प्रकाशाचे परावर्तन, अपवर्तन, पूर्ण अंतर्गत परावर्तन आणि डोळ्याचे दृष्टीदोष",
                                    nameEn: "Geometrical Optics, Total Internal Reflection, Refractive Index & Visual Defects",
                                    subtopics: [
                                        {
                                            id: "st_gc_s04_01_01",
                                            titleMr: "प्रकाशाचे स्वरूप व परावर्तन: प्रकाश ही विद्युतचुंबकीय अनुप्रस्थ तरंग (Transverse EM Wave) आहे; निर्वातात वेग सर्वाधिक $c = 3 \times 10^8\text{ m/s}$ (३ लाख किमी/सेकंद); १) परावर्तन: आपतन कोन ($i$) = परावर्तन कोन ($r$); २) सपाट आरसा: आभासी, सुलटी व समान आकाराची प्रतिमा; ३) अंतर्गोल आरसा (Concave Mirror - अभिसारी Converging): दाढी करण्याचे आरसे, दंतवैद्यक, वाहनांचे हेडलाईट्स, सौर भट्टी; ४) बहिर्गोल आरसा (Convex Mirror - अपसारी Diverging): वाहनांचा मागचे पाहण्याचा आरसा (Side Mirror - विस्तृत दृश्य क्षेत्र, नेहमी लहान व सुलटी प्रतिमा)",
                                            titleEn: "Nature of Light & Mirror Reflection: Light travels as transverse electromagnetic wave; Speed in vacuum $c = 3 \times 10^8\text{ m/s}$; Laws of reflection: $\angle i = \angle r$; Plane mirror creates virtual, erect, laterally inverted image of identical size; Concave Mirror (converging: shaving, headlights, dentists); Convex Mirror (diverging: vehicle rear-view mirrors providing wide field of view with diminished images)",
                                            chips: ["प्रकाशाचा वेग $3 \\times 10^8\text{ m/s}$", "अंतर्गोल आरसा (दंतवैद्यक, हेडलाईट)", "बहिर्गोल आरसा (वाहनांचा रिअर-व्ह्यू आरसा)", "सपाट आरसा प्रतिमा"]
                                        },
                                        {
                                            id: "st_gc_s04_01_02",
                                            titleMr: "अपवर्तन व पूर्ण अंतर्गत परावर्तन (TIR): १) अपवर्तन (Refraction): प्रकाश एका माध्यमातून दुसऱ्या माध्यमात जाताना दिशा बदलतो; स्नेलचा नियम ($\frac{\sin i}{\sin r} = \mu$ अपवर्तनांक); विरळ ते दाट माध्यम (स्तंभिकेकडे झुकतो), दाट ते विरळ माध्यम (स्तंभिकेपासून दूर जातो); पाण्यातील नाणे वर उचलल्यासारखे दिसणे, तारे लुकलुकणे (वातावरणीय अपवर्तन); २) पूर्ण अंतर्गत परावर्तन (TIR): दाट माध्यमातून विरळ माध्यमात जाताना आपतन कोन क्रांतिक कोनापेक्षा (Critical Angle) मोठा असल्यास प्रकाश त्याच माध्यमात १००% परावर्तित होतो; उदा. हिऱ्याचे चकाकणे, मृगजळ (Mirage), ऑप्टिकल फायबर (Optical Fiber - एंडोस्कोपी, इंटरनेट डेटा ट्रान्सफर)",
                                            titleEn: "Refraction & Total Internal Reflection (TIR): Refraction bends rays between optical densities per Snell's Law ($\frac{\sin i}{\sin r} = \mu$); Atmospheric refraction causes twinkling of stars and apparent shallowing of water pools; Total Internal Reflection (TIR occurs when light passes from denser to rarer medium at $\angle i > \text{Critical Angle}$); Real-world applications: Diamond brilliance, desert mirages, Endoscopy, and Optical Fiber telecommunication",
                                            chips: ["अपवर्तन (तारे लुकलुकणे)", "स्नेलचा नियम $\\frac{\\sin i}{\\sin r} = \\mu$", "पूर्ण अंतर्गत परावर्तन (TIR)", "ऑप्टिकल फायबर (Optical Fiber)", "हिऱ्याचे चकाकणे व मृगजळ"]
                                        },
                                        {
                                            id: "st_gc_s04_01_03",
                                            titleMr: "भिंगे, भिंगाची शक्ती व डोळ्यांचे दृष्टीदोष: १) भिंगाचे सूत्र ($\frac{1}{v} - \frac{1}{u} = \frac{1}{f}$); भिंगाची शक्ती ($P = \frac{1}{f\text{ (मीटरमध्ये)}}$), एकक डायॉप्टर (Dioptre - D); २) मानवी डोळा: स्पष्ट दृष्टीचे किमान अंतर = २५ सेमी; ३) दृष्टीदोष व उपाय (MPSC हमखास प्रश्न): अ) निकटदृष्टिता (Myopia - जवळचे स्पष्ट दिसते, दूरचे दिसत नाही, नेत्रगोल लांबट झाल्याने प्रतिमा दृष्टिपटलाच्या अलीकडे पडते; उपाय: 'अंतर्गोल भिंग' Concave Lens), ब) दूरदृष्टिता (Hypermetropia - दूरचे स्पष्ट दिसते, जवळचे नाही, प्रतिमा दृष्टिपटलाच्या मागे पडते; उपाय: 'बहिर्गोल भिंग' Convex Lens), क) वृद्धदृष्टिता (Presbyopia - द्विकेंद्री भिंग Bifocal), ड) मोतीबिंदू (Cataract - भिंग अपारदर्शक होणे)",
                                            titleEn: "Lenses & Corrective Ophthalmology: Lens formula ($\frac{1}{v} - \frac{1}{u} = \frac{1}{f}$); Power of Lens ($P = 1/f\text{ in meters}$, unit Dioptre D); Least distance of distinct vision = 25 cm; Visual Defects: a) Myopia (Near-sightedness: image forms in front of retina, corrected by Concave Lens), b) Hypermetropia (Far-sightedness: image forms behind retina, corrected by Convex Lens), c) Presbyopia (aging ciliary muscles, corrected by Bifocal lenses), d) Cataract",
                                            chips: ["भिंगाची शक्ती डायॉप्टर ($P = 1/f$)", "स्पष्ट दृष्टी किमान अंतर २५ सेमी", "निकटदृष्टिता Myopia (अंतर्गोल भिंग)", "दूरदृष्टिता Hypermetropia (बहिर्गोल भिंग)", "वृद्धदृष्टिता (द्विकेंद्री भिंग)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सामान्य विज्ञान", standard: "डॉ. सचिन भस्के", chapterRef: "भौतिकशास्त्र: प्रकाश व दृष्टीदोष" },
                                        { book: "NCERT Class 10 Science", standard: "NCERT", chapterRef: "Chapter 10 & 11: Light - Reflection and Refraction & Human Eye" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gc_sci_c05",
                            code: "CS05",
                            section: "A",
                            slug: "current-electricity-ohms-law-resistors-and-electromagnetism",
                            nameMr: "विद्युतधारा, विभवांतर, ओहमचा नियम, रोध जोडणी आणि चुंबकत्व",
                            nameEn: "Current Electricity: Ohm's Law, Circuit Resistances, Heating & Magnetism",
                            name: "विद्युतधारा, ओहमचा नियम व चुंबकत्व",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_sci_c05",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_sci_c04",
                            nextChapterId: "gc_sci_c06",
                            metaDescriptionMr: "विद्युतधारा (अँपिअर), विभवांतर (व्होल्ट), ओहमचा नियम ($V=IR$), रोध (ओहम), रोधांची एकसर व समांतर जोडणी, ज्यूलचा औष्णिक परिणाम ($H=I^2Rt$, फ्युज वायर), आणि फ्लेमिंगचे नियम.",
                            metaDescriptionEn: "Electric current (Ampere), Potential difference (Volt), Ohm's Law ($V=IR$), Resistance factors, Resistors in Series vs Parallel, Joule's heating law ($H=I^2Rt$, fuse wire characteristics), and Fleming's Left/Right Hand Rules.",
                            notesJsonPath: "/data/notes/group_c/prelims/science/c05_electricity_magnetism.json",
                            quizTag: "gc_sci_electricity_01",
                            tags: ["Electricity", "Ohms Law V equals IR", "Resistors Series Parallel", "Joules Heating Law", "Fuse Wire Lead Tin", "Flemings Left Hand Rule", "High-Weightage"],
                            searchKeywords: ["electric current ampere charge per unit time coloumb", "potential difference volt work done per unit charge", "ohms law v equals ir resistance resistivity factors", "resistors in series rs equals r1 plus r2 parallel 1 by rp", "joules law of heating h equals i square r t nichrome element", "electric fuse wire alloy lead and tin low melting point high resistance", "flemings left hand rule motor right hand rule generator faraday induction", "विद्युतधारा अँपिअर विभवांतर व्होल्ट", "ओहमचा नियम V = IR", "रोधांची एकसर जोडणी समांतर जोडणी", "ज्यूलचा उष्णतेचा नियम फ्युज वायर", "नायक्रोम वायर शेगडी", "फ्लेमिंगचा डाव्या हाताचा नियम मोटर", "विद्युत जनरेटर फॅराडे"],
                            topics: [
                                {
                                    id: "top_gc_s05_01",
                                    nameMr: "विद्युतधारा, ओहमचा नियम, रोध परिपथ आणि विद्युत चुंबकत्व साधने",
                                    nameEn: "Electric Circuitry, Ohm's Formulations, Heating Physics & Electromagnetism",
                                    subtopics: [
                                        {
                                            id: "st_gc_s05_01_01",
                                            titleMr: "विद्युतधारा, विभवांतर व ओहमचा नियम: १) विद्युत प्रभार ($Q$): एकक कूलॉम (Coulomb); १ इलेक्ट्रॉनवरील प्रभार = $-1.6 \times 10^{-19}\text{ C}$; २) विद्युतधारा ($I = \frac{Q}{t}$): प्रभार वाहण्याचा दर, SI एकक अँपिअर (Ampere - A); ॲमीटर एकसर जोडणीत जोडतात; ३) विभवांतर ($V = \frac{W}{Q}$): SI एकक व्होल्ट (Volt - V); व्होल्टमीटर समांतर जोडणीत जोडतात; ४) ओहमचा नियम (Ohm's Law): भौतिक अवस्था कायम असताना वाहकामधून वाहणारी विद्युतधारा विभवांतराशी समानुपाती असते ($V \propto I \implies V = IR$); रोधाचे (Resistance) एकक ओहम ($\Omega$); रोधकता ($\rho$) पदार्थाच्या गुणधर्मावर अवलंबून असते",
                                            titleEn: "Current, Potential & Ohm's Law: Electric Charge ($Q$ in Coulombs; $1e = -1.6 \times 10^{-19}\text{ C}$); Electric Current ($I = Q/t$, SI Ampere, measured via Ammeter in series); Potential Difference ($V = W/Q$, SI Volt, measured via Voltmeter in parallel); Ohm's Law states $V = IR$ at constant temperature; Resistance unit Ohm ($\Omega$); Resistivity ($\rho$) dependent on material",
                                            chips: ["विद्युतधारा $I = Q/t$ (अँपिअर)", "विभवांतर $V = W/Q$ (व्होल्ट)", "ओहमचा नियम $V = IR$", "ॲमीटर एकसर व्होल्टमीटर समांतर"]
                                        },
                                        {
                                            id: "st_gc_s05_01_02",
                                            titleMr: "रोधांची जोडणी व ज्यूलचा औष्णिक नियम: १) एकसर जोडणी (Series): $R_s = R_1 + R_2 + R_3$ (एकूण रोध वाढतो, विद्युतधारा समान राहते); २) समांतर जोडणी (Parallel): $\frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3}$ (एकूण रोध कमी होतो, घरातील वीज जोडणी समांतर असते); ३) ज्यूलचा औष्णिक परिणाम ($H = I^2Rt$ ज्यूल): इस्त्री, गीझर, हिटरमध्ये 'नायक्रोम' (Nichrome - निकेल+क्रोमियम) ची उच्च रोधक तार वापरतात; बल्बमध्ये 'टंगस्टन' (Tungsten - उच्च वितळण बिंदू ३,४२२°C) तार वापरतात; ४) फ्युज वायर (Fuse Wire): शिसे (Lead) व कथिल (Tin) यांचे संमिश्र; 'कमी वितळण बिंदू व उच्च रोध' असतो",
                                            titleEn: "Circuits & Joule Heating: Resistors in Series ($R_s = R_1 + R_2 + R_3$, current constant, resistance increases); Resistors in Parallel ($\frac{1}{R_p} = \frac{1}{R_1} + \frac{1}{R_2}$, domestic wiring); Joule's Heating Law ($H = I^2Rt$); High resistance heating elements use Nichrome; Light bulb filaments use Tungsten (Melting point 3422°C); Electric Fuse Wire made of Lead-Tin alloy featuring 'Low Melting Point and High Resistance'",
                                            chips: ["रोधांची एकसर जोडणी $R_s$", "समांतर जोडणी $\\frac{1}{R_p}$ (घरातील वायरिंग)", "ज्यूलचा नियम $H = I^2Rt$", "नायक्रोम कॉइल व टंगस्टन फिलामेंट", "फ्युज वायर (कमी वितळण बिंदू शिसे+कथिल)"]
                                        },
                                        {
                                            id: "st_gc_s05_01_03",
                                            titleMr: "विद्युत चुंबकत्व व साधने: १) हॅन्स ओर्स्टेड: विद्युतधारेमुळे चुंबकीय क्षेत्र निर्माण होते; २) फ्लेमिंगचा डाव्या हाताचा नियम (Fleming's Left Hand Rule): 'विद्युत मोटर' (Electric Motor - विद्युत ऊर्जेचे यांत्रिक ऊर्जेत रूपांतर) या तत्त्वावर कार्य करते; ३) फॅराडेचे विद्युतचुंबकीय प्रवर्तन (Faraday's Induction) व फ्लेमिंगचा उजव्या हाताचा नियम: 'विद्युत जनरेटर' (Electric Generator / Dynamo - यांत्रिक ऊर्जेचे विद्युत ऊर्जेत रूपांतर); प्रत्यावर्ती धारा (AC: दिशा बदलते, भारतात ५० Hz) vs दिष्ट धारा (DC: एकाच दिशेने, बॅटरी)",
                                            titleEn: "Electromagnetism & Dynamos: Oersted effect; Fleming's Left-Hand Rule governs Electric Motor (converts electrical to mechanical energy); Faraday's Laws of Induction and Fleming's Right-Hand Rule govern Electric Generator/Dynamo (converts mechanical to electrical energy); Alternating Current (AC: 50 Hz in India) vs Direct Current (DC from batteries)",
                                            chips: ["विद्युत मोटर (डाव्या हाताचा नियम)", "विद्युत जनरेटर (उजव्या हाताचा नियम फॅराडे)", "AC करंट (भारतात ५० Hz)", "DC करंट"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सामान्य विज्ञान", standard: "डॉ. सचिन भस्के", chapterRef: "भौतिकशास्त्र: विद्युतधारा व चुंबकत्व" },
                                        { book: "NCERT Class 10 Science", standard: "NCERT", chapterRef: "Chapter 12 & 13: Electricity & Magnetic Effects of Electric Current" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gc_sci_c06",
                            code: "CS06",
                            section: "A",
                            slug: "heat-temperature-scales-thermal-expansion-and-anomalous-water",
                            nameMr: "उष्णता (Heat): तापमान, संक्रमण पद्धती, अप्रकट उष्मा व पाण्याचे असंगत आचरण",
                            nameEn: "Thermal Physics: Calorimetry, Heat Transfer Modes, Latent Heat & Anomalous Water Expansion",
                            name: "उष्णता व पाण्याचे असंगत आचरण",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 2,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_sci_c06",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_sci_c05",
                            nextChapterId: "gc_sci_c07",
                            metaDescriptionMr: "उष्णता vs तापमान, मापन पट्ट्या (Celsius, Fahrenheit, Kelvin संबंध सूत्र), उष्णता संक्रमणाच्या ३ पद्धती (वहन, अभिसरण, प्रारण), अप्रकट उष्मा (Latent Heat), आणि पाण्याचे असंगत आचरण (०°C ते ४°C, होपचे उपकरण).",
                            metaDescriptionEn: "Heat vs Temperature, Thermometric scales conversion, 3 Heat transfer modes (Conduction, Convection, Radiation), Latent Heat of fusion/vaporization, and Anomalous expansion of water between 0°C and 4°C (Hope's Apparatus).",
                            notesJsonPath: "/data/notes/group_c/prelims/science/c06_heat_thermal_physics.json",
                            quizTag: "gc_sci_heat_01",
                            tags: ["Thermal Physics", "Temperature Scales Conversion", "Conduction Convection Radiation", "Latent Heat", "Anomalous Expansion of Water 4C", "Hopes Apparatus"],
                            searchKeywords: ["heat energy vs temperature formula c by 5 equals f minus 32 by 9", "absolute zero temperature minus 273.15 celsius 0 kelvin", "modes of heat transfer conduction solids convection liquids radiation vacuum sun", "anomalous expansion of water 0 to 4 degrees celsius maximum density at 4 c", "hopes apparatus aquatic life survival frozen lakes", "latent heat of fusion ice 80 cal per gram vaporization water 540", "उष्णता संक्रमण वहन अभिसरण प्रारण", "तापमान सूत्र सेल्सिअस फॅरनहाइट केल्विन", "पाण्याचे असंगत आचरण ० ते ४ अंश सेल्सिअस", "४°C ला पाण्याची कमाल घनता", "होपचे उपकरण जलचर प्राणी संरक्षण", "अप्रकट उष्मा बाष्पीभवन वितळण"],
                            topics: [
                                {
                                    id: "top_gc_s06_01",
                                    nameMr: "तापमान रूपांतरण सूत्रे, उष्णता वहन आणि पाण्याचे असंगत आचरण",
                                    nameEn: "Thermometry Scales, Modes of Heat Transmission & Water Anomaly",
                                    subtopics: [
                                        {
                                            id: "st_gc_s06_01_01",
                                            titleMr: "उष्णता, तापमान व मापन पट्ट्या: १) उष्णता (ऊर्जेचे रूप - SI ज्यूल, CGS कॅलरी, $1\text{ cal} = 4.184\text{ J}$); २) तापमान: उष्णतेची पातळी मोजणे; ३) तिन्ही पट्ट्यांमधील परस्पर संबंध सूत्र: $\frac{C}{5} = \frac{F - 32}{9} = \frac{K - 273.15}{5}$; $-40^\circ$ तापमानाला सेल्सिअस व फॅरनहाइट दोन्ही पट्ट्या समान मूल्य दाखवतात ($-40^\circ\text{C} = -40^\circ\text{F}$); ४) निरपेक्ष शून्य तापमान (Absolute Zero): $0\text{ K} = -273.15^\circ\text{C}$ (या तापमानाला रेणूंची गती पूर्णपणे थांबते)",
                                            titleEn: "Heat, Temperature & Thermometric Interconversions: Heat (Energy form - SI Joule, CGS Calorie, $1\text{ cal} = 4.184\text{ J}$); Temperature conversion formula: $\frac{C}{5} = \frac{F - 32}{9} = \frac{K - 273.15}{5}$; Celsius and Fahrenheit scales intersect at $-40^\circ$ ($-40^\circ\text{C} = -40^\circ\text{F}$); Absolute Zero ($0\text{ K} = -273.15^\circ\text{C}$ molecular motion ceases)",
                                            chips: ["उष्णता $1\text{ cal} = 4.184\text{ J}$", "रूपांतरण $\\frac{C}{5} = \\frac{F-32}{9}$", "$-40^\\circ$ ला C व F समान", "निरपेक्ष शून्य तापमान $-273.15^\\circ\\text{C}$ ($0\\text{ K}$)"]
                                        },
                                        {
                                            id: "st_gc_s06_01_02",
                                            titleMr: "उष्णता संक्रमणाच्या ३ पद्धती: १) वहन (Conduction): माध्यमातील कणांचे प्रत्यक्ष स्थानांतर न होता केवळ कंपनांद्वारे उष्णता पुढे जाणे; केवळ स्थायू पदार्थांत घडते; २) अभिसरण (Convection): द्रवातील व वायूतील कण उष्णता घेऊन स्वतः प्रत्यक्ष स्थलांतरित होतात; उदा. पाण्याचे उकळणे, खारे व मतलई वारे; ३) प्रारण (Radiation): उष्णतेच्या संक्रमणासाठी कोणत्याही भौतिक माध्यमाची गरज नसते; विद्युतचुंबकीय लहरींद्वारे प्रवास; उदा. सूर्याची उष्णता पृथ्वीपर्यंत पोहोचणे",
                                            titleEn: "3 Heat Transfer Modes: 1) Conduction (Molecules vibrate in fixed lattice without bodily movement, occurs in solids); 2) Convection (Actual bodily migration of heated fluids/gases, e.g., boiling water, sea/land breezes); 3) Radiation (Electromagnetic waves, requires zero material medium, e.g., solar radiant heat traveling through vacuum to Earth)",
                                            chips: ["वहन Conduction (केवळ स्थायूंत)", "अभिसरण Convection (द्रव व वायूत वारे)", "प्रारण Radiation (माध्यमाची गरज नाही सूर्यप्रकाश)"]
                                        },
                                        {
                                            id: "st_gc_s06_01_03",
                                            titleMr: "पाण्याचे असंगत आचरण (Anomalous Expansion of Water): सामान्यतः पदार्थ तापविल्यावर प्रसरण पावतात, परंतु पाणी $0^\circ\text{C}$ पासून $4^\circ\text{C}$ पर्यंत तापविल्यास प्रसरण पावण्याऐवजी 'आकुंचन' पावते; $4^\circ\text{C}$ ला पाण्याचे आकारमान सर्वात कमी आणि पाण्याची 'घनता सर्वाधिक' ($1000\text{ kg/m}^3$) असते; $4^\circ\text{C}$ च्या पुढे तापवल्यास पाणी प्रसरण पावते; 'होपचे उपकरण' (Hope's Apparatus) द्वारे अभ्यास; पर्यावरणीय महत्त्व: अतिथंड प्रदेशात तलावाचा पृष्ठभाग गोठून बर्फ ($0^\circ\text{C}$) झाला तरी तळाशी पाणी $4^\circ\text{C}$ ला द्रव स्थितीत राहिल्याने जलचर वनस्पती व मासे जिवंत राहतात",
                                            titleEn: "Anomalous Expansion of Water: Water contracts instead of expanding when heated from $0^\circ\text{C}$ to $4^\circ\text{C}$; At $4^\circ\text{C}$, water exhibits minimum volume and MAXIMUM density ($1000\text{ kg/m}^3$); Beyond $4^\circ\text{C}$, it expands normally; Demonstrated via Hope's Apparatus; Ecological impact: Aquatic life survives severe winters because bottom layer remains liquid water at $4^\circ\text{C}$ beneath floating surface ice sheets",
                                            chips: ["पाण्याचे असंगत आचरण ($0^\\circ\\text{C}$ ते $4^\\circ\\text{C}$)", "$4^\\circ\\text{C}$ ला पाण्याची कमाल घनता", "होपचे उपकरण (Hope's Apparatus)", "जलचर जीवांचे रक्षण"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सामान्य विज्ञान", standard: "डॉ. सचिन भस्के", chapterRef: "भौतिकशास्त्र: उष्णता व तापमान" },
                                        { book: "NCERT Class 11 Physics", standard: "NCERT", chapterRef: "Thermal Properties of Matter" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग B — रसायनशास्त्र (Chemistry)
                        // =========================================================================
                        {
                            id: "gc_sci_c07",
                            code: "CS07",
                            section: "B",
                            slug: "matter-atomic-structure-isotopes-and-radioactivity",
                            nameMr: "द्रव्याचे संघटन, अणूची रचना, समस्थानिके (Isotopes) आणि किरणोत्सार",
                            nameEn: "Matter, Subatomic Particles, Atomic Models, Isotopes & Radioactivity",
                            name: "अणू संरचना, समस्थानिके व किरणोत्सार",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_sci_c07",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_sci_c06",
                            nextChapterId: "gc_sci_c08",
                            metaDescriptionMr: "अणूचे अंतरंग (डाल्टन, थॉमसन प्लम पुडिंग, रुदरफोर्ड अल्फा विकिरण, बोहर मॉडेल), प्रोटॉन, न्यूट्रॉन (चॅडविक), इलेक्ट्रॉन (थॉमसन), समस्थानिके (Isotopes), समभारिके (Isobars), आणि किरणोत्सार (Radioactivity - $\alpha, \beta, \gamma$ लहरी व वैद्यकीय वापर).",
                            metaDescriptionEn: "Subatomic structure (Dalton, Thomson, Rutherford alpha scattering, Bohr orbit model), Proton, Neutron discovery (Chadwick), Electron (Thomson), Isotopes vs Isobars, and Radioactivity ($\alpha, \beta, \gamma$ emission, Carbon-14 dating, Cobalt-60 cancer therapy).",
                            notesJsonPath: "/data/notes/group_c/prelims/science/c07_atomic_structure_radioactivity.json",
                            quizTag: "gc_sci_atom_01",
                            tags: ["Chemistry", "Atomic Structure", "Proton Neutron Electron", "Rutherford Gold Foil", "Isotopes Isobars", "Radioactivity Alpha Beta Gamma", "High-Weightage"],
                            searchKeywords: ["atomic structure dalton thomson plum pudding rutherford gold foil experiment", "subatomic particles electron jj thomson proton goldstein neutron james chadwick", "atomic number z atomic mass number a electronic configuration", "isotopes same atomic number different mass hydrogen protium deuterium tritium", "isobars same mass number different atomic number", "radioactivity discovery henri becquerel curie alpha beta gamma", "radioisotopes medical applications cobalt 60 iodine 131 carbon 14 dating", "अणू संरचना रुदरफोर्ड सुवर्णपत्री प्रयोग", "इलेक्ट्रॉन थॉमसन प्रोटॉन न्यूट्रॉन चॅडविक", "समस्थानिके हायड्रोजन ड्युटेरियम", "किरणोत्सारिता हेन्री बेक्वेरेल", "कोबाल्ट-६० कर्करोग उपचार", "कार्बन-१४ वय निर्धारण"],
                            topics: [
                                {
                                    id: "top_gc_s07_01",
                                    nameMr: "अणूची रचना, मूलकण, समस्थानिके आणि किरणोत्साराचे उपयोजन",
                                    nameEn: "Atomic Theory, Subatomic Particles, Isotopic Chemistry & Radioactivity",
                                    subtopics: [
                                        {
                                            id: "st_gc_s07_01_01",
                                            titleMr: "अणूचे सिद्धांत व मूलकण (Subatomic Particles): १) जे. जे. थॉमसन (१८९७): इलेक्ट्रॉनचा शोध (ऋण प्रभारित $-1.6 \times 10^{-19}\text{ C}$, वस्तुमान $9.1 \times 10^{-31}\text{ kg}$), प्लम पुडिंग मॉडेल; २) अर्नेस्ट रुदरफोर्ड (१९११): सोन्याच्या पातळ पत्र्यावर अल्फा कणांचा मारा करून धन प्रभारित 'अणुकेंद्रकाचा' (Nucleus) शोध लावला; प्रोटॉनचा शोध; ३) जेम्स चॅडविक (१९३२): प्रभाररहित 'न्यूट्रॉन'चा शोध लावला; ४) नील्स बोहर (१९१३): इलेक्ट्रॉन विशिष्ट वर्तुळाकार कक्षांमध्ये (K, L, M, N कवचे) फिरतात ($2n^2$ सूत्र); अणुअंक ($Z$ = प्रोटॉन संख्या) व अणुवस्तुमानांक ($A$ = प्रोटॉन + न्यूट्रॉन संख्या)",
                                            titleEn: "Atomic Discovery Timeline: J.J. Thomson (1897: discovered electron, Plum Pudding model); Ernest Rutherford (1911: gold foil experiment discovered central positively charged nucleus); James Chadwick (1932: discovered neutral neutron); Niels Bohr (1913: quantized orbits K, L, M, N with $2n^2$ electron capacity); Atomic Number ($Z = p$) vs Mass Number ($A = p + n$)",
                                            chips: ["इलेक्ट्रॉन (जे जे थॉमसन)", "अणुकेंद्रक व प्रोटॉन (रुदरफोर्ड सुवर्णपत्री)", "न्यूट्रॉन (जेम्स चॅडविक १९३२)", "बोहर मॉडेल $2n^2$", "अणुअंक Z vs अणुवस्तुमानांक A"]
                                        },
                                        {
                                            id: "st_gc_s07_01_02",
                                            titleMr: "समस्थानिके (Isotopes) व समभारिके (Isobars): १) समस्थानिके: ज्या मूलद्रव्यांचा 'अणुअंक समान' असतो, परंतु 'अणुवस्तुमानांक भिन्न' असतो (प्रोटॉन समान, न्यूट्रॉन भिन्न); उदा. हायड्रोजनची ३ समस्थानिके: प्रोटियम ($^1_1\text{H}$), ड्युटेरियम ($^2_1\text{H}$ - जड पाण्यासाठी वापर), ट्रिटियम ($^3_1\text{H}$ - किरणोत्सारी); कार्बन ($^{12}_6\text{C}, ^{14}_6\text{C}$); २) समभारिके (Isobars): अणुवस्तुमानांक समान, पण अणुअंक भिन्न (उदा. ऑर्गन $^{40}_{18}\text{Ar}$ व कॅल्शियम $^{40}_{20}\text{Ca}$)",
                                            titleEn: "Isotopes & Isobars: Isotopes (Identical atomic number $Z$, varying mass number $A$; e.g., Hydrogen isotopes: Protium, Deuterium for heavy water $D_2O$, Tritium; Carbon-12 and Carbon-14); Isobars (Identical mass number $A$, varying atomic number $Z$; e.g., Argon-40 and Calcium-40)",
                                            chips: ["समस्थानिके (समान अणुअंक, भिन्न वस्तुमानांक)", "हायड्रोजन (प्रोटियम, ड्युटेरियम, ट्रिटियम)", "समभारिके Isobars (समान वस्तुमानांक)"]
                                        },
                                        {
                                            id: "st_gc_s07_01_03",
                                            titleMr: "किरणोत्सारिता (Radioactivity) व वैद्यकीय वापर: हेन्री बेक्वेरेल यांनी १८९६ मध्ये शोध लावला; मॅडम मेरी क्युरी व पियरे क्युरी यांनी रेडियमचा शोध लावला; किरणोत्सारी कणांचे ३ प्रकार: अल्फा ($\alpha$ - धन प्रभारित हेलियम केंद्रक), बीटा ($\beta$ - वेगवान इलेक्ट्रॉन ऋण प्रभारित), गॅमा ($\gamma$ - प्रभाररहित विद्युतचुंबकीय प्रारण, भेदन क्षमता सर्वाधिक); समस्थानिकांचे वैद्यकीय वापर: १) कार्बन-१४ (C-14): जीवाश्मांचे वय निश्चित करणे (Carbon Dating); २) कोबाल्ट-६० (Co-60): कर्करोगावरील (कॅन्सर) रेडिएशन उपचार; ३) आयोडीन-१३१ (I-131): गलगंड (Goitre / थायरॉईड) आजाराचे निदान; ४) सोडियम-२४ (Na-24): रक्ताभिसरणातील अडथळे शोधणे; ५) फॉस्फरस-३२ (P-32): रक्ताचा कर्करोग (ल्युकेमिया)",
                                            titleEn: "Radioactivity & Radioisotopes: Discovered by Henri Becquerel (1896); Marie & Pierre Curie discovered Radium; 3 Radiations: Alpha ($\alpha$ helium nuclei), Beta ($\beta$ electrons), Gamma ($\gamma$ neutral EM waves, highest penetrating power); Medical Radioisotopes: Carbon-14 (Fossil dating), Cobalt-60 (Cancer radiotherapy), Iodine-131 (Thyroid/Goitre), Sodium-24 (Blood clot tracking), Phosphorus-32 (Leukemia)",
                                            chips: ["किरणोत्सार (हेन्री बेक्वेरेल, मेरी क्युरी)", "गॅमा लहरी (कमाल भेदन क्षमता)", "कोबाल्ट-६० (कर्करोग उपचार)", "आयोडीन-१३१ (थायरॉईड गलगंड)", "कार्बन-१४ (जीवाश्म वय)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सामान्य विज्ञान", standard: "डॉ. सचिन भस्के", chapterRef: "रसायनशास्त्र: अणू रचना व किरणोत्सारिता" },
                                        { book: "NCERT Class 9 & 11 Chemistry", standard: "NCERT", chapterRef: "Structure of the Atom" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gc_sci_c08",
                            code: "CS08",
                            section: "B",
                            slug: "periodic-classification-of-elements-mendeleev-and-modern-table",
                            nameMr: "मूलद्रव्यांचे आवर्ती वर्गीकरण: मेंडेलीव्ह व आधुनिक आवर्तसारणी (Modern Periodic Table)",
                            nameEn: "Periodic Classification of Elements: Dobereiner, Newlands, Mendeleev & Moseley",
                            name: "मूलद्रव्यांचे वर्गीकरण व आधुनिक आवर्तसारणी",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_sci_c08",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_sci_c07",
                            nextChapterId: "gc_sci_c09",
                            metaDescriptionMr: "डोबेरायनरची त्रिके (Triads), न्यूलँड्सचे अष्टक (Octaves), मेंडेलीव्हची आवर्तसारणी (अणुवस्तुमानावर आधारित), हेनरी मोसलेची आधुनिक आवर्तसारणी (१९१३ - अणुअंकावर आधारित, ७ आवर्तने, १८ गण, s, p, d, f खंड), आणि आवर्ती कल.",
                            metaDescriptionEn: "Dobereiner's Triads, Newlands' Octaves, Mendeleev's Periodic Table, Henry Moseley's Modern Periodic Table (1913 based on Atomic Number Z, 7 Periods, 18 Groups, s/p/d/f blocks), and Periodic Trends (Atomic radius, Valency, Electronegativity).",
                            notesJsonPath: "/data/notes/group_c/prelims/science/c08_periodic_table_moseley.json",
                            quizTag: "gc_sci_periodic_01",
                            tags: ["Chemistry", "Periodic Table", "Dobereiner Triads", "Newlands Octaves", "Mendeleev Atomic Mass", "Modern Periodic Table Moseley 1913", "Atomic Number Z", "High-Weightage"],
                            searchKeywords: ["periodic classification of elements dobereiner triads lithium sodium potassium", "newlands law of octaves sa re ga ma musical notes", "mendeleev periodic table 63 elements atomic mass eka boron eka aluminium", "modern periodic table henry moseley 1913 atomic number 7 periods 18 groups", "s p d f blocks periodic trends atomic size electronegativity", "मूलद्रव्यांचे वर्गीकरण डोबेरायनरची त्रिके", "न्यूलँड्सचे अष्टक", "मेंडेलीव्हची आवर्तसारणी अणुवस्तुमान", "आधुनिक आवर्तसारणी हेनरी मोसले १९१३ अणुअंक", "७ आवर्तने १८ गण", "s p d f खंड आवर्ती कल"],
                            topics: [
                                {
                                    id: "top_gc_s08_01",
                                    nameMr: "आवर्तसारणीची उत्क्रांती, आधुनिक आवर्तसारणीची रचना आणि आवर्ती कल",
                                    nameEn: "Evolution of Periodic Classification, Modern Periodic Architecture & Trends",
                                    subtopics: [
                                        {
                                            id: "st_gc_s08_01_01",
                                            titleMr: "वर्गीकरणाचा इतिहास: १) डोबेरायनरची त्रिके (१८१७ - Triads): समान गुणधर्म असलेल्या ३ मूलद्रव्यांच्या मांडणीत मधल्या मूलद्रव्याचा अणुवस्तुमानांक इतर दोघांच्या सरासरीइतका असतो (उदा. Li, Na, K); २) न्यूलँड्सचे अष्टक (१८६६ - Octaves): मूलद्रव्यांची अणुवस्तुमानानुसार मांडणी केल्यास प्रत्येक आठव्या मूलद्रव्याचे गुणधर्म पहिल्यासारखे असतात (संगीतातील सप्तकाप्रमाणे - मर्यादा केवळ कॅल्शियमपर्यंत); ३) मेंडेलीव्हची आवर्तसारणी (१८६९): 'मूलद्रव्यांचे गुणधर्म हे त्यांच्या अणुवस्तुमानांचे आवर्तीफल असतात'; ६३ मूलद्रव्ये; रिकाम्या जागा सोडल्या (एका-ॲल्युमिनियमचे नाव पुढे 'गॅलियम' झाले, एका-सिलिकॉनचे नाव 'जर्मेनियम' झाले)",
                                            titleEn: "Early Periodic Classifications: Dobereiner's Triads (1817: atomic mass of middle element equals arithmetic mean of other two; e.g., Li-Na-K); Newlands' Law of Octaves (1866: every 8th element mirrors 1st per musical notes, broke down post-Calcium); Mendeleev's Periodic Table (1869: periodic functions of atomic masses, classified 63 elements, left gaps predicting Eka-Aluminium as Gallium and Eka-Silicon as Germanium)",
                                            chips: ["डोबेरायनरची त्रिके (Li, Na, K)", "न्यूलँड्सचे अष्टक (सा रे ग म)", "मेंडेलीव्ह आवर्तसारणी (अणुवस्तुमान)", "एका-ॲल्युमिनियम -> गॅलियम", "६३ मूलद्रव्ये"]
                                        },
                                        {
                                            id: "st_gc_s08_01_02",
                                            titleMr: "आधुनिक आवर्तसारणी (Modern Periodic Table - १९१३): इंग्रज वैज्ञानिक हेनरी मोसले यांनी मांडली; आधुनिक आवर्ती नियम: 'मूलद्रव्यांचे भौतिक व रासायनिक गुणधर्म हे त्यांच्या अणुअंकाचे (Atomic Number $Z$) आवर्तीफल असतात'; रचना: एकूण ७ आडव्या ओळी म्हणजे 'आवर्तने' (Periods) आणि १८ उभे स्तंभ म्हणजे 'गण' (Groups); ४ खंड: १) s-खंड (गण १ व २ - अल्क व अल्कधर्मी धातू), २) p-खंड (गण १३ ते १८ - धातू, अधातू व गण १८ मधील निष्क्रिय वायू Noble Gases), ३) d-खंड (गण ३ ते १२ - संक्रमक मूलद्रव्ये), ४) f-खंड (तळाशी लॅन्थॅनाईड व ॲक्टिनाईड मालिका)",
                                            titleEn: "Modern Periodic Table (Henry Moseley 1913): Periodic Law establishes that properties of elements are periodic functions of their Atomic Numbers ($Z$); Architecture comprises 7 horizontal Periods and 18 vertical Groups; 4 Blocks: s-block (Groups 1-2 Alkali/Alkaline Earth metals), p-block (Groups 13-18 with Group 18 Noble Gases), d-block (Groups 3-12 Transition elements), and f-block (Inner Transition Lanthanides & Actinides at the bottom)",
                                            chips: ["हेनरी मोसले १९१३ (अणुअंक Z वर आधारित)", "७ आवर्तने व १८ गण", "s, p, d, f खंड", "गण १८ (निष्क्रिय वायू Noble Gases)"]
                                        },
                                        {
                                            id: "st_gc_s08_01_03",
                                            titleMr: "आवर्ती कल (Periodic Trends - MPSC हमखास प्रश्न): १) अणुत्रिज्या / अणूचा आकार (Atomic Radius): आवर्तनात डावीकडून उजवीकडे जाताना अणूचा आकार 'कमी होतो' (प्रोटॉन वाढल्याने आकर्षण वाढते); गणात वरून खाली येताना नवीन कवच जोडल्यामुळे अणूचा आकार 'वाढतो'; २) धातू गुणधर्म: डावीकडून उजवीकडे कमी होतो, वरून खाली वाढतो; ३) विद्युतऋणता (Electronegativity): डावीकडून उजवीकडे वाढते (फ्लोरिन Fluorine सर्वाधिक विद्युतऋण), वरून खाली कमी होते",
                                            titleEn: "Periodic Trends: 1) Atomic Radius decreases across a period from left to right (increasing effective nuclear charge) and increases down a group (addition of outer electron shells); 2) Metallic character decreases across a period and increases down a group; 3) Electronegativity increases across a period (Fluorine is most electronegative element) and decreases down a group",
                                            chips: ["अणू आकार: डावीकडून उजवीकडे कमी होतो", "अणू आकार: वरून खाली वाढतो", "फ्लोरिन (सर्वाधिक विद्युतऋण मूलद्रव्य)", "आवर्ती कल (Periodic Trends)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सामान्य विज्ञान", standard: "डॉ. सचिन भस्के", chapterRef: "रसायनशास्त्र: मूलद्रव्यांचे आवर्ती वर्गीकरण" },
                                        { book: "NCERT Class 10 Science", standard: "NCERT", chapterRef: "Chapter 5: Periodic Classification of Elements" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gc_sci_c09",
                            code: "CS09",
                            section: "B",
                            slug: "chemical-bonding-reactions-acids-bases-and-ph-scale",
                            nameMr: "रासायनिक बंध, रासायनिक अभिक्रियांचे प्रकार, आम्ल, आम्लारी आणि pH पट्टी",
                            nameEn: "Chemical Bonding, Reaction Types, Acids, Bases & The pH Scale Dynamics",
                            name: "रासायनिक बंध, आम्ल-आम्लारी व pH",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_sci_c09",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_sci_c08",
                            nextChapterId: "gc_sci_c10",
                            metaDescriptionMr: "रासायनिक बंध (आयनिक, सहसंयुज), अभिक्रियांचे प्रकार (संयोग, अपघटन, विस्थापन, दुहेरी विस्थापन, रेडॉक्स), आम्ल-आम्लारी सिद्धांत (अर्रेनियस), pH पट्टी (० ते १४ - सोरेन्सन), नैसर्गिक आम्ले (सिट्रिक, टार्टारिक, लॅक्टिक), आणि रासायनिक क्षार.",
                            metaDescriptionEn: "Ionic vs Covalent bonds, Chemical reactions (Combination, Decomposition, Displacement, Double Displacement, Redox), Arrhenius acid-base theory, pH scale (0-14 Sorenson), Natural organic acids, and Common salts (Baking soda, Washing soda, Bleaching powder).",
                            notesJsonPath: "/data/notes/group_c/prelims/science/c09_acids_bases_ph_reactions.json",
                            quizTag: "gc_sci_acid_base_01",
                            tags: ["Chemistry", "Ionic vs Covalent Bonds", "Redox Reactions", "Acids Bases Arrhenius", "pH Scale 0 to 14", "Natural Acids", "Common Salts", "High-Weightage"],
                            searchKeywords: ["chemical bonding ionic electrovalent electron transfer covalent sharing", "types of chemical reactions combination decomposition displacement redox", "acids and bases arrhenius theory h plus and oh minus ions", "ph scale sorenson 1909 acid neutral 7 alkaline blood ph 7.4", "natural organic acids acetic vinegar lactic curd citric lemon tartaric tamarind formic ant sting", "important salts baking soda sodium bicarbonate washing soda bleaching powder", "रासायनिक बंध आयनिक सहसंयुज", "अभिक्रियांचे प्रकार विस्थापन रेडॉक्स", "आम्ल व आम्लारी अर्रेनियस सिद्धांत", "pH पट्टी सोरेन्सन रक्ताचा pH ७.४", "नैसर्गिक आम्ले लॅक्टिक सिट्रिक टार्टारिक फॉर्मिक", "बेकिंग सोडा धुण्याचा सोडा ब्लीचिंग पावडर"],
                            topics: [
                                {
                                    id: "top_gc_s09_01",
                                    nameMr: "रासायनिक बंध, अभिक्रिया प्रकार, आम्ल-आम्लारी व्याख्या, pH मूल्य आणि क्षार",
                                    nameEn: "Chemical Bonding Modes, Reaction Dynamics, Acid-Base Equilibria & pH Scale",
                                    subtopics: [
                                        {
                                            id: "st_gc_s09_01_01",
                                            titleMr: "रासायनिक बंध व अभिक्रियांचे प्रकार: १) आयनिक बंध (Ionic Bond): इलेक्ट्रॉनच्या देवाणघेवाणीतून निर्मिती (उदा. $\text{NaCl}, \text{MgCl}_2$ - उच्च वितळण बिंदू, पाण्यात विरघळतात); २) सहसंयुज बंध (Covalent Bond): इलेक्ट्रॉनच्या संविभागातून / शेअरिंगने निर्मिती (उदा. $\text{H}_2\text{O}, \text{CH}_4$); ३) अभिक्रियांचे प्रकार: अ) संयोग (Combination: $A + B \to AB$), ब) अपघटन (Decomposition: $AB \to A + B$), क) विस्थापन (Displacement: जास्त क्रियाशील धातू कमी क्रियाशील धातूला विस्थापित करतो), ड) रेडॉक्स अभिक्रिया (Redox: ऑक्सिडीकरण व क्षपण एकाच वेळी घडणे)",
                                            titleEn: "Bonding & Chemical Reactions: 1) Ionic Bond (Complete electron transfer forming ions; e.g., NaCl; high melting points, aqueous electrical conductivity); 2) Covalent Bond (Mutual electron sharing; e.g., $\text{CH}_4$, $\text{H}_2\text{O}$); 3) Reaction Types: Combination ($A+B \to AB$), Decomposition ($AB \to A+B$), Displacement, Double Displacement, and Redox (Simultaneous Oxidation and Reduction)",
                                            chips: ["आयनिक बंध (इलेक्ट्रॉन देवाणघेवाण NaCl)", "सहसंयुज बंध (इलेक्ट्रॉन शेअरिंग)", "विस्थापन अभिक्रिया", "रेडॉक्स अभिक्रिया (ऑक्सिडीकरण + क्षपण)"]
                                        },
                                        {
                                            id: "st_gc_s09_01_02",
                                            titleMr: "आम्ल, आम्लारी व pH पट्टी (pH Scale): १) अर्रेनियस सिद्धांत: आम्ल (पाण्यात विरघळल्यावर $H^+$ आयन देते, चव आंबट, निळा लिटमस तांबडा करतो), आम्लारी (पाण्यात $OH^-$ आयन देते, चव कडू, तांबडा लिटमस निळा करतो); २) pH पट्टी: १९०९ मध्ये सोरेन्सन यांनी शोधली; हायड्रोजन आयनांची संहती मोजणे; $\text{pH} = 0\text{ ते }7$ (आम्लधर्मी), $\text{pH} = 7$ (उदासीन उदा. शुद्ध पाणी), $\text{pH} = 7\text{ ते }14$ (आम्लारीधर्मी); महत्त्वाचे pH मूल्य: मानवी रक्त ($7.35\text{ ते }7.45$), लाळ ($6.5\text{ ते }7.5$), जठररस ($1.2\text{ ते }2.0$), लिंबाचा रस ($2.2$), समुद्राचे पाणी ($8.5$)",
                                            titleEn: "Acids, Bases & The pH Scale: Arrhenius Definition: Acid yields $H^+$ ions in water (turns blue litmus red); Base yields $OH^-$ ions (turns red litmus blue); Sorenson pH Scale (1909: $\text{pH} = -\log_{10}[H^+]$); $\text{pH} < 7$ acidic, $\text{pH} = 7$ neutral, $\text{pH} > 7$ alkaline; Benchmark pH values: Human Blood (7.35-7.45), Gastric Juice (1.2-2.0), Pure Water (7.0), Seawater (8.5)",
                                            chips: ["आम्ल ($H^+$ आयन निळा लिटमस तांबडा)", "आम्लारी ($OH^-$ आयन तांबडा लिटमस निळा)", "pH पट्टी सोरेन्सन १९०९", "रक्ताचा pH ७.४", "जठररस pH १.५"]
                                        },
                                        {
                                            id: "st_gc_s09_01_03",
                                            titleMr: "नैसर्गिक आम्ले व महत्त्वाचे रासायनिक क्षार: १) नैसर्गिक सेंद्रिय आम्ले: व्हिनेगर (ॲसिटिक ॲसिड), दही/ताक (लॅक्टिक ॲसिड), लिंबू/संत्री (सिट्रिक ॲसिड), चिंच/द्राक्षे (टार्टारिक ॲसिड), टोमॅटो (ऑक्झॅलिक ॲसिड), मुंगीचा डंख/विंचू (फॉर्मिक / मेथॅनॉईक ॲसिड), सफरचंद (मॅलिक ॲसिड); २) महत्त्वाचे क्षार: खाण्याचा सोडा (Sodium Bicarbonate - $\text{NaHCO}_3$), धुण्याचा सोडा (Sodium Carbonate - $\text{Na}_2\text{CO}_3 \cdot 10\text{H}_2\text{O}$), ब्लीचिंग पावडर (Calcium Oxychloride - $\text{CaOCl}_2$), प्लास्टर ऑफ पॅरिस (POP - $\text{CaSO}_4 \cdot \frac{1}{2}\text{H}_2\text{O}$)",
                                            titleEn: "Natural Acids & Everyday Commercial Salts: Natural Organic Acids: Vinegar (Acetic), Curd (Lactic), Lemon (Citric), Tamarind (Tartaric), Tomato (Oxalic), Ant sting (Formic/Methanoic), Apple (Malic); Key Salts: Baking Soda ($\text{NaHCO}_3$), Washing Soda ($\text{Na}_2\text{CO}_3 \cdot 10\text{H}_2\text{O}$), Bleaching Powder ($\text{CaOCl}_2$), Plaster of Paris ($\text{CaSO}_4 \cdot \frac{1}{2}\text{H}_2\text{O}$)",
                                            chips: ["दही (लॅक्टिक ॲसिड)", "मुंगीचा डंख (फॉर्मिक ॲसिड)", "चिंच (टार्टारिक ॲसिड)", "खाण्याचा सोडा $\\text{NaHCO}_3$", "धुण्याचा सोडा $\\text{Na}_2\\text{CO}_3$", "POP प्लास्टर ऑफ पॅरिस"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सामान्य विज्ञान", standard: "डॉ. सचिन भस्के", chapterRef: "रसायनशास्त्र: आम्ल, आम्लारी व रासायनिक बंध" },
                                        { book: "NCERT Class 10 Science", standard: "NCERT", chapterRef: "Chapter 1 & 2: Chemical Reactions & Acids, Bases and Salts" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gc_sci_c10",
                            code: "CS10",
                            section: "B",
                            slug: "metals-nonmetals-metallurgy-corrosion-and-carbon-compounds",
                            nameMr: "धातू, अधातू, धातुकशास्त्र, क्षरण आणि कार्बनची संयुगे (हायड्रोकार्बन्स)",
                            nameEn: "Metals, Non-metals, Metallurgy, Corrosion & Organic Carbon Compounds",
                            name: "धातू-अधातू, क्षरण व कार्बन संयुगे",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_sci_c10",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_sci_c09",
                            nextChapterId: "gc_sci_c11",
                            metaDescriptionMr: "धातू व अधातूंचे गुणधर्म, अपवाद (पारा, ब्रोमीन, हिरा), धातूंची क्रियाशीलता श्रेणी, क्षरण व गंजणे रोखणे (Galvanization), कार्बनची अपरूपे (हिरा, ग्रॅफाइट, फुलेरिन), संपृक्त vs असंपृक्त हायड्रोकार्बन्स, आणि साबण.",
                            metaDescriptionEn: "Physical/chemical properties of metals and non-metals, Elemental exceptions (Mercury, Bromine, Diamond), Metal reactivity series, Corrosion & Galvanization, Carbon allotropes (Diamond, Graphite, Fullerene), Hydrocarbons (Alkanes, Alkenes, Alkynes), and Saponification.",
                            notesJsonPath: "/data/notes/group_c/prelims/science/c10_metals_carbon_chemistry.json",
                            quizTag: "gc_sci_metals_carbon_01",
                            tags: ["Metals Nonmetals", "Reactivity Series Potassium Sodium", "Galvanization Zinc Coating", "Carbon Allotropes Diamond Graphite", "Hydrocarbons Alkanes", "High-Weightage"],
                            searchKeywords: ["metals vs nonmetals exceptions mercury liquid metal bromine liquid nonmetal", "reactivity series potassium sodium most reactive gold least reactive", "corrosion of metals rusting of iron galvanization zinc coating", "allotropes of carbon diamond sp3 tetrahedral graphite sp2 conductor fullerene c60", "hydrocarbons saturated alkanes single bond unsaturated alkenes alkynes", "saponification soap and detergents micelle formation", "धातू अधातू अपवाद पारा ब्रोमीन", "क्रियाशीलता श्रेणी पोटॅशियम सोडियम", "गंजणे रोखणे जस्तलेपन गॅल्व्हनायझेशन", "कार्बनची अपरूपे हिरा ग्रॅफाइट फुलेरिन", "हायड्रोकार्बन्स अल्केन अल्कीन", "साबण व अपमार्जके"],
                            topics: [
                                {
                                    id: "top_gc_s10_01",
                                    nameMr: "धातू-अधातू अपवाद, क्रियाशीलता श्रेणी, क्षरण प्रतिबंध आणि कार्बनची अपरूपे",
                                    nameEn: "Metal-Nonmetal Matrix, Reactivity Order, Corrosion Mitigation & Carbon Allotropes",
                                    subtopics: [
                                        {
                                            id: "st_gc_s10_01_01",
                                            titleMr: "धातू-अधातूंचे गुणधर्म व अपवाद (MPSC चे आवडते प्रश्न): १) धातू: तन्यता, वर्धनीयता, नादमयता, उष्णता व विजेचे सुवाहक; अपवाद: पारा (Mercury - Hg) व गॅलियम (Ga) हे कक्ष तापमानाला 'द्रवरूप धातू'; सोडियम व पोटॅशियम मऊ धातू (चाकूने कापले जाऊ शकतात, हवेत पेट घेतात म्हणून रॉकेलमध्ये ठेवतात); टंगस्टन सर्वाधिक वितळण बिंदू; २) अधातू: ठिसूळ, दुर्वाहक; अपवाद: ब्रोमीन (Bromine - Br) हा एकमेव 'द्रवरूप अधातू'; ग्रॅफाइट हा अधातू असूनही विजेचा उत्कृष्ट सुवाहक; हिरा हा अधातू असूनही जगातील सर्वात कठीण नैसर्गिक पदार्थ",
                                            titleEn: "Properties & High-Yield Exceptions: Metals (Malleable, ductile, sonorous conductors); Exceptions: Mercury (Hg) & Gallium (Ga) are liquid metals at room temperature; Sodium & Potassium are soft metals cut with knife, stored under kerosene; Non-Metals (Brittle non-conductors); Exceptions: Bromine (Br) is sole liquid non-metal; Graphite conducts electricity; Diamond is hardest known natural substance",
                                            chips: ["पारा (द्रवरूप धातू Hg)", "ब्रोमीन (एकमेव द्रवरूप अधातू Br)", "सोडियम-पोटॅशियम रॉकेलमध्ये ठेवतात", "ग्रॅफाइट विजेचा सुवाहक अधातू", "हिरा सर्वात कठीण पदार्थ"]
                                        },
                                        {
                                            id: "st_gc_s10_01_02",
                                            titleMr: "क्रियाशीलता श्रेणी व क्षरण (Corrosion): १) क्रियाशीलता श्रेणी (Reactivity Series): सर्वात क्रियाशील धातू: पोटॅशियम (K) > सोडियम (Na) > कॅल्शियम > मॅग्नेशियम; मध्यम: ॲल्युमिनियम, जस्त (Zn), लोह (Fe); सर्वात कमी क्रियाशील / राजधातू: सोने (Au), चांदी (Ag), प्लॅटिनम; २) क्षरण (Rusting of Iron): लोखंड गंजण्यासाठी 'ऑक्सिजन व ओलावा' दोन्ही आवश्यक असतात; गंज म्हणजे हायड्रेटेड फेरिक ऑक्साईड ($\text{Fe}_2\text{O}_3 \cdot x\text{H}_2\text{O}$); गंज रोखण्याचे उपाय: जस्तलेपन (Galvanization: लोखंडावर जस्ताचा / Zinc थर देणे), कथिललेपन (Tinning / कलई करणे), ॲनोडायझिंग, मिश्रधातू बनवणे (उदा. स्टेनलेस स्टील = Fe + Cr + Ni)",
                                            titleEn: "Reactivity Series & Rust Prevention: Reactivity order: $K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Ag > Au$; Rusting of iron requires both oxygen and moisture, forming hydrated ferric oxide; Prevention methods: Galvanization (coating iron with molten Zinc), Tinning, Anodizing, and Alloying (Stainless Steel = Iron + Chromium + Nickel)",
                                            chips: ["क्रियाशीलता श्रेणी (पोटॅशियम सर्वाधिक)", "राजधातू सोने प्लॅटिनम", "लोखंड गंजणे ($\text{Fe}_2\text{O}_3$)", "जस्तलेपन Galvanization (झिंकचा थर)", "स्टेनलेस स्टील मिश्रधातू"]
                                        },
                                        {
                                            id: "st_gc_s10_01_03",
                                            titleMr: "कार्बनची अपरूपे व हायड्रोकार्बन्स: १) कार्बनची अपरूपे (Allotropes): अ) स्फटिकी: हिरा (Diamond - $sp^3$ संकरित, त्रिमितीय रचना, विजेचा दुर्वाहक), ग्रॅफाइट (Graphite - $sp^2$ संकरित, षटकोनी पदर रचना, विजेचा सुवाहक, वंगण म्हणून वापर), बकमिनिस्टर फुलेरिन ($C_{60}$ सॉकर बॉल रचना); ब) अस्फटिकी: कोळसा, कोक, काजळी; २) हायड्रोकार्बन्स: संपृक्त (Saturated: एकेरी बंध - अल्केन्स $C_nH_{2n+2}$ उदा. मिथेन $\text{CH}_4$, बायोगॅस/CNG मुख्य घटक) vs असंपृक्त (Unsaturated: दुहेरी बंध अल्कीन्स $C_nH_{2n}$, तिहेरी बंध अल्काईन्स $C_nH_{2n-2}$)",
                                            titleEn: "Carbon Allotropes & Hydrocarbons: Crystalline Allotropes: Diamond ($sp^3$ hybridized, tetrahedral, electrical insulator), Graphite ($sp^2$ layered hexagonal sheets, electrical conductor, lubricant), Fullerene ($C_{60}$ Buckyball); Amorphous: Coal, Coke, Charcoal; Hydrocarbons: Saturated (Alkanes $C_nH_{2n+2}$ e.g., Methane $\text{CH}_4$ in CNG/Biogas) vs Unsaturated (Alkenes double bond, Alkynes triple bond)",
                                            chips: ["हिरा ($sp^3$ दुर्वाहक)", "ग्रॅफाइट ($sp^2$ सुवाहक वंगण)", "फुलेरिन $C_{60}$", "मिथेन $\\text{CH}_4$ (CNG व बायोगॅस घटक)", "संपृक्त vs असंपृक्त हायड्रोकार्बन्स"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सामान्य विज्ञान", standard: "डॉ. सचिन भस्के", chapterRef: "रसायनशास्त्र: धातू, अधातू व कार्बन संयुगे" },
                                        { book: "NCERT Class 10 Science", standard: "NCERT", chapterRef: "Chapter 3 & 4: Metals and Non-metals & Carbon and its Compounds" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग C — जीवशास्त्र (Biology - Botany, Zoology & Physiology)
                        // =========================================================================
                        {
                            id: "gc_sci_c11",
                            code: "CS11",
                            section: "C",
                            slug: "cytology-cell-structure-organelles-and-cell-division",
                            nameMr: "पेशीशास्त्र (Cytology): पेशी रचना, अंगके, वनस्पती vs प्राणी पेशी आणि पेशी विभाजन",
                            nameEn: "Cytology: Cell Architecture, Organelles, Plant vs Animal Cells & Cell Division",
                            name: "पेशीशास्त्र व पेशी विभाजन (Cytology)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_sci_c11",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_sci_c10",
                            nextChapterId: "gc_sci_c12",
                            metaDescriptionMr: "पेशीचा शोध (रॉबर्ट हूक १६६५), प्रोकॅरिओटिक vs यूकॅरिओटिक, पेशी अंगके (तंतुकणिका Powerhouse, लायसोसोम्स आत्महत्या पिशव्या, रायबोसोम्स प्रथिन कारखाने), वनस्पती vs प्राणी पेशी, आणि सूत्री विभाजन (Mitosis) vs अर्धसूत्री विभाजन (Meiosis).",
                            metaDescriptionEn: "Cell theory, Discovery by Robert Hooke (1665), Prokaryotic vs Eukaryotic cells, Cell Organelles (Mitochondria Powerhouse, Lysosomes Suicidal Bags, Ribosomes Protein Factories), Plant vs Animal cells, and Mitosis vs Meiosis stages.",
                            notesJsonPath: "/data/notes/group_c/prelims/science/c11_cytology_cell_division.json",
                            quizTag: "gc_sci_cell_01",
                            tags: ["Cytology", "Robert Hooke 1665", "Mitochondria Powerhouse ATP", "Lysosomes Suicidal Bags", "Ribosomes Protein Factory", "Mitosis vs Meiosis", "High-Weightage"],
                            searchKeywords: ["cytology discovery of cell robert hooke 1665 cork cell theory schleiden schwann", "prokaryotic vs eukaryotic nucleus membrane bound organelles", "cell organelles mitochondria powerhouse of cell atp generation", "lysosomes suicidal bags hydrolytic digestive enzymes", "ribosomes protein factories rough endoplasmic reticulum golgi bodies", "plant cell wall chloroplast vs animal cell centrioles", "cell division mitosis equational somatic vs meiosis reductional gametes", "पेशीशास्त्र रॉबर्ट हूक १६६५", "तंतुकणिका पेशीचे ऊर्जा केंद्र ATP", "लायसोसोम्स आत्मघातकी पिशव्या", "रायबोसोम्स प्रथिन निर्मिती", "वनस्पती पेशीभित्तिका हरितलवक", "सूत्री विभाजन Mitosis अर्धसूत्री Meiosis"],
                            topics: [
                                {
                                    id: "top_gc_s11_01",
                                    nameMr: "पेशीची संरचना, पेशी अंगके, वनस्पती-प्राणी पेशी फरक आणि पेशी विभाजन",
                                    nameEn: "Cell Ultrastructure, Organellar Functions & Mitotic/Meiotic Division",
                                    subtopics: [
                                        {
                                            id: "st_gc_s11_01_01",
                                            titleMr: "पेशीचा शोध व रचना: रॉबर्ट हूक (१६६५) यांनी कॉर्कच्या तुकड्यात पेशीचा शोध लावला; श्लायडेन व श्वान यांनी पेशी सिद्धांत मांडला ('सर्व सजीव पेशींचे बनलेले असतात'); रुडॉल्फ विरशॉ ('नवीन पेशी जुन्या पेशींपासूनच तयार होतात'); १) प्रोकॅरिओटिक (आदिकेंद्रकी: केंद्रक व पटल नसतात, उदा. जिवाणू, नील-हरित शेवाळ) vs यूकॅरिओटिक (दृश्यकेंद्रकी: सुस्पष्ट केंद्रक व अंगके); २) वनस्पती पेशी (सेल्युलोजची पेशीभित्तिका असते, हरितलवक असते, मोठी रिक्तिका) vs प्राणी पेशी (पेशीभित्तिका नसते, तंतुकणिका, तारकाेंद्र Centriole असते)",
                                            titleEn: "Discovery & Comparative Cytology: Robert Hooke (1665 discovered dead cork cells); Schleiden & Schwann Cell Theory; Rudolf Virchow ('Omnis cellula-e-cellula'); Prokaryotic (Primitive, nucleoid without membrane, e.g., bacteria) vs Eukaryotic (True nucleus with membrane-bound organelles); Plant cells (Cellulose cell wall, chloroplasts, large vacuole) vs Animal cells (No cell wall, presence of centrioles)",
                                            chips: ["रॉबर्ट हूक १६६५ पेशी शोध", "आदिकेंद्रकी vs दृश्यकेंद्रकी", "वनस्पती पेशीभित्तिका (सेल्युलोज)", "प्राणी पेशी (तारकाेंद्र Centriole)"]
                                        },
                                        {
                                            id: "st_gc_s11_01_02",
                                            titleMr: "महत्त्वाच्या पेशी अंगकांची कार्ये (MPSC हमखास जोड्या): १) तंतुकणिका (Mitochondria): 'पेशीचे ऊर्जा केंद्र' (Powerhouse of the Cell - ATP च्या स्वरूपात ऊर्जा निर्मिती); २) लायसोसोम्स (Lysosomes): 'आत्मघातकी पिशव्या' (Suicidal Bags - पाचक विकरे असतात, जुन्या अंगकांचे पचन करतात); ३) रायबोसोम्स (Ribosomes): 'प्रथिन कारखाने' (Protein Factories); ४) गॉल्गी काय (Golgi Apparatus): पेशीतील पदार्थांचे पॅकेजिंग व स्रवण; ५) अंतर्द्रव्यजालिका (ER): रसायनांचे वहन; ६) हरितलवक (Chloroplast): वनस्पतींचे 'अन्न निर्मिती केंद्र'",
                                            titleEn: "Organelles & Functional Titles: 1) Mitochondria ('Powerhouse of the Cell' generating ATP via cellular respiration; possesses independent DNA/ribosomes); 2) Lysosomes ('Suicidal Bags' containing hydrolytic enzymes); 3) Ribosomes ('Protein Factories of the Cell'); 4) Golgi Apparatus (Packaging and secretory organelle); 5) Endoplasmic Reticulum (Intracellular transport highway); 6) Chloroplast (Photosynthetic kitchen of plant cells)",
                                            chips: ["तंतुकणिका (ऊर्जा केंद्र Powerhouse ATP)", "लायसोसोम्स (आत्मघातकी पिशव्या)", "रायबोसोम्स (प्रथिन कारखाने)", "हरितलवक (अन्न निर्मिती केंद्र)", "गॉल्गी काय (पॅकेजिंग केंद्र)"]
                                        },
                                        {
                                            id: "st_gc_s11_01_03",
                                            titleMr: "पेशी विभाजन (Cell Division): १) सूत्री विभाजन (Mitosis): कायिक पेशींमध्ये (Somatic cells) शरीराच्या वाढीसाठी व दुरुस्तीसाठी घडते; एका जनक पेशीपासून २ समान अपत्य पेशी ($2n \to 2n$) तयार होतात; टप्पे: पूर्वावस्था (Prophase), मध्यावस्था (Metaphase - गुणसूत्रे विषुववृत्तावर येतात, गुणसूत्रांचा अभ्यास करण्यासाठी सर्वोत्तम), पश्चावस्था (Anaphase - गुणसूत्रबिंदू दुभंगतात), अंत्यावस्था (Telophase); २) अर्धसूत्री विभाजन (Meiosis): जनन पेशींमध्ये (Gametes - शुक्रपेशी व अंडपेशी) घडते; गुणसूत्रांची संख्या निम्मी होते ($2n \to n$); १ पेशीपासून ४ एकगुणी अपत्य पेशी तयार होतात",
                                            titleEn: "Cell Division: 1) Mitosis (Equational division in somatic body cells for growth and tissue repair; $2n \to 2n$ diploid cells; Stages: Prophase, Metaphase where chromosomes align along equatorial plane, Anaphase, Telophase); 2) Meiosis (Reductional division occurring in germ cells forming gametes; Halves chromosome number $2n \to n$; Results in 4 haploid genetically diverse daughter cells via crossing over)",
                                            chips: ["सूत्री विभाजन Mitosis ($2n \\to 2n$ वाढ व दुरुस्ती)", "मध्यावस्था Metaphase (गुणसूत्र अभ्यास)", "अर्धसूत्री विभाजन Meiosis ($2n \\to n$ जनन पेशी)", "४ अपत्य पेशी"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सामान्य विज्ञान", standard: "डॉ. सचिन भस्के", chapterRef: "जीवशास्त्र: पेशीशास्त्र व पेशी विभाजन" },
                                        { book: "NCERT Class 11 Biology", standard: "NCERT", chapterRef: "Chapter 8 & 10: Cell The Unit of Life & Cell Cycle and Cell Division" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gc_sci_c12",
                            code: "CS12",
                            section: "C",
                            slug: "plant-kingdom-classification-cryptogams-and-phanerogams",
                            nameMr: "वनस्पती सृष्टीचे वर्गीकरण: अबीजपत्री (Thallophyta, Bryophyta) व बीजपत्री (Angiosperms)",
                            nameEn: "Plant Kingdom Classification: Cryptogams, Phanerogams, Gymnosperms & Angiosperms",
                            name: "वनस्पती सृष्टी वर्गीकरण (Plant Kingdom)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_sci_c12",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_sci_c11",
                            nextChapterId: "gc_sci_c13",
                            metaDescriptionMr: "व्हिटाकरची ५ सृष्टी पद्धत, अबीजपत्री Cryptogams (थॅलोफायटा-शेवाळ स्पायरोगायरा, ब्रायोफायटा-उभयचर वनस्पती मॉस, टेरिडोफायटा-नेचे), आणि बीजपत्री Phanerogams (अनावृत्तबीजी Gymnosperms सायकस vs आवृत्तबीजी Angiosperms एकदल व द्विदल).",
                            metaDescriptionEn: "Whittaker's 5 Kingdom classification, Cryptogams (Thallophyta algae Spirogyra, Bryophyta amphibians Moss/Funaria, Pteridophyta ferns), and Phanerogams (Gymnosperms naked seeds Cycas/Pinus vs Angiosperms enclosed seeds: Monocots vs Dicots).",
                            notesJsonPath: "/data/notes/group_c/prelims/science/c12_plant_kingdom.json",
                            quizTag: "gc_sci_botany_01",
                            tags: ["Botany", "Plant Classification", "Cryptogams Phanerogams", "Thallophyta Spirogyra", "Bryophyta Amphibians", "Gymnosperms Cycas Pinus", "Angiosperms Monocots Dicots", "High-Weightage"],
                            searchKeywords: ["plant kingdom classification whittaker eichler cryptogams phanerogams", "thallophyta algae autotrophic spirogyra ulothrix sargassum", "bryophyta amphibians of plant kingdom funaria riccia marchantia", "pteridophyta first vascular plants ferns nephrolepis marsilea", "gymnosperms naked seeds cycas pinus deodar", "angiosperms flowering plants monocot vs dicot cotyledons venation root", "वनस्पती वर्गीकरण थॅलोफायटा शेवाळ स्पायरोगायरा", "ब्रायोफायटा वनस्पती सृष्टीचे उभयचर मॉस फ्युनारिया", "टेरिडोफायटा नेचे संवहनी संस्था", "अनावृत्तबीजी सायकस पायनस", "आवृत्तबीजी एकदल द्विदल वनस्पती"],
                            topics: [
                                {
                                    id: "top_gc_s12_01",
                                    nameMr: "अबीजपत्री वनस्पतींचे ३ गट आणि बीजपत्री वनस्पतींचे वर्गीकरण",
                                    nameEn: "Taxonomy of Cryptogams (Thallophyta to Pteridophyta) & Phanerogams",
                                    subtopics: [
                                        {
                                            id: "st_gc_s12_01_01",
                                            titleMr: "अबीजपत्री वनस्पती (Cryptogams - बिया न येणाऱ्या): १) थॅलोफायटा (Thallophyta): शरीर मूळ, खोड, पानात विभागलेले नसते; जलचर; स्वयंपोषी शेवाळ (Algae); उदा. स्पायरोगायरा (Spirogyra), युलोथ्रिक्स, कारा, सरगॅसम; २) ब्रायोफायटा (Bryophyta): 'वनस्पती सृष्टीचे उभयचर' (Amphibians of Plant Kingdom - वाढ ओलसर जमिनीवर होते, परंतु प्रजननासाठी पाण्याची गरज असते); संवहनी संस्था (Xylem/Phloem) नसते; उदा. फ्युनारिया (मॉस Moss), रिक्शिया, मार्चेंशिया; ३) टेरिडोफायटा (Pteridophyta): पाणी व अन्नाच्या वहनासाठी संवहनी ऊती (Vascular tissues) असणाऱ्या पहिल्या वनस्पती; पाने, खोड, मुळे सुस्पष्ट; उदा. नेचे (Nephrolepis / Fern), मार्सिलिया",
                                            titleEn: "Cryptogamic Divisions (Spore-bearing non-flowering): 1) Thallophyta (Undifferentiated thallus, autotrophic aquatic algae; e.g., Spirogyra, Ulothrix, Chara); 2) Bryophyta ('Amphibians of the Plant Kingdom', grow on land but strictly require water for fertilization; non-vascular; e.g., Funaria/Moss, Riccia, Marchantia); 3) Pteridophyta (First vascular land plants possessing Xylem and Phloem; true roots/stem/leaves; e.g., Ferns/Nephrolepis, Marsilea)",
                                            chips: ["थॅलोफायटा (शेवाळ स्पायरोगायरा)", "ब्रायोफायटा (वनस्पतींचे उभयचर मॉस)", "टेरिडोफायटा (पहिली संवहनी वनस्पती नेचे Fern)", "अबीजपत्री (Cryptogams)"]
                                        },
                                        {
                                            id: "st_gc_s12_01_02",
                                            titleMr: "बीजपत्री वनस्पती (Phanerogams - बिया येणाऱ्या): १) अनावृत्तबीजी (Gymnosperms): बियांवर नैसर्गिक फळांचे आवरण नसते ('नग्न बीजी'); सदाहरित, बहुवार्षिक व काष्ठमय; नर व मादी फुले एकाच झाडाच्या वेगवेगळ्या पानांवर (शंकू Cones); उदा. सायकस (Cycas), पायनस (देवदार/पाइन Pinus); २) आवृत्तबीजी (Angiosperms): फुले येणाऱ्या सपुष्प वनस्पती; बियांवर फळांचे आवरण असते; २ वर्ग: अ) द्विदल (Dicotyledons: बियांचे २ भाग होतात, सोटमूळ Tap root, जाळीदार शिराविन्यास, उदा. हरभरा, आंबा, वड), ब) एकदल (Monocotyledons: बियांचे २ भाग होत नाहीत, तंतुमय मुळे Fibrous root, समांतर शिराविन्यास, उदा. मका, गहू, ज्वारी, केळी)",
                                            titleEn: "Phanerogams (Seed-bearing): 1) Gymnosperms (Naked seeds without fruit envelope; perennial woody evergreens with reproductive cones; e.g., Cycas, Pinus, Deodar); 2) Angiosperms (Flowering plants with enclosed seeds inside fruits); Sub-divided into: Dicots (2 cotyledons, tap root system, reticulate leaf venation; e.g., Mango, Gram, Banyan) and Monocots (Single cotyledon, fibrous root system, parallel leaf venation; e.g., Maize, Wheat, Bamboo, Banana)",
                                            chips: ["अनावृत्तबीजी Gymnosperms (सायकस, पायनस)", "आवृत्तबीजी Angiosperms (सपुष्प वनस्पती)", "द्विदल वनस्पती (सोटमूळ, जाळीदार पानांची रचना)", "एकदल वनस्पती (तंतुमय मुळे, मका)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सामान्य विज्ञान", standard: "डॉ. सचिन भस्के", chapterRef: "वनस्पतीशास्त्र: वनस्पती सृष्टीचे वर्गीकरण" },
                                        { book: "NCERT Class 11 Biology", standard: "NCERT", chapterRef: "Chapter 3: Plant Kingdom" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gc_sci_c13",
                            code: "CS13",
                            section: "C",
                            slug: "plant-physiology-vascular-tissues-hormones-and-photosynthesis",
                            nameMr: "वनस्पतींचे पोषण, संप्रेरके, वहन (Xylem, Phloem) आणि प्रकाशसंश्लेषण",
                            nameEn: "Plant Physiology: Vascular Transport, Phytohormones & Photosynthesis Dynamics",
                            name: "वनस्पतींची कार्ये, संप्रेरके व प्रकाशसंश्लेषण",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 2,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_sci_c13",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_sci_c12",
                            nextChapterId: "gc_sci_c14",
                            metaDescriptionMr: "संवहनी ऊती (जलवाहिनी Xylem पाण्याचे वहन, रसवाहिनी Phloem अन्नाचे वहन), वनस्पती संप्रेरके (Auxin, Gibberellin, Cytokinin, Abscisic acid, Ethylene फळे पिकवणारे), प्रकाशसंश्लेषण समीकरण, आणि बाष्पोत्सर्जन.",
                            metaDescriptionEn: "Plant vascular bundles (Xylem water/minerals unidirectional vs Phloem food/photosynthates bidirectional), Phytohormones (Auxins, Gibberellins, Cytokinins, Abscisic Acid stress hormone, Ethylene fruit ripening), Photosynthesis equation, and Transpiration.",
                            notesJsonPath: "/data/notes/group_c/prelims/science/c13_plant_physiology.json",
                            quizTag: "gc_sci_botany_phys_01",
                            tags: ["Botany Physiology", "Xylem Phloem", "Phytohormones Auxin Gibberellin", "Ethylene Fruit Ripening", "Photosynthesis Formula Chlorophyll", "Transpiration"],
                            searchKeywords: ["plant tissues vascular xylem water transport unidirectional phloem food bidirectional", "plant hormones phytohormones auxin apical dominance gibberellin stem elongation", "cytokinin cell division ethylene fruit ripening gas abscisic acid stress dormancy", "photosynthesis light reaction thylakoid dark reaction calvin cycle stroma", "chlorophyll magnesium ion core transpiration stomata", "जलवाहिनी Xylem रसवाहिनी Phloem", "वनस्पती संप्रेरके ऑक्सिन जिबरेलिन", "इथिलीन फळे पिकवणारे संप्रेरक", "प्रकाशसंश्लेषण क्लोरोफिल मॅग्नेशियम", "बाष्पोत्सर्जन पर्णरंध्रे"],
                            topics: [
                                {
                                    id: "top_gc_s13_01",
                                    nameMr: "संवहनी ऊतींचे कार्य, वनस्पती संप्रेरके आणि प्रकाशसंश्लेषण प्रक्रिया",
                                    nameEn: "Vascular Mechanics, Phytohormone Regulation & Photosynthetic Chemistry",
                                    subtopics: [
                                        {
                                            id: "st_gc_s13_01_01",
                                            titleMr: "संवहनी ऊती व बाष्पोत्सर्जन: १) जलवाहिनी (Xylem): मुळांनी शोषलेले पाणी व खनिजे खोड व पानांपर्यंत पोहोचवणे; वहन 'एकेरी दिशेने' (खालून वर); घटक: वाहिनिका, वाहिन्या, काष्ठ तंतू, काष्ठ मृदुती; २) रसवाहिनी (Phloem): पानांमध्ये तयार झालेले अन्न (ग्लुकोज/सुक्रोज) वनस्पतीच्या सर्व अवयवांपर्यंत पोहोचवणे; वहन 'दुहेरी दिशेने' (वर व खाली दोन्हीकडे); घटक: चाळणी नलिका, सहपेशी, रसवाहिनी तंतू; ३) बाष्पोत्सर्जन (Transpiration): पानांवरील पर्णरंध्रांमधून (Stomata) पाण्याचे बाष्पीभवन होणे; यामुळे झाडाच्या शेंड्यापर्यंत पाणी खेचण्यासाठी सक्शन फोर्स निर्माण होतो",
                                            titleEn: "Vascular Bundle Dynamics: 1) Xylem (Transports water and dissolved soil minerals unidirectionally upwards from roots to foliage; composed of tracheids, vessels, xylem parenchyma, xylem fibres); 2) Phloem (Transports organic food/sucrose bidirectionally to growing nodes and roots; composed of sieve tubes, companion cells, phloem parenchyma); 3) Transpiration (Evaporative water loss through leaf stomata generating root-to-crown suction pull)",
                                            chips: ["जलवाहिनी Xylem (पाणी वहन एकेरी)", "रसवाहिनी Phloem (अन्न वहन दुहेरी)", "बाष्पोत्सर्जन Transpiration", "पर्णरंध्रे Stomata"]
                                        },
                                        {
                                            id: "st_gc_s13_01_02",
                                            titleMr: "वनस्पती संप्रेरके (Phytohormones): १) ऑक्सिन (Auxin): वनस्पतीच्या शेंड्याची वाढ करणे (Apical Dominance); २) जिबरेलिन (Gibberellin): खोडाची लांबी वाढवणे, बियांची सुप्तावस्था मोडणे; ३) सायटोकायनीन (Cytokinin): पेशी विभाजनाला चालना देणे, पाने ताजी ठेवणे; ४) ॲब्सिसिक ॲसिड (ABA - ताण संप्रेरक Stress Hormone): वाढ रोखणे, पाने गळणे, पर्णरंध्रे बंद करणे; ५) इथिलीन (Ethylene): एकमेव 'वायूरूप संप्रेरक' (Gaseous hormone); झाडावरील फळे नैसर्गिकरीत्या पिकवणे",
                                            titleEn: "Phytohormone Functions: 1) Auxins (Apical bud dominance and phototropic bending); 2) Gibberellins (Internodal stem elongation, seed germination); 3) Cytokinins (Promotes rapid cell division, delays senescence); 4) Abscisic Acid (ABA: Growth inhibitor stress hormone triggering stomatal closure and leaf abscission); 5) Ethylene (Sole gaseous phytohormone governing fruit ripening)",
                                            chips: ["ऑक्सिन (शेंड्याची वाढ)", "जिबरेलिन (खोडाची वाढ)", "सायटोकायनीन (पेशी विभाजन)", "इथिलीन (फळे पिकवणारे वायूरूप संप्रेरक)", "ABA (वाढ रोखणारे ताण संप्रेरक)"]
                                        },
                                        {
                                            id: "st_gc_s13_01_03",
                                            titleMr: "प्रकाशसंश्लेषण प्रक्रिया: समीकरण: $6\\text{CO}_2 + 12\\text{H}_2\\text{O} \\xrightarrow[\\text{Chlorophyll}]{\\text{Sunlight}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 + 6\\text{H}_2\\text{O}$; सौर ऊर्जेचे रासायनिक ऊर्जेत रूपांतर; हरितद्रव्यात (Chlorophyll) 'मॅग्नेशियम' (Mg) हा धातू असतो; प्रकाशसंश्लेषणात बाहेर पडणारा ऑक्सिजन हा पाण्याचे ($H_2O$) प्रकाश अपघटन झाल्यामुळे मुक्त होतो ($CO_2$ मुळे नव्हे); प्रकाश अभिक्रिया (थायलाकॉइड पिशव्यांमध्ये) व अंधार अभिक्रिया (स्ट्रोमामध्ये केल्विन सायकल)",
                                            titleEn: "Photosynthesis Chemistry: Solar energy converted to chemical energy; Formula: $6\\text{CO}_2 + 12\\text{H}_2\\text{O} \\to \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 + 6\\text{H}_2\\text{O}$; Chlorophyll pigment coordinates a central Magnesium ($Mg$) ion; Photolysis of water releases oxygen gas ($O_2$ originates from $H_2O$, not $CO_2$); Light reactions occur in Thylakoid grana; Dark reactions (Calvin Cycle) occur in Stroma",
                                            chips: ["प्रकाशसंश्लेषण समीकरण", "क्लोरोफिलमध्ये मॅग्नेशियम धातू", "ऑक्सिजन पाण्यातून मुक्त होतो", "थायलाकॉइड vs स्ट्रोमा"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सामान्य विज्ञान", standard: "डॉ. सचिन भस्के", chapterRef: "वनस्पतीशास्त्र: वनस्पती पोषण व संप्रेरके" },
                                        { book: "NCERT Class 11 Biology", standard: "NCERT", chapterRef: "Photosynthesis in Higher Plants & Plant Growth" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gc_sci_c14",
                            code: "CS14",
                            section: "C",
                            slug: "animal-kingdom-classification-non-chordates-and-chordates",
                            nameMr: "प्राणी सृष्टीचे वर्गीकरण: असमपृष्ठरज्जू (Protozoa ते Echinodermata) आणि समपृष्ठरज्जू",
                            nameEn: "Animal Kingdom Taxonomy: Non-Chordates (Invertebrates) & Chordates (Vertebrates)",
                            name: "प्राणी सृष्टी वर्गीकरण (Animal Kingdom)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_sci_c14",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_sci_c13",
                            nextChapterId: "gc_sci_c15",
                            metaDescriptionMr: "असमपृष्ठरज्जू Non-Chordates (प्रोटोझोआ, पोरीफेरा, सिलेंटरेटा, प्लॅटीहेल्मिंथिस, ॲनेलिडा गांडूळ, आर्थ्रोपोडा संधिपाद-सर्वात मोठा संघ, मोलस्का, इकायनोडर्माटा), आणि समपृष्ठरज्जू Chordates (मत्स्य, उभयचर, सरपटणारे, पक्षी, सस्तन प्राणी, शीतरक्तिय vs उष्णरक्तिय).",
                            metaDescriptionEn: "Invertebrate Phyla: Protozoa, Porifera sponges, Coelenterata hydra, Platyhelminthes tapeworm, Annelida earthworm, Arthropoda jointed-legs largest phylum, Mollusca, Echinodermata; and Vertebrate Classes: Pisces, Amphibia, Reptilia, Aves, Mammalia; Cold-blooded vs Warm-blooded.",
                            notesJsonPath: "/data/notes/group_c/prelims/science/c14_animal_kingdom.json",
                            quizTag: "gc_sci_zoology_01",
                            tags: ["Zoology", "Animal Classification", "Non Chordates", "Arthropoda Largest Phylum", "Annelida Earthworm", "Mollusca Octopus", "Chordates Vertebrates", "Cold vs Warm Blooded", "High-Weightage"],
                            searchKeywords: ["animal kingdom classification non chordates chordates", "porifera sponges canal system coelenterata cnidaria hydra", "platyhelminthes flatworms liverfluke aschelminthes roundworms", "annelida segmented worms earthworm vermicomposting hirudinaria", "arthropoda largest animal phylum chitinous exoskeleton insects cockroach", "mollusca second largest soft body snail octopus echinodermata starfish", "chordata classes pisces amphibia reptilia aves mammalia hearts chambers", "cold blooded poikilotherms vs warm blooded homeotherms", "प्राणी वर्गीकरण पोरीफेरा स्पंज", "आर्थ्रोपोडा संधिपाद सर्वात मोठा संघ कीटक झुरळ", "ॲनेलिडा गांडूळ खत मोलस्का ऑक्टोपस", "इकायनोडर्माटा तारामासा", "समपृष्ठरज्जू मत्स्य उभयचर सरपटणारे पक्षी सस्तन", "शीतरक्तिय vs उष्णरक्तिय प्राणी"],
                            topics: [
                                {
                                    id: "top_gc_s14_01",
                                    nameMr: "असमपृष्ठरज्जू प्राण्यांचे संघ आणि समपृष्ठरज्जू प्राण्यांचे वर्ग",
                                    nameEn: "Taxonomy of Invertebrate Phyla & Vertebrate Chordate Classes",
                                    subtopics: [
                                        {
                                            id: "st_gc_s14_01_01",
                                            titleMr: "असमपृष्ठरज्जू प्राणी संघ (Non-Chordates): १) पोरीफेरा (छिद्रयुक्त शरीर, उदा. सायकॉन, स्पंज); २) सिलेंटरेटा / निडारिया (दंशपेशी, उदा. हायड्रा, जेलीफिश); ३) प्लॅटीहेल्मिंथिस (चपटे जंत, उदा. प्लॅनेरिया, पट्टकृमी Tapeworm); ४) ॲस्केलहेल्मिंथिस (गोल जंत, उदा. पोटातील जंत Ascaris); ५) ॲनेलिडा (खंडीभवन शरीर, उदा. गांडूळ Earthworm - शेतकऱ्याचा मित्र, जळू); ६) आर्थ्रोपोडा (संधिपाद प्राणी - प्राणी सृष्टीतील 'सर्वात मोठा संघ', सांधेयुक्त पाय व कायटीनचे बाह्यकंकाल, उदा. झुरळ, खेकडा, विंचू, डास, फुलपाखरू); ७) मोलस्का (मृदुकाय प्राणी - दुसरा मोठा संघ, कॅल्शियम कवच, उदा. गोगलगाय, शिंपला, ऑक्टोपस); ८) इकायनोडर्माटा (कंटकीचर्मी, उदा. तारामासा Starfish)",
                                            titleEn: "Invertebrate Phyla: Porifera (Sponges with ostia/osculum); Coelenterata (Cnidarians with stinging cells: Hydra, Jellyfish); Platyhelminthes (Flatworms: Planaria, Tapeworm); Aschelminthes (Roundworms: Ascaris); Annelida (Segmented: Earthworm, Leech); Arthropoda (LARGEST PHYLUM, jointed appendages, chitinous exoskeleton: Cockroach, Crab, Scorpion, Insects); Mollusca (2nd largest, soft-bodied with mantle/calcareous shell: Snail, Octopus); Echinodermata (Spiny-skinned with water vascular system: Starfish)",
                                            chips: ["आर्थ्रोपोडा (सर्वात मोठा प्राणी संघ कीटक)", "ॲनेलिडा (गांडूळ शेतकऱ्याचा मित्र)", "मोलस्का (दुसरा मोठा संघ गोगलगाय, ऑक्टोपस)", "इकायनोडर्माटा (तारामासा Starfish)"]
                                        },
                                        {
                                            id: "st_gc_s14_01_02",
                                            titleMr: "समपृष्ठरज्जू प्राणी वर्ग (Chordates / Vertebrates): पाठीचा कणा असणारे; १) मत्स्य वर्ग (Pisces: कल्ल्यांद्वारे श्वसन, २ कप्प्यांचे हृदय, शीतरक्तिय); २) उभयचर वर्ग (Amphibia: जमिनीवर व पाण्यात राहणारे, ३ कप्प्यांचे हृदय, शीतरक्तिय, उदा. बेडूक); ३) सरपटणारे प्राणी (Reptilia: ३ कप्प्यांचे हृदय - अपवाद 'मगर' जिला ४ कप्पे असतात; शीतरक्तिय; उदा. साप, सरडा, कासव); ४) पक्षी वर्ग (Aves: पिसांचे आवरण, हाडे पोकळ, ४ कप्प्यांचे हृदय, उष्णरक्तिय); ५) सस्तन प्राणी (Mammalia: दुग्ध ग्रंथी, अंगावर केस, ४ कप्प्यांचे हृदय, उष्णरक्तिय; उदा. मानव, वटवाघूळ, व्हेल मासा; अपवाद अंडी घालणारे सस्तन प्राणी: प्लॅटिपस Platypus व एकिडना)",
                                            titleEn: "Vertebrate Classes & Heart Chambers: Pisces (Gills, 2-chambered heart, cold-blooded); Amphibia (3-chambered heart, cold-blooded, e.g., Frog); Reptilia (3-chambered heart EXCEPT Crocodile which has 4 chambers, cold-blooded); Aves (Pneumatic hollow bones, 4-chambered heart, warm-blooded birds); Mammalia (Mammary glands, hair, 4-chambered heart, warm-blooded; Platypus & Echidna are egg-laying oviparous mammal exceptions)",
                                            chips: ["मत्स्य वर्ग (२ कप्प्यांचे हृदय)", "उभयचर वर्ग (३ कप्प्यांचे हृदय)", "सरपटणारे प्राणी (अपवाद मगर ४ कप्पे)", "पक्षी व सस्तन प्राणी (४ कप्प्यांचे हृदय उष्णरक्तिय)", "प्लॅटिपस (अंडी घालणारा सस्तन प्राणी)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सामान्य विज्ञान", standard: "डॉ. सचिन भस्के", chapterRef: "प्राणीशास्त्र: प्राणी सृष्टीचे वर्गीकरण" },
                                        { book: "NCERT Class 11 Biology", standard: "NCERT", chapterRef: "Chapter 4: Animal Kingdom" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gc_sci_c15",
                            code: "CS15",
                            section: "C",
                            slug: "human-digestive-and-circulatory-system-blood-groups",
                            nameMr: "मानवी शरीर संस्था: पचन संस्था, रक्तभिसरण संस्था व रक्ताचे गट (ABO व Rh फॅक्टर)",
                            nameEn: "Human Anatomy: Digestive Process, Cardiovascular Circulation & Blood Groups (ABO/Rh)",
                            name: "पचन संस्था, रक्तभिसरण व रक्तगट",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_sci_c15",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_sci_c14",
                            nextChapterId: "gc_sci_c16",
                            metaDescriptionMr: "पचन संस्था (लाळ टायलिन, जठर पेप्सिन/HCl, यकृत पित्तरस, स्वादुपिंड ट्रिप्सिन), रक्तभिसरण (हृदय ४ कप्पे, रक्तदाब १२०/८० mmHg), रक्ताचे घटक (RBC, WBC, प्लेटलेट्स), आणि कार्ल लँडस्टेनर रक्तगट (ABO पद्धत, O- सर्वयोग्य दाता, AB+ सर्वयोग्य ग्राहक, Rh फॅक्टर).",
                            metaDescriptionEn: "Digestive tract enzymes (Salivary amylase Ptyalin, Pepsin, Bile juice Liver, Pancreatic Trypsin/Lipase), Double circulation, Heart anatomy (4 chambers, SA node pacemaker, BP 120/80 mmHg), Blood corpuscles (RBC, WBC, Platelets), and Karl Landsteiner Blood Groups (Universal Donor O-, Universal Recipient AB+, Rh incompatibility).",
                            notesJsonPath: "/data/notes/group_c/prelims/science/c15_digestion_circulation_blood.json",
                            quizTag: "gc_sci_digest_circ_01",
                            tags: ["Human Anatomy", "Digestive Enzymes Pepsin Ptyalin", "Liver Bile Juice", "Cardiovascular Heart 4 Chambers", "Blood Corpuscles RBC WBC Platelets", "Karl Landsteiner Blood Groups", "Universal Donor O Negative", "Universal Recipient AB Positive", "High-Weightage"],
                            searchKeywords: ["human digestive system alimentary canal salivary amylase ptyalin", "stomach hcl pepsin protein digestion liver bile gall bladder", "pancreas insulin glucagon trypsin lipase small intestine villi absorption", "human circulatory system heart 4 chambers sa node pacemaker", "blood pressure normal 120 by 80 mm hg sphygmomanometer", "blood components rbc erythrocytes wbc leukocytes platelets thrombocytes", "blood groups karl landsteiner 1900 abo system rh factor", "universal donor o negative universal recipient ab positive erythroblastosis fetalis", "पचन संस्था पाचक रस लाळ टायलिन", "जठर पेप्सिन हायड्रोक्लोरिक आम्ल यकृत पित्तरस", "मानवी हृदय ४ कप्पे पेसमेकर SA नोड", "रक्तदाब १२०/८० स्फिग्मोमॅनोमीटर", "रक्ताचे घटक तांबड्या पेशी पांढऱ्या पेशी प्लेटलेट्स", "रक्तगट कार्ल लँडस्टेनर ABO पद्धत", "सर्वयोग्य दाता O निगेटिव्ह", "सर्वयोग्य ग्राहक AB पॉझिटिव्ह", "Rh फॅक्टर"],
                            topics: [
                                {
                                    id: "top_gc_s15_01",
                                    nameMr: "पचनक्रिया व विकरे, मानवी हृदय रचना, रक्ताचे घटक आणि रक्तगट अनुवांशिकता",
                                    nameEn: "Alimentary Digestion, Cardiac Cycle, Haematology & ABO Blood Serology",
                                    subtopics: [
                                        {
                                            id: "st_gc_s15_01_01",
                                            titleMr: "पचन संस्था व पाचक विकरे (Digestive Enzymes): अन्ननलिका लांबी सुमारे ९ मीटर; १) मुख: लाळ ग्रंथींमधून 'टायलिन' (Ptyalin / Salivary Amylase) स्रवते, जे स्टार्चचे रूपांतर माल्टोज साखरेत करते; २) जठर (Stomach): जठररसात हायड्रोक्लोरिक आम्ल (HCl - जंतू मारणे), 'पेप्सिन' (प्रथिनांचे पचन), व रेनिन (दुधाचे पचन); ३) यकृत (Liver - शरीरातील सर्वात मोठी ग्रंथी): 'पित्तरस' (Bile Juice) तयार करते (पित्ताशयात साठवले जाते, मेदाचे पायसीकरण Emulsification करते); ४) स्वादुपिंड (Pancreas): 'ट्रिप्सिन' (प्रथिने पचन), 'लायपेस' (मेद पचन), 'अमायलेज'; ५) लहान आतडे (Small Intestine): पचनाचे व अन्न शोषणाचे मुख्य केंद्र (व्हिलाय Villi द्वारे शोषण)",
                                            titleEn: "Digestive Physiology & Enzymes: Alimentary canal ~9 meters; Mouth: Salivary Amylase/Ptyalin breaks starch into maltose; Stomach: Gastric juice secretes HCl, Pepsin (protein breakdown), Rennin; Liver (largest gland) synthesizes Bile Juice (stored in gallbladder, emulsifies fats); Pancreas: Trypsin (proteins), Lipase (fats), Amylase (carbohydrates); Small Intestine (final site of digestion and villi nutrient absorption)",
                                            chips: ["लाळ (टायलिन विकर Amylase)", "जठर (पेप्सिन व HCl आम्ल)", "यकृत Liver (सर्वात मोठी ग्रंथी पित्तरस)", "स्वादुपिंड (ट्रिप्सिन व लायपेस)", "लहान आतडे (अन्नशोषण Villi)"]
                                        },
                                        {
                                            id: "st_gc_s15_01_02",
                                            titleMr: "रक्तभिसरण संस्था व हृदय रचना: विल्यम हार्वे (१६२८) यांनी मानवी रक्तभिसरणाचा शोध लावला; मानवी हृदय ४ कप्प्यांचे असते (२ अलिंद व २ निलय); डाव्या भागात शुद्ध (ऑक्सिजनयुक्त) तर उजव्या भागात अशुद्ध रक्त; 'पेसमेकर' (SA Node): हृदयाचे ठोके सुरू ठेवणारा नैसर्गिक जनरेटर; निरोगी व्यक्तीचा रक्तदाब (Blood Pressure) = १२०/८० mmHg (सिस्टोलिक १२० / डायस्टोलिक ८०); रक्तदाब मोजण्याचे साधन: 'स्फिग्मोमॅनोमीटर' (Sphygmomanometer); धमनी (Artery: शुद्ध रक्त नेते, अपवाद फुप्फुस धमनी) vs शीर (Vein: अशुद्ध रक्त नेते, अपवाद फुप्फुस शीर)",
                                            titleEn: "Cardiovascular Dynamics: Discovered by William Harvey (1628); 4-Chambered Heart (2 Atria, 2 Ventricles); Left side handles oxygenated blood, Right side deoxygenated; Sinoatrial (SA) Node acts as natural pacemaker; Normal Blood Pressure = 120/80 mmHg (measured via Sphygmomanometer); Arteries (carry oxygenated blood from heart, except Pulmonary Artery) vs Veins (carry deoxygenated blood to heart, except Pulmonary Vein)",
                                            chips: ["विल्यम हार्वे १६२८ शोध", "हृदय ४ कप्पे (SA नोड पेसमेकर)", "रक्तदाब १२०/८० mmHg", "स्फिग्मोमॅनोमीटर साधन", "धमनी vs शीर"]
                                        },
                                        {
                                            id: "st_gc_s15_01_03",
                                            titleMr: "रक्ताचे घटक व रक्तगट (ABO व Rh): १) रक्ताचे घटक: अ) रक्तद्रव (Plasma ५५%): पाणी, अल्ब्युमिन, फाइब्रिनोजेन (रक्त गोठवणे); ब) रक्तपेशी (४५%): RBC (तांबड्या पेशी: केंद्रक नसते, हिमोग्लोबिनमुळे तांबडा रंग, आयुष्य १२० दिवस, निर्मिती अस्थिमज्जा Bone Marrow), WBC (पांढऱ्या पेशी: शरीराचे सैनिक, रोगप्रतिकार, ल्युकोसाईट), प्लेटलेट्स (रक्त गोठवण्यासाठी मदत); २) रक्तगट: कार्ल लँडस्टेनर (१९००) यांनी A, B, O रक्तगटांचा शोध लावला (डिकास्टेलोने AB चा शोध लावला); RBC वरील अँटिजेन आणि प्लाझ्मातील अँटिबॉडी; 'O निगेटिव्ह' (O-): 'सर्वयोग्य दाता' (Universal Donor); 'AB पॉझिटिव्ह' (AB+): 'सर्वयोग्य ग्राहक' (Universal Recipient); Rh फॅक्टर (ऱ्हिसस माकड)",
                                            titleEn: "Haematology & Blood Groups: Plasma (55%); Blood Corpuscles (45%): RBCs (Erythrocytes: non-nucleated, hemoglobin transport, 120-day lifespan, bone marrow genesis), WBCs (Leukocytes: immune defenders), Platelets (Thrombocytes for clotting); Blood Group System: Karl Landsteiner discovered ABO groups (1900); Universal Donor = O Negative (O-); Universal Recipient = AB Positive (AB+); Rh Incompatibility (Erythroblastosis fetalis)",
                                            chips: ["RBC तांबड्या पेशी (हिमोग्लोबिन, १२० दिवस आयुष्य)", "WBC पांढऱ्या पेशी (सैनिक पेशी)", "प्लेटलेट्स (रक्त गोठवणे)", "कार्ल लँडस्टेनर रक्तगट शोध", "सर्वयोग्य दाता O- (Universal Donor)", "सर्वयोग्य ग्राहक AB+ (Universal Recipient)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सामान्य विज्ञान", standard: "डॉ. सचिन भस्के", chapterRef: "मानवी शरीरशास्त्र: पचन व रक्तभिसरण संस्था" },
                                        { book: "NCERT Class 11 Biology", standard: "NCERT", chapterRef: "Digestion and Absorption & Body Fluids and Circulation" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gc_sci_c16",
                            code: "CS16",
                            section: "C",
                            slug: "respiratory-excretory-nervous-and-endocrine-systems",
                            nameMr: "मानवी संस्था: श्वसन, उत्सर्जन, चेतासंस्था आणि अंतःस्रावी ग्रंथी (हार्मोन्स)",
                            nameEn: "Human Anatomy: Respiratory, Excretory (Nephron), Nervous & Endocrine Glands",
                            name: "श्वसन, उत्सर्जन, चेतासंस्था व हार्मोन्स",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_sci_c16",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_sci_c15",
                            nextChapterId: "gc_sci_c17",
                            metaDescriptionMr: "श्वसन संस्था (वायू देवाणघेवाण, फुप्फुसे), उत्सर्जन संस्था (वृक्क Kidney, नेफ्रॉन Nephron रचना, डायलिसिस), चेतासंस्था (मेंदू रचना - प्रमस्तिष्क Cerebrum, अनुमस्तिष्क, मज्जारज्जू), आणि अंतःस्रावी ग्रंथी (पियुषिका Pituitary, थायरॉईड थायरॉक्सिन, स्वादुपिंड इन्सुलिन/मधुमेह, एड्रिनलिन).",
                            metaDescriptionEn: "Respiration alveolar gas exchange, Renal Excretion (Kidney anatomy, Nephron functional unit, Dialysis), Nervous System (Brain lobes: Cerebrum intelligence, Cerebellum balance, Reflex Arc), and Endocrine Glands (Pituitary master gland, Thyroid Thyroxine, Pancreas Insulin diabetes, Adrenal fight-or-flight hormone).",
                            notesJsonPath: "/data/notes/group_c/prelims/science/c16_excretion_nervous_endocrine.json",
                            quizTag: "gc_sci_systems_01",
                            tags: ["Human Anatomy", "Excretory System Nephron", "Kidney Dialysis", "Nervous System Brain Cerebrum Cerebellum", "Reflex Arc", "Endocrine Glands Pituitary", "Insulin Diabetes", "Thyroid Thyroxine", "High-Weightage"],
                            searchKeywords: ["human respiratory system alveoli hemoglobin oxygen transport", "human excretory system kidneys functional unit nephron bowmans capsule", "kidney failure artificial hemodialysis urea excretion", "human nervous system central peripheral brain cerebrum memory cerebellum balance", "medulla oblongata involuntary reflex arc spinal cord", "endocrine system ductless glands pituitary master gland growth hormone", "thyroid gland thyroxine iodine deficiency goitre pancreas islets of langerhans insulin diabetes", "adrenal gland adrenaline emergency hormone fight or flight", "उत्सर्जन संस्था वृक्क Kidney नेफ्रॉन Nephron", "डायलिसिस युरिया गाळणे", "मानवी मेंदू प्रमस्तिष्क Cerebrum बुद्धिमत्ता", "अनुमस्तिष्क Cerebellum तोल सांभाळणे", "अंतःस्रावी ग्रंथी पियुषिका Pituitary मास्टर ग्रंथी", "थायरॉईड थायरॉक्सिन गलगंड", "इन्सुलिन मधुमेह", "एड्रिनलिन संकटकालीन हार्मोन"],
                            topics: [
                                {
                                    id: "top_gc_s16_01",
                                    nameMr: "वृक्क उत्सर्जन व नेफ्रॉन, मानवी मेंदू रचना आणि अंतःस्रावी ग्रंथींची कार्ये",
                                    nameEn: "Renal Nephrology, Neuroanatomy Centers & Endocrine Hormone Pathways",
                                    subtopics: [
                                        {
                                            id: "st_gc_s16_01_01",
                                            titleMr: "उत्सर्जन संस्था व नेफ्रॉन (Excretory System): शरीरातील नायट्रोजनयुक्त विषारी टाकाऊ पदार्थ (युरिया, युरिक ॲसिड) बाहेर टाकणे; मानवी उत्सर्जन संस्थेत २ मूत्रपिंड (Kidneys), २ मूत्रवाहिन्या, मूत्राशय व मूत्रोत्सर्ग नलिका यांचा समावेश; मूत्रपिंडाचा रचनात्मक व कार्यात्मक घटक: 'नेफ्रॉन' (Nephron - प्रत्येक मूत्रपिंडात सुमारे १० ते १२ लाख नेफ्रॉन्स असतात); बोमन्स संपुट (Bowman's Capsule) व केशिकागुच्छ (Glomerulus) द्वारे रक्ताचे गाळण होते; मूत्रपिंड निकामी झाल्यास रक्तातील युरिया बाहेर काढण्यासाठी 'डायलिसिस' (रक्तअपोहन / Hemodialysis) करतात",
                                            titleEn: "Renal System & The Nephron: Filters nitrogenous metabolic waste (Urea); Kidneys comprise outer cortex and inner medulla; Functional and structural filtration unit is the 'Nephron' (~1-1.2 million per kidney); Glomerulus and Bowman's capsule perform ultrafiltration; Hemodialysis acts as artificial kidney during acute renal failure",
                                            chips: ["उत्सर्जन संस्था (मूत्रपिंड Kidney)", "कार्यात्मक घटक नेफ्रॉन (Nephron)", "बोमन्स संपुट (अतिसूक्ष्म गाळण)", "डायलिसिस Hemodialysis (युरिया काढणे)"]
                                        },
                                        {
                                            id: "st_gc_s16_01_02",
                                            titleMr: "मानवी मेंदू व चेतासंस्था (Nervous System): मेंदूचे वजन सुमारे १,३०० ते १,४०० ग्रॅम; ३ प्रमुख भाग: १) प्रमस्तिष्क (Cerebrum - मेंदूचा सर्वात मोठा भाग, बुद्धिमत्ता, स्मृती, विचार, तर्क, आणि भावनांचे केंद्र); २) अनुमस्तिष्क (Cerebellum - शरीराचा तोल सांभाळणे, ऐच्छिक हालचालींचे समन्वय - दारू प्यायल्यास अनुमस्तिष्कावर परिणाम होतो); ३) मस्तिष्कमज्जा (Medulla Oblongata - अनैच्छिक क्रियांचे नियंत्रण: हृदयाचे ठोके, श्वासोच्छ्वास, खोकणे, शिंकणे); ४) मज्जारज्जू (Spinal Cord): 'प्रतिक्षिप्त क्रियांचे' (Reflex Actions) नियंत्रण केंद्र",
                                            titleEn: "Neuroanatomy & Brain Centers: Brain weighs ~1300-1400g; 1) Cerebrum (Largest forebrain lobe, seat of memory, cognitive intellect, sensory perception); 2) Cerebellum (Controls motor muscle coordination and bodily balance, impaired by alcohol); 3) Medulla Oblongata (Regulates autonomic involuntary actions: cardiac pace, breathing, sneezing); 4) Spinal Cord (Mediates rapid autonomic Reflex Arcs)",
                                            chips: ["प्रमस्तिष्क Cerebrum (बुद्धिमत्ता, विचार)", "अनुमस्तिष्क Cerebellum (शरीराचा तोल सांभाळणे)", "मस्तिष्कमज्जा Medulla (अनैच्छिक क्रिया श्वास, हृदय)", "मज्जारज्जू (प्रतिक्षिप्त क्रिया Reflex Action)"]
                                        },
                                        {
                                            id: "st_gc_s16_01_03",
                                            titleMr: "अंतःस्रावी ग्रंथी व हार्मोन्स (Endocrine Glands): १) पियुषिका ग्रंथी (Pituitary Gland - मेंदूच्या तळाशी): 'मास्टर ग्रंथी' (Master Gland); वाढ संप्रेरक (GH) स्रवते (कमतरतेने खुजेपणा Dwarfism, अतिस्रवण्याने अतिवृद्धी Gigantism); २) थायरॉईड ग्रंथी (गळ्यात): 'थायरॉक्सिन' स्रवते (उपापचय क्रिया नियंत्रण; आहारातील आयोडीनच्या कमतरतेने 'गलगंड' / Simple Goitre आजार होतो); ३) स्वादुपिंड (Islets of Langerhans): बीटा पेशींमधून 'इन्सुलिन' (रक्तातील ग्लुकोज पातळी कमी करते, कमतरतेने 'मधुमेह' Diabetes Mellitus होतो) आणि अल्फा पेशींमधून 'ग्लुकागॉन'; ४) एड्रिनल ग्रंथी (मूत्रपिंडावर): 'एड्रिनलिन' (आपत्कालीन संप्रेरक - Fight or Flight Hormone)",
                                            titleEn: "Endocrine Glands & Hormones: 1) Pituitary ('Master Gland' at brain base; Growth Hormone GH regulation: deficiency causes Dwarfism, excess causes Gigantism); 2) Thyroid (Thyroxine regulates basal metabolic rate; Iodine deficiency triggers Simple Goitre); 3) Pancreatic Islets of Langerhans (Beta cells secrete Insulin reducing blood glucose; deficiency triggers Diabetes Mellitus; Alpha cells secrete Glucagon); 4) Adrenal Glands (Adrenaline emergency 'Fight-or-Flight' hormone)",
                                            chips: ["पियुषिका Pituitary (मास्टर ग्रंथी)", "थायरॉईड (थायरॉक्सिन आयोडीन गलगंड)", "इन्सुलिन (बीटा पेशी, मधुमेह Diabetes)", "एड्रिनलिन (संकटकालीन Fight or Flight संप्रेरक)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सामान्य विज्ञान", standard: "डॉ. सचिन भस्के", chapterRef: "मानवी शरीरशास्त्र: उत्सर्जन, चेतासंस्था व अंतःस्रावी ग्रंथी" },
                                        { book: "NCERT Class 11 Biology", standard: "NCERT", chapterRef: "Neural Control, Excretory Products & Chemical Coordination" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // विभाग D — आरोग्यशास्त्र व रोग (Hygiene, Nutrition & Diseases)
                        // =========================================================================
                        {
                            id: "gc_sci_c17",
                            code: "CS17",
                            section: "D",
                            slug: "human-nutrition-vitamins-minerals-and-infectious-diseases",
                            nameMr: "आरोग्यशास्त्र: मानवी पोषण, जीवनसत्त्वे (Vitamins), खनिजे व संसर्गजन्य रोग",
                            nameEn: "Hygiene & Epidemiology: Human Nutrition, Vitamins, Minerals & Pathogenic Diseases",
                            name: "जीवनसत्त्वे, पोषण व मानवी रोग",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_sci_c17",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_sci_c16",
                            nextChapterId: "gc_sci_c18",
                            metaDescriptionMr: "जीवनसत्त्वे (A रेटिनॉल, B-कॉम्प्लेक्स, C ॲस्कॉर्बिक ॲसिड, D कॅल्सिफेरॉल, E टोकोफेरॉल, K - पाण्यात vs मेदात विरघळणारी), अभावजन्य आजार (रातांधळेपणा, स्कर्व्ही, मुडदूस), जिवाणूजन्य रोग (क्षय TB, कॉलरा, टायफॉईड), विषाणूजन्य रोग (एड्स HIV, पोलिओ, रेबीज, काविळ), आणि डासांचे रोग (मलेरिया, डेंग्यू).",
                            metaDescriptionEn: "Vitamins chemistry (Water-soluble B/C vs Fat-soluble A/D/E/K, scientific names, deficiency diseases: Night blindness, Scurvy, Rickets, Beriberi), Bacterial infections (TB, Cholera, Typhoid), Viral pathogens (HIV/AIDS, Polio, Rabies, Hepatitis), and Vector-borne diseases (Malaria, Dengue, Chikungunya).",
                            notesJsonPath: "/data/notes/group_c/prelims/science/c17_vitamins_nutrition_diseases.json",
                            quizTag: "gc_sci_diseases_01",
                            tags: ["Hygiene Nutrition", "Vitamins Fat Soluble ADEK", "Water Soluble BC", "Deficiency Scurvy Rickets", "Bacterial Diseases TB Typhoid", "Viral Diseases HIV Polio", "Malaria Dengue", "High-Weightage"],
                            searchKeywords: ["vitamins classification fat soluble a d e k water soluble b c", "vitamin scientific names a retinol b1 thiamine c ascorbic acid d calciferol", "deficiency diseases night blindness beriberi scurvy rickets kwashiorkor", "bacterial diseases tuberculosis mycobacterium cholera salmonella typhoid widal test", "viral diseases aids hiv elisa western blot polio rabies hepatitis", "vector borne diseases malaria plasmodium female anopheles dengue aedes aegypti", "जीवनसत्त्वे मेदात विरघळणारी ADEK पाण्यात BC", "जीवनसत्त्वे रासायनिक नावे रेटिनॉल थायामिन ॲस्कॉर्बिक ॲसिड", "अभावजन्य रोग रातांधळेपणा स्कर्व्ही मुडदूस बेरीबेरी", "जिवाणूजन्य रोग क्षय TB कॉलरा टायफॉईड विडाल चाचणी", "विषाणूजन्य रोग एड्स पोलिओ रेबीज काविळ", "मलेरिया डास ॲनोफिलीस डेंग्यू एडिस इजिप्ती", "लसीकरण BCG पोलिओ"],
                            topics: [
                                {
                                    id: "top_gc_s17_01",
                                    nameMr: "जीवनसत्त्वांची रासायनिक नावे व अभावजन्य रोग, जिवाणू-विषाणूजन्य आजार आणि रोगप्रतिकार",
                                    nameEn: "Vitamin Micronutrient Profiling, Pathogenic Etiology & Vector Epidemiology",
                                    subtopics: [
                                        {
                                            id: "st_gc_s17_01_01",
                                            titleMr: "जीवनसत्त्वे (Vitamins) वर्गीकरण व कमतरतेचे आजार (MPSC हमखास प्रश्न): १) मेदात विरघळणारी (Fat Soluble: A, D, E, K); २) पाण्यात विरघळणारी (Water Soluble: B-Complex व C); अ) जीवनसत्त्व A (रेटिनॉल Retinol) - अभावामुळे 'रातांधळेपणा' (Night Blindness) व झेरोप्थाल्मिया; ब) B1 (थायामिन) - 'बेरीबेरी'; B3 (नियासिन) - 'पेलाग्रा'; B12 (सायनोकोबालामीन - कोबाल्ट धातू असतो) - 'ॲनिमिया'; क) जीवनसत्त्व C (ॲस्कॉर्बिक ॲसिड) - 'स्कर्व्ही' (हिरड्यांमधून रक्त येणे); ड) जीवनसत्त्व D (कॅल्सिफेरॉल - सूर्यप्रकाशातून मिळते) - लहान मुलांत 'मुडदूस' (Rickets); इ) जीवनसत्त्व E (टोकोफेरॉल) - वंध्यत्व (Infertility); फ) जीवनसत्त्व K (फायलोक्विनोन) - रक्त गोठण्याची क्रिया मंदावणे",
                                            titleEn: "Vitamin Chemistry & Deficiency Pathologies: Fat-Soluble (A, D, E, K) vs Water-Soluble (B-Complex, C); Vit A (Retinol - Night Blindness, Xerophthalmia); Vit B1 (Thiamine - Beriberi); Vit B3 (Niacin - Pellagra); Vit B12 (Cyanocobalamin containing Cobalt - Pernicious Anemia); Vit C (Ascorbic Acid - Scurvy, bleeding gums); Vit D (Calciferol - Rickets in children, Osteomalacia in adults); Vit E (Tocopherol - Infertility); Vit K (Phylloquinone - Impaired blood coagulation)",
                                            chips: ["मेदात विरघळणारी (A, D, E, K)", "पाण्यात विरघळणारी (B व C)", "Vit A रेटिनॉल (रातांधळेपणा)", "Vit C ॲस्कॉर्बिक (स्कर्व्ही)", "Vit D कॅल्सिफेरॉल (मुडदूस Rickets)", "Vit K (रक्त गोठवणे)"]
                                        },
                                        {
                                            id: "st_gc_s17_01_02",
                                            titleMr: "जिवाणूजन्य रोग (Bacterial Diseases): १) क्षयरोग (Tuberculosis / TB): मायकोबॅक्टेरियम ट्युबरक्युलॉसिस; फुप्फुसांना संसर्ग, तपासणी: स्प्युटम चाचणी, लस: 'BCG लस', उपचार: DOTS पद्धत; २) टायफॉईड (विषमज्वर): साल्मोनेला टायफी; आतड्यांना संसर्ग, तपासणी: 'विडाल चाचणी' (Widal Test); ३) कॉलरा (पटकी): व्हिब्रिओ कॉलरी (दूषित अन्न व पाण्यातून); ४) कुष्ठरोग (Leprosy): मायकोबॅक्टेरियम लेप्री (डॉ. हॅन्सन रोग), MDT उपचार; ५) प्लेग (येर्सिनिया पेस्टिस - उंदरांवरील पिसवांमुळे)",
                                            titleEn: "Bacterial Pathogens: Tuberculosis (Mycobacterium tuberculosis; diagnosed via Sputum test/Mantoux, prevented via BCG vaccine, treated via DOTS therapy); Typhoid (Salmonella typhi; diagnosed via Widal Test); Cholera (Vibrio cholerae via waterborne contamination); Leprosy (Mycobacterium leprae, Hansen's disease treated via Multi-Drug Therapy MDT); Plague (Yersinia pestis via rat fleas)",
                                            chips: ["क्षय TB (मायकोबॅक्टेरियम, BCG लस, DOTS)", "टायफॉईड (विडाल चाचणी Widal Test)", "कॉलरा (व्हिब्रिओ कॉलरी)", "कुष्ठरोग (हॅन्सन रोग MDT उपचार)"]
                                        },
                                        {
                                            id: "st_gc_s17_01_03",
                                            titleMr: "विषाणूजन्य व डासांमुळे होणारे रोग: १) एड्स (AIDS): Human Immunodeficiency Virus (HIV - रेट्रोव्हायरस); पांढऱ्या रक्तपेशींमधील T-लिम्फोसाईट (CD4 पेशी) नष्ट करतो; निदान चाचण्या: ELISA टेस्ट (प्राथमिक) व वेस्टर्न ब्लॉट (Western Blot निश्चिती चाचणी); २) पोलिओ (Poliovirus): चेतासंस्थेवर हल्ला, लस: साल्क लस (इंजेक्शन) व साबिन लस (तोंडावाटे पोलियो डोस OPV); ३) काविळ (Hepatitis): यकृताचा संसर्ग; ४) रेबीज (हायड्रोफोबिया / पाण्याची भीती - पिसाळलेला कुत्रा चावल्याने); ५) डासांमुळे होणारे रोग: अ) मलेरिया (हिवताप): 'प्लास्मोडियम' आदिजीवामुळे (Protozoa), प्रसार 'ॲनोफिलीस डासाची मादी' (Female Anopheles); ब) डेंग्यू (Dengue): फ्लेविव्हायरस, प्रसार 'एडिस इजिप्ती' (Aedes aegypti डासाची मादी - दिवसा चावतो, प्लेटलेट्स वेगाने कमी होतात); क) हत्तीरोग (हत्तीपाय Elephantiasis): क्युलेक्स (Culex) डासामुळे",
                                            titleEn: "Viral & Vector-Borne Pathologies: AIDS (HIV Retrovirus destroying CD4 T-cells; Screening: ELISA, Confirmatory: Western Blot); Polio (Poliovirus; Salk injectable vaccine and Sabin Oral Polio Vaccine OPV); Rabies (Rhabdovirus Hydrophobia via rabid bites); Hepatitis (Viral liver inflammation); Vector-borne: Malaria (Plasmodium protozoa transmitted by Female Anopheles mosquito); Dengue (Flavivirus transmitted by Aedes aegypti mosquito crashing platelet counts); Elephantiasis/Filariasis (Culex mosquito vector)",
                                            chips: ["एड्स HIV (ELISA व वेस्टर्न ब्लॉट चाचणी)", "पोलिओ (साल्क व साबिन लस OPV)", "रेबीज (हायड्रोफोबिया पाण्याची भीती)", "मलेरिया (ॲनोफिलीस डासाची मादी Plasmodium)", "डेंग्यू (एडिस इजिप्ती डास प्लेटलेट्स घसरण)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सामान्य विज्ञान", standard: "डॉ. सचिन भस्के", chapterRef: "आरोग्यशास्त्र: जीवनसत्त्वे, पोषण व मानवी रोग" },
                                        { book: "NCERT Class 12 Biology", standard: "NCERT", chapterRef: "Chapter 8: Human Health and Disease" }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "gc_sci_c18",
                            code: "CS18",
                            section: "D",
                            slug: "prelims-science-master-revision-scientific-instruments-and-pyq-trends",
                            nameMr: "पूर्व परीक्षा सामान्य विज्ञान मास्टर रिव्हिजन, वैज्ञानिक उपकरणे व १० वर्षांचे PYQ ट्रेंड्स",
                            nameEn: "Prelims Science Master Consolidation: Scientific Apparatus, Discoveries & 10-Year PYQ Insights",
                            name: "विज्ञान मास्टर रिव्हिजन व उपकरणे",
                            category: "REVISION",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_sci_c18",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_sci_c17",
                            nextChapterId: null,
                            metaDescriptionMr: "वैज्ञानिक उपकरणे व वापर (बॅरोमीटर, लॅक्टोमीटर, हायग्रोमीटर, सोनार, स्फिग्मोमॅनोमीटर), महत्त्वाचे शोध व शास्त्रज्ञ, विज्ञानातील गणितीय प्रश्नांचे फॉर्म्युले, आणि २०१३ ते २०२५ मधील MPSC गट-क पूर्व परीक्षा PYQ विश्लेषण.",
                            metaDescriptionEn: "Scientific apparatus concordance (Barometer, Lactometer, Hygrometer, Sonar, Stethoscope, Sphygmomanometer), Landmark scientific discoveries, Numerical Physics/Chemistry formulas, and 10-Year MPSC Group C trend analytics.",
                            notesJsonPath: "/data/notes/group_c/prelims/science/c18_master_revision_apparatus.json",
                            quizTag: "gc_sci_revision_01",
                            tags: ["Revision", "Prelims Strategy", "15 Marks Target", "Scientific Instruments", "Discoveries Matrix", "PYQ Trends 2013 to 2025", "High-Weightage"],
                            searchKeywords: ["scientific instruments and uses barometer atmospheric pressure", "lactometer milk purity hygrometer humidity fathometer ocean depth", "pyrometer high temperature cardiogram ecg eeg brain", "mpsc prelims general science 15 questions strategy pyq trends 2013 to 2025", "physics numericals formulas science elimination techniques", "वैज्ञानिक उपकरणे व उपयोग बॅरोमीटर हवेचा दाब", "लॅक्टोमीटर दुधाची शुद्धता हायग्रोमीटर आर्द्रता", "फॅथोमीटर समुद्राची खोली", "ECG हृदय EEG मेंदू", "विज्ञान पूर्व परीक्षा रणनीती १५ पैकी १३+ गुण", "१० वर्षांचे PYQ विश्लेषण"],
                            topics: [
                                {
                                    id: "top_gc_s18_01",
                                    nameMr: "वैज्ञानिक उपकरणांची मास्टर सूची, महत्त्वाचे शोध आणि १० वर्षांचे MPSC PYQ विश्लेषण",
                                    nameEn: "Scientific Apparatus Concordance, Foundational Inventions & 10-Year PYQ Insights",
                                    subtopics: [
                                        {
                                            id: "st_gc_s18_01_01",
                                            titleMr: "वैज्ञानिक उपकरणे व त्यांचे उपयोग (MPSC वारंवार विचारते): १) बॅरोमीटर (Barometer - टोरीसेली): वातावरणाचा हवेचा दाब मोजणे; २) लॅक्टोमीटर (Lactometer): दुधाची सापेक्ष घनता व शुद्धता मोजणे; ३) हायग्रोमीटर (Hygrometer): हवेतील आर्द्रता (बाष्प) मोजणे; ४) ॲनिमोमीटर (Anemometer): वाऱ्याचा वेग मोजणे; ५) फॅथोमीटर (Fathometer): समुद्राची खोली मोजणे; ६) पायरोमीटर (Pyrometer): अतिउच्च तापमान मोजणे; ७) स्फिग्मोमॅनोमीटर: रक्तदाब मोजणे; ८) स्टेथॉस्कोप (Stethoscope): हृदयाचे ठोके ऐकणे; ९) ECG (इलेक्ट्रोकार्डिओग्राम): हृदयाची कार्यक्षमता; १०) EEG (इलेक्ट्रोएन्सेफॅलोग्राम): मेंदूची कार्यक्षमता",
                                            titleEn: "Scientific Instruments & Measurements: Barometer (Atmospheric pressure, Torricelli); Lactometer (Milk density/purity); Hygrometer (Relative atmospheric humidity); Anemometer (Wind speed); Fathometer (Ocean depth); Pyrometer (High temperatures); Sphygmomanometer (Blood pressure); Stethoscope (Acoustic cardiac auscultation); ECG (Heart electrical vectors); EEG (Brain electrophysiology)",
                                            chips: ["बॅरोमीटर (हवेचा दाब)", "लॅक्टोमीटर (दूध शुद्धता)", "हायग्रोमीटर (हवेतील आर्द्रता)", "फॅथोमीटर (समुद्र खोली)", "पायरोमीटर (उच्च तापमान)", "ECG हृदय vs EEG मेंदू"]
                                        },
                                        {
                                            id: "st_gc_s18_01_02",
                                            titleMr: "महत्त्वाचे वैज्ञानिक शोध व शास्त्रज्ञ: १) पेनिसिलिन (पहिले अँटिबायोटिक): अलेक्झांडर फ्लेमिंग (१९२८); २) देवीची लस (जगातील पहिली लस): एडवर्ड जेनर (१७९६); ३) पोलिओ लस: जोनास साल्क (इंजेक्शन) व अल्बर्ट साबिन (तोंडी डोस); ४) रक्ताभिसरण: विल्यम हार्वे (१६२८); ५) रक्तगट: कार्ल लँडस्टेनर (१९००); ६) क्ष-किरण (X-Rays): विल्यम रॉन्टजेन (१८९५); ७) रेडियम व पोलोनियम: मेरी क्युरी; ८) डीएनए रचना (Double Helix): वॉटसन आणि क्रिक (१९५३)",
                                            titleEn: "Milestone Discoveries in Science: Penicillin (First antibiotic, Alexander Fleming 1928); Smallpox Vaccine (First vaccine, Edward Jenner 1796); Polio Vaccines (Jonas Salk IPV & Albert Sabin OPV); Blood Circulation (William Harvey 1628); Blood Groups (Karl Landsteiner 1900); X-Rays (Wilhelm Roentgen 1895); Radium (Marie Curie); DNA Double Helix (Watson & Crick 1953)",
                                            chips: ["पेनिसिलिन (अलेक्झांडर फ्लेमिंग)", "देवीची लस (एडवर्ड जेनर)", "क्ष-किरण X-Rays (रॉन्टजेन)", "डीएनए द्विसर्पिल (वॉटसन व क्रिक)"]
                                        },
                                        {
                                            id: "st_gc_s18_01_03",
                                            titleMr: "MPSC पूर्व परीक्षा विज्ञान १० वर्षांचे विश्लेषण (१५ पैकी १३+ गुण रणनीती): प्रश्न वितरणाचा कल: भौतिकशास्त्र (४-५ प्रश्न - गती, प्रकाश, ध्वनी, विद्युत व साधी गणिते), रसायनशास्त्र (३-४ प्रश्न - आवर्तसारणी, धातू-अधातू, आम्ल-आम्लारी, संयुगे), जीवशास्त्र (४-५ प्रश्न - पेशी, वर्गीकरण, मानवी संस्था), आरोग्यशास्त्र (३-४ प्रश्न - हमखास जीवनसत्त्वे व मानवी रोग); राज्य पाठ्यपुस्तक मंडळ (८ वी ते १० वी) व NCERT च्या मूलभूत संकल्पनांवर भर; एलिमिनेशन तंत्राने अचूक उत्तर शोधणे",
                                            titleEn: "10-Year MPSC Group C Science Trend Analytics (13+/15 Strategy): Question distribution: Physics (4-5 Qs: Mechanics, Optics, Sound, Electricity & numericals), Chemistry (3-4 Qs: Periodic table, Metals, Acids/Bases), Biology (4-5 Qs: Cytology, Botany/Zoology taxonomy, Organ systems), Hygiene (3-4 Qs guaranteed on Vitamins and Infectious Diseases); Synthesis of Balbharati (Std 8-10) and NCERT concepts",
                                            chips: ["PYQ ट्रेंड्स विश्लेषण", "१५ पैकी १३+ गुण रणनीती", "जीवनसत्त्वे व रोग हमखास प्रश्न", "भौतिकशास्त्र गणिते सूत्रे", "८ वी ते १० वी बालभारती गाभा"]
                                        }
                                    ],
                                    sources: [
                                        { book: "सामान्य विज्ञान", standard: "डॉ. सचिन भस्के", chapterRef: "मास्टर उजळणी व वैज्ञानिक उपकरणे" },
                                        { book: "MPSC मागील वर्षांच्या प्रश्नपत्रिका संच", standard: "२०१३ ते २०२५", chapterRef: "सामान्य विज्ञान पूर्व परीक्षा प्रश्न विश्लेषण" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },


        // ६. चालू घडामोडी (`gc_pre_current_affairs`)
        {
            id: "gc_pre_current_affairs",
            code: "CA",
            slug: "current-affairs-maharashtra-india-global",
            nameMr: "चालू घडामोडी (जागतिक, भारत व विशेषतः महाराष्ट्र)",
            nameEn: "Current Affairs (Global, National & Maharashtra Focus)",
            name: "चालू घडामोडी (Current Affairs)",
            officialScope: "Current events of state, national and international importance covering Schemes, Summits, Awards, Sports, Defense, and Scientific achievements",
            version: "1.0",
            verifiedDate: "2026-10-28",
            notesJsonBaseDir: "/data/notes/group_c/prelims/current_affairs/",
            theme: { primaryColor: "#e11d48", bgColor: "#fff1f2", iconClass: "ri-newspaper-line" },
            metrics: { totalChapters: 14, totalEstimatedHours: 42, avgQuestionsInPrelims: 15, targetMarks: 15, weightageRange: "14-16 Questions" },
            subjectTags: ["Core-GS", "Group-C-Prelims", "Combined-Common", "Dynamic-Factual", "High-Scoring"],
            filterCategory: "GS",
            searchKeywords: ["mpsc group c current affairs", "maharashtra schemes sports awards summits", "चालू घडामोडी"],
            referenceSources: [
                { name: "पृथ्वी परिक्रमा मासिक", role: "नियमित चालू घडामोडी" },
                { name: "सिम्पलीफाइड चालू घडामोडी - डॉ. सुशील बारी", role: "मायक्रो विश्लेषण" }
            ],
            chapters: [
                {
                    id: "gc_pre_current_affairs",
                    code: "CA",
                    slug: "current-affairs-maharashtra-india-global-prelims",
                    nameMr: "चालू घडामोडी (जागतिक, भारत व विशेषतः महाराष्ट्र)",
                    nameEn: "Current Affairs (Global, National & Maharashtra Focus)",
                    name: "चालू घडामोडी (Current Affairs)",
                    officialScope: "Contemporary Events of Global, National and State Significance for MPSC Group C Combined Prelims: Political Dynamics, Judicial Verdicts, State Welfare Schemes (Mukhyamantri Ladki Bahin, Yuva Karya Prashikshan), Central Flagship Missions, Union & State Budgets, Global & National Indices, Environment Summits & Tiger Census, Defense Exercises & Missile Tests, Space Science & ISRO Probes (Chandrayaan-3, Aditya-L1, Gaganyaan), Sports (Paris Olympics, T20 World Cup), Prestigious Awards (Bharat Ratna, Nobel, Jnanpith), Summits (G20, BRICS), High-Profile Appointments, Obituaries, and Fact Matrices",
                    version: "1.0",
                    verifiedDate: "2026-10-28",
                    notesJsonBaseDir: "/data/notes/group_c/prelims/current_affairs/",


                    theme: {
                        primaryColor: "#e11d48",        // Crimson Flame / Dynamic News Alert
                        bgColor: "#fff1f2",
                        iconClass: "ri-newspaper-line"
                    },


                    metrics: {
                        totalChapters: 14,
                        totalEstimatedHours: 42,
                        avgQuestionsInPrelims: 15,
                        targetMarks: 15,
                        weightageRange: "14-15 Questions"
                    },


                    subjectTags: [
                        "Core-GS",
                        "Group-C-Prelims",
                        "Pre-Cum-Mains",
                        "Dynamic-Factual",
                        "High-Scoring",
                        "Maharashtra-Heavy",
                        "Standard-Parikrama-Simplified"
                    ],


                    filterCategory: "GS",
                    searchKeywords: [
                        "mpsc group c current affairs prelims syllabus", "maharashtra government schemes ladki bahin yojana",
                        "isro missions chandrayaan 3 aditya l1 gaganyaan", "paris olympics 2024 medals swapnil kusale",
                        "nobel prizes bharat ratna awards jnanpith", "national indices niti aayog sdg mpi",
                        "military exercises g20 brics summit", "new criminal laws bns bnss bsa",
                        "चालू घडामोडी पूर्व परीक्षा", "लाडकी बहीण योजना महाराष्ट्र", "इस्रो मोहिमे चांद्रयान ३", "पॅरिस ऑलिम्पिक २०२४", "भारतरत्न नोबेल पुरस्कार", "नवीन फौजदारी कायदे BNS"
                    ],


                    referenceSources: [
                        {
                            name: "पृथ्वी परिक्रमा मासिक",
                            role: "मासिक घडामोडींचे सर्वसमावेशक व विश्लेषणात्मक मासिक"
                        },
                        {
                            name: "सिम्पलीफाइड चालू घडामोडी - डॉ. सुशील बारी",
                            role: "स्पर्धा परीक्षाभिमुख फॅक्ट्स, चार्ट्स व अचूक रिव्हिजन"
                        },
                        {
                            name: "लोकराज्य मासिक",
                            role: "महाराष्ट्र शासन माहिती व जनसंपर्क महासंचालनालय अधिकृत योजना संदर्भ"
                        },
                        {
                            name: "प्रेस इन्फॉर्मेशन ब्युरो (PIB) व अधिकृत पोर्टल",
                            role: "केंद्र शासकीय धोरणे व राष्ट्रीय घडामोडी अधिकृत डेटा"
                        }
                    ],


                    chapters: [
                        // =========================================================================
                        // प्रकरण १: राजकीय घडामोडी, घटनात्मक पदे, निवडणुका व नवीन कायदे
                        // =========================================================================
                        {
                            id: "gc_ca_c01",
                            code: "CC01",
                            section: "A",
                            slug: "political-developments-elections-and-new-criminal-laws",
                            nameMr: "राजकीय घडामोडी, घटनात्मक पदे, निवडणुका व नवीन फौजदारी कायदे",
                            nameEn: "Political Affairs: General Elections, Landmark Acts (BNS, BNSS, BSA) & Constitutional Benches",
                            name: "राजकीय घडामोडी व नवीन कायदे",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_ca_c01",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: null,
                            nextChapterId: "gc_ca_c02",
                            metaDescriptionMr: "१८ व्या लोकसभा निवडणुका निकाल विश्लेषण, नवीन फौजदारी कायदे (भारतीय न्याय संहिता BNS, BNSS, BSA - १ जुलै २०२४ पासून लागू), मुख्य निवडणूक आयुक्त नियुक्ती कायदा, आणि नारी शक्ती वंदन कायदा.",
                            metaDescriptionEn: "18th Lok Sabha Elections analysis, Tripartite Criminal Codes enforced on 1 July 2024 (Bharatiya Nyaya Sanhita, BNSS, BSA replacing IPC, CrPC, Evidence Act), CEC Appointment Act, and 106th Constitutional Amendment.",
                            notesJsonPath: "/data/notes/group_c/prelims/current_affairs/c01_political_affairs.json",
                            quizTag: "gc_ca_pol_01",
                            tags: ["18th Lok Sabha", "New Criminal Laws BNS 2023", "BNSS CrPC Replacement", "BSA Evidence Act", "Nari Shakti Vandan 106th", "High-Weightage"],
                            searchKeywords: ["18th lok sabha elections 2024 results speaker om birla", "three new criminal laws bharatiya nyaya sanhita bns 2023", "bharatiya nagarik suraksha sanhita bnss replaces crpc", "bharatiya sakshya adhiniyam bsa replaces evidence act 1872 enforced 1 july 2024", "106th constitutional amendment nari shakti vandan adhiniyam 33 percent women reservation", "नवीन फौजदारी कायदे १ जुलै २०२४ BNS BNSS BSA", "१८ वी लोकसभा निवडणूक", "नारी शक्ती वंदन कायदा १०६ वी दुरुस्ती"],
                            topics: [
                                {
                                    id: "top_gc_c01_01",
                                    nameMr: "नवीन तीन फौजदारी कायदे, १८ वी लोकसभा निवडणूक आणि घटनात्मक सुधारणा",
                                    nameEn: "New Criminal Law Enactments, 18th Lok Sabha Results & Key Amendments",
                                    subtopics: [
                                        {
                                            id: "st_gc_c01_01_01",
                                            titleMr: "नवीन तीन फौजदारी कायदे (१ जुलै २०२४ पासून अंमलबजावणी): ब्रिटिशांच्या काळातील जुने कायदे बदलून आधुनिक कायदे लागू केले: १) 'भारतीय न्याय संहिता, २०२३' (BNS - १८६० च्या IPC ऐवजी, ३५८ कलमे; राजद्रोहाऐवजी देशद्रोहाची व्याख्या, मॉब लिंचिंगविरुद्ध फाशीची तरतूद, शून्य एफआयआर Zero FIR तरतूद); २) 'भारतीय नागरिक सुरक्षा संहिता, २०२३' (BNSS - १९७३ च्या CrPC ऐवजी, ५३१ कलमे; ई-एफआयआर, इलेक्ट्रॉनिक साक्ष, फॉरेन्सिक तपास बंधनकारक); ३) 'भारतीय साक्ष अधिनियम, २०२३' (BSA - १८७२ च्या पुरावा कायद्याऐवजी, १७० कलमे; डिजिटल व इलेक्ट्रॉनिक पुरावे कायदेशीर ग्राह्य)",
                                            titleEn: "Three New Criminal Codes (Enforced 1 July 2024): 1) Bharatiya Nyaya Sanhita 2023 (BNS: 358 sections replacing IPC 1860; redefines treason replacing colonial sedition, capital punishment for mob lynching, Zero FIR); 2) Bharatiya Nagarik Suraksha Sanhita 2023 (BNSS: 531 sections replacing CrPC 1973; mandatory forensics, audio-video recording); 3) Bharatiya Sakshya Adhiniyam 2023 (BSA: 170 sections replacing Evidence Act 1872; electronic records as primary evidence)",
                                            chips: ["BNS २०२३ (IPC ऐवजी ३५८ कलमे)", "BNSS २०२३ (CrPC ऐवजी ५३१ कलमे)", "BSA २०२३ (पुरावा कायद्याऐवजी)", "१ जुलै २०२४ अंमलबजावणी", "मॉब लिंचिंग फाशी तरतूद"]
                                        },
                                        {
                                            id: "st_gc_c01_01_02",
                                            titleMr: "१८ व्या लोकसभा निवडणुका व राजकीय घडामोडी: एप्रिल-मे २०२४ मध्ये ७ टप्प्यांत पार पडल्या; एकूण ५४३ जागा; NDA ला २९३ जागा (भाजप २४० जागा) व INDIA आघाडीला २३४ जागा (काँग्रेस ९९ जागा); राहुल गांधी यांची लोकसभेत विरोधी पक्षनेतेपदी निवड (१० वर्षांनंतर विरोधी पक्षनेता नियुक्त); ओम बिर्ला यांची सलग दुसऱ्यांदा लोकसभा अध्यक्षपदी निवड; मुख्य निवडणूक आयुक्त राजीव कुमार",
                                            titleEn: "18th Lok Sabha General Elections (2024): Conducted in 7 phases; NDA won 293 seats (BJP 240); INDIA Alliance secured 234 seats (INC 99); Rahul Gandhi recognized as official Leader of the Opposition (first in 10 years); Om Birla re-elected Lok Sabha Speaker; CEC Rajiv Kumar led polling",
                                            chips: ["१८ वी लोकसभा निवडणूक २०२४", "NDA २९३ vs INDIA २३४ जागा", "राहुल गांधी विरोधी पक्षनेता", "ओम बिर्ला सलग दुसऱ्यांदा अध्यक्ष"]
                                        },
                                        {
                                            id: "st_gc_c01_01_03",
                                            titleMr: "नारी शक्ती वंदन अधिनियम (१०६ वी घटनादुरुस्ती २०२३): संसदेच्या नवीन इमारतीमधील पहिलेच संमत विधेयक (१२८ वे घटनादुरुस्ती विधेयक); लोकसभा, दिल्ली विधानसभा व सर्व राज्य विधानसभांमध्ये महिलांसाठी ३३% (१/३) जागा राखीव ठेवण्याची तरतूद; कलम ३३०A, ३३२A व ३३४A समाविष्ट; मुदत: लागू झाल्यापासून १५ वर्षे; जनगणनेनंतर परिसीमन (Delimitation) झाल्यावर प्रत्यक्ष अंमलबजावणी होणार",
                                            titleEn: "Nari Shakti Vandan Adhiniyam (106th Amendment Act 2023): First historic legislation enacted in the new Parliament building (128th Bill); Reserves 33% seats for women in Lok Sabha, State Assemblies, and Delhi Assembly; Inserts Articles 330A, 332A, 334A; Effective for 15 years following census-delimitation exercise",
                                            chips: ["१०६ वी घटनादुरुस्ती कायदा २०२३", "महिलांसाठी ३३% आरक्षण", "नवीन संसदेतील पहिले विधेयक", "१५ वर्षे मुदत"]
                                        }
                                    ],
                                    sources: [
                                        { book: "पृथ्वी परिक्रमा", standard: "पृथ्वी अकॅडमी", chapterRef: "राजकीय घडामोडी व नवीन कायदे" },
                                        { book: "PIB News Gazette", standard: "Ministry of Law and Justice", chapterRef: "Criminal Law Acts 2023 Gazette Notification" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण २: महाराष्ट्र शासन: कल्याणकारी योजना, महत्त्वाकांक्षी धोरणे व निर्णय
                        // =========================================================================
                        {
                            id: "gc_ca_c02",
                            code: "CC02",
                            section: "A",
                            slug: "maharashtra-government-welfare-schemes-and-policies",
                            nameMr: "महाराष्ट्र शासन: कल्याणकारी योजना, महत्त्वाकांक्षी धोरणे व निर्णय",
                            nameEn: "Maharashtra Government: Flagship Welfare Schemes, Youth Missions & State Policies",
                            name: "महाराष्ट्र शासनाच्या योजना व धोरणे",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_ca_c02",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_ca_c01",
                            nextChapterId: "gc_ca_c03",
                            metaDescriptionMr: "मुख्यमंत्री माझी लाडकी बहीण योजना (दरमहा रु. १५००), मुख्यमंत्री युवा कार्यप्रशिक्षण योजना, लेक लाडकी योजना (१ लाख रुपये अनुदान), नमो शेतकरी महासन्मान निधी, आणि मुख्यमंत्री तीर्थदर्शन योजना.",
                            metaDescriptionEn: "Comprehensive review of Maharashtra State Initiatives: Mukhyamantri Majhi Ladki Bahin Yojana (Rs 1500 monthly transfer), Yuva Karya Prashikshan internship stipend, Lek Ladki conditional cash transfer (Rs 1,01,000 total), Namo Shetkari Mahasanman Nidhi, and Senior Pilgrimage scheme.",
                            notesJsonPath: "/data/notes/group_c/prelims/current_affairs/c02_maharashtra_schemes.json",
                            quizTag: "gc_ca_mh_schemes_01",
                            tags: ["Maharashtra Schemes", "Ladki Bahin Yojana 1500", "Yuva Karya Prashikshan", "Lek Ladki Yojana", "Namo Shetkari Nidhi", "High-Weightage"],
                            searchKeywords: ["mukhyamantri majhi ladki bahin yojana maharashtra eligibility rs 1500 monthly", "mukhyamantri yuva karya prashikshan yojana stipend 12th diploma graduate", "lek ladki yojana girl child financial support 101000", "namo shetkari mahasanman nidhi yojana rs 6000 additional state support", "mukhyamantri teerth darshan yojana senior citizens", "मुख्यमंत्री माझी लाडकी बहीण योजना दरमहा १५००", "मुख्यमंत्री युवा कार्यप्रशिक्षण योजना स्टायपेंड", "लेक लाडकी योजना १ लाख १ हजार", "नमो शेतकरी महासन्मान निधी ६०००"],
                            topics: [
                                {
                                    id: "top_gc_c02_01",
                                    nameMr: "लाडकी बहीण योजना, युवा कार्यप्रशिक्षण, लेक लाडकी आणि शेतकरी अनुदान योजना",
                                    nameEn: "State Direct Benefit Transfers: Ladki Bahin, Youth Apprenticeships & Farm Welfare",
                                    subtopics: [
                                        {
                                            id: "st_gc_c02_01_01",
                                            titleMr: "मुख्यमंत्री माझी लाडकी बहीण योजना (२०२४): महाराष्ट्र शासनाची अत्यंत लोकप्रिय थेट लाभ हस्तांतरण (DBT) योजना; पात्रता: २१ ते ६५ वर्षे वयोगटातील विवाहित, विधवा, घटस्फोटित, परित्यक्ता व निराधार महिला; कुटुंबाचे वार्षिक उत्पन्न २.५ लाख रुपयांपेक्षा कमी असावे; दरमहा रु. १,५००/- थेट बँक खात्यात जमा (वार्षिक १८,००० रुपये); महिलांचे आर्थिक स्वावलंबन व पोषण सुधारणे हे मुख्य उद्दिष्ट",
                                            titleEn: "Mukhyamantri Majhi Ladki Bahin Yojana (2024): Flagship Direct Benefit Transfer scheme; Eligibility: Women aged 21-65 years residing in Maharashtra with annual family income <Rs 2.5 Lakh; Disburses Rs 1,500/month (Rs 18,000 annually) via Aadhaar-linked bank accounts to promote financial autonomy",
                                            chips: ["लाडकी बहीण योजना (दरमहा रु. १५००)", "वय २१ ते ६५ वर्षे", "वार्षिक उत्पन्न २.५ लाख मर्यादा", "DBT थेट बँक जमा"]
                                        },
                                        {
                                            id: "st_gc_c02_01_02",
                                            titleMr: "मुख्यमंत्री युवा कार्यप्रशिक्षण योजना (२०२४): सुशिक्षित बेरोजगार तरुणांना प्रत्यक्ष कामाचा अनुभव व कौशल्य देण्यासाठी; ६ महिन्यांचे इंटर्नशिप प्रशिक्षण; विद्यावेतन (Monthly Stipend): १२ वी उत्तीर्ण - दरमहा रु. ६,०००/-, आयटीआय किंवा डिप्लोमा - दरमहा रु. ८,०००/-, पदवीधर किंवा पदव्युत्तर - दरमहा रु. १०,०००/-; वयोमर्यादा: १८ ते ३५ वर्षे; खाजगी व सरकारी आस्थापनांमध्ये ऑन-जॉब ट्रेनिंग",
                                            titleEn: "Mukhyamantri Yuva Karya Prashikshan Yojana (2024): 6-month on-the-job internship scheme for unemployed youth aged 18-35; Monthly stipends: 12th pass (Rs 6,000), ITI/Diploma (Rs 8,000), Graduates/Postgraduates (Rs 10,000) directly funded by state",
                                            chips: ["युवा कार्यप्रशिक्षण योजना", "विद्यावेतन ६००० ते १०००० रु.", "६ महिने इंटर्नशिप", "वय १८ ते ३५ वर्षे"]
                                        },
                                        {
                                            id: "st_gc_c02_01_03",
                                            titleMr: "लेक लाडकी व नमो शेतकरी महासन्मान निधी: १) लेक लाडकी योजना (१ एप्रिल २०२३ नंतर जन्मलेल्या मुलींसाठी): पिवळे व केशरी रेशनकार्डधारक कुटुंबातील मुलीला जन्मल्यापासून १८ वर्षे पूर्ण होईपर्यंत विविध टप्प्यांवर एकूण रु. १,०१,०००/- ची आर्थिक मदत (जन्म ५०००, पहिली ६०००, सहावी ७०००, अकरावी ८००० व १८ वर्षे झाल्यावर ७५,००० रुपये); २) नमो शेतकरी महासन्मान निधी: केंद्र सरकारच्या PM-किसान योजनेच्या ६,००० रुपयांव्यतिरिक्त महाराष्ट्र शासनाकडून अतिरिक्त रु. ६,०००/- वार्षिक अनुदान (शेतकऱ्यांना वर्षाला एकूण १२,००० रुपये मिळतात)",
                                            titleEn: "Lek Ladki & Namo Shetkari Nidhi: Lek Ladki Yojana grants cumulative financial support of Rs 1,01,000 across 5 milestones up to age 18 for daughters in yellow/orange cardholder families; Namo Shetkari Mahasanman Nidhi provides supplementary Rs 6,000 annually from State on top of Centre's PM-KISAN, totaling Rs 12,000/year to farmers",
                                            chips: ["लेक लाडकी योजना (एकूण रु. १,०१,०००)", "पाच टप्प्यांत अनुदान", "नमो शेतकरी महासन्मान निधी (रु. ६०००)", "शेतकऱ्यांना वार्षिक १२,००० रु."]
                                        }
                                    ],
                                    sources: [
                                        { book: "लोकराज्य मासिक", standard: "माहिती व जनसंपर्क महासंचालनालय", chapterRef: "महाराष्ट्र शासनाचे अर्थसंकल्पीय कल्याणकारी निर्णय" },
                                        { book: "सिम्पलीफाइड चालू घडामोडी", standard: "डॉ. सुशील बारी", chapterRef: "महाराष्ट्र शासन विशेष योजना" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ३: केंद्र सरकारच्या प्रमुख योजना, फ्लॅगशिप मिशन्स व सामाजिक विकास
                        // =========================================================================
                        {
                            id: "gc_ca_c03",
                            code: "CC03",
                            section: "A",
                            slug: "central-government-flagship-schemes-and-social-missions",
                            nameMr: "केंद्र सरकारच्या प्रमुख योजना, फ्लॅगशिप मिशन्स व सामाजिक विकास",
                            nameEn: "Union Government Flagship Schemes, Direct Transfers & Social Missions",
                            name: "केंद्र सरकारच्या प्रमुख योजना",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_ca_c03",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_ca_c02",
                            nextChapterId: "gc_ca_c04",
                            metaDescriptionMr: "पीएम सूर्यघर मोफत वीज योजना (३०० युनिट मोफत वीज), पीएम विश्वकर्मा योजना (पारंपारिक कारागीर), आयुष्मान भारत ५ लाख विमा (७० वर्षांवरील सर्व ज्येष्ठ नागरिकांचा समावेश), लखपती दीदी, आणि पीएम किसान.",
                            metaDescriptionEn: "Key Central Interventions: PM Surya Ghar Muft Bijli Yojana (300 free solar units), PM Vishwakarma Scheme (traditional artisans credit), Ayushman Bharat PM-JAY expansion to all seniors aged 70+, Lakhpati Didi SHG program, and PM-KISAN.",
                            notesJsonPath: "/data/notes/group_c/prelims/current_affairs/c03_central_schemes.json",
                            quizTag: "gc_ca_cen_schemes_01",
                            tags: ["PM Surya Ghar Solar", "PM Vishwakarma 18 Trades", "Ayushman Bharat 70 Plus Years", "Lakhpati Didi 3 Crore", "PM Kisan DBT", "High-Weightage"],
                            searchKeywords: ["pm surya ghar muft bijli yojana rooftop solar 300 units 75000 crore", "pm vishwakarma yojana 18 traditional trades collateral free loan", "ayushman bharat pm jay health cover expanded 70 years and above all seniors", "lakhpati didi scheme self help groups 3 crore target", "pradhan mantri kisan samman nidhi pm kisan 6000 3 installments", "पीएम सूर्यघर मोफत वीज योजना रूफटॉप सोलर", "पीएम विश्वकर्मा योजना १८ पारंपारिक व्यवसाय", "आयुष्मान भारत ७० वर्षांवरील ज्येष्ठ नागरिक ५ लाख विमा", "लखपती दीदी ३ कोटी महिला", "पीएम किसान सन्मान निधी"],
                            topics: [
                                {
                                    id: "top_gc_c03_01",
                                    nameMr: "पीएम सूर्यघर, पीएम विश्वकर्मा, आयुष्मान भारत ज्येष्ठ नागरिक विस्तार व लखपती दीदी",
                                    nameEn: "PM Surya Ghar, PM Vishwakarma Craftsmen Support, Universal Senior Healthcare & Lakhpati Didi",
                                    subtopics: [
                                        {
                                            id: "st_gc_c03_01_01",
                                            titleMr: "पीएम सूर्यघर मोफत वीज योजना (२०२४): १ कोटी घरांच्या छतावर रूफटॉप सोलर पॅनेल बसवून दरमहा ३०० युनिटपर्यंत मोफत वीज देणे; एकूण ७५,०२१ कोटी रुपयांची तरतूद; १ किलोवॅटसाठी रु. ३०,०००/- आणि २ किलोवॅटसाठी रु. ६०,०००/- पर्यंत थेट सरकारी सबसिडी; अतिरिक्त वीज ग्रीडला विकून उत्पन्न मिळवण्याची संधी",
                                            titleEn: "PM Surya Ghar Muft Bijli Yojana (2024): Installed rooftop solar systems for 1 crore households offering up to 300 units of free electricity monthly; Outlay of Rs 75,021 Cr providing direct central subsidies up to Rs 78,000 based on kilowatt capacity with grid net-metering",
                                            chips: ["पीएम सूर्यघर योजना (३०० युनिट मोफत वीज)", "१ कोटी घरांवर रूफटॉप सोलर", "७५,०२१ कोटी तरतूद"]
                                        },
                                        {
                                            id: "st_gc_c03_01_02",
                                            titleMr: "पीएम विश्वकर्मा योजना व आयुष्मान भारत ज्येष्ठ नागरिक विस्तार: १) पीएम विश्वकर्मा योजना (१७ सप्टेंबर २०२३): १८ पारंपारिक व्यवसायांमधील कारागिरांना (सुतार, लोहार, कुंभार, चर्मकार इ.) ओळखपत्र, प्रमाणपत्र, १५,००० रु. टूलकिट अनुदान आणि ५% सवलतीच्या व्याजदराने विनातारण ३ लाख रुपयांपर्यंत कर्ज (टप्पा-१ रु. १ लाख, टप्पा-२ रु. २ लाख); २) आयुष्मान भारत (PM-JAY विस्तार २०२४): ७० वर्षे व त्यावरील देशातील 'सर्व ज्येष्ठ नागरिकांना' (उत्पन्नाची अट न ठेवता) वार्षिक ५ लाख रुपयांपर्यंत मोफत आरोग्य विमा संरक्षण देण्याचा ऐतिहासिक निर्णय",
                                            titleEn: "PM Vishwakarma & Senior Citizen PM-JAY Expansion: PM Vishwakarma supports 18 traditional crafts via skill upgrades, Rs 15k toolkit aid, and collateral-free enterprise loans up to Rs 3 Lakh at 5% interest; Ayushman Bharat PM-JAY expanded in Sept 2024 to universally cover ALL senior citizens aged 70+ with Rs 5 Lakh family floater cover regardless of income",
                                            chips: ["पीएम विश्वकर्मा योजना (१८ पारंपारिक कारागीर)", "विनातारण ३ लाख कर्ज", "आयुष्मान भारत ७० वर्षांवरील सर्वांना लागू", "५ लाख आरोग्य विमा"]
                                        },
                                        {
                                            id: "st_gc_c03_01_03",
                                            titleMr: "लखपती दीदी उपक्रम (Lakhpati Didi Mission): महिला स्वयंसहाय्यता समूहांमधील (SHG) महिलांना विविध कौशल्ये व सूक्ष्म उद्योग सुरू करण्यासाठी प्रोत्साहन देऊन त्यांचे वार्षिक उत्पन्न किमान '१ लाख रुपये' (दरमहा रु. १०,०००/-) करण्याचे उद्दिष्ट; सुरुवातीचे २ कोटी महिलांचे लक्ष्य वाढवून '३ कोटी महिला' करण्यात आले; ड्रोन दीदी (Namo Drone Didi) उपक्रमांतर्गत कृषी कामांसाठी ड्रोन चालवण्याचे प्रशिक्षण",
                                            titleEn: "Lakhpati Didi & Namo Drone Didi: Empowering rural Self-Help Group (SHG) women to earn sustainable annual income >Rs 1 Lakh (Rs 10k/month); Target expanded from 2 Crore to 3 Crore women; Namo Drone Didi supplies agricultural drones and piloting skills to SHG women",
                                            chips: ["लखपती दीदी (वार्षिक १ लाख उत्पन्न)", "३ कोटी महिलांचे लक्ष्य", "नमो ड्रोन दीदी (कृषी ड्रोन प्रशिक्षण)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "पृथ्वी परिक्रमा", standard: "पृथ्वी अकॅडमी", chapterRef: "केंद्र शासकीय कल्याणकारी योजना" },
                                        { book: "योजना मासिक", standard: "माहिती व प्रसारण मंत्रालय", chapterRef: "ग्रामीण विकास व सामाजिक सुरक्षा विशेषांक" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ४: आर्थिक घडामोडी, केंद्रीय व महाराष्ट्र अर्थसंकल्प आणि आर्थिक पाहणी
                        // =========================================================================
                        {
                            id: "gc_ca_c04",
                            code: "CC04",
                            section: "A",
                            slug: "economic-developments-union-budget-and-economic-survey-mh",
                            nameMr: "आर्थिक घडामोडी, केंद्रीय व महाराष्ट्र अर्थसंकल्प आणि आर्थिक पाहणी",
                            nameEn: "Economic Developments: Union & State Budgets, GDP Projections & Economic Surveys",
                            name: "आर्थिक घडामोडी, बजेट व आर्थिक पाहणी",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_ca_c04",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_ca_c03",
                            nextChapterId: "gc_ca_c05",
                            metaDescriptionMr: "केंद्रीय अर्थसंकल्प मुख्य ठळक बाबी (भांडवली खर्च ११.११ लाख कोटी, वित्तीय तूट लक्ष्य ४.९%), आयकर स्लॅब सुधारणा (नवीन करप्रणाली), महाराष्ट्राचा अर्थसंकल्प, आणि महाराष्ट्र आर्थिक पाहणी अहवाल (FDI मध्ये महाराष्ट्र देशात प्रथम क्रमांक).",
                            metaDescriptionEn: "Union Budget highlights (Capital outlay Rs 11.11 Lakh Cr, Fiscal deficit path, Revised Income Tax slabs under New Regime), Maharashtra State Budget allocations, and Economic Survey of Maharashtra (Maharashtra tops national FDI inflows).",
                            notesJsonPath: "/data/notes/group_c/prelims/current_affairs/c04_budget_economic_survey.json",
                            quizTag: "gc_ca_budget_01",
                            tags: ["Union Budget Highlights", "Capital Expenditure 11.11 Lakh Cr", "Fiscal Deficit Target", "New Income Tax Slabs", "Maharashtra Economic Survey FDI First", "High-Weightage"],
                            searchKeywords: ["union budget highlights capital expenditure capex 11.11 lakh crore", "fiscal deficit glide path 4.9 percent 4.5 percent by 2026", "new income tax regime revised slabs standard deduction 75000", "economic survey of maharashtra gsdp growth per capita income", "fdi inflows maharashtra ranks first 31 percent share", "केंद्रीय अर्थसंकल्प भांडवली खर्च ११.११ लाख कोटी", "वित्तीय तूट लक्ष्य ४.९%", "नवीन आयकर स्लॅब स्टँडर्ड डिडक्शन ७५०००", "महाराष्ट्र आर्थिक पाहणी अहवाल FDI अव्वल क्रमांक"],
                            topics: [
                                {
                                    id: "top_gc_c04_01",
                                    nameMr: "केंद्रीय अर्थसंकल्प, भांडवली खर्च, नवीन कररचना आणि महाराष्ट्र आर्थिक पाहणी",
                                    nameEn: "Union Budget Metrics, Infrastructure Capex, Tax Rationalisation & State Economic Survey",
                                    subtopics: [
                                        {
                                            id: "st_gc_c04_01_01",
                                            titleMr: "केंद्रीय अर्थसंकल्प मुख्य तरतुदी: १) भांडवली खर्च (Capex): पायाभूत सुविधांसाठी विक्रमी ११,११,१११ कोटी रुपये (GDP च्या ३.४%); २) वित्तीय तूट लक्ष्य: वित्तीय तूट GDP च्या ४.९% पर्यंत आणण्याचे उद्दिष्ट (२०२५-२६ पर्यंत ४.५% खाली आणण्याचा रोडमॅप); ३) नवीन आयकर रचना (New Tax Regime): प्रमाणित वजावट (Standard Deduction) ५०,००० वरून ७५,००० रुपये केली; ३ लाखांपर्यंत शून्य कर, ३ ते ७ लाख ५%, ७ ते १० लाख १०%, १० ते १२ लाख १५%, १२ ते १५ लाख २०%, १५ लाखांवर ३०%",
                                            titleEn: "Union Budget Highlights: 1) Capital Expenditure: Record Rs 11,11,111 Cr (3.4% of GDP) for highways, railways, logistics; 2) Fiscal Deficit pegged at 4.9% with commitment to glide below 4.5% by FY26; 3) Rationalised New Tax Regime: Standard deduction raised to Rs 75,000; Revised slabs: Nil up to 3L, 5% (3-7L), 10% (7-10L), 15% (10-12L), 20% (12-15L), 30% above 15L",
                                            chips: ["भांडवली खर्च ११.११ लाख कोटी (Capex)", "वित्तीय तूट लक्ष्य ४.९%", "नवीन कररचना स्टँडर्ड डिडक्शन ७५०००", "कर स्लॅब्स"]
                                        },
                                        {
                                            id: "st_gc_c04_01_02",
                                            titleMr: "महाराष्ट्राचा आर्थिक पाहणी अहवाल: १) परकीय थेट गुंतवणूक (FDI): देशात आलेल्या एकूण परकीय गुंतवणुकीपैकी ३१% पेक्षा जास्त वाटा मिळवून महाराष्ट्र 'देशात प्रथम क्रमांकावर' राहिला; २) अर्थव्यवस्थेचा आकार: देशाच्या GDP मध्ये महाराष्ट्राचा वाटा सुमारे १४% (सर्वाधिक); ३) क्षेत्रांची वाढ: सेवा क्षेत्र सर्वाधिक वाढ दर्शवते; दरडोई उत्पन्न राष्ट्रीय सरासरीपेक्षा जास्त; १ ट्रिलियन डॉलर अर्थव्यवस्था करण्याचे राज्याचे उद्दिष्ट",
                                            titleEn: "Economic Survey of Maharashtra: 1) Foreign Direct Investment: Maharashtra ranks FIRST in India, capturing >31% of total national FDI inflows; 2) Economic output contributes ~14% to India's GDP; 3) Services sector drives state GSDP; Per-capita income exceeds national average; Mission to achieve $1 Trillion GSDP economy",
                                            chips: ["FDI परकीय गुंतवणुकीत महाराष्ट्र प्रथम (३१%)", "भारताच्या GDP मध्ये १४% वाटा", "१ ट्रिलियन डॉलर उद्दिष्ट", "दरडोई उत्पन्नात आघाडी"]
                                        }
                                    ],
                                    sources: [
                                        { book: "Economic Survey of India & Budget", standard: "Ministry of Finance", chapterRef: "Union Budget Speech & Economic Highlights" },
                                        { book: "महाराष्ट्राचा आर्थिक पाहणी अहवाल", standard: "अर्थ व सांख्यिकी संचालनालय", chapterRef: "राज्य उत्पन्न व गुंतवणूक आढावा" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ५: जागतिक व राष्ट्रीय निर्देशांक (Reports & Indices)
                        // =========================================================================
                        {
                            id: "gc_ca_c05",
                            code: "CC05",
                            section: "B",
                            slug: "global-and-national-indices-rankings-and-reports",
                            nameMr: "जागतिक व राष्ट्रीय निर्देशांक (Reports & Indices): भारताचे स्थान व क्रमवारी",
                            nameEn: "Reports & Global Indices: India's Ranking, Institutional Publishing Bodies & NITI Analytics",
                            name: "जागतिक व राष्ट्रीय निर्देशांक",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_ca_c05",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_ca_c04",
                            nextChapterId: "gc_ca_c06",
                            metaDescriptionMr: "मानव विकास निर्देशांक (HDI - UNDP अहवाल), जागतिक आनंद निर्देशांक (World Happiness), जागतिक भूक निर्देशांक (GHI), जागतिक नाविन्यता निर्देशांक (GII), भ्रष्टाचार निर्देशांक, आणि नीती आयोगाचा SDG इंडिया इंडेक्स.",
                            metaDescriptionEn: "Human Development Index (HDI - UNDP), World Happiness Report, Global Hunger Index, Global Innovation Index (WIPO), Corruption Perceptions Index, and NITI Aayog's SDG India Index with state rankings.",
                            notesJsonPath: "/data/notes/group_c/prelims/current_affairs/c05_indices_rankings.json",
                            quizTag: "gc_ca_indices_01",
                            tags: ["Indices Reports", "Human Development Index HDI UNDP", "Global Innovation Index GII WIPO", "World Happiness Report", "SDG India Index NITI Aayog", "High-Weightage"],
                            searchKeywords: ["human development index hdi undp india rank value 3 indicators", "global innovation index gii wipo india rank 39th 40th", "world happiness report un sdsk finland first india rank", "global hunger index ghi concern worldwide india ranking", "corruption perceptions index transparency international", "sdg india index niti aayog top performing states kerala uttarakhand", "मानव विकास निर्देशांक HDI भारत रँक UNDP", "जागतिक नाविन्यता निर्देशांक GII", "जागतिक आनंद निर्देशांक फिनलंड प्रथम", "SDG इंडिया इंडेक्स नीती आयोग राज्ये मानांकन"],
                            topics: [
                                {
                                    id: "top_gc_c05_01",
                                    nameMr: "प्रमुख जागतिक निर्देशांक, प्रकाशित करणाऱ्या संस्था आणि नीती आयोगाचे निर्देशांक",
                                    nameEn: "International Benchmark Indices, Publishing Agencies & Domestic Composite Metrics",
                                    subtopics: [
                                        {
                                            id: "st_gc_c05_01_01",
                                            titleMr: "प्रमुख जागतिक निर्देशांक व भारताचे स्थान: १) मानव विकास निर्देशांक (HDI - संयुक्त राष्ट्रे विकास कार्यक्रम UNDP): ३ परिमाणे (दीर्घ व निरोगी आयुष्य, ज्ञान/शिक्षण, आणि राहणीमानाचा दर्जा); भारताचे स्थान: १३४ वे (मूल्य: ०.६४४ - मध्यम मानवी विकास गट); स्वित्झर्लंड प्रथम स्थानी; २) जागतिक नाविन्यता निर्देशांक (GII - बौद्धिक संपदा संघटना WIPO): भारताचे स्थान ३९ व्या क्रमांकावर सुधारले (२०१५ मध्ये ८१ व्या क्रमांकावर होते); ३) जागतिक आनंद निर्देशांक (World Happiness Report): फिनलंड सलग सातव्यांदा प्रथम स्थानी, भारत १२६ व्या क्रमांकावर; ४) पर्यावरण कामगिरी निर्देशांक (EPI)",
                                            titleEn: "Global Indices & India's Ranks: 1) Human Development Index (HDI published by UNDP: 3 dimensions: Life expectancy, Education, GNI per capita; India ranks 134th with 0.644 score, Switzerland 1st); 2) Global Innovation Index (GII by WIPO: India ranked 39th); 3) World Happiness Report (Finland ranks 1st consecutively; India ranks 126th); 4) Corruption Perceptions Index (Transparency International)",
                                            chips: ["HDI मानव विकास निर्देशांक (भारत १३४ वे स्थान)", "UNDP ३ परिमाणे", "जागतिक नाविन्यता GII (भारत ३९ वे स्थान)", "आनंद निर्देशांक (फिनलंड प्रथम, भारत १२६ वे)"]
                                        },
                                        {
                                            id: "st_gc_c05_01_02",
                                            titleMr: "राष्ट्रीय निर्देशांक व स्वच्छ सर्वेक्षण: १) नीती आयोग SDG इंडिया इंडेक्स (२०२३-२४): १७ शाश्वत विकास उद्दिष्टांवर मोजमाप; सर्वोत्तम कामगिरी करणारी राज्ये: केरळ व उत्तराखंड (संयुक्त प्रथम क्रमांक ७९ गुण); सर्वात खालील राज्य: बिहार; महाराष्ट्र 'फ्रंट रनर' (Front Runner) श्रेणीत; २) स्वच्छ सर्वेक्षण पुरस्कार: सलग सातव्यांदा इंदूर (मध्य प्रदेश) आणि सुरत (गुजरात) देशातील सर्वात स्वच्छ शहरे; '१ लाखांपेक्षा जास्त लोकसंख्या वर्गवारीत' नवी मुंबई देशात तिसऱ्या स्थानी; 'सर्वोत्कृष्ट स्वच्छ राज्य': महाराष्ट्र देशात प्रथम क्रमांकावर",
                                            titleEn: "National Composite Metrics & Swachh Survekshan: 1) NITI Aayog SDG India Index: Kerala and Uttarakhand ranked Joint-First (score 79); Bihar at bottom; Maharashtra in 'Front Runner' category; 2) Swachh Survekshan Awards: Cleanest Cities: Indore and Surat joint-first; Navi Mumbai ranked 3rd nationally; Cleanest State in India: Maharashtra ranked Number One",
                                            chips: ["SDG इंडिया इंडेक्स (केरळ, उत्तराखंड प्रथम)", "महाराष्ट्र फ्रंट रनर श्रेणी", "स्वच्छ सर्वेक्षण (महाराष्ट्र देशात प्रथम राज्य)", "नवी मुंबई तिसरे स्वच्छ शहर"]
                                        }
                                    ],
                                    sources: [
                                        { book: "पृथ्वी परिक्रमा", standard: "पृथ्वी अकॅडमी", chapterRef: "जागतिक व राष्ट्रीय निर्देशांक सारांश" },
                                        { book: "UNDP & NITI Aayog Portals", standard: "अधिकृत अहवाल", chapterRef: "HDI Report & SDG India Index Dashboard" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ६: पर्यावरण, हवामान बदल परिषदा, व्याघ्र गणना व रामसर स्थळे
                        // =========================================================================
                        {
                            id: "gc_ca_c06",
                            code: "CC06",
                            section: "B",
                            slug: "environment-climate-change-summits-tiger-census-and-ramsar-sites",
                            nameMr: "पर्यावरण, हवामान बदल परिषदा (COP), व्याघ्र गणना व रामसर स्थळे",
                            nameEn: "Environment & Ecology: COP Summits, All-India Tiger Census & Ramsar Wetlands",
                            name: "पर्यावरण, हवामान परिषदा व व्याघ्र गणना",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_ca_c06",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_ca_c05",
                            nextChapterId: "gc_ca_c07",
                            metaDescriptionMr: "COP28 दुबई हवामान परिषद (लॉस अँड डॅमेज फंड), COP29 बाकू (अझरबैजान), राष्ट्रीय व्याघ्र गणना अहवाल (भारतात ३,६८२ वाघ - मध्यप्रदेश प्रथम, महाराष्ट्र चौथ्या स्थानी), प्रोजेक्ट टायगर ५० वर्षे, आणि महाराष्ट्रातील रामसर पाणथळ स्थळे.",
                            metaDescriptionEn: "UNFCCC Climate Summits (COP28 Dubai Loss & Damage Fund, COP29 Baku), All-India Tiger Estimation Report (India's tiger population 3,682, MP ranks 1st, Maharashtra 4th with 444 tigers), 50 Years of Project Tiger, and Ramsar Wetlands of Maharashtra.",
                            notesJsonPath: "/data/notes/group_c/prelims/current_affairs/c06_environment_wildlife.json",
                            quizTag: "gc_ca_env_01",
                            tags: ["UNFCCC COP28 Dubai", "COP29 Baku", "All India Tiger Census 3682", "Project Tiger 50 Years", "Ramsar Sites Maharashtra", "High-Weightage"],
                            searchKeywords: ["cop28 uae dubai climate summit loss and damage fund global stocktake", "cop29 baku azerbaijan climate finance new collective quantified goal", "all india tiger estimation 2022 report 3682 tigers madhya pradesh first 785 maharashtra 444", "project tiger 50 years celebration mysuru narendra modi", "ramsar sites in maharashtra nandur madhmeshwar lonar lake thane creek", "COP28 दुबई हवामान परिषद लॉस अँड डॅमेज फंड", "COP29 बाकू अझरबैजान", "अखिल भारतीय व्याघ्र गणना अहवाल ३६८२ वाघ", "मध्यप्रदेश प्रथम महाराष्ट्र ४४४ वाघ", "महाराष्ट्रातील रामसर स्थळे ठाणे खाडी लोणार"],
                            topics: [
                                {
                                    id: "top_gc_c06_01",
                                    nameMr: "हवामान परिषदा (COP28/COP29), व्याघ्र गणना २०२२ आणि महाराष्ट्रातील संरक्षित स्थळे",
                                    nameEn: "UNFCCC Climate Summits, All-India Tiger Census Dynamics & State Ramsar Wetlands",
                                    subtopics: [
                                        {
                                            id: "st_gc_c06_01_01",
                                            titleMr: "हवामान बदल परिषदा (UNFCCC COP): १) COP28 (दुबई, UAE - २०२३): 'लॉस अँड डॅमेज फंड' (Loss and Damage Fund) ची अधिकृत अंमलबजावणी; 'ग्लोबल स्टॉकटेक' (Global Stocktake) अंतर्गत जीवाश्म इंधनापासून (Fossil Fuels) दूर जाण्याचे ऐतिहासिक आवाहन; २) COP29 (बाकू, अझरबैजान - २०२४): 'हवामान वित्त' (Climate Finance) ही मुख्य थीम; विकसनशील देशांना निधी मिळण्यासाठी नवीन उद्दिष्ट (NCQG); ३) COP30 (बेलेम, ब्राझील - २०२५)",
                                            titleEn: "UNFCCC Climate Summits: COP28 (Dubai, UAE 2023: Operationalized Loss and Damage Fund; Historic Global Stocktake consensus transitioning away from fossil fuels); COP29 (Baku, Azerbaijan 2024: Dubbed the 'Finance COP' for New Collective Quantified Goal NCQG on climate finance); COP30 in Belem, Brazil",
                                            chips: ["COP28 दुबई (लॉस अँड डॅमेज फंड)", "जीवाश्म इंधन संक्रमण", "COP29 बाकू अझरबैजान (क्लायमेट फायनान्स)", "COP30 ब्राझील"]
                                        },
                                        {
                                            id: "st_gc_c06_01_02",
                                            titleMr: "अखिल भारतीय व्याघ्र गणना व प्रोजेक्ट टायगर ५० वर्षे: १ एप्रिल १९७३ रोजी सुरू झालेल्या 'प्रोजेक्ट टायगर' ला ५० वर्षे पूर्ण (म्हैसूर येथे पंतप्रधान नरेंद्र मोदींच्या हस्ते सोहळा); अखिल भारतीय व्याघ्र गणना अहवाल: भारतात एकूण वाघांची संख्या ३,६८२ (जगातील एकूण वाघांपैकी ७५% वाघ भारतात); सर्वाधिक वाघ असणारी राज्ये: १) मध्य प्रदेश (७८५ वाघ - टायगर स्टेट), २) कर्नाटक (५६३ वाघ), ३) उत्तराखंड (५६० वाघ), ४) महाराष्ट्र (४४४ वाघ - देशात चौथा क्रमांक)",
                                            titleEn: "All-India Tiger Census & Project Tiger Golden Jubilee: Celebrated 50 years of Project Tiger (launched 1 April 1973); Total tiger headcount in India reached 3,682 (~75% of global wild tiger population); Top states: 1) Madhya Pradesh (785 tigers), 2) Karnataka (563), 3) Uttarakhand (560), 4) Maharashtra (444 tigers - ranks 4th in India)",
                                            chips: ["प्रोजेक्ट टायगर ५० वर्षे", "भारतात एकूण ३,६८२ वाघ (जगात ७५%)", "मध्य प्रदेश प्रथम (७८५ वाघ)", "महाराष्ट्र चौथा (४४४ वाघ)"]
                                        },
                                        {
                                            id: "st_gc_c06_01_03",
                                            titleMr: "महाराष्ट्रातील रामसर पाणथळ स्थळे (Ramsar Sites): आंतरराष्ट्रीय महत्त्वाची पाणथळ स्थळे (Ramsar Convention १९७१); महाराष्ट्रात एकूण ३ रामसर स्थळे: १) नांदूर मध्यमेश्वर (जि. नाशिक - महाराष्ट्रातील पहिले रामसर स्थळ २०१९, 'महाराष्ट्राचे भरतपूर' म्हणून ओळखले जाते); २) लोणार सरोवर (जि. बुलढाणा - उल्कापातामुळे निर्माण झालेले खारे पाण्याचे सरोवर, २०२० मध्ये समावेश); ३) ठाणे खाडी फ्लेमिंगो अभयारण्य (जि. ठाणे/मुंबई - २०२२ मध्ये समावेश)",
                                            titleEn: "Ramsar Wetland Sites of Maharashtra: Ramsar Convention on Wetlands (1971); Maharashtra features 3 designated Ramsar sites: 1) Nandur Madhmeshwar (Nashik - 1st site in MH 2019, bird sanctuary dubbed 'Bharatpur of Maharashtra'), 2) Lonar Lake (Buldhana - meteor-crater saline lake added in 2020), 3) Thane Creek Flamingo Sanctuary (added in 2022)",
                                            chips: ["महाराष्ट्रात ३ रामसर स्थळे", "नांदूर मध्यमेश्वर (पहिले २०१९ नाशिक)", "लोणार सरोवर (उल्का सरोवर २०२०)", "ठाणे खाडी फ्लेमिंगो अभयारण्य"]
                                        }
                                    ],
                                    sources: [
                                        { book: "पृथ्वी परिक्रमा", standard: "पृथ्वी अकॅडमी", chapterRef: "पर्यावरण व जैवविविधता घडामोडी" },
                                        { book: "NTCA Report", standard: "National Tiger Conservation Authority", chapterRef: "Status of Tigers in India 2022 Report" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ७: संरक्षण घडामोडी, युद्धसराव (Military Exercises) व क्षेपणास्त्रे
                        // =========================================================================
                        {
                            id: "gc_ca_c07",
                            code: "CC07",
                            section: "C",
                            slug: "defense-affairs-joint-military-exercises-and-missile-systems",
                            nameMr: "संरक्षण घडामोडी, संयुक्त युद्धसराव (Exercises) व क्षेपणास्त्र चाचण्या",
                            nameEn: "Defense Modernization: Joint Combat Exercises, Missile Tests (Agni-V MIRV) & Naval Assets",
                            name: "संरक्षण घडामोडी व संयुक्त युद्धसराव",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 2,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_ca_c07",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_ca_c06",
                            nextChapterId: "gc_ca_c08",
                            metaDescriptionMr: "द्विपक्षीय संयुक्त युद्धसराव (सूर्यकिरण, गरुड शक्ती, वरुणा, संप्रिती, मलबार), अग्नी-५ MIRV तंत्रज्ञान (मिशन दिव्यास्त्र), आयएनएस विक्रांत विमानवाहू नौका, आणि प्रोजेक्ट ७५ पाणबुड्या.",
                            metaDescriptionEn: "Bilateral & multilateral military exercises (Surya Kiran, Garuda Shakti, Varuna, Sampriti, Malabar), Agni-V test flight with MIRV technology (Mission Divyastra), INS Vikrant, and Project-75 Scorpene submarines.",
                            notesJsonPath: "/data/notes/group_c/prelims/current_affairs/c07_defense_exercises.json",
                            quizTag: "gc_ca_defense_01",
                            tags: ["Defense Exercises", "Agni 5 MIRV Technology", "Mission Divyastra", "INS Vikrant Aircraft Carrier", "Project 75 Submarines", "High-Weightage"],
                            searchKeywords: ["joint military exercises india list surya kiran nepal garuda shakti varuna", "malabar naval exercise quad countries india usa japan australia", "mission divyastra drdo agni 5 mirv multiple independently targetable re entry vehicle", "ins vikrant indigenous aircraft carrier commissioned cochin shipyard", "project 75 scorpene submarines kalvari khanderi vagheer vagshir", "संयुक्त युद्धसराव यादी सूर्यकिरण नेपाळ मलबार क्वाड", "अग्नी ५ MIRV तंत्रज्ञान मिशन दिव्यास्त्र DRDO", "आयएनएस विक्रांत विमानवाहू युद्धनौका", "प्रोजेक्ट ७५ कलवरी वागीर पाणबुड्या"],
                            topics: [
                                {
                                    id: "top_gc_c07_01",
                                    nameMr: "प्रमुख द्विपक्षीय युद्धसराव, अग्नी-५ MIRV चाचणी आणि स्वदेशी नौदल युद्धनौका",
                                    nameEn: "Bilateral Combat Drills, Agni-V MIRV Breakthrough & Indigenous Naval Fleet",
                                    subtopics: [
                                        {
                                            id: "st_gc_c07_01_01",
                                            titleMr: "प्रमुख संयुक्त द्विपक्षीय व बहुपक्षीय युद्धसराव (MPSC हमखास जोड्या): १) सूर्यकिरण (Surya Kiran): भारत आणि नेपाळ; २) संप्रिती (Sampriti) व बोंगोसागर: भारत आणि बांगलादेश; ३) गरुड शक्ती (Garuda Shakti) व समुद्र शक्ती: भारत आणि इंडोनेशिया; ४) धर्म गार्डियन (Dharma Guardian) व जिमेक्स (JIMEX): भारत आणि जपान; ५) वरुण (नौदल), गरुड (हवाई) व शक्ती (भूदल): भारत आणि फ्रान्स; ६) मलबार (Malabar): क्वाड (QUAD) देशांचा संयुक्त नौदल सराव (भारत, अमेरिका, जपान, ऑस्ट्रेलिया); ७) खंजर: भारत आणि किर्गिझस्तान; ८) डस्टलिक (Dustlik): भारत आणि उझबेकिस्तान",
                                            titleEn: "Bilateral & Multilateral Joint Drills Matrix: Surya Kiran (India-Nepal); Sampriti & Bongosagar (India-Bangladesh); Garuda Shakti & Samudra Shakti (India-Indonesia); Dharma Guardian & JIMEX (India-Japan); Varuna, Garuda & Shakti (India-France); Malabar (QUAD: India, US, Japan, Australia); Khanjar (India-Kyrgyzstan); Dustlik (India-Uzbekistan)",
                                            chips: ["सूर्यकिरण (भारत-नेपाळ)", "मलबार (क्वाड देश QUAD)", "वरुण व गरुड (भारत-फ्रान्स)", "धर्म गार्डियन (भारत-जपान)", "संप्रीती (भारत-बांगलादेश)"]
                                        },
                                        {
                                            id: "st_gc_c07_01_02",
                                            titleMr: "अग्नी-५ 'मिशन दिव्यास्त्र' आणि नौदल आधुनिकीकरण: १) अग्नी-५ क्षेपणास्त्र (Agni-V MIRV): DRDO ने ११ मार्च २०२४ रोजी 'मिशन दिव्यास्त्र' (Mission Divyastra) अंतर्गत स्वदेशी MIRV (Multiple Independently Targetable Re-entry Vehicle) तंत्रज्ञानासह पहिली यशस्वी उड्डाण चाचणी घेतली; एकाच क्षेपणास्त्रातून एकाच वेळी वेगवेगळ्या लक्ष्यांवर अनेक अण्वस्त्रे डागण्याची क्षमता (पल्ला ५,०००+ किमी); २) आयएनएस विक्रांत (INS Vikrant): कोचीन शिपयार्डने बांधलेली भारताची पहिली स्वदेशी विमानवाहू युद्धनौका (IAC-1); ३) प्रोजेक्ट-७५ (Project-75): माझगाव डॉक, मुंबई येथे फ्रान्सच्या सहकार्याने बांधलेल्या ६ स्कॉर्पिन पाणबुड्या: कलवरी, खंदेरी, करंज, वेला, वागीर, आणि वागशीर",
                                            titleEn: "Mission Divyastra & Naval Commissioning: 1) Agni-V MIRV Test (11 March 2024 via Mission Divyastra developed by DRDO deploying Multiple Independently Targetable Re-entry Vehicles striking multiple targets across 5,000+ km range); 2) INS Vikrant (India's first indigenous aircraft carrier built at Cochin Shipyard); 3) Project-75 (6 Scorpene submarines built at Mazagon Dock Mumbai: Kalvari, Khanderi, Karanj, Vela, Vagir, Vagsheer)",
                                            chips: ["मिशन दिव्यास्त्र (अग्नी-५ MIRV चाचणी)", "एकाच क्षेपणास्त्रातून अनेक अण्वस्त्रे", "आयएनएस विक्रांत स्वदेशी विमानवाहू", "प्रोजेक्ट-७५ माझगाव डॉक ६ पाणबुड्या"]
                                        }
                                    ],
                                    sources: [
                                        { book: "पृथ्वी परिक्रमा", standard: "पृथ्वी अकॅडमी", chapterRef: "संरक्षण घडामोडी व संयुक्त सराव" },
                                        { book: "DRDO & PIB Releases", standard: "Ministry of Defence", chapterRef: "Mission Divyastra & Naval Inductions" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ८: अंतराळ विज्ञान, इस्रो मोहिमा (ISRO Missions) व आधुनिक तंत्रज्ञान
                        // =========================================================================
                        {
                            id: "gc_ca_c08",
                            code: "CC08",
                            section: "C",
                            slug: "space-science-isro-missions-chandrayaan-aditya-gaganyaan",
                            nameMr: "अंतराळ विज्ञान, इस्रो मोहिमा (ISRO Missions) व आधुनिक तंत्रज्ञान",
                            nameEn: "Space Science: ISRO Deep Space Probes (Chandrayaan-3, Aditya-L1, Gaganyaan)",
                            name: "इस्रो अंतराळ मोहिमा (Space Technology)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_ca_c08",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_ca_c07",
                            nextChapterId: "gc_ca_c09",
                            metaDescriptionMr: "चांद्रयान-३ ऐतिहासिक लँडिंग (२३ ऑगस्ट राष्ट्रीय अंतराळ दिन, शिवशक्ती पॉईंट), आदित्य-एल१ सूर्य मोहीम (Lagrange Point 1), गगनयान मानवी अंतराळ मोहीम पूर्वतयारी (व्योममित्र रोबोट), XPoSat, आणि SSLV.",
                            metaDescriptionEn: "Chandrayaan-3 lunar south pole landing (23 August National Space Day, Shiv Shakti Point, Vikram lander, Pragyan rover), Aditya-L1 solar observatory at Lagrange Point L1, Gaganyaan manned mission preparations (Vyommitra humanoid), XPoSat, and SSLV.",
                            notesJsonPath: "/data/notes/group_c/prelims/current_affairs/c08_space_isro_missions.json",
                            quizTag: "gc_ca_space_01",
                            tags: ["ISRO Missions", "Chandrayaan 3 South Pole", "Shiv Shakti Point 23 August Space Day", "Aditya L1 Solar Probe", "Gaganyaan Vyommitra", "High-Weightage"],
                            searchKeywords: ["isro chandrayaan 3 soft landing lunar south pole 23 august national space day", "shiv shakti point vikram lander pragyan rover payloads lvm3 m4", "aditya l1 solar mission pslv c57 lagrange point 1 halo orbit", "gaganyaan human spaceflight mission vyommitra humanoid robot", "xposat x ray polarimeter satellite pslv c58", "चांद्रयान ३ दक्षिण ध्रुव २३ ऑगस्ट राष्ट्रीय अंतराळ दिन", "शिवशक्ती पॉईंट विक्रम लँडर प्रज्ञान रोव्हर", "आदित्य एल१ सूर्य मोहीम लॅग्रेंज पॉईंट", "गगनयान व्योममित्र रोबोट इस्रो"],
                            topics: [
                                {
                                    id: "top_gc_c08_01",
                                    nameMr: "चांद्रयान-३ मोहीम, आदित्य-एल१ सूर्य अन्वेषण आणि गगनयान पूर्वतयारी",
                                    nameEn: "Chandrayaan-3 Lunar Triumph, Aditya-L1 Heliophysics & Gaganyaan Manned Road",
                                    subtopics: [
                                        {
                                            id: "st_gc_c08_01_01",
                                            titleMr: "चांद्रयान-३ ऐतिहासिक मोहीम: १४ जुलै २०२३ रोजी LVM3-M4 रॉकेटद्वारे श्रीहरिकोटा येथून यशस्वी प्रक्षेपण; २३ ऑगस्ट २०२३ रोजी सायंकाळी ६:०४ वाजता चंद्राच्या 'दक्षिण ध्रुवावर' (South Pole) यशस्वी सॉफ्ट लँडिंग करणारा भारत हा 'जगातील पहिला देश' ठरला (चंद्रावर उतरणारा चौथा देश); लँडिंगच्या जागेला 'शिवशक्ती पॉईंट' (Shiv Shakti Point) नाव दिले; २३ ऑगस्ट हा दिवस केंद्र सरकारने 'राष्ट्रीय अंतराळ दिन' (National Space Day) म्हणून घोषित केला; लँडरचे नाव: विक्रम (Vikram); रोव्हरचे नाव: प्रज्ञान (Pragyan - ६ चाके); चंद्रावर सल्फर (S) चा शोध लावला",
                                            titleEn: "Chandrayaan-3 Lunar Historic Landing: Launched on 14 July 2023 via LVM3-M4; Achieved historic soft landing on the Lunar South Pole on 23 August 2023 making India the 1st country to land on the lunar south pole (4th nation overall); Landing site christened 'Shiv Shakti Point'; 23 August declared 'National Space Day'; Lander: Vikram, Rover: Pragyan (detected lunar Sulphur)",
                                            chips: ["चांद्रयान-३ (२३ ऑगस्ट २०२३ लँडिंग)", "दक्षिण ध्रुवावर उतरणारा पहिला देश", "शिवशक्ती पॉईंट", "२३ ऑगस्ट राष्ट्रीय अंतराळ दिन", "विक्रम लँडर व प्रज्ञान रोव्हर"]
                                        },
                                        {
                                            id: "st_gc_c08_01_02",
                                            titleMr: "आदित्य-एल१ आणि गगनयान मोहीम: १) आदित्य-एल१ (Aditya-L1): भारताची पहिली सूर्य मोहीम; २ सप्टेंबर २०२३ रोजी PSLV-C57 द्वारे प्रक्षेपण; ६ जानेवारी २०२४ रोजी पृथ्वीपासून १५ लाख किमी अंतरावरील 'लॅग्रेंज पॉईंट-१' (L1) भोवतीच्या हॅलो कक्षेत यशस्वीरीत्या प्रस्थापित; सूर्याच्या कोरोनाचा आणि सौर वादळांचा अभ्यास करणे; २) गगनयान मोहीम (Gaganyaan): भारताची पहिली मानवी अंतराळ मोहीम; ३ अंतराळवीरांना ४०० किमी कक्षेत नेऊन सुखरूप परत आणणे; चाचणीसाठी 'व्योममित्र' (Vyommitra) ही अर्ध-मानवी महिला रोबोट अंतराळात पाठवली जाईल; ४ भारतीय हवाई दलाचे वैमानिक अंतराळवीर म्हणून निवडले",
                                            titleEn: "Aditya-L1 Solar Probe & Gaganyaan: Aditya-L1 launched 2 Sept 2023 via PSLV-C57; Inserted into Halo Orbit around Lagrange Point 1 (1.5 million km from Earth) on 6 Jan 2024 to observe solar corona; Gaganyaan aims to send 3 crew members to 400 km LEO; Precursor test missions deploy female humanoid robot 'Vyommitra'; 4 IAF astronaut designates selected",
                                            chips: ["आदित्य-एल१ (पहिली सूर्य मोहीम)", "लॅग्रेंज पॉईंट L1 (१५ लाख किमी)", "गगनयान मानवी अंतराळ मोहीम", "व्योममित्र रोबोट (Vyommitra)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "पृथ्वी परिक्रमा", standard: "पृथ्वी अकॅडमी", chapterRef: "अंतराळ व तंत्रज्ञान घडामोडी" },
                                        { book: "ISRO Mission Press Briefs", standard: "Department of Space", chapterRef: "Chandrayaan-3 and Aditya-L1 Official Summaries" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ९: क्रीडा घडामोडी: ऑलिम्पिक, पॅरालिम्पिक, क्रिकेट विश्वचषक व राष्ट्रीय खेळ
                        // =========================================================================
                        {
                            id: "gc_ca_c09",
                            code: "CC09",
                            section: "D",
                            slug: "sports-affairs-olympics-paralympics-and-cricket-tournaments",
                            nameMr: "क्रीडा घडामोडी: ऑलिम्पिक, पॅरालिम्पिक, क्रिकेट विश्वचषक व राष्ट्रीय खेळ",
                            nameEn: "Sports Panorama: Paris Olympics, Paralympics, ICC T20 World Cup & National Games",
                            name: "क्रीडा घडामोडी (Sports Panorama)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_ca_c09",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_ca_c08",
                            nextChapterId: "gc_ca_c10",
                            metaDescriptionMr: "पॅरिस ऑलिम्पिक २०२४ (भारताला ६ पदके - नीरज चोप्रा रौप्य, महाराष्ट्राचे स्वप्नील कुसाळे नेमबाजीत कांस्य), पॅरिस पॅरालिम्पिक २०२४ (२९ पदकांचा विक्रमी टप्पा), ICC पुरुष T20 विश्वचषक २०२४ (भारत विश्वविजेता), आणि खेलो इंडिया.",
                            metaDescriptionEn: "Paris Olympics 2024 (India's 6 medals tally: Neeraj Chopra Silver, Maharashtra's Swapnil Kusale Bronze in 50m Rifle 3P), Paris Paralympics 2024 (Record 29 medals), ICC Men's T20 World Cup 2024 (India champion under Rohit Sharma), and Khelo India Youth Games.",
                            notesJsonPath: "/data/notes/group_c/prelims/current_affairs/c09_sports_olympics_cricket.json",
                            quizTag: "gc_ca_sports_01",
                            tags: ["Paris Olympics 2024", "Swapnil Kusale Maharashtra Bronze", "Neeraj Chopra Silver", "Paris Paralympics 29 Medals", "T20 World Cup India Champion", "High-Weightage"],
                            searchKeywords: ["paris olympics 2024 india medals tally neeraj chopra manu bhaker", "swapnil kusale maharashtra kolhapur bronze 50m rifle 3 positions", "paris paralympics 2024 india record 29 medals 7 gold navdeep singh", "icc mens t20 world cup 2024 india defeated south africa rohit sharma", "khelo india youth games 2024 maharashtra ranked first champions", "पॅरिस ऑलिम्पिक २०२४ भारत पदके", "स्वप्नील कुसाळे कोल्हापूर कांस्य पदक नेमबाजी", "पॅरिस पॅरालिम्पिक २९ पदके विक्रम", "T20 विश्वचषक २०२४ भारत विजेता रोहित शर्मा", "खेलो इंडिया महाराष्ट्र प्रथम क्रमांक"],
                            topics: [
                                {
                                    id: "top_gc_c09_01",
                                    nameMr: "पॅरिस ऑलिम्पिक, स्वप्नील कुसाळे यांचे कांस्यपदक, पॅरालिम्पिक आणि T20 विश्वचषक",
                                    nameEn: "Paris Olympiad Feats, Swapnil Kusale's Shooting Bronze, Paralympics & T20 Victory",
                                    subtopics: [
                                        {
                                            id: "st_gc_c09_01_01",
                                            titleMr: "पॅरिस ऑलिम्पिक २०२४ (३३ वे ग्रीष्मकालीन ऑलिम्पिक): भारताने एकूण ६ पदके (१ रौप्य व ५ कांस्य) जिंकली; पदक विजेते: १) नीरज चोप्रा (भालाफेक - सलग दुसऱ्या ऑलिम्पिकमध्ये पदक, रौप्य पदक); २) मनू भाकर (१० मी एअर पिस्तूल वैयक्तिक कांस्य व सरबज्योत सिंगसह मिश्र कांस्य - एकाच ऑलिम्पिकमध्ये २ पदके जिंकणारी स्वतंत्र भारतातील पहिली ॲथलीट); ३) स्वप्नील कुसाळे (जि. कोल्हापूर, महाराष्ट्र - ५० मीटर रायफल थ्री-पोझिशनमध्ये कांस्य पदक जिंकले; खाशाबा जाधवांनंतर ऑलिम्पिकमध्ये वैयक्तिक पदक जिंकणारा महाराष्ट्राचा दुसरा खेळाडू); ४) अमन सेहरावत (कुस्ती कांस्य); ५) भारतीय पुरुष हॉकी संघ (कांस्य पदक)",
                                            titleEn: "Paris Olympics 2024 Highlights: India won 6 medals (1 Silver, 5 Bronze); Neeraj Chopra (Javelin Silver); Manu Bhaker (Historic Double Bronze in 10m Air Pistol individual & mixed); Swapnil Kusale (Kolhapur, Maharashtra won Bronze in 50m Rifle 3-Positions, becoming 2nd individual Olympic medalist from Maharashtra after Khashaba Jadhav); Aman Sehrawat (Wrestling Bronze); Men's Hockey Team (Bronze)",
                                            chips: ["पॅरिस ऑलिम्पिक २०२४ (भारताला ६ पदके)", "स्वप्नील कुसाळे (कोल्हापूर कांस्य पदक)", "खाशाबा जाधवांनंतर दुसरे महाराष्ट्रीयन", "नीरज चोप्रा (भालाफेक रौप्य)", "मनू भाकर (ऐतिहासिक २ पदके)"]
                                        },
                                        {
                                            id: "st_gc_c09_01_02",
                                            titleMr: "पॅरिस पॅरालिम्पिक २०२४ आणि T20 विश्वचषक: १) पॅरिस पॅरालिम्पिक २०२४: भारताची आतापर्यंतची सर्वोत्तम कामगिरी; एकूण २९ पदके जिंकली (७ सुवर्ण, ९ रौप्य, १३ कांस्य - जागतिक क्रमवारीत १८ वे स्थान); अवनी लेखरा (नेमबाजी सुवर्ण), नवदीप सिंग (भालाफेक सुवर्ण), सुमित अंतील (भालाफेक सुवर्ण); २) ICC पुरुष T20 विश्वचषक २०२४ (वेस्ट इंडिज व अमेरिका): भारताने अंतिम सामन्यात दक्षिण आफ्रिकेचा ७ धावांनी पराभव करून १७ वर्षांनंतर T20 विश्वचषक जिंकला (कर्णधार रोहित शर्मा); रोहित शर्मा, विराट कोहली व रवींद्र जडेजा यांची T20 आंतरराष्ट्रीय क्रिकेटमधून निवृत्ती",
                                            titleEn: "Paris Paralympics & T20 World Cup: Paris Paralympics 2024 saw India's record medal haul of 29 medals (7 Gold, 9 Silver, 13 Bronze, ranked 18th globally; Gold medalists Avani Lekhara, Navdeep Singh, Sumit Antil); ICC Men's T20 World Cup 2024 won by India defeating South Africa by 7 runs in Barbados under Rohit Sharma's captaincy; Post-triumph T20I retirement of Rohit, Kohli & Jadeja",
                                            chips: ["पॅरालिम्पिक २०२४ (विक्रमी २९ पदके)", "७ सुवर्ण पदके (१८ वे स्थान)", "T20 विश्वचषक २०२४ (भारत विजेता)", "रोहित शर्मा कर्णधार"]
                                        }
                                    ],
                                    sources: [
                                        { book: "पृथ्वी परिक्रमा", standard: "पृथ्वी अकॅडमी", chapterRef: "क्रीडा घडामोडी ऑलिम्पिक विशेषांक" },
                                        { book: "PIB Sports Release", standard: "Ministry of Youth Affairs and Sports", chapterRef: "Olympic & Paralympic Performance Report" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १०: राष्ट्रीय व आंतरराष्ट्रीय पुरस्कार (नागरी, शौर्य, साहित्य व चित्रपट)
                        // =========================================================================
                        {
                            id: "gc_ca_c10",
                            code: "CC10",
                            section: "D",
                            slug: "national-and-international-awards-honours-and-recognitions",
                            nameMr: "राष्ट्रीय व आंतरराष्ट्रीय पुरस्कार (नागरी, शौर्य, साहित्य व चित्रपट)",
                            nameEn: "Prestigious Honours: Bharat Ratna, Nobel Laureates, Padma Awards & Jnanpith",
                            name: "पुरस्कार व सन्मान (Awards & Honours)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_ca_c10",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_ca_c09",
                            nextChapterId: "gc_ca_c11",
                            metaDescriptionMr: "भारतरत्न २०२४ (कर्पूरी ठाकूर, लालकृष्ण अडवाणी, पी. व्ही. नरसिंह राव, चौधरी चरणसिंग, एम. एस. स्वामिनाथन), नोबेल पुरस्कार २०२४, ५८ वा ज्ञानपीठ पुरस्कार (गुलजार व जगद्गुरू रामभद्राचार्य), आणि राष्ट्रीय चित्रपट पुरस्कार.",
                            metaDescriptionEn: "Bharat Ratna 2024 conferments (Karpoori Thakur, L.K. Advani, P.V. Narasimha Rao, Charan Singh, M.S. Swaminathan), Nobel Prizes 2024, 58th Jnanpith Award (Gulzar and Rambhadracharya), and 70th National Film Awards.",
                            notesJsonPath: "/data/notes/group_c/prelims/current_affairs/c10_awards_honours.json",
                            quizTag: "gc_ca_awards_01",
                            tags: ["Bharat Ratna 2024 Five Recipients", "Nobel Prizes 2024", "Jnanpith Award 58th", "Padma Awards Maharashtra", "National Film Awards", "High-Weightage"],
                            searchKeywords: ["bharat ratna 2024 five awardees karpoori thakur advani narasimha rao charan singh swaminathan", "nobel prize 2024 physics ai hopfield hinton peace nihon hidankyo", "58th jnanpith award gulzar urdu jagadguru rambhadracharya sanskrit", "padma vibhushan 2024 vyjayanthimala chiranjeevi venkaiah naidu bindeshwar pathak", "70th national film awards best actor rishab shetty rdx kantara", "भारतरत्न २०२४ पाच व्यक्ती कर्पूरी ठाकूर अडवाणी नरसिंह राव स्वामिनाथन", "नोबेल पुरस्कार २०२४ शांतता निहोन हिदान्क्यो", "५८ वा ज्ञानपीठ पुरस्कार गुलजार व रामभद्राचार्य", "पद्म पुरस्कार महाराष्ट्र"],
                            topics: [
                                {
                                    id: "top_gc_c10_01",
                                    nameMr: "भारतरत्न २०२४ विजेते, नोबेल पारितोषिके आणि ज्ञानपीठ साहित्य सन्मान",
                                    nameEn: "Bharat Ratna Laureates, Global Nobel Roster & Jnanpith Literary Honours",
                                    subtopics: [
                                        {
                                            id: "st_gc_c10_01_01",
                                            titleMr: "भारतरत्न २०२४ (एकाच वर्षात ५ विभूतींना मरणोत्तर/जीवंत सन्मान): १) कर्पूरी ठाकूर (मरणोत्तर - बिहारचे माजी मुख्यमंत्री, 'जननायक'); २) लालकृष्ण अडवाणी (माजी उपपंतप्रधान); ३) पी. व्ही. नरसिंह राव (मरणोत्तर - भारताचे माजी पंतप्रधान, आर्थिक सुधारणांचे जनक); ४) चौधरी चरणसिंग (मरणोत्तर - भारताचे माजी पंतप्रधान, शेतकरी नेते); ५) डॉ. एम. एस. स्वामिनाथन (मरणोत्तर - भारतीय हरितक्रांतीचे जनक); (एका वर्षात ३ पेक्षा जास्त भारतरत्न देण्याची ही पहिलीच वेळ)",
                                            titleEn: "Bharat Ratna 2024 (Conferred on 5 Stalwarts): 1) Karpoori Thakur (Posthumous, Jan Nayak of Bihar), 2) Lal Krishna Advani (Former Deputy PM), 3) P.V. Narasimha Rao (Posthumous, Architect of 1991 Economic Reforms), 4) Chaudhary Charan Singh (Posthumous, Champion of Peasants), 5) Dr. M.S. Swaminathan (Posthumous, Father of India's Green Revolution)",
                                            chips: ["भारतरत्न २०२४ (५ व्यक्तींना सन्मान)", "कर्पूरी ठाकूर (जननायक)", "पी व्ही नरसिंह राव", "चौधरी चरणसिंग", "डॉ एम एस स्वामिनाथन", "लालकृष्ण अडवाणी"]
                                        },
                                        {
                                            id: "st_gc_c10_01_02",
                                            titleMr: "५८ वा ज्ञानपीठ पुरस्कार व इतर साहित्य पुरस्कार: १) ५८ वा ज्ञानपीठ पुरस्कार (२०२३ साठी): दोन भाषांमधील दिग्गजांना संयुक्तपणे प्रदान: अ) प्रसिद्ध गीतकार व उर्दू साहित्यिक 'गुलजार' (संपूर्ण सिंग कालरा), ब) संस्कृत विद्वान व तत्त्वज्ञ 'जगद्गुरू रामभद्राचार्य'; २) सरस्वती सन्मान २०२३: प्रसिद्ध मल्याळम कवयित्री प्रभा वर्मा ('रौद्र सात्विकम' काव्यासाठी); ३) ३३ वा व्यास सन्मान: पुष्पा भारती ('यादें, यादें और यादें' या संस्मरणासाठी)",
                                            titleEn: "58th Jnanpith & Literary Laureates: 58th Jnanpith Award jointly conferred upon Urdu lyricist/author Gulzar and Sanskrit polymath Jagadguru Rambhadracharya; Saraswati Samman awarded to Prabha Varma for 'Roudra Sathwikam'; 33rd Vyas Samman conferred on Pushpa Bharati for 'Yaadein, Yaadein aur Yaadein'",
                                            chips: ["५८ वा ज्ञानपीठ पुरस्कार", "गुलजार (उर्दू भाषा)", "जगद्गुरू रामभद्राचार्य (संस्कृत भाषा)", "सरस्वती सन्मान प्रभा वर्मा", "व्यास सन्मान पुष्पा भारती"]
                                        },
                                        {
                                            id: "st_gc_c10_01_03",
                                            titleMr: "नोबेल पुरस्कार २०२४ ठळक विजेते: १) शांततेचा नोबेल (Nobel Peace Prize): 'निहोन हिदान्क्यो' (Nihon Hidankyo - जपानमधील हिरोशिमा व नागासाकी अणुबॉम्ब हल्ल्यातून वाचलेल्या हिबाकुशांची संस्था - अण्वस्त्रमुक्त जगासाठी लढा); २) भौतिकशास्त्रातील नोबेल: जॉन हॉपफिल्ड आणि जेफ्री हिंटन (कृत्रिम बुद्धिमत्ता AI आणि न्यूरल नेटवर्क्सच्या विकासासाठी); ३) साहित्यातील नोबेल: हान कांग (Han Kang - दक्षिण कोरियाई लेखिका - 'द व्हेजिटेरियन')",
                                            titleEn: "Nobel Prizes 2024 Highlights: Peace: Nihon Hidankyo (Japanese grassroots organization of atomic bomb survivors working toward a nuclear-weapon-free world); Physics: John J. Hopfield and Geoffrey E. Hinton for foundational machine learning artificial neural networks; Literature: Han Kang (South Korean author of The Vegetarian)",
                                            chips: ["शांततेचा नोबेल २०२४ (निहोन हिदान्क्यो जपान)", "अण्वस्त्रमुक्त जगासाठी लढा", "भौतिकशास्त्र (AI न्यूरल नेटवर्क्स हॉपफिल्ड व हिंटन)", "साहित्य (हान कांग दक्षिण कोरिया)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "पृथ्वी परिक्रमा", standard: "पृथ्वी अकॅडमी", chapterRef: "पुरस्कार व गौरव विशेषांक" },
                                        { book: "Nobel Prize Official Site", standard: "nobelprize.org", chapterRef: "The Nobel Prize Winners 2024 Press Releases" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ११: आंतरराष्ट्रीय परिषदा, शिखर परिषदा व जागतिक संघटना
                        // =========================================================================
                        {
                            id: "gc_ca_c11",
                            code: "CC11",
                            section: "E",
                            slug: "international-summits-multilateral-conferences-and-groupings",
                            nameMr: "आंतरराष्ट्रीय परिषदा, शिखर परिषदा व जागतिक संघटना",
                            nameEn: "Global Diplomacy: Multilateral Summits (G20, BRICS, SCO, QUAD) & Treaties",
                            name: "जागतिक परिषदा (G20, BRICS, SCO)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 2,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_ca_c11",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_ca_c10",
                            nextChapterId: "gc_ca_c12",
                            metaDescriptionMr: "G20 नवी दिल्ली शिखर परिषद (वसुधैव कुटुंबकम्, आफ्रिकन युनियनचा स्थायी समावेश) ते ब्राझील G20, BRICS विस्तार (नवीन ५ सदस्य देश), SCO अस्ताना शिखर परिषद, आणि क्वाड (QUAD).",
                            metaDescriptionEn: "G20 New Delhi Declaration (African Union permanent entry, Global Biofuels Alliance) transitioning to Brazil G20, BRICS historic expansion, SCO Astana summit, and QUAD leadership summits.",
                            notesJsonPath: "/data/notes/group_c/prelims/current_affairs/c11_international_summits.json",
                            quizTag: "gc_ca_summits_01",
                            tags: ["G20 New Delhi Brazil", "African Union 21st Member", "BRICS Expansion 2024 Kazan", "SCO Summit", "QUAD Leaders", "High-Weightage"],
                            searchKeywords: ["g20 new delhi summit 2023 theme vasudhaiva kutumbakam african union permanent member", "g20 summit 2024 rio de janeiro brazil", "brics expansion 2024 16th summit kazan russia new members egypt ethiopia iran uae", "shanghai cooperation organisation sco summit astana kazakhstan belarus new member", "quad leaders summit wilmington delaware us india 2025 host", "G20 नवी दिल्ली परिषद वसुधैव कुटुंबकम आफ्रिकन युनियन", "G20 ब्राझील २०२४", "ब्रिक्स परिषद कझान रशिया नवीन सदस्य", "SCO अस्ताना परिषद बेलारूस १० वा सदस्य", "क्वाड शिखर परिषद"],
                            topics: [
                                {
                                    id: "top_gc_c11_01",
                                    nameMr: "G20 शिखर परिषद यश, ब्रिक्स विस्तार, SCO आणि क्वाड राजकारण",
                                    nameEn: "G20 Multilateral Architecture, BRICS Expansion, SCO & QUAD Geopolitics",
                                    subtopics: [
                                        {
                                            id: "st_gc_c11_01_01",
                                            titleMr: "G20 नवी दिल्ली शिखर परिषद व ब्राझील हस्तांतरण: ९-१० सप्टेंबर २०२३ रोजी भारताच्या अध्यक्षतेखाली नवी दिल्लीत 'भारत मंडपम' येथे १८ वी G20 परिषद पार पडली; थीम: 'वसुधैव कुटुंबकम्' (One Earth, One Family, One Future); ऐतिहासिक निर्णय: 'आफ्रिकन युनियन' (African Union - ५५ देशांचा संघ) ला G20 चा २१ वा स्थायी सदस्य म्हणून प्रवेश दिला; 'ग्लोबल बायोफ्युअल्स अलायन्स' (GBA) ची स्थापना; १९ वी G20 परिषद २०२४ मध्ये रिओ दी जानेरो (ब्राझील) येथे पार पडली",
                                            titleEn: "G20 New Delhi Summit & Brazil Presidency: 18th G20 Summit hosted at Bharat Mandapam (Sept 2023) under theme 'Vasudhaiva Kutumbakam'; Landmark outcomes: African Union inducted as 21st permanent member; Launched Global Biofuels Alliance (GBA) and India-Middle East-Europe Economic Corridor (IMEC); 19th G20 hosted in Rio de Janeiro, Brazil (2024)",
                                            chips: ["G20 नवी दिल्ली (भारत मंडपम)", "वसुधैव कुटुंबकम् थीम", "आफ्रिकन युनियन २१ वा सदस्य", "ग्लोबल बायोफ्युअल्स अलायन्स", "G20 ब्राझील २०२४"]
                                        },
                                        {
                                            id: "st_gc_c11_01_02",
                                            titleMr: "ब्रिक्स विस्तार (BRICS Expansion) व SCO: १) ब्रिक्स (BRICS) चा ऐतिहासिक विस्तार: १ जानेवारी २०२४ पासून ५ नवीन देश अधिकृतपणे सदस्य बनले: इजिप्त, इथिओपिया, इराण, सौदी अरेबिया, आणि संयुक्त अरब अमिराती (UAE); १६ वी ब्रिक्स परिषद कझान (रशिया) येथे पार पडली; २) शांघाय सहकार्य संघटना (SCO): अस्ताना (कझाकस्तान) शिखर परिषदेत 'बेलारूस' हा SCO चा १० वा पूर्ण सदस्य बनला; ३) क्वाड (QUAD): भारत, अमेरिका, जपान व ऑस्ट्रेलिया यांच्यातील सहकार्य",
                                            titleEn: "BRICS Expansion & SCO Dynamics: 1) BRICS inducted 5 new members on 1 Jan 2024: Egypt, Ethiopia, Iran, Saudi Arabia, and UAE (16th BRICS Summit held in Kazan, Russia); 2) Shanghai Cooperation Organisation (SCO Astana Summit inducted Belarus as its 10th full member); 3) QUAD Leaders meet advancing Indo-Pacific maritime security",
                                            chips: ["ब्रिक्स विस्तार (इजिप्त, इराण, UAE, इथिओपिया)", "१६ वी ब्रिक्स परिषद कझान रशिया", "SCO १० वा सदस्य बेलारूस", "क्वाड QUAD सहकार्य"]
                                        }
                                    ],
                                    sources: [
                                        { book: "पृथ्वी परिक्रमा", standard: "पृथ्वी अकॅडमी", chapterRef: "आंतरराष्ट्रीय परिषदा व संघटना" },
                                        { book: "Ministry of External Affairs (MEA)", standard: "Government of India", chapterRef: "Multilateral Summits Briefs" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १२: महत्त्वाची पदे, नियुक्त्या, राजीनामे व चर्चित व्यक्ती
                        // =========================================================================
                        {
                            id: "gc_ca_c12",
                            code: "CC12",
                            section: "E",
                            slug: "high-profile-constitutional-appointments-and-personalities",
                            nameMr: "महत्त्वाची पदे, नियुक्त्या, राजीनामे व चर्चित व्यक्ती (National & Global)",
                            nameEn: "Institutional Governance: Constitutional Appointments, Key Executives & Global Chiefs",
                            name: "महत्त्वाच्या नियुक्त्या व चर्चित व्यक्ती",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 2,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_ca_c12",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_ca_c11",
                            nextChapterId: "gc_ca_c13",
                            metaDescriptionMr: "भारताचे सरन्यायाधीश (CJI), मुख्य निवडणूक आयुक्त, MPSC चे नवे अध्यक्ष, लष्करप्रमुख (Chief of Army Staff), नौदलप्रमुख, भारताचे महान्यायवादी (आर. वेंकटरामणी), आणि आंतरराष्ट्रीय संस्था प्रमुख (अजय बंगा - जागतिक बँक).",
                            metaDescriptionEn: "Chief Justice of India, Chief Election Commissioner, New MPSC Chairman, Chief of the Army Staff, Navy Chief, Attorney General R. Venkataramani, and Indian-origin global leaders (Ajay Banga, World Bank President).",
                            notesJsonPath: "/data/notes/group_c/prelims/current_affairs/c12_appointments_personalities.json",
                            quizTag: "gc_ca_appointments_01",
                            tags: ["Constitutional Appointments", "Chief Justice of India CJI", "Chief Election Commissioner", "MPSC Chairman", "Army Navy Chiefs", "Ajay Banga World Bank", "High-Weightage"],
                            searchKeywords: ["chief justice of india 50th cji dy chandrachud successor", "chief election commissioner of india rajiv kumar", "mpsc new chairman appointment maharashtra", "chief of army staff general upendra dwivedi navy chief dinesh tripathi", "ajay banga world bank president indian origin", "भारताचे सरन्यायाधीश", "मुख्य निवडणूक आयुक्त", "MPSC नवीन अध्यक्ष", "लष्करप्रमुख उपेंद्र द्विवेदी", "अजय बंगा जागतिक बँक अध्यक्ष"],
                            topics: [
                                {
                                    id: "top_gc_c12_01",
                                    nameMr: "राष्ट्रीय व राज्य घटनात्मक नियुक्त्या आणि आंतरराष्ट्रीय स्तरावरील भारतीय नेतृत्व",
                                    nameEn: "National Executive Designations, State Commission Heads & Global Leadership",
                                    subtopics: [
                                        {
                                            id: "st_gc_c12_01_01",
                                            titleMr: "राष्ट्रीय व राज्यस्तरीय महत्त्वाच्या नियुक्त्या: १) संरक्षण दल: लष्करप्रमुख (Chief of Army Staff) - जनरल उपेंद्र द्विवेदी; नौदलप्रमुख (Chief of Naval Staff) - ॲडमिरल दिनेश कुमार त्रिपाठी; हवाई दलप्रमुख - एअर चीफ मार्शल अमरप्रीत सिंग; चीफ ऑफ डिफेन्स स्टाफ (CDS) - जनरल अनिल चौहान; २) कायदा व न्याय: भारताचे महान्यायवादी (Attorney General) - आर. वेंकटरामणी; सॉलिसीटर जनरल - तुषार मेहता; ३) महाराष्ट्र लोकसेवा आयोग (MPSC): अध्यक्ष व नवनियुक्त सदस्य",
                                            titleEn: "National & State Leadership Appointments: Armed Forces: Chief of Army Staff (General Upendra Dwivedi), Chief of Naval Staff (Admiral Dinesh Kumar Tripathi), Chief of Air Staff (Air Chief Marshal Amar Preet Singh), CDS General Anil Chauhan; Law: Attorney General of India (R. Venkataramani), Solicitor General (Tushar Mehta); MPSC Chairman & Board",
                                            chips: ["लष्करप्रमुख जनरल उपेंद्र द्विवेदी", "नौदलप्रमुख ॲडमिरल दिनेश त्रिपाठी", "हवाई दलप्रमुख अमरप्रीत सिंग", "CDS जनरल अनिल चौहान", "महान्यायवादी आर वेंकटरामणी"]
                                        },
                                        {
                                            id: "st_gc_c12_01_02",
                                            titleMr: "आंतरराष्ट्रीय संस्थांवरील भारतीय नेतृत्व: १) अजय बंगा (Ajay Banga): जागतिक बँकेचे (World Bank) १४ वे अध्यक्ष म्हणून नियुक्ती (जागतिक बँकेचे अध्यक्ष होणारे पहिलेच भारतीय वंशाचे व्यक्ती); २) गीता गोपीनाथ: आंतरराष्ट्रीय नाणेनिधीच्या (IMF) पहिल्या उपव्यवस्थापकीय संचालक (First Deputy Managing Director); ३) रुचिरा कंबोज: संयुक्त राष्ट्रांमधील (UN) भारताच्या माजी स्थायी प्रतिनिधी (त्यांच्यानंतर पी. हरिश यांची नियुक्ती)",
                                            titleEn: "Global Institutional Leaders: Ajay Banga appointed 14th President of the World Bank (first Indian-American to hold the office); Gita Gopinath serving as First Deputy Managing Director of the IMF; P. Harish appointed India's Permanent Representative to the United Nations",
                                            chips: ["अजय बंगा (जागतिक बँक अध्यक्ष)", "गीता गोपीनाथ (IMF उपव्यवस्थापकीय संचालक)", "पी हरिश (UNO भारतीय प्रतिनिधी)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "पृथ्वी परिक्रमा", standard: "पृथ्वी अकॅडमी", chapterRef: "महत्त्वाच्या नियुक्त्या व चर्चित पदे" },
                                        { book: "सिम्पलीफाइड चालू घडामोडी", standard: "डॉ. सुशील बारी", chapterRef: "घटनात्मक पदे व नियुक्त्या" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १३: निधन वार्ता (Obituaries): साहित्यिक, राजकीय, कला व क्रीडा
                        // =========================================================================
                        {
                            id: "gc_ca_c13",
                            code: "CC13",
                            section: "E",
                            slug: "obituaries-distinguished-personalities-culture-politics-and-arts",
                            nameMr: "निधन वार्ता (Obituaries): साहित्यिक, राजकीय, कला व क्रीडा व्यक्तिमत्त्वे",
                            nameEn: "Obituaries: Tributes to Eminent Litterateurs, National Icons & Cultural Stalwarts",
                            name: "निधन वार्ता व चर्चित व्यक्ती",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 2,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_ca_c13",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_ca_c12",
                            nextChapterId: "gc_ca_c14",
                            metaDescriptionMr: "महाराष्ट्रातील व भारतातील ज्येष्ठ साहित्यिक, कलावंत, राजकीय नेते, स्वातंत्र्यसैनिक व विचारवंत यांच्या निधनानंतरचे जीवनकार्य, मिळालेले पुरस्कार व ग्रंथसंपदा.",
                            metaDescriptionEn: "Comprehensive obituaries and lifetime contributions: Celebrated authors, veteran actors, political veterans, freedom fighters, and social visionaries recently passed away.",
                            notesJsonPath: "/data/notes/group_c/prelims/current_affairs/c13_obituaries.json",
                            quizTag: "gc_ca_obit_01",
                            tags: ["Obituaries", "Maharashtra Stalwarts", "Literary Icons", "Cinema Veterans", "Political Figures", "High-Weightage"],
                            searchKeywords: ["recent obituaries maharashtra national international personalities", "famous litterateurs passed away books awards", "veteran actors singers politicians lifetime contribution", "निधन वार्ता महाराष्ट्र साहित्य संस्कृती", "ज्येष्ठ साहित्यिक व विचारवंत निधन ग्रंथसंपदा पुरस्कार"],
                            topics: [
                                {
                                    id: "top_gc_c13_01",
                                    nameMr: "महाराष्ट्रातील आणि राष्ट्रीय स्तरावरील दिवंगत विभूतींचे जीवनकार्य व सन्मान",
                                    nameEn: "Tributes to Prominent Departed Personalities, Literature & Public Legacies",
                                    subtopics: [
                                        {
                                            id: "st_gc_c13_01_01",
                                            titleMr: "साहित्य, कला व समाजकारणातील दिवंगत विभूती: गेल्या वर्षभरात निधन झालेल्या महाराष्ट्रातील व भारतातील ज्येष्ठ साहित्यिक, नाटककार, चित्रपट अभिनेते, शास्त्रीय संगीतकार, स्वातंत्र्यसैनिक आणि समाजसुधारक; त्यांची प्रमुख पुस्तके, कादंबऱ्या, मिळालेले पद्म पुरस्कार किंवा साहित्य अकादमी पुरस्कार; परीक्षेत थेट विचारल्या जाणाऱ्या ग्रंथसंपदा व जीवनकार्याचा सखोल वेध",
                                            titleEn: "Cultural & Literary Obituaries: Retrospective on the life, books, plays, musical recordings, and state/national awards of prominent writers, artists, theater doyens, and social leaders passed away during the evaluation cycle",
                                            chips: ["ज्येष्ठ साहित्यिक निधन", "साहित्य अकादमी पुरस्कार विजेते", "कला व संगीत क्षेत्रातील विभूती", "ग्रंथसंपदा व कार्य"]
                                        },
                                        {
                                            id: "st_gc_c13_01_02",
                                            titleMr: "राजकीय व प्रशासकीय क्षेत्रातील दिवंगत व्यक्तिमत्त्वे: माजी मुख्यमंत्री, राज्यपाल, केंद्रीय मंत्री, संसद सदस्य, न्यायमूर्ती आणि भारतीय प्रशासकीय सेवेतील ज्येष्ठ सनदी अधिकारी; त्यांनी भूषवलेली महत्त्वाची पदे, संमत केलेले ऐतिहासिक निर्णय किंवा नेतृत्व केलेले आयोग",
                                            titleEn: "Public Service & Political Tributes: Former Chief Ministers, Governors, Cabinet ministers, Parliamentarians, Jurists, and Bureaucratic administrators who passed away, highlighting their institutional reforms and commission tenures",
                                            chips: ["माजी मुख्यमंत्री व नेते निधन", "घटनात्मक पदे भूषवलेल्या व्यक्ती", "प्रशासकीय सुधारक"]
                                        }
                                    ],
                                    sources: [
                                        { book: "पृथ्वी परिक्रमा", standard: "पृथ्वी अकॅडमी", chapterRef: "निधन वार्ता विशेषांक" },
                                        { book: "लोकसत्ता / सकाळ वृत्तपत्र", standard: "संपादकीय विशेष लेख", chapterRef: "दिवंगत मान्यवरांचा जीवनपट" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १४: पूर्व परीक्षा चालू घडामोडी मास्टर रिव्हिजन व १० वर्षांचे PYQ ट्रेंड्स
                        // =========================================================================
                        {
                            id: "gc_ca_c14",
                            code: "CC14",
                            section: "F",
                            slug: "prelims-current-affairs-master-revision-and-pyq-trends",
                            nameMr: "पूर्व परीक्षा चालू घडामोडी मास्टर रिव्हिजन व १० वर्षांचे PYQ ट्रेंड्स",
                            nameEn: "Current Affairs Master Consolidation: Fast-Track Revision, Days & 10-Year PYQ Insights",
                            name: "चालू घडामोडी मास्टर रिव्हिजन",
                            category: "REVISION",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_ca_c14",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_ca_c13",
                            nextChapterId: null,
                            metaDescriptionMr: "गट-क पूर्व परीक्षा चालू घडामोडींच्या १५ प्रश्नांची (१५ गुण) अचूक रणनीती, जलद उजळणी तक्ते, राष्ट्रीय-आंतरराष्ट्रीय दिनविशेष व थीम्स, पुस्तके व लेखक, आणि २०१३ ते २०२५ मधील MPSC PYQ ट्रेंड्स.",
                            metaDescriptionEn: "Strategic Master Revision for Prelims Current Affairs (15/15 Target): Fast-track consolidated tables, International Days and Themes, Books & Authors, and 10-Year MPSC Group C trend analytics.",
                            notesJsonPath: "/data/notes/group_c/prelims/current_affairs/c14_master_revision_pyqs.json",
                            quizTag: "gc_ca_revision_01",
                            tags: ["Revision", "Prelims Strategy", "15 Marks Target", "Important Days Themes", "Books and Authors", "PYQ Trends 2013 to 2025", "High-Weightage"],
                            searchKeywords: ["mpsc group c current affairs 15 questions strategy pyq trends 2013 to 2025", "important international days and themes 2024 2025", "books and authors recent publications", "fast track revision current affairs maharashtra", "चालू घडामोडी पूर्व परीक्षा रणनीती १५ गुण", "महत्त्वाचे दिनविशेष व थीम्स", "पुस्तके व लेखक यादी", "१० वर्षांचे PYQ विश्लेषण"],
                            topics: [
                                {
                                    id: "top_gc_c14_01",
                                    nameMr: "महत्त्वाचे दिनविशेष, नवी पुस्तके व लेखक आणि १० वर्षांचे MPSC PYQ विश्लेषण",
                                    nameEn: "International Days with Themes, Recent Publications & 10-Year PYQ Insights",
                                    subtopics: [
                                        {
                                            id: "st_gc_c14_01_01",
                                            titleMr: "महत्त्वाचे राष्ट्रीय-आंतरराष्ट्रीय दिनविशेष व थीम्स: ९ जानेवारी - प्रवासी भारतीय दिन; २४ जानेवारी - राष्ट्रीय बालिका दिन; २५ जानेवारी - राष्ट्रीय मतदार दिन; २८ फेब्रुवारी - राष्ट्रीय विज्ञान दिन (National Science Day - रामन इफेक्ट); ८ मार्च - आंतरराष्ट्रीय महिला दिन; २२ एप्रिल - जागतिक वसुंधरा दिन; ५ जून - जागतिक पर्यावरण दिन; २१ जून - आंतरराष्ट्रीय योग दिन; २३ ऑगस्ट - राष्ट्रीय अंतराळ दिन (National Space Day); २६ नोव्हेंबर - संविधान दिन",
                                            titleEn: "Important Days & Themes Matrix: 9 Jan (Pravasi Bharatiya Divas); 24 Jan (National Girl Child Day); 25 Jan (National Voters Day); 28 Feb (National Science Day, Raman Effect); 8 March (International Women's Day); 22 April (Earth Day); 5 June (World Environment Day); 21 June (International Yoga Day); 23 August (National Space Day); 26 November (Constitution Day)",
                                            chips: ["२३ ऑगस्ट (राष्ट्रीय अंतराळ दिन)", "२८ फेब्रुवारी (विज्ञान दिन रामन इफेक्ट)", "५ जून (जागतिक पर्यावरण दिन)", "२६ नोव्हेंबर (संविधान दिन)", "२१ जून (योग दिन)"]
                                        },
                                        {
                                            id: "st_gc_c14_01_02",
                                            titleMr: "MPSC पूर्व परीक्षा चालू घडामोडी १० वर्षांचे विश्लेषण (१५ पैकी १३+ गुण रणनीती): प्रश्न वितरणाचा कल: महाराष्ट्र शासन योजना व धोरणे (३-४ प्रश्न हमखास), क्रीडा घडामोडी (२-३ प्रश्न - ऑलिम्पिक/विश्वचषक), पुरस्कार व सन्मान (२-३ प्रश्न - भारतरत्न/नोबेल/ज्ञानपीठ), अंतराळ विज्ञान व संरक्षण (२ प्रश्न - इस्रो मोहिमा/युद्धसराव), निर्देशांक व अहवाल (१-२ प्रश्न), महत्त्वाच्या नियुक्त्या व निधन (१-२ प्रश्न); मागील १२ ते १५ महिन्यांच्या चालू घडामोडींवर विशेष भर; एलिमिनेशन पद्धतीचा वापर करून अचूक उत्तरे मिळवणे",
                                            titleEn: "10-Year MPSC Group C Current Affairs Trend Analytics (13+/15 Strategy): Question distribution: Maharashtra Government schemes (3-4 Qs), Sports (2-3 Qs: Olympics, World Cup), Awards (2-3 Qs: Bharat Ratna, Jnanpith, Nobel), Space & Defense (2 Qs: ISRO, Drills), Global Indices (1-2 Qs), Appointments & Obituaries (1-2 Qs); Recommended focus on last 12-15 months of events; Elimination heuristics",
                                            chips: ["PYQ ट्रेंड्स विश्लेषण", "१५ पैकी १३+ गुण रणनीती", "महाराष्ट्र योजना ३-४ प्रश्न हमखास", "क्रीडा व पुरस्कार प्रश्न", "१२ ते १५ महिन्यांचा अभ्यास"]
                                        }
                                    ],
                                    sources: [
                                        { book: "पृथ्वी परिक्रमा", standard: "पृथ्वी अकॅडमी", chapterRef: "मास्टर उजळणी व सांख्यिकी संच" },
                                        { book: "MPSC मागील वर्षांच्या प्रश्नपत्रिका संच", standard: "२०१३ ते २०२५", chapterRef: "चालू घडामोडी पूर्व परीक्षा प्रश्न विश्लेषण" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },


        // ७. अंकगणित व बुद्धिमत्ता (`gc_pre_aptitude_reasoning`)
        {
            id: "gc_pre_aptitude_reasoning",
            code: "APT",
            slug: "quantitative-aptitude-and-logical-reasoning",
            nameMr: "अंकगणित व बुद्धिमत्ता चाचणी",
            nameEn: "Quantitative Aptitude and Logical Reasoning",
            name: "अंकगणित व बुद्धिमत्ता (Aptitude & Reasoning)",
            officialScope: "Basic Numeracy, LCM-HCF, Percentages, Profit-Loss, Time-Work-Distance, Coding-Decoding, Blood Relations, Directions, Clocks, Calendars, and Syllogisms",
            version: "1.0",
            verifiedDate: "2026-10-28",
            notesJsonBaseDir: "/data/notes/group_c/prelims/aptitude/",
            theme: { primaryColor: "#7c3aed", bgColor: "#f5f3ff", iconClass: "ri-calculator-line" },
            metrics: { totalChapters: 16, totalEstimatedHours: 52, avgQuestionsInPrelims: 15, targetMarks: 15, weightageRange: "14-16 Questions" },
            subjectTags: ["Core-GS", "Group-C-Prelims", "Combined-Common", "Formula-Intensive", "Speed-Crucial"],
            filterCategory: "GS",
            searchKeywords: ["mpsc group c aptitude reasoning", "maths shortcuts percentage time work clocks", "अंकगणित बुद्धिमत्ता"],
            referenceSources: [
                { name: "संपूर्ण बुद्धिमत्ता चाचणी - सचिन ढवळे", role: "शॉर्टकट ट्रिक्स व सराव" },
                { name: "मॅजिक ऑफ मॅथ्स - नितीन महाले", role: "मूलभूत गणितीय संकल्पना" }
            ],
            chapters: [
                {
                    id: "gc_pre_aptitude_reasoning",
                    code: "APT",
                    slug: "quantitative-aptitude-and-logical-reasoning-prelims",
                    nameMr: "अंकगणित व बुद्धिमत्ता चाचणी",
                    nameEn: "Quantitative Aptitude and Logical Reasoning",
                    name: "अंकगणित व बुद्धिमत्ता (Aptitude & Reasoning)",
                    officialScope: "Basic Numeracy, LCM & HCF, Averages & Age Problems, Ratio, Proportion & Mixtures, Percentages, Profit & Loss, Simple & Compound Interest, Time, Work & Pipes, Speed, Time, Distance, Trains & Boats, Number & Letter Series, Coding-Decoding, Blood Relations, Direction Sense, Clocks & Calendar, Seating Arrangements & Puzzles, Venn Diagrams & Syllogism, Analytical Statements & Assumptions, and Data Interpretation for MPSC Group C Combined Prelims",
                    version: "1.0",
                    verifiedDate: "2026-10-28",
                    notesJsonBaseDir: "/data/notes/group_c/prelims/aptitude/",


                    theme: {
                        primaryColor: "#7c3aed",        // Royal Violet / Analytical Logic Theme
                        bgColor: "#f5f3ff",
                        iconClass: "ri-calculator-line"
                    },


                    metrics: {
                        totalChapters: 16,
                        totalEstimatedHours: 52,
                        avgQuestionsInPrelims: 15,
                        targetMarks: 15,
                        weightageRange: "14-16 Questions"
                    },


                    subjectTags: [
                        "Core-GS",
                        "Group-C-Prelims",
                        "Pre-Cum-Mains",
                        "Formula-Intensive",
                        "Speed-Crucial",
                        "High-Scoring",
                        "Standard-Dhavale-Mahale"
                    ],


                    filterCategory: "GS",
                    searchKeywords: [
                        "mpsc group c aptitude reasoning prelims syllabus", "maths shortcuts number system lcm hcf",
                        "percentage profit loss simple compound interest formula", "time work pipes cisterns speed distance trains boats",
                        "logical reasoning blood relations direction sense clocks calendar",
                        "coding decoding series seating arrangements puzzles syllogism",
                        "अंकगणित बुद्धिमत्ता पूर्व परीक्षा", "लसावि मसावि शेकडेवारी नफा तोटा", "काम काळ वेग आगगाडी बोट", "नातेसंबंध दिशा घड्याळ दिनदर्शिका", "बैठक व्यवस्था कोडी बुद्धिमत्ता"
                    ],


                    referenceSources: [
                        {
                            name: "संपूर्ण बुद्धिमत्ता चाचणी - सचिन ढवळे",
                            role: "MPSC बुद्धिमत्ता चाचणी शॉर्टकट ट्रिक्स व वर्गीकरण प्रमाण संदर्भ"
                        },
                        {
                            name: "मॅजिक ऑफ मॅथ्स - नितीन महाले",
                            role: "अंकगणित मूलभूत संकल्पना व स्पर्धा परीक्षा पद्धती"
                        },
                        {
                            name: "Quantitative Aptitude for Competitive Examinations - डॉ. आर. एस. अग्रवाल",
                            role: "अंकगणित सराव व बहुपर्यायी वस्तुनिष्ठ पद्धती"
                        },
                        {
                            name: "A Modern Approach to Verbal & Non-Verbal Reasoning - डॉ. आर. एस. अग्रवाल",
                            role: "तार्किक व विश्लेषणात्मक विचार पद्धती"
                        }
                    ],


                    chapters: [
                        // =========================================================================
                        // प्रकरण १: संख्या पद्धती, कसोट्या, वर्ग-घन आणि पदावली (BODMAS नियम)
                        // =========================================================================
                        {
                            id: "gc_apt_c01",
                            code: "CA01",
                            section: "A",
                            slug: "number-system-divisibility-rules-and-bodmas-simplification",
                            nameMr: "संख्या पद्धती, कसोट्या, वर्ग-घन आणि पदावली (BODMAS नियम)",
                            nameEn: "Number System: Number Types, Divisibility Tests, Powers & BODMAS Simplification",
                            name: "संख्या पद्धती व पदावली (BODMAS)",
                            category: "CORE",
                            difficulty: "EASY",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_apt_c01",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: null,
                            nextChapterId: "gc_apt_c02",
                            metaDescriptionMr: "संख्यांचे प्रकार (नैसर्गिक, मूळ, जोडमूळ, सहमूळ संख्या), २ ते ११ च्या विभाज्यतेच्या कसोट्या, पदावली (कंचेभागुबेव / BODMAS नियम), वर्ग, वर्गमूळ, घन, घनमूळ, आणि घातांकाचे नियम.",
                            metaDescriptionEn: "Number classification (Natural, Whole, Prime, Co-prime numbers), Divisibility tests (2 to 11), BODMAS bracket priority rules, Squares, Square Roots, Cubes, and Laws of Indices.",
                            notesJsonPath: "/data/notes/group_c/prelims/aptitude/c01_number_system_bodmas.json",
                            quizTag: "gc_apt_num_01",
                            tags: ["Number System", "Prime Numbers", "Divisibility Rules", "BODMAS Rule", "Squares Cubes", "High-Weightage"],
                            searchKeywords: ["number system natural whole integers prime co prime numbers", "divisibility tests 2 3 4 5 6 7 8 9 11", "bodmas rule brackets orders division multiplication addition subtraction", "square and square root shortcut tricks cube roots laws of indices", "संख्या पद्धती मूळ संख्या जोडमूळ", "विभाज्यतेच्या कसोट्या २ ते ११", "पदावली कंचेभागुबेव नियम BODMAS", "वर्ग वर्गमूळ घन घनमूळ ट्रिक्स"],
                            topics: [
                                {
                                    id: "top_gc_a01_01",
                                    nameMr: "संख्यांचे प्रकार, विभाज्यतेच्या कसोट्या आणि कंचेभागुबेव पदावली",
                                    nameEn: "Number Taxonomy, Divisibility Diagnostics & Operator Precedence",
                                    subtopics: [
                                        {
                                            id: "st_gc_a01_01_01",
                                            titleMr: "संख्यांचे प्रकार व मूळ संख्या संकल्पना: १) नैसर्गिक संख्या ($1, 2, 3...$), पूर्ण संख्या ($0, 1, 2...$), पूर्णांक संख्या; २) मूळ संख्या (Prime Numbers: केवळ १ ने व स्वतःने भाग जाणाऱ्या संख्या; १ ते १०० दरम्यान एकूण २५ मूळ संख्या असतात, बेरीज १,०६०; २ ही एकमेव 'सम मूळ संख्या' आहे); ३) जोडमूळ संख्या (Twin Primes: ज्या दोन मूळ संख्यांमध्ये २ चा फरक असतो; १ ते १०० मध्ये ८ जोड्या आहेत); ४) सहमूळ संख्या (Co-primes: ज्यांचा सामाईक विभाजक केवळ १ असतो)",
                                            titleEn: "Number System Classification: Natural, Whole, and Integers; Prime Numbers (Numbers divisible only by 1 and self; Exactly 25 prime numbers between 1 and 100 summing to 1,060; 2 is the sole even prime); Twin Primes (Prime pairs differing by 2; 8 pairs between 1 and 100); Co-prime Numbers (HCF equals 1)",
                                            chips: ["१ ते १०० मध्ये २५ मूळ संख्या", "२ ही एकमेव सम मूळ संख्या", "जोडमूळ संख्या ८ जोड्या", "सहमूळ संख्या Co-primes"]
                                        },
                                        {
                                            id: "st_gc_a01_01_02",
                                            titleMr: "विभाज्यतेच्या कसोट्या (Divisibility Rules): २ ची कसोटी (शेवटचा अंक सम); ३ ची कसोटी (अंकांच्या बेरजेला ३ ने भाग जाणे); ४ ची कसोटी (शेवटच्या दोन अंकांना ४ ने भाग); ५ ची कसोटी (शेवटी ० किंवा ५); ६ ची कसोटी (२ व ३ ने भाग जाणे); ८ ची कसोटी (शेवटच्या तीन अंकांना ८ ने भाग); ९ ची कसोटी (अंकांच्या बेरजेला ९ ने भाग); ११ ची कसोटी (विषम स्थानावरील व सम स्थानावरील अंकांच्या बेरजेतील फरक ० किंवा ११ च्या पटीत असणे)",
                                            titleEn: "Divisibility Rules: Rule for 2 (Even units digit); Rule for 3 (Sum of digits divisible by 3); Rule for 4 (Last 2 digits divisible by 4); Rule for 8 (Last 3 digits divisible by 8); Rule for 9 (Sum of digits divisible by 9); Rule for 11 (Difference between sum of odd-place digits and even-place digits is 0 or multiple of 11)",
                                            chips: ["विभाज्यतेच्या कसोट्या", "३ व ९ ची कसोटी (अंकांची बेरीज)", "४ व ८ ची कसोटी (शेवटचे अंक)", "११ ची कसोटी (विषम-सम स्थाने)"]
                                        },
                                        {
                                            id: "st_gc_a01_01_03",
                                            titleMr: "पदावली व BODMAS नियम: कंचेभागुबेव नियम: १) कंस (Brackets: प्रथम रेषा कंस, साधा कंस (), महिरपी {}, शेवटी चौकोनी []), २) चे / घातांक (Orders/Of: $\times$), ३) भागाकार (Division), ४) गुणाकार (Multiplication), ५) बेरीज (Addition), ६) वजाबाकी (Subtraction); डावीकडून उजवीकडे क्रिया सोडवण्याची पद्धत; चिन्हांचे नियम ($- \times - = +$, $+ \times - = -$)",
                                            titleEn: "Operator Precedence (BODMAS Rule): Sequence of operations: Brackets (Bar, Round (), Curly {}, Square []), Orders/Of, Division, Multiplication, Addition, Subtraction; Left-to-right evaluation; Signed arithmetic rules",
                                            chips: ["BODMAS नियम", "कंचेभागुबेव पद्धत", "कंसांचे प्रकार सोडवणे", "चिन्हांचे नियम"]
                                        }
                                    ],
                                    sources: [
                                        { book: "मॅजिक ऑफ मॅथ्स", standard: "नितीन महाले", chapterRef: "प्रकरण १: संख्याज्ञान व कसोट्या" },
                                        { book: "संपूर्ण बुद्धिमत्ता चाचणी", standard: "सचिन ढवळे", chapterRef: "अंकगणित मूलभूत संकल्पना" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण २: लसावि व मसावि (LCM & HCF) आणि व्यावहारिक उपयोजन
                        // =========================================================================
                        {
                            id: "gc_apt_c02",
                            code: "CA02",
                            section: "A",
                            slug: "lcm-and-hcf-concepts-and-practical-applications",
                            nameMr: "लसावि व मसावि (LCM & HCF) आणि व्यावहारिक उपयोजन",
                            nameEn: "LCM & HCF: Prime Factorization, Fractions & Practical Applications",
                            name: "लसावि व मसावि (LCM & HCF)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_apt_c02",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_apt_c01",
                            nextChapterId: "gc_apt_c03",
                            metaDescriptionMr: "महत्तम सामाईक विभाजक (मसावि HCF), लघुत्तम सामाईक विभाज्य (लसावि LCM), अपूर्णांकांचा लसावि-मसावि, दोन संख्यांचे गुणनफल सूत्र, आणि मंदिरातील घंटा वाजणे व दिव्यांची लुकलुक यांवरील व्यावहारिक गणिते.",
                            metaDescriptionEn: "Highest Common Factor (HCF), Least Common Multiple (LCM), Fractions LCM/HCF formulas, Product formula ($\text{Number}_1 \times \text{Number}_2 = \text{LCM} \times \text{HCF}$), and practical applications (Toll bells, traffic lights).",
                            notesJsonPath: "/data/notes/group_c/prelims/aptitude/c02_lcm_hcf.json",
                            quizTag: "gc_apt_lcm_01",
                            tags: ["LCM HCF", "Prime Factorization", "Product Formula LCM HCF", "Fractions LCM HCF", "Toll Bells Traffic Lights", "High-Weightage"],
                            searchKeywords: ["lcm and hcf prime factorization division method", "product of two numbers equals lcm into hcf formula", "lcm and hcf of fractions formula lcm of numerators hcf of denominators", "traffic lights toll bells ringing together lcm problems", "लसावि व मसावि मूळ अवयव पद्धत", "दोन संख्यांचा गुणाकार = लसावि × मसावि", "अपूर्णांकांचा लसावि मसावि सूत्र", "घंटा वाजणे व ट्रॅफिक दिवे लसावि"],
                            topics: [
                                {
                                    id: "top_gc_a02_01",
                                    nameMr: "लसावि-मसावि पद्धती, अपूर्णांक सूत्रे आणि व्यवहारातील उपयोजन",
                                    nameEn: "LCM-HCF Formulations, Fractional Calculations & Event Synchronization",
                                    subtopics: [
                                        {
                                            id: "st_gc_a02_01_01",
                                            titleMr: "मसावि व लसावि संकल्पना: १) मसावि (HCF / GCD): दिलेल्या सर्व संख्यांना भाग जाणारा सर्वात मोठा सामाईक विभाजक; २) लसावि (LCM): दिलेल्या सर्व संख्यांनी भाग जाणारी सर्वात लहान सामाईक विभाज्य संख्या; ३) मूलभूत संबंध सूत्र: दोन संख्यांचा गुणाकार = त्यांचा लसावि × त्यांचा मसावि ($\text{पहिली संख्या} \times \text{दुसरी संख्या} = \text{LCM} \times \text{HCF}$); ४) सहमूळ संख्यांचा मसावि नेहमी '१' असतो आणि लसावि हा 'त्यांच्या गुणाकाराएवढा' असतो",
                                            titleEn: "HCF & LCM Mechanics: HCF is the greatest common factor dividing all given numbers; LCM is the smallest common multiple divisible by all given numbers; Product Theorem: $\text{First Number} \times \text{Second Number} = \text{LCM} \times \text{HCF}$; For co-prime numbers, HCF is always 1 and LCM equals their product",
                                            chips: ["मसावि HCF (सामाईक विभाजक)", "लसावि LCM (सामाईक विभाज्य)", "पहिली $\\times$ दुसरी = लसावि $\\times$ मसावि", "सहमूळ संख्या मसावि = १"]
                                        },
                                        {
                                            id: "st_gc_a02_01_02",
                                            titleMr: "अपूर्णांक व दशांश संख्यांचा लसावि-मसावि: १) अपूर्णांकांचा लसावि = $\frac{\text{अंशांचा लसावि}}{\text{छेदांचा मसावि}}$; २) अपूर्णांकांचा मसावि = $\frac{\text{अंशांचा मसावि}}{\text{छेदांचा लसावि}}$; दशांश अपूर्णांकांचा लसावि काढताना प्रथम दशांश चिन्हांची संख्या समान करून नंतर पूर्णांक मानून लसावि काढावा व उत्तरात दशांश चिन्ह द्यावे",
                                            titleEn: "LCM & HCF of Fractions: LCM of Fractions = $\frac{\text{LCM of Numerators}}{\text{HCF of Denominators}}$; HCF of Fractions = $\frac{\text{HCF of Numerators}}{\text{LCM of Denominators}}$; For decimal fractions, equalize decimal places before computing integer LCM/HCF",
                                            chips: ["अपूर्णांकांचा लसावि (अंशांचा लसावि / छेदांचा मसावि)", "अपूर्णांकांचा मसावि (अंशांचा मसावि / छेदांचा लसावि)", "दशांश अपूर्णांक लसावि"]
                                        },
                                        {
                                            id: "st_gc_a02_01_03",
                                            titleMr: "व्यावहारिक उपयोजित उदाहरणे: १) मंदिरातील घंटा / ट्रॅफिक दिवे: जर तीन घंटा अनुक्रमे १२, १५ व १८ सेकंदांच्या अंतराने वाजत असतील, तर त्या पुन्हा किती वेळाने एकत्र वाजतील = त्या संख्यांचा लसावि काढणे (लसावि = १८० सेकंद म्हणजेच ३ मिनिटांनी एकत्र वाजतील); २) शेतातील झाडांची किंवा विद्यार्थ्यांची रांगांमध्ये समान विभागणी करणे = मसावि काढणे",
                                            titleEn: "Real-Life Applications: 1) Event Synchronization: If bells chime or traffic signals change at intervals of 12s, 15s, and 18s, the next simultaneous chime is their LCM (LCM = 180s = 3 minutes); 2) Maximum equal groupings of objects/students into identical rows requires HCF",
                                            chips: ["घंटा एकत्र वाजणे (लसावि काढणे)", "ट्रॅफिक दिवे लुकलुकणे", "समान रांगांची विभागणी (मसावि)"]
                                        }
                                    ],
                                    sources: [
                                        { book: "मॅजिक ऑफ मॅथ्स", standard: "नितीन महाले", chapterRef: "प्रकरण २: लसावि व मसावि" },
                                        { book: "Quantitative Aptitude", standard: "डॉ. आर. एस. अग्रवाल", chapterRef: "H.C.F. and L.C.M. of Numbers" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ३: सरासरी (Average) आणि वयाशी संबंधित गणिते (Problems on Ages)
                        // =========================================================================
                        {
                            id: "gc_apt_c03",
                            code: "CA03",
                            section: "A",
                            slug: "averages-and-problems-on-ages",
                            nameMr: "सरासरी (Average) आणि वयाशी संबंधित गणिते (Problems on Ages)",
                            nameEn: "Averages & Quantitative Age Problems: Mathematical Modeling & Shortcuts",
                            name: "सरासरी व वयवारी (Average & Ages)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_apt_c03",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_apt_c02",
                            nextChapterId: "gc_apt_c04",
                            metaDescriptionMr: "सरासरी सूत्र ($\frac{\text{एकूण बेरीज}}{\text{एकूण संख्या}}$), क्रमागत संख्यांची सरासरी, नवीन व्यक्ती आल्यास/गेल्यास होणारा बदल, क्रिकेट सरासरी, आणि वयाचे गुणोत्तर, भूतकाळ व भविष्यकाळ वयवारी गणिते.",
                            metaDescriptionEn: "Arithmetic Mean, Consecutive numbers average shortcuts, Weighted Average, Inclusion/Exclusion impact on group mean, Cricket batting averages, and Ratio-based Age Problems.",
                            notesJsonPath: "/data/notes/group_c/prelims/aptitude/c03_averages_ages.json",
                            quizTag: "gc_apt_avg_01",
                            tags: ["Average Arithmetic Mean", "Consecutive Numbers Shortcut", "Cricket Batting Average", "Problems on Ages", "Age Ratio Equations", "High-Weightage"],
                            searchKeywords: ["average formula sum of observations divided by number of observations", "consecutive natural even odd numbers average first plus last by 2", "average age teacher included replaced student", "cricket batting bowling average runs scored", "problems on ages ratio method father son present past future", "सरासरी सूत्र सर्व घटकांची बेरीज भागिले एकूण घटक", "क्रमागत सम विषम संख्या सरासरी शॉर्टकट", "शिक्षक आल्यावर सरासरी बदल", "क्रिकेट सरासरी गणिते", "वयवारी गुणोत्तर पद्धत वडील मुलगा वय"],
                            topics: [
                                {
                                    id: "top_gc_a03_01",
                                    nameMr: "सरासरीचे नियम, क्रिकेट गणिते आणि वयवारीवरील समीकरणे",
                                    nameEn: "Mean Formulations, Sports Scoring Dynamics & Age Equations",
                                    subtopics: [
                                        {
                                            id: "st_gc_a03_01_01",
                                            titleMr: "सरासरी मूलभूत सूत्र व शॉर्टकट ट्रिक्स: १) सरासरी = $\frac{\text{सर्व घटकांची बेरीज}}{\text{एकूण घटकांची संख्या}}$ (घटकांची बेरीज = सरासरी $\times$ एकूण संख्या); २) क्रमागत संख्यांची सरासरी: जर संख्यांमधील फरक समान असेल, तर सरासरी = $\frac{\text{पहिली संख्या} + \text{शेवटची संख्या}}{2}$ किंवा 'मधली संख्या' हीच सरासरी असते; ३) समूहातील बदल: समूहात नवीन व्यक्ती आल्याने सरासरी वाढल्यास: नवीन व्यक्तीचे वय/वजन = जुनी सरासरी + (नवीन एकूण संख्या $\times$ सरासरीत झालेली वाढ)",
                                            titleEn: "Average Properties & Shortcuts: Mean = Sum of items / Number of items; Arithmetic progression shortcut: Average of consecutive natural/even/odd numbers = $\frac{\text{First Number} + \text{Last Number}}{2}$ or the exact middle term; Inclusion/Exclusion shortcut: New entrant weight = Old Average + (New Total Count $\times$ Increase in Average)",
                                            chips: ["सरासरी = बेरीज / एकूण संख्या", "क्रमागत संख्या सरासरी = (पहिली + शेवटची)/२", "नवीन व्यक्ती आल्यास सरासरी बदल ट्रिक्स"]
                                        },
                                        {
                                            id: "st_gc_a03_01_02",
                                            titleMr: "क्रिकेट धावसंख्या सरासरी: एका फलंदाजाची ठराविक डावांनंतर सरासरी असते; पुढील डावात काही धावा केल्यामुळे सरासरीत वाढ/घट होते; सूत्र: नवीन डावातील धावा = नवीन सरासरी + (जुने डाव $\times$ सरासरीत वाढ); गोलंदाजाची सरासरी = दिलेल्या एकूण धावा / घेतलेले एकूण बळी (Wickets)",
                                            titleEn: "Cricket Scoring Averages: Batting average = Total runs scored / Total completed innings; Innings increment shortcut: Runs in new innings = New Average + (Old Innings $\times$ Rise in Average); Bowling average = Total runs conceded / Total wickets taken",
                                            chips: ["फलंदाजाची धावसंख्या सरासरी", "डाव व सरासरी वाढ ट्रिक्स", "गोलंदाजी सरासरी = धावा / बळी"]
                                        },
                                        {
                                            id: "st_gc_a03_01_03",
                                            titleMr: "वयाशी संबंधित गणिते (Problems on Ages): वयाच्या गणितांमध्ये दोन व्यक्तींच्या वयातील फरक नेहमी 'स्थिर' (Constant) राहतो; १) गुणोत्तर पद्धत: वडील व मुलाचे आजचे वय $5:2$ असल्यास $5x$ व $2x$ मानणे; ५ वर्षांनंतर वय $(5x+5)$ व $(2x+5)$ होईल; दिलेल्या नवीन गुणोत्तराशी बरोबरी करून $x$ ची किंमत काढणे; २) भूतकाळ-वर्तमान-भविष्यकाळ वय संबंधांचे जलद तिरकस गुणाकार तंत्र (Cross-Multiplication Method)",
                                            titleEn: "Quantitative Age Problems: Age difference between two individuals remains invariant across time; Ratio Framework: If present ages are in ratio $5:2$, assume $5x$ and $2x$; In 5 years, ages become $(5x+5)$ and $(2x+5)$; Cross-multiplication shortcut for instantaneous solution without linear equations",
                                            chips: ["वयवारी (वयातील फरक नेहमी स्थिर)", "गुणोत्तर समीकरण पद्धत $5x, 2x$", "तिरकस गुणाकार शॉर्टकट तंत्र"]
                                        }
                                    ],
                                    sources: [
                                        { book: "मॅजिक ऑफ मॅथ्स", standard: "नितीन महाले", chapterRef: "प्रकरण ३ व ४: सरासरी व वयवारी" },
                                        { book: "Quantitative Aptitude", standard: "डॉ. आर. एस. अग्रवाल", chapterRef: "Average & Problems on Ages" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ४: गुणोत्तर, प्रमाण, भागीदारी आणि मिश्रण (Ratio, Proportion & Mixture)
                        // =========================================================================
                        {
                            id: "gc_apt_c04",
                            code: "CA04",
                            section: "A",
                            slug: "ratio-proportion-partnership-and-mixture-alligation",
                            nameMr: "गुणोत्तर, प्रमाण, भागीदारी आणि मिश्रण (Ratio, Proportion & Mixture)",
                            nameEn: "Ratio, Proportion, Partnership Accounting & Mixture Alligation",
                            name: "गुणोत्तर-प्रमाण, भागीदारी व मिश्रण",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_apt_c04",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_apt_c03",
                            nextChapterId: "gc_apt_c05",
                            metaDescriptionMr: "समानुपाती व व्यस्त प्रमाण, चतुर्थ प्रमाणपद, भागीदारीतील नफा वाटणी सूत्र ($\text{भांडवल} \times \text{मुदत}$), दूध व पाण्याचे मिश्रण, आणि ॲलिगेशन पद्धत (Alligation Rule).",
                            metaDescriptionEn: "Direct and Inverse Proportions, Mean/Fourth Proportion, Partnership Profit Distribution ($\text{Capital} \times \text{Time Duration}$), Milk-Water dilution equations, and Alligation method.",
                            notesJsonPath: "/data/notes/group_c/prelims/aptitude/c04_ratio_partnership_mixture.json",
                            quizTag: "gc_apt_ratio_01",
                            tags: ["Ratio and Proportion", "Mean Proportion", "Partnership Profit Capital Time", "Mixture and Alligation Cross Rule", "High-Weightage"],
                            searchKeywords: ["ratio and proportion fourth proportional mean proportional", "partnership profit sharing ratio capital into time period", "mixture and alligation rule of alligation cheaper dearer mean price", "milk and water replacement formula", "गुणोत्तर व प्रमाण चतुर्थ प्रमाणपद", "भागीदारी नफा वाटणी भांडवल गुणिले मुदत", "मिश्रण व ॲलिगेशन पद्धत", "दूध पाणी मिश्रण गुणोत्तर"],
                            topics: [
                                {
                                    id: "top_gc_a04_01",
                                    nameMr: "गुणोत्तर प्रमाण नियम, भागीदारीतील नफा वाटणी आणि ॲलिगेशन पद्धत",
                                    nameEn: "Proportional Calculus, Partnership Capital Matrix & Rule of Alligation",
                                    subtopics: [
                                        {
                                            id: "st_gc_a04_01_01",
                                            titleMr: "गुणोत्तर व प्रमाण (Ratio & Proportion): १) $a:b = c:d \implies a \times d = b \times c$ (अंत्य पदांचा गुणाकार = मध्य पदांचा गुणाकार); २) चतुर्थ प्रमाणपद ($x = \frac{b \times c}{a}$); ३) मध्य प्रमाणपद ($x = \sqrt{a \times b}$); ४) कंपाऊंड गुणोत्तर: $A:B$ आणि $B:C$ दिलेले असताना $A:B:C$ शोधण्याचे उलटा 'N' गुणाकार तंत्र",
                                            titleEn: "Ratio & Proportion Fundamentals: Product of Extremes equals Product of Means ($ad = bc$); Fourth Proportional ($x = bc/a$); Mean Proportional ($x = \sqrt{ab}$); Combining $A:B$ and $B:C$ into unified $A:B:C$ using the inverted 'N' cross-multiplication matrix",
                                            chips: ["गुणोत्तर व प्रमाण $ad = bc$", "मध्य प्रमाणपद $\\sqrt{ab}$", "चतुर्थ प्रमाणपद", "A:B:C काढण्याचे तंत्र"]
                                        },
                                        {
                                            id: "st_gc_a04_01_02",
                                            titleMr: "भागीदारी (Partnership Accounting): व्यवसायातील नफा हा भागीदारांनी गुंतवलेले भांडवल आणि मुदत यांच्या गुणाकाराच्या प्रमाणात वाटला जातो; सूत्र: $\text{नफ्याचे गुणोत्तर} = (C_1 \times T_1) : (C_2 \times T_2)$; जर मुदत समान असेल तर नफा भांडवलाच्या प्रमाणात वाटला जातो; सक्रिय भागीदार (Working Partner) व निष्क्रिय भागीदार (Sleeping Partner)",
                                            titleEn: "Partnership Accounting Principles: Profit distribution is directly proportional to product of Capital invested ($C$) and Time duration ($T$); Ratio of Profits: $P_1 : P_2 = (C_1 \times T_1) : (C_2 \times T_2)$; Equal time duration defaults profit sharing strictly to capital investment ratios",
                                            chips: ["भागीदारी नफा = भांडवल $\\times$ मुदत", "नफ्याचे गुणोत्तर $(C_1 T_1) : (C_2 T_2)$", "सक्रिय भागीदार Working Partner"]
                                        },
                                        {
                                            id: "st_gc_a04_01_03",
                                            titleMr: "मिश्रण व ॲलिगेशन पद्धत (Alligation Method): दोन वेगवेगळ्या दराच्या वस्तू एकत्र करून एका ठराविक सरासरी दराने विकल्यास त्यांचे प्रमाणाचे गुणोत्तर काढण्यासाठी ॲलिगेशन क्रॉस पद्धत वापरतात; सूत्र: $\frac{\text{कमी दराच्या वस्तूचे प्रमाण}}{\text{जास्त दराच्या वस्तूचे प्रमाण}} = \frac{\text{जास्त दर} - \text{सरासरी दर}}{\text{सरासरी दर} - \text{कमी दर}}$; दूध व पाणी मिश्रण, दारू व पाणी मिश्रण यावरील प्रश्न",
                                            titleEn: "Mixture & Rule of Alligation: Cross-method to determine ratio in which two ingredients of given prices are mixed to produce a blend of desired mean price; Formula: $\frac{\text{Quantity of Cheaper}}{\text{Quantity of Dearer}} = \frac{\text{Price of Dearer} - \text{Mean Price}}{\text{Mean Price} - \text{Price of Cheaper}}$",
                                            chips: ["ॲलिगेशन पद्धत Alligation Method", "मिश्रणाचे गुणोत्तर", "दूध व पाणी भेसळ गणिते"]
                                        }
                                    ],
                                    sources: [
                                        { book: "मॅजिक ऑफ मॅथ्स", standard: "नितीन महाले", chapterRef: "प्रकरण ५ व ६: गुणोत्तर प्रमाण व भागीदारी" },
                                        { book: "Quantitative Aptitude", standard: "डॉ. आर. एस. अग्रवाल", chapterRef: "Ratio, Partnership & Alligation" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ५: शेकडेवारी (Percentage), नफा-तोटा आणि सूट (Profit, Loss & Discount)
                        // =========================================================================
                        {
                            id: "gc_apt_c05",
                            code: "CA05",
                            section: "A",
                            slug: "percentages-profit-loss-and-discount-mechanics",
                            nameMr: "शेकडेवारी (Percentage), नफा-तोटा आणि सूट (Profit, Loss & Discount)",
                            nameEn: "Percentages, Profit, Loss & Commercial Discount Analytics",
                            name: "शेकडेवारी, नफा-तोटा व सूट",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_apt_c05",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_apt_c04",
                            nextChapterId: "gc_apt_c06",
                            metaDescriptionMr: "टक्केवारीचे अपूर्णांकात रूपांतर तक्ता, शेकडा वाढ/घट सूत्र, खरेदी किंमत, विक्री किंमत, शेकडा नफा व तोटा, छापील किंमत, सलग सूट (Successive Discount), आणि खोट्या तोलमापाचे अपप्रवृत्ती प्रश्न.",
                            metaDescriptionEn: "Percentage-to-fraction table, Successive percentage changes ($x + y + \frac{xy}{100}$), Cost/Selling prices, Profit/Loss percentages on Cost Price, Marked Price, Successive Discounts, and Dishonest Dealer problems.",
                            notesJsonPath: "/data/notes/group_c/prelims/aptitude/c05_percentages_profit_loss.json",
                            quizTag: "gc_apt_profit_01",
                            tags: ["Percentages Fractions", "Successive Change Formula", "Profit and Loss", "Marked Price Discount", "Dishonest Dealer", "High-Weightage"],
                            searchKeywords: ["percentage to fraction conversion chart 16.66 percent 12.5 percent", "percentage increase decrease net change formula x plus y plus xy by 100", "profit and loss formulas profit percentage on cost price", "marked price discount successive discounts formula", "dishonest shopkeeper false weights profit percentage", "शेकडेवारी अपूर्णांक तक्ता", "नफा तोटा शेकडा नफा खरेदी किंमत", "छापील किंमत सलग सूट Successive Discount", "खोट्या वजनाचे व्यापारी गणिते"],
                            topics: [
                                {
                                    id: "top_gc_a05_01",
                                    nameMr: "शेकडेवारी अपूर्णांक पद्धत, नफा-तोटा सूत्रे आणि सलग सूट",
                                    nameEn: "Percentage Fraction Conversions, Profit-Loss Equations & Compounded Discounts",
                                    subtopics: [
                                        {
                                            id: "st_gc_a05_01_01",
                                            titleMr: "शेकडेवारी व अपूर्णांक तक्ता (Fraction Method): गणित वेगाने सोडवण्यासाठी अपूर्णांक रूपांतरण पाठ असणे आवश्यक: $50\% = \frac{1}{2}$, $33.33\% = \frac{1}{3}$, $25\% = \frac{1}{4}$, $20\% = \frac{1}{5}$, $16.66\% = \frac{1}{6}$, $14.28\% = \frac{1}{7}$, $12.5\% = \frac{1}{8}$, $11.11\% = \frac{1}{9}$, $10\% = \frac{1}{10}$; निव्वळ टक्केवारी बदल सूत्र: $x + y + \frac{xy}{100}$ (वाढ असल्यास धन $+$, घट असल्यास ऋण $-$)",
                                            titleEn: "Percentage Fraction Grid & Net Change: Mental math fraction conversions ($25\% = 1/4$, $20\% = 1/5$, $16.66\% = 1/6$, $12.5\% = 1/8$, $11.11\% = 1/9$); Net cumulative percentage change formula: $x + y + \frac{xy}{100}$ (use positive for increase, negative for decrease)",
                                            chips: ["शेकडेवारी अपूर्णांक तक्ता ($16.66\\% = 1/6$)", "निव्वळ बदल सूत्र $x + y + \\frac{xy}{100}$", "टक्केवारी वाढ/घट"]
                                        },
                                        {
                                            id: "st_gc_a05_01_02",
                                            titleMr: "नफा आणि तोटा मूलभूत सूत्रे: नफा किंवा तोटा नेहमी 'खरेदी किमतीवर' (Cost Price - CP) मोजला जातो; १) शेकडा नफा = $\frac{\text{नफा}}{\text{खरेदी किंमत}} \times 100$; २) शेकडा तोटा = $\frac{\text{तोटा}}{\text{खरेदी किंमत}} \times 100$; ३) दोन वस्तू समान किमतीला विकल्यास आणि एकावर $x\%$ नफा व दुसऱ्यावर $x\%$ तोटा झाल्यास व्यवहारात नेहमी 'तोटाच' होतो आणि तोटा = $\frac{x^2}{100}\%$ असतो",
                                            titleEn: "Profit & Loss Core Principles: Profit or loss is always calculated on Cost Price (CP); Profit $\% = (\text{Profit}/\text{CP}) \times 100$; Loss $\% = (\text{Loss}/\text{CP}) \times 100$; Classic Rule: If two items sold at equal selling price, one at $x\%$ profit and other at $x\%$ loss, transaction yields an overall LOSS of $\frac{x^2}{100}\%$",
                                            chips: ["शेकडा नफा = (नफा / खरेदी) $\\times$ १००", "शेकडा तोटा = (तोटा / खरेदी) $\\times$ १००", "समान विक्री किंमत तोटा सूत्र $\\frac{x^2}{100}\\%$"]
                                        },
                                        {
                                            id: "st_gc_a05_01_03",
                                            titleMr: "छापील किंमत व सलग सूट (Discount): सूट नेहमी 'छापील किमतीवर' (Marked Price - MP) दिली जाते; विक्री किंमत = छापील किंमत - सूट; सलग सूट (Successive Discounts): जर $10\%$ आणि $20\%$ ची सलग सूट दिली, तर एकूण एकुलती एक सूट = $10 + 20 - \frac{10 \times 20}{100} = 28\%$ होते (३०% नव्हे); खोट्या तोलमापाचे गणित: १ किलोऐवजी ९०० ग्रॅम वजन वापरल्यास नफा $= \frac{\text{त्रुटी}}{\text{खोटे वजन}} \times 100 = \frac{100}{900} \times 100 = 11.11\%$ नफा",
                                            titleEn: "Marked Price, Successive Discounts & False Weights: Discount is calculated on Marked Price (MP); Selling Price = MP - Discount; Successive Discounts equivalent discount formula: $d_1 + d_2 - \frac{d_1 d_2}{100}$; Dishonest Merchant Formula: Gain $\% = \frac{\text{Error}}{\text{True Value} - \text{Error}} \times 100$",
                                            chips: ["छापील किंमत Marked Price", "सलग सूट Successive Discount", "खोट्या वजनाचे नफा सूत्र $\\frac{\\text{त्रुटी}}{\\text{खोटे वजन}} \\times 100$"]
                                        }
                                    ],
                                    sources: [
                                        { book: "मॅजिक ऑफ मॅथ्स", standard: "नितीन महाले", chapterRef: "प्रकरण ७ व ८: शेकडेवारी व नफा-तोटा" },
                                        { book: "Quantitative Aptitude", standard: "डॉ. आर. एस. अग्रवाल", chapterRef: "Percentage, Profit and Loss" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ६: सरळव्याज (Simple Interest) आणि चक्रवाढ व्याज (Compound Interest)
                        // =========================================================================
                        {
                            id: "gc_apt_c06",
                            code: "CA06",
                            section: "A",
                            slug: "simple-interest-and-compound-interest-formulations",
                            nameMr: "सरळव्याज (Simple Interest) आणि चक्रवाढ व्याज (Compound Interest)",
                            nameEn: "Interest Mathematics: Simple Interest, Compound Interest & Variance Formulas",
                            name: "सरळव्याज व चक्रवाढ व्याज (SI & CI)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_apt_c06",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_apt_c05",
                            nextChapterId: "gc_apt_c07",
                            metaDescriptionMr: "सरळव्याज सूत्र ($I = \frac{PNR}{100}$), मुद्दल दुप्पट-तिप्पट होण्याचा कालावधी, चक्रवाढ व्याज रास सूत्र, वार्षिक व सहामाही आकारणी, आणि २ व ३ वर्षांच्या सरळव्याज-चक्रवाढ व्याजातील फरक सूत्र ($P(\frac{R}{100})^2$).",
                            metaDescriptionEn: "Simple Interest formula, Doubling time shortcuts, Compound Interest formula ($A = P(1 + \frac{R}{100})^n$), Half-yearly compounding, and 2-year/3-year CI-SI difference shortcut formulas.",
                            notesJsonPath: "/data/notes/group_c/prelims/aptitude/c06_simple_compound_interest.json",
                            quizTag: "gc_apt_interest_01",
                            tags: ["Simple Interest SI", "Compound Interest CI", "Doubling Period Shortcut", "Difference between CI and SI", "High-Weightage"],
                            searchKeywords: ["simple interest formula pnr by 100 principal rate time", "sum doubles in n years simple interest rate formula", "compound interest amount formula p into 1 plus r by 100 power n", "difference between compound and simple interest for 2 years p r by 100 square", "half yearly compounding rate r by 2 time 2n", "सरळव्याज सूत्र PNR भागिले १००", "मुद्दल दुप्पट तिप्पट शॉर्टकट ट्रिक्स", "चक्रवाढ व्याज रास सूत्र", "२ वर्षांच्या चक्रवाढ व सरळव्याजातील फरक $P(R/100)^2$"],
                            topics: [
                                {
                                    id: "top_gc_a06_01",
                                    nameMr: "सरळव्याज, चक्रवाढ व्याज आणि दोन्ही व्याजांमधील फरक काढण्याच्या ट्रिक्स",
                                    nameEn: "Interest Principles, Compounding Periods & Differential Shortcuts",
                                    subtopics: [
                                        {
                                            id: "st_gc_a06_01_01",
                                            titleMr: "सरळव्याज (Simple Interest): केवळ मूळ मुद्दलावर आकारले जाणारे व्याज; सूत्र: $I = \frac{P \times N \times R}{100}$ (येथे $P$ = मुद्दल, $N$ = कालावधी वर्षे, $R$ = दर); रास ($A$) = मुद्दल + व्याज; दुप्पट होण्याचा नियम: जर मुद्दल $N$ वर्षांत सरळव्याजाने दुप्पट होत असेल, तर व्याजाचा दर $R = \frac{100}{N}\%$; तिप्पट होत असल्यास $R = \frac{200}{N}\%$",
                                            titleEn: "Simple Interest Principles: Accrues strictly on original principal; Formula: $\text{SI} = \frac{P \times N \times R}{100}$; Amount ($A$) = $P + \text{SI}$; Doubling Rule under SI: If sum doubles in $N$ years, Rate $\% = \frac{100}{N}$; If sum triples, Rate $\% = \frac{200}{N}$",
                                            chips: ["सरळव्याज $I = \\frac{PNR}{100}$", "रास = मुद्दल + व्याज", "दुप्पट होण्याचा दर $R = \\frac{100}{N}\\%$", "तिप्पट होण्याचा दर $R = \\frac{200}{N}\\%$"]
                                        },
                                        {
                                            id: "st_gc_a06_01_02",
                                            titleMr: "चक्रवाढ व्याज (Compound Interest): व्याजावर आकारले जाणारे व्याज; रास सूत्र: $A = P \left(1 + \frac{R}{100}\right)^N$; चक्रवाढ व्याज ($CI$) = रास ($A$) - मुद्दल ($P$); जर व्याज 'सहामाही' आकारले जात असेल, तर दर निमूट करावा ($\frac{R}{2}$) आणि मुदत दुप्पट करावी ($2N$); चक्रवाढ व्याजाने मुद्दल $N$ वर्षांत दुप्पट झाल्यास, $2N$ वर्षांत ४ पट आणि $3N$ वर्षांत ८ पट होते",
                                            titleEn: "Compound Interest Mechanics: Interest compounded upon interest; Amount: $A = P(1 + \frac{R}{100})^N$; $\text{CI} = A - P$; Half-yearly compounding: Halve rate to $R/2$ and double time period to $2N$; Exponential growth rule: If sum doubles in $N$ years under CI, it becomes 4-fold in $2N$ years and 8-fold in $3N$ years",
                                            chips: ["चक्रवाढ व्याज रास $A = P(1 + \\frac{R}{100})^N$", "सहामाही आकारणी (दर अर्धा, मुदत दुप्पट)", "चक्रवाढ घातांक वाढ नियम"]
                                        },
                                        {
                                            id: "st_gc_a06_01_03",
                                            titleMr: "२ व ३ वर्षांच्या सरळव्याज व चक्रवाढ व्याजातील फरक (MPSC चे आवडते गणित): १) २ वर्षांसाठी फरक सूत्र: $\text{CI} - \text{SI} = P \left(\frac{R}{100}\right)^2$; २) ३ वर्षांसाठी फरक सूत्र: $\text{CI} - \text{SI} = P \left(\frac{R}{100}\right)^2 \times \left(\frac{300 + R}{100}\right)$; या थेट सूत्राने मुद्दल किंवा दर सेकंदात काढता येतो",
                                            titleEn: "CI vs SI Variance Shortcut Formulas: 1) For 2 Years: $\text{Difference} = P \left(\frac{R}{100}\right)^2$; 2) For 3 Years: $\text{Difference} = P \left(\frac{R}{100}\right)^2 \times \left(\frac{300 + R}{100}\right)$; Yields instantaneous solutions without multi-step arithmetic",
                                            chips: ["२ वर्षांचा फरक $= P(R/100)^2$", "३ वर्षांचा फरक सूत्र", "थेट मुद्दल काढणे"]
                                        }
                                    ],
                                    sources: [
                                        { book: "मॅजिक ऑफ मॅथ्स", standard: "नितीन महाले", chapterRef: "प्रकरण ९: सरळव्याज व चक्रवाढ व्याज" },
                                        { book: "Quantitative Aptitude", standard: "डॉ. आर. एस. अग्रवाल", chapterRef: "Simple Interest and Compound Interest" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ७: काम, काळ आणि मजूर (Time and Work, Pipes & Cisterns)
                        // =========================================================================
                        {
                            id: "gc_apt_c07",
                            code: "CA07",
                            section: "A",
                            slug: "time-and-work-man-days-pipes-and-cisterns",
                            nameMr: "काम, काळ आणि मजूर (Time and Work, Pipes & Cisterns)",
                            nameEn: "Work Mechanics: Time & Work (LCM Approach), MDH Chain Rule & Pipes and Cisterns",
                            name: "काम, काळ, नळ व पाण्याची टाकी",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_apt_c07",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_apt_c06",
                            nextChapterId: "gc_apt_c08",
                            metaDescriptionMr: "लसावि पद्धत (LCM Method), एका दिवसाचे काम, व्यक्ती काम सोडून गेल्यास किंवा नवीन व्यक्ती आल्यास लागणारा वेळ, चेन रूल ($M_1D_1H_1 = M_2D_2H_2$), आणि नळ व टाकी (भरणारे व रिकामे करणारे नळ).",
                            metaDescriptionEn: "Time & Work unit-work approach using LCM method, Work dropout/addition midway, MDH chain formula ($M_1D_1H_1/W_1 = M_2D_2H_2/W_2$), and Pipes & Cisterns (Inlet pipes, Outlet pipes, Leakage problems).",
                            notesJsonPath: "/data/notes/group_c/prelims/aptitude/c07_time_work_pipes.json",
                            quizTag: "gc_apt_work_01",
                            tags: ["Time and Work", "LCM Work Method", "MDH Chain Rule", "Pipes and Cisterns", "Leakage Emptying Tank", "High-Weightage"],
                            searchKeywords: ["time and work lcm method one day work efficiency", "m1 d1 h1 by w1 equals m2 d2 h2 by w2 chain rule formula", "person leaves work before completion", "pipes and cisterns filling emptying inlet outlet pipe leakage", "काम काळ मजूर लसावि पद्धत क्षमता", "चेन रूल M1 D1 H1 सूत्र", "काम सोडून गेल्यावर लागणारे दिवस", "नळ व पाण्याची टाकी गळती गणिते"],
                            topics: [
                                {
                                    id: "top_gc_a07_01",
                                    nameMr: "काम-काळ लसावि क्षमता पद्धत, चेन रूल आणि नळ-टाकी गणिते",
                                    nameEn: "Time-Work Efficiency Matrices, MDH Formula & Tank Hydraulics",
                                    subtopics: [
                                        {
                                            id: "st_gc_a07_01_01",
                                            titleMr: "काम आणि काळ (लसावि पद्धत LCM Efficiency Method): पारंपारिक अपूर्णांक पद्धतीऐवजी एकूण काम = 'दिवसांचा लसावि' मानणे; उदा. A एक काम १० दिवसांत व B १५ दिवसांत करतो, तर एकूण काम = ३० युनिट्स (१० व १५ चा लसावि); A ची एका दिवसाची क्षमता = ३ युनिट, B ची क्षमता = २ युनिट; दोघांची मिळून एका दिवसाची क्षमता = ५ युनिट; काम पूर्ण होण्यास लागणारे दिवस = $\frac{30}{5} = ६$ दिवस; काम अर्ध्यात सोडून गेल्यास उरलेले काम क्षमतेनुसार काढणे",
                                            titleEn: "Time & Work (LCM Efficiency Matrix): Assume Total Work = LCM of given days; Efficiency = Total Units / Days; If A takes 10 days and B takes 15 days, Total Work = 30 units; Daily efficiency: A = 3 units/day, B = 2 units/day; Combined efficiency = 5 units/day; Time taken together = $30/5 = 6$ days; Easily handles mid-work dropouts",
                                            chips: ["एकूण काम = दिवसांचा लसावि", "कार्यक्षमता Units per Day", "दोघे मिळून काम करण्याचे दिवस", "काम सोडून जाण्याची गणिते"]
                                        },
                                        {
                                            id: "st_gc_a07_01_02",
                                            titleMr: "चेन रूल सूत्र (MDH Formula): मजूर, दिवस, तास आणि काम यांच्यातील संबंध: $\frac{M_1 \times D_1 \times H_1}{W_1} = \frac{M_2 \times D_2 \times H_2}{W_2}$ (येथे $M$ = मजूर/माणसे, $D$ = दिवस, $H$ = दररोजचे तास, $W$ = केलेले काम किंवा मजुरी/रुपये); पुरुष, महिला व मुले यांच्या कार्यक्षमतेची तुलना असणारी गणिते",
                                            titleEn: "MDH Chain Rule Formula: Relates Men ($M$), Days ($D$), Daily Hours ($H$) and Work/Wages ($W$): $\frac{M_1 D_1 H_1}{W_1} = \frac{M_2 D_2 H_2}{W_2}$; Handles gender efficiency equivalence problems (e.g., 2 men or 4 women)",
                                            chips: ["चेन रूल $\\frac{M_1 D_1 H_1}{W_1} = \\frac{M_2 D_2 H_2}{W_2}$", "मजूर, दिवस, तास, काम सूत्र", "पुरुष महिला कार्यक्षमता तुलना"]
                                        },
                                        {
                                            id: "st_gc_a07_01_03",
                                            titleMr: "नळ आणि पाण्याची टाकी (Pipes & Cisterns): भरणारा नळ (Inlet Pipe - धन कार्य $+$, टाकी भरतो) आणि रिकामी करणारा नळ किंवा तळाची गळती (Outlet Pipe / Leak - ऋण कार्य $-$, टाकी रिकामी करतो); एकूण क्षमता = लसावि; जर नळ A १० तासांत टाकी भरतो व नळ B १५ तासांत रिकामी करतो, तर टाकीची क्षमता = ३० युनिट; A ची क्षमता $+3$, B ची क्षमता $-2$; दोन्ही नळ एकत्र सुरू केल्यास एका तासात $3 - 2 = +1$ युनिट भरेल, म्हणून टाकी भरण्यास लागणारा वेळ = $\frac{30}{1} = ३०$ तास",
                                            titleEn: "Pipes & Cisterns: Inlets represent positive work ($+$), Outlets/Leaks represent negative work ($-$, draining volume); Capacity = LCM of hours; If Pipe A fills in 10 hrs and Pipe B empties in 15 hrs, net filling rate = $+3 - 2 = +1$ unit/hr; Time to fill tank = $30/1 = 30$ hours",
                                            chips: ["भरणारा नळ (धन कार्य $+$)", "रिकामी करणारा नळ/गळती (ऋण कार्य $-$)", "टाकी भरण्याचा वेळ लसावि ट्रिक्स"]
                                        }
                                    ],
                                    sources: [
                                        { book: "मॅजिक ऑफ मॅथ्स", standard: "नितीन महाले", chapterRef: "प्रकरण १०: काम, काळ व मजूर" },
                                        { book: "Quantitative Aptitude", standard: "डॉ. आर. एस. अग्रवाल", chapterRef: "Time and Work & Pipes and Cisterns" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ८: वेग, वेळ आणि अंतर (Speed, Time, Distance, Trains & Boats)
                        // =========================================================================
                        {
                            id: "gc_apt_c08",
                            code: "CA08",
                            section: "A",
                            slug: "speed-time-distance-trains-and-boats-streams",
                            nameMr: "वेग, वेळ आणि अंतर (Speed, Time, Distance, Trains & Boats)",
                            nameEn: "Kinematic Transit: Speed, Time, Distance, Relative Velocity & Boats/Streams",
                            name: "वेग-वेळ-अंतर, आगगाडी व बोट",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_apt_c08",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_apt_c07",
                            nextChapterId: "gc_apt_c09",
                            metaDescriptionMr: "वेग-वेळ-अंतर मूलभूत सूत्र, km/hr ते m/s रूपांतरण ($\times \frac{5}{18}$), सरासरी वेग ($\frac{2xy}{x+y}$), आगगाडी (प्लॅटफॉर्म, बोगदा, खांब ओलांडणे), सापेक्ष वेग (एकाच दिशेने vs विरुद्ध दिशेने), आणि बोट व प्रवाह (Downstream, Upstream).",
                            metaDescriptionEn: "Speed-Time-Distance fundamentals, Metric unit conversions ($\text{km/h} \times \frac{5}{18} = \text{m/s}$), Harmonic average speed, Train crossing problems, Relative velocity, and Boats & Streams (Upstream vs Downstream).",
                            notesJsonPath: "/data/notes/group_c/prelims/aptitude/c08_speed_trains_boats.json",
                            quizTag: "gc_apt_speed_01",
                            tags: ["Speed Time Distance", "5 by 18 Conversion", "Average Speed 2xy by x plus y", "Train Crossing Platform", "Relative Speed Opposite Same", "Boats and Streams Upstream Downstream", "High-Weightage"],
                            searchKeywords: ["speed time distance formula conversion km per hr to m per sec 5 by 18", "average speed formula 2xy by x plus y", "train problems length of train bridge tunnel platform pole man", "relative speed trains moving in opposite direction add same direction subtract", "boats and streams downstream speed u plus v upstream u minus v speed of boat", "वेग वेळ अंतर सूत्र ५/१८ गुणाकार", "सरासरी वेग सूत्र 2xy/(x+y)", "आगगाडी खांब प्लॅटफॉर्म ओलांडणे", "सापेक्ष वेग एकाच दिशेने विरुद्ध दिशेने", "बोट व पाण्याचा प्रवाह संथ पाण्यातील वेग"],
                            topics: [
                                {
                                    id: "top_gc_a08_01",
                                    nameMr: "वेग-वेळ-अंतर रूपांतरण, आगगाडीची गणिते, सापेक्ष वेग आणि बोट-प्रवाह",
                                    nameEn: "Transit Kinematics, Rail Transit Crossings, Relative Speed & River Dynamics",
                                    subtopics: [
                                        {
                                            id: "st_gc_a08_01_01",
                                            titleMr: "वेग-वेळ-अंतर व रूपांतरण नियम: १) $\text{अंतर} = \text{वेग} \times \text{वेळ}$; २) एकक रूपांतरण (MPSC चा सर्वात मोठा ट्रॅप): किमी/तास चे रूपांतरण मीटर/सेकंद मध्ये करताना $\frac{5}{18}$ ने गुणावे ($1\text{ km/hr} = \frac{5}{18}\text{ m/s}$); मीटर/सेकंद चे रूपांतरण किमी/तास मध्ये करताना $\frac{18}{5}$ ने गुणावे; ३) सरासरी वेग: समान अंतर दोन वेगवेगळ्या वेगाने ($x$ आणि $y$) कापल्यास, सरासरी वेग = $\frac{2xy}{x + y}$ (साधी सरासरी काढू नये)",
                                            titleEn: "Speed-Time-Distance & Unit Conversions: $\text{Distance} = \text{Speed} \times \text{Time}$; Metric Conversion Rule: To convert $\text{km/h}$ to $\text{m/s}$, multiply by $\frac{5}{18}$; To convert $\text{m/s}$ to $\text{km/h}$, multiply by $\frac{18}{5}$; Harmonic Average Speed for equal distance covered at speeds $x$ and $y$: $\text{Average Speed} = \frac{2xy}{x + y}$",
                                            chips: ["अंतर = वेग $\\times$ वेळ", "किमी/तास $\\to$ मी/से (गुणिले ५/१८)", "मी/से $\\to$ किमी/तास (गुणिले १८/५)", "सरासरी वेग = $\\frac{2xy}{x+y}$"]
                                        },
                                        {
                                            id: "st_gc_a08_01_02",
                                            titleMr: "आगगाडीची गणिते (Problems on Trains): १) आगगाडीने विजेचा खांब, झाड किंवा उभा मनुष्य ओलांडल्यास: कापायचे अंतर = 'केवळ आगगाडीची लांबी'; २) आगगाडीने पूल, प्लॅटफॉर्म किंवा बोगदा ओलांडल्यास: कापायचे अंतर = 'आगगाडीची लांबी + प्लॅटफॉर्मची लांबी'; ३) सापेक्ष वेग (Relative Speed): अ) दोन गाड्या विरुद्ध दिशेने धावत असल्यास वेगांची 'बेरीज' करावी ($S_1 + S_2$), ब) दोन गाड्या एकाच दिशेने धावत असल्यास वेगांची 'वजाबाकी' करावी ($S_1 - S_2$)",
                                            titleEn: "Train Transit Physics: Crossing a point object (Pole, Tree, Person): $\text{Distance} = \text{Length of Train}$; Crossing an extended object (Platform, Bridge, Tunnel): $\text{Distance} = \text{Length of Train} + \text{Length of Platform}$; Relative Speed: When moving in opposite directions, add speeds ($S_1 + S_2$); When moving in same direction, subtract speeds ($S_1 - S_2$)",
                                            chips: ["खांब ओलांडणे (केवळ गाडीची लांबी)", "प्लॅटफॉर्म ओलांडणे (गाडी + प्लॅटफॉर्म लांबी)", "सापेक्ष वेग: विरुद्ध दिशा (बेरीज)", "सापेक्ष वेग: एकच दिशा (वजाबाकी)"]
                                        },
                                        {
                                            id: "st_gc_a08_01_03",
                                            titleMr: "बोट आणि पाण्याचा प्रवाह (Boats & Streams): जर संथ पाण्यात बोटीचा वेग $u$ आणि पाण्याचा वेग $v$ असेल, तर: १) प्रवाहाच्या दिशेने वेग (Downstream): $x = u + v$; २) प्रवाहाच्या विरुद्ध दिशेने वेग (Upstream): $y = u - v$; ३) संथ पाण्यात बोटीचा वेग = $\frac{x + y}{2}$; ४) पाण्याचा प्रवाहाचा वेग = $\frac{x - y}{2}$",
                                            titleEn: "Boats & Streams: Let speed of boat in still water be $u$ and stream speed be $v$; Downstream Speed (along current): $x = u + v$; Upstream Speed (against current): $y = u - v$; Speed of boat in still water = $\frac{x + y}{2}$; Speed of stream = $\frac{x - y}{2}$",
                                            chips: ["प्रवाहाच्या दिशेने वेग (Downstream $u+v$)", "प्रवाहाच्या विरुद्ध वेग (Upstream $u-v$)", "संथ पाण्यातील बोटीचा वेग $\\frac{x+y}{2}$", "प्रवाहाचा वेग $\\frac{x-y}{2}$"]
                                        }
                                    ],
                                    sources: [
                                        { book: "मॅजिक ऑफ मॅथ्स", standard: "नितीन महाले", chapterRef: "प्रकरण ११ व १२: वेग-वेळ-अंतर, आगगाडी व बोट" },
                                        { book: "Quantitative Aptitude", standard: "डॉ. आर. एस. अग्रवाल", chapterRef: "Problems on Trains & Boats and Streams" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ९: संख्या मालिका, अक्षर मालिका आणि विसंगत घटक शोधणे
                        // =========================================================================
                        {
                            id: "gc_apt_c09",
                            code: "CA09",
                            section: "B",
                            slug: "number-series-letter-series-and-classification-odd-one-out",
                            nameMr: "संख्या मालिका, अक्षर मालिका आणि विसंगत घटक शोधणे (Odd One Out)",
                            nameEn: "Series Completion (Numeric, Alphanumeric), Pattern Recognition & Classification",
                            name: "संख्या व अक्षर मालिका, वर्गीकरण",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_apt_c09",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_apt_c08",
                            nextChapterId: "gc_apt_c10",
                            metaDescriptionMr: "संख्या मालिका (फरक, दुहेरी फरक, वर्ग, घन, अभाज्य संख्या मालिका), अक्षर मालिका, अल्फान्यूमेरिक मालिका, चुकीचे पद ओळखणे, आणि वर्गीकरण (चार पर्यायांमधून विसंगत पद शोधणे).",
                            metaDescriptionEn: "Arithmetic/Geometric number series, Double-tier differences, Square/Cube increments, Continuous letter patterns, Alphanumeric combinations, Missing/Wrong term identification, and Odd One Out classification.",
                            notesJsonPath: "/data/notes/group_c/prelims/aptitude/c09_series_classification.json",
                            quizTag: "gc_apt_series_01",
                            tags: ["Number Series", "Letter Series", "Alphanumeric Patterns", "Missing Number", "Odd One Out Classification", "High-Weightage"],
                            searchKeywords: ["number series reasoning tricks difference square cube patterns", "letter series alphabetical positions forward backward", "alphanumeric series mixed pattern missing term", "find wrong term in series odd one out classification", "संख्या मालिका फरक वर्ग घन मालिका", "अक्षर मालिका इंग्रजी वर्णमाला स्थानांके", "अल्फान्यूमेरिक मालिका", "विसंगत घटक वर्गीकरण चुकीचे पद"],
                            topics: [
                                {
                                    id: "top_gc_a09_01",
                                    nameMr: "संख्या-अक्षर मालिकांमधील पॅटर्न ओळखणे आणि विसंगत पद वर्गीकरण",
                                    nameEn: "Series Convergence Logic, Sequential Heuristics & Odd-Item Diagnostics",
                                    subtopics: [
                                        {
                                            id: "st_gc_a09_01_01",
                                            titleMr: "संख्या मालिकांचे प्रकार व ट्रिक्स: १) फरक मालिका (पायरी पद्धत Step Pattern - लगतच्या पदांमधील फरक काढणे); २) वर्ग व घन मालिका ($n^2 \pm 1$ किंवा $n^3 \pm 1$ उदा. $०, ७, २६, ६३, १२४...$); ३) गुणाकार व बेरीज मालिका ($\times 2 + 1$, $\times 3 - 2$); ४) फिबोनाची मालिका (मागील दोन पदांची बेरीज म्हणजे पुढील पद: $1, 1, 2, 3, 5, 8, 13...$); ५) एकांतर मालिका (Alternate Series - एक पद सोडून चालणाऱ्या दोन स्वतंत्र मालिका)",
                                            titleEn: "Numeric Series Heuristics: Step-difference pattern; Square and Cube series ($n^2 \pm 1$ or $n^3 \pm 1$); Geometric growth plus constant ($\times 2 + 1$); Fibonacci sequence (sum of two preceding terms: $1, 1, 2, 3, 5, 8, 13...$); Alternating interleaved series",
                                            chips: ["फरक पद्धत (Step Pattern)", "वर्ग व घन मालिका ($n^3-1$)", "फिबोनाची मालिका (Fibonacci)", "एकांतर मालिका (Alternate)"]
                                        },
                                        {
                                            id: "st_gc_a09_01_02",
                                            titleMr: "अक्षर मालिका व विसंगत घटक (Odd One Out): १) इंग्रजी वर्णमालेतील अक्षरांची स्थानांके (A=1 ते Z=26) आणि उलट स्थानांके पाठ असणे आवश्यक (क्लृप्ती: EJOTY $= 5, 10, 15, 20, 25$); २) सलग अक्षर मालिका (उदा. $ab\_b\_a\_b$ - एकूण अक्षरे मोजून ३ किंवा ४ चे समान गट पाडणे); ३) वर्गीकरण (Odd One Out): चार पर्यायांपैकी तीन पर्याय विशिष्ट नियमाने (मूळ संख्या, वर्ग, अवयव) जोडलेले असतात, तर एक वेगळा असतो तो ओळखणे",
                                            titleEn: "Letter Series & Odd One Out: Alphabetical place values forward and reverse (EJOTY metric $= 5, 10, 15, 20, 25$); Continuous letter repeating patterns (partition total elements into uniform blocks of 3 or 4); Classification/Odd One Out isolates non-conforming item based on prime/composite or vowel logic",
                                            chips: ["EJOTY स्थानांके (५, १०, १५, २०, २५)", "अक्षर मालिका गट पद्धत", "विसंगत घटक (Odd One Out)", "वर्गीकरण"]
                                        }
                                    ],
                                    sources: [
                                        { book: "संपूर्ण बुद्धिमत्ता चाचणी", standard: "सचिन ढवळे", chapterRef: "प्रकरण १ व २: संख्या व अक्षर मालिका, वर्गीकरण" },
                                        { book: "Verbal & Non-Verbal Reasoning", standard: "डॉ. आर. एस. अग्रवाल", chapterRef: "Series Completion & Classification" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १०: सांकेतिक भाषा व कोडिंग-डिकोडिंग (Coding-Decoding)
                        // =========================================================================
                        {
                            id: "gc_apt_c10",
                            code: "CA10",
                            section: "B",
                            slug: "coding-decoding-symbolic-languages-and-ciphers",
                            nameMr: "सांकेतिक भाषा व कोडिंग-डिकोडिंग (Coding-Decoding)",
                            nameEn: "Cryptographic Reasoning: Letter Coding, Substitution Ciphers & Matrix Logic",
                            name: "सांकेतिक भाषा (Coding-Decoding)",
                            category: "CORE",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_apt_c10",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_apt_c09",
                            nextChapterId: "gc_apt_c11",
                            metaDescriptionMr: "अक्षरांसाठी अक्षरे कोडिंग ($+1, -2$, विरुद्ध अक्षरे A-Z, B-Y), अक्षरांसाठी संख्या कोडिंग, शब्दांची अदलाबदल ('लाल म्हणजे पिवळा'), आणि काल्पनिक भाषा कोडिंग (Chinese Coding).",
                            metaDescriptionEn: "Letter-to-letter shifts ($+1, -2$), Reverse alphabet pairs (A-Z, B-Y shortcuts), Letter-to-number codes, Substitution ciphers, and Common word extraction in Chinese artificial language ciphers.",
                            notesJsonPath: "/data/notes/group_c/prelims/aptitude/c10_coding_decoding.json",
                            quizTag: "gc_apt_coding_01",
                            tags: ["Coding Decoding", "Opposite Letters AZ BY", "Letter to Number Coding", "Chinese Coding Common Word", "High-Weightage"],
                            searchKeywords: ["coding decoding reasoning tricks letter shifting opposite pairs", "opposite alphabet pairs a z b y c x d w e v f u g t h s", "number coding letters sum of place values", "substitution coding cloud is called rain sky", "chinese coding common word deciphering technique", "सांकेतिक भाषा कोडिंग डिकोडिंग ट्रिक्स", "विरुद्ध अक्षरे जोड्या A-Z B-Y", "अक्षरांची बेरीज संख्या कोडिंग", "काल्पनिक भाषा चायनीज कोडिंग कॉमन शब्द"],
                            topics: [
                                {
                                    id: "top_gc_a10_01",
                                    nameMr: "कोडिंगचे विविध प्रकार, विरुद्ध अक्षरांच्या जोड्या आणि चायनीज कोडिंग",
                                    nameEn: "Cipher Typologies, Reverse Alphabet Conjugates & Elimination Decryption",
                                    subtopics: [
                                        {
                                            id: "st_gc_a10_01_01",
                                            titleMr: "अक्षरांचे कोडिंग व विरुद्ध जोड्या: १) अक्षरांचे स्थान पुढे/मागे सरकवणे ($+1, +2, -1$ क्रम किंवा उलट क्रमाने लिहिणे); २) समोरासमोरील विरुद्ध अक्षरांच्या जोड्या (Opposite Pairs - ज्या दोन अक्षरांच्या स्थानांकांची बेरीज २७ असते): A-Z, B-Y, C-X, D-W (दूधवाला), E-V (Evening), F-U (Father-Uncle), G-T (GT Road), H-S (High School), I-R (Indian Railway), J-Q (Jungle Queen), K-P (काळा पाणी / कुर्ता पायजमा), L-O (Love), M-N (Man)",
                                            titleEn: "Letter Shifts & Opposite Pairs: Positive and negative positional shifts; Opposite Alphabet Conjugates (Sum of positions equals 27): A-Z, B-Y, C-X, D-W, E-V, F-U, G-T, H-S, I-R, J-Q, K-P, L-O, M-N memorized via mnemonic acronyms",
                                            chips: ["विरुद्ध अक्षरांच्या जोड्या (बेरीज २७)", "A-Z, B-Y, C-X, D-W", "H-S, I-R, K-P, L-O", "अक्षर शिफ्टिंग कोडिंग"]
                                        },
                                        {
                                            id: "st_gc_a10_01_02",
                                            titleMr: "संख्या कोडिंग व चायनीज कोडिंग: १) संख्या कोडिंग: अक्षरांच्या स्थानांकांची बेरीज करणे (उदा. $\text{CAT} = 3 + 1 + 20 = 24$); स्थानांकांची दुप्पट करणे किंवा उलट स्थानांकांची बेरीज; २) चायनीज कोडिंग / काल्पनिक भाषा (Common Word Method): 'ka pita sa' म्हणजे 'water is sweet' आणि 'pita na zo' म्हणजे 'sweet and sour' असल्यास दोन्ही वाक्यांमध्ये 'pita' आणि 'sweet' सामाईक आहे, म्हणून 'sweet' चा कोड 'pita' होतो; ३) शब्दांची प्रतिस्थापना कोडिंग ('पाण्याला आकाश म्हटले, आकाशाला झाड म्हटले...')",
                                            titleEn: "Number Coding & Chinese Elimination Ciphers: Direct numerical values or summation of positions; Substitution Ciphers; Artificial Language (Chinese Coding): Isolating identical codes and corresponding words across sentence matrices to eliminate variables",
                                            chips: ["स्थानांकांची बेरीज संख्या कोडिंग", "चायनीज कोडिंग (सामाईक शब्द पद्धत)", "शब्दांची प्रतिस्थापना कोडिंग"]
                                        }
                                    ],
                                    sources: [
                                        { book: "संपूर्ण बुद्धिमत्ता चाचणी", standard: "सचिन ढवळे", chapterRef: "प्रकरण ३: सांकेतिक भाषा व लिपी" },
                                        { book: "Verbal & Non-Verbal Reasoning", standard: "डॉ. आर. एस. अग्रवाल", chapterRef: "Coding-Decoding" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण ११: नातेसंबंध (Blood Relations) आणि दिशा ज्ञान चाचणी
                        // =========================================================================
                        {
                            id: "gc_apt_c11",
                            code: "CA11",
                            section: "B",
                            slug: "blood-relations-and-direction-sense-test",
                            nameMr: "नातेसंबंध (Blood Relations) आणि दिशा ज्ञान चाचणी (Direction Sense)",
                            nameEn: "Kinship Vector Logic: Blood Relations (Tree Diagram) & Direction Sense (Pythagoras)",
                            name: "नातेसंबंध व दिशा ज्ञान चाचणी",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_apt_c11",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_apt_c10",
                            nextChapterId: "gc_apt_c12",
                            metaDescriptionMr: "कौटुंबिक वृक्ष पद्धत (Family Tree), फोटोतील व्यक्तीकडे निर्देश करणारे प्रश्न, कोडेड नातेसंबंध ($A + B$ म्हणजे $A$ हा $B$ चा पिता), ८ मुख्य व उपदिशा, आणि पायथागोरस सिद्धांताने सरळ अंतर काढणे.",
                            metaDescriptionEn: "Family tree generation, Indicative portrait puzzles, Coded blood relations, Cardinal and ordinal directions, Shadow dynamics at sunrise/sunset, and Shortest displacement via Pythagoras Theorem.",
                            notesJsonPath: "/data/notes/group_c/prelims/aptitude/c11_blood_relations_direction.json",
                            quizTag: "gc_apt_kinship_01",
                            tags: ["Blood Relations Family Tree", "Coded Kinship", "Direction Sense 8 Directions", "Pythagoras Theorem Shortest Distance", "Sun Shadow Problems", "High-Weightage"],
                            searchKeywords: ["blood relations family tree method male square female circle", "pointing to a photograph blood relations questions", "coded blood relations a plus b means father", "direction sense test 8 directions cardinal ordinal pythagoras theorem", "shadow problems sunrise sunset facing east west north south", "नातेसंबंध कौटुंबिक वृक्ष फॅमिली ट्री", "फोटोतील व्यक्तीकडे बोट दाखवून नाते", "कोडेड नातेसंबंध A+B पिता", "दिशा ज्ञान चाचणी ८ दिशा", "पायथागोरस सिद्धांत सर्वात कमी अंतर", "सूर्योदय सूर्यास्त सावलीची गणिते"],
                            topics: [
                                {
                                    id: "top_gc_a11_01",
                                    nameMr: "कौटुंबिक वृक्ष पद्धत, कोडेड नातेसंबंध, ८ दिशा आणि पायथागोरस अंतर",
                                    nameEn: "Family Tree Generation, Coded Relations, Spatial Orientations & Pythagoras Displacement",
                                    subtopics: [
                                        {
                                            id: "st_gc_a11_01_01",
                                            titleMr: "नातेसंबंध सोडवण्याची कौटुंबिक वृक्ष पद्धत (Family Tree): चिन्हांचा वापर: पुरुष ($+$ किंवा चौकोन), स्त्री ($-$ किंवा वर्तुळ), पती-पत्नी जोडी ($\Leftrightarrow$), भावंडे ($—$ आडवी रेषा), पिढ्यांची उतरंड ($\\updownarrow$ उभी रेषा); १) थेट नातेसंबंध; २) फोटोतील व्यक्तीकडे निर्देश करणे: 'माझ्या आईच्या वडिलांचा एकुलता एक मुलगा' = स्वतःचा मामा; ३) कोडेड नातेसंबंध ($A + B$ म्हणजे $A$ हा $B$ चा भाऊ आहे - पर्यायांवरून जेंडर एलिमिनेशन करून उत्तर काढणे)",
                                            titleEn: "Family Tree Kinship Mapping: Standard notations: Male ($+$ or square), Female ($-$ or circle), Married couple ($\Leftrightarrow$), Siblings ($\leftrightarrow$), Generational hierarchy ($\\updownarrow$); Indicative dialogue statements; Coded Relations ($A \times B$ implies father); Gender elimination filter",
                                            chips: ["कौटुंबिक वृक्ष पद्धत Family Tree", "पिढ्यांची रचना (उभी रेषा)", "फोटोतील निर्देश गणिते", "कोडेड नातेसंबंध जेंडर फिल्टर"]
                                        },
                                        {
                                            id: "st_gc_a11_01_02",
                                            titleMr: "दिशा ज्ञान व पायथागोरस सिद्धांत: १) ८ दिशांची मांडणी: ४ मुख्य दिशा (उत्तर, दक्षिण, पूर्व, पश्चिम) व ४ उपदिशा (ईशान्य NE, आग्नेय SE, नैऋत्य SW, वायव्य NW); २) वळणे: उजवीकडे वळणे (घड्याळाच्या काट्याच्या दिशेने $९०^\circ$ Clockwise) व डावीकडे वळणे ($९०^\circ$ Anticlockwise); ३) मूळ ठिकाणापासून सर्वात कमी सरळ अंतर: पायथागोरसचा सिद्धांत वापरणे ($\text{कर्ण} = \sqrt{\text{पाया}^2 + \text{उंची}^2}$); ४) सावलीचे नियम: सूर्योदयावेळी सावली पश्चिमेकडे पडते, सूर्यास्तावेळी सावली पूर्वेकडे पडते, दुपारी १२ वाजता सावली पडत नाही",
                                            titleEn: "Spatial Direction & Pythagoras Theorem: 4 Cardinal (N, S, E, W) and 4 Ordinal (NE, SE, SW, NW) directions; Right turn equals $90^\circ$ Clockwise, Left turn equals $90^\circ$ Counter-Clockwise; Shortest straight-line displacement = $\sqrt{\text{Base}^2 + \text{Height}^2}$; Solar Shadow Dynamics: Sunrise casts shadows westward, Sunset casts shadows eastward, Zero shadow at 12 Noon",
                                            chips: ["८ दिशा (मुख्य व उपदिशा)", "उजवीकडे व डावीकडे वळणे ($९०^\\circ$)", "पायथागोरस अंतर $\\sqrt{a^2 + b^2}$", "सावलीचे नियम सूर्योदय-सूर्यास्त"]
                                        }
                                    ],
                                    sources: [
                                        { book: "संपूर्ण बुद्धिमत्ता चाचणी", standard: "सचिन ढवळे", chapterRef: "प्रकरण ४ व ५: नातेसंबंध व दिशा ज्ञान" },
                                        { book: "Verbal & Non-Verbal Reasoning", standard: "डॉ. आर. एस. अग्रवाल", chapterRef: "Blood Relations & Direction Sense Test" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १२: घड्याळ (Clock) आणि दिनदर्शिका (Calendar)
                        // =========================================================================
                        {
                            id: "gc_apt_c12",
                            code: "CA12",
                            section: "B",
                            slug: "clock-angles-mirror-images-and-calendar-odd-days",
                            nameMr: "घड्याळ (Clock) आणि दिनदर्शिका (Calendar)",
                            nameEn: "Chronometry: Clock Angle Metrics, Mirror Reflections & Calendar Odd Days",
                            name: "घड्याळ व दिनदर्शिका (Clock & Calendar)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_apt_c12",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_apt_c11",
                            nextChapterId: "gc_apt_c13",
                            metaDescriptionMr: "घड्याळातील कोनाचे सूत्र ($|\frac{11}{2}M - 30H|$), काटे तंतोतंत जुळणे (०°), परस्परविरुद्ध (१८०°), काटकोन (९०°), आरशातील प्रतिमा (११:६० मधून वजा), लीप वर्ष निकष, जादा दिवस (Odd Days), आणि वार शोधणे.",
                            metaDescriptionEn: "Clock Angle Formula ($|\frac{11}{2}M - 30H|$), Overlapping hands, Opposite positions, Right angles per day, Mirror image shortcut (subtract from 11:60), Leap year 400-rule, Odd Days metric, and Day of the week algorithms.",
                            notesJsonPath: "/data/notes/group_c/prelims/aptitude/c12_clock_calendar.json",
                            quizTag: "gc_apt_clock_01",
                            tags: ["Clocks Angle Formula", "Clock Hands Overlap 0 Degree", "Clock Mirror Image 11 60", "Calendar Leap Year Century", "Calendar Odd Days", "High-Weightage"],
                            searchKeywords: ["clock angle between hour hand and minute hand formula 11 by 2 m minus 30 h", "hands of clock coincide 22 times in 24 hours right angle 44 times", "mirror image of clock subtract from 11 60 water image 18 30", "calendar leap year divisible by 4 century year 400", "odd days in ordinary year 1 leap year 2 100 years 5 odd days", "day of week on any given date calendar tricks", "घड्याळातील कोनाचे सूत्र ११/२ M - ३० H", "काटे एकमेकांवर येणे २४ तासांत २२ वेळा", "घड्याळाची आरशातील प्रतिमा ११:६० वजाबाकी", "दिनदर्शिका लीप वर्ष ४०० चा नियम", "जादा दिवस Odd Days वार शोधणे ट्रिक्स"],
                            topics: [
                                {
                                    id: "top_gc_a12_01",
                                    nameMr: "घड्याळातील कोनाची सूत्रे, काट्यांची स्थिती आणि दिनदर्शिकेतील वार शोधणे",
                                    nameEn: "Clock Angle Calculation, Coincidence Frequencies & Calendar Odd-Day Algorithm",
                                    subtopics: [
                                        {
                                            id: "st_gc_a12_01_01",
                                            titleMr: "घड्याळातील कोनांची सूत्रे व स्थिती: १) तास काटा व मिनिट काटा यांमधील कोन सूत्र: $\theta = \left|\frac{11}{2}M - 30H\right|$ (येथे $H$ = तास, $M$ = मिनिटे; उत्तर १८०° पेक्षा जास्त आल्यास ३६०° मधून वजा करावे); २) मिनिट काटा एका मिनिटात ६° फिरतो, तास काटा एका मिनिटात ०.५° फिरतो; ३) २४ तासांमधील स्थिती: दोन्ही काटे एकमेकांवर येणे (०°) = २४ तासांत २२ वेळा; एकमेकांच्या विरुद्ध येणे (१८०°) = २४ तासांत २२ वेळा; काटकोन होणे (९०°) = २४ तासांत ४४ वेळा; ४) आरशातील वेळ: दिलेली वेळ ११:६० मधून वजा करावी (उदा. ४:२० ची आरशातील प्रतिमा $= 11:60 - 4:20 = ७:४०$)",
                                            titleEn: "Clock Angle Geometry & Reflex Angles: Angle Formula: $\theta = |\frac{11}{2}M - 30H|$; Minute hand rotates $6^\circ/\text{min}$, Hour hand rotates $0.5^\circ/\text{min}$; Frequencies in 24 hours: Coincide ($0^\circ$) = 22 times, Opposite ($180^\circ$) = 22 times, Right angles ($90^\circ$) = 44 times; Mirror Reflection: Subtract time from 11:60 (or 23:60 for 24-hr format)",
                                            chips: ["कोनाचे सूत्र $\\theta = |\\frac{11}{2}M - 30H|$", "काटे एकमेकांवर २२ वेळा", "काटकोन ४४ वेळा", "आरशातील वेळ (११:६० मधून वजा करणे)"]
                                        },
                                        {
                                            id: "st_gc_a12_01_02",
                                            titleMr: "दिनदर्शिका व जादा दिवस पद्धत (Odd Days Method): १) सामान्य वर्ष: ३६५ दिवस = ५२ आठवडे + १ जादा दिवस (Odd Day); २) लीप वर्ष: ३६६ दिवस = ५२ आठवडे + २ जादा दिवस (साध्या वर्षाला ४ ने भाग जाणे, परंतु शतकी वर्षाला ४०० ने भाग गेला तरच ते लीप वर्ष ठरते, उदा. २००० हे लीप वर्ष आहे, १९०० नाही); ३) शतकांमधील जादा दिवस: १०० वर्षांत ५ जादा दिवस, २०० वर्षांत ३, ३०० वर्षांत १, आणि ४०० वर्षांत ० जादा दिवस; ४) दिलेल्या तारखेचा वार शोधणे आणि कॅलेंडरची पुनरावृत्ती (सामान्य वर्ष ६ किंवा ११ वर्षांनी आणि लीप वर्ष २८ वर्षांनी पुन्हा येते)",
                                            titleEn: "Calendar Odd-Day Algorithm & Century Rules: Ordinary year (365 days = 52 weeks + 1 Odd Day); Leap year (366 days = 2 Odd Days; Divisible by 4, but Century years must be divisible by 400; 2000 was leap, 1900 was ordinary); Cumulative Odd Days: 100 yrs = 5, 200 yrs = 3, 300 yrs = 1, 400 yrs = 0; Calendar repeats: Ordinary years repeat in 6 or 11 years, Leap years repeat in 28 years",
                                            chips: ["सामान्य वर्ष (१ जादा दिवस)", "लीप वर्ष (२ जादा दिवस)", "शतकी वर्ष ४०० ने भाग", "४०० वर्षांत शून्य जादा दिवस", "कॅलेंडर पुनरावृत्ती २८ वर्षे"]
                                        }
                                    ],
                                    sources: [
                                        { book: "संपूर्ण बुद्धिमत्ता चाचणी", standard: "सचिन ढवळे", chapterRef: "प्रकरण ६ व ७: घड्याळ व दिनदर्शिका" },
                                        { book: "Verbal & Non-Verbal Reasoning", standard: "डॉ. आर. एस. अग्रवाल", chapterRef: "Clock & Calendar" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १३: बैठक व्यवस्था (Seating Arrangement) आणि कोडी (Puzzles)
                        // =========================================================================
                        {
                            id: "gc_apt_c13",
                            code: "CA13",
                            section: "B",
                            slug: "seating-arrangements-circular-linear-and-analytical-puzzles",
                            nameMr: "बैठक व्यवस्था (Seating Arrangement) आणि कोडी (Puzzles)",
                            nameEn: "Combinatorial Arrangements: Circular/Linear Seating, Floor Plans & Matrix Puzzles",
                            name: "बैठक व्यवस्था व कोडी (Puzzles)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_apt_c13",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_apt_c12",
                            nextChapterId: "gc_apt_c14",
                            metaDescriptionMr: "रेषीय बैठक व्यवस्था (एका ओळीत उत्तरेकडे/दक्षिणेकडे तोंड), वर्तुळाकार बैठक व्यवस्था (केंद्राकडे तोंड vs केंद्राबाहेर तोंड), चौकोनी टेबल, मजला कोडी (Floor Puzzles), आणि दिवस-विषय मॅट्रिक्स कोडी.",
                            metaDescriptionEn: "Linear arrangements (Single/Double parallel rows, North/South facing), Circular arrangements (Facing center vs Facing outward), Square/Rectangular tables, Multi-story Floor Puzzles, and Matrix Day-Subject puzzles.",
                            notesJsonPath: "/data/notes/group_c/prelims/aptitude/c13_seating_puzzles.json",
                            quizTag: "gc_apt_seating_01",
                            tags: ["Seating Arrangement", "Circular Seating Facing Center", "Linear Row North South", "Floor Based Puzzles", "Matrix Matching", "High-Weightage"],
                            searchKeywords: ["seating arrangement circular facing center inside outside", "linear seating arrangement single row north south facing parallel rows", "floor based puzzles building 7 floors 8 people", "matrix puzzles days colors profession matching", "बैठक व्यवस्था वर्तुळाकार केंद्राकडे तोंड", "रेषीय बैठक व्यवस्था एका ओळीत उत्तरेकडे", "इमारतीचे मजले कोडी Floor Puzzles", "मॅट्रिक्स कोडी वार रंग व्यक्ती"],
                            topics: [
                                {
                                    id: "top_gc_a13_01",
                                    nameMr: "वर्तुळाकार व रेषीय बैठक व्यवस्था आणि मजला-मॅट्रिक्स कोडी सोडवण्याच्या ट्रिक्स",
                                    nameEn: "Circular-Linear Positional Logic, Floor Matrix Deductions & Elimination Grid",
                                    subtopics: [
                                        {
                                            id: "st_gc_a13_01_01",
                                            titleMr: "वर्तुळाकार बैठक व्यवस्था (Circular Seating): १) केंद्राकडे तोंड करून बसलेले असताना: व्यक्तीची 'उजवी बाजू' म्हणजे अँटी-क्लॉकवाईज (Anti-Clockwise) आणि 'डावी बाजू' म्हणजे क्लॉकवाईज (Clockwise); २) केंद्राबाहेर तोंड करून बसलेले असताना: दिशा उलट होतात (उजवी बाजू = क्लॉकवाईज, डावी बाजू = अँटी-क्लॉकवाईज); प्रथम निश्चित विधान (Definite Statement) निवडून मांडणी सुरू करणे; संभाव्य आकृत्या (Possibility diagrams) काढून विसंगत आकृती रद्द करणे",
                                            titleEn: "Circular Seating Logic: When facing the center: Right side = Counter-Clockwise, Left side = Clockwise; When facing outward: Right side = Clockwise, Left side = Counter-Clockwise; Method: Anchor absolute statements first, construct dual parallel possibility matrices, eliminate contradictions",
                                            chips: ["केंद्राकडे तोंड (उजवी बाजू = घड्याळाच्या विरुद्ध)", "केंद्राबाहेर तोंड", "संभाव्य आकृत्या पद्धत Possibilities", "निश्चित विधानावरून सुरुवात"]
                                        },
                                        {
                                            id: "st_gc_a13_01_02",
                                            titleMr: "रेषीय व्यवस्था व कोडी (Floor & Matrix Puzzles): १) रेषीय व्यवस्था (Linear): उत्तरेकडे तोंड असल्यास उजवी-डावी बाजू आपल्या हाताप्रमाणे असते, दक्षिणेकडे तोंड असल्यास उजवी-डावी बाजू उलट होते; २) मजला कोडी (Floor Puzzles): ७ किंवा ८ मजली इमारतीत १ ते ७ क्रमांक देऊन अटींनुसार व्यक्तींची मांडणी करणे (सम/विषम मजला, दोघांच्या मध्ये); ३) मॅट्रिक्स कोडी: व्यक्ती, आठवड्याचे वार, विषय, व्यवसाय, व शहर यांची जुळणी करणारी टेबल पद्धत",
                                            titleEn: "Linear Rows & Multi-Storey Floor Puzzles: Linear: North-facing mirrors standard left-right hands; South-facing inverts left-right hands; Floor Puzzles: Construct vertical numeric matrix 1 to 7/8 evaluating odd/even conditions and intervening floor gaps; Elimination Table method for Day-Subject-City matching",
                                            chips: ["रेषीय व्यवस्था (उत्तरेकडे/दक्षिणेकडे तोंड)", "मजला कोडी Floor Puzzles (१ ते ७ मजले)", "मॅट्रिक्स टेबल मॅचिंग पद्धत"]
                                        }
                                    ],
                                    sources: [
                                        { book: "संपूर्ण बुद्धिमत्ता चाचणी", standard: "सचिन ढवळे", chapterRef: "प्रकरण ८ व ९: बैठक व्यवस्था व कोडी" },
                                        { book: "Verbal & Non-Verbal Reasoning", standard: "डॉ. आर. एस. अग्रवाल", chapterRef: "Puzzles & Seating Arrangements" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १४: वेन आकृत्या (Venn Diagrams) आणि सिलॉजिझम (तर्क व युक्तिवाद)
                        // =========================================================================
                        {
                            id: "gc_apt_c14",
                            code: "CA14",
                            section: "B",
                            slug: "venn-diagrams-and-syllogism-deductive-logic",
                            nameMr: "वेन आकृत्या (Venn Diagrams) आणि सिलॉजिझम (तर्क व युक्तिवाद)",
                            nameEn: "Deductive Reasoning: Venn Diagram Categorization & Syllogism Validity",
                            name: "वेन आकृत्या व सिलॉजिझम (तर्कशास्त्र)",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_apt_c14",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_apt_c13",
                            nextChapterId: "gc_apt_c15",
                            metaDescriptionMr: "तीन घटकांमधील संबंध दर्शवणाऱ्या वेन आकृत्या, भौमितिक आकृत्यांवर आधारित प्रश्न (त्रिकोण, चौकोन, वर्तुळ - खेळाडू, प्राध्यापक, डॉक्टर), आणि सिलॉजिझम (सर्व, काही, एकही नाही विधाने व निष्कर्ष).",
                            metaDescriptionEn: "Categorical Venn diagrams showing inter-set relationships, Geometric overlay puzzles (intersecting triangles, circles, rectangles), and Deductive Syllogism (Universal affirmative, Particular negative, Venn verification).",
                            notesJsonPath: "/data/notes/group_c/prelims/aptitude/c14_venn_syllogism.json",
                            quizTag: "gc_apt_syllogism_01",
                            tags: ["Venn Diagrams", "Geometric Overlap Sets", "Syllogism Deductive Logic", "All Some None Statements", "High-Weightage"],
                            searchKeywords: ["venn diagrams reasoning three classes relationships", "geometric venn diagrams triangle circle rectangle shaded regions", "syllogism all a are b some b are c no c is d conclusions", "minimum overlapping venn diagram method syllogism validity", "वेन आकृत्या तीन घटकांमधील संबंध", "भौमितिक वेन आकृती खेळाडू डॉक्टर शिक्षक", "सिलॉजिझम विधाने व निष्कर्ष सर्व काही एकही नाही", "तर्कशास्त्र वेन आकृती पद्धत"],
                            topics: [
                                {
                                    id: "top_gc_a14_01",
                                    nameMr: "वेन आकृत्यांचे प्रकार, संच सिद्धांत आणि सिलॉजिझम विधाने-निष्कर्ष",
                                    nameEn: "Euler-Venn Set Theory, Geometric Intersections & Syllogistic Deduction",
                                    subtopics: [
                                        {
                                            id: "st_gc_a14_01_01",
                                            titleMr: "वेन आकृत्यांचे प्रकार: १) तीन घटकांमधील परस्पर संबंध दर्शवणे (उदा. भारत, महाराष्ट्र, मुंबई - एका आत एक वर्तुळे; पुरुष, डॉक्टर, लेखक - एकमेकांना छेदणारी वर्तुळे; कुत्रा, मांजर, टेबल - पूर्ण वेगळी वर्तुळे); २) भौमितिक वेन आकृत्या (Geometric Overlaps): त्रिकोण म्हणजे खेळाडू, वर्तुळ म्हणजे पदवीधर, चौकोन म्हणजे नोकरदार; 'असे किती खेळाडू आहेत जे पदवीधर आहेत पण नोकरदार नाहीत' यांसारख्या प्रश्नांमध्ये केवळ त्रिकोण व वर्तुळात येणारा पण चौकोनात नसणारा सामाईक भाग शोधणे",
                                            titleEn: "Venn Set Intersections: 1) Euler-Venn diagrams representing 3 categorical classes (Concentric for hierarchical sets like India-Maharashtra-Mumbai; Partially overlapping for intersecting roles like Men-Doctors-Authors; Disjoint sets for mutually exclusive classes); 2) Geometric Intersections (Identifying common numeric values across overlapping Triangles, Circles, and Rectangles)",
                                            chips: ["वेन आकृत्या संच संबंध", "एका आत एक वर्तुळे (समावेशक)", "एकमेकांना छेदणारी वर्तुळे", "भौमितिक आकृत्या सामाईक भाग"]
                                        },
                                        {
                                            id: "st_gc_a14_01_02",
                                            titleMr: "सिलॉजिझम (Syllogism - विधाने व निष्कर्ष): दिलेल्या विधानांना १००% सत्य मानून काढलेला कोणता निष्कर्ष तार्किकदृष्ट्या बरोबर आहे हे ठरवणे; विधानांचे प्रकार: अ) सर्व $A$ हे $B$ आहेत (All $A$ are $B$), ब) काही $A$ हे $B$ आहेत (Some $A$ are $B$), क) एकही $A$ हा $B$ नाही (No $A$ is $B$); पद्धत: किमान आच्छादन असणारी वेन आकृती (Minimum Overlapping Diagram) काढणे; निष्कर्ष सर्व संभाव्य आकृत्यांमध्ये सत्य ठरला तरच तो 'निश्चित सत्य' मानला जातो; शक्यता (Possibility) आधारित निष्कर्ष",
                                            titleEn: "Deductive Syllogism: Evaluating validity of conclusions assuming premises to be absolutely true; 4 Propositional Forms: Universal Affirmative ('All A are B'), Particular Affirmative ('Some A are B'), Universal Negative ('No A is B'), Particular Negative ('Some A are not B'); Solved via Minimum Overlapping Venn Diagrams; A definitive conclusion must hold universally true across all possible diagrams",
                                            chips: ["सिलॉजिझम विधाने व निष्कर्ष", "सर्व A हे B आहेत (All)", "काही A हे B आहेत (Some)", "एकही A हा B नाही (No)", "किमान वेन आकृती पद्धत"]
                                        }
                                    ],
                                    sources: [
                                        { book: "संपूर्ण बुद्धिमत्ता चाचणी", standard: "सचिन ढवळे", chapterRef: "प्रकरण १० व ११: वेन आकृत्या व सिलॉजिझम" },
                                        { book: "Verbal & Non-Verbal Reasoning", standard: "डॉ. आर. एस. अग्रवाल", chapterRef: "Venn Diagrams & Syllogism" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १५: विधाने, गृहीतके, युक्तिवाद आणि डेटा इंटरप्रिटेशन (DI)
                        // =========================================================================
                        {
                            id: "gc_apt_c15",
                            code: "CA15",
                            section: "B",
                            slug: "critical-reasoning-assumptions-arguments-and-data-interpretation",
                            nameMr: "विधाने, गृहीतके, युक्तिवाद आणि डेटा इंटरप्रिटेशन (DI)",
                            nameEn: "Critical Analytical Reasoning (Assumptions, Arguments) & Data Interpretation (DI)",
                            name: "विश्लेषणात्मक विचार व डेटा इंटरप्रिटेशन",
                            category: "CORE",
                            difficulty: "HARD",
                            priority: "HIGH",
                            estimatedHours: 3,
                            isMaharashtraReference: false,
                            trackingKey: "progress_gc_apt_c15",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_apt_c14",
                            nextChapterId: "gc_apt_c16",
                            metaDescriptionMr: "विधाने व गृहीतके (Statement & Assumptions), विधाने व कृतीची दिशा (Course of Action), सबळ vs दुर्बल युक्तिवाद, आणि डेटा इंटरप्रिटेशन (स्तंभ आलेख, वृत्त आलेख Pie Chart, रेषा आलेख Line Graph).",
                            metaDescriptionEn: "Critical Reasoning: Statement-Assumptions (Implicit premises), Courses of Action, Strong vs Weak Arguments, and Data Interpretation (DI Bar Graphs, Pie Charts $360^\circ$ degree-to-percentage conversions, Line Graphs).",
                            notesJsonPath: "/data/notes/group_c/prelims/aptitude/c15_critical_reasoning_di.json",
                            quizTag: "gc_apt_di_01",
                            tags: ["Critical Reasoning", "Statement Assumptions", "Course of Action", "Strong Weak Arguments", "Data Interpretation DI", "Pie Chart Degree Percentage", "High-Weightage"],
                            searchKeywords: ["critical reasoning statement and assumptions implicit explicit", "statement and course of action practical administrative solutions", "strong and weak arguments logic", "data interpretation di bar graph line graph pie chart 360 degrees", "pie chart degree to percentage conversion 100 percent equals 360 degrees", "विधाने व गृहीतके अंतर्निहित गृहीतक", "विधाने व कृतीची दिशा प्रशासकीय निर्णय", "सबळ व दुर्बल युक्तिवाद", "डेटा इंटरप्रिटेशन DI पाय चार्ट ३६० अंश", "स्तंभ आलेख रेषा आलेख"],
                            topics: [
                                {
                                    id: "top_gc_a15_01",
                                    nameMr: "क्रिटिकल रिझनिंग, प्रशासकीय कृतीची दिशा आणि डेटा इंटरप्रिटेशन आलेखांचे वाचन",
                                    nameEn: "Critical Proposition Analytics, Administrative Action Directives & Graph Decoding",
                                    subtopics: [
                                        {
                                            id: "st_gc_a15_01_01",
                                            titleMr: "विधाने, गृहीतके व युक्तिवाद (Critical Reasoning): १) विधाने व गृहीतके (Statement & Assumptions): विधानामागील न बोललेला छुपा विचार म्हणजे गृहीतक; गृहीतक विधानात अंतर्निहित (Implicit) असले पाहिजे; बाह्य ज्ञानाचा अति-वापर टाळणे; २) कृतीची दिशा (Course of Action): दिलेली समस्या सोडवण्यासाठी सुचवलेली प्रशासकीय कृती वास्तववादी, व्यावहारिक आणि समस्येचे निराकरण करणारी असावी (अति-टोकाची किंवा कठोर शिक्षा टाळावी); ३) सबळ युक्तिवाद (Strong Arguments): संविधानाला, लोककल्याणाला व तर्काला धरून असलेला युक्तिवाद",
                                            titleEn: "Critical Logic Paradigms: 1) Statement & Assumptions (Unstated implicit presupposition embedded within the premise; must be directly deduced without speculative leaps); 2) Course of Action (Administrative problem-solving; measures must be practically feasible, balanced, non-draconian); 3) Strong vs Weak Arguments (Substantiated by constitutional values and logical merit)",
                                            chips: ["विधाने व गृहीतके (अंतर्निहित विचार)", "कृतीची दिशा (व्यावहारिक उपाय)", "सबळ युक्तिवाद (तार्किक आधार)"]
                                        },
                                        {
                                            id: "st_gc_a15_01_02",
                                            titleMr: "डेटा इंटरप्रिटेशन (Data Interpretation - DI): आलेखांवर आधारित प्रश्नांचा संच; १) वृत्त आलेख (Pie Chart): संपूर्ण वर्तुळ = १००% किंवा ३६०°; रूपांतरण सूत्र: $१\% = ३.६^\circ$ (उदा. $५४^\circ = \frac{54}{3.6} = १५\%$); २) स्तंभ आलेख (Bar Graph) व रेषा आलेख (Line Graph): दोन वर्षांमधील टक्केवारी वाढ/घट काढणे ($\frac{\text{फरक}}{\text{मूळ मूल्य}} \times 100$), गुणोत्तर काढणे आणि सरासरी काढणे; जलद आकडेमोड व राउंड-ऑफ तंत्र",
                                            titleEn: "Data Interpretation (DI): Graph reading and quantitative analysis; 1) Pie Charts: Total circle $= 100\% = 360^\circ$; Conversion metric: $1\% = 3.6^\circ$ (e.g., $54^\circ = 54/3.6 = 15\%$); 2) Bar & Line Graphs: Rapid calculation of percentage increase/decrease ($\frac{\text{Difference}}{\text{Base}} \times 100$), comparative ratios, and period averages via estimation heuristics",
                                            chips: ["डेटा इंटरप्रिटेशन DI", "पाय चार्ट Pie Chart ($१\\% = ३.६^\\circ$)", "टक्केवारी वाढ/घट सूत्र", "स्तंभ व रेषा आलेख"]
                                        }
                                    ],
                                    sources: [
                                        { book: "संपूर्ण बुद्धिमत्ता चाचणी", standard: "सचिन ढवळे", chapterRef: "प्रकरण १२: विश्लेषणात्मक तर्कशास्त्र व DI" },
                                        { book: "Verbal & Non-Verbal Reasoning", standard: "डॉ. आर. एस. अग्रवाल", chapterRef: "Statement Assumptions & Data Interpretation" }
                                    ]
                                }
                            ]
                        },


                        // =========================================================================
                        // प्रकरण १६: पूर्व परीक्षा अंकगणित-बुद्धिमत्ता मास्टर रिव्हिजन, शॉर्टकट ट्रिक्स व १० वर्षांचे PYQ ट्रेंड्स
                        // =========================================================================
                        {
                            id: "gc_apt_c16",
                            code: "CA16",
                            section: "B",
                            slug: "prelims-aptitude-reasoning-master-revision-shortcuts-and-pyq-trends",
                            nameMr: "पूर्व परीक्षा अंकगणित-बुद्धिमत्ता मास्टर रिव्हिजन, शॉर्टकट ट्रिक्स व १० वर्षांचे PYQ ट्रेंड्स",
                            nameEn: "Prelims CSAT Aptitude Master Consolidation: Speed Arithmetic, Reasoning Matrix & 10-Year PYQ Trends",
                            name: "अंकगणित-बुद्धिमत्ता मास्टर रिव्हिजन",
                            category: "REVISION",
                            difficulty: "MEDIUM",
                            priority: "HIGH",
                            estimatedHours: 4,
                            isMaharashtraReference: true,
                            trackingKey: "progress_gc_apt_c16",
                            hasNotes: true,
                            hasQuiz: true,
                            prevChapterId: "gc_apt_c15",
                            nextChapterId: null,
                            metaDescriptionMr: "६० सेकंदात गणित सोडवण्याची वेळ व्यवस्थापन रणनीती, सूत्रांची मास्टर यादी, पर्यायांवरून उत्तरांची पडताळणी तंत्र (Option Elimination Method), आणि २०१३ ते २०२५ मधील MPSC गट-क पूर्व परीक्षा PYQ ट्रेंड्स.",
                            metaDescriptionEn: "Time management heuristic for 60-second problem solving, Consolidated Formula Cheatsheet (Arithmetic & Reasoning), Reverse Verification from Options, and 10-Year MPSC Group C trend analytics.",
                            notesJsonPath: "/data/notes/group_c/prelims/aptitude/c16_master_revision_csat.json",
                            quizTag: "gc_apt_revision_01",
                            tags: ["Revision", "Prelims Strategy", "15 Marks Target", "Arithmetic Formulas Cheatsheet", "Reverse Option Elimination", "PYQ Trends 2013 to 2025", "High-Weightage"],
                            searchKeywords: ["mpsc group c aptitude reasoning 15 questions strategy pyq trends 2013 to 2025", "maths formulas cheatsheet bodmas time work speed distance", "reverse engineering option elimination method reasoning", "time management 60 minutes 100 questions exam strategy", "अंकगणित बुद्धिमत्ता पूर्व परीक्षा रणनीती १५ पैकी १५ गुण", "सर्व गणितीय सूत्रे तक्ता काम काळ वेग", "पर्यायांवरून उत्तर शोधणे एलिमिनेशन पद्धत", "६० मिनिटांचे अचूक वेळ नियोजन", "१० वर्षांचे PYQ विश्लेषण"],
                            topics: [
                                {
                                    id: "top_gc_a16_01",
                                    nameMr: "वेळ व्यवस्थापन सूत्रे, पर्यायांवरून उत्तर पडताळणी आणि १० वर्षांचे MPSC PYQ विश्लेषण",
                                    nameEn: "Speed-Math Heuristics, Back-Calculation Techniques & 10-Year PYQ Insights",
                                    subtopics: [
                                        {
                                            id: "st_gc_a16_01_01",
                                            titleMr: "परीक्षेतील वेळ व्यवस्थापन व पर्यायांवरून उत्तर शोधणे (Reverse Engineering): पूर्व परीक्षेत ६० मिनिटांत १०० प्रश्न सोडवायचे असल्याने अंकगणित-बुद्धिमत्तेच्या १५ प्रश्नांसाठी 'कमाल १८ ते २० मिनिटे' द्यावीत; १) पर्यायांवरून पडताळणी: समीकरण सोडवण्याऐवजी दिलेले पर्याय थेट समीकरणात टाकून डावी बाजू = उजवी बाजू पडताळणे (उदा. वयवारी, नफा-तोटा, संख्यांची गणिते); २) एकक स्थानावरून उत्तर (Unit Digit Method); ३) डिजिटल रूट / ९ ची पद्धत; ४) ज्या गणिताला १ मिनिटापेक्षा जास्त वेळ लागतो ते गणित तात्काळ गोल करून पुढे जाणे",
                                            titleEn: "Speed-Math Heuristics & Reverse Engineering: In a 60-minute 100-question paper, allocate maximum 18-20 minutes for Aptitude/Reasoning (15 Qs); Option Substitution: Plug choices directly into equations for instantaneous validation (Ages, Percentages); Unit Digit filtering; Digital Sum technique; Strict 60-second per question rule skipping prolonged deadlocks",
                                            chips: ["वेळ नियोजन (१८ ते २० मिनिटे)", "पर्यायांवरून पडताळणी (Reverse Engineering)", "एकक स्थान पद्धत (Unit Digit)", "६० सेकंद नियम Skip Rule"]
                                        },
                                        {
                                            id: "st_gc_a16_01_02",
                                            titleMr: "MPSC पूर्व परीक्षा अंकगणित-बुद्धिमत्ता १० वर्षांचे विश्लेषण (१५ पैकी १५ गुण रणनीती): प्रश्न वितरणाचा कल: बुद्धिमत्ता चाचणी (९-१० प्रश्न - मालिका, कोडिंग, नातेसंबंध, दिशा, घड्याळ, बैठक व्यवस्था, वेन आकृती), अंकगणित (५-६ प्रश्न - लसावि-मसावि, सरासरी-वयवारी, नफा-तोटा, काम-काळ, वेग-आगगाडी); मागील १० वर्षांत (२०१३ ते २०२५) विचारलेल्या प्रश्नांचे पुनरावलोकन; अचूकता (Accuracy) १००% ठेवून नकारात्मक गुणदान (Negative Marking ०.२५) टाळणे",
                                            titleEn: "10-Year MPSC Group C CSAT Trend Analytics (15/15 Marks Strategy): Cluster breakdown: Logical Reasoning (9-10 Qs: Series, Coding, Blood Relations, Direction, Clock, Seating, Venn Diagrams) and Quantitative Arithmetic (5-6 Qs: LCM/HCF, Averages, Profit/Loss, Time-Work, Speed-Trains); 100% precision target avoiding 0.25 negative deductions",
                                            chips: ["PYQ ट्रेंड्स विश्लेषण", "१५ पैकी १५ गुण रणनीती", "बुद्धिमत्ता ९-१० प्रश्न वेटेज", "अंकगणित ५-६ प्रश्न वेटेज", "१००% अचूकता Accuracy"]
                                        }
                                    ],
                                    sources: [
                                        { book: "संपूर्ण बुद्धिमत्ता चाचणी", standard: "सचिन ढवळे", chapterRef: "मास्टर उजळणी व वेळेचे व्यवस्थापन" },
                                        { book: "MPSC मागील वर्षांच्या प्रश्नपत्रिका संच", standard: "२०१३ ते २०२५", chapterRef: "अंकगणित व बुद्धिमत्ता पूर्व परीक्षा प्रश्न विश्लेषण" }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}



export default groupCPrelimsData;