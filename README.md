# VoidForge.build

The marketing site for [VoidForge](https://github.com/tmcleod3/voidforge) — an open-source methodology framework that turns a PRD into a deployed production app using 260+ AI agents across 9 fictional universes.

**Live at [voidforge.build](https://voidforge.build)**

Built by VoidForge itself. Forged by Galadriel (frontend), Bilbo (copy), Stark (data), Batman (testing), Kenobi (security), Picard (architecture), Kusanagi (deploy), Coulson (releases), and Bombadil (sync).

## Stack

- **Framework:** Next.js 15 (App Router, static export)
- **Styling:** Tailwind CSS 4 + custom comic/pulp-sci-fi CSS
- **Animation:** Framer Motion
- **Syntax:** Shiki (build-time highlighting)
- **Search:** Fuse.js (client-side)
- **Hosting:** Vercel (static, edge-cached)
- **DNS:** Cloudflare

## Development

```bash
git clone https://github.com/tmcleod3/voidforge-site.git
cd voidforge-site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build (static export) |
| `npm run typecheck` | TypeScript type check |
| `npm run lint` | ESLint |
| `npm test` | Run tests (Vitest) |

## Structure

```
src/
  app/           Routes (Next.js App Router)
  components/    React components
  data/          TypeScript data files (agents, commands, patterns, releases)
  lib/           Utilities
  test/          Vitest tests
public/
  images/        Agent avatars, tutorial images, panels
docs/
  PRD.md         Product requirements
  patterns/      Code pattern reference implementations
  methods/       VoidForge methodology docs
```

## License

MIT
