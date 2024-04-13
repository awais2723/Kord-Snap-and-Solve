/* This code snippet is a test written in TypeScript for a React application using the Expo framework.
Here's a breakdown of what the code is doing: */
import React from 'react';
import { render, screen } from '@testing-library/react-native';

import { NotFoundScreen } from '@/src/screens';

describe('Not Found Page', () => {
  test('renders correctly', async () => {
    render(<NotFoundScreen />);

    expect(screen.getByText("This screen doesn't exist.")).toBeTruthy();
    expect(screen.getByText('Go to Home!')).toBeTruthy();
  });
});
