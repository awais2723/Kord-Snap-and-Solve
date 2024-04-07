/* This code snippet is a test written using Jest and React Test Renderer for a React component called
`Root`. Here's a breakdown of what each part does: */
import React from 'react';
import renderer from 'react-test-renderer';

import Root from '@/app/+html';

describe('Root Component', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Root />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
