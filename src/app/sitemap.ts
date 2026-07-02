import type { MetadataRoute } from "next";
import { landingSlugs } from "@/data/landings";
import { postSlugs } from "@/data/posts";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://crestech.com.ar";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", ...landingSlugs, "blog", ...postSlugs.map((s) => `blog/${s}`)];
  return routes.map((slug) => ({
    url: slug ? `${siteUrl}/${slug}` : siteUrl,
    lastModified: now,
    changeFrequency: "monthly",
    priority: slug ? 0.8 : 1,
  }));
}
