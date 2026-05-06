import Link from "next/link";
import { ArrowRight, Blocks, CreditCard, HelpCircle, Package } from "lucide-react";
import { MarketingContainer } from "@/components/layout/marketing-container";

const cards = [
  {
    href: "/blocks",
    title: "Blocks",
    body: "Live gallery with interaction motion and real block source paths.",
    icon: Blocks,
  },
  {
    href: "/kit",
    title: "Kit & ZIP",
    body: "Exact file manifest and how engineers review before purchase.",
    icon: Package,
  },
  {
    href: "/pricing",
    title: "Pricing",
    body: "One SKU, Gumroad checkout, VAT at payment — dedicated page with the license card.",
    icon: CreditCard,
  },
  {
    href: "/#faq",
    title: "FAQ",
    body: "Stack, theming, updates, and what’s in v1 — answered on the homepage (no duplicate route).",
    icon: HelpCircle,
  },
] as const;

export function HomeNextSteps() {
  return (
    <section className="border-y border-border bg-muted/20 py-20">
      <MarketingContainer>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Explore the product</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Start on the landing story, open the blocks hub, then pricing and FAQ as full pages when you are ready.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {cards.map(({ href, title, body, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/35 hover:shadow-md"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/12 text-primary">
                  <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="mt-4 flex items-center gap-2 text-lg font-semibold text-card-foreground group-hover:text-primary">
                  {title}
                  <ArrowRight className="size-4 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" aria-hidden />
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </Link>
            </li>
          ))}
        </ul>
      </MarketingContainer>
    </section>
  );
}
