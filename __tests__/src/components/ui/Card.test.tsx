/* This code snippet is a test written in TypeScript for a React component using the Expo Router
testing library. Here's a breakdown of what it does: */
import React from 'react';
import { render } from '@testing-library/react-native';

import { Card } from '@/src/components';

describe('Card Component', () => {
  test('renders text correctly', () => {
    const { getByText } = render(<Card text="Hello World" />);
    expect(getByText('Hello World')).toBeTruthy();
  });
});
