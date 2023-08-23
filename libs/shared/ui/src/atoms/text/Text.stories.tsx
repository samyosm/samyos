import type { Meta } from '@storybook/react';
import { Text } from './Text';

export default {
  component: Text,
  tags: ['autodocs'],
  args: {
    children: 'Dream big and dare to fail.',
    variant: 'organism',
    loading: false,
  }
} satisfies Meta<typeof Text>;


/** To be used for big title pages.
 *
 * Note: At most one per page. */
export const Page = {
  args: {
    variant: 'page',
  },
};

/** To be used for sections in a page. */
export const Section = {
  args: {
    variant: 'section',
  },
};

/** To be used for organism titles. */
export const Organism = {
  args: {
    variant: 'organism',
  },
};

/** To be used for unimportant elements.
 * E.g. disclosures, copyright, non-essential descriptions. */
export const Unemphasized = {
  args: {
    variant: 'unemphasized',
  },
};

/** To be used for unloaded text. */
export const Loading = {
  args: {
    loading: true,
  },
};








