# yoshiura-hd-hp

株式会社吉浦「ストーンウォール」製品サイトのサンプル（Next.js App Router）。

## 開発

```bash
npm install
npm run dev
# http://localhost:3000
```

## 公開前プレビュー保護（Basic認証）

`middleware.js` が、環境変数 `SITE_AUTH_USER` / `SITE_AUTH_PASS` の**両方**が設定されている間だけ
Basic認証を要求します。

- ローカル：`.env.local`（gitignore）に2変数を設定
- 本番：Vercel の Environment Variables に2変数を設定
- **一般公開時**：Vercel 側でこの2変数を削除すれば、認証が外れて誰でも閲覧可能になります

`.env.example` を参照してください。

## ページ構成

- `/` トップ
- `/sw` 製品情報
- `/usagescene` 活用シーン
- `/work` 施工事例
- `/safety` 安全性試験
- `/news` お知らせ
- `/contact` お問い合わせ
- `/privacy` プライバシーポリシー

## デプロイ

Vercel にこのリポジトリを import すると自動でビルド・デプロイされます
（Next.js を自動検出）。環境変数 `SITE_AUTH_USER` / `SITE_AUTH_PASS` を登録してください。

> 注：写真・文言・施工事例・試験データ等は「※サンプル」表記のプレースホルダーです。
> ヒアリング後に実データへ差し替えます。
