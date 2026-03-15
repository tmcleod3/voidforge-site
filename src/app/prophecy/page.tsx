import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Prophecy",
  description:
    "The VoidForge roadmap: what's shipped, what's next, and what's coming from the distant stars.",
};

const shipped = [
  {
    version: "v3.1",
    title: "The Foundation",
    items: [
      "13-phase build protocol",
      "9 lead agents with sub-agent rosters",
      "7 code patterns",
      "CLAUDE.md methodology system",
      "Build journal and context management",
    ],
  },
  {
    version: "v3.2",
    title: "The Scaffold",
    items: [
      "3-tier branch system (Full, Scaffold, Core)",
      "Slash command framework (11 commands)",
      "Double-pass review cycle (Phases 9-11)",
      "Agent conflict resolution protocol",
      "Cross-tier sync enforcement",
    ],
  },
  {
    version: "v3.3",
    title: "The Worm Rider",
    items: [
      "/thumper — Telegram bridge (Chani)",
      "Gom Jabbar authentication",
      "Bombadil's /void forge sync",
      "170+ named agents across 7 universes",
      "This website (built by VoidForge)",
    ],
  },
];

const future = [
  {
    version: "v3.4",
    title: "The Observatory",
    items: [
      "MCP server integrations (GitHub, Linear, Slack)",
      "Build analytics dashboard",
      "Agent performance metrics",
      "Session replay from build journals",
    ],
  },
  {
    version: "v4.0",
    title: "The Multiverse",
    items: [
      "Multi-agent parallel execution",
      "Agent memory across sessions",
      "Custom agent creation framework",
      "Community agent marketplace",
      "Cross-project methodology learning",
    ],
  },
];

export default function ProphecyPage() {
  return (
    <>
      <PageHeader
        title="THE PROPHECY"
        subtitle="What has been forged. What is being forged. What will be forged."
      />

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-3xl">
          {/* Shipped */}
          <div className="mb-16">
            <h2 className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-forge-yellow)] mb-8">
              SHIPPED
            </h2>
            <div className="space-y-8">
              {shipped.map((release) => (
                <div key={release.version} className="relative">
                  <div className="comic-panel bg-[var(--vf-surface-raised)] p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-[family-name:var(--font-space-mono)] text-[var(--vf-neon-green)] font-bold">
                        {release.version}
                      </span>
                      <span className="font-[family-name:var(--font-bangers)] text-lg tracking-wider text-[var(--vf-text)]">
                        {release.title}
                      </span>
                      <span className="px-2 py-0.5 bg-[var(--vf-forge-yellow)]/10 text-[var(--vf-forge-yellow)] text-xs font-bold rounded">
                        SHIPPED
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {release.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-[var(--vf-text-muted)] line-through decoration-[var(--vf-text-muted)]/30"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Future */}
          <div>
            <h2 className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-deep-purple)] mb-8">
              THE STARS AHEAD
            </h2>
            <div className="space-y-8">
              {future.map((release, i) => (
                <div
                  key={release.version}
                  className="relative"
                  style={{ opacity: 1 - i * 0.2 }}
                >
                  <div className="comic-panel bg-[var(--vf-surface-raised)] p-6 border-dashed">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-[family-name:var(--font-space-mono)] text-[var(--vf-deep-purple)] font-bold">
                        {release.version}
                      </span>
                      <span className="font-[family-name:var(--font-bangers)] text-lg tracking-wider text-[var(--vf-text)]">
                        {release.title}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {release.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-[var(--vf-text-muted)]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
