/* eslint-disable semi */
import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { createContainerDecorator } from './helpers/decorators';
import Trend from '../src/components/Trend';

storiesOf('Trend sizes', module)
  .addDecorator(createContainerDecorator({ border: 'none' }))
  .add('default (fills parent, 1/4 ratio)', () => (
    <Trend
      data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
      style={{ display: 'block', border: '1px solid #777' }}
    />
  ))
  .add('fixed size (1/4 ratio)', () => (
    <Trend
      width={400}
      height={100}
      data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
      style={{ display: 'block', border: '1px solid #777' }}
    />
  ))
  .add('fixed size (1/1 ratio)', () => (
    <Trend
      width={400}
      height={400}
      data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
      style={{ display: 'block', border: '1px solid #777' }}
    />
  ))
  .add('fixed width', () => (
    <Trend
      width={400}
      data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
      style={{ display: 'block', border: '1px solid #777' }}
    />
  ))
  .add('fixed height', () => (
    <Trend
      height={150}
      data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
      style={{ display: 'block', border: '1px solid #777' }}
    />
  ))
