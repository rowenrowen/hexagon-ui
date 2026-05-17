import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PreviewAutoHeight } from "@/components/marketing/preview-auto-height";
import { PreviewThemeBridge } from "@/components/marketing/preview-theme-bridge";
import { PreviewBlockHost } from "@/components/marketing/preview-block-host";
import { BLOCK_SECTIONS } from "@/content/blocks-catalog";
import { PREVIEW_THEME_DEFAULT_ID } from "@/content/preview-themes";

/**
 * Isolated render surface for one block. Loaded by the gallery as an iframe
 * (`/preview/blocks/<slug>?theme=…&radius=…`).
 *
 * - Initial theme/radius come from URL params (avoids FOUC on first paint).
 * - After mount, `PreviewThemeBridge` listens for postMessage updates from
 *   the parent gallery so theme/radius changes apply **live**, without
 *   reloading the iframe.
 * - The wrapper does NOT use `min-h-dvh` — height matches the block, so the
 *   gallery frame can size itself tightly via the reported content height.
 * - A scoped style suppresses the trailing `border-b` that blocks ship with
 *   for page stacking; in a per-block showcase that border becomes a stray
 *   horizontal line at the bottom.
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
  const initialTheme = theme ?? PREVIEW_THEME_DEFAULT_ID;
  const initialRadius = radius ?? "md";
  const themeAttr =
    initialTheme !== PREVIEW_THEME_DEFAULT_ID ? { "data-preview-theme": initialTheme } : {};

  return (
    <>
      <style>{`
nextjs-portal{display:none!important}
html,body{margin:0;overflow-x:hidden;overflow-y:auto;height:100%;background:var(--background)}
/* Suppress the trailing block divider that ships on every block's outer
   section — useful when stacking on a real page, distracting in isolation. */
#hexagon-preview-content > *{border-bottom-color:transparent!important;border-bottom-width:0!important}
      `}</style>
      <div
        id="hexagon-preview-root"
        className="preview-theme-scope w-full bg-background text-foreground"
        {...themeAttr}
        data-preview-radius={initialRadius}
      >
        <div id="hexagon-preview-content">
          <PreviewBlockHost slug={slug} />
        </div>
      </div>
      <PreviewThemeBridge />
      <PreviewAutoHeight slug={slug} />
    </>
  );
}
