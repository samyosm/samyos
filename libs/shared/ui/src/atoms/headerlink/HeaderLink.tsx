import cn from 'clsx';
import { Text } from '../text/Text';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface HyperLinkProps {
  label: string;
  href: string;
  locale: string;
}

export const HeaderLink = ({ label, href, locale }: HyperLinkProps) => {
  const pathname = usePathname() || '/';
  const active = pathname.endsWith(href);
  return (
    <li>
      <Link
        locale={locale}
        href={href}
        className={cn(
          'font-medium hover:bg-other-400 border-b-[4px] px-3 py-5 block w-fit',
          {
            'border-b-other-50 text-other-50': active,
            'text-other-200 hover:text-other-50 hover:border-b-other-50 border-b-transparent':
              !active,
          }
        )}
      >
        <Text level="atom">{label}</Text>
      </Link>
    </li>
  );
};
