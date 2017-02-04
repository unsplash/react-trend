import React, { PropTypes } from 'react';

import './GradientPreview.css';

const propTypes = {
  gradient: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

const GradientPreview = ({ gradient, handleClick, isActive }) => {
  // For simplicity, we're always passing a gradient, even when it's just 1
  // color. We'll handle that discrepancy here.
  const background = gradient.length === 1
    ? gradient[0]
    : `linear-gradient(0deg, ${gradient.join(', ')})`;

  return (
    <button
      onClick={handleClick}
      className={`gradientPreview ${isActive ? 'isActive' : ''}`}
      style={{ background }}
    />
  );
};

GradientPreview.propTypes = propTypes;

export default GradientPreview;
