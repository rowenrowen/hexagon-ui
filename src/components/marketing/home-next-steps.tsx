import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Blocks, CreditCard, Gift, HelpCircle, Package } from "lucide-react";
import { MarketingContainer } from "@/components/layout/marketing-container";
import { FreeStarterDownloadLink } from "@/components/marketing/free-starter-download-link";

type NextStepCard =
  | {
      key: string;
      href: string;
      title: string;
      body: string;
      icon: LucideIcon;
      download?: false;
    }
  | {
      key: string;
      title: string;
      body: string;
      icon: LucideIcon;
      download: true;
    };

const cards: NextStepCard[] = [
  {
    key: "blocks",
    href: "/blocks",
    title: "Blocks",
    body: "Live gallery with interaction motion and real block source paths.",
    icon: Blocks,
  },
  {
    key: "kit",
    href: "/kit",
    title: "Kit & ZIP",
    body: "Exact file manifest and how engineers review before purchase.",
    icon: Package,
  },
  {
    key: "free-starter",
    title: "Free starter",
    body: "Download 10 free blocks to test quality, theming, and integration workflow.",
    icon: Gift,
    download: true,
  },
  {
    key: "pricing",
    href: "/pricing",
    title: "Pricing",
    body: "One SKU, Gumroad checkout, and VAT at payment, with a dedicated license page.",
    icon: CreditCard,
  },
  {
    key: "faq",
    href: "/#faq",
    title: "FAQ",
    body: "Stack, theming, updates, and what is in v1 are answered on the homepage (no duplicate route).",
    icon: HelpCircle,
  },
];

const CARD_SURFACE_CLASS =
  "group flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/35 hover:shadow-md";

export function HomeNextSteps() {
  return (
    <section className="border-y border-border bg-muted/20 py-20">
      <MarketingContainer>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Explore the product</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">Start free, evaluate quickly, then upgrade only if the curated model fits your team.</p>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            const inner = (
              <>
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/12 text-primary">
                  <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="mt-4 flex items-center gap-2 text-lg font-semibold text-card-foreground group-hover:text-primary">
                  {card.title}
                  <ArrowRight className="size-4 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden />
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
              </>
            );
            return (
              <li key={card.key}>
                {card.download ? (
                  <FreeStarterDownloadLink className={CARD_SURFACE_CLASS}>{inner}</FreeStarterDownloadLink>
                ) : (
                  <Link href={card.href} className={CARD_SURFACE_CLASS}>
                    {inner}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </MarketingContainer>
    </section>
  );
}
