import cn from 'clsx';
export interface SpaceProps {
  children: React.ReactNode;
  size: 'xl' | 'lg' | 'md';
  className?: string;
}

export const Space = ({ children, size, className }: SpaceProps) => {
  const sizeConfig = {
    xl: 'max-w-5xl',
    lg: 'max-w-lg',
    md: 'max-w-md',
  };

  return (
    <div className={cn('w-full py-20 px-6', className)}>
      <div className={cn('mx-auto', sizeConfig[size])}>{children}</div>
    </div>
  );
};
