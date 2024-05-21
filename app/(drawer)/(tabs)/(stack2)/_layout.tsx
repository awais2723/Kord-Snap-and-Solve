import { Stack } from 'expo-router/stack';

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="askMe" options={{ headerShown: true }} />
    </Stack>
  );
}
