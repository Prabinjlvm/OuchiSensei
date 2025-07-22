import React, { useEffect, useRef, useState } from 'react';
import './TeacherProfile.css';
import { useLocation } from 'react-router-dom';
import teachers from './teachers';
import { getAllMuncipalities, getAllPrefectures, getAllTeachers } from '../../APIs/GET';
import { getTeacherDetails } from '../../APIs/GET';

export default function TeacherProfile() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const idParam = queryParams.get('id');
  const id = idParam && !isNaN(Number(idParam)) ? Number(idParam) : null;
  // // Support ?=idX format
  // let id = null;
  // if (location.search.startsWith('?=id')) {
  //   id = location.search.replace('?=id', '');
  // }
 
  const [teachers, setTeachers] = useState([]);
  const [municipalities, setMunicipalities] = useState([]);
  const [prefectures, setPrefectures] = useState([]);
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navLinksRef = useRef(null);
  const mainNavRef = useRef(null);
  const sectionRefs = useRef({});
  const navAnchorsRef = useRef([]);
  const teacherCardContainerRef = useRef(null);
  const scrollLeftBtnRef = useRef(null);
  const scrollRightBtnRef = useRef(null);
  



const fetchTeacherDetails = async (id) => {
  console.log('Teacher ID:', id);
  try {

    const data = await getTeacherDetails(id);
    console.log('API response:', data);

    if (data?.success && data?.data) {
      console.log('Teacher details:', data.data);
      setTeachers(data.data); 
    } else {
      console.error('Unexpected response format:', data);
      setTeachers(null);
    }
  } catch (error) {
    console.error('API call failed:', error);
    setTeachers(null);
  }
};

  

  const fetchMunicipalities = async () => {
    try {
      const data = await getAllMuncipalities();
     
      if (data?.municipalities) {
        setMunicipalities(data.municipalities);
      } else {
        console.error('Municipalities array not found in response:', data);
        setMunicipalities([]); 
      }
    } catch (error) {
      console.error('Error fetching municipalities:', error);
      setMunicipalities([]);
    }
  };

  const fetchPrefectures = async () => {
    try {
      const data = await getAllPrefectures();

      // Ensure the response contains the prefectures array
      if (data?.prefectures) {
        setPrefectures(data.prefectures); 
      } else {
        console.error('Prefectures array not found in response:', data);
        setPrefectures([]); 
      }
    } catch (error) {
      console.error('Error fetching prefectures:', error);
      setPrefectures([]); 
    }
  };

  useEffect(() => {
    fetchTeacherDetails(id);
    fetchMunicipalities();
    fetchPrefectures();
  }, [id]);

  const getMunicipalityName = (ids) => {
    console.log('Teacher Municipality IDs:', ids);
    if (!Array.isArray(ids)) {
      // If it's a single ID, convert it to an array for consistency
      ids = [ids];
    }
    return ids
      .map((id) => {
        const municipality = municipalities.find((m) => m.id == id);
       console.log('Found Municipality:', municipality);
        return municipality ? municipality.name : 'Unknown Municipality';
        
      })
      .join(', ');
  };
  

  const getPrefectureName = (id) => {
    console.log('Teacher Prefecture ID:', id);
    if (!Array.isArray(prefectures)) {
      console.error('Prefectures is not an array:', prefectures);
      return 'Unknown Prefecture';
    }
    const prefecture = prefectures.find((p) => p.id === id);
    return prefecture ? prefecture.name : 'Unknown Prefecture';
  };

  // Similar teachers data
  const similarTeachersData = [
    { name: "Karesa先生", price: "¥5000", img: "https://placehold.co/140x180/E0E0E0/757575?text=Karesa", link: "#teacher1" },
    { name: "Elcisco先生", price: "¥3000", img: "https://placehold.co/140x180/E0E0E0/757575?text=Elcisco", link: "#teacher2" },
    { name: "Soyini先生", price: "¥2500", img: "https://placehold.co/140x180/E0E0E0/757575?text=Soyini", link: "#teacher3" },
    { name: "Aylesha先生", price: "¥2500", img: "https://placehold.co/140x180/E0E0E0/757575?text=Aylesha", link: "#teacher4" },
    { name: "Kisha先生", price: "¥2000", img: "https://placehold.co/140x180/E0E0E0/757575?text=Kisha", link: "#teacher5" },
    { name: "Marvin先生", price: "¥5000", img: "https://placehold.co/140x180/E0E0E0/757575?text=Marvin", link: "#teacher6" },
    { name: "Matthew先生", price: "¥3500", img: "https://placehold.co/140x180/E0E0E0/757575?text=Matthew", link: "#teacher7" },
    { name: "De先生", price: "¥4000", img: "https://placehold.co/140x180/E0E0E0/757575?text=De", link: "#teacher8" }
  ];

  useEffect(() => {
    const container = teacherCardContainerRef.current;
    const leftBtn = scrollLeftBtnRef.current;
    const rightBtn = scrollRightBtnRef.current;
    if (container && leftBtn && rightBtn) {
      const scrollAmount = 200;
      const scrollLeft = () => container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      const scrollRight = () => container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      leftBtn.addEventListener('click', scrollLeft);
      rightBtn.addEventListener('click', scrollRight);
      return () => {
        leftBtn.removeEventListener('click', scrollLeft);
        rightBtn.removeEventListener('click', scrollRight);
      };
    }
  }, []);

  const teacher = teachers && teachers.id === id ? teachers : null;
  console.log('Teacher found as listed:', teacher);

  // If no teacher is found, display a "Teacher not found" message
  if (!teacher) {
    return <div>Teacher not found</div>;
  }

  // Modal logic
  const handleInquiry = (type) => {
    let message = '';
    switch (type) {
      case 'trial': message = '体験レッスンのお申し込みに進みます。'; break;
      case 'cart': message = `${teacher?.first_name} ${teacher?.last_name}をマイ先生カートに追加しました。`; break;
      case 'question': message = `${teacher?.first_name} ${teacher?.last_name}への質問フォームに移動します。`; break;
      default: message = '';
    }
    setModalMessage(message + ' (これはデモです)');
    setShowModal(true);
    setTimeout(() => setShowModal(false), 3000);
  };

  return (
    <>
      <style>{`
        .hover\\:text-accent-orange:hover {
          color: #ff9800 !important;
        }
        .text-base-green { color: #4A7D1D !important; }
        .bg-green-200 { background-color: #a5d6a7 !important; }
        .text-green-700 { color: #388e3c !important; }
        .bg-green-50 { background-color: #e8f5e9 !important; }
        .border-green-200 { border-color: #a5d6a7 !important; }
        .text-green-500 { color: #4caf50 !important; }
        .section-title {
          font-size: 1.875rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 3px solid #4a7d1d;
          display: inline-block;
          color: #4A7D1D !important;
        }
        @media (max-width: 768px) {
          .teacher-sticky-nav {
            top: 105px !important;
          }
        }
      `}</style>
      {/* Modal */}
      {showModal && (
        <div style={{ position: 'fixed', top: 20, left: '50%', transform: 'translateX(-50%)', backgroundColor: '#333', color: 'white', padding: 
        '15px 25px', borderRadius: 8, boxShadow: '0 4px 15px rgba(0,0,0,0.2)', zIndex: 1001, transition: 'opacity 0.3s ease', opacity: 1 }}>
          {modalMessage}
        </div>
      )}
      {/* Header Section */}

      <header className="base-bg-color text-white shadow-md sticky teacher-sticky-nav" style={{ top: '82px', zIndex: 50 }}>
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <nav
            id="navLinks"
            className="w-full lg:w-auto py-1 lg:flex flex-col lg:flex-row lg:items-center mt-2 lg:mt-0 space-y-2 lg:space-y-0 lg:space-x-3"
          >
            <a
              href="#message"
              className="px-3 py-2 hover:text-accent-orange rounded-md"
            >
              メッセージ
            </a>
            <a
              href="#features"
              className="px-3 py-2 hover:text-accent-orange rounded-md"
            >
              先生の強み
            </a>
            <a
              href="#schedule"
              className="px-3 py-2 hover:text-accent-orange rounded-md"
            >
              スケジュール
            </a>
            <a
              href="#lessons"
              className="px-3 py-2 hover:text-accent-orange rounded-md"
            >
              レッスン情報
            </a>
            <a
              href="#pricing"
              className="px-3 py-2 hover:text-accent-orange rounded-md"
            >
              料金
            </a>
            <a href="#area" className="px-3 py-2 hover:text-accent-orange rounded-md">
              エリア
            </a>
            <a
              href="#about"
              className="px-3 py-2 hover:text-accent-orange rounded-md"
            >
              詳細情報
            </a>
            <a
              href="#contact-cta"
              className="px-3 py-2 rounded-md font-semibold accent-bg-color hover:bg-orange-600"
              style={{ padding: "0px 4px 0px 4px" }}
            >
              ▶お申込み
            </a>
          </nav>
        </div>
      </header>


      {/* Header Section */}
      <section className="hero-bg-image bg-gray-200 text-white relative pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <img
            src={teacher?.profile_photo}
            alt={`${teacher?.first_name}`}
            className="teacher-avatar mx-auto mb-6"
            onerror="this.onerror=null; this.src='https://placehold.co/150x150/cccccc/333333?text=Ash+Sensei';"
          />
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            {teacher?.first_name} {teacher?.last_name}プロフィール (ID: {id})
          </h1>
          <p className="text-xl md:text-2xl mb-2">
            英語で夢を叶えよう！福山・尾道・笠岡エリアの実力派講師
          </p>
          <p className="text-lg mb-1">
            ジャマイカ出身 <span className="text-2xl">🇯🇲</span> |
            ネイティブスピーカー
          </p>
          <p className="text-lg mb-6">
            <i className="fas fa-map-marker-alt" /> 主なレッスンエリア:
            広島県福山市、尾道市、岡山県笠岡市、オンライン
          </p>
          <div className="space-y-3 md:space-y-0 md:space-x-4">
            <a
              href="#contact-cta"
              className="accent-bg-color hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-md
               transition duration-300 inline-block"
            >
              <i className="fas fa-calendar-check" /> 体験レッスンを申し込む
            </a>
            <a
              href="#pricing"
              className="base-bg-color hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-md
               transition duration-300 inline-block"
            >
              <i className="fas fa-tag" /> レッスン料金を見る
            </a>
          </div>
          <div className="mt-4 text-sm">
            <span className="inline-block bg-green-200 text-base-green px-2 py-1 rounded-full text-xs font-semibold mr-2">
              プロフィール更新済!
            </span>
            <span>最終更新日: {teacher?.japan_departure}</span>
          </div>
        </div>
      </section>
      <main className="container mx-auto p-4 md:p-8">
        <nav className="mb-8 text-sm text-gray-600" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex mt-2">
            <li className="flex items-center">
              <a href="list.html" className="hover:text-base-green">
                ホーム
              </a>
              <i className="fas fa-angle-right mx-2" />
            </li>
            <li className="flex items-center">
              <a
                href="list59a8.html?language=english"
                className="hover:text-base-green"
              >
                英会話講師
              </a>
              <i className="fas fa-angle-right mx-2" />
            </li>
            <li className="flex items-center">
              <a
                href="list6d11.html?area=hiroshima"
                className="hover:text-base-green"
              >
                広島県
              </a>
              <i className="fas fa-angle-right mx-2" />
            </li>
            <li>{teacher?.first_name} {teacher?.last_name}</li>
          </ol>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            <section id="message" className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="section-title">Ash先生からのメッセージ</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ash先生の温かい人柄と英語教育への情熱が伝わるメッセージです。日本語と英語の両方で、先生の思いやレッスンスタイルへの期待感を高めます。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-700">
                    生徒の皆さんへ <span className="text-lg">🇯🇵</span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    こんにちは！アッシュです。楽しく実践的に英語を学びませんか？✨
                    子ども向けの基礎学習、試験対策、ビジネス英語など、あなたの目的に合わせたレッスンを行います！
                    <br />
                    <br />
                    英語を楽しく、そして日常生活や仕事で役立つように教えます。間違えても大丈夫！一歩ずつ上達していきましょう😊
                    <br />
                    <br />
                    一緒に学べるのを楽しみにしています！
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-700">
                    Hello! I'm Ash <span className="text-lg">🇬🇧/🇺🇸</span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    An English tutor excited to help you improve your skills in a
                    fun and practical way! Whether you're a child learning the
                    basics, a student preparing for exams, or a professional looking
                    to improve business communication, I'll customize lessons to fit
                    your needs.
                    <br />
                    <br />
                    My goal is to make learning English enjoyable and useful for
                    your everyday life. Don't worry about making mistakes—every step
                    brings progress! Let's learn together at your own pace.
                    <br />
                    <br />
                    Looking forward to meeting you! 😊
                  </p>
                </div>
              </div>
            </section>
            <section id="schedule" className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="section-title">レッスン可能時間の目安</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ash先生のレッスンが可能な時間帯の目安です。曜日ごと、時間帯ごとに確認できます。実際の予約状況は先生と直接ご相談ください。
                下部には、曜日ごとの可能時間帯数をグラフで示しています。
              </p>
              <div className="overflow-x-auto mb-6 shadow rounded-md">
                <table className="min-w-full text-center border border-gray-200">
                  <thead className="bg-gray-100">
                    <tr className="text-sm">
                      <th className="p-3 border border-gray-200">時間帯</th>
                      <th className="p-3 border border-gray-200">月</th>
                      <th className="p-3 border border-gray-200">火</th>
                      <th className="p-3 border border-gray-200">水</th>
                      <th className="p-3 border border-gray-200">木</th>
                      <th className="p-3 border border-gray-200">金</th>
                      <th className="p-3 border border-gray-200">土</th>
                      <th className="p-3 border border-gray-200">日</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="hover:bg-green-50 transition-colors duration-150">
                      <td className="p-3 border border-gray-200 font-medium">
                        早朝
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-green-50 transition-colors duration-150">
                      <td className="p-3 border border-gray-200 font-medium">
                        午前中
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                    </tr>
                    <tr className="hover:bg-green-50 transition-colors duration-150">
                      <td className="p-3 border border-gray-200 font-medium">
                        お昼前後
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                    </tr>
                    <tr className="bg-gray-50 hover:bg-green-50 transition-colors duration-150">
                      <td className="p-3 border border-gray-200 font-medium">
                        午後
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                    </tr>
                    <tr className="hover:bg-green-50 transition-colors duration-150">
                      <td className="p-3 border border-gray-200 font-medium">
                        夕方・夜
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                      <td className="p-3 border border-gray-200">
                        <i className="fas fa-check-circle text-green-500" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                ※表記中の時間帯でのレッスンを保証するものではありません。先生によってはスケジュールが常に変わりやすいため
                、具体的なレッスンの日時はご利用者様と先生との間の双方の都合で個人的にお取り決めください。
              </p>
            </section>
            <section id="lessons" className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="section-title">レッスン情報</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ash先生が提供するレッスンの詳細です。対応言語、対象者、レベル、得意な内容、レッスン場所など、あなたにぴったりのレッスンを見つけるための
                情報が満載です。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <i className="fas fa-language mr-2 base-text-color" />
                    レッスン言語
                  </h3>
                  <p>{teacher?.native_language}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <i className="fas fa-users mr-2 base-text-color" />
                    対象となる方
                  </h3>
                  <ul className="custom-list text-gray-600">
                    {(teacher.targetGroups || []).map((group, index) => (
                      <li key={index}>{group}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <i className="fas fa-layer-group mr-2 base-text-color" />
                    対応レベル
                  </h3>
                  <ul className="custom-list text-gray-600">
                    {(teacher.levels || []).map((level, index) => (
                      <li key={index}>{level}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <i className="fas fa-chalkboard-teacher mr-2 base-text-color" />
                    得意なレッスン
                  </h3>
                  <ul className="custom-list text-gray-600">
                    {(teacher.favoriteLessons || []).map((lesson, index) => (
                      <li key={index}>{lesson}</li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <i className="fas fa-map-marked-alt mr-2 base-text-color" />
                    レッスン場所
                  </h3>
                  <ul className="custom-list text-gray-600">
                    {(teacher.locations || []).map((location, index) => (
                      <li key={index}>{location}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
            <section id="area" className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="section-title">レッスン対応エリア</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ash先生がレッスンを提供可能なエリアです。市区町村に加え、主要な路線と駅もご確認いただけます。オンラインレッスンは全国対応です。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <i className="fas fa-city mr-2 base-text-color" />
                    主な対応市区町村
                  </h3>
                  <div>
                    <h4 className="text-md font-semibold mb-1 text-gray-700">
                      <i className="fas fa-map-pin mr-1 text-sm base-text-color" />
                      {getPrefectureName(teacher.prefectures)}
                    </h4>

                    <ul className="custom-list text-gray-600 ml-4">
                      <li>
                        <a href="#" className="hover:text-accent-orange underline">
                          {getMunicipalityName(teacher.municipality)}
                        </a>{" "}
                        ({(teacher.stations || []).map((station) => (
                          <span key={station.id}>{station.name} </span>
                        ))})
                      </li>
                    </ul>
                  </div>
                  {/* <div className="mt-3">
                    <h4 className="text-md font-semibold mb-1 text-gray-700">
                      <i className="fas fa-map-pin mr-1 text-sm base-text-color" />
                      岡山県
                    </h4>
                    <ul className="custom-list text-gray-600 ml-4">
                      {(teacher.okayamaCities || []).map((city, index) => (
                        <li key={index}>
                          <a
                            href={city.link}
                            className="hover:text-accent-orange underline"
                          >
                            {city.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div> */}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <i className="fas fa-train mr-2 base-text-color" />
                    主な対応路線・駅
                  </h3>
                  <div className="station-list">
                    <h4 className="station-list-title">JR山陽本線</h4>
                    <ul>
                      {(teacher.sanyoLineStations || []).map((station, index) => (
                        <li key={index}>
                          <a href={station.link}>
                            {station.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <h4 className="station-list-title">JR福塩線</h4>
                    <ul>
                      {(teacher.fukuenLineStations || []).map((station, index) => (
                        <li key={index}>
                          <a href={station.link}>
                            {station.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:col-span-2 mt-4">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <i className="fas fa-globe-americas mr-2 base-text-color" />
                    オンラインレッスン
                  </h3>
                  <p className="text-gray-600">
                    日本全国、海外からでも受講可能です。
                  </p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <i className="fas fa-location-arrow mr-2 base-text-color" />
                    望ましいレッスンのロケーション
                  </h3>
                  <p className="text-gray-600">
                    {teacher?.preferredLocation}
                  </p>
                </div>
              </div>
            </section>
            <section id="about" className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="section-title">Ash先生についてもっと詳しく</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ash先生のバックグラウンドやパーソナリティをより深く知ることができます。学歴や職歴、資格、そして趣味や好きなことなどを通じて、先生との相性を確かめてみましょう。
              </p>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-gray-700">
                  <p>
                    <strong className="font-semibold">
                      <i className="fas fa-flag mr-1 base-text-color" />
                      国籍:
                    </strong>{" "}
                    {teacher?.nationality}
                  </p>
                  <p>
                    <strong className="font-semibold">
                      <i className="fas fa-venus-mars mr-1 base-text-color" />
                      性別:
                    </strong>{" "}
                    {teacher?.gender}
                  </p>
                  <p>
                    <strong className="font-semibold">
                      <i className="fas fa-birthday-cake mr-1 base-text-color" />
                      年代:
                    </strong>{" "}
                    {teacher?.ageRange}
                  </p>
                  <p>
                    <strong className="font-semibold">
                      <i className="fas fa-comment-dots mr-1 base-text-color" />
                      母国語:
                    </strong>{" "}
                    {teacher.native_Language}
                  </p>
                  <p>
                    <strong className="font-semibold">
                      <i className="fas fa-graduation-cap mr-1 base-text-color" />
                      最終学歴:
                    </strong>{" "}
                    {teacher.education}
                  </p>
                  <p>
                    <strong className="font-semibold">
                      <i className="fas fa-atom mr-1 base-text-color" />
                      専攻:
                    </strong>{" "}
                    {teacher?.major}
                  </p>
                  <p>
                    <strong className="font-semibold">
                      <i className="fas fa-user-tie mr-1 base-text-color" />
                      現在の職業:
                    </strong>{" "}
                    {teacher.current_occupation}
                  </p>
                  <p>
                    <strong className="font-semibold">
                      <i className="fas fa-plane-departure mr-1 base-text-color" />
                      日本滞在歴:
                    </strong>{" "}
                    {teacher.japan_live_ymd}
                  </p>
                  <p>
                    <strong className="font-semibold">
                      <i className="fas fa-comments mr-1 base-text-color" />
                      日本語レベル:
                    </strong>{" "}
                    {teacher.japanese_language_skills}
                  </p>
                  <p>
                    <strong className="font-semibold">
                      <i className="fas fa-certificate mr-1 base-text-color" />
                      資格:
                    </strong>{" "}
                    {(teacher?.qualifications || []).join(', ')}
                  </p>
                  <p>
                    <strong className="font-semibold">
                      <i className="fas fa-history mr-1 base-text-color" />
                      講師経験:
                    </strong>{" "}
                    {teacher.teaching_experience}
                  </p>
                  <p className="sm:col-span-2">
                    <strong className="font-semibold">
                      <i className="fas fa-star mr-1 base-text-color" />
                      特徴:
                    </strong>{" "}
                    {teacher?.features}
                  </p>
                </div>
                <hr className="my-6" />
                <div className="space-y-3 text-sm">
                  <p>
                    <strong className="font-semibold text-base-green">
                      <i className="fas fa-heart mr-1" />
                      趣味・好きなこと:
                    </strong>{" "}
                    {teacher?.hobby_interest || '情報がありません'}
                  </p>
                  <p>
                    <strong className="font-semibold text-base-green">
                      <i className="fas fa-film mr-1" />
                      好きな映画:
                    </strong>{" "}
                    {teacher?.favorite_movie || '情報がありません'}
                  </p>
                  <p>
                    <strong className="font-semibold text-base-green">
                      <i className="fas fa-music mr-1" />
                      好きな音楽:
                    </strong>{" "}
                    {teacher?.favorite_music || '情報がありません'}
                  </p>
                  <p>
                    <strong className="font-semibold text-base-green">
                      <i className="fas fa-utensils mr-1" />
                      好きな食べ物:
                    </strong>{" "}
                    {teacher?.favorite_food || '情報がありません'}
                  </p>
                  <p>
                    <strong className="font-semibold text-base-green">
                      <i className="fas fa-torii-gate mr-1" />
                      日本の好きなところ:
                    </strong>{" "}
                    {teacher?.favoritePlaces || '情報がありません'}
                  </p>
                </div>
              </div>
            </section>
          </div>
          <aside className="lg:col-span-1 space-y-8">
            <div className="sticky top-24">
              <section
                id="pricing"
                className="bg-white p-6 rounded-lg shadow-lg mb-8"
              >
                <h2 className="section-title text-2xl mb-6">レッスン料金</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Ash先生のレッスン料金プランです。ご自身の目的や予算に合わせてお選びいただけます。料金は全て1時間あたりの税込価格です。
                </p>
                <div className="space-y-4">
                  <div className="p-4 border border-green-200 rounded-md bg-green-50 shadow-sm">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-green-700">
                        体験レッスン
                      </h3>
                      <p className="text-xl font-bold text-green-700">¥{teacher.trialPrice}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      （初回限定 / 60分）
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-md shadow-sm">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">マンツーマン</h3>
                      <p className="text-xl font-bold">¥{teacher.one_on_one_lesson_fee}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      （1時間あたり / 1名）
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-md shadow-sm">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">グループレッスン</h3>
                      <p className="text-xl font-bold">¥{teacher.group_lesson_fee}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      （1時間あたり / 1名）
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-md shadow-sm">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">オンラインレッスン</h3>
                      <p className="text-xl font-bold">¥{teacher.group_lesson_fee}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      （1時間あたり / 1名）
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-xs text-gray-500">
                  ※対面レッスンの場合、場所により別途交通費実費をいただくことがあります。詳細はお問い合わせください。
                </p>
              </section>
              <section
                id="contact-cta"
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h2 className="section-title text-2xl mb-6">
                  お申込み・お問い合わせ
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Ash先生のレッスンに興味をお持ちいただきありがとうございます！体験レッスンのお申込みや、その他ご不明な点はお気軽にご連絡ください。
                </p>
                <div className="space-y-3">
                  {/*
                      <button onclick="handleInquiry('trial')" class="w-full accent-bg-color hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg text-lg shadow-md transition duration-300">
                          <i class="fas fa-calendar-check"></i> 体験レッスンを申し込む
                      </button>
*/}
                  <div className="space-y-3">
                    <button
                      onclick="handleInquiry('trial')"
                      className="w-full accent-bg-color hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg text-lg shadow-md transition duration-300"
                    >
                      <i className="fas fa-calendar-check" />
                      マイ先生カートへ追加
                    </button>
                    {/*

                      <button onclick="handleInquiry('cart')" class="w-full base-bg-color hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg text-lg shadow-md transition duration-300">
                          <i class="fas fa-shopping-cart"></i> マイ先生カートへ追加
                      </button>
                       <button onclick="handleInquiry('question')" class="w-full border border-base-green base-text-color hover:bg-green-50 font-semibold py-3 px-4 rounded-lg text-lg shadow-sm transition duration-300 mt-2">
                          <i class="fas fa-envelope"></i> 先生に質問する
                      </button>
*/}
                  </div>
                </div>
              </section>
            </div>
          </aside>
        </div >
        {/* Similar Teachers Section */}
        < section id="similar-teachers" className="mt-16" >
          <h2 className="section-title text-center mb-8">こんな先生をお探しかも</h2>
          <p className="text-gray-600 mb-8 text-center leading-relaxed">
            {teacher.name}以外にも、あなたの希望に合う先生がいるかもしれません。こちらで他の先生もチェックしてみましょう。
          </p>
          <div className="relative">
            <button
              id="scrollLeftBtn"
              ref={scrollLeftBtnRef}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-base-green transition-colors duration-150"
            >
              <i className="fas fa-chevron-left fa-lg" />
            </button>
            <div
              id="teacherCardContainer"
              ref={teacherCardContainerRef}
              className="teacher-card-container space-x-4 px-2 py-2 flex overflow-x-auto"
              style={{ scrollBehavior: 'smooth' }}
            >
              {/* {similarTeachersData.map((simTeacher, idx) => (
                <a
                  key={idx}
                  href={simTeacher.link}
                  className="teacher-card bg-white rounded-lg shadow-md p-3 text-center block hover:shadow-xl min-w-[140px] max-w-[140px] mx-1"
                  style={{ flex: '0 0 140px' }}
                >
                  <img
                    src={simTeacher.img}
                    alt={`${simTeacher.name}のプロフィール写真`}
                    className="w-full h-36 object-cover rounded-md mb-2"
                    onError={e => { e.target.onerror = null; e.target.src = 'https://placehold.co/140x180/cccccc/333333?text=Teacher'; }}
                  />
                  <h4 className="font-semibold text-sm text-gray-800 truncate">{simTeacher.name}</h4>
                  <p className="text-xs base-text-color font-bold">{simTeacher.price}</p>
                </a>
              ))} */}
            </div>
            <button
              id="scrollRightBtn"
              ref={scrollRightBtnRef}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-base-green transition-colors duration-150"
            >
              <i className="fas fa-chevron-right fa-lg" />
            </button>
          </div>
        </section >
      </main >
    </>
  );
}