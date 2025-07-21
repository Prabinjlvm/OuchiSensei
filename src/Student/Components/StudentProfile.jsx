import React, { useEffect, useState, useRef } from 'react';

export default function TeacherPurEdit() {
    // --- Mock Data ---
    const purchasedTeachers = [
        { id: 1, name: 'Alex Sensei', image: 'https://placehold.co/150x150/EFEFEF/333333?text=Alex', purchaseDate: '2025年06月15日', phone: '090-1234-5678', email: 'alex.s@example.com' },
        { id: 2, name: 'Chloé Sensei', image: 'https://placehold.co/150x150/EFEFEF/333333?text=Chlo%C3%A9', purchaseDate: '2025年06月10日', phone: '080-5555-4444', email: 'chloe.s@example.com' },
        { id: 3, name: '李先生', image: 'https://placehold.co/150x150/EFEFEF/333333?text=%E6%9D%8E', purchaseDate: '2025年05月28日', phone: '070-1111-2222', email: 'li.w@example.com' },
        { id: 4, name: 'Sofia Maestra', image: 'https://placehold.co/150x150/EFEFEF/333333?text=Sofia', purchaseDate: '2025年05月20日', phone: '090-9876-5432', email: 'sofia.m@example.com' },
        { id: 5, name: 'Carlos Sensei', image: 'https://placehold.co/150x150/EFEFEF/333333?text=Carlos', purchaseDate: '2025年04月30日', phone: '080-2345-6789', email: 'carlos.g@example.com' }
    ];
    const orderHistory = [
        { id: '224964', date: '2025年06月15日', total: '¥3,000', method: 'クレジットカード', payment: '¥3,000', status: '完了' },
        { id: '224963', date: '2025年06月10日', total: '¥3,500', method: 'クレジットカード', payment: '¥3,500', status: '完了' },
        { id: '224962', date: '2025年05月28日', total: '¥2,800', method: 'クレジットカード', payment: '¥2,800', status: '完了' },
    ];
    // --- End Mock Data ---

    const [activeTab, setActiveTab] = useState(() => window.location.hash || '#purchased-teachers');
    const navLinksRef = useRef([]);
    const tabLinksRef = useRef([]);

    useEffect(() => {
        window.location.hash = activeTab;
    }, [activeTab]);

    // --- Tab Switch Handler ---
    const handleTabSwitch = (targetId) => {
        setActiveTab(targetId);
    };

    // --- Render Purchased Teachers ---
    const renderPurchasedTeachers = () => {
        if (purchasedTeachers.length === 0) {
            return <p className="text-center text-gray-500 py-12">現在、連絡先をご確認いただける先生がいません。</p>;
        }
        return (
            <div className="space-y-6">
                {purchasedTeachers.map(teacher => (
                    <div key={teacher.id} className="bg-gray-50 p-4 rounded-xl shadow-md flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 border border-gray-200">
                        <img src={teacher.image} alt={teacher.name} className="w-24 h-24 rounded-lg object-cover flex-shrink-0 mx-auto sm:mx-0" />
                        <div className="flex-grow text-center sm:text-left">
                            <h3 className="text-xl font-bold text-gray-800">{teacher.name}</h3>
                            <p className="text-sm text-gray-500">購入日: {teacher.purchaseDate}</p>
                            <div className="mt-4 pt-4 border-t border-gray-200">
                                <h4 className="font-semibold text-gray-700">連絡先情報</h4>
                                <div className="mt-2 text-sm space-y-1 text-gray-600">
                                    <p><i className="fas fa-phone-alt fa-fw mr-2 text-gray-400"></i>{teacher.phone}</p>
                                    <p><i className="fas fa-envelope fa-fw mr-2 text-gray-400"></i>{teacher.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    // --- Render Order History ---
    const renderHistory = () => {
        if (orderHistory.length === 0) {
            return <div className="text-center py-12"><p className="text-gray-500">現在、お申込み履歴はありません。</p></div>;
        }
        return (
            <>
                <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr className="bg-gray-50 text-gray-600">
                                <th className="p-3 font-semibold">お申込番号</th>
                                <th className="p-3 font-semibold">お申込日</th>
                                <th className="p-3 font-semibold">合計額</th>
                                <th className="p-3 font-semibold">お支払方法</th>
                                <th className="p-3 font-semibold">お支払額</th>
                                <th className="p-3 font-semibold">お支払状況</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {orderHistory.map(order => (
                                <tr className="bg-white" key={order.id}>
                                    <td className="p-3">{order.id}</td>
                                    <td className="p-3">{order.date}</td>
                                    <td className="p-3">{order.total}</td>
                                    <td className="p-3">{order.method}</td>
                                    <td className="p-3">{order.payment}</td>
                                    <td className="p-3">
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${order.status === '完了' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{order.status}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="block lg:hidden space-y-4">
                    {orderHistory.map(order => (
                        <div key={order.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <div className="flex justify-between items-center mb-2">
                                <div className="font-bold text-gray-800">申込番号: {order.id}</div>
                                <div>
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${order.status === '完了' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{order.status}</span>
                                </div>
                            </div>
                            <div className="text-sm text-gray-600 space-y-1 border-t pt-2 mt-2">
                                <p><strong>お申込日:</strong> {order.date}</p>
                                <p><strong>合計額:</strong> {order.total}</p>
                                <p><strong>お支払方法:</strong> {order.method}</p>
                                <p><strong>お支払額:</strong> {order.payment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    };

    // --- UI ---
    return (
        <>
        <style>{`
        body {
            font-family: 'Noto Sans JP', sans-serif;
            background-color: #f8f9fa;
        }
        .brand-orange { background-color: #f59e0b; }
        .hover-bg-orange-dark:hover { background-color: #d97706; }
        .brand-green { background-color: #16a34a; }
        .hover-bg-green-dark:hover { background-color: #15803d; }
        .brand-red { background-color: #ef4444; }
        .hover-bg-red-dark:hover { background-color: #dc2626; }
        .nav-link.active {
            color: #16a34a;
            font-weight: 700;
            border-left: 4px solid #16a34a;
        }
        #mobile-menu {
            transition: transform 0.3s ease-in-out;
        }
        .dropdown.open .dropdown-menu {
            display: block;
        }
    `}</style>
        <main className="container mx-auto px-4 py-8 md:py-12">
  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
    マイ・アカウント
  </h1>
  <div className="lg:grid lg:grid-cols-4 lg:gap-8">
    {/* Side Navigation (for Desktop) */}
    <aside className="hidden lg:block lg:col-span-1">
      <nav className="bg-white p-4 rounded-lg shadow-md sticky top-24">
        <ul id="account-nav">
          <li>
            <a
              href="#purchased-teachers"
              className={`nav-link block py-2 px-4 border-l-4 border-transparent${activeTab === '#purchased-teachers' ? ' active' : ''}`}
              onClick={e => { e.preventDefault(); handleTabSwitch('#purchased-teachers'); }}
              ref={el => navLinksRef.current[0] = el}
            >
              連絡先を入手した先生
            </a>
          </li>
          <li>
            <a
              href="#order-history"
              className={`nav-link block py-2 px-4 border-l-4 border-transparent${activeTab === '#order-history' ? ' active' : ''}`}
              onClick={e => { e.preventDefault(); handleTabSwitch('#order-history'); }}
              ref={el => navLinksRef.current[1] = el}
            >
              お申込み履歴
            </a>
          </li>
          <li>
            <a
              href="#account-edit"
              className={`nav-link block py-2 px-4 border-l-4 border-transparent${activeTab === '#account-edit' ? ' active' : ''}`}
              onClick={e => { e.preventDefault(); handleTabSwitch('#account-edit'); }}
              ref={el => navLinksRef.current[2] = el}
            >
              アカウント編集
            </a>
          </li>
          <li>
            <a
              href="#"
              className="nav-link block py-2 px-4 border-l-4 border-transparent"
            >
              ログアウト
            </a>
          </li>
        </ul>
      </nav>
    </aside>
    <div className="lg:col-span-3">
      {/* Tab Navigation (for Mobile) */}
      <div className="lg:hidden mb-6">
        <nav id="account-tabs" className="flex flex-col space-y-2">
          <a
            href="#purchased-teachers"
            className={`tab-link text-center w-full py-2 px-3 text-sm font-medium rounded-md ${activeTab === '#purchased-teachers' ? 'bg-green-600 text-white font-semibold shadow-md' : 'bg-white text-gray-600 border border-gray-200'}`}
            onClick={e => { e.preventDefault(); handleTabSwitch('#purchased-teachers'); }}
            ref={el => tabLinksRef.current[0] = el}
          >
            連絡先を入手した先生
          </a>
          <a
            href="#order-history"
            className={`tab-link text-center w-full py-2 px-3 text-sm font-medium rounded-md ${activeTab === '#order-history' ? 'bg-green-600 text-white font-semibold shadow-md' : 'bg-white text-gray-600 border border-gray-200'}`}
            onClick={e => { e.preventDefault(); handleTabSwitch('#order-history'); }}
            ref={el => tabLinksRef.current[1] = el}
          >
            お申込み履歴
          </a>
          <a
            href="#account-edit"
            className={`tab-link text-center w-full py-2 px-3 text-sm font-medium rounded-md ${activeTab === '#account-edit' ? 'bg-green-600 text-white font-semibold shadow-md' : 'bg-white text-gray-600 border border-gray-200'}`}
            onClick={e => { e.preventDefault(); handleTabSwitch('#account-edit'); }}
            ref={el => tabLinksRef.current[2] = el}
          >
            アカウント編集
          </a>
        </nav>
        <div className="mt-4">
          <a
            href="#"
            className="block w-full text-center bg-white border border-gray-300 rounded-md py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm"
          >
            ログアウト
          </a>
        </div>
      </div>
      {/* Main Content Area */}
      <div id="account-content">
        {/* Purchased Teachers */}
        <div
          id="purchased-teachers"
          className={`account-section bg-white p-6 rounded-lg shadow-md${activeTab === '#purchased-teachers' ? '' : ' hidden'}`}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            連絡先を入手した先生
          </h2>
          <div
            className="p-4 mb-6 bg-blue-100 text-blue-700"
            style={{ borderLeft: '4px solid #3b82f6' }}
          >
            <div className="flex items-center">
              <i className="fas fa-info-circle mr-3" />
              <p>
                <strong>先生の連絡先は、購入日から30日間閲覧できます。</strong>
              </p>
            </div>
          </div>
          <div id="purchased-teachers-content" className="space-y-6">
            {renderPurchasedTeachers()}
          </div>
        </div>
        {/* Order History */}
        <div
          id="order-history"
          className={`account-section bg-white p-6 rounded-lg shadow-md${activeTab === '#order-history' ? '' : ' hidden'}`}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            お申込み履歴
          </h2>
          <div id="history-content">
            {renderHistory()}
          </div>
        </div>
        {/* Account Edit */}
        <div
          id="account-edit"
          className={`account-section bg-white p-6 rounded-lg shadow-md${activeTab === '#account-edit' ? '' : ' hidden'}`}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            アカウント編集
          </h2>
          <form>
            <div className="space-y-8">
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-lg font-semibold text-gray-700">
                  アカウント情報
                </h3>
                <div className="mt-6 space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      メールアドレス
                    </label>
                    {/* ===== 修正箇所 ===== */}
                    <input
                      type="email"
                      name="email"
                      id="email"
                      defaultValue="yutaka@7match.biz"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2.5 bg-gray-50"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        新しいパスワード
                      </label>
                      {/* ===== 修正箇所 ===== */}
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="変更する場合のみ入力"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2.5 bg-gray-50"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password_confirm"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        新しいパスワード (確認)
                      </label>
                      {/* ===== 修正箇所 ===== */}
                      <input
                        type="password"
                        name="password_confirm"
                        id="password_confirm"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2.5 bg-gray-50"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-200 pb-8">
                <h3 className="text-lg font-semibold text-gray-700">
                  ご利用者様情報
                </h3>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      姓
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      defaultValue="角田"
                      disabled=""
                      className="block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-gray-500 p-2.5 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      名
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      defaultValue="豊"
                      disabled=""
                      className="block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-gray-500 p-2.5 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last_name_kana"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      姓 (カタカナ)
                    </label>
                    <input
                      type="text"
                      name="last_name_kana"
                      id="last_name_kana"
                      defaultValue="ツノダ"
                      disabled=""
                      className="block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-gray-500 p-2.5 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="first_name_kana"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      名 (カタカナ)
                    </label>
                    <input
                      type="text"
                      name="first_name_kana"
                      id="first_name_kana"
                      defaultValue="ユタカ"
                      disabled=""
                      className="block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-gray-500 p-2.5 cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="bg-brand-green text-white font-bold py-2.5 px-6 rounded-md hover-bg-green-dark transition duration-300"
              >
                保存
              </button>
            </div>
          </form>
          <div className="mt-12 pt-6 border-t border-red-300">
            <h3 className="text-lg font-semibold text-red-700">
              アカウントの削除
            </h3>
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-800">
                <i className="fas fa-exclamation-triangle mr-2" />
                アカウントを削除すると、お申し込み履歴を含む全てのデータが完全に削除されます。この操作は元に戻すことはできません。
              </p>
            </div>
            <div className="mt-4 text-right">
              <button
                type="button"
                className="brand-red text-white font-bold py-2 px-4 rounded-md hover-bg-red-dark transition duration-300"
              >
                アカウントを削除する
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

        </>
    );
}