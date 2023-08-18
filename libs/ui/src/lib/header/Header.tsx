import { ReactElement } from 'react';
import { HeaderItemProps } from './HeaderItem';
import { HeaderLarge } from './HeaderLarge';
import { HeaderSmall } from './HeaderSmall';

export interface HeaderProps {
  items: HeaderItemProps[];
  horizontalCTA: ReactElement;
  verticalCTA: ReactElement;
}

/**
 * This is a header */
export const Header = (props: HeaderProps) => {
  return (
    <header>
      <HeaderLarge {...props} />
      <HeaderSmall {...props} />
    </header>
  );
};
