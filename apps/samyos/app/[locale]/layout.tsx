import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Locale',
};

export type LocaleParams = {
  locale: string;
};

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: LocaleParams;
}) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
