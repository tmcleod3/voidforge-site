# ROADMAP — VoidForge Marketing Site

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
