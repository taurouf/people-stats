import React from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from '../redux/hooks';

import Login from '../components/login';

const Home = () => {
  const router = useRouter();
  const auth = useAppSelector((e) => e.auth);

  const redirect = () => {
    router.push('/dashboard');
    return null;
  };

  return auth.isLoggingOut ? <Login /> : redirect();
};

export default Home;
