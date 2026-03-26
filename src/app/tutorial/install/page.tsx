import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { SpeechBubble } from "@/components/speech-bubble";
import { CopyButton } from "@/components/copy-button";
import { TutorialNav } from "@/components/tutorial-nav";
import { TableOfContents } from "@/components/table-of-contents";
import { TutorialProgress } from "@/components/tutorial-progress";

export const metadata: Metadata = {
  title: "How to Install VoidForge",
  description:
    "Install VoidForge: prerequisites, three tiers, OS verification, and Windows setup notes.",
};

const tocItems = [
  { id: "prerequisites", label: "Prerequisites" },
  { id: "verify-your-tools", label: "Verify Your Tools" },
  { id: "three-tiers", label: "The Three Tiers" },
  { id: "windows-notes", label: "Windows Notes" },
];

export default function InstallPage() {
  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <Link href="/tutorial" className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-forge-orange)] transition-colors mb-4 inline-block">
          &larr; Tutorial Hub
        </Link>
        <PageHeader title="INSTALL" subtitle="Step 1 of 3" />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/tutorials/tutorial-install.webp"
          alt="Install — a toolbox opening with glowing developer tools"
          className="w-full rounded-lg comic-panel mb-8 float-gentle"
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
                — The runtime that powers the forge.{" "}
                <a
                  href="https://nodejs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
                >
                  Download from nodejs.org
                </a>{" "}
                (LTS recommended). Verify with{" "}
                <code className="font-[family-name:var(--font-space-mono)] text-[var(--vf-electric-blue)]">
                  node --version
                </code>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--vf-neon-green)] mt-1">&#10003;</span>
              <span>
                <strong className="text-[var(--vf-text)]">Claude Code</strong>{" "}
                — Anthropic&apos;s coding CLI. This is the engine that runs
                every agent, every command, every build phase.{" "}
                <a
                  href="https://docs.anthropic.com/en/docs/claude-code/overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
                >
                  Install Claude Code
                </a>
                , then authenticate with your Anthropic API key before
                proceeding.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--vf-neon-green)] mt-1">&#10003;</span>
              <span>
                <strong className="text-[var(--vf-text)]">Git</strong> —
                Required for all tiers.{" "}
                <a
                  href="https://git-scm.com/downloads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
                >
                  Download from git-scm.com
                </a>
                . Verify with{" "}
                <code className="font-[family-name:var(--font-space-mono)] text-[var(--vf-electric-blue)]">
                  git --version
                </code>
              </span>
            </li>
          </ul>

          <SpeechBubble agent="Kusanagi" universe="anime">
            Windows? PowerShell works. macOS or Linux? Your default terminal
            works. If npm gives you trouble on Windows, the Scaffold tier is your
            fastest path — no native compilation, no npm headaches. Just git
            clone and go.
          </SpeechBubble>
        </section>

        <section className="mt-12">
          <h2
            id="verify-your-tools"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            VERIFY YOUR TOOLS
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Open your terminal and run these three commands. If any fails,
            install the missing tool using the links above.
          </p>
          <div className="crt-terminal !p-4 mb-6 space-y-3">
            <div className="flex items-start gap-3">
              <code className="text-sm">
                <span className="text-[var(--vf-text-muted)]">$ </span>
                node --version
              </code>
              <span className="text-[var(--vf-text-muted)] text-xs mt-0.5">
                → v18.x or higher
              </span>
            </div>
            <div className="flex items-start gap-3">
              <code className="text-sm">
                <span className="text-[var(--vf-text-muted)]">$ </span>
                git --version
              </code>
              <span className="text-[var(--vf-text-muted)] text-xs mt-0.5">
                → any version
              </span>
            </div>
            <div className="flex items-start gap-3">
              <code className="text-sm">
                <span className="text-[var(--vf-text-muted)]">$ </span>
                claude --version
              </code>
              <span className="text-[var(--vf-text-muted)] text-xs mt-0.5">
                → Claude Code CLI
              </span>
            </div>
          </div>
          <p className="text-[var(--vf-text-muted)] text-sm">
            All three green? You&apos;re ready to forge. If{" "}
            <code className="text-[var(--vf-electric-blue)]">node</code> or{" "}
            <code className="text-[var(--vf-electric-blue)]">git</code>{" "}
            isn&apos;t found, install them using the links above and restart your
            terminal.
          </p>
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
                The complete forge — Gandalf&apos;s setup wizard, Haku&apos;s
                deploy wizard, AWS provisioners, encrypted credential vault,
                Telegram bridge, and all 260+ agents ready to build.
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

        <section className="mt-12">
          <h2
            id="windows-notes"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            WINDOWS NOTES
          </h2>
          <div className="comic-panel bg-[var(--vf-surface-raised)] p-6 space-y-4">
            <p className="text-[var(--vf-text-muted)]">
              <strong className="text-[var(--vf-text)]">PowerShell 7+</strong>{" "}
              supports the <code className="text-[var(--vf-electric-blue)]">&&</code>{" "}
              syntax in our install commands. If you&apos;re using the older
              Windows PowerShell 5.1, run each command separately instead of
              chaining with <code className="text-[var(--vf-electric-blue)]">&&</code>.
            </p>
            <p className="text-[var(--vf-text-muted)]">
              <strong className="text-[var(--vf-text)]">npm install fails?</strong>{" "}
              The Full tier compiles native modules that need C++ build tools.
              If you see <code className="text-[var(--vf-electric-blue)]">node-gyp</code>{" "}
              errors, either install{" "}
              <a
                href="https://visualstudio.microsoft.com/visual-cpp-build-tools/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
              >
                Visual C++ Build Tools
              </a>{" "}
              or skip npm entirely — use the{" "}
              <strong className="text-[var(--vf-forge-orange)]">Scaffold tier</strong>{" "}
              instead. It needs only Git, no native compilation.
            </p>
            <p className="text-[var(--vf-text-muted)]">
              <strong className="text-[var(--vf-text)]">VS Code users:</strong>{" "}
              Open the integrated terminal (Ctrl+`) and you&apos;re ready.
              Works with PowerShell, Command Prompt, Git Bash, or WSL.
            </p>
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
