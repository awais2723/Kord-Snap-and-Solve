import { View } from 'react-native';

import { Card } from '@/src/components';

type Props = object;

const AccountScreen: React.FC<Props> = (_props: Props) => (
  <View className="bg-gray-100 flex flex-col flex-1 justify-center items-center">
    <Card text="Account Screen" />
    <View className="my-10" />
  </View>
);

export default AccountScreen;
