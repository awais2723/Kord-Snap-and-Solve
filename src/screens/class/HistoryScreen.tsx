import { Component } from 'react';
import { View } from 'react-native';

import { Card } from '@/src/components/function';

type Props = object;
type State = object;

class HistoryScreen extends Component<Props, State> {
  render() {
    return (
      <View className="bg-gray-100 flex flex-col flex-1 justify-center items-center">
        <Card text="History Screen" />
        <View className="my-10" />
      </View>
    );
  }
}

export default HistoryScreen;
