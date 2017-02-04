import React, { PropTypes } from 'react';

import './Row.css';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

const Row = ({ children, className, ...delegated }) => (
  <div className={`row ${className}`} {...delegated}>
    {children}
  </div>
);

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
