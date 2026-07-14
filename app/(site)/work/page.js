export const metadata = {
  title: "施工事例｜ストーンウォール｜株式会社吉浦",
  description:
    "ストーンウォールの施工事例。太陽光発電所の造成地、空港滑走路端、調整池など公共・大規模現場での採用実績。",
};

const WORKS = [
  { img: "/img/sekou_akaiwa.jpg", place: "赤磐市多賀地区", t: "太陽光発電所新設工事" },
  { img: "/img/sekou_itohiki.jpg", place: "糸引公園", t: "防塵処理工事" },
  { img: "/img/sekou_taiyoukou.jpg", place: "太陽光発電所", t: "新設工事" },
  { img: "/img/sekou_watarase.jpg", place: "R4年 渡良瀬第2調整池", t: "石川排水樋管新設工事" },
  { img: "/img/sekou_nagasaki.jpg", place: "R5年度 長崎空港滑走路端", t: "安全区域用地造成工事" },
];

const MORE = [
  "夢洲2区飛散防止対策工事",
  "鹿児島220号白水地区（第4工区）外改良工事",
  "京都府八幡市新名神高速道路工事",
  "桜島〜酉島幹線下水管渠築造工事",
  "石垣島(3)火薬庫新設土木その他工事（その1）",
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
          <p className="lead" style={{ marginBottom: 8 }}>
            国土交通省発注工事をはじめ、公共・大規模現場での採用実績があります。
          </p>
          <div className="tiles--3" style={{ display: "grid", marginTop: 40 }}>
            {WORKS.map((w) => (
              <div className="tile" key={w.place}>
                <div className="media figure--43">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={w.img} alt={`${w.place} ${w.t}`} />
                </div>
                <div className="cap">
                  <h3 style={{ fontSize: "1rem" }}>{w.place}</h3>
                  <p style={{ margin: 0 }}>{w.t}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="h-section" style={{ fontSize: "1.3rem", marginTop: 64 }}>
            その他の施工実績
          </h2>
          <ul style={{ color: "var(--sub)", lineHeight: 2.2, paddingLeft: "1.2em", marginTop: 12 }}>
            {MORE.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
