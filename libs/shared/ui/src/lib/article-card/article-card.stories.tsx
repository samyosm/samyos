import type {Meta, StoryObj} from '@storybook/react';
import {ArticleCard} from './article-card';

import {within} from '@storybook/testing-library';
import {expect} from '@storybook/jest';
import {allOsses} from "contentlayer/generated";

const meta: Meta<typeof ArticleCard> = {
  component: ArticleCard,
  title: 'Article Card',
  args: {
    post: allOsses[0],
  },
};
export default meta;
type Story = StoryObj<typeof ArticleCard>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Article!/gi)).toBeTruthy();
  },
};
