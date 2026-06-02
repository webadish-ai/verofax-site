import { ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { CHANNELS } from "@/lib/site";

export function ChannelsRow() {
  return (
    <section id="channels" className="scroll-mt-20 bg-surface py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="One agent. Every channel."
            title={
              <>
                One AI workforce across every <span className="text-gradient">customer touchpoint</span>
              </>
            }
            subtitle="Email, phone, website, mobile app and onsite AI experiences — connected in one ecosystem."
          />
        </Reveal>

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5" stagger={0.07}>
          {CHANNELS.map((c) => (
            <RevealItem key={c.name}>
              <div className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-navy-900">{c.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{c.benefit}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                  {c.metric}
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
