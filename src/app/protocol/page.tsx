import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { AccordionItem } from "@/components/accordion";
import { SpeechBubble } from "@/components/speech-bubble";
import { phases } from "@/data/protocol";

const agentLore: Record<string, { slug: string; line: string }> = {
  Picard: { slug: "picard", line: "Make it architecture." },
  Stark: { slug: "stark", line: "Build the engine." },
  Galadriel: { slug: "galadriel", line: "The light of the Forge." },
  Batman: { slug: "batman", line: "Every edge case." },
  Kenobi: { slug: "kenobi", line: "The high ground is security." },
  Kusanagi: { slug: "kusanagi", line: "Target acquired." },
  Coulson: { slug: "coulson", line: "The paperwork is handled." },
  Fury: { slug: "fury", line: "I didn't ask." },
  Sisko: { slug: "sisko", line: "One mission at a time." },
  Celebrimbor: { slug: "celebrimbor", line: "The greatest craftsman." },
  Bashir: { slug: "bashir", line: "The diagnosis is in." },
  Bombadil: { slug: "bombadil", line: "Old Tom keeps the tune." },
  Chani: { slug: "chani", line: "The desert remembers." },
};

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

                      {/* Agents with headshots */}
                      <div>
                        <h3 className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-forge-orange)] mb-3">
                          AGENTS ON DECK
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {[phase.lead, ...phase.supporting].map((name, i) => {
                            const info = agentLore[name];
                            return (
                              <div key={name} className="flex items-center gap-2">
                                {info && (
                                  /* eslint-disable-next-line @next/next/no-img-element */
                                  <img
                                    src={`/images/agents/${info.slug}.webp`}
                                    alt={name}
                                    className="w-7 h-7 rounded-full border border-[var(--vf-border)] object-cover flex-shrink-0"
                                  />
                                )}
                                <div className="min-w-0">
                                  <span className={`text-sm ${i === 0 ? "text-[var(--vf-forge-orange)] font-medium" : "text-[var(--vf-text-muted)]"}`}>
                                    {name}{i === 0 ? " (lead)" : ""}
                                  </span>
                                  {info && (
                                    <p className="text-[10px] text-[var(--vf-text-muted)] italic">
                                      {info.line}
                                    </p>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
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
