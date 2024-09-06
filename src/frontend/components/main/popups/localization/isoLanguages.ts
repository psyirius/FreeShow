// supported languages:
// https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes
// https://gist.github.com/jrnk/8eb57b065ea0b098d571

// https://translate.google.com (248)
// [...document.querySelector(".vSUSRc").children].map(a => a.innerText)[2].split("\n").filter(a => !a.includes("(recently used language)"))

export const isoLanguages = [
    { code: "ab", name: "Abkhaz", nativeName: "Аҧсуа", flag: "" },
    { code: "ace", name: "Acehnese", nativeName: "Bahsa Acèh", flag: "" },
    { code: "ach", name: "Acholi", nativeName: "Lwo", flag: "🇺🇬" },
    { code: "aa", name: "Afar", nativeName: "Afaraf", flag: "🇩🇯" },
    { code: "af", name: "Afrikaans", nativeName: "Afrikaans", flag: "🇿🇦" },
    { code: "sq", name: "Albanian", nativeName: "Shqip", flag: "🇦🇱" },
    { code: "ald", name: "Alur", nativeName: "Alur", flag: "🇺🇬" },
    { code: "am", name: "Amharic", nativeName: "አማርኛ", flag: "🇪🇹" },
    { code: "ar", name: "Arabic", nativeName: "العربية", flag: "" },
    { code: "hy", name: "Armenian", nativeName: "Հայերեն", flag: "🇦🇲" },
    { code: "as", name: "Assamese", nativeName: "অসমীয়া", flag: "🇮🇳" },
    { code: "av", name: "Avar", nativeName: "Авар", flag: "" },
    { code: "awa", name: "Awadhi", nativeName: "अवधी", flag: "🇮🇳" },
    { code: "ay", name: "Aymara", nativeName: "Aymar", flag: "🇧🇴" },
    { code: "az", name: "Azerbaijani", nativeName: "Azərbaycanca", flag: "🇦🇿" },
    { code: "ban", name: "Balinese", nativeName: "Balinese", flag: "🇮🇩" }, // ᬪᬵᬱᬩᬮᬶ
    { code: "bal", name: "Baluchi", nativeName: "بلوچی", flag: "🇵🇰" },
    { code: "bm", name: "Bambara", nativeName: "Bamanankan", flag: "🇲🇱" },
    { code: "bci", name: "Baoulé", nativeName: "Baule", flag: "🇨🇮" },
    { code: "ba", name: "Bashkir", nativeName: "Башҡорт", flag: "🇷🇺" },
    { code: "eu", name: "Basque", nativeName: "Euskara", flag: "🇪🇸" },
    { code: "btx-k", name: "Batak Karo", nativeName: "Karo", flag: "🇮🇩" },
    { code: "btx-s", name: "Batak Simalungun", nativeName: "Simalungun", flag: "🇮🇩" },
    { code: "btx-t", name: "Batak Toba", nativeName: "Toba", flag: "🇮🇩" },
    { code: "be", name: "Belarusian", nativeName: "Беларуская", flag: "🇧🇾" },
    { code: "bem", name: "Bemba", nativeName: "Chibemba", flag: "🇿🇲" },
    { code: "bn", name: "Bengali", nativeName: "বাংলা", flag: "🇧🇩" },
    { code: "bew", name: "Betawi", nativeName: "Betawi", flag: "🇮🇩" },
    { code: "bho", name: "Bhojpuri", nativeName: "भोजपुरी", flag: "🇮🇳" },
    { code: "bik", name: "Bikol", nativeName: "Bikol", flag: "🇵🇭" },
    { code: "bs", name: "Bosnian", nativeName: "Bosanski", flag: "🇧🇦" },
    { code: "br", name: "Breton", nativeName: "Brezhoneg", flag: "🇫🇷" },
    { code: "bg", name: "Bulgarian", nativeName: "Български", flag: "🇧🇬" },
    { code: "bua", name: "Buryat", nativeName: "Буряад", flag: "🇷🇺" },
    { code: "yue", name: "Cantonese", nativeName: "粵語", flag: "🇨🇳" },
    { code: "ca", name: "Catalan", nativeName: "Català", flag: "🇪🇸" },
    { code: "ceb", name: "Cebuano", nativeName: "Binisaya", flag: "🇵🇭" },
    { code: "ch", name: "Chamorro", nativeName: "Chamoru", flag: "🇬🇺" },
    { code: "ce", name: "Chechen", nativeName: "Нохчийн", flag: "🇷🇺" },
    { code: "ny", name: "Chichewa", nativeName: "Chichewa", flag: "🇲🇼" },
    { code: "zh-CN", name: "Chinese (Simplified)", nativeName: "中文 (简体)", flag: "🇨🇳" },
    { code: "zh-TW", name: "Chinese (Traditional)", nativeName: "中文 (繁體)", flag: "🇹🇼" },
    { code: "chk", name: "Chuukese", nativeName: "Chuukese", flag: "🇫🇲" },
    { code: "cv", name: "Chuvash", nativeName: "Чӑвашла", flag: "🇷🇺" },
    { code: "co", name: "Corsican", nativeName: "Corsu", flag: "🇫🇷" },
    { code: "crh", name: "Crimean Tatar", nativeName: "Qırımtatarca", flag: "🇺🇦" },
    { code: "hr", name: "Croatian", nativeName: "Hrvatski", flag: "🇭🇷" },
    { code: "cs", name: "Czech", nativeName: "Čeština", flag: "🇨🇿" },
    { code: "da", name: "Danish", nativeName: "Dansk", flag: "🇩🇰" },
    { code: "prs", name: "Dari", nativeName: "دری", flag: "🇦🇫" },
    { code: "dv", name: "Dhivehi", nativeName: "ދިވެހިބަސް", flag: "🇲🇻" },
    { code: "din", name: "Dinka", nativeName: "Thuɔŋjäŋ", flag: "🇸🇸" },
    { code: "doi", name: "Dogri", nativeName: "डोगरी", flag: "🇮🇳" },
    { code: "dbo", name: "Dombe", nativeName: "Dombe", flag: "🇲🇿" },
    { code: "nl", name: "Dutch", nativeName: "Nederlands", flag: "🇳🇱" },
    { code: "dyu", name: "Dyula", nativeName: "Julakan", flag: "🇧🇫" },
    { code: "dz", name: "Dzongkha", nativeName: "རྫོང་ཁ", flag: "🇧🇹" },
    { code: "en", name: "English", nativeName: "English", flag: "🇬🇧" },
    { code: "eo", name: "Esperanto", nativeName: "Esperanto", flag: "" },
    { code: "et", name: "Estonian", nativeName: "Eesti", flag: "🇪🇪" },
    { code: "ee", name: "Ewe", nativeName: "Eʋegbe", flag: "🇹🇬" },
    { code: "fo", name: "Faroese", nativeName: "Føroyskt", flag: "🇫🇴" },
    { code: "fj", name: "Fijian", nativeName: "Na Vosa Vakaviti", flag: "🇫🇯" },
    { code: "fil", name: "Filipino", nativeName: "Filipino", flag: "🇵🇭" },
    { code: "fi", name: "Finnish", nativeName: "Suomi", flag: "🇫🇮" },
    { code: "fon", name: "Fon", nativeName: "Fon gbè", flag: "🇧🇯" },
    { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷" },
    { code: "fy", name: "Frisian", nativeName: "Frysk", flag: "🇳🇱" },
    { code: "fur", name: "Friulian", nativeName: "Furlan", flag: "🇮🇹" },
    { code: "ff", name: "Fulani", nativeName: "Fulfulde", flag: "" },
    { code: "gaa", name: "Ga", nativeName: "Ga", flag: "🇬🇭" },
    { code: "gl", name: "Galician", nativeName: "Galego", flag: "🇪🇸" },
    { code: "ka", name: "Georgian", nativeName: "ქართული", flag: "🇬🇪" },
    { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪" },
    { code: "el", name: "Greek", nativeName: "Ελληνικά", flag: "🇬🇷" },
    { code: "gn", name: "Guarani", nativeName: "Avañe'ẽ", flag: "🇵🇾" },
    { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી", flag: "🇮🇳" },
    { code: "ht", name: "Haitian Creole", nativeName: "Kreyòl Ayisyen", flag: "🇭🇹" },
    { code: "cnh", name: "Hakha Chin", nativeName: "Laiholh", flag: "🇲🇲" },
    { code: "ha", name: "Hausa", nativeName: "Hausa", flag: "🇳🇬" },
    { code: "haw", name: "Hawaiian", nativeName: "ʻŌlelo Hawaiʻi", flag: "🇺🇸" },
    { code: "he", name: "Hebrew", nativeName: "עברית", flag: "🇮🇱" },
    { code: "hil", name: "Hiligaynon", nativeName: "Ilonggo", flag: "🇵🇭" },
    { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳" },
    { code: "hmn", name: "Hmong", nativeName: "Hmoob", flag: "" },
    { code: "hu", name: "Hungarian", nativeName: "Magyar", flag: "🇭🇺" },
    { code: "hrx", name: "Hunsrik", nativeName: "Hunsrik", flag: "🇧🇷" },
    { code: "iba", name: "Iban", nativeName: "Jaku Iban", flag: "🇲🇾" },
    { code: "is", name: "Icelandic", nativeName: "Íslenska", flag: "🇮🇸" },
    { code: "ig", name: "Igbo", nativeName: "Asụsụ Igbo", flag: "🇳🇬" },
    { code: "ilo", name: "Ilocano", nativeName: "Ilokano", flag: "🇵🇭" },
    { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia", flag: "🇮🇩" },
    { code: "ga", name: "Irish", nativeName: "Gaeilge", flag: "🇮🇪" },
    { code: "it", name: "Italian", nativeName: "Italiano", flag: "🇮🇹" },
    { code: "jam", name: "Jamaican Patois", nativeName: "Patois", flag: "🇯🇲" },
    { code: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵" },
    { code: "jv", name: "Javanese", nativeName: "ꦧꦱꦗꦮ", flag: "🇮🇩" },
    { code: "kac", name: "Jingpo", nativeName: "Jingpho", flag: "🇲🇲" },
    { code: "kl", name: "Kalaallisut", nativeName: "Kalaallisut", flag: "🇬🇱" },
    { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ", flag: "🇮🇳" },
    { code: "kr", name: "Kanuri", nativeName: "Kanuri", flag: "🇳🇬" },
    { code: "pam", name: "Kapampangan", nativeName: "Kapampangan", flag: "🇵🇭" },
    { code: "kk", name: "Kazakh", nativeName: "Қазақша", flag: "🇰🇿" },
    { code: "kha", name: "Khasi", nativeName: "Khasi", flag: "🇮🇳" },
    { code: "km", name: "Khmer", nativeName: "ខ្មែរ", flag: "🇰🇭" },
    { code: "cgg", name: "Kiga", nativeName: "Rukiga", flag: "🇺🇬" },
    { code: "kg", name: "Kikongo", nativeName: "Kikongo", flag: "🇨🇩" },
    { code: "rw", name: "Kinyarwanda", nativeName: "Ikinyarwanda", flag: "🇷🇼" },
    { code: "ktu", name: "Kituba", nativeName: "Kikongo ya Leta", flag: "🇨🇩" },
    { code: "trp", name: "Kokborok", nativeName: "Kokborok", flag: "🇮🇳" },
    { code: "kv", name: "Komi", nativeName: "Коми", flag: "🇷🇺" },
    { code: "kok", name: "Konkani", nativeName: "कोंकणी", flag: "🇮🇳" },
    { code: "ko", name: "Korean", nativeName: "한국어", flag: "🇰🇷" },
    { code: "kri", name: "Krio", nativeName: "Krio", flag: "🇸🇱" },
    { code: "ku", name: "Kurdish (Kurmanji)", nativeName: "Kurdî", flag: "🇹🇷" },
    { code: "ckb", name: "Kurdish (Sorani)", nativeName: "کوردی", flag: "🇮🇶" },
    { code: "ky", name: "Kyrgyz", nativeName: "Кыргызча", flag: "🇰🇬" },
    { code: "lo", name: "Lao", nativeName: "ລາວ", flag: "🇱🇦" },
    { code: "ltg", name: "Latgalian", nativeName: "Latgaļu", flag: "🇱🇻" },
    { code: "la", name: "Latin", nativeName: "Latina", flag: "" },
    { code: "lv", name: "Latvian", nativeName: "Latviešu", flag: "🇱🇻" },
    { code: "lij", name: "Ligurian", nativeName: "Líguru", flag: "🇮🇹" },
    { code: "li", name: "Limburgish", nativeName: "Lèmburgs", flag: "🇳🇱" },
    { code: "ln", name: "Lingala", nativeName: "Lingála", flag: "🇨🇩" },
    { code: "lt", name: "Lithuanian", nativeName: "Lietuvių", flag: "🇱🇹" },
    { code: "lmo", name: "Lombard", nativeName: "Lombard", flag: "🇮🇹" },
    { code: "lg", name: "Luganda", nativeName: "Luganda", flag: "🇺🇬" },
    { code: "luo", name: "Luo", nativeName: "Dholuo", flag: "🇰🇪" },
    { code: "lb", name: "Luxembourgish", nativeName: "Lëtzebuergesch", flag: "🇱🇺" },
    { code: "mk", name: "Macedonian", nativeName: "Македонски", flag: "🇲🇰" },
    { code: "mad", name: "Madurese", nativeName: "Madhurâ", flag: "🇮🇩" },
    { code: "mai", name: "Maithili", nativeName: "मैथिली", flag: "🇮🇳" },
    { code: "mak", name: "Makassar", nativeName: "Makassarese", flag: "🇮🇩" },
    { code: "mg", name: "Malagasy", nativeName: "Malagasy", flag: "🇲🇬" },
    { code: "ms", name: "Malay", nativeName: "Bahasa Melayu", flag: "🇲🇾" },
    { code: "ms-Arab", name: "Malay (Jawi)", nativeName: "بهاس ملايو‎", flag: "🇲🇾" },
    { code: "ml", name: "Malayalam", nativeName: "മലയാളം", flag: "🇮🇳" },
    { code: "mt", name: "Maltese", nativeName: "Malti", flag: "🇲🇹" },
    { code: "mam", name: "Mam", nativeName: "Qyool", flag: "🇬🇹" },
    { code: "gv", name: "Manx", nativeName: "Gaelg", flag: "🇮🇲" },
    { code: "mi", name: "Maori", nativeName: "Te Reo Māori", flag: "🇳🇿" },
    { code: "mr", name: "Marathi", nativeName: "मराठी", flag: "🇮🇳" },
    { code: "mh", name: "Marshallese", nativeName: "Kajin M̧ajeļ", flag: "🇲🇭" },
    { code: "mwr", name: "Marwadi", nativeName: "मारवाड़ी", flag: "🇮🇳" },
    { code: "mfe", name: "Mauritian Creole", nativeName: "Kreol Morisien", flag: "🇲🇺" },
    { code: "mhr", name: "Meadow Mari", nativeName: "олык марий", flag: "🇷🇺" },
    { code: "mni", name: "Meiteilon (Manipuri)", nativeName: "মেইতেই লোন্", flag: "🇮🇳" },
    { code: "min", name: "Minang", nativeName: "Baso Minang", flag: "🇮🇩" },
    { code: "lus", name: "Mizo", nativeName: "Mizo ṭawng", flag: "🇮🇳" },
    { code: "mn", name: "Mongolian", nativeName: "Монгол хэл", flag: "🇲🇳" },
    { code: "my", name: "Myanmar (Burmese)", nativeName: "မြန်မာစာ", flag: "🇲🇲" },
    { code: "nhn", name: "Nahuatl (Eastern Huasteca)", nativeName: "Mākaxtlahtōlli", flag: "🇲🇽" },
    { code: "ndc", name: "Ndau", nativeName: "Chindau", flag: "🇲🇿" },
    { code: "nr", name: "Ndebele (South)", nativeName: "isiNdebele", flag: "🇿🇼" },
    { code: "new", name: "Nepalbhasa (Newari)", nativeName: "नेपाल भाषा", flag: "🇳🇵" },
    { code: "ne", name: "Nepali", nativeName: "नेपाली", flag: "🇳🇵" },
    { code: "nqo", name: "NKo", nativeName: "ߒߞߏ", flag: "🇬🇳" },
    { code: "no", name: "Norwegian", nativeName: "Norsk", flag: "🇳🇴" },
    { code: "nus", name: "Nuer", nativeName: "Thok Nath", flag: "🇸🇸" },
    { code: "oc", name: "Occitan", nativeName: "Occitan", flag: "🇫🇷" },
    { code: "or", name: "Odia (Oriya)", nativeName: "ଓଡ଼ିଆ", flag: "🇮🇳" },
    { code: "om", name: "Oromo", nativeName: "Afaan Oromoo", flag: "🇪🇹" },
    { code: "os", name: "Ossetian", nativeName: "Ирон", flag: "🇷🇺" },
    { code: "pag", name: "Pangasinan", nativeName: "Pangasinan", flag: "🇵🇭" },
    { code: "pap", name: "Papiamento", nativeName: "Papiamentu", flag: "🇦🇼" },
    { code: "ps", name: "Pashto", nativeName: "پښتو", flag: "🇦🇫" },
    { code: "fa", name: "Persian", nativeName: "فارسی", flag: "🇮🇷" },
    { code: "pl", name: "Polish", nativeName: "Polski", flag: "🇵🇱" },
    { code: "pt-BR", name: "Portuguese (Brazil)", nativeName: "Português", flag: "🇧🇷" },
    { code: "pt-PT", name: "Portuguese (Portugal)", nativeName: "Português", flag: "🇵🇹" },
    { code: "pa", name: "Punjabi (Gurmukhi)", nativeName: "ਪੰਜਾਬੀ", flag: "🇮🇳" },
    { code: "pa-Shah", name: "Punjabi (Shahmukhi)", nativeName: "پنجابی", flag: "🇵🇰" },
    { code: "qu", name: "Quechua", nativeName: "Runa Simi", flag: "🇵🇪" },
    { code: "kek", name: "Qʼeqchiʼ", nativeName: "K'ekchi'", flag: "🇬🇹" },
    { code: "ro", name: "Romanian", nativeName: "Română", flag: "🇷🇴" },
    { code: "rm", name: "Romansh", nativeName: "Rumantsch", flag: "🇨🇭" },
    { code: "rn", name: "Rundi (Kirundi)", nativeName: "Ikirundi", flag: "🇧🇮" },
    { code: "ru", name: "Russian", nativeName: "Русский", flag: "🇷🇺" },
    { code: "sah", name: "Sakha (Yakut)", nativeName: "Саха", flag: "🇷🇺" },
    { code: "sa", name: "Sanskrit", nativeName: "संस्कृत", flag: "" },
    { code: "sc", name: "Sardinian", nativeName: "Sardu", flag: "🇮🇹" },
    { code: "sco", name: "Scots", nativeName: "Scots", flag: "" },
    { code: "gd", name: "Scottish Gaelic", nativeName: "Gàidhlig", flag: "" },
    { code: "sr", name: "Serbian", nativeName: "Српски", flag: "🇷🇸" },
    { code: "sh", name: "Serbo-Croatian", nativeName: "Srpskohrvatski", flag: "" },
    { code: "tn", name: "Setswana", nativeName: "Setswana", flag: "🇧🇼" },
    { code: "sn", name: "Shona", nativeName: "ChiShona", flag: "🇿🇼" },
    { code: "sd", name: "Sindhi", nativeName: "سنڌي", flag: "🇵🇰" },
    { code: "si", name: "Sinhala", nativeName: "සිංහල", flag: "🇱🇰" },
    { code: "sk", name: "Slovak", nativeName: "Slovenčina", flag: "🇸🇰" },
    { code: "sl", name: "Slovenian", nativeName: "Slovenščina", flag: "🇸🇮" },
    { code: "so", name: "Somali", nativeName: "Soomaali", flag: "🇸🇴" },
    { code: "st", name: "Southern Sotho", nativeName: "Sesotho", flag: "🇱🇸" },
    { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸" },
    { code: "es-MX", name: "Spanish (Mexico)", nativeName: "Español de México", flag: "🇲🇽" },
    { code: "su", name: "Sundanese", nativeName: "Basa Sunda", flag: "🇮🇩" },
    { code: "sw", name: "Swahili", nativeName: "Kiswahili", flag: "🇰🇪" },
    { code: "sv", name: "Swedish", nativeName: "Svenska", flag: "🇸🇪" },
    { code: "gsw", name: "Swiss German", nativeName: "Schwiizertüütsch", flag: "🇨🇭" },
    { code: "tl", name: "Tagalog", nativeName: "Tagalog", flag: "🇵🇭" },
    { code: "ty", name: "Tahitian", nativeName: "Reo Tahiti", flag: "🇵🇫" },
    { code: "tg", name: "Tajik", nativeName: "Тоҷикӣ", flag: "🇹🇯" },
    { code: "ta", name: "Tamil", nativeName: "தமிழ்", flag: "🇮🇳" },
    { code: "tt", name: "Tatar", nativeName: "Татарча", flag: "🇷🇺" },
    { code: "te", name: "Telugu", nativeName: "తెలుగు", flag: "🇮🇳" },
    { code: "tet", name: "Tetum", nativeName: "Tetun", flag: "🇹🇱" },
    { code: "th", name: "Thai", nativeName: "ไทย", flag: "🇹🇭" },
    { code: "bo", name: "Tibetan", nativeName: "བོད་ཡིག", flag: "🇨🇳" },
    { code: "tig", name: "Tigre", nativeName: "ትግረ", flag: "🇪🇷" },
    { code: "ti", name: "Tigrinya", nativeName: "ትግርኛ", flag: "🇪🇷" },
    { code: "tpi", name: "Tok Pisin", nativeName: "Tok Pisin", flag: "🇵🇬" },
    { code: "tkl", name: "Tokelauan", nativeName: "Gagana Tokelau", flag: "🇹🇰" },
    { code: "to", name: "Tongan", nativeName: "Faka Tonga", flag: "🇹🇴" },
    { code: "ts", name: "Tsonga", nativeName: "Xitsonga", flag: "🇿🇦" },
    { code: "tn", name: "Tswana", nativeName: "Setswana", flag: "🇧🇼" },
    { code: "tcy", name: "Tulu", nativeName: "ತುಳು", flag: "🇮🇳" },
    { code: "tum", name: "Tumbuka", nativeName: "chiTumbuka", flag: "🇲🇼" },
    { code: "tr", name: "Turkish", nativeName: "Türkçe", flag: "🇹🇷" },
    { code: "tk", name: "Turkmen", nativeName: "Türkmen", flag: "🇹🇲" },
    { code: "tvl", name: "Tuvaluan", nativeName: "Te Ggana Tuuvalu", flag: "🇹🇻" },
    { code: "tyv", name: "Tuvinian", nativeName: "Тыва дыл", flag: "🇷🇺" },
    { code: "tw", name: "Twi", nativeName: "Twi", flag: "🇬🇭" },
    { code: "udm", name: "Udmurt", nativeName: "Удмурт кыл", flag: "🇷🇺" },
    { code: "uk", name: "Ukrainian", nativeName: "Українська", flag: "🇺🇦" },
    { code: "hsb", name: "Upper Sorbian", nativeName: "Hornjoserbsce", flag: "🇩🇪" },
    { code: "ur", name: "Urdu", nativeName: "اردو", flag: "🇵🇰" },
    { code: "ug", name: "Uyghur", nativeName: "ئۇيغۇر تىلى", flag: "🇨🇳" },
    { code: "uz", name: "Uzbek", nativeName: "Oʻzbekcha", flag: "🇺🇿" },
    { code: "ve", name: "Venda", nativeName: "Tshivenḓa", flag: "🇿🇦" },
    { code: "vec", name: "Venetian", nativeName: "Vèneto", flag: "🇮🇹" },
    { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt", flag: "🇻🇳" },
    { code: "vo", name: "Volapük", nativeName: "Volapük", flag: "" },
    { code: "vro", name: "Võro", nativeName: "Võro", flag: "🇪🇪" },
    { code: "wa", name: "Walloon", nativeName: "Walon", flag: "🇧🇪" },
    { code: "cy", name: "Welsh", nativeName: "Cymraeg", flag: "" },
    { code: "wo", name: "Wolof", nativeName: "Wolof", flag: "🇸🇳" },
    { code: "xh", name: "Xhosa", nativeName: "isiXhosa", flag: "🇿🇦" },
    { code: "yi", name: "Yiddish", nativeName: "ייִדיש", flag: "" },
    { code: "yo", name: "Yoruba", nativeName: "Yorùbá", flag: "🇳🇬" },
    { code: "za", name: "Zhuang", nativeName: "Saɯ cueŋƅ", flag: "🇨🇳" },
    { code: "zu", name: "Zulu", nativeName: "isiZulu", flag: "🇿🇦" },
]
