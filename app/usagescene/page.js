export const metadata = {
  title: "活用シーン｜ストーンウォール｜株式会社吉浦",
  description:
    "ストーンウォールの活用シーン。粉じん飛散抑制・法面保護・雨裂侵食防止・素掘り側溝の補強など。",
};

const SCENES = [
  {
    t: "粉じん飛散の抑制",
    d: "造成地、ストックヤード、仮設道路、解体現場など、粉じんの発生源となる裸地に散布。周辺環境への飛散を抑えます。",
  },
  {
    t: "法面・のり面の保護",
    d: "表層を固化して降雨時の表面侵食・崩落を抑制。緑化前の一次保護としても活用できます。",
  },
  {
    t: "雨裂（ガリ）侵食の防止",
    d: "盛土・切土の裸地表面を安定化し、雨水による雨裂の発生・拡大を防ぎます。",
  },
  {
    t: "素掘り側溝の補強",
    d: "側溝の表面を固めて崩れにくくし、通水機能の維持と維持管理の軽減に貢献します。",
  },
  {
    t: "太陽光発電所の造成地",
    d: "広大な造成地の粉じん・浸食対策として、散布車による効率的な施工が可能です。",
  },
  {
    t: "空港・大規模土木",
    d: "滑走路端部の工事など、粉じん・浸食対策が求められる大規模現場に対応します。",
  },
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
          <p className="lead">
            ストーンウォールは、粉じん・浸食の課題があるさまざまな現場でご活用いただけます。
            代表的な活用シーンをご紹介します。
          </p>
          <div className="grid grid-3">
            {SCENES.map((s) => (
              <div className="card" key={s.t}>
                <div className="ph-img">現場写真（差し替え）</div>
                <h3 style={{ marginTop: 16 }}>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
          <div className="note">
            ※ 掲載写真はプレースホルダーです。実際の施工写真に差し替えます。
          </div>
        </div>
      </section>
    </>
  );
}
