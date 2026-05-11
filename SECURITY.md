# Security — voidforge-marketing-site

Last audit: 2026-05-10 (Site v2.14.3). 12-agent `/sentinel` pass against the live deployment at https://voidforge.build.

## Reporting a vulnerability

If you find a security issue in this site (XSS, open redirect, content injection, supply-chain anomaly, header misconfiguration, etc.), open a private security advisory at:

https://github.com/tmcleod3/voidforge-site/security/advisories/new

Or email tom@arkive.net with `[SECURITY]` in the subject line. Please include:

- The URL/endpoint affected
- A reproduction (curl command preferred)
- The class of vulnerability
- Suggested severity (Critical / High / Medium / Low)

We aim to acknowledge reports within 72 hours and ship a patch within 14 days for High+ findings.

## Threat model

This is a **static-export Next.js site** (`output: "export"`) deployed to **Vercel CDN**. There is:

- No backend, no database, no user auth, no session state
- No API routes, no server actions, no SSR at request time
- No payment processing, no PII collection
- One client-side dynamic feature: search via `fuse.js` against a baked-in index

The realistic attack surface is therefore narrow: methodology-path leakage, XSS via `dangerouslySetInnerHTML` callsites, supply-chain compromise of the build pipeline, and infrastructure misconfiguration.

## Defenses in place

### Methodology paths excluded from CDN

`.vercelignore` (project root) excludes the following from Vercel source upload:

```
.claude/
docs/methods/
docs/patterns/
docs/adrs/
docs/PRD.md
HOLOCRON.md
CHANGELOG.md
VERSION.md
ROADMAP.md
TECH_DEBT.md
logs/
.env, .env.local, .env.*.local
.DS_Store, **/.DS_Store
*.backup, *.bak
.next/cache/, test-results/, playwright-report/
```

Verified via probe matrix — all paths return 404. Bo-Katan's /sentinel Phase 1 report confirmed 16 / 16 paths are blocked.

### Security headers (via `vercel.json`)

- `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
- `Content-Security-Policy` — see CSP section below
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 0` (correct for modern browsers — the legacy heuristic introduced more bugs than it fixed)
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()`

### Permanent redirects

All redirects use `permanent: true` (308). Verified via curl probe.

### JSON-LD output escaping

`src/components/json-ld.tsx` uses a `safeJsonLd` helper that escapes `<`, `>`, and `&` in serialized output, preventing `</script>` breakout if a future data source ever includes untrusted content. Today all input fields are static, but the escape is defense-in-depth.

### Analytics origin allowlist

`src/components/analytics.tsx` validates `NEXT_PUBLIC_PLAUSIBLE_HOST` against a hardcoded allowlist (`https://plausible.io`) at module load. If the env var is set to anything else, it falls back to the canonical default — fail closed. A compromised CI environment cannot redirect the analytics loader to an attacker-controlled domain via this var alone.

### Search query debounce

Search analytics events fire after a 600 ms debounce on the final query, not per keystroke. Prior implementation transmitted partial queries to Plausible character by character — a passive privacy leak in the search box.

### `.voidforge` marker file

Prevents the upstream `npx voidforge-build update` `findProjectRoot()` walk-up bug ([tmcleod3/voidforge#331](https://github.com/tmcleod3/voidforge/issues/331)) from overwriting `~/CLAUDE.md` on developer machines during methodology sync.

### CI dead-export scan

`.github/workflows/ci.yml` runs `npx ts-prune` with filter on every PR/push. A scanner crash now fails the step explicitly (the previous `|| true` masked failures — fixed in v2.14.2).

## Accepted risks

These are documented limitations, not bugs. Each has a reason and a re-evaluation trigger.

### CSP `script-src 'unsafe-inline'`

**Why:** Next.js static export injects inline hydration scripts. Removing `'unsafe-inline'` requires a nonce-based or hash-based CSP, which is not natively supported by `output: "export"` without a post-build hash-injection step.

**Mitigation:** The other CSP directives are strict (`frame-ancestors 'none'`, `base-uri 'self'`, `form-action 'self'`, scoped `script-src`/`connect-src`/`img-src` allowlists). The site has no user-input rendering surface that could inject scripts in the first place.

**Re-evaluation trigger:** Move to nonce-based CSP if/when the site adopts SSR or if a `dangerouslySetInnerHTML` callsite ever takes untrusted input.

### CORS `Access-Control-Allow-Origin: *`

**Why:** Vercel's static-asset CDN sets this header on every static response by default. It cannot be overridden via `vercel.json` headers on static routes.

**Mitigation:** The site has no credentials, no auth cookies, no session data, and no API routes. Cross-origin readers gain access to public HTML/JS that's already public. No exposure today.

**Re-evaluation trigger:** Before adding any API route, server action, authenticated endpoint, or session cookie. Wildcard CORS becomes dangerous the moment any of those exist.

### `x-vercel-id` header region disclosure

**Why:** Vercel injects this header at the edge layer, after `vercel.json` headers are applied. Cannot be stripped on Hobby or Pro plans.

**Mitigation:** Discloses CDN region (e.g., `iad1`) and a deployment epoch. Low value to an attacker beyond confirming Vercel as the host (already obvious from response patterns).

**Re-evaluation trigger:** Enterprise plan upgrade enabling custom-header stripping, or a switch to a proxy (Cloudflare Workers) that can rewrite headers before forwarding.

### `/github` redirect preserves query parameters

**Why:** Vercel's redirect engine appends incoming query params to the destination URL by default. There is no `cleanQueryString`-equivalent option for static-destination redirects.

**Mitigation:** The destination (`github.com/tmcleod3/voidforge`) is a static page that does not act on `?next=`, `?redirect=`, or similar params. Not exploitable today. Phishing kit cosmetic only (the destination is still github.com).

**Re-evaluation trigger:** Before changing the destination to any URL that accepts redirect parameters (OAuth providers, SSO endpoints, partner platforms with `return_url=` semantics).

### Open `<img>` allowlist for `avatars.githubusercontent.com`

**Why:** The site renders GitHub user avatars in the README/contributor section, sourced from a static contributor list.

**Mitigation:** Avatar URLs are constructed from a hardcoded list of user IDs in `src/data/`, not user-provided values. UI redressing via attacker-controlled GitHub avatar would require an attacker to be in our committed contributor list.

**Re-evaluation trigger:** If the site ever fetches contributor lists dynamically from the GitHub API, restrict `img-src` to specific user IDs or proxy avatars through our own CDN.

### npm advisory: postcss XSS via unescaped `</style>` + Next.js DoS via Server Components

**Why:** Both are direct dependencies of `next@^15.5.18`. The Next.js team pins `postcss@8.4.31` in the dependency tree; neither the backport line nor v16 ship with a patched postcss. Forcing an `overrides` to `postcss@8.5.10` would bypass Next.js's tested dep matrix.

**Mitigation, both:** The exploit conditions don't apply to our deployment model.
- The postcss XSS requires processing **untrusted CSS** that contains `</style>`. The site processes only its own committed CSS via Tailwind/PostCSS at build time. There is no user-uploaded or third-party CSS in the pipeline.
- The Next.js DoS requires **runtime Server Components**. Static export (`output: "export"`) has no runtime SSR — pages are pre-rendered to HTML at build time, then served as static files.

**Re-evaluation trigger:** Any move to SSR or runtime page rendering, or any feature that processes external CSS.

### `private: true` only protects against accidental publish

**Why:** `package.json` has `"private": true`, which prevents `npm publish` from succeeding. But the package name `voidforge-site` is unscoped and not registered.

**Mitigation:** Acceptable for a marketing site that will never be published. Adding a scope (e.g., `@tmcleod3/voidforge-site`) would prevent name-squatting but requires renaming consumers (none currently).

**Re-evaluation trigger:** If `"private": true` is ever removed, register the name to an npm scope first.

## Hash + provenance

The site has no SLSA provenance signing because Vercel deploys are static-asset uploads, not npm/registry publishes. The upstream methodology package (`voidforge-build`) carries SLSA provenance — see https://github.com/tmcleod3/voidforge for that toolchain.

## Recent audit history

| Date | Pass | Critical | High | Medium | Low | Notes |
|------|------|----------|------|--------|-----|-------|
| 2026-05-10 | /sentinel (12 agents) | 0 | 0 | 4 fixed in v2.14.3 | 6 documented as accepted | Initial dedicated security review |
| 2026-05-10 | /engage (6 agents) | 0 | 1 fixed in v2.14.2 (CI silent-failure) | 4 fixed in v2.14.2 | 5 fixed in v2.14.2 | Picard's code review pass post-campaign |
| 2026-05-10 | Final Victory Gauntlet (5 rounds) | 1 fixed in v2.14.1 (/patterns invisibility) | 2 fixed in v2.14.1 | — | — | Closed before /campaign victory |
| 2026-05-10 | Gauntlet checkpoint (3 rounds) | 0 | 0 | 3 folded into Campaign B | — | Mid-campaign |
