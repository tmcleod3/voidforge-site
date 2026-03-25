import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { SpeechBubble } from "@/components/speech-bubble";

export const metadata: Metadata = {
  title: "Run a Campaign",
  description:
    "Sisko reads the PRD, picks missions, and runs /assemble for each — full war-room autonomy with /campaign.",
};

export default function CampaignPage() {
  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <Link href="/tutorial" className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-forge-orange)] transition-colors mb-4 inline-block">
          &larr; Tutorial Hub
        </Link>
        <PageHeader title="RUN A CAMPAIGN" subtitle="Ship Track — Step 2" />

        <SpeechBubble agent="Sisko" universe="star-trek">
          A campaign is not a single build — it&apos;s a war. I read the PRD,
          break it into missions, and execute them one at a time. Kira runs
          recon, Dax analyzes the battlefield, and I call{" "}
          <code className="text-[var(--vf-electric-blue)]">/assemble</code> for
          each mission. When every mission is complete, the Victory Gauntlet
          runs automatically. That&apos;s how you ship.
        </SpeechBubble>

        <section className="mt-12">
          <h2
            id="what-is-a-campaign"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            WHAT IS A CAMPAIGN
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            A campaign takes your entire PRD and builds it mission by mission.
            Each mission maps to a feature or flow from the PRD. Sisko picks the
            next mission based on dependency order, runs the full{" "}
            <code className="text-[var(--vf-electric-blue)]">/assemble</code>{" "}
            pipeline for it — architect, build, review, UX, security, QA, tests
            — and only moves on when the mission passes all gates.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            This is not a monolithic build. It&apos;s iterative, resumable, and
            tracks state across sessions. If context gets heavy or you need to
            stop, Sisko writes a checkpoint and picks up exactly where you left
            off.
          </p>
        </section>

        <section className="mt-12">
          <h2
            id="key-flags"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            KEY FLAGS
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            The fastest way to launch a campaign:
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">/campaign --blitz</code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            <code className="text-[var(--vf-electric-blue)]">--blitz</code>{" "}
            runs autonomously — no confirmation prompts between missions,
            auto-commits, auto-debriefs. Full review quality is preserved.
            Walk away and come back to a built project.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            <code className="text-[var(--vf-electric-blue)]">--fast</code>{" "}
            trims review rounds (skips Crossfire + Council per mission) but
            keeps the pause between missions so you can inspect each one.
            Combine with blitz{" "}
            (<code className="text-[var(--vf-electric-blue)]">--blitz --fast</code>)
            for maximum velocity with reduced reviews.{" "}
            <code className="text-[var(--vf-electric-blue)]">--resume</code>{" "}
            picks up from the last checkpoint — essential for multi-session
            campaigns.{" "}
            <code className="text-[var(--vf-electric-blue)]">--plan</code>{" "}
            updates the PRD without building.{" "}
            <code className="text-[var(--vf-electric-blue)]">--mission &quot;Name&quot;</code>{" "}
            jumps to a specific mission.{" "}
            <code className="text-[var(--vf-electric-blue)]">--muster</code>{" "}
            deploys every viable agent across all 9 universes for each
            mission — maximum coverage when the stakes are high.
          </p>
        </section>

        <section className="mt-12">
          <h2
            id="the-campaign-loop"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            THE CAMPAIGN LOOP
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Every campaign follows the same loop: Kira runs recon on the current
            mission scope, Dax analyzes dependencies and risk, Sisko calls{" "}
            <code className="text-[var(--vf-electric-blue)]">/assemble</code>{" "}
            to execute the build pipeline, and the mission is verified against
            its gates. Repeat until the PRD is fully built.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Every 4th mission triggers a{" "}
            <strong className="text-[var(--vf-text)]">checkpoint gauntlet</strong>{" "}
            — a quick 3-round review of the combined system. Individual missions
            only review their own scope; checkpoints catch cross-module issues
            like missing imports, inconsistent auth, or API contract drift
            between features built in different missions.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Campaigns also extract{" "}
            <strong className="text-[var(--vf-text)]">learned rules</strong>{" "}
            — when the same root cause appears across multiple checkpoints,
            it becomes a persistent pre-flight check saved in{" "}
            <code className="text-[var(--vf-electric-blue)]">campaign-state.md</code>.
            Rules persist across sessions because they live in the file, not in
            context.
          </p>
          <p className="text-[var(--vf-text-muted)]">
            When the last mission completes, Sisko triggers the Victory
            Gauntlet — a full{" "}
            <code className="text-[var(--vf-electric-blue)]">/gauntlet</code>{" "}
            pass across the entire project. If it survives, you&apos;re ready
            to ship. If issues surface, they get logged as new missions and the
            campaign continues until everything is clean.
          </p>
        </section>
      </div>
    </div>
  );
}
