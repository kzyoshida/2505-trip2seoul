import React from 'react';
import { Users, Plane, Hotel } from 'lucide-react';
import { families } from '../data/families';

const InfoScreen = () => {
  return (
    <div className="space-y-6 pb-20">
      <h2 className="text-2xl font-bold mb-6">旅行基本情報</h2>
      
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Users className="w-6 h-6 text-blue-500" />
          <h3 className="text-xl font-bold">参加メンバー</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {families.map((family, idx) => (
            <div key={idx} className="bg-blue-50 rounded-xl p-4">
              <p className="font-semibold text-blue-700 mb-2">{family.name}</p>
              <div className="space-y-1">
                {family.members.map((member, mIdx) => (
                  <p key={mIdx} className="text-sm text-gray-600">{member}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Plane className="w-6 h-6 text-green-500" />
          <h3 className="text-xl font-bold">フライト情報</h3>
        </div>
        <div className="space-y-4">
          <div className="bg-green-50 rounded-xl p-4">
            <p className="font-semibold text-green-700">往路：エアソウル RS712</p>
            <p className="text-sm">大阪（KIX）09:55 → ソウル（ICN）11:55</p>
            <p className="text-xs text-gray-600 mt-1">2025年5月4日（日）</p>
          </div>
          <div className="bg-green-50 rounded-xl p-4">
            <p className="font-semibold text-green-700">復路：エアソウル RS713</p>
            <p className="text-sm">ソウル（ICN）13:15 → 大阪（KIX）15:15</p>
            <p className="text-xs text-gray-600 mt-1">2025年5月7日（水）</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs text-gray-600">予約番号：138542349781537</p>
            <p className="text-xs text-gray-600">予約日：2025年3月8日</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Hotel className="w-6 h-6 text-purple-500" />
          <h3 className="text-xl font-bold">宿泊情報</h3>
        </div>
        <div className="bg-purple-50 rounded-xl p-4">
          <p className="font-semibold text-purple-700">Palmtree Villa Myeongdong #201</p>
          <p className="text-sm mt-2">41-6 Toegye-ro 20-gil, 明洞エリア</p>
          <div className="mt-3 space-y-1">
            <p className="text-sm">チェックイン：5月4日（日）16:00</p>
            <p className="text-sm">チェックアウト：5月7日（水）11:00</p>
            <p className="text-sm">滞在：3泊</p>
            <p className="text-sm">宿泊人数：大人4名 ＋ 乳幼児3名</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoScreen;
