# Changelog

All notable changes to the VoidForge Marketing Site.

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
