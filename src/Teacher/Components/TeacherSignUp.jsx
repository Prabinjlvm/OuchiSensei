import React, { useState, useEffect } from 'react';
import { createTeacher, teacherAdditionalDetails } from '../../APIs/POST';
import countries from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';
import jaLocale from 'i18n-iso-countries/langs/ja.json';
import { getAllMuncipalities, getAllPrefectures } from '../../APIs/GET';

countries.registerLocale(enLocale);
countries.registerLocale(jaLocale);

const getCountryList = (lang) => {
  try {
    const countryObj = countries.getNames(lang, { select: 'official' });
    // Check if countryObj is valid
    if (countryObj && typeof countryObj === 'object') {
      // Convert to array of { code, name }
      return Object.entries(countryObj).map(([code, name]) => ({ code, name }));
    } else {
      console.error('countries.getNames returned invalid data:', countryObj);
      return [];
    }
  } catch (error) {
    console.error('Error in getCountryList:', error);
    return [];
  }
};

const TeacherRegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentLang, setCurrentLang] = useState('en');
  const [selectedAreas, setSelectedAreas] = useState({});
  const [selectedStations, setSelectedStations] = useState({});
  const [selectedPrefecture, setSelectedPrefecture] = useState('');
  const [prefectureList, setPrefectureList] = useState([]);
  const [municipalityList, setMunicipalityList] = useState([]);
  
  // Fetch prefectures on component mount
  const fetchPrefectures = async () => {
    try {
      const data = await getAllPrefectures();
      setPrefectureList(data.prefectures);
    } catch (error) {
      console.error("Failed to fetch prefectures:", error);
    }
  };

  // Fetch municipalities based on selected prefecture
  const fetchMunicipalities = async () => {
    try {
      const data = await getAllMuncipalities();
      setMunicipalityList(data.municipalities);
    } catch (error) {
      console.error("Failed to fetch municipalities:", error);
    }
  };

  useEffect(() => {
    fetchPrefectures();
    fetchMunicipalities();
  }, []);

  //To filter municipalities based on selected prefecture
  const getFilteredMunicipalities = () => {
    if (!formData.prefecture) return [];
    const selectedPrefectureCode = formData.prefecture.toString().padStart(2, '0');
    return municipalityList.filter((municipality) =>
      municipality.prefecture_code.startsWith(selectedPrefectureCode)
    );
  };


  const [formData, setFormData] = useState({
    teacher_id: '',
    email: '',
    dob: '',
    sex: '',
    nationality: '',
    native_language: '',
    Japan_departure: '',
    mobile_number_public_status: false,
    secondary_email: '',
    email_address_public_status: false,
    education: '',
    major: '',
    education_level: '',
    major: '',
    institution_name: '',
    occupation: '',
    current_occupation: '',
    industry: '',
    occupation_detail: '',
    Japanese_language_skills: '',
    Japan_live_ymd: '',
    lesson_available_in_japan: false,
    email_communication_in_japan: false,
    lesson_language_1: '',
    lesson_language_1_native: '',
    lesson_language_2: '',
    lesson_language_2_native: '',
    lesson_language_3: '',
    lesson_language_3_native: '',
    teaching_experience: '',
    trial_lesson_fee: '',
    one_on_one_lesson_fee: '',
    group_lesson_fee: '',
    available_lesson_time: '',
    eligible_students: '',
    target_level: '',
    beginner_welcome: false,
    teach_content: '',
    experience_in_preparation_english_exam: '',
    English_teaching_qualification: '',
    available_lesson_kanto_area :'',
    available_lesson_kansai_area: '',
    landmark_desired_location: '',
    intention_to_discuss_location:'',
    lesson_location: '', 
    online_lesson:'',
    online_lesson_fees: '',
    hobby_interest: '',
    favorite_movie: '',
    favorite_music: '',
    favorite_food: '',
    like_about_japan: '',
    message_to_students: '',
    terms_and_conditions: '',
    data_deletion_request: '',
    disclosure_period: '',
    profile_photo: '',
   
  });
  console.log("formData from step1", formData);
  const totalSteps = 6;

  const allPrefectures = {
    hokkaido: { ja: "北海道", en: "Hokkaido" }, aomori: { ja: "青森県", en: "Aomori" }, iwate: { ja: "岩手県", en: "Iwate" }, miyagi: { ja: "宮城県", en: "Miyagi" }, akita: { ja: "秋田県", en: "Akita" }, yamagata: { ja: "山形県", en: "Yamagata" }, fukushima: { ja: "福島県", en: "Fukushima" }, ibaraki: { ja: "茨城県", en: "Ibaraki" }, tochigi: { ja: "栃木県", en: "Tochigi" }, gunma: { ja: "群馬県", en: "Gunma" }, saitama: { ja: "埼玉県", en: "Saitama" }, chiba: { ja: "千葉県", en: "Chiba" }, tokyo: { ja: "東京都", en: "Tokyo" }, kanagawa: { ja: "神奈川県", en: "Kanagawa" }, niigata: { ja: "新潟県", en: "Niigata" }, toyama: { ja: "富山県", en: "Toyama" }, ishikawa: { ja: "石川県", en: "Ishikawa" }, fukui: { ja: "福井県", en: "Fukui" }, yamanashi: { ja: "山梨県", en: "Yamanashi" }, nagano: { ja: "長野県", en: "Nagano" }, gifu: { ja: "岐阜県", en: "Gifu" }, shizuoka: { ja: "静岡県", en: "Shizuoka" }, aichi: { ja: "愛知県", en: "Aichi" }, mie: { ja: "三重県", en: "Mie" }, shiga: { ja: "滋賀県", en: "Shiga" }, kyoto: { ja: "京都府", en: "Kyoto" }, osaka: { ja: "大阪府", en: "Osaka" }, hyogo: { ja: "兵庫県", en: "Hyogo" }, nara: { ja: "奈良県", en: "Nara" }, wakayama: { ja: "和歌山県", en: "Wakayama" }, tottori: { ja: "鳥取県", en: "Tottori" }, shimane: { ja: "島根県", en: "Shimane" }, okayama: { ja: "岡山県", en: "Okayama" }, hiroshima: { ja: "広島県", en: "Hiroshima" }, yamaguchi: { ja: "山口県", en: "Yamaguchi" }, tokushima: { ja: "徳島県", en: "Tokushima" }, kagawa: { ja: "香川県", en: "Kagawa" }, ehime: { ja: "愛媛県", en: "Ehime" }, kochi: { ja: "高知県", en: "Kochi" }, fukuoka: { ja: "福岡県", en: "Fukuoka" }, saga: { ja: "佐賀県", en: "Saga" }, nagasaki: { ja: "長崎県", en: "Nagasaki" }, kumamoto: { ja: "熊本県", en: "Kumamoto" }, oita: { ja: "大分県", en: "Oita" }, miyazaki: { ja: "宮崎県", en: "Miyazaki" }, kagoshima: { ja: "鹿児島県", en: "Kagoshima" }, okinawa: { ja: "沖縄県", en: "Okinawa" }
  };

  const cityData = {
    hokkaido: { ja: ["札幌市", "函館市", "小樽市", "旭川市"], en: ["Sapporo", "Hakodate", "Otaru", "Asahikawa"] },
    tokyo: { ja: ["千代田区", "中央区", "港区", "新宿区", "文京区", "台東区", "墨田区", "江東区", "品川区", "目黒区", "大田区", "世田谷区", "渋谷区", "中野区", "杉並区", "豊島区", "北区", "荒川区", "板橋区", "練馬区", "足立区", "葛飾区", "江戸川区", "八王子市", "立川市", "武蔵野市", "三鷹市", "青梅市", "府中市", "昭島市", "調布市", "町田市", "小金井市", "小平市", "日野市", "東村山市", "国分寺市", "国立市", "福生市", "狛江市", "東大和市", "清瀬市", "東久留米市", "武蔵村山市", "多摩市", "稲城市", "羽村市", "あきる野市", "西東京市"], en: ["Chiyoda", "Chuo", "Minato", "Shinjuku", "Bunkyo", "Taito", "Sumida", "Koto", "Shinagawa", "Meguro", "Ota", "Setagaya", "Shibuya", "Nakano", "Suginami", "Toshima", "Kita", "Arakawa", "Itabashi", "Nerima", "Adachi", "Katsushika", "Edogawa", "Hachioji", "Tachikawa", "Musashino", "Mitaka", "Ome", "Fuchu", "Akishima", "Chofu", "Machida", "Koganei", "Kodaira", "Hino", "Higashimurayama", "Kokubunji", "Kunitachi", "Fussa", "Komae", "Higashiyamato", "Kiyose", "Higashikurume", "Musashimurayama", "Tama", "Inagi", "Hamura", "Akiruno", "Nishitokyo"] },
    kanagawa: { ja: ["横浜市", "川崎市", "相模原市", "横須賀市", "平塚市"], en: ["Yokohama", "Kawasaki", "Sagamihara", "Yokosuka", "Hiratsuka"] },
    aichi: { ja: ["名古屋市", "豊橋市", "岡崎市", "一宮市", "瀬戸市"], en: ["Nagoya", "Toyohashi", "Okazaki", "Ichinomiya", "Seto"] },
    osaka: { ja: ["大阪市", "堺市", "岸和田市", "豊中市", "池田市"], en: ["Osaka", "Sakai", "Kishiwada", "Toyonaka", "Ikeda"] },
    fukuoka: { ja: ["北九州市", "福岡市", "大牟田市", "久留米市", "直方市"], en: ["Kitakyushu", "Fukuoka", "Omuta", "Kurume", "Nogata"] }
  };

  const stationData = {
    kanto: {
      ja: "関東", en: "Kanto",
      prefectures: {
        tokyo: {
          ja: "東京都", en: "Tokyo",
          lines: {
            yamanote: { ja: "JR山手線", en: "JR Yamanote Line", stations: [{ ja: "東京", en: "Tokyo" }, { ja: "神田", en: "Kanda" }, { ja: "秋葉原", en: "Akihabara" }, { ja: "御徒町", en: "Okachimachi" }, { ja: "上野", en: "Ueno" }, { ja: "鶯谷", en: "Uguisudani" }, { ja: "日暮里", en: "Nippori" }, { ja: "西日暮里", en: "Nishi-Nippori" }, { ja: "田端", en: "Tabata" }, { ja: "駒込", en: "Komagome" }, { ja: "巣鴨", en: "Sugamo" }, { ja: "大塚", en: "Otsuka" }, { ja: "池袋", en: "Ikebukuro" }, { ja: "目白", en: "Mejiro" }, { ja: "高田馬場", en: "Takadanobaba" }, { ja: "新大久保", en: "Shin-Okubo" }, { ja: "新宿", en: "Shinjuku" }, { ja: "代々木", en: "Yoyogi" }, { ja: "原宿", en: "Harajuku" }, { ja: "渋谷", en: "Shibuya" }, { ja: "恵比寿", en: "Ebisu" }, { ja: "目黒", en: "Meguro" }, { ja: "五反田", en: "Gotanda" }, { ja: "大崎", en: "Osaki" }, { ja: "品川", en: "Shinagawa" }, { ja: "高輪ゲートウェイ", en: "Takanawa Gateway" }, { ja: "田町", en: "Tamachi" }, { ja: "浜松町", en: "Hamamatsucho" }, { ja: "新橋", en: "Shimbashi" }, { ja: "有楽町", en: "Yurakucho" }] },
            chuo: { ja: "JR中央線", en: "JR Chuo Line", stations: [{ ja: "東京", en: "Tokyo" }, { ja: "神田", en: "Kanda" }, { ja: "御茶ノ水", en: "Ochanomizu" }, { ja: "水道橋", en: "Suidobashi" }, { ja: "飯田橋", en: "Iidabashi" }, { ja: "市ケ谷", en: "Ichigaya" }, { ja: "四ツ谷", en: "Yotsuya" }, { ja: "信濃町", en: "Shinanomachi" }, { ja: "千駄ケ谷", en: "Sendagaya" }, { ja: "代々木", en: "Yoyogi" }, { ja: "新宿", en: "Shinjuku" }, { ja: "大久保", en: "Okubo" }, { ja: "東中野", en: "Higashi-Nakano" }, { ja: "中野", en: "Nakano" }, { ja: "高円寺", en: "Koenji" }, { ja: "阿佐ケ谷", en: "Asagaya" }, { ja: "荻窪", en: "Ogikubo" }, { ja: "西荻窪", en: "Nishi-Ogikubo" }, { ja: "吉祥寺", en: "Kichijoji" }, { ja: "三鷹", en: "Mitaka" }, { ja: "武蔵境", en: "Musashi-Sakai" }, { ja: "東小金井", en: "Higashi-Koganei" }, { ja: "武蔵小金井", en: "Musashi-Koganei" }] },
            keihin: { ja: "JR京浜東北線", en: "JR Keihin-Tohoku Line", stations: [{ ja: "品川", en: "Shinagawa" }, { ja: "大井町", en: "Oimachi" }, { ja: "大森", en: "Omori" }, { ja: "蒲田", en: "Kamata" }] }
          }
        },
        kanagawa: {
          ja: "神奈川県", en: "Kanagawa",
          lines: {
            keihin: { ja: "JR京浜東北線", en: "JR Keihin-Tohoku Line", stations: [{ ja: "川崎", en: "Kawasaki" }, { ja: "鶴見", en: "Tsurumi" }, { ja: "新子安", en: "Shin-Koyasu" }, { ja: "東神奈川", en: "Higashi-Kanagawa" }, { ja: "横浜", en: "Yokohama" }] },
            tokyu: { ja: "東急東横線", en: "Tokyu Toyoko Line", stations: [{ ja: "横浜", en: "Yokohama" }, { ja: "反町", en: "Tammachi" }, { ja: "東白楽", en: "Higashi-Hakuraku" }, { ja: "白楽", en: "Hakuraku" }, { ja: "妙蓮寺", en: "Myorenji" }, { ja: "菊名", en: "Kikuna" }, { ja: "大倉山", en: "Okurayama" }, { ja: "綱島", en: "Tsunashima" }, { ja: "日吉", en: "Hiyoshi" }, { ja: "元住吉", en: "Motosumiyoshi" }, { ja: "武蔵小杉", en: "Musashi-Kosugi" }, { ja: "新丸子", en: "Shin-Maruko" }, { ja: "多摩川", en: "Tamagawa" }] }
          }
        }
      }
    },
    kansai: {
      ja: "関西", en: "Kansai",
      prefectures: {
        osaka: {
          ja: "大阪府", en: "Osaka",
          lines: {
            osaka_loop: { ja: "JR大阪環状線", en: "JR Osaka Loop Line", stations: [{ ja: "大阪", en: "Osaka" }, { ja: "天満", en: "Temma" }, { ja: "桜ノ宮", en: "Sakuranomiya" }, { ja: "京橋", en: "Kyobashi" }, { ja: "大阪城公園", en: "Osakajokoen" }, { ja: "森ノ宮", en: "Morinomiya" }, { ja: "玉造", en: "Tamatsukuri" }, { ja: "鶴橋", en: "Tsuruhashi" }, { ja: "桃谷", en: "Momodani" }, { ja: "寺田町", en: "Teradacho" }, { ja: "天王寺", en: "Tennoji" }] }
          }
        }
      }
    }
  };

  const languageStrings = {
    ja: {
      pageTitle: "先生・講師 新規登録 | D.Info",
      step1: "アカウント", step2: "基本情報", step3: "経歴・スキル", step4: "レッスン設定", step5: "場所・その他", step6: "最終確認",
      stepDetails: [
        { title: "Step 1: アカウント情報", subtitle: "まずは基本となるアカウントと連絡先を登録します。" },
        { title: "Step 2: 基本情報", subtitle: "あなた自身について教えてください。本人確認もこのステップで行います。" },
        { title: "Step 3: 経歴・スキル", subtitle: "学歴や職歴、プロフィール写真を設定して信頼性を高めましょう。" },
        { title: "Step 4: レッスン言語と指導スキル", subtitle: "あなたの言語能力と、どのようなレッスンが得意かを選択します。" },
        { title: "Step 5: レッスン設定", subtitle: "料金やスケジュール、レッスンの場所などを具体的に設定します。" },
        { title: "Step 6: プロフィールと最終確認", subtitle: "最後に自己紹介を充実させ、利用規約に同意して登録を完了します。" }
      ],
      s1_title1: "アカウント情報", email: "メールアドレス", password: "パスワード", passwordConfirm: "パスワード (確認)",
      s1_title2: "連絡先情報", firstName: "名 (First Name)", lastName: "姓 (Last Name)", prefecture: "都道府県", city: "市区町村", address: "それ以降の住所", phone: "携帯電話番号", phoneHelp: "認証にのみ使用します。生徒には公開されません。",
      s2_title1: "基本情報", dob: "生年月日", gender: "性別", genderMale: "男性", genderFemale: "女性", genderOther: "その他", nationality: "国籍", nativeLang: "母国語", departureDate: "日本からの出国予定日",
      s2_title2: "本人確認", idHelp: "安全なプラットフォーム維持のため、公的な身分証明書の提出をお願いしております。アップロードされた画像は本人確認の目的にのみ使用され、生徒に公開されることはありません。", idFront: "本人確認画像 (表面)", idBack: "本人確認画像 (裏面)",
      s3_title1: "連絡先と公開設定", email2: "第2メールアドレス", sharePhone: "登録した携帯電話番号を生徒に知らせますか", shareEmail2: "このメールアドレスを生徒に知らせますか",
      s3_title2: "プロフィール写真", profilePhoto: "新しいファイルを追加", photoHelp: "親しみやすい笑顔の写真は、生徒からの印象を良くします。",
      s3_title3: "学歴と職歴", educationLevel: "学歴", major: "専攻", institutionName: "教育機関の名称", occupation: "現在の職業", industry: "業種", occupationDetail: "職業詳細",
      s4_title1: "語学力と指導経験", japaneseSkill: "日本語スキル", yearsInJapan: "日本にはどのくらい住んでいますか？", japaneseLessonOk: "日本語でのレッスンが可能", japaneseEmailOk: "日本語でのメール連絡が可能", lessonLang1: "レッスン言語1", isNative1: "それはあなたの母語ですか？", lessonLang2: "レッスン言語2", isNative2: "それはあなたの母語ですか？", teachingExperience: "指導経験",
      s4_title2: "レッスン情報", lessonTarget: "対象者", targetAdult: "社会人", targetSenior: "高齢者", targetCollege: "大学生", targetHigh: "高校生", targetJuniorHigh: "中学生", targetElementary: "小学生", targetPreschooler: "未就学児(4歳以上)",
      lessonLevel: "対象レベル", levelBeginner: "初級者", levelNotSure: "まだレベルか分からない方", levelReadWrite: "読み書きはできるけど会話が苦手な人", levelShy: "恥ずかしがりやの人", levelReturnee: "語学留学・ワーホリ経験者・帰国子女", levelSpecialized: "専門分野での語学", beginnerWelcome: "初心者歓迎！",
      lessonTypesLabel: "得意なレッスン内容 (8つまで選択)",
      lessonTypeConversation: "日常会話", lessonTypeFreeTalk: "フリートーク", lessonTypeTravel: "旅行用会話", lessonTypeCrossCulture: "異文化についての会話", lessonTypeBusiness: "ビジネス会話", lessonTypePronunciation: "発音矯正", lessonTypeSlang: "スラングやイディオム", lessonTypeRoleplay: "ロールプレイ", lessonTypeMedia: "映画や音楽など", lessonTypeNews: "ニュース", lessonTypeExamPrep: "入試対策", lessonTypeHomework: "宿題の手伝い", lessonTypeKids: "キッズ会話", lessonTypeOriginalMaterials: "先生独自の教材", lessonTypeSpecialized: "専門分野での語学", lessonTypeLangTest: "語学検定対策", lessonTypeCorporate: "法人向け", lessonTypeOther: "その他",
      testPrepLabel: "資格・試験対策の経験（英語の先生のみ下記から選択してください）",
      testPrepToeic: "TOEIC", testPrepToefl: "TOEFL", testPrepBulats: "BULATS", testPrepEiken: "実用英語技能検定（英検）", testPrepGmat: "GMAT", testPrepIelts: "IELTS", testPrepCambridge: "ケンブリッジ大学英語検定", testPrepUn: "国連公用語英語検定（国連英検）", testPrepIndustrial: "工業英語能力検定（工業英検）", testPrepTopec: "TOPEC", testPrepJhsExam: "中学受験", testPrepHsExam: "高校受験", testPrepUniExam: "大学受験",
      engCertLabel: "資格（英語の資格をお持ちの方のみ下記から選択してください）",
      s5_title1: "レッスン料金", trialFee: "トライアルレッスン料金", privateFee: "マンツーマンレッスン料金", groupFee: "グループレッスン料金", onlineFee: "オンラインレッスン料金",
      s5_title2: "レッスンスケジュール", mon: "月", tue: "火", wed: "水", thu: "木", fri: "金", sat: "土", sun: "日", early_morning: "早朝", morning: "午前中", lunchtime: "お昼前後", afternoon: "午後", evening: "夕方・夜",
      s5_title3: "レッスン場所", lessonArea: "レッスンエリア", selectAreaBtn: "エリア選択", lessonStation: "レッスン可能駅", selectStationBtn: "レッスン可能駅を選択", lessonLocation: "レッスン可能な場所", locationCafe: "カフェ", locationTeacherHome: "講師の家", locationStudentHome: "生徒の家", locationPark: "公園", locationPublic: "その他の公共の場所", landmark: "希望する場所のランドマーク", landmarkHelp: "レッスンを行う場所や最寄りの駅、目印となるランドマークなどを具体的に記載してください。日本語で入力すると、日本の生徒が場所をイメージしやすくなります。\n例：渋谷駅ハチ公口、JR山手線の東京駅と上野駅の間、代々木公園など。", stationNegotiable: "レッスン対応可能な駅は相談可能",
      s6_title1: "その他・自己紹介", hobbies: "趣味・好きなこと", movies: "好きな映画", music: "好きな音楽", food: "好きな食べ物", loveJapan: "日本の好きなところは？", messageToStudent: "生徒へのメッセージ",
      s6_title2: "利用規約", termsLink: "利用規約", termsAgree: "を読み、同意します", deleteRequest: "アカウントが承認されなかった場合、または退会時に個人情報を削除することを申請します。",
      nextBtn: "次へ", backBtn: "戻る", submitBtn: "登録を完了する", selectPlaceholder: "選択してください", cityDisabledPlaceholder: "都道府県を選択してください", yes: "はい", no: "いいえ",
      areaModalTitle: "レッスンエリアを選択", confirmBtn: "確定",
      stationModalTitle: "レッスン可能駅を選択", region: "地方", line: "路線", station: "駅"
    },
    en: {
      pageTitle: "Teacher Registration | D.Info",
      step1: "Account", step2: "Basic Info", step3: "Skills", step4: "Lessons", step5: "Location", step6: "Confirm",
      stepDetails: [
        { title: "Step 1: Account Information", subtitle: "First, let's create your account and contact details." },
        { title: "Step 2: Basic Information", subtitle: "Tell us about yourself. Identity verification is also done in this step." },
        { title: "Step 3: Background and Skills", subtitle: "Enhance your credibility by setting your education, work history, and profile picture." },
        { title: "Step 4: Lesson Languages and Teaching Skills", subtitle: "Select your language proficiency and what kind of lessons you excel at." },
        { title: "Step 5: Lesson Settings", subtitle: "Set up your fees, schedule, and lesson locations." },
        { title: "Step 6: Profile and Final Confirmation", subtitle: "Finally, enhance your self-introduction, agree to the terms, and complete your registration." }
      ],
      s1_title1: "Account Information", email: "Email Address", password: "Password", passwordConfirm: "Password (Confirm)",
      s1_title2: "Contact Information", firstName: "First Name", lastName: "Last Name", prefecture: "Prefecture", city: "City/Municipality", address: "Street Address", phone: "Mobile Number", phoneHelp: "For verification only. Not shown to students.",
      s2_title1: "Basic Information", dob: "Date of Birth", gender: "Gender", genderMale: "Male", genderFemale: "Female", genderOther: "Other", nationality: "Nationality", nativeLang: "Native Language", departureDate: "Scheduled Departure Date from Japan",
      s2_title2: "Identity Verification", idHelp: "To maintain a safe platform, we require the submission of an official ID. Uploaded images are used only for identity verification and will not be disclosed to students.", idFront: "ID Image (Front)", idBack: "ID Image (Back)",
      s3_title1: "Contact & Visibility", email2: "Secondary Email Address", sharePhone: "Make the registered phone number visible to students", shareEmail2: "Make this email address visible to students",
      s3_title2: "Profile Picture", profilePhoto: "Add new file", photoHelp: "A friendly, smiling photo gets more clicks from students.",
      s3_title3: "Education & Occupation", educationLevel: "Education Level", major: "Major", institutionName: "Institution Name", occupation: "Current Occupation", industry: "Industry", occupationDetail: "Occupation Detail",
      s4_title1: "Language & Teaching Skills", japaneseSkill: "Japanese Skill", yearsInJapan: "How long have you lived in Japan?", japaneseLessonOk: "Lessons in Japanese available", japaneseEmailOk: "Contact in Japanese available", lessonLang1: "Lesson Language 1", isNative1: "Is this your native language?", lessonLang2: "Lesson Language 2", isNative2: "Is this your native language?", teachingExperience: "Teaching Experience",
      s4_title2: "Lesson Information", lessonTarget: "Target Students", targetAdult: "Adults", targetSenior: "Seniors", targetCollege: "College Students", targetHigh: "High School Students", targetJuniorHigh: "Junior High Students", targetElementary: "Elementary Students", targetPreschooler: "Preschoolers (4+)",
      lessonLevel: "Target Level", levelBeginner: "Beginner", levelNotSure: "Not sure of level", levelReadWrite: "Can read/write but weak at speaking", levelShy: "Shy students", levelReturnee: "Returnees/Study abroad experience", levelSpecialized: "Specialized Field Language", beginnerWelcome: "Beginners welcome!",
      lessonTypesLabel: "Lesson Types You Excel At (Max 8)",
      lessonTypeConversation: "Daily Conversation", lessonTypeFreeTalk: "Free Talk", lessonTypeTravel: "Travel Conversation", lessonTypeCrossCulture: "Cross-cultural Conversation", lessonTypeBusiness: "Business Conversation", lessonTypePronunciation: "Pronunciation Correction", lessonTypeSlang: "Slang and Idioms", lessonTypeRoleplay: "Role-playing", lessonTypeMedia: "Movies, Music, etc.", lessonTypeNews: "News", lessonTypeExamPrep: "Entrance Exam Prep", lessonTypeHomework: "Homework Help", lessonTypeKids: "Kids' Conversation", lessonTypeOriginalMaterials: "Teacher's Original Materials", lessonTypeSpecialized: "Specialized Field Language", lessonTypeLangTest: "Language Proficiency Test Prep", lessonTypeCorporate: "For Corporations", lessonTypeOther: "Other (Student's Request)",
      testPrepLabel: "Test Prep Experience (English teachers only)",
      testPrepToeic: "TOEIC", testPrepToefl: "TOEFL", testPrepBulats: "BULATS", testPrepEiken: "EIKEN", testPrepGmat: "GMAT", testPrepIelts: "IELTS", testPrepCambridge: "Cambridge English", testPrepUn: "UNATE", testPrepIndustrial: "STEP EIKEN", testPrepTopec: "TOPEC", testPrepJhsExam: "Jr. High Entrance Exam", testPrepHsExam: "High School Entrance Exam", testPrepUniExam: "University Entrance Exam",
      engCertLabel: "Qualifications (English qualification holders only)",
      s5_title1: "Lesson Fees", trialFee: "Trial Lesson Fee", privateFee: "One-on-One Lesson Fee", groupFee: "Group Lesson Fee", onlineFee: "Online Lesson Fee",
      s5_title2: "Lesson Schedule", mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat", sun: "Sun", early_morning: "Early Morning", morning: "Morning", lunchtime: "Lunchtime", afternoon: "Afternoon", evening: "Evening/Night",
      s5_title3: "Lesson Location", lessonArea: "Lesson Area", selectAreaBtn: "Select Area", lessonStation: "Lesson Stations", selectStationBtn: "Select Lesson Stations", lessonLocation: "Available Lesson Locations", locationCafe: "Cafe", locationTeacherHome: "Teacher's Home", locationStudentHome: "Student's Home", locationPark: "Park", locationPublic: "Other Public Places", landmark: "Preferred Landmark", landmarkHelp: "Please provide a specific location, nearby station, or landmark. This helps students visualize the meeting spot. We recommend entering this in Japanese for local students.\nE.g., Shibuya Station Hachiko Exit, between Tokyo & Ueno stations on the JR Yamanote Line, near Yoyogi Park.", stationNegotiable: "Negotiable for nearby stations", onlineOk: "Online lessons available",
      s6_title1: "Other / Self-Introduction", hobbies: "Hobbies / Interests", movies: "Favorite Movies", music: "Favorite Music", food: "Favorite Food", loveJapan: "What do you like about Japan?", messageToStudent: "Message to Students",
      s6_title2: "Terms of Service", termsLink: "Terms of Service", termsAgree: "I have read and agree to the", deleteRequest: "I request my personal information to be deleted if my account is not approved or upon withdrawal.",
      nextBtn: "Next", backBtn: "Back", submitBtn: "Complete Registration", selectPlaceholder: "Please select", cityDisabledPlaceholder: "Select a prefecture first", yes: "Yes", no: "No",
      areaModalTitle: "Select Lesson Area", confirmBtn: "Confirm",
      stationModalTitle: "Select Lesson Stations", region: "Region", line: "Line", station: "Station"
    }
  };

  const dropdownOptions = {
    educationLevelOptions: {
      ja: { "義務教育": "義務教育", "高等学校": "高等学校", "専門学校": "専門学校", "短期大学": "短期大学", "４年制大学": "４年制大学", "大学院（修士課程）": "大学院（修士課程）", "大学院（博士課程）": "大学院（博士課程）" },
      en: { "Compulsory": "Compulsory", "High School": "High School", "Vocational/Technical": "Vocational/Technical", "Junior College": "Junior College", "4-Year University": "4-Year University", "Master's Degree": "Master's Degree", "Doctoral Degree": "Doctoral Degree" }
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
    trialFeeOptions: {
      ja: { "free": "無料", "500": "¥500", "1000": "¥1000", "1500": "¥1500", "2000": "¥2000", "2500": "¥2500", "3000": "¥3000", "3500": "¥3500", "4000": "¥4000", "4500": "¥4500", "5000": "¥5000", "5500": "¥5500", "6000": "¥6000以上" },
      en: { "free": "Free", "500": "¥500", "1000": "¥1000", "1500": "¥1500", "2000": "¥2000", "2500": "¥2500", "3000": "¥3000", "3500": "¥3500", "4000": "¥4000", "4500": "¥4500", "5000": "¥5000", "5500": "¥5500", "6000": "¥6000 or more" }
    },
    privateFeeOptions: {
      ja: { "1500": "¥1500", "2000": "¥2000", "2500": "¥2500", "3000": "¥3000", "3500": "¥3500", "4000": "¥4000", "4500": "¥4500", "5000": "¥5000", "5500": "¥5500", "6000": "¥6000以上" },
      en: { "1500": "¥1500", "2000": "¥2000", "2500": "¥2500", "3000": "¥3000", "3500": "¥3500", "4000": "¥4000", "4500": "¥4500", "5000": "¥5000", "5500": "¥5500", "6000": "¥6000 or more" }
    },
    groupFeeOptions: {
      ja: { "none": "選択してください", "1000": "¥1000", "1500": "¥1500", "2000": "¥2000", "2500": "¥2500", "3000": "¥3000", "3500": "¥3500", "4000": "¥4000", "4500": "¥4500", "5000": "¥5000", "5500": "¥5500", "6000": "¥6000以上" },
      en: { "none": "Please select", "1000": "¥1000", "1500": "¥1500", "2000": "¥2000", "2500": "¥2500", "3000": "¥3000", "3500": "¥3500", "4000": "¥4000", "4500": "¥4500", "5000": "¥5000", "5500": "¥5500", "6000": "¥6000 or more" }
    }
  };

  const [showAreaModal, setShowAreaModal] = useState(false);
  const [showStationModal, setShowStationModal] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedPrefForStation, setSelectedPrefForStation] = useState(null);
  const [selectedLine, setSelectedLine] = useState(null);
  const [selectedPrefForArea, setSelectedPrefForArea] = useState(null);
  const [teacher_id, setTeacherId] = useState(null);
  console.log('teacher_id', teacher_id);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [countries, setCountries] = useState([]);
  const [countriesList, setCountriesList] = useState([]);

  // Add prefectureCodes mapping at the top, after allPrefectures
  // const prefectureCodes = {
  //   hokkaido: 1,
  //   aomori: 2,
  //   iwate: 3,
  //   miyagi: 4,
  //   akita: 5,
  //   yamagata: 6,
  //   fukushima: 7,
  //   ibaraki: 8,
  //   tochigi: 9,
  //   gunma: 10,
  //   saitama: 11,
  //   chiba: 12,
  //   tokyo: 13,
  //   kanagawa: 14,
  //   niigata: 15,
  //   toyama: 16,
  //   ishikawa: 17,
  //   fukui: 18,
  //   yamanashi: 19,
  //   nagano: 20,
  //   gifu: 21,
  //   shizuoka: 22,
  //   aichi: 23,
  //   mie: 24,
  //   shiga: 25,
  //   kyoto: 26,
  //   osaka: 27,
  //   hyogo: 28,
  //   nara: 29,
  //   wakayama: 30,
  //   tottori: 31,
  //   shimane: 32,
  //   okayama: 33,
  //   hiroshima: 34,
  //   yamaguchi: 35,
  //   tokushima: 36,
  //   kagawa: 37,
  //   ehime: 38,
  //   kochi: 39,
  //   fukuoka: 40,
  //   saga: 41,
  //   nagasaki: 42,
  //   kumamoto: 43,
  //   oita: 44,
  //   miyazaki: 45,
  //   kagoshima: 46,
  //   okinawa: 47
  // };

  useEffect(() => {
    document.title = languageStrings[currentLang].pageTitle;
    // Fetch country list for nationality dropdown
    fetch('https://restcountries.com/v3.1/all')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch countries');
        }
        return res.json();
      })
      .then(data => {
        // Check if data is an array before mapping
        if (Array.isArray(data)) {
          // Map to English and Japanese names, sort by English name
          const sorted = data
            .map(c => ({
              en: c.name.common,
              ja: c.translations?.jpn?.common || c.name.common
            }))
            .sort((a, b) => a.en.localeCompare(b.en));
          setCountries(sorted);
        } else {
          console.error('Countries API returned non-array data:', data);
          setCountries([]);
        }
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
        setCountries([]);
      });
  }, [currentLang]);

  useEffect(() => {
    const lang = currentLang === 'ja' ? 'ja' : 'en';
    try {
      const countryList = getCountryList(lang);
      if (Array.isArray(countryList)) {
        setCountriesList(countryList);
      } else {
        console.error('getCountryList returned non-array:', countryList);
        setCountriesList([]);
      }
    } catch (error) {
      console.error('Error getting country list:', error);
      setCountriesList([]);
    }
  }, [currentLang]);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      const currentArray = formData[name] || [];
      if (checked) {
        setFormData({ ...formData, [name]: [...currentArray, value] });
      } else {
        setFormData({ ...formData, [name]: currentArray.filter(item => item !== value) });
      }
    } else if (type === 'radio') {
      setFormData({ ...formData, [name]: value });
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;

    // Special handling for nationality to store the country name
    if (name === 'nationality') {
      const selectedCountry = countriesList.find((country) => country.code === value);
      setFormData({ ...formData, [name]: selectedCountry ? selectedCountry.name : value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handlePrefectureChange = (e) => {
    const value = e.target.value;
    setSelectedPrefecture(value);
    setFormData({ ...formData, prefecture: value, city: '' });
  };

  const nextStep = async (step) => {
    setError('');
    if (!validateStep(currentStep)) return;

    if (step <= totalSteps) {
      setLoading(true);
      try {
        if (currentStep === 1) {
          // Step 1: Create teacher account
          const payload = {
            email: formData.email,
            password: formData.password,
            first_name: formData.first_name,
            last_name: formData.last_name,
            prefectures: Number(formData.prefecture), // send as integer
            municipality: formData.city,
            address: formData.address,
            mobile: formData.phone
          };
          console.log('[Step 1] Sending createTeacher payload:', payload);
          const res = await createTeacher(payload);
          console.log('[Step 1] createTeacher response:', res);

          if (res && (res.id || res.teacherId || res._id)) {
            const teacherId = res.UserId.id;
            setTeacherId(teacherId);
            setCurrentStep(step);
            window.scrollTo(0, 0);
            console.log('[Step 1] Teacher created, moving to step', step);
          } else if (res && res.success) {
            setCurrentStep(step);
            window.scrollTo(0, 0);
            console.log('[Step 1] Teacher created (success true), moving to step', step);
          } else {
            setError(res?.message || 'Failed to create teacher account.');
            console.error('[Step 1] Error creating teacher:', res);
          }
        } else if (currentStep === 6) {
          // Final Step (Step 6): Save all additional details
          const details = { ...formData };
          if (teacher_id) details.teacher_id = teacher_id;
          console.log(`[Step ${currentStep}] Sending teacherAdditionalDetails payload:`, details);
          const res = await teacherAdditionalDetails(details);
          console.log(`[Step ${currentStep}] teacherAdditionalDetails response:`, res);

          if (res && (res.success || res.status === 'ok')) {
            // Registration completed successfully
            console.log('[Step 6] Registration completed successfully');
            // You might want to redirect to a success page or show success message
            // For example: router.push('/registration-success');
            setCurrentStep(step); // This might be step 7 or completion page
            window.scrollTo(0, 0);
          } else {
            setError(res?.message || 'Failed to complete registration.');
            console.error(`[Step ${currentStep}] Error completing registration:`, res);
          }
        } else {
          // Steps 2-5: Just move to next step without API call
          setCurrentStep(step);
          window.scrollTo(0, 0);
          console.log(`[Step ${currentStep}] Moving to step ${step} without API call`);
        }
      } catch (err) {
        setError('Network or server error.');
        console.error(`[Step ${currentStep}] Exception:`, err);
      } finally {
        setLoading(false);
      }
    }
  };

  const prevStep = (step) => {
    if (step >= 1) {
      setCurrentStep(step);
      window.scrollTo(0, 0);
      console.log(`Moving back to step ${step}`);
    }
  };

  const validateStep = (step) => {
    // Basic validation logic - expand as needed
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // On successful submission, redirect to completion page
    window.location.href = 'completion415a.html?lang=' + currentLang;
  };

  // Area Modal Functions
  const populatePrefecturesInModal = () => {
    const prefectures = Object.keys(cityData);
    if (prefectures.length > 0) {
      setSelectedPrefForArea(prefectures[0]);
    }
  };

  const handleCitySelection = (prefKey, cityKey, isSelected) => {
    const newSelectedAreas = { ...selectedAreas };
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

  const renderSelectedAreaTags = () => {
    try {
      return Object.keys(selectedAreas).map(prefKey => {
        const cities = selectedAreas[prefKey]?.cities;
        if (!Array.isArray(cities)) {
          console.error('selectedAreas[prefKey].cities is not an array:', cities);
          return null;
        }
        return cities.map(cityKey => {
          const cityIndex = cityData[prefKey]?.['en']?.findIndex(c => c.toLowerCase().replace(/ /g, '-') === cityKey);
          const cityName = cityData[prefKey]?.[currentLang]?.[cityIndex] || cityKey;
          return (
            <span key={`${prefKey}-${cityKey}`} className="area-tag">
              {allPrefectures[prefKey]?.[currentLang] || prefKey} {cityName}
              <button onClick={() => {
                handleCitySelection(prefKey, cityKey, false);
              }}>&times;</button>
            </span>
          );
        });
      });
    } catch (error) {
      console.error('Error in renderSelectedAreaTags:', error);
      return null;
    }
  };

  // Station Modal Functions
  const populateRegions = () => {
    const regions = Object.keys(stationData);
    if (regions.length > 0) {
      setSelectedRegion(regions[0]);
    }
  };

  const populatePrefecturesForStation = (regionKey) => {
    const prefectures = stationData[regionKey]?.prefectures;
    if (prefectures && Object.keys(prefectures).length > 0) {
      setSelectedPrefForStation(Object.keys(prefectures)[0]);
    }
  };

  const populateLines = (regionKey, prefKey) => {
    const lines = stationData[regionKey]?.prefectures[prefKey]?.lines;
    if (lines && Object.keys(lines).length > 0) {
      setSelectedLine(Object.keys(lines)[0]);
    }
  };

  const handleStationSelection = (lineKey, station, isSelected) => {
    try {
      const newSelectedStations = { ...selectedStations };
      const lines = Object.values(stationData)
        .flatMap(region => Object.values(region?.prefectures || {}))
        .flatMap(pref => Object.entries(pref?.lines || {}))
        .find(([key]) => key === lineKey)?.[1];

      if (!lines) {
        console.error('Could not find line data for', lineKey);
        return;
      }

      if (isSelected) {
        if (!newSelectedStations[lineKey]) {
          newSelectedStations[lineKey] = {
            ja_line: lines.ja,
            en_line: lines.en,
            stations: []
          };
        }
        if (!newSelectedStations[lineKey].stations?.some(s => s.en === station.en)) {
          newSelectedStations[lineKey].stations.push(station);
        }
      } else {
        if (newSelectedStations[lineKey]) {
          newSelectedStations[lineKey].stations = newSelectedStations[lineKey].stations?.filter(s => s.en !== station.en) || [];
          if (newSelectedStations[lineKey].stations.length === 0) {
            delete newSelectedStations[lineKey];
          }
        }
      }
      setSelectedStations(newSelectedStations);
    } catch (error) {
      console.error('Error in handleStationSelection:', error);
    }
  };

  const renderSelectedStationTags = () => {
    try {
      return Object.keys(selectedStations).map(lineKey => {
        const stations = selectedStations[lineKey]?.stations;
        if (!Array.isArray(stations)) {
          console.error('selectedStations[lineKey].stations is not an array:', stations);
          return null;
        }
        return stations.map(station => (
          <span key={`${lineKey}-${station.en}`} className="station-tag">
            {selectedStations[lineKey]?.[currentLang + '_line'] || lineKey} - {station?.[currentLang] || station?.en || 'Unknown'}
            <button onClick={() => {
              handleStationSelection(lineKey, station, false);
            }}>&times;</button>
          </span>
        ));
      });
    } catch (error) {
      console.error('Error in renderSelectedStationTags:', error);
      return null;
    }
  };

  const renderSelectOptions = (optionsKey, addNoneOption = false) => {
    try {
      const options = dropdownOptions[optionsKey]?.[currentLang];
      if (!options || typeof options !== 'object') {
        console.error('Invalid options for', optionsKey, 'in language', currentLang);
        return <option value="">Error loading options</option>;
      }
      return (
        <>
          {addNoneOption && (
            <option value={optionsKey === 'group_fee' ? "" : "none"}>
              {optionsKey === 'group_fee' ? languageStrings[currentLang].selectPlaceholder : options["none"]}
            </option>
          )}
          {Object.entries(options).map(([value, label]) => {
            if (addNoneOption && value === 'none') return null;
            return <option key={value} value={value}>{label}</option>;
          })}
        </>
      );
    } catch (error) {
      console.error('Error in renderSelectOptions:', error);
      return <option value="">Error loading options</option>;
    }
  };

  const renderCheckboxGroup = (name, options, maxSelection = null) => {
    try {
      const selectedCount = formData[name] ? formData[name].length : 0;
      const currentOptions = options?.[currentLang];
      if (!currentOptions || typeof currentOptions !== 'object') {
        console.error('Invalid options for checkbox group', name, 'in language', currentLang);
        return <div>Error loading options</div>;
      }
      return (
        <div className="hs-reg-selectable-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
          {Object.entries(currentOptions).map(([value, label]) => (
            <div key={value} className="hs-reg-selectable-item">
              <input
                type="checkbox"
                id={`${name}_${value}`}
                name={name}
                value={value}
                checked={formData[name]?.includes(value)}
                onChange={handleInputChange}
                disabled={maxSelection && selectedCount >= maxSelection && !formData[name]?.includes(value)}
              />
              <label htmlFor={`${name}_${value}`}>{label}</label>
            </div>
          ))}
        </div>
      );
    } catch (error) {
      console.error('Error in renderCheckboxGroup:', error);
      return <div>Error loading options</div>;
    }
  };

  const renderRadioGroup = (name, options) => {
    try {
      const currentOptions = options?.[currentLang];
      if (!currentOptions || typeof currentOptions !== 'object') {
        console.error('Invalid options for radio group', name, 'in language', currentLang);
        return <div>Error loading options</div>;
      }
      return (
        <div className="hs-reg-selectable-grid">
          {Object.entries(currentOptions).map(([value, label]) => (
            <div key={value} className="hs-reg-selectable-item">
              <input
                type="radio"
                id={`${name}_${value}`}
                name={name}
                value={value}
                checked={formData[name] === value}
                onChange={handleInputChange}
              />
              <label htmlFor={`${name}_${value}`}>{label}</label>
            </div>
          ))}
        </div>
      );
    } catch (error) {
      console.error('Error in renderRadioGroup:', error);
      return <div>Error loading options</div>;
    }
  };

  const renderScheduleMatrix = () => {
    const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
    const timeSlots = ['early_morning', 'morning', 'lunchtime', 'afternoon', 'evening'];

    return (
      <div className="schedule-matrix">
        <div className="header"></div>
        {days.map(day => (
          <div key={day} className="header">{languageStrings[currentLang][day]}</div>
        ))}

        {timeSlots.map(time => (
          <React.Fragment key={time}>
            <div className="time-label">{languageStrings[currentLang][time]}</div>
            {days.map(day => (
              <div key={`${day}-${time}`} className="checkbox-container">
                <input
                  type="checkbox"
                  id={`schedule_${day}_${time}`}
                  name={`schedule_${day}_${time}`}
                  checked={formData.schedule?.[`${day}_${time}`] || false}
                  onChange={handleInputChange}
                />
                <span className="checkbox-custom"></span>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    );
  };

  // CSS styles
  const styles = `
    :root {
      --primary-color: #6fba2c;
      --primary-color-dark: #5a9d20;
      --light-gray: #f9fafb;
      --medium-gray: #e5e7eb;
      --dark-gray: #374151;
      --text-color: #111827;
      --white-color: #ffffff;
      --error-color: #ef4444;
      --border-radius-md: 8px;
      --border-radius-lg: 16px;
    }
    
    body { 
      font-family: 'Poppins', 'Noto Sans JP', sans-serif; 
      background-color: var(--light-gray); 
      color: var(--dark-gray); 
      margin: 0; 
      line-height: 1.6; 
    }
    
    .hs-reg-container { 
      max-width: 900px; 
      margin: 0 auto; 
      padding: 0 1rem; 
      box-sizing: border-box; 
    }
    
    @media (max-width: 640px) {
      .hs-reg-container { padding: 0; }
      .hs-reg-btn-nav {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        align-items: center;
        justify-content: flex-start;
      }
      .hs-reg-btn {
        padding: 12px 20px;
        width: auto;
        font-size: 1rem;
        min-width: 0;
        box-sizing: border-box;
        white-space: nowrap;
      }
    }
    
    .hs-reg-top-bar { 
      display: flex; 
      justify-content: space-between; 
      align-items: center; 
      padding: 1rem; 
    }
    
    .hs-reg-logo-header { 
      text-align: center; 
      flex-grow: 1; 
    }
    
    .logo-image { 
      max-width: 180px; 
      height: auto; 
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
    
    h1, h2, h3, h4 { 
      color: var(--text-color); 
      font-weight: 700; 
      margin-top: 0; 
    }
    
    .hs-reg-main-content { 
      background-color: var(--white-color); 
      padding: 1.5rem; 
      margin-bottom: 4rem; 
    }
    
    @media (min-width: 640px) {
      .hs-reg-main-content { 
        border-radius: var(--border-radius-lg); 
        box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04); 
        padding: 2.5rem; 
        margin-top: 1rem; 
      }
    }
    
    .hs-reg-btn { 
      display: inline-flex; 
      align-items: center; 
      justify-content: center; 
      gap: 0.5rem; 
      background-color: var(--primary-color); 
      color: var(--white-color); 
      font-weight: 600; 
      font-size: 1rem; 
      padding: 12px 28px; 
      border-radius: var(--border-radius-md); 
      text-decoration: none; 
      border: none; 
      cursor: pointer; 
      transition: background-color 0.3s ease, transform 0.2s ease; 
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
    }
    
    .hs-reg-btn:hover { 
      background-color: var(--primary-color-dark); 
      transform: translateY(-2px); 
    }
    
    .hs-reg-btn-secondary { 
      background-color: var(--medium-gray); 
      color: var(--dark-gray); 
    }
    
    .hs-reg-btn-secondary:hover { 
      background-color: #d1d5db; 
    }
    
    .hs-reg-progress-bar { 
      display: flex; 
      justify-content: space-between; 
      margin-bottom: 2.5rem; 
      list-style-type: none; 
      padding: 0; 
      flex-wrap: nowrap; 
      overflow-x: auto; 
    }
    
    .hs-reg-progress-bar li { 
      flex: 1; 
      min-width: 80px; 
      text-align: center; 
      position: relative; 
      color: #9ca3af; 
      font-weight: 500; 
      font-size: 0.8rem; 
      transition: color 0.3s ease; 
      padding: 0 5px; 
    }
    
    .hs-reg-progress-bar li .step-icon { 
      width: 32px; 
      height: 32px; 
      border-radius: 50%; 
      background-color: var(--white-color); 
      border: 2px solid var(--medium-gray); 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      margin: 0 auto 10px; 
      transition: all 0.4s ease; 
      font-weight: 900; 
    }
    
    .hs-reg-progress-bar li::after { 
      content: ''; 
      height: 3px; 
      width: calc(100% - 32px); 
      background-color: var(--medium-gray); 
      position: absolute; 
      top: 15px; 
      left: calc(50% + 16px); 
      z-index: -1; 
      transition: all 0.4s ease; 
    }
    
    .hs-reg-progress-bar li:last-child::after { 
      display: none; 
    }
    
    .hs-reg-progress-bar li.active { 
      color: var(--primary-color); 
    }
    
    .hs-reg-progress-bar li.active .step-icon { 
      border-color: var(--primary-color); 
      color: var(--primary-color); 
    }
    
    .hs-reg-progress-bar li.completed .step-icon { 
      background-color: var(--primary-color); 
      border-color: var(--primary-color); 
      color: var(--white-color); 
    }
    
    .hs-reg-progress-bar li.completed::after { 
      background-color: var(--primary-color); 
    }
    
    .hs-reg-progress-bar li.completed span {
      color: var(--primary-color);
      font-weight: 700;
    }
    
    .hs-reg-form-step { 
      display: none; 
    }
    
    .hs-reg-form-step.active { 
      display: block; 
      animation: fadeIn 0.5s ease-in-out; 
    }
    
    @keyframes fadeIn { 
      from { opacity: 0; transform: translateY(10px); } 
      to { opacity: 1; transform: translateY(0); } 
    }
    
    .hs-reg-step-title { 
      font-size: 1.75rem; 
      font-weight: 700; 
      margin-bottom: 1rem; 
      text-align: center; 
      color: var(--primary-color); /* changed to green */
    }
    
    .hs-reg-step-subtitle { 
      font-size: 1rem; 
      color: #6b7280; 
      text-align: center; 
      margin-bottom: 2.5rem; 
    }
    
    .hs-reg-form-section { 
      margin-bottom: 2.5rem; 
    }
    
    .hs-reg-form-section-title { 
      font-size: 1.25rem; 
      font-weight: 600; 
      padding-bottom: 0.5rem; 
      border-bottom: 2px solid var(--primary-color); 
      margin-bottom: 1.5rem; 
    }
    
    .hs-reg-form-grid { 
      display: grid; 
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
      gap: 1.5rem; 
    }
    
    .hs-reg-grid-full { 
      grid-column: 1 / -1; 
    }
    
    .hs-reg-form-group { 
      display: flex; 
      flex-direction: column; 
    }
    
    .hs-reg-form-group label { 
      font-weight: 600; 
      margin-bottom: 0.5rem; 
    }
    
    .hs-reg-form-group label .hs-reg-required { 
      color: var(--error-color); 
      margin-left: 4px; 
    }
    
    .hs-reg-form-group input, 
    .hs-reg-form-group select, 
    .hs-reg-form-group textarea { 
      width: 100%; 
      padding: 10px 14px; 
      border-radius: var(--border-radius-md); 
      border: 1px solid #d1d5db; 
      background-color: var(--light-gray); 
      font-size: 1rem; 
      box-sizing: border-box; 
      transition: border-color 0.3s, box-shadow 0.3s; 
    }
    
    .hs-reg-form-group select:disabled { 
      background-color: #f3f4f6; 
      cursor: not-allowed; 
    }
    
    .hs-reg-form-group input:focus, 
    .hs-reg-form-group select:focus, 
    .hs-reg-form-group textarea:focus { 
      outline: none; 
      border-color: var(--primary-color); 
      box-shadow: 0 0 0 3px rgba(111, 186, 44, 0.3); 
    }
    
    .hs-reg-help-text { 
      font-size: 0.875rem; 
      color: #6b7280; 
      margin-top: 0.5rem; 
      white-space: pre-wrap; 
    }
    
    .hs-reg-selectable-grid { 
      display: grid; 
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); 
      gap: 1rem; 
    }
    
    .hs-reg-selectable-item { 
      position: relative; 
    }
    
    .hs-reg-selectable-item input[type="checkbox"], 
    .hs-reg-selectable-item input[type="radio"] { 
      opacity: 0; 
      position: absolute; 
      width: 100%; 
      height: 100%; 
      cursor: pointer; 
      top: 0; 
      left: 0; 
      margin: 0; 
    }
    
    .hs-reg-selectable-item label { 
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
    
    .hs-reg-selectable-item input[type="checkbox"]:checked + label, 
    .hs-reg-selectable-item input[type="radio"]:checked + label { 
      border-color: var(--primary-color); 
      background-color: #f0f9eb; 
      color: var(--primary-color-dark); 
    }
    
    .hs-reg-selectable-item input[type="checkbox"]:focus-visible + label, 
    .hs-reg-selectable-item input[type="radio"]:focus-visible + label { 
      outline: 3px solid rgba(111, 186, 44, 0.4); 
      outline-offset: 2px; 
    }
    
    .date-group { 
      display: flex; 
      gap: 1rem; 
    }
    
    .date-group .hs-reg-form-group { 
      flex: 1; 
    }
    
    .schedule-matrix { 
      display: grid; 
      grid-template-columns: max-content repeat(7, 1fr); 
      gap: 0.25rem; 
      font-size: 0.8rem; 
      text-align: center; 
      align-items: center; 
      overflow-x: auto; 
      padding-bottom: 10px;
    }
    
    .schedule-matrix .header { 
      font-weight: 600; 
      padding-bottom: 0.5rem; 
      min-width: 30px;
    }
    
    .schedule-matrix .time-label { 
      grid-column: 1 / 2; 
      text-align: right; 
      padding-right: 0.75rem; 
      font-weight: 600; 
      white-space: nowrap;
    }
    
    .schedule-matrix .checkbox-container { 
      position: relative; 
      width: 24px; 
      height: 24px; 
      margin: auto; 
    }
    
    .schedule-matrix .checkbox-container input[type="checkbox"] { 
      opacity: 0; 
      position: absolute; 
      width: 100%; 
      height: 100%; 
      cursor: pointer; 
    }
    
    .schedule-matrix .checkbox-container .checkbox-custom { 
      display: block; 
      width: 100%; 
      height: 100%; 
      border: 2px solid var(--medium-gray); 
      border-radius: 4px; 
      transition: all 0.2s ease; 
    }
    
    .schedule-matrix .checkbox-container input[type="checkbox"]:checked + .checkbox-custom { 
      background-color: var(--primary-color); 
      border-color: var(--primary-color); 
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e"); 
      background-repeat: no-repeat; 
      background-position: center; 
      background-size: 50%; 
    }
    
    .hs-reg-btn-nav { 
      display: flex; 
      justify-content: space-between; 
      margin-top: 2.5rem; 
      padding-top: 1.5rem; 
      border-top: 1px solid var(--medium-gray); 
    }
    
    /* Modal Styles */
    .modal-overlay { 
      position: fixed; 
      top: 0; 
      left: 0; 
      width: 100%; 
      height: 100%; 
      background-color: rgba(0,0,0,0.5); 
      display: none; 
      justify-content: center; 
      align-items: center; 
      z-index: 1000; 
      transition: opacity 0.3s ease; 
    }
    
    .modal-overlay.active { 
      display: flex; 
    }
    
    .modal-content { 
      background: var(--white-color); 
      width: 90%; 
      max-width: 800px; 
      max-height: 90vh; 
      border-radius: var(--border-radius-lg); 
      display: flex; 
      flex-direction: column; 
      box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); 
      transform: scale(0.95); 
      opacity: 0; 
      transition: transform 0.3s ease, opacity 0.3s ease;
    }
    
    .modal-overlay.active .modal-content { 
      transform: scale(1); 
      opacity: 1; 
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
      flex-grow: 1; 
      overflow-y: hidden; 
    }
    
    .modal-footer { 
      padding: 1rem 1.5rem; 
      border-top: 1px solid var(--medium-gray); 
      text-align: right; 
      background-color: #f9fafb; 
      border-bottom-left-radius: var(--border-radius-lg); 
      border-bottom-right-radius: var(--border-radius-lg);
    }
    
    /* Area Modal Specific */
    #area-modal .modal-body { 
      display: grid; 
      grid-template-columns: 200px 1fr; 
    }
    
    .area-column { 
      overflow-y: auto; 
      padding: 1rem; 
    }
    
    .area-column-prefectures { 
      border-right: 1px solid var(--medium-gray); 
      background-color: var(--light-gray); 
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
    
    /* Station Modal Specific */
    #station-modal .modal-content { 
      max-width: 1200px; 
    }
    
    #station-modal .modal-body { 
      display: grid; 
      grid-template-columns: 150px 200px 250px 1fr; 
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
    
    @media (max-width: 1024px) {
      #station-modal .modal-body { 
        grid-template-columns: 1fr 1fr; 
      }
      #station-modal .station-column:nth-child(2) { 
        border-right: none; 
      }
    }
    
    @media (max-width: 768px) {
      #area-modal .modal-body { 
        grid-template-columns: 1fr; 
      }
      .area-column-prefectures { 
        border-right: none; 
        border-bottom: 1px solid var(--medium-gray); 
        max-height: 200px; 
      }
      #station-modal .modal-body { 
        grid-template-columns: 1fr; 
      }
      .station-column { 
        border-right: none !important; 
        border-bottom: 1px solid var(--medium-gray); 
        max-height: 200px;
      }
    }
    
    .hs-reg-progress-bar li span { 
      font-weight: 700;
    }
  `;

  return (
    <div className="hs-reg-container">
      <style>{styles}</style>

      <div className="hs-reg-top-bar">
        <header className="hs-reg-logo-header">
          <a href="https://dinfo.work/sensei/en/">
            <img src="../image/logo.jpg" alt="D.Info Logo" className="logo-image" />
          </a>
        </header>
        <div className="lang-switcher" id="lang-switcher">
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
      </div>

      <main className="hs-reg-main-content">
        <div id="registration-form-container">
          <ul className="hs-reg-progress-bar" id="progress-bar">
            {[1, 2, 3, 4, 5, 6].map(step => (
              <li
                key={step}
                data-step={step}
                className={`${currentStep === step ? 'active' : ''} ${currentStep > step ? 'completed' : ''}`}
              >
                <div className="step-icon">
                  {currentStep > step ? <i className="fa-solid fa-check"></i> : step}
                </div>
                <span data-lang-key={`step${step}`}>
                  {languageStrings[currentLang][`step${step}`]}
                </span>
              </li>
            ))}
          </ul>

          {error && <div style={{ color: 'var(--error-color)', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}
          {loading && <div style={{ color: 'var(--primary-color)', marginBottom: '1rem', textAlign: 'center' }}>Processing...</div>}
          <form id="teacherRegForm" onSubmit={handleSubmit} noValidate>
            <h2 className="hs-reg-step-title" id="form-title">
              {languageStrings[currentLang].stepDetails[currentStep - 1].title}
            </h2>
            <p className="hs-reg-step-subtitle" id="form-subtitle">
              {languageStrings[currentLang].stepDetails[currentStep - 1].subtitle}
            </p>

            {/* Step 1: Account Information */}
            <div className={`hs-reg-form-step ${currentStep === 1 ? 'active' : ''}`} id="step-1">
              <section className="hs-reg-form-section">
                <h3 className="hs-reg-form-section-title" data-lang-key="s1_title1">
                  {languageStrings[currentLang].s1_title1}
                </h3>
                <div className="hs-reg-form-grid">
                  <div className="hs-reg-form-group hs-reg-grid-full">
                    <label htmlFor="email" data-lang-key="email">
                      {languageStrings[currentLang].email}<span className="hs-reg-required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="hs-reg-form-group">
                    <label htmlFor="password" data-lang-key="password">
                      {languageStrings[currentLang].password}<span className="hs-reg-required">*</span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      minLength="8"
                    />
                  </div>
                  <div className="hs-reg-form-group">
                    <label htmlFor="password_confirm" data-lang-key="passwordConfirm">
                      {languageStrings[currentLang].passwordConfirm}<span className="hs-reg-required">*</span>
                    </label>
                    <input
                      type="password"
                      id="password_confirm"
                      name="password_confirm"
                      value={formData.password_confirm}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              </section>

              <section className="hs-reg-form-section">
                <h3 className="hs-reg-form-section-title" data-lang-key="s1_title2">
                  {languageStrings[currentLang].s1_title2}
                </h3>
                <div className="hs-reg-form-grid">
                  <div className="hs-reg-form-group">
                    <label htmlFor="first_name" data-lang-key="firstName">
                      {languageStrings[currentLang].firstName}<span className="hs-reg-required">*</span>
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="hs-reg-form-group">
                    <label htmlFor="last_name" data-lang-key="lastName">
                      {languageStrings[currentLang].lastName}<span className="hs-reg-required">*</span>
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="hs-reg-form-group">
                    <label htmlFor="prefecture" data-lang-key="prefecture">
                      {languageStrings[currentLang].prefecture}<span className="hs-reg-required">*</span>
                    </label>
                    <select
                      id="prefecture"
                      name="prefecture"
                      value={formData.prefecture}
                      onChange={handlePrefectureChange}
                      required
                    >
                      <option value="" disabled selected>
                        {languageStrings[currentLang].selectPlaceholder}
                      </option>
                      {prefectureList.map((pref) => (
                        <option key={pref.id} value={pref.id}>
                          {pref.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="hs-reg-form-group">
                    <label htmlFor="city" data-lang-key="city">
                      {languageStrings[currentLang].city}<span className="hs-reg-required">*</span>
                    </label>
                    <select
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleSelectChange}
                      required
                      disabled={!formData.prefecture}
                    >
                      {!formData.prefecture ? (
                        <option value="" disabled selected>
                          {languageStrings[currentLang].cityDisabledPlaceholder}
                        </option>
                      ) : (
                        <>
                          <option value="" disabled selected>
                            {languageStrings[currentLang].selectPlaceholder}
                          </option>
                          {getFilteredMunicipalities().map((municipality) => (
                            <option key={municipality.id} value={municipality.id}>
                              {municipality.name}
                            </option>
                          ))}
                        </>
                      )}
                    </select>
                  </div>
                  <div className="hs-reg-form-group hs-reg-grid-full">
                    <label htmlFor="address" data-lang-key="address">
                      {languageStrings[currentLang].address}<span className="hs-reg-required">*</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="hs-reg-form-group hs-reg-grid-full">
                    <label htmlFor="phone" data-lang-key="phone">
                      {languageStrings[currentLang].phone}<span className="hs-reg-required">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="09012345678"
                    />
                    <p className="hs-reg-help-text" data-lang-key="phoneHelp">
                      {languageStrings[currentLang].phoneHelp}
                    </p>
                  </div>
                </div>
              </section>

              <div className="hs-reg-btn-nav">
                <span></span>
                <button
                  type="button"
                  className="hs-reg-btn"
                  onClick={() => nextStep(2)}
                  disabled={loading}
                >
                  <span data-lang-key="nextBtn">
                    {languageStrings[currentLang].nextBtn}
                  </span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>

            {/* Step 2: Basic Information */}
            <div className={`hs-reg-form-step ${currentStep === 2 ? 'active' : ''}`} id="step-2">
              <section className="hs-reg-form-section">
                <h3 className="hs-reg-form-section-title" data-lang-key="s2_title1">
                  {languageStrings[currentLang].s2_title1}
                </h3>
                <div className="hs-reg-form-grid">
                  <div className="hs-reg-form-group hs-reg-grid-full">
                    <label data-lang-key="dob">
                      {languageStrings[currentLang].dob}<span className="hs-reg-required">*</span>
                    </label>
                    <div className="date-group">
                      <select
                        id="birth_year"
                        name="birth_year"
                        value={formData.birth_year}
                        onChange={handleSelectChange}
                        required
                      >
                        <option value="">Year</option>
                        {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                      <select
                        id="birth_month"
                        name="birth_month"
                        value={formData.birth_month}
                        onChange={handleSelectChange}
                        required
                      >
                        <option value="">Month</option>
                        {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                          <option key={month} value={month}>{month}</option>
                        ))}
                      </select>
                      <select
                        id="birth_day"
                        name="birth_day"
                        value={formData.birth_day}
                        onChange={handleSelectChange}
                        required
                      >
                        <option value="">Day</option>
                        {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                          <option key={day} value={day}>{day}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="hs-reg-form-group hs-reg-grid-full">
                    <label data-lang-key="gender">
                      {languageStrings[currentLang].gender}<span className="hs-reg-required">*</span>
                    </label>
                    <div className="hs-reg-selectable-grid">
                      <div className="hs-reg-selectable-item">
                        <input
                          type="radio"
                          id="gender_male"
                          name="gender"
                          value="male"
                          checked={formData.gender === 'male'}
                          onChange={handleInputChange}
                          required
                        />
                        <label htmlFor="gender_male">
                          <span data-lang-key="genderMale">
                            {languageStrings[currentLang].genderMale}
                          </span>
                        </label>
                      </div>
                      <div className="hs-reg-selectable-item">
                        <input
                          type="radio"
                          id="gender_female"
                          name="gender"
                          value="female"
                          checked={formData.gender === 'female'}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="gender_female">
                          <span data-lang-key="genderFemale">
                            {languageStrings[currentLang].genderFemale}
                          </span>
                        </label>
                      </div>
                      <div className="hs-reg-selectable-item">
                        <input
                          type="radio"
                          id="gender_other"
                          name="gender"
                          value="other"
                          checked={formData.gender === 'other'}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="gender_other">
                          <span data-lang-key="genderOther">
                            {languageStrings[currentLang].genderOther}
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="hs-reg-form-group">
                    <label htmlFor="nationality" data-lang-key="nationality">
                      {languageStrings[currentLang].nationality}<span className="hs-reg-required">*</span>
                    </label>
                    <select
                      id="nationality"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleSelectChange}
                      required
                    >
                      <option value="">{languageStrings[currentLang].selectPlaceholder}</option>
                      {Array.isArray(countriesList) && countriesList.map((country) => (
                        <option key={country.code} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="hs-reg-form-group">
                    <label htmlFor="native_language" data-lang-key="nativeLang">
                      {languageStrings[currentLang].nativeLang}
                    </label>
                    <input
                      type="text"
                      id="native_language"
                      name="native_language"
                      value={formData.native_language}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="hs-reg-form-group hs-reg-grid-full">
                    <label data-lang-key="departureDate">
                      {languageStrings[currentLang].departureDate}<span className="hs-reg-required">*</span>
                    </label>
                    <div className="date-group">
                      <select
                        id="departure_year"
                        name="departure_year"
                        value={formData.departure_year}
                        onChange={handleSelectChange}
                        required
                      >
                        <option value="">Year</option>
                        {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                      <select
                        id="departure_month"
                        name="departure_month"
                        value={formData.departure_month}
                        onChange={handleSelectChange}
                        required
                      >
                        <option value="">Month</option>
                        {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                          <option key={month} value={month}>{month}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </section>

              <section className="hs-reg-form-section">
                <h3 className="hs-reg-form-section-title" data-lang-key="s2_title2">
                  {languageStrings[currentLang].s2_title2}
                </h3>
                <p className="hs-reg-help-text" data-lang-key="idHelp">
                  {languageStrings[currentLang].idHelp}
                </p>
                <div className="hs-reg-form-grid">
                  <div className="hs-reg-form-group">
                    <label htmlFor="id_front" data-lang-key="idFront">
                      {languageStrings[currentLang].idFront}<span className="hs-reg-required">*</span>
                    </label>
                    <input
                      type="file"
                      id="id_front"
                      name="id_front"
                      onChange={handleInputChange}
                      accept="image/*"
                      required
                    />
                  </div>
                  <div className="hs-reg-form-group">
                    <label htmlFor="id_back" data-lang-key="idBack">
                      {languageStrings[currentLang].idBack}<span className="hs-reg-required">*</span>
                    </label>
                    <input
                      type="file"
                      id="id_back"
                      name="id_back"
                      onChange={handleInputChange}
                      accept="image/*"
                      required
                    />
                  </div>
                </div>
              </section>

              <div className="hs-reg-btn-nav">
                <button
                  type="button"
                  className="hs-reg-btn hs-reg-btn-secondary"
                  onClick={() => prevStep(1)}
                  disabled={loading}
                >
                  <i className="fa-solid fa-arrow-left"></i>
                  <span data-lang-key="backBtn">
                    {languageStrings[currentLang].backBtn}
                  </span>
                </button>
                <button
                  type="button"
                  className="hs-reg-btn"
                  onClick={() => nextStep(3)}
                  disabled={loading}
                >
                  <span data-lang-key="nextBtn">
                    {languageStrings[currentLang].nextBtn}
                  </span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>

            {/* Step 3: Background & Skills */}
            <div className={`hs-reg-form-step ${currentStep === 3 ? 'active' : ''}`} id="step-3">
              <section className="hs-reg-form-section">
                <h3 className="hs-reg-form-section-title" data-lang-key="s3_title1">
                  {languageStrings[currentLang].s3_title1}
                </h3>
                <div className="hs-reg-form-grid">
                  <div className="hs-reg-form-group hs-reg-grid-full">
                    <label htmlFor="email2" data-lang-key="email2">
                      {languageStrings[currentLang].email2}<span className="hs-reg-required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email2"
                      name="email2"
                      value={formData.email2}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="hs-reg-selectable-grid">
                    <div className="hs-reg-selectable-item">
                      <input
                        type="checkbox"
                        id="share_phone"
                        name="share_phone"
                        checked={formData.share_phone}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="share_phone">
                        <span data-lang-key="sharePhone">
                          {languageStrings[currentLang].sharePhone}
                        </span>
                      </label>
                    </div>
                    <div className="hs-reg-selectable-item">
                      <input
                        type="checkbox"
                        id="share_email2"
                        name="share_email2"
                        checked={formData.share_email2}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="share_email2">
                        <span data-lang-key="shareEmail2">
                          {languageStrings[currentLang].shareEmail2}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </section>

              <section className="hs-reg-form-section">
                <h3 className="hs-reg-form-section-title" data-lang-key="s3_title2">
                  {languageStrings[currentLang].s3_title2}
                </h3>
                <div className="hs-reg-form-grid">
                  <div className="hs-reg-form-group hs-reg-grid-full">
                    <label htmlFor="profile_photo" data-lang-key="profilePhoto">
                      {languageStrings[currentLang].profilePhoto}
                    </label>
                    <input
                      type="file"
                      id="profile_photo"
                      name="profile_photo"
                      onChange={handleInputChange}
                      accept="image/*"
                    />
                    <p className="hs-reg-help-text" data-lang-key="photoHelp">
                      {languageStrings[currentLang].photoHelp}
                    </p>
                  </div>
                </div>
              </section>

              <section className="hs-reg-form-section">
                <h3 className="hs-reg-form-section-title" data-lang-key="s3_title3">
                  {languageStrings[currentLang].s3_title3}
                </h3>
                <div className="hs-reg-form-grid">
                  <div className="hs-reg-form-group">
                    <label htmlFor="education_level" data-lang-key="educationLevel">
                      {languageStrings[currentLang].educationLevel}<span className="hs-reg-required">*</span>
                    </label>
                    <select
                      id="education_level"
                      name="education_level"
                      value={formData.education_level}
                      onChange={handleSelectChange}
                      required
                    >
                      {renderSelectOptions('educationLevelOptions')}
                    </select>
                  </div>
                  <div className="hs-reg-form-group">
                    <label htmlFor="major" data-lang-key="major">
                      {languageStrings[currentLang].major}
                    </label>
                    <select
                      id="major"
                      name="major"
                      value={formData.major}
                      onChange={handleSelectChange}
                      required
                    >
                      {renderSelectOptions('majorOptions', true)}
                    </select>
                  </div>
                  <div className="hs-reg-form-group hs-reg-grid-full">
                    <label htmlFor="education_institution" data-lang-key="institutionName">
                      {languageStrings[currentLang].institutionName}
                    </label>
                    <input
                      type="text"
                      id="education_institution"
                      name="education_institution"
                      value={formData.education_institution}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="hs-reg-form-group">
                    <label htmlFor="occupation" data-lang-key="occupation">
                      {languageStrings[currentLang].occupation}<span className="hs-reg-required">*</span>
                    </label>
                    <select
                      id="occupation"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleSelectChange}
                      required
                    >
                      {renderSelectOptions('occupationOptions')}
                    </select>
                  </div>
                  <div className="hs-reg-form-group">
                    <label htmlFor="industry" data-lang-key="industry">
                      {languageStrings[currentLang].industry}<span className="hs-reg-required">*</span>
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleSelectChange}
                      required
                    >
                      {renderSelectOptions('industryOptions')}
                    </select>
                  </div>
                  <div className="hs-reg-form-group hs-reg-grid-full">
                    <label htmlFor="occupation_detail" data-lang-key="occupationDetail">
                      {languageStrings[currentLang].occupationDetail}
                    </label>
                    <input
                      type="text"
                      id="occupation_detail"
                      name="occupation_detail"
                      value={formData.occupation_detail}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </section>

              <div className="hs-reg-btn-nav">
                <button
                  type="button"
                  className="hs-reg-btn hs-reg-btn-secondary"
                  onClick={() => prevStep(2)}
                  disabled={loading}
                >
                  <i className="fa-solid fa-arrow-left"></i>
                  <span data-lang-key="backBtn">
                    {languageStrings[currentLang].backBtn}
                  </span>
                </button>
                <button
                  type="button"
                  className="hs-reg-btn"
                  onClick={() => nextStep(4)}
                  disabled={loading}
                >
                  <span data-lang-key="nextBtn">
                    {languageStrings[currentLang].nextBtn}
                  </span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>

            {/* Step 4: Lesson Settings */}
            <div className={`hs-reg-form-step ${currentStep === 4 ? 'active' : ''}`} id="step-4">
              <section className="hs-reg-form-section">
                <h3 className="hs-reg-form-section-title" data-lang-key="s4_title1">
                  {languageStrings[currentLang].s4_title1}
                </h3>
                <div className="hs-reg-form-grid">
                  <div className="hs-reg-form-group">
                    <label htmlFor="japanese_skill" data-lang-key="japaneseSkill">
                      {languageStrings[currentLang].japaneseSkill}<span className="hs-reg-required">*</span>
                    </label>
                    <select
                      id="japanese_skill"
                      name="japanese_skill"
                      value={formData.japanese_skill}
                      onChange={handleSelectChange}
                      required
                    >
                      {renderSelectOptions('japaneseSkillOptions')}
                    </select>
                  </div>
                  <div className="hs-reg-form-group">
                    <label htmlFor="years_in_japan" data-lang-key="yearsInJapan">
                      {languageStrings[currentLang].yearsInJapan}<span className="hs-reg-required">*</span>
                    </label>
                    <select
                      id="years_in_japan"
                      name="years_in_japan"
                      value={formData.years_in_japan}
                      onChange={handleSelectChange}
                      required
                    >
                      {renderSelectOptions('yearsInJapanOptions')}
                    </select>
                  </div>
                  <div className="hs-reg-form-group hs-reg-grid-full">
                    <div className="hs-reg-selectable-grid" style={{ gridTemplateColumns: '1fr 1fr', maxWidth: '500px' }}>
                      <div className="hs-reg-selectable-item">
                        <input
                          type="checkbox"
                          id="japanese_lesson_ok"
                          name="japanese_lesson_ok"
                          checked={formData.japanese_lesson_ok}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="japanese_lesson_ok">
                          <span data-lang-key="japaneseLessonOk">
                            {languageStrings[currentLang].japaneseLessonOk}
                          </span>
                        </label>
                      </div>
                      <div className="hs-reg-selectable-item">
                        <input
                          type="checkbox"
                          id="japanese_email_ok"
                          name="japanese_email_ok"
                          checked={formData.japanese_email_ok}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="japanese_email_ok">
                          <span data-lang-key="japaneseEmailOk">
                            {languageStrings[currentLang].japaneseEmailOk}
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="hs-reg-grid-full">
                    <hr style={{ border: '1px solid var(--medium-gray)', margin: '1rem 0' }} />
                  </div>

                  <div className="hs-reg-form-group">
                    <label htmlFor="lang1" data-lang-key="lessonLang1">
                      {languageStrings[currentLang].lessonLang1}<span className="hs-reg-required">*</span>
                    </label>
                    <select
                      id="lang1"
                      name="lang1"
                      value={formData.lang1}
                      onChange={handleSelectChange}
                      required
                    >
                      {renderSelectOptions('lessonLangOptions', true)}
                    </select>
                  </div>
                  <div className="hs-reg-form-group">
                    <label htmlFor="is_native1" data-lang-key="isNative1">
                      {languageStrings[currentLang].isNative1}<span className="hs-reg-required">*</span>
                    </label>
                    <select
                      id="is_native1"
                      name="is_native1"
                      value={formData.is_native1}
                      onChange={handleSelectChange}
                      required
                    >
                      <option value="yes">{languageStrings[currentLang].yes}</option>
                      <option value="no">{languageStrings[currentLang].no}</option>
                    </select>
                  </div>
                  <div className="hs-reg-form-group">
                    <label htmlFor="lang2" data-lang-key="lessonLang2">
                      {languageStrings[currentLang].lessonLang2}
                    </label>
                    <select
                      id="lang2"
                      name="lang2"
                      value={formData.lang2}
                      onChange={handleSelectChange}
                    >
                      {renderSelectOptions('lessonLangOptions', true)}
                    </select>
                  </div>
                  <div className="hs-reg-form-group">
                    <label htmlFor="is_native2" data-lang-key="isNative2">
                      {languageStrings[currentLang].isNative2}
                    </label>
                    <select
                      id="is_native2"
                      name="is_native2"
                      value={formData.is_native2}
                      onChange={handleSelectChange}
                    >
                      <option value="">-</option>
                      <option value="yes">{languageStrings[currentLang].yes}</option>
                      <option value="no">{languageStrings[currentLang].no}</option>
                    </select>
                  </div>

                  <div className="hs-reg-form-group hs-reg-grid-full">
                    <label htmlFor="teaching_experience" data-lang-key="teachingExperience">
                      {languageStrings[currentLang].teachingExperience}<span className="hs-reg-required">*</span>
                    </label>
                    <select
                      id="teaching_experience"
                      name="teaching_experience"
                      value={formData.teaching_experience}
                      onChange={handleSelectChange}
                      required
                    >
                      {renderSelectOptions('teachingExperienceOptions')}
                    </select>
                  </div>
                </div>
              </section>

              <section className="hs-reg-form-section">
                <h3 className="hs-reg-form-section-title" data-lang-key="s4_title2">
                  {languageStrings[currentLang].s4_title2}
                </h3>
                <div className="hs-reg-form-group hs-reg-grid-full">
                  <label data-lang-key="lessonTarget">
                    {languageStrings[currentLang].lessonTarget}<span className="hs-reg-required">*</span>
                  </label>
                  {renderCheckboxGroup('lesson_target', {
                    ja: {
                      adult: "社会人",
                      senior: "高齢者",
                      college: "大学生",
                      high: "高校生",
                      "junior-high": "中学生",
                      elementary: "小学生",
                      preschooler: "未就学児(4歳以上)"
                    },
                    en: {
                      adult: "Adults",
                      senior: "Seniors",
                      college: "College Students",
                      high: "High School Students",
                      "junior-high": "Junior High Students",
                      elementary: "Elementary Students",
                      preschooler: "Preschoolers (4+)"
                    }
                  })}
                </div>

                <div className="hs-reg-form-group hs-reg-grid-full">
                  <label data-lang-key="lessonLevel">
                    {languageStrings[currentLang].lessonLevel}<span className="hs-reg-required">*</span>
                  </label>
                  {renderCheckboxGroup('lesson_level', {
                    ja: {
                      beginner: "初級者",
                      not_sure: "まだレベルか分からない方",
                      read_write_ok: "読み書きはできるけど会話が苦手な人",
                      shy: "恥ずかしがりやの人",
                      returnee: "語学留学・ワーホリ経験者・帰国子女",
                      specialized_lang: "専門分野での語学"
                    },
                    en: {
                      beginner: "Beginner",
                      not_sure: "Not sure of level",
                      read_write_ok: "Can read/write but weak at speaking",
                      shy: "Shy students",
                      returnee: "Returnees/Study abroad experience",
                      specialized_lang: "Specialized Field Language"
                    }
                  })}
                  <div className="hs-reg-selectable-grid" style={{ gridTemplateColumns: '1fr', maxWidth: '220px', marginTop: '1rem' }}>
                    <div className="hs-reg-selectable-item">
                      <input
                        type="checkbox"
                        id="beginner_welcome"
                        name="beginner_welcome"
                        checked={formData.beginner_welcome}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="beginner_welcome">
                        <span data-lang-key="beginnerWelcome">
                          {languageStrings[currentLang].beginnerWelcome}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="hs-reg-form-group hs-reg-grid-full">
                  <label data-lang-key="lessonTypesLabel">
                    {languageStrings[currentLang].lessonTypesLabel}<span className="hs-reg-required">*</span>
                  </label>
                  {renderCheckboxGroup('lesson_type', {
                    ja: {
                      conversation: "日常会話",
                      free_talk: "フリートーク",
                      travel: "旅行用会話",
                      cross_culture: "異文化についての会話",
                      business: "ビジネス会話",
                      pronunciation: "発音矯正",
                      slang: "スラングやイディオム",
                      roleplay: "ロールプレイ",
                      media: "映画や音楽など",
                      news: "ニュース",
                      exam_prep: "入試対策",
                      homework: "宿題の手伝い",
                      kids: "キッズ会話",
                      original_materials: "先生独自の教材",
                      specialized: "専門分野での語学",
                      lang_test: "語学検定対策",
                      corporate: "法人向け",
                      other: "その他"
                    },
                    en: {
                      conversation: "Daily Conversation",
                      free_talk: "Free Talk",
                      travel: "Travel Conversation",
                      cross_culture: "Cross-cultural Conversation",
                      business: "Business Conversation",
                      pronunciation: "Pronunciation Correction",
                      slang: "Slang and Idioms",
                      roleplay: "Role-playing",
                      media: "Movies, Music, etc.",
                      news: "News",
                      exam_prep: "Entrance Exam Prep",
                      homework: "Homework Help",
                      kids: "Kids' Conversation",
                      original_materials: "Teacher's Original Materials",
                      specialized: "Specialized Field Language",
                      lang_test: "Language Proficiency Test Prep",
                      corporate: "For Corporations",
                      other: "Other (Student's Request)"
                    }
                  }, 8)}
                </div>

                <div className="hs-reg-form-group hs-reg-grid-full">
                  <label data-lang-key="testPrepLabel">
                    {languageStrings[currentLang].testPrepLabel}
                  </label>
                  {renderCheckboxGroup('test_prep', {
                    ja: {
                      toeic: "TOEIC",
                      toefl: "TOEFL",
                      bulats: "BULATS",
                      eiken: "実用英語技能検定（英検）",
                      gmat: "GMAT",
                      ielts: "IELTS",
                      cambridge: "ケンブリッジ大学英語検定",
                      un: "国連公用語英語検定（国連英検）",
                      industrial: "工業英語能力検定（工業英検）",
                      topec: "TOPEC",
                      jhs_exam: "中学受験",
                      hs_exam: "高校受験",
                      uni_exam: "大学受験"
                    },
                    en: {
                      toeic: "TOEIC",
                      toefl: "TOEFL",
                      bulats: "BULATS",
                      eiken: "EIKEN",
                      gmat: "GMAT",
                      ielts: "IELTS",
                      cambridge: "Cambridge English",
                      un: "UNATE",
                      industrial: "STEP EIKEN",
                      topec: "TOPEC",
                      jhs_exam: "Jr. High Entrance Exam",
                      hs_exam: "High School Entrance Exam",
                      uni_exam: "University Entrance Exam"
                    }
                  })}
                </div>

                <div className="hs-reg-form-group hs-reg-grid-full">
                  <label data-lang-key="engCertLabel">
                    {languageStrings[currentLang].engCertLabel}
                  </label>
                  {renderCheckboxGroup('eng_cert', {
                    ja: {
                      celta: "CELTA",
                      tesol: "TESOL",
                      tecsol: "TECSOL",
                      tefl: "TESL/TEFL",
                      delta: "DELTA",
                      toeic: "TOEIC",
                      toefl: "TOEFL"
                    },
                    en: {
                      celta: "CELTA",
                      tesol: "TESOL",
                      tecsol: "TECSOL",
                      tefl: "TESL/TEFL",
                      delta: "DELTA",
                      toeic: "TOEIC",
                      toefl: "TOEFL"
                    }
                  })}
                </div>
              </section>

              <div className="hs-reg-btn-nav">
                <button
                  type="button"
                  className="hs-reg-btn hs-reg-btn-secondary"
                  onClick={() => prevStep(3)}
                  disabled={loading}
                >
                  <i className="fa-solid fa-arrow-left"></i>
                  <span data-lang-key="backBtn">
                    {languageStrings[currentLang].backBtn}
                  </span>
                </button>
                <button
                  type="button"
                  className="hs-reg-btn"
                  onClick={() => nextStep(5)}
                  disabled={loading}
                >
                  <span data-lang-key="nextBtn">
                    {languageStrings[currentLang].nextBtn}
                  </span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>

            {/* Step 5: Location & Fees */}
            <div className={`hs-reg-form-step ${currentStep === 5 ? 'active' : ''}`} id="step-5">
              <section className="hs-reg-form-section">
                <h3 className="hs-reg-form-section-title" data-lang-key="s5_title1">
                  {languageStrings[currentLang].s5_title1}
                </h3>
                <div className="hs-reg-form-grid">
                  <div className="hs-reg-form-group">
                    <label htmlFor="trial_fee" data-lang-key="trialFee">
                      {languageStrings[currentLang].trialFee}<span className="hs-reg-required">*</span>
                    </label>
                    <select
                      id="trial_fee"
                      name="trial_fee"
                      value={formData.trial_fee}
                      onChange={handleSelectChange}
                      required
                    >
                      {renderSelectOptions('trialFeeOptions')}
                    </select>
                  </div>
                  <div className="hs-reg-form-group">
                    <label htmlFor="private_fee" data-lang-key="privateFee">
                      {languageStrings[currentLang].privateFee}<span className="hs-reg-required">*</span>
                    </label>
                    <select
                      id="private_fee"
                      name="private_fee"
                      value={formData.private_fee}
                      onChange={handleSelectChange}
                      required
                    >
                      {renderSelectOptions('privateFeeOptions')}
                    </select>
                  </div>
                  <div className="hs-reg-form-group">
                    <label htmlFor="group_fee" data-lang-key="groupFee">
                      {languageStrings[currentLang].groupFee}
                    </label>
                    <select
                      id="group_fee"
                      name="group_fee"
                      value={formData.group_fee}
                      onChange={handleSelectChange}
                    >
                      {renderSelectOptions('groupFeeOptions', true)}
                    </select>
                  </div>
                  <div className="hs-reg-form-group">
                    <label htmlFor="online_fee" data-lang-key="onlineFee">
                      {languageStrings[currentLang].onlineFee}
                    </label>
                    <select
                      id="online_fee"
                      name="online_fee"
                      value={formData.online_fee}
                      onChange={handleSelectChange}
                    >
                      {renderSelectOptions('privateFeeOptions')}
                    </select>
                  </div>
                </div>
              </section>

              <section className="hs-reg-form-section">
                <h3 className="hs-reg-form-section-title" data-lang-key="s5_title2">
                  {languageStrings[currentLang].s5_title2}
                </h3>
                {renderScheduleMatrix()}
              </section>

              <section className="hs-reg-form-section">
                <h3 className="hs-reg-form-section-title" data-lang-key="s5_title3">
                  {languageStrings[currentLang].s5_title3}
                </h3>
                <div className="hs-reg-form-grid">
                  <div className="hs-reg-form-group hs-reg-grid-full">
                    <label data-lang-key="lessonArea">
                      {languageStrings[currentLang].lessonArea}<span className="hs-reg-required">*</span>
                    </label>
                    <div id="selected-areas-display">
                      {Object.keys(selectedAreas).length === 0 ? (
                        <div style={{ padding: '0.5rem' }}></div>
                      ) : (
                        renderSelectedAreaTags()
                      )}
                    </div>
                    <button
                      type="button"
                      className="hs-reg-btn hs-reg-btn-secondary"
                      style={{ marginTop: '1rem' }}
                      id="open-area-modal-btn"
                      onClick={() => {
                        populatePrefecturesInModal();
                        setShowAreaModal(true);
                      }}
                    >
                      <i className="fa-solid fa-map-location-dot"></i>
                      <span data-lang-key="selectAreaBtn">
                        {languageStrings[currentLang].selectAreaBtn}
                      </span>
                    </button>
                  </div>

                  <div className="hs-reg-form-group hs-reg-grid-full">
                    <label data-lang-key="lessonStation">
                      {languageStrings[currentLang].lessonStation}
                    </label>
                    <div id="selected-stations-display">
                      {Object.keys(selectedStations).length === 0 ? (
                        <div style={{ padding: '0.5rem' }}></div>
                      ) : (
                        renderSelectedStationTags()
                      )}
                    </div>
                    <button
                      type="button"
                      className="hs-reg-btn hs-reg-btn-secondary"
                      style={{ marginTop: '1rem' }}
                      id="open-station-modal-btn"
                      onClick={() => {
                        populateRegions();
                        setShowStationModal(true);
                      }}
                    >
                      <i className="fa-solid fa-train"></i>
                      <span data-lang-key="selectStationBtn">
                        {languageStrings[currentLang].selectStationBtn}
                      </span>
                    </button>
                  </div>

                  <div className="hs-reg-form-group hs-reg-grid-full">
                    <label data-lang-key="lessonLocation">
                      {languageStrings[currentLang].lessonLocation}<span className="hs-reg-required">*</span>
                    </label>
                    {renderCheckboxGroup('location_type', {
                      ja: {
                        cafe: "カフェ",
                        teacher_home: "講師の家",
                        student_home: "生徒の家",
                        park: "公園",
                        public: "その他の公共の場所"
                      },
                      en: {
                        cafe: "Cafe",
                        teacher_home: "Teacher's Home",
                        student_home: "Student's Home",
                        park: "Park",
                        public: "Other Public Places"
                      }
                    })}
                  </div>

                  <div className="hs-reg-form-group hs-reg-grid-full">
                    <label htmlFor="landmark" data-lang-key="landmark">
                      {languageStrings[currentLang].landmark}<span className="hs-reg-required">*</span>
                    </label>
                    <input
                      type="text"
                      id="landmark"
                      name="landmark"
                      value={formData.landmark}
                      onChange={handleInputChange}
                      required
                    />
                    <p className="hs-reg-help-text" data-lang-key="landmarkHelp">
                      {languageStrings[currentLang].landmarkHelp}
                    </p>
                  </div>

                  <div className="hs-reg-form-group hs-reg-grid-full">
                    <div className="hs-reg-selectable-item">
                      <input
                        type="checkbox"
                        id="station_negotiable"
                        name="station_negotiable"
                        checked={formData.station_negotiable}
                        onChange={handleInputChange}
                      />
                      <label htmlFor="station_negotiable">
                        <span data-lang-key="stationNegotiable">
                          {languageStrings[currentLang].stationNegotiable}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </section>

              <div className="hs-reg-btn-nav">
                <button
                  type="button"
                  className="hs-reg-btn hs-reg-btn-secondary"
                  onClick={() => prevStep(4)}
                  disabled={loading}
                >
                  <i className="fa-solid fa-arrow-left"></i>
                  <span data-lang-key="backBtn">
                    {languageStrings[currentLang].backBtn}
                  </span>
                </button>
                <button
                  type="button"
                  className="hs-reg-btn"
                  onClick={() => nextStep(6)}
                  disabled={loading}
                >
                  <span data-lang-key="nextBtn">
                    {languageStrings[currentLang].nextBtn}
                  </span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>

            {/* Step 6: Final Confirmation */}
            <div className={`hs-reg-form-step ${currentStep === 6 ? 'active' : ''}`} id="step-6">
              <section className="hs-reg-form-section">
                <h3 className="hs-reg-form-section-title" data-lang-key="s6_title1">
                  {languageStrings[currentLang].s6_title1}
                </h3>
                <div className="hs-reg-form-grid">
                  <div className="hs-reg-form-group">
                    <label htmlFor="hobbies" data-lang-key="hobbies">
                      {languageStrings[currentLang].hobbies}
                    </label>
                    <input
                      type="text"
                      id="hobbies"
                      name="hobbies"
                      value={formData.hobbies}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="hs-reg-form-group">
                    <label htmlFor="movies" data-lang-key="movies">
                      {languageStrings[currentLang].movies}
                    </label>
                    <input
                      type="text"
                      id="movies"
                      name="movies"
                      value={formData.movies}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="hs-reg-form-group">
                    <label htmlFor="music" data-lang-key="music">
                      {languageStrings[currentLang].music}
                    </label>
                    <input
                      type="text"
                      id="music"
                      name="music"
                      value={formData.music}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="hs-reg-form-group">
                    <label htmlFor="food" data-lang-key="food">
                      {languageStrings[currentLang].food}
                    </label>
                    <input
                      type="text"
                      id="food"
                      name="food"
                      value={formData.food}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="hs-reg-form-group hs-reg-grid-full">
                    <label htmlFor="love_japan" data-lang-key="loveJapan">
                      {languageStrings[currentLang].loveJapan}
                    </label>
                    <input
                      type="text"
                      id="love_japan"
                      name="love_japan"
                      value={formData.love_japan}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="hs-reg-form-group hs-reg-grid-full">
                    <label htmlFor="message" data-lang-key="messageToStudent">
                      {languageStrings[currentLang].messageToStudent}<span className="hs-reg-required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                </div>
              </section>

              <section className="hs-reg-form-section">
                <h3 className="hs-reg-form-section-title" data-lang-key="s6_title2">
                  {languageStrings[currentLang].s6_title2}
                </h3>
                <div className="hs-reg-checkbox-group hs-reg-grid-full">
                  <label>
                    <input
                      type="checkbox"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleInputChange}
                      required
                    />
                    <a href="#" target="_blank" data-lang-key="termsLink">
                      {languageStrings[currentLang].termsLink}
                    </a>
                    <span data-lang-key="termsAgree">
                      {languageStrings[currentLang].termsAgree}
                    </span>
                    <span className="hs-reg-required">*</span>
                  </label>
                </div>
                <div className="hs-reg-checkbox-group hs-reg-grid-full">
                  <label>
                    <input
                      type="checkbox"
                      name="delete_request"
                      checked={formData.delete_request}
                      onChange={handleInputChange}
                    />
                    <span data-lang-key="deleteRequest">
                      {languageStrings[currentLang].deleteRequest}
                    </span>
                  </label>
                </div>
              </section>

              <div className="hs-reg-btn-nav">
                <button
                  type="button"
                  className="hs-reg-btn hs-reg-btn-secondary"
                  onClick={() => prevStep(5)}
                  disabled={loading}
                >
                  <i className="fa-solid fa-arrow-left"></i>
                  <span data-lang-key="backBtn">
                    {languageStrings[currentLang].backBtn}
                  </span>
                </button>
                <button
                  type="submit"
                  className="hs-reg-btn"
                >
                  <span data-lang-key="submitBtn">
                    {languageStrings[currentLang].submitBtn}
                  </span>
                  <i className="fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>

      {/* Area Modal */}
      <div className={`modal-overlay ${showAreaModal ? 'active' : ''}`} id="area-modal">
        <div className="modal-content">
          <div className="modal-header">
            <h3 data-lang-key="areaModalTitle">
              {languageStrings[currentLang].areaModalTitle}
            </h3>
            <button
              className="modal-close"
              id="area-modal-close-btn"
              onClick={() => setShowAreaModal(false)}
            >
              &times;
            </button>
          </div>
          <div className="modal-body">
            <div className="area-column area-column-prefectures">
              <ul className="area-prefecture-list" id="area-prefecture-list">
                {Object.keys(cityData).map(prefKey => (
                  <li key={prefKey}>
                    <button
                      className={selectedPrefForArea === prefKey ? 'selected' : ''}
                      onClick={() => setSelectedPrefForArea(prefKey)}
                    >
                      {allPrefectures[prefKey][currentLang]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="area-column area-column-cities">
              <div className="area-city-grid" id="area-city-grid">
                {selectedPrefForArea && cityData[selectedPrefForArea] &&
                  Array.isArray(cityData[selectedPrefForArea][currentLang]) &&
                  cityData[selectedPrefForArea][currentLang].map((cityName, index) => {
                    const enCities = cityData[selectedPrefForArea]['en'];
                    const cityKey = Array.isArray(enCities) && enCities[index]
                      ? enCities[index].toLowerCase().replace(/ /g, '-')
                      : cityName.toLowerCase().replace(/ /g, '-');
                    const isChecked = selectedAreas[selectedPrefForArea]?.cities?.includes(cityKey) || false;
                    return (
                      <div key={cityKey} className="hs-reg-selectable-item">
                        <input
                          type="checkbox"
                          id={`modal-city-${selectedPrefForArea}-${cityKey}`}
                          name="modal_city"
                          value={cityKey}
                          checked={isChecked}
                          onChange={(e) => handleCitySelection(selectedPrefForArea, cityKey, e.target.checked)}
                        />
                        <label htmlFor={`modal-city-${selectedPrefForArea}-${cityKey}`}>
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
            <button
              className="hs-reg-btn"
              id="area-modal-confirm-btn"
              onClick={() => setShowAreaModal(false)}
              data-lang-key="confirmBtn"
            >
              {languageStrings[currentLang].confirmBtn}
            </button>
          </div>
        </div>
      </div>

      {/* Station Modal */}
      <div className={`modal-overlay ${showStationModal ? 'active' : ''}`} id="station-modal">
        <div className="modal-content">
          <div className="modal-header">
            <h3 data-lang-key="stationModalTitle">
              {languageStrings[currentLang].stationModalTitle}
            </h3>
            <button
              className="modal-close"
              id="station-modal-close-btn"
              onClick={() => setShowStationModal(false)}
            >
              &times;
            </button>
          </div>
          <div className="modal-body">
            <div className="station-column" id="station-region-column">
              <h4 data-lang-key="region">
                {languageStrings[currentLang].region}
              </h4>
              <ul className="station-list" id="station-region-list">
                {Object.keys(stationData).map(regionKey => (
                  <li key={regionKey}>
                    <button
                      className={selectedRegion === regionKey ? 'selected' : ''}
                      onClick={() => {
                        setSelectedRegion(regionKey);
                        setSelectedPrefForStation(Object.keys(stationData[regionKey].prefectures)[0]);
                      }}
                    >
                      {stationData[regionKey][currentLang]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="station-column" id="station-prefecture-column">
              <h4 data-lang-key="prefecture">
                {languageStrings[currentLang].prefecture}
              </h4>
              <ul className="station-list" id="station-prefecture-list">
                {selectedRegion && stationData[selectedRegion]?.prefectures &&
                  Object.keys(stationData[selectedRegion].prefectures).map(prefKey => (
                    <li key={prefKey}>
                      <button
                        className={selectedPrefForStation === prefKey ? 'selected' : ''}
                        onClick={() => {
                          setSelectedPrefForStation(prefKey);
                          const lines = stationData[selectedRegion]?.prefectures[prefKey]?.lines;
                          if (lines && Object.keys(lines).length > 0) {
                            setSelectedLine(Object.keys(lines)[0]);
                          }
                        }}
                      >
                        {stationData[selectedRegion]?.prefectures[prefKey]?.[currentLang] || prefKey}
                      </button>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="station-column" id="station-line-column">
              <h4 data-lang-key="line">
                {languageStrings[currentLang].line}
              </h4>
              <ul className="station-list" id="station-line-list">
                {selectedRegion && selectedPrefForStation &&
                  stationData[selectedRegion]?.prefectures[selectedPrefForStation]?.lines &&
                  Object.keys(stationData[selectedRegion].prefectures[selectedPrefForStation].lines).map(lineKey => (
                    <li key={lineKey}>
                      <button
                        className={selectedLine === lineKey ? 'selected' : ''}
                        onClick={() => setSelectedLine(lineKey)}
                      >
                        {stationData[selectedRegion]?.prefectures[selectedPrefForStation]?.lines[lineKey]?.[currentLang] || lineKey}
                      </button>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="station-column" id="station-station-column">
              <h4 data-lang-key="station">
                {languageStrings[currentLang].station}
              </h4>
              <div className="station-checkbox-grid" id="station-station-grid">
                {selectedRegion && selectedPrefForStation && selectedLine &&
                  Array.isArray(stationData[selectedRegion]?.prefectures[selectedPrefForStation]?.lines[selectedLine]?.stations) &&
                  stationData[selectedRegion].prefectures[selectedPrefForStation].lines[selectedLine].stations.map(station => {
                    const isChecked = selectedStations[selectedLine]?.stations?.some(s => s.en === station.en) || false;
                    const stationId = `station-${selectedLine}-${station?.en?.toLowerCase().replace(/\s/g, '-') || 'unknown'}`;
                    return (
                      <div key={stationId} className="hs-reg-selectable-item">
                        <input
                          type="checkbox"
                          id={stationId}
                          checked={isChecked}
                          onChange={(e) => handleStationSelection(selectedLine, station, e.target.checked)}
                        />
                        <label htmlFor={stationId}>
                          {station?.[currentLang] || station?.en || 'Unknown'}
                        </label>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              className="hs-reg-btn"
              id="station-modal-confirm-btn"
              onClick={() => setShowStationModal(false)}
              data-lang-key="confirmBtn"
            >
              {languageStrings[currentLang].confirmBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherRegistrationForm;