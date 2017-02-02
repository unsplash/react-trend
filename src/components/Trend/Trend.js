import React, { PropTypes } from 'react';

import { normalizeDataset, buildPath } from './Trend.helpers';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.number),
  rounded: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  radius: PropTypes.number,
  strokeWidth: PropTypes.number,
  stroke: PropTypes.string,
};

const defaultProps = {
  height: 75,
  strokeWidth: 1,
  stroke: 'black',
  radius: 10,
};

const VIEWBOX_PADDING = 1;

const Trend = ({ data, rounded, width, height, radius, ...delegated }) => {
  // If no width is provided, we assume a 300px viewBox width.
  // We'll set the actual width to 100% though, so that it's scalable
  const viewBoxWidth = width || 300;
  const svgWidth = width || '100%';

  const normalizedData = normalizeDataset(data, {
    minX: VIEWBOX_PADDING,
    maxX: viewBoxWidth - VIEWBOX_PADDING,
    // NOTE: Because SVGs are indexed from the top left, but most data is
    // indexed from the bottom left, we're inverting the Y min/max.
    minY: height - VIEWBOX_PADDING,
    maxY: VIEWBOX_PADDING,
  });

  // Use a 'smooth curve' instruction if we want it rounded.
  // Otherwise, use 'line';
  const instruction = rounded ? 'rounded' : 'linear';
  const path = buildPath(normalizedData, { instruction, radius });

  return (
    <svg
      width={svgWidth}
      height={height}
      viewBox={`0 0 ${viewBoxWidth} ${height}`}
      {...delegated}
    >
      <path
        d={path} fill="none"
      />
    </svg>
  );
};

Trend.propTypes = propTypes;
Trend.defaultProps = defaultProps;

export default Trend;
