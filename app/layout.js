import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "粉じん・浸食防止剤 ストーンウォール｜株式会社吉浦",
  description:
    "NETIS登録の粉じん・浸食防止剤「ストーンウォール」。水で希釈し散布するだけで地表面を固化・安定化。粉じん飛散抑制・法面保護・雨裂侵食対策に。株式会社吉浦（福岡市西区）。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
