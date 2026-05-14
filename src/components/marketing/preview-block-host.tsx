import { BlockPreview } from "@/components/marketing/block-preview";

/**
 * Thin server wrapper around `<BlockPreview>` for the iframe preview route.
 * Kept separate so the route file can stay a server component while
 * `BlockPreview` (and its tree of "use client" blocks) renders normally.
 */
export function PreviewBlockHost({ slug }: { slug: string }) {
  return <BlockPreview slug={slug} />;
}
