import React, { useState, useEffect } from 'react';
import { MapPin, Plane, Calendar, ShoppingBag, CheckSquare, Globe, Bell, ChevronLeft } from 'lucide-react';
import HomeScreen from './components/HomeScreen.jsx';
import ScheduleScreen from './components/ScheduleScreen.jsx';
import InfoScreen from './components/InfoScreen.jsx';
import PaymentInfoScreen from './components/PaymentInfoScreen.jsx';
import ChecklistScreen from './components/ChecklistScreen.jsx';
import ShoppingScreen from './components/ShoppingScreen.jsx';
import EArrivalGuide from './components/EArrivalGuide.jsx';
import LinksScreen from './components/LinksScreen.jsx';
import PreparationScreen from './components/PreparationScreen.jsx';

import { supabase } from './utils/supabaseClient';

const SeoulTripApp = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [activeDay, setActiveDay] = useState(1);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });
  const [checklistItems, setChecklistItems] = useState([
    { id: 1, text: 'パスポート', checked: false, category: 'essential' },
    { id: 2, text: '航空券（eチケット）', checked: false, category: 'essential' },
    { id: 3, text: '現金（日本円・韓国ウォン）', checked: false, category: 'essential' },
    { id: 4, text: 'クレジットカード', checked: false, category: 'essential' },
    { id: 5, text: 'WOWPASS', checked: false, category: 'essential' },
    { id: 6, text: 'モバイルバッテリー（100Wh以下、5個まで）', checked: false, category: 'electronics' },
    { id: 7, text: 'スマートフォン・充電器', checked: false, category: 'electronics' },
    { id: 8, text: '衣類・下着', checked: false, category: 'clothing' },
    { id: 9, text: '洗面用具', checked: false, category: 'personal' },
    { id: 10, text: '常備薬・健康保険証', checked: false, category: 'medical' },
    { id: 11, text: 'K-ETA申請（3日前に行っておく）', checked: false, category: 'essential' },
  ]);
  
  const [shoppingList, setShoppingList] = useState([]);
  const [shoppingLoading, setShoppingLoading] = useState(true);

  // 買い物リスト取得
  const fetchShoppingList = async () => {
    setShoppingLoading(true);
    const { data, error } = await supabase
      .from('shopping_list')
      .select('*')
      .order('id', { ascending: true });
    if (!error) setShoppingList(data || []);
    setShoppingLoading(false);
  };

  useEffect(() => {
    fetchShoppingList();
  }, []);

  // カウントダウン計算
  useEffect(() => {
    const calculateCountdown = () => {
      const tripDate = new Date('2025-05-04T09:55:00');
      const now = new Date();
      const diff = tripDate - now;

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        setCountdown({ days, hours, minutes });
      }
    };

    calculateCountdown();
    const timer = setInterval(calculateCountdown, 60000);
    return () => clearInterval(timer);
  }, []);

  // チェックリストの状態管理
  useEffect(() => {
    const savedChecklist = localStorage.getItem('tripChecklist');
    if (savedChecklist) {
      setChecklistItems(JSON.parse(savedChecklist));
    }
  }, []);

  const toggleChecklistItem = (id) => {
    const updatedItems = checklistItems.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setChecklistItems(updatedItems);
    localStorage.setItem('tripChecklist', JSON.stringify(updatedItems));
  };

  const toggleShoppingItem = async (id) => {
    // 楽観的UI更新
    const updatedItems = shoppingList.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setShoppingList(updatedItems);
    // Supabaseに反映
    const target = updatedItems.find(item => item.id === id);
    await supabase.from('shopping_list').update({ checked: target.checked }).eq('id', id);
  };

  // 買い物リスト追加
  const addShoppingItem = async (text, place, url, family) => {
    setShoppingLoading(true);
    await supabase.from('shopping_list').insert([{ text, place, url, family, checked: false }]);
    await fetchShoppingList();
    setShoppingLoading(false);
  };

  // 買い物リスト削除
  const deleteShoppingItem = async (id) => {
    setShoppingLoading(true);
    await supabase.from('shopping_list').delete().eq('id', id);
    await fetchShoppingList();
    setShoppingLoading(false);
  };

  // 画面切り替え
  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen countdown={countdown} setActiveTab={setActiveTab} />;
      case 'schedule':
        return <ScheduleScreen activeDay={activeDay} setActiveDay={setActiveDay} />;
      case 'shopping':
        return <ShoppingScreen shoppingList={shoppingList} toggleShoppingItem={toggleShoppingItem} shoppingLoading={shoppingLoading} addShoppingItem={addShoppingItem} deleteShoppingItem={deleteShoppingItem} />;
      case 'info':
        return <InfoScreen />;
      case 'checklist':
        return <ChecklistScreen checklistItems={checklistItems} toggleChecklistItem={toggleChecklistItem} />;
      case 'links':
        return <LinksScreen />;
      case 'photos':
        // GoogleフォトアルバムURLに自動遷移
        window.location.href = 'https://photos.app.goo.gl/yTBhNerxPkV1SFcY9';
        return null;
      case 'earrival':
        return <EArrivalGuide />;
      case 'preparation':
        return <PreparationScreen setActiveTab={setActiveTab} />;
      case 'payment':
        return <PaymentInfoScreen />;
      default:
        return <HomeScreen countdown={countdown} setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg">

      {/* ヘッダー */}
      <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {activeTab !== 'home' && (
              <button 
                onClick={() => setActiveTab('home')}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            <h1 className="text-xl font-bold">
              {activeTab === 'home' ? 'ソウル旅行 2025' :
               activeTab === 'schedule' ? '旅程表' :
               activeTab === 'shopping' ? '買い物リスト' :
               activeTab === 'checklist' ? '持ち物リスト' :
               activeTab === 'links' ? 'リンク集' :
               activeTab === 'info' ? '基本情報' :
               activeTab === 'earrival' ? '電子入国申告チェック' :
               activeTab === 'preparation' ? '準備' : ''}
            </h1>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-3xl mx-auto px-4 py-6">
        {renderScreen()}
      </main>

      {/* ボトムナビゲーション（写真タブ追加） */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 pb-safe">
        <div className="max-w-3xl mx-auto px-4 py-2 flex justify-around">
          {[
            { tab: 'home', icon: <Globe className="w-6 h-6" />, label: 'ホーム' },
            { tab: 'schedule', icon: <Calendar className="w-6 h-6" />, label: '旅程' },
            { tab: 'shopping', icon: <ShoppingBag className="w-6 h-6" />, label: '買い物リスト' },
            { tab: 'photos', icon: <img src="https://cdn-icons-png.flaticon.com/512/747/747545.png" alt="写真" className="w-6 h-6" />, label: '写真' },
            { tab: 'info', icon: <MapPin className="w-6 h-6" />, label: '基本情報' }
          ].map((item) => (
            <button
              key={item.tab}
              onClick={() => setActiveTab(item.tab)}
              className={`flex flex-col items-center space-y-1 px-2 py-1 rounded-lg transition-colors duration-200 ${activeTab === item.tab ? 'text-blue-500' : 'text-gray-400 hover:text-gray-600'}`}
            >
              {item.icon}
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default SeoulTripApp;
