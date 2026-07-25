# CLAUDE.md — @rljson/uikit

Public open-source repo (github.com/rljson/uikit, MIT): reusable,
framework-free browser UI components for Rljson apps.

## Component conventions

- Vanilla TypeScript — no Angular/React/Vue or any framework runtime.
- One component per file under `src/components/`.
- Factory functions returning an `HTMLElement`.
- Semantic, prefixed class names (`uk-*`); `data-testid` hooks for tests.
- Minimal semantic DOM; container-adaptive CSS (components adapt to their
  parent element, never the viewport, no fixed dimensions).
- Styles are injected via `injectStyle` (`src/theme/`) — **no CSS files in
  the lib**. `sideEffects: false`, so styles must be injected inside the
  factories themselves.

## Tooling & testing

- Vite lib build plus a demo app.
- Vitest (jsdom) with **100 % coverage thresholds**.
- Playwright e2e with **committed screenshot snapshots**: regenerate via
  `pnpm test:snapshots` and review the PNG diffs before committing.

## Workflow

- Run `pnpm test` before **every** commit.
- Never commit to `main`.
