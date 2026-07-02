<!--
@license
Copyright (c) 2026 rljson

Use of this source code is governed by terms that can be
found in the LICENSE file in the root of this package.
-->

# @rljson/uikit

A rljson **UI kit** for browser apps, published as an npm library. The
package ships:

- A **library build** (`src/index.ts` → `dist/index.js` + `dist/index.d.ts`).
- A **Vite** demo app (`index.html` + `src/main.ts`) used for local dev and
  as the target of the e2e tests — it is not part of the published package.
- **Vitest** unit tests (`test/**/*.spec.ts`, jsdom environment).
- **Playwright** end-to-end tests (`test/e2e/**/*.e2e.ts`).
- **Screenshot snapshots** stored in `test/golden/snapshots`.

## Installation

```bash
pnpm add @rljson/uikit
```

```ts
import { renderApp } from '@rljson/uikit';

renderApp(document.querySelector('#app')!);
```

## Getting started

```bash
pnpm install
pnpm exec playwright install chromium   # one-time: download the browser
pnpm dev          # start the demo app's dev server
pnpm test         # vitest unit tests + coverage + lint
pnpm test:e2e     # playwright e2e tests (writes/compares screenshots)
pnpm build        # library build (dist/index.js + dist/index.d.ts)
```

## Layout

| Path                     | Purpose                                             |
| ------------------------ | --------------------------------------------------- |
| `src/index.ts`           | Public library entry point.                         |
| `src/app.ts`             | Reusable, testable UI logic.                        |
| `src/main.ts`            | Demo app bootstrap — mounts `#app` (not published). |
| `test/*.spec.ts`         | Vitest unit tests.                                  |
| `test/e2e/*.e2e.ts`      | Playwright e2e tests against the demo app.          |
| `test/golden/snapshots/` | Committed screenshot snapshots.                     |
| `playwright.config.ts`   | Playwright config (web server + snapshot path).     |

## Snapshot policy

Screenshot snapshots are **written** on first run (`updateSnapshots: 'missing'`)
and **compared** on later runs. The actual review of the rendered output is done
via `git diff` of the committed PNGs — mirroring the golden-file policy of the
rljson libraries. Use `pnpm updateSnapshots` to refresh them intentionally.

## Publishing

`pnpm build` type-checks, bundles `src/index.ts` into `dist/index.js`, and
emits `dist/index.d.ts`. Only `dist/`, `LICENSE`, and `README.md` are
included in the published package (see `files` in `package.json`). Run
`pnpm publish` to publish — `prepublishOnly` runs the build automatically.
