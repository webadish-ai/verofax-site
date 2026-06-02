import type { MetadataRoute } from "next";
import { SOLUTIONS } from "@/lib/site";

const BASE = "https://verofax.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...SOLUTIONS.map((s) => ({
      url: `${BASE}/solutions/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
