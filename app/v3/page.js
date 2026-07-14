const HERO = [
  "/img/sekou_taiyoukou.jpg",
  "/img/sekou_nagasaki.jpg",
  "/img/norimen.jpg",
  "/img/sekou_watarase.jpg",
];

const STRENGTHS = [
  { n: "01", t: "まくだけの簡単施工", d: "水で希釈し、散布車・噴霧器でまくだけ。乾燥後は耐水性・耐風性を長期保持し、工期とコストを削減します。" },
  { n: "02", t: "NETIS登録技術", d: "国土交通省 新技術情報提供システムに登録（KK-200056-A）。公共工事での採用実績があります。" },
  { n: "03", t: "福岡大学と共同研究", d: "2019年より福岡大学工学部と共同研究。効果と安全性を科学的に確認しています。" },
  { n: "04", t: "効果の事前確認", d: "現場の試料をご提供いただければ、あらかじめ効果を確認。試験結果を基に散布条件をご提案します。" },
  { n: "05", t: "全国の施工実績", d: "太陽光発電所、空港滑走路端、調整池など、公共・大規模現場で幅広く採用されています。" },
  { n: "06", t: "幅広い用途", d: "粉じん飛散抑制・法面保護・雨裂侵食抑制・素掘り側溝の補強など、多様な現場課題に対応します。" },
];

const WORKS = [
  { img: "/img/sekou_akaiwa.jpg", place: "赤磐市多賀地区", t: "太陽光発電所新設工事" },
  { img: "/img/sekou_itohiki.jpg", place: "糸引公園", t: "防塵処理工事" },
  { img: "/img/sekou_taiyoukou.jpg", place: "太陽光発電所", t: "新設工事" },
  { img: "/img/sekou_watarase.jpg", place: "R4年 渡良瀬第2調整池", t: "石川排水樋管新設工事" },
  { img: "/img/sekou_nagasaki.jpg", place: "R5年度 長崎空港滑走路端", t: "安全区域用地造成工事" },
  { img: "/img/norimen.jpg", place: "法面保護", t: "のり面 表層固化" },
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

const NEWS = [
  { d: "2026.06.01", tag: "お知らせ", t: "2026年版カタログを公開しました。※サンプル" },
  { d: "2024.06.10", tag: "製品", t: "ストーンウォールがNETIS「震災復旧・復興に資する技術」に登録されました。" },
  { d: "2025.12.19", tag: "施工事例", t: "施工事例を追加しました。※サンプル" },
];

export default function V3Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__slides">
          {HERO.map((src, i) => (
            <div
              key={src}
              className="hero__slide"
              style={{ backgroundImage: `url(${src})`, animationDelay: `${i * 7}s` }}
            />
          ))}
        </div>
        <div className="hero__scrim" />
        <div className="container">
          <span className="badge">NETIS登録製品 ｜ KK-200056-A</span>
          <h1 className="catch">
            地表面を、まくだけで守る。
            <br />
            粉じん対策・法面保護のソリューション。
          </h1>
          <p className="en">STONE WALL ― Dust &amp; Erosion Control</p>
          <div className="acts">
            <a href="#product" className="btn solid">
              製品を見る
            </a>
            <a href="#contact" className="btn ghost">
              お問い合わせ
            </a>
          </div>
        </div>
        <div className="hero__scroll">SCROLL</div>
      </section>

      {/* COMMITMENT */}
      <section className="commit" id="commitment">
        <div className="bgen">COMMITMENT</div>
        <div className="container" data-r>
          <div className="enlabel">Our Commitment</div>
          <h2>
            現場の「粉じん」と「浸食」に、
            <br />
            まくだけの確かな答えを。
          </h2>
          <p>
            造成地や法面で発生する粉じんの飛散、雨による表面侵食。ストーンウォールは、
            水で希釈して散布するだけで地表面を固化・安定化し、これらの課題に応えます。
            NETIS登録技術として、そして福岡大学工学部との共同研究に裏付けられた製品として、
            現場の安全と環境を守り続けます。
          </p>
        </div>
      </section>

      {/* STRENGTHS */}
      <section className="section" id="strengths">
        <div className="container">
          <div className="shead" data-r>
            <div className="enlabel">Our Strengths</div>
            <div className="jplabel">ストーンウォールの強み</div>
          </div>
          <div className="str" data-r>
            {STRENGTHS.map((s) => (
              <div className="scell" key={s.n}>
                <div className="no">{s.n}</div>
                <div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT / BUSINESS */}
      <section className="section alt" id="product">
        <div className="container">
          <div className="shead" data-r>
            <div className="enlabel">Our Business</div>
            <div className="jplabel">製品情報</div>
          </div>
          <div className="split" data-r>
            <div className="figure" style={{ aspectRatio: "4/3" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/sekou_taiyoukou.jpg" alt="ストーンウォール施工例" />
            </div>
            <div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 700, margin: "0 0 14px" }}>
                粉じん・浸食防止剤「ストーンウォール」
              </h3>
              <p className="lead">
                水で希釈して散布するだけで地表面を固化・安定化。高分子ポリマーが土粒子を
                被覆・結合し、乾燥後は耐水性・耐風性を長期間保持します。散布車・噴霧器で
                簡単に施工でき、国土交通省発注工事をはじめ多くの現場で活用されています。
              </p>
              <table className="spec" style={{ margin: "22px 0" }}>
                <tbody>
                  <tr>
                    <th>NETIS登録</th>
                    <td>KK-200056-A</td>
                  </tr>
                  <tr>
                    <th>ラインナップ</th>
                    <td>20L ／ 300L ／ 1000L</td>
                  </tr>
                  <tr>
                    <th>主な効果</th>
                    <td>粉じん飛散抑制／法面保護／雨裂侵食抑制／素掘り側溝の補強</td>
                  </tr>
                </tbody>
              </table>
              <a href="#contact" className="btn line">
                カタログを請求する
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section className="section" id="works">
        <div className="container">
          <div className="shead" data-r>
            <div className="enlabel">Works</div>
            <div className="jplabel">施工事例</div>
          </div>
          <div className="tiles" data-r>
            {WORKS.map((w) => (
              <div className="tile" key={w.place}>
                <div className="media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={w.img} alt={`${w.place} ${w.t}`} />
                </div>
                <h3>{w.place}</h3>
                <p>{w.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY */}
      <section className="section alt" id="company">
        <div className="container">
          <div className="shead" data-r>
            <div className="enlabel">About Us</div>
            <div className="jplabel">会社概要</div>
          </div>
          <table className="spec" data-r style={{ maxWidth: 880 }}>
            <tbody>
              {COMPANY.map(([k, v]) => (
                <tr key={k}>
                  <th>{k}</th>
                  <td>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* NEWS */}
      <section className="section" id="news">
        <div className="container">
          <div className="shead" data-r>
            <div className="enlabel">News</div>
            <div className="jplabel">お知らせ</div>
          </div>
          <div className="news" data-r>
            {NEWS.map((n, i) => (
              <div className="nrow" key={i}>
                <time>{n.d}</time>
                <span className="tag">{n.tag}</span>
                <span>{n.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="cta" id="contact">
        <div className="container">
          <div className="enlabel">Contact</div>
          <h2>効果の事前確認・お見積りはお気軽に</h2>
          <p>
            現場の試料をご提供いただければ、あらかじめ効果を確認することも可能です。
            カタログのご請求も承ります。
          </p>
          <a href="tel:0928323237" className="btn solid">
            TEL 092-832-3237
          </a>
        </div>
      </section>
    </>
  );
}
