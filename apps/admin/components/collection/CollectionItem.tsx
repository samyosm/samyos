import { Locale } from 'apps/admin/types/Locale';
import { LocaleComponent } from './LocaleComponent';
import cn from 'classnames';

export interface CollectionItemProps {
  label: string;
  locales: Locale[];
  selected: boolean;
}

export const CollectionItem = (props: CollectionItemProps) => {
  return (
    <button
      className={cn(
        'flex flex-col rounded-lg px-3 py-2 hover:bg-secondary-400 group hover:text-secondary-text active:bg-secondary-300 peer',
        {
          'bg-secondary-400 text-secondary-text': props.selected,
        }
      )}
    >
      <p>{props.label}</p>
      <div
        className={cn(
          'flex text-gray-500 text-sm gap-2 truncate group-hover:text-secondary-text',
          {
            'text-secondary-text': props.selected,
          }
        )}
      >
        {props.locales.map((locale) => (
          <LocaleComponent key={locale.subtag} {...locale} />
        ))}
      </div>
    </button>
  );
};
