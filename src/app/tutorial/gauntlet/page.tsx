import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { SpeechBubble } from "@/components/speech-bubble";

export const metadata: Metadata = {
  title: "The Gauntlet",
  description:
    "5 rounds, 30+ agents, every domain reviewed. If your project survives the Gauntlet, it ships.",
};

export default function GauntletPage() {
  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <Link href="/tutorial" className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-forge-orange)] transition-colors mb-4 inline-block">
          &larr; Tutorial Hub
        </Link>
        <PageHeader title="THE GAUNTLET" subtitle="Ship Track — Step 3" />

        <SpeechBubble agent="Thanos" universe="marvel">
          I am inevitable — and so is quality when you run the Gauntlet. Five
          rounds. Thirty agents. Six universes. Every domain your project
          touches gets reviewed by specialists who do not pull punches. This is
          review-only — no building, no fixing. Just the truth about whether
          your code is ready to ship.
        </SpeechBubble>

        <section className="mt-12">
          <h2
            id="what-is-the-gauntlet"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            WHAT IS THE GAUNTLET
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            The Gauntlet is VoidForge&apos;s comprehensive review protocol. It
            does not write code — it judges it. Thanos orchestrates 30+ agents
            across QA, UX, security, architecture, and code quality to find
            every issue before your users do.
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">/gauntlet</code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Run it after a{" "}
            <code className="text-[var(--vf-electric-blue)]">/build</code> or{" "}
            <code className="text-[var(--vf-electric-blue)]">/campaign</code>{" "}
            completes. The Gauntlet produces a scored report with findings
            ranked by severity. Fix the critical issues, run it again, and
            repeat until you pass clean.
          </p>
        </section>

        <section className="mt-12">
          <h2
            id="the-5-rounds"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            THE 5 ROUNDS
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            <strong className="text-[var(--vf-text)]">Round 1 — Discovery.</strong>{" "}
            Broad sweep across the codebase. QA, UX, security, and architecture
            agents each run independent audits and surface initial findings.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            <strong className="text-[var(--vf-text)]">Round 2 — First Strike.</strong>{" "}
            Deep-dive into the highest-risk areas identified in Discovery.
            Specialists drill into specific files, flows, and edge cases.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            <strong className="text-[var(--vf-text)]">Round 3 — Second Strike.</strong>{" "}
            A fresh set of agents reviews the same areas with different
            perspectives. No single reviewer&apos;s blind spots survive two
            independent passes.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            <strong className="text-[var(--vf-text)]">Round 4 — Crossfire.</strong>{" "}
            Agents from different domains challenge each other&apos;s findings.
            Security questions UX decisions. QA questions architecture choices.
            Conflicts are resolved by evidence, not rank.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            <strong className="text-[var(--vf-text)]">Round 5 — Council.</strong>{" "}
            The senior agents convene, deduplicate findings, assign severity
            scores, and produce the final Gauntlet report.
          </p>
        </section>

        <section className="mt-12">
          <h2
            id="the-infinity-gauntlet"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            THE INFINITY GAUNTLET
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Need speed? Use the quick flag for a lighter pass:
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">/gauntlet --quick</code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Need the ultimate test? Add the infinity flag:
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">/gauntlet --infinity</code>
          </div>
          <p className="text-[var(--vf-text-muted)]">
            The Infinity Gauntlet doubles down on every round — more agents,
            deeper analysis, cross-universe validation. It takes longer, costs
            more tokens, and finds things the standard Gauntlet misses. Use it
            before a major launch or when the stakes justify the thoroughness.
          </p>
        </section>
      </div>
    </div>
  );
}
