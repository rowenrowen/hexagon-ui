import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlockPreview } from "@/components/marketing/block-preview";
import { PreviewAutoHeight } from "@/components/marketing/preview-auto-height";
import { BLOCK_SECTIONS } from "@/content/blocks-catalog";
import { PREVIEW_THEME_DEFAULT_ID } from "@/content/preview-themes";

/**
 * Isolated, iframe-friendly render surface for one block.
 *
 * Matches the showcase pattern used by tailark / shadcnblocks:
 *  - No site chrome, no margins, no Hexagon nav.
 *  - Block renders inside a `.preview-theme-scope` so theme + radius tokens apply.
 *  - Theme + radius come in as URL params from the gallery (`?theme=...&radius=...`),
 *    so the gallery just rebuilds the iframe src to swap palettes — no postMessage plumbing.
 */

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ theme?: string; radius?: string }>;
};

const ALL_BLOCK_SLUGS = BLOCK_SECTIONS.flatMap((s) => s.blocks.map((b) => b.slug));

export function generateStaticParams() {
  return ALL_BLOCK_SLUGS.map((slug) => ({ slug }));
}

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function PreviewBlockPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  if (!ALL_BLOCK_SLUGS.includes(slug)) notFound();

  const { theme, radius } = await searchParams;
  const themeAttr =
    theme && theme !== PREVIEW_THEME_DEFAULT_ID
      ? { "data-preview-theme": theme }
      : {};
  const radiusAttr = { "data-preview-radius": radius ?? "md" };

  return (
    <>
      {/*
        Next.js renders its dev tools indicator and error overlay inside a
        `<nextjs-portal>` custom element at body level. Each iframe is its own
        document, so the indicator shows up in every block preview during dev.
        Hide it inside iframe documents only — the main app keeps the indicator.

        Also remove any default body margin and forbid scrollbars so the
        iframe never shows its own scroll chrome (the gallery sizes the frame
        to content height instead).
      */}
      <style>{`nextjs-portal{display:none!important}html,body{margin:0;overflow:hidden;background:var(--background)}`}</style>
      <div
        className="preview-theme-scope min-h-dvh w-full bg-background text-foreground"
        {...themeAttr}
        {...radiusAttr}
      >
        <div id="hexagon-preview-content">
          <BlockPreview slug={slug} />
        </div>
      </div>
      <PreviewAutoHeight slug={slug} />
    </>
  );
}
