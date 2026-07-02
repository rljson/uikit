// @license
// Copyright (c) 2026 rljson
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';

// Library-mode Vite config: `vite build` bundles `src/index.ts` into
// `dist/index.js` for publishing. `vite`/`vite dev` (used by the e2e tests
// and `pnpm dev`) is unaffected by `build.lib` and still serves the demo
// app defined in `index.html` + `src/main.ts`.
// https://vitejs.dev/config/
// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    outDir: 'dist',
    sourcemap: true,
    lib: {
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      formats: ['es'],
      fileName: 'index',
    },
  },
});
