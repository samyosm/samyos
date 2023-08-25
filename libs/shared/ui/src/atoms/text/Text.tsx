import cn from 'classnames';
import { SkeletonText } from './SkeletonText';

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;

  variant?: 'page' | 'section' | 'organism' | 'unemphasized';
  loading?: boolean;
  className?: string;
}

/** An atom for ensuring good text hierarchy. */
export const Text = ({
  children,
  variant = 'organism',
  loading = false,
  className,
  ...props
}: TextProps) => {
  if (loading) {
    return <SkeletonText children={children} variant={variant} {...props} />;
  }
  return (
    <span
      {...props}
      className={cn('first-letter:uppercase', className, {
        'font-bold text-4xl uppercase': variant === 'page',
        'text-lg font-bold': variant === 'section',
        'font-medium': variant === 'organism',
        'text-sm opacity-70': variant === 'unemphasized',
      })}
    >
      {children}
    </span>
  );
};
