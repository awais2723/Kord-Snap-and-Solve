/* This code snippet is a test written in TypeScript for a React component using the Expo Router
testing library. Here's a breakdown of what it does: */
import { renderRouter, screen } from 'expo-router/testing-library';

import { SignupScreen } from '@/src/screens';

// Mock Signup component
jest.mock('@/src/screens/SignupScreen', () => 'MockedSignup');

describe('Signup Page', () => {
  test('renders correctly', async () => {
    const MockComponent = jest.fn(() => <SignupScreen />);

    renderRouter(
      {
        signup: MockComponent,
      },
      {
        initialUrl: '/signup',
      }
    );

    expect(screen).toHavePathname('/signup');
  });
});
