import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { SpeechBubble } from "@/components/speech-bubble";
import { ForgeLabsBanner } from "@/components/forge-labs-banner";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Run Growth",
  description:
    "Execute the 6-phase growth protocol with VoidForge /grow — SEO, ads, social, outreach, and continuous optimization.",
};

export default function GrowPage() {
  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/tutorial"
          className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-forge-orange)] transition-colors mb-4 inline-block"
        >
          &larr; Tutorial Hub
        </Link>
        <PageHeader title="RUN GROWTH" subtitle="Grow Track — Step 2" />

        <ForgeLabsBanner feature="Growth" />

        <SpeechBubble agent="Kelsier" universe="cosmere">
          The crew is assembled. Vin reads the data. Navani optimizes every
          page. Wax handles the ad buys. Lift works the social channels.
          Sarene opens doors with outreach. I coordinate. You just pick the
          flags and we handle the rest.
        </SpeechBubble>

        <section className="mt-12">
          <h2
            id="the-6-phase-protocol"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            THE 6-PHASE PROTOCOL
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Every <code className="text-[var(--vf-electric-blue)]">/grow</code>{" "}
            run follows six phases. Each phase is owned by a specialist agent:
          </p>
          <ol className="space-y-3 text-[var(--vf-text-muted)] mb-6 list-decimal list-inside">
            <li>
              <strong className="text-[var(--vf-text)]">Audit</strong> —
              Kelsier scans the current state: traffic, spend, conversion rates,
              and competitive positioning.
            </li>
            <li>
              <strong className="text-[var(--vf-text)]">Analytics</strong> —
              Vin deep-dives the numbers. Attribution models, funnel drop-offs,
              cohort analysis.
            </li>
            <li>
              <strong className="text-[var(--vf-text)]">SEO</strong> —
              Navani audits technical SEO, content gaps, keyword opportunities,
              and backlink profiles.
            </li>
            <li>
              <strong className="text-[var(--vf-text)]">Ads</strong> —
              Wax manages paid campaigns across Meta, Google, and TikTok.
              Creative testing, bid optimization, budget allocation.
            </li>
            <li>
              <strong className="text-[var(--vf-text)]">Social</strong> —
              Lift handles organic social: content scheduling, engagement
              tracking, community growth.
            </li>
            <li>
              <strong className="text-[var(--vf-text)]">Outreach</strong> —
              Sarene runs partnership outreach, PR pitches, and influencer
              coordination.
            </li>
          </ol>
        </section>

        <ScrollReveal delay={0.06}>
        <section className="mt-12">
          <h2
            id="key-flags"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            KEY FLAGS
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Run the full protocol or target specific phases with flags. Mix and
            match as needed:
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">
              <span className="text-[var(--vf-text-muted)]">$ </span>/grow --audit
            </code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Run only the audit phase. Great for a quick health check before
            committing spend.
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">
              <span className="text-[var(--vf-text-muted)]">$ </span>/grow --ads meta --budget &quot;50&quot;
            </code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Launch a Meta Ads campaign with a $50 daily budget. Wax handles
            creative generation, audience targeting, and bid strategy. Requires
            Tier 3+ safety authorization from Cultivation.
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">
              <span className="text-[var(--vf-text-muted)]">$ </span>/grow --seo
            </code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Run Navani&apos;s SEO audit only — technical issues, content gaps,
            keyword opportunities. Zero spend, pure optimization.
          </p>
          <div className="crt-terminal !p-4 mb-6">
            <code className="text-sm">
              <span className="text-[var(--vf-text-muted)]">$ </span>/grow --continuous
            </code>
          </div>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Enable continuous growth mode. The crew runs daily cycles: audit at
            dawn, optimize through the day, report at dusk. Keeps running until
            you stop it or budget caps are hit.
          </p>
        </section>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
        <section className="mt-12">
          <h2
            id="the-growth-loop"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            THE GROWTH LOOP
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-4">
            Growth is not a one-shot command. It&apos;s a loop: audit, execute,
            measure, adjust. Each cycle feeds data back to Vin&apos;s analytics
            engine, which sharpens targeting for the next run.
          </p>
          <p className="text-[var(--vf-text-muted)] mb-4">
            The <code className="text-[var(--vf-electric-blue)]">--continuous</code>{" "}
            flag automates this loop, but you can run individual cycles manually
            to stay hands-on. Either way, every decision is logged, every dollar
            is tracked, and the Treasury reconciles it all at the end of the day.
          </p>
        </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
