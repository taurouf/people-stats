import Head from 'next/head';
import React from 'react';
import { useAppSelector } from '../../redux/hooks';

// Components
import Login from '../login';
import Header from './header';
import UserBadge from './header/userbadge';

export default function Layout({ children }) {
  const { auth } = useAppSelector((e) => e);

  const content = (
    <div className="flex flex-row flex-auto overflow-hidden">
      <Header />
      <div className="flex flex-col w-full md:space-y-4">
        <header className="w-full h-16 z-40 flex items-center justify-between">
          <UserBadge />
        </header>
        <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
          {children}
        </div>
      </div>
    </div>
  );

  return auth.isLoggingIn ? (
    <div className="flex flex-col h-screen bg-flim-bg">
      <Head>
        <title>People Stats</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/icon.png" />
      </Head>
      {content}
    </div>
  ) : (
    <Login />
  );
}
