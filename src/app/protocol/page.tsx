import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { AccordionItem } from "@/components/accordion";
import { SpeechBubble } from "@/components/speech-bubble";
import { phases } from "@/data/protocol";

const agentLore: Record<string, { img: string; line: string }> = {
  // Leads
  Picard: { img: "/images/agents/picard.webp", line: "Make it architecture." },
  Stark: { img: "/images/agents/stark.webp", line: "Build the engine." },
  Galadriel: { img: "/images/agents/galadriel.webp", line: "The light of the Forge." },
  Batman: { img: "/images/agents/batman.webp", line: "Every edge case." },
  Kenobi: { img: "/images/agents/kenobi.webp", line: "The high ground is security." },
  Kusanagi: { img: "/images/agents/kusanagi.webp", line: "Target acquired." },
  Coulson: { img: "/images/agents/coulson.webp", line: "The paperwork is handled." },
  Fury: { img: "/images/agents/fury.webp", line: "I didn't ask." },
  Sisko: { img: "/images/agents/sisko.webp", line: "One mission at a time." },
  Celebrimbor: { img: "/images/agents/celebrimbor.webp", line: "The greatest craftsman." },
  Bashir: { img: "/images/agents/bashir.webp", line: "The diagnosis is in." },
  Bombadil: { img: "/images/agents/bombadil.webp", line: "Old Tom keeps the tune." },
  Chani: { img: "/images/agents/chani.webp", line: "The desert remembers." },
  // Sub-agents that appear in protocol phases
  Banner: { img: "/images/agents/subs/banner.webp", line: "Database administration." },
  Romanoff: { img: "/images/agents/subs/romanoff.webp", line: "External API integrations." },
  Oracle: { img: "/images/agents/subs/oracle.webp", line: "Test coverage analysis." },
  "Red Hood": { img: "/images/agents/subs/red-hood.webp", line: "Error path testing." },
  Alfred: { img: "/images/agents/subs/alfred.webp", line: "Code quality, linting." },
  Deathstroke: { img: "/images/agents/subs/deathstroke.webp", line: "Authorization boundary testing." },
  Constantine: { img: "/images/agents/subs/constantine.webp", line: "Config and environment testing." },
  Elrond: { img: "/images/agents/subs/elrond.webp", line: "Design system architecture." },
  Arwen: { img: "/images/agents/subs/arwen.webp", line: "Visual design, theming." },
  Samwise: { img: "/images/agents/subs/samwise.webp", line: "Accessibility audit." },
  Bilbo: { img: "/images/agents/subs/bilbo.webp", line: "Narrative copy, brand voice." },
  Legolas: { img: "/images/agents/subs/legolas.webp", line: "Performance optimization." },
  Gimli: { img: "/images/agents/subs/gimli.webp", line: "Build tooling, bundling." },
  Gandalf: { img: "/images/agents/subs/gandalf.webp", line: "Edge case handling." },
  Leia: { img: "/images/agents/subs/leia.webp", line: "Auth flow audit." },
  Chewie: { img: "/images/agents/subs/chewie.webp", line: "Dependency audit." },
  Rex: { img: "/images/agents/subs/rex.webp", line: "Input validation audit." },
  Maul: { img: "/images/agents/subs/maul.webp", line: "Red-team penetration testing." },
  Yoda: { img: "/images/agents/subs/yoda.webp", line: "Threat modeling." },
  Windu: { img: "/images/agents/subs/windu.webp", line: "CSP and header review." },
  Ahsoka: { img: "/images/agents/subs/ahsoka.webp", line: "Secrets management audit." },
  "Padmé": { img: "/images/agents/subs/padmé.webp", line: "Compliance review." },
  "Éowyn": { img: "/images/agents/subs/éowyn.webp", line: "Enchantment and delight." },
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
                            const baseName = name.replace(/\s*\(.*\)/, "");
                            const suffix = name.includes("(") ? name.replace(/^[^(]*/, "") : "";
                            const info = agentLore[baseName];
                            return (
                              <div key={name} className="flex items-center gap-2">
                                {info ? (
                                  /* eslint-disable-next-line @next/next/no-img-element */
                                  <img
                                    src={info.img}
                                    alt={baseName}
                                    className="w-7 h-7 rounded-full border border-[var(--vf-border)] object-cover flex-shrink-0"
                                  />
                                ) : (
                                  <span className="w-7 h-7 rounded-full bg-[var(--vf-surface-overlay)] border border-[var(--vf-border)] flex items-center justify-center text-[10px] text-[var(--vf-text-muted)] flex-shrink-0">
                                    {baseName[0]}
                                  </span>
                                )}
                                <div className="min-w-0">
                                  <span className={`text-sm ${i === 0 ? "text-[var(--vf-forge-orange)] font-medium" : "text-[var(--vf-text-muted)]"}`}>
                                    {baseName}{i === 0 ? " (lead)" : ""}{suffix ? ` ${suffix}` : ""}
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
