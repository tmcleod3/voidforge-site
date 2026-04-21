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
  /** Method documentation files (docs/methods/) — updated on methodology sync */
  totalMethodDocs: 29,
  /** Architecture Decision Records — updated on methodology sync */
  totalADRs: 61,
  /** Scaffold test count — updated on methodology sync */
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
  methodDocs: `${stats.totalMethodDocs}`,
  adrs: `${stats.totalADRs}`,
  scaffoldTests: stats.totalScaffoldTests.toLocaleString(),
};
