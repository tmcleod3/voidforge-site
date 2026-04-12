import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { SpeechBubble } from "@/components/speech-bubble";
import { ForgeLabsBanner } from "@/components/forge-labs-banner";
import { ScrollReveal } from "@/components/scroll-reveal";

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

        <ForgeLabsBanner feature="Cultivation" />

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
            it. It provisions the financial vault, connects revenue tracking,
            scaffolds ad platforms, and wires up the growth dashboard — all
            from day zero, before your first customer.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            The Day-0 Engine means you don&apos;t wait until launch to
            set up growth infrastructure. Treasury first, revenue tracking
            second, ad platforms when you&apos;re ready. Run it once — it
            detects what&apos;s already configured and only provisions
            what&apos;s missing. Safe to re-run at any time.
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">
              /cultivation
            </code>
          </div>
        </section>

        <ScrollReveal delay={0.06}>
        <section className="mt-12">
          <h2
            id="what-gets-installed"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            WHAT GETS INSTALLED
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            The Day-0 onboarding walks you through setup in order of
            importance — treasury first, because you need to track money
            before you spend it:
          </p>
          <ul className="space-y-3 text-[var(--vf-text-muted)] mb-6">
            <li className="flex items-start gap-3">
              <span className="text-[var(--vf-forge-orange)] mt-1 font-bold">1</span>
              <span>
                <strong className="text-[var(--vf-text)]">Financial Foundation</strong>{" "}
                — Encrypted vault with TOTP 2FA, spending limits, circuit
                breakers. Connect Mercury, Brex, or enter a manual budget.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--vf-forge-orange)] mt-1 font-bold">2</span>
              <span>
                <strong className="text-[var(--vf-text)]">Revenue Tracking</strong>{" "}
                — Auto-detects Stripe. Connect for revenue tracking from day
                zero, or track manually until your first payment arrives.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--vf-forge-orange)] mt-1 font-bold">3</span>
              <span>
                <strong className="text-[var(--vf-text)]">Ad Platforms</strong>{" "}
                — OAuth links to Meta Ads, Google Ads, TikTok Ads. Deferred
                to{" "}
                <code className="text-[var(--vf-electric-blue)]">/grow --setup</code>{" "}
                — connect when you&apos;re ready to spend.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[var(--vf-forge-orange)] mt-1 font-bold">4</span>
              <span>
                <strong className="text-[var(--vf-text)]">Heartbeat Daemon</strong>{" "}
                — Background service for token refresh, spend monitoring,
                reconciliation, and A/B test evaluation. Runs 24/7.
              </span>
            </li>
          </ul>
        </section>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
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
        </ScrollReveal>

        <ScrollReveal delay={0.18}>
        <section className="mt-12">
          <h2
            id="per-project-scoping"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            PER-PROJECT SCOPING (V22.0)
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Cultivation data is project-scoped. Each project keeps
            its own{" "}
            <code className="text-[var(--vf-electric-blue)]">
              cultivation/treasury/
            </code>{" "}
            directory with spend logs, revenue logs, budgets, and campaign data.
            The heartbeat daemon runs per-project with{" "}
            <code className="text-[var(--vf-electric-blue)]">
              voidforge heartbeat start --project-dir /path
            </code>
            .
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Credentials (Stripe, Mercury, ad platform API keys) remain in the
            global vault — they&apos;re user-scoped, not project-scoped. TOTP
            2FA is also global. Only financial transaction logs and campaign
            state are per-project.
          </p>
        </section>
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
            Cultivation is the foundation. Now run the growth campaigns. See{" "}
            <Link
              href="/tutorial/grow"
              className="text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)]"
            >
              Growth (Step 2)
            </Link>{" "}
            for SEO, ads, social, and outreach. Track the money with{" "}
            <Link
              href="/tutorial/treasury"
              className="text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)]"
            >
              Treasury (Step 3)
            </Link>
            . Watch it all in the{" "}
            <Link
              href="/tutorial/dangerroom"
              className="text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)]"
            >
              Danger Room (Step 4)
            </Link>
            .
          </p>
        </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
