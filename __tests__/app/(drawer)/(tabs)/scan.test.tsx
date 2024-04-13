/* This code snippet is a test written in TypeScript for a React component using the Expo Router
testing library. Here's a breakdown of what it does: */
import { renderRouter, screen } from 'expo-router/testing-library';

import { ScanScreen } from '@/src/screens';

// Mock Scan component
jest.mock('@/src/screens/ScanScreen', () => 'MockedScan');

describe('Scan Page', () => {
  test('renders correctly', async () => {
    const MockComponent = jest.fn(() => <ScanScreen />);

    renderRouter(
      {
        scan: MockComponent,
      },
      {
        initialUrl: '/scan',
      }
    );

    expect(screen).toHavePathname('/scan');
  });
});
