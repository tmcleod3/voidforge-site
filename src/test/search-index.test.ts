import { describe, it, expect } from "vitest";
import { searchIndex } from "@/data/search-index";
import { commands } from "@/data/commands";
import { patterns } from "@/data/patterns";

describe("Search Index — Completeness", () => {
  it("all 9 universe pages are in the search index", () => {
    const universePaths = [
      "/agents/tolkien",
      "/agents/marvel",
      "/agents/dc",
      "/agents/star-wars",
      "/agents/star-trek",
      "/agents/dune",
      "/agents/anime",
      "/agents/cosmere",
      "/agents/foundation",
    ];
    const indexPaths = new Set(searchIndex.map((e) => e.path));
    for (const path of universePaths) {
      expect(indexPaths.has(path)).toBe(true);
    }
  });

  it("all command slugs appear in the search index", () => {
    const indexPaths = new Set(searchIndex.map((e) => e.path));
    for (const cmd of commands) {
      expect(indexPaths.has(`/commands/${cmd.slug}`)).toBe(true);
    }
  });

  it("all pattern slugs appear in the search index", () => {
    const indexPaths = new Set(searchIndex.map((e) => e.path));
    for (const pattern of patterns) {
      expect(indexPaths.has(`/patterns/${pattern.slug}`)).toBe(true);
    }
  });
});

describe("Search Index — Validity", () => {
  it("all entries have paths starting with /", () => {
    for (const entry of searchIndex) {
      expect(entry.path.startsWith("/")).toBe(true);
    }
  });

  it("no duplicate paths in the search index", () => {
    const paths = searchIndex.map((e) => e.path);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it("every entry has a non-empty title and description", () => {
    for (const entry of searchIndex) {
      expect(entry.title.length).toBeGreaterThan(0);
      expect(entry.description.length).toBeGreaterThan(0);
    }
  });

  it("every entry has a non-empty category", () => {
    for (const entry of searchIndex) {
      expect(entry.category.length).toBeGreaterThan(0);
    }
  });
});
