"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/sw", label: "製品情報" },
  { href: "/usagescene", label: "活用シーン" },
  { href: "/work", label: "施工事例" },
  { href: "/safety", label: "安全性試験" },
  { href: "/news", label: "お知らせ" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !isHome || scrolled || open;

  return (
    <header className={`site-header${solid ? " solid" : ""}`}>
      <div className="container">
        <Link href="/" className="brand-logo" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={solid ? "/img/logo.png" : "/img/logo_white.png"} alt="株式会社吉浦" />
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
