import expect from 'expect';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import Trend from './Trend';

describe('Trend', () => {
  let node;

  beforeEach(() => {
    node = document.createElement('div');
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  it('renders without complaint', () => {
    render(<Trend data={[1, 2, 3]} />, node, () => {
      expect(node.innerHTML).toContain('<svg');
    });
  });
});
