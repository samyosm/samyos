import cn from 'classnames';

export interface SkeletonButtonProps {
  size: 'small' | 'base';
  label?: React.ReactNode;
}

/** A skeleton button when a component is loading */
export const SkeletonButton = ({
  size,
  label = '0000000000', // 10ch per the CSS spec
}: SkeletonButtonProps) => {
  return (
    <button
      className={cn('rounded-lg skeleton', {
        'px-2 py-1 text-sm': size === 'small',
        'px-3 py-2': size === 'base',
      })}
    >
      {label}
    </button>
  );
};
