/* eslint-disable semi */
import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { createContainerDecorator } from './helpers/decorators';
import Trend from '../src/components/Trend';

storiesOf('Trend smooth', module)
  .addDecorator(createContainerDecorator())
  .add('default', () => (
    <Trend
      smooth
      data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
      style={{ display: 'block' }}
    />
  ))
  .add('with thicker line', () => (
    <Trend
      smooth
      strokeWidth={10}
      data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
      style={{ display: 'block' }}
    />
  ))
  .add('with round linecap and linejoin', () => (
    <Trend
      smooth
      strokeWidth={10}
      strokeLinecap="round"
      strokeLinejoin="round"
      data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
      style={{ display: 'block' }}
    />
  ))
  .add('with oversized radius', () => (
    <Trend
      smooth
      radius={2000}
      strokeWidth={10}
      strokeLinecap="round"
      strokeLinejoin="round"
      data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
      style={{ display: 'block' }}
    />
  ))
