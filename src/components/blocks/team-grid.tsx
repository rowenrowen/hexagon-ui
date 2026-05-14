import type { ReactNode } from "react";
import { BlockReveal, BlockRevealLi } from "./block-reveal";

export type TeamSocialLink = {
  href: string;
  label: string;
  /** Pass your own icon node — kits don't bundle third-party brand marks. */
  icon: ReactNode;
};

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  /** Optional one-line bio shown under the role. */
  bio?: string;
  /** Optional gradient tint id (1–6) to differentiate avatar circles. */
  tint?: 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * Optional social links. Pass your own icon nodes (e.g. your project's
   * preferred icon library) — defaults intentionally render no socials so
   * the kit never ships placeholder brand marks.
   */
  socials?: TeamSocialLink[];
};

export const teamGridDefaults = {
  eyebrow: "Our team",
  title: "Built by operators who shipped this before",
  subtitle:
    "A small, deliberate team of designers and engineers who care about pixel-perfect handoff. Each block in the kit reflects something we wish we'd had on the last launch.",
  members: [
    {
      name: "Avery Brooks",
      role: "CEO & Product",
      initials: "AB",
      bio: "Previously product at two B2B SaaS exits — obsessed with go-to-market polish.",
      tint: 1,
    },
    {
      name: "Morgan Blake",
      role: "Design Director",
      initials: "MB",
      bio: "Design systems lead with a soft spot for accessible motion and token discipline.",
      tint: 2,
    },
    {
      name: "Indigo Park",
      role: "Engineering Lead",
      initials: "IP",
      bio: "Ships Next.js apps for a living. Cares deeply about file structure and DX.",
      tint: 3,
    },
    {
      name: "River Santos",
      role: "Customer Success",
      initials: "RS",
      bio: "The one who actually answers your tickets — usually within an hour.",
      tint: 4,
    },
    {
      name: "Sage Whitman",
      role: "Brand & Content",
      initials: "SW",
      bio: "Writes the copy you copy-paste. Believes voice scales when guardrails are clear.",
      tint: 5,
    },
    {
      name: "Quinn Liu",
      role: "DevRel",
      initials: "QL",
      bio: "Records the screencasts, runs the office hours, makes the Notion bearable.",
      tint: 6,
    },
  ] satisfies TeamMember[],
};

export type TeamGridProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  members?: TeamMember[];
  id?: string;
  className?: string;
};

// Deterministic avatar tints so the grid feels intentional instead of random.
const TINT_CLASSES: Record<NonNullable<TeamMember["tint"]>, string> = {
  1: "bg-gradient-to-br from-primary/25 to-primary/10 text-primary",
  2: "bg-gradient-to-br from-accent/30 to-accent/10 text-foreground",
  3: "bg-gradient-to-br from-blue-500/25 to-blue-500/10 text-blue-700 dark:text-blue-300",
  4: "bg-gradient-to-br from-emerald-500/25 to-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  5: "bg-gradient-to-br from-rose-500/25 to-rose-500/10 text-rose-700 dark:text-rose-300",
  6: "bg-gradient-to-br from-amber-500/25 to-amber-500/10 text-amber-700 dark:text-amber-300",
};

export function TeamGrid({
  eyebrow = teamGridDefaults.eyebrow,
  title = teamGridDefaults.title,
  subtitle = teamGridDefaults.subtitle,
  members = teamGridDefaults.members,
  id,
  className,
}: TeamGridProps) {
  return (
    <section id={id} className={`border-t border-border bg-muted/10 px-4 py-20 sm:px-6 sm:py-24 ${className ?? ""}`}>
      <div className="mx-auto max-w-5xl">
        <BlockReveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            {eyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">{subtitle}</p>
        </BlockReveal>
        <ul className="mt-14 grid list-none gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3">
          {members.map((m, i) => {
            const tint = TINT_CLASSES[m.tint ?? 1];
            return (
              <BlockRevealLi
                key={m.name}
                delay={i * 0.05}
                className="group flex flex-col items-center text-center"
              >
                <span
                  className={`flex size-20 items-center justify-center rounded-full text-lg font-semibold ring-1 ring-border/70 transition-transform duration-300 group-hover:-translate-y-0.5 ${tint}`}
                  aria-hidden
                >
                  {m.initials}
                </span>
                <p className="mt-5 text-base font-semibold text-foreground">{m.name}</p>
                <p className="mt-0.5 text-sm font-medium text-primary">{m.role}</p>
                {m.bio ? (
                  <p className="mt-3 max-w-[26ch] text-balance text-sm leading-relaxed text-muted-foreground">
                    {m.bio}
                  </p>
                ) : null}
                {m.socials?.length ? (
                  <div className="mt-4 flex items-center justify-center gap-1.5">
                    {m.socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        aria-label={`${m.name} on ${social.label}`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                ) : null}
              </BlockRevealLi>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
