import React, { PropTypes } from 'react';

import './Toggle.css';

const propTypes = {
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

const Toggle = ({ children, handleClick, isActive }) => (
  <button
    className={`toggle ${isActive ? 'isActive' : ''}`}
    onClick={handleClick}
  >
    {children}
  </button>
);

Toggle.propTypes = propTypes;

export default Toggle;
