# ADR-018: ScrollReveal Content Strategy

**Status:** Accepted
**Date:** 2026-04-12
**Context:** `ScrollReveal` (see ADR-014) wraps every section on 18 tutorial pages, all with `delay=0`. This produces a "popcorn effect" where above-fold content that the user came to read animates in from nothing, adding latency between intent and consumption. Tutorial pages are reading-focused — users arrive from the nav CTA or search and expect immediate content. The current behavior treats tutorial pages like landing pages, where reveal animations build anticipation. Tutorials are not landing pages.

## Decision

Adopt the following ScrollReveal strategy for content-heavy pages (tutorials, protocol docs):

1. **Above-fold content is never wrapped in ScrollReveal.** The first content section after the page header (typically the intro speech bubble and the first tutorial section) renders immediately with no animation. Users arrived to read — do not delay the content they came for.

2. **Below-fold sections use staggered delays.** Starting from the second content section, apply ScrollReveal with incrementing delays: `0`, `0.08`, `0.12`, `0.16`... (capped at `0.2`). This creates a gentle cascade as users scroll, rather than every section popping in simultaneously.

3. **Reduced motion: duration becomes 0.** When `prefers-reduced-motion` is active, ScrollReveal already skips the initial offset (per ADR-014), but the `transition.duration` should also be set to `0` so content appears truly instantly — not with a 0.4s fade from full opacity to full opacity.

4. **Landing pages retain current behavior.** The homepage hero, features grid, and install section benefit from scroll reveals. This ADR applies only to content-heavy reading pages.

**Amendment to ADR-014 consequences:** Add: "ScrollReveal should not wrap above-fold content on content-heavy pages (tutorials, protocol docs). See ADR-018."

## Consequences

- 18 tutorial pages lose their first-section animation — content appears instantly above the fold
- Below-fold animations become staggered instead of uniform, improving visual rhythm
- Reduced-motion users get true instant rendering (duration=0, not just offset=0)
- Page header component (`PageHeader`) is unaffected — it has its own animation strategy
- Implementation requires a per-page audit to identify which section is "first content" — this is manual but one-time work

## Alternatives Considered

1. **Remove ScrollReveal from tutorials entirely.** Too conservative — scroll reveals on below-fold content genuinely improve the reading experience by drawing attention to new sections as they enter. The issue is specifically above-fold animation, not animation in general.
2. **Keep current behavior (all sections at delay=0).** The popcorn effect is measurable: on a tutorial page with 8 sections, 4 are visible on a 1080p viewport at load, and all 4 animate simultaneously. This is motion that adds no information and delays content consumption. Rejected.
3. **Auto-detect above-fold via IntersectionObserver threshold.** Clever but fragile — viewport sizes vary, and the "above fold" line is not a fixed pixel value. Explicit opt-out (don't wrap the first section) is simpler and more predictable than runtime detection.
