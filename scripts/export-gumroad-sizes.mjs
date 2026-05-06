/**
 * Builds Gumroad cover (1280×720) and thumbnail (600×600) from one master PNG.
 * Cover: blurred “expanded” background (cover-fit + blur) under a sharp center (contain-fit).
 * Thumbnail: center-cropped square.
 *
 * Usage:
 *   node scripts/export-gumroad-sizes.mjs [path/to/source.png]
 * Default source: public/gumroad/gumroad-master-source.png
 */

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const DEFAULT_INPUT = join(ROOT, "public/gumroad/gumroad-master-source.png");
const OUT_COVER = join(ROOT, "public/gumroad/gumroad-cover-1280x720.png");
const OUT_THUMB = join(ROOT, "public/gumroad/gumroad-thumbnail-600x600.png");

const COVER_W = 1280;
const COVER_H = 720;
const THUMB = 600;

async function main() {
  const input = process.argv[2] || DEFAULT_INPUT;

  const blurredBg = await sharp(input)
    .resize(COVER_W, COVER_H, { fit: "cover", position: "centre" })
    .blur(32)
    .png()
    .toBuffer();

  const foreground = await sharp(input)
    .resize(COVER_W, COVER_H, {
      fit: "contain",
      position: "centre",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  await sharp(blurredBg)
    .composite([{ input: foreground, gravity: "centre" }])
    .png()
    .toFile(OUT_COVER);

  await sharp(input)
    .resize(THUMB, THUMB, { fit: "cover", position: "centre" })
    .png()
    .toFile(OUT_THUMB);

  console.log(`Wrote:\n  ${OUT_COVER}\n  ${OUT_THUMB}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
