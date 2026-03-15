/**
 * VoidForge Image Regeneration — Batch 2
 * Fixes: Sisko, Picard, Chani, tutorials (wide), Thomas portrait, about strip
 * Run: OPENAI_API_KEY=... npx tsx scripts/regen-images.ts
 */

import fs from "fs";
import path from "path";
import https from "https";

const API_KEY = process.env.OPENAI_API_KEY;
if (!API_KEY) {
  console.error("Set OPENAI_API_KEY environment variable");
  process.exit(1);
}

const STYLE =
  "Pulp sci-fi comic book illustration style, inspired by Roy Lichtenstein and 1950s Amazing Stories magazine covers. Bold black outlines, halftone dot shading, vibrant saturated colors, dramatic lighting. No text or words in the image.";

interface Job {
  filename: string;
  outputDir: string;
  prompt: string;
  size?: "1024x1024" | "1792x1024";
}

const jobs: Job[] = [
  // Sisko — African-American starship captain (Avery Brooks)
  {
    filename: "sisko.png",
    outputDir: "public/images/agents",
    prompt: `${STYLE} Square format. Portrait of a strong, confident African-American starship captain with a shaved bald head and goatee, wearing a futuristic military uniform. He represents Campaign Command and strategic warfare. He stands at a tactical war room table with holographic star maps and battle plans. Color palette: blue, gold, warm brown. Resolute, commanding expression. A space station is visible through a large window behind him.`,
  },
  // Picard — bald (Patrick Stewart)
  {
    filename: "picard.png",
    outputDir: "public/images/agents",
    prompt: `${STYLE} Square format. Portrait of a dignified, bald, older Caucasian starship captain in a burgundy and black uniform, representing Systems Architecture. He has a commanding but thoughtful presence. He stands on a starship bridge with architectural system diagrams and star charts displayed on screens behind him. Color palette: blue, silver, burgundy red accent. One hand on chin in contemplation. Clean-shaven, aristocratic bearing.`,
  },
  // Chani — on a massive sandworm (not a slug)
  {
    filename: "chani.png",
    outputDir: "public/images/agents",
    prompt: `${STYLE} Square format. Portrait of a fierce desert warrior woman with vivid blue-within-blue eyes, representing a Telegram Bridge operator. She rides atop a MASSIVE sandworm — an enormous segmented creature hundreds of feet long, erupting from golden desert sand dunes, with a cavernous circular mouth filled with crystalline teeth. The sandworm is enormous and terrifying, dwarfing the rider. Color palette: sand gold, deep blue, amber orange sky. She wears a fitted desert stillsuit. Confident, fearless expression as wind whips around her.`,
  },
  // Tutorial Install — WIDE landscape
  {
    filename: "tutorial-install.png",
    outputDir: "public/images/tutorials",
    size: "1792x1024",
    prompt: `${STYLE} Wide landscape format. A glowing toolbox opening with magical light pouring out. Inside the toolbox: a wrench, a hammer, and a glowing terminal screen showing a command prompt. The tools represent developer prerequisites — Node.js, Git, Claude Code. Color palette: electric blue, silver, hints of green. Workshop setting with sparks and light rays. Dramatic wide composition.`,
  },
  // Tutorial Build — WIDE landscape
  {
    filename: "tutorial-build.png",
    outputDir: "public/images/tutorials",
    size: "1792x1024",
    prompt: `${STYLE} Wide landscape format. A blueprint document being fed into a massive steampunk machine with gears, pistons, and glowing conduits. The machine outputs streams of glowing code and finished application components from the other side. Half-mechanical, half-magical. Color palette: blue on the input side, transitioning to orange and green on the output side. Industrial and mystical. Wide cinematic composition.`,
  },
  // Tutorial Deploy — WIDE landscape
  {
    filename: "tutorial-deploy.png",
    outputDir: "public/images/tutorials",
    size: "1792x1024",
    prompt: `${STYLE} Wide landscape format. A rocket on a futuristic launchpad with 6 glowing target indicators floating in a heads-up display around it — each target represents a deploy destination (cloud, container, server, edge network, static CDN, VPS). Mission control panels glow with green status lights in the foreground. Color palette: neon green, silver, dark blue. Wide cinematic launch scene.`,
  },
  // Thomas McLeod — comic style portrait for about page
  {
    filename: "thomas-mcleod.png",
    outputDir: "public/images",
    prompt: `${STYLE} Square format. Portrait of a creative, confident African-American male entrepreneur and engineer in his late 30s. He has a warm, approachable expression and a neat appearance. He wears a casual but sharp outfit — dark henley or crew neck. Behind him: a wall of floating holographic screens showing code, app interfaces, and the silhouettes of AI agents he created. Color palette: forge orange, electric blue, dark background. The vibe is "builder who commands 170 AI agents." Heroic but approachable.`,
  },
  // About page — comic strip showing build sequence
  {
    filename: "about-build-strip.png",
    outputDir: "public/images",
    size: "1792x1024",
    prompt: `${STYLE} Wide landscape format. A horizontal comic strip with 6 connected panels showing a build sequence from left to right: Panel 1 — A captain studying a blueprint (PRD). Panel 2 — An armored inventor and an elven queen building together at terminals. Panel 3 — A dark detective with magnifying glass testing code. Panel 4 — A robed warrior with energy sword scanning for vulnerabilities. Panel 5 — A cyberpunk operative deploying to servers. Panel 6 — A glowing "YOU'RE HERE" burst with a reader looking at a screen. Each panel is separated by bold black comic panel borders. Action-packed, dynamic poses.`,
  },
];

async function generateImage(job: Job): Promise<void> {
  const root = "/Users/thomasmcleod/Projects/001 - Coding/voidforge-marketing-site";
  const outputPath = path.join(root, job.outputDir, job.filename);

  if (fs.existsSync(outputPath)) {
    console.log(`⏭  Skipping ${job.filename} (already exists)`);
    return;
  }

  console.log(`🎨 Generating ${job.filename} (${job.size || "1024x1024"})...`);

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
      size: job.size || "1024x1024",
      quality: "hd",
      style: "vivid",
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    console.error(`❌ Failed ${job.filename}: ${response.status} ${err}`);
    return;
  }

  const data = (await response.json()) as {
    data: Array<{ url: string }>;
  };
  const imageUrl = data.data[0]?.url;
  if (!imageUrl) {
    console.error(`❌ No URL for ${job.filename}`);
    return;
  }

  await new Promise<void>((resolve, reject) => {
    const file = fs.createWriteStream(outputPath);
    https.get(imageUrl, (res) => {
      res.pipe(file);
      file.on("finish", () => {
        file.close();
        console.log(`✅ Saved ${job.filename}`);
        resolve();
      });
    }).on("error", (err) => {
      fs.unlink(outputPath, () => {});
      reject(err);
    });
  });

  await new Promise((r) => setTimeout(r, 15000));
}

async function main() {
  console.log(`\n🔥 VoidForge Image Regeneration — Batch 2`);
  console.log(`   ${jobs.length} images\n`);
  for (const job of jobs) {
    try {
      await generateImage(job);
    } catch (err) {
      console.error(`❌ Error on ${job.filename}:`, err);
    }
  }
  console.log(`\n✨ Done.\n`);
}

main();
