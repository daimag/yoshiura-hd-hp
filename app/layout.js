import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

const noto = Noto_Sans_JP({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto",
  preload: false,
});

export const metadata = {
  title: "粉じん・浸食防止剤 ストーンウォール｜株式会社吉浦",
  description:
    "NETIS登録の粉じん・浸食防止剤「ストーンウォール」。水で希釈し散布するだけで地表面を固化・安定化。粉じん飛散抑制・法面保護・雨裂侵食対策に。株式会社吉浦（福岡市西区）。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={noto.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
