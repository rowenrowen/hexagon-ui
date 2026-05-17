import { Mail } from "lucide-react";
import { KIT_PRIMARY_PILL } from "@/lib/kit-button-classes";
import { KIT_FIELD_INPUT } from "@/lib/kit-field-classes";
import { BlockReveal } from "./block-reveal";
import { PreviewForm } from "./preview-form";

export type NewsletterInlineProps = {
  title: string;
  description?: string;
  placeholder?: string;
  buttonLabel?: string;
  /** Set action to your API route or leave undefined and wire onSubmit in a wrapper. */
  formAction?: string;
  id?: string;
  className?: string;
};

export const newsletterInlineDefaults: NewsletterInlineProps = {
  title: "Ship notes in your inbox",
  description: "No spam — release notes when the kit updates and one-click unsubscribe.",
  placeholder: "you@company.com",
  buttonLabel: "Subscribe",
  formAction: "#",
};

export function NewsletterInline(props: Partial<NewsletterInlineProps> = {}) {
  const p = { ...newsletterInlineDefaults, ...props };

  return (
    <section id={p.id} className={`px-4 py-16 sm:px-6 ${p.className ?? ""}`}>
      <div className="mx-auto max-w-3xl">
        <BlockReveal>
          <div className="rounded-2xl border border-border bg-muted/20 p-8 sm:p-10">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 size-6 shrink-0 text-primary" strokeWidth={1.5} aria-hidden />
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">{p.title}</h2>
                {p.description ? <p className="mt-2 text-sm text-muted-foreground">{p.description}</p> : null}
              </div>
            </div>
            <PreviewForm action={p.formAction} method="post" className="mt-8 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="hexagon-newsletter-email" className="sr-only">
                Email
              </label>
              <input
                id="hexagon-newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder={p.placeholder}
                className={`min-h-11 ${KIT_FIELD_INPUT}`}
              />
              <button type="submit" className={`min-h-11 shrink-0 ${KIT_PRIMARY_PILL} px-6`}>
                {p.buttonLabel}
              </button>
            </PreviewForm>
          </div>
        </BlockReveal>
      </div>
    </section>
  );
}
