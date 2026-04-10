import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { SpeechBubble } from "@/components/speech-bubble";
import { ForgeLabsBanner } from "@/components/forge-labs-banner";

export const metadata: Metadata = {
  title: "The Danger Room",
  description:
    "Per-project mission control for VoidForge — build progress, agent activity, findings, deploy status, and campaign state scoped to each project.",
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

        <ForgeLabsBanner feature="The Danger Room" />

        <SpeechBubble agent="Fury" universe="marvel">
          I didn&apos;t build SHIELD by reading log files. The Danger Room
          gives you eyes on everything — every agent, every phase, every
          finding — scoped to your project. One screen. No noise.
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
            The Danger Room is a tab inside the per-project dashboard. It
            shows only data for the project you&apos;re viewing —
            campaigns, heartbeat, treasury, and agent activity are all
            project-scoped. No cross-project data leakage.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            <strong className="text-[var(--vf-text)]">Navigation:</strong>{" "}
            Lobby &rarr; click a project card &rarr; Danger Room tab. Breadcrumb
            navigation takes you back.
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">
              /dangerroom
            </code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Opens the wizard dashboard. Navigate to your project, then select
            the Danger Room tab. WebSocket broadcasts are filtered by project ID
            via subscription rooms — you only see events from this project.
          </p>
        </section>

        <section className="mt-12">
          <h2
            id="project-dashboard"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            THE PROJECT DASHBOARD
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Each project gets a 5-tab single-page dashboard:
          </p>
          <div className="space-y-4 text-[var(--vf-text-muted)]">
            <p>
              <strong className="text-[var(--vf-forge-orange)]">Overview</strong>{" "}
              — Project summary, recent activity, health status.
            </p>
            <p>
              <strong className="text-[var(--vf-forge-orange)]">Tower</strong>{" "}
              — In-browser terminal running Claude Code (Avengers Tower).
            </p>
            <p>
              <strong className="text-[var(--vf-forge-orange)]">Danger Room</strong>{" "}
              — Build progress, agent activity, findings, deploy status.
              Real-time via project-scoped WebSocket.
            </p>
            <p>
              <strong className="text-[var(--vf-forge-orange)]">War Room</strong>{" "}
              — Growth campaign state from the Cultivation stack: active ads,
              spend vs. budget, conversion rates, Treasury balance.
            </p>
            <p>
              <strong className="text-[var(--vf-forge-orange)]">Deploy</strong>{" "}
              — Deployment controls, health checks, rollback.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <h2
            id="project-scoped-data"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            PROJECT-SCOPED DATA
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            All API routes use{" "}
            <code className="text-[var(--vf-electric-blue)]">
              /api/projects/:id/danger-room/*
            </code>{" "}
            with access control via{" "}
            <code className="text-[var(--vf-electric-blue)]">
              resolveProject()
            </code>{" "}
            middleware. Every request validates project access before serving
            data.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            WebSocket connections subscribe to project-specific rooms. When an
            agent logs a finding or a deploy step completes, only clients
            viewing that project receive the event. The Living PRD diff view,
            build progress, and agent activity ticker are all scoped the same
            way.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            The Lobby shows all your projects with &ldquo;Resume last
            project&rdquo; (persisted in localStorage) for quick re-entry.
            Think of it as mission control — per mission.
          </p>
        </section>

        <section className="mt-12">
          <h2
            id="whats-next"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            WHAT&apos;S NEXT
          </h2>
          <p className="text-[var(--vf-text-muted)]">
            The Danger Room watches. Now make it watch something worth watching.
            Go back to{" "}
            <Link
              href="/tutorial/cultivation"
              className="text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)]"
            >
              Cultivation (Step 1)
            </Link>{" "}
            if you haven&apos;t installed the growth engine yet, or run the
            full{" "}
            <Link
              href="/tutorial/gauntlet"
              className="text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)]"
            >
              Gauntlet
            </Link>{" "}
            to stress-test everything before real users arrive.
          </p>
        </section>
      </div>
    </div>
  );
}
