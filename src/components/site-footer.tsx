import Link from "next/link";
import Image from "next/image";
import { SOLUTIONS } from "@/lib/site";

const COLUMNS = [
  {
    title: "Solutions",
    links: SOLUTIONS.map((s) => ({ label: s.title, href: `/solutions/${s.slug}` })),
  },
  {
    title: "Explore",
    links: [
      { label: "Industries", href: "/industries" },
      { label: "Use Cases", href: "/use-cases" },
      { label: "Company", href: "/company" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Verofax", href: "/company" },
      { label: "Case Studies", href: "/use-cases" },
      { label: "Awards", href: "/company#awards" },
      { label: "Book a Demo", href: "/contact" },
    ],
  },
];

const LOCATIONS = "Riyadh · Abu Dhabi · Delaware · London · Kuala Lumpur · Cairo";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/verofax-logo.webp"
              alt="Verofax"
              width={150}
              height={38}
              className="h-9 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Human-like AI employees across web, app, phone and physical locations — trusted by
              Fortune 100 brands across 50+ markets.
            </p>
            <p className="mt-6 text-xs uppercase tracking-wide text-white/55">{LOCATIONS}</p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Verofax Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">Privacy</Link>
            <Link href="#" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
