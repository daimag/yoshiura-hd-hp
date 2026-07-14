import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="badge">NETIS登録技術（KK-200056-A）</span>
          <h1>
            まくだけで、地表面を守る。
            <br />
            粉じん・浸食防止剤「ストーンウォール」
          </h1>
          <p>
            水で希釈して散布するだけ。地表面を固化・安定化し、粉じんの飛散や
            雨裂による浸食を長期にわたって抑制します。公共工事の現場で採用実績多数。
          </p>
          <div className="hero-actions">
            <Link href="/sw" className="btn btn--primary">
              製品の詳細を見る
            </Link>
            <Link href="/contact" className="btn btn--ghost">
              お問い合わせ・資料請求
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Features</p>
          <h2 className="h-section">ストーンウォールの特長</h2>
          <div className="grid grid-3">
            <div className="card">
              <div className="num">01</div>
              <h3>散布するだけの簡単施工</h3>
              <p>
                水で希釈し、散布車や噴霧器でまくだけ。乾燥後は耐水性・耐風性を
                長期間保持し、コストと工期を大幅に削減します。
              </p>
            </div>
            <div className="card">
              <div className="num">02</div>
              <h3>粉じん飛散・浸食を抑制</h3>
              <p>
                高分子ポリマーが土粒子を被覆・結合し、地表面を安定化。粉じんの
                飛散、雨裂による浸食、法面の崩れを防ぎます。
              </p>
            </div>
            <div className="card">
              <div className="num">03</div>
              <h3>NETIS登録・試験データ</h3>
              <p>
                国土交通省NETIS登録技術（KK-200056-A）。福岡大学工学部との
                共同研究により、効果を科学的に確認しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <p className="eyebrow">Use cases</p>
          <h2 className="h-section">主な用途</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>粉じん飛散の抑制</h3>
              <p>造成地・ストックヤード・仮設道路などの粉じん対策に。</p>
            </div>
            <div className="card">
              <h3>法面・のり面の保護</h3>
              <p>表層の固化により、降雨時の表面侵食・崩落を抑えます。</p>
            </div>
            <div className="card">
              <h3>雨裂（ガリ）侵食の防止</h3>
              <p>裸地・盛土の表面を安定化し、雨裂の発生を抑制します。</p>
            </div>
            <div className="card">
              <h3>素掘り側溝の補強</h3>
              <p>側溝表面を固めて崩れにくくし、維持管理を軽減します。</p>
            </div>
          </div>
          <div style={{ marginTop: 28 }}>
            <Link href="/usagescene" className="btn btn--primary">
              活用シーンを詳しく見る
            </Link>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>効果の事前確認・お見積りはお気軽に</h2>
          <p style={{ color: "#dbe6f2", maxWidth: 640, margin: "0 auto 26px" }}>
            現場の試料をご提供いただければ、事前に効果を確認することも可能です。
            カタログのご請求もこちらから。
          </p>
          <Link href="/contact" className="btn btn--primary">
            お問い合わせはこちら
          </Link>
        </div>
      </section>
    </>
  );
}
