import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SpeechBubble } from "@/components/speech-bubble";

export const metadata: Metadata = {
  title: "Import an Existing Project into VoidForge",
  description:
    "You have code already. The forge assesses what exists, generates a PRD from reality, and builds what's missing.",
};

export default function ImportPage() {
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
          title="THE IMPORT PATH"
          subtitle="You have code. The forge joins mid-flight."
        />

        <SpeechBubble agent="Bilbo" universe="tolkien">
          The forge doesn&apos;t just build from nothing. It can join a project
          already in flight. You&apos;ve got code, you&apos;ve got
          infrastructure, you&apos;ve got history. The forge respects all of
          it — but it needs to understand it first.
        </SpeechBubble>

        <section className="mt-12">
          <h2
            id="install-the-methodology"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            1. ADD THE METHODOLOGY
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Initialize VoidForge in your existing project directory. This
            adds the methodology layer without touching your code.
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">
              npx thevoidforge init
            </code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            This adds the VoidForge methodology: CLAUDE.md, slash commands,
            method docs, code patterns, and the naming registry. No runtime
            dependencies are added to your project. Point Claude Code at it and
            the forge absorbs the methodology.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Now launch Claude Code from your project directory:
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">
              cd my-project{"\n"}claude
            </code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            This launches Claude Code. It reads the CLAUDE.md and loads the
            VoidForge methodology. All slash commands below are typed at the
            Claude Code prompt.
          </p>
          <p className="text-sm text-[var(--vf-text-muted)] px-4 py-3 rounded bg-[var(--vf-surface-overlay)] border border-[var(--vf-border)]">
            <strong className="text-[var(--vf-text)]">How slash commands work:</strong>{" "}
            All VoidForge commands starting with{" "}
            <code className="text-[var(--vf-electric-blue)]">/</code> run inside
            Claude Code, not your system terminal. Launch Claude Code with{" "}
            <code className="text-[var(--vf-electric-blue)]">claude</code>, then
            type{" "}
            <code className="text-[var(--vf-electric-blue)]">/assess</code>,{" "}
            <code className="text-[var(--vf-electric-blue)]">/prd</code>,{" "}
            <code className="text-[var(--vf-electric-blue)]">/campaign</code>,
            etc. at the{" "}
            <code className="text-[var(--vf-electric-blue)]">&gt;</code> prompt.
          </p>
        </section>

        <ScrollReveal delay={0.06}>
        <section className="mt-12">
          <h2
            id="assess-the-codebase"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            2. ASSESS THE CODEBASE
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Before writing a PRD or building anything, let Picard&apos;s bridge
            crew map what you already have:
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">/assess</code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            This chains three operations into one command. Picard runs a full
            architecture scan — schema, integrations, security posture, service
            boundaries. Thanos runs an assessment-mode Gauntlet (Rounds 1-2
            only) that groups findings by root cause instead of domain. Dax and
            Troi diff your existing PRD against reality — or inventory what
            exists if you don&apos;t have a PRD yet.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            The result is a{" "}
            <strong className="text-[var(--vf-text)]">
              State of the Codebase
            </strong>{" "}
            report in{" "}
            <code className="text-[var(--vf-electric-blue)]">
              /logs/assessment.md
            </code>{" "}
            — architecture summary, root causes grouped, PRD alignment, and a
            remediation plan. This becomes the foundation for everything that
            follows.
          </p>
        </section>
        </ScrollReveal>

        <SpeechBubble agent="Picard" universe="star-trek">
          Assessment before action. I need to understand your architecture — the
          schema, the integrations, the security posture — before I can advise
          on what to build next. The assessment report becomes Sisko&apos;s
          briefing document.
        </SpeechBubble>

        <ScrollReveal delay={0.12}>
        <section className="mt-12">
          <h2
            id="generate-your-prd"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            3. GENERATE YOUR PRD
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Now that the assessment has mapped your existing system, have Sisko
            interview you about what to build next:
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">/prd</code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Sisko&apos;s 5-act interview is now informed by the assessment. He
            knows your stack, your schema, your security posture. The PRD he
            produces describes what you already have AND what you want to add —
            with frontmatter that captures your existing constraints so agents
            work within them instead of fighting them.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            If you already have a PRD, the assessment report will have flagged
            where it drifted from reality. Run{" "}
            <code className="text-[var(--vf-electric-blue)]">
              /prd --challenge
            </code>{" "}
            to have Boromir red-team the existing PRD against the assessment
            findings.
          </p>
        </section>
        </ScrollReveal>

        <ScrollReveal delay={0.18}>
        <section className="mt-12">
          <h2
            id="build-with-campaign"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            4. BUILD WITH CAMPAIGN
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Hand the PRD to Sisko and let the campaign engine sequence the work:
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">/campaign</code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Dax reads the PRD and assessment, orders missions by dependency, and
            Sisko briefs you on each one before execution. Each mission runs
            through the full pipeline — architect, build, review, security —
            without touching anything outside its scope.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Campaigns run autonomously by default — no confirmation prompts,
            auto-commits after each mission, auto-debriefs to capture learnings.
            Walk away and come back to a built project. The Victory Gauntlet at
            the end is non-negotiable. Use{" "}
            <code className="text-[var(--vf-electric-blue)]">--interactive</code>{" "}
            to pause between missions if you want to inspect each one.
          </p>
        </section>
        </ScrollReveal>

        <SpeechBubble agent="Batman" universe="dc">
          I don&apos;t care who wrote the code before me. I test it the same
          way. If it breaks under pressure, I find it.
        </SpeechBubble>

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
            Deep-dive into the tools: learn how{" "}
            <Link
              href="/tutorial/gauntlet"
              className="text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)]"
            >
              the Gauntlet
            </Link>{" "}
            works (including the{" "}
            <code className="text-[var(--vf-electric-blue)]">--assess</code>{" "}
            flag for lightweight pre-build evaluation), or how{" "}
            <Link
              href="/tutorial/campaign"
              className="text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)]"
            >
              campaigns
            </Link>{" "}
            break a full PRD into executable missions with checkpoint gauntlets
            and learned rules.
          </p>
          <p className="text-[var(--vf-text-muted)]">
            Once your imported project is hardened and your new features are
            built, the{" "}
            <Link
              href="/tutorial/grow"
              className="text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)]"
            >
              growth engine
            </Link>{" "}
            handles SEO, ads, social, and outreach — turning your existing
            project into a growth machine.
          </p>
        </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
