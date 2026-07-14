import "../globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export default function SiteLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <Reveal />
    </>
  );
}
