/* This code snippet is a test written in TypeScript for a React application using the Expo framework.
Here's a breakdown of what the code is doing: */
import React from 'react';
import { renderRouter, screen } from 'expo-router/testing-library';

import HomePage from '@/app';

// Mock Home component
jest.mock('@/src/screens/HomeScreen', () => 'MockedHome');

describe('Home Page', () => {
  test('renders correctly', async () => {
    const MockComponent = jest.fn(() => <HomePage />);

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
