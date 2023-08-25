import { Button, Text } from '@samyos/shared/ui';
import { LocaleParams } from './layout';
import { getTranslator } from 'next-intl/server';

export default async function Index({ params }: { params: LocaleParams }) {
  const t = await getTranslator(params.locale, 'Index');
  return (
    <main className="min-h-screen">
      <div className="flex flex-col p-20 gap-2">
        <h1 className="">
          <Text variant="page">{t('title', { name: 'Samy' })}</Text>
        </h1>
        <Button className="w-fit" variant="primary">
          {t('cta')}
        </Button>
        <Text variant="unemphasized">{t('birth', { year: 21 })}</Text>
      </div>
    </main>
  );
}
