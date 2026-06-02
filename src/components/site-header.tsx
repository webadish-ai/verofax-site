"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV, BOOK_DEMO_HREF } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line bg-white/80 backdrop-blur-xl"
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
            className={cn("h-8 w-auto transition", !scrolled && "brightness-0 invert")}
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                scrolled ? "text-navy-800 hover:text-brand-600" : "text-white/80 hover:text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={BOOK_DEMO_HREF} size="sm">
            Book a Demo
          </Button>
        </div>

        <button
          className={cn("md:hidden", scrolled ? "text-navy-900" : "text-white")}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-5 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-sm font-medium text-navy-800"
              >
                {item.label}
              </Link>
            ))}
            <Button href={BOOK_DEMO_HREF} className="mt-4" onClick={() => setOpen(false)}>
              Book a Demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
