import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

import { DrawerContent } from '@/src/components/function';

const DrawerLayout = () => (
  <GestureHandlerRootView className="flex-1">
    <Drawer
      drawerContent={DrawerContent}
      screenOptions={{
        drawerType: 'front',
        headerShown: false,
      }}
    />
  </GestureHandlerRootView>
);

export default DrawerLayout;
