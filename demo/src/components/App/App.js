import React, { Component } from 'react';

import Trend from '../../../../src/components/Trend';
import Header from '../Header';
import Tab from '../Tab';
import TabGroup from '../TabGroup';
import Config from '../Config';
import TrendCode from '../TrendCode';

import './App.css';

const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['#0FF', '#F0F', '#FF0'],
  ['purple', 'violet'],
  ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
];

const defaultGradient = gradients[3];

class App extends Component {
  constructor(props) {
    super(props);

    this.changeToConfigView = this.changeView.bind(this, 'config');
    this.changeToCodeView = this.changeView.bind(this, 'code');

    this.state = {
      view: 'config',
      gradient: defaultGradient,
      radius: 3,
      strokeWidth: 2,
      strokeLinecap: 'round',
    };
  }

  changeView(view) {
    this.setState({ view });
  }

  updateTrendParam(newState) {
    this.setState(newState);
  }

  render() {
    const { gradient, radius, strokeWidth, strokeLinecap } = this.state;

    return (
      <div className="app">
        <Header />

        <Trend
          autoDraw
          autoDrawDuration={3000}
          autoDrawEasing="ease-out"
          smooth
          data={[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]}
          gradient={gradient}
          radius={radius}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
        />

        <TabGroup>
          <Tab
            handleClick={this.changeToConfigView}
            isActive={this.state.view === 'config'}
          >
            Configure
          </Tab>

          <Tab
            handleClick={this.changeToCodeView}
            isActive={this.state.view === 'code'}
          >
            Code
          </Tab>
        </TabGroup>

        { this.state.view === 'config'
            ? <Config handleUpdate={this.updateTrendParam} />
            : <TrendCode params={this.state} />
        }
      </div>
    );
  }
}

export default App;
