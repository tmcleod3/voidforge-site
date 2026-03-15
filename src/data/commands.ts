export interface Command {
  slug: string;
  name: string;
  lead: string;
  description: string;
  usage: string;
  whatHappens: string[];
  badge?: string;
  note?: string;
}

export const commands: Command[] = [
  {
    slug: "build",
    name: "/build",
    lead: "All agents",
    description:
      "Execute the full 13-phase build protocol from PRD to production.",
    usage: "/build",
    whatHappens: [
      "Picard reads and validates the PRD frontmatter",
      "Stark + Kusanagi scaffold the project",
      "Phases execute in sequence with verification gates",
      "Batman, Galadriel, and Kenobi run the double-pass review cycle",
      "Kusanagi deploys to your target",
      "All agents verify the launch checklist",
    ],
  },
  {
    slug: "qa",
    name: "/qa",
    lead: "Batman",
    description:
      "Full QA pass with double-pass verification and regression checklist.",
    usage: "/qa",
    whatHappens: [
      "Oracle analyzes test coverage",
      "Red Hood probes error paths",
      "Alfred reviews code quality",
      "Deathstroke tests authorization boundaries",
      "Constantine checks config and environment",
      "Nightwing re-runs the full suite after fixes",
    ],
  },
  {
    slug: "test",
    name: "/test",
    lead: "Batman",
    description:
      "Test-writing mode: coverage analysis, test architecture, write missing tests.",
    usage: "/test",
    whatHappens: [
      "Oracle identifies coverage gaps",
      "Batman designs the test architecture",
      "Missing tests are written for uncovered paths",
      "Nightwing executes the full suite to verify",
    ],
  },
  {
    slug: "security",
    name: "/security",
    lead: "Kenobi",
    description:
      "OWASP audit with parallel and sequential phases and red-team verification.",
    usage: "/security",
    whatHappens: [
      "Leia audits auth flows",
      "Chewie scans dependencies",
      "Rex validates all inputs",
      "Maul runs red-team penetration tests",
      "Yoda, Windu, Ahsoka, Padmé run sequential deep reviews",
      "All findings are remediated and re-verified",
    ],
  },
  {
    slug: "ux",
    name: "/ux",
    lead: "Galadriel",
    description:
      "Adversarial UX/UI review with a11y audit and verification pass.",
    usage: "/ux",
    whatHappens: [
      "Elrond reviews design system consistency",
      "Arwen audits visual design and theming",
      "Samwise runs accessibility audit (WCAG 2.1 AA)",
      "Bilbo reviews microcopy and brand voice",
      "Legolas checks performance impact",
      "Gandalf probes edge cases and error states",
    ],
  },
  {
    slug: "review",
    name: "/review",
    lead: "Picard",
    description:
      "Code review for pattern compliance, quality, and maintainability.",
    usage: "/review",
    whatHappens: [
      "Picard reviews against architecture decisions (ADRs)",
      "Pattern compliance checked against /docs/patterns/",
      "Code quality and maintainability assessed",
      "Findings prioritized and fixes recommended",
    ],
  },
  {
    slug: "devops",
    name: "/devops",
    lead: "Kusanagi",
    description:
      "Infrastructure and deploy — adapts based on deploy target.",
    usage: "/devops",
    whatHappens: [
      "Senku provisions infrastructure",
      "DNS, SSL, and monitoring configured",
      "Deploy pipeline set up",
      "Health checks verified",
      "Backups configured and tested",
    ],
  },
  {
    slug: "architect",
    name: "/architect",
    lead: "Picard",
    description:
      "Architecture review with parallel analysis and conflict resolution.",
    usage: "/architect",
    whatHappens: [
      "Schema and data model analysis",
      "Scaling strategy review",
      "ADR creation for significant decisions",
      "Cross-agent conflict resolution",
    ],
  },
  {
    slug: "git",
    name: "/git",
    lead: "Coulson",
    description: "Version bump, changelog, commit — full release management.",
    usage: "/git",
    whatHappens: [
      "Coulson analyzes changes since last release",
      "Version bumped (semver) based on change scope",
      "Changelog generated from commit history",
      "Clean commit created with proper message",
      "Release tag applied",
    ],
  },
  {
    slug: "void",
    name: "/void",
    lead: "Bombadil",
    description: "Update VoidForge methodology from upstream.",
    usage: "/void",
    whatHappens: [
      "Bombadil checks for upstream methodology changes",
      "Shared files synced across all three tiers",
      "Branch sync rule enforced",
      "Changes logged to build journal",
    ],
    note: "This command was used to keep this very website in sync with VoidForge upstream.",
  },
  {
    slug: "thumper",
    name: "/thumper",
    lead: "Chani",
    description:
      "Telegram bridge with Gom Jabbar authentication and sandworm relay.",
    usage: "/thumper",
    whatHappens: [
      "Chani plants the thumper (starts the Telegram bot)",
      "Gom Jabbar authentication verifies identity",
      "Commands relayed from Telegram to Claude Code",
      "Results sent back through the desert",
    ],
    badge: "NEW in v3.3",
  },
  {
    slug: "assemble",
    name: "/assemble",
    lead: "Fury",
    description:
      "The full pipeline. Architect → Build → Triple Review → UX → Double Security → DevOps → QA → Test → Crossfire → Council. One command to rule them all.",
    usage: "/assemble",
    whatHappens: [
      "Fury assembles all agents into a single devastating pipeline",
      "Picard runs architecture review first",
      "Full /build protocol executes (13 phases)",
      "Triple code review pass (Picard × 3)",
      "Galadriel's UX/a11y audit",
      "Double security audit (Kenobi × 2)",
      "Kusanagi's infrastructure review",
      "Batman's QA and test suite",
      "Crossfire: agents challenge each other's findings",
      "Council vote: all leads must sign off or it doesn't ship",
    ],
    badge: "NEW in v3.7",
  },
];

export function getCommand(slug: string): Command | undefined {
  return commands.find((c) => c.slug === slug);
}
