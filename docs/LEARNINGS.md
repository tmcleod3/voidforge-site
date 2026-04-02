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
