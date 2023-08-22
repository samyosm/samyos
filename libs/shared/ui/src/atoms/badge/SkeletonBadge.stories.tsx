import type { Meta } from '@storybook/react';
import { SkeletonBadge, SkeletonBadgeProps } from './SkeletonBadge';

export default {
  component: SkeletonBadge,
  tags: ['autodocs'],
} satisfies Meta<typeof SkeletonBadge>;

export const Default = {
  args: {} satisfies SkeletonBadgeProps,
};
