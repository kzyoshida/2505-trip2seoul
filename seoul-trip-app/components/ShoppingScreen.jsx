import React, { useState } from 'react';

const ShoppingScreen = ({ shoppingList, toggleShoppingItem, shoppingLoading, addShoppingItem, deleteShoppingItem }) => {
  const [itemValue, setItemValue] = useState('');
  const [placeValue, setPlaceValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemValue.trim() !== '') {
      addShoppingItem(itemValue.trim(), placeValue.trim());
      setItemValue('');
      setPlaceValue('');
    }
  };

  // 購入場所ごとにグループ化
  const grouped = shoppingList.reduce((acc, item) => {
    const place = item.place || '未指定';
    if (!acc[place]) acc[place] = [];
    acc[place].push(item);
    return acc;
  }, {});

  return (
    <div className="space-y-6 pb-20">
      <h2 className="text-2xl font-bold mb-6">買い物リスト</h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-4">
        <input
          type="text"
          className="flex-grow border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="購入場所（例: 明洞, 空港, コンビニ）"
          value={placeValue}
          onChange={e => setPlaceValue(e.target.value)}
        />
        <input
          type="text"
          className="flex-grow border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
          placeholder="商品名を入力..."
          value={itemValue}
          onChange={e => setItemValue(e.target.value)}
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
          <div className="space-y-6">
            {Object.entries(grouped).map(([place, items]) => (
              <div key={place}>
                <div className="font-bold text-blue-600 mb-2">{place}</div>
                <div className="space-y-3">
                  {items.map(item => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200 group"
                    >
                      <div
                        onClick={() => toggleShoppingItem(item.id)}
                        className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors duration-200 ${
                          item.checked ? 'bg-pink-500 border-pink-500' : 'border-gray-300'
                        }`}
                      >
                        {item.checked && (
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className={`flex-grow ${item.checked ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                        {item.text}
                      </span>
                      <button
                        onClick={() => deleteShoppingItem(item.id)}
                        className="ml-2 text-gray-300 hover:text-red-500 transition-colors"
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
    </div>
  );
};

export default ShoppingScreen;
