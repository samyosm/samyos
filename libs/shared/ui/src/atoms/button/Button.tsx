import cn from 'classnames';
import { memo } from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Controls what's display in the button's title
   *
   * _Note_: The very first letter is capitalized
   */
  children: React.ReactNode;
}

/** A*/
export const Button = memo(({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn('text-secondary-500 first-letter:uppercase', className)}
      {...props}
    >
      {children}
    </button>
  );
});
