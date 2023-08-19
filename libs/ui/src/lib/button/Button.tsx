import cn from 'classnames';
import { ReactElement } from 'react';

export interface ButtonProps {
  /** Note: The first letter will get capitalized*/
  label?: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'unstyled';
  size?: 'base' | 'large';
  icon?: ReactElement;
  iconRight?: boolean;
  className?: string;
  onClick?: () => void;
}

/**
 * This is a button*/
export const Button = ({
  size = 'base',
  variant = 'secondary',
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={cn(
        'transition-colors flex items-center gap-2',
        props.className,
        {
          'px-3 py-2 rounded-lg': size === 'base',
          'p-5 rounded-2xl': size === 'large',
          'bg-primary-500 text-primary-text hover:bg-primary-600 active:bg-primary-500 shadow-sm shadow-primary-300':
            variant === 'primary',
          'bg-secondary-500 text-secondary-text hover:bg-secondary-600 active:bg-secondary-500':
            variant === 'secondary',
          'bg-white text-gray-500': variant === 'tertiary',
          '!p-0': variant === 'unstyled',
          'flex-row-reverse': props.iconRight,
        }
      )}
    >
      {props.icon && <span className="text-xl">{props.icon}</span>}
      {props.label && (
        <span className="first-letter:capitalize">{props.label}</span>
      )}
    </button>
  );
};
