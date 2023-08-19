import { Sidebar } from '../../components/sidebar/Sidebar';

import { Metadata } from 'next';
export interface App {
  name: string;
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: { app: string };
}): Promise<Metadata> {
  return {
    title: {
      template: `%s | ${params.app}`,
      default: params.app,
    },
  };
}

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    app: string;
  };
}) {
  return (
    <div className="flex">
      <Sidebar app={params.app} />
      <main className="w-full h-full">{children}</main>
    </div>
  );
}
