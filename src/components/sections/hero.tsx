"use client";

import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RatingChip } from "@/components/ui/rating-chip";
import { staggerParent, fadeUp } from "@/lib/motion";
import { BOOK_DEMO_HREF } from "@/lib/site";

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
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/85 via-navy-950/75 to-navy-950" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_15%_20%,rgba(46,125,242,0.28),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-[0.25]" />

      {/* Floating glow orbs */}
      <div className="absolute -left-24 top-1/3 -z-10 h-80 w-80 animate-float-slow rounded-full bg-brand-500/25 blur-3xl" />
      <div
        className="absolute right-0 top-1/4 -z-10 h-72 w-72 animate-float-slow rounded-full bg-cyan-400/20 blur-3xl"
        style={{ animationDelay: "-7s" }}
      />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <motion.div
          variants={staggerParent(0.12, 0.1)}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp}>
            <RatingChip dark className="mb-7" />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-[4.25rem]"
          >
            From service gaps to{" "}
            <span className="text-gradient">smart operations</span>
            <br className="hidden sm:block" /> — with AI Employees
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75"
          >
            Deploy human-like AI employees across websites, apps, phone channels and physical
            locations to improve customer experience, reduce service pressure and streamline
            operational workflows.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <Button href={BOOK_DEMO_HREF} size="lg">
              Book a Demo <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#solutions" size="lg" variant="light">
              <Play className="h-4 w-4" /> Explore Use Cases
            </Button>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-6 text-sm font-medium text-white/55">
            Launch your first AI employee in days.
          </motion.p>
        </motion.div>
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
