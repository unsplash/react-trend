import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { createContainerDecorator } from '../../helpers/story.helpers';
import Trend from './Trend';

storiesOf('Trend', module)
  .addDecorator(createContainerDecorator())
  .add('with a handful of numbers', () => (
    <Trend
      data={[0, 0.25, 0, 0.5, 0, 0.75, 0, 1]}
      style={{ display: 'block' }}
    />
  ))
  .add('with a fixed width/height', () => (
    <Trend
      data={[0, 0.25, 0, 0.5, 0, 0.75, 0, 1]}
      width={500}
      height={100}
      style={{ display: 'block' }}
    />
  ));
