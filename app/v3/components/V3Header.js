"use client";

import { useEffect, useState } from "react";

const NAV = [
  { href: "#commitment", label: "こだわり" },
  { href: "#strengths", label: "強み" },
  { href: "#product", label: "製品情報" },
  { href: "#works", label: "施工事例" },
  { href: "#company", label: "会社概要" },
  { href: "#news", label: "お知らせ" },
];

export default function V3Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`head${solid || open ? " solid" : ""}`}>
      <div className="container">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={solid || open ? "/img/logo.png" : "/img/logo_white.png"} alt="株式会社吉浦" />
        </a>
        <button className="toggle" aria-label="メニュー" onClick={() => setOpen((v) => !v)}>
          {open ? "✕" : "☰"}
        </button>
        <nav className={`nav${open ? " open" : ""}`}>
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a href="#contact" className="btn solid" onClick={() => setOpen(false)}>
            お問い合わせ
          </a>
        </nav>
      </div>
    </header>
  );
}
