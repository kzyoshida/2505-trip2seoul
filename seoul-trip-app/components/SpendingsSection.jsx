import React from "react";
import { FaMoneyBillWave, FaYenSign, FaWonSign, FaUserFriends } from "react-icons/fa";
import spendings from "./SpendingsData";

const currencyIcon = {
  yen: <FaYenSign style={{ color: "#2d3748" }} />,
  won: <FaWonSign style={{ color: "#16a085" }} />,
};

function groupByFamily(data) {
  const result = {};
  data.forEach((s) => {
    if (!result[s.family]) result[s.family] = [];
    result[s.family].push(s);
  });
  return result;
}

export default function SpendingsSection() {
  // 日本円合計
  const yoshidaTotal = spendings.filter(s => s.family === "吉田" && s.price_jpy).reduce((sum, s) => sum + s.price_jpy, 0);
  const shimodaTotal = spendings.filter(s => s.family === "下田" && s.price_jpy).reduce((sum, s) => sum + s.price_jpy, 0);
  // 割り勘計算
  const total = yoshidaTotal + shimodaTotal;
  const half = Math.round(total / 2);
  let settlementText = "";
  if (yoshidaTotal > shimodaTotal) {
    settlementText = `下田家が吉田家に${(yoshidaTotal - half).toLocaleString()}円渡す`;
  } else if (shimodaTotal > yoshidaTotal) {
    settlementText = `吉田家が下田家に${(shimodaTotal - half).toLocaleString()}円渡す`;
  } else {
    settlementText = "ちょうど半分です！精算不要";
  }

  return (
    <section style={{ margin: "32px 0", padding: "24px", background: "#f9fafb", borderRadius: 16 }}>
      <h2 style={{ fontSize: 28, marginBottom: 24, display: "flex", alignItems: "center", gap: 12 }}>
        使ったお金
      </h2>
      <div style={{ display: "flex", gap: 32, marginBottom: 16 }}>
        <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 1px 6px #eee", padding: 18, minWidth: 220, textAlign: "center" }}>
          <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 6, color: "#2980b9" }}>吉田家</div>
          <div style={{ fontSize: 17, marginBottom: 2, color: "#555" }}>日本円合計</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#16a085" }}>{yoshidaTotal.toLocaleString()} 円</div>
        </div>
        <div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 1px 6px #eee", padding: 18, minWidth: 220, textAlign: "center" }}>
          <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 6, color: "#e67e22" }}>下田家</div>
          <div style={{ fontSize: 17, marginBottom: 2, color: "#555" }}>日本円合計</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#16a085" }}>{shimodaTotal.toLocaleString()} 円</div>
        </div>
      </div>
      <div style={{ marginBottom: 24, fontWeight: 600, fontSize: 18, color: "#d35400" }}>{settlementText}</div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff", borderRadius: 12, boxShadow: "0 1px 6px #eee" }}>
          <thead>
            <tr style={{ background: "#f1f3f4" }}>
              <th style={{ padding: "10px 8px", fontWeight: 600, color: "#222" }}>日付</th>
              <th style={{ padding: "10px 8px", fontWeight: 600, color: "#222" }}>家族</th>
              <th style={{ padding: "10px 8px", fontWeight: 600, color: "#222" }}>アイテム</th>
              <th style={{ padding: "10px 8px", fontWeight: 600, color: "#222" }}>ウォン</th>
              <th style={{ padding: "10px 8px", fontWeight: 600, color: "#222" }}>円</th>
            </tr>
          </thead>
          <tbody>
            {spendings.map((s, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #f0f0f0", background: i % 2 === 0 ? "#fafbfc" : "#fff" }}>
                <td style={{ padding: "8px 8px", fontWeight: 500 }}>{s.date}</td>
                <td style={{ padding: "8px 8px", fontWeight: 600, color: s.family === "吉田" ? "#2980b9" : "#e67e22" }}>{s.family}</td>
                <td style={{ padding: "8px 8px" }}>{s.item}</td>
                <td style={{ padding: "8px 8px", textAlign: "right" }}>{s.price_won ? s.price_won.toLocaleString() : "-"}</td>
                <td style={{ padding: "8px 8px", textAlign: "right", fontWeight: 700 }}>{s.price_jpy ? s.price_jpy.toLocaleString() : "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

