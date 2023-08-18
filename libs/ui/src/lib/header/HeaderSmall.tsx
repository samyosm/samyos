import { useState } from 'react';
import { Samyos } from '../logos/Samyos';
import { HeaderProps } from './Header';
import { HeaderItem } from './HeaderItem';
import cn from 'classnames';
import { MdMenu as Menu, MdClose as Close } from 'react-icons/md';
import { Button } from '../button/Button';
import { useScrollTopDetector } from '@samyos/hooks';

/**
 * This is a header for devices with a small width; e.g. phones */
export const HeaderSmall = (props: HeaderProps) => {
  const isAtTop = useScrollTopDetector();
  const [open, setOpen] = useState(true);

  return (
    <div className="md:hidden relative">
      <div
        className={cn('bg-white/90  p-5 flex items-center justify-between', {
          'shadow-sm shadow-gray-200': !isAtTop,
        })}
      >
        <Samyos />
        <button onClick={() => setOpen(true)}>
          <Menu className="text-xl" />
        </button>
      </div>

      <nav
        className={cn(
          'absolute w-full h-screen inset-0 bg-white flex flex-col translate-x-0 transition-transform',
          {
            '!translate-x-full scale-0': !open,
          }
        )}
      >
        <div
          className={cn(
            'bg-white/90 p-5 flex items-center justify-between border-b'
          )}
        >
          <Samyos />
          <Button
            variant="unstyled"
            onClick={() => setOpen(false)}
            icon={<Close />}
          />
        </div>

        <ul className="p-5 flex flex-col gap-3">
          {props.items.map((item) => (
            <HeaderItem key={item.label} {...item} />
          ))}
        </ul>

        <div className="mt-auto p-5">{props.verticalCTA}</div>
      </nav>
    </div>
  );
};
