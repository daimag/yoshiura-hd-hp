const HERO = [
  "/img/sekou_taiyoukou.jpg",
  "/img/sekou_nagasaki.jpg",
  "/img/norimen.jpg",
  "/img/sekou_watarase.jpg",
];

const SCENES = [
  { img: "/img/funjin1.jpg", t: "粉じん飛散の抑制", d: "造成地・ストックヤード・仮設道路などの粉じん対策に。" },
  { img: "/img/norimen.jpg", t: "法面・のり面の保護", d: "表層を固化し、降雨時の表面侵食・崩落を抑制。" },
  { img: "/img/uretsu1.jpg", t: "雨裂（ガリ）侵食の防止", d: "裸地・盛土の表面を安定化し、雨裂の発生を抑制。" },
  { img: "/img/sokko.jpg", t: "素掘り側溝の補強", d: "側溝表面を固めて崩れにくくし、維持管理を軽減。" },
  { img: "/img/funjin2.jpg", t: "散布作業のようす", d: "散布車・噴霧器で簡単施工。濃度を調整して対応。" },
  { img: "/img/sekou_akaiwa.jpg", t: "大規模造成現場", d: "広大な造成地の粉じん・浸食対策に効率的に施工。" },
];

const WORKS = [
  { img: "/img/sekou_akaiwa.jpg", place: "赤磐市多賀地区", t: "太陽光発電所新設工事" },
  { img: "/img/sekou_itohiki.jpg", place: "糸引公園", t: "防塵処理工事" },
  { img: "/img/sekou_taiyoukou.jpg", place: "太陽光発電所", t: "新設工事" },
  { img: "/img/sekou_watarase.jpg", place: "R4年 渡良瀬第2調整池", t: "石川排水樋管新設工事" },
  { img: "/img/sekou_nagasaki.jpg", place: "R5年度 長崎空港滑走路端", t: "安全区域用地造成工事" },
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

export default function V2Home() {
  return (
    <>
      {/* HERO */}
      <section className="vhero">
        <div className="vhero__slides">
          {HERO.map((src, i) => (
            <div
              key={src}
              className="vhero__slide"
              style={{ backgroundImage: `url(${src})`, animationDelay: `${i * 7}s` }}
            />
          ))}
        </div>
        <div className="vhero__scrim" />
        <div className="container">
          <span className="badge">NETIS登録製品 ｜ KK-200056-A</span>
          <h1 className="disp en">STONE WALL</h1>
          <p className="jp">まくだけで、粉じん対策・法面保護を実現する。</p>
          <div className="acts">
            <a href="#product" className="btn solid">
              製品を見る
            </a>
            <a href="#contact" className="btn ghost">
              お問い合わせ
            </a>
          </div>
        </div>
        <div className="vhero__scroll">SCROLL</div>
      </section>

      {/* PRODUCT */}
      <section className="section" id="product">
        <div className="container">
          <div className="shead" data-r>
            <div className="lbl en">Product</div>
            <h2>主要製品「ストーンウォール」</h2>
          </div>
          <div className="cols2" data-r>
            <div className="figure" style={{ aspectRatio: "4/3" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/sekou_taiyoukou.jpg" alt="ストーンウォール施工例" />
            </div>
            <div>
              <p className="lead">
                水で希釈して散布するだけで地表面を固化・安定化させる粉じん・浸食防止剤。
                高分子ポリマーが土粒子を被覆・結合し、乾燥後は耐水性・耐風性を長期間
                保持します。散布車・噴霧器で簡単に施工でき、国土交通省発注工事をはじめ
                多くの現場で活用されています。
              </p>
              <a href="#use" className="btn line" style={{ marginTop: 20 }}>
                活用シーンへ
              </a>
            </div>
          </div>
          <div className="feat" data-r>
            <div className="fcard">
              <div className="n en">01</div>
              <h3>散布するだけの簡単施工</h3>
              <p>散布車・噴霧器でまくだけ。乾燥後は耐水性・耐風性を長期保持。</p>
            </div>
            <div className="fcard">
              <div className="n en">02</div>
              <h3>粉じん飛散・浸食を抑制</h3>
              <p>高分子ポリマーが土粒子を結合し、地表面を安定化します。</p>
            </div>
            <div className="fcard">
              <div className="n en">03</div>
              <h3>NETIS登録・試験データ</h3>
              <p>国交省NETIS登録技術。大学との共同研究で効果を確認。</p>
            </div>
          </div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="section alt" id="numbers">
        <div className="container">
          <div className="shead" data-r>
            <div className="lbl en">By the numbers</div>
            <h2>数値で見る、ストーンウォール</h2>
          </div>
          <div className="metrics" data-r>
            <div className="metric">
              <div className="v en">1997</div>
              <div className="l">設立（平成9年）</div>
            </div>
            <div className="metric">
              <div className="v en">2019</div>
              <div className="l">福岡大学工学部と共同研究</div>
            </div>
            <div className="metric">
              <div className="v en">3</div>
              <div className="l">ラインナップ（20/300/1000L）</div>
            </div>
            <div className="metric">
              <div className="v en" style={{ fontSize: "clamp(1.4rem,3vw,2.1rem)" }}>
                NETIS
              </div>
              <div className="l">登録技術 KK-200056-A</div>
            </div>
          </div>
          <div className="chart" data-r>
            <h3>粉じん飛散の抑制（イメージ）</h3>
            <p className="sub">散布により地表面を固化・安定化し、粉じんの飛散を大きく抑えます。</p>
            <div className="bars">
              <div className="bar b">
                <div className="col" />
                <div className="cap">散布前</div>
              </div>
              <div className="bar a">
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

      {/* USE */}
      <section className="section" id="use">
        <div className="container">
          <div className="shead" data-r>
            <div className="lbl en">Use cases</div>
            <h2>活用シーン</h2>
          </div>
          <div className="tiles" data-r>
            {SCENES.map((s) => (
              <div className="tile" key={s.t}>
                <div className="media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.t} />
                </div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section className="section alt" id="works">
        <div className="container">
          <div className="shead" data-r>
            <div className="lbl en">Works</div>
            <h2>施工事例</h2>
          </div>
          <div className="tiles" data-r>
            {WORKS.map((w) => (
              <div className="tile" key={w.place}>
                <div className="media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={w.img} alt={`${w.place} ${w.t}`} />
                </div>
                <h3 style={{ fontSize: "1rem" }}>{w.place}</h3>
                <p>{w.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY */}
      <section className="section" id="company">
        <div className="container">
          <div className="shead" data-r>
            <div className="lbl en">Company</div>
            <h2>会社概要</h2>
          </div>
          <table className="spec" data-r style={{ maxWidth: 860 }}>
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

      {/* CTA */}
      <section className="cta" id="contact">
        <div className="container">
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
