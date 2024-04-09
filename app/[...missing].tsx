import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <View className="flex justify-center items-center pt-8">
      <Text className="text-xl text-white">This screen doesn&apos;t exist.</Text>
      <Link href="/" replace className="mt-10 py-4">
        <Text className="text-sm text-[#2e78b7]">Go to Home!</Text>
      </Link>
    </View>
  );
}
