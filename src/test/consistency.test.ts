import { describe, it, expect } from "vitest";
import { readdirSync, existsSync } from "fs";
import { resolve } from "path";
import { patterns } from "@/data/patterns";
import { commands } from "@/data/commands";
import { leadAgents, universes, universeLabels } from "@/data/agents";
import { searchIndex } from "@/data/search-index";
import { stats } from "@/data/stats";
import { commandGroups, allGroupedCommandSlugs } from "@/data/command-groups";
import { patternGroups, allGroupedPatternSlugs } from "@/data/pattern-groups";

const ROOT = resolve(__dirname, "../..");

describe("Consistency — Pattern files ↔ patterns.ts", () => {
  const patternDir = resolve(ROOT, "docs/patterns");
  const patternFiles = readdirSync(patternDir)
    .filter((f) => /\.(tsx?|md)$/.test(f))
    .filter((f) => f !== "README.md")
    .map((f) => f.replace(/\.(tsx?|md)$/, ""));
  const patternSlugs = new Set(patterns.map((p) => p.slug));

  it("every pattern in patterns.ts has a file in docs/patterns/", () => {
    for (const p of patterns) {
      const hasFile =
        existsSync(resolve(patternDir, `${p.slug}.ts`)) ||
        existsSync(resolve(patternDir, `${p.slug}.tsx`)) ||
        existsSync(resolve(patternDir, `${p.slug}.md`));
      expect(hasFile, `Missing file for pattern: ${p.slug}`).toBe(true);
    }
  });

  it("every file in docs/patterns/ has an entry in patterns.ts", () => {
    for (const file of patternFiles) {
      expect(
        patternSlugs.has(file),
        `Orphaned pattern file: docs/patterns/${file}.{ts,tsx,md} — not in patterns.ts`
      ).toBe(true);
    }
  });
});

describe("Consistency — Command files ↔ commands.ts", () => {
  const commandDir = resolve(ROOT, ".claude/commands");
  const commandFiles = readdirSync(commandDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
  const commandSlugs = new Set(commands.map((c) => c.slug));

  it("every command in commands.ts has a file in .claude/commands/", () => {
    for (const c of commands) {
      const hasFile = existsSync(resolve(commandDir, `${c.slug}.md`));
      expect(hasFile, `Missing file for command: ${c.slug}`).toBe(true);
    }
  });

  it("every .md in .claude/commands/ has an entry in commands.ts", () => {
    for (const file of commandFiles) {
      expect(
        commandSlugs.has(file),
        `Orphaned command file: .claude/commands/${file}.md — not in commands.ts`
      ).toBe(true);
    }
  });
});

describe("Consistency — Agent avatar images", () => {
  it("every lead agent has an avatar image", () => {
    for (const agent of leadAgents) {
      const imgPath = resolve(ROOT, `public/images/agents/${agent.slug}.webp`);
      expect(
        existsSync(imgPath),
        `Missing avatar: public/images/agents/${agent.slug}.webp`
      ).toBe(true);
    }
  });
});

describe("Consistency — Search index covers all pages", () => {
  const indexPaths = new Set(searchIndex.map((e) => e.path));

  it("all universe pages are in the search index", () => {
    for (const u of universes) {
      expect(
        indexPaths.has(`/agents/${u}`),
        `Missing search entry: /agents/${u}`
      ).toBe(true);
    }
  });

  it("all lead agent pages are in the search index", () => {
    for (const a of leadAgents) {
      expect(
        indexPaths.has(`/agents/${a.slug}`),
        `Missing search entry: /agents/${a.slug}`
      ).toBe(true);
    }
  });

  it("all command pages are in the search index", () => {
    for (const c of commands) {
      expect(
        indexPaths.has(`/commands/${c.slug}`),
        `Missing search entry: /commands/${c.slug}`
      ).toBe(true);
    }
  });

  it("all pattern pages are in the search index", () => {
    for (const p of patterns) {
      expect(
        indexPaths.has(`/patterns/${p.slug}`),
        `Missing search entry: /patterns/${p.slug}`
      ).toBe(true);
    }
  });

  it("hub pages are in the search index", () => {
    const hubs = [
      "/tutorial",
      "/protocol",
      "/agents",
      "/commands",
      "/patterns",
      "/prophecy",
      "/about",
    ];
    for (const hub of hubs) {
      expect(
        indexPaths.has(hub),
        `Missing search entry for hub: ${hub}`
      ).toBe(true);
    }
  });
});

describe("Consistency — Pattern groups cover all patterns (ADR-022 Phase 2, bidirectional)", () => {
  it("every pattern in patterns.ts appears in at least one group's slugs", () => {
    for (const p of patterns) {
      expect(
        allGroupedPatternSlugs.has(p.slug),
        `Pattern /patterns/${p.slug} is in patterns.ts but not in any group in src/data/pattern-groups.ts — its card will never render on /patterns. Add it to the appropriate group (web/mobile/game/systems/ai/discipline).`
      ).toBe(true);
    }
  });

  it("every slug in pattern-groups.ts references a real pattern", () => {
    const patternSlugs = new Set(patterns.map((p) => p.slug));
    for (const slug of allGroupedPatternSlugs) {
      expect(
        patternSlugs.has(slug),
        `Group slug "${slug}" in src/data/pattern-groups.ts has no matching pattern in patterns.ts — remove the stale slug.`
      ).toBe(true);
    }
  });

  it("pattern group ids are unique", () => {
    const ids = patternGroups.map((g) => g.id);
    const unique = new Set(ids);
    expect(unique.size, `Duplicate pattern group ids: ${ids.join(", ")}`).toBe(ids.length);
  });
});

describe("Consistency — Command groups cover all commands (ADR-022 Phase 2, bidirectional)", () => {
  it("every command in commands.ts appears in at least one group's slugs", () => {
    for (const cmd of commands) {
      expect(
        allGroupedCommandSlugs.has(cmd.slug),
        `Command /${cmd.slug} is in commands.ts but not in any group in src/data/command-groups.ts — its card will never render on /commands. Add it to the appropriate group.`
      ).toBe(true);
    }
  });

  it("every slug in command-groups.ts references a real command", () => {
    const commandSlugs = new Set(commands.map((c) => c.slug));
    for (const slug of allGroupedCommandSlugs) {
      expect(
        commandSlugs.has(slug),
        `Group slug "${slug}" in src/data/command-groups.ts has no matching command in commands.ts — remove the stale slug.`
      ).toBe(true);
    }
  });

  it("command group ids are unique", () => {
    const ids = commandGroups.map((g) => g.id);
    const unique = new Set(ids);
    expect(unique.size, `Duplicate command group ids: ${ids.join(", ")}`).toBe(ids.length);
  });
});

describe("Consistency — stats.ts scalars (ADR-022 Phase 1)", () => {
  it("totalMethodDocs matches docs/methods/*.md file count", () => {
    const methodDir = resolve(ROOT, "docs/methods");
    const actual = readdirSync(methodDir).filter((f) => f.endsWith(".md")).length;
    expect(
      stats.totalMethodDocs,
      `stats.totalMethodDocs is ${stats.totalMethodDocs} but docs/methods/ has ${actual} .md files — bump the value in src/data/stats.ts`
    ).toBe(actual);
  });

  it("totalADRs is a plausible scalar (>= 60, never zero)", () => {
    // Cannot verify against local files — docs/adrs/ in this repo only contains
    // site-scoped ADRs (~22); the scalar mirrors the upstream methodology scaffold.
    // This test guards against accidental zeroing or reset during /void.
    expect(
      stats.totalADRs,
      "totalADRs dropped below 60 — check src/data/stats.ts after /void sync"
    ).toBeGreaterThanOrEqual(60);
    expect(typeof stats.totalADRs).toBe("number");
  });

  it("totalScaffoldTests is a plausible scalar (>= 1000, never zero)", () => {
    // Cannot verify against local source — scaffold tests don't run here.
    // Guards against accidental zeroing. Last known value: 1,384 (v23.9.0).
    expect(
      stats.totalScaffoldTests,
      "totalScaffoldTests dropped below 1000 — check src/data/stats.ts after /void sync"
    ).toBeGreaterThanOrEqual(1000);
    expect(typeof stats.totalScaffoldTests).toBe("number");
  });

  it("totalPages is a plausible scalar (>= 100, never zero)", () => {
    // The Verify-page-count CI step asserts the exact built page count
    // matches what `find out -name '*.html'` returns. This unit-test guard
    // catches accidental zeroing or under-floor values without rebuilding.
    expect(
      stats.totalPages,
      "totalPages dropped below 100 — check src/data/stats.ts; the Verify-page-count CI step's floor is 100"
    ).toBeGreaterThanOrEqual(100);
    expect(typeof stats.totalPages).toBe("number");
  });
});

describe("Consistency — Universe labels ↔ search index (ADR-022 Phase 2, bidirectional)", () => {
  const universeIndexEntries = searchIndex.filter((e) =>
    e.title.endsWith(" Universe")
  );

  it("every Universe key in agents.ts has a matching search-index entry", () => {
    const indexTitles = new Set(universeIndexEntries.map((e) => e.title));
    for (const key of universes) {
      const expected = `${universeLabels[key]} Universe`;
      expect(
        indexTitles.has(expected),
        `Universe "${key}" → label "${universeLabels[key]}" → expected search-index title "${expected}" not found. Fix src/data/search-index.ts or src/data/agents.ts universeLabels.`
      ).toBe(true);
    }
  });

  it("every '<X> Universe' search-index entry references a known universe label", () => {
    const knownLabels = new Set(
      universes.map((k) => `${universeLabels[k]} Universe`)
    );
    for (const entry of universeIndexEntries) {
      expect(
        knownLabels.has(entry.title),
        `Search-index entry "${entry.title}" has no matching Universe key in agents.ts — either rename it or add the universe key.`
      ).toBe(true);
    }
  });
});
