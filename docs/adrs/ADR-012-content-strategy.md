# ADR-012: Content Strategy — MDX in App Router

**Status:** Accepted
**Date:** 2026-03-14
**Context:** PRD specifies 53 MDX content files. Need to decide on content sourcing approach with Next.js App Router.

## Decision

Use MDX files as page content within the `app/` directory structure, leveraging `@next/mdx` for native App Router MDX support. Content-heavy pages use `.mdx` files directly as pages or import MDX content from a colocated `_content/` convention. Structured data (agents, commands, patterns) lives in TypeScript data files under `src/data/`.

## Alternatives Considered

- Separate `content/` directory with custom build pipeline — adds complexity without benefit for App Router
- CMS integration — overkill for a static open-source docs site

## Consequences

- Content lives alongside routes in `app/` — easy to find and edit
- Structured data (agent roster, command metadata) is TypeScript for type safety
- MDX components (speech bubbles, code blocks, callouts) are shared via `mdx-components.tsx`
- Build-time content compilation — no runtime MDX parsing
