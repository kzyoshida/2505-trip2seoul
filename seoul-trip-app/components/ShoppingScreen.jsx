import React from 'react';

const ShoppingScreen = ({ shoppingList, toggleShoppingItem }) => {
  return (
    <div className="space-y-6 pb-20">
      <h2 className="text-2xl font-bold mb-6">買い物リスト</h2>
      
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">韓国で買いたいもの</h3>
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
      </div>
    </div>
  );
};

export default ShoppingScreen;
