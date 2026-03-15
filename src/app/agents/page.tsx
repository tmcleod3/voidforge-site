import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SpeechBubble } from "@/components/speech-bubble";
import { TradingCard } from "@/components/trading-card";
import { AccordionItem } from "@/components/accordion";
import {
  leadAgents,
  subAgents,
  universes,
  universeLabels,
  universeColors,
  type Universe,
} from "@/data/agents";

export const metadata: Metadata = {
  title: "Agents",
  description:
    "Meet the Council: 10 lead agents across 7 fictional universes, commanding 170+ sub-agents.",
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
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: color }}
          />
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
        subtitle="10 lead agents. 7 universes. 170+ sub-agents. Flip a card to meet them."
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
                realName={agent.realName}
                universe={agent.universe}
                domain={agent.domain}
                description={agent.description}
                quote={agent.quote}
                commandsLed={agent.commandsLed}
                phasesActive={agent.phasesActive}
                powerLevel={agent.powerLevel}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Universe rosters */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-8 text-center">
            THE FULL ROSTER
          </h2>
          <div className="space-y-3">
            {universes.map((universe) => (
              <UniverseRoster key={universe} universe={universe} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
