// @license
// Copyright (c) 2026 rljson
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import type { Meta, StoryObj } from '@storybook/html-vite';

import { defaultTitle, renderApp, type RenderAppOptions } from './app.ts';

const meta: Meta<RenderAppOptions> = {
  title: 'UiKit/App',
  render: (args) => renderApp(document.createElement('div'), args),
  args: { title: defaultTitle },
  argTypes: { title: { control: 'text' } },
};

export default meta;

type Story = StoryObj<RenderAppOptions>;

/** The app rendered with its default headline. */
export const Default: Story = {};

/** The app rendered with a custom headline. */
export const CustomTitle: Story = {
  args: { title: 'Hello World' },
};
