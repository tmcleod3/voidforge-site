export interface SearchEntry {
  title: string;
  description: string;
  path: string;
  category: string;
}

export const searchIndex: SearchEntry[] = [
  // Tutorial
  { title: "Tutorial", description: "Step-by-step guide to using VoidForge", path: "/tutorial", category: "Learn" },
  { title: "Install", description: "Install VoidForge: prerequisites, three tiers, and troubleshooting", path: "/tutorial/install", category: "Learn" },
  { title: "First Build", description: "Write your first PRD, run /build, and watch the 13-phase protocol", path: "/tutorial/first-build", category: "Learn" },
  { title: "Deploy", description: "Deploy your VoidForge app to any of 6 targets", path: "/tutorial/deploy", category: "Learn" },

  // Protocol
  { title: "Protocol", description: "The 13-phase build protocol explained phase-by-phase", path: "/protocol", category: "Protocol" },
  { title: "Orient", description: "Phase 0: Read the PRD, assess the project, create the plan", path: "/protocol/orient", category: "Protocol" },
  { title: "Scaffold", description: "Phase 1: Project setup, dependencies, configuration", path: "/protocol/scaffold", category: "Protocol" },
  { title: "Infrastructure", description: "Phase 2: Database, cache, queues, external services", path: "/protocol/infrastructure", category: "Protocol" },
  { title: "Auth", description: "Phase 3: Authentication, sessions, authorization", path: "/protocol/auth", category: "Protocol" },
  { title: "Core Feature", description: "Phase 4: Build the primary feature", path: "/protocol/core-feature", category: "Protocol" },
  { title: "Supporting Features", description: "Phase 5: Secondary features and integrations", path: "/protocol/supporting", category: "Protocol" },
  { title: "Integrations", description: "Phase 6: Third-party service connections", path: "/protocol/integrations", category: "Protocol" },
  { title: "Admin", description: "Phase 7: Admin dashboard and management tools", path: "/protocol/admin", category: "Protocol" },
  { title: "Marketing", description: "Phase 8: Landing page, SEO, analytics", path: "/protocol/marketing", category: "Protocol" },
  { title: "QA Audit", description: "Phase 9: Quality assurance and bug fixing", path: "/protocol/qa", category: "Protocol" },
  { title: "UX Audit", description: "Phase 10: UX review and accessibility", path: "/protocol/ux", category: "Protocol" },
  { title: "Security Audit", description: "Phase 11: OWASP audit and hardening", path: "/protocol/security", category: "Protocol" },
  { title: "Deploy", description: "Phase 12: Deployment and infrastructure", path: "/protocol/deploy-phase", category: "Protocol" },
  { title: "Launch", description: "Phase 13: Final verification and go-live", path: "/protocol/launch", category: "Protocol" },

  // Agents
  { title: "The Council", description: "All 14 lead agents with universe breakdowns", path: "/agents", category: "Agents" },
  { title: "Galadriel", description: "Frontend & UX lead — Tolkien universe", path: "/agents/galadriel", category: "Agents" },
  { title: "Stark", description: "Backend engineer — Marvel universe", path: "/agents/stark", category: "Agents" },
  { title: "Batman", description: "QA & testing — DC universe", path: "/agents/batman", category: "Agents" },
  { title: "Kenobi", description: "Security auditor — Star Wars universe", path: "/agents/kenobi", category: "Agents" },
  { title: "Picard", description: "Systems architect — Star Trek universe", path: "/agents/picard", category: "Agents" },
  { title: "Kusanagi", description: "DevOps engineer — Anime universe", path: "/agents/kusanagi", category: "Agents" },
  { title: "Coulson", description: "Release manager — Marvel universe", path: "/agents/coulson", category: "Agents" },
  { title: "Bombadil", description: "Forge sync keeper — Tolkien universe", path: "/agents/bombadil", category: "Agents" },
  { title: "Chani", description: "Worm rider, Telegram bridge — Dune universe", path: "/agents/chani", category: "Agents" },
  { title: "Fury", description: "Pipeline orchestrator — Marvel universe", path: "/agents/fury", category: "Agents" },
  { title: "Sisko", description: "Campaign commander — Star Trek universe", path: "/agents/sisko", category: "Agents" },
  { title: "Celebrimbor", description: "Forge artist, image generation — Tolkien universe", path: "/agents/celebrimbor", category: "Agents" },
  { title: "Bashir", description: "Field medic, post-mortem analysis — Star Trek universe", path: "/agents/bashir", category: "Agents" },
  { title: "Thanos", description: "The Gauntlet — comprehensive 5-round review — Marvel universe", path: "/agents/thanos", category: "Agents" },

  // Commands
  { title: "Commands", description: "All 23 slash commands with usage and examples", path: "/commands", category: "Commands" },
  { title: "/build", description: "Execute the full 13-phase build protocol", path: "/commands/build", category: "Commands" },
  { title: "/qa", description: "Batman's full QA pass with double-pass verification", path: "/commands/qa", category: "Commands" },
  { title: "/test", description: "Batman's test-writing mode — coverage analysis and test architecture", path: "/commands/test", category: "Commands" },
  { title: "/security", description: "Kenobi's OWASP audit with red-team verification", path: "/commands/security", category: "Commands" },
  { title: "/ux", description: "Galadriel's adversarial UX/UI review with a11y audit", path: "/commands/ux", category: "Commands" },
  { title: "/review", description: "Picard's code review — pattern compliance and quality", path: "/commands/review", category: "Commands" },
  { title: "/devops", description: "Kusanagi's infrastructure — adapts based on deploy target", path: "/commands/devops", category: "Commands" },
  { title: "/architect", description: "Picard's architecture review with conflict resolution", path: "/commands/architect", category: "Commands" },
  { title: "/git", description: "Coulson's version bump, changelog, commit, release", path: "/commands/git", category: "Commands" },
  { title: "/void", description: "Bombadil's forge sync — update VoidForge from upstream", path: "/commands/void", category: "Commands" },
  { title: "/thumper", description: "Chani's Telegram bridge with Gom Jabbar authentication", path: "/commands/thumper", category: "Commands" },
  { title: "/assemble", description: "Fury's full pipeline from architecture to launch", path: "/commands/assemble", category: "Commands" },
  { title: "/campaign", description: "Sisko's War Room — read the PRD, pick missions, finish the fight", path: "/commands/campaign", category: "Commands" },
  { title: "/imagine", description: "Celebrimbor's Forge — AI image generation from PRD descriptions", path: "/commands/imagine", category: "Commands" },
  { title: "/debrief", description: "Bashir's Field Report — post-mortem analysis and upstream feedback", path: "/commands/debrief", category: "Commands" },
  { title: "/gauntlet", description: "Thanos's Comprehensive Review — 5 rounds, 30+ agents, every domain", path: "/commands/gauntlet", category: "Commands" },
  { title: "/prd", description: "Sisko's PRD Generator — 5-act structured interview to produce a complete PRD", path: "/commands/prd", category: "Commands" },
  { title: "/grow", description: "Kelsier's 6-phase growth protocol — audit, SEO, content, ads, outreach, measure", path: "/commands/grow", category: "Commands" },
  { title: "/treasury", description: "Dockson's financial operations — revenue, budgets, spend, reconciliation", path: "/commands/treasury", category: "Commands" },
  { title: "/portfolio", description: "Steris's cross-project financials — aggregated spend and revenue", path: "/commands/portfolio", category: "Commands" },
  { title: "/cultivation", description: "Install the Cultivation growth engine — autonomous marketing infrastructure", path: "/commands/cultivation", category: "Commands" },
  { title: "/current", description: "Tuvok's Deep Current — autonomous campaign intelligence and site scanning", path: "/commands/current", category: "Commands" },
  { title: "/dangerroom", description: "The Danger Room — installable operations dashboard for build/deploy/agent monitoring", path: "/commands/dangerroom", category: "Commands" },

  // Patterns
  { title: "Patterns", description: "21 code patterns with framework implementations", path: "/patterns", category: "Patterns" },
  { title: "API Route", description: "Validation, auth, service call, consistent response", path: "/patterns/api-route", category: "Patterns" },
  { title: "Service", description: "Business logic, ownership checks, typed errors", path: "/patterns/service", category: "Patterns" },
  { title: "Component", description: "Loading, empty, error, success states — keyboard accessible", path: "/patterns/component", category: "Patterns" },
  { title: "Middleware", description: "Auth, request logging, rate limiting", path: "/patterns/middleware", category: "Patterns" },
  { title: "Error Handling", description: "Canonical error strategy — single source of truth", path: "/patterns/error-handling", category: "Patterns" },
  { title: "Job Queue", description: "Background jobs: idempotency, retry, dead letter queue", path: "/patterns/job-queue", category: "Patterns" },
  { title: "Multi-Tenant", description: "Workspace scoping, tenant isolation, role-based access", path: "/patterns/multi-tenant", category: "Patterns" },
  { title: "Mobile Screen", description: "React Native screen with safe area, Dynamic Type, 4 states", path: "/patterns/mobile-screen", category: "Patterns" },
  { title: "Mobile Service", description: "Offline-first data with sync queue and conflict resolution", path: "/patterns/mobile-service", category: "Patterns" },
  { title: "Game Loop", description: "Fixed-timestep game loop with interpolation and pause/resume", path: "/patterns/game-loop", category: "Patterns" },
  { title: "Game State", description: "Hierarchical state machine with save/load serialization", path: "/patterns/game-state", category: "Patterns" },
  { title: "Game Entity (ECS)", description: "Entity Component System with component stores and systems", path: "/patterns/game-entity", category: "Patterns" },
  { title: "SSE Endpoint", description: "Server-Sent Events: lifecycle, keepalive, timeout, React hook", path: "/patterns/sse-endpoint", category: "Patterns" },
  { title: "Ad Platform Adapter", description: "Split interface: setup, runtime adapter, read-only daemon", path: "/patterns/ad-platform-adapter", category: "Patterns" },
  { title: "Financial Transaction", description: "Branded Cents type, hash-chained append log, atomic writes", path: "/patterns/financial-transaction", category: "Patterns" },
  { title: "Daemon Process", description: "PID management, Unix socket API, job scheduler, signal handling", path: "/patterns/daemon-process", category: "Patterns" },
  { title: "Revenue Source Adapter", description: "Read-only revenue interface with Stripe + Paddle implementations", path: "/patterns/revenue-source-adapter", category: "Patterns" },
  { title: "OAuth Token Lifecycle", description: "Refresh at 80% TTL, failure escalation, vault integration", path: "/patterns/oauth-token-lifecycle", category: "Patterns" },
  { title: "Outbound Rate Limiter", description: "Token bucket for external API calls with per-platform limits", path: "/patterns/outbound-rate-limiter", category: "Patterns" },

  // Tutorials
  { title: "The Wizard Path", description: "Start from nothing — Gandalf walks you through everything", path: "/tutorial/wizard", category: "Tutorial" },
  { title: "The Scaffold Path", description: "You know your stack — write PRD, run campaign, ship", path: "/tutorial/scaffold", category: "Tutorial" },
  { title: "The Import Path", description: "Existing project — point VoidForge at your code", path: "/tutorial/import", category: "Tutorial" },

  // Other
  { title: "Prophecy", description: "The roadmap: what's shipped, what's next, what's far out", path: "/prophecy", category: "Roadmap" },
  { title: "About", description: "Thomas McLeod — serial entrepreneur, engineer, creator of VoidForge", path: "/about", category: "About" },
];
