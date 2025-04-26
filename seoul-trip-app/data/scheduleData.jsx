import React from 'react';
import { Plane, Users, Train, ShoppingBag, Hotel, ShoppingCart, Moon, Sparkles, Utensils, Car } from 'lucide-react';

export const scheduleData = [
  {
    date: '5月4日（日）',
    title: '出発日',
    icon: <Plane className="w-6 h-6" />,
    events: [
      // 下田家
      { time: '08:55', title: '下田家 東京・成田（NRT）出発', description: 'ZIPAIR ZG041', icon: <Plane className="w-5 h-5 text-blue-500" /> },
      { time: '11:25', title: '下田家 仁川（ICN）到着', description: '仁川国際空港', icon: <Plane className="w-5 h-5 text-blue-500" /> },
      // 吉田家
      { time: '09:55', title: '吉田家 大阪（KIX）出発', description: 'エアソウル RS712', icon: <Plane className="w-5 h-5 text-green-500" /> },
      { time: '11:55', title: '吉田家 ソウル（ICN）到着', description: '仁川国際空港', icon: <Plane className="w-5 h-5 text-green-500" /> },
      // 合流
      { time: '12:30〜13:00', title: '空港で合流', description: 'ターミナル1で合流', icon: <Users className="w-5 h-5" /> },
      // 共通行動
      { time: '13:30頃', title: 'A\'REX乗車', description: '空港鉄道でソウル駅へ（約43分）', icon: <Train className="w-5 h-5" /> },
      { time: '14:15頃', title: '地下鉄移動', description: '4号線で明洞駅へ（約4分）', icon: <Train className="w-5 h-5" /> },
      { time: '14:30〜15:00', title: '明洞到着', description: '買い物や街の散策', icon: <ShoppingBag className="w-5 h-5" /> },
      { time: '16:00', title: 'チェックイン', description: 'Palmtree Villa Myeongdong #201', icon: <Hotel className="w-5 h-5" /> },
      { time: '夕方', title: '買い出し', description: 'パパ達：夜ご飯の調達（チキン、キンパ等）', icon: <ShoppingCart className="w-5 h-5" /> },
      { time: '夜', title: '自由時間', description: '元気だったら明洞へ', icon: <Moon className="w-5 h-5" /> },
    ]
  },
  {
    date: '5月5日（月）',
    title: '探索日',
    icon: <ShoppingBag className="w-6 h-6" />,
    events: [
      { time: '8:00', title: '美容皮膚科', description: 'ママ達の施術予約', icon: <Sparkles className="w-5 h-5" /> },
      { time: '10:00頃', title: '帰宅', description: '施術後一旦帰宅', icon: <Hotel className="w-5 h-5" /> },
      { time: '午後', title: '東大門アウトレット', description: 'ショッピング', icon: <ShoppingBag className="w-5 h-5" /> },
      { time: '夕方', title: '帰宅', description: '宿泊先へ戻る', icon: <Hotel className="w-5 h-5" /> },
      { time: '夜', title: '夕食', description: 'どこかお店で夕食を検討', icon: <Utensils className="w-5 h-5" /> },
    ]
  },
  {
    date: '5月6日（火）',
    title: 'ショッピング日',
    icon: <ShoppingCart className="w-6 h-6" />,
    events: [
      { time: '8:00', title: '美容皮膚科', description: 'パパ達の施術予約', icon: <Sparkles className="w-5 h-5" /> },
      { time: '10:00頃', title: '帰宅', description: '施術後一旦帰宅', icon: <Hotel className="w-5 h-5" /> },
      { time: 'その後', title: 'ロッテ百貨店', description: 'ショッピング', icon: <ShoppingBag className="w-5 h-5" /> },
    ]
  },
  {
    date: '5月7日（水）',
    title: '帰国日',
    icon: <Plane className="w-6 h-6" />,
    events: [
      // 共通イベント
      { time: '10:00', title: 'チェックアウト', description: 'Palmtree Villa Myeongdong #201', icon: <Hotel className="w-5 h-5" /> },
      { time: '10:10', title: 'タクシー移動', description: 'ソウル駅へ（約10〜20分）', icon: <Car className="w-5 h-5" /> },
      { time: '10:40', title: 'AREX乗車', description: '仁川空港行き直通列車（約43分）', icon: <Train className="w-5 h-5" /> },
      { time: '11:23', title: '空港到着', description: '仁川国際空港', icon: <Plane className="w-5 h-5" /> },
      // 下田家
      { time: '12:55', title: '下田家 仁川（ICN）出発', description: 'ZIPAIR ZG042', icon: <Plane className="w-5 h-5 text-blue-500" /> },
      { time: '15:30', title: '下田家 成田（NRT）到着', description: '成田国際空港', icon: <Plane className="w-5 h-5 text-blue-500" /> },
      // 吉田家
      { time: '13:15', title: '吉田家 ソウル（ICN）出発', description: 'エアソウル RS713', icon: <Plane className="w-5 h-5 text-green-500" /> },
      { time: '15:15', title: '吉田家 大阪（KIX）到着', description: '関西国際空港', icon: <Plane className="w-5 h-5 text-green-500" /> },
    ]
  }
];
