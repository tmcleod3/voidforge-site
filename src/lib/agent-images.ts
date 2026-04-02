import { leadAgents } from "@/data/agents";

/**
 * Canonical agent image map — single source of truth.
 * Leads: /images/agents/{slug}.webp
 * Sub-agents with portraits: /images/agents/subs/{slug}.webp
 */

// Build lead agent map from data
const leadMap: Record<string, string> = {};
for (const agent of leadAgents) {
  leadMap[agent.name] = `/images/agents/${agent.slug}.webp`;
}

// Sub-agents with known portraits
const subAgentMap: Record<string, string> = {
  Bilbo: "/images/agents/subs/bilbo.webp",
  Boromir: "/images/agents/subs/boromir.webp",
  Wong: "/images/agents/subs/wong.webp",
  Haku: "/images/agents/subs/haku.webp",
  Gimli: "/images/agents/subs/gimli.webp",
  Eowyn: "/images/agents/subs/eowyn.webp",
  Steris: "/images/agents/subs/steris.webp",
};

/** All agent images — leads + sub-agents with portraits */
export const agentImages: Record<string, string> = {
  ...leadMap,
  ...subAgentMap,
};

/** Get agent image path by name. Returns undefined if no image exists. */
export function getAgentImage(name: string): string | undefined {
  return agentImages[name];
}
