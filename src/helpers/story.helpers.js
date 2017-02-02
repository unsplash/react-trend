import React from 'react';

const containerDefaultStyles = {
  position: 'relative',
  margin: '50px',
  border: '1px solid #CCC',
};

export const createContainerDecorator = styles => (story) => {
  const mergedStyles = Object.assign({}, containerDefaultStyles, styles);

  return (
    <div style={mergedStyles}>
      {story()}
    </div>
  );
};
