import React, { useState, useEffect } from 'react';

const TeacherProfileEdit = () => {
  const [currentLang, setCurrentLang] = useState('en');
  const [selectedAreas, setSelectedAreas] = useState({});
  const [selectedStations, setSelectedStations] = useState({});
  const [activeTab, setActiveTab] = useState('profile-edit');
  const [showUpdateNotification, setShowUpdateNotification] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAreaModal, setShowAreaModal] = useState(false);
  const [showStationModal, setShowStationModal] = useState(false);
  const [selectedPrefecture, setSelectedPrefecture] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedStationPref, setSelectedStationPref] = useState(null);
  const [selectedLine, setSelectedLine] = useState(null);
  const [profileStatus, setProfileStatus] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const languageStrings = {
    ja: {
      pageTitle: "マイ・アカウント | Ouchi-Sensei",
      mainTitle: "マイ・アカウント",
      logoutBtn: "ログアウト",
      updateBoxTitle: "プロフィールを更新して注目度アップ！",
      updateBoxText: "最終更新日: <span id='last-update-date'></span><br><strong>ポイント：</strong> プロフィールは更新後<strong>4週間</strong>、「更新済み」バッジが表示されます。アクティブな講師は生徒の目に留まりやすいため、月に1回以上の更新でプロフィールを常に新鮮に保つことをお勧めします。",
      tabAccount: "アカウント編集",
      tabProfile: "プロフィール編集",
      profileStatusTitle: "プロフィールの公開状況",
      statusPrivate: "非公開",
      statusPublic: "公開中",
      s_basicInfo: "基本情報",
      dob: "生年月日",
      dobHelp: "生年月日や年齢の詳細はプロフィールに表示されません。年齢グループのみが表示されます。 例) 30代半ば～40代前半",
      gender: "性別",
      nationality: "国籍",
      s_contact: "連絡先",
      email1: "連絡先メールアドレス",
      email1Help: "こちらのメールアドレスはアカウント編集ページで変更できます。",
      phone: "携帯電話番号",
      sharePhone: "この携帯電話番号を生徒に教えます",
      email2: "第2メールアドレス",
      shareEmail2: "このメールアドレスを生徒に知らせますか",
      s_accountMgmt: "アカウント管理",
      deleteAccountText: "アカウントを削除したい場合は、下のボタンを押してください。削除申請が送信され、管理者が確認次第、アカウントは削除されます。",
      deleteAccountBtn: "削除申請",
      s_profilePhoto: "プロフィール写真",
      addPhoto: "新しいファイルを追加",
      addPhotoHelp: "親しみやすい笑顔の写真は、生徒からの印象を良くします。ファイルは 20MB 以下のサイズでなければなりません。",
      s_education: "学歴と職歴",
      educationLevel: "学歴",
      major: "専攻",
      institutionName: "教育機関の名称",
      occupation: "現在の職業",
      industry: "業種",
      occupationDetail: "職業詳細",
      s_langSkills: "語学力と指導経験",
      japaneseSkill: "日本語スキル",
      yearsInJapan: "日本にはどのくらい住んでいますか？",
      japaneseLessonOk: "日本語でのレッスンが可能",
      japaneseEmailOk: "日本語でのメール連絡が可能",
      lessonLang1: "レッスン言語1",
      isNative1: "それはあなたの母語ですか？",
      lessonLang2: "レッスン言語2",
      isNative2: "それはあなたの母語ですか？",
      teachingExperience: "指導経験",
      s_lessonInfo: "レッスン情報",
      lessonTarget: "対象者",
      targetAdult: "社会人",
      targetSenior: "高齢者",
      targetCollege: "大学生",
      targetHigh: "高校生",
      targetJuniorHigh: "中学生",
      targetElementary: "小学生",
      targetPreschooler: "未就学児(4歳以上)",
      lessonLevel: "対象レベル",
      levelBeginner: "初級者",
      levelNotSure: "まだレベルか分からない方",
      levelReadWrite: "読み書きはできるけど会話が苦手な人",
      levelShy: "恥ずかしがりやの人",
      levelReturnee: "語学留学・ワーホリ経験者・帰国子女",
      levelSpecialized: "専門分野での語学",
      beginnerWelcome: "初心者歓迎！",
      lessonTypesLabel: "得意なレッスン内容 (8つまで選択)",
      lessonTypeConversation: "日常会話", lessonTypeFreeTalk: "フリートーク", lessonTypeTravel: "旅行用会話", lessonTypeCrossCulture: "異文化についての会話", lessonTypeBusiness: "ビジネス会話", lessonTypePronunciation: "発音矯正", lessonTypeSlang: "スラングやイディオム", lessonTypeRoleplay: "ロールプレイ", lessonTypeMedia: "映画や音楽など", lessonTypeNews: "ニュース", lessonTypeExamPrep: "入試対策", lessonTypeHomework: "宿題の手伝い", lessonTypeKids: "キッズ会話", lessonTypeOriginalMaterials: "先生独自の教材", lessonTypeSpecialized: "専門分野での語学", lessonTypeLangTest: "語学検定対策", lessonTypeCorporate: "法人向け", lessonTypeOther: "その他",
      testPrepLabel: "資格・試験対策の経験（英語の先生のみ下記から選択してください）",
      testPrepToeic: "TOEIC", testPrepToefl: "TOEFL", testPrepBulats: "BULATS", testPrepEiken: "実用英語技能検定（英検）", testPrepGmat: "GMAT", testPrepIelts: "IELTS", testPrepCambridge: "ケンブリッジ大学英語検定", testPrepUn: "国連公用語英語検定（国連英検）", testPrepIndustrial: "工業英語能力検定（工業英検）", testPrepTopec: "TOPEC", testPrepJhsExam: "中学受験", testPrepHsExam: "高校受験", testPrepUniExam: "大学受験",
      engCertLabel: "資格（英語の資格をお持ちの方のみ下記から選択してください）",
      engCertCelta: "CELTA", engCertTesol: "TESOL", engCertTecsol: "TECSOL", engCertTefl: "TESL/TEFL", engCertDelta: "DELTA", engCertToeic: "TOEIC", engCertToefl: "TOEFL",
      s_lessonFees: "レッスン料金",
      trialFee: "トライアルレッスン料金",
      privateFee: "マンツーマンレッスン料金",
      groupFee: "グループレッスン料金",
      onlineFee: "オンラインレッスン料金",
      s_schedule: "レッスンスケジュール",
      mon: "月", tue: "火", wed: "水", thu: "木", fri: "金", sat: "土", sun: "日",
      early_morning: "早朝", morning: "午前中", lunchtime: "お昼前後", afternoon: "午後", evening: "夕方・夜",
      s_lessonLocation: "レッスン場所",
      lessonArea: "レッスンエリア",
      selectAreaBtn: "エリア選択",
      lessonStation: "レッスン可能駅",
      selectStationBtn: "レッスン可能駅を選択",
      availableLocations: "レッスン可能な場所",
      locationCafe: "カフェ",
      locationTeacherHome: "講師の家",
      locationStudentHome: "生徒の家",
      locationPark: "公園",
      locationPublic: "その他の公共の場所",
      landmark: "希望する場所のランドマーク",
      landmarkHelp: "レッスンを行う場所や最寄りの駅、目印となるランドマークなどを具体的に記載してください。日本語で入力すると、日本の生徒が場所をイメージしやすくなります。",
      stationNegotiable: "レッスン対応可能な駅は相談可能",
      s_selfIntro: "その他・自己紹介",
      messageToStudent: "生徒へのメッセージ",
      updateProfileBtn: "プロフィールを更新する",
      areaModalTitle: "レッスンエリアを選択",
      stationModalTitle: "レッスン可能駅を選択",
      region: "地方",
      prefecture: "都道府県",
      line: "路線",
      station: "駅",
      cancelBtn: "キャンセル",
      confirmBtn: "確定",
      updatePopupTitle: "プロフィール更新のお願い",
      updatePopupText1: "しばらくプロフィールの更新がありません。",
      updatePopupText2: "プロフィールを最新の状態に保つと、より多くの生徒から関心を持ってもらえます。この機会にぜひ内容を見直して、アピール力を高めましょう。",
      deletePopupTitle: "アカウント削除の確認",
      deletePopupText1: "本当にアカウントの削除を申請しますか？",
      deletePopupText2: "この操作は元に戻すことができません。申請が承認されると、あなたの全ての情報が当サービスから削除されます。",
      confirmDeleteBtn: "はい、削除を申請します",
      yes: "はい",
      no: "いいえ",
      hobbies: "趣味・好きなこと",
      movies: "好きな映画",
      music: "好きな音楽",
      food: "好きな食べ物",
      loveJapan: "日本の好きなところは？"
    },
    en: {
      pageTitle: "My Account | Ouchi-Sensei",
      mainTitle: "My Account",
      logoutBtn: "Logout",
      updateBoxTitle: "Keep Your Profile Fresh!",
      updateBoxText: "Last Updated: <span id='last-update-date'></span><br><strong>Tip:</strong> An 'Updated' badge is displayed on your profile for <strong>4 weeks</strong> after each update. Active instructors attract more students, so we highly recommend updating your profile at least once a month to keep it fresh!",
      tabAccount: "Account Edit",
      tabProfile: "Profile Edit",
      profileStatusTitle: "Profile Status",
      statusPrivate: "Private",
      statusPublic: "Public",
      s_basicInfo: "Basic Information",
      dob: "Date of Birth",
      dobHelp: "Your full date of birth and age are not shown on your profile. Only your age group will be displayed. Ex: Mid-30s to early 40s.",
      gender: "Gender",
      nationality: "Nationality",
      s_contact: "Contact Information",
      email1: "Contact Email Address",
      email1Help: "This email can be changed on the account editing page.",
      phone: "Phone Number",
      sharePhone: "Share this phone number with students",
      email2: "Secondary Email Address",
      shareEmail2: "Share this email address with students",
      s_accountMgmt: "Account Management",
      deleteAccountText: "If you wish to delete your account, press the button below. A deletion request will be sent, and your account will be deleted upon administrator approval.",
      deleteAccountBtn: "Request Deletion",
      s_profilePhoto: "Profile Picture",
      addPhoto: "Add new file",
      addPhotoHelp: "A friendly, smiling photo makes a good impression on students. File must be under 20MB.",
      s_education: "Education & Work History",
      educationLevel: "Education Level",
      major: "Major",
      institutionName: "Name of Institution",
      occupation: "Current Occupation",
      industry: "Industry",
      occupationDetail: "Occupation Details",
      s_langSkills: "Language & Teaching Skills",
      japaneseSkill: "Japanese Skill",
      yearsInJapan: "How long have you lived in Japan?",
      japaneseLessonOk: "Lessons in Japanese available",
      japaneseEmailOk: "Contact in Japanese available",
      lessonLang1: "Lesson Language 1",
      isNative1: "Is this your native language?",
      lessonLang2: "Lesson Language 2",
      isNative2: "Is this your native language?",
      teachingExperience: "Teaching Experience",
      s_lessonInfo: "Lesson Information",
      lessonTarget: "Target Students",
      targetAdult: "Adults",
      targetSenior: "Seniors",
      targetCollege: "College Students",
      targetHigh: "High School Students",
      targetJuniorHigh: "Junior High Students",
      targetElementary: "Elementary School Students",
      targetPreschooler: "Preschoolers (4+)",
      lessonLevel: "Target Level",
      levelBeginner: "Beginner",
      levelNotSure: "Not sure of level",
      levelReadWrite: "Can read/write but not speak well",
      levelShy: "For shy people",
      levelReturnee: "Returnees / Study abroad experience",
      levelSpecialized: "Specialized field language",
      beginnerWelcome: "Beginners welcome!",
      lessonTypesLabel: "Lesson Types You Excel At (Max 8)",
      lessonTypeConversation: "Daily Conversation", lessonTypeFreeTalk: "Free Talk", lessonTypeTravel: "Travel Conversation", lessonTypeCrossCulture: "Cross-cultural Conversation", lessonTypeBusiness: "Business Conversation", lessonTypePronunciation: "Pronunciation Correction", lessonTypeSlang: "Slang and Idioms", lessonTypeRoleplay: "Role-playing", lessonTypeMedia: "Movies, Music, etc.", lessonTypeNews: "News", lessonTypeExamPrep: "Entrance Exam Prep", lessonTypeHomework: "Homework Help", lessonTypeKids: "Kids' Conversation", lessonTypeOriginalMaterials: "Teacher's Original Materials", lessonTypeSpecialized: "Specialized Field Language", lessonTypeLangTest: "Language Proficiency Test Prep", lessonTypeCorporate: "For Corporations", lessonTypeOther: "Other (Student's Request)",
      testPrepLabel: "Test Prep Experience (English teachers only)",
      testPrepToeic: "TOEIC", testPrepToefl: "TOEFL", testPrepBulats: "BULATS", testPrepEiken: "EIKEN", testPrepGmat: "GMAT", testPrepIelts: "IELTS", testPrepCambridge: "Cambridge English", testPrepUn: "UNATE", testPrepIndustrial: "STEP EIKEN", testPrepTopec: "TOPEC", testPrepJhsExam: "Jr. High Entrance Exam", testPrepHsExam: "High School Entrance Exam", testPrepUniExam: "University Entrance Exam",
      engCertLabel: "Qualifications (English qualification holders only)",
      engCertCelta: "CELTA", engCertTesol: "TESOL", engCertTecsol: "TECSOL", engCertTefl: "TESL/TEFL", engCertDelta: "DELTA", engCertToeic: "TOEIC", engCertToefl: "TOEFL",
      s_lessonFees: "Lesson Fees",
      trialFee: "Trial Lesson Fee",
      privateFee: "One-on-One Lesson Fee",
      groupFee: "Group Lesson Fee",
      onlineFee: "Online Lesson Fee",
      s_schedule: "Lesson Schedule",
      mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat", sun: "Sun",
      early_morning: "Early Morning", morning: "Morning", lunchtime: "Lunchtime", afternoon: "Afternoon", evening: "Evening/Night",
      s_lessonLocation: "Lesson Location",
      lessonArea: "Lesson Area",
      selectAreaBtn: "Select Area",
      lessonStation: "Available Stations",
      selectStationBtn: "Select Available Stations",
      availableLocations: "Available Lesson Locations",
      locationCafe: "Cafe",
      locationTeacherHome: "Teacher's Home",
      locationStudentHome: "Student's Home",
      locationPark: "Park",
      locationPublic: "Other Public Places",
      landmark: "Preferred Landmark",
      landmarkHelp: "Please provide a specific location, nearby station, or landmark. This helps students visualize the meeting spot. We recommend entering this in Japanese for local students.",
      stationNegotiable: "Negotiable for nearby stations",
      s_selfIntro: "Other / Self-Introduction",
      messageToStudent: "Message to Students",
      updateProfileBtn: "Update Profile",
      areaModalTitle: "Select Lesson Area",
      stationModalTitle: "Select Available Stations",
      region: "Region",
      prefecture: "Prefecture",
      line: "Line",
      station: "Station",
      cancelBtn: "Cancel",
      confirmBtn: "Confirm",
      updatePopupTitle: "Time to Refresh Your Profile!",
      updatePopupText1: "It's been a while since your profile was last updated.",
      updatePopupText2: "Keeping your profile current helps you stand out to more students. Take this opportunity to review your details and make your profile shine!",
      deletePopupTitle: "Confirm Account Deletion",
      deletePopupText1: "Are you sure you want to request account deletion?",
      deletePopupText2: "This action cannot be undone. Once your request is approved, all your information will be deleted from our service.",
      confirmDeleteBtn: "Yes, request deletion",
      yes: "Yes",
      no: "No",
      hobbies: "Hobbies / Interests",
      movies: "Favorite Movies",
      music: "Favorite Music",
      food: "Favorite Food",
      loveJapan: "What do you like about Japan?"
    }
  };

  const allPrefectures = {
    hokkaido: {ja: "北海道", en: "Hokkaido"}, aomori: {ja: "青森県", en: "Aomori"}, iwate: {ja: "岩手県", en: "Iwate"}, 
    miyagi: {ja: "宮城県", en: "Miyagi"}, akita: {ja: "秋田県", en: "Akita"}, yamagata: {ja: "山形県", en: "Yamagata"}, 
    fukushima: {ja: "福島県", en: "Fukushima"}, ibaraki: {ja: "茨城県", en: "Ibaraki"}, tochigi: {ja: "栃木県", en: "Tochigi"}, 
    gunma: {ja: "群馬県", en: "Gunma"}, saitama: {ja: "埼玉県", en: "Saitama"}, chiba: {ja: "千葉県", en: "Chiba"}, 
    tokyo: {ja: "東京都", en: "Tokyo"}, kanagawa: {ja: "神奈川県", en: "Kanagawa"}, niigata: {ja: "新潟県", en: "Niigata"}, 
    toyama: {ja: "富山県", en: "Toyama"}, ishikawa: {ja: "石川県", en: "Ishikawa"}, fukui: {ja: "福井県", en: "Fukui"}, 
    yamanashi: {ja: "山梨県", en: "Yamanashi"}, nagano: {ja: "長野県", en: "Nagano"}, gifu: {ja: "岐阜県", en: "Gifu"}, 
    shizuoka: {ja: "静岡県", en: "Shizuoka"}, aichi: {ja: "愛知県", en: "Aichi"}, mie: {ja: "三重県", en: "Mie"}, 
    shiga: {ja: "滋賀県", en: "Shiga"}, kyoto: {ja: "京都府", en: "Kyoto"}, osaka: {ja: "大阪府", en: "Osaka"}, 
    hyogo: {ja: "兵庫県", en: "Hyogo"}, nara: {ja: "奈良県", en: "Nara"}, wakayama: {ja: "和歌山県", en: "Wakayama"}, 
    tottori: {ja: "鳥取県", en: "Tottori"}, shimane: {ja: "島根県", en: "Shimane"}, okayama: {ja: "岡山県", en: "Okayama"}, 
    hiroshima: {ja: "広島県", en: "Hiroshima"}, yamaguchi: {ja: "山口県", en: "Yamaguchi"}, tokushima: {ja: "徳島県", en: "Tokushima"}, 
    kagawa: {ja: "香川県", en: "Kagawa"}, ehime: {ja: "愛媛県", en: "Ehime"}, kochi: {ja: "高知県", en: "Kochi"}, 
    fukuoka: {ja: "福岡県", en: "Fukuoka"}, saga: {ja: "佐賀県", en: "Saga"}, nagasaki: {ja: "長崎県", en: "Nagasaki"}, 
    kumamoto: {ja: "熊本県", en: "Kumamoto"}, oita: {ja: "大分県", en: "Oita"}, miyazaki: {ja: "宮崎県", en: "Miyazaki"}, 
    kagoshima: {ja: "鹿児島県", en: "Kagoshima"}, okinawa: {ja: "沖縄県", en: "Okinawa"}
  };

  const cityData = {
    tokyo: { ja: ["千代田区", "中央区", "港区", "新宿区", "渋谷区"], en: ["Chiyoda", "Chuo", "Minato", "Shinjuku", "Shibuya"] },
    kanagawa: { ja: ["横浜市", "川崎市", "相模原市"], en: ["Yokohama", "Kawasaki", "Sagamihara"] },
  };

  const stationData = {
    hokkaido: { ja: "北海道", en: "Hokkaido", prefectures: { hokkaido: { ja: "北海道", en: "Hokkaido", lines: { hakodate_main: { ja: "JR函館本線", en: "JR Hakodate Main Line", stations: [{ja: "函館", en:"Hakodate"}, {ja: "札幌", en:"Sapporo"}, {ja: "旭川", en:"Asahikawa"}]}}}}},
    tohoku: { ja: "東北", en: "Tohoku", prefectures: { miyagi: { ja: "宮城県", en: "Miyagi", lines: { tohoku_main: { ja: "JR東北本線", en: "JR Tohoku Main Line", stations: [{ja: "仙台", en:"Sendai"}, {ja: "松島", en:"Matsushima"}]}}}}},
    kanto: { ja: "関東", en: "Kanto", prefectures: { 
      tokyo: { ja: "東京都", en: "Tokyo", lines: { 
        yamanote: { ja: "JR山手線", en: "JR Yamanote Line", stations: [ {ja: "東京", en: "Tokyo"}, {ja: "神田", en: "Kanda"}, {ja: "秋葉原", en: "Akihabara"} ]}, 
        chuo: { ja: "JR中央線", en: "JR Chuo Line", stations: [ {ja: "東京", en: "Tokyo"}, {ja: "神田", en: "Kanda"}, {ja: "御茶ノ水", en: "Ochanomizu"} ]} 
      } }, 
      kanagawa: { ja: "神奈川県", en: "Kanagawa", lines: { keihin: { ja: "JR京浜東北線", en: "JR Keihin-Tohoku Line", stations: [ {ja: "川崎", en: "Kawasaki"}, {ja: "鶴見", en: "Tsurumi"} ]} } }
    }},
    chubu: { ja: "中部", en: "Chubu", prefectures: { aichi: { ja: "愛知県", en: "Aichi", lines: { tokaido_main: { ja: "JR東海道本線", en: "JR Tokaido Main Line", stations: [{ja: "名古屋", en:"Nagoya"}, {ja: "豊橋", en:"Toyohashi"}]}}}}},
    kansai: { ja: "関西", en: "Kansai", prefectures: { osaka: { ja: "大阪府", en: "Osaka", lines: { osaka_loop: { ja: "JR大阪環状線", en: "JR Osaka Loop Line", stations: [ {ja: "大阪", en: "Osaka"}, {ja: "天満", en: "Temma"} ]} } }}},
    chugoku: { ja: "中国", en: "Chugoku", prefectures: { hiroshima: { ja: "広島県", en: "Hiroshima", lines: { sanyo_main: { ja: "JR山陽本線", en: "JR Sanyo Main Line", stations: [{ja: "広島", en:"Hiroshima"}, {ja: "宮島口", en:"Miyajimaguchi"}]}}}}},
    shikoku: { ja: "四国", en: "Shikoku", prefectures: { ehime: { ja: "愛媛県", en: "Ehime", lines: { yosan: { ja: "JR予讃線", en: "JR Yosan Line", stations: [{ja: "松山", en:"Matsuyama"}]}}}}},
    kyushu_okinawa: { ja: "九州・沖縄", en: "Kyushu/Okinawa", prefectures: { 
      fukuoka: { ja: "福岡県", en: "Fukuoka", lines: { kagoshima_main: { ja: "JR鹿児島本線", en: "JR Kagoshima Main Line", stations: [{ja: "博多", en:"Hakata"}, {ja: "小倉", en:"Kokura"}]}}}, 
      okinawa: { ja: "沖縄県", en: "Okinawa", lines: { yui_rail: { ja: "ゆいレール", en: "Yui Rail", stations: [{ja: "那覇空港", en:"Naha Airport"}, {ja: "県庁前", en:"Kenchomae"}]}}}}
    }
  };

  const dropdownOptions = {
    educationLevelOptions: {
      ja: { "義務教育": "義務教育", "高等学校": "高等学校", "専門学校": "専門学校", "短期大学": "短期大学", "４年制大学": "４年制大学", "大学院（修士課程）": "大学院（修士課程）", "大学院（博士課程）": "大学院（博士課程）" },
      en: { "Compulsory Education": "Compulsory Education", "High School": "High School", "Vocational School": "Vocational School", "Junior College": "Junior College", "4-Year University": "4-Year University", "Master's Degree": "Master's Degree", "Doctoral Degree": "Doctoral Degree" }
    },
    majorOptions: {
      ja: { "none": "- なし -", "philosophy": "哲学", "religious_studies": "宗教学", "education": "教育学", "social_welfare": "社会福祉学", "literature": "文学", "anthropology": "人類学・考古学", "history": "歴史学", "linguistics": "言語学・言語", "political_science": "政治学", "public_administration": "行政学", "business": "経営学（ビジネス・商学）", "law": "法学", "economics": "経済学", "sociology": "社会学", "area_studies": "地域研究", "media_journalism": "メディア研究・ジャーナリズム", "mathematics": "数学", "computer_science": "計算機科学", "systems_science": "システム科学", "natural_sciences": "自然科学", "physics": "物理学", "chemistry": "化学", "life_sciences_biology": "生命科学・生物学", "earth_sciences": "地球科学", "space_science_astronomy": "宇宙科学・天文学", "medicine_nursing": "医学・看護学", "pharmacy": "薬学", "dentistry": "歯学", "psychology": "心理学", "agriculture": "農学", "engineering": "工学", "architecture": "建築学", "transportation_science": "交通科学", "library_information_science": "図書館情報学", "military_science": "軍事学", "home_economics": "家政学", "art_studies": "芸術学", "design": "デザイン", "music": "音楽" },
      en: { "none": "- None -", "philosophy": "Philosophy", "religious_studies": "Religious Studies", "education": "Education", "social_welfare": "Social Welfare", "literature": "Literature", "anthropology": "Anthropology/Archaeology", "history": "History", "linguistics": "Linguistics/Languages", "political_science": "Political Science", "public_administration": "Public Administration", "business": "Business/Commerce", "law": "Law", "economics": "Economics", "sociology": "Sociology", "area_studies": "Area Studies", "media_journalism": "Media Studies/Journalism", "mathematics": "Mathematics", "computer_science": "Computer Science", "systems_science": "Systems Science", "natural_sciences": "Natural Sciences", "physics": "Physics", "chemistry": "Chemistry", "life_sciences_biology": "Life Sciences/Biology", "earth_sciences": "Earth Sciences", "space_science_astronomy": "Space Science/Astronomy", "medicine_nursing": "Medicine/Nursing", "pharmacy": "Pharmacy", "dentistry": "Dentistry", "psychology": "Psychology", "agriculture": "Agriculture", "engineering": "Engineering", "architecture": "Architecture", "transportation_science": "Transportation Science", "library_information_science": "Library/Information Science", "military_science": "Military Science", "home_economics": "Home Economics", "art_studies": "Art Studies", "design": "Design", "music": "Music" }
    },
    occupationOptions: {
      ja: { "company_employee": "会社員", "professional": "専門職", "self_employed": "自営業", "freelancer": "自由業　（芸術家・音楽家etc）", "temp_staff": "派遣社員", "part_time": "アルバイト/パートタイマー", "homemaker": "家事", "student": "学生", "other": "その他" },
      en: { "company_employee": "Company Employee", "professional": "Professional", "self_employed": "Self-employed", "freelancer": "Freelancer (Artist, Musician, etc.)", "temp_staff": "Temporary Staff", "part_time": "Part-time Worker", "homemaker": "Homemaker", "student": "Student", "other": "Other" }
    },
    industryOptions: {
      ja: { "education": "教育学習支援業", "services": "生活関連サービス業，娯楽業", "trading": "貿易業", "hospitality": "宿泊業,飲食店", "research_tech": "学術研究,専門・技術サービス業", "it": "情報通信業", "finance_insurance": "金融業,保険業", "real_estate": "不動産業,物品賃貸業", "wholesale_retail": "卸売業・小売業", "agriculture": "農業,林業,漁業", "mining": "鉱業.採石業,砂利採取業", "construction": "建設業", "manufacturing": "製造業", "utilities": "電気・ガス・熱供給・水道業", "transport_postal": "運輸業,郵便業", "medical_welfare": "医療、福祉", "legal": "法律関係", "other": "その他" },
      en: { "education": "Education, learning support", "services": "Living-related and personal services, and amusement services", "trading": "Trading", "hospitality": "Accommodations, eating and drinking services", "research_tech": "Scientific research, professional and technical services", "it": "Information and communications", "finance_insurance": "Finance and insurance", "real_estate": "Real estate and goods rental and leasing", "wholesale_retail": "Wholesale and retail trade", "agriculture": "Agriculture, forestry and fisheries", "mining": "Mining and quarrying of stone and gravel", "construction": "Construction", "manufacturing": "Manufacturing", "utilities": "Electricity, gas, heat supply and water", "transport_postal": "Transport and postal activities", "medical_welfare": "Medical, health care and welfare", "legal": "Legal services", "other": "Other" }
    },
    japaneseSkillOptions: {
      ja: { "none": "話すことができない", "beginner": "挨拶程度", "intermediate": "日常会話には困らない", "advanced": "専門的なことでなければ問題なし", "fluent": "流暢なので自信あり", "native": "母国語" },
      en: { "none": "Cannot speak", "beginner": "Basic greetings", "intermediate": "Conversational", "advanced": "Business level", "fluent": "Fluent", "native": "Native" }
    },
    yearsInJapanOptions: {
      ja: { "lt1": "1年未満", "1-2": "1年～2年", "2-3": "2年～3年", "3-4": "3年～4年", "4-5": "4年～5年", "5-6": "5年～6年", "6-7": "6年～7年", "7-8": "7年～8年", "8-9": "8年～9年", "10-19": "10年以上", "gt20": "20年以上" },
      en: { "lt1": "Less than 1 year", "1-2": "1-2 years", "2-3": "2-3 years", "3-4": "3-4 years", "4-5": "4-5 years", "5-6": "5-6 years", "6-7": "6-7 years", "7-8": "7-8 years", "8-9": "8-9 years", "10-19": "10+ years", "gt20": "20+ years" }
    },
    lessonLangOptions: {
      ja: { none: "- なし -", en: "英語・英会話", "zh-cn": "中国語（北京語）", "zh-hk": "中国語（広東語）", ko: "韓国語", fr: "フランス語", es: "スペイン語", de: "ドイツ語", it: "イタリア語", pt: "ポルトガル語", ru: "ロシア語", th: "タイ語", vi: "ベトナム語", id: "インドネシア語", my: "ミャンマー語（ビルマ語）", tl: "フィリピン語（タガログ語）", ar: "アラビア語" },
      en: { none: "- None -", en: "English", "zh-cn": "Chinese (Mandarin)", "zh-hk": "Chinese (Cantonese)", ko: "Korean", fr: "French", es: "Spanish", de: "German", it: "Italian", pt: "Portuguese", ru: "Russian", th: "Thai", vi: "Vietnamese", id: "Indonesian", my: "Myanmar (Burmese)", tl: "Filipino (Tagalog)", ar: "Arabic" }
    },
    teachingExperienceOptions: {
      ja: { "none": "なし", "lt1": "1年未満", "1-2": "1年～2年", "2-3": "2年～3年", "3-4": "3年～4年", "4-5": "4年～5年", "5-6": "5年～6年", "6-7": "6年～7年", "7-8": "7年～8年", "8-9": "8年～9年", "9-10": "9年～10年", "10-19": "10年以上", "gt20": "20年以上" },
      en: { "none": "None", "lt1": "Less than 1 year", "1-2": "1-2 years", "2-3": "2-3 years", "3-4": "3-4 years", "4-5": "4-5 years", "5-6": "5-6 years", "6-7": "6-7 years", "7-8": "7-8 years", "8-9": "8-9 years", "9-10": "9-10 years", "10-19": "10+ years", "gt20": "20+ years" }
    },
    feeOptions: {
      ja: { "none": "選択してください", "free": "無料", "1000": "¥1000", "1500": "¥1500", "2000": "¥2000", "2500": "¥2500", "3000": "¥3000" },
      en: { "none": "Please select", "free": "Free", "1000": "¥1000", "1500": "¥1500", "2000": "¥2000", "2500": "¥2500", "3000": "¥3000" }
    }
  };

  const scheduleData = {
    days: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    times: ['early_morning', 'morning', 'lunchtime', 'afternoon', 'evening']
  };

  const handleLogout = () => {
    localStorage.removeItem('teacherLoggedIn');
    localStorage.removeItem('teacherToken');
    setShowLogoutModal(true);
    // Optionally clear auth tokens here
  };

  const handleDeleteRequest = () => {
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    alert('Account deletion request sent.');
    setShowDeleteModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
    setShowUpdateNotification(false);
  };

  const handleCitySelection = (prefKey, cityKey, isSelected) => {
    const newSelectedAreas = {...selectedAreas};
    
    if (isSelected) {
      if (!newSelectedAreas[prefKey]) {
        newSelectedAreas[prefKey] = { 
          ja: allPrefectures[prefKey].ja, 
          en: allPrefectures[prefKey].en, 
          cities: [] 
        };
      }
      if (!newSelectedAreas[prefKey].cities.includes(cityKey)) {
        newSelectedAreas[prefKey].cities.push(cityKey);
      }
    } else {
      if (newSelectedAreas[prefKey]) {
        newSelectedAreas[prefKey].cities = newSelectedAreas[prefKey].cities.filter(c => c !== cityKey);
        if (newSelectedAreas[prefKey].cities.length === 0) {
          delete newSelectedAreas[prefKey];
        }
      }
    }
    
    setSelectedAreas(newSelectedAreas);
  };

  const handleStationSelection = (lineKey, station, isSelected, regionKey, prefKey) => {
    const newSelectedStations = {...selectedStations};
    const lineData = stationData[regionKey].prefectures[prefKey].lines[lineKey];
    
    if (isSelected) {
      if (!newSelectedStations[lineKey]) {
        newSelectedStations[lineKey] = {
          ja_line: lineData.ja,
          en_line: lineData.en,
          regionKey: regionKey,
          prefKey: prefKey,
          stations: []
        };
      }
      if (!newSelectedStations[lineKey].stations.some(s => s.en === station.en)) {
        newSelectedStations[lineKey].stations.push(station);
      }
    } else {
      if (newSelectedStations[lineKey]) {
        newSelectedStations[lineKey].stations = newSelectedStations[lineKey].stations.filter(s => s.en !== station.en);
        if (newSelectedStations[lineKey].stations.length === 0) {
          delete newSelectedStations[lineKey];
        }
      }
    }
    
    setSelectedStations(newSelectedStations);
  };

  const checkUpdateStatus = () => {
    const UPDATE_PERIOD_DAYS = 28;
    const lastUpdatedDateString = '2025-05-13';
    const lastUpdatedDate = new Date(lastUpdatedDateString);
    const now = new Date();
    const diffTime = Math.abs(now - lastUpdatedDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays > UPDATE_PERIOD_DAYS) {
      setShowUpdateNotification(true);
      if (!sessionStorage.getItem('updatePopupShown')) {
        setShowUpdateModal(true);
        sessionStorage.setItem('updatePopupShown', 'true');
      }
    }
  };

  useEffect(() => {
    checkUpdateStatus();
    // Set initial selected prefecture when area modal opens
    if (showAreaModal && !selectedPrefecture) {
      const firstPref = Object.keys(cityData)[0];
      setSelectedPrefecture(firstPref);
    }
    // Set initial selected region when station modal opens
    if (showStationModal && !selectedRegion) {
      const firstRegion = Object.keys(stationData)[0];
      setSelectedRegion(firstRegion);
    }
  }, [showAreaModal, showStationModal]);

  const renderSelectedAreaTags = () => {
    return Object.keys(selectedAreas).map(prefKey => (
      selectedAreas[prefKey].cities.map((cityKey, index) => {
        const cityIndex = cityData[prefKey]['en'].findIndex(c => c.toLowerCase() === cityKey);
        const cityName = cityData[prefKey][currentLang][cityIndex];
        return (
          <span key={`${prefKey}-${cityKey}`} className="area-tag">
            {`${allPrefectures[prefKey][currentLang]} ${cityName}`}
            <button onClick={() => {
              handleCitySelection(prefKey, cityKey, false);
            }}>&times;</button>
          </span>
        );
      })
    ));
  };

  const renderSelectedStationTags = () => {
    return Object.keys(selectedStations).map(lineKey => (
      selectedStations[lineKey].stations.map((station, index) => (
        <span key={`${lineKey}-${station.en}`} className="station-tag">
          {`${selectedStations[lineKey][currentLang+'_line']} - ${station[currentLang]}`}
          <button onClick={() => {
            handleStationSelection(lineKey, station, false, selectedStations[lineKey].regionKey, selectedStations[lineKey].prefKey);
          }}>&times;</button>
        </span>
      ))
    ));
  };

  const renderScheduleDesktop = () => {
    return (
      <div className="schedule-matrix" id="schedule-matrix-desktop">
        <div style={{ display: 'contents' }}>
          <div className="header"></div>
          {scheduleData.days.map(dayKey => (
            <div key={dayKey} className="header" data-lang-key={dayKey}>
              {languageStrings[currentLang][dayKey]}
            </div>
          ))}
        </div>
        
        {scheduleData.times.map((timeKey, timeIndex) => (
          <div key={timeKey} style={{ display: 'contents' }}>
            <div className="time-label" data-lang-key={timeKey}>
              {languageStrings[currentLang][timeKey]}
            </div>
            
            {scheduleData.days.map((dayKey, dayIndex) => {
              const uniqueId = `schedule-${dayIndex}-${timeIndex}`;
              return (
                <div key={dayKey} className="checkbox-container">
                  <input 
                    type="checkbox" 
                    id={`${uniqueId}-desktop`} 
                    data-day={dayIndex} 
                    data-time={timeIndex}
                    onChange={(e) => {
                      const isChecked = e.target.checked;
                      // Sync all checkboxes with same day/time
                      document.querySelectorAll(`input[data-day='${dayIndex}'][data-time='${timeIndex}']`)
                        .forEach(cb => cb.checked = isChecked);
                    }}
                  />
                  <label htmlFor={`${uniqueId}-desktop`} className="checkbox-custom"></label>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  };

  const renderScheduleMobile = () => {
    return (
      <div className="schedule-wrapper" id="schedule-container-responsive">
        {scheduleData.days.map((dayKey, dayIndex) => (
          <div key={dayKey} className="schedule-day">
            <div className="schedule-day-header" data-lang-key={dayKey}>
              {languageStrings[currentLang][dayKey]}
            </div>
            
            {scheduleData.times.map((timeKey, timeIndex) => {
              const uniqueId = `schedule-${dayIndex}-${timeIndex}`;
              return (
                <div key={timeKey} className="schedule-slot">
                  <span className="schedule-slot-label" data-lang-key={timeKey}>
                    {languageStrings[currentLang][timeKey]}
                  </span>
                  <div className="checkbox-container">
                    <input 
                      type="checkbox" 
                      id={`${uniqueId}-mobile`} 
                      data-day={dayIndex} 
                      data-time={timeIndex}
                      onChange={(e) => {
                        const isChecked = e.target.checked;
                        // Sync all checkboxes with same day/time
                        document.querySelectorAll(`input[data-day='${dayIndex}'][data-time='${timeIndex}']`)
                          .forEach(cb => cb.checked = isChecked);
                      }}
                    />
                    <label htmlFor={`${uniqueId}-mobile`} className="checkbox-custom"></label>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  };

  const renderAreaModal = () => {
    if (!showAreaModal) return null;
    
    return (
      <div id="area-modal" className="modal-overlay active">
        <div className="modal-content">
          <div className="modal-header">
            <h3>{languageStrings[currentLang].areaModalTitle}</h3>
            <button className="modal-close" onClick={() => setShowAreaModal(false)}>&times;</button>
          </div>
          <div className="modal-body">
            <div className="area-column area-column-prefectures">
              <ul className="area-prefecture-list" id="area-prefecture-list">
                {Object.keys(cityData).map(prefKey => (
                  <li key={prefKey}>
                    <button 
                      onClick={() => setSelectedPrefecture(prefKey)}
                      className={selectedPrefecture === prefKey ? 'selected' : ''}
                    >
                      {allPrefectures[prefKey][currentLang]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="area-column area-column-cities">
              <div className="area-city-grid" id="area-city-grid">
                {selectedPrefecture && cityData[selectedPrefecture] && 
                  cityData[selectedPrefecture][currentLang].map((cityName, index) => {
                    const cityKey = cityData[selectedPrefecture]['en'][index].toLowerCase();
                    const isChecked = selectedAreas[selectedPrefecture]?.cities.includes(cityKey) || false;
                    
                    return (
                      <div key={cityKey} className="hs-selectable-item">
                        <input
                          type="checkbox"
                          id={`modal-city-${selectedPrefecture}-${cityKey}`}
                          checked={isChecked}
                          onChange={(e) => handleCitySelection(selectedPrefecture, cityKey, e.target.checked)}
                        />
                        <label htmlFor={`modal-city-${selectedPrefecture}-${cityKey}`}>
                          {cityName}
                        </label>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="hs-btn hs-btn-secondary" onClick={() => setShowAreaModal(false)}>
              {languageStrings[currentLang].cancelBtn}
            </button>
            <button type="button" className="hs-btn hs-btn-primary" onClick={() => {
              setShowAreaModal(false);
            }}>
              {languageStrings[currentLang].confirmBtn}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderStationModal = () => {
    if (!showStationModal) return null;
    
    return (
      <div id="station-modal" className="modal-overlay active">
        <div className="modal-content">
          <div className="modal-header">
            <h3>{languageStrings[currentLang].stationModalTitle}</h3>
            <button className="modal-close" onClick={() => setShowStationModal(false)}>&times;</button>
          </div>
          <div className="modal-body">
            <div className="station-column" id="station-region-column">
              <h4>{languageStrings[currentLang].region}</h4>
              <ul className="station-list" id="station-region-list">
                {Object.keys(stationData).map(regionKey => (
                  <li key={regionKey}>
                    <button 
                      onClick={() => {
                        setSelectedRegion(regionKey);
                        setSelectedStationPref(null);
                        setSelectedLine(null);
                      }}
                      className={selectedRegion === regionKey ? 'selected' : ''}
                    >
                      {stationData[regionKey][currentLang]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="station-column" id="station-prefecture-column">
              <h4>{languageStrings[currentLang].prefecture}</h4>
              <ul className="station-list" id="station-prefecture-list">
                {selectedRegion && Object.keys(stationData[selectedRegion].prefectures).map(prefKey => (
                  <li key={prefKey}>
                    <button 
                      onClick={() => {
                        setSelectedStationPref(prefKey);
                        setSelectedLine(null);
                      }}
                      className={selectedStationPref === prefKey ? 'selected' : ''}
                    >
                      {stationData[selectedRegion].prefectures[prefKey][currentLang]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="station-column" id="station-line-column">
              <h4>{languageStrings[currentLang].line}</h4>
              <ul className="station-list" id="station-line-list">
                {selectedRegion && selectedStationPref && 
                  Object.keys(stationData[selectedRegion].prefectures[selectedStationPref].lines).map(lineKey => (
                    <li key={lineKey}>
                      <button 
                        onClick={() => setSelectedLine(lineKey)}
                        className={selectedLine === lineKey ? 'selected' : ''}
                      >
                        {stationData[selectedRegion].prefectures[selectedStationPref].lines[lineKey][currentLang]}
                      </button>
                    </li>
                  ))
                }
              </ul>
            </div>
            
            <div className="station-column" id="station-station-column">
              <h4>{languageStrings[currentLang].station}</h4>
              <div className="station-checkbox-grid" id="station-station-grid">
                {selectedRegion && selectedStationPref && selectedLine && 
                  stationData[selectedRegion].prefectures[selectedStationPref].lines[selectedLine].stations.map(station => {
                    const isChecked = selectedStations[selectedLine]?.stations.some(s => s.en === station.en) || false;
                    
                    return (
                      <div key={station.en} className="hs-selectable-item">
                        <input
                          type="checkbox"
                          id={`station-${selectedLine}-${station.en}`}
                          checked={isChecked}
                          onChange={(e) => handleStationSelection(
                            selectedLine, 
                            station, 
                            e.target.checked, 
                            selectedRegion, 
                            selectedStationPref
                          )}
                        />
                        <label htmlFor={`station-${selectedLine}-${station.en}`}>
                          {station[currentLang]}
                        </label>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="hs-btn hs-btn-secondary" onClick={() => setShowStationModal(false)}>
              {languageStrings[currentLang].cancelBtn}
            </button>
            <button className="hs-btn hs-btn-primary" id="station-modal-confirm-btn" onClick={() => setShowStationModal(false)}>
              {languageStrings[currentLang].confirmBtn}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderUpdateModal = () => {
    if (!showUpdateModal) return null;
    
    return (
      <div id="update-required-modal" className="modal-overlay active">
        <div className="modal-content">
          <div className="modal-header">
            <h3>
              <i className="fas fa-bell" style={{ color: 'var(--warning-color)' }}></i> 
              {languageStrings[currentLang].updatePopupTitle}
            </h3>
            <button className="modal-close" onClick={() => setShowUpdateModal(false)}>&times;</button>
          </div>
          <div className="modal-body">
            <p>{languageStrings[currentLang].updatePopupText1}</p>
            <p>{languageStrings[currentLang].updatePopupText2}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="hs-btn hs-btn-primary" onClick={() => setShowUpdateModal(false)}>OK</button>
          </div>
        </div>
      </div>
    );
  };

  const renderDeleteModal = () => {
    if (!showDeleteModal) return null;
    
    return (
      <div id="delete-confirm-modal" className="modal-overlay active">
        <div className="modal-content">
          <div className="modal-header">
            <h3>
              <i className="fas fa-exclamation-triangle" style={{ color: 'var(--error-color)' }}></i> 
              {languageStrings[currentLang].deletePopupTitle}
            </h3>
            <button className="modal-close" onClick={() => setShowDeleteModal(false)}>&times;</button>
          </div>
          <div className="modal-body">
            <p>{languageStrings[currentLang].deletePopupText1}</p>
            <p>{languageStrings[currentLang].deletePopupText2}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="hs-btn hs-btn-secondary" onClick={() => setShowDeleteModal(false)}>
              {languageStrings[currentLang].cancelBtn}
            </button>
            <button type="button" className="hs-btn hs-btn-danger" onClick={confirmDelete}>
              {languageStrings[currentLang].confirmDeleteBtn}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderLogoutModal = () => {
    if (!showLogoutModal) return null;
    return (
      <div className="modal-overlay active">
        <div className="modal-content" style={{ maxWidth: 400, textAlign: 'center', padding: '2rem' }}>
          <div style={{ margin: '2rem 0 1.5rem 0' }}>
            <div style={{
              background: '#6fba2c',
              borderRadius: '50%',
              width: 64,
              height: 64,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto'
            }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="#6fba2c"/>
                <path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <h2 style={{ fontWeight: 700, marginBottom: 8 }}>Logged Out Successfully</h2>
          <p style={{ color: '#6b7280', marginBottom: 24 }}>We hope to see you again soon.</p>
          <button
            className="hs-btn hs-btn-primary"
            style={{ width: '100%', marginBottom: 12 }}
            onClick={() => {
              setShowLogoutModal(false);
              window.location.href = '/teacher-login';
            }}
          >
            Login Again
          </button>
          <button
            className="hs-btn hs-btn-secondary"
            style={{ width: '100%' }}
            onClick={() => {
              setShowLogoutModal(false);
              window.location.href = '/techersite';
            }}
          >
            Back to Homepage
          </button>
        </div>
      </div>
    );
  };

  const renderSelectOptions = (optionsData, addNoneOption = false) => {
    const optionsSource = (typeof optionsData === 'string') ? dropdownOptions[optionsData] : optionsData;
    const options = optionsSource[currentLang];
    
    return (
      <>
        {addNoneOption && (
          <option value="">
            {options.none || 'Please select'}
          </option>
        )}
        {Object.keys(options).map(key => {
          if (key === 'none') return null;
          return (
            <option key={key} value={key}>
              {options[key]}
            </option>
          );
        })}
      </>
    );
  };

  const renderCheckboxGrid = (prefix) => {
    const items = [];
    
    for (const key in languageStrings[currentLang]) {
      if (key.startsWith(prefix) && key !== `${prefix}Label`) {
        const value = key.replace(prefix, '').toLowerCase();
        
        items.push(
          <div key={key} className="hs-selectable-item">
            <input type="checkbox" name={prefix.toLowerCase()} id={`${prefix.toLowerCase()}_${value}`} value={value} />
            <label htmlFor={`${prefix.toLowerCase()}_${value}`}>
              {languageStrings[currentLang][key]}
            </label>
          </div>
        );
      }
    }
    
    return items;
  };

  return (
    <>
      <header className="hs-header">
        <a href="#" className="logo"><img src='image/logo.jpg'></img></a>
        <nav className="hs-header-nav">
          <div className="lang-switcher">
            <button 
              id="lang-ja" 
              className={currentLang === 'ja' ? 'active' : ''}
              onClick={() => setCurrentLang('ja')}
            >
              JA
            </button>
            <button 
              id="lang-en" 
              className={currentLang === 'en' ? 'active' : ''}
              onClick={() => setCurrentLang('en')}
            >
              EN
            </button>
          </div>
          <button className="hs-logout-btn" id="logout-btn" onClick={handleLogout}>
            {languageStrings[currentLang].logoutBtn}
          </button>
        </nav>
      </header>

      <div className="hs-container">
        <div className="hs-main-content">
          <h1 className="page-title">{languageStrings[currentLang].mainTitle}</h1>

          {showUpdateNotification && (
            <div id="update-notification" className="update-notification-box">
              <div className="title">
                <i className="fas fa-exclamation-circle"></i> 
                {languageStrings[currentLang].updateBoxTitle}
              </div>
              <p dangerouslySetInnerHTML={{ __html: languageStrings[currentLang].updateBoxText }} />
            </div>
          )}

          <div className="hs-tabs">
            <button 
              className={`hs-tab-btn ${activeTab === 'account-edit' ? 'active' : ''}`} 
              data-tab="account-edit"
              onClick={() => setActiveTab('account-edit')}
            >
              {languageStrings[currentLang].tabAccount}
            </button>
            <button 
              className={`hs-tab-btn ${activeTab === 'profile-edit' ? 'active' : ''}`} 
              data-tab="profile-edit"
              onClick={() => setActiveTab('profile-edit')}
            >
              {languageStrings[currentLang].tabProfile}
            </button>
          </div>

          <form id="teacherEditForm" onSubmit={handleSubmit} noValidate>
            <div id="account-edit" className={`hs-tab-content ${activeTab === 'account-edit' ? 'active' : ''}`}>
              <section className="hs-form-section">
                <h3 className="hs-form-section-title">{languageStrings[currentLang].s_basicInfo}</h3>
                <div className="hs-form-grid">
                  <div className="hs-form-group hs-grid-full">
                    <label>{languageStrings[currentLang].dob}</label>
                    <input type="text" value="2009年2月26日" readOnly />
                    <p className="hs-help-text">{languageStrings[currentLang].dobHelp}</p>
                  </div>
                  <div className="hs-form-group">
                    <label>{languageStrings[currentLang].gender}</label>
                    <input type="text" value="男性" readOnly />
                  </div>
                  <div className="hs-form-group">
                    <label>{languageStrings[currentLang].nationality}</label>
                    <input type="text" value="アルメニア" readOnly />
                  </div>
                </div>
              </section>
              
              <section className="hs-form-section">
                <h3 className="hs-form-section-title">{languageStrings[currentLang].s_contact}</h3>
                <div className="hs-form-grid">
                  <div className="hs-form-group">
                    <label htmlFor="email">{languageStrings[currentLang].email1}</label>
                    <input type="email" id="email" name="email" defaultValue="yutakatsunoda@gmail.com" />
                    <p className="hs-help-text">{languageStrings[currentLang].email1Help}</p>
                  </div>
                  <div className="hs-form-group">
                    <label htmlFor="phone">{languageStrings[currentLang].phone}</label>
                    <input type="tel" id="phone" name="phone" defaultValue="080-3395-9999" />
                  </div>
                  <div className="hs-form-group hs-grid-full">
                    <div className="hs-selectable-item" style={{ maxWidth: '350px' }}>
                      <input type="checkbox" id="share_phone" name="share_phone" />
                      <label htmlFor="share_phone">{languageStrings[currentLang].sharePhone}</label>
                    </div>
                  </div>
                  <div className="hs-form-group">
                    <label htmlFor="email2">{languageStrings[currentLang].email2}</label>
                    <input type="email" id="email2" name="email2" />
                  </div>
                  <div className="hs-form-group">
                    <div className="hs-selectable-item" style={{ maxWidth: '350px', alignSelf: 'end' }}>
                      <input type="checkbox" id="share_email2" name="share_email2" defaultChecked />
                      <label htmlFor="share_email2">{languageStrings[currentLang].shareEmail2}</label>
                    </div>
                  </div>
                </div>
              </section>
              
              <section className="hs-form-section">
                <h3 className="hs-form-section-title">{languageStrings[currentLang].s_accountMgmt}</h3>
                <p>{languageStrings[currentLang].deleteAccountText}</p>
                <button 
                  type="button" 
                  className="hs-btn hs-btn-danger" 
                  id="delete-request-btn" 
                  onClick={handleDeleteRequest}
                >
                  <i className="fas fa-trash-alt"></i> 
                  <span>{languageStrings[currentLang].deleteAccountBtn}</span>
                </button>
              </section>
            </div>

            <div id="profile-edit" className={`hs-tab-content ${activeTab === 'profile-edit' ? 'active' : ''}`}>
              <div className="status-toggle-section">
                <div className="title">{languageStrings[currentLang].profileStatusTitle}</div>
                <div className="toggle-switch">
                  <span className="status-text">{languageStrings[currentLang].statusPrivate}</span>
                  <input 
                    type="checkbox" 
                    id="profile-status-toggle" 
                    checked={profileStatus}
                    onChange={(e) => setProfileStatus(e.target.checked)}
                  />
                  <label htmlFor="profile-status-toggle"></label>
                  <span className="status-text">{languageStrings[currentLang].statusPublic}</span>
                </div>
              </div>
              
              <section className="hs-form-section">
                <h3 className="hs-form-section-title">{languageStrings[currentLang].s_profilePhoto}</h3>
                <div className="hs-form-group hs-grid-full">
                  <label htmlFor="profile_photo">{languageStrings[currentLang].addPhoto}</label>
                  <input type="file" id="profile_photo" name="profile_photo" accept="image/*" />
                  <p className="hs-help-text">{languageStrings[currentLang].addPhotoHelp}</p>
                </div>
              </section>
              
              <section className="hs-form-section">
                <h3 className="hs-form-section-title">{languageStrings[currentLang].s_education}</h3>
                <div className="hs-form-grid">
                  <div className="hs-form-group">
                    <label htmlFor="education_level">{languageStrings[currentLang].educationLevel}</label>
                    <select id="education_level" name="education_level">
                      {renderSelectOptions('educationLevelOptions')}
                    </select>
                  </div>
                  <div className="hs-form-group">
                    <label htmlFor="major">{languageStrings[currentLang].major}</label>
                    <select id="major" name="major">
                      {renderSelectOptions('majorOptions', true)}
                    </select>
                  </div>
                  <div className="hs-form-group hs-grid-full">
                    <label htmlFor="education_institution">{languageStrings[currentLang].institutionName}</label>
                    <input type="text" id="education_institution" name="education_institution" />
                  </div>
                  <div className="hs-form-group">
                    <label htmlFor="occupation">{languageStrings[currentLang].occupation}</label>
                    <select id="occupation" name="occupation">
                      {renderSelectOptions('occupationOptions')}
                    </select>
                  </div>
                  <div className="hs-form-group">
                    <label htmlFor="industry">{languageStrings[currentLang].industry}</label>
                    <select id="industry" name="industry">
                      {renderSelectOptions('industryOptions')}
                    </select>
                  </div>
                  <div className="hs-form-group hs-grid-full">
                    <label htmlFor="occupation_detail">{languageStrings[currentLang].occupationDetail}</label>
                    <input type="text" id="occupation_detail" name="occupation_detail" />
                  </div>
                </div>
              </section>

              <section className="hs-form-section">
                <h3 className="hs-form-section-title">{languageStrings[currentLang].s_langSkills}</h3>
                <div className="hs-form-grid">
                  <div className="hs-form-group">
                    <label htmlFor="japanese_skill">
                      {languageStrings[currentLang].japaneseSkill}
                      <span className="hs-required">*</span>
                    </label>
                    <select id="japanese_skill" name="japanese_skill" required>
                      {renderSelectOptions('japaneseSkillOptions')}
                    </select>
                  </div>
                  <div className="hs-form-group">
                    <label htmlFor="years_in_japan">
                      {languageStrings[currentLang].yearsInJapan}
                      <span className="hs-required">*</span>
                    </label>
                    <select id="years_in_japan" name="years_in_japan" required>
                      {renderSelectOptions('yearsInJapanOptions')}
                    </select>
                  </div>
                  <div className="hs-form-group hs-grid-full">
                    <div className="hs-selectable-grid" style={{ gridTemplateColumns: '1fr 1fr', maxWidth: '500px' }}>
                      <div className="hs-selectable-item">
                        <input type="checkbox" id="japanese_lesson_ok" name="japanese_lesson_ok" />
                        <label htmlFor="japanese_lesson_ok">{languageStrings[currentLang].japaneseLessonOk}</label>
                      </div>
                      <div className="hs-selectable-item">
                        <input type="checkbox" id="japanese_email_ok" name="japanese_email_ok" />
                        <label htmlFor="japanese_email_ok">{languageStrings[currentLang].japaneseEmailOk}</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="hs-grid-full">
                    <hr style={{ border: '1px solid var(--medium-gray)', margin: '1rem 0' }} />
                  </div>

                  <div className="hs-form-group">
                    <label htmlFor="lang1">
                      {languageStrings[currentLang].lessonLang1}
                      <span className="hs-required">*</span>
                    </label>
                    <select id="lang1" name="lang1" required>
                      {renderSelectOptions('lessonLangOptions', true)}
                    </select>
                  </div>
                  <div className="hs-form-group">
                    <label htmlFor="is_native1">
                      {languageStrings[currentLang].isNative1}
                      <span className="hs-required">*</span>
                    </label>
                    <select id="is_native1" name="is_native1" required>
                      {renderSelectOptions({ja: {yes: "はい", no: "いいえ"}, en: {yes: "Yes", no: "No"}})}
                    </select>
                  </div>
                  <div className="hs-form-group">
                    <label htmlFor="lang2">{languageStrings[currentLang].lessonLang2}</label>
                    <select id="lang2" name="lang2">
                      {renderSelectOptions('lessonLangOptions', true)}
                    </select>
                  </div>
                  <div className="hs-form-group">
                    <label htmlFor="is_native2">{languageStrings[currentLang].isNative2}</label>
                    <select id="is_native2" name="is_native2">
                      {renderSelectOptions({ja: {none: "-", yes: "はい", no: "いいえ"}, en: {none: "-", yes: "Yes", no: "No"}}, true)}
                    </select>
                  </div>
                  
                  <div className="hs-form-group hs-grid-full">
                    <label htmlFor="teaching_experience">
                      {languageStrings[currentLang].teachingExperience}
                      <span className="hs-required">*</span>
                    </label>
                    <select id="teaching_experience" name="teaching_experience" required>
                      {renderSelectOptions('teachingExperienceOptions')}
                    </select>
                  </div>
                </div>
              </section>

              <section className="hs-form-section">
                <h3 className="hs-form-section-title">{languageStrings[currentLang].s_lessonInfo}</h3>
                <div className="hs-form-group hs-grid-full">
                  <label>
                    {languageStrings[currentLang].lessonTarget}
                    <span className="hs-required">*</span>
                  </label>
                  <div className="hs-selectable-grid">
                    <div className="hs-selectable-item">
                      <input type="checkbox" name="lesson_target" value="adult" id="target_adult" />
                      <label htmlFor="target_adult">{languageStrings[currentLang].targetAdult}</label>
                    </div>
                    <div className="hs-selectable-item">
                      <input type="checkbox" name="lesson_target" value="senior" id="target_senior" />
                      <label htmlFor="target_senior">{languageStrings[currentLang].targetSenior}</label>
                    </div>
                    <div className="hs-selectable-item">
                      <input type="checkbox" name="lesson_target" value="college" id="target_college" />
                      <label htmlFor="target_college">{languageStrings[currentLang].targetCollege}</label>
                    </div>
                    <div className="hs-selectable-item">
                      <input type="checkbox" name="lesson_target" value="high" id="target_high" />
                      <label htmlFor="target_high">{languageStrings[currentLang].targetHigh}</label>
                    </div>
                    <div className="hs-selectable-item">
                      <input type="checkbox" name="lesson_target" value="junior-high" id="target_junior-high" />
                      <label htmlFor="target_junior-high">{languageStrings[currentLang].targetJuniorHigh}</label>
                    </div>
                    <div className="hs-selectable-item">
                      <input type="checkbox" name="lesson_target" value="elementary" id="target_elementary" />
                      <label htmlFor="target_elementary">{languageStrings[currentLang].targetElementary}</label>
                    </div>
                    <div className="hs-selectable-item">
                      <input type="checkbox" name="lesson_target" value="preschooler" id="target_preschooler" />
                      <label htmlFor="target_preschooler">{languageStrings[currentLang].targetPreschooler}</label>
                    </div>
                  </div>
                </div>

                <div className="hs-form-group hs-grid-full">
                  <label>
                    {languageStrings[currentLang].lessonLevel}
                    <span className="hs-required">*</span>
                  </label>
                  <div className="hs-selectable-grid">
                    <div className="hs-selectable-item">
                      <input type="checkbox" name="lesson_level" value="beginner" id="level_beginner" />
                      <label htmlFor="level_beginner">{languageStrings[currentLang].levelBeginner}</label>
                    </div>
                    <div className="hs-selectable-item">
                      <input type="checkbox" name="lesson_level" value="not_sure" id="level_not_sure" />
                      <label htmlFor="level_not_sure">{languageStrings[currentLang].levelNotSure}</label>
                    </div>
                    <div className="hs-selectable-item">
                      <input type="checkbox" name="lesson_level" value="read_write_ok" id="level_read_write_ok" />
                      <label htmlFor="level_read_write_ok">{languageStrings[currentLang].levelReadWrite}</label>
                    </div>
                    <div className="hs-selectable-item">
                      <input type="checkbox" name="lesson_level" value="shy" id="level_shy" />
                      <label htmlFor="level_shy">{languageStrings[currentLang].levelShy}</label>
                    </div>
                    <div className="hs-selectable-item">
                      <input type="checkbox" name="lesson_level" value="returnee" id="level_returnee" />
                      <label htmlFor="level_returnee">{languageStrings[currentLang].levelReturnee}</label>
                    </div>
                    <div className="hs-selectable-item">
                      <input type="checkbox" name="lesson_level" value="specialized_lang" id="level_specialized_lang" />
                      <label htmlFor="level_specialized_lang">{languageStrings[currentLang].levelSpecialized}</label>
                    </div>
                  </div>
                  <div className="hs-selectable-grid" style={{ gridTemplateColumns: '1fr', maxWidth: '220px', marginTop: '1rem' }}>
                    <div className="hs-selectable-item">
                      <input type="checkbox" id="beginner_welcome" name="beginner_welcome" />
                      <label htmlFor="beginner_welcome">{languageStrings[currentLang].beginnerWelcome}</label>
                    </div>
                  </div>
                </div>

                <div className="hs-form-group hs-grid-full">
                  <label>
                    {languageStrings[currentLang].lessonTypesLabel}
                    <span className="hs-required">*</span>
                  </label>
                  <div className="hs-selectable-grid" id="lesson-types-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
                    {renderCheckboxGrid('lessonType')}
                  </div>
                </div>
                <div className="hs-form-group hs-grid-full">
                  <label>{languageStrings[currentLang].testPrepLabel}</label>
                  <div className="hs-selectable-grid" id="test-prep-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
                    {renderCheckboxGrid('testPrep')}
                  </div>
                </div>
                <div className="hs-form-group hs-grid-full">
                  <label>{languageStrings[currentLang].engCertLabel}</label>
                  <div className="hs-selectable-grid" id="eng-cert-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
                    {renderCheckboxGrid('engCert')}
                  </div>
                </div>
              </section>

              <section className="hs-form-section">
                <h3 className="hs-form-section-title">{languageStrings[currentLang].s_lessonFees}</h3>
                <div className="hs-form-grid">
                  <div className="hs-form-group">
                    <label htmlFor="trial_fee">
                      {languageStrings[currentLang].trialFee}
                      <span className="hs-required">*</span>
                    </label>
                    <select id="trial_fee" name="trial_fee" required>
                      {renderSelectOptions('feeOptions', true)}
                    </select>
                  </div>
                  <div className="hs-form-group">
                    <label htmlFor="private_fee">
                      {languageStrings[currentLang].privateFee}
                      <span className="hs-required">*</span>
                    </label>
                    <select id="private_fee" name="private_fee" required>
                      {renderSelectOptions('feeOptions', true)}
                    </select>
                  </div>
                  <div className="hs-form-group">
                    <label htmlFor="group_fee">{languageStrings[currentLang].groupFee}</label>
                    <select id="group_fee" name="group_fee">
                      {renderSelectOptions('feeOptions', true)}
                    </select>
                  </div>
                  <div className="hs-form-group">
                    <label htmlFor="online_fee">{languageStrings[currentLang].onlineFee}</label>
                    <select id="online_fee" name="online_fee">
                      {renderSelectOptions('feeOptions', true)}
                    </select>
                  </div>
                </div>
              </section>
              
              <section className="hs-form-section">
                <h3 className="hs-form-section-title">{languageStrings[currentLang].s_schedule}</h3>
                {renderScheduleDesktop()}
                {renderScheduleMobile()}
              </section>

              <section className="hs-form-section">
                <h3 className="hs-form-section-title">{languageStrings[currentLang].s_lessonLocation}</h3>
                <div className="hs-form-grid">
                  <div className="hs-form-group hs-grid-full">
                    <label>
                      {languageStrings[currentLang].lessonArea}
                      <span className="hs-required">*</span>
                    </label>
                    <div id="selected-areas-display">
                      {renderSelectedAreaTags()}
                    </div>
                    <button 
                      type="button" 
                      className="hs-btn hs-btn-secondary" 
                      style={{ marginTop: '1rem', maxWidth: '200px' }} 
                      id="open-area-modal-btn"
                      onClick={() => setShowAreaModal(true)}
                    >
                      <i className="fa-solid fa-map-location-dot"></i> 
                      <span>{languageStrings[currentLang].selectAreaBtn}</span>
                    </button>
                  </div>

                  <div className="hs-form-group hs-grid-full">
                    <label>{languageStrings[currentLang].lessonStation}</label>
                    <div id="selected-stations-display">
                      {renderSelectedStationTags()}
                    </div>
                    <button 
                      type="button" 
                      className="hs-btn hs-btn-secondary" 
                      style={{ marginTop: '1rem', maxWidth: '250px' }} 
                      id="open-station-modal-btn"
                      onClick={() => setShowStationModal(true)}
                    >
                      <i className="fa-solid fa-train"></i> 
                      <span>{languageStrings[currentLang].selectStationBtn}</span>
                    </button>
                  </div>
                  
                  <div className="hs-form-group hs-grid-full">
                    <label>
                      {languageStrings[currentLang].availableLocations}
                      <span className="hs-required">*</span>
                    </label>
                    <div className="hs-selectable-grid">
                      <div className="hs-selectable-item">
                        <input type="checkbox" id="loc_cafe" name="location_type" value="cafe" />
                        <label htmlFor="loc_cafe">{languageStrings[currentLang].locationCafe}</label>
                      </div>
                      <div className="hs-selectable-item">
                        <input type="checkbox" id="loc_teacher_home" name="location_type" value="teacher_home" />
                        <label htmlFor="loc_teacher_home">{languageStrings[currentLang].locationTeacherHome}</label>
                      </div>
                      <div className="hs-selectable-item">
                        <input type="checkbox" id="loc_student_home" name="location_type" value="student_home" />
                        <label htmlFor="loc_student_home">{languageStrings[currentLang].locationStudentHome}</label>
                      </div>
                      <div className="hs-selectable-item">
                        <input type="checkbox" id="loc_park" name="location_type" value="park" />
                        <label htmlFor="loc_park">{languageStrings[currentLang].locationPark}</label>
                      </div>
                      <div className="hs-selectable-item">
                        <input type="checkbox" id="loc_public" name="location_type" value="public" />
                        <label htmlFor="loc_public">{languageStrings[currentLang].locationPublic}</label>
                      </div>
                    </div>
                  </div>
                  <div className="hs-form-group hs-grid-full">
                    <label htmlFor="landmark">{languageStrings[currentLang].landmark}</label>
                    <input type="text" id="landmark" name="landmark" />
                    <p className="hs-help-text">{languageStrings[currentLang].landmarkHelp}</p>
                  </div>
                  <div className="hs-form-group hs-grid-full">
                    <div className="hs-selectable-item" style={{ maxWidth: '350px' }}>
                      <input type="checkbox" id="station_negotiable" name="station_negotiable" />
                      <label htmlFor="station_negotiable">{languageStrings[currentLang].stationNegotiable}</label>
                    </div>
                  </div>
                </div>
              </section>
              
              <section className="hs-form-section">
                <h3 className="hs-form-section-title">{languageStrings[currentLang].s_selfIntro}</h3>
                <div className="hs-form-grid">
                  <div className="hs-form-group">
                    <label htmlFor="hobbies">{languageStrings[currentLang].hobbies}</label>
                    <input type="text" id="hobbies" name="hobbies" />
                  </div>
                  <div className="hs-form-group">
                    <label htmlFor="movies">{languageStrings[currentLang].movies}</label>
                    <input type="text" id="movies" name="movies" />
                  </div>
                  <div className="hs-form-group">
                    <label htmlFor="music">{languageStrings[currentLang].music}</label>
                    <input type="text" id="music" name="music" />
                  </div>
                  <div className="hs-form-group">
                    <label htmlFor="food">{languageStrings[currentLang].food}</label>
                    <input type="text" id="food" name="food" />
                  </div>
                  <div className="hs-form-group hs-grid-full">
                    <label htmlFor="love_japan">{languageStrings[currentLang].loveJapan}</label>
                    <input type="text" id="love_japan" name="love_japan" />
                  </div>
                  <div className="hs-form-group hs-grid-full">
                    <label htmlFor="message">
                      {languageStrings[currentLang].messageToStudent}
                      <span className="hs-required">*</span>
                    </label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                  </div>
                </div>
              </section>
            </div>

            <div className="hs-form-footer">
              <button type="submit" className="hs-btn hs-btn-primary">
                <i className="fas fa-save"></i> 
                <span>{languageStrings[currentLang].updateProfileBtn}</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {renderAreaModal()}
      {renderStationModal()}
      {renderUpdateModal()}
      {renderDeleteModal()}
      {renderLogoutModal()}

      <style jsx>{`
        :root {
          --primary-color: #6fba2c;
          --primary-color-dark: #5a9d20;
          --secondary-color: #4a90e2;
          --light-gray: #f9fafb;
          --medium-gray: #e5e7eb;
          --dark-gray: #374151;
          --text-color: #111827;
          --white-color: #ffffff;
          --error-color: #ef4444;
          --warning-color: #ffc107;
          --pink-bg-color: #fff0f3;
          --pink-text-color: #d9006c;
          --border-radius-md: 8px;
          --border-radius-lg: 16px;
        }
      
        .hs-container { 
          max-width: 900px; 
          margin: 0 auto; 
          padding: 0 1rem; 
          box-sizing: border-box; 
        }
        h1, h2, h3, h4 { 
          color: var(--text-color); 
          font-weight: 700; 
          margin-top: 0; 
        }
        
        .hs-header {
          background-color: var(--white-color);
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--medium-gray);
          flex-wrap: wrap;
          gap: 1rem;
        }
        .hs-header .logo { 
          font-size: 1.5rem; 
          font-weight: 700; 
          color: var(--primary-color); 
          text-decoration: none; 
        }
        .hs-header-nav { 
          display: flex; 
          align-items: center; 
          gap: 1.5rem; 
          margin-left: auto; 
        }
        .lang-switcher { 
          display: flex; 
          gap: 0.5rem; 
        }
        .lang-switcher button { 
          background: none; 
          border: 2px solid var(--medium-gray); 
          color: #9ca3af; 
          padding: 0.4rem 0.8rem; 
          border-radius: var(--border-radius-md); 
          cursor: pointer; 
          transition: all 0.3s ease; 
          font-weight: 600; 
        }
        .lang-switcher button.active { 
          border-color: var(--primary-color); 
          background-color: var(--primary-color); 
          color: var(--white-color); 
        }
        .hs-logout-btn {
          background: none;
          border: 1px solid var(--medium-gray);
          color: var(--dark-gray);
          padding: 0.4rem 0.8rem;
          border-radius: var(--border-radius-md);
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        .hs-logout-btn:hover { 
          background-color: var(--medium-gray); 
        }

        .hs-main-content { 
          background-color: var(--white-color); 
          padding: 1.5rem; 
          margin: 1rem 0 8rem 0; 
          border-radius: var(--border-radius-lg); 
          box-shadow: 0 4px 6px rgba(0,0,0,0.05); 
        }
        @media (min-width: 640px) {
          .hs-main-content { 
            padding: 2.5rem;  
            margin-bottom: 10rem;
          }
        }
        .page-title { 
          font-size: 2rem; 
          margin-bottom: 1.5rem; 
        }

        .update-notification-box {
          background-color: var(--pink-bg-color);
          border: 1px solid var(--pink-text-color);
          color: var(--pink-text-color);
          padding: 1rem 1.5rem;
          border-radius: var(--border-radius-md);
          margin-bottom: 2rem;
        }
        .update-notification-box .title { 
          font-weight: 700; 
          font-size: 1.2rem; 
          margin-bottom: 0.5rem; 
        }
        .update-notification-box .title i { 
          margin-right: 0.5rem; 
        }
        .update-notification-box p { 
          margin: 0; 
          font-size: 0.9rem; 
        }
        .update-notification-box strong { 
          color: #b9005a; 
        }

        .hs-tabs { 
          display: flex; 
          border-bottom: 2px solid var(--medium-gray); 
          margin-bottom: 2rem; 
          flex-wrap: wrap;
        }
        .hs-tab-btn {
          padding: 0.8rem 1.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          border: none;
          background: none;
          cursor: pointer;
          color: #6b7280;
          position: relative;
          bottom: -2px;
          border-bottom: 2px solid transparent;
          text-align: center;
        }
        .hs-tab-btn.active { 
          color: var(--primary-color); 
          border-bottom-color: var(--primary-color); 
        }
        .hs-tab-content { 
          display: none; 
          animation: fadeIn 0.5s ease-in-out; 
        }
        .hs-tab-content.active { 
          display: block; 
        }
        @keyframes fadeIn { 
          from { 
            opacity: 0; 
            transform: translateY(10px); 
          } 
          to { 
            opacity: 1; 
            transform: translateY(0); 
          } 
        }

        .hs-form-section { 
          margin-bottom: 2.5rem; 
          border: 1px solid var(--medium-gray); 
          padding: 1.5rem; 
          border-radius: var(--border-radius-md); 
        }
        .hs-form-section-title { 
          font-size: 1.25rem; 
          font-weight: 600; 
          padding-bottom: 0.5rem; 
          border-bottom: 2px solid var(--primary-color); 
          margin-bottom: 1.5rem; 
        }
        .hs-form-grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
          gap: 1.5rem; 
        }
        .hs-grid-full { 
          grid-column: 1 / -1; 
        }
        .hs-form-group { 
          display: flex; 
          flex-direction: column; 
        }
        .hs-form-group label { 
          font-weight: 500; 
          margin-bottom: 0.5rem; 
        }
        .hs-form-group label .hs-required { 
          color: var(--error-color); 
          margin-left: 4px; 
        }
        .hs-form-group input, 
        .hs-form-group select, 
        .hs-form-group textarea { 
          width: 100%; 
          padding: 10px 14px; 
          border-radius: var(--border-radius-md); 
          border: 1px solid #d1d5db; 
          background-color: var(--white-color); 
          font-size: 1rem; 
          box-sizing: border-box; 
          transition: border-color 0.3s, box-shadow 0.3s; 
        }
        .hs-form-group input:focus, 
        .hs-form-group select:focus, 
        .hs-form-group textarea:focus { 
          outline: none; 
          border-color: var(--primary-color); 
          box-shadow: 0 0 0 3px rgba(111, 186, 44, 0.3); 
        }
        .hs-help-text { 
          font-size: 0.875rem; 
          color: #6b7280; 
          margin-top: 0.5rem; 
          white-space: pre-wrap; 
        }

        .status-toggle-section {
          background-color: #f3f4f6;
          padding: 1.5rem;
          border-radius: var(--border-radius-md);
          margin-bottom: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .status-toggle-section .title { 
          font-weight: 600; 
          font-size: 1.1rem; 
        }
        .toggle-switch { 
          display: flex; 
          align-items: center; 
          gap: 0.75rem; 
        }
        .toggle-switch input { 
          height: 0; 
          width: 0; 
          visibility: hidden; 
        }
        .toggle-switch label {
          cursor: pointer;
          width: 50px;
          height: 28px;
          background: var(--medium-gray);
          display: block;
          border-radius: 100px;
          position: relative;
        }
        .toggle-switch label:after {
          content: '';
          position: absolute;
          top: 3px;
          left: 3px;
          width: 22px;
          height: 22px;
          background: var(--white-color);
          border-radius: 90px;
          transition: 0.3s;
        }
        .toggle-switch input:checked + label { 
          background: var(--primary-color); 
        }
        .toggle-switch input:checked + label:after { 
          left: calc(100% - 3px); 
          transform: translateX(-100%); 
        }
        .toggle-switch .status-text { 
          font-weight: 600; 
          font-size: 1rem; 
        }

        .hs-selectable-grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); 
          gap: 1rem; 
        }
        .hs-selectable-item { 
          position: relative; 
        }
        .hs-selectable-item input[type="checkbox"], 
        .hs-selectable-item input[type="radio"] { 
          opacity: 0; 
          position: absolute; 
          width: 100%; 
          height: 100%; 
          cursor: pointer; 
          top: 0; 
          left: 0; 
          margin: 0; 
        }
        .hs-selectable-item label { 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          width: 100%; 
          min-height: 50px; 
          padding: 0.75rem; 
          border: 2px solid var(--medium-gray); 
          border-radius: var(--border-radius-md); 
          text-align: center; 
          transition: all 0.2s ease-in-out; 
          font-weight: 500; 
          box-sizing: border-box; 
          line-height: 1.3; 
        }
        .hs-selectable-item input[type="checkbox"]:checked + label, 
        .hs-selectable-item input[type="radio"]:checked + label { 
          border-color: var(--primary-color); 
          background-color: #f0f9eb; 
          color: var(--primary-color-dark); 
        }
        
        /* Schedule Styles Start */
        .schedule-wrapper { 
          display: flex; 
          flex-direction: column; 
          gap: 1rem; 
        }
        .schedule-day { 
          border: 1px solid var(--medium-gray); 
          border-radius: var(--border-radius-md); 
          overflow: hidden; 
        }
        .schedule-day-header { 
          background-color: var(--light-gray); 
          padding: 0.75rem 1rem; 
          font-weight: 600; 
          border-bottom: 1px solid var(--medium-gray); 
        }
        .schedule-slot { 
          display: flex; 
          justify-content: space-between; 
          align-items: center; 
          padding: 0.75rem 1rem; 
          border-bottom: 1px solid #f3f4f6; 
        }
        .schedule-slot:last-child { 
          border-bottom: none; 
        }
        .schedule-slot-label { 
          font-weight: 500; 
          color: var(--dark-gray); 
        }
        .schedule-matrix { 
          display: none; 
        } 
        .checkbox-container { 
          position: relative; 
          width: 22px; 
          height: 22px; 
        }
        .checkbox-container input[type="checkbox"] { 
          opacity: 0; 
          position: absolute; 
          width: 100%; 
          height: 100%; 
          cursor: pointer; 
        }
        .checkbox-container .checkbox-custom { 
          display: block; 
          width: 100%; 
          height: 100%; 
          border: 2px solid var(--medium-gray); 
          border-radius: 4px; 
          transition: all 0.2s ease; 
          box-sizing: border-box; 
        }
        .checkbox-container input[type="checkbox"]:checked + .checkbox-custom { 
          background-color: var(--primary-color); 
          border-color: var(--primary-color); 
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e"); 
          background-repeat: no-repeat; 
          background-position: center; 
          background-size: 50%; 
        }

        @media (min-width: 768px) {
          .schedule-wrapper { 
            display: none; 
          }
          .schedule-matrix {
            display: grid;
            grid-template-columns: max-content repeat(7, 1fr);
            gap: 0.5rem;
            font-size: 0.9rem;
            align-items: center;
          }
          .schedule-matrix .header { 
            font-weight: 600; 
            text-align: center; 
            padding-bottom: 0.5rem; 
          }
          .schedule-matrix .time-label { 
            grid-column: 1 / 2; 
            text-align: right; 
            padding-right: 1rem; 
            font-weight: 600; 
            white-space: nowrap; 
          }
          .checkbox-container { 
            margin: auto; 
          }
        }
        /* Schedule Styles End */

        .hs-form-footer {
          position: sticky;
          bottom: 0;
          background-color: rgba(255, 255, 255, 0.98);
          padding: 1rem;
          border-top: 1px solid var(--medium-gray);
          box-shadow: 0 -4px 10px rgba(0,0,0,0.05);
          display: flex;
          justify-content: flex-end;
          align-items: center;
          z-index: 10;
          margin: 2rem -1.5rem -1.5rem;
          border-bottom-left-radius: var(--border-radius-lg);
          border-bottom-right-radius: var(--border-radius-lg);
        }
        @media (min-width: 640px) {
          .hs-form-footer {
            margin: 2.5rem -2.5rem -2.5rem;
            padding: 1.5rem 2.5rem;
          }
        }
        .hs-btn { 
          display: inline-flex; 
          align-items: center; 
          justify-content: center; 
          gap: 0.5rem; 
          font-weight: 600; 
          font-size: 1rem; 
          padding: 12px 28px; 
          border-radius: var(--border-radius-md); 
          text-decoration: none; 
          border: none; 
          cursor: pointer; 
          transition: all 0.3s ease; 
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
        }
        .hs-btn-primary { 
          background-color: var(--primary-color); 
          color: var(--white-color); 
        }
        .hs-btn-primary:hover { 
          background-color: var(--primary-color-dark); 
          transform: translateY(-2px); 
        }
        .hs-btn-secondary { 
          background-color: var(--medium-gray); 
          color: var(--dark-gray); 
        }
        .hs-btn-secondary:hover { 
          background-color: #d1d5db; 
        }
        .hs-btn-danger { 
          background-color: transparent; 
          color: var(--error-color); 
          border: 2px solid var(--error-color); 
        }
        .hs-btn-danger:hover { 
          background-color: var(--error-color); 
          color: var(--white-color); 
        }

        .modal-overlay { 
          position: fixed; 
          top: 0; 
          left: 0; 
          width: 100%; 
          height: 100%; 
          background-color: rgba(0,0,0,0.6); 
          display: none; 
          justify-content: center; 
          align-items: center; 
          z-index: 1000; 
          opacity: 0; 
          transition: opacity 0.3s ease; 
        }
        .modal-overlay.active { 
          display: flex; 
          opacity: 1; 
        }
        .modal-content { 
          background: var(--white-color); 
          width: 90%; 
          max-width: 500px; 
          border-radius: var(--border-radius-lg); 
          display: flex; 
          flex-direction: column; 
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); 
          transform: scale(0.95); 
          transition: transform 0.3s ease;
        }
        .modal-overlay.active .modal-content { 
          transform: scale(1); 
        }
        .modal-header { 
          padding: 1rem 1.5rem; 
          border-bottom: 1px solid var(--medium-gray); 
          display: flex; 
          justify-content: space-between; 
          align-items: center;
        }
        .modal-header h3 { 
          margin: 0; 
          font-size: 1.25rem; 
        }
        .modal-close { 
          background: none; 
          border: none; 
          font-size: 1.5rem; 
          cursor: pointer; 
          color: var(--dark-gray); 
        }
        .modal-body { 
          padding: 1.5rem; 
          flex-grow: 1; 
          overflow-y: auto; 
          max-height: 70vh; 
        }
        .modal-footer { 
          padding: 1rem 1.5rem; 
          border-top: 1px solid var(--medium-gray); 
          text-align: right; 
          background-color: #f9fafb; 
          border-bottom-left-radius: var(--border-radius-lg); 
          border-bottom-right-radius: var(--border-radius-lg); 
          display: flex; 
          justify-content: flex-end; 
          gap: 0.75rem;
        }
        
        #area-modal .modal-content { 
          max-width: 800px; 
        }
        #area-modal .modal-body { 
          display: grid; 
          grid-template-columns: 200px 1fr; 
          padding: 0; 
          max-height: 60vh;
        }
        .area-column { 
          overflow-y: auto; 
          padding: 1rem; 
        }
        .area-column-prefectures { 
          border-right: 1px solid var(--medium-gray); 
          background-color: var(--light-gray); 
        }
        #selected-areas-display, 
        #selected-stations-display { 
          display: flex; 
          flex-wrap: wrap; 
          gap: 0.5rem; 
          padding: 0.5rem; 
          border: 1px solid var(--medium-gray); 
          border-radius: var(--border-radius-md); 
          min-height: 40px; 
          margin-top: 1rem; 
          background-color: var(--light-gray); 
        }
        .area-tag, 
        .station-tag { 
          background-color: var(--primary-color); 
          color: white; 
          padding: 0.25rem 0.75rem; 
          border-radius: var(--border-radius-md); 
          font-size: 0.875rem; 
          display: inline-flex; 
          align-items: center; 
          gap: 0.5rem; 
        }
        .area-tag button, 
        .station-tag button { 
          background: none; 
          border: none; 
          color: white; 
          font-size: 1rem; 
          cursor: pointer; 
          padding: 0; 
          line-height: 1; 
          opacity: 0.7; 
        }
        .area-tag button:hover, 
        .station-tag button:hover { 
          opacity: 1; 
        }
        .area-prefecture-list, 
        .area-city-list { 
          list-style-type: none; 
          padding: 0; 
          margin: 0; 
        }
        .area-prefecture-list li button { 
          width: 100%; 
          text-align: left; 
          padding: 0.75rem 1rem; 
          border: none; 
          background: none; 
          cursor: pointer; 
          border-radius: var(--border-radius-md); 
          font-weight: 500;
        }
        .area-prefecture-list li button:hover { 
          background-color: #f0f9eb; 
        }
        .area-prefecture-list li button.selected { 
          background-color: var(--primary-color); 
          color: var(--white-color); 
        }
        .area-city-grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); 
          gap: 1rem; 
        }
        
        #station-modal .modal-content { 
          max-width: 1200px; 
        }
        #station-modal .modal-body { 
          display: grid; 
          grid-template-columns: 150px 200px 250px 1fr; 
          padding: 0; 
          max-height: 70vh;
        }
        .station-column { 
          overflow-y: auto; 
          padding: 1rem; 
          border-right: 1px solid var(--medium-gray); 
        }
        .station-column:last-child { 
          border-right: none; 
        }
        .station-column h4 { 
          font-size: 1rem; 
          font-weight: 600; 
          margin-bottom: 1rem; 
          padding-bottom: 0.5rem; 
          border-bottom: 1px solid var(--medium-gray); 
          position: sticky; 
          top: -1rem; 
          background: var(--white-color); 
          padding-top: 1rem; 
          z-index: 1; 
        }
        .station-list { 
          list-style: none; 
          padding: 0; 
          margin: 0; 
        }
        .station-list li button { 
          width: 100%; 
          text-align: left; 
          padding: 0.6rem 0.8rem; 
          border: none; 
          background: none; 
          cursor: pointer; 
          border-radius: var(--border-radius-md); 
          font-weight: 500; 
          font-size: 0.9rem;
        }
        .station-list li button:hover { 
          background-color: #f3f4f6; 
        }
        .station-list li button.selected { 
          background-color: var(--primary-color); 
          color: white; 
        }
        .station-checkbox-grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); 
          gap: 1rem; 
        }

        @media (max-width: 900px) { 
          #station-modal .modal-body { 
            grid-template-columns: 1fr 1fr; 
          }
          #station-modal .station-column:nth-of-type(2n) {
            border-right: none;
          }
          #station-modal .station-column:nth-of-type(n+3) {
            border-top: 1px solid var(--medium-gray);
          }
        }

        @media (max-width: 640px) { 
          #area-modal .modal-body, 
          #station-modal .modal-body { 
                grid-template-columns: 1fr; 
            }
            
            #station-modal .station-column:nth-of-type(n+3) {
                border-top: none;
            }

            #area-modal .area-column-prefectures, #station-modal .station-column {
                border-right: none !important;
                border-bottom: 1px solid var(--medium-gray);
                max-height: 28vh;
            }

            #station-modal .station-column:last-child, #area-modal .area-column:last-child {
                border-bottom: none;
            }
        }
      `}</style>
    </>
  );
};

export default TeacherProfileEdit;