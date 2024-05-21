import { Stack } from 'expo-router/stack';

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="ScanQuestion" options={{ headerShown: true }} />
    </Stack>
  );
}
