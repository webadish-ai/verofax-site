import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { LeadCtaBanner } from "@/components/sections/lead-cta-banner";
import { CASE_STUDIES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Use Cases",
  description:
    "See how Verofax deploys AI & AR, Holobox and computer-vision traceability for brands like AFA, Al Othaim Mall, Emirates Flight Catering, AB InBev and Tracer.",
  alternates: { canonical: "https://verofax.com/use-cases" },
};

export default function UseCasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Proof, not promises"
        title={
          <>
            Results across <span className="text-gradient">50+ markets</span>
          </>
        }
        intro="Fortune 100 brands use Verofax to turn service into revenue. Here's a sample of what AI employees deliver in the real world."
      />

      <section className="bg-white py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Case studies"
              title={
                <>
                  Featured <span className="text-gradient">deployments</span>
                </>
              }
              subtitle="A snapshot of outcomes across retail, sports, aviation and consumer goods."
            />
          </Reveal>
          <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {CASE_STUDIES.map((cs) => (
              <RevealItem key={cs.slug}>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                  <div className="relative flex h-36 flex-col items-center justify-center overflow-hidden bg-navy-950 px-4 text-center">
                    <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_0%,rgba(46,125,242,0.35),transparent_65%)]" />
                    <div className="absolute inset-0 bg-grid opacity-20" />
                    <span className="relative font-display text-xl font-bold text-white">
                      {cs.client}
                    </span>
                    <span className="relative mt-2 font-display text-3xl font-extrabold text-gradient">
                      {cs.metric}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                      {cs.industry}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-bold text-navy-900">{cs.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{cs.summary}</p>
                    <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                      <p className="text-xs font-medium uppercase tracking-wide text-muted">
                        {cs.metricLabel}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 transition group-hover:translate-x-1">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal>
            <p className="mx-auto mt-16 max-w-2xl text-center text-muted">
              Want the full case study or a reference call? We&apos;ll connect you with the right
              team.
            </p>
          </Reveal>
        </Container>
      </section>

      <LeadCtaBanner />
    </>
  );
}
