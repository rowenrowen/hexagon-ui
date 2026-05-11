import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";
import { BLOCK_SECTIONS } from "@/content/blocks-catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  const now = new Date();

  const staticRoutes = ["", "/blocks", "/kit", "/pricing", "/docs", "/privacy", "/terms", "/preview"];
  const categoryRoutes = BLOCK_SECTIONS.map((s) => `/blocks/${s.slug}`);
  const routes = [...staticRoutes, ...categoryRoutes];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency:
      path === "" || path === "/blocks" || path.startsWith("/blocks/")
        ? "weekly"
        : path === "/preview"
          ? "monthly"
          : "monthly",
    priority:
      path === ""
        ? 1
        : path === "/blocks"
          ? 0.95
          : path === "/pricing"
            ? 0.9
            : path === "/kit"
              ? 0.8
              : path === "/docs"
                ? 0.75
                : path.startsWith("/blocks/")
                  ? 0.7
                  : path === "/preview"
                    ? 0.25
                    : 0.5,
  }));
}
