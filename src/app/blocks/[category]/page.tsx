import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CategorySection } from "@/components/marketing/category-section";
import {
  FREE_STARTER_COUNT,
  FREE_STARTER_SECTION_SLUG,
  HUB_BLOCK_SECTIONS,
} from "@/content/blocks-catalog";
import { SITE_PRIMARY_PURCHASE_CLASSES, SITE_SECONDARY_OUTLINE_CLASSES } from "@/lib/site-cta";

type Params = { category: string };

export function generateStaticParams(): Params[] {
  return HUB_BLOCK_SECTIONS.map((s) => ({ category: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category } = await params;
  const section = HUB_BLOCK_SECTIONS.find((s) => s.slug === category);
  if (!section) return {};
  return {
    title: `${section.title} blocks`,
    description: `${section.description} ${section.blocks.length} variants in Hexagon UI.`,
  };
}

export default async function BlocksCategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category } = await params;
  const section = HUB_BLOCK_SECTIONS.find((s) => s.slug === category);
  if (!section) notFound();

  const idx = HUB_BLOCK_SECTIONS.findIndex((s) => s.slug === section.slug);
  const previous = idx > 0 ? HUB_BLOCK_SECTIONS[idx - 1] : null;
  const next = idx < HUB_BLOCK_SECTIONS.length - 1 ? HUB_BLOCK_SECTIONS[idx + 1] : null;

  return (
    <>
      {section.slug !== FREE_STARTER_SECTION_SLUG ? (
        <div className="mb-5 rounded-xl border border-primary/25 bg-primary/[0.07] px-4 py-3 sm:px-5">
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">{FREE_STARTER_COUNT} blocks</span> ship in the free starter ZIP — same
            tokens as the paid kit.{" "}
            <Link
              href={`/blocks/${FREE_STARTER_SECTION_SLUG}`}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Jump to the free starter previews
            </Link>
            .
          </p>
        </div>
      ) : null}

      <header className="mb-6 flex flex-col gap-5 border-b border-border/60 pb-6 sm:mb-8 sm:pb-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{section.title}</h1>
            <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">{section.description}</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2">
            <Link href="/pricing" className={SITE_PRIMARY_PURCHASE_CLASSES}>
              Get full access
            </Link>
            <Link href="/kit" className={SITE_SECONDARY_OUTLINE_CLASSES}>
              Kit manifest
              <ArrowRight className="size-4 opacity-70" aria-hidden />
            </Link>
          </div>
        </div>
      </header>

      <div className="preview-canvas relative bg-gradient-to-b from-muted/20 via-transparent to-transparent pb-10 pt-2 dark:from-muted/15">
        <CategorySection section={section} />
      </div>

      {previous || next ? (
        <nav
          className="mt-4 flex items-center justify-between gap-4 border-t border-border/60 pt-5"
          aria-label="Category pagination"
        >
          {previous ? (
            <Link
              href={`/blocks/${previous.slug}`}
              className="group inline-flex min-h-11 max-w-[min(100%,14rem)] items-center gap-2 rounded-lg py-2 pr-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft
                className="size-4 shrink-0 transition-transform group-hover:-translate-x-0.5"
                strokeWidth={2}
                aria-hidden
              />
              <span className="truncate">{previous.title}</span>
            </Link>
          ) : (
            <span aria-hidden />
          )}
          {next ? (
            <Link
              href={`/blocks/${next.slug}`}
              className="group ml-auto inline-flex min-h-11 max-w-[min(100%,14rem)] items-center gap-2 rounded-lg py-2 pl-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="truncate">{next.title}</span>
              <ArrowRight
                className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5"
                strokeWidth={2}
                aria-hidden
              />
            </Link>
          ) : null}
        </nav>
      ) : null}
    </>
  );
}
