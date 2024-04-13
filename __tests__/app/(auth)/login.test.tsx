/* This code snippet is a test written in TypeScript for a React component using the Expo Router
testing library. Here's a breakdown of what it does: */
import { renderRouter, screen } from 'expo-router/testing-library';

import { LoginScreen } from '@/src/screens';

// Mock Login component
jest.mock('@/src/screens/LoginScreen', () => 'MockedLogin');

describe('Login Page', () => {
  test('renders correctly', async () => {
    const MockComponent = jest.fn(() => <LoginScreen />);

    renderRouter(
      {
        login: MockComponent,
      },
      {
        initialUrl: '/login',
      }
    );

    expect(screen).toHavePathname('/login');
  });
});
