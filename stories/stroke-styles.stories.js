/* eslint-disable semi */
import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { createContainerDecorator } from './helpers/decorators';
import Trend from '../src/components/Trend';

storiesOf('Trend stroke styles', module)
  .addDecorator(createContainerDecorator())
  .add('default', () => (
    <Trend
      data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
      style={{ display: 'block' }}
    />
  ))
  .add('sub-pixel stroke width', () => (
    <Trend
      strokeWidth={0.5}
      data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
      style={{ display: 'block' }}
    />
  ))
  .add('larger stroke width', () => (
    <Trend
      strokeWidth={10}
      data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
      style={{ display: 'block' }}
    />
  ))
  .add('round linecap and linejoin', () => (
    <Trend
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={10}
      data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
      style={{ display: 'block' }}
    />
  ))
  .add('stroke single colour', () => (
    <Trend
      color="red"
      strokeWidth={2}
      data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
      style={{ display: 'block' }}
    />
  ))
  .add('stroke 2-color gradient', () => (
    <Trend
      color={['red', 'yellow']}
      strokeWidth={2}
      data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
      style={{ display: 'block' }}
    />
  ))
  .add('stroke 3-color gradient', () => (
    <Trend
      color={['red', 'yellow', 'green']}
      strokeWidth={2}
      data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
      style={{ display: 'block' }}
    />
  ))
  .add('dashed line (simple)', () => (
    <Trend
      strokeDasharray={5}
      data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
      style={{ display: 'block' }}
    />
  ))
  .add('dashed line (fancy)', () => (
    <Trend
      strokeDasharray={[10, 2, 5, 2, 10, 2, 30, 2, 10, 2, 1, 2, 10, 2]}
      data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
      style={{ display: 'block' }}
    />
  ))
