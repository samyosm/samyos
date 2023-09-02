import cn from 'clsx';
import { memo } from 'react';
import Link from 'next/link';
import { FaUpRightFromSquare as OutsideIcon } from 'react-icons/fa6';
import { Text } from '../text';

export interface HyperLinkProps {
  children: string;

  variant?: 'solid' | 'emphasized' | 'unemphasized';
  href: string;

  /** _blank is preferable */
  target?: '_self' | '_blank';
  locale?: string;
}

/** An anchor link (`<a>`).*/
export const HyperLink = memo(
  ({ variant = 'solid', children, href, target, locale }: HyperLinkProps) => {
    const variantStyle = {
      solid:
        'bg-primary-400 underline hover:bg-primary-500 active:bg-primary-400 text-neutral-100 px-3',
      emphasized: 'text-primary-500 hover:underline',
      unemphasized: 'text-slate-500 hover:underline',
    };

    return (
      <Link locale={locale} href={href}>
        <div className={cn('rounded-lg py-1 w-fit', variantStyle[variant])}>
          <Text LeadingIcon={target === '_blank' ? OutsideIcon : undefined}>
            {children}
          </Text>
        </div>
      </Link>
    );
  }
);
