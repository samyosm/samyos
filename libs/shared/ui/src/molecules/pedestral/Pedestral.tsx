import cn from 'clsx';
import { Text } from '../../atoms/text';
import { IconBaseProps } from 'react-icons';

export interface PedestralProps {
  title: string;
  Symbol: React.ComponentType<IconBaseProps>;
  description?: string;
  children?: React.ReactNode;
}

export const Pedestral = ({
  Symbol,
  title,
  description,
  children,
}: PedestralProps) => {
  return (
    <div className={cn('flex flex-col items-center gap-2 text-neutral-900')}>
      <div className="flex flex-col gap-1 items-center">
        <Symbol className="text-3xl" />
        <Text level="organism">{title}</Text>
      </div>

      <span className="max-w-md md:max-w-none hyphens-manual">
        {description}
      </span>
      <span>{children}</span>
    </div>
  );
};
