import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SpeechBubble } from "@/components/speech-bubble";
import { CopyButton } from "@/components/copy-button";
import { TutorialNav } from "@/components/tutorial-nav";
import { TableOfContents } from "@/components/table-of-contents";
import { TutorialProgress } from "@/components/tutorial-progress";

export const metadata: Metadata = {
  title: "Install",
  description:
    "Install VoidForge: prerequisites, three tiers, and troubleshooting.",
};

const tocItems = [
  { id: "prerequisites", label: "Prerequisites" },
  { id: "three-tiers", label: "The Three Tiers" },
];

export default function InstallPage() {
  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <PageHeader title="INSTALL" subtitle="Step 1 of 3" />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/tutorials/tutorial-install.png"
          alt="Install — a toolbox opening with glowing developer tools"
          className="w-full rounded-lg comic-panel mb-8"
        />

        <TableOfContents items={tocItems} />

        <SpeechBubble agent="Galadriel" universe="tolkien">
          Welcome, builder. Before you can forge, you need the tools. Node.js 18
          or later, and Claude Code installed and authenticated. That&apos;s it.
          Let&apos;s get you set up.
        </SpeechBubble>

        <section className="mt-12">
          <h2
            id="prerequisites"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            PREREQUISITES
          </h2>
          <ul className="space-y-3 text-[var(--vf-text-muted)]">
            <li className="flex items-start gap-3">
              <span className="text-[var(--vf-neon-green)] mt-1">&#10003;</span>
              <span>
                <strong className="text-[var(--vf-text)]">Node.js 18+</strong>{" "}
                — Check with{" "}
                <code className="font-[family-name:var(--font-space-mono)] text-[var(--vf-electric-blue)]">
                  node --version
                </code>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--vf-neon-green)] mt-1">&#10003;</span>
              <span>
                <strong className="text-[var(--vf-text)]">Claude Code</strong>{" "}
                — Anthropic&apos;s CLI tool. Install and authenticate before
                proceeding.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--vf-neon-green)] mt-1">&#10003;</span>
              <span>
                <strong className="text-[var(--vf-text)]">Git</strong> —
                Required for Scaffold and Core tiers.
              </span>
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2
            id="three-tiers"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            THE THREE TIERS
          </h2>

          <div className="space-y-6">
            {/* Full */}
            <div className="comic-panel bg-[var(--vf-surface-raised)] p-6">
              <h3 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-forge-orange)] mb-2">
                FULL TIER
              </h3>
              <p className="text-sm text-[var(--vf-text-muted)] mb-4">
                The complete forge — Merlin&apos;s setup wizard, Strange&apos;s
                deploy wizard, AWS provisioners, encrypted credential vault,
                Telegram bridge, and all 170+ agents ready to build.
              </p>
              <div className="crt-terminal flex items-center justify-between gap-2 !p-3">
                <code className="text-sm break-all">
                  <span className="text-[var(--vf-text-muted)]">$ </span>
                  git clone https://github.com/tmcleod3/voidforge.git my-project && cd my-project && npm install
                </code>
                <CopyButton text="git clone https://github.com/tmcleod3/voidforge.git my-project && cd my-project && npm install" />
              </div>
            </div>

            {/* Scaffold */}
            <div className="comic-panel bg-[var(--vf-surface-raised)] p-6">
              <h3 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-forge-orange)] mb-2">
                SCAFFOLD TIER
              </h3>
              <p className="text-sm text-[var(--vf-text-muted)] mb-4">
                Methodology only — CLAUDE.md, commands, methods, patterns, and
                the Holocron. Clone it, add your PRD, and run{" "}
                <code className="text-[var(--vf-electric-blue)]">/build</code>.
              </p>
              <div className="crt-terminal flex items-center justify-between gap-2 !p-3">
                <code className="text-sm break-all">
                  <span className="text-[var(--vf-text-muted)]">$ </span>
                  git clone --branch scaffold
                  https://github.com/tmcleod3/voidforge.git my-project
                </code>
                <CopyButton text="git clone --branch scaffold https://github.com/tmcleod3/voidforge.git my-project" />
              </div>
            </div>

            {/* Core */}
            <div className="comic-panel bg-[var(--vf-surface-raised)] p-6">
              <h3 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-forge-orange)] mb-2">
                CORE TIER
              </h3>
              <p className="text-sm text-[var(--vf-text-muted)] mb-4">
                Ultra-light — CLAUDE.md, commands, methods, patterns, naming
                registry. Point Claude Code at the branch to absorb the
                methodology.
              </p>
              <div className="crt-terminal flex items-center justify-between gap-2 !p-3">
                <code className="text-sm break-all">
                  <span className="text-[var(--vf-text-muted)]">$ </span>
                  git clone --branch core
                  https://github.com/tmcleod3/voidforge.git my-project
                </code>
                <CopyButton text="git clone --branch core https://github.com/tmcleod3/voidforge.git my-project" />
              </div>
            </div>
          </div>
        </section>

        <TutorialNav
          prev={{ href: "/tutorial", label: "Tutorial Hub" }}
          next={{ href: "/tutorial/first-build", label: "First Build" }}
        />
        <TutorialProgress step="install" />
      </div>
    </div>
  );
}
