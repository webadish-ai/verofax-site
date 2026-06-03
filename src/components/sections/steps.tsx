import { Container, SectionHeading } from "@/components/ui/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import type { Step } from "@/lib/content";

export function Steps({
  eyebrow = "How it works",
  title,
  steps,
  dark = true,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  steps: Step[];
  dark?: boolean;
}) {
  return (
    <section className={dark ? "bg-navy-950 py-24 text-white" : "bg-white py-24"}>
      <Container>
        <Reveal>
          <SectionHeading dark={dark} eyebrow={eyebrow} title={title} />
        </Reveal>
        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {steps.map((s, i) => (
            <RevealItem key={s.title}>
              <div
                className={`relative h-full rounded-3xl border p-6 ${
                  dark ? "border-white/10 bg-white/5" : "border-line bg-surface"
                }`}
              >
                <span className="font-display text-4xl font-extrabold text-gradient">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className={`mt-3 font-display text-lg font-bold ${
                    dark ? "text-white" : "text-navy-900"
                  }`}
                >
                  {s.title}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-white/65" : "text-muted"}`}>
                  {s.body}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
