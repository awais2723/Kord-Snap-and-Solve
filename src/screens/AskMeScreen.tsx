import { View } from 'react-native';

import { Card } from '@/src/components';

const AskMeScreen = () => (
  <View className="bg-gray-900 flex flex-col flex-1 justify-center items-center">
    <Card text="Ask Me Screen" />
    <View className="my-10" />
  </View>
);

export default AskMeScreen;
