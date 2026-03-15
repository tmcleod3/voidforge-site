import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { phases } from "@/data/protocol";

interface PhasePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return phases.map((phase) => ({ slug: phase.slug }));
}

export async function generateMetadata({
  params,
}: PhasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const phase = phases.find((p) => p.slug === slug);
  if (!phase) return {};
  return {
    title: `Phase ${phase.number}: ${phase.name}`,
    description: phase.summary,
  };
}

export default async function PhasePage({ params }: PhasePageProps) {
  const { slug } = await params;
  const phaseIndex = phases.findIndex((p) => p.slug === slug);
  if (phaseIndex === -1) notFound();

  const phase = phases[phaseIndex];
  const prevPhase = phaseIndex > 0 ? phases[phaseIndex - 1] : null;
  const nextPhase =
    phaseIndex < phases.length - 1 ? phases[phaseIndex + 1] : null;

  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <PageHeader
          title={`PHASE ${phase.number}`}
          subtitle={phase.name}
        />

        <div className="space-y-8">
          {/* Lead & supporting */}
          <div className="comic-panel bg-[var(--vf-surface-raised)] p-6">
            <h2 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-forge-orange)] mb-3">
              AGENTS
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[var(--vf-forge-orange)]/10 border border-[var(--vf-forge-orange)]/30 rounded text-sm text-[var(--vf-forge-orange)]">
                {phase.lead} (lead)
              </span>
              {phase.supporting.map((agent) => (
                <span
                  key={agent}
                  className="px-3 py-1 bg-[var(--vf-surface-overlay)] border border-[var(--vf-border)] rounded text-sm text-[var(--vf-text-muted)]"
                >
                  {agent}
                </span>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-text)] mb-3">
              WHAT HAPPENS
            </h2>
            <p className="text-[var(--vf-text-muted)]">{phase.summary}</p>
          </div>

          {/* Skip condition */}
          {phase.skipCondition && (
            <div className="comic-panel bg-[var(--vf-surface-raised)] p-4">
              <p className="text-sm text-[var(--vf-text-muted)]">
                <span className="font-bold text-[var(--vf-forge-yellow)]">
                  Skip condition:
                </span>{" "}
                This phase is skipped when the PRD frontmatter sets{" "}
                <code className="text-[var(--vf-electric-blue)]">
                  {phase.skipCondition}
                </code>
                .
              </p>
            </div>
          )}

          {/* Gate */}
          <div>
            <h2 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-text)] mb-3">
              VERIFICATION GATE
            </h2>
            <p className="text-[var(--vf-text-muted)]">
              This phase must pass its gate before proceeding to the next.
              Both manual verification and automated checks are required.
              Gate failure stops the build — no exceptions.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex items-center justify-between gap-4 pt-8 border-t border-[var(--vf-border)]">
            {prevPhase ? (
              <Link
                href={`/protocol/${prevPhase.slug}`}
                className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-forge-orange)] transition-colors"
              >
                &larr; Phase {prevPhase.number}: {prevPhase.name}
              </Link>
            ) : (
              <Link
                href="/protocol"
                className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-forge-orange)] transition-colors"
              >
                &larr; All Phases
              </Link>
            )}
            {nextPhase ? (
              <Link
                href={`/protocol/${nextPhase.slug}`}
                className="text-sm font-bold text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)] transition-colors"
              >
                Phase {nextPhase.number}: {nextPhase.name} &rarr;
              </Link>
            ) : (
              <Link
                href="/protocol"
                className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-forge-orange)] transition-colors"
              >
                All Phases &rarr;
              </Link>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}
