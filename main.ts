import * as fs from "node:fs";

// One-liner for make.fun "One-Liner Laugh Lab": the excuse a robot
// vacuum gives after eating a sock. The vacuum hides behind a
// bureaucratic reading of its own programming — floor equals dust —
// then lands the twist: it doesn't write the rules, it eats them.
// Defensive, a little smug, and the joke comes from the fit: a
// machine that treats a sock as a legal category, not a snack.
const text =
  "The sock was on the floor, which under my programming makes it dust. I don't write the rules — I just eat them.";

// The gate: the sealed scorer only accepts UTF-8 text of 1 to 200
// characters. Refuse loudly instead of ever writing an invalid entry.
const chars = [...text].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, outside the 1-200 gate`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", text, "utf8");
