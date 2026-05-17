import { BLOCK_SECTIONS } from "@/content/blocks-catalog";

export type BlockSearchEntry = {
  slug: string;
  frameTitle: string;
  frameDescription: string;
  sectionSlug: string;
  sectionTitle: string;
  href: string;
  /** cmdk `value` — primary filter string */
  value: string;
  keywords: string[];
};

/** All catalog blocks for site search / command palette. */
export function getBlockSearchEntries(): BlockSearchEntry[] {
  return BLOCK_SECTIONS.flatMap((section) =>
    section.blocks.map((block) => {
      const slugWords = block.slug.replace(/-/g, " ");
      const fileStem = block.file.replace(/\.tsx$/, "");
      return {
        slug: block.slug,
        frameTitle: block.frameTitle,
        frameDescription: block.frameDescription,
        sectionSlug: section.slug,
        sectionTitle: section.title,
        href: `/blocks/${section.slug}#${block.slug}`,
        value: `${block.frameTitle} ${block.slug} ${slugWords} ${fileStem} ${section.title}`,
        keywords: [
          block.slug,
          slugWords,
          fileStem,
          block.frameTitle,
          block.frameDescription,
          section.title,
          section.slug,
          section.slug.replace(/-/g, " "),
        ],
      };
    }),
  );
}
