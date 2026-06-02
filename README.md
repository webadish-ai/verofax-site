# Verofax — Marketing Site (redesign)

Lead-generation marketing site for Verofax, rebuilt around **"AI Employees / Agentic AI."**
Showcases the four solutions — Agentic AI for Web & App, AI + AR, AI-Powered Holobox, and
Computer Vision Traceability — and funnels visitors into a demo/lead CTA.

## Stack
- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (brand tokens in `src/app/globals.css`)
- **Motion** (`motion/react`) for scroll/entrance reveals + **GSAP ScrollTrigger** for parallax
- **lucide-react** icons, self-hosted **Sora** (display) + **Inter** (body) fonts

Lighthouse (desktop): **Performance 100 · Accessibility 100 · Best Practices 100 · SEO 100**.

## Getting started
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm run start
```

## Structure
```
src/
  app/
    layout.tsx             # fonts, metadata, header/footer
    page.tsx               # homepage (composes sections)
    sitemap.ts / robots.ts
    solutions/[slug]/      # stub pages for the 4 solutions (SSG)
  components/
    site-header.tsx        # sticky, blur-on-scroll nav
    site-footer.tsx
    lead-form.tsx          # validated form, UI-only (stub submit)
    json-ld.tsx            # Organization schema
    sections/              # hero, solutions-grid, channels-row, industries-grid,
                           # impact-dashboard, social-proof, lead-cta-banner
    ui/                    # button, container, reveal, stat-counter, rating-chip, logo-marquee
  lib/
    site.ts                # all marketing content (nav, solutions, channels, stats, testimonials, logos)
    motion.ts / utils.ts
public/                    # hero video, client + partner logos, brand assets
```

## Content
All copy/data lives in `src/lib/site.ts` — edit there to change solutions, stats, testimonials,
nav and logos without touching components.

## TODO (follow-ups, intentionally stubbed)
- **Leads:** `lead-form.tsx` `onSubmit` logs the payload (incl. UTM params) and shows success.
  Wire it to a CRM / Calendly / `app/api/lead/route.ts`. "Book a Demo" links to `#contact`.
- Build the four full solution pages (currently stubs) and Industries/Company/Contact routes.
- Swap industry gradient cards for photographic imagery when assets are cleared.
- Add a real OG/Twitter share image.

## Assets
Brand video and logos were pulled from verofax.com into `public/`. Replace with final cleared
assets before production.
