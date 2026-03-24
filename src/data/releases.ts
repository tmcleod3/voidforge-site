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
  Kelsier: "/images/agents/kelsier.webp",
  Tuvok: "/images/agents/tuvok.webp",
  Dockson: "/images/agents/dockson.webp",
  "Hari Seldon": "/images/agents/seldon.webp",
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
  "9": {
    title: "The Multiverse",
    quote: "One forge. Many languages. Many platforms. The methodology transcends the stack.",
    agent: "Picard",
  },
  "10": {
    title: "The Singularity",
    quote: "The forge watches itself work. Confidence scores. Agent debates. Living PRDs. The methodology becomes self-aware.",
    agent: "Thanos",
  },
  "11": {
    title: "The Consciousness",
    quote: "The forge grows what it builds. The Cosmere awakens. Marketing, treasury, growth — the forge becomes a business.",
    agent: "Kelsier",
  },
  "12": {
    title: "The Scanner",
    quote: "The forge sees everything. Deep Current scans, analyzes, proposes. Autonomous intelligence that thinks about what to build next.",
    agent: "Tuvok",
  },
  "13": {
    title: "The Living Dashboard",
    quote: "The forge watches itself in real-time. Status Line, agent ticker, LAN mode. The dashboard becomes the forge's mirror.",
    agent: "Fury",
  },
  "14": {
    title: "The Day-0 Engine",
    quote: "The forge doesn't just build — it launches businesses. Treasury, revenue, ad platforms, budget, creatives, tracking. Day zero to revenue.",
    agent: "Kelsier",
  },
  "15": {
    title: "The Last Mile",
    quote: "The code is built. The tests pass. But it's not real until it's deployed. The forge closes the gap between 'done' and 'live.'",
    agent: "Kusanagi",
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
  {
    version: "v8.2.0",
    date: "2026-03-16",
    title: "The Evolution",
    headline: "The forge improves itself. Wong promotes lessons to method docs. Custom sub-agents join the roster.",
    items: [
      "Self-improving methodology — Wong analyzes lesson clusters and drafts method doc promotions",
      "Custom sub-agents — user-defined specialists via CUSTOM_AGENTS.md",
      "Lesson promotion pipeline — 3+ same-category lessons auto-draft updates",
    ],
  },
  {
    version: "v8.3.0",
    date: "2026-03-16",
    title: "The Autonomy",
    headline: "The forge runs itself. Git tags before every mission. Rollback on critical findings. Five-mission checkpoints.",
    items: [
      "/campaign --autonomous — supervised autonomy with git tags and rollback",
      "/campaign --continuous — chain campaigns within a major version",
      "Critical-finding rollback to pre-mission tag",
      "5-mission human checkpoints for long campaigns",
    ],
  },
  {
    version: "v9.0.0",
    date: "2026-03-17",
    title: "The Field-Tested Forge",
    headline: "META_WORKFLOW.md. Pattern evolution. /imagine key persistence. The forge documents how to develop itself.",
    items: [
      "META_WORKFLOW.md — how to use VoidForge to develop VoidForge",
      "Pattern evolution data collection — Wong's Phase 12.5",
      "/imagine API key persistence to .env.local (field report #62)",
      "Pattern usage logging across campaigns",
    ],
  },
  {
    version: "v9.1.0",
    date: "2026-03-17",
    title: "The Multi-Language Forge",
    headline: "Python joins the forge. Django DRF and FastAPI deep-dives in all 8 patterns. The methodology speaks a new language.",
    items: [
      "Django DRF + FastAPI code examples in all 8 existing patterns",
      "Python framework detection in Build Protocol Phase 0",
      "Django middleware, Celery tasks, django-tenants patterns",
      "FastAPI dependencies, ARQ workers, SQLAlchemy services",
    ],
  },
  {
    version: "v9.2.0",
    date: "2026-03-17",
    title: "The Mobile Forge",
    headline: "iOS and Android join the forge. React Native patterns. Mobile QA, UX, and security checklists. The forge goes mobile.",
    items: [
      "mobile-screen.tsx — React Native screen pattern with safe area and 4 states",
      "mobile-service.ts — Offline-first data with sync queue and conflict resolution",
      "Mobile QA checklist (orientation, deep links, push, offline, app lifecycle)",
      "Mobile security checklist (cert pinning, secure storage, jailbreak detection)",
      "3 conditional mobile agents (Uhura-Mobile, Samwise-Mobile, Rex-Mobile)",
    ],
  },
  {
    version: "v9.3.0",
    date: "2026-03-17",
    title: "The Game Forge",
    headline: "Games join the forge. Fixed-timestep loops. State machines. Entity Component Systems. The forge plays.",
    items: [
      "game-loop.ts — Fixed-timestep game loop with interpolation and pause/resume",
      "game-state.ts — Hierarchical state machine with save/load serialization",
      "game-entity.ts — Entity Component System with component stores and systems",
      "12-phase game build adaptation in Build Protocol",
      "Game QA checklist (frame rate, input latency, speedrun exploits)",
      "Game UX/game feel checklist (juice, controller support, death feedback)",
      "4 game agents (Spike-GameDev, Eowyn-GameFeel, Deathstroke-Exploit, L-Profiler)",
    ],
  },
  {
    version: "v10.0.0",
    date: "2026-03-17",
    title: "The War Room",
    headline: "Mission control dashboard. Five core panels. WebSocket real-time feed. Agent activity ticker. The forge watches itself work.",
    items: [
      "Mission control dashboard with 5 core panels",
      "WebSocket real-time feed for live agent activity",
      "Agent activity ticker — see every agent launch in real-time",
      "Living PRD — PRD evolves with the build, Troi checks two-way",
      "One Mission One Commit anti-pattern enforcement",
    ],
  },
  {
    version: "v10.0.1",
    date: "2026-03-17",
    title: "The Frontier Features",
    headline: "Confidence scoring. Agent debates. Adversarial PRD. Cross-project memory. Build archaeology. The forge thinks about thinking.",
    items: [
      "Agent confidence scoring (0-100) — low-confidence findings get second opinions",
      "Agent debate protocol — structured 3-exchange disagreement resolution",
      "/prd --challenge — Boromir argues against the PRD before building",
      "Cross-project memory — global lessons persist across all projects",
      "Build archaeology — trace production bugs back through the build protocol",
    ],
  },
  {
    version: "v10.1.0",
    date: "2026-03-17",
    title: "Danger Room Data Feeds",
    headline: "Live WebSocket feeds. Confidence scoring in commands. Agent debates. Living PRD gates.",
    items: ["Danger Room data feeds + feature enforcement", "Live WebSocket integration", "Confidence scoring in all review commands", "Agent debate protocol in findings"],
  },
  {
    version: "v10.2.0",
    date: "2026-03-17",
    title: "Unbuilt Features",
    headline: "Natural Language Deploy. Methodology A/B Testing. Prophecy Visualizer. Ideas documented but not yet built.",
    items: ["Natural Language Deploy concept", "Methodology A/B Testing concept", "Prophecy Visualizer concept"],
  },
  {
    version: "v11.0.0",
    date: "2026-03-18",
    title: "The Consciousness",
    headline: "The Cosmere awakens. Kelsier leads growth. Dockson manages money. 18 agents. 6-phase growth protocol. Financial vault with TOTP 2FA.",
    items: ["8th Universe: Cosmere (Brandon Sanderson) — 18 growth/marketing/treasury agents", "Kelsier joins as 15th lead agent (Growth Strategist)", "Dockson joins as 16th lead agent (Treasury)", "/grow command — 6-phase growth protocol", "/cultivation — installable autonomous growth engine", "Financial vault with TOTP 2FA and safety tiers"],
  },
  {
    version: "v11.1.0",
    date: "2026-03-18",
    title: "The Treasury",
    headline: "Dockson opens the books. Revenue adapters. Heartbeat daemon. Reconciliation engine. The forge manages its own money.",
    items: ["/treasury command — revenue ingest, budget allocation, spend execution", "Heartbeat daemon for automated financial monitoring", "Reconciliation engine — daily spend-to-budget matching", "Revenue adapters for Stripe, Paddle, bank APIs"],
  },
  {
    version: "v11.2.0",
    date: "2026-03-18",
    title: "The Distribution",
    headline: "Six ad platform adapters. Campaign state machine. Spend execution pipeline. Compliance framework.",
    items: ["6 ad platform adapters (Meta, Google, TikTok, LinkedIn, Twitter, Reddit)", "Campaign state machine — create, test, measure, optimize, scale", "Spend execution pipeline with budget enforcement", "Compliance framework — GDPR, CAN-SPAM, platform ToS"],
  },
  {
    version: "v11.3.0",
    date: "2026-03-18",
    title: "The Heartbeat",
    headline: "/portfolio command. Mercury/Brex adapters. Anomaly detection. Encrypted backup. Desktop notifications.",
    items: ["/portfolio command — cross-project financial dashboard", "Mercury and Brex bank adapters", "Anomaly detection in spend patterns", "Encrypted financial backup", "Desktop notifications for budget alerts"],
  },
  {
    version: "v12.0.0",
    date: "2026-03-18",
    title: "Deep Current: The Scanner",
    headline: "Autonomous campaign intelligence. /current command. Site scanner. Situation model. Cold start intake. The forge thinks about what to build next.",
    items: ["Tuvok promoted to 17th lead agent (Deep Current)", "/current command — autonomous campaign intelligence", "Site scanner — crawl and analyze any URL", "Situation model — persistent market understanding", "Cold start intake for new projects"],
  },
  {
    version: "v12.1.0",
    date: "2026-03-18",
    title: "The Analyst",
    headline: "Seven's gap analysis. Campaign proposal generator. Tier 1 advisory mode.",
    items: ["Seven's gap analysis — identify growth opportunities from situation model", "Campaign proposal generator with budget and ROAS estimates", "Tier 1 advisory — suggests but doesn't execute"],
  },
  {
    version: "v12.2.0",
    date: "2026-03-18",
    title: "The Bridge",
    headline: "Chakotay's correlation engine. Prediction tracking. Cross-pipeline data flow.",
    items: ["Chakotay's correlation engine — links actions to outcomes", "Prediction tracking — did the proposal's ROAS estimate hold?", "Cross-pipeline data flow between growth and treasury"],
  },
  {
    version: "v12.3.0",
    date: "2026-03-18",
    title: "The Navigator",
    headline: "Paris's route optimizer. Finds the fastest path to growth targets.",
    items: ["Paris's route optimizer — sequences campaigns for maximum impact", "Budget allocation optimization across channels", "Seasonal and trend-aware scheduling"],
  },
  {
    version: "v12.4.0",
    date: "2026-03-18",
    title: "The Autonomy",
    headline: "Route optimizer. Tier 2/3 autonomy. Circuit breakers. Kill switch. Deploy freeze. The forge runs itself.",
    items: ["Tier 2 autonomy — execute approved campaigns without human confirmation", "Tier 3 autonomy — full autonomous growth with circuit breakers", "Kill switch — /treasury --freeze stops all automated spending", "Deploy freeze — pause all automated actions during incidents"],
  },
  {
    version: "v12.4.1",
    date: "2026-03-18",
    title: "The Tier Gate",
    headline: "The /dangerroom command file arrives. Tier column in Slash Commands. Wizard prerequisite checks on 5 growth commands. Field report #110 closes the loop.",
    items: ["/dangerroom command file — was listed in CLAUDE.md but the command never existed", "Tier column (All/Full) in CLAUDE.md Slash Commands table", "Wizard prerequisite checks on /cultivation, /grow, /treasury, /portfolio, /current", "Build-time env var verification in Phase 13 and Gauntlet smoke test (field report #104)", "Post-push deploy check in Release Manager (field report #104)"],
  },
  {
    version: "v12.5.0",
    date: "2026-03-19",
    title: "The Full Roster",
    headline: "Agent deployment manifests: /review gets 20+ agents, /devops gets 16, /assemble gets 80+ documented. Every command knows its full team.",
    items: ["Agent deployment manifests in /review (4 review teams, 20+ agents)", "Agent deployment manifests in /devops (16 agents across anime universe)", "Agent deployment manifests in /assemble (80+ agents across full initiative)", "Agent deployment manifests in /architect (15-agent bridge crew)", "Agent deployment manifests in /treasury (Dockson's financial team)"],
  },
  {
    version: "v12.6.0",
    date: "2026-03-22",
    title: "The Assessment",
    headline: "/assess command. --assess gauntlet flag. Stub detection. Migration completeness check. Auth-from-day-one. Process manager discipline.",
    items: ["/assess command — Picard's pre-build assessment for existing codebases", "--assess gauntlet flag — Rounds 1-2 only, findings grouped by root cause", "Stub detection pattern in QA — methods returning success without side effects", "Migration completeness check in Phase 1 — flag duplicate implementations", "Auth-from-day-one — API key middleware stub from Phase 1", "Process manager discipline — never kill ports when PM2 owns the process"],
  },
  {
    version: "v12.6.1",
    date: "2026-03-22",
    title: "Learned Rules",
    headline: "Campaign checkpoints extract learned rules. Historical data validation. PRD evolution workflow.",
    items: ["Learned Rules — recurring root causes become persistent pre-flight checks", "Historical data validation for data-dependent systems in Phase 0", "PRD evolution log for iterative /architect --plan refinement"],
  },
  {
    version: "v12.6.2",
    date: "2026-03-22",
    title: "The Roadmap",
    headline: "v13.0 roadmap: LAN mode, Danger Room consolidation, feature proposals from field reports.",
    items: ["LAN mode proposal — private network access for ZeroTier/Tailscale/WireGuard", "Danger Room bug fixes and feature proposals from field reports #127-128"],
  },
  {
    version: "v12.6.3",
    date: "2026-03-22",
    title: "Acceptance Criteria",
    headline: "Acceptance criteria enforcement. Gitignore warning for campaign state. Blitz pre-flight. --adr-only mode.",
    items: ["Campaign state gitignore warning — prevent silent data loss", "Blitz pre-flight checklist for all campaign modes", "--adr-only lightweight architect mode — ADRs only, skip full bridge crew"],
  },
  {
    version: "v12.6.4",
    date: "2026-03-22",
    title: "The Egress Audit",
    headline: "Encryption egress audit. GROUP BY compatibility. v14.0 Day-0 Engine roadmap.",
    items: ["Encryption egress audit — trace all usages of encrypted fields across egress points", "GROUP BY compatibility guidance", "v14.0 Day-0 Engine roadmap planning"],
  },
  {
    version: "v13.0.0",
    date: "2026-03-22",
    title: "The Living Dashboard",
    headline: "Consolidation release. 3-tier UX. LAN mode. Status Line bridge. Agent activity ticker. New dashboard panels.",
    items: ["LAN mode (--lan) — private network access for ZeroTier, Tailscale, WireGuard", "Status Line bridge — connects Claude Code's Status Line API to the Danger Room", "Agent activity ticker — methodology-driven JSONL logging with live WebSocket broadcast", "Tests panel and Git status panel for the Danger Room", "Dashboard config (danger-room.config.json) for project-specific panel settings", "3-tier UX consolidation across the Danger Room interface"],
  },
  {
    version: "v13.1.0",
    date: "2026-03-22",
    title: "Dashboard Polish",
    headline: "Break circular import, CORS/CSP LAN, header context gauge, consolidate private IP.",
    items: ["Fixed circular import in dashboard modules", "CORS/CSP configuration for LAN mode", "Header context gauge for live usage display", "Consolidated private IP validation into shared module"],
  },
  {
    version: "v14.0.0",
    date: "2026-03-22",
    title: "The Day-0 Engine",
    headline: "Cultivation onboarding redesign: treasury, revenue, ad platforms, budget, creatives, tracking, launch. The forge doesn't just build — it launches businesses.",
    items: ["Cultivation Day-0 Engine — complete onboarding rewrite", "Treasury-first flow: connect revenue before spending", "Ad platform OAuth setup integrated into onboarding", "Budget allocation with safety tiers from day zero", "Creative pipeline with template generation", "Tracking verification before launch"],
  },
  {
    version: "v15.0.0",
    date: "2026-03-22",
    title: "The Last Mile",
    headline: "/deploy command. Campaign auto-deploy. /git --deploy. Drift detector. The gap between 'done' and 'live' closes.",
    items: ["/deploy command — Kusanagi's deploy agent with target detection, health check, rollback", "Campaign auto-deploy — Victory Gauntlet can trigger deploy automatically", "/git --deploy flag — version bump + deploy in one command", "Drift detector — alerts when deployed code diverges from committed code"],
  },
  {
    version: "v15.1.0",
    date: "2026-03-23",
    title: "The Hardening",
    headline: "Infinity Gauntlet (47 fixes), vault rate-limit + auto-lock, HMAC key rotation, 91 tests with vitest.",
    items: ["Infinity Gauntlet produced 47 fixes across all domains", "Vault rate-limiting and auto-lock on failed attempts", "HMAC key rotation for authentication", "Migrated to vitest — 91 tests passing", "UX enchantments across dashboard"],
  },
  {
    version: "v15.2.0",
    date: "2026-03-23",
    title: "The Cleanup",
    headline: "Tower-auth split (636→3 modules), SSH security group restriction post-provisioning.",
    items: ["Tower auth module split from 636 lines into 3 focused modules", "SSH security group restriction after provisioning completes", "Code organization improvements"],
  },
  {
    version: "v15.2.1",
    date: "2026-03-23",
    title: "Inbox Triage",
    headline: "4 methodology fixes + 3 lessons from field reports #147-#148.",
    items: ["4 methodology fixes from field report triage", "3 new lessons captured in LESSONS.md", "Continuous improvement from production feedback"],
  },
  {
    version: "v15.3.0",
    date: "2026-03-23",
    title: "The Chronicle",
    headline: "9 public docs updated to v15.2.1 — 76 staleness issues fixed across HOLOCRON, patterns README, and methodology references.",
    items: ["HOLOCRON docs refresh — 76 staleness issues fixed across 9 public documents", "Patterns README updated with current pattern inventory", "Version references aligned across all public-facing documentation"],
  },
];

export const future: FutureRelease[] = [
  {
    version: "v16.0",
    title: "The Convergence",
    opacity: 1,
    items: [
      "Build + Grow + Fund in one command — the forge handles the entire product lifecycle",
      "Cross-project orchestration — one campaign manages multiple repos as a single product",
      "Marketplace of pre-built project templates with growth playbooks",
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
