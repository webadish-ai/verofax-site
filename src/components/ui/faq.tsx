"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Faq } from "@/lib/content";

export function FaqList({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-line rounded-3xl border border-line bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-base font-semibold text-navy-900">{item.q}</span>
              <Plus
                className={cn(
                  "h-5 w-5 shrink-0 text-brand-600 transition-transform duration-300",
                  isOpen && "rotate-45",
                )}
              />
            </button>
            <div
              className={cn(
                "grid overflow-hidden transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="min-h-0">
                <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
