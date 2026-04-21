# Site Update Spec — voidforge.build

**Generated:** 2026-04-20 by Claude Opus 4.7 (1M) session on the scaffold repo
**Source-of-truth version:** scaffold @ v23.9.2 (commit `b9ccfdb`)
**Scope:** all rendered content on voidforge.build — landing, tutorials, data files, tests
**Producer session (scaffold) commit that ends this spec:** `2d753ca` in this repo

This document enumerates every change required on the marketing site to match the current v23.9.2 state of the scaffold. It is the output of three parallel agent audits (Drax exact-match, Troi claim compliance, Galadriel UX). Each item is ranked by severity and annotated with exact file/line + current/target text. Execute in order unless noted.

---

## Executive summary

The rename to `voidforge-build` has landed in **active rendered pages** (landing install-section, feature-cards, hero spotlight, 6 tutorial pages, npm links). Commit `2d753ca` on this repo is live on `origin/main`. If voidforge.build does not show the changes, the Vercel deploy is the culprit (stuck build, cache, or config) — NOT the code.

What still needs work:
- **3 CRITICAL items** — broken install flow on landing, missing `/verify` page, missing migration guide
- **7 HIGH items** — CTA fork, tutorial naming inconsistency, missing prereqs, off-count stats
- **9 MEDIUM items** — doc gaps, copy polish, layout bugs, stale data
- **5 LOW items** — small UX refinements

The data-layer drift (agents.ts +2, patterns.ts +5, stats.ts ADR count -12) is silently wrong on every page that renders these counts.

---

## Section A — Critical (ship-blockers for "the site is accurate")

### A.1 Landing install section is a dead-end
**File:** `src/components/landing/install-section.tsx`
**Current:** shows `npx voidforge-build init my-app` + `npm install -g voidforge-build` with copy buttons. No follow-up.
**Required:** after the `npx` command, add a second copyable block: `cd my-app && claude` (or split into two adjacent blocks with individual copies). Users who copy-paste currently sit at a shell prompt with no next step.
**Source of truth:** scaffold/README.md install block lines 15-27 which chains `init → cd → claude → /prd`.

### A.2 Provenance promise with no verification path
**File new:** `src/app/tutorial/verify/page.tsx` (or `/provenance`)
**Context:** hero spotlight claims "SLSA provenance attestation signed in sigstore's transparency log — cryptographic proof that what you install was built from this repo by the real workflow." There is no page explaining HOW a user verifies.
**Required content:** a tutorial page with these commands (tested against the live packages):
```bash
# Install first
npm install voidforge-build

# Verify provenance via npm audit signatures (npm 9.5+)
npm audit signatures

# Or fetch the attestation directly
npm view voidforge-build@23.9.2 --json | jq '.dist.attestations'

# Full SLSA predicate on sigstore
# https://search.sigstore.dev/?logIndex=1343916609
```
Link from hero spotlight (add a "How to verify ↗" link).

### A.3 No migration guide for legacy users
**File new:** `src/app/tutorial/migrate/page.tsx`
**Context:** v23.9.0-23.9.2 release entry documents that `thevoidforge` + `thevoidforge-methodology` are deprecated and legacy CLIs print a migration banner on every run. There is no URL to land on when users read that banner.
**Required content:**
```bash
# For global CLI users
npm uninstall -g thevoidforge @voidforge/cli voidforge 2>/dev/null
npm install -g voidforge-build@latest

# For projects depending on methodology
# In package.json, rename:
#   "thevoidforge-methodology" → "voidforge-build-methodology"
#   "@voidforge/methodology"    → "voidforge-build-methodology"
npm install
```
Explain: bin name `voidforge` is unchanged — all commands still work. Link from the header announcement bar (if present) and from the /tutorial hub.

---

## Section B — High (factual/functional gaps)

### B.1 CTA fork — hero and header disagree
**Files:** `src/components/landing/hero.tsx:82-84` + `src/components/header.tsx` (verify)
**Current:** Hero CTA "FORGE YOUR FIRST APP →" routes to `/tutorial`. Header "Get Started" routes to `/tutorial/install`.
**Required:** Route hero CTA to `/tutorial/install` (matches header, gets users to the actual command fastest). Or rename header to "Tutorials" + route to `/tutorial`. Pick one.

### B.2 Project-name inconsistency across tutorials
**Files:**
- `src/app/tutorial/install/page.tsx` uses `my-app`
- `src/app/tutorial/wizard/page.tsx` uses `my-project`
- `src/app/tutorial/scaffold/page.tsx` uses `my-project`
- `src/app/tutorial/blueprint/page.tsx` uses `my-project`
- `src/app/tutorial/import/page.tsx` uses `my-project`
- `src/app/tutorial/first-build/page.tsx` — check and align
- `src/app/tutorial/deploy/page.tsx` uses `my-project`

**Required:** Replace-all `my-project` → `my-app` across the 6 tutorial pages listed. Rationale: shorter, matches landing/install, no broken copy-paste chains.

### B.3 Install page's "CREATE A PROJECT" block has broken flow
**File:** `src/app/tutorial/install/page.tsx:155-158`
**Current:** a single `crt-terminal` block contains three commands (`cd my-app`, `claude`, `/build`) with no copy buttons; the third line implies `/build` works on an empty project.
**Required:**
1. Split into three blocks, each with its own `<CopyButton>` for `cd my-app` and `claude` (the `/build` line is misleading — remove it).
2. Replace the `/build` line with a cross-link: *"Next: write your PRD → [/tutorial/first-build](/tutorial/first-build)"*.
**Rationale:** Users currently can't copy step 2+3 individually. And `/build` without a PRD will fail — it's not the first command to run.

### B.4 Wizard page missing Claude Code prereq
**File:** `src/app/tutorial/wizard/page.tsx` (top, before first code block ~line 95-100)
**Current:** Wizard page shows `npx voidforge-build init my-project` as the first action without stating Claude Code is required.
**Required:** add a prereq callout mirroring install page:
> **Prerequisites:** Node ≥20.11, git, and [Claude Code](https://claude.com/claude-code) (provides the `claude` command you'll run after the wizard creates your project).

### B.5 Data drift — agent count off by 2
**File:** `src/data/agents.ts`
**Current:** computes `stats.totalAgents` = 266 (22 leads + 244 sub-agents)
**Target:** 264 (matches `ls .claude/agents/*.md | wc -l` in scaffold)
**Required:** Audit the 22 leads against CLAUDE.md's 20-row lead table. Two entries in the agents.ts leads array (likely Haku + Bombadil) are duplicated with their materialized agent files. Remove the duplicates OR reconcile the counting logic to match canonical `.claude/agents/*.md`. Every page rendering `display.agents` is currently 2 over.

### B.6 Data drift — ADR count 12 behind
**File:** `src/data/stats.ts:26`
**Current:** `totalADRs: 49`
**Target:** `totalADRs: 61` (scaffold: `ls docs/adrs/*.md | wc -l` = 61)
**Impact:** `src/app/about/page.tsx:105-106` renders "49 architecture decision records" — visibly wrong. Fix stats.ts OR switch to a build-time dynamic count.

### B.7 Data drift — pattern count 5 over
**File:** `src/data/patterns.ts` (array of 39 slugs)
**Current:** patterns.ts has 39 entries; scaffold has 34 `.ts` + 3 `.tsx` = **37 files** (HOLOCRON says 34 — only counts `.ts`).
**Target:** reconcile to 37 (all files) and update HOLOCRON reference from 34→37 in scaffold (separate concern). Remove 2 unknown/orphan slugs from patterns.ts that have no matching file in `scaffold/docs/patterns/`.
**Task for executor:** diff the 39 slugs in patterns.ts against `ls scaffold/docs/patterns/*.{ts,tsx}` basenames, drop the 2 extras.

---

## Section C — Medium (polish + completeness)

### C.1 About page hardcoded test count
**File:** `src/app/about/page.tsx:75`
**Current:** hardcoded "1,384 tests" in prose.
**Source of truth:** scaffold `npm test` currently reports 1384/1384 — the number IS correct, but not attributed to a release in VERSION.md.
**Required:** Either (a) import from `stats.ts` (add `totalTests: 1384`) and render `{display.tests}` so future bumps are centralized, or (b) leave as-is but add a VERSION.md entry attributing the count if an executor wants defensible provenance. Option (a) is simpler.

### C.2 Missing release entries v23.8.1 – v23.8.12
**File:** `src/data/releases.ts`
**Current:** jumps from v23.8.0 entry directly to the new grouped v23.8.13-19 entry.
**Required:** Add a grouped entry covering v23.8.1 – v23.8.12 (12 releases). Proposed:

```ts
{
  version: "v23.8.1 – v23.8.12",
  date: "2026-04-12",
  title: "The Hardening",
  headline: "Silver Surfer anti-skip enforcement, Gate in CLAUDE.md, field-report triage — 12 releases tightening the protocol.",
  items: [
    "v23.8.1 – v23.8.2: Silver Surfer anti-skip hardening. 'NO EXCEPTIONS' enforcement promoted from command-level to root CLAUDE.md after 3 documented skip incidents.",
    "v23.8.3 – v23.8.11: Cross-session agent-cache lessons, typecheck pre-flight gate before deploys, prompt-schema lockstep operational learning.",
    "v23.8.12: Field report triage (#299, #300) — campaign autonomy fix, ToS checks, deploy type-check gate, 3 operational learnings landed.",
  ],
},
```
Insert between the current v23.8.0 entry and the v23.8.13-v23.8.19 entry I added.

### C.3 Test file references old package name
**File:** `src/test/components.test.tsx:54, 59, 63`
**Current:** assertions still reference `"npx thevoidforge init"`.
**Required:** Update to `"npx voidforge-build init"`. Keep as test assertions of current behavior — not historical.

### C.4 Release-log `315 tests` references
**File:** `src/data/releases.ts:974-975`
**Current:** historical entry mentions "315 total tests across unit, integration, and E2E"
**Recommendation:** LEAVE AS-IS. This is a past-tense historical record of the test count at that version. Do not edit. (Rule: historical entries preserve what was true at time of release.)

### C.5 Comic-strip panel positioning bug
**File:** `src/components/landing/comic-strip.tsx:72-78`
**Current:** panel-number overlay uses `absolute top-3 left-4` inside a `motion.div` that doesn't declare `position: relative`.
**Required:** Add `relative` to the `className` of the motion.div wrapping each panel. Panel numbers are currently positioning to the nearest positioned ancestor (likely the section), which may stack them in one corner.

### C.6 macOS install instructions omit PATH linkage
**File:** `src/app/tutorial/install/page.tsx:261` (macOS section)
**Current:** `brew install node@20` without PATH instructions.
**Required:** add post-install command:
```bash
echo 'export PATH="/opt/homebrew/opt/node@20/bin:$PATH"' >> ~/.zshrc
# Then restart shell, or: source ~/.zshrc
```
Alternative: recommend `brew install node` (unversioned, auto-links).

### C.7 Hero + install-section duplicate commands
**File:** `src/components/landing/hero.tsx:62-73`
**Current:** Hero spotlight has a prose mention of `voidforge-build` inside `<code>` tags. Install section below ALSO shows the command with copy buttons.
**Required:** Remove the inline `<code>npx voidforge-build init</code>` from hero prose, OR wrap the hero's prose mention in a full copyable terminal block. Currently two references compete; scanning users see prose first.

### C.8 404 page lacks install link
**File:** `src/app/not-found.tsx`
**Current:** links to `/`, `/tutorial`, `/agents`.
**Required:** Replace `/agents` with `/tutorial/install` labeled "**START HERE**". "Agents" requires brand knowledge a lost visitor doesn't have.

### C.9 No `/changelog` canonical route
**Current state:** release history is embedded in `/prophecy`.
**Required:** Either (a) add `src/app/changelog/page.tsx` that renders the same `releases.ts` data as `/prophecy` does, for SEO/discoverability, or (b) rename `/prophecy` to `/releases` and keep the Prophecy subtitle. Option (a) is additive and safer.

---

## Section D — Low (nits + future refinement)

### D.1 Tutorial hub — step labels too small
**File:** `src/app/tutorial/page.tsx:156-158`
**Current:** "Step 1/2/3" labels ≤9px; four-paths grid sits above the core journey.
**Required:** Bump labels to ≥11px. Consider promoting "Core Journey" above the four-paths grid (first-time visitors don't yet know which path they are).

### D.2 Header nav density
**File:** `src/components/header.tsx:11-19`
**Current:** 7 top-level items + Search + Get Started + GitHub.
**Recommendation:** Group (Agents, Commands, Patterns, Protocol) under a "Reference" dropdown OR rename "Prophecy" to "Releases" with Prophecy as subtitle. Measure real usage before restructuring.

### D.3 `/cultivation install` link dangling
**File:** `src/app/tutorial/wizard/page.tsx:197-199`
**Current:** references `/cultivation install` without a link.
**Required:** Link to a cultivation tutorial page if one exists, or add a parenthetical clarifying it's a slash command (`/cultivation install` inside Claude Code).

### D.4 Forge Labs badge repetition
**File:** `src/app/tutorial/page.tsx` (four-paths cards)
**Current:** "FORGE LABS" amber pill on 4 cards.
**Recommendation:** Replace with a single "All tools below are Forge Labs experiments" banner above the grid.

### D.5 Lifecycle Guides section needs heading
**File:** `src/app/tutorial/page.tsx:249-270`
**Required:** Add `<h2>Lifecycle Guides</h2>` above the Google Ads / Kongo two-up grid to distinguish from the tools grid.

---

## Section E — New pages (required, ordered)

1. **`src/app/tutorial/migrate/page.tsx`** (A.3) — migration guide for legacy `thevoidforge` / `@voidforge/cli` users.
2. **`src/app/tutorial/verify/page.tsx`** (A.2) — SLSA provenance verification walkthrough.
3. **`src/app/changelog/page.tsx`** (C.9, optional) — canonical changelog URL for SEO.

For each: match existing tutorial page layout (`PageHeader` + `TutorialProgress` + `TutorialNav`), add to the tutorial index grid in `src/app/tutorial/page.tsx`, and add to the sitemap generator if one exists.

---

## Section F — Vercel deploy investigation (out-of-code)

User reports: changes not visible on voidforge.build despite commit `2d753ca` on `origin/main`.

**Diagnostics to run (maintainer laptop or Vercel dashboard):**

1. `vercel ls voidforge-site` — is the project linked?
2. Check https://vercel.com/tmcleod3/voidforge-site/deployments — is there a deployment for `2d753ca` that's failed or still building?
3. Check build logs for the latest deployment — any error?
4. Confirm the domain `voidforge.build` is attached to the production branch (`main`).
5. Check for a stuck `rm -rf .next` in the `prebuild` script that might time out.
6. CDN cache — hard-refresh the live site (`Cmd+Shift+R`) or curl with `?nocache=<timestamp>`.

If the Vercel deploy auto-hook is disabled, re-enable via Git Integration or run `vercel --prod` locally.

---

## Section G — Execution order (for the implementing session)

Work the spec in this order:

1. **Phase 1 — Data drift fixes** (B.5, B.6, B.7): update `stats.ts`, `agents.ts`, `patterns.ts` so every rendered count is correct. No UI changes needed; verifying `next build` passes is enough.
2. **Phase 2 — New pages** (E.1, E.2): create migrate + verify pages. These unlock references from the hero spotlight and release notes.
3. **Phase 3 — Landing + install flow** (A.1, B.1, B.3, C.7): fix the landing install section, CTA routing, install page command blocks, hero/install dupe.
4. **Phase 4 — Tutorial consistency** (B.2, B.4, C.6): `my-app` everywhere, prereqs on wizard, macOS PATH fix.
5. **Phase 5 — Polish** (C.2, C.3, C.5, C.8, C.9, D.1-D.5): release log backfill, test file update, 404 link, comic-strip bug, optional /changelog, nits.
6. **Phase 6 — Verify + ship**: `npm run typecheck`, `npm test`, `npm run build`, commit, push. Verify Vercel deploy by hitting the live domain.

---

## Section H — Severity counts

- CRITICAL: 3
- HIGH: 7
- MEDIUM: 9
- LOW: 5
- New pages: 2 required + 1 optional
- Total findings: 26

---

## Appendix — Source of truth references (scaffold repo)

| Concept | File | Notes |
|---------|------|-------|
| Current version | `VERSION.md` line 3 | `23.9.2` |
| Distribution table | `CLAUDE.md` §Distribution (lines ~265-282) | voidforge-build + voidforge-build-methodology |
| Command list | `HOLOCRON.md:82` | 30 commands (28 primary + 2 aliases) |
| Pattern list | `HOLOCRON.md:86` | 34 (should be 37 incl. `.tsx`) |
| Agent count | `ls .claude/agents/*.md \| wc -l` | 264 |
| ADR count | `ls docs/adrs/*.md \| wc -l` | 61 |
| Method doc count | `ls docs/methods/*.md \| wc -l` | 29 |
| ADR-061 pivot rationale | `docs/adrs/ADR-061-npm-scoped-package-rename.md` §13 | why voidforge-build (domain match) |
| v23.9.2 CHANGELOG entry | `CHANGELOG.md` | CI idempotency + provenance baseline |
| Hero claim: "Opus 4.7 orchestrates, Haiku 4.5 dispatches" | ADR-054 + this spec's hero.tsx update | Confirmed current |
| Hero claim: "SLSA provenance" | `https://registry.npmjs.org/-/npm/v1/attestations/voidforge-build@23.9.2` | Live, verified |

---

**End of spec.** The implementing session should read this file, work through Phase 1 → Phase 6 in order, and commit+push when done. Each finding has enough context to execute without re-audit.
