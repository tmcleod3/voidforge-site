import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { SpeechBubble } from "@/components/speech-bubble";

export const metadata: Metadata = {
  title: "VoidForge Wizard — Start From Nothing",
  description:
    "You have nothing but an idea. The wizard builds everything — PRD, code, infrastructure, deploy.",
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
            <strong className="text-[var(--vf-text)]">Node.js 18+</strong> —
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
            agent, every command, every build phase.{" "}
            <a
              href="https://docs.anthropic.com/en/docs/claude-code/overview"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
            >
              Install Claude Code
            </a>
            , then authenticate with your Anthropic API key.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            <strong className="text-[var(--vf-text)]">Git</strong> — for
            cloning the forge.{" "}
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

        <section className="mt-12">
          <h2
            id="start-the-wizard"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            START THE WIZARD
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Clone the forge. Gandalf takes it from here.
          </p>
          <div className="crt-terminal !p-4 mb-6 space-y-2">
            <div>
              <code className="text-sm">
                git clone https://github.com/tmcleod3/voidforge.git my-project
              </code>
            </div>
            <div>
              <code className="text-sm">cd my-project && npm install</code>
            </div>
            <div>
              <code className="text-sm">npm run wizard</code>
            </div>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Gandalf&apos;s interactive wizard walks you through everything —
            project name, what you&apos;re building, tech stack preferences,
            deploy target. It asks questions in plain language and generates a
            complete PRD from your answers. No blank-page problem. No YAML by
            hand. Just a conversation that produces a build-ready specification.
          </p>
        </section>

        <SpeechBubble agent="Picard" universe="star-trek">
          The wizard handles orientation. Once your PRD is generated, I take
          over — reading the frontmatter, extracting the architecture,
          assigning agents to phases. You don&apos;t need to understand the 13
          phases. They understand you.
        </SpeechBubble>

        <section className="mt-12">
          <h2
            id="build-and-deploy"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            BUILD AND DEPLOY
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            After the wizard finishes, the build runs automatically. Picard
            reads the PRD, assigns agents, and the 13-phase protocol executes
            end to end. If you want to trigger it manually later:
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">/build</code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            When the build completes, Kusanagi handles deployment — Vercel,
            AWS, Railway, Fly, or bare metal. The deploy target was set during
            the wizard. Infrastructure is not your problem anymore. For
            subsequent deploys, just run{" "}
            <code className="text-[var(--vf-electric-blue)]">/deploy</code>{" "}
            — Kusanagi auto-detects, checks, deploys, and verifies health.
          </p>
        </section>

        <SpeechBubble agent="Kusanagi" universe="anime">
          Name your target. I handle the rest — DNS, SSL, monitoring, backups.
          You handle the launch party.
        </SpeechBubble>

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
      </div>
    </div>
  );
}
