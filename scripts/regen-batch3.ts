/**
 * Batch 3: Thomas portrait (baseball cap) + Bilbo
 * Run: OPENAI_API_KEY=... npx tsx scripts/regen-batch3.ts
 */

import fs from "fs";
import path from "path";
import https from "https";

const API_KEY = process.env.OPENAI_API_KEY;
if (!API_KEY) { console.error("Set OPENAI_API_KEY"); process.exit(1); }

const STYLE =
  "Pulp sci-fi comic book illustration style, inspired by Roy Lichtenstein and 1950s Amazing Stories magazine covers. Bold black outlines, halftone dot shading, vibrant saturated colors, dramatic lighting. No text or words in the image. Square format.";

const jobs = [
  {
    filename: "thomas-mcleod.png",
    outputDir: "public/images",
    prompt: `${STYLE} Portrait of a creative, confident African-American male entrepreneur and engineer in his late 30s wearing a BASEBALL CAP. He has a warm, approachable expression and a neat goatee. He wears a casual dark henley or crew neck shirt with a baseball cap. Behind him: a wall of floating holographic screens showing code, app interfaces, and the silhouettes of AI agents he created. Color palette: forge orange, electric blue, dark background. The vibe is "builder who commands 170 AI agents." Heroic but approachable. The baseball cap is prominent and clearly visible.`,
  },
  {
    filename: "bilbo.png",
    outputDir: "public/images/agents",
    prompt: `${STYLE} Portrait of a cheerful, round-faced hobbit with curly hair, wearing a cozy waistcoat and carrying a quill pen and journal. He represents Copywriting. He has a warm, storytelling expression — the kind of face that says "let me tell you a tale." Color palette: warm brown, forest green, gold, cream. Cozy hobbit-hole interior with books and maps in the background. Bare feet visible. Friendly and literary.`,
  },
];

async function generateImage(job: typeof jobs[0]) {
  const root = "/Users/thomasmcleod/Projects/001 - Coding/voidforge-marketing-site";
  const outputPath = path.join(root, job.outputDir, job.filename);

  if (fs.existsSync(outputPath)) {
    console.log(`⏭  Skipping ${job.filename}`);
    return;
  }

  console.log(`🎨 Generating ${job.filename}...`);

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "dall-e-3",
      prompt: job.prompt,
      n: 1,
      size: "1024x1024",
      quality: "hd",
      style: "vivid",
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    console.error(`❌ Failed ${job.filename}: ${response.status} ${err}`);
    return;
  }

  const data = (await response.json()) as { data: Array<{ url: string }> };
  const imageUrl = data.data[0]?.url;
  if (!imageUrl) { console.error(`❌ No URL for ${job.filename}`); return; }

  await new Promise<void>((resolve, reject) => {
    const file = fs.createWriteStream(outputPath);
    https.get(imageUrl, (res) => {
      res.pipe(file);
      file.on("finish", () => { file.close(); console.log(`✅ Saved ${job.filename}`); resolve(); });
    }).on("error", reject);
  });

  await new Promise((r) => setTimeout(r, 15000));
}

async function main() {
  console.log(`\n🎨 Batch 3: ${jobs.length} images\n`);
  for (const job of jobs) {
    try { await generateImage(job); } catch (err) { console.error(`❌`, err); }
  }
  console.log(`\n✨ Done.\n`);
}

main();
