import React, { PropTypes } from 'react';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.number),
};

const Trend = ({ data }) => (
  <svg />
);

Trend.propTypes = propTypes;

export default Trend;
