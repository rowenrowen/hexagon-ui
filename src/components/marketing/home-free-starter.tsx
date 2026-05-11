import Link from "next/link";
import { ArrowRight, Gift } from "lucide-react";
import { MarketingContainer } from "@/components/layout/marketing-container";
import { FreeStarterDownloadLink } from "@/components/marketing/free-starter-download-link";
import { SITE_PRIMARY_PURCHASE_CLASSES, SITE_SECONDARY_OUTLINE_CLASSES } from "@/lib/site-cta";

export function HomeFreeStarter() {
  return (
    <section className="border-y border-border bg-background py-16 sm:py-20">
      <MarketingContainer>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                <Gift className="size-4" aria-hidden />
                Free starter
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-card-foreground sm:text-3xl">
                Try 10 production blocks before you buy
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                Download the starter ZIP from this site (no checkout wall). Same token model as the paid kit. When you are ready,
                buy the full curated library once on Gumroad.
              </p>
            </div>

            <div className="flex w-full flex-col gap-2 sm:w-auto sm:min-w-[16rem]">
              <FreeStarterDownloadLink
                className={`${SITE_PRIMARY_PURCHASE_CLASSES} w-full items-center justify-center gap-2 sm:w-auto`}
              >
                Download free starter
                <ArrowRight className="size-4" aria-hidden />
              </FreeStarterDownloadLink>
              <Link
                href="/pricing"
                className={`${SITE_SECONDARY_OUTLINE_CLASSES} w-full justify-center sm:w-auto`}
              >
                See full kit
              </Link>
            </div>
          </div>
        </div>
      </MarketingContainer>
    </section>
  );
}
