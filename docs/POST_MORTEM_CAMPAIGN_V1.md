# Post-Mortem: Campaign v1 Premature Victory
## VoidForge Marketing Site — 2026-03-14

> **Filed by:** Picard (Architecture Review)
> **Incident:** `/campaign` declared victory with 9 MISSING and 7 PARTIAL items vs. PRD
> **Severity:** Methodology flaw — not a one-off error
> **Target audience:** VoidForge methodology maintainers (for improving `/campaign` and `/assemble`)

---

## Executive Summary

The `/campaign` command completed 3 missions against the VoidForge marketing site PRD and declared "The Prophets' plan is fulfilled. The campaign is complete." A subsequent manual audit found **9 features completely missing** and **7 partially implemented** — including character illustrations on every agent page, OG images for social sharing, hover effects, analytics events, and metadata copy errors.

The campaign didn't fail because the agents were lazy. It failed because **the methodology has structural blind spots** that made certain categories of PRD requirements invisible to the diff algorithm.

---

## What Was Missed

### MISSING (not built at all)
1. Agent silhouette/portrait illustrations (11 lead agents, comic strip panels, splash pages)
2. Tutorial page header illustrations (unique per page)
3. About page comic strip showing build sequence
4. OG images for social sharing on every page
5. `prophecy_section` scroll analytics event
6. Prophecy v4 "portal rupture" visual effect
7. Trading card "BAM! starburst" hover effect
8. `content/` directory with MDX files (content went inline instead)
9. Copy button lightning bolt emoji ("COPIED! ⚡")

### PARTIAL (exists but wrong)
1. Hero is 80vh, PRD says full-viewport (100vh)
2. Comic strip uses generic icons, PRD describes illustrated scenes
3. Universe tabs are accordions, PRD says "chapter markers with emblems"
4. Agents page metadata says "10 leads" — actually 11
5. Commands page metadata says "12 commands" — actually 13
6. Agent splash headers use gradient, PRD says "silhouette against universe color palette"
7. About page "build sequence" is a grid, PRD says "horizontal comic strip"

---

## Root Cause Analysis

### Root Cause 1: Dax's Diff Is Structural, Not Semantic

**The problem:** Step 1 of the campaign (Dax's Strategic Analysis) says:

> "Scan the codebase — what routes, schema, components, tests exist?"
> "Diff: PRD sections vs. implemented features"

This produces a diff at the **section level**: "Does `/agents` exist? Yes. Does `/patterns` have framework tabs? Yes." It does NOT read the PRD's prose descriptions and compare them to the actual rendered behavior. The diff is:

```
PRD Section 4.4 (Agent Directory) → /agents route exists → DONE ✓
```

When it should be:

```
PRD Section 4.4 says "comic-style action portrait silhouette" →
  Trading card renders initial letter in circle →
  PARTIAL: visual treatment doesn't match PRD description
```

**Why this matters:** PRDs contain two types of requirements:
1. **Structural** — "this route exists, this component renders, this data model has these fields"
2. **Semantic** — "the card has a halftone background," "there's a starburst on hover," "the hero is full-viewport," "the illustration shows a document falling into a forge"

Dax only diffs structural requirements. Semantic requirements are invisible.

**Fix:** Dax needs a second pass that reads PRD prose descriptions (UI description, edge cases, visual treatments) and checks them against component implementations. Not just "does the route exist?" but "does the component render what the PRD describes?"

---

### Root Cause 2: No External Asset Detection

**The problem:** The PRD describes illustrations, silhouettes, and OG images throughout. These require **external generation** — AI image tools, manual design, or asset procurement. The campaign methodology has no concept of "this requirement needs something Claude Code cannot produce."

The campaign sees "agent profile pages have a full-width splash page header with the agent silhouette" and interprets "splash page header" as a component (buildable) while ignoring "silhouette" as a visual detail (not diffed). But "silhouette" is an **image asset** — it requires generation outside the build protocol.

**Why this matters:** The build protocol can write TypeScript, CSS, and HTML. It cannot:
- Generate images (illustrations, portraits, OG cards)
- Create SVG illustrations from prose descriptions
- Produce design assets that require visual creativity

When the PRD requires these, the campaign should flag them as **blocked on external assets** rather than silently skipping them.

**Fix:** Add an **asset dependency scan** to Dax's analysis. Before declaring a section "DONE," check if it references any of: images, illustrations, icons (custom), SVG, portraits, photographs, OG images, favicons, or other non-code assets. If it does, flag the section as BLOCKED: EXTERNAL ASSETS REQUIRED.

---

### Root Cause 3: Victory Condition Is Binary — "Sections Exist" vs. "Sections Are Complete"

**The problem:** The campaign's victory condition (Rule 10) says:

> "Victory condition: all PRD sections implemented."

And the Prophecy Board tracks status as DONE / IN PROGRESS / NOT STARTED per PRD section. There's no concept of PARTIAL. When Dax checks "is Section 4.4 (Agent Directory) implemented?" the answer is "yes, /agents exists, trading cards render, universe tabs work." That's enough for DONE.

But DONE should mean "everything the PRD says about this section is true in the codebase," not "the route exists and the major components render."

**Why this matters:** A section can be 70% implemented and still get marked DONE because the structural skeleton is there. The missing 30% (illustrations, hover effects, metadata accuracy, visual treatments) is invisible to the binary check.

**Fix:** Change the Prophecy Board status options:
- `NOT STARTED` — nothing exists
- `STRUCTURAL` — routes exist, components render, data flows
- `COMPLETE` — every claim in the PRD prose is verified against the implementation
- `BLOCKED` — cannot complete without external input (assets, credentials, user decision)

And change the victory condition from "all sections DONE" to "all sections COMPLETE or explicitly BLOCKED with user acknowledgment."

---

### Root Cause 4: The Final Review Doesn't Re-Read the PRD

**The problem:** Step 6 (Victory) runs `/assemble --skip-build` for a "final full-project review." This triggers:
- Picard: code quality, patterns, types
- Galadriel: a11y, UX, keyboard nav, contrast
- Kenobi: security headers, XSS, CSP, secrets
- Batman: build output, links, data consistency, tests

**None of these agents re-read the PRD.** They review the codebase against their own domain standards (WCAG, OWASP, TypeScript strictness). They don't ask "does this component match what the PRD said it should look like?"

Batman comes closest — he checks data consistency (slug counts, sitemap coverage) — but he doesn't read PRD prose descriptions and compare them to component output.

**Why this matters:** The final review is the last gate before victory. If it doesn't include a PRD compliance check, then PRD deviations are never caught.

**Fix:** Add a **PRD Compliance Agent** to the final review. This agent (suggest: **Troi** — the empath who reads subtext) reads the PRD section-by-section and verifies every prose claim against the codebase. Not code quality, not security, not a11y — just "does the implementation match what was specified?"

---

### Root Cause 5: Metadata and Copy Are Nobody's Responsibility

**The problem:** The agents page metadata says "10 lead agents" when there are 11. The commands page says "12 slash commands" when there are 13. The comic strip says "9 leads" when there are 11. Nobody caught these because:

- **Picard** reviews code patterns, not marketing copy
- **Galadriel** reviews a11y and UX, not data accuracy in descriptions
- **Batman** checks link integrity and build output, but didn't grep for count claims
- **Kenobi** reviews security, not content accuracy

Copy/metadata accuracy falls in the gap between all four agents.

**Why this matters:** Inaccurate numbers on a marketing site undermine credibility. If the site says "10 agents" but the directory shows 11, users notice.

**Fix:** Add a **copy accuracy pass** to Batman's QA scope. Specifically: grep for numeric claims in page content (e.g., "10 lead agents", "12 slash commands", "53 pages") and cross-reference against actual data counts. This is automatable.

---

### Root Cause 6: Architecture Drift Is Silently Tolerated

**The problem:** The PRD specifies content in a `content/` directory as MDX files:

```
content/
├── tutorial/
│   ├── index.mdx
│   ├── install.mdx
...
```

The build put content inline in `src/app/*/page.tsx` files. This is a valid engineering decision — but it contradicts the PRD, and nobody flagged the deviation. The PRD was never updated, and the campaign didn't notice because the routes work either way.

**Why this matters:** If the PRD says one architecture and the build uses another, the PRD becomes unreliable as a source of truth. Future campaigns will inherit the same confusion.

**Fix:** When the build deviates from the PRD's stated architecture, the builder must either:
1. Update the PRD to match the new architecture (preferred), or
2. Log the deviation as a known exception in campaign-state.md

The campaign should check for unresolved deviations at victory time.

---

### Root Cause 7: The Campaign Scopes Missions by Section, Not by Requirement Type

**The problem:** Dax groups work by PRD section: "Phase 3 gaps + Phase 5 gaps → Mission 1." This means a mission bundles routes, components, data, visual treatments, and asset requirements together. When the mission runs, the buildable items get built and the non-buildable items (illustrations) silently fall off.

**Why this matters:** Mixing buildable and non-buildable requirements in the same mission guarantees that non-buildable items are lost. The mission completes (code is written), Coulson commits, and the campaign moves on — but the illustrations were never created.

**Fix:** Dax should categorize requirements by type before grouping into missions:
- **Code requirements** — routes, components, data, logic (buildable by /build)
- **Asset requirements** — images, illustrations, SVGs, fonts (require external tools)
- **Copy requirements** — marketing text, metadata, descriptions (buildable but need accuracy checks)
- **Infrastructure requirements** — DNS, env vars, deployments (require CLI/dashboard access)

Each category follows a different workflow. Code goes to `/assemble`. Assets get flagged for the user. Copy gets a dedicated accuracy pass. Infrastructure goes to `/devops`.

---

## Timeline of the Failure

| Step | What Happened | What Should Have Happened |
|------|--------------|--------------------------|
| Dax's Analysis | Diffed PRD sections against routes. Found: TOC missing, framework tabs missing, search missing, /github missing. | Should have ALSO found: illustrations missing, OG images missing, hover effects missing, metadata counts wrong. |
| Mission 1 Brief | "Build missing UI components (TOC, collapsible code, framework tabs)" | Should have included: "BLOCKED: 11 agent illustrations, comic strip art, tutorial illustrations require image generation" |
| Mission 2 Brief | "Security headers, JSON-LD, site search, event tracking" | Should have included: "BLOCKED: OG images require design/generation" |
| Mission 3 (Final Review) | 4 agents reviewed code quality, a11y, security, QA | Should have included: PRD compliance agent that re-reads every prose claim |
| Victory Declaration | "All PRD sections implemented" → Campaign Complete | Should have said: "All CODE requirements complete. 9 items BLOCKED on external assets. 5 metadata accuracy issues. Campaign paused pending asset generation." |

---

## Recommendations for `/campaign` Method Doc

### 1. Add Requirement Classification to Dax's Analysis (Step 1)

After reading the PRD, Dax should classify every requirement into:

```
| Requirement | Type | Buildable? | Status |
|-------------|------|-----------|--------|
| /agents route | Code | Yes | DONE |
| Agent silhouette illustrations | Asset | No — needs image generation | BLOCKED |
| "10 lead agents" in metadata | Copy | Yes — needs accuracy check | NEEDS REVIEW |
| OG images per page | Asset | No — needs design | BLOCKED |
| prophecy_section event | Code | Yes | NOT STARTED |
```

### 2. Add BLOCKED Status to Prophecy Board

```
| PRD Section | Status | Mission | Blocked By |
|-------------|--------|---------|------------|
| 4.4 Agents | STRUCTURAL | Mission 1 | Asset: 11 agent illustrations |
| 6 SEO | STRUCTURAL | Mission 2 | Asset: OG images |
```

### 3. Add Troi (PRD Compliance) to Final Review

When `/assemble --skip-build` runs as the victory gate, add a 5th agent:

**Troi** reads the PRD section-by-section and checks every prose claim against the implementation. She produces a checklist:

```
Section 4.4 — Agent Directory
✓ "11 lead agent cards in a responsive grid" — verified
✗ "comic-style action portrait silhouette" — MISSING: uses initial letter
✗ "BAM! starburst on hover" — MISSING: no starburst effect
✓ "universe selector tabs" — verified (accordion style)
✗ "chapter markers with the universe emblem" — PARTIAL: no emblems
```

### 4. Add Copy Accuracy Pass to Batman's QA

Batman should grep for numeric claims and cross-reference:

```bash
# Find all numeric claims in rendered content
grep -r "10 lead\|11 lead\|12 slash\|13 slash\|53 page\|68 page" src/
# Cross-reference against actual data
echo "Agents: $(grep -c 'isLead: true' src/data/agents.ts)"
echo "Commands: $(grep -c 'slug:' src/data/commands.ts)"
```

### 5. Change Victory Condition

**Current:** "Victory condition: all PRD sections implemented."

**Proposed:** "Victory condition: all PRD requirements are either COMPLETE (verified against prose descriptions) or BLOCKED (with user acknowledgment and a documented reason). No requirement may be silently skipped."

### 6. Add Deviation Log

When the build deviates from PRD architecture (e.g., inline content vs. MDX files), log it:

```markdown
## Deviations from PRD
| PRD Says | Actual | Reason | Accepted? |
|----------|--------|--------|-----------|
| content/ directory with MDX files | Inline JSX in page.tsx | Simpler build, no MDX compilation needed | Yes — PRD updated |
| Full-viewport hero (100vh) | 80vh hero | Better UX with nav visible | Pending user review |
```

---

## Impact Assessment

### What this cost
- **User trust:** User believed campaign was complete; discovering 16 gaps post-victory erodes confidence in the methodology
- **Rework:** Now needs Mission 4-6 to close gaps that should have been flagged in Mission 1
- **PRD drift:** PRD contained stale counts and wrong domain for weeks because nobody checked

### What this would have cost at scale
- On a full-stack SaaS app (not a static site), this failure mode would miss: visual designs that need Figma assets, email templates that need design, third-party integration UI that needs screenshots, onboarding flows that need illustrations, and any requirement that can't be satisfied by code alone

---

## Proposed Changes to VoidForge Methodology

### Files to Update

| File | Change |
|------|--------|
| `docs/methods/CAMPAIGN.md` | Add requirement classification, BLOCKED status, deviation log, updated victory condition |
| `.claude/commands/campaign.md` | Add Troi compliance check to Step 6, add asset scan to Step 1 |
| `docs/methods/QA_ENGINEER.md` | Add copy accuracy pass to Batman's scope |
| `docs/methods/SUB_AGENTS.md` | Add Troi (PRD Compliance) agent to the review roster |
| `docs/NAMING_REGISTRY.md` | Register Troi as a Star Trek sub-agent under Picard/Sisko |

### New Agent: Troi (PRD Compliance)

| Agent | Name | Universe | Role |
|-------|------|----------|------|
| PRD Compliance | **Troi** | Star Trek | Reads PRD prose, verifies every claim against implementation, catches visual/copy/asset gaps |

**Behavioral directive:** "I sense... a discrepancy. The PRD says one thing, but the implementation feels different. Let me read closer."

---

## Lessons Learned

1. **A route existing is not the same as a feature being complete.** Routes are structural. Features include visual treatments, copy accuracy, hover effects, illustrations, and metadata — all of which are invisible to a route-level diff.

2. **If the PRD describes something that code can't produce (images, illustrations), the campaign must flag it immediately — not silently skip it.** External asset dependencies are real dependencies.

3. **The final review must include someone who re-reads the PRD.** Code quality, a11y, security, and QA are necessary but not sufficient. PRD compliance is a separate concern.

4. **Numbers in marketing copy are claims that can be verified.** Grep for them. Cross-reference them. Automate it.

5. **Architecture deviations must be logged or the PRD corrected.** A PRD that doesn't match the implementation is worse than no PRD — it creates false confidence.

6. **"DONE" must mean "verified against the specification," not "something was shipped."** Change the vocabulary: STRUCTURAL (skeleton exists) vs. COMPLETE (specification satisfied).

---

*"The first duty of every Starfleet officer is to the truth. Whether it's scientific truth, or historical truth, or personal truth. It is the guiding principle on which Starfleet is founded."*
— Captain Jean-Luc Picard
