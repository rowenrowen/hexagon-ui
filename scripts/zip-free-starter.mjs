/**
 * Builds public/downloads/hexagon-ui-free-starter.zip from FREE_STARTER_BLOCK_SLUGS.
 * Keep in sync with src/content/blocks-catalog.ts.
 */

import { execSync } from "node:child_process";
import {
  copyFileSync,
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { basename, dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const BLOCKS_SRC = join(ROOT, "src/components/blocks");
const STAGING = join(ROOT, ".free-starter-staging");
const OUT_DIR = join(ROOT, "public/downloads");
const OUT = join(OUT_DIR, "hexagon-ui-free-starter.zip");

/** Must match FREE_STARTER_BLOCK_SLUGS in blocks-catalog.ts */
const FREE_STARTER_BLOCK_SLUGS = [
  "announcement-bar",
  "hero-marketing",
  "trust-strip",
  "feature-grid",
  "stats-strip",
  "social-proof-quote",
  "pricing-single",
  "faq-accordion",
  "cta-band",
  "footer-simple",
];

const REL_IMPORT_RE = /from\s+["']\.\/([^"']+)["']/g;

function resolveRelativeImport(fromFile, spec) {
  const base = join(dirname(fromFile), spec);
  const candidates = [
    base,
    `${base}.tsx`,
    `${base}.ts`,
    join(base, "index.ts"),
    join(base, "index.tsx"),
  ];
  for (const path of candidates) {
    if (existsSync(path)) return path;
  }
  return null;
}

function collectBlockDeps(entryFile, seen) {
  const queue = [entryFile];
  while (queue.length) {
    const file = queue.pop();
    if (seen.has(file)) continue;
    seen.add(file);

    const text = readFileSync(file, "utf8");
    let match;
    REL_IMPORT_RE.lastIndex = 0;
    while ((match = REL_IMPORT_RE.exec(text)) !== null) {
      const resolved = resolveRelativeImport(file, match[1]);
      if (!resolved) {
        console.warn(`  warn: unresolved ./${match[1]} in ${relative(BLOCKS_SRC, file)}`);
        continue;
      }
      if (!resolved.startsWith(BLOCKS_SRC)) continue;
      if (!seen.has(resolved)) queue.push(resolved);
    }
  }
}

function copyIntoBlocks(relativePath) {
  const src = join(BLOCKS_SRC, relativePath);
  const dest = join(STAGING, "blocks", relativePath);
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(src, dest);
}

mkdirSync(OUT_DIR, { recursive: true });
rmSync(STAGING, { recursive: true, force: true });
mkdirSync(join(STAGING, "blocks"), { recursive: true });

const seen = new Set();
for (const slug of FREE_STARTER_BLOCK_SLUGS) {
  const entry = join(BLOCKS_SRC, `${slug}.tsx`);
  if (!existsSync(entry)) {
    console.error(`Missing block: ${entry}`);
    process.exit(1);
  }
  collectBlockDeps(entry, seen);
}

for (const file of seen) {
  const rel = relative(BLOCKS_SRC, file);
  copyIntoBlocks(rel);
}

cpSync(join(BLOCKS_SRC, "tokens"), join(STAGING, "blocks/tokens"), { recursive: true });

const layoutSrc = join(ROOT, "src/components/layout/marketing-container.tsx");
mkdirSync(join(STAGING, "layout"), { recursive: true });
copyFileSync(layoutSrc, join(STAGING, "layout/marketing-container.tsx"));

mkdirSync(join(STAGING, "lib"), { recursive: true });
for (const libFile of ["kit-button-classes.ts", "kit-field-classes.ts"]) {
  copyFileSync(join(ROOT, "src/lib", libFile), join(STAGING, "lib", libFile));
}

const indexExports = FREE_STARTER_BLOCK_SLUGS.map((slug) => {
  const base = slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
  return `export * from "./${slug}";`;
});

writeFileSync(
  join(STAGING, "blocks/index.ts"),
  `/** Free starter subset — ${FREE_STARTER_BLOCK_SLUGS.length} sections */\n${indexExports.join("\n")}\n`,
);

writeFileSync(
  join(STAGING, "README.md"),
  `# Hexagon UI — free starter (${FREE_STARTER_BLOCK_SLUGS.length} blocks)

Downloaded from the marketing site. Same tokens and motion patterns as the full kit.

## Requirements

- React 18+ or 19+
- Tailwind CSS v4 with semantic tokens (\`blocks/tokens/hexagon-ui-variables.css\`)
- \`lucide-react\`, \`framer-motion\` (client blocks)
- Map \`@/components/blocks\` → \`./blocks\`, \`@/components/layout\` → \`./layout\`, \`@/lib\` → \`./lib\`

## Suggested page order

${FREE_STARTER_BLOCK_SLUGS.map((s, i) => `${i + 1}. \`${s}\``).join("\n")}

## Full kit

Upgrade on Gumroad for the complete block library. Regenerate this ZIP locally with \`npm run kit:zip:free\`.
`,
);

execSync(`zip -r "${OUT}" .`, { cwd: STAGING, stdio: "inherit" });
rmSync(STAGING, { recursive: true, force: true });

console.log(`\nWrote ${OUT} (${FREE_STARTER_BLOCK_SLUGS.length} root blocks + dependencies)`);
