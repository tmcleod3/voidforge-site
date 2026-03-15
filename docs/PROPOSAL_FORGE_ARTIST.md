# Proposal: `/forge` — Dali's Image Generation Command
## A New Agent for the VoidForge Universe

> **Filed by:** Picard (Architecture Review)
> **Origin:** VoidForge Marketing Site campaign — Mission 5 proved the pipeline works
> **Status:** Proposal for VoidForge upstream integration
> **Target:** VoidForge v3.11 or v4.0

---

## The Problem We Solved (And Why It Should Be Permanent)

During the VoidForge marketing site campaign, we hit a wall. The `/campaign` command completed all code requirements but declared premature victory because **18 images were needed** — agent portraits, comic strip panels, tutorial headers, OG images — and no agent in the 170+ roster could produce them.

We solved it ad-hoc: the user provided an OpenAI API key, we wrote a generation script, called DALL-E 3 HD 18 times, downloaded the results, and wired them into components. It worked perfectly. But it was manual, unscripted, and required the user to know that image generation was even possible via API.

**This should be a first-class capability.** Every VoidForge project will eventually need images — OG cards, hero illustrations, placeholder art, favicon, app icons, marketing assets. The forge should be able to produce them.

---

## The Agent: Dali

| Field | Value |
|-------|-------|
| **Name** | Dali |
| **Real Name** | Salvador Dalí |
| **Universe** | New — **Art Universe** (or fold into Tolkien as a craftsman) |
| **Domain** | Image Generation & Visual Assets |
| **Command** | `/forge` |
| **Personality** | Surrealist genius. Sees the world differently. Transforms prose descriptions into vivid visual reality. Dramatic, confident, slightly eccentric. "The only difference between me and a madman is that I am not mad." |
| **Behavioral Directive** | Read the PRD's visual descriptions. Generate images that match the brand personality. Never produce generic stock-photo aesthetics — every image should feel like it belongs to the project's design system. Maintain style consistency across batches. |

### Why "Dali" and Not a Fictional Character?

The VoidForge universe draws from 7 fictional franchises. Image generation is a fundamentally different capability — it's not code, not architecture, not testing. It's **creation**. Salvador Dalí is the most recognizable name in surrealist art, and his personality (dramatic, confident, visionary) fits the VoidForge brand. He also represents a bridge between art and engineering — his work was mathematical, precise, and technically ambitious.

**Alternative names if staying in-universe:**
- **Celebrimbor** (Tolkien) — the greatest smith of the elves, forged the rings of power. "I forge what others can only imagine."
- **Hephaestus** (Mythology) — god of the forge. Too on-the-nose?
- **Banksy** (Real world) — street artist, anonymous, creates art that changes the environment

**Recommendation:** Celebrimbor fits the Tolkien universe, keeps the franchise alignment, and the name means "Hand of Silver" — appropriate for an artisan who shapes visual assets.

---

## The Command: `/forge`

### Usage

```
/forge                    — Scan PRD for all image requirements, generate everything
/forge --scan             — Scan only, report what's needed without generating
/forge --asset "hero"     — Generate a specific named asset
/forge --regen "sisko"    — Regenerate a specific image (overwrites existing)
/forge --style "cyberpunk" — Override the default style derived from PRD
/forge --provider gpt-image-1  — Use specific model (default: gpt-image-1)
```

### First Run: Credential Setup

```
═══════════════════════════════════════════
  CELEBRIMBOR'S FORGE — Image Generation
═══════════════════════════════════════════

  I need an OpenAI API key to generate images.
  Get one at: https://platform.openai.com/api-keys

  Enter your OpenAI API key: sk-proj-...

  ✓ Key validated (DALL-E 3 access confirmed)
  ✓ Key encrypted and stored in .voidforge/credentials.enc
  ✓ .voidforge/ added to .gitignore

  The forge is lit. Ready to create.
═══════════════════════════════════════════
```

The key is encrypted using the same AES-256-GCM vault that VoidForge already uses for credentials (see Merlin's setup wizard). Stored at `.voidforge/credentials.enc`, never committed to git.

### The Sequence

```
Step 0 — Read the PRD
  Parse visual descriptions from all sections:
  - "comic-style action portrait silhouette"
  - "tutorial page header illustration (unique per page)"
  - "OG image for social sharing"
  Extract: what images are described, what style they should be, what dimensions

Step 1 — Scan Existing Assets
  Check public/images/ for what already exists
  Diff: what's described vs. what's generated
  Produce: asset manifest with status per image

Step 2 — Style Derivation
  Read PRD Section 14 (Brand Voice & Personality) to derive the generation style
  Extract: color palette, aesthetic keywords, what to avoid
  Produce: style prefix prompt that gets prepended to every generation

Step 3 — Present the Plan
  ═══════════════════════════════════════════
    CELEBRIMBOR'S FORGE — Asset Plan
  ═══════════════════════════════════════════
    Style:   Pulp sci-fi comic book, halftone
    Model:   gpt-image-1 (HD)
    Assets:  18 images to generate
    Est:     ~5 minutes, ~$0.72 (18 × $0.04)

    ┌─────────────────────────────────────┐
    │ 11 agent portraits (1024×1024)      │
    │  3 comic strip panels (1024×1024)   │
    │  3 tutorial headers (1024×1024)     │
    │  1 OG image (1792×1024)             │
    └─────────────────────────────────────┘

    Confirm? [Y/n]
  ═══════════════════════════════════════════

Step 4 — Generate
  Call OpenAI API sequentially (rate limit aware)
  Download each image to public/images/{category}/
  Show progress: ✅ Saved galadriel.png (1/18)
  Retry failures automatically (up to 3 attempts)
  Skip existing files unless --regen flag

Step 5 — Integration Check
  Scan codebase for image references that point to generated files
  Flag any component that references an image that doesn't exist
  Suggest component updates if images were generated but not wired in

Step 6 — Report
  ═══════════════════════════════════════════
    CELEBRIMBOR'S FORGE — Complete
  ═══════════════════════════════════════════
    Generated: 18/18 images
    Retries:   2 (server errors, resolved)
    Total:     38 MB
    Cost:      ~$0.72
    Time:      4m 32s

    Next: wire images into components
          (or run /build to integrate)
  ═══════════════════════════════════════════
```

---

## Integration with Existing VoidForge Pipeline

### Where `/forge` Fits in the Build Protocol

```
Phase 0  — Orient (Picard reads PRD)
Phase 1  — Scaffold (project setup)
Phase 2  — Infrastructure
Phase 3  — Auth
Phase 4  — Core Feature
Phase 5  — Supporting Features
Phase 6  — Integrations
Phase 7  — Admin
Phase 8  — Marketing ← CELEBRIMBOR RUNS HERE
Phase 9  — QA
Phase 10 — UX ← Galadriel verifies images match brand
Phase 11 — Security
Phase 12 — Deploy
Phase 13 — Launch
```

Celebrimbor runs during **Phase 8 (Marketing)** or any phase where the PRD describes visual assets. He can also be called standalone via `/forge` at any time.

### Integration with `/campaign`

This is the critical fix from the post-mortem. When Dax classifies requirements in Step 1:

```
| Requirement | Type | Buildable? | Agent |
|-------------|------|-----------|-------|
| /agents route | Code | Yes | Stark/Galadriel |
| Agent portraits | Asset | Yes — via /forge | Celebrimbor |
| OG images | Asset | Yes — via /forge | Celebrimbor |
```

Asset requirements are no longer BLOCKED. They're routed to Celebrimbor.

### Integration with `/assemble`

Fury's pipeline adds a new phase:

```
Phase 1:  Architecture (Picard)
Phase 2:  Build (All hands)
Phase 2b: Asset Generation (Celebrimbor) ← NEW
Phase 3:  Review Round 1
...
```

### Integration with Credential Vault

VoidForge already has Merlin's encrypted credential vault (`.voidforge/credentials.enc`). Celebrimbor uses the same vault:

```typescript
// Credential storage
vault.set("OPENAI_API_KEY", key);  // encrypted AES-256-GCM
vault.get("OPENAI_API_KEY");       // decrypted at runtime
```

First run prompts for the key. Subsequent runs read from vault silently.

---

## Technical Architecture

### Asset Manifest

Celebrimbor maintains an asset manifest at `public/images/manifest.json`:

```json
{
  "generated": "2026-03-14T04:30:00Z",
  "model": "gpt-image-1",
  "style": "Pulp sci-fi comic book, Roy Lichtenstein meets 1950s Amazing Stories",
  "assets": [
    {
      "filename": "agents/galadriel.png",
      "prompt": "Portrait of an elegant elven queen...",
      "size": "1024x1024",
      "generatedAt": "2026-03-14T04:30:15Z",
      "hash": "sha256:abc123..."
    }
  ]
}
```

This enables:
- **Regeneration:** `/forge --regen galadriel` knows the original prompt
- **Style updates:** `/forge --style "watercolor"` re-runs all prompts with new style
- **Auditing:** know exactly what was generated, when, with what prompt
- **CI/CD:** verify all manifest entries have corresponding files

### PRD Scanning

Celebrimbor parses the PRD looking for visual asset requirements:

```typescript
const ASSET_PATTERNS = [
  /illustrat(ion|ed|e)/i,
  /portrait/i,
  /silhouette/i,
  /avatar/i,
  /icon.*custom/i,
  /OG image/i,
  /og:image/i,
  /hero.*image/i,
  /background.*image/i,
  /logo/i,
  /favicon/i,
  /screenshot/i,
];
```

Each match extracts: the description, the context (which page/component), and the recommended dimensions.

### Provider Abstraction

While DALL-E 3 / gpt-image-1 is the default, the architecture supports multiple providers:

```typescript
interface ImageProvider {
  name: string;
  generate(prompt: string, options: ImageOptions): Promise<Buffer>;
  validateKey(key: string): Promise<boolean>;
  estimateCost(count: number, sizes: string[]): number;
}

// Implementations
class OpenAIProvider implements ImageProvider { ... }  // DALL-E 3, gpt-image-1
class ReplicateProvider implements ImageProvider { ... } // Flux, SDXL
class MidjourneyProvider implements ImageProvider { ... } // Via API proxy
```

This lets users choose their preferred provider without changing the command interface.

---

## Sub-Agent Roster

| Agent | Name | Source | Role |
|-------|------|--------|------|
| Style Director | **Celebrimbor** | Tolkien | Reads PRD brand section, derives style prompts, maintains consistency |
| Asset Scanner | **Nori** | Tolkien (Hobbit) | Scans PRD for image requirements, diffs against existing assets |
| Prompt Engineer | **Ori** | Tolkien (Hobbit) | Crafts generation prompts from PRD descriptions, optimizes for quality |
| Integration Checker | **Dori** | Tolkien (Hobbit) | Verifies generated images are wired into components, flags orphans |

*The Dwarf company from The Hobbit — craftsmen who work with their hands.*

---

## Cost Estimation

| Provider | Model | Per Image (HD) | 18 Images | 50 Images |
|----------|-------|---------------|-----------|-----------|
| OpenAI | gpt-image-1 | $0.04 | $0.72 | $2.00 |
| OpenAI | DALL-E 3 HD | $0.08 | $1.44 | $4.00 |
| Replicate | Flux Pro | ~$0.05 | $0.90 | $2.50 |

Cost is negligible relative to development time saved.

---

## Files to Create in VoidForge Upstream

| File | Purpose |
|------|---------|
| `.claude/commands/forge.md` | Slash command definition |
| `docs/methods/FORGE_ARTIST.md` | Full method doc for Celebrimbor |
| `docs/NAMING_REGISTRY.md` | Add Celebrimbor + Nori + Ori + Dori |
| `CLAUDE.md` | Add `/forge` to command table |
| `HOLOCRON.md` | Add image generation chapter |
| `lib/image-gen.ts` | Provider abstraction + generation logic |
| `lib/asset-scanner.ts` | PRD parsing for image requirements |

---

## What This Solves

1. **The Campaign v1 blind spot:** Asset requirements are no longer invisible. Celebrimbor handles them as part of the standard pipeline.

2. **The "ask the user" bottleneck:** Instead of flagging images as BLOCKED and waiting for the user to manually generate them, the forge does it automatically.

3. **Style consistency:** The style prefix is derived from the PRD's brand section and applied to every image. No per-image style decisions.

4. **Regeneration:** If the brand evolves or a character changes, `/forge --regen` re-runs with the updated prompts.

5. **Cost transparency:** The plan step shows estimated cost before generating. No surprises.

---

## What This Doesn't Solve

- **Pixel-perfect design:** AI-generated art is good enough for marketing sites, hero images, and character portraits. It's not a replacement for a professional designer on a consumer product with specific brand guidelines.
- **SVG/vector output:** DALL-E produces raster images. If the project needs scalable vectors, a different pipeline (Figma, manual SVG) is still needed.
- **Photo-realistic product shots:** If the PRD needs screenshots of the actual app, those should come from the running application, not AI generation.

---

## Recommended Universe Placement

**Option A (Recommended): Expand Tolkien**
Celebrimbor is already a Tolkien character (Silmarillion). Add Nori, Ori, Dori from The Hobbit as sub-agents. Total: 4 new Tolkien characters. This keeps the universe count at 7 and adds depth to the existing Tolkien roster.

**Option B: New Universe — Art/Renaissance**
Create an 8th universe for visual artists: Dalí, Frida, Banksy, Escher. This would be the first "real-world" universe, breaking the fiction-only pattern. Not recommended — it dilutes the brand identity.

---

## Example: How It Would Have Changed the Marketing Site Campaign

### Before (what happened)
```
Dax: "Phase 3 gaps → Mission 1: TOC, framework tabs, collapsible code"
      (silently ignores: tutorial header illustrations)

Dax: "Phase 6 gaps → Mission 2: JSON-LD, search, events"
      (silently ignores: OG images)

Victory: "Campaign complete!" (9 items missing)

User: "What about the images?"

Manual fix: User provides API key → ad-hoc script → 18 images → Mission 5
```

### After (with /forge)
```
Dax: "Phase 3 gaps → Mission 1: TOC, framework tabs, collapsible code"
Dax: "Phase 3 assets → Celebrimbor: 3 tutorial header illustrations"

Fury deploys Mission 1:
  Phase 2:  Stark + Galadriel build components
  Phase 2b: Celebrimbor generates 3 tutorial headers
  Phase 3:  Picard reviews code + images

Dax: "Phase 6 gaps → Mission 2: JSON-LD, search, events"
Dax: "Phase 6 assets → Celebrimbor: OG images"

Victory: "Campaign complete!" (0 items missing)
```

**Zero manual intervention. Zero premature victories. The forge handles it all.**

---

*"I am the greatest craftsman that ever lived. I forged the Three Rings. I can certainly forge a PNG."*
— Celebrimbor (probably)
