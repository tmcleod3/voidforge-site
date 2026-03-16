import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SpeechBubble } from "@/components/speech-bubble";
import { AccordionItem } from "@/components/accordion";
import { ProphecyTracker } from "@/components/prophecy-tracker";

// Agent name → image path for avatar extraction
const agentAvatars: Record<string, string> = {
  Galadriel: "/images/agents/galadriel.webp",
  Stark: "/images/agents/stark.webp",
  Batman: "/images/agents/batman.webp",
  Kenobi: "/images/agents/kenobi.webp",
  Picard: "/images/agents/picard.webp",
  Kusanagi: "/images/agents/kusanagi.webp",
  Coulson: "/images/agents/coulson.webp",
  Bombadil: "/images/agents/bombadil.webp",
  Chani: "/images/agents/chani.webp",
  Fury: "/images/agents/fury.webp",
  Sisko: "/images/agents/sisko.webp",
  Celebrimbor: "/images/agents/celebrimbor.webp",
  Bashir: "/images/agents/bashir.webp",
  Thanos: "/images/agents/thanos.webp",
  Haku: "/images/agents/subs/haku.webp",
  Gimli: "/images/agents/subs/gimli.webp",
  Éowyn: "/images/agents/subs/éowyn.webp",
};

function extractAgents(text: string): string[] {
  return Object.keys(agentAvatars).filter((name) => text.includes(name));
}

const majorMeta: Record<string, { title: string; quote: string; agent: string }> = {
  "1": {
    title: "The Spark",
    quote: "In the beginning, there was nothing. And then someone typed /build.",
    agent: "Picard",
  },
  "2": {
    title: "The Awakening",
    quote: "The forge learned to listen. Commands, patterns, wizards. It went from a tool to a system.",
    agent: "Stark",
  },
  "3": {
    title: "The Expansion",
    quote: "Seven universes. Thirteen phases. One hundred and seventy agents. The forge became a world.",
    agent: "Fury",
  },
  "4": {
    title: "The Crucible",
    quote: "Reliability. Observability. Imagination. The forge stopped building things and started building itself.",
    agent: "Celebrimbor",
  },
  "5": {
    title: "The Reckoning",
    quote: "The forge learned from its wounds. Every field report made it stronger. Every failure became a lesson.",
    agent: "Bashir",
  },
  "6": {
    title: "The Fortress",
    quote: "The forge built a castle around itself. Walls, gates, watchtowers. Now it defends what it creates.",
    agent: "Kenobi",
  },
  "7": {
    title: "The Enterprise",
    quote: "The forge doesn't just build for one. It builds for many. Roles, permissions, coordination. Scale demands structure.",
    agent: "Picard",
  },
};

function groupByMajor(releases: typeof shipped) {
  const groups: Record<string, typeof shipped> = {};
  for (const r of releases) {
    const major = r.version.match(/^v(\d+)/)?.[1] ?? "0";
    if (!groups[major]) groups[major] = [];
    groups[major].push(r);
  }
  return Object.entries(groups);
}

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
      "Gandalf's setup wizard — browser-based onboarding with PRD generation",
      "Haku's deploy wizard — 6 targets (Docker, AWS VPS, Vercel, Railway, Cloudflare, Static)",
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
    title: "Haku's Last Mile",
    headline: "End-to-end deploy. Every target. No hand-holding required.",
    items: [
      "End-to-end deploy automation for all 6 targets",
      "GitHub integration for CI/CD workflows",
      "SSH deploy with rollback capability",
      "Haku's deploy wizard handles the full lifecycle",
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
  {
    version: "v4.0.0",
    date: "2026-03-14",
    title: "The Reliability Release",
    headline: "The forge hardens. Pre-deploy builds. CI/CD generation. Env validation. The foundation becomes unbreakable.",
    items: [
      "Pre-deploy build step — verify before you ship",
      "CI/CD pipeline generation (GitHub Actions, Railway)",
      "Environment variable validation at build time",
      "Railway API migration for smoother deploys",
      "Credential scoping — keys isolated per deploy target",
    ],
  },
  {
    version: "v4.1.0",
    date: "2026-03-14",
    title: "The Observability Release",
    headline: "The forge can see itself. Deploy logs. Cost estimation. Health monitoring. Sentry integration.",
    items: [
      "Deploy log streaming with real-time output",
      "Cost estimation before provisioning",
      "Health monitoring and uptime checks",
      "Sentry error tracking integration",
    ],
  },
  {
    version: "v4.2.0",
    date: "2026-03-14",
    title: "The DX Release",
    headline: "The developer experience levels up. Prisma types. OpenAPI docs. ERD generation. Database seeding.",
    items: [
      "Prisma type generation for typed database queries",
      "OpenAPI documentation generation",
      "ERD (Entity Relationship Diagram) generation",
      "Integration templates for common services",
      "Database seeding for development environments",
    ],
  },
  {
    version: "v4.4.0",
    date: "2026-03-15",
    title: "The Imagination Release",
    headline: "The forge learns to see. Celebrimbor generates images. Bashir writes post-mortems. The methodology heals itself.",
    items: [
      "/imagine — Celebrimbor's AI image generation from PRD descriptions",
      "/debrief — Bashir's post-mortem analysis and upstream feedback",
      "Celebrimbor (Lord of Eregion) joins as 12th lead agent",
      "Bashir (Julian Bashir, DS9) joins as 13th lead agent",
      "7 new sub-agents across Tolkien and Star Trek",
      "15 total slash commands",
    ],
  },
  {
    version: "v4.5.0",
    date: "2026-03-15",
    title: "The Enchantment Release",
    headline: "The forge learns to delight. Éowyn reviews every micro-moment. Transitions breathe. Empty states invite.",
    items: [
      "Éowyn's Enchantment Review — Step 1.75 in /ux pipeline",
      "Micro-interaction audit: transitions, empty states, loading anticipation",
      "Motion language consistency checks",
      "Brand resonance in the first 5 seconds",
    ],
  },
  {
    version: "v5.5.0",
    date: "2026-03-15",
    title: "The Reckoning",
    headline: "Thanos arrives. The Gauntlet tests everything. Gimli optimizes every image. The forge heals from its own field reports — and then puts itself through hell.",
    items: [
      "/gauntlet — Thanos's Comprehensive Review: 5 rounds, 30+ agents, every domain tested",
      "Thanos (The Mad Titan) joins as 14th lead agent",
      "16 total slash commands",
      "Gimli's image optimization — Step 5.5 in /imagine: resize, WebP, <200KB per image",
      "Complexity-first mission ordering in /campaign — hard features first",
      "Éowyn's Enchantment Review — Step 1.75 in /ux for delight and micro-interactions",
      "Field report integration — Issues #4, #5, #6, #8, #9 implemented upstream",
    ],
  },
  {
    version: "v6.0.0",
    date: "2026-03-15",
    title: "Avengers Tower Multi",
    headline: "The forge gets a command center. The Lobby dashboard. Project registry. Health polling. The forge manages itself.",
    items: [
      "The Lobby dashboard — multi-project management interface",
      "Project registry with health polling and status tracking",
      "Import flow for onboarding existing projects",
      "SSRF protection on all internal service calls",
    ],
  },
  {
    version: "v6.5.0",
    date: "2026-03-15",
    title: "Avengers Tower Remote",
    headline: "The tower gets walls. Five layers of security. TOTP 2FA. Self-deploy. Audit trail. The forge defends itself.",
    items: [
      "5-layer security architecture for remote access",
      "TOTP 2FA authentication (two-password architecture)",
      "Self-deploy capability — the forge provisions its own infrastructure",
      "Comprehensive audit trail for all operations",
      "Gauntlet build-output verification — field report #9 implemented",
    ],
  },
  {
    version: "v6.5.1",
    date: "2026-03-15",
    title: "The Retcon",
    headline: "Names change. The forge stays the same. Gandalf replaces Merlin. Avengers Tower replaces Camelot.",
    items: [
      "Merlin → Gandalf (setup wizards merged into edge case handling)",
      "Camelot → Avengers Tower naming across all references",
      "Great Hall → The Lobby, Round Table → The Penthouse",
      "9 methodology fixes from field reports #4, #5, #6, #8, #9, #10, #13",
    ],
  },
  {
    version: "v7.0.0",
    date: "2026-03-15",
    title: "The Penthouse",
    headline: "The forge gets executive floors. Multi-user RBAC. Per-project ACLs. Linked services. The forge becomes enterprise.",
    items: [
      "Multi-user role-based access control (RBAC)",
      "Per-project access control lists (ACLs)",
      "Linked services — coordinated deploys across projects",
      "Rollback capability for linked service groups",
      "Cost tracker and agent memory across projects",
    ],
  },
  {
    version: "v7.0.1",
    date: "2026-03-15",
    title: "The Resilience Pack",
    headline: "Nine field reports became nine fixes. The forge hardens from its own battle scars.",
    items: [
      "Three-act wizard redesign plan for onboarding",
      "Resilience Pack reclassification of deployment features",
      "9 methodology fixes from downstream field reports",
      "Preview deploy gate added to /devops protocol",
      "Tailwind v4 source() directive documented in troubleshooting",
    ],
  },
];

const future = [
  {
    version: "v8.0",
    title: "The Hive Mind",
    opacity: 1,
    items: [
      "Agent memory — persistent cross-project learnings that accumulate across every build",
      "Pattern evolution — agents propose new code patterns based on repeated solutions",
      "Auto-PRD — generate a PRD from a conversation, not a blank document",
      "Conflict prediction — agents flag architectural conflicts before they happen",
    ],
  },
  {
    version: "v9.0",
    title: "The Multiverse",
    opacity: 0.75,
    items: [
      "Multi-language forge — Python, Go, Rust projects with the same 13-phase protocol",
      "Agent specialization — custom sub-agents trained on your codebase's patterns",
      "Live collaboration — multiple developers running agents simultaneously without conflicts",
      "Visual PRD editor — drag-and-drop interface that generates VoidForge-compatible PRDs",
    ],
  },
  {
    version: "v10.0",
    title: "The Singularity",
    opacity: 0.5,
    items: [
      "Self-improving methodology — agents rewrite their own method docs based on field reports",
      "Autonomous campaigns — the forge reads the PRD and ships without human intervention",
      "Cross-project orchestration — one campaign manages multiple repos as a single product",
      "The forge builds the forge — VoidForge generates its own next version",
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

          <div className="space-y-6 mb-16">
            {groupByMajor(shipped).map(([major, releases]) => (
              <AccordionItem
                key={`v${major}`}
                defaultOpen={major === String(Math.max(...groupByMajor(shipped).map(([m]) => Number(m))))}
                title={
                  <div className="flex items-center gap-3 flex-wrap flex-1">
                    <span className="font-[family-name:var(--font-bangers)] text-2xl tracking-wider text-[var(--vf-forge-yellow)]">
                      V{major}
                    </span>
                    {majorMeta[major] && (
                      <span className="font-[family-name:var(--font-bangers)] text-lg tracking-wider text-[var(--vf-text)]">
                        {majorMeta[major].title}
                      </span>
                    )}
                    <span className="text-xs text-[var(--vf-text-muted)]">
                      {releases.length} release{releases.length !== 1 ? "s" : ""}
                    </span>
                    {majorMeta[major] && agentAvatars[majorMeta[major].agent] && (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={agentAvatars[majorMeta[major].agent]}
                        alt={majorMeta[major].agent}
                        className="w-7 h-7 rounded-full border border-[var(--vf-border)] object-cover ml-auto"
                      />
                    )}
                  </div>
                }
              >
                <div className="pt-3 space-y-3">
                  {majorMeta[major] && (
                    <p className="text-sm italic text-[var(--vf-text-muted)] border-l-2 border-[var(--vf-forge-yellow)]/30 pl-3 mb-4">
                      &ldquo;{majorMeta[major].quote}&rdquo;
                      <span className="text-[var(--vf-forge-yellow)] ml-2 not-italic text-xs">
                        — {majorMeta[major].agent}
                      </span>
                    </p>
                  )}
                  {releases.map((release) => {
                    const allText = [release.title, release.headline, ...release.items].join(" ");
                    const agents = extractAgents(allText);
                    return (
                      <div key={release.version} className="border-l-2 border-[var(--vf-border)] pl-4">
                        <ProphecyTracker version={release.version} />
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="font-[family-name:var(--font-space-mono)] text-[var(--vf-neon-green)] font-bold text-xs">
                            {release.version}
                          </span>
                          <span className="font-[family-name:var(--font-bangers)] text-base tracking-wider text-[var(--vf-text)]">
                            {release.title}
                          </span>
                          {agents.length > 0 && (
                            <div className="flex -space-x-1.5 ml-auto">
                              {agents.slice(0, 4).map((name) => (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img
                                  key={name}
                                  src={agentAvatars[name]}
                                  alt={name}
                                  title={name}
                                  className="w-6 h-6 rounded-full border border-[var(--vf-border)] object-cover"
                                />
                              ))}
                              {agents.length > 4 && (
                                <span className="w-6 h-6 rounded-full bg-[var(--vf-surface-overlay)] border border-[var(--vf-border)] flex items-center justify-center text-[9px] text-[var(--vf-text-muted)]">
                                  +{agents.length - 4}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                        <p className="text-xs text-[var(--vf-text-muted)] italic mb-2">
                          {release.headline}
                        </p>
                        <ul className="space-y-1">
                          {release.items.map((item) => (
                            <li key={item} className="text-xs text-[var(--vf-text-muted)] flex items-start gap-1.5">
                              <span className="text-[var(--vf-neon-green)] mt-0.5 flex-shrink-0">&#10003;</span>
                              <span className="line-through decoration-[var(--vf-text-muted)]/30">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
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
              <div
                key={release.version}
                style={{ opacity: release.opacity }}
                className={release.version === "v4.0" ? "portal-rupture p-1" : ""}
              >
              <ProphecyTracker version={release.version} />
                <AccordionItem
                  title={
                    <div className="flex items-center gap-3">
                      <span className="font-[family-name:var(--font-space-mono)] text-[var(--vf-deep-purple)] font-bold text-sm">
                        {release.version}
                      </span>
                      <span className="font-[family-name:var(--font-bangers)] text-lg tracking-wider text-[var(--vf-text)]">
                        {release.title}
                      </span>
                      {release.version === "v4.0" && (
                        <span className="px-2 py-0.5 text-xs font-bold rounded bg-[var(--vf-deep-purple)]/20 text-[var(--vf-deep-purple)]">
                          MULTIVERSE
                        </span>
                      )}
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
