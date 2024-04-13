/* This code snippet is a test written in TypeScript for a React application using the Expo framework.
Here's a breakdown of what the code is doing: */
import React from 'react';
import { renderRouter, screen } from 'expo-router/testing-library';

import GetStartedPage from '@/app';

// Mock GetStarted component
jest.mock('@/src/screens/GetStartedScreen', () => 'MockedGetStarted');

describe('GetStarted Page', () => {
  test('renders correctly', async () => {
    const MockComponent = jest.fn(() => <GetStartedPage />);

    renderRouter(
      {
        getStarted: MockComponent,
      },
      {
        initialUrl: '/',
      }
    );

    expect(screen).toHavePathname('/');
  });
});
