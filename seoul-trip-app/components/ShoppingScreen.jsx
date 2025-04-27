import React, { useState } from 'react';
import { families } from '../data/families';

const ShoppingScreen = ({ shoppingList, toggleShoppingItem, shoppingLoading, addShoppingItem, deleteShoppingItem }) => {
  const [itemValue, setItemValue] = useState('');
  const [placeValue, setPlaceValue] = useState('');
  const [urlValue, setUrlValue] = useState('');
  const [familyValue, setFamilyValue] = useState(families[0].name);
  const [newPlaceActive, setNewPlaceActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemValue.trim() !== '') {
      addShoppingItem(itemValue.trim(), placeValue.trim(), urlValue.trim(), familyValue);
      setItemValue('');
      setPlaceValue('');
      setUrlValue('');
    }
  };

  // family→place→itemsの階層でリストを構築
  const groupedByFamily = families.reduce((acc, fam) => {
    const items = shoppingList.filter(item => item.family === fam.name);
    const placeGroups = items.reduce((acc2, item) => {
      const place = item.place || '未指定';
      if (!acc2[place]) acc2[place] = [];
      acc2[place].push(item);
      return acc2;
    }, {});
    acc[fam.name] = placeGroups;
    return acc;
  }, {});

  return (
    <div className="space-y-6 pb-20">
      <h2 className="text-2xl font-bold mb-6">買い物リスト</h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-4">
        <select
          className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          value={familyValue}
          onChange={e => setFamilyValue(e.target.value)}
        >
          {families.map(f => (
            <option key={f.name} value={f.name}>{f.name}</option>
          ))}
        </select>
        {/* 購入場所入力: 既存候補 or 新規追加 */}
        <div className="flex flex-col sm:flex-row gap-2 flex-grow">
          <input
            list="place-options"
            type="text"
            className="flex-grow border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="購入場所を選択（例: 明洞, 空港, コンビニ）"
            value={placeValue}
            onChange={e => setPlaceValue(e.target.value)}
            disabled={newPlaceActive}
          />
          <datalist id="place-options">
            {Array.from(new Set(shoppingList.filter(item => item.family === familyValue && item.place).map(item => item.place.trim()))).map(place => (
              <option key={place} value={place} />
            ))}
          </datalist>
          <button
            type="button"
            className="border px-2 py-1 rounded bg-yellow-100 hover:bg-yellow-200 text-yellow-900 text-xs font-semibold whitespace-nowrap"
            onClick={() => {
              setNewPlaceActive(true);
              setPlaceValue('');
            }}
            disabled={newPlaceActive}
          >
            新しい場所を追加
          </button>
        </div>
        {/* 新規場所入力欄 */}
        {newPlaceActive && (
          <div className="flex gap-2 items-center mt-2">
            <input
              type="text"
              className="flex-grow border border-yellow-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="新しい購入場所を入力"
              value={placeValue}
              onChange={e => setPlaceValue(e.target.value)}
              autoFocus
            />
            <button
              type="button"
              className="px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 text-gray-600 text-xs font-semibold"
              onClick={() => {
                setNewPlaceActive(false);
                setPlaceValue('');
              }}
            >
              キャンセル
            </button>
          </div>
        )}
        <input
          type="text"
          className="flex-grow border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
          placeholder="商品名を入力..."
          value={itemValue}
          onChange={e => setItemValue(e.target.value)}
        />
        <input
          type="url"
          className="flex-grow border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
          placeholder="参考URL（任意）"
          value={urlValue}
          onChange={e => setUrlValue(e.target.value)}
        />
        <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-pink-600 transition-colors">追加</button>
      </form>
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">韓国で買いたいもの</h3>
        {shoppingLoading ? (
          <div className="text-gray-400 text-center py-8">読み込み中...</div>
        ) : shoppingList.length === 0 ? (
          <div className="text-gray-400 text-center py-8">リストがありません</div>
        ) : (
          <div className="space-y-10">
            {families.map((fam, idx) => (
              <div
                key={fam.name}
                className={`mb-8 rounded-3xl shadow-xl border-2 ${idx % 2 === 0 ? 'border-pink-200 bg-gradient-to-br from-pink-50 via-white to-purple-50' : 'border-blue-200 bg-gradient-to-br from-blue-50 via-white to-green-50'} p-6`}
              >
                <div className="flex items-center mb-5">
                  <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full shadow-md mr-3 text-2xl ${idx % 2 === 0 ? 'bg-pink-100 text-pink-500' : 'bg-blue-100 text-blue-500'}`}>👨‍👩‍👧‍👦</span>
                  <span className="text-2xl font-extrabold tracking-wide drop-shadow text-gray-800">{fam.name}</span>
                </div>
                {Object.keys(groupedByFamily[fam.name]).length === 0 ? (
                  <div className="text-gray-400 text-sm mb-4">リストがありません</div>
                ) : (
                  <div className="space-y-6">
                    {Object.entries(groupedByFamily[fam.name]).map(([place, items]) => (
                      <div key={place} className="mb-2">
                        <div className="inline-block px-3 py-1 mb-3 rounded-full bg-gradient-to-r from-yellow-200 to-yellow-400 text-yellow-900 font-semibold shadow-sm text-base">
                          <span className="mr-1">📍</span>{place}
                        </div>
                        <div className="space-y-2">
                          {items.map(item => (
                            <div
                              key={item.id}
                              className={`flex items-center space-x-3 p-3 rounded-xl border bg-white/80 shadow-sm hover:shadow-lg transition-all duration-200 group ${item.checked ? 'opacity-60' : ''}`}
                            >
                              <button
                                onClick={() => toggleShoppingItem(item.id)}
                                className={`w-7 h-7 flex items-center justify-center rounded-full border-2 transition-colors duration-200 focus:outline-none ${item.checked ? 'bg-gradient-to-tr from-pink-400 to-pink-600 border-pink-400 text-white' : 'border-gray-300 bg-gray-50 text-gray-400 hover:border-pink-400 hover:bg-pink-50'}`}
                                title="チェック"
                                type="button"
                              >
                                {item.checked && (
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </button>
                              {item.url ? (
                                <a
                                  href={item.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`flex-grow underline font-medium text-blue-700 hover:text-blue-900 transition-colors ${item.checked ? 'line-through text-gray-400' : ''}`}
                                >
                                  {item.text}
                                </a>
                              ) : (
                                <span className={`flex-grow font-medium ${item.checked ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                                  {item.text}
                                </span>
                              )}
                              <button
                                onClick={() => deleteShoppingItem(item.id)}
                                className="ml-2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-100 text-gray-400 hover:text-red-500 transition-colors"
                                title="削除"
                                type="button"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingScreen;
