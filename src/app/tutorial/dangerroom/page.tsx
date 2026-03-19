import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { SpeechBubble } from "@/components/speech-bubble";

export const metadata: Metadata = {
  title: "The Danger Room",
  description:
    "Real-time mission control for VoidForge — build progress, agent activity, findings, deploy status, and campaign state in one dashboard.",
};

export default function DangerRoomPage() {
  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/tutorial"
          className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-forge-orange)] transition-colors mb-4 inline-block"
        >
          &larr; Tutorial Hub
        </Link>
        <PageHeader title="THE DANGER ROOM" subtitle="Grow Track — Step 4" />

        <SpeechBubble agent="Fury" universe="marvel">
          I didn&apos;t build SHIELD by reading log files. The Danger Room gives
          you eyes on everything — every agent, every build phase, every finding,
          every deploy — in real time. One screen. No switching tabs. No guessing
          what the agents are doing. You see it all.
        </SpeechBubble>

        <section className="mt-12">
          <h2
            id="what-is-the-danger-room"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            WHAT IS THE DANGER ROOM
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            The Danger Room is VoidForge&apos;s real-time mission control
            dashboard. It aggregates every signal from your build, review, and
            growth pipelines into a single interface. Launch it and leave it
            open — it updates live via WebSocket.
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">
              <span className="text-[var(--vf-text-muted)]">$ </span>/dangerroom
            </code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Opens the dashboard in your browser. The WebSocket connection streams
            agent activity, build events, and deploy status in real time. No
            polling, no refresh — just a live feed of everything happening in
            your project.
          </p>
        </section>

        <section className="mt-12">
          <h2
            id="the-5-panels"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            THE 5 PANELS
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            The dashboard is divided into five panels, each tracking a different
            dimension of your project:
          </p>
          <div className="space-y-4 text-[var(--vf-text-muted)]">
            <p>
              <strong className="text-[var(--vf-forge-orange)]">Build Progress</strong>{" "}
              — Tracks the 13-phase build protocol. Shows which phase is active,
              which gates have passed, and estimated time to completion. Includes
              the Living PRD diff view so you can see how the PRD evolves as
              agents refine it during build.
            </p>
            <p>
              <strong className="text-[var(--vf-forge-orange)]">Agent Activity</strong>{" "}
              — A real-time ticker showing which agents are active, what
              they&apos;re working on, and their current status. When Kenobi
              finds a vulnerability or Batman catches a bug, you see it here
              first.
            </p>
            <p>
              <strong className="text-[var(--vf-forge-orange)]">Findings</strong>{" "}
              — Aggregates all issues, warnings, and recommendations from every
              agent across every phase. Filterable by severity, domain, and
              agent. Nothing gets buried in log files.
            </p>
            <p>
              <strong className="text-[var(--vf-forge-orange)]">Deploy Status</strong>{" "}
              — Live deployment state: pre-flight checks, provisioning progress,
              health checks, SSL status, and monitoring configuration. When
              Kusanagi deploys, you watch it happen.
            </p>
            <p>
              <strong className="text-[var(--vf-forge-orange)]">Campaign State</strong>{" "}
              — Growth campaign overview from the Cultivation stack: active ads,
              spend vs. budget, conversion rates, and Treasury balance. Only
              visible when the Grow track is active.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2
            id="real-time-agent-feed"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            REAL-TIME AGENT FEED
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            The WebSocket feed is the backbone of the Danger Room. Every agent
            event — task start, finding logged, phase gate passed, deploy step
            completed — is broadcast as a structured JSON message. The dashboard
            renders them in real time, but you can also consume the feed
            programmatically for custom integrations.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            The Living PRD diff view deserves special attention. As agents work,
            they sometimes refine the PRD — clarifying ambiguities, adding
            technical constraints discovered during build. The Danger Room shows
            these diffs inline so you can approve or reject changes before they
            propagate.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Think of it as mission control for software. You built the thing.
            Now watch it come alive.
          </p>
        </section>
      </div>
    </div>
  );
}
