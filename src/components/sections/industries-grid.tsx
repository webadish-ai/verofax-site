"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Container, SectionHeading } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { INDUSTRIES } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function IndustriesGrid() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;
      gsap.utils.toArray<HTMLElement>(".industry-glow").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: 12 },
          {
            yPercent: -12,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });
    },
    { scope: root },
  );

  return (
    <section
      id="industries"
      ref={root}
      className="scroll-mt-20 bg-navy-950 py-24 text-white"
    >
      <Container>
        <Reveal>
          <SectionHeading
            dark
            eyebrow="Where Verofax creates impact"
            title={
              <>
                Built for <span className="text-gradient">high-traffic industries</span>
              </>
            }
            subtitle="Deploy AI across airports, retail, hospitality, tourism, sports and enterprise operations."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.title} delay={i * 0.06}>
              <div className="group relative h-72 overflow-hidden rounded-3xl border border-white/10">
                <div className="industry-glow absolute inset-0 scale-110 bg-gradient-to-br from-brand-600/40 via-navy-800 to-navy-950" />
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-6">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-cyan-300 backdrop-blur transition group-hover:bg-brand-500 group-hover:text-white">
                    <ind.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold">{ind.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/65">{ind.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
