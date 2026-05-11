/**
 * Pattern groups — extracted from src/app/patterns/page.tsx per ADR-022
 * (lesson learned from /commands page-groups extraction in v2.14.0).
 *
 * Single source of truth for both the page render AND the
 * pattern-rendering completeness test in src/test/consistency.test.ts.
 *
 * Same shape as src/data/command-groups.ts. The /patterns page had the
 * exact same invisibility class as /commands had with /blueprint:
 * patterns added to patterns.ts but missing from any group's slugs[]
 * array would never render as cards on the index page. Caught by the
 * Victory Gauntlet on Site v2.14.0 when 8 v23.10/v23.11 patterns were
 * shipped invisible.
 */

export interface PatternGroup {
  id: string;
  label: string;
  tagline: string;
  color: string;
  slugs: string[];
}

export const patternGroups: PatternGroup[] = [
  {
    id: "web",
    label: "WEB",
    tagline: "The foundation. Every web app starts here.",
    color: "var(--vf-electric-blue)",
    slugs: [
      "api-route", "service", "component", "middleware", "error-handling",
      "job-queue", "multi-tenant", "sse-endpoint", "third-party-script", "combobox",
    ],
  },
  {
    id: "mobile",
    label: "MOBILE",
    tagline: "Take the forge mobile.",
    color: "var(--vf-neon-green)",
    slugs: ["mobile-screen", "mobile-service"],
  },
  {
    id: "game",
    label: "GAME",
    tagline: "Real-time. Frame-perfect.",
    color: "var(--vf-forge-orange)",
    slugs: ["game-loop", "game-state", "game-entity"],
  },
  {
    id: "systems",
    label: "SYSTEMS",
    tagline: "Infrastructure that runs itself.",
    color: "var(--vf-deep-purple)",
    slugs: [
      "ad-platform-adapter", "financial-transaction", "daemon-process",
      "revenue-source-adapter", "oauth-token-lifecycle", "outbound-rate-limiter",
      "database-migration", "data-pipeline", "backtest-engine", "execution-safety",
      "e2e-test", "browser-review", "stablecoin-adapter", "ad-billing-adapter",
      "funding-plan", "kongo-integration",
      // v23.10/v23.11 additions:
      "audit-log", "deploy-preflight",
      "multi-tenant-pool-bypass", "multi-tenant-property-test",
    ],
  },
  {
    id: "ai",
    label: "AI",
    tagline: "The intelligence layer.",
    color: "var(--vf-foundation)",
    slugs: [
      "ai-orchestrator", "ai-classifier", "ai-router", "prompt-template",
      "ai-eval", "ai-tool-schema",
      // v23.11 additions:
      "ai-prompt-safety", "llm-state-dedup",
    ],
  },
  {
    id: "discipline",
    // The only group label that's a virtue rather than a domain — intentional.
    // These patterns are methodology artifacts (markdown reference docs), not
    // technology categories. Renaming to "DOCS" or "PROCESS" was considered
    // and rejected: those imply documentation/process about something else;
    // these patterns ARE the discipline. Keep the virtue framing.
    label: "DISCIPLINE",
    tagline: "Engineering discipline. The shapes that keep work shippable.",
    // var(--vf-forge-yellow) — distinct from RECON OPS's --vf-comic-red on
    // the /commands page. These are different pages, but using the same
    // color across surfaces was unintentional collision (Lang found it).
    color: "var(--vf-forge-yellow)",
    slugs: [
      // v23.11 additions — markdown reference patterns, not code:
      "adr-verification-gate", "refactor-extraction",
    ],
  },
];

/** Flat set of every slug across every group — used by completeness tests. */
export const allGroupedPatternSlugs = new Set<string>(
  patternGroups.flatMap((g) => g.slugs),
);
