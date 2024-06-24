import { Stack } from 'expo-router/stack';

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen
        name="scanQuestion"
        options={{
          headerShown: true,
          title: 'Scan Question',
          headerStyle: { backgroundColor: '#6844EE' },
          headerTintColor: 'white',
          headerTitleStyle: { color: 'white' },
        }}
      />
      <Stack.Screen
        name="scanEquation"
        options={{
          headerShown: true,
          title: 'Scan Equation',
          headerStyle: { backgroundColor: '#6844EE' },
          headerTintColor: 'white',
          headerTitleStyle: { color: 'white' },
        }}
      />
      <Stack.Screen
        name="typeEquation"
        options={{
          headerShown: true,
          title: 'Type Equation',
          headerStyle: { backgroundColor: '#6844EE' },
          headerTintColor: 'white',
          headerTitleStyle: { color: 'white' },
        }}
      />
    </Stack>
  );
}
