import { BlockReveal, BlockRevealLi } from "./block-reveal";

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
};

export const teamGridDefaults = {
  title: "People behind the product",
  subtitle: "Replace initials with real avatars — keep square crops for a tidy grid.",
  members: [
    { name: "Avery Brooks", role: "CEO & Product", initials: "AB" },
    { name: "Morgan Blake", role: "Design", initials: "MB" },
    { name: "Indigo Park", role: "Engineering", initials: "IP" },
    { name: "River Santos", role: "Customer", initials: "RS" },
  ] satisfies TeamMember[],
};

export type TeamGridProps = {
  title?: string;
  subtitle?: string;
  members?: TeamMember[];
  id?: string;
  className?: string;
};

export function TeamGrid({
  title = teamGridDefaults.title,
  subtitle = teamGridDefaults.subtitle,
  members = teamGridDefaults.members,
  id,
  className,
}: TeamGridProps) {
  return (
    <section id={id} className={`border-t border-border bg-muted/10 px-4 py-20 sm:px-6 ${className ?? ""}`}>
      <div className="mx-auto max-w-5xl">
        <BlockReveal>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>
        </BlockReveal>
        <ul className="mt-12 grid list-none gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m, i) => (
            <BlockRevealLi key={m.name} delay={i * 0.07} className="text-center">
              <div className="mx-auto flex size-20 items-center justify-center rounded-2xl border border-border bg-card text-lg font-semibold text-primary">
                {m.initials}
              </div>
              <p className="mt-4 text-sm font-semibold text-foreground">{m.name}</p>
              <p className="text-xs text-muted-foreground">{m.role}</p>
            </BlockRevealLi>
          ))}
        </ul>
      </div>
    </section>
  );
}
