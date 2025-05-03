import React from 'react';
import { Plane, Users, Train, ShoppingBag, Hotel, ShoppingCart, Moon, Sparkles, Utensils, Car } from 'lucide-react';

export const scheduleData = [
  {
    date: '5月4日（日）',
    title: '出発日',
    icon: <Plane className="w-6 h-6" />,
    events: [
      { time: '09:55', title: '吉田家 大阪（KIX）出発', description: 'エアソウル RS712', icon: <Plane className="w-5 h-5 text-green-500" /> },
      { time: '11:25', title: '下田家 仁川（ICN）到着', description: '仁川国際空港', icon: <Plane className="w-5 h-5 text-blue-500" /> },
      { time: '11:55', title: '吉田家 ソウル（ICN）到着', description: '仁川国際空港', icon: <Plane className="w-5 h-5 text-green-500" /> },
      { time: '12:30〜13:00', title: '仁川空港ターミナル1で合流', description: '全員集合', icon: <Users className="w-5 h-5" /> },
      { time: '', title: 'CU（コンビニ）でWOWPASS受け取り・チャージ', description: '空港内のCUで受け取り・チャージ', icon: <ShoppingCart className="w-5 h-5" /> },
      { time: '13:30頃', title: '仁川空港発', description: 'A’REX直通列車でソウル駅へ（約43分）', icon: <Train className="w-5 h-5" /> },
      { time: '14:15頃', title: 'ソウル駅着', description: 'ソウル駅到着', icon: <Train className="w-5 h-5" /> },
      { time: '', title: 'ロッテマートで買い出し', description: 'お菓子・飲み物・子供のお土産・日用品など', icon: <ShoppingCart className="w-5 h-5" /> },
      { time: '16:00頃', title: '明洞到着', description: '買い物や散策', icon: <ShoppingBag className="w-5 h-5" /> },
      { time: '16:00', title: 'チェックイン', description: 'Palmtree Villa Myeongdong #201', icon: <Hotel className="w-5 h-5" /> },
      { time: 'パパ達', title: '両替・夜ご飯など買出し', description: 'チキン、キンパ、明洞餃子、果物、飲み物など', icon: <ShoppingCart className="w-5 h-5" /> },
      { time: 'ママ＆子供', title: '余力があればお風呂', description: '', icon: <Moon className="w-5 h-5" /> },
      { time: '夜', title: '元気だったら明洞へ', description: '', icon: <Moon className="w-5 h-5" /> },
    ]
  },
  {
    date: '5月5日（月）',
    title: '探索日',
    icon: <ShoppingBag className="w-6 h-6" />,
    events: [
      { time: '7:00', title: 'Isaacトースト 明洞店', description: 'サンドイッチをテイクアウト', icon: <Utensils className="w-5 h-5 text-yellow-500" /> },
      { time: '8:00', title: 'ママ達 美容皮膚科', description: '施術予約', icon: <Sparkles className="w-5 h-5" /> },
      { time: '10:00頃', title: '帰宅', description: '', icon: <Hotel className="w-5 h-5" /> },
      { time: '', title: '東大門総合市場（A棟）で買い物', description: '', icon: <ShoppingBag className="w-5 h-5" /> },
      { time: '東大門アウトレット', title: 'ショッピング', description: '', icon: <ShoppingBag className="w-5 h-5" /> },
      { time: '', title: '東大門アウトレット内で夕食', description: '', icon: <Utensils className="w-5 h-5 text-yellow-500" /> },
      { time: '夕方', title: '帰宅', description: '', icon: <Hotel className="w-5 h-5" /> },
    ]
  },
  {
    date: '5月6日（火）',
    title: 'ショッピング日',
    icon: <ShoppingCart className="w-6 h-6" />,
    events: [
      { time: '8:00', title: '美容皮膚科', description: 'パパ達の施術予約', icon: <Sparkles className="w-5 h-5" /> },
      { time: '10:00頃', title: '帰宅', description: '施術後一旦帰宅', icon: <Hotel className="w-5 h-5" /> },
      { time: 'その後', title: 'ロッテ百貨店で買い物後、南大門へ', description: 'ショッピング・観光', icon: <ShoppingBag className="w-5 h-5" /> },
      { time: '18:00', title: '王妃家（明洞中央店）', description: '', icon: <Utensils className="w-5 h-5 text-red-500" /> },
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
