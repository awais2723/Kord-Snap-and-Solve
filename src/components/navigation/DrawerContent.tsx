import { View, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';

import { HomeLabel, AccountLabel, SettingsLabel } from '@/src/components/navigation/DrawerLabel';

const DrawerContent = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-background">
      <DrawerContentScrollView scrollEnabled={false} className="bg-background">
        <View className="mt-8 mb-16 p-4 flex flex-col justify-center items-center">
          <Image className="w-16 h-16" source={require('@/src/assets/images/favicon.png')} />
        </View>
        <DrawerItem label={HomeLabel} onPress={() => router.push('/home')} />
        <DrawerItem label={AccountLabel} onPress={() => router.push('/account')} />
        <DrawerItem label={SettingsLabel} onPress={() => router.push('/settings')} />
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;
