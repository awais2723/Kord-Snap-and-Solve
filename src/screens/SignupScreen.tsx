/**
 * The SignupScreen component in TypeScript React renders a signup screen with a card component and a
 * button to navigate to the login screen.
 */
import { Link } from 'expo-router';
import { View, Button } from 'react-native';

import { Card } from '@/src/components';

const SignupScreen = () => (
  <View className="bg-gray-900 flex flex-col flex-1 justify-center items-center">
    <Card text="Signup Screen" />
    <View className="my-10" />
    <Link href="/login" replace asChild>
      <Button title="Already have an account" />
    </Link>
  </View>
);

export default SignupScreen;
