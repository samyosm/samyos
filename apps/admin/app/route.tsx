import { redirect } from 'next/navigation';
import { apps } from './params';

export async function GET() {
  redirect(apps[0]);
}
