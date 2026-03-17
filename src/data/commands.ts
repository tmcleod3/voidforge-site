export interface CommandArgument {
  flag: string;
  type: "boolean" | "string";
  valuePlaceholder?: string;
  description: string;
  effect: string;
}

export interface Command {
  slug: string;
  name: string;
  lead: string;
  description: string;
  usage: string;
  whatHappens: string[];
  arguments?: CommandArgument[];
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
    usage: "/git [--major | --minor | --patch]",
    whatHappens: [
      "Coulson analyzes changes since last release",
      "Version bumped (semver) based on change scope",
      "Changelog generated from commit history",
      "Clean commit created with proper message",
      "Release tag applied",
    ],
    arguments: [
      {
        flag: "--major",
        type: "boolean",
        description:
          "Force a major version bump. Breaking changes, new eras — the kind of release that gets its own name.",
        effect: "Override automatic detection and bump the major version.",
      },
      {
        flag: "--minor",
        type: "boolean",
        description:
          "Force a minor version bump. New features, new capabilities — the forge grows.",
        effect: "Override automatic detection and bump the minor version.",
      },
      {
        flag: "--patch",
        type: "boolean",
        description:
          "Force a patch version bump. Bug fixes, small corrections — the forge heals.",
        effect: "Override automatic detection and bump the patch version.",
      },
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
    usage: "/assemble [--skip-arch] [--skip-build] [--fast] [--resume]",
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
    arguments: [
      {
        flag: "--skip-arch",
        type: "boolean",
        description:
          "Skip the architecture review. Useful when re-running the review pipeline on code that Picard has already blessed.",
        effect: "Skip Phase 1 (Architecture review).",
      },
      {
        flag: "--skip-build",
        type: "boolean",
        description:
          "Skip the build protocol entirely. For re-running reviews on code that's already standing — no need to rebuild what's already built.",
        effect: "Skip Phase 2 (Build protocol).",
      },
      {
        flag: "--fast",
        type: "boolean",
        description:
          "Skip the Crossfire and Council. Reviews still run, but the adversarial cross-examination and consensus vote are omitted. Minimum 1 review round preserved.",
        effect: "Skip Phase 12 (Crossfire) and Phase 13 (Council).",
      },
      {
        flag: "--resume",
        type: "boolean",
        description:
          "Pick up where you left off. Fury reads the assemble state and resumes from the last completed phase.",
        effect: "Resume from last checkpoint in assemble-state.md.",
      },
    ],
    badge: "NEW in v3.7",
  },
  {
    slug: "campaign",
    name: "/campaign",
    lead: "Sisko",
    description:
      "The war room. Sisko reads the PRD, identifies every remaining mission, and executes them one by one — running /assemble for each — until the entire product is complete. Use --blitz for full autonomous mode.",
    usage: "/campaign [--blitz] [--fast] [--plan] [--resume] [--mission \"Name\"]",
    whatHappens: [
      "Kira runs operational recon — checks for unfinished builds or assembles",
      "Dax analyzes the PRD and diffs against the codebase",
      "Odo verifies prerequisites for the next mission",
      "Sisko presents the mission brief and waits for confirmation",
      "Fury's /assemble runs for the scoped mission",
      "Coulson commits and versions the completed mission",
      "Loop: back to Step 1 until every PRD section is implemented",
      "Final full-project /gauntlet when all missions are complete",
    ],
    arguments: [
      {
        flag: "--blitz",
        type: "boolean",
        description:
          "Full autonomous mode. Sisko takes the conn — no confirmations, no pauses. The war room runs itself until the mission board is clear. Does NOT imply --fast — full review quality preserved.",
        effect:
          "Skip confirmations, auto-continue between missions, auto-debrief after each.",
      },
      {
        flag: "--fast",
        type: "boolean",
        description:
          "Skip the Crossfire and Council on each mission. The final Gauntlet still runs. Combine with --blitz when speed and autonomy both matter.",
        effect:
          "Pass --fast to every /assemble call. Final Gauntlet is unaffected.",
      },
      {
        flag: "--plan",
        type: "string",
        valuePlaceholder: "description",
        description:
          "Planning mode. Parse your idea into the PRD and roadmap without building anything. The war room becomes a strategy chamber.",
        effect: "Update PRD and roadmap only — no build execution.",
      },
      {
        flag: "--resume",
        type: "boolean",
        description:
          "Pick up where you left off. Sisko reads the campaign state and jumps to the next unfinished mission.",
        effect: "Resume from active mission in campaign-state.md.",
      },
      {
        flag: "--mission",
        type: "string",
        valuePlaceholder: "Name",
        description:
          "Jump to a specific PRD section by name. Skip the queue — go straight to the fight that matters.",
        effect: "Execute only the named mission from the PRD.",
      },
    ],
    badge: "NEW in v3.9",
  },
  {
    slug: "imagine",
    name: "/imagine",
    lead: "Celebrimbor",
    description:
      "The forge artist. Celebrimbor scans the PRD for visual asset requirements, derives a style from the brand section, and generates images via DALL-E 3. Portraits, illustrations, OG images, hero art — whatever the PRD describes and code can't produce.",
    usage: "/imagine [--scan] [--asset \"name\"] [--regen \"name\"] [--style \"desc\"] [--provider model]",
    whatHappens: [
      "Checks vault for OpenAI API key (prompts on first run)",
      "Scans the PRD for all visual asset descriptions",
      "Derives a style prefix from PRD Section 14 (Brand Voice)",
      "Scans existing assets — skips what's already generated",
      "Presents the plan with image count and cost estimate",
      "Generates images via DALL-E 3 HD with rate limiting",
      "Downloads to public/images/ with manifest tracking",
      "Verifies generated images are wired into components",
    ],
    arguments: [
      {
        flag: "--scan",
        type: "boolean",
        description:
          "Scan the PRD for visual assets and report what's needed — without generating anything. Reconnaissance before the forge lights.",
        effect: "Report asset requirements without generating images.",
      },
      {
        flag: "--asset",
        type: "string",
        valuePlaceholder: "name",
        description:
          "Generate a specific named asset only. Pull one image from the manifest without running the full pipeline.",
        effect: "Generate only the named asset from the manifest.",
      },
      {
        flag: "--regen",
        type: "string",
        valuePlaceholder: "name",
        description:
          "Regenerate a specific image, overwriting what exists. When the first forging wasn't quite right.",
        effect: "Overwrite an existing generated image.",
      },
      {
        flag: "--style",
        type: "string",
        valuePlaceholder: "description",
        description:
          "Override the style derived from the PRD. Bring your own aesthetic — the forge will follow your vision.",
        effect: "Use a custom style prefix instead of PRD-derived style.",
      },
      {
        flag: "--provider",
        type: "string",
        valuePlaceholder: "model",
        description:
          "Choose your image generation model. The forge defaults to gpt-image-1 but can wield other tools.",
        effect: "Use a specific model instead of the default.",
      },
    ],
    badge: "NEW in v4.4",
  },
  {
    slug: "debrief",
    name: "/debrief",
    lead: "Bashir",
    description:
      "The field medic. Bashir examines what happened during a build or campaign, diagnoses what went wrong, traces root causes, and writes a post-mortem that prevents the same failure from recurring. Can file upstream issues to improve VoidForge itself.",
    usage: "/debrief [--submit] [--inbox] [--campaign] [--session] [--dry-run]",
    whatHappens: [
      "Ezri reconstructs the session timeline from logs and git history",
      "Bashir examines each phase for injuries — failures, regressions, surprises",
      "O'Brien traces root causes through the codebase",
      "Bashir writes the post-mortem with lessons and methodology fixes",
      "Optionally files a GitHub issue to the upstream VoidForge repo",
    ],
    arguments: [
      {
        flag: "--submit",
        type: "boolean",
        description:
          "Generate the field report, present it for review, then submit as a GitHub issue to upstream VoidForge after your approval.",
        effect: "Submit field report as a GitHub issue after user review.",
      },
      {
        flag: "--inbox",
        type: "boolean",
        description:
          "Triage incoming field reports from GitHub. Check what the forge has received and what needs attention.",
        effect: "Review and triage upstream field reports.",
      },
      {
        flag: "--campaign",
        type: "boolean",
        description:
          "Analyze the full campaign history — all missions, all logs. The post-mortem covers the entire war, not just the last battle.",
        effect: "Scope analysis to all campaign missions.",
      },
      {
        flag: "--session",
        type: "boolean",
        description:
          "Analyze just this session. A focused post-mortem on what happened since you sat down.",
        effect: "Scope analysis to current session only.",
      },
      {
        flag: "--dry-run",
        type: "boolean",
        description:
          "Generate the report but don't submit anything. Look before you leap.",
        effect: "Produce the report without filing a GitHub issue.",
      },
    ],
    badge: "NEW in v4.4",
  },
  {
    slug: "gauntlet",
    name: "/gauntlet",
    lead: "Thanos",
    description:
      "The ultimate test. 5 rounds, 30+ agents across 6 universes, escalating from discovery to adversarial warfare. Review-only — no build. If your project survives the snap, it's ready for anything.",
    usage: "/gauntlet [--quick] [--security-only] [--ux-only] [--qa-only] [--resume] [--ux-extra]",
    whatHappens: [
      "Round 1: Discovery — all agents read the codebase in parallel",
      "Round 2: Domain audits — QA, UX, Security, Architecture, DevOps each run full passes",
      "Round 3: Adversarial — agents attack each other's domains (Batman tests Galadriel's work, Kenobi tests Stark's)",
      "Round 4: Crossfire — agents challenge each other's findings",
      "Round 5: Convergence — all leads vote, final council, ship or no-ship",
    ],
    arguments: [
      {
        flag: "--quick",
        type: "boolean",
        description:
          "Three rounds instead of five. Still comprehensive, but lighter — skip the Crossfire and Council.",
        effect: "Run rounds 1-3 only. Skip rounds 4 (Crossfire) and 5 (Council).",
      },
      {
        flag: "--security-only",
        type: "boolean",
        description:
          "Four rounds of security only. Kenobi's marathon — inventory, full audit, re-probe, adversarial.",
        effect: "Run 4 focused security rounds instead of the full Gauntlet.",
      },
      {
        flag: "--ux-only",
        type: "boolean",
        description:
          "Four rounds of UX only. Galadriel's marathon — surface map, full audit, re-verify, enchantment.",
        effect: "Run 4 focused UX rounds instead of the full Gauntlet.",
      },
      {
        flag: "--qa-only",
        type: "boolean",
        description:
          "Four rounds of QA only. Batman's marathon — discovery, full pass, re-probe, adversarial.",
        effect: "Run 4 focused QA rounds instead of the full Gauntlet.",
      },
      {
        flag: "--resume",
        type: "boolean",
        description:
          "Resume from the last completed round. The Gauntlet reads its own state and picks up where it left off.",
        effect: "Continue from last checkpoint in gauntlet-state.md.",
      },
      {
        flag: "--ux-extra",
        type: "boolean",
        description:
          "Éowyn rides out. Beyond standard usability, she proposes micro-animations, copy improvements, and moments of delight that make users smile.",
        effect: "Extra enchantment emphasis across all rounds.",
      },
    ],
    badge: "NEW in v5.5",
  },
];

export function getCommand(slug: string): Command | undefined {
  return commands.find((c) => c.slug === slug);
}
