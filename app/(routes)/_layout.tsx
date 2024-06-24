import { Slot } from 'expo-router';

import { AuthRouteProvider } from '@/providers';

export default function RouteLayout() {
  return (
    <AuthRouteProvider>
      <Slot />
    </AuthRouteProvider>
  );
}
