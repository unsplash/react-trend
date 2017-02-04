import React from 'react';
import ReactSlider from 'react-slider';

import './Slider.css';

// Super thin wrapper around ReactSlider. Only exists to bundle CSS.
const Slider = props => (
  <ReactSlider {...props} />
);

export default Slider;
