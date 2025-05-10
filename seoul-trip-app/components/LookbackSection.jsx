import React from "react";
import { FaUtensils, FaBed, FaShoppingCart, FaCar, FaClinicMedical, FaChild, FaQuestionCircle } from "react-icons/fa";

// カテゴリごとのアイコン割り当て
const iconMap = {
  "食事": <FaUtensils color="#e67e22" />,
  "宿泊": <FaBed color="#2980b9" />,
  "買い物": <FaShoppingCart color="#16a085" />,
  "移動": <FaCar color="#f39c12" />,
  "美容皮膚科": <FaClinicMedical color="#c0392b" />,
  "子供": <FaChild color="#8e44ad" />,
  "その他": <FaQuestionCircle color="#7f8c8d" />,
};

// カテゴリ推定関数
function guessCategory(text) {
  if (/宿泊|部屋|寝/.test(text)) return "宿泊";
  if (/チキン|餃子|ラーメン|トースト|レストラン|食事|昼食|夕食|朝食|キンパ|麺|ビビンバ|フォー|ポッサム|チヂミ|トッポギ|パリスバゲット|アイスティー/.test(text)) return "食事";
  if (/マート|百貨店|市場|ショッピング|カバン|布団|靴|帽子|買い物|スーパー/.test(text)) return "買い物";
  if (/移動|駅|空港|配車|Arex|チャージ|WOWPASS|kride/.test(text)) return "移動";
  if (/クリニック|美容/.test(text)) return "美容皮膚科";
  if (/子供|キッズ|遊ばせる/.test(text)) return "子供";
  return "その他";
}

// 日別データをpropsで受け取る
export default function LookbackSection({ days }) {
  return (
    <section style={{ margin: "32px 0", padding: "24px", background: "#f9fafb", borderRadius: 16 }}>
      <h2 style={{ fontSize: 28, marginBottom: 16 }}>旅行の後書き</h2>
      {days.map(day => (
        <div key={day.title} style={{ marginBottom: 28 }}>
          <h3 style={{ fontSize: 22, margin: "24px 0 12px", color: "#34495e" }}>{day.title}</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {day.topics.map((topic, idx) => {
              const cat = guessCategory(topic.title + topic.items.join(" "));
              // 4日目だけ特別なスタイル
              if (day.title === "4日目") {
                return (
                  <div key={idx} style={{ background: "#fff", borderRadius: 10, boxShadow: "0 1px 4px #eee", padding: 16, marginBottom: 8 }}>
                    <div style={{ fontWeight: 700, color: "#1976d2", fontSize: 18, marginBottom: 8, borderLeft: '4px solid #1976d2', paddingLeft: 10 }}>{topic.title}</div>
                    <ul style={{ margin: 0, paddingLeft: 28 }}>
                      {topic.items.map((item, i) => {
                        const mdLinkMatch = item.match(/^\[(.+?)\]\((https?:\/\/[^)]+)\)$/);
                        if (mdLinkMatch) {
                          return (
                            <li key={i} style={{ color: "#1976d2", fontWeight: 600, lineHeight: 1.8, fontSize: 16 }}>
                              <a href={mdLinkMatch[2]} target="_blank" rel="noopener noreferrer" style={{ color: "#1976d2", textDecoration: "underline" }}>{mdLinkMatch[1]}</a>
                            </li>
                          );
                        }
                        // サブ見出し的なもの（「○○から△△まで」等）は太字＋インデント
                        if (/^(ホテルから|ソウル駅から|空港内|移動|配車|Arexで移動)/.test(item)) {
                          return <li key={i} style={{ fontWeight: 700, color: '#34495e', marginTop: 6, marginBottom: 2, fontSize: 15, paddingLeft: 8 }}>{item}</li>;
                        }
                        return <li key={i} style={{ color: "#555", lineHeight: 1.7, fontSize: 15, paddingLeft: 16 }}>{item}</li>;
                      })}
                    </ul>
                  </div>
                );
              }
              // 通常日付の表示
              return (
                <div key={idx} style={{ display: "flex", alignItems: "flex-start", background: "#fff", borderRadius: 10, boxShadow: "0 1px 4px #eee", padding: 12, gap: 16 }}>
                  <div style={{ fontSize: 24, marginTop: 2 }}>{iconMap[cat] || iconMap["その他"]}</div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#2c3e50", marginBottom: 4 }}>{topic.title}</div>
                    <ul style={{ margin: 0, paddingLeft: 18 }}>
                      {topic.items.map((item, i) => {
                        const mdLinkMatch = item.match(/^\[(.+?)\]\((https?:\/\/[^)]+)\)$/);
                        if (mdLinkMatch) {
                          return (
                            <li key={i} style={{ color: "#555", lineHeight: 1.7 }}>
                              <a href={mdLinkMatch[2]} target="_blank" rel="noopener noreferrer" style={{ color: "#1976d2", textDecoration: "underline" }}>{mdLinkMatch[1]}</a>
                            </li>
                          );
                        }
                        return <li key={i} style={{ color: "#555", lineHeight: 1.7 }}>{item}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
