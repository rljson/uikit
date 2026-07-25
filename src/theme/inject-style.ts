// @license
// Copyright (c) 2026 rljson
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

/**
 * Injects a CSS style sheet into the document head.
 *
 * If a style element with the given id already exists in the document head,
 * its CSS text is updated instead of adding a duplicate. Components call
 * this inside their factories so styles are only injected when a component
 * is actually used (the package is side-effect free).
 * @param id - The id of the style element, used to deduplicate injections.
 * @param css - The CSS text to inject.
 * @param doc - The document to inject into, defaults to the global document.
 * @returns The created or updated style element.
 */
export const injectStyle = (
  id: string,
  css: string,
  doc: Document = document,
): HTMLStyleElement => {
  const existing = doc.head.querySelector<HTMLStyleElement>(`#${id}`);
  if (existing) {
    existing.textContent = css;
    return existing;
  }

  const style = doc.createElement('style');
  style.id = id;
  style.textContent = css;
  doc.head.append(style);
  return style;
};
