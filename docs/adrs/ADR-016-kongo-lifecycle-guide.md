# ADR-016: Kongo Lifecycle Guide — /cultivation + SaaS + Google Ads + Kongo

## Status: Accepted

## Context

ADR-015 created a growth lifecycle tutorial at `/tutorial/google-ads` showing the path from deployed SaaS to autonomous Google Ads. That guide mentions Kongo as optional (Phase 3.5 skips cleanly if not connected).

This ADR covers a dedicated companion guide that shows the lifecycle **with Kongo fully integrated** — where Kongo is central to the optimization loop, not optional. The Kongo version is significantly different:

- Every campaign gets a dedicated landing page (not homepage)
- A/B testing covers ad copy + landing page variants + audience (3 layers vs 1)
- The feedback loop is closed: winning variants become seed for next page generation
- Daemon jobs include growth signal polling, seed capture, and webhook handling
- Full data flow shows PRD → seed → Kongo pages → Google Ads → conversions → revenue → next cycle

The two guides serve different audiences:
- `/tutorial/google-ads` — users who want Google Ads without additional tooling
- `/tutorial/google-ads-kongo` — users who want the full-funnel optimization with Kongo

## Decision

Create a second tutorial page at `/tutorial/google-ads-kongo` that presents the Kongo-integrated lifecycle. This page:

1. Shows the modified command sequence (Kongo API key added to cultivation install)
2. Details Phase 3.5 step-by-step (seed extraction → page generation → variant generation → campaign linking)
3. Documents the Kongo-specific daemon jobs and growth signal computation
4. Shows Wayne's 3-layer test sequencing (creative → page → audience)
5. Presents the weekly feedback loop (Mon-Fri cycle)
6. Includes the full data flow diagram (PRD → Kongo → Google Ads → Stripe → Treasury → feedback)
7. Compares "with Kongo" vs "without Kongo" explicitly

## Consequences

- **Enables:** Users with Kongo accounts see the complete integration story
- **Prevents:** Kongo content diluting the simpler Google-only guide
- **Requires:** New tutorial page, hub entry, search index, sitemap, cross-link from google-ads guide
- **Trade-off:** Two guides to maintain vs one guide with conditional sections. Two is better — the Kongo version is 2x the content and would make the base guide overwhelming.

## Alternatives

1. **Expand the existing google-ads guide with conditional sections** — Rejected: the Kongo content (seed extraction, variant generation, growth signal, 3-layer testing, weekly feedback loop, full data flow) is substantial enough to double the page length. Separate guides are clearer.
2. **Tab switcher on one page** — Rejected: too much hidden content, poor for SEO, confusing navigation.

## Implementation Scope

- New file: `src/app/tutorial/google-ads-kongo/page.tsx`
- Data updates: search-index.ts, sitemap.ts tutorial slug list, tutorial hub, cross-link from google-ads guide
- No methodology changes, no pattern changes, no command changes
