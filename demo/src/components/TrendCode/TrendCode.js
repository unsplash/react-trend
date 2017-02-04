import React, { PropTypes } from 'react';

import './TrendCode.css';

const propTypes = {
  params: PropTypes.shape({
    gradient: PropTypes.arrayOf(PropTypes.string).isRequired,
    radius: PropTypes.number.isRequired,
    strokeWidth: PropTypes.number.isRequired,
    strokeLinecap: PropTypes.string.isRequired,
  }).isRequired,
};

const TrendCode = () => (
  <div className="configField">
    TODO
  </div>
);

TrendCode.propTypes = propTypes;

export default TrendCode;
