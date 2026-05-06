import Link from "next/link";
import { FileCode2, FolderArchive, Terminal } from "lucide-react";
import { MarketingContainer } from "@/components/layout/marketing-container";
import { BLOCK_SECTIONS } from "@/content/blocks-catalog";

const blockRows = BLOCK_SECTIONS.flatMap((section) =>
  section.blocks.map((b) => ({
    file: b.file,
    block: b.frameTitle,
    note: b.frameDescription,
  })),
);

const shippedFiles = [
  ...blockRows,
  { file: "tokens/hexagon-ui-variables.css", block: "—", note: "Light/dark CSS variables to merge into globals" },
  { file: "index.ts", block: "—", note: "Barrel re-exports for tidy imports" },
];

/** ZIP manifest — used on `/kit` and mirrors `blocks/` after `npm run kit:sync`. */
export function KitContents() {
  return (
    <section id="manifest" className="scroll-mt-20 border-y border-border bg-muted/15 py-16 sm:py-20">
      <MarketingContainer className="space-y-12">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Inside the ZIP</p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Manifest matches the repo source of truth
          </h2>
          <p className="text-muted-foreground">
            Buyers receive the same React files under{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">blocks/</code> (plus README, HANDOFF,
            LICENSE). This table is documentation only—it is <strong className="text-foreground">not</strong> duplicated
            as extra files inside the archive.
          </p>
          <p className="text-muted-foreground">
            After <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">npm run kit:zip</code>, blocks are
            copied into <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">kit/blocks/</code> inside{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">dist/hexagon-ui-kit.zip</code>.
          </p>
          <p className="text-muted-foreground">
            Need <strong className="text-foreground">isolated screenshots</strong> for a deck? Use the{" "}
            <Link href="/blocks" className="font-medium text-primary hover:underline">
              blocks hub
            </Link>{" "}
            — each preview toolbar lists the matching shipped filename.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-lg shadow-black/20">
          <div className="hidden grid-cols-[minmax(0,1.35fr)_minmax(0,0.75fr)_minmax(0,1.35fr)] gap-px bg-border text-sm font-semibold text-card-foreground sm:grid">
            <div className="bg-muted/40 px-4 py-3">File in ZIP</div>
            <div className="bg-muted/40 px-4 py-3">Export</div>
            <div className="bg-muted/40 px-4 py-3">Role</div>
          </div>
          <ul className="divide-y divide-border">
            {shippedFiles.map((row) => (
              <li
                key={row.file}
                className="bg-card px-4 py-4 sm:grid sm:grid-cols-[minmax(0,1.35fr)_minmax(0,0.75fr)_minmax(0,1.35fr)] sm:gap-4 sm:py-3"
              >
                <div className="flex items-start gap-2 font-mono text-xs text-card-foreground">
                  <FileCode2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  <span>
                    blocks/{row.file}
                    <span className="mt-1 block text-[11px] font-sans text-muted-foreground sm:hidden">{row.note}</span>
                  </span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground sm:mt-0">{row.block}</div>
                <div className="mt-1 hidden text-sm text-muted-foreground sm:block">{row.note}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-card-foreground">
              <FolderArchive className="size-5 text-primary" aria-hidden />
              Review without buying
            </div>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-muted-foreground">
              <li>
                From the repo root run <code className="rounded bg-muted px-1 py-0.5 font-mono text-[13px]">npm run kit:zip</code>.
              </li>
              <li>
                Unzip <code className="rounded bg-muted px-1 py-0.5 font-mono text-[13px]">dist/hexagon-ui-kit.zip</code> on your Mac
                (double-click) or extract into any folder.
              </li>
              <li>
                Open <code className="rounded bg-muted px-1 py-0.5 font-mono text-[13px]">blocks/</code> — filenames match the table.
              </li>
            </ol>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-card-foreground">
              <Terminal className="size-5 text-primary" aria-hidden />
              Terminal inventory
            </div>
            <pre className="mt-4 overflow-x-auto rounded-lg bg-muted/50 p-4 font-mono text-[13px] leading-relaxed text-muted-foreground">
              unzip -l dist/hexagon-ui-kit.zip
            </pre>
            <p className="mt-3 text-xs text-muted-foreground">
              Lists every path inside the archive—quick sanity check before uploading to Gumroad.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-dashed border-border bg-muted/20 px-5 py-4 text-sm text-muted-foreground">
          Prefer browsing in Cursor? Run <code className="mx-1 rounded bg-muted px-1.5 py-0.5 font-mono text-[13px]">npm run kit:sync</code>
          then open the generated <code className="mx-1 rounded bg-muted px-1.5 py-0.5 font-mono text-[13px]">kit/blocks/</code> folder
          (gitignored locally—it mirrors what buyers unzip).
        </div>
      </MarketingContainer>
    </section>
  );
}
