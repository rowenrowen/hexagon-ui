import { Mail, MapPin, Phone } from "lucide-react";
import { BlockReveal } from "./block-reveal";
import { PreviewForm } from "./preview-form";

export type ContactSectionProps = {
  title?: string;
  subtitle?: string;
  formAction?: string;
  id?: string;
  className?: string;
};

export const contactSectionDefaults: Required<Pick<ContactSectionProps, "title" | "subtitle">> & {
  formAction?: string;
} = {
  title: "Talk to sales",
  subtitle: "Wire this form to your API or form provider — fields stay semantic and accessible.",
  formAction: "#",
};

export function ContactSection(props: Partial<ContactSectionProps> = {}) {
  const p = { ...contactSectionDefaults, ...props };

  return (
    <section id={p.id} className={`scroll-mt-20 px-4 py-20 sm:px-6 ${p.className ?? ""}`}>
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-16">
        <BlockReveal>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{p.title}</h2>
            <p className="mt-3 text-muted-foreground">{p.subtitle}</p>
            <ul className="mt-10 space-y-5 text-sm">
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.5} aria-hidden />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">hello@example.com</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.5} aria-hidden />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-muted-foreground">+1 (555) 010-2400</p>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.5} aria-hidden />
                <div>
                  <p className="font-medium text-foreground">Office</p>
                  <p className="text-muted-foreground">Remote-first · SF &amp; NYC studios</p>
                </div>
              </li>
            </ul>
          </div>
        </BlockReveal>

        <BlockReveal delay={0.1} y={12}>
          <PreviewForm
            action={p.formAction}
            method="post"
            className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <div className="grid gap-4">
              <div>
                <label htmlFor="hx-contact-name" className="text-sm font-medium text-card-foreground">
                  Name
                </label>
                <input
                  id="hx-contact-name"
                  name="name"
                  autoComplete="name"
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none ring-primary/25 focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="hx-contact-email" className="text-sm font-medium text-card-foreground">
                  Work email
                </label>
                <input
                  id="hx-contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none ring-primary/25 focus:ring-2"
                />
              </div>
              <div>
                <label htmlFor="hx-contact-msg" className="text-sm font-medium text-card-foreground">
                  How can we help?
                </label>
                <textarea
                  id="hx-contact-msg"
                  name="message"
                  rows={4}
                  className="mt-1.5 w-full resize-y rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none ring-primary/25 focus:ring-2"
                />
              </div>
              <button
                type="submit"
                className="mt-2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Send message
              </button>
            </div>
          </PreviewForm>
        </BlockReveal>
      </div>
    </section>
  );
}
