import type { MetadataRoute } from "next";
import { landingSlugs } from "@/data/landings";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://crestech.com.ar";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", ...landingSlugs];
  return routes.map((slug) => ({
    url: slug ? `${siteUrl}/${slug}` : siteUrl,
    lastModified: now,
    changeFrequency: "monthly",
    priority: slug ? 0.8 : 1,
  }));
}
