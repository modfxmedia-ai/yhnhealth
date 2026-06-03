import type { MetadataRoute } from "next";
import { SITE_PATHS } from "@/lib/navigation";
import { CITIES, SERVICES } from "@/lib/pseoData";
import { ARTICLES } from "@/lib/articlesData";

const BASE = "https://yhnhealth.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const core: MetadataRoute.Sitemap = SITE_PATHS.map((path) => ({
    url: `${BASE}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1.0 : 0.7,
  }));

  const areasIndex: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/areas-we-serve`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const cityHubs: MetadataRoute.Sitemap = CITIES.map((c) => ({
    url: `${BASE}/areas-we-serve/${c.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const cityServices: MetadataRoute.Sitemap = [];
  for (const c of CITIES) {
    for (const s of SERVICES) {
      cityServices.push({
        url: `${BASE}/areas-we-serve/${c.slug}/${s.slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
  }

  const articles: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${BASE}/articles/${a.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...core, ...areasIndex, ...cityHubs, ...cityServices, ...articles];
}
