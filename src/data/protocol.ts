export interface Phase {
  number: number;
  slug: string;
  name: string;
  lead: string;
  supporting: string[];
  summary: string;
  skipCondition?: string;
}

export const phases: Phase[] = [
  {
    number: 0,
    slug: "orient",
    name: "Orient",
    lead: "Picard",
    supporting: ["All agents read PRD"],
    summary:
      "Read the PRD. Validate frontmatter. Extract architecture. Flag gaps. Write ADRs. This is the mission briefing.",
  },
  {
    number: 1,
    slug: "scaffold",
    name: "Scaffold",
    lead: "Stark",
    supporting: ["Kusanagi"],
    summary:
      "Initialize framework, configs, directory structure, types. Set up the test runner. Every placeholder references the PRD.",
  },
  {
    number: 2,
    slug: "infrastructure",
    name: "Infrastructure",
    lead: "Kusanagi",
    supporting: ["Banner (DB)"],
    summary:
      "Database, Redis, environment config. Verify: dev server starts, DB connects, tests pass.",
  },
  {
    number: 3,
    slug: "auth",
    name: "Auth",
    lead: "Stark",
    supporting: ["Galadriel", "Kenobi (review)"],
    summary:
      "Login, signup, password reset, sessions, middleware, roles. Kenobi reviews every security surface.",
    skipCondition: "auth: no",
  },
  {
    number: 4,
    slug: "core-feature",
    name: "Core Feature",
    lead: "Stark",
    supporting: ["Galadriel"],
    summary:
      "The single most important user journey, built end-to-end as a vertical slice. Schema → API → UI → wire up.",
  },
  {
    number: 5,
    slug: "supporting",
    name: "Supporting Features",
    lead: "Stark",
    supporting: ["Galadriel", "Batman (regression)"],
    summary:
      "Build remaining features in dependency order, one batch at a time. Each batch: build, test, verify, proceed.",
  },
  {
    number: 6,
    slug: "integrations",
    name: "Integrations",
    lead: "Stark",
    supporting: ["Romanoff", "Kenobi (review)"],
    summary:
      "External services: payments, email, file storage, APIs. Each gets a client wrapper, test mode, and error handling.",
    skipCondition: "payments: none, workers: no, email: none",
  },
  {
    number: 7,
    slug: "admin",
    name: "Admin & Ops",
    lead: "Stark",
    supporting: ["Galadriel", "Picard (review)"],
    summary:
      "Dashboard, user management, analytics views, audit logging. The control center for operators.",
    skipCondition: "admin: no",
  },
  {
    number: 8,
    slug: "marketing",
    name: "Marketing Pages",
    lead: "Galadriel",
    supporting: [],
    summary:
      "Homepage, features, pricing, legal pages. SEO meta on every page. Mobile responsive.",
    skipCondition: "marketing: no",
  },
  {
    number: 9,
    slug: "qa",
    name: "QA Audit",
    lead: "Batman",
    supporting: ["Oracle", "Red Hood", "Alfred", "Deathstroke", "Constantine"],
    summary:
      "Full QA pass: test coverage, error handling, edge cases, boundary testing, config review. Double-pass: find → fix → re-verify.",
  },
  {
    number: 10,
    slug: "ux",
    name: "UX Audit",
    lead: "Galadriel",
    supporting: ["Elrond", "Arwen", "Samwise", "Bilbo", "Legolas", "Gimli", "Gandalf"],
    summary:
      "Accessibility, responsive design, loading states, error states, keyboard navigation, focus management. WCAG 2.1 AA compliance.",
  },
  {
    number: 11,
    slug: "security",
    name: "Security Audit",
    lead: "Kenobi",
    supporting: ["Leia", "Chewie", "Rex", "Maul", "Yoda", "Windu", "Ahsoka", "Padmé"],
    summary:
      "OWASP Top 10 scan, auth review, injection testing, secrets audit, dependency audit, CSP review, red-team verification.",
  },
  {
    number: 12,
    slug: "deploy",
    name: "Deploy",
    lead: "Kusanagi",
    supporting: ["Batman (smoke test)"],
    summary:
      "Provision infrastructure, configure DNS/SSL, deploy pipeline, monitoring, backups. Health check must pass.",
  },
  {
    number: 13,
    slug: "launch",
    name: "Launch",
    lead: "All agents",
    supporting: [],
    summary:
      "Final checklist: SSL, email, payments, analytics, monitoring, backups, security headers, legal, performance, mobile, a11y.",
  },
];
