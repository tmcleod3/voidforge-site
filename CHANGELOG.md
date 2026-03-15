# Changelog

All notable changes to the VoidForge Marketing Site.

## [0.4.0] — 2026-03-15

### Added
- Thanos (14th lead agent) + /gauntlet command (16th command) — 5-round comprehensive review
- Celebrimbor (12th lead) + /imagine command — AI image generation pipeline via DALL-E 3
- Bashir (13th lead) + /debrief command — post-mortem analysis with upstream GitHub issue filing
- 50 character portraits (14 leads + 36 sub-agents) in pulp sci-fi comic style
- Sub-agent gallery on agents page — 42 agents grouped by universe with hover tooltips
- Unique Golden Age exclamations per trading card (SHINE!, CLANG!, WHAM!, etc.)
- Lore taglines on card fronts replacing power level bars
- Agent headshots + lore one-liners on protocol phase accordions
- Prophecy page grouped by major version (V1-V5) with era titles, quotes, and agent avatars
- Hero "FORGE YOUR FIRST APP" CTA button
- "RECOMMENDED" badge on Full tier install
- Tutorial breadcrumbs ("← Tutorial Hub")
- Feature card "EXPLORE →" link indicators

### Changed
- Images optimized: 180MB PNG → 5.5MB WebP (97% reduction via resize + format conversion)
- Trading cards: responsive height (340-420px), hover tilt + scale micro-interaction
- Card backs condensed: phases removed, quote inline, power bar compact
- Protocol phases updated with Éowyn, Celebrimbor, Bashir, Coulson, Sisko assignments
- Prophecy v5.5.0: added Thanos, /gauntlet, Éowyn, 16 total commands
- Strange renamed to Haku (Spirited Away) across all references
- Hero title scaled down for mobile (text-5xl → text-9xl responsive chain)
- Copy button feedback extended to 5 seconds with 44px mobile touch target
- Portal rupture animation paused by default, plays on hover
- About page bio rewritten with lore tone, Substack as primary CTA

### Fixed
- Search modal: portaled to body (escaped header stacking context), focus trap, return focus on keyboard close
- Color contrast: --vf-text-muted #8888a0 → #9696b0 (WCAG AA)
- Sub-agent avatars: .png → .webp after format conversion
- Card back overflow: inline style override for comic-panel overflow:hidden
- Text-6xl overflow on agent, 404, error pages (added mobile breakpoints)
- CSP: restored 'unsafe-inline' after Gauntlet removal broke hydration

### Security
- CSP hardening attempted (unsafe-inline removal) — reverted due to Next.js hydration dependency
- All external links verified rel="noopener noreferrer"
- Zero npm vulnerabilities
- Hardcoded voidforge.dev fallbacks → voidforge.build

## [0.3.0] — 2026-03-14

### Added
- Client-side site search with Fuse.js — Cmd+K shortcut, 55 indexed pages, keyboard navigation
- JSON-LD structured data (SoftwareApplication schema) on every page
- Event tracking: `github_click` (nav, footer, about), `linkedin_click`, `tutorial_progress`, `search_query`
- Tutorial progress tracking — fires when user reaches bottom of each tutorial page
- TrackedLink component for analytics-aware external links

### Changed
- Footer and about page links now track click events for analytics
- Header now includes search button between nav links and GitHub icon

## [0.2.0] — 2026-03-14

### Added
- Framework tabs on all 7 pattern pages — Next.js, Express, Django, Rails implementations side by side
- Table of contents component — sticky sidebar on desktop, dropdown on mobile
- Collapsible code block component for long snippets (>20 lines) with show/hide toggle
- `/github` redirect page to the VoidForge repository
- 28 framework-specific reference implementations across all code patterns
- Campaign state tracking for multi-session builds

### Changed
- Pattern pages now show "At a Glance" preview plus full tabbed framework implementations
- All 3 tutorial pages now include table of contents with anchor-linked headings

## [0.1.0] — 2026-03-14

### Added
- Initial marketing site: 62 static pages, Next.js 15 with static export
- Landing page with hero, comic strip, install section, feature cards
- Tutorial hub with 3-step walkthrough (Install, First Build, Deploy)
- Protocol explorer with 14-phase timeline
- Agent directory with trading cards, universe tabs, 11 lead profiles
- Command reference for all 13 slash commands
- Code patterns gallery with 7 reference implementations
- Prophecy roadmap page
- About page with creator bio
- Plausible analytics with custom event tracking
- Sitemap, robots.txt, SEO metadata
