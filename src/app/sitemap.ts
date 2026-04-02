import type { MetadataRoute } from "next";
import { commands } from "@/data/commands";
import { patterns } from "@/data/patterns";
import { leadAgents, universes } from "@/data/agents";

export const dynamic = "force-static";

const BASE_URL = "https://voidforge.build";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/tutorial`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/protocol`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/agents`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/commands`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/patterns`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/prophecy`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/forge-labs`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  // Tutorial pages
  const tutorialSlugs = [
    "install", "first-build", "deploy", "wizard", "blueprint", "scaffold",
    "import", "prd", "campaign", "gauntlet", "imagine", "cultivation",
    "grow", "treasury", "dangerroom",
  ];
  const tutorials: MetadataRoute.Sitemap = tutorialSlugs.map((slug) => ({
    url: `${BASE_URL}/tutorial/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Protocol phase pages
  const phaseSlugs = [
    "orient", "scaffold", "infrastructure", "auth", "core-feature",
    "supporting", "integrations", "admin", "marketing", "qa", "ux",
    "security", "deploy", "launch",
  ];
  const phases: MetadataRoute.Sitemap = phaseSlugs.map((slug) => ({
    url: `${BASE_URL}/protocol/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Agent pages (leads + universes)
  const agentPages: MetadataRoute.Sitemap = [
    ...leadAgents.map((a) => ({
      url: `${BASE_URL}/agents/${a.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...universes.map((u) => ({
      url: `${BASE_URL}/agents/${u}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  // Command pages
  const commandPages: MetadataRoute.Sitemap = commands.map((c) => ({
    url: `${BASE_URL}/commands/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Pattern pages
  const patternPages: MetadataRoute.Sitemap = patterns.map((p) => ({
    url: `${BASE_URL}/patterns/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...tutorials,
    ...phases,
    ...agentPages,
    ...commandPages,
    ...patternPages,
  ];
}
