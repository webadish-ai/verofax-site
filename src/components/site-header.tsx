"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV, BOOK_DEMO_HREF } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-line bg-white/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Verofax home">
          <Image
            src="/verofax-logo.webp"
            alt="Verofax"
            width={132}
            height={34}
            priority
            className={cn("h-8 w-auto transition", !scrolled && !open && "brightness-0 invert")}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center gap-1 text-sm font-medium transition-colors",
                    scrolled ? "text-navy-800 hover:text-brand-600" : "text-white/85 hover:text-white",
                  )}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </Link>
                {/* Dropdown */}
                <div className="invisible absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-line bg-white p-2 shadow-glow">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block rounded-xl px-3 py-2.5 transition hover:bg-surface"
                      >
                        <p className="text-sm font-semibold text-navy-900">{c.label}</p>
                        {c.description && (
                          <p className="text-xs text-muted">{c.description}</p>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  scrolled ? "text-navy-800 hover:text-brand-600" : "text-white/85 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden md:block">
          <Button href={BOOK_DEMO_HREF} size="sm">
            Book a Demo
          </Button>
        </div>

        <button
          className={cn("md:hidden", scrolled || open ? "text-navy-900" : "text-white")}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-line bg-white px-5 pb-8 pt-2 md:hidden">
          <nav className="flex flex-col">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-line">
                  <button
                    onClick={() => setOpenGroup((g) => (g === item.label ? null : item.label))}
                    className="flex w-full items-center justify-between py-3 text-sm font-medium text-navy-800"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        openGroup === item.label && "rotate-180",
                      )}
                    />
                  </button>
                  {openGroup === item.label && (
                    <div className="pb-2">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="block rounded-lg px-3 py-2 text-sm text-muted hover:bg-surface hover:text-navy-900"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-3 text-sm font-medium text-navy-800"
                >
                  {item.label}
                </Link>
              ),
            )}
            <Button href={BOOK_DEMO_HREF} className="mt-5" onClick={() => setOpen(false)}>
              Book a Demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
