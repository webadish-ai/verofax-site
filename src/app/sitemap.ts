import type { MetadataRoute } from "next";
import { SOLUTIONS } from "@/lib/site";

const BASE = "https://verofax.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/industries", "/use-cases", "/company", "/contact"];
  return [
    ...staticRoutes.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...SOLUTIONS.map((s) => ({
      url: `${BASE}/solutions/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
