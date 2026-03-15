import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { commands } from "@/data/commands";

export const metadata: Metadata = {
  title: "Commands",
  description:
    "11 slash commands: /build, /qa, /test, /security, /ux, /review, /devops, /architect, /git, /void, /thumper.",
};

export default function CommandsPage() {
  return (
    <>
      <PageHeader
        title="MISSION BRIEFING"
        subtitle="11 slash commands. Type one and watch the agents work."
      />

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-3">
            {commands.map((cmd) => (
              <Link
                key={cmd.slug}
                href={`/commands/${cmd.slug}`}
                className="group block comic-panel bg-[var(--vf-surface-raised)] p-5 hover:border-[var(--vf-forge-orange)] transition-colors"
              >
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <code className="font-[family-name:var(--font-space-mono)] text-[var(--vf-terminal-green)] text-lg font-bold">
                    {cmd.name}
                  </code>
                  <span className="text-xs text-[var(--vf-text-muted)]">
                    {cmd.lead}
                  </span>
                  {cmd.badge && (
                    <span className="px-2 py-0.5 bg-[var(--vf-neon-green)]/10 text-[var(--vf-neon-green)] text-xs rounded">
                      {cmd.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-[var(--vf-text-muted)]">
                  {cmd.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
