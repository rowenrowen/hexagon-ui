import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MarketingContainer } from "@/components/layout/marketing-container";
import { BlockPreview } from "@/components/marketing/block-preview";
import { BLOCK_SECTIONS, BLOCK_COUNT } from "@/content/blocks-catalog";

type HomeCategoryCard = {
  /** Slug of the section in BLOCK_SECTIONS — also the route under /blocks/<slug>. */
  sectionSlug: string;
  /** Slug of the block in BlockPreview to render as the snapshot. */
  previewSlug: string;
  /** Display label (overrides section title for tighter copy). */
  label: string;
  /** Short blurb shown under the label. */
  blurb: string;
};

/** Six representative categories — chosen to mirror tailark's curated entry tiles. */
const HOME_CATEGORY_CARDS: HomeCategoryCard[] = [
  {
    sectionSlug: "announcement-hero",
    previewSlug: "hero-marketing",
    label: "Hero",
    blurb: "Punchy openers — split layouts, compact launches, and announcement strips.",
  },
  {
    sectionSlug: "features",
    previewSlug: "feature-grid",
    label: "Features",
    blurb: "Capability grids, alternating rows, bento, and integration shells.",
  },
  {
    sectionSlug: "pricing",
    previewSlug: "pricing-three-tier",
    label: "Pricing",
    blurb: "Single-SKU cards, dual tiers, comparison matrices, and add-on rows.",
  },
  {
    sectionSlug: "social-proof",
    previewSlug: "testimonial-grid",
    label: "Social proof",
    blurb: "Quote cards, spotlight stories, KPI quotes, and team grids.",
  },
  {
    sectionSlug: "faq-footer",
    previewSlug: "faq-accordion",
    label: "FAQ",
    blurb: "Accordion objections, helpful-vote patterns, and marketing footers.",
  },
  {
    sectionSlug: "conversion",
    previewSlug: "cta-split-panel",
    label: "Conversion",
    blurb: "CTAs, capture forms, blog teasers, changelogs, and roadmap strips.",
  },
];

function getSectionMeta(slug: string) {
  return BLOCK_SECTIONS.find((s) => s.slug === slug);
}

export function HomeBlockPreviews() {
  return (
    <section className="relative border-t border-border/60 py-20 sm:py-28 lg:py-32">
      <MarketingContainer>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Blocks</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Designer-curated sections, ready to paste
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-[17px]">
            {BLOCK_COUNT} pixel-tuned React + Tailwind blocks across the categories shipping teams actually use. Pick a category to
            see every variant — preview themes and corner radius are tunable on each page.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {HOME_CATEGORY_CARDS.map((card) => {
            const section = getSectionMeta(card.sectionSlug);
            const count = section?.blocks.length ?? 0;
            return (
              <li key={card.sectionSlug}>
                <Link
                  href={`/blocks/${card.sectionSlug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[0_1px_0_oklch(0_0_0/0.03)] transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-border hover:shadow-[0_18px_40px_-22px_oklch(0_0_0/0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring dark:shadow-[0_1px_0_oklch(1_0_0/0.04)] dark:hover:shadow-[0_22px_50px_-22px_oklch(0_0_0/0.7)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden border-b border-border/70 bg-muted/40">
                    <div
                      aria-hidden
                      className="preview-theme-scope pointer-events-none absolute inset-0 origin-top-left scale-[0.5] [width:200%] [height:200%]"
                    >
                      <BlockPreview slug={card.previewSlug} />
                    </div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card via-card/80 to-transparent" />
                    <div className="pointer-events-none absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-border/60 bg-background/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground backdrop-blur-sm">
                      {count} blocks
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-2 p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">{card.label}</h3>
                      <span
                        aria-hidden
                        className="inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background/80 text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary"
                      >
                        <ArrowUpRight className="size-3.5" strokeWidth={2.25} />
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{card.blurb}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 flex justify-center">
          <Link
            href="/blocks"
            className="group inline-flex items-center gap-2 rounded-full border border-border/80 bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/35 hover:bg-muted/60"
          >
            See all categories
            <ArrowUpRight
              className="size-4 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2}
              aria-hidden
            />
          </Link>
        </div>
      </MarketingContainer>
    </section>
  );
}
