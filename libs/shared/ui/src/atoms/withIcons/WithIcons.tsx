import { IconBaseProps } from 'react-icons';

export interface WithIconsProps {
  children: React.ReactNode;
  LeftIcon?: React.ComponentType<IconBaseProps>;
  RightIcon?: React.ComponentType<IconBaseProps>;
}

/** For components that have children and icons on each side */
export const WithIcons = ({
  children,
  LeftIcon,
  RightIcon,
}: WithIconsProps) => {
  return (
    <div className="flex gap-1 items-center">
      {LeftIcon && <LeftIcon className="opacity-90" />}
      {children}
      {RightIcon && <RightIcon className="opacity-90" />}
    </div>
  );
};
