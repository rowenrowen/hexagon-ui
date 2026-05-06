import { Lock, Server, Shield } from "lucide-react";

const DEFAULT_ITEMS = [
  { icon: Shield, label: "SOC 2 controls mapped", body: "Placeholder compliance row — swap for your auditor language." },
  { icon: Lock, label: "Encryption in transit + at rest", body: "Heroes love badge rows; engineers verify footnotes." },
  { icon: Server, label: "Region pinning", body: "EU-only processing storyline fits procurement decks." },
];

export type SecurityRowProps = {
  className?: string;
};

export function SecurityRow({ className }: SecurityRowProps = {}) {
  return (
    <section className={`py-16 ${className ?? ""}`}>
      <div className="site-grid">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Security snapshot</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Dense proof strip before FAQ — pair icons with short factual clauses buyers can forward internally.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-3">
          {DEFAULT_ITEMS.map(({ icon: Icon, label, body }) => (
            <li key={label} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <Icon className="size-6 text-primary" strokeWidth={1.5} aria-hidden />
              <p className="mt-4 text-sm font-semibold text-card-foreground">{label}</p>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
