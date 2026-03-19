import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { SpeechBubble } from "@/components/speech-bubble";

export const metadata: Metadata = {
  title: "Install Cultivation",
  description:
    "Set up ad platforms, analytics, content pipelines, and the financial vault with VoidForge Cultivation.",
};

export default function CultivationPage() {
  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/tutorial"
          className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-forge-orange)] transition-colors mb-4 inline-block"
        >
          &larr; Tutorial Hub
        </Link>
        <PageHeader title="INSTALL CULTIVATION" subtitle="Grow Track — Step 1" />

        <SpeechBubble agent="Kelsier" universe="cosmere">
          Every heist needs infrastructure before the crew moves. Cultivation
          wires up your ad platforms, analytics pipeline, content engine, and
          financial vault — all behind TOTP 2FA so nobody touches the money
          without proving they&apos;re flesh and blood. One command. Full
          scaffold. Let&apos;s go.
        </SpeechBubble>

        <section className="mt-12">
          <h2
            id="what-is-cultivation"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            WHAT IS CULTIVATION
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Cultivation is VoidForge&apos;s growth provisioner. Where{" "}
            <code className="text-[var(--vf-electric-blue)]">/build</code> creates
            your product, Cultivation creates the machinery that makes people find
            it. It connects ad platforms (Meta, Google, TikTok), configures
            analytics pipelines, scaffolds your content calendar, and provisions
            the financial vault that tracks every dollar in and out.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Run it once. It detects what&apos;s already configured and only
            provisions what&apos;s missing. Safe to re-run at any time.
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">
              <span className="text-[var(--vf-text-muted)]">$ </span>/cultivation
            </code>
          </div>
        </section>

        <section className="mt-12">
          <h2
            id="what-gets-installed"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            WHAT GETS INSTALLED
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Cultivation provisions four subsystems. Each one is optional — skip
            what you don&apos;t need — but together they form the complete growth
            stack:
          </p>
          <ul className="space-y-3 text-[var(--vf-text-muted)] mb-6">
            <li className="flex items-start gap-3">
              <span className="text-[var(--vf-neon-green)] mt-1">&#10003;</span>
              <span>
                <strong className="text-[var(--vf-text)]">Ad Platform Connections</strong>{" "}
                — OAuth links to Meta Ads, Google Ads, and TikTok Ads. Credentials
                stored in the encrypted vault.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--vf-neon-green)] mt-1">&#10003;</span>
              <span>
                <strong className="text-[var(--vf-text)]">Analytics Setup</strong>{" "}
                — Event tracking, conversion funnels, and attribution models wired
                to your existing analytics provider.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--vf-neon-green)] mt-1">&#10003;</span>
              <span>
                <strong className="text-[var(--vf-text)]">Content Pipeline</strong>{" "}
                — Scaffolds the editorial calendar, content templates, and
                distribution channels for organic growth.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--vf-neon-green)] mt-1">&#10003;</span>
              <span>
                <strong className="text-[var(--vf-text)]">Financial Vault</strong>{" "}
                — Encrypted spend tracking, budget allocation, and revenue
                reconciliation. Protected by TOTP 2FA.
              </span>
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2
            id="safety-tiers"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            SAFETY TIERS
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            No agent spends real money without authorization. Cultivation
            enforces four safety tiers for spend authorization, each requiring
            escalating proof of human intent:
          </p>
          <div className="space-y-3 text-[var(--vf-text-muted)]">
            <p>
              <strong className="text-[var(--vf-forge-orange)]">Tier 1 — Observe:</strong>{" "}
              Read-only. Agents can analyze data and draft campaigns but cannot
              commit spend. No authentication required.
            </p>
            <p>
              <strong className="text-[var(--vf-forge-orange)]">Tier 2 — Suggest:</strong>{" "}
              Agents propose budgets and ad creatives. Human approves each action
              individually via CLI prompt.
            </p>
            <p>
              <strong className="text-[var(--vf-forge-orange)]">Tier 3 — Execute:</strong>{" "}
              Agents can spend within pre-approved daily limits. Requires TOTP 2FA
              to unlock. Auto-locks after 24 hours.
            </p>
            <p>
              <strong className="text-[var(--vf-forge-orange)]">Tier 4 — Autonomous:</strong>{" "}
              Full autonomy within budget caps. Requires TOTP 2FA plus explicit
              written confirmation. Reserved for seasoned operators who trust the
              system.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
