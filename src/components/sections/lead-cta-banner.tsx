import { Suspense } from "react";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { LeadForm } from "@/components/lead-form";

const BULLETS = [
  "Launch your first AI employee in days",
  "Works across web, app, phone & onsite",
  "Enterprise-grade, deployed in 50+ markets",
];

export function LeadCtaBanner() {
  return (
    <section id="contact" className="scroll-mt-20 bg-white pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-navy-950 px-6 py-14 sm:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_80%_0%,rgba(46,125,242,0.35),transparent_60%)]" />
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 animate-float-slow rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="text-white">
                <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl">
                  Ready to deploy AI employees across your business?
                </h2>
                <p className="mt-4 max-w-md text-lg text-white/70">
                  Tell us where service breaks down today — we’ll show you the AI workforce that
                  fixes it.
                </p>
                <ul className="mt-8 space-y-3">
                  {BULLETS.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm text-white/85">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-500">
                        <Check className="h-3 w-3 text-white" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-white/12 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
                <Suspense fallback={<div className="h-96" />}>
                  <LeadForm />
                </Suspense>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
