import React from 'react';
import { Train, Plane, MapPin, Map, AlertCircle, Globe } from 'lucide-react';

export const usefulLinks = [
  { name: 'AREX公式サイト', url: 'https://www.arex.co.kr/main.do', icon: <Train className="w-5 h-5" /> },
  { name: '仁川空港公式サイト', url: 'https://www.airport.kr/ap/ja/index.do', icon: <Plane className="w-5 h-5" /> },
  { name: '明洞エリア情報', url: 'https://www.konest.com/contents/area_mise_detail.html?id=1', icon: <MapPin className="w-5 h-5" /> },
  { name: '韓国地下鉄路線図', url: 'https://www.seoulmetro.co.kr/en/page.do?menuIdx=355', icon: <Map className="w-5 h-5" /> },
  { name: 'モバイルバッテリー持ち込み注意', url: 'https://tantoonni-log.com/korea-mobile-battery/', icon: <AlertCircle className="w-5 h-5" /> },
  { name: 'K-ETA申請サイト', url: 'https://www.k-eta.go.kr/portal/newapply/index.do?locale=JP', icon: <Globe className="w-5 h-5" /> },
];
