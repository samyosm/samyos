import { Sidebar } from '../../components/sidebar/Sidebar';
import '../global.css';

import { Inter } from 'next/font/google';
import { Metadata } from 'next';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

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

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    app: string;
  };
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex">
        <Sidebar app={params.app} />
        <main className="w-full h-full">{children}</main>
      </body>
    </html>
  );
}
