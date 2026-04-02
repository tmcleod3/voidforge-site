import { describe, it, expect } from "vitest";
import { readdirSync, existsSync } from "fs";
import { resolve } from "path";
import { patterns } from "@/data/patterns";
import { commands } from "@/data/commands";
import { leadAgents, universes } from "@/data/agents";
import { searchIndex } from "@/data/search-index";

const ROOT = resolve(__dirname, "../..");

describe("Consistency — Pattern files ↔ patterns.ts", () => {
  const patternDir = resolve(ROOT, "docs/patterns");
  const patternFiles = readdirSync(patternDir)
    .filter((f) => f.endsWith(".ts") || f.endsWith(".tsx"))
    .map((f) => f.replace(/\.tsx?$/, ""));
  const patternSlugs = new Set(patterns.map((p) => p.slug));

  it("every pattern in patterns.ts has a file in docs/patterns/", () => {
    for (const p of patterns) {
      const hasFile =
        existsSync(resolve(patternDir, `${p.slug}.ts`)) ||
        existsSync(resolve(patternDir, `${p.slug}.tsx`));
      expect(hasFile, `Missing file for pattern: ${p.slug}`).toBe(true);
    }
  });

  it("every file in docs/patterns/ has an entry in patterns.ts", () => {
    for (const file of patternFiles) {
      expect(
        patternSlugs.has(file),
        `Orphaned pattern file: docs/patterns/${file}.ts(x) — not in patterns.ts`
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
