import React, { useState, useEffect } from 'react';
import { MapPin, Plane, Calendar, ShoppingBag, CheckSquare, Globe, Bell, ChevronLeft } from 'lucide-react';
import HomeScreen from './components/HomeScreen';
import ScheduleScreen from './components/ScheduleScreen';
import InfoScreen from './components/InfoScreen';
import ChecklistScreen from './components/ChecklistScreen';
import ShoppingScreen from './components/ShoppingScreen';
import LinksScreen from './components/LinksScreen';
import PhotosScreen from './components/PhotosScreen';

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
  
  const [shoppingList, setShoppingList] = useState([
    { id: 1, text: '明洞餃子', checked: false },
    { id: 2, text: 'キンパ', checked: false },
    { id: 3, text: 'チキン', checked: false },
    { id: 4, text: '韓国コスメ', checked: false },
    { id: 5, text: 'お土産（お菓子、フェイスパックなど）', checked: false },
    { id: 6, text: '果物', checked: false },
    { id: 7, text: '飲み物', checked: false },
  ]);

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

  const toggleShoppingItem = (id) => {
    const updatedItems = shoppingList.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setShoppingList(updatedItems);
  };

  // 画面切り替え
  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen countdown={countdown} setActiveTab={setActiveTab} />;
      case 'schedule':
        return <ScheduleScreen activeDay={activeDay} setActiveDay={setActiveDay} />;
      case 'info':
        return <InfoScreen />;
      case 'checklist':
        return <ChecklistScreen checklistItems={checklistItems} toggleChecklistItem={toggleChecklistItem} />;
      case 'shopping':
        return <ShoppingScreen shoppingList={shoppingList} toggleShoppingItem={toggleShoppingItem} />;
      case 'links':
        return <LinksScreen />;
      case 'photos':
        return <PhotosScreen />;
      default:
        return <HomeScreen countdown={countdown} setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
               activeTab === 'info' ? '基本情報' :
               activeTab === 'checklist' ? '持ち物リスト' :
               activeTab === 'shopping' ? '買い物リスト' :
               activeTab === 'links' ? 'リンク集' :
               activeTab === 'photos' ? '旅の思い出' : ''}
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

      {/* ボトムナビゲーション */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 pb-safe">
        <div className="max-w-3xl mx-auto px-4 py-2 flex justify-around">
          {[
            { icon: <MapPin className="w-6 h-6" />, label: 'ホーム', tab: 'home' },
            { icon: <Calendar className="w-6 h-6" />, label: '旅程', tab: 'schedule' },
            { icon: <CheckSquare className="w-6 h-6" />, label: 'リスト', tab: 'checklist' },
            { icon: <ShoppingBag className="w-6 h-6" />, label: '買い物', tab: 'shopping' },
            { icon: <Globe className="w-6 h-6" />, label: 'リンク', tab: 'links' },
          ].map((item) => (
            <button
              key={item.tab}
              onClick={() => setActiveTab(item.tab)}
              className={`flex flex-col items-center space-y-1 px-2 py-1 rounded-lg transition-colors duration-200 ${
                activeTab === item.tab ? 'text-blue-500' : 'text-gray-400 hover:text-gray-600'
              }`}
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
