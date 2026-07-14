export const metadata = {
  title: "お知らせ｜株式会社吉浦",
  description: "株式会社吉浦・ストーンウォールに関するお知らせ。",
};

const NEWS = [
  { date: "2026-06-01", tag: "お知らせ", t: "2026年版カタログを公開しました。※サンプル" },
  { date: "2026-02-16", tag: "製品", t: "安全性試験ページを更新しました。※サンプル" },
  { date: "2025-12-19", tag: "施工事例", t: "施工事例を追加しました。※サンプル" },
  { date: "2024-06-10", tag: "お知らせ", t: "ストーンウォールがNETIS「震災復旧・復興に資する技術」に登録されました。※サンプル" },
];

export default function News() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow">News</p>
          <h1>お知らせ</h1>
          <p className="breadcrumb">Home ／ お知らせ</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ul className="info-list" style={{ maxWidth: 820 }}>
            {NEWS.map((n, i) => (
              <li key={i} style={{ alignItems: "baseline" }}>
                <b style={{ minWidth: 108, color: "var(--stone-500)" }}>{n.date}</b>
                <span
                  style={{
                    background: "var(--stone-100)",
                    color: "var(--navy)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    padding: "2px 10px",
                    borderRadius: 999,
                    whiteSpace: "nowrap",
                  }}
                >
                  {n.tag}
                </span>
                <span>{n.t}</span>
              </li>
            ))}
          </ul>
          <div className="note">
            ※ 記事はサンプルです。既存サイトのお知らせ記事を移行・作成します。
          </div>
        </div>
      </section>
    </>
  );
}
