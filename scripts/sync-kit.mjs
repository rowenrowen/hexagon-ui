/**
 * Copies Hexagon UI ship-ready artifacts into kit/ for Gumroad ZIP packaging.
 */

import { cpSync, copyFileSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const SRC_BLOCKS = join(ROOT, "src/components/blocks");
const KIT = join(ROOT, "kit");
const KIT_BLOCKS = join(KIT, "blocks");

rmSync(KIT_BLOCKS, { recursive: true, force: true });
mkdirSync(KIT_BLOCKS, { recursive: true });
cpSync(SRC_BLOCKS, KIT_BLOCKS, { recursive: true });

copyFileSync(join(ROOT, "docs/HANDOFF.md"), join(KIT, "HANDOFF.md"));

console.log(`Synced:\n  ${SRC_BLOCKS} → ${KIT_BLOCKS}\n  docs/HANDOFF.md → kit/HANDOFF.md`);
