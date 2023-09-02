import { Metadata } from 'next';
import './global.css';

export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'Open Source',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
