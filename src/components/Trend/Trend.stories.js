import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Trend from './Trend';

storiesOf('Trend', module)
  .add('with an array of numbers between 0 and 1', () => (
    <Trend data={[0, 0.25, 0, 0.5, 0, 0.75, 0, 1]} />
  ));
