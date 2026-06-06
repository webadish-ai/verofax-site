"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { CHANNELS } from "@/lib/site";

const CHANNEL_DETAILS: Record<
  string,
  { bullets: string[]; accent: string }
> = {
  "Email Agent": {
    bullets: [
      "Auto-triage and route priority emails instantly",
      "Drafts contextual responses in seconds",
      "Syncs with your CRM — zero data re-entry",
    ],
    accent: "from-brand-600 to-brand-500",
  },
  "Phone Agent": {
    bullets: [
      "Handles inbound calls 24/7 with natural voice",
      "No IVR menus — straight to resolution",
      "Smooth human handoff when escalation is needed",
    ],
    accent: "from-navy-700 to-brand-600",
  },
  "Website Agent": {
    bullets: [
      "Engages visitors before they bounce",
      "Guides to the right product or pricing page",
      "Books demos and captures leads autonomously",
    ],
    accent: "from-brand-500 to-cyan-400",
  },
  "Mobile App Agent": {
    bullets: [
      "Personalized in-app nudges and recommendations",
      "Proactive service before customers even ask",
      "Increases retention and lifetime value",
    ],
    accent: "from-cyan-400 to-brand-400",
  },
  "Onsite Agent": {
    bullets: [
      "Wayfinding and concierge in physical spaces",
      "AR-enhanced product discovery and navigation",
      "Multilingual recommendations at scale",
    ],
    accent: "from-brand-500 to-[#5b21b6]",
  },
};

export function ChannelsRow() {
  const [active, setActive] = useState(CHANNELS[0].name);
  const ch = CHANNELS.find((c) => c.name === active)!;
  const detail = CHANNEL_DETAILS[active] ?? CHANNEL_DETAILS[CHANNELS[0].name];

  return (
    <section id="channels" className="scroll-mt-20 bg-surface py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="One agent. Every channel."
            title={
              <>
                One AI workforce across every{" "}
                <span className="text-gradient">customer touchpoint</span>
              </>
            }
            subtitle="Email, phone, website, mobile app and onsite AI experiences — connected in one ecosystem."
          />
        </Reveal>

        {/* Desktop: tab layout */}
        <div className="mt-14 hidden lg:grid lg:grid-cols-[300px_1fr] lg:gap-8">
          {/* Tab list */}
          <div className="space-y-2">
            {CHANNELS.map((c) => (
              <button
                key={c.name}
                type="button"
                onClick={() => setActive(c.name)}
                aria-selected={active === c.name}
                className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-200 ${
                  active === c.name
                    ? "border-brand-400 bg-white shadow-glow"
                    : "border-transparent bg-white/50 hover:border-line hover:bg-white"
                }`}
              >
                <div
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-colors ${
                    active === c.name
                      ? "bg-brand-500 text-white"
                      : "bg-brand-500/10 text-brand-600"
                  }`}
                >
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p
                    className={`text-sm font-bold ${
                      active === c.name ? "text-navy-900" : "text-navy-800"
                    }`}
                  >
                    {c.name}
                  </p>
                  <p className="mt-0.5 truncate text-xs text-muted">{c.metric}</p>
                </div>
                {active === c.name && (
                  <ArrowRight className="ml-auto h-4 w-4 flex-shrink-0 text-brand-500" />
                )}
              </button>
            ))}
          </div>

          {/* Preview panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-card">
                {/* Gradient header */}
                <div
                  className={`relative h-40 overflow-hidden bg-gradient-to-br ${detail.accent}`}
                >
                  <div className="absolute inset-0 bg-grid opacity-25" />
                  <div className="relative flex h-full items-center justify-between px-8">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                        {ch.name}
                      </p>
                      <p className="mt-1 font-display text-4xl font-extrabold text-white">
                        {ch.metric}
                      </p>
                    </div>
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                      <ch.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8">
                  <p className="text-base leading-relaxed text-muted">{ch.benefit}</p>
                  <ul className="mt-6 space-y-3">
                    {detail.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-500/15">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                        </span>
                        <span className="text-sm text-navy-800">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/use-cases"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-all hover:gap-3"
                  >
                    Explore use cases <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile: card grid */}
        <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:hidden" stagger={0.07}>
          {CHANNELS.map((c) => (
            <RevealItem key={c.name}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-card">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-sm font-bold text-navy-900">{c.name}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{c.benefit}</p>
                <p className="mt-3 text-sm font-semibold text-brand-600">{c.metric}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
