import { Component } from 'react';
import { View } from 'react-native';

import { AuthContext, AuthContextType } from '@/context';
import { Card } from '@/src/components';

type Props = object;
type State = object;

class AccountScreen extends Component<Props, State> {
  static contextType = AuthContext;
  declare context: AuthContextType;

  render() {
    const { currentUser } = this.context;

    return (
      <View className="bg-gray-100 flex flex-col flex-1 justify-start items-start">
        <Card text={`Username: ${currentUser?.displayName}`} />
        <Card text={`Email: ${currentUser?.email}`} />
        <Card text={`Verified: ${currentUser?.emailVerified}`} />
        <View className="my-10" />
      </View>
    );
  }
}

export default AccountScreen;
