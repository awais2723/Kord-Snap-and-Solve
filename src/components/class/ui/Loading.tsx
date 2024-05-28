/**
 * The Loading component is a simple React component that displays loading.
 */
import { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';

type Props = object;

class Loading extends Component<Props> {
  render() {
    return (
      <View className="flex-1 justify-around">
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }
}

export default Loading;
