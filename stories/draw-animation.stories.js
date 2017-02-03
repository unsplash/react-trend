/* eslint-disable semi */
import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { createContainerDecorator } from './helpers/decorators';
import Trend from '../src/components/Trend';

storiesOf('Trend draw animations', module)
  .addDecorator(createContainerDecorator())
  .add('default', () => (
    <Trend
      autoDraw
      data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
      style={{ display: 'block' }}
    />
  ))
