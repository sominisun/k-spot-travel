// Build-time font subsetting for the Route Pass PDF.
// Collects every Hangul character used anywhere in the site data (plus the
// full printable-ASCII range and PDF punctuation) and produces small TTFs
// in public/fonts/. Runs automatically via the "prebuild" npm hook, so a
// newly added show's Korean names are always covered — zero operator work.
import subsetFont from "subset-font";
import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "src");
const OUT = path.join(ROOT, "public", "fonts");

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, acc);
    else if (/\.(ts|tsx)$/.test(name)) acc.push(p);
  }
  return acc;
}

// 1) Every Hangul syllable/jamo that appears in the codebase (data, dicts,
//    the PDF route's own strings) …
const chars = new Set();
for (const file of walk(SRC)) {
  const text = readFileSync(file, "utf8");
  for (const m of text.matchAll(/[가-힣ㄱ-ㆎ]/g)) chars.add(m[0]);
}
// 2) … plus printable ASCII and the punctuation the PDF uses.
for (let c = 0x20; c <= 0x7e; c++) chars.add(String.fromCharCode(c));
for (const c of "·—–…₩°½«»‘’“”") chars.add(c);

const charset = [...chars].join("");
console.log(`[subset-fonts] ${chars.size} unique characters collected`);

mkdirSync(OUT, { recursive: true });
// Source: the current Noto Sans KR variable font (proportional digits, unlike
// the legacy static build). We pin the weight axis to emit static instances.
const vf = readFileSync(path.join(ROOT, "src", "assets", "fonts", "NotoSansKR-VF.ttf"));
for (const [weight, wght] of [["Regular", 400], ["Bold", 700]]) {
  const out = path.join(OUT, `NotoSansKR-${weight}.ttf`);
  const sub = await subsetFont(vf, charset, { targetFormat: "truetype", variationAxes: { wght } });
  writeFileSync(out, sub);
  console.log(`[subset-fonts] ${weight} (wght ${wght}): ${(vf.length / 1024 / 1024).toFixed(1)}MB -> ${(sub.length / 1024).toFixed(0)}KB`);
}
