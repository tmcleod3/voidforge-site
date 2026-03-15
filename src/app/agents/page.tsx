import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import {
  leadAgents,
  universes,
  universeLabels,
  universeColors,
} from "@/data/agents";

export const metadata: Metadata = {
  title: "Agents",
  description:
    "Meet the Council: 9 lead agents across 7 fictional universes, commanding 170+ sub-agents.",
};

export default function AgentsPage() {
  return (
    <>
      <PageHeader
        title="THE COUNCIL"
        subtitle="9 lead agents. 7 universes. 170+ sub-agents. Each with a name, a personality, and a job."
      />

      <section className="px-4 pb-16">
        <div className="mx-auto max-w-6xl">
          {/* Lead agent grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadAgents.map((agent) => (
              <Link
                key={agent.slug}
                href={`/agents/${agent.slug}`}
                className="group comic-panel bg-[var(--vf-surface-raised)] p-6 hover:border-[var(--vf-forge-orange)] transition-colors"
              >
                {/* Universe badge */}
                <span
                  className="inline-block px-2 py-0.5 rounded text-xs font-bold mb-3"
                  style={{
                    color: universeColors[agent.universe],
                    backgroundColor: `color-mix(in srgb, ${universeColors[agent.universe]} 15%, transparent)`,
                  }}
                >
                  {universeLabels[agent.universe]}
                </span>

                <h3 className="font-[family-name:var(--font-bangers)] text-2xl tracking-wider text-[var(--vf-text)] group-hover:text-[var(--vf-forge-orange)] transition-colors mb-1">
                  {agent.name}
                </h3>

                <p className="text-xs text-[var(--vf-text-muted)] font-[family-name:var(--font-space-mono)] mb-3">
                  {agent.domain}
                </p>

                <p className="text-sm text-[var(--vf-text-muted)]">
                  {agent.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Universe tabs */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-8 text-center">
            EXPLORE BY UNIVERSE
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {universes.map((universe) => (
              <Link
                key={universe}
                href={`/agents/${universe}`}
                className="px-5 py-2.5 comic-panel bg-[var(--vf-surface-raised)] font-[family-name:var(--font-bangers)] tracking-wider hover:border-[var(--vf-forge-orange)] transition-colors"
                style={{ color: universeColors[universe] }}
              >
                {universeLabels[universe]}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
