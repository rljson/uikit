// @license
// Copyright (c) 2026 rljson
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { beforeEach, describe, expect, it } from 'vitest';

import { helloWorld } from '../../src/components/hello-world.ts';

describe('helloWorld', () => {
  beforeEach(() => {
    document.head.innerHTML = '';
    document.body.innerHTML = '';
  });

  it('greets the world by default', () => {
    expect(helloWorld().textContent).toBe('Hello, world!');
  });

  it('greets a custom name', () => {
    expect(helloWorld({ name: 'rljson' }).textContent).toBe('Hello, rljson!');
  });

  it('uses the uk-hello-world class', () => {
    expect(helloWorld().classList.contains('uk-hello-world')).toBe(true);
  });

  it('exposes a data-testid hook', () => {
    expect(helloWorld().dataset.testid).toBe('hello-world');
  });

  it('injects its style once, even for multiple instances', () => {
    helloWorld();
    expect(document.head.querySelector('#uk-hello-world-style')).not.toBeNull();
    helloWorld();
    expect(
      document.head.querySelectorAll('#uk-hello-world-style'),
    ).toHaveLength(1);
  });

  it('returns a paragraph element', () => {
    expect(helloWorld()).toBeInstanceOf(HTMLParagraphElement);
  });
});
