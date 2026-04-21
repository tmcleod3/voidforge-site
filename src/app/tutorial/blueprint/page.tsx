import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SpeechBubble } from "@/components/speech-bubble";

export const metadata: Metadata = {
  title: "VoidForge Blueprint — You Bring the Spec",
  description:
    "You already have a complete PRD. Drop it in, run /blueprint. Picard validates, Wong discovers docs, Kusanagi provisions, Sisko builds.",
};

export default function BlueprintPage() {
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
          title="THE BLUEPRINT PATH"
          subtitle="You already have a complete PRD. Drop it in and let the crew execute."
        />

        <SpeechBubble agent="Picard" universe="star-trek">
          You arrive with orders already written. Good. I&apos;ll validate your
          frontmatter, scan for conflicts, and prepare the crew. You don&apos;t
          need the wizard&apos;s hand-holding — you need the bridge
          crew&apos;s precision.
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
            <strong className="text-[var(--vf-text)]">A finished PRD</strong>{" "}
            at{" "}
            <code className="text-[var(--vf-electric-blue)]">docs/PRD.md</code>{" "}
            — with valid YAML frontmatter. The only required field is{" "}
            <code className="text-[var(--vf-electric-blue)]">name</code>.
            Optional but recognized:{" "}
            <code className="text-[var(--vf-electric-blue)]">type</code>,{" "}
            <code className="text-[var(--vf-electric-blue)]">framework</code>,{" "}
            <code className="text-[var(--vf-electric-blue)]">database</code>,{" "}
            <code className="text-[var(--vf-electric-blue)]">deploy</code>,{" "}
            <code className="text-[var(--vf-electric-blue)]">auth</code>,{" "}
            <code className="text-[var(--vf-electric-blue)]">payments</code>,{" "}
            <code className="text-[var(--vf-electric-blue)]">workers</code>.
            Need help writing one?{" "}
            <Link
              href="/commands/prd"
              className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
            >
              Use /prd to generate it
            </Link>
            .
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            <strong className="text-[var(--vf-text)]">
              VoidForge
            </strong>{" "}
            — create a project (requires{" "}
            <Link
              href="/tutorial/install"
              className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
            >
              Node 20+
            </Link>
            ):
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">
              npx voidforge-build init my-project
            </code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            <strong className="text-[var(--vf-text)]">Claude Code</strong> —
            Anthropic&apos;s coding CLI. Install with:{" "}
            <code className="text-[var(--vf-electric-blue)]">
              curl -fsSL https://claude.ai/install.sh | bash
            </code>
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            <strong className="text-[var(--vf-text)]">
              Optional: Supporting documents
            </strong>{" "}
            — ADRs in{" "}
            <code className="text-[var(--vf-electric-blue)]">docs/adrs/</code>,
            project directives in{" "}
            <code className="text-[var(--vf-electric-blue)]">
              docs/PROJECT-DIRECTIVES.md
            </code>
            , operations playbook in{" "}
            <code className="text-[var(--vf-electric-blue)]">
              docs/OPERATIONS.md
            </code>
            , reference materials in{" "}
            <code className="text-[var(--vf-electric-blue)]">
              docs/reference/
            </code>
            .
          </p>
        </section>

        <ScrollReveal delay={0.06}>
        <section className="mt-12">
          <h2
            id="drop-your-spec"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            DROP YOUR SPEC
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Copy your PRD into the project:
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">cp ~/my-spec.md docs/PRD.md</code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            If you have supporting documents, place them where the agents expect
            them:
          </p>
          <ul className="text-[var(--vf-text-muted)] mb-4 space-y-2 ml-4">
            <li>
              <code className="text-[var(--vf-electric-blue)]">
                docs/PROJECT-DIRECTIVES.md
              </code>{" "}
              — project-specific coding rules (appended to CLAUDE.md)
            </li>
            <li>
              <code className="text-[var(--vf-electric-blue)]">
                docs/adrs/*.md
              </code>{" "}
              — architecture decisions Picard references
            </li>
            <li>
              <code className="text-[var(--vf-electric-blue)]">
                docs/OPERATIONS.md
              </code>{" "}
              — operational constraints Sisko references
            </li>
            <li>
              <code className="text-[var(--vf-electric-blue)]">
                docs/reference/*
              </code>{" "}
              — any reference material available to all agents
            </li>
          </ul>
        </section>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <SpeechBubble agent="Wong" universe="marvel">
            I scan every corner of docs/ for supporting material. ADRs, directives,
            operations playbooks, reference files — anything that helps the crew
            build smarter. Drop it in docs/ and I&apos;ll find it.
          </SpeechBubble>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
        <section className="mt-12">
          <h2
            id="run-blueprint"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            RUN /BLUEPRINT
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            First, launch Claude Code in your project directory:
          </p>
          <div className="crt-terminal !p-4 mb-6 space-y-2">
            <div>
              <code className="text-sm">cd my-project</code>
            </div>
            <div>
              <code className="text-sm">claude</code>
            </div>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            This launches Claude Code in your project directory. Claude
            automatically reads the CLAUDE.md methodology file, which loads
            VoidForge&apos;s agents and commands. At the Claude Code prompt,
            type:
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">/blueprint</code>
          </div>
          <p className="text-sm text-[var(--vf-text-muted)] px-4 py-3 rounded bg-[var(--vf-surface-overlay)] border border-[var(--vf-border)] mb-6">
            <strong className="text-[var(--vf-forge-orange)]">How slash commands work:</strong>{" "}
            All VoidForge commands starting with{" "}
            <code className="text-[var(--vf-electric-blue)]">/</code> run inside
            Claude Code, not your system terminal. Launch Claude Code with{" "}
            <code className="text-[var(--vf-electric-blue)]">claude</code> in
            your terminal first. You&apos;ll see a{" "}
            <code className="text-[var(--vf-electric-blue)]">&gt;</code> prompt
            — that&apos;s where you type{" "}
            <code className="text-[var(--vf-electric-blue)]">/blueprint</code>,{" "}
            <code className="text-[var(--vf-electric-blue)]">/campaign</code>,{" "}
            <code className="text-[var(--vf-electric-blue)]">/gauntlet</code>,
            and all other slash commands.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Here&apos;s what happens under the hood (see{" "}
            <Link
              href="/commands/blueprint"
              className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
            >
              /commands/blueprint
            </Link>{" "}
            for full detail):
          </p>
          <ol className="text-[var(--vf-text-muted)] mb-4 space-y-2 ml-4 list-decimal list-inside">
            <li>
              <strong className="text-[var(--vf-text)]">
                Picard validates
              </strong>{" "}
              — parses YAML frontmatter, checks required fields, extracts
              architecture
            </li>
            <li>
              <strong className="text-[var(--vf-text)]">
                Troi checks structure
              </strong>{" "}
              — does the PRD have features? data models? deployment section?
            </li>
            <li>
              <strong className="text-[var(--vf-text)]">
                Wong discovers docs
              </strong>{" "}
              — scans for supporting materials, loads them into context
            </li>
            <li>
              <strong className="text-[var(--vf-text)]">
                Directives merge
              </strong>{" "}
              — project-specific rules appended to CLAUDE.md (idempotent)
            </li>
            <li>
              <strong className="text-[var(--vf-text)]">Conflict scan</strong>{" "}
              — checks for structural contradictions (auth without database,
              workers on static hosting, etc.)
            </li>
            <li>
              <strong className="text-[var(--vf-text)]">
                Kusanagi provisions
              </strong>{" "}
              — sets up infrastructure from frontmatter (framework, database,
              deploy target)
            </li>
          </ol>
        </section>
        </ScrollReveal>

        <ScrollReveal delay={0.18}>
        <section className="mt-12">
          <h2
            id="the-challenge"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            THE CHALLENGE (OPTIONAL)
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            For extra confidence, add{" "}
            <code className="text-[var(--vf-electric-blue)]">--challenge</code>{" "}
            (inside Claude Code):
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">/blueprint --challenge</code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Boromir reads your entire PRD and argues against it — expensive
            features, fragile integrations, schema gaps, deploy target
            mismatches. A 30-second argument saves a 3-hour refactor.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            You can accept challenges (edit PRD) or override (proceed as-is).
          </p>
        </section>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <SpeechBubble agent="Boromir" universe="tolkien">
            One does not simply ship a PRD without questioning it. I find the
            expensive features you&apos;ll regret, the integrations that will break
            at 3am, and the schema decisions that paint you into a corner. Better
            to argue now than debug later.
          </SpeechBubble>
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
            Once validated, run the campaign (inside Claude Code):
          </p>
          <div className="crt-terminal !p-4 mb-6 space-y-2">
            <div>
              <code className="text-sm">
                /campaign{"               "}# Autonomous build, full roster (default)
              </code>
            </div>
            <div>
              <code className="text-sm">
                /campaign --interactive  # Pause between missions for inspection
              </code>
            </div>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Sisko reads the validated PRD, breaks it into missions, and executes
            end to end. Each mission: build, review, fix, commit.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            When complete, Kusanagi deploys.
          </p>
        </section>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <SpeechBubble agent="Kusanagi" universe="anime">
            Picard validated your spec. Wong loaded your docs. Boromir argued and
            lost. Now I provision the target — Vercel, AWS, Railway, Docker, bare
            metal. Your blueprint becomes infrastructure.
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
            Your spec is validated, built, and deployed. Now stress-test it
            before real users arrive. Run{" "}
            <Link
              href="/tutorial/gauntlet"
              className="text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)]"
            >
              the Gauntlet
            </Link>{" "}
            — 30+ agents review every domain before you ship.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
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
          <p className="text-[var(--vf-text-muted)] mb-4">
            For full command details, see the{" "}
            <Link
              href="/commands/blueprint"
              className="text-[var(--vf-electric-blue)] hover:text-[var(--vf-forge-orange)] underline"
            >
              /blueprint command reference
            </Link>
            .
          </p>
          <p className="text-[var(--vf-text-muted)]">
            Don&apos;t have a spec yet?{" "}
            <Link
              href="/tutorial/wizard"
              className="text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)]"
            >
              Start with the Wizard
            </Link>{" "}
            — it builds your PRD from scratch through an interactive
            conversation.
          </p>
        </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
