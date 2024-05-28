import { View } from 'react-native';

import { useAuth } from '@/context';
import { Card } from '@/src/components/function';

type Props = object;

const AccountScreen: React.FC<Props> = (_props: Props) => {
  const { currentUser } = useAuth();

  return (
    <View className="bg-gray-100 flex flex-col flex-1 justify-start items-start">
      <Card text={`Username: ${currentUser?.displayName}`} />
      <Card text={`Email: ${currentUser?.email}`} />
      <Card text={`Verified: ${currentUser?.emailVerified}`} />
      <View className="my-10" />
    </View>
  );
};

export default AccountScreen;
