import React, { PropTypes } from 'react';

import Row from '../Row';
import Column from '../Column';
import ConfigField from '../ConfigField';
import GradientPreview from '../GradientPreview';
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
};

const Config = ({ handleUpdate, params, gradients }) => (
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
    </Column>
    <Column>
      <ConfigField label="Width">
        Width here
      </ConfigField>
    </Column>
  </Row>
);

Config.propTypes = propTypes;

export default Config;
