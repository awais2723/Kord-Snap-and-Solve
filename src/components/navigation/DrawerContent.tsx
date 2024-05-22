import { View, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';

import { HomeLabel, AccountLabel, SettingsLabel } from '@/src/components/navigation/DrawerLabel';

const DrawerContent = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-primary">
      <DrawerContentScrollView scrollEnabled={false} className="bg-primary">
        <View className="mt-8 mb-16 p-4 flex flex-col justify-center items-center">
          <Image
            className="w-40 h-40 rounded-xl"
            source={require('../../assets/images/big_logo.jpeg')}
          />
        </View>
        <DrawerItem label={HomeLabel} onPress={() => router.push('/home')} />
        <DrawerItem label={AccountLabel} onPress={() => router.push('/account')} />
        <DrawerItem label={SettingsLabel} onPress={() => router.push('/settings')} />
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;
