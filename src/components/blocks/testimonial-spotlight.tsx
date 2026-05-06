import { Quote } from "lucide-react";
import { BlockReveal } from "./block-reveal";

export type TestimonialSpotlightProps = {
  quote: string;
  name: string;
  role: string;
  company?: string | undefined;
  className?: string;
};

export const testimonialSpotlightDefaults = {
  quote:
    "“We went from a blank repo to a board-ready marketing page in two days. The sections feel opinionated in the right ways—tokens mapped in one pass.”",
  name: "Jordan Lee",
  role: "VP Engineering",
  company: "Northwind Analytics",
} satisfies TestimonialSpotlightProps;

export function TestimonialSpotlight(props: Partial<TestimonialSpotlightProps> = {}) {
  const p = { ...testimonialSpotlightDefaults, ...props };

  return (
    <section className={`border-y border-border bg-muted/20 px-4 py-20 sm:px-6 ${p.className ?? ""}`}>
      <div className="mx-auto max-w-3xl text-center">
        <BlockReveal y={18}>
          <Quote className="mx-auto size-10 text-primary/70" strokeWidth={1.25} aria-hidden />
          <blockquote className="mt-8 text-xl font-medium leading-relaxed tracking-tight text-foreground sm:text-2xl">
            {p.quote}
          </blockquote>
          <div className="mt-10">
            <p className="text-sm font-semibold text-foreground">{p.name}</p>
            <p className="text-sm text-muted-foreground">
              {p.role}
              {p.company ? ` · ${p.company}` : ""}
            </p>
          </div>
        </BlockReveal>
      </div>
    </section>
  );
}
