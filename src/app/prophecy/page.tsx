import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SpeechBubble } from "@/components/speech-bubble";
import { AccordionItem } from "@/components/accordion";

export const metadata: Metadata = {
  title: "Prophecy",
  description:
    "The VoidForge roadmap: what's shipped, what's next, and what's coming from the distant stars.",
};

const shipped = [
  {
    version: "v1.0.0",
    date: "2026-03-10",
    title: "The Spark",
    headline: "It begins.",
    items: [
      "6 agent protocols with named characters",
      "150+ named sub-agents across 5 universes",
      "13-phase build protocol with verification gates",
      "Initial methodology framework",
    ],
  },
  {
    version: "v2.0.0",
    date: "2026-03-10",
    title: "The Awakening",
    headline: "Slash commands. Code patterns. PRD frontmatter. The forge learns to listen.",
    items: [
      "Slash command framework (/build, /qa, /security, /ux, /devops, /architect)",
      "Testing protocol with framework mapping",
      "7 code patterns (API route, service, component, middleware, error handling, job queue, multi-tenant)",
      "PRD frontmatter for conditional build phases",
      "Agent tool orchestration and troubleshooting guide",
    ],
  },
  {
    version: "v2.3.0 – v2.8.0",
    date: "2026-03-12",
    title: "The Forge Takes Shape",
    headline: "Interactive wizards. Encrypted vault. Real cloud provisioning. The forge can build AND deploy.",
    items: [
      "Merlin's setup wizard — browser-based onboarding with PRD generation",
      "Strange's deploy wizard — 6 targets (Docker, AWS VPS, Vercel, Railway, Cloudflare, Static)",
      "AES-256-GCM encrypted credential vault",
      "Auto-provisioning: EC2, RDS, ElastiCache, S3",
      "/git command — Coulson's release management with semver and changelog",
      "Renamed project to VoidForge — \"from nothing, everything\"",
    ],
  },
  {
    version: "v3.0.0",
    date: "2026-03-12",
    title: "The Holocron",
    headline: "Three tiers. One methodology. The knowledge crystallizes.",
    items: [
      "The VoidForge Holocron — complete 9-chapter user guide",
      "Three-tier distribution: main (full), scaffold (methodology), core (ultra-light)",
      "Branch sync enforcement — shared files propagate across all tiers",
      "README as system reference document",
    ],
  },
  {
    version: "v3.1.0 – v3.3.0",
    date: "2026-03-13",
    title: "The Last Mile",
    headline: "DNS wiring. Domain registration. 43 security findings resolved. Production-grade.",
    items: [
      "EC2 instance sizing based on workload",
      "Cloudflare DNS wiring with automatic CNAME/A records",
      "Platform domain registration via Cloudflare Registrar API",
      "Async resource polling for RDS/ElastiCache provisioning",
      "43-finding security hardening pass",
      "Fix silent PRD truncation with model-aware max tokens",
    ],
  },
  {
    version: "v3.4.0",
    date: "2026-03-13",
    title: "The Double Pass",
    headline: "Reviews get reviewed. Batman runs it twice. Trust nothing the first time.",
    items: [
      "Double-pass review cycle: find → fix → re-verify",
      "/test command — Batman's test-writing mode",
      "/review command — Picard's code review",
      "3 new sub-agents added to the roster",
      "Parallelized analysis across review agents",
      "1M context window adaptation",
    ],
  },
  {
    version: "v3.5.0 – v3.6.0",
    date: "2026-03-14",
    title: "The Worm Rider",
    headline: "Chani rides the sandworm. Bombadil syncs the forge. The desert awakens.",
    items: [
      "/thumper — Telegram bridge with Gom Jabbar authentication",
      "Dune universe added (7th universe, 9th lead agent)",
      "/void — Bombadil's self-update command",
      "Cross-methodology hardening from Kongo.io lessons",
      "170+ named characters across 7 universes",
    ],
  },
  {
    version: "v3.7.0",
    date: "2026-03-14",
    title: "Fury's Initiative",
    headline: "One command to rule them all. Fury assembles the full pipeline.",
    items: [
      "/assemble — full pipeline: architect → build → 3x review → UX → 2x security → devops → QA → test → crossfire → council",
      "Fury (Nick Fury) joins as 10th lead agent",
      "12 total slash commands",
      "Council vote: all leads must sign off before shipping",
      "Crossfire protocol: agents challenge each other's findings",
    ],
  },
  {
    version: "v3.8.0",
    date: "2026-03-14",
    title: "Strange's Last Mile",
    headline: "End-to-end deploy. Every target. No hand-holding required.",
    items: [
      "End-to-end deploy automation for all 6 targets",
      "GitHub integration for CI/CD workflows",
      "SSH deploy with rollback capability",
      "Strange's deploy wizard handles the full lifecycle",
    ],
  },
  {
    version: "v3.9.0",
    date: "2026-03-14",
    title: "Sisko's War Room",
    headline: "The Emissary arrives. Read the PRD. Pick a mission. Win the war.",
    items: [
      "/campaign — autonomous PRD-to-product mission sequencing",
      "Sisko (Benjamin Sisko, DS9) joins as 11th lead agent",
      "13 total slash commands",
      "Mission-by-mission execution with /assemble per mission",
      "Kira recon, Dax analysis, Odo prerequisites, Sisko command",
    ],
  },
];

const future = [
  {
    version: "v3.10",
    title: "The Watchtower",
    opacity: 1,
    items: [
      "Monitoring bootstrap — Prometheus + Grafana configs, health check endpoints, alerting rules",
      "Log aggregation — CloudWatch (AWS), Logflare (Vercel/Cloudflare), Papertrail (Railway)",
      "Backup automation — pg_dump with S3 upload, retention policy, weekly restore verification",
    ],
  },
  {
    version: "v3.11",
    title: "The Academy",
    opacity: 0.85,
    items: [
      "Interactive tutorial mode — demo PRD that builds a small app with educational commentary per phase",
      "Pattern playground — sandbox to see all 7 patterns across 4 frameworks (Next.js, Express, Django, Rails)",
    ],
  },
  {
    version: "v4.0",
    title: "The Multiverse",
    opacity: 0.6,
    items: [
      "Multi-project orchestration — monorepo with multiple services, each with their own PRD",
      "Rollback dashboard — deployment history with one-click revert",
      "Cost tracker — AWS billing API integration with cost projections",
      "Agent memory — cross-project learnings (\"last time you used Stripe with Next.js, we hit this...\")",
    ],
  },
];

export default function ProphecyPage() {
  return (
    <>
      <PageHeader
        title="THE PROPHECY"
        subtitle="What has been forged. What is being forged. What will be forged."
      />

      <section className="px-4 pb-12">
        <div className="mx-auto max-w-4xl">
          <SpeechBubble agent="Bombadil" universe="tolkien">
            Old Tom Bombadil has watched the forge from the beginning. Twenty-one
            versions in five days. From 150 characters to 170+. From a text file
            to a living methodology. The river keeps flowing, and old Tom keeps
            singing.
          </SpeechBubble>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto max-w-4xl">
          {/* Shipped */}
          <h2 className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-forge-yellow)] mb-6">
            SHIPPED
          </h2>

          <div className="space-y-3 mb-16">
            {shipped.map((release) => (
              <AccordionItem
                key={release.version}
                title={
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-[family-name:var(--font-space-mono)] text-[var(--vf-neon-green)] font-bold text-sm">
                      {release.version}
                    </span>
                    <span className="font-[family-name:var(--font-bangers)] text-lg tracking-wider text-[var(--vf-text)]">
                      {release.title}
                    </span>
                    <span className="px-2 py-0.5 bg-[var(--vf-forge-yellow)]/10 text-[var(--vf-forge-yellow)] text-xs font-bold rounded">
                      SHIPPED
                    </span>
                  </div>
                }
              >
                <div className="pt-3">
                  <p className="text-sm text-[var(--vf-text-muted)] italic mb-3">
                    {release.headline}
                  </p>
                  <p className="text-xs text-[var(--vf-text-muted)] mb-3">
                    {release.date}
                  </p>
                  <ul className="space-y-1.5">
                    {release.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-[var(--vf-text-muted)] flex items-start gap-2"
                      >
                        <span className="text-[var(--vf-neon-green)] mt-0.5 flex-shrink-0">
                          &#10003;
                        </span>
                        <span className="line-through decoration-[var(--vf-text-muted)]/30">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionItem>
            ))}
          </div>

          {/* Future */}
          <h2 className="font-[family-name:var(--font-bangers)] text-3xl tracking-wider text-[var(--vf-deep-purple)] mb-6">
            THE STARS AHEAD
          </h2>

          <div className="space-y-3">
            {future.map((release) => (
              <div key={release.version} style={{ opacity: release.opacity }}>
                <AccordionItem
                  title={
                    <div className="flex items-center gap-3">
                      <span className="font-[family-name:var(--font-space-mono)] text-[var(--vf-deep-purple)] font-bold text-sm">
                        {release.version}
                      </span>
                      <span className="font-[family-name:var(--font-bangers)] text-lg tracking-wider text-[var(--vf-text)]">
                        {release.title}
                      </span>
                    </div>
                  }
                >
                  <div className="pt-3">
                    <ul className="space-y-1.5">
                      {release.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-[var(--vf-text-muted)] flex items-start gap-2"
                        >
                          <span className="text-[var(--vf-deep-purple)] mt-0.5 flex-shrink-0">
                            &#9702;
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionItem>
              </div>
            ))}
          </div>

          <SpeechBubble agent="Picard" universe="star-trek">
            The roadmap is not a promise — it is a heading. We adjust course as
            the mission demands. But the destination is clear: a forge that
            remembers, a forge that learns, and a forge that can build anything
            from nothing.
          </SpeechBubble>
        </div>
      </section>
    </>
  );
}
