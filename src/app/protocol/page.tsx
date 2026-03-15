import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { phases } from "@/data/protocol";

export const metadata: Metadata = {
  title: "Protocol",
  description:
    "The 13-phase build protocol: from PRD to production in a structured, gate-verified sequence.",
};

export default function ProtocolPage() {
  return (
    <>
      <PageHeader
        title="THE PROTOCOL"
        subtitle="14 phases. 13 gates. One sequence from PRD to production."
      />

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-3xl">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--vf-electric-blue)] via-[var(--vf-forge-orange)] to-[var(--vf-neon-green)]"
              aria-hidden="true"
            />

            <ol className="space-y-6 list-none p-0 m-0">
              {phases.map((phase) => (
                <li key={phase.slug}>
                <Link
                  href={`/protocol/${phase.slug}`}
                  className="group block relative pl-16 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--vf-forge-orange)] rounded-sm"
                >
                  {/* Node */}
                  <div
                    className={`absolute left-3 top-2 w-7 h-7 rounded-full border-2 border-[var(--vf-electric-blue)] bg-[var(--vf-void)] flex items-center justify-center text-xs font-bold text-[var(--vf-electric-blue)] group-hover:bg-[var(--vf-electric-blue)] group-hover:text-black transition-colors ${
                      phase.number === 0 ? "w-9 h-9 left-2 text-sm pulse-glow" : ""
                    }`}
                  >
                    {phase.number}
                  </div>

                  <div className="comic-panel bg-[var(--vf-surface-raised)] p-5 group-hover:border-[var(--vf-forge-orange)] transition-colors">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h2 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-text)] group-hover:text-[var(--vf-forge-orange)] transition-colors">
                        {phase.name}
                      </h2>
                      <span className="text-xs text-[var(--vf-text-muted)] font-[family-name:var(--font-space-mono)]">
                        {phase.lead}
                      </span>
                      {phase.skipCondition && (
                        <span className="text-xs px-2 py-0.5 bg-[var(--vf-surface-overlay)] rounded text-[var(--vf-text-muted)]">
                          skip if {phase.skipCondition}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[var(--vf-text-muted)]">
                      {phase.summary}
                    </p>
                  </div>
                </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
