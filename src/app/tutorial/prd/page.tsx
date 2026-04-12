import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SpeechBubble } from "@/components/speech-bubble";

export const metadata: Metadata = {
  title: "Generate a PRD with /prd",
  description:
    "Sisko interviews you in 5 acts and produces a complete PRD with valid YAML frontmatter — ready for /build or /campaign.",
};

export default function PrdPage() {
  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <Link href="/tutorial" className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-forge-orange)] transition-colors mb-4 inline-block">
          &larr; Tutorial Hub
        </Link>
        <PageHeader title="GENERATE A PRD" subtitle="Ship Track — Step 1" />

        <SpeechBubble agent="Sisko" universe="star-trek">
          A campaign without a PRD is a fleet without orders. The{" "}
          <code className="text-[var(--vf-electric-blue)]">/prd</code> command
          interviews you in five structured acts, then produces a complete
          product requirements document — valid YAML frontmatter, feature
          breakdown, and deployment spec. No blank-page syndrome. No guessing.
        </SpeechBubble>

        <section className="mt-12">
          <h2
            id="why-a-prd-matters"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            WHY A PRD MATTERS
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Every VoidForge command reads the PRD. It determines which build
            phases apply, which agents activate, and what stack gets scaffolded.
            A missing or incomplete PRD means the agents are flying blind — they
            will ask questions, stall, or build the wrong thing.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            The{" "}
            <code className="text-[var(--vf-electric-blue)]">/prd</code>{" "}
            command eliminates this problem. It walks you through every decision
            — name, stack, auth, payments, deploy target, features — and outputs
            a file that the entire system can read without ambiguity.
          </p>
        </section>

        <ScrollReveal delay={0.06}>
        <section className="mt-12">
          <h2
            id="the-5-act-interview"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            THE 5-ACT INTERVIEW
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Open Claude Code in your project directory and type:
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">/prd</code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Sisko runs a structured interview across five acts: vision and
            identity, technical stack, features and flows, deployment and
            infrastructure, and stretch goals. Each act produces a section of
            the final PRD. The output lands at{" "}
            <code className="text-[var(--vf-electric-blue)]">docs/PRD.md</code>{" "}
            with valid YAML frontmatter that every downstream command can parse.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            The interview is feature-by-feature. Sisko does not ask vague
            questions — he asks specific ones: &ldquo;Do users authenticate?
            With what provider? Do you need role-based access?&rdquo; Every
            answer maps directly to a PRD field.
          </p>
        </section>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
        <section className="mt-12">
          <h2
            id="using-challenge"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            USING --CHALLENGE
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            If you want your PRD stress-tested before you build, add the
            challenge flag:
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">/prd --challenge</code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            This activates Boromir — an adversarial reviewer who pushes back on
            every assumption. Scope too wide? He&apos;ll say so. Missing edge
            cases? He&apos;ll find them. Tech stack mismatch? He&apos;ll call it
            out. The result is a tighter, more defensible PRD that survives
            contact with reality.
          </p>
          <p className="text-[var(--vf-text-muted)]">
            Think of it as a red-team pass on your product plan. Your PRD comes
            out battle-hardened — and your campaign starts on solid ground.
          </p>
        </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
