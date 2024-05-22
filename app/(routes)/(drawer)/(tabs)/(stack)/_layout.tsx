import { Stack } from 'expo-router/stack';

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="scanQuestion" options={{ headerShown: true, title: 'Scan Question' }} />
      <Stack.Screen name="typeEquation" options={{ headerShown: true, title: 'Type Equation' }} />
    </Stack>
  );
}
