import { Megaphone } from "lucide-react";
import { BlockReveal } from "./block-reveal";
import { MarketingLink } from "./marketing-link";

export type AnnouncementBarProps = {
  message: string;
  href?: string;
  linkLabel?: string;
  className?: string;
};

export const announcementBarDefaults: Required<Pick<AnnouncementBarProps, "message" | "linkLabel">> & {
  href?: string;
} = {
  message: "New: expanded marketing block library — same tokens, more sections.",
  href: "/blocks",
  linkLabel: "See manifest",
};

export function AnnouncementBar(props: Partial<AnnouncementBarProps> = {}) {
  const p = { ...announcementBarDefaults, ...props };

  return (
    <div
      className={`border-b border-primary/20 bg-primary/10 px-4 py-2.5 text-center text-sm text-primary sm:px-6 ${p.className ?? ""}`}
    >
      <BlockReveal className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-2" y={6}>
        <Megaphone className="size-4 shrink-0 opacity-80" aria-hidden />
        <span className="font-medium text-foreground">{p.message}</span>
        {p.href ? (
          <MarketingLink href={p.href} className="font-semibold underline-offset-2 hover:underline">
            {p.linkLabel}
          </MarketingLink>
        ) : null}
      </BlockReveal>
    </div>
  );
}
