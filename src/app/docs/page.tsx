import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FooterSimple } from "@/components/blocks";
import { MarketingContainer } from "@/components/layout/marketing-container";
import { MarketingPageHero } from "@/components/marketing/marketing-page-hero";
import { SiteHeader } from "@/components/site-header";
import { hexagonFooterLinks } from "@/content/hexagon-landing";
import { SITE_PRIMARY_PURCHASE_CLASSES, SITE_SECONDARY_OUTLINE_CLASSES } from "@/lib/site-cta";
import { GUMROAD_CHECKOUT_URL } from "@/lib/checkout-url";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "How to receive, install, theme, and hand off the Hexagon UI kit — same content as HANDOFF.md inside your ZIP, in a scannable browser layout.",
};

const steps = [
  {
    k: "01",
    title: "Download the archive",
    body: (
      <>
        Open your Gumroad receipt or library and download{" "}
        <code className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">hexagon-ui-kit.zip</code>.
        The receipt lists support channels and proves entitlement for procurement.
      </>
    ),
    action: (
      <Link
        href={GUMROAD_CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
      >
        Open product on Gumroad
        <ExternalLink className="size-4" aria-hidden />
      </Link>
    ),
  },
  {
    k: "02",
    title: "Route it to engineering",
    body: (
      <>
        Unzip and forward the folder — or upload to your org repo — to whoever owns frontend integration. Pair it with{" "}
        <code className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground">HANDOFF.md</code> so scope is unambiguous.
      </>
    ),
    aside: (
      <div className="mt-6 rounded-xl border border-border/80 bg-muted/25 p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email you can paste</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          We purchased Hexagon UI (React + Tailwind marketing blocks). ZIP includes README + HANDOFF and a{" "}
          <code className="font-mono text-xs">blocks/</code> directory. Please integrate and map CSS variables to our theme.
          Receipt attached for license questions.
        </p>
      </div>
    ),
  },
  {
    k: "03",
    title: "Integration checklist",
    body: (
      <ol className="mt-2 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-muted-foreground">
        <li>
          Read <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">README.md</code> for versions and import conventions.
        </li>
        <li>
          Merge <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">tokens/hexagon-ui-variables.css</code> into globals or bind to your token pipeline.
        </li>
        <li>
          Copy <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">blocks/*.tsx</code>; align paths with{" "}
          <code className="font-mono text-xs">next/link</code> vs anchors if you are not on Next.js.
        </li>
        <li>Swap placeholder copy, analytics, and checkout URLs for production endpoints.</li>
      </ol>
    ),
  },
  {
    k: "04",
    title: "Preview for stakeholders",
    body: (
      <>
        Send non-technical reviewers to the public{" "}
        <Link href="/blocks" className="font-semibold text-foreground underline-offset-4 hover:underline">
          blocks hub
        </Link>{" "}
        for motion-accurate previews, or the{" "}
        <Link href="/kit" className="font-semibold text-foreground underline-offset-4 hover:underline">
          kit manifest
        </Link>{" "}
        if they need filenames. Each preview toolbar lists the matching <span className="font-mono text-xs">blocks/*.tsx</span> path.
      </>
    ),
  },
] as const;

export default function DocsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <MarketingPageHero
          eyebrow="Docs"
          title="Hand off Hexagon UI to your team"
          description={
            <>
              The same narrative as{" "}
              <code className="rounded-md bg-muted/80 px-1.5 py-0.5 font-mono text-[15px] text-foreground">HANDOFF.md</code>{" "}
              in your ZIP — optimized for scanning in the browser before you forward links to procurement or engineering.
            </>
          }
          actions={
            <>
              <Link href="/kit" className={SITE_SECONDARY_OUTLINE_CLASSES}>
                Kit manifest
                <ArrowRight className="size-4 opacity-70" aria-hidden />
              </Link>
              <Link
                href={GUMROAD_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={SITE_PRIMARY_PURCHASE_CLASSES}
              >
                Open Gumroad
              </Link>
            </>
          }
        />

        <MarketingContainer className="py-16 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {steps.map((step) => (
              <article
                key={step.k}
                className="relative overflow-hidden rounded-2xl border border-border/80 bg-card p-7 shadow-sm sm:p-9"
              >
                <span
                  className="pointer-events-none absolute -right-2 -top-4 select-none font-mono text-[5rem] font-semibold leading-none text-muted/15 sm:text-[5.5rem]"
                  aria-hidden
                >
                  {step.k}
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{step.k}</p>
                <h2 className="relative mt-2 text-xl font-semibold tracking-tight text-foreground">{step.title}</h2>
                <div className="relative mt-4 text-sm leading-relaxed text-muted-foreground">{step.body}</div>
                {"action" in step && step.action ? step.action : null}
                {"aside" in step && step.aside ? step.aside : null}
              </article>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-border/80 bg-muted/15 px-6 py-6 text-center sm:px-10">
            <p className="text-sm leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Support:</strong> use the channel printed on your Gumroad receipt or product page.
              License language lives on Gumroad at checkout; forward it to legal instead of retyping terms.
            </p>
          </div>
        </MarketingContainer>
      </main>
      <FooterSimple
        brandName="Hexagon UI"
        tagline="Built for teams shipping marketing pages fast."
        links={hexagonFooterLinks}
      />
    </>
  );
}
