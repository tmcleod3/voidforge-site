export interface CommandArgument {
  flag: string;
  type: "boolean" | "string";
  valuePlaceholder?: string;
  description: string;
  effect: string;
}

export type CommandTier = "all" | "full";

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
  tier: CommandTier;
}

export const commands: Command[] = [
  {
    slug: "build",
    tier: "all" as CommandTier,
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
    tier: "all" as CommandTier,
    name: "/qa",
    lead: "Batman",
    description:
      "The double-pass. Batman's team probes every path, every boundary, every assumption. Then they do it again. If it breaks, they already know.",
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
    tier: "all" as CommandTier,
    name: "/test",
    lead: "Batman",
    description:
      "Batman writes the tests everyone else forgot. Coverage gaps identified, test architecture designed, missing paths covered. The Dark Knight doesn't leave witnesses.",
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
    tier: "all" as CommandTier,
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
    tier: "all" as CommandTier,
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
    tier: "all" as CommandTier,
    name: "/review",
    lead: "Picard",
    description:
      "Picard reads every line against the pattern library. Compliance, quality, maintainability. If it doesn't meet the standard, it doesn't ship.",
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
    tier: "all" as CommandTier,
    name: "/devops",
    lead: "Kusanagi",
    description:
      "Kusanagi provisions, deploys, and monitors. Six deploy targets, automatic SSL, health checks that actually check health. The Major doesn't do half-measures.",
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
    tier: "all" as CommandTier,
    name: "/architect",
    lead: "Picard",
    description:
      "Picard reviews the big decisions. Schema design, scaling strategy, ADRs. When agents disagree, he resolves the conflict. Make it so — but make it maintainable.",
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
    tier: "all" as CommandTier,
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
    tier: "all" as CommandTier,
    name: "/void",
    lead: "Bombadil",
    description: "Old Tom keeps the forge in tune. Checks upstream for methodology changes, syncs shared files across all three tiers, and makes sure the tools that build your tools stay sharp.",
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
    tier: "full" as CommandTier,
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
    tier: "all" as CommandTier,
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
    tier: "all" as CommandTier,
    name: "/campaign",
    lead: "Sisko",
    description:
      "The war room. Sisko reads the PRD, identifies every remaining mission, and executes them one by one — running /assemble for each — until the entire product is complete. Use --blitz for full autonomous mode.",
    usage: "/campaign [--blitz] [--fast] [--plan] [--resume] [--mission \"Name\"] [--autonomous] [--continuous]",
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
      {
        flag: "--autonomous",
        type: "boolean",
        description:
          "Supervised autonomy. Like blitz, but with git tags before every mission, critical-finding rollback, and 5-mission human checkpoints. Safer for long campaigns.",
        effect: "Git tag before each mission. Rollback on critical findings. Checkpoint every 5 missions.",
      },
      {
        flag: "--continuous",
        type: "boolean",
        description:
          "After victory, auto-start the next roadmap version within the same major. The forge keeps building until the roadmap runs dry.",
        effect: "Chain campaigns within a major version (e.g., v9.3 → v9.4). Stops before crossing major boundaries.",
      },
    ],
    badge: "NEW in v3.9",
  },
  {
    slug: "imagine",
    tier: "all" as CommandTier,
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
    tier: "all" as CommandTier,
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
    tier: "all" as CommandTier,
    name: "/gauntlet",
    lead: "Thanos",
    description:
      "The ultimate test. 5 rounds, 30+ agents across 8 universes, escalating from discovery to adversarial warfare. Review-only — no build. If your project survives the snap, it's ready for anything.",
    usage: "/gauntlet [--quick] [--security-only] [--ux-only] [--qa-only] [--resume] [--ux-extra] [--infinity]",
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
      {
        flag: "--infinity",
        type: "boolean",
        description:
          "The Infinity Gauntlet. Ten rounds, two full passes. Every active agent deployed as its own dedicated sub-process — not combined, not summarized. ~60-80 agent launches across all 8 universes. The full roster called off the bench.",
        effect: "10 rounds (2x full pass). Every agent gets its own launch, context, and findings.",
      },
    ],
    badge: "NEW in v5.5",
  },
  {
    slug: "prd",
    tier: "all" as CommandTier,
    name: "/prd",
    lead: "Sisko",
    description:
      "The PRD generator. Sisko runs a 5-act structured interview — product vision, tech stack, features, UI, shipping plan — and produces a complete PRD with valid YAML frontmatter.",
    usage: "/prd [--challenge]",
    whatHappens: [
      "Act 1: Product vision — name, one-liner, audience, personality",
      "Act 2: Tech stack — framework, database, styling with smart defaults",
      "Act 3: Features — user flows, data models, edge cases for each feature",
      "Act 4: UI and routes — page hierarchy, responsive behavior, states",
      "Act 5: Shipping plan — launch phases, done criteria, deploy target",
      "Complete PRD written to /docs/PRD.md with valid frontmatter",
    ],
    arguments: [
      {
        flag: "--challenge",
        type: "boolean",
        description:
          "Boromir argues AGAINST the PRD before it's finalized. He challenges expensive features, fragile integrations, and schema gaps. Cheaper than discovering design flaws in Phase 9.",
        effect: "Act 6: Boromir's adversarial PRD challenge before finalizing.",
      },
    ],
    badge: "NEW in v8.0",
  },
  {
    slug: "grow",
    tier: "full" as CommandTier,
    name: "/grow",
    lead: "Kelsier",
    description:
      "Kelsier's 6-phase growth protocol. Audit your product, optimize SEO, create content, run ads, manage outreach, measure results. The forge that grows what it builds.",
    usage: "/grow [--audit] [--seo] [--ads platform] [--social platform] [--email] [--content type] [--budget N] [--continuous]",
    whatHappens: [
      "Phase 1: Kelsier + Vin + Marsh run reconnaissance — product audit, site audit, competitive analysis",
      "Phase 2: Navani + Raoden lay foundation — technical SEO, conversion optimization, analytics",
      "Phase 3: Shallan + Hoid create content — blog, changelog, case studies, visual assets",
      "Phase 4: Distribution — organic (Kaladin, Lift) + paid (Wax, Wayne) + outreach (Sarene)",
      "Phase 5: Szeth runs compliance — GDPR, CAN-SPAM, platform ToS, ad policies",
      "Phase 6: Vin + Kelsier measure and iterate — track, identify, report, loop",
    ],
    arguments: [
      { flag: "--audit", type: "boolean", description: "Kelsier's full growth audit — site analysis, competitive landscape, growth plan.", effect: "Run Phase 1 reconnaissance only." },
      { flag: "--seo", type: "boolean", description: "Navani's technical SEO pass — schema, sitemap, meta, Core Web Vitals, Lighthouse.", effect: "Run Phase 2 SEO optimization only." },
      { flag: "--ads", type: "string", valuePlaceholder: "platform", description: "Wax runs paid ads on a platform. Meta, Google, TikTok, LinkedIn, Twitter, or Reddit.", effect: "Run Phase 4 paid ads on the specified platform." },
      { flag: "--social", type: "string", valuePlaceholder: "platform", description: "Lift manages social presence. Twitter, LinkedIn, or Reddit.", effect: "Run Phase 4 social on the specified platform." },
      { flag: "--email", type: "boolean", description: "Sarene's outreach campaign — prospect research, cold email sequences, follow-ups.", effect: "Run Phase 4 email outreach." },
      { flag: "--content", type: "string", valuePlaceholder: "type", description: "Shallan creates content. Blog, landing, changelog, or case-study.", effect: "Run Phase 3 content creation for the specified type." },
      { flag: "--budget", type: "string", valuePlaceholder: "amount", description: "Steris's daily spend cap for paid operations. The Planner makes contingency plans for every scenario.", effect: "Set daily ad spend limit in dollars." },
      { flag: "--continuous", type: "boolean", description: "Heartbeat mode — daily optimization cycles. Vin pulls metrics, Wax optimizes, Kelsier reviews, Lift schedules.", effect: "Run growth in scheduled daily cycles." },
    ],
    badge: "NEW in v11.0",
  },
  {
    slug: "treasury",
    tier: "full" as CommandTier,
    name: "/treasury",
    lead: "Dockson",
    description:
      "Dockson's financial operations. Connect revenue sources, allocate budgets, execute spend, reconcile daily. The forge that manages its own money.",
    usage: "/treasury [--connect source] [--allocate percentages] [--report] [--forecast] [--freeze]",
    whatHappens: [
      "Ingest revenue from Stripe, Paddle, or bank APIs",
      "Allocate budgets across growth, infrastructure, and reserves",
      "Authorize charges against approved budgets with safety tiers",
      "Reconcile daily — match spend to budget, flag anomalies",
      "Report P&L, burn rate, runway, ROAS by channel",
    ],
    arguments: [
      { flag: "--connect", type: "string", valuePlaceholder: "source", description: "Connect a financial source. Stripe, Mercury, Brex, or Paddle.", effect: "Set up revenue ingestion from the specified source." },
      { flag: "--allocate", type: "string", valuePlaceholder: "percentages", description: "Set budget allocation. Format: growth:40,infra:30,reserve:30.", effect: "Distribute revenue across budget categories." },
      { flag: "--report", type: "boolean", description: "Generate a financial summary — P&L, burn rate, runway, ROAS by channel.", effect: "Produce the current financial report." },
      { flag: "--forecast", type: "boolean", description: "Steris projects spend and revenue for the next 30, 60, and 90 days.", effect: "Generate financial projections." },
      { flag: "--freeze", type: "boolean", description: "Emergency kill switch. Stops ALL automated spending immediately.", effect: "Halt all automated financial operations." },
    ],
    badge: "NEW in v11.1",
  },
  {
    slug: "portfolio",
    tier: "full" as CommandTier,
    name: "/portfolio",
    lead: "Steris",
    description:
      "Steris's cross-project financials. Track all VoidForge projects from one place — status, revenue, traffic, ad spend, ROAS.",
    usage: "/portfolio",
    whatHappens: [
      "Read portfolio state from ~/.voidforge/portfolio.json",
      "Display status, revenue, and spend for each project",
      "Cross-project financial aggregation",
      "Portfolio-level optimization recommendations",
    ],
    badge: "NEW in v11.3",
  },
  {
    slug: "cultivation",
    tier: "full" as CommandTier,
    name: "/cultivation",
    lead: "Kelsier",
    description:
      "Plant the growth engine. Cultivation wires up ad platforms, analytics, content pipelines, and social scheduling — the infrastructure Kelsier's crew needs before they can burn.",
    usage: "/cultivation",
    whatHappens: [
      "Install growth infrastructure alongside the project",
      "Configure ad platform connections and API credentials",
      "Set up analytics and conversion tracking",
      "Initialize the content pipeline and social scheduler",
      "Configure budget tiers and safety controls",
    ],
    badge: "NEW in v11.0",
  },
  {
    slug: "current",
    tier: "full" as CommandTier,
    name: "/current",
    lead: "Tuvok",
    description:
      "Tuvok's Deep Current — autonomous campaign intelligence. Scans the site, analyzes the market, proposes growth campaigns, learns from results. The forge that thinks about what to build next.",
    usage: "/current [--scan] [--analyze] [--propose] [--cold-start]",
    whatHappens: [
      "Scan the live site for growth opportunities and gaps",
      "Analyze market positioning and competitive landscape",
      "Propose data-driven campaigns with budget estimates",
      "Cold start intake for new projects — bootstraps the situation model",
    ],
    arguments: [
      { flag: "--scan", type: "boolean", description: "Scan the live site — pages, performance, SEO, conversion paths.", effect: "Run site scanner only." },
      { flag: "--analyze", type: "boolean", description: "Analyze the situation model — market position, competitor gaps, audience signals.", effect: "Run analysis only." },
      { flag: "--propose", type: "boolean", description: "Generate campaign proposals with budget, timeline, and expected ROAS.", effect: "Produce proposals only." },
      { flag: "--cold-start", type: "boolean", description: "Bootstrap the situation model for a new project — intake questionnaire + initial scan.", effect: "Run cold start intake." },
    ],
    badge: "NEW in v12.0",
  },
  {
    slug: "dangerroom",
    tier: "full" as CommandTier,
    name: "/dangerroom",
    lead: "Fury",
    description:
      "The Danger Room — installable operations dashboard for build, deploy, and agent monitoring. Real-time WebSocket feed, agent activity ticker, build progress panels. The forge watches itself work.",
    usage: "/dangerroom",
    whatHappens: [
      "Install the Danger Room dashboard alongside your project",
      "Configure WebSocket connection for real-time agent activity",
      "Set up 5 core panels: build progress, agent activity, findings, deploy status, campaign state",
      "Agent activity ticker shows every agent launch in real-time",
      "Living PRD diff view shows how the plan evolved during execution",
    ],
    badge: "NEW in v10.0",
  },
  {
    slug: "assess",
    tier: "all" as CommandTier,
    name: "/assess",
    lead: "Picard",
    description:
      "Picard's pre-build assessment — evaluate an existing codebase before a rebuild, migration, or VoidForge onboarding. Chains architecture review, assessment-mode Gauntlet, and PRD gap analysis into a unified 'State of the Codebase' report.",
    usage: "/assess",
    whatHappens: [
      "Picard runs a full architecture scan — schema, integrations, security posture, service boundaries, tech debt",
      "Thanos runs an assessment Gauntlet (Rounds 1-2 only) — findings grouped by root cause, not domain",
      "Key detection: abandoned migrations, stubs returning success, auth-free endpoints, dead code",
      "Dax + Troi run PRD gap analysis — structural and semantic diff of requirements vs implementation",
      "Produces a unified State of the Codebase report in /logs/assessment.md with remediation plan",
    ],
    badge: "NEW in v13.0",
  },
  {
    slug: "deploy",
    tier: "all" as CommandTier,
    name: "/deploy",
    lead: "Kusanagi",
    description:
      "Kusanagi's deploy agent — target detection, pre-deploy checks, deploy execution, health verification, rollback on failure. Supports VPS, Vercel, Railway, Docker, Cloudflare, and static targets.",
    usage: "/deploy",
    whatHappens: [
      "Kusanagi detects your deploy target from PRD frontmatter or project evidence (vercel.json, Dockerfile, SSH_HOST, etc.)",
      "Levi runs pre-deploy checks: build passes, tests pass, no uncommitted changes, credentials available",
      "Executes the deploy strategy for your target — git pull + restart for VPS, CLI deploy for Vercel/Railway, docker compose for Docker",
      "Spike verifies health after deploy: HTTP 200, SSL valid, security headers present, no mixed content",
      "If health check fails, automatic rollback to previous version with alert",
    ],
    arguments: [
      { flag: "--target", type: "string" as const, valuePlaceholder: "vercel", description: "Override auto-detected deploy target.", effect: "Skip target detection, use specified target." },
      { flag: "--dry-run", type: "boolean" as const, description: "Show what would happen without deploying.", effect: "Run all checks, print deploy plan, stop before execution." },
      { flag: "--rollback", type: "boolean" as const, description: "Roll back to the previous deployed version.", effect: "Revert to last known good deploy." },
    ],
    badge: "NEW in v15.0",
  },
  {
    slug: "ai",
    tier: "all" as CommandTier,
    name: "/ai",
    lead: "Hari Seldon",
    description:
      "Seldon's AI Intelligence Audit — reviews every LLM-powered component in your application. Model selection, prompt architecture, tool-use schemas, orchestration patterns, evaluation strategy, safety, token economics, and observability.",
    usage: "/ai",
    whatHappens: [
      "Hari Seldon maps every AI integration point: SDK imports, prompt files, tool definitions, orchestration patterns",
      "4 parallel audits: model selection (Salvor Hardin), prompt architecture (Gaal Dornick), tool schemas (Hober Mallow), AI safety (Bliss)",
      "5 sequential audits: orchestration, evaluation, token economics, observability, versioning",
      "The Mule runs adversarial AI testing: hallucination probes, prompt injection, context overflow",
      "Produces AI Architecture report with findings ranked by severity and remediation plan",
    ],
    badge: "NEW in v16.0",
  },
];

export function getCommand(slug: string): Command | undefined {
  return commands.find((c) => c.slug === slug);
}
