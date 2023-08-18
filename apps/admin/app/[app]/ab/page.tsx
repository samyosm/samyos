import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'A/B Testing',
};

export default async function Index() {
  return (
    <div className="min-h-screen bg-indigo-500 text-white font-bold text-3xl flex items-center justify-center">
      <p>A/B Testing!</p>
    </div>
  );
}
