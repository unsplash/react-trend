import React, { PropTypes } from 'react';

import './Column.css';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Column = ({ children }) => (
  <div className="column">
    {children}
  </div>
);

Column.propTypes = propTypes;

export default Column;
