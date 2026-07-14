import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ===== Hero（大きく・動画のような動き）===== */}
      {/* 実写動画を使う場合：public/hero.mp4 を置き、下の <video> のコメントを外す */}
      <section className="hero">
        {/*
        <video className="hero__video" autoPlay muted loop playsInline poster="/hero-poster.jpg">
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        */}
        <div className="hero__bg" />
        <div className="hero__overlay" />
        <div className="container">
          <span className="badge">株式会社吉浦｜吉浦HDグループ</span>
          <h1>
            現場を、支える。
            <br />
            重機と化学品の力で。
          </h1>
          <p>
            大型重機のレンタル・販売から、粉じん・浸食防止剤「ストーンウォール」を
            はじめとする化学品の輸入・販売まで。土木・建設の現場を、確かな技術と
            製品で支えます。
          </p>
          <div className="hero-actions">
            <Link href="/business" className="btn btn--primary">
              事業内容を見る
            </Link>
            <Link href="/sw" className="btn btn--ghost">
              製品「ストーンウォール」
            </Link>
          </div>
        </div>
        <div className="hero__scroll">SCROLL</div>
      </section>

      {/* ===== 事業内容 ===== */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Business</p>
          <h2 className="h-section">事業内容</h2>
          <p className="lead">
            株式会社吉浦は、大型重機と化学品の2つの柱で、土木・建設の現場を支えています。
          </p>
          <div className="grid grid-2">
            <div className="card biz-card">
              <div className="biz-media">
                <span className="kicker">01｜Machinery</span>
              </div>
              <div className="biz-body">
                <h3>大型重機のレンタル及び販売</h3>
                <p>
                  現場のニーズに合わせた大型重機のレンタル・販売を行っています。
                  グループの機動力で、必要な機材を必要なタイミングでご提供します。
                </p>
                <Link href="/business" className="more">
                  詳しく見る →
                </Link>
              </div>
            </div>
            <div className="card biz-card">
              <div className="biz-media">
                <span className="kicker">02｜Chemicals</span>
              </div>
              <div className="biz-body">
                <h3>化学品の輸入・販売</h3>
                <p>
                  粉じん・浸食防止剤「ストーンウォール」（NETIS登録）をはじめ、
                  現場課題を解決する化学品を輸入・販売しています。
                </p>
                <Link href="/sw" className="more">
                  ストーンウォールを見る →
                </Link>
              </div>
            </div>
          </div>

          <div className="stats">
            <div className="stat">
              <b>NETIS</b>
              <span>登録技術 KK-200056-A</span>
            </div>
            <div className="stat">
              <b>2019〜</b>
              <span>福岡大学工学部と共同研究</span>
            </div>
            <div className="stat">
              <b>公共工事</b>
              <span>国交省発注工事で採用実績</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 製品：ストーンウォール ===== */}
      <section className="section section--alt">
        <div className="container">
          <p className="eyebrow">Product</p>
          <h2 className="h-section">まくだけで、地表面を守る「ストーンウォール」</h2>
          <p className="lead">
            水で希釈して散布するだけ。地表面を固化・安定化し、粉じんの飛散や雨裂による
            浸食を長期にわたって抑制する、当社の主力製品です。
          </p>
          <div className="grid grid-3">
            <div className="card">
              <div className="num">01</div>
              <h3>散布するだけの簡単施工</h3>
              <p>散布車や噴霧器でまくだけ。乾燥後は耐水性・耐風性を長期保持します。</p>
            </div>
            <div className="card">
              <div className="num">02</div>
              <h3>粉じん飛散・浸食を抑制</h3>
              <p>高分子ポリマーが土粒子を結合し、地表面を安定化します。</p>
            </div>
            <div className="card">
              <div className="num">03</div>
              <h3>NETIS登録・試験データ</h3>
              <p>国交省NETIS登録技術。大学との共同研究で効果を確認しています。</p>
            </div>
          </div>
          <div style={{ marginTop: 28 }}>
            <Link href="/sw" className="btn btn--primary">
              製品情報を詳しく見る
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta">
        <div className="container">
          <h2>重機・化学品のご相談、お見積りはお気軽に</h2>
          <p style={{ color: "#dbe6f2", maxWidth: 640, margin: "0 auto 26px" }}>
            現場の課題に合わせて、最適な重機・製品をご提案します。カタログのご請求も
            こちらから。
          </p>
          <Link href="/contact" className="btn btn--primary">
            お問い合わせはこちら
          </Link>
        </div>
      </section>
    </>
  );
}
