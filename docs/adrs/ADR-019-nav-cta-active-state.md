# ADR-019: Nav CTA Active State Pattern

**Status:** Accepted
**Date:** 2026-04-12
**Context:** The "Get Started" CTA in the site header (`header.tsx`) links to `/tutorial/install`. When the user is already on that page (or a child path like `/tutorial/install/macos`), the CTA remains visually identical to its default state — solid orange background, "Get Started" text. This creates two problems: (1) clicking it does nothing useful, which violates the principle that every visible action should have a meaningful outcome, and (2) screen readers have no `aria-current` signal, so assistive technology users cannot determine that the CTA destination matches the current page. Standard nav links already handle this correctly via the `isActive()` helper and `aria-current="page"`, but the CTA was implemented separately and missed this pattern.

## Decision

When `pathname === "/tutorial/install"` or `pathname.startsWith("/tutorial/install/")`, render the nav CTA in an **outline variant** with the following changes:

| Property | Default state | Active state |
|----------|--------------|-------------|
| Background | `bg-[var(--vf-forge-orange)]` | `transparent` |
| Border | none | `border-2 border-[var(--vf-forge-orange)]` |
| Text color | `text-black` | `text-[var(--vf-forge-orange)]` |
| Text content | "Get Started" | "You're Here" |
| `aria-current` | absent | `"page"` |
| Click tracking | `get_started_click` | No tracking (no navigation occurs) |

The same logic applies to both the desktop nav CTA and the mobile nav CTA. The `<CtaButton>` component from ADR-017 provides the outline variant, so this is a prop toggle (`variant="outline"`) rather than a separate class string.

The CTA remains a `<Link>` even in active state (not replaced with a `<span>`) so that the URL is still discoverable on hover/right-click. The link is not `aria-disabled` — it still functions as a same-page navigation if clicked.

## Consequences

- Users on `/tutorial/install` see a clear visual signal that they have arrived at the CTA destination
- Screen readers announce `aria-current="page"` on the CTA, matching the behavior of standard nav links
- The outline variant provides sufficient contrast against the dark header background (orange on void passes WCAG AA for large text, and the CTA qualifies as large text at `font-bold`)
- Mobile nav CTA mirrors the desktop behavior — both switch to outline + "You're Here" on the active route
- Analytics tracking is suppressed for the active state since no meaningful navigation occurs
- Future CTAs linking to other destinations can reuse the same pattern: check `isActive(href)`, toggle variant

## Alternatives Considered

1. **Hide the CTA entirely on `/tutorial/install`.** Rejected — removing the CTA breaks the spatial consistency of the nav bar. Users who navigate between pages via keyboard rely on stable tab order. A disappearing element shifts all subsequent tab stops.
2. **Dim opacity (e.g., `opacity-60`).** Not accessible enough — reduced opacity does not communicate "you are here" to screen readers, and low-contrast orange on a dark background at 60% opacity fails WCAG AA. The outline variant is both visually distinct and accessible.
3. **Add a checkmark icon instead of text change.** Icons without labels are ambiguous. "You're Here" is unambiguous in both visual and screen reader contexts. A checkmark could supplement the text but should not replace it.
