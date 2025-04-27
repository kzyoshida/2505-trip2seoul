import React, { useEffect, useState } from 'react';
import { Sun, Cloud, CloudRain, CloudSnow, Zap, CloudDrizzle } from 'lucide-react';

const weatherIcons = {
  0: <Sun className="w-8 h-8 text-yellow-400" />, // 晴れ
  1: <Cloud className="w-8 h-8 text-gray-400" />, // 主に晴れ
  2: <Cloud className="w-8 h-8 text-gray-500" />, // 曇り
  3: <Cloud className="w-8 h-8 text-gray-600" />, // 曇り
  45: <CloudDrizzle className="w-8 h-8 text-blue-400" />, // 霧
  48: <CloudDrizzle className="w-8 h-8 text-blue-400" />, // 霧
  51: <CloudRain className="w-8 h-8 text-blue-400" />, // 小雨
  53: <CloudRain className="w-8 h-8 text-blue-500" />, // 雨
  55: <CloudRain className="w-8 h-8 text-blue-600" />, // 強い雨
  61: <CloudRain className="w-8 h-8 text-blue-400" />, // 小雨
  63: <CloudRain className="w-8 h-8 text-blue-500" />, // 雨
  65: <CloudRain className="w-8 h-8 text-blue-600" />, // 強い雨
  71: <CloudSnow className="w-8 h-8 text-blue-300" />, // 小雪
  73: <CloudSnow className="w-8 h-8 text-blue-400" />, // 雪
  75: <CloudSnow className="w-8 h-8 text-blue-600" />, // 強い雪
  80: <CloudRain className="w-8 h-8 text-blue-400" />, // にわか雨
  81: <CloudRain className="w-8 h-8 text-blue-500" />, // 強いにわか雨
  82: <CloudRain className="w-8 h-8 text-blue-700" />, // 激しいにわか雨
  95: <Zap className="w-8 h-8 text-yellow-500" />, // 雷雨
  96: <Zap className="w-8 h-8 text-yellow-600" />, // 雷雨
  99: <Zap className="w-8 h-8 text-yellow-700" />, // 雷雨
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

const SeoulWeather = () => {
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

  return (
    <div className="bg-blue-50 rounded-2xl shadow-lg p-6 mt-8">
      <h3 className="text-xl font-bold mb-4 text-blue-700 flex items-center">
        <span className="mr-2">ソウルの天気（5/4〜5/7）</span>
        <span className="text-xs text-gray-400">Powered by Open-Meteo</span>
      </h3>
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center">
        {weather ? weather.time.map((date, idx) => (
          <div key={date} className="flex flex-col items-center bg-white rounded-xl px-4 py-3 shadow">
            <div className="font-bold mb-1">{date.slice(5).replace('-', '/')}</div>
            <div>{weatherIcons[weather.weathercode[idx]] || <Cloud className="w-8 h-8" />}</div>
            <div className="text-sm mt-1">{weatherDescriptions[weather.weathercode[idx]] || '不明'}</div>
            <div className="text-base mt-1 font-semibold">{weather.temperature_2m_max[idx]}°C / {weather.temperature_2m_min[idx]}°C</div>
          </div>
        )) : <div className="text-xs text-gray-500">天気取得中...</div>}
      </div>
    </div>
  );
};

export default SeoulWeather;
