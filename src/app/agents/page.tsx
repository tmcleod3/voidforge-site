import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SpeechBubble } from "@/components/speech-bubble";
import { TradingCard } from "@/components/trading-card";
import { SubAgentGrid } from "@/components/sub-agent-grid";
import {
  Sword,
  Shield,
  Zap,
  Star,
  Rocket,
  Sun,
  Sparkles,
  Flame,
  Brain,
} from "lucide-react";
import {
  leadAgents,
  subAgents,
  universes,
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
  cosmere: <Flame className="w-4 h-4" />,
  foundation: <Brain className="w-4 h-4" />,
};

export const metadata: Metadata = {
  title: "Agents",
  description:
    `Meet the Council: ${leadAgents.length} lead agents across ${universes.length} fictional universes, commanding ${subAgents.length}+ sub-agents.`,
  alternates: { canonical: "/agents" },
};

export default function AgentsPage() {
  return (
    <>
      <PageHeader
        title="THE COUNCIL"
        subtitle={`${leadAgents.length} lead agents. ${universes.length} universes. ${subAgents.length}+ sub-agents. Flip a card to meet them.`}
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
            {subAgents.length}+ sub-agents across {universes.length} universes. The specialists behind the leads.
          </p>

          <div className="space-y-10">
            {universes.map((universe) => {
              const subs = subAgents.filter((a) => a.universe === universe);
              if (subs.length === 0) return null;
              return (
                <SubAgentGrid
                  key={universe}
                  universe={universe}
                  subs={subs}
                  emblem={universeEmblems[universe]}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
