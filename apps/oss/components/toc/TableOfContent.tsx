import cn from 'clsx';
import Link from 'next/link';
import {Heading} from '../../app/types/Heading';

export interface TableOfContentProps {
  headings: Heading[];
}

export interface TOCHeadingProps {
  heading: Heading;
}

export const TOCHeading = (props: TOCHeadingProps) => {
  const levelStyle: { [key: number]: string } = {
    2: 'py-3',
    3: 'ml-4 text-sm',
  };

  return (
    <li>
      <Link
        href={`#${props.heading.slug}`}
        className={cn(
          'block hover:underline',
          levelStyle[Math.min(props.heading.level, 3)],
        )}
      >
        {props.heading.text}
      </Link>
    </li>
  );
};

export const TableOfContent = (props: TableOfContentProps) => {
  const headings = props.headings.filter((h) => h.level <= 3 && h.level != 1);
  return (
    <aside
      className="md:sticky md:top-32 w-full md:max-w-sm h-fit max-h-[36rem] overflow-y-auto rounded-lg shadow-lg">
      <p
        className="bg-neutral-700 text-neutral-100 text-xl font-medium p-5 sticky top-0">
        Table Of Content
      </p>
      <ol
        className="border-neutral-700 text-neutral-900 border-2 border-t-0 rounded-lg rounded-t-none bg-neutral-50 py-5 pl-5 text-base list-['→'] [&>*]:pl-2">
        {headings.map((h) => <TOCHeading key={h.slug} heading={h}/>)}
      </ol>
    </aside>
  );
};
