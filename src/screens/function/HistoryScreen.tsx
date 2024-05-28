import { View } from 'react-native';

import { Card } from '@/src/components/function';

type Props = object;

const HistoryScreen: React.FC<Props> = (_props: Props) => (
  <View className="bg-gray-100 flex flex-col flex-1 justify-center items-center">
    <Card text="History Screen" />
    <View className="my-10" />
  </View>
);

export default HistoryScreen;
