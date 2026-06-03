import {
  Globe,
  Sparkles,
  Box,
  ScanEye,
  Mail,
  Phone,
  MonitorSmartphone,
  Smartphone,
  Store,
  Plane,
  ShoppingBag,
  Trophy,
  Landmark,
  type LucideIcon,
} from "lucide-react";

export const CALENDLY_URL = "https://calendly.com/verofax/demo";
export const BOOK_DEMO_HREF = "/contact";

export type NavChild = { label: string; href: string; description?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const NAV: NavItem[] = [
  {
    label: "Solutions",
    href: "/#solutions",
    children: [
      { label: "Agentic AI for Web & App", href: "/solutions/agentic-ai-for-web-app", description: "AI agents for sites, apps & portals" },
      { label: "AI + AR Solutions", href: "/solutions/ai-ar-solutions", description: "Immersive AR, enhanced with AI" },
      { label: "AI-Powered Holobox", href: "/solutions/ai-powered-holobox", description: "Holographic on-site concierge" },
      { label: "Computer Vision Traceability", href: "/solutions/computer-vision-traceability", description: "Automated visual quality checks" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/contact" },
];

export type Solution = {
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  points: string[];
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "agentic-ai-for-web-app",
    icon: Globe,
    title: "Agentic AI for Web & App",
    tagline: "Turn browsers into buyers",
    description:
      "Lifelike AI agents on your website, app and service portals that understand intent, recommend products and resolve queries in real time.",
    points: ["24/7 real-time support", "Personalized recommendations", "Plugs into your stack"],
  },
  {
    slug: "ai-ar-solutions",
    icon: Sparkles,
    title: "AI + AR Solutions",
    tagline: "Turn every space into an experience",
    description:
      "Immersive AR journeys enhanced with AI — smart navigation, gamified campaigns and product discovery that lift footfall and dwell time.",
    points: ["+60% promo ROI", "+40% store visits", "Multilingual AI avatars"],
  },
  {
    slug: "ai-powered-holobox",
    icon: Box,
    title: "AI-Powered Holobox",
    tagline: "A holographic concierge, on-site",
    description:
      "A life-size holographic AI assistant that greets, guides and sells with personalized recommendations — deployed in as little as 30 days.",
    points: ["Life-like 3D avatar", "Real-time personalization", "Deploys in 30 days"],
  },
  {
    slug: "computer-vision-traceability",
    icon: ScanEye,
    title: "Computer Vision Traceability",
    tagline: "Automate quality checks",
    description:
      "Turn routine visual inspections into real-time intelligence — defect detection, label verification and end-to-end traceability, ERP-ready.",
    points: ["10× faster validation", "Zero-error inspections", "Real-time compliance"],
  },
];

export type Channel = {
  icon: LucideIcon;
  name: string;
  benefit: string;
  metric: string;
};

export const CHANNELS: Channel[] = [
  { icon: Mail, name: "Email Agent", benefit: "Reads, routes and replies — keeping teams informed on priority threads.", metric: "Speed up replies" },
  { icon: Phone, name: "Phone Agent", benefit: "Handles inbound calls, answers FAQs and escalates when a human is needed.", metric: "Reduce wait time" },
  { icon: MonitorSmartphone, name: "Website Agent", benefit: "Guides visitors, captures leads and moves every conversation toward conversion.", metric: "Convert visitors" },
  { icon: Smartphone, name: "Mobile App Agent", benefit: "Personalized in-app recommendations, reminders and active service support.", metric: "Increase usage" },
  { icon: Store, name: "Onsite Agent", benefit: "Holobox & AR agents for wayfinding, real-world recommendations and assistance.", metric: "Serve onsite" },
];

export type Industry = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const INDUSTRIES: Industry[] = [
  { icon: Plane, title: "Airports & Airlines", description: "Passenger assistance, flight queries, wayfinding, upgrades and service support." },
  { icon: ShoppingBag, title: "Retail & Malls", description: "Shopping guidance, personalized offers, event discovery and loyalty engagement." },
  { icon: Trophy, title: "Sports & Events", description: "Fan engagement, sponsor activations, AR games and onsite entertainment." },
  { icon: Landmark, title: "Government & Enterprise", description: "Reception, service workflows, compliance assistance and secure AI automation." },
];

export type Stat = { value: number; suffix: string; label: string };

export const STATS: Stat[] = [
  { value: 45, suffix: "%", label: "Sales increase" },
  { value: 35, suffix: "%", label: "Higher engagement" },
  { value: 35, suffix: "%", label: "Lower service cost" },
  { value: 50, suffix: "+", label: "Markets served" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Interactive packaging improved acquisition and engagement during the FIFA World Cup promotion by turning products into a direct-to-consumer channel.",
    name: "Rodrigo Caballero",
    role: "Global Director, Premium Brands",
  },
  {
    quote:
      "The credit scoring solution streamlined our operations with the convenience and safety our institutional customers expect.",
    name: "Wesam Baqer",
    role: "Chief, Corporate & Institutional Banking, BisB",
  },
  {
    quote:
      "Smart traceability helps retailers reduce food waste by up to 30% — that's a measurable impact on margin and sustainability.",
    name: "Khalid Roumieh",
    role: "CEO, Tracer",
  },
];

export const CLIENT_LOGOS = [
  { src: "/logos/fcb.webp", alt: "FC Barcelona" },
  { src: "/logos/afa.webp", alt: "Argentine Football Association" },
  { src: "/logos/al-othaim-mall.webp", alt: "Al Othaim Mall" },
  { src: "/logos/emirates.webp", alt: "Emirates Flight Catering" },
  { src: "/logos/nhc.webp", alt: "NHC" },
  { src: "/logos/balady.webp", alt: "Balady" },
  { src: "/logos/abinbev.webp", alt: "AB InBev" },
];

export const PARTNER_LOGOS = [
  { src: "/partners/or.webp", alt: "Oracle" },
  { src: "/partners/micro.webp", alt: "Microsoft" },
  { src: "/partners/aws.webp", alt: "AWS" },
  { src: "/partners/sap.webp", alt: "SAP" },
  { src: "/partners/l-stc.webp", alt: "STC" },
  { src: "/partners/l-cloud.webp", alt: "Alibaba Cloud" },
];
