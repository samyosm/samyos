import { IconBaseProps } from 'react-icons';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant: 'success' | 'error' | 'info';

  LeftIcon?: React.ComponentType<IconBaseProps>;
  RightIcon?: React.ComponentType<IconBaseProps>;
}

/** To represent tags or other important informations. */
export const Badge = ({
  className,
  children,
  variant = 'info',

  LeftIcon,
  RightIcon,
  ...props
}: BadgeProps) => {
  const colorVariants = {
    success: 'bg-green-50 text-green-700 ring-green-600/20',
    error: 'bg-red-50 text-red-700 ring-red-600/10',
    info: 'bg-secondary-50 text-secondary-700 ring-secondary-700/10',
  };

  return (
    <p
      className={`rounded-md text-xs font-medium ring-1 ring-inset px-2 py-1 w-fit ${colorVariants[variant]} flex items-center gap-1`}
      {...props}
    >
      {LeftIcon && <LeftIcon />}
      {children}
      {RightIcon && <RightIcon />}
    </p>
  );
};
