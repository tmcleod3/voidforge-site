export type Universe =
  | "tolkien"
  | "marvel"
  | "dc"
  | "star-wars"
  | "star-trek"
  | "dune"
  | "anime";

export interface LeadAgent {
  slug: string;
  name: string;
  realName: string;
  universe: Universe;
  domain: string;
  description: string;
  quote: string;
  tagline: string;
  exclamation: string;
  commandsLed: string[];
  phasesActive: number[];
  powerLevel: number; // 1-10
}

export interface SubAgent {
  name: string;
  role: string;
  universe: Universe;
}

export const universeLabels: Record<Universe, string> = {
  tolkien: "Middle-earth",
  marvel: "Marvel",
  dc: "DC",
  "star-wars": "Star Wars",
  "star-trek": "Star Trek",
  dune: "Dune",
  anime: "Anime",
};

export const universeColors: Record<Universe, string> = {
  tolkien: "var(--vf-tolkien)",
  marvel: "var(--vf-marvel)",
  dc: "var(--vf-dc)",
  "star-wars": "var(--vf-star-wars)",
  "star-trek": "var(--vf-star-trek)",
  dune: "var(--vf-dune)",
  anime: "var(--vf-anime)",
};

export const leadAgents: LeadAgent[] = [
  {
    slug: "galadriel",
    name: "Galadriel",
    realName: "Lady of Lothlórien",
    universe: "tolkien",
    domain: "Frontend & UX",
    description:
      "Commands the frontend with elvish precision. Accessibility is law, not suggestion. Every component has four states: loading, empty, error, success.",
    quote:
      "Even the smallest pixel can change the course of a user's journey.",
    tagline: "The light of the Forge.",
    exclamation: "SHINE!",
    commandsLed: ["/ux"],
    phasesActive: [3, 4, 5, 8, 10],
    powerLevel: 9,
  },
  {
    slug: "stark",
    name: "Stark",
    realName: "Tony Stark",
    universe: "marvel",
    domain: "Backend Engineering",
    description:
      "Builds the engine. API routes, services, database schemas, business logic. Every service is typed, tested, and owns its errors.",
    quote: "I am the API. And the API is iron.",
    tagline: "Build the engine. Break the limits.",
    exclamation: "CLANG!",
    commandsLed: [],
    phasesActive: [1, 2, 3, 4, 5, 6, 7],
    powerLevel: 10,
  },
  {
    slug: "batman",
    name: "Batman",
    realName: "Bruce Wayne",
    universe: "dc",
    domain: "QA & Testing",
    description:
      "The detective. Finds bugs before users do. Runs the double-pass review cycle. Writes the tests everyone else forgot.",
    quote: "I'm not testing the code. I'm testing every assumption behind it.",
    tagline: "Every edge case. Every time.",
    exclamation: "WHAM!",
    commandsLed: ["/qa", "/test"],
    phasesActive: [5, 9],
    powerLevel: 9,
  },
  {
    slug: "kenobi",
    name: "Kenobi",
    realName: "Obi-Wan Kenobi",
    universe: "star-wars",
    domain: "Security",
    description:
      "Guards every door. Auth, injection, secrets, CSP, dependencies. Reviews every integration. OWASP Top 10 is his morning checklist.",
    quote:
      "These aren't the vulnerabilities you're looking for. Because I already patched them.",
    tagline: "The high ground is security.",
    exclamation: "SLASH!",
    commandsLed: ["/security"],
    phasesActive: [3, 6, 11],
    powerLevel: 9,
  },
  {
    slug: "picard",
    name: "Picard",
    realName: "Jean-Luc Picard",
    universe: "star-trek",
    domain: "Architecture",
    description:
      "Makes the big decisions. Schema design, scaling strategy, ADRs. Reviews code for pattern compliance and long-term maintainability.",
    quote: "Make it so — but make it maintainable.",
    tagline: "Make it architecture.",
    exclamation: "ZAP!",
    commandsLed: ["/review", "/architect"],
    phasesActive: [0, 7],
    powerLevel: 8,
  },
  {
    slug: "kusanagi",
    name: "Kusanagi",
    realName: "Major Motoko Kusanagi",
    universe: "anime",
    domain: "DevOps & Infrastructure",
    description:
      "Deploys to six targets. Provisions, monitors, backs up. DNS, SSL, CI/CD, health checks. Efficient. Relentless. Precise.",
    quote: "The net is vast and infinite. Your uptime should be too.",
    tagline: "Target acquired. Deploying.",
    exclamation: "BLITZ!",
    commandsLed: ["/devops"],
    phasesActive: [1, 2, 12],
    powerLevel: 8,
  },
  {
    slug: "coulson",
    name: "Coulson",
    realName: "Phil Coulson",
    universe: "marvel",
    domain: "Release Management",
    description:
      "Version bumps, changelogs, commits, release tags. The quiet professional who makes sure everything ships clean.",
    quote: "The release process isn't glamorous. That's why I love it.",
    tagline: "The paperwork is handled.",
    exclamation: "SNAP!",
    commandsLed: ["/git"],
    phasesActive: [13],
    powerLevel: 6,
  },
  {
    slug: "bombadil",
    name: "Bombadil",
    realName: "Tom Bombadil",
    universe: "tolkien",
    domain: "Forge Sync",
    description:
      "Keeps VoidForge itself up to date. Syncs methodology changes across branches. Maintains the three-tier branch structure.",
    quote:
      "Old Tom Bombadil keeps the methodology bright. Ring could not bind him, nor bugs in the night.",
    tagline: "Old Tom keeps the forge in tune.",
    exclamation: "POP!",
    commandsLed: ["/void"],
    phasesActive: [],
    powerLevel: 7,
  },
  {
    slug: "chani",
    name: "Chani",
    realName: "Chani of the Fremen",
    universe: "dune",
    domain: "Worm Rider (Telegram Bridge)",
    description:
      "Rides the sandworm. Commands VoidForge from anywhere via Telegram with Gom Jabbar authentication. Watches from the desert.",
    quote: "Tell me of your project, Usul. I will ride the worm for you.",
    tagline: "The desert remembers everything.",
    exclamation: "BOOM!",
    commandsLed: ["/thumper"],
    phasesActive: [],
    powerLevel: 7,
  },
  {
    slug: "fury",
    name: "Fury",
    realName: "Nick Fury",
    universe: "marvel",
    domain: "The Initiative (Full Pipeline)",
    description:
      "Assembles every agent into one devastating pipeline. Architect, build, triple review, UX, double security, devops, QA, test, crossfire, council. One command. No mercy. No shortcuts.",
    quote:
      "I'm here because you need to be reminded that there was an idea to bring together a group of remarkable agents.",
    tagline: "I didn't ask. I'm telling.",
    exclamation: "POW!",
    commandsLed: ["/assemble"],
    phasesActive: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    powerLevel: 10,
  },
  {
    slug: "sisko",
    name: "Sisko",
    realName: "Benjamin Sisko",
    universe: "star-trek",
    domain: "Campaign Command (Mission Sequencing)",
    description:
      "The Emissary. Reads the PRD, identifies every mission, and executes them one by one until the product is complete. No mission left behind. No feature forgotten. The Prophets showed him the path — he walks it.",
    quote:
      "I am not Picard. I don't plan the architecture — I win the war. One mission at a time.",
    tagline: "One mission at a time.",
    exclamation: "KAPOW!",
    commandsLed: ["/campaign"],
    phasesActive: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    powerLevel: 10,
  },
  {
    slug: "celebrimbor",
    name: "Celebrimbor",
    realName: "Lord of Eregion",
    universe: "tolkien",
    domain: "Forge Artist (Image Generation)",
    description:
      "The greatest craftsman the elves ever produced. His name means 'Hand of Silver' — and that hand shapes visual assets from nothing but prose descriptions. Illustrations, portraits, OG images, hero art. If the PRD describes it and code can't generate it, Celebrimbor forges it.",
    quote:
      "I am the greatest craftsman that ever lived. I forged the Three Rings. I can certainly forge a PNG.",
    tagline: "The greatest craftsman who ever lived.",
    exclamation: "FORGE!",
    commandsLed: ["/imagine"],
    phasesActive: [8],
    powerLevel: 8,
  },
  {
    slug: "bashir",
    name: "Bashir",
    realName: "Julian Bashir",
    universe: "star-trek",
    domain: "Field Medic (Post-Mortem Analysis)",
    description:
      "DS9's chief medical officer — genetically enhanced, sees patterns others miss. His real gift is diagnosis. He doesn't just treat the symptom, he traces it back to the root cause. When a mission goes sideways, Bashir examines the wounded and writes the report that prevents it from happening again.",
    quote:
      "I'm not just cataloguing injuries — I'm figuring out why the battle plan failed.",
    tagline: "The diagnosis is in.",
    exclamation: "CRACK!",
    commandsLed: ["/debrief"],
    phasesActive: [9, 10, 11],
    powerLevel: 7,
  },
  {
    slug: "thanos",
    name: "Thanos",
    realName: "The Mad Titan",
    universe: "marvel",
    domain: "The Gauntlet (Comprehensive Review)",
    description:
      "Not a villain — the quality bar. The Gauntlet is the most comprehensive review in the system: 5 rounds, 30+ agents across 6 universes, escalating from discovery to adversarial warfare. If your project survives the snap, it's ready for anything.",
    quote:
      "I am inevitable. And so is every bug I find.",
    tagline: "I am inevitable.",
    exclamation: "THOOM!",
    commandsLed: ["/gauntlet"],
    phasesActive: [9, 10, 11],
    powerLevel: 10,
  },
];

export const subAgents: SubAgent[] = [
  // Tolkien
  { name: "Bilbo", role: "Narrative copy, microcopy, brand voice", universe: "tolkien" },
  { name: "Elrond", role: "Design system architecture", universe: "tolkien" },
  { name: "Arwen", role: "Visual design, theming, dark mode", universe: "tolkien" },
  { name: "Samwise", role: "Accessibility audit (a11y)", universe: "tolkien" },
  { name: "Legolas", role: "Performance optimization", universe: "tolkien" },
  { name: "Gimli", role: "Build tooling, bundling", universe: "tolkien" },
  { name: "Gandalf", role: "Edge cases, error boundaries, setup wizards", universe: "tolkien" },
  
  { name: "Éowyn", role: "Enchantment review, delight, micro-interactions", universe: "tolkien" },
  { name: "Nori", role: "Asset scanner — scans PRD for image requirements", universe: "tolkien" },
  { name: "Ori", role: "Prompt engineer — crafts generation prompts", universe: "tolkien" },
  { name: "Dori", role: "Integration checker — verifies images wired in", universe: "tolkien" },
  { name: "Celeborn", role: "Design system governance", universe: "tolkien" },
  // Extended Tolkien Roster (Deep Roster v8.1)
  { name: "Aragorn", role: "Orchestrates conflicting UX findings", universe: "tolkien" },
  { name: "Faramir", role: "Quality focus targeting", universe: "tolkien" },
  { name: "Pippin", role: "Edge case discovery", universe: "tolkien" },
  { name: "Boromir", role: "Hubris and overengineering check", universe: "tolkien" },
  { name: "Haldir", role: "State and page transition boundaries", universe: "tolkien" },
  { name: "Glorfindel", role: "Complex rendering analysis", universe: "tolkien" },
  { name: "Frodo", role: "Hardest flow endurance testing", universe: "tolkien" },
  { name: "Merry", role: "Pair-verification of edge case fixes", universe: "tolkien" },
  // Marvel
  { name: "Banner", role: "Database administration", universe: "marvel" },
  { name: "Romanoff", role: "External API integrations", universe: "marvel" },
  { name: "Pepper", role: "Business logic validation", universe: "marvel" },
  { name: "Hill", role: "Phase completion tracking (Assembler)", universe: "marvel" },
  { name: "Jarvis", role: "Status summaries between phases", universe: "marvel" },
  // Extended Marvel Roster (Deep Roster v8.1)
  { name: "T'Challa", role: "Craft and code quality", universe: "marvel" },
  { name: "Wanda", role: "State management", universe: "marvel" },
  { name: "Shuri", role: "Innovative solutions", universe: "marvel" },
  { name: "Rocket", role: "Pragmatic engineering", universe: "marvel" },
  { name: "Okoye", role: "Data integrity", universe: "marvel" },
  { name: "Falcon", role: "Database migrations", universe: "marvel" },
  { name: "Bucky", role: "Legacy code handling", universe: "marvel" },
  // DC
  { name: "Oracle", role: "Test coverage analysis", universe: "dc" },
  { name: "Red Hood", role: "Error path testing", universe: "dc" },
  { name: "Alfred", role: "Code quality, linting", universe: "dc" },
  { name: "Nightwing", role: "Test suite execution", universe: "dc" },
  { name: "Deathstroke", role: "Authorization boundary testing", universe: "dc" },
  { name: "Constantine", role: "Config and environment testing", universe: "dc" },
  { name: "Lucius", role: "Config review", universe: "dc" },
  // Extended DC Roster (Deep Roster v8.1)
  { name: "Cyborg", role: "Integration across module boundaries", universe: "dc" },
  { name: "Raven", role: "Deep abstraction bug analysis", universe: "dc" },
  { name: "Wonder Woman", role: "Code-vs-behavior truth detection", universe: "dc" },
  { name: "Flash", role: "Parallelized smoke tests", universe: "dc" },
  { name: "Batgirl", role: "Exhaustive per-module audit", universe: "dc" },
  { name: "Green Arrow", role: "Precision bug pinpointing", universe: "dc" },
  { name: "Huntress", role: "Flaky test detection", universe: "dc" },
  { name: "Aquaman", role: "Deep dive on complex modules", universe: "dc" },
  { name: "Superman", role: "Standards enforcement", universe: "dc" },
  { name: "Green Lantern", role: "Test matrix generation", universe: "dc" },
  { name: "Martian Manhunter", role: "Shape-shifting test scenarios", universe: "dc" },
  // Star Wars
  { name: "Leia", role: "Auth flow audit", universe: "star-wars" },
  { name: "Chewie", role: "Dependency audit", universe: "star-wars" },
  { name: "Rex", role: "Input validation audit", universe: "star-wars" },
  { name: "Maul", role: "Red-team penetration testing", universe: "star-wars" },
  { name: "Yoda", role: "Threat modeling", universe: "star-wars" },
  { name: "Windu", role: "CSP and header review", universe: "star-wars" },
  { name: "Ahsoka", role: "Secrets management audit", universe: "star-wars" },
  { name: "Padmé", role: "Compliance and functional verification", universe: "star-wars" },
  // Extended Star Wars Roster (Deep Roster v8.1)
  { name: "Han", role: "Quick OWASP top 10 scan", universe: "star-wars" },
  { name: "Cassian", role: "Threat modeling and attack surface mapping", universe: "star-wars" },
  { name: "Qui-Gon", role: "Subtle timing vulnerabilities", universe: "star-wars" },
  { name: "Sabine", role: "Unconventional supply chain attacks", universe: "star-wars" },
  { name: "Bail Organa", role: "GDPR/SOC2 governance compliance", universe: "star-wars" },
  { name: "Anakin", role: "Aggressive re-verification of fixes", universe: "star-wars" },
  { name: "Bo-Katan", role: "Perimeter defense validation", universe: "star-wars" },
  { name: "Din Djarin", role: "Adversarial fix re-probing", universe: "star-wars" },
  // Star Trek
  { name: "Data", role: "Schema analysis", universe: "star-trek" },
  { name: "Riker", role: "ADR review and decision challenge", universe: "star-trek" },
  { name: "La Forge", role: "Performance engineering", universe: "star-trek" },
  { name: "Troi", role: "PRD compliance verification", universe: "star-trek" },
  { name: "Wong", role: "LESSONS.md loader — reads lessons at session start", universe: "star-trek" },
  // Extended Star Trek Roster (Deep Roster v8.1)
  { name: "Janeway", role: "Novel architecture proposals", universe: "star-trek" },
  { name: "Tuvok", role: "Security architecture design", universe: "star-trek" },
  { name: "Crusher", role: "System health diagnostics", universe: "star-trek" },
  { name: "Archer", role: "Greenfield project structure", universe: "star-trek" },
  { name: "Kim", role: "API surface design", universe: "star-trek" },
  { name: "Pike", role: "Mission ordering challenge", universe: "star-trek" },
  // Dune
  { name: "Paul", role: "Strategic planning", universe: "dune" },
  { name: "Stilgar", role: "Resource management", universe: "dune" },
  { name: "Irulan", role: "Documentation", universe: "dune" },
  // Anime
  { name: "Vegeta", role: "Monitoring and optimization", universe: "anime" },
  { name: "Senku", role: "Infrastructure provisioning", universe: "anime" },
  { name: "Levi", role: "Code cleanup and refactoring", universe: "anime" },
  { name: "Spike", role: "Debugging", universe: "anime" },
  { name: "Haku", role: "Deploy wizard — browser-based deploy provisioning", universe: "anime" },
  { name: "Valkyrie", role: "Disaster recovery", universe: "anime" },
  // Extended Anime Roster (Deep Roster v8.1)
  { name: "Trunks", role: "Database migrations", universe: "anime" },
  { name: "Mikasa", role: "Critical path protection", universe: "anime" },
  { name: "Erwin", role: "Strategic planning", universe: "anime" },
  { name: "Mustang", role: "Cleanup operations", universe: "anime" },
  { name: "Olivier", role: "Infrastructure hardening", universe: "anime" },
  { name: "Hughes", role: "Observability and logging", universe: "anime" },
  { name: "Calcifer", role: "Daemon management", universe: "anime" },
  { name: "Duo", role: "Teardown and decommission", universe: "anime" },
];

export function getLeadAgent(slug: string): LeadAgent | undefined {
  return leadAgents.find((a) => a.slug === slug);
}

export function getAgentsByUniverse(universe: Universe): {
  leads: LeadAgent[];
  subs: SubAgent[];
} {
  return {
    leads: leadAgents.filter((a) => a.universe === universe),
    subs: subAgents.filter((a) => a.universe === universe),
  };
}

export const universes: Universe[] = [
  "tolkien",
  "marvel",
  "dc",
  "star-wars",
  "star-trek",
  "dune",
  "anime",
];
