import { MdOutlineCreateNewFolder as Icon } from 'react-icons/md';

export interface AddNewProps {
  onClick?: () => void;
}

export const AddNew = (props: AddNewProps) => {
  return (
    <button
      onClick={props.onClick}
      className="bg-white shadow-lg p-5 flex flex-col gap-2 rounded-lg group hover:bg-secondary-400 active:bg-secondary-300 ring-1 ring-slate-900/5 w-full"
    >
      <div className="flex gap-2">
        <Icon className="text-secondary-500 group-hover:text-white text-xl" />
        <p className="text-slate-900 group-hover:text-white text-sm font-semibold">
          New Type
        </p>
      </div>
      <p className="text-slate-500 text-sm group-hover:text-white">
        Create a new type.
      </p>
    </button>
  );
};
