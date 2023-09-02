import datejs from 'dayjs';
import { Text } from '../../1-atoms';
import { IconBaseProps } from 'react-icons';

export interface TimeEventProps {
  date: Date | string;
  title: string;
  children: React.ReactNode;
  Icon: React.ComponentType<IconBaseProps>;
}

export const TimeEvent = ({ date, title, children, Icon }: TimeEventProps) => {
  return (
    <li className="flex flex-col gap-2">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-primary-50 rounded-full -left-3 ring-8 ring-white mt-0.5">
        <Icon aria-hidden="false" className="text-primary-500" />
      </span>

      <div>
        <Text level="organism">{title}</Text>
        <time className="text-sm block text-neutral-700">
          {date instanceof Date ? datejs(date).format('MMM YYYY') : date}
        </time>
      </div>
      <span>{children}</span>
    </li>
  );
};
