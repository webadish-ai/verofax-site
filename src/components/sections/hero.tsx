"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Play, CheckCircle2, MessageSquare, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RatingChip } from "@/components/ui/rating-chip";
import { staggerParent, fadeUp } from "@/lib/motion";
import { BOOK_DEMO_HREF } from "@/lib/site";

const CHAT = [
  { id: 1, role: "ai", text: "Hi! I'm your AI concierge. How can I help today?" },
  { id: 2, role: "user", text: "Check my flight — EK204" },
  { id: 3, role: "ai", text: "✓ EK204 on time. Gate B12, boards at 14:30." },
  { id: 4, role: "user", text: "Any lounges nearby?" },
  { id: 5, role: "ai", text: "Emirates Business Lounge — 3 min from your gate." },
];

function ConsoleMockup() {
  const [shown, setShown] = useState<number[]>([]);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    CHAT.forEach((msg, i) => {
      timers.push(
        setTimeout(() => {
          setShown((prev) => [...prev, msg.id]);
        }, 900 + i * 1000),
      );
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative ml-auto w-full max-w-[360px]">
      {/* Ambient glow behind the card */}
      <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-brand-500/25 to-cyan-400/15 blur-3xl" />

      {/* Main card */}
      <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-navy-900/90 shadow-2xl backdrop-blur-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <Zap className="h-3.5 w-3.5 text-brand-400" />
            <span className="text-xs font-semibold text-white">AI Employee Console</span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/15 px-2 py-0.5 text-[10px] font-medium text-green-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
            Live
          </span>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-3 divide-x divide-white/10 border-b border-white/10 bg-white/5">
          {[
            ["98%", "Resolution"],
            ["+30%", "Revenue"],
            ["24/7", "Uptime"],
          ].map(([v, l]) => (
            <div key={l} className="p-3 text-center">
              <p className="font-display text-sm font-bold text-white">{v}</p>
              <p className="text-[10px] text-white/50">{l}</p>
            </div>
          ))}
        </div>

        {/* Chat area */}
        <div className="min-h-[200px] space-y-2 px-4 py-4">
          <AnimatePresence>
            {CHAT.filter((m) => shown.includes(m.id)).map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-3 py-2 text-[11px] leading-relaxed ${
                    msg.role === "ai"
                      ? "bg-brand-600/90 text-white shadow-sm"
                      : "bg-white/20 text-white/95"
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing indicator */}
          {shown.length > 0 && shown.length < CHAT.length && (
            <div className="flex gap-1 pl-1">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-400/70"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-2 border-t border-white/10 px-4 py-2.5">
          <BarChart3 className="h-3.5 w-3.5 text-cyan-400" />
          <span className="text-[10px] text-white/50">
            Interactions up{" "}
            <span className="font-semibold text-cyan-300">+45%</span> this week
          </span>
        </div>
      </div>

      {/* Floating badge — top right */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-4 -top-4 rounded-xl border border-white/15 bg-navy-900/90 px-3 py-2 shadow-lg backdrop-blur-sm"
      >
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="h-3.5 w-3.5 text-green-400" />
          <span className="text-[11px] font-medium text-white/85">Query resolved</span>
        </div>
      </motion.div>

      {/* Floating badge — bottom left */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute -left-5 bottom-24 rounded-xl border border-white/15 bg-navy-900/90 px-3 py-2 shadow-lg backdrop-blur-sm"
      >
        <div className="flex items-center gap-1.5">
          <MessageSquare className="h-3.5 w-3.5 text-brand-400" />
          <span className="text-[11px] font-medium text-white/85">3 new chats</span>
        </div>
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy-950 pt-16">
      {/* Background video */}
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/media/hero-poster.jpg"
        aria-hidden
      >
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/80 via-navy-950/70 to-navy-950" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_15%_20%,rgba(46,125,242,0.28),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-[0.25]" />

      {/* Ambient orbs */}
      <div className="absolute -left-24 top-1/3 -z-10 h-80 w-80 animate-float-slow rounded-full bg-brand-500/25 blur-3xl" />
      <div
        className="absolute right-0 top-1/4 -z-10 h-72 w-72 animate-float-slow rounded-full bg-cyan-400/20 blur-3xl"
        style={{ animationDelay: "-7s" }}
      />

      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px]">
          {/* Left: text */}
          <motion.div
            variants={staggerParent(0.12, 0.1)}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeUp}>
              <RatingChip dark className="mb-7" />
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl xl:text-[3.75rem]"
            >
              From service gaps to{" "}
              <span className="text-gradient">smart operations</span>
              {" "}— with AI Employees
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
            >
              Deploy human-like AI employees across websites, apps, phone channels and physical
              locations to improve customer experience, reduce service pressure and streamline
              operational workflows.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
              <Button href={BOOK_DEMO_HREF} size="lg">
                Book a Demo <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/use-cases" size="lg" variant="light">
                <Play className="h-4 w-4" /> Explore Use Cases
              </Button>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-6 text-sm font-medium text-white/55">
              Launch your first AI employee in days.
            </motion.p>
          </motion.div>

          {/* Right: animated product mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex lg:justify-end"
          >
            <ConsoleMockup />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#solutions"
        aria-label="Scroll to solutions"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <span className="flex h-9 w-6 items-start justify-center rounded-full border border-white/30 p-1.5">
          <span className="animate-scroll-cue h-2 w-1 rounded-full bg-white/80" />
        </span>
      </a>
    </section>
  );
}
