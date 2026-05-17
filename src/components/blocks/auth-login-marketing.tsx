"use client";

import { KIT_PRIMARY_PILL_BLOCK } from "@/lib/kit-button-classes";
import { KIT_FIELD_INPUT } from "@/lib/kit-field-classes";
import { BlockReveal } from "./block-reveal";
import { MarketingLink } from "./marketing-link";

export type AuthLoginMarketingProps = {
  title?: string;
  subtitle?: string;
  formAction?: string;
  id?: string;
  className?: string;
};

export const authLoginMarketingDefaults = {
  title: "Sign in",
  subtitle: "Marketing-shell login — connect to your auth provider; this is layout-only.",
  formAction: "#",
};

export function AuthLoginMarketing(props: Partial<AuthLoginMarketingProps> = {}) {
  const p = { ...authLoginMarketingDefaults, ...props };

  return (
    <section id={p.id} className={`scroll-mt-20 px-4 py-16 sm:px-6 ${p.className ?? ""}`}>
      <div className="mx-auto max-w-md">
        <BlockReveal>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-lg shadow-black/15">
            <h2 className="text-center text-xl font-semibold tracking-tight text-card-foreground">{p.title}</h2>
            <p className="mt-2 text-center text-sm text-muted-foreground">{p.subtitle}</p>
            <form
              action={p.formAction}
              method="post"
              className="mt-8 space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label htmlFor="hx-auth-email" className="text-sm font-medium text-card-foreground">
                  Email
                </label>
                <input
                  id="hx-auth-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={`mt-1.5 w-full ${KIT_FIELD_INPUT}`}
                />
              </div>
              <div>
                <label htmlFor="hx-auth-password" className="text-sm font-medium text-card-foreground">
                  Password
                </label>
                <input
                  id="hx-auth-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className={`mt-1.5 w-full ${KIT_FIELD_INPUT}`}
                />
              </div>
              <button
                type="submit"
                className={KIT_PRIMARY_PILL_BLOCK}
              >
                Continue
              </button>
            </form>
            <p className="mt-6 text-center text-xs text-muted-foreground">
              <MarketingLink href="#" className="font-medium text-primary hover:underline">
                Forgot password?
              </MarketingLink>
            </p>
          </div>
        </BlockReveal>
      </div>
    </section>
  );
}
