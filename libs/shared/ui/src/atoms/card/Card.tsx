import cn from 'clsx';
import { Text } from '../text';

export interface CardProps {
  title: string;
  children: React.ReactNode;
}

export const Card = ({ title, children }: CardProps) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-1 bg-white rounded-xl ring-1 ring-inset ring-neutral-200 p-5 shadow-lg'
      )}
    >
      <Text level="organism">{title}</Text>
      <span>{children}</span>
    </div>
  );
};
