import React, { PropTypes } from 'react';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.number),
};

const Trend = ({ data }) => {
  return (
    <span>{data.join(', ')}</span>
  );
};

export default Trend
