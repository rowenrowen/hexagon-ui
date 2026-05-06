/** Canonical site origin — used for sitemap, robots, metadataBase, absolute URLs. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://hexagonui.com";
