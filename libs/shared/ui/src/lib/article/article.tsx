import { Article as ArticleLd, WithContext } from 'schema-dts';
import Image from 'next/image';
import { IMAGE } from 'contentlayer/generated';
import cn from 'clsx';

export interface ArticleProps {
  headline: string;
  description: string;
  author: string;
  dateModified: Date;
  datePublished: Date;
  image?: IMAGE;
  body: string;
}

export const Article = async ({
  headline,
  description,
  author,
  dateModified,
  datePublished,
  image,
  body,
}: ArticleProps) => {
  const actualImage = image
    ? (await import(/* webpackMode: "eager" */ `cms/assets/${image.src}`))
        .default
    : undefined;

  const jsonLd: WithContext<ArticleLd> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    image: actualImage?.src as string,
    headline,
    description,
    articleBody: body,
    author: {
      '@type': 'Person',
      name: author,
    },
    dateModified: dateModified.toISOString(),
    datePublished: datePublished.toISOString(),
    dateCreated: datePublished.toISOString(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col gap-8 md:gap-16">
        {image && (
          <div
            className={cn(
              'rounded-md overflow-hidden',
              'relative sm:w-full h-40 sm:h-96'
            )}
          >
            <Image
              className="object-cover"
              sizes="33vw"
              placeholder="blur"
              fill
              src={actualImage}
              alt={image.alt ?? headline}
            />
          </div>
        )}
        <article
          className="w-full prose prose-headings:font-medium prose-h1:border-b-2 prose-h1:pb-6 prose-slate md:text-xl leading-loose"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </>
  );
};

export default Article;
