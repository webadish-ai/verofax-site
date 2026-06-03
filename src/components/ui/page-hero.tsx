import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function PageHero({
  eyebrow,
  title,
  intro,
  backHref,
  backLabel,
  icon: Icon,
  stats,
  cta = true,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  backHref?: string;
  backLabel?: string;
  icon?: React.ComponentType<{ className?: string }>;
  stats?: { value: string; label: string }[];
  cta?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-16 pt-32 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_18%_8%,rgba(46,125,242,0.3),transparent_60%)]" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -left-20 top-10 h-72 w-72 animate-float-slow rounded-full bg-brand-500/20 blur-3xl" />
      <Container>
        <div className="relative max-w-3xl">
          {backHref && (
            <Reveal>
              <Link
                href={backHref}
                className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" /> {backLabel || "Back"}
              </Link>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            {Icon && (
              <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-cyan-400">
                <Icon className="h-7 w-7" />
              </div>
            )}
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              {eyebrow}
            </p>
            <h1 className="mt-2 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{intro}</p>
          </Reveal>

          {cta && (
            <Reveal delay={0.1}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact" size="lg">
                  Book a Demo <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
          )}

          {stats && (
            <Reveal delay={0.15}>
              <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-white/12 bg-white/5 p-4">
                    <dt className="font-display text-2xl font-extrabold text-white">{s.value}</dt>
                    <dd className="mt-1 text-xs text-white/60">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
