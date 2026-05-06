import { Boxes, Cloud, Database, Webhook } from "lucide-react";

const ITEMS = [
  { icon: Cloud, name: "AWS", body: "VPC peering narrative placeholder." },
  { icon: Database, name: "Snowflake", body: "Warehouse sync copy goes here." },
  { icon: Webhook, name: "Webhooks", body: "Signed deliveries + retry policy." },
  { icon: Boxes, name: "ERP connectors", body: "SAP / NetSuite storyline slot." },
];

export type IntegrationGridProps = { className?: string };

export function IntegrationGrid({ className }: IntegrationGridProps = {}) {
  return (
    <section className={`border-y border-border py-20 ${className ?? ""}`}>
      <div className="site-grid">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Integration depth</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          Four-up grid for vendor logos or stack icons — swap Lucide icons for SVG marks from your press kit.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, name, body }) => (
            <li key={name} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <Icon className="size-7 text-primary" strokeWidth={1.5} aria-hidden />
              <p className="mt-4 font-semibold text-card-foreground">{name}</p>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
