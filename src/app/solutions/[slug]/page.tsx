import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SOLUTIONS } from "@/lib/site";
import { SOLUTION_DETAILS } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Steps } from "@/components/sections/steps";
import { Outcomes, FaqSection } from "@/components/sections/outcomes";
import { FaqList } from "@/components/ui/faq";
import { Reveal } from "@/components/ui/reveal";
import { LeadCtaBanner } from "@/components/sections/lead-cta-banner";

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = SOLUTIONS.find((s) => s.slug === slug);
  const detail = SOLUTION_DETAILS[slug];
  if (!solution || !detail) return {};
  return {
    title: solution.title,
    description: detail.intro,
    alternates: { canonical: `https://verofax.com/solutions/${slug}` },
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = SOLUTIONS.find((s) => s.slug === slug);
  const detail = SOLUTION_DETAILS[slug];
  if (!solution || !detail) notFound();

  const others = SOLUTIONS.filter((s) => s.slug !== slug);

  return (
    <>
      <PageHero
        eyebrow={solution.tagline}
        title={detail.headline}
        intro={detail.intro}
        backHref="/#solutions"
        backLabel="All solutions"
        icon={solution.icon}
        stats={detail.heroStats}
      />

      <FeatureGrid
        eyebrow="Capabilities"
        title={
          <>
            Everything you need, <span className="text-gradient">built in</span>
          </>
        }
        subtitle="A complete, enterprise-ready toolkit — deployed as one AI employee."
        features={detail.features}
      />

      <Steps
        title={
          <>
            Live in days, <span className="text-gradient">not months</span>
          </>
        }
        steps={detail.steps}
      />

      <Outcomes
        title={
          <>
            What you can <span className="text-gradient">expect</span>
          </>
        }
        items={detail.outcomes}
      />

      {/* Industries served */}
      <section className="bg-white py-20">
        <Container>
          <Reveal>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
              Trusted across industries
            </p>
            <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-3">
              {detail.industries.map((ind) => (
                <span
                  key={ind}
                  className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-navy-800"
                >
                  {ind}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <FaqSection>
        <FaqList items={detail.faqs} />
      </FaqSection>

      {/* Cross-links */}
      <section className="bg-surface py-20">
        <Container>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Explore other solutions
          </p>
          <div className="mx-auto mt-6 grid max-w-5xl gap-4 sm:grid-cols-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/solutions/${o.slug}`}
                className="group rounded-2xl border border-line bg-white p-5 transition hover:border-brand-400 hover:shadow-card"
              >
                <o.icon className="h-6 w-6 text-brand-500" />
                <p className="mt-3 font-display text-sm font-bold text-navy-900">{o.title}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-sm text-brand-600">
                  Explore <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <LeadCtaBanner />
    </>
  );
}
