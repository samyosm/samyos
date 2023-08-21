import cn from 'classnames';
import { memo } from 'react';
import { IconBaseProps } from 'react-icons';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Controls what's display in the button's title
   *
   * _Note_: The very first letter is capitalized
   */
  children: React.ReactNode;

  variant?: 'primary' | 'secondary' | 'tetiary';
  size?: 'small' | 'base';

  LeftIcon?: React.ComponentType<IconBaseProps>;
  RightIcon?: React.ComponentType<IconBaseProps>;
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
    ...props
  }: ButtonProps) => {
    return (
      <button
        className={cn(
          'rounded-lg border focus:ring focus:ring-secondary-300 flex items-center gap-1',
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
        {LeftIcon && <LeftIcon className="opacity-90" />}
        <span className="first-letter:uppercase">{children}</span>
        {RightIcon && <RightIcon className="opacity-90" />}
      </button>
    );
  }
);
