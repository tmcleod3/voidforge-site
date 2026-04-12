import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SpeechBubble } from "@/components/speech-bubble";
import { TutorialNav } from "@/components/tutorial-nav";
import { TableOfContents } from "@/components/table-of-contents";
import { TutorialProgress } from "@/components/tutorial-progress";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Your First VoidForge Build",
  description:
    "Write your first PRD, run /build, and watch the 13-phase protocol in action.",
};

const tocItems = [
  { id: "write-your-prd", label: "Write Your PRD" },
  { id: "run-build", label: "Run /build" },
  { id: "build-journal", label: "The Build Journal" },
];

export default function FirstBuildPage() {
  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <Link href="/tutorial" className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-forge-orange)] transition-colors mb-4 inline-block">
          &larr; Tutorial Hub
        </Link>
        <PageHeader title="FIRST BUILD" subtitle="Step 2 of 3" />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/tutorials/tutorial-build.webp"
          alt="First Build — a blueprint being fed into a code-generating machine"
          className="w-full rounded-lg comic-panel mb-8 float-gentle"
        />

        <TableOfContents items={tocItems} />

        <SpeechBubble agent="Picard" universe="star-trek">
          Before you build, you need a plan. The PRD is your plan. It tells the
          agents what to build, what stack to use, and how to deploy. A good PRD
          is the difference between a successful mission and chaos. Let me show
          you.
        </SpeechBubble>

        <section className="mt-12">
          <h2
            id="write-your-prd"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            WRITE YOUR PRD
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Create a file at{" "}
            <code className="font-[family-name:var(--font-space-mono)] text-[var(--vf-electric-blue)]">
              docs/PRD.md
            </code>{" "}
            in your project. Every PRD starts with a YAML frontmatter block that
            tells VoidForge your project&apos;s shape:
          </p>
          <div className="crt-terminal !p-4 text-sm">
            <pre className="whitespace-pre-wrap">
              {`---
name: "my-app"
type: "full-stack"
framework: "next.js"
database: "postgres"
auth: yes
payments: stripe
deploy: "vercel"
---

## 1. Product Vision
- **Name:** My App
- **One-liner:** What your app does in one sentence.
...`}
            </pre>
          </div>
          <p className="text-[var(--vf-text-muted)] mt-4">
            The frontmatter determines which of the{" "}
            <Link
              href="/protocol"
              className="text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)]"
            >
              13 phases
            </Link>{" "}
            apply. Set <code className="text-[var(--vf-electric-blue)]">auth: no</code> and
            Phase 3 is skipped. Set{" "}
            <code className="text-[var(--vf-electric-blue)]">payments: none</code> and
            the payment integration section is skipped.
          </p>
        </section>

        <ScrollReveal delay={0.06}>
        <section className="mt-12">
          <h2
            id="run-build"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            RUN /BUILD
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Open your terminal, navigate to your project directory, and launch
            Claude Code:
          </p>
          <div className="crt-terminal !p-4 text-sm mb-4 space-y-2">
            <div className="text-[var(--vf-text-muted)] text-xs mb-1"># In your terminal:</div>
            <div>
              <code>cd my-project</code>
            </div>
            <div>
              <code>claude</code>
            </div>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            This launches Claude Code. It automatically reads the CLAUDE.md
            file in your project, which loads the entire VoidForge methodology.
            Inside Claude Code, type:
          </p>
          <div className="crt-terminal !p-4 text-sm mb-4 space-y-2">
            <div className="text-[var(--vf-text-muted)] text-xs mb-1"># Inside Claude Code:</div>
            <div>
              <code>/build</code>
            </div>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Picard reads your PRD. Stark and Kusanagi scaffold the project.
            The agents work through each phase, writing code, running tests,
            and verifying gates. Every decision is logged to{" "}
            <code className="text-[var(--vf-electric-blue)]">/logs/</code>.
          </p>
          <p className="text-sm text-[var(--vf-text-muted)] px-4 py-3 rounded bg-[var(--vf-surface-overlay)] border border-[var(--vf-border)] mb-4">
            <strong className="text-[var(--vf-text)]">Tip:</strong>{" "}
            <code className="text-[var(--vf-electric-blue)]">/build</code>{" "}
            runs a single build pass.{" "}
            For full PRD-to-production workflows, use{" "}
            <Link
              href="/tutorial/campaign"
              className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
            >
              /campaign
            </Link>{" "}
            — it breaks the PRD into missions, runs{" "}
            <code className="text-[var(--vf-electric-blue)]">/assemble</code>{" "}
            for each, and finishes with a Victory Gauntlet.
          </p>
          <p className="text-sm text-[var(--vf-text-muted)] px-4 py-3 rounded bg-[var(--vf-surface-overlay)] border border-[var(--vf-border)] mb-4">
            <strong className="text-[var(--vf-forge-orange)]">How slash commands work:</strong>{" "}
            Every VoidForge command starting with{" "}
            <code className="text-[var(--vf-electric-blue)]">/</code> is a slash
            command inside Claude Code. You type them at the Claude Code prompt,
            not your system terminal. Launch Claude Code with{" "}
            <code className="text-[var(--vf-electric-blue)]">claude</code> in
            your terminal first, then type{" "}
            <code className="text-[var(--vf-electric-blue)]">/build</code>,{" "}
            <code className="text-[var(--vf-electric-blue)]">/campaign</code>,{" "}
            <code className="text-[var(--vf-electric-blue)]">/gauntlet</code>,
            etc.
          </p>
          <p className="text-sm text-[var(--vf-text-muted)] px-4 py-3 rounded bg-[var(--vf-surface-overlay)] border border-[var(--vf-border)]">
            <strong className="text-[var(--vf-text)]">Agent dispatch:</strong>{" "}
            The Silver Surfer pre-scans your code and selects the optimal agent team
            automatically. Use{" "}
            <code className="text-[var(--vf-electric-blue)]">--focus &quot;security&quot;</code>{" "}
            to bias toward a specific domain, or{" "}
            <code className="text-[var(--vf-electric-blue)]">--solo</code>{" "}
            for lead agent only.
          </p>
        </section>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
        <section className="mt-12">
          <h2
            id="build-journal"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            THE BUILD JOURNAL
          </h2>
          <p className="text-[var(--vf-text-muted)]">
            Every phase produces a log file. When context gets heavy or you
            start a new session, agents read the journal to recover state.
            Check{" "}
            <code className="text-[var(--vf-electric-blue)]">
              /logs/build-state.md
            </code>{" "}
            to see where you are.
          </p>
        </section>
        </ScrollReveal>

        <TutorialNav
          prev={{ href: "/tutorial/install", label: "Install" }}
          next={{ href: "/tutorial/deploy", label: "Deploy" }}
        />
        <TutorialProgress step="first-build" />
      </div>
    </div>
  );
}
