// @license
// Copyright (c) 2026 rljson
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import type { Meta, StoryObj } from '@storybook/html-vite';

import { helloWorld, type HelloWorldOptions } from './hello-world.ts';

const meta: Meta<HelloWorldOptions> = {
  title: 'UiKit/HelloWorld',
  render: (args) => helloWorld(args),
  argTypes: { name: { control: 'text' } },
};

export default meta;

type Story = StoryObj<HelloWorldOptions>;

/** The greeting with its default name. */
export const Default: Story = {};

/** The greeting with a custom name. */
export const CustomName: Story = {
  args: { name: 'rljson' },
};
