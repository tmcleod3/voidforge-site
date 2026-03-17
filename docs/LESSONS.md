# Lessons Learned

> Patterns that worked, patterns that failed, and decisions worth remembering. Updated after each project. When a lesson is confirmed across multiple projects, promote it into the relevant method doc.

## How to Use This File

1. After completing a project (or a significant phase), add entries below
2. Tag each lesson with the relevant agent and category
3. When a pattern proves reliable across 2+ projects, move it into the method doc
4. Delete lessons that turn out to be wrong or context-specific

## Template

```
### [Short title]
**Agent:** [Who discovered this] | **Category:** [pattern/antipattern/decision/gotcha]
**Context:** [What project/situation]
**Lesson:** [What we learned]
**Action:** [What to do differently / what to keep doing]
**Promoted to:** [method doc name, if promoted] or "Not yet"
```

---

## Lessons

### Agents verify files in isolation — must follow the data across modules
**Agent:** Spock, Seven, Data (all three) | **Category:** antipattern
**Context:** Kongo.io Sprint 4 — 3 bugs escaped 4+ rounds of /review across parallel agents
**Lesson:** Review agents read files in the diff and check each against patterns, but never follow the data flow to the consumer. An avatar upload used key prefix `avatars/` but the asset proxy only allowed `uploads/`. An API returned a specific error but the UI displayed a generic fallback. A CSV import had no template for users to discover the schema. All three were caught by manual user testing.
**Action:** Added three mandatory rules: (1) Integration Tracing — when code produces URLs/keys/data consumed elsewhere, read the consumer. (2) Error Path Verification — verify the UI displays specific server errors, not generic fallbacks. (3) Error State Testing — test forms with intentionally invalid/conflicting input.
**Promoted to:** `/review` (integration tracing + error paths), `/ux` (error state testing), `/qa` (smoke tests), `/test` (integration tests)

### Static analysis cannot replace hitting the running server
**Agent:** Batman | **Category:** antipattern
**Context:** Kongo.io Sprint 4 — asset proxy 404 only discoverable at runtime
**Lesson:** Code review reads source files. But some bugs only manifest when the server processes an actual request — the asset proxy's `startsWith("uploads/")` check was invisible to static analysis because both the upload route and the proxy individually looked correct.
**Action:** Added Step 2.5 (Smoke Tests) to /qa — after build, execute actual HTTP requests against localhost for each new feature. Upload a file then fetch the URL. Submit valid then invalid data. Verify cross-module paths at runtime.
**Promoted to:** `/qa` (Step 2.5 — Smoke Tests)

### Tailwind v4 scans methodology markdown as CSS source
**Agent:** Kusanagi | **Category:** gotcha
**Context:** VoidForge Marketing Site — 20 commits (19% of total) fighting Tailwind v4 + Vercel PostCSS
**Lesson:** Tailwind v4's default `@source` scans ALL files in the repo. VoidForge methodology markdown files contain CSS-like tokens (`@import`, `:hover`, `flex`, `grid`) that Tailwind extracts as utility classes, causing PostCSS failures or build bloat. Additionally, `attr(data-text)` and CSS variables in `@keyframes` are valid in browsers but rejected by Vercel's PostCSS/CSS optimizer.
**Action:** Always set `@source('../')` (or equivalent) to restrict Tailwind scanning to application code only. Pin exact versions of Tailwind + @tailwindcss/postcss. Test with platform preview deploy (not just local build) before going to production.
**Promoted to:** Not yet

### When debugging cascades past 5 commits, hard reset
**Agent:** Batman | **Category:** pattern
**Context:** VoidForge Marketing Site — Tailwind CSS crisis required 12 approaches before finding the fix
**Lesson:** After 5+ failed fix/revert commits, the working tree state becomes unknowable. Dependencies between changes are unclear. The fastest recovery is: find the last known-good commit, hard reset, and reapply changes one at a time. The 20-commit CSS saga could have been 5.
**Action:** If `git log -5` shows all fix/revert commits with no green build between them, stop. Find the last good commit. `git checkout <hash> -- .` to restore. Reapply incrementally.
**Promoted to:** Not yet

### Hardcoded numeric claims drift across data sources
**Agent:** Batman | **Category:** antipattern
**Context:** VoidForge Marketing Site + Kongo.io + debrief-2026-03-15 — 3rd occurrence
**Lesson:** Agent counts, command counts, and version counts appear in 6+ places across a marketing site (hero, feature cards, about page, search index, PRD, speech bubbles). When upstream adds agents/commands, not all locations are updated simultaneously. This has now occurred in 3 separate projects.
**Action:** Derive counts from canonical data sources (e.g., `agents.length`, `commands.length`). Never hardcode numbers in marketing copy. Add automated cross-referencing to Batman's QA checklist.
**Promoted to:** Not yet — qualifies for promotion (3rd occurrence). Add to `docs/methods/QA_ENGINEER.md`.

### Don't mix methodology syncs with active debugging
**Agent:** Bombadil | **Category:** antipattern
**Context:** VoidForge Marketing Site — Arthurian retcon landed during Tailwind CSS crisis
**Lesson:** Running `/void` while actively debugging an unrelated issue interleaves two problem domains. The retcon changed file contents that were also being modified for CSS fixes, making it impossible to isolate which change broke the build. The eventual `HARD RESET` commit was necessary because too many changes had stacked.
**Action:** Before running `/void`, check if the working tree is clean and the last 3 commits are not fix/revert commits. If turbulent, commit or stash first.
**Promoted to:** Not yet

### Platform build environments are stricter than local dev
**Agent:** Kusanagi | **Category:** gotcha
**Context:** VoidForge Marketing Site — CSS worked locally but failed on Vercel
**Lesson:** Vercel's CSS optimizer rejects valid CSS features that browsers and local PostCSS accept (`attr(data-text)`, CSS variables in `@keyframes`). Local `next build` passes but `vercel` (preview deploy) fails. This class of bug is invisible to all VoidForge review agents since they analyze source code, not platform build output.
**Action:** Add preview deploy verification to `/devops` and `/void`. After significant CSS changes or forge syncs, run a platform preview build before declaring done.
**Promoted to:** Not yet. Confirmed: `/void` Step 4.5 (preview verification) was added to FORGE_KEEPER.md upstream.
