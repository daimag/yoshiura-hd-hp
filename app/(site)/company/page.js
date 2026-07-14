export const metadata = {
  title: "会社概要｜株式会社吉浦",
  description:
    "株式会社吉浦の会社概要。商号・資本金・代表者・設立・所在地・事業内容。",
};

// 現サイト掲載の確定情報
const INFO = [
  ["商号", "株式会社吉浦"],
  ["資本金", "10,000,000円"],
  ["代表者", "代表取締役　井上　誓"],
  ["設立", "平成9年2月20日"],
  ["所在地", "福岡市西区姪の浜1丁目19番25号"],
  ["連絡先", "092-832-3237"],
  ["事業内容", "化学品の輸入・販売、大型重機のレンタル及び販売"],
];

// 追加を検討する項目（当日ヒアリングで確認）
const HEARING = [
  ["FAX", "092-844-2538 で相違ないか"],
  ["従業員数", "正社員／パート別の人数"],
  ["許認可・登録", "建設業許可番号・各種登録の有無"],
  ["事業所・拠点", "本社以外の支店・営業所・倉庫"],
  ["取引銀行", "掲載可否含む"],
  ["加盟団体", "所属団体・協会など"],
  ["沿革", "年表に載せたい出来事（5〜10件）"],
  ["主要取引先", "掲載可否含む"],
  ["グループ会社", "吉浦HDグループ各社の掲載可否"],
  ["公式URL・SNS", "コーポレート(yoshiura-ltd.com)との相互リンク方針"],
];

export default function Company() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow">Company</p>
          <h1>会社概要</h1>
          <p className="breadcrumb">Home ／ 会社概要</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h-section" style={{ fontSize: "1.4rem" }}>
            会社情報
          </h2>
          <table className="spec">
            <tbody>
              {INFO.map(([k, v]) => (
                <tr key={k}>
                  <th>{k}</th>
                  <td>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="h-section" style={{ fontSize: "1.2rem", marginTop: 56 }}>
            追加を検討する項目
          </h2>
          <p className="lead" style={{ margin: "0 0 16px" }}>
            下記は掲載を充実させるための候補です。当日ヒアリングで内容・掲載可否を
            ご確認ください。
          </p>
          <table className="spec">
            <tbody>
              {HEARING.map(([k, v]) => (
                <tr key={k}>
                  <th>{k}</th>
                  <td style={{ color: "var(--muted)" }}>※ヒアリング：{v}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="note">
            ※「追加を検討する項目」は当日ヒアリング用のたたき台です。確定後に本掲載へ
            差し替えます。
          </div>
        </div>
      </section>
    </>
  );
}
