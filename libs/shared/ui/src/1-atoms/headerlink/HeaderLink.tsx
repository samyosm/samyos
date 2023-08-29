'use client';

import { usePathname } from 'next/navigation';
import { HyperLink } from '../hyperlink';

export interface HeaderLinkProps {
  label: string;
  href: string;
  locale: string;
}

export const HeaderLink = ({ label, href, locale }: HeaderLinkProps) => {
  const pathname = usePathname() || '/';
  const active = pathname.endsWith(href);
  return (
    <li>
      <HyperLink href={href} variant={active ? 'solid' : 'unemphasized'}>
        {label}
      </HyperLink>
    </li>
  );
};
