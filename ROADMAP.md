# ROADMAP — VoidForge Marketing Site

## v11 — The Kongo Lifecycle (COMPLETE — 2026-04-03)

Companion guide to v10: full lifecycle with Kongo integrated — 3-layer A/B testing, seed-to-conversion feedback loop, autonomous page generation.

| Mission | Name | Status | Scope |
|---------|------|--------|-------|
| 1 | The Kongo Tutorial | COMPLETE | /tutorial/google-ads-kongo page (seed extraction, page generation, variant generation, growth signal, 3-layer testing, weekly feedback loop, full data flow diagram, comparison table), hub + search + sitemap, cross-link from google-ads guide |
| 2 | The Chronicle | COMPLETE | ADR-016 committed, ROADMAP, CHANGELOG, version bump, verify, deploy |

### Dependencies

```
Mission 1 ─────────────────────────────── (independent — tutorial page + wiring)
Mission 2 ──── depends on ──── Mission 1 (chronicles completed work)
```

### Source

User-authored Kongo lifecycle guide. ADR-016 documents the decision to create a companion guide rather than expanding the base guide. Content covers the full Kongo data flow from PRD → seed → pages → ads → conversions → feedback → next cycle.

---

## v10 — The Growth Guide (COMPLETE — 2026-04-03)

Full lifecycle tutorial: /cultivation + SaaS + Google Ads. Shows the complete command sequence from deployed product to autonomous ad spend optimization.

| Mission | Name | Status | Scope |
|---------|------|--------|-------|
| 1 | The Growth Tutorial | COMPLETE | /tutorial/google-ads page (7 sections), tutorial hub entry, search index, sitemap, Forge Labs lifecycle link |
| 2 | The Chronicle | COMPLETE | ROADMAP, CHANGELOG, version bump, verify, deploy |

### Dependencies

```
Mission 1 ─────────────────────────────── (independent — tutorial page + wiring)
Mission 2 ──── depends on ──── Mission 1 (chronicles completed work)
```

### Source

User-authored lifecycle guide synthesized from 3 agent perspectives. ADR-015 documents the architectural decision. Content covers: /cultivation install → /grow --setup → /grow → daemon → /treasury --status → /grow --content.

---

## v9 — The Kongo Engine (COMPLETE — 2026-04-02)

Void sync v20.1.1 (Kongo Engine + Parallel Agent Standard). Wire all new capabilities. Structural + semantic audit applied per LEARNINGS.md.

| Mission | Name | Status | Scope |
|---------|------|--------|-------|
| 1 | The New Pattern + Releases | COMPLETE | Add kongo-integration (37th pattern), v20.1.0 + v20.1.1 release entries, search index, update v20.0 future |
| 2 | The Parallel Standard | COMPLETE | Update /build, /campaign, /assemble, /qa, /security, /gauntlet descriptions with Parallel Agent Standard + field report rules |
| 3 | The Kongo Wire | COMPLETE | Update /grow, /cultivation descriptions with Kongo features. Update Forge Labs page. |
| 4 | The Chronicle | COMPLETE | ROADMAP, CHANGELOG, version bump, verify, deploy |

### Dependencies

```
Mission 1 ─────────────────────────────── (independent — data entries)
Mission 2 ─────────────────────────────── (independent — command descriptions)
Mission 3 ─────────────────────────────── (independent — Kongo-specific)
Mission 4 ──── depends on ──── Missions 1-3 (chronicles completed work)
```

### Source

Content audit of void sync v19.5.0 → v20.1.1. 3 structural + 21 semantic gaps found. Semantic check applied per LEARNINGS.md lesson.

---

## v8 — The Living Docs (COMPLETE — 2026-04-01)

Wire all void sync content changes into the marketing site. Every new capability (ADR-035 Operational Learnings, field report rules, command enhancements) must be visible to site visitors.

| Mission | Name | Status | Scope |
|---------|------|--------|-------|
| 1 | The Learnings System | COMPLETE | Update /debrief, /vault, /build, /campaign, /architect, /assemble command descriptions to reflect LEARNINGS.md integration |
| 2 | The Field Reports | COMPLETE | Update /qa, /security, /gauntlet descriptions with new rules (CSP execution, read-operation guards, enum consistency, semantic verification) |
| 3 | The Release Entry | COMPLETE | Add void sync release to releases.ts for Prophecy page. Update protocol.ts Phase 0 to mention LEARNINGS.md |
| 4 | The Chronicle | COMPLETE | ROADMAP, CHANGELOG, version bump, verify, deploy |

### Dependencies

```
Mission 1 ─────────────────────────────── (independent — command descriptions)
Mission 2 ─────────────────────────────── (independent — command descriptions)
Mission 3 ──── depends on ──── Missions 1-2 (release entry summarizes all changes)
Mission 4 ──── depends on ──── Missions 1-3 (chronicles completed work)
```

### Source

Content audit of void sync changes vs. site data. 14 findings: 4 High, 6 Medium, 4 Low. Root cause: v7 audited data structure but not data content — command descriptions were stale.

---

## v7 — The Architect's Eye (COMPLETE — 2026-04-01)

Void sync (18 files, ADR-035 Operational Learnings), full 8-agent Muster architecture review, fix all Critical/High findings, SEO hardening, test expansion.

| Mission | Name | Status | Scope |
|---------|------|--------|-------|
| 1 | The New Pattern | COMPLETE | Add combobox.tsx (36th pattern) to patterns.ts, search-index.ts, sitemap. Wire void sync commit. |
| 2 | The Missing Seven | COMPLETE | Surface all 15 tutorials from hub. Add 8 missing tutorials to search index. Add Search to mobile nav. |
| 3 | The SEO Foundation | COMPLETE | Dynamic sitemap.ts, canonical URLs on all pages, BreadcrumbList JSON-LD, Forge Labs metadata fix, home page metadata. |
| 4 | The Consistency Tests | COMPLETE | Bidirectional pattern↔file and command↔file tests, search index completeness, generateStaticParams validation. |
| 5 | The Data Cleanup | COMPLETE | Consolidate 3 agent image maps, fix duplicate release titles, protocol accordion detail links, Bilbo image fix, misc Low fixes. |
| 6 | The PRD Reconciliation | COMPLETE | Sweep all stale numbers (commands: 28, patterns: 36, pages: 134+). Reconcile 5 feature descriptions with actual implementation. |
| 7 | The Chronicle | COMPLETE | ROADMAP, CHANGELOG, version bump, deploy, UX muster verification. |

### Dependencies

```
Mission 1 ─────────────────────────────── (independent — new pattern data)
Mission 2 ─────────────────────────────── (independent — tutorial hub + search)
Mission 3 ──── depends on ──── Mission 1 (sitemap needs pattern entry)
Mission 4 ──── depends on ──── Missions 1-2 (tests validate new data)
Mission 5 ─────────────────────────────── (independent — data cleanup)
Mission 6 ──── depends on ──── Missions 1-5 (PRD numbers need final counts)
Mission 7 ──── depends on ──── Missions 1-6 (chronicles completed work)
```

### Source

8-agent Muster architecture review (Picard, Galadriel, Batman, Kusanagi, Navani, Troi, Riker, Constantine). 21 findings: 3 Critical, 7 High, 6 Medium, 4 Low, 1 Enchantment. Void sync 18 files (ADR-035 wiring + field reports #258/#259/#263).

---

## v6 — The Blueprint (COMPLETE — 2026-03-31)

Sync with VoidForge v19.5.0, wire marketing copy for v19.4+v19.5, add /blueprint command, deep UX muster, deploy.

| Mission | Name | Status | Scope |
|---------|------|--------|-------|
| 1 | Void Sync v19.5.0 | COMPLETE | 12 shared files synced: /blueprint command, 3 pattern impls, Gauntlet fixes, HOLOCRON updates |
| 2 | New Data | COMPLETE | /blueprint as 28th command, v19.4+v19.5 releases, search index entry |
| 3 | Landing Refresh | COMPLETE | Hero v19.5 spotlight callout, 7th feature card "Blueprint Path" |
| 4 | Tutorial + Team | COMPLETE | 4-path tutorial hub (wizard/blueprint/scaffold/import), 9 universes section on about page |
| 5 | UX Muster Fixes | COMPLETE | 2 Critical + 2 High fixes: spotlight nav guard, tutorial progress, clipboard check, focus restoration |
| 6 | SEO Overhaul | COMPLETE | Dynamic OG/Twitter meta, JSON-LD, sitemap, stats cleanup |
| 7 | Chronicle | COMPLETE | ROADMAP, final verification, deploy |

### Source

VoidForge void sync v19.3.0 → v19.5.0 (12 files, 624 insertions). Marketing copy from upstream `docs/marketing/v19-release-copy.md`. Galadriel's UX Muster (30 findings: 2 Critical, 4 High, 10 Medium, 9 Low, 4 Enchantment).

---

## v5 — The Reality Check (COMPLETE — 2026-03-30)

Sync with VoidForge v19.3.0, apply assessment findings, fix data gaps, harden a11y, expand tests.

| Mission | Name | Status |
|---------|------|--------|
| 1-7 | Void Sync + Patterns + Data + Dead Code + A11y + Tests + Chronicle | ALL COMPLETE |

### Dependencies

```
Mission 1 ─────────────────────────────── (independent — void sync)
Mission 2 ──── depends on ──── Mission 1 (new patterns need synced methodology)
Mission 3 ─────────────────────────────── (independent — data fixes)
Mission 4 ─────────────────────────────── (independent — cleanup)
Mission 5 ─────────────────────────────── (independent — a11y)
Mission 6 ──── depends on ──── Missions 2-5 (tests validate all changes)
Mission 7 ──── depends on ──── Missions 1-6 (chronicles completed work)
```

### Source

Picard's Pre-Build Assessment (`/assess`) with 6 parallel agents: Spock (data), Uhura (integrations), Batman (QA), Galadriel (UX/a11y), Kenobi (security), Kusanagi (infra). Findings grouped into 9 root causes. VoidForge void sync from v19.2.0 to v19.3.0 (19 files, 78 insertions).

---

## v4 — The Alignment (COMPLETE — 2026-03-26)

Sync with VoidForge v19.0.0, fix content accuracy, eliminate stale-count bugs, mark growth tools as experimental.

| Mission | Name | Status | Scope |
|---------|------|--------|-------|
| 1 | The Foundations | COMPLETE | robots.txt domain fix, Claude Code install links, wizard NPX rewrite, prerequisite download links |
| 2 | The Data Sync | COMPLETE | 3 new patterns (stablecoin-adapter, ad-billing-adapter, funding-plan), v19.0.0 "The Funding Rail" shipped release, future releases refresh, 8→9 universes, 17→18 leads |
| 3 | The Living Counts | COMPLETE | Created stats.ts with computed counts. Replaced hardcoded counts in feature-cards, comic-strip, agents page, tests. Eliminated stale-count bug class. |
| 4 | The Welcome Mat | COMPLETE | Install page: "Verify Your Tools" section, "Windows Notes" section, Scaffold recommendation for Windows, SEO title |
| 5 | The Forge Labs | COMPLETE | ForgeLabsBanner component, banners on 4 growth tutorials, FORGE LABS badges on tutorial hub, Bilbo speech updated |
| 6 | The Chronicle | COMPLETE | SEO title optimization across 8 tutorial pages |

### Dependencies

```
Mission 1 ─────────────────────────────── (independent)
Mission 2 ─────────────────────────────── (independent)
Mission 3 ──── depends on ──── Mission 2 (data must be current first)
Mission 4 ──── depends on ──── Mission 1 (prerequisite links must exist)
Mission 5 ─────────────────────────────── (independent)
Mission 6 ──── depends on ──── Missions 1-5 (chronicles the completed work)
```

### Source

13-agent `/architect --muster` review across 6 universes (Star Trek, Marvel, DC, Tolkien, Cosmere, Anime). Findings synthesized in 3 waves: Vanguard (Picard, Galadriel, Batman, Stark, Kusanagi), Main Force (Troi, Navani, Vision, Samwise, Dalinar), Adversarial (Constantine, Riker, Deathstroke).

### BLOCKED Items (non-code)

| Item | Type | Who Unblocks |
|------|------|-------------|
| Claude Code canonical install URL | Reference | User — confirm the correct download/install URL |
| `QUICKSTART-WINDOWS.md` from upstream | Asset | Upstream VoidForge — file referenced in HOLOCRON but doesn't exist yet |
| Plausible analytics setup | Infrastructure | User — deploy action |

### Key Decisions

- **No separate platform pages.** Install page expansion only (Dalinar). The three-path model (wizard/scaffold/import) is organized by user intent, not operating system.
- **Computed counts, not hardcoded.** stats.ts derives counts from data arrays (Riker). Every forge sync that adds patterns/agents/commands auto-updates site-wide.
- **PRD as historical document.** Add a status header, update key counts, but don't maintain as living spec. Current stats live at /prophecy.
- **Forge Labs, not "beta".** Creative comic-book treatment for experimental growth tools — honest about requirements, fun about presentation.

## Future

- **Tutorial breadcrumbs** — Track context showing "You are on: Scaffold Path, Step 2 of 3"
- **Tutorial hub discoverability** — Surface all 15 tutorials from the hub, not just 7
- **Platform quickstart guides** — When upstream `QUICKSTART-WINDOWS.md` ships, create matching site content
- **Growth tools graduation** — Move Forge Labs → stable as Cultivation, Treasury, Danger Room features mature
- **Structured data expansion** — BreadcrumbList schema for tutorials, HowTo schema for step-by-step guides
