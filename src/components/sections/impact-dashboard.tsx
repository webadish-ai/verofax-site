import Image from "next/image";
import { TrendingUp, Clock, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { StatCounter } from "@/components/ui/stat-counter";
import { ImpactChart } from "@/components/ui/impact-chart";
import { STATS } from "@/lib/site";

export function ImpactDashboard() {
  return (
    <section id="impact" className="scroll-mt-20 bg-white py-24">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                Business impact
              </p>
              <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-navy-900 sm:text-4xl">
                Measurable outcomes, not just conversations
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Verofax AI employees lift revenue, deflect service load and run 24/7 — proven across
                Fortune 100 deployments in 50+ markets.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                {STATS.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-line bg-surface p-5">
                    <p className="font-display text-3xl font-extrabold text-brand-600">
                      <StatCounter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1 text-sm text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Dashboard mock */}
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-500/20 to-cyan-400/10 blur-2xl" />
              <div className="rounded-3xl border border-line bg-white p-6 shadow-glow">
                <div className="flex items-center justify-between border-b border-line pb-4">
                  <p className="font-display text-sm font-bold text-navy-900">
                    AI Employee Console
                  </p>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                    Live
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[
                    { icon: TrendingUp, k: "Resolution", v: "98%" },
                    { icon: Sparkles, k: "Revenue", v: "+30%" },
                    { icon: Clock, k: "Availability", v: "24/7" },
                  ].map((m) => (
                    <div key={m.k} className="rounded-xl bg-surface p-3">
                      <m.icon className="h-4 w-4 text-brand-500" />
                      <p className="mt-2 font-display text-lg font-bold text-navy-900">{m.v}</p>
                      <p className="text-xs text-muted">{m.k}</p>
                    </div>
                  ))}
                </div>

                {/* Self-drawing trend chart */}
                <ImpactChart />

                <div className="mt-4 flex items-center gap-3 rounded-xl border border-line p-3">
                  <Image
                    src="/cutch.webp"
                    alt="Clutch rating"
                    width={40}
                    height={40}
                    className="h-9 w-9 rounded-lg object-contain"
                  />
                  <p className="text-xs text-muted">
                    <span className="font-semibold text-navy-900">5.0 on Clutch</span> · 4.9 on Google
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
