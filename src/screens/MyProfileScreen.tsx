import { View } from 'react-native';

import { Card } from '@/src/components';

const MyProfileScreen = () => (
  <View className="bg-gray-900 flex flex-col flex-1 justify-center items-center">
    <Card text="My Profile Screen" />
    <View className="my-10" />
  </View>
);

export default MyProfileScreen;
