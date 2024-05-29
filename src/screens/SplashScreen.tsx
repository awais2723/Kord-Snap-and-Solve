/**
 * The SplashScreen component renders a loading
 */
import { Component } from 'react';
import { Image, View } from 'react-native';

type Props = object;

class SplashScreen extends Component<Props> {
  render() {
    return (
      <View className="flex flex-1 bg-primary w-screen h-screen justify-center items-center">
        <Image source={require('../assets/images/loading.gif')} className="w-60 h-60" />
      </View>
    );
  }
}

export default SplashScreen;
