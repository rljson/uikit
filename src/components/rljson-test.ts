// @license
// Copyright (c) 2026 rljson
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { injectStyle } from '../theme/inject-style.ts';

/** The tag name of the {@link RljsonTest} custom element. */
export const rljsonTestTag = 'rljson-test';

const css = `
.uk-rljson-test {
  display: block;
  margin: 0;
  font-size: 1.25rem;
  overflow-wrap: break-word;
}
`;

/**
 * Custom element `<rljson-test>` — renders its projected content with the
 * uikit text styling.
 *
 * Usage: `<rljson-test>Hello</rljson-test>` displays "Hello". The content
 * stays in the light DOM, so any markup can be projected.
 */
export class RljsonTest extends HTMLElement {
  /** Applies the uikit styling when the element enters the document. */
  connectedCallback(): void {
    injectStyle('uk-rljson-test-style', css, this.ownerDocument);
    this.classList.add('uk-rljson-test');
  }
}

/**
 * Registers the `<rljson-test>` custom element. Idempotent — safe to call
 * multiple times.
 * @param registry - The custom element registry to register in.
 */
export const defineRljsonTest = (
  registry: CustomElementRegistry = customElements,
): void => {
  if (!registry.get(rljsonTestTag)) {
    registry.define(rljsonTestTag, RljsonTest);
  }
};
