import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const display = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const SITE_URL = "https://verofax.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Verofax — Human-like AI Employees for Every Channel",
    template: "%s · Verofax",
  },
  description:
    "Deploy human-like AI employees across websites, apps, phone channels and physical locations to improve customer experience, reduce service pressure and streamline operations.",
  keywords: [
    "Agentic AI",
    "AI employees",
    "AI customer service",
    "AI + AR",
    "AI Holobox",
    "Computer Vision Traceability",
    "Verofax",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Verofax — Human-like AI Employees for Every Channel",
    description:
      "From service gaps to smart operations — deploy AI employees across web, app, phone and physical locations.",
    siteName: "Verofax",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verofax — Human-like AI Employees for Every Channel",
    description: "From service gaps to smart operations — with AI Employees.",
  },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} antialiased`}>
      <body className="min-h-screen bg-white">
        <ScrollProgress />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
