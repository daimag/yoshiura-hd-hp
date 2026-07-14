"use client";

import Link from "next/link";
import { useState } from "react";

const NAV = [
  { href: "/business", label: "事業内容" },
  { href: "/sw", label: "製品情報" },
  { href: "/usagescene", label: "活用シーン" },
  { href: "/work", label: "施工事例" },
  { href: "/safety", label: "安全性試験" },
  { href: "/news", label: "お知らせ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <strong>株式会社吉浦</strong>
          <span>粉じん・浸食防止剤 ストーンウォール</span>
        </Link>
        <button
          className="nav-toggle"
          aria-label="メニュー"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
        <nav className={`nav${open ? " open" : ""}`}>
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn btn--primary"
            onClick={() => setOpen(false)}
          >
            お問い合わせ
          </Link>
        </nav>
      </div>
    </header>
  );
}
