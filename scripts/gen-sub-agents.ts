/**
 * Generate 37 sub-agent headshots via DALL-E 3
 * Small portraits (1024x1024), displayed at 40px — style-consistent
 * Run: OPENAI_API_KEY=... npx tsx scripts/gen-sub-agents.ts
 */
import fs from "fs";
import path from "path";
import https from "https";

const API_KEY = process.env.OPENAI_API_KEY;
if (!API_KEY) { console.error("Set OPENAI_API_KEY"); process.exit(1); }

const STYLE = "Pulp sci-fi comic book portrait, Roy Lichtenstein style, bold black outlines, halftone dot shading, vibrant colors, dramatic lighting. Head and shoulders only, square format. No text.";

const agents = [
  // Tolkien
  { name: "bilbo", prompt: `${STYLE} A cheerful hobbit with curly hair, round face, cozy waistcoat, holding a quill pen. Warm brown and green tones.` },
  { name: "elrond", prompt: `${STYLE} A noble elf lord with long dark hair, circlet on brow, wise stern expression. Deep blue and silver tones.` },
  { name: "arwen", prompt: `${STYLE} A beautiful elven princess with long dark hair, starlight in her eyes, gentle expression. Silver and twilight blue tones.` },
  { name: "samwise", prompt: `${STYLE} A sturdy, loyal hobbit gardener with sandy curly hair, determined expression, earthy features. Brown and green tones.` },
  { name: "legolas", prompt: `${STYLE} An elven archer with long blonde hair, sharp features, keen eyes, quiver on back. Forest green and gold tones.` },
  { name: "gimli", prompt: `${STYLE} A stout dwarf warrior with massive red beard, battle helmet, fierce proud expression. Iron gray and red tones.` },
  { name: "gandalf", prompt: `${STYLE} An ancient wizard with long white beard, pointed hat, wise twinkling eyes, staff. Gray and white with blue sparks.` },
  { name: "merlin", prompt: `${STYLE} A younger wizard in star-patterned robes, mischievous smile, crystal orb in hand. Purple and blue tones.` },
  // Marvel
  { name: "banner", prompt: `${STYLE} A nervous scientist with messy dark hair, glasses, lab coat, hint of green tinge to skin. Green and white tones.` },
  { name: "romanoff", prompt: `${STYLE} A fierce female spy with short red hair, black tactical suit, confident smirk. Black and red tones.` },
  { name: "pepper", prompt: `${STYLE} A professional businesswoman with strawberry blonde hair, sharp suit, composed authority. Blue and white tones.` },
  // DC
  { name: "oracle", prompt: `${STYLE} A brilliant red-haired woman with glasses at a massive computer array, multiple screens glowing. Green and purple tones.` },
  { name: "red-hood", prompt: `${STYLE} A masked vigilante with a red helmet/hood, leather jacket, dangerous energy. Red and black tones.` },
  { name: "alfred", prompt: `${STYLE} An distinguished elderly butler with neat gray hair, impeccable suit, gentle knowing expression. Black and white tones.` },
  { name: "nightwing", prompt: `${STYLE} A young athletic hero in black suit with blue chest emblem, domino mask, confident grin. Blue and black tones.` },
  { name: "deathstroke", prompt: `${STYLE} A masked mercenary with half-orange half-black mask, single eye visible, armored suit. Orange and black tones.` },
  { name: "constantine", prompt: `${STYLE} A trenchcoat-wearing occult detective with blonde messy hair, cigarette, cynical smirk. Tan and amber tones.` },
  { name: "lucius", prompt: `${STYLE} A distinguished African-American businessman and inventor with glasses, silver temples, warm smile. Navy and gold tones.` },
  // Star Wars
  { name: "leia", prompt: `${STYLE} A royal princess-turned-general with braided brown hair, white robes, regal bearing. White and silver tones.` },
  { name: "chewie", prompt: `${STYLE} A tall furry Wookiee warrior with bandolier across chest, loyal fierce eyes. Brown and tan tones.` },
  { name: "rex", prompt: `${STYLE} A battle-scarred clone trooper captain with close-cropped blonde hair, blue-marked armor. Blue and white tones.` },
  { name: "maul", prompt: `${STYLE} A red and black tattooed horned warrior with yellow eyes, menacing scowl. Red and black tones.` },
  { name: "yoda", prompt: `${STYLE} A small ancient green-skinned alien master with large ears, wise peaceful expression. Green and brown tones.` },
  { name: "windu", prompt: `${STYLE} A stern African-American warrior monk with bald head, intense gaze, purple energy. Purple and brown tones.` },
  { name: "ahsoka", prompt: `${STYLE} A young alien warrior with orange skin, blue and white head-tails, facial markings. Orange and blue tones.` },
  { name: "padmé", prompt: `${STYLE} A regal queen and senator with elaborate dark hair, ornate robes, determined expression. Royal purple and gold tones.` },
  // Star Trek
  { name: "data", prompt: `${STYLE} An android officer with pale gold skin, yellow eyes, Starfleet uniform, curious expression. Gold and blue tones.` },
  { name: "riker", prompt: `${STYLE} A tall bearded first officer in Starfleet uniform, confident commanding smile. Red and blue tones.` },
  { name: "la-forge", prompt: `${STYLE} An African-American engineer with a silver visor over his eyes, warm smile, gold uniform. Gold and silver tones.` },
  // Dune
  { name: "paul", prompt: `${STYLE} A young intense man with blue-within-blue eyes, stillsuit, messianic bearing. Blue and sand tones.` },
  { name: "stilgar", prompt: `${STYLE} A weathered desert warrior leader with dark beard, deep blue eyes, Fremen stillsuit. Sand and blue tones.` },
  { name: "irulan", prompt: `${STYLE} A blonde princess in formal royal robes, writing with a golden pen, analytical expression. Gold and white tones.` },
  // Anime
  { name: "vegeta", prompt: `${STYLE} A proud anime warrior prince with tall spiky black hair, intense scowl, battle armor. Blue and gold tones.` },
  { name: "senku", prompt: `${STYLE} A wild-haired anime scientist with green-tipped white hair, excited grin, lab goggles. Green and white tones.` },
  { name: "levi", prompt: `${STYLE} A short intense anime soldier with undercut black hair, cold sharp eyes, military cape. Gray and green tones.` },
  { name: "spike", prompt: `${STYLE} A lanky anime bounty hunter with wild dark hair, cigarette, laid-back cool expression. Blue and yellow tones.` },
  { name: "strange", prompt: `${STYLE} A mystical anime sorcerer with a red cape, glowing geometric symbols around hands. Red and gold tones.` },
];

const ROOT = "/Users/thomasmcleod/Projects/001 - Coding/voidforge-marketing-site";
const OUT = path.join(ROOT, "public/images/agents/subs");

async function gen(agent: typeof agents[0]) {
  const filepath = path.join(OUT, `${agent.name}.png`);
  if (fs.existsSync(filepath)) { console.log(`⏭  ${agent.name}`); return; }
  console.log(`🎨 ${agent.name}...`);
  try {
    const r = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: { Authorization: `Bearer ${API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model: "dall-e-3", prompt: agent.prompt, n: 1, size: "1024x1024", quality: "standard", style: "vivid" }),
    });
    if (!r.ok) { console.error(`❌ ${agent.name}: ${r.status}`); return; }
    const d = (await r.json()) as { data: Array<{ url: string }> };
    const url = d.data[0]?.url;
    if (!url) { console.error(`❌ ${agent.name}: no url`); return; }
    await new Promise<void>((res, rej) => {
      const f = fs.createWriteStream(filepath);
      https.get(url, r => { r.pipe(f); f.on("finish", () => { f.close(); console.log(`✅ ${agent.name}`); res(); }); }).on("error", rej);
    });
  } catch (e) { console.error(`❌ ${agent.name}:`, e); }
  await new Promise(r => setTimeout(r, 13000));
}

async function main() {
  console.log(`\n🎨 Generating ${agents.length} sub-agent headshots\n`);
  fs.mkdirSync(OUT, { recursive: true });
  for (const a of agents) { await gen(a); }
  console.log(`\n✨ Done.\n`);
}
main();
