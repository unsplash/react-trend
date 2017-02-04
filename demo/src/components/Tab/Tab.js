import React, { PropTypes } from 'react';

import './Tab.css';

const propTypes = {
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

const Tab = ({ children, handleClick, isActive }) => (
  <button
    className={`tab ${isActive ? 'isActive' : ''}`}
    onClick={handleClick}
  >
    {children}
  </button>
);

Tab.propTypes = propTypes;

export default Tab;
