'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactElement } from 'react';
import cn from 'classnames';

export interface HeaderItemProps {
  /** Note: This will get capitalized */
  label: string;
  href: string;
  icon: ReactElement;
}

// TODO: Add hrefLang
export const HeaderItem = (props: HeaderItemProps) => {
  const path = usePathname() || '/';
  return (
    <li>
      <Link
        href={props.href}
        type="button"
        className={cn(
          'first-letter:uppercase transition-colors flex items-center gap-2 p-5 rounded-2xl text-gray-500 hover:bg-secondary-500 hover:text-secondary-text active:bg-secondary-400',
          {
            'bg-secondary-500 text-secondary-text': path.endsWith(props.href),
          }
        )}
      >
        <span className="text-xl">{props.icon}</span>
        {props.label}
      </Link>
    </li>
  );
};
