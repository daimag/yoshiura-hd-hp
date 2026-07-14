export const metadata = {
  title: "安全性試験｜ストーンウォール｜株式会社吉浦",
  description:
    "福岡大学工学部との共同研究による安全性・効果の確認。pH確認試験・粉じん飛散抑制効果試験・硬度確認試験。",
};

const TESTS = [
  {
    t: "pH確認試験",
    d: "散布後の地表面・周辺環境への影響を確認するため、pHを測定・評価します。",
  },
  {
    t: "粉じん飛散抑制効果試験",
    d: "散布前後の粉じん飛散量を比較し、抑制効果を定量的に確認します。",
  },
  {
    t: "硬度確認試験",
    d: "固化後の地表面の硬度を測定し、安定化の程度を評価します。",
  },
];

export default function Safety() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow">Safety &amp; Test</p>
          <h1>安全性試験</h1>
          <p className="breadcrumb">Home ／ 安全性試験</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h-section">福岡大学工学部との共同研究</h2>
          <p className="lead">
            ストーンウォールは、2019年より福岡大学工学部との共同研究を実施し、
            効果と安全性を科学的に確認しています。現場の試料をご提供いただくことで、
            あらかじめ効果を確認することも可能です。
          </p>
          <div className="grid grid-3">
            {TESTS.map((t) => (
              <div className="card" key={t.t}>
                <h3>{t.t}</h3>
                <p>{t.d}</p>
              </div>
            ))}
          </div>
          <div className="note">
            ※ 試験内容はサンプル表記です。公開可能な試験データ・数値に差し替えます。
          </div>
        </div>
      </section>
    </>
  );
}
