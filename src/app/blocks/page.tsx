import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MarketingContainer } from "@/components/layout/marketing-container";
import { MarketingPageHero } from "@/components/marketing/marketing-page-hero";
import { SiteHeader } from "@/components/site-header";
import { GalleryBlockFrame } from "@/components/marketing/gallery-block-frame";
import { BlockPreview } from "@/components/marketing/block-preview";
import { BlocksExploreLayout } from "@/components/marketing/blocks-explore-layout";
import { BlocksSiteFooter } from "@/components/marketing/blocks-site-footer";
import { PreviewThemeProvider } from "@/components/marketing/preview-theme-context";
import { BLOCK_COUNT, BLOCK_SECTIONS } from "@/content/blocks-catalog";
import { hexagonFooterLinks } from "@/content/hexagon-landing";

export const metadata: Metadata = {
  title: "Blocks",
  description:
    "Production-ready React marketing sections: browse by category, switch preview palettes, and copy real source files from the ZIP.",
};

export default function BlocksPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <MarketingPageHero
          eyebrow="Blocks"
          title={`${BLOCK_COUNT} production sections for browsing, theming, and shipping`}
          description={
            <>
              Paste-ready React + Tailwind with motion where it earns attention. Use{" "}
              <strong className="text-foreground">Preview</strong> for motion-accurate canvases,{" "}
              <strong className="text-foreground">Code</strong> to see how ZIP delivery works, and{" "}
              <strong className="text-foreground">Color</strong> to audition palettes inside each preview only.
            </>
          }
          actions={
            <>
              <Link
                href="/kit"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted/70"
              >
                Manifest
                <ArrowRight className="size-4 opacity-70" aria-hidden />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Buy
              </Link>
            </>
          }
        />

        <PreviewThemeProvider>
          <BlocksExploreLayout sections={BLOCK_SECTIONS}>
            {BLOCK_SECTIONS.map((section) => (
              <section
                key={section.slug}
                id={section.slug}
                className="scroll-mt-28 border-t border-border/60 py-[var(--preview-section-y)] first:border-t-0"
              >
                <MarketingContainer className="mb-8">
                  <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">{section.title}</h2>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">{section.description}</p>
                </MarketingContainer>
                {section.blocks.map((b) => (
                  <GalleryBlockFrame key={b.slug} path={b.file} name={`${b.frameTitle} · ${b.frameDescription}`} id={b.slug}>
                    <BlockPreview slug={b.slug} />
                  </GalleryBlockFrame>
                ))}
              </section>
            ))}
          </BlocksExploreLayout>
        </PreviewThemeProvider>
      </main>
      <BlocksSiteFooter links={hexagonFooterLinks} />
    </>
  );
}
