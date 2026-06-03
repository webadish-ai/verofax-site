import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { StatCounter } from "@/components/ui/stat-counter";
import { LeadCtaBanner } from "@/components/sections/lead-cta-banner";
import { LogoMarquee } from "@/components/ui/logo-marquee";
import { PARTNER_LOGOS } from "@/lib/site";
import { COMPANY_VALUES, AWARDS, OFFICES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Verofax delivers human-like AI customer service through Agentic AI and vision — immersive, intelligent and personalized experiences across web, app and on-site, in 50+ markets.",
  alternates: { canonical: "https://verofax.com/company" },
};

const STATS = [
  { value: 90, suffix: "%", label: "Increase in efficiency" },
  { value: 40, suffix: "%", label: "Better customer retention" },
  { value: 6, suffix: "×", label: "Marketing ROI" },
  { value: 50, suffix: "+", label: "Markets served" },
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="About Verofax"
        title={
          <>
            Turning customer interactions into <span className="text-gradient">conversions</span>
          </>
        }
        intro="Verofax delivers seamless AI customer service through a next-gen platform — leveraging Agentic AI and vision capabilities for immersive, intelligent and personalized experiences across web, app and on-site."
      />

      {/* Stats */}
      <section className="bg-white py-20">
        <Container>
          <RevealGroup className="grid grid-cols-2 gap-6 lg:grid-cols-4" stagger={0.08}>
            {STATS.map((s) => (
              <RevealItem key={s.label}>
                <div className="rounded-2xl border border-line bg-surface p-6 text-center">
                  <p className="font-display text-4xl font-extrabold text-brand-600">
                    <StatCounter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-muted">{s.label}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <FeatureGrid
        eyebrow="What we stand for"
        title={
          <>
            Built on <span className="text-gradient">trust and impact</span>
          </>
        }
        subtitle="The principles behind every Verofax deployment."
        features={COMPANY_VALUES}
        columns={2}
        surface
      />

      {/* Awards */}
      <section id="awards" className="scroll-mt-20 bg-white py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Recognition"
              title={
                <>
                  Awards &amp; <span className="text-gradient">milestones</span>
                </>
              }
            />
          </Reveal>
          <RevealGroup className="mx-auto mt-12 max-w-3xl space-y-3" stagger={0.06}>
            {AWARDS.map((a) => (
              <RevealItem key={a.title}>
                <div className="flex items-center gap-5 rounded-2xl border border-line bg-surface p-5">
                  <span className="font-display text-lg font-bold text-brand-600">{a.year}</span>
                  <span className="h-8 w-px bg-line" />
                  <p className="text-sm font-medium text-navy-800">{a.title}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Offices */}
      <section className="bg-navy-950 py-24 text-white">
        <Container>
          <Reveal>
            <SectionHeading
              dark
              eyebrow="Global footprint"
              title={
                <>
                  On the ground in <span className="text-gradient">7 countries</span>
                </>
              }
            />
          </Reveal>
          <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.05}>
            {OFFICES.map((o) => (
              <RevealItem key={o.city}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <MapPin className="h-5 w-5 text-cyan-300" />
                  <p className="mt-3 font-display text-base font-bold">{o.city}</p>
                  <p className="text-sm text-white/60">{o.country}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Partners */}
      <section className="bg-surface py-20">
        <Container>
          <Reveal>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Built on enterprise-grade technology
            </p>
          </Reveal>
          <div className="mt-10">
            <LogoMarquee logos={PARTNER_LOGOS} />
          </div>
        </Container>
      </section>

      <LeadCtaBanner />
    </>
  );
}
