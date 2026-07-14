export const metadata = {
  title: "安全性試験｜ストーンウォール｜株式会社吉浦",
  description:
    "福岡大学工学部との共同研究による効果・安全性の確認。pH確認試験・粉じん飛散抑制効果確認試験・硬度確認試験。",
};

const TESTS = [
  {
    img: "/img/fuk1.jpg",
    t: "pH確認試験",
    d: "散布後の地表面・周辺環境への影響を確認するため、pHを測定・評価します。",
  },
  {
    img: "/img/fuk2.jpg",
    t: "粉じん飛散抑制効果 確認試験",
    d: "散布前後の粉じん飛散量を比較し、抑制効果を定量的に確認します。",
  },
  {
    img: "/img/fuk3.jpg",
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
          <div className="grid grid-2" style={{ marginTop: 0, alignItems: "center", gap: 48 }}>
            <div className="figure figure--43">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/fukudai.png" alt="福岡大学 北九州エコタウン実証研究エリア" />
            </div>
            <div>
              <h2 className="h-section" style={{ fontSize: "1.6rem" }}>
                福岡大学 共同研究
              </h2>
              <p style={{ color: "var(--sub)" }}>
                2019年より福岡大学工学部とストーンウォールの効果、安全性について
                共同研究を実施しております。現場の試料を提供いただき、予めストーン
                ウォールの効果を確認することが可能です。試験結果を基に散布条件を
                提案させていただくため、安心してご活用いただけます。
              </p>
            </div>
          </div>

          <p className="eyebrow" style={{ marginTop: 64, color: "var(--accent)" }}>
            試験例
          </p>
          <div className="tiles--3" style={{ display: "grid", marginTop: 20 }}>
            {TESTS.map((t) => (
              <div className="tile" key={t.t}>
                <div className="media figure--43">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.img} alt={t.t} />
                </div>
                <div className="cap">
                  <h3 style={{ fontSize: "1.02rem" }}>{t.t}</h3>
                  <p style={{ margin: 0 }}>{t.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
