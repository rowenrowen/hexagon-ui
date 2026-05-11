import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { BlocksSidebar } from "@/components/marketing/blocks-sidebar";
import { BlocksMobileNav } from "@/components/marketing/blocks-mobile-nav";
import { PreviewAppearancePanel } from "@/components/marketing/preview-controls";
import { BlocksSiteFooter } from "@/components/marketing/blocks-site-footer";
import { PreviewThemeProvider } from "@/components/marketing/preview-theme-context";
import { hexagonFooterLinks } from "@/content/hexagon-landing";

/**
 * `/blocks/*`: header → mobile category strip + appearance (small screens) →
 * desktop left (sections) + main + desktop right (theme & radius) → footer.
 */
export default function BlocksLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <PreviewThemeProvider>
        <BlocksMobileNav />

        <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col lg:flex-row lg:px-6 xl:px-8">
          <aside className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] w-56 shrink-0 self-start overflow-y-auto border-r border-border/50 py-8 pr-5 lg:block xl:w-64">
            <BlocksSidebar />
          </aside>

          <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-10">{children}</main>

          <aside className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] w-52 shrink-0 self-start overflow-y-auto border-l border-border/50 py-8 pl-5 lg:block xl:w-56">
            <PreviewAppearancePanel layout="sidebar" />
          </aside>
        </div>
      </PreviewThemeProvider>
      <BlocksSiteFooter links={hexagonFooterLinks} />
    </>
  );
}
