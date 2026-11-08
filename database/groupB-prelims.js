export const groupBPrelimsData = {
  id: "prelims",
  title: "संयुक्त पूर्व परीक्षा (Combined Prelims)",
  totalMarks: 100,
  durationMinutes: 60,
  negativeMarking: "1/4 (0.25)",

  subjects: [
    {
      id: "gb_pre_history",
      code: "HIST",
      slug: "history-modern-india-maharashtra",
      nameMr: "आधुनिक भारताचा विशेषतः महाराष्ट्राचा इतिहास",
      nameEn: "Modern History of India with Special Reference to Maharashtra",
      name: "इतिहास (Modern History of India & Maharashtra)",
      officialScope: "Modern History of India (1857-1960) with special reference to Maharashtra, Social Reformers, Freedom Struggle, and Samyukta Maharashtra Movement",
      version: "1.0",
      verifiedDate: "2026-10-28",
      notesJsonBaseDir: "/data/notes/group_b/prelims/history/",


      // UI Theme & Theming Metadata
      theme: {
        primaryColor: "#d97706",        // Amber / Heritage Theme
        bgColor: "#fffbeb",
        iconClass: "ri-ancient-gate-line"
      },


      // अभ्यास व डॅशबोर्ड ॲनालिटिक्स मेट्रिक्स
      metrics: {
        totalChapters: 20,
        totalEstimatedHours: 68,
        avgQuestionsInPrelims: 15,
        targetMarks: 15,
        weightageRange: "14-16 Questions"
      },


      // विषय पातळीवरील स्मार्ट टॅग्ज
      subjectTags: [
        "Core-GS",
        "Group-B-Prelims",
        "Paper-1-GS",
        "Pre-Cum-Mains",
        "High-Weightage",
        "Factual-Intensive",
        "Maharashtra-Dominant"
      ],


      filterCategory: "GS",
      searchKeywords: [
        "mpsc group b history", "modern india", "maharashtra history", "social reformers",
        "1857 revolt", "satyashodhak samaj", "phule", "shahu", "ambedkar", "tilak",
        "pratisarkar", "samyukta maharashtra", "freedom struggle",
        "इतिहास", "आधुनिक भारत", "महाराष्ट्राचा इतिहास", "समाजसुधारक", "१८५७ चा उठाव", "सत्यशोधक समाज", "स्वातंत्र्यलढा", "संयुक्त महाराष्ट्र"
      ],


      referenceSources: [
        {
          name: "MPSC Non-Gazetted Group B Combined Syllabus",
          role: "अधिकृत परीक्षा-संदर्भ",
          url: "https://mpsc.gov.in"
        },
        {
          name: "महाराष्ट्र राज्य पाठ्यपुस्तक निर्मिती मंडळ (Balbharati)",
          role: "प्राथमिक शालेय संदर्भ (इयत्ता ८ वी व ११ वी इतिहास)",
          url: "https://balbharati.co.in/EHome.php"
        },
        {
          name: "आधुनिक महाराष्ट्राचा इतिहास - डॉ. एस. एस. गाथाळ",
          role: "महाराष्ट्राचा विशेष संदर्भ व समाजसुधारक"
        },
        {
          name: "महाराष्ट्राचा इतिहास - डॉ. अनिल कठारे",
          role: "स्वातंत्र्यलढा, उठाव व संस्थात्मक चळवळी"
        },
        {
          name: "A Brief History of Modern India (Spectrum) - Rajiv Ahir",
          role: "राष्ट्रीय ऐतिहासिक पार्श्वभूमी, गव्हर्नर जनरल व कायदे"
        }
      ],


      chapters: [
        // =========================================================================
        // विभाग A — ब्रिटिश सत्तेची स्थापना, सुरुवातीचे लढे व १८५७ चा उठाव
        // =========================================================================
        {
          id: "gb_hist_c01",
          code: "H01",
          section: "A",
          slug: "early-resistance-and-tribal-revolts-maharashtra",
          nameMr: "महाराष्ट्रातील सुरुवातीचे उठाव, रामोशी व आदिवासी लढे",
          nameEn: "Early Resistance, Ramoshi & Tribal Revolts in Maharashtra",
          name: "सुरुवातीचे उठाव व आदिवासी लढे (Early Resistance in Maharashtra)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 3,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_hist_c01",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: null,
          nextChapterId: "gb_hist_c02",
          metaDescriptionMr: "उमाजी नाईक, रामोशी बंड, खानदेशातील भिल्ल उठाव, कोळ्यांचे लढे आणि ठाणे-नाशिक आदिवासी प्रतिकाराचा सखोल अभ्यास.",
          metaDescriptionEn: "Comprehensive revision notes on Umaji Naik, Ramoshi uprising, Bhil revolts in Khandesh, Koli resistance, and tribal leaders in Maharashtra.",
          notesJsonPath: "/data/notes/group_b/prelims/history/c01_early_resistance.json",
          quizTag: "gb_hist_early_resistance_01",
          tags: ["Modern India", "Maharashtra History", "Umaji Naik", "Ramoshi Revolt", "Bhil Uprising", "Tribal Resistance", "High-Weightage"],
          searchKeywords: ["umaji naik", "ramoshi revolt", "bhil uprising", "khandesh", "koli revolt", "उमाजी नाईक", "रामोशी उठाव", "भिल्ल बंड", "चिल नाईक", "कजारसिंग"],
          topics: [
            {
              id: "top_gb_h01_01",
              nameMr: "महाराष्ट्रातील आद्य क्रांतिकारक व आदिवासी-शेतकरी सशस्त्र लढे",
              nameEn: "Early Armed Resistance & Tribal Movements in Maharashtra",
              subtopics: [
                {
                  id: "st_gb_h01_01_01",
                  titleMr: "उमाजी नाईक: आद्य क्रांतिकारक, रामोशींचे संघटन, इंग्रजविरोधी जाहीरनामा (१५ डिसेंबर १८३१), नरवीर उमाजींचे बलिदान (३ फेब्रुवारी १८३२/पुणे)",
                  titleEn: "Umaji Naik: First Revolutionary Manifesto (1831), Ramoshi Mobilization & Martyrdom",
                  chips: ["उमाजी नाईक", "१८३१ चा जाहीरनामा", "रामोशी लढा", "बापू त्रिंबकजी दांगळे"]
                },
                {
                  id: "st_gb_h01_01_02",
                  titleMr: "खानदेश व सातपुड्यातील भिल्ल उठाव: चिल नाईक, हिरीया भिल्ल, कजारसिंग (अंबापाणी लढाई १८५८), भीमा नाईक व कॅप्टन आउट्रमचे भिल्ल कोर (Khandesh Bhil Corps)",
                  titleEn: "Bhil Uprisings in Khandesh: Chil Naik, Kajarsingh, Bhima Naik & Outram's Khandesh Bhil Corps",
                  chips: ["कजारसिंग भिल्ल", "भीमा नाईक", "अंबापाणी लढाई १८५८", "खानदेश भिल्ल कोर"]
                },
                {
                  id: "st_gb_h01_01_03",
                  titleMr: "कोळी आणि ठाकूर समाजाचे उठाव: रामजी भांगडिया, भाऊ खरे, चिमणाजी जाधव व नगर-नाशिक भागातील ब्रिटिशविरोधी लढा",
                  titleEn: "Koli and Thakur Uprisings: Ramji Bhangadia, Bhau Khare & Ahmadnagar-Nashik Revolt",
                  chips: ["रामजी भांगडिया", "कोळी उठाव", "रघु भांगरे"]
                }
              ],
              sources: [
                { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण १: महाराष्ट्रातील आद्य उठाव" },
                { book: "महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण २: शेतकरी व आदिवासी लढे" }
              ]
            }
          ]
        },
        {
          id: "gb_hist_c02",
          code: "H02",
          section: "A",
          slug: "revolt-of-1857-maharashtra-and-india",
          nameMr: "१८५७ चा राष्ट्रीय उठाव आणि महाराष्ट्र",
          nameEn: "The Revolt of 1857 & Role of Maharashtra",
          name: "१८५७ चा उठाव आणि महाराष्ट्र (The Revolt of 1857)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_hist_c02",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_hist_c01",
          nextChapterId: "gb_hist_c03",
          metaDescriptionMr: "१८५७ चा उठाव, कारणे, महाराष्ट्रातील केंद्रे (सातारा, कोल्हापूर, पेठ, जमखंडी, नागपूर), रंगो बापूजी, चीमासाहेब आणि १८५८ चा राणीचा जाहीरनामा.",
          metaDescriptionEn: "In-depth review of 1857 Revolt with Maharashtra focus: Satara conspiracy (Rango Bapuji), Kolhapur 27th Regiment, Peint, Jamkhandi, and Queen's Proclamation.",
          notesJsonPath: "/data/notes/group_b/prelims/history/c02_revolt_1857.json",
          quizTag: "gb_hist_revolt_1857_01",
          tags: ["Modern India", "Maharashtra History", "1857 Revolt", "Rango Bapuji", "Chimasaheb", "Queen Victoria Proclamation", "High-Weightage"],
          searchKeywords: ["1857 revolt", "rango bapuji gupte", "chimasaheb", "kolhapur 27th regiment", "satara revolt", "१८५७ चा उठाव", "रंगो बापूजी गुप्ते", "चीमासाहेब", "राणीचा जाहीरनामा १८५८"],
          topics: [
            {
              id: "top_gb_h02_01",
              nameMr: "१८५७ चा लढा आणि महाराष्ट्रातील पडसाद",
              nameEn: "Revolt of 1857: National Picture & Maharashtra Centers",
              subtopics: [
                {
                  id: "st_gb_h02_01_01",
                  titleMr: "राष्ट्रीय पार्श्वभूमी: कारणे, तात्कालिक निमित्त (एनफिल्ड काडतुसे / मंगल पांडे), कानपूर, झाशी, दिल्ली व बिहार येथील प्रमुख नेतृत्व",
                  titleEn: "National Backdrop: Causes, Trigger (Mangal Pandey), Leadership (Jhansi, Kanpur, Arrah)",
                  chips: ["मंगल पांडे", "राणी लक्ष्मीबाई", "तात्या टोपे", "कुंवर सिंह"]
                },
                {
                  id: "st_gb_h02_01_02",
                  titleMr: "सातारा कट: रंगो बापूजी गुप्ते (छत्रपती प्रतापसिंहांचे वकील - लंडन भेट), गुप्त संघटना व बंड योजना",
                  titleEn: "Satara Conspiracy: Rango Bapuji Gupte (Pratapsingh's envoy to London) & Armed Plot",
                  chips: ["रंगो बापूजी गुप्ते", "सातारा गादी", "छत्रपती प्रतापसिंह", "गुप्ते कट"]
                },
                {
                  id: "st_gb_h02_01_03",
                  titleMr: "कोल्हापूर उठाव: २७ वी स्थानिक पायदळ रेजिमेंटचे बंड, रामजी शिरसाट, चीमासाहेब यांचे नेतृत्व व जेकबची कारवाई",
                  titleEn: "Kolhapur Uprising: 27th Native Infantry Rebellion, Ramji Shirsat, Chimasaheb & Jacob's Crackdown",
                  chips: ["चीमासाहेब कोल्हापूर", "२७ वी रेजिमेंट", "रामजी शिरसाट", "लेफ्टनंट जेकब"]
                },
                {
                  id: "st_gb_h02_01_04",
                  titleMr: "पेठ, सुरगाणा, जमखंडी, मुधोळ (बेरड बंड) आणि मुंबई कट (मंगळ व सय्यद हुसेन यांना तोफेच्या तोंडी देणे)",
                  titleEn: "Peint, Surgana, Jamkhandi, Mudhol Berad Revolt & Bombay Sepoy Plot (Forjett's Actions)",
                  chips: ["पेठचे राजे भगवंतराव", "जमखंडी अप्पासाहेब पटवर्धन", "मुंबई कट", "चार्ल्स फॉर्गेट"]
                },
                {
                  id: "st_gb_h02_01_05",
                  titleMr: "उठावाचे परिणाम: ईस्ट इंडिया कंपनी राजवटीचा अंत, भारत सरकार कायदा १८५८ आणि १ नोव्हेंबर १८५८ चा राणी व्हिक्टोरियाचा जाहीरनामा",
                  titleEn: "Consequences: End of Company Rule, GoI Act 1858 & Queen Victoria's Proclamation (1 Nov 1858)",
                  chips: ["राणीचा जाहीरनामा १८५८", "लॉर्ड कॅनिंग", "भारत मंत्री पद", "सैन्याची पुनर्रचना (पील कमिशन)"]
                }
              ],
              sources: [
                { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "गाठाळ / कठारे", chapterRef: "प्रकरण ३: १८५७ चा राष्ट्रीय उठाव आणि महाराष्ट्र" },
                { book: "बालभारती इतिहास", standard: "इयत्ता ८ वी", chapterRef: "प्रकरण ४: १८५७ चा स्वातंत्र्यलढा" }
              ]
            }
          ]
        },
        {
          id: "gb_hist_c03",
          code: "H03",
          section: "A",
          slug: "british-administration-revenue-and-socio-economic-impact",
          nameMr: "ब्रिटिश प्रशासन, जमीन महसूल पद्धती व महाराष्ट्रावरील आर्थिक परिणाम",
          nameEn: "Colonial Administration, Land Revenue Systems & Economic Impact on Maharashtra",
          name: "ब्रिटिश प्रशासन व आर्थिक परिणाम (Colonial Administration & Economy)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_hist_c03",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_hist_c02",
          nextChapterId: "gb_hist_c04",
          metaDescriptionMr: "माऊंटस्ट्युअर्ट एल्फिन्स्टनचे कार्य, मुंबई इलाख्यातील रयतवारी पद्धत, शेतीचे व्यापारीकरण, दुष्काळ आणि हस्तोद्योगांचा ऱ्हास.",
          metaDescriptionEn: "Detailed review of Mountstuart Elphinstone's administration in Bombay Presidency, Ryotwari revenue system, commercialization of agriculture, and deindustrialization.",
          notesJsonPath: "/data/notes/group_b/prelims/history/c03_colonial_economy.json",
          quizTag: "gb_hist_economy_01",
          tags: ["Modern India", "Maharashtra Economy", "Elphinstone", "Ryotwari System", "Commercialization of Agriculture", "Famines", "High-Weightage"],
          searchKeywords: ["elphinstone", "ryotwari bombay", "pringle survey", "wingate survey", "drain of wealth", "एल्फिन्स्टन", "रयतवारी", "प्रिंगल पाहणी", "विंगेट पद्धत", "शेतीचे व्यापारीकरण"],
          topics: [
            {
              id: "top_gb_h03_01",
              nameMr: "मुंबई इलाख्यातील ब्रिटिश प्रशासकीय व महसूल धोरणे",
              nameEn: "Colonial Administrative & Land Revenue Policies in Bombay Presidency",
              subtopics: [
                {
                  id: "st_gb_h03_01_01",
                  titleMr: "माऊंटस्ट्युअर्ट एल्फिन्स्टन (गव्हर्नर १८१९-१८२७): दक्षिण मराठा प्रांतातील प्रशासन, गावगाडा टिकवण्याचे धोरण व न्यायव्यवस्था",
                  titleEn: "Mountstuart Elphinstone (1819-27): Administrative Reforms, Village Panchayat Preservation & Judicial Code",
                  chips: ["माऊंटस्ट्युअर्ट एल्फिन्स्टन", "मुंबई इलाखा", "एल्फिन्स्टन कोड १८२७", "गावगाडा"]
                },
                {
                  id: "st_gb_h03_01_02",
                  titleMr: "मुंबई इलाख्यातील जमीन महसूल: प्रिंगलची महसूल पाहणी (१८२८) मधील त्रुटी आणि गोल्डस्मिड व विंगेट यांची सुधारित रयतवारी पद्धत (१८३५/१८३६)",
                  titleEn: "Revenue Settlements in Bombay: Pringle's Flawed Survey (1828) & Goldsmid-Wingate Survey (1835-36)",
                  chips: ["रबॉर्ट प्रिंगल", "विंगेट महसूल पद्धत", "रयतवारी मुंबई", "३० वर्षांचा बंदोबस्त"]
                },
                {
                  id: "st_gb_h03_01_03",
                  titleMr: "ग्रामीण कर्जबाजारीपणा, शेतीचे व्यापारीकरण (कापूस उत्पादन), हस्तोद्योगांचा ऱ्हास आणि महाराष्ट्रातील दुष्काळ (१८७६-७७ चा छपन्ना दुष्काळ)",
                  titleEn: "Rural Indebtedness, Commercialization of Agriculture (Cotton Boom), Deindustrialization & Deccan Famines",
                  chips: ["कापूस तेजी", "सावकारी पाश", "हस्तोद्योग ऱ्हास", "१८७६-७७ दुष्काळ"]
                }
              ],
              sources: [
                { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण ४: ब्रिटिश प्रशासन व आर्थिक परिणाम" },
                { book: "Economic History of India", standard: "R.C. Dutt", chapterRef: "Land Settlements in Bombay" }
              ]
            }
          ]
        },


        // =========================================================================
        // विभाग B — सामाजिक-धार्मिक प्रबोधन व महाराष्ट्रातील प्रमुख समाजसुधारक
        // =========================================================================
        {
          id: "gb_hist_c04",
          code: "H04",
          section: "B",
          slug: "early-reformers-jambhekar-lokhitwadi-tarhadkar",
          nameMr: "प्रबोधनाची पहाट: जांभेकर, लोकहितवादी, तर्खडकर व भाऊ दाजी लाड",
          nameEn: "Dawn of Renaissance: Jambhekar, Lokhitwadi, Tarkhadkar & Bhau Daji Lad",
          name: "प्रबोधनाची पहाट (Early Intellectual Pioneers)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_hist_c04",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_hist_c03",
          nextChapterId: "gb_hist_c05",
          metaDescriptionMr: "बाळशास्त्री जांभेकर (दर्पण), भाऊ महाजन (प्रभाकर), लोकहितवादी (शतपत्रे), दाडोबा पांडुरंग (परमहंस सभा) आणि डॉ. भाऊ दाजी लाड यांचे योगदान.",
          metaDescriptionEn: "In-depth review of early Maharashtra intellectuals: Balshastri Jambhekar, Bhau Mahajan, Lokhitwadi (Shatapatre), Paramhansa Sabha, and Dr. Bhau Daji Lad.",
          notesJsonPath: "/data/notes/group_b/prelims/history/c04_early_reformers.json",
          quizTag: "gb_hist_early_reformers_01",
          tags: ["Modern India", "Maharashtra History", "Social Reformers", "Jambhekar", "Lokhitwadi", "Paramhansa Sabha", "High-Weightage"],
          searchKeywords: ["balshastri jambhekar", "darpan 1832", "lokhitwadi", "shatapatre", "prabhakar", "paramhansa sabha", "जांभेकर", "दर्पण", "लोकहितवादी", "शतपत्रे", "परमहंस सभा"],
          topics: [
            {
              id: "top_gb_h04_01",
              nameMr: "आद्य विचारवंत, वृत्तपत्रे व संस्थात्मक प्रबोधन",
              nameEn: "Pioneer Reformers, Periodicals & Institutional Awakening",
              subtopics: [
                {
                  id: "st_gb_h04_01_01",
                  titleMr: "बाळशास्त्री जांभेकर: मराठी वृत्तपत्रसृष्टीचे जनक, 'दर्पण' (६ जानेवारी १८३२), 'दिग्दर्शन' (१८४०), शेषाद्री प्रकरण व ग्रंथसंपदा",
                  titleEn: "Balshastri Jambhekar: Father of Marathi Journalism, Darpan (1832), Digdarshan (1840) & Sheshadri Episode",
                  chips: ["बाळशास्त्री जांभेकर", "दर्पण ६ जानेवारी १८३२", "दिग्दर्शन मासिक", "श्रीपती शेषाद्री प्रकरण"]
                },
                {
                  id: "st_gb_h04_01_02",
                  titleMr: "भाऊ महाजन: 'प्रभाकर', 'धूमकेतू' व 'ज्ञानदर्शन' वृत्तपत्रे; फ्रेंच राज्यक्रांतीचा परिचय व सामाजिक प्रबोधन",
                  titleEn: "Bhau Mahajan: Prabhakar, Dhumketu & Dnyandarshan Periodicals",
                  chips: ["भाऊ महाजन", "प्रभाकर साप्ताहिक", "धूमकेतू", "ज्ञानदर्शन"]
                },
                {
                  id: "st_gb_h04_01_03",
                  titleMr: "गोपाळ हरी देशमुख 'लोकहितवादी': 'प्रभाकर' मधील १०० शतपत्रे (१८४८-५०), लक्ष्मीज्ञान, जातीभेद निवारण व स्वदेशी विचार",
                  titleEn: "Gopal Hari Deshmukh 'Lokhitwadi': 100 Shatapatre in Prabhakar, Economic Critique & Social Reforms",
                  chips: ["लोकहितवादी", "शतपत्रे", "लक्ष्मीज्ञान", "पुनर्विवाह मंडळ"]
                },
                {
                  id: "st_gb_h04_01_04",
                  titleMr: "दादोबा पांडुरंग तर्खडकर: मराठी भाषेचे पाणिनी, मानवधर्म सभा (सुरत १८४४) व परमहंस सभा (मुंबई १८४९ - गुप्त सभा व कार्य)",
                  titleEn: "Dadoba Pandurang Tarkhadkar: Marathi Grammar Panini, Manavdharma Sabha (1844) & Paramhansa Sabha (1849)",
                  chips: ["दादोबा पांडुरंग तर्खडकर", "मानवधर्म सभा १८४४", "परमहंस सभा १८४९", "मराठी व्याकरण"]
                },
                {
                  id: "st_gb_h04_01_05",
                  titleMr: "डॉ. भाऊ दाजी लाड: धन्वंतरी, कुष्ठरोगावर संशोधन (खवथ/चाऊलमुग्रा तेल), रॉयल एशियाटिक सोसायटी व बॉम्बे असोसिएशनमधील सहभाग",
                  titleEn: "Dr. Bhau Daji Lad: Medical Research on Leprosy, Indology, Royal Asiatic Society & Bombay Association",
                  chips: ["डॉ भाऊ दाजी लाड", "कुष्ठरोग उपचार", "एशियाटिक सोसायटी", "प्राच्यविद्या संशोधक"]
                }
              ],
              sources: [
                { book: "महाराष्ट्राचा इतिहास (समाजसुधारक विशेष)", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण ५: आद्य प्रबोधनकार" },
                { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण ४: वृत्तपत्रे व वैचारिक प्रबोधन" }
              ]
            }
          ]
        },
        {
          id: "gb_hist_c05",
          code: "H05",
          section: "B",
          slug: "mahatma-jyotirao-phule-and-satyashodhak-movement",
          nameMr: "महात्मा जोतीराव फुले आणि सत्यशोधक समाज चळवळ",
          nameEn: "Mahatma Jyotirao Phule & Satyashodhak Samaj Movement",
          name: "महात्मा जोतीराव फुले व सत्यशोधक समाज (Mahatma Phule & Satyashodhak Movement)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 5,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_hist_c05",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_hist_c04",
          nextChapterId: "gb_hist_c06",
          metaDescriptionMr: "महात्मा फुले यांचे जीवनकार्य, मुलींची पहिली शाळा (१८४८), सत्यशोधक समाज (१८७३), ग्रंथसंपदा, हंटर कमिशन साक्ष आणि बहुजन प्रबोधन.",
          metaDescriptionEn: "Exhaustive coverage of Mahatma Jyotirao Phule: 1848 girls' school, Satyashodhak Samaj (1873), writings (Gulamgiri, Asud), Hunter Commission testimony, and social emancipation.",
          notesJsonPath: "/data/notes/group_b/prelims/history/c05_mahatma_phule.json",
          quizTag: "gb_hist_phule_01",
          tags: ["Modern India", "Maharashtra History", "Social Reformers", "Mahatma Phule", "Satyashodhak Samaj", "Gulamgiri", "High-Weightage"],
          searchKeywords: ["mahatma jyotirao phule", "satyashodhak samaj 1873", "bhide wada 1848", "gulamgiri", "shetkaryacha asud", "hunter commission 1882", "फुले", "सत्यशोधक समाज", "गुलामगिरी", "शेतकऱ्याचा आसूड", "भिडे वाडा"],
          topics: [
            {
              id: "top_gb_h05_01",
              nameMr: "महात्मा जोतीराव फुले: शैक्षणिक क्रांती, ग्रंथसंपदा व चळवळ",
              nameEn: "Mahatma Jyotirao Phule: Educational Revolution, Literature & Emancipation",
              subtopics: [
                {
                  id: "st_gb_h05_01_01",
                  titleMr: "शैक्षणिक कार्य: भिडे वाडा मुलींची पहिली शाळा (१ जानेवारी १८४८), अस्पृश्यांसाठी शाळा (१८५१/५२) व देशी शाळा मंडळ (Native Female School)",
                  titleEn: "Educational Crusade: Bhide Wada Girls' School (1848), Depressed Classes Schools & Native Female School",
                  chips: ["भिडे वाडा १ जाने १८४८", "पुणे कन्या शाळा", "सदाशिव बिलाल गोवंडे", "लहुजी वस्ताद साळवे"]
                },
                {
                  id: "st_gb_h05_01_02",
                  titleMr: "सामाजिक सुधारणा: बालहत्या प्रतिबंधक गृह (१८६३ - काशीबाईचा मुलगा यशवंत दत्तक), विधवा पुनर्विवाह, तळेगाव नाव्ह्यांचा संप (१८६९), स्वतःचा पाण्याचा हौद खुला करणे (१८६८)",
                  titleEn: "Social Interventions: Infanticide Prohibition Home (1863), Barbers' Strike (1869) & Opening Water Cistern (1868)",
                  chips: ["बालहत्या प्रतिबंधक गृह १८६३", "नाव्ह्यांचा संप", "पाण्याचा हौद १८६८", "यशवंत दत्तकपुत्र"]
                },
                {
                  id: "st_gb_h05_01_03",
                  titleMr: "सत्यशोधक समाज (२४ सप्टेंबर १८७३): ध्येय, 'सर्वसाक्षी जगत्पती त्याला नकोच मध्यस्थी', सत्यशोधक विवाह पद्धत, 'दीनबंधू' वृत्तपत्र (कृष्णराव भालेकर)",
                  titleEn: "Satyashodhak Samaj (24 Sept 1873): Motto, Rejection of Middlemen, Simple Weddings & Deenbandhu Paper",
                  chips: ["सत्यशोधक समाज १८७३", "सर्वसाक्षी जगत्पती", "दीनबंधू", "कृष्णराव भालेकर", "नारायण मेघाजी लोखंडे"]
                },
                {
                  id: "st_gb_h05_01_04",
                  titleMr: "ग्रंथसंपदा व साहित्य: तृतीय रत्न (नाटक १८५५), ब्राह्मणांचे कसब (१८६९), गुलामगिरी (१८७३ - अमेरिकेतील कृष्णवर्णीयांना समर्पित), शेतकऱ्याचा आसूड (१८८३), इशारा, सार्वजनिक सत्यधर्म (१८९१)",
                  titleEn: "Literary Works: Tritya Ratna (1855), Gulamgiri (1873), Shetkaryacha Asud (1883) & Sarvajanik Satyadharma (1891)",
                  chips: ["तृतीय रत्न", "गुलामगिरी १८७३", "शेतकऱ्याचा आसूड १८८३", "सार्वजनिक सत्यधर्म"]
                },
                {
                  id: "st_gb_h05_01_05",
                  titleMr: "हंटर शिक्षण आयोग साक्ष (१९ ऑक्टोबर १८८२), पुणे नगरपालिका सदस्यत्व (१८७६-१८८३) आणि मुंबईत जनतेने दिलेली 'महात्मा' पदवी (१८८८)",
                  titleEn: "Hunter Commission Deposition (1882), Pune Municipal Council Service & 'Mahatma' Title (1888)",
                  chips: ["हंटर कमिशन साक्ष १८८२", "पुणे म्युनिसिपालिटी", "महात्मा पदवी १८८८", "रावबहादूर वडेदार"]
                }
              ],
              sources: [
                { book: "महात्मा जोतीराव फुले समग्र वाङ्मय", standard: "महाराष्ट्र शासन प्रकाशन", chapterRef: "संपूर्ण ग्रंथसंग्रह" },
                { book: "महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण ६: महात्मा फुले व सत्यशोधक समाज" }
              ]
            }
          ]
        },
        {
          id: "gb_hist_c06",
          code: "H06",
          section: "B",
          slug: "women-reformers-savitribai-ramabai-and-karve",
          nameMr: "स्त्री प्रबोधन पर्व: सावित्रीबाई फुले, पंडिता रमाबाई व महर्षी कर्वे",
          nameEn: "Women's Emancipation: Savitribai Phule, Pandita Ramabai & Maharshi Karve",
          name: "स्त्री प्रबोधन पर्व (Women Reformers & Maharshi Karve)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_hist_c06",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_hist_c05",
          nextChapterId: "gb_hist_c07",
          metaDescriptionMr: "क्रांतीज्योती सावित्रीबाई फुले, फातिमा शेख, पंडिता रमाबाई (शारदा सदन, मुक्ती सदन), आनंदीबाई जोशी, ताराबाई शिंदे आणि महर्षी धोंडो केशव कर्वे.",
          metaDescriptionEn: "In-depth review of women pioneers: Savitribai Phule, Fatima Sheikh, Pandita Ramabai (Sharada Sadan, Mukti Sadan), Tarabai Shinde, and Maharshi D.K. Karve.",
          notesJsonPath: "/data/notes/group_b/prelims/history/c06_women_reformers.json",
          quizTag: "gb_hist_women_reformers_01",
          tags: ["Modern India", "Maharashtra History", "Savitribai Phule", "Pandita Ramabai", "Maharshi Karve", "Tarabai Shinde", "High-Weightage"],
          searchKeywords: ["savitribai phule", "pandita ramabai", "sharada sadan", "maharshi karve", "tarabai shinde", "stri purush tulana", "सावित्रीबाई फुले", "पंडिता रमाबाई", "शारदा सदन", "महर्षी कर्वे", "स्त्री-पुरुष तुलना"],
          topics: [
            {
              id: "top_gb_h06_01",
              nameMr: "महाराष्ट्रातील स्त्री शिक्षणाच्या प्रणेत्या व संस्थात्मक कार्य",
              nameEn: "Pioneers of Women's Education & Social Rehabilitation",
              subtopics: [
                {
                  id: "st_gb_h06_01_01",
                  titleMr: "क्रांतीज्योती सावित्रीबाई फुले: पहिल्या भारतीय महिला शिक्षिका व मुख्याध्यापिका, काव्यसंग्रह ('काव्यफुले' १८५४, 'बावनकशी सुबोध रत्नाकर' १८९२), सत्यशोधक समाजाचे नेतृत्व (१८९० नंतर) व प्लेग सेवेत बलिदान (१८९७)",
                  titleEn: "Savitribai Phule: First Woman Teacher, Poetry (Kavya Phule, Bavan Kashi), Leadership of Satyashodhak Samaj & Plague Service (1897)",
                  chips: ["सावित्रीबाई फुले", "काव्यफुले १८५४", "बावनकशी सुबोध रत्नाकर", "फातिमा शेख", "प्लेग सेवा १८९७"]
                },
                {
                  id: "st_gb_h06_01_02",
                  titleMr: "ताराबाई शिंदे: 'स्त्री-पुरुष तुलना' (१८८२) ग्रंथ - पुरुषसत्ताक व्यवस्थेवर भारतातील पहिले सडेतोड वैचारिक पुस्तक",
                  titleEn: "Tarabai Shinde: 'Stri Purush Tulana' (1882) - India's First Feminist Critique",
                  chips: ["ताराबाई शिंदे", "स्त्री-पुरुष तुलना १८८२", "बुलढाणा", "पुरुषसत्ताक व्यवस्थेवर टीका"]
                },
                {
                  id: "st_gb_h06_01_03",
                  titleMr: "पंडिता रमाबाई: आर्य महिला समाज (पुणे १८८२), 'The High Caste Hindu Woman' (१८८७), शारदा सदन (मुंबई १८८९/पुणे), मुक्ती सदन (केडगाव १८९८), कृपा सदन व प्रीती सदन",
                  titleEn: "Pandita Ramabai: Arya Mahila Samaj (1882), Sharada Sadan (1889), Mukti Sadan (Kedgaon 1898) & Writings",
                  chips: ["पंडिता रमाबाई", "आर्य महिला समाज १८८२", "शारदा सदन १८८९", "मुक्ती सदन केडगाव", "हंटर आयोग साक्ष"]
                },
                {
                  id: "st_gb_h06_01_04",
                  titleMr: "डॉ. आनंदीबाई जोशी (पहिल्या महिला डॉक्टर - १८८६ अमेरिका पदवी) व रमाबाई रानडे (सेवा सदन १९०९ संस्थापक)",
                  titleEn: "Dr. Anandibai Joshee (First Woman Physician 1886) & Ramabai Ranade (Seva Sadan 1909)",
                  chips: ["डॉ आनंदीबाई जोशी", "रमाबाई रानडे", "सेवा सदन १९०९", "महिला प्रबोधन"]
                },
                {
                  id: "st_gb_h06_01_05",
                  titleMr: "महर्षी धोंडो केशव कर्वे: विधवा पुनर्विवाह (गोदुबाई/आनंदीबाई), अनाथ बालिकाश्रम (हिंगणे १८९९), निष्काम कर्मठ मठ (१९१०), भारतातील पहिले महिला विद्यापीठ (SNDT १९१६) व भारतरत्न (१९५८)",
                  titleEn: "Maharshi D.K. Karve: Hingne Anath Balikashram (1899), Nishkam Karma Math, SNDT Women's University (1916) & Bharat Ratna (1958)",
                  chips: ["महर्षी धोंडो केशव कर्वे", "हिंगणे आश्रम १८९९", "SNDT महिला विद्यापीठ १९१६", "भारतरत्न १९५८"]
                }
              ],
              sources: [
                { book: "महाराष्ट्राचा इतिहास (समाजसुधारक विशेष)", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण ७ व ८: स्त्री प्रबोधन व महर्षी कर्वे" },
                { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण ५: स्त्री मुक्ती चळवळ" }
              ]
            }
          ]
        },
        {
          id: "gb_hist_c07",
          code: "H07",
          section: "B",
          slug: "thinkers-ranade-agarkar-shinde-bhandarkar",
          nameMr: "वैचारिक प्रबोधन: न्या. रानडे, आगरकर, महर्षी वि. रा. शिंदे व भांडारकर",
          nameEn: "Intellectual Awakening: Justice Ranade, Agarkar, V.R. Shinde & Bhandarkar",
          name: "वैचारिक प्रबोधन (Rationalist Thinkers & Agarkar)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_hist_c07",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_hist_c06",
          nextChapterId: "gb_hist_c08",
          metaDescriptionMr: "न्या. महादेव गोविंद रानडे, प्रार्थना समाज, गोपाळ गणेश आगरकर (सुधारक), महर्षी विठ्ठल रामजी शिंदे (डिप्रेस्ड क्लासेस मिशन) आणि डॉ. रा. गो. भांडारकर.",
          metaDescriptionEn: "In-depth review of rationalists: Justice Ranade, Prarthana Samaj, Gopal Ganesh Agarkar (Sudharak), Maharshi V.R. Shinde (Depressed Classes Mission), and R.G. Bhandarkar.",
          notesJsonPath: "/data/notes/group_b/prelims/history/c07_intellectual_thinkers.json",
          quizTag: "gb_hist_thinkers_01",
          tags: ["Modern India", "Maharashtra History", "Justice Ranade", "Agarkar", "V.R. Shinde", "Sudharak", "Depressed Classes Mission", "High-Weightage"],
          searchKeywords: ["justice ranade", "gopal ganesh agarkar", "sudharak 1888", "vitthal ramji shinde", "depressed classes mission 1906", "रानडे", "आगरकर", "सुधारक", "विठ्ठल रामजी शिंदे", "प्रार्थना समाज"],
          topics: [
            {
              id: "top_gb_h07_01",
              nameMr: "बुद्धिप्रामाण्यवाद, सामाजिक सुधारणा विरुद्ध राजकीय सुधारणा वाद",
              nameEn: "Rationalism, Social Reform vs Political Independence Debate",
              subtopics: [
                {
                  id: "st_gb_h07_01_01",
                  titleMr: "न्या. महादेव गोविंद रानडे: महाराष्ट्रातील समाजसुधारणेचे प्रेषित, प्रार्थना समाज (१८६७), पूना सार्वजनिक सभा (१८७०), सामाजिक परिषद (National Social Conference १८८७) व औद्योगिक परिषद",
                  titleEn: "Justice M.G. Ranade: Prarthana Samaj, Poona Sarvajanik Sabha, Social Conference (1887) & Economic Ideas",
                  chips: ["न्या. रानडे", "प्रार्थना समाज १८६७", "सामाजिक परिषद १८८७", "मराठी सत्तेचा उत्कर्ष (Rise of Maratha Power)"]
                },
                {
                  id: "st_gb_h07_01_02",
                  titleMr: "गोपाळ गणेश आगरकर: जहाल समाजसुधारक, बुद्धिप्रामाण्यवाद व व्यक्तिस्वातंत्र्य, केसरीचे पहिले संपादक (१८८१), 'सुधारक' साप्ताहिक (१८८८), संमती वयाचा कायदा (Age of Consent Act १८९१) समर्थन, टिळक-आगरकर वाद (आधी सामाजिक की आधी राजकीय सुधारणा)",
                  titleEn: "Gopal Ganesh Agarkar: Rationalism, Kesari First Editor, 'Sudharak' (1888), Age of Consent Bill & Tilak-Agarkar Debate",
                  chips: ["गोपाळ गणेश आगरकर", "केसरी संपादक १८८१", "सुधारक १८८८", "आधी सामाजिक की आधी राजकीय", "संमती वय विधेयक १८९१"]
                },
                {
                  id: "st_gb_h07_01_03",
                  titleMr: "महर्षी विठ्ठल रामजी शिंदे: डिप्रेस्ड क्लासेस मिशन (१८ ऑक्टोबर १९०६), अस्पृश्यता निवारण परिषद (मुंबई १९१८), बहुजन समाज पक्ष व 'भारतीय अस्पृश्यतेचा प्रश्न' ग्रंथ",
                  titleEn: "Maharshi Vitthal Ramji Shinde: Depressed Classes Mission (1906), All-India Untouchability Conference & Key Research",
                  chips: ["विठ्ठल रामजी शिंदे", "डिप्रेस्ड क्लासेस मिशन १९०६", "भारतीय अस्पृश्यतेचा प्रश्न", "अस्पृश्यता निवारण परिषद"]
                },
                {
                  id: "st_gb_h07_01_04",
                  titleMr: "डॉ. रामकृष्ण गोपाळ भांडारकर: थोर प्राच्यविद्या संशोधक, प्रार्थना समाजाचे आधारस्तंभ व डेक्कन कॉलेजमधील योगदान",
                  titleEn: "Dr. R.G. Bhandarkar: Indological Research, Prarthana Samaj Pillar & Educational Contributions",
                  chips: ["डॉ रा गो भांडारकर", "प्राच्यविद्या संशोधन", "भांडारकर संस्था", "प्रार्थना समाज"]
                }
              ],
              sources: [
                { book: "महाराष्ट्राचा इतिहास (समाजसुधारक विशेष)", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण ९ व १०: रानडे, आगरकर आणि शिंदे" },
                { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण ६: महाराष्ट्रातील वैचारिक वादळ" }
              ]
            }
          ]
        },
        {
          id: "gb_hist_c08",
          code: "H08",
          section: "B",
          slug: "rajarshi-chhatrapati-shahu-maharaj-kolhapur",
          nameMr: "राजर्षी छत्रपती शाहू महाराज आणि बहुजन चळवळ",
          nameEn: "Rajarshi Chhatrapati Shahu Maharaj & Bahujan Movement",
          name: "राजर्षी शाहू महाराज व बहुजन चळवळ (Rajarshi Shahu Maharaj)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 5,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_hist_c08",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_hist_c07",
          nextChapterId: "gb_hist_c09",
          metaDescriptionMr: "राजर्षी शाहू महाराज यांचे जीवन, ५०% आरक्षण जाहीरनामा (१९०२), प्राथमिक शिक्षण सक्ती कायदा (१९१७), वेदोक्त प्रकरण, आंतरजातीय विवाह आणि अस्पृश्यतानिवारण.",
          metaDescriptionEn: "Comprehensive review of Rajarshi Chhatrapati Shahu Maharaj: 50% reservation declaration (1902), free compulsory education (1917), Vedokta controversy, and Mangaon Parishad.",
          notesJsonPath: "/data/notes/group_b/prelims/history/c08_shahu_maharaj.json",
          quizTag: "gb_hist_shahu_01",
          tags: ["Modern India", "Maharashtra History", "Shahu Maharaj", "Reservation 1902", "Vedokta Episode", "Mangaon Parishad", "High-Weightage"],
          searchKeywords: ["shahu maharaj kolhapur", "reservation 1902", "vedokta episode", "mangaon parishad 1920", "hostel movement", "शाहू महाराज", "आरक्षण जाहीरनामा १९०२", "वेदोक्त प्रकरण", "माणगाव परिषद १९२०", "वसतिगृह चळवळ"],
          topics: [
            {
              id: "top_gb_h08_01",
              nameMr: "राजर्षी छत्रपती शाहू महाराज: समता, आरक्षण व संस्थानात्मक सुधारणा",
              nameEn: "Rajarshi Shahu Maharaj: Social Justice, Reservation & Institutional Reforms",
              subtopics: [
                {
                  id: "st_gb_h08_01_01",
                  titleMr: "राज्यारोहण व पार्श्वभूमी: जन्म (२६ जून १८७४ - कागलचे घाटगे घराणे), दत्तक विधान (१८८४), राज्यारोहण (२ मे १८९४) व कोल्हापूरचे प्रशासन",
                  titleEn: "Early Life & Coronation: Birth (26 June 1874), Adoption, Coronation (1894) & Administrative Vision",
                  chips: ["यशवंतराव जयसिंगराव घाटगे", "आनंदीबाई", "२६ जून सामाजिक न्याय दिन", "कोल्हापूर राज्य"]
                },
                {
                  id: "st_gb_h08_01_02",
                  titleMr: "ऐतिहासिक आरक्षण जाहीरनामा (२६ जुलै १९०२): कोल्हापूर संस्थानात मागासवर्गीय व बहुजन समाजासाठी ५०% नोकऱ्यांमध्ये आरक्षणाचा अधिकृत वटहुकूम",
                  titleEn: "Historic Reservation Decree (26 July 1902): 50% Quota in State Administration for Backward Classes",
                  chips: ["२६ जुलै १९०२ आरक्षण", "५० टक्के आरक्षण", "आरक्षणाचे जनक", "कोल्हापूर गॅझेट"]
                },
                {
                  id: "st_gb_h08_01_03",
                  titleMr: "वेदोक्त प्रकरण (१८९९) व क्षात्रजगद्गुरू पद: नारायण भट सेवेकरी, पुरोहितशाहीला आव्हान, सत्यशोधक समाजाला राजाश्रय (१९११) व क्षात्रजगद्गुरू पीठाची स्थापना (सदाशिव बेनाडीकर)",
                  titleEn: "Vedokta Controversy (1899), Patronage to Satyashodhak Samaj (1911) & Kshatra Jagadguru Seat",
                  chips: ["वेदोक्त प्रकरण १८९९", "नारायण भट", "सत्यशोधक समाज राजाश्रय", "क्षात्रजगद्गुरू पीठ"]
                },
                {
                  id: "st_gb_h08_01_04",
                  titleMr: "शैक्षणिक व सामाजिक कायदे: मोफत व सक्तीच्या प्राथमिक शिक्षणाचा कायदा (२५ जुलै १९१७), विविध जातींची विद्यार्थी वसतिगृहे (मराठा, जैन, लिंगायत, व्हिक्टोरिया, महार), आंतरजातीय व आंतरधर्मीय विवाह कायदा (१९१९), देवदासी प्रथा व जोगती प्रतिबंध कायदा",
                  titleEn: "Legislative Milestones: Free & Compulsory Primary Education Act (1917), Hostel Movement, Inter-caste Marriage Act (1919)",
                  chips: ["सक्तीचे शिक्षण १९१७", "वसतिगृहांचे जनक", "आंतरजातीय विवाह कायदा १९१९", "देवदासी प्रथा बंदी"]
                },
                {
                  id: "st_gb_h08_01_05",
                  titleMr: "डॉ. आंबेडकरांना सहकार्य व अस्पृश्यतानिवारण: माणगाव परिषद (२१-२२ मार्च १९२०), मूकनायक वृत्तपत्राला आर्थिक मदत, गुन्हेगार जमाती कायदा रद्द (१९१८ - हाजिरी पद्धत बंद), जयसिंगपूर येथे शाहू छत्रपती स्पिनिंग मिल",
                  titleEn: "Alliance with Dr. Ambedkar: Mangaon Conference (1920), Support to Mooknayak, Repeal of Criminal Tribes Act (1918)",
                  chips: ["माणगाव परिषद १९२०", "मूकनायक सहाय्य", "हाजिरी पद्धत बंदी", "शाहू मिल"]
                }
              ],
              sources: [
                { book: "राजर्षी शाहू छत्रपती जीवन व कार्य", standard: "धनंजय कीर", chapterRef: "संपूर्ण चरित्र" },
                { book: "महाराष्ट्राचा इतिहास (समाजसुधारक)", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण ११: राजर्षी शाहू महाराज" }
              ]
            }
          ]
        },
        {
          id: "gb_hist_c09",
          code: "H09",
          section: "B",
          slug: "dr-b-r-ambedkar-and-dalit-liberation-movement",
          nameMr: "डॉ. बाबासाहेब आंबेडकर आणि दलित मुक्ती चळवळ",
          nameEn: "Dr. B.R. Ambedkar & The Dalit Liberation Movement",
          name: "डॉ. बाबासाहेब आंबेडकर व दलित मुक्ती लढा (Dr. B.R. Ambedkar)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 6,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_hist_c09",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_hist_c08",
          nextChapterId: "gb_hist_c10",
          metaDescriptionMr: "डॉ. बाबासाहेब आंबेडकर: बहिष्कृत हितकारिणी सभा (१९२४), महाड सत्याग्रह (१९२७), काळाराम मंदिर सत्याग्रह, गोलमेज परिषदा, पुणे करार, पक्ष व वृत्तपत्रे.",
          metaDescriptionEn: "In-depth review of Dr. B.R. Ambedkar: Bahishkrit Hitakarini Sabha (1924), Mahad Satyagraha (1927), Kalaram Temple, Poona Pact (1932), Independent Labour Party, and Conversion to Buddhism.",
          notesJsonPath: "/data/notes/group_b/prelims/history/c09_dr_ambedkar.json",
          quizTag: "gb_hist_ambedkar_01",
          tags: ["Modern India", "Maharashtra History", "Dr Ambedkar", "Mahad Satyagraha", "Poona Pact 1932", "Samata Sainik Dal", "High-Weightage"],
          searchKeywords: ["dr b r ambedkar", "mahad satyagraha 1927", "chavdar tale", "kalaram satyagraha", "poona pact 1932", "bahishkrit bharat", "डॉ बाबासाहेब आंबेडकर", "महाड सत्याग्रह", "चवदार तळे", "काळाराम मंदिर", "पुणे करार"],
          topics: [
            {
              id: "top_gb_h09_01",
              nameMr: "डॉ. बाबासाहेब आंबेडकर: सामाजिक लढे, राजकीय पक्ष व धम्मक्रांती",
              nameEn: "Dr. B.R. Ambedkar: Rights Movements, Political Parties & Buddhist Conversion",
              subtopics: [
                {
                  id: "st_gb_h09_01_01",
                  titleMr: "संघटना व वृत्तपत्रे: मूकनायक (३१ जानेवारी १९२०), बहिष्कृत भारत (१९२७), जनता (१९३०), प्रबुद्ध भारत (१९५६); बहिष्कृत हितकारिणी सभा (२० जुलै १९२४ - 'शिका, संघटित व्हा आणि संघर्ष करा')",
                  titleEn: "Periodicals & Organizations: Mooknayak (1920), Bahishkrit Bharat (1927), Bahishkrit Hitakarini Sabha (1924)",
                  chips: ["मूकनायक ३१ जाने १९२०", "बहिष्कृत हितकारिणी सभा १९२४", "शिका संघटित व्हा संघर्ष करा", "बहिष्कृत भारत"]
                },
                {
                  id: "st_gb_h09_01_02",
                  titleMr: "महाड चवदार तळे सत्याग्रह (२० मार्च १९२७ - सामाजिक सबलीकरण दिन), समता सैनिक दल स्थापना (१९२७), महाड परिषद व मनुस्मृती दहन (२५ डिसेंबर १९२७)",
                  titleEn: "Mahad Satyagraha (20 March 1927), Samata Sainik Dal & Burning of Manusmriti (25 Dec 1927)",
                  chips: ["महाड सत्याग्रह २० मार्च १९२७", "चवदार तळे", "मनुस्मृती दहन २५ डिसें १९२७", "समता सैनिक दल"]
                },
                {
                  id: "st_gb_h09_01_03",
                  titleMr: "मंदिर प्रवेश लढा: काळाराम मंदिर सत्याग्रह, नाशिक (२ मार्च १९३० ते १९३५ - दादासाहेब गायकवाड, अमृतराव रणखांबे) आणि पर्वती मंदिर सत्याग्रह",
                  titleEn: "Temple Entry Movements: Kalaram Temple Satyagraha (Nashik 1930-35, Bhaurao Gaikwad) & Parvati Temple",
                  chips: ["काळाराम मंदिर सत्याग्रह १९३०", "कर्मवीर दादासाहेब गायकवाड", "नाशिक सत्याग्रह"]
                },
                {
                  id: "st_gb_h09_01_04",
                  titleMr: "गोलमेज परिषदा (१९३०-३२) मधील भूमिका, जातीय निवाडा (कम्युनल ॲवॉर्ड) आणि ऐतिहासिक पुणे करार (२४ सप्टेंबर १९३२ - येरवडा कारागृह, संयुक्त मतदारसंघ व १४८ राखीव जागा)",
                  titleEn: "Round Table Conferences, Communal Award & Poona Pact (24 Sept 1932 at Yerwada Jail)",
                  chips: ["गोलमेज परिषदा", "पुणे करार २४ सप्टेंबर १९३२", "येरवडा जेल", "१४८ राखीव जागा"]
                },
                {
                  id: "st_gb_h09_01_05",
                  titleMr: "राजकीय पक्ष व संस्था: स्वतंत्र मजूर पक्ष (ILP १९३६), शेड्युल्ड कास्ट्स फेडरेशन (SCF १९४२), पीपल्स एज्युकेशन सोसायटी (सिद्धार्थ कॉलेज १९४६ व मिलिंद कॉलेज औरंगाबाद १९५०)",
                  titleEn: "Political Parties & Institutions: Independent Labour Party (1936), SCF (1942) & People's Education Society",
                  chips: ["स्वतंत्र मजूर पक्ष १९३६", "शेड्युल्ड कास्ट्स फेडरेशन १९४२", "सिद्धार्थ कॉलेज मुंबई", "मिलिंद कॉलेज"]
                },
                {
                  id: "st_gb_h09_01_06",
                  titleMr: "संविधान मसुदा समिती अध्यक्ष (Drafting Committee), हिंदू कोड बिल, स्वतंत्र भारताचे पहिले कायदा मंत्री आणि नागपूर धम्मदीक्षा (१४ ऑक्टोबर १९५६)",
                  titleEn: "Drafting Committee Chairman, Hindu Code Bill, Law Minister & Historic Deeksha at Nagpur (14 Oct 1956)",
                  chips: ["मसुदा समिती अध्यक्ष", "हिंदू कोड बिल", "पहिले कायदा मंत्री", "दीक्षाभूमी नागपूर १४ ऑक्टो १९५६"]
                }
              ],
              sources: [
                { book: "डॉ. बाबासाहेब आंबेडकर चरित्र", standard: "धनंजय कीर / चांगदेव खैरमोडे", chapterRef: "संपूर्ण संदर्भ" },
                { book: "महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण १२: डॉ. आंबेडकर व दलित चळवळ" }
              ]
            }
          ]
        },
        {
          id: "gb_hist_c10",
          code: "H10",
          section: "B",
          slug: "other-reformers-gadge-baba-tukdoji-bhaurao-patil",
          nameMr: "इतर समाजसुधारक: गाडगे बाबा, तुकडोजी महाराज, कर्मवीर भाऊराव पाटील व पंजाबराव देशमुख",
          nameEn: "Grassroots Reformers: Sant Gadge Baba, Tukdoji Maharaj, Bhaurao Patil & Panjabrao Deshmukh",
          name: "तळागाळातील सुधारक (Grassroots Reformers)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_hist_c10",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_hist_c09",
          nextChapterId: "gb_hist_c11",
          metaDescriptionMr: "संत गाडगे बाबा (स्वच्छता व समाजप्रबोधन), राष्ट्रसंत तुकडोजी महाराज (ग्रामगीता), कर्मवीर भाऊराव पाटील (रयत शिक्षण संस्था) आणि डॉ. पंजाबराव देशमुख (श्री शिवाजी शिक्षण संस्था).",
          metaDescriptionEn: "In-depth review of Sant Gadge Baba, Rashtrasant Tukdoji Maharaj (Gramgeeta), Karmaveer Bhaurao Patil (Rayat Shikshan Sanstha), and Dr. Panjabrao Deshmukh.",
          notesJsonPath: "/data/notes/group_b/prelims/history/c10_grassroots_reformers.json",
          quizTag: "gb_hist_grassroots_01",
          tags: ["Modern India", "Maharashtra History", "Sant Gadge Baba", "Tukdoji Maharaj", "Karmaveer Bhaurao Patil", "Panjabrao Deshmukh", "High-Weightage"],
          searchKeywords: ["sant gadge baba", "tukdoji maharaj", "gramgeeta", "karmaveer bhaurao patil", "rayat shikshan sanstha", "panjabrao deshmukh", "गाडगे बाबा", "तुकडोजी महाराज", "ग्रामगीता", "भाऊराव पाटील", "रयत शिक्षण संस्था", "पंजाबराव देशमुख"],
          topics: [
            {
              id: "top_gb_h10_01",
              nameMr: "तळागाळातील समाजसुधारक व ग्रामीण शैक्षणिक चळवळ",
              nameEn: "Grassroots Saints & Rural Educational Mass Movements",
              subtopics: [
                {
                  id: "st_gb_h10_01_01",
                  titleMr: "संत गाडगे बाबा (डेबुजी झिंगराजी जानोरकर): कीर्तनातून समाजप्रबोधन, स्वच्छता मोहीम, अंधश्रद्धा व अनिष्ट रूढी निर्मूलन, धर्मशाळा व रुग्णालयांची स्थापना",
                  titleEn: "Sant Gadge Baba: Sanitation Crusades, Superstition Eradication through Kirtans & Hostels for the Poor",
                  chips: ["डेबुजी जानोरकर", "खराटा व स्वच्छता", "गोरगरीबांची सेवा", "अमरावती विद्यापीठ"]
                },
                {
                  id: "st_gb_h10_01_02",
                  titleMr: "राष्ट्रसंत तुकडोजी महाराज (माणिक बंडोजी इंगळे ब्रह्मभट्ट): खंजिरी भजने, 'ग्रामगीता' रचना, मोजरी गुरुकुंज आश्रम व १९४२ च्या चले जाव आंदोलनातील सहभाग (आष्टी-चिमूर लढा)",
                  titleEn: "Rashtrasant Tukdoji Maharaj: Gramgeeta, Mozari Gurukunj Ashram, Khanjiri Bhajans & 1942 Quit India Role",
                  chips: ["तुकडोजी महाराज", "ग्रामगीता", "मोजरी आश्रम", "आष्टी-चिमूर लढा १९४२"]
                },
                {
                  id: "st_gb_h10_01_03",
                  titleMr: "कर्मवीर भाऊराव पाटील: सत्यशोधक विचारांचा वारसा, रयत शिक्षण संस्था (४ ऑक्टोबर १९१९ - काले, सातारा), 'कमवा व शिका' (Earn and Learn) योजना, छत्रपती शाहू बोर्डिंग (१९२४)",
                  titleEn: "Karmaveer Bhaurao Patil: Rayat Shikshan Sanstha (1919 at Kale), 'Earn and Learn' Scheme & Shahu Boarding",
                  chips: ["कर्मवीर भाऊराव पाटील", "रयत शिक्षण संस्था १९१९", "कमवा व शिका", "वडाचे झाड चिन्ह"]
                },
                {
                  id: "st_gb_h10_01_04",
                  titleMr: "डॉ. पंजाबराव देशमुख: स्वतंत्र भारताचे पहिले कृषिमंत्री, श्री शिवाजी शिक्षण संस्था (अमरावती १९३२), भारत कृषक समाज (१९५५) व कृषी विद्यापीठांची संकल्पना",
                  titleEn: "Dr. Panjabrao Deshmukh: First Agriculture Minister, Shri Shivaji Shikshan Sanstha (1932) & Bharat Krishak Samaj",
                  chips: ["डॉ पंजाबराव देशमुख", "श्री शिवाजी शिक्षण संस्था अमरावती", "भारत कृषक समाज", "पहिले कृषी मंत्री"]
                }
              ],
              sources: [
                { book: "महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण १३ व १४: महाराष्ट्रातील इतर समाजसुधारक" },
                { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण ७: ग्रामीण शिक्षण व समाजप्रबोधन" }
              ]
            }
          ]
        },


        // =========================================================================
        // विभाग C — राष्ट्रवादाचा उदय, काँग्रेस व राष्ट्रीय स्वातंत्र्यलढा
        // =========================================================================
        {
          id: "gb_hist_c11",
          code: "H11",
          section: "C",
          slug: "pre-congress-associations-and-inc-foundation",
          nameMr: "काँग्रेसपूर्व राजकीय संघटना व भारतीय राष्ट्रीय काँग्रेस स्थापना",
          nameEn: "Pre-Congress Political Bodies & Foundation of INC",
          name: "काँग्रेसपूर्व संघटना व काँग्रेस स्थापना (Pre-Congress & INC 1885)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_hist_c11",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_hist_c10",
          nextChapterId: "gb_hist_c12",
          metaDescriptionMr: "बॉम्बे असोसिएशन, पूना सार्वजनिक सभा, बॉम्बे प्रेसिडेन्सी असोसिएशन आणि २८ डिसेंबर १८८५ ची मुंबईतील काँग्रेस स्थापना.",
          metaDescriptionEn: "In-depth review of pre-Congress organizations in Maharashtra: Bombay Association, Poona Sarvajanik Sabha, Bombay Presidency Association, and INC 1885 Bombay session.",
          notesJsonPath: "/data/notes/group_b/prelims/history/c11_congress_foundation.json",
          quizTag: "gb_hist_congress_01",
          tags: ["Modern India", "Maharashtra History", "Pre-Congress Associations", "Poona Sarvajanik Sabha", "INC 1885", "Bombay Presidency Association", "High-Weightage"],
          searchKeywords: ["bombay association 1852", "nana shankarsheth", "poona sarvajanik sabha 1870", "inc foundation 1885", "gokuldas tejpal", "w c bonnerjee", "बॉम्बे असोसिएशन १८५२", "पूना सार्वजनिक सभा १८७०", "काँग्रेस स्थापना १८८५", "व्योमेशचंद्र बॅनर्जी"],
          topics: [
            {
              id: "top_gb_h11_01",
              nameMr: "महाराष्ट्रातील राजकीय जागृती, संघटना व काँग्रेस निर्मिती",
              nameEn: "Political Awakening, Associations in Maharashtra & INC Inception",
              subtopics: [
                {
                  id: "st_gb_h11_01_01",
                  titleMr: "बॉम्बे असोसिएशन (२६ ऑगस्ट १८५२): महाराष्ट्रातील पहिली राजकीय संघटना, जगन्नाथ (नाना) शंकरशेट, दादाभाई नौरोजी, डॉ. भाऊ दाजी लाड; प्रशासकीय सुधारणांची मागणी",
                  titleEn: "Bombay Association (1852): First Political Body in Maharashtra, Nana Shankarsheth & Dadabhai Naoroji",
                  chips: ["बॉम्बे असोसिएशन १८५२", "नाना शंकरशेट", "पहिली राजकीय सभा"]
                },
                {
                  id: "st_gb_h11_01_02",
                  titleMr: "पूना सार्वजनिक सभा (२ एप्रिल १८७०): संस्थापक गणेश वासुदेव (काका) जोशी, न्या. म. गो. रानडे; दुष्काळ निवारण कार्य, लँड रेव्हेन्यू मोहीम व स्वदेशी प्रसार",
                  titleEn: "Poona Sarvajanik Sabha (1870): G.V. Joshi (Sarvajanik Kaka), Justice Ranade & Famine Relief Work",
                  chips: ["पूना सार्वजनिक सभा १८७०", "सार्वजनिक काका", "रानडे", "दुष्काळ पाहणी १८७६"]
                },
                {
                  id: "st_gb_h11_01_03",
                  titleMr: "बॉम्बे प्रेसिडेन्सी असोसिएशन (३१ जानेवारी १८८५): फिरोजशाह मेहता, के. टी. तेलंग आणि बद्रुद्दीन तय्यबजी (मुंबईचे तीन त्रिमूर्ती) यांच्याद्वारे स्थापना",
                  titleEn: "Bombay Presidency Association (1885): The Trimurti of Bombay (Pherozeshah Mehta, K.T. Telang, Badruddin Tyabji)",
                  chips: ["बॉम्बे प्रेसिडेन्सी असोसिएशन १८८५", "मुंबईचे त्रिमूर्ती", "फिरोजशाह मेहता", "बद्रुद्दीन तय्यबजी"]
                },
                {
                  id: "st_gb_h11_01_04",
                  titleMr: "भारतीय राष्ट्रीय काँग्रेस स्थापना (२८ डिसेंबर १८८५): गोकुळदास तेजपाल संस्कृत कॉलेज, मुंबई; संस्थापक ॲलन ऑक्टाव्हियन ह्युम, पहिले अध्यक्ष व्योमेशचंद्र बॅनर्जी, ७२ प्रतिनिधी, महाराष्ट्रातील प्रतिनिधी व उद्दिष्टे",
                  titleEn: "Foundation of INC: 28 Dec 1885 at Gokuldas Tejpal College Bombay, A.O. Hume, W.C. Bonnerjee & 72 Delegates",
                  chips: ["काँग्रेस स्थापना १८८५", "गोकुळदास तेजपाल कॉलेज", "व्योमेशचंद्र बॅनर्जी", "ए ओ ह्युम", "७२ प्रतिनिधी"]
                }
              ],
              sources: [
                { book: "आधुनिक भारताचा इतिहास", standard: "बिपिन चंद्र", chapterRef: "काँग्रेसची स्थापना" },
                { book: "महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण ८: महाराष्ट्रातील राजकीय जागृती" }
              ]
            }
          ]
        },
        {
          id: "gb_hist_c12",
          code: "H12",
          section: "C",
          slug: "moderate-and-extremist-phases-tilak-era",
          nameMr: "मवाळ-जहाल कालखंड, लोकमान्य टिळक आणि वंगभंग चळवळ",
          nameEn: "Moderate & Extremist Phases, Tilak Era & Swadeshi Movement",
          name: "टिळक युग व जहाल राजकारण (Moderate-Extremist Era & Tilak)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 5,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_hist_c12",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_hist_c11",
          nextChapterId: "gb_hist_c13",
          metaDescriptionMr: "मवाळ नेते (गोखले, नौरोजी), लोकमान्य टिळक (केसरी, मराठा, चतुःसूत्री, मंडले कारावास), बंगाल फाळणी (१९०५) आणि सुरत फूट (१९०७).",
          metaDescriptionEn: "In-depth review of Moderates vs Extremists, Lokmanya Tilak (Kesari, Mahratta, 4-point program, Mandalay exile), Partition of Bengal (1905), and Surat Split (1907).",
          notesJsonPath: "/data/notes/group_b/prelims/history/c12_tilak_era.json",
          quizTag: "gb_hist_tilak_era_01",
          tags: ["Modern India", "Maharashtra History", "Lokmanya Tilak", "Moderates", "Extremists", "Swadeshi Movement", "Surat Split 1907", "High-Weightage"],
          searchKeywords: ["lokmanya tilak", "gopal krishna gokhale", "servants of india society", "kesari", "mahratta", "swadeshi 1905", "surat split 1907", "लोकमान्य टिळक", "गोपाळ कृष्ण गोखले", "केसरी", "मराठा", "स्वदेशी चळवळ", "सुरत फूट"],
          topics: [
            {
              id: "top_gb_h12_01",
              nameMr: "मवाळ-जहाल प्रवाह, टिळकांचे राजकारण व स्वदेशी लढा",
              nameEn: "Moderate-Extremist Ideologies, Tilak's Leadership & Swadeshi Movement",
              subtopics: [
                {
                  id: "st_gb_h12_01_01",
                  titleMr: "मवाळ कालखंड (१८८५-१९०५): घटनात्मक सनदशीर मार्ग, दादाभाई नौरोजी (संपत्ती वहन सिद्धांत - Drain Theory), गोपाळ कृष्ण गोखले (भारत सेवक समाज १९०५ - Servants of India Society)",
                  titleEn: "Moderate Phase: Constitutional Methods, Dadabhai Naoroji (Drain Theory) & Gopal Krishna Gokhale (Servants of India Society 1905)",
                  chips: ["दादाभाई नौरोजी", "Drain Theory", "गोपाळ कृष्ण गोखले", "भारत सेवक समाज १९०५"]
                },
                {
                  id: "st_gb_h12_01_02",
                  titleMr: "लोकमान्य बाळ गंगाधर टिळक: जहाल राष्ट्रवादाचे प्रणेते, केसरी (मराठी) व मराठा (इंग्रजी) वृत्तपत्रे (१८८१), सार्वजनिक गणेशोत्सव (१८९३) व शिवजयंती (१८९५) उत्सव",
                  titleEn: "Lokmanya Tilak: Pioneer of Assertive Nationalism, Kesari & Mahratta (1881), Public Ganeshotsav (1893) & Shiv Jayanti (1895)",
                  chips: ["लोकमान्य टिळक", "केसरी व मराठा १८८१", "सार्वजनिक गणेशोत्सव १८९३", "शिवजयंती उत्सव १८९५"]
                },
                {
                  id: "st_gb_h12_01_03",
                  titleMr: "बंगालची फाळणी (लॉर्ड कर्झन १९०५), वंगभंग चळवळ आणि राष्ट्रीय काँग्रेसची चतुःसूत्री: १) स्वदेशी, २) बहिष्कार, ३) राष्ट्रीय शिक्षण, ४) स्वराज्य (कलकत्ता १९०६ दादाभाई नौरोजी अध्यक्ष)",
                  titleEn: "Partition of Bengal (1905), Anti-Partition Agitation & 4-Point Programme (Swadeshi, Boycott, National Education, Swaraj)",
                  chips: ["बंगाल फाळणी १९०५", "वंगभंग चळवळ", "चतुःसूत्री ठराव १९०६", "स्वराज्य जन्मसिद्ध हक्क"]
                },
                {
                  id: "st_gb_h12_01_04",
                  titleMr: "काँग्रेसमधील सुरत फूट (१९०७ - रासबिहारी घोष अध्यक्ष), राजद्रोहाचा खटला, टिळकांना मंडले कारावास (१९०८-१९१४) व 'गीतारहस्य' ग्रंथाचे लेखन",
                  titleEn: "Surat Split (1907), Sedition Trial, Tilak's 6-Year Exile in Mandalay & Writing of 'Gita Rahasya'",
                  chips: ["सुरत फूट १९०७", "मंडले जेल", "गीतारहस्य ग्रंथ", "राजद्रोह खटला"]
                },
                {
                  id: "st_gb_h12_01_05",
                  titleMr: "होमरूल चळवळ (१९१६): टिळकांची इंडियन होमरूल लीग (बेळगाव एप्रिल १९१६) व ॲनी बेझंट यांची लीग (मद्रास सप्टेंबर १९१६); लखनौ करार (१९१६ - मवाळ-जहाल व काँग्रेस-लीग समन्वय)",
                  titleEn: "Home Rule League (1916 by Tilak at Belgaum & Annie Besant at Madras) & Historic Lucknow Pact (1916)",
                  chips: ["होमरूल लीग १९१६", "टिळक बेळगाव", "ॲनी बेझंट", "लखनौ करार १९१६"]
                }
              ],
              sources: [
                { book: "आधुनिक भारताचा इतिहास", standard: "बिपिन चंद्र / स्पेक्ट्रम", chapterRef: "जहाल राष्ट्रवादाचा उदय व टिळक युग" },
                { book: "महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण ९: लोकमान्य टिळक व स्वातंत्र्यलढा" }
              ]
            }
          ]
        },
        {
          id: "gb_hist_c13",
          code: "H13",
          section: "C",
          slug: "armed-revolutionary-movement-maharashtra-and-india",
          nameMr: "सशस्त्र क्रांतिकारी चळवळ: महाराष्ट्र व भारत",
          nameEn: "Armed Revolutionary Movement: Maharashtra & Beyond",
          name: "सशस्त्र क्रांतीचा लढा (Armed Revolutionary Movement)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 5,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_hist_c13",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_hist_c12",
          nextChapterId: "gb_hist_c14",
          metaDescriptionMr: "वासुदेव बळवंत फडके, चापेकर बंधू (रँड वध), स्वातंत्र्यवीर सावरकर (अभिनव भारत), अनंत कान्हेरे, सेनापती बापट, भगतसिंग व क्रांतिकारी केंद्रे.",
          metaDescriptionEn: "In-depth review of armed revolutionaries: Vasudev Balwant Phadke, Chapekar Brothers (Rand assassination), V.D. Savarkar (Abhinav Bharat), Jackson murder (Kanhere), and HSRA.",
          notesJsonPath: "/data/notes/group_b/prelims/history/c13_revolutionary_movement.json",
          quizTag: "gb_hist_revolutionary_01",
          tags: ["Modern India", "Maharashtra History", "Vasudev Balwant Phadke", "Chapekar Brothers", "Savarkar", "Abhinav Bharat", "Anant Kanhere", "High-Weightage"],
          searchKeywords: ["vasudev balwant phadke", "chapekar brothers", "rand assassination 1897", "v d savarkar", "abhinav bharat 1904", "anant kanhere", "jackson murder", "फडके", "चापेकर बंधू", "सावरकर", "अभिनव भारत", "अनंत कान्हेरे"],
          topics: [
            {
              id: "top_gb_h13_01",
              nameMr: "महाराष्ट्रातील सशस्त्र क्रांती, गुप्त संघटना व जागतिक प्रवाह",
              nameEn: "Armed Revolutionary Organizations in Maharashtra & Global Links",
              subtopics: [
                {
                  id: "st_gb_h13_01_01",
                  titleMr: "वासुदेव बळवंत फडके: महाराष्ट्रातील सशस्त्र बंडाचे पहिले प्रणेते, रामोशींचे सैन्य, धामारी लुट, दौलतराव नाईक सहकार्य, अटक व एडन येथे मृत्यू (१८८३)",
                  titleEn: "Vasudev Balwant Phadke: Armed Mobilization of Ramoshis, Capture & Martyrdom at Aden (1883)",
                  chips: ["वासुदेव बळवंत फडके", "दौलतराव नाईक", "एडन जेल १८८३", "रामोशी सैन्य"]
                },
                {
                  id: "st_gb_h13_01_02",
                  titleMr: "चापेकर बंधू (दामोदर, बाळकृष्ण, वासुदेव): पुण्यात प्लेग कमिशनर वॉल्टर चार्ल्स रँड व आयर्स्ट यांचा वध (२२ जून १८९७ - गणेशखिंड) व द्रविड बंधूंची हत्या",
                  titleEn: "Chapekar Brothers: Assassination of Plague Commissioner Rand (22 June 1897) & Dravid Murders",
                  chips: ["दामोदर चापेकर", "बाळकृष्ण चापेकर", "रँड वध १८९७", "गणेशखिंड पुणे"]
                },
                {
                  id: "st_gb_h13_01_03",
                  titleMr: "स्वातंत्र्यवीर विनायक दामोदर सावरकर: मित्रमेळा (नाशिक १८९९), अभिनव भारत (१९०४), '१८५७ चे स्वातंत्र्यसमर' ग्रंथ, जोसेफ मॅझिनीचे चरित्र, लंडनमधील इंडिया हाऊस, मार्सेलिस बंदरात उडी आणि ५० वर्षांची अंदमान काळेपाणी शिक्षा",
                  titleEn: "Swatantryaveer V.D. Savarkar: Mitra Mela (1899), Abhinav Bharat (1904), India House, Marseilles Leap & Cellular Jail",
                  chips: ["मित्रमेळा १८९९", "अभिनव भारत १९०४", "इंडिया हाऊस", "मार्सेलिस उडी १९१०", "अंदमान काळेपाणी"]
                },
                {
                  id: "st_gb_h13_01_04",
                  titleMr: "नाशिकचा जॅक्सन वध (२१ डिसेंबर १९०९): अनंत लक्ष्मण कान्हेरे, कृष्णाजी कर्वे, विनायक देशपांडे; सावरकरांचे बंधू बाबाराव सावरकर आणि बॉम्बनिर्मिती तंत्रज्ञान (सेनापती बापट - पॅरिस भेट)",
                  titleEn: "Assassination of AMT Jackson (1909): Anant Kanhere, Krishnaji Karve & Senapati Bapat (Paris Bomb Manual)",
                  chips: ["अनंत कान्हेरे", "जॅक्सन वध १९०९", "विजयानंद नाटकगृह नाशिक", "सेनापती बापट (बॉम्ब मॅन्युअल)"]
                },
                {
                  id: "st_gb_h13_01_05",
                  titleMr: "भारतीय क्रांतिकारक प्रवाह: काकोरी कट (१९२५), भगतसिंग, सुखदेव, राजगुरू (सॉन्डर्स वध १९२८, असेंब्ली बॉम्ब १९२९, २३ मार्च १९३१ बलिदान), चितगाव शस्त्रागार छापा (सूर्य सेन १९३०)",
                  titleEn: "Pan-India Revolutionary Struggle: Kakori (1925), HSRA (Bhagat Singh, Rajguru, Azad) & Chittagong (Surya Sen)",
                  chips: ["भगतसिंग व राजगुरू", "सॉन्डर्स वध", "काकोरी घटना", "सूर्य सेन (मास्तरदा)"]
                }
              ],
              sources: [
                { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण १०: महाराष्ट्रातील सशस्त्र क्रांती" },
                { book: "आधुनिक भारताचा इतिहास", standard: "बिपिन चंद्र", chapterRef: "क्रांतिकारी दहशतवाद/राष्ट्रवाद" }
              ]
            }
          ]
        },
        {
          id: "gb_hist_c14",
          code: "H14",
          section: "C",
          slug: "peasant-worker-and-leftist-movements-maharashtra",
          nameMr: "शेतकरी, कामगार आणि डाव्या चळवळींचा इतिहास",
          nameEn: "Peasant, Working-Class & Leftist Movements in Maharashtra",
          name: "शेतकरी, कामगार व डाव्या चळवळी (Peasant & Working-Class Movements)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_hist_c14",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_hist_c13",
          nextChapterId: "gb_hist_c15",
          metaDescriptionMr: "दख्खनचे दंगे (१८७५), नारायण मेघाजी लोखंडे (बॉम्बे मिलहँड्स), गिरणी कामगार चळवळ, कॉम्रेड डांगे, किसान सभा आणि वारली आदिवासी लढा.",
          metaDescriptionEn: "In-depth review of Deccan Riots (1875), Narayan Meghaji Lokhande (Bombay Millhands), textile workers' strikes, Communist movement (Dange), and Warli revolt (Godavari Parulekar).",
          notesJsonPath: "/data/notes/group_b/prelims/history/c14_peasant_labour.json",
          quizTag: "gb_hist_labour_01",
          tags: ["Modern India", "Maharashtra History", "Deccan Riots 1875", "Narayan Meghaji Lokhande", "Girni Kamgar", "Warli Revolt", "Godavari Parulekar", "High-Weightage"],
          searchKeywords: ["deccan riots 1875", "narayan meghaji lokhande", "bombay millhands association", "girni kamgar union", "warli revolt", "godavari parulekar", "दख्खनचे दंगे १८७५", "नारायण मेघाजी लोखंडे", "बॉम्बे मिलहँड्स", "गिरणी कामगार", "वारली उठाव", "गोदावरी परुळेकर"],
          topics: [
            {
              id: "top_gb_h14_01",
              nameMr: "शेतकरी उठाव, कामगार युनियन आणि साम्यवादी प्रवाह",
              nameEn: "Peasant Revolts, Trade Unionism & Communist Movements",
              subtopics: [
                {
                  id: "st_gb_h14_01_01",
                  titleMr: "दख्खनचे दंगे (Deccan Riots मे १८७५): सुपे (पुणे), शिरूर, भिमथडी व नगर भागातील सावकारविरोधी उठाव, दंगे चौकशी आयोग आणि डेक्कन ॲग्रिकल्चरिस्ट्स रिलीफ ॲक्ट (१८७९)",
                  titleEn: "Deccan Riots (1875): Anti-Moneylender Uprising, Commission of Inquiry & Deccan Agriculturists' Relief Act 1879",
                  chips: ["दख्खनचे दंगे १८७५", "सुपे बंड", "सावकारविरोधी लढा", "डेक्कन ॲग्रिकल्चरिस्ट्स रिलीफ ॲक्ट १८७९"]
                },
                {
                  id: "st_gb_h14_01_02",
                  titleMr: "नारायण मेघाजी लोखंडे: भारतीय कामगार चळवळीचे जनक, सत्यशोधक समाजाचे कार्यकर्ते, बॉम्बे मिलहँड्स असोसिएशन (१८९० - भारतातील पहिली कामगार संघटना), रविवारच्या साप्ताहिक सुट्टीची मागणी व कामगार हक्क",
                  titleEn: "Narayan Meghaji Lokhande: Father of Indian Labour Movement, Bombay Millhands Association (1890) & Sunday Holiday Campaign",
                  chips: ["नारायण मेघाजी लोखंडे", "बॉम्बे मिलहँड्स असोसिएशन १८९०", "कामगार चळवळीचे जनक", "रविवारची सुट्टी"]
                },
                {
                  id: "st_gb_h14_01_03",
                  titleMr: "मुंबईतील गिरणी कामगार संप आणि साम्यवादी चळवळ: ऑल इंडिया ट्रेड युनियन काँग्रेस (AITUC १९२० - लाला लजपत राय पहिले अध्यक्ष), लाल बावटा, श्रीपाद अमृत डांगे (गिरणी कामगार युनियन) व मीरत कट (१९२९)",
                  titleEn: "Bombay Textile Mill Strikes & Communist Movement: AITUC (1920), S.A. Dange, Girni Kamgar Union & Meerut Conspiracy (1929)",
                  chips: ["AITUC १९२०", "एस ए डांगे", "गिरणी कामगार युनियन", "मीरत कट १९२९"]
                },
                {
                  id: "st_gb_h14_01_04",
                  titleMr: "अखिल भारतीय किसान सभा (१९३६ - स्वामी सहजानंद सरस्वती) आणि महाराष्ट्रातील वारली आदिवासी लढा: गोदावरी परुळेकर ('जेव्हा माणूस जागा होतो') व ठाणे जिल्ह्यातील वेठबिगारी मुक्ती",
                  titleEn: "All India Kisan Sabha (1936) & Warli Adivasi Revolt in Thane led by Godavari Parulekar ('When A Man Wakes Up')",
                  chips: ["किसान सभा १९३६", "गोदावरी परुळेकर", "वारली उठाव", "जेव्हा माणूस जागा होतो"]
                }
              ],
              sources: [
                { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण १५: कामगार व शेतकरी चळवळी" },
                { book: "महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण ११: डाव्या व कामगार संघटना" }
              ]
            }
          ]
        },
        {
          id: "gb_hist_c15",
          code: "H15",
          section: "C",
          slug: "gandhian-era-non-cooperation-and-civil-disobedience-maharashtra",
          nameMr: "गांधी युग: असहकार, सविनय कायदेभंग व महाराष्ट्रातील सत्याग्रह",
          nameEn: "Gandhian Era: Non-Cooperation, Civil Disobedience & Satyagraha in Maharashtra",
          name: "गांधी युग व कायदेभंग चळवळ (Gandhian Satyagraha in Maharashtra)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 5,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_hist_c15",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_hist_c14",
          nextChapterId: "gb_hist_c16",
          metaDescriptionMr: "असहकार चळवळ, सोलापूर मार्शल लॉ (चार हुतात्मे), दांडी यात्रा, वडाळा-शिरोडा मीठ सत्याग्रह, महाराष्ट्रातील जंगल सत्याग्रह आणि बाबू गेणूंचे बलिदान.",
          metaDescriptionEn: "In-depth review of Non-Cooperation, Civil Disobedience, Salt Satyagraha in Maharashtra (Wadala, Shiroda), Forest Satyagrahas (Bilashi, Chirner), Solapur Martial Law Martyrs, and Babu Genu.",
          notesJsonPath: "/data/notes/group_b/prelims/history/c15_gandhian_movements.json",
          quizTag: "gb_hist_gandhian_01",
          tags: ["Modern India", "Maharashtra History", "Non-Cooperation", "Civil Disobedience", "Solapur Martyrs", "Forest Satyagraha", "Babu Genu", "High-Weightage"],
          searchKeywords: ["non cooperation maharashtra", "civil disobedience 1930", "solapur martial law", "wadala salt satyagraha", "forest satyagraha bilashi", "babu genu", "असहकार चळवळ", "सविनय कायदेभंग", "सोलापूर हुतात्मे", "वडाळा मीठ सत्याग्रह", "जंगल सत्याग्रह", "बाबू गेणू"],
          topics: [
            {
              id: "top_gb_h15_01",
              nameMr: "गांधीवादी जनआंदोलने आणि महाराष्ट्राचा प्रत्यक्ष सहभाग",
              nameEn: "Gandhian Mass Agitations & Maharashtra's Active Role",
              subtopics: [
                {
                  id: "st_gb_h15_01_01",
                  titleMr: "रौलेट ॲक्ट, जालियनवाला बाग हत्याकांड (१९१९) व असहकार आंदोलन (१९२०-२२): नागपूर काँग्रेस अधिवेशन (डिसेंबर १९२० - सी. विजयराघवाचार्य अध्यक्ष), परदेशी कपड्यांवर बहिष्कार व पदव्यांचा त्याग",
                  titleEn: "Rowlatt Act, Jallianwala Bagh (1919) & Non-Cooperation Movement (1920-22 at Nagpur Congress)",
                  chips: ["नागपूर काँग्रेस अधिवेशन १९२०", "असहकार चळवळ", "विदेशी मालाची होळी", "टिळक स्वराज्य फंड"]
                },
                {
                  id: "st_gb_h15_01_02",
                  titleMr: "सविनय कायदेभंग चळवळ (१९३०): दांडी यात्रा (१२ मार्च ते ६ एप्रिल १९३० - अवंतिकाबाई गोखले सहभाग); महाराष्ट्रातील मिठाचे सत्याग्रह: वडाळा (मुंबई), शिरोडा (मालवण) व भाटी (रत्नागिरी)",
                  titleEn: "Civil Disobedience (1930): Salt March & Salt Satyagraha in Maharashtra (Wadala, Shiroda, Bhatai)",
                  chips: ["दांडी यात्रा १९३०", "वडाळा मीठ सत्याग्रह", "शिरोडा सत्याग्रह मालवण", "अवंतिकाबाई गोखले"]
                },
                {
                  id: "st_gb_h15_01_03",
                  titleMr: "सोलापूरचा ऐतिहासिक लढा व मार्शल लॉ (मे १९३०): जनतेचे स्वयंशासन, म्युनिसिपालिटीवर तिरंगा, ब्रिटिश लष्कराचा गोळीबार आणि सोलापूरचे चार हुतात्मे: १) मल्लप्पा धनशेट्टी, २) जगन्नाथ शिंदे, ३) कुर्बान हुसेन, ४) किसन सारडा (१२ जानेवारी १९३१ फाशी)",
                  titleEn: "Solapur Uprising & Martial Law (1930): 4 Martyrs (Mallappa Dhanshetti, Jagannath Shinde, Kurban Hussain, Kisan Sarda)",
                  chips: ["सोलापूर मार्शल लॉ १९३०", "चार हुतात्मे", "मल्लप्पा धनशेट्टी", "कुर्बान हुसेन", "१२ जानेवारी हुतात्मा दिन"]
                },
                {
                  id: "st_gb_h15_01_04",
                  titleMr: "महाराष्ट्रातील जंगल सत्याग्रह (१९३०): बिळाशी (सांगली - राष्ट्रध्वज रक्षण लढा), संगमनेर (पुंजाजी भांगरे), अकोले, कलवण, चिरनेर (रायगड - मामलेदार गोळीबार लढा) व पुसद (यवतमाळ - बापूजी अणे)",
                  titleEn: "Forest Satyagraha in Maharashtra (1930): Bilashi, Sangamner, Chirner, Akole & Pusad (Bapuji Aney)",
                  chips: ["बिळाशी जंगल सत्याग्रह", "चिरनेर सत्याग्रह", "पुसद सत्याग्रह बापूजी अणे", "वन कायदेभंग"]
                },
                {
                  id: "st_gb_h15_01_05",
                  titleMr: "बाबू गेणू सैद यांचे बलिदान (१२ डिसेंबर १९३०): मुंबईच्या काळबादेवी भागात परदेशी कपड्यांचा ट्रक अडवताना आत्मार्पण; स्वदेशी चळवळीचे प्रेरणास्थान",
                  titleEn: "Martyrdom of Babu Genu Said (12 Dec 1930 at Kalbadevi, Bombay): Supreme Sacrifice for Swadeshi",
                  chips: ["बाबू गेणू बलिदान", "काळबादेवी मुंबई", "विदेशी माल बहिष्कार", "स्वदेशी आंदोलन"]
                }
              ],
              sources: [
                { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण १२: सविनय कायदेभंग व महाराष्ट्र" },
                { book: "स्वातंत्र्यलढ्यातील सोलापूर व महाराष्ट्र", standard: "महाराष्ट्र शासन गॅझेटियर", chapterRef: "हुतात्मा पर्व" }
              ]
            }
          ]
        },
        {
          id: "gb_hist_c16",
          code: "H16",
          section: "C",
          slug: "faizpur-congress-1936-and-quit-india-1942-maharashtra",
          nameMr: "फैजपूर काँग्रेस अधिवेशन (१९३६) आणि चले जाव चळवळ (१९४२)",
          nameEn: "Faizpur Congress (1936) & Quit India Movement (1942) in Maharashtra",
          name: "फैजपूर काँग्रेस व भारत छोडो आंदोलन (Faizpur & Quit India 1942)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 5,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_hist_c16",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_hist_c15",
          nextChapterId: "gb_hist_c17",
          metaDescriptionMr: "काँग्रेसचे पहिले ग्रामीण अधिवेशन (फैजपूर १९३६ - साने गुरुजी), चले जाव (ऑगस्ट १९४२ - मुंबई), भूमिगत आझाद रेडिओ (उषा मेहता) आणि आष्टी-चिमूर लढा.",
          metaDescriptionEn: "In-depth review of Faizpur Congress 1936 (First Rural Session, Sane Guruji), Quit India Movement (8 Aug 1942, Gowalia Tank Bombay), Underground Azad Radio (Usha Mehta), and Ashti-Chimur revolt.",
          notesJsonPath: "/data/notes/group_b/prelims/history/c16_quit_india.json",
          quizTag: "gb_hist_quit_india_01",
          tags: ["Modern India", "Maharashtra History", "Faizpur Congress 1936", "Quit India 1942", "Gowalia Tank", "Usha Mehta", "Ashti Chimur", "High-Weightage"],
          searchKeywords: ["faizpur congress 1936", "sane guruji", "quit india 1942", "gowalia tank bombay", "aruna asaf ali", "usha mehta azad radio", "ashti chimur", "फैजपूर अधिवेशन १९३६", "साने गुरुजी", "भारत छोडो १९४२", "ग्वालिया टँक", "उषा मेहता", "आझाद रेडिओ"],
          topics: [
            {
              id: "top_gb_h16_01",
              nameMr: "ग्रामीण राष्ट्रवाद, चले जाव ठराव व महाराष्ट्रातील भूमिगत लढा",
              nameEn: "Rural Nationalism, Quit India Resolution & Underground Movement",
              subtopics: [
                {
                  id: "st_gb_h16_01_01",
                  titleMr: "फैजपूर काँग्रेस अधिवेशन (जळगाव/खान्देश १९३६): काँग्रेसचे ५० वे व पहिले ग्रामीण अधिवेशन, अध्यक्ष पं. जवाहरलाल नेहरू, साने गुरुजी व धनजीशेट चौधरींचे स्वागत कार्य; शेतकरी जाहीरनामा",
                  titleEn: "Faizpur Congress (1936): 50th & First Rural Session, Nehru Presidency, Sane Guruji's Role & Agrarian Programme",
                  chips: ["फैजपूर काँग्रेस १९३६", "पहिले ग्रामीण अधिवेशन", "साने गुरुजी", "शेतकरी मागण्यांचा जाहीरनामा"]
                },
                {
                  id: "st_gb_h16_01_02",
                  titleMr: "वैयक्तिक सत्याग्रह (१९४०): महात्मा गांधींनी निवडलेले पहिले सत्याग्रही आचार्य विनोबा भावे (पवणार आश्रम, वर्धा), दुसरे पं. जवाहरलाल नेहरू",
                  titleEn: "Individual Satyagraha (1940): Acharya Vinoba Bhave (First Satyagrahi at Paunar) & Nehru",
                  chips: ["वैयक्तिक सत्याग्रह १९४०", "आचार्य विनोबा भावे", "पवणार आश्रम वर्धा"]
                },
                {
                  id: "st_gb_h16_01_03",
                  titleMr: "८ ऑगस्ट १९४२ चा चले जाव ठराव (ग्वालिया टँक / ऑगस्ट क्रांती मैदान, मुंबई): गांधीजींचा 'करेंगे या मरेंगे' मंत्र, अरुणा असफ अलींद्वारे ध्वजारोहण, नेत्यांची अटक व ९ ऑगस्टचा जनउठाव",
                  titleEn: "Quit India Resolution (8 Aug 1942 at Gowalia Tank Bombay): 'Do or Die' Call, Aruna Asaf Ali & Mass Revolt",
                  chips: ["ऑगस्ट क्रांती मैदान मुंबई", "करेंगे या मरेंगे", "८ ऑगस्ट १९४२", "अरुणा असफ अली"]
                },
                {
                  id: "st_gb_h16_01_04",
                  titleMr: "भूमिगत गुप्त आझाद रेडिओ (Underground Congress Radio): डॉ. उषा मेहता, विठ्ठलभाई झवेरी, बाबूभाई प्रसाद, राममनोहर लोहिया यांचे प्रसारण; ब्रिटिश पोलिसांची कारवाई",
                  titleEn: "Underground Azad Radio: Dr. Usha Mehta, Vithalbhai Jhaveri & Dr. Ram Manohar Lohia",
                  chips: ["उषा मेहता", "आझाद रेडिओ", "भूमिगत चळवळ", "राममनोहर लोहिया"]
                },
                {
                  id: "st_gb_h16_01_05",
                  titleMr: "महाराष्ट्रातील सशस्त्र जनप्रतिकार: विदर्भातील आष्टी-चिमूर लढा (संतुकराव तुकाराम), नंदुरबारचा तिरंगा लढा (हुतात्मा शिरीषकुमार व बालवीर - ९ सप्टेंबर १९४२) आणि गारगोटी (कोल्हापूर) लढा",
                  titleEn: "Violent Popular Uprisings: Ashti-Chimur (Vidarbha), Martyr Shirishkumar of Nandurbar (9 Sept 1942) & Gargoti",
                  chips: ["आष्टी चिमूर लढा", "शिरीषकुमार नंदुरबार", "बालवीर हुतात्मे", "गारगोटी लढा"]
                }
              ],
              sources: [
                { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण १६: १९४२ चे चले जाव आंदोलन" },
                { book: "महाराष्ट्राचा इतिहास", standard: "डॉ. अनिल कठारे", chapterRef: "प्रकरण १३: स्वातंत्र्यलढ्याची अंतिम फेरी" }
              ]
            }
          ]
        },
        {
          id: "gb_hist_c17",
          code: "H17",
          section: "C",
          slug: "satara-pratisarkar-and-parallel-governments",
          nameMr: "क्रांतिसिंह नाना पाटील आणि साताऱ्याचे प्रतिसरकार",
          nameEn: "Krantisinh Nana Patil & Satara Parallel Government (Pratisarkar)",
          name: "साताऱ्याचे प्रतिसरकार (Satara Pratisarkar 1943-46)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_hist_c17",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_hist_c16",
          nextChapterId: "gb_hist_c18",
          metaDescriptionMr: "क्रांतिसिंह नाना पाटील यांचे सातारा प्रतिसरकार (१९४३-४६), तुफान सेना, पत्री सरकार, न्यायदान मंडळे, जी. डी. लाड आणि किसन वीर यांचे कार्य.",
          metaDescriptionEn: "In-depth review of Satara Parallel Government (Pratisarkar 1943-46): Krantisinh Nana Patil, Toofan Sena, Patri Sarkar, Nyayadan Mandals, G.D. Lad, and Kisan Veer.",
          notesJsonPath: "/data/notes/group_b/prelims/history/c17_satara_pratisarkar.json",
          quizTag: "gb_hist_pratisarkar_01",
          tags: ["Modern India", "Maharashtra History", "Nana Patil", "Pratisarkar", "Toofan Sena", "Patri Sarkar", "High-Weightage"],
          searchKeywords: ["satara pratisarkar", "nana patil", "toofan sena", "patri sarkar", "g d lad", "kisan veer", "नाना पाटील", "प्रतिसरकार", "पत्री सरकार", "तुफान सेना", "जी डी लाड", "नागनाथ नायकवडी"],
          topics: [
            {
              id: "top_gb_h17_01",
              nameMr: "सातारा प्रतिसरकार: रचना, कार्यपद्धती व सशस्त्र तुफान सेना",
              nameEn: "Satara Parallel Government: Structure, Functioning & Armed Wings",
              subtopics: [
                {
                  id: "st_gb_h17_01_01",
                  titleMr: "प्रतिसरकारची स्थापना (१९४३-४६): ब्रिटिश शासन समांतर उखडून टाकणे, क्रांतिसिंह नाना पाटील यांचे नेतृत्व, किसन वीर, जी. डी. (बापू) लाड, नागनाथअण्णा नायकवडी",
                  titleEn: "Foundation of Pratisarkar (1943-46): Nana Patil, Kisan Veer, G.D. Bapu Lad & Nagnath Nayakwadi",
                  chips: ["क्रांतिसिंह नाना पाटील", "प्रतिसरकार स्थापना १९४३", "किसन वीर", "नागनाथअण्णा नायकवडी"]
                },
                {
                  id: "st_gb_h17_01_02",
                  titleMr: "तुफान सेना (Toofan Sena): कॅप्टन भाऊराव बाबर (फील्ड मार्शल), सशस्त्र कारवाया, धुळे सरकारी खजिना लूट (चिंचोडे रेल्वे स्टेशन लढा) व शस्त्रास्त्रे जप्ती",
                  titleEn: "Toofan Sena: Armed Wing under Field Marshal Bhaurao Babar, Dhule Treasury Raid (Chinchode Train)",
                  chips: ["तुफान सेना", "कॅप्टन भाऊराव बाबर", "धुळे खजिना लूट", "सशस्त्र प्रतिकार"]
                },
                {
                  id: "st_gb_h17_01_03",
                  titleMr: "प्रशासकीय रचना व पत्री सरकार: लोकअदालत / न्यायदान मंडळे, दारूबंदी, सावकारी नियंत्रण, गांधी विवाह पद्धत व पोलिसांच्या खबऱ्यांना शिक्षा ('पत्री' ठोकणे)",
                  titleEn: "Judicial & Social Machinery: Nyayadan Mandals (People's Courts), Prohibition & Punishing Informers (Patri Sarkar)",
                  chips: ["न्यायदान मंडळे", "पत्री सरकार", "गांधी विवाह", "सावकारी दस्तऐवज जाळणे"]
                },
                {
                  id: "st_gb_h17_01_04",
                  titleMr: "प्रतिसरकारचे ऐतिहासिक महत्त्व, चले जाव आंदोलनातील योगदान आणि १९४६ मध्ये सरकारचे विसर्जन",
                  titleEn: "Historical Significance, British Inability to Suppress & Peaceful Dissolution in 1946",
                  chips: ["प्रतिसरकार महत्त्व", "ब्रिटिश सत्तेला आव्हान", "नाना पाटील विचार"]
                }
              ],
              sources: [
                { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "गाठाळ / कठारे", chapterRef: "प्रकरण १७: साताऱ्याचे प्रतिसरकार" },
                { book: "क्रांतिसिंह नाना पाटील चरित्र", standard: "महाराष्ट्र राज्य साहित्य आणि संस्कृती मंडळ", chapterRef: "स्वातंत्र्य पर्व" }
              ]
            }
          ]
        },
        {
          id: "gb_hist_c18",
          code: "H18",
          section: "C",
          slug: "constitutional-evolution-and-naval-mutiny-1946",
          nameMr: "घटनात्मक कायदे, नौदल उठाव (१९४६) व भारताची स्वातंत्र्यप्राप्ती",
          nameEn: "Constitutional Evolution, Royal Indian Navy Mutiny (1946) & Independence",
          name: "घटनात्मक विकास व स्वातंत्र्यप्राप्ती (Constitutional Evolution & 1947)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_hist_c18",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_hist_c17",
          nextChapterId: "gb_hist_c19",
          metaDescriptionMr: "भारत सरकार कायदा १९३५, मुंबईतील नौदल उठाव (RIN Mutiny १९४६ - HMIS तलवार), कॅबिनेट मिशन, माउंटबॅटन योजना आणि स्वातंत्र्य कायदा १९४७.",
          metaDescriptionEn: "In-depth review of Government of India Act 1935, Royal Indian Navy Mutiny in Bombay (1946 on HMIS Talwar), Cabinet Mission, Mountbatten Plan, and Indian Independence Act 1947.",
          notesJsonPath: "/data/notes/group_b/prelims/history/c18_constitutional_independence.json",
          quizTag: "gb_hist_independence_01",
          tags: ["Modern India", "Maharashtra History", "1935 Act", "RIN Mutiny 1946", "Cabinet Mission", "Mountbatten Plan", "Independence 1947", "High-Weightage"],
          searchKeywords: ["1935 act", "rin mutiny 1946", "hmis talwar", "cabinet mission 1946", "mountbatten plan 1947", "indian independence act", "१९३५ कायदा", "नौदल उठाव १९४६", "HMIS तलवार", "कॅबिनेट मिशन", "स्वातंत्र्य कायदा १९४७"],
          topics: [
            {
              id: "top_gb_h18_01",
              nameMr: "घटनात्मक टप्पे, मुंबईतील नौदल बंड आणि स्वातंत्र्य",
              nameEn: "Constitutional Steps, Naval Revolt in Bombay & Transfer of Power",
              subtopics: [
                {
                  id: "st_gb_h18_01_01",
                  titleMr: "भारत सरकार कायदा १९३५: प्रांतिक स्वायत्तता, द्विदल राज्यपद्धती (केंद्रात), मुंबई इलाख्यात १९३७ च्या निवडणुका व पहिले प्रीमियर बी. जी. खेर",
                  titleEn: "Government of India Act 1935: Provincial Autonomy & 1937 Bombay Elections (Premier B.G. Kher)",
                  chips: ["१९३५ कायदा", "प्रांतिक स्वायत्तता", "१९३७ च्या निवडणुका", "बाळासाहेब (बी जी) खेर"]
                },
                {
                  id: "st_gb_h18_01_02",
                  titleMr: "मुंबईतील नौदल उठाव (Royal Indian Navy Mutiny - १८ फेब्रुवारी १९४६): 'HMIS तलवार' जहाजावरील खलाशांचे बंड (बी. सी. दत्त), वांशिक भेदभावाविरुद्ध संप, जनतेचा पाठिंबा व सरदार पटेलांची मध्यस्थी",
                  titleEn: "RIN Mutiny (18 Feb 1946 at Bombay): Strike on HMIS Talwar led by B.C. Dutt, Public Support & Patel's Mediation",
                  chips: ["नौदल उठाव १८ फेब्रु १९४६", "HMIS तलवार जहाज", "बी सी दत्त", "सरदार पटेल मध्यस्थी"]
                },
                {
                  id: "st_gb_h18_01_03",
                  titleMr: "कॅबिनेट मिशन (त्रिमंत्री योजना १९४६), अंतरिम सरकार (सप्टेंबर १९४६), घटना समितीची निर्मिती आणि माउंटबॅटन योजना (३ जून १९४७ फाळणी आराखडा)",
                  titleEn: "Cabinet Mission Plan (1946), Interim Government, Constituent Assembly & Mountbatten Plan (1947)",
                  chips: ["कॅबिनेट मिशन १९४६", "घटना समिती", "माउंटबॅटन योजना ३ जून", "फाळणी"]
                },
                {
                  id: "st_gb_h18_01_04",
                  titleMr: "भारतीय स्वातंत्र्य कायदा १९४७ (१५ ऑगस्ट १९४७ स्वातंत्र्य) आणि संस्थानांचे विलीनीकरण (सरदार पटेल व व्ही. पी. मेनन यांचे योगदान)",
                  titleEn: "Indian Independence Act 1947 & Integration of Princely States (Sardar Patel & V.P. Menon)",
                  chips: ["स्वातंत्र्य कायदा १९४७", "सरदार वल्लभभाई पटेल", "संस्थाने विलीनीकरण", "१५ ऑगस्ट १९४७"]
                }
              ],
              sources: [
                { book: "आधुनिक भारताचा इतिहास", standard: "बिपिन चंद्र / स्पेक्ट्रम", chapterRef: "स्वातंत्र्य व फाळणी" },
                { book: "भारतीय राज्यव्यवस्था", standard: "एम. लक्ष्मीकांत", chapterRef: "ऐतिहासिक पार्श्वभूमी" }
              ]
            }
          ]
        },


        // =========================================================================
        // विभाग D — स्वातंत्र्योत्तर महाराष्ट्र: मराठवाडा मुक्ती व संयुक्त महाराष्ट्र चळवळ
        // =========================================================================
        {
          id: "gb_hist_c19",
          code: "H19",
          section: "D",
          slug: "marathwada-mukti-sangram-and-hyderabad-liberation",
          nameMr: "हैदराबाद मुक्तिसंग्राम आणि मराठवाडा मुक्ती लढा",
          nameEn: "Hyderabad Liberation Struggle & Marathwada Mukti Sangram",
          name: "मराठवाडा मुक्तिसंग्राम (Marathwada Mukti Sangram)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_hist_c19",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_hist_c18",
          nextChapterId: "gb_hist_c20",
          metaDescriptionMr: "हैदराबाद संस्थान, निजाम उस्मान अली, कासिम रझवी व रझाकार, स्वामी रामानंद तीर्थ, गोविंदभाई श्रॉफ, बाबासाहेब परांजपे आणि ऑपरेशन पोलो (१७ सप्टेंबर १९४८).",
          metaDescriptionEn: "In-depth review of Hyderabad Liberation: Nizam Osman Ali, Razakars, Swami Ramanand Teerth, Govindbhai Shroff, Babasaheb Paranjape, and Operation Polo (17 Sept 1948).",
          notesJsonPath: "/data/notes/group_b/prelims/history/c19_marathwada_liberation.json",
          quizTag: "gb_hist_marathwada_01",
          tags: ["Modern India", "Maharashtra History", "Marathwada Mukti", "Swami Ramanand Teerth", "Operation Polo", "Razakars", "High-Weightage"],
          searchKeywords: ["marathwada mukti sangram", "hyderabad liberation", "swami ramanand teerth", "operation polo", "17 september 1948", "razakars", "मराठवाडा मुक्तिसंग्राम", "स्वामी रामानंद तीर्थ", "ऑपरेशन पोलो", "१७ सप्टेंबर १९४८", "रझाकार", "गोविंदभाई श्रॉफ"],
          topics: [
            {
              id: "top_gb_h19_01",
              nameMr: "हैदराबाद स्टेट काँग्रेस, सशस्त्र लढा व पोलीस कारवाई",
              nameEn: "Hyderabad State Congress, Armed Resistance & Operation Polo",
              subtopics: [
                {
                  id: "st_gb_h19_01_01",
                  titleMr: "पार्श्वभूमी व अन्यायकारक राजवट: निजाम मीर उस्मान अली खान, मजलिस-ए-इत्तेहादुल मुस्लिमीन, कासिम रझवीची 'रझाकार' संघटना व जनतेवरील अत्याचार",
                  titleEn: "Oppressive Regime: Nizam Mir Osman Ali, Kasim Razvi's Razakar Terror & People's Resistance",
                  chips: ["निजाम उस्मान अली", "कासिम रझवी", "रझाकार अत्याचार", "वंदे मातरम आंदोलन १९३८"]
                },
                {
                  id: "st_gb_h19_01_02",
                  titleMr: "हैदराबाद स्टेट काँग्रेस व लढा: स्वामी रामानंद तीर्थ यांचे नेतृत्व, गोविंदभाई श्रॉफ, बाबासाहेब परांजपे, दिगंबरराव बिंदू, अनंत भालेराव (मराठवाडा दैनिक) व जनआंदोलन",
                  titleEn: "Hyderabad State Congress: Leadership of Swami Ramanand Teerth, Govindbhai Shroff, Babasaheb Paranjape",
                  chips: ["स्वामी रामानंद तीर्थ", "गोविंदभाई श्रॉफ", "बाबासाहेब परांजपे", "हैदराबाद स्टेट काँग्रेस"]
                },
                {
                  id: "st_gb_h19_01_03",
                  titleMr: "उमरखेड छावणी, कॅम्प लढे, सशस्त्र दलांची निर्मिती आणि भारत सरकारची पोलीस कारवाई: 'ऑपरेशन पोलो' (१३ सप्टेंबर ते १७ सप्टेंबर १९४८ - जनरल जे. एन. चौधरी); मराठवाडा मुक्ती दिन (१७ सप्टेंबर)",
                  titleEn: "Armed Border Camps & Police Action: 'Operation Polo' (13-17 Sept 1948, Gen Chaudhuri) & Liberation of Marathwada",
                  chips: ["ऑपरेशन पोलो", "मेजर जनरल जे एन चौधरी", "१७ सप्टेंबर १९४८", "मराठवाडा मुक्ती दिन"]
                }
              ],
              sources: [
                { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण १८: हैदराबाद मुक्तिसंग्राम" },
                { book: "हैदराबाद स्वातंत्र्यसंग्राम", standard: "स्वामी रामानंद तीर्थ", chapterRef: "संपूर्ण आत्मवृत्त" }
              ]
            }
          ]
        },
        {
          id: "gb_hist_c20",
          code: "H20",
          section: "D",
          slug: "samyukta-maharashtra-movement-and-state-formation-1960",
          nameMr: "संयुक्त महाराष्ट्र चळवळ आणि महाराष्ट्र राज्याची निर्मिती (१९६०)",
          nameEn: "Samyukta Maharashtra Movement & Formation of Maharashtra State (1960)",
          name: "संयुक्त महाराष्ट्र चळवळ व राज्य निर्मिती (Samyukta Maharashtra 1960)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 5,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_hist_c20",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_hist_c19",
          nextChapterId: null,
          metaDescriptionMr: "भाषावार प्रांतरचना (धर, JVP, फाझल अली), नागपूर करार (१९५३), संयुक्त महाराष्ट्र समिती (१९५६), १०६ हुतात्मे आणि १ मे १९६० रोजी महाराष्ट्र राज्य स्थापना.",
          metaDescriptionEn: "Exhaustive coverage of Samyukta Maharashtra Movement: Dhar, JVP, Fazal Ali commissions, Nagpur Pact 1953, Samiti (1956), 106 Martyrs, and formation of Maharashtra on 1 May 1960.",
          notesJsonPath: "/data/notes/group_b/prelims/history/c20_samyukta_maharashtra.json",
          quizTag: "gb_hist_samyukta_01",
          tags: ["Modern India", "Maharashtra History", "Samyukta Maharashtra", "Nagpur Pact 1953", "106 Martyrs", "Acharya Atre", "1 May 1960", "High-Weightage"],
          searchKeywords: ["samyukta maharashtra movement", "nagpur pact 1953", "fazal ali commission", "acharya atre maratha", "s m joshi", "106 martyrs flora fountain", "1 may 1960 maharashtra", "संयुक्त महाराष्ट्र", "नागपूर करार १९५३", "१०६ हुतात्मे", "आचार्य अत्रे", "एस एम जोशी", "१ मे १९६०"],
          topics: [
            {
              id: "top_gb_h20_01",
              nameMr: "भाषावार प्रांतरचना, संयुक्त महाराष्ट्र लढा, हुतात्मे व राज्य स्थापना",
              nameEn: "Linguistic Reorganization, Mass Struggles, Martyrs & State Formation",
              subtopics: [
                {
                  id: "st_gb_h20_01_01",
                  titleMr: "भाषावार प्रांतरचनेचे टप्पे: एस. के. धर कमिशन (१९४८), जेव्हीपी समिती (JVP १९४८ - जवाहरलाल, वल्लभभाई, पट्टाभी), फाझल अली राज्य पुनर्रचना आयोग (१९५३); नागपूर करार (२८ सप्टेंबर १९५३ - वैधानिक विकास महामंडळांची तरतूद)",
                  titleEn: "Commissions for Linguistic States: Dhar (1948), JVP (1948), Fazal Ali Commission (1953) & Nagpur Pact (1953)",
                  chips: ["धर कमिशन", "JVP समिती", "फाझल अली आयोग", "नागपूर करार २८ सप्टेंबर १९५३"]
                },
                {
                  id: "st_gb_h20_01_02",
                  titleMr: "द्विभाषिक मुंबई राज्य (१ नोव्हेंबर १९५६): महाराष्ट्र व गुजरात एकत्रित राज्य निर्मिती, मोरारजी देसाईंचे सरकार, जनतेचा तीव्र विरोध आणि चळवळ",
                  titleEn: "Bilingual Bombay State (1 Nov 1956): Merger of Maharashtra & Gujarat, Morarji Desai's Policy & Mass Outrage",
                  chips: ["द्विभाषिक राज्य १९५६", "मोरारजी देसाई", "मुंबईचा लढा", "द्विभाषिक विरोध"]
                },
                {
                  id: "st_gb_h20_01_03",
                  titleMr: "संयुक्त महाराष्ट्र समिती (स्थापना ६ फेब्रुवारी १९५६ - पुणे): अध्यक्ष श्रीपाद अमृत डांगे, सरचिटणीस एस. एम. जोशी, प्रल्हाद केशव (आचार्य) अत्रे ('मराठा' दैनिक), प्रबोधनकार ठाकरे, सेनापती बापट, शाहीर अमर शेख, शाहीर अण्णाभाऊ साठे",
                  titleEn: "Samyukta Maharashtra Samiti (6 Feb 1956): S.A. Dange, S.M. Joshi, Acharya Atre (Maratha), Shahir Amar Shaikh & Annabhau Sathe",
                  chips: ["संयुक्त महाराष्ट्र समिती १९५६", "आचार्य अत्रे (दैनिक मराठा)", "एस एम जोशी", "शाहीर अमर शेख", "शाहीर अण्णाभाऊ साठे"]
                },
                {
                  id: "st_gb_h20_01_04",
                  titleMr: "१०६ हुतात्म्यांचे बलिदान: २१ नोव्हेंबर १९५५ (फ्लोरा फाउंटन गोळीबार) व १६ ते २२ जानेवारी १९५६ मधील रक्तपातातील हुतात्मे; हुतात्मा चौक स्मारक निर्मिती",
                  titleEn: "Sacrifice of 106 Martyrs: Flora Fountain Police Firing (Nov 1955 & Jan 1956) & Hutatma Chowk Memorial",
                  chips: ["१०६ हुतात्मे", "फ्लोरा फाउंटन", "हुतात्मा चौक मुंबई", "सखाराम शेळके"]
                },
                {
                  id: "st_gb_h20_01_05",
                  titleMr: "१ मे १९६०: मुंबईसह स्वतंत्र संयुक्त महाराष्ट्र राज्याची अधिकृत स्थापना; राजभवन येथे पंडित नेहरूंद्वारे उद्घाटन, पहिले मुख्यमंत्री यशवंतराव चव्हाण ('मंगल कलश')",
                  titleEn: "1 May 1960: Inauguration of Maharashtra State with Bombay by PM Nehru, First CM Yashwantrao Chavan ('Mangal Kalash')",
                  chips: ["१ मे १९६० महाराष्ट्र दिन", "पहिले मुख्यमंत्री यशवंतराव चव्हाण", "मंगल कलश", "मुंबईसह संयुक्त महाराष्ट्र"]
                }
              ],
              sources: [
                { book: "आधुनिक महाराष्ट्राचा इतिहास", standard: "डॉ. एस. एस. गाथाळ", chapterRef: "प्रकरण १९: संयुक्त महाराष्ट्र चळवळ व राज्य निर्मिती" },
                { book: "कऱ्हेचे पाणी (आत्मचरित्र)", standard: "आचार्य प्र. के. अत्रे", chapterRef: "संयुक्त महाराष्ट्र पर्व" }
              ]
            }
          ]
        }
      ]
    },


    {
      id: "gb_pre_geography",
      code: "GEOG",
      slug: "geography-maharashtra-india",
      nameMr: "भूगोल (महाराष्ट्राच्या विशेष संदर्भासह भारत व जग)",
      nameEn: "Geography with Special Reference to Maharashtra, India & World Basics",
      name: "भूगोल (Geography of Maharashtra & India)",
      officialScope: "Physical, Economic, and Social Geography of Maharashtra and India, with World Physical Geography fundamentals",
      version: "1.0",
      verifiedDate: "2026-10-28",
      notesJsonBaseDir: "/data/notes/group_b/prelims/geography/",


      // UI Theme & Theming Metadata
      theme: {
        primaryColor: "#059669",        // Emerald / Earth-Green Theme
        bgColor: "#ecfdf5",
        iconClass: "ri-earth-line"
      },


      // अभ्यास व डॅशबोर्ड ॲनालिटिक्स मेट्रिक्स
      metrics: {
        totalChapters: 18,
        totalEstimatedHours: 62,
        avgQuestionsInPrelims: 15,
        targetMarks: 15,
        weightageRange: "14-16 Questions"
      },


      // विषय पातळीवरील स्मार्ट टॅग्ज
      subjectTags: [
        "Core-GS",
        "Group-B-Prelims",
        "Paper-1-GS",
        "Pre-Cum-Mains",
        "High-Weightage",
        "Map-Based",
        "Maharashtra-Dominant"
      ],


      filterCategory: "GS",
      searchKeywords: [
        "mpsc group b geography", "maharashtra geography", "sahyadri", "godavari", "konkan",
        "climate of maharashtra", "census 2011 maharashtra", "minerals maharashtra", "transport",
        "भूगोल", "महाराष्ट्राचा भूगोल", "सह्याद्री", "गोदावरी खोरे", "कोकण किनारपट्टी", "महाराष्ट्राचे हवामान", "जनगणना २०११", "खनिजे"
      ],


      referenceSources: [
        {
          name: "MPSC Non-Gazetted Group B Combined Syllabus",
          role: "अधिकृत परीक्षा-संदर्भ",
          url: "https://mpsc.gov.in"
        },
        {
          name: "महाराष्ट्र राज्य पाठ्यपुस्तक निर्मिती मंडळ (Balbharati)",
          role: "प्राथमिक शालेय संदर्भ (इयत्ता ६ वी ते १२ वी भूगोल)",
          url: "https://balbharati.co.in/EHome.php"
        },
        {
          name: "द मेगा स्टेट महाराष्ट्र - ए. बी. सवदी",
          role: "महाराष्ट्राचा अधिकृत भूगोल व सांख्यिकी संदर्भ"
        },
        {
          name: "महाराष्ट्राचा भूगोल - प्रा. अनिरुद्ध / दीपस्तंभ",
          role: "प्राकृतिक, आर्थिक व मानवी भूगोल"
        },
        {
          name: "NCERT Geography Textbooks (Classes 11 & 12)",
          role: "भारताचा व जगाचा प्राकृतिक भूगोल"
        }
      ],


      chapters: [
        // =========================================================================
        // विभाग A — सामान्य व खगोलशास्त्रीय भूगोल (World & Physical Basics)
        // =========================================================================
        {
          id: "gb_geog_c01",
          code: "G01",
          section: "A",
          slug: "earth-solar-system-latitudes-longitudes",
          nameMr: "सूर्यमाला, पृथ्वी, अक्षवृत्ते, रेखावृत्ते व स्थानिक वेळ",
          nameEn: "Solar System, Earth Motions, Latitudes, Longitudes & Time Zones",
          name: "सूर्यमाला व अक्षवृत्ते-रेखावृत्ते (Earth & Coordinate Systems)",
          category: "SUPPORTING",
          difficulty: "MEDIUM",
          priority: "MEDIUM",
          estimatedHours: 3,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_geog_c01",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: null,
          nextChapterId: "gb_geog_c02",
          metaDescriptionMr: "सूर्यमाला, पृथ्वीचे परिवलन-परिभ्रमण, अक्षवृत्ते, रेखावृत्ते, प्रमाणवेळ (IST), ग्रीनिच वेळ (GMT), आंतरराष्ट्रीय वाररेषा आणि ऋतूचक्र.",
          metaDescriptionEn: "Foundational geography: solar system, planetary dynamics, rotation, revolution, latitudes, longitudes, Indian Standard Time (IST), and International Date Line.",
          notesJsonPath: "/data/notes/group_b/prelims/geography/c01_earth_basics.json",
          quizTag: "gb_geog_earth_01",
          tags: ["World Geography", "Earth Motions", "Latitudes Longitudes", "Time Calculation", "IST", "GMT", "Prelims-General"],
          searchKeywords: ["solar system", "latitudes", "longitudes", "indian standard time", "gmt", "international date line", "अक्षवृत्त", "रेखावृत्त", "प्रमाणवेळ", "आंतरराष्ट्रीय वाररेषा"],
          topics: [
            {
              id: "top_gb_g01_01",
              nameMr: "पृथ्वीची गती, निर्देशांक व वेळ कालगणना",
              nameEn: "Planetary Movements, Coordinate Geometry & Time Calculation",
              subtopics: [
                {
                  id: "st_gb_g01_01_01",
                  titleMr: "पृथ्वीचे परिवलन व परिभ्रमण: दिवस-रात्र चक्र, ऋतू निर्मिती, विषुवदिन (Equinox) आणि अयनदिन (Solstice)",
                  titleEn: "Earth Rotation & Revolution: Day-Night Cycles, Solstices, Equinoxes & Season Formation",
                  chips: ["परिवलन", "परिभ्रमण", "विषुवदिन २१ मार्च / २३ सप्टें", "कर्क संक्रांत २१ जून", "मकर संक्रांत २२ डिसें"]
                },
                {
                  id: "st_gb_g01_01_02",
                  titleMr: "अक्षवृत्ते व रेखावृत्ते: कर्कवृत्त (२३.५° उ), मकरवृत्त (२३.५° द), मुख्य रेखावृत्त (Prime Meridian - 0° ग्रीनिच), रेखावृत्तीय अंतरावरून स्थानिक वेळेची गणना (१° = ४ मिनिटे)",
                  titleEn: "Latitudes & Longitudes: Tropics, Prime Meridian, Longitude-Time Conversion (1 Degree = 4 Minutes)",
                  chips: ["कर्कवृत्त", "विषुववृत्त", "स्थानिक वेळ", "१ अंश बरोबर ४ मिनिटे"]
                },
                {
                  id: "st_gb_g01_01_03",
                  titleMr: "भारतीय प्रमाणवेळ (IST - ८२°३०' पूर्व रेखावृत्त - मिर्झापूर/प्रयागराज) व GMT मधील फरक (+५ तास ३० मिनिटे); आंतरराष्ट्रीय वाररेषा (१८०° रेखावृत्त - पॅसिफिक महासागर)",
                  titleEn: "Indian Standard Time (82.5 E at Mirzapur, +5:30 GMT) & International Date Line (180th Meridian)",
                  chips: ["८२.५ पूर्व रेखावृत्त", "IST मिर्झापूर", "GMT फरक +५:३० तास", "आंतरराष्ट्रीय वाररेषा १८० अंश"]
                }
              ],
              sources: [
                { book: "NCERT Class 11 Fundamentals of Physical Geography", standard: "NCERT", chapterRef: "Chapter 2 & 3: Earth & Motions" },
                { book: "बालभारती भूगोल", standard: "इयत्ता ६ वी व ९ वी", chapterRef: "अक्षवृत्त-रेखावृत्त व वेळ" }
              ]
            }
          ]
        },


        // =========================================================================
        // विभाग B — भारताचा प्राकृतिक व सामान्य भूगोल (Geography of India)
        // =========================================================================
        {
          id: "gb_geog_c02",
          code: "G02",
          section: "B",
          slug: "india-location-extent-and-physiography",
          nameMr: "भारताचे स्थान, विस्तार, सीमा व प्रमुख प्राकृतिक विभाग",
          nameEn: "India: Location, Extent, Frontiers & Physiographic Divisions",
          name: "भारताचे स्थान, विस्तार व भूरचना (India Physiography & Borders)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_geog_c02",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_geog_c01",
          nextChapterId: "gb_geog_c03",
          metaDescriptionMr: "भारताचे अक्षांशीय व रेखांशीय स्थान, आंतरराष्ट्रीय सीमा, भूवेष्टित राज्ये, हिमालयीन पर्वतश्रेण्या, उत्तर भारतीय मैदाने व द्वीपकल्पीय पठार.",
          metaDescriptionEn: "In-depth review of India's physical extent, international land borders, maritime boundaries, Himalayan ranges, Indo-Gangetic Plains, and Peninsular Plateau.",
          notesJsonPath: "/data/notes/group_b/prelims/geography/c02_india_physiography.json",
          quizTag: "gb_geog_india_phy_01",
          tags: ["India Geography", "Physiography", "Himalayas", "Borders", "Peninsular Plateau", "High-Weightage"],
          searchKeywords: ["india location extent", "himalayan ranges", "radcliffe line", "mcmahon line", "northern plains", "peninsular plateau", "भारताचे स्थान", "हिमालय", "रेडक्लिफ रेषा", "मॅकमहोन रेषा", "द्वीपकल्पीय पठार"],
          topics: [
            {
              id: "top_gb_g02_01",
              nameMr: "भारताचे भौगोलिक स्थान, सीमा आणि प्राकृतिक भूस्वरूपे",
              nameEn: "India's Spatial Extent, International Frontiers & Geomorphology",
              subtopics: [
                {
                  id: "st_gb_g02_01_01",
                  titleMr: "स्थान व विस्तार: ८°४' उ ते ३७°६' उ अक्षांश, ६८°७' पू ते ९७°२५' पू रेखांश; उत्तर-दक्षिण लांबी (३,२१४ किमी), पूर्व-पश्चिम रुंदी (२,९३३ किमी); इंदिरा पॉईंट व किबिथू",
                  titleEn: "Latitudinal & Longitudinal Extent, North-South/East-West Dimensions, Extreme Points (Indira Point, Kibithu)",
                  chips: ["८.४ ते ३७.६ उत्तर", "६८.७ ते ९७.२५ पूर्व", "३२१४ किमी", "२९३३ किमी", "इंदिरा पॉईंट"]
                },
                {
                  id: "st_gb_g02_01_02",
                  titleMr: "आंतरराष्ट्रीय भूसीमा व सागरी सीमा: बांगलादेश (सर्वात लांब ४,०९६ किमी), चीन (मॅकमहोन रेषा), पाकिस्तान (रेडक्लिफ रेषा), अफगाणिस्तान (ड्युरंड रेषा); समुद्रकिनारा (७,५१६.६ किमी); कर्कवृत्त जाणारी ८ राज्ये",
                  titleEn: "International Land Borders (Bangladesh 4096 km, Radcliffe, McMahon, Durand), Coastline (7516.6 km) & 8 Tropic of Cancer States",
                  chips: ["बांगलादेश सीमा", "रेडक्लिफ रेषा", "मॅकमहोन रेषा", "कर्कवृत्त ८ राज्ये", "७५१६.६ किमी किनारा"]
                },
                {
                  id: "st_gb_g02_01_03",
                  titleMr: "उत्तर पर्वतीय प्रदेश (हिमालय): ट्रान्स-हिमालय, बृहद हिमालय (हिमाद्री), लघु हिमालय (हिमाचल - पीर पंजाल, धौलाधार), बाह्य हिमालय (शिवालिक टेकड्या); प्रमुख खिंडी (Passes - जोझिला, नाथुला, शिपकिला)",
                  titleEn: "The Northern Mountains (Himalayas): Trans-Himalaya, Greater (Himadri), Lesser (Pir Panjal), Shiwalik & Mountain Passes",
                  chips: ["हिमाद्री", "शिवालिक", "नाथुला खिंड", "जोझिला खिंड", "के२ गॉडविन ऑस्टिन", "कांचनगंगा"]
                },
                {
                  id: "st_gb_g02_01_04",
                  titleMr: "उत्तर भारतीय मैदाने (भाबर, तराई, भांगर, खादर) आणि द्वीपकल्पीय पठार (माळवा, छोटानागपूर, दख्खनचे पठार, अरवली, विंध्य व सातपुडा रांगा)",
                  titleEn: "Indo-Gangetic Plains (Bhabar, Terai, Bhangar, Khadar) & Peninsular Plateau (Malwa, Chhota Nagpur, Deccan, Aravalli)",
                  chips: ["भाबर व तराई", "खादर व भांगर", "छोटा नागपूर पठार", "अरवली पर्वत (गुरुशिखर)", "सातपुडा (धूपगड)"]
                }
              ],
              sources: [
                { book: "भारताचा भूगोल", standard: "प्रा. अनिरुद्ध", chapterRef: "प्रकरण १ व २: भारताचे स्थान व भूरचना" },
                { book: "NCERT Class 11 India: Physical Environment", standard: "NCERT", chapterRef: "Chapter 1 & 2: Structure & Physiography" }
              ]
            }
          ]
        },
        {
          id: "gb_geog_c03",
          code: "G03",
          section: "B",
          slug: "drainage-system-of-india",
          nameMr: "भारताची जलप्रणाली: हिमालयीन व द्वीपकल्पीय नद्या",
          nameEn: "Drainage System of India: Himalayan & Peninsular River Systems",
          name: "भारताची जलप्रणाली (Drainage System of India)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_geog_c03",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_geog_c02",
          nextChapterId: "gb_geog_c04",
          metaDescriptionMr: "सिंधू, गंगा, ब्रह्मपुत्रा जलप्रणाली, द्वीपकल्पीय नद्या (नर्मदा, तापी, महानदी, गोदावरी, कृष्णा, कावेरी), संगम स्थळे आणि प्रमुख धरणे-प्रकल्प.",
          metaDescriptionEn: "In-depth review of Indian drainage systems: Indus, Ganga, Brahmaputra basins, East vs West flowing peninsular rivers, confluences (Panch Prayag), and multi-purpose dam projects.",
          notesJsonPath: "/data/notes/group_b/prelims/geography/c03_india_drainage.json",
          quizTag: "gb_geog_drainage_01",
          tags: ["India Geography", "Drainage System", "Ganga Basin", "Indus", "Brahmaputra", "Peninsular Rivers", "High-Weightage"],
          searchKeywords: ["india drainage system", "ganga river basin", "indus river tributaries", "brahmaputra", "narmada tapi", "panch prayag", "गंगा नदी प्रणाली", "सिंधू नदी उपनद्या", "ब्रह्मपुत्रा", "पंचप्रयाग", "भाक्रा नांगल धरण"],
          topics: [
            {
              id: "top_gb_g03_01",
              nameMr: "भारतातील नदी खोरी, उपनद्या व बहुउद्देशीय प्रकल्प",
              nameEn: "River Basins, Tributaries, Confluences & Multi-Purpose Dam Projects",
              subtopics: [
                {
                  id: "st_gb_g03_01_01",
                  titleMr: "हिमालयीन नद्या १: सिंधू जलप्रणाली (उगम मानसररोवर; झेलम, चिनाब, रावी, बियास, सतलज) आणि सिंधू पाणी वाटप करार (१९६०)",
                  titleEn: "Indus System: Origin near Mansarovar, 5 Punjab Tributaries (Jhelum, Chenab, Ravi, Beas, Sutlej) & Indus Water Treaty (1960)",
                  chips: ["सिंधू नदी", "झेलम", "चिनाब", "सतलज", "भाक्रा नांगल प्रकल्प", "सिंधू करार १९६०"]
                },
                {
                  id: "st_gb_g03_01_02",
                  titleMr: "हिमालयीन नद्या २: गंगा जलप्रणाली (उगम गंगोत्री - भागीरथी); पंचप्रयाग (विष्णुप्रयाग, नंदप्रयाग, कर्णप्रयाग, रुद्रप्रयाग, देवप्रयाग); यमुना, घाघरा, गंडक, कोसी, सोन नद्या",
                  titleEn: "Ganga System: Bhagirathi, Alaknanda, Panch Prayag, Yamuna, Ghaghara, Kosi & Son tributaries",
                  chips: ["गंगा नदी", "पंचप्रयाग", "देवप्रयाग", "यमुना नदी", "कोसी (बिहारचे अश्रू)", "सुंदरबन त्रिभुज प्रदेश"]
                },
                {
                  id: "st_gb_g03_01_03",
                  titleMr: "हिमालयीन नद्या ३: ब्रह्मपुत्रा जलप्रणाली (उगम चेमायुंगदुंग - तिबेटमध्ये त्सांगपो), दिहांग, लोहित, सुबनसिरी उपनद्या आणि माजुली बेट (जगातील सर्वात मोठे नदी बेट)",
                  titleEn: "Brahmaputra System: Tsangpo in Tibet, Dihang, Lohit, Subansiri & Majuli Riverine Island",
                  chips: ["त्सांगपो", "दिहांग", "माजुली बेट", "लोहित नदी", "धुब्री"]
                },
                {
                  id: "st_gb_g03_01_04",
                  titleMr: "द्वीपकल्पीय पश्चिमवाहिनी नद्या (नर्मदा - अमरकंटक, धुआंधार धबधबा, सरदार सरोवर; तापी - मुलताई, उकई प्रकल्प; शरावती - जोग धबधबा)",
                  titleEn: "West-Flowing Peninsular Rivers: Narmada (Amarkantak, Dhuandhar Falls, Sardar Sarovar), Tapi (Ukai Dam) & Sharavati (Jog Falls)",
                  chips: ["नर्मदा नदी", "अमरकंटक", "सरदार सरोवर", "तापी नदी", "शरावती (जोग धबधबा)"]
                },
                {
                  id: "st_gb_g03_01_05",
                  titleMr: "द्वीपकल्पीय पूर्ववाहिनी नद्या: महानदी (हिराकुड धरण), गोदावरी (त्र्यंबकेश्वर), कृष्णा (महाबळेश्वर), कावेरी (तळकावेरी, शिवसमुद्रम धबधबा)",
                  titleEn: "East-Flowing Peninsular Rivers: Mahanadi (Hirakud Dam), Godavari, Krishna & Cauvery (Shivanasamudra Falls)",
                  chips: ["हिराकुड धरण", "कावेरी जलवाद", "शिवसमुद्रम", "नागार्जुन सागर धरण"]
                }
              ],
              sources: [
                { book: "NCERT Class 11 India: Physical Environment", standard: "NCERT", chapterRef: "Chapter 3: Drainage System" },
                { book: "भारताचा भूगोल", standard: "प्रा. अनिरुद्ध", chapterRef: "प्रकरण ३: भारतातील नद्या व जलसंपदा" }
              ]
            }
          ]
        },
        {
          id: "gb_geog_c04",
          code: "G04",
          section: "B",
          slug: "climate-monsoon-and-natural-vegetation-india",
          nameMr: "भारताचे हवामान, मान्सून निर्मिती, वने व मृदा प्रकार",
          nameEn: "Climate of India, Monsoon Mechanism, Soils & Natural Vegetation",
          name: "भारताचे हवामान व वने (Monsoon, Soils & Forests of India)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_geog_c04",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_geog_c03",
          nextChapterId: "gb_geog_c05",
          metaDescriptionMr: "नैऋत्य व ईशान्य मान्सून, जेट स्ट्रीम, एल-निनो व ला-निना, भारतीय मृदा प्रकार (ICAR वर्गीकरण), उष्णकटिबंधीय सदाहरित व पानझडी वने.",
          metaDescriptionEn: "In-depth review of Indian climate: Southwest/Northeast Monsoon mechanics, Jet Streams, El Nino-Southern Oscillation (ENSO), ICAR soil classification, and forest types.",
          notesJsonPath: "/data/notes/group_b/prelims/geography/c04_india_climate_forests.json",
          quizTag: "gb_geog_climate_india_01",
          tags: ["India Geography", "Indian Monsoon", "El Nino", "Vegetation", "Soils ICAR", "Forest Survey of India", "High-Weightage"],
          searchKeywords: ["indian monsoon mechanism", "el nino la nina", "southwest monsoon", "icar soils india", "tropical evergreen forests", "मान्सून निर्मिती", "एल निनो", "काळी मृदा", "जांभी मृदा", "सदाहरित वने"],
          topics: [
            {
              id: "top_gb_g04_01",
              nameMr: "मान्सूनची कार्यप्रणाली, ऋतू, वनस्पती व मातीचे प्रकार",
              nameEn: "Monsoon Dynamics, Meteorological Seasons, Biomes & Pedology",
              subtopics: [
                {
                  id: "st_gb_g04_01_01",
                  titleMr: "मान्सून यंत्रणा: ITCZ चे स्थलांतर, तिबेटचे पठार तापणे, सोमाली जेट व उष्णकटिबंधीय पूर्वेकडील जेट स्ट्रीम (TEJ); एल-निनो (El-Nino), ला-निना व इंडियन ओशन द्विध्रुव (IOD)",
                  titleEn: "Monsoon Mechanism: ITCZ Migration, Tibetan Heating, Somali Jet, Tropical Easterly Jet, ENSO & Indian Ocean Dipole",
                  chips: ["ITCZ", "जेट स्ट्रीम", "एल निनो व ला निना", "IOD द्विध्रुव", "नैऋत्य मान्सून"]
                },
                {
                  id: "st_gb_g04_01_02",
                  titleMr: "ऋतूचक्र व पर्जन्य वितरण: मान्सूनपूर्व वादळे (काळवैशाखी - बंगाल, चेरी ब्लॉसम / कॉफी बहार - कर्नाटक, आम्रसरी - महाराष्ट्र); सर्वाधिक पाऊस (मौसिनराम/चेरापुंजी - मेघालय)",
                  titleEn: "Pre-Monsoon Showers (Kalbaisakhi, Mango Showers), Monsoon Branches (Arabian Sea vs Bay of Bengal) & Highest Rainfall (Mawsynram)",
                  chips: ["आम्रसरी", "काळवैशाखी", "मौसिनराम (खासी टेकड्या)", "परतीचा मान्सून (तामिळनाडू पाऊस)"]
                },
                {
                  id: "st_gb_g04_01_03",
                  titleMr: "भारतातील प्रमुख वने (ISFR अहवाल): उष्णकटिबंधीय सदाहरित, उष्णकटिबंधीय आर्द्र व शुष्क पानझडी वने, काटेरी वने, खारफुटी/मॅन्ग्रोव्ह वने (सुंदरबन) आणि अल्पाइन वने",
                  titleEn: "Forest Types & ISFR Survey: Tropical Evergreen, Moist/Dry Deciduous, Mangroves & Alpine Forests",
                  chips: ["सदाहरित वने", "पानझडी वने (सागवान, साल)", "खारफुटी वने", "ISFR वन सर्वेक्षण अहवाल"]
                },
                {
                  id: "st_gb_g04_01_04",
                  titleMr: "भारतातील मृदा (ICAR च्या ८ मुख्य प्रकार): गाळाची मृदा (Alluvial), काळी रेगूर मृदा (Black Soil - कापूस), तांबडी-पिवळी मृदा, जांभी मृदा (Laterite - काजू, कॉफी) व वाळवंटी मृदा",
                  titleEn: "Indian Soils (ICAR 8 Types): Alluvial, Black Regur, Red & Yellow, Laterite and Arid Soils",
                  chips: ["गाळाची मृदा", "काळी रेगूर मृदा", "जांभी मृदा (Laterite)", "मृदा धूप व संवर्धन"]
                }
              ],
              sources: [
                { book: "NCERT Class 11 India: Physical Environment", standard: "NCERT", chapterRef: "Chapter 4, 5 & 6: Climate, Vegetation & Soil" },
                { book: "India State of Forest Report (ISFR)", standard: "FSI Dehradun", chapterRef: "National Forest Cover" }
              ]
            }
          ]
        },


        // =========================================================================
        // विभाग C — महाराष्ट्राचा संपूर्ण प्राकृतिक भूगोल (Maharashtra Physical)
        // =========================================================================
        {
          id: "gb_geog_c05",
          code: "G05",
          section: "C",
          slug: "maharashtra-location-extent-and-administrative-divisions",
          nameMr: "महाराष्ट्राचे स्थान, विस्तार, सीमा व प्रशासकीय-प्रादेशिक रचना",
          nameEn: "Maharashtra: Location, Extent, Borders, Administrative & Regional Setup",
          name: "महाराष्ट्राचे स्थान व प्रशासकीय रचना (Maharashtra Extent & Administration)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_geog_c05",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_geog_c04",
          nextChapterId: "gb_geog_c06",
          metaDescriptionMr: "महाराष्ट्राचे अक्षवृत्तीय व रेखावृत्तीय स्थान, क्षेत्रफळ, ६ प्रशासकीय विभाग, ५ प्रादेशिक विभाग, शेजारील ६ राज्ये व १ केंद्रशासित प्रदेशांच्या सीमा.",
          metaDescriptionEn: "In-depth review of Maharashtra's spatial extent (3,07,713 sq km), 6 administrative divisions, 5 natural regions, inter-state boundary touchpoints, and district reorganisation.",
          notesJsonPath: "/data/notes/group_b/prelims/geography/c05_maharashtra_admin.json",
          quizTag: "gb_geog_mh_admin_01",
          tags: ["Core", "Maharashtra Geography", "Administrative Divisions", "District Borders", "Area 307713", "High-Weightage"],
          searchKeywords: ["maharashtra geographical location", "307713 sq km", "6 administrative divisions", "kokan pune nashik chhatrapati sambhajinagar amravati nagpur", "district reorganization", "स्थान व विस्तार", "३०७७१३ चौ किमी", "प्रशासकीय विभाग", "जिल्हा सीमा"],
          topics: [
            {
              id: "top_gb_g05_01",
              nameMr: "भौगोलिक स्थान, क्षेत्रफळ, सीमा आणि जिल्ह्यांची रचना",
              nameEn: "Spatial Coordinates, Area, Borders & Administrative Structure",
              subtopics: [
                {
                  id: "st_gb_g05_01_01",
                  titleMr: "स्थान व विस्तार: १५°४४' उ ते २२°६' उ अक्षांश; ७२°३६' पू ते ८०°५४' पू रेखांश; पूर्व-पश्चिम लांबी सुमारे ८०० किमी, उत्तर-दक्षिण रुंदी सुमारे ७०० किमी; क्षेत्रफळ ३,०७,७१३ चौ. किमी (भारताच्या ९.३६% भाग - तिसरा क्रमांक)",
                  titleEn: "Coordinates: 15.44 N to 22.6 N, 72.36 E to 80.54 E; Dimensions: 800 km E-W, 700 km N-S; Area: 3,07,713 sq km (9.36% of India, 3rd Rank)",
                  chips: ["१५.४४ ते २२.६ उत्तर", "७२.३६ ते ८०.५४ पूर्व", "३,०७,७१३ चौ किमी", "९.३६ टक्के", "तिसरा क्रमांक"]
                },
                {
                  id: "st_gb_g05_01_02",
                  titleMr: "शेजारील राज्ये व सीमावर्ती जिल्हे: मध्य प्रदेश (८ जिल्हे - सर्वात लांब सीमा), कर्नाटक (७ जिल्हे), तेलंगणा (४ जिल्हे), गुजरात (४ जिल्हे), छत्तीसगड (२ जिल्हे - गोंदिया, गडचिरोली), गोवा (१ जिल्हा - सिंधुदुर्ग) व दादरा-नगर हवेली",
                  titleEn: "Inter-State Borders: MP (8 Districts), Karnataka (7 Districts), Telangana (4), Gujarat (4), Chhattisgarh (2), Goa (1 - Sindhudurg)",
                  chips: ["मध्य प्रदेश सीमा ८ जिल्हे", "कर्नाटक सीमा ७ जिल्हे", "तेलंगणा ४ जिल्हे", "छत्तीसगड गोंदिया-गडचिरोली", "गोवा सिंधुदुर्ग"]
                },
                {
                  id: "st_gb_g05_01_03",
                  titleMr: "६ प्रशासकीय विभाग (कोकण, पुणे, नाशिक, छत्रपती संभाजीनगर, अमरावती, नागपूर) आणि ५ प्रादेशिक विभाग (कोकण, पश्चिम महाराष्ट्र/देश, खानदेश, मराठवाडा, विदर्भ)",
                  titleEn: "6 Administrative Divisions (Chhatrapati Sambhajinagar max 8 districts) & 5 Natural Geographic Regions",
                  chips: ["६ प्रशासकीय विभाग", "छत्रपती संभाजीनगर ८ जिल्हे", "५ प्रादेशिक विभाग", "खानदेश ३ जिल्हे", "विदर्भ ११ जिल्हे"]
                },
                {
                  id: "st_gb_g05_01_04",
                  titleMr: "नवीन जिल्ह्यांची निर्मिती (१ मे १९६० रोजी २६ जिल्हे -> सध्या ३६ जिल्हे): सिंधुदुर्ग व जालना (१९८१), लातूर व गडचिरोली (१९८२), मुंबई उपनगर (१९९०), वाशीम व नंदुरबार (१९९८), हिंगोली (१९९९), पालघर (१ ऑगस्ट २०१४ - ३६ वा जिल्हा)",
                  titleEn: "District Reorganisation (26 districts in 1960 to 36): Chronology of 10 bifurcated districts, ending with Palghar (1 Aug 2014)",
                  chips: ["पालघर ३६ वा जिल्हा १ ऑगस्ट २०१४", "सिंधुदुर्ग व जालना १९८१", "वाशीम व नंदुरबार १९९८", "हिंगोली १९९९"]
                }
              ],
              sources: [
                { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण १: स्थान, विस्तार व रचना" },
                { book: "बालभारती भूगोल", standard: "इयत्ता ९ वी", chapterRef: "महाराष्ट्र राज्य निर्मिती व प्रशासन" }
              ]
            }
          ]
        },
        {
          id: "gb_geog_c06",
          code: "G06",
          section: "C",
          slug: "physiography-of-maharashtra-konkan-sahyadri-plateau",
          nameMr: "महाराष्ट्राचे प्राकृतिक विभाग: कोकण किनारपट्टी, सह्याद्री व दख्खन पठार",
          nameEn: "Physiographic Divisions: Konkan Coast, Sahyadri (Western Ghats) & Deccan Plateau",
          name: "महाराष्ट्राची प्राकृतिक भूरचना (Physiography of Maharashtra)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 5,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_geog_c06",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_geog_c05",
          nextChapterId: "gb_geog_c07",
          metaDescriptionMr: "कोकण किनारपट्टी (खाड्या, बंदरे, रुंदी), सह्याद्री पर्वत/पश्चिम घाट (उंच शिखरे, प्रमुख घाट/खिंडी), आणि दख्खनचे पठार (महाराष्ट्र पठार, बेसाल्ट खडक रचना).",
          metaDescriptionEn: "In-depth review of Maharashtra's 3 major physiographic units: Konkan coastline (Creeks, Ports), Sahyadri mountain range (Peaks, Ghat passes), and Maharashtra Deccan Plateau (Basalt lava steps).",
          notesJsonPath: "/data/notes/group_b/prelims/geography/c06_mh_physiography.json",
          quizTag: "gb_geog_mh_phy_01",
          tags: ["Core", "Maharashtra Geography", "Konkan", "Sahyadri", "Maharashtra Plateau", "Basalt Rock", "Ghat Passes", "High-Weightage"],
          searchKeywords: ["konkan coast", "sahyadri western ghats", "maharashtra plateau", "kalsubai peak", "bor ghat thal ghat", "creeks in konkan", "कोकण किनारपट्टी", "सह्याद्री पर्वत", "कळसुबाई", "थळ घाट बोर घाट", "दख्खन पठार बेसाल्ट खडक"],
          topics: [
            {
              id: "top_gb_g06_01",
              nameMr: "महाराष्ट्राचे तीन प्रमुख प्राकृतिक विभाग व भूरूपे",
              nameEn: "Tri-fold Physical Divisions & Geomorphological Formations",
              subtopics: [
                {
                  id: "st_gb_g06_01_01",
                  titleMr: "कोकण किनारपट्टी: रिया प्रकारचा किनारा, लांबी ७२० किमी; उत्तर कोकण रुंद (९०-१२० किमी - उल्हास खोरे), दक्षिण कोकण अरुंद (४०-४५ किमी); खलाटी (सखल किनारी भाग) व वलाटी (सह्याद्री पायथ्याचा उंच भाग)",
                  titleEn: "Konkan Coastal Lowlands: Ria Coast, 720 km Length, North Konkan vs South Konkan Width, Khalati (Lowlands) & Valati (Foothills)",
                  chips: ["७२० किमी किनारा", "खलाटी व वलाटी", "उत्तर कोकण", "दक्षिण कोकण जांभा खडक", "रिया किनारा"]
                },
                {
                  id: "st_gb_g06_01_02",
                  titleMr: "कोकणातील खाड्या (Creeks) व नैसर्गिक बंदरे: उत्तर ते दक्षिण क्रम (डहाणू, दातीवरे, वसई, मनोरी, धरमतर, रोहा/कुंडलिका, राजापुरी, बाणकोट, केळशी, दाभोळ/वशिष्ठी, जयगड/शास्त्री, भाट्ये, विजयदुर्ग, कर्ली, तेरेखोल खाडी)",
                  titleEn: "Creeks of Konkan (North-South Sequence: Dahanu to Terekhol) & Natural Seaports (JNPT, Nhava Sheva, Jaigad)",
                  chips: ["खाड्यांचा उत्तर-दक्षिण क्रम", "धरमतर खाडी", "दाभोळ खाडी", "तेरेखोल खाडी", "जवाहरलाल नेहरू बंदर (JNPT)"]
                },
                {
                  id: "st_gb_g06_01_03",
                  titleMr: "सह्याद्री पर्वत (पश्चिम घाट): लांबी सुमारे ४४० किमी (महाराष्ट्रात), सरासरी उंची ९००-१२०० मीटर, प्रस्तरभंग व पश्चिमेकडील तीव्र उतार; युनेस्को जागतिक वारसा स्थळ (२०१२)",
                  titleEn: "Sahyadri (Western Ghats): 440 km Length in Maharashtra, Fault-Scarp Topography, UNESCO World Heritage Status (2012)",
                  chips: ["सह्याद्री ४४० किमी", "पश्चिम उतार तीव्र", "पूर्व उतार मंद", "वारसा स्थळ २०१२"]
                },
                {
                  id: "st_gb_g06_01_04",
                  titleMr: "सह्याद्रीतील सर्वोच्च शिखरे (उंचीनुसार क्रम): १) कळसुबाई (१६४६ मी - अहमदनगर), २) साल्हेर (१५६७ मी - नाशिक), ३) महाबळेश्वर (१४३८ मी - सातारा), ४) हरिश्चंद्रगड (१४२४ मी), ५) सप्तशृंगी (१४१६ मी), ६) तोरणा (१४०४ मी)",
                  titleEn: "Prominent Peaks in Descending Order: Kalsubai (1646m), Salher (1567m), Mahabaleshwar (1438m), Harishchandragad (1424m)",
                  chips: ["कळसुबाई १६४६ मी", "साल्हेर १५६७ मी", "महाबळेश्वर १४३८ मी", "हरिश्चंद्रगड", "सप्तशृंगी"]
                },
                {
                  id: "st_gb_g06_01_05",
                  titleMr: "सह्याद्रीतील प्रमुख घाट व खिंडी (जोडणारे शहरे): थळ घाट/कसारा (मुंबई-नाशिक), बोर घाट (मुंबई-पुणे), कुंभारली घाट (कराड-चिपळूण), आंबा घाट (कोल्हापूर-रत्नागिरी), फोंडा घाट (कोल्हापूर-पणजी), आंबोली घाट (सावंतवाडी-बेळगाव - सर्वाधिक पाऊस)",
                  titleEn: "Key Mountain Passes (Ghats Linking Cities): Thal Ghat, Bhor Ghat, Kumbharli, Amba, Phonda, and Amboli Ghat",
                  chips: ["थळ घाट (मुंबई-नाशिक)", "बोर घाट (मुंबई-पुणे)", "कुंभारली (कराड-चिपळूण)", "आंबा घाट", "आंबोली घाट"]
                },
                {
                  id: "st_gb_g06_01_06",
                  titleMr: "महाराष्ट्र पठार (दख्खनचे पठार): राज्याच्या ९०% भूभागाचा समावेश; लाव्हाच्या २९ भेगी उद्रेकातून (Fissure Eruptions) निर्मिती, काळ्या बेसाल्ट खडकाचे थर, पायऱ्यांसारखी रचना (Deccan Traps); पश्चिमेकडून पूर्वेकडे मंद उतार",
                  titleEn: "Maharashtra Plateau: Covers 90% Area, Formed by 29 Volcanic Fissure Lava Eruptions, Basalt Rock Layering & Step Topography (Deccan Traps)",
                  chips: ["महाराष्ट्र पठार ९० टक्के", "बेसाल्ट खडक", "भेगी उद्रेक", "डेक्कन ट्रॅप", "पूर्वेकडे मंद उतार"]
                }
              ],
              sources: [
                { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण २: महाराष्ट्राची प्राकृतिक रचना" },
                { book: "महाराष्ट्राचा भूगोल", standard: "प्रा. अनिरुद्ध", chapterRef: "प्रकरण २: कोकण, सह्याद्री व पठार" }
              ]
            }
          ]
        },
        {
          id: "gb_geog_c07",
          code: "G07",
          section: "C",
          slug: "sub-mountain-ranges-and-hills-of-maharashtra",
          nameMr: "महाराष्ट्रातील उप-पर्वतरांगा, डोंगर व टेकड्यांची रचना",
          nameEn: "Sub-Mountain Ranges, Plateaus & Local Hills of Maharashtra",
          name: "महाराष्ट्रातील डोंगररांगा व टेकड्या (Hills & Sub-Ranges of Maharashtra)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_geog_c07",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_geog_c06",
          nextChapterId: "gb_geog_c08",
          metaDescriptionMr: "सातपुडा पर्वतरांग (तोरणमाळ, गावीलगड टेकड्या), सह्याद्रीच्या ३ प्रमुख उपरांगा (सातमाळा-अजिंठा, हरिश्चंद्र-बालाघाट, शंभू महादेव) आणि स्थानिक टेकड्या.",
          metaDescriptionEn: "In-depth review of Satpura range in Maharashtra (Toranmal, Gavilgad), 3 prominent Sahyadri spurs (Satmala-Ajanta, Harishchandra-Balaghat, Shambhu Mahadev), and district-level isolated hillocks.",
          notesJsonPath: "/data/notes/group_b/prelims/geography/c07_mh_hills_ranges.json",
          quizTag: "gb_geog_mh_hills_01",
          tags: ["Core", "Maharashtra Geography", "Satpura Range", "Satmala Ajanta", "Harishchandra Balaghat", "Shambhu Mahadev", "Local Hills", "High-Weightage"],
          searchKeywords: ["satpura toranmal", "gavilgad chikhaldara", "satmala ajanta range", "harishchandra balaghat", "shambhu mahadev range", "local hills maharashtra", "सातपुडा तोरणमाळ", "गावीलगड चिखलदरा", "सातमाळा अजिंठा", "हरिश्चंद्र बालाघाट", "शंभू महादेव रांग"],
          topics: [
            {
              id: "top_gb_g07_01",
              nameMr: "सातपुडा रांग, सह्याद्रीच्या उपरांगा व स्थानिक टेकड्यांचे वितरण",
              nameEn: "Satpura Mountain System, Sahyadri Offshoots & Local Hill Ranges",
              subtopics: [
                {
                  id: "st_gb_g07_01_01",
                  titleMr: "सातपुडा पर्वतरांग: महाराष्ट्राच्या उत्तर सीमेवर; पश्चिम भाग: अस्तंभा डोंगर (१३२५ मी) व तोरणमाळ पठार (नंदुरबार); पूर्व भाग: गावीलगड टेकड्या (अमरावती - चिखलदरा थंड हवेचे ठिकाण, वैराट सर्वोच्च शिखर १११५ मी)",
                  titleEn: "Satpura System: Northern Border of MH; Astambha (1325m) & Toranmal in Nandurbar; Gavilgad Hills in Amravati (Chikhaldara, Vairat 1115m)",
                  chips: ["सातपुडा पर्वत", "अस्तंभा डोंगर १३२५ मी", "तोरणमाळ पठार", "गावीलगड टेकड्या", "चिखलदरा", "वैराट शिखर"]
                },
                {
                  id: "st_gb_g07_01_02",
                  titleMr: "सातमाळा-अजिंठा डोंगररांग: नाशिकमध्ये सातमाळा व पुढे मराठवाड्यात अजिंठा; तापी व गोदावरी नदी खोऱ्यांचे जलविभाजक; वेरूळ व अजिंठा लेणी याच रांगेत",
                  titleEn: "Satmala-Ajanta Range: Extends across Nashik into Marathwada; Water Divide between Tapi and Godavari River Basins; Houses Ajanta-Ellora Caves",
                  chips: ["सातमाळा अजिंठा", "तापी-गोदावरी जलविभाजक", "धोडप शिखर", "अजिंठा लेणी"]
                },
                {
                  id: "st_gb_g07_01_03",
                  titleMr: "हरिश्चंद्र-बालाघाट डोंगररांग: हरिश्चंद्रगड (अहमदनगर) ते बालाघाट (बीड-उस्मानाबाद-लातूर); गोदावरी व भीमा नदी खोऱ्यांचे जलविभाजक",
                  titleEn: "Harishchandra-Balaghat Range: From Ahmednagar across Beed to Latur; Water Divide between Godavari and Bhima River Basins",
                  chips: ["हरिश्चंद्र बालाघाट", "गोदावरी-भीमा जलविभाजक", "बालाघाट पठार", "बीड डोंगर"]
                },
                {
                  id: "st_gb_g07_01_04",
                  titleMr: "शंभू-महादेव डोंगररांग: महाबळेश्वरपासून सांगली-सोलापूरकडे विस्तार; भीमा व कृष्णा नदी खोऱ्यांचे जलविभाजक; औंध व खानापूर पठार",
                  titleEn: "Shambhu-Mahadev Range: Extends from Mahabaleshwar towards Sangli and Solapur; Water Divide between Bhima and Krishna River Basins",
                  chips: ["शंभू महादेव रांग", "भीमा-कृष्णा जलविभाजक", "खानापूर पठार", "जत डोंगर"]
                },
                {
                  id: "st_gb_g07_01_05",
                  titleMr: "जिल्हानिहाय स्थानिक टेकड्या: १) धुळे: गाळणा टेकड्या, २) जळगाव: हट्टी टेकड्या, ३) नांदेड: मुदखेड टेकड्या, ४) चंद्रपूर: पेरामागा व चिमूर टेकड्या, ५) गडचिरोली: भामरागड, सुरजागड, सिरकोंडा व टीपागड टेकड्या, ६) गोंदिया: दरकेसा टेकड्या",
                  titleEn: "District-Wise Local Hillocks: Galna (Dhule), Hatti (Jalgaon), Mudkhed (Nanded), Peramaga (Chandrapur), Surjagarh/Bhamragarh (Gadchiroli), Darekasa (Gondia)",
                  chips: ["गाळणा डोंगर धुळे", "मुदखेड नांदेड", "सुरजागड गडचिरोली", "भामरागड", "दरकेसा गोंदिया"]
                }
              ],
              sources: [
                { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण २: उपपर्वतरांगा व जलविभाजक" },
                { book: "महाराष्ट्राचा भूगोल", standard: "प्रा. अनिरुद्ध", chapterRef: "डोंगररांगा व पठारे" }
              ]
            }
          ]
        },
        {
          id: "gb_geog_c08",
          code: "G08",
          section: "C",
          slug: "drainage-system-of-maharashtra-godavari-bhima-krishna-tapi",
          nameMr: "महाराष्ट्राची जलप्रणाली: गोदावरी, भीमा, कृष्णा, तापी व कोकणातील नद्या",
          nameEn: "Drainage System of Maharashtra: Godavari, Bhima, Krishna, Tapi & Konkan Rivers",
          name: "महाराष्ट्राची जलप्रणाली (River Systems of Maharashtra)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 6,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_geog_c08",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_geog_c07",
          nextChapterId: "gb_geog_c09",
          metaDescriptionMr: "गोदावरी खोरे (४९.५%), भीमा खोरे, कृष्णा खोरे, तापी-पूर्णा खोरे, वैनगंगा-प्राणहिता प्रणाली, कोकणातील पश्चिमवाहिनी नद्या आणि संगम स्थळे.",
          metaDescriptionEn: "Exhaustive coverage of Maharashtra river systems: Godavari Basin (49.5% area), Bhima, Krishna, Tapi-Purna rift valley, Wainganga-Pranhita, Konkan west-flowing rivers, dams, and confluences.",
          notesJsonPath: "/data/notes/group_b/prelims/geography/c08_mh_drainage.json",
          quizTag: "gb_geog_mh_drainage_01",
          tags: ["Core", "Maharashtra Geography", "Godavari Basin", "Bhima River", "Krishna River", "Tapi Purna", "River Confluences", "Dams", "High-Weightage"],
          searchKeywords: ["godavari river maharashtra", "bhima river ujani dam", "krishna river koyna dam", "tapi purna basin", "pranhita river", "river confluences sangam", "गोदावरी खोरे", "भीमा नदी उजनी", "कृष्णा नदी कोयना", "तापी-पूर्णा", "प्राणहिता", "नदी संगम स्थळे"],
          topics: [
            {
              id: "top_gb_g08_01",
              nameMr: "महाराष्ट्रातील नदी प्रणाली, उपनद्या, संगम व जलप्रकल्प",
              nameEn: "River Basins, Tributary Networks, Confluences & Multi-Purpose Irrigation Projects",
              subtopics: [
                {
                  id: "st_gb_g08_01_01",
                  titleMr: "गोदावरी नदी खोरे: महाराष्ट्रातील सर्वात मोठे खोरे (४९.५% क्षेत्र); उगम: त्र्यंबकेश्वर (नाशिक); लांबी ६६८ किमी (महाराष्ट्रात); उपनद्या: दारणा, प्रवरा, मुळा, सिंदफणा, मांजरा (उजव्या तीरावरील); कादवा, शिवना, दुधना, पूर्णा, प्राणहिता (डाव्या तीरावरील); जायकवाडी धरण (नाथसागर)",
                  titleEn: "Godavari Basin: Largest Basin (49.5% Area, 668 km in MH); Origin at Trimbakeshwar; Pravara, Manjara, Purna, Pranhita tributaries & Jayakwadi Dam (Nathsagar)",
                  chips: ["गोदावरी त्र्यंबकेश्वर", "६६८ किमी लांबी", "४९.५ टक्के क्षेत्र", "जायकवाडी (नाथसागर)", "प्रवरा नदी", "मांजरा नदी"]
                },
                {
                  id: "st_gb_g08_01_02",
                  titleMr: "भीमा नदी खोरे: उगम: भीमाशंकर (पुणे); लांबी ४५१ किमी (महाराष्ट्रात); पंढरपूरजवळ चंद्रभागा नाव; उपनद्या: घोड, सीना, कुकडी, मुळा-मुठा, नीरा, इंद्रायणी, करहा; उजनी धरण (यशवंतसागर - सोलापूर) व वीर धरण",
                  titleEn: "Bhima Basin: Origin at Bhimashankar (451 km in MH), Known as Chandrabhaga at Pandharpur; Ghod, Sina, Nira, Mula-Mutha & Ujani Dam (Yashwantsagar)",
                  chips: ["भीमा नदी भीमाशंकर", "चंद्रभागा पंढरपूर", "उजनी धरण (यशवंतसागर)", "इंद्रायणी", "नीरा नदी"]
                },
                {
                  id: "st_gb_g08_01_03",
                  titleMr: "कृष्णा नदी खोरे: उगम: महाबळेश्वर (सातारा); लांबी २८२ किमी (महाराष्ट्रात); उपनद्या: कोयना, वेण्णा, येरळा, वारणा, पंचगंगा (पाच नद्या - कोल्हापूर), घटप्रभा, दूधगंगा; कोयना धरण (शिवसागर - महाराष्ट्राची भाग्यलक्ष्मी) व धोम धरण",
                  titleEn: "Krishna Basin: Origin at Mahabaleshwar (282 km in MH); Koyna, Venna, Yerla, Warna, Panchganga & Koyna Dam (Shivsagar - Lifeline of MH)",
                  chips: ["कृष्णा नदी महाबळेश्वर", "कोयना धरण (शिवसागर)", "महाराष्ट्राची भाग्यलक्ष्मी", "पंचगंगा नदी कोल्हापूर", "वारणा"]
                },
                {
                  id: "st_gb_g08_01_04",
                  titleMr: "तापी-पूर्णा खोरे (पश्चिमवाहिनी नदी): खचदरीतून वाहणारी; तापी उगम: मुलताई (मध्य प्रदेश), लांबी २०८ किमी (महाराष्ट्रात); पूर्णा उगम: बैतुल (सातपुडा); उपनद्या: गिरणा, बोरी, पांझरा, वाघूर; हतनूर धरण व सारंगखेडा बंधारा",
                  titleEn: "Tapi-Purna Rift Valley Basin (West Flowing): Tapi (208 km in MH) & Purna; Girna, Panjhra, Waghur tributaries & Hatnur Dam",
                  chips: ["तापी नदी खचदरी", "पूर्णा नदी", "गिरणा नदी", "हतनूर धरण", "सारंगखेडा"]
                },
                {
                  id: "st_gb_g08_01_05",
                  titleMr: "वैनगंगा व प्राणहिता नदी प्रणाली (विदर्भ): वैनगंगा (उगम मैकल रांग), वर्धा (उगम बेतुल), आणि पेंच, कन्हान; वर्धा व वैनगंगा संगमानंतर 'प्राणहिता' नाव; गोसीखुर्द धरण (इंदिरा सागर - भंडारा)",
                  titleEn: "Wainganga-Wardha-Pranhita System (Eastern Vidarbha): Wardha & Wainganga Confluence Forms 'Pranhita'; Goshikhurd Dam (Indirasagar)",
                  chips: ["वर्धा-वैनगंगा", "प्राणहिता नदी", "गोसीखुर्द प्रकल्प (भंडारा)", "पेंच नदी"]
                },
                {
                  id: "st_gb_g08_01_06",
                  titleMr: "कोकणातील पश्चिमवाहिनी नद्या: सह्याद्रीतून पश्चिमेकडे वेगाने वाहणाऱ्या नद्या (लांबी ४०-१५४ किमी); प्रमुख नद्या: वैतरणा (कोकणातील सर्वात लांबी १५४ किमी), उल्हास, सावित्री, कुंडलिका, वशिष्ठी, शास्त्री, तेरेखोल; जलविद्युत व खाड्यांची निर्मिती",
                  titleEn: "West-Flowing Konkan Rivers: Short & Torrential Streams; Vaitarna (Longest 154 km), Ulhas, Savitri, Kundalika, Vashishti, Shastri & Terekhol",
                  chips: ["वैतरणा नदी (सर्वात लांब १५४ किमी)", "उल्हास नदी", "सावित्री नदी", "वशिष्ठी", "कुंडलिका"]
                },
                {
                  id: "st_gb_g08_01_07",
                  titleMr: "महाराष्ट्रातील प्रमुख नदी संगम स्थळे (MPSC हमखास प्रश्न): १) गोदावरी व प्रवरा: टोके (नेवासे), २) गोदावरी व मांजरा: कुंडलवाडी, ३) भीमा व नीरा: नीरा-नरसिंगपूर, ४) भीमा व इंद्रायणी: तुळापूर, ५) कृष्णा व वेण्णा: माहुली (सातारा), ६) कृष्णा व कोयना: प्रीतीसंगम (कराड), ७) कृष्णा व पंचगंगा: नरसोबाची वाडी",
                  titleEn: "Famous Confluences (Sangam): Godavari-Pravara at Nevasa, Krishna-Koyna Preetisangam at Karad, Krishna-Panchganga at Narsobawadi",
                  chips: ["प्रीतीसंगम (कराड)", "नरसोबाची वाडी संगम", "टोके नेवासे संगम", "नीरा-नरसिंगपूर", "तुळापूर"]
                }
              ],
              sources: [
                { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण ३: महाराष्ट्राची जलप्रणाली" },
                { book: "महाराष्ट्राचा भूगोल", standard: "प्रा. अनिरुद्ध", chapterRef: "प्रकरण ३: नद्या व जलसंपदा" }
              ]
            }
          ]
        },
        {
          id: "gb_geog_c09",
          code: "G09",
          section: "C",
          slug: "climate-and-rainfall-distribution-of-maharashtra",
          nameMr: "महाराष्ट्राचे हवामान, पर्जन्य वितरण व दुष्काळी प्रदेश",
          nameEn: "Climate & Rainfall Distribution of Maharashtra: Drought & Rain-Shadow Zones",
          name: "महाराष्ट्राचे हवामान व पर्जन्य (Climate & Rainfall of Maharashtra)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_geog_c09",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_geog_c08",
          nextChapterId: "gb_geog_c10",
          metaDescriptionMr: "उष्णकटिबंधीय मान्सून हवामान, प्रतिरोध पर्जन्य, पर्जन्यछायेचा प्रदेश (पठारी मध्य भाग), आंबोलीतील सर्वाधिक पाऊस आणि अवर्षणग्रस्त जिल्हे.",
          metaDescriptionEn: "In-depth review of Maharashtra's climate: Tropical Monsoon regime, Orographic rainfall mechanics, Rain-Shadow Zone (Drought-prone belt of Desh), and seasonal shifts.",
          notesJsonPath: "/data/notes/group_b/prelims/geography/c09_mh_climate.json",
          quizTag: "gb_geog_mh_climate_01",
          tags: ["Core", "Maharashtra Geography", "Orographic Rainfall", "Rain Shadow Zone", "Amboli 750cm", "Drought Prone Districts", "High-Weightage"],
          searchKeywords: ["maharashtra climate", "orographic rainfall sahyadri", "rain shadow zone maharashtra", "amboli highest rainfall", "drought prone maharashtra", "महाराष्ट्राचे हवामान", "प्रतिरोध पाऊस", "पर्जन्यछायेचा प्रदेश", "आंबोली सर्वाधिक पाऊस", "अवर्षणग्रस्त भाग"],
          topics: [
            {
              id: "top_gb_g09_01",
              nameMr: "महाराष्ट्राचे हवामान, पर्जन्य स्वरूप आणि दुष्काळी पट्टा",
              nameEn: "Climatic Characteristics, Precipitation Dynamics & Drought Zones",
              subtopics: [
                {
                  id: "st_gb_g09_01_01",
                  titleMr: "हवामानाची वैशिष्ट्ये: उष्णकटिबंधीय मान्सून हवामान; कोकणात दमट व सम हवामान, सह्याद्रीवर थंड व आल्हाददायक, पठारावर विषम व कोरडे हवामान; तीन मुख्य ऋतू: उन्हाळा (मार्च-मे), पावसाळा (जून-सप्टें), हिवाळा (ऑक्टो-फेब्रु)",
                  titleEn: "Climatic Profile: Tropical Monsoon Type; Maritime Equable in Konkan, Cold on Ghats, Continental Semi-Arid on Plateau",
                  chips: ["उष्णकटिबंधीय मान्सून", "कोकण दमट हवामान", "पठारी विषम हवामान", "ऑक्टोबर हीट"]
                },
                {
                  id: "st_gb_g09_01_02",
                  titleMr: "प्रतिरोध पर्जन्य (Orographic Rainfall): अरबी समुद्रावरून येणारे नैऋत्य मान्सून वारे सह्याद्रीला अडल्यामुळे कोकणात व घाटमाथ्यावर मुसळधार पाऊस (२०० ते ६०० सेंमी); आंबोली (जि. सिंधुदुर्ग) - महाराष्ट्रातील चेरापुंजी (सुमारे ७५० सेंमी पाऊस)",
                  titleEn: "Orographic Rainfall Dynamics: Sahyadri Blocks Arabian Sea Branch; Heavy Rain on Ghats; Amboli (Highest in MH, ~750 cm)",
                  chips: ["प्रतिरोध पाऊस", "सह्याद्री अडथळा", "आंबोली सर्वाधिक पाऊस ७५० सेंमी", "महाबळेश्वर ६०० सेंमी"]
                },
                {
                  id: "st_gb_g09_01_03",
                  titleMr: "पर्जन्यछायेचा प्रदेश (Rain-Shadow Zone): सह्याद्री ओलांडल्यावर वाऱ्यांमधील बाष्प कमी होऊन घाटमाथ्याच्या पूर्वेस ५० ते ७० किमी रुंद पट्ट्यात अत्यंत कमी पाऊस (५० ते ६० सेंमी); अहमदनगर, सोलापूर, सांगली, बीड, उस्मानाबाद अवर्षणग्रस्त जिल्हे",
                  titleEn: "Rain-Shadow Belt: Adiabatic Warming on Leeward Slopes; 50-70 km Semi-Arid Belt (50-60 cm Rain) in Ahmednagar, Solapur, Beed",
                  chips: ["पर्जन्यछायेचा प्रदेश", "अहमदनगर दुष्काळ", "सोलापूर कमी पाऊस", "५० ते ६० सेंमी पाऊस"]
                },
                {
                  id: "st_gb_g09_01_04",
                  titleMr: "पूर्वेकडील पाऊस: पर्जन्यछायेच्या प्रदेशापुढे विदर्भाकडे जाताना बंगालच्या उपसागराच्या शाखेमुळे व स्थानिक अभिसरणामुळे पुन्हा पाऊस वाढतो (१०० ते १५० सेंमी - गडचिरोली व भंडारात जास्त पाऊस)",
                  titleEn: "Eastern Vidarbha Rainfall: Precipitation Increases Eastwards due to Bay of Bengal Branch Confluence (100-150 cm in Gadchiroli/Bhandara)",
                  chips: ["विदर्भातील पाऊस", "गडचिरोली १५० सेंमी पाऊस", "पूर्व-पश्चिम तफावत"]
                }
              ],
              sources: [
                { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण ४: हवामान व पर्जन्यमान" },
                { book: "महाराष्ट्राचा भूगोल", standard: "प्रा. अनिरुद्ध", chapterRef: "प्रकरण ४: हवामान" }
              ]
            }
          ]
        },
        {
          id: "gb_geog_c10",
          code: "G10",
          section: "C",
          slug: "soils-of-maharashtra-and-land-use",
          nameMr: "महाराष्ट्रातील मृदा (माती) प्रकार, धूप व जमीन वापर",
          nameEn: "Soils of Maharashtra: Classification, Erosion & Land-Use Patterns",
          name: "महाराष्ट्रातील मृदा प्रकार (Soils of Maharashtra)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 3,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_geog_c10",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_geog_c09",
          nextChapterId: "gb_geog_c11",
          metaDescriptionMr: "काळी रेगूर मृदा (बेसाल्टजन्य - ८५% भाग), तांबडी-पिवळी मृदा, जांभी मृदा (कोकण/सह्याद्री), गाळाची किनारपट्टी मृदा, मृदा धूप आणि जलसंधारण उपाय.",
          metaDescriptionEn: "In-depth review of Maharashtra's pedology: Black Regur Soil (Basaltic lava origin, Titanium Magnetite, cotton belt), Laterite Soil in Konkan, Red soils of Vidarbha, and soil degradation.",
          notesJsonPath: "/data/notes/group_b/prelims/geography/c10_mh_soils.json",
          quizTag: "gb_geog_mh_soils_01",
          tags: ["Core", "Maharashtra Geography", "Black Regur Soil", "Basalt Origin", "Laterite Soil", "Soil Erosion", "High-Weightage"],
          searchKeywords: ["soils of maharashtra", "black regur soil", "laterite soil konkan", "titanium magnetite", "cotton soil", "काळी रेगूर मृदा", "जांभी माती", "कापसाची काळी माती", "मृदा धूप", "जमीन वापर"],
          topics: [
            {
              id: "top_gb_g10_01",
              nameMr: "मृदा वर्गीकरण, गुणधर्म, वितरण आणि मृदा संवर्धन",
              nameEn: "Pedological Classification, Horizon Properties & Conservation",
              subtopics: [
                {
                  id: "st_gb_g10_01_01",
                  titleMr: "काळी रेगूर मृदा (Black Cotton Soil): महाराष्ट्राच्या सुमारे ८०-८५% भागात विस्तार; बेसाल्ट खडकाच्या विदारणातून निर्मिती; टायटॅनिफेरस मॅग्नेटाईटमुळे काळा रंग; पाणी धरून ठेवण्याची उच्च क्षमता; कापूस, ज्वारी व उसासाठी सर्वोत्तम",
                  titleEn: "Black Regur Soil: Covers 80-85% of MH; Formed by Weathering of Basalt; Black Color from Titaniferous Magnetite; High Moisture Retention",
                  chips: ["काळी रेगूर मृदा", "टायटॅनिफेरस मॅग्नेटाईट", "ओलावा टिकवणे", "कापूस शेती", "८०-८५ टक्के क्षेत्र"]
                },
                {
                  id: "st_gb_g10_01_02",
                  titleMr: "जांभी मृदा (Laterite Soil): अतिपावसाच्या प्रदेशात (कोकण - रत्नागिरी, सिंधुदुर्ग; कोल्हापूर व महाबळेश्वर); लीचिंग (निक्षालन) प्रक्रियेमुळे सिलिका वाहून जाते; लोह व ॲल्युमिनियमचे प्रमाण जास्त; काजू, आंबा (हापूस) व मसाल्यांसाठी उपयुक्त",
                  titleEn: "Laterite Soil: High Leaching in Heavy Rainfall Zones (Ratnagiri, Sindhudurg, Mahabaleshwar); Rich in Iron & Aluminium; Cashew & Alphonso Mangoes",
                  chips: ["जांभी मृदा (Laterite)", "निक्षालन प्रक्रिया (Leaching)", "रत्नागिरी-सिंधुदुर्ग", "हापूस आंबा व काजू"]
                },
                {
                  id: "st_gb_g10_01_03",
                  titleMr: "तांबडी व पिवळसर मृदा: प्राचीन रूपांतरित खडकांपासून (आर्कियन व विंध्यन); पूर्व विदर्भ (गोंदिया, भंडारा, गडचिरोली, चंद्रपूर); लोह ऑक्साईडमुळे तांबडा रंग; भात/तांदूळ पिकासाठी पोषक",
                  titleEn: "Red & Yellowish Soils: Formed from Archaean/Metamorphic Rocks in Eastern Vidarbha (Gondia, Bhandara, Gadchiroli); Paddy Cultivation",
                  chips: ["तांबडी मृदा", "पूर्व विदर्भ", "आर्कियन खडक", "भात शेती"]
                },
                {
                  id: "st_gb_g10_01_04",
                  titleMr: "गाळाची मृदा व किनारपट्टीची खारवट मृदा: नद्यांच्या पूरमैदानांत (गोदावरी, तापी खोऱ्यात सुपीक गाळ) व कोकण किनारपट्टीच्या खाड्यांजवळील खारफुटीयुक्त दलदलीची मृदा",
                  titleEn: "Alluvial & Coastal Saline Soils: River Basin Floodplains (Tapi, Godavari) & Mangrove Swamp Mud in Coastal Konkan",
                  chips: ["गाळाची मृदा", "नदी पूरमैदाने", "खारवट मृदा कोकण"]
                }
              ],
              sources: [
                { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण ५: महाराष्ट्रातील मृदा" },
                { book: "महाराष्ट्राचा भूगोल", standard: "प्रा. अनिरुद्ध", chapterRef: "मृदा व कृषी उपयुक्तता" }
              ]
            }
          ]
        },
        {
          id: "gb_geog_c11",
          code: "G11",
          section: "C",
          slug: "natural-vegetation-forests-and-wildlife-sanctuaries-maharashtra",
          nameMr: "महाराष्ट्रातील वने, वनस्पती व वन्यजीव अभयारण्ये / राष्ट्रीय उद्याने",
          nameEn: "Forests, Natural Vegetation & Wildlife Sanctuaries of Maharashtra",
          name: "महाराष्ट्रातील वने व वन्यजीव (Forests & Wildlife of Maharashtra)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 5,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_geog_c11",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_geog_c10",
          nextChapterId: "gb_geog_c12",
          metaDescriptionMr: "महाराष्ट्रातील वनांचे ५ प्रकार (सदाहरित, पानझडी, काटेरी), ६ राष्ट्रीय उद्याने, व्याघ्र प्रकल्प (मेळघाट, ताडोबा, पेंच), आणि रामसर पाणथळ स्थळे.",
          metaDescriptionEn: "In-depth review of Maharashtra's 5 forest zones, 6 National Parks, 6 Tiger Reserves (Tadoba, Melghat, Pench), Ramsar sites (Lonar, Nandur Madhmeshwar, Thane Creek), and state symbols.",
          notesJsonPath: "/data/notes/group_b/prelims/geography/c11_mh_forests_wildlife.json",
          quizTag: "gb_geog_mh_forests_01",
          tags: ["Core", "Maharashtra Geography", "National Parks 6", "Tiger Reserves 6", "Ramsar Sites", "Tadoba", "Melghat", "High-Weightage"],
          searchKeywords: ["forests of maharashtra", "6 national parks maharashtra", "tiger reserves melghat tadoba pench", "ramsar sites lonar nandur madhmeshwar", "shekru state animal", "महाराष्ट्रातील वने", "६ राष्ट्रीय उद्याने", "व्याघ्र प्रकल्प", "ताडोबा", "मेळघाट", "रामसर स्थळे लोणार"],
          topics: [
            {
              id: "top_gb_g11_01",
              nameMr: "वनप्रकार, जैवविविधता, राष्ट्रीय उद्याने व व्याघ्र प्रकल्प",
              nameEn: "Forest Formations, Biodiversity, National Parks & Tiger Reserves",
              subtopics: [
                {
                  id: "st_gb_g11_01_01",
                  titleMr: "वनांचे ५ प्रमुख प्रकार: १) उष्णकटिबंधीय निम-सदाहरित वने (महाबळेश्वर, माथेरान, आंबोली - जांभूळ, अंजन, हिरडा), २) उष्णकटिबंधीय आर्द्र पानझडी (विदर्भ व कोकण - सागवान, बांबू), ३) उष्णकटिबंधीय शुष्क पानझडी (पठार - धावडा, खैर, तेंडू), ४) काटेरी वने (अवर्षण पट्टा - बाभूल, बोर, निवडुंग), ५) खारफुटी वने (कोकण किनारा)",
                  titleEn: "5 Forest Types: Semi-Evergreen, Moist Deciduous, Dry Deciduous, Thorny-Shrub & Mangrove Forests",
                  chips: ["निम-सदाहरित वने", "आर्द्र पानझडी (सागवान)", "शुष्क पानझडी", "काटेरी वने", "खारफुटी"]
                },
                {
                  id: "st_gb_g11_01_02",
                  titleMr: "महाराष्ट्रातील ६ राष्ट्रीय उद्याने (National Parks): १) ताडोबा (चंद्रपूर - पहिले राष्ट्रीय उद्यान १९५५), २) संजय गांधी / बोरीवली (मुंबई उपनगर/ठाणे), ३) पंडित जवाहरलाल नेहरू / पेंच (नागपूर), ४) नवेगाव (गोंदिया), ५) गुगामल (अमरावती - मेळघाट), ६) चांदोली (सांगली, सातारा, कोल्हापूर, रत्नागिरी)",
                  titleEn: "6 National Parks in MH: Tadoba (Oldest 1955), Sanjay Gandhi Borivali, Pench (Nagpur), Navegaon (Gondia), Gugamal (Melghat), Chandoli",
                  chips: ["ताडोबा राष्ट्रीय उद्यान १९५५", "संजय गांधी बोरीवली", "पेंच नागपूर", "नवेगाव गोंदिया", "गुगामल अमरावती", "चांदोली"]
                },
                {
                  id: "st_gb_g11_01_03",
                  titleMr: "महाराष्ट्रातील ६ व्याघ्र प्रकल्प (Tiger Reserves): १) मेळघाट (अमरावती - महाराष्ट्रातील पहिला १९७३-७४), २) ताडोबा-अंधारी (चंद्रपूर), ३) पेंच (नागपूर), ४) सह्याद्री (चांदोली-कोयना), ५) नवेगाव-नागझिरा (गोंदिया), ६) बोर (वर्धा - देशातील सर्वात लहान व्याघ्र प्रकल्प)",
                  titleEn: "6 Tiger Reserves: Melghat (1st Project Tiger 1973-74), Tadoba-Andhari, Pench, Sahyadri, Navegaon-Nagzira & Bor (Wardha - Smallest in India)",
                  chips: ["मेळघाट (पहिला व्याघ्र प्रकल्प)", "ताडोबा-अंधारी", "बोर व्याघ्र प्रकल्प (सर्वात लहान)", "सह्याद्री व्याघ्र प्रकल्प"]
                },
                {
                  id: "st_gb_g11_01_04",
                  titleMr: "महाराष्ट्रातील ३ रामसर पाणथळ स्थळे (Ramsar Sites): १) नांदूर मध्यमेश्वर (जि. नाशिक - महाराष्ट्राचे भरतपूर, पहिले रामसर स्थळ २०१९), २) लोणार उल्का सरोवर (जि. बुलढाणा - २०२०), ३) ठाणे खाडी फ्लेमिंगो अभयारण्य (२०२२)",
                  titleEn: "3 Ramsar Wetland Sites: Nandur Madhmeshwar (Nashik, 1st in 2019), Lonar Meteorite Crater Lake (2020), and Thane Creek (2022)",
                  chips: ["नांदूर मध्यमेश्वर (महाराष्ट्राचे भरतपूर)", "लोणार सरोवर (उल्कापात)", "ठाणे खाडी फ्लेमिंगो", "रामसर स्थळे"]
                },
                {
                  id: "st_gb_g11_01_05",
                  titleMr: "महाराष्ट्राची राज्य प्रतीके व प्रमुख अभयारण्ये: राज्य प्राणी: शेकरू (मोठी खार - भीमाशंकर अभयारण्य), राज्य पक्षी: हरियाल (हळद्या/पिवळ्या पायांचे हॅरोन), राज्य फूल: ताम्हण/जारूल, राज्य वृक्ष: आंबा; मालवण सागरी अभयारण्य, मयूरेश्वर सुपे, राधानगरी (गवे)",
                  titleEn: "State Symbols & Noted Sanctuaries: Shekru (Giant Squirrel - Bhimashankar), Hariyal (Pigeon), Jarul Flower; Radhanagari (Bison), Malvan Marine",
                  chips: ["शेकरू (भीमाशंकर)", "हरियाल राज्य पक्षी", "ताम्हण राज्य फूल", "राधानगरी गवे अभयारण्य", "मालवण सागरी उद्यान"]
                }
              ],
              sources: [
                { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण ६: वने व वन्यजीव संपदा" },
                { book: "महाराष्ट्र वन विभाग अधिकृत आकडेवारी", standard: "Mahaforest", chapterRef: "राष्ट्रीय उद्याने व व्याघ्र प्रकल्प अहवाल" }
              ]
            }
          ]
        },


        // =========================================================================
        // विभाग D — महाराष्ट्राचा आर्थिक व मानवी भूगोल (Economic & Human Geography)
        // =========================================================================
        {
          id: "gb_geog_c12",
          code: "G12",
          section: "D",
          slug: "mineral-resources-and-energy-in-maharashtra",
          nameMr: "महाराष्ट्रातील खनिजे, खाणकाम व ऊर्जा प्रकल्प",
          nameEn: "Mineral Resources, Mining & Energy Projects in Maharashtra",
          name: "महाराष्ट्रातील खनिजे व ऊर्जा (Minerals & Energy of Maharashtra)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_geog_c12",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_geog_c11",
          nextChapterId: "gb_geog_c13",
          metaDescriptionMr: "महाराष्ट्रातील खनिज पट्टे (पूर्व विदर्भ व दक्षिण कोकण), दगडी कोळसा, बॉक्साईट, मँगनीज, लोहखनिज, बॉम्बे हाय, औष्णिक, जलविद्युत व अणुऊर्जा प्रकल्प.",
          metaDescriptionEn: "In-depth review of mineral belts (Eastern Vidarbha & South Konkan), Coal, Bauxite, Manganese, Iron Ore, Bombay High, Thermal, Hydroelectric (Koyna), and Nuclear (Tarapur) power.",
          notesJsonPath: "/data/notes/group_b/prelims/geography/c12_mh_minerals_energy.json",
          quizTag: "gb_geog_mh_minerals_01",
          tags: ["Core", "Maharashtra Geography", "Minerals", "Coal Chandrapur", "Bauxite Kolhapur", "Tarapur Nuclear", "Koyna Hydro", "High-Weightage"],
          searchKeywords: ["minerals of maharashtra", "coal chandrapur wani", "bauxite kolhapur", "manganese nagpur bhandara", "iron ore gadchiroli surjagarh", "tarapur atomic station 1969", "koyna hydroelectric", "खनिजे", "दगडी कोळसा", "बॉक्साईट", "मँगनीज", "तारापूर अणुऊर्जा", "कोयना जलविद्युत"],
          topics: [
            {
              id: "top_gb_g12_01",
              nameMr: "खनिज संपत्तीचे वितरण, खाणी आणि ऊर्जा निर्मिती केंद्र",
              nameEn: "Geographic Distribution of Minerals, Mines & Energy Grids",
              subtopics: [
                {
                  id: "st_gb_g12_01_01",
                  titleMr: "खनिज संपत्तीचे दोन प्रमुख पट्टे: १) पूर्व विदर्भ (चंद्रपूर, गडचिरोली, नागपूर, भंडारा, गोंदिया - कोळसा, लोह, मँगनीज), २) दक्षिण कोकण (सिंधुदुर्ग, रत्नागिरी, कोल्हापूर - बॉक्साईट, लोह); महाराष्ट्राचा मध्य भाग (पठार) बेसाल्टमुळे खनिजविरहित",
                  titleEn: "Two Major Mineral Belts: Eastern Vidarbha (Coal, Iron, Manganese) & South Konkan (Bauxite, Iron); Central Basalt Plateau is Mineral-Deficient",
                  chips: ["पूर्व विदर्भ खनिज पट्टा", "दक्षिण कोकण खनिज पट्टा", "बेसाल्ट खनिजविरहित"]
                },
                {
                  id: "st_gb_g12_01_02",
                  titleMr: "प्रमुख खनिजे व जिल्हे: १) दगडी कोळसा (गोंडवाना खडक - बल्लारपूर, वणी, उमरेड, सावनेर), २) बॉक्साईट (जांभा खडक - कोल्हापूर, रायगड, रत्नागिरी), ३) मँगनीज (सावनेर, रामटेक, तुमसर - आशियातील सर्वात मोठी मोपेक खाण), ४) लोहखनिज (सुरजागड - गडचिरोली, रेडी बंदर - सिंधुदुर्ग)",
                  titleEn: "Key Minerals: Coal (Gondwana Rocks - Ballarpur, Umred), Bauxite (Kolhapur, Raigad), Manganese (Tumsar, Ramtek), Iron Ore (Surjagarh, Redi Port)",
                  chips: ["दगडी कोळसा (बल्लारपूर)", "बॉक्साईट (कोल्हापूर)", "मँगनीज (तुमसर भंडारा)", "लोहखनिज (सुरजागड गडचिरोली)", "रेडी बंदर"]
                },
                {
                  id: "st_gb_g12_01_03",
                  titleMr: "खनिज तेल व नैसर्गिक वायू: बॉम्बे हाय (मुंबई किनारपट्टीपासून अरबी समुद्रात १७६ किमी - १९७४ शोध, 'सागर सम्राट' ड्रिलिंग प्लॅटफॉर्म) व वसई हाय",
                  titleEn: "Petroleum & Natural Gas: Bombay High (176 km off Mumbai Coast, discovered in 1974, Sagar Samrat Platform) & Bassein Gas Field",
                  chips: ["बॉम्बे हाय १९७४", "सागर सम्राट", "ONGC", "खनिज तेल"]
                },
                {
                  id: "st_gb_g12_01_04",
                  titleMr: "ऊर्जा प्रकल्प: १) अणुऊर्जा: तारापूर (पालघर - भारतातील पहिले अणुऊर्जा केंद्र १९६९ - अप्सरा, तारापूर), २) जलविद्युत: खोपोली (पहिले जलविद्युत), कोयना (सर्वात मोठे जलविद्युत केंद्र), ३) औष्णिक ऊर्जा: कोराडी, खापरखेडा (नागपूर), पारस (अकोला), तुर्भे (मुंबई), ४) पवनऊर्जा: चाळकेवाडी (सातारा)",
                  titleEn: "Energy Stations: Tarapur Atomic Power Station (1969, India's 1st), Koyna Hydroelectric Project, Thermal (Koradi, Paras) & Wind Power (Chalkewadi)",
                  chips: ["तारापूर अणुऊर्जा १९६९", "खोपोली जलविद्युत", "कोयना जलविद्युत", "कोराडी औष्णिक", "चाळकेवाडी पवनऊर्जा"]
                }
              ],
              sources: [
                { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण ७: खनिजे व ऊर्जा साधने" },
                { book: "महाराष्ट्राचा भूगोल", standard: "प्रा. अनिरुद्ध", chapterRef: "खनिज संपत्ती" }
              ]
            }
          ]
        },
        {
          id: "gb_geog_c13",
          code: "G13",
          section: "D",
          slug: "agriculture-irrigation-and-animal-husbandry-maharashtra",
          nameMr: "महाराष्ट्रातील शेती, प्रमुख पिके, सिंचन व फलोत्पादन",
          nameEn: "Agriculture, Major Crops, Irrigation & Horticulture in Maharashtra",
          name: "महाराष्ट्रातील शेती व पिके (Agriculture & Crops of Maharashtra)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_geog_c13",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_geog_c12",
          nextChapterId: "gb_geog_c14",
          metaDescriptionMr: "खरीप व रब्बी पिके, ज्वारी (मालदांडी), कापूस (पांढरे सोने), ऊस शेती, फळबागा (हापूस आंबा, द्राक्षे, संत्री, डाळिंब) आणि विहीर व ठिबक सिंचन.",
          metaDescriptionEn: "In-depth review of Maharashtra's agricultural patterns: Kharif and Rabi cycles, Jowar, Cotton (White Gold), Sugarcane, Horticulture belts (Grapes, Oranges, Pomegranates), and Well irrigation.",
          notesJsonPath: "/data/notes/group_b/prelims/geography/c13_mh_agriculture.json",
          quizTag: "gb_geog_mh_agri_01",
          tags: ["Core", "Maharashtra Geography", "Agriculture", "Jowar", "Cotton", "Sugarcane", "Horticulture", "Irrigation", "High-Weightage"],
          searchKeywords: ["agriculture in maharashtra", "jowar solapur", "cotton khandesh vidarbha", "sugarcane western maharashtra", "nagpur oranges", "nashik grapes", "शेती व पिके", "ज्वारी सोलापूर", "कापूस पांढरे सोने", "ऊस शेती", "नाशिक द्राक्षे", "नागपूर संत्री"],
          topics: [
            {
              id: "top_gb_g13_01",
              nameMr: "पिकांची रचना, फलोत्पादन पट्टे आणि जलसिंचन साधने",
              nameEn: "Cropping Patterns, Horticultural Belts & Irrigation Facilities",
              subtopics: [
                {
                  id: "st_gb_g13_01_01",
                  titleMr: "हंगाम व प्रमुख अन्नधान्य पिके: १) खरीप (पावसाळी - भात, बाजरी, सोयाबीन, तूर), २) रब्बी (हिवाळी - गहू, हरभरा); ज्वारी: महाराष्ट्राचे प्रमुख अन्नधान्य (सोलापूर - ज्वारीचे कोठार, मालदांडी वाण), बाजरी (अहमदनगर), भात (कोकण व पूर्व विदर्भ)",
                  titleEn: "Seasons & Foodgrain Staples: Kharif vs Rabi; Jowar (Solapur is Granary of Jowar, Maldandi Variety), Bajra (Ahmednagar), Rice (Konkan/Vidarbha)",
                  chips: ["ज्वारी (सोलापूर कोठार)", "मालदांडी वाण", "बाजरी अहमदनगर", "भात शेती", "सोयाबीन"]
                },
                {
                  id: "st_gb_g13_01_02",
                  titleMr: "प्रमुख नगदी पिके (Cash Crops): १) कापूस: 'पांढरे सोने' (खानदेश व विदर्भ - यवतमाळ पांढरे सोने पिकवणारा जिल्हा), २) ऊस: पश्चिम महाराष्ट्र (कोल्हापूर, सांगली, पुणे, अहमदनगर - सहकारी साखर कारखानदारी), ३) तंबाखू: कोल्हापूर (निपाणी सीमा)",
                  titleEn: "Commercial Cash Crops: Cotton ('White Gold' in Vidarbha/Khandesh, Yavatmal District), Sugarcane (Western Maharashtra Cooperative Belt) & Tobacco",
                  chips: ["कापूस (पांढरे सोने)", "यवतमाळ कापूस", "ऊस शेती (कोल्हापूर)", "साखर कारखानदारी"]
                },
                {
                  id: "st_gb_g13_01_03",
                  titleMr: "महाराष्ट्रातील फलोत्पादन (GI मानांकन प्राप्त फळे): १) आंबा: हापूस (रत्नागिरी, देवगड), २) संत्री: नागपूर व अमरावती, ३) द्राक्षे: नाशिक (भारताची वाईन कॅपिटल) व सांगली, ४) डाळिंब: सोलापूर व सांगली (भगवा वाण), ५) केळी: जळगाव (केळीचे आगार), ६) काजू: वेंगुर्ला, ७) अंजीर: राजेवाडी (पुणे), ८) चिकू: घोलवड (पालघर)",
                  titleEn: "Horticulture & GI Tag Fruits: Alphonso (Ratnagiri/Devgad), Oranges (Nagpur), Grapes (Nashik Wine Capital), Bananas (Jalgaon), Figs (Rajewadi), Chikoo (Gholvad)",
                  chips: ["हापूस आंबा देवगड", "नागपूर संत्री", "द्राक्षे नाशिक (Wine Capital)", "केळी जळगाव", "अंजीर राजेवाडी", "चिकू घोलवड"]
                },
                {
                  id: "st_gb_g13_01_04",
                  titleMr: "सिंचन पद्धती: विहीर सिंचन (महाराष्ट्रात सर्वाधिक सुमारे ५५-६०% क्षेत्र), कालवा सिंचन (पश्चिम महाराष्ट्र), तलाव सिंचन (मालगुजारी तलाव - पूर्व विदर्भ: भंडारा, गोंदिया), आणि ठिबक/तुषार सूक्ष्म सिंचन",
                  titleEn: "Irrigation Systems: Well Irrigation (Dominant 55-60%), Canals (Western MH), Tanks (Malguzari Tanks in Bhandara/Gondia) & Micro-Drip Systems",
                  chips: ["विहीर सिंचन (सर्वाधिक ५५-६०%)", "कालवा सिंचन", "मालगुजारी तलाव (भंडारा-गोंदिया)", "ठिबक सिंचन"]
                }
              ],
              sources: [
                { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण ८: कृषी व जलसिंचन" },
                { book: "महाराष्ट्राचा आर्थिक पाहणी अहवाल", standard: "महाराष्ट्र शासन", chapterRef: "कृषी व संलग्न क्षेत्रे" }
              ]
            }
          ]
        },
        {
          id: "gb_geog_c14",
          code: "G14",
          section: "D",
          slug: "industries-and-industrial-regions-of-maharashtra",
          nameMr: "महाराष्ट्रातील उद्योग, साखर कारखाने, वस्त्रोद्योग व औद्योगिक पट्टे",
          nameEn: "Industries, Industrial Belts, Sugar & Textile Hubs of Maharashtra",
          name: "महाराष्ट्रातील उद्योग व औद्योगिक पट्टे (Industries of Maharashtra)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_geog_c14",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_geog_c13",
          nextChapterId: "gb_geog_c15",
          metaDescriptionMr: "MIDC (१९६२), मुंबई-पुणे औद्योगिक पट्टा, कापड गिरण्या (इचलकरंजी - महाराष्ट्राचे मँचेस्टर), साखर कारखाने (प्रवरानगर - विखे पाटील), आणि ऑटोमोबाईल हब.",
          metaDescriptionEn: "In-depth review of industrial geography: MIDC (1962), Mumbai-Pune industrial corridor, textile hubs (Ichalkaranji - Manchester of MH), cooperative sugar factories, and automobile clusters.",
          notesJsonPath: "/data/notes/group_b/prelims/geography/c14_mh_industries.json",
          quizTag: "gb_geog_mh_industry_01",
          tags: ["Core", "Maharashtra Geography", "Industries", "MIDC 1962", "Ichalkaranji Manchester", "Sugar Cooperatives", "Automobile Hub", "High-Weightage"],
          searchKeywords: ["industries maharashtra", "midc 1962", "mumbai pune industrial region", "ichalkaranji manchester of maharashtra", "first cooperative sugar mill pravaranagar", "automobile chakan pimpri", "उद्योग", "MIDC", "इचलकरंजी महाराष्ट्राचे मँचेस्टर", "प्रवरानगर साखर कारखाना", "चाकण ऑटोमोबाईल"],
          topics: [
            {
              id: "top_gb_g14_01",
              nameMr: "औद्योगिक प्रदेश, कृषी-आधारित उद्योग आणि उत्पादन केंद्रे",
              nameEn: "Industrial Corridors, Agro-Based Industries & Manufacturing Clusters",
              subtopics: [
                {
                  id: "st_gb_g14_01_01",
                  titleMr: "महाराष्ट्र औद्योगिक विकास महामंडळ (MIDC - स्थापना १ ऑगस्ट १९६२): उद्दिष्टे, औद्योगिक वसाहती, सेझ (SEZ) धोरण आणि उद्योगस्नेही पायाभूत सुविधा",
                  titleEn: "MIDC (Established 1 Aug 1962): Industrial Estates, SEZ Policies & Infrastructure Dispersal",
                  chips: ["MIDC १ ऑगस्ट १९६२", "औद्योगिक वसाहती", "SEZ विशेष आर्थिक क्षेत्र"]
                },
                {
                  id: "st_gb_g14_01_02",
                  titleMr: "प्रमुख औद्योगिक पट्टे: १) मुंबई-ठाणे-पुणे पट्टा (राज्यातील सर्वात प्रगत - पेट्रोकेमिकल्स, फार्मास्युटिकल्स, ऑटोमोबाईल्स, IT), २) नागपूर-वर्धा पट्टा, ३) कोल्हापूर-सोलापूर पट्टा, ४) छत्रपती संभाजीनगर-नाशिक कॉरिडॉर",
                  titleEn: "Major Industrial Corridors: Mumbai-Thane-Pune Axis (Petrochemicals, Pharma, Auto, IT), Nagpur Belt, Aurangabad-Nashik Axis",
                  chips: ["मुंबई-पुणे औद्योगिक कॉरिडॉर", "चाकण ऑटो हब", "हिंजवडी IT पार्क", "वाळूज छत्रपती संभाजीनगर"]
                },
                {
                  id: "st_gb_g14_01_03",
                  titleMr: "वस्त्रोद्योग: भारतातील पहिली आधुनिक कापड गिरणी (मुंबई १८५४ - कावसजी दावर / बॉम्बे स्पिनिंग अँड विव्हिंग कंपनी); इचलकरंजी (जि. कोल्हापूर) - 'महाराष्ट्राचे मँचेस्टर'; सोलापूरची चादर (GI टॅग), पैठणी साडी (पैठण, येवला)",
                  titleEn: "Textile Sector: First Cotton Mill in Bombay (1854 by Cowasjee Dawar); Ichalkaranji ('Manchester of Maharashtra'); Solapur Chaddar & Paithani Sarees",
                  chips: ["पहिली कापड गिरणी १८५४ कावसजी दावर", "इचलकरंजी (महाराष्ट्राचे मँचेस्टर)", "सोलापूर चादर", "येवला पैठणी"]
                },
                {
                  id: "st_gb_g14_01_04",
                  titleMr: "साखर उद्योग: आशियातील पहिला सहकारी साखर कारखाना: प्रवरानगर / लोणी (जि. अहमदनगर - १९४९/५० - विठ्ठलराव विखे पाटील व डॉ. धनंजयराव गाडगीळ); साखर उत्पादनात पश्चिम महाराष्ट्राचे स्थान; उप-उत्पादने: इथेनॉल, वीज निर्मिती व मोलॅसेस",
                  titleEn: "Sugar Industry: Asia's First Cooperative Sugar Factory at Pravaranagar (1949-50 by Vitthalrao Vikhe Patil & Dhananjayan Gadgil); Byproducts: Ethanol & Bagasse",
                  chips: ["प्रवरानगर पहिला सहकारी साखर कारखाना १९४९", "विखे पाटील व गाडगीळ", "इथेनॉल निर्मिती", "ऊस उप-उत्पादने"]
                }
              ],
              sources: [
                { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण ९: उद्योगधंदे व औद्योगिक विकास" },
                { book: "महाराष्ट्राचा आर्थिक पाहणी अहवाल", standard: "उद्योग संचालनालय", chapterRef: "उद्योग व गुंतवणूक" }
              ]
            }
          ]
        },
        {
          id: "gb_geog_c15",
          code: "G15",
          section: "D",
          slug: "transport-communication-and-tourism-in-maharashtra",
          nameMr: "महाराष्ट्रातील वाहतूक, दळणवळण, बंदरे व पर्यटन भूगोल",
          nameEn: "Transportation, Communication, Ports & Tourism Geography in Maharashtra",
          name: "वाहतूक, बंदरे व पर्यटन (Transport, Ports & Tourism of Maharashtra)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_geog_c15",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_geog_c14",
          nextChapterId: "gb_geog_c16",
          metaDescriptionMr: "रेल्वे वाहतूक (पहिली रेल्वे १८५३, मध्य व पश्चिम रेल्वे मुख्यालय, कोकण रेल्वे), समृद्धी महामार्ग, सागरी बंदरे (JNPT, मुंबई बंदर), विमानतळ आणि पर्यटन केंद्रे.",
          metaDescriptionEn: "In-depth review of transportation: First train (1853), Central & Western Railway HQs, Konkan Railway (1998), Samruddhi Mahamarg, JNPT port, and UNESCO tourism destinations.",
          notesJsonPath: "/data/notes/group_b/prelims/geography/c15_mh_transport_tourism.json",
          quizTag: "gb_geog_mh_transport_01",
          tags: ["Core", "Maharashtra Geography", "Railways 1853", "Konkan Railway", "Samruddhi Expressway", "JNPT Port", "Tourism UNESCO", "High-Weightage"],
          searchKeywords: ["transport in maharashtra", "first train 1853 boribunder thane", "konkan railway 1998 e sreedharan", "samruddhi expressway hindu hrudaysamrat", "jnpt nhava sheva", "unesco ajanta ellora", "वाहतूक", "पहिली रेल्वे १८५३", "कोकण रेल्वे", "समृद्धी महामार्ग", "JNPT बंदर", "अजिंठा वेरूळ पर्यटन"],
          topics: [
            {
              id: "top_gb_g15_01",
              nameMr: "रस्ते, रेल्वे, जलवाहतूक, हवाई वाहतूक आणि पर्यटन भूगोल",
              nameEn: "Roads, Rail Networks, Maritime Ports, Aviation & Tourism Geography",
              subtopics: [
                {
                  id: "st_gb_g15_01_01",
                  titleMr: "रेल्वे वाहतूक: भारतातील पहिली प्रवासी रेल्वे: १६ एप्रिल १८५३ (बोरीबंदर ते ठाणे - ३४ किमी लांबी, तीन इंजिने: सिंध, सुलतान, साहिब); रेल्वे झोन मुख्यालये: १) मध्य रेल्वे (CSMT मुंबई), २) पश्चिम रेल्वे (चर्चगेट मुंबई); कोकण रेल्वे (२६ जानेवारी १९९८ पूर्ण - रोहा ते तोकूर ७४१ किमी, ई. श्रीधरन योगदान, कारबुडे बोगदा ६.५ किमी)",
                  titleEn: "Railways: First Train on 16 April 1853 (Bori Bunder to Thane, 34 km); Central Railway (CSMT) & Western Railway (Churchgate) HQs; Konkan Railway (1998, 741 km, Karbude Tunnel)",
                  chips: ["पहिली रेल्वे १६ एप्रिल १८५३ (३४ किमी)", "सिंध सुलतान साहिब", "मध्य रेल्वे CSMT", "पश्चिम रेल्वे चर्चगेट", "कोकण रेल्वे १९९८", "कारबुडे बोगदा"]
                },
                {
                  id: "st_gb_g15_01_02",
                  titleMr: "रस्ते वाहतूक व द्रुतगती महामार्ग: मुंबई-पुणे एक्सप्रेसवे (भारतातील पहिला ६ पदरी - २००२), हिंदुहृदयसम्राट बाळासाहेब ठाकरे समृद्धी महामार्ग (नागपूर ते मुंबई - ७०१ किमी लांबी, १० जिल्ंहे जोडणारा), अटल सेतू / MTHL (२१.८ किमी - भारतातील सर्वात लांब सागरी पूल)",
                  titleEn: "Expressways & Highways: Mumbai-Pune Expressway, Samruddhi Mahamarg (Nagpur-Mumbai 701 km across 10 districts), Atal Setu / MTHL (21.8 km Sea Bridge)",
                  chips: ["समृद्धी महामार्ग ७०१ किमी", "मुंबई-पुणे एक्सप्रेसवे", "अटल सेतू MTHL २१.८ किमी", "राष्ट्रीय महामार्ग (NH)"]
                },
                {
                  id: "st_gb_g15_01_03",
                  titleMr: "जलवाहतूक व सागरी बंदरे: १) मुंबई बंदर: देशातील सर्वात मोठे नैसर्गिक बंदर (भारताचे प्रवेशद्वार), २) जवाहरलाल नेहरू बंदर (JNPT / न्हावा शेवा - देशातील सर्वात मोठे कंटेनर बंदर), ३) मध्यम व लहान बंदरे (दिघी, जयगड, रेडी, विजयदुर्ग बंदर)",
                  titleEn: "Seaports: Mumbai Port (Natural Harbor), JNPT Nhava Sheva (Premier Container Port), Minor Ports (Dighi, Jaigad, Redi)",
                  chips: ["मुंबई नैसर्गिक बंदर", "JNPT न्हावा शेवा", "कंटेनर बंदर", "रेडी लोहखनिज बंदर"]
                },
                {
                  id: "st_gb_g15_01_04",
                  titleMr: "हवाई वाहतूक व आंतरराष्ट्रीय विमानतळ: छत्रपती शिवाजी महाराज आंतरराष्ट्रीय विमानतळ (मुंबई), डॉ. बाबासाहेब आंबेडकर आंतरराष्ट्रीय विमानतळ (नागपूर - मिहान प्रकल्प/MIHAN), पुणे, शिर्डी व नवी मुंबई आंतरराष्ट्रीय विमानतळ (NMIA)",
                  titleEn: "Airports: CSMIA Mumbai, Dr. Babasaheb Ambedkar Airport Nagpur (MIHAN Project), Shirdi & Navi Mumbai International Airport",
                  chips: ["CSMIA मुंबई विमानतळ", "MIHAN नागपूर", "नवी मुंबई आंतरराष्ट्रीय विमानतळ (NMIA)"]
                },
                {
                  id: "st_gb_g15_01_05",
                  titleMr: "पर्यटन भूगोल व युनेस्को वारसा स्थळे: १) जागतिक वारसा स्थळे: अजिंठा लेणी (१९८३), वेरूळ लेणी (१९८३), घारापुरी/एलिफंटा लेणी (१९८७), CSMT रेल्वे टर्मिनस (२००४), पश्चिम घाट (२०१२), मुंबईची व्हिक्टोरियन गोथिक व आर्ट डेको वास्तू (२०१८); २) अष्टविनायक, ५ ज्योतिर्लिंगे, थंड हवेची ठिकाणे (माथेरान, महाबळेश्वर, चिखलदरा, अंबोली)",
                  titleEn: "Tourism Geography & UNESCO Sites: Ajanta, Ellora, Elephanta, CSMT, Western Ghats, Victorian Gothic Ensemble; 5 Jyotirlingas, Ashtavinayak & Hill Stations",
                  chips: ["अजिंठा व वेरूळ (UNESCO १९८३)", "घारापुरी लेणी", "५ ज्योतिर्लिंगे", "अष्टविनायक", "माथेरान (प्रदूषणमुक्त थंड हवेचे ठिकाण)"]
                }
              ],
              sources: [
                { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण १०: वाहतूक, दळणवळण व पर्यटन" },
                { book: "महाराष्ट्र पर्यटन विकास महामंडळ (MTDC)", standard: "MTDC अहवाल", chapterRef: "पर्यटन स्थळे व सर्किट" }
              ]
            }
          ]
        },
        {
          id: "gb_geog_c16",
          code: "G16",
          section: "D",
          slug: "demography-and-census-2011-maharashtra-and-india",
          nameMr: "लोकसंख्याशास्त्र आणि जनगणना २०११: महाराष्ट्र व भारताची तुलना",
          nameEn: "Demography & Census 2011: Comprehensive Comparative Study of Maharashtra & India",
          name: "लोकसंख्याशास्त्र व जनगणना २०११ (Census 2011 Demography)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 5,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_geog_c16",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_geog_c15",
          nextChapterId: "gb_geog_c17",
          metaDescriptionMr: "जनगणना २०११: एकूण लोकसंख्या (११.२४ कोटी), घनता (३६५), लिंगगुणोत्तर (९२९), बाल लिंगगुणोत्तर (८९४), साक्षरता (८२.३%), नागरीकरण (४५.२%) आणि SC/ST आकडेवारी.",
          metaDescriptionEn: "High-yield analytical review of Census 2011: Population (11.24 Cr), Density (365), Sex Ratio (929), Child Sex Ratio (894), Literacy (82.3%), Urbanization (45.2%), and SC/ST demography.",
          notesJsonPath: "/data/notes/group_b/prelims/geography/c16_census_2011.json",
          quizTag: "gb_geog_census_2011_01",
          tags: ["Core", "Maharashtra Geography", "Census 2011", "Population Density 365", "Sex Ratio 929", "Child Sex Ratio 894", "Literacy 82.3", "High-Weightage"],
          searchKeywords: ["census 2011 maharashtra", "population density 365", "sex ratio 929 maharashtra", "child sex ratio 894 beed", "literacy 82.34 maharashtra", "urbanization 45.2 percent", "जनगणना २०११", "लोकसंख्या घनता ३६५", "लिंगगुणोत्तर ९२९", "बाल लिंगगुणोत्तर ८९४ बीड", "साक्षरता ८२.३ टक्के", "नागरीकरण"],
          topics: [
            {
              id: "top_gb_g16_01",
              nameMr: "जनगणना २०११ चे सर्व निकष, सांख्यिकी व जिल्हानिहाय क्रमवारी",
              nameEn: "Census 2011 Metrics, Demographic Indicators & District-Wise Rankings",
              subtopics: [
                {
                  id: "st_gb_g16_01_01",
                  titleMr: "एकूण लोकसंख्या व वाढीचा दर: भारताची लोकसंख्या १२१ कोटी; महाराष्ट्राची लोकसंख्या ११,२३,७४,३३३ (११.२४ कोटी - भारताच्या ९.२८% भाग, उत्तर प्रदेशनंतर दुसरा क्रमांक); सर्वाधिक लोकसंख्या: ठाणे (विभाजनापूर्वी १.१० कोटी), पुणे; सर्वात कमी: सिंधुदुर्ग (८.५० लाख); दशवार्षिक वाढ दर: १५.९९% (२००१-२०११)",
                  titleEn: "Total Population & Decadal Growth: India 121 Cr; MH 11.24 Cr (9.28% of India, 2nd Rank after UP); Highest: Thane (undivided), Pune; Lowest: Sindhudurg; Decadal Growth: 15.99%",
                  chips: ["११.२४ कोटी लोकसंख्या", "भारताच्या ९.२८ टक्के", "दुसरा क्रमांक", "दशवार्षिक वाढ १५.९९ टक्के", "सिंधुदुर्ग सर्वात कमी"]
                },
                {
                  id: "st_gb_g16_01_02",
                  titleMr: "लोकसंख्येची घनता (Density): भारताची घनता ३८२ प्रति चौ.किमी; महाराष्ट्राची घनता ३६५ प्रति चौ.किमी; सर्वाधिक घनता: १) मुंबई उपनगर (२०,९८०), २) मुंबई शहर (१९,६५२), ३) ठाणे (११५७), ४) पुणे (५१५); सर्वात कमी घनता: १) गडचिरोली (७४), २) सिंधुदुर्ग (१६३), ३) चंद्रपूर (१९३)",
                  titleEn: "Population Density: India 382/sq km; Maharashtra 365/sq km; Highest: Mumbai Suburban (20,980), Mumbai City; Lowest: Gadchiroli (74), Sindhudurg (163)",
                  chips: ["महाराष्ट्र घनता ३६५", "भारत घनता ३८२", "मुंबई उपनगर २०९८०", "गडचिरोली सर्वात कमी ७४"]
                },
                {
                  id: "st_gb_g16_01_03",
                  titleMr: "लिंगगुणोत्तर (Sex Ratio - दर हजारी पुरुषांमागे स्त्रिया): भारताचे लिंगगुणोत्तर ९४३; महाराष्ट्राचे लिंगगुणोत्तर ९२९; सर्वाधिक लिंगगुणोत्तर: १) रत्नागिरी (११२२), २) सिंधुदुर्ग (१०३६), ३) गोंदिया (९९९), ४) सातारा (९८८); सर्वात कमी लिंगगुणोत्तर: १) मुंबई शहर (८३२), २) मुंबई उपनगर (८६०), ३) ठाणे (८८६)",
                  titleEn: "Sex Ratio: India 943; Maharashtra 929; Highest: Ratnagiri (1122), Sindhudurg (1036), Gondia (999); Lowest: Mumbai City (832), Mumbai Suburban (860)",
                  chips: ["महाराष्ट्र लिंगगुणोत्तर ९२९", "भारत ९४३", "रत्नागिरी सर्वाधिक ११२२", "सिंधुदुर्ग १०३६", "मुंबई शहर सर्वात कमी ८३२"]
                },
                {
                  id: "st_gb_g16_01_04",
                  titleMr: "बाल लिंगगुणोत्तर (Child Sex Ratio ० ते ६ वर्षे वय): भारताचे बाल लिंगगुणोत्तर ९१८; महाराष्ट्राचे बाल लिंगगुणोत्तर ८९४ (चिंताजनक घसरण); सर्वाधिक बाल लिंगगुणोत्तर: १) गडचिरोली (९६१), २) गोंदिया (९५६); सर्वात कमी बाल लिंगगुणोत्तर: १) बीड (८०७ - सर्वात नीचांकी), २) जळगाव (८४२), ३) अहमदनगर (८५२)",
                  titleEn: "Child Sex Ratio (0-6 Years): India 918; Maharashtra 894; Highest: Gadchiroli (961), Gondia (956); Lowest: Beed (807 - Critical Lowest), Jalgaon (842)",
                  chips: ["बाल लिंगगुणोत्तर ८९४", "भारत ९१८", "गडचिरोली सर्वाधिक ९६१", "बीड सर्वात कमी ८०७"]
                },
                {
                  id: "st_gb_g16_01_05",
                  titleMr: "साक्षरता दर (Literacy Rate): भारताची साक्षरता ७३.०%; महाराष्ट्राची साक्षरता ८२.३४% (पुरुष साक्षरता: ८८.३८%, स्त्री साक्षरता: ७५.८७%); सर्वाधिक साक्षरता: १) मुंबई उपनगर (८९.९१%), २) मुंबई शहर (८९.२१%), ३) नागपूर (८८.३९%), ४) अकोला (८८.०५%); सर्वात कमी साक्षरता: १) नंदुरबार (६४.३८%), २) जालना (७१.५२%), ३) धुळे (७२.८०%)",
                  titleEn: "Literacy: India 73.0%; Maharashtra 82.34% (Male 88.38%, Female 75.87%); Highest: Mumbai Suburban (89.91%), Mumbai City, Nagpur; Lowest: Nandurbar (64.38%), Jalna",
                  chips: ["महाराष्ट्र साक्षरता ८२.३४ टक्के", "पुरुष ८८.३८ टक्के", "स्त्री ७५.८७ टक्के", "मुंबई उपनगर ८९.९१ टक्के", "नंदुरबार सर्वात कमी ६४.३८ टक्के"]
                },
                {
                  id: "st_gb_g16_01_06",
                  titleMr: "नागरीकरण व ग्रामीण रचना: महाराष्ट्रात नागरी लोकसंख्या ४५.२२% (देशात तिसरा क्रमांक - तामिळनाडू व केरळनंतर; संख्येनुसार प्रथम); ग्रामीण लोकसंख्या ५४.७८%; १००% नागरी जिल्हे: मुंबई शहर व मुंबई उपनगर; सर्वाधिक ग्रामीण जिल्हा: गडचिरोली (८९%)",
                  titleEn: "Urbanization: Urban Population 45.22% (3rd after TN & Kerala; 1st in absolute numbers); 100% Urban: Mumbai City & Suburban; Highest Rural: Gadchiroli (89%)",
                  chips: ["नागरीकरण ४५.२२ टक्के", "ग्रामीण ५४.७८ टक्के", "मुंबई १०० टक्के नागरी", "गडचिरोली ८९ टक्के ग्रामीण"]
                },
                {
                  id: "st_gb_g16_01_07",
                  titleMr: "अनुसूचित जाती (SC) व अनुसूचित जमाती (ST) लोकसंख्या: SC लोकसंख्या: ११.८१% (सर्वाधिक प्रमाण: लातूर, सर्वाधिक संख्या: पुणे); ST लोकसंख्या: ९.३५% (सर्वाधिक प्रमाण: नंदुरबार ६९.३%, सर्वाधिक संख्या: नाशिक); शून्य ST लोकसंख्या: मुंबई शहर",
                  titleEn: "SC & ST Demography: SC 11.81% (Highest % in Latur, Highest Count in Pune); ST 9.35% (Highest % in Nandurbar 69.3%, Highest Count in Nashik)",
                  chips: ["SC लोकसंख्या ११.८१ टक्के", "ST लोकसंख्या ९.३५ टक्के", "नंदुरबार ६९.३ टक्के ST", "पुणे सर्वाधिक SC संख्या"]
                }
              ],
              sources: [
                { book: "भारताची व महाराष्ट्राची जनगणना २०११", standard: "Census of India / Directorate of Census Operations MH", chapterRef: "अंतिम लोकसंख्या आकडेवारी अहवाल" },
                { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "प्रकरण ११: लोकसंख्या व मानवी भूगोल" }
              ]
            }
          ]
        },
        {
          id: "gb_geog_c17",
          code: "G17",
          section: "D",
          slug: "tribal-communities-and-human-settlements-in-maharashtra",
          nameMr: "महाराष्ट्रातील प्रमुख आदिवासी जमाती, भाषा व वस्त्यांचे प्रकार",
          nameEn: "Tribal Communities, Dialects & Human Settlement Patterns in Maharashtra",
          name: "आदिवासी जमाती व वस्त्यांचे प्रकार (Tribes & Settlements of Maharashtra)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_geog_c17",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_geog_c16",
          nextChapterId: "gb_geog_c18",
          metaDescriptionMr: "महाराष्ट्रातील आदिवासी जमाती: भिल्ल, गोंड, वारली, कोळी, कातकरी, कोरकू, माडिया गोंड (आदिम जमाती - PVTG), त्यांच्या बोलीभाषा आणि वस्त्यांचे प्रारूप.",
          metaDescriptionEn: "In-depth review of scheduled tribes: Bhil, Gond, Warli, Katkari, Kolam, Madia Gond (Particularly Vulnerable Tribal Groups - PVTG), Korku, and rural settlement patterns.",
          notesJsonPath: "/data/notes/group_b/prelims/geography/c17_mh_tribes_settlements.json",
          quizTag: "gb_geog_mh_tribes_01",
          tags: ["Core", "Maharashtra Geography", "Tribes of Maharashtra", "PVTG Katkari Kolam Madia", "Warli Art", "Bhil Nandurbar", "High-Weightage"],
          searchKeywords: ["tribes of maharashtra", "bhil nandurbar", "gond gadchiroli", "warli thane palghar", "katkari pvtg", "korku melghat amravati", "आदिवासी जमाती", "भिल्ल", "गोंड", "वारली चित्रकला", "कातकरी", "कोरकू मेळघाट", "आदिम जमाती PVTG"],
          topics: [
            {
              id: "top_gb_g17_01",
              nameMr: "आदिवासी समुदाय, प्रादेशिक वितरण, आदिम जमाती (PVTG) व बोलीभाषा",
              nameEn: "Tribal Demography, Spatial Distribution, PVTG Groups & Settlement Formats",
              subtopics: [
                {
                  id: "st_gb_g17_01_01",
                  titleMr: "भिल्ल जमात: महाराष्ट्रातील सर्वात मोठी आदिवासी जमात; मुख्य विस्तार: उत्तर महाराष्ट्र व सातपुडा रांगा (नंदुरबार, धुळे, जळगाव); बोलीभाषा: भिल्लोरी/अहिराणी; होळी/भोंगर्‍या सण",
                  titleEn: "Bhil Tribe: Largest Tribal Group in MH; Concentrated in Nandurbar, Dhule, Jalgaon; Dialects: Bhili/Ahirani; Bhogariya Festival",
                  chips: ["भिल्ल (सर्वात मोठी जमात)", "नंदुरबार", "धुळे", "भोंगर्‍या सण", "अहिराणी"]
                },
                {
                  id: "st_gb_g17_01_02",
                  titleMr: "गोंड व माडिया गोंड जमात: पूर्व विदर्भ (गडचिरोली, चंद्रपूर, भंडारा); 'घोटुल' सामाजिक संस्था (युवागृह पद्धत); माडिया गोंड ही केंद्र शासनाकडून आदिम जमात (PVTG) म्हणून घोषित",
                  titleEn: "Gond & Madia Gond: Eastern Vidarbha (Gadchiroli, Chandrapur); 'Ghotul' Youth Dormitory System; Madia Gond is a Recognized PVTG",
                  chips: ["गोंड जमात", "माडिया गोंड (PVTG)", "गडचिरोली", "घोटुल पद्धत", "रेला नृत्य"]
                },
                {
                  id: "st_gb_g17_01_03",
                  titleMr: "वारली व कातकरी जमात: वारली: ठाणे, पालघर व नाशिक (प्रसिद्ध जागतिक वारली चित्रकला - तारपा नृत्य); कातकरी/काथोडी: रायगड, ठाणे, पुणे (काथ तयार करणारे - केंद्र शासनाची PVTG आदिम जमात)",
                  titleEn: "Warli & Katkari: Warli Art & Tarpa Dance in Palghar/Thane; Katkari (Catechu makers in Raigad/Pune - Recognized PVTG)",
                  chips: ["वारली चित्रकला", "तारपा नृत्य", "पालघर", "कातकरी (PVTG)", "रायगड"]
                },
                {
                  id: "st_gb_g17_01_04",
                  titleMr: "महाराष्ट्रातील ३ केंद्रमान्य आदिम जमाती (PVTG - Particularly Vulnerable Tribal Groups): १) कातकरी (रायगड, ठाणे), २) कोलाम (यवतमाळ, नांदेड), ३) माडिया गोंड (गडचिरोली)",
                  titleEn: "3 Centrally Recognized PVTG Groups in Maharashtra: 1) Katkari (Raigad), 2) Kolam (Yavatmal), 3) Madia Gond (Gadchiroli)",
                  chips: ["३ आदिम जमाती (PVTG)", "कातकरी रायगड", "कोलाम यवतमाळ", "माडिया गोंड गडचिरोली"]
                },
                {
                  id: "st_gb_g17_01_05",
                  titleMr: "कोरकू जमात (मेळघाट - अमरावती; बोलीभाषा: कोरकू/मुंडा भाषा कुटुंब) आणि ठाकूर, महादेव कोळी जमाती (सह्याद्री घाटमाथा पट्टा)",
                  titleEn: "Korku Tribe (Melghat, Amravati - Munda Language Family); Thakur & Mahadev Koli Tribes along Sahyadri Foothills",
                  chips: ["कोरकू मेळघाट", "मुंडा भाषा कुटुंब", "महादेव कोळी", "ठाकूर जमात"]
                },
                {
                  id: "st_gb_g17_01_06",
                  titleMr: "ग्रामीण वस्त्यांचे प्रकार: केंद्रित/गुच्छ वस्त्या (पाण्याच्या उपलब्धतेनुसार - नदी खोरे व पठार), विखुरलेल्या वस्त्या (सह्याद्री डोंगररांगा व आदिवासी पाडे/वाड्या), आणि रेषाकृती वस्त्या (रस्ते व कालव्यांच्या कडेने)",
                  titleEn: "Rural Settlement Patterns: Nucleated (River Valleys), Dispersed/Hamlets (Sahyadri Slopes & Padas), and Linear (Along Transport Lines)",
                  chips: ["गुच्छ/केंद्रित वस्ती", "विखुरलेली वस्ती (पाडा/वाडी)", "रेषाकृती वस्ती"]
                }
              ],
              sources: [
                { book: "आधुनिक महाराष्ट्राचा भूगोल", standard: "ए. बी. सवदी", chapterRef: "प्रकरण १२: महाराष्ट्रातील आदिवासी जीवन" },
                { book: "आदिवासी संशोधन व प्रशिक्षण संस्था (TRTI) पुणे", standard: "TRTI अहवाल", chapterRef: "महाराष्ट्रातील जमाती" }
              ]
            }
          ]
        },
        {
          id: "gb_geog_c18",
          code: "G18",
          section: "D",
          slug: "geography-master-revision-maps-and-pyq-trends",
          nameMr: "भूगोल मास्टर रिव्हिजन: नकाशे वाचन, तुलनात्मक तक्ते व PYQ विश्लेषण",
          nameEn: "Geography Master Revision: Map Reading, Comparative Tables & PYQ Trends",
          name: "भूगोल मास्टर रिव्हिजन (Master Revision & Map Analysis)",
          category: "REVISION",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_geog_c18",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_geog_c17",
          nextChapterId: null,
          metaDescriptionMr: "महाराष्ट्राचे नकाशे वाचन (उत्तरेकडून दक्षिणेकडे क्रम: शिखरे, खाड्या, नद्या, घाट), धरणे-जिल्हे मास्टर तक्ता, जनगणना शॉर्टकट ट्रिक्स आणि मागील १० वर्षांचे PYQ विश्लेषण.",
          metaDescriptionEn: "Master consolidation module: Map-based North-South sequencing of peaks, creeks, rivers, and mountain passes, dams-reservoirs master table, Census 2011 memory shortcuts, and MPSC elimination tactics.",
          notesJsonPath: "/data/notes/group_b/prelims/geography/c18_master_revision.json",
          quizTag: "gb_geog_revision_01",
          tags: ["Revision", "Geography Maps", "North-South Sequences", "Dams Master Table", "Census Mnemonics", "PYQ Elimination", "High-Yield"],
          searchKeywords: ["geography map reading", "north south sequence peaks creeks", "dams reservoir names table", "census 2011 shortcuts", "mpsc prelims geography pyq", "नकाशा वाचन", "उत्तरेकडून दक्षिणेकडे क्रम", "धरणे व जलाशय नावे", "जनगणना ट्रिक्स", "PYQ विश्लेषण"],
          topics: [
            {
              id: "top_gb_g18_01",
              nameMr: "नकाशा विश्लेषण, तुलनात्मक सारण्या व परीक्षोपयोगी स्मृती-क्लृप्त्या",
              nameEn: "Spatial Map Synthesis, Comparative Concordance & Elimination Rules",
              subtopics: [
                {
                  id: "st_gb_g18_01_01",
                  titleMr: "नकाशा क्रमवारी १: सह्याद्रीतील शिखरांचा उत्तरेकडून दक्षिणेकडे क्रम (साल्हेर -> सप्तशृंगी -> कळसुबाई -> हरिश्चंद्रगड -> महाबळेश्वर -> तोरणा -> रायरेश्वर)",
                  titleEn: "Map Sequence 1: North-to-South Order of Mountain Peaks (Salher -> Saptashrungi -> Kalsubai -> Harishchandragad -> Mahabaleshwar -> Torna)",
                  chips: ["शिखरांचा उत्तर-दक्षिण क्रम", "साल्हेर ते महाबळेश्वर", "उंची क्रम क्लृप्ती (हसाका)"]
                },
                {
                  id: "st_gb_g18_01_02",
                  titleMr: "नकाशा क्रमवारी २: कोकणातील खाड्यांचा उत्तरेकडून दक्षिणेकडे क्रम (डहाणू -> दातीवरे -> वसई -> धरमतर -> रोहा -> राजापुरी -> बाणकोट -> दाभोळ -> जयगड -> विजयदुर्ग -> तेरेखोल)",
                  titleEn: "Map Sequence 2: North-to-South Sequence of Konkan Creeks (Dahanu to Terekhol)",
                  chips: ["खाड्यांचा अचूक क्रम", "डहाणू ते तेरेखोल", "कोकण जलप्रणाली"]
                },
                {
                  id: "st_gb_g18_01_03",
                  titleMr: "नकाशा क्रमवारी ३: सह्याद्रीतील घाटांचा उत्तरेकडून दक्षिणेकडे क्रम (थळ घाट/कसारा -> माळशेज -> बोर घाट -> वरंधा -> कुंभारली -> आंबा -> फोंडा -> आंबोली घाट)",
                  titleEn: "Map Sequence 3: North-to-South Sequence of Mountain Passes / Ghats (Thal -> Malshej -> Bhor -> Varandha -> Kumbharli -> Amba -> Phonda -> Amboli)",
                  chips: ["घाटांचा उत्तर-दक्षिण क्रम", "थळ ते आंबोली", "मार्ग जोडणी"]
                },
                {
                  id: "st_gb_g18_01_04",
                  titleMr: "महाराष्ट्रातील प्रमुख धरणे व त्यांच्या जलाशयांची नावे मास्टर तक्ता: १) जायकवाडी - नाथसागर, २) कोयना - शिवसागर, ३) उजनी - यशवंतसागर, ४) तोतलाडोह - मेघदूत जलाशय, ५) भाटघर - येसाजी कंक जलाशय, ६) राधानगरी - लक्ष्मी तलाव, ७) मांजरा - निजामसागर",
                  titleEn: "Master Table of Dams & Reservoir Names: Jayakwadi (Nathsagar), Koyna (Shivsagar), Ujani (Yashwantsagar), Totladoh (Meghdoot), Bhatghar (Yesaji Kank)",
                  chips: ["जायकावाडी (नाथसागर)", "कोयना (शिवसागर)", "उजनी (यशवंतसागर)", "तोतलाडोह (मेघदूत)", "भाटघर (येसाजी कंक)"]
                },
                {
                  id: "st_gb_g18_01_05",
                  titleMr: "थंड हवेची ठिकाणे व जिल्हे मास्टर तक्ता: १) माथेरान (रायगड - आशियातील एकमेव वाहनविरहित), २) महाबळेश्वर व पाचगणी (सातारा), ३) चिखलदरा (अमरावती), ४) तोरणमाळ (नंदुरबार), ५) महेशमाळ (छत्रपती संभाजीनगर), ६) पन्हाळा (कोल्हापूर), ७) आंबोली (सिंधुदुर्ग)",
                  titleEn: "Hill Stations Master Table: Matheran (Raigad, Automobile-Free), Mahabaleshwar/Panchgani, Chikhaldara, Toranmal, Maheshmal, Panhala & Amboli",
                  chips: ["माथेरान (वाहनविरहित)", "महाबळेश्वर", "चिखलदरा (विदर्भ)", "तोरणमाळ", "महेशमाळ"]
                },
                {
                  id: "st_gb_g18_01_06",
                  titleMr: "MPSC संयुक्त पूर्व परीक्षा भूगोल: मागील १० वर्षांचे विश्लेषण, वारंवार विचारलेले प्रश्न (Hotspots - जनगणना, नद्यांची खोरी, खनिजे, शिखरे) व एलिमिनेशन ट्रिक्स",
                  titleEn: "MPSC Prelims Geography Trend Analysis: Recurring High-Yield Hotspots & Option Elimination Strategies",
                  chips: ["PYQ विश्लेषण", "एलिमिनेशन पद्धत", "हॉटस्पॉट घटक", "१० वर्षांचे कल"]
                }
              ],
              sources: [
                { book: "द मेगा स्टेट महाराष्ट्र", standard: "ए. बी. सवदी", chapterRef: "मास्टर तक्ते व सांख्यिकी" },
                { book: "MPSC मागील वर्षांच्या प्रश्नपत्रिका (PYQ संच)", standard: "२०१३ ते २०२५", chapterRef: "भूगोल प्रश्न संच व विश्लेषण" }
              ]
            }
          ]
        }
      ]
    },

    {
      id: "gb_pre_polity",
      code: "POL",
      slug: "indian-polity-constitution-governance",
      nameMr: "भारतीय राज्यघटना, शासन आणि स्थानिक स्वराज्य संस्था",
      nameEn: "Indian Constitution, Political System, Governance & Panchayati Raj",
      name: "राज्यव्यवस्था व प्रशासन (Indian Polity & Governance)",
      officialScope: "Indian Constitution, Preamble, Fundamental Rights, Directive Principles, Union & State Executive, Judiciary, 73rd & 74th Constitutional Amendments (Panchayati Raj & Urban Local Bodies), Constitutional Bodies, and Maharashtra Administrative Machinery",
      version: "1.0",
      verifiedDate: "2026-10-28",
      notesJsonBaseDir: "/data/notes/group_b/prelims/polity/",


      // UI Theme & Theming Metadata
      theme: {
        primaryColor: "#4338ca",        // Indigo / Legal-Constitutional Theme
        bgColor: "#eef2ff",
        iconClass: "ri-government-line"
      },


      // अभ्यास व डॅशबोर्ड ॲनालिटिक्स मेट्रिक्स
      metrics: {
        totalChapters: 18,
        totalEstimatedHours: 62,
        avgQuestionsInPrelims: 15,
        targetMarks: 15,
        weightageRange: "14-16 Questions"
      },


      // विषय पातळीवरील स्मार्ट टॅग्ज
      subjectTags: [
        "Core-GS",
        "Group-B-Prelims",
        "Paper-1-GS",
        "Pre-Cum-Mains",
        "High-Weightage",
        "Article-Intensive",
        "Panchayati-Raj-Dominant"
      ],


      filterCategory: "GS",
      searchKeywords: [
        "mpsc group b polity", "indian constitution articles", "fundamental rights article 12 to 35",
        "dpsp article 36 to 51", "panchayati raj 73rd 74th amendment", "supreme court high court",
        "governor president", "maharashtra gram panchayat act 1959", "zp and panchayat samiti act 1961",
        "भारतीय राज्यघटना", "कलमे", "मूलभूत हक्क", "मार्गदर्शक तत्त्वे", "पंचायत राज ७३ वी घटनादुरुस्ती", "ग्रामपंचायत कायदा १९५८", "संसद व राष्ट्रपती"
      ],


      referenceSources: [
        {
          name: "MPSC Non-Gazetted Group B Combined Syllabus",
          role: "अधिकृत परीक्षा-संदर्भ",
          url: "https://mpsc.gov.in"
        },
        {
          name: "भारतीय राज्यघटना व राजकारण - एम. लक्ष्मीकांत (मराठी अनुवाद: के. सागर)",
          role: "प्रमाणित संदर्भ ग्रंथ"
        },
        {
          name: "भारतीय राज्यघटना, राजकीय व्यवस्था व पंचायत राज - रंजन कोळंबे",
          role: "संकल्पनात्मक व परीक्षाभिमुख तयारी"
        },
        {
          name: "पंचायत राज - किशोर लवटे / के. सागर",
          role: "स्थानिक स्वराज्य संस्था व महाराष्ट्र कायदे संदर्भ"
        },
        {
          name: "The Constitution of India (Bare Act)",
          role: "वैधानिक मूळ कलमे व दुरुस्त्या"
        }
      ],


      chapters: [
        // =========================================================================
        // विभाग A — संविधानाची चौकट, निर्मिती व मूलभूत तत्त्वे (Constitutional Framework)
        // =========================================================================
        {
          id: "gb_pol_c01",
          code: "P01",
          section: "A",
          slug: "historical-background-and-making-of-the-constitution",
          nameMr: "संविधानाची ऐतिहासिक पार्श्वभूमी व घटना समितीचे कामकाज",
          nameEn: "Historical Background & Making of the Indian Constitution",
          name: "घटना निर्मिती व पार्श्वभूमी (Making of the Constitution)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_pol_c01",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: null,
          nextChapterId: "gb_pol_c02",
          metaDescriptionMr: "१७७३ ते १९४७ मधील ब्रिटिश कायदे, कॅबिनेट मिशन, घटना समितीची स्थापना, कामकाज, प्रमुख समित्या, मसुदा समिती आणि २६ नोव्हेंबर १९४९ चे संविधान स्वीकृती.",
          metaDescriptionEn: "In-depth review of constitutional evolution (1773-1947 Acts), Cabinet Mission 1946, Constituent Assembly structure, Drafting Committee under Dr. Ambedkar, and adoption on 26 Nov 1949.",
          notesJsonPath: "/data/notes/group_b/prelims/polity/c01_making_constitution.json",
          quizTag: "gb_pol_making_01",
          tags: ["Constitutional Framework", "Historical Background", "Constituent Assembly", "Drafting Committee", "Dr Ambedkar", "High-Weightage"],
          searchKeywords: ["historical background constitution", "constituent assembly 1946", "drafting committee dr ambedkar", "objective resolution nehru", "26 november 1949", "घटना समिती", "मसुदा समिती", "उद्दिष्टांचा ठराव", "संविधान दिन"],
          topics: [
            {
              id: "top_gb_p01_01",
              nameMr: "घटनात्मक उत्क्रांती, कॅबिनेट मिशन व संविधान सभा",
              nameEn: "Constitutional Evolution, Cabinet Mission & Constituent Assembly",
              subtopics: [
                {
                  id: "st_gb_p01_01_01",
                  titleMr: "ऐतिहासिक कायदे: १७७३ चा रेग्युलेटिंग ॲक्ट, १८५८ चा राणीचा जाहीरनामा, १९०९ चा मॉर्ले-मिंटो कायदा (स्वतंत्र मतदारसंघ), १९१९ चा माँटेग्यू-चेम्सफर्ड कायदा (प्रांतिक द्विदल पद्धत) व १९३५ चा भारत सरकार कायदा (संघराज्य व प्रांतिक स्वायत्तता - संविधानाचा ६०% पाया)",
                  titleEn: "Landmark Acts: 1773 Regulating Act, 1858 Proclamation, 1909 Separate Electorates, 1919 Dyarchy & 1935 Act (Blue-print of Constitution)",
                  chips: ["१९३५ कायदा (संविधानाचा पाया)", "१९०९ मॉर्ले-मिंटो", "१९१९ माँटेग्यू-चेम्सफर्ड", "प्रांतिक स्वायत्तता"]
                },
                {
                  id: "st_gb_p01_01_02",
                  titleMr: "संविधान सभेची स्थापना: कॅबिनेट मिशन योजना (१९४६); एकूण ३८९ जागा (२९२ ब्रिटिश प्रांत, ९३ संस्थाने, ४ मुख्य आयुक्त प्रांत); फाळणीनंतर २९९ सदस्य; मुंबई प्रांतातून २१ सदस्य",
                  titleEn: "Cabinet Mission Plan (1946): Total 389 seats (299 post-partition), Indirect elections, 21 members from Bombay Province",
                  chips: ["कॅबिनेट मिशन १९४६", "३८९ जागा -> २९९ जागा", "अप्रत्यक्ष निवडणूक", "मुंबई प्रांत २१ सदस्य"]
                },
                {
                  id: "st_gb_p01_01_03",
                  titleMr: "संविधान सभेच्या बैठका व पदाधिकारी: पहिली बैठक ९ डिसेंबर १९४६ (तात्पुरते अध्यक्ष डॉ. सच्चिदानंद सिन्हा - फ्रेंच परंपरा); ११ डिसेंबर १९४६ रोजी डॉ. राजेंद्र प्रसाद यांची कायमस्वरूपी अध्यक्ष म्हणून निवड; उपाध्यक्ष एच. सी. मुखर्जी; घटनात्मक सल्लागार बी. एन. राव",
                  titleEn: "Assembly Sittings: First meeting 9 Dec 1946 (Dr. Sachchidananda Sinha), Permanent President Dr. Rajendra Prasad (11 Dec), Advisor B.N. Rau",
                  chips: ["९ डिसेंबर १९४६ पहिली बैठक", "डॉ सच्चिदानंद सिन्हा", "डॉ राजेंद्र प्रसाद", "बी एन राव"]
                },
                {
                  id: "st_gb_p01_01_04",
                  titleMr: "उद्दिष्टांचा ठराव (Objective Resolution): १३ डिसेंबर १९४६ रोजी पं. जवाहरलाल नेहरूंनी मांडला, २२ जानेवारी १९४७ रोजी एकमताने मंजूर; पुढे यातूनच संविधानाच्या सरनाम्याची निर्मिती",
                  titleEn: "Objective Resolution: Introduced by Jawaharlal Nehru on 13 Dec 1946, Adopted on 22 Jan 1947; Laid Foundation of Preamble",
                  chips: ["उद्दिष्टांचा ठराव १३ डिसें १९४६", "२२ जानेवारी १९४७ मंजुरी", "पं जवाहरलाल नेहरू", "सरनाम्याची पायाभरणी"]
                },
                {
                  id: "st_gb_p01_01_05",
                  titleMr: "मसुदा समिती (Drafting Committee): स्थापना २९ ऑगस्ट १९४७; अध्यक्ष डॉ. बाबासाहेब आंबेडकर (भारतीय संविधानाचे शिल्पकार) + ६ सदस्य (गोपालस्वामी अय्यंगार, अल्लादी कृष्णास्वामी अय्यर, के. एम. मुन्शी, मोहम्मद सादुल्ला, माधव राव, टी. टी. कृष्णमाचारी); मसुद्याचे ३ वाचन",
                  titleEn: "Drafting Committee (29 Aug 1947): Chairman Dr. B.R. Ambedkar & 6 members; 3 formal readings of draft",
                  chips: ["मसुदा समिती २९ ऑगस्ट १९४७", "डॉ बाबासाहेब आंबेडकर", "७ सदस्य", "संविधान मसुदा"]
                },
                {
                  id: "st_gb_p01_01_06",
                  titleMr: "संविधान स्वीकृती व अंमलबजावणी: २६ नोव्हेंबर १९४९ रोजी संविधान स्वीकृत व स्वाक्षरी (२८४ सदस्यांची स्वाक्षरी); २ वर्षे ११ महिने १८ दिवस कालावधी; २६ जानेवारी १९५० रोजी पूर्ण अंमलबजावणी (प्रजासत्ताक दिन); मूळ संविधानात २२ भाग, ३९५ कलमे व ८ परिशिष्टे",
                  titleEn: "Adoption & Enforcement: Adopted 26 Nov 1949 (Constitution Day, 284 signatures), Enacted 26 Jan 1950; 2 yrs 11 mos 18 days; Orig: 22 Parts, 395 Articles, 8 Schedules",
                  chips: ["२६ नोव्हेंबर १९४९ संविधान दिन", "२६ जानेवारी १९५० प्रजासत्ताक", "२ वर्षे ११ महिने १८ दिवस", "३९५ कलमे ८ परिशिष्टे"]
                }
              ],
              sources: [
                { book: "भारतीय राज्यव्यवस्था", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण २: संविधानाची निर्मिती" },
                { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण १: ऐतिहासिक पार्श्वभूमी व घटना निर्मिती" }
              ]
            }
          ]
        },
        {
          id: "gb_pol_c02",
          code: "P02",
          section: "A",
          slug: "salient-features-preamble-and-sources-of-constitution",
          nameMr: "संविधानाची प्रमुख वैशिष्ट्ये, सरनामा (उद्देशिका) व परकीय स्रोत",
          nameEn: "Salient Features, Preamble & Global Sources of the Constitution",
          name: "संविधानाची वैशिष्ट्ये व सरनामा (Features, Preamble & Sources)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 3,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_pol_c02",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_pol_c01",
          nextChapterId: "gb_pol_c03",
          metaDescriptionMr: "संविधानाची वैशिष्ट्ये (जगातील सर्वात मोठी लिखित घटना), स्रोत (ब्रिटन, अमेरिका, आयर्लंड), सरनाम्यातील कीवर्ड्स, ४२ वी घटनादुरुस्ती (१९७६) आणि बेरुबारी व केशवानंद भारती खटले.",
          metaDescriptionEn: "In-depth review of salient features, sources borrowed from 10+ countries, Preamble keywords (Sovereign, Socialist, Secular, Democratic, Republic), 42nd Amendment 1976, and judicial cases.",
          notesJsonPath: "/data/notes/group_b/prelims/polity/c02_preamble_features.json",
          quizTag: "gb_pol_preamble_01",
          tags: ["Constitutional Framework", "Salient Features", "Preamble", "42nd Amendment 1976", "Kesavananda Bharati", "Sources", "High-Weightage"],
          searchKeywords: ["salient features constitution", "preamble keywords", "sources of indian constitution", "42nd amendment 1976 socialist secular", "kesavananda bharati case 1973", "सरनामा", "उद्देशिका", "संविधानाचे स्रोत", "केशवानंद भारती खटला", "४२ वी घटनादुरुस्ती"],
          topics: [
            {
              id: "top_gb_p02_01",
              nameMr: "वैशिष्ट्ये, विविध देशांचे प्रभाव आणि सरनाम्याचे तत्त्वज्ञान",
              nameEn: "Core Features, Borrowed Foreign Provisions & Philosophy of Preamble",
              subtopics: [
                {
                  id: "st_gb_p02_01_01",
                  titleMr: "संविधानाचे जागतिक स्रोत: १) ब्रिटन: संसदीय शासन, कायद्याचे राज्य (Rule of Law), एकेरी नागरिकत्व; २) अमेरिका: मूलभूत हक्क, न्यायालयीन पुनर्विलोकन, उपराष्ट्रपती पद; ३) आयर्लंड: DPSP, राज्यसभेवर सदस्य नामनिर्देशन; ४) ऑस्ट्रेलिया: समवर्ती सूची, संसदेची संयुक्त बैठक; ५) कॅनडा: शेषाधिकार केंद्राकडे, राज्यपालांची केंद्राद्वारे नियुक्ती; ६) द. आफ्रिका: घटनादुरुस्ती पद्धत (कलम ३६८)",
                  titleEn: "Global Sources: UK (Parliamentary system, Rule of law), USA (Fundamental Rights, Judicial Review), Ireland (DPSP), Australia (Concurrent List), Canada, South Africa (Art 368)",
                  chips: ["ब्रिटन (संसदीय पद्धत)", "अमेरिका (मूलभूत हक्क)", "आयर्लंड (DPSP)", "ऑस्ट्रेलिया (समवर्ती सूची)", "द आफ्रिका (कलम ३६८)"]
                },
                {
                  id: "st_gb_p02_01_02",
                  titleMr: "संविधानाची प्रमुख वैशिष्ट्ये: जगातील सर्वात मोठी लिखित घटना, ताठरता व लवचिकतेचे मिश्रण, अर्ध-संघराज्य (Federal in structure, Unitary in spirit - के. सी. व्हीअर), एकात्मिक व स्वतंत्र न्यायव्यवस्था, प्रौढ मताधिकार",
                  titleEn: "Salient Features: Lengthiest written constitution, Blend of Rigidity & Flexibility, Quasi-Federalism, Integrated Independent Judiciary, Universal Adult Suffrage",
                  chips: ["सर्वात मोठी लिखित घटना", "ताठर व लवचिक", "अर्ध-संघराज्य", "एकात्मिक न्यायव्यवस्था"]
                },
                {
                  id: "st_gb_p02_01_03",
                  titleMr: "सरनामा (उद्देशिका): 'आम्ही भारताचे लोक...'; सार्वभौम, समाजवादी, धर्मनिरपेक्ष, लोकशाही, गणराज्य; न्याय (सामाजिक, आर्थिक, राजकीय), स्वातंत्र्य (विचार, अभिव्यक्ती, विश्वास, श्रद्धा व उपासना), समता (दर्जा व संधी), बंधुता",
                  titleEn: "Text of Preamble: 'We the People of India'; Sovereign, Socialist, Secular, Democratic, Republic; Justice, Liberty, Equality, Fraternity",
                  chips: ["आम्ही भारताचे लोक", "सार्वभौम समाजवादी धर्मनिरपेक्ष", "तीन प्रकारचे न्याय", "पाच प्रकारचे स्वातंत्र्य"]
                },
                {
                  id: "st_gb_p02_01_04",
                  titleMr: "४२ वी घटनादुरुस्ती कायदा १९७६: सरनाम्यात केवळ एकदाच दुरुस्ती; 'समाजवादी' (Socialist), 'धर्मनिरपेक्ष' (Secular) आणि 'एकात्मता' (Integrity) या ३ नवीन शब्दांचा समावेश",
                  titleEn: "42nd Constitutional Amendment Act 1976: Only amendment to Preamble; Added 3 words: 'Socialist', 'Secular', and 'Integrity'",
                  chips: ["४२ वी घटनादुरुस्ती १९७६", "समाजवादी धर्मनिरपेक्ष एकात्मता", "सरनाम्यात एकदाच दुरुस्ती"]
                },
                {
                  id: "st_gb_p02_01_05",
                  titleMr: "सरनाम्याबाबत सर्वोच्च न्यायालयाचे खटले: १) बेरुबारी खटला (१९६० - सरनामा संविधानाचा भाग नाही), २) केशवानंद भारती खटला (२४ एप्रिल १९७३ - सरनामा संविधानाचा अविभाज्य भाग आहे व मूलभूत चौकटीचा भाग आहे), ३) LIC of India खटला (१९९५)",
                  titleEn: "Judicial Pronouncements: Berubari Case 1960 (Not part), Kesavananda Bharati 1973 (Preamble IS integral part & Basic Structure), LIC Case 1995",
                  chips: ["बेरुबारी खटला १९६०", "केशवानंद भारती खटला १९७३", "मूलभूत चौकट सिद्धांत", "सरनामा अविभाज्य भाग"]
                }
              ],
              sources: [
                { book: "भारतीय राज्यव्यवस्था", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण ३ व ४: संविधानाची वैशिष्ट्ये व सरनामा" },
                { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण २: सरनामा व संविधानाची ओळख" }
              ]
            }
          ]
        },
        {
          id: "gb_pol_c03",
          code: "P03",
          section: "A",
          slug: "union-territory-citizenship-articles-1-to-11",
          nameMr: "संघराज्य व त्याचे राज्यक्षेत्र आणि नागरिकत्व (कलम १ ते ११)",
          nameEn: "The Union & Its Territory and Citizenship (Articles 1 to 11)",
          name: "संघराज्य व नागरिकत्व (Union & Citizenship - Art 1 to 11)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 3,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_pol_c03",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_pol_c02",
          nextChapterId: "gb_pol_c04",
          metaDescriptionMr: "भाग १ (कलम १ ते ४ - राज्यांची निर्मिती व सीमाबदल), भाषावार प्रांतरचना (धर, JVP, फाझल अली), भाग २ (कलम ५ ते ११ - नागरिकत्व प्राप्ती व लोप), नागरिकत्व कायदा १९५५.",
          metaDescriptionEn: "In-depth review of Part I (Articles 1-4, Reorganisation of States), Linguistic Commissions (Dhar, JVP, Fazal Ali), Part II (Articles 5-11, Citizenship Act 1955, CAA 2019, Single Citizenship).",
          notesJsonPath: "/data/notes/group_b/prelims/polity/c03_union_citizenship.json",
          quizTag: "gb_pol_citizenship_01",
          tags: ["Constitutional Framework", "Part I", "Part II", "Articles 1 to 11", "Citizenship Act 1955", "State Reorganisation 1956", "High-Weightage"],
          searchKeywords: ["article 1 to 4 union territory", "article 3 new states creation", "citizenship articles 5 to 11", "citizenship amendment act", "fazal ali commission 1953", "कलम १ ते ४", "कलम ३ राज्य निर्मिती", "कलम ५ ते ११ नागरिकत्व", "नागरिकत्व कायदा १९५५"],
          topics: [
            {
              id: "top_gb_p03_01",
              nameMr: "संघराज्य क्षेत्र, नवीन राज्यांची निर्मिती आणि नागरिकत्वाच्या तरतुदी",
              nameEn: "Union Territory Provisions, State Reorganisation & Citizenship Mechanics",
              subtopics: [
                {
                  id: "st_gb_p03_01_01",
                  titleMr: "भाग १: संघराज्य व त्याचे क्षेत्र (कलम १ ते ४): कलम १ (भारत अर्थात इंडिया हा राज्यांचा संघ असेल - Union of States), कलम २ (नवीन राज्ये दाखल करून घेणे), कलम ३ (संसदेचा साध्या बहुमताने नवीन राज्ये निर्माण करणे, सीमा व नावात बदल करण्याचा अधिकार - राष्ट्रपतींची पूर्वसंमती आवश्यक)",
                  titleEn: "Part I (Articles 1-4): Art 1 (India that is Bharat, Union of States), Art 2 (Admission of new states), Art 3 (Formation of new states, alteration of areas, boundaries, or names by simple majority)",
                  chips: ["कलम १ (राज्यांचा संघ)", "कलम २", "कलम ३ (नवीन राज्य निर्मिती)", "साधे बहुमत"]
                },
                {
                  id: "st_gb_p03_01_02",
                  titleMr: "भाषावार प्रांतरचना आयोग व राज्य पुनर्रचना कायदा १९५६: १) एस. के. धर आयोग (१९४८), २) जेव्हीपी समिती (JVP १९४८), ३) फाझल अली आयोग / राज्य पुनर्रचना आयोग (१९५३ - सदस्य: के. एम. पणिक्कर, हृदयनाथ कुंझरू); १ नोव्हेंबर १९५६ रोजी १४ राज्ये व ६ केंद्रशासित प्रदेश अस्तित्वात आले",
                  titleEn: "Linguistic Reorganisation: Dhar Commission 1948, JVP Committee, Fazal Ali Commission 1953; States Reorganisation Act 1956 (14 States & 6 UTs)",
                  chips: ["धर आयोग १९४८", "JVP समिती", "फाझल अली आयोग १९५३", "राज्य पुनर्रचना १९५६ (१४ राज्ये)"]
                },
                {
                  id: "st_gb_p03_01_03",
                  titleMr: "भाग २: नागरिकत्व (कलम ५ ते ११): संविधानाच्या प्रारंभी नागरिकत्व (कलम ५), पाकिस्तानातून भारतात स्थलांतरित व्यक्ती (कलम ६), परकीय नागरिकत्व स्वीकारल्यास भारतीय नागरिकत्व रद्द (कलम ९), संसदेला नागरिकत्व नियमनाचा अधिकार (कलम ११)",
                  titleEn: "Part II (Articles 5-11): Citizenship at commencement (Art 5), Migrants from Pakistan (Art 6), Single citizenship loss on acquiring foreign citizenship (Art 9), Parliament's regulatory power (Art 11)",
                  chips: ["कलम ५ ते ११", "कलम ९ (एकेरी नागरिकत्व)", "कलम ११ (संसदेचा अधिकार)"]
                },
                {
                  id: "st_gb_p03_01_04",
                  titleMr: "नागरिकत्व कायदा १९५५: नागरिकत्व प्राप्तीचे ५ मार्ग: १) जन्माने (By Birth), २) वंशाने (By Descent), ३) नोंदणीने (By Registration), ४) स्वीकृतीने/नैसर्गिकीकरणाने (By Naturalisation), ५) प्रदेश विलीनीकरणाने (By Incorporation); नागरिकत्व समाप्तीचे ३ प्रकार: त्याग (Renunciation), समाप्ती (Termination), वंचित करणे (Deprivation)",
                  titleEn: "Citizenship Act 1955: 5 Modes of Acquisition (Birth, Descent, Registration, Naturalisation, Incorporation) & 3 Modes of Loss (Renunciation, Termination, Deprivation)",
                  chips: ["नागरिकत्व कायदा १९५५", "५ प्रकारे प्राप्ती", "३ प्रकारे समाप्ती", "नागरिकत्व सुधारणा कायदा CAA"]
                }
              ],
              sources: [
                { book: "भारतीय राज्यव्यवस्था", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण ५ व ६: संघराज्य क्षेत्र व नागरिकत्व" },
                { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ३ व ४: राज्यक्षेत्र व नागरिकत्व" }
              ]
            }
          ]
        },
        {
          id: "gb_pol_c04",
          code: "P04",
          section: "A",
          slug: "fundamental-rights-articles-12-to-35",
          nameMr: "मूलभूत हक्क (भाग ३, कलम १२ ते ३५): संकल्पना व रिट अधिकार",
          nameEn: "Fundamental Rights (Part III, Articles 12 to 35) & Writs Jurisdiction",
          name: "मूलभूत हक्क (Fundamental Rights - Art 12 to 35)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 6,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_pol_c04",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_pol_c03",
          nextChapterId: "gb_pol_c05",
          metaDescriptionMr: "भाग ३ (मॅग्ना कार्टा), कलम १४ ते १८ (समानता), कलम १९ ते २२ (स्वातंत्र्य), कलम २३-२४ (शोषणाविरुद्ध), कलम २५-२८ (धार्मिक), कलम ३२ (घटनात्मक उपाययोजना व ५ रिट्स).",
          metaDescriptionEn: "Exhaustive coverage of Fundamental Rights (Part III Magna Carta, Articles 12-35): Equality (14-18), Freedoms (19-22), Exploitation (23-24), Religion (25-28), and Article 32 Writs.",
          notesJsonPath: "/data/notes/group_b/prelims/polity/c04_fundamental_rights.json",
          quizTag: "gb_pol_fr_01",
          tags: ["Core", "Fundamental Rights", "Part III", "Articles 12 to 35", "Article 32 Writs", "Right to Equality", "Right to Freedom", "High-Weightage"],
          searchKeywords: ["fundamental rights articles 12 to 35", "right to equality article 14 to 18", "article 19 six freedoms", "article 21 life and personal liberty", "article 32 writs habeas corpus mandamus", "मूलभूत हक्क कलम १२ ते ३५", "समानतेचा हक्क", "कलम १९ स्वातंत्र्य", "कलम २१ जीवित रक्षण", "कलम ३२ घटनात्मक उपाययोजना", "५ प्रकारचे रिट्स"],
          topics: [
            {
              id: "top_gb_p04_01",
              nameMr: "६ मूलभूत हक्क, राज्यसंस्थेची व्याख्या, निर्बंध आणि रिट अधिकार",
              nameEn: "Six Fundamental Rights, Definition of State, Exceptions & Writs",
              subtopics: [
                {
                  id: "st_gb_p04_01_01",
                  titleMr: "सामान्य तरतुदी: भारताचा मॅग्ना कार्टा (भाग ३); कलम १२ (राज्यसंस्थेची व्याख्या - केंद्र/राज्य सरकार, संसद, विधिमंडळ, स्थानिक प्राधिकरणे); कलम १३ (मूलभूत हक्कांशी विसंगत असलेले कायदे शून्य ठरवणे - न्यायालयीन पुनर्विलोकन / Judicial Review चा आधार)",
                  titleEn: "General Concepts: Part III Magna Carta of India; Article 12 (Definition of State); Article 13 (Laws inconsistent with or in derogation of Fundamental Rights are void - Judicial Review)",
                  chips: ["मॅग्ना कार्टा", "कलम १२ (राज्यसंस्था)", "कलम १३ (न्यायालयीन पुनर्विलोकन)", "न्यायप्रविष्ट (Justiciable)"]
                },
                {
                  id: "st_gb_p04_01_02",
                  titleMr: "समानतेचा हक्क (कलम १४ ते १८): कलम १४ (कायद्यापुढे समानता व कायद्याचे समान संरक्षण), कलम १५ (धर्म, वंश, जात, लिंग, जन्मस्थान यावरून भेदभावास बंदी), कलम १६ (सार्वजनिक रोजगारात समान संधी), कलम १७ (अस्पृश्यता नष्ट करणे - अस्पृश्यता निवारण कायदा १९५५ / नागरी हक्क संरक्षण), कलम १८ (किताब्या नष्ट करणे)",
                  titleEn: "Right to Equality (Articles 14-18): Art 14 (Equality before Law & Equal Protection), Art 15 (Non-discrimination), Art 16 (Equal Opportunity), Art 17 (Abolition of Untouchability), Art 18 (Abolition of Titles)",
                  chips: ["कलम १४ (समानता)", "कलम १५ (भेदभाव बंदी)", "कलम १६ (नोकऱ्यांत संधी)", "कलम १७ (अस्पृश्यता निर्मूलन)", "कलम १८"]
                },
                {
                  id: "st_gb_p04_01_03",
                  titleMr: "स्वातंत्र्याचा हक्क (कलम १९ ते २२): कलम १९ (६ स्वातंत्र्ये: भाषण, शांततापूर्ण एकत्र येणे, संघटना, संचार, वास्तव्य, व्यवसाय); कलम २० (अपराधांच्या दोषसिद्धीबाबत संरक्षण - Double Jeopardy बंदी); कलम २१ (जीवित व वैयक्तिक स्वातंत्र्याचे रक्षण - मनेका गांधी खटला १९७८); कलम २१A (६ ते १४ वर्षे मोफत व सक्तीचे शिक्षण - ८६ वी घटनादुरुस्ती २००२); कलम २२ (अटकेपासून संरक्षण)",
                  titleEn: "Right to Freedom (Articles 19-22): Art 19 (6 Basic Freedoms), Art 20 (Protection against conviction), Art 21 (Life & Personal Liberty - Maneka Gandhi 1978), Art 21A (RTE 86th Amdt 2002), Art 22",
                  chips: ["कलम १९ (६ स्वातंत्र्ये)", "कलम २०", "कलम २१ (जीवित रक्षण)", "कलम २१A (८६ वी दुरुस्ती २००२)", "कलम २२"]
                },
                {
                  id: "st_gb_p04_01_04",
                  titleMr: "शोषणाविरुद्ध हक्क (कलम २३ व २४): कलम २३ (माणसांचा अपव्यापार व वेठबिगारी/वेठमजुरी बंदी); कलम २४ (१४ वर्षांखालील बालकांना कारखाने, खाणी किंवा धोकादायक ठिकाणी कामावर ठेवण्यास बंदी - बालकामगार बंदी कायदा १९८६)",
                  titleEn: "Right against Exploitation (Articles 23-24): Art 23 (Prohibition of Human Trafficking & Forced Labour), Art 24 (Prohibition of Child Labour below 14 years in hazardous sectors)",
                  chips: ["कलम २३ (वेठबिगारी बंदी)", "कलम २४ (बालकामगार बंदी)", "धोकादायक उद्योग बंदी"]
                },
                {
                  id: "st_gb_p04_01_05",
                  titleMr: "धर्मस्वातंत्र्याचा हक्क (कलम २५ ते २८): कलम २५ (सद्सद्विवेकबुद्धीचे स्वातंत्र्य व धर्माचे आचरण, प्रसार), कलम २६ (धार्मिक व्यवहारांचे व्यवस्थापन), कलम २७ (धर्माच्या संवर्धनासाठी कर देण्यापासून मुक्ती), कलम २८ (शैक्षणिक संस्थांत धार्मिक शिक्षण देण्याबाबत स्वातंत्र्य)",
                  titleEn: "Right to Freedom of Religion (Articles 25-28): Art 25 (Freedom of Conscience & Profession), Art 26 (Religious Affairs), Art 27 (Tax Exemption for Religion), Art 28 (Religious Instruction in Institutions)",
                  chips: ["कलम २५ (धर्मस्वातंत्र्य)", "कलम २६", "कलम २७", "कलम २८"]
                },
                {
                  id: "st_gb_p04_01_06",
                  titleMr: "सांस्कृतिक व शैक्षणिक हक्क (कलम २९ व ३०): कलम २९ (अल्पसंख्याकांच्या भाषा, लिपी व संस्कृतीचे जतन), कलम ३० (शैक्षणिक संस्था स्थापण्याचा व चालवण्याचा अल्पसंख्याकांचा अधिकार); ४४ व्या घटनादुरुस्तीने (१९७८) संपत्तीचा हक्क (कलम ३१) मूलभूत हक्कांमधून वगळून कायदेशीर हक्क (कलम ३००A) बनवला",
                  titleEn: "Cultural & Educational Rights (Articles 29-30): Art 29 (Protection of Minority Interests), Art 30 (Right to establish educational institutions); Right to Property deleted by 44th Amdt 1978 to Art 300A",
                  chips: ["कलम २९ व ३० (अल्पसंख्याक हक्क)", "कलम ३१ रद्द (४४ वी दुरुस्ती १९७८)", "कलम ३००A (कायदेशीर हक्क)"]
                },
                {
                  id: "st_gb_p04_01_07",
                  titleMr: "घटनात्मक उपाययोजनेचा हक्क (कलम ३२): डॉ. आंबेडकरांच्या मते 'संविधानाचा आत्मा व हृदय'; सर्वोच्च न्यायालयाचे ५ प्राधिकृत आदेश (Writs): १) बंदी प्रत्यक्षीकरण (Habeas Corpus - देह उपस्थित करणे), २) परमादेश (Mandamus - आम्ही आज्ञा देतो), ३) प्रतिषेध (Prohibition - कनिष्ठ न्यायालयाला मनाई), ४) प्राकर्षण/उत्प्रेक्षा (Certiorari), ५) अधिकार पृच्छा (Quo-Warranto - कोणत्या अधिकाराने); कलम २२६ अन्वये उच्च न्यायालयाचा रिट अधिकार",
                  titleEn: "Right to Constitutional Remedies (Article 32): 'Heart & Soul of Constitution' (Dr. Ambedkar); 5 Prerogative Writs: Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo-Warranto; High Court Writ under Art 226",
                  chips: ["कलम ३२ (संविधानाचा आत्मा)", "Habeas Corpus बंदी प्रत्यक्षीकरण", "Mandamus परमादेश", "Certiorari उत्प्रेक्षा", "Quo-Warranto अधिकार पृच्छा", "कलम २२६ उच्च न्यायालय"]
                }
              ],
              sources: [
                { book: "भारतीय राज्यव्यवस्था", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण ७: मूलभूत हक्क" },
                { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ५: मूलभूत हक्क व रिट अधिकार" }
              ]
            }
          ]
        },
        {
          id: "gb_pol_c05",
          code: "P05",
          section: "A",
          slug: "directive-principles-and-fundamental-duties",
          nameMr: "मार्गदर्शक तत्त्वे (DPSP, कलम ३६ ते ५१) व मूलभूत कर्तव्ये (कलम ५१A)",
          nameEn: "Directive Principles of State Policy (DPSP, Arts 36-51) & Fundamental Duties (Art 51A)",
          name: "DPSP व मूलभूत कर्तव्ये (DPSP & Fundamental Duties)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_pol_c05",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_pol_c04",
          nextChapterId: "gb_pol_c06",
          metaDescriptionMr: "भाग ४ (DPSP, कलम ३६ ते ५१) चे समाजवादी, गांधीवादी, उदारमतवादी वर्गीकरण, समान नागरी कायदा (कलम ४४), भाग ४A (मूलभूत कर्तव्ये, कलम ५१A) आणि स्वर्णसिंह समिती.",
          metaDescriptionEn: "In-depth review of DPSP (Part IV, Articles 36-51: Socialistic, Gandhian, Liberal-Intellectual, Uniform Civil Code Art 44) & Fundamental Duties (Part IVA, Art 51A, Swaran Singh Committee).",
          notesJsonPath: "/data/notes/group_b/prelims/polity/c05_dpsp_duties.json",
          quizTag: "gb_pol_dpsp_01",
          tags: ["Constitutional Framework", "DPSP Part IV", "Fundamental Duties Part IVA", "Article 44 UCC", "Article 51A", "Swaran Singh Committee", "High-Weightage"],
          searchKeywords: ["dpsp articles 36 to 51", "article 40 gram panchayat", "article 44 uniform civil code", "fundamental duties article 51a", "swaran singh committee 1976", "86th amendment 2002 11th duty", "मार्गदर्शक तत्त्वे कलम ३६ ते ५१", "कलम ४० ग्रामपंचायत", "कलम ४४ समान नागरी कायदा", "मूलभूत कर्तव्ये कलम ५१A", "स्वर्णसिंह समिती"],
          topics: [
            {
              id: "top_gb_p05_01",
              nameMr: "कल्याणकारी राज्य, मार्गदर्शक तत्त्वे आणि नागरिकांची कर्तव्ये",
              nameEn: "Welfare State Philosophy, DPSP Directives & Citizen Responsibilities",
              subtopics: [
                {
                  id: "st_gb_p05_01_01",
                  titleMr: "मार्गदर्शक तत्त्वांचे स्वरूप (भाग ४, कलम ३६ ते ५१): आयर्लंडकडून स्वीकार; सामाजिक व आर्थिक लोकशाही स्थापणे, कल्याणकारी राज्याची (Welfare State) निर्मिती; अ-न्यायप्रविष्ट (Non-Justiciable - न्यायालयात दाद मागता येत नाही); कलम ३७ (कारभारात मूलभूत तत्त्वे)",
                  titleEn: "Nature of DPSP (Part IV, Articles 36-51): Borrowed from Ireland; Establishes Socio-Economic Democracy & Welfare State; Non-Justiciable (Art 37)",
                  chips: ["भाग ४ (आयर्लंड)", "कल्याणकारी राज्य", "अ-न्यायप्रविष्ट", "कलम ३७ (कारभारात मूलभूत)"]
                },
                {
                  id: "st_gb_p05_01_02",
                  titleMr: "DPSP चे तीन भागात वर्गीकरण: १) समाजवादी (कलम ३८ लोककल्याण, कलम ३९ संपत्तीचे केंद्रीकरण रोखणे व समान कामासाठी समान वेतन, कलम ३९A मोफत कायदेशीर सहाय्य, कलम ४१ कामाचा हक्क); २) गांधीवादी (कलम ४० ग्रामपंचायतींची स्थापना, कलम ४३ कुटीर उद्योग, कलम ४६ दुर्बल घटकांचे हित, कलम ४७ दारूबंदी, कलम ४८ गोवंश हत्या बंदी); ३) उदारमतवादी (कलम ४४ समान नागरी कायदा, कलम ४५ बालकांचे संगोपन, कलम ५० न्यायव्यवस्था-कारोबारी विलगता, कलम ५१ आंतरराष्ट्रीय शांतता)",
                  titleEn: "Three-fold Classification: Socialistic (Arts 38, 39, 39A, 41), Gandhian (Arts 40, 43, 46, 47, 48), Liberal-Intellectual (Arts 44 UCC, 45, 50, 51 International Peace)",
                  chips: ["कलम ४० (ग्रामपंचायत)", "कलम ४४ (समान नागरी कायदा UCC)", "कलम ३९A (मोफत कायदेशीर सहाय्य)", "कलम ५० (न्यायव्यवस्था विलगता)", "कलम ५१"]
                },
                {
                  id: "st_gb_p05_01_03",
                  titleMr: "मूलभूत हक्क व मार्गदर्शक तत्त्वे यांमधील संघर्ष: चंपकम दोराईराजन (१९५१), मिनर्व्हा मिल्स खटला (१९८० - मूलभूत हक्क आणि DPSP हे संविधानाच्या रथाची दोन चाके आहेत, दोघांमध्ये संतुलन आवश्यक)",
                  titleEn: "Conflict between FR & DPSP: Champakam Dorairajan 1951, Minerva Mills Case 1980 (Balance between Part III & Part IV is Basic Structure)",
                  chips: ["मिनर्व्हा मिल्स खटला १९८०", "संतुलन सिद्धांत", "मूलभूत हक्क श्रेष्ठता"]
                },
                {
                  id: "st_gb_p05_01_04",
                  titleMr: "मूलभूत कर्तव्ये (भाग ४A, कलम ५१A): सोव्हिएत युनियनकडून (USSR) प्रेरणा; सरदार स्वर्णसिंह समितीच्या शिफारशीनुसार ४२ व्या घटनादुरुस्तीने (१९७६) १० कर्तव्ये समाविष्ट; न्यायप्रविष्ट नाहीत",
                  titleEn: "Fundamental Duties (Part IVA, Article 51A): Inspired by USSR; Swaran Singh Committee recommendations; 10 duties added by 42nd Amendment 1976",
                  chips: ["भाग ४A कलम ५१A", "USSR प्रेरणा", "सरदार स्वर्णसिंह समिती", "४२ वी दुरुस्ती १० कर्तव्ये"]
                },
                {
                  id: "st_gb_p05_01_05",
                  titleMr: "११ वे मूलभूत कर्तव्य: ८६ व्या घटनादुरुस्ती कायदा २००२ द्वारे कलम ५१A(k) जोडले - '६ ते १४ वर्षे वयोगटातील पाल्यास शिक्षणाची संधी उपलब्ध करून देणे हे पालकांचे कर्तव्य असेल'",
                  titleEn: "11th Fundamental Duty: Added by 86th Constitutional Amendment Act 2002 under Art 51A(k) - Duty of parents to provide education to child aged 6-14",
                  chips: ["११ वे कर्तव्य (८६ वी दुरुस्ती २००२)", "कलम ५१A(k)", "पालकांचे कर्तव्य"]
                }
              ],
              sources: [
                { book: "भारतीय राज्यव्यवस्था", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण ८ व ९: DPSP व मूलभूत कर्तव्ये" },
                { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ६ व ७: मार्गदर्शक तत्त्वे व कर्तव्ये" }
              ]
            }
          ]
        },


        // =========================================================================
        // विभाग B — केंद्रीय शासनसंस्था: कार्यकारी मंडळ व संसद (Union Government)
        // =========================================================================
        {
          id: "gb_pol_c06",
          code: "P06",
          section: "B",
          slug: "union-executive-president-vice-president-pm-com",
          nameMr: "केंद्रीय कार्यकारी मंडळ: राष्ट्रपती, उपराष्ट्रपती, पंतप्रधान व मंत्रिमंडळ",
          nameEn: "Union Executive: President, Vice-President, Prime Minister & Council of Ministers",
          name: "केंद्रीय कार्यकारी मंडळ (Union Executive)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 5,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_pol_c06",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_pol_c05",
          nextChapterId: "gb_pol_c07",
          metaDescriptionMr: "राष्ट्रपती (कलम ५२ ते ६२ - निवडणूक, अधिकार, कलम ६१ महाभियोग, कलम ७२ दयेचा अधिकार), उपराष्ट्रपती (कलम ६३-६९), पंतप्रधान व केंद्रीय मंत्रिमंडळ (कलम ७४-७५), ॲटर्नी जनरल (कलम ७६).",
          metaDescriptionEn: "In-depth review of Union Executive: President (Articles 52-62, Election, Powers, Art 61 Impeachment, Art 72 Pardon), Vice-President, PM & Council of Ministers (Articles 74-75), and Attorney General (Art 76).",
          notesJsonPath: "/data/notes/group_b/prelims/polity/c06_union_executive.json",
          quizTag: "gb_pol_exec_01",
          tags: ["Union Government", "President Article 52 to 62", "Impeachment Article 61", "Pardoning Power Article 72", "Prime Minister", "Attorney General", "High-Weightage"],
          searchKeywords: ["president of india articles 52 to 62", "presidential election electoral college", "article 61 impeachment", "article 72 pardoning power", "prime minister article 74 75", "attorney general article 76", "राष्ट्रपती निवडणूक", "कलम ६१ महाभियोग", "कलम ७२ क्षमादान", "पंतप्रधान मंत्रिमंडळ", "महान्यायवादी कलम ७६"],
          topics: [
            {
              id: "top_gb_p06_01",
              nameMr: "राष्ट्रपती, उपराष्ट्रपती, पंतप्रधान आणि महान्यायवादी यांची पदे व अधिकार",
              nameEn: "Constitutional Roles, Electoral Formats & Prerogatives of Union Executive",
              subtopics: [
                {
                  id: "st_gb_p06_01_01",
                  titleMr: "भारताचे राष्ट्रपती (कलम ५२ ते ६२): देशाचे घटनात्मक प्रमुख; निवडणूक पद्धत (कलम ५४ व ५५ - निर्वाचक गण / Electoral College: संसदेच्या दोन्ही सभागृहांचे निर्वाचित सदस्य + राज्यांच्या व दिल्ली-पुद्दुचेरी विधानसभांचे निर्वाचित सदस्य); एकल संक्रमणीय मताद्वारे प्रमाणशीर प्रतिनिधित्व",
                  titleEn: "President of India (Articles 52-62): Constitutional Head; Electoral College (Art 54-55: Elected MPs + Elected MLAs of States, Delhi & Puducherry); Proportional Representation via Single Transferable Vote",
                  chips: ["कलम ५२ ते ६२", "राष्ट्रपती निर्वाचक गण (Electoral College)", "केवळ निर्वाचित सदस्य", "प्रमाणशीर प्रतिनिधित्व"]
                },
                {
                  id: "st_gb_p06_01_02",
                  titleMr: "राष्ट्रपतींचा महाभियोग (कलम ६१): 'संविधानाचा भंग' या एकमेव कारणास्तव; संसदेच्या कोणत्याही सभागृहात प्रस्ताव (१/४ सदस्यांची स्वाक्षरी, १४ दिवसांची पूर्वसूचना); दोन्ही सभागृहांच्या एकूण सदस्यसंख्येच्या २/३ बहुमताने मंजूर होणे आवश्यक; यात केवळ संसदेचे सर्व सदस्य (नामनिर्देशितसह) भाग घेतात",
                  titleEn: "Impeachment of President (Article 61): Sole ground 'Violation of Constitution'; 14 days notice signed by 1/4th members; 2/3rd majority of Total Membership in both Houses",
                  chips: ["कलम ६१ महाभियोग", "संविधानाचा भंग", "२/३ एकूण सदस्य बहुमत", "१४ दिवसांची नोटीस"]
                },
                {
                  id: "st_gb_p06_01_03",
                  titleMr: "राष्ट्रपतींचे अधिकार: १) वटहुकूम काढण्याचा अधिकार (कलम १२३ - संसदेचे अधिवेशन सुरू नसताना, ६ आठवडे मुदत); २) दयेचा अधिकार (कलम ७२ - फाशी व लष्करी न्यायालयाची शिक्षा पूर्ण माफ, स्थगित किंवा कमी करणे); ३) तिन्ही सैन्यदलांचे सरसेनापती; ४) नकाराधिकार (Veto: Absolute, Suspensive, Pocket Veto)",
                  titleEn: "Presidential Powers: Ordinance Making (Art 123, 6-week lifespan), Pardoning Powers (Art 72 - Death sentence, Court Martial), Veto Powers (Absolute, Suspensive, Pocket)",
                  chips: ["कलम १२३ (वटहुकूम)", "कलम ७२ (क्षमादान अधिकार)", "नकाराधिकार (Veto)", "सरसेनापती"]
                },
                {
                  id: "st_gb_p06_01_04",
                  titleMr: "भारताचे उपराष्ट्रपती (कलम ६३ ते ६९): राज्यसभेचे पदसिद्ध सभापती (Ex-Officio Chairman कलम ६४); निवडणूक: संसदेच्या दोन्ही सभागृहांचे सर्व सदस्य (निर्वाचित + नामनिर्देशित) मिळून बनलेले निर्वाचक गण; राष्ट्रपतींच्या गैरहजेरीत जास्तीत जास्त ६ महिने कार्यवाहक राष्ट्रपती म्हणून कामकाज",
                  titleEn: "Vice-President of India (Articles 63-69): Ex-Officio Chairman of Rajya Sabha (Art 64); Electoral College consists of ALL MPs (Elected + Nominated); Acting President for max 6 months",
                  chips: ["कलम ६३ ते ६९", "राज्यसभा पदसिद्ध सभापती", "सर्व खासदार मतदान", "कार्यवाहक राष्ट्रपती ६ महिने"]
                },
                {
                  id: "st_gb_p06_01_05",
                  titleMr: "पंतप्रधान व केंद्रीय मंत्रिमंडळ: वास्तव कार्यकारी प्रमुख; कलम ७४ (राष्ट्रपतींना सल्ला देण्यासाठी मंत्रिमंडळ, सल्ला बंधनकारक); कलम ७५ (पंतप्रधानांची नियुक्ती राष्ट्रपतींद्वारे व इतर मंत्री राष्ट्रपतींद्वारे पंतप्रधानांच्या सल्ल्याने); मंत्रिमंडळ लोकसभेला एकत्रितपणे जबाबदार (Collective Responsibility); ९१ वी घटनादुरुस्ती (२००३ - मंत्रिमंडळाचा आकार लोकसभेच्या १५% पेक्षा जास्त नसावा)",
                  titleEn: "PM & Council of Ministers: Real Executive; Art 74 (Aid & Advice binding), Art 75 (Collective Responsibility to Lok Sabha); 91st Amendment 2003 (Ceiling of 15% of Lok Sabha strength)",
                  chips: ["वास्तव प्रमुख (De Facto)", "कलम ७४ व ७५", "लोकसभेला सामूहिक जबाबदारी", "९१ वी दुरुस्ती (१५ टक्के मर्यादा)"]
                },
                {
                  id: "st_gb_p06_01_06",
                  titleMr: "भारताचा महान्यायवादी (Attorney General of India, कलम ७६): देशातील सर्वोच्च कायदा अधिकारी; सर्वोच्च न्यायालयाचा न्यायाधीश होण्यासाठी आवश्यक पात्रता; राष्ट्रपतींची मर्जी असेपर्यंत पदावर; संसदेच्या दोन्ही सभागृहांत भाषण करण्याचा व कामकाजात भाग घेण्याचा अधिकार, परंतु मतदानाचा अधिकार नाही (कलम ८८)",
                  titleEn: "Attorney General of India (Article 76): Highest Law Officer; Qualified to be SC Judge; Holds office during pleasure of President; Right to speak in Parliament without voting rights (Art 88)",
                  chips: ["कलम ७६ (महान्यायवादी)", "सर्वोच्च कायदा अधिकारी", "संसदेत भाषणाचा अधिकार", "मतदानाचा अधिकार नाही (कलम ८८)"]
                }
              ],
              sources: [
                { book: "भारतीय राज्यव्यवस्था", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण १७, १८, १९, २०: राष्ट्रपती, उपराष्ट्रपती, पंतप्रधान व महान्यायवादी" },
                { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ८: केंद्रीय कार्यकारी मंडळ" }
              ]
            }
          ]
        },
        {
          id: "gb_pol_c07",
          code: "P07",
          section: "B",
          slug: "indian-parliament-lok-sabha-rajya-sabha-legislative-process",
          nameMr: "भारतीय संसद: राज्यसभा, लोकसभा व वैधानिक कायदे प्रक्रिया",
          nameEn: "Indian Parliament: Rajya Sabha, Lok Sabha & Legislative Procedures",
          name: "भारतीय संसद (Parliament of India)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 6,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_pol_c07",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_pol_c06",
          nextChapterId: "gb_pol_c08",
          metaDescriptionMr: "संसद (कलम ७९ ते १२२), राज्यसभा रचना व विशेष अधिकार (कलम २४९, ३१२), लोकसभा रचना व स्पीकर, धन विधेयक (कलम ११०), संयुक्त बैठक (कलम १०८), आणि संसदीय समित्या (PAC).",
          metaDescriptionEn: "In-depth review of Parliament (Articles 79-122): Rajya Sabha & Lok Sabha structures, Speaker powers, Money Bills (Art 110), Joint Sitting (Art 108), Budget procedures, and Parliamentary Committees (PAC, Estimates).",
          notesJsonPath: "/data/notes/group_b/prelims/polity/c07_parliament.json",
          quizTag: "gb_pol_parliament_01",
          tags: ["Union Government", "Parliament Articles 79 to 122", "Lok Sabha", "Rajya Sabha", "Money Bill Article 110", "Joint Sitting Article 108", "Public Accounts Committee", "High-Weightage"],
          searchKeywords: ["indian parliament articles 79 to 122", "rajya sabha special powers article 249 312", "speaker of lok sabha", "money bill article 110", "joint sitting article 108", "parliamentary committees pac", "संसद", "राज्यसभा", "लोकसभा अध्यक्ष", "धन विधेयक कलम ११०", "संयुक्त बैठक कलम १०८", "लोकलेखा समिती PAC"],
          topics: [
            {
              id: "top_gb_p07_01",
              nameMr: "संसदेची रचना, सभागृहांचे अधिकार, विधेयके आणि समित्या",
              nameEn: "Bicameral Structure, Legislative Process, Bills & Committee System",
              subtopics: [
                {
                  id: "st_gb_p07_01_01",
                  titleMr: "संसदेची रचना (कलम ७९): राष्ट्रपती, राज्यसभा व लोकसभा मिळून संसद बनते; कलम ८०: राज्यसभा (कमाल २५० जागा; सध्या २४५; २३३ निर्वाचित + १२ राष्ट्रपतींद्वारे साहित्य, विज्ञान, कला, समाजसेवा क्षेत्रांतून नामनिर्देशित; कायमस्वरूपी सभागृह, दर २ वर्षांनी १/३ सदस्य निवृत्त, ६ वर्षे कार्यकाळ; महाराष्ट्रातून १९ खासदार)",
                  titleEn: "Parliament Structure (Art 79): President, Rajya Sabha (Art 80: max 250, current 245, 12 nominated; permanent house, 1/3rd retire every 2 years, 6-yr tenure, 19 MPs from MH)",
                  chips: ["कलम ७९ (संसद रचना)", "राज्यसभा २५० जागा", "१२ नामनिर्देशित सदस्य", "महाराष्ट्रातून १९ राज्यसभा खासदार", "कायमस्वरूपी सभागृह"]
                },
                {
                  id: "st_gb_p07_01_02",
                  titleMr: "लोकसभा (कलम ८१): जनतेचे सभागृह; कमाल ५५० जागा (५३० राज्ये + २० केंद्रशासित; १०४ व्या घटनादुरुस्तीने ॲंग्लो-इंडियन नामनिर्देशन रद्द); सध्या ५४३ निर्वाचित जागा; ५ वर्षे कार्यकाळ; महाराष्ट्रातून ४८ खासदार (उत्तर प्रदेशनंतर देशात दुसरा क्रमांक)",
                  titleEn: "Lok Sabha (Art 81): House of People; Max 550 seats (Anglo-Indian quota abolished by 104th Amdt 2019); Current 543 elected; 5-yr term; Maharashtra has 48 MPs (2nd highest after UP)",
                  chips: ["लोकसभा ५४३ जागा", "महाराष्ट्रातून ४८ लोकसभा खासदार", "१०४ वी घटनादुरुस्ती (ॲंग्लो इंडियन कोटा रद्द)", "५ वर्षे कार्यकाळ"]
                },
                {
                  id: "st_gb_p07_01_03",
                  titleMr: "लोकसभा अध्यक्ष (Speaker, कलम ९३): सभागृहाचे प्रमुख, केवळ पहिल्या फेरीत मतदान नाही, बरोबरी झाल्यास निर्णायक मत (Casting Vote कलम १००); एखादे विधेयक धन विधेयक आहे की नाही हे ठरवण्याचा अंतिम अधिकार अध्यक्षांचा; १० व्या परिशिष्टानुसार पक्षांतरावरून अपात्रतेचा निर्णय",
                  titleEn: "Speaker of Lok Sabha (Art 93): Presiding officer; Casting Vote in tie (Art 100); Sole authority to certify Money Bill; Decides disqualification under 10th Schedule (Anti-Defection)",
                  chips: ["लोकसभा अध्यक्ष", "निर्णायक मत (Casting Vote)", "धन विधेयक प्रमाणपत्र", "१० वे परिशिष्ट पक्षांतर बंदी"]
                },
                {
                  id: "st_gb_p07_01_04",
                  titleMr: "राज्यसभेचे विशेष अधिकार: १) कलम २४९: राज्यसूचीतील विषयावर संसदेला कायदा करण्याचा अधिकार देणे (२/३ बहुमताने ठराव); २) कलम ३१२: नवीन अखिल भारतीय सेवा (All India Services) निर्माण करण्याचा अधिकार; ३) उपराष्ट्रपतींना पदावरून दूर करण्याचा प्रस्ताव केवळ राज्यसभेतच मांडला जातो",
                  titleEn: "Special Powers of Rajya Sabha: Art 249 (Legislate on State List items in national interest), Art 312 (Creation of New All India Services), Removal of VP initiates only in RS",
                  chips: ["कलम २४९ (राज्यसूचीवर कायदा)", "कलम ३१२ (नवीन IAS/IPS सेवा)", "उपराष्ट्रपती पदमुक्ती प्रस्ताव"]
                },
                {
                  id: "st_gb_p07_01_05",
                  titleMr: "विधेयकांचे प्रकार: १) सर्वसामान्य विधेयक; २) धन विधेयक (Money Bill - कलम ११०: केवळ राष्ट्रपतींच्या पूर्वसंमतीने लोकसभेत मांडले जाते, राज्यसभेला १४ दिवसांची मुदत, संयुक्त बैठकीची तरतूद नाही); ३) वित्त विधेयक (Finance Bill कलम ११७); ४) घटनादुरुस्ती विधेयक (कलम ३६८ - संयुक्त बैठक नाही)",
                  titleEn: "Types of Bills: Ordinary, Money Bill (Art 110: Lok Sabha exclusive, 14 days for RS, No Joint Sitting), Financial Bill (Art 117), Constitutional Amendment Bill (Art 368)",
                  chips: ["धन विधेयक कलम ११०", "केवळ लोकसभेत मांडणे", "राज्यसभेला १४ दिवस मुदत", "राष्ट्रपती पूर्वसंमती"]
                },
                {
                  id: "st_gb_p07_01_06",
                  titleMr: "दोन्ही सभागृहांची संयुक्त बैठक (Joint Sitting, कलम १०८): सर्वसामान्य विधेयकावरील मतभेद मिटवण्यासाठी राष्ट्रपतींद्वारे बोलावली जाते; बैठकीचे अध्यक्षस्थान लोकसभा अध्यक्ष भूषवतात; साध्या बहुमताने निर्णय (आतापर्यंत केवळ ३ वेळा: हुंडाबंदी १९६१, बँकिंग सेवा १९७८, पोटा कायदा २००२)",
                  titleEn: "Joint Sitting of Parliament (Article 108): Summoned by President to resolve deadlock on ordinary bills; Presided over by Lok Sabha Speaker; Decided by simple majority (Held only 3 times)",
                  chips: ["संयुक्त बैठक कलम १०८", "राष्ट्रपती बोलावतात", "लोकसभा अध्यक्ष अध्यक्षस्थानी", "आतापर्यंत ३ वेळा बैठक"]
                },
                {
                  id: "st_gb_p07_01_07",
                  titleMr: "प्रमुख संसदीय समित्या: १) लोकलेखा समिती (Public Accounts Committee - PAC): २२ सदस्य (१५ लोकसभा + ७ राज्यसभा), अध्यक्ष विरोधी पक्षाचा, CAG च्या अहवालाची तपासणी; २) अंदाज समिती (Estimates Committee): ३० सदस्य (सर्व केवळ लोकसभेचे, सर्वात मोठी स्थायी समिती); ३) सार्वजनिक उपक्रम समिती (COPU - २२ सदस्य)",
                  titleEn: "Key Parliamentary Committees: Public Accounts Committee (PAC: 22 members, CAG report review, Opposition leader chair), Estimates Committee (30 members, Lok Sabha only, largest standing committee), COPU",
                  chips: ["लोकलेखा समिती (PAC २२ सदस्य)", "CAG चा अहवाल तपासणी", "अंदाज समिती (३० सदस्य, फक्त लोकसभा)", "सार्वजनिक उपक्रम समिती"]
                }
              ],
              sources: [
                { book: "भारतीय राज्यव्यवस्था", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण २२ व २३: संसद व संसदीय समित्या" },
                { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ९: भारतीय संसद व कायदेप्रक्रिया" }
              ]
            }
          ]
        },


        // =========================================================================
        // विभाग C — राज्य शासनसंस्था: महाराष्ट्र विशेष संदर्भ (State Government)
        // =========================================================================
        {
          id: "gb_pol_c08",
          code: "P08",
          section: "C",
          slug: "state-executive-governor-cm-com-advocate-general",
          nameMr: "राज्य कार्यकारी मंडळ: राज्यपाल, मुख्यमंत्री, मंत्रिमंडळ व महाधिवक्ता",
          nameEn: "State Executive: Governor, Chief Minister, Council of Ministers & Advocate General",
          name: "राज्य कार्यकारी मंडळ (State Executive of Maharashtra)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 5,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_pol_c08",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_pol_c07",
          nextChapterId: "gb_pol_c09",
          metaDescriptionMr: "राज्यपाल (कलम १५३ ते १६१ - नियुक्ती, स्वेच्छाधीन अधिकार, कलम २१३ वटहुकूम), मुख्यमंत्री व मंत्रिमंडळ (कलम १६३-१६४), महाधिवक्ता (कलम १६५) आणि कलम ३७१(२) विदर्भ-मराठवाडा विकास मंडळे.",
          metaDescriptionEn: "In-depth review of State Executive: Governor (Articles 153-161, Discretionary powers, Art 213 Ordinance), CM & Cabinet, Advocate General (Art 165), and Article 371(2) Special Development Boards for Maharashtra.",
          notesJsonPath: "/data/notes/group_b/prelims/polity/c08_state_executive.json",
          quizTag: "gb_pol_state_exec_01",
          tags: ["State Government", "Governor Articles 153 to 161", "Discretionary Powers", "Chief Minister", "Advocate General Article 165", "Article 371(2) Maharashtra", "High-Weightage"],
          searchKeywords: ["governor of state articles 153 to 161", "governor discretionary powers article 163", "ordinance by governor article 213", "chief minister article 164", "advocate general article 165", "article 371 2 vidarbha marathwada", "राज्यपाल", "स्वेच्छाधीन अधिकार", "कलम २१३ वटहुकूम", "मुख्यमंत्री", "महाधिवक्ता कलम १६५", "कलम ३७१(२) विकास मंडळे"],
          topics: [
            {
              id: "top_gb_p08_01",
              nameMr: "राज्यपाल, मुख्यमंत्री, मंत्रिमंडळ व महाराष्ट्रातील वैधानिक मंडळे",
              nameEn: "Governor's Dual Role, Discretion, Cabinet Functioning & Art 371(2) Boards",
              subtopics: [
                {
                  id: "st_gb_p08_01_01",
                  titleMr: "राज्यपाल (कलम १५३ ते १६१): राज्याचा घटनात्मक प्रमुख व केंद्राचा प्रतिनिधी; नियुक्ती राष्ट्रपतींद्वारे (कलम १५५); राष्ट्रपतींची मर्जी असेपर्यंत पदावर (कलम १५६); किमान वय ३५ वर्षे; ७ वी घटनादुरुस्ती (१९५६ - एकाच व्यक्तीची दोन किंवा अधिक राज्यांसाठी राज्यपाल म्हणून नियुक्ती शक्य)",
                  titleEn: "Governor of State (Articles 153-161): Constitutional Head & Centre's Agent; Appointed by President (Art 155); Holds office during pleasure of President; 7th Amdt 1956 (Same person as Governor for 2+ States)",
                  chips: ["कलम १५३ ते १६१", "राष्ट्रपतींची मर्जी", "किमान ३५ वर्षे वय", "७ वी घटनादुरुस्ती १९५६"]
                },
                {
                  id: "st_gb_p08_01_02",
                  titleMr: "राज्यपालांचे अधिकार व कार्ये: १) वटहुकूम काढण्याचा अधिकार (कलम २१३ - विधिमंडळ अधिवेशन सुरू नसताना, ६ आठवडे मुदत); २) दयेचा अधिकार (कलम १६१ - फाशीची शिक्षा पूर्ण माफ करण्याचा अधिकार नाही); ३) विधेयक राष्ट्रपतींच्या संमतीसाठी राखून ठेवणे (कलम २०० व २०१); ४) स्वेच्छाधीन अधिकार (Discretionary Powers - कलम १६३)",
                  titleEn: "Gubernatorial Powers: Ordinance Making (Art 213), Pardoning Power (Art 161 - Cannot pardon death sentence), Reserve bills for President (Arts 200, 201) & Discretionary Powers (Art 163)",
                  chips: ["कलम २१३ (राज्य वटहुकूम)", "कलम १६१ (दयेचा अधिकार)", "कलम २०० (विधेयक राखीव ठेवणे)", "कलम १६३ (स्वेच्छाधीन अधिकार)"]
                },
                {
                  id: "st_gb_p08_01_03",
                  titleMr: "कलम ३७१(२) - महाराष्ट्र विशेष तरतुदी: राष्ट्रपतींच्या आदेशानुसार राज्यपालांवर विशेष जबाबदारी; विदर्भ, मराठवाडा आणि उर्वरित महाराष्ट्रासाठी स्वतंत्र वैधानिक विकास महामंडळांची स्थापना (Development Boards), विकासासाठी समन्यायी निधी वाटप व तांत्रिक शिक्षणात समान संधी",
                  titleEn: "Article 371(2) Special Provisions for Maharashtra: Governor's special responsibility for separate Development Boards for Vidarbha, Marathwada & Rest of Maharashtra",
                  chips: ["कलम ३७१(२) महाराष्ट्र", "वैधानिक विकास महामंडळे", "विदर्भ मराठवाडा", "समन्यायी निधी वाटप"]
                },
                {
                  id: "st_gb_p08_01_04",
                  titleMr: "मुख्यमंत्री व राज्य मंत्रिमंडळ (कलम १६३ व १६४): वास्तव कार्यकारी प्रमुख; मुख्यमंत्र्यांची नियुक्ती राज्यपालांद्वारे व इतर मंत्री मुख्यमंत्र्यांच्या सल्ल्याने; मंत्रिमंडळ विधानसभेला एकत्रित जबाबदार; ९१ व्या घटनादुरुस्तीनुसार मंत्रिमंडळाचा आकार विधानसभेच्या किमान १२ मंत्री व कमाल १५% (महाराष्ट्रात कमाल ४३ मंत्री)",
                  titleEn: "CM & State Cabinet (Articles 163-164): Real Executive; Appointed by Governor; Collectively responsible to Legislative Assembly; 91st Amdt ceiling: Min 12 ministers, Max 15% (Max 43 in MH)",
                  chips: ["मुख्यमंत्री (De Facto)", "कलम १६३ व १६४", "विधानसभेला सामूहिक जबाबदारी", "कमाल ४३ मंत्री (१५ टक्के)"]
                },
                {
                  id: "st_gb_p08_01_05",
                  titleMr: "राज्याचा महाधिवक्ता (Advocate General for State, कलम १६५): राज्याचा सर्वोच्च कायदा अधिकारी; उच्च न्यायालयाचा न्यायाधीश होण्यासाठी आवश्यक पात्रता; राज्यपालांची मर्जी असेपर्यंत पदावर; विधिमंडळाच्या कामकाजात भाग घेण्याचा अधिकार, पण मतदानाचा अधिकार नाही (कलम १७७)",
                  titleEn: "Advocate General for the State (Article 165): Highest Law Officer in State; Qualified to be HC Judge; Holds office during pleasure of Governor; Right to speak in Legislature without voting right (Art 177)",
                  chips: ["कलम १६५ (महाधिवक्ता)", "राज्याचा सर्वोच्च कायदा अधिकारी", "विधिमंडळात भाषण (कलम १७७)", "मतदानाचा अधिकार नाही"]
                }
              ],
              sources: [
                { book: "भारतीय राज्यव्यवस्था", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण ३०, ३१, ३२, ३३: राज्यपाल, मुख्यमंत्री व महाधिवक्ता" },
                { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण १०: राज्य कार्यकारी मंडळ" }
              ]
            }
          ]
        },
        {
          id: "gb_pol_c09",
          code: "P09",
          section: "C",
          slug: "state-legislature-vidhan-sabha-vidhan-parishad-maharashtra",
          nameMr: "महाराष्ट्र राज्य विधिमंडळ: विधानसभा व विधानपरिषद रचना आणि कामकाज",
          nameEn: "Maharashtra State Legislature: Vidhan Sabha & Vidhan Parishad Dynamics",
          name: "राज्य विधिमंडळ (State Legislature - Maharashtra)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 5,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_pol_c09",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_pol_c08",
          nextChapterId: "gb_pol_c10",
          metaDescriptionMr: "राज्य विधिमंडळ (कलम १६८ ते २१२), विधानसभा (२८८ जागा), विधानपरिषद (७८ जागा, कलम १६९ निर्मिती/बरखास्ती), सदस्य पात्रता, कायदे प्रक्रिया आणि अधिवेशन कामकाज.",
          metaDescriptionEn: "In-depth review of State Legislature (Articles 168-212): Maharashtra Legislative Assembly (288 seats), Legislative Council (78 seats, Art 169 creation/abolition), electoral mechanics, and lawmaking.",
          notesJsonPath: "/data/notes/group_b/prelims/polity/c09_state_legislature.json",
          quizTag: "gb_pol_state_leg_01",
          tags: ["State Government", "State Legislature Articles 168 to 212", "Vidhan Sabha 288", "Vidhan Parishad 78", "Article 169 Legislative Council", "Maharashtra Focus", "High-Weightage"],
          searchKeywords: ["state legislature articles 168 to 212", "maharashtra vidhan sabha 288 seats", "maharashtra vidhan parishad 78 seats", "article 169 creation abolition council", "speaker chairman state legislature", "महाराष्ट्र विधिमंडळ", "विधानसभा २८८ जागा", "विधानपरिषद ७८ जागा", "कलम १६९ विधानपरिषद निर्मिती"],
          topics: [
            {
              id: "top_gb_p09_01",
              nameMr: "द्विगृही विधिमंडळ, रचना, जागांची विभागणी आणि वैधानिक प्रक्रिया",
              nameEn: "Bicameral Legislature, Seat Distribution, Electoral Math & Procedures",
              subtopics: [
                {
                  id: "st_gb_p09_01_01",
                  titleMr: "द्विगृही विधिमंडळ (कलम १६८): भारतातील ६ राज्यांत द्विगृही विधिमंडळ आहे (महाराष्ट्र, कर्नाटक, उत्तर प्रदेश, बिहार, आंध्र प्रदेश, तेलंगणा); कलम १६९ अन्वये संसदेला संबंधित राज्याच्या विधानसभेच्या २/३ बहुमताच्या ठरावानंतर विधानपरिषद निर्माण किंवा रद्द करण्याचा अधिकार",
                  titleEn: "Bicameralism (Art 168): 6 States with Bicameralism (MH, KA, UP, BR, AP, TS); Article 169 empowers Parliament to create or abolish Legislative Council based on Assembly's special majority resolution",
                  chips: ["६ राज्यांत द्विगृही", "कलम १६९ (विधानपरिषद निर्मिती/बरखास्ती)", "संसदेचा अधिकार"]
                },
                {
                  id: "st_gb_p09_01_02",
                  titleMr: "महाराष्ट्र विधानसभा (कलम १७०): जनतेचे कनिष्ठ सभागृह; एकूण २८८ निर्वाचित जागा (SC साठी २९ राखीव, ST साठी २५ राखीव जागा); ५ वर्षे कार्यकाळ; किमान वय २५ वर्षे; विधानसभा अध्यक्ष (Speaker) व उपाध्यक्ष",
                  titleEn: "Maharashtra Legislative Assembly (Art 170): 288 Elected Seats (29 SC, 25 ST reserved); 5-yr tenure; Minimum age 25; Presiding officer is Speaker",
                  chips: ["विधानसभा २८८ जागा", "SC २९ जागा राखीव", "ST २५ जागा राखीव", "किमान २५ वर्षे वय"]
                },
                {
                  id: "st_gb_p09_01_03",
                  titleMr: "महाराष्ट्र विधानपरिषद (कलम १७१): वरिष्ठ कायमस्वरूपी सभागृह; एकूण ७८ जागा; १/३ सदस्य दर २ वर्षांनी निवृत्त (६ वर्षे कार्यकाळ); किमान वय ३० वर्षे; सभापती व उपसभापती",
                  titleEn: "Maharashtra Legislative Council (Art 171): Upper Permanent House; Total 78 Seats; 1/3rd retire every 2 years (6-yr tenure); Minimum age 30; Chairman & Dy Chairman",
                  chips: ["विधानपरिषद ७८ जागा", "कायमस्वरूपी सभागृह", "किमान ३० वर्षे वय", "६ वर्षे कार्यकाळ"]
                },
                {
                  id: "st_gb_p09_01_04",
                  titleMr: "विधानपरिषदेच्या ७८ जागांची निवडणूक रचना: १) १/३ सदस्य (२६) स्थानिक स्वराज्य संस्थांतून; २) १/३ सदस्य (२६) विधानसभेच्या आमदारांद्वारे; ३) १/१२ सदस्य (७) पदवीधर मतदारसंघातून; ४) १/१२ सदस्य (७) शिक्षक मतदारसंघातून; ५) १/६ सदस्य (१२) राज्यपालांद्वारे नामनिर्देशित (साहित्य, विज्ञान, कला, सहकार, समाजसेवा)",
                  titleEn: "Electoral Math for MH Legislative Council (78 seats): 1/3 Local Bodies (26), 1/3 MLAs (26), 1/12 Graduates (7), 1/12 Teachers (7), 1/6 Governor Nominated (12 - Literature, Science, Art, Cooperative Movement, Social Service)",
                  chips: ["१/३ स्थानिक स्वराज्य (२६)", "१/३ विधानसभा आमदार (२६)", "१/१२ पदवीधर (७)", "१/१२ शिक्षक (७)", "१/६ राज्यपाल नामनिर्देशित (१२)"]
                },
                {
                  id: "st_gb_p09_01_05",
                  titleMr: "राज्य विधिमंडळाची कायदेप्रक्रिया: धन विधेयक केवळ विधानसभेत मांडले जाते; विधानपरिषदेला धन विधेयकावर केवळ १४ दिवसांची मुदत; सर्वसामान्य विधेयकावर विधानपरिषदेला केवळ ४ महिने विलंब लावण्याचा अधिकार (पहिल्या फेरीत ३ महिने + दुसऱ्या फेरीत १ महिना); राज्यात संयुक्त बैठकीची कोणतीही तरतूद नाही",
                  titleEn: "Legislative Procedure in State: Money Bill only in Assembly (Council has 14 days); Council can only delay Ordinary Bills for max 4 months (3+1); NO provision for Joint Sitting in States",
                  chips: ["विधानपरिषदेला ४ महिने विलंब अधिकार", "धन विधेयक १४ दिवस", "राज्यात संयुक्त बैठक नाही"]
                }
              ],
              sources: [
                { book: "भारतीय राज्यव्यवस्था", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण ३४: राज्य विधिमंडळ" },
                { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ११: महाराष्ट्र राज्य विधिमंडळ" }
              ]
            }
          ]
        },


        // =========================================================================
        // विभाग D — एकात्मिक न्यायव्यवस्था (The Judiciary)
        // =========================================================================
        {
          id: "gb_pol_c10",
          code: "P10",
          section: "D",
          slug: "indian-judiciary-supreme-court-and-high-court",
          nameMr: "भारतीय न्यायव्यवस्था: सर्वोच्च न्यायालय, उच्च न्यायालय व दुय्यम न्यायालये",
          nameEn: "Indian Judiciary: Supreme Court, High Court & Subordinate Courts",
          name: "भारतीय न्यायव्यवस्था (Supreme Court & High Court)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 5,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_pol_c10",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_pol_c09",
          nextChapterId: "gb_pol_c11",
          metaDescriptionMr: "सर्वोच्च न्यायालय (कलम १२४ ते १४७ - कॉलेजियम पद्धत, अधिकारक्षेत्र), मुंबई उच्च न्यायालय (कलम २१४ ते २३१ - खंडपीठे नागपूर, औरंगाबाद, पणजी), आणि दुय्यम न्यायालये.",
          metaDescriptionEn: "In-depth review of Integrated Judiciary: Supreme Court (Articles 124-147, Collegium, Original/Appellate/Advisory Jurisdictions), Bombay High Court (Articles 214-231, Benches at Nagpur, Aurangabad, Panaji), and Subordinate Courts.",
          notesJsonPath: "/data/notes/group_b/prelims/polity/c10_judiciary.json",
          quizTag: "gb_pol_judiciary_01",
          tags: ["Judiciary", "Supreme Court Articles 124 to 147", "High Court Articles 214 to 231", "Bombay High Court Benches", "Collegium System", "Judicial Review", "High-Weightage"],
          searchKeywords: ["supreme court articles 124 to 147", "collegium system njac 99th amendment", "original writ appellate advisory jurisdiction article 143", "high court articles 214 to 231", "bombay high court 1862 benches nagpur chhatrapati sambhajinagar panaji", "सर्वोच्च न्यायालय", "कॉलेजियम पद्धत", "सल्लागार अधिकारक्षेत्र कलम १४३", "मुंबई उच्च न्यायालय १८६२", "नागपूर छत्रपती संभाजीनगर पणजी खंडपीठ"],
          topics: [
            {
              id: "top_gb_p10_01",
              nameMr: "सर्वोच्च व उच्च न्यायालयांची रचना, अधिकारक्षेत्र व न्यायमूर्तींची नियुक्ती",
              nameEn: "Hierarchical Bench Structure, Jurisdictions & Collegium Appointments",
              subtopics: [
                {
                  id: "st_gb_p10_01_01",
                  titleMr: "सर्वोच्च न्यायालय (कलम १२४ ते १४७): स्थापना २८ जानेवारी १९५० (नवी दिल्ली); रचना: १ सरन्यायाधीश (CJI) + ३३ इतर न्यायामूर्ती (एकूण ३४); कॉलेजियम पद्धतीद्वारे राष्ट्रपतींकडून नियुक्ती; निवृत्ती वय ६५ वर्षे; पदमुक्ती (कलम १२४(४) संसदेच्या विशेष बहुमताने महाभियोग सदृश प्रक्रिया)",
                  titleEn: "Supreme Court (Articles 124-147): Established 28 Jan 1950; Bench: 1 CJI + 33 Judges (Total 34); Appointed by President via Collegium; Retirement age 65; Impeachment under Art 124(4)",
                  chips: ["सर्वोच्च न्यायालय (१+३३ = ३४ न्यायाधीश)", "निवृत्ती वय ६५ वर्षे", "कॉलेजियम पद्धत", "पदमुक्ती विशेष बहुमत"]
                },
                {
                  id: "st_gb_p10_01_02",
                  titleMr: "सर्वोच्च न्यायालयाचे अधिकारक्षेत्र: १) मूळ अधिकारक्षेत्र (Original Jurisdiction कलम १३१ - केंद्र-राज्य किंवा आंतरराज्य विवाद); २) रिट अधिकारक्षेत्र (कलम ३२); ३) अपील अधिकारक्षेत्र (कलम १३२-१३४); ४) सल्लागार अधिकारक्षेत्र (Advisory Jurisdiction कलम १४३ - राष्ट्रपतींनी विचारलेला कायदेशीर सल्ला); ५) अभिलेख न्यायालय (Court of Record कलम १२९)",
                  titleEn: "Supreme Court Jurisdictions: Original (Art 131 - Federal disputes), Writ (Art 32), Appellate (Arts 132-134), Advisory (Art 143 - President's reference), Court of Record (Art 129)",
                  chips: ["कलम १३१ (मूळ अधिकारक्षेत्र)", "कलम १४३ (राष्ट्रपती सल्लागार अधिकार)", "कलम ३२ (रिट अधिकार)", "कलम १२९ (अभिलेख न्यायालय)"]
                },
                {
                  id: "st_gb_p10_01_03",
                  titleMr: "उच्च न्यायालये (कलम २१४ ते २३१): भारतात सध्या एकूण २५ उच्च न्यायालये; न्यायामूर्तींची नियुक्ती राष्ट्रपतींद्वारे; निवृत्ती वय ६२ वर्षे; रिट अधिकारक्षेत्र (कलम २२६ - मूलभूत हक्क तसेच इतर कायदेशीर हक्कांसाठी; सर्वोच्च न्यायालयापेक्षा रिट अधिकार व्यापक)",
                  titleEn: "High Courts (Articles 214-231): 25 High Courts in India; Appointed by President; Retirement age 62; Writ Jurisdiction under Art 226 (Broader than SC as it covers legal rights too)",
                  chips: ["२५ उच्च न्यायालये", "निवृत्ती वय ६२ वर्षे", "कलम २२६ रिट अधिकार (व्यापक)"]
                },
                {
                  id: "st_gb_p10_01_04",
                  titleMr: "मुंबई उच्च न्यायालय (स्थापना १४ ऑगस्ट १८६२): अधिकारक्षेत्र: महाराष्ट्र राज्य, गोवा राज्य, आणि दादरा-नगर हवेली व दमण-दीव केंद्रशासित प्रदेश; मुख्य पीठ: मुंबई; ३ खंडपीठे (Benches): १) नागपूर, २) छत्रपती संभाजीनगर (औरंगाबाद), ३) पणजी (गोवा)",
                  titleEn: "Bombay High Court (Est. 14 Aug 1862): Territorial Jurisdiction: Maharashtra, Goa, Dadra & Nagar Haveli and Daman & Diu; Principal Seat: Mumbai; 3 Benches: Nagpur, Chhatrapati Sambhajinagar, Panaji",
                  chips: ["मुंबई उच्च न्यायालय १८६२", "नागपूर खंडपीठ", "छत्रपती संभाजीनगर खंडपीठ", "पणजी (गोवा) खंडपीठ"]
                },
                {
                  id: "st_gb_p10_01_05",
                  titleMr: "दुय्यम न्यायालये, लोकअदालत व ग्राहक मंचांची रचना: जिल्हा न्यायाधीश नियुक्ती राज्यपालांद्वारे (कलम २३३); लोकअदालत (विधी सेवा प्राधिकरण कायदा १९८७ - निवाड्याविरुद्ध अपील नाही, जलद न्याय)",
                  titleEn: "Subordinate Courts, Lok Adalats & Consumer Forums: District Judges appointed by Governor (Art 233); Lok Adalats (NALSA Act 1987 - Statutory status, no appeal against award)",
                  chips: ["कलम २३३ (जिल्हा न्यायाधीश)", "लोकअदालत (NALSA १९८७)", "तडजोड निकाल"]
                }
              ],
              sources: [
                { book: "भारतीय राज्यव्यवस्था", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण २५, ३५, ३६: सर्वोच्च न्यायालय, उच्च न्यायालय व दुय्यम न्यायालये" },
                { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण १२: भारतीय न्यायव्यवस्था" }
              ]
            }
          ]
        },


        // =========================================================================
        // विभाग E — स्थानिक स्वराज्य संस्था: पंचायत राज व नागरी संस्था (Panchayati Raj - 73rd & 74th)
        // =========================================================================
        {
          id: "gb_pol_c11",
          code: "P11",
          section: "E",
          slug: "panchayati-raj-evolution-and-73rd-amendment-1992",
          nameMr: "पंचायत राज उत्क्रांती, समित्या आणि ७३ वी घटनादुरुस्ती (१९९२)",
          nameEn: "Evolution of Panchayati Raj, Key Committees & 73rd Amendment Act 1992",
          name: "पंचायत राज उत्क्रांती व ७३ वी दुरुस्ती (Panchayati Raj & 73rd Amendment)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 5,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_pol_c11",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_pol_c10",
          nextChapterId: "gb_pol_c12",
          metaDescriptionMr: "बलवंतराय मेहता (१९५७), अशोक मेहता, एल. एम. सिंघवी, ७३ वी घटनादुरुस्ती (भाग ९, कलम २४३ ते २४३O, ११ वे परिशिष्ट २९ विषय), आणि वसंतराव नाईक समिती.",
          metaDescriptionEn: "In-depth review of Panchayati Raj evolution: Balwant Rai Mehta (1957), Ashok Mehta, L.M. Singhvi, 73rd Amendment Act 1992 (Part IX, Articles 243-243O, 11th Schedule 29 items), and Vasantrao Naik Committee in Maharashtra.",
          notesJsonPath: "/data/notes/group_b/prelims/polity/c11_panchayati_raj_73rd.json",
          quizTag: "gb_pol_pr_73rd_01",
          tags: ["Core", "Panchayati Raj", "73rd Amendment 1992", "Part IX", "Articles 243 to 243O", "11th Schedule 29 Subjects", "Balwant Rai Mehta", "High-Weightage"],
          searchKeywords: ["panchayati raj evolution", "balwant rai mehta committee 1957", "73rd constitutional amendment 1992", "part ix articles 243 to 243o", "11th schedule 29 subjects", "vasantrao naik committee maharashtra 1960", "पंचायत राज उत्क्रांती", "बलवंतराय मेहता समिती १९५७", "७३ वी घटनादुरुस्ती १९९२", "भाग ९ कलम २४३", "११ वे परिशिष्ट २९ विषय", "वसंतराव नाईक समिती"],
          topics: [
            {
              id: "top_gb_p11_01",
              nameMr: "पंचायत राज समित्या, घटनात्मक दर्जा आणि २४३ कलमांची रचना",
              nameEn: "Committees Roadmap, Constitutionalization & Article 243 Framework",
              subtopics: [
                {
                  id: "st_gb_p11_01_01",
                  titleMr: "राष्ट्रीय स्तरावरील समित्या: १) बलवंतराय मेहता समिती (१९५७ - लोकशाही विकेंद्रीकरण, ३-स्तरीय पंचायत राज शिफारस; २ ऑक्टोबर १९५९ रोजी राजस्थानमधील नागौर येथे देशात पहिली पंचायत सुरू); २) अशोक मेहता समिती (१९७७ - २-स्तरीय रचना शिफारस); ३) जी. व्ही. के. राव समिती (१९८५ - 'मुळांशिवाय गवत'); ४) एल. एम. सिंघवी समिती (१९८६ - पंचायत राजला घटनात्मक दर्जा देण्याची पहिली शिफारस)",
                  titleEn: "National Committees: Balwant Rai Mehta 1957 (3-tier PR, launched 2 Oct 1959 at Nagaur Rajasthan), Ashok Mehta 1977 (2-tier), G.V.K. Rao 1985, L.M. Singhvi 1986 (Recommended constitutional status)",
                  chips: ["बलवंतराय मेहता समिती १९५७", "नागौर राजस्थान (२ ऑक्टो १९५९)", "अशोक मेहता (२-स्तर)", "एल एम सिंघवी (घटनात्मक दर्जा)"]
                },
                {
                  id: "st_gb_p11_01_02",
                  titleMr: "महाराष्ट्रातील पंचायत राज समित्या: १) वसंतराव नाईक समिती (१९६० - जिल्हा परिषद सर्वाधिक शक्तिशाली असावी ही शिफारस; १ मे १९६२ रोजी महाराष्ट्रात पंचायत राज सुरू - ९ वे राज्य); २) ल. ना. बोंगिरवार समिती (१९७०); ३) पी. बी. पाटील समिती (१९८४ - सरपंच जनतेतून निवडण्याची शिफारस)",
                  titleEn: "Maharashtra Committees: Vasantrao Naik Committee 1960 (Zilla Parishad as apex powerful tier; MH adopted PR on 1 May 1962 as 9th State), Bongirwar 1970, P.B. Patil 1984",
                  chips: ["वसंतराव नाईक समिती १९६०", "१ मे १९६२ (महाराष्ट्र ९ वे राज्य)", "जिल्हा परिषद केंद्रबिंदू", "पी बी पाटील समिती"]
                },
                {
                  id: "st_gb_p11_01_03",
                  titleMr: "७३ वी घटनादुरुस्ती कायदा १९९२: २४ एप्रिल १९९३ रोजी अंमलात (२४ एप्रिल - राष्ट्रीय पंचायत राज दिन); संविधानात भाग ९ व ११ वे परिशिष्ट जोडले (२९ विषयांचा समावेश); ३-स्तरीय पंचायत राज अनिवार्य",
                  titleEn: "73rd Amendment Act 1992: Enacted on 24 April 1993 (National Panchayati Raj Day); Added Part IX & 11th Schedule with 29 Functional Subjects",
                  chips: ["७३ वी दुरुस्ती १९९२", "२४ एप्रिल पंचायत राज दिन", "भाग ९ जोडला", "११ वे परिशिष्ट (२९ विषय)"]
                },
                {
                  id: "st_gb_p11_01_04",
                  titleMr: "कलम २४३ मधील मुख्य उप-कलमे: कलम २४३A (ग्रामसभा); कलम २४३B (पंचायतींची ३-स्तरीय रचना); कलम २४३D (महिलांना किमान १/३ आरक्षण; महाराष्ट्रात ५०% आरक्षण); कलम २४३E (५ वर्षे कार्यकाळ, विसर्जित झाल्यास ६ महिन्यांत निवडणूक); कलम २४३I (राज्य वित्त आयोग - दर ५ वर्षांनी राज्यपालांकडून स्थापना); कलम २४३K (राज्य निवडणूक आयोग - निवडणुकांचे संचालन)",
                  titleEn: "Key Clauses of Article 243: 243A (Gram Sabha), 243B (Constitution), 243D (Reservation, 50% for women in MH), 243E (5-yr duration), 243I (State Finance Commission), 243K (State Election Commission)",
                  chips: ["कलम २४३A (ग्रामसभा)", "कलम २४३D (५० टक्के महिला आरक्षण MH)", "कलम २४३I (राज्य वित्त आयोग)", "कलम २४३K (राज्य निवडणूक आयोग)"]
                }
              ],
              sources: [
                { book: "पंचायत राज", standard: "किशोर लवटे / के. सागर", chapterRef: "प्रकरण १ व २: पंचायत राज उत्क्रांती व ७३ वी दुरुस्ती" },
                { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण १३: स्थानिक स्वराज्य संस्था" }
              ]
            }
          ]
        },
        {
          id: "gb_pol_c12",
          code: "P12",
          section: "E",
          slug: "rural-local-government-maharashtra-gram-panchayat-zp-ps",
          nameMr: "महाराष्ट्रातील ग्रामीण स्थानिक स्वराज्य संस्था: ग्रामपंचायत, पंचायत समिती व जिल्हा परिषद",
          nameEn: "Rural Local Government in Maharashtra: Gram Panchayat, Panchayat Samiti & Zilla Parishad",
          name: "महाराष्ट्रातील पंचायत राज रचना (Rural Local Bodies of Maharashtra)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 6,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_pol_c12",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_pol_c11",
          nextChapterId: "gb_pol_c13",
          metaDescriptionMr: "महाराष्ट्र ग्रामपंचायत अधिनियम १९५८ (रचना, ७ ते १७ सदस्य, ग्रामसभा, सरपंच, ग्रामसेवक), महाराष्ट्र ZP व PS अधिनियम १९६१, BDO, आणि CEO (मुख्य कार्यकारी अधिकारी).",
          metaDescriptionEn: "In-depth review of Maharashtra Village Panchayats Act 1958 (Gram Sabha, 7-17 members, Sarpanch, Gram Sevak) and Maharashtra Zilla Parishads & Panchayat Samitis Act 1961 (BDO, CEO, Subject Committees).",
          notesJsonPath: "/data/notes/group_b/prelims/polity/c12_rural_local_government.json",
          quizTag: "gb_pol_rural_01",
          tags: ["Core", "Panchayati Raj", "Gram Panchayat Act 1958", "ZP and PS Act 1961", "Gram Sevak", "BDO", "CEO ZP", "Maharashtra Specific", "High-Weightage"],
          searchKeywords: ["maharashtra village panchayats act 1958", "gram sabha mandatory 4 meetings", "sarpanch direct indirect election", "gram sevak secretary", "zp and panchayat samiti act 1961", "block development officer bdo", "chief executive officer ceo zp", "ग्रामपंचायत कायदा १९५८", "ग्रामसभा ४ बैठका", "सरपंच", "ग्रामसेवक", "जिल्हा परिषद व पंचायत समिती कायदा १९६१", "BDO", "CEO गट विकास अधिकारी"],
          topics: [
            {
              id: "top_gb_p12_01",
              nameMr: "ग्रामपंचायत, पंचायत समिती व जिल्हा परिषद: कायदे, पदे व प्रशासकीय यंत्रणा",
              nameEn: "Tri-Tier Structure, Statutes, Officials & Administrative Framework",
              subtopics: [
                {
                  id: "st_gb_p12_01_01",
                  titleMr: "ग्रामपंचायत (महाराष्ट्र ग्रामपंचायत अधिनियम १९५८): सदस्यसंख्या: ७ ते १७ (लोकसंख्येनुसार विषम संख्येत); वॉर्ड/प्रभाग रचना; सरपंच व उपसरपंच; ५०% महिला आरक्षण; थेट जनतेतून सरपंच निवड (सुधारित तरतूद); अविश्वास ठराव (२/३ बहुमत, महिला सरपंचासाठी ३/४ बहुमत)",
                  titleEn: "Gram Panchayat (Act of 1958): Strength 7 to 17 members; 50% Women quota; Direct Sarpanch election mode; No-confidence motion (2/3rd majority, 3/4th for female Sarpanch)",
                  chips: ["ग्रामपंचायत कायदा १९५८", "सदस्य ७ ते १७", "५० टक्के महिला आरक्षण", "थेट सरपंच निवड", "अविश्वास ठराव"]
                },
                {
                  id: "st_gb_p12_01_02",
                  titleMr: "ग्रामसभा व ग्रामसेवक: ग्रामसभा (गावातील सर्व नोंदणीकृत मतदार; वर्षातून किमान ४ बैठका बंधनकारक: २६ जानेवारी, १ मे, १५ ऑगस्ट, २ ऑक्टोबर); ग्रामसेवक: ग्रामपंचायतीचा प्रशासकीय सचिव (जिल्हा परिषदेचा वर्ग-३ कर्मचारी, ZP मुख्य कार्यकारी अधिकाऱ्यांकडून नियुक्ती)",
                  titleEn: "Gram Sabha & Gram Sevak: Gram Sabha (All registered voters; min 4 mandatory meetings a year); Gram Sevak is administrative secretary (Class 3 ZP employee appointed by CEO)",
                  chips: ["ग्रामसभा (किमान ४ बैठका)", "२६ जाने १ मे १५ ऑग २ ऑक्टो", "ग्रामसेवक (वर्ग ३ सचिव)", "जन्म-मृत्यू निबंधक"]
                },
                {
                  id: "st_gb_p12_01_03",
                  titleMr: "पंचायत समिती (महाराष्ट्र ZP व PS अधिनियम १९६१): मध्यम स्तर / दुवा; रचना: किमान १५ ते कमाल २५ सदस्य; सभापती व उपसभापती; प्रशासकीय प्रमुख: गट विकास अधिकारी (BDO - वर्ग-१ किंवा २ अधिकारी, MPSC द्वारे निवड)",
                  titleEn: "Panchayat Samiti (1961 Act): Intermediate Tier; Strength 15 to 25 members; Sabhapati & Dy Sabhapati; Administrative Head: Block Development Officer (BDO selected via MPSC)",
                  chips: ["पंचायत समिती (मध्यम स्तर)", "सदस्य १५ ते २५", "सभापती", "गट विकास अधिकारी (BDO)"]
                },
                {
                  id: "st_gb_p12_01_04",
                  titleMr: "जिल्हा परिषद (ZP - १९६१ कायदा): महाराष्ट्रातील पंचायत राजचा सर्वोच्च व सर्वात शक्तिशाली घटक; रचना: किमान ५० ते कमाल ७५ सदस्य; जिल्हा परिषद अध्यक्ष व उपाध्यक्ष; प्रशासकीय प्रमुख: मुख्य कार्यकारी अधिकारी (CEO - IAS केडर अधिकारी, राज्य शासनाकडून नियुक्ती)",
                  titleEn: "Zilla Parishad (1961 Act): Apex & Most Powerful Unit in Maharashtra; Strength 50 to 75 members; President & VP; Administrative Head: Chief Executive Officer (CEO - IAS Cadre)",
                  chips: ["जिल्हा परिषद (सर्वोच्च घटक)", "सदस्य ५० ते ७५", "ZP अध्यक्ष", "मुख्य कार्यकारी अधिकारी (CEO IAS)"]
                },
                {
                  id: "st_gb_p12_01_05",
                  titleMr: "जिल्हा परिषदेच्या विषय समित्या: स्थायी समिती (सर्वात महत्त्वाची - ZP अध्यक्ष पदसिद्ध सभापती असतात) + ९ विषय समित्या (वित्त, बांधकाम, कृषी, शिक्षण, आरोग्य, समाजकल्याण, महिला व बालकल्याण, जलव्यवस्थापन, पशुसंवर्धन); समाजकल्याण समिती सभापतीपद SC/ST प्रवर्गासाठी राखीव",
                  titleEn: "ZP Subject Committees: Standing Committee (Most powerful, chaired by ZP President) + 9 Subject Committees; Social Welfare Committee Chair reserved for SC/ST",
                  chips: ["ZP स्थायी समिती", "९ विषय समित्या", "महिला व बालकल्याण समिती", "समाजकल्याण समिती (SC/ST राखीव)"]
                }
              ],
              sources: [
                { book: "पंचायत राज", standard: "किशोर लवटे", chapterRef: "प्रकरण ३, ४ व ५: ग्रामपंचायत, पंचायत समिती व जिल्हा परिषद" },
                { book: "महाराष्ट्र स्थानिक स्वराज्य संस्था अधिनियम", standard: "शासकीय गॅझेट", chapterRef: "१९५८ व १९६१ चे अधिनियम" }
              ]
            }
          ]
        },
        {
          id: "gb_pol_c13",
          code: "P13",
          section: "E",
          slug: "urban-local-government-74th-amendment-and-municipalities",
          nameMr: "नागरी स्थानिक स्वराज्य संस्था: ७४ वी घटनादुरुस्ती (१९९२) व नगरपालिका / महानगरपालिका",
          nameEn: "Urban Local Government: 74th Amendment Act 1992, Municipal Corporations & Councils",
          name: "नागरी स्थानिक स्वराज्य संस्था (Urban Local Bodies - 74th Amendment)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_pol_c13",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_pol_c12",
          nextChapterId: "gb_pol_c14",
          metaDescriptionMr: "७४ वी घटनादुरुस्ती (भाग ९A, कलम २४३P ते २४३ZG, १२ वे परिशिष्ट १८ विषय), नगरपंचायत, नगरपालिका (A, B, C वर्ग), महानगरपालिका (महापौर व मनपा आयुक्त), आणि वॉर्ड समित्या.",
          metaDescriptionEn: "In-depth review of Urban Local Bodies: 74th Amendment 1992 (Part IXA, Articles 243P-243ZG, 12th Schedule 18 items), Nagar Panchayats, Municipal Councils, Municipal Corporations (Mayor, Municipal Commissioner), and Ward Committees.",
          notesJsonPath: "/data/notes/group_b/prelims/polity/c13_urban_local_government.json",
          quizTag: "gb_pol_urban_01",
          tags: ["Core", "Urban Governance", "74th Amendment 1992", "Part IXA", "12th Schedule 18 Subjects", "Municipal Corporation", "Mayor", "Municipal Commissioner", "High-Weightage"],
          searchKeywords: ["74th constitutional amendment 1992", "part ixa articles 243p to 243zg", "12th schedule 18 subjects", "municipal corporation maharashtra", "mayor vs municipal commissioner", "nagar parishad municipal council", "७४ वी घटनादुरुस्ती १९९२", "भाग ९A नागरी संस्था", "१२ वे परिशिष्ट १८ विषय", "महानगरपालिका", "महापौर", "मनपा आयुक्त IAS", "नगरपरिषद"],
          topics: [
            {
              id: "top_gb_p13_01",
              nameMr: "नागरी शासनप्रणाली, ७४ वी दुरुस्ती आणि महाराष्ट्रातील मनपा रचना",
              nameEn: "Urban Governance Blueprint, 74th Amendment & Municipal Corporation Machinery",
              subtopics: [
                {
                  id: "st_gb_p13_01_01",
                  titleMr: "७४ वी घटनादुरुस्ती कायदा १९९२: १ जून १९९३ रोजी लागू; संविधानात भाग ९A जोडला (कलम २४३P ते २४३ZG); १२ वे परिशिष्ट जोडले (नागरी संस्थांसाठी १८ कार्यात्मक विषय); नागरी संस्थांचे ३ प्रकार: १) नगरपंचायत (संक्रमणशील भाग), २) नगरपरिषद (लहान नागरी क्षेत्र), ३) महानगरपालिका (मोठे नागरी क्षेत्र)",
                  titleEn: "74th Amendment Act 1992: Enacted 1 June 1993; Added Part IXA (Arts 243P-243ZG) & 12th Schedule (18 functional subjects); 3 Types: Nagar Panchayat, Municipal Council, Municipal Corporation",
                  chips: ["७४ वी दुरुस्ती १९९२", "भाग ९A जोडला", "१२ वे परिशिष्ट (१८ विषय)", "३ स्तर नागरी संस्था"]
                },
                {
                  id: "st_gb_p13_01_02",
                  titleMr: "नगरपंचायत व नगरपालिका (नगरपरिषद): नगरपंचायत: १०,००० ते २५,००० लोकसंख्या, १७ सदस्य; नगरपरिषद (महाराष्ट्र नगरपरिषदा कायदा १९६५): अ-वर्ग (१ लाखापेक्षा जास्त लोकसंख्या), ब-वर्ग (४०,००० ते १ लाख), क-वर्ग (४०,००० पेक्षा कमी लोकसंख्या); नगराध्यक्ष व मुख्याधिकारी (Chief Officer - MPSC द्वारे निवड)",
                  titleEn: "Nagar Panchayat & Municipal Councils: Nagar Panchayat (10k-25k pop, 17 members); Municipal Councils categorized into A, B, C Classes based on population; Led by Mayor/Nagaradhyaksha & Chief Officer (CO)",
                  chips: ["नगरपंचायत १७ सदस्य", "नगरपरिषद अ-ब-क वर्ग", "नगराध्यक्ष थेट निवडणूक", "मुख्याधिकारी (Chief Officer)"]
                },
                {
                  id: "st_gb_p13_01_03",
                  titleMr: "महानगरपालिका (Municipal Corporation): ३ लाखांपेक्षा जास्त लोकसंख्या; महाराष्ट्रात सध्या २९ महानगरपालिका (२९ वी जालना); मुंबई मनपा देशातील सर्वात जुनी व श्रीमंत मनपा (१८८८ कायदा); महापौर: शहराचे प्रथम नागरिक (२.५ वर्षे कार्यकाळ); प्रशासकीय प्रमुख: महानगरपालिका आयुक्त (Municipal Commissioner - IAS केडर अधिकारी)",
                  titleEn: "Municipal Corporations: For populations > 3 Lakhs; 29 Corporations in Maharashtra (29th is Jalna); Mayor is First Citizen (2.5-yr term); Administrative Head: Municipal Commissioner (IAS Cadre)",
                  chips: ["२९ महानगरपालिका (जालना २९ वी)", "मुंबई मनपा १८८८ कायदा", "महापौर (प्रथम नागरिक)", "महानगरपालिका आयुक्त (IAS)"]
                },
                {
                  id: "st_gb_p13_01_04",
                  titleMr: "मनपा समित्या व वॉर्ड समित्या: स्थायी समिती (Standing Committee - तिजोरीची चावी, आर्थिक अधिकार); वॉर्ड समित्या (कलम २४३S - ३ लाखांपेक्षा जास्त लोकसंख्या असलेल्या शहरात वॉर्ड समित्या अनिवार्य); जिल्हा नियोजन समिती (DPC - कलम २४३ZD: पालकमंत्री अध्यक्ष, जिल्हाधिकारी सचिव)",
                  titleEn: "Committees & Ward Committees: Standing Committee (Financial power hub); Ward Committees (Art 243S mandatory for pop > 3 Lakhs); District Planning Committee (DPC Art 243ZD: Guardian Minister chair, Collector secretary)",
                  chips: ["मनपा स्थायी समिती", "वॉर्ड समिती (कलम २४३S)", "जिल्हा नियोजन समिती DPC (कलम २४३ZD)", "पालकमंत्री अध्यक्ष"]
                }
              ],
              sources: [
                { book: "पंचायत राज व नागरी प्रशासन", standard: "किशोर लवटे", chapterRef: "प्रकरण ६ व ७: ७४ वी दुरुस्ती व नागरी स्थानिक स्वराज्य संस्था" },
                { book: "भारतीय राज्यव्यवस्था", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण ३९: नगरपालिका" }
              ]
            }
          ]
        },


        // =========================================================================
        // विभाग F — घटनात्मक व वैधानिक आयोग, प्रशासन आणि सुधारणा (Commissions & Governance)
        // =========================================================================
        {
          id: "gb_pol_c14",
          code: "P14",
          section: "F",
          slug: "constitutional-bodies-election-commission-upsc-mpsc-cag-finance",
          nameMr: "घटनात्मक संस्था: निवडणूक आयोग, MPSC/UPSC, नियंत्रक व महालेखापरीक्षक (CAG) आणि वित्त आयोग",
          nameEn: "Constitutional Bodies: Election Commission, UPSC/MPSC, CAG & Finance Commission",
          name: "घटनात्मक संस्था व आयोग (Constitutional Bodies)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 5,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_pol_c14",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_pol_c13",
          nextChapterId: "gb_pol_c15",
          metaDescriptionMr: "भारतीय निवडणूक आयोग (कलम ३२४), UPSC व MPSC (कलम ३१५ ते ३२३), CAG (कलम १४८ ते १५१ - सार्वजनिक तिजोरीचा संरक्षक), वित्त आयोग (कलम २८०), आणि SC/ST/BC राष्ट्रीय आयोग.",
          metaDescriptionEn: "In-depth review of Constitutional Bodies: Election Commission of India (Art 324), UPSC & MPSC (Arts 315-323), Comptroller and Auditor General (CAG Arts 148-151), Finance Commission (Art 280), and National Commissions for SC/ST/BC.",
          notesJsonPath: "/data/notes/group_b/prelims/polity/c14_constitutional_bodies.json",
          quizTag: "gb_pol_const_bodies_01",
          tags: ["Constitutional Bodies", "Election Commission Article 324", "MPSC Article 315", "CAG Article 148 to 151", "Finance Commission Article 280", "High-Weightage"],
          searchKeywords: ["election commission of india article 324", "upsc mpsc articles 315 to 323", "comptroller and auditor general cag article 148", "finance commission article 280", "national commissions sc st obc", "निवडणूक आयोग कलम ३२४", "MPSC कलम ३१५ ते ३२३", "कॅग CAG कलम १४८", "वित्त आयोग कलम २८०"],
          topics: [
            {
              id: "top_gb_p14_01",
              nameMr: "घटनात्मक पदांची निर्मिती, रचना, अधिकार व कार्ये",
              nameEn: "Mandate, Composition, Tenure & Powers of Constitutional Authorities",
              subtopics: [
                {
                  id: "st_gb_p14_01_01",
                  titleMr: "भारतीय निवडणूक आयोग (ECI, कलम ३२४): राष्ट्रपती, उपराष्ट्रपती, संसद व राज्य विधिमंडळांच्या निवडणुकांचे संचालन; १ मुख्य निवडणूक आयुक्त + २ निवडणूक आयुक्त; राष्ट्रपतींकडून नियुक्ती; ६ वर्षे किंवा वयाची ६५ वर्षे कार्यकाळ; पदमुक्ती सर्वोच्च न्यायालयाच्या न्यायाधीशाप्रमाणे",
                  titleEn: "Election Commission of India (Article 324): Conducts elections to Parliament, State Legislatures, President, VP; 1 CEC + 2 ECs; Appointed by President; 6 yrs or 65 yrs age; Removal like SC Judge",
                  chips: ["कलम ३२४ (निवडणूक आयोग)", "१ मुख्य + २ आयुक्त", "६ वर्षे किंवा ६५ वर्षे", "आचारसंहिता (MCC)"]
                },
                {
                  id: "st_gb_p14_01_02",
                  titleMr: "केंद्रीय व राज्य लोकसेवा आयोग (UPSC व MPSC, कलम ३१५ ते ३२३): कलम ३१५ (आयोगांची स्थापना); MPSC: अध्यक्ष व सदस्यांची नियुक्ती राज्यपालांद्वारे, परंतु पदमुक्ती केवळ राष्ट्रपतींद्वारे (कलम ३१७); कार्यकाळ: ६ वर्षे किंवा वयाची ६२ वर्षे (UPSC साठी ६५ वर्षे); सल्लागार भूमिका",
                  titleEn: "UPSC & MPSC (Articles 315-323): Art 315 (Establishment); MPSC: Appointed by Governor, but Removed ONLY by President (Art 317); Tenure: 6 yrs or 62 yrs age (65 for UPSC)",
                  chips: ["कलम ३१५ ते ३२३ (UPSC/MPSC)", "MPSC नियुक्ती राज्यपाल", "पदमुक्ती केवळ राष्ट्रपती", "६ वर्षे किंवा ६२ वर्षे"]
                },
                {
                  id: "st_gb_p14_01_03",
                  titleMr: "भारताचे नियंत्रक व महालेखापरीक्षक (CAG, कलम १४८ ते १५१): सार्वजनिक तिजोरीचा संरक्षक (Guardian of Public Purse); डॉ. आंबेडकरांच्या मते संविधानातील सर्वात महत्त्वाचे पद; नियुक्ती राष्ट्रपतींद्वारे; कार्यकाळ: ६ वर्षे किंवा वयाची ६५ वर्षे; केंद्र व राज्यांचे लेखापरीक्षण (Audit); अहवाल लोकलेखा समितीकडे (PAC चा मित्र व मार्गदर्शक)",
                  titleEn: "Comptroller and Auditor General (CAG, Articles 148-151): Guardian of Public Purse; Most important office (Dr. Ambedkar); Tenure: 6 yrs or 65 yrs; Audits Union & State accounts; Guide to PAC",
                  chips: ["कलम १४८ (कॅग CAG)", "सार्वजनिक तिजोरीचा रक्षक", "६ वर्षे किंवा ६५ वर्षे", "PAC चा मित्र व मार्गदर्शक"]
                },
                {
                  id: "st_gb_p14_01_04",
                  titleMr: "वित्त आयोग (Finance Commission, कलम २८०): दर ५ वर्षांनी राष्ट्रपतींकडून स्थापना; १ अध्यक्ष + ४ सदस्य; केंद्र व राज्यांमध्ये कर महसुलाची विभागणी (Net proceeds distribution) व राज्यांना अनुदाने (Grants-in-aid) देण्याची शिफारस",
                  titleEn: "Finance Commission (Article 280): Constituted every 5 years by President; 1 Chairman + 4 Members; Recommends tax devolution between Centre-States and Grants-in-Aid",
                  chips: ["कलम २८० (वित्त आयोग)", "दर ५ वर्षांनी राष्ट्रपती", "१ अध्यक्ष + ४ सदस्य", "कर महसूल वाटप"]
                },
                {
                  id: "st_gb_p14_01_05",
                  titleMr: "राष्ट्रीय अनुसूचित जाती आयोग (NCSC कलम ३३८), राष्ट्रीय अनुसूचित जमाती आयोग (NCST कलम ३३८A - ८९ वी दुरुस्ती २००३), आणि राष्ट्रीय मागासवर्ग आयोग (NCBC कलम ३३८B - १०२ वी दुरुस्ती २०१८)",
                  titleEn: "National Commissions: NCSC (Art 338), NCST (Art 338A via 89th Amdt 2003), NCBC (Art 338B via 102nd Amdt 2018)",
                  chips: ["कलम ३३८ (SC आयोग)", "कलम ३३८A (ST आयोग)", "कलम ३३८B (OBC आयोग - १०२ वी दुरुस्ती)"]
                }
              ],
              sources: [
                { book: "भारतीय राज्यव्यवस्था", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण ४१ ते ४८: घटनात्मक संस्था व आयोग" },
                { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण १४: घटनात्मक संस्था" }
              ]
            }
          ]
        },
        {
          id: "gb_pol_c15",
          code: "P15",
          section: "F",
          slug: "statutory-and-regulatory-bodies-nhrc-shrc-cpc-lokpal-lokayukta",
          nameMr: "वैधानिक संस्था: राष्ट्रीय व राज्य मानवाधिकार आयोग, माहिती आयोग, लोकपाल व लोकायुक्त",
          nameEn: "Statutory & Non-Constitutional Bodies: NHRC, SHRC, CIC/SIC, Lokpal & Lokayukta",
          name: "वैधानिक संस्था व लोकायुक्त (Statutory Bodies & Lokayukta)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_pol_c15",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_pol_c14",
          nextChapterId: "gb_pol_c16",
          metaDescriptionMr: "NHRC व महाराष्ट्र मानवाधिकार आयोग (१९९३ कायदा), केंद्रीय व राज्य माहिती आयोग (RTI २००५), लोकपाल व लोकायुक्त कायदा २०१३, महाराष्ट्र लोकायुक्त (१९७१ - देशात पहिले), आणि CVC.",
          metaDescriptionEn: "In-depth review of Statutory Bodies: NHRC & Maharashtra SHRC (Human Rights Act 1993), Information Commissions (RTI 2005), Lokpal & Lokayuktas Act 2013, Maharashtra Lokayukta (1971, First in India), and CVC.",
          notesJsonPath: "/data/notes/group_b/prelims/polity/c15_statutory_bodies.json",
          quizTag: "gb_pol_stat_bodies_01",
          tags: ["Statutory Bodies", "NHRC SHRC", "Lokayukta Maharashtra 1971", "Central Information Commission", "CVC", "High-Weightage"],
          searchKeywords: ["statutory bodies india", "national human rights commission nhrc 1993", "state human rights commission shrc maharashtra", "maharashtra lokayukta 1971 first in india", "central vigilance commission cvc", "मानवाधिकार आयोग", "महाराष्ट्र लोकायुक्त १९७१", "केंद्रीय माहिती आयोग", "केंद्रीय दक्षता आयोग CVC"],
          topics: [
            {
              id: "top_gb_p15_01",
              nameMr: "वैधानिक आयोग, भ्रष्टाचारविरोधी संस्था आणि लोकायुक्त",
              nameEn: "Statutory Commissions, Anti-Corruption Ombudsman & Lokayukta",
              subtopics: [
                {
                  id: "st_gb_p15_01_01",
                  titleMr: "राष्ट्रीय व राज्य मानवाधिकार आयोग (NHRC व SHRC): मानवाधिकार संरक्षण कायदा १९९३ अन्वये स्थापना; NHRC: अध्यक्ष (माजी सरन्यायाधीश किंवा सर्वोच्च न्यायालयाचे न्यायाधीश); नियुक्ती ६ सदस्यीय उच्चस्तरीय समितीच्या शिफारशीने (पंतप्रधान अध्यक्ष); कार्यकाळ: ३ वर्षे किंवा वयाची ७० वर्षे; महाराष्ट्र राज्य मानवाधिकार आयोग (SHRC): मुंबई मुख्यालय",
                  titleEn: "NHRC & State HRC: Protection of Human Rights Act 1993; NHRC Chair (Retd CJI or SC Judge); Appointed via 6-member selection panel headed by PM; Tenure: 3 yrs or 70 yrs age; Maharashtra SHRC at Mumbai",
                  chips: ["मानवाधिकार संरक्षण कायदा १९९३", "NHRC (३ वर्षे किंवा ७० वर्षे)", "महाराष्ट्र SHRC मुंबई", "दिवाणी न्यायालयाचे अधिकार"]
                },
                {
                  id: "st_gb_p15_01_02",
                  titleMr: "लोकपाल व लोकायुक्त: लोकपाल व लोकायुक्त कायदा २०१३; लोकपाल (केंद्र स्तर - १ अध्यक्ष + कमाल ८ सदस्य); लोकायुक्त (राज्य स्तर): प्रशासनातील भ्रष्टाचाराची चौकशी करणारी संस्था; महाराष्ट्राने देशात सर्वप्रथम लोकायुक्त संस्था स्थापन केली (महाराष्ट्र लोकायुक्त व उप-लोकायुक्त अधिनियम १९७१)",
                  titleEn: "Lokpal & Lokayuktas Act 2013; Lokpal at Centre; Maharashtra was the FIRST state in India to establish Lokayukta institution via 1971 Act",
                  chips: ["लोकपाल कायदा २०१३", "महाराष्ट्रात देशात पहिला लोकायुक्त (१९७१)", "भ्रष्टाचार चौकशी"]
                },
                {
                  id: "st_gb_p15_01_03",
                  titleMr: "केंद्रीय दक्षता आयोग (CVC): संथानम समितीच्या (१९६२-६४) शिफारशीवरून १९६४ मध्ये स्थापना; २००३ मध्ये वैधानिक दर्जा; १ केंद्रीय दक्षता आयुक्त + कमाल २ दक्षता आयुक्त; कार्यकाळ: ४ वर्षे किंवा वयाची ६५ वर्षे",
                  titleEn: "Central Vigilance Commission (CVC): Set up in 1964 on Santhanam Committee recommendations; Statutory status in 2003; Tenure: 4 yrs or 65 yrs age",
                  chips: ["CVC संथानम समिती", "२००३ वैधानिक दर्जा", "४ वर्षे किंवा ६५ वर्षे", "दक्षता आयुक्त"]
                },
                {
                  id: "st_gb_p15_01_04",
                  titleMr: "केंद्रीय व राज्य माहिती आयोग: माहिती अधिकार अधिनियम २००५ अन्वये वैधानिक स्थापना; १ मुख्य माहिती आयुक्त + कमाल १० माहिती आयुक्त; अपीलांची सुनावणी व पारदर्शकता",
                  titleEn: "Central & State Information Commissions: Statutory bodies under RTI Act 2005; 1 Chief Information Commissioner + max 10 ICs",
                  chips: ["RTI Act २००५", "केंद्रीय माहिती आयोग", "महाराष्ट्र राज्य माहिती आयोग", "पारदर्शकता"]
                }
              ],
              sources: [
                { book: "भारतीय राज्यव्यवस्था", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण ५१, ५२, ५५, ५६: NHRC, SHRC, CVC व लोकपाल" },
                { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण १५: गैर-घटनात्मक व वैधानिक आयोग" }
              ]
            }
          ]
        },
        {
          id: "gb_pol_c16",
          code: "P16",
          section: "F",
          slug: "centre-state-relations-inter-state-councils-emergency",
          nameMr: "केंद्र-राज्य संबंध, आंतरराज्य परिषद व आणीबाणीच्या तरतुदी (कलम ३५२ ते ३६०)",
          nameEn: "Centre-State Relations, Inter-State Councils & Emergency Provisions (Arts 352-360)",
          name: "केंद्र-राज्य संबंध व आणीबाणी (Federal Relations & Emergency)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_pol_c16",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_pol_c15",
          nextChapterId: "gb_pol_c17",
          metaDescriptionMr: "केंद्र-राज्य संबंध (कायदेविषयक, प्रशासकीय, आर्थिक), सरकारिया आयोग (१९८३), पुंछी आयोग, आंतरराज्य परिषद (कलम २६३), राष्ट्रीय आणीबाणी (कलम ३५२), राष्ट्रपती राजवट (कलम ३५६), आणि आर्थिक आणीबाणी (कलम ३६०).",
          metaDescriptionEn: "In-depth review of Centre-State Relations (Legislative, Administrative, Financial), Sarkaria Commission (1983), Punchhi Commission, Inter-State Council (Art 263), and Emergency Provisions: National (Art 352), President's Rule (Art 356), Financial (Art 360).",
          notesJsonPath: "/data/notes/group_b/prelims/polity/c16_relations_emergency.json",
          quizTag: "gb_pol_emergency_01",
          tags: ["Federalism", "Centre-State Relations", "Sarkaria Commission", "Article 352 National Emergency", "Article 356 Presidents Rule", "Article 360 Financial Emergency", "High-Weightage"],
          searchKeywords: ["centre state relations 7th schedule", "sarkaria commission 1983 punchhi commission", "inter state council article 263", "national emergency article 352", "presidents rule article 356 maharashtra", "financial emergency article 360", "केंद्र राज्य संबंध", "सरकारिया आयोग १९८३", "कलम ३५२ राष्ट्रीय आणीबाणी", "कलम ३५६ राष्ट्रपती राजवट", "कलम ३६० आर्थिक आणीबाणी"],
          topics: [
            {
              id: "top_gb_p16_01",
              nameMr: "संघराज्य समतोल, आयोग, आंतरराज्य जलविवाद आणि तिन्ही आणीबाणी",
              nameEn: "Federal Matrix, Sarkaria/Punchhi Reforms, River Tribunals & Emergency Powers",
              subtopics: [
                {
                  id: "st_gb_p16_01_01",
                  titleMr: "केंद्र-राज्य संबंधांचे ३ पैलू: १) कायदेविषयक संबंध (कलम २४५-२५५, ७ वे परिशिष्ट: संघसूची १०० विषय, राज्यसूची ६१ विषय, समवर्ती सूची ५२ विषय); २) प्रशासकीय संबंध (कलम २५६-२६३); ३) आर्थिक संबंध (कलम २६८-२९३)",
                  titleEn: "Three Facets of Centre-State Relations: Legislative (Arts 245-255, 7th Schedule: Union 100, State 61, Concurrent 52 items), Administrative (Arts 256-263), Financial (Arts 268-293)",
                  chips: ["७ वे परिशिष्ट (३ सूची)", "संघसूची १००", "राज्यसूची ६१", "समवर्ती सूची ५२"]
                },
                {
                  id: "st_gb_p16_01_02",
                  titleMr: "केंद्र-राज्य संबंधांवरील प्रमुख आयोग: १) सरकारिया आयोग (१९८३ - कलम ३५६ चा वापर केवळ अंतिम उपाय म्हणून व्हावा, आंतरराज्य परिषद स्थापन करावी); २) एम. एम. पुंछी आयोग (२००७ - राज्यपालांच्या अधिकारांवर बंधने); आंतरराज्य परिषद (कलम २६३ - पंतप्रधान अध्यक्ष); आंतरराज्य जलविवाद न्यायाधिकरण (कलम २६२ - उदा. कृष्णा जलविवाद)",
                  titleEn: "Commissions & Dispute Mechanisms: Sarkaria Commission 1983 (Art 356 as last resort, Inter-State Council), Punchhi Commission 2007; Inter-State Council (Art 263); Inter-State River Water Disputes (Art 262)",
                  chips: ["सरकारिया आयोग १९८३", "पुंछी आयोग २००७", "कलम २६३ (आंतरराज्य परिषद)", "कलम २६२ (नदी जलविवाद)"]
                },
                {
                  id: "st_gb_p16_01_03",
                  titleMr: "राष्ट्रीय आणीबाणी (कलम ३५२): आधार: युद्ध, परकीय आक्रमण किंवा सशस्त्र बंड (Armed Rebellion - ४४ व्या घटनादुरुस्तीने 'अंतर्गत अशांतता' शब्द वगळला); मंत्रिमंडळाच्या लेखी शिफारशीने राष्ट्रपतींद्वारे घोषणा; संसदेच्या दोन्ही सभागृहांची १ महिन्याच्या आत विशेष बहुमताने मंजुरी; दर ६ महिन्यांनी मुदतवाढ; कलम २० व २१ मधील मूलभूत हक्क आणीबाणीतही रद्द होत नाहीत",
                  titleEn: "National Emergency (Article 352): Grounds: War, External Aggression, Armed Rebellion (44th Amdt replaced Internal Disturbance); Cabinet written advice; Approved within 1 month by special majority; Arts 20 & 21 cannot be suspended",
                  chips: ["कलम ३५२ (राष्ट्रीय आणीबाणी)", "सशस्त्र बंड (४४ वी दुरुस्ती)", "१ महिन्याची मुदत", "कलम २० व २१ अबाधित"]
                },
                {
                  id: "st_gb_p16_01_04",
                  titleMr: "घटनेतील यंत्रणा ठप्प झाल्यामुळे राष्ट्रपती राजवट (कलम ३५६ व ३६५): राज्यपालांच्या अहवालावरून; संसदेची २ महिन्यांच्या आत साध्या बहुमताने मंजुरी; कमाल मर्यादा ३ वर्षे; एस. आर. बोम्मई खटला (१९९४ - न्यायालयीन पुनर्विलोकन शक्य); महाराष्ट्रात आतापर्यंत ३ वेळा राष्ट्रपती राजवट (१९८०, २०१४, २०१९)",
                  titleEn: "President's Rule (Articles 356 & 365): Failure of constitutional machinery; Approved within 2 months by simple majority; Max 3 years; S.R. Bommai 1994 (Judicial Review applies); Imposed 3 times in Maharashtra (1980, 2014, 2019)",
                  chips: ["कलम ३५६ (राष्ट्रपती राजवट)", "एस आर बोम्मई खटला १९९४", "महाराष्ट्रात ३ वेळा (१९८०, २०१४, २०१९)", "२ महिने मंजुरी मुदत"]
                },
                {
                  id: "st_gb_p16_01_05",
                  titleMr: "आर्थिक आणीबाणी (कलम ३६०): भारताचे किंवा त्याच्या कोणत्याही भागाचे आर्थिक स्थैर्य किंवा पत धोक्यात आल्यास; संसदेची २ महिन्यांत मंजुरी; भारतात आजतागायत एकदाही आर्थिक आणीबाणी लागू करण्यात आलेली नाही",
                  titleEn: "Financial Emergency (Article 360): Threat to financial stability or credit of India; Approved within 2 months; NEVER imposed in India till date",
                  chips: ["कलम ३६० (आर्थिक आणीबाणी)", "भारतात एकदाही नाही"]
                }
              ],
              sources: [
                { book: "भारतीय राज्यव्यवस्था", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण १४, १५, १६: केंद्र-राज्य संबंध व आणीबाणी" },
                { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण १६: आणीबाणी तरतुदी" }
              ]
            }
          ]
        },
        {
          id: "gb_pol_c17",
          code: "P17",
          section: "F",
          slug: "constitutional-amendments-and-electoral-reforms",
          nameMr: "महत्त्वाच्या घटनादुरुस्त्या (कलम ३६८) आणि निवडणूक सुधारणा",
          nameEn: "Major Constitutional Amendments (Article 368) & Electoral Reforms",
          name: "घटनादुरुस्त्या व निवडणूक सुधारणा (Amendments & Electoral Reforms)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_pol_c17",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_pol_c16",
          nextChapterId: "gb_pol_c18",
          metaDescriptionMr: "कलम ३६८ (घटनादुरुस्ती पद्धत), मूलभूत चौकट सिद्धांत (केशवानंद भारती १९७३), ऐतिहासिक दुरुस्त्या (४२ वी, ४४ वी, ५२ वी, ६१ वी, ७३ वी, ८६ वी, ९१ वी, १०१ वी GST, १०३ वी EWS, १०६ वी नारी शक्ती).",
          metaDescriptionEn: "In-depth review of Article 368 amendment procedures, Basic Structure Doctrine (Kesavananda Bharati), and landmark amendments (42nd, 44th, 52nd Anti-defection, 61st Voting age 18, 101st GST, 103rd EWS, 106th Nari Shakti).",
          notesJsonPath: "/data/notes/group_b/prelims/polity/c17_amendments_electoral.json",
          quizTag: "gb_pol_amendments_01",
          tags: ["Constitutional Framework", "Article 368 Amendment", "Basic Structure Doctrine", "Landmark Amendments", "GST 101st", "EWS 103rd", "Nari Shakti 106th", "High-Weightage"],
          searchKeywords: ["article 368 amendment procedure", "basic structure doctrine kesavananda bharati", "42nd amendment 1976 mini constitution", "44th amendment 1978", "52nd amendment 10th schedule", "61st amendment voting age 18", "101st amendment gst", "103rd amendment ews", "106th amendment women reservation nari shakti", "कलम ३६८ घटनादुरुस्ती", "मिनी संविधान ४२ वी दुरुस्ती", "६१ वी दुरुस्ती मतदान वय १८", "१०१ वी GST", "१०३ वी EWS", "१०६ वी महिला आरक्षण"],
          topics: [
            {
              id: "top_gb_p17_01",
              nameMr: "घटनादुरुस्ती प्रक्रिया, सर्वोच्च न्यायालयाचे निर्बंध व ऐतिहासिक दुरुस्त्या",
              nameEn: "Article 368 Procedures, Judicial Safeguards & Benchmark Amendments",
              subtopics: [
                {
                  id: "st_gb_p17_01_01",
                  titleMr: "घटनादुरुस्ती पद्धत (भाग २०, कलम ३६८): दक्षिण आफ्रिकेकडून स्वीकार; ३ प्रकार: १) साध्या बहुमताने (कलम ३६८ च्या बाहेर - उदा. कलम २, ३, नागरिकत्व); २) संसदेच्या विशेष बहुमताने (एकूण सदस्यसंख्येचे बहुमत + उपस्थित व मतदान करणाऱ्यांचे २/३ बहुमत - उदा. मूलभूत हक्क व DPSP); ३) विशेष बहुमत + किमान निम्म्या घटकराज्यांची साध्या बहुमताने मंजुरी (उदा. राष्ट्रपती निवडणूक, ७ वे परिशिष्ट, न्यायव्यवस्था)",
                  titleEn: "Amendment Modes (Part XX, Article 368): Borrowed from South Africa; 3 Methods: Simple Majority (outside 368), Special Majority (2/3 present & voting + absolute majority), Special Majority + 50% States ratification",
                  chips: ["कलम ३६८ (द. आफ्रिका)", "विशेष बहुमत", "राज्यांची मंजुरी", "संयुक्त बैठक नाही"]
                },
                {
                  id: "st_gb_p17_01_02",
                  titleMr: "मूलभूत चौकट सिद्धांत (Basic Structure Doctrine): २४ एप्रिल १९७३ रोजी केशवानंद भारती खटल्यात १३ न्यायाधीशांच्या घटनापीठाचा निकाल; संसदेला संविधानाच्या कोणत्याही भागात दुरुस्ती करण्याचा अधिकार आहे, मात्र संविधानाची मूलभूत चौकट (Basic Structure) नष्ट करता येणार नाही",
                  titleEn: "Basic Structure Doctrine: Kesavananda Bharati Case (24 April 1973, largest 13-judge bench); Parliament can amend any part under Art 368 but cannot alter the Basic Structure",
                  chips: ["केशवानंद भारती (२४ एप्रिल १९७३)", "१३ न्यायाधीशांचे खंडपीठ", "मूलभूत चौकट सिद्धांत"]
                },
                {
                  id: "st_gb_p17_01_03",
                  titleMr: "ऐतिहासिक दुरुस्त्या (४२ वी ते ६१ वी): १) ४२ वी दुरुस्ती (१९७६ - मिनी संविधान); २) ४४ वी दुरुस्ती (१९७८ - अंतर्गत अशांतता ऐवजी सशस्त्र बंड शब्द, संपत्तीचा मूलभूत हक्क रद्द); ३) ५२ वी दुरुस्ती (१९८५ - १० वे परिशिष्ट, पक्षांतर बंदी कायदा); ४) ६१ वी दुरुस्ती (१९८८/८९ - मतदानाचे वय २१ वरून १८ वर्षे केले)",
                  titleEn: "Historic Amendments: 42nd (1976 - Mini Constitution), 44th (1978 - Safeguards against emergency abuses), 52nd (1985 - 10th Schedule Anti-Defection), 61st (1988 - Voting age lowered from 21 to 18)",
                  chips: ["४२ वी दुरुस्ती (मिनी संविधान)", "४४ वी दुरुस्ती १९७८", "५२ वी दुरुस्ती (पक्षांतर बंदी)", "६१ वी दुरुस्ती (मतदान वय १८ वर्षे)"]
                },
                {
                  id: "st_gb_p17_01_04",
                  titleMr: "अलिकडच्या महत्त्वाच्या दुरुस्त्या (९९ वी ते १०६ वी): १) ९९ वी (२०१४ - NJAC रद्द); २) १०० वी (२०१५ - भारत-बांगलादेश भूसीमा करार); ३) १०१ वी (२०१६/१७ - वस्तू व सेवा कर GST); ४) १०२ वी (२०१८ - राष्ट्रीय मागासवर्ग आयोगाला घटनात्मक दर्जा); ५) १०३ वी (२०१९ - EWS १०% आरक्षण); ६) १०४ वी (२०१९ - SC/ST आरक्षण १० वर्षे वाढवले, ॲंग्लो इंडियन कोटा रद्द); ७) १०५ वी (२०२१ - राज्यांना SEBC यादी बनवण्याचा अधिकार); ८) १०६ वी (२०२३ - नारी शक्ती वंदन अधिनियम: लोकसभा व विधानसभांमध्ये महिलांना ३३% आरक्षण)",
                  titleEn: "Recent Landmark Amendments: 99th (NJAC struck down), 101st (GST), 102nd (NCBC), 103rd (10% EWS quota), 104th (SC/ST extended, Anglo-Indian abolished), 106th (Nari Shakti Vandan Act - 33% Women Reservation in Lok Sabha & Assemblies)",
                  chips: ["१०१ वी दुरुस्ती (GST)", "१०३ वी दुरुस्ती (EWS १० टक्के)", "१०४ वी दुरुस्ती", "१०६ वी दुरुस्ती (नारी शक्ती ३३ टक्के महिला आरक्षण)"]
                },
                {
                  id: "st_gb_p17_01_05",
                  titleMr: "निवडणूक सुधारणा समित्या: तारकुंडे समिती (१९७४ - मतदान वय १८ करणे शिफारस), दिनेश गोस्वामी समिती (१९९० - ईव्हीएम वापर), इंद्रजित गुप्त समिती (१९९८ - निवडणूक खर्च राज्य अनुदान), नोटा (NOTA - २०१३ सर्वोच्च न्यायालय निकाल), VVPAT चा वापर",
                  titleEn: "Electoral Reform Committees: Tarkunde 1974 (Age 18), Dinesh Goswami 1990 (EVMs), Indrajit Gupta 1998 (State funding), Introduction of NOTA (2013) & VVPAT",
                  chips: ["तारकुंडे समिती", "दिनेश गोस्वामी समिती", "इंद्रजित गुप्त समिती", "नोटा (NOTA)", "VVPAT"]
                }
              ],
              sources: [
                { book: "भारतीय राज्यव्यवस्था", standard: "एम. लक्ष्मीकांत", chapterRef: "प्रकरण १०, ११, ६८: घटनादुरुस्ती व निवडणूक सुधारणा" },
                { book: "भारतीय राज्यघटना व राजकीय व्यवस्था", standard: "रंजन कोळंबे", chapterRef: "प्रकरण १७: प्रमुख घटनादुरुस्त्या" }
              ]
            }
          ]
        },
        {
          id: "gb_pol_c18",
          code: "P18",
          section: "F",
          slug: "polity-master-revision-articles-schedules-pyq-trends",
          nameMr: "राज्यव्यवस्था मास्टर रिव्हिजन: कलमे, परिशिष्टे (१ ते १२) व PYQ विश्लेषण",
          nameEn: "Polity Master Revision: Articles, Schedules (1 to 12) & PYQ Trend Analysis",
          name: "राज्यव्यवस्था मास्टर रिव्हिजन (Master Revision: Articles & Schedules)",
          category: "REVISION",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_pol_c18",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_pol_c17",
          nextChapterId: null,
          metaDescriptionMr: "संविधानातील सर्व १२ परिशिष्टे (Schedules), अति-महत्त्वाची कलमे मास्टर तक्ता (कलम १४, २१, ३२, ५१A, ७२, ११०, १२३, २४३, ३१२, ३५६, ३६८), आणि MPSC पूर्व परीक्षेतील १० वर्षांचे विश्लेषण.",
          metaDescriptionEn: "Master consolidation module: Complete breakdown of 12 Schedules, high-frequency article master table (14, 21, 32, 51A, 72, 110, 123, 243, 312, 356, 368), mnemonics, and 10-year MPSC Group B PYQ trend analysis.",
          notesJsonPath: "/data/notes/group_b/prelims/polity/c18_master_revision.json",
          quizTag: "gb_pol_revision_01",
          tags: ["Revision", "Polity Schedules 1 to 12", "High-Yield Articles", "Mnemonics", "PYQ Trends", "Elimination Techniques", "High-Weightage"],
          searchKeywords: ["12 schedules of indian constitution tears of old pm", "high yield polity articles mpsc", "article 32 226 comparison", "mpsc group b polity pyq analysis", "elimination techniques polity", "१२ परिशिष्टे", "महत्त्वाची कलमे", "मास्टर रिव्हिजन", "PYQ विश्लेषण"],
          topics: [
            {
              id: "top_gb_p18_01",
              nameMr: "१२ परिशिष्टे, कलमांची मास्टर सूची व परीक्षाभिमुख एलिमिनेशन ट्रिक्स",
              nameEn: "12 Schedules Synthesis, Articles Index & Option Elimination Strategy",
              subtopics: [
                {
                  id: "st_gb_p18_01_01",
                  titleMr: "संविधानातील १२ परिशिष्टे मास्टर तक्ता: १ ले: राज्ये व केंद्रशासित प्रदेश; २ रे: पगार व भत्ते; ३ रे: शपथेचे नमुने; ४ थे: राज्यसभेतील जागांची विभागणी; ५ वे: अनुसूचित क्षेत्रांचे प्रशासन; ६ वे: आसाम, मेघालय, त्रिपुरा, मिझोराम (AMTM); ७ वे: ३ सूची; ८ वे: २२ अधिकृत भाषा; ९ वे: न्यायालयीन पुनर्विलोकनापासून संरक्षण (१ ली दुरुस्ती १९५१); १० वे: पक्षांतर बंदी (५२ वी दुरुस्ती १९८५); ११ वे: पंचायत राज (२९ विषय); १२ वे: नगरपालिका (१८ विषय)",
                  titleEn: "Master Table of 12 Schedules: 1 (States), 2 (Salaries), 3 (Oaths), 4 (Rajya Sabha seats), 5 (Scheduled Areas), 6 (AMTM tribal areas), 7 (3 Lists), 8 (22 Languages), 9 (Land reforms 1st Amdt), 10 (Anti-defection 52nd Amdt), 11 (Panchayats 29), 12 (Municipalities 18)",
                  chips: ["१२ परिशिष्टे क्लृप्ती (TEARS OF OLD PM)", "८ वे परिशिष्ट २२ भाषा", "१० वे पक्षांतर बंदी", "११ वे पंचायत २९ विषय", "१२ वे नागरी १८ विषय"]
                },
                {
                  id: "st_gb_p18_01_02",
                  titleMr: "वारंवार विचारल्या जाणाऱ्या कलमांची मास्टर सूची (High-Yield Articles): कलम १४ (समानता), कलम २१ (जीवित रक्षण), कलम ३२ व २२६ (रिट्स), कलम ४० (ग्रामपंचायत), कलम ४४ (समान नागरी कायदा), कलम ५१A (कर्तव्ये), कलम ६१ (महाभियोग), कलम ७२ (क्षमादान), कलम ७६ (महान्यायवादी), कलम ११० (धन विधेयक), कलम १२३ (वटहुकूम), कलम २४३ (पंचायत राज), कलम २८० (वित्त आयोग), कलम ३१२ (नवीन ऑल इंडिया सर्व्हिसेस), कलम ३२४ (निवडणूक आयोग), कलम ३५६ (राष्ट्रपती राजवट), कलम ३६८ (घटनादुरुस्ती)",
                  titleEn: "High-Frequency Articles Quick Reference: 14, 21, 32, 40, 44, 51A, 61, 72, 76, 110, 123, 243, 280, 312, 324, 356, 368",
                  chips: ["अति-महत्त्वाची कलमे", "कलम ४० व ४४", "कलम ११० व १२३", "कलम २४३ व ३२४", "कलम ३५६ व ३६८"]
                },
                {
                  id: "st_gb_p18_01_03",
                  titleMr: "MPSC संयुक्त पूर्व परीक्षा राज्यव्यवस्था PYQ कल व एलिमिनेशन तंत्र: मागील १० वर्षांत विचारलेले प्रश्न; 'केवळ' (Only), 'सर्व' (All) यांसारख्या टोकाच्या पर्यायांचे विश्लेषण; पंचायत राज आणि मूलभूत हक्कांवरील प्रश्नांची अचूक उत्तरे काढण्याची पद्धत",
                  titleEn: "MPSC Prelims Polity Trend Analysis: Recurring Question Patterns (Panchayati Raj, Fundamental Rights, Governor) & Extreme Option Elimination Rules",
                  chips: ["PYQ ट्रेंड विश्लेषण", "एलिमिनेशन पद्धत", "पंचायत राज हमखास प्रश्न", "१० वर्षांचे विश्लेषण"]
                }
              ],
              sources: [
                { book: "भारतीय राज्यव्यवस्था", standard: "एम. लक्ष्मीकांत", chapterRef: "परिशिष्टे व महत्त्वाच्या कलमांची सूची" },
                { book: "MPSC मागील वर्षांच्या प्रश्नपत्रिका (PYQ संच)", standard: "२०१३ ते २०२५", chapterRef: "राज्यव्यवस्था व पंचायत राज प्रश्न विश्लेषण" }
              ]
            }
          ]
        }
      ]
    },

    {
      id: "gb_pre_economics",
      code: "ECO",
      slug: "indian-economy-planning-public-finance",
      nameMr: "भारतीय अर्थव्यवस्था, नियोजन, बँकिंग व शासकीय वित्त",
      nameEn: "Indian Economy, Economic Planning, Banking & Public Finance",
      name: "अर्थव्यवस्था (Indian Economy & Planning)",
      officialScope: "National Income, Economic Planning & NITI Aayog, Poverty & Unemployment, Banking System & RBI Monetary Policy, Inflation, Public Finance & Budget, Foreign Trade & BoP, Tax Structure, and Agriculture Economics",
      version: "1.0",
      verifiedDate: "2026-10-28",
      notesJsonBaseDir: "/data/notes/group_b/prelims/economics/",


      // UI Theme & Theming Metadata
      theme: {
        primaryColor: "#0d9488",        // Teal / Economic Growth Theme
        bgColor: "#f0fdfa",
        iconClass: "ri-line-chart-line"
      },


      // अभ्यास व डॅशबोर्ड ॲनालिटिक्स मेट्रिक्स
      metrics: {
        totalChapters: 16,
        totalEstimatedHours: 56,
        avgQuestionsInPrelims: 15,
        targetMarks: 15,
        weightageRange: "14-16 Questions"
      },


      // विषय पातळीवरील स्मार्ट टॅग्ज
      subjectTags: [
        "Core-GS",
        "Group-B-Prelims",
        "Paper-1-GS",
        "Pre-Cum-Mains",
        "High-Weightage",
        "Data-Intensive",
        "Concept-Heavy"
      ],


      filterCategory: "GS",
      searchKeywords: [
        "mpsc group b economics", "national income gdp gnp nnp", "five year plans niti aayog",
        "poverty unemployment tendulkar committee", "rbi monetary policy repo reverse repo",
        "inflation wpi cpi", "fiscal policy budget frbm act", "foreign trade bop", "gst tax structure",
        "भारतीय अर्थव्यवस्था", "राष्ट्रीय उत्पन्न GDP", "पंचवार्षिक योजना", "दारिद्र्य तेंडुलकर समिती", "रिझर्व्ह बँक बँकिंग", "महागाई CPI", "अर्थसंकल्प FRBM", "GST कररचना"
      ],


      referenceSources: [
        {
          name: "MPSC Non-Gazetted Group B Combined Syllabus",
          role: "अधिकृत परीक्षा-संदर्भ",
          url: "https://mpsc.gov.in"
        },
        {
          name: "भारतीय अर्थव्यवस्था (भाग १ व भाग २) - रंजन कोळंबे",
          role: "संकल्पनात्मक व परीक्षाभिमुख आधारभूत संदर्भ"
        },
        {
          name: "भारतीय अर्थव्यवस्था - किरण देसले (Deepstambh)",
          role: "आकडेवारी, योजना व सखोल विश्लेषण"
        },
        {
          name: "महाराष्ट्राचा आर्थिक पाहणी अहवाल (Economic Survey of Maharashtra)",
          role: "राज्यस्तरीय चालू आर्थिक आकडेवारी"
        },
        {
          name: "Union Budget & Economic Survey of India",
          role: "केंद्रीय अर्थसंकल्प व वित्तीय आकडेवारी"
        }
      ],


      chapters: [
        // =========================================================================
        // विभाग A — मॅक्रो-इकॉनॉमिक्स व राष्ट्रीय उत्पन्न (Macro Foundations)
        // =========================================================================
        {
          id: "gb_eco_c01",
          code: "E01",
          section: "A",
          slug: "national-income-accounting-gdp-gnp-nnp",
          nameMr: "राष्ट्रीय उत्पन्न लेखांकन: संकल्पना, मोजमाप पद्धती व आधारभूत वर्ष",
          nameEn: "National Income Accounting: Concepts, Estimation Methods & Base Year",
          name: "राष्ट्रीय उत्पन्न लेखांकन (National Income Accounting)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_eco_c01",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: null,
          nextChapterId: "gb_eco_c02",
          metaDescriptionMr: "GDP, GNP, NNP, NDP (बाजारभाव व घटक खर्चानुसार), चालू व स्थिर किमतींनुसार उत्पन्न, ग्रीन जीडीपी, राष्ट्रीय उत्पन्न मोजण्याच्या ३ पद्धती, CSO/NSO आणि २०११-१२ आधारभूत वर्ष.",
          metaDescriptionEn: "In-depth review of National Income concepts (GDP, GNP, NDP, NNP at Factor Cost & Market Price), Real vs Nominal GDP, Green GDP, 3 estimation methods, NSO, and 2011-12 base year revisions.",
          notesJsonPath: "/data/notes/group_b/prelims/economics/c01_national_income.json",
          quizTag: "gb_eco_national_income_01",
          tags: ["Macroeconomics", "National Income", "GDP GNP NNP", "Factor Cost Market Price", "CSO NSO", "Base Year 2011-12", "High-Weightage"],
          searchKeywords: ["national income accounting", "gdp gnp ndp nnp factor cost market price", "nominal gdp real gdp deflator", "national income estimation methods cso nso", "base year 2011 12", "राष्ट्रीय उत्पन्न", "स्थूल देशांतर्गत उत्पादन GDP", "स्थूल राष्ट्रीय उत्पादन GNP", "घटक खर्च व बाजारभाव", "NSO आधारभूत वर्ष २०११-१२"],
          topics: [
            {
              id: "top_gb_e01_01",
              nameMr: "राष्ट्रीय उत्पन्नाच्या मूलभूत संकल्पना, सूत्रे व मोजमाप यंत्रणा",
              nameEn: "Core National Income Aggregates, Formulation & Estimation System",
              subtopics: [
                {
                  id: "st_gb_e01_01_01",
                  titleMr: "मूलभूत संकल्पना: १) स्थूल देशांतर्गत उत्पादन (GDP - एका आर्थिक वर्षात देशाच्या सीमेअंतर्गत उत्पादित अंतिम वस्तू व सेवांचे बाजारमूल्य); २) स्थूल राष्ट्रीय उत्पादन (GNP = GDP + NFIA परदेशातून मिळालेले निव्वळ उत्पन्न); ३) निव्वळ देशांतर्गत उत्पादन (NDP = GDP - घसारा/Depreciation); ४) निव्वळ राष्ट्रीय उत्पादन (NNP = GNP - घसारा)",
                  titleEn: "Macro Aggregates: GDP (Boundary based final goods/services), GNP = GDP + NFIA, NDP = GDP - Depreciation, NNP = GNP - Depreciation (True measure of National Income)",
                  chips: ["GDP स्थूल देशांतर्गत उत्पादन", "GNP स्थूल राष्ट्रीय उत्पादन", "घसारा (Depreciation)", "NFIA निव्वळ परकीय उत्पन्न"]
                },
                {
                  id: "st_gb_e01_01_02",
                  titleMr: "घटक खर्च (Factor Cost - FC) विरुद्ध बाजारभाव (Market Price - MP): MP = FC + अप्रत्यक्ष कर (Indirect Taxes) - अनुदाने (Subsidies); निव्वळ अप्रत्यक्ष कर (NIT); राष्ट्रीय उत्पन्न म्हणजे निव्वळ राष्ट्रीय उत्पादन घटक खर्चानुसार (NNP at FC)",
                  titleEn: "Factor Cost vs Market Price: Market Price = Factor Cost + Indirect Taxes - Subsidies; NIT concept; Standard National Income = NNP at Factor Cost",
                  chips: ["घटक खर्च (Factor Cost)", "बाजारभाव (Market Price)", "अनुदाने (Subsidies)", "NNP at FC राष्ट्रीय उत्पन्न"]
                },
                {
                  id: "st_gb_e01_01_03",
                  titleMr: "नाममात्र GDP (Nominal GDP) विरुद्ध वास्तव GDP (Real GDP): चालू किमतींनुसार विरुद्ध स्थिर किमतींनुसार उत्पन्न; GDP डिफ्लेटर (GDP Deflector = Nominal GDP / Real GDP * 100); दरडोई उत्पन्न (Per Capita Income = एकूण राष्ट्रीय उत्पन्न / एकूण लोकसंख्या)",
                  titleEn: "Nominal vs Real GDP: Current Prices vs Constant Base Prices; GDP Deflator formula; Per Capita Income calculation",
                  chips: ["नाममात्र GDP", "वास्तव GDP", "GDP डिफ्लेटर", "दरडोई उत्पन्न (PCI)"]
                },
                {
                  id: "st_gb_e01_01_04",
                  titleMr: "राष्ट्रीय उत्पन्न मोजण्याच्या ३ पद्धती: १) उत्पादन पद्धत (Production/Value Added Method - कृषी व उद्योग), २) उत्पन्न पद्धत (Income Method - खंड, वेतन, व्याज, नफा), ३) खर्च पद्धत (Expenditure Method: Y = C + I + G + (X - M)); दुहेरी गणनेची समस्या (Double Counting) व हरित जीडीपी (Green GDP)",
                  titleEn: "3 Methods of Measurement: Production/Value Added, Income (Rent, Wages, Interest, Profit), Expenditure (C+I+G+NX); Double Counting issue & Green GDP",
                  chips: ["उत्पादन पद्धत (Value Added)", "उत्पन्न पद्धत", "खर्च पद्धत", "दुहेरी गणना", "ग्रीन जीडीपी"]
                },
                {
                  id: "st_gb_e01_01_05",
                  titleMr: "भारतातील ऐतिहासिक व संस्थात्मक रचना: दादाभाई नौरोजी (१८६७-६८ मध्ये सर्वप्रथम मोजमाप - दरडोई उत्पन्न २० रु.), व्ही. के. आर. व्ही. राव (पहिली शास्त्रीय पद्धत १९३१-३२); राष्ट्रीय उत्पन्न समिती १९४९ (पी. सी. महालनोबिस अध्यक्ष); केंद्रीय सांख्यिकी कार्यालय (CSO) व सध्याचे राष्ट्रीय सांख्यिकी कार्यालय (NSO); आधारभूत वर्ष २०११-१२",
                  titleEn: "Historical Evolution: Dadabhai Naoroji (1867-68, Rs 20 PCI), Dr. V.K.R.V. Rao (1st scientific method 1931-32), Mahalanobis Committee 1949, CSO/NSO & Base Year 2011-12",
                  chips: ["दादाभाई नौरोजी (२० रुपये PCI)", "डॉ व्ही के आर व्ही राव", "महालनोबिस समिती १९४९", "NSO आधारभूत वर्ष २०११-१२"]
                }
              ],
              sources: [
                { book: "भारतीय अर्थव्यवस्था (भाग १)", standard: "रंजन कोळंबे", chapterRef: "प्रकरण १: राष्ट्रीय उत्पन्न" },
                { book: "भारतीय अर्थव्यवस्था", standard: "किरण देसले", chapterRef: "प्रकरण १: राष्ट्रीय उत्पन्न लेखांकन" }
              ]
            }
          ]
        },
        {
          id: "gb_eco_c02",
          code: "E02",
          section: "A",
          slug: "economic-planning-five-year-plans-and-niti-aayog",
          nameMr: "आर्थिक नियोजन: पंचवार्षिक योजना (१ ली ते १२ वी) आणि नीती आयोग",
          nameEn: "Economic Planning: Five Year Plans (1st to 12th) & NITI Aayog",
          name: "आर्थिक नियोजन व नीती आयोग (Planning & NITI Aayog)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 5,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_eco_c02",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_eco_c01",
          nextChapterId: "gb_eco_c03",
          metaDescriptionMr: "नियोजन मंडळ (१९५०), NDC (१९५२), १२ पंचवार्षिक योजनांचे प्रतिमान, उद्दिष्टे, मूल्यमापन, योजना सुट्टी (१९६६-६९), रोलिंग प्लॅन, आणि नीती आयोग (१ जानेवारी २०१५, रचना व कार्ये).",
          metaDescriptionEn: "In-depth review of Planning Commission (1950), NDC (1952), 12 Five-Year Plans (models, targets, Harrod-Domar, Mahalanobis, Gadgil Formula), Plan Holidays, Rolling Plan, and NITI Aayog (1 Jan 2015).",
          notesJsonPath: "/data/notes/group_b/prelims/economics/c02_planning_niti_aayog.json",
          quizTag: "gb_eco_planning_01",
          tags: ["Planning", "Five Year Plans 1 to 12", "Planning Commission", "NITI Aayog 2015", "Harrod Domar", "Mahalanobis Model", "High-Weightage"],
          searchKeywords: ["economic planning five year plans", "1st to 12th five year plans models targets", "plan holiday rolling plan", "planning commission vs niti aayog", "niti aayog structure team india 7 pillar", "आर्थिक नियोजन", "पंचवार्षिक योजना १ ते १२", "महालनोबिस प्रतिमान", "योजना सुट्टी", "नीती आयोग १ जानेवारी २०१५"],
          topics: [
            {
              id: "top_gb_e02_01",
              nameMr: "पंचवार्षिक योजनांचा प्रवास, प्रतिमाने, यश-अपयश आणि नीती आयोग",
              nameEn: "Five Year Plans Evolution, Growth Models & NITI Aayog Paradigm Shift",
              subtopics: [
                {
                  id: "st_gb_e02_01_01",
                  titleMr: "नियोजनाची पार्श्वभूमी: विश्वेश्वरय्या योजना (१९३४ - Planned Economy for India), राष्ट्रीय नियोजन समिती (१९३८ - पं. नेहरू अध्यक्ष), बॉम्बे प्लॅन (१९४४ - ८ उद्योगपती), गांधीवादी योजना (श्रीमन नारायण), सर्वोदय योजना (जयप्रकाश नारायण); नियोजन मंडळ (१५ मार्च १९५०) व राष्ट्रीय विकास परिषद (NDC - ६ ऑगस्ट १९५२)",
                  titleEn: "Pre-Independence Plans: Visvesvaraya 1934, National Planning Committee 1938, Bombay Plan 1944, Gandhian Plan, Sarvodaya Plan 1950; Planning Commission (1950) & NDC (1952)",
                  chips: ["एम विश्वेश्वरय्या १९३४", "बॉम्बे प्लॅन १९४४", "नियोजन मंडळ १५ मार्च १९५०", "राष्ट्रीय विकास परिषद NDC १९५२"]
                },
                {
                  id: "st_gb_e02_01_02",
                  titleMr: "सुरुवातीच्या योजना: १ ली योजना (१९५१-५६ - हॅरॉड-डोमार प्रतिमान, कृषी व सिंचन प्राधान्य, यशस्वी); २ री योजना (१९५६-६१ - पी. सी. महालनोबिस प्रतिमान, जड व पायाभूत उद्योग - भिलाई, रुरकेला, दुर्गापूर पोलाद कारखाने); ३ री योजना (१९६१-६६ - महालनोबिस/सुखमय चक्रवर्ती, स्वावलंबन उद्दिष्ट, अपयशी - भारत-चीन युद्ध, भारत-पाक युद्ध व दुष्काळ)",
                  titleEn: "Plans 1 to 3: 1st Plan (Harrod-Domar, Agriculture, Successful), 2nd Plan (Mahalanobis Heavy Industry - Bhilai, Rourkela, Durgapur), 3rd Plan (Disastrous failure due to 1962/1965 wars & 1965 famine)",
                  chips: ["१ ली योजना (हॅरॉड-डोमार)", "२ री योजना (महालनोबिस जड उद्योग)", "३ री योजना अपयश", "भिलाई रुरकेला दुर्गापूर"]
                },
                {
                  id: "st_gb_e02_01_03",
                  titleMr: "योजना सुट्टी व मधल्या योजना: योजना सुट्टी (Plan Holiday १९६६-६९ - ३ वार्षिक योजना, हरितक्रांतीची सुरुवात); ४ थी योजना (१९६९-७४ - स्वावलंबन व स्थैर्यासह वाढ, १४ बँकांचे राष्ट्रीयीकरण १९६९); ५ वी योजना (१९७४-७९ - 'गरिबी हटाओ' घोषणा, २० कलमी कार्यक्रम, १ वर्ष आधी समाप्त); रोलिंग प्लॅन (सरकती योजना १९७८-८० - गुन्नार मिर्डाल संकल्पना); ६ वी योजना (१९८०-८५ - दारिद्र्य निर्मूलन व रोजगार)",
                  titleEn: "Plan Holiday (1966-69, Green Revolution), 4th Plan (Bank Nationalisation 1969), 5th Plan ('Garibi Hatao', 20-Point Program), Rolling Plan (1978-80 Gunnar Myrdal concept), 6th Plan (1980-85)",
                  chips: ["योजना सुट्टी १९६६-६९", "हरितक्रांती", "१४ बँकांचे राष्ट्रीयीकरण १९६९", "गरिबी हटाओ (५ वी योजना)", "रोलिंग प्लॅन"]
                },
                {
                  id: "st_gb_e02_01_04",
                  titleMr: "आधुनिक योजना (८ वी ते १२ वी): ८ वी योजना (१९९२-९७ - एलपीजी/राव-मनमोहन प्रतिमान, मानव संसाधन विकास, सर्वाधिक यशस्वी); ९ वी योजना (१९९७-२००२ - सामाजिक न्याय); १० वी योजना (२००२-०७); ११ वी योजना (२००७-१२ - 'तीव्रतर आणि सर्वसमावेशक विकास'); १२ वी योजना (२०१२-१७ - 'जलद, शाश्वत आणि अधिक समावेशक विकास' - भारताची अंतिम पंचवार्षिक योजना)",
                  titleEn: "Plans 8 to 12: 8th Plan (LPG Reforms 1991, Rao-Manmohan Model, Highly Successful), 9th, 10th, 11th (Faster & Inclusive Growth), 12th Plan (Faster, Sustainable & More Inclusive Growth - Final Plan)",
                  chips: ["८ वी योजना (LPG सुधारणा)", "११ वी योजना सर्वसमावेशक विकास", "१२ वी योजना (अंतिम पंचवार्षिक योजना)"]
                },
                {
                  id: "st_gb_e02_01_05",
                  titleMr: "नीती आयोग (NITI Aayog - National Institution for Transforming India): स्थापना १ जानेवारी २०१५; थिंक टॅंक (Think Tank) म्हणून कार्य; बॉटम-अप (Bottom-Up) दृष्टिकोन; रचना: अध्यक्ष (पंतप्रधान), उपाध्यक्ष, मुख्य कार्यकारी अधिकारी (CEO), पूर्णवेळ सदस्य; गव्हर्निंग कौन्सिल (सर्व राज्यांचे मुख्यमंत्री व नायब राज्यपाल); ७ मार्गदर्शक स्तंभ आणि सहकारी संघराज्य (Cooperative Federalism)",
                  titleEn: "NITI Aayog: Established 1 Jan 2015; Bottom-up Think Tank; Composition: PM (Chair), Vice-Chair, CEO, Full-time members, Governing Council (All CMs & LGs); Cooperative Federalism",
                  chips: ["नीती आयोग १ जानेवारी २०१५", "थिंक टॅंक (Think Tank)", "बॉटम-अप दृष्टिकोन", "गव्हर्निंग कौन्सिल", "सहकारी संघराज्य"]
                }
              ],
              sources: [
                { book: "भारतीय अर्थव्यवस्था (भाग १)", standard: "रंजन कोळंबे", chapterRef: "प्रकरण २: आर्थिक नियोजन व नीती आयोग" },
                { book: "भारतीय अर्थव्यवस्था", standard: "किरण देसले", chapterRef: "प्रकरण २: नियोजन ते नीती आयोग" }
              ]
            }
          ]
        },
        {
          id: "gb_eco_c03",
          code: "E03",
          section: "A",
          slug: "poverty-and-unemployment-in-india-and-maharashtra",
          nameMr: "दारिद्र्य आणि बेरोजगारी: संकल्पना, मोजमाप समित्या व निर्मूलन कार्यक्रम",
          nameEn: "Poverty & Unemployment in India & Maharashtra: Concepts, Committees & Eradication Schemes",
          name: "दारिद्र्य व बेरोजगारी (Poverty & Unemployment)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 5,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_eco_c03",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_eco_c02",
          nextChapterId: "gb_eco_c04",
          metaDescriptionMr: "निरपेक्ष व सापेक्ष दारिद्र्य, दारिद्र्य रेषेच्या मोजमाप समित्या (दांडेकर-रथ, अलघ, लाकडावाला, सुरेश तेंडुलकर, सी. रंगराजन), बेरोजगारीचे प्रकार, MGNREGA, आणि महाराष्ट्रातील रोजगार हमी योजना (वि. स. पागे).",
          metaDescriptionEn: "In-depth review of Absolute vs Relative Poverty, Poverty Estimation Committees (Dandekar-Rath, Alagh, Lakdawala, Suresh Tendulkar 2009, C. Rangarajan 2014), Types of Unemployment, MGNREGA, and Maharashtra Employment Guarantee Scheme (V.S. Page).",
          notesJsonPath: "/data/notes/group_b/prelims/economics/c03_poverty_unemployment.json",
          quizTag: "gb_eco_poverty_01",
          tags: ["Core", "Poverty Estimation", "Tendulkar Committee", "Rangarajan Committee", "Unemployment Types", "MGNREGA", "EGS Maharashtra", "High-Weightage"],
          searchKeywords: ["poverty estimation india", "dandekar rath alagh committee calorie", "tendulkar committee 2009 poverty line basket", "rangarajan committee 2014 per capita expenditure", "types of unemployment disguised cyclical", "mgnrega 2005", "maharashtra employment guarantee scheme v s page 1972", "दारिद्र्य मोजमाप समित्या", "सुरेश तेंडुलकर समिती", "रंगराजन समिती", "प्रच्छन्न बेरोजगारी", "मनरेगा MGNREGA", "रोजगार हमी योजना वि स पागे"],
          topics: [
            {
              id: "top_gb_e03_01",
              nameMr: "दारिद्र्य रेषा, तेंडुलकर-रंगराजन पद्धती, बेरोजगारीचे प्रकार व रोजगार योजना",
              nameEn: "Poverty Line Methodologies, Calorie vs MPCE, Unemployment & Schemes",
              subtopics: [
                {
                  id: "st_gb_e03_01_01",
                  titleMr: "दारिद्र्याची संकल्पना व प्रकार: निरपेक्ष दारिद्र्य (Absolute Poverty - मूलभूत गरजांची पूर्तता न होणे, विकसनशील देशांत मोजले जाते) आणि सापेक्ष दारिद्र्य (Relative Poverty - विषमतेवर आधारित, विकसित देशांत लॉरेन्झ वक्र / Lorenz Curve व गिन्नी गुणांक / Gini Coefficient द्वारे मोजले जाते)",
                  titleEn: "Concepts: Absolute Poverty (Basic needs deficiency in developing world) & Relative Poverty (Inequality metric via Lorenz Curve & Gini Coefficient in developed world)",
                  chips: ["निरपेक्ष दारिद्र्य", "सापेक्ष दारिद्र्य", "लॉरेन्झ वक्र", "गिन्नी गुणांक (Gini Coefficient)"]
                },
                {
                  id: "st_gb_e03_01_02",
                  titleMr: "कॅलरी-आधारित प्रारंभीच्या समित्या: १) व्ही. एम. दांडेकर व नीलकंठ रथ (१९७१ - दरडोई दैनिक २,२५० कॅलरी निकष); २) डॉ. वाय. के. अलघ कार्यगट (१९७९ - ग्रामीण २४०० कॅलरी, नागरी २१०० कॅलरी); ३) डी. टी. लाकडावाला कार्यगट (१९९३ - CPI-AL व CPI-IW आधारित राज्यनिहाय दारिद्र्य रेषा)",
                  titleEn: "Calorie-Based Task Forces: Dandekar-Rath (1971, 2250 kcal), Y.K. Alagh (1979: Rural 2400 kcal, Urban 2100 kcal), D.T. Lakdawala (1993: State-specific poverty lines using CPI-AL/IW)",
                  chips: ["दांडेकर-रथ (२२५० कॅलरी)", "अलघ कार्यगट (२४००/२१०० कॅलरी)", "लाकडावाला समिती १९९३", "CPI-AL व CPI-IW"]
                },
                {
                  id: "st_gb_e03_01_03",
                  titleMr: "सुरेश तेंडुलकर समिती (२००९ - MPSC चा सर्वात लाडका घटक): कॅलरी निकष नाकारला; दारिद्र्य टोपलीत (PLB) शिक्षण व आरोग्याचा समावेश; उपभोग खर्च निकष (२०११-१२): ग्रामीण दरडोई रु. २७.२०/दिवस (रु. ८१६/महिना), नागरी दरडोई रु. ३३.३३/दिवस (रु. १०००/महिना); भारतात दारिद्र्याचे प्रमाण २१.९% (ग्रामीण २५.७%, नागरी १३.७%); महाराष्ट्रात १७.४%",
                  titleEn: "Suresh Tendulkar Committee (2009): Discarded calorie anchor; Included health & education; MPCE (2011-12): Rural Rs 816/mo (Rs 27.20/day), Urban Rs 1000/mo (Rs 33.33/day); India Poverty 21.9%, Maharashtra 17.4%",
                  chips: ["सुरेश तेंडुलकर समिती २००९", "भारतात २१.९ टक्के दारिद्र्य", "महाराष्ट्रात १७.४ टक्के", "ग्रामीण रु ८१६ / नागरी रु १०००", "शिक्षण व आरोग्य खर्च"]
                },
                {
                  id: "st_gb_e03_01_04",
                  titleMr: "सी. रंगराजन समिती (२०१४): उपभोग खर्च निकष (२०११-१२): ग्रामीण दरडोई रु. ३२/दिवस (रु. ९७२/महिना), नागरी दरडोई रु. ४७/दिवस (रु. १४०७/महिना); रंगराजन समितीनुसार भारतात दारिद्र्याचे प्रमाण २९.५% (ग्रामीण ३०.९%, नागरी २६.४%); बहुआयामी दारिद्र्य निर्देशांक (MPI - NITI Aayog अहवाल)",
                  titleEn: "C. Rangarajan Committee (2014): Rural Rs 972/mo (Rs 32/day), Urban Rs 1407/mo (Rs 47/day); India Poverty 29.5%; Multi-dimensional Poverty Index (MPI by NITI Aayog)",
                  chips: ["रंगराजन समिती २०१४", "भारतात २९.५ टक्के दारिद्र्य", "ग्रामीण रु ९७२ / नागरी रु १४०७", "बहुआयामी दारिद्र्य (MPI)"]
                },
                {
                  id: "st_gb_e03_01_05",
                  titleMr: "बेरोजगारीचे प्रकार: १) प्रच्छन्न/छुपी बेरोजगारी (Disguised Unemployment - कृषी क्षेत्रात सीमांत उत्पादकता शून्य), २) हंगामी बेरोजगारी, ३) संरचनात्मक बेरोजगारी (कौशल्याचा अभाव), ४) चक्रीय बेरोजगारी (मंदीमुळे), ५) घर्षणात्मक बेरोजगारी; मोजमाप पद्धती (NSSO/PLFS): UPS (सामान्य स्थिती), CWS (साप्ताहिक स्थिती), CDS (दैनिक स्थिती)",
                  titleEn: "Types of Unemployment: Disguised (Marginal productivity zero in agriculture), Seasonal, Structural, Cyclical, Frictional; NSSO/PLFS Measurement Statuses: UPS, CWS, CDS",
                  chips: ["प्रच्छन्न/छुपी बेरोजगारी (शून्य उत्पादकता)", "संरचनात्मक बेरोजगारी", "चक्रीय बेरोजगारी", "PLFS सर्वेक्षण", "UPS CWS CDS"]
                },
                {
                  id: "st_gb_e03_01_06",
                  titleMr: "रोजगार योजना: महाराष्ट्राची रोजगार हमी योजना (EGS - वि. स. पागे संकल्पना, १९७२ मध्ये सुरुवात, १९७७ चा कायदा - देशातील पहिली हमी योजना); महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार हमी कायदा (MGNREGA - २००५ कायदा, २ फेब्रुवारी २००६ रोजी लागू - अकुशल मजुरीची १०० दिवसांची हमी, किमान १/३ महिला आरक्षण)",
                  titleEn: "Employment Schemes: Maharashtra EGS (Pioneered by V.S. Page in 1972, 1977 Act - 1st in India); MGNREGA (2005 Act, launched 2 Feb 2006, 100 days guaranteed unskilled wage labour, 1/3rd women quota)",
                  chips: ["महाराष्ट्राची रोहयो (वि स पागे)", "१९७७ चा रोहयो कायदा", "मनरेगा MGNREGA २००५", "१०० दिवस हमी रोजगार", "१/३ महिला आरक्षण"]
                }
              ],
              sources: [
                { book: "भारतीय अर्थव्यवस्था (भाग १)", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ३ व ४: दारिद्र्य व बेरोजगारी" },
                { book: "भारतीय अर्थव्यवस्था", standard: "किरण देसले", chapterRef: "प्रकरण ३: दारिद्र्य, विषमता व बेरोजगारी" }
              ]
            }
          ]
        },


        // =========================================================================
        // विभाग B — बँकिंग, चलन व मौद्रिक धोरण (Money, Banking & Monetary Policy)
        // =========================================================================
        {
          id: "gb_eco_c04",
          code: "E04",
          section: "B",
          slug: "rbi-monetary-policy-and-banking-structure-in-india",
          nameMr: "भारतीय रिझर्व्ह बँक (RBI), मौद्रिक धोरण (पतधोरण) व बँकिंग रचना",
          nameEn: "Reserve Bank of India (RBI), Monetary Policy & Indian Banking Structure",
          name: "RBI व बँकिंग व्यवस्था (RBI & Banking System)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 6,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_eco_c04",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_eco_c03",
          nextChapterId: "gb_eco_c05",
          metaDescriptionMr: "RBI स्थापना (१९३५), राष्ट्रीयीकरण (१९४९), मौद्रिक धोरण समिती (MPC), संख्यात्मक साधने (CRR, SLR, Repo, Reverse Repo, MSF, Bank Rate), नाबार्ड (१९८२), आणि बँकांचे राष्ट्रीयीकरण.",
          metaDescriptionEn: "In-depth review of RBI (1935 Act, 1949 nationalisation), Monetary Policy Committee (MPC 4% +/- 2%), Quantitative tools (CRR, SLR, Repo, Reverse Repo, MSF), Bank Nationalisations (1969 & 1980), and NABARD (1982).",
          notesJsonPath: "/data/notes/group_b/prelims/economics/c04_rbi_banking.json",
          quizTag: "gb_eco_banking_01",
          tags: ["Core", "RBI", "Monetary Policy MPC", "Repo Reverse Repo", "CRR SLR", "Bank Nationalisation 1969", "NABARD 1982", "High-Weightage"],
          searchKeywords: ["reserve bank of india rbi act 1934", "rbi nationalisation 1 january 1949", "monetary policy committee mpc 6 members", "crr slr repo rate reverse repo msf bank rate", "bank nationalisation 1969 1980", "nabard sivaraman committee 1982", "रिझर्व्ह बँक RBI कायदा १९३४", "RBI राष्ट्रीयीकरण १ जानेवारी १९४९", "मौद्रिक धोरण समिती MPC", "रेपो रिव्हर्स रेपो दर", "CRR SLR रोख राखीव प्रमाण", "१४ बँकांचे राष्ट्रीयीकरण", "नाबार्ड शिवरामन समिती"],
          topics: [
            {
              id: "top_gb_e04_01",
              nameMr: "मध्यवर्ती बँक, पत नियंत्रणाची साधने, चलनपुरवठा आणि बँकिंग सुधारणा",
              nameEn: "Central Banking, Monetary Policy Instruments, Money Supply & Banking Reforms",
              subtopics: [
                {
                  id: "st_gb_e04_01_01",
                  titleMr: "भारतीय रिझर्व्ह बँक (RBI): हिल्टन यंग कमिशनच्या (१९२६) शिफारशीनुसार RBI अधिनियम १९३४ द्वारे १ एप्रिल १९३५ रोजी स्थापना (प्रारंभीचे मुख्यालय कलकत्ता, १९३७ पासून मुंबई); पहिले गव्हर्नर सर ऑस्बोर्न स्मिथ, पहिले भारतीय गव्हर्नर सी. डी. देशमुख; १ जानेवारी १९४९ रोजी राष्ट्रीयीकरण",
                  titleEn: "Reserve Bank of India: Hilton Young Commission 1926; RBI Act 1934; Established 1 April 1935; HQ Mumbai since 1937; 1st Governor Osborne Smith, 1st Indian CD Deshmukh; Nationalized 1 Jan 1949",
                  chips: ["हिल्टन यंग कमिशन १९२६", "RBI स्थापना १ एप्रिल १९३५", "सी डी देशमुख (पहिले भारतीय गव्हर्नर)", "राष्ट्रीयीकरण १ जानेवारी १९४९", "मुख्यालय मुंबई"]
                },
                {
                  id: "st_gb_e04_01_02",
                  titleMr: "RBI ची प्रमुख कार्ये: चलननिर्मिती (किमान राखीव पद्धत - Minimum Reserve System १९५६: २०० कोटी रु. राखीव - ११५ कोटींचे सोने + ८५ कोटींचे परकीय चलन; १ रुपयाची नोट व नाणी वित्त मंत्रालय जारी करते); सरकारची बँक, बँकांची बँक व अंतिम ऋणदाता (Lender of Last Resort)",
                  titleEn: "RBI Functions: Currency Issuer (Minimum Reserve System 1956: Rs 200 Cr - 115 Cr Gold + 85 Cr Foreign Forex; Re 1 note/coins by Finance Ministry); Banker to Govt & Banks; Lender of Last Resort",
                  chips: ["किमान राखीव पद्धत (२०० कोटी)", "१ रुपयाची नोट (वित्त सचिव सही)", "अंतिम ऋणदाता", "परकीय चलन साठा संरक्षक"]
                },
                {
                  id: "st_gb_e04_01_03",
                  titleMr: "मौद्रिक धोरण समिती (MPC - Monetary Policy Committee): २०१६ मध्ये उर्जित पटेल समितीच्या शिफारशीनुसार वैधानिक स्थापना; ६ सदस्य (३ RBI चे + ३ केंद्र सरकारचे); अध्यक्ष RBI गव्हर्नर; महागाईचे लक्ष्य: ४% (+/- २% म्हणजेच २% ते ६% बँड); वर्षातून किमान ४ बैठका",
                  titleEn: "Monetary Policy Committee (MPC): Formed in 2016 via Urjit Patel Committee; 6 Members (3 RBI + 3 Govt); Headed by RBI Governor; Inflation Target 4% (+/- 2% Tolerance Band)",
                  chips: ["मौद्रिक धोरण समिती (MPC ६ सदस्य)", "महागाई लक्ष्य ४% (+/- २%)", "उर्जित पटेल समिती", "RBI गव्हर्नर अध्यक्ष"]
                },
                {
                  id: "st_gb_e04_01_04",
                  titleMr: "पत नियंत्रणाची संख्यात्मक साधने (Quantitative Tools): १) बँक दर (Bank Rate), २) रोख राखीव प्रमाण (CRR - बँकांनी स्वतःच्या NDTL चा ठराविक भाग RBI कडे रोख ठेवणे), ३) वैधानिक रोखता प्रमाण (SLR - बँकांनी स्वतःकडे रोख, सोने किंवा सरकारी रोखे स्वरूपात ठेवणे), ४) रेपो दर (Repo Rate - बँकांनी RBI कडून अल्पमुदतीसाठी घेतलेले कर्ज), ५) रिव्हर्स रेपो दर (RBI बँकांकडून घेते), ६) MSF (मार्जिनल स्टँडिंग फॅसिलिटी - एका रात्रीसाठी आपत्कालीन कर्ज)",
                  titleEn: "Quantitative Monetary Tools: Bank Rate, CRR (Cash Reserve Ratio held with RBI), SLR (Statutory Liquidity Ratio in cash/gold/gilts), Repo Rate, Reverse Repo Rate, MSF (Marginal Standing Facility overnight)",
                  chips: ["रेपो दर (Repo Rate)", "रिव्हर्स रेपो दर", "CRR रोख राखीव प्रमाण", "SLR वैधानिक रोखता प्रमाण", "MSF मार्जिनल स्टँडिंग फॅसिलिटी"]
                },
                {
                  id: "st_gb_e04_01_05",
                  titleMr: "चलनपुरवठ्याची मापे (Money Supply): M1 (संकीर्ण पैसा = चलनी नोटा व नाणी + बँकांमधील मागणी ठेवी Demand Deposits + RBI कडील इतर ठेवी); M2 = M1 + पोस्टातील बचत ठेवी; M3 (विस्तृत पैसा = M1 + बँकांमधील मुदत ठेवी Time Deposits); M4 = M3 + पोस्टातील एकूण ठेवी; M3 हे सर्वाधिक वापरले जाणारे अधिकृत माप",
                  titleEn: "Money Supply Measures: M1 (Narrow Money = Currency + Demand Deposits + Other deposits with RBI), M2, M3 (Broad Money = M1 + Time Deposits - Most used aggregate), M4",
                  chips: ["M1 संकीर्ण पैसा", "M3 विस्तृत पैसा (सर्वाधिक वापर)", "मागणी ठेवी vs मुदत ठेवी", "चलनाची तरलता"]
                },
                {
                  id: "st_gb_e04_01_06",
                  titleMr: "बँकिंग क्षेत्राचा इतिहास व सुधारणा: १९ जुलै १९६९ रोजी १४ मोठ्या व्यापारी बँकांचे पहिले राष्ट्रीयीकरण (ठेवी ५० कोटींपेक्षा जास्त); १५ एप्रिल १९८० रोजी ६ बँकांचे दुसरे राष्ट्रीयीकरण (ठेवी २०० कोटींपेक्षा जास्त); नरसिंहम समिती १ (१९९१) व नरसिंहम समिती २ (१९९८); नाबार्ड (NABARD - शिवरामन समितीच्या शिफारशीने १२ जुलै १९८२ रोजी स्थापना); प्रादेशिक ग्रामीण बँका (RRB - २ ऑक्टोबर १९७५)",
                  titleEn: "Banking Evolution & Reforms: 14 Banks Nationalised on 19 July 1969 (>50 Cr), 6 Banks on 15 April 1980 (>200 Cr); Narasimham Committees (1991 & 1998); NABARD (12 July 1982 via Sivaraman panel); RRBs (1975)",
                  chips: ["१४ बँकांचे राष्ट्रीयीकरण १९६९", "६ बँकांचे राष्ट्रीयीकरण १९८०", "नरसिंहम समिती (१९९१ व १९९८)", "नाबार्ड १२ जुलै १९८२", "RRB प्रादेशिक ग्रामीण बँका"]
                }
              ],
              sources: [
                { book: "भारतीय अर्थव्यवस्था (भाग १)", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ५ व ६: चलन, बँकिंग व रिझर्व्ह बँक" },
                { book: "भारतीय अर्थव्यवस्था", standard: "किरण देसले", chapterRef: "प्रकरण ४: भारतीय बँकिंग व मौद्रिक धोरण" }
              ]
            }
          ]
        },
        {
          id: "gb_eco_c05",
          code: "E05",
          section: "B",
          slug: "inflation-price-indices-wpi-cpi-and-business-cycles",
          nameMr: "महागाई (चलनवाढ), भाववाढ निर्देशांक (WPI व CPI) आणि व्यापार चक्रे",
          nameEn: "Inflation Dynamics, Price Indices (WPI & CPI) & Business Cycles",
          name: "महागाई व निर्देशांक (Inflation, WPI & CPI)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_eco_c05",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_eco_c04",
          nextChapterId: "gb_eco_c06",
          metaDescriptionMr: "महागाईचे प्रकार (मागणीजन्य, खर्चजन्य), गॅलोपिंग व हायपर-इन्फ्लेशन, घाऊक किंमत निर्देशांक (WPI - २०११-१२), ग्राहक किंमत निर्देशांक (CPI संयुक्त - २०१२), कोर इन्फ्लेशन, आणि फिलिप्स वक्र.",
          metaDescriptionEn: "In-depth review of Inflation mechanics (Demand-pull vs Cost-push), Creeping/Walking/Galloping/Hyperinflation, WPI (Base 2011-12, 697 items), CPI Combined (Base 2012), Core Inflation, and Phillips Curve.",
          notesJsonPath: "/data/notes/group_b/prelims/economics/c05_inflation_indices.json",
          quizTag: "gb_eco_inflation_01",
          tags: ["Macroeconomics", "Inflation", "Demand-Pull Cost-Push", "WPI Base 2011-12", "CPI Base 2012", "Core Inflation", "Phillips Curve", "High-Weightage"],
          searchKeywords: ["inflation types demand pull cost push", "stagflation phillips curve", "wholesale price index wpi base year 2011 12", "consumer price index cpi combined base year 2012", "headline inflation vs core inflation", "महागाई चलनवाढ", "मागणीजन्य व खर्चजन्य महागाई", "घाऊक किंमत निर्देशांक WPI", "ग्राहक किंमत निर्देशांक CPI", "स्टॅगफ्लेशन", "फिलिप्स वक्र"],
          topics: [
            {
              id: "top_gb_e05_01",
              nameMr: "महागाईची कारणे, प्रकार, किंमत निर्देशांक आणि नियंत्रणाचे उपाय",
              nameEn: "Inflationary Pressures, Typology, Measurement Indices & Mitigation",
              subtopics: [
                {
                  id: "st_gb_e05_01_01",
                  titleMr: "महागाईची संकल्पना व प्रकार: वस्तू व सेवांच्या किमतीत होणारी सातत्यपूर्ण व सर्वसाधारण वाढ (पैशाचे मूल्य घटते); प्रकार: १) गतीनुसार: रांगणारी (Creeping <३%), चालणारी (Walking ३-१०%), धावणारी (Galloping १०-२०%), बेफाम/हायपर इन्फ्लेशन (Hyperinflation >२०%); २) कारणानुसार: मागणीजन्य (Demand-Pull - पैशाचा पुरवठा वाढल्याने) आणि खर्चजन्य (Cost-Push - कच्चा माल, इंधन, मजुरी वाढल्याने)",
                  titleEn: "Concepts & Types: Persistent rise in general price level; By Speed: Creeping (<3%), Walking (3-10%), Galloping (10-20%), Hyperinflation (>20%); By Cause: Demand-Pull vs Cost-Push Inflation",
                  chips: ["मागणीजन्य महागाई", "खर्चजन्य महागाई", "हायपर-इन्फ्लेशन (Hyperinflation)", "पैशाचे अवमूल्यन"]
                },
                {
                  id: "st_gb_e05_01_02",
                  titleMr: "विशिष्ट संकल्पना: १) स्टॅगफ्लेशन (Stagflation - उच्च महागाई + उच्च बेरोजगारी + आर्थिक मंदी); २) डिफ्लेशन (Deflation - किमतींची सार्वत्रिक घसरण); ३) डिस्इन्फ्लेशन (Disinflation - महागाईचा दर कमी होणे); ४) कोर इन्फ्लेशन (Core Inflation - अन्नधान्य व इंधनाचे अस्थिर भाव वगळून मोजलेली महागाई); ५) हेडलाईन इन्फ्लेशन (Headline Inflation - सर्वसमावेशक महागाई)",
                  titleEn: "Special Concepts: Stagflation (High inflation + Stagnant growth + High unemployment), Deflation, Disinflation, Core Inflation (Excluding volatile food & fuel) vs Headline Inflation",
                  chips: ["स्टॅगफ्लेशन (Stagflation)", "कोर इन्फ्लेशन (Core Inflation)", "हेडलाईन इन्फ्लेशन", "डिफ्लेशन"]
                },
                {
                  id: "st_gb_e05_01_03",
                  titleMr: "घाऊक किंमत निर्देशांक (WPI - Wholesale Price Index): वाणिज्य व उद्योग मंत्रालय (DPIIT) द्वारे जारी; आधारभूत वर्ष २०११-१२; एकूण ६९७ वस्तू (प्राथमिक वस्तू ११७, इंधन व ऊर्जा १६, उत्पादित वस्तू ५६४); सेवा क्षेत्राचा समावेश नाही; उत्पादित वस्तूंना सर्वाधिक भारांक (६४.२३%)",
                  titleEn: "Wholesale Price Index (WPI): Released by DPIIT (Commerce Ministry); Base Year 2011-12; Total 697 items (Manufactured products highest weight 64.23%); Does NOT include services",
                  chips: ["WPI घाऊक किंमत निर्देशांक", "आधारभूत वर्ष २०११-१२", "६९७ वस्तू", "सेवांचा समावेश नाही", "DPIIT वाणिज्य मंत्रालय"]
                },
                {
                  id: "st_gb_e05_01_04",
                  titleMr: "ग्राहक किंमत निर्देशांक (CPI - Consumer Price Index): राष्ट्रीय सांख्यिकी कार्यालय (NSO) द्वारे जारी; आधारभूत वर्ष २०१२; वस्तू व सेवा दोघांचाही समावेश; अन्न व पेये यांना सर्वाधिक भारांक (४५.८६%); RBI मौद्रिक धोरणासाठी (पतधोरणासाठी) केवळ CPI (संयुक्त) महागाईचा अधिकृत वापर करते",
                  titleEn: "Consumer Price Index (CPI Combined): Released by NSO; Base Year 2012; Includes goods & services; Food & Beverages highest weight (45.86%); RBI uses CPI Combined as official inflation anchor",
                  chips: ["CPI ग्राहक किंमत निर्देशांक", "आधारभूत वर्ष २०१२", "NSO द्वारे जारी", "वस्तू व सेवा दोन्ही समावेश", "RBI चे पतधोरण मोजमाप"]
                },
                {
                  id: "st_gb_e05_01_05",
                  titleMr: "फिलिप्स वक्र (Phillips Curve): महागाईचा दर (Inflation Rate) आणि बेरोजगारीचा दर (Unemployment Rate) यांमधील व्यस्त संबंध (Inverse Relationship) दर्शवणारा वक्र (A.W. Phillips संकल्पना)",
                  titleEn: "Phillips Curve: Demonstrates inverse short-run trade-off between Rate of Inflation and Rate of Unemployment (A.W. Phillips, 1958)",
                  chips: ["फिलिप्स वक्र (Phillips Curve)", "महागाई विरुद्ध बेरोजगारी", "व्यस्त संबंध"]
                }
              ],
              sources: [
                { book: "भारतीय अर्थव्यवस्था (भाग १)", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ७: चलनवाढ व भाववाढ निर्देशांक" },
                { book: "भारतीय अर्थव्यवस्था", standard: "किरण देसले", chapterRef: "प्रकरण ५: महागाई व किंमत निर्देशांक" }
              ]
            }
          ]
        },


        // =========================================================================
        // विभाग C — शासकीय वित्त, अर्थसंकल्प व कररचना (Public Finance & Taxation)
        // =========================================================================
        {
          id: "gb_eco_c06",
          code: "E06",
          section: "C",
          slug: "public-finance-union-budget-and-fiscal-policy",
          nameMr: "शासकीय वित्त, केंद्रीय अर्थसंकल्प व वित्तीय धोरण (राजकोषीय नीती)",
          nameEn: "Public Finance, Union Budget & Fiscal Policy Mechanics",
          name: "शासकीय वित्त व अर्थसंकल्प (Public Finance & Budget)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 5,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_eco_c06",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_eco_c05",
          nextChapterId: "gb_eco_c07",
          metaDescriptionMr: "कलम ११२ (वार्षिक वित्तीय विवरणपत्र), महसुली व भांडवली जमा/खर्च, वित्तीय तूट, महसुली तूट, प्राथमिक तूट, FRBM कायदा २००३, आणि सरकारी निधी (कलम २६६ व २६७).",
          metaDescriptionEn: "In-depth review of Public Finance: Article 112 (Annual Financial Statement), Revenue vs Capital Accounts, Deficit metrics (Fiscal, Revenue, Primary), FRBM Act 2003 (NK Singh panel), and Funds (Consolidated, Contingency, Public Account).",
          notesJsonPath: "/data/notes/group_b/prelims/economics/c06_public_finance_budget.json",
          quizTag: "gb_eco_budget_01",
          tags: ["Public Finance", "Union Budget Article 112", "Fiscal Deficit", "Revenue Deficit", "Primary Deficit", "FRBM Act 2003", "High-Weightage"],
          searchKeywords: ["public finance union budget article 112", "revenue receipts capital receipts revenue expenditure", "fiscal deficit formula primary deficit", "frbm act 2003 nk singh committee", "consolidated fund article 266 contingency fund article 267", "अर्थसंकल्प कलम ११२", "वित्तीय तूट", "महसुली तूट", "प्राथमिक तूट", "FRBM कायदा २००३", "एकत्रित निधी कलम २६६", "आकस्मिकता निधी कलम २६७"],
          topics: [
            {
              id: "top_gb_e06_01",
              nameMr: "अर्थसंकल्पीय रचना, शासकीय निधी, तुटीचे प्रकार आणि राजकोषीय शिस्त",
              nameEn: "Budgetary Framework, Sovereign Funds, Deficit Taxonomy & FRBM Paradigm",
              subtopics: [
                {
                  id: "st_gb_e06_01_01",
                  titleMr: "अर्थसंकल्पाची घटनात्मक चौकट (कलम ११२): संविधानात 'बजेट' शब्द नाही, त्याऐवजी 'वार्षिक वित्तीय विवरणपत्र' (Annual Financial Statement) असा उल्लेख; रेल्वे बजेट १९२४ (ॲकवर्थ समिती) पासून वेगळे मांडले जात होते, २०१७ पासून विवेक देबरॉय समितीच्या शिफारशीने पुन्हा सर्वसाधारण अर्थसंकल्पात विलीन",
                  titleEn: "Constitutional Basis (Art 112): Term 'Budget' not in Constitution, designated 'Annual Financial Statement'; Railway Budget merged back into General Budget in 2017 (Bibek Debroy Committee)",
                  chips: ["कलम ११२ वार्षिक वित्तीय विवरणपत्र", "ॲकवर्थ समिती १९२४", "विवेक देबरॉय समिती २०१७", "रेल्वे बजेट विलीनीकरण"]
                },
                {
                  id: "st_gb_e06_01_02",
                  titleMr: "शासकीय निधींचे ३ प्रकार: १) भारताचा एकत्रित निधी (Consolidated Fund of India - कलम २६६(१): सरकारचे सर्व महसूल व कर्जे जमा, संसदेच्या मंजुरीशिवाय १ रुपयाही काढता येत नाही); २) सार्वजनिक लेखा (Public Account - कलम २६६(२): भविष्य निर्वाह निधी, पोस्टातील बचत); ३) भारताचा आकस्मिकता निधी (Contingency Fund - कलम २६७: राष्ट्रपतींच्या अखत्यारीत, आपत्कालीन खर्च)",
                  titleEn: "3 Government Funds: Consolidated Fund of India (Art 266(1) - Parliamentary sanction mandatory), Public Account (Art 266(2)), Contingency Fund of India (Art 267 - Under President's disposal)",
                  chips: ["एकत्रित निधी (कलम २६६(१))", "सार्वजनिक लेखा (कलम २६६(२))", "आकस्मिकता निधी (कलम २६७)", "संसदेची मंजुरी"]
                },
                {
                  id: "st_gb_e06_01_03",
                  titleMr: "अर्थसंकल्पाचे दोन भाग: १) महसुली खाते (Revenue Account): महसुली जमा (कर महसूल + कर-व्यतिरिक्त महसूल जसे व्याज, लाभांश) आणि महसुली खर्च (प्रशासकीय खर्च, व्याज भरणा, अनुदाने, संरक्षण - यातून कोणतीही मालमत्ता निर्माण होत नाही); २) भांडवली खाते (Capital Account): भांडवली जमा (कर्ज वसुली, निर्गुंतवणूक) आणि भांडवली खर्च (रस्ते, धरणे, कारखाने उभारणी - मालमत्ता निर्मिती)",
                  titleEn: "Budget Bifurcation: Revenue Account (Revenue Receipts via taxes/dividends vs Revenue Expenditure on interest/subsidies) & Capital Account (Capital Receipts via loans/disinvestment vs Capital Expenditure creating assets)",
                  chips: ["महसुली जमा व खर्च", "भांडवली जमा व खर्च", "मालमत्ता निर्मिती", "व्याज भरणा खर्च"]
                },
                {
                  id: "st_gb_e06_01_04",
                  titleMr: "अर्थसंकल्पीय तुटींचे प्रकार (Deficit Metrics): १) महसुली तूट (Revenue Deficit = महसुली खर्च - महसुली जमा); २) वित्तीय तूट (Fiscal Deficit = एकूण खर्च - एकूण जमा (कर्जे वगळून); सरकारचे एकूण नवीन कर्ज दर्शवणारी तूट); ३) प्राथमिक तूट (Primary Deficit = वित्तीय तूट - निव्वळ व्याज भरणा); ४) प्रभावी महसुली तूट (Effective Revenue Deficit)",
                  titleEn: "Types of Deficits: Revenue Deficit = Rev Exp - Rev Rec; Fiscal Deficit = Total Exp - Total Rec (excl. borrowings) - indicates total borrowing requirement; Primary Deficit = Fiscal Deficit - Interest Payments",
                  chips: ["वित्तीय तूट (Fiscal Deficit)", "महसुली तूट", "प्राथमिक तूट = वित्तीय तूट - व्याज", "सरकारचे एकूण कर्ज"]
                },
                {
                  id: "st_gb_e06_01_05",
                  titleMr: "वित्तीय जबाबदारी व अर्थसंकल्प व्यवस्थापन कायदा (FRBM Act २००३): राजकोषीय शिस्त आणणे; वित्तीय तूट GDP च्या ३% पर्यंत आणणे व महसुली तूट शून्यावर आणण्याचे मूळ उद्दिष्ट; एन. के. सिंह समिती (२०१६) शिफारशी: कर्ज-जीडीपी गुणोत्तर (Debt-to-GDP Ratio) केंद्र ४०%, राज्ये २०% (एकूण ६०%) ठेवण्याचे लक्ष्य",
                  titleEn: "FRBM Act 2003: Fiscal Discipline; Target 3% Fiscal Deficit; N.K. Singh Panel (2016) recommended Debt-to-GDP ratio of 60% (40% Centre, 20% States)",
                  chips: ["FRBM कायदा २००३", "वित्तीय तूट ३% उद्दिष्ट", "एन के सिंह समिती २०१६", "कर्ज-जीडीपी गुणोत्तर ६०%"]
                }
              ],
              sources: [
                { book: "भारतीय अर्थव्यवस्था (भाग १)", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ८: शासकीय वित्त व अर्थसंकल्प" },
                { book: "भारतीय अर्थव्यवस्था", standard: "किरण देसले", chapterRef: "प्रकरण ६: सार्वजनिक वित्त व वित्तीय धोरण" }
              ]
            }
          ]
        },
        {
          id: "gb_eco_c07",
          code: "E07",
          section: "C",
          slug: "tax-structure-direct-indirect-taxes-and-gst-regime",
          nameMr: "भारतातील कररचना: प्रत्यक्ष कर, अप्रत्यक्ष कर आणि वस्तू व सेवा कर (GST)",
          nameEn: "Tax Structure in India: Direct & Indirect Taxes, Raja Chelliah Reforms & GST Regime",
          name: "कररचना व GST (Tax Structure & GST)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 5,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_eco_c07",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_eco_c06",
          nextChapterId: "gb_eco_c08",
          metaDescriptionMr: "प्रत्यक्ष कर (आयकर, कॉर्पोरेट कर, STT), अप्रत्यक्ष कर (सीमाशुल्क), राजा चेलय्या व विजय केळकर समित्या, १०१ वी घटनादुरुस्ती (२०१६), GST रचना (CGST, SGST, IGST), आणि GST परिषद (कलम २७९A).",
          metaDescriptionEn: "In-depth review of Indian Taxation: Direct Taxes (Income, Corporate, STT, CBDT), Indirect Taxes (Customs, CBIC), Raja Chelliah & Kelkar Reforms, 101st Amendment Act 2016, GST (CGST, SGST, IGST), and GST Council (Art 279A).",
          notesJsonPath: "/data/notes/group_b/prelims/economics/c07_tax_structure_gst.json",
          quizTag: "gb_eco_tax_01",
          tags: ["Public Finance", "Taxation", "Direct Tax", "Indirect Tax", "GST 101st Amendment", "GST Council Article 279A", "High-Weightage"],
          searchKeywords: ["tax structure india direct indirect taxes", "income tax corporate tax cbdt", "101st constitutional amendment act gst 2016", "gst council article 279a composition voting", "cgst sgst igst cascading effect", "कररचना", "प्रत्यक्ष कर व अप्रत्यक्ष कर", "कॉर्पोरेट कर", "१०१ वी घटनादुरुस्ती GST", "GST परिषद कलम २७९A", "CGST SGST IGST"],
          topics: [
            {
              id: "top_gb_e07_01",
              nameMr: "प्रत्यक्ष-अप्रत्यक्ष कर, कर सुधारणा समित्या आणि GST प्रणाली",
              nameEn: "Direct vs Indirect Taxation, Tax Reforms & Comprehensive GST Blueprint",
              subtopics: [
                {
                  id: "st_gb_e07_01_01",
                  titleMr: "प्रत्यक्ष कर (Direct Taxes): कर आकारणी (Impact) व करभार (Incidence) एकाच व्यक्तीवर पडतो (कर दुसऱ्यावर ढकलता येत नाही); उदा. वैयक्तिक आयकर (Income Tax), कंपनी कर (Corporate Tax - केंद्र सरकारच्या उत्पन्नाचा प्रमुख स्रोत), भांडवली नफा कर (Capital Gains Tax), सिक्युरिटीज ट्रॅन्झॅक्शन टॅक्स (STT); केंद्रीय प्रत्यक्ष कर मंडळ (CBDT)",
                  titleEn: "Direct Taxes: Impact & Incidence fall on the same person (non-transferable); Income Tax, Corporate Tax, Capital Gains Tax, STT; Regulated by CBDT",
                  chips: ["प्रत्यक्ष कर (Direct Tax)", "कंपनी कर (Corporate Tax)", "आयकर (Income Tax)", "CBDT प्रत्यक्ष कर मंडळ"]
                },
                {
                  id: "st_gb_e07_01_02",
                  titleMr: "अप्रत्यक्ष कर (Indirect Taxes): कराचा भार दुसऱ्या व्यक्तीवर ढकलता येतो; उदा. सीमाशुल्क (Customs Duty), वस्तू व सेवा कर (GST), केंद्रीय उत्पादन शुल्क (पेट्रोलियम व मद्यावर अद्याप लागू); केंद्रीय अप्रत्यक्ष कर व सीमाशुल्क मंडळ (CBIC); प्रतिगामी स्वरूप (Regressive in nature)",
                  titleEn: "Indirect Taxes: Tax burden shifted to consumer; Customs Duty, GST, Central Excise on Petroleum/Alcohol; Regulated by CBIC; Regressive nature",
                  chips: ["अप्रत्यक्ष कर (Indirect Tax)", "सीमाशुल्क (Customs Duty)", "CBIC मंडळ", "कर टप्प्याटप्प्याने ढकळणे"]
                },
                {
                  id: "st_gb_e07_01_03",
                  titleMr: "कर सुधारणा समित्या: १) राजा चेलय्या समिती (१९९१ - कर दरांचे सुलभीकरण, सेवा कर लागू करण्याची शिफारस); २) विजय केळकर समिती (२००२ - राष्ट्रीय स्तरावर एकात्मिक GST लागू करण्याची सर्वप्रथम शिफारस); कराचे प्रकार: प्रमाणशीर, प्रगतीशील (Progressive) व प्रतिगामी (Regressive)",
                  titleEn: "Tax Reform Panels: Raja Chelliah Committee 1991 (Rate rationalization, Service tax), Vijay Kelkar Task Force 2002 (Pioneered national GST idea); Progressive vs Regressive taxes",
                  chips: ["राजा चेलय्या समिती १९९१", "विजय केळकर समिती २००२ (GST जनक)", "प्रगतीशील कर पद्धत"]
                },
                {
                  id: "st_gb_e07_01_04",
                  titleMr: "वस्तू व सेवा कर (GST): १०१ वी घटनादुरुस्ती कायदा २०१६ अन्वये १ जुलै २०१७ पासून संपूर्ण भारतात लागू ('एक देश, एक कर, एक बाजारपेठ'); गंतव्य-आधारित उपभोग कर (Destination-based consumption tax); १७ अप्रत्यक्ष कर व २३ उपकर विलीन; ५ मुख्य दर स्लॅब: ०%, ५%, १२%, १८%, २८%; पेट्रोलियम उत्पादने, मानवी वापराची दारू, वीज व रिअल इस्टेट सध्या GST च्या बाहेर",
                  titleEn: "Goods & Services Tax (GST): 101st Amendment Act 2016, implemented 1 July 2017 ('One Nation, One Tax'); Destination-based; Subsumed 17 taxes & 23 cesses; Slabs: 0%, 5%, 12%, 18%, 28%; Petrol/Alcohol outside GST",
                  chips: ["१०१ वी घटनादुरुस्ती २०१६", "१ जुलै २०१७ GST दिन", "गंतव्य-आधारित कर (Destination)", "५ स्लॅब (०, ५, १२, १८, २८%)", "पेट्रोल व मद्य बाहेर"]
                },
                {
                  id: "st_gb_e07_01_05",
                  titleMr: "GST चे तीन प्रकार व GST परिषद (कलम २७९A): १) CGST (केंद्राचा कर), २) SGST (राज्याचा कर), ३) IGST (आंतरराज्य व्यापारावर केंद्राकडून गोळा व वाटप); GST परिषद (कलम २७९A): अध्यक्ष केंद्रीय अर्थमंत्री, सदस्य राज्यांचे वित्तमंत्री; मतदानाचा अधिकार: केंद्र सरकार १/३ मत, सर्व राज्य सरकारे एकत्रित २/३ मत; निर्णय ३/४ बहुमताने",
                  titleEn: "GST Architecture & Council (Art 279A): CGST, SGST, IGST (Inter-state); GST Council headed by Union Finance Minister; Voting weight: Centre 1/3rd, States 2/3rd; 3/4th majority required for decisions",
                  chips: ["CGST SGST IGST", "GST परिषद कलम २७९A", "केंद्रीय अर्थमंत्री अध्यक्ष", "केंद्राला १/३ मतदान", "राज्यांना २/३ मतदान"]
                }
              ],
              sources: [
                { book: "भारतीय अर्थव्यवस्था (भाग १)", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ९: कररचना व GST" },
                { book: "भारतीय अर्थव्यवस्था", standard: "किरण देसले", chapterRef: "प्रकरण ७: भारतीय कररचना व सुधारणा" }
              ]
            }
          ]
        },


        // =========================================================================
        // विभाग D — परकीय व्यापार, व्यवहारतोल व आंतरराष्ट्रीय संस्था (External Sector)
        // =========================================================================
        {
          id: "gb_eco_c08",
          code: "E08",
          section: "D",
          slug: "foreign-trade-balance-of-payments-and-rupee-convertibility",
          nameMr: "भारताचा परकीय व्यापार, व्यवहारतोल (BoP) आणि रुपयाची परिवर्तनीयता",
          nameEn: "India's Foreign Trade, Balance of Payments (BoP) & Rupee Convertibility",
          name: "परकीय व्यापार व व्यवहारतोल (Foreign Trade & BoP)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_eco_c08",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_eco_c07",
          nextChapterId: "gb_eco_c09",
          metaDescriptionMr: "व्यापारतोल (BoT) विरुद्ध व्यवहारतोल (BoP), चालू खाते व भांडवली खाते, चालू खात्यावरील तूट (CAD), तारापोर समिती (रुपयाची परिवर्तनीयता), FDI व FPI, आणि परकीय चलन साठा.",
          metaDescriptionEn: "In-depth review of External Sector: Balance of Trade (BoT) vs Balance of Payments (BoP), Current Account vs Capital Account, Current Account Deficit (CAD), Tarapore Committee on Rupee Convertibility, FDI vs FPI, and Forex Reserves.",
          notesJsonPath: "/data/notes/group_b/prelims/economics/c08_foreign_trade_bop.json",
          quizTag: "gb_eco_trade_01",
          tags: ["External Sector", "Foreign Trade", "Balance of Payments BoP", "Current Account Deficit CAD", "FDI FPI", "Tarapore Committee", "High-Weightage"],
          searchKeywords: ["foreign trade india composition direction", "balance of trade bot balance of payments bop", "current account capital account bop", "current account deficit cad", "rupee convertibility ss tarapore committee", "foreign direct investment fdi vs fpi", "परकीय व्यापार", "व्यापारतोल BoT", "व्यवहारतोल BoP", "चालू खात्यावरील तूट CAD", "तारापोर समिती रुपया परिवर्तनीयता", "FDI थेट परकीय गुंतवणूक"],
          topics: [
            {
              id: "top_gb_e08_01",
              nameMr: "व्यापारतोल, व्यवहारतोल खाती, रुपयाचे अवमूल्यन व विदेशी भांडवल प्रवाह",
              nameEn: "Trade Balance, BoP Accounting, Rupee Valuation & Capital Flows",
              subtopics: [
                {
                  id: "st_gb_e08_01_01",
                  titleMr: "व्यापारतोल (Balance of Trade - BoT) विरुद्ध व्यवहारतोल (Balance of Payments - BoP): BoT: केवळ दृश्य वस्तूंची आयात व निर्यात (भारताचा व्यापारतोल ऐतिहासिकदृष्ट्या नेहमी तुटीचा राहिला आहे); BoP: एका वर्षात देशाचा जगाशी झालेला सर्व आर्थिक व्यवहारांचा पद्धतशीर ताळेबंद (दृश्य + अदृश्य + भांडवली प्रवाह; BoP नेहमी समतोल असतो)",
                  titleEn: "Balance of Trade (Only visible merchandise, chronically in deficit for India) vs Balance of Payments (Comprehensive record of all economic transactions: visible, invisible, and capital; BoP always balances)",
                  chips: ["व्यापारतोल (दृश्य वस्तू)", "व्यवहारतोल BoP (दृश्य + अदृश्य)", "नेहमी तुटीचा व्यापारतोल", "आर्थिक ताळेबंद"]
                },
                {
                  id: "st_gb_e08_01_02",
                  titleMr: "व्यवहारतोलाची दोन प्रमुख खाती: १) चालू खाते (Current Account): दृश्य वस्तूंची आयात-निर्यात + अदृश्य व्यवहार (सेवा, पर्यटन, परदेशातून पाठवलेला पैसा Remittances, व्याज, देणग्या); २) भांडवली खाते (Capital Account): परकीय प्रत्यक्ष गुंतवणूक (FDI), संस्थात्मक गुंतवणूक (FPI/FII), विदेशी कर्जे (ECB) व बँकिंग भांडवल; चालू खात्यावरील तूट (Current Account Deficit - CAD)",
                  titleEn: "BoP Accounting: Current Account (Merchandise trade + Invisibles: services, remittances, dividends) & Capital Account (FDI, FPI, External Commercial Borrowings, NRI deposits); CAD dynamics",
                  chips: ["चालू खाते (Current Account)", "अदृश्य व्यवहार (सेवा व Remittance)", "भांडवली खाते (FDI व FPI)", "चालू खात्यावरील तूट (CAD)"]
                },
                {
                  id: "st_gb_e08_01_03",
                  titleMr: "रुपयाची परिवर्तनीयता (Convertibility of Rupee): १) चालू खात्यावर रुपया पूर्ण परिवर्तनीय (ऑगस्ट १९९४ पासून कलम ८/IMF नुसार); २) भांडवली खात्यावर अंशतः परिवर्तनीय; एस. एस. तारापोर समिती (१९९७ व २००६ - भांडवली खात्यावर पूर्ण परिवर्तनीयतेसाठी वित्तीय तूट व NPA नियंत्रणाच्या अटी)",
                  titleEn: "Rupee Convertibility: Full convertibility on Current Account achieved in August 1994 (Article VIII of IMF); Partial on Capital Account; S.S. Tarapore Committees (1997 & 2006 preconditions)",
                  chips: ["चालू खात्यावर पूर्ण परिवर्तनीय (१९९४)", "भांडवली खात्यावर अंशतः", "तारापोर समिती (१९९७ व २००६)", "FEMA कायदा १९९९"]
                },
                {
                  id: "st_gb_e08_01_04",
                  titleMr: "थेट परकीय गुंतवणूक (FDI) विरुद्ध परकीय संस्थात्मक गुंतवणूक (FPI/FII): FDI: दीर्घकालीन, भौतिक मालमत्ता किंवा कंपनीत १०% पेक्षा जास्त हिस्सा, स्थिर; FPI (हॉट मनी): शेअर बाजारात १०% पेक्षा कमी गुंतवणूक, अत्यंत चंचल व अल्पकालीन; अरविंद मायाराम समिती निकष",
                  titleEn: "FDI vs FPI: FDI (Long-term, >10% stake, creates physical assets/management control, stable) vs FPI (Hot Money, <10% portfolio, highly volatile); Arvind Mayaram Committee norms",
                  chips: ["FDI थेट परकीय गुंतवणूक (>१०%)", "FPI संस्थात्मक गुंतवणूक (<१०%)", "हॉट मनी (Hot Money)", "अरविंद मायाराम समिती"]
                },
                {
                  id: "st_gb_e08_01_05",
                  titleMr: "भारताचा परकीय व्यापाराची दिशा व स्वरूप: प्रमुख निर्यात: पेट्रोलियम उत्पादने, रत्ने व दागिने, औषधे, अभियांत्रिकी वस्तू; प्रमुख आयात: कच्चे खनिज तेल (Crude Oil), सोने, इलेक्ट्रॉनिक वस्तू; प्रमुख व्यापारी भागीदार देश: १) अमेरिका (भारताचा सर्वात मोठा व्यापारी भागीदार व व्यापार शेष/Surplus), २) चीन (सर्वात मोठी व्यापार तूट), ३) UAE",
                  titleEn: "Direction & Composition of Foreign Trade: Top Exports (Refined petroleum, gems, pharma); Top Imports (Crude oil, gold, electronics); Top Partners: USA (Largest partner & trade surplus), China (Largest deficit), UAE",
                  chips: ["कच्चे तेल (सर्वाधिक आयात)", "पेट्रोलियम उत्पादने (निर्यात)", "अमेरिका (सर्वात मोठा भागीदार)", "चीन (सर्वाधिक व्यापार तूट)"]
                }
              ],
              sources: [
                { book: "भारतीय अर्थव्यवस्था (भाग १)", standard: "रंजन कोळंबे", chapterRef: "प्रकरण १०: परकीय व्यापार व व्यवहारतोल" },
                { book: "भारतीय अर्थव्यवस्था", standard: "किरण देसले", chapterRef: "प्रकरण ८: भारताचा परकीय व्यापार" }
              ]
            }
          ]
        },
        {
          id: "gb_eco_c09",
          code: "E09",
          section: "D",
          slug: "international-financial-institutions-imf-world-bank-wto",
          nameMr: "आंतरराष्ट्रीय वित्तीय संस्था: IMF, जागतिक बँक (World Bank) आणि WTO",
          nameEn: "International Financial Institutions: IMF, World Bank Group & WTO",
          name: "आंतरराष्ट्रीय संस्था (IMF, World Bank & WTO)",
          category: "SUPPORTING",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 3,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_eco_c09",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_eco_c08",
          nextChapterId: "gb_eco_c10",
          metaDescriptionMr: "ब्रेटन वूड्स संस्था (१९४४), IMF (SDR / कागदी सोने, कोटा पद्धत), जागतिक बँक समूहाच्या ५ संस्था (IBRD, IDA, IFC, MIGA, ICSID), आणि WTO (गेनेव्हा, TRIPS, TRIMS, ॲग्री-सबसिडी बॉक्सेस).",
          metaDescriptionEn: "In-depth review of Bretton Woods Twins (1944): IMF (SDR Paper Gold, Quota, BoP support), World Bank Group (IBRD, IDA Soft Loan Window, IFC, MIGA, ICSID), and WTO (1995, Geneva, TRIPS, TRIMS, Amber/Blue/Green Boxes).",
          notesJsonPath: "/data/notes/group_b/prelims/economics/c09_international_institutions.json",
          quizTag: "gb_eco_institutions_01",
          tags: ["External Sector", "IMF", "World Bank Group", "WTO 1995", "SDR Special Drawing Rights", "TRIPS TRIMS", "High-Weightage"],
          searchKeywords: ["bretton woods twins 1944 imf world bank", "imf special drawing rights sdr paper gold", "world bank group ibrd ida ifc miga icsid", "world trade organization wto 1 january 1995", "wto subsidy boxes green blue amber", "आंतरराष्ट्रीय नाणेनिधी IMF", "जागतिक बँक", "SDR कागदी सोने", "जागतिक व्यापार संघटना WTO", "सबसिडी बॉक्सेस"],
          topics: [
            {
              id: "top_gb_e09_01",
              nameMr: "ब्रेटन वूड्स संस्था, जागतिक बँक गट आणि WTO चे करार",
              nameEn: "Bretton Woods Architecture, World Bank Affiliates & WTO Treaties",
              subtopics: [
                {
                  id: "st_gb_e09_01_01",
                  titleMr: "ब्रेटन वूड्स परिषद (१९४४): आंतरराष्ट्रीय नाणेनिधी (IMF) आणि जागतिक बँक (IBRD) यांची जुळी भावंडे (Bretton Woods Twins) म्हणून स्थापना; मुख्यालय: वॉशिंग्टन डी. सी.; भारत दोन्ही संस्थांचा संस्थापक सदस्य",
                  titleEn: "Bretton Woods Conference 1944: Created IMF & World Bank as twin sisters; Headquartered in Washington D.C.; India is a founding member of both",
                  chips: ["ब्रेटन वूड्स परिषद १९४४", "IMF व जागतिक बँक", "मुख्यालय वॉशिंग्टन", "संस्थापक सदस्य भारत"]
                },
                {
                  id: "st_gb_e09_01_02",
                  titleMr: "आंतरराष्ट्रीय नाणेनिधी (IMF): सदस्य देशांना केवळ तात्पुरत्या व्यवहारतोल (BoP) संकटातून बाहेर काढण्यासाठी अल्प व मध्यम मुदतीची कर्जे देणे; SDR (Special Drawing Rights - विशेष उचल अधिकार किंवा 'कागदी सोने'): आंतरराष्ट्रीय राखीव चलन; SDR बास्केटमध्ये ५ चलने: डॉलर, युरो, युआन (चीन), येन (जपान), पाउंड (UK)",
                  titleEn: "IMF: Solves Balance of Payments (BoP) crises; SDR (Special Drawing Rights / 'Paper Gold') valuation basket of 5 currencies (USD, Euro, RMB Yuan, Yen, GBP)",
                  chips: ["IMF व्यवहारतोल कर्ज", "SDR विशेष उचल अधिकार", "कागदी सोने", "५ चलने बास्केट"]
                },
                {
                  id: "st_gb_e09_01_03",
                  titleMr: "जागतिक बँक समूह (World Bank Group): विकसनशील देशांच्या आर्थिक विकासासाठी व दारिद्र्य निर्मूलनासाठी दीर्घकालीन कर्जे देणे; ५ घटक संस्था: १) IBRD (पुनर्रचना व विकास बँक), २) IDA (आंतरराष्ट्रीय विकास संघ - 'सॉफ्ट लोन विंडो' / बिनव्याजी कर्जे), ३) IFC (खाजगी क्षेत्राला वित्तपुरवठा), ४) MIGA (गुंतवणूक हमी संस्था), ५) ICSID (गुंतवणूक विवाद निवारण - भारत याचा सदस्य नाही)",
                  titleEn: "World Bank Group: 5 Organs - IBRD, IDA ('Soft Loan Window' offering zero-interest long loans), IFC (Private sector finance), MIGA, ICSID (India is NOT a member of ICSID)",
                  chips: ["जागतिक बँक (दीर्घकालीन विकास)", "IDA सॉफ्ट लोन विंडो", "IFC खाजगी वित्त", "ICSID (भारत सदस्य नाही)"]
                },
                {
                  id: "st_gb_e09_01_04",
                  titleMr: "जागतिक व्यापार संघटना (WTO): गॅट (GATT १९४७) च्या उरुग्वे फेरीनंतर (मराकेश करार १९९४) १ जानेवारी १९९५ रोजी स्थापना; मुख्यालय: जिनिव्हा (स्वित्झर्लंड); प्रमुख करार: TRIPS (बौद्धिक संपदा हक्क), TRIMS (गुंतवणूक उपाय), GATS (सेवा व्यापार); कृषी सबसिडी बॉक्सेस: १) ग्रीन बॉक्स (व्यापारास विकृत न करणारी अनुदाने), २) ब्लू बॉक्स (उत्पादन मर्यादित ठेवणारी अनुदाने), ३) अंबर बॉक्स (व्यापार विकृत करणारी अनुदाने - कपात आवश्यक)",
                  titleEn: "World Trade Organization (WTO): Replaced GATT on 1 Jan 1995 via Marrakesh Agreement; HQ Geneva; TRIPS, TRIMS, GATS; Agricultural Subsidies: Green Box, Blue Box & Amber Box (trade-distorting)",
                  chips: ["WTO १ जानेवारी १९९५", "GATT मराकेश करार", "मुख्यालय जिनिव्हा", "TRIPS बौद्धिक संपदा", "अंबर/ग्रीन/ब्लू बॉक्स"]
                }
              ],
              sources: [
                { book: "भारतीय अर्थव्यवस्था (भाग १)", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ११: आंतरराष्ट्रीय वित्तीय संस्था" },
                { book: "भारतीय अर्थव्यवस्था", standard: "किरण देसले", chapterRef: "प्रकरण ९: IMF, जागतिक बँक व WTO" }
              ]
            }
          ]
        },


        // =========================================================================
        // विभाग E — शेती, ग्रामीण विकास व पायाभूत सुविधा (Sectors & Infrastructure)
        // =========================================================================
        {
          id: "gb_eco_c10",
          code: "E10",
          section: "E",
          slug: "agriculture-economics-land-reforms-and-food-security",
          nameMr: "कृषी अर्थशास्त्र, जमीन सुधारणा, हरितक्रांती व अन्न सुरक्षा",
          nameEn: "Agricultural Economics, Land Reforms, Green Revolution & Food Security",
          name: "कृषी अर्थशास्त्र व अन्न सुरक्षा (Agriculture & Food Security)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_eco_c10",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_eco_c09",
          nextChapterId: "gb_eco_c11",
          metaDescriptionMr: "जमीन सुधारणा (मध्यस्थ नष्ट करणे, कमाल जमीन धारणा), हरितक्रांती (एम. एस. स्वामीनाथन व नॉर्मन बोरलॉग), किमान आधारभूत किंमत (MSP - CACP), राष्ट्रीय अन्न सुरक्षा कायदा २०१३, आणि FCI.",
          metaDescriptionEn: "In-depth review of Agricultural Economics: Land Reforms, Green Revolution (M.S. Swaminathan & Norman Borlaug), MSP mechanism via CACP (A2+FL, C2 costs), National Food Security Act 2013, and FCI buffer stocks.",
          notesJsonPath: "/data/notes/group_b/prelims/economics/c10_agriculture_economics.json",
          quizTag: "gb_eco_agri_01",
          tags: ["Agriculture Economics", "Green Revolution Swaminathan", "MSP CACP", "National Food Security Act 2013", "FCI Buffer Stock", "High-Weightage"],
          searchKeywords: ["agriculture economics land reforms", "green revolution m s swaminathan norman borlaug", "minimum support price msp cacp formula c2", "national food security act nfsa 2013", "food corporation of india fci pds", "कृषी अर्थशास्त्र", "जमीन सुधारणा", "हरितक्रांती स्वामीनाथन", "किमान आधारभूत किंमत MSP CACP", "राष्ट्रीय अन्न सुरक्षा कायदा २०१३ NFSA", "सार्वजनिक वितरण व्यवस्था PDS"],
          topics: [
            {
              id: "top_gb_e10_01",
              nameMr: "जमीन सुधारणा, हरितक्रांतीचे टप्पे, आधारभूत किमती (MSP) आणि PDS",
              nameEn: "Agrarian Reforms, Green Revolution Waves, Price Supports & Food Security",
              subtopics: [
                {
                  id: "st_gb_e10_01_01",
                  titleMr: "जमीन सुधारणा (Land Reforms): तीन प्रमुख उद्दिष्टे: १) मध्यस्थांचे उच्चाटन (जमीनदारी, रयतवारी व महालवारी पद्धती नष्ट करणे), २) कुळ वहिवाट सुधारणा (भाडेपट्टी नियंत्रण, कुळांना मालकी हक्क - महाराष्ट्रातील 'कसेल त्याची जमीन' कुलकायदा १९४८), ३) कमाल जमीन धारणा कायदा (Land Ceiling Act) व तुकडेबंदी-तुकडेजोड कायदा",
                  titleEn: "Land Reforms: Abolition of Intermediaries (Zamindari), Tenancy Reforms (Ownership to tillers - MH Tenancy Act 1948), Land Ceiling Acts & Consolidation of Holdings",
                  chips: ["जमीनदारी निर्मूलन", "कसेल त्याची जमीन कुलकायदा", "कमाल जमीन धारणा", "तुकडेबंदी-तुकडेजोड"]
                },
                {
                  id: "st_gb_e10_01_02",
                  titleMr: "हरितक्रांती (Green Revolution): १९६६-६७ मध्ये सुरुवात; जागतिक जनक: नॉर्मन बोरलॉग (नोबेल शांतता पारितोषिक); भारतीय जनक: डॉ. एम. एस. स्वामीनाथन; महाराष्ट्रातील प्रणेते: वसंतराव नाईक; मुख्य घटक: HYV बियाणे (गहू व तांदूळ), रासायनिक खते, कीटकनाशके व नियंत्रित जलसिंचन; पहिल्या टप्प्यात पंजाब, हरियाणा व प. उत्तर प्रदेशात केंद्रित",
                  titleEn: "Green Revolution (1966-67): Global father Norman Borlaug, Indian father Dr. M.S. Swaminathan, Maharashtra pioneer Vasantrao Naik; Package: HYV Seeds (Mexican Wheat), Fertilizers, Irrigation",
                  chips: ["हरितक्रांती १९६६-६७", "डॉ एम एस स्वामीनाथन", "नॉर्मन बोरलॉग", "वसंतराव नाईक (महाराष्ट्र)", "HYV बियाणे (गहू-तांदूळ)"]
                },
                {
                  id: "st_gb_e10_01_03",
                  titleMr: "किमान आधारभूत किंमत (MSP - Minimum Support Price): कृषी खर्च व किंमत आयोगाच्या (CACP - स्थापना १९६५) शिफारशीनुसार केंद्र सरकारकडून वर्षातून दोनदा (पेरणीपूर्वी) २२ अधिकृत पिकांसाठी जाहीर (उसासाठी FRP); उत्पादन खर्च सूत्रे: A2 (थेट रोख खर्च), A2+FL (कौटुंबिक श्रम मूल्य), C2 (सर्वंकष खर्च); स्वामीनाथन आयोगाची शिफारस: C2 च्या ५०% नफा जोडून MSP द्यावा",
                  titleEn: "Minimum Support Price (MSP): Recommended by CACP (est. 1965) for 22 mandated crops (FRP for sugarcane); Cost metrics: A2, A2+FL, C2; Swaminathan formula: MSP = C2 + 50%",
                  chips: ["किमान आधारभूत किंमत (MSP)", "CACP कृषी खर्च आयोग", "२२ पिके + ऊस FRP", "स्वामीनाथन आयोग (C2 + ५०%)"]
                },
                {
                  id: "st_gb_e10_01_04",
                  titleMr: "राष्ट्रीय अन्न सुरक्षा कायदा (NFSA २०१३): १० सप्टेंबर २०१३ पासून लागू; कायदेशीर हक्क (Legal Entitlement); देशातील ६७% लोकसंख्येला संरक्षण (ग्रामीण ७५%, नागरी ५०%); प्रति व्यक्ती दरमहा ५ किलो धान्य (तांदूळ ३ रु./किलो, गहू २ रु./किलो, भरडधान्य १ रु./किलो); अंत्योदय अन्न योजनेतील (AAY) कुटुंबांना दरमहा ३५ किलो धान्य; शिधापत्रिकेवर १८ वर्षांवरील ज्येष्ठ महिला कुटुंबप्रमुख",
                  titleEn: "National Food Security Act (NFSA 2013): Covers 67% population (75% rural, 50% urban); 5 kg foodgrains/person/month at subsidized rates (Rice Rs 3, Wheat Rs 2, Coarse Rs 1); Eldest woman (18+) head of ration card",
                  chips: ["अन्न सुरक्षा कायदा २०१३", "६७% लोकसंख्या कव्हरेज", "५ किलो प्रति व्यक्ती धान्य", "ज्येष्ठ महिला कुटुंबप्रमुख", "अंत्योदय योजना (३५ किलो)"]
                },
                {
                  id: "st_gb_e10_01_05",
                  titleMr: "भारतीय अन्न महामंडळ (FCI - स्थापना १९६५): अन्नधान्याची खरेदी, साठवणूक, वाहतूक आणि वितरण; आपत्कालीन परिस्थितीसाठी बफर स्टॉक (Buffer Stock) राखणे; सार्वजनिक वितरण व्यवस्था (PDS / TPDS)",
                  titleEn: "Food Corporation of India (FCI, est. 1965): Procurement, Storage, Transport & PDS Distribution; Maintaining national Buffer Stock norms",
                  chips: ["FCI अन्न महामंडळ १९६५", "बफर स्टॉक (Buffer Stock)", "सार्वजनिक वितरण व्यवस्था (PDS)"]
                }
              ],
              sources: [
                { book: "भारतीय अर्थव्यवस्था (भाग २)", standard: "रंजन कोळंबे", chapterRef: "प्रकरण १: भारतीय कृषी क्षेत्र" },
                { book: "भारतीय अर्थव्यवस्था", standard: "किरण देसले", chapterRef: "प्रकरण १०: कृषी अर्थशास्त्र व अन्न सुरक्षा" }
              ]
            }
          ]
        },
        {
          id: "gb_eco_c11",
          code: "E11",
          section: "E",
          slug: "industrial-development-disinvestment-and-msme-sector",
          nameMr: "औद्योगिक धोरणे, निर्गुंतवणूक (Disinvestment) आणि MSME क्षेत्र",
          nameEn: "Industrial Policies, Disinvestment, Navratnas & MSME Sector",
          name: "उद्योग, निर्गुंतवणूक व MSME (Industry & MSME Sector)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_eco_c11",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_eco_c10",
          nextChapterId: "gb_eco_c12",
          metaDescriptionMr: "औद्योगिक धोरण १९४८, १९५६ (औद्योगिक संविधानाची सनद), नवीन औद्योगिक धोरण २४ जुलै १९९१ (LPG, परवाना मुक्ती), महारत्न/नवरत्न कंपन्या, निर्गुंतवणूक (DIPAM), आणि नवीन MSME व्याख्या २०२०.",
          metaDescriptionEn: "In-depth review of Industrial Policy Resolutions (1948, 1956 Economic Constitution, New Industrial Policy 24 July 1991 - LPG & Delicensing), Maharatna/Navratna CPSEs, Disinvestment (DIPAM), and Revised MSME Criteria 2020.",
          notesJsonPath: "/data/notes/group_b/prelims/economics/c11_industry_msme.json",
          quizTag: "gb_eco_industry_01",
          tags: ["Industrial Policy", "New Industrial Policy 1991", "LPG Reforms", "Maharatna Navratna", "Disinvestment DIPAM", "MSME 2020 Definition", "High-Weightage"],
          searchKeywords: ["industrial policy resolution 1948 1956", "new industrial policy 24 july 1991 lpg delicensing", "maharatna navratna miniratna cpse criteria", "disinvestment dipam strategic sale", "revised msme definition 2020 investment turnover", "औद्योगिक धोरण १९५६", "नवीन औद्योगिक धोरण १९९१ LPG", "महारत्न नवरत्न कंपन्या", "निर्गुंतवणूक DIPAM", "MSME व्याख्या २०२०"],
          topics: [
            {
              id: "top_gb_e11_01",
              nameMr: "औद्योगिक धोरणे, सार्वजनिक उपक्रम (CPSE), निर्गुंतवणूक आणि MSME",
              nameEn: "Industrial Policy Framework, CPSE Autonomy, Disinvestment & MSME Classification",
              subtopics: [
                {
                  id: "st_gb_e11_01_01",
                  titleMr: "ऐतिहासिक औद्योगिक धोरणे: १) औद्योगिक धोरण १९४८ (पहिले धोरण - मिश्र अर्थव्यवस्थेचा स्वीकार); २) औद्योगिक धोरण १९५६ (भारताचे 'आर्थिक संविधान' - महालनोबिस मॉडेलवर आधारित, सार्वजनिक क्षेत्राला अग्रस्थान, उद्योगांचे ३ अनुसूचीत वर्गीकरण: A, B, C)",
                  titleEn: "Historical Industrial Policies: 1948 Resolution (1st policy, mixed economy adoption) & 1956 Resolution ('Economic Constitution of India', Mahalanobis Model, public sector dominance, 3 Schedules A/B/C)",
                  chips: ["औद्योगिक धोरण १९४८ (मिश्र अर्थव्यवस्था)", "औद्योगिक धोरण १९५६ (आर्थिक संविधान)", "सार्वजनिक क्षेत्र वर्चस्व"]
                },
                {
                  id: "st_gb_e11_01_02",
                  titleMr: "नवीन औद्योगिक धोरण (२४ जुलै १९९१): पंतप्रधान पी. व्ही. नरसिंह राव व अर्थमंत्री डॉ. मनमोहन सिंग; उदारीकरण, खाजगीकरण व जागतिकीकरण (LPG); १) परवाना राज समाप्त (Delicensing - सध्या केवळ ४ उद्योगांना परवाना बंधनकारक: दारू, तंबाखू, इलेक्ट्रॉनिक संरक्षण साहित्य, धोकादायक रसायने); २) सार्वजनिक क्षेत्रासाठी राखीव उद्योगांची संख्या १७ वरून २ वर आणली (केवळ अणुऊर्जा व रेल्वे ऑपरेशन्स राखीव); ३) MRTP कायदा रद्द करून स्पर्धा कायदा २००२ (Competition Act) आणला",
                  titleEn: "New Industrial Policy (24 July 1991 - LPG Reforms): Abolished License Raj (Only 4 industries require license today); Reserved sectors reduced from 17 to 2 (Atomic Energy & Railway Operations); MRTP replaced by Competition Act 2002",
                  chips: ["नवीन औद्योगिक धोरण २४ जुलै १९९१", "LPG उदारीकरण खाजगीकरण", "परवाना राज समाप्ती", "केवळ २ उद्योग राखीव (अणुऊर्जा व रेल्वे)"]
                },
                {
                  id: "st_gb_e11_01_03",
                  titleMr: "सार्वजनिक क्षेत्रातील उपक्रम (CPSE दर्जा): १) महारत्न (Maharatna): जागतिक पातळीवर विस्तार करण्यासाठी सर्वाधिक वित्तीय स्वायत्तता (उदा. ONGC, NTPC, IOCL, SAIL, BHEL, GAIL इ.); २) नवरत्न (Navratna); ३) मिनीरत्न (वर्ग १ व २); आर्थिक स्वायत्ततेनुसार गुंतवणूक अधिकार",
                  titleEn: "Central Public Sector Enterprise (CPSE) Categories: Maharatna (Highest financial autonomy up to Rs 5000 Cr investment), Navratna, Miniratna (Category I & II)",
                  chips: ["महारत्न कंपन्या (Maharatna)", "नवरत्न कंपन्या", "मिनीरत्न दर्जा", "वित्तीय स्वायत्तता"]
                },
                {
                  id: "st_gb_e11_01_04",
                  titleMr: "निर्गुंतवणूक (Disinvestment): सार्वजनिक उद्योगांमधील सरकारी मालकीच्या समभागांची विक्री करणे; दीपम (DIPAM - Department of Investment and Public Asset Management - वित्त मंत्रालयांतर्गत विभाग); प्रकार: अल्पसंख्याक समभाग विक्री व धोरणात्मक निर्गुंतवणूक (Strategic Disinvestment - व्यवस्थापकीय नियंत्रण खाजगी हातात देणे)",
                  titleEn: "Disinvestment: Sale of Govt equity in CPSEs; Managed by DIPAM (Dept of Investment and Public Asset Management under Finance Ministry); Minority stake sale vs Strategic Sale (Management transfer)",
                  chips: ["निर्गुंतवणूक (Disinvestment)", "दीपम (DIPAM वित्त मंत्रालय)", "धोरणात्मक विक्री (Strategic Sale)"]
                },
                {
                  id: "st_gb_e11_01_05",
                  titleMr: "सूक्ष्म, लघु व मध्यम उद्योग (MSME सुधारित व्याख्या - १ जुलै २०२० पासून लागू): उत्पादन व सेवा क्षेत्रातील फरक रद्द; १) सूक्ष्म (Micro): गुंतवणूक १ कोटी रु. पर्यंत आणि उलाढाल (Turnover) ५ कोटी रु. पर्यंत; २) लघु (Small): गुंतवणूक १० कोटी रु. पर्यंत आणि उलाढाल ५० कोटी रु. पर्यंत; ३) मध्यम (Medium): गुंतवणूक ५० कोटी रु. पर्यंत आणि उलाढाल २५० कोटी रु. पर्यंत",
                  titleEn: "Revised MSME Definition (Effective 1 July 2020): Composite criteria (Investment + Turnover, no manufacturing/services distinction): Micro (Inv <=1 Cr, Turn <=5 Cr), Small (Inv <=10 Cr, Turn <=50 Cr), Medium (Inv <=50 Cr, Turn <=250 Cr)",
                  chips: ["MSME नवीन व्याख्या २०२०", "सूक्ष्म (१ कोटी / ५ कोटी)", "लघु (१० कोटी / ५० कोटी)", "मध्यम (५० कोटी / २५० कोटी)"]
                }
              ],
              sources: [
                { book: "भारतीय अर्थव्यवस्था (भाग २)", standard: "रंजन कोळंबे", chapterRef: "प्रकरण २: भारतीय उद्योग क्षेत्र व निर्गुंतवणूक" },
                { book: "भारतीय अर्थव्यवस्था", standard: "किरण देसले", chapterRef: "प्रकरण ११: औद्योगिक विकास व धोरणे" }
              ]
            }
          ]
        },
        {
          id: "gb_eco_c12",
          code: "E12",
          section: "E",
          slug: "infrastructure-energy-transport-and-communication-economics",
          nameMr: "पायाभूत सुविधांचे अर्थशास्त्र: ऊर्जा, वाहतूक, बंदरे आणि दूरसंचार",
          nameEn: "Infrastructure Economics: Energy Mix, Logistics, Ports & Telecommunications",
          name: "पायाभूत सुविधांचे अर्थशास्त्र (Infrastructure Economics)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_eco_c12",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_eco_c11",
          nextChapterId: "gb_eco_c13",
          metaDescriptionMr: "भारतातील ऊर्जा मिश्रण (औष्णिक, सौर, पवन, अणुऊर्जा), राष्ट्रीय महामार्ग व भारतमाला प्रकल्प, सागरमाला (बंदरे विकास), रेल्वेचे डेडिकेटेड फ्रेट कॉरिडॉर (DFC), आणि PM गतिशक्ती.",
          metaDescriptionEn: "In-depth review of Infrastructure: Energy mix (Thermal vs Renewables), Bharatmala Pariyojana, Sagarmala (Port-led development), Dedicated Freight Corridors (DFC), National Logistics Policy, and PM Gati Shakti National Master Plan.",
          notesJsonPath: "/data/notes/group_b/prelims/economics/c12_infrastructure_economics.json",
          quizTag: "gb_eco_infra_01",
          tags: ["Infrastructure", "Energy Mix", "Renewable Energy", "Bharatmala", "Sagarmala", "PM Gati Shakti", "High-Weightage"],
          searchKeywords: ["infrastructure economics india", "energy mix thermal solar renewable target", "bharatmala pariyojana highways", "sagarmala port led industrialisation", "pm gati shakti master plan 7 engines", "dedicated freight corridor dfc", "पायाभूत सुविधा", "ऊर्जा मिश्रण सौर ऊर्जा", "भारतमाला प्रकल्प", "सागरमाला प्रकल्प", "PM गतिशक्ती", "लॉजिस्टिक्स धोरण"],
          topics: [
            {
              id: "top_gb_e12_01",
              nameMr: "ऊर्जा संक्रमण, राष्ट्रीय महामार्ग प्रकल्प, बंदरे आणि लॉजिस्टिक्स",
              nameEn: "Energy Transition, Highway Grids, Port Ecosystems & PM Gati Shakti",
              subtopics: [
                {
                  id: "st_gb_e12_01_01",
                  titleMr: "भारताचे ऊर्जा क्षेत्र व वीज निर्मिती: स्थापित वीज क्षमतेत औष्णिक कोळसा ऊर्जेचा वाटा सुमारे ५०-५५% (सर्वाधिक); अपारंपरिक/नवीकरणीय ऊर्जा (सौर, पवन, बायोमास - झपाट्याने वाढ); COP26 पंचामृत उद्दिष्ट: २०३० पर्यंत ५०० गिगावॅट (GW) बिगर-जीवाश्म ऊर्जा क्षमता व २०७० पर्यंत 'नेट झिरो' (Net Zero) कार्बन उत्सर्जन गाठणे",
                  titleEn: "India's Power Matrix: Thermal Coal accounts for 50-55% capacity; Renewable Boom (Solar, Wind); COP26 Panchamrit Goal: 500 GW Non-Fossil Capacity by 2030 & Net Zero Carbon by 2070",
                  chips: ["औष्णिक ऊर्जा ५०-५५%", "सौर ऊर्जा", "५०० GW नवीकरणीय ऊर्जा २०३०", "नेट झिरो २०७० (COP26)"]
                },
                {
                  id: "st_gb_e12_01_02",
                  titleMr: "रस्ते वाहतूक व भारतमाला प्रकल्प (Bharatmala Pariyojana): आर्थिक कॉरिडॉर, सीमावर्ती रस्ते व एक्सप्रेसवे यांचे जाळे; स्वर्णिम चतुष्कोन (Golden Quadrilateral - ५८४६ किमी: दिल्ली, मुंबई, चेन्नई, कलकत्ता); उत्तर-दक्षिण व पूर्व-पश्चिम कॉरिडॉर",
                  titleEn: "Bharatmala Pariyojana: Economic corridors, border roads, expressways; Golden Quadrilateral (5846 km connecting Delhi-Mumbai-Chennai-Kolkata); North-South & East-West Corridors",
                  chips: ["भारतमाला प्रकल्प", "सुवर्ण चतुष्कोन (५८४६ किमी)", "आर्थिक कॉरिडॉर", "राष्ट्रीय महामार्ग"]
                },
                {
                  id: "st_gb_e12_01_03",
                  titleMr: "जलमार्ग व सागरमाला प्रकल्प (Sagarmala Project): बंदरांच्या आधारे औद्योगिक विकास (Port-led development); १२ प्रमुख महाबंदरे व सागरी किनारा आधुनिकीकरण; राष्ट्रीय जलमार्ग कायदा २०१६ (१११ राष्ट्रीय जलमार्ग घोषित; NW-1: गंगा नदी - प्रयागराज ते हल्दिया १६२० किमी सर्वात लांब)",
                  titleEn: "Sagarmala Project: Port-led industrialisation, coastal shipping modernization; National Waterways Act 2016 (111 NWs; NW-1 on Ganga from Prayagraj to Haldia 1620 km longest)",
                  chips: ["सागरमाला प्रकल्प", "१२ प्रमुख महाबंदरे", "राष्ट्रीय जलमार्ग १ (गंगा नदी १६२० किमी)", "अंतर्देशीय जलवाहतूक"]
                },
                {
                  id: "st_gb_e12_01_04",
                  titleMr: "रेल्वे पायाभूत सुविधा: डेडिकेटेड फ्रेट कॉरिडॉर (DFC - मालवाहतुकीसाठी स्वतंत्र ट्रॅक: वेस्टर्न DFC - दादरी ते JNPT मुंबई; ईस्टर्न DFC - लुधियाना ते दानकुनी); वंदे भारत एक्सप्रेस व बुलेट ट्रेन प्रकल्प (मुंबई-अहमदाबाद)",
                  titleEn: "Railway Modernization: Dedicated Freight Corridors (Western DFC: Dadri to JNPT Mumbai; Eastern DFC: Ludhiana to Dankuni); Vande Bharat & Bullet Train Project",
                  chips: ["वेस्टर्न DFC (दादरी ते JNPT)", "ईस्टर्न DFC", "वंदे भारत", "बुलेट ट्रेन"]
                },
                {
                  id: "st_gb_e12_01_05",
                  titleMr: "PM गतिशक्ती राष्ट्रीय मास्टर प्लॅन (PM Gati Shakti - ऑक्टोबर २०२१): पायाभूत सुविधांचा एकात्मिक व समन्वित विकास; १०० लाख कोटींचा आराखडा; ७ इंजिने: रस्ते, रेल्वे, विमानतळ, बंदरे, जलवाहतूक, जलमार्ग व लॉजिस्टिक्स पायाभूत सुविधा; राष्ट्रीय लॉजिस्टिक्स धोरण (NLP २०२२ - लॉजिस्टिक्स खर्च GDP च्या १४% वरून ८% पर्यंत आणणे)",
                  titleEn: "PM Gati Shakti Master Plan (2021): Multi-modal connectivity driven by 7 engines (Roads, Railways, Airports, Ports, Mass Transport, Waterways, Logistics); National Logistics Policy 2022",
                  chips: ["PM गतिशक्ती (७ इंजिने)", "१०० लाख कोटी आराखडा", "राष्ट्रीय लॉजिस्टिक्स धोरण २०२२", "लॉजिस्टिक्स खर्च कपात"]
                }
              ],
              sources: [
                { book: "भारतीय अर्थव्यवस्था (भाग २)", standard: "रंजन कोळंबे", chapterRef: "प्रकरण ५: पायाभूत सुविधांचे अर्थशास्त्र" },
                { book: "भारतीय अर्थव्यवस्था", standard: "किरण देसले", chapterRef: "प्रकरण १२: ऊर्जा, वाहतूक व दळणवळण" }
              ]
            }
          ]
        },


        // =========================================================================
        // विभाग F — सामाजिक कल्याण, महाराष्ट्र विशेष व मास्टर रिव्हिजन (Welfare & Consolidation)
        // =========================================================================
        {
          id: "gb_eco_c13",
          code: "E13",
          section: "F",
          slug: "social-welfare-schemes-financial-inclusion-and-demographic-dividend",
          nameMr: "सामाजिक सुरक्षा योजना, वित्तीय समावेशन आणि लोकसंख्या लाभांश",
          nameEn: "Social Security Schemes, Financial Inclusion & Demographic Dividend",
          name: "कल्याणकारी योजना व वित्तीय समावेशन (Social Welfare & Inclusion)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_eco_c13",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_eco_c12",
          nextChapterId: "gb_eco_c14",
          metaDescriptionMr: "वित्तीय समावेशन (PM जनधन योजना, JAM त्रयी), PM जीवन ज्योती, PM सुरक्षा विमा, अटल पेन्शन, मुद्रा योजना, स्टँड-अप इंडिया, आणि लोकसंख्या लाभांश (Demographic Dividend).",
          metaDescriptionEn: "In-depth review of Financial Inclusion: Pradhan Mantri Jan Dhan Yojana (PMJDY), JAM Trinity, Micro-insurance (PMJJBY, PMSBY), Atal Pension Yojana, MUDRA loans (Shishu, Kishore, Tarun), and Demographic Dividend.",
          notesJsonPath: "/data/notes/group_b/prelims/economics/c13_social_welfare_inclusion.json",
          quizTag: "gb_eco_welfare_01",
          tags: ["Social Welfare", "Financial Inclusion", "PM Jan Dhan Yojana", "JAM Trinity", "MUDRA Yojana", "Atal Pension", "Demographic Dividend", "High-Weightage"],
          searchKeywords: ["financial inclusion india pmjdy", "jam trinity jan dhan aadhaar mobile", "mudra yojana shishu kishore tarun", "pmjjby pmsby atal pension yojana", "demographic dividend working age population", "वित्तीय समावेशन", "PM जनधन योजना", "JAM त्रयी", "मुद्रा योजना", "अटल पेन्शन योजना", "लोकसंख्या लाभांश"],
          topics: [
            {
              id: "top_gb_e13_01",
              nameMr: "वित्तीय समावेशन, सूक्ष्म-कर्ज, सामाजिक सुरक्षा व लोकसंख्या संक्रमण",
              nameEn: "Financial Inclusion Architecture, Micro-Credit, Pensions & Demography",
              subtopics: [
                {
                  id: "st_gb_e13_01_01",
                  titleMr: "वित्तीय समावेशन (Financial Inclusion): असंघटित व गरीब घटकांना बँकिंग व्यवस्थेत आणणे; प्रधानमंत्री जनधन योजना (PMJDY - २८ ऑगस्ट २०१४): 'मेरा खाता, भाग्य विधाता'; शून्य शिल्लक बचत खाते, रुपे (RuPay) डेबिट कार्ड, अपघात विमा आणि ओव्हरड्राफ्ट (OD) सुविधा; नचिकेत मोर समिती व दीपक मोहंती समिती",
                  titleEn: "Financial Inclusion & PMJDY (28 Aug 2014): 'Mera Khata Bhagya Vidhata'; Zero-balance accounts, RuPay card, accident insurance & Overdraft; Nachiket Mor panel",
                  chips: ["PM जनधन योजना २८ ऑगस्ट २०१४", "मेरा खाता भाग्य विधाता", "शून्य शिल्लक खाते", "रुपे डेबिट कार्ड", "ओव्हरड्राफ्ट सुविधा"]
                },
                {
                  id: "st_gb_e13_01_02",
                  titleMr: "JAM त्रयी (JAM Trinity): जनधन (Jan Dhan), आधार (Aadhaar) आणि मोबाईल (Mobile); प्रत्यक्ष लाभ हस्तांतरण (DBT - Direct Benefit Transfer): सबसिडीची गळती रोखून थेट लाभार्थ्यांच्या बँक खात्यात पैसे जमा करणे",
                  titleEn: "JAM Trinity: Jan Dhan, Aadhaar & Mobile linkage enabling Direct Benefit Transfer (DBT) to eliminate leakage of welfare subsidies",
                  chips: ["JAM त्रयी (Jan Dhan Aadhaar Mobile)", "DBT प्रत्यक्ष लाभ हस्तांतरण", "सबसिडी गळती नियंत्रण"]
                },
                {
                  id: "st_gb_e13_01_03",
                  titleMr: "पंतप्रधान मुद्रा योजना (PMRY / MUDRA - ८ एप्रिल २०१५): गैर-कॉर्पोरेट व सूक्ष्म उद्योगांना विनातारण कर्ज; कर्जाचे ३ टप्पे: १) शिशु (Shishu - ५०,००० रु. पर्यंत), २) किशोर (Kishore - ५०,००० ते ५ लाख रु.), ३) तरुण (Tarun - ५ लाख ते १० लाख रु.; नवीन तरतुदीत २० लाखांपर्यंत वाढ)",
                  titleEn: "MUDRA Yojana (8 April 2015): Collateral-free micro loans in 3 categories: Shishu (up to Rs 50k), Kishore (Rs 50k to 5L), Tarun (Rs 5L to 10L/20L)",
                  chips: ["मुद्रा योजना (MUDRA २०१५)", "शिशु कर्ज (५० हजार)", "किशोर कर्ज (५ लाख)", "तरुण कर्ज (१० लाख)"]
                },
                {
                  id: "st_gb_e13_01_04",
                  titleMr: "सामाजिक सुरक्षा व विमा योजना: १) प्रधानमंत्री सुरक्षा विमा योजना (PMSBY - अपघाती विमा २ लाख रु., वार्षिक प्रीमियम २० रु.); २) प्रधानमंत्री जीवन ज्योती विमा योजना (PMJJBY - जीवन विमा २ लाख रु., वार्षिक प्रीमियम ४३६ रु.); ३) अटल पेन्शन योजना (APY - १८ ते ४० वयोगटातील असंघटित कामगारांना वयाच्या ६० नंतर मासिक १ ते ५ हजार रु. पेन्शन)",
                  titleEn: "Social Security & Pensions: PMSBY (Accident insurance Rs 2L at Rs 20/yr), PMJJBY (Life cover Rs 2L at Rs 436/yr), Atal Pension Yojana (APY: 1k to 5k monthly pension after age 60)",
                  chips: ["PMSBY सुरक्षा विमा (२० रु.)", "PMJJBY जीवन ज्योती (४३६ रु.)", "अटल पेन्शन योजना (APY)", "असंघटित कामगार सुरक्षा"]
                },
                {
                  id: "st_gb_e13_01_05",
                  titleMr: "लोकसंख्या लाभांश (Demographic Dividend): देशातील एकूण लोकसंख्येत १५ ते ५९ वर्षे वयोगटातील कार्यक्षम/उत्पादक लोकसंख्येचे प्रमाण परावलंबी (बालक व वृद्ध) लोकसंख्येपेक्षा जास्त असणे; भारताची सरासरी वय वर्ष २८ वर्षे; कौशल्य विकास (Skill India) व मानवी भांडवलाची (Human Capital) गरज",
                  titleEn: "Demographic Dividend: Economic growth potential when working-age population (15-59) is larger than dependent share; India's median age ~28 years; Skill India necessity",
                  chips: ["लोकसंख्या लाभांश", "कार्यक्षम वयोगट (१५ ते ५९ वर्षे)", "कमी परावलंबित्व प्रमाण", "मानवी भांडवल"]
                }
              ],
              sources: [
                { book: "भारतीय अर्थव्यवस्था (भाग १)", standard: "रंजन कोळंबे", chapterRef: "प्रकरण १२: वित्तीय समावेशन व सामाजिक सुरक्षा" },
                { book: "भारतीय अर्थव्यवस्था", standard: "किरण देसले", chapterRef: "प्रकरण १३: शासकीय कल्याणकारी योजना" }
              ]
            }
          ]
        },
        {
          id: "gb_eco_c14",
          code: "E14",
          section: "F",
          slug: "economy-of-maharashtra-economic-survey-and-cooperatives",
          nameMr: "महाराष्ट्राची अर्थव्यवस्था: आर्थिक पाहणी अहवाल, सहकारी चळवळ व विकास",
          nameEn: "Economy of Maharashtra: Economic Survey Review, Cooperatives & Growth Trajectory",
          name: "महाराष्ट्राची अर्थव्यवस्था व सहकार (Economy of Maharashtra & Cooperatives)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 5,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_eco_c14",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_eco_c13",
          nextChapterId: "gb_eco_c15",
          metaDescriptionMr: "महाराष्ट्राचा GSDP, दरडोई उत्पन्न, क्षेत्रांची टक्केवारी (कृषी, उद्योग, सेवा), सहकारी चळवळीचा इतिहास (साखर, दूध, बँका), डॉ. विठ्ठलराव विखे पाटील, वैकुंठभाई मेहता, आणि प्रादेशिक असमतोल (केळकर समिती).",
          metaDescriptionEn: "In-depth review of Maharashtra's Economy: GSDP, Per Capita Income, Sectoral composition (Agriculture, Industry, Services), History of Cooperative Movement, Vaikunthbhai Mehta, and Regional Imbalance (Kelkar Committee Report 2013).",
          notesJsonPath: "/data/notes/group_b/prelims/economics/c14_maharashtra_economy.json",
          quizTag: "gb_eco_mh_economy_01",
          tags: ["Core", "Maharashtra Economy", "Economic Survey MH", "GSDP Per Capita", "Cooperative Movement", "Kelkar Committee Regional Imbalance", "High-Weightage"],
          searchKeywords: ["economy of maharashtra economic survey", "gsdp sectoral share agriculture industry services", "cooperative movement maharashtra sugar milk credit", "vaikunthbhai mehta vitthalrao vikhe patil", "vijay kelkar committee regional imbalance 2013", "महाराष्ट्राची अर्थव्यवस्था", "आर्थिक पाहणी अहवाल महाराष्ट्र", "GSDP दरडोई उत्पन्न", "सहकारी चळवळ महाराष्ट्र", "विठ्ठलराव विखे पाटील", "विजय केळकर समिती प्रादेशिक असमतोल"],
          topics: [
            {
              id: "top_gb_e14_01",
              nameMr: "महाराष्ट्र GSDP, क्षेत्रांचा वाटा, सहकारी संस्था आणि प्रादेशिक असमतोल",
              nameEn: "State GSDP, Sectoral Dynamics, Cooperative Empire & Regional Parity",
              subtopics: [
                {
                  id: "st_gb_e14_01_01",
                  titleMr: "महाराष्ट्राचा आर्थिक पाहणी अहवाल (Economic Survey): स्थूल राज्य देशांतर्गत उत्पादन (GSDP) मध्ये देशात प्रथम क्रमांक; क्षेत्रांची टक्केवारी: सेवा क्षेत्र (Services ~६०% सर्वाधिक वाटा), उद्योग क्षेत्र (Industry ~२६-२८%), कृषी व संलग्न क्षेत्र (Agriculture ~१२-१४%); महाराष्ट्राचे दरडोई उत्पन्न राष्ट्रीय सरासरीपेक्षा जास्त",
                  titleEn: "Maharashtra Economic Survey Profile: GSDP ranks 1st in India; Sectoral Share: Services (~60%), Industry (~26-28%), Agriculture (~12-14%); Per Capita Income higher than national average",
                  chips: ["GSDP मध्ये देशात प्रथम", "सेवा क्षेत्र (~६०% वाटा)", "उद्योग क्षेत्र (~२६%)", "कृषी क्षेत्र (~१२%)", "उच्च दरडोई उत्पन्न"]
                },
                {
                  id: "st_gb_e14_01_02",
                  titleMr: "महाराष्ट्रातील सहकारी चळवळ (Cooperative Movement): सहकाराची पंढरी; महाराष्ट्र सहकारी संस्था कायदा १९६० (१ मे १९६१ रोजी लागू); त्रिस्तरीय सहकारी पतसंस्था रचना: १) प्राथमिक कृषी पतसंस्था (PACS - गाव पातळी), २) जिल्हा मध्यवर्ती सहकारी बँका (DCCB - जिल्हा पातळी), ३) महाराष्ट्र राज्य सहकारी बँक (MSCB - शिखर बँक राज्य पातळी)",
                  titleEn: "Cooperative Movement in Maharashtra: Maharashtra Cooperative Societies Act 1960 (Enacted 1 May 1961); 3-tier Credit: PACS (Village), DCCB (District), MSCB (State Apex Bank)",
                  chips: ["सहकारी संस्था कायदा १९६०", "त्रिस्तरीय पतसंस्था रचना", "PACS गाव पातळी", "DCCB जिल्हा बँक", "MSCB शिखर बँक"]
                },
                {
                  id: "st_gb_e14_01_03",
                  titleMr: "कृषी प्रक्रिया व दुग्ध सहकारी संस्था: प्रवरानगर (लोणी) येथे देशातील पहिला सहकारी साखर कारखाना (विठ्ठलराव विखे पाटील व धनंजयराव गाडगीळ); वैकुंठभाई मेहता (सहकाराचे प्रणेते); गोकुळ (कोल्हापूर) व वारणा दुग्ध सहकारी संस्था; शेतीमालाची खरेदी-विक्री व सूतगिरण्या",
                  titleEn: "Agro-Processing Cooperatives: Pravaranagar 1st cooperative sugar mill (Vikhe Patil & Gadgil); Vaikunthbhai Mehta; Gokul & Warana Dairy Cooperatives; Cooperative Spinning Mills",
                  chips: ["प्रवरानगर साखर कारखाना", "वैकुंठभाई मेहता", "गोकुळ दूध संघ", "सहकारी सूतगिरण्या"]
                },
                {
                  id: "st_gb_e14_01_04",
                  titleMr: "प्रादेशिक असमतोल व डॉ. विजय केळकर समिती (२०१३): विदर्भ, मराठवाडा व उर्वरित महाराष्ट्र यांमधील विकासाची तफावत दूर करण्यासाठी अभ्यास; शिफारशी: निधी वाटपासाठी जलसिंचन व मानवी विकास निर्देशांकाचा (HDI) आधार, निधीच्या वितरणात मंत्रालयीन हस्तक्षेप कमी करणे व सिंचन अनुशेष भरून काढणे",
                  titleEn: "Regional Imbalance & Dr. Vijay Kelkar Committee (2013): Studied Vidarbha/Marathwada backlog; Recommended fund allocation linked to Human Development Index and irrigation deficit elimination",
                  chips: ["डॉ विजय केळकर समिती २०१३", "प्रादेशिक असमतोल", "विदर्भ-मराठवाडा अनुशेष", "HDI आधारित निधी वाटप"]
                }
              ],
              sources: [
                { book: "महाराष्ट्राचा आर्थिक पाहणी अहवाल", standard: "अर्थ व सांख्यिकी संचालनालय, महाराष्ट्र शासन", chapterRef: "राज्याची अर्थव्यवस्था व सहकार" },
                { book: "भारतीय अर्थव्यवस्था", standard: "किरण देसले", chapterRef: "प्रकरण १४: महाराष्ट्राची अर्थव्यवस्था" }
              ]
            }
          ]
        },
        {
          id: "gb_eco_c15",
          code: "E15",
          section: "F",
          slug: "money-market-and-capital-market-in-india-sebi",
          nameMr: "नाणेबाजार, भांडवल बाजार आणि सेबी (SEBI) नियमन",
          nameEn: "Indian Financial Markets: Money Market, Capital Market & SEBI Regulation",
          name: "नाणेबाजार व भांडवल बाजार (Money & Capital Markets)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_eco_c15",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_eco_c14",
          nextChapterId: "gb_eco_c16",
          metaDescriptionMr: "नाणेबाजार (अल्पमुदत - Call Money, Treasury Bills, Commercial Papers, RBI नियमन) विरुद्ध भांडवल बाजार (दीर्घमुदत - शेअर्स, डिबेंचर्स, बॉन्ड्स), BSE, NSE, आणि सेबी (SEBI १९९२ कायदा).",
          metaDescriptionEn: "In-depth review of Financial Markets: Money Market instruments (Call Money, T-Bills 91/182/364 days, Commercial Paper, Certificates of Deposit, RBI regulation) vs Capital Market (Shares, Debentures, BSE 1875, NSE 1992), and SEBI Act 1992.",
          notesJsonPath: "/data/notes/group_b/prelims/economics/c15_financial_markets.json",
          quizTag: "gb_eco_markets_01",
          tags: ["Financial Markets", "Money Market RBI", "Capital Market SEBI", "Treasury Bills", "BSE Sensex", "NSE Nifty", "High-Weightage"],
          searchKeywords: ["indian money market instruments", "treasury bills t bills 91 182 364 days", "call money notice money term money", "capital market primary secondary", "bombay stock exchange bse 1875 sensex", "sebi act 1992 statutory powers", "नाणेबाजार अल्पमुदत", "ट्रेझरी बिल्स T-Bills", "कॉल मनी", "भांडवल बाजार", "BSE मुंबई शेअर बाजार १८७५", "सेबी SEBI कायदा १९९२"],
          topics: [
            {
              id: "top_gb_e15_01",
              nameMr: "नाणेबाजार साधने, शेअर बाजार, रोखे व सेबीची नियामक भूमिका",
              nameEn: "Short-Term Money Instruments, Stock Exchanges & Capital Market Regulation",
              subtopics: [
                {
                  id: "st_gb_e15_01_01",
                  titleMr: "नाणेबाजार (Money Market): १ वर्षापेक्षा कमी कालावधीसाठी अल्पमुदतीच्या कर्जांची देवाणघेवाण; नियामक: रिझर्व्ह बँक (RBI); साधने: १) कॉल मनी (Call Money - १ दिवसासाठी कर्ज), २) नोटीस मनी (२ ते १४ दिवस), ३) टर्म मनी (१४ दिवसांपेक्षा जास्त); ४) ट्रेझरी बिल्स (T-Bills - केंद्र सरकारचे कर्जरोखे, ९१, १८२ व ३६४ दिवस मुदत); ५) व्यावसायिक पत्रे (Commercial Papers - CP); ६) ठेव प्रमाणपत्रे (CD)",
                  titleEn: "Money Market: Short-term funds (<1 year); Regulated by RBI; Instruments: Call Money (1 day), Notice Money (2-14 days), Term Money, Treasury Bills (91, 182, 364 days issued by RBI for GoI), Commercial Paper, CD",
                  chips: ["नाणेबाजार (RBI नियमन)", "कॉल मनी (१ दिवस)", "ट्रेझरी बिल्स (९१/१८२/३६४ दिवस)", "कमर्शिअल पेपर (CP)"]
                },
                {
                  id: "st_gb_e15_01_02",
                  titleMr: "भांडवल बाजार (Capital Market): १ वर्षापेक्षा जास्त कालावधीसाठी मध्यम व दीर्घमुदतीचे भांडवल उभारणे; दोन भाग: १) प्राथमिक बाजार (Primary Market - IPO द्वारे नवीन रोखे जारी करणे), २) दुय्यम बाजार (Secondary Market - विद्यमान शेअर्सची खरेदी-विक्री / शेअर बाजार); साधने: समभाग (Equity Shares), डिबेंचर्स, सरकारी रोखे (G-Secs)",
                  titleEn: "Capital Market: Long-term funds (>1 year); Primary Market (IPOs) & Secondary Market (Stock Exchanges); Instruments: Equity Shares, Debentures, Government Securities (G-Secs / Gilt-Edged)",
                  chips: ["भांडवल बाजार (दीर्घमुदत)", "प्राथमिक बाजार (IPO)", "दुय्यम बाजार (शेअर मार्केट)", "सरकारी रोखे (G-Sec)"]
                },
                {
                  id: "st_gb_e15_01_03",
                  titleMr: "भारतातील प्रमुख शेअर बाजार: १) बॉम्बे स्टॉक एक्सचेंज (BSE - मुंबई: १८७५ मध्ये प्रेमचंद रॉयचंद यांनी स्थापना - आशियातील सर्वात जुना शेअर बाजार, निर्देशांक: सेन्सेक्स / SENSEX ३० मोठ्या कंपन्या); २) नॅशनल स्टॉक एक्सचेंज (NSE - फेरवाणी समितीच्या शिफारशीने १९९२ मध्ये स्थापना, निर्देशांक: निफ्टी / NIFTY ५० कंपन्या)",
                  titleEn: "Major Stock Exchanges: Bombay Stock Exchange (BSE, est. 1875, Asia's oldest, Index: SENSEX of 30 firms) & National Stock Exchange (NSE, est. 1992 via Pherwani panel, Index: NIFTY of 50 firms)",
                  chips: ["BSE मुंबई (१८७५ आशियात जुना)", "सेन्सेक्स (SENSEX ३० कंपन्या)", "NSE निफ्टी (NIFTY ५० कंपन्या)", "फेरवाणी समिती"]
                },
                {
                  id: "st_gb_e15_01_04",
                  titleMr: "भारतीय प्रतिभूती आणि विनिमय मंडळ (SEBI): स्थापना १२ एप्रिल १९८८; SEBI कायदा १९९२ द्वारे वैधानिक दर्जा; मुख्यालय: मुंबई; भांडवल बाजाराचे नियमन, गुंतवणूकदारांच्या हिताचे रक्षण करणे, इनसायडर ट्रेडिंगला (Insider Trading) आळा घालणे",
                  titleEn: "Securities and Exchange Board of India (SEBI): Set up 1988, Statutory status via SEBI Act 1992; HQ Mumbai; Regulates capital markets, protects investors, prohibits insider trading",
                  chips: ["सेबी (SEBI कायदा १९९२)", "मुख्यालय मुंबई", "भांडवल बाजार नियामक", "इनसायडर ट्रेडिंग बंदी"]
                }
              ],
              sources: [
                { book: "भारतीय अर्थव्यवस्था (भाग १)", standard: "रंजन कोळंबे", chapterRef: "प्रकरण १३: भारतीय वित्तीय बाजार" },
                { book: "भारतीय अर्थव्यवस्था", standard: "किरण देसले", chapterRef: "प्रकरण १५: नाणेबाजार व भांडवल बाजार" }
              ]
            }
          ]
        },
        {
          id: "gb_eco_c16",
          code: "E16",
          section: "F",
          slug: "economics-master-revision-schemes-terms-and-pyq-trends",
          nameMr: "अर्थव्यवस्था मास्टर रिव्हिजन: आर्थिक संकल्पना, योजनांची कालरेषा व PYQ विश्लेषण",
          nameEn: "Economics Master Revision: Economic Glossary, Schemes Timeline & PYQ Trends",
          name: "अर्थव्यवस्था मास्टर रिव्हिजन (Master Revision: Terms & Schemes)",
          category: "REVISION",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_eco_c16",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_eco_c15",
          nextChapterId: null,
          metaDescriptionMr: "महत्त्वाच्या आर्थिक संकल्पनांची सूत्रे (GDP, CAD, Fiscal Deficit, CRR, Repo), ऐतिहासिक योजनांची कालरेषा (१९५० ते २०२६), आणि MPSC पूर्व परीक्षेतील १० वर्षांचे PYQ विश्लेषण.",
          metaDescriptionEn: "Master consolidation module: Core economic formula sheet (GDP, CAD, Fiscal Deficit, Monetary ratios), chronological timeline of economic schemes, recurring MPSC trends, and option elimination heuristics.",
          notesJsonPath: "/data/notes/group_b/prelims/economics/c16_master_revision.json",
          quizTag: "gb_eco_revision_01",
          tags: ["Revision", "Formula Sheet", "Schemes Timeline", "Economic Terms Glossary", "PYQ Analysis", "Elimination Heuristics", "High-Yield"],
          searchKeywords: ["economics formulas gdp fiscal deficit", "economic schemes chronology 1950 to 2026", "mpsc prelims economics pyq trends", "elimination techniques economics", "अर्थव्यवस्था सूत्रे तक्ता", "योजना कालरेषा", "मास्टर रिव्हिजन", "PYQ विश्लेषण"],
          topics: [
            {
              id: "top_gb_e16_01",
              nameMr: "आर्थिक सूत्रे, ऐतिहासिक योजनांची कालरेषा आणि परीक्षाभिमुख ट्रिक्स",
              nameEn: "Formula Concordance, Chronological Schemes Matrix & Exam Elimination Rules",
              subtopics: [
                {
                  id: "st_gb_e16_01_01",
                  titleMr: "अति-महत्त्वाच्या आर्थिक सूत्रांची मास्टर सूची: १) GDP = C + I + G + (X - M); २) GNP = GDP + NFIA; ३) NNP = GNP - घसारा; ४) वित्तीय तूट = एकूण खर्च - एकूण जमा (कर्जे वगळून); ५) प्राथमिक तूट = वित्तीय तूट - व्याज भरणा; ६) GDP डिफ्लेटर = (Nominal GDP / Real GDP) * १००",
                  titleEn: "Master Formula Sheet: GDP = C+I+G+NX, GNP = GDP + NFIA, NNP = GNP - Depreciation, Fiscal Deficit = Total Exp - Non-debt receipts, Primary Deficit = Fiscal Deficit - Interest",
                  chips: ["सर्व आर्थिक सूत्रे", "GDP व GNP सूत्र", "वित्तीय व प्राथमिक तूट", "GDP डिफ्लेटर"]
                },
                {
                  id: "st_gb_e16_01_02",
                  titleMr: "प्रमुख आर्थिक योजनांची कालरेषा (Chronology of Landmark Schemes): १) रोहयो महाराष्ट्र (१९७२), २) IRDP (१९७८/१९८०), ३) नाबार्ड (१९८२), ४) ट्रायसेम (१९७९), ५) SEBI (१९८८/१९९२), ६) LPG धोरण (१९९१), ७) सर्व शिक्षा अभियान (२००१), ८) FRBM कायदा (२००३), ९) मनरेगा (MGNREGA २००५), १०) NFSA अन्न सुरक्षा (२०१३), ११) जनधन योजना (२०१४), १२) नीती आयोग व MUDRA (२०१५), १३) GST (२०१७)",
                  titleEn: "Chronological Timeline of Landmark Schemes: EGS (1972), IRDP (1980), NABARD (1982), SEBI (1992), LPG (1991), SSA (2001), FRBM (2003), MGNREGA (2005), NFSA (2013), PMJDY (2014), NITI & MUDRA (2015), GST (2017)",
                  chips: ["योजना कालरेषा", "रोहयो १९७२", "नाबार्ड १९८२", "LPG १९९१", "मनरेगा २००५", "GST २०१७"]
                },
                {
                  id: "st_gb_e16_01_03",
                  titleMr: "MPSC संयुक्त पूर्व परीक्षा अर्थशास्त्र PYQ कल व एलिमिनेशन तंत्र: मागील १० वर्षांत विचारलेले प्रश्न; बँकिंग, दारिद्र्य मोजमाप समित्या, योजनांची उद्दिष्टे व अर्थसंकल्पातील तुटी या घटकांवरील प्रश्नांचे अचूक विश्लेषण; सांख्यिकी व डेटा आधारित पर्यायांची पडताळणी",
                  titleEn: "MPSC Prelims Economics Trend Analysis: Recurring Question Patterns (Banking tools, Tendulkar/Rangarajan lines, Planning models, Budget deficits) & Data-driven elimination tactics",
                  chips: ["PYQ ट्रेंड विश्लेषण", "एलिमिनेशन पद्धत", "दारिद्र्य हमखास प्रश्न", "१० वर्षांचे विश्लेषण"]
                }
              ],
              sources: [
                { book: "भारतीय अर्थव्यवस्था", standard: "रंजन कोळंबे व किरण देसले", chapterRef: "मास्टर तक्ते, संकल्पना व सांख्यिकी" },
                { book: "MPSC मागील वर्षांच्या प्रश्नपत्रिका (PYQ संच)", standard: "२०१३ ते २०२५", chapterRef: "अर्थव्यवस्था प्रश्न संच व विश्लेषण" }
              ]
            }
          ]
        }
      ]
    },


    {
      id: "gb_pre_science",
      code: "SCI",
      slug: "general-science-physics-chemistry-biology-health",
      nameMr: "सामान्य विज्ञान (भौतिकशास्त्र, रसायनशास्त्र, जीवशास्त्र व आरोग्यशास्त्र)",
      nameEn: "General Science (Physics, Chemistry, Biology & Hygiene)",
      name: "सामान्य विज्ञान (General Science)",
      officialScope: "Physics (Sound, Light, Electricity, Mechanics), Chemistry (Atomic Structure, Periodic Table, Acids & Bases, Chemical Reactions), Botany (Classification, Photosynthesis), Zoology (Animal Kingdom, Cell Biology), and Human Physiology & Hygiene (Human Systems, Diseases, Nutrition)",
      version: "1.0",
      verifiedDate: "2026-10-28",
      notesJsonBaseDir: "/data/notes/group_b/prelims/science/",


      // UI Theme & Theming Metadata
      theme: {
        primaryColor: "#0284c7",        // Sky Blue / Laboratory Science Theme
        bgColor: "#f0f9ff",
        iconClass: "ri-flask-line"
      },


      // अभ्यास व डॅशबोर्ड ॲनालिटिक्स मेट्रिक्स
      metrics: {
        totalChapters: 18,
        totalEstimatedHours: 64,
        avgQuestionsInPrelims: 15,
        targetMarks: 15,
        weightageRange: "14-16 Questions"
      },


      // विषय पातळीवरील स्मार्ट टॅग्ज
      subjectTags: [
        "Core-GS",
        "Group-B-Prelims",
        "Paper-1-GS",
        "Pre-Cum-Mains",
        "High-Weightage",
        "Conceptual-Factual",
        "NCERT-State-Board-Dominant"
      ],


      filterCategory: "GS",
      searchKeywords: [
        "mpsc group b general science", "physics sound light electricity motion", "chemistry periodic table acids bases",
        "botany plant classification cryptogams phanerogams", "zoology animal kingdom classification five kingdoms whittaker",
        "human physiology circulatory nervous digestive diseases vitamins",
        "सामान्य विज्ञान", "भौतिकशास्त्र ध्वनी प्रकाश विद्युत", "रसायनशास्त्र आवर्तसारणी आम्ल आम्लारी", "वनस्पती वर्गीकरण", "प्राणी वर्गीकरण व्हिटाकर", "मानवी संस्था व रोग जीवनसत्त्वे"
      ],


      referenceSources: [
        {
          name: "MPSC Non-Gazetted Group B Combined Syllabus",
          role: "अधिकृत परीक्षा-संदर्भ",
          url: "https://mpsc.gov.in"
        },
        {
          name: "सामान्य विज्ञान प्रबोधिनी - डॉ. सचिन भस्के",
          role: "MPSC स्पर्धा परीक्षांसाठी अधिकृत व सर्वसमावेशक संदर्भ"
        },
        {
          name: "महाराष्ट्र राज्य पाठ्यपुस्तक निर्मिती मंडळ (Balbharati)",
          role: "इयत्ता ८ वी, ९ वी, १० वी, ११ वी व १२ वी विज्ञान पाठ्यपुस्तके",
          url: "https://balbharati.co.in/EHome.php"
        },
        {
          name: "NCERT Science Textbooks (Classes 8 to 12)",
          role: "संकल्पनात्मक स्पष्टता व राष्ट्रीय परीक्षा मानके"
        },
        {
          name: "Lucent's General Science",
          role: "तथ्यात्मक वस्तुनिष्ठ संदर्भ व सूत्रे"
        }
      ],


      chapters: [
        // =========================================================================
        // विभाग A — भौतिकशास्त्र (Physics)
        // =========================================================================
        {
          id: "gb_sci_c01",
          code: "S01",
          section: "A",
          slug: "physics-sound-waves-and-acoustics",
          nameMr: "ध्वनी (Sound): तरंग गती, वारंवारता, प्रतिध्वनी व मानवी कान",
          nameEn: "Physics: Sound Waves, Propagation, Doppler Effect & Acoustics",
          name: "ध्वनी व तरंग (Sound & Wave Optics)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_sci_c01",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: null,
          nextChapterId: "gb_sci_c02",
          metaDescriptionMr: "अनुतरंग व अवतरंग, ध्वनीचा हवेतील, पाण्यात व स्थायूतील वेग, श्राव्य/अवश्राव्य/श्राव्यातीत ध्वनी (SONAR), प्रतिध्वनी (किमान १७.२ मी अंतर), आणि डॉप्लरचा परिणाम.",
          metaDescriptionEn: "In-depth review of Sound Waves: Longitudinal vs Transverse, Velocity factors (medium, temp, humidity), Audibility range (20Hz-20kHz), Ultrasound & SONAR, Echo (17.2m rule), and Doppler Effect.",
          notesJsonPath: "/data/notes/group_b/prelims/science/c01_physics_sound.json",
          quizTag: "gb_sci_sound_01",
          tags: ["Physics", "Sound Waves", "Ultrasound SONAR", "Echo 17.2m", "Doppler Effect", "Acoustics", "High-Weightage"],
          searchKeywords: ["physics sound waves", "longitudinal transverse waves velocity", "audible ultrasonic infrasonic frequencies", "sonar ultrasound applications", "echo minimum distance 17.2 meters", "doppler effect sound", "ध्वनी तरंग", "अनुतरंग अवतरंग", "श्राव्यातीत ध्वनी सोनार", "प्रतिध्वनी १७.२ मीटर", "डॉप्लर परिणाम"],
          topics: [
            {
              id: "top_gb_s01_01",
              nameMr: "ध्वनी निर्मिती, प्रसारण, वारंवारता कक्षा आणि अनुप्रयोगात्मक भौतिकी",
              nameEn: "Acoustic Dynamics, Velocity Formulations, Frequency Spectra & Applications",
              subtopics: [
                {
                  id: "st_gb_s01_01_01",
                  titleMr: "तरंग गती व प्रकार: १) अनुतरंग (Longitudinal Waves - संपीडन Compression व विरलन Rarefaction; माध्यमाचे कण तरंगांच्या दिशेने कंप पावतात; उदा. ध्वनी तरंग); २) अवतरंग (Transverse Waves - शिखरे Crest व द्रोणी Trough; माध्यमाचे कण लंबरूप कंप पावतात; उदा. प्रकाशाचे तरंग); ध्वनी लहरी या यांत्रिक अनुतरंग असतात ज्यांना प्रसारणासाठी भौतिक माध्यमाची गरज असते (निर्वातात ध्वनी प्रवास करू शकत नाही)",
                  titleEn: "Wave Mechanics: Longitudinal (Compressions & Rarefactions; e.g., Sound) vs Transverse (Crests & Troughs; e.g., Light); Sound requires a material medium (Cannot travel in vacuum)",
                  chips: ["अनुतरंग (Longitudinal)", "अवतरंग (Transverse)", "संपीडन व विरलन", "निर्वातात ध्वनी प्रवास नाही"]
                },
                {
                  id: "st_gb_s01_01_02",
                  titleMr: "ध्वनीचा वेग व त्यावर परिणाम करणारे घटक: वेग सूत्र: v = f * λ (वेग = वारंवारता × तरंगलांबी); माध्यमाची घनता व प्रत्यास्थता (Elasticity): वेग स्थायूमध्ये सर्वाधिक > द्रवामध्ये > वायूमध्ये सर्वात कमी (लोखंड ५९५० मी/से, पाणी १४९८ मी/से, हवा ३४३ मी/से ०°C वर ३३२ मी/से); तापमान वाढल्यास ध्वनीचा वेग वाढतो (दर १°C वाढीस ०.६१ मी/से वाढ); हवेतील आर्द्रता वाढल्यास वेग वाढतो; दाबाचा वेगावर कोणताही परिणाम होत नाही",
                  titleEn: "Sound Velocity & Environmental Factors: v = f * lambda; Velocity sequence: Solids > Liquids > Gases (Steel 5950 m/s > Water 1498 m/s > Air 343 m/s); Increases by 0.61 m/s per 1 deg C rise; Independent of Pressure",
                  chips: ["v = f * lambda", "स्थायू > द्रव > वायू", "०.६१ मी/से तापमान परिणाम", "आर्द्रता परिणाम", "दाबाचा परिणाम नाही"]
                },
                {
                  id: "st_gb_s01_01_03",
                  titleMr: "वारंवारता (Frequency) व श्राव्यता कक्षा: १) श्राव्य ध्वनी (Audible Sound: २० हर्ट्झ ते २०,००० हर्ट्झ / २० kHz - मानवी कानाची क्षमता); २) अवश्राव्य ध्वनी (Infrasonic Sound: २० हर्ट्झ पेक्षा कमी - व्हेल मासे, हत्ती, गेंडा, भूकंप लहरी); ३) श्राव्यातीत ध्वनी (Ultrasonic Sound: २०,००० हर्ट्झ पेक्षा जास्त - वटवाघूळ, डॉल्फिन, कुत्रे); सोनोग्राफी, खडक व धातूतील भेगा शोधण्यासाठी वापर",
                  titleEn: "Audibility Spectrum: Audible (20 Hz - 20 kHz); Infrasonic (<20 Hz: Whales, Elephants, Earthquakes); Ultrasonic (>20 kHz: Bats, Dolphins, Sonography medical imaging, crack detection)",
                  chips: ["श्राव्य ध्वनी (२० Hz ते २० kHz)", "अवश्राव्य (<२० Hz)", "श्राव्यातीत (>२० kHz)", "सोनोग्राफी वापर"]
                },
                {
                  id: "st_gb_s01_01_04",
                  titleMr: "प्रतिध्वनी (Echo) व निनाद (Reverberation): प्रतिध्वनी स्पष्ट ऐकू येण्यासाठी मूळ ध्वनी व परावर्तित ध्वनी यांच्यात किमान ०.१ सेकंदाचा कालावधी असावा; २५°C वर हवेतील किमान अंतर १७.२ मीटर (०°C वर १६.६ मीटर); निनाद: बंद सभागृहात भिंतीवरून वारंवार होणाऱ्या परावर्तनामुळे ध्वनी रेंगाळणे (निवारणासाठी सच्छिद्र बोर्ड्स, पडदे वापरतात)",
                  titleEn: "Echo & Reverberation: Echo requires 0.1s persistence of hearing; Minimum reflection distance is 17.2m at 25C (16.6m at 0C); Reverberation control via sound-absorbent acoustic tiles/curtains",
                  chips: ["प्रतिध्वनी (किमान १७.२ मीटर अंतर)", "०.१ सेकंद कालावधी", "निनाद (Reverberation)", "अकॉस्टिक्स"]
                },
                {
                  id: "st_gb_s01_01_05",
                  titleMr: "सोनार (SONAR - Sound Navigation and Ranging) आणि डॉप्लर परिणाम: SONAR: समुद्राची खोली, बुडालेली जहाजे व पाणबुड्या शोधण्यासाठी अल्ट्रासोनिक लहरींचा वापर (अंतर = v * t / २); डॉप्लरचा परिणाम (Doppler Effect): ध्वनीचा स्रोत आणि श्रोता यांच्यातील सापेक्ष गतीमुळे ध्वनीच्या वारंवारतेत होणारा भासमान बदल (उदा. जवळ येणाऱ्या गाडीची शिट्टी जास्त तीक्ष्ण ऐकू येणे)",
                  titleEn: "SONAR & Doppler Effect: SONAR uses ultrasonic echo to measure ocean depth/submarines (d = v*t/2); Doppler Effect: Apparent shift in frequency due to relative motion between source and observer",
                  chips: ["SONAR प्रणाली", "अल्ट्रासोनिक लहरी", "डॉप्लर परिणाम (Doppler Effect)", "भासमान वारंवारता"]
                }
              ],
              sources: [
                { book: "सामान्य विज्ञान प्रबोधिनी", standard: "डॉ. सचिन भस्के", chapterRef: "भौतिकशास्त्र: ध्वनी" },
                { book: "बालभारती विज्ञान", standard: "इयत्ता ९ वी", chapterRef: "प्रकरण १२: ध्वनीचा अभ्यास" }
              ]
            }
          ]
        },
        {
          id: "gb_sci_c02",
          code: "S02",
          section: "A",
          slug: "physics-light-reflection-refraction-and-human-eye",
          nameMr: "प्रकाश (Light): परावर्तन, अपवर्तन, भिंगे व मानवी डोळ्यातील दोष",
          nameEn: "Physics: Optics, Reflection, Refraction, Lenses & Human Eye Vision Defects",
          name: "प्रकाश व प्रकाशकीय उपकरणे (Optics & Human Eye)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 5,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_sci_c02",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_sci_c01",
          nextChapterId: "gb_sci_c03",
          metaDescriptionMr: "प्रकाशाचे परावर्तन, अपवर्तन (स्नेलचा नियम), पूर्ण अंतर्गत परावर्तन (मृगजळ, ऑप्टिकल फायबर), अंतर्गोल व बहिर्गोल आरसे/भिंगे, मानवी डोळा, आणि दृष्टीदोष (मायोपिया, हायपरमेट्रोपिया).",
          metaDescriptionEn: "In-depth review of Optics: Reflection, Refraction (Snell's Law), Total Internal Reflection (Mirage, Endoscopy, OFC), Concave/Convex Mirrors & Lenses, Power of Lens (Dioptre), and Eye Defects (Myopia, Hypermetropia, Presbyopia).",
          notesJsonPath: "/data/notes/group_b/prelims/science/c02_physics_optics.json",
          quizTag: "gb_sci_optics_01",
          tags: ["Physics", "Optics", "Refraction Snells Law", "Total Internal Reflection", "Lenses & Mirrors", "Myopia Hypermetropia", "High-Weightage"],
          searchKeywords: ["physics optics light", "refraction snells law refractive index", "total internal reflection optical fibre mirage", "concave mirror convex lens image formation", "power of lens dioptre", "myopia hypermetropia presbyopia astigmatism", "प्रकाश अपवर्तन स्नेलचा नियम", "पूर्ण अंतर्गत परावर्तन", "ऑप्टिकल फायबर", "अंतर्गोल आरसा बहिर्गोल भिंग", "दृष्टीदोष निकटदृष्टिता दूरदृष्टिता"],
          topics: [
            {
              id: "top_gb_s02_01",
              nameMr: "प्रकाश परावर्तन, अपवर्तन, पूर्ण अंतर्गत परावर्तन व दृष्टीदोष निवारण",
              nameEn: "Reflection, Refraction Phenomena, Total Internal Reflection & Vision Correction",
              subtopics: [
                {
                  id: "st_gb_s02_01_01",
                  titleMr: "प्रकाशाचे स्वरूप व परावर्तन: विद्युतचुंबकीय अनुप्रस्थ तरंग (Transverse Waves); निर्वात पोकळीतील वेग ३ × १०⁸ मी/से (सर्वाधिक); आरशांचे प्रकार: १) समतल आरसा (प्रतिमा आभासी, सुलटी, पार्श्व परावर्तित, आरशाच्या मागे तेवढ्याच अंतरावर); २) अंतर्गोल आरसा (अभिसारी Concave - दाढी करण्याचा आरसा, वाहनांचे हेडलाईट, दंतवैद्याचा आरसा); ३) बहिर्गोल आरसा (अपसारी Convex - वाहनांचा साइड मिरर - नेहमी आभासी, सुलटी व लहान प्रतिमा)",
                  titleEn: "Nature & Reflection: EM Transverse Waves; Speed 3x10^8 m/s in vacuum; Plane Mirrors; Concave Mirror (Shaving, Headlights, Dentists); Convex Mirror (Rear-view mirror - erect, virtual, diminished image)",
                  chips: ["३ × १०^८ मी/से वेग", "समतल आरसा", "अंतर्गोल आरसा (दंतवैद्य)", "बहिर्गोल आरसा (वाहनाचा साइड मिरर)"]
                },
                {
                  id: "st_gb_s02_01_02",
                  titleMr: "प्रकाशाचे अपवर्तन (Refraction of Light): एका पारदर्शक माध्यमातून दुसऱ्या माध्यमात जाताना प्रकाशाची दिशा बदलणे; नियम (स्नेलचा नियम: sin i / sin r = स्थिरांक / अपवर्तनांक n); विरल माध्यमातून दाट माध्यमात जाताना स्तंभिकेकडे झुकतो व वेग मंदावतो; दाट ते विरल जाताना स्तंभिकेपासून दूर झुकतो; ताऱ्यांचे लुकलुकणे (Atmospheric Refraction) व पाण्याच्या ग्लासातील पेन्सिल वाकडी दिसणे",
                  titleEn: "Refraction & Snell's Law: Bending of light across media (sin i / sin r = n); Rarer to denser bends towards normal; Denser to rarer bends away; Atmospheric twinkling of stars, bent stick in water",
                  chips: ["अपवर्तन (Refraction)", "स्नेलचा नियम (Snell's Law)", "अपवर्तनांक (Refractive Index)", "ताऱ्यांचे लुकलुकणे"]
                },
                {
                  id: "st_gb_s02_01_03",
                  titleMr: "पूर्ण अंतर्गत परावर्तन (Total Internal Reflection - TIR): प्रकाश दाट माध्यमातून विरल माध्यमात जाताना आपाती कोन (i) क्रांतिक कोनापेक्षा (Critical Angle c) मोठा झाल्यास संपूर्ण प्रकाश त्याच माध्यमात परावर्तित होतो; उदाहरणे: हिऱ्याचे चकाकणे, वाळवंटातील मृगजळ (Mirage), ऑप्टिकल फायबर केबल (OFC - दूरसंचार), एंडोस्कोपी वैद्यकीय तपासणी",
                  titleEn: "Total Internal Reflection (TIR): Occurs from denser to rarer medium when angle of incidence > Critical Angle; Sparkling of diamond, Mirage in desert, Optical Fibre Cables (OFC), Endoscopy",
                  chips: ["पूर्ण अंतर्गत परावर्तन (TIR)", "क्रांतिक कोन (Critical Angle)", "ऑप्टिकल फायबर (OFC)", "मृगजळ (Mirage)", "हिऱ्याचे चमकणे"]
                },
                {
                  id: "st_gb_s02_01_04",
                  titleMr: "भिंगे (Lenses) आणि भिंगाची शक्ती: १) बहिर्गोल भिंग (Convex Lens - अभिसारी भिंग, वास्तविक व उलट प्रतिमा, सूक्ष्मदर्शक व कॅमेऱ्यात वापर); २) अंतर्गोल भिंग (Concave Lens - अपसारी भिंग); भिंगाचे सूत्र: १/f = १/v - १/u; भिंगाची शक्ती (Power P = १/f मीटरमध्ये); शक्तीचे SI एकक: डायॉप्टर (Dioptre - D); बहिर्गोल भिंगाची शक्ती धन (+), अंतर्गोल भिंगाची शक्ती ऋण (-)",
                  titleEn: "Lenses & Dioptre Power: Convex (Converging, real inverted images) vs Concave (Diverging); Lens Formula 1/f = 1/v - 1/u; Power P = 1/f(meters); SI Unit Dioptre (D); Convex (+D), Concave (-D)",
                  chips: ["बहिर्गोल भिंग (अभिसारी)", "अंतर्गोल भिंग (अपसारी)", "भिंगाची शक्ती डायॉप्टर (Dioptre)", "P = १/f"]
                },
                {
                  id: "st_gb_s02_01_05",
                  titleMr: "मानवी डोळा आणि दृष्टीदोष (MPSC हमखास प्रश्न): १) निकटदृष्टिता (Myopia / Shortsightedness: जवळचे स्पष्ट दिसते, दूरचे अस्पष्ट; डोळ्याचा गोल लांबट होतो, प्रतिमा दृष्टिपटलाच्या (Retina) अलीकडे बनते; निवारण: योग्य अंतर्गोल भिंग वापरतात); २) दूरदृष्टिता (Hypermetropia: दूरचे स्पष्ट दिसते, जवळचे नाही; प्रतिमा रेटिनाच्या मागे बनते; निवारण: बहिर्गोल भिंग); ३) वृद्धदृष्टिता (Presbyopia - द्विकेंद्री भिंग Bifocal); ४) अबिंदुकता (Astigmatism - दंडगोलाकार भिंग)",
                  titleEn: "Human Eye & Vision Defects: Myopia (Nearsightedness - image in front of retina, corrected by Concave Lens); Hypermetropia (Farsightedness - image behind retina, corrected by Convex Lens); Presbyopia (Bifocal); Astigmatism (Cylindrical)",
                  chips: ["निकटदृष्टिता (Myopia - अंतर्गोल भिंग)", "दूरदृष्टिता (Hypermetropia - बहिर्गोल भिंग)", "वृद्धदृष्टिता (Bifocal)", "रेटिना (दृष्टिपटल)"]
                },
                {
                  id: "st_gb_s02_01_06",
                  titleMr: "प्रकाशाचे अपस्करण व विकिरण (Dispersion & Scattering): प्रिझममधून पांढरा प्रकाश तांबडा, नारंगी, पिवळा, हिरवा, निळा, पारवा, जांभळा (ता-ना-पी-हि-नी-पा-जा / VIBGYOR) रंगांत विभक्त होणे (अपस्करण); जांभळ्या रंगाचे विचलन सर्वाधिक, तांबड्या रंगाचे विचलन सर्वात कमी; रॅलेचे विकिरण: आकाशाचा निळा रंग, सूर्योदय व सूर्यास्तावेळी सूर्य तांबडा दिसणे (तांबड्या रंगाची तरंगलांबी सर्वाधिक असल्याने विकिरण सर्वात कमी)",
                  titleEn: "Dispersion & Scattering: VIBGYOR spectrum through prism; Violet deviates most, Red deviates least; Rayleigh Scattering (Sky blue, red sunrise/sunset due to longer wavelength of red)",
                  chips: ["अपस्करण (VIBGYOR)", "तांबडा रंग (कमी विचलन, लांब तरंग)", "जांभळा रंग (जास्त विचलन)", "आकाशाचा निळा रंग (विकिरण)"]
                }
              ],
              sources: [
                { book: "सामान्य विज्ञान प्रबोधिनी", standard: "डॉ. सचिन भस्के", chapterRef: "भौतिकशास्त्र: प्रकाश व दृष्टीदोष" },
                { book: "बालभारती विज्ञान", standard: "इयत्ता १० वी", chapterRef: "प्रकरण ७: भिंगे आणि त्यांचे उपयोग" }
              ]
            }
          ]
        },
        {
          id: "gb_sci_c03",
          code: "S03",
          section: "A",
          slug: "physics-current-electricity-magnetism-and-electromagnetism",
          nameMr: "विद्युतधारा, विभवांतर, रोध (ओहमचा नियम) आणि चुंबकत्व",
          nameEn: "Physics: Current Electricity, Ohm's Law, Resistance, Circuits & Magnetism",
          name: "विद्युतधारा व चुंबकत्व (Electricity & Magnetism)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 5,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_sci_c03",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_sci_c02",
          nextChapterId: "gb_sci_c04",
          metaDescriptionMr: "विद्युतधारा (अँपिअर), विभवांतर (व्होल्ट), ओहमचा नियम (V = IR), रोधांची एकसर व समांतर जोडणी, ज्युलचा उष्णतेचा नियम (H = I²Rt), विद्युत शक्ती (kWh), आणि फ्लेमिंगचे नियम.",
          metaDescriptionEn: "In-depth review of Current Electricity: Electric Potential, Ohm's Law (V = IR), Resistors in Series & Parallel, Joule's Heating Effect (H = I^2Rt), Electric Power & Units (1 kWh = 3.6x10^6 J), Fleming's Left & Right Hand Rules, and Electromagnetism.",
          notesJsonPath: "/data/notes/group_b/prelims/science/c03_physics_electricity.json",
          quizTag: "gb_sci_electricity_01",
          tags: ["Physics", "Current Electricity", "Ohms Law V=IR", "Resistors Series Parallel", "Joules Heating Law", "Flemings Rules", "High-Weightage"],
          searchKeywords: ["current electricity physics", "ohms law formula v ir", "resistance series parallel calculation", "joules law of heating h i2rt", "electric power commercial unit kwh", "flemings left hand right hand rule electric motor generator", "विद्युतधारा अँपिअर", "ओहमचा नियम", "रोधांची एकसर व समांतर जोडणी", "ज्युलचा उष्णता नियम", "१ युनिट वीज kWh", "फ्लेमिंगचा डाव्या व उजव्या हाताचा नियम"],
          topics: [
            {
              id: "top_gb_s03_01",
              nameMr: "विद्युत परिपथ, रोध, उष्णता निर्मिती आणि विद्युतचुंबकीय प्रवर्तन",
              nameEn: "Electric Circuits, Resistive Formulations, Joule Heating & Electromagnetic Induction",
              subtopics: [
                {
                  id: "st_gb_s03_01_01",
                  titleMr: "विद्युतधारा व विभवांतर: विद्युतधारा (Electric Current I = Q/t - प्रभार वाहण्याचा दर, SI एकक: अँपिअर / Ampere, ॲमीटरद्वारे मोजतात - एकसर जोडणी); विभवांतर (Potential Difference V = W/Q - कार्य भागिले प्रभार, SI एकक: व्होल्ट / Volt, व्होल्टमीटरद्वारे मोजतात - समांतर जोडणी)",
                  titleEn: "Current & Potential Difference: Current I = Q/t (Amperes, measured by Ammeter in series); Potential Difference V = W/Q (Volts, measured by Voltmeter in parallel)",
                  chips: ["विद्युतधारा I = Q/t (अँपिअर)", "विभवांतर V = W/Q (व्होल्ट)", "ॲमीटर (एकसर जोडणी)", "व्होल्टमीटर (समांतर जोडणी)"]
                },
                {
                  id: "st_gb_s03_01_02",
                  titleMr: "ओहमचा नियम (Ohm's Law) व रोध: भौतिक अवस्था कायम असताना वाहकामधून वाहणारी विद्युतधारा त्या वाहकाच्या दोन टोकांमधील विभवांतराशी समप्रमाणात असते: V ∝ I म्हणजेच V = I × R; रोधाचे एकक: ओहम (Ω); रोधकता (Resistivity ρ = R × A / L, एकक: ओहम-मीटर); वाहकाची लांबी वाढल्यास रोध वाढतो, जाडी (काटच्छेद) वाढल्यास रोध कमी होतो",
                  titleEn: "Ohm's Law & Resistance: V = I*R; Unit Ohm (Omega); Specific Resistance/Resistivity rho = R*A/L (Unit: Ohm-meter); Resistance directly proportional to length, inversely to area",
                  chips: ["ओहमचा नियम V = IR", "रोध (Ohm)", "रोधकता (Ohm-m)", "लांबी व जाडी परिणाम"]
                },
                {
                  id: "st_gb_s03_01_03",
                  titleMr: "रोधांची जोडणी (MPSC गणितीय प्रश्न): १) एकसर जोडणी (Series: Rs = R१ + R२ + R३ - परिणामी रोध वाढतो, प्रत्येक रोधकातून समान विद्युतधारा वाहते); २) समांतर जोडणी (Parallel: १/Rp = १/R१ + १/R२ + १/R३ - परिणामी रोध कमी होतो, प्रत्येक रोधकावर समान विभवांतर असते; घरातील विद्युत उपकरणे समांतर जोडणीत असतात)",
                  titleEn: "Resistors Combinations: Series (Rs = R1 + R2 + R3, Current identical, effective resistance increases) vs Parallel (1/Rp = 1/R1 + 1/R2 + 1/R3, Voltage identical, domestic wiring is parallel)",
                  chips: ["रोधांची एकसर जोडणी (Rs)", "रोधांची समांतर जोडणी (Rp)", "घरातील वायरिंग समांतर जोडणी"]
                },
                {
                  id: "st_gb_s03_01_04",
                  titleMr: "विद्युतधारेचा औष्णिक परिणाम: ज्युलचा नियम (H = I² × R × t); विद्युत शक्ती (Power P = V × I = I²R = V²/R, एकक: वॅट / Watt); व्यावसायिक एकक: १ किलोवॅट-तास (१ kWh = १ युनिट वीज = ३.६ × १०⁶ ज्युल्स); विद्युत इस्त्री, गिझर, हीटर व फ्युज वायर (कमी वितळण बिंदू - शिसे व कथिल मिश्रधातू)",
                  titleEn: "Joule's Heating Law (H = I^2*R*t) & Electric Power (P = V*I, Unit Watt); Commercial Unit: 1 kWh (1 Unit = 3.6x10^6 Joules); Safety Fuse (Low melting point lead-tin alloy)",
                  chips: ["ज्युलचा नियम H = I^२Rt", "विद्युत शक्ती P = VI (Watt)", "१ युनिट = ३.६ × १०^६ ज्युल्स", "फ्युज वायर (कमी वितळण बिंदू)"]
                },
                {
                  id: "st_gb_s03_01_05",
                  titleMr: "विद्युतचुंबकत्व आणि नियम: उजव्या हाताच्या अंगठ्याचा नियम (मॅक्सवेल); फ्लेमिंगचा डाव्या हाताचा नियम (Electric Motor - विद्युत ऊर्जेचे यांत्रिक ऊर्जेत रूपांतर); फ्लेमिंगचा उजव्या हाताचा नियम (Electric Generator - यांत्रिक ऊर्जेचे विद्युत ऊर्जेत रूपांतर); फॅराडेचे विद्युतचुंबकीय प्रवर्तनाचे नियम (Electromagnetic Induction)",
                  titleEn: "Electromagnetism: Right-Hand Thumb Rule (Magnetic Field); Fleming's Left-Hand Rule (Electric Motor: Electrical to Mechanical); Fleming's Right-Hand Rule (Generator: Mechanical to Electrical); Faraday's Induction",
                  chips: ["फ्लेमिंग डाव्या हाताचा नियम (मोटार)", "फ्लेमिंग उजव्या हाताचा नियम (जनरेटर)", "फॅराडेचा प्रवर्तन नियम", "विद्युतचुंबक"]
                }
              ],
              sources: [
                { book: "सामान्य विज्ञान प्रबोधिनी", standard: "डॉ. सचिन भस्के", chapterRef: "भौतिकशास्त्र: विद्युत व चुंबकत्व" },
                { book: "बालभारती विज्ञान", standard: "इयत्ता ९ वी व १० वी", chapterRef: "धाराविद्युत व विद्युतधारेचे परिणाम" }
              ]
            }
          ]
        },
        {
          id: "gb_sci_c04",
          code: "S04",
          section: "A",
          slug: "physics-motion-gravitation-work-and-energy",
          nameMr: "गती, न्यूटनचे नियम, गुरुत्वाकर्षण, कार्य, ऊर्जा व दाब",
          nameEn: "Physics: Mechanics, Newton's Laws of Motion, Gravitation, Work, Power & Pressure",
          name: "यांत्रिकी, गती व गुरुत्वाकर्षण (Mechanics, Motion & Gravitation)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 5,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_sci_c04",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_sci_c03",
          nextChapterId: "gb_sci_c05",
          metaDescriptionMr: "न्यूटनचे गतीविषयक ३ नियम, संवेग संवर्धन, वैश्विक गुरुत्वाकर्षण स्थिरांक (G), 'g' चे ध्रुवावर व विषुववृत्तावर मूल्य, मुक्ती वेग (Escape Velocity), कार्य (W = Fs cosθ), आणि आर्किमिडीजचे तत्त्व.",
          metaDescriptionEn: "In-depth review of Mechanics: Newton's 3 Laws of Motion, Momentum Conservation, Gravitation (G vs g values at poles & equator), Escape Velocity (11.2 km/s), Work (W = F*s*cos theta), Kinetic/Potential Energy, and Archimedes Principle.",
          notesJsonPath: "/data/notes/group_b/prelims/science/c04_physics_mechanics.json",
          quizTag: "gb_sci_mechanics_01",
          tags: ["Physics", "Mechanics", "Newtons Laws of Motion", "Gravitation g value", "Escape Velocity 11.2 km/s", "Work & Energy", "Archimedes Principle", "High-Weightage"],
          searchKeywords: ["newtons three laws of motion inertia f ma", "universal law of gravitation g value", "acceleration due to gravity g poles equator", "escape velocity earth 11.2 km per second", "work energy kinetic potential", "archimedes principle buoyant force pascals law", "न्यूटनचे गतीविषयक नियम", "जडत्व F=ma", "गुरुत्वीय त्वरण g चे मूल्य", "मुक्ती वेग ११.२ किमी/सेकंद", "कार्य व गतीज ऊर्जा", "आर्किमिडीजचे तत्त्व"],
          topics: [
            {
              id: "top_gb_s04_01",
              nameMr: "गतीची समीकरणे, न्यूटनचे नियम, गुरुत्वाकर्षण आणि द्रवस्थैतिकी",
              nameEn: "Kinematics, Newton's Laws, Universal Gravitation & Hydrostatics",
              subtopics: [
                {
                  id: "st_gb_s04_01_01",
                  titleMr: "न्यूटनचे गतीविषयक तीन नियम: १) पहिला नियम (जडत्वाचा नियम - बाह्य असंतुलित बल कार्य करत नसेल तर वस्तूची विराम किंवा सरळ रेषेतील एकसमान गतीची अवस्था कायम राहते); २) दुसरा नियम (संवेग परिवर्तनाचा दर प्रयुक्त बलाशी समप्रमाणात असतो: बल F = m × a, एकक: न्यूटन / Newton); ३) तिसरा नियम (क्रिया बल व प्रतिक्रिया बल यांचे मूल्य समान परंतु दिशा परस्परविरुद्ध असतात - उदा. बंदुकीची गोळी सुटल्यावर बंदूक मागे सरकणे, रॉकेट प्रक्षेपण)",
                  titleEn: "Newton's Laws: 1st Law (Inertia - state persists without external force); 2nd Law (Rate of change of momentum proportional to force: F = m*a, Unit: Newton); 3rd Law (Equal & Opposite Action-Reaction - Rocket launch)",
                  chips: ["१ ला नियम (जडत्व Inertia)", "२ रा नियम (F = ma)", "३ रा नियम (क्रिया-प्रतिक्रिया बल)", "संवेग संवर्धन"]
                },
                {
                  id: "st_gb_s04_01_02",
                  titleMr: "न्यूटनचा वैश्विक गुरुत्वाकर्षणाचा नियम: विश्वातील प्रत्येक वस्तू दुसऱ्या वस्तूला आकर्षित करते: F = G × (m१ × m२) / r²; वैश्विक स्थिरांक G = ६.६७ × १०⁻¹¹ N·m²/kg² (कॅव्हेंडिशने शोधले); गुरुत्वीय त्वरण (g = GM / R²): पृथ्वीच्या पृष्ठभागावर सरासरी ९.८ मी/से²; ध्रुवांवर 'g' चे मूल्य सर्वाधिक (९.८३ मी/से²); विषुववृत्तावर सर्वात कमी (९.७८ मी/से²); पृथ्वीच्या केंद्रावर g = ०",
                  titleEn: "Law of Gravitation: F = G*(m1*m2)/r^2; G = 6.67x10^-11 N m^2/kg^2 (Cavendish); Acceleration due to gravity 'g' avg 9.8 m/s^2; Max at Poles (9.83), Min at Equator (9.78), Zero at Earth Centre",
                  chips: ["G = ६.६७ × १०^-११", "g = ९.८ मी/से^२", "ध्रुवावर 'g' सर्वाधिक", "विषुववृत्तावर सर्वात कमी", "केंद्रावर g = शून्य"]
                },
                {
                  id: "st_gb_s04_01_03",
                  titleMr: "वस्तुमान (Mass) विरुद्ध वजन (Weight) आणि मुक्ती वेग: वस्तुमान: द्रव्याचे प्रमाण (अदिश राशी, विश्वात सर्वत्र स्थिर राहते, एकक kg); वजन: पृथ्वीने प्रयुक्त केलेले गुरुत्वीय बल W = m × g (सदिश राशी, 'g' नुसार बदलते, एकक Newton; चंद्रावर वजन पृथ्वीच्या १/६ पट); मुक्ती वेग (Escape Velocity): गुरुत्वाकर्षण कक्षेतून कायमचे निसटण्यासाठी लागणारा किमान वेग: पृथ्वीसाठी ११.२ किमी/सेकंद",
                  titleEn: "Mass vs Weight: Mass is constant scalar (kg); Weight is variable vector force W = m*g (Newtons; Moon weight is 1/6th of Earth); Escape Velocity for Earth is 11.2 km/s",
                  chips: ["वस्तुमान (नेहमी स्थिर)", "वजन W = mg (चंद्रावर १/६ पट)", "मुक्ती वेग ११.२ किमी/सेकंद (Escape Velocity)"]
                },
                {
                  id: "st_gb_s04_01_04",
                  titleMr: "कार्य, ऊर्जा व शक्ती: कार्य (Work W = F × s × cos θ, एकक: ज्यूल / Joule); गतीज ऊर्जा (Kinetic Energy KE = ½ mv²); स्थितिज ऊर्जा (Potential Energy PE = m × g × h); ऊर्जा संवर्धन नियम (ऊर्जा निर्माण करता येत नाही व नष्टही करता येत नाही); शक्ती (Power = कार्य / वेळ, एकक: वॅट / Watt; १ अश्वशक्ती Horse Power = ७४६ वॅट)",
                  titleEn: "Work, Energy & Power: Work W = F*s*cos(theta) (Joules); Kinetic Energy KE = 1/2 m*v^2; Potential Energy PE = m*g*h; Law of Conservation of Energy; Power = W/t (Watts; 1 HP = 746 W)",
                  chips: ["W = Fs cos theta", "गतीज ऊर्जा KE = १/२ mv^२", "स्थितिज ऊर्जा PE = mgh", "१ हॉर्स पॉवर (HP) = ७४६ वॅट"]
                },
                {
                  id: "st_gb_s04_01_05",
                  titleMr: "दाब, प्लावकता व आर्किमिडीजचे तत्त्व: दाब (Pressure = बल / क्षेत्रफळ, एकक: पास्कल / Pascal); पास्कलचा नियम (हायड्रॉलिक ब्रेक, लिफ्ट); आर्किमिडीजचे तत्त्व: एखादी वस्तू द्रवात अंशतः किंवा पूर्णतः बुडवली असता तिच्यावर वरच्या दिशेने प्लावक बल (Buoyant Force) कार्य करते, जे विस्थापित द्रवाच्या वजनाइतके असते (जहाजे व पाणबुड्या तरंगणे, लॅक्टोमीटर दुधाची शुद्धता)",
                  titleEn: "Pressure, Buoyancy & Archimedes Principle: Pressure = Force/Area (Pascals); Pascal's Law (Hydraulic brakes); Archimedes Principle: Upthrust equals weight of displaced fluid (Ships, Lactometers)",
                  chips: ["दाब (पास्कल Pascal)", "पास्कलचा नियम (हायड्रॉलिक ब्रेक)", "आर्किमिडीजचे तत्त्व", "लॅक्टोमीटर (Lactometer)"]
                }
              ],
              sources: [
                { book: "सामान्य विज्ञान प्रबोधिनी", standard: "डॉ. सचिन भस्के", chapterRef: "भौतिकशास्त्र: गती, बल व गुरुत्वाकर्षण" },
                { book: "बालभारती विज्ञान", standard: "इयत्ता ९ वी व १० वी", chapterRef: "गतीचे नियम व गुरुत्वाकर्षण" }
              ]
            }
          ]
        },


        // =========================================================================
        // विभाग B — रसायनशास्त्र (Chemistry)
        // =========================================================================
        {
          id: "gb_sci_c05",
          code: "S05",
          section: "B",
          slug: "chemistry-atomic-structure-and-radioactivity",
          nameMr: "अणुसंरचना, किरणोत्सारिता आणि रासायनिक बंध",
          nameEn: "Chemistry: Atomic Structure, Radioactivity, Isotopes & Chemical Bonding",
          name: "अणुसंरचना व किरणोत्सारिता (Atomic Structure & Radioactivity)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_sci_c05",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_sci_c04",
          nextChapterId: "gb_sci_c06",
          metaDescriptionMr: "डाल्टन, थॉमसन, रुदरफोर्ड (सुवर्णपत्री प्रयोग), बोरचे अणुप्रारूप, प्रोटॉन, न्यूट्रॉन, इलेक्ट्रॉन, समस्थानीके (Isotopes), समभारके (Isobars), किरणोत्सार (अल्फा, बीटा, गॅमा), आणि अणुभट्ट्या.",
          metaDescriptionEn: "In-depth review of Atomic Structure: Dalton, Thomson plum-pudding, Rutherford alpha-scattering, Bohr orbits, Subatomic particles (p, n, e), Isotopes (C-14, Cobalt-60, Iodine-131), Radioactivity (alpha, beta, gamma), and Nuclear Fission.",
          notesJsonPath: "/data/notes/group_b/prelims/science/c05_chemistry_atomic.json",
          quizTag: "gb_sci_atomic_01",
          tags: ["Chemistry", "Atomic Structure", "Rutherford Model", "Isotopes Isobars", "Radioactivity", "Nuclear Fission", "High-Weightage"],
          searchKeywords: ["atomic structure dalton thomson rutherford bohr", "subatomic particles electron proton neutron discovery", "isotopes isobars isotones applications", "radioactivity alpha beta gamma rays penetration", "carbon 14 dating cobalt 60 iodine 131", "अणुसंरचना रुदरफोर्ड बोर", "प्रोटॉन न्यूट्रॉन इलेक्ट्रॉन शोध", "समस्थानीके Isotopes", "किरणोत्सारिता अल्फा बीटा गॅमा", "कार्बन डेटिंग C-14", "कोबाल्ट-६० कर्करोग उपचार"],
          topics: [
            {
              id: "top_gb_s05_01",
              nameMr: "अणु सिद्धांत, मूलकण, समस्थानीके, किरणोत्सार आणि केंद्राकीय विखंडन",
              nameEn: "Atomic Models, Subatomic Properties, Isotopes & Nuclear Phenomena",
              subtopics: [
                {
                  id: "st_gb_s05_01_01",
                  titleMr: "अणु प्रारूपांचा इतिहास: १) डाल्टनचा सिद्धांत (अणु अविभाज्य आहे); २) जे. जे. थॉमसन (प्लम पुडिंग मॉडेल, १८९७ मध्ये इलेक्ट्रॉनचा शोध); ३) अर्नेस्ट रुदरफोर्ड (१९११ चा सुवर्णपत्री अल्फा कण विकिरण प्रयोग - अणुचे केंद्रक / Nucleus शोधले); ४) नील्स बोर (१९१३ - इलेक्ट्रॉन स्थिर ऊर्जा कक्षांमध्ये फिरतात: K, L, M, N कवचे)",
                  titleEn: "Evolution of Atomic Models: Dalton (Indivisible atom), J.J. Thomson (Plum Pudding, discovered electron 1897), Rutherford (Gold foil experiment, discovered Nucleus 1911), Niels Bohr (Quantized energy orbits K, L, M, N)",
                  chips: ["डाल्टन अणु सिद्धांत", "थॉमसन (इलेक्ट्रॉन शोध)", "रुदरफोर्ड सुवर्णपत्री प्रयोग (केंद्रक शोध)", "नील्स बोर ऊर्जा स्तर"]
                },
                {
                  id: "st_gb_s05_01_02",
                  titleMr: "मूलकण (Subatomic Particles): १) प्रोटॉन (धन प्रभार +१, केंद्रकात, शोध रुदरफोर्ड/गोल्डस्टीन); २) न्यूट्रॉन (प्रभाररहित, केंद्रकात, १९३२ मध्ये जेम्स चॅडविकने शोधला); ३) इलेक्ट्रॉन (ऋण प्रभार -१, कक्षांमध्ये, वस्तुमान हायड्रोजनच्या १/१८३७ पट); अणुअंक (Atomic Number Z = प्रोटॉन्सची संख्या); अणुवस्तुमानांकन (Mass Number A = प्रोटॉन + न्यूट्रॉन)",
                  titleEn: "Subatomic Particles: Protons (+1, nucleus, Rutherford), Neutrons (Neutral, nucleus, James Chadwick 1932), Electrons (-1, extranuclear, Thomson); Atomic Number Z, Mass Number A = p + n",
                  chips: ["प्रोटॉन (रुदरफोर्ड)", "न्यूट्रॉन (जेम्स चॅडविक १९३२)", "इलेक्ट्रॉन (थॉमसन)", "अणुअंक Z व वस्तुमानांक A"]
                },
                {
                  id: "st_gb_s05_01_03",
                  titleMr: "समस्थानीके (Isotopes) व त्यांचे उपयोग: अणुअंक (Z) समान परंतु अणुवस्तुमानांक (A) भिन्न असणारे एकाच मूलद्रव्याचे अणू; प्रमुख उपयोग (MPSC प्रश्न): १) कार्बन-१४ (C-14: जीवाश्मांचे वय ठरवण्यासाठी / कालगणना); २) कोबाल्ट-६० (Co-60: कर्करोगावरील उपचारात); ३) आयोडीन-१३१ (I-131: गलगंड / थायरॉईड ग्रंथी उपचारात); ४) युरेनियम-२३५ (U-235: अणुभट्ट्यांमध्ये इंधन); समभारके (Isobars: अणुवस्तुमानांक A समान, Z भिन्न - उदा. ऑर्गन व कॅल्शियम)",
                  titleEn: "Isotopes & Medical/Industrial Uses: Same Z, different A; Carbon-14 (Fossil dating), Cobalt-60 (Cancer radiotherapy), Iodine-131 (Goitre/Thyroid), Uranium-235 (Nuclear fuel); Isobars (Same A, different Z)",
                  chips: ["समस्थानीके (Isotopes)", "कार्बन-१४ (जीवाश्म वय)", "कोबाल्ट-६० (कर्करोग)", "आयोडीन-१३१ (गलगंड)", "युरेनियम-२३५"]
                },
                {
                  id: "st_gb_s05_01_04",
                  titleMr: "किरणोत्सारिता (Radioactivity): हेन्री बेक्वेरेल यांनी १८९६ मध्ये शोधली; मेरी क्युरी व पियरे क्युरी यांनी रेडियम व पोलोनियम शोधले; किरणोत्सारी किरणे: १) अल्फा (α - हेलियमचे केंद्रक, धन प्रभार, भेदनशक्ती सर्वात कमी, आयनीभवन क्षमता सर्वाधिक); २) बीटा (β - वेगवान इलेक्ट्रॉन, ऋण प्रभार); ३) गॅमा (γ - विद्युतचुंबकीय लहरी, प्रभाररहित, भेदनशक्ती सर्वाधिक)",
                  titleEn: "Radioactivity: Discovered by Henri Becquerel (1896); Marie & Pierre Curie; Radiation: Alpha (Helium nucleus, highest ionising, lowest penetration), Beta (Fast electrons), Gamma (EM waves, neutral, highest penetration)",
                  chips: ["हेन्री बेक्वेरेल १८९६", "मेरी क्युरी (नोबेल विजेती)", "अल्फा किरणे", "बीटा किरणे", "गॅमा किरणे (सर्वाधिक भेदनशक्ती)"]
                },
                {
                  id: "st_gb_s05_01_05",
                  titleMr: "केंद्राकीय विखंडन (Nuclear Fission) व संमीलन (Nuclear Fusion): विखंडन: जड केंद्रकाचे (U-235) दोन लहान केंद्रकांत विभाजन, प्रचंड ऊर्जा मुक्त (अणुबॉम्ब व अणुभट्टी); मंदायके (Moderators: जड पाणी D2O व ग्रॅफाइट); नियंत्रक कांड्या (Control Rods: बोरॉन व कॅडमियम); संमीलन (Fusion): हलकी केंद्रके एकत्र येणे (सूर्य व ताऱ्यांमधील ऊर्जा आणि हायड्रोजन बॉम्ब)",
                  titleEn: "Fission vs Fusion: Fission (U-235 split in nuclear reactors, Moderators: Heavy Water D2O/Graphite, Control rods: Boron/Cadmium); Fusion (Combining hydrogen nuclei in Sun & Hydrogen Bomb)",
                  chips: ["केंद्राकीय विखंडन (Fission)", "केंद्राकीय संमीलन (Fusion सूर्य)", "जड पाणी D2O (मंदायक)", "कॅडमियम कांड्या (नियंत्रक)"]
                }
              ],
              sources: [
                { book: "सामान्य विज्ञान प्रबोधिनी", standard: "डॉ. सचिन भस्के", chapterRef: "रसायनशास्त्र: अणुसंरचना व किरणोत्सारिता" },
                { book: "बालभारती विज्ञान", standard: "इयत्ता ९ वी व ११ वी", chapterRef: "अणुचे अंतरंग व अणुकेंद्रकीय रसायनशास्त्र" }
              ]
            }
          ]
        },
        {
          id: "gb_sci_c06",
          code: "S06",
          section: "B",
          slug: "chemistry-periodic-classification-and-chemical-bonding",
          nameMr: "मूलद्रव्यांचे आवर्ती वर्गीकरण, आवर्तसारणी व रासायनिक बंध",
          nameEn: "Chemistry: Periodic Classification of Elements, Modern Periodic Table & Chemical Bonding",
          name: "आवर्तसारणी व रासायनिक बंध (Periodic Table & Bonding)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_sci_c06",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_sci_c05",
          nextChapterId: "gb_sci_c07",
          metaDescriptionMr: "डोबेरायनरची त्रिके, न्यूलँड्सची अष्टके, मेंडेलीव्हची आवर्तसारणी, मोस्लेची आधुनिक आवर्तसारणी (११८ मूलद्रव्ये, १८ गण, ७ आवर्त), आवर्ती कल (Periodic Trends), आणि आयनिक व सहसंयुज बंध.",
          metaDescriptionEn: "In-depth review of Periodic Table: Dobereiner Triads, Newlands Octaves, Mendeleev (Atomic Mass), Henry Moseley's Modern Periodic Table 1913 (Atomic Number, 118 elements, 18 groups, 7 periods), Periodic Trends, and Ionic vs Covalent Bonds.",
          notesJsonPath: "/data/notes/group_b/prelims/science/c06_periodic_table.json",
          quizTag: "gb_sci_periodic_01",
          tags: ["Chemistry", "Modern Periodic Table 1913", "Moseley 118 Elements", "Mendeleev", "Periodic Trends", "Chemical Bonding", "High-Weightage"],
          searchKeywords: ["modern periodic table henry moseley 1913", "mendeleev periodic table atomic mass", "dobereiner triads newlands octaves", "periodic trends atomic radius valency electronegativity", "ionic bond covalent bond octet rule", "आधुनिक आवर्तसारणी हेन्री मोस्ले", "मेंडेलीव्ह आवर्तसारणी", "डोबेरायनर त्रिके", "१८ गण आणि ७ आवर्त", "आयनिक व सहसंयुज बंध"],
          topics: [
            {
              id: "top_gb_s06_01",
              nameMr: "आवर्तसारणीचा इतिहास, आधुनिक रचना, आवर्ती कल आणि रासायनिक बंध",
              nameEn: "Historical Genesis, Modern Periodic Architecture, Trends & Chemical Bonds",
              subtopics: [
                {
                  id: "st_gb_s06_01_01",
                  titleMr: "वर्गीकरणाचा इतिहास: १) डोबेरायनरची त्रिके (Triads १८१७: मधल्या मूलद्रव्याचे अणुवस्तुमान हे टोकांच्या दोन मूलद्रव्यांच्या सरासरीइतके असते - उदा. Li, Na, K); २) न्यूलँड्सचे अष्टक (Octaves १८६६: ८ व्या मूलद्रव्याचे गुणधर्म पहिल्यासारखे असतात - संगीतातील सप्तकाप्रमाणे; केवळ कॅल्शियमपर्यंत लागू); ३) मेंडेलीव्हची आवर्तसारणी (१८६९: मूलद्रव्यांचे गुणधर्म हे त्यांच्या 'अणुवस्तुमानांचे' आवर्तीफल असतात; ६३ मूलद्रव्ये; एका-बोरॉन, एका-ॲल्युमिनियम, एका-सिलिकॉन भाकीत)",
                  titleEn: "Early Classifications: Dobereiner's Triads (1817: Mean atomic mass of middle element, e.g., Li, Na, K); Newlands' Law of Octaves (1866: Up to Calcium); Mendeleev's Periodic Table (1869: Based on Atomic Masses, 63 elements, Eka-elements)",
                  chips: ["डोबेरायनर त्रिके १८१७", "न्यूलँड्स अष्टक नियम", "मेंडेलीव्ह आवर्तसारणी (अणुवस्तुमान)", "एका-ॲल्युमिनियम (गॅलियम)"]
                },
                {
                  id: "st_gb_s06_01_02",
                  titleMr: "आधुनिक आवर्तसारणी (Modern Periodic Table): हेन्री मोस्ले यांनी १९१३ मध्ये मांडली; 'मूलद्रव्यांचे गुणधर्म हे त्यांच्या अणुअंकांचे (Atomic Number Z) आवर्तीफल असतात'; एकूण ११८ मूलद्रव्ये; ७ आडव्या ओळी (आवर्त / Periods) आणि १८ उभे स्तंभ (गण / Groups); ४ खंड: s-खंड (गण १ व २ - अल्क व अल्कधर्मी धातू), p-खंड (गण १३ ते १८ - अधातू व राजवायू), d-खंड (गण ३ ते १२ - संक्रमक मूलद्रव्ये), f-खंड (तळाशी - लॅन्थेनाईड्स व ॲक्टिनाईड्स)",
                  titleEn: "Modern Periodic Table (Henry Moseley 1913): Properties are periodic functions of Atomic Numbers; 118 elements; 7 Periods & 18 Groups; 4 Blocks: s-block (Alkali/Alkaline earth), p-block, d-block (Transition), f-block (Inner transition)",
                  chips: ["हेन्री मोस्ले १९१३ (अणुअंक आधार)", "११८ मूलद्रव्ये", "१८ गण आणि ७ आवर्त", "s, p, d, f खंड", "राजवायू (गण १८)"]
                },
                {
                  id: "st_gb_s06_01_03",
                  titleMr: "आवर्ती कल (Periodic Trends - MPSC वारंवार प्रश्न): १) अणुत्रिज्या/अणुचा आकार: आवर्तात डावीकडून उजवीकडे जाताना कमी होतो, गणात वरून खाली जाताना वाढतो; २) धातू गुणधर्म: आवर्तात डावीकडून उजवीकडे कमी होतो, गणात वरून खाली वाढतो; ३) विद्युतऋणता (Electronegativity): आवर्तात डावीकडून उजवीकडे वाढते (फ्लुओरिन F सर्वाधिक विद्युतऋणी), गणात खाली कमी होते",
                  titleEn: "Periodic Trends: Atomic Radius (Decreases left-to-right across period, Increases down a group); Metallic Character (Decreases across period, Increases down group); Electronegativity (Increases across period, Fluorine highest)",
                  chips: ["अणुत्रिज्या कल (डावीकडून उजवीकडे घट)", "गणात त्रिज्या वाढ", "विद्युतऋणता (फ्लुओरिन सर्वाधिक)", "धातू-अधातू कल"]
                },
                {
                  id: "st_gb_s06_01_04",
                  titleMr: "रासायनिक बंध (Chemical Bonding): अष्टक नियम (Octet Rule - बाह्य कक्षेत ८ इलेक्ट्रॉन्स पूर्ण करणे); १) आयनिक बंध (Ionic/Electrovalent Bond: इलेक्ट्रॉन्सच्या पूर्ण देवाणघेवाणीतून निर्मिती - उदा. NaCl, CaO - उच्च वितळण बिंदू, जलीय द्रावणात विजेचे सुवाहक); २) सहसंयुज बंध (Covalent Bond: इलेक्ट्रॉन्सच्या भागीदारीतून निर्मिती - उदा. H2O, CH4, O2, N2 - कमी वितळण बिंदू, विजेचे दुर्वाहक)",
                  titleEn: "Chemical Bonding & Octet Rule: Ionic Bond (Complete electron transfer, e.g., NaCl - high melting point, conducts in molten state) vs Covalent Bond (Electron sharing, e.g., CH4, H2O - poor electrical conductors)",
                  chips: ["अष्टक नियम (Octet Rule)", "आयनिक बंध (इलेक्ट्रॉन देवाणघेवाण NaCl)", "सहसंयुज बंध (इलेक्ट्रॉन भागीदारी CH4)"]
                }
              ],
              sources: [
                { book: "सामान्य विज्ञान प्रबोधिनी", standard: "डॉ. सचिन भस्के", chapterRef: "रसायनशास्त्र: मूलद्रव्यांचे वर्गीकरण व बंध" },
                { book: "बालभारती विज्ञान", standard: "इयत्ता १० वी", chapterRef: "प्रकरण २: मूलद्रव्यांचे आवर्ती वर्गीकरण" }
              ]
            }
          ]
        },
        {
          id: "gb_sci_c07",
          code: "S07",
          section: "B",
          slug: "chemistry-acids-bases-salts-and-metals-non-metals",
          nameMr: "आम्ल, आम्लारी, क्षार (pH स्केल) आणि धातू-अधातू धातुविज्ञान",
          nameEn: "Chemistry: Acids, Bases, Salts, pH Scale & Metallurgy of Metals/Non-Metals",
          name: "आम्ल, आम्लारी व धातू-अधातू (Acids, Bases & Metallurgy)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 5,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_sci_c07",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_sci_c06",
          nextChapterId: "gb_sci_c08",
          metaDescriptionMr: "आम्ल व आम्लारी संकल्पना (आर्रेनियस, ब्रॉन्स्टेड), नैसर्गिक आम्ले (व्हिनेगर, लिंबू, मुंगी), pH स्केल (सोरेन्सन), लिटमस व दर्शक, उदासीनीकरण, धातूंची क्रियाशीलता श्रेणी, आणि मिश्रधातू.",
          metaDescriptionEn: "In-depth review of Acids, Bases & Salts: Arrhenius theory, Natural acids, Sorensen's pH Scale (0-14), Indicators, Neutralization, Reactivity series of metals, Metallurgy, and Alloys (Brass, Bronze, Stainless Steel).",
          notesJsonPath: "/data/notes/group_b/prelims/science/c07_acids_bases_metals.json",
          quizTag: "gb_sci_acids_metals_01",
          tags: ["Chemistry", "Acids and Bases", "pH Scale Sorensen", "Litmus Indicators", "Metals Reactivity Series", "Alloys", "High-Weightage"],
          searchKeywords: ["acids bases salts arrhenius theory", "ph scale sorensen acidic basic neutral", "natural organic acids formic acetic citric lactic", "metals non metals reactivity series k na ca", "alloys brass bronze solder stainless steel", "corrosion rust prevention galvanising", "आम्ल आम्लारी क्षार", "pH पट्टी सोरेन्सन", "नैसर्गिक आम्ले व्हिनेगर सायट्रिक लॅक्टिक", "धातूंची क्रियाशीलता श्रेणी", "मिश्रधातू पितळ कांस्य", "गंज प्रतिबंध गॅल्व्हनायझेशन"],
          topics: [
            {
              id: "top_gb_s07_01",
              nameMr: "आम्ल-आम्लारीचे गुणधर्म, pH निर्देशांक, धातू निष्कर्षण व मिश्रधातू",
              nameEn: "Acid-Base Chemistry, pH Metrology, Reactivity Ladder & Metallurgy Alloys",
              subtopics: [
                {
                  id: "st_gb_s07_01_01",
                  titleMr: "आम्ल व आम्लारी संकल्पना: आर्रेनियस सिद्धांत: आम्ल (Acid - पाण्यात विरघळल्यावर H+ आयन देणारे; चवीला आंबट, निळा लिटमस लाल करतात; उदा. HCl, H2SO4); आम्लारी (Base - पाण्यात OH- आयन देणारे; चवीला कडू व बुळबुळीत, लाल लिटमस निळा करतात; उदा. NaOH, KOH); आम्लराज (Aqua Regia = ३ भाग सान्द्र HCl + १ भाग सान्द्र HNO3 - सोने व प्लॅटिनम विरघळवणारे)",
                  titleEn: "Acids & Bases (Arrhenius): Acid (Yields H+ ions, sour, blue litmus turns red, e.g., HCl, H2SO4); Base (Yields OH- ions, bitter, soapy, red litmus turns blue, e.g., NaOH); Aqua Regia (3:1 conc. HCl to HNO3 dissolves gold)",
                  chips: ["आम्ल (H+ आयन, निळा लिटमस लाल)", "आम्लारी (OH- आयन, लाल लिटमस निळा)", "आम्लराज (Aqua Regia ३:१)"]
                },
                {
                  id: "st_gb_s07_01_02",
                  titleMr: "नैसर्गिक सेंद्रिय आम्ले (MPSC हमखास प्रश्न): व्हिनेगर - ॲसिटिक आम्ल; संत्री व लिंबू - सायट्रिक आम्ल; चिंच - टार्टारिक आम्ल; टोमॅटो - ऑक्सॅलिक आम्ल; दही/ताक - लॅक्टिक आम्ल; मुंगीचा दंश व मधमाशी - फॉर्मिक आम्ल / मिथेनॉईक आम्ल; सफरचंद - मॅलिक आम्ल",
                  titleEn: "Natural Acids in Daily Life: Vinegar (Acetic), Citrus (Citric), Tamarind (Tartaric), Tomato (Oxalic), Curd (Lactic), Ant/Bee sting (Formic / Methanoic), Apple (Malic acid)",
                  chips: ["व्हिनेगर (ॲसिटिक)", "लिंबू (सायट्रिक)", "दही (लॅक्टिक)", "मुंगी दंश (फॉर्मिक आम्ल)", "चिंच (टार्टारिक)"]
                },
                {
                  id: "st_gb_s07_01_03",
                  titleMr: "pH मूल्य व दर्शक (Indicators): एस. पी. एल. सोरेन्सन यांनी १९०९ मध्ये pH स्केल शोधली (० ते १४); pH = ७ (उदासीन Neutral - शुद्ध पाणी); pH < ७ (आम्लधर्मी Acidic); pH > ७ (आम्लारीधर्मी Basic); रक्ताचा pH = ७.३५ ते ७.४५ (किंचित आम्लारीधर्मी); लाळ = ६.५ ते ७.५; जठरातील पाचक रस = १.२ ते २.०; आम्ल पाऊस (Acid Rain) = pH ५.६ पेक्षा कमी",
                  titleEn: "pH Scale (Sorensen 1909): Scale 0 to 14; pH 7 Neutral, <7 Acidic, >7 Basic; Blood pH = 7.35 to 7.45 (slightly basic); Gastric juice = 1.2 to 2; Acid Rain = pH < 5.6",
                  chips: ["pH पट्टी (सोरेन्सन १९०९)", "मानवी रक्त pH ७.४", "जठर रस pH १.२ ते २", "आम्ल पाऊस pH < ५.६"]
                },
                {
                  id: "st_gb_s07_01_04",
                  titleMr: "धातूंची क्रियाशीलता श्रेणी (Reactivity Series): सर्वात जास्त क्रियाशील: पोटॅशियम (K) > सोडियम (Na) > कॅल्शियम (Ca) > मॅग्नेशियम (Mg) > ॲल्युमिनियम (Al); मध्यम: झिंक (Zn) > लोह (Fe) > शिसे (Pb); सर्वात कमी क्रियाशील: तांबे (Cu) > चांदी (Ag) > सोने (Au); सोडियम व पोटॅशियम अत्यंत क्रियाशील असल्याने रॉकेलमध्ये ठेवतात; पारा (Hg) हा एकमेव द्रव धातू; ब्रोमीन (Br) हा एकमेव द्रव अधातू",
                  titleEn: "Reactivity Series: K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Ag > Au; Sodium/Potassium stored in kerosene; Mercury (Hg) only liquid metal; Bromine (Br) only liquid non-metal",
                  chips: ["पोटॅशियम व सोडियम (रॉकेलमध्ये)", "पारा (एकमेव द्रव धातू)", "ब्रोमीन (द्रव अधातू)", "सोने (किमान क्रियाशील)"]
                },
                {
                  id: "st_gb_s07_01_05",
                  titleMr: "मिश्रधातू (Alloys) व गंज प्रतिबंध: १) पितळ (Brass = तांबे Cu ६०-८०% + जस्त Zn २०-४०%); २) कांस्य (Bronze = तांबे Cu ९०% + कथिल Sn १०%); ३) स्टेनलेस स्टील (लोह Fe + कार्बन C + क्रोमियम Cr + निकेल Ni); ४) शोल्डर (Solder = शिसे Pb + कथिल Sn); गंज रोखण्यासाठी गॅल्व्हनायझेशन (जस्तीकरण - लोखंडावर जस्ताचा/Zn थर देणे), कथिलकरण (टिनिंग) व ॲनोडायझिंग",
                  titleEn: "Alloys & Rust Prevention: Brass (Cu + Zn), Bronze (Cu + Sn), Stainless Steel (Fe + C + Cr + Ni), Solder (Pb + Sn); Galvanisation (Zinc coating on iron to prevent rusting), Anodizing",
                  chips: ["पितळ (तांबे + जस्त)", "कांस्य (तांबे + कथिल)", "स्टेनलेस स्टील (Cr + Ni)", "गॅल्व्हनायझेशन (जस्ताचा थर)"]
                }
              ],
              sources: [
                { book: "सामान्य विज्ञान प्रबोधिनी", standard: "डॉ. सचिन भस्के", chapterRef: "रसायनशास्त्र: आम्ल, आम्लारी व धातुविज्ञान" },
                { book: "बालभारती विज्ञान", standard: "इयत्ता ९ वी व १० वी", chapterRef: "आम्ल, आम्लारी व क्षार आणि धातुविज्ञान" }
              ]
            }
          ]
        },
        {
          id: "gb_sci_c08",
          code: "S08",
          section: "B",
          slug: "chemistry-carbon-compounds-and-applied-chemistry",
          nameMr: "कार्बन संयुगे, हायड्रोकार्बन्स, बहुवारिके व दैनंदिन रसायनशास्त्र",
          nameEn: "Chemistry: Carbon Compounds, Hydrocarbons, Polymers & Everyday Chemistry",
          name: "कार्बन संयुगे व दैनंदिन रसायनशास्त्र (Carbon Compounds & Everyday Chemistry)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_sci_c08",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_sci_c07",
          nextChapterId: "gb_sci_c09",
          metaDescriptionMr: "कार्बनची अपरूपे (हिरा, ग्रॅफाइट, फुलेरिन), संपृक्त व असंपृक्त हायड्रोकार्बन्स (अल्केन, अल्कीन, अल्काईन), बहुवारिके (पॉलिथीन, टेफ्लॉन, बेकेलाईट), साबण व अपमार्जके, आणि खते.",
          metaDescriptionEn: "In-depth review of Carbon Allotropes (Diamond, Graphite, Fullerenes), Hydrocarbons (Alkanes, Alkenes, Alkynes), Functional Groups, Polymers (Polythene, PVC, Teflon, Bakelite), Soaps/Detergents, and Fertilizers (NPK).",
          notesJsonPath: "/data/notes/group_b/prelims/science/c08_carbon_polymers.json",
          quizTag: "gb_sci_carbon_01",
          tags: ["Chemistry", "Carbon Allotropes", "Diamond Graphite Fullerenes", "Hydrocarbons Alkanes", "Polymers Bakelite Teflon", "Everyday Chemistry", "High-Weightage"],
          searchKeywords: ["carbon allotropes diamond graphite graphene fullerene c60", "hydrocarbons alkane alkene alkyne homologous series", "polymers plastics thermoplastics thermosetting bakelite teflon", "soaps detergents saponification micelles", "chemical fertilizers npk urea", "कार्बनची अपरूपे हिरा ग्रॅफाइट", "फुलेरिन C-60", "हायड्रोकार्बन्स", "पॉलिमर प्लास्टिक बेकेलाईट", "साबण व डिटर्जंट", "युरिया रासायनिक खते"],
          topics: [
            {
              id: "top_gb_s08_01",
              nameMr: "कार्बनची अपरूपे, हायड्रोकार्बन्स, प्लास्टिक-पॉलिमर व उपयुक्त रसायने",
              nameEn: "Allotropy, Hydrocarbon Framework, Polymerisation & Domestic Chemicals",
              subtopics: [
                {
                  id: "st_gb_s08_01_01",
                  titleMr: "कार्बनची स्फटिकी व अस्फटिकी अपरूपे: १) हिरा (Diamond: चतुःष्कोनीय रचना, कार्बनचे ४ बंध, ज्ञात सर्वांत कठीण नैसर्गिक पदार्थ, विजेचा दुर्वाहक, अपवर्तनांक २.४२); २) ग्रॅफाइट (Graphite: षटकोनी पदर रचना, कार्बनचे ३ बंध, मोकळा इलेक्ट्रॉन असल्याने विजेचा उत्तम सुवाहक, वंगण म्हणून वापर); ३) फुलेरिन (Fullerene - बकमिनिस्टर फुलेरिन C-60 फुटबॉलसारखी रचना); ४) अस्फटिकी अपरूपे: दगडी कोळसा, कोक, काजळी",
                  titleEn: "Allotropes of Carbon: Diamond (Tetrahedral, 4 covalent bonds, hardest known substance, insulator, refractive index 2.42); Graphite (Hexagonal layers, free electron, electrical conductor, lubricant); Fullerenes (Buckminsterfullerene C-60); Amorphous: Coal, Coke",
                  chips: ["हिरा (सर्वांत कठीण, दुर्वाहक)", "ग्रॅफाइट (विद्युत सुवाहक)", "फुलेरिन (C-60 बकीबॉल)", "ग्राफिन"]
                },
                {
                  id: "st_gb_s08_01_02",
                  titleMr: "हायड्रोकार्बन्स (Hydrocarbons): १) संपृक्त (Saturated): अल्केन्स (Alkanes - एकेरी बंध, सामान्य सूत्र: CnH2n+2 - मिथेन CH4, इथेन C2H6; मिथेनला 'मार्श गॅस' म्हणतात, CNG व बायोगॅसचा प्रमुख घटक); २) असंपृक्त (Unsaturated): अल्कीन्स (Alkenes - दुहेरी बंध, CnH2n - इथीन) आणि अल्काईन्स (Alkynes - तिहेरी बंध, CnH2n-2 - इथाईन / ॲसिटिलीन, वेल्डिंगसाठी वापर)",
                  titleEn: "Hydrocarbons: Saturated Alkanes (Single bond CnH2n+2: Methane CH4 Marsh gas, primary component of CNG & Biogas) vs Unsaturated Alkenes (Double bond CnH2n) and Alkynes (Triple bond CnH2n-2: Acetylene for gas welding)",
                  chips: ["अल्केन CnH2n+2 (मिथेन CH4)", "CNG व बायोगॅस (मिथेन)", "अल्कीन (दुहेरी बंध)", "अल्काईन (तिहेरी बंध ॲसिटिलीन)"]
                },
                {
                  id: "st_gb_s08_01_03",
                  titleMr: "बहुवारिके व प्लास्टिक (Polymers & Plastics): १) थर्मोप्लास्टिक (उष्णतेने मऊ होणारे - पुनर्वापर शक्य: पॉलिथीन, पीव्हीसी / PVC - पाईप्स, टेफ्लॉन - नॉन-स्टिक भांड्यांवर आवरण); २) थर्मोसेटिंग प्लास्टिक (उष्णतेने एकदाच आकार घेणारे - पुनर्वापर अशक्य: बेकेलाईट - विजेची बटणे व कुकरचे हँडल, मेलामाईन); ३) कृत्रिम धागे: नायलॉन (पहिले पूर्ण मानवनिर्मित), रेयॉन (कृत्रिम रेशीम), पॉलिस्टर",
                  titleEn: "Polymers: Thermoplastics (Recyclable: Polythene, PVC pipes, Teflon for non-stick cookware) vs Thermosetting (Non-recyclable: Bakelite for switches/cookware handles, Melamine); Synthetic Fibres: Nylon (First fully synthetic), Rayon (Artificial silk)",
                  chips: ["टेफ्लॉन (नॉन-स्टिक भांडी)", "बेकेलाईट (विद्युत स्विचेस)", "PVC पाईप्स", "नायलॉन (कृत्रिम धागा)", "थर्मोसेटिंग प्लास्टिक"]
                },
                {
                  id: "st_gb_s08_01_04",
                  titleMr: "दैनंदिन जीवनातील रसायनशास्त्र: १) साबण (उच्च मेदाम्लांचे सोडिअम/पोटॅशिअम क्षार - मृदू पाण्यात फेस); २) अपमार्जके (Detergents - कठीण पाण्यातही फेस); ३) कृत्रिम गोड पदार्थ: सॅकॅरिन, अस्पार्टेम; ४) खते: NPK खते (नायट्रोजन, फॉस्फरस, पोटॅशियम), युरिया (NH2-CO-NH2 - ४६% नायट्रोजन); ५) काच (अस्फटिकी घन पदार्थ - सिलिका) व सिमेंट (कॅल्शियम सिलिकेट व जिप्सम)",
                  titleEn: "Applied Chemicals: Soaps (Sodium/Potassium salts of fatty acids) vs Synthetic Detergents; Artificial Sweeteners (Saccharin, Aspartame); Chemical Fertilizers: NPK, Urea (46% Nitrogen content); Glass (Amorphous silica); Cement (Gypsum setting regulator)",
                  chips: ["साबण व अपमार्जके", "युरिया (४६% नायट्रोजन)", "सॅकॅरिन (कृत्रिम साखर)", "जिप्सम (सिमेंट घटक)"]
                }
              ],
              sources: [
                { book: "सामान्य विज्ञान प्रबोधिनी", standard: "डॉ. सचिन भस्के", chapterRef: "रसायनशास्त्र: कार्बन संयुगे व पॉलिमर" },
                { book: "बालभारती विज्ञान", standard: "इयत्ता १० वी", chapterRef: "प्रकरण ९: कार्बन संयुगे" }
              ]
            }
          ]
        },


        // =========================================================================
        // विभाग C — वनस्पतीशास्त्र (Botany)
        // =========================================================================
        {
          id: "gb_sci_c09",
          code: "S09",
          section: "C",
          slug: "botany-plant-classification-cryptogams-phanerogams",
          nameMr: "वनस्पतींचे वर्गीकरण: अबीजपत्री (अपूष्प) व बीजपत्री (सपुष्प) वनस्पती",
          nameEn: "Botany: Plant Kingdom Classification, Cryptogams & Phanerogams",
          name: "वनस्पतींचे वर्गीकरण (Plant Classification)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_sci_c09",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_sci_c08",
          nextChapterId: "gb_sci_c10",
          metaDescriptionMr: "अबीजपत्री वनस्पती (थॅलोफायटा/शेवाळ, ब्रायोफायटा/उभयचर, टेरिडोफायटा/नेचे), बीजपत्री वनस्पती (अनावृतबीजी/Gymnosperms व आवृतबीजी/Angiosperms - एकदल व द्विदल).",
          metaDescriptionEn: "In-depth review of Plant Classification: Cryptogams (Thallophyta algae, Bryophyta amphibians, Pteridophyta vascular), Phanerogams (Gymnosperms naked seed, Angiosperms monocots vs dicots).",
          notesJsonPath: "/data/notes/group_b/prelims/science/c09_botany_classification.json",
          quizTag: "gb_sci_plant_class_01",
          tags: ["Botany", "Plant Kingdom", "Cryptogams", "Bryophyta Amphibians", "Pteridophyta", "Gymnosperms Angiosperms", "Monocot Dicot", "High-Weightage"],
          searchKeywords: ["plant kingdom classification eichler", "cryptogams thallophyta bryophyta pteridophyta", "bryophyta amphibians of plant kingdom moss riccia", "pteridophyta first vascular plants ferns", "gymnosperms naked seeds cycas pinus", "angiosperms monocots dicots differences", "वनस्पती वर्गीकरण", "थॅलोफायटा शेवाळ", "ब्रायोफायटा उभयचर वनस्पती", "टेरिडोफायटा नेचे", "अनावृतबीजी सायकस", "आवृतबीजी एकदल व द्विदल"],
          topics: [
            {
              id: "top_gb_s09_01",
              nameMr: "वनस्पती सृष्टी, अबीजपत्री उपसृष्टी, संवहनी संस्था व बीजपत्री विभाग",
              nameEn: "Plant Taxonomy, Non-Vascular Cryptogams, Pteridophytes & Spermatophytes",
              subtopics: [
                {
                  id: "st_gb_s09_01_01",
                  titleMr: "वनस्पती सृष्टीची चौकट: ऑगस्ट आयखलर (१८८३) यांचे वर्गीकरण: १) अबीजपत्री (Cryptogams - बीजे न येणाऱ्या / अप्रकट प्रजनन अंग असणाऱ्या); २) बीजपत्री (Phanerogams - बीजे येणाऱ्या / प्रकट प्रजनन अंग असणाऱ्या)",
                  titleEn: "Taxonomic Framework: August Eichler's system (1883) dividing Plantae into Cryptogams (Flowerless/seedless) and Phanerogams (Seed-bearing)",
                  chips: ["आयखलर वर्गीकरण १८८३", "अबीजपत्री (Cryptogams)", "बीजपत्री (Phanerogams)"]
                },
                {
                  id: "st_gb_s09_01_02",
                  titleMr: "१) थॅलोफायटा (Thallophyta - शेवाळ / Algae): साधे, मऊ तंतूमय शरीर; मूळ, खोड, पाने नसतात; हरितद्रव्य असल्याने स्वयंपोषी; संवहनी संस्था (Xylem/Phloem) नसते; उदा. स्पायरोगायरा (Spirogyra), उलोथ्रिक्स, कारा, सरगॅसम; लायकेन्स (Lichens - दगडफूल: शेवाळ व बुरशीचे सहजीवन, SO2 प्रदूषण दर्शक)",
                  titleEn: "Thallophyta (Algae): Undifferentiated thallus body (no roots/stem/leaves); Autotrophic photosynthetic; Non-vascular; e.g., Spirogyra, Chara, Ulothrix; Lichens (Symbiosis of algae & fungi, SO2 bioindicator)",
                  chips: ["थॅलोफायटा शेवाळ", "स्पायरोगायरा", "संवहनी संस्था नसते", "लायकेन (दगडफूल प्रदूषण दर्शक)"]
                },
                {
                  id: "st_gb_s09_01_03",
                  titleMr: "२) ब्रायोफायटा (Bryophyta): 'वनस्पती सृष्टीतील उभयचर' (Amphibians of Plant Kingdom - वाढीसाठी जमिनीवर मात्र प्रजननासाठी पाण्याची गरज); मुळांसारखे मुलाभ (Rhizoids) असतात; संवहनी संस्था नसते; बीजाणू निर्मिती; उदा. मॉस/फ्युनारिया (Funaria), रिक्शिया (Riccia), मर्चंटिया (Marchantia)",
                  titleEn: "Bryophyta: 'Amphibians of the Plant Kingdom' (Grow on land but require water for fertilization); Possess root-like rhizoids; Non-vascular; e.g., Moss/Funaria, Riccia, Marchantia",
                  chips: ["ब्रायोफायटा (उभयचर वनस्पती)", "मुलाभ (Rhizoids)", "फ्युनारिया मॉस", "रिक्शिया मर्चंटिया"]
                },
                {
                  id: "st_gb_s09_01_04",
                  titleMr: "३) टेरिडोफायटा (Pteridophyta - नेचे वर्ग): पृथ्वीवरील पहिल्या संवहनी वनस्पती (First Vascular Plants - जलवाहिनी Xylem व रसवाहिनी Phloem उपस्थित); मूळ, खोड, पाने स्पष्ट असतात; पानांच्या मागील बाजूस असलेल्या बीजाणूधानीतून (Sporangia) प्रजनन; उदा. नेचे (Nephrolepis / Fern), इक्विसेटम, मार्सिलिया, लायकोपोडियम",
                  titleEn: "Pteridophyta (Ferns): First Vascular Plants on Earth with true Xylem and Phloem; True roots, stems and leaves; Reproduce via spores in sporangia on underside of leaflets; e.g., Ferns, Marsilea, Lycopodium",
                  chips: ["टेरिडोफायटा (नेचे Ferns)", "पहिल्या संवहनी वनस्पती", "जलवाहिनी व रसवाहिनी उपस्थित", "नेफ्रोलेपिस"]
                },
                {
                  id: "st_gb_s09_01_05",
                  titleMr: "४) अनावृतबीजी (Gymnosperms) विरुद्ध ५) आवृतबीजी (Angiosperms): अनावृतबीजी: नग्नीबीजी (बियाण्यांवर फळांचे आवरण नसते, बहुवार्षिक व काष्ठमय, नर व मादी फुले एकाच झाडावर वेगवेगळ्या शंकूवर येतात; उदा. सायकस Cycas, पायनस Pinus / देवदार); आवृतबीजी: बियांवर फळांचे आवरण असते; दोन उपविभाग: १) द्विदल वनस्पती (Dicot: दोन दल, सोटमूळ Tap root, जाळीदार शिराविन्यास - उदा. हरभरा, आंबा); २) एकदल वनस्पती (Monocot: एकच दल, तंतुमय मूळ, समांतर शिराविन्यास - उदा. मका, गहू, कांदा)",
                  titleEn: "Gymnosperms vs Angiosperms: Gymnosperms have naked seeds in cones (Cycas, Pinus); Angiosperms bear flowers and covered seeds in fruits: Dicots (2 cotyledons, taproot, reticulate veins) vs Monocots (1 cotyledon, fibrous root, parallel veins)",
                  chips: ["अनावृतबीजी (सायकस, पायनस)", "आवृतबीजी सपुष्प", "द्विदल (सोटमूळ, जाळीदार शिरा)", "एकदल (तंतुमय मूळ, समांतर शिरा)"]
                }
              ],
              sources: [
                { book: "सामान्य विज्ञान प्रबोधिनी", standard: "डॉ. सचिन भस्के", chapterRef: "वनस्पतीशास्त्र: वनस्पतींचे वर्गीकरण" },
                { book: "बालभारती विज्ञान", standard: "इयत्ता ९ वी", chapterRef: "प्रकरण ६: वनस्पतींचे वर्गीकरण" }
              ]
            }
          ]
        },
        {
          id: "gb_sci_c10",
          code: "S10",
          section: "C",
          slug: "botany-plant-physiology-photosynthesis-and-hormones",
          nameMr: "वनस्पती शरीरक्रियाशास्त्र: प्रकाशसंश्लेषण, ऊती व पादप संप्रेरके",
          nameEn: "Botany: Plant Physiology, Photosynthesis, Plant Tissues & Phytohormones",
          name: "वनस्पती शरीरक्रियाशास्त्र (Plant Physiology & Hormones)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_sci_c10",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_sci_c09",
          nextChapterId: "gb_sci_c11",
          metaDescriptionMr: "प्रकाशसंश्लेषण (क्लोरोप्लास्ट, प्रकाश व अप्रकाश अभिक्रिया), बाष्पोत्सर्जन, वनस्पती ऊती (विभाजी ऊती, जलवाहिनी Xylem, रसवाहिनी Phloem), आणि वनस्पती संप्रेरके (ऑक्झिन, जिबरेलिन, सायटोकायनीन, ॲबसिसिक ॲसिड, इथिलिन).",
          metaDescriptionEn: "In-depth review of Plant Physiology: Photosynthesis (Light & Dark reactions, Calvin Cycle, Chlorophyll a/b), Transpiration, Plant Tissues (Meristematic, Xylem vessels, Phloem sieve tubes), and Phytohormones (Auxins, Gibberellins, Cytokinins, Abscisic acid, Ethylene fruit ripening).",
          notesJsonPath: "/data/notes/group_b/prelims/science/c10_plant_physiology.json",
          quizTag: "gb_sci_plant_physio_01",
          tags: ["Botany", "Plant Physiology", "Photosynthesis Chlorophyll", "Xylem Phloem", "Phytohormones Auxin", "Ethylene Ripening", "High-Weightage"],
          searchKeywords: ["plant physiology photosynthesis equation", "chlorophyll light and dark reactions calvin cycle", "xylem water conduction phloem food transport", "plant hormones phytohormones auxins gibberellins", "ethylene fruit ripening gas hormone", "abscisic acid stress hormone", "प्रकाशसंश्लेषण क्लोरोफिल", "जलवाहिनी पाणी वहन रसवाहिनी अन्न वहन", "वनस्पती संप्रेरके ऑक्झिन जिबरेलिन", "इथिलिन फळे पिकवणे", "ॲबसिसिक ॲसिड"],
          topics: [
            {
              id: "top_gb_s10_01",
              nameMr: "प्रकाशसंश्लेषण रासायनिक अभिक्रिया, संवहनी ऊती आणि पादप हॉर्मोन्स",
              nameEn: "Photosynthetic Machinery, Vascular Tissue Logistics & Phytohormone Functions",
              subtopics: [
                {
                  id: "st_gb_s10_01_01",
                  titleMr: "प्रकाशसंश्लेषण (Photosynthesis): वनस्पती सूर्यप्रकाश व हरितद्रव्याच्या (Chlorophyll) साहाय्याने CO2 व पाण्यापासून ग्लुकोज व ऑक्सिजन तयार करतात: ६CO2 + १२H2O -> C6H12O6 + ६H2O + ६O2; क्लोरोप्लास्टमधील हरितद्रव्यात मॅग्नेशियम (Mg) हा मुख्य धातू असतो; ऑक्सिजन हा पाण्याच्या विघटनातून (Photolysis of water) बाहेर पडतो (CO2 मधून नाही); लाल प्रकाशात प्रकाशसंश्लेषण कमाल, हिरव्या प्रकाशात किमान",
                  titleEn: "Photosynthesis Chemistry: 6CO2 + 12H2O -> C6H12O6 + 6H2O + 6O2; Chlorophyll contains Magnesium (Mg); Oxygen released originates from water photolysis; Maximum in Red light, Minimum in Green",
                  chips: ["प्रकाशसंश्लेषण समीकरण", "हरितद्रव्यात मॅग्नेशियम (Mg)", "ऑक्सिजन पाश्यातून मुक्त", "लाल प्रकाशात सर्वाधिक वेग"]
                },
                {
                  id: "st_gb_s10_01_02",
                  titleMr: "प्रकाश अभिक्रिया व अप्रकाश अभिक्रिया: १) प्रकाश अभिक्रिया (Light Reaction - ग्रॅना / Grana मध्ये घडते, ATP व NADPH2 ऊर्जा निर्मिती); २) अप्रकाश अभिक्रिया (Dark Reaction / कॅल्व्हिन चक्र - स्ट्रोमा / Stroma मध्ये घडते, CO2 चे ग्लुकोजमध्ये क्षपण); बाष्पोत्सर्जन (Transpiration - पर्णरंध्रांद्वारे / Stomata पाण्याचे बाष्पीभवन, पाण्याचे उर्ध्व दिशेने वहन)",
                  titleEn: "Light vs Dark Reactions: Light Reaction (in Grana thylakoids, produces ATP/NADPH2) vs Dark Reaction (in Stroma, Calvin Cycle reduces CO2 to sugar); Transpiration via stomatal guard cells",
                  chips: ["ग्रॅना (प्रकाश अभिक्रिया)", "स्ट्रोमा (अप्रकाश कॅल्व्हिन चक्र)", "पर्णरंध्रे Stomata (बाष्पोत्सर्जन)"]
                },
                {
                  id: "st_gb_s10_01_03",
                  titleMr: "वनस्पती ऊती (Plant Tissues): १) विभाजी ऊती (Meristematic Tissue - सतत पेशीविभाजन: प्ररोह विभाजी, आंतरकट विभाजी, पार्श्व विभाजी); २) स्थायी ऊती: सरल ऊती (पॅरेन्कायमा, कोलेन्कायमा, स्क्लेरेन्कायमा - नारळाच्या काथ्या स्क्लेरेन्कायमापासून); ३) जटिल संवहनी ऊती: जलवाहिनी (Xylem - मुळांकडून पाणी व खनिजांचे केवळ एकाच दिशेने उर्ध्व वहन) आणि रसवाहिनी (Phloem - पानांनी तयार केलेल्या अन्नाचे सर्व दिशेने वहन)",
                  titleEn: "Plant Tissues: Meristematic (Apical, Intercalary, Lateral) vs Permanent (Parenchyma, Collenchyma, Sclerenchyma in coconut husk); Vascular Tissues: Xylem (Unidirectional water transport) & Phloem (Bidirectional food translocation)",
                  chips: ["जलवाहिनी Xylem (पाणी वहन)", "रसवाहिनी Phloem (अन्न वहन)", "स्क्लेरेन्कायमा (नारळाची काथ्या)", "विभाजी ऊती"]
                },
                {
                  id: "st_gb_s10_01_04",
                  titleMr: "वनस्पती संप्रेरके (Phytohormones - MPSC प्रश्न): १) ऑक्झिन (Auxin - पेशींची लांबी वाढवणे, प्रकाशाकडे झुकणे); २) जिबरेलिन (Gibberellin - खोडाची लांबी वाढवणे, सुप्तावस्था मोडणे, द्राक्षांचा आकार वाढवणे); ३) सायटोकायनीन (Cytokinin - पेशीविभाजनाला चालना देणे, पानांचे वृद्धत्व लांबवणे); ४) ॲबसिसिक ॲसिड (ABA - ताण संप्रेरक Stress Hormone, वाढ रोखणे, पर्णरंध्रे बंद करणे, पाने गळणे); ५) इथिलिन (Ethylene - एकमेव वायूरूप संप्रेरक, फळे नैसर्गिकरीत्या पिकवण्यासाठी कारणीभूत)",
                  titleEn: "Phytohormones: Auxins (Apical elongation, phototropism), Gibberellins (Stem growth, grape sizing), Cytokinins (Cell division), Abscisic Acid (ABA - Stress hormone, growth inhibitor, stomatal closure), Ethylene (Only gaseous hormone, fruit ripening)",
                  chips: ["ऑक्झिन (वाढ संप्रेरक)", "जिबरेलिन (द्राक्ष आकार वाढ)", "इथिलिन (वायूरूप फळे पिकवणे)", "ॲबसिसिक ॲसिड (ताण संप्रेरक)"]
                }
              ],
              sources: [
                { book: "सामान्य विज्ञान प्रबोधिनी", standard: "डॉ. सचिन भस्के", chapterRef: "वनस्पतीशास्त्र: वनस्पती शरीरक्रियाशास्त्र" },
                { book: "बालभारती जीवशास्त्र", standard: "इयत्ता ११ वी व १२ वी", chapterRef: "Photosynthesis & Plant Growth Regulators" }
              ]
            }
          ]
        },


        // =========================================================================
        // विभाग D — प्राणीशास्त्र (Zoology & Animal Classification)
        // =========================================================================
        {
          id: "gb_sci_c11",
          code: "S11",
          section: "D",
          slug: "zoology-animal-kingdom-classification-non-chordates-chordates",
          nameMr: "प्राणी सृष्टीचे वर्गीकरण: असमपृष्ठरज्जू (Non-Chordates) व समपृष्ठरज्जू (Chordates)",
          nameEn: "Zoology: Animal Kingdom Classification, Non-Chordates & Chordates",
          name: "प्राणी वर्गीकरण (Animal Kingdom Classification)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 5,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_sci_c11",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_sci_c10",
          nextChapterId: "gb_sci_c12",
          metaDescriptionMr: "रॉबर्ट व्हिटाकरची ५ सृष्टी पद्धत, प्राणी सृष्टीचे १० संघ (पॉरिफेरा, सिलेंटरेटा, प्लॅटीहेल्मिंथिस, ॲनेलिडा, आर्थ्रोपोडा - सर्वात मोठा संघ, मोलस्का, एकायनोडर्माटा), समपृष्ठरज्जू प्राणी (मत्स्य, उभयचर, सरीसृप, पक्षी, सस्तन प्राणी).",
          metaDescriptionEn: "In-depth review of Animal Kingdom: Robert Whittaker 5-Kingdom system, Non-Chordates (Porifera sponges, Cnidaria, Platyhelminthes, Annelida earthworm, Arthropoda largest phylum, Mollusca, Echinodermata), and Chordates (Pisces, Amphibia, Reptilia, Aves, Mammalia).",
          notesJsonPath: "/data/notes/group_b/prelims/science/c11_animal_kingdom.json",
          quizTag: "gb_sci_zoology_01",
          tags: ["Zoology", "Animal Kingdom", "Whittaker Five Kingdoms", "Non-Chordates", "Arthropoda Largest Phylum", "Chordates Mammalia", "High-Weightage"],
          searchKeywords: ["animal kingdom classification whittaker", "non-chordates porifera cnidaria annelida earthworm", "arthropoda largest phylum jointed legs chitin", "mollusca octopus snail echinodermata starfish", "chordates vertebrates pisces amphibia reptilia aves mammalia", "warm-blooded cold-blooded heart chambers", "प्राणी वर्गीकरण", "रॉबर्ट व्हिटाकर ५ सृष्टी", "आर्थ्रोपोडा सर्वात मोठा संघ कीटक", "ॲनेलिडा गांडूळ", "समपृष्ठरज्जू मत्स्य उभयचर सस्तन प्राणी", "हृदयाचे कप्पे"],
          topics: [
            {
              id: "top_gb_s11_01",
              nameMr: "प्राणी वर्गीकरणाचे आधार, १० मुख्य प्राणी संघ, पृष्ठवंशीय वर्ग व शरीररचना",
              nameEn: "Systematic Taxonomy, Phylum Architecture, Non-Chordata & Vertebrate Classes",
              subtopics: [
                {
                  id: "st_gb_s11_01_01",
                  titleMr: "वर्गीकरणाची पार्श्वभूमी: रॉबर्ट व्हिटाकर (१९६९) यांची ५ सृष्टी वर्गीकरण पद्धत: १) मोनेरा (एकपेशीय, आदिकेंद्रकी - जिवाणू), २) प्रोटिस्टा (एकपेशीय, दृश्यकेंद्रकी - अमिबा, पॅरामेशियम), ३) कवके/Fungi (मृतोपजीवी, कायटीनची पेशीभित्ती), ४) वनस्पती, ५) प्राणी (बहुपेशीय, दृश्यकेंद्रकी, पेशीभित्ती नसलेले); वर्गीकरणाचे निकष: देहगुहा (Coelom), सममिती (Symmetry), जननस्तर (Germ Layers: Diploblastic vs Triploblastic)",
                  titleEn: "5-Kingdom Classification (R.H. Whittaker 1969): Monera (Prokaryotes/Bacteria), Protista (Amoeba), Fungi (Chitinous saprophytes), Plantae, Animalia; Taxonomic criteria: Body Cavity/Coelom, Symmetry, Germ layers",
                  chips: ["व्हिटाकर ५ सृष्टी पद्धत १९६९", "मोनेरा (जिवाणू)", "प्रोटिस्टा (अमिबा)", "देहगुहा व सममिती"]
                },
                {
                  id: "st_gb_s11_01_02",
                  titleMr: "असमपृष्ठरज्जू संघ १ ते ५: १) पॉरिफेरा (रंध्रीय प्राणी: शरीरावर छिद्रे/ऑस्टिया, हालचाल नसणारे - स्पंज, सायकॉन); २) सिलेंटरेटा/नायडेरिया (दंशपेशी असणारे - जलव्याल/हायड्रा, जेलीफिश); ३) प्लॅटीहेल्मिंथिस (चपटे कृमी, उभयलिंगी - यकृतकृमी/लिव्हर फ्लुक, टेपवर्म, प्लॅनेरिया); ४) ॲस्केलहेल्मिंथिस (गोल कृमी - जंत/Ascaris, हत्तीरोगाचे फायलेरिया कृमी); ५) ॲनेलिडा (वलयी प्राणी: खंडीभवन शरीर, बंद रक्ताभिसरण - गांडूळ, जळू/Leech)",
                  titleEn: "Non-Chordate Phyla 1 to 5: Porifera (Sponges, ostia pores), Cnidaria (Hydra, Jellyfish with stinging cells), Platyhelminthes (Flatworms: Liver fluke, Tapeworm), Aschelminthes (Roundworms: Ascaris, Filarial worm), Annelida (Segmented: Earthworm, Leech, closed circulation)",
                  chips: ["पॉरिपेरा (स्पंज छिद्रे)", "नायडेरिया (हायड्रा जेलीफिश)", "प्लॅटीहेल्मिंथिस (चपटे कृमी)", "ॲनेलिडा (गांडूळ वलयी)"]
                },
                {
                  id: "st_gb_s11_01_03",
                  titleMr: "असमपृष्ठरज्जू संघ ६ ते १०: ६) आर्थ्रोपोडा (संधीपाद प्राणी: प्राणी जगतातील सर्वात मोठा संघ - २/३ प्राणी; सांधेयुक्त पाय, कायटीनचे बाह्यकंकाळ, मुक्त रक्ताभिसरण - झुरळ, डास, खेकडा, विंचू); ७) मोलस्का (मृदुकाय प्राणी: दुसरा सर्वात मोठा संघ, मऊ शरीर, कॅल्शियम कार्बोनेटचे कवच - गोगलगाय, शिंपला, ऑक्टोपस); ८) एकायनोडर्माटा (कंटकीचर्मी: शरीरावर कॅल्शियमचे काटे - तारामासा/Starfish); ९) हेमीकॉर्डाटा (उदा. बॅलानोग्लोसस)",
                  titleEn: "Non-Chordate Phyla 6 to 10: Arthropoda (LARGEST Phylum: Jointed appendages, chitinous exoskeleton, open circulation - Cockroach, Crab); Mollusca (2nd largest, soft body with CaCO3 shell - Octopus, Snail); Echinodermata (Spiny skin, water vascular - Starfish)",
                  chips: ["आर्थ्रोपोडा (सर्वात मोठा संघ, झुरळ)", "कायटीनचे बाह्यकंकाळ", "मोलस्का (दुसरा मोठा संघ, ऑक्टोपस)", "एकायनोडर्माटा (तारामासा)"]
                },
                {
                  id: "st_gb_s11_01_04",
                  titleMr: "समपृष्ठरज्जू प्राणी (Chordata) - पृष्ठवंशीय ५ वर्ग व हृदयाचे कप्पे: १) मत्स्य वर्ग (Pisces: २ कप्प्यांचे हृदय - १ आलिंद + १ निलय, कल्ल्यांद्वारे श्वसन, शीतरक्त); २) उभयचर वर्ग (Amphibia: ३ कप्प्यांचे हृदय - २ आलिंद + १ निलय, शीतरक्त - बेडूक, सॅलॅमँडर); ३) सरीसृप वर्ग (Reptilia: ३.५ कप्प्यांचे हृदय, सरपटणारे, शीतरक्त - साप, पाल; अपवाद: मगर - ४ कप्प्यांचे हृदय); ४) पक्षी वर्ग (Aves: ४ कप्प्यांचे हृदय, उबदार रक्त Warm-blooded); ५) सस्तन प्राणी (Mammalia: ४ कप्प्यांचे हृदय, उबदार रक्त, दुग्धग्रंथी - मानव, देवमासा, वटवाघूळ; अपवाद अंडी घालणारे: प्लॅटिपस)",
                  titleEn: "Vertebrate Classes & Heart Chambers: Pisces (2 chambers, cold-blooded); Amphibia (3 chambers - Frog); Reptilia (3 chambers - Snake, Lizard; EXCEPTION: Crocodile has 4 chambers); Aves (4 chambers, warm-blooded); Mammalia (4 chambers, warm-blooded, mammary glands; Egg-laying exception: Platypus)",
                  chips: ["मत्स्य (२ कप्पे हृदय)", "बेडूक (३ कप्पे)", "मगर (अपवाद ४ कप्पे)", "पक्षी व सस्तन (४ कप्पे, उबदार रक्त)", "प्लॅटिपस (अंडी घालणारा सस्तन प्राणी)"]
                }
              ],
              sources: [
                { book: "सामान्य विज्ञान प्रबोधिनी", standard: "डॉ. सचिन भस्के", chapterRef: "प्राणीशास्त्र: प्राणी सृष्टीचे वर्गीकरण" },
                { book: "बालभारती विज्ञान", standard: "इयत्ता १० वी", chapterRef: "प्रकरण ६: प्राण्यांचे वर्गीकरण" }
              ]
            }
          ]
        },
        {
          id: "gb_sci_c12",
          code: "S12",
          section: "D",
          slug: "zoology-cell-biology-and-genetics",
          nameMr: "पेशी जीवशास्त्र (Cytology), पेशी अंगके, DNA/RNA आणि जनुकशास्त्र",
          nameEn: "Cell Biology (Cytology), Organelles, Cell Division, DNA/RNA & Genetics",
          name: "पेशीशास्त्र व जनुकशास्त्र (Cell Biology & Genetics)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_sci_c12",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_sci_c11",
          nextChapterId: "gb_sci_c13",
          metaDescriptionMr: "रॉबर्ट हुक (१६६५), पेशी सिद्धांत (श्वान व श्लायडेन), पेशी अंगके (मायटोकॉन्ड्रिया/ऊर्जाघर, लायसोसोम/आत्मघातकी पिशव्या, रायबोसोम), समसूत्री व अर्धगुणसूत्री विभाजन, DNA द्विकुंडल (वॉटसन-क्रिक), आणि मेंडेलचे अनुवंशिकता नियम.",
          metaDescriptionEn: "In-depth review of Cytology & Genetics: Robert Hooke (1665), Cell Theory (Schleiden & Schwann), Organelles (Mitochondria powerhouse, Lysosomes suicide bags, Ribosomes protein factories), Mitosis vs Meiosis, DNA Double Helix (Watson-Crick), and Mendel's Laws of Inheritance.",
          notesJsonPath: "/data/notes/group_b/prelims/science/c12_cell_genetics.json",
          quizTag: "gb_sci_cell_01",
          tags: ["Cytology", "Cell Biology", "Mitochondria Powerhouse", "Lysosomes Suicide Bags", "DNA Double Helix", "Mitosis Meiosis", "Mendel Genetics", "High-Weightage"],
          searchKeywords: ["cell biology cytology organelles functions", "mitochondria powerhouse of cell atp", "lysosomes suicide bags digestive enzymes", "ribosomes protein synthesis factory", "mitosis and meiosis cell division stages", "dna double helix watson crick model rna", "gregor mendel genetics monohybrid dihybrid", "पेशीशास्त्र रॉबर्ट हुक", "मायटोकॉन्ड्रिया ऊर्जा केंद्र ATP", "लायसोसोम आत्मघातकी पिशव्या", "समसूत्री व अर्धसूत्री पेशीविभाजन", "DNA द्विकुंडल रचना वॉटसन क्रिक", "मेंडेलचे जनुकशास्त्र नियम"],
          topics: [
            {
              id: "top_gb_s12_01",
              nameMr: "पेशी सिद्धांत, पेशी अंगकांची कार्ये, पेशीविभाजन आणि मेंडेलचे नियम",
              nameEn: "Cell Architecture, Organelle Functions, Cell Division Cycle & Mendelian Genetics",
              subtopics: [
                {
                  id: "st_gb_s12_01_01",
                  titleMr: "पेशीची ओळख व पेशी सिद्धांत: रॉबर्ट हुक (१६६५ - बुचाच्या झाडाच्या सालीत पेशीचा प्रथम शोध); ॲन्टॉन व्हॉन ल्युव्हेनहॉक (१६७४ - प्रथम जिवंत पेशी पाहिली); श्लायडेन व श्वान (१८३९ - पेशी सिद्धांत: सर्व सजीव पेशींचे बनलेले असतात); रुडॉल्फ विर्चो (१८५५ - 'ओम्निस सेल्युला ई सेल्युला' - नव्या पेशी अस्तित्वात असलेल्या पेशींमधूनच तयार होतात)",
                  titleEn: "Cell Discovery & Theory: Robert Hooke (1665), Leeuwenhoek (1674 live cell), Schleiden & Schwann (Cell Theory 1839), Rudolf Virchow (1855 - Omnis cellula-e-cellula)",
                  chips: ["रॉबर्ट हुक १६६५ (पेशी शोध)", "श्लायडेन व श्वान (पेशी सिद्धांत)", "रुडॉल्फ विर्चो", "पेशी सजीवाचे मूलभूत एकक"]
                },
                {
                  id: "st_gb_s12_01_02",
                  titleMr: "प्रमुख पेशी अंगके व त्यांची टोपणनावे (MPSC हमखास प्रश्न): १) तंतुकणिका (Mitochondria - 'पेशीचे ऊर्जा केंद्र / Powerhouse of Cell' - ATP स्वरूपात ऊर्जा निर्मिती, स्वतःचे DNA असते); २) लयकारिका (Lysosomes - 'आत्मघातकी पिशव्या / Suicide Bags' - पाचक विकरे); ३) रायबोसोम (Ribosomes - 'प्रथिन निर्मितीचे कारखाने / Protein Factories'); ४) गॉल्गी काय (Golgi Apparatus - 'पेशीचे पॅकेजिंग व वाहतूक केंद्र'); ५) आंतरद्रव्यजालिका (Endoplasmic Reticulum); ६) केंद्रक (Nucleus - पेशीचा नियंत्रक कक्ष)",
                  titleEn: "Cell Organelles & Sobriquets: Mitochondria (Powerhouse of cell, generates ATP), Lysosomes (Suicide bags, hydrolytic enzymes), Ribosomes (Protein factories), Golgi Bodies (Packaging dispatch centre), Nucleus (Controller with chromatin)",
                  chips: ["तंतुकणिका (ऊर्जा घर Powerhouse)", "लयकारिका (आत्मघातकी पिशव्या Suicide bags)", "रायबोसोम (प्रथिन कारखाने)", "ATP निर्मिती"]
                },
                {
                  id: "st_gb_s12_01_03",
                  titleMr: "वनस्पती पेशी विरुद्ध प्राणी पेशी: वनस्पती पेशीमध्ये सेल्युलोजची 'पेशीभित्ती' (Cell Wall), हरितलवके (Plastids/Chloroplasts) आणि मोठी मध्यवर्ती रिक्थिका (Vacuole) असते; प्राणी पेशीमध्ये पेशीभित्ती नसते, लवके नसतात आणि तारकाकेंद्र (Centrosome - पेशी विभाजनात मदत करणारे) केवळ प्राणी पेशीत असते",
                  titleEn: "Plant vs Animal Cells: Plant cells have rigid cellulose Cell Wall, Chloroplasts, and large central vacuole; Animal cells lack cell walls/plastids but contain Centrosomes for spindle formation",
                  chips: ["पेशीभित्ती (केवळ वनस्पती)", "हरितलवके (केवळ वनस्पती)", "तारकाकेंद्र Centrosome (केवळ प्राणी)", "मोठी रिक्थिका"]
                },
                {
                  id: "st_gb_s12_01_04",
                  titleMr: "पेशीविभाजन (Cell Division): १) समसूत्री विभाजन (Mitosis - कायिक पेशींमध्ये; एका जनक पेशीपासून २ समान गुणसूत्रे असणाऱ्या कन्या पेशी बनतात; शारीरिक वाढ व दुरुस्ती); २) अर्धगुणसूत्री विभाजन (Meiosis - जनन पेशींमध्ये; एका पेशीपासून ४ कन्या पेशी बनतात, गुणसूत्रांची संख्या निम्मी (n) होते; युग्मक निर्मिती)",
                  titleEn: "Cell Division: Mitosis (Equational division in somatic cells: 1 parent cell -> 2 diploid identical daughter cells; growth/repair) vs Meiosis (Reductional division in germ cells: 1 parent cell -> 4 haploid cells; gamete formation)",
                  chips: ["समसूत्री विभाजन (Mitosis २ पेशी)", "अर्धगुणसूत्री विभाजन (Meiosis ४ पेशी)", "गुणसूत्र संख्या निम्मी", "जनन पेशी"]
                },
                {
                  id: "st_gb_s12_01_05",
                  titleMr: "DNA, RNA आणि जनुकशास्त्र: DNA (Deoxyribonucleic Acid): वॉटसन व क्रिक यांनी १९५३ मध्ये 'द्विकुंडल प्रारूप' (Double Helix Model) शोधले; ४ नायट्रोजनयुक्त आम्लारी: ॲडेनाइन (A), थायमाइन (T), ग्वानिन (G), सायटोसीन (C); RNA: थायमाइन ऐवजी युरॅसिल (U) असतो; मानवात २३ जोड्या (४६ गुणसूत्रे: ४४ अलिंगी + २ लिंग गुणसूत्रे XX स्त्री, XY पुरुष); ग्रेगर मेंडेल (जनुकशास्त्राचे जनक - वाटाण्याच्या झाडावर प्रयोग, एकसंकर गुणोत्तर ३:१)",
                  titleEn: "DNA/RNA & Genetics: Watson & Crick (1953 DNA Double Helix; Bases: A, T, G, C); RNA contains Uracil (U) instead of Thymine; Human Chromosomes: 23 pairs (46: 44 autosomes + 2 sex chromosomes XX/XY); Gregor Mendel (Father of Genetics, 3:1 Monohybrid ratio)",
                  chips: ["वॉटसन व क्रिक (DNA द्विकुंडल १९५३)", "A-T आणि G-C", "RNA (युरॅसिल Uracil)", "४६ गुणसूत्रे (२३ जोड्या)", "ग्रेगर मेंडेल (जनुकशास्त्राचे जनक)"]
                }
              ],
              sources: [
                { book: "सामान्य विज्ञान प्रबोधिनी", standard: "डॉ. सचिन भस्के", chapterRef: "जीवशास्त्र: पेशीशास्त्र व जनुकशास्त्र" },
                { book: "बालभारती जीवशास्त्र", standard: "इयत्ता ११ वी व १२ वी", chapterRef: "Cell Structure & Molecular Basis of Inheritance" }
              ]
            }
          ]
        },


        // =========================================================================
        // विभाग E — मानवी शरीरशास्त्र व आरोग्यशास्त्र (Human Physiology & Health)
        // =========================================================================
        {
          id: "gb_sci_c13",
          code: "S13",
          section: "E",
          slug: "human-digestive-and-respiratory-systems",
          nameMr: "मानवी पचनसंस्था आणि श्वसनसंस्था: अवयव, पाचक विकरे व वायू विनिमय",
          nameEn: "Human Digestive & Respiratory Systems: Organs, Enzymes & Gas Exchange",
          name: "पचनसंस्था व श्वसनसंस्था (Digestive & Respiratory Systems)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 5,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_sci_c13",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_sci_c12",
          nextChapterId: "gb_sci_c14",
          metaDescriptionMr: "पचनसंस्था (लाळ ग्रंथी/टायलिन, जठर/पेप्सिन, यकृत/पित्तरस, स्वादुपिंड/ट्रिप्सिन, लहान आतडे/व्हिलाय), श्वसनसंस्था (फुप्फुसे, अल्व्हीओलाय, ऑक्सिजन व CO2 चे हिमोग्लोबिनद्वारे वहन).",
          metaDescriptionEn: "In-depth review of Human Digestive System (Alimentary canal, Ptyalin, Pepsin, Liver/Bile, Pancreas/Insulin-Trypsin, Small intestine villi) and Respiratory System (Lungs, Alveoli gas exchange, Haemoglobin oxygen transport, ATP cellular respiration).",
          notesJsonPath: "/data/notes/group_b/prelims/science/c13_digestive_respiratory.json",
          quizTag: "gb_sci_digestion_01",
          tags: ["Human Physiology", "Digestive System", "Digestive Enzymes Pepsin Trypsin", "Liver Bile", "Respiratory System Alveoli", "Haemoglobin Transport", "High-Weightage"],
          searchKeywords: ["human digestive system alimentary canal organs", "digestive enzymes salivary amylase ptyalin pepsin trypsin lipase", "liver largest gland bile juice gall bladder", "small intestine absorption villi", "human respiratory system lungs alveoli exchange of gases", "haemoglobin oxygen transport cellular respiration atp", "मानवी पचनसंस्था", "पाचक विकरे पेप्सिन ट्रिप्सिन", "यकृत पित्तरस", "लहान आतडे व्हिलाय", "मानवी श्वसनसंस्था", "फुप्फुसे अल्व्हीओलाय वायू विनिमय", "हिमोग्लोबिन"],
          topics: [
            {
              id: "top_gb_s13_01",
              nameMr: "अन्ननलिका, पाचक ग्रंथी, विकरांची कार्ये आणि श्वसन वायूंची देवाणघेवाण",
              nameEn: "Gastrointestinal Tract, Digestive Enzymes, Liver Metabolism & Pulmonary Mechanics",
              subtopics: [
                {
                  id: "st_gb_s13_01_01",
                  titleMr: "पचनसंस्था अवयव व मुखातील पचन: अन्ननलिका (९ मीटर लांब); मुख: दात (३२ दात: ८ पटाशीचे, ४ सुळे, ८ उपदाढा, १२ दाढा; दंतसूत्र २१२३/२१२३); लाळ ग्रंथी: टायलिन / ॲमायलेज विकर (स्टार्चचे माल्टोजमध्ये रूपांतर करते); जठर (Stomach): जठर रस (HCl आम्ल - जंतू मारणे, पेप्सिन विकर - प्रथिनांचे पचन, रेनिन - दुधाचे पचन, म्यूकस/श्लेष्मल आवरण)",
                  titleEn: "Alimentary Canal & Gastric Digestion: 9m tract; Teeth (Dental formula 2123/2123); Salivary glands (Ptyalin/Amylase converts starch to maltose); Stomach (HCl, Pepsin for protein, Renin for milk, Mucus barrier)",
                  chips: ["दंतसूत्र २१२३", "लाळ टायलिन विकर (स्टार्च पचन)", "जठर HCl आम्ल", "पेप्सिन (प्रथिन पचन)", "रेनिन"]
                },
                {
                  id: "st_gb_s13_01_02",
                  titleMr: "यकृत (Liver) आणि स्वादुपिंड (Pancreas): १) यकृत: शरीरातील सर्वात मोठी ग्रंथी (वजन १.२ ते १.५ किलो); पित्तरस (Bile Juice) तयार करणे (पित्ताशयात साठवणूक; पित्तरसात कोणतेही विकर नसते, ते मेदाचे पायसीकरण / Emulsification करते); अमोनियाचे युरियात रूपांतर; २) स्वादुपिंड: मिश्र ग्रंथी; स्वादुपिंड रस: ट्रिप्सिन (प्रथिने पचन), ॲमायलेज (कर्बोदके), लायपेस (मेद पचन); इन्सुलिन व ग्लुकागॉन संप्रेरके",
                  titleEn: "Liver & Pancreas: Liver is largest gland (1.5 kg, produces Bile stored in Gall Bladder, emulsifies fats, converts ammonia to urea); Pancreas (Mixed gland, produces Trypsin, Amylase, Lipase & Insulin hormone)",
                  chips: ["यकृत (सर्वात मोठी ग्रंथी)", "पित्तरस (मेदाचे पायसीकरण)", "स्वादुपिंड रस (ट्रिप्सिन, लायपेस)", "इन्सुलिन"]
                },
                {
                  id: "st_gb_s13_01_03",
                  titleMr: "लहान व मोठे आतडे: लहान आतडे (Small Intestine - लांबी ६ मीटर; अन्नपचन पूर्ण होते व पोषक द्रव्यांचे शोषण होते; आतड्याच्या आतील भिंतीवर लक्षावधी सूक्ष्म व्हिलाय / Villi असतात); मोठे आतडे (१.५ मीटर - पाण्याचे व क्षारांचे पुनर्शोषण, विष्ठा तयार होणे); अपेंडिक्स (अवशेषांग / Vestigial Organ)",
                  titleEn: "Intestines: Small Intestine (6m, complete digestion & nutrient absorption via micro-villi); Large Intestine (1.5m, water reabsorption, feces formation); Vermiform Appendix (Vestigial organ)",
                  chips: ["लहान आतडे (अन्न शोषण व्हिलाय Villi)", "६ मीटर लांबी", "मोठे आतडे (पाणी शोषण)", "अपेंडिक्स (अवशेषांग)"]
                },
                {
                  id: "st_gb_s13_01_04",
                  titleMr: "मानवी श्वसनसंस्था (Respiratory System): नासिकागुहा, ग्रसनी, स्वरयंत्र (Larynx/Voice Box), श्वासनलिका (Trachea), श्वासवाहिन्या व फुप्फुसे; वायू विनिमय: फुप्फुसातील लाखो सूक्ष्म वायुकोशांमध्ये (Alveoli) रक्तातील लाल पेशी (RBC) आणि हवा यांमध्ये O2 व CO2 ची देवाणघेवाण होते; मध्यपटल (Diaphragm) श्वासोच्छ्वासात मदत करतो",
                  titleEn: "Respiratory Anatomy: Pharynx, Larynx, Trachea, Bronchi, Lungs; Gas Exchange occurs in millions of microscopic Alveoli (air sacs) with blood capillaries; Diaphragm regulates ventilation volume",
                  chips: ["स्वरयंत्र Larynx", "श्वासनलिका Trachea", "वायुकोश Alveoli (वायू विनिमय)", "मध्यपटल Diaphragm"]
                },
                {
                  id: "st_gb_s13_01_05",
                  titleMr: "वायूंचे वहन व पेशीय श्वसन: ऑक्सिजनचे वहन रक्तातील हिमोग्लोबिनद्वारे (ऑक्सिहिमोग्लोबिन स्वरूपात ९७%); CO2 चे वहन बायकार्बोनेट (७०%), कार्बामिनो-हिमोग्लोबिन (२३%) व प्लाझ्मातून; पेशीय श्वसन: मायटोकॉन्ड्रियामध्ये क्रेब्स चक्राद्वारे (Krebs Cycle) १ ग्लुकोज रेणूपासून ३८ ATP ऊर्जा निर्माण होते",
                  titleEn: "Gas Transport & Cellular Respiration: 97% O2 transported as Oxyhaemoglobin; CO2 transported mostly as Bicarbonate ions (70%); Cellular respiration in mitochondria yields 38 ATP per glucose molecule",
                  chips: ["ऑक्सिहिमोग्लोबिन (O2 वहन)", "बायकार्बोनेट (CO2 वहन)", "क्रेब्स चक्र", "३८ ATP ऊर्जा"]
                }
              ],
              sources: [
                { book: "सामान्य विज्ञान प्रबोधिनी", standard: "डॉ. सचिन भस्के", chapterRef: "मानवी शरीरशास्त्र: पचनसंस्था व श्वसनसंस्था" },
                { book: "बालभारती जीवशास्त्र", standard: "इयत्ता ११ वी", chapterRef: "Digestion, Absorption & Breathing of Gases" }
              ]
            }
          ]
        },
        {
          id: "gb_sci_c14",
          code: "S14",
          section: "E",
          slug: "human-circulatory-system-blood-and-heart",
          nameMr: "मानवी रक्ताभिसरण संस्था: रक्त, रक्तगट, हृदय आणि रक्तदाब",
          nameEn: "Human Circulatory System: Blood Components, Blood Groups, Heart & Blood Pressure",
          name: "रक्ताभिसरण संस्था व रक्तगट (Circulatory System & Blood Groups)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 5,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_sci_c14",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_sci_c13",
          nextChapterId: "gb_sci_c15",
          metaDescriptionMr: "विल्यम हार्वे (१६२८), रक्ताचे घटक (प्लाझ्मा ५५%, RBC/इरिथ्रोसाईट, WBC/ल्युकोसाईट, प्लेटलेट्स), रक्तगट (कार्ल लँडस्टायनर - A, B, AB, O, Rh फॅक्टर, एरिथ्रोब्लास्टोसिस फिटलिस), आणि मानवी हृदय रचना.",
          metaDescriptionEn: "In-depth review of Circulatory System: William Harvey (1628), Blood components (Plasma 55%, RBC 120-day lifespan, WBC soldiers, Platelets/thrombocytes clotting), Karl Landsteiner Blood Groups (A, B, AB universal recipient, O universal donor, Rh factor), and Heart Anatomy.",
          notesJsonPath: "/data/notes/group_b/prelims/science/c14_circulatory_system.json",
          quizTag: "gb_sci_blood_01",
          tags: ["Human Physiology", "Circulatory System", "Blood Components RBC WBC", "Blood Groups Landsteiner", "Universal Donor O Negative", "Heart Anatomy", "High-Weightage"],
          searchKeywords: ["human circulatory system william harvey 1628", "blood composition plasma rbc wbc platelets", "red blood cells lifespan 120 days haemoglobin", "white blood cells immunity types", "blood groups karl landsteiner abo system", "universal donor o negative universal recipient ab positive", "rh factor erythroblastosis fetalis", "human heart four chambers double circulation", "मानवी रक्ताभिसरण संस्था", "रक्त घटक RBC WBC प्लेटलेट्स", "रक्तगट कार्ल लँडस्टायनर", "सर्वयोग्य दाता O सर्वयोग्य ग्राही AB", "Rh फॅक्टर", "हृदय रचना ४ कप्पे", "रक्तदाब १२०/८०"],
          topics: [
            {
              id: "top_gb_s14_01",
              nameMr: "रक्तद्रव, रक्तकणिका, लँडस्टायनर रक्तगट आणि हृदयाचे द्विसंचलन",
              nameEn: "Hematology, Leukocyte Profiling, ABO/Rh Systems & Cardiac Hemodynamics",
              subtopics: [
                {
                  id: "st_gb_s14_01_01",
                  titleMr: "रक्ताचे घटक (Blood Composition): प्रौढ मानवात सुमारे ५ ते ६ लिटर रक्त असते; pH = ७.४; दोन मुख्य भाग: १) रक्तद्रव (Plasma - ५५%: यात ९०% पाणी, प्रथिने: अल्ब्युमिन, ग्लोब्युलिन, फायब्रिनोजेन - रक्त गोठवणारे); २) रक्तकणिका (Blood Corpuscles - ४५%: RBC, WBC, प्लेटलेट्स)",
                  titleEn: "Blood Composition: 5-6 Litres in adults; pH 7.4; Plasma (55%: Water, Albumin, Globulin, Fibrinogen for clotting) & Blood Cells (45%: RBCs, WBCs, Platelets)",
                  chips: ["रक्त pH ७.४ (किंचित आम्लारी)", "रक्तद्रव Plasma ५५%", "रक्तपेशी ४५%", "फायब्रिनोजेन प्रथिन"]
                },
                {
                  id: "st_gb_s14_01_02",
                  titleMr: "रक्तपेशींचे प्रकार: १) तांबड्या पेशी (RBC / Erythrocytes: केंद्रक नसते, हिमोग्लोबिन असते, निर्मिती लाल अस्थिमज्जेत, आयुर्मान १२० दिवस, प्लीहा / Spleen मध्ये नाश - रक्ताचे स्मशानभूमी); २) पांढऱ्या पेशी (WBC / Leukocytes: शरीराचे सैनिक, केंद्रक असते, आयुर्मान २ ते ४ दिवस, प्रकार: न्युट्रोफिल, लिम्फोसाईट, मोनोसाईट); ३) रक्तपट्टीका (Platelets / Thrombocytes: केंद्रकरहित, रक्त गोठवण्यास मदत, डेंग्यूमध्ये संख्या घटते)",
                  titleEn: "Blood Cell Types: RBCs (No nucleus, biconcave, contain Haemoglobin, 120-day lifespan, destroyed in Spleen); WBCs (Immune soldiers, nucleated); Platelets (Blood clotting, thrombocytes, drop in Dengue)",
                  chips: ["RBC तांबड्या पेशी (आयुष्य १२० दिवस)", "प्लीहा Spleen (RBC चे स्मशान)", "WBC पांढऱ्या पेशी (सैनिक)", "प्लेटलेट्स (रक्त गोठवणे)"]
                },
                {
                  id: "st_gb_s14_01_03",
                  titleMr: "रक्तगट (ABO System): कार्ल लँडस्टायनर यांनी १९०० मध्ये A, B, O रक्तगट शोधले (डिकास्टेलो व स्टुर्ली यांनी AB रक्तगट शोधला); रक्तगट RBC वरील ॲन्टिजेन (Antigen) वरून ठरतो: १) A गट (A ॲन्टिजेन, b ॲन्टिबbody); २) B गट (B ॲन्टिजेन, a ॲन्टिबbody); ३) AB गट (A व B दोन्ही ॲन्टिजेन, ॲन्टिबbody नसते - 'सर्वयोग्य ग्राही / Universal Recipient'); ४) O गट (ॲन्टिजेन नसते, a व b दोन्ही ॲन्टिबbody - 'सर्वयोग्य दाता / Universal Donor')",
                  titleEn: "ABO Blood Groups: Karl Landsteiner (1900, Nobel 1930); Based on RBC surface antigens; AB Positive is Universal Recipient (No antibodies); O Negative is Universal Donor (No antigens)",
                  chips: ["कार्ल लँडस्टायनर १९००", "रक्तगट A B AB O", "सर्वयोग्य ग्राही (AB+)", "सर्वयोग्य दाता (O-)"]
                },
                {
                  id: "st_gb_s14_01_04",
                  titleMr: "Rh फॅक्टर व एरिथ्रोब्लास्टोसिस फिटलिस: लँडस्टायनर व विनर यांनी १९४० मध्ये रिसस (Rhesus) माकडात शोधला; Rh+ (ॲन्टिजेन उपस्थित - भारतात ९३%), Rh- (ॲन्टिजेन अनुपस्थित); एरिथ्रोब्लास्टोसिस फिटलिस (Erythroblastosis Fetalis): Rh- आई आणि Rh+ गर्भाशयातील बाळ यांच्यातील विसंगतीमुळे दुसऱ्या प्रसूतीवेळी बाळाच्या RBC चा नाश होणे (प्रतिबंधासाठी Rh- आईला RhoGAM इंजेक्शन देतात)",
                  titleEn: "Rh Factor & Erythroblastosis Fetalis: Discovered in Rhesus monkeys (1940); Rh- mother carrying Rh+ fetus risks hemolytic disease in 2nd pregnancy (prevented by RhoGAM anti-D injection)",
                  chips: ["Rh फॅक्टर (रिसस माकड)", "Rh विसंगती", "एरिथ्रोब्लास्टोसिस फिटलिस", "RhoGAM लस"]
                },
                {
                  id: "st_gb_s14_01_05",
                  titleMr: "मानवी हृदय रचना व रक्ताभिसरण: ४ कप्पे (२ आलिंद Atria + २ निलय Ventricles); डाव्या भागात शुद्ध (ऑक्सिजनयुक्त) रक्त, उजव्या भागात अशुद्ध (डीऑक्सिजनयुक्त) रक्त; द्विदली झडप (Mitral valve - डावीकडे), त्रिदली झडप (Tricuspid - उजवीकडे); पेसमेकर (SA Node - नैसर्गिक विद्युतस्पंदक); मानवी रक्ताभिसरण हे 'दुहेरी रक्ताभिसरण' (Double Circulation) असते; सामान्य रक्तदाब: १२०/८० mmHg (सिस्टोलिक १२० / डायस्टोलिक ८०, स्फिग्मोमॅनोमीटरने मोजतात)",
                  titleEn: "Heart Anatomy & Circulation: 4 chambers; Left side pure O2 blood, Right side deoxygenated blood; Bicuspid & Tricuspid valves; SA Node (Natural Pacemaker); Double Circulation; Normal BP 120/80 mmHg (Sphygmomanometer)",
                  chips: ["हृदयाचे ४ कप्पे", "SA Node नैसर्गिक पेसमेकर", "द्विदली व त्रिदली झडपा", "दुहेरी रक्ताभिसरण", "रक्तदाब १२०/८० mmHg (स्फिग्मोमॅनोमीटर)"]
                }
              ],
              sources: [
                { book: "सामान्य विज्ञान प्रबोधिनी", standard: "डॉ. सचिन भस्के", chapterRef: "मानवी शरीरशास्त्र: रक्ताभिसरण संस्था व रक्तगट" },
                { book: "बालभारती जीवशास्त्र", standard: "इयत्ता १२ वी", chapterRef: "Circulation and Body Fluids" }
              ]
            }
          ]
        },
        {
          id: "gb_sci_c15",
          code: "S15",
          section: "E",
          slug: "human-excretory-nervous-and-endocrine-systems",
          nameMr: "उत्सर्जन संस्था, मज्जासंस्था (मेंदू) आणि अंतःस्रावी ग्रंथी (हार्मोन्स)",
          nameEn: "Human Excretory, Nervous (Brain) & Endocrine (Hormones) Systems",
          name: "उत्सर्जन, मेंदू व अंतःस्रावी ग्रंथी (Excretion, Brain & Hormones)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 5,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_sci_c15",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_sci_c14",
          nextChapterId: "gb_sci_c16",
          metaDescriptionMr: "वृक्क/मूत्रपिंड (नेफ्रॉन - गाळण एकक), मेंदूचे ३ भाग (प्रमस्तिष्क, अनुमस्तिष्क, लंबमज्जा), चेतापेशी (Neuron), आणि अंतःस्रावी ग्रंथी (पिट्युटरी/मास्टर ग्रंथी, थायरॉईड/थायरॉक्सिन, स्वादुपिंड/इन्सुलिन, ॲड्रीनल).",
          metaDescriptionEn: "In-depth review of Excretory System (Kidneys, Nephron filtration), Nervous System (Cerebrum, Cerebellum balance, Medulla oblongata involuntary control, Neurons), and Endocrine Glands (Pituitary Master Gland, Thyroid/Thyroxine, Adrenal adrenaline, Pancreas/Insulin).",
          notesJsonPath: "/data/notes/group_b/prelims/science/c15_excretory_nervous_endocrine.json",
          quizTag: "gb_sci_excretory_01",
          tags: ["Human Physiology", "Excretory System Nephron", "Human Brain Cerebrum Cerebellum", "Nervous System Neuron", "Endocrine Glands Hormones", "Pituitary Thyroid Insulin", "High-Weightage"],
          searchKeywords: ["human excretory system kidney nephron structure", "dialysis artificial kidney", "human brain cerebrum cerebellum medulla oblongata reflex action", "neuron structure axon dendrite synapse", "endocrine system hormones pituitary master gland", "thyroid thyroxine goitre pancreas insulin diabetes adrenal", "मानवी उत्सर्जन संस्था", "मूत्रपिंड नेफ्रॉन Nephron", "मानवी मेंदू प्रमस्तिष्क अनुमस्तिष्क", "चेतापेशी Neuron", "अंतःस्रावी ग्रंथी हार्मोन्स", "पिट्युटरी मास्टर ग्रंथी", "थायरॉईड गलगंड", "इन्सुलिन मधुमेह"],
          topics: [
            {
              id: "top_gb_s15_01",
              nameMr: "मूत्रपिंड गाळण क्रिया, मेंदूची रचना, चेतासंस्था आणि संप्रेरके",
              nameEn: "Renal Filtration, Encephalic Architecture, Neuro-Transmission & Endocrine Regulators",
              subtopics: [
                {
                  id: "st_gb_s15_01_01",
                  titleMr: "मानवी उत्सर्जन संस्था (Excretory System): मुख्य अवयव: २ मूत्रपिंड (Kidneys - घेवड्याच्या आकाराचे, वजन प्रत्येकी १५० ग्रॅम); मूत्रपिंडाचे रचनात्मक व कार्यात्मक एकक: नेफ्रॉन (Nephron - प्रत्येक मूत्रपिंडात सुमारे १० लाख नेफ्रॉन); बोमन्स कॅप्सूल (Bowman's Capsule) व ग्लोमेरुलसद्वारे रक्तातील युरियाचे गाळण (Ultrafiltration); दिवसाला सुमारे १८० लिटर रक्त गाळले जाते व १ ते १.५ लिटर मूत्र तयार होते; डायलिसिस (Dialysis - कृत्रिम मूत्रपिंड)",
                  titleEn: "Excretory System: Kidneys (Bean-shaped, 150g); Functional unit is Nephron (~1 million per kidney); Bowman's Capsule & Glomerular Ultrafiltration; Filters 180L fluid/day, yields 1.5L urine; Dialysis",
                  chips: ["मूत्रपिंड Kidney", "नेफ्रॉन Nephron (गाळण एकक)", "बोमन्स कॅप्सूल", "डायलिसिस (कृत्रिम गाळण)"]
                },
                {
                  id: "st_gb_s15_01_02",
                  titleMr: "चेतापेशी (Neuron): मानवी शरीरातील सर्वात लांब पेशी; रचना: सायटॉन (पेशीकाय), डेंड्रॉईट्स (वृक्षिका) आणि ॲक्सॉन (अक्षतंतू); सायनॅप्स (Synapse - दोन चेतापेशींमधील जोडणी); चेतावेगाचे वहन विद्युत-रासायनिक (Electro-chemical) स्वरूपात होते",
                  titleEn: "Neuron (Nerve Cell): Longest cell in human body; Anatomy: Cyton (Cell body), Dendrites, Axon; Synaptic gap transmission via chemical neurotransmitters",
                  chips: ["चेतापेशी (Neuron सर्वात लांब पेशी)", "ॲक्सॉन व डेंड्रॉईट्स", "सायनॅप्स (Synapse)", "चेतावेग"]
                },
                {
                  id: "st_gb_s15_01_03",
                  titleMr: "मानवी मेंदू (Human Brain): वजन सुमारे १३०० ते १४०० ग्रॅम; मेनिंजेस (Meninges) संरक्षक आवरणे; ३ मुख्य भाग: १) प्रमस्तिष्क (Cerebrum - मेंदूचा ८०% मोठा भाग, बुद्धिमत्ता, स्मृती, विचार, भावनांचे केंद्र); २) अनुमस्तिष्क (Cerebellum - लहान मेंदू: शरीराचा तोल सांभाळणे व स्नायूंच्या हालचालींचे समन्वय; दारूमुळे हा भाग प्रभावित होतो); ३) लंबमज्जा (Medulla Oblongata - अनैच्छिक क्रियांचे नियंत्रण: हृदयाचे ठोके, श्वासोच्छ्वास, खोकणे, शिंकणे); मेरुदंड / पाठीचा कणा (Spinal Cord - प्रतिक्षिप्त क्रिया / Reflex Actions चे केंद्र)",
                  titleEn: "Human Brain: 1300-1400g; 3 Units: Cerebrum (Intelligence, memory, voluntary actions), Cerebellum (Little brain: Body posture balance & coordination, impaired by alcohol), Medulla Oblongata (Involuntary controls: heartbeat, respiration); Spinal Cord (Reflex Actions)",
                  chips: ["प्रमस्तिष्क Cerebrum (बुद्धिमत्ता, स्मृती)", "अनुमस्तिष्क Cerebellum (शारीरिक तोल)", "लंबमज्जा Medulla (हृदय व श्वसन नियंत्रण)", "प्रतिक्षिप्त क्रिया Reflex Action"]
                },
                {
                  id: "st_gb_s15_01_04",
                  titleMr: "अंतःस्रावी ग्रंथी (Endocrine Glands) व संप्रेरके (Hormones): वाहिनीविरहित ग्रंथी (Ductless): १) पियुषिका ग्रंथी (Pituitary Gland - 'मास्टर ग्रंथी / मुख्य ग्रंथी' - मेंदूच्या तळाशी; वाढीचे संप्रेरक GH, TSH, ACTH स्रवते; GH अभावाने खुजेपणा Dwarfism, अतिस्रावाने Gigantism); २) थायरॉईड ग्रंथी (अवटू ग्रंथी - गळ्यात; थायरॉक्सिन संप्रेरक निर्मितीसाठी आयोडीन आवश्यक; अभावाने गलगंड / Goitre रोग); ३) अधिवृक्क ग्रंथी (Adrenal Gland - मूत्रपिंडावर; ॲड्रेनलिन - 'लढा किंवा पळा / Fight or Flight' आणीबाणी संप्रेरक)",
                  titleEn: "Endocrine Glands & Hormones: Pituitary (Master Gland at brain base: Growth Hormone GH, dwarfism/gigantism); Thyroid (Neck: Thyroxine requires Iodine, deficiency causes Goitre); Adrenal (Emergency 'Fight or Flight' Adrenaline)",
                  chips: ["पिट्युटरी (मास्टर ग्रंथी)", "थायरॉईड (थायरॉक्सिन - गलगंड)", "ॲड्रेनलिन (लढा किंवा पळा Fight or Flight)", "आयोडीन"]
                },
                {
                  id: "st_gb_s15_01_05",
                  titleMr: "स्वादुपिंड संप्रेरके आणि प्रजनन हार्मोन्स: स्वादुपिंडातील लँगरहॅन्सच्या द्वीपसमूहातील (Islets of Langerhans) बीटा पेशींमधून 'इन्सुलिन' (Insulin - रक्तातील ग्लुकोज कमी करणे; अभावामुळे मधुमेह / Diabetes Mellitus रोग) व अल्फा पेशींमधून 'ग्लुकागॉन' (ग्लुकोज वाढवणे); पुरुष संप्रेरक: टेस्टोस्टेरॉन (वृषण); स्त्री संप्रेरके: इस्ट्रोजेन व प्रोजेस्टेरॉन (अंडाशय)",
                  titleEn: "Pancreatic & Reproductive Hormones: Beta cells produce Insulin (Lowers blood glucose, deficiency causes Diabetes Mellitus), Alpha cells produce Glucagon; Male: Testosterone; Female: Estrogen & Progesterone",
                  chips: ["इन्सुलिन (बीटा पेशी - मधुमेह)", "ग्लुकागॉन", "टेस्टोस्टेरॉन", "इस्ट्रोजेन व प्रोजेस्टेरॉन"]
                }
              ],
              sources: [
                { book: "सामान्य विज्ञान प्रबोधिनी", standard: "डॉ. सचिन भस्के", chapterRef: "मानवी शरीरशास्त्र: उत्सर्जन, मज्जासंस्था व हार्मोन्स" },
                { book: "बालभारती जीवशास्त्र", standard: "इयत्ता १२ वी", chapterRef: "Control and Coordination & Excretion" }
              ]
            }
          ]
        },
        {
          id: "gb_sci_c16",
          code: "S16",
          section: "E",
          slug: "human-diseases-epidemiology-pathogens-and-immunity",
          nameMr: "मानवी रोग: जिवाणू, विषाणू, प्रोटोझोआजन्य आजार आणि रोगप्रतिकारशक्ती",
          nameEn: "Human Diseases: Bacterial, Viral, Protozoan Infections, Vectors & Immunology",
          name: "मानवी रोग व आरोग्यशास्त्र (Human Diseases & Pathogens)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 6,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_sci_c16",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_sci_c15",
          nextChapterId: "gb_sci_c17",
          metaDescriptionMr: "जिवाणूजन्य रोग (क्षय रोग/TB, विषमज्वर/टायफॉईड, पटकी/कॉलरा), विषाणूजन्य रोग (पोलिओ, हिपॅटायटीस, एड्स/HIV, रेबीज, डेंग्यू), डासांमुळे होणारे आजार (हिवताप/मलेरिया, चिकुनगुनिया), आणि लसीकरण (BCG, DPT, Covaxin).",
          metaDescriptionEn: "In-depth review of Infectious Diseases: Bacterial (TB, Typhoid, Cholera, Leprosy), Viral (Polio, Hepatitis, AIDS ELISA/Western blot, Rabies, Dengue, Swine Flu), Protozoan (Malaria Plasmodium, Amoebiasis), Vectors, and Vaccines (BCG, DPT, MMR, Covaxin).",
          notesJsonPath: "/data/notes/group_b/prelims/science/c16_human_diseases.json",
          quizTag: "gb_sci_diseases_01",
          tags: ["Health & Hygiene", "Human Diseases", "Bacterial Infections TB", "Viral Infections AIDS Polio", "Malaria Female Anopheles", "Vaccines BCG DPT", "High-Weightage"],
          searchKeywords: ["human diseases pathogens vectors", "bacterial diseases tuberculosis typhoid cholera leprosy", "viral diseases aids hiv elisa test polio rabies dengue", "protozoan diseases malaria plasmodium female anopheles", "dengue aedes aegypti chikungunya", "vaccines bcg dpt pentavalent pulse polio", "मानवी रोग", "जिवाणूजन्य रोग क्षयरोग टायफॉईड", "विषाणूजन्य रोग एड्स पोलिओ रेबीज", "डेंग्यू एडिस इजिप्ती डास", "मलेरिया प्लाझमोडियम डास", "लसीकरण BCG DPT"],
          topics: [
            {
              id: "top_gb_s16_01",
              nameMr: "रोगकारक सूक्ष्मजीव, प्रसार माध्यमे, लक्षणे, तपासण्या आणि लसीकरण",
              nameEn: "Pathogenic Taxonomy, Vector Epidemiology, Diagnostic Tests & Vaccines",
              subtopics: [
                {
                  id: "st_gb_s16_01_01",
                  titleMr: "जिवाणूजन्य रोग (Bacterial Diseases - MPSC हमखास प्रश्न): १) क्षयरोग (TB - मायकोबॅक्टेरियम ट्युबरक्युलॉसिस, तपासणी: मँटोक्स टेस्ट, लस: BCG); २) विषमज्वर (Typhoid - साल्मोनेला टायफी, तपासणी: विडाल टेस्ट / Widal Test); ३) पटकी (Cholera - विब्रिओ कॉलरी); ४) कुष्ठरोग (Leprosy / हॅन्सन रोग - मायकोबॅक्टेरियम लेप्री); ५) धनुर्वात (Tetanus - क्लॉस्ट्रिडियम टिटॅनी); ६) घटसर्प (Diphtheria) व डांग्या खोकला (Pertussis)",
                  titleEn: "Bacterial Diseases: Tuberculosis (Mycobacterium tuberculosis, Mantoux test, BCG vaccine), Typhoid (Salmonella typhi, Widal test), Cholera (Vibrio cholerae), Leprosy (Hansen's disease, Mycobacterium leprae), Tetanus, Diphtheria, Pertussis",
                  chips: ["क्षयरोग TB (BCG लस, डॉट्स DOTS)", "टायफॉईड (विडाल टेस्ट Widal)", "कुष्ठरोग (हॅन्सन रोग)", "पटकी कॉलरा", "धनुर्वात टिटॅनस"]
                },
                {
                  id: "st_gb_s16_01_02",
                  titleMr: "विषाणूजन्य रोग (Viral Diseases): १) पोलिओ (Poliovirus - मज्जासंस्थेवर हल्ला, सालक लस इंजेक्शन व साबिन ओरल ड्रॉप्स); २) एड्स (AIDS - HIV रेट्रोव्हायरस, T-Helper पेशी नष्ट करतो, चाचण्या: ELISA टेस्ट व वेस्टर्न ब्लॉट टेस्ट); ३) रेबीज (हायड्रोफोबिया / पाण्याची भीती - पिसाळलेला कुत्रा चावल्याने); ४) कावीळ/हिपॅटायटीस (Hepatitis B रक्ताद्वारे, A व E दूषित पाण्याद्वारे); ५) स्वाइन फ्लू (H1N1) व बर्ड फ्लू (H5N1); ६) गोवर व कांजिण्या",
                  titleEn: "Viral Diseases: Polio (Enterovirus, Salk/Sabin vaccines), AIDS (HIV retrovirus, attacks CD4 T-cells, ELISA & Western Blot tests), Rabies (Hydrophobia via dog bite), Hepatitis (Liver inflammation), Swine Flu (H1N1), Bird Flu (H5N1)",
                  chips: ["एड्स AIDS (HIV रेट्रोव्हायरस, ELISA टेस्ट)", "पोलिओ (साबिन ओरल लस)", "रेबीज (हायड्रोफोबिया)", "स्वाइन फ्लू (H1N1)", "कावीळ"]
                },
                {
                  id: "st_gb_s16_01_03",
                  titleMr: "डासांमुळे होणारे आजार (Vector-Borne Diseases): १) हिवताप (Malaria: प्लाझमोडियम प्रोटोझोआमुळे - डासाची मादी 'ॲनोफिलीस' प्रसार करते, RBC फुटतात, औषध: क्लोरोक्विन / सिंकोना झाडाची साल कुनाइन); २) डेंग्यू (Dengue: फ्लेव्हीव्हायरस - 'एडिस इजिप्ती' डासाची मादी, प्लेटलेट्स झपाट्याने कमी होतात); ३) चिकनगुनिया (एडिस इजिप्ती डास); ४) हत्तीरोग (Filariasis - वुचेरेरिया बॅनक्रॉफ्टी कृमी, 'क्युलेक्स' डासाची मादी)",
                  titleEn: "Vector-Borne Illnesses: Malaria (Plasmodium protozoa via Female Anopheles mosquito, Quinine/Chloroquine treatment); Dengue (Flavivirus via Aedes aegypti, platelet drop); Chikungunya (Aedes); Filariasis (Wuchereria via Culex mosquito)",
                  chips: ["मलेरिया (ॲनोफिलीस मादी, कुनाइन)", "डेंग्यू (एडिस इजिप्ती, प्लेटलेट्स घट)", "हत्तीरोग (क्युलेक्स डास)", "चिकनगुनिया"]
                },
                {
                  id: "st_gb_s16_01_04",
                  titleMr: "प्रोटोझोआ व कवकजन्य रोग: १) अमिबियासिस (अमांश - एन्टअमिबा हिस्टोलिटिका); २) काळा आजार (Kala-Azar / लीशमॅनियासिस - सँडफ्लाय वाळूची माशी प्रसार करते); ३) स्लीपिंग सिकनेस (ट्रेपॅनोसोमा - त्से-त्से माशी); ४) कवकजन्य रोग (Fungal: गजकर्ण/Ringworm, खरुज, ॲथलेट्स फूट)",
                  titleEn: "Protozoan & Fungal Diseases: Amoebiasis (Entamoeba histolytica), Kala-Azar (Leishmania via Sandfly), African Sleeping Sickness (Trypanosoma via Tsetse fly); Fungal: Ringworm, Athlete's foot",
                  chips: ["अमांश (अमिबियासिस)", "काळा आजार (सँडफ्लाय माशी)", "स्लीपिंग सिकनेस (त्से-त्से माशी)", "गजकर्ण Ringworm"]
                },
                {
                  id: "st_gb_s16_01_05",
                  titleMr: "प्रमुख लस व प्रतिकारशक्ती: १) BCG (क्षयरोगासाठी); २) DPT त्रिगुणी लस (घटसर्प Diphtheria, डांग्या खोकला Pertussis, धनुर्वात Tetanus); ३) MMR (गोवर Measles, गालगुंड Mumps, रुबेला Rubella); ४) पेंटाव्हॅलेंट लस (५ रोग संरक्षण); नैसर्गिक प्रतिकारशक्ती विरुद्ध संपादित प्रतिकारशक्ती (B-पेशी व T-पेशी)",
                  titleEn: "Vaccines & Immunisation: BCG (Tuberculosis), DPT Triple Vaccine (Diphtheria, Pertussis, Tetanus), MMR, Pentavalent (5 diseases); Active vs Passive Immunity; B-Lymphocytes & T-Cells",
                  chips: ["BCG लस (क्षयरोग)", "DPT त्रिगुणी लस", "MMR लस", "पल्स पोलिओ मोहीम"]
                }
              ],
              sources: [
                { book: "सामान्य विज्ञान प्रबोधिनी", standard: "डॉ. सचिन भस्के", chapterRef: "आरोग्यशास्त्र: मानवी रोग व साथरोग" },
                { book: "बालभारती विज्ञान", standard: "इयत्ता ९ वी व १२ वी", chapterRef: "मानवी आरोग्य व रोग (Human Health & Diseases)" }
              ]
            }
          ]
        },
        {
          id: "gb_sci_c17",
          code: "S17",
          section: "E",
          slug: "nutrition-vitamins-minerals-and-deficiency-diseases",
          nameMr: "पोषण, जीवनसत्त्वे (Vitamins), खनिजे आणि अभावजन्य आजार",
          nameEn: "Human Nutrition, Vitamins Classification, Mineral Deficiencies & Balanced Diet",
          name: "पोषण व जीवनसत्त्वे (Nutrition, Vitamins & Minerals)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_sci_c17",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_sci_c16",
          nextChapterId: "gb_sci_c18",
          metaDescriptionMr: "स्निग्ध विद्राव्य जीवनसत्त्वे (A, D, E, K), जल विद्राव्य जीवनसत्त्वे (B-Complex, C), रासायनिक नावे, स्त्रोत, जीवनसत्त्वांच्या अभावामुळे होणारे रोग (रातांधळेपणा, स्कर्व्ही, मुडदूस, बेरीबेरी), आणि प्रथिन कुपोषण (क्वाशिओरकर, म्रॅस्मस).",
          metaDescriptionEn: "In-depth review of Human Nutrition: Fat-soluble (A, D, E, K) vs Water-soluble (B-Complex, C) Vitamins, Chemical names, Sources, Deficiency diseases (Night blindness, Scurvy, Rickets, Beriberi, Pellagra), Mineral deficiencies (Iron Anaemia, Iodine Goitre), and Protein Malnutrition (Kwashiorkor, Marasmus).",
          notesJsonPath: "/data/notes/group_b/prelims/science/c17_nutrition_vitamins.json",
          quizTag: "gb_sci_nutrition_01",
          tags: ["Health & Hygiene", "Nutrition", "Vitamins A B C D E K", "Chemical Names", "Deficiency Diseases", "Scurvy Rickets", "Protein Malnutrition Kwashiorkor", "High-Weightage"],
          searchKeywords: ["vitamins chemical names sources deficiency diseases", "fat soluble vitamins a d e k", "water soluble vitamins b complex c", "vitamin a retinol night blindness xerophthalmia", "vitamin c ascorbic acid scurvy", "vitamin d calciferol rickets", "vitamin b1 thiamine beriberi b3 niacin pellagra", "protein malnutrition kwashiorkor marasmus", "पोषण व जीवनसत्त्वे", "रासायनिक नावे रेटिनॉल कॅल्सिफेरॉल", "स्कर्व्ही मुडदूस बेरीबेरी", "रातांधळेपणा जीवनसत्त्व अ", "प्रथिन कुपोषण क्वाशिओरकर म्रॅस्मस"],
          topics: [
            {
              id: "top_gb_s17_01",
              nameMr: "जीवनसत्त्वे वर्गीकरण, रासायनिक नावे, पोषणतत्वे आणि कुपोषण",
              nameEn: "Vitamin Biochemistry, Nomenclature, Mineral Pathologies & Malnutrition",
              subtopics: [
                {
                  id: "st_gb_s17_01_01",
                  titleMr: "जीवनसत्त्वांचे वर्गीकरण: सी. फंक (Casimir Funk) यांनी १९१२ मध्ये 'व्हिटॅमिन' शब्द शोधला; दोन गट: १) मेदात/स्निग्ध विद्राव्य (Fat-Soluble: जीवनसत्त्व A, D, E, K - यकृतात साठवले जातात); २) पाण्यात विद्राव्य (Water-Soluble: जीवनसत्त्व B-Complex आणि जीवनसत्त्व C - लघवीवाटे उत्सर्जित होतात, शरीरात साठवले जात नाहीत, दैनंदिन आहारात लागतात)",
                  titleEn: "Vitamin Classification (Casimir Funk 1912): Fat-Soluble (A, D, E, K - stored in liver) vs Water-Soluble (B-Complex & C - excreted in urine, require daily intake)",
                  chips: ["कॅसिमिर फंक १९१२", "मेदात विद्राव्य (A, D, E, K)", "पाण्यात विद्राव्य (B, C)", "यकृतात साठवणूक"]
                },
                {
                  id: "st_gb_s17_01_02",
                  titleMr: "मेदात विद्राव्य जीवनसत्त्वे (A, D, E, K - रासायनिक नावे व आजार): १) जीवनसत्त्व A (रेटिनॉल / Retinol - स्त्रोत: गाजर, पपई; अभावामुळे: रातांधळेपणा Night Blindness व झेरॉफथॅल्मिया कोरडे डोळे); २) जीवनसत्त्व D (कॅल्सिफेरॉल / Calciferol - 'सूर्यप्रकाश जीवनसत्त्व'; अभावामुळे: बालकांमध्ये मुडदूस / Rickets व मोठ्यांमध्ये अस्थिमृदुता / Osteomalacia); ३) जीवनसत्त्व E (टोकोफेरॉल / Tocopherol - 'सौंदर्य/वांझत्वविरोधी जीवनसत्त्व'; अभावामुळे: वांझत्व, स्नायूंची अशक्तता); ४) जीवनसत्त्व K (फायलोक्विनोन / Phylloquinone - रक्ताची गुठळी होण्यासाठी अत्यावश्यक; अभावामुळे: रक्त न गोठणे)",
                  titleEn: "Fat-Soluble Vitamins: Vit A (Retinol - Night blindness, Xerophthalmia), Vit D (Calciferol / Sunshine vitamin - Rickets in children, Osteomalacia in adults), Vit E (Tocopherol / Antisterility), Vit K (Phylloquinone - Blood clotting failure)",
                  chips: ["व्हिटॅमिन A (रेटिनॉल - रातांधळेपणा)", "व्हिटॅमिन D (कॅल्सिफेरॉल - मुडदूस)", "व्हिटॅमिन E (टोकोफेरॉल)", "व्हिटॅमिन K (फायलोक्विनोन - रक्त गोठवणे)"]
                },
                {
                  id: "st_gb_s17_01_03",
                  titleMr: "पाण्यात विद्राव्य जीवनसत्त्वे (B-Complex व C): १) B1 (थायामिन - बेरीबेरी रोग); २) B2 (रायबोफ्लेविन - चिलॉसिस/ओठ फाटणे); ३) B3 (नियासिन - पेलाग्रा रोग / त्वचारोग); ४) B9 (फॉलिक ॲसिड - ॲनिमिया / रक्तक्षय); ५) B12 (सायनोकोबालामीन - कोबाल्ट धातू असतो; अभावामुळे: घातक ॲनिमिया / Pernicious Anaemia); ६) जीवनसत्त्व C (ॲस्कॉर्बिक ॲसिड / Ascorbic Acid - लिंबू, आवळा; अभावामुळे: स्कर्व्ही / हिरड्यांमधून रक्त येणे)",
                  titleEn: "Water-Soluble Vitamins: B1 (Thiamine - Beriberi), B2 (Riboflavin - Cheilosis), B3 (Niacin - Pellagra), B9 (Folic acid - Anaemia), B12 (Cyanocobalamin contains Cobalt - Pernicious Anaemia), Vit C (Ascorbic Acid in amla/citrus - Scurvy)",
                  chips: ["B1 थायामिन (बेरीबेरी)", "B3 नियासिन (पेलाग्रा)", "B12 सायनोकोबालामीन (कोबाल्ट धातू)", "व्हिटॅमिन C ॲस्कॉर्बिक (स्कर्व्ही आवळा)"]
                },
                {
                  id: "st_gb_s17_01_04",
                  titleMr: "महत्त्वाची खनिजे व अभावजन्य विकार: १) लोह (Iron - हिमोग्लोबिनचा घटक; अभावामुळे: ॲनिमिया / पांडुरोग); २) आयोडीन (Iodine - थायरॉईड ग्रंथीसाठी; अभावामुळे: गलगंड / Goitre); ३) कॅल्शियम व फॉस्फरस (हाडे व दातांची मजबुती); ४) सोडियम व पोटॅशियम (इलेक्ट्रोलाईट समतोल व चेतासंस्थेचे वहन)",
                  titleEn: "Essential Minerals & Pathologies: Iron (Haemoglobin constituent, deficiency causes Anaemia), Iodine (Thyroxine, deficiency causes Simple Goitre), Calcium & Phosphorus (Bones/Teeth), Sodium/Potassium (Electrolyte balance)",
                  chips: ["लोह (ॲनिमिया / रक्तक्षय)", "आयोडीन (गलगंड Goitre)", "कॅल्शियम (हाडे व दात)", "सोडियम-पोटॅशियम"]
                },
                {
                  id: "st_gb_s17_01_05",
                  titleMr: "प्रथिन कुपोषण आजार (Protein Energy Malnutrition - PEM): १) क्वाशिओरकर (Kwashiorkor - प्रथिनांच्या अभावामुळे बालकांचे पोट फुगणे, हातपाय बारीक होणे, सूज येणे); २) म्रॅस्मस / सुकटी (Marasmus - प्रथिने व उष्मांक/कॅलरी दोघांच्याही अभावामुळे मूल अत्यंत हडकुळे व अशक्त होणे, बरगड्या स्पष्ट दिसणे)",
                  titleEn: "Protein Energy Malnutrition (PEM): Kwashiorkor (Protein deficiency with pot-belly, edema) vs Marasmus (Severe calorie + protein deficiency causing extreme muscle wasting and prominent ribs)",
                  chips: ["क्वाशिओरकर (पोट फुगणे, प्रथिन अभाव)", "म्रॅस्मस / सुकटी (हडकुळेपणा)", "कुपोषण PEM"]
                }
              ],
              sources: [
                { book: "सामान्य विज्ञान प्रबोधिनी", standard: "डॉ. सचिन भस्के", chapterRef: "आरोग्यशास्त्र: पोषण व जीवनसत्त्वे" },
                { book: "बालभारती विज्ञान", standard: "इयत्ता ७ वी व ९ वी", chapterRef: "आहार आणि पोषण" }
              ]
            }
          ]
        },
        {
          id: "gb_sci_c18",
          code: "S18",
          section: "E",
          slug: "science-master-revision-scientific-names-units-and-pyq-trends",
          nameMr: "सामान्य विज्ञान मास्टर रिव्हिजन: वैज्ञानिक नावे, एकके, शोध व PYQ विश्लेषण",
          nameEn: "Science Master Revision: Scientific Names, SI Units, Inventions & PYQ Trends",
          name: "विज्ञान मास्टर रिव्हिजन (Master Revision: Units & PYQs)",
          category: "REVISION",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_sci_c18",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_sci_c17",
          nextChapterId: null,
          metaDescriptionMr: "भौतिकशास्त्रातील सर्व SI एकके (दाब, वारंवारता, रोध, शक्ती), महत्त्वाचे शोध व शास्त्रज्ञ, प्राणी व वनस्पतींची शास्त्रीय नावे, आणि MPSC गट-ब पूर्व परीक्षेतील १० वर्षांचे PYQ विश्लेषण.",
          metaDescriptionEn: "Master consolidation module: Complete SI Units table (Pascal, Hertz, Dioptre, Ohm, Joule, Watt), Scientific binomial names of flora/fauna, Historical scientific discoveries, and 10-year MPSC Group B PYQ trend analysis.",
          notesJsonPath: "/data/notes/group_b/prelims/science/c18_master_revision.json",
          quizTag: "gb_sci_revision_01",
          tags: ["Revision", "Physics SI Units", "Scientific Discoveries", "Binomial Nomenclature", "PYQ Trends", "Elimination Heuristics", "High-Weightage"],
          searchKeywords: ["general science master revision si units", "scientific discoveries inventors list", "binomial nomenclature scientific names plants animals", "mpsc group b science pyq trends", "elimination techniques science questions", "सर्व SI एकके भौतिकशास्त्र", "वैज्ञानिक शोध व शास्त्रज्ञ", "शास्त्रीय नावे", "मास्टर रिव्हिजन", "PYQ विश्लेषण"],
          topics: [
            {
              id: "top_gb_s18_01",
              nameMr: "SI एककांची मास्टर सूची, शास्त्रीय नावे, शोधकर्ते आणि PYQ एलिमिनेशन ट्रिक्स",
              nameEn: "SI Metrology Concordance, Binomial Nomenclature, Discoverers & Exam Tactics",
              subtopics: [
                {
                  id: "st_gb_s18_01_01",
                  titleMr: "भौतिक राशी व त्यांची SI एकके मास्टर तक्ता: १) बल: न्यूटन (N); २) कार्य व ऊर्जा: ज्यूल (J); ३) शक्ती: वॅट (W); ४) दाब: पास्कल (Pa); ५) वारंवारता: हर्ट्झ (Hz); ६) विद्युत प्रभार: कुलॉम (C); ७) विद्युतधारा: अँपिअर (A); ८) विभवांतर: व्होल्ट (V); ९) विद्युत रोध: ओहम (Ω); १०) भिंगाची शक्ती: डायॉप्टर (D); ११) चुंबकीय क्षेत्र: टेस्ला (T)",
                  titleEn: "Master Table of SI Units: Force (Newton), Work/Energy (Joule), Power (Watt), Pressure (Pascal), Frequency (Hertz), Charge (Coulomb), Current (Ampere), Potential (Volt), Resistance (Ohm), Lens Power (Dioptre), Magnetic Field (Tesla)",
                  chips: ["दाब (पास्कल)", "वारंवारता (हर्ट्झ)", "भिंग शक्ती (डायॉप्टर)", "रोधाचे एकक (ओहम)", "ऊर्जा (ज्यूल)"]
                },
                {
                  id: "st_gb_s18_01_02",
                  titleMr: "महत्त्वाचे वैज्ञानिक शोध व शास्त्रज्ञ: १) पेनिसिलिन (पहिले अँटिबायोटिक): अलेक्झांडर फ्लेमिंग (१९२८); २) देवीची लस (जगातील पहिली लस): एडवर्ड जेनर (१७९६); ३) क्ष-किरण (X-Rays): विल्हेल्म रॉन्टजेन (१८९५); ४) इलेक्ट्रॉन: जे. जे. थॉमसन; ५) प्रोटॉन: रुदरफोर्ड; ६) न्यूट्रॉन: जेम्स चॅडविक; ७) रक्ताभिसरण: विल्यम हार्वे; ८) रक्तगट: कार्ल लँडस्टायनर",
                  titleEn: "Landmark Discoveries: Penicillin (Alexander Fleming 1928), Smallpox Vaccine (Edward Jenner 1796), X-Rays (Roentgen 1895), Circulation (Harvey 1628), Blood Groups (Landsteiner 1900)",
                  chips: ["पेनिसिलिन (अलेक्झांडर फ्लेमिंग)", "देवीची लस (एडवर्ड जेनर)", "क्ष-किरण X-Rays (रॉन्टजेन)", "विल्यम हार्वे रक्ताभिसरण"]
                },
                {
                  id: "st_gb_s18_01_03",
                  titleMr: "वनस्पती व प्राण्यांची शास्त्रीय नावे (दहा प्रमुख उदाहरणे): मानव: होमो सेपियन्स (Homo sapiens); आंबा: मॅन्जिफेरा इंडिका (Mangifera indica); वाघ: पँथेरा टायग्रीस (Panthera tigris); गाय: बॉस इंडिकस (Bos indicus); तुळस: ओसीमम सँक्टम; बेडूक: राणा टिग्रीना; तांदूळ: ओरिझा सटायव्हा; गहू: ट्रिटिकम ॲस्टिव्हम",
                  titleEn: "Binomial Scientific Names: Human (Homo sapiens), Mango (Mangifera indica), Tiger (Panthera tigris), Cow (Bos indicus), Tulsi (Ocimum sanctum), Frog (Rana tigrina), Rice (Oryza sativa)",
                  chips: ["मानव (Homo sapiens)", "आंबा (Mangifera indica)", "वाघ (Panthera tigris)", "कार्ल लिनियस द्विनाम पद्धत"]
                },
                {
                  id: "st_gb_s18_01_04",
                  titleMr: "MPSC संयुक्त पूर्व परीक्षा सामान्य विज्ञान PYQ कल व एलिमिनेशन तंत्र: मागील १० वर्षांत विचारलेले प्रश्न; विज्ञानातील १५ पैकी ७-८ प्रश्न थेट आरोग्यशास्त्र, रोग व जीवनसत्त्वांवर असतात; भौतिकशास्त्रातील संख्यात्मक गणिते सोडवताना एकके तपासणे; पर्यायांमधील विसंगत वैज्ञानिक संकल्पना एलिमिनेट करण्याची अचूक पद्धत",
                  titleEn: "MPSC Prelims Science Trend Analysis: Recurring Question Patterns (Diseases, Vitamins, Plant Hormones, Optics, Units) & Scientific Elimination Rules",
                  chips: ["PYQ ट्रेंड विश्लेषण", "एलिमिनेशन पद्धत", "रोग व जीवनसत्त्वे हमखास प्रश्न", "१० वर्षांचे विश्लेषण"]
                }
              ],
              sources: [
                { book: "सामान्य विज्ञान प्रबोधिनी", standard: "डॉ. सचिन भस्के", chapterRef: "मास्टर तक्ते, एकके व शोध" },
                { book: "MPSC मागील वर्षांच्या प्रश्नपत्रिका (PYQ संच)", standard: "२०१३ ते २०२५", chapterRef: "सामान्य विज्ञान प्रश्न संच व विश्लेषण" }
              ]
            }
          ]
        }
      ]
    },


    {
      id: "gb_pre_current_affairs",
      code: "CA",
      slug: "current-affairs-maharashtra-india-international",
      nameMr: "चालू घडामोडी (जागतिक, भारत व विशेषतः महाराष्ट्र)",
      nameEn: "Current Affairs (Global, National & with Special Reference to Maharashtra)",
      name: "चालू घडामोडी (Current Affairs)",
      officialScope: "Current events of state, national and international importance covering Political events, Government Schemes, Global Indices, Defence Exercises, ISRO Space Missions, Sports, Awards, and Maharashtra-specific socio-economic developments",
      version: "1.0",
      verifiedDate: "2026-10-28",
      notesJsonBaseDir: "/data/notes/group_b/prelims/current_affairs/",


      // UI Theme & Theming Metadata
      theme: {
        primaryColor: "#e11d48",        // Rose Red / Dynamic News Pulse Theme
        bgColor: "#fff1f2",
        iconClass: "ri-newspaper-line"
      },


      // अभ्यास व डॅशबोर्ड ॲनालिटिक्स मेट्रिक्स
      metrics: {
        totalChapters: 14,
        totalEstimatedHours: 48,
        avgQuestionsInPrelims: 15,
        targetMarks: 15,
        weightageRange: "14-16 Questions"
      },


      // विषय पातळीवरील स्मार्ट टॅग्ज
      subjectTags: [
        "Core-GS",
        "Group-B-Prelims",
        "Paper-1-GS",
        "Pre-Cum-Mains",
        "High-Weightage",
        "Dynamic-Factual",
        "Maharashtra-Focus"
      ],


      filterCategory: "GS",
      searchKeywords: [
        "mpsc group b current affairs", "maharashtra current affairs schemes", "national international summits g20 brics",
        "isro space missions chandrayaan aditya l1", "nobel prizes padma awards bharat ratna",
        "sports olympics grand slam cricket world cup", "global indices hdi hunger index press freedom",
        "चालू घडामोडी", "महाराष्ट्र चालू घडामोडी", "पद्म पुरस्कार भारतरत्न", "इस्रो मोहिमा चांद्रयान", "क्रीडा ऑलिम्पिक", "जागतिक निर्देशांक", "लष्करी सराव"
      ],


      referenceSources: [
        {
          name: "MPSC Non-Gazetted Group B Combined Syllabus",
          role: "अधिकृत परीक्षा-संदर्भ",
          url: "https://mpsc.gov.in"
        },
        {
          name: "पृथ्वी परिक्रमा (Prithvi Parikrama Monthly)",
          role: "MPSC राज्यसेवा व संयुक्त परीक्षेसाठी आधारभूत चालू घडामोडी संदर्भ"
        },
        {
          name: "सिम्पलीफाइड चालू घडामोडी - डॉ. सुशील बारी",
          role: "मायक्रो-टॉपिक विश्लेषण व परीक्षाभिमुख संकलन"
        },
        {
          name: "लोकराज्य मासिक (माहिती व जनसंपर्क महासंचालनालय, महाराष्ट्र शासन)",
          role: "शासकीय योजना व महाराष्ट्र विशेष संदर्भ"
        },
        {
          name: "प्रेस इन्फॉर्मेशन ब्युरो (PIB India)",
          role: "भारत सरकारच्या अधिकृत घोषणा व धोरणे"
        }
      ],


      chapters: [
        // =========================================================================
        // विभाग A — आंतरराष्ट्रीय व राष्ट्रीय राजकीय/प्रशासकीय घडामोडी
        // =========================================================================
        {
          id: "gb_ca_c01",
          code: "C01",
          section: "A",
          slug: "international-relations-summits-and-global-groupings",
          nameMr: "आंतरराष्ट्रीय संबंध, जागतिक संघटना व प्रमुख शिखर परिषदा",
          nameEn: "International Relations, Multilateral Groupings & Global Summits",
          name: "आंतरराष्ट्रीय परिषदा व संघटना (Global Summits & Treaties)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_ca_c01",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: null,
          nextChapterId: "gb_ca_c02",
          metaDescriptionMr: "G20 (भारताचे अध्यक्षपद, आफ्रिकन युनियन प्रवेश), BRICS (नवीन सदस्य देश), SCO, QUAD, ASEAN, संयुक्त राष्ट्र (UN) ठराव आणि आंतरराष्ट्रीय करार.",
          metaDescriptionEn: "In-depth review of Global Affairs: G20 New Delhi Declaration & African Union inclusion, BRICS expansion, SCO, QUAD summits, ASEAN, United Nations resolutions, and bilateral treaties.",
          notesJsonPath: "/data/notes/group_b/prelims/current_affairs/c01_international_summits.json",
          quizTag: "gb_ca_intl_01",
          tags: ["Current Affairs", "International Relations", "G20 Summit", "BRICS Expansion", "QUAD", "SCO", "High-Weightage"],
          searchKeywords: ["g20 summit new delhi declaration vasudhaiva kutumbakam", "brics expansion new members egypt iran uae ethiopia", "quad leaders summit", "shanghai cooperation organisation sco", "un general assembly resolutions", "आंतरराष्ट्रीय घडामोडी", "G20 परिषद नवी दिल्ली", "ब्रिक्स BRICS विस्तार", "क्वाड QUAD परिषद", "SCO शांघाय सहकार्य संघटना"],
          topics: [
            {
              id: "top_gb_c01_01",
              nameMr: "जागतिक व्यासपीठे, बहुपक्षीय परिषदा आणि भारताची मुत्सद्देगिरी",
              nameEn: "Multilateral Diplomacy, Strategic Summits & India's Geopolitics",
              subtopics: [
                {
                  id: "st_gb_c01_01_01",
                  titleMr: "G20 परिषद व भारताचे ऐतिहासिक अध्यक्षपद: थीम: 'वसुधैव कुटुंबकम्' (One Earth, One Family, One Future); नवी दिल्ली घोषणापत्र; आफ्रिकन युनियनचा (African Union - ५५ देश) २१ वा स्थायी सदस्य म्हणून प्रवेश; भारत-मध्य पूर्व-युरोप आर्थिक कॉरिडॉर (IMEC) व जागतिक जैवइंधन आघाडी (Global Biofuels Alliance - GBA)",
                  titleEn: "G20 India Presidency: Theme 'Vasudhaiva Kutumbakam'; Inclusion of African Union (55 nations) as 21st permanent member; India-Middle East-Europe Economic Corridor (IMEC) & Global Biofuels Alliance",
                  chips: ["G20 नवी दिल्ली परिषद", "वसुधैव कुटुंबकम्", "आफ्रिकन युनियन (२१ वा सदस्य)", "IMEC कॉरिडॉर", "ग्लोबल बायोफ्युअल्स अलायन्स"]
                },
                {
                  id: "st_gb_c01_01_02",
                  titleMr: "ब्रिक्स (BRICS) शिखर परिषदा व विस्तार: जोहान्सबर्ग परिषद; ब्रिक्स समूहाचा विस्तार (इजिप्त, इथिओपिया, इराण, सौदी अरेबिया, UAE या नवीन देशांचा समावेश); न्यू डेव्हलपमेंट बँक (NDB - शांघाय मुख्यालय, अध्यक्ष डिल्मा रुसेफ); स्थानिक चलनांमध्ये व्यापार व्यवहार",
                  titleEn: "BRICS Expansion: Induction of new member nations (Egypt, Ethiopia, Iran, Saudi Arabia, UAE); New Development Bank (NDB HQ Shanghai, Dilma Rousseff); Local currency settlement",
                  chips: ["BRICS विस्तार", "नवीन सदस्य देश", "न्यू डेव्हलपमेंट बँक (NDB)", "डिल्मा रुसेफ"]
                },
                {
                  id: "st_gb_c01_01_03",
                  titleMr: "इतर आंतरराष्ट्रीय संघटना व परिषदा: १) शांघाय सहकार्य संघटना (SCO - इराण व बेलारूस नवीन सदस्य); २) क्वाड (QUAD: भारत, अमेरिका, जपान, ऑस्ट्रेलिया); ३) आसियान (ASEAN - १० देश + पूर्व तिमोर समावेश); ४) G7 शिखर परिषद; ५) संयुक्त राष्ट्र सुरक्षा परिषद (UNSC) सुधारणा व स्थायी सदस्यत्वाचा मुद्दा",
                  titleEn: "Other Multilateral Blocs: SCO (Iran & Belarus new members), QUAD (India, US, Japan, Australia), ASEAN (Timor-Leste accession), G7 Summit, and UNSC Reforms",
                  chips: ["SCO शांघाय संघटना (इराण समावेश)", "क्वाड QUAD", "आसियान ASEAN", "G7 परिषद"]
                }
              ],
              sources: [
                { book: "पृथ्वी परिक्रमा", standard: "चालू घडामोडी विशेषांक", chapterRef: "आंतरराष्ट्रीय घडामोडी व परिषदा" },
                { book: "प्रेस इन्फॉर्मेशन ब्युरो (PIB)", standard: "परराष्ट्र मंत्रालय अहवाल", chapterRef: "द्विपक्षीय व बहुपक्षीय करार" }
              ]
            }
          ]
        },
        {
          id: "gb_ca_c02",
          code: "C02",
          section: "A",
          slug: "global-indices-reports-and-rankings",
          nameMr: "जागतिक निर्देशांक, अहवाल व भारताचे मानांकन (Global Indices)",
          nameEn: "Global Indices, International Reports & India's Performance Rankings",
          name: "जागतिक निर्देशांक व अहवाल (Global Indices & Rankings)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 3,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_ca_c02",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_ca_c01",
          nextChapterId: "gb_ca_c03",
          metaDescriptionMr: "मानव विकास निर्देशांक (HDI - UNDP), जागतिक भूक निर्देशांक (GHI), जागतिक शांतता निर्देशांक, वृत्तपत्र स्वातंत्र्य निर्देशांक, जागतिक स्पर्धात्मकता, आणि पर्यावरण कामगिरी निर्देशांक (EPI).",
          metaDescriptionEn: "In-depth review of Global Indices: Human Development Index (HDI by UNDP), Global Hunger Index (GHI), World Press Freedom Index, Global Gender Gap, Global Innovation Index, and Environmental Performance Index.",
          notesJsonPath: "/data/notes/group_b/prelims/current_affairs/c02_global_indices.json",
          quizTag: "gb_ca_indices_01",
          tags: ["Current Affairs", "Global Indices", "Human Development Index HDI", "Global Hunger Index GHI", "Press Freedom", "Gender Gap Report", "High-Weightage"],
          searchKeywords: ["global indices india ranking", "human development index undp parameters india rank", "global hunger index ghi parameters", "world press freedom index reporters without borders", "global gender gap report world economic forum wef", "global innovation index wipo", "जागतिक निर्देशांक", "मानव विकास निर्देशांक HDI", "जागतिक भूक निर्देशांक GHI", "प्रेस फ्रीडम निर्देशांक", "लिंगभाव विषमता निर्देशांक", "नावीन्यता निर्देशांक WIPO"],
          topics: [
            {
              id: "top_gb_c02_01",
              nameMr: "प्रमुख जागतिक निर्देशांक, मोजमापाचे निकष, संस्था आणि भारताची स्थिती",
              nameEn: "Key Global Indices, Institutional Publishers, Methodological Metrics & India's Rank",
              subtopics: [
                {
                  id: "st_gb_c02_01_01",
                  titleMr: "मानव विकास निर्देशांक (HDI - Human Development Index): संयुक्त राष्ट्र विकास कार्यक्रम (UNDP) द्वारे जारी; महबूब-उल-हक व अमर्त्य सेन यांनी विकसित; ३ आयाम व ४ निर्देशक: १) आरोग्य (जन्मावेळचे अपेक्षित आयुर्मान), २) शिक्षण (शालेय शिक्षणाची सरासरी वर्षे व अपेक्षित वर्षे), ३) राहणीमानाचा दर्जा (दरडोई GNI); भारताचे मूल्य व रँकिंग (मध्यम मानवी विकास श्रेणी); अव्वल देश: स्वित्झर्लंड, नॉर्वे",
                  titleEn: "Human Development Index (UNDP): Devised by Mahbub-ul-Haq & Amartya Sen; 3 Dimensions: Health (Life expectancy), Education (Mean & Expected years of schooling), Standard of Living (GNI per capita); India in Medium Human Development bracket",
                  chips: ["मानव विकास निर्देशांक (HDI UNDP)", "अमर्त्य सेन व महबूब-उल-हक", "३ आयाम व ४ निर्देशक", "अपेक्षित आयुर्मान", "दरडोई GNI"]
                },
                {
                  id: "st_gb_c02_01_02",
                  titleMr: "भूक व अन्न सुरक्षा निर्देशांक: जागतिक भूक निर्देशांक (GHI - Global Hunger Index: वेल्टहंगरलाइफ व कन्सर्न वर्ल्डवाईड द्वारे जारी; ४ घटक: अल्पपोषण, बालकांचे वजन कमी असणे Wasting, बालकांची उंची कमी असणे Stunting, बालमृत्यू दर); जागतिक अन्न सुरक्षा निर्देशांक (GFSI)",
                  titleEn: "Global Hunger Index (GHI): Published by Welthungerhilfe & Concern Worldwide; 4 Indicators: Undernourishment, Child Wasting, Child Stunting, Child Mortality",
                  chips: ["जागतिक भूक निर्देशांक GHI", "४ निर्देशक (Stunting, Wasting)", "अल्पपोषण", "बालमृत्यू दर"]
                },
                {
                  id: "st_gb_c02_01_03",
                  titleMr: "इतर अति-महत्त्वाचे जागतिक निर्देशांक: १) जागतिक लिंगभाव दरी अहवाल (Global Gender Gap: WEF द्वारे); २) जागतिक नावीन्यता निर्देशांक (Global Innovation Index: WIPO द्वारे); ३) जागतिक वृत्तपत्र स्वातंत्र्य निर्देशांक (World Press Freedom: रिपोर्टर्स विदाऊट बॉर्डर्स); ४) जागतिक शांतता निर्देशांक (Global Peace Index: IEP); ५) भ्रष्टाचार धारणा निर्देशांक (Corruption Perception Index: ट्रान्सपरन्सी इंटरनॅशनल)",
                  titleEn: "Other Vital Indices: Global Gender Gap (WEF), Global Innovation Index (WIPO), World Press Freedom Index (Reporters Without Borders), Global Peace Index (IEP), Corruption Perception Index (Transparency International)",
                  chips: ["लिंगभाव दरी (WEF)", "नावीन्यता निर्देशांक (WIPO)", "प्रेस फ्रीडम (Reporters Without Borders)", "भ्रष्टाचार धारणा निर्देशांक"]
                }
              ],
              sources: [
                { book: "सिम्पलीफाइड चालू घडामोडी", standard: "डॉ. सुशील बारी", chapterRef: "प्रकरण २: जागतिक निर्देशांक व अहवाल" },
                { book: "पृथ्वी परिक्रमा", standard: "वार्षिक विशेषांक", chapterRef: "निर्देशांक व रँकिंग" }
              ]
            }
          ]
        },
        {
          id: "gb_ca_c03",
          code: "C03",
          section: "A",
          slug: "national-legislation-acts-and-constitutional-developments",
          nameMr: "राष्ट्रीय कायदे, धोरणे व घटनात्मक घडामोडी",
          nameEn: "National Legislation, Landmark Acts & Constitutional Milestones",
          name: "राष्ट्रीय कायदे व धोरणे (National Legislation & Policies)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_ca_c03",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_ca_c02",
          nextChapterId: "gb_ca_c04",
          metaDescriptionMr: "नवीन फौजदारी कायदे (भारतीय न्याय संहिता BNS, BNSS, BSA - IPC, CrPC, पुरावा कायदा बदल), नारी शक्ती वंदन अधिनियम (१०६ वी घटनादुरुस्ती), मुख्य निवडणूक आयुक्त निवड कायदा, आणि समान नागरी कायदा (UCC उत्तराखंड).",
          metaDescriptionEn: "In-depth review of New Criminal Laws (Bharatiya Nyaya Sanhita BNS, BNSS, Bharatiya Sakshya Adhiniyam replacing IPC, CrPC, Evidence Act), 106th Amendment (Nari Shakti Vandan Act), CEC Appointment Act, and Uttarakhand Uniform Civil Code.",
          notesJsonPath: "/data/notes/group_b/prelims/current_affairs/c03_national_acts.json",
          quizTag: "gb_ca_acts_01",
          tags: ["Current Affairs", "New Criminal Laws", "BNS BNSS BSA", "106th Amendment Nari Shakti", "UCC Uttarakhand", "High-Weightage"],
          searchKeywords: ["new criminal laws bharatiya nyaya sanhita bns ipc", "bharatiya nagarik suraksha sanhita bnss crpc", "bharatiya sakshya adhiniyam bsa", "106th constitutional amendment act women reservation nari shakti", "chief election commissioner appointment act panel", "uniform civil code ucc uttarakhand first state", "नवीन फौजदारी कायदे", "भारतीय न्याय संहिता BNS IPC", "भारतीय नागरिक सुरक्षा संहिता BNSS", "भारतीय साक्ष अधिनियम BSA", "१०६ वी घटनादुरुस्ती नारी शक्ती", "समान नागरी कायदा उत्तराखंड"],
          topics: [
            {
              id: "top_gb_c03_01",
              nameMr: "नवीन फौजदारी कायदे, महिला आरक्षण आणि प्रमुख राष्ट्रीय कायदे",
              nameEn: "Overhaul of Criminal Jurisprudence, Women Reservation & National Acts",
              subtopics: [
                {
                  id: "st_gb_c03_01_01",
                  titleMr: "नवीन तीन फौजदारी कायदे (१ जुलै २०२४ पासून अंमलात): ब्रिटिशकालीन कायद्यांची पुनर्रचना: १) भारतीय न्याय संहिता (BNS २०२३ - १८६० च्या भारतीय दंड संहिता IPC ची जागा घेतली; देशद्रोहाचा गुन्हा रद्द करून 'भारताचे सार्वभौमत्व धोक्यात आणणारा गुन्हा' समाविष्ट, मॉब लिंचिंगवर कठोर शिक्षा); २) भारतीय नागरिक सुरक्षा संहिता (BNSS २०२३ - १८९८/१९७३ च्या CrPC ची जागा घेतली; ई-एफआयआर, झिरो एफआयआर, फॉरेन्सिक तपास अनिवार्य); ३) भारतीय साक्ष अधिनियम (BSA २०२३ - १८७२ च्या पुरावा कायद्याची जागा घेतली; डिजिटल व इलेक्ट्रॉनिक पुराव्यांना मान्यता)",
                  titleEn: "Three New Criminal Laws (Enforced 1 July 2024): 1) Bharatiya Nyaya Sanhita (BNS replaces IPC 1860; sedition replaced with treason against sovereignty, mob lynching), 2) Bharatiya Nagarik Suraksha Sanhita (BNSS replaces CrPC 1973; Zero FIR, mandatory forensics), 3) Bharatiya Sakshya Adhiniyam (BSA replaces Evidence Act 1872; electronic evidence recognized)",
                  chips: ["भारतीय न्याय संहिता (BNS replaces IPC)", "भारतीय नागरिक सुरक्षा संहिता (BNSS replaces CrPC)", "भारतीय साक्ष अधिनियम (BSA)", "१ जुलै २०२४ अंमलबजावणी", "मॉब लिंचिंग तरतूद"]
                },
                {
                  id: "st_gb_c03_01_02",
                  titleMr: "नारी शक्ती वंदन अधिनियम (१०६ वी घटनादुरुस्ती कायदा २०२३): नवीन संसद भवनात मंजूर झालेला पहिलाच ऐतिहासिक कायदा; लोकसभा, दिल्ली विधानसभा आणि सर्व राज्य विधानसभांमध्ये महिलांसाठी ३३% (१/३) जागा राखीव; कलम २३९AA, ३३०A, ३३२A आणि ३३४A मध्ये नवीन तरतुदी; आरक्षण कालावधी १५ वर्षे",
                  titleEn: "Nari Shakti Vandan Act (106th Constitutional Amendment 2023): First bill passed in New Parliament Building; Grants 33% reservation to women in Lok Sabha & State Assemblies; Inserts Arts 330A, 332A, 334A; 15-year validity",
                  chips: ["नारी शक्ती वंदन अधिनियम", "१०६ वी घटनादुरुस्ती २०२३", "नवीन संसद भवन पहिले विधेयक", "३३ टक्के महिला आरक्षण"]
                },
                {
                  id: "st_gb_c03_01_03",
                  titleMr: "मुख्य निवडणूक आयुक्त व निवडणूक आयुक्त नियुक्ती कायदा २०२३: सर्वोच्च न्यायालयाच्या अनूप बरनवाल खटल्यानंतर संसदेचा कायदा; नियुक्तीसाठी ३ सदस्यीय निवड समिती: १) पंतप्रधान (अध्यक्ष), २) लोकसभेतील विरोधी पक्षनेता, ३) पंतप्रधानांनी नामनिर्देशित केलेला एक केंद्रीय कॅबिनेट मंत्री (सरन्यायाधीशांचा समावेश वगळला)",
                  titleEn: "Chief Election Commissioner & ECs (Appointment & Conditions) Act 2023: 3-member selection panel comprising PM (Chair), Leader of Opposition in Lok Sabha, and a Union Cabinet Minister nominated by PM",
                  chips: ["निवडणूक आयुक्त नियुक्ती कायदा २०२३", "३ सदस्यीय निवड समिती", "पंतप्रधान व विरोधी पक्षनेता"]
                },
                {
                  id: "st_gb_c03_01_04",
                  titleMr: "समान नागरी कायदा (Uniform Civil Code - UCC): स्वातंत्र्योत्तर भारतात समान नागरी कायदा मंजूर करणारे 'उत्तराखंड' हे देशातील पहिले राज्य ठरले (फेब्रुवारी २०२४ - न्यायमूर्ती रंजना देसाई समिती अहवाल; विवाह, घटस्फोट, वारसाहक्क व लिव्ह-इन संबंधांची नोंदणी अनिवार्य; आदिवासी जमातींना यातून वगळले)",
                  titleEn: "Uniform Civil Code (UCC): Uttarakhand became the FIRST state in post-independence India to pass UCC (Feb 2024, Justice Ranjana Desai Committee; mandatory live-in registration, tribal communities exempt)",
                  chips: ["समान नागरी कायदा UCC", "उत्तराखंड (पहिले राज्य)", "न्यायमूर्ती रंजना देसाई समिती", "लिव्ह-इन नोंदणी"]
                }
              ],
              sources: [
                { book: "पृथ्वी परिक्रमा", standard: "चालू घडामोडी", chapterRef: "राष्ट्रीय कायदे व न्यायसंस्था" },
                { book: "द हिंदू / पीआयबी", standard: "कायदे व न्याय मंत्रालय", chapterRef: "नवीन फौजदारी संहिता" }
              ]
            }
          ]
        },


        // =========================================================================
        // विभाग B — महाराष्ट्र विशेष घडामोडी व शासकीय योजना (Maharashtra Focus)
        // =========================================================================
        {
          id: "gb_ca_c04",
          code: "C04",
          section: "B",
          slug: "maharashtra-state-schemes-and-government-initiatives",
          nameMr: "महाराष्ट्रातील महत्त्वाच्या शासकीय योजना, शासन निर्णय (GR) व उपक्रम",
          nameEn: "Maharashtra State Government Schemes, Key Initiatives & Policies",
          name: "महाराष्ट्र शासन योजना व उपक्रम (Maharashtra Schemes & GRs)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_ca_c04",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_ca_c03",
          nextChapterId: "gb_ca_c05",
          metaDescriptionMr: "मुख्यमंत्री माझी लाडकी बहीण योजना (दरमहा १५०० रु.), मुख्यमंत्री युवा कार्यप्रशिक्षण योजना, लेक लाडकी योजना, महात्मा जोतीराव फुले जन आरोग्य योजना (५ लाख विमा), आणि नमो शेतकरी महासन्मान निधी.",
          metaDescriptionEn: "In-depth review of Maharashtra Government flagship schemes: Mukhyamantri Majhi Ladki Bahin Yojana (Rs 1500/mo), Yuva Karya Prashikshan, Lek Ladki, MJPJAY health cover enhanced to Rs 5 Lakhs, and Namo Shetkari Mahasanman Nidhi.",
          notesJsonPath: "/data/notes/group_b/prelims/current_affairs/c04_maharashtra_schemes.json",
          quizTag: "gb_ca_mh_schemes_01",
          tags: ["Maharashtra Focus", "State Schemes", "Ladki Bahin Yojana Rs 1500", "Yuva Karya Prashikshan", "MJPJAY 5 Lakhs", "Namo Shetkari", "High-Weightage"],
          searchKeywords: ["mukhyamantri majhi ladki bahin yojana criteria eligibility", "mukhyamantri yuva karya prashikshan yojana stipend", "lek ladki yojana maharashtra installments", "mahatma jyotirao phule jan arogya yojana 5 lakh limit", "namo shetkari mahasanman nidhi 6000", "मुख्यमंत्री माझी लाडकी बहीण योजना पात्रता", "युवा कार्यप्रशिक्षण योजना", "लेक लाडकी योजना", "महात्मा फुले जन आरोग्य योजना ५ लाख", "नमो शेतकरी योजना"],
          topics: [
            {
              id: "top_gb_c04_01",
              nameMr: "महाराष्ट्र शासनाच्या कल्याणकारी योजना, निकष, लाभार्थी व तरतुदी",
              nameEn: "Maharashtra Welfare Architecture, Eligibility Norms & Budget Allocations",
              subtopics: [
                {
                  id: "st_gb_c04_01_01",
                  titleMr: "मुख्यमंत्री माझी लाडकी बहीण योजना (२०२४): महिलांच्या आर्थिक स्वातंत्र्यासाठी; वयोगट: २१ ते ६५ वर्षे; कौटुंबिक वार्षिक उत्पन्न मर्यादा: २.५० लाख रु.; दरमहा १,५०० रु. थेट बँक खात्यात (DBT); आधार लिंक बँक खाते अनिवार्य",
                  titleEn: "Mukhyamantri Majhi Ladki Bahin Yojana (2024): Financial empowerment; Age 21-65 years; Family income ceiling Rs 2.50 Lakhs; Direct cash benefit of Rs 1,500/month via DBT",
                  chips: ["लाडकी बहीण योजना", "दरमहा १५०० रुपये", "२१ ते ६५ वर्षे वयोगट", "वार्षिक उत्पन्न २.५० लाख"]
                },
                {
                  id: "st_gb_c04_01_02",
                  titleMr: "मुख्यमंत्री युवा कार्यप्रशिक्षण योजना: सुशिक्षित बेरोजगार तरुणांना प्रत्यक्ष कामाचा अनुभव (Internship); वयोगट: १८ ते ३५ वर्षे; विद्यावेतन (दरमहा): १२ वी पास - ६,००० रु., आयटीआय/डिप्लोमा - ८,००० रु., पदवीधर/पदव्युत्तर - १०,००० रु.; ६ महिन्यांचा प्रशिक्षण कालावधी",
                  titleEn: "Mukhyamantri Yuva Karya Prashikshan Yojana: On-job apprenticeship for youth (18-35 years); Monthly Stipend: 12th pass (Rs 6,000), ITI/Diploma (Rs 8,000), Graduate/PG (Rs 10,000) for 6 months",
                  chips: ["युवा कार्यप्रशिक्षण योजना", "विद्यावेतन ६००० ते १०००० रु.", "१८ ते ३५ वर्षे", "६ महिने प्रशिक्षण"]
                },
                {
                  id: "st_gb_c04_01_03",
                  titleMr: "महात्मा जोतीराव फुले जन आरोग्य योजना (MJPJAY - सार्वत्रिक विस्तार): आरोग्य विमा संरक्षण मर्यादा १.५० लाख रुपयांवरून ५ लाख रुपये प्रति कुटुंब प्रति वर्ष करण्यात आली; राज्यातील सर्व शिधापत्रिकाधारक कुटुंबांना मोफत वैद्यकीय उपचारांची हमी",
                  titleEn: "MJPJAY Universal Healthcare Expansion: Family health cover increased from Rs 1.5 Lakhs to Rs 5 Lakhs/year; Universalized for all ration card holders across Maharashtra",
                  chips: ["महात्मा फुले जन आरोग्य योजना (MJPJAY)", "५ लाख रुपये विमा मर्यादा", "सर्व शिधापत्रिकाधारक कुटुंब"]
                },
                {
                  id: "st_gb_c04_01_04",
                  titleMr: "लेक लाडकी योजना आणि नमो शेतकरी योजना: १) लेक लाडकी: पिवळ्या व केशरी रेशनकार्डधारक कुटुंबातील मुलींसाठी; जन्मापासून १८ वर्षे वयापर्यंत ५ टप्प्यांत एकूण १,०१,००० रु. अनुदान; २) नमो शेतकरी महासन्मान निधी: PM किसान योजनेच्या ६,००० रुपयांव्यतिरिक्त महाराष्ट्र शासनाकडून वार्षिक अतिरिक्त ६,००० रु. (एकूण १२,००० रु. वार्षिक)",
                  titleEn: "Lek Ladki & Namo Shetkari: Lek Ladki (Cumulative Rs 1,01,000 in 5 stages till age 18 for girl child); Namo Shetkari Mahasanman (Additional Rs 6,000/yr from MH Govt over PM-KISAN, total Rs 12,000)",
                  chips: ["लेक लाडकी योजना (१,०१,००० रु.)", "नमो शेतकरी योजना (अतिरिक्त ६००० रु.)", "एकूण १२,००० रु. शेतकरी सहाय्य"]
                }
              ],
              sources: [
                { book: "लोकराज्य मासिक", standard: "माहिती व जनसंपर्क महासंचालनालय, महाराष्ट्र शासन", chapterRef: "महाराष्ट्र शासनाचे अर्थसंकल्पीय निर्णय व योजना" },
                { book: "पृथ्वी परिक्रमा", standard: "महाराष्ट्र विशेषांक", chapterRef: "महाराष्ट्र शासन योजना" }
              ]
            }
          ]
        },
        {
          id: "gb_ca_c05",
          code: "C05",
          section: "B",
          slug: "maharashtra-infrastructure-projects-and-socio-economic-events",
          nameMr: "महाराष्ट्रातील पायाभूत प्रकल्प, उद्योग व सामाजिक-सांस्कृतिक घडामोडी",
          nameEn: "Maharashtra Infrastructure Corridors, Industrial Investments & Cultural Milestones",
          name: "महाराष्ट्रातील पायाभूत प्रकल्प व घडामोडी (Maharashtra Infrastructure & Events)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_ca_c05",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_ca_c04",
          nextChapterId: "gb_ca_c06",
          metaDescriptionMr: "अटल सेतू (MTHL - भारतातील सर्वात लांब सागरी पूल), समृद्धी महामार्ग, मुंबई कोस्टल रोड (धर्मवीर स्वराज्यरक्षक संभाजी महाराज सागरी किनारा रस्ता), वाढवण बंदर (डहाणू पालघर), आणि महाराष्ट्र भूषण पुरस्कार.",
          metaDescriptionEn: "In-depth review of Maharashtra Megaprojects: Atal Setu (MTHL 21.8 km longest sea bridge), Samruddhi Expressway, Mumbai Coastal Road, Vadhavan Mega Port in Palghar, and Maharashtra Bhushan Awardees.",
          notesJsonPath: "/data/notes/group_b/prelims/current_affairs/c05_maharashtra_infrastructure.json",
          quizTag: "gb_ca_mh_infra_01",
          tags: ["Maharashtra Focus", "Atal Setu MTHL", "Vadhavan Port Palghar", "Mumbai Coastal Road", "Maharashtra Bhushan", "High-Weightage"],
          searchKeywords: ["atal bihari vajpayee sewri nhava sheva atal setu mthl length 21.8 km", "vadhavan port palghar major port approval", "mumbai coastal road project open sea bridge", "maharashtra bhushan award recent recipients", "महालक्ष्मी रेसकोर्स सेंट्रल पार्क", "अटल सेतू MTHL २१.८ किमी", "वाढवण बंदर पालघर", "मुंबई कोस्टल रोड", "महाराष्ट्र भूषण पुरस्कार"],
          topics: [
            {
              id: "top_gb_c05_01",
              nameMr: "महाराष्ट्रातील मेगा इन्फ्रास्ट्रक्चर प्रकल्प, बंदरे आणि राज्य सन्मान",
              nameEn: "State Megaprojects, Deep-Sea Ports & Highest Civilian Honors",
              subtopics: [
                {
                  id: "st_gb_c05_01_01",
                  titleMr: "अटल बिहारी वाजपेयी शिवडी-न्हावा शेवा अटल सेतू (MTHL): जानेवारी २०२४ मध्ये लोकार्पण; भारतातील सर्वात लांब सागरी पूल (एकूण लांबी २१.८ किमी - समुद्रातील लांबी १६.५ किमी); ६ पदरी द्रुतगती सागरी मार्ग; मुंबई व नवी मुंबई दरम्यान प्रवासाचा वेळ २० मिनिटांवर",
                  titleEn: "Atal Setu (MTHL - Jan 2024): Longest sea bridge in India; Total length 21.8 km (16.5 km over sea); 6-lane access-controlled freeway connecting Sewri (Mumbai) to Chirle (Navi Mumbai)",
                  chips: ["अटल सेतू MTHL (२१.८ किमी)", "भारतातील सर्वात लांब सागरी पूल", "शिवडी ते न्हावा शेवा", "समुद्रातील लांबी १६.५ किमी"]
                },
                {
                  id: "st_gb_c05_01_02",
                  titleMr: "वाढवण महाबंदर प्रकल्प (Vadhavan Port, पालघर): केंद्र सरकारची अधिकृत मंजुरी; ७६,२०० कोटी रु. गुंतवणूक; देशातील १३ वे मोठे महाबंदर; नैसर्गिक खोल पाण्याचे बंदर (२० मीटर खोली); जगातील अव्वल १० कंटेनर बंदरांमध्ये समावेशाचे उद्दिष्ट; वाढवण पोर्ट प्रोजेक्ट लिमिटेड (VPPL: JNPT ७४% + MMB २६%)",
                  titleEn: "Vadhavan Mega Port (Dahanu, Palghar): Union Cabinet approval; Rs 76,200 Cr investment; 13th Major Port of India; All-weather deep draft port (20m depth); JNPA-MMB joint venture",
                  chips: ["वाढवण महाबंदर (डहाणू पालघर)", "१३ वे मोठे बंदर", "२० मीटर नैसर्गिक खोली", "JNPA व MMB संयुक्त प्रकल्प"]
                },
                {
                  id: "st_gb_c05_01_03",
                  titleMr: "मुंबई कोस्टल रोड (धर्मवीर स्वराज्यरक्षक छत्रपती संभाजी महाराज सागरी किनारा रस्ता): मरीन ड्राईव्ह (प्रिन्सेस स्ट्रीट फ्लायओव्हर) ते वांद्रे-वरळी सी लिंक जोडणारा १०.५८ किमी मार्ग; भारतातील पहिला समुद्राखालील जुळा बोगदा (Undersea Twin Tunnel - गिरगाव चौपाटी ते मलबार हिल)",
                  titleEn: "Mumbai Coastal Road (Chhatrapati Sambhaji Maharaj Coastal Road): 10.58 km corridor from Marine Drive to Worli; Houses India's first Undersea Twin Tunnel beneath Arabian Sea",
                  chips: ["मुंबई कोस्टल रोड", "भारतातील पहिला समुद्राखालील बोगदा", "मरीन ड्राईव्ह ते वरळी", "छत्रपती संभाजी महाराज नाव"]
                },
                {
                  id: "st_gb_c05_01_04",
                  titleMr: "महाराष्ट्र भूषण पुरस्कार (महाराष्ट्राचा सर्वोच्च नागरी पुरस्कार - २५ लाख रु. मानधन व सन्मानचिन्ह): अलिकडचे मानकरी: १) आप्पासाहेब धर्माधिकारी (२०२२ - समाजप्रबोधन व स्वच्छता), २) अशोक सराफ (२०२३ - चित्रपट व नाटक कला), ३) प्रदीप गद्रे / इतर निवड",
                  titleEn: "Maharashtra Bhushan Award (Highest civilian honor in MH, Rs 25 Lakh purse): Recent recipients: Appasaheb Dharmadhikari (2022 - Social Work), Ashok Saraf (2023 - Arts & Cinema)",
                  chips: ["महाराष्ट्र भूषण पुरस्कार (२५ लाख रु.)", "अशोक सराफ (२०२३)", "आप्पासाहेब धर्माधिकारी (२०२२)"]
                }
              ],
              sources: [
                { book: "लोकराज्य मासिक", standard: "माहिती व जनसंपर्क महासंचालनालय", chapterRef: "पायाभूत सुविधा विशेष अंक" },
                { book: "सिम्पलीफाइड चालू घडामोडी", standard: "डॉ. सुशील बारी", chapterRef: "महाराष्ट्र विशेष घडामोडी" }
              ]
            }
          ]
        },


        // =========================================================================
        // विभाग C — विज्ञान, तंत्रज्ञान, अंतराळ व संरक्षण घडामोडी (Science & Defence)
        // =========================================================================
        {
          id: "gb_ca_c06",
          code: "C06",
          section: "C",
          slug: "isro-space-missions-and-astronomy-breakthroughs",
          nameMr: "इस्रोच्या अंतराळ मोहिमा: चांद्रयान-३, आदित्य-L1 आणि गगनयान",
          nameEn: "ISRO Space Missions: Chandrayaan-3, Aditya-L1, Gaganyaan & NISAR",
          name: "इस्रो व अंतराळ मोहिमा (ISRO Missions & Space Tech)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_ca_c06",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_ca_c05",
          nextChapterId: "gb_ca_c07",
          metaDescriptionMr: "चांद्रयान-३ (२३ ऑगस्ट राष्ट्रीय अंतराळ दिन, शिवशक्ती पॉईंट, प्रज्ञान रोव्हर, विक्रम लँडर), आदित्य-L1 (सूर्य मोहीम, लॅग्रॅन्ज पॉईंट १), गगनयान मोहीम (व्योममित्रा रोबोट), आणि LVM3 रॉकेट.",
          metaDescriptionEn: "In-depth review of ISRO achievements: Chandrayaan-3 lunar south pole landing (23 Aug National Space Day, Shiv Shakti Point, Vikram Lander, Pragyan Rover), Aditya-L1 Solar Mission (Lagrange Point 1), Gaganyaan crewed program, and NISAR.",
          notesJsonPath: "/data/notes/group_b/prelims/current_affairs/c06_isro_space_missions.json",
          quizTag: "gb_ca_space_01",
          tags: ["Science Tech", "ISRO", "Chandrayaan-3", "23 August Space Day", "Aditya-L1", "Gaganyaan", "High-Weightage"],
          searchKeywords: ["isro chandrayaan 3 lunar south pole landing", "23 august national space day shiv shakti point", "vikram lander pragyan rover lvm3 m4", "aditya l1 solar mission lagrangian point 1", "gaganyaan human spaceflight vyommitra", "nisar nasa isro synthetic aperture radar", "इस्रो मोहिमा चांद्रयान ३", "२३ ऑगस्ट राष्ट्रीय अंतराळ दिन", "शिवशक्ती पॉईंट", "विक्रम लँडर प्रज्ञान रोव्हर", "आदित्य L1 सूर्य मोहीम", "गगनयान व्योममित्रा"],
          topics: [
            {
              id: "top_gb_c06_01",
              nameMr: "चांद्रयान-३ यश, सौर मोहीम आदित्य-L1, मानवी अंतराळ मोहीम गगनयान",
              nameEn: "Lunar South Pole Landings, Heliophysics Aditya-L1 & Human Spaceflight",
              subtopics: [
                {
                  id: "st_gb_c06_01_01",
                  titleMr: "चांद्रयान-३ (Chandrayaan-3): १४ जुलै २०२३ रोजी LVM3-M4 रॉकेटद्वारे श्रीहरिकोटा येथून यशस्वी उड्डाण; २३ ऑगस्ट २०२३ रोजी चंद्राच्या दक्षिण ध्रुवावर सॉफ्ट लँडिंग करणारा भारत हा जगातील पहिलाच देश ठरला; लँडिंग स्थळाचे नाव: 'शिवशक्ती पॉईंट' (Shiv Shakti Point); २३ ऑगस्ट हा 'राष्ट्रीय अंतराळ दिन' (National Space Day) म्हणून घोषित; लँडरचे नाव: 'विक्रम' (Vikram), रोव्हरचे नाव: 'प्रज्ञान' (Pragyan - ६ चाके)",
                  titleEn: "Chandrayaan-3: Launched 14 July 2023 via LVM3-M4; Soft landed on Moon's South Pole on 23 August 2023 (World's First); Landing site named 'Shiv Shakti Point'; 23 August declared 'National Space Day'; Vikram Lander & Pragyan Rover",
                  chips: ["चांद्रयान-३ (२३ ऑगस्ट २०२३ लँडिंग)", "दक्षिण ध्रुवावर उतरणारा पहिला देश", "शिवशक्ती पॉईंट", "राष्ट्रीय अंतराळ दिन २३ ऑगस्ट", "विक्रम लँडर व प्रज्ञान रोव्हर"]
                },
                {
                  id: "st_gb_c06_01_02",
                  titleMr: "आदित्य-L1 (Aditya-L1 - भारताची पहिली सूर्य मोहीम): २ सप्टेंबर २०२३ रोजी PSLV-C57 द्वारे उड्डाण; ६ जानेवारी २०२४ रोजी पृथ्वीपासून १५ लाख किमी अंतरावरील लॅग्रॅन्ज पॉईंट १ (Halo Orbit at L1 Point) भोवती यशस्वीरीत्या स्थापित; सूर्याचा कोरोना व सौर वादळांचा अभ्यास करण्यासाठी ७ वैज्ञानिक उपकरणे (Payloads: VELC, SUIT इ.)",
                  titleEn: "Aditya-L1: India's first solar observatory launched 2 Sept 2023 via PSLV-C57; Placed in Halo orbit around Lagrangian Point 1 (1.5 million km from Earth) on 6 Jan 2024; 7 scientific payloads",
                  chips: ["आदित्य-L1 (सूर्य मोहीम)", "लॅग्रॅन्ज पॉईंट १ (L1)", "PSLV-C57 रॉकेट", "१५ लाख किमी अंतर"]
                },
                {
                  id: "st_gb_c06_01_03",
                  titleMr: "गगनयान मोहीम (Gaganyaan) व भावी प्रकल्प: भारताची पहिली मानवरहित/मानवयुक्त अंतराळ मोहीम (३ अंतराळवीरांना ४०० किमी कक्षेत पाठवणे); चाचणीसाठी 'व्योममित्रा' (Vyommitra) महिला ह्युमनॉइड रोबोट; अंतराळवीर (प्रशांत बालकृष्णन नायर, अजित कृष्णन, अंगद प्रताप, शुभांशु शुक्ला); इस्रोचे अध्यक्ष: एस. सोमनाथ; NISAR (NASA-ISRO Synthetic Aperture Radar उपग्रह)",
                  titleEn: "Gaganyaan & Future Programs: India's human spaceflight mission to 400 km LEO; Vyommitra female humanoid robot; 4 astronaut-designates announced; ISRO Chairman S. Somanath; NISAR radar satellite",
                  chips: ["गगनयान मोहीम", "व्योममित्रा (ह्युमनॉइड रोबोट)", "४ अंतराळवीर", "एस सोमनाथ (इस्रो अध्यक्ष)", "NISAR उपग्रह"]
                }
              ],
              sources: [
                { book: "पृथ्वी परिक्रमा", standard: "विज्ञान विशेषांक", chapterRef: "इस्रोच्या अंतराळ मोहिमा" },
                { book: "इस्रो अधिकृत संकेतस्थळ (isro.gov.in)", standard: "मिशन अहवाल", chapterRef: "चांद्रयान व आदित्य मोहिमा" }
              ]
            }
          ]
        },
        {
          id: "gb_ca_c07",
          code: "C07",
          section: "C",
          slug: "defence-technology-missiles-and-military-exercises",
          nameMr: "संरक्षण तंत्रज्ञान, क्षेपणास्त्रे, युद्धनौका व संयुक्त लष्करी सराव",
          nameEn: "Defence Technology, Indigenous Missiles, Naval Vessels & Joint Military Exercises",
          name: "संरक्षण तंत्रज्ञान व लष्करी सराव (Defence Tech & Exercises)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_ca_c07",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_ca_c06",
          nextChapterId: "gb_ca_c08",
          metaDescriptionMr: "अग्नी-५ (MIRV तंत्रज्ञान - मिशन दिव्यास्त्र), आयएनएस विक्रांत (स्वदेशी विमानवाहू युद्धनौका), प्रोजेक्ट ७५ (कलवरी पाणबुड्या), ब्राह्मोस क्षेपणास्त्र, आणि भारताचे द्विपक्षीय लष्करी सराव.",
          metaDescriptionEn: "In-depth review of Defence: Agni-5 with MIRV technology (Mission Divyastra), INS Vikrant aircraft carrier, Project 75 Kalvari submarines, BrahMos exports to Philippines, and Joint Exercises (Malabar, Surya Kiran, Mitra Shakti).",
          notesJsonPath: "/data/notes/group_b/prelims/current_affairs/c07_defence_technology.json",
          quizTag: "gb_ca_defence_01",
          tags: ["Defence", "Agni-5 MIRV", "INS Vikrant", "Project 75 Submarines", "BrahMos", "Military Exercises", "High-Weightage"],
          searchKeywords: ["agni 5 mirv mission divyastra drdo", "ins vikrant indigenous aircraft carrier", "project 75 kalvari class submarines vagshir", "brahmos supersonic cruise missile export philippines", "joint military exercises yudh abhyas surya kiran malabar", "संरक्षण घडामोडी", "अग्नी-५ MIRV मिशन दिव्यास्त्र", "आयएनएस विक्रांत विमानवाहू युद्धनौका", "प्रोजेक्ट ७५ पाणबुडी", "ब्राह्मोस क्षेपणास्त्र", "संयुक्त लष्करी सराव"],
          topics: [
            {
              id: "top_gb_c07_01",
              nameMr: "क्षेपणास्त्र प्रणाली, स्वदेशी युद्धनौका, DRDO आणि आंतरराष्ट्रीय सराव",
              nameEn: "Missile Trajectories, Naval Indigenous Fleets & Bilateral War Games",
              subtopics: [
                {
                  id: "st_gb_c07_01_01",
                  titleMr: "अग्नी-५ आणि मिशन दिव्यास्त्र (Mission Divyastra): DRDO द्वारे मार्च २०२४ मध्ये अग्नी-५ चे MIRV (Multiple Independently Targetable Re-entry Vehicle) तंत्रज्ञानासह यशस्वी उड्डाण; एकाच क्षेपणास्त्राद्वारे अनेक अण्वस्त्रे वेगवेगळ्या लक्ष्यांवर डागण्याची क्षमता; ५,००० किमीपेक्षा जास्त पल्ला (ICBM); भारत हा तंत्रज्ञान असलेला जगातील ६ वा देश",
                  titleEn: "Agni-5 & Mission Divyastra (March 2024 by DRDO): Successful test with MIRV (Multiple Independently Targetable Re-entry Vehicle) technology; 5000+ km Inter-Continental range; India 6th nation with MIRV",
                  chips: ["अग्नी-५ क्षेपणास्त्र", "मिशन दिव्यास्त्र (MIRV तंत्रज्ञान)", "५००० किमी पल्ला (ICBM)", "DRDO यश"]
                },
                {
                  id: "st_gb_c07_01_02",
                  titleMr: "नौदल आधुनिकीकरण व स्वदेशी युद्धनौका: १) आयएनएस विक्रांत (INS Vikrant: भारताची पहिली स्वदेशी बनावटीची विमानवाहू युद्धनौका - कोचीन शिपयार्ड निर्मित); २) प्रोजेक्ट ७५ (स्कॉर्पिन डिझेल-इलेक्ट्रिक पाणबुड्या - माझगाव डॉक मुंबई: कलवरी, खंदेरी, करंज, वेला, वागीर, वागशीर); ३) ब्राह्मोस (BrahMos - सुपरसॉनिक क्रूझ क्षेपणास्त्र - भारत व रशिया संयुक्त प्रकल्प; फिलीपिन्सला पहिली परकीय निर्यात)",
                  titleEn: "Naval Indigenisation: INS Vikrant (India's 1st indigenous aircraft carrier), Project 75 (6 Scorpene Submarines by Mazagon Dock Mumbai: Kalvari to Vagsheer), BrahMos export delivery to Philippines",
                  chips: ["INS विक्रांत (स्वदेशी विमानवाहू)", "प्रोजेक्ट ७५ (माझगाव डॉक मुंबई)", "वागशीर पाणबुडी", "ब्राह्मोस क्षेपणास्त्र (फिलीपिन्स निर्यात)"]
                },
                {
                  id: "st_gb_c07_01_03",
                  titleMr: "भारताचे प्रमुख द्विपक्षीय व बहुपक्षीय लष्करी सराव: १) सूर्यकिरण (भारत व नेपाळ), २) मित्रशक्ती (भारत व श्रीलंका), ३) युद्ध अभ्यास (भारत व अमेरिका), ४) गरुड शक्ती (भारत व इंडोनेशिया), ५) मालाबार सराव (QUAD नौदल सराव), ६) संप्रिती (भारत व बांगलादेश), ७) नोमॅडिक एलिफंट (भारत व मंगोलिया)",
                  titleEn: "Major Bilateral Joint Military Exercises: Surya Kiran (Nepal), Mitra Shakti (Sri Lanka), Yudh Abhyas (USA), Garuda Shakti (Indonesia), Malabar (QUAD Navies), Sampriti (Bangladesh), Nomadic Elephant (Mongolia)",
                  chips: ["सूर्यकिरण (नेपाळ)", "मित्रशक्ती (श्रीलंका)", "युद्ध अभ्यास (अमेरिका)", "मालाबार (QUAD सराव)"]
                }
              ],
              sources: [
                { book: "पृथ्वी परिक्रमा", standard: "चालू घडामोडी", chapterRef: "संरक्षण घडामोडी व सराव" },
                { book: "DRDO / संरक्षण मंत्रालय वार्षिक अहवाल", standard: "अधिकृत अहवाल", chapterRef: "स्वदेशी संरक्षण तंत्रज्ञान" }
              ]
            }
          ]
        },


        // =========================================================================
        // विभाग D — राष्ट्रीय व आंतरराष्ट्रीय पुरस्कार आणि सन्मान (Awards & Honors)
        // =========================================================================
        {
          id: "gb_ca_c08",
          code: "C08",
          section: "D",
          slug: "national-awards-bharat-ratna-padma-and-gallantry-awards",
          nameMr: "राष्ट्रीय पुरस्कार: भारतरत्न, पद्म पुरस्कार आणि शौर्य पुरस्कार",
          nameEn: "National Civilian Honors: Bharat Ratna, Padma Awards & Gallantry Medals",
          name: "भारतरत्न व पद्म पुरस्कार (National Honors & Awards)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_ca_c08",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_ca_c07",
          nextChapterId: "gb_ca_c09",
          metaDescriptionMr: "भारतरत्न (कर्पुरी ठाकूर, लालकृष्ण अडवाणी, पी. व्ही. नरसिंह राव, चरण सिंग, एम. एस. स्वामीनाथन), पद्म पुरस्कार (विभूषण, भूषण, श्री - महाराष्ट्रातील मानकरी), आणि परमवीर चक्र.",
          metaDescriptionEn: "In-depth review of National Honors: Bharat Ratna (Karpoori Thakur, L.K. Advani, P.V. Narasimha Rao, Charan Singh, M.S. Swaminathan), Padma Awards (Vibhushan, Bhushan, Shri recipients from Maharashtra), and Gallantry Medals.",
          notesJsonPath: "/data/notes/group_b/prelims/current_affairs/c08_national_awards.json",
          quizTag: "gb_ca_awards_01",
          tags: ["Awards", "Bharat Ratna", "Padma Awards", "Swaminathan", "Narasimha Rao", "Maharashtra Recipients", "High-Weightage"],
          searchKeywords: ["bharat ratna recipients karpoori thakur l k advani p v narasimha rao", "m s swaminathan choudhary charan singh bharat ratna", "padma awards padma vibhushan padma bhushan padma shri maharashtra", "gallantry awards param vir chakra ashoka chakra", "भारतरत्न पुरस्कार विजेते", "पद्मविभूषण पद्मभूषण पद्मश्री", "एम एस स्वामीनाथन भारतरत्न", "कर्पुरी ठाकूर", "महाराष्ट्रातील पद्म पुरस्कार विजेते"],
          topics: [
            {
              id: "top_gb_c08_01",
              nameMr: "भारतरत्न सन्मान, पद्म पुरस्कार आणि महाराष्ट्रातील मान्यवर",
              nameEn: "Civilian Investitures, Bharat Ratna Citations & Padma Laureates",
              subtopics: [
                {
                  id: "st_gb_c08_01_01",
                  titleMr: "भारतरत्न सन्मान (भारताचा सर्वोच्च नागरी पुरस्कार - एकाच वर्षी ५ मान्यवरांना मरणोत्तर/जीवंत घोषित): १) कर्पुरी ठाकूर (बिहारचे माजी मुख्यमंत्री, जननायक), २) लालकृष्ण अडवाणी (माजी उपपंतप्रधान), ३) पी. व्ही. नरसिंह राव (भारताचे नववे पंतप्रधान - आर्थिक उदारीकरणाचे प्रणेते), ४) चौधरी चरण सिंग (माजी पंतप्रधान व शेतकरी नेते), ५) डॉ. एम. एस. स्वामीनाथन (भारतीय हरितक्रांतीचे जनक)",
                  titleEn: "Bharat Ratna Citations: 5 eminent personalities conferred: Karpoori Thakur (Jan Nayak of Bihar), L.K. Advani, P.V. Narasimha Rao (Economic reforms), Chaudhary Charan Singh (Kisan leader), Dr. M.S. Swaminathan (Green Revolution father)",
                  chips: ["भारतरत्न (५ मान्यवर)", "कर्पुरी ठाकूर (जननायक)", "लालकृष्ण अडवाणी", "पी व्ही नरसिंह राव", "डॉ एम एस स्वामीनाथन"]
                },
                {
                  id: "st_gb_c08_01_02",
                  titleMr: "पद्म पुरस्कार (प्रजासत्ताक दिनी घोषणा): पद्मविभूषण (दुसरा सर्वोच्च), पद्मभूषण (तिसरा सर्वोच्च), पद्मश्री (चौथा सर्वोच्च); महाराष्ट्रातील प्रमुख मानकरी: कला, समाजसेवा, औषधोपचार व साहित्यातील उल्लेखनीय व्यक्ती; मरणोत्तर पुरस्कार व जोडीने दिलेले पुरस्कारांचे नियम",
                  titleEn: "Padma Awards Architecture: Padma Vibhushan, Padma Bhushan, Padma Shri; Highlighting recipients from Maharashtra across Arts, Medicine, Public Affairs, Social Work",
                  chips: ["पद्म पुरस्कार", "पद्मविभूषण", "पद्मभूषण", "पद्मश्री", "महाराष्ट्रातील मानकरी"]
                },
                {
                  id: "st_gb_c08_01_03",
                  titleMr: "लष्करी शौर्य पुरस्कार: १) युद्धकालीन शौर्य पुरस्कार: परमवीर चक्र (सर्वोच्च - आतापर्यंत २१ वीरांना, पहिले मेजर सोमनाथ शर्मा), महावीर चक्र, वीर चक्र; २) शांतताकालीन शौर्य पुरस्कार: अशोक चक्र (सर्वोच्च शांतताकालीन), कीर्ती चक्र, शौर्य चक्र",
                  titleEn: "Gallantry Medals: Wartime (Param Vir Chakra - Highest, 21 recipients to date, 1st Major Somnath Sharma, Maha Vir, Vir Chakra); Peacetime (Ashoka Chakra - Highest, Kirti Chakra, Shaurya Chakra)",
                  chips: ["परमवीर चक्र (सर्वोच्च युद्धकालीन)", "मेजर सोमनाथ शर्मा", "अशोक चक्र (सर्वोच्च शांतताकालीन)", "कीर्ती चक्र"]
                }
              ],
              sources: [
                { book: "पृथ्वी परिक्रमा", standard: "चालू घडामोडी", chapterRef: "राष्ट्रीय पुरस्कार विशेषांक" },
                { book: "गृह मंत्रालय भारत सरकार (mha.gov.in)", standard: "अधिकृत गॅझेट", chapterRef: "पद्म पुरस्कार यादी" }
              ]
            }
          ]
        },
        {
          id: "gb_ca_c09",
          code: "C09",
          section: "D",
          slug: "literary-film-and-international-awards-nobel-oscar-jnanpith",
          nameMr: "साहित्यिक, चित्रपट व आंतरराष्ट्रीय पुरस्कार: नोबेल, ऑस्कर, ज्ञानपीठ व बुकर",
          nameEn: "Literary, Cinema & Global Laurels: Nobel, Oscars, Jnanpith & Booker Prizes",
          name: "साहित्यिक व आंतरराष्ट्रीय पुरस्कार (Literary, Nobel & Cinema)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_ca_c09",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_ca_c08",
          nextChapterId: "gb_ca_c10",
          metaDescriptionMr: "नोबेल पुरस्कार (शांतता, साहित्य, अर्थशास्त्र, विज्ञान), ज्ञानपीठ पुरस्कार (५८ वा - जगद्गुरू रामभद्राचार्य व गुलजार), आंतरराष्ट्रीय बुकर पुरस्कार, ऑस्कर पुरस्कार (अकादमी ॲवॉर्ड्स), आणि राष्ट्रीय चित्रपट पुरस्कार.",
          metaDescriptionEn: "In-depth review of Global Laurels: Nobel Prizes (Peace, Literature, Economics, Sciences), 58th Jnanpith Award (Gulzar & Rambhadracharya), International Booker Prize, Academy Awards (Oscars), and National Film Awards.",
          notesJsonPath: "/data/notes/group_b/prelims/current_affairs/c09_literary_global_awards.json",
          quizTag: "gb_ca_intl_awards_01",
          tags: ["Awards", "Nobel Prize", "Jnanpith Award", "Gulzar", "Booker Prize", "Oscars Academy Awards", "High-Weightage"],
          searchKeywords: ["nobel prizes peace literature medicine physics chemistry economics", "58th jnanpith award gulzar jagadguru rambhadracharya", "international booker prize", "oscars academy awards best picture", "dadasaheb phalke award", "sahitya akademi awards marathi", "नोबेल पुरस्कार", "५८ वा ज्ञानपीठ पुरस्कार गुलजार रामभद्राचार्य", "बुकर पुरस्कार", "ऑस्कर चित्रपट पुरस्कार", "दादासाहेब फाळके पुरस्कार", "साहित्य अकादमी मराठी"],
          topics: [
            {
              id: "top_gb_c09_01",
              nameMr: "नोबेल पारितोषिके, सर्वोच्च साहित्य सन्मान, ऑस्कर आणि दादासाहेब फाळके",
              nameEn: "Nobel Laureates, Premier Literary Honors, Oscars & Cinema Laurels",
              subtopics: [
                {
                  id: "st_gb_c09_01_01",
                  titleMr: "नोबेल पुरस्कार (Nobel Prizes): ६ क्षेत्रांत दिले जातात (शांतता - ओस्लो नॉर्वे; साहित्य, भौतिकशास्त्र, रसायनशास्त्र, शरीरक्रियाशास्त्र/औषधोपचार, अर्थशास्त्र - स्टॉकहोम स्वीडन); शांतता नोबेल, साहित्य नोबेल आणि अर्थशास्त्र नोबेल विजेते व त्यांचे संशोधन",
                  titleEn: "Nobel Prizes: Conferred in 6 disciplines (Peace in Oslo, Norway; Literature, Physics, Chemistry, Physiology/Medicine, Economics in Stockholm, Sweden); Key winners & research citations",
                  chips: ["नोबेल शांतता पुरस्कार (ओस्लो)", "साहित्य नोबेल", "अर्थशास्त्र नोबेल", "अल्फ्रेड नोबेल स्मरणार्थ"]
                },
                {
                  id: "st_gb_c09_01_02",
                  titleMr: "ज्ञानपीठ पुरस्कार (भारतातील सर्वोच्च साहित्य पुरस्कार - ११ लाख रु. मानधन व वाग्देवीची कांस्य प्रतिमा): ५८ वा ज्ञानपीठ पुरस्कार (२०२३ साठी संयुक्त): १) प्रसिद्ध गीतकार व उर्दू साहित्यिक गुलजार (संपूर्ण सिंग कालरा), २) संस्कृत विद्वान जगद्गुरू रामभद्राचार्य; मराठीतील ज्ञानपीठ विजेते (वि. स. खांडेकर १९७४, कुसुमाग्रज १९८७, विंदा करंदीकर २००३, भालचंद्र नेमाडे २०१४)",
                  titleEn: "Jnanpith Award (Highest Literary Honor in India, Rs 11 Lakhs & Vagdevi bronze statue): 58th Award conferred jointly to Urdu poet Gulzar & Sanskrit scholar Jagadguru Rambhadracharya; 4 Marathi laureates",
                  chips: ["५८ वा ज्ञानपीठ पुरस्कार", "गुलजार (उर्दू)", "जगद्गुरू रामभद्राचार्य (संस्कृत)", "वाग्देवी कांस्य प्रतिमा", "मराठीतील ४ ज्ञानपीठ विजेते"]
                },
                {
                  id: "st_gb_c09_01_03",
                  titleMr: "बुकर व आंतरराष्ट्रीय बुकर पुरस्कार: बुकर पुरस्कार (इंग्रजीत लिहिलेल्या कादंबरीसाठी); आंतरराष्ट्रीय बुकर पुरस्कार (इंग्रजीत अनुवादित झालेल्या पुस्तकासाठी); विजेती पुस्तके व अनुवादक (उदा. गीतांजली श्री यांच्या 'रेत समाधी' / Tomb of Sand ची ऐतिहासिक उपलब्धी)",
                  titleEn: "Booker & International Booker Prizes: Booker (English novels) vs International Booker (Translated works into English, e.g., Geetanjali Shree's Tomb of Sand)",
                  chips: ["बुकर पुरस्कार", "आंतरराष्ट्रीय बुकर पुरस्कार", "अनुवादित साहित्य"]
                },
                {
                  id: "st_gb_c09_01_04",
                  titleMr: "सिनेमा सन्मान: १) ऑस्कर पुरस्कार (Academy Awards: सर्वोत्कृष्ट चित्रपट, सर्वोत्कृष्ट दिग्दर्शक, सर्वोत्कृष्ट अभिनेता/अभिनेत्री); २) दादासाहेब फाळके पुरस्कार (भारतीय चित्रपटसृष्टीतील सर्वोच्च जीवनगौरव सन्मान - सुवर्णकमळ व १० लाख रु.); ३) राष्ट्रीय चित्रपट पुरस्कार",
                  titleEn: "Cinema Honors: Academy Awards (Oscars Best Picture/Director/Actor); Dadasaheb Phalke Award (Highest film lifetime award in India with Swarna Kamal); National Film Awards",
                  chips: ["ऑस्कर पुरस्कार (Oscars)", "दादासाहेब फाळके पुरस्कार (सुवर्णकमळ)", "राष्ट्रीय चित्रपट पुरस्कार"]
                }
              ],
              sources: [
                { book: "सिम्पलीफाइड चालू घडामोडी", standard: "डॉ. सुशील बारी", chapterRef: "पुरस्कार व सन्मान" },
                { book: "पृथ्वी परिक्रमा", standard: "चालू घडामोडी", chapterRef: "साहित्य, कला व नोबेल पुरस्कार" }
              ]
            }
          ]
        },


        // =========================================================================
        // विभाग E — क्रीडा घडामोडी (Sports & Tournaments)
        // =========================================================================
        {
          id: "gb_ca_c10",
          code: "C10",
          section: "E",
          slug: "sports-olympics-paralympics-and-major-championships",
          nameMr: "क्रीडा घडामोडी: ऑलिम्पिक, पॅरालिम्पिक, आशियाई खेळ व क्रिकेट विश्वचषक",
          nameEn: "Sports: Summer Olympics, Paralympics, Asian Games & Cricket World Cups",
          name: "क्रीडा घडामोडी व स्पर्धा (Sports & Championships)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_ca_c10",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_ca_c09",
          nextChapterId: "gb_ca_c11",
          metaDescriptionMr: "पॅरिस ऑलिम्पिक व पॅरालिम्पिक (पदक विजेते, भारताचे स्थान), आशियाई खेळ (हांगझोऊ - १००+ पदके), ICC क्रिकेट विश्वचषक, टेनिस ग्रँड स्लॅम (ऑस्ट्रेलियन, विम्बल्डन, फ्रेंच, युएस ओपन), आणि खेलो इंडिया.",
          metaDescriptionEn: "In-depth review of Global Sports: Paris Summer Olympics & Paralympics medal tally, Hangzhou Asian Games (India's historic 100+ medals), ICC Men's & T20 World Cups, Tennis Grand Slams, and Khelo India Youth Games.",
          notesJsonPath: "/data/notes/group_b/prelims/current_affairs/c10_sports_championships.json",
          quizTag: "gb_ca_sports_01",
          tags: ["Sports", "Paris Olympics", "Paralympics", "Asian Games 107 Medals", "Cricket World Cup", "Tennis Grand Slams", "High-Weightage"],
          searchKeywords: ["paris olympics india medal winners neeraj chopra manu bhaker", "paralympics india performance", "hangzhou asian games 107 medals tally", "icc mens cricket world cup t20 world cup", "tennis grand slams winners australian french wimbledon us open", "khelo india youth games maharashtra", "क्रीडा चालू घडामोडी", "पॅरिस ऑलिम्पिक भारत पदके", "नीरज चोप्रा मनू भाकर", "आशियाई खेळ १०७ पदके", "क्रिकेट विश्वचषक", "टेनिस ग्रँड स्लॅम", "खेलो इंडिया महाराष्ट्र"],
          topics: [
            {
              id: "top_gb_c10_01",
              nameMr: "ऑलिम्पिक, आशियाई क्रीडा स्पर्धा, टेनिस ग्रँड स्लॅम आणि राष्ट्रीय खेळ",
              nameEn: "Olympic Arenas, Asian Games Triumphs, Grand Slam Circuits & National Games",
              subtopics: [
                {
                  id: "st_gb_c10_01_01",
                  titleMr: "पॅरिस ऑलिम्पिक व पॅरालिम्पिक: पॅरिस ऑलिम्पिक मधील भारताची कामगिरी (मनू भाकर - एकाच ऑलिम्पिकमध्ये २ पदके जिंकणारी स्वतंत्र भारतातील पहिली ॲथलीट; नीरज चोप्रा - भालाफेक रौप्य; भारतीय हॉकी संघ - कांस्य); पॅरालिम्पिक मधील ऐतिहासिक सुवर्ण व पदके; पदक तालिकेत अव्वल देश",
                  titleEn: "Paris Summer Olympics & Paralympics: Manu Bhaker (First Indian post-independence to win 2 medals in single Olympics), Neeraj Chopra (Javelin Silver), Men's Hockey Bronze; Record medal haul in Paralympics",
                  chips: ["पॅरिस ऑलिम्पिक", "मनू भाकर (२ कांस्य पदके)", "नीरज चोप्रा (भालाफेक रौप्य)", "पॅरालिम्पिक पदके"]
                },
                {
                  id: "st_gb_c10_01_02",
                  titleMr: "आशियाई खेळ (Hangzhou Asian Games): भारताने पहिल्यांदाच १०० चा आकडा पार करत एकूण १०७ पदके जिंकली (२८ सुवर्ण, ३८ रौप्य, ४१ कांस्य - पदक तालिकेत ४ था क्रमांक); आशियाई पॅरा गेम्समध्ये १११ पदके जिंकून नवा विक्रम",
                  titleEn: "Hangzhou Asian Games: India breached 100-mark for 1st time with historic 107 medals (28 Gold, 38 Silver, 41 Bronze - 4th rank); 111 medals at Asian Para Games",
                  chips: ["आशियाई खेळ (१०७ पदके)", "२८ सुवर्ण पदके", "पदक तालिकेत ४ था क्रमांक", "हांगझोऊ चीन"]
                },
                {
                  id: "st_gb_c10_01_03",
                  titleMr: "क्रिकेट विश्वचषक व आंतरराष्ट्रीय क्रिकेट: ICC एकदिवसीय विश्वचषक; ICC T20 विश्वचषक (भारताचे ऐतिहासिक विजेतेपद); महिला प्रीमियर लीग (WPL); रोहित शर्मा, विराट कोहली यांच्या ऐतिहासिक कामगिरी व निवृत्ती",
                  titleEn: "Cricket Tournaments: ICC ODI World Cup; ICC T20 World Cup triumph; Women's Premier League (WPL); Major records & retirements",
                  chips: ["ICC T20 विश्वचषक विजेता भारत", "WPL महिला प्रीमियर लीग", "रोहित शर्मा", "विराट कोहली"]
                },
                {
                  id: "st_gb_c10_01_04",
                  titleMr: "टेनिस ग्रँड स्लॅम व इतर स्पर्धा: कॅलेंडर वर्षातील ४ ग्रँड स्लॅम (१) ऑस्ट्रेलियन ओपन - हार्ड कोर्ट, २) फ्रेंच ओपन / रोलँड गॅरोस - क्ले कोर्ट, ३) विम्बल्डन - ग्रास कोर्ट, ४) युएस ओपन - हार्ड कोर्ट) विजेते पुरुष व महिला एकेरी; खेलो इंडिया युथ गेम्स (महाराष्ट्राचे अव्वल स्थान / पदक तालिका)",
                  titleEn: "Tennis Grand Slams (Australian Open, French Open, Wimbledon, US Open champions in Men's & Women's Singles); Rohan Bopanna historic Grand Slam doubles win; Khelo India Youth Games (Maharashtra champions)",
                  chips: ["४ ग्रँड स्लॅम (ऑस्ट्रेलियन, फ्रेंच, विम्बल्डन, युएस)", "रोहन बोपण्णा ग्रँड स्लॅम", "खेलो इंडिया (महाराष्ट्र प्रथम क्रमांक)"]
                }
              ],
              sources: [
                { book: "पृथ्वी परिक्रमा", standard: "क्रीडा विशेषांक", chapterRef: "आंतरराष्ट्रीय व राष्ट्रीय क्रीडा स्पर्धा" },
                { book: "सिम्पलीफाइड चालू घडामोडी", standard: "डॉ. सुशील बारी", chapterRef: "क्रीडा घडामोडी" }
              ]
            }
          ]
        },


        // =========================================================================
        // विभाग F — पर्यावरण, नियुक्त्या, दिनविशेष व मास्टर रिव्हिजन (Environment & Appointments)
        // =========================================================================
        {
          id: "gb_ca_c11",
          code: "C11",
          section: "F",
          slug: "environment-climate-summits-cop-and-conservation",
          nameMr: "पर्यावरण घडामोडी: हवामान बदल परिषदा (COP), रामसर स्थळे व संवर्धन",
          nameEn: "Environment: UN Climate Summits (COP), Ramsar Additions & Conservation Ecology",
          name: "पर्यावरण व हवामान बदल परिषदा (Environment & COP Summits)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_ca_c11",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_ca_c10",
          nextChapterId: "gb_ca_c12",
          metaDescriptionMr: "UNFCCC COP परिषदा (COP28 दुबई - लॉस अँड डॅमेज फंड, COP29), भारतातील नवीन रामसर पाणथळ स्थळे (८०+), प्रोजेक्ट टायगर ५० वर्षे (आंतरराष्ट्रीय बिग कॅट अलायन्स IBCA), आणि चित्ता पुनर्वास प्रकल्प (कुनो राष्ट्रीय उद्यान).",
          metaDescriptionEn: "In-depth review of Environmental Affairs: UNFCCC COP28 (Dubai Loss and Damage Fund) & COP29, Ramsar Wetland additions in India (80+ sites), Project Tiger 50-year milestone, International Big Cat Alliance (IBCA), and Project Cheetah at Kuno National Park.",
          notesJsonPath: "/data/notes/group_b/prelims/current_affairs/c11_environment_affairs.json",
          quizTag: "gb_ca_env_01",
          tags: ["Environment", "UNFCCC COP28 Dubai", "Loss and Damage Fund", "Ramsar Sites 80+", "Project Cheetah Kuno", "IBCA Big Cats", "High-Weightage"],
          searchKeywords: ["unfccc cop28 dubai uae loss and damage fund", "project cheetah kuno national park namibia south africa", "international big cat alliance ibca 50 years project tiger", "new ramsar wetland sites india 85", "mission life lifestyle for environment", "पर्यावरण चालू घडामोडी", "COP28 दुबई हवामान परिषद", "लॉस अँड डॅमेज फंड", "प्रोजेक्ट चित्ता कुनो राष्ट्रीय उद्यान", "आंतरराष्ट्रीय बिग कॅट अलायन्स IBCA", "नवीन रामसर स्थळे"],
          topics: [
            {
              id: "top_gb_c11_01",
              nameMr: "हवामान परिषदा, चित्ता पुनर्वास, व्याघ्र संवर्धन आणि रामसर स्थळे",
              nameEn: "UN Climate Pacts, Translocation Ecology, Tiger Census & Ramsar Additions",
              subtopics: [
                {
                  id: "st_gb_c11_01_01",
                  titleMr: "UNFCCC COP हवामान परिषदा: COP28 (दुबई, UAE - ऐतिहासिक 'लॉस अँड डॅमेज फंड' / Loss and Damage Fund कार्यान्वित; जीवाश्म इंधनाकडून संक्रमण - Transition away from fossil fuels); COP29 (बाकू, अझरबैजान); मिशन लाईफ (Mission LiFE - Lifestyle for Environment)",
                  titleEn: "UNFCCC COP Summits: COP28 at Dubai (Operationalised Loss and Damage Fund; Global pledge to transition away from fossil fuels); COP29 at Baku, Azerbaijan; Mission LiFE initiative",
                  chips: ["COP28 दुबई परिषद", "लॉस अँड डॅमेज फंड", "जीवाश्म इंधन संक्रमण", "COP29 बाकू अझरबैजान", "मिशन लाईफ"]
                },
                {
                  id: "st_gb_c11_01_02",
                  titleMr: "प्रोजेक्ट टायगरला ५० वर्षे आणि IBCA: १ एप्रिल १९७३ रोजी कॉर्बेट राष्ट्रीय उद्यानातून सुरू झालेल्या 'प्रोजेक्ट टायगर'ला ५० वर्षे पूर्ण; म्हैसूर येथे 'आंतरराष्ट्रीय बिग कॅट अलायन्स' (IBCA - International Big Cat Alliance) ची स्थापना (वाघ, सिंह, बिबट्या, हिमबिबट्या, चित्ता, जग्वार, प्यूमा या ७ प्रजातींचे संवर्धन); अखिल भारतीय व्याघ्र गणना (भारतात ३,६८२ वाघ - जगातील ७५% वाघ)",
                  titleEn: "50 Years of Project Tiger (1973-2023) & Launch of International Big Cat Alliance (IBCA) for 7 big cat species; All India Tiger Estimation (3,682 tigers in India - 75% of world total)",
                  chips: ["प्रोजेक्ट टायगर ५० वर्षे", "IBCA आंतरराष्ट्रीय बिग कॅट अलायन्स", "७ प्रजाती संवर्धन", "भारतात ३६८२ वाघ"]
                },
                {
                  id: "st_gb_c11_01_03",
                  titleMr: "प्रोजेक्ट चित्ता (Project Cheetah): भारतात १९५२ मध्ये नामशेष घोषित; नामिबिया आणि दक्षिण आफ्रिकेतून आणलेल्या चित्त्यांचे 'कुनो राष्ट्रीय उद्यान' (Kuno National Park, मध्य प्रदेश) येथे यशस्वी पुनर्वासन; भारतातील पहिला आंतरखंडीय वन्यजीव स्थलांतर प्रकल्प",
                  titleEn: "Project Cheetah: Reintroduction of cheetahs (extinct in India since 1952) translocated from Namibia & South Africa to Kuno National Park, MP; World's 1st intercontinental carnivore translocation",
                  chips: ["प्रोजेक्ट चित्ता", "कुनो राष्ट्रीय उद्यान (मध्य प्रदेश)", "नामिबिया व दक्षिण आफ्रिका", "आंतरखंडीय स्थलांतर"]
                },
                {
                  id: "st_gb_c11_01_04",
                  titleMr: "भारतातील रामसर पाणथळ स्थळे (Ramsar Sites): भारतातील रामसर स्थळांची संख्या ८० च्या पुढे पोहोचली (तामिळनाडूमध्ये सर्वाधिक रामसर स्थळे); महाराष्ट्रातील ३ रामसर स्थळे: १) नांदूर मध्यमेश्वर (नाशिक), २) लोणार उल्का सरोवर (बुलढाणा), ३) ठाणे खाडी फ्लेमिंगो अभयारण्य",
                  titleEn: "Ramsar Wetland Network: India's tally exceeds 80 sites (Tamil Nadu highest); Maharashtra's 3 designated sites: Nandur Madhmeshwar, Lonar Lake, and Thane Creek",
                  chips: ["रामसर स्थळे ८० पार", "तामिळनाडू सर्वाधिक स्थळे", "महाराष्ट्रातील ३ रामसर स्थळे", "नांदूर मध्यमेश्वर, लोणार, ठाणे खाडी"]
                }
              ],
              sources: [
                { book: "पृथ्वी परिक्रमा", standard: "पर्यावरण विशेषांक", chapterRef: "पर्यावरण व हवामान घडामोडी" },
                { book: "केंद्रीय पर्यावरण व वन मंत्रालय (MoEFCC)", standard: "वार्षिक अहवाल", chapterRef: "व्याघ्र गणना व रामसर स्थळे" }
              ]
            }
          ]
        },
        {
          id: "gb_ca_c12",
          code: "C12",
          section: "F",
          slug: "important-constitutional-and-statutory-appointments",
          nameMr: "महत्त्वाच्या घटनात्मक, वैधानिक व आंतरराष्ट्रीय नियुक्त्या",
          nameEn: "Important Constitutional, Statutory, National & Global Appointments",
          name: "महत्त्वाच्या नियुक्त्या व पदे (High-Profile Appointments)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 3,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_ca_c12",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_ca_c11",
          nextChapterId: "gb_ca_c13",
          metaDescriptionMr: "भारताचे सरन्यायाधीश (CJI), मुख्य निवडणूक आयुक्त, कॅग (CAG), महान्यायवादी, लष्कर/नौदल/हवाई दल प्रमुख, CDS, RBI गव्हर्नर, जागतिक बँक अध्यक्ष (अजय बंगा), आणि महाराष्ट्रातील पदे.",
          metaDescriptionEn: "In-depth review of High-Profile Appointments: Chief Justice of India (CJI), Chief Election Commissioner, CAG, Attorney General, Armed Forces Chiefs, Chief of Defence Staff (CDS), RBI Governor, World Bank President (Ajay Banga), and Maharashtra Governor/DGP.",
          notesJsonPath: "/data/notes/group_b/prelims/current_affairs/c12_appointments.json",
          quizTag: "gb_ca_appointments_01",
          tags: ["Appointments", "Chief Justice of India", "Chief of Defence Staff", "World Bank Ajay Banga", "CAG", "Maharashtra Governor", "High-Weightage"],
          searchKeywords: ["important constitutional appointments india", "chief justice of india cji", "chief election commissioner cec", "chief of defence staff cds", "world bank president ajay banga", "attorney general of india r venkataramani", "maharashtra governor dgp chief secretary", "महत्त्वाच्या नियुक्त्या", "भारताचे सरन्यायाधीश CJI", "चीफ ऑफ डिफेन्स स्टाफ CDS", "जागतिक बँक अध्यक्ष अजय बंगा", "महाराष्ट्राचे राज्यपाल व मुख्य सचिव", "पोलीस महासंचालक DGP"],
          topics: [
            {
              id: "top_gb_c12_01",
              nameMr: "घटनात्मक पदे, केंद्रीय नियामक संस्था, आंतरराष्ट्रीय प्रमुख आणि महाराष्ट्र प्रशासन",
              nameEn: "Constitutional Appointees, Central Regulators, Global Heads & State Bureaucracy",
              subtopics: [
                {
                  id: "st_gb_c12_01_01",
                  titleMr: "राष्ट्रीय घटनात्मक व वैधानिक पदे: भारताचे सरन्यायाधीश (CJI); भारताचे महान्यायवादी (Attorney General); भारताचे नियंत्रक व महालेखापरीक्षक (CAG); मुख्य निवडणूक आयुक्त (CEC); केंद्रीय दक्षता आयुक्त (CVC); मुख्य माहिती आयुक्त (CIC); राष्ट्रीय मानवाधिकार आयोग (NHRC) अध्यक्ष",
                  titleEn: "National Constitutional Dignitaries: Chief Justice of India (CJI), Attorney General of India, CAG, Chief Election Commissioner (CEC), CVC, Chief Information Commissioner, NHRC Chairperson",
                  chips: ["सरन्यायाधीश CJI", "महान्यायवादी", "कॅग CAG", "मुख्य निवडणूक आयुक्त", "NHRC अध्यक्ष"]
                },
                {
                  id: "st_gb_c12_01_02",
                  titleMr: "संरक्षण व सुरक्षा संस्था प्रमुख: चीफ ऑफ डिफेन्स स्टाफ (CDS); लष्करप्रमुख (Chief of Army Staff), नौदलप्रमुख (Chief of Naval Staff), हवाई दलप्रमुख (Chief of Air Staff); राष्ट्रीय सुरक्षा सल्लागार (NSA); RAW प्रमुख व IB संचालक",
                  titleEn: "Armed Forces & Security Appointees: Chief of Defence Staff (CDS), Chiefs of Army/Navy/Air Force, National Security Advisor (NSA), RAW Chief, Intelligence Bureau Director",
                  chips: ["चीफ ऑफ डिफेन्स स्टाफ (CDS)", "तीन्ही सैन्यदल प्रमुख", "राष्ट्रीय सुरक्षा सल्लागार (NSA)", "RAW प्रमुख"]
                },
                {
                  id: "st_gb_c12_01_03",
                  titleMr: "आंतरराष्ट्रीय संस्थांमधील प्रमुख भारतीय: जागतिक बँकेचे अध्यक्ष (World Bank President: अजय बंगा - पहिले भारतीय-अमेरिकन अध्यक्ष); आंतरराष्ट्रीय न्यायालय (ICJ न्यायाधीश); WTO, IMF व WHO मधील भारतीय मुत्सद्दी",
                  titleEn: "Global Apex Bodies: Ajay Banga (First Indian-American World Bank President), International Court of Justice (ICJ) judges, Indian envoys at IMF, WTO, WHO",
                  chips: ["अजय बंगा (जागतिक बँक अध्यक्ष)", "आंतरराष्ट्रीय न्यायालय ICJ", "IMF संचालक मंडळ"]
                },
                {
                  id: "st_gb_c12_01_04",
                  titleMr: "महाराष्ट्र राज्य प्रशासनातील सर्वोच्च पदे: महाराष्ट्राचे राज्यपाल; महाराष्ट्र विधानसभा अध्यक्ष व विधानपरिषद सभापती; मुंबई उच्च न्यायालयाचे मुख्य न्यायाधीश; महाराष्ट्राचे मुख्य सचिव (Chief Secretary); महाराष्ट्र पोलीस महासंचालक (DGP); MPSC अध्यक्ष",
                  titleEn: "Apex Maharashtra Dignitaries: Governor of Maharashtra, Speaker of Legislative Assembly, Council Chairman, Chief Justice of Bombay High Court, Chief Secretary, DGP Maharashtra, MPSC Chairman",
                  chips: ["महाराष्ट्राचे राज्यपाल", "मुंबई उच्च न्यायालय मुख्य न्यायाधीश", "मुख्य सचिव महाराष्ट्र", "पोलीस महासंचालक (DGP)", "MPSC अध्यक्ष"]
                }
              ],
              sources: [
                { book: "सिम्पलीफाइड चालू घडामोडी", standard: "डॉ. सुशील बारी", chapterRef: "महत्त्वाच्या नियुक्त्या व व्यक्ती विशेष" },
                { book: "पृथ्वी परिक्रमा", standard: "चालू घडामोडी", chapterRef: "प्रशासकीय नियुक्त्या" }
              ]
            }
          ]
        },
        {
          id: "gb_ca_c13",
          code: "C13",
          section: "F",
          slug: "obituaries-and-eminent-personalities-in-news",
          nameMr: "निधनवार्ता आणि राष्ट्रीय-आंतरराष्ट्रीय पातळीवर चर्चेत राहिलेल्या व्यक्ती",
          nameEn: "Obituaries & Eminent Personalities in News (National & Maharashtra)",
          name: "निधनवार्ता व व्यक्ती विशेष (Obituaries & Personalities)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 3,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_ca_c13",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_ca_c12",
          nextChapterId: "gb_ca_c14",
          metaDescriptionMr: "एम. एस. स्वामीनाथन (हरितक्रांती जनक), बिन्देश्वर पाठक (सुलभ इंटरनॅशनल), फली नरिमन (ज्येष्ठ कायदेतज्ज्ञ), प्रभा अत्रे (किराणा घराणे), मनोहर जोशी (महाराष्ट्राचे माजी मुख्यमंत्री), आणि पद्मश्री विजेते.",
          metaDescriptionEn: "In-depth review of Obituaries: M.S. Swaminathan (Green Revolution pioneer), Bindeshwar Pathak (Sulabh Sanitation), Fali S. Nariman (Jurist), Prabha Atre (Kirana Gharana), Manohar Joshi (Ex-CM Maharashtra), and Padma awardees.",
          notesJsonPath: "/data/notes/group_b/prelims/current_affairs/c13_obituaries.json",
          quizTag: "gb_ca_obituaries_01",
          tags: ["Obituaries", "Swaminathan", "Bindeshwar Pathak Sulabh", "Fali Nariman", "Prabha Atre", "Manohar Joshi", "High-Weightage"],
          searchKeywords: ["obituaries prominent personalities m s swaminathan green revolution", "bindeshwar pathak sulabh international sanitation toilet man", "fali s nariman constitutional jurist", "prabha atre classical singer kirana gharana", "manohar joshi ex chief minister lok sabha speaker", "निधनवार्ता", "एम एस स्वामीनाथन हरितक्रांती", "बिन्देश्वर पाठक सुलभ इंटरनॅशनल", "फली नरिमन कायदेतज्ज्ञ", "प्रभा अत्रे किराणा घराणे शास्त्रीय संगीत", "मनोहर जोशी माजी मुख्यमंत्री"],
          topics: [
            {
              id: "top_gb_c13_01",
              nameMr: "चर्चेतील दिवंगत व्यक्ती, त्यांचे जीवनकार्य, संस्था व मिळालेले पुरस्कार",
              nameEn: "Homage, Lifework Retrospectives, Institution Builders & State Laurels",
              subtopics: [
                {
                  id: "st_gb_c13_01_01",
                  titleMr: "कृषी व विज्ञान क्षेत्रातील महनीय व्यक्ती: डॉ. एम. एस. स्वामीनाथन (भारतीय हरितक्रांतीचे जनक; CACP पहिले अध्यक्ष; जागतिक अन्न पुरस्कार १९८७ चे पहिले मानकरी; भारतरत्न सन्मान); प्रो. सी. आर. राव (थोर आंतरराष्ट्रीय सांख्यिकीशास्त्रज्ञ - इंटरनॅशनल प्राईज इन स्टॅटिस्टिक्स)",
                  titleEn: "Science & Agriculture: Dr. M.S. Swaminathan (Father of India's Green Revolution, 1st World Food Prize 1987, Bharat Ratna posthumous); Prof C.R. Rao (Eminent Statistician)",
                  chips: ["डॉ एम एस स्वामीनाथन (हरितक्रांती जनक)", "पहिला जागतिक अन्न पुरस्कार १९८७", "सी आर राव सांख्यिकी"]
                },
                {
                  id: "st_gb_c13_01_02",
                  titleMr: "सामाजिक व कायदे क्षेत्रातील महनीय व्यक्ती: १) डॉ. बिन्देश्वर पाठक (भारताचे 'टॉयलेट मॅन' / सुलभ इंटरनॅशनलचे संस्थापक - स्वच्छता क्रांती व मानवी विष्ठा हाताने वाहणे मुक्ती); २) फली एस. नरिमन (भारताचे ज्येष्ठ घटनातज्ज्ञ व सर्वोच्च न्यायालयाचे ज्येष्ठ वकील - संविधानाचे संरक्षक); ३) न्यायमूर्ती फातिमा बीवी (सर्वोच्च न्यायालयाच्या पहिल्या महिला न्यायाधीश)",
                  titleEn: "Social & Legal Luminaries: Dr. Bindeshwar Pathak ('Toilet Man of India', Founder of Sulabh International); Fali S. Nariman (Doyen of constitutional law); Justice Fathima Beevi (1st woman SC Judge)",
                  chips: ["बिन्देश्वर पाठक (सुलभ इंटरनॅशनल टॉयलेट मॅन)", "फली नरिमन (ज्येष्ठ घटनातज्ज्ञ)", "फातिमा बीवी (पहिल्या महिला SC न्यायाधीश)"]
                },
                {
                  id: "st_gb_c13_01_03",
                  titleMr: "कला, साहित्य व राजकीय क्षेत्रातील महनीय व्यक्ती (महाराष्ट्र विशेष): १) प्रभा अत्रे (किराणा घराण्याच्या ज्येष्ठ शास्त्रीय गायिका - पद्मविभूषण); २) मनोहर जोशी (महाराष्ट्राचे माजी मुख्यमंत्री, माजी लोकसभा अध्यक्ष); ३) सुधीर जोशी; ४) कुमार केतकर / ज्येष्ठ पत्रकार व साहित्यिक; ५) उस्ताद राशीद खान (रामपूर-सहसवान घराणे)",
                  titleEn: "Arts, Politics & Literature (Maharashtra Context): Dr. Prabha Atre (Kirana Gharana classical doyenne - Padma Vibhushan), Manohar Joshi (Ex-CM of Maharashtra & Lok Sabha Speaker), Ustad Rashid Khan (Classical vocalist)",
                  chips: ["प्रभा अत्रे (किराणा घराणे शास्त्रीय संगीत)", "मनोहर जोशी (माजी मुख्यमंत्री व लोकसभा अध्यक्ष)", "उस्ताद राशीद खान"]
                }
              ],
              sources: [
                { book: "पृथ्वी परिक्रमा", standard: "चालू घडामोडी", chapterRef: "निधनवार्ता व व्यक्ती विशेष" },
                { book: "सिम्पलीफाइड चालू घडामोडी", standard: "डॉ. सुशील बारी", chapterRef: "वार्षिक श्रद्धांजली पर्व" }
              ]
            }
          ]
        },
        {
          id: "gb_ca_c14",
          code: "C14",
          section: "F",
          slug: "current-affairs-master-revision-days-themes-and-pyq-trends",
          nameMr: "चालू घडामोडी मास्टर रिव्हिजन: जागतिक दिनविशेष, थीम्स व PYQ ट्रेंड्स",
          nameEn: "Current Affairs Master Revision: Important Days, UN Themes & PYQ Trends",
          name: "चालू घडामोडी मास्टर रिव्हिजन (Master Revision: Days, Themes & PYQs)",
          category: "REVISION",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_ca_c14",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_ca_c13",
          nextChapterId: null,
          metaDescriptionMr: "महत्त्वाचे राष्ट्रीय व आंतरराष्ट्रीय दिनविशेष (तारखा व संयुक्त राष्ट्र थीम्स), युनेस्को अमृत वारसा स्थळे, आणि MPSC संयुक्त गट-ब पूर्व परीक्षेतील १० वर्षांचे PYQ कल व एलिमिनेशन ट्रिक्स.",
          metaDescriptionEn: "Master consolidation module: Calendar of high-frequency national/international observances and UN annual themes, UNESCO Intangible Cultural Heritage (Garba), and 10-year MPSC Group B current affairs trend analysis.",
          notesJsonPath: "/data/notes/group_b/prelims/current_affairs/c14_master_revision.json",
          quizTag: "gb_ca_revision_01",
          tags: ["Revision", "Important Days Themes", "UN Observances", "UNESCO Intangible Heritage", "PYQ Trends", "Elimination Heuristics", "High-Weightage"],
          searchKeywords: ["important days and themes un observances calendar", "national space day 23 august constitution day 26 november", "unesco intangible cultural heritage garba", "mpsc group b current affairs pyq trends", "elimination techniques current affairs", "महत्त्वाचे दिनविशेष व थीम्स", "राष्ट्रीय अंतराळ दिन २३ ऑगस्ट", "संविधान दिन २६ नोव्हेंबर", "युनेस्को अमूर्त वारसा गरबा", "मास्टर रिव्हिजन", "PYQ विश्लेषण"],
          topics: [
            {
              id: "top_gb_c14_01",
              nameMr: "दिनविशेष कॅलेंडर, संयुक्त राष्ट्र थीम्स, युनेस्को वारसा आणि परीक्षेची रणनीती",
              nameEn: "Observance Calendar, UN Thematic Agendas, UNESCO Heritage & Exam Tactics",
              subtopics: [
                {
                  id: "st_gb_c14_01_01",
                  titleMr: "महत्त्वाचे राष्ट्रीय व जागतिक दिनविशेष आणि थीम्स (MPSC वारंवार प्रश्न): ९ जानेवारी (प्रवासी भारतीय दिवस), २४ जानेवारी (राष्ट्रीय बालिका दिन), २५ जानेवारी (राष्ट्रीय मतदार दिन), २८ फेब्रुवारी (राष्ट्रीय विज्ञान दिन - रामन इफेक्ट), २२ मार्च (जागतिक जल दिन), २२ एप्रिल (जागतिक वसुंधरा दिन), २१ मे (दहशतवाद विरोधी दिन), ५ जून (जागतिक पर्यावरण दिन), २१ जून (आंतरराष्ट्रीय योग दिन), २९ जुलै (जागतिक व्याघ्र दिन), २३ ऑगस्ट (राष्ट्रीय अंतराळ दिन), २६ नोव्हेंबर (संविधान दिन)",
                  titleEn: "High-Frequency Observance Calendar: 9 Jan (Pravasi Bharatiya), 24 Jan (Girl Child), 25 Jan (Voters Day), 28 Feb (National Science Day - Raman Effect), 22 March (Water Day), 22 April (Earth Day), 5 June (Environment), 21 June (Yoga), 29 July (Tiger), 23 Aug (National Space Day), 26 Nov (Constitution Day)",
                  chips: ["२३ ऑगस्ट (राष्ट्रीय अंतराळ दिन)", "२६ नोव्हेंबर (संविधान दिन)", "५ जून (पर्यावरण दिन)", "२१ जून (योग दिन)", "२८ फेब्रुवारी (विज्ञान दिन)"]
                },
                {
                  id: "st_gb_c14_01_02",
                  titleMr: "युनेस्को अमूर्त सांस्कृतिक वारसा (Intangible Cultural Heritage): गुजरातचा पारंपारिक 'गरबा' (Garba) नृत्य युनेस्कोच्या अमूर्त सांस्कृतिक वारसा यादीत समाविष्ट (भारतातील १५ वे अमूर्त सांस्कृतिक वारसा स्थळ; १४ वे कोलकाता दुर्गा पूजा); युनेस्को क्रिएटिव्ह सिटीज नेटवर्क (UCCN - कोझिकोडे साहित्य शहर, ग्वाल्हेर संगीत शहर)",
                  titleEn: "UNESCO Intangible Cultural Heritage: Gujarat's 'Garba' inscribed as 15th element from India (Kolkata Durga Puja 14th); UNESCO Creative Cities Network (UCCN: Kozhikode City of Literature, Gwalior City of Music)",
                  chips: ["गरबा नृत्य (UNESCO अमूर्त वारसा)", "कोझिकोडे (साहित्य शहर)", "ग्वाल्हेर (संगीत शहर)"]
                },
                {
                  id: "st_gb_c14_01_03",
                  titleMr: "MPSC संयुक्त पूर्व परीक्षा चालू घडामोडी कल व एलिमिनेशन तंत्र: मागील १० वर्षांत विचारलेले प्रश्न; चालू घडामोडींचे १५ पैकी ५-६ प्रश्न थेट महाराष्ट्र शासनाचे निर्णय, पुरस्कार व योजनांवर असतात; उरलेले प्रश्न क्रीडा, संरक्षण सराव, इस्रो मोहिमा व जागतिक निर्देशांकांवर असतात; पर्यायांमध्ये दिलेल्या तारखा, आकडेवारी व संस्थांची क्रॉस-व्हेरिफिकेशन पद्धत",
                  titleEn: "MPSC Prelims Current Affairs Trend Analysis: Recurring Question Patterns (Maharashtra Govt GRs, Schemes, Sports, Defence, ISRO, Indices) & Date/Data Elimination Heuristics",
                  chips: ["PYQ ट्रेंड विश्लेषण", "एलिमिनेशन पद्धत", "महाराष्ट्र योजना हमखास प्रश्न", "१० वर्षांचे विश्लेषण"]
                }
              ],
              sources: [
                { book: "पृथ्वी परिक्रमा", standard: "वार्षिक विशेषांक", chapterRef: "दिनविशेष, थीम्स व सांख्यिकी" },
                { book: "MPSC मागील वर्षांच्या प्रश्नपत्रिका (PYQ संच)", standard: "२०१३ ते २०२५", chapterRef: "चालू घडामोडी प्रश्न संच व विश्लेषण" }
              ]
            }
          ]
        }
      ]
    },


    {
      id: "gb_pre_aptitude_reasoning",
      code: "APT",
      slug: "quantitative-aptitude-and-logical-reasoning",
      nameMr: "अंकगणित व बुद्धिमत्ता चाचणी",
      nameEn: "Quantitative Aptitude and Logical Reasoning",
      name: "अंकगणित व बुद्धिमत्ता (Aptitude & Reasoning)",
      officialScope: "Basic Numeracy, LCM-HCF, Averages, Ratio & Proportion, Percentages, Profit & Loss, Simple & Compound Interest, Time-Speed-Distance, Work & Wages, Coding-Decoding, Blood Relations, Direction Sense, Syllogisms, Clocks & Calendars, and Data Interpretation",
      version: "1.0",
      verifiedDate: "2026-10-28",
      notesJsonBaseDir: "/data/notes/group_b/prelims/aptitude/",


      // UI Theme & Theming Metadata
      theme: {
        primaryColor: "#7c3aed",        // Violet / Computational Logic Theme
        bgColor: "#f5f3ff",
        iconClass: "ri-calculator-line"
      },


      // अभ्यास व डॅशबोर्ड ॲनालिटिक्स मेट्रिक्स
      metrics: {
        totalChapters: 16,
        totalEstimatedHours: 54,
        avgQuestionsInPrelims: 15,
        targetMarks: 15,
        weightageRange: "13-16 Questions"
      },


      // विषय पातळीवरील स्मार्ट टॅग्ज
      subjectTags: [
        "Core-GS",
        "Group-B-Prelims",
        "Paper-1-GS",
        "Pre-Cum-Mains",
        "High-Weightage",
        "Formula-Intensive",
        "Time-Management-Crucial"
      ],


      filterCategory: "GS",
      searchKeywords: [
        "mpsc group b aptitude reasoning", "quantitative aptitude shortcut tricks", "lcm hcf percentages profit loss",
        "time work speed distance train problems", "blood relations direction sense test coding decoding",
        "clocks and calendar leap year", "syllogism venn diagrams seating arrangement",
        "अंकगणित बुद्धिमत्ता चाचणी", "लसावि मसावि", "टक्केवारी नफा तोटा", "काम काळ वेग रेल्वे", "नातेसंबंध दिशा ज्ञान", "दिनदर्शिका कॅलेंडर घड्याळ", "बैठक व्यवस्था"
      ],


      referenceSources: [
        {
          name: "MPSC Non-Gazetted Group B Combined Syllabus",
          role: "अधिकृत परीक्षा-संदर्भ",
          url: "https://mpsc.gov.in"
        },
        {
          name: "संपूर्ण बुद्धिमत्ता चाचणी - सचिन ढवळे",
          role: "शॉर्टकट ट्रिक्स व MPSC परीक्षाभिमुख सोडवणूक पद्धती"
        },
        {
          name: "मॅजिक ऑफ मॅथ्स व बुद्धिमत्ता - नितीन महाले",
          role: "मूलभूत संकल्पना व सूत्रे"
        },
        {
          name: "Quantitative Aptitude for Competitive Examinations - R.S. Aggarwal",
          role: "राष्ट्रीय स्तरावरील मानक सराव संग्रह"
        },
        {
          name: "A Modern Approach to Verbal & Non-Verbal Reasoning - R.S. Aggarwal",
          role: "तार्किक व विश्लेषणात्मक बुद्धिमत्ता संदर्भ"
        }
      ],


      chapters: [
        // =========================================================================
        // विभाग A — अंकगणित (Quantitative Aptitude)
        // =========================================================================
        {
          id: "gb_apt_c01",
          code: "A01",
          section: "A",
          slug: "number-systems-simplification-and-divisibility",
          nameMr: "संख्याज्ञान, विभाज्यतेच्या कसोट्या आणि पदावली (BODMAS)",
          nameEn: "Number Systems, Divisibility Rules & Simplification (BODMAS)",
          name: "संख्याज्ञान व पदावली (Number Systems & BODMAS)",
          category: "CORE",
          difficulty: "EASY",
          priority: "HIGH",
          estimatedHours: 3,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_apt_c01",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: null,
          nextChapterId: "gb_apt_c02",
          metaDescriptionMr: "संख्यांचे प्रकार (नैसर्गिक, पूर्ण, मूळ, जोडमूळ, सहमूळ, परिमेय), विभाज्यतेच्या कसोट्या (२ ते ११), BODMAS पदावली नियम, वर्ग-वर्गमूळ, आणि घातांकाचे नियम.",
          metaDescriptionEn: "Foundational Arithmetic: Number classifications (Natural, Primes, Co-primes, Rational), Divisibility Rules (2 to 11), BODMAS bracket priority, Surds & Indices, and Square/Cube Roots.",
          notesJsonPath: "/data/notes/group_b/prelims/aptitude/c01_number_systems.json",
          quizTag: "gb_apt_numbers_01",
          tags: ["Quantitative Aptitude", "Number Systems", "Divisibility Rules", "BODMAS", "Square Roots", "Surds and Indices", "Foundation"],
          searchKeywords: ["number systems classification prime composite co-prime", "divisibility rules 2 3 4 5 6 7 8 9 11", "bodmas rule bracket order division multiplication", "surds and indices formulas", "संख्याज्ञान मूळ संख्या जोडमूळ", "विभाज्यतेच्या कसोट्या", "BODMAS पदावली", "वर्गमूळ घनमूळ"],
          topics: [
            {
              id: "top_gb_a01_01",
              nameMr: "संख्यांचे प्रकार, कसोट्या, घातांक आणि पदावलीचे सुलभीकरण",
              nameEn: "Number Classification, Divisibility Logic, Indices & BODMAS Mechanics",
              subtopics: [
                {
                  id: "st_gb_a01_01_01",
                  titleMr: "संख्यांचे वर्गीकरण: १) नैसर्गिक संख्या (N: १, २, ३...); २) पूर्ण संख्या (W: ०, १, २...); ३) मूळ संख्या (Prime Numbers: केवळ १ व स्वतःने भाग जाणाऱ्या - १ ते १०० मध्ये एकूण २५ मूळ संख्या, बेरीज १०६०; २ ही एकमेव सम मूळ संख्या); ४) जोडमूळ संख्या (Twin Primes: २ चा फरक असणाऱ्या - १ ते १०० मध्ये ८ जोड्या); ५) सहमूळ संख्या (Co-Primes: मसावि १ असणाऱ्या); ६) परिमेय व अपरिमेय संख्या",
                  titleEn: "Classification of Numbers: Natural, Whole, Prime (1 to 100 has 25 primes, sum is 1060; 2 is only even prime), Twin Primes (8 pairs in 1-100), Co-primes (HCF is 1), Rational & Irrational numbers",
                  chips: ["मूळ संख्या (१ ते १०० मध्ये २५)", "जोडमूळ संख्या ८ जोड्या", "सहमूळ संख्या", "२ ही सम मूळ संख्या"]
                },
                {
                  id: "st_gb_a01_01_02",
                  titleMr: "विभाज्यतेच्या कसोट्या (Divisibility Rules): २ ची कसोटी (एकक स्थानी ०, २, ४, ६, ८); ३ ची कसोटी (अंकांच्या बेरजेला ३ ने भाग); ४ ची कसोटी (शेवटच्या दोन अंकांना भाग); ९ ची कसोटी (अंकांच्या बेरजेला ९ ने भाग); ११ ची कसोटी (विषम स्थानावरील अंकांची बेरीज व सम स्थानावरील अंकांची बेरीज यांतील फरक ० किंवा ११ च्या पटीत असावा); ७ व १३ च्या कसोट्या",
                  titleEn: "Divisibility Rules: 2, 3 (sum of digits), 4 (last 2 digits), 8 (last 3 digits), 9 (sum of digits), 11 (difference between sum of odd and even place digits is 0 or multiple of 11)",
                  chips: ["११ ची कसोटी (विषम-सम फरक)", "९ ची कसोटी", "४ व ८ ची कसोटी", "विभाज्यतेचे नियम"]
                },
                {
                  id: "st_gb_a01_01_03",
                  titleMr: "BODMAS नियम व पदावली: कंस सोडवणे (कंस: रेषा कंस -> साधा () -> महिरपी {} -> चौकटी []); गुणाकार व भागाकार डावीकडून उजवीकडे; बेरीज व वजाबाकी; घातांकाचे नियम (am × an = am+n; am ÷ an = am-n; (am)n = amn; a⁰ = १; a⁻¹ = १/a)",
                  titleEn: "BODMAS Simplification: Priority Order: Brackets (Bar -> Round -> Curly -> Square), Orders/Powers, Division & Multiplication, Addition & Subtraction; Laws of Indices",
                  chips: ["BODMAS नियम", "कंस सोडवण्याचा क्रम", "घातांकाचे नियम (a^m * a^n)", "a^0 = 1"]
                }
              ],
              sources: [
                { book: "मॅजिक ऑफ मॅथ्स", standard: "नितीन महाले", chapterRef: "प्रकरण १: संख्याज्ञान व कसोट्या" },
                { book: "Quantitative Aptitude", standard: "R.S. Aggarwal", chapterRef: "Numbers & Simplification" }
              ]
            }
          ]
        },
        {
          id: "gb_apt_c02",
          code: "A02",
          section: "A",
          slug: "lcm-and-hcf-concept-and-applications",
          nameMr: "लसावि आणि मसावि (LCM & HCF): संकल्पना, सूत्रे व उपयोजित उदाहरणे",
          nameEn: "LCM & HCF: Factorisation, Division Method & Real-World Applications",
          name: "लसावि व मसावि (LCM & HCF)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 3,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_apt_c02",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_apt_c01",
          nextChapterId: "gb_apt_c03",
          metaDescriptionMr: "लसावि व मसावि काढण्याच्या पद्धती, मूलभूत सूत्र (दोन संख्यांचा गुणाकार = लसावि × मसावि), अपूर्णांकांचा लसावि-मसावि, आणि घंटा वाजणे, धावपट्टी व लादी बसवण्याची शाब्दिक उदाहरणे.",
          metaDescriptionEn: "In-depth review of LCM & HCF: Prime factorisation, Core product rule (Product of Two Numbers = LCM * HCF), Fractions LCM/HCF formulas, and applied word problems (ringing bells, circular tracks, tiling).",
          notesJsonPath: "/data/notes/group_b/prelims/aptitude/c02_lcm_hcf.json",
          quizTag: "gb_apt_lcm_01",
          tags: ["Quantitative Aptitude", "LCM and HCF", "Product Rule", "Fractions LCM HCF", "Word Problems", "High-Weightage"],
          searchKeywords: ["lcm and hcf shortcut tricks", "product of two numbers equal to lcm hcf", "lcm hcf of fractions formula", "traffic lights bells ringing together lcm problems", "लसावि आणि मसावि", "दोन संख्यांचा गुणाकार = लसावि × मसावि", "अपूर्णांकांचा लसावि मसावि", "घंटा वाजणे लसावि उदाहरणे"],
          topics: [
            {
              id: "top_gb_a02_01",
              nameMr: "लसावि-मसावि सूत्रे, अपूर्णांक पद्धती आणि उपयोजित शाब्दिक गणिते",
              nameEn: "LCM-HCF Principles, Fraction Computations & Application Heuristics",
              subtopics: [
                {
                  id: "st_gb_a02_01_01",
                  titleMr: "मूलभूत संकल्पना व सूत्र: मसावि (महत्तम सामाईक विभाजक / HCF): सर्व संख्यांना पूर्ण भाग जाणारा सर्वात मोठा अवयव; लसावि (लघुत्तम सामाईक विभाज्य / LCM): दिलेल्या सर्व संख्यांनी भाग जाणारी सर्वात लहान संख्या; सुवर्ण सूत्र: पहिली संख्या × दुसरी संख्या = लसावि × मसावि",
                  titleEn: "Core Concept & Formula: HCF (Highest Common Factor) vs LCM (Least Common Multiple); Golden Rule: First Number * Second Number = LCM * HCF",
                  chips: ["मसावि (HCF)", "लसावि (LCM)", "पहिली संख्या × दुसरी संख्या = लसावि × मसावि"]
                },
                {
                  id: "st_gb_a02_01_02",
                  titleMr: "अपूर्णांकांचा लसावि व मसावि: १) अपूर्णांकांचा लसावि = (अंशांचा लसावि) / (छेदांचा मसावि); २) अपूर्णांकांचा मसावि = (अंशांचा मसावि) / (छेदांचा लसावि); दशांश अपूर्णांकांचा लसावि-मसावि काढण्याची अचूक रीत",
                  titleEn: "LCM & HCF of Fractions: LCM of Fractions = (LCM of Numerators) / (HCF of Denominators); HCF of Fractions = (HCF of Numerators) / (LCM of Denominators)",
                  chips: ["अपूर्णांकांचा लसावि = अंशांचा लसावि / छेदांचा मसावि", "अपूर्णांकांचा मसावि = अंशांचा मसावि / छेदांचा लसावि", "दशांश पद्धत"]
                },
                {
                  id: "st_gb_a02_01_03",
                  titleMr: "उपयोजित शाब्दिक गणिते (MPSC हमखास प्रश्न): १) एकाच वेळी वाजणाऱ्या घंटा किंवा सिग्नलचे दिवे पुन्हा एकत्र कधी वाजतील (लसावि काढणे); २) वर्तुळाकार ट्रॅकवर धावणारे खेळाडू पुन्हा प्रारंभीच्या बिंदूवर कधी भेटतील (लसावि); ३) आयताकृती खोलीत बसवता येणाऱ्या मोठ्या चौरसाकृती लाद्यांची संख्या (मसावि काढून क्षेत्रफळ भागणे)",
                  titleEn: "Applied Word Problems: Simultaneous traffic lights / church bells ringing together (LCM problem); Circular racing lap meetings (LCM); Maximum size square tiles for room flooring (HCF problem)",
                  chips: ["घंटा एकत्र वाजणे (लसावि)", "धावपट्टीवर एकत्र भेटणे", "लाद्यांची संख्या (मसावि)"]
                }
              ],
              sources: [
                { book: "संपूर्ण बुद्धिमत्ता व गणित", standard: "सचिन ढवळे", chapterRef: "प्रकरण: लसावि व मसावि" },
                { book: "Quantitative Aptitude", standard: "R.S. Aggarwal", chapterRef: "H.C.F. and L.C.M. of Numbers" }
              ]
            }
          ]
        },
        {
          id: "gb_apt_c03",
          code: "A03",
          section: "A",
          slug: "averages-and-age-problems",
          nameMr: "सरासरी आणि वयावरील उदाहरणे (Averages & Age Calculations)",
          nameEn: "Averages & Quantitative Word Problems on Ages",
          name: "सरासरी व वयवारी (Averages & Ages)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 3,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_apt_c03",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_apt_c02",
          nextChapterId: "gb_apt_c04",
          metaDescriptionMr: "सरासरी सूत्र (एकूण बेरीज / एकूण संख्या), क्रमवार संख्यांची सरासरी, नवीन घटक आल्यास किंवा वगळल्यास सरासरीतील बदल, आणि वयवारीतील गुणोत्तराधारित उदाहरणे.",
          metaDescriptionEn: "In-depth review of Averages (Sum / Count), Consecutive arithmetic series averages, Replacement/Entry average shift shortcuts, and Age word problems using algebraic ratio methods.",
          notesJsonPath: "/data/notes/group_b/prelims/aptitude/c03_averages_ages.json",
          quizTag: "gb_apt_averages_01",
          tags: ["Quantitative Aptitude", "Averages", "Ages Problems", "Consecutive Series Average", "Shortcuts", "High-Weightage"],
          searchKeywords: ["averages formulas shortcuts", "average of consecutive numbers ap", "average increase decrease person joined replaced", "problems on ages ratio method", "सरासरी सूत्र", "क्रमवार संख्यांची सरासरी", "नवीन व्यक्ती आल्यास सरासरी बदल", "वयवारी गुणोत्तर पद्धत"],
          topics: [
            {
              id: "top_gb_a03_01",
              nameMr: "सरासरीचे गुणधर्म, शॉर्टकट पद्धती आणि वयवारी समीकरणांची रचना",
              nameEn: "Average Principles, Ingress-Egress Shortcuts & Age Ratio Equations",
              subtopics: [
                {
                  id: "st_gb_a03_01_01",
                  titleMr: "सरासरीचे मूलभूत सूत्र व शॉर्टकट: सरासरी = सर्व घटकांची एकूण बेरीज / घटकांची एकूण संख्या; १ ते n क्रमवार नैसर्गिक संख्यांची सरासरी = (n + १) / २; क्रमवार सम किंवा विषम संख्यांची सरासरी = (पहिली संख्या + शेवटची संख्या) / २; जर सर्व संख्यांना k ने गुणले तर सरासरीही k पट होते",
                  titleEn: "Core Average Formula & Shortcuts: Average = Total Sum / Total Items; Average of 1 to n natural numbers = (n+1)/2; Consecutive AP series average = (First + Last)/2; Multiplying all terms by k multiplies average by k",
                  chips: ["सरासरी = बेरीज / संख्या", "क्रमवार संख्या सरासरी (n+१)/२", "सम-विषम सरासरी"]
                },
                {
                  id: "st_gb_a03_01_02",
                  titleMr: "घटक समाविष्ट होणे किंवा वगळणे (Entry & Replacement Shortcuts): नवीन व्यक्ती आल्याने सरासरी वाढल्यास: नवीन व्यक्तीचे वजन = जुनी सरासरी + (नवीन एकूण संख्या × सरासरीतील वाढ); शिक्षक वर्गात आल्यावर सरासरी वाढणे; क्रिकेट खेळाडूची फलंदाजी सरासरी (Batting Average) व डाव संख्या",
                  titleEn: "Ingress & Replacement Tricks: New weight = Old Avg + (New Total Count * Increase in Avg); Teacher joining classroom problems; Cricket batting average formulations",
                  chips: ["नवीन व्यक्तीचे वजन सूत्र", "शिक्षकाचे वय शोधणे", "क्रिकेट फलंदाजी सरासरी"]
                },
                {
                  id: "st_gb_a03_01_03",
                  titleMr: "वयावरील उदाहरणे (Age Problems): वर्तमान वय, n वर्षांपूर्वीचे वय (-n), n वर्षांनंतरचे वय (+n); दोन व्यक्तींच्या वयातील फरक आयुष्यात नेहमी स्थिर राहतो; गुणोत्तरावर आधारित पद्धत (उदा. आजचे गुणोत्तर ३:४, ५ वर्षांनंतर ४:५ असल्यास आजचे वय काढणे)",
                  titleEn: "Age Problems & Linear Equations: Present, past (-n) and future (+n) ages; Constant difference principle between two individuals; Cross-ratio multiplication method for quick solving",
                  chips: ["वयवारी (Age Problems)", "वयातील फरक नेहमी स्थिर", "गुणोत्तर पद्धत x-समीकरण"]
                }
              ],
              sources: [
                { book: "मॅजिक ऑफ मॅथ्स", standard: "नितीन महाले", chapterRef: "प्रकरण: सरासरी व वयवारी" },
                { book: "संपूर्ण बुद्धिमत्ता चाचणी", standard: "सचिन ढवळे", chapterRef: "वयवारी घटक" }
              ]
            }
          ]
        },
        {
          id: "gb_apt_c04",
          code: "A04",
          section: "A",
          slug: "ratio-proportion-and-partnership",
          nameMr: "गुणोत्तर, प्रमाण आणि भागीदारी (Ratio, Proportion & Partnership)",
          nameEn: "Ratio, Proportion, Variations & Commercial Partnership Formulations",
          name: "गुणोत्तर, प्रमाण व भागीदारी (Ratio & Partnership)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 3,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_apt_c04",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_apt_c03",
          nextChapterId: "gb_apt_c05",
          metaDescriptionMr: "समान गुणोत्तर (A:B व B:C वरून A:B:C काढणे), चतुर्थ प्रमाणपद, मधले प्रमाणपद, भागीदारीत नफ्याची वाटणी (भांडवल × मुदत), आणि मिश्रण/दूध-पाणी उदाहरणे.",
          metaDescriptionEn: "In-depth review of Ratio & Proportion: Combining ratios (A:B & B:C to A:B:C), Mean & Fourth Proportional, Commercial Partnership profit sharing (Capital * Time), and Alligation mixtures.",
          notesJsonPath: "/data/notes/group_b/prelims/aptitude/c04_ratio_partnership.json",
          quizTag: "gb_apt_ratio_01",
          tags: ["Quantitative Aptitude", "Ratio and Proportion", "Partnership Capital Time", "Alligation Mixtures", "Mean Proportional", "High-Weightage"],
          searchKeywords: ["ratio and proportion shortcut tricks", "combining ratios a b c d", "fourth proportional mean proportional formula", "partnership profit sharing capital time ratio", "alligation mixture milk water", "गुणोत्तर व प्रमाण", "A:B:C गुणोत्तर जोडणे", "चतुर्थ प्रमाणपद", "भागीदारी नफा वाटप (भांडवल × महिने)", "मिश्रण पद्धत"],
          topics: [
            {
              id: "top_gb_a04_01",
              nameMr: "गुणोत्तर एकत्रीकरण, प्रमाणाचे प्रकार, भागीदारी आणि मिश्रण सूत्रे",
              nameEn: "Ratio Aggregation, Proportionality Theorems, Profit Sharing & Alligations",
              subtopics: [
                {
                  id: "st_gb_a04_01_01",
                  titleMr: "गुणोत्तर एकत्रीकरण व प्रमाणपद: A:B = २:३ आणि B:C = ४:५ असल्यास A:B:C काढण्याची उलटा 'N' पद्धत (A:B:C = ८:१२:१५); चतुर्थ प्रमाणपद (Fourth Proportional: a/b = c/d => d = bc/a); भूमितीय मध्य / मध्यम प्रमाणपद (Mean Proportional: b = √(a × c))",
                  titleEn: "Combining Ratios & Proportionals: Combining A:B and B:C into A:B:C via cross-shift method; Fourth Proportional (d = bc/a); Mean Proportional between a and c is sqrt(a*c)",
                  chips: ["A:B:C एकत्रीकरण पद्धत", "मध्यम प्रमाणपद b = sqrt(ac)", "चतुर्थ प्रमाणपद"]
                },
                {
                  id: "st_gb_a04_01_02",
                  titleMr: "भागीदारी व नफा वाटणी (Partnership): नफ्याचे गुणोत्तर = (गुंतवलेले भांडवल × गुंतवणुकीचा कालावधी); नफा १ : नफा २ = (C१ × T१) : (C२ × T२); सक्रिय भागीदार (Active Partner - व्यवस्थापनासाठी मानधन) विरुद्ध निष्क्रिय भागीदार (Sleeping Partner)",
                  titleEn: "Commercial Partnership: Profit Ratio = (Invested Capital * Investment Duration); P1 : P2 = (C1*T1) : (C2*T2); Active managing partner salary deductions",
                  chips: ["नफा = भांडवल × वेळ", "P1:P2 = C1T1:C2T2", "सक्रिय भागीदार मानधन"]
                },
                {
                  id: "st_gb_a04_01_03",
                  titleMr: "मिश्रण पद्धत (Alligation Rule): दोन वेगवेगळ्या किमतीच्या वस्तू मिसळल्यास सरासरी किंमत काढणे: (स्वस्त वस्तूचे प्रमाण / महाग वस्तूचे प्रमाण) = (महाग वस्तूची किंमत - सरासरी किंमत) / (सरासरी किंमत - स्वस्त वस्तूची किंमत); दूध व पाण्याचे गुणोत्तर",
                  titleEn: "Rule of Alligation: Finding mixing ratios for commodities of different prices; Ratio = (Dearer Price - Mean Price) / (Mean Price - Cheaper Price); Milk and water dilution problems",
                  chips: ["मिश्रण पद्धत (Alligation)", "क्रॉस फरक पद्धत", "दूध-पाणी मिश्रण"]
                }
              ],
              sources: [
                { book: "मॅजिक ऑफ मॅथ्स", standard: "नितीन महाले", chapterRef: "प्रकरण: गुणोत्तर, प्रमाण व भागीदारी" },
                { book: "Quantitative Aptitude", standard: "R.S. Aggarwal", chapterRef: "Ratio, Proportion & Partnership" }
              ]
            }
          ]
        },
        {
          id: "gb_apt_c05",
          code: "A05",
          section: "A",
          slug: "percentages-profit-and-loss-and-discount",
          nameMr: "टक्केवारी, नफा-तोटा आणि सूट/कमिशन (Percentages & Profit-Loss)",
          nameEn: "Percentages, Successive Changes, Profit, Loss & Marked Price Discounts",
          name: "टक्केवारी व नफा-तोटा (Percentages, Profit & Loss)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_apt_c05",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_apt_c04",
          nextChapterId: "gb_apt_c06",
          metaDescriptionMr: "अपूर्णांक-टक्केवारी रूपांतरण तक्ता, क्रमागत शेकडा बदल (x + y + xy/100), शेकडा नफा व तोटा (खरेदी किमतीवर), छापील किंमत, शेकडा सूट (Discount), आणि खोटा वजन वापरणारा व्यापारी.",
          metaDescriptionEn: "In-depth review of Percentages & Commercial Math: Fraction-to-percentage conversion matrix (1/2 to 1/12), Successive percentage formula (x + y + xy/100), Cost Price vs Selling Price, Marked Price discounts, and Dishonest dealer tricks.",
          notesJsonPath: "/data/notes/group_b/prelims/aptitude/c05_percentages_profit_loss.json",
          quizTag: "gb_apt_profit_01",
          tags: ["Quantitative Aptitude", "Percentages", "Profit and Loss", "Marked Price Discount", "Successive Percentage", "Dishonest Dealer", "High-Weightage"],
          searchKeywords: ["percentages shortcut fraction conversion table", "successive percentage formula x y xy 100", "profit and loss formulas cp sp", "marked price discount successive discounts", "dishonest dealer weight false balance problems", "टक्केवारी शॉर्टकट", "शेकडा बदल सूत्र", "नफा तोटा शेकडा खरेदी किंमत", "छापील किंमत शेकडा सूट", "खोट्या वजनाचे गणित"],
          topics: [
            {
              id: "top_gb_a05_01",
              nameMr: "टक्केवारी रूपांतरण, क्रमागत वाढ-घट, नफा-तोटा सूत्रे आणि सूट",
              nameEn: "Fractional Equivalents, Successive Volatility, Margin Formulations & Rebates",
              subtopics: [
                {
                  id: "st_gb_a05_01_01",
                  titleMr: "अपूर्णांक ते टक्केवारी मास्टर तक्ता (फास्ट कॅल्क्युलेशन): १/२ = ५०%, १/३ = ३३.३३%, १/४ = २५%, १/५ = २०%, १/६ = १६.६६%, १/७ = १४.२८%, १/८ = १२.५%, १/९ = ११.११%, १/१० = १०%, १/११ = ९.०९%, १/१२ = ८.३३%; भावामध्ये x% वाढ झाल्यास खर्च स्थिर ठेवण्यासाठी वापरातील घट = [x / (१०० + x)] × १००",
                  titleEn: "Fraction to Percentage Speed Matrix: 1/2=50%, 1/3=33.33%, 1/4=25%, 1/6=16.66%, 1/8=12.5%, etc.; Expenditure invariant formula when price rises by x%: Reduction = [x / (100 + x)] * 100",
                  chips: ["अपूर्णांक टक्केवारी तक्ता (१/८ = १२.५%)", "खर्च स्थिर ठेवण्याचे सूत्र", "वापर कपात"]
                },
                {
                  id: "st_gb_a05_01_02",
                  titleMr: "क्रमागत शेकडा बदल (Successive Percentage): एकूण बदल = [x + y + (x × y) / १००]%; वाढ असल्यास धन (+) व घट असल्यास ऋण (-); आयताची लांबी व रुंदी वाढल्यास क्षेत्रफळातील बदल",
                  titleEn: "Successive Percentage Formula: Net Effect = [x + y + (x*y)/100]%; Positive for increment, Negative for decrement; Area changes of rectangle/circle",
                  chips: ["क्रमागत बदल सूत्र x + y + xy/१००", "क्षेत्रफळातील शेकडा बदल"]
                },
                {
                  id: "st_gb_a05_01_03",
                  titleMr: "नफा आणि तोटा मूलभूत सूत्रे: शेकडा नफा = (नफा / खरेदी किंमत CP) × १००; शेकडा तोटा = (तोटा / खरेदी किंमत CP) × १००; नफा किंवा तोटा नेहमी खरेदी किमतीवरच मोजला जातो; एकाच किमतीत दोन वस्तू विकून एकावर x% नफा व दुसऱ्यावर x% तोटा झाल्यास एकूण व्यवहारात नेहमी तोटाच होतो = (x/१०)²%",
                  titleEn: "Profit & Loss Core Rules: Profit % = (Profit/CP)*100; Loss % = (Loss/CP)*100; Calculated strictly on Cost Price; Selling two items at same SP with x% profit and x% loss yields overall net loss = (x/10)^2 %",
                  chips: ["शेकडा नफा = (नफा/खरेदी) × १००", "शेकडा तोटा", "समान नफा-तोटा झाल्यास नेहमी तोटा (x/१०)^२"]
                },
                {
                  id: "st_gb_a05_01_04",
                  titleMr: "छापील किंमत, शेकडा सूट (Discount) व खोटा दुकानदार: छापील किंमत (Marked Price MP); विक्री किंमत SP = छापील किंमत - सूट; सलग दोन सूट (उदा. २०% व १०% ची सलग सूट = २० + १० - (२०×१०)/१०० = २८% एकूण सूट); खोटा दुकानदार १ किलो ऐवजी ९०० ग्रॅम वजन वापरल्यास नफा = (खरे वजन - खोटे वजन) / खोटे वजन × १००",
                  titleEn: "Marked Price & Dishonest Trader: SP = MP - Discount; Successive Discounts formula; Dishonest dealer cheating weight: Profit % = (Error / False Weight) * 100",
                  chips: ["छापील किंमत (MP)", "सलग दोन सूट (Successive Discount)", "खोटा दुकानदार नफा सूत्र"]
                }
              ],
              sources: [
                { book: "मॅजिक ऑफ मॅथ्स", standard: "नितीन महाले", chapterRef: "प्रकरण: टक्केवारी व नफा-तोटा" },
                { book: "संपूर्ण बुद्धिमत्ता व गणित", standard: "सचिन ढवळे", chapterRef: "व्यावसायिक गणित" }
              ]
            }
          ]
        },
        {
          id: "gb_apt_c06",
          code: "A06",
          section: "A",
          slug: "simple-and-compound-interest",
          nameMr: "सरळव्याज आणि चक्रवाढव्याज (Simple & Compound Interest)",
          nameEn: "Simple Interest, Compound Interest & Difference Formulations",
          name: "सरळव्याज व चक्रवाढव्याज (SI & CI)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_apt_c06",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_apt_c05",
          nextChapterId: "gb_apt_c07",
          metaDescriptionMr: "सरळव्याज सूत्र (I = PNR/100), मुद्दलाची पट होणे, चक्रवाढव्याज रास (A = P(1+R/100)^N), पास्कल त्रिकोण पद्धत, आणि २ व ३ वर्षांच्या सरळव्याज-चक्रवाढव्याजातील फरकाची सूत्रे.",
          metaDescriptionEn: "In-depth review of Interest Mathematics: Simple Interest (SI = PNR/100), Principal doubling shortcuts, Compound Interest Amount A = P(1+R/100)^N, Half-yearly compounding, and 2-year/3-year CI-SI difference formulas.",
          notesJsonPath: "/data/notes/group_b/prelims/aptitude/c06_interest_si_ci.json",
          quizTag: "gb_apt_interest_01",
          tags: ["Quantitative Aptitude", "Simple Interest SI", "Compound Interest CI", "Difference Formulas 2 Year 3 Year", "Half Yearly Compounding", "High-Weightage"],
          searchKeywords: ["simple interest formula si pnr 100", "compound interest formula amount p 1 r 100 n", "difference between ci and si for 2 years 3 years formula", "money doubles itself in n years interest rate", "half yearly quarterly compounding", "सरळव्याज सूत्र I = PNR/१००", "चक्रवाढव्याज सूत्र", "२ व ३ वर्षांच्या व्याजातील फरक सूत्र", "मुद्दलाची पट होणे"],
          topics: [
            {
              id: "top_gb_a06_01",
              nameMr: "सरळव्याज, चक्रवाढव्याज, मुदतीची पट आणि व्याजातील फरकाची सूत्रे",
              nameEn: "Simple Interest Dynamics, Annual/Compounded Accruals & Variance Formulations",
              subtopics: [
                {
                  id: "st_gb_a06_01_01",
                  titleMr: "सरळव्याज (Simple Interest): सूत्र: SI = (P × N × R) / १०० (P = मुद्दल, N = कालावधी वर्षे, R = व्याजदर %); रास (Amount) = मुद्दल P + व्याज SI; मुद्दलाची दुप्पट/तिप्पट होणे शॉर्टकट: मुद्दल n पट होण्यासाठी लागणारे वर्षे = [(n - १) / R] × १००",
                  titleEn: "Simple Interest: Formula SI = (P*N*R)/100; Amount = Principal + SI; Shortcut for Principal doubling/tripling: Years N = [(n - 1) / R] * 100",
                  chips: ["सरळव्याज SI = PNR/१००", "रास = मुद्दल + व्याज", "मुद्दल n पट होणे सूत्र [(n-१)/R]×१००"]
                },
                {
                  id: "st_gb_a06_01_02",
                  titleMr: "चक्रवाढव्याज (Compound Interest): व्याजावर व्याज आकारणी; रास A = P × [१ + R/१००]^N; चक्रवाढव्याज CI = A - P; ६ महिन्यांनी (अर्धवार्षिक) व्याज आकारणी असल्यास: दर अर्धा होतो (R/२) व मुदत दुप्पट होते (२N); ३ महिन्यांनी असल्यास: दर R/४ व मुदत ४N होते",
                  titleEn: "Compound Interest: Interest on interest; Amount A = P*(1 + R/100)^N; Semi-annual compounding (Rate becomes R/2, Time becomes 2N); Quarterly compounding (R/4 and 4N)",
                  chips: ["चक्रवाढव्याज रास A = P(१+R/१००)^N", "अर्धवार्षिक आकारणी (R/२, २N)", "व्याजावर व्याज"]
                },
                {
                  id: "st_gb_a06_01_03",
                  titleMr: "सरळव्याज व चक्रवाढव्याज यांतील फरक (MPSC चे सर्वात आवडते सूत्र): १) २ वर्षांसाठी फरकाचे सूत्र: Difference D = P × (R / १००)²; २) ३ वर्षांसाठी फरकाचे सूत्र: Difference D = P × (R / १००)² × [(३०० + R) / १००]",
                  titleEn: "Difference between CI and SI (High-Yield): 1) For 2 Years: D = P * (R/100)^2; 2) For 3 Years: D = P * (R/100)^2 * [(300 + R) / 100]",
                  chips: ["२ वर्षांचा फरक D = P(R/१००)^२", "३ वर्षांचा फरक सूत्र", "फरकावरून मुद्दल शोधणे"]
                }
              ],
              sources: [
                { book: "मॅजिक ऑफ मॅथ्स", standard: "नितीन महाले", chapterRef: "प्रकरण: सरळव्याज व चक्रवाढव्याज" },
                { book: "Quantitative Aptitude", standard: "R.S. Aggarwal", chapterRef: "Simple & Compound Interest" }
              ]
            }
          ]
        },
        {
          id: "gb_apt_c07",
          code: "A07",
          section: "A",
          slug: "time-and-work-pipes-and-cisterns",
          nameMr: "काम आणि काळ, मजुरी आणि नळ व पाण्याची टाकी",
          nameEn: "Time & Work, Men-Days (MDH Rule), Wages, Pipes & Cisterns",
          name: "काम, काळ व पाण्याची टाकी (Time, Work & Pipes)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_apt_c07",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_apt_c06",
          nextChapterId: "gb_apt_c08",
          metaDescriptionMr: "काम व दिवस व्यस्त प्रमाण, लसावि कार्यक्षमता पद्धत (LCM Efficiency Method), काम सोडून जाणे, MDH/W सूत्र, आणि नळ व पाण्याची टाकी (इनलेट व आउटलेट लिकेज).",
          metaDescriptionEn: "In-depth review of Time & Work: LCM Efficiency Method (Unit work calculation), Workers leaving/joining midway, MDH/W chain rule formula, Wages distribution by efficiency, and Pipes & Cisterns (Inlet positive vs Outlet negative work).",
          notesJsonPath: "/data/notes/group_b/prelims/aptitude/c07_time_work_pipes.json",
          quizTag: "gb_apt_work_01",
          tags: ["Quantitative Aptitude", "Time and Work", "LCM Efficiency Method", "MDH Formula", "Pipes and Cisterns Leakage", "High-Weightage"],
          searchKeywords: ["time and work shortcut lcm efficiency method", "men days hours work formula m1 d1 h1 w1", "person leaves work before completion", "pipes and cisterns inlet outlet empty leak", "काम आणि काळ लसावि पद्धत", "MDH सूत्र मजूर दिवस तास काम", "काम सोडून जाणे गणित", "नळ व पाण्याची टाकी गळती"],
          topics: [
            {
              id: "top_gb_a07_01",
              nameMr: "लसावि कार्यक्षमता पद्धत, काम साखळी नियम आणि टाकी-नळ गणिते",
              nameEn: "Unitary LCM Method, Chain Rule (MDH), Labor Wages & Hydraulic Cisterns",
              subtopics: [
                {
                  id: "st_gb_a07_01_01",
                  titleMr: "लसावि कार्यक्षमता पद्धत (LCM Unit Work Method): एकूण काम = दिवसांचा लसावि; एका दिवसाचे काम (कार्यक्षमता Efficiency) = एकूण काम / दिवस; A एक काम १० दिवसांत व B १५ दिवसांत करतो: लसावि ३० युनिट्स; A ची कार्यक्षमता ३ युनिट/दिवस, B ची २ युनिट/दिवस; दोघे मिळून = ३० / (३ + २) = ६ दिवस",
                  titleEn: "LCM Unit Work Method: Total Work = LCM of individual days; 1-Day Work (Efficiency) = Total Units / Days; e.g., A in 10 days, B in 15 days -> Total work 30 units; Together = 30 / (3+2) = 6 days",
                  chips: ["लसावि कार्यक्षमता पद्धत", "एकूण काम = लसावि", "एका दिवसाचे काम (Efficiency)", "दोघे मिळून काम"]
                },
                {
                  id: "st_gb_a07_01_02",
                  titleMr: "काम सोडून जाणे व मजुरी वाटप: काम सुरू झाल्यावर काही दिवसांनी व्यक्ती सोडून जाणे किंवा काम संपण्याच्या काही दिवस आधी सोडून जाणे; मजुरीची वाटणी ही नेहमी व्यक्तींच्या एका दिवसाच्या कार्यक्षमतेच्या (Efficiency) गुणोत्तरात होते, दिवसांच्या प्रमाणात नाही",
                  titleEn: "Leaving Midway & Wage Division: Person leaves after starting or before completion; Total wages are distributed strictly in the ratio of their 1-day work efficiencies (NOT days)",
                  chips: ["काम सोडून जाणे", "मजुरी वाटप कार्यक्षमतेच्या प्रमाणात", "शिल्लक काम पद्धत"]
                },
                {
                  id: "st_gb_a07_01_03",
                  titleMr: "साखळी नियम (MDH/W Formula): (M१ × D१ × H१) / W१ = (M२ × D२ × H२) / W२ (M = मजूर, D = दिवस, H = दैनिक तास, W = केलेले एकूण काम किंवा मिळालेली मजुरी); पुरुष, महिला व मुले यांच्या कार्यक्षमतेची तुलना",
                  titleEn: "Chain Rule (MDH/W Formula): (M1 * D1 * H1) / W1 = (M2 * D2 * H2) / W2 (M = Men, D = Days, H = Hours/day, W = Work done/Wages); Equivalence of Men, Women and Children",
                  chips: ["MDH सूत्र (M1D1H1/W1 = M2D2H2/W2)", "पुरुष व महिला कार्यक्षमता तुलना", "साखळी नियम"]
                },
                {
                  id: "st_gb_a07_01_04",
                  titleMr: "नळ व पाण्याची टाकी (Pipes & Cisterns): पाणी भरणारा नळ (Inlet) धन (+) कार्य करतो; टाकी रिकामी करणारा नळ किंवा गळती (Outlet/Leak) ऋण (-) कार्य करते; टाकी भरण्यासाठी लागणारा निव्वळ वेळ = लसावि / (भरणारी क्षमता - रिकामी करणारी क्षमता)",
                  titleEn: "Pipes & Cisterns: Inflow filling pipe does Positive work (+); Outflow emptying pipe or leak does Negative work (-); Net time = Capacity LCM / Net efficiency",
                  chips: ["पाण्याची टाकी व नळ", "इनलेट धन कार्य (+)", "गळती ऋण कार्य (-)", "टाकी रिकामी होणे"]
                }
              ],
              sources: [
                { book: "मॅजिक ऑफ मॅथ्स", standard: "नितीन महाले", chapterRef: "प्रकरण: काम, काळ व पाण्याची टाकी" },
                { book: "संपूर्ण बुद्धिमत्ता व गणित", standard: "सचिन ढवळे", chapterRef: "काळ व काम पद्धती" }
              ]
            }
          ]
        },
        {
          id: "gb_apt_c08",
          code: "A08",
          section: "A",
          slug: "time-speed-distance-trains-and-boats-streams",
          nameMr: "वेग, वेळ आणि अंतर: रेल्वेवरील उदाहरणे व बोट-प्रवाह",
          nameEn: "Time, Speed, Distance: Relative Speed, Train Encounters & Boats/Streams",
          name: "वेग, अंतर, रेल्वे व बोट (Speed, Distance, Trains & Boats)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_apt_c08",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_apt_c07",
          nextChapterId: "gb_apt_c09",
          metaDescriptionMr: "किमी/तास ते मी/सेकंद रूपांतरण (५/१८), सरासरी वेग (2xy/(x+y)), सापेक्ष वेग (एकाच दिशेने वजाबाकी, विरुद्ध दिशेने बेरीज), रेल्वेने खांब/प्लॅटफॉर्म ओलांडणे, आणि बोट-प्रवाह (प्रवाहाच्या दिशेने व विरुद्ध).",
          metaDescriptionEn: "In-depth review of Time-Speed-Distance: Unit conversion (km/hr * 5/18 = m/s), Harmonic Average Speed (2xy/(x+y)), Relative Speed principles, Train passing poles/bridges (Lengths addition), and Boats & Streams (Upstream vs Downstream).",
          notesJsonPath: "/data/notes/group_b/prelims/aptitude/c08_speed_trains_boats.json",
          quizTag: "gb_apt_speed_01",
          tags: ["Quantitative Aptitude", "Speed Distance Time", "5/18 Conversion", "Relative Speed", "Trains Platform Problems", "Boats and Streams", "High-Weightage"],
          searchKeywords: ["speed distance time formula unit conversion 5 18", "average speed formula 2xy x y", "relative speed same direction opposite direction", "train crosses pole bridge platform length", "boats and streams upstream downstream boat speed", "वेग वेळ अंतर सूत्र ५/१८", "सरासरी वेग सूत्र", "सापेक्ष वेग रेल्वे गणिते", "प्लॅटफॉर्म ओलांडणारी रेल्वे", "बोट व प्रवाह प्रवाहाच्या दिशेने"],
          topics: [
            {
              id: "top_gb_a08_01",
              nameMr: "रूपांतरण सूत्रे, सापेक्ष गती, रेल्वेचे गणित आणि बोट-प्रवाह समीकरणे",
              nameEn: "Unit Metrics, Relative Velocity Dynamics, Train Physics & Nautical Streams",
              subtopics: [
                {
                  id: "st_gb_a08_01_01",
                  titleMr: "मूलभूत सूत्र व एकक रूपांतरण: अंतर = वेग × वेळ; वेळ = अंतर / वेग; वेग = अंतर / वेळ; किमी/तास चे रूपांतर मी/सेकंद करताना ५/१८ ने गुणावे; मी/सेकंद चे रूपांतर किमी/तास करताना १८/५ ने गुणावे; समान अंतरासाठी सरासरी वेग = (२xy) / (x + y)",
                  titleEn: "Core Formulas & Units: Distance = Speed * Time; Conversion: km/hr to m/s multiply by 5/18; m/s to km/hr multiply by 18/5; Harmonic Average Speed for equal distances = 2xy / (x + y)",
                  chips: ["अंतर = वेग × वेळ", "५/१८ ने गुणणे (मी/से)", "१८/५ ने गुणणे (किमी/तास)", "सरासरी वेग = २xy/(x+y)"]
                },
                {
                  id: "st_gb_a08_01_02",
                  titleMr: "सापेक्ष वेग (Relative Speed): १) दोन गाड्या परस्परविरुद्ध दिशेने धावत असल्यास: सापेक्ष वेग = दोन्हींच्या वेगांची बेरीज (S१ + S२); २) दोन गाड्या एकाच दिशेने धावत असल्यास: सापेक्ष वेग = दोन्हींच्या वेगांची वजाबाकी (S१ - S२)",
                  titleEn: "Relative Speed: Opposite directions -> Add speeds (S1 + S2); Same direction -> Subtract speeds (S1 - S2)",
                  chips: ["विरुद्ध दिशा (वेगांची बेरीज)", "समान दिशा (वेगांची वजाबाकी)", "सापेक्ष वेग Relative Speed"]
                },
                {
                  id: "st_gb_a08_01_03",
                  titleMr: "रेल्वेवरील उदाहरणे (Trains Problems): १) रेल्वे खांब, झाड किंवा उभ्या माणसाला ओलांडते तेव्हा पार केलेले अंतर = केवळ रेल्वेची स्वतःची लांबी; २) रेल्वे पूल, बोगदा किंवा प्लॅटफॉर्म ओलांडते तेव्हा पार केलेले अंतर = रेल्वेची लांबी + प्लॅटफॉर्मची लांबी; ३) दोन रेल्वे एकमेकांना ओलांडताना पार केलेले अंतर = दोन्ही रेल्वेच्या लांबीची बेरीज",
                  titleEn: "Train Physics: Crossing pole/standing man -> Distance = Length of Train only; Crossing platform/bridge/tunnel -> Distance = Length of Train + Length of Platform; Crossing another train -> Distance = L1 + L2",
                  chips: ["खांब ओलांडणे (रेल्वे लांबी)", "प्लॅटफॉर्म ओलांडणे (रेल्वे + पूल लांबी)", "वेळ = अंतर / वेग"]
                },
                {
                  id: "st_gb_a08_01_04",
                  titleMr: "बोट आणि प्रवाह (Boats & Streams): संथ पाण्यातील बोटीचा वेग = u, प्रवाहाचा वेग = v; १) प्रवाहाच्या दिशेने वेग (Downstream Speed D = u + v); २) प्रवाहाच्या विरुद्ध दिशेने वेग (Upstream Speed U = u - v); संथ पाण्यातील बोटीचा वेग u = (D + U) / २; प्रवाहाचा वेग v = (D - U) / २",
                  titleEn: "Boats & Streams: Still water boat speed = u, Stream speed = v; Downstream D = u + v; Upstream U = u - v; Boat speed u = (D + U)/2; Stream speed v = (D - U)/2",
                  chips: ["प्रवाहाच्या दिशेने (Downstream = u + v)", "प्रवाहाच्या विरुद्ध (Upstream = u - v)", "बोटीचा वेग u = (D+U)/२", "पाण्याचा वेग v = (D-U)/२"]
                }
              ],
              sources: [
                { book: "मॅजिक ऑफ मॅथ्स", standard: "नितीन महाले", chapterRef: "प्रकरण: वेग, वेळ, अंतर, रेल्वे व बोट" },
                { book: "Quantitative Aptitude", standard: "R.S. Aggarwal", chapterRef: "Problems on Trains, Boats & Streams" }
              ]
            }
          ]
        },


        // =========================================================================
        // विभाग B — बुद्धिमत्ता चाचणी (Logical & Analytical Reasoning)
        // =========================================================================
        {
          id: "gb_apt_c09",
          code: "A09",
          section: "B",
          slug: "reasoning-series-completion-and-coding-decoding",
          nameMr: "संख्या व अक्षर मालिका आणि सांकेतिक भाषा (Coding-Decoding)",
          nameEn: "Logical Reasoning: Number/Alphabet Series & Coding-Decoding",
          name: "मालिका व सांकेतिक भाषा (Series & Coding-Decoding)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_apt_c09",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_apt_c08",
          nextChapterId: "gb_apt_c10",
          metaDescriptionMr: "संख्या मालिका (फरकाचा फरक, वर्ग/घन, मूळ संख्या), अक्षर मालिका (EJOTY नियम, विरुद्ध अक्षरे AZ-BY-CX), आणि सांकेतिक भाषा (अक्षर-अक्षर, अक्षर-संख्या, काल्पनिक भाषा कोडिंग).",
          metaDescriptionEn: "In-depth review of Reasoning Series & Coding: Number series patterns (Differences, squares, cubes, primes, fibonacci), Alphabet sequencing (EJOTY rule, opposite letter pairs), and Coding-Decoding mechanics (Substitution, matrix, shift).",
          notesJsonPath: "/data/notes/group_b/prelims/aptitude/c09_series_coding.json",
          quizTag: "gb_apt_coding_01",
          tags: ["Logical Reasoning", "Number Series", "Alphabet Series EJOTY", "Opposite Letters", "Coding Decoding", "High-Weightage"],
          searchKeywords: ["number series pattern tricks missing number", "alphabet series ejoty 5 10 15 20 25", "opposite letters trick az by cx dw", "coding decoding letter to number substitution", "chinese coding fictitious language", "संख्या मालिका फरक वर्ग घन", "अक्षर मालिका EJOTY", "विरुद्ध अक्षरे जोड्या", "सांकेतिक भाषा कोडिंग डिकोडिंग"],
          topics: [
            {
              id: "top_gb_a09_01",
              nameMr: "संख्या व वर्णमाला तार्किक क्रम, विरुद्ध जोड्या आणि कूट संकेत उकल",
              nameEn: "Numerical Sequences, Alphabetical Topology, Opposites & Cryptic Decryption",
              subtopics: [
                {
                  id: "st_gb_a09_01_01",
                  titleMr: "संख्या मालिका (Number Series): १) समान फरकाची मालिका (Arithmetic Series); २) फरकाचा फरक; ३) वर्गांची किंवा घनांची मालिका (n² ± १ किंवा n³ ± १); ४) मूळ संख्यांची मालिका; ५) फिबोनाची मालिका (मागील दोन पदांची बेरीज: १, १, २, ३, ५, ८, १३...); ६) चुकीचे पद ओळखणे (Odd One Out)",
                  titleEn: "Number Series Logic: Constant difference, Difference of differences, Squares/Cubes series (n^2 +/- 1, n^3 +/- 1), Prime sequence, Fibonacci series (Sum of preceding 2 terms), Identifying wrong term",
                  chips: ["संख्या मालिका", "फरकाचा फरक", "वर्ग व घन पॅटर्न", "फिबोनाची मालिका", "चुकीचे पद"]
                },
                {
                  id: "st_gb_a09_01_02",
                  titleMr: "अक्षर मालिका व वर्णमाला स्थान: १ ते २६ अक्षरांचे क्रमांक: 'EJOTY' नियम (E=५, J=१०, O=१५, T=२०, Y=२५); विरुद्ध अक्षरांच्या जोड्या (बेरीज नेहमी २७): A-Z, B-Y, C-X, D-W, E-V, F-U, G-T, H-S, I-R, J-Q, K-P, L-O, M-N",
                  titleEn: "Alphabetical Architecture: Forward positions via 'EJOTY' (5, 10, 15, 20, 25); Reverse/Opposite Letter pairs sum to 27: A-Z, B-Y, C-X, D-W, E-V, H-S, J-Q, M-N",
                  chips: ["EJOTY नियम (५, १०, १५, २०, २५)", "विरुद्ध अक्षरे (बेरीज २७)", "A-Z, B-Y, M-N", "वर्णमाला क्रम"]
                },
                {
                  id: "st_gb_a09_01_03",
                  titleMr: "सांकेतिक भाषा (Coding-Decoding): १) अक्षरांसाठी अक्षरे (+१, -२, उलटा क्रम कोडिंग); २) अक्षरांसाठी संख्या (स्थानिक मूल्यांची बेरीज); ३) स्थानाधारित फेरबदल; ४) काल्पनिक भाषेतील कोडिंग (उदा. 'pit dar na' म्हणजे 'water is life' - सामाईक शब्द शोधून संकेत निश्चित करणे)",
                  titleEn: "Coding-Decoding Paradigms: Letter-to-letter shifts (+/- n positions, reversal); Letter-to-number arithmetic; Positional jumbling; Fictitious language substitution (deciphering common elements)",
                  chips: ["सांकेतिक भाषा (Coding)", "स्थानिक मूल्यांची बेरीज", "सामाईक शब्द शोधणे (Chinese Coding)"]
                }
              ],
              sources: [
                { book: "संपूर्ण बुद्धिमत्ता चाचणी", standard: "सचिन ढवळे", chapterRef: "प्रकरण: अक्षर व संख्या मालिका आणि कोडिंग" },
                { book: "Verbal Reasoning", standard: "R.S. Aggarwal", chapterRef: "Series Completion & Coding-Decoding" }
              ]
            }
          ]
        },
        {
          id: "gb_apt_c10",
          code: "A10",
          section: "B",
          slug: "blood-relations-and-direction-distance-test",
          nameMr: "नातेसंबंध आणि दिशा-अंतर ज्ञान चाचणी (Blood Relations & Directions)",
          nameEn: "Blood Relations (Family Tree Analysis) & Direction-Distance Sense",
          name: "नातेसंबंध व दिशाज्ञान (Blood Relations & Directions)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_apt_c10",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_apt_c09",
          nextChapterId: "gb_apt_c11",
          metaDescriptionMr: "कुटुंब वृक्ष आकृती (Family Tree), आई व वडिलांकडील नातेसंबंध, चिन्हांकित नातेसंबंध (Coded Relations), ८ मुख्य व उपदिशा, पायथागोरस प्रमेयाचा वापर (कर्ण काढणे), आणि सावलीवरील उदाहरणे.",
          metaDescriptionEn: "In-depth review of Blood Relations (Family tree mapping, Gender symbols, Coded Relations A+B) and Direction-Distance Sense (8 compass directions, Right/Left turns, Pythagoras theorem distance, Sunrise/Sunset shadow rules).",
          notesJsonPath: "/data/notes/group_b/prelims/aptitude/c10_relations_directions.json",
          quizTag: "gb_apt_relations_01",
          tags: ["Logical Reasoning", "Blood Relations", "Family Tree Mapping", "Coded Relations", "Direction Sense", "Pythagoras Distance", "Shadow Problems", "High-Weightage"],
          searchKeywords: ["blood relations family tree method symbols", "coded blood relations a b means mother", "direction sense test 8 compass directions", "pythagoras theorem shortest distance", "shadow at sunrise sunset shadow falling direction", "नातेसंबंध फॅमिली ट्री आकृती", "चिन्हांकित नातेसंबंध", "दिशा ज्ञान चाचणी", "पायथागोरस प्रमेय अंतर", "सावलीवरील उदाहरणे सूर्योदय सूर्यास्त"],
          topics: [
            {
              id: "top_gb_a10_01",
              nameMr: "कुटुंब वृक्ष रचना, नातेसंबंधांची उकल आणि दिशा-अंतराची भौमितिक गणिते",
              nameEn: "Genealogical Tree Mapping, Kinship Decryption & Spatial Orientation",
              subtopics: [
                {
                  id: "st_gb_a10_01_01",
                  titleMr: "नातेसंबंध व कुटुंब वृक्ष पद्धत (Family Tree): चिन्हांचा वापर: पुरुष (+), स्त्री (-), पती-पत्नी (=), भावंडे (-), पिढीतील अंतर (उभी रेषा |); नातेसंबंध: आजी-आजोबा, चुलते, मामा-मावशी, भाचा-भाची, सासू-सासरे; छायाचित्रातील व्यक्तीकडे बोट दाखवून केलेली विधाने",
                  titleEn: "Blood Relations & Family Tree: Standard notation (+ male, - female, = married couple, - siblings, | generational gap); Maternal vs Paternal lines; Deciphering portrait pointing statements",
                  chips: ["कुटुंब वृक्ष (Family Tree)", "पुरुष (+) व स्त्री (-)", "पिढीतील अंतर", "मामा, चुलते, पुतण्या"]
                },
                {
                  id: "st_gb_a10_01_02",
                  titleMr: "चिन्हांकित नातेसंबंध (Coded Blood Relations): समीकरणांची उकल (उदा. 'P + Q' म्हणजे P हे Q चे वडील, 'P × Q' म्हणजे P ही Q ची बहीण; दिलेल्या समीकरणात लिंग व पिढी तपासून उत्तर शोधणे)",
                  titleEn: "Coded Relations: Decoding algebraic logic (e.g., A+B is father, A*B is sister); Gender elimination and generation gap calculation heuristics",
                  chips: ["चिन्हांकित नातेसंबंध (A+B)", "समीकरण उकल", "लिंग तपासणी शॉर्टकट"]
                },
                {
                  id: "st_gb_a10_01_03",
                  titleMr: "दिशा व अंतर ज्ञान (Direction Sense): ४ मुख्य दिशा (उत्तर, दक्षिण, पूर्व, पश्चिम) व ४ उपदिशा (ईशान्य NE, आग्नेय SE, नैऋत्य SW, वायव्य NW); उजवीकडे वळणे (घड्याळाच्या काट्याच्या दिशेने ९०°) व डावीकडे वळणे (विरुद्ध दिशेने ९०°)",
                  titleEn: "Direction Sense: 4 Cardinal Directions (N, S, E, W) & 4 Ordinal Sub-Directions (NE, SE, SW, NW); Right Turn (90 deg Clockwise); Left Turn (90 deg Anti-Clockwise)",
                  chips: ["८ दिशा (मुख्य व उपदिशा)", "उजवीकडे वळणे (Clockwise)", "डावीकडे वळणे (Anti-clockwise)"]
                },
                {
                  id: "st_gb_a10_01_04",
                  titleMr: "किमान अंतर व सावलीचे नियम: १) मूळ ठिकाणापासूनचे सर्वात कमी अंतर: काटकोन त्रिकोणात पायथागोरस प्रमेय (कर्ण² = पाया² + उंची²); २) सावलीचे नियम: सूर्योदयावेळी (सकाळी) सावली नेहमी पश्चिमेकडे पडते; सूर्यास्तावेळी (संध्याकाळी) सावली नेहमी पूर्वेकडे पडते; दुपारी १२ वाजता सावली पडत नाही",
                  titleEn: "Pythagoras Distance & Shadow Rules: Shortest distance = sqrt(base^2 + height^2); Sunrise: Sun in East, Shadow falls strictly West; Sunset: Sun in West, Shadow falls strictly East; Noon 12 PM: No shadow",
                  chips: ["पायथागोरस प्रमेय (कर्ण² = पाया² + उंची²)", "सूर्योदय सावली पश्चिमेकडे", "सूर्यास्त सावली पूर्वेकडे"]
                }
              ],
              sources: [
                { book: "संपूर्ण बुद्धिमत्ता चाचणी", standard: "सचिन ढवळे", chapterRef: "प्रकरण: नातेसंबंध व दिशाज्ञान" },
                { book: "मॅजिक ऑफ मॅथ्स", standard: "नितीन महाले", chapterRef: "दिशा व अंतर चाचणी" }
              ]
            }
          ]
        },
        {
          id: "gb_apt_c11",
          code: "A11",
          section: "B",
          slug: "clocks-and-calendar-problems",
          nameMr: "घड्याळ आणि दिनदर्शिका (Clocks & Calendar Mechanics)",
          nameEn: "Horology (Clocks Angles & Gains) & Calendar Leap Year Mechanics",
          name: "घड्याळ व दिनदर्शिका (Clocks & Calendar)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_apt_c11",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_apt_c10",
          nextChapterId: "gb_apt_c12",
          metaDescriptionMr: "घड्याळातील तास व मिनिट काट्यातील कोन [θ = |30H - (11/2)M|], काटकोन, परस्पर विरुद्ध व एकत्र येणे, लीप वर्ष संकल्पना (४ व ४०० ने भाग), जास्तीचे दिवस (Odd Days), आणि वार काढणे.",
          metaDescriptionEn: "In-depth review of Clocks (Angle formula theta = |30H - 5.5M|, 90/180/0 degree positions, mirror images) and Calendar (Ordinary vs Leap Year, Century leap years, Odd Days counting, Day of any historical date).",
          notesJsonPath: "/data/notes/group_b/prelims/aptitude/c11_clocks_calendar.json",
          quizTag: "gb_apt_clocks_01",
          tags: ["Logical Reasoning", "Clocks Angle Formula", "Mirror Image Clock", "Calendar Odd Days", "Leap Year Calculation", "High-Weightage"],
          searchKeywords: ["clocks angle between hour and minute hand formula 30h 11 2m", "clock hands overlap right angle opposite", "mirror image of clock 11 60 rule", "calendar odd days leap year century year 400", "finding day of the week for any date", "घड्याळातील कोन सूत्र ३०H - ११/२M", "घड्याळाची आरशातील प्रतिमा ११:६०", "दिनदर्शिका कॅलेंडर जास्तीचे दिवस Odd Days", "लीप वर्ष ४०० ची कसोटी", "वार शोधणे"],
          topics: [
            {
              id: "top_gb_a11_01",
              nameMr: "घड्याळातील कोनांची सूत्रे, प्रतिमा, लीप वर्ष संकल्पना आणि वार शोधणे",
              nameEn: "Clock Angle Theorems, Time Dilations, Leap Cycles & Day-Finding Algorithms",
              subtopics: [
                {
                  id: "st_gb_a11_01_01",
                  titleMr: "घड्याळातील कोन सूत्र: तास काटा व मिनिट काटा यांमधील कोन: θ = |३०H - (११/२) × M| (H = तास, M = मिनिटे); १ मिनिटात मिनिट काटा ६° फिरतो; १ मिनिटात तास काटा ०.५° (१/२°) फिरतो; घड्याळाची आरशातील प्रतिमा काढण्यासाठी दिलेली वेळ ११:६० मधून वजा करावी",
                  titleEn: "Clock Angle Formula: Angle theta = |30*H - (11/2)*M|; Minute hand moves 6 deg/min; Hour hand moves 0.5 deg/min; Mirror image time = 11:60 - Given Time",
                  chips: ["कोन सूत्र θ = |३०H - (११/२)M|", "मिनिट काटा ६° प्रति मिनिट", "तास काटा ०.५° प्रति मिनिट", "आरशातील वेळ ११:६० वजाबाकी"]
                },
                {
                  id: "st_gb_a11_01_02",
                  titleMr: "काट्यांची विशिष्ट स्थिती (२४ तासांत): १) दोन्ही काटे एकमेकांवर येणे (०° कोन): १२ तासांत ११ वेळा, २४ तासांत २२ वेळा; २) परस्परविरुद्ध दिशेला येणे (१८०° कोन): १२ तासांत ११ वेळा, २४ तासांत २२ वेळा; ३) काटकोन होणे (९०° कोन): १२ तासांत २२ वेळा, २४ तासांत ४४ वेळा",
                  titleEn: "Special Alignments in 24 Hours: Overlapping (0 deg): 22 times in 24 hrs; Opposite (180 deg): 22 times in 24 hrs; Right Angle (90 deg): 44 times in 24 hrs (22 times in 12 hrs)",
                  chips: ["एकमेकांवर येणे (२४ तासांत २२ वेळा)", "परस्परविरुद्ध (२४ तासांत २२ वेळा)", "काटकोन (२४ तासांत ४४ वेळा)"]
                },
                {
                  id: "st_gb_a11_01_03",
                  titleMr: "दिनदर्शिका व लीप वर्ष (Calendar): सामान्य वर्ष (३६५ दिवस = ५२ आठवडे + १ जास्तीचा दिवस / Odd Day); लीप वर्ष (३६६ दिवस = ५२ आठवडे + २ जास्तीचे दिवस); लीप वर्षाची कसोटी: वर्षाला ४ ने भाग जाणे आवश्यक; शतकीय वर्षाला ४०० ने भाग जाणे आवश्यक (उदा. १६००, २००० लीप वर्षे आहेत; १७००, १८००, १९०० लीप वर्षे नाहीत)",
                  titleEn: "Calendar & Leap Years: Ordinary Year (365 days, 1 odd day); Leap Year (366 days, 2 odd days); Divisible by 4; Century years must be divisible by 400 (1600, 2000 are leap; 1900 is NOT)",
                  chips: ["सामान्य वर्ष (१ जास्तीचा दिवस)", "लीप वर्ष (२ जास्तीचे दिवस)", "शतकीय वर्ष ४०० ची कसोटी"]
                },
                {
                  id: "st_gb_a11_01_04",
                  titleMr: "वार शोधणे व पुनरावृत्ती: सामान्य वर्षात १ जानेवारीचा वार पुढील वर्षी १ दिवसाने पुढे जातो; लीप वर्षात पुढील वर्षी २ दिवसांनी पुढे जातो; १०० वर्षांत ५ जास्तीचे दिवस, २०० वर्षांत ३, ३०० वर्षांत १, ४०० वर्षांत ० जास्तीचे दिवस; दिनदर्शिकेची पुनरावृत्ती (लीप वर्ष २८ वर्षांनी, लीप वर्ष + १ असेल तर ६ वर्षांनी, इतर ११ वर्षांनी)",
                  titleEn: "Day Calculation & Calendar Repetition: Ordinary year shifts day by +1 next year, Leap year by +2; Odd days in centuries: 100 yrs (5), 200 yrs (3), 300 yrs (1), 400 yrs (0); Repetition cycles (28, 6, 11 years)",
                  chips: ["वार १ दिवसाने पुढे जाणे", "लीप वर्षात २ दिवस पुढे", "कॅलेंडर पुनरावृत्ती २८, ६, ११ वर्षे", "ऐतिहासिक तारखेचा वार शोधणे"]
                }
              ],
              sources: [
                { book: "संपूर्ण बुद्धिमत्ता चाचणी", standard: "सचिन ढवळे", chapterRef: "प्रकरण: घड्याळ व दिनदर्शिका" },
                { book: "मॅजिक ऑफ मॅथ्स", standard: "नितीन महाले", chapterRef: "घड्याळ व कॅलेंडर शॉर्टकट्स" }
              ]
            }
          ]
        },
        {
          id: "gb_apt_c12",
          code: "A12",
          section: "B",
          slug: "seating-arrangement-puzzles-and-ranking-order",
          nameMr: "बैठक व्यवस्था, क्रमवारी आणि कोडी (Seating Arrangement & Ranking)",
          nameEn: "Seating Arrangement (Linear & Circular), Ranking Order & Puzzles",
          name: "बैठक व्यवस्था व क्रमवारी (Seating Arrangement & Ranking)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_apt_c12",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_apt_c11",
          nextChapterId: "gb_apt_c13",
          metaDescriptionMr: "रेषीय बैठक व्यवस्था (एका ओळीत उत्तरेकडे/दक्षिणेकडे तोंड), वर्तुळाकार बैठक व्यवस्था (केंद्राकडे तोंड व केंद्राबाहेर तोंड), क्रमवारी (डावीकडून + उजवीकडून - १ = एकूण संख्या), आणि तुलनात्मक कोडी.",
          metaDescriptionEn: "In-depth review of Seating Arrangements: Linear (North/South facing), Circular (Facing centre vs outside), Ranking Order formula (Total = Left + Right - 1, Position swapping), and Multi-variable Logic Puzzles.",
          notesJsonPath: "/data/notes/group_b/prelims/aptitude/c12_seating_ranking.json",
          quizTag: "gb_apt_seating_01",
          tags: ["Logical Reasoning", "Seating Arrangement", "Circular Seating", "Ranking Order Formula", "Floor Puzzles", "High-Weightage"],
          searchKeywords: ["seating arrangement circular facing inside outside", "linear seating arrangement single row", "ranking order test total left right minus 1", "interchanging positions ranking", "logic puzzles floor based", "बैठक व्यवस्था वर्तुळाकार केंद्राकडे तोंड", "एका ओळीत बसणे", "क्रमवारी सूत्र डावीकडून उजवीकडून - १", "स्थान बदल क्रमवारी", "कोडी Puzzles"],
          topics: [
            {
              id: "top_gb_a12_01",
              nameMr: "रेषीय व वर्तुळाकार बैठक रचना, क्रमवारी सूत्रे आणि तार्किक कोडी",
              nameEn: "Linear Grid Assembly, Radial Seating, Ranking Equations & Logical Puzzles",
              subtopics: [
                {
                  id: "st_gb_a12_01_01",
                  titleMr: "रेषीय व वर्तुळाकार बैठक व्यवस्था: १) रेषीय (Linear): उत्तरेकडे तोंड असल्यास डावी-उजवी बाजू आपल्या हाताप्रमाणे; दक्षिणेकडे तोंड असल्यास बाजू उलट; २) वर्तुळाकार (Circular): केंद्राकडे तोंड असल्यास घड्याळाच्या काट्याच्या दिशेने (Clockwise) म्हणजे 'डावीकडे' आणि विरुद्ध दिशेने (Anti-clockwise) म्हणजे 'उजवीकडे'; केंद्राबाहेर तोंड असल्यास बाजू उलट होतात",
                  titleEn: "Linear & Circular Seating Dynamics: Linear (Facing North matches our hand orientation, South reverses); Circular (Facing Center: Clockwise is Left, Anti-clockwise is Right; Facing Outside reverses orientation)",
                  chips: ["वर्तुळाकार बैठक (केंद्राकडे तोंड)", "केंद्राबाहेर तोंड", "रेषीय मांडणी", "Clockwise डावीकडे"]
                },
                {
                  id: "st_gb_a12_01_02",
                  titleMr: "क्रमवारी चाचणी (Ranking Test): १) एकाच व्यक्तीचे दोन्ही टोकांकडून स्थान दिले असल्यास: एकूण संख्या = डावीकडील स्थान + उजवीकडील स्थान - १; २) स्थानांची अदलाबदल (Position Interchanging): एका व्यक्तीचे नवीन स्थान + दुसऱ्याचे जुने स्थान - १ = एकूण संख्या; दोन व्यक्तींमधील मुलांची संख्या शोधणे",
                  titleEn: "Ranking Order Equations: Total items = Left Rank + Right Rank - 1; Position swapping formula: New rank of person A + Old rank of person B - 1 = Total Strength",
                  chips: ["एकूण = डावे + उजवे - १", "स्थान अदलाबदल गणित", "रांगेतील मधली मुले"]
                },
                {
                  id: "st_gb_a12_01_03",
                  titleMr: "तार्किक कोडी (Logic Puzzles): मजल्यांची कोडी (Floor Puzzles - इमारतीतील मजले), वार-विषय मॅट्रिक्स कोडी, रंग व व्यवसायांचे मॅपिंग; नकारात्मक माहिती बाजूला ठेवून निश्चित माहितीने टेबल भरणे",
                  titleEn: "Analytical Logic Puzzles: Multi-story building floor arrangements, Weekday-Subject matrix grids, Profession-Color mapping matrices via direct-deduction tables",
                  chips: ["मजल्यांची कोडी (Floor Puzzle)", "मॅट्रिक्स टेबल पद्धत", "तार्किक अनुमान"]
                }
              ],
              sources: [
                { book: "संपूर्ण बुद्धिमत्ता चाचणी", standard: "सचिन ढवळे", chapterRef: "प्रकरण: बैठक व्यवस्था व क्रमवारी" },
                { book: "Verbal Reasoning", standard: "R.S. Aggarwal", chapterRef: "Seating Arrangements & Puzzle Test" }
              ]
            }
          ]
        },
        {
          id: "gb_apt_c13",
          code: "A13",
          section: "B",
          slug: "syllogism-and-venn-diagrams",
          nameMr: "वेन आकृत्या आणि युक्तिवाद / सिलॉजिझम (Syllogism)",
          nameEn: "Venn Diagrams & Deductive Syllogisms (Statement & Inferences)",
          name: "वेन आकृत्या व युक्तिवाद (Venn Diagrams & Syllogism)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_apt_c13",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_apt_c12",
          nextChapterId: "gb_apt_c14",
          metaDescriptionMr: "वेन आकृत्यांचे प्रकार (३ घटकांचा परस्पर संबंध), सिलॉजिझम (काही A हे B आहेत, सर्व B हे C आहेत, एकही A हा C नाही), शक्यतेचे निष्कर्ष (Possibility), आणि 'किंवा' केस (Either-Or Case).",
          metaDescriptionEn: "In-depth review of Venn Diagrams (3-set intersection models) and Deductive Syllogisms: All, Some, None categorical propositions, Standard Venn testing, Possibility cases, and Either-Or complementary pairs.",
          notesJsonPath: "/data/notes/group_b/prelims/aptitude/c13_venn_syllogism.json",
          quizTag: "gb_apt_syllogism_01",
          tags: ["Logical Reasoning", "Syllogism", "Venn Diagrams 3 Sets", "Possibility Cases", "Either Or Case", "Deductive Logic", "High-Weightage"],
          searchKeywords: ["syllogism tricks venn diagram method", "all a are b some b are c no a is c", "syllogism possibility either or case conditions", "geometric venn diagrams finding region numbers", "सिलॉजिझम युक्तिवाद", "सर्व काही एकही नाही विधाने", "वेन आकृत्या पद्धत", "शक्यता Possibility निष्कर्ष", "Either-Or केस"],
          topics: [
            {
              id: "top_gb_a13_01",
              nameMr: "वेन आकृत्यांची भौमितिक रचना, विधाने-अनुमान आणि शक्यतेचे निष्कर्ष",
              nameEn: "Venn Topological Intersections, Categorical Propositions & Syllogistic Inference",
              subtopics: [
                {
                  id: "st_gb_a13_01_01",
                  titleMr: "वेन आकृत्या (Venn Diagrams): १) परस्पर संबंध दर्शवणाऱ्या आकृत्या (उदा. भारत, महाराष्ट्र, मुंबई - एका वर्तुळात दुसरे; पुरुष, डॉक्टर, लेखक - छेदनारी वर्तुळे); २) भौमितिक आकृत्यांमधील सामाईक भाग (त्रिकोण = शिक्षक, वर्तुळ = खेळाडू, आयत = गायक यावरून केवळ खेळाडू असलेले शिक्षक शोधणे)",
                  titleEn: "Venn Diagram Sets: Representing relationships between 3 classes (Concentric, Intersecting, Disjoint); Geometric regional mapping (Locating numbers in common intersection of triangle/circle/rectangle)",
                  chips: ["वेन आकृत्या परस्पर संबंध", "भौमितिक आकृत्या सामाईक भाग", "३ घटकांचे वर्गीकरण"]
                },
                {
                  id: "st_gb_a13_01_02",
                  titleMr: "युक्तिवाद / सिलॉजिझम मूलभूत विधाने: १) सर्व A हे B आहेत (Universal Positive); २) एकही A हा B नाही (Universal Negative); ३) काही A हे B आहेत (Particular Positive); ४) काही A हे B नाहीत (Particular Negative); किमान वेन आकृती (Minimum Overlap) काढून निश्चित निष्कर्षांची पडताळणी करणे",
                  titleEn: "Syllogism Propositions: All A are B, No A is B, Some A are B, Some A are not B; Testing standard conclusions using minimum-overlapping basic Venn diagrams",
                  chips: ["सिलॉजिझम (Syllogism)", "सर्व A हे B आहेत", "काही A हे B आहेत", "एकही A हा B नाही", "किमान वेन आकृती"]
                },
                {
                  id: "st_gb_a13_01_03",
                  titleMr: "शक्यतेचे निष्कर्ष (Possibility) व 'किंवा' केस (Either-Or Case): १) शक्यता: पर्यायी वेन आकृतीत जर विधान न मोडता निष्कर्ष बरोबर येत असेल तर शक्यता सत्य असते; २) Either-Or केसचे ३ नियम: दोन्ही निष्कर्ष स्वतंत्रपणे असत्य असावेत, दोन्ही निष्कर्षांचे घटक (Subject-Predicate) समान असावेत, आणि एक निष्कर्ष होकारात्मक व एक नकारात्मक असावा (Some + No किंवा All + Some Not)",
                  titleEn: "Possibility Scenarios & Either-Or Conditions: Possibility valid if viable in any alternative diagram; Either-Or 3 Rules: Both conclusions individually false, Same subject/predicate, Complementary pair (Some + No / All + Some not)",
                  chips: ["शक्यता (Possibility निष्कर्ष)", "Either-Or केस ३ अटी", "पूरक जोडी (Complementary Pair)"]
                }
              ],
              sources: [
                { book: "संपूर्ण बुद्धिमत्ता चाचणी", standard: "सचिन ढवळे", chapterRef: "प्रकरण: वेन आकृत्या व युक्तिवाद" },
                { book: "Verbal Reasoning", standard: "R.S. Aggarwal", chapterRef: "Syllogism & Venn Diagrams" }
              ]
            }
          ]
        },
        {
          id: "gb_apt_c14",
          code: "A14",
          section: "B",
          slug: "non-verbal-reasoning-figures-mirror-and-water-images",
          nameMr: "अशाब्दिक बुद्धिमत्ता: आकृत्यांची मोजणी, आरशातील व पाण्यातील प्रतिमा आणि ठोकळा (Dice)",
          nameEn: "Non-Verbal Reasoning: Counting of Figures, Mirror/Water Images, Paper Folding & Dice/Cube",
          name: "अशाब्दिक बुद्धिमत्ता व ठोकळा (Non-Verbal Reasoning & Dice)",
          category: "CORE",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_apt_c14",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_apt_c13",
          nextChapterId: "gb_apt_c15",
          metaDescriptionMr: "त्रिकोण, चौकोन व चौरसांची मोजणी शॉर्टकट्स, आरशातील प्रतिमा (डावी-उजवी बाजू बदलते), पाण्यातील प्रतिमा (वरची-खालची बाजू बदलते), आणि ठोकळा (Dice - मानक व सामान्य फासा, विरुद्ध पृष्ठभाग शोधणे).",
          metaDescriptionEn: "In-depth review of Non-Verbal Reasoning: Counting of Geometric Figures (Triangles, Squares, Rectangles shortcuts), Mirror Images (Lateral inversion), Water Images (Vertical inversion), and Dice/Cube unfolding rules.",
          notesJsonPath: "/data/notes/group_b/prelims/aptitude/c14_non_verbal_dice.json",
          quizTag: "gb_apt_figures_01",
          tags: ["Non-Verbal Reasoning", "Counting Triangles", "Counting Squares", "Mirror Image", "Water Image", "Dice Cube Opposite Faces", "High-Weightage"],
          searchKeywords: ["counting figures triangles squares shortcuts", "mirror images letters lateral inversion", "water images vertical inversion", "dice problems standard general opposite faces", "paper folding cutting unfolding", "आकृत्या मोजणे त्रिकोण चौरस शॉर्टकट", "आरशातील प्रतिमा डावी उजवी बदल", "पाण्यातील प्रतिमा", "ठोकळा फासा विरुद्ध बाजू", "कागदाची घडी"],
          topics: [
            {
              id: "top_gb_a14_01",
              nameMr: "आकृत्यांची संख्या शोधणे, पार्श्व-उर्ध्व उलथापालथ आणि फाशाचे नियम",
              nameEn: "Figure Quantification, Optical Inversions & Polyhedral Dice Rules",
              subtopics: [
                {
                  id: "st_gb_a14_01_01",
                  titleMr: "आकृत्यांची मोजणी (Counting of Figures): १) त्रिकोण मोजणे: शिरोबिंदूतून पायावर पडलेल्या रेषा (१+२+३... बेरीज पद्धत); चौरसातील कर्ण दुभागल्यास त्रिकोण = कप्पे × २; २) चौरस मोजणे: n × n ग्रीड (१² + २² + ३²...) आणि m × n ग्रीड; ३) आयत मोजणे: (स्तंभांची बेरीज) × (ओळींची बेरीज)",
                  titleEn: "Counting Figures Tricks: Triangles from vertex to base (Sum 1+2+3...); Triangles in square diagonals (Blocks * 2); Squares in n*n grid (Sum of squares 1^2+2^2...); Rectangles = (Sum of columns) * (Sum of rows)",
                  chips: ["त्रिकोण मोजणे शॉर्टकट", "चौरस मोजणे (१² + २² + ३²)", "आयत मोजणे सूत्र"]
                },
                {
                  id: "st_gb_a14_01_02",
                  titleMr: "आरशातील व पाण्यातील प्रतिमा (Mirror & Water Images): १) आरशातील प्रतिमा (Mirror Image): डावी बाजू उजवीकडे आणि उजवी बाजू डावीकडे बदलते, वरची व खालची बाजू तशीच राहते (A, H, I, M, O, T, U, V, W, X, Y ही ११ अक्षरे आरशात बदलत नाहीत); २) पाण्यातील प्रतिमा (Water Image): वरची बाजू खाली व खालची बाजू वर बदलते (उर्ध्व उलथापालथ), डावी-उजवी बाजू बदलत नाही (C, D, E, H, I, K, O, X अक्षरे पाण्यात बदलत नाहीत)",
                  titleEn: "Mirror vs Water Images: Mirror Image causes Lateral Inversion (Left becomes right, 11 alphabets unchanged: A, H, I, M, O, T, U, V, W, X, Y); Water Image causes Vertical Inversion (Top becomes bottom, 8 alphabets unchanged: C, D, E, H, I, K, O, X)",
                  chips: ["आरशातील प्रतिमा (पार्श्व उलथापालथ)", "पाण्यातील प्रतिमा (उर्ध्व उलथापालथ)", "अक्षरांचे बदल"]
                },
                {
                  id: "st_gb_a14_01_03",
                  titleMr: "ठोकळा व फासा (Cube & Dice): १) मानक फासा (Standard Dice: विरुद्ध पृष्ठांची बेरीज नेहमी ७ असते, उदा. १ विरुद्ध ६, २ विरुद्ध ५, ३ विरुद्ध ४); २) सामान्य फासा (General Dice: शेजारील पृष्ठांची बेरीज ७ असू शकते); दोन स्थितींवरून विरुद्ध पृष्ठ शोधणे: दोन फाशांमध्ये एक अंक सामाईक असल्यास सामाईक अंकापासून घड्याळाच्या दिशेने फिरवून विरुद्ध जोड्या शोधणे; उलगडलेला फासा (Open Dice)",
                  titleEn: "Cube & Dice Rules: Standard Dice (Opposite faces sum to 7: 1-6, 2-5, 3-4); General Dice; Clockwise rule when 1 face is common in two dice positions; Open Dice unfolding logic",
                  chips: ["मानक फासा (विरुद्ध बेरीज ७)", "सामान्य फासा (Clockwise फिरवणे)", "उलगडलेला फासा (Open Dice)"]
                }
              ],
              sources: [
                { book: "संपूर्ण बुद्धिमत्ता चाचणी", standard: "सचिन ढवळे", chapterRef: "प्रकरण: अशाब्दिक बुद्धिमत्ता व फासा" },
                { book: "Non-Verbal Reasoning", standard: "R.S. Aggarwal", chapterRef: "Counting of Figures & Cube/Dice" }
              ]
            }
          ]
        },
        {
          id: "gb_apt_c15",
          code: "A15",
          section: "B",
          slug: "data-interpretation-charts-and-statistical-analysis",
          nameMr: "सामग्रीचे विश्लेषण (Data Interpretation): स्तंभलेख, वृत्तालेख व तक्ते",
          nameEn: "Data Interpretation (DI): Bar Charts, Pie Charts, Line Graphs & Tables",
          name: "सामग्रीचे विश्लेषण (Data Interpretation - DI)",
          category: "CORE",
          difficulty: "HARD",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: false,
          trackingKey: "progress_gb_apt_c15",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_apt_c14",
          nextChapterId: "gb_apt_c16",
          metaDescriptionMr: "सामग्री विश्लेषण (DI), वृत्तालेख (Pie Chart - ३६०° आणि १००% रूपांतरण), स्तंभलेख (Bar Graph), रेषालेख (Line Graph), तक्ता विश्लेषण (Table DI), आणि शेकडा वाढ/घट काढणे.",
          metaDescriptionEn: "In-depth review of Data Interpretation (DI): Pie Charts (Degree-to-percentage conversion: 360 deg = 100%), Bar Graphs, Line Graphs, Tabular DI, and Ratio/Percentage Growth calculations.",
          notesJsonPath: "/data/notes/group_b/prelims/aptitude/c15_data_interpretation.json",
          quizTag: "gb_apt_di_01",
          tags: ["Data Interpretation", "Pie Chart 360 Degrees", "Bar Graphs", "Table DI", "Percentage Increase Decrease", "High-Weightage"],
          searchKeywords: ["data interpretation mpsc questions", "pie chart degree to percentage conversion 360 degrees 100 percent", "bar graph line graph table di calculations", "percentage growth ratio di problems", "सामग्री विश्लेषण DI", "वृत्तालेख Pie Chart ३६० अंश", "स्तंभलेख Bar Graph", "तक्ता विश्लेषण", "शेकडा वाढ व घट DI"],
          topics: [
            {
              id: "top_gb_a15_01",
              nameMr: "वृत्तालेख अंश-टक्केवारी संबंध, आलेखांचे वाचन आणि जलद गणना तंत्र",
              nameEn: "Radial Pie Geometry, Chart Analytics, Tabular Synthesis & Ratio Derivations",
              subtopics: [
                {
                  id: "st_gb_a15_01_01",
                  titleMr: "वृत्तालेख (Pie Chart - अंश ते टक्केवारी रूपांतरण): संपूर्ण वर्तुळ = ३६०° = १००%; १% = ३.६°; अंशामधून टक्केवारीत रूपांतर: (दिलेले अंश / ३६०) × १००; टक्केवारीमधून अंशात रूपांतर: (दिलेली % / १००) × ३६०; एकाच वृत्तालेखावरून विविध खर्चांची तुलना व केंद्रीय कोन (Central Angle)",
                  titleEn: "Pie Chart Analytics: Full circle = 360 degrees = 100%; 1% = 3.6 degrees; Degree to % conversion = (Degrees/360)*100; % to Degree = (%/100)*360; Central Angle metrics",
                  chips: ["वृत्तालेख Pie Chart", "३६०° = १००%", "१% = ३.६ अंश", "केंद्रीय कोन (Central Angle)"]
                },
                {
                  id: "st_gb_a15_01_02",
                  titleMr: "स्तंभलेख (Bar Graph) आणि रेषालेख (Line Graph): उभ्या किंवा आडव्या स्तंभांवरून उत्पादनाची तुलना; दोन वर्षांमधील शेकडा वाढ/घट: [(नवीन मूल्य - जुने मूल्य) / जुने मूल्य] × १००; रेषालेखावरून वर्षनिहाय नफा, आयात-निर्यात आणि चढ-उतार विश्लेषण",
                  titleEn: "Bar & Line Graph Metrics: Visual comparative analysis; Percentage Growth/Decline = [(Final - Initial) / Initial] * 100; Multi-line trends of Export-Import balance",
                  chips: ["स्तंभलेख Bar Graph", "रेषालेख Line Graph", "शेकडा वाढ सूत्र", "आयात-निर्यात तुलना"]
                },
                {
                  id: "st_gb_a15_01_03",
                  titleMr: "तक्ता विश्लेषण (Table DI) आणि जलद आकडेमोड: क्लिष्ट डेटा तक्त्यांमधून सरासरी, गुणोत्तर आणि टक्केवारी काढणे; दशांश स्थळांचा अंदाज घेऊन सन्निकट मूल्य (Approximation) तंत्राने कमी वेळेत अचूक उत्तर काढणे",
                  titleEn: "Tabular DI & Calculation Speed: Extracting averages and ratios from dense matrices; Rounding off & Approximation techniques to save exam time",
                  chips: ["तक्ता विश्लेषण (Table DI)", "सन्निकट मूल्य (Approximation)", "वेळ व्यवस्थापन"]
                }
              ],
              sources: [
                { book: "मॅजिक ऑफ मॅथ्स", standard: "नितीन महाले", chapterRef: "प्रकरण: आलेखांचे वाचन व सामग्री विश्लेषण" },
                { book: "Quantitative Aptitude", standard: "R.S. Aggarwal", chapterRef: "Data Interpretation (Pie, Bar, Line, Table)" }
              ]
            }
          ]
        },
        {
          id: "gb_apt_c16",
          code: "A16",
          section: "B",
          slug: "aptitude-reasoning-master-revision-speed-tricks-and-pyq-trends",
          nameMr: "गणित-बुद्धिमत्ता मास्टर रिव्हिजन: वेळेचे व्यवस्थापन, शॉर्टकट ट्रिक्स व PYQ विश्लेषण",
          nameEn: "Aptitude Master Revision: Speed Math, 10-Year PYQ Trends & Time Management",
          name: "गणित-बुद्धिमत्ता मास्टर रिव्हिजन (Master Revision & PYQ Trends)",
          category: "REVISION",
          difficulty: "MEDIUM",
          priority: "HIGH",
          estimatedHours: 4,
          isMaharashtraReference: true,
          trackingKey: "progress_gb_apt_c16",
          hasNotes: true,
          hasQuiz: true,
          prevChapterId: "gb_apt_c15",
          nextChapterId: null,
          metaDescriptionMr: "१ ते ३० पाढे, वर्ग व घन चार्ट, पेपर सोडवताना वेळेचे नियोजन (१५ प्रश्नांसाठी १५-१८ मिनिटे), पर्यायांवरून पडताळणी पद्धत (Option Elimination), आणि MPSC संयुक्त पूर्व परीक्षेतील १० वर्षांचे विश्लेषण.",
          metaDescriptionEn: "Master consolidation module: Speed Math tables (1 to 30 squares, cubes, tables), 60-minute Prelims Time Allocation Strategy (15-18 mins for Aptitude), Back-solving via options, and 10-year MPSC Group B trend patterns.",
          notesJsonPath: "/data/notes/group_b/prelims/aptitude/c16_master_revision.json",
          quizTag: "gb_apt_revision_01",
          tags: ["Revision", "Speed Math", "Option Elimination Tricks", "Time Management 60 Minutes", "PYQ Trends", "High-Weightage"],
          searchKeywords: ["speed math multiplication tricks squares cubes tables 1 to 30", "mpsc prelims time management 60 minutes 100 questions", "option elimination back solving math questions", "mpsc group b aptitude pyq trend analysis", "वेगाने आकडेमोड शॉर्टकट", "१ ते ३० वर्ग व घन", "६० मिनिटांचे नियोजन", "पर्यायांवरून उत्तर शोधणे", "मास्टर रिव्हिजन", "PYQ विश्लेषण"],
          topics: [
            {
              id: "top_gb_a16_01",
              nameMr: "स्पीड मॅथ्स, १ तासाचे पेपर नियोजन, पर्यायांवरून पडताळणी आणि परीक्षेचा कल",
              nameEn: "Speed Math Synthesis, 60-Min Paper Allocation, Back-Solving & PYQ Patterns",
              subtopics: [
                {
                  id: "st_gb_a16_01_01",
                  titleMr: "स्पीड मॅथ्स आणि पाठ असणाऱ्या गोष्टी: १ ते ३० चे वर्ग, १ ते १५ चे घन, १ ते २५ चे पाढे, आणि अपूर्णांक-टक्केवारी मूल्ये; एका सेकंदात ५ शेवटी असणाऱ्या संख्यांचा वर्ग करणे (उदा. ३५² = ३ × ४ / २५ = १२२५)",
                  titleEn: "Speed Math Essentials: Squares 1-30, Cubes 1-15, Tables 1-25; Fast squaring for numbers ending in 5 (e.g., 35^2: 3*4=12 and 25 -> 1225)",
                  chips: ["१ ते ३० वर्ग पाठ असणे", "१ ते १५ घन", "५ शेवटी असणाऱ्या संख्येचा वर्ग (३५² = १२२५)", "जलद गुणाकार"]
                },
                {
                  id: "st_gb_a16_01_02",
                  titleMr: "पर्यायांवरून उत्तर शोधणे (Back-Solving / Option Elimination): समीकरणांची लांबलचक मांडणी न करता दिलेल्या ४ पर्यायांची गणितात पडताळणी करणे; विशेषतः वयवारी, नफा-तोटा, आणि संख्यांवरील गणितांमध्ये सर्वात वेगवान पद्धत",
                  titleEn: "Option Back-Solving Heuristics: Eliminating lengthy algebraic formulations by plugging in 4 choices directly into problem conditions (Best for Ages, Profit-Loss, Numbers)",
                  chips: ["पर्यायांवरून उत्तर शोधणे", "Back-Solving तंत्र", "समीकरण टाळणे"]
                },
                {
                  id: "st_gb_a16_01_03",
                  titleMr: "६० मिनिटांचे पेपर नियोजन (Time Management): MPSC संयुक्त पूर्व परीक्षेत १०० प्रश्नांसाठी केवळ ६० मिनिटे असतात; सामान्य अध्ययनाचे ८५ प्रश्न ४२-४५ मिनिटांत पूर्ण करणे आणि अंकगणित-बुद्धिमत्तेच्या १५ प्रश्नांसाठी किमान १५ ते १८ मिनिटे राखून ठेवणे; अवघड किंवा अडकवणारे गणित तात्काळ सोडून पुढे जाण्याची 'Skip Strategy'",
                  titleEn: "60-Minute Exam Allocation Strategy: 100 questions in 60 mins; 85 GS questions in 42-45 mins; Reserving 15-18 mins for Aptitude/Reasoning; Smart Skip Strategy to avoid time-traps",
                  chips: ["६० मिनिटांचे टाइम मॅनेजमेंट", "गणित-बुद्धिमत्ता १५-१८ मिनिटे", "Skip Strategy (वेळ वाचवणे)", "अडकवणारे प्रश्न टाळणे"]
                },
                {
                  id: "st_gb_a16_01_04",
                  titleMr: "MPSC संयुक्त पूर्व परीक्षा गणित-बुद्धिमत्ता १० वर्षांचे विश्लेषण: हमखास विचारले जाणारे ५ घटक: १) घड्याळ व दिनदर्शिका (१-२ प्रश्न), २) बैठक व्यवस्था व नातेसंबंध (२ प्रश्न), ३) काम, काळ व वेग/रेल्वे (२ प्रश्न), ४) मालिका व कोडिंग (२ प्रश्न), ५) टक्केवारी/नफा-तोटा/व्याज (२-३ प्रश्न)",
                  titleEn: "10-Year MPSC Group B Trend Insights: Guaranteed 5 Core Topics: Clocks/Calendar (1-2 Qs), Seating/Blood Relations (2 Qs), Time-Work-Trains (2 Qs), Series/Coding (2 Qs), Percentages/Interest (2-3 Qs)",
                  chips: ["PYQ ट्रेंड विश्लेषण", "घड्याळ-कॅलेंडर हमखास प्रश्न", "रेल्वे व काम-काळ", "१० वर्षांचे विश्लेषण"]
                }
              ],
              sources: [
                { book: "संपूर्ण बुद्धिमत्ता व गणित", standard: "सचिन ढवळे व नितीन महाले", chapterRef: "मास्टर शॉर्टकट ट्रिक्स व स्पीड मॅथ्स" },
                { book: "MPSC मागील वर्षांच्या प्रश्नपत्रिका (PYQ संच)", standard: "२०१३ ते २०२५", chapterRef: "अंकगणित व बुद्धिमत्ता प्रश्न विश्लेषण" }
              ]
            }
          ]
        }
      ]
    }
  ]
}

export default groupBPrelimsData;