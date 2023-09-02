import cn from 'clsx';
import { LocaleParams } from '../layout';
import { getTranslator } from 'next-intl/server';
import { Jumbotron, Space, Text, TimeEvent, Timeline } from '@samyos/shared/ui';
import { Metadata } from 'next';
import { FaAndroid, FaBitcoin, FaBuilding, FaCakeCandles, FaF, FaFirefoxBrowser, FaGithub, FaLinux, FaOsi, FaPersonPregnant, FaRobot } from 'react-icons/fa6';
import { DiGnu } from 'react-icons/di';

export async function generateMetadata({
  params,
}: {
  params: LocaleParams;
}): Promise<Metadata> {
  const t = await getTranslator(params.locale, 'History');

  return {
    title: t('title'),
  };
}

export default async function Index({ params }: { params: LocaleParams }) {
  const t = await getTranslator(params.locale, 'History');

  return (
    <div className={cn()}>
      <Space size="xl">
        <Jumbotron
          title=<Text level='page' size='lg'>{t('title')}</Text>
          description={
            'A brief look at the history of the open source ideology.'
          }
        />
        <Timeline className='mt-10 max-w-lg'>
          <TimeEvent date="1950s - 1960s" title="Birth of Collaboration" Icon={FaPersonPregnant}>
            Early computer scientists share software freely among themselves, setting the groundwork for open-source principles.
          </TimeEvent>
          <TimeEvent date={new Date(1969, 7, 0)} title="Birth of Open Source" Icon={FaCakeCandles}>
            AT&T's Bell Labs introduces UNIX, an operating system distributed with source code, fostering collaboration and sharing.
          </TimeEvent>

          <TimeEvent date="1983" title="GNU's Revolution" Icon={DiGnu}>
            Richard Stallman launches the GNU Project to create a free Unix-like operating system, emphasizing software freedom and open collaboration.
          </TimeEvent>

          <TimeEvent date="1985" title="Free Software Foundation (FSF)" Icon={FaF}>
            FSF is founded by Richard Stallman to promote and protect the rights of computer users to use, study, copy, and modify software.
          </TimeEvent>

          <TimeEvent date="1991" title="Rise of Linux" Icon={FaLinux}>
            Linus Torvalds releases the Linux kernel under the GNU General Public License (GPL), kickstarting the Linux open-source operating system.
          </TimeEvent>

          <TimeEvent date="1998" title="Open Source Initiative (OSI)" Icon={FaOsi}>
            OSI is formed to advocate open-source software and provide a standardized definition of open source.
          </TimeEvent>

          <TimeEvent date="2000s" title="Open Source in Enterprise" Icon={FaBuilding}>
            Open source gains popularity in the business world, with companies like IBM and Red Hat adopting open-source solutions.
          </TimeEvent>

          <TimeEvent date="2004" title="Browsing Revolution" Icon={FaFirefoxBrowser}>
            Mozilla releases Firefox, a highly successful open-source web browser, challenging the dominance of Internet Explorer.
          </TimeEvent>

          <TimeEvent date="2008" title="Android OS" Icon={FaAndroid}>
            Google releases the Android operating system as open source, leading to the proliferation of Android devices.
          </TimeEvent>

          <TimeEvent date="2010s" title="GitHub Revolution" Icon={FaGithub}>
            GitHub, a platform for hosting and collaborating on open-source projects, becomes central to the open-source community's workflow.
          </TimeEvent>

          <TimeEvent date="2020s" title="The Open Source Renaissance" Icon={FaBitcoin}>
            Open source continues to thrive, with projects in AI, blockchain, and more contributing to global innovation.
          </TimeEvent>




        </Timeline>
      </Space>
    </div>
  );
}
