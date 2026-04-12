import { describe, it, expect } from "vitest";
import { leadAgents } from "@/data/agents";
import { commands } from "@/data/commands";
import { patterns } from "@/data/patterns";
import { phases } from "@/data/protocol";
import { shipped, future } from "@/data/releases";

describe("Data Integrity — Agent slugs", () => {
  it("all agent slugs are unique", () => {
    const slugs = leadAgents.map((a) => a.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("has exactly 20 lead agents", () => {
    expect(leadAgents).toHaveLength(20);
  });

  it("every agent has a non-empty slug and name", () => {
    for (const agent of leadAgents) {
      expect(agent.slug.length).toBeGreaterThan(0);
      expect(agent.name.length).toBeGreaterThan(0);
    }
  });
});

describe("Data Integrity — Command slugs", () => {
  it("all command slugs are unique", () => {
    const slugs = commands.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("has at least 27 commands", () => {
    expect(commands.length).toBeGreaterThanOrEqual(27);
  });

  it("every command has a non-empty description", () => {
    for (const cmd of commands) {
      expect(cmd.description.length).toBeGreaterThan(0);
    }
  });

  it("every command has a non-empty whatHappens array", () => {
    for (const cmd of commands) {
      expect(cmd.whatHappens.length).toBeGreaterThan(0);
      for (const step of cmd.whatHappens) {
        expect(step.length).toBeGreaterThan(0);
      }
    }
  });
});

describe("Data Integrity — Pattern slugs", () => {
  it("all pattern slugs are unique", () => {
    const slugs = patterns.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("has at least 37 patterns", () => {
    expect(patterns.length).toBeGreaterThanOrEqual(37);
  });

  it("every pattern has at least one framework tab with non-empty code", () => {
    for (const pattern of patterns) {
      expect(pattern.frameworks.length).toBeGreaterThan(0);
      for (const fw of pattern.frameworks) {
        expect(fw.code.length).toBeGreaterThan(0);
      }
    }
  });
});

describe("Data Integrity — Protocol phase slugs", () => {
  it("all phase slugs are unique", () => {
    const slugs = phases.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("phases are numbered sequentially from 0", () => {
    for (let i = 0; i < phases.length; i++) {
      expect(phases[i].number).toBe(i);
    }
  });
});

describe("Data Integrity — Releases", () => {
  it("all shipped versions are unique", () => {
    const versions = shipped.map((r) => r.version);
    expect(new Set(versions).size).toBe(versions.length);
  });

  it("shipped releases are in chronological order", () => {
    for (let i = 1; i < shipped.length; i++) {
      const prev = new Date(shipped[i - 1].date).getTime();
      const curr = new Date(shipped[i].date).getTime();
      expect(curr).toBeGreaterThanOrEqual(prev);
    }
  });

  it("every shipped release has required fields", () => {
    for (const r of shipped) {
      expect(r.version).toMatch(/^v\d+/);
      expect(r.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(r.title.length).toBeGreaterThan(0);
      expect(r.headline.length).toBeGreaterThan(0);
      expect(r.items.length).toBeGreaterThan(0);
    }
  });

  it("all future versions are unique", () => {
    const versions = future.map((r) => r.version);
    expect(new Set(versions).size).toBe(versions.length);
  });

  it("future release titles do not collide with shipped titles", () => {
    const shippedTitles = new Set(shipped.map((r) => r.title));
    for (const f of future) {
      expect(
        shippedTitles.has(f.title),
        `Future "${f.title}" collides with a shipped release title`
      ).toBe(false);
    }
  });
});

describe("Data Integrity — Cross-references", () => {
  it("agents with commandsLed reference valid command names", () => {
    const validCommandNames = new Set(commands.map((c) => `/${c.slug}`));
    for (const agent of leadAgents) {
      for (const cmd of agent.commandsLed) {
        expect(validCommandNames.has(cmd)).toBe(true);
      }
    }
  });

  it("every command lead is a valid lead agent or 'All agents'", () => {
    const validLeads = new Set(leadAgents.map((a) => a.name));
    validLeads.add("All agents");
    for (const cmd of commands) {
      expect(
        validLeads.has(cmd.lead),
        `Command /${cmd.slug} has lead "${cmd.lead}" which is not a lead agent`
      ).toBe(true);
    }
  });

  it("most lead agents have at least one command assigned", () => {
    // Stark supports phases 1-7 as backend engineer but /build is led by "All agents".
    // Gandalf is the setup wizard — runs via npx voidforge init, not a slash command.
    const agentsWithCommands = leadAgents.filter(
      (a) => a.commandsLed.length > 0
    );
    expect(agentsWithCommands.length).toBeGreaterThanOrEqual(
      leadAgents.length - 2
    );
  });
});
