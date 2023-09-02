import { Button, Card, Jumbotron, Pedestral, Space, Text } from '@samyos/shared/ui';
import { LocaleParams } from './layout';
import { getTranslator } from 'next-intl/server';
import {
  IoMdSearch as SearchIcon,
  IoMdLock as LockIcon,
  IoMdGitNetwork as ForkIcon
}
  from 'react-icons/io';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: LocaleParams;
}): Promise<Metadata> {
  const t = await getTranslator(params.locale, 'Index');

  return {
    title: t('page.title'),
  };
};

export default async function Index({ params }: { params: LocaleParams }) {
  const t = await getTranslator(params.locale, 'Index');

  return (
    <div className="w-full">
      <Space size='xl' className='bg-primary-50'>
        <Jumbotron
          title=<Text level='page' size='lg'>{t('hero.title')}</Text>
          description={t('hero.description')}
        >
          <Button className='w-fit'>{t('hero.cta')}</Button>
        </Jumbotron>
      </Space>


      <Space size='xl' className='bg-white'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <Pedestral
            Symbol={SearchIcon}
            title={t('pedestals.secure.title')}
            description={t('pedestals.secure.description')} />

          <Pedestral
            Symbol={LockIcon}
            title={t('pedestals.transparent.title')}
            description={t('pedestals.transparent.description')} />

          <Pedestral
            Symbol={ForkIcon}
            title={t('pedestals.active.title')}
            description={t('pedestals.active.description')} />
        </div>
      </Space>

      <Space size='xl' className='bg-primary-50'>
        <div>
          <Text level='page' size='md'>{t('freedoms.title')}</Text>
          <Text level='atom' size='md'>{t('freedoms.subtitle')}</Text>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
          <Card title={t('freedoms.freedom0.title')}>{t('freedoms.freedom0.definition')}</Card>
          <Card title={t('freedoms.freedom1.title')}>{t('freedoms.freedom1.definition')}</Card>
          <Card title={t('freedoms.freedom2.title')}>{t('freedoms.freedom2.definition')}</Card>
          <Card title={t('freedoms.freedom3.title')}>{t('freedoms.freedom3.definition')}</Card>
        </div>
      </Space>

    </div>
  );
}
