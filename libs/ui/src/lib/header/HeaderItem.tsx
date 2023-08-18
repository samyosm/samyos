'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactElement } from 'react';
import cn from 'classnames';

export interface HeaderItemProps {
  /** Note: This will get capitalized */
  label: string;
  href: string;
  icon?: ReactElement;
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
          'first-letter:uppercase transition-colors flex items-center gap-2 px-5 py-3 rounded-2xl text-gray-500 hover:bg-secondary-400 hover:text-secondary-text active:bg-secondary-300',
          {
            'bg-secondary-400 text-secondary-text': path.endsWith(props.href),
          }
        )}
      >
        {props.icon && <span className="text-xl">{props.icon}</span>}
        {props.label}
      </Link>
    </li>
  );
};
