import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { SpeechBubble } from "@/components/speech-bubble";
import { patterns } from "@/data/patterns";

const groups = [
  {
    id: "web",
    label: "WEB",
    tagline: "The foundation. Every web app starts here.",
    color: "var(--vf-electric-blue)",
    slugs: ["api-route", "service", "component", "middleware", "error-handling", "job-queue", "multi-tenant", "sse-endpoint", "third-party-script"],
  },
  {
    id: "mobile",
    label: "MOBILE",
    tagline: "Take the forge mobile.",
    color: "var(--vf-neon-green)",
    slugs: ["mobile-screen", "mobile-service"],
  },
  {
    id: "game",
    label: "GAME",
    tagline: "Real-time. Frame-perfect.",
    color: "var(--vf-forge-orange)",
    slugs: ["game-loop", "game-state", "game-entity"],
  },
  {
    id: "systems",
    label: "SYSTEMS",
    tagline: "Infrastructure that runs itself.",
    color: "var(--vf-deep-purple)",
    slugs: ["ad-platform-adapter", "financial-transaction", "daemon-process", "revenue-source-adapter", "oauth-token-lifecycle", "outbound-rate-limiter", "database-migration", "data-pipeline", "backtest-engine", "execution-safety", "e2e-test", "browser-review", "stablecoin-adapter", "ad-billing-adapter", "funding-plan"],
  },
  {
    id: "ai",
    label: "AI",
    tagline: "The intelligence layer.",
    color: "var(--vf-foundation)",
    slugs: ["ai-orchestrator", "ai-classifier", "ai-router", "prompt-template", "ai-eval", "ai-tool-schema"],
  },
];

const multiFrameworkCount = patterns.filter((p) => p.frameworks.length > 1).length;

export const metadata: Metadata = {
  title: "Patterns",
  description: `${patterns.length} reference code patterns covering API routes, services, components, middleware, error handling, mobile, game dev, financial transactions, SSE, OAuth, and more.`,
  alternates: { canonical: "/patterns" },
};

function frameworkLabel(count: number, frameworks: { label: string }[]): string {
  if (count > 1) return `${count} frameworks`;
  return frameworks[0]?.label ?? "TypeScript";
}

export default function PatternsPage() {
  return (
    <>
      <PageHeader
        title="CODE PATTERNS"
        subtitle={`${patterns.length} reference implementations. Match these shapes when you write.`}
      />

      <section className="px-4 pb-8">
        <div className="mx-auto max-w-4xl">
          <SpeechBubble agent="Stark" universe="marvel">
            These aren&apos;t suggestions. They&apos;re battle-tested shapes
            that every agent knows how to read. Write your code to match these
            patterns and the whole team can review, test, and extend it without
            asking what you meant.
          </SpeechBubble>
        </div>
      </section>

      {/* Stats bar */}
      <section className="px-4 pb-6">
        <div className="mx-auto max-w-4xl flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-[var(--vf-text-muted)]">
          <span><strong className="text-[var(--vf-forge-orange)]">{patterns.length}</strong> patterns</span>
          <span className="text-[var(--vf-border)]">|</span>
          <span><strong className="text-[var(--vf-forge-orange)]">{multiFrameworkCount}</strong> with multi-framework tabs</span>
          <span className="text-[var(--vf-border)]">|</span>
          <span><strong className="text-[var(--vf-forge-orange)]">{groups.length}</strong> domains</span>
        </div>
      </section>

      {/* Jump nav */}
      <section className="px-4 pb-10">
        <nav className="mx-auto max-w-4xl flex flex-wrap justify-center gap-2" aria-label="Pattern groups">
          {groups.map((g) => {
            const count = patterns.filter((p) => g.slugs.includes(p.slug)).length;
            return (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full border border-[var(--vf-border)] hover:border-current transition-colors"
                style={{ color: g.color }}
              >
                {g.label} ({count})
              </a>
            );
          })}
        </nav>
      </section>

      {/* Pattern groups */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-4xl space-y-14">
          {groups.map((group) => {
            const groupPatterns = patterns.filter((p) =>
              group.slugs.includes(p.slug)
            );
            if (groupPatterns.length === 0) return null;

            return (
              <div key={group.id} id={group.id} className="scroll-mt-20">
                {/* Group header */}
                <div
                  className="border-l-4 pl-4 mb-6"
                  style={{ borderColor: group.color }}
                >
                  <h2
                    className="font-[family-name:var(--font-bangers)] text-2xl tracking-wider"
                    style={{ color: group.color }}
                  >
                    {group.label}
                  </h2>
                  <p className="text-xs text-[var(--vf-text-muted)] italic">
                    {group.tagline}
                  </p>
                </div>

                {/* Dossier cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {groupPatterns.map((pattern) => (
                    <Link
                      key={pattern.slug}
                      href={`/patterns/${pattern.slug}`}
                      className="comic-panel bg-[var(--vf-surface-raised)] p-4 border-l-4 flex flex-col gap-3 group hover:bg-[var(--vf-surface-overlay)] transition-all motion-safe:hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--vf-forge-orange)]/5"
                      style={{ borderLeftColor: group.color }}
                    >
                      {/* Row 1: filename + framework badge */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <code className="font-[family-name:var(--font-space-mono)] text-[var(--vf-electric-blue)] text-sm font-bold">
                          {pattern.name}
                        </code>
                        <span className="font-[family-name:var(--font-bangers)] text-base tracking-wider text-[var(--vf-text)]">
                          {pattern.title}
                        </span>
                        <span
                          className="ml-auto px-1.5 py-0.5 text-[9px] rounded font-bold uppercase tracking-wider shrink-0"
                          style={{
                            color: pattern.frameworks.length > 1 ? "var(--vf-electric-blue)" : "var(--vf-text-muted)",
                            backgroundColor: pattern.frameworks.length > 1
                              ? "color-mix(in srgb, var(--vf-electric-blue) 10%, transparent)"
                              : "var(--vf-surface-overlay)",
                          }}
                        >
                          {frameworkLabel(pattern.frameworks.length, pattern.frameworks)}
                        </span>
                      </div>

                      {/* Row 2: description */}
                      <p className="text-sm text-[var(--vf-text-muted)] line-clamp-2">
                        {pattern.description}
                      </p>

                      {/* Row 3: code preview */}
                      <div className="crt-terminal !p-3 text-[11px] leading-tight">
                        <pre className="whitespace-pre-wrap line-clamp-3">{pattern.preview}</pre>
                      </div>

                      {/* Row 4: CTA */}
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--vf-forge-orange)] group-hover:text-[var(--vf-forge-yellow)] transition-colors">
                        {pattern.frameworks.length > 1
                          ? "View with framework tabs →"
                          : "View full pattern →"}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
