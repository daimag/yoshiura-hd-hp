"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SELECTOR =
  ".sec-head, .tiles, .tiles--3, .grid, .stats, .metrics, .chart, .cta .container";

export default function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(SELECTOR));
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("reveal-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
