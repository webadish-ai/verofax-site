import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, MapPin, Clock, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { LeadForm } from "@/components/lead-form";
import { CONTACT_EMAIL, OFFICES, CONTACT_SUBJECTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Verofax about deploying AI employees across web, app, phone and physical locations. Offices in Riyadh, Abu Dhabi, Delaware, London, Kuala Lumpur, Cairo and Lusaka.",
  alternates: { canonical: "https://verofax.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s deploy your first <span className="text-gradient">AI employee</span>
          </>
        }
        intro="Tell us where service breaks down today — we'll show you the AI workforce that fixes it. A specialist responds within one business day."
        cta={false}
      />

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            {/* Left: details */}
            <Reveal>
              <div>
                <h2 className="font-display text-2xl font-bold text-navy-900">Get in touch</h2>
                <p className="mt-3 text-muted">
                  Whether you want a quick demo or a full deployment plan, we&apos;re ready.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition hover:border-brand-400"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-navy-900">Email us</span>
                      <span className="text-sm text-muted">{CONTACT_EMAIL}</span>
                    </span>
                  </a>

                  <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600">
                      <Clock className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-navy-900">Response time</span>
                      <span className="text-sm text-muted">Within one business day</span>
                    </span>
                  </div>
                </div>

                {/* Offices */}
                <h3 className="mt-10 flex items-center gap-2 text-sm font-semibold text-navy-900">
                  <MapPin className="h-4 w-4 text-brand-600" /> Offices
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {OFFICES.map((o) => (
                    <div key={o.city} className="rounded-xl border border-line bg-white p-3">
                      <p className="text-sm font-semibold text-navy-900">{o.city}</p>
                      <p className="text-xs text-muted">{o.country}</p>
                    </div>
                  ))}
                </div>

                {/* What we help with */}
                <h3 className="mt-10 text-sm font-semibold text-navy-900">What we help with</h3>
                <ul className="mt-4 space-y-2">
                  {CONTACT_SUBJECTS.slice(0, 5).map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-navy-800">
                      <Check className="h-4 w-4 text-brand-600" /> {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Right: form */}
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-white/10 bg-navy-950 p-6 shadow-glow sm:p-8">
                <h2 className="font-display text-xl font-bold text-white">Book a demo</h2>
                <p className="mt-1.5 text-sm text-white/60">
                  Fill in the form and we&apos;ll be in touch shortly.
                </p>
                <div className="mt-6">
                  <Suspense fallback={<div className="h-96" />}>
                    <LeadForm />
                  </Suspense>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
