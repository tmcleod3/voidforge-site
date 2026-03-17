/**
 * VoidForge Deep Roster — Sub-Agent Portrait Generation
 * Uses OpenAI DALL-E 3 to generate portraits for the Deep Roster agents.
 * Run: source .env.local && npx tsx scripts/generate-deep-roster.ts
 */

import fs from "fs";
import path from "path";
import https from "https";

const API_KEY = process.env.OPENAI_API_KEY;
if (!API_KEY) {
  console.error("Set OPENAI_API_KEY in .env.local");
  process.exit(1);
}

const BASE_DIR = "/Users/thomasmcleod/Projects/001 - Coding/voidforge-marketing-site";
const OUTPUT_DIR = "public/images/agents/subs";

const STYLE_PREFIX =
  "Pulp sci-fi comic book illustration style, inspired by Roy Lichtenstein and 1950s Amazing Stories magazine covers. Bold black outlines, halftone dot shading, vibrant saturated colors, dramatic lighting. No text or words in the image. Square format, head-and-shoulders portrait.";

interface AgentPortrait {
  filename: string;
  prompt: string;
}

const portraits: AgentPortrait[] = [
  // === TOLKIEN (8) ===
  {
    filename: "aragorn.png",
    prompt: `${STYLE_PREFIX} A rugged ranger-king with dark hair, a worn cloak, and a reforged sword. Noble bearing despite weathered appearance. Color palette: deep green, silver, warm brown. Forest background. Tolkien fantasy aesthetic.`,
  },
  {
    filename: "boromir.png",
    prompt: `${STYLE_PREFIX} A proud warrior-captain in battle armor with a cloven horn. Strong jaw, reddish-brown hair, conflicted expression. Color palette: gold, red, steel gray. Medieval fortress background. Tolkien fantasy aesthetic.`,
  },
  {
    filename: "faramir.png",
    prompt: `${STYLE_PREFIX} A thoughtful ranger-scholar in leather armor with a bow. Gentler than his brother, wise eyes, brown hair. Color palette: forest green, brown, silver. Woodland glade background. Tolkien fantasy aesthetic.`,
  },
  {
    filename: "frodo.png",
    prompt: `${STYLE_PREFIX} A brave hobbit with curly dark hair, large blue eyes, and a glowing pendant around his neck. Small but determined. Color palette: warm brown, mithril silver, blue glow. Mountain pass background. Tolkien fantasy aesthetic.`,
  },
  {
    filename: "glorfindel.png",
    prompt: `${STYLE_PREFIX} A radiant golden-haired elf lord in gleaming white and gold armor. Ancient, powerful, emanating light. Color palette: gold, white, ethereal blue. Elvish architecture background. Tolkien fantasy aesthetic.`,
  },
  {
    filename: "haldir.png",
    prompt: `${STYLE_PREFIX} A stern elvish border guard with silver-blonde hair and a bow. Wears the grey cloak of Lothlórien. Watchful, disciplined expression. Color palette: silver, grey, forest green. Golden wood trees background. Tolkien fantasy aesthetic.`,
  },
  {
    filename: "merry.png",
    prompt: `${STYLE_PREFIX} A cheerful hobbit with reddish-brown curly hair, wearing a small suit of armor too big for him. Brave smile, mischievous eyes. Color palette: green, gold, warm brown. Rolling hills background. Tolkien fantasy aesthetic.`,
  },
  {
    filename: "pippin.png",
    prompt: `${STYLE_PREFIX} A young, curious hobbit with sandy curly hair and an impish grin. Wears an oversized guard uniform. Endearingly reckless energy. Color palette: warm gold, green, cream. Stone tower background. Tolkien fantasy aesthetic.`,
  },

  // === MARVEL (9) ===
  {
    filename: "t'challa.png",
    prompt: `${STYLE_PREFIX} A regal African king in a sleek black vibranium suit with purple energy accents. Dignified, powerful stance. Color palette: black, purple, silver. Futuristic African city background. Marvel superhero aesthetic.`,
  },
  {
    filename: "wanda.png",
    prompt: `${STYLE_PREFIX} A powerful sorceress with flowing red hair and red energy swirling from her hands. Mystical crown headpiece. Color palette: scarlet red, dark red, black. Chaotic energy background. Marvel superhero aesthetic.`,
  },
  {
    filename: "shuri.png",
    prompt: `${STYLE_PREFIX} A brilliant young African princess-engineer with braided hair and vibranium gauntlets. Confident, inventive expression. Color palette: blue, purple, gold. High-tech laboratory background. Marvel superhero aesthetic.`,
  },
  {
    filename: "rocket.png",
    prompt: `${STYLE_PREFIX} A tough, scrappy raccoon-like creature in tactical gear holding an oversized weapon. Smirking, sarcastic expression. Color palette: brown, orange, metallic gray. Spaceship interior background. Marvel sci-fi aesthetic.`,
  },
  {
    filename: "okoye.png",
    prompt: `${STYLE_PREFIX} A fierce African warrior general with a shaved head and a vibranium spear. Stoic, loyal, lethal. Color palette: gold, red, black. Royal guard formation background. Marvel superhero aesthetic.`,
  },
  {
    filename: "falcon.png",
    prompt: `${STYLE_PREFIX} An athletic man with mechanical wings spread wide, wearing a red and silver flight suit. Heroic, determined expression. Color palette: red, white, silver. Blue sky with clouds background. Marvel superhero aesthetic.`,
  },
  {
    filename: "bucky.png",
    prompt: `${STYLE_PREFIX} A rugged soldier with a cybernetic metal arm, dark hair, and haunted but determined eyes. Tactical gear. Color palette: dark blue, silver, black. Industrial shadows background. Marvel superhero aesthetic.`,
  },
  {
    filename: "hill.png",
    prompt: `${STYLE_PREFIX} A sharp, no-nonsense woman in a dark tactical suit with an earpiece and tablet. Short dark hair, watchful eyes. Color palette: navy, black, steel blue. Command center background. Marvel spy aesthetic.`,
  },
  {
    filename: "jarvis.png",
    prompt: `${STYLE_PREFIX} An elegant AI interface rendered as a glowing blue holographic butler figure. Clean lines, transparent, data streams visible. Color palette: electric blue, white, soft gold. Holographic display background. Marvel tech aesthetic.`,
  },

  // === DC (11) ===
  {
    filename: "cyborg.png",
    prompt: `${STYLE_PREFIX} A young man who is half-human, half-machine with glowing red cybernetic eye and metallic body. Powerful but conflicted. Color palette: silver, red, dark blue. Circuit board pattern background. DC superhero aesthetic.`,
  },
  {
    filename: "raven.png",
    prompt: `${STYLE_PREFIX} A hooded mystic young woman with pale skin, dark hair, and glowing dark energy around her hands. Purple cloak, floating cross-legged. Color palette: deep purple, black, indigo. Dark dimensional portal background. DC superhero aesthetic.`,
  },
  {
    filename: "wonder-woman.png",
    prompt: `${STYLE_PREFIX} A powerful Amazonian warrior princess with dark hair, golden tiara, and bracelets of submission. Holds a lasso of golden light. Color palette: red, gold, blue. Ancient Greek temple background. DC superhero aesthetic.`,
  },
  {
    filename: "flash.png",
    prompt: `${STYLE_PREFIX} A speedster in a bright red suit with lightning bolt emblem, surrounded by crackling electricity. Blurred motion lines. Color palette: scarlet red, yellow lightning, white. Speed force energy background. DC superhero aesthetic.`,
  },
  {
    filename: "batgirl.png",
    prompt: `${STYLE_PREFIX} A young woman in a bat-themed costume with a cape and cowl, holding a batarang. Athletic, smart, determined. Color palette: purple, black, yellow accents. Gotham rooftop background. DC superhero aesthetic.`,
  },
  {
    filename: "green-arrow.png",
    prompt: `${STYLE_PREFIX} A hooded archer in dark green with a quiver and compound bow. Goatee, intense eyes, urban vigilante. Color palette: forest green, black, dark gold. City skyline background. DC superhero aesthetic.`,
  },
  {
    filename: "green-lantern.png",
    prompt: `${STYLE_PREFIX} A man in a green and black suit projecting glowing green energy constructs from a ring. Willpower made manifest. Color palette: emerald green, black, white glow. Space with distant planets background. DC superhero aesthetic.`,
  },
  {
    filename: "huntress.png",
    prompt: `${STYLE_PREFIX} A dark-haired woman in purple and black tactical gear with a crossbow. Fierce, vengeful expression. Color palette: purple, black, silver. Dark alley background. DC superhero aesthetic.`,
  },
  {
    filename: "aquaman.png",
    prompt: `${STYLE_PREFIX} A powerful bearded man with long hair in golden scale armor, wielding a trident. Oceanic king. Color palette: gold, aqua green, deep blue. Underwater kingdom background. DC superhero aesthetic.`,
  },
  {
    filename: "superman.png",
    prompt: `${STYLE_PREFIX} An iconic hero in blue suit with red cape, bold S-shield on chest. Strong jaw, confident, hopeful expression. Color palette: blue, red, yellow. Sunlit sky background. DC superhero aesthetic.`,
  },
  {
    filename: "martian-manhunter.png",
    prompt: `${STYLE_PREFIX} A tall green-skinned alien shapeshifter in a blue cape with red X-shaped chest harness. Stoic, wise expression. Color palette: green, blue, red. Martian landscape background. DC superhero aesthetic.`,
  },

  // === STAR WARS (8) ===
  {
    filename: "han.png",
    prompt: `${STYLE_PREFIX} A roguish smuggler pilot with a cocky grin, vest over white shirt, blaster at hip. Disheveled hair, devil-may-care attitude. Color palette: brown, tan, black. Spaceship cockpit background. Star Wars aesthetic.`,
  },
  {
    filename: "cassian.png",
    prompt: `${STYLE_PREFIX} A serious intelligence officer in a dark rebel jacket. Dark hair, calculating eyes, covert operative. Color palette: olive green, dark brown, black. Rainy urban planet background. Star Wars spy aesthetic.`,
  },
  {
    filename: "qui-gon.png",
    prompt: `${STYLE_PREFIX} A tall, wise warrior monk with long hair and a beard, holding a green energy sword. Serene but powerful. Color palette: brown robes, green glow, earth tones. Forest temple background. Star Wars aesthetic.`,
  },
  {
    filename: "sabine.png",
    prompt: `${STYLE_PREFIX} A colorful Mandalorian warrior-artist with painted armor in bright orange, purple, and teal. Short colorful hair. Color palette: vibrant multicolor armor, warm skin tones. Graffiti-covered wall background. Star Wars rebel aesthetic.`,
  },
  {
    filename: "bail-organa.png",
    prompt: `${STYLE_PREFIX} A dignified senator-diplomat in formal blue robes with a calm, principled expression. Dark hair with grey temples. Color palette: royal blue, white, silver. Senate chamber background. Star Wars political aesthetic.`,
  },
  {
    filename: "anakin.png",
    prompt: `${STYLE_PREFIX} A young warrior with conflicted expression, dark robes, a scar across one eye, wielding a blue energy sword. Color palette: dark brown, blue glow, amber eyes. Volcanic planet background. Star Wars aesthetic.`,
  },
  {
    filename: "bo-katan.png",
    prompt: `${STYLE_PREFIX} A fierce red-haired Mandalorian warrior woman in blue and grey beskar armor with owl-themed helmet under arm. Color palette: blue, grey, red hair. Mandalorian warship background. Star Wars aesthetic.`,
  },
  {
    filename: "din-djarin.png",
    prompt: `${STYLE_PREFIX} A lone bounty hunter in full silver beskar Mandalorian armor, T-visor helmet, worn cape. Never removes helmet. Color palette: silver, dark brown, weathered metal. Desert canyon background. Star Wars aesthetic.`,
  },

  // === STAR TREK (8) ===
  {
    filename: "troi.png",
    prompt: `${STYLE_PREFIX} An empathic counselor with long dark curly hair in a blue-toned Starfleet uniform. Warm, perceptive eyes. Color palette: blue, purple, warm skin tones. Starship ready room background. Star Trek aesthetic.`,
  },
  {
    filename: "wong.png",
    prompt: `${STYLE_PREFIX} A disciplined martial arts master and librarian in robes, guarding ancient texts and scrolls. Calm, watchful. Color palette: saffron orange, brown, gold. Mystical library background. Martial arts aesthetic.`,
  },
  {
    filename: "janeway.png",
    prompt: `${STYLE_PREFIX} A commanding female starship captain with auburn hair pulled back, holding a coffee cup. Resolute, brilliant. Color palette: red and black uniform, warm lighting. Starship bridge background. Star Trek aesthetic.`,
  },
  {
    filename: "tuvok.png",
    prompt: `${STYLE_PREFIX} A dark-skinned Vulcan security officer with pointed ears, serene but formidable. Yellow and black uniform. Color palette: gold, black, warm brown. Starship tactical station background. Star Trek aesthetic.`,
  },
  {
    filename: "crusher.png",
    prompt: `${STYLE_PREFIX} A red-haired female doctor in a blue medical Starfleet uniform with a medical scanner. Compassionate, intelligent. Color palette: blue, red hair, medical white. Sickbay background. Star Trek aesthetic.`,
  },
  {
    filename: "archer.png",
    prompt: `${STYLE_PREFIX} An early-era starship captain in a blue jumpsuit-style uniform. Brown hair, adventurous spirit, water polo build. Color palette: blue, silver, warm lighting. Early Starfleet bridge background. Star Trek aesthetic.`,
  },
  {
    filename: "kim.png",
    prompt: `${STYLE_PREFIX} A young Asian operations officer in gold and black Starfleet uniform at a console. Eager, earnest, talented. Color palette: gold, black, blue console glow. Starship operations station background. Star Trek aesthetic.`,
  },
  {
    filename: "pike.png",
    prompt: `${STYLE_PREFIX} A charismatic starship captain with silver-streaked hair and a confident smile in gold command uniform. Natural leader. Color palette: gold, black, warm amber. Starship captain's chair background. Star Trek aesthetic.`,
  },

  // === ANIME (9) ===
  {
    filename: "valkyrie.png",
    prompt: `${STYLE_PREFIX} A fierce Norse warrior woman with braided hair, winged armor, and a glowing sword. Battle-hardened but noble. Color palette: silver, ice blue, white. Asgardian battlefield background. Norse mythology anime aesthetic.`,
  },
  {
    filename: "trunks.png",
    prompt: `${STYLE_PREFIX} A young warrior with lavender hair and a sword on his back, wearing a Capsule Corp jacket. Determined from a dark future. Color palette: purple hair, blue jacket, orange. Ruined city background. Dragon Ball anime aesthetic.`,
  },
  {
    filename: "mikasa.png",
    prompt: `${STYLE_PREFIX} A stoic young woman soldier with short black hair and a red scarf, wearing vertical maneuvering gear with dual blades. Color palette: white, brown, red scarf accent. Walled city background. Attack on Titan anime aesthetic.`,
  },
  {
    filename: "erwin.png",
    prompt: `${STYLE_PREFIX} A tall blond military commander with intense blue eyes and a green cloak with wings emblem. Strategic genius, willing to sacrifice. Color palette: green, brown, blonde. Military command tent background. Attack on Titan anime aesthetic.`,
  },
  {
    filename: "mustang.png",
    prompt: `${STYLE_PREFIX} A dark-haired military officer with white gloves that create fire. Ambitious, smart, snapping fingers with flame. Color palette: blue military uniform, orange flame, black. Military office background. Fullmetal Alchemist anime aesthetic.`,
  },
  {
    filename: "olivier.png",
    prompt: `${STYLE_PREFIX} A fierce blonde woman general in a blue military uniform with a sword. Ice-cold demeanor, northern fortress commander. Color palette: blue uniform, platinum blonde, white snow. Frozen fortress background. Fullmetal Alchemist anime aesthetic.`,
  },
  {
    filename: "hughes.png",
    prompt: `${STYLE_PREFIX} A bespectacled military intelligence officer with dark hair, always showing photos of his family. Warm but deadly smart. Color palette: blue uniform, glasses glint, warm brown. Intelligence office background. Fullmetal Alchemist anime aesthetic.`,
  },
  {
    filename: "calcifer.png",
    prompt: `${STYLE_PREFIX} A small, expressive fire demon with a face in the flames. Mischievous, orange and blue flickering. Color palette: orange, yellow, blue core. Fireplace hearth background. Studio Ghibli anime aesthetic.`,
  },
  {
    filename: "duo.png",
    prompt: `${STYLE_PREFIX} A grinning young pilot with a long chestnut braid and priest collar, holding dynamite. God of Death persona, cheerful. Color palette: black outfit, chestnut hair, bright grin. Gundam mech hangar background. Gundam Wing anime aesthetic.`,
  },
];

async function generateImage(portrait: AgentPortrait): Promise<boolean> {
  const outputPath = path.join(BASE_DIR, OUTPUT_DIR, portrait.filename);

  if (fs.existsSync(outputPath)) {
    console.log(`⏭  Skipping ${portrait.filename} (already exists)`);
    return true;
  }

  console.log(`🎨 Generating ${portrait.filename}...`);

  const body = JSON.stringify({
    model: "dall-e-3",
    prompt: portrait.prompt,
    n: 1,
    size: "1024x1024",
    quality: "hd",
    style: "vivid",
  });

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
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
        console.error(`❌ Attempt ${attempt}/3 failed for ${portrait.filename}: ${response.status} ${err}`);
        if (attempt < 3) {
          await new Promise((r) => setTimeout(r, 30000));
          continue;
        }
        return false;
      }

      const data = (await response.json()) as {
        data: Array<{ url: string; revised_prompt: string }>;
      };
      const imageUrl = data.data[0]?.url;
      if (!imageUrl) {
        console.error(`❌ No URL returned for ${portrait.filename}`);
        return false;
      }

      await new Promise<void>((resolve, reject) => {
        const file = fs.createWriteStream(outputPath);
        https.get(imageUrl, (res) => {
          res.pipe(file);
          file.on("finish", () => {
            file.close();
            const size = fs.statSync(outputPath).size;
            console.log(`✅ Saved ${portrait.filename} (${(size / 1024).toFixed(0)}KB)`);
            resolve();
          });
        }).on("error", (err) => {
          fs.unlink(outputPath, () => {});
          reject(err);
        });
      });

      // Rate limit: ~5 images/minute
      await new Promise((r) => setTimeout(r, 15000));
      return true;
    } catch (err) {
      console.error(`❌ Attempt ${attempt}/3 error for ${portrait.filename}:`, err);
      if (attempt < 3) await new Promise((r) => setTimeout(r, 30000));
    }
  }
  return false;
}

async function main() {
  const existing = fs.readdirSync(path.join(BASE_DIR, OUTPUT_DIR));
  const needed = portraits.filter((p) => !existing.includes(p.filename));

  console.log(`\n🔥 VoidForge Deep Roster — Portrait Generation`);
  console.log(`   ${portraits.length} total portraits`);
  console.log(`   ${portraits.length - needed.length} already exist`);
  console.log(`   ${needed.length} to generate`);
  console.log(`   Est: ~$${(needed.length * 0.08).toFixed(2)} | ~${Math.ceil(needed.length * 20 / 60)} minutes\n`);

  let success = 0;
  let failed = 0;

  for (const portrait of portraits) {
    const ok = await generateImage(portrait);
    if (ok) success++;
    else failed++;
  }

  console.log(`\n✨ Deep Roster complete: ${success} generated, ${failed} failed\n`);
}

main();
