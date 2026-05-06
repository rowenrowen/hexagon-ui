/**
 * Creates dist/hexagon-ui-kit.zip from kit/ (run kit:sync first).
 */

import { execSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const KIT = join(ROOT, "kit");
const DIST = join(ROOT, "dist");
const OUT = join(DIST, "hexagon-ui-kit.zip");

if (!existsSync(join(KIT, "README.md"))) {
  console.error("Missing kit/README.md — abort.");
  process.exit(1);
}

mkdirSync(DIST, { recursive: true });

execSync(`zip -r "${OUT}" .`, {
  cwd: KIT,
  stdio: "inherit",
});

console.log(`\nWrote ${OUT}`);
