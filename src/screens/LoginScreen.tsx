/**
 * The `LoginScreen` component renders a login screen with a card displaying "Login Screen" text and a
 * button to create an account.
 */
import { Link } from 'expo-router';
import { View, Button } from 'react-native';

import { Card } from '@/src/components';

const LoginScreen = () => (
  <View className="bg-gray-900 flex flex-col flex-1 justify-center items-center">
    <Card text="Login Screen" />
    <View className="my-10" />
    <Link href="/home" replace asChild>
      <Button title="Home" />
    </Link>
    <View className="my-10" />
    <Link href="/signup" replace asChild>
      <Button title="Create your account" />
    </Link>
  </View>
);

export default LoginScreen;
