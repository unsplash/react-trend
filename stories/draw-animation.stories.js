/* eslint-disable semi */
import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { createContainerDecorator } from './helpers/decorators';
import Trend from '../src/components/Trend';

storiesOf('Trend draw animations', module)
  .addDecorator(createContainerDecorator())
  .add('default duration and easing', () => (
    <Trend
      autoDraw
      data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
      style={{ display: 'block' }}
    />
  ))
  .add('quick', () => (
    <Trend
      autoDraw
      autoDrawDuration={1000}
      gradient={['red', 'yellow']}
      data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
      style={{ display: 'block' }}
    />
  ))
  .add('slow', () => (
    <Trend
      autoDraw
      autoDrawDuration={5000}
      strokeWidth={4}
      gradient={['red', 'orange']}
      data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
      style={{ display: 'block' }}
    />
  ))
  .add('ease (default easing)', () => (
    <Trend
      autoDraw
      autoDrawEasing="ease"
      strokeLinecap="round"
      strokeWidth={4}
      gradient={['violet', 'orange']}
      data={[0, 10, 2, 8, 0, 10, 9, 2, 4, 0]}
      style={{ display: 'block' }}
    />
  ))
  .add('linear', () => (
    <Trend
      autoDraw
      autoDrawEasing="linear"
      strokeLinecap="round"
      strokeWidth={4}
      gradient={['violet', 'orange']}
      data={[0, 10, 2, 8, 0, 10, 9, 2, 4, 0]}
      style={{ display: 'block' }}
    />
  ))
  .add('ease-out', () => (
    <Trend
      autoDraw
      autoDrawEasing="ease-out"
      strokeLinecap="round"
      strokeWidth={4}
      gradient={['violet', 'orange']}
      data={[0, 10, 2, 8, 0, 10, 9, 2, 4, 0]}
      style={{ display: 'block' }}
    />
  ))
  .add('ease-in', () => (
    <Trend
      autoDraw
      autoDrawEasing="ease-in"
      strokeLinecap="round"
      strokeWidth={4}
      gradient={['violet', 'orange']}
      data={[0, 10, 2, 8, 0, 10, 9, 2, 4, 0]}
      style={{ display: 'block' }}
    />
  ))
  .add('ease-in-out', () => (
    <Trend
      autoDraw
      autoDrawEasing="ease-in-out"
      strokeLinecap="round"
      strokeWidth={4}
      gradient={['violet', 'orange']}
      data={[0, 10, 2, 8, 0, 10, 9, 2, 4, 0]}
      style={{ display: 'block' }}
    />
  ))
