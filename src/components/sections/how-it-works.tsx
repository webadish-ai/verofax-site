import { Container } from "@/components/ui/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

const STEPS = [
  {
    number: "01",
    title: "Connect your channels",
    description:
      "Embed on your website, mobile app, phone system and onsite kiosks in days. No re-architecting — works with your existing stack.",
  },
  {
    number: "02",
    title: "Deploy your AI workforce",
    description:
      "Pre-trained on your industry and brand voice. AI employees go live speaking your language — not a generic chatbot.",
  },
  {
    number: "03",
    title: "Watch results compound",
    description:
      "Every interaction makes your AI smarter. Revenue climbs, service costs fall, and your team focuses on what only humans can do.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-navy-950 py-24 text-white">
      <Container>
        <Reveal>
          <div className="text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              How it works
            </p>
            <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl">
              From zero to deployed in{" "}
              <span className="text-gradient">days, not months</span>
            </h2>
          </div>
        </Reveal>

        <RevealGroup className="relative mt-16 grid gap-8 lg:grid-cols-3" stagger={0.1}>
          {STEPS.map((step) => (
            <RevealItem key={step.number}>
              <div className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors duration-200 hover:border-brand-500/30 hover:bg-white/8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-cyan-400 font-display text-lg font-bold text-white shadow-[0_8px_24px_-6px_rgba(46,125,242,0.45)]">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {step.description}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
