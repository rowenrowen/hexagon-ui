import { MarketingLink } from "./marketing-link";

export type FooterColumnsLink = { label: string; href: string };

export type FooterColumnsGroup = { title: string; links: FooterColumnsLink[] };

export type FooterColumnsProps = {
  brandName?: string;
  tagline?: string;
  groups?: FooterColumnsGroup[];
  legal?: FooterColumnsLink[];
  className?: string;
};

const defaultGroups: FooterColumnsGroup[] = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Security", href: "#" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "RevOps", href: "#" },
      { label: "Engineering", href: "#" },
      { label: "Customer success", href: "#" },
      { label: "Partners", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API status", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

export function FooterColumns({
  brandName = "Northwind",
  tagline = "Operational analytics for teams who outgrew spreadsheets.",
  groups = defaultGroups,
  legal = [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Cookies", href: "#" },
  ],
  className,
}: Partial<FooterColumnsProps> = {}) {
  const year = new Date().getFullYear();

  return (
    <footer className={`border-t border-border bg-muted/20 py-14 ${className ?? ""}`}>
      <div className="site-grid">
        <div className="grid gap-10 border-b border-border/80 pb-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold text-foreground">{brandName}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{tagline}</p>
          </div>
          {groups.map((g) => (
            <div key={g.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{g.title}</p>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <MarketingLink
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </MarketingLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {brandName}. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map((l) => (
              <MarketingLink key={l.label} href={l.href} className="transition-colors hover:text-foreground">
                {l.label}
              </MarketingLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
