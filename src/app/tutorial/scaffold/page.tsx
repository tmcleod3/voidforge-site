import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { SpeechBubble } from "@/components/speech-bubble";

export const metadata: Metadata = {
  title: "VoidForge Scaffold — Methodology Only",
  description:
    "You know your stack and have a plan. The scaffold gives you the methodology — you bring the vision.",
};

export default function ScaffoldPage() {
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
          title="THE SCAFFOLD PATH"
          subtitle="You know your stack. You have a plan. The forge executes."
        />

        <SpeechBubble agent="Bilbo" universe="tolkien">
          You don&apos;t need the wizard&apos;s hand-holding. You know what
          you&apos;re building, you know your stack, and you&apos;ve written
          PRDs before. The scaffold gives you the methodology without the magic
          tricks.
        </SpeechBubble>

        <section className="mt-12">
          <h2
            id="get-the-scaffold"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            GET THE SCAFFOLD
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Clone the scaffold branch directly. No npm install, no wizard, no
            provisioners.
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">
              git clone --branch scaffold https://github.com/tmcleod3/voidforge.git my-project
            </code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            The scaffold tier includes everything you need to run the forge:
            CLAUDE.md, slash commands, method docs, code patterns, and the
            Holocron. What it doesn&apos;t include: wizards, provisioners, AWS
            SDK, or any runtime dependencies. It&apos;s pure methodology — add
            your own stack on top.
          </p>
          <p className="text-sm text-[var(--vf-text-muted)] px-4 py-3 rounded bg-[var(--vf-surface-overlay)] border border-[var(--vf-border)]">
            <strong className="text-[var(--vf-forge-orange)]">Windows users:</strong>{" "}
            This is your fastest path. No npm install means no native module
            compilation, no C++ build tools, no node-gyp headaches. Just Git and
            Claude Code.
          </p>
        </section>

        <section className="mt-12">
          <h2
            id="write-your-prd"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            WRITE YOUR PRD
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Two options. If you already have a spec in your head, write it
            directly to{" "}
            <code className="text-[var(--vf-electric-blue)]">docs/PRD.md</code>{" "}
            using the template format — YAML frontmatter plus markdown sections.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            If you want a guided interview instead, launch Claude Code first:
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
            This opens the Claude Code CLI in your project directory. Claude
            automatically reads the CLAUDE.md methodology file, which loads
            VoidForge&apos;s agents and commands. At the Claude Code prompt,
            type:
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">/prd</code>
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
            <code className="text-[var(--vf-electric-blue)]">/prd</code>,{" "}
            <code className="text-[var(--vf-electric-blue)]">/campaign</code>,{" "}
            <code className="text-[var(--vf-electric-blue)]">/gauntlet</code>,
            and all other slash commands.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Sisko asks targeted questions about your product, stack, users, and
            deploy target, then generates the complete PRD with proper
            frontmatter. Either path produces the same result — a specification
            the agents can execute against.
          </p>
        </section>

        <SpeechBubble agent="Sisko" universe="star-trek">
          Once your PRD is in place, I run the war.{" "}
          <code className="text-[var(--vf-electric-blue)]">/campaign</code>{" "}
          reads every section, breaks it into missions, and runs{" "}
          <code className="text-[var(--vf-electric-blue)]">/assemble</code>{" "}
          for each. You can watch — or you can walk away and come back to a
          built project.
        </SpeechBubble>

        <section className="mt-12">
          <h2
            id="run-the-campaign"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            RUN THE CAMPAIGN
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Launch the full autonomous build (inside Claude Code):
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">/campaign --blitz</code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Blitz mode combines{" "}
            <code className="text-[var(--vf-electric-blue)]">--fast</code> and{" "}
            <code className="text-[var(--vf-electric-blue)]">--autonomous</code>{" "}
            — reduced review cycles, no pause between missions. Sisko reads the
            PRD, breaks it into dependency-ordered missions, and runs the full{" "}
            <code className="text-[var(--vf-electric-blue)]">/assemble</code>{" "}
            pipeline for each: architect, build, triple review, UX, double
            security, devops, QA, tests, crossfire, council. When every mission
            passes, the Victory Gauntlet runs automatically.
          </p>
        </section>

        <section className="mt-12">
          <h2
            id="review-and-ship"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            REVIEW AND SHIP
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            After the campaign completes, run the standalone Gauntlet for a
            final pass (inside Claude Code):
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">/gauntlet</code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Generate marketing assets and screenshots from your PRD&apos;s
            visual descriptions (inside Claude Code):
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">/imagine --scan</code>
          </div>
          <p className="text-[var(--vf-text-muted)]">
            Then deploy. Kusanagi reads the deploy target from your PRD
            frontmatter and handles the infrastructure — or run{" "}
            <code className="text-[var(--vf-electric-blue)]">/devops</code>{" "}
            inside Claude Code to configure your target before shipping.
          </p>
          <p className="text-[var(--vf-text-muted)] mt-4 text-sm">
            <strong className="text-[var(--vf-text)]">Hybrid project?</strong>{" "}
            If you&apos;re adding VoidForge to an existing codebase rather than
            starting fresh, consider running{" "}
            <code className="text-[var(--vf-electric-blue)]">/assess</code>{" "}
            first to map what you have before writing the PRD. See{" "}
            <Link
              href="/tutorial/import"
              className="text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)]"
            >
              The Import Path
            </Link>{" "}
            for the full workflow.
          </p>
        </section>
      </div>
    </div>
  );
}
