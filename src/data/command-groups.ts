/**
 * Command groups — extracted from src/app/commands/page.tsx per ADR-022 Phase 2.
 *
 * Single source of truth for both the page render AND the
 * group-rendering completeness test in src/test/consistency.test.ts.
 *
 * Why: the /blueprint, /sentinel, /engage invisibility class of bugs
 * all share the same shape — entry exists in commands.ts but is missing
 * from a group's slugs array, so the card never renders. Centralizing
 * the slugs array here means a test can import this module directly
 * and assert bidirectional coverage against commands.ts.
 */

export interface CommandGroup {
  id: string;
  label: string;
  tagline: string;
  color: string;
  slugs: string[];
}

export const commandGroups: CommandGroup[] = [
  {
    id: "strike",
    label: "STRIKE OPS",
    tagline: "Type one command. Watch the forge ignite.",
    color: "var(--vf-forge-orange)",
    slugs: ["build", "assemble", "campaign", "imagine", "prd", "blueprint"],
  },
  {
    id: "growth",
    label: "FIELD OPS",
    tagline: "Build it. Then grow it.",
    color: "var(--vf-neon-green)",
    slugs: ["grow", "cultivation", "current", "treasury", "portfolio"],
  },
  {
    id: "recon",
    label: "RECON OPS",
    tagline: "Trust nothing. Verify everything.",
    color: "var(--vf-comic-red)",
    slugs: ["qa", "test", "engage", "review", "ux", "sentinel", "security", "gauntlet", "assess", "ai", "audit-docs"],
  },
  {
    id: "base",
    label: "BASE OPS",
    tagline: "Run the forge. Sharpen the blade.",
    color: "var(--vf-electric-blue)",
    slugs: ["devops", "deploy", "architect", "git", "void", "vault", "thumper", "debrief", "dangerroom"],
  },
];

/** Flat set of every slug across every group — used by completeness tests. */
export const allGroupedCommandSlugs = new Set<string>(
  commandGroups.flatMap((g) => g.slugs),
);
