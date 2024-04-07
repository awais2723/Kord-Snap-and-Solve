/**
 * The Home screen renders a View with a background color, StatusBar, and a Card component in a
 * React Native application.
 */
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { Card } from '@/src/components';

const HomeScreen = () => (
  <View className="bg-gray-900 flex flex-col flex-1 justify-center items-center">
    <StatusBar style="light" />
    <Card />
  </View>
);

export default HomeScreen;
