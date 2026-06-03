import { Container, SectionHeading } from "@/components/ui/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import type { Feature } from "@/lib/content";

export function FeatureGrid({
  eyebrow,
  title,
  subtitle,
  features,
  columns = 3,
  surface = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3;
  surface?: boolean;
}) {
  return (
    <section className={surface ? "bg-surface py-24" : "bg-white py-24"}>
      <Container>
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        </Reveal>
        <RevealGroup
          className={`mt-14 grid gap-6 sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""}`}
          stagger={0.07}
        >
          {features.map((f) => (
            <RevealItem key={f.title}>
              <div className="group h-full rounded-3xl border border-line bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
