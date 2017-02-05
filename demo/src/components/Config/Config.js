import React, { PropTypes } from 'react';

import Row from '../Row';
import Column from '../Column';
import ConfigField from '../ConfigField';
import GradientPreview from '../GradientPreview';
import Slider from '../Slider';
import Toggle from '../Toggle';

import './Config.css';

const propTypes = {
  handleUpdate: PropTypes.func.isRequired,
  params: PropTypes.shape({
    gradient: PropTypes.arrayOf(PropTypes.string).isRequired,
    radius: PropTypes.number.isRequired,
    strokeWidth: PropTypes.number.isRequired,
    strokeLinecap: PropTypes.string.isRequired,
  }).isRequired,
  gradients: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  linecaps: PropTypes.arrayOf(PropTypes.string),
};

const Config = ({ handleUpdate, params, gradients, linecaps }) => (
  <Row className="config">
    <Column>
      <ConfigField label="Colour">
        {gradients.map((gradient, index) => (
          <GradientPreview
            key={index}
            gradient={gradient}
            handleClick={() => handleUpdate({ gradient })}
            isActive={params.gradient === gradient}
          />
        ))}
      </ConfigField>
      <ConfigField label="Linecap">
        {linecaps.map(linecap => (
          <Toggle
            key={linecap}
            isActive={params.strokeLinecap === linecap}
            handleClick={() => handleUpdate({ strokeLinecap: linecap })}
          >
            {linecap}
          </Toggle>
        ))}
      </ConfigField>
    </Column>
    <Column>
      <ConfigField label="Width">
        <Slider
          withBars
          value={params.strokeWidth}
          min={0.1}
          max={5}
          step={0.1}
          onChange={val => handleUpdate({ strokeWidth: val })}
        />
      </ConfigField>
      <ConfigField label="Radius">
        <Slider
          withBars
          value={params.radius}
          min={0}
          max={25}
          step={0.1}
          onChange={val => handleUpdate({ radius: val })}
        />
      </ConfigField>

    </Column>
  </Row>
);

Config.propTypes = propTypes;

export default Config;
