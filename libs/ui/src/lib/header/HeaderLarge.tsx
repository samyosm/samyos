import { useScrollTopDetector } from '@samyos/hooks';
import { Samyos } from '../logos/Samyos';
import { HeaderProps } from './Header';
import { HeaderItem } from './HeaderItem';
import cn from 'classnames';

/**
 * This is a header for devices with a large width; e.g. tables or computers */
export const HeaderLarge = (props: HeaderProps) => {
  const isAtTop = useScrollTopDetector();

  return (
    <nav
      className={cn('hidden md:flex justify-between items-center p-5', {
        'shadow-sm shadow-gray-200': !isAtTop,
      })}
    >
      <Samyos />
      <ul className="flex gap-2">
        {props.items.map((item) => (
          <HeaderItem key={item.label} {...item} />
        ))}
      </ul>
      {props.horizontalCTA}
    </nav>
  );
};
