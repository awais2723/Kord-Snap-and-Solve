/**
 * The GetStartedScreen component renders a view with a status bar, a card component, and a button
 * linked to the login page.
 */
import { Button, View, TouchableOpacity, Text } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

import { Card } from '@/src/components';

const GetStartedScreen = () => {
  const [screen, setScreen] = useState<number>(1);
  const handleNext = () => {
    setScreen(screen + 1);
  };

  return (
    <SafeAreaView className="flex-1 bg-violet-900 ">
      {screen === 1 ? (
        <View className="bg-violet-700 flex flex-1 justify-around my-4">
          <Card text="Let's Get Started" />
          <View className="space-y-4" />
          <Text className="text-center font-bold text-5xl">First</Text>
          <TouchableOpacity
            onPress={handleNext}
            className="border-2 bg-yellow-500 text-gray-700 border-gray-300 rounded-md mt-10 py-2">
            <Text className="text-center font-bold text-xl">NEXT</Text>
          </TouchableOpacity>
        </View>
      ) : screen === 2 ? (
        <View className="bg-violet-700 flex flex-1 justify-around my-4">
          <Card text="Let's Get Started" />
          <View className="space-y-4" />
          <Text className="text-center font-bold text-5xl">Second</Text>
          <TouchableOpacity
            onPress={handleNext}
            className="border-2 bg-yellow-500 text-gray-700 border-gray-300 rounded-md mt-10 px-4 py-2">
            <Text className="text-center font-bold text-xl">NEXT</Text>
          </TouchableOpacity>
        </View>
      ) : screen === 3 ? (
        <View className="bg-violet-700 flex flex-1 justify-around my-4">
          <Card text="Let's Get Started" />
          <View className="space-y-4" />
          <Text className="text-center font-bold text-5xl">Third</Text>
          <TouchableOpacity
            onPress={handleNext}
            className="border-2 bg-yellow-500 text-gray-700 border-gray-300 rounded-md mt-10 py-2">
            <Text className="text-center font-bold text-xl">NEXT</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View className="bg-violet-700 flex flex-1 justify-around my-4">
          <Card text="Let's Get Started" />
          <View className="space-y-4" />
          <Link
            href="/(auth)/login"
            push
            asChild
            className="py-3 bg-yellow-300 mx-700 rounded text-white font-bold">
            <Button title="Login your account" />
          </Link>
        </View>
      )}
    </SafeAreaView>
  );
};

export default GetStartedScreen;
