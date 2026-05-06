import { BlockReveal } from "./block-reveal";
import { MarketingLink } from "./marketing-link";

export type FooterLink = { href: string; label: string };

export type FooterSimpleProps = {
  brandName?: string;
  tagline?: string;
  links?: FooterLink[];
  className?: string;
};

export const footerSimpleDefaults: Required<Pick<FooterSimpleProps, "brandName" | "tagline" | "links">> = {
  brandName: "Your company",
  tagline: "Built for teams shipping credible marketing pages.",
  links: [
    { href: "/#faq", label: "FAQ" },
    { href: "/privacy", label: "Privacy" },
  ],
};

export function FooterSimple(props: Partial<FooterSimpleProps> = {}) {
  const p = { ...footerSimpleDefaults, ...props };
  const year = new Date().getFullYear();

  return (
    <footer className={`border-t border-border bg-muted/30 py-12 ${p.className ?? ""}`}>
      <BlockReveal className="site-grid flex flex-col gap-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {p.brandName}. {p.tagline}
        </p>
        <div className="flex flex-wrap gap-6">
          {p.links.map((link) => (
            <MarketingLink key={`${link.label}::${link.href}`} href={link.href} className="hover:text-foreground">
              {link.label}
            </MarketingLink>
          ))}
        </div>
      </BlockReveal>
    </footer>
  );
}
