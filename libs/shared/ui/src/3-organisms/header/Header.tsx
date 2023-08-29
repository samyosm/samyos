'use client';

import cn from 'clsx';
import { HeaderLink } from '../../1-atoms';
import { useTop } from '../../hooks/useTop';
export interface HeaderProps {
  logo: React.ReactNode;
  children?: React.ReactNode;
  items: HeaderItem[];
}

export interface HeaderItem {
  label: string;
  href: string;
  locale: string;
}

export const Header = ({ logo, children, items }: HeaderProps) => {
  const isAtTop = useTop();

  return (
    <header
      className={cn('flex justify-between p-5 sticky top-0', {
        'shadow-md': !isAtTop,
      })}
    >
      {logo}
      <nav>
        <ul className="flex gap-5">
          {items.map((item) => (
            <HeaderLink
              key={item.label}
              href={item.href}
              locale={item.locale}
              label={item.label}
            />
          ))}
        </ul>
      </nav>
      {children}
    </header>
  );
};
