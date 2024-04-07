/* This code snippet is a test case written using Jest and React Test Renderer for a React component
called `Card`. Here's a breakdown of what each part does: */
import React from 'react';
import renderer from 'react-test-renderer';

import { Card } from '@/src/components';

describe('Card Component', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
