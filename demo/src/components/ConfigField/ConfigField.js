import React, { PropTypes } from 'react';

import './ConfigField.css';

const propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const ConfigField = ({ label, children }) => (
  <div className="configField">
    <h6 className="label">{label}</h6>
    {children}
  </div>
);

ConfigField.propTypes = propTypes;

export default ConfigField;
