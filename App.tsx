import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

type Props = {}

const App: React.FC<Props> = (props: Props) => {
  return (
    <View className="bg-gray-900 flex flex-col flex-1 justify-center items-center">
      <StatusBar style="light" />
      <Text className="text-red-500 text-[18px] px-4 text-center">
        Open up App.tsx to start working on your app!
      </Text>
    </View>
  );
}

export default App
