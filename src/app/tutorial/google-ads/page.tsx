import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { SpeechBubble } from "@/components/speech-bubble";

export const metadata: Metadata = {
  title: "Full Lifecycle: /cultivation + SaaS + Google Ads",
  description:
    "From deployed SaaS to autonomous Google Ads in ~90 minutes. The complete command sequence, phase-by-phase walkthrough, money flow, daemon jobs, and failure modes.",
  alternates: { canonical: "/tutorial/google-ads" },
};

export default function GoogleAdsLifecyclePage() {
  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/tutorial"
          className="text-sm text-[var(--vf-text-muted)] hover:text-[var(--vf-forge-orange)] transition-colors mb-4 inline-block"
        >
          &larr; Tutorial Hub
        </Link>
        <PageHeader
          title="FULL LIFECYCLE"
          subtitle="/cultivation + SaaS Site + Google Ads"
        />

        <SpeechBubble agent="Kelsier" universe="cosmere">
          This is the heist from start to finish. You have a deployed SaaS.
          You want autonomous Google Ads with budget optimization, A/B testing,
          and circuit breakers. Here&apos;s every step, every account you need,
          and every failure mode you&apos;ll hit.
        </SpeechBubble>

        <div className="comic-panel bg-[var(--vf-surface-raised)] p-4 mb-8 border-l-4 border-[var(--vf-forge-orange)]">
          <p className="text-sm text-[var(--vf-text-muted)]">
            <strong className="text-[var(--vf-text)]">Want dedicated landing pages per campaign?</strong>{" "}
            <Link href="/tutorial/google-ads-kongo" className="text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)]">
              Full Lifecycle + Kongo
            </Link>{" "}
            adds 3-layer A/B testing, seed-to-conversion feedback loop, and autonomous page generation.
          </p>
        </div>

        {/* === COMMAND SEQUENCE === */}
        <section className="mt-12">
          <h2
            id="command-sequence"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            THE COMMAND SEQUENCE
          </h2>
          <div className="comic-panel bg-[var(--vf-terminal-bg)] p-6 font-[family-name:var(--font-space-mono)] text-sm space-y-2">
            <p><span className="text-[var(--vf-terminal-green)]">/cultivation install</span> <span className="text-[var(--vf-text-muted)]">&rarr; Vault + Treasury + Revenue + Daemon + Dashboard</span></p>
            <p><span className="text-[var(--vf-terminal-green)]">/grow --setup</span> <span className="text-[var(--vf-text-muted)]">&rarr; Google Ads credentials + billing verification</span></p>
            <p><span className="text-[var(--vf-terminal-green)]">/grow</span> <span className="text-[var(--vf-text-muted)]">&rarr; 6-phase protocol &rarr; campaigns live</span></p>
            <p><span className="text-[var(--vf-forge-orange)]">[daemon takes over]</span> <span className="text-[var(--vf-text-muted)]">&rarr; 24/7 monitoring, A/B testing, kill/scale</span></p>
            <p><span className="text-[var(--vf-terminal-green)]">/treasury --status</span> <span className="text-[var(--vf-text-muted)]">&rarr; Check financials anytime</span></p>
            <p><span className="text-[var(--vf-terminal-green)]">/grow --content</span> <span className="text-[var(--vf-text-muted)]">&rarr; Refresh creatives on demand</span></p>
          </div>
          <p className="text-sm text-[var(--vf-text-muted)] mt-4">
            <strong className="text-[var(--vf-text)]">Wall clock:</strong> ~60-90 minutes active work + 24-48h for Google Ads developer token approval + 1 business day for Google&apos;s ad policy review.
          </p>
        </section>

        {/* === PHASE 0: CULTIVATION === */}
        <section className="mt-16">
          <h2
            id="phase-0"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            PHASE 0: /CULTIVATION INSTALL
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-6">Day-0 infrastructure. Run once. Re-run anytime — it only builds what&apos;s missing.</p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--vf-border)]">
                  <th className="text-left py-2 px-3 text-[var(--vf-forge-orange)] font-[family-name:var(--font-bangers)] tracking-wider">Step</th>
                  <th className="text-left py-2 px-3 text-[var(--vf-forge-orange)] font-[family-name:var(--font-bangers)] tracking-wider">What Happens</th>
                  <th className="text-left py-2 px-3 text-[var(--vf-forge-orange)] font-[family-name:var(--font-bangers)] tracking-wider">Account Needed</th>
                </tr>
              </thead>
              <tbody className="text-[var(--vf-text-muted)]">
                {[
                  { step: "0.1", what: "Wizard gate — pull wizard from upstream", account: "None" },
                  { step: "0.2", what: "Create financial vault (AES-256-GCM) + TOTP 2FA", account: "Authenticator app" },
                  { step: "0.3", what: "Treasury connection — enter monthly budget or connect Mercury/Brex", account: "Mercury API key (optional)" },
                  { step: "0.4", what: "Revenue tracking — connect Stripe read-only key", account: "Stripe restricted API key" },
                  { step: "0.5", what: "Heartbeat daemon starts (launchd/systemd)", account: "None" },
                  { step: "0.6", what: "Wizard server + Danger Room dashboard", account: "None" },
                ].map((row) => (
                  <tr key={row.step} className="border-b border-[var(--vf-border)]/30">
                    <td className="py-2 px-3 font-[family-name:var(--font-space-mono)] text-[var(--vf-electric-blue)]">{row.step}</td>
                    <td className="py-2 px-3">{row.what}</td>
                    <td className="py-2 px-3 text-xs">{row.account}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[var(--vf-text-muted)] mt-3">
            <strong className="text-[var(--vf-text)]">Output:</strong> Vault created, daemon running, dashboard at localhost:3141/danger-room#growth
          </p>
        </section>

        {/* === PHASE 1: GOOGLE ADS SETUP === */}
        <section className="mt-16">
          <h2
            id="phase-1"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            PHASE 1: /GROW --SETUP
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-6">Google Ads credentials and billing verification.</p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--vf-border)]">
                  <th className="text-left py-2 px-3 text-[var(--vf-forge-orange)] font-[family-name:var(--font-bangers)] tracking-wider">Step</th>
                  <th className="text-left py-2 px-3 text-[var(--vf-forge-orange)] font-[family-name:var(--font-bangers)] tracking-wider">What Happens</th>
                  <th className="text-left py-2 px-3 text-[var(--vf-forge-orange)] font-[family-name:var(--font-bangers)] tracking-wider">What You Need</th>
                </tr>
              </thead>
              <tbody className="text-[var(--vf-text-muted)]">
                {[
                  { step: "1.1", what: "Select Google Ads as platform", need: "Google Ads account" },
                  { step: "1.2", what: "OAuth flow — authorize in browser", need: "Google Cloud OAuth client ID + secret" },
                  { step: "1.3", what: "Developer token entry", need: "Token from ads.google.com/aw/apicenter" },
                  { step: "1.4", what: "Test connection (GAQL query)", need: "Customer ID" },
                  { step: "1.5", what: "Billing capability detection", need: "Auto-detected" },
                ].map((row) => (
                  <tr key={row.step} className="border-b border-[var(--vf-border)]/30">
                    <td className="py-2 px-3 font-[family-name:var(--font-space-mono)] text-[var(--vf-electric-blue)]">{row.step}</td>
                    <td className="py-2 px-3">{row.what}</td>
                    <td className="py-2 px-3 text-xs">{row.need}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="comic-panel bg-[var(--vf-surface-raised)] p-4 mt-4 border-l-4 border-[var(--vf-forge-yellow)]">
            <p className="text-sm text-[var(--vf-text-muted)]">
              <strong className="text-[var(--vf-forge-yellow)]">Reality check:</strong> Most SaaS startups get MONITORED_ONLY (credit card billing).
              Monthly invoicing requires Google&apos;s approval. This is fine — campaigns still run, spend is tracked, optimization works. You just pay Google via your card.
            </p>
          </div>
        </section>

        {/* === PHASE 2: GROW PHASES 1-3 === */}
        <section className="mt-16">
          <h2
            id="phase-2"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            PHASE 2: /GROW PHASES 1-3
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-6">Reconnaissance, foundation, and content. Methodology-driven — no wizard needed.</p>

          <div className="space-y-3">
            {[
              { phase: "1 — Reconnaissance", agents: "Kelsier + Vin + Marsh", output: "Growth Brief, analytics audit, competitive scan" },
              { phase: "2 — Foundation", agents: "Navani + Raoden", output: "SEO (meta tags, sitemap, structured data), analytics snippets, CWV optimization" },
              { phase: "3 — Content", agents: "Shallan + Hoid", output: "Landing page copy, blog drafts, social calendar, CTA optimization" },
            ].map((p) => (
              <div key={p.phase} className="comic-panel bg-[var(--vf-surface-raised)] p-4 flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-forge-orange)] min-w-[180px]">{p.phase}</span>
                <span className="text-xs text-[var(--vf-electric-blue)] min-w-[160px]">{p.agents}</span>
                <span className="text-xs text-[var(--vf-text-muted)]">{p.output}</span>
              </div>
            ))}
          </div>

          <SpeechBubble agent="Sisko" universe="star-trek">
            Phase 3.5 is optional: if Kongo is connected, Raoden + Shallan generate a dedicated landing page per campaign
            with 6 A/B variants. If not connected, campaigns use your homepage. Either way works.
          </SpeechBubble>
        </section>

        {/* === PHASE 3: CAMPAIGN BUILD === */}
        <section className="mt-16">
          <h2
            id="phase-3"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            PHASE 3: GOOGLE ADS CAMPAIGN BUILD
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-6">Campaign architecture for B2B SaaS ($500/month budget):</p>

          <div className="space-y-3 mb-6">
            {[
              { name: "Campaign 1: Brand Search", budget: "$5/day", strategy: "Brand terms, Target Impression Share bidding" },
              { name: "Campaign 2: Non-Brand Search", budget: "$8/day", strategy: "Solution + competitor terms, Maximize Clicks → tCPA after 30 conversions" },
              { name: "Campaign 3: Performance Max", budget: "$3/day", strategy: "Broad reach with audience signals, Maximize Conversions" },
            ].map((c) => (
              <div key={c.name} className="comic-panel bg-[var(--vf-surface-raised)] p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-text)]">{c.name}</span>
                  <span className="font-[family-name:var(--font-space-mono)] text-xs text-[var(--vf-neon-green)]">{c.budget}</span>
                </div>
                <p className="text-xs text-[var(--vf-text-muted)]">{c.strategy}</p>
              </div>
            ))}
          </div>

          <div className="comic-panel bg-[var(--vf-surface-raised)] p-4">
            <h3 className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-forge-orange)] mb-2">BUDGET ALLOCATION ($500/MONTH)</h3>
            <ul className="text-xs text-[var(--vf-text-muted)] space-y-1">
              <li>Google Ads: <strong className="text-[var(--vf-text)]">$16/day</strong> across 3 campaigns</li>
              <li>Testing reserve: <strong className="text-[var(--vf-text)]">$20/month</strong></li>
              <li>Daily hard stop: <strong className="text-[var(--vf-text)]">$20/day</strong> (platform-enforced 10% below VoidForge cap)</li>
            </ul>
          </div>
          <p className="text-xs text-[var(--vf-text-muted)] mt-3">
            Creative variants: 3 headlines &times; 2 descriptions = 6 combinations per ad group, A/B tested.
          </p>
        </section>

        {/* === AUTONOMOUS OPERATION === */}
        <section className="mt-16">
          <h2
            id="autonomous"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            AUTONOMOUS OPERATION
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-6">The daemon takes over. Here&apos;s what runs 24/7:</p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--vf-border)]">
                  <th className="text-left py-2 px-3 text-[var(--vf-forge-orange)] font-[family-name:var(--font-bangers)] tracking-wider">Job</th>
                  <th className="text-left py-2 px-3 text-[var(--vf-forge-orange)] font-[family-name:var(--font-bangers)] tracking-wider">Frequency</th>
                  <th className="text-left py-2 px-3 text-[var(--vf-forge-orange)] font-[family-name:var(--font-bangers)] tracking-wider">What It Does</th>
                </tr>
              </thead>
              <tbody className="text-[var(--vf-text-muted)]">
                {[
                  { job: "Token refresh", freq: "Every 48 min", desc: "Google access tokens expire hourly, refresh at 80% TTL" },
                  { job: "Spend check", freq: "Hourly", desc: "GAQL: SELECT metrics.cost_micros FROM campaign" },
                  { job: "Campaign status", freq: "15 min", desc: "Detect disapprovals, limited serving, billing issues" },
                  { job: "A/B evaluation", freq: "Daily", desc: "500+ impressions, 3+ days, 95% confidence → pause loser" },
                  { job: "Kill check", freq: "Daily", desc: "ROAS < 1.0x for 7 days with $50+ spend → soft kill → hard kill" },
                  { job: "Budget rebalance", freq: "Weekly", desc: "Shift spend from low-ROAS to high-ROAS campaigns" },
                  { job: "Reconciliation", freq: "00:00 + 06:00 UTC", desc: "Two-pass: compare spend log vs Google reported spend" },
                  { job: "Growth report", freq: "Weekly", desc: "Full metrics to /logs/growth-report-weekly-*.md" },
                ].map((row) => (
                  <tr key={row.job} className="border-b border-[var(--vf-border)]/30">
                    <td className="py-2 px-3 font-[family-name:var(--font-space-mono)] text-[var(--vf-neon-green)] text-xs">{row.job}</td>
                    <td className="py-2 px-3 text-xs">{row.freq}</td>
                    <td className="py-2 px-3 text-xs">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* === MONEY FLOW === */}
        <section className="mt-16">
          <h2
            id="money-flow"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            MONEY FLOW
          </h2>

          <div className="comic-panel bg-[var(--vf-terminal-bg)] p-6 font-[family-name:var(--font-space-mono)] text-xs text-[var(--vf-terminal-green)] overflow-x-auto whitespace-pre">
{`STRIPE ──(hourly)──> REVENUE LOG ──> BUDGET ENGINE ──> GOOGLE ADS
                                          │                 │
                                          │          hourly spend
                                          │            check
                                          │                 │
                                     SPEND LOG <────────────┘
                                          │
                                   RECONCILIATION
                                  (midnight + 06:00)
                                          │
                                   CIRCUIT BREAKERS
                                   (freeze if drift)`}
          </div>

          <div className="comic-panel bg-[var(--vf-surface-raised)] p-4 mt-4 border-l-4 border-red-500/50">
            <h3 className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-red-400 mb-2">CIRCUIT BREAKERS FIRE WHEN</h3>
            <ul className="text-xs text-[var(--vf-text-muted)] space-y-1">
              <li>ROAS &lt; 1.0x for 7 days</li>
              <li>Daily spend exceeds cap</li>
              <li>Reconciliation mismatch &gt;max($5, 5%) for 2 consecutive days</li>
              <li>Google API unreachable 3 consecutive polls</li>
              <li>Manual <code className="text-[var(--vf-electric-blue)]">/treasury --freeze</code></li>
            </ul>
          </div>
        </section>

        {/* === MINIMUM VIABLE SETUP === */}
        <section className="mt-16">
          <h2
            id="setup"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            MINIMUM VIABLE SETUP
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-neon-green)] mb-2">REQUIRED</h3>
              <div className="space-y-2">
                {[
                  { item: "Google Ads API + OAuth", why: "Campaign management" },
                  { item: "Financial vault + TOTP", why: "Credential storage" },
                  { item: "Heartbeat daemon", why: "Token refresh (Google's 1hr TTL makes this non-optional)" },
                ].map((r) => (
                  <div key={r.item} className="comic-panel bg-[var(--vf-surface-raised)] p-3 flex justify-between items-center">
                    <span className="text-sm text-[var(--vf-text)]">{r.item}</span>
                    <span className="text-xs text-[var(--vf-text-muted)]">{r.why}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-forge-yellow)] mb-2">STRONGLY RECOMMENDED</h3>
              <div className="space-y-2">
                {[
                  { item: "Stripe", loss: "No ROAS — circuit breakers use absolute spend caps only" },
                  { item: "GA4", loss: "No on-site conversion tracking — rely on Google's self-reported data" },
                ].map((r) => (
                  <div key={r.item} className="comic-panel bg-[var(--vf-surface-raised)] p-3 flex justify-between items-center">
                    <span className="text-sm text-[var(--vf-text)]">{r.item}</span>
                    <span className="text-xs text-[var(--vf-text-muted)]">{r.loss}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-text-muted)] mb-2">DEFERRABLE</h3>
              <div className="space-y-2">
                {[
                  { item: "Kongo", when: "When you want dedicated landing pages + A/B page testing" },
                  { item: "Mercury/Brex", when: "When you want automated treasury (vs manual budget entry)" },
                  { item: "Circle", when: "Only if funding ads from stablecoin treasury" },
                ].map((r) => (
                  <div key={r.item} className="comic-panel bg-[var(--vf-surface-raised)] p-3 flex justify-between items-center">
                    <span className="text-sm text-[var(--vf-text)]">{r.item}</span>
                    <span className="text-xs text-[var(--vf-text-muted)]">{r.when}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === FAILURE MODES === */}
        <section className="mt-16">
          <h2
            id="failures"
            tabIndex={-1}
            className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6"
          >
            COMMON FAILURE MODES
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--vf-border)]">
                  <th className="text-left py-2 px-3 text-[var(--vf-forge-orange)] font-[family-name:var(--font-bangers)] tracking-wider">Failure</th>
                  <th className="text-left py-2 px-3 text-[var(--vf-forge-orange)] font-[family-name:var(--font-bangers)] tracking-wider">Fix</th>
                </tr>
              </thead>
              <tbody className="text-[var(--vf-text-muted)]">
                {[
                  { failure: "Google developer token stuck in \"Test\" mode", fix: "Apply for Basic access (24-48h)" },
                  { failure: "OAuth revoked (changed Google password)", fix: "Re-authorize: /grow --setup" },
                  { failure: "Creative rejected by Google policy", fix: "Review disapproval reason in Google Ads UI, adjust copy" },
                  { failure: "Conversion tracking not firing", fix: "Debug with Google Tag Assistant" },
                  { failure: "Reconciliation mismatch alert", fix: "Google reporting lag is normal up to ~3%. Investigate if >5%" },
                  { failure: "Daemon crashed", fix: "launchctl start com.voidforge.heartbeat (macOS)" },
                ].map((row) => (
                  <tr key={row.failure} className="border-b border-[var(--vf-border)]/30">
                    <td className="py-2 px-3 text-xs">{row.failure}</td>
                    <td className="py-2 px-3 text-xs">{row.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <SpeechBubble agent="Dockson" universe="cosmere">
          That&apos;s the full lifecycle — from a deployed SaaS site to autonomous Google Ads
          with budget optimization, A/B testing, and circuit breakers. The heist runs itself.
          You just watch the numbers.
        </SpeechBubble>

        <div className="mt-12 flex flex-wrap gap-3 text-sm">
          <Link
            href="/tutorial"
            className="text-[var(--vf-text-muted)] hover:text-[var(--vf-forge-orange)] transition-colors"
          >
            &larr; Tutorial Hub
          </Link>
          <Link
            href="/commands/cultivation"
            className="text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)] transition-colors"
          >
            /cultivation &rarr;
          </Link>
          <Link
            href="/commands/grow"
            className="text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)] transition-colors"
          >
            /grow &rarr;
          </Link>
          <Link
            href="/commands/treasury"
            className="text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)] transition-colors"
          >
            /treasury &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
