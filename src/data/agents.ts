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
    commandsLed: ["/assemble"],
    phasesActive: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
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
  { name: "Gandalf", role: "Edge case handling, error boundaries", universe: "tolkien" },
  { name: "Merlin", role: "Setup wizards, onboarding flows", universe: "tolkien" },
  // Marvel
  { name: "Banner", role: "Database administration", universe: "marvel" },
  { name: "Romanoff", role: "External API integrations", universe: "marvel" },
  { name: "Pepper", role: "Business logic validation", universe: "marvel" },
  // DC
  { name: "Oracle", role: "Test coverage analysis", universe: "dc" },
  { name: "Red Hood", role: "Error path testing", universe: "dc" },
  { name: "Alfred", role: "Code quality, linting", universe: "dc" },
  { name: "Nightwing", role: "Test suite execution", universe: "dc" },
  { name: "Deathstroke", role: "Authorization boundary testing", universe: "dc" },
  { name: "Constantine", role: "Config and environment testing", universe: "dc" },
  { name: "Lucius", role: "Config review", universe: "dc" },
  // Star Wars
  { name: "Leia", role: "Auth flow audit", universe: "star-wars" },
  { name: "Chewie", role: "Dependency audit", universe: "star-wars" },
  { name: "Rex", role: "Input validation audit", universe: "star-wars" },
  { name: "Maul", role: "Red-team penetration testing", universe: "star-wars" },
  { name: "Yoda", role: "Threat modeling", universe: "star-wars" },
  { name: "Windu", role: "CSP and header review", universe: "star-wars" },
  { name: "Ahsoka", role: "Secrets management audit", universe: "star-wars" },
  { name: "Padmé", role: "Compliance review", universe: "star-wars" },
  // Star Trek
  { name: "Data", role: "Schema analysis", universe: "star-trek" },
  { name: "Riker", role: "API design review", universe: "star-trek" },
  { name: "La Forge", role: "Performance engineering", universe: "star-trek" },
  // Dune
  { name: "Paul", role: "Strategic planning", universe: "dune" },
  { name: "Stilgar", role: "Resource management", universe: "dune" },
  { name: "Irulan", role: "Documentation", universe: "dune" },
  // Anime
  { name: "Vegeta", role: "Monitoring and optimization", universe: "anime" },
  { name: "Senku", role: "Infrastructure provisioning", universe: "anime" },
  { name: "Levi", role: "Code cleanup and refactoring", universe: "anime" },
  { name: "Spike", role: "Debugging", universe: "anime" },
  { name: "Strange", role: "Deploy wizard", universe: "anime" },
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
