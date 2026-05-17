"use client";

import { useId, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { KIT_PRIMARY_PILL_BLOCK } from "@/lib/kit-button-classes";
import { KIT_FIELD_INPUT } from "@/lib/kit-field-classes";
import { BlockReveal } from "./block-reveal";
import { MarketingTabList, MarketingTabPanel } from "./marketing-tab-controls";
import { PreviewForm } from "./preview-form";

export type ContactLane = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  email: string;
  phone?: string;
  messagePlaceholder: string;
};

export type ContactSectionProps = {
  title?: string;
  subtitle?: string;
  lanes?: ContactLane[];
  formAction?: string;
  id?: string;
  className?: string;
};

const defaultLanes: ContactLane[] = [
  {
    id: "sales",
    label: "Sales",
    title: "Talk to sales",
    subtitle: "Book a demo, pricing walkthrough, or security review — we respond within one business day.",
    email: "sales@example.com",
    phone: "+1 (555) 010-2400",
    messagePlaceholder: "Team size, timeline, and what you are evaluating…",
  },
  {
    id: "support",
    label: "Support",
    title: "Customer support",
    subtitle: "Existing customers — include your workspace ID so we can route faster.",
    email: "support@example.com",
    messagePlaceholder: "What broke, when it started, and any error IDs…",
  },
  {
    id: "partners",
    label: "Partners",
    title: "Partnerships",
    subtitle: "Agencies, resellers, and technology partners — tell us about your motion.",
    email: "partners@example.com",
    messagePlaceholder: "Company, audience, and integration idea…",
  },
];

export function ContactSection(props: Partial<ContactSectionProps> = {}) {
  const p = {
    formAction: "#",
    lanes: defaultLanes,
    ...props,
  };
  const baseId = useId();
  const [active, setActive] = useState(p.lanes[0]?.id ?? "");
  const lane = p.lanes.find((l) => l.id === active) ?? p.lanes[0];

  return (
    <section id={p.id} className={`scroll-mt-20 px-4 py-20 sm:px-6 ${p.className ?? ""}`}>
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-16">
        <BlockReveal>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{lane?.title}</h2>
            <p className="mt-3 text-muted-foreground">{lane?.subtitle}</p>
            <ul className="mt-10 space-y-5 text-sm">
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.5} aria-hidden />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">{lane?.email}</p>
                </div>
              </li>
              {lane?.phone ? (
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.5} aria-hidden />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">{lane.phone}</p>
                  </div>
                </li>
              ) : null}
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
          <div className="rounded-2xl border border-border bg-card p-2 shadow-sm sm:p-3">
            <MarketingTabList
              tabs={p.lanes.map((l) => ({ id: l.id, label: l.label }))}
              active={active}
              onChange={setActive}
              layoutId={`${baseId}-contact-pill`}
              ariaLabel="Contact inquiry type"
            />
            <MarketingTabPanel panelKey={lane?.id ?? "empty"} className="mt-2 border-0 bg-transparent">
              <PreviewForm action={p.formAction} method="post" className="px-1 pb-1 pt-0">
                <div className="grid gap-4">
                  <div>
                    <label htmlFor={`${baseId}-name`} className="text-sm font-medium text-card-foreground">
                      Name
                    </label>
                    <input id={`${baseId}-name`} name="name" autoComplete="name" className={`mt-1.5 w-full ${KIT_FIELD_INPUT}`} />
                  </div>
                  <div>
                    <label htmlFor={`${baseId}-email`} className="text-sm font-medium text-card-foreground">
                      Work email
                    </label>
                    <input
                      id={`${baseId}-email`}
                      name="email"
                      type="email"
                      autoComplete="email"
                      className={`mt-1.5 w-full ${KIT_FIELD_INPUT}`}
                    />
                  </div>
                  <div>
                    <label htmlFor={`${baseId}-msg`} className="text-sm font-medium text-card-foreground">
                      How can we help?
                    </label>
                    <textarea
                      id={`${baseId}-msg`}
                      name="message"
                      rows={4}
                      placeholder={lane?.messagePlaceholder}
                      className={`mt-1.5 w-full resize-y ${KIT_FIELD_INPUT}`}
                    />
                  </div>
                  <button type="submit" className={`mt-2 ${KIT_PRIMARY_PILL_BLOCK}`}>
                    Send message
                  </button>
                </div>
              </PreviewForm>
            </MarketingTabPanel>
          </div>
        </BlockReveal>
      </div>
    </section>
  );
}
