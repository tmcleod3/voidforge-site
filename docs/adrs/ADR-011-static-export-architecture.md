# ADR-011: Static Export Architecture

**Status:** Accepted
**Date:** 2026-03-14
**Context:** VoidForge marketing site is a static-site type project deployed to Vercel.

## Decision

Use Next.js 15 App Router with `output: 'export'` for fully static HTML generation. No API routes, no SSR, no ISR. All pages are pre-rendered at build time.

## Consequences

- Zero server costs — served entirely from Vercel's edge CDN
- No dynamic content except client-side GitHub API fetches (star count, latest release)
- Content changes require a rebuild and redeploy
- Cannot use Next.js features that require a server (middleware, API routes, revalidation)
- All routing is file-based via the `app/` directory
