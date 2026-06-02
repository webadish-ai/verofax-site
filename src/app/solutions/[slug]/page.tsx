import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SOLUTIONS } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
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
  if (!solution) return {};
  return {
    title: solution.title,
    description: solution.description,
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
  if (!solution) notFound();

  const others = SOLUTIONS.filter((s) => s.slug !== slug);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 pb-20 pt-32 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_10%,rgba(46,125,242,0.3),transparent_60%)]" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <Container>
          <div className="relative max-w-3xl">
            <Link
              href="/#solutions"
              className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> All solutions
            </Link>
            <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-cyan-400">
              <solution.icon className="h-7 w-7" />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-cyan-300">
              {solution.tagline}
            </p>
            <h1 className="mt-2 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              {solution.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/75">{solution.description}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#contact" size="lg">
                Book a Demo <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <ul className="mt-10 grid gap-3 sm:grid-cols-3">
              {solution.points.map((p) => (
                <li
                  key={p}
                  className="rounded-2xl border border-white/12 bg-white/5 p-4 text-sm font-medium"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Coming soon note */}
      <section className="bg-white py-20">
        <Container>
          <div className="mx-auto max-w-2xl rounded-3xl border border-line bg-surface p-10 text-center">
            <h2 className="font-display text-2xl font-bold text-navy-900">
              Full {solution.title} page coming soon
            </h2>
            <p className="mt-3 text-muted">
              We’re building a deep-dive with live demos, case studies and ROI breakdowns. Want a
              preview now? Talk to our team.
            </p>
            <div className="mt-6">
              <Button href="#contact">Talk to an expert</Button>
            </div>
          </div>

          {/* Cross-links */}
          <div className="mx-auto mt-16 max-w-5xl">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Explore other solutions
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
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
          </div>
        </Container>
      </section>

      <LeadCtaBanner />
    </>
  );
}
