'use client';
import { Collection } from 'apps/admin/components/collection/Collection';
import { CollectionItemProps } from 'apps/admin/components/collection/CollectionItem';
import { English, French } from 'apps/admin/types/Locale';

export const Client = () => {
  const handleClick = () => {
    console.log('Hello, world!');
  };


  const tempItems = [
    {
      label: "Projects",
      locales: [French, English],
      selected: true,
    },
    {
      label: "Categories",
      locales: [French, English],
      selected: false,
    },
  ] satisfies CollectionItemProps[]

  return (
    <div className="h-screen bg-secondary-500 flex">
      <Collection items={tempItems} onClick={handleClick} title="Types" />
    </div>
  );
};
