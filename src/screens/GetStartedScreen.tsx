/**
 * The GetStartedScreen component renders a view with a status bar, a card component, and a button
 * linked to the login page.
 */
import { Button, View } from 'react-native';
import { Link } from 'expo-router';

import { Card } from '@/src/components';

const GetStartedScreen = () => (
  <View className="bg-gray-900 flex flex-col flex-1 justify-center items-center">
    <Card text="Get Started Screen" />
    <View className="my-10" />
    <Link href="/login" push asChild>
      <Button title="Login your account" />
    </Link>
  </View>
);

export default GetStartedScreen;
