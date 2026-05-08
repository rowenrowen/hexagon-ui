import type { BlockEntry } from "@/content/blocks-catalog";
import { BLOCK_SECTIONS } from "@/content/blocks-catalog";

/** Curated highlights for the marketing homepage — deep-link into `/blocks` anchors. */
export const HOME_FEATURED_BLOCK_SLUGS = [
  "nav-marketing",
  "hero-marketing",
  "hero-split",
  "trust-strip",
  "logo-marquee",
  "stats-strip",
  "feature-grid",
  "bento-showcase",
  "testimonial-grid",
  "pricing-three-tier",
  "faq-accordion",
  "cta-band",
  "newsletter-inline",
  "contact-section",
  "footer-simple",
] as const satisfies readonly string[];

export function getHomeFeaturedBlocks(): BlockEntry[] {
  const bySlug = new Map(BLOCK_SECTIONS.flatMap((s) => s.blocks).map((b) => [b.slug, b]));
  return HOME_FEATURED_BLOCK_SLUGS.map((slug) => bySlug.get(slug)).filter((b): b is BlockEntry => !!b);
}
