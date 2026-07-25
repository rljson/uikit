// @license
// Copyright (c) 2026 rljson
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { injectStyle } from '../theme/inject-style.ts';

/**
 * Options for {@link helloWorld}.
 */
export interface HelloWorldOptions {
  /** The name to greet, defaults to 'world'. */
  name?: string;
}

const css = `
.uk-hello-world {
  margin: 0;
  font-size: 1.25rem;
  overflow-wrap: break-word;
}
`;

/**
 * Creates a hello-world greeting element.
 *
 * Renders a single paragraph greeting the given name. The component adapts
 * to its container and injects its styles on first use.
 * @param options - Optional component options, see {@link HelloWorldOptions}.
 * @returns The greeting paragraph element.
 */
export const helloWorld = (options: HelloWorldOptions = {}): HTMLElement => {
  injectStyle('uk-hello-world-style', css);

  const name = options.name ?? 'world';

  const paragraph = document.createElement('p');
  paragraph.className = 'uk-hello-world';
  paragraph.dataset.testid = 'hello-world';
  paragraph.textContent = `Hello, ${name}!`;
  return paragraph;
};
