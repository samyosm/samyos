import { IconBaseProps } from 'react-icons';
import { WithIcons } from '../../layouts/withIcons/WithIcons';
import { SkeletonBadge } from './SkeletonBadge';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant: 'success' | 'error' | 'info';

  children: React.ReactNode;
  LeftIcon?: React.ComponentType<IconBaseProps>;
  RightIcon?: React.ComponentType<IconBaseProps>;

  loading?: boolean;
}

/** To represent tags or other important informations. */
export const Badge = ({
  className,
  children,
  variant = 'info',

  LeftIcon,
  RightIcon,

  loading = false,

  ...props
}: BadgeProps) => {
  const colorVariants = {
    success: 'bg-green-50 text-green-700 ring-green-600/20',
    error: 'bg-red-50 text-red-700 ring-red-600/10',
    info: 'bg-secondary-50 text-secondary-700 ring-secondary-700/10',
  };

  if (loading) {
    return (
      <SkeletonBadge
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
    <p
      className={`rounded-md text-xs font-medium ring-1 ring-inset px-2 py-1 w-fit ${colorVariants[variant]}`}
      {...props}
    >
      <WithIcons LeftIcon={LeftIcon} RightIcon={RightIcon}>
        {children}
      </WithIcons>
    </p>
  );
};
