import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/siteUrl";

export default function robots(): MetadataRoute.Robots {
  const allowAll = { allow: "/" as const };
  return {
    rules: [
      { userAgent: "*", ...allowAll },
      { userAgent: "Googlebot", ...allowAll },
      { userAgent: "Google-Extended", ...allowAll },
      { userAgent: "OAI-SearchBot", ...allowAll },
      { userAgent: "ChatGPT-User", ...allowAll },
      { userAgent: "PerplexityBot", ...allowAll },
      { userAgent: "Perplexity-User", ...allowAll },
      { userAgent: "Claude-User", ...allowAll },
      { userAgent: "Claude-SearchBot", ...allowAll },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
