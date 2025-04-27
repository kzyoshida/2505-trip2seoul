import React, { useEffect, useState } from 'react';
import { Sun, Cloud, CloudRain, CloudSnow, Zap, CloudDrizzle } from 'lucide-react';

const weatherIcons = {
  0: <Sun className="w-7 h-7 text-yellow-400" />, // 晴れ
  1: <Cloud className="w-7 h-7 text-gray-400" />, // 主に晴れ
  2: <Cloud className="w-7 h-7 text-gray-500" />, // 曇り
  3: <Cloud className="w-7 h-7 text-gray-600" />, // 曇り
  45: <CloudDrizzle className="w-7 h-7 text-blue-400" />, // 霧
  48: <CloudDrizzle className="w-7 h-7 text-blue-400" />, // 霧
  51: <CloudRain className="w-7 h-7 text-blue-400" />, // 小雨
  53: <CloudRain className="w-7 h-7 text-blue-500" />, // 雨
  55: <CloudRain className="w-7 h-7 text-blue-600" />, // 強い雨
  61: <CloudRain className="w-7 h-7 text-blue-400" />, // 小雨
  63: <CloudRain className="w-7 h-7 text-blue-500" />, // 雨
  65: <CloudRain className="w-7 h-7 text-blue-600" />, // 強い雨
  71: <CloudSnow className="w-7 h-7 text-blue-300" />, // 小雪
  73: <CloudSnow className="w-7 h-7 text-blue-400" />, // 雪
  75: <CloudSnow className="w-7 h-7 text-blue-600" />, // 強い雪
  80: <CloudRain className="w-7 h-7 text-blue-400" />, // にわか雨
  81: <CloudRain className="w-7 h-7 text-blue-500" />, // 強いにわか雨
  82: <CloudRain className="w-7 h-7 text-blue-700" />, // 激しいにわか雨
  95: <Zap className="w-7 h-7 text-yellow-500" />, // 雷雨
  96: <Zap className="w-7 h-7 text-yellow-600" />, // 雷雨
  99: <Zap className="w-7 h-7 text-yellow-700" />, // 雷雨
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

const tripStart = new Date('2025-05-04T00:00:00+09:00');

const SeoulWeatherHourly = () => {
  const [hourly, setHourly] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=37.5665&longitude=126.9780&hourly=weathercode,temperature_2m&timezone=Asia%2FTokyo&start_date=2025-05-04&end_date=2025-05-07'
        );
        const data = await res.json();
        setHourly(data.hourly);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  // 現在時刻
  const now = new Date();
  let showHours = [];
  if (!loading && hourly) {
    if (now < tripStart) {
      // 旅行日前は5/4のデータのみ
      showHours = hourly.time
        .map((t, i) => ({ t, i }))
        .filter(({ t }) => t.startsWith('2025-05-04T'));
    } else {
      // 旅行日以降は現在時刻から24時間分
      const startIdx = hourly.time.findIndex(t => new Date(t + ':00+09:00') > now);
      showHours = hourly.time
        .slice(startIdx, startIdx + 24)
        .map((t, i) => ({ t, i: startIdx + i }));
    }
  }

  return (
    <div className="bg-blue-50 rounded-2xl shadow-lg p-6 mt-8">
      <h3 className="text-xl font-bold mb-4 text-blue-700 flex items-center">
        <span className="mr-2">ソウルの1時間ごとの天気</span>
        <span className="text-xs text-gray-400">Powered by Open-Meteo</span>
      </h3>
      <div className="overflow-x-auto">
        <div className="flex gap-4">
          {loading ? <div className="text-xs text-gray-500">天気取得中...</div> :
            showHours.map(({ t, i }) => (
              <div key={t} className="flex flex-col items-center bg-white rounded-xl px-2 py-2 shadow min-w-[70px]">
                <div className="text-xs mb-1">{t.slice(5, 16).replace('T', ' ')}</div>
                <div>{weatherIcons[hourly.weathercode[i]] || <Cloud className="w-7 h-7" />}</div>
                <div className="text-xs mt-1">{weatherDescriptions[hourly.weathercode[i]] || '不明'}</div>
                <div className="text-base mt-1 font-semibold">{hourly.temperature_2m[i]}°C</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SeoulWeatherHourly;
