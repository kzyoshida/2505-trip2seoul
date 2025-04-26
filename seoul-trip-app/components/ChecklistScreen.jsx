import React from 'react';

const ChecklistScreen = ({ checklistItems, toggleChecklistItem }) => {
  const categories = {
    essential: '必需品',
    electronics: '電子機器',
    clothing: '衣類',
    personal: '日用品',
    medical: '医療品'
  };

  const categorizedItems = checklistItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="space-y-6 pb-20">
      <h2 className="text-2xl font-bold mb-6">持ち物チェックリスト</h2>
      
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="space-y-4">
          {Object.entries(categorizedItems).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-gray-500 mb-2 uppercase">
                {categories[category] || category}
              </h4>
              {items.map(item => (
                <div 
                  key={item.id}
                  onClick={() => toggleChecklistItem(item.id)}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                >
                  <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors duration-200 ${
                    item.checked ? 'bg-green-500 border-green-500' : 'border-gray-300'
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
          ))}
        </div>
      </div>
      
      <div className="bg-yellow-50 rounded-xl p-4">
        <p className="text-yellow-700 font-medium">
          完了: {checklistItems.filter(item => item.checked).length} / {checklistItems.length}
        </p>
      </div>
    </div>
  );
};

export default ChecklistScreen;
