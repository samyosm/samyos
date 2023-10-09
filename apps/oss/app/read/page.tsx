import {allOsses, oss} from 'contentlayer/generated';
import {Metadata} from 'next';
import {Section} from '../../components/section/Section';
import {Class} from '../../../../contentlayer.config';
import {compareDesc} from 'date-fns'
import {ArticleCard} from "@samyos/shared/ui/server";

export const metadata: Metadata = {
  title: 'Read — Osmium OSS',
};

const getOssClass = (name: string) => {
  return allOsses.filter(t => t.class.name === name).sort((a, b) => compareDesc(new Date(a.core.datePublished), new Date(b.core.datePublished)));
}

const classes = [...getOssClass("article"), ...getOssClass("story"), ...getOssClass("tool")];

const getSections = () => {
  const map = new Map<string, oss[]>();

  classes.forEach((f) => {
    const cl: Class = f.class;

    if (!map.has(cl.name)) {
      map.set(cl.name, [f]);
    } else {
      map.get(cl.name)?.push(f);
    }
  });

  return Array.from(map, ([name, documents]) => ({name, documents}));
};


export default function Page() {
  return (
    <div className="space-y-16 px-8 md:px-0 max-w-4xl mx-auto">
      {getSections().map((doc) => (
        <Section
          key={doc.name}
          title={doc.name}
          class="grid grid-cols-1 gap-12"
        >
          {doc.documents.map((post) => (
            <ArticleCard key={post.core.title} post={post}/>
          ))}
        </Section>
      ))}
    </div>
  );
}
