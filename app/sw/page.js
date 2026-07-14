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
          <div className="grid grid-2" style={{ marginTop: 0, alignItems: "center", gap: 48 }}>
            <div className="figure figure--43">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/seihin_green1.jpg" alt="ストーンウォール散布後の地表面" />
            </div>
            <div>
              <h2 className="h-section" style={{ fontSize: "1.6rem" }}>
                まくだけで、地表面を守る
              </h2>
              <p style={{ color: "var(--sub)" }}>
                「ストーンウォール」は、水で希釈して散布するだけで地表面を固化・安定化
                させる粉じん・浸食防止剤です。高分子ポリマーが土粒子を被覆・結合し、
                乾燥後は耐水性・耐風性を長期間保持します。散布車・噴霧器で簡単に施工でき、
                コストと工期を大幅に削減します。
              </p>
            </div>
          </div>

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
                <th>施工方法</th>
                <td>希望濃度に水で希釈し、散布車・噴霧器で散布 → 十分に乾燥</td>
              </tr>
              <tr>
                <th>主な効果</th>
                <td>粉じん飛散抑制／法面保護／雨裂侵食抑制／素掘り側溝の補強</td>
              </tr>
              <tr>
                <th>容量</th>
                <td>20L ／ 300L ／ 1000L</td>
              </tr>
              <tr>
                <th>共同研究</th>
                <td>福岡大学工学部（pH・粉じん飛散抑制・硬度 の各試験）</td>
              </tr>
            </tbody>
          </table>

          <p className="eyebrow" style={{ marginTop: 56, color: "var(--accent)" }}>
            ラインナップ
          </p>
          <div className="tiles--3" style={{ display: "grid", marginTop: 20 }}>
            {[
              { img: "/img/20l.jpg", t: "20L" },
              { img: "/img/300l.jpg", t: "300L" },
              { img: "/img/1000l.jpg", t: "1000L" },
            ].map((v) => (
              <div className="tile" key={v.t}>
                <div className="media figure--43">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={v.img} alt={`ストーンウォール ${v.t}`} />
                </div>
                <div className="cap">
                  <h3 style={{ fontSize: "1rem", margin: 0 }}>{v.t}</h3>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 44, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/safety" className="btn btn--primary">
              安全性試験を見る
            </Link>
            <Link href="/contact" className="btn">
              カタログを請求する
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
