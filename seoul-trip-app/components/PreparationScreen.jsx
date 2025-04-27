import React, { useState } from 'react';

const preparationChecklist = [
  {
    label: '韓国電子入国申請（3日前から1日前まで）',
    link: null,
    note: null,
    onClick: 'earrival',
  },
  {
    label: 'Arexの乗車券セットeSIM（1GB）の事前購入',
    link: 'https://www.klook.com/ja/activity/1163-airport-to-seoul-city-center-arex-train-incheon/',
    note: '購入URL',
  },
  {
    label: 'Klookのアプリのダウンロード＆会員登録',
    link: 'https://s.klook.com/c/m14eENq93O',
    note: 'ダウンロードURL',
  },
  {
    label: 'KLIDE（タクシー）アプリのダウンロード',
    link: 'https://service.kride.kakaomobility.com/m_invite',
    note: 'ダウンロードURL',
  },
  {
    label: 'KLOOKでオリーブヤングのクーポンとバウチャーを購入する',
    link: 'https://www.klook.com/ja/activity/126803-olive-young-cash-voucher/',
    note: 'ダウンロードURL',
  },
];

const PreparationScreen = ({ setActiveTab }) => {
  const [checked, setChecked] = useState(Array(preparationChecklist.length).fill(false));

  const handleCheck = (idx) => {
    setChecked(prev => {
      const next = [...prev];
      next[idx] = !next[idx];
      return next;
    });
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">事前準備チェックリスト</h1>
      <ul className="space-y-4">
        {preparationChecklist.map((item, i) => (
          <li
            key={i}
            className={
              `bg-blue-50 rounded-xl p-4 shadow flex items-center space-x-4 ${item.onClick ? 'hover:bg-blue-100 cursor-pointer transition' : ''}`
            }
            onClick={item.onClick ? () => setActiveTab && setActiveTab(item.onClick) : undefined}
          >
            <input
              type="checkbox"
              checked={checked[i]}
              onChange={e => { e.stopPropagation(); handleCheck(i); }}
              className="w-5 h-5 mr-2 accent-blue-500"
              onClick={e => e.stopPropagation()}
            />
            <span className={`font-semibold text-lg text-blue-900 flex-grow ${item.onClick ? 'underline text-blue-700' : ''}`}>{item.label}</span>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline text-sm ml-2"
                onClick={e => e.stopPropagation()}
              >
                {item.note}
              </a>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-6 text-right text-sm text-gray-500">
        完了: {checked.filter(Boolean).length} / {preparationChecklist.length}
      </div>
    </div>
  );
};

export default PreparationScreen;
