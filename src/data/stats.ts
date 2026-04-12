/**
 * Computed statistics derived from data arrays.
 * Import these instead of hardcoding counts — they auto-update
 * when patterns, agents, commands, or releases change.
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
  totalADRs: 48,
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
};
