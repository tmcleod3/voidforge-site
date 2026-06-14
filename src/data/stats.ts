/**
 * Site statistics — two categories:
 *
 * (1) DERIVED — computed from the imported arrays below. These auto-update
 *     when patterns/agents/commands/releases change: `totalPatterns`,
 *     `totalLeads`, `totalAgents`, `totalUniverses`, `totalCommands`,
 *     `totalSubAgents`.
 *
 * (2) MANUALLY MAINTAINED — scalar mirrors of scaffold-repo counts that
 *     this repo doesn't have direct access to: `totalMethodDocs`,
 *     `totalADRs`, `totalScaffoldTests`. These must be bumped on every
 *     methodology sync. To verify against scaffold truth:
 *       ls scaffold/docs/methods/*.md | wc -l    # totalMethodDocs
 *       ls scaffold/docs/adrs/*.md | wc -l       # totalADRs
 *       cd scaffold && npm test                   # totalScaffoldTests
 *     A follow-up improvement is to generate these at build time from a
 *     JSON artifact produced by the scaffold repo's CI.
 */
import { patterns } from "./patterns";
import { leadAgents, subAgents, universes } from "./agents";
import { commands } from "./commands";

export const stats = {
  /** Total code patterns */
  totalPatterns: patterns.length,
  /** Lead agents */
  totalLeads: leadAgents.length,
  /** All named characters — leads + sub-agents */
  totalAgents: leadAgents.length + subAgents.length,
  /** Fictional universes */
  totalUniverses: universes.length,
  /** Slash commands */
  totalCommands: commands.length,
  /** Sub-agents only */
  totalSubAgents: subAgents.length,
  /** Method documentation files (docs/methods/) — updated on methodology sync. Last verified: 2026-06-14 against v23.19.0 (docs/methods/*.md file count = 32) */
  totalMethodDocs: 32,
  /** Architecture Decision Records — updated on methodology sync. Last verified: 2026-06-14 against v23.19.0 — actual docs/adrs/*.md file count in voidforge/main = 67 (metric corrected from prior highest-referenced heuristic). */
  totalADRs: 67,
  /** Scaffold test count — updated on methodology sync. Last verified: 2026-06-14 against v23.19.0 (release notes: full suite 1390→1392) */
  totalScaffoldTests: 1392,
  /** Total static HTML pages emitted by `next build`. Last verified: 2026-06-14 (v23.19.0 methodology sync, `find out -name '*.html' | wc -l` = 158 — +9 from the new /commands/audit-docs page and 8 new /patterns/* pages: design-tokens, error-message-categorization, autonomous-ops-triage-policy, codemod-hygiene, nginx-vhost, post-deploy-probe, rls-test-fixture, structural-sql-sentinel). The `verify-page-count` CI step in .github/workflows/ci.yml asserts >= 100; bump this scalar when the floor moves up materially. */
  totalPages: 158,
};

/** Formatted strings for display — use in JSX where template literals are awkward */
export const display = {
  agents: `${stats.totalAgents}+`,
  leads: `${stats.totalLeads}`,
  universes: `${stats.totalUniverses}`,
  patterns: `${stats.totalPatterns}`,
  commands: `${stats.totalCommands}`,
  subAgents: `${stats.totalSubAgents}+`,
  scaffoldTests: stats.totalScaffoldTests.toLocaleString(),
  // Exact count, asserted by Verify-page-count CI step + the consistency test below.
  // No `+` suffix because the value is verified equal, not "at least."
  pages: `${stats.totalPages}`,
};
