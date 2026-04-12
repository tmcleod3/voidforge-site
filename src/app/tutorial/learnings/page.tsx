import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SpeechBubble } from "@/components/speech-bubble";

export const metadata: Metadata = {
  title: "Operational Learnings — Cross-Session Memory",
  description:
    "VoidForge remembers what it learned. API quirks, decision rationale, root causes — persisted in LEARNINGS.md, read by every agent at startup.",
  alternates: { canonical: "/tutorial/learnings" },
};

export default function LearningsPage() {
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
          title="THE LONG MEMORY"
          subtitle="Cross-session intelligence that makes every build smarter."
        />

        <SpeechBubble agent="Bashir" universe="star-trek">
          Every project accumulates knowledge that code review can&apos;t catch.
          API rate limits. The reason you chose Postgres over SQLite. That
          one root cause that took three sessions to find. Without{" "}
          <code className="text-[var(--vf-electric-blue)]">LEARNINGS.md</code>,
          your next session starts from zero. With it, every agent reads the
          operational context before writing a single line.
        </SpeechBubble>

        <section className="mt-12">
          <h2
            id="what-are-learnings"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            WHAT ARE OPERATIONAL LEARNINGS?
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Operational learnings are <strong className="text-[var(--vf-text)]">verified facts discovered by live testing</strong> that
            code review alone cannot catch. They live in{" "}
            <code className="text-[var(--vf-electric-blue)]">docs/LEARNINGS.md</code> and
            persist across sessions.
          </p>

          <div className="comic-panel bg-[var(--vf-surface-raised)] p-6 mb-8">
            <h3 className="font-[family-name:var(--font-bangers)] text-lg tracking-wider text-[var(--vf-forge-orange)] mb-4">
              WHAT GOES IN
            </h3>
            <ul className="space-y-2 text-sm text-[var(--vf-text-muted)]">
              <li><strong className="text-[var(--vf-text)]">API quirks</strong> — &ldquo;Stripe webhooks retry 3x with exponential backoff, but the retry header is undocumented&rdquo;</li>
              <li><strong className="text-[var(--vf-text)]">Decision rationale</strong> — &ldquo;We chose Redis over Memcached because we need sorted sets for the leaderboard&rdquo;</li>
              <li><strong className="text-[var(--vf-text)]">Root causes</strong> — &ldquo;The NaN comparison bug was caused by passing a config object where a number was expected&rdquo;</li>
              <li><strong className="text-[var(--vf-text)]">Environment constraints</strong> — &ldquo;Vercel functions timeout at 10s, not 30s, on the free tier&rdquo;</li>
            </ul>
          </div>

          <div className="comic-panel bg-[var(--vf-surface-raised)] p-6 mb-8">
            <h3 className="font-[family-name:var(--font-bangers)] text-lg tracking-wider text-[var(--vf-forge-orange)] mb-4">
              WHAT STAYS OUT
            </h3>
            <ul className="space-y-2 text-sm text-[var(--vf-text-muted)]">
              <li><strong className="text-[var(--vf-text)]">Code patterns</strong> — belong in <code className="text-[var(--vf-electric-blue)]">docs/LESSONS.md</code> (cross-project)</li>
              <li><strong className="text-[var(--vf-text)]">Methodology gaps</strong> — belong in field reports (upstream fixes)</li>
              <li><strong className="text-[var(--vf-text)]">Config values</strong> — belong in <code className="text-[var(--vf-electric-blue)]">.env</code></li>
              <li><strong className="text-[var(--vf-text)]">Opinions</strong> — don&apos;t belong anywhere persistent</li>
            </ul>
          </div>
        </section>

        <ScrollReveal delay={0.06}>
        <section className="mt-12">
          <h2
            id="the-lifecycle"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            THE LIFECYCLE
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-6">
            Learnings flow through a pipeline. They&apos;re proposed, approved, read, and eventually promoted or archived.
          </p>

          <ol className="space-y-6">
            {[
              {
                step: "1",
                title: "DISCOVER",
                description: "During a build or campaign, agents encounter operational facts — an API that behaves differently than documented, a decision that needs rationale, a root cause that took multiple attempts to identify.",
              },
              {
                step: "2",
                title: "EXTRACT",
                description: "/debrief proposes candidate learnings after each session. O'Brien traces root causes, Nog proposes solutions, and Bashir drafts structured entries with category, scope, and evidence.",
              },
              {
                step: "3",
                title: "APPROVE",
                description: "You review each candidate. Approved entries are written to docs/LEARNINGS.md. Rejected ones are discarded. You control what persists.",
              },
              {
                step: "4",
                title: "CATCH",
                description: "/vault runs at session end and catches any learnings that /debrief missed. This is the safety net — if a learning was discovered but not captured, the vault catches it.",
              },
              {
                step: "5",
                title: "READ",
                description: "Next session: /build, /campaign, /architect, /assemble, /qa, and /security all load LEARNINGS.md at startup. Every agent starts informed.",
              },
              {
                step: "6",
                title: "PROMOTE",
                description: "Learnings that appear in 2+ projects get promoted to docs/LESSONS.md via Wong's pipeline. The original entry is replaced with a pointer. Facts move forward; they don't duplicate.",
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-4">
                <div className="w-8 h-8 rounded-full border-2 border-[var(--vf-forge-orange)] flex items-center justify-center font-[family-name:var(--font-bangers)] text-[var(--vf-forge-orange)] flex-shrink-0 mt-1">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-bangers)] text-lg tracking-wider text-[var(--vf-text)] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--vf-text-muted)]">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
        <section className="mt-12">
          <h2
            id="guardrails"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            GUARDRAILS
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="comic-panel bg-[var(--vf-surface-raised)] p-4 text-center">
              <p className="font-[family-name:var(--font-bangers)] text-3xl text-[var(--vf-forge-orange)]">50</p>
              <p className="text-xs text-[var(--vf-text-muted)]">entry hard cap</p>
            </div>
            <div className="comic-panel bg-[var(--vf-surface-raised)] p-4 text-center">
              <p className="font-[family-name:var(--font-bangers)] text-3xl text-[var(--vf-forge-orange)]">90d</p>
              <p className="text-xs text-[var(--vf-text-muted)]">staleness flag</p>
            </div>
            <div className="comic-panel bg-[var(--vf-surface-raised)] p-4 text-center">
              <p className="font-[family-name:var(--font-bangers)] text-3xl text-[var(--vf-forge-orange)]">2+</p>
              <p className="text-xs text-[var(--vf-text-muted)]">projects → promotion</p>
            </div>
          </div>
          <p className="text-[var(--vf-text-muted)] mt-4 text-sm">
            The file is created automatically when you approve your first learning.
            Projects that don&apos;t need it get zero overhead.
          </p>
        </section>
        </ScrollReveal>

        <SpeechBubble agent="Sisko" universe="star-trek">
          The Prophets see all timelines at once. Your agents don&apos;t — but
          with LEARNINGS.md, they see every timeline you&apos;ve already walked.
          That&apos;s the closest thing to prophecy this forge has.
        </SpeechBubble>

        <ScrollReveal delay={0.18}>
        <section className="mt-12">
          <h2
            id="commands-that-use-learnings"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            COMMANDS THAT USE LEARNINGS
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { cmd: "/debrief", role: "Writes — extracts learnings from session", href: "/commands/debrief" },
              { cmd: "/vault", role: "Writes — catches learnings at session end", href: "/commands/vault" },
              { cmd: "/build", role: "Reads — Phase 0 loads learnings", href: "/commands/build" },
              { cmd: "/campaign", role: "Reads — informs mission scoping", href: "/commands/campaign" },
              { cmd: "/architect", role: "Reads — prevents re-evaluating settled decisions", href: "/commands/architect" },
              { cmd: "/assemble", role: "Reads — Phase 0 before pipeline starts", href: "/commands/assemble" },
              { cmd: "/qa", role: "Reads — filtered by component scope", href: "/commands/qa" },
              { cmd: "/security", role: "Reads — security/vendor/API categories", href: "/commands/security" },
            ].map((item) => (
              <Link
                key={item.cmd}
                href={item.href}
                className="comic-panel bg-[var(--vf-surface-raised)] p-3 hover:border-[var(--vf-forge-orange)] transition-colors"
              >
                <span className="font-[family-name:var(--font-space-mono)] text-sm text-[var(--vf-terminal-green)]">
                  {item.cmd}
                </span>
                <p className="text-[10px] text-[var(--vf-text-muted)] mt-1">{item.role}</p>
              </Link>
            ))}
          </div>
        </section>
        </ScrollReveal>

        <div className="mt-12 flex justify-between text-sm">
          <Link
            href="/tutorial"
            className="text-[var(--vf-text-muted)] hover:text-[var(--vf-forge-orange)] transition-colors"
          >
            &larr; Tutorial Hub
          </Link>
          <Link
            href="/commands/debrief"
            className="text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)] transition-colors"
          >
            See /debrief &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
