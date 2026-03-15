import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { AccordionItem } from "@/components/accordion";
import { SpeechBubble } from "@/components/speech-bubble";
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

      <section className="px-4 pb-12">
        <div className="mx-auto max-w-4xl">
          <SpeechBubble agent="Picard" universe="star-trek">
            Every phase has a verification gate. You do not advance until the
            gate passes. This is not bureaucracy — it is discipline. The
            difference between a ship that launches and a ship that explodes is
            whether someone checked the seals.
          </SpeechBubble>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-4xl">
          {/* Timeline with accordions */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--vf-electric-blue)] via-[var(--vf-forge-orange)] to-[var(--vf-neon-green)]"
              aria-hidden="true"
            />

            <ol className="space-y-4 list-none p-0 m-0">
              {phases.map((phase) => (
                <li key={phase.slug} className="relative pl-16">
                  {/* Node */}
                  <div
                    className={`absolute top-5 rounded-full border-2 border-[var(--vf-electric-blue)] bg-[var(--vf-void)] flex items-center justify-center font-bold text-[var(--vf-electric-blue)] z-10 ${
                      phase.number === 0
                        ? "w-9 h-9 left-[7px] text-sm pulse-glow"
                        : "w-7 h-7 left-3 text-xs"
                    }`}
                  >
                    {phase.number}
                  </div>

                  <AccordionItem
                    title={
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-text)]">
                          {phase.name}
                        </span>
                        <span className="text-xs text-[var(--vf-text-muted)] font-[family-name:var(--font-space-mono)]">
                          {phase.lead}
                        </span>
                        {phase.skipCondition && (
                          <span className="text-xs px-2 py-0.5 bg-[var(--vf-surface-overlay)] rounded text-[var(--vf-text-muted)]">
                            skip if {phase.skipCondition}
                          </span>
                        )}
                      </div>
                    }
                  >
                    <div className="pt-4 space-y-4">
                      <p className="text-[var(--vf-text-muted)]">
                        {phase.summary}
                      </p>

                      {/* Agents */}
                      <div>
                        <h3 className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-forge-orange)] mb-2">
                          AGENTS ON DECK
                        </h3>
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

                      {/* Gate */}
                      <div className="crt-terminal !p-3 text-sm">
                        <span className="text-[var(--vf-forge-yellow)]">
                          GATE:
                        </span>{" "}
                        Must pass before advancing. Both manual verification
                        and automated checks required. No exceptions.
                      </div>
                    </div>
                  </AccordionItem>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
