/* This code snippet is a test written in TypeScript for a React component using the Expo Router
testing library. Here's a breakdown of what it does: */
import { renderRouter, screen } from 'expo-router/testing-library';

import { AccountScreen } from '@/src/screens';

// Mock Account component
jest.mock('@/src/screens/AccountScreen', () => 'MockedAccount');

describe('Account Page', () => {
  test('renders correctly', async () => {
    const MockComponent = jest.fn(() => <AccountScreen />);

    renderRouter(
      {
        account: MockComponent,
      },
      {
        initialUrl: '/account',
      }
    );

    expect(screen).toHavePathname('/account');
  });
});
