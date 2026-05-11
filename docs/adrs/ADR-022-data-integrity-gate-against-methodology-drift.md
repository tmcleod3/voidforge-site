# ADR-022: Data Integrity Gate Against Methodology Drift

## Status: Accepted (v1.2, amended 2026-05-10)

## Revisions

- **v1.2 (2026-05-10, Site v2.14.0 fix-first)** — Final Victory Gauntlet on Site v2.14.0 found that v1.1 itself shipped wrong line citations (off by 1-2 because the consistency.test.ts file shifted when stats import was added). The exact failure mode the ADR exists to prevent. **v1.2 switches all line-number citations to stable string anchors.** Also documents Critical finding GAUNTLET-001: `/patterns` had the same invisibility bug class as `/commands`. Pattern-groups extraction shipped in the v2.14.0 fix-first commit alongside this revision.
- **v1.1 (2026-05-10, Site v2.14.0)** — Plan-mode `/architect` review and 9-agent /campaign --plan synthesis surfaced three documentation defects and one architectural reordering. This revision applies all four corrections in place; the decision and intent are unchanged.
  - **Doc fix 1:** The verification command at the bottom of §Implementation-Scope was `grep "last verified" src/data/stats.ts` which returns zero matches because the file uses capital-L "Last verified". Picard flagged this as the exact failure mode the ADR was created to prevent. **Fixed**: command is now `grep -i "last verified"`.
  - **Doc fix 2:** Phase 1 deliverable claim cited `consistency.test.ts:14` for the `.md` filter. **v1.2 correction:** the original v1.0 line citation was wrong, the v1.1 fix to "lines 15 + 42" was ALSO wrong (the actual filter sits at lines 17, 18, and 27 at HEAD), and v1.2 surfaced the meta-failure: line citations themselves drift. **v1.2 switches all `consistency.test.ts:NN` references in this ADR to stable string anchors** (e.g., `the line containing /\.(tsx?|md)$/`, `the line containing existsSync(...).md` ). Verification commands now grep for the anchors, not line numbers.
  - **Doc fix 3:** Cascade hygiene — ADR-022 references ADR-020 (count-hardening) as "not load-bearing enough" but never adds an explicit `Supersedes-in-part` link. Future readers pulling ADR-020 would treat it as canonical. **Fixed**: References section now declares the supersede-in-part relationship explicitly.
  - **Phase reshuffle:** Riker, Spock, Treebeard, and Feyd-Rautha all independently flagged that **Phase 2 #3 (stats parity test) should be Phase 1** — same shape as the existing test, ~6 lines of code, and the first concrete drift finding in the original incident. Deferring it to "next sync" is the exact failure mode ADR-020 produced. Feyd-Rautha additionally argued that **Phase 3 #7's *local-source* codegen** (reading `.claude/commands/*.md` and `.claude/agents/*.md` frontmatter) is not 4-6h cross-repo work — it's a `prebuild` script that could ship Phase 1/2. The cross-repo JSON artifact (Phase 3 #8) is the genuinely hard piece and stays deferred. **Effect of v1.1:** Phase 1 absorbed the stats parity test (B2 below); local-source codegen is now its own Phase 2 candidate; cross-repo JSON artifact stays Phase 3 with the deferred-indefinitely framing.
  - **Scope alignment with Faramir:** Phase 2 #6 (version-string scan) and Phase 3 #8 (cross-repo JSON artifact) are flagged as GOLD-PLATING per Faramir's judgment pass. They remain documented as Phase 3 deferred candidates but the ADR no longer treats them as scheduled work — explicit trigger conditions required before they become work items.

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

1. **`consistency.test.ts`** — extend pattern-file enumeration to include `.md` files (the line containing the regex `/\.(tsx?|md)$/`), exclude `README.md` (the next line), and add the `.md` branch to the `existsSync` triple inside `every pattern in patterns.ts has a file in docs/patterns/`. The 8 new methodology patterns include 2 markdown reference docs (`adr-verification-gate.md`, `refactor-extraction.md`) that the previous filter silently dropped. Without this fix, the test passes a stale state. (v1.2: cite by anchor, not line — file shifts on every test addition.)
2. **`stats.ts:37–41`** — add a `// Last verified: YYYY-MM-DD` comment per scalar that `/void` is required to update. Makes drift visible to reviewers even before a test catches it. (Quick win from Data's audit.)
3. **Stats parity test (v1.1: promoted from Phase 2)** — `consistency.test.ts` asserts `stats.totalMethodDocs === fs.readdirSync('docs/methods').filter(f => f.endsWith('.md')).length`. For scalars whose source-of-truth doesn't live in this repo (`totalADRs`, `totalScaffoldTests`), assert plausibility lower bounds (`>= 60`, `>= 1000`) — guards against accidental zeroing during a sync without pretending we have local truth we don't. Specced by Spock in /campaign --plan. Lands in Site v2.14.0 alongside this revision.

### Phase 2 — scoped for the same release (v1.1: moved up alongside Phase 1)

4. **Group-rendering completeness (refactor-then-test)**: extract the groups[] array from `src/app/commands/page.tsx` into `src/data/command-groups.ts` first, then assert bidirectionally that every command in `commands.ts` has a slug in some group AND every group slug references a real command. The `/blueprint` invisibility bug (and the `/sentinel`+`/engage` follow-on bugs discovered during the /architect --plan review wave) all share this class. Test specced by Spock; refactor specced by Feyd-Rautha and Picard.
5. **Universe-label coherence (bidirectional)**: assert every `Universe` key in `agents.ts` has a matching `"<X> Universe"` entry in `search-index.ts` AND every `"<X> Universe"` entry references a known label. Spock's bidirectional shape — Faramir flagged this as the first scope expansion past the original incident, but it ships in the same release for cohesion.
6. **Local-source codegen (v1.1: promoted from Phase 3)** — `prebuild` script reads `.claude/agents/*.md` frontmatter and emits a `subAgents[]` array. Bridge plan per Stark: site keeps `agent-overrides.ts` map for `role`/`universe` fields that don't exist in upstream frontmatter; once upstream methodology adds them, delete the overrides. Commands codegen stays deferred (no frontmatter exists in command md files; upstream RFC required). **STATUS: candidate for next release, not v2.14.0.** This Phase-2 work item is documented here but explicitly NOT in scope for v2.14.0 unless the upstream agent-frontmatter contract is settled first.
7. **ts-prune backstop (v1.1: new in this revision)** — `npx ts-prune` integration via `npm run` script and CI step. Catches the dead-export class going forward (Feyd-Rautha's "close the class, not the instance" find: removing `display.methodDocs` + `display.adrs` was one-shot; without this backstop, the next dead export ships silently).

### Phase 3 — long-term (deferred indefinitely; explicit trigger required to re-open)

8. **Cross-repo scalar artifact**: methodology repo's CI emits `methodology-counts.json` (totalMethodDocs, totalADRs, totalScaffoldTests with timestamps) at publish time. Site consumes it via `import` instead of maintaining manual scalars. **Faramir flagged as GOLD-PLATING for this site's update cadence (~monthly).** Re-open only if: (a) `/void` cadence becomes weekly or shorter, (b) drift incidents continue to occur after Phase 2 ships, or (c) operator explicitly requests cross-repo coordination work. Already noted as future work in `stats.ts:9–17` header comment; v23.10.0 added a "Cross-Repo Scalar Sync" section to `FORGE_KEEPER.md` describing this very target.
9. **Methodology version-string scan** (was Phase 2 #6 in v1.0): enumerate hardcoded `v23.x` strings under `src/components/`, `src/app/`, and `src/data/`. **Faramir flagged as GOLD-PLATING — drop unless a stale version string causes an actual support issue.** Documented here for traceability; no scheduled work.

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

- **Reality anchor:** v1.0 documented Phase 1 (.md filter + dated comments) at HEAD plus deferred Phase 2/3. v1.1 expanded the at-HEAD set with stats parity, command-groups extraction + test, universe-label coherence test, and ts-prune backstop. v1.2 (fix-first) adds pattern-groups extraction + bidirectional test (closing the GAUNTLET-001 Critical) and switches every line-number citation in this ADR to stable anchors.
- **Deliverables (v1.2, all expected at HEAD after Site v2.14.0 fix-first commit). All existence-checks are anchor-based, NOT line-number-based:**
  - `src/test/consistency.test.ts` — `.md` filter extension. Anchor-check: `grep -E '/\\\\.\\(tsx\\?\\|md\\)\\$/' src/test/consistency.test.ts` returns the enumeration regex; `grep '\"README.md\"' src/test/consistency.test.ts` returns the exclusion; `grep '\\${p.slug}.md' src/test/consistency.test.ts` returns the existsSync branch.
  - `src/data/stats.ts` — "Last verified" comments on every MANUALLY MAINTAINED scalar. Drift-resistant anchor-check: `grep -ic 'last verified' src/data/stats.ts` MUST equal the count of MANUALLY MAINTAINED scalars (currently 4: totalMethodDocs, totalADRs, totalScaffoldTests, totalPages). Note the capital L; v1.0 used case-sensitive grep and got 0 hits — that defect motivated v1.1's `-i` switch. v1.2 went further and replaced the literal count claim with a parity rule, so adding a 5th scalar in a future sync doesn't drift this ADR.
  - `src/test/consistency.test.ts` — stats parity test (`totalMethodDocs ===` filesystem count, lower-bound plausibility for `totalADRs` and `totalScaffoldTests`). Anchor-check: `grep 'totalMethodDocs matches' src/test/consistency.test.ts` returns the test name.
  - `src/data/command-groups.ts` — extracted groups[] array, imported by both `src/app/commands/page.tsx` and the new test. Existence-check: `[ -f src/data/command-groups.ts ]`.
  - `src/data/pattern-groups.ts` — extracted groups[] array (v1.2 addition), same shape as command-groups, imported by both `src/app/patterns/page.tsx` and the new test. Existence-check: `[ -f src/data/pattern-groups.ts ]`.
  - `src/test/consistency.test.ts` — bidirectional group-rendering completeness tests for BOTH commands and patterns. Anchor-check: `grep 'Pattern groups cover all patterns' src/test/consistency.test.ts` returns the v1.2 test describe block.
  - `src/test/consistency.test.ts` — bidirectional universe-label coherence test. Anchor-check: `grep 'Universe labels' src/test/consistency.test.ts` returns the test describe block.
  - `package.json` — `ts-prune` dev dependency + `dead-exports` npm script. Existence-check: `grep dead-exports package.json` returns the script entry; `grep ts-prune package.json` returns the dev dep.
  - `.github/workflows/ci.yml` — Dead-export scan CI step. Anchor-check: `grep 'Dead-export scan' .github/workflows/ci.yml` returns the step name.
- **Verification gate:**
  - **Fixture:** the v23.9.2 → v23.11.1 sync that surfaced this drift, plus the latent-bug findings from the /architect agent sweep (sentinel/engage invisibility, dead exports, "Middle-earth" label drift).
  - **Can the gate FAIL under this fixture?** Yes, in all four bug classes:
    1. Adding a 9th methodology pattern as `.md` to disk without bumping `patterns.ts` → `consistency.test.ts > every file in docs/patterns/ has an entry in patterns.ts` fails.
    2. Methodology sync that adds a new `docs/methods/*.md` without bumping `stats.totalMethodDocs` → `stats parity test` fails with the exact filesystem count.
    3. Adding a new command to `commands.ts` without wiring its slug into `command-groups.ts` → `group-rendering completeness test (forward)` fails.
    4. Renaming the Tolkien universe label in `agents.ts` without updating `search-index.ts` → `universe-label coherence test` fails in one of two directions.
  - **Fixture-bindability proof:** each test produces a failure message that names the exact slug, scalar, command, or universe key that's drifted, so the reviewer can fix without grepping. Tests were rehearsed during Site v2.14.0 — see commit body of the v2.14.0 release for the per-test rehearsal record.
  - **Rehearsed at:** `consistency.test.ts` `.md` filter — rehearsed during Site v2.13.0 commit `55a3c17` (correctly failed for `audit-log.ts`, `ai-prompt-safety.ts`, `deploy-preflight.ts`, `llm-state-dedup.ts`, `multi-tenant-pool-bypass.ts`, `multi-tenant-property-test.ts` before the patterns were added; `.md` clause rehearsed for `adr-verification-gate.md` and `refactor-extraction.md`). v1.1 additions rehearsed during Site v2.14.0 commit (see release notes for commit SHA).

## References

- Field report context: this drift was identified mid-session during `/architect` after a `/void` sync. The 9-agent parallel analysis is recorded in this conversation's transcript and informs Phase 2/3 deferral choices. v1.1 incorporates findings from a follow-on /architect --plan review (9 agents) and a /campaign --plan synthesis (14 agents).
- Related upstream pattern: `docs/patterns/adr-verification-gate.md` (ships in v23.11.0) — the discipline this ADR's Verification Gate section follows.
- Related tech-debt: this ADR addresses Data's DEBT-001 (manual scalars in stats.ts) via Phase 1 parity test; DEBT-005 (orphans in patterns.ts) via Phase 1 `.md` filter + ts-prune backstop. DEBT-002/003 (agents.ts / commands.ts manual mirror) partially addressed by Phase 2 #6 codegen candidate; full coverage only after upstream methodology adds command frontmatter.
- **Supersedes-in-part: ADR-020 (count-hardening)** — ADR-020's `>=` lower-bound assertions were the original drift-detection mechanism. v1.0 of this ADR noted ADR-020 was "not load-bearing enough on its own"; v1.1 makes the relationship explicit. ADR-020 remains valid for its bookkeeping purpose, but the active drift gate is now this ADR's parity tests + ts-prune.
