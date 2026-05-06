import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { FooterSimple } from "@/components/blocks";
import { SiteHeader } from "@/components/site-header";
import { hexagonFooterLinks } from "@/content/hexagon-landing";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Hexagon UI handles information when you use hexagonui.com.",
};

export default function PrivacyPage() {
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

          <h1 className="mt-8 text-3xl font-semibold tracking-tight text-foreground">Privacy</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: April 2026</p>

          <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
            <section className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Overview</h2>
              <p>
                Hexagon UI operates the marketing site at{" "}
                <strong className="text-foreground">hexagonui.com</strong>. This page describes what we collect and why,
                at a high level. Replace the contact email below with the address you publish on Gumroad when you have a
                dedicated support inbox.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Purchases</h2>
              <p>
                Checkout and payment are processed by <strong className="text-foreground">Gumroad</strong>. Gumroad’s
                privacy policy and terms apply to payment data. We do not receive full card numbers on this site.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Analytics</h2>
              <p>
                If you add analytics (e.g. Plausible, Fathom, or Vercel Analytics), document the provider here and obtain
                consent where required. Until then, this template assumes{" "}
                <strong className="text-foreground">no third-party analytics</strong> beyond what your host provides in
                server logs.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Contact</h2>
              <p>
                For privacy-related requests, use the support channel listed on your{" "}
                <a
                  href="https://hexagonui.gumroad.com/l/hexagon-ui-kit"
                  className="font-medium text-primary hover:underline"
                >
                  Gumroad product page
                </a>
                .
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base font-semibold text-foreground">Changes</h2>
              <p>
                We may update this page as the product or hosting setup changes. Material changes belong in your changelog
                or Gumroad posts.
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
