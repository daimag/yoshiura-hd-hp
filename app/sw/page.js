import Link from "next/link";

export const metadata = {
  title: "製品情報 ストーンウォール｜株式会社吉浦",
  description:
    "粉じん・浸食防止剤「ストーンウォール」の製品情報。特長・仕様・NETIS登録情報（KK-200056-A）。",
};

export default function SW() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow">Product</p>
          <h1>製品情報｜ストーンウォール</h1>
          <p className="breadcrumb">Home ／ 製品情報</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h-section">製品概要</h2>
          <p className="lead">
            「ストーンウォール」は、水で希釈して散布するだけで地表面を固化・安定化させる
            粉じん・浸食防止剤です。高分子ポリマーが土粒子を被覆・結合し、乾燥後は
            耐水性・耐風性を長期間保持します。散布車・噴霧器で簡単に施工でき、
            国土交通省発注工事をはじめ多くの現場で活用されています。
          </p>

          <table className="spec">
            <tbody>
              <tr>
                <th>製品名</th>
                <td>ストーンウォール（粉じん・浸食防止剤）</td>
              </tr>
              <tr>
                <th>NETIS登録番号</th>
                <td>KK-200056-A（国土交通省 新技術情報提供システム）</td>
              </tr>
              <tr>
                <th>性状</th>
                <td>液体（水で希釈して使用）※詳細はサンプル・要確認</td>
              </tr>
              <tr>
                <th>施工方法</th>
                <td>希望濃度に希釈し、散布車・噴霧器で散布 → 十分に乾燥</td>
              </tr>
              <tr>
                <th>主な効果</th>
                <td>粉じん飛散抑制／法面保護／雨裂侵食抑制／素掘り側溝の補強</td>
              </tr>
              <tr>
                <th>共同研究</th>
                <td>福岡大学工学部（pH・粉じん飛散抑制・硬度 の各試験）</td>
              </tr>
            </tbody>
          </table>

          <div className="note">
            ※ 本ページの数値・仕様はサンプル表記です。正式な製品仕様・カタログ内容に
            差し替えます。
          </div>

          <div style={{ marginTop: 30, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/safety" className="btn btn--primary">
              安全性試験を見る
            </Link>
            <Link href="/contact" className="btn btn--ghost" style={{ borderColor: "var(--navy)", color: "var(--navy)" }}>
              カタログを請求する
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
