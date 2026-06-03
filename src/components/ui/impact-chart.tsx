"use client";

import { useReveal } from "@/lib/use-reveal";

const LINE = "M0,70 C40,66 60,40 100,44 C140,48 160,20 200,26 C240,32 270,12 320,8";
const AREA = `${LINE} L320,90 L0,90 Z`;

export function ImpactChart() {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="mt-5 rounded-xl bg-navy-950 p-5">
      <p className="text-xs text-white/60">Business impact — last 30 days</p>
      <svg viewBox="0 0 320 90" className="mt-3 h-24 w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="impactFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2e7df2" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#2e7df2" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={AREA} fill="url(#impactFill)" opacity={shown ? 1 : 0} className="transition-opacity duration-1000" />
        <path
          d={LINE}
          fill="none"
          stroke="#37c0e8"
          strokeWidth="2.5"
          className={shown ? "draw-on-view" : ""}
          style={{ ["--len" as string]: "700" }}
        />
      </svg>
    </div>
  );
}
