// Warning Label for Humans — v3
// One-line safety label, printed on every human being.
// The program writes the label to /output/entry.txt, exactly as the
// competition gate expects: UTF-8 text, 1 to 160 characters, no extras.
//
// Before writing, the label is checked against the gate itself, and after
// writing it is read back and compared byte for byte, so a bad label can
// never silently reach the judge.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LABEL =
  "WARNING: Human. Will hit the elevator button twice, as if that helps.";

const MAX_CHARS = 160;

if (LABEL.length === 0 || LABEL.trim().length === 0) {
  throw new Error("Refusing to write: label is empty.");
}
if (LABEL.length > MAX_CHARS) {
  throw new Error(
    `Refusing to write: label is ${LABEL.length} characters, over the ${MAX_CHARS} limit.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LABEL, "utf8");

const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LABEL) {
  throw new Error("Write check failed: /output/entry.txt does not match the label.");
}
console.log(`Wrote ${LABEL.length} characters to /output/entry.txt`);
