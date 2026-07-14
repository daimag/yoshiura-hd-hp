export const metadata = {
  title: "施工事例｜ストーンウォール｜株式会社吉浦",
  description:
    "ストーンウォールの施工事例。太陽光発電所の造成地、空港工事など公共・大規模現場での採用実績。",
};

const WORKS = [
  {
    t: "太陽光発電所 造成地",
    place: "岡山県赤磐市",
    d: "広大な造成地の粉じん飛散・表面侵食対策として散布。※サンプル",
  },
  {
    t: "空港 滑走路端部 工事",
    place: "長崎空港",
    d: "滑走路端部の工事における粉じん・浸食対策として採用。※サンプル",
  },
  {
    t: "法面保護 工事",
    place: "九州地方",
    d: "切土法面の表層固化による一次保護として活用。※サンプル",
  },
  {
    t: "仮設道路の粉じん対策",
    place: "福岡県内",
    d: "工事用仮設道路の走行に伴う粉じん飛散を抑制。※サンプル",
  },
];

export default function Work() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow">Works</p>
          <h1>施工事例</h1>
          <p className="breadcrumb">Home ／ 施工事例</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="lead">
            国土交通省発注工事をはじめ、公共・大規模現場での採用実績があります。
            代表的な施工事例をご紹介します。
          </p>
          <div className="grid grid-2">
            {WORKS.map((w) => (
              <div className="card" key={w.t}>
                <div className="ph-img">施工写真（差し替え）</div>
                <h3 style={{ marginTop: 16 }}>{w.t}</h3>
                <p style={{ color: "var(--amber-d)", fontWeight: 700, margin: "0 0 6px" }}>
                  {w.place}
                </p>
                <p>{w.d}</p>
              </div>
            ))}
          </div>
          <div className="note">
            ※ 事例内容・写真はサンプルです。掲載可否を確認のうえ、実案件に差し替えます。
          </div>
        </div>
      </section>
    </>
  );
}
