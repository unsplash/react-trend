import React, { PropTypes } from 'react';

import './TabGroup.css';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const TabGroup = ({ children }) => (
  <div className="tabGroup">
    {children}
  </div>
);

TabGroup.propTypes = propTypes;

export default TabGroup;
