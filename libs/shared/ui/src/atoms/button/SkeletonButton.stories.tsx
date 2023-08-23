import type { Meta } from '@storybook/react';
import { SkeletonButton, SkeletonButtonProps } from './SkeletonButton';

export default {
  component: SkeletonButton,
  tags: ['autodocs'],
} satisfies Meta<typeof SkeletonButton>;

export const Base = {
  args: {
    size: 'base',
  } satisfies SkeletonButtonProps,
};
