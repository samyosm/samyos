import { allOsses } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { TableOfContent } from '../../../components/toc/TableOfContent';
import { Article } from '@samyos/shared/ui/server';

export const generateStaticParams = async () =>
  allOsses.map((post) => ({ slug: [post.type, post._raw.flattenedPath] }));

export const generateMetadata = ({
  params,
}: {
  params: { slug: string[] };
}) => {
  const post = allOsses.find(
    (post) => post._raw.flattenedPath === params.slug.join('/')
  );
  if (!post) {
    return notFound();
  }
  return { title: post.core?.title };
};

const PostLayout = ({ params }: { params: { slug: string[] } }) => {
  const post = allOsses.find(
    (post) => post._raw.flattenedPath === params.slug.join('/')
  );

  if (!post) {
    return notFound();
  }

  return (
    <div className="max-w-7xl mx-auto flex justify-between md:flex-row flex-col gap-16 md:gap-0 px-5">
      <TableOfContent headings={post.headings} />
      <Article
        headline={post.core.title}
        description={post.core.description ?? ''}
        author={'Samy Rahmani'}
        dateModified={new Date(post.core.datePublished)}
        datePublished={new Date(post.core.datePublished)}
        image={''}
        body={post.body.html}
      />
    </div>
  );
};

export default PostLayout;
