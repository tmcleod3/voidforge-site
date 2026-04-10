# Operational Learnings

Project-scoped knowledge that persists across sessions. See [/tutorial/learnings](https://voidforge.build/tutorial/learnings) for the full lifecycle.

---

### Void sync content audit requires semantic comparison
After a void sync, the marketing site needs both structural checks (do slugs/counts match?) AND semantic checks (do descriptions reflect new capabilities?). The v7 campaign caught all structural gaps but missed 9 stale command descriptions because the architect review only compared data presence, not data content.

- **category:** workflow
- **verified:** 2026-04-01
- **scope:** /void → /architect pipeline
- **evidence:** v7 architect muster (8 agents) found 0 of 14 content accuracy issues; user caught the gap
- **context:** Applies whenever a void sync adds new capabilities to existing commands (not just new commands/patterns)

### Major version jumps require majorEras entry in releases.ts
When a void sync crosses a major version boundary (e.g., v19 → v20), the `majorEras` map in `releases.ts` needs a new entry for the new major version number. Without it, the Prophecy page renders releases under the new major version without an era title or quote. The site builds successfully — the grouping logic silently falls back to no era header.

- **category:** workflow
- **verified:** 2026-04-02
- **scope:** /void → campaign pipeline (releases.ts)
- **evidence:** v9 Mission 1 required manually adding `"20"` to majorEras; no automated check flagged it
- **context:** Applies whenever VERSION.md jumps a major version. Could be caught by a consistency test (majorVersion in shipped releases → majorEras key exists).

### Pike's consolidation challenge improves campaign efficiency
Small missions (hub wiring, search index, sitemap updates) should be merged into the mission that creates the content they reference. Separate "wire it up" missions create unnecessary commit/verify/debrief overhead. The 3→2 consolidation for v10 and the 2-mission pattern for v11 both executed cleanly.

- **category:** workflow
- **verified:** 2026-04-03
- **scope:** /campaign --plan
- **evidence:** v10 and v11 both used 2-mission plans after Pike's challenge; zero issues
- **context:** Applies to content-only campaigns where the "wiring" (search index, sitemap, hub link) is trivial

### Tutorial pages frequently receive post-ship content additions
User-authored domain expertise (iframe sandbox constraints, platform-specific gotchas) arrives after the tutorial campaign ships. These are single-file patches, not campaign-sized work. Direct commits for small content additions are fine — they skip version bump and changelog but avoid campaign overhead for 1-file changes.

- **category:** workflow
- **verified:** 2026-04-03
- **scope:** Tutorial content lifecycle
- **evidence:** Iframe sandbox section added to google-ads-kongo after v1.5.0 shipped
- **context:** Applies to any tutorial page with user-authored content. Not a methodology gap.

### Dynamic counts prevent staleness — never hardcode agent/pattern/command numbers
Every display count (agents, patterns, commands, leads) should come from `stats.ts` computed values, never hardcoded in JSX or prose. Hardcoded "263" went stale 3 times in one session as agents were added/removed. The `display.agents` computed value auto-updates.

- **category:** antipattern
- **verified:** 2026-04-09
- **scope:** All pages displaying VoidForge statistics
- **evidence:** v2.3.1 UX review found hardcoded 263 in hero, install, about — each wrong after agent data changes
- **context:** Also applies to "37 patterns", "18 leads", "33+ campaigns". If a number might change, compute it.

### Every tutorial page needs a forward navigation link
Pages in the core journey (install→first-build→deploy) use TutorialNav. But Forge Labs pages (cultivation, treasury, dangerroom) and path pages (scaffold) were created without "What's Next" sections. Readers hit dead ends. Every new page needs a closing CTA pointing to the logical next step.

- **category:** gotcha
- **verified:** 2026-04-09
- **scope:** All tutorial/* pages
- **evidence:** v2.3.1 UX review found 5 dead-end pages; all required manual "What's Next" additions
- **context:** Could be enforced by a build-time check (every page.tsx in tutorial/ must contain "whats-next" id or TutorialNav).

### Run test suite before deploy, not just build
The `/deploy` command runs `npm run build` as pre-flight but not `npm test`. Four broken tests (lead count 18→20, pattern threshold, install tiers, package name) shipped across 3 deploys before being caught by a parallel UX review agent. Adding `npm test` to pre-flight catches these before production.

- **category:** antipattern
- **verified:** 2026-04-09
- **scope:** /deploy pre-flight checks
- **evidence:** v2.0.0 through v2.3.0 shipped with broken tests; caught only in v2.3.1 UX review
- **context:** Field report #298 filed. Proposed fix: add npm test to deploy.md pre-flight.
