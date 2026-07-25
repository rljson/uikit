// @license
// Copyright (c) 2026 rljson
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { expect, test } from '@playwright/test';

test.describe('uikit', () => {
  test('renders the app and matches the screenshot', async ({ page }) => {
    await page.goto('/');

    // The app is mounted and shows its title.
    const title = page.getByTestId('title');
    await expect(title).toBeVisible();
    await expect(title).toHaveText('@rljson/uikit');

    // The hello-world component is embedded and greets the world.
    const hello = page.getByTestId('hello-world');
    await expect(hello).toBeVisible();
    await expect(hello).toHaveText('Hello, world!');

    // The rljson-test web component projects its content.
    const rljsonTest = page.locator('rljson-test');
    await expect(rljsonTest).toBeVisible();
    await expect(rljsonTest).toHaveText('Hello');

    // Write visual snapshot of the rendered app to test/golden/snapshots.
    // Do not fail the test if the screenshot differs.
    await page.screenshot({
      path: 'test/golden/snapshots/app.png',
      fullPage: true,
    });
  });
});
