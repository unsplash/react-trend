/* eslint-disable semi */
import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { createContainerDecorator } from './helpers/decorators';
import Trend from '../src/components/Trend';

storiesOf('Trend rounded', module)
  .addDecorator(createContainerDecorator())
  .add('default', () => (
    <Trend
      rounded
      data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
      style={{ display: 'block' }}
    />
  ))
  .add('with thicker line', () => (
    <Trend
      rounded
      strokeWidth={10}
      data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
      style={{ display: 'block' }}
    />
  ))
  .add('with round linecap and linejoin', () => (
    <Trend
      rounded
      strokeWidth={10}
      strokeLinecap="round"
      strokeLinejoin="round"
      data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
      style={{ display: 'block' }}
    />
  ))
