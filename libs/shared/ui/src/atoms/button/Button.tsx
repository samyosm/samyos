import cn from 'classnames';
import { memo } from 'react';
import { IconBaseProps } from 'react-icons';
import { SkeletonButton } from './SkeletonButton';
import { WithIcons } from '../../layouts/withIcons/WithIcons';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;

  variant?: 'primary' | 'secondary' | 'tetiary';
  size?: 'small' | 'base';

  LeftIcon?: React.ComponentType<IconBaseProps>;
  RightIcon?: React.ComponentType<IconBaseProps>;

  loading?: boolean;
}

/** Used for actions that do something. */
export const Button = memo(
  ({
    children,
    className,
    variant = 'primary',
    size = 'base',
    LeftIcon,
    RightIcon,
    loading = false,
    ...props
  }: ButtonProps) => {
    if (loading) {
      return (
        <SkeletonButton
          size={size}
          label={
            <WithIcons
              LeftIcon={LeftIcon}
              RightIcon={RightIcon}
              children={children}
            />
          }
        />
      );
    }

    return (
      <button
        className={cn(
          'rounded-lg border focus:ring focus:ring-secondary-300',
          className,
          {
            'bg-secondary-500 border-secondary-500 text-secondary-text hover:bg-secondary-600 active:bg-secondary-500':
              variant === 'primary',
            'text-secondary-500 border border-secondary-500 hover:bg-secondary-500 hover:text-secondary-text':
              variant === 'secondary',
            'border-none text-slate-600 active:text-slate-500 hover:underline':
              variant === 'tetiary',
          },
          {
            'px-2 py-1 text-sm': size === 'small',
            'px-3 py-2': size === 'base',
          }
        )}
        {...props}
      >
        <WithIcons
          LeftIcon={LeftIcon}
          RightIcon={RightIcon}
          children={children}
        />
      </button>
    );
  }
);
