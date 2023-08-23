import cn from 'classnames';

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;

  variant?: 'page' | 'section' | 'organism' | 'unemphasized';
}

/** An atom for ensuring good text hierarchy. */
export const Text = ({
  children,
  variant = 'section',
  ...props
}: TextProps) => {
  return (
    <span
      {...props}
      className={cn('first-letter:uppercase', {
        'font-bold text-2xl uppercase': variant === 'page',
        'text-lg font-bold': variant === 'section',
        'font-medium': variant === 'organism',
        'text-sm opacity-70': variant === 'unemphasized',
      })}
    >
      {children}
    </span>
  );
};
