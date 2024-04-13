/* This code snippet is a test written in TypeScript for a React component using the Expo Router
testing library. Here's a breakdown of what it does: */
import { renderRouter, screen } from 'expo-router/testing-library';

import { HomeScreen } from '@/src/screens';

// Mock Home component
jest.mock('@/src/screens/HomeScreen', () => 'MockedHome');

describe('Home Page', () => {
  test('renders correctly', async () => {
    const MockComponent = jest.fn(() => <HomeScreen />);

    renderRouter(
      {
        home: MockComponent,
      },
      {
        initialUrl: '/home',
      }
    );

    expect(screen).toHavePathname('/home');
  });
});
