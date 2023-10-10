import { DocumentTypes } from 'contentlayer/generated';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import cn from 'clsx';

export interface ArticleCardProps {
  post: DocumentTypes;
}

export async function ArticleCard({ post }: ArticleCardProps) {
  if (!post.core.image) {
    throw new Error('Image cannot be null');
  }
  const image = (
    await import(/* webpackMode: "eager" */ `cms/assets/${post.core.image.src}`)
  ).default;

  return (
    <Link
      href={post.url}
      className={cn(
        'w-full h-fit flex gap-3 ring-1 ring-neutral-300 shadow-lg rounded-lg overflow-hidden p-5',
        'sm:flex-row flex-col-reverse'
      )}
    >
      <div className="space-y-6 w-full">
        <div className="space-y-2">
          <h1 className="text-lg md:text-2xl font-medium">{post.core.title}</h1>
          <p className="text-xs text-neutral-600 [&>*:not(:last-child)]:after:content-['_•_']">
            <time dateTime={post.core.dateModified}>
              {format(parseISO(post.core.dateModified), 'LLLL d, yyyy')}
            </time>
            <span>by Samy Rahmani</span>
          </p>
        </div>
        <p className="hidden line-clamp-3 sm:line-clamp-4 leading-relaxed text-sm md:text-base">
          {post.core.description}
        </p>
      </div>
      <div
        className={cn(
          'rounded-md overflow-hidden',
          'relative sm:w-2/3 sm:h-auto h-32'
        )}
      >
        <Image
          className="object-cover"
          sizes="33vw"
          placeholder="blur"
          fill
          src={image}
          alt={post.core.image.alt ?? post.core.title}
        />
      </div>
    </Link>
  );
}

export default ArticleCard;
