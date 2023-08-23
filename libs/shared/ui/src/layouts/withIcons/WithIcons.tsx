import { IconBaseProps } from 'react-icons';
import cn from 'classnames';

export interface WithIconsProps {
  children: React.ReactNode;
  iconSize?: 'base' | 'small';

  LeftIcon?: React.ComponentType<IconBaseProps>;
  RightIcon?: React.ComponentType<IconBaseProps>;
}

/** For components that have children and icons on each side */
export const WithIcons = ({
  children,
  iconSize = 'base',
  LeftIcon,
  RightIcon,
}: WithIconsProps) => {
  const size = {
    'text-sm': iconSize === 'base',
    'text-xs': iconSize === 'small',
  };

  return (
    <span className="flex gap-1 items-center w-full h-full">
      {LeftIcon && <LeftIcon className={cn('opacity-90', size)} />}
      {children}
      {RightIcon && <RightIcon className={cn('opacity-90', size)} />}
    </span>
  );
};
