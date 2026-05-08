import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { MarketingContainer } from "@/components/layout/marketing-container";
import { BLOCK_COUNT } from "@/content/blocks-catalog";
import { getHomeFeaturedBlocks } from "@/content/home-featured-blocks";

export function HomeFeaturedBlocks() {
  const featured = getHomeFeaturedBlocks();

  return (
    <section className="border-y border-border bg-background py-16 sm:py-20" aria-labelledby="home-featured-blocks-heading">
      <MarketingContainer>
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Blocks</p>
          <h2 id="home-featured-blocks-heading" className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Start from proven sections
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
            Fifteen curated picks from {BLOCK_COUNT} total: heroes, proof, pricing, conversion, and FAQ. Open the hub for live previews,
            palette swaps, and radius tuning.
          </p>
        </div>

        <ul className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((b) => (
            <li key={b.slug}>
              <Link
                href={`/blocks#${b.slug}`}
                className="group flex items-start gap-3 rounded-xl border border-border/90 bg-card px-4 py-3 shadow-[0_1px_0_oklch(0_0_0/0.03)] transition-[border-color,box-shadow] hover:border-primary/30 hover:shadow-md dark:shadow-none dark:hover:shadow-md"
              >
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Layers className="size-[18px]" strokeWidth={1.75} aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold leading-snug text-foreground group-hover:text-primary">{b.frameTitle}</span>
                  <span className="mt-0.5 block truncate font-mono text-[11px] text-muted-foreground">{b.file}</span>
                </span>
                <ArrowRight
                  className="mt-1 size-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center border-t border-dashed border-border/80 pt-10">
          <Link
            href="/blocks"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-92"
          >
            Explore all {BLOCK_COUNT} blocks
            <ArrowRight className="size-4 opacity-90" aria-hidden />
          </Link>
        </div>
      </MarketingContainer>
    </section>
  );
}
