import cn from 'classnames';

export interface SkeletonBadgeProps {
  label?: React.ReactNode;
}

/** A skeleton button when a component is loading */
export const SkeletonBadge = ({
  label = '0000000', // 7ch per the CSS spec
}: SkeletonBadgeProps) => {
  return (
    <button
      className={cn('rounded-md text-xs font-medium px-2 py-1 w-fit skeleton')}
    >
      {label}
    </button>
  );
};
