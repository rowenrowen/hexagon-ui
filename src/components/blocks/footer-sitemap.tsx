import { MarketingLink } from "./marketing-link";

export type FooterSitemapProps = {
  brandName?: string;
  columns?: { title: string; links: { label: string; href: string }[] }[];
  className?: string;
};

const defaultColumns = [
  {
    title: "Build",
    links: [
      { label: "Getting started", href: "#" },
      { label: "SDKs", href: "#" },
      { label: "API reference", href: "#" },
      { label: "Webhooks", href: "#" },
      { label: "Migrations", href: "#" },
    ],
  },
  {
    title: "Operate",
    links: [
      { label: "Status", href: "#" },
      { label: "Trust center", href: "#" },
      { label: "Billing", href: "#" },
      { label: "Data processing", href: "#" },
      { label: "Subprocessors", href: "#" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Blog", href: "#" },
      { label: "Guides", href: "#" },
      { label: "Events", href: "#" },
      { label: "Customers", href: "#" },
      { label: "System status RSS", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press kit", href: "#" },
      { label: "Brand", href: "#" },
      { label: "Contact sales", href: "#" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "GitHub", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "X / Twitter", href: "#" },
      { label: "YouTube", href: "#" },
      { label: "Slack community", href: "#" },
    ],
  },
];

export function FooterSitemap({
  brandName = "Beacon",
  columns = defaultColumns,
  className,
}: Partial<FooterSitemapProps> = {}) {
  const year = new Date().getFullYear();

  return (
    <footer className={`border-t border-border bg-card py-12 ${className ?? ""}`}>
      <div className="site-grid">
        <div className="flex flex-col gap-8 border-b border-border/80 pb-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-base font-semibold text-foreground">{brandName}</p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Dense footer pattern for mature marketing sites — swap columns for your real IA.
            </p>
          </div>
          <MarketingLink
            href="#"
            className="shrink-0 rounded-full border border-border bg-muted/40 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted/70"
          >
            Subscribe to updates
          </MarketingLink>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">{col.title}</p>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <MarketingLink
                      href={l.href}
                      className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </MarketingLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground sm:text-left">
          © {year} {brandName}. Built for teams who need a serious footer without rebuilding layout math.
        </p>
      </div>
    </footer>
  );
}
