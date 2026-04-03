# Operational Learnings

Project-scoped knowledge that persists across sessions. See [/tutorial/learnings](https://voidforge.build/tutorial/learnings) for the full lifecycle.

---

### Void sync content audit requires semantic comparison
After a void sync, the marketing site needs both structural checks (do slugs/counts match?) AND semantic checks (do descriptions reflect new capabilities?). The v7 campaign caught all structural gaps but missed 9 stale command descriptions because the architect review only compared data presence, not data content.

- **category:** workflow
- **verified:** 2026-04-01
- **scope:** /void → /architect pipeline
- **evidence:** v7 architect muster (8 agents) found 0 of 14 content accuracy issues; user caught the gap
- **context:** Applies whenever a void sync adds new capabilities to existing commands (not just new commands/patterns)

### Major version jumps require majorEras entry in releases.ts
When a void sync crosses a major version boundary (e.g., v19 → v20), the `majorEras` map in `releases.ts` needs a new entry for the new major version number. Without it, the Prophecy page renders releases under the new major version without an era title or quote. The site builds successfully — the grouping logic silently falls back to no era header.

- **category:** workflow
- **verified:** 2026-04-02
- **scope:** /void → campaign pipeline (releases.ts)
- **evidence:** v9 Mission 1 required manually adding `"20"` to majorEras; no automated check flagged it
- **context:** Applies whenever VERSION.md jumps a major version. Could be caught by a consistency test (majorVersion in shipped releases → majorEras key exists).
