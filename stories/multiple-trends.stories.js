/* eslint-disable semi */
import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { createContainerDecorator } from './helpers/decorators';
import Trend from '../src/components/Trend';

storiesOf('Multiple trends', module)
  .addDecorator(createContainerDecorator())
  .add('2 trends', () => (
    <div>
      <Trend
        data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
        style={{ display: 'block' }}
      />
      <Trend
        smooth
        data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
        style={{ display: 'block' }}
      />
    </div>
  ))
  .add('4 trends with different animations', () => (
    <div>
      <Trend
        autoDraw
        autoDrawDuration={2000}
        strokeWidth={3}
        gradient={['purple', 'violet']}
        data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
        style={{ display: 'block' }}
      />
      <Trend
        smooth
        radius={4}
        autoDraw
        autoDrawDuration={3500}
        strokeWidth={3}
        gradient={['purple', 'violet']}
        data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
        style={{ display: 'block' }}
      />
      <Trend
        smooth
        radius={8}
        autoDraw
        autoDrawDuration={4500}
        strokeWidth={3}
        gradient={['purple', 'violet']}
        data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
        style={{ display: 'block' }}
      />
      <Trend
        smooth
        radius={1000}
        autoDraw
        autoDrawDuration={6500}
        strokeWidth={3}
        gradient={['purple', 'violet']}
        data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
        style={{ display: 'block' }}
      />
    </div>
  ))
  .add('2 trends with different gradients', () => (
    <div>
      <Trend
        autoDraw
        autoDrawDuration={3000}
        strokeWidth={3}
        gradient={['purple', 'violet']}
        data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
        style={{ display: 'block' }}
      />
      <Trend
        autoDraw
        autoDrawDuration={3000}
        strokeWidth={3}
        gradient={['orange', 'red']}
        data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
        style={{ display: 'block' }}
      />
    </div>
  ))
