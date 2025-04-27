import React, { useState, useMemo } from 'react'; // useMemo をインポート
import { families } from '../data/families';
import { PlusCircle, Trash2, Link2, CheckCircle2, Circle, MapPin, Tag, ShoppingBag, ExternalLink, Users, Square, CheckSquare } from 'lucide-react'; // Square, CheckSquare アイコンを追加

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

  // 既存の場所リストをメモ化
  const existingPlaces = useMemo(() => {
    return Array.from(new Set(shoppingList.filter(item => item.family === familyValue && item.place).map(item => item.place.trim())));
  }, [shoppingList, familyValue]);

  return (
    <div className="space-y-8 pb-24"> {/* space と padding を調整 */}
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-md">🛒 Shopping List</h2>
      {/* --- フォームセクション --- */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6 bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* --- 家族選択 --- */}
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-purple-400 bg-purple-50/50 shadow-sm transition-all">
            <Tag className="w-5 h-5 text-purple-500" />
            <select
              className="flex-grow bg-transparent focus:outline-none font-semibold text-purple-800"
              value={familyValue}
              onChange={e => setFamilyValue(e.target.value)}
            >
              {families.map(f => (
                <option key={f.name} value={f.name}>{f.name}</option>
              ))}
            </select>
          </div>

          {/* --- 購入場所入力 --- */}
          <div className={`flex items-center gap-2 border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400 bg-blue-50/50 shadow-sm transition-all ${newPlaceActive ? 'opacity-50 cursor-not-allowed' : ''}`}>
            <MapPin className="w-5 h-5 text-blue-500" />
            <input
              list="place-options"
              type="text"
              className="flex-grow bg-transparent focus:outline-none text-blue-800 placeholder-blue-400"
              placeholder="購入場所を選択 or 入力"
              value={placeValue}
              onChange={e => setPlaceValue(e.target.value)}
              disabled={newPlaceActive}
            />
            <datalist id="place-options">
              {existingPlaces.map(place => (
                <option key={place} value={place} />
              ))}
            </datalist>
          </div>
          {/* 新しい場所ボタンは削除し、入力欄で直接新規入力可能に */}

          {/* --- 商品名入力 --- */}
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-pink-400 bg-pink-50/50 shadow-sm transition-all">
            <ShoppingBag className="w-5 h-5 text-pink-500" />
            <input
              type="text"
              className="flex-grow bg-transparent focus:outline-none text-pink-800 placeholder-pink-400"
              placeholder="商品名を入力..."
              value={itemValue}
              onChange={e => setItemValue(e.target.value)}
              required // 商品名は必須に
            />
          </div>
        </div>

        {/* --- URL入力 & 追加ボタン --- */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex items-center gap-2 border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-green-400 bg-green-50/50 shadow-sm transition-all flex-grow w-full sm:w-auto">
            <ExternalLink className="w-5 h-5 text-green-500" />
            <input
              type="url" // typeをurlに変更
              className="flex-grow bg-transparent focus:outline-none text-green-800 placeholder-green-400"
              placeholder="参考URL (任意)"
              value={urlValue}
              onChange={e => setUrlValue(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <PlusCircle className="w-5 h-5" /> 追加
          </button>
        </div>

        {/* 新規場所入力欄は不要になったため削除 */}
      </form>

      {/* --- リスト表示セクション --- */}
      <div className="bg-gradient-to-b from-gray-50 to-white rounded-3xl shadow-inner p-6 border border-gray-100">
        <h3 className="text-xl font-semibold mb-6 text-gray-700 text-center">🇰🇷 韓国で買いたいものリスト</h3>
        {shoppingLoading ? (
          <div className="text-gray-400 text-center py-12 text-lg">読み込み中... <span className="animate-spin inline-block ml-2">⏳</span></div>
        ) : shoppingList.length === 0 ? (
          <div className="text-gray-400 text-center py-12 text-lg">🛒 まだリストにアイテムがありません</div>
        ) : (
          <div className="space-y-12"> {/* space を調整 */}
            {families.map((fam, idx) => (
              <div
                key={fam.name}
                className={`rounded-3xl shadow-lg border ${idx % 2 === 0 ? 'border-pink-100 bg-gradient-to-br from-pink-50 via-white to-purple-50' : 'border-blue-100 bg-gradient-to-br from-blue-50 via-white to-green-50'} p-6 transition-all duration-300 hover:shadow-xl`}
              >
                <div className="flex items-center mb-6">
                  {/* 絵文字アイコンを Users アイコンに変更 */}
                  <span className={`inline-flex items-center justify-center w-12 h-12 rounded-full shadow-md mr-4 ${idx % 2 === 0 ? 'bg-pink-100 text-pink-600' : 'bg-blue-100 text-blue-600'}`}>
                    <Users className="w-7 h-7" /> {/* サイズ調整 */}
                  </span>
                  <span className="text-2xl font-bold tracking-tight text-gray-800">{fam.name}</span>
                </div>
                {Object.keys(groupedByFamily[fam.name]).length === 0 ? (
                  <div className="text-gray-500 text-center py-4 italic">この家族のリストは空です</div>
                ) : (
                  <div className="space-y-8"> {/* space を調整 */}
                    {Object.entries(groupedByFamily[fam.name]).map(([place, items]) => (
                      <div key={place} className="pl-4 border-l-4 border-yellow-300">
                        <div className="flex items-center gap-2 mb-4">
                          <MapPin className="w-5 h-5 text-yellow-600" />
                          <span className="font-semibold text-lg text-yellow-800 bg-yellow-100 px-3 py-1 rounded-full shadow-sm">{place}</span>
                        </div>
                        <div className="space-y-3">
                          {items.map(item => (
                            <div
                              key={item.id}
                              // チェック状態に応じて背景と透明度を変更
                              className={`flex items-center space-x-4 p-4 rounded-xl border shadow-sm transition-all duration-300 group ${
                                item.checked
                                  ? 'bg-green-50/70 border-green-100 opacity-80' // チェック済みスタイル
                                  : 'bg-white/90 hover:bg-yellow-50/80 hover:shadow-md' // 未チェック＋ホバー
                              }`}
                            >
                              {/* チェックボタン (チェックボックス風) */}
                              <button
                                onClick={() => toggleShoppingItem(item.id)}
                                // rounded-full を削除し、rounded-md を追加
                                className={`w-7 h-7 flex-shrink-0 flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
  item.checked
    ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white focus:ring-green-400 rounded-md' // checked: keep color and rounded
    : 'text-gray-400 hover:text-pink-500 focus:ring-pink-300' // unchecked: no border, no bg, no shadow, no rounded
}`}
                                title={item.checked ? "未チェックに戻す" : "チェックする"}
                                type="button"
                              >
                                {item.checked ? (
  <CheckSquare className="w-5 h-5" />
) : (
  <Square className="w-5 h-5" />
)}
                              </button>
                              {/* アイテム名とリンク */}
                              <div className="flex-grow min-w-0"> {/* Prevent overflow */}
                                {item.url ? (
                                  <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    // チェック状態に応じてテキスト色とスタイルを変更
                                    className={`font-medium transition-colors flex items-center gap-1.5 group ${
                                      item.checked
                                        ? 'text-gray-400 line-through hover:text-gray-500' // チェック済みリンク
                                        : 'text-blue-600 hover:text-blue-800' // 未チェックリンク
                                    }`}
                                    title="リンクを開く"
                                  >
                                    <span className={`truncate ${item.checked ? '' : 'group-hover:underline'}`}>{item.text}</span>
                                    <ExternalLink className="w-4 h-4 inline-block flex-shrink-0" />
                                  </a>
                                ) : (
                                  // チェック状態に応じてテキスト色とスタイルを変更
                                  <span className={`font-medium truncate ${
                                    item.checked
                                      ? 'text-gray-400 line-through' // チェック済みテキスト
                                      : 'text-gray-800' // 未チェックテキスト
                                  }`}>
                                    {item.text}
                                  </span>
                                )}
                              </div>
                              {/* 削除ボタン - 常に表示 */}
                              <button
                                onClick={() => deleteShoppingItem(item.id)}
                                className="ml-auto flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 hover:bg-red-100 text-gray-400 hover:text-red-500 transition-all duration-200 shadow-sm"
                                title="削除"
                                type="button"
                              >
                                <Trash2 className="w-5 h-5" />
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
