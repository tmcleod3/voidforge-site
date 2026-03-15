# ADR-013: Styling Architecture — Tailwind + Custom CSS

**Status:** Accepted
**Date:** 2026-03-14
**Context:** PRD requires a distinctive comic-book/pulp-sci-fi aesthetic that goes well beyond standard utility classes.

## Decision

Tailwind CSS 4 for layout, spacing, responsive utilities, and typography. Custom CSS for the heavy aesthetic work: halftone patterns, ben-day dots, comic-panel borders, starburst shapes, speech bubbles, CRT terminal effects, and scanline overlays. Custom CSS lives in `src/styles/`.

Utility function: `cn()` from `clsx` + `tailwind-merge` for conditional class composition.

## Consequences

- Tailwind handles 80% of styling (layout, responsive, spacing, colors)
- Custom CSS handles the 20% that defines the brand (visual effects, comic elements)
- No CSS-in-JS — all styles are static, no runtime cost
- Custom CSS is organized by effect type, not by component
