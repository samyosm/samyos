import cn from 'classnames';

export interface SkeletonTextProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;

  variant?: 'page' | 'section' | 'organism' | 'unemphasized';
}

/** An atom for ensuring good text hierarchy. */
export const SkeletonText = ({
  children,
  variant = 'section',
  ...props
}: SkeletonTextProps) => {
  return (
    <span
      {...props}
      className={cn('rounded-full skeleton', {
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
