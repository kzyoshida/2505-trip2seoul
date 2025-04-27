import React, { useState } from 'react';

const ShoppingScreen = ({ shoppingList, toggleShoppingItem, shoppingLoading, addShoppingItem }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      addShoppingItem(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div className="space-y-6 pb-20">
      <h2 className="text-2xl font-bold mb-6">買い物リスト</h2>
      <form onSubmit={handleSubmit} className="flex space-x-2 mb-4">
        <input
          type="text"
          className="flex-grow border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
          placeholder="追加するものを入力..."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
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
          <div className="space-y-3">
            {shoppingList.map(item => (
              <div 
              key={item.id}
              onClick={() => toggleShoppingItem(item.id)}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200"
            >
              <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors duration-200 ${
                item.checked ? 'bg-pink-500 border-pink-500' : 'border-gray-300'
              }`}>
                {item.checked && (
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span className={`flex-grow ${item.checked ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                {item.text}
              </span>
            </div>
          ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingScreen;
