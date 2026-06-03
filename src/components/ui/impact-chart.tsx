"use client";

import { useMemo, useRef, useState, type PointerEvent } from "react";
import { useReveal } from "@/lib/use-reveal";

const W = 320;
const H = 90;
const PAD_TOP = 10;
const PAD_BOTTOM = 10;
const USABLE = H - PAD_TOP - PAD_BOTTOM;

// Relative heights (0–100) — an upward "business impact" trend with gentle wiggle.
const HEIGHTS = [38, 42, 46, 52, 49, 57, 62, 59, 67, 71, 69, 80, 92];

function buildPoints() {
  const n = HEIGHTS.length;
  return HEIGHTS.map((h, i) => ({
    x: (i / (n - 1)) * W,
    y: PAD_TOP + (1 - h / 100) * USABLE,
  }));
}

/** Smooth line through points using a Catmull-Rom → cubic Bézier conversion. */
function smoothPath(pts: { x: number; y: number }[]) {
  if (pts.length < 2) return "";
  let d = `M${pts[0].x},${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] || p2;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C${c1x},${c1y} ${c2x},${c2y} ${p2.x},${p2.y}`;
  }
  return d;
}

export function ImpactChart() {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const svgRef = useRef<SVGSVGElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const { line, area, last } = useMemo(() => {
    const pts = buildPoints();
    const l = smoothPath(pts);
    return {
      line: l,
      area: `${l} L${W},${H} L0,${H} Z`,
      last: pts[pts.length - 1],
    };
  }, []);

  const [hover, setHover] = useState<{
    leftPct: number;
    topPct: number;
    value: number;
    day: number;
  } | null>(null);

  function onMove(e: PointerEvent<HTMLDivElement>) {
    const svg = svgRef.current;
    const path = lineRef.current;
    const wrap = wrapRef.current;
    if (!svg || !path || !wrap) return;

    // Cursor → SVG user units (accounts for non-uniform stretch).
    const ctm = svg.getScreenCTM();
    if (!ctm) return;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const loc = pt.matrixTransform(ctm.inverse());
    const targetX = Math.max(0, Math.min(W, loc.x));

    // Walk the path length to find the point at targetX (path is monotonic in x).
    const total = path.getTotalLength();
    let lo = 0;
    let hi = total;
    let p = path.getPointAtLength(0);
    for (let i = 0; i < 18; i++) {
      const mid = (lo + hi) / 2;
      p = path.getPointAtLength(mid);
      if (p.x < targetX) lo = mid;
      else hi = mid;
    }

    const heightFrac = (PAD_TOP + USABLE - p.y) / USABLE;
    setHover({
      leftPct: (p.x / W) * 100,
      topPct: (p.y / H) * 100,
      value: Math.round(60 + Math.max(0, Math.min(1, heightFrac)) * 38),
      day: Math.max(1, Math.min(30, Math.round((targetX / W) * 29) + 1)),
    });
  }

  return (
    <div ref={ref} className="mt-5 rounded-xl bg-navy-950 p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs text-white/60">Business impact — last 30 days</p>
        <p className="text-xs font-medium text-cyan-300">
          {hover ? `${hover.value}% · day ${hover.day}` : "Hover to explore"}
        </p>
      </div>

      <div
        ref={wrapRef}
        className="relative mt-3 cursor-crosshair"
        onPointerMove={onMove}
        onPointerLeave={() => setHover(null)}
      >
        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          className="block h-24 w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="impactFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2e7df2" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#2e7df2" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d={area}
            fill="url(#impactFill)"
            opacity={shown ? 1 : 0}
            className="transition-opacity duration-1000"
          />
          <path
            ref={lineRef}
            d={line}
            fill="none"
            stroke="#37c0e8"
            strokeWidth="2.5"
            vectorEffect="non-scaling-stroke"
            className={shown ? "draw-on-view" : ""}
            style={{ ["--len" as string]: "700" }}
          />
        </svg>

        {/* Interactive overlay (pixel-positioned, no SVG text distortion) */}
        <div className="pointer-events-none absolute inset-0">
          {/* Always-on pulsing latest point */}
          <span
            className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_0_4px_rgba(55,192,232,0.25)]"
            style={{ left: `${(last.x / W) * 100}%`, top: `${(last.y / H) * 100}%` }}
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-cyan-300/60" />
          </span>

          {hover && (
            <>
              {/* Crosshair */}
              <span
                className="absolute top-0 bottom-0 w-px bg-cyan-300/40"
                style={{ left: `${hover.leftPct}%` }}
              />
              {/* Tracking dot */}
              <span
                className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-cyan-300 shadow-[0_0_12px_rgba(55,192,232,0.9)]"
                style={{ left: `${hover.leftPct}%`, top: `${hover.topPct}%` }}
              />
              {/* Tooltip */}
              <span
                className="absolute -translate-x-1/2 -translate-y-[140%] whitespace-nowrap rounded-lg border border-white/15 bg-navy-900/95 px-2.5 py-1 text-[11px] font-semibold text-white shadow-lg backdrop-blur"
                style={{
                  left: `${Math.max(14, Math.min(86, hover.leftPct))}%`,
                  top: `${hover.topPct}%`,
                }}
              >
                {hover.value}% resolved
                <span className="ml-1 font-normal text-white/55">day {hover.day}</span>
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
