import cn from 'clsx';

export interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

export const Timeline = ({ children, className }: TimelineProps) => {
  return (
    <ol
      className={cn(
        'relative border-l-2 pl-6 border-primary-500 flex flex-col gap-6',
        className
      )}
    >
      {children}
    </ol>
  );
};
