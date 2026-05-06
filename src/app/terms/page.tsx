import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { FooterSimple } from "@/components/blocks";
import { SiteHeader } from "@/components/site-header";
import { hexagonFooterLinks } from "@/content/hexagon-landing";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for using hexagonui.com and purchasing Hexagon UI.",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back to home
          </Link>

          <h1 className="mt-8 text-3xl font-semibold tracking-tight text-foreground">Terms</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: April 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
            <section className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Website use</h2>
              <p>
                By using <strong className="text-foreground">hexagonui.com</strong>, you agree not to misuse the site
                (no scraping that degrades service, no unlawful use). Content is provided “as is” for informational and
                commercial evaluation.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Digital products</h2>
              <p>
                Purchases of Hexagon UI are fulfilled through <strong className="text-foreground">Gumroad</strong>. License
                scope, refunds, and delivery are governed by the terms and refund policy on the Gumroad listing at the
                time of purchase. If this page conflicts with Gumroad, the{" "}
                <strong className="text-foreground">Gumroad listing controls</strong>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">No warranties</h2>
              <p>
                Software is provided without warranty to the extent permitted by law. You are responsible for
                integration, security review, and compliance in your environment.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Contact</h2>
              <p>
                Support and licensing questions: use the contact method on your{" "}
                <a
                  href="https://hexagonui.gumroad.com/l/hexagon-ui-kit"
                  className="font-medium text-primary hover:underline"
                >
                  Gumroad product page
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <FooterSimple
        brandName="Hexagon UI"
        tagline="Built for teams shipping marketing pages fast."
        links={hexagonFooterLinks}
      />
    </>
  );
}
