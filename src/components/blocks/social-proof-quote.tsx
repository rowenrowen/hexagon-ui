import { ShieldCheck, Users } from "lucide-react";
import { MarketingContainer } from "@/components/layout/marketing-container";
import { BlockReveal } from "./block-reveal";

export type SocialProofQuoteProps = {
  /** Optional section chrome for marketing pages (e.g. homepage). */
  eyebrow?: string;
  title?: string;
  intro?: string;
  quote: string;
  trustLine?: string;
  avatarCount?: number;
  className?: string;
};

export const socialProofQuoteDefaults: Required<
  Pick<SocialProofQuoteProps, "quote" | "trustLine" | "avatarCount">
> = {
  quote:
    "“We replaced our placeholder landing in one afternoon. Engineers mapped tokens to our existing shadcn theme without drama.”",
  trustLine: "Optional logo row or compliance badge slots alongside this block.",
  avatarCount: 4,
};

export function SocialProofQuote(props: Partial<SocialProofQuoteProps> = {}) {
  const p = { ...socialProofQuoteDefaults, ...props };

  return (
    <section className={`border-y border-border bg-muted/15 py-16 ${p.className ?? ""}`}>
      <MarketingContainer>
        {p.title || p.intro || p.eyebrow ? (
          <div className="mb-8 max-w-2xl">
            {p.eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{p.eyebrow}</p>
            ) : null}
            {p.title ? (
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{p.title}</h2>
            ) : null}
            {p.intro ? <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">{p.intro}</p> : null}
          </div>
        ) : null}
        <BlockReveal className="mx-auto w-full max-w-2xl">
          <div className="rounded-2xl border border-border/90 bg-card p-6 shadow-lg shadow-black/20 ring-1 ring-white/[0.04] sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <div className="flex -space-x-2">
                {Array.from({ length: p.avatarCount }).map((_, i) => (
                  <div
                    key={i}
                    className="inline-flex size-9 items-center justify-center rounded-full border-2 border-card bg-muted text-[10px] font-semibold text-muted-foreground"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <Users className="size-5 text-primary" strokeWidth={1.5} aria-hidden />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">{p.quote}</p>
            <div className="mt-5 flex items-center gap-2 text-xs font-medium text-card-foreground">
              <ShieldCheck className="size-4 text-primary" strokeWidth={1.75} aria-hidden />
              {p.trustLine}
            </div>
          </div>
        </BlockReveal>
      </MarketingContainer>
    </section>
  );
}
