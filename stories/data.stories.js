/* eslint-disable semi */
import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { createContainerDecorator } from './helpers/decorators';
import { range } from '../src/utils';
import Trend from '../src/components/Trend';

storiesOf('Trend data', module)
  .addDecorator(createContainerDecorator())
  .add('default (10 points between 0 and 10)', () => (
    <Trend
      data={[0, 10, 2, 8, 0, 5, 9, 2, 4, 0]}
      style={{ display: 'block' }}
    />
  ))
  .add('unnormalized (10 points between -5 and 40)', () => (
    <Trend
      data={[30, 0, -5, 33, 13, 33, -1, 40, 20, 0]}
      style={{ display: 'block' }}
    />
  ))
  .add('single point', () => (
    <Trend
      data={[20]}
      style={{ display: 'block' }}
    />
  ))
  .add('single point (smooth)', () => (
    <Trend
      smooth
      data={[20]}
      style={{ display: 'block' }}
    />
  ))
  .add('two points', () => (
    <Trend
      data={[0, 100]}
      style={{ display: 'block' }}
    />
  ))
  .add('two points (smooth)', () => (
    <Trend
      smooth
      data={[0, 100]}
      style={{ display: 'block' }}
    />
  ))
  .add('three points', () => (
    <Trend
      data={[100, 0, 100]}
      style={{ display: 'block' }}
    />
  ))
  .add('three points (smooth)', () => (
    <Trend
      smooth
      data={[100, 0, 100]}
      style={{ display: 'block' }}
    />
  ))
  .add('30 points', () => {
    const data = range(30).map(() => Math.random());

    return (
      <Trend
        data={data}
        style={{ display: 'block' }}
      />
    );
  })
  .add('60 points', () => {
    const data = range(60).map(() => Math.random());

    return (
      <Trend
        data={data}
        style={{ display: 'block' }}
      />
    );
  })
  .add('100 points', () => {
    const data = range(100).map(() => Math.random());

    return (
      <Trend
        data={data}
        style={{ display: 'block' }}
      />
    );
  })
  .add('200 points', () => {
    const data = range(200).map(() => Math.random());

    return (
      <Trend
        strokeWidth={0.5}
        data={data}
        style={{ display: 'block' }}
      />
    );
  })
  .add('1000 points', () => {
    const data = range(1000).map(() => Math.random());

    return (
      <Trend
        strokeWidth={0.25}
        data={data}
        style={{ display: 'block' }}
      />
    );
  })
  .add('collinear points (10 points)', () => (
    <Trend
      data={[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]}
      style={{ display: 'block' }}
    />
  ))
  .add('same-value points', () => (
    <Trend
      data={[5, 5, 5, 5, 5, 5, 5, 5, 5, 5]}
      style={{ display: 'block' }}
    />
  ))
  .add('same-value points, with gradient', () => (
    <Trend
      data={[5, 5, 5, 5, 5, 5, 5, 5, 5, 5]}
      gradient={['red', 'orange']}
      style={{ display: 'block' }}
    />
  ))
  .add('as an array of objects', () => (
    <Trend
      data={[
        { value: 1 },
        { value: 5 },
        { value: 2 },
        { value: 3 },
        { value: 1 },
        { value: 5 },
        { value: 1 },
      ]}
      style={{ display: 'block' }}
    />
  ))
