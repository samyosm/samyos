import Link from 'next/link';

import { allOsses, oss } from 'contentlayer/generated';
import { Metadata } from 'next';
import { Section } from '../../components/section/Section';
import { Class } from '../../../../contentlayer.config';

export const metadata: Metadata = {
  title: 'Read — Osmium OSS',
};

const getSections = () => {
  const map = new Map<string, oss[]>();

  allOsses.forEach((f) => {
    const cl: Class = f.class;
    if (cl.hidden) {
      return;
    }

    if (!map.has(cl.name)) {
      map.set(cl.name, [f]);
    } else {
      map.get(cl.name)?.push(f);
    }
  });

  return Array.from(map, ([name, documents]) => ({ name, documents }));
};

const ArticleLink = (props: oss) => {
  return (
    <Link
      className="p-7 rounded-2xl border-4 border-neutral-200 shadow group hover:border-sky-600"
      href={props.url}
    >
      <article className="space-y-6 h-full">
        <h2 className="text-xl md:text-xl text-neutral-900 font-medium leading-relaxed group-hover:text-sky-600 line-clamp-2">
          {props.core.title}
        </h2>
        <p className="group-hover:text-sky-600 text-xl leading-loose line-clamp-3">
          {props.core.description}
        </p>
      </article>
    </Link>
  );
};

export default function Page() {
  return (
    <div className="space-y-16 mx-8 md:mx-0">
      {getSections().map((doc) => (
        <Section
          key={doc.name}
          title={doc.name}
          class="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {doc.documents.map((post) => (
            <ArticleLink key={post.core?.title} {...(post as oss)} />
          ))}
        </Section>
      ))}
    </div>
  );
}
