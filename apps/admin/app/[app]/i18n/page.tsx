import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'i18n',
};

export default async function Index() {
  return (
    <div className="min-h-screen bg-indigo-500 text-white font-bold text-3xl flex items-center justify-center">
      <p>i18n!</p>
    </div>
  );
}
