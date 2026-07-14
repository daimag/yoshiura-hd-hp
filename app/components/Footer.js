import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="cols">
          <div>
            <strong style={{ color: "#fff", fontSize: "1.05rem" }}>
              株式会社吉浦
            </strong>
            <p style={{ margin: "8px 0 0" }}>
              〒819-0002 福岡県福岡市西区姪の浜1丁目19番25号
              <br />
              TEL：092-832-3237 ／ FAX：092-844-2538
            </p>
          </div>
          <nav className="fnav">
            <Link href="/sw">製品情報</Link>
            <Link href="/usagescene">活用シーン</Link>
            <Link href="/work">施工事例</Link>
            <Link href="/safety">安全性試験</Link>
            <Link href="/news">お知らせ</Link>
            <Link href="/contact">お問い合わせ</Link>
            <Link href="/privacy">プライバシーポリシー</Link>
          </nav>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} 株式会社吉浦 ／ 粉じん・浸食防止剤
          ストーンウォール
        </div>
      </div>
    </footer>
  );
}
