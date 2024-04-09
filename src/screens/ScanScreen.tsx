import { View } from 'react-native';

import { Card } from '@/src/components';

const ScanScreen = () => (
  <View className="bg-gray-900 flex flex-col flex-1 justify-center items-center">
    <Card text="Scan Screen" />
    <View className="my-10" />
  </View>
);

export default ScanScreen;
