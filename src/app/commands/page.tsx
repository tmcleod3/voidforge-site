import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { AccordionItem } from "@/components/accordion";
import { SpeechBubble } from "@/components/speech-bubble";
import { commands } from "@/data/commands";

export const metadata: Metadata = {
  title: "Commands",
  description:
    "23 slash commands: /build, /qa, /test, /security, /ux, /review, /devops, /architect, /git, /void, /thumper, /assemble, /campaign, /imagine, /debrief, /gauntlet, /prd, /grow, /treasury, /portfolio, /cultivation, /current.",
};

export default function CommandsPage() {
  return (
    <>
      <PageHeader
        title="MISSION BRIEFING"
        subtitle="23 slash commands. Type one. Watch the agents mobilize."
      />

      <section className="px-4 pb-12">
        <div className="mx-auto max-w-4xl">
          <SpeechBubble agent="Coulson" universe="marvel">
            Each command activates a specific team for a specific mission.
            You don&apos;t need to know which agents to call — just tell the
            forge what you need done. The right agents will answer.
          </SpeechBubble>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-4xl">
          {[
            { label: "BUILD", tagline: "Type one command. Watch the forge ignite.", slugs: ["build", "assemble", "campaign", "imagine", "prd"] },
            { label: "GROWTH", tagline: "Build it. Then grow it.", slugs: ["grow", "cultivation", "current", "treasury", "portfolio"] },
            { label: "REVIEW", tagline: "Trust nothing. Verify everything.", slugs: ["qa", "test", "review", "ux", "security", "gauntlet"] },
            { label: "OPERATIONS", tagline: "The machinery behind the magic.", slugs: ["devops", "architect", "git", "void", "thumper", "debrief", "dangerroom"] },
          ].map((group) => (
            <div key={group.label} className="mb-10">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-forge-orange)]">
                  {group.label}
                </h3>
              </div>
              <p className="text-xs text-[var(--vf-text-muted)] italic mb-4">
                {group.tagline}
              </p>
              <div className="space-y-3">
          {commands.filter((cmd) => group.slugs.includes(cmd.slug)).map((cmd) => (
            <AccordionItem
              key={cmd.slug}
              title={
                <div className="flex items-center gap-3 flex-wrap">
                  <code className="font-[family-name:var(--font-space-mono)] text-[var(--vf-terminal-green)] text-lg font-bold">
                    {cmd.name}
                  </code>
                  <span className="text-xs text-[var(--vf-text-muted)]">
                    {cmd.lead}
                  </span>
                  {cmd.arguments && cmd.arguments.length > 0 && (
                    <span className="px-1.5 py-0.5 text-[10px] bg-[var(--vf-forge-orange)]/10 text-[var(--vf-forge-orange)] rounded font-bold">
                      {cmd.arguments.length} flag{cmd.arguments.length !== 1 ? "s" : ""}
                    </span>
                  )}
                </div>
              }
              badge={
                cmd.badge ? (
                  <span className="px-2 py-0.5 bg-[var(--vf-neon-green)]/10 text-[var(--vf-neon-green)] text-xs rounded">
                    {cmd.badge}
                  </span>
                ) : undefined
              }
            >
              <div className="pt-4 space-y-4">
                <p className="text-[var(--vf-text-muted)]">
                  {cmd.description}
                </p>

                {/* Usage */}
                <div className="crt-terminal !p-3">
                  <code className="text-sm">{cmd.usage}</code>
                </div>

                {/* What happens */}
                <div>
                  <h3 className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-forge-orange)] mb-2">
                    WHAT HAPPENS
                  </h3>
                  <ol className="space-y-2 list-none p-0">
                    {cmd.whatHappens.map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--vf-forge-orange)]/10 text-[var(--vf-forge-orange)] text-xs flex items-center justify-center font-bold mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-sm text-[var(--vf-text-muted)]">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Note */}
                {cmd.note && (
                  <p className="text-xs text-[var(--vf-text-muted)] italic border-l-2 border-[var(--vf-forge-orange)] pl-3">
                    {cmd.note}
                  </p>
                )}

                {/* Detail page link */}
                <Link
                  href={`/commands/${cmd.slug}`}
                  className="inline-flex items-center gap-1 text-xs text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)] transition-colors font-bold uppercase tracking-wider"
                  aria-label={cmd.arguments && cmd.arguments.length > 0
                    ? `Open the Armory for ${cmd.name}`
                    : `Full details for ${cmd.name}`}
                >
                  {cmd.arguments && cmd.arguments.length > 0
                    ? "Open the Armory →"
                    : "Full details →"}
                </Link>
              </div>
            </AccordionItem>
          ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
