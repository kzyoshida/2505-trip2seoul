import React, { useEffect, useState } from 'react';
import { Calendar, Users, CheckSquare, ShoppingBag, Globe, Camera, Sun, Cloud, CloudRain, CloudSnow, Zap, CloudDrizzle, Plane, Wallet } from 'lucide-react';

const weatherIcons = {
  0: <Sun className="w-7 h-7 text-yellow-400 inline" />, // 晴れ
  1: <Cloud className="w-7 h-7 text-gray-400 inline" />, // 主に晴れ
  2: <Cloud className="w-7 h-7 text-gray-500 inline" />, // 曇り
  3: <Cloud className="w-7 h-7 text-gray-600 inline" />, // 曇り
  45: <CloudDrizzle className="w-7 h-7 text-blue-400 inline" />, // 霧
  48: <CloudDrizzle className="w-7 h-7 text-blue-400 inline" />, // 霧
  51: <CloudRain className="w-7 h-7 text-blue-400 inline" />, // 小雨
  53: <CloudRain className="w-7 h-7 text-blue-500 inline" />, // 雨
  55: <CloudRain className="w-7 h-7 text-blue-600 inline" />, // 強い雨
  61: <CloudRain className="w-7 h-7 text-blue-400 inline" />, // 小雨
  63: <CloudRain className="w-7 h-7 text-blue-500 inline" />, // 雨
  65: <CloudRain className="w-7 h-7 text-blue-600 inline" />, // 強い雨
  71: <CloudSnow className="w-7 h-7 text-blue-300 inline" />, // 小雪
  73: <CloudSnow className="w-7 h-7 text-blue-400 inline" />, // 雪
  75: <CloudSnow className="w-7 h-7 text-blue-600 inline" />, // 強い雪
  80: <CloudRain className="w-7 h-7 text-blue-400 inline" />, // にわか雨
  81: <CloudRain className="w-7 h-7 text-blue-500 inline" />, // 強いにわか雨
  82: <CloudRain className="w-7 h-7 text-blue-700 inline" />, // 激しいにわか雨
  95: <Zap className="w-7 h-7 text-yellow-500 inline" />, // 雷雨
  96: <Zap className="w-7 h-7 text-yellow-600 inline" />, // 雷雨
  99: <Zap className="w-7 h-7 text-yellow-700 inline" />, // 雷雨
};

const weatherDescriptions = {
  0: '快晴', 1: '晴れ', 2: '曇り', 3: '曇り',
  45: '霧', 48: '霧',
  51: '小雨', 53: '雨', 55: '強い雨',
  61: '小雨', 63: '雨', 65: '強い雨',
  71: '小雪', 73: '雪', 75: '強い雪',
  80: 'にわか雨', 81: '強いにわか雨', 82: '激しいにわか雨',
  95: '雷雨', 96: '雷雨', 99: '雷雨',
};

const HomeScreen = ({ countdown, setActiveTab }) => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=37.5665&longitude=126.9780&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&start_date=2025-05-04&end_date=2025-05-07'
        );
        const data = await res.json();
        setWeather(data.daily);
      } catch (e) {
        setWeather(null);
      }
    };
    fetchWeather();
  }, []);
  // 事前確認セクション
  const preTripMenu = [
    { icon: <Calendar className="w-8 h-8" />, label: '旅程', tab: 'schedule', bg: 'bg-blue-50', color: 'text-blue-600' },
    { icon: <Users className="w-8 h-8" />, label: '基本情報', tab: 'info', bg: 'bg-green-50', color: 'text-green-600' },
    { icon: <ShoppingBag className="w-8 h-8" />, label: '買い物リスト', tab: 'shopping', bg: 'bg-pink-50', color: 'text-pink-600' },
    { icon: <CheckSquare className="w-8 h-8" />, label: '持ち物', tab: 'checklist', bg: 'bg-purple-50', color: 'text-purple-600' },
    { icon: <Globe className="w-8 h-8" />, label: 'リンク集', tab: 'links', bg: 'bg-yellow-50', color: 'text-yellow-600' },
    { icon: <Camera className="w-8 h-8" />, label: '電子入国申告チェック', tab: 'earrival', bg: 'bg-blue-50', color: 'text-blue-600' },
    { icon: <Plane className="w-8 h-8" />, label: '事前準備', tab: 'preparation', bg: 'bg-orange-50', color: 'text-orange-600' },
    { icon: <Wallet className="w-8 h-8" />, label: '両替・決済情報', tab: 'payment', bg: 'bg-lime-50', color: 'text-lime-600' },
  ];
  // 旅行後確認用セクション
  const postTripMenu = [
    { icon: <CheckSquare className="w-8 h-8" />, label: '後書き', tab: 'lookback', bg: 'bg-gray-50', color: 'text-gray-600' },
    { icon: <Wallet className="w-8 h-8" />, label: '使ったお金', tab: 'spendings', bg: 'bg-green-50', color: 'text-green-600' },
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

      {/* 事前確認セクション */}
      <div className="mt-8 mb-2 text-lg font-bold text-blue-700">事前確認</div>
      <div className="grid grid-cols-2 gap-4 mb-8">
        {preTripMenu.map((item) => (
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
      {/* 旅行後確認用セクション */}
      <div className="mt-8 mb-2 text-lg font-bold text-gray-700">旅行後確認用</div>
      <div className="grid grid-cols-2 gap-4">
        {postTripMenu.map((item) => (
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
      <SeoulWeather />
      <SeoulWeatherHourly />
    </div>
  );
};

import SeoulWeather from './SeoulWeather';
import SeoulWeatherHourly from './SeoulWeatherHourly';
import LookbackSection from './LookbackSection';
import lookbackDays from './LookbackData';

export default HomeScreen;
