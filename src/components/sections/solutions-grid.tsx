import { ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { SOLUTIONS } from "@/lib/site";

function SolutionPreview({ slug }: { slug: string }) {
  switch (slug) {
    case "agentic-ai-for-web-app":
      return (
        <div className="relative h-40 overflow-hidden bg-gradient-to-br from-brand-600 to-brand-500">
          <div className="absolute inset-0 bg-grid opacity-25" />
          <div className="relative space-y-2.5 p-4 pt-5">
            <div className="flex items-end gap-2">
              <div className="h-5 w-5 flex-shrink-0 rounded-full bg-white/25" />
              <div className="max-w-[75%] rounded-2xl rounded-bl-none bg-white/25 px-3 py-1.5 text-[10px] leading-snug text-white">
                Hi! How can I help today?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="rounded-2xl rounded-br-none bg-white/15 px-3 py-1.5 text-[10px] leading-snug text-white/85">
                Show me premium plans
              </div>
            </div>
            <div className="flex items-end gap-2">
              <div className="h-5 w-5 flex-shrink-0 rounded-full bg-white/25" />
              <div className="max-w-[80%] rounded-2xl rounded-bl-none bg-white/25 px-3 py-1.5 text-[10px] leading-snug text-white">
                Here are our top 3 options ✓
              </div>
            </div>
          </div>
        </div>
      );

    case "ai-ar-solutions":
      return (
        <div className="relative h-40 overflow-hidden bg-gradient-to-br from-[#5b21b6] to-brand-500">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative flex h-full items-center justify-center">
            <div className="relative h-24 w-24">
              <div className="absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-white/80" />
              <div className="absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 border-white/80" />
              <div className="absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-white/80" />
              <div className="absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-white/80" />
              <div className="flex h-full items-center justify-center">
                <div className="h-2 w-2 animate-ping rounded-full bg-white/80" />
              </div>
            </div>
            <div className="absolute bottom-4 flex gap-2">
              {["AR", "AI", "360°"].map((l) => (
                <span key={l} className="rounded bg-white/20 px-2 py-0.5 text-[9px] font-bold text-white">
                  {l}
                </span>
              ))}
            </div>
            <div className="absolute right-8 top-7 h-2 w-2 rounded-full bg-cyan-300/80" />
            <div className="absolute left-8 top-10 h-1.5 w-1.5 rounded-full bg-white/60" />
            <div className="absolute bottom-10 right-10 h-1.5 w-1.5 rounded-full bg-white/50" />
          </div>
        </div>
      );

    case "ai-powered-holobox":
      return (
        <div className="relative h-40 overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950">
          <div className="absolute inset-0 bg-grid opacity-15" />
          <div className="relative flex h-full items-center justify-center">
            {([140, 100, 68, 40] as number[]).map((d, i) => (
              <div
                key={d}
                className="absolute rounded-full border border-cyan-400/30"
                style={{ width: d, height: d, opacity: 1 - i * 0.18 }}
              />
            ))}
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/50 bg-cyan-400/10">
              <div className="h-4 w-4 rounded-full bg-cyan-400/70 blur-sm" />
            </div>
          </div>
          <p className="absolute bottom-4 left-0 right-0 text-center text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-300/60">
            Holographic AI
          </p>
        </div>
      );

    case "computer-vision-traceability":
      return (
        <div className="relative h-40 overflow-hidden bg-gradient-to-br from-navy-900 to-[#0f172a]">
          <div className="absolute inset-0 bg-grid opacity-35" />
          <div className="relative flex h-full items-center justify-center gap-4 px-4">
            {[
              { border: "border-[#4ade80]", text: "text-[#4ade80]", label: "✓ OK", h: "h-14" },
              { border: "border-[#fbbf24]", text: "text-[#fbbf24]", label: "⚠ Flag", h: "h-16" },
              { border: "border-[#4ade80]", text: "text-[#4ade80]", label: "✓ OK", h: "h-12" },
            ].map((box, i) => (
              <div key={i} className={`relative w-14 ${box.h} rounded-sm border-2 ${box.border}`}>
                <span className={`absolute -top-3.5 left-0 text-[8px] font-bold ${box.text}`}>
                  {box.label}
                </span>
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 flex w-full items-center justify-center gap-2">
            <div className="h-px w-8 bg-[#4ade80]/50" />
            <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#4ade80]/80">
              Scan Active
            </span>
            <div className="h-px w-8 bg-[#4ade80]/50" />
          </div>
        </div>
      );

    default:
      return <div className="h-40 bg-gradient-to-br from-brand-600 to-brand-500" />;
  }
}

export function SolutionsGrid() {
  return (
    <section id="solutions" className="relative scroll-mt-20 bg-white py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="One platform, four ways to deploy"
            title={
              <>
                AI employees for <span className="text-gradient">every touchpoint</span>
              </>
            }
            subtitle="From your website to your storefront — pick the surface, we bring the intelligence."
          />
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4" stagger={0.09}>
          {SOLUTIONS.map((s) => (
            <RevealItem key={s.slug}>
              <SpotlightCard
                href={`/solutions/${s.slug}`}
                className="group relative isolate flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-400 hover:shadow-glow"
              >
                <SolutionPreview slug={s.slug} />
                <div className="relative z-10 flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                    {s.tagline}
                  </p>
                  <h3 className="mt-1.5 font-display text-xl font-bold text-navy-900">
                    {s.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {s.description}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-navy-800">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </SpotlightCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
