# ADR-020: Count Hardening — Computed Stats Over Hardcoded Prose

**Status:** Accepted
**Date:** 2026-04-12
**Context:** The 3-agent accuracy audit (FR #298 dynamic count check) found 8 hardcoded numeric claims across 5 files. Two were actively wrong ("741 tests" → 1,340; "Eight universes" → Nine). Six more are currently correct but will silently go stale on the next release that changes counts. The site already has `src/data/stats.ts` with computed counts derived from data arrays, but not all pages use it.

## Decision

1. **Prose counts in about/page.tsx:** Replace hardcoded numbers with `display.*` interpolation where the page is a server component. For narrative prose where interpolation reads awkwardly (e.g., "The methodology grew {display.agents} agents"), accept the trade-off — JSX interpolation in prose is fine for a marketing site where accuracy matters more than pure literary flow.

2. **Tier breakdown in agents/page.tsx:** Keep hardcoded for now. The 20/190/38/15 Opus/Sonnet/Haiku/Adversarial split requires a `modelTier` field on each agent definition that doesn't exist in the site's data model. Adding 263 tier annotations to `agents.ts` is disproportionate effort for a number that changes rarely (only on major agent reshuffles). Update manually per `/void` sync.

3. **Search index description strings:** Use template literals with imported counts where the string is purely descriptive (e.g., `` `All ${leadAgents.length} lead agents` ``).

4. **Release note strings:** Never dynamify. Historical release notes describe what was true at the time of that release. "v23.0.0 shipped with 263 agents" is a historical fact.

## Consequences

- About page, search index, and install tutorial counts will auto-update on data changes
- Agents page tier breakdown remains a manual update item (documented in ROADMAP)
- stats.ts gains a `campaigns` count (derived from shipped releases array length where version >= some threshold, or manually maintained)
- The "741 tests" class of bug (actively wrong hardcoded count) is eliminated for all computed-countable metrics

## Alternatives

- **Full dynamification including tiers:** Add `modelTier` to every agent in agents.ts. Rejected — 263 manual annotations for a number that changes once per major version.
- **Leave all hardcoded:** Accepted risk of silent staleness. Rejected — two bugs already found in this audit.
- **Move all prose to a CMS:** Premature for a static marketing site with one author.
