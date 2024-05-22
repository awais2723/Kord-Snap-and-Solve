'use client';

import { router, usePathname } from 'expo-router';
import { useEffect } from 'react';

import { useAuth } from '@/context';
import { Loading } from '@/src/components';

type Props = {
  children: React.ReactNode;
};

const AuthRouteProvider: React.FC<Props> = ({ children }: Props) => {
  const pathname = usePathname();
  const { loading, userLoggedIn } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (userLoggedIn) {
        if (pathname === '/login' || pathname === '/signup') {
          router.replace('/home');
        }
      } else {
        if (pathname !== '/login' && pathname !== '/signup') {
          router.replace('/login');
        }
      }
    }
  }, [loading, userLoggedIn, pathname]);

  if (loading) {
    return <Loading />;
  }

  return children;
};

export default AuthRouteProvider;
