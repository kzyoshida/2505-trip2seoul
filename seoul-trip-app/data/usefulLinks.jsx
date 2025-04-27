import React from 'react';
import { Train, Plane, MapPin, Map, AlertCircle, Globe, Utensils } from 'lucide-react';

export const usefulLinks = [
  { name: 'AREX公式サイト', url: 'https://www.arex.co.kr/main.do', icon: <Train className="w-5 h-5" /> },
  { name: '仁川空港公式サイト（日本語）', url: 'https://www.airport.kr/ap/ja/index.do', icon: <Plane className="w-5 h-5" /> },
  { name: '明洞エリア情報（コネスト）', url: 'https://www.konest.com/contents/area_mise_detail.html?id=1', icon: <MapPin className="w-5 h-5" /> },
  { name: '韓国地下鉄路線図（英語）', url: 'https://www.seoulmetro.co.kr/en/page.do?menuIdx=355', icon: <Map className="w-5 h-5" /> },
  { name: 'モバイルバッテリー機内持ち込み注意点（2025年3月最新）', url: 'https://tantoonni-log.com/korea-mobile-battery/', icon: <AlertCircle className="w-5 h-5" /> },
  { name: '韓国電子入国申請（K-ETA）公式サイト', url: 'https://www.k-eta.go.kr/portal/newapply/index.do?locale=JP', icon: <Globe className="w-5 h-5" /> },
  { name: 'Isaacトースト明洞店', url: 'https://www.konest.com/contents/gourmet_mise_detail.html?id=11006', icon: <Utensils className="w-5 h-5 text-yellow-500" /> },
  { name: '王妃家（明洞中央店）', url: 'https://www.konest.com/contents/gourmet_mise_detail.html?id=5519&mobile', icon: <Utensils className="w-5 h-5 text-red-500" /> },
  { name: 'ソウォン（お粥）', url: 'https://tabelog.com/southkorea/A5301/A530101/53000396/', icon: <Utensils className="w-5 h-5 text-green-600" /> },
  { name: 'BHCチキン', url: 'https://www.konest.com/contents/gourmet_mise_detail.html?id=15851', icon: <Utensils className="w-5 h-5 text-orange-500" /> },
  { name: 'Lilliput（現代アウトレット8F）', url: 'https://www.youtube.com/watch?v=87rIyAdoBHo', icon: <Utensils className="w-5 h-5 text-blue-500" /> },
];
