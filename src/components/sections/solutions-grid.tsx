import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { SOLUTIONS } from "@/lib/site";

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
              <Link
                href={`/solutions/${s.slug}`}
                className="group flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-400 hover:shadow-glow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-cyan-400 text-white shadow-[0_8px_20px_-6px_rgba(46,125,242,0.6)]">
                  <s.icon className="h-6 w-6" />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-brand-500">
                  {s.tagline}
                </p>
                <h3 className="mt-1.5 font-display text-xl font-bold text-navy-900">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{s.description}</p>
                <ul className="mt-5 space-y-1.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-navy-800">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                      {p}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
