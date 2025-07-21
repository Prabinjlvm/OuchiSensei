import React, { useState, useEffect } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { 
      id: 1, 
      name: 'Alex Sensei', 
      nationality: 'USA', 
      image: 'https://placehold.co/150x150/EFEFEF/333333?text=Alex', 
      languages: ['英語・英会話'], 
      intro: '初心者歓迎！日常会話からビジネス英語まで、あなたのレベルに合わせて楽しくレッスンします。', 
      price: 3000, 
      avgRating: 4.9, 
      reviewCount: 32 
    },
    { 
      id: 2, 
      name: 'Chloé Sensei', 
      nationality: 'France', 
      image: 'https://placehold.co/150x150/EFEFEF/333333?text=Chlo%C3%A9', 
      languages: ['フランス語', '英語'], 
      intro: 'パリ出身のクロエです。美しいフランス語の発音や文化を一緒に学びませんか？', 
      price: 3500, 
      avgRating: 4.8, 
      reviewCount: 18 
    }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const TEACHER_THRESHOLD = 5;

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleProceed = (e) => {
    e.preventDefault();
    if (cartItems.length <= TEACHER_THRESHOLD) {
      setModalMessage(`${TEACHER_THRESHOLD}人の先生までシステム利用料は同じです。お申込み完了後に先生の追加はできませんがよろしいですか？`);
      setIsModalOpen(true);
    } else {
      proceedToContactPage();
    }
  };

  const proceedToContactPage = () => {
    // In a real app, this would navigate to the next page.
    console.log('Navigating to contact page...');
    setIsModalOpen(false);
  };

  const totalCost = cartItems.reduce((sum, item) => sum + item.price, 0);

  useEffect(() => {
    document.title = "マイ先生カート";
  }, []);

  return (
    <div className="bg-gray-50 flex-grow">
      {/* Header */}
    

      <main className="container mx-auto px-4 py-6 md:py-8 pb-40 lg:pb-32">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">マイ先生カート</h1>
          <a href="#" className="text-green-600 hover:underline font-medium hidden sm:block lg:hidden">
            <i className="fas fa-arrow-left mr-2"></i>先生の検索ページへ戻る
          </a>
        </div>
        <p className="text-gray-500 mb-6">
          {cartItems.length > 0 
            ? `現在 ${cartItems.length} 人の先生がカートに入っています。`
            : '気になる先生をリストアップして、まとめて問い合わせましょう。'}
        </p>
        
        {cartItems.length === 0 ? (
          <div className="text-center bg-white p-10 rounded-lg shadow-md lg:col-span-3">
            <i className="fas fa-shopping-cart fa-3x text-gray-300 mb-4"></i>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">カートに先生がいません</h2>
            <p className="text-gray-500 mb-6">あなたの目的に合った先生を見つけましょう。</p>
            <a href="#" className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300 inline-block">
              先生を探す
            </a>
          </div>
        ) : (
          <div className="lg:grid lg:grid-cols-3 lg:gap-8 items-start">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="bg-white p-4 rounded-xl shadow-lg flex flex-col sm:flex-row items-start sm:space-x-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-24 h-24 sm:w-20 sm:h-20 rounded-full object-cover flex-shrink-0 mb-4 sm:mb-0 mx-auto" 
                  />
                  <div className="flex-grow w-full">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                        <p className="text-sm text-gray-600">{item.nationality}</p>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)} 
                        className="text-gray-400 hover:text-red-500 text-lg flex-shrink-0 ml-4"
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2 mb-2">
                      {item.languages.map((lang, index) => (
                        <span key={index} className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                          {lang}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-xs text-gray-500 my-2">
                      <i className="fas fa-star text-yellow-400 mr-1"></i>
                      <span className="font-bold text-gray-700 mr-1">{item.avgRating}</span>
                      <span>({item.reviewCount}件のレビュー)</span>
                    </div>
                    <div className="text-lg font-bold mt-2 text-green-600">
                      ¥{item.price.toLocaleString()}<span className="text-sm text-gray-500 font-normal">/時間</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1 sticky top-28 hidden md:block">
              <div className="bg-white p-6 rounded-xl shadow-lg mt-6 lg:mt-0">
                <h3 className="text-xl font-bold text-gray-800 mb-4">カートの概要</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">先生の人数:</span>
                    <span className="font-bold text-lg">{cartItems.length}人</span>
                  </div>
                  <div className="border-t my-2"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-bold">ご利用料金(目安):</span>
                    <span className="font-bold text-xl text-red-500">¥{totalCost.toLocaleString()}</span>
                  </div>
                </div>
                <button 
                  onClick={handleProceed}
                  className="w-full mt-6 bg-red-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-600 transition duration-300 text-lg"
                >
                  連絡先入力へ進む
                </button>
                <p className="text-xs text-gray-500 mt-3 text-center">この時点ではお支払いは発生しません。</p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Mobile Fixed Action Bar */}
      {cartItems.length > 0 && (
        <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-sm border-t border-gray-200 p-3 z-30 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
          <div className="flex justify-between items-center mb-2">
            <div>
              <span className="text-gray-600 text-sm">ご利用料金(目安):</span>
              <span className="font-bold text-xl text-red-500">¥{totalCost.toLocaleString()}</span>
            </div>
            <button 
              onClick={handleProceed}
              className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300 text-sm flex-shrink-0"
            >
              連絡先入力へ進む
            </button>
          </div>
          <a href="#" className="block w-full text-center bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-300 text-sm">
            <i className="fas fa-arrow-left mr-2"></i>先生の検索ページへ戻る
          </a>
        </div>
      )}

      {/* Desktop Fixed Action Bar */}
      {cartItems.length > 0 && (
        <div className="hidden lg:flex justify-center items-center fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] z-30 h-24">
          <a href="#" className="bg-green-600 text-white font-bold py-3 px-12 rounded-lg hover:bg-green-700 transition duration-300 inline-block text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1">
            <i className="fas fa-arrow-left mr-2"></i>先生の検索ページへ戻る
          </a>
        </div>
      )}

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-11/12 md:w-1/3 max-w-lg mx-auto text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-800 mb-4">ご確認</h3>
            <p className="text-gray-700 mb-6">{modalMessage}</p>
            <div className="flex flex-col md:flex-row justify-end md:space-x-4">
              <button 
                onClick={proceedToContactPage}
                className="w-full md:w-auto px-6 py-3 rounded-lg bg-red-500 text-white hover:bg-red-600 font-bold mb-2 md:mb-0 order-1 md:order-2"
              >
                はい、進みます
              </button>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-full md:w-auto px-6 py-3 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 font-bold order-2 md:order-1"
              >
                いいえ、戻ります
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;