import Link from "next/link";
import type { FooterLink } from "@/components/blocks";

type BlocksSiteFooterProps = {
  links: FooterLink[];
};

/** Site chrome for `/blocks` routes — not the kit `FooterSimple` block (avoids duplicating that preview on FAQ/footer category). */
export function BlocksSiteFooter({ links }: BlocksSiteFooterProps) {
  return (
    <footer className="border-t border-border bg-card/40 py-10">
      <div className="site-grid flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Hexagon UI</span> · Marketing site footer (not a kit preview)
        </p>
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
