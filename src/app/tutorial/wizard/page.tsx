import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SpeechBubble } from "@/components/speech-bubble";
import { CopyButton } from "@/components/copy-button";

export const metadata: Metadata = {
  title: "VoidForge Wizard — Start From Nothing",
  description:
    "You have nothing but an idea. The wizard builds everything — PRD, code, infrastructure, deploy. Includes SSH tunnel, LAN, and remote access for VPS installs.",
};

export default function WizardPage() {
  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/tutorial"
          className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-forge-orange)] transition-colors mb-4 inline-block"
        >
          &larr; Tutorial Hub
        </Link>
        <PageHeader
          title="THE WIZARD PATH"
          subtitle="You have nothing but an idea. Let's build everything."
        />

        <SpeechBubble agent="Bilbo" universe="tolkien">
          You&apos;ve never seen the forge before. That&apos;s perfectly
          alright. Every great adventure starts with a single step — and
          Gandalf will be right beside you for this one.
        </SpeechBubble>

        <section className="mt-12">
          <h2
            id="what-youll-need"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            WHAT YOU&apos;LL NEED
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            <strong className="text-[var(--vf-text)]">Node.js 20+</strong> —
            the runtime that powers the forge.{" "}
            <a
              href="https://nodejs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
            >
              Download it here
            </a>
            {" "}(LTS recommended). Verify with{" "}
            <code className="text-[var(--vf-electric-blue)]">node --version</code>.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            <strong className="text-[var(--vf-text)]">Claude Code</strong> —
            Anthropic&apos;s coding CLI. This is the engine that runs every
            agent, every command, every build phase. Install with:{" "}
            <code className="text-[var(--vf-electric-blue)]">
              curl -fsSL https://claude.ai/install.sh | bash
            </code>{" "}
            then authenticate with your Anthropic API key.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            <strong className="text-[var(--vf-text)]">Git</strong> — for
            version control.{" "}
            <a
              href="https://git-scm.com/downloads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
            >
              Download from git-scm.com
            </a>
            .
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            That&apos;s it. No IDE plugins, no cloud accounts, no credit cards.
            Just a terminal, the tools above, and an idea.
          </p>
        </section>

        <ScrollReveal delay={0.06}>
        <section className="mt-12">
          <h2
            id="start-the-wizard"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            START THE WIZARD
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            One command. Gandalf takes it from here.
          </p>
          <p className="text-sm text-[var(--vf-text-muted)] mb-3 px-3 py-2 rounded bg-[var(--vf-surface-overlay)] border border-[var(--vf-border)]">
            <strong className="text-[var(--vf-forge-orange)]">Prerequisites:</strong>{" "}
            Node &ge;20.11, git, and{" "}
            <a
              href="https://claude.com/claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
            >
              Claude Code
            </a>
            {" "}(provides the <code className="text-[var(--vf-electric-blue)]">claude</code> command
            you&apos;ll run after the wizard creates your project).
          </p>
          <div className="crt-terminal flex items-center justify-between gap-2 !p-4 mb-6">
            <code className="text-sm break-all">
              <span className="text-[var(--vf-text-muted)]">$ </span>
              npx voidforge-build init my-app
            </code>
            <CopyButton text="npx voidforge-build init my-app" />
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            This launches the standalone wizard — a browser UI at{" "}
            <code className="text-[var(--vf-electric-blue)]">
              http://localhost:3141/
            </code>{" "}
            where Gandalf walks you through everything: project name, what
            you&apos;re building, tech stack preferences, deploy target. Drag
            and drop a PRD or let the wizard generate one through an interactive
            conversation. No blank-page problem. No YAML by hand.
          </p>
        </section>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
        <section className="mt-12">
          <h2
            id="remote-access"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            REMOTE &amp; LAN ACCESS
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            The wizard server binds to{" "}
            <code className="text-[var(--vf-electric-blue)]">localhost</code> by
            default. If you&apos;re installing on a remote server (VPS, EC2,
            DigitalOcean, home server), you&apos;ll see{" "}
            <code className="text-[var(--vf-electric-blue)]">
              Server running at http://localhost:3141/
            </code>{" "}
            with no way to reach it from your browser. Here are three ways to
            connect:
          </p>

          <div className="space-y-6">
            {/* SSH Tunnel */}
            <div className="comic-panel bg-[var(--vf-surface-raised)] p-6">
              <h3 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-forge-orange)] mb-2">
                OPTION 1: SSH TUNNEL (SIMPLEST)
              </h3>
              <p className="text-sm text-[var(--vf-text-muted)] mb-3">
                No config changes. The wizard stays bound to localhost.
                Encrypted. No firewall changes needed.
              </p>
              <div className="crt-terminal flex items-center justify-between gap-2 !p-4">
                <code className="text-sm break-all">
                  <span className="text-[var(--vf-text-muted)]"># From your local machine:{"\n"}</span>
                  ssh -L 3141:localhost:3141 user@your-server
                </code>
                <CopyButton text="ssh -L 3141:localhost:3141 user@your-server" />
              </div>
              <p className="text-sm text-[var(--vf-text-muted)] mt-3">
                Then open{" "}
                <code className="text-[var(--vf-electric-blue)]">
                  http://localhost:3141/
                </code>{" "}
                in your local browser. The SSH tunnel forwards the connection to
                the remote server.
              </p>
            </div>

            {/* LAN Mode */}
            <div className="comic-panel bg-[var(--vf-surface-raised)] p-6">
              <h3 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-forge-orange)] mb-2">
                OPTION 2: LAN MODE (PRIVATE NETWORKS)
              </h3>
              <p className="text-sm text-[var(--vf-text-muted)] mb-3">
                For ZeroTier, Tailscale, or home LAN. Binds to{" "}
                <code className="text-[var(--vf-electric-blue)]">0.0.0.0</code>{" "}
                so any machine on your private network can reach it. Dashboard
                is read-only — no vault, deploy, or terminal access. No password
                required.
              </p>
              <div className="crt-terminal flex items-center justify-between gap-2 !p-4">
                <code className="text-sm">voidforge init --lan</code>
                <CopyButton text="voidforge init --lan" />
              </div>
              <p className="text-sm text-[var(--vf-text-muted)] mt-3">
                Access via{" "}
                <code className="text-[var(--vf-electric-blue)]">
                  http://&lt;server-private-ip&gt;:3141/
                </code>
              </p>
            </div>

            {/* Remote Mode */}
            <div className="comic-panel bg-[var(--vf-surface-raised)] p-6">
              <h3 className="font-[family-name:var(--font-bangers)] text-xl tracking-wider text-[var(--vf-forge-orange)] mb-2">
                OPTION 3: REMOTE MODE (FULL ACCESS)
              </h3>
              <p className="text-sm text-[var(--vf-text-muted)] mb-3">
                Full access over the internet — vault, deploy, terminal.
                Requires vault password + TOTP 2FA. Set up TOTP during the{" "}
                <Link
                  href="/tutorial/cultivation"
                  className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
                >
                  <code>/cultivation install</code>
                </Link>{" "}
                slash command inside Claude Code, or on first remote login.
                Use behind a reverse proxy (Caddy, nginx) with HTTPS.
              </p>
              <div className="crt-terminal flex items-center justify-between gap-2 !p-4">
                <code className="text-sm">voidforge init --remote</code>
                <CopyButton text="voidforge init --remote" />
              </div>
            </div>
          </div>

          <div className="mt-6 px-4 py-3 rounded bg-[var(--vf-surface-overlay)] border border-[var(--vf-border)] space-y-2">
            <p className="text-sm font-bold text-[var(--vf-forge-orange)]">
              Security notes
            </p>
            <ul className="text-sm text-[var(--vf-text-muted)] space-y-1 ml-4 list-disc">
              <li>
                <strong className="text-[var(--vf-text)]">Default</strong> (no
                flag) — binds to{" "}
                <code className="text-[var(--vf-electric-blue)]">127.0.0.1</code>{" "}
                only. Cannot be reached from the network.
              </li>
              <li>
                <strong className="text-[var(--vf-text)]">--lan</strong> —
                restricts endpoints to dashboard-only and only accepts private
                IP origins.
              </li>
              <li>
                <strong className="text-[var(--vf-text)]">--remote</strong> —
                enables all endpoints but enforces session auth + TOTP for write
                operations.
              </li>
              <li>
                Port{" "}
                <code className="text-[var(--vf-electric-blue)]">3141</code>{" "}
                must be open in your firewall/security group for Options 2 and
                3.
              </li>
            </ul>
          </div>
        </section>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <SpeechBubble agent="Picard" universe="star-trek">
            The wizard handles orientation. Once your PRD is generated, I take
            over — reading the frontmatter, extracting the architecture,
            assigning agents to phases. You don&apos;t need to understand the 13
            phases. They understand you.
          </SpeechBubble>
        </ScrollReveal>

        <ScrollReveal delay={0.18}>
        <section className="mt-12">
          <h2
            id="project-dashboard"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            THE PROJECT DASHBOARD
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Each project gets its own dashboard with 5 tabs:
            Overview, Tower (in-browser Claude Code), Danger Room (build
            monitoring), War Room (growth campaigns), and Deploy. Navigate from
            the Lobby by clicking a project card. &ldquo;Resume last
            project&rdquo; remembers where you left off.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Everything is project-scoped — WebSocket events, financial data,
            daemon state, and agent activity are isolated per project. No
            cross-project data leakage.
          </p>
        </section>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
        <section className="mt-12">
          <h2
            id="build-and-deploy"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            BUILD AND DEPLOY
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            After the wizard finishes, your PRD is ready. Now launch Claude
            Code — the AI coding CLI that runs every VoidForge agent:
          </p>
          <div className="crt-terminal !p-4 mb-4 space-y-2">
            <div className="text-[var(--vf-text-muted)] text-xs mb-1"># In your terminal:</div>
            <div>
              <code className="text-sm">claude</code>
            </div>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            This opens the Claude Code CLI in your project directory. Claude
            reads the CLAUDE.md methodology file automatically. Now type the
            build command at the Claude Code prompt:
          </p>
          <div className="crt-terminal !p-4 mb-4 space-y-2">
            <div className="text-[var(--vf-text-muted)] text-xs mb-1"># Inside Claude Code:</div>
            <div>
              <code className="text-sm">/build</code>
            </div>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Picard reads your PRD, assigns agents, and the 13-phase protocol
            executes end to end. When the build completes, deploy by typing
            at the Claude Code prompt:
          </p>
          <div className="crt-terminal !p-4 mb-4 space-y-2">
            <div className="text-[var(--vf-text-muted)] text-xs mb-1"># Inside Claude Code:</div>
            <div>
              <code className="text-sm">/deploy</code>
            </div>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Kusanagi handles deployment — VPS, Vercel, Railway, Cloudflare,
            Docker, or Static. The deploy target was set during the wizard.
            Infrastructure is not your problem anymore. Kusanagi auto-detects,
            checks, deploys, and verifies health.
          </p>
          <p className="text-sm text-[var(--vf-text-muted)] px-4 py-3 rounded bg-[var(--vf-surface-overlay)] border border-[var(--vf-border)]">
            <strong className="text-[var(--vf-forge-orange)]">How slash commands work:</strong>{" "}
            Every VoidForge command starting with{" "}
            <code className="text-[var(--vf-electric-blue)]">/</code> is a slash
            command inside Claude Code. You type them at the Claude Code prompt,
            not your system terminal. Launch Claude Code with{" "}
            <code className="text-[var(--vf-electric-blue)]">claude</code> in
            your terminal first, then type{" "}
            <code className="text-[var(--vf-electric-blue)]">/build</code>,{" "}
            <code className="text-[var(--vf-electric-blue)]">/deploy</code>,{" "}
            <code className="text-[var(--vf-electric-blue)]">/campaign</code>,{" "}
            <code className="text-[var(--vf-electric-blue)]">/gauntlet</code>,
            etc.
          </p>
        </section>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <SpeechBubble agent="Kusanagi" universe="anime">
            Name your target. I handle the rest — DNS, SSL, monitoring, backups.
            You handle the launch party.
          </SpeechBubble>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
        <section className="mt-12">
          <h2
            id="whats-next"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            WHAT&apos;S NEXT
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Your project is built and deployed. Now stress-test it before real
            users arrive. Run{" "}
            <Link
              href="/tutorial/gauntlet"
              className="text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)]"
            >
              the Gauntlet
            </Link>{" "}
            — 30+ agents review every domain before you ship.
          </p>
          <p className="text-[var(--vf-text-muted)]">
            Once you&apos;re live, the{" "}
            <Link
              href="/tutorial/grow"
              className="text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)]"
            >
              growth engine
            </Link>{" "}
            handles SEO, ads, social, and outreach — so your launch doesn&apos;t
            end on day one.
          </p>
        </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
