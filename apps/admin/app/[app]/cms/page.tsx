import { Metadata } from 'next';
import { Client } from './client';

export const metadata: Metadata = {
  title: 'CMS',
};

export default async function Index() {
  return <Client />;
}
