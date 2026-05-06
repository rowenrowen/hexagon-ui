import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  const now = new Date();

  const routes = ["", "/blocks", "/kit", "/pricing", "/handoff", "/privacy", "/terms", "/preview"];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency:
      path === "" || path === "/blocks" ? "weekly" : path === "/preview" ? "monthly" : "monthly",
    priority:
      path === ""
        ? 1
        : path === "/blocks"
          ? 0.95
          : path === "/pricing"
            ? 0.9
            : path === "/kit"
              ? 0.8
              : path === "/preview"
                ? 0.25
                : 0.65,
  }));
}
