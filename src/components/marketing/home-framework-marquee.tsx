import { MarketingContainer } from "@/components/layout/marketing-container";

const FRAMEWORKS = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Framer Motion",
  "shadcn/ui",
  "Vite",
  "Lucide",
  "Radix",
  "App Router",
];

/**
 * Homepage-only marquee under the hero. Lighter chrome than the kit's `LogoMarquee` block
 * so it reads as a connecting strip rather than a standalone section.
 */
export function HomeFrameworkMarquee() {
  const doubled = [...FRAMEWORKS, ...FRAMEWORKS];

  return (
    <section
      aria-label="Frameworks Hexagon UI is built for"
      className="relative border-y border-border/60 bg-muted/[0.18] py-10 sm:py-12"
    >
      <MarketingContainer>
        <p className="mb-7 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Built for the stack you already use
        </p>
      </MarketingContainer>
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-28"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-28"
        />
        <div className="preview-marquee-track gap-12 px-4 sm:gap-16 sm:px-8">
          {doubled.map((label, i) => (
            <span
              key={`${label}-${i}`}
              className="flex shrink-0 items-center text-sm font-semibold tracking-tight text-foreground/65 sm:text-base"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
