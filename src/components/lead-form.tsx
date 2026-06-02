"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2 } from "lucide-react";
import { ButtonTag } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "done";

const inputCls =
  "h-11 w-full rounded-xl border border-line bg-white px-4 text-sm text-navy-900 placeholder:text-muted/70 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-500/20";

export function LeadForm() {
  const params = useSearchParams();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData) {
    const next: Record<string, string> = {};
    if (!String(data.get("name") || "").trim()) next.name = "Please enter your name.";
    const email = String(data.get("email") || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid work email.";
    if (!String(data.get("company") || "").trim()) next.company = "Company is required.";
    return next;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus("submitting");

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      company: data.get("company"),
      phone: data.get("phone"),
      message: data.get("message"),
      source: "homepage-cta",
      utm_source: params.get("utm_source"),
      utm_medium: params.get("utm_medium"),
      utm_campaign: params.get("utm_campaign"),
    };

    // TODO: wire to CRM / Calendly / /api/lead. UI-only for now.
    console.log("[lead] submit", payload);
    await new Promise((r) => setTimeout(r, 700));
    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-white/15 bg-white/5 p-10 text-center text-white">
        <CheckCircle2 className="h-12 w-12 text-cyan-300" />
        <h3 className="mt-4 font-display text-xl font-bold">Thanks — you’re on the list.</h3>
        <p className="mt-2 max-w-sm text-sm text-white/70">
          A Verofax specialist will reach out within one business day to map your first AI employee.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
      <Field label="Full name" name="name" placeholder="Jane Cooper" error={errors.name} />
      <Field
        label="Work email"
        name="email"
        type="email"
        placeholder="jane@company.com"
        error={errors.email}
      />
      <Field label="Company" name="company" placeholder="Company name" error={errors.company} />
      <Field label="Phone" name="phone" type="tel" placeholder="+971 ..." optional />
      <div className="sm:col-span-2">
        <label className="mb-1.5 block text-sm font-medium text-white/80">
          What do you want to automate? <span className="text-white/40">(optional)</span>
        </label>
        <textarea
          name="message"
          rows={3}
          placeholder="e.g. 24/7 support on our website + onsite Holobox for our flagship store"
          className={cn(inputCls, "h-auto py-3 resize-none")}
        />
      </div>
      <div className="sm:col-span-2">
        <ButtonTag type="submit" size="lg" className="w-full" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            "Book a Demo"
          )}
        </ButtonTag>
        <p className="mt-3 text-center text-xs text-white/45">
          No spam. We’ll only use your details to follow up about Verofax.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
  optional,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  optional?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-white/80">
        {label} {optional && <span className="text-white/40">(optional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={!!error}
        className={cn(inputCls, error && "border-red-400 focus:border-red-400 focus:ring-red-400/20")}
      />
      {error && <p className="mt-1 text-xs text-red-300">{error}</p>}
    </div>
  );
}
