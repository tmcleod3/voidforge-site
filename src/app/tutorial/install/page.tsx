import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SpeechBubble } from "@/components/speech-bubble";
import { CopyButton } from "@/components/copy-button";
import { TutorialNav } from "@/components/tutorial-nav";
import { TableOfContents } from "@/components/table-of-contents";
import { display } from "@/data/stats";
import { TutorialProgress } from "@/components/tutorial-progress";

export const metadata: Metadata = {
  title: "How to Install VoidForge",
  description:
    "Install VoidForge: prerequisites, npm install, quick start, and platform troubleshooting.",
};

const tocItems = [
  { id: "prerequisites", label: "Prerequisites" },
  { id: "quick-start", label: "Quick Start" },
  { id: "platform-install", label: "Platform-Specific Node Installation" },
  { id: "verify-your-tools", label: "Verify Your Tools" },
  { id: "troubleshooting", label: "Troubleshooting" },
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
          Welcome, builder. Before you can forge, you need the tools. Node.js 20
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
                  <strong className="text-[var(--vf-text)]">Node.js 20+</strong>{" "}
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
                  every agent, every command, every build phase. Install with:{" "}
                  <code className="font-[family-name:var(--font-space-mono)] text-[var(--vf-electric-blue)]">
                    curl -fsSL https://claude.ai/install.sh | bash
                  </code>{" "}
                  then authenticate with your Anthropic API key. See the{" "}
                  <a
                    href="https://docs.anthropic.com/en/docs/claude-code/overview"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
                  >
                    Claude Code docs
                  </a>{" "}
                  for details.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--vf-neon-green)] mt-1">&#10003;</span>
                <span>
                  <strong className="text-[var(--vf-text)]">Git</strong> —
                  Required for version control.{" "}
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
              works. One command gets you the whole forge. No git branches, no
              manual cloning — just npm.
            </SpeechBubble>
          </section>

        <ScrollReveal delay={0.06}>
          <section className="mt-12">
            <h2
              id="quick-start"
              tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            QUICK START
          </h2>

          <div className="space-y-6">
            <div className="comic-panel bg-[var(--vf-surface-raised)] p-6">
              <h3 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-forge-orange)] mb-2">
                CREATE A PROJECT
              </h3>
              <p className="text-sm text-[var(--vf-text-muted)] mb-3">
                One command creates a new project with the wizard, methodology,
                and {display.agents} agent definitions — everything you need.
              </p>
              <div className="crt-terminal flex items-center justify-between gap-2 !p-3 mb-3">
                <code className="text-sm break-all">
                  <span className="text-[var(--vf-text-muted)]">$ </span>
                  npx thevoidforge init my-app
                </code>
                <CopyButton text="npx thevoidforge init my-app" />
              </div>
              <div className="crt-terminal !p-3 text-sm space-y-1">
                <div><code>cd my-app</code></div>
                <div><code>claude</code><span className="text-[var(--vf-text-muted)] text-xs ml-3"># opens Claude Code</span></div>
                <div><code>/build</code><span className="text-[var(--vf-text-muted)] text-xs ml-3"># builds the app</span></div>
              </div>
            </div>

            <div className="comic-panel bg-[var(--vf-surface-raised)] p-6">
              <h3 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-forge-orange)] mb-2">
                GLOBAL INSTALL (OPTIONAL)
              </h3>
              <p className="text-sm text-[var(--vf-text-muted)] mb-3">
                Install the CLI globally for repeated use. The{" "}
                <code className="text-[var(--vf-electric-blue)]">voidforge</code>{" "}
                command becomes available everywhere.
              </p>
              <div className="crt-terminal flex items-center justify-between gap-2 !p-3 mb-3">
                <code className="text-sm break-all">
                  <span className="text-[var(--vf-text-muted)]">$ </span>
                  npm install -g thevoidforge
                </code>
                <CopyButton text="npm install -g thevoidforge" />
              </div>
              <div className="crt-terminal flex items-center justify-between gap-2 !p-3">
                <code className="text-sm break-all">
                  <span className="text-[var(--vf-text-muted)]">$ </span>
                  voidforge init my-app
                </code>
                <CopyButton text="voidforge init my-app" />
              </div>
            </div>

            <div className="comic-panel bg-[var(--vf-surface-raised)] p-6">
              <h3 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-forge-orange)] mb-2">
                REMOTE ACCESS (VPS / LAN)
              </h3>
              <p className="text-sm text-[var(--vf-text-muted)] mb-3">
                Installing on a remote server? The wizard UI runs on port 3141.
                Use LAN mode for private networks:
              </p>
              <div className="crt-terminal flex items-center justify-between gap-2 !p-3">
                <code className="text-sm break-all">
                  <span className="text-[var(--vf-text-muted)]">$ </span>
                  voidforge init --lan
                </code>
                <CopyButton text="voidforge init --lan" />
              </div>
              <p className="text-sm text-[var(--vf-text-muted)] mt-3">
                See the{" "}
                <Link
                  href="/tutorial/wizard#remote-access"
                  className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
                >
                  Wizard tutorial
                </Link>{" "}
                for SSH tunnel, --lan, and --remote options.
              </p>
            </div>
          </div>

          <p className="text-sm text-[var(--vf-text-muted)] mt-6 px-4 py-3 rounded bg-[var(--vf-surface-overlay)] border border-[var(--vf-border)]">
            <strong className="text-[var(--vf-forge-orange)]">npm packages:</strong>{" "}
            The package name is{" "}
            <a
              href="https://www.npmjs.com/package/thevoidforge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
            >
              thevoidforge
            </a>{" "}
            (CLI + wizard). The methodology (agents, commands, methods, patterns)
            is bundled automatically via{" "}
            <a
              href="https://www.npmjs.com/package/thevoidforge-methodology"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
            >
              thevoidforge-methodology
            </a>
            .
          </p>
        </section>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
        <section className="mt-12">
          <h2
            id="platform-install"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            PLATFORM-SPECIFIC INSTALLATION
          </h2>

          <div className="space-y-6">
            {/* macOS */}
            <div className="comic-panel bg-[var(--vf-surface-raised)] p-6">
              <h3 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-forge-orange)] mb-2">
                MACOS
              </h3>
              <p className="text-sm text-[var(--vf-text-muted)] mb-3">
                Install via Homebrew or download the LTS installer from nodejs.org.
              </p>
              <div className="crt-terminal !p-4 text-sm space-y-1">
                <div><code>brew install node@20</code></div>
              </div>
            </div>

            {/* Ubuntu / Debian */}
            <div className="comic-panel bg-[var(--vf-surface-raised)] p-6">
              <h3 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-forge-orange)] mb-2">
                UBUNTU / DEBIAN (SERVERS, VPS, EC2)
              </h3>
              <p className="text-sm text-[var(--vf-text-muted)] mb-3">
                <strong className="text-[var(--vf-text)]">
                  Do NOT use{" "}
                  <code className="text-[var(--vf-electric-blue)]">
                    apt install nodejs
                  </code>
                </strong>{" "}
                — Ubuntu 22.04 ships Node 12, which is 8 major versions behind
                the requirement. Use NodeSource instead:
              </p>
              <div className="crt-terminal !p-4 text-sm space-y-1">
                <div className="text-[var(--vf-text-muted)]"># Remove conflicting system packages (if present)</div>
                <div><code>sudo apt-get remove -y libnode-dev nodejs-doc</code></div>
                <div className="mt-2 text-[var(--vf-text-muted)]"># Install Node 20 via NodeSource</div>
                <div><code>curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -</code></div>
                <div><code>sudo apt-get install -y nodejs</code></div>
                <div className="mt-2 text-[var(--vf-text-muted)]"># Verify</div>
                <div><code>node -v   # Should show v20.x</code></div>
                <div><code>npm -v    # Should show 10.x</code></div>
              </div>
              <p className="text-sm text-[var(--vf-text-muted)] mt-3 px-3 py-2 rounded bg-[var(--vf-surface-overlay)] border border-[var(--vf-border)]">
                <strong className="text-[var(--vf-forge-orange)]">Common failure:</strong>{" "}
                If{" "}
                <code className="text-[var(--vf-electric-blue)]">apt install nodejs</code>{" "}
                fails with{" "}
                <code className="text-[var(--vf-electric-blue)]">
                  trying to overwrite &apos;/usr/include/node/common.gypi&apos;
                </code>
                , run{" "}
                <code className="text-[var(--vf-electric-blue)]">
                  sudo apt-get remove -y libnode-dev
                </code>{" "}
                first, then retry the install.
              </p>
            </div>

            {/* Windows */}
            <div className="comic-panel bg-[var(--vf-surface-raised)] p-6">
              <h3 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-forge-orange)] mb-2">
                WINDOWS
              </h3>
              <p className="text-sm text-[var(--vf-text-muted)] mb-3">
                Download Node 20 LTS from{" "}
                <a
                  href="https://nodejs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
                >
                  nodejs.org
                </a>
                . If{" "}
                <code className="text-[var(--vf-electric-blue)]">npm install</code>{" "}
                fails with node-gyp errors, either install{" "}
                <a
                  href="https://visualstudio.microsoft.com/visual-cpp-build-tools/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
                >
                  Visual C++ Build Tools
                </a>{" "}
                or skip this step — VoidForge projects have no native dependencies.
              </p>
            </div>
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal delay={0.18}>
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
                → v20.x or higher (minimum 20.11.0)
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
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
        <section className="mt-12">
          <h2
            id="troubleshooting"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            TROUBLESHOOTING
          </h2>

          <div className="space-y-6">
            {/* Linux */}
            <div className="comic-panel bg-[var(--vf-surface-raised)] p-6 space-y-4">
              <h3 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-forge-orange)] mb-2">
                LINUX / SERVER
              </h3>
              <p className="text-[var(--vf-text-muted)]">
                <strong className="text-[var(--vf-text)]">node-gyp errors</strong>{" "}
                — Native modules need build tools. Install them with:{" "}
                <code className="text-[var(--vf-electric-blue)]">
                  sudo apt-get install -y build-essential python3
                </code>
              </p>
              <p className="text-[var(--vf-text-muted)]">
                <strong className="text-[var(--vf-text)]">Permission errors</strong>{" "}
                — Never use{" "}
                <code className="text-[var(--vf-electric-blue)]">sudo npm install</code>.
                Fix npm permissions instead:
              </p>
              <div className="crt-terminal !p-4 text-sm space-y-1">
                <div><code>mkdir ~/.npm-global</code></div>
                <div><code>npm config set prefix &apos;~/.npm-global&apos;</code></div>
                <div className="text-[var(--vf-text-muted)]"># Add ~/.npm-global/bin to your PATH</div>
              </div>
              <p className="text-[var(--vf-text-muted)]">
                <strong className="text-[var(--vf-text)]">EBADENGINE warnings</strong>{" "}
                — Your Node version is too old. Follow the{" "}
                <a
                  href="#platform-install"
                  className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
                >
                  NodeSource instructions above
                </a>{" "}
                to install Node 20.
              </p>
            </div>

            {/* Windows */}
            <div className="comic-panel bg-[var(--vf-surface-raised)] p-6 space-y-4">
              <h3 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-forge-orange)] mb-2">
                WINDOWS
              </h3>
              <p className="text-[var(--vf-text-muted)]">
                <strong className="text-[var(--vf-text)]">PowerShell 7+</strong>{" "}
                supports the <code className="text-[var(--vf-electric-blue)]">&&</code>{" "}
                syntax in our install commands. If you&apos;re using the older
                Windows PowerShell 5.1, run each command separately instead of
                chaining with <code className="text-[var(--vf-electric-blue)]">&&</code>.
              </p>
              <p className="text-[var(--vf-text-muted)]">
                <strong className="text-[var(--vf-text)]">npm install fails?</strong>{" "}
                If you see <code className="text-[var(--vf-electric-blue)]">node-gyp</code>{" "}
                errors during global install, install{" "}
                <a
                  href="https://visualstudio.microsoft.com/visual-cpp-build-tools/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
                >
                  Visual C++ Build Tools
                </a>{" "}
                or use{" "}
                <code className="text-[var(--vf-electric-blue)]">npx thevoidforge init</code>{" "}
                instead (no global install needed).
              </p>
              <p className="text-[var(--vf-text-muted)]">
                <strong className="text-[var(--vf-text)]">VS Code users:</strong>{" "}
                Open the integrated terminal (Ctrl+`) and you&apos;re ready.
                Works with PowerShell, Command Prompt, Git Bash, or WSL.
              </p>
              <p className="text-[var(--vf-text-muted)] mt-3">
                For a detailed Windows walkthrough, see the{" "}
                <a
                  href="https://github.com/tmcleod3/voidforge/blob/main/docs/QUICKSTART-WINDOWS.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
                >
                  Windows Quickstart Guide
                </a>.
              </p>
            </div>
          </div>
        </section>
        </ScrollReveal>

        <TutorialNav
          prev={{ href: "/tutorial", label: "Tutorial Hub" }}
          next={{ href: "/tutorial/first-build", label: "First Build" }}
        />
        <TutorialProgress step="install" />
      </div>
    </div>
  );
}
