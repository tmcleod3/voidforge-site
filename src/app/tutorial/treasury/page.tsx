import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { SpeechBubble } from "@/components/speech-bubble";
import { ForgeLabsBanner } from "@/components/forge-labs-banner";

export const metadata: Metadata = {
  title: "Manage Treasury",
  description:
    "Connect revenue sources, track spend, and enforce budget safety with VoidForge Treasury.",
};

export default function TreasuryPage() {
  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/tutorial"
          className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-forge-orange)] transition-colors mb-4 inline-block"
        >
          &larr; Tutorial Hub
        </Link>
        <PageHeader title="MANAGE TREASURY" subtitle="Grow Track — Step 3" />

        <ForgeLabsBanner feature="Treasury" />

        <SpeechBubble agent="Dockson" universe="cosmere">
          Every boxing counts. I track revenue from Stripe, Paddle, and Mercury.
          I allocate budgets across ad channels. Steris runs forecasting models
          so we know what we can spend before we spend it. And if anything looks
          wrong, I freeze everything in one command. The books always balance.
        </SpeechBubble>

        <section className="mt-12">
          <h2
            id="what-the-treasury-does"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            WHAT THE TREASURY DOES
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            The Treasury is VoidForge&apos;s financial nervous system. It ingests
            revenue from your payment processors, allocates budgets to growth
            channels, and runs daily reconciliation to make sure every dollar
            is accounted for.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Steris handles forecasting — projecting runway, estimating ROI on
            proposed campaigns, and flagging when spend rates will exceed revenue
            thresholds. You always know where you stand before committing funds.
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">
              <span className="text-[var(--vf-text-muted)]">$ </span>/treasury --report
            </code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Generate a full financial report: revenue by source, spend by
            channel, net position, and Steris&apos;s 30-day forecast. Outputs
            to the build journal for audit trail.
          </p>
        </section>

        <section className="mt-12">
          <h2
            id="connecting-revenue"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            CONNECTING REVENUE
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            The Treasury supports three revenue sources out of the box. Connect
            them one at a time or all at once:
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">
              <span className="text-[var(--vf-text-muted)]">$ </span>/treasury --connect stripe
            </code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Connects your Stripe account via restricted API key. The Treasury
            ingests subscription revenue, one-time payments, and refund data.
            Paddle and Mercury follow the same pattern — just swap the provider
            name.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Once connected, revenue data flows into the budget allocation engine.
            Dockson distributes funds across growth channels based on historical
            ROI, with Steris validating each allocation against her forecast
            models.
          </p>
        </section>

        <section className="mt-12">
          <h2
            id="per-project-isolation"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            PER-PROJECT ISOLATION (V22.0)
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Since v22.0, treasury paths are project-scoped. Each project keeps
            its own financial logs in{" "}
            <code className="text-[var(--vf-electric-blue)]">
              project/cultivation/treasury/
            </code>{" "}
            — spend-log.jsonl, revenue-log.jsonl, budgets.json, and campaigns/.
            No more global collision at{" "}
            <code className="text-[var(--vf-electric-blue)]">
              ~/.voidforge/treasury/
            </code>
            .
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            <strong className="text-[var(--vf-text)]">What stays global:</strong>{" "}
            The credential vault (one Stripe/Mercury account across projects)
            and TOTP 2FA (user-scoped, not project-scoped).
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            <strong className="text-[var(--vf-text)]">Per-project daemon:</strong>{" "}
            Run{" "}
            <code className="text-[var(--vf-electric-blue)]">
              voidforge heartbeat start --project-dir /path
            </code>{" "}
            to configure PID, socket, token, state, and log files for each
            project independently.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            <strong className="text-[var(--vf-text)]">Migration:</strong>{" "}
            Clean-break approach — global archive is preserved, per-project logs
            start fresh. No data is deleted. A treasury migration CLI is planned
            for v22.1.
          </p>
        </section>

        <section className="mt-12">
          <h2
            id="safety-architecture"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            SAFETY ARCHITECTURE
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            The Treasury enforces the same four spend tiers established by
            Cultivation. Every transaction is tagged with the tier that
            authorized it, creating a complete audit trail from authorization
            to reconciliation.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Daily reconciliation runs automatically. Dockson compares actual
            spend against authorized budgets, flags discrepancies, and alerts
            you if any channel exceeds its allocation by more than 5%.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            If something goes wrong — unexpected charges, runaway ad spend,
            compromised credentials — one command locks everything down:
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">
              <span className="text-[var(--vf-text-muted)]">$ </span>/treasury --freeze
            </code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Emergency freeze. Pauses all ad campaigns, revokes spend
            authorization, and generates an incident report. Requires TOTP 2FA
            to unfreeze. The nuclear option — but sometimes you need it.
          </p>
        </section>
      </div>
    </div>
  );
}
