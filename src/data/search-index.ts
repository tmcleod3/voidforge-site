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
  { title: "The Council", description: "All 13 lead agents with universe breakdowns", path: "/agents", category: "Agents" },
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

  // Commands
  { title: "Commands", description: "All 15 slash commands with usage and examples", path: "/commands", category: "Commands" },
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

  // Patterns
  { title: "Patterns", description: "7 code patterns with framework implementations", path: "/patterns", category: "Patterns" },
  { title: "API Route", description: "Validation, auth, service call, consistent response", path: "/patterns/api-route", category: "Patterns" },
  { title: "Service", description: "Business logic, ownership checks, typed errors", path: "/patterns/service", category: "Patterns" },
  { title: "Component", description: "Loading, empty, error, success states — keyboard accessible", path: "/patterns/component", category: "Patterns" },
  { title: "Middleware", description: "Auth, request logging, rate limiting", path: "/patterns/middleware", category: "Patterns" },
  { title: "Error Handling", description: "Canonical error strategy — single source of truth", path: "/patterns/error-handling", category: "Patterns" },
  { title: "Job Queue", description: "Background jobs: idempotency, retry, dead letter queue", path: "/patterns/job-queue", category: "Patterns" },
  { title: "Multi-Tenant", description: "Workspace scoping, tenant isolation, role-based access", path: "/patterns/multi-tenant", category: "Patterns" },

  // Other
  { title: "Prophecy", description: "The roadmap: what's shipped, what's next, what's far out", path: "/prophecy", category: "Roadmap" },
  { title: "About", description: "Thomas McLeod — serial entrepreneur, engineer, creator of VoidForge", path: "/about", category: "About" },
];
