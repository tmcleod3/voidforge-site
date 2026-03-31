# VoidForge.dev — Product Requirements Document

> **"From nothing, everything."**
> This page was built by the Forge itself. Galadriel wrote the frontend. Bilbo wrote the copy. Stark wired the API. Batman tested every link. Kenobi checked every door. Picard approved the architecture. Kusanagi deployed it. Coulson tagged the release. Bombadil made sure VoidForge stayed sharp the whole time. Chani watched from the desert.
> Built by Thomas McLeod. Forged by 260+ AI agents across 9 fictional universes.

> **📋 Document Status (March 2026, updated 2026-03-30):** This PRD was written in March 2024 and describes VoidForge.build at its original launch scope. The site has since grown from 97 planned pages to 131 generated pages (28 route templates), from 8 to 9 universes (Foundation added in v16.0.0), from 17 to 18 lead agents (Hari Seldon), from 24 to 27 commands (/deploy, /ai, /vault), and from 20 to 40 code patterns. Growth & Operations tools (Cultivation, Treasury, Grow, Danger Room) were added beyond original scope and are marked as **Forge Labs** (experimental). Tutorial section expanded from 3 to 15 pages. Content architecture diverged from original MDX plan — content lives in `src/data/*.ts` TypeScript data files and page component JSX, not a `content/` MDX directory. Deployment is via Vercel CLI (`npx vercel --prod`), not Git-integrated auto-deploy. Current live stats are always at [/prophecy](https://voidforge.build/prophecy). Key counts below have been updated to reflect March 2026 reality.

---

## Frontmatter

```yaml
# Project identity
name: "voidforge-site"
type: "static-site"

# Stack
framework: "next.js"
database: "none"
cache: "none"
styling: "tailwind"

# Feature flags
auth: no
payments: none
workers: no
admin: no
marketing: yes
email: none

# Deployment
deploy: "vercel"
hostname: "voidforge.build"
```

---

## 1. Product Vision

- **Name:** VoidForge.build (alternate candidates considered: ForgeManual.dev, VoidForgeHQ.com, VoidForge.dev — VoidForge.build selected as the canonical brand domain)
- **One-liner:** The complete guide to building production apps with 260+ AI agents.
- **What it does:** VoidForge.build is the landing page, tutorial hub, and reference manual for the VoidForge open-source methodology framework. It teaches developers how to install VoidForge, understand the 13-phase build protocol, use all 26 slash commands, and leverage a roster of 260+ named AI agents (18 leads) across 9 fictional universes to ship full-stack applications from a single Product Requirements Document. The site is itself built by VoidForge — a self-referential proof of the system's capability.
- **Who it's for:** Developers and technical founders who use Claude Code (or want to start) and want a structured, repeatable process for turning a PRD into a deployed production application. They're comfortable on the command line, they've probably cloned a GitHub repo before, and they want their AI coding workflow to go from "vibes" to "protocol."
- **Brand personality:** Kooky, mythic, irreverent. Think pulp sci-fi novel covers from the 1950s colliding with 90s comic book action panels and Tolkien's maps. The vibe is Roy Lichtenstein painting a starship bridge while Gandalf debugs the warp core. It is NOT corporate. It is NOT minimalist. It is NOT a typical developer docs site. It is loud, colorful, character-driven, and FUN — but the content underneath is dead serious and production-grade.

---

## 2. System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        Vercel Edge Network                       │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │                    Next.js Static Export                     │ │
│  │                                                             │ │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌───────────┐  │ │
│  │  │  Landing  │  │ Tutorial │  │  Agents  │  │ Reference │  │ │
│  │  │  (Hero +  │  │  (Step-  │  │  (140+   │  │ (Commands │  │ │
│  │  │  Mission) │  │   by-    │  │  Roster  │  │  + API)   │  │ │
│  │  │          │  │  Step)   │  │  Cards)  │  │           │  │ │
│  │  └──────────┘  └──────────┘  └──────────┘  └───────────┘  │ │
│  │                                                             │ │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌───────────┐  │ │
│  │  │ Protocol │  │ Patterns │  │  About   │  │ Prophecy  │  │ │
│  │  │ (13      │  │ (7 Code  │  │ (Tom +   │  │ (Roadmap) │  │ │
│  │  │  Phases) │  │  Refs)   │  │  Story)  │  │           │  │ │
│  │  └──────────┘  └──────────┘  └──────────┘  └───────────┘  │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                   │
│  ┌──────────────────────┐  ┌──────────────────────┐              │
│  │  GitHub API (badges, │  │  Cloudflare DNS       │              │
│  │  star count, release)│  │  (voidforge.build)      │              │
│  └──────────────────────┘  └──────────────────────┘              │
└─────────────────────────────────────────────────────────────────┘
```

### Route Structure

```
/                           → Landing page: hero, mission statement, feature highlights, install CTA
/tutorial                   → Step-by-step tutorial: install → first project → deploy (The Forge walkthrough)
/tutorial/install           → Installation deep-dive: 3 tiers, prerequisites, troubleshooting
/tutorial/first-build       → First build walkthrough: writing a PRD, running /build, what happens
/tutorial/deploy            → Deployment walkthrough: Haku wizard, 6 targets, going live
/protocol                   → The 13-phase build protocol explained phase-by-phase
/protocol/[phase-slug]      → Individual phase detail page (13 pages: orient, scaffold, infrastructure, auth, core-feature, supporting, integrations, admin, marketing, qa, ux, security, deploy, launch)
/agents                     → The Council: all 18 lead agents with universe breakdowns
/agents/[universe-slug]     → Universe detail page (9 pages: tolkien, marvel, dc, star-wars, star-trek, dune, anime, cosmere, foundation)
/agents/[agent-slug]        → Individual agent profile page (18 leads: galadriel, stark, batman, kenobi, picard, kusanagi, coulson, bombadil, chani, fury, sisko, celebrimbor, bashir, thanos, kelsier, dockson, tuvok, seldon)
/commands                   → All 26 slash commands with usage, examples, agent assignments
/commands/[command-slug]    → Individual command page (26 pages: build, qa, test, security, ux, review, devops, architect, git, void, thumper, assemble, campaign, imagine, debrief, gauntlet, prd, grow, treasury, portfolio, cultivation, current, dangerroom, assess, deploy, ai)
/patterns                   → 35 code patterns overview with framework tabs
/patterns/[pattern-slug]    → Individual pattern page (35 pages: api-route, service, component, middleware, error-handling, job-queue, multi-tenant, and 28 more)
/prophecy                   → The roadmap (what's shipped, what's next, what's far out)
/about                      → Thomas McLeod bio, project story, "built by the Forge" narrative
/github                     → Redirect to https://github.com/tmcleod3/voidforge
```

### Service Boundaries

This is a static site. There are no backend services. All content is compiled at build time from markdown source files. The only external runtime dependency is optional GitHub API calls for live star count and latest release badge (fetched client-side with stale-while-revalidate caching, 5-minute TTL).

---

## 3. Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| **Framework** | Next.js 15 (App Router, static export) | Industry standard React framework. Static export (`output: 'export'`) means zero server costs, edge-cached globally on Vercel. App Router enables clean file-based routing for the deep page hierarchy. |
| **Styling** | Tailwind CSS 4 + custom CSS for comic/pulp effects | Tailwind for layout speed and responsive utilities. Custom CSS for the heavy aesthetic work: halftone patterns, Lichtenstein-style ben-day dots, pulp gradients, comic panel borders, speech bubbles, and starburst shapes that Tailwind can't express alone. |
| **Animation** | Framer Motion | Smooth page transitions, scroll-triggered reveals, parallax effects for the sci-fi aesthetic. Panel "slam" animations for comic-style reveals. Agent card hover effects. |
| **Syntax Highlighting** | Shiki (via `@shikijs/rehype`) | Static syntax highlighting at build time. No client-side JS for code blocks. Supports custom themes to match the comic aesthetic. |
| **Markdown Processing** | MDX via `@next/mdx` + remark/rehype plugins | Tutorial and reference content authored in MDX for component embedding. Remark-gfm for tables, rehype-slug + rehype-autolink-headings for navigation. |
| **Icons** | Lucide React | Consistent, tree-shakeable icon set. Supplemented by custom SVG illustrations for agent avatars and universe emblems. |
| **Fonts** | Bangers (display/headers), Space Mono (code), Inter (body) | Bangers = comic book impact. Space Mono = terminal/code feel. Inter = readable body text that doesn't fight the loud design. All loaded via `next/font/google` for zero layout shift. |
| **Analytics** | Plausible (self-hosted or cloud) | Privacy-respecting, no cookies, lightweight (<1KB script). Tracks page views and custom events without GDPR concerns. |
| **Hosting** | Vercel | Free tier handles static sites with global CDN, automatic HTTPS, preview deploys on PR. Zero config for Next.js projects. |
| **DNS** | Cloudflare (nameserver delegation to Vercel) | Already using Cloudflare for DNS across Tom's projects. A record to Vercel (76.76.21.21) for voidforge.build. |
| **Source Content** | Pulled from VoidForge repo at build time | Tutorial text, agent descriptions, command docs, and pattern code are sourced from the actual repo files (HOLOCRON.md, NAMING_REGISTRY.md, etc.) to ensure docs never drift from source. |

### All Dependencies

```json
{
  "dependencies": {
    "@mdx-js/react": "^3.0.0",
    "@next/mdx": "^15.0.0",
    "@shikijs/rehype": "^3.0.0",
    "clsx": "^2.0.0",
    "framer-motion": "^11.0.0",
    "fuse.js": "^7.1.0",
    "lucide-react": "^0.400.0",
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "rehype-autolink-headings": "^7.0.0",
    "rehype-slug": "^6.0.0",
    "remark-gfm": "^4.0.0",
    "shiki": "^3.0.0",
    "tailwind-merge": "^3.0.0"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.0.0",
    "@tailwindcss/postcss": "^4.2.1",
    "@testing-library/jest-dom": "^6.0.0",
    "@testing-library/react": "^16.0.0",
    "@types/mdx": "^2.0.0",
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.0.0",
    "eslint": "^9.0.0",
    "eslint-config-next": "^15.0.0",
    "jsdom": "^26.0.0",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.5.0",
    "vitest": "^3.0.0"
  }
}
```

---

## 4. Core Features

### Feature 1: Landing Page (The Hero)

**User flow:**
1. User arrives at voidforge.build (from GitHub README link, social media, or search)
2. Full-viewport hero section loads with animated comic-panel layout: VoidForge logo rendered in pulp sci-fi title treatment, animated starburst behind it, tagline "From nothing, everything." in Bangers font
3. Scroll reveals a 3-panel comic strip that summarizes the pitch: Panel 1 — "DROP IN A PRD" (shows a document falling into a glowing forge), Panel 2 — "260+ AGENTS BUILD IT" (shows the 18 lead agents in action-pose silhouettes), Panel 3 — "SHIP TO PRODUCTION" (shows a rocket launching with a green checkmark)
4. Below the strip: quick-start install command with copy button, GitHub star count badge, latest version badge
5. Scroll further: 6 feature cards in a 2x3 grid (13-Phase Protocol, 260+ Named Agents, 26 Slash Commands, 35 Code Patterns, 6 Deploy Targets, 3 Tiers). Each card has a Lichtenstein-style halftone background, bold heading, 2-sentence description, and link to the relevant deep page
6. Footer: "Built by VoidForge. Written by Bilbo. Designed by Galadriel. Tested by Batman. Deployed by Kusanagi. Created by Thomas McLeod." with GitHub link and LinkedIn link

**Data model:** None — all static content.

**API endpoints:** None.

**UI description:**

- **Loading state:** Skeleton with pulsing halftone-dot pattern in the comic panel frames. Appears for <200ms on fast connections.
- **Empty state:** N/A — content is static, always present.
- **Error state:** If GitHub API badge fetch fails, badges show "★ GitHub" and "v3.3.0" as static fallbacks (hardcoded at build time from package.json).
- **Success state:** Full page renders with animations. Hero animation plays once on load (starburst expands, title slams in from left like a comic sound effect). Scroll-triggered reveals for subsequent sections use fade-up with 100ms stagger between cards.

**Edge cases:**
- JavaScript disabled: All content is server-rendered HTML. Animations don't play, but all content is visible and readable. Copy button falls back to showing the text in a `<code>` block the user can manually select.
- Mobile viewport (<768px): 3-panel comic strip stacks vertically (1 panel per row). Feature grid becomes 1 column. Hero title scales down but remains in Bangers font.
- Reduced motion preference (`prefers-reduced-motion: reduce`): All Framer Motion animations are disabled. Content appears immediately without transitions.

---

### Feature 2: Tutorial Hub (The Forge Walkthrough)

**User flow:**
1. User clicks "Get Started" from landing page or navigates to /tutorial
2. Tutorial hub page shows a 3-step journey: Install → First Build → Deploy, presented as a comic-book "quest map" with dotted path connecting 3 illustrated waypoints
3. Each waypoint links to its deep-dive page
4. /tutorial/install covers: prerequisites (Node.js 18+, Claude Code), the 3 tiers (Full, Scaffold, Core) with exact install commands, what each tier includes, and troubleshooting for common install issues
5. /tutorial/first-build covers: writing your first PRD (with the PRD template shown inline with annotations), running `/build`, what happens during each of the 13 phases (abbreviated), reading the build journal, and session recovery
6. /tutorial/deploy covers: the Haku wizard (Full tier), manual deploy for Scaffold/Core, all 6 deploy targets with exact commands, health check verification

**Data model:** None — MDX content files.

**API endpoints:** None.

**UI description:**

- Each tutorial page has: a comic-panel header illustration (unique per page), a progress indicator showing where you are in the 3-step journey, a table of contents sidebar (desktop) or collapsible TOC (mobile), and "Previous / Next" navigation at the bottom
- Code blocks use the custom Shiki theme with a terminal-green-on-dark aesthetic
- Callout boxes styled as speech bubbles from relevant agents: Merlin speaks during install, Picard during build orientation, Kusanagi during deploy
- **Loading state:** Page shell with skeleton text blocks in halftone pattern
- **Empty state:** N/A
- **Error state:** N/A (static content)
- **Success state:** Full tutorial page with syntax-highlighted code, agent speech bubbles, and interactive copy buttons on all code blocks

**Edge cases:**
- Deep-linking to a specific heading (e.g., /tutorial/install#scaffold-tier) works via rehype-slug anchor IDs
- Code blocks longer than 20 lines get a "Show more / Show less" toggle, collapsed by default
- Mobile: sidebar TOC collapses into a sticky top bar with a dropdown

---

### Feature 3: Protocol Explorer (The 13 Phases)

**User flow:**
1. User navigates to /protocol
2. Sees a vertical timeline visualization styled as a sci-fi "mission sequence" — 13 numbered phases connected by a glowing pipeline, each with the lead agent's silhouette, phase name, and a 1-sentence summary
3. Clicking any phase expands it inline (accordion) or links to /protocol/[phase-slug] for the full detail
4. Each phase detail page shows: lead agent and supporting agents (with links to their profiles), what happens in the phase (detailed steps from BUILD_PROTOCOL.md), the verification gate (what must pass to proceed), skip conditions (from frontmatter), and the test activity for that phase
5. Phase pages cross-link: "After this phase, proceed to [next phase]" and "This phase requires [previous phase] to be complete"

**Data model:** None — content sourced from BUILD_PROTOCOL.md at build time.

**UI description:**

- Timeline uses a vertical "reactor core" visual metaphor — each phase is a glowing node on a central column, with energy flowing between them
- Phase nodes pulse gently (CSS animation, no JS) to indicate "active" state when scrolled into view
- **Loading state:** Timeline skeleton with pulsing nodes
- **Empty state:** N/A
- **Error state:** N/A
- **Success state:** Full timeline with expand/collapse and navigation

**Edge cases:**
- 14 phases total (0-13) — the timeline handles this without layout issues
- Phase 0 (Orient) is visually distinct — it's the "ignition" node at the top, larger than the others
- On mobile, the timeline becomes left-aligned (instead of centered) with phases stacking vertically

---

### Feature 4: Agent Directory (The Council)

**User flow:**
1. User navigates to /agents
2. Sees "The Council" — 18 lead agent cards in a responsive grid, each with: agent name, real character name, universe emblem, domain label, a 2-sentence personality description, power level bar, and a 3D-flippable trading card revealing commands, phases, and a memorable quote
3. Below The Council: universe selector tabs (Tolkien, Marvel, DC, Star Wars, Star Trek, Dune, Anime, Cosmere, Foundation) — clicking a tab shows all agents from that universe in a scrollable roster
4. Each agent in the roster shows: character name, role description, and the personality line from NAMING_REGISTRY.md (e.g., "Vegeta — Pride, relentless optimization, 'it's over 9000' (monitoring)")
5. Clicking a lead agent card links to /agents/[agent-slug] — a full-page profile with: universe, domain, behavioral directives (from the method doc), sub-agent roster (from NAMING_REGISTRY.md), which slash commands they lead, which build phases they participate in, power level, and a memorable quote
6. Clicking a universe tab links to /agents/[universe-slug] — shows all characters from that universe with their roles

**Data model:** None — content sourced from NAMING_REGISTRY.md and method docs at build time. Agent data is structured as a TypeScript const at build time:

```typescript
type Agent = {
  slug: string;           // "galadriel"
  name: string;           // "Galadriel"
  realName: string;       // "Lady of Lothlórien"
  universe: Universe;     // "tolkien"
  domain: string;         // "Frontend & UX"
  isLead: boolean;
  description: string;    // 2-sentence personality
  quote: string;          // Memorable quote
  commandsLed: string[];  // ["/ux"]
  phasesActive: number[]; // [3, 4, 5, 8, 10]
  powerLevel: number;     // 1-10
  subAgents: SubAgent[];  // From naming registry
};

type Universe = "tolkien" | "marvel" | "dc" | "star-wars" | "star-trek" | "dune" | "anime" | "cosmere" | "foundation";

type SubAgent = {
  name: string;
  role: string;
  description: string;
};
```

**UI description:**

- Lead agent cards have a thick comic-panel border (4px black), halftone-dot background gradient in the agent's universe color, and a "BAM!" starburst on hover
- Universe tabs are styled as comic-book chapter markers with the universe emblem
- Agent profile pages have a full-width "splash page" header with the agent silhouette against their universe's color palette
- **Loading state:** Card grid skeleton with pulsing comic borders
- **Empty state:** N/A
- **Error state:** N/A
- **Success state:** Full grid with hover animations and tab switching

**Edge cases:**
- Anime universe has 72 sub-agents — the roster needs virtualized scrolling or pagination (paginate at 20 per page)
- Cross-universe conflict resolution table (from NAMING_REGISTRY.md) is shown as a callout on relevant agent pages
- Mobile: 3x3 grid becomes 1 column; universe tabs become a horizontal scroll strip

---

### Feature 5: Command Reference

**User flow:**
1. User navigates to /commands
2. Sees all 26 slash commands in a table: command name, lead agent, and 1-sentence description
3. Each row links to /commands/[command-slug]
4. Individual command pages show: full usage instructions, which agent leads it, what happens when you run it (step-by-step), example terminal output (styled as a retro CRT terminal with green-on-black text and scanline overlay), related commands, and tips

**Data model:** None — content sourced from .claude/commands/*.md at build time.

**UI description:**

- Command table styled as a "mission briefing" dossier with stamped headers
- Terminal output examples use a custom "CRT monitor" component: rounded corners, slight screen curvature via CSS, phosphor-green text, blinking cursor, and faint scanline overlay (CSS pseudo-element)
- **Loading state:** Table skeleton
- **Empty state:** N/A
- **Error state:** N/A
- **Success state:** Full table with links and terminal previews

**Edge cases:**
- `/thumper` command (Chani's Telegram bridge) is marked with a "NEW in v3.5" badge
- `/void` command (Bombadil's forge sync) includes a "self-referential" note: "This command was used to keep this very website in sync with VoidForge upstream"
- `/assemble` command (Fury's Initiative) runs the full pipeline from architecture to launch
- `/campaign` command (Sisko's War Room) reads the PRD, picks missions, and runs the war

---

### Feature 6: Code Patterns Gallery

**User flow:**
1. User navigates to /patterns
2. Sees 35 pattern cards in a grid: pattern name, what it teaches, and a 3-line code preview
3. Each card links to /patterns/[pattern-slug]
4. Individual pattern pages show: the full reference implementation with syntax highlighting, a "What This Pattern Teaches" explainer, framework adaptation tabs (Next.js, Express, Django, Rails) showing how the same pattern looks in each framework, and a "When To Use This" section

**Data model:** None — content sourced from docs/patterns/*.ts at build time.

**UI description:**

- Pattern cards show a miniature code preview with the first 3 significant lines
- Framework tabs use a tab bar styled as a retro button panel (like an 80s sci-fi control console)
- Code blocks are full-width with line numbers and a copy button
- **Loading state:** Card skeleton with code-line placeholders
- **Empty state:** N/A
- **Error state:** N/A
- **Success state:** Full gallery with framework switching

**Edge cases:**
- TypeScript patterns display with full type annotations; Django/Rails tabs show Python/Ruby equivalents (these are written as MDX content, not auto-translated)
- Pattern files may exceed 100 lines — use collapsible sections for the full implementation with a "Show Full Pattern" toggle

---

### Feature 7: The Prophecy (Roadmap)

**User flow:**
1. User navigates to /prophecy
2. Sees a timeline of shipped versions and future visions, styled as an ancient scroll / star chart hybrid
3. Shipped versions (v3.1 through v3.3) are shown with strikethrough on completed items and ship dates
4. Future versions (v3.4+) are shown with increasingly ethereal/faded styling the further out they are
5. Each roadmap item names the agents involved and what they'll build

**Data model:** None — content sourced from PROPHECY.md at build time.

**UI description:**

- Shipped items have a gold "SHIPPED" stamp across them
- Future items glow faintly, like distant stars
- The v4 "Multiverse" section is visually distinct — a portal-like rupture in the page design
- **Loading/Empty/Error states:** N/A (static)
- **Success state:** Full roadmap with visual hierarchy

**Edge cases:**
- Prophecy content updates with each VoidForge release — sourced from repo at build time

---

### Feature 8: About Page

**User flow:**
1. User navigates to /about
2. Sees Thomas McLeod's story: 6x serial entrepreneur, American University, Santa Monica-based, built Arkive, PageLime, Saltwater, Omni, and now VoidForge
3. Below: the "Built by the Forge" narrative — how this very website was built using VoidForge's own methodology, which agents contributed what, and the self-referential loop of a tool building its own marketing site
4. Links to: GitHub repo, LinkedIn (https://www.linkedin.com/in/tmcleod3/), and the VoidForge Holocron

**Data model:** None — static MDX content.

**UI description:**

- Tom's section is styled as a "creator card" — comic-book origin story panel layout
- The "Built by the Forge" section uses a horizontal comic strip showing the build sequence: PRD → Picard Orients → Stark + Galadriel Build → Batman Tests → Kusanagi Deploys → YOU'RE HERE
- LinkedIn link opens in new tab
- **Loading/Empty/Error states:** N/A
- **Success state:** Full about page

**Edge cases:**
- LinkedIn URL must be exactly `https://www.linkedin.com/in/tmcleod3/` — no tracking parameters

---

## 5. Authentication & Accounts

Not applicable. This is a public static site with no user accounts, no login, and no protected content.

---

## 6. Database Schema

Not applicable. No database. All content is compiled from markdown/MDX source files at build time.

**Note (2026-03-30):** The original plan specified a `content/` directory with MDX files. During implementation, the architecture evolved to use TypeScript data files (`src/data/*.ts`) and inline JSX in page components (`src/app/*/page.tsx`). This provides type safety, computed statistics, and `generateStaticParams()` integration that MDX files alone would not support.

Content source files are organized as:

```
src/data/
├── agents.ts          ← 18 lead agents + sub-agents, universe mapping
├── commands.ts        ← 27 slash commands with arguments and usage
├── patterns.ts        ← 40 code patterns with framework tabs
├── protocol.ts        ← 14 build phases (0-13) with gates
├── releases.ts        ← Version history for /prophecy
├── search-index.ts    ← Site-wide search entries
└── stats.ts           ← Computed counts (auto-derived from data arrays)

src/app/
├── page.tsx                    ← Landing page (hero, comic strip, features)
├── tutorial/page.tsx           ← Tutorial hub (15 tutorial pages)
├── protocol/page.tsx           ← Protocol hub
├── protocol/[slug]/page.tsx    ← 14 phase detail pages
├── agents/page.tsx             ← Agent directory (The Council)
├── agents/[slug]/page.tsx      ← 18 leads + 9 universes = 27 pages
├── commands/page.tsx           ← Command reference hub
├── commands/[slug]/page.tsx    ← 27 command pages
├── patterns/page.tsx           ← Pattern gallery hub
├── patterns/[slug]/page.tsx    ← 40 pattern pages
├── prophecy/page.tsx           ← Roadmap
├── about/page.tsx              ← Creator story
├── forge-labs/page.tsx         ← Experimental growth tools
└── github/page.tsx             ← Redirect to GitHub repo
```

Total generated pages: 131 (from 28 route templates). Originally 97 planned; expanded through campaigns v1-v4.

---

## 7. API Design

No server-side API. Two client-side data fetches:

### GitHub Star Count Badge

```
GET https://api.github.com/repos/tmcleod3/voidforge
Headers: Accept: application/vnd.github.v3+json
Response fields used: stargazers_count, tag_name (from latest release)
Cache: stale-while-revalidate, 5-minute TTL via React state
Fallback: Static values from build time (hardcoded in a constant)
Rate limit: GitHub API allows 60 requests/hour unauthenticated — with 5-min cache, max 12 requests/hour per visitor
```

### GitHub Latest Release Badge

```
GET https://api.github.com/repos/tmcleod3/voidforge/releases/latest
Headers: Accept: application/vnd.github.v3+json
Response fields used: tag_name
Cache: Same as above
Fallback: "v3.3.0" hardcoded at build time
```

Error response format: Not applicable (client-side fetch with try/catch, silent fallback to static values).

Rate limiting: Not applicable (no server-side API).

---

## 8. Tiers & Pricing

Not applicable. VoidForge is MIT-licensed open source software. The site is free. There are no paid tiers, no gating, no subscriptions.

---

## 9. Payment Processing

Not applicable.

---

## 10. Analytics & Tracking

### Analytics Provider

Plausible Analytics (privacy-respecting, no cookies, GDPR-compliant by default).

### Event Taxonomy

| Event | Properties | Trigger |
|-------|-----------|---------|
| `pageview` | `path`, `referrer` | Every page load (automatic) |
| `install_copy` | `tier: "full" \| "scaffold" \| "core"` | User clicks copy button on an install command |
| `command_view` | `command: string` | User views a slash command detail page |
| `agent_view` | `agent: string, universe: string` | User views a lead agent profile page |
| `pattern_view` | `pattern: string` | User views a code pattern detail page |
| `framework_tab` | `pattern: string, framework: string` | User switches framework tab on a pattern page |
| `tutorial_progress` | `step: "install" \| "first-build" \| "deploy"` | User reaches the bottom of a tutorial page |
| `github_click` | `location: "hero" \| "nav" \| "footer" \| "about"` | User clicks a link to the GitHub repo |
| `linkedin_click` | `(none)` | User clicks the LinkedIn link on the about page |
| `prophecy_section` | `version: string` | User scrolls a roadmap section into view |
| `search_query` | `query: string` | User types in the site search (if implemented) |

### Key Metrics

- **Primary:** Weekly unique visitors, install command copies (proxy for conversion), GitHub clicks from site
- **Secondary:** Tutorial completion rate (% who reach /tutorial/deploy from /tutorial/install), most-viewed agent pages, most-viewed command pages
- **Funnel:** Landing → Tutorial Hub → Install → First Build → Deploy (5-step funnel)

---

## 11. Admin Dashboard

Not applicable. No admin functionality. Analytics are viewed in the Plausible dashboard.

---

## 12. Email & Notifications

Not applicable. No email functionality. No newsletter (keep it simple — if someone wants updates, they star the GitHub repo).

---

## 13. Security

### Encryption

- **In transit:** HTTPS enforced by Vercel (automatic Let's Encrypt). HSTS header with 1-year max-age.
- **At rest:** No user data stored. No database. No secrets at rest beyond build-time environment variables.

### Rate Limiting

Not applicable for the static site itself. GitHub API client-side calls are self-rate-limited by the 5-minute cache.

### Input Validation

The only user input is the search query (if site search is implemented). This is client-side only (filtering pre-indexed content) and never sent to a server. HTML is escaped before rendering search results.

### Security Headers (set via next.config.js `headers()`)

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://plausible.io; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://avatars.githubusercontent.com; connect-src 'self' https://api.github.com https://plausible.io; font-src 'self' https://fonts.gstatic.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self'
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 0
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()
```

### CORS/CSRF/XSS

- **CORS:** Not applicable (no API endpoints served).
- **CSRF:** Not applicable (no forms that mutate server state).
- **XSS:** All user-facing content is statically compiled MDX. No dynamic HTML rendering from untrusted sources. React's default JSX escaping handles any interpolated values.

### File Upload Security

Not applicable. No file uploads.

### Secret Management

Only secret: Plausible site ID (public — embedded in client-side script tag). No sensitive secrets. GitHub API calls are unauthenticated (public repo data only).

---

## 14. Brand Voice & Personality

### How VoidForge.dev Speaks

The voice is **mythic-meets-pulp-comic**. Every piece of copy should feel like it was written by someone who reads both Tolkien and vintage Amazing Stories magazine covers. The tone is confident, nerdy, a little dramatic, and never boring. Think: a bard who also knows TypeScript.

Specific voice rules:
- **Headers** use comic-book impact language: "THE PROTOCOL", "MEET THE COUNCIL", "FORGED IN FIRE"
- **Body text** is clear and technical underneath the fun — the aesthetic is loud, but the instructions are precise
- **Agent speech bubbles** are written in the character's voice: Picard is measured and strategic; Batman is terse and investigative; Bilbo is warm and narrative; Kusanagi is efficient and technical
- **Code examples** are never cute — they're real, working code. The fun is in the design, not in the variable names
- **Numbers are always specific**: "260+ agents across 9 universes" not "lots of agents"
- **Self-referential humor** is encouraged: "This page was Phase 8 of its own build process"

### Example Microcopy

**Buttons:**
- Install CTA: "FORGE YOUR FIRST APP →"
- Copy command: "COPY" → (after click) "COPIED! ⚡"
- GitHub link: "VIEW THE SOURCE"
- Next tutorial step: "PROCEED TO PHASE [N] →"

**Errors:**
- GitHub badge fetch fail: (silent — falls back to static badge, no error shown to user)
- 404 page: "YOU HAVE WANDERED INTO THE VOID. This page doesn't exist — but from nothing, everything. Perhaps you meant to visit [the landing page](/), [the tutorial](/tutorial), or [the agents](/agents)?"

**Empty states:**
- Search with no results: "Even Oracle couldn't find that. Try different keywords, or browse the [full command reference](/commands)."

**Confirmations:**
- Copy button feedback: "COPIED! ⚡" (text replaces button label for 2 seconds, then reverts)

**Destructive actions:**
- Not applicable (no destructive user actions on a static site)

### What Tone to Avoid

- **Corporate SaaS voice:** No "unlock your potential," "streamline your workflow," "at scale." This is not a B2B landing page.
- **Condescending tutorials:** No "simply run this command" or "it's easy!" — respect the user's intelligence.
- **Gratuitous meme references:** The comic/sci-fi/fantasy theme is the personality. Don't layer memes on top.
- **Vague marketing:** Every claim is backed by a specific number or a link to the actual feature.
- **Apologetic tone:** VoidForge is opinionated and proud of it. Don't hedge with "you might consider" — say "VoidForge does X."

---

## 15. Deployment & Infrastructure

### Target Hosting

**Vercel** — Free tier for static sites.

**Setup:**
1. Vercel CLI deploy (`npx vercel --prod`) — NOT Git-integrated auto-deploy
2. Framework preset: Next.js
3. Build command: `next build` (output: static export)
4. Output directory: `out/`
5. Node.js version: 20.x
6. Install command: `npm ci`
7. Vercel Project: `voidforge-marketing-site` (prj_ozWJal9XKeK2JZSCecLKhsMYPU0g)

### Process Management

Not applicable — static site served from Vercel's edge CDN. No server processes.

### DNS/SSL

- **Domain:** voidforge.build
- **DNS provider:** Cloudflare
- **Configuration:** A record: `voidforge.build` → `76.76.21.21` (Vercel), A record: `www.voidforge.build` → `76.76.21.21`
- **SSL:** Automatic via Vercel (Let's Encrypt). Vercel handles certificate provisioning and renewal.
- **Redirect:** `www.voidforge.build` → `voidforge.build` (configured in Vercel dashboard)

### Backup Strategy

- **Source code:** Git (GitHub). The repo IS the backup.
- **Content:** MDX files in the repo. Same as source code.
- **Analytics:** Plausible cloud retains data per their plan. Self-hosted Plausible: standard PostgreSQL backup.
- **No user data to back up.**

### Environment Variables (Complete List)

| Variable | Required | Description | Example Value |
|----------|----------|-------------|---------------|
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Yes | Plausible analytics domain | `voidforge.build` |
| `NEXT_PUBLIC_PLAUSIBLE_HOST` | No | Custom Plausible host (if self-hosted) | `https://plausible.yourdomain.com` |
| `NEXT_PUBLIC_GITHUB_REPO` | Yes | GitHub repo for API badges | `tmcleod3/voidforge` |
| `NEXT_PUBLIC_SITE_URL` | Yes | Canonical site URL for SEO meta | `https://voidforge.build` |

Total: 4 environment variables. No secrets — all are public (NEXT_PUBLIC_ prefix).

---

## 16. Launch Sequence

### Phase 1: Foundation (Scaffold + Infrastructure)

**Scope:**
- Next.js 15 project initialization with App Router and static export
- Tailwind CSS 4 configuration with custom theme (comic colors, halftone utilities, fonts)
- MDX pipeline setup (@next/mdx, remark-gfm, rehype-slug, Shiki)
- Root layout with navigation (responsive), footer, and base typography
- Custom CSS: halftone-dot patterns, comic-panel borders, starburst shapes, speech bubble component, CRT terminal component, ben-day dot overlay
- Font loading: Bangers, Space Mono, Inter via next/font
- Vercel deployment configuration (vercel.json, static export)
- Security headers in next.config.js
- 404 page with VoidForge-themed messaging

**Dependencies:** None (project bootstrap).

**Done criteria:**
- `npm run build` produces a static export in `out/`
- Vercel preview deploy shows the root layout with nav and footer
- All 3 fonts load without layout shift
- Lighthouse performance score ≥ 90
- Security headers pass securityheaders.com scan with A+ rating
- Mobile responsive layout works at 375px, 768px, 1024px, 1440px viewports

---

### Phase 2: Landing Page

**Scope:**
- Hero section with animated comic-panel layout (logo, tagline, starburst)
- 3-panel comic strip pitch summary (PRD → Agents → Ship)
- Quick-start install section with tiered install commands and copy buttons
- GitHub badges (star count + latest release) with client-side fetch and fallback
- 6 feature highlight cards with halftone backgrounds
- Footer with agent credits and creator attribution
- Framer Motion animations: hero entrance, scroll-triggered card reveals

**Dependencies:** Phase 1 (layout, styles, fonts, components).

**Done criteria:**
- Landing page renders fully at all 4 breakpoints
- Copy buttons work (copies to clipboard, shows "COPIED! ⚡" feedback)
- GitHub badges load or fall back gracefully
- All animations respect `prefers-reduced-motion`
- Page weight < 200KB transferred (excluding fonts)
- Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms

---

### Phase 3: Content Pipeline + Tutorial

**Scope:**
- MDX content pipeline: build-time compilation from content/ directory
- Tutorial hub (/tutorial) with quest-map navigation
- 3 tutorial pages: install, first-build, deploy
- Agent speech bubble components (Merlin, Picard, Kusanagi speak in tutorials)
- Code block copy buttons (global component)
- Collapsible code blocks for long snippets (>20 lines)
- Table of contents component (sidebar on desktop, dropdown on mobile)
- Previous/Next navigation between tutorial pages

**Dependencies:** Phase 1 (MDX pipeline), Phase 2 (design system components).

**Done criteria:**
- All 4 tutorial pages render correctly with syntax highlighting
- TOC links scroll to correct headings
- Agent speech bubbles display with correct character voice
- Code copy works on all blocks
- Tutorial navigation (prev/next) links to correct pages
- Mobile TOC dropdown works

---

### Phase 4: Protocol + Agent Directory

**Scope:**
- Protocol hub (/protocol) with 13-phase timeline visualization
- 14 individual phase pages (0-13) sourced from BUILD_PROTOCOL.md
- Agent directory hub (/agents) with The Council grid and universe tabs
- 18 lead agent profile pages
- 9 universe roster pages
- Agent data model (TypeScript const from NAMING_REGISTRY.md)

**Dependencies:** Phase 3 (content pipeline, speech bubbles, TOC component).

**Done criteria:**
- Timeline renders all 14 phases with correct lead agents
- All phase pages have complete content from BUILD_PROTOCOL.md
- Agent grid shows all 18 leads with correct universe colors
- Universe tabs switch correctly and show full rosters
- Anime universe pagination works (72 agents, 20 per page)
- All cross-links between agents, phases, and commands resolve

---

### Phase 5: Commands + Patterns + Remaining Pages

**Scope:**
- Commands hub (/commands) with mission-briefing table
- 15 individual command pages sourced from .claude/commands/*.md
- CRT terminal component for command output examples
- Patterns hub (/patterns) with 35 pattern cards
- 7 individual pattern pages with framework tabs
- Prophecy page (/prophecy) with roadmap timeline
- About page (/about) with creator story and "built by the Forge" narrative
- /github redirect

**Dependencies:** Phase 4 (content pipeline proven, design system complete).

**Done criteria:**
- All 26 command pages render with terminal output examples
- All 35 pattern pages render with framework tab switching
- Prophecy timeline shows shipped vs future with correct visual distinction
- About page has working LinkedIn link (opens new tab) and GitHub link
- /github redirects to https://github.com/tmcleod3/voidforge
- All 68 content pages are reachable from navigation

---

### Phase 6: SEO, Analytics, Polish

**Scope:**
- Plausible analytics script integration
- Custom event tracking (10 events from taxonomy above)
- OpenGraph and Twitter Card meta tags on every page
- Sitemap generation (next-sitemap)
- robots.txt
- Canonical URLs on all pages
- Structured data (JSON-LD) for the GitHub repo (SoftwareApplication schema)
- Global site search (client-side, pre-indexed at build time using Fuse.js or similar)
- Final responsive polish pass across all pages at all breakpoints
- Performance optimization: image optimization, font subsetting, code splitting
- Accessibility audit: keyboard navigation, focus management, ARIA labels, contrast ratios (WCAG 2.1 AA)

**Dependencies:** Phases 2-5 (all content pages must exist).

**Done criteria:**
- Plausible receives pageview events on Vercel preview
- All 10 custom events fire correctly (verify in Plausible live view)
- Every page has unique title, description, and OG image
- Sitemap includes all 65+ pages
- Site search returns relevant results for "install," "batman," "deploy," "security"
- Lighthouse scores: Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95
- axe accessibility scan: 0 critical or serious violations
- All pages tested at 375px (mobile), 768px (tablet), 1024px (laptop), 1440px (desktop)

---

### Phase 7: Launch

**Scope:**
- DNS configuration: voidforge.build CNAME to Vercel
- Production deployment on Vercel
- Verify HTTPS, redirects (www → apex), security headers
- Smoke test: visit every page on production, verify no broken links
- Update VoidForge README.md with link to voidforge.build
- GitHub repo description updated with website URL

**Dependencies:** Phase 6 (everything must be polished and tested).

**Done criteria:**
- https://voidforge.build loads, all pages accessible
- https://www.voidforge.build redirects to https://voidforge.build
- All external links (GitHub, LinkedIn) work
- No console errors on any page
- Plausible receiving production data
- VoidForge README links to the live site