import { Button, Text } from '@samyos/shared/ui';
import { LocaleParams } from './layout';
import { getTranslator } from 'next-intl/server';

export default async function Index({ params }: { params: LocaleParams }) {
  const t = await getTranslator(params.locale, 'Index');
  const tags = [
    'GPLv3',
    'free',
    'open-source',
    'OSI',
    'GNU',
    'Linux',
    'collaboration',
    'software',
    'GitHub',
  ];
  return (
    <div className="flex flex-col p-20 gap-2 h-full">
      <div className="flex justify-between w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-5 w-full max-w-md">
          <Text level="page" size="lg">
            {t('title')}
          </Text>

          <Text level="atom" size="md">
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
          </Text>

          <Button variant="solid" className="w-fit">
            Participate
          </Button>
        </div>
        <div className="grid grid-cols-3">
          {tags.map((t) => (
            <p>{t}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
