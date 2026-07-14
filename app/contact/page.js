export const metadata = {
  title: "お問い合わせ｜株式会社吉浦",
  description:
    "ストーンウォールに関するお問い合わせ・資料請求。株式会社吉浦（福岡市西区）TEL 092-832-3237。",
};

export default function Contact() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>お問い合わせ</h1>
          <p className="breadcrumb">Home ／ お問い合わせ</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ marginTop: 0 }}>
            <div>
              <h2 className="h-section" style={{ fontSize: "1.4rem" }}>
                会社情報
              </h2>
              <ul className="info-list">
                <li>
                  <b>会社名</b>
                  <span>株式会社吉浦</span>
                </li>
                <li>
                  <b>所在地</b>
                  <span>〒819-0002 福岡県福岡市西区姪の浜1丁目19番25号</span>
                </li>
                <li>
                  <b>TEL</b>
                  <span>092-832-3237（平日 9:00〜17:30）</span>
                </li>
                <li>
                  <b>FAX</b>
                  <span>092-844-2538</span>
                </li>
              </ul>
              <div className="note">
                ※ フォームは送信機能が未接続のサンプルです。公開時にメール通知
                （フォーム送信）を接続します。
              </div>
            </div>

            <div>
              <h2 className="h-section" style={{ fontSize: "1.4rem" }}>
                お問い合わせフォーム
              </h2>
              <form>
                <div className="field">
                  <label>会社名</label>
                  <input type="text" name="company" placeholder="株式会社〇〇" />
                </div>
                <div className="field">
                  <label>お名前</label>
                  <input type="text" name="name" placeholder="山田 太郎" />
                </div>
                <div className="field">
                  <label>メールアドレス</label>
                  <input type="email" name="email" placeholder="example@example.com" />
                </div>
                <div className="field">
                  <label>電話番号</label>
                  <input type="tel" name="tel" placeholder="092-000-0000" />
                </div>
                <div className="field">
                  <label>お問い合わせ内容</label>
                  <textarea name="message" rows={5} placeholder="ご用件をご記入ください" />
                </div>
                <button type="button" className="btn btn--primary">
                  送信する（サンプル）
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
