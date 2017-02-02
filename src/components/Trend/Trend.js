import React, { PropTypes } from 'react';

import { normalizeDataset, buildPath } from './Trend.helpers';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.number),
};

const VIEWBOX_HEIGHT = 10;
const VIEWBOX_WIDTH = 100;

const Trend = ({ data }) => {
  const normalizedData = normalizeDataset(data, {
    minX: 0,
    maxX: VIEWBOX_WIDTH,
    // NOTE: Because SVGs are indexed from the top left, but most data is
    // indexed from the bottom left, we're inverting the Y min/max.
    minY: VIEWBOX_HEIGHT,
    maxY: 0,
  });

  const path = buildPath(normalizedData);

  return (
    <svg width={500} height={100} viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}>
      <path
        d={path} strokeWidth={1} stroke="black" fill="none"
      />
    </svg>
  );
};

Trend.propTypes = propTypes;

export default Trend;
