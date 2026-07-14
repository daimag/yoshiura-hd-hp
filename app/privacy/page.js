export const metadata = {
  title: "プライバシーポリシー｜株式会社吉浦",
};

export default function Privacy() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <p className="eyebrow">Privacy Policy</p>
          <h1>プライバシーポリシー</h1>
          <p className="breadcrumb">Home ／ プライバシーポリシー</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <p className="lead">
            株式会社吉浦（以下「当社」）は、お客様の個人情報の重要性を認識し、
            適切に取り扱い保護に努めます。
          </p>
          <table className="spec">
            <tbody>
              <tr>
                <th>個人情報の利用目的</th>
                <td>お問い合わせ対応、資料送付、製品・サービスのご案内のため。</td>
              </tr>
              <tr>
                <th>第三者提供</th>
                <td>法令に基づく場合を除き、ご本人の同意なく第三者へ提供しません。</td>
              </tr>
              <tr>
                <th>安全管理</th>
                <td>個人情報の漏えい・滅失・毀損の防止に努めます。</td>
              </tr>
              <tr>
                <th>お問い合わせ窓口</th>
                <td>株式会社吉浦 TEL：092-832-3237</td>
              </tr>
            </tbody>
          </table>
          <div className="note">※ 本文はサンプルです。正式な規程に差し替えます。</div>
        </div>
      </section>
    </>
  );
}
