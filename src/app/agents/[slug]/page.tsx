import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { TrackView } from "@/components/track-view";
import {
  leadAgents,
  universes,
  universeLabels,
  universeColors,
  getLeadAgent,
  getAgentsByUniverse,
  type Universe,
} from "@/data/agents";
import { phases } from "@/data/protocol";

interface AgentPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const leadSlugs = leadAgents.map((a) => ({ slug: a.slug }));
  const universeSlugs = universes.map((u) => ({ slug: u }));
  return [...leadSlugs, ...universeSlugs];
}

export async function generateMetadata({
  params,
}: AgentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const agent = getLeadAgent(slug);
  if (agent) {
    return {
      title: agent.name,
      description: `${agent.name} — ${agent.domain}. ${agent.description}`,
    };
  }
  if (universes.includes(slug as Universe)) {
    return {
      title: universeLabels[slug as Universe],
      description: `All VoidForge agents from the ${universeLabels[slug as Universe]} universe.`,
    };
  }
  return {};
}

function LeadAgentPage({ agent }: { agent: (typeof leadAgents)[number] }) {
  const activePhases = phases.filter((p) =>
    agent.phasesActive.includes(p.number)
  );

  return (
    <div className="px-4 py-16">
      <TrackView event="agent_view" props={{ agent: agent.slug, universe: agent.universe }} />
      <div className="mx-auto max-w-3xl">
        {/* Splash header */}
        <div
          className="comic-panel p-8 mb-12 text-center"
          style={{
            background: `linear-gradient(135deg, color-mix(in srgb, ${universeColors[agent.universe]} 20%, var(--vf-surface)) 0%, var(--vf-surface-raised) 100%)`,
          }}
        >
          <span
            className="inline-block px-3 py-1 rounded text-xs font-bold mb-4"
            style={{
              color: universeColors[agent.universe],
              backgroundColor: `color-mix(in srgb, ${universeColors[agent.universe]} 15%, transparent)`,
            }}
          >
            {universeLabels[agent.universe]}
          </span>
          <h1 className="font-[family-name:var(--font-bangers)] text-4xl sm:text-5xl md:text-6xl tracking-wider gradient-text mb-2">
            {agent.name.toUpperCase()}
          </h1>
          <p className="text-[var(--vf-text-muted)] italic">
            {agent.realName}
          </p>
          <p className="font-[family-name:var(--font-bangers)] text-lg tracking-wider text-[var(--vf-forge-orange)] mt-2">
            {agent.domain}
          </p>
        </div>

        {/* Description */}
        <p className="text-lg text-[var(--vf-text-muted)] mb-8">
          {agent.description}
        </p>

        {/* Quote */}
        <blockquote className="speech-bubble mb-12">
          <p className="text-[var(--vf-text)] italic relative z-10">
            &ldquo;{agent.quote}&rdquo;
          </p>
        </blockquote>

        {/* Commands led */}
        {agent.commandsLed.length > 0 && (
          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-text)] mb-3">
              COMMANDS LED
            </h2>
            <div className="flex gap-2 flex-wrap">
              {agent.commandsLed.map((cmd) => (
                <Link
                  key={cmd}
                  href={`/commands/${cmd.slice(1)}`}
                  className="px-3 py-1.5 crt-terminal !p-2 text-sm hover:opacity-80 transition-opacity"
                >
                  {cmd}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Phases active */}
        {activePhases.length > 0 && (
          <section className="mb-8">
            <h2 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-text)] mb-3">
              ACTIVE IN PHASES
            </h2>
            <div className="flex gap-2 flex-wrap">
              {activePhases.map((p) => (
                <Link
                  key={p.slug}
                  href={`/protocol/${p.slug}`}
                  className="px-3 py-1 bg-[var(--vf-surface-overlay)] border border-[var(--vf-border)] rounded text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-forge-orange)] hover:border-[var(--vf-forge-orange)] transition-colors"
                >
                  {p.number}. {p.name}
                </Link>
              ))}
            </div>
          </section>
        )}

        <Link
          href="/agents"
          className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-forge-orange)] transition-colors"
        >
          &larr; Back to The Council
        </Link>
      </div>
    </div>
  );
}

function UniversePage({ universe }: { universe: Universe }) {
  const { leads, subs } = getAgentsByUniverse(universe);
  const color = universeColors[universe];

  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <PageHeader
          title={universeLabels[universe].toUpperCase()}
          subtitle={`All agents from the ${universeLabels[universe]} universe`}
        />

        {/* Leads */}
        {leads.length > 0 && (
          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-bangers)] text-2xl tracking-wider text-[var(--vf-text)] mb-6">
              LEAD AGENTS
            </h2>
            <div className="space-y-4">
              {leads.map((agent) => (
                <Link
                  key={agent.slug}
                  href={`/agents/${agent.slug}`}
                  className="block comic-panel bg-[var(--vf-surface-raised)] p-5 hover:border-[var(--vf-forge-orange)] transition-colors"
                >
                  <h3
                    className="font-[family-name:var(--font-bangers)] text-xl tracking-wider mb-1"
                    style={{ color }}
                  >
                    {agent.name}
                  </h3>
                  <p className="text-xs text-[var(--vf-text-muted)] font-[family-name:var(--font-space-mono)] mb-2">
                    {agent.domain}
                  </p>
                  <p className="text-sm text-[var(--vf-text-muted)]">
                    {agent.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Subs */}
        {subs.length > 0 && (
          <section className="mb-12">
            <h2 className="font-[family-name:var(--font-bangers)] text-2xl tracking-wider text-[var(--vf-text)] mb-6">
              SUB-AGENTS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {subs.map((agent) => (
                <div
                  key={agent.name}
                  className="comic-panel bg-[var(--vf-surface-raised)] p-4"
                >
                  <h3
                    className="font-[family-name:var(--font-bangers)] tracking-wider mb-1"
                    style={{ color }}
                  >
                    {agent.name}
                  </h3>
                  <p className="text-xs text-[var(--vf-text-muted)]">
                    {agent.role}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <Link
          href="/agents"
          className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-forge-orange)] transition-colors"
        >
          &larr; Back to The Council
        </Link>
      </div>
    </div>
  );
}

export default async function AgentPage({ params }: AgentPageProps) {
  const { slug } = await params;

  // Check if it's a lead agent
  const agent = getLeadAgent(slug);
  if (agent) return <LeadAgentPage agent={agent} />;

  // Check if it's a universe
  if (universes.includes(slug as Universe)) {
    return <UniversePage universe={slug as Universe} />;
  }

  notFound();
}
