# ADR-015: Full Lifecycle Growth Guide — /cultivation + SaaS + Google Ads

## Status: Accepted

## Context

VoidForge's growth tools (Cultivation, Treasury, Grow, Heartbeat, Kongo) form a complete lifecycle from SaaS deployment to autonomous ad spend optimization. This lifecycle is currently documented across 6 method docs (GROWTH_STRATEGIST, HEARTBEAT, TREASURY, DEEP_CURRENT) and 4 command files, but no single resource shows how they work together end-to-end.

A user who wants to go from "I have a deployed SaaS" to "Google Ads running autonomously with budget optimization" must piece together the flow from multiple sources. The marketing site already has individual command pages and Forge Labs cards, but nothing that shows the full command sequence, phase-by-phase walkthrough, money flow, or failure modes.

## Decision

Create a dedicated tutorial page at `/tutorial/google-ads` on the marketing site that presents the complete growth lifecycle as a single narrative. This page:

1. **Shows the command sequence** — the exact order of commands to run
2. **Maps each phase** with what happens, what accounts are needed, and what gets produced
3. **Documents the autonomous operation** — daemon jobs, frequencies, and Google Ads specifics
4. **Diagrams money flow** — Stripe → Revenue → Budget → Google Ads → Reconciliation → Circuit Breakers
5. **Lists minimum viable setup** — required, recommended, and deferrable components
6. **Covers failure modes** — common problems and fixes

The guide targets SaaS founders using VoidForge who want to set up Google Ads with VoidForge's automation. Wall clock: ~60-90 minutes active work + external wait times (Google token approval, ad policy review).

## Consequences

- **Enables:** Users can follow a single page to go from zero to autonomous Google Ads
- **Prevents:** Users getting lost across 6+ docs trying to piece together the flow
- **Requires:** New tutorial page, tutorial hub entry, search index entry, sitemap entry
- **Trade-off:** Content is Google Ads-specific; Meta/TikTok variants would need separate guides
- **Scope:** Marketing site content only — no methodology changes, no code patterns, no new commands

## Alternatives

1. **Link chain on Forge Labs page** — Just list the commands in order. Rejected: too sparse, no context on phases, accounts, or failure modes.
2. **Expand each command page** — Add lifecycle context to /grow, /cultivation, /treasury individually. Rejected: fragments the narrative, user still needs to jump between pages.
3. **Blog post / Substack** — External content. Rejected: should live where the commands are documented, not externally.

## Implementation Scope

This ADR covers marketing site content only:
- New file: `src/app/tutorial/google-ads/page.tsx`
- Data updates: `search-index.ts`, `sitemap.ts` tutorial slug list, tutorial hub page
- No methodology changes, no pattern changes, no command changes
