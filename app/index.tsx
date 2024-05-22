/**
 * The code defines a functional component `SplashPage` that renders the `SplashScreen`
 * component.
 */
import { useEffect } from 'react';
import { router } from 'expo-router';

import { SplashScreen } from '@/src/screens';
import { useAuth } from '@/context';

const SplashPage = () => {
  const { loading, userLoggedIn } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (userLoggedIn) {
        router.replace('/home');
      } else {
        router.replace('/login');
      }
    }
  }, [loading, userLoggedIn]);

  return <SplashScreen />;
};

export default SplashPage;
