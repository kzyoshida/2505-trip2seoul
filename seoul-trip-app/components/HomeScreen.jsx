import React from 'react';
import { Calendar, Users, CheckSquare, ShoppingBag, Globe, Camera } from 'lucide-react';

const HomeScreen = ({ countdown, setActiveTab }) => {
  const menuItems = [
    { icon: <Calendar className="w-8 h-8" />, label: '旅程', tab: 'schedule', bg: 'bg-blue-50', color: 'text-blue-600' },
    { icon: <Users className="w-8 h-8" />, label: '基本情報', tab: 'info', bg: 'bg-green-50', color: 'text-green-600' },
    { icon: <CheckSquare className="w-8 h-8" />, label: '持ち物', tab: 'checklist', bg: 'bg-purple-50', color: 'text-purple-600' },
    { icon: <ShoppingBag className="w-8 h-8" />, label: '買い物', tab: 'shopping', bg: 'bg-pink-50', color: 'text-pink-600' },
    { icon: <Globe className="w-8 h-8" />, label: 'リンク集', tab: 'links', bg: 'bg-yellow-50', color: 'text-yellow-600' },
    { icon: <Camera className="w-8 h-8" />, label: 'アルバム', tab: 'photos', bg: 'bg-indigo-50', color: 'text-indigo-600' },
  ];

  return (
    <div className="space-y-6 pb-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500 via-red-500 to-purple-600 p-6 text-white shadow-xl">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-8 -ml-8 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="relative">
          <h1 className="text-3xl font-bold mb-2">韓国・ソウル家族旅行</h1>
          <p className="text-lg opacity-90">2025年5月4日〜5月7日</p>
          <div className="mt-4">
            <p className="text-sm opacity-80">旅行まであと</p>
            <div className="flex items-baseline space-x-3">
              <span className="text-5xl font-bold">{countdown.days}</span>
              <span className="text-xl">日</span>
              <span className="text-3xl font-bold">{countdown.hours}</span>
              <span className="text-lg">時間</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {menuItems.map((item) => (
          <button
            key={item.tab}
            onClick={() => setActiveTab(item.tab)}
            className={`${item.bg} rounded-2xl p-6 flex flex-col items-center space-y-3 transition-all duration-300 hover:scale-105 hover:shadow-lg`}
          >
            <div className={item.color}>{item.icon}</div>
            <span className={`font-medium ${item.color}`}>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
