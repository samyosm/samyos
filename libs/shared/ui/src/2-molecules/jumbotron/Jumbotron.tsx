import cn from 'clsx';
export interface JumbotronProps {
  title: React.ReactNode;
  description: React.ReactNode;
  children?: React.ReactNode;
}

export const Jumbotron = ({ title, description, children }: JumbotronProps) => {
  return (
    <div className={cn('flex flex-col gap-5 w-fit max-w-md')}>
      <span className="max-w-md">{title}</span>
      <span className="max-w-xs">{description}</span>
      {children && children}
    </div>
  );
};
