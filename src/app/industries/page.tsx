import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { LeadCtaBanner } from "@/components/sections/lead-cta-banner";
import { INDUSTRIES_FULL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Verofax deploys AI employees across airports, retail, sports, government, hospitality, healthcare and more — built for high-traffic operations.",
  alternates: { canonical: "https://verofax.com/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Where Verofax creates impact"
        title={
          <>
            Built for <span className="text-gradient">high-traffic industries</span>
          </>
        }
        intro="From kerb to checkout to compliance — Verofax AI employees handle the moments that matter across the world's busiest operations."
      />

      <section className="bg-white py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Sectors we serve"
              title={
                <>
                  AI employees for <span className="text-gradient">every sector</span>
                </>
              }
              subtitle="Tailored deployments for the operations that never stop."
            />
          </Reveal>
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
            {INDUSTRIES_FULL.map((ind) => (
              <RevealItem key={ind.title}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-line bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-400 hover:shadow-glow">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-cyan-400 text-white">
                    <ind.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{ind.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{ind.description}</p>
                  <ul className="mt-4 space-y-1.5">
                    {ind.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-navy-800">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal>
            <p className="mx-auto mt-16 max-w-2xl text-center text-muted">
              Don&apos;t see your industry? Verofax adapts to any high-traffic, service-driven
              operation.
            </p>
          </Reveal>
        </Container>
      </section>

      <LeadCtaBanner />
    </>
  );
}
