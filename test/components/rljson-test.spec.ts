// @license
// Copyright (c) 2026 rljson
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { describe, expect, it, vi } from 'vitest';

import {
  defineRljsonTest,
  RljsonTest,
  rljsonTestTag,
} from '../../src/components/rljson-test.ts';

describe('rljson-test', () => {
  it('registers the custom element idempotently', () => {
    defineRljsonTest();
    defineRljsonTest(); // second call must not throw
    expect(customElements.get(rljsonTestTag)).toBe(RljsonTest);
  });

  it('registers into an explicitly passed registry', () => {
    const define = vi.fn();
    const registry = {
      get: () => undefined,
      define,
    } as unknown as CustomElementRegistry;
    defineRljsonTest(registry);
    expect(define).toHaveBeenCalledWith(rljsonTestTag, RljsonTest);
  });

  it('renders projected content with the uikit styling', () => {
    defineRljsonTest();
    const element = document.createElement(rljsonTestTag);
    element.textContent = 'Hello';
    document.body.append(element);

    expect(element).toBeInstanceOf(RljsonTest);
    expect(element.classList.contains('uk-rljson-test')).toBe(true);
    expect(element.textContent).toBe('Hello');
    expect(document.head.querySelector('#uk-rljson-test-style')).toBeTruthy();

    element.remove();
  });
});
