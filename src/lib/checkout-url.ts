/** Gumroad product URL — paid kit checkout only (single visit after someone chooses to buy). */
export const GUMROAD_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_GUMROAD_PRODUCT_URL ??
  "https://hexagonui.gumroad.com/l/hexagon-ui-kit";

/**
 * Free starter ZIP — host on your domain by default (no gate). Same-origin path serves from `public/`.
 * Optional override to a CDN URL (`NEXT_PUBLIC_FREE_STARTER_DOWNLOAD_URL`).
 *
 * Gumroad $0 products are optional if you want email capture; many kits ship free samples from their own site (see Tailwind Plus / similar).
 */
export const FREE_STARTER_DOWNLOAD_URL =
  process.env.NEXT_PUBLIC_FREE_STARTER_DOWNLOAD_URL ?? "/downloads/hexagon-ui-free-starter.zip";
