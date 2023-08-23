import cn from 'classnames';

export interface DividerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A divider represent a break in the content that will be represented.
 * It primary allows us to group or seperate similar content together.
 *
 * You may use the children prop to organize what you would like to see
 * on the divider. By default everything has a `px-2`, `bg-white`,
 * `text-slate-500`, and is organized to the left. To change anything, you
 * can group the `children` prop under a `span` or a `div` and organize them
 * however you see fit; to change the default style use a bang before a tailwind
 * class name or use the `!important` rule in css.
 *
 * Removing the background will reveal the underlying divider.
 *
 * Preferably, children should be organized using margins & paddings instead of
 * flexbox; otherwise, it will be hard to have space between the divider.
 * */
export const Divider = ({ children, className, ...props }: DividerProps) => {
  return (
    <div className={cn('relative', className)}>
      <span className="text-slate-500 [&_p]:bg-white [&_p]:px-2">
        {children}
      </span>
      <hr className="-z-10 absolute top-1/2 right-0 w-full" />
    </div>
  );
};
