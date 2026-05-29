import type { MetadataRoute } from "next";
import { BONUSES } from "@/data/bonuses";
import { GUIDES } from "@/data/guides";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, freq: "daily" },
    { path: "/bonuses", priority: 0.9, freq: "daily" },
    { path: "/no-deposit", priority: 0.8, freq: "daily" },
    { path: "/free-spins", priority: 0.8, freq: "daily" },
    { path: "/promo-codes", priority: 0.8, freq: "daily" },
    { path: "/reviews", priority: 0.7, freq: "weekly" },
    { path: "/guides", priority: 0.7, freq: "weekly" },
    { path: "/responsible-gambling", priority: 0.4, freq: "yearly" },
    { path: "/affiliate-disclosure", priority: 0.3, freq: "yearly" },
    { path: "/privacy-policy", priority: 0.3, freq: "yearly" },
    { path: "/terms", priority: 0.3, freq: "yearly" },
  ];

  return [
    ...staticPaths.map((p) => ({
      url: `${siteUrl}${p.path === "/" ? "" : p.path}`,
      lastModified: now,
      changeFrequency: p.freq,
      priority: p.priority,
    })),
    ...BONUSES.map((b) => ({
      url: `${siteUrl}/reviews/${b.id}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...GUIDES.map((g) => ({
      url: `${siteUrl}/guides/${g.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
