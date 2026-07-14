import {
  Noto_Sans_JP,
  Zen_Kaku_Gothic_New,
  Inter,
  Zen_Dots,
} from "next/font/google";

const noto = Noto_Sans_JP({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto",
  preload: false,
});
const jp = Zen_Kaku_Gothic_New({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jp",
  preload: false,
});
const en = Inter({ subsets: ["latin"], display: "swap", variable: "--font-en" });
const dots = Zen_Dots({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata = {
  metadataBase: new URL("https://yoshiura-hd-hp.vercel.app"),
  title: "粉じん・浸食防止剤 ストーンウォール｜株式会社吉浦",
  description:
    "NETIS登録の粉じん・浸食防止剤「ストーンウォール」。水で希釈し散布するだけで地表面を固化・安定化。株式会社吉浦（福岡市西区）。",
  openGraph: {
    title: "粉じん・浸食防止剤 ストーンウォール｜株式会社吉浦",
    description:
      "NETIS登録（KK-200056-A）。まくだけで粉じん対策・法面保護。株式会社吉浦。",
    url: "/",
    siteName: "株式会社吉浦｜ストーンウォール",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "粉じん・浸食防止剤 ストーンウォール｜株式会社吉浦",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ja"
      className={`${noto.variable} ${jp.variable} ${en.variable} ${dots.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
