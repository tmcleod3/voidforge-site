import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "About",
  description:
    "Thomas McLeod — serial entrepreneur, engineer, and creator of VoidForge.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="ABOUT" subtitle="The creator and the creation." />

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-3xl">
          {/* Creator card */}
          <div className="comic-panel bg-[var(--vf-surface-raised)] p-8 mb-12">
            <h2 className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-forge-orange)] mb-4">
              THOMAS MCLEOD
            </h2>
            <p className="text-[var(--vf-text-muted)] mb-4">
              5x serial entrepreneur. American University. Based in Los Angeles.
              Built Arkive, PageLime, Saltwater, and now VoidForge.
            </p>
            <p className="text-[var(--vf-text-muted)] mb-6">
              VoidForge started as a personal methodology for shipping
              production apps faster with Claude Code. It grew into a framework
              with 170+ named AI agents, a 13-phase build protocol, and a
              community of developers who want their AI coding workflow to go
              from &ldquo;vibes&rdquo; to &ldquo;protocol.&rdquo;
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/tmcleod3/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[var(--vf-forge-orange)] text-black font-bold rounded-md hover:bg-[var(--vf-forge-yellow)] transition-colors text-sm"
              >
                LINKEDIN
              </a>
              <a
                href="https://github.com/tmcleod3/voidforge"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border-2 border-[var(--vf-border)] text-[var(--vf-text)] font-bold rounded-md hover:border-[var(--vf-forge-orange)] transition-colors text-sm"
              >
                VIEW THE SOURCE
              </a>
            </div>
          </div>

          {/* Built by the Forge */}
          <div>
            <h2 className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6">
              BUILT BY THE FORGE
            </h2>
            <p className="text-[var(--vf-text-muted)] mb-6">
              This website is itself a VoidForge project. It was built using the
              same methodology it documents — a self-referential proof of the
              system&apos;s capability. Here&apos;s how the agents contributed:
            </p>

            {/* Build sequence strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {[
                { agent: "Picard", action: "Oriented", color: "var(--vf-star-trek)" },
                { agent: "Stark", action: "Built API", color: "var(--vf-marvel)" },
                { agent: "Galadriel", action: "Designed UI", color: "var(--vf-tolkien)" },
                { agent: "Batman", action: "Tested", color: "var(--vf-dc)" },
                { agent: "Kenobi", action: "Secured", color: "var(--vf-star-wars)" },
                { agent: "Kusanagi", action: "Deployed", color: "var(--vf-anime)" },
              ].map((step) => (
                <div
                  key={step.agent}
                  className="comic-panel bg-[var(--vf-surface-raised)] p-3 text-center"
                >
                  <p
                    className="font-[family-name:var(--font-bangers)] text-sm tracking-wider mb-0.5"
                    style={{ color: step.color }}
                  >
                    {step.agent}
                  </p>
                  <p className="text-xs text-[var(--vf-text-muted)]">
                    {step.action}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-sm text-[var(--vf-text-muted)] mt-6 italic">
              This page was Phase 8 of its own build process.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
