import Link from "next/link";

const HERO_SLIDES = [
  "/img/sekou_taiyoukou.jpg",
  "/img/sekou_nagasaki.jpg",
  "/img/norimen.jpg",
  "/img/sekou_watarase.jpg",
];

const SCENES = [
  { img: "/img/funjin1.jpg", t: "粉じん飛散の抑制", d: "造成地・ストックヤード・仮設道路などの粉じん対策に。" },
  { img: "/img/norimen.jpg", t: "法面・のり面の保護", d: "表層を固化し、降雨時の表面侵食・崩落を抑制します。" },
  { img: "/img/uretsu1.jpg", t: "雨裂（ガリ）侵食の防止", d: "裸地・盛土の表面を安定化し、雨裂の発生を抑えます。" },
  { img: "/img/sokko.jpg", t: "素掘り側溝の補強", d: "側溝表面を固めて崩れにくくし、維持管理を軽減します。" },
];

const COMPANY = [
  ["商号", "株式会社吉浦"],
  ["資本金", "10,000,000円"],
  ["代表者", "代表取締役　井上　誓"],
  ["設立", "平成9年2月20日"],
  ["所在地", "福岡市西区姪の浜1丁目19番25号"],
  ["連絡先", "092-832-3237"],
  ["事業内容", "化学品の輸入・販売、大型重機のレンタル及び販売"],
];

const WORKS = [
  { img: "/img/sekou_akaiwa.jpg", place: "赤磐市多賀地区", t: "太陽光発電所新設工事" },
  { img: "/img/sekou_itohiki.jpg", place: "糸引公園", t: "防塵処理工事" },
  { img: "/img/sekou_taiyoukou.jpg", place: "太陽光発電所", t: "新設工事" },
  { img: "/img/sekou_watarase.jpg", place: "R4年 渡良瀬第2調整池", t: "石川排水樋管新設工事" },
  { img: "/img/sekou_nagasaki.jpg", place: "R5年度 長崎空港滑走路端", t: "安全区域用地造成工事" },
];

export default function Home() {
  return (
    <>
      {/* ===== Hero（複数枚フェード＋ズーム）===== */}
      <section className="hero">
        <div className="hero__slides">
          {HERO_SLIDES.map((src, i) => (
            <div
              key={src}
              className="hero__slide"
              style={{
                backgroundImage: `url(${src})`,
                animationDelay: `${i * 7}s`,
              }}
            />
          ))}
        </div>
        <div className="hero__scrim" />
        <div className="hero__lead">
          <p className="eb">NETIS登録製品</p>
          <h1>
            ストーンウォールで
            <br />
            粉じん対策、法面保護を実現。
          </h1>
        </div>
        <div className="hero__scroll">Scroll</div>
      </section>

      {/* ===== ① 主要（製品） ===== */}
      <section className="section">
        <div className="container">
          <div className="sec-head">
            <span className="en">Product</span>
            <h2>主要製品「ストーンウォール」</h2>
          </div>
          <div className="grid grid-2" style={{ marginTop: 0, alignItems: "center", gap: 48 }}>
            <div className="figure figure--43">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/sekou_taiyoukou.jpg" alt="ストーンウォール施工例" />
            </div>
            <div>
              <p style={{ color: "var(--sub)" }}>
                ストーンウォールは、水で希釈して散布するだけで地表面を固化・安定化させる
                粉じん・浸食防止剤です。高分子ポリマーが土粒子を被覆・結合し、乾燥後は
                耐水性・耐風性を長期間保持。散布車・噴霧器で簡単に施工でき、国土交通省
                発注工事をはじめ多くの現場で活用されています。
              </p>
              <ul style={{ color: "var(--sub)", paddingLeft: "1.2em", margin: "18px 0" }}>
                <li>粉じん飛散・雨裂侵食の抑制</li>
                <li>法面保護／素掘り側溝の補強</li>
                <li>NETIS登録技術（KK-200056-A）</li>
              </ul>
              <Link href="/sw" className="btn btn--primary">
                製品情報を見る
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ===== 数値・効果 ===== */}
      <section className="section section--alt">
        <div className="container">
          <div className="sec-head">
            <span className="en">By the numbers</span>
            <h2>数値で見る、ストーンウォール</h2>
          </div>
          <div className="metrics">
            <div className="metric">
              <div className="v">1997</div>
              <div className="l">設立（平成9年）</div>
            </div>
            <div className="metric">
              <div className="v">
                2019<span className="u">〜</span>
              </div>
              <div className="l">福岡大学工学部と共同研究</div>
            </div>
            <div className="metric">
              <div className="v">
                3<span className="u">規格</span>
              </div>
              <div className="l">20L / 300L / 1000L</div>
            </div>
            <div className="metric">
              <div className="v" style={{ fontSize: "clamp(1.4rem,3vw,2rem)" }}>
                NETIS
              </div>
              <div className="l">登録技術 KK-200056-A</div>
            </div>
          </div>

          <div className="chart">
            <h3>粉じん飛散の抑制（イメージ）</h3>
            <p className="sub">
              散布により地表面を固化・安定化し、粉じんの飛散を大きく抑えます。
            </p>
            <div className="bars">
              <div className="bar bar--before">
                <div className="col" />
                <div className="cap">散布前</div>
              </div>
              <div className="bar bar--after">
                <div className="col" />
                <div className="cap">散布後</div>
              </div>
            </div>
            <p className="foot">
              ※ 本グラフは効果のイメージです。実測値は福岡大学工学部との共同研究
              （粉じん飛散抑制効果試験）の結果に基づき掲載予定です。
            </p>
          </div>
        </div>
      </section>

      {/* ===== ② 活用シーン ===== */}
      <section className="section">
        <div className="container">
          <div className="sec-head">
            <span className="en">Use cases</span>
            <h2>活用シーン</h2>
          </div>
          <div className="tiles">
            {SCENES.map((s) => (
              <div className="tile" key={s.t}>
                <div className="media figure--43">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.t} />
                </div>
                <div className="cap">
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <Link href="/usagescene" className="btn">
              活用シーンをすべて見る
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ③ 施工事例 ===== */}
      <section className="section">
        <div className="container">
          <div className="sec-head">
            <span className="en">Works</span>
            <h2>施工事例</h2>
          </div>
          <div className="tiles--3" style={{ display: "grid" }}>
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
          <div style={{ textAlign: "center", marginTop: 44 }}>
            <Link href="/work" className="btn">
              施工事例をすべて見る
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 会社概要 ===== */}
      <section className="section section--alt">
        <div className="container">
          <div className="sec-head">
            <span className="en">Company</span>
            <h2>会社概要</h2>
          </div>
          <table className="spec" style={{ maxWidth: 820, margin: "0 auto" }}>
            <tbody>
              {COMPANY.map(([k, v]) => (
                <tr key={k}>
                  <th>{k}</th>
                  <td>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/company" className="btn">
              会社概要を詳しく見る
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta">
        <div className="container">
          <h2>効果の事前確認・お見積りはお気軽に</h2>
          <p style={{ maxWidth: 640, margin: "0 auto 28px" }}>
            現場の試料をご提供いただければ、あらかじめ効果を確認することも可能です。
            カタログのご請求もこちらから。
          </p>
          <Link href="/contact" className="btn btn--primary">
            お問い合わせ
          </Link>
        </div>
      </section>
    </>
  );
}
