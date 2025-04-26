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
              <div className="grid grid-cols-3 gap-4">
                {family.members.map((member, mIdx) => (
                  <div key={mIdx} className="flex flex-col items-center">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-20 h-20 rounded-full border object-cover mb-2"
                    />
                    <p className="text-base text-gray-700 font-medium text-center">{member.name}</p>
                  </div>
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
          {/* 吉田家（大阪発） */}
          <div className="bg-green-50 rounded-xl p-4">
            <p className="font-semibold text-green-700 mb-1">吉田家（大阪発）</p>
            <ul className="text-sm text-gray-700 mb-2">
              <li><span className="font-semibold">往路：</span>2025年5月4日（日）09:55発（KIX）→ 11:55着（ICN）<br />便名：エアソウル RS712</li>
              <li><span className="font-semibold">復路：</span>2025年5月7日（水）13:15発（ICN）→ 15:15着（KIX）<br />便名：エアソウル RS713</li>
              <li><span className="font-semibold">乗客数：</span>3名（大人2名＋子供1名）</li>
            </ul>
            <div className="text-xs text-gray-600">予約番号：138542349781537</div>
            <div className="text-xs text-gray-600">予約日：2025年3月8日</div>
          </div>
          {/* 下田家（東京発） */}
          <div className="bg-blue-50 rounded-xl p-4">
            <p className="font-semibold text-blue-700 mb-1">下田家（東京発）</p>
            <ul className="text-sm text-gray-700 mb-2">
              <li><span className="font-semibold">往路：</span>2025年5月4日（日）08:55発（NRT）→ 11:25着（ICN）<br />便名：ZIPAIR ZG041</li>
              <li><span className="font-semibold">復路：</span>2025年5月7日（水）12:55発（ICN）→ 15:30着（NRT）<br />便名：ZIPAIR ZG042</li>
              <li><span className="font-semibold">乗客数：</span>4名（大人2名＋子供2名）</li>
            </ul>
            <div className="text-xs text-gray-500">※予約番号は未確認</div>
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
      {/* 美容クリニック情報 */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center space-x-3 mb-4">
          <span className="inline-block bg-pink-100 p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13h6m2 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </span>
          <h3 className="text-xl font-bold text-pink-600">今回訪問予定の美容クリニック</h3>
        </div>
        <div className="bg-pink-50 rounded-xl p-4">
          <p className="font-semibold text-pink-700 mb-2">明洞ビンセントクリニック（皮膚クリニック）</p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-2">
            <li>ソウル・明洞駅すぐの人気美容皮膚科</li>
            <li>日本語対応スタッフ在籍で安心</li>
            <li>シミ・ほくろ除去、アートメイク、アンチエイジングなど幅広い施術</li>
            <li>旅行者にも人気で口コミ評価も高い</li>
          </ul>
          <div className="text-sm text-gray-700 mb-2">
            <div><span className="font-semibold">営業時間：</span>8:00～19:00（最終受付18:00）</div>
            <div><span className="font-semibold">住所：</span>ソウル特別市 中区 明洞8ナキル 27, 10F<br/>(서울특별시 중구 명동8나길 27, 10F)</div>
          </div>
          <a href="https://www.konest.com/contents/clinic_mise_detail.html?id=31341" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-pink-600 underline">コネスト公式クリニックページ</a>
        </div>
      </div>
    </div>
  );
};

export default InfoScreen;
