"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reliable "in view" hook driven by IntersectionObserver.
 * - Reveals once when the element scrolls into view.
 * - Falls back to visible if IntersectionObserver is unavailable, if the user
 *   prefers reduced motion, or after a short safety timeout — so content is
 *   never left stuck hidden (robust against React StrictMode double-mounts).
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

    const reveal = () => setShown(true);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      const raf = requestAnimationFrame(reveal);
      return () => cancelAnimationFrame(raf);
    }

    // If already in view on mount, reveal immediately (next frame).
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const raf = requestAnimationFrame(reveal);
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.01 },
    );
    observer.observe(el);

    // Safety net: never leave content hidden.
    const timer = window.setTimeout(() => setShown(true), 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, [shown]);

  return { ref, shown };
}
