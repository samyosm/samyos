import { Header, Text } from '@samyos/shared/ui';
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

  const items = [
    {
      label: 'Home',
      locale: 'en',
      href: '/',
    },
    {
      label: 'Watch',
      locale: 'en',
      href: '/watch',
    },
    {
      label: 'Learn',
      locale: 'en',
      href: '/learn',
    },
  ];
  const Logo = <Text level="organism">SamyOs</Text>;

  return (
    <html lang={locale} className="h-screen">
      <body className="h-screen flex flex-col">
        <Header logo={Logo} items={items} />
        <main className="h-full">{children}</main>
      </body>
    </html>
  );
}
