/* eslint-disable semi, react/prop-types */
import React, { Component } from 'react';
import { storiesOf } from '@kadira/storybook';
import { range, random } from 'lodash';

import { createContainerDecorator } from './helpers/decorators';
import Trend from '../src/components/Trend';

class LiveUpdater extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.generateData(),
    };
  }

  componentDidMount() {
    const { generateData, updateFrequency } = this.props;

    this.interval = window.setInterval(() => {
      this.setState({
        data: generateData(),
      });
    }, updateFrequency)
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    const { trendProps } = this.props;

    return (
      <Trend
        {...trendProps}
        data={this.state.data}
        style={{ display: 'block' }}
      />
    );
  }
}

LiveUpdater.defaultProps = {
  trendProps: {},
  updateFrequency: 1000,
}

storiesOf('Trend live updates', module)
  .addDecorator(createContainerDecorator())
  .add('Constant number of points, 1000ms', () => (
    <LiveUpdater
      generateData={() => range(10).map(random)}
    />
  ))
