import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { SpeechBubble } from "@/components/speech-bubble";

export const metadata: Metadata = {
  title: "Full Lifecycle with Kongo: /cultivation + SaaS + Google Ads + Landing Pages",
  description:
    "Full-funnel optimization: dedicated Kongo landing pages per campaign, 3-layer A/B testing, seed-to-conversion feedback loop, autonomous page generation.",
  alternates: { canonical: "/tutorial/google-ads-kongo" },
};

export default function GoogleAdsKongoPage() {
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
          title="FULL LIFECYCLE + KONGO"
          subtitle="/cultivation + SaaS + Google Ads + Kongo Landing Pages"
        />

        <div className="comic-panel bg-[var(--vf-surface-raised)] p-4 mb-8 border-l-4 border-[var(--vf-electric-blue)]">
          <p className="text-sm text-[var(--vf-text-muted)]">
            <strong className="text-[var(--vf-text)]">Looking for the base guide?</strong>{" "}
            <Link href="/tutorial/google-ads" className="text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)]">
              /cultivation + SaaS + Google Ads
            </Link>{" "}
            covers the lifecycle without Kongo. This guide adds dedicated landing pages, 3-layer A/B testing, and the seed-to-conversion feedback loop.
          </p>
        </div>

        <SpeechBubble agent="Kelsier" universe="cosmere">
          Without Kongo, you optimize ad copy. With Kongo, you optimize the full funnel:
          ad copy &rarr; landing page &rarr; conversion. Every campaign gets its own page.
          Every page gets AI variants. Winners feed the next cycle. The heist runs itself.
        </SpeechBubble>

        {/* === COMMAND SEQUENCE === */}
        <section className="mt-12">
          <h2 id="command-sequence" tabIndex={-1} className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6">
            THE COMMAND SEQUENCE
          </h2>
          <div className="comic-panel bg-[var(--vf-terminal-bg)] p-6 font-[family-name:var(--font-space-mono)] text-sm space-y-2">
            <p><span className="text-[var(--vf-terminal-green)]">/cultivation install</span> <span className="text-[var(--vf-text-muted)]">&rarr; Vault + Treasury + Revenue + <strong className="text-[var(--vf-forge-orange)]">Kongo API key</strong> + Daemon</span></p>
            <p><span className="text-[var(--vf-terminal-green)]">/grow --setup</span> <span className="text-[var(--vf-text-muted)]">&rarr; Google Ads credentials + billing verification</span></p>
            <p><span className="text-[var(--vf-terminal-green)]">/grow</span> <span className="text-[var(--vf-text-muted)]">&rarr; 6-phase protocol:</span></p>
            <p className="pl-4 text-[var(--vf-text-muted)]">Phases 1-3: audit + SEO + content</p>
            <p className="pl-4 text-[var(--vf-text-muted)]"><strong className="text-[var(--vf-forge-orange)]">Phase 3.5: Kongo generates landing pages per campaign</strong></p>
            <p className="pl-4 text-[var(--vf-text-muted)]">Phase 4: Google Ads campaigns built, pointed at Kongo pages</p>
            <p className="pl-4 text-[var(--vf-text-muted)]">Phase 5-6: compliance + launch activation</p>
            <p><span className="text-[var(--vf-forge-orange)]">[daemon takes over]</span> <span className="text-[var(--vf-text-muted)]">&rarr; 24/7: A/B test pages, refresh winners, optimize spend</span></p>
          </div>
        </section>

        {/* === PHASE 0: CULTIVATION WITH KONGO === */}
        <section className="mt-16">
          <h2 id="phase-0" tabIndex={-1} className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6">
            PHASE 0: /CULTIVATION INSTALL
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--vf-border)]">
                  <th className="text-left py-2 px-3 text-[var(--vf-forge-orange)] font-[family-name:var(--font-bangers)] tracking-wider">Step</th>
                  <th className="text-left py-2 px-3 text-[var(--vf-forge-orange)] font-[family-name:var(--font-bangers)] tracking-wider">What Happens</th>
                  <th className="text-left py-2 px-3 text-[var(--vf-forge-orange)] font-[family-name:var(--font-bangers)] tracking-wider">You Provide</th>
                </tr>
              </thead>
              <tbody className="text-[var(--vf-text-muted)]">
                {[
                  { step: "1", what: "Financial vault (AES-256-GCM) + TOTP 2FA", need: "Vault password + authenticator app" },
                  { step: "2", what: "Treasury — monthly budget or Mercury/Brex bank connection", need: "Budget amount or API key" },
                  { step: "3", what: "Revenue tracking — connect Stripe read-only", need: "Stripe restricted API key" },
                  { step: "3b", what: "Kongo connection — enter API key (ke_live_...)", need: "Kongo account at kongo.io + API key" },
                  { step: "4", what: "Heartbeat daemon starts + registers Kongo jobs", need: "Vault password to unlock" },
                  { step: "5", what: "Wizard server + Danger Room dashboard", need: "None" },
                ].map((row) => (
                  <tr key={row.step} className={`border-b border-[var(--vf-border)]/30 ${row.step === "3b" ? "bg-[var(--vf-forge-orange)]/5" : ""}`}>
                    <td className="py-2 px-3 font-[family-name:var(--font-space-mono)] text-[var(--vf-electric-blue)]">{row.step}</td>
                    <td className="py-2 px-3">{row.what}</td>
                    <td className="py-2 px-3 text-xs">{row.need}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="comic-panel bg-[var(--vf-surface-raised)] p-4 mt-4 border-l-4 border-[var(--vf-forge-orange)]">
            <h3 className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-forge-orange)] mb-2">KONGO AT INSTALL</h3>
            <p className="text-xs text-[var(--vf-text-muted)]">
              API key validated via <code className="text-[var(--vf-electric-blue)]">GET /engine/pages?limit=1</code>. On success, stored in the encrypted vault. Three daemon jobs registered:
            </p>
            <ul className="text-xs text-[var(--vf-text-muted)] mt-2 space-y-1">
              <li><strong className="text-[var(--vf-neon-green)]">kongo-signal</strong> (hourly) — polls growth signal for all published campaigns</li>
              <li><strong className="text-[var(--vf-neon-green)]">kongo-seed</strong> (event-driven) — captures winning variant data when A/B tests conclude</li>
              <li><strong className="text-[var(--vf-neon-green)]">kongo-webhook</strong> (event-driven) — receives page lifecycle events from Kongo</li>
            </ul>
          </div>
        </section>

        {/* === PHASE 3.5: KONGO PAGE GENERATION === */}
        <section className="mt-16">
          <h2 id="phase-3-5" tabIndex={-1} className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6">
            PHASE 3.5: KONGO PAGE GENERATION
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-6">
            Every Google Ads campaign gets its own dedicated Kongo landing page — not a generic homepage link.
          </p>

          {/* Seed Extraction */}
          <div className="comic-panel bg-[var(--vf-surface-raised)] p-6 mb-4">
            <h3 className="font-[family-name:var(--font-bangers)] text-lg tracking-wider text-[var(--vf-forge-orange)] mb-3">STEP 3.5.1 — SEED EXTRACTION (RAODEN)</h3>
            <p className="text-sm text-[var(--vf-text-muted)] mb-3">Raoden builds a PrdSeedContent from the PRD + Phase 3 content output:</p>
            <div className="bg-[var(--vf-terminal-bg)] p-4 rounded font-[family-name:var(--font-space-mono)] text-xs text-[var(--vf-terminal-green)] overflow-x-auto">
              <pre>{`PrdSeedContent {
  projectName: "YourSaaS"
  headline: "Ship faster with AI-powered workflows"
  valueProps: ["50% faster deploys", "Zero-config CI", "Team collaboration"]
  ctaText: "Start free trial"
  ctaUrl: "https://yoursaas.com/signup?ref=kongo"
  brandColors: { primary: "#2563eb", accent: "#3b82f6" }
  socialProof: ["Used by 500+ teams", "4.8★ on G2"]
  campaignId: "gads-nonbrand-search"
}`}</pre>
            </div>
          </div>

          {/* Page Generation */}
          <div className="comic-panel bg-[var(--vf-surface-raised)] p-6 mb-4">
            <h3 className="font-[family-name:var(--font-bangers)] text-lg tracking-wider text-[var(--vf-forge-orange)] mb-3">STEP 3.5.2 — PAGE GENERATION (RAODEN)</h3>
            <p className="text-sm text-[var(--vf-text-muted)] mb-3">For each campaign (typically 3), Raoden calls Kongo. Each page is tailored to its campaign&apos;s intent:</p>
            <div className="space-y-2">
              {[
                { campaign: "Brand Search", page: "yoursaas-brand.kongo.io", focus: "Brand story + trust signals" },
                { campaign: "Non-Brand Search", page: "yoursaas-nonbrand.kongo.io", focus: "Problem/solution + competitive differentiators" },
                { campaign: "Performance Max", page: "yoursaas-pmax.kongo.io", focus: "Multiple value props + social proof" },
              ].map((c) => (
                <div key={c.campaign} className="flex items-center gap-3 text-xs">
                  <span className="text-[var(--vf-forge-orange)] font-bold min-w-[140px]">{c.campaign}</span>
                  <span className="text-[var(--vf-electric-blue)] font-[family-name:var(--font-space-mono)] min-w-[220px]">{c.page}</span>
                  <span className="text-[var(--vf-text-muted)]">{c.focus}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Variant Generation */}
          <div className="comic-panel bg-[var(--vf-surface-raised)] p-6 mb-4">
            <h3 className="font-[family-name:var(--font-bangers)] text-lg tracking-wider text-[var(--vf-forge-orange)] mb-3">STEP 3.5.3 — VARIANT GENERATION (SHALLAN)</h3>
            <p className="text-sm text-[var(--vf-text-muted)] mb-2">
              For each page, Shallan generates AI variants: 3 headline &times; 2 CTA = <strong className="text-[var(--vf-text)]">6 testable combinations per page</strong>.
            </p>
            <p className="text-xs text-[var(--vf-text-muted)]">Cost: ~$0.01 per 5 variants (~3 seconds, Claude Sonnet on Kongo&apos;s side)</p>
          </div>

          {/* Campaign Linking */}
          <div className="comic-panel bg-[var(--vf-surface-raised)] p-6 mb-4">
            <h3 className="font-[family-name:var(--font-bangers)] text-lg tracking-wider text-[var(--vf-forge-orange)] mb-3">STEP 3.5.4 — CAMPAIGN LINKING</h3>
            <div className="bg-[var(--vf-terminal-bg)] p-3 rounded font-[family-name:var(--font-space-mono)] text-xs text-[var(--vf-terminal-green)] overflow-x-auto">
              <pre>{`https://yoursaas-nonbrand.kongo.io
  ?utm_source=voidforge
  &utm_medium=paid
  &utm_campaign=gads-nonbrand-search
  &utm_content={kongo_variant_id}
  &utm_term={keyword}`}</pre>
            </div>
            <p className="text-xs text-[var(--vf-text-muted)] mt-2">
              Rotation: <strong className="text-[var(--vf-text)]">equal</strong> split initially &rarr; <strong className="text-[var(--vf-text)]">bandit</strong> (multi-armed bandit auto-optimization) after 500+ impressions per variant.
            </p>
          </div>

          <p className="text-sm text-[var(--vf-text-muted)] mt-4">
            <strong className="text-[var(--vf-forge-orange)]">Gate:</strong> All 3 pages must reach READY status before Phase 4. Blocks with polling if any page is still generating.
          </p>
        </section>

        {/* === WAYNE'S 3-LAYER TESTING === */}
        <section className="mt-16">
          <h2 id="testing" tabIndex={-1} className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6">
            WAYNE&apos;S THREE TEST LAYERS
          </h2>
          <p className="text-[var(--vf-text-muted)] mb-6">Tests run in strict sequence — never simultaneously:</p>
          <div className="space-y-3">
            {[
              { layer: "Layer 1 — Creative", test: "Ad headlines + descriptions", eval: "500+ impressions, 3+ days, 95% confidence", when: "First" },
              { layer: "Layer 2 — Page", test: "Kongo landing page variants", eval: "Growth signal + daemon analytics", when: "After creative winner frozen" },
              { layer: "Layer 3 — Audience", test: "Targeting segments", eval: "Proven creative + page combo", when: "After page winner frozen" },
            ].map((l) => (
              <div key={l.layer} className="comic-panel bg-[var(--vf-surface-raised)] p-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-forge-orange)]">{l.layer}</span>
                  <span className="text-[10px] text-[var(--vf-text-muted)]">{l.when}</span>
                </div>
                <p className="text-xs text-[var(--vf-text-muted)]">Tests: {l.test}. Evaluated: {l.eval}</p>
              </div>
            ))}
          </div>

          <SpeechBubble agent="Dockson" universe="cosmere">
            Running creative and page tests at the same time confounds the signal.
            Freeze the ad winner first. Then test the pages. Then test the audience.
            Each layer builds on the last.
          </SpeechBubble>
        </section>

        {/* === GROWTH SIGNAL === */}
        <section className="mt-16">
          <h2 id="growth-signal" tabIndex={-1} className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6">
            GROWTH SIGNAL COMPUTATION
          </h2>
          <div className="comic-panel bg-[var(--vf-terminal-bg)] p-4 font-[family-name:var(--font-space-mono)] text-xs text-[var(--vf-terminal-green)] mb-4">
            <pre>{`Growth Signal for gads-nonbrand-search:
  Winner: variant-3 (headline: "Ship 2x faster")
  Confidence: 0.97
  CVR delta: +23% over control
  Recommendation: SCALE
  Sample: control=847 views, variant-3=892 views`}</pre>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--vf-border)]">
                  <th className="text-left py-2 px-3 text-[var(--vf-forge-orange)] font-[family-name:var(--font-bangers)] tracking-wider">Confidence</th>
                  <th className="text-left py-2 px-3 text-[var(--vf-forge-orange)] font-[family-name:var(--font-bangers)] tracking-wider">Delta</th>
                  <th className="text-left py-2 px-3 text-[var(--vf-forge-orange)] font-[family-name:var(--font-bangers)] tracking-wider">Views</th>
                  <th className="text-left py-2 px-3 text-[var(--vf-forge-orange)] font-[family-name:var(--font-bangers)] tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="text-[var(--vf-text-muted)]">
                {[
                  { conf: "≥ 0.95", delta: "Positive", views: "200+ total", action: "SCALE — winner found, pause losers", color: "text-[var(--vf-neon-green)]" },
                  { conf: "≥ 0.80", delta: "Positive", views: "200+ total", action: "ITERATE — promising, need more data", color: "text-[var(--vf-forge-yellow)]" },
                  { conf: "≥ 0.95", delta: "Negative/zero", views: "500+ per variant", action: "KILL — this approach isn't working", color: "text-red-400" },
                  { conf: "Below thresholds", delta: "—", views: "—", action: "WAIT — insufficient data", color: "text-[var(--vf-text-muted)]" },
                ].map((row) => (
                  <tr key={row.action} className="border-b border-[var(--vf-border)]/30">
                    <td className="py-2 px-3 text-xs">{row.conf}</td>
                    <td className="py-2 px-3 text-xs">{row.delta}</td>
                    <td className="py-2 px-3 text-xs">{row.views}</td>
                    <td className={`py-2 px-3 text-xs font-bold ${row.color}`}>{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* === WEEKLY FEEDBACK LOOP === */}
        <section className="mt-16">
          <h2 id="feedback-loop" tabIndex={-1} className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6">
            THE WEEKLY FEEDBACK LOOP
          </h2>
          <div className="space-y-2">
            {[
              { day: "MON", what: "Vin pulls Google Ads metrics + Kongo page analytics. Growth signal computed.", color: "text-[var(--vf-electric-blue)]" },
              { day: "TUE", what: "Kelsier reviews signals. Identifies winning copy patterns from best ad+page combos.", color: "text-[var(--vf-forge-orange)]" },
              { day: "WED", what: "Raoden sends NEW seed content to Kongo (informed by winners). Shallan generates fresh variants.", color: "text-[var(--vf-neon-green)]" },
              { day: "THU", what: "New Kongo pages go live. Wax updates campaign destination URLs. Old winners become the new control.", color: "text-[var(--vf-forge-yellow)]" },
              { day: "FRI", what: "Vin monitors first 24h performance. Circuit breakers active. Underperformers flagged.", color: "text-[var(--vf-comic-pink)]" },
            ].map((d) => (
              <div key={d.day} className="comic-panel bg-[var(--vf-surface-raised)] p-3 flex items-start gap-3">
                <span className={`font-[family-name:var(--font-bangers)] text-lg tracking-wider min-w-[50px] ${d.color}`}>{d.day}</span>
                <p className="text-xs text-[var(--vf-text-muted)]">{d.what}</p>
              </div>
            ))}
          </div>

          <div className="comic-panel bg-[var(--vf-surface-raised)] p-4 mt-4 border-l-4 border-[var(--vf-deep-purple, #8b5cf6)]">
            <h3 className="font-[family-name:var(--font-bangers)] text-sm tracking-wider text-[var(--vf-deep-purple, #8b5cf6)] mb-2">PHASE PROGRESSION</h3>
            <ul className="text-xs text-[var(--vf-text-muted)] space-y-1">
              <li><strong className="text-[var(--vf-text)]">Phase A (manual):</strong> You trigger <code className="text-[var(--vf-electric-blue)]">/grow --content</code> to refresh.</li>
              <li><strong className="text-[var(--vf-text)]">Phase B (suggested):</strong> After 10+ successful page generations, daemon suggests refreshes.</li>
              <li><strong className="text-[var(--vf-text)]">Phase C (autonomous):</strong> After 50+ pages with proven lift + <code className="text-[var(--vf-electric-blue)]">/grow --auto-pages</code>, daemon generates and rotates automatically.</li>
            </ul>
          </div>
        </section>

        {/* === FULL DATA FLOW === */}
        <section className="mt-16">
          <h2 id="data-flow" tabIndex={-1} className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6">
            THE FULL DATA FLOW
          </h2>
          <div className="comic-panel bg-[var(--vf-terminal-bg)] p-6 font-[family-name:var(--font-space-mono)] text-[10px] sm:text-xs text-[var(--vf-terminal-green)] overflow-x-auto whitespace-pre">
{`                     CONTENT PIPELINE
PRD ──> Phase 3 ──> PrdSeedContent ──> KONGO API
  (copy)              (seed)            │
                                        │ POST /engine/pages
                                        │ POST /variants/generate
                                        v
                                   KONGO PAGES
                                   (3 pages x 6 variants)
                                        │
                          UTM-linked     │
                              ┌─────────┘
                              v
GOOGLE ADS ←──(dest URLs)──── CAMPAIGN BUILDER
     │                                   │
     │ clicks                            │ campaign CRUD
     v                                   │
KONGO PAGE ──(convert)──> YOUR APP ──> STRIPE ──> TREASURY
     │                                            │
     │ analytics                                  │ revenue
     v                                            v
GROWTH SIGNAL ←──(hourly)── DAEMON ──(hourly)── SPEND LOG
     │                         │
     │ scale/kill/iterate      │ reconciliation
     v                         v
A/B DECISIONS            CIRCUIT BREAKERS
     │
     │ winner declared
     v
KONGO-SEED JOB ──> NEXT CYCLE SEED ──> NEW PAGES ──> ...`}
          </div>
        </section>

        {/* === COMPARISON TABLE === */}
        <section className="mt-16">
          <h2 id="comparison" tabIndex={-1} className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6">
            WHAT KONGO CHANGES
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--vf-border)]">
                  <th className="text-left py-2 px-3 text-[var(--vf-forge-orange)] font-[family-name:var(--font-bangers)] tracking-wider">Aspect</th>
                  <th className="text-left py-2 px-3 text-[var(--vf-text-muted)] font-[family-name:var(--font-bangers)] tracking-wider">Without Kongo</th>
                  <th className="text-left py-2 px-3 text-[var(--vf-neon-green)] font-[family-name:var(--font-bangers)] tracking-wider">With Kongo</th>
                </tr>
              </thead>
              <tbody className="text-[var(--vf-text-muted)]">
                {[
                  { aspect: "Landing pages", without: "Homepage for all campaigns", with: "Dedicated page per campaign, tailored to intent" },
                  { aspect: "A/B testing", without: "Ad copy only", with: "Ad copy + page variants + audience (3 layers)" },
                  { aspect: "Optimization", without: "Optimize clicks and bids", with: "Optimize full funnel: ad → page → conversion" },
                  { aspect: "Page refresh", without: "Manual redesign", with: "AI variants in ~3 seconds" },
                  { aspect: "Cost per variant", without: "Designer time", with: "~$0.01 per 5 variants" },
                  { aspect: "Conversion tracking", without: "Single homepage path", with: "Per-campaign UTM → distinct paths" },
                  { aspect: "Feedback loop", without: "Weekly manual review", with: "Hourly growth signal + weekly auto-refresh" },
                ].map((row) => (
                  <tr key={row.aspect} className="border-b border-[var(--vf-border)]/30">
                    <td className="py-2 px-3 text-xs font-bold text-[var(--vf-text)]">{row.aspect}</td>
                    <td className="py-2 px-3 text-xs">{row.without}</td>
                    <td className="py-2 px-3 text-xs text-[var(--vf-neon-green)]">{row.with}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* === MINIMUM VIABLE === */}
        <section className="mt-16">
          <h2 id="setup" tabIndex={-1} className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-text)] mb-6">
            MINIMUM VIABLE WITH KONGO
          </h2>
          <div className="space-y-2">
            {[
              { item: "Kongo account + API key", why: "Page generation and variant testing" },
              { item: "Google Ads API + OAuth", why: "Campaign management" },
              { item: "Financial vault + TOTP", why: "All credential storage" },
              { item: "Heartbeat daemon", why: "Token refresh + growth signal + seed capture" },
              { item: "Stripe", why: "ROAS — pages are only valuable if you know which convert to revenue" },
            ].map((r) => (
              <div key={r.item} className="comic-panel bg-[var(--vf-surface-raised)] p-3 flex justify-between items-center">
                <span className="text-sm text-[var(--vf-text)]">{r.item}</span>
                <span className="text-xs text-[var(--vf-text-muted)]">{r.why}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--vf-text-muted)] mt-4">
            Total Kongo cost: ~$0.01 per 5 variants. 3-campaign setup with weekly refreshes: <strong className="text-[var(--vf-text)]">~$0.12/month</strong> in variant generation. Landing pages included in your Kongo plan.
          </p>
        </section>

        <SpeechBubble agent="Kelsier" universe="cosmere">
          That&apos;s the full-funnel heist. PRD seed &rarr; Kongo pages &rarr; Google Ads &rarr;
          conversions &rarr; Stripe &rarr; growth signal &rarr; next cycle seed &rarr; new pages.
          The loop runs itself. You watch the Danger Room.
        </SpeechBubble>

        <div className="mt-12 flex flex-wrap gap-3 text-sm">
          <Link href="/tutorial" className="text-[var(--vf-text-muted)] hover:text-[var(--vf-forge-orange)] transition-colors">&larr; Tutorial Hub</Link>
          <Link href="/tutorial/google-ads" className="text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)] transition-colors">Base Guide (no Kongo) &rarr;</Link>
          <Link href="/commands/grow" className="text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)] transition-colors">/grow &rarr;</Link>
          <Link href="/commands/cultivation" className="text-[var(--vf-forge-orange)] hover:text-[var(--vf-forge-yellow)] transition-colors">/cultivation &rarr;</Link>
        </div>
      </div>
    </div>
  );
}
