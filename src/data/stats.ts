/**
 * Computed statistics derived from data arrays.
 * Import these instead of hardcoding counts — they auto-update
 * when patterns, agents, commands, or releases change.
 */
import { patterns } from "./patterns";
import { leadAgents, subAgents, universes } from "./agents";
import { commands } from "./commands";

export const stats = {
  /** Total code patterns (e.g., 35) */
  totalPatterns: patterns.length,
  /** Lead agents (e.g., 18) */
  totalLeads: leadAgents.length,
  /** All named characters — leads + sub-agents (e.g., 260+) */
  totalAgents: leadAgents.length + subAgents.length,
  /** Fictional universes (e.g., 9) */
  totalUniverses: universes.length,
  /** Slash commands (e.g., 26) */
  totalCommands: commands.length,
  /** Sub-agents only (e.g., 245+) */
  totalSubAgents: subAgents.length,
};

/** Formatted strings for display — use in JSX where template literals are awkward */
export const display = {
  agents: `${stats.totalAgents}+`,
  leads: `${stats.totalLeads}`,
  universes: `${stats.totalUniverses}`,
  patterns: `${stats.totalPatterns}`,
  commands: `${stats.totalCommands}`,
  subAgents: `${stats.totalSubAgents}+`,
};
