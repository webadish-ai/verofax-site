import { Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { LogoMarquee } from "@/components/ui/logo-marquee";
import { TESTIMONIALS, CLIENT_LOGOS, PARTNER_LOGOS } from "@/lib/site";

export function SocialProof() {
  return (
    <section className="bg-surface py-24">
      <Container>
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Trusted by Fortune 100 brands across 50+ markets
          </p>
        </Reveal>
        <div className="mt-8">
          <LogoMarquee logos={CLIENT_LOGOS} />
        </div>

        <RevealGroup className="mt-20 grid gap-6 lg:grid-cols-3" stagger={0.1}>
          {TESTIMONIALS.map((t) => (
            <RevealItem key={t.name}>
              <figure className="flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-card">
                <Quote className="h-7 w-7 text-brand-500/30" />
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-navy-800">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <p className="font-display text-sm font-bold text-navy-900">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal>
          <p className="mt-20 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Built on enterprise-grade technology
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-80">
            {PARTNER_LOGOS.map((p) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={p.alt}
                src={p.src}
                alt={p.alt}
                className="h-8 w-auto object-contain grayscale transition hover:grayscale-0"
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
