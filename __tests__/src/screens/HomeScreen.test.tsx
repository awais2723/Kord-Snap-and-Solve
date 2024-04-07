/* This code snippet is a test file written in TypeScript for a React application. Here's a breakdown
of what it does: */
import React from 'react';
import renderer from 'react-test-renderer';

import { HomeScreen } from '@/src/screens';

// Mock StatusBar to prevent rendering issues during testing
jest.mock('expo-status-bar', () => ({
  StatusBar: 'StatusBar',
}));

// Mock Card Component
jest.mock('@/src/components/Card', () => 'MockedCard');

describe('Home Screen', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<HomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
