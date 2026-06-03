import { Check } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";

export function Outcomes({
  title,
  subtitle,
  items,
}: {
  title: React.ReactNode;
  subtitle?: string;
  items: string[];
}) {
  return (
    <section className="bg-surface py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Business outcomes" title={title} subtitle={subtitle} />
        </Reveal>
        <RevealGroup className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2" stagger={0.06}>
          {items.map((item) => (
            <RevealItem key={item}>
              <div className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500">
                  <Check className="h-3.5 w-3.5 text-white" />
                </span>
                <p className="text-sm font-medium text-navy-800">{item}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

export function FaqSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-white py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Questions, answered" />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-12">{children}</div>
        </Reveal>
      </Container>
    </section>
  );
}
