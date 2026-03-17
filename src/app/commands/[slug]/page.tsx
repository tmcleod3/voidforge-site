import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { TrackView } from "@/components/track-view";
import { commands, getCommand } from "@/data/commands";
import { CommandArgs } from "@/components/command-args";

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

export default async function CommandPage({ params }: CommandPageProps) {
  const { slug } = await params;
  const cmd = getCommand(slug);
  if (!cmd) notFound();

  return (
    <div className="px-4 py-16">
      <TrackView event="command_view" props={{ command: cmd.slug }} />
      <div className="mx-auto max-w-3xl">
        <PageHeader title={cmd.name.toUpperCase()} subtitle={cmd.lead} />

        {cmd.badge && (
          <div className="text-center mb-8">
            <span className="px-3 py-1 bg-[var(--vf-neon-green)]/10 text-[var(--vf-neon-green)] text-sm rounded">
              {cmd.badge}
            </span>
          </div>
        )}

        <p className="text-lg text-[var(--vf-text-muted)] mb-8">
          {cmd.description}
        </p>

        {/* Usage */}
        <section className="mb-8">
          <h2 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-text)] mb-3">
            USAGE
          </h2>
          <div className="crt-terminal !p-4">
            <code className="text-lg">{cmd.usage}</code>
          </div>
        </section>

        {/* What happens */}
        <section className="mb-8">
          <h2 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-text)] mb-3">
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
        </section>

        {/* The Armory — command arguments */}
        {cmd.arguments && cmd.arguments.length > 0 && (
          <CommandArgs args={cmd.arguments} commandName={cmd.name} />
        )}

        {/* Note */}
        {cmd.note && (
          <div className="comic-panel bg-[var(--vf-surface-raised)] p-4 mb-8">
            <p className="text-sm text-[var(--vf-text-muted)] italic">
              {cmd.note}
            </p>
          </div>
        )}

        <Link
          href="/commands"
          className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-forge-orange)] transition-colors"
        >
          &larr; All Commands
        </Link>
      </div>
    </div>
  );
}
