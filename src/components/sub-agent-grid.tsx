"use client";

import { useState } from "react";
import { SubAgentAvatar } from "@/components/sub-agent-avatar";
import { AgentSpotlight } from "@/components/agent-spotlight";
import type { SubAgent, Universe } from "@/data/agents";
import { universeColors, universeLabels } from "@/data/agents";

interface SubAgentGridProps {
  universe: Universe;
  subs: SubAgent[];
  emblem: React.ReactNode;
}

export function SubAgentGrid({ universe, subs, emblem }: SubAgentGridProps) {
  const [spotlit, setSpotlit] = useState<SubAgent | null>(null);
  const uColor = universeColors[universe];

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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {subs.map((agent) => (
          <button
            key={agent.name}
            type="button"
            className="group/sub relative flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[var(--vf-surface-raised)] border border-[var(--vf-border)] hover:border-[var(--vf-forge-orange)]/40 transition-colors cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--vf-forge-orange)]"
            onClick={() => setSpotlit(agent)}
            aria-label={`View ${agent.name}`}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2 overflow-hidden transition-transform group-hover/sub:scale-110"
              style={{ borderColor: `${uColor}60`, backgroundColor: `${uColor}10` }}
            >
              <SubAgentAvatar name={agent.name} color={uColor} />
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
        ))}
      </div>

      <AgentSpotlight
        agent={spotlit}
        color={uColor}
        onClose={() => setSpotlit(null)}
      />
    </div>
  );
}
