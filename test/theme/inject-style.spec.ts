// @license
// Copyright (c) 2026 rljson
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { beforeEach, describe, expect, it } from 'vitest';

import { injectStyle } from '../../src/theme/inject-style.ts';

describe('injectStyle', () => {
  beforeEach(() => {
    document.head.innerHTML = '';
  });

  it('creates a style element in the document head', () => {
    const style = injectStyle('test-style', '.a { color: red; }');
    expect(style).toBeInstanceOf(HTMLStyleElement);
    expect(style.parentElement).toBe(document.head);
    expect(style.id).toBe('test-style');
    expect(style.textContent).toBe('.a { color: red; }');
  });

  it('reuses the existing style element and updates its css', () => {
    const first = injectStyle('test-style', '.a { color: red; }');
    const second = injectStyle('test-style', '.a { color: blue; }');
    expect(second).toBe(first);
    expect(second.textContent).toBe('.a { color: blue; }');
    expect(document.head.querySelectorAll('#test-style')).toHaveLength(1);
  });

  it('honors an explicitly passed document', () => {
    const doc = document.implementation.createHTMLDocument('other');
    const style = injectStyle('test-style', '.a { color: red; }', doc);
    expect(style.ownerDocument).toBe(doc);
    expect(style.parentElement).toBe(doc.head);
    expect(document.head.querySelector('#test-style')).toBeNull();
  });
});
