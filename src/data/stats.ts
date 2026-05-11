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
  /** Method documentation files (docs/methods/) — updated on methodology sync. Last verified: 2026-05-10 against v23.11.1 (docs/methods/ shipped 30 .md files including SPEC_HANDOFF.md) */
  totalMethodDocs: 30,
  /** Architecture Decision Records — updated on methodology sync. Last verified: 2026-05-10 against v23.11.1 (upstream method docs reference ADR-069; numbering not strictly sequential). */
  totalADRs: 69,
  /** Scaffold test count — updated on methodology sync. Last verified: 2026-04-20 (v23.9.0 release notes claimed 1,384) */
  totalScaffoldTests: 1384,
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
};
