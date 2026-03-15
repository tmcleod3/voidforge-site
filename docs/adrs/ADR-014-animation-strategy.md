# ADR-014: Animation Strategy — Framer Motion with Motion Safety

**Status:** Accepted
**Date:** 2026-03-14
**Context:** PRD requires scroll-triggered reveals, page transitions, and comic-panel animations. Must respect `prefers-reduced-motion`.

## Decision

Use Framer Motion for all JavaScript-driven animations. CSS animations for simple effects (pulsing nodes, glowing borders). All Framer Motion animations check `prefers-reduced-motion` via a shared `useReducedMotion()` hook. When reduced motion is preferred, content appears immediately without transitions.

## Consequences

- Framer Motion is the single animation dependency (~30KB gzipped)
- All animated components have a static fallback
- No layout shift from animations — content dimensions are stable before animation starts
- CSS-only animations (pulse, glow) work even with JS disabled
