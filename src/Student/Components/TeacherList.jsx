import React, { useState, useEffect } from 'react';
import { FaFilter, FaChevronLeft, FaChevronRight, FaShoppingCart, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import teachers from './teachers';
import { getAllTeachers } from '../../APIs/GET';

const TeacherList = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [teachers, setTeachers] = useState([]);
  console.log('Initial teachers state:', teachers);
  const [formData, setFormData] = useState({
    language: '1183',
    area: 'All',
    fee: 'All',
    gender: 'All',
    age_range: 'All',
    beginner_friendly: false,
    japanese_lesson: false,
    online_lesson: false
  });
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const TEACHERS_PER_PAGE = 3;
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  // const paginatedTeachers = teachers;
  // const totalPages = Math.ceil(teachers.length / TEACHERS_PER_PAGE);
  // const paginatedTeachers = teachers.slice(
  //   (currentPage - 1) * TEACHERS_PER_PAGE,
  //   currentPage * TEACHERS_PER_PAGE
  // );
  const fetchTeachers = async () => {
    setTeachers([]);
    setLoading(true);
    try {
      console.log('Fetching data for page:', currentPage);
      const data = await getAllTeachers(currentPage, TEACHERS_PER_PAGE);

      if (data?.success && data?.data) {
        setTeachers(data.data.teachers || []); // Update teachers state
        setTotalPages(data.data.pagination?.totalPages || 1); // Update total pages
        console.log('Teachers fetched and set.');
      } else {
        setTeachers([]);
        console.error('Unexpected response format:', data);
      }
    } catch (error) {
      console.error('API call failed:', error);
    } finally {
      setLoading(false);
    }
  };

  //useEffect to call fetchTeachers on mount or page change
  useEffect(() => {
    fetchTeachers();
  }, [currentPage]);


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically make an API call with the form data
    if (showFilterModal) setShowFilterModal(false);
  };

  const handleReset = () => {
    setFormData({
      language: '1183',
      area: 'All',
      fee: 'All',
      gender: 'All',
      age_range: 'All',
      beginner_friendly: false,
      japanese_lesson: false,
      online_lesson: false
    });
  };

  const styles = {
    wrapper: {
      fontFamily: "'Inter', sans-serif",
      backgroundColor: '#f9fafb'
    },
    baseColor: {
      '--hs-base-color': '#4a7d1d',
      '--hs-base-color-hover': '#3d6817'
    },
    textHsBaseColor: { color: 'var(--hs-base-color)' },
    bgHsBaseColor: { backgroundColor: 'var(--hs-base-color)' },
    hoverBgHsBaseColorHover: { backgroundColor: 'var(--hs-base-color-hover)' },
    borderHsBaseColor: { borderColor: 'var(--hs-base-color)' },
    teacherCard: {
      transition: 'box-shadow 0.3s ease-in-out'
    },
    teacherCardHover: {
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
    },
    countryIcon: {
      width: '1.5em',
      height: '1em',
      verticalAlign: 'middle',
      borderRadius: '2px',
      display: 'inline-block'
    },
    newUpdatedRibbon: {
      position: 'absolute',
      top: '12px',
      right: '12px',
      padding: '3px 10px',
      fontSize: '0.7rem',
      fontWeight: '700',
      color: 'white',
      borderRadius: '9999px',
      zIndex: '10',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    newRibbon: {
      backgroundColor: '#ef4444'
    },
    updatedRibbon: {
      backgroundColor: '#3b82f6'
    },
    infoDivider: {
      borderTop: '1px dashed #cbd5e1',
      marginTop: '0.75rem',
      marginBottom: '0.75rem'
    },
    filterSidebar: {
      backgroundColor: '#ffffff'
    },
    filterTitle: {
      color: 'var(--hs-base-color)',
      borderBottom: '2px solid var(--hs-base-color)',
      paddingBottom: '0.5rem'
    },
    btnPrimary: {
      backgroundColor: 'var(--hs-base-color)',
      color: 'white',
      transition: 'background-color 0.3s'
    },
    btnPrimaryHover: {
      backgroundColor: 'var(--hs-base-color-hover)'
    },
    btnSecondary: {
      backgroundColor: '#e5e7eb',
      color: '#374151',
      transition: 'background-color 0.3s'
    },
    btnSecondaryHover: {
      backgroundColor: '#d1d5db'
    },
    japanMapPlaceholder: {
      backgroundColor: '#e0e0e0',
      border: '1px solid #ccc',
      borderRadius: '8px',
      minHeight: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#666',
      fontStyle: 'italic'
    },
    otherLanguagesSection: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    },
    languageLinkItem: {
      border: '1px solid #e5e7eb',
      transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out'
    },
    languageLinkItemHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      borderColor: 'var(--hs-base-color)'
    },
    pageDescription: {
      backgroundColor: '#f0f7ff',
      borderLeft: '4px solid var(--hs-base-color)',
      padding: '1rem',
      marginBottom: '1.5rem',
      borderRadius: '0.25rem',
      fontSize: '0.9rem',
      lineHeight: '1.6'
    }
  };

  return (
    <div id="ouchi-sensei-tailwind-wrapper" style={styles.wrapper}>
      <main className="container mx-auto px-4 py-8">
        <nav className="text-sm mb-4" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="https://dinfo.work/" className="text-gray-500 hover:text-green-700">ホーム</a>
              <i className="fa fa-angle-right mx-2 text-gray-400"></i>
            </li>
            <li className="flex items-center">
              <a href="https://dinfo.work/search" className="text-gray-500 hover:text-green-700">先生を探す</a>
              <i className="fa fa-angle-right mx-2 text-gray-400"></i>
            </li>
            <li>
              <span className="text-gray-700 font-semibold">英語の先生</span>
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-gray-800 mb-6">英語の先生を自分で探す</h1>
        <div className="page-description" style={styles.pageDescription}>
          <p>おうち先生ドットコムには、日本全国のカフェなどでプライベートレッスンを提供する、様々な言語の先生が登録しています。</p>
          <p>語学教室を介さず、マンツーマンであなたの学びたい言語を教えてくれる、主にネイティブスピーカーの先生を見つけることができます。</p>
          <p>地域や詳細な条件で先生を絞り込みたい場合は、この検索ページをご活用ください。</p>
          <p>初めての方は、ご利用前に「<a href="faq.html" className="text-green-700 underline">よくある質問 FAQ</a>」と「<a href="kiyaku.html" className="text-green-700 underline">ご利用規約</a>」を必ずご確認ください。</p>
        </div>

        <div className="md:flex md:space-x-6">
          <aside className="md:w-1/4 mb-6 md:mb-0">
            <button
              id="open-filter-modal"
              className="md:hidden w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 mb-4 flex items-center justify-center"
              onClick={() => setShowFilterModal(true)}
            >
              <FaFilter className="mr-2" /> 検索条件を変更
            </button>

            <div id="filter-sidebar" className="hidden md:block bg-white p-6 rounded-lg shadow" style={styles.filterSidebar}>
              <h2 className="text-xl font-semibold mb-4 text-gray-700" style={styles.filterTitle}>検索条件</h2>
              <form id="teacher-search-form" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">レッスン言語</label>
                  <select
                    id="language"
                    name="language"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-green-700 focus:ring focus:ring-green-700 focus:ring-opacity-50"
                    value={formData.language}
                    onChange={handleInputChange}
                  >
                    <option value="All">指定なし</option>
                    <option value="1183" selected>英語・英会話</option>
                    <option value="1184">中国語（北京語）</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">レッスンエリア</label>
                  <select
                    id="area"
                    name="area"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-green-700 focus:ring focus:ring-green-700 focus:ring-opacity-50"
                    value={formData.area}
                    onChange={handleInputChange}
                  >
                    <option value="All" selected>指定なし</option>
                    <option value="358">東京都</option>
                    <option value="413">神奈川県</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="fee" className="block text-sm font-medium text-gray-700 mb-1">マンツーマン料金 (60分)</label>
                  <select
                    id="fee"
                    name="fee"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-green-700 focus:ring focus:ring-green-700 focus:ring-opacity-50"
                    value={formData.fee}
                    onChange={handleInputChange}
                  >
                    <option value="All" selected>指定なし</option>
                    <option value="0-2000">2000円まで</option>
                    <option value="0-3000">3000円まで</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">性別</label>
                  <select
                    id="gender"
                    name="gender"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-green-700 focus:ring focus:ring-green-700 focus:ring-opacity-50"
                    value={formData.gender}
                    onChange={handleInputChange}
                  >
                    <option value="All" selected>指定なし</option>
                    <option value="male">男性</option>
                    <option value="female">女性</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="age_range" className="block text-sm font-medium text-gray-700 mb-1">年代</label>
                  <select
                    id="age_range"
                    name="age_range"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-green-700 focus:ring focus:ring-green-700 focus:ring-opacity-50"
                    value={formData.age_range}
                    onChange={handleInputChange}
                  >
                    <option value="All" selected>指定なし</option>
                    <option value="18-34">20代以下～30代前半</option>
                  </select>
                </div>
                <div className="mb-4 space-y-2">
                  <div className="flex items-center">
                    <input
                      id="beginner_friendly"
                      name="beginner_friendly"
                      type="checkbox"
                      className="h-4 w-4 text-green-700 border-gray-300 rounded focus:ring-green-700"
                      checked={formData.beginner_friendly}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="beginner_friendly" className="ml-2 block text-sm text-gray-700">初心者歓迎！</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="japanese_lesson"
                      name="japanese_lesson"
                      type="checkbox"
                      className="h-4 w-4 text-green-700 border-gray-300 rounded focus:ring-green-700"
                      checked={formData.japanese_lesson}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="japanese_lesson" className="ml-2 block text-sm text-gray-700">日本語でレッスンが可能</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="online_lesson"
                      name="online_lesson"
                      type="checkbox"
                      className="h-4 w-4 text-green-700 border-gray-300 rounded focus:ring-green-700"
                      checked={formData.online_lesson}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="online_lesson" className="ml-2 block text-sm text-gray-700">オンラインレッスンが可能</label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-700 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-800"
                  style={styles.btnPrimary}
                >
                  この条件で検索！
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="mt-2 w-full bg-gray-200 py-2 px-4 rounded-md font-semibold hover:bg-gray-300"
                  style={styles.btnSecondary}
                >
                  条件をリセット
                </button>
              </form>
            </div>
          </aside>

          <section className="md:w-3/4">
            <div className="bg-white p-4 rounded-lg shadow mb-4 flex justify-between items-center">
              <p className="text-sm text-gray-600">
                この条件で<span className="text-red-500 font-bold">90日以内</span>に更新した先生 <span className="text-green-700 font-bold text-lg">20</span>人
              </p>
              <div>
                <label htmlFor="sort_by" className="sr-only">並び替え</label>
                <select
                  id="sort_by"
                  name="sort_by"
                  className="border-gray-300 rounded-md shadow-sm text-sm focus:border-green-700 focus:ring focus:ring-green-700 focus:ring-opacity-50"
                >
                  <option>おすすめ順</option>
                  <option>新着順</option>
                  <option>料金が安い順</option>
                </select>
              </div>
            </div>

            <div className="space-y-6">

              {teachers.map((teacher, index) => (

                <article
                  key={index + (currentPage - 1) * TEACHERS_PER_PAGE}
                  className="bg-white rounded-lg shadow-md overflow-hidden relative hover:shadow-lg transition-shadow duration-300"
                  style={styles.teacherCard}
                >

                  {teacher.isNew && (
                    <div className="absolute top-3 right-3 px-3 py-1 text-xs font-bold text-white rounded-full uppercase tracking-wider"
                      style={{ ...styles.newUpdatedRibbon, ...styles.newRibbon }}>
                      新規登録!
                    </div>
                  )}
                  {teacher.isUpdated && !teacher.isNew && (
                    <div className="absolute top-3 right-3 px-3 py-1 text-xs font-bold text-white rounded-full uppercase tracking-wider"
                      style={{ ...styles.newUpdatedRibbon, ...styles.updatedRibbon }}>
                      更新済み!
                    </div>
                  )}

                  <div className="md:flex">
                    <div className="md:w-1/4 p-4 flex flex-col items-center justify-center text-center">
                      <img
                        src={teacher.profile_photo || "https://placehold.co/120x120/E2E8F0/A0AEC0?text=Teacher"}
                        alt={`${teacher.first_name} `}
                        className="w-30 h-30 md:w-28 md:h-28 rounded-full object-cover mb-2 shadow-sm"
                      />
                      <div className="md:hidden mt-2">
                        <h3 className="text-lg font-semibold text-green-700">
                          <Link to={`/teacherprofile?id=${teacher.id}`} className="hover:underline">{teacher.name}</Link>
                        </h3>
                        <p className="text-xs text-gray-500">ID: {teacher.id}</p>
                      </div>
                    </div>
                    <div className="md:w-1/2 p-4">
                      <div className="hidden md:block mb-2">
                        <h3 className="text-xl font-semibold text-green-700">
                          <Link to={`/teacherprofile?id=${teacher.id}`} className="hover:underline">{teacher.first_name} {teacher.last_name}</Link>
                        </h3>
                        <p className="text-xs text-gray-500">ID: {teacher.id}</p>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <span className="country-icon mr-1" style={styles.countryIcon}>
                          {teacher.country === 'パキスタン' ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
                              <defs><clipPath id="pk-a"><path fillOpacity=".7" d="M-52.3 0h682.6v512H-52.3z"></path></clipPath></defs>
                              <g fillRule="evenodd" strokeWidth="1pt" clipPath="url(#pk-a)" transform="translate(49) scale(.9375)">
                                <path fill="#0c590b" d="M-95 0h768v512H-95z"></path>
                                <path fill="#fff" d="M-95 0H97.5v512H-95z"></path>
                                <g fill="#fff">
                                  <path d="M403.7 225.4l-31.2-6.6-16.4 27.3-3.4-31.6-31-7.2 29-13-2.7-31.7 21.4 23.6 29.3-12.4-15.9 27.6 21 24z"></path>
                                  <path d="M415.4 306a121.2 121.2 0 01-161.3 59.4 122.1 122.1 0 01-59.5-162.1A118.6 118.6 0 01266 139a156.2 156.2 0 00-11.8 10.9A112.3 112.3 0 00415.5 306z"></path>
                                </g>
                              </g>
                            </svg>
                          ) : (
                            <svg viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0 0h640v240H0z" fill="#0038a8"></path>
                              <path d="M0 240h640v240H0z" fill="#ce1126"></path>
                              <path d="M415.7 240L0 480V0" fill="#fff"></path>
                              <g fill="#fcd116">
                                <path d="M26.7 42.4L41 55l16.6-9.2-7.4 17.5 14 13-19-1.6-8.1 17.2-4.3-18.5L14 71l16.3-10zm323.8 172.3l.4 19 18 6.3-18 6.2-.4 19-11.5-15.1-18.2 5.5 10.8-15.6-10.8-15.6 18.2 5.5zM37.2 388.1l8 17.2 19-1.6-13.9 13 7.4 17.5-16.6-9.1-14.4 12.4 3.6-18.7L14 409l18.9-2.4zM151.4 139.1l-6.2 6.2 3.1 47-3 .3-5.7-42.9-5.1 5 7.6 38.4a47.5 47.5 0 00-17.2 7.1l-21.7-32.4H96l26.4 34.3a48 48 0 00-2.4 2l-31.1-35.5h-8.8v8.8l35.4 31-2 2.5-34.3-26.3v7.1l32.5 21.7c-3.4 5.2-5.9 11-7.1 17.2L66.3 223l-5.1 5 42.9 5.7c-.2 1-.3 2.1-.3 3.1l-47-3-6.2 6.2 6.2 6.2 47-3.1.3 3.1-42.9 5.7 5 5 38.4-7.6a47.5 47.5 0 007.1 17.2l-32.5 21.7v7.2l34.3-26.3a48 48 0 002 2.4l-35.4 31v8.8H89l31-35.4 2.5 2L96 312.2h7.2l21.7-32.5c5.1 3.4 11 5.9 17.2 7.1l-7.6 38.4 5 5 5.7-42.9c1 .2 2 .3 3.1.3l-3 47 6.1 6.2 6.3-6.2-3.1-47 3-.3 5.7 43 5.1-5.1-7.6-38.4a47.5 47.5 0 0017.2-7.1l21.7 32.5h7.2l-26.4-34.3a48 48 0 002.4-2l31.1 35.4h8.8v-8.8l-35.4-31 2-2.4 34.3 26.3v-7.2l-32.5-21.7c3.4-5.1 5.9-11 7.1-17.2l38.3 7.6 5.1-5-42.9-5.7c.2-1 .3-2 .3-3.1l47 3 6.2-6.1-6.2-6.2-47 3-.3-3 42.9-5.7-5-5-38.4 7.5a47.5 47.5 0 00-7.1-17.2l32.5-21.7v-7.1l-34.3 26.3a48 48 0 00-2-2.4l35.4-31v-8.9H214l-31 35.5a48 48 0 00-2.5-2l26.4-34.3h-7.2L178 200.2c-5.1-3.4-11-5.9-17.2-7.1l7.6-38.3-5-5-5.7 42.8-3.1-.3 3-47z"></path>
                              </g>
                            </svg>
                          )}
                        </span>
                        {teacher.country} <span className="mx-1">|</span> {teacher.gender} <span className="mx-1">|</span> {teacher.ageRange}
                      </div>
                      <p className="text-sm text-gray-600 mb-1"><span className="font-medium">教えている言語:</span> {teacher.lesson_language_1},{teacher.lesson_language_2},{teacher.lesson_language_3}</p>
                      <p className="text-sm text-gray-600 mb-1"><span className="font-medium">レッスン地域:</span> {teacher.area}</p>
                      <p className="text-sm text-gray-600 mb-1"><span className="font-medium">レッスン場所:</span> {teacher.locations}</p>
                      <p className="text-sm text-gray-600 mb-1"><span className="font-medium">対象者:</span> {teacher.students}</p>
                      <div className="mt-2 text-xs text-gray-500">
                        教師経験: {teacher.experience} | 日本滞在歴: {teacher.stayInJapan} | 最終更新: {teacher.lastUpdated}
                      </div>
                      <div className="mt-2">
                        {teacher.beginnerFriendly && (
                          <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
                            初心者歓迎
                          </span>
                        )}
                        {teacher.onlineAvailable && (
                          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
                            オンライン可
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="md:w-1/4 p-4 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-gray-200">
                      <p className="text-2xl font-bold text-red-500 mb-2">
                        ¥ {teacher.group_lesson_fee} <span className="text-sm font-normal text-gray-600">/ 60分</span>
                      </p>
                      <Link
                        to={`/teacherprofile?=id${teacher.id}`}
                        className="w-full bg-green-700 text-white text-center py-2 px-4 rounded-md font-semibold mb-2 text-sm hover:bg-green-800"
                        style={styles.btnPrimary}
                      >
                        詳細を見る
                      </Link>
                      <button
                        className="w-full bg-gray-200 py-2 px-4 rounded-md font-semibold text-sm hover:bg-gray-300"
                        style={styles.btnSecondary}
                      >
                        <FaShoppingCart className="inline mr-1" /> カートへ追加
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <nav className="mt-8 flex justify-center" aria-label="Pagination">
              <ul className="inline-flex items-center -space-x-px">
                <li>
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <span className="sr-only">Previous</span>
                    <FaChevronLeft />
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, i) => (
                  <li key={i}>
                    <button
                      onClick={() => setCurrentPage(i + 1)}
                      className={`py-2 px-3 leading-tight ${currentPage === i + 1 ? 'text-green-700 bg-green-50 border border-green-700 hover:bg-green-100 hover:text-green-800 font-semibold' : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'}`}
                      aria-current={currentPage === i + 1 ? 'page' : undefined}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <span className="sr-only">Next</span>
                    <FaChevronRight />
                  </button>
                </li>
              </ul>
            </nav>
          </section>
        </div>
      </main>

      {/* Filter Modal */}
      {showFilterModal && (
        <div
          id="filter-modal"
          className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={(e) => e.target === e.currentTarget && setShowFilterModal(false)}
        >
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-full overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold text-gray-700">検索条件</h2>
              <button
                id="close-filter-modal"
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setShowFilterModal(false)}
              >
                <FaTimes className="text-lg" />
              </button>
            </div>
            <div className="p-6">
              <form id="teacher-search-form-modal" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="language-modal" className="block text-sm font-medium text-gray-700 mb-1">レッスン言語</label>
                  <select
                    id="language-modal"
                    name="language"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-green-700 focus:ring focus:ring-green-700 focus:ring-opacity-50"
                    value={formData.language}
                    onChange={handleInputChange}
                  >
                    <option value="All">指定なし</option>
                    <option value="1183" selected>英語・英会話</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="area-modal" className="block text-sm font-medium text-gray-700 mb-1">レッスンエリア</label>
                  <select
                    id="area-modal"
                    name="area"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-green-700 focus:ring focus:ring-green-700 focus:ring-opacity-50"
                    value={formData.area}
                    onChange={handleInputChange}
                  >
                    <option value="All" selected>指定なし</option>
                    <option value="358">東京都</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="fee-modal" className="block text-sm font-medium text-gray-700 mb-1">マンツーマン料金 (60分)</label>
                  <select
                    id="fee-modal"
                    name="fee"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-green-700 focus:ring focus:ring-green-700 focus:ring-opacity-50"
                    value={formData.fee}
                    onChange={handleInputChange}
                  >
                    <option value="All" selected>指定なし</option>
                    <option value="0-2000">2000円まで</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="gender-modal" className="block text-sm font-medium text-gray-700 mb-1">性別</label>
                  <select
                    id="gender-modal"
                    name="gender"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-green-700 focus:ring focus:ring-green-700 focus:ring-opacity-50"
                    value={formData.gender}
                    onChange={handleInputChange}
                  >
                    <option value="All" selected>指定なし</option>
                    <option value="male">男性</option>
                    <option value="female">女性</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="age_range-modal" className="block text-sm font-medium text-gray-700 mb-1">年代</label>
                  <select
                    id="age_range-modal"
                    name="age_range"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-green-700 focus:ring focus:ring-green-700 focus:ring-opacity-50"
                    value={formData.age_range}
                    onChange={handleInputChange}
                  >
                    <option value="All" selected>指定なし</option>
                    <option value="18-34">20代以下～30代前半</option>
                  </select>
                </div>
                <div className="mb-4 space-y-2">
                  <div className="flex items-center">
                    <input
                      id="beginner_friendly-modal"
                      name="beginner_friendly"
                      type="checkbox"
                      className="h-4 w-4 text-green-700 border-gray-300 rounded focus:ring-green-700"
                      checked={formData.beginner_friendly}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="beginner_friendly-modal" className="ml-2 block text-sm text-gray-700">初心者歓迎！</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="japanese_lesson-modal"
                      name="japanese_lesson"
                      type="checkbox"
                      className="h-4 w-4 text-green-700 border-gray-300 rounded focus:ring-green-700"
                      checked={formData.japanese_lesson}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="japanese_lesson-modal" className="ml-2 block text-sm text-gray-700">日本語でレッスンが可能</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="online_lesson-modal"
                      name="online_lesson"
                      type="checkbox"
                      className="h-4 w-4 text-green-700 border-gray-300 rounded focus:ring-green-700"
                      checked={formData.online_lesson}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="online_lesson-modal" className="ml-2 block text-sm text-gray-700">オンラインレッスンが可能</label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-700 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-800"
                  style={styles.btnPrimary}
                >
                  この条件で検索！
                </button>
                <button
                  type="button"
                  onClick={() => setShowFilterModal(false)}
                  className="mt-2 w-full bg-gray-200 py-2 px-4 rounded-md font-semibold hover:bg-gray-300"
                  style={styles.btnSecondary}
                >
                  条件を適用して閉じる
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherList;