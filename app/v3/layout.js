import "./v3.css";
import V3Header from "./components/V3Header";
import V3Footer from "./components/V3Footer";
import V3Reveal from "./components/V3Reveal";

export const metadata = {
  title: "ストーンウォール｜株式会社吉浦",
  description:
    "粉じん・浸食防止剤「ストーンウォール」。まくだけで粉じん対策・法面保護。NETIS登録（KK-200056-A）／福岡大学工学部と共同研究。株式会社吉浦。",
};

export default function V3Layout({ children }) {
  return (
    <div className="v3" id="top">
      <V3Header />
      <main>{children}</main>
      <V3Footer />
      <V3Reveal />
    </div>
  );
}
