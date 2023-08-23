import cn from 'classnames';
import { memo } from 'react';
import Link from 'next/link';
import { WithIcons } from '../../layouts/withIcons/WithIcons';
import { FaUpRightFromSquare as OutsideIcon } from 'react-icons/fa6';

export interface HyperLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;

  variant?: 'primary' | 'secondary' | 'tetiary';
  href: string;

  /** _blank is preferable */
  target?: '_self' | '_blank';
}

/** An anchor link (`<a>`).*/
export const HyperLink = memo(
  ({ variant = 'secondary', children, ...props }: HyperLinkProps) => {
    return (
      <Link {...props}>
        <div
          className={cn('rounded-lg px-4 py-1 w-fit', {
            'bg-indigo-400 underline hover:bg-indigo-500 active:bg-indigo-400 text-secondary-text':
              variant === 'primary',
            'text-secondary-500 hover:underline': variant === 'secondary',
            'text-slate-500 hover:underline': variant === 'tetiary',
          })}
        >
          <WithIcons
            RightIcon={props.target === '_blank' ? OutsideIcon : undefined}
            iconSize="small"
          >
            {children}
          </WithIcons>
        </div>
      </Link>
    );
  }
);
