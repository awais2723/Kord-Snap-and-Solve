/* This code snippet is a test written in TypeScript for a React component using the Expo Router
testing library. Here's a breakdown of what it does: */
import { renderRouter, screen } from 'expo-router/testing-library';

import { SettingsScreen } from '@/src/screens';

// Mock Settings component
jest.mock('@/src/screens/SettingsScreen', () => 'MockedSettings');

describe('Settings Page', () => {
  test('renders correctly', async () => {
    const MockComponent = jest.fn(() => <SettingsScreen />);

    renderRouter(
      {
        settings: MockComponent,
      },
      {
        initialUrl: '/settings',
      }
    );

    expect(screen).toHavePathname('/settings');
  });
});
