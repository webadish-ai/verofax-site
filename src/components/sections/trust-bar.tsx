import { Container } from "@/components/ui/container";
import { LogoMarquee } from "@/components/ui/logo-marquee";
import { CLIENT_LOGOS } from "@/lib/site";

export function TrustBar() {
  return (
    <section className="border-b border-line bg-surface py-10">
      <Container>
        <p className="mb-7 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          Trusted by Fortune 100 brands across 50+ markets
        </p>
      </Container>
      <LogoMarquee logos={CLIENT_LOGOS} />
    </section>
  );
}
