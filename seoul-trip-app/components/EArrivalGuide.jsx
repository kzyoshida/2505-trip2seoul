import React from 'react';
const EArrivalGuide = () => (
  <div className="space-y-6 pb-20">
    <h2 className="text-2xl font-bold mb-6 text-blue-700">韓国 電子入国申告制度（e-Arrival Card）について</h2>
    <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
      <p className="text-lg font-semibold text-pink-700">【電子入国申告制度とは？】</p>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        <li>韓国入国時、紙の入国カードの代わりにオンラインで事前申請できる制度です。</li>
        <li>スマホやPCから <a href="https://www.e-arrivalcard.go.kr/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">公式サイト</a> で入力・提出します。</li>
        <li>入国審査がスムーズ＆ペーパーレス！</li>
      </ul>
      <p className="text-lg font-semibold text-pink-700 mt-4">【やり方・手順】</p>
      <ol className="list-decimal pl-5 text-gray-700 space-y-1">
        <li>韓国到着3日前から申請可能です。</li>
        <li>パスポート・フライト情報・滞在先・連絡先などを用意</li>
        <li><a href="https://www.e-arrivalcard.go.kr/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">e-Arrival Card公式サイト</a>にアクセス</li>
        <li>画面の案内に従い、必要事項を入力・提出（日本語対応あり）</li>
        <li>申請後、登録内容は72時間有効です</li>
        <li>入国時、申告済みであれば紙の入国カードは不要</li>
      </ol>
      <p className="text-lg font-semibold text-pink-700 mt-4">【注意点】</p>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        <li>申請は無料です</li>
        <li>申請内容に誤りがないようご注意ください</li>
        <li>公式サイト以外の偽サイトに注意</li>
      </ul>
      <div className="mt-6">
        <a href="https://www.e-arrivalcard.go.kr/" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-gradient-to-r from-blue-400 to-pink-400 text-white font-bold rounded-xl shadow hover:scale-105 transition-all">公式サイトで申告する</a>
      </div>
      <div className="mt-4 text-xs text-gray-400">出典: <a href="https://www.immigration.go.kr/immigration/3509/subview.do" target="_blank" rel="noopener noreferrer" className="underline">韓国法務部 出入国・外国人政策本部</a></div>
    </div>
  </div>
);

export default EArrivalGuide;
