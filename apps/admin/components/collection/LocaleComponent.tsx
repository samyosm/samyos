import { Locale } from 'apps/admin/types/Locale';

export const LocaleComponent = (props: Locale) => {
  return (
    <p className="first-letter:uppercase">
      {props.englishName} ({props.subtag})
    </p>
  );
};
