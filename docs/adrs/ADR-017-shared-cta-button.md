# ADR-017: Shared CTA Button Component

**Status:** Accepted
**Date:** 2026-04-12
**Context:** The site has 6+ CTA implementations across `header.tsx`, `hero.tsx`, `install-section.tsx`, `not-found.tsx`, `error.tsx`, and individual command/protocol pages. These share the same intent (orange bg, hover to yellow, navigate to action) but diverge on specifics: 4 padding variants (`px-3 py-1.5`, `px-4 py-2`, `px-6 py-3`, `px-8 py-4`), inconsistent font-weight (`font-medium` vs `font-bold`), and text color split between `text-[var(--vf-void)]` and `text-black`. There is no shared component — each CTA is hand-styled inline.

## Decision

Create a `<CtaButton>` component at `src/components/cta-button.tsx` with three size tiers:

| Tier | Use case | Padding | Text size |
|------|----------|---------|-----------|
| `sm` | Nav bar, inline actions | `px-3 py-1.5` | `text-sm` |
| `md` | Cards, section CTAs | `px-5 py-2.5` | `text-base` |
| `lg` | Hero, full-width banners | `px-8 py-4` | `text-lg` |

Locked visual properties (not configurable per-instance):
- `text-black` (not `text-[var(--vf-void)]` — black is consistent across light/dark contexts on an orange surface)
- `font-bold` (not medium — CTAs are primary actions and must assert hierarchy)
- `bg-[var(--vf-forge-orange)]` default, `hover:bg-[var(--vf-forge-yellow)]` transition
- `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--vf-forge-orange)]`
- `rounded-md`
- `transition-colors`

The component accepts `href` (renders as `<Link>`), `onClick` (renders as `<button>`), `variant` (filled | outline), `size` (sm | md | lg), `className` for layout-only overrides (margin, width), and `children`.

## Consequences

- All 6+ existing CTAs are migrated to `<CtaButton>` — visual consistency guaranteed at the type level
- New CTAs require choosing a size tier, not inventing padding values
- The outline variant (orange border, transparent bg) is used by ADR-019 for the active-state nav CTA
- Text color and font-weight are not props — this is intentional. If a future CTA needs different text treatment, it is not a CTA and should be a different component.
- No new dependencies — this is a Tailwind + Next.js Link composition

## Alternatives Considered

1. **Leave as-is.** Rejected — the inconsistency grows with each new page. The 4 padding variants and 2 text color choices are already confusing for contributors.
2. **Global CSS utility class (`.cta-btn`).** Less type-safe than a component. Cannot enforce `href` vs `onClick` rendering logic. Cannot colocate size tiers with TypeScript unions. Rejected.
3. **Full design system with Button/Link primitives.** Premature for a marketing site with ~15 interactive elements. The CTA is the only repeated interactive pattern that has diverged. If more patterns diverge, revisit.
