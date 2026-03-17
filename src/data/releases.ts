export interface Release {
  version: string;
  date: string;
  title: string;
  headline: string;
  items: string[];
}

export interface MajorEra {
  title: string;
  quote: string;
  agent: string;
}

export interface FutureRelease {
  version: string;
  title: string;
  opacity: number;
  items: string[];
}

export const agentAvatars: Record<string, string> = {
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

export function extractAgents(text: string): string[] {
  return Object.keys(agentAvatars).filter((name) => text.includes(name));
}

export const majorEras: Record<string, MajorEra> = {
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
  "8": {
    title: "The Hive Mind",
    quote: "The forge remembers. Every lesson, every failure, every triumph. It reads its own history and fights smarter the next time.",
    agent: "Sisko",
  },
};

export const shipped: Release[] = [
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
  {
    version: "v7.1.0",
    date: "2026-03-15",
    title: "The Redesign",
    headline: "The wizard learns a new dance. Three acts. One flow. Simple and advanced become one.",
    items: [
      "Three-act wizard flow replaces simple/advanced split",
      "Operations menu for post-deploy management",
      "Resilience Pack — deploy features reclassified as core infrastructure",
      "Simplified onboarding experience",
    ],
  },
  {
    version: "v7.2.0",
    date: "2026-03-15",
    title: "The Gauntlet Forging",
    headline: "Thanos forges the Gauntlet from battle scars. 31 code fixes. 11 methodology fixes. 7 enchantments. WCAG AA. The forge earns its armor.",
    items: [
      "31 code fixes from Gauntlet review findings",
      "11 methodology fixes across agent protocols",
      "7 enchantments — micro-interactions, transitions, delight moments",
      "WCAG AA compliance across all interactive elements",
      "v8.0+ roadmap defined (The Hive Mind, The Multiverse, The Singularity)",
    ],
  },
  {
    version: "v7.2.1",
    date: "2026-03-15",
    title: "The Terminal Fix",
    headline: "Node.js v24 broke the terminal. One dependency update. Crisis averted.",
    items: [
      "Fix Avengers Tower terminal crash on Node.js v24",
      "node-pty upgraded from 1.1.0 to 1.2.0-beta.12",
    ],
  },
  {
    version: "v7.3.0",
    date: "2026-03-16",
    title: "The Tower Overhaul",
    headline: "Avengers Tower gets a renovation. WebSocket library. Vault unlock. Build-state in the Lobby. Sisko gets blitz mode.",
    items: [
      "WebSocket library migration (ws) for Avengers Tower",
      "Vault unlock flow improvements",
      "Build-state visibility in The Lobby dashboard",
      "/campaign --blitz — full autonomous mode: skip confirmations, auto-continue between missions",
      "IPv6 connectivity fix for remote access",
    ],
  },
  {
    version: "v7.3.1",
    date: "2026-03-16",
    title: "The Blitz Refinement",
    headline: "Blitz learns wisdom. Autonomous doesn't mean reckless. Full reviews stay. Auto-debrief captures every lesson.",
    items: [
      "--blitz no longer implies --fast — full review quality preserved in autonomous mode",
      "--blitz and --fast are now independent flags (combine explicitly for speed + autonomy)",
      "Auto-debrief after each blitz mission (/debrief --submit) — learnings captured while context is fresh",
    ],
  },
  {
    version: "v7.4.0",
    date: "2026-03-16",
    title: "The Field Hardening",
    headline: "Twenty methodology fixes from the field. Hawkeye gets smoke tests. Éowyn gets enchantments in the Gauntlet. The forge hardens from battle.",
    items: [
      "Hawkeye's runtime smoke test added to /assemble (Phase 2.5)",
      "Éowyn's enchantment emphasis via --ux-extra in /gauntlet",
      "Troi's PRD compliance check in the Council",
      "20 methodology fixes across 7 agent protocols",
    ],
  },
  {
    version: "v7.4.1",
    date: "2026-03-16",
    title: "The Upstream Fixes",
    headline: "Fifteen fixes from GitHub issues #31–#34. The forge listens to its field reports and strengthens.",
    items: [
      "15 fixes from upstream field reports (issues #31–#34)",
      "Gauntlet round structure refined",
      "Campaign mission ordering improvements",
      "Sub-agent protocol hardening",
    ],
  },
  {
    version: "v7.5.0",
    date: "2026-03-16",
    title: "Thumper Command Center",
    headline: "Chani upgrades the thumper. Inline keyboard. Bot personalization. Water-rings fix. The desert gets a command center.",
    items: [
      "Telegram inline keyboard grid for all 15 VoidForge commands",
      "Bot personalization — name, description, command menu, DALL-E avatar",
      "Claude-native /thumper setup flow — no manual BotFather steps",
      "Water-rings stop hook for turn completion notifications",
      "Command-doc sync check (Friday) in /git releases",
    ],
  },
  {
    version: "v7.5.1",
    date: "2026-03-16",
    title: "The Awareness Pack",
    headline: "Nineteen fixes from five field reports. Vault awareness. Anonymity invariant. WCAG contrast. The forge sees deeper.",
    items: [
      "19 fixes from field reports #36–#40",
      "Vault awareness in /campaign and /build pre-flight",
      "Anonymity invariant check in security audit",
      "Deployment verification in /assemble (field report #37)",
      "WCAG contrast verification protocol for Samwise",
    ],
  },
  {
    version: "v7.5.2",
    date: "2026-03-16",
    title: "The Credentials Flow",
    headline: "The Holocron documents the vault. API keys, cloud tokens, local dev — the full credentials lifecycle.",
    items: [
      "HOLOCRON credentials flow documentation",
      "v7.6 Vault Pipeline roadmap defined",
    ],
  },
  {
    version: "v7.5.3",
    date: "2026-03-16",
    title: "The Triage Pack",
    headline: "Vault key naming. Outbound URL safety. Accordion a11y. The forge triages its inbox.",
    items: [
      "Triage of field reports #42–#44",
      "Vault key naming conventions documented",
      "Outbound URL safety checks in security audit",
      "Accordion a11y pattern added to component reference",
    ],
  },
  {
    version: "v7.6.0",
    date: "2026-03-16",
    title: "The Vault Pipeline",
    headline: "Deploy --env-only. Standalone vault reader. PTY cleanup. The forge manages its own credentials.",
    items: [
      "deploy --env-only — write vault credentials to .env without full provisioning",
      "Standalone vault reader for credential extraction",
      "PTY cleanup and process management improvements",
      "engines field added to package.json (>=20.11.0)",
    ],
  },
  {
    version: "v7.7.0",
    date: "2026-03-16",
    title: "The Housekeeping",
    headline: "Architecture doc refresh. Server auto-restart detection. COMPATIBILITY.md. The forge tidies up.",
    items: [
      "Architecture documentation refresh",
      "Server auto-restart detection in smoke tests",
      "COMPATIBILITY.md for Node.js version requirements",
      "Context pressure fix — actual usage checks, not heuristics",
    ],
  },
  {
    version: "v8.0.0",
    date: "2026-03-16",
    title: "The Hive Mind",
    headline: "The forge remembers. Agent Memory reads lessons. Conflict Prediction catches mistakes early. /prd generates PRDs from conversation.",
    items: [
      "Agent Memory — active LESSONS.md read-back in /qa, /review, /security, /ux",
      "Conflict Prediction — Phase 0.5 scans PRD for 8 structural contradictions",
      "/prd command — Sisko's 5-act structured interview to generate complete PRDs",
      "17 total slash commands",
    ],
  },
  {
    version: "v8.0.1",
    date: "2026-03-16",
    title: "Victory Gauntlet Hardening",
    headline: "Sixteen fixes. Quality Reduction Anti-Pattern. The Gauntlet is never abbreviated.",
    items: [
      "16 fixes from field reports #46–#53",
      "Quality Reduction Anti-Pattern — agents can never reduce quality based on context pressure",
      "engines >=20.11.0 enforced across all tiers",
      "9 methodology fixes across agent protocols",
    ],
  },
  {
    version: "v8.1.0",
    date: "2026-03-16",
    title: "The Deep Roster Phase 1",
    headline: "Ten new agents activated. Troi reads the PRD. Celeborn governs the design system. The roster deepens.",
    items: [
      "Troi (PRD compliance verification in Phase 0 and Council)",
      "Padmé (functional verification in build gates)",
      "Celeborn (design system governance in /ux)",
      "Worf (security implications in /architect)",
      "Riker (ADR review in /architect)",
      "Torres (performance architecture in /architect)",
      "Cyborg (integration testing in /qa)",
      "Raven (deep analysis bugs in /qa)",
      "Wonder Woman (code-vs-behavior truth detection in /qa)",
      "Valkyrie (disaster recovery in /devops)",
    ],
  },
  {
    version: "v8.1.1",
    date: "2026-03-16",
    title: "The Deep Roster Phase 2",
    headline: "Forty more agents join the forge. Every universe gets reinforcements. 220+ named characters.",
    items: [
      "Extended DC Roster — Flash, Batgirl, Green Arrow, Huntress, Aquaman, Superman, Green Lantern, Martian Manhunter",
      "Extended Star Wars Roster — Qui-Gon, Han, Anakin, Bo-Katan, Din Djarin, Bail Organa, Cassian, Sabine",
      "Extended Tolkien Roster — Aragorn, Faramir, Pippin, Boromir, Haldir, Glorfindel, Frodo, Merry",
      "Extended Anime Roster — Vegeta, Trunks, Mikasa, Erwin, Mustang, Olivier, Hughes, Calcifer, Duo",
      "Extended Marvel Roster — T'Challa, Wanda, Shuri, Rocket, Okoye, Falcon, Bucky",
      "Extended Star Trek Roster — Janeway, Tuvok, Crusher, Archer, Kim, Pike",
    ],
  },
  {
    version: "v8.1.2",
    date: "2026-03-16",
    title: "Deep Roster Command Wiring",
    headline: "Every new agent wired into their commands. The deep roster is operational.",
    items: [
      "Extended agents integrated into /qa, /security, /ux, /architect commands",
      "Extended agents integrated into /gauntlet, /assemble, /campaign pipelines",
      "Phase 0.5 First Strike added to /security (Han + Cassian)",
      "Security re-verification expanded to Maul + Anakin + Din Djarin",
    ],
  },
];

export const future: FutureRelease[] = [
  {
    version: "v9.0",
    title: "The Multiverse",
    opacity: 1,
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
    opacity: 0.75,
    items: [
      "Self-improving methodology — agents rewrite their own method docs based on field reports",
      "Autonomous campaigns — the forge reads the PRD and ships without human intervention",
      "Cross-project orchestration — one campaign manages multiple repos as a single product",
      "The forge builds the forge — VoidForge generates its own next version",
    ],
  },
];

/** Group releases by major version number */
export function groupByMajor(releases: Release[]) {
  const groups: Record<string, Release[]> = {};
  for (const r of releases) {
    const major = r.version.match(/^v(\d+)/)?.[1] ?? "0";
    if (!groups[major]) groups[major] = [];
    groups[major].push(r);
  }
  return Object.entries(groups);
}

/** Group releases by minor version within a major — patches (.1, .2) nest under their .0 */
export function groupByMinor(releases: Release[]) {
  const groups: Record<string, Release[]> = {};
  for (const r of releases) {
    const match = r.version.match(/^v(\d+)\.(\d+)/);
    if (!match) {
      // Range versions like "v2.3.0 – v2.8.0" — use as-is
      const key = r.version;
      groups[key] = [r];
      continue;
    }
    const minorKey = `${match[1]}.${match[2]}`;
    if (!groups[minorKey]) groups[minorKey] = [];
    groups[minorKey].push(r);
  }
  return Object.entries(groups);
}

/** Check if a version is a patch (x.y.z where z > 0) */
export function isPatch(version: string): boolean {
  const match = version.match(/^v\d+\.\d+\.(\d+)/);
  return match ? Number(match[1]) > 0 : false;
}
