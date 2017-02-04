import React, { PropTypes } from 'react';

import Row from '../Row';
import Column from '../Column';
import ConfigField from '../ConfigField';
import './Config.css';

const propTypes = {
  handleUpdate: PropTypes.func.isRequired,
};

const Config = ({ handleUpdate }) => (
  <Row className="config">
    <Column>
      <ConfigField label="Colour">
        Color here
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
