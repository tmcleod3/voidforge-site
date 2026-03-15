import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SpeechBubble } from "@/components/speech-bubble";
import { TutorialNav } from "@/components/tutorial-nav";
import Link from "next/link";

export const metadata: Metadata = {
  title: "First Build",
  description:
    "Write your first PRD, run /build, and watch the 13-phase protocol in action.",
};

export default function FirstBuildPage() {
  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <PageHeader title="FIRST BUILD" subtitle="Step 2 of 3" />

        <SpeechBubble agent="Picard" universe="star-trek">
          Before you build, you need a plan. The PRD is your plan. It tells the
          agents what to build, what stack to use, and how to deploy. A good PRD
          is the difference between a successful mission and chaos. Let me show
          you.
        </SpeechBubble>

        <section className="mt-12">
          <h2 className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6">
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

        <section className="mt-12">
          <h2 className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6">
            RUN /BUILD
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Open Claude Code in your project directory and type:
          </p>
          <div className="crt-terminal !p-4 text-sm mb-4">
            <code>/build</code>
          </div>
          <p className="text-[var(--vf-text-muted)]">
            Picard reads your PRD. Stark and Kusanagi scaffold the project.
            The agents work through each phase, writing code, running tests,
            and verifying gates. Every decision is logged to{" "}
            <code className="text-[var(--vf-electric-blue)]">/logs/</code>.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6">
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

        <TutorialNav
          prev={{ href: "/tutorial/install", label: "Install" }}
          next={{ href: "/tutorial/deploy", label: "Deploy" }}
        />
      </div>
    </div>
  );
}
