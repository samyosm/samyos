'use client';

import { SidebarItem } from './SidebarItem';
import { ChangeEvent, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { apps, items } from 'apps/admin/app/params';

export interface SidebarProps {
  app: string;
}

export function Sidebar(props: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [appSlug, setAppSlug] = useState(props.app);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAppSlug(e.target.value);
    const segements = pathname.split('/');
    segements.shift();
    segements.shift();
    router.push(e.target.value + '/' + segements.join('/'));
  };

  return (
    <aside className="w-full max-w-xs">
      <div className="flex justify-between">
        <h1 className="text-center p-5 font-bold uppercase text-secondary-500">
          Admin
        </h1>

        <select
          name="app"
          onChange={onChange}
          value={appSlug}
          className="bg-transparent text-gray-500 rounded-md my-3 mx-3 px-2"
        >
          {apps.map((app) => (
            <option key={app}>{app}</option>
          ))}
        </select>
      </div>

      <hr className="border-secondary-300 border-2" />

      <nav>
        <ul className="flex flex-col gap-2 p-5">
          {items.map((item) => (
            <SidebarItem key={item.label} app_slug={appSlug} item={item} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;