import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SpeechBubble } from "@/components/speech-bubble";
import { TradingCard } from "@/components/trading-card";
import { AccordionItem } from "@/components/accordion";
import { SubAgentAvatar } from "@/components/sub-agent-avatar";
import {
  Sword,
  Shield,
  Zap,
  Star,
  Rocket,
  Sun,
  Sparkles,
} from "lucide-react";
import {
  leadAgents,
  subAgents,
  universes,
  universeLabels,
  universeColors,
  type Universe,
} from "@/data/agents";

const universeEmblems: Record<Universe, React.ReactNode> = {
  tolkien: <Sword className="w-4 h-4" />,
  marvel: <Shield className="w-4 h-4" />,
  dc: <Zap className="w-4 h-4" />,
  "star-wars": <Star className="w-4 h-4" />,
  "star-trek": <Rocket className="w-4 h-4" />,
  dune: <Sun className="w-4 h-4" />,
  anime: <Sparkles className="w-4 h-4" />,
};

export const metadata: Metadata = {
  title: "Agents",
  description:
    "Meet the Council: 13 lead agents across 7 fictional universes, commanding 170+ sub-agents.",
};

function UniverseRoster({ universe }: { universe: Universe }) {
  const subs = subAgents.filter((a) => a.universe === universe);
  const leads = leadAgents.filter((a) => a.universe === universe);
  const color = universeColors[universe];

  if (leads.length === 0 && subs.length === 0) return null;

  return (
    <AccordionItem
      title={
        <div className="flex items-center gap-3">
          <span
            className="w-8 h-8 rounded-full flex items-center justify-center border-2"
            style={{ borderColor: color, color, backgroundColor: `${color}15` }}
          >
            {universeEmblems[universe]}
          </span>
          <span
            className="font-[family-name:var(--font-bangers)] text-xl tracking-wider"
            style={{ color }}
          >
            {universeLabels[universe].toUpperCase()}
          </span>
          <span className="text-xs text-[var(--vf-text-muted)]">
            {leads.length} lead{leads.length !== 1 ? "s" : ""}, {subs.length}{" "}
            sub-agent{subs.length !== 1 ? "s" : ""}
          </span>
        </div>
      }
    >
      <div className="pt-4">
        {/* Leads */}
        {leads.length > 0 && (
          <div className="mb-4">
            <p className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-forge-orange)] mb-2">
              LEADS
            </p>
            <div className="flex flex-wrap gap-2">
              {leads.map((a) => (
                <span
                  key={a.slug}
                  className="px-3 py-1 rounded text-sm border"
                  style={{
                    color,
                    borderColor: `${color}40`,
                    backgroundColor: `${color}10`,
                  }}
                >
                  {a.name} — {a.domain}
                </span>
              ))}
            </div>
          </div>
        )}
        {/* Subs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {subs.map((a) => (
            <div
              key={a.name}
              className="flex items-center gap-2 px-3 py-2 bg-[var(--vf-surface-overlay)] rounded text-sm"
            >
              <span className="text-[var(--vf-text)]">{a.name}</span>
              <span className="text-[var(--vf-text-muted)] text-xs">
                — {a.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </AccordionItem>
  );
}

export default function AgentsPage() {
  return (
    <>
      <PageHeader
        title="THE COUNCIL"
        subtitle="13 lead agents. 7 universes. 170+ sub-agents. Flip a card to meet them."
      />

      <section className="px-4 pb-12">
        <div className="mx-auto max-w-6xl">
          <SpeechBubble agent="Fury" universe="marvel">
            There was an idea — to bring together a group of remarkable agents.
            To see if they could become something more. To fight the battles we
            never could. That idea is called VoidForge. And these are the agents
            who answered the call.
          </SpeechBubble>
        </div>
      </section>

      {/* Trading card grid */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {leadAgents.map((agent) => (
              <TradingCard
                key={agent.slug}
                name={agent.name}
                slug={agent.slug}
                realName={agent.realName}
                universe={agent.universe}
                domain={agent.domain}
                description={agent.description}
                quote={agent.quote}
                tagline={agent.tagline}
                exclamation={agent.exclamation}
                commandsLed={agent.commandsLed}
                phasesActive={agent.phasesActive}
                powerLevel={agent.powerLevel}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sub-agent gallery — grouped by universe */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-3 text-center">
            THE FULL ROSTER
          </h2>
          <p className="text-center text-sm text-[var(--vf-text-muted)] mb-10">
            170+ sub-agents across 7 universes. The specialists behind the leads.
          </p>

          <div className="space-y-10">
            {universes.map((universe) => {
              const subs = subAgents.filter((a) => a.universe === universe);
              const uColor = universeColors[universe];
              if (subs.length === 0) return null;
              return (
                <div key={universe}>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center border-2"
                      style={{ borderColor: uColor, color: uColor, backgroundColor: `${uColor}15` }}
                    >
                      {universeEmblems[universe]}
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
                      <div
                        key={agent.name}
                        className="group/sub relative flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[var(--vf-surface-raised)] border border-[var(--vf-border)] hover:border-[var(--vf-forge-orange)]/40 transition-colors cursor-default"
                      >
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2 overflow-hidden"
                          style={{ borderColor: `${uColor}60`, backgroundColor: `${uColor}10` }}
                        >
                          <SubAgentAvatar name={agent.name} color={uColor} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-[var(--vf-text)] truncate">
                            {agent.name}
                          </p>
                          <p className="text-[11px] text-[var(--vf-text-muted)] truncate">
                            {agent.role}
                          </p>
                        </div>
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-[var(--vf-surface-overlay)] border border-[var(--vf-border)] rounded-md shadow-lg opacity-0 pointer-events-none group-hover/sub:opacity-100 group-hover/sub:pointer-events-auto transition-opacity duration-150 z-20 w-max max-w-[240px]">
                          <p className="text-xs font-medium text-[var(--vf-text)] mb-0.5">{agent.name}</p>
                          <p className="text-[11px] text-[var(--vf-text-muted)]">{agent.role}</p>
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-[6px] border-x-transparent border-t-[6px] border-t-[var(--vf-surface-overlay)]" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
