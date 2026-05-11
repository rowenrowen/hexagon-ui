import { GalleryBlockFrame } from "@/components/marketing/gallery-block-frame";
import type { BlockSectionMeta } from "@/content/blocks-catalog";
import { FREE_BLOCK_SLUG_SET } from "@/content/blocks-catalog";

type CategorySectionProps = {
  section: BlockSectionMeta;
};

/**
 * Renders every block variant in a category as stacked iframe-based gallery frames.
 * Each frame loads `/preview/blocks/<slug>` so the block has its own viewport —
 * dropdowns, mobile breakpoints, and scroll containers all work as designed.
 */
export function CategorySection({ section }: CategorySectionProps) {
  return (
    <>
      {section.blocks.map((b) => (
        <GalleryBlockFrame
          key={b.slug}
          slug={b.slug}
          path={b.file}
          name={`${b.frameTitle} · ${b.frameDescription}`}
          id={b.slug}
          includedInFreeStarter={FREE_BLOCK_SLUG_SET.has(b.slug)}
          previewHeight={b.previewHeight}
        />
      ))}
    </>
  );
}
