// @license
// Copyright (c) 2026 rljson
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import type { Meta, StoryObj } from '@storybook/html-vite';

import { defineRljsonTest, rljsonTestTag } from './rljson-test.ts';

/** Args of the `<rljson-test>` stories. */
interface RljsonTestArgs {
  /** The markup projected into the element's light DOM. */
  content: string;
}

const meta: Meta<RljsonTestArgs> = {
  title: 'UiKit/RljsonTest',
  render: ({ content }) => {
    defineRljsonTest();
    const element = document.createElement(rljsonTestTag);
    element.innerHTML = content;
    return element;
  },
  args: { content: 'Hello' },
  argTypes: { content: { control: 'text' } },
};

export default meta;

type Story = StoryObj<RljsonTestArgs>;

/** The element with plain projected text. */
export const Default: Story = {};

/** The content stays in the light DOM, so markup can be projected too. */
export const ProjectedMarkup: Story = {
  args: { content: 'Hello <strong>rljson</strong>!' },
};
