import { Button } from 'libs/ui/src/lib/button/Button';
import { MdOutlineAddBox as AddIcon } from 'react-icons/md';
import { CollectionItem, CollectionItemProps } from './CollectionItem';
import { AddNew } from './AddNew';

export interface CollectionProps {
  title: string;
  onClick?: () => void;
  items: CollectionItemProps[];
}

export const Collection = (props: CollectionProps) => {
  return (
    <div className="w-full max-w-xs bg-secondary-50 flex flex-col gap-2">
      <div className="flex justify-between p-5 items-center">
        <p className="font-bold uppercase text-secondary-500">{props.title}</p>
        <Button
          onClick={props.onClick}
          className="text-secondary-500"
          variant="unstyled"
          icon={<AddIcon className="text-2xl" />}
        />
      </div>

      <div className="px-5 flex flex-col gap-1">
        {props.items.map((item) => (
          <CollectionItem key={item.label} {...item} />
        ))}
      </div>

      <div className="mt-auto p-7 flex justify-center items-center">
        <AddNew onClick={props.onClick} />
      </div>
    </div>
  );
};
