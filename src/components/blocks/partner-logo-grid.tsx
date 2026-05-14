import type { ReactNode } from "react";

/**
 * Six-cell partner logo grid with visible names and balanced cells.
 *
 * Defaults use **generic geometric placeholder marks** — not real brands.
 * Kit buyers pass real logos via the `cells` prop.
 */

type LogoEntry = { name: string; mark: ReactNode };

function GenericMark({ children, viewBox = "0 0 32 32" }: { children: ReactNode; viewBox?: string }) {
  return (
    <svg viewBox={viewBox} className="h-7 w-auto max-w-[7rem] sm:h-8" fill="currentColor" aria-hidden>
      {children}
    </svg>
  );
}

function MonogramWordmark({ initial, word }: { initial: string; word: string }) {
  return (
    <div className="flex max-w-full items-center gap-2.5">
      <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-muted text-foreground ring-1 ring-border">
        <span className="text-xs font-bold">{initial}</span>
      </span>
      <span className="truncate text-sm font-semibold tracking-tight text-foreground">{word}</span>
    </div>
  );
}

const PLACEHOLDER_CELLS: LogoEntry[] = [
  {
    name: "Aurora Labs",
    mark: (
      <GenericMark>
        <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="16" cy="16" r="5" />
      </GenericMark>
    ),
  },
  {
    name: "Beacon Analytics",
    mark: <MonogramWordmark initial="B" word="Beacon" />,
  },
  {
    name: "Crestline",
    mark: (
      <GenericMark>
        <path d="M4 24 L16 6 L28 24 Z" />
      </GenericMark>
    ),
  },
  {
    name: "Orbit Systems",
    mark: <MonogramWordmark initial="O" word="Orbit" />,
  },
  {
    name: "Lattice Data",
    mark: (
      <GenericMark>
        <rect x="5" y="5" width="9" height="9" rx="1.5" />
        <rect x="18" y="5" width="9" height="9" rx="1.5" opacity="0.65" />
        <rect x="5" y="18" width="9" height="9" rx="1.5" opacity="0.65" />
        <rect x="18" y="18" width="9" height="9" rx="1.5" />
      </GenericMark>
    ),
  },
  {
    name: "Northwind",
    mark: <MonogramWordmark initial="N" word="Northwind" />,
  },
];

export type PartnerLogoGridProps = {
  cells?: LogoEntry[];
  className?: string;
};

export function PartnerLogoGrid({ cells = PLACEHOLDER_CELLS, className }: PartnerLogoGridProps = {}) {
  return (
    <section className={`py-12 ${className ?? ""}`}>
      <div className="site-grid">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Trusted by teams like</p>
        <p className="mt-2 max-w-xl text-sm text-muted-foreground">
          Swap placeholders for your customers’ marks — names stay visible for accessibility and dense layouts.
        </p>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {cells.map((cell) => (
            <li
              key={cell.name}
              className="group flex min-h-[7.5rem] flex-col items-center justify-center gap-3 rounded-xl border border-border bg-card px-4 py-5 text-center shadow-sm transition-[border-color,box-shadow,transform] hover:border-primary/25 hover:shadow-md sm:min-h-[8.25rem]"
            >
              <div className="flex min-h-[2.5rem] w-full flex-1 items-center justify-center text-muted-foreground transition-colors group-hover:text-foreground">
                <span className="flex max-w-full items-center justify-center">{cell.mark}</span>
              </div>
              <p className="line-clamp-2 w-full text-[11px] font-medium leading-snug text-foreground sm:text-xs">{cell.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
