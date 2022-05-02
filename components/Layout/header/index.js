/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// Redux
import { useRouter } from 'next/router';

// Icons
import React from 'react';
import RestrictedAllRight from '../../../hooks';

export default function Header() {
  const router = useRouter();
  const url = router.pathname.substring(1);

  return (
    <div className="relative bg-gray-50 dark:bg-gray-800">
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="h-screen">
          <nav className="px-6">
            {RestrictedAllRight.map((e, i) => (
              <div
                key={i}
                className={`${
                  url === e.name.toLowerCase() && 'bg-gray-100'
                } static flex items-center p-2 my-6 hover:text-gray-800 hover:bg-gray-100 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 text-gray-800 dark:text-gray-100 rounded-lg dark:bg-gray-600 cursor-pointer`}
                onClick={() => router.push(e.link)}
              >
                {e.icon}
                <span className="mx-2 text-sm font-normal">{e.name}</span>
              </div>
            ))}
          </nav>
          <div className="absolute bottom-0 my-10">{/* add end list */}</div>
        </div>
      </div>
    </div>
  );
}
