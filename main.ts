import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const reply =
  "On vacation: I've left my emails in the care of the office printer, which has jammed, sulked, and filed yours under 'no'.";

const points = [...reply].length;
if (points < 1 || points > 160 || reply.trim().length === 0) {
  throw new Error(`entry must be 1-160 characters, got ${points}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), reply, "utf8");
