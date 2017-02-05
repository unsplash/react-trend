import React, { Component } from 'react';

import Trend from '../../../../src/components/Trend';
import Header from '../Header';
import Tab from '../Tab';
import TabGroup from '../TabGroup';
import Config from '../Config';
import TrendCode from '../TrendCode';
import GithubLink from '../GithubLink';
import Footer from '../Footer';

import './App.css';

const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
];

const linecaps = ['butt', 'round', 'square'];

const defaultGradient = gradients[4];
const defaultLinecap = linecaps[0];
const placeholderData = [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0];

class App extends Component {
  constructor(props) {
    super(props);

    this.changeToConfigView = this.changeView.bind(this, 'config');
    this.changeToCodeView = this.changeView.bind(this, 'code');

    this.updateTrendParam = this.updateTrendParam.bind(this);

    this.state = {
      view: 'config',
      radius: 10,
      strokeWidth: 2,
      gradient: defaultGradient,
      strokeLinecap: defaultLinecap,
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
        <GithubLink className="cornerGithubLink" />

        <Trend
          autoDraw
          autoDrawDuration={3000}
          autoDrawEasing="ease-out"
          smooth
          data={placeholderData}
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

        {/* eslint-disable react/jsx-indent */}
        { this.state.view === 'config' ? (
            <Config
              params={this.state}
              gradients={gradients}
              linecaps={linecaps}
              handleUpdate={this.updateTrendParam}
            />
          ) : (
            <TrendCode data={placeholderData} params={this.state} />
          )
        }
        {/* eslint-enable */}

        <Footer />
      </div>
    );
  }
}

export default App;
