// @license
// Copyright (c) 2026 rljson
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { helloWorld } from './components/hello-world.ts';
import { defineRljsonTest, rljsonTestTag } from './components/rljson-test.ts';

/**
 * Options for {@link renderApp}.
 */
export interface RenderAppOptions {
  /** The headline shown by the example app. */
  title?: string;
}

/** The default headline used when no title is provided. */
export const defaultTitle = '@rljson/uikit';

/**
 * Renders the example app into the given mount element.
 *
 * This is the reusable, framework-free entry point of the template. Replace
 * its body with your own app while keeping it testable: it takes the mount
 * element (so unit tests can pass a jsdom element) and returns it.
 * @param mount - The element the app is rendered into.
 * @param options - Optional render options, see {@link RenderAppOptions}.
 * @returns The mount element, for convenient chaining in tests.
 */
export const renderApp = (
  mount: HTMLElement,
  options: RenderAppOptions = {},
): HTMLElement => {
  const title = options.title ?? defaultTitle;

  mount.innerHTML = '';

  const heading = document.createElement('h1');
  heading.textContent = title;
  heading.dataset.testid = 'title';

  defineRljsonTest();
  const rljsonTest = document.createElement(rljsonTestTag);
  rljsonTest.textContent = 'Hello';

  mount.append(heading, helloWorld(), rljsonTest);
  return mount;
};
