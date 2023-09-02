'use client';

import { usePathname } from 'next-intl/client';
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
      <HyperLink
        locale={locale}
        href={href}
        variant={active ? 'solid' : 'unemphasized'}
      >
        {label}
      </HyperLink>
    </li>
  );
};
