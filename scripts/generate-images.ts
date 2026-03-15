/**
 * VoidForge Image Generation Pipeline
 * Uses OpenAI DALL-E 3 to generate all character art, panels, and OG images.
 * Run: npx tsx scripts/generate-images.ts
 */

import fs from "fs";
import path from "path";
import https from "https";

const API_KEY = process.env.OPENAI_API_KEY;
if (!API_KEY) {
  console.error("Set OPENAI_API_KEY environment variable");
  process.exit(1);
}

const STYLE_PREFIX =
  "Pulp sci-fi comic book illustration style, inspired by Roy Lichtenstein and 1950s Amazing Stories magazine covers. Bold black outlines, halftone dot shading, vibrant saturated colors, dramatic lighting. No text or words in the image. Square format.";

interface ImageJob {
  filename: string;
  outputDir: string;
  prompt: string;
  size?: "1024x1024" | "1792x1024";
}

const jobs: ImageJob[] = [
  // === AGENT PORTRAITS (11) ===
  {
    filename: "galadriel.png",
    outputDir: "public/images/agents",
    prompt: `${STYLE_PREFIX} Portrait of an elegant elven queen representing Frontend & UX engineering. She has an ethereal glow, wise eyes, and flowing robes. Color palette: emerald green and gold. She gestures gracefully as if shaping a glowing interface in the air. Background: soft forest light with geometric patterns.`,
  },
  {
    filename: "stark.png",
    outputDir: "public/images/agents",
    prompt: `${STYLE_PREFIX} Portrait of a genius inventor in sleek red and gold power armor, representing Backend Engineering. He stands in a high-tech workshop with holographic displays showing database schemas and API diagrams. Color palette: red, gold, electric blue. Confident smirk.`,
  },
  {
    filename: "batman.png",
    outputDir: "public/images/agents",
    prompt: `${STYLE_PREFIX} Portrait of a dark detective in a cowl and cape, representing QA & Testing. He holds a magnifying glass examining lines of code. Color palette: navy blue, black, hints of yellow. Moody detective noir lighting. Gotham skyline in background.`,
  },
  {
    filename: "kenobi.png",
    outputDir: "public/images/agents",
    prompt: `${STYLE_PREFIX} Portrait of a wise bearded warrior monk in robes, representing Security. He holds a glowing energy sword that scans for vulnerabilities. Color palette: warm brown, gold, blue glow. Desert landscape with twin suns in background. Calm, watchful expression.`,
  },
  {
    filename: "picard.png",
    outputDir: "public/images/agents",
    prompt: `${STYLE_PREFIX} Portrait of a dignified starship captain in a uniform, representing Systems Architecture. He stands on a bridge with star charts and system diagrams on screens behind him. Color palette: blue, silver, red accent. Commanding posture, thoughtful expression.`,
  },
  {
    filename: "kusanagi.png",
    outputDir: "public/images/agents",
    prompt: `${STYLE_PREFIX} Portrait of a cyberpunk female operative with cybernetic enhancements, representing DevOps & Infrastructure. Neon pink and purple lighting. Server racks and network visualizations behind her. Short dark hair, intense focused eyes. Futuristic city backdrop.`,
  },
  {
    filename: "coulson.png",
    outputDir: "public/images/agents",
    prompt: `${STYLE_PREFIX} Portrait of a calm, professional man in a sharp suit and tie, representing Release Management. He holds a clipboard with a checklist and has an earpiece. Color palette: navy blue, red tie, clean white shirt. Office/command center background. Reassuring smile.`,
  },
  {
    filename: "bombadil.png",
    outputDir: "public/images/agents",
    prompt: `${STYLE_PREFIX} Portrait of a jolly, round-faced forest spirit with a feathered hat and bright blue jacket, representing Forge Sync. He dances through a golden forest holding an ancient book. Color palette: bright blue, yellow, green, gold. Whimsical and merry expression.`,
  },
  {
    filename: "chani.png",
    outputDir: "public/images/agents",
    prompt: `${STYLE_PREFIX} Portrait of a fierce desert warrior woman with blue-within-blue eyes, representing the Telegram Bridge. She rides atop a massive sandworm across golden dunes. Color palette: sand gold, deep blue, amber. Stillsuit and desert gear. Determined expression.`,
  },
  {
    filename: "fury.png",
    outputDir: "public/images/agents",
    prompt: `${STYLE_PREFIX} Portrait of a commanding figure with an eye patch and long black leather coat, representing Pipeline Orchestration. He stands in a war room with multiple screens showing agent status. Color palette: black, dark red, steel gray. Authoritative, no-nonsense expression.`,
  },
  {
    filename: "sisko.png",
    outputDir: "public/images/agents",
    prompt: `${STYLE_PREFIX} Portrait of a strong, bald starship captain with a goatee in a uniform, representing Campaign Command. He stands at a tactical war room table with star maps. Color palette: blue, gold, warm brown. Resolute, strategic expression. Space station visible through window.`,
  },

  // === COMIC STRIP PANELS (3) ===
  {
    filename: "panel-prd.png",
    outputDir: "public/images/panels",
    prompt: `${STYLE_PREFIX} A glowing document labeled with code symbols falling into a massive forge furnace. Sparks and molten light erupt upward. The forge is industrial and mythic — half blacksmith, half nuclear reactor. Dramatic orange and yellow flames against dark background.`,
  },
  {
    filename: "panel-agents.png",
    outputDir: "public/images/panels",
    prompt: `${STYLE_PREFIX} A team of diverse heroic silhouettes standing in action poses at computer terminals. They span fantasy, sci-fi, and superhero genres — a knight, an armored hero, a caped figure, a robed warrior, a starship officer, a cyberpunk operative. Working together in a high-tech command center. Orange and blue lighting.`,
  },
  {
    filename: "panel-ship.png",
    outputDir: "public/images/panels",
    prompt: `${STYLE_PREFIX} A rocket launching from a futuristic launchpad with a bright green checkmark trail behind it. The sky is dark with stars. Ground crew (small silhouettes) celebrate below. Dramatic upward angle. Green, white, and dark blue color palette. Triumph and completion.`,
  },

  // === TUTORIAL HEADERS (3) ===
  {
    filename: "tutorial-install.png",
    outputDir: "public/images/tutorials",
    prompt: `${STYLE_PREFIX} A glowing toolbox opening with magical light pouring out. Inside: a wrench, a hammer, and a glowing terminal screen. The tools represent developer prerequisites. Color palette: electric blue, silver, hints of green. Workshop setting.`,
  },
  {
    filename: "tutorial-build.png",
    outputDir: "public/images/tutorials",
    prompt: `${STYLE_PREFIX} A blueprint document being fed into a massive machine with gears and pistons. The machine outputs glowing lines of code from the other side. Half-mechanical, half-magical. Color palette: blue (input), orange and green (output). Industrial and mystical.`,
  },
  {
    filename: "tutorial-deploy.png",
    outputDir: "public/images/tutorials",
    prompt: `${STYLE_PREFIX} A rocket on a launchpad with 6 target indicators floating around it like a heads-up display — each target represents a deploy destination (cloud, container, server, edge). Mission control panels glow in the foreground. Color palette: green, silver, dark blue.`,
  },

  // === OG IMAGE (1) ===
  {
    filename: "og-image.png",
    outputDir: "public/images",
    prompt: `${STYLE_PREFIX} Wide format hero image for social sharing. A massive glowing forge in the center with the silhouettes of 11 heroic characters arranged around it — fantasy, sci-fi, superhero, anime genres. Sparks and energy radiate outward. Epic, mythic scale. Color palette: orange, gold, electric blue, deep purple against dark background. Landscape orientation.`,
    size: "1792x1024",
  },
];

async function generateImage(job: ImageJob): Promise<void> {
  const outputPath = path.join(
    "/Users/thomasmcleod/Projects/001 - Coding/voidforge-marketing-site",
    job.outputDir,
    job.filename
  );

  // Skip if already generated
  if (fs.existsSync(outputPath)) {
    console.log(`⏭  Skipping ${job.filename} (already exists)`);
    return;
  }

  console.log(`🎨 Generating ${job.filename}...`);

  const body = JSON.stringify({
    model: "dall-e-3",
    prompt: job.prompt,
    n: 1,
    size: job.size || "1024x1024",
    quality: "hd",
    style: "vivid",
  });

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body,
  });

  if (!response.ok) {
    const err = await response.text();
    console.error(`❌ Failed ${job.filename}: ${response.status} ${err}`);
    return;
  }

  const data = (await response.json()) as {
    data: Array<{ url: string; revised_prompt: string }>;
  };
  const imageUrl = data.data[0]?.url;
  if (!imageUrl) {
    console.error(`❌ No URL returned for ${job.filename}`);
    return;
  }

  // Download the image
  await new Promise<void>((resolve, reject) => {
    const file = fs.createWriteStream(outputPath);
    https.get(imageUrl, (res) => {
      res.pipe(file);
      file.on("finish", () => {
        file.close();
        console.log(`✅ Saved ${job.filename} (${job.outputDir})`);
        resolve();
      });
    }).on("error", (err) => {
      fs.unlink(outputPath, () => {});
      console.error(`❌ Download failed ${job.filename}: ${err.message}`);
      reject(err);
    });
  });

  // Rate limit: DALL-E 3 allows ~5 images/minute on most tiers
  await new Promise((r) => setTimeout(r, 15000));
}

async function main() {
  console.log(`\n🔥 VoidForge Image Generation Pipeline`);
  console.log(`   ${jobs.length} images to generate\n`);

  for (const job of jobs) {
    try {
      await generateImage(job);
    } catch (err) {
      console.error(`❌ Error on ${job.filename}:`, err);
    }
  }

  console.log(`\n✨ Pipeline complete. Check public/images/\n`);
}

main();
