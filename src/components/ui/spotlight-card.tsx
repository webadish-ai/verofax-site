"use client";

import { useRef, type MouseEvent } from "react";
import Link from "next/link";

/** Card link with a cursor-following spotlight glow (sets --mx/--my CSS vars). */
export function SpotlightCard({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  function onMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <Link ref={ref} href={href} onMouseMove={onMove} className={className}>
      <span className="spotlight pointer-events-none absolute inset-0 rounded-[inherit]" aria-hidden />
      {children}
    </Link>
  );
}
