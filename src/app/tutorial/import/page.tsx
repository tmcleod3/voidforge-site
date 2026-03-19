import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { SpeechBubble } from "@/components/speech-bubble";

export const metadata: Metadata = {
  title: "The Import Path",
  description:
    "You have code already. The forge joins mid-flight — audits what exists, builds what's missing.",
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
          it.
        </SpeechBubble>

        <section className="mt-12">
          <h2
            id="install-the-core"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            INSTALL THE CORE
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Clone the core branch into your existing project directory. This
            adds the methodology layer without touching your code.
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">
              git clone --branch core https://github.com/tmcleod3/voidforge.git ./voidforge-core
            </code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            The core tier is ultra-light: CLAUDE.md, slash commands, method
            docs, code patterns, and the naming registry. No wizards, no
            provisioners, no runtime dependencies. Point Claude Code at it and
            the forge absorbs the methodology. Your existing build system,
            your existing deploy pipeline, your existing everything — all
            untouched.
          </p>
        </section>

        <section className="mt-12">
          <h2
            id="generate-your-prd"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            GENERATE YOUR PRD
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Use the PRD command to have Sisko interview you about your existing
            project:
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">/prd</code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Sisko scans your codebase, asks about your architecture, and
            produces a PRD that describes what you already have AND what you
            want to add. The frontmatter captures your existing stack — your
            database, your framework, your deploy target — so agents work
            within your constraints instead of fighting them.
          </p>
        </section>

        <SpeechBubble agent="Picard" universe="star-trek">
          I&apos;ll review your existing architecture before we build anything
          new. The forge adapts to your constraints — your database, your
          deploy target, your conventions. We don&apos;t replace what works.
        </SpeechBubble>

        <section className="mt-12">
          <h2
            id="audit-first-build-second"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            AUDIT FIRST, BUILD SECOND
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Before adding features, run the Gauntlet on your existing code:
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">/gauntlet</code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Batman finds bugs. Kenobi finds security gaps. Galadriel checks
            the UX. Picard reviews the architecture. You get a scored report
            with every issue ranked by severity — fix the critical ones before
            you add more surface area.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Then target specific features with the campaign command:
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">/campaign --mission &quot;Feature X&quot;</code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Single-mission mode builds one feature through the full pipeline —
            architect, build, review, security, QA — without touching
            anything else in your codebase.
          </p>
        </section>

        <SpeechBubble agent="Batman" universe="dc">
          I don&apos;t care who wrote the code before me. I test it the same
          way. If it breaks under pressure, I find it.
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
            Deep-dive into the review tools: run{" "}
            <Link
              href="/tutorial/gauntlet"
              className="text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)]"
            >
              the Gauntlet
            </Link>{" "}
            for comprehensive review, or learn how{" "}
            <Link
              href="/tutorial/campaign"
              className="text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)]"
            >
              campaigns
            </Link>{" "}
            break a full PRD into executable missions.
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
      </div>
    </div>
  );
}
