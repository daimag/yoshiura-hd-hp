import "./v2.css";
import V2Header from "./components/V2Header";
import V2Footer from "./components/V2Footer";
import V2Reveal from "./components/V2Reveal";

export const metadata = {
  title: "ストーンウォール｜株式会社吉浦",
  description:
    "粉じん・浸食防止剤「ストーンウォール」。まくだけで粉じん対策・法面保護。NETIS登録（KK-200056-A）／福岡大学工学部と共同研究。株式会社吉浦。",
};

export default function V2Layout({ children }) {
  return (
    <div className="v2" id="top">
      <V2Header />
      <main>{children}</main>
      <V2Footer />
      <V2Reveal />
    </div>
  );
}
