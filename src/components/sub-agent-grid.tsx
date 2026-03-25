"use client";

import { useState, useMemo } from "react";
import { SubAgentAvatar } from "@/components/sub-agent-avatar";
import { AgentSpotlight } from "@/components/agent-spotlight";
import type { SubAgent, Universe } from "@/data/agents";
import { universeColors, universeLabels } from "@/data/agents";

interface SubAgentGridProps {
  universe: Universe;
  subs: SubAgent[];
  emblem: React.ReactNode;
}

function AgentCard({
  agent,
  color,
  onClick,
}: {
  agent: SubAgent;
  color: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className="group/sub relative flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[var(--vf-surface-raised)] border border-[var(--vf-border)] hover:border-[var(--vf-forge-orange)]/40 transition-colors cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--vf-forge-orange)]"
      onClick={onClick}
      aria-label={`View ${agent.name}`}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2 overflow-hidden transition-transform group-hover/sub:scale-110"
        style={{ borderColor: `${color}60`, backgroundColor: `${color}10` }}
      >
        <SubAgentAvatar name={agent.name} color={color} />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-medium text-[var(--vf-text)] truncate">
          {agent.name}
        </p>
        <p className="text-[11px] text-[var(--vf-text-muted)] sm:truncate">
          {agent.role}
        </p>
      </div>
    </button>
  );
}

export function SubAgentGrid({ universe, subs, emblem }: SubAgentGridProps) {
  const [spotlit, setSpotlit] = useState<SubAgent | null>(null);
  const uColor = universeColors[universe];

  // Group by series if any agents have series tags (anime universe)
  const seriesGroups = useMemo(() => {
    const hasSeries = subs.some((a) => a.series);
    if (!hasSeries) return null;

    const groups: Record<string, SubAgent[]> = {};
    for (const agent of subs) {
      const key = agent.series || "Other";
      if (!groups[key]) groups[key] = [];
      groups[key].push(agent);
    }
    return Object.entries(groups);
  }, [subs]);

  if (subs.length === 0) return null;

  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <span
          className="w-8 h-8 rounded-full flex items-center justify-center border-2"
          style={{ borderColor: uColor, color: uColor, backgroundColor: `${uColor}15` }}
        >
          {emblem}
        </span>
        <h3
          className="font-[family-name:var(--font-bangers)] text-xl tracking-wider"
          style={{ color: uColor }}
        >
          {universeLabels[universe].toUpperCase()}
        </h3>
      </div>

      {seriesGroups ? (
        /* Series-grouped layout (anime) */
        <div className="space-y-6">
          {seriesGroups.map(([series, agents]) => (
            <div key={series}>
              <p
                className="text-xs font-bold tracking-widest uppercase mb-2 pl-1"
                style={{ color: `${uColor}99` }}
              >
                {series}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {agents.map((agent) => (
                  <AgentCard
                    key={agent.name}
                    agent={agent}
                    color={uColor}
                    onClick={() => setSpotlit(agent)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Flat grid (all other universes) */
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {subs.map((agent) => (
            <AgentCard
              key={agent.name}
              agent={agent}
              color={uColor}
              onClick={() => setSpotlit(agent)}
            />
          ))}
        </div>
      )}

      <AgentSpotlight
        agent={spotlit}
        color={uColor}
        onClose={() => setSpotlit(null)}
      />
    </div>
  );
}
