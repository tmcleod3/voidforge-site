import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { SpeechBubble } from "@/components/speech-bubble";
import { TrackView } from "@/components/track-view";
import { commands, getCommand } from "@/data/commands";
import { CommandArgs } from "@/components/command-args";
import { leadAgents, type Universe } from "@/data/agents";

interface CommandPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return commands.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: CommandPageProps): Promise<Metadata> {
  const { slug } = await params;
  const cmd = getCommand(slug);
  if (!cmd) return {};
  return {
    title: cmd.name,
    description: cmd.description,
  };
}

function getAgentUniverse(leadName: string): Universe | undefined {
  const agent = leadAgents.find(
    (a) => a.name === leadName || a.commandsLed.includes(`/${leadName.toLowerCase()}`)
  );
  return agent?.universe;
}

export default async function CommandPage({ params }: CommandPageProps) {
  const { slug } = await params;
  const cmd = getCommand(slug);
  if (!cmd) notFound();

  const speakingAgent = cmd.lead === "All agents" ? "Fury" : cmd.lead;
  const universe = getAgentUniverse(speakingAgent);

  return (
    <>
      <TrackView event="command_view" props={{ command: cmd.slug }} />
      <PageHeader title={cmd.name.toUpperCase()} subtitle={cmd.lead} />

      <section className="px-4 pb-12">
        <div className="mx-auto max-w-4xl">
          <SpeechBubble agent={speakingAgent} universe={universe}>
            {cmd.description}
          </SpeechBubble>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-4xl space-y-8">
          {cmd.badge && (
            <div>
              <span className="px-3 py-1 bg-[var(--vf-neon-green)]/10 text-[var(--vf-neon-green)] text-sm rounded">
                {cmd.badge}
              </span>
            </div>
          )}

          {/* Usage */}
          <div>
            <h2 className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-forge-orange)] mb-2">
              USAGE
            </h2>
            <div className="crt-terminal !p-4">
              <code className="text-lg">{cmd.usage}</code>
            </div>
          </div>

          {/* What happens */}
          <div>
            <h2 className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-forge-orange)] mb-2">
              WHAT HAPPENS
            </h2>
            <ol className="space-y-3">
              {cmd.whatHappens.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--vf-forge-orange)]/10 text-[var(--vf-forge-orange)] text-xs flex items-center justify-center font-bold">
                    {i + 1}
                  </span>
                  <span className="text-[var(--vf-text-muted)]">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* The Armory — command arguments */}
          {cmd.arguments && cmd.arguments.length > 0 && (
            <CommandArgs args={cmd.arguments} commandName={cmd.name} />
          )}

          {/* Note */}
          {cmd.note && (
            <div className="comic-panel bg-[var(--vf-surface-raised)] p-4">
              <p className="text-sm text-[var(--vf-text-muted)] italic">
                {cmd.note}
              </p>
            </div>
          )}

          <Link
            href="/commands"
            className="inline-block text-sm text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)] transition-colors"
          >
            &larr; Back to Mission Briefing
          </Link>
        </div>
      </section>
    </>
  );
}
