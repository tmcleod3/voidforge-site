# ADR-022: Data Integrity Gate Against Methodology Drift

## Status: Accepted

## Context

This site mirrors content from the upstream VoidForge methodology repo into local TypeScript data files (`src/data/patterns.ts`, `src/data/commands.ts`, `src/data/agents.ts`, `src/data/stats.ts`, `src/data/search-index.ts`, `src/data/releases.ts`). Every time `/void` syncs methodology, those mirrors drift unless a human bumps every affected file by hand.

The v23.9.2 → v23.11.1 sync surfaced this as a real, repeatable failure mode. The drift incident audited by 9 parallel agents (Picard, Galadriel, Bilbo, Coulson, Batman, Arwen, Data, Navani, Celeborn) found:

- **`stats.ts:37` had `totalMethodDocs: 29`** while `docs/methods/` had 30 files. No test caught this.
- **`stats.ts:39` had `totalADRs: 61`** while upstream methodology now references ADR-069. No verification path against scaffold counts.
- **`patterns.ts` had 37 entries** while `docs/patterns/` had 45 files. Existing `consistency.test.ts:14` filtered to `.ts/.tsx` only — silently dropped 2 of the 9 new patterns (`adr-verification-gate.md`, `refactor-extraction.md`).
- **`data-integrity.test.ts:58`** asserted `patterns.length >= 37` — a lower bound, not parity. Site could quietly accumulate or shed entries without trip.
- **5 hardcoded methodology version strings** scattered across `src/components/landing/hero.tsx`, `src/app/commands/page.tsx`, `src/app/protocol/page.tsx`, `src/app/tutorial/verify/page.tsx`. Each becomes silently stale on every methodology bump.
- **Two universe labels diverged**: `agents.ts:41` had `"Middle-earth"` and `search-index.ts:58` had `"Middle-earth Universe"` while the methodology source-of-truth in CLAUDE.md's team table is `"Tolkien"`. No test linked them.
- **`/blueprint` command was in `commands.ts:969`** but never rendered because its slug was missing from any group's `slugs` array on `src/app/commands/page.tsx`. The command was effectively invisible. No test asserted that every command in `commands.ts` appears in some renderable group.

The shape of the bug is: **manual mirrors with `>=` lower-bound tests + ad-hoc string literals + group-rendering filters that drift independent of the data they filter**. The fix needs to convert each of these into a parity assertion the test suite catches before deploy.

## Decision

Add a **Data Integrity Gate** to `src/test/` that fails CI when site data drifts from filesystem reality or from the methodology source-of-truth. The gate is composed of test cases, not a new framework — incremental adoption per surface.

### Phase 1 — landed in this commit (Site v2.13.0)

1. **`consistency.test.ts:14`** — extend pattern-file enumeration to include `.md` files (with `README.md` excluded). The 8 new methodology patterns include 2 markdown reference docs (`adr-verification-gate.md`, `refactor-extraction.md`) that the previous filter silently dropped. Without this fix, the test passes a stale state.
2. **`stats.ts:37–41`** — add a `// last verified: YYYY-MM-DD` comment per scalar that `/void` is required to update. Makes drift visible to reviewers even before a test catches it. (Quick win from Data's audit.)

### Phase 2 — scoped for the next sync (do NOT fix in this commit; documented as follow-up)

3. **Stats parity test**: assert `stats.totalMethodDocs === fs.readdirSync('docs/methods').filter(f => f.endsWith('.md')).length`. Same shape for ADRs once the scaffold-mirror question is resolved (see Phase 3).
4. **Group-rendering completeness**: assert every command in `commands.ts` appears in at least one group's `slugs` array on `src/app/commands/page.tsx`. The `/blueprint` invisibility bug had no test gate.
5. **Universe-label coherence**: assert `agents.ts:universeLabels[u]` and `search-index.ts` entries titled `"<X> Universe"` agree on the `<X>` string. The `Middle-earth` vs `Tolkien` drift had no link.
6. **Methodology version-string scan**: enumerate hardcoded `v23.x` strings under `src/components/`, `src/app/`, and `src/data/`. Either flag them as historical (with a comment) or assert they're within N minor versions of `VERSION.md`. Eliminates the hero-spotlight class of drift.

### Phase 3 — long-term refactor (deferred — see also DEBT-001/002/003 from Data's audit)

7. **Codegen step in `prebuild`**: extend the existing `prebuild` script (`rm -rf .next`) to read `.claude/commands/*.md` frontmatter and emit `commands.ts`. Same shape for `.claude/agents/*.md` → `agents.ts` `subAgents` array. Lead-agent records keep editorial data hand-authored.
8. **Cross-repo scalar artifact**: methodology repo's CI emits `methodology-counts.json` (totalMethodDocs, totalADRs, totalScaffoldTests with timestamps) at publish time. Site consumes it via `import` instead of maintaining manual scalars. Already noted as future work in `stats.ts:9–17` header comment; v23.10.0 added a "Cross-Repo Scalar Sync" section to `FORGE_KEEPER.md` describing this very target.

## Consequences

**Enables:**
- The next `/void` sync produces a test failure (not a silent drift) when any of the parity invariants land out of sync.
- Reviewers see "last verified" comments on each scalar, making review obvious without having to grep upstream.
- The 8-pattern miss in this sync becomes the last one of its class for the patterns surface specifically.

**Prevents:**
- Pattern-card invisibility from `.md` extension bypass (Phase 1 ✓).
- Future "command exists but doesn't render" bugs once Phase 2 #4 lands.
- Universe-label drift across data files once Phase 2 #5 lands.

**Costs:**
- One scalar-comment update per scalar per `/void` sync — explicit, ~30s of review time, not a recurring engineering cost.
- Phase 2 work is ~2–3 hours of test authoring; deferred until next sync to avoid bloating this commit.
- Phase 3 codegen is ~4–6 hours and requires methodology-repo cooperation for the JSON artifact; deferred until cross-repo coordination is in scope.

**Doesn't address:**
- `totalScaffoldTests` cannot be derived locally (the scaffold's test suite doesn't run here). Until Phase 3 #8 ships, this scalar stays manually maintained with the dated comment.
- Editorial fields on agents/commands (heralding lines, taglines, comic-strip narratives) have no upstream source and must remain hand-authored.

## Alternatives Considered

1. **Tighten existing `>=` bounds to `===`.** Considered. Rejected for now: the `>=` was deliberate to allow the site to lead the methodology temporarily. Replace with `===` in Phase 2 once we've confirmed no project workflow depends on the slack.
2. **Snapshot file updated by `/void`.** Considered. Less robust than parity tests — a snapshot can be stale alongside the data. Phase 2 parity tests are the better long-term shape.
3. **Lint rule against hardcoded `v23.x` strings.** Considered. Too noisy — historical version references in changelogs and release-note copy are legitimate. Phase 2 #6 takes a scoped approach (warn on src/components/ and src/app/, exempt src/data/releases.ts).

## Implementation Scope

- **Reality anchor:** This ADR documents work that exists at HEAD (Phase 1) plus a documented follow-up plan (Phases 2–3).
- **Deliverables:**
  - `src/test/consistency.test.ts` — `.md` filter extension at lines 14, 21–23 — `grep -n "f.endsWith\\|README\\.md" src/test/consistency.test.ts` returns the new lines. ✓
  - `src/data/stats.ts` — "last verified" comments on lines 37–41 — `grep "last verified" src/data/stats.ts` returns 3 lines. ✓
- **Verification gate:**
  - **Fixture:** the v23.9.2 → v23.11.1 sync that surfaced this drift.
  - **Can the gate FAIL under this fixture?** Yes — before this commit, `npm test` passed despite 2 missing pattern entries (the `.md` patterns) and a stale `totalMethodDocs`. After this commit, adding a 9th methodology pattern as `.md` to disk without bumping `patterns.ts` produces a test failure (orphaned pattern file: `docs/patterns/<slug>.md — not in patterns.ts`).
  - **Fixture-bindability proof:** if a future methodology sync adds `docs/patterns/<new>.md` and the site data file doesn't gain the entry, `consistency.test.ts > every file in docs/patterns/ has an entry in patterns.ts` fails with the file name in the assertion message. Reviewer immediately knows what to do.
  - **Rehearsed at:** the consistency test was rehearsed during this commit — it correctly failed for `audit-log.ts`, `ai-prompt-safety.ts`, `deploy-preflight.ts`, `llm-state-dedup.ts`, `multi-tenant-pool-bypass.ts`, `multi-tenant-property-test.ts` BEFORE the patterns were added to `patterns.ts`, then passed after. The `.md` extension was rehearsed by initially extending only the file enumeration but not the `existsSync` check; the test correctly failed for `adr-verification-gate.md` and `refactor-extraction.md` until the `.md` clause was added to both sides.

## References

- Field report context: this drift was identified mid-session during `/architect` after a `/void` sync. The 9-agent parallel analysis is recorded in this conversation's transcript and informs Phase 2/3 deferral choices.
- Related upstream pattern: `docs/patterns/adr-verification-gate.md` (ships in v23.11.0) — the discipline this ADR's Verification Gate section follows.
- Related tech-debt: this ADR partially addresses Data's DEBT-001 (manual scalars in stats.ts) and DEBT-005 (orphans in patterns.ts). Fully addressed by Phase 3.
- Prior ADR: ADR-020 (count-hardening) covered an earlier round of this same class of drift — proof that the fix has not been load-bearing enough on its own.
