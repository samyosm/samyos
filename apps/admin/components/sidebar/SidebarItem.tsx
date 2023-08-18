'use client';

import { HeaderItem, HeaderItemProps } from '@samyos/ui';

export interface SidebarItemProps {
  item: HeaderItemProps;
  app_slug: string;
}

// TODO: Add keyboard shortcuts to access
export const SidebarItem = (props: SidebarItemProps) => {
  return (
    <HeaderItem
      label={props.item.label}
      href={props.app_slug + props.item.href}
    />
  );
};
