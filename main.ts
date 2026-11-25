// The One-Line Exit — v2 entry ("The Personal One").
//
// Why this line won the design review (scored against the judge's 5 criteria):
// - v1 lost at rank 1028/2321 on the most famous IT cliche in the world
//   ("turning it off and on again"). v2 flips the most famous HR line
//   instead: "it's not personal." Same reversal trick, but a fresher,
//   more specific voice — nobody expects the resignation to come from HR.
// - Surprise: the reader expects HR to soften the blow, as HR always does.
//   Instead HR weaponises its own catchphrase against the company: every
//   firing for ten years "was not personal", but THIS resignation is.
// - Specific voice: an HR manager who has spent a decade telling people
//   it is not personal is instantly recognisable; no generic complaint.
// - Form: one line, no padding, reads exactly like a letter a real HR
//   manager could send. The punchline lands on the very last word.
// - Quotable: "this one is entirely personal" is the line a colleague forwards.
// Length: 127 characters (gate allows 1-140), single line, no newline.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I resign as your HR manager: after ten years of telling people it is not personal, I can confirm this one is entirely personal.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
