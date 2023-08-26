import cn from 'clsx';
import { HeaderLink } from '../../atoms';
export interface HeaderProps {
  logo: React.ReactNode;
  children?: React.ReactNode;
  items: HeaderItem[];
}

export interface HeaderItem {
  label: string;
  href: string;
  locale: string;
}

export const Header = ({ logo, children, items }: HeaderProps) => {
  return (
    <header className={cn('flex justify-between bg-other-500 px-5')}>
      {logo}
      <div>
        <nav>
          <ul className="flex">
            {items.map((item) => (
              <HeaderLink
                href={item.href}
                locale={item.locale}
                label={item.label}
              />
            ))}
          </ul>
        </nav>
        {children}
      </div>
    </header>
  );
};
