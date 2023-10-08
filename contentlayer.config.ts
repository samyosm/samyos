import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import GithubSlugger from 'github-slugger';
import type { Document } from 'contentlayer/core';

const CORE = defineNestedType(() => ({
  name: 'CORE',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    datePublished: { type: 'date', required: true },
    dateModified: { type: 'date', required: true },
  },
}));

const CLASS = defineNestedType(() => ({
  name: 'CLASS',
  fields: {
    name: { type: 'string', required: true },
    hidden: { type: 'boolean', required: true },
  },
}));

export interface Class {
  name: string;
  hidden: boolean;
}

const defineDocument = ({ name }: { name: string }) => {
  return defineDocumentType(() => ({
    name,
    filePathPattern: `${name.toLowerCase()}/**/*.md`,
    fields: [
      {
        name: 'core',
        type: 'nested',
        of: CORE,
        required: true,
      },
    ],
    computedFields: {
      url: {
        type: 'string',
        resolve: (post) => `/read/${post._raw.flattenedPath}`,
      },
      headings: {
        type: 'json',
        resolve: headingResolve,
      },
      class: {
        type: 'nested',
        of: CLASS,
        resolve: (post) => {
          const cl = post._raw.flattenedPath.split('/')[1];
          const hidden = cl.at(0) === '_';
          return {
            name: hidden ? cl.slice(1) : cl,
            hidden,
          } satisfies Class;
        },
      },
    },
  }));
};

const headingResolve = async (doc: Document) => {
  const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
  const slugger = new GithubSlugger();
  const headings = Array.from(
    (doc.body.raw as string).matchAll(regXHeader)
  ).map(({ groups }) => {
    const flag = groups?.flag;
    const content = groups?.content;
    return {
      level: flag?.length ?? 0,
      text: content ?? '',
      slug: content ? slugger.slug(content) : '',
    };
  });
  return headings as unknown as 'json';
};

export const Article = defineDocument({ name: 'Article' });
export const Story = defineDocument({ name: 'Story' });
export const Policies = defineDocument({ name: 'Policies' });
export const Contribute = defineDocument({ name: 'Contribute' });
export const Tools = defineDocument({ name: 'Tools' });

export const OSS = defineDocument({ name: 'oss' });

export default makeSource({
  disableImportAliasWarning: true,
  contentDirPath: './cms',
  documentTypes: [OSS],
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
        },
      ],
    ],
  },
});
