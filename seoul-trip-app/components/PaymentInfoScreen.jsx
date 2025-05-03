import React, { useEffect, useState } from 'react';
import { CreditCard, DollarSign, Info, Wallet } from 'lucide-react';

const PaymentInfoScreen = () => {
  const [krwJpy, setKrwJpy] = useState(null);
  const [rateError, setRateError] = useState(null);

  useEffect(() => {
    fetch("https://api.frankfurter.app/latest?amount=1&from=KRW&to=JPY")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.rates && data.rates.JPY) {
          setKrwJpy(data.rates.JPY);
        } else {
          setRateError("レート取得失敗");
        }
      })
      .catch(() => setRateError("レート取得失敗"));
  }, []);

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 space-y-8">
    <h1 className="text-2xl font-bold mb-6 text-orange-700 flex items-center gap-2">
      <Wallet className="w-7 h-7" /> 両替・決済情報
    </h1>
    <section className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
      <h2 className="text-lg font-semibold text-blue-700 flex items-center gap-2">
        <DollarSign className="w-5 h-5" /> 両替情報
      </h2>
      <div className="mb-2 text-sm text-gray-700">
        <span className="font-semibold">現在の為替レート（KRW→JPY）:</span>
        {krwJpy !== null ? (
          <>
            <span className="ml-2">1 KRW ≈ {krwJpy} 円</span>
            <div className="mt-1 text-xs text-gray-600">
              1万円をこのレートで両替すると: <span className="font-semibold">{Math.floor(10000 / krwJpy).toLocaleString()} KRW</span>
            </div>
          </>
        ) : rateError ? (
          <span className="ml-2 text-red-600">{rateError}</span>
        ) : (
          <span className="ml-2 text-gray-400">取得中...</span>
        )}
      </div>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        <li>
          最新の換金レートはこちら: <a href="https://www.konest.com/contents/rate_ranking.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://www.konest.com/contents/rate_ranking.html</a>
        </li>
      </ul>
    </section>
    <section className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
      <h2 className="text-lg font-semibold text-pink-700 flex items-center gap-2">
        <CreditCard className="w-5 h-5" /> 決済情報
      </h2>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        <li>最もお得な決済方法は、絶対に使う分の日本円を現地に持っていき、大使館前の両替所で換金する方法</li>
        <li>ただし大金を持ち歩きたくない場合は、換金したウォンをWOWPASSに駅でチャージして使うのが便利</li>
        <li>想定以上に使ってしまった分からはクレジットカードを使う方がお得</li>
      </ul>
    </section>
    <section className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
      <h2 className="text-lg font-semibold text-purple-700 flex items-center gap-2">
        <Info className="w-5 h-5" /> T-moneyとWOWPASSについて
      </h2>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        <li>簡単に言うとT-moneyが日本のSUICA、WOWPASSがPayPayのようなもの</li>
        <li>WOWPASSを買えばT-moneyの機能がついているので、WOWPASSさえあれば大丈夫</li>
        <li>ただしWOWPASSのカード1枚の中でWOWPASSの残高とT-moneyの残高は別なので、WOWPASSにチャージしたとしてもT-moneyは別途チャージしないと電車に乗れない</li>
      </ul>
      <div className="mt-4 text-sm text-blue-700 space-y-1">
        <div>参考リンク:</div>
        <div>
          <a href="https://youojisanblog.com/wowpass-tmoney-hikaku/" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500">WOWPASSとT-moneyどっちがいい？違いと選び方を徹底解説！（PickMaster Labs）</a>
        </div>
        <div>
          <a href="https://zizitabi.com/entry/wowpass-tmoney" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500">WOWPASSとT-money違い、チャージ方法、払戻し解説！（旅好きアラサー女子の世界一周ブログ）</a>
        </div>
      </div>
    </section>
    {/* --- 気候同行カード（Climate Card）セクション --- */}
    <section className="bg-blue-50 rounded-lg p-4 mt-8">
      <h2 className="text-lg font-bold text-blue-700 mb-2">気候同行カード（Climate Card）</h2>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        <li>ソウルの地下鉄・バスが乗り放題になる交通カード</li>
        <li>公式情報によると「1日券の場合、1日に4回以上 地下鉄やバスを利用するならT-moneyよりお得」</li>
        <li>3回以下しか乗らない日はT-moneyの方が安くなる場合が多い</li>
        <li>運賃例（2025年3月以降）：地下鉄・バス1回 1,550ウォン（T-money利用時）</li>
        <li>例：気候同行カード1日券 5,500ウォン → 4回乗ると1回あたり1,375ウォン（5回以上ならさらに割安）</li>
        <li>旅行の行動範囲や日程に合わせて選ぶのがおすすめ</li>
      </ul>
      <div className="mt-3">参考リンク:</div>
      <div>
        <a href="https://www.konest.com/contents/traffic_info_detail.html?id=35211" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-500">気候同行カード(ソウル市地下鉄・バス乗り放題カード) | コネスト</a>
      </div>
    </section>
  </div>
  );
};

export default PaymentInfoScreen;
