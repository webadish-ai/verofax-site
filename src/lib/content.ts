import {
  Bot,
  Sparkles,
  Box,
  ScanEye,
  Globe,
  Smartphone,
  LayoutPanelLeft,
  Navigation,
  Gamepad2,
  Languages,
  BarChart3,
  ShieldCheck,
  Boxes,
  Eye,
  Plane,
  ShoppingBag,
  Trophy,
  Landmark,
  Hotel,
  HeartPulse,
  Utensils,
  Package,
  Search,
  Rocket,
  Cpu,
  PlugZap,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Solution detail pages                                              */
/* ------------------------------------------------------------------ */

export type Feature = { icon: LucideIcon; title: string; body: string };
export type Step = { title: string; body: string };
export type Faq = { q: string; a: string };

export type SolutionDetail = {
  headline: string;
  intro: string;
  heroStats: { value: string; label: string }[];
  features: Feature[];
  steps: Step[];
  outcomes: string[];
  industries: string[];
  faqs: Faq[];
};

export const SOLUTION_DETAILS: Record<string, SolutionDetail> = {
  "agentic-ai-for-web-app": {
    headline: "Turn browsers into buyers on every screen",
    intro:
      "Deploy lifelike AI employees across your website, mobile app and service portals. They understand intent, answer instantly, recommend the right product and move every conversation toward conversion — 24/7, in 180+ languages.",
    heroStats: [
      { value: "24/7", label: "Always-on support" },
      { value: "180+", label: "Languages" },
      { value: "+45%", label: "Sales uplift" },
    ],
    features: [
      { icon: Globe, title: "Website agent", body: "Turns your site into a round-the-clock assistant that guides visitors, captures leads and lifts conversion." },
      { icon: Smartphone, title: "App agent", body: "Personalized in-app recommendations, reminders and support that grow engagement and in-app revenue." },
      { icon: LayoutPanelLeft, title: "Portal agent", body: "Intelligent support inside telecom, banking, insurance and loyalty portals — real-time answers and service recommendations." },
      { icon: Languages, title: "Multilingual by default", body: "Human-like avatars converse in 180+ languages, matching each customer's tone and context." },
      { icon: PlugZap, title: "Plugs into your stack", body: "Connects to your CRM, catalog, knowledge base and ERP so answers stay accurate and actionable." },
      { icon: ShieldCheck, title: "Enterprise-grade", body: "Secure, auditable and compliant — built for Fortune 100 deployments across 50+ markets." },
    ],
    steps: [
      { title: "Connect", body: "We ingest your content, catalog and systems so the agent speaks with your knowledge." },
      { title: "Configure", body: "Set tone, guardrails, languages and the journeys you want to automate." },
      { title: "Launch", body: "Embed a snippet on your site or app — your first AI employee goes live in days." },
      { title: "Optimize", body: "The agent learns from every interaction; you watch impact in a live dashboard." },
    ],
    outcomes: [
      "Higher conversion and average order value",
      "Lower service cost and ticket volume",
      "Faster response times, around the clock",
      "Consistent, on-brand answers in any language",
    ],
    industries: ["Retail", "Telecom", "Banking", "Travel", "Healthcare", "Government"],
    faqs: [
      { q: "How long does it take to go live?", a: "Most web and app deployments launch in a matter of days once we connect your content and systems." },
      { q: "Does it integrate with our existing tools?", a: "Yes — the agent connects to your CRM, catalog, knowledge base and ERP so it can both answer and act." },
      { q: "What languages are supported?", a: "Our AI avatars converse naturally in 180+ languages out of the box." },
    ],
  },
  "ai-ar-solutions": {
    headline: "Turn every space into an experience",
    intro:
      "Create immersive, interactive experiences that elevate engagement, boost footfall and unlock new revenue — powered by augmented reality, enhanced with AI. From AR try-ons to gamified treasure hunts and smart wayfinding.",
    heroStats: [
      { value: "+60%", label: "Promo ROI" },
      { value: "+40%", label: "Store visits" },
      { value: "+5min", label: "Dwell time" },
    ],
    features: [
      { icon: Navigation, title: "Smart navigation", body: "AR overlays with AI support guide visitors through malls, airports and venues." },
      { icon: Gamepad2, title: "Gamified campaigns", body: "Branded treasure hunts and AR games that boost engagement and repeat visits." },
      { icon: Sparkles, title: "AR product discovery", body: "Virtual try-ons and real-time recommendations that turn browsing into buying." },
      { icon: Languages, title: "24/7 AI avatars", body: "Multilingual assistants provide personalized help anywhere, anytime." },
      { icon: BarChart3, title: "Actionable insights", body: "Real-time analytics on engagement, footfall and conversion across every space." },
      { icon: ShieldCheck, title: "Brand-safe & measurable", body: "Promotional integrity with full traceability of every interaction and reward." },
    ],
    steps: [
      { title: "Map the space", body: "We design AR journeys for your mall, airport, hotel, event or stadium." },
      { title: "Build the experience", body: "Try-ons, games and wayfinding tailored to your brand and goals." },
      { title: "Activate", body: "Visitors scan to enter the experience — no app install required." },
      { title: "Measure", body: "Track footfall, dwell time and ROI in real time and iterate." },
    ],
    outcomes: [
      "Higher ROI on promotional marketing",
      "More store visits and longer dwell time",
      "Richer first-party engagement data",
      "Memorable, shareable brand moments",
    ],
    industries: ["Malls", "Airports", "Hotels", "Events", "Sports clubs", "Tourism"],
    faqs: [
      { q: "Do visitors need to download an app?", a: "No — most experiences run in the browser via a simple QR scan, so there's zero friction." },
      { q: "Can it be branded to our campaign?", a: "Fully. Every try-on, game and avatar is themed to your brand and promotion." },
      { q: "What can we measure?", a: "Footfall, dwell time, engagement, redemptions and conversion — all in real time." },
    ],
  },
  "ai-powered-holobox": {
    headline: "A holographic concierge that greets, guides and sells",
    intro:
      "A life-size holographic AI assistant for physical venues. It welcomes visitors, answers questions, gives personalized recommendations and drives sales — a 100% human-like avatar that speaks 180+ languages and deploys in as little as 30 days.",
    heroStats: [
      { value: "30 days", label: "To deploy" },
      { value: "180+", label: "Languages" },
      { value: "24/7", label: "Availability" },
    ],
    features: [
      { icon: Box, title: "Life-size 3D avatar", body: "A striking holographic presence that draws people in and represents your brand." },
      { icon: Bot, title: "Agentic intelligence", body: "Understands intent, answers naturally and completes tasks — not just scripted replies." },
      { icon: Languages, title: "180+ languages", body: "Greets and serves every visitor in their own language, instantly." },
      { icon: Sparkles, title: "Personalized selling", body: "Recommends products and experiences based on real-time context." },
      { icon: BarChart3, title: "Onsite analytics", body: "Captures engagement and intent signals from every interaction." },
      { icon: Rocket, title: "Fast deployment", body: "From kickoff to a live Holobox on your floor in about 30 days." },
    ],
    steps: [
      { title: "Design the avatar", body: "Pick or create a custom AI persona aligned with your brand." },
      { title: "Train on your world", body: "We load your offers, FAQs and venue knowledge into the agent." },
      { title: "Install", body: "The Holobox is placed at your reception, store or venue entrance." },
      { title: "Engage & learn", body: "It serves visitors 24/7 and improves with every conversation." },
    ],
    outcomes: [
      "A memorable, premium welcome experience",
      "Reduced reception and service load",
      "More upsell and cross-sell on the floor",
      "Round-the-clock multilingual assistance",
    ],
    industries: ["Retail", "Hotels", "Airports", "Government", "Events", "Banking"],
    faqs: [
      { q: "How quickly can a Holobox be deployed?", a: "Typically within 30 days, from avatar design to a live unit on your floor." },
      { q: "Can we customize the avatar?", a: "Yes — choose a ready persona or commission a fully custom AI avatar for your brand." },
      { q: "Where does it work best?", a: "Receptions, flagship stores, airport terminals, hotel lobbies and event entrances." },
    ],
  },
  "computer-vision-traceability": {
    headline: "Automate quality checks with visual intelligence",
    intro:
      "Transform routine visual inspections into real-time intelligence. AI-powered defect detection, label verification and end-to-end traceability for food safety, logistics and manufacturing — ERP-ready and built to scale.",
    heroStats: [
      { value: "10×", label: "Faster validation" },
      { value: "0", label: "Error inspections" },
      { value: "Real-time", label: "Compliance" },
    ],
    features: [
      { icon: Eye, title: "AI defect detection", body: "Spot defects and anomalies on the line, instantly and consistently." },
      { icon: ScanEye, title: "Label & product verification", body: "Confirm the right product, label and serialization every time." },
      { icon: ShieldCheck, title: "Real-time compliance", body: "Continuous monitoring with instant alerts when something's off." },
      { icon: Boxes, title: "End-to-end traceability", body: "Track items across the journey for safety, recall and provenance." },
      { icon: Cpu, title: "ERP-ready architecture", body: "Scalable and integration-friendly, fitting into your existing systems." },
      { icon: Sparkles, title: "AI decision support", body: "Turn visual data into recommendations and immersive customer journeys." },
    ],
    steps: [
      { title: "Capture", body: "Cameras and devices feed visual data from your line or supply chain." },
      { title: "Analyze", body: "Computer vision validates products, labels and conditions in real time." },
      { title: "Act", body: "Anomalies trigger instant alerts; passing items move on automatically." },
      { title: "Trace", body: "Every check is logged for compliance, recall and provenance." },
    ],
    outcomes: [
      "10× faster validation cycles",
      "Near-zero inspection errors",
      "Real-time anomaly detection and alerts",
      "Audit-ready traceability and provenance",
    ],
    industries: ["Food & Beverage", "Pharma & Healthcare", "Logistics", "Manufacturing", "Retail", "Government"],
    faqs: [
      { q: "Can it run on our existing cameras?", a: "In most cases yes — we work with standard industrial and mobile cameras." },
      { q: "Does it integrate with our ERP?", a: "Yes, the architecture is ERP-ready so results flow into your systems of record." },
      { q: "What industries benefit most?", a: "Food & beverage, pharma, logistics and manufacturing see the fastest ROI." },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Industries (full)                                                 */
/* ------------------------------------------------------------------ */

export type IndustryDetail = {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
};

export const INDUSTRIES_FULL: IndustryDetail[] = [
  { icon: Plane, title: "Airports & Airlines", description: "Passenger assistance from kerb to gate.", points: ["Flight queries & wayfinding", "Upgrades and service recovery", "Multilingual passenger support"] },
  { icon: ShoppingBag, title: "Retail & Malls", description: "Turn footfall into loyal customers.", points: ["Personalized offers & try-ons", "Store and event discovery", "Onsite Holobox assistance"] },
  { icon: Trophy, title: "Sports & Events", description: "Engage fans before, during and after.", points: ["AR fan games & activations", "Sponsor experiences", "Merchandise try-ons"] },
  { icon: Landmark, title: "Government & Enterprise", description: "Autonomous service workflows, securely.", points: ["AI reception & wayfinding", "Compliance assistance", "Secure AI automation"] },
  { icon: Hotel, title: "Hospitality & Hotels", description: "A concierge for every guest.", points: ["24/7 multilingual concierge", "Upsell rooms & experiences", "Lobby Holobox welcome"] },
  { icon: HeartPulse, title: "Pharma & Healthcare", description: "Better patient and product journeys.", points: ["Patient experience agents", "Product traceability", "Compliance monitoring"] },
  { icon: Utensils, title: "Food & Beverage", description: "Safer, traceable, more engaging.", points: ["Visual quality checks", "Farm-to-shelf traceability", "Interactive packaging"] },
  { icon: Package, title: "Consumer Goods", description: "Connect products to consumers.", points: ["Interactive packaging", "Promotional integrity", "First-party engagement data"] },
];

/* ------------------------------------------------------------------ */
/*  Case studies                                                      */
/* ------------------------------------------------------------------ */

export type CaseStudy = {
  slug: string;
  client: string;
  logo?: string;
  industry: string;
  title: string;
  summary: string;
  metric: string;
  metricLabel: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "afa-fan-experiences",
    client: "Argentine Football Association",
    logo: "/logos/afa.webp",
    industry: "Sports & Events",
    title: "AI experiences for millions of football fans",
    summary:
      "The AFA teamed with Verofax to bring AI- and AR-powered experiences to fans — turning matchdays and merchandise into interactive, direct-to-consumer moments.",
    metric: "Millions",
    metricLabel: "Fans engaged",
  },
  {
    slug: "holobox-jawraa",
    client: "Jawraa",
    industry: "Retail & Venues",
    title: "Holobox AI agent reinvents customer experience",
    summary:
      "Verofax and Jawraa deployed a Holobox AI agent to greet, guide and sell on-site — a human-like holographic concierge delivering 24/7 multilingual service.",
    metric: "30 days",
    metricLabel: "To deployment",
  },
  {
    slug: "tracer-food-traceability",
    client: "Tracer",
    industry: "Food & Beverage",
    title: "Smart traceability cuts food waste for retailers",
    summary:
      "Tracer and Verofax brought blockchain-based food traceability to the UAE, helping retailers reduce food waste through real-time visibility and verification.",
    metric: "-30%",
    metricLabel: "Food waste",
  },
  {
    slug: "al-othaim-retail",
    client: "Al Othaim Mall",
    logo: "/logos/al-othaim-mall.webp",
    industry: "Retail & Malls",
    title: "On-site AI support transforms the mall visit",
    summary:
      "Holobox AI avatars provide shoppers with wayfinding, personalized offers and multilingual assistance — lifting engagement and matchday-style footfall.",
    metric: "+45%",
    metricLabel: "Sales uplift",
  },
  {
    slug: "emirates-flight-catering",
    client: "Emirates Flight Catering",
    logo: "/logos/emirates.webp",
    industry: "Food & Aviation",
    title: "Visual intelligence for catering quality",
    summary:
      "Computer-vision traceability automates quality checks across catering operations, delivering faster validation and real-time compliance.",
    metric: "10×",
    metricLabel: "Faster checks",
  },
  {
    slug: "abinbev-interactive-packaging",
    client: "AB InBev",
    logo: "/logos/abinbev.webp",
    industry: "Consumer Goods",
    title: "Interactive packaging during the FIFA World Cup",
    summary:
      "Verofax turned products into a direct-to-consumer channel with interactive packaging that improved acquisition and engagement during a World Cup promotion.",
    metric: "D2C",
    metricLabel: "New channel",
  },
];

/* ------------------------------------------------------------------ */
/*  Company                                                           */
/* ------------------------------------------------------------------ */

export const COMPANY_STATS = [
  { value: "50+", label: "Markets served" },
  { value: "180+", label: "Languages supported" },
  { value: "Fortune 100", label: "Clients trust us" },
  { value: "24/7", label: "AI availability" },
];

export const COMPANY_VALUES: Feature[] = [
  { icon: Bot, title: "Agentic by design", body: "We build AI that acts — understanding intent and completing tasks, not just answering." },
  { icon: ShieldCheck, title: "Enterprise trust", body: "Security, compliance and traceability are built in, not bolted on." },
  { icon: Globe, title: "Borderless service", body: "Human-like experiences in 180+ languages, online and on-site." },
  { icon: Sparkles, title: "Measurable impact", body: "Every deployment is tied to outcomes — revenue, efficiency and engagement." },
];

export const AWARDS: { year: string; title: string }[] = [
  { year: "2023", title: "AI Award winner at LEAP23" },
  { year: "2023", title: "GITEX Supernova Web3 & Blockchain Award" },
  { year: "2023", title: "PwC Middle East Top Future50 climatech start-up" },
  { year: "2023", title: "UAE Future100 — positive impact on the nation's economy" },
  { year: "2023", title: "Winner, Emirates Global Aluminium Ramp-Up Program" },
  { year: "2024", title: "Secured $3M bridge funding for AI & AR expansion" },
];

export type Office = { city: string; country: string };
export const OFFICES: Office[] = [
  { city: "Riyadh", country: "Saudi Arabia" },
  { city: "Abu Dhabi", country: "UAE" },
  { city: "Delaware", country: "USA" },
  { city: "London", country: "United Kingdom" },
  { city: "Kuala Lumpur", country: "Malaysia" },
  { city: "Cairo", country: "Egypt" },
  { city: "Lusaka", country: "Zambia" },
];

export const CONTACT_EMAIL = "info@verofax.com";

export const CONTACT_SUBJECTS = [
  "Agentic AI for Website or App",
  "Agentic AI for Physical Venues (Holobox)",
  "AR Experiences or Gamification",
  "Computer Vision Traceability",
  "Custom AI Deployment",
  "Partnership Inquiry",
  "General Inquiry",
];

/* ------------------------------------------------------------------ */
/*  Generic search icon export (used by use-cases empty states)        */
/* ------------------------------------------------------------------ */
export const SearchIcon = Search;
