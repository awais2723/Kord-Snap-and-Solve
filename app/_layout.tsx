/**
 * The above code defines a RootLayout component in TypeScript React that handles font loading and
 * SplashScreen management.
 * @returns The `RootLayout` component is being returned. If the fonts are not loaded yet, it will
 * return `null`. Otherwise, it will return the `Slot` component.
 */
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: 'index',
};

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded, error] = useFonts({
    SpaceMono: require('@/src/assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <Slot />;
};

export default RootLayout;
