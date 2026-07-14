import Link from "next/link";

export const metadata = {
  title: "事業内容｜株式会社吉浦",
  description:
    "株式会社吉浦の事業内容。大型重機のレンタル及び販売、化学品の輸入・販売（粉じん・浸食防止剤 ストーンウォール等）。",
};

export default function Business() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow">Business</p>
          <h1>事業内容</h1>
          <p className="breadcrumb">Home ／ 事業内容</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="lead">
            株式会社吉浦は「大型重機」と「化学品」の2つの柱で、土木・建設の現場を
            支えています。
          </p>

          {/* 事業01 */}
          <div className="grid grid-2" style={{ marginTop: 36, alignItems: "start" }}>
            <div className="ph-img" style={{ aspectRatio: "4/3" }}>
              重機イメージ（差し替え）
            </div>
            <div>
              <p className="eyebrow">01 ｜ Machinery</p>
              <h2 className="h-section" style={{ fontSize: "1.6rem" }}>
                大型重機のレンタル及び販売
              </h2>
              <p style={{ color: "var(--stone-700)" }}>
                現場のニーズに合わせた大型重機のレンタル・販売を行っています。
                吉浦HDグループの機動力を活かし、必要な機材を必要なタイミングで
                ご提供。導入のご相談から運用まで、現場を止めない体制でサポートします。
              </p>
              <ul style={{ color: "var(--stone-700)", paddingLeft: "1.2em" }}>
                <li>大型重機のレンタル</li>
                <li>大型重機の販売</li>
                <li>機材選定・運用のご相談</li>
              </ul>
            </div>
          </div>

          {/* 事業02 */}
          <div
            className="grid grid-2"
            style={{ marginTop: 56, alignItems: "start" }}
          >
            <div>
              <p className="eyebrow">02 ｜ Chemicals</p>
              <h2 className="h-section" style={{ fontSize: "1.6rem" }}>
                化学品の輸入・販売
              </h2>
              <p style={{ color: "var(--stone-700)" }}>
                粉じん・浸食防止剤「ストーンウォール」（国土交通省NETIS登録技術）を
                はじめ、現場課題を解決する化学品を輸入・販売しています。福岡大学工学部
                との共同研究により、効果と安全性を科学的に確認しています。
              </p>
              <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/sw" className="btn btn--primary">
                  ストーンウォールの詳細
                </Link>
                <Link
                  href="/contact"
                  className="btn btn--ghost"
                  style={{ borderColor: "var(--navy)", color: "var(--navy)" }}
                >
                  お問い合わせ
                </Link>
              </div>
            </div>
            <div className="ph-img" style={{ aspectRatio: "4/3" }}>
              化学品・施工イメージ（差し替え）
            </div>
          </div>

          <div className="note">
            ※ 画像・文言はサンプルです。実際の事業写真・内容に差し替えます。
          </div>
        </div>
      </section>
    </>
  );
}
