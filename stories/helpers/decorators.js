import React from 'react';

export const createContainerDecorator = styles => (story) => {
  const containerDefaultStyles = {
    position: 'relative',
    margin: '50px',
    border: '1px solid #ddd',
  };

  const mergedStyles = Object.assign({}, containerDefaultStyles, styles);

  return (
    <div style={mergedStyles}>
      {story()}
    </div>
  );
};
