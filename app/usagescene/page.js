export const metadata = {
  title: "活用シーン｜ストーンウォール｜株式会社吉浦",
  description:
    "ストーンウォールの活用シーン。粉じん飛散抑制・法面保護・雨裂侵食防止・素掘り側溝の補強など。",
};

const SCENES = [
  { img: "/img/sekou_itohiki.jpg", t: "粉じん飛散の抑制", d: "造成地、ストックヤード、仮設道路、解体現場など、粉じんの発生源となる裸地に散布。周辺環境への飛散を抑えます。" },
  { img: "/img/sekou_nagasaki.jpg", t: "法面・のり面の保護", d: "表層を固化して降雨時の表面侵食・崩落を抑制。緑化前の一次保護としても活用できます。" },
  { img: "/img/uretsu1.jpg", t: "雨裂（ガリ）侵食の防止", d: "盛土・切土の裸地表面を安定化し、雨水による雨裂の発生・拡大を防ぎます。" },
  { img: "/img/sekou_watarase.jpg", t: "素掘り側溝の補強", d: "側溝の表面を固めて崩れにくくし、通水機能の維持と維持管理の軽減に貢献します。" },
  { img: "/img/sekou_taiyoukou.jpg", t: "太陽光発電所の造成地", d: "広大な造成地の粉じん・浸食対策として、散布車による効率的な施工が可能です。" },
  { img: "/img/sekou_akaiwa.jpg", t: "大規模土木・造成現場", d: "粉じん・浸食対策が求められる大規模現場に、希釈濃度を調整して対応します。" },
];

export default function Usage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow">Use cases</p>
          <h1>活用シーン</h1>
          <p className="breadcrumb">Home ／ 活用シーン</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="lead" style={{ marginBottom: 8 }}>
            ストーンウォールは、粉じん・浸食の課題があるさまざまな現場でご活用いただけます。
          </p>
          <div className="tiles--3" style={{ display: "grid", marginTop: 40 }}>
            {SCENES.map((s) => (
              <div className="tile" key={s.t}>
                <div className="media figure--43">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.t} />
                </div>
                <div className="cap">
                  <h3 style={{ fontSize: "1.05rem" }}>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
