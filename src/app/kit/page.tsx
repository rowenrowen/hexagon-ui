import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { MarketingPageHero } from "@/components/marketing/marketing-page-hero";
import { KitContents } from "@/components/marketing/kit-contents";
import { FooterSimple } from "@/components/blocks";
import { hexagonFooterLinks } from "@/content/hexagon-landing";

export const metadata: Metadata = {
  title: "Kit & ZIP",
  description: "What ships in the Hexagon UI Gumroad download — file list, packaging, and how to audit the archive.",
};

export default function KitPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <MarketingPageHero
          eyebrow="Kit"
          title="What’s in the ZIP"
          description={
            <>
              Buyers get the same{" "}
              <code className="rounded-md bg-muted/80 px-1.5 py-0.5 font-mono text-[15px] text-foreground">blocks/</code>{" "}
              source mirrored on the live hub. Use this manifest for procurement or engineering review — filenames match each preview toolbar path.
            </>
          }
          actions={
            <>
              <Link
                href="/blocks"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted/70"
              >
                Open blocks hub
                <ArrowRight className="size-4 opacity-70" aria-hidden />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Get the kit
              </Link>
            </>
          }
        />
        <KitContents />
      </main>
      <FooterSimple
        brandName="Hexagon UI"
        tagline="Built for teams shipping marketing pages fast."
        links={hexagonFooterLinks}
      />
    </>
  );
}
