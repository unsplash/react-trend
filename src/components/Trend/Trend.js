import React, { PropTypes } from 'react';

import { normalizeDataset, buildPath } from './Trend.helpers';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.number),
  width: PropTypes.number,
  height: PropTypes.number,
};

const defaultProps = {
  height: 75,
};

const VIEWBOX_PADDING = 1;

const Trend = ({ data, width, height, ...delegated }) => {
  // If no width is provided, we assume a 300px viewBox width.
  // We'll set the actual width to 100% though, so that it's scalable
  const viewBoxWidth = width || 300;
  const svgWidth = width || '100%';

  console.log({ viewBoxWidth, svgWidth });

  const normalizedData = normalizeDataset(data, {
    minX: VIEWBOX_PADDING,
    maxX: viewBoxWidth - VIEWBOX_PADDING,
    // NOTE: Because SVGs are indexed from the top left, but most data is
    // indexed from the bottom left, we're inverting the Y min/max.
    minY: height - VIEWBOX_PADDING,
    maxY: VIEWBOX_PADDING,
  });

  const path = buildPath(normalizedData);

  return (
    <svg
      width={svgWidth}
      height={height}
      viewBox={`0 0 ${viewBoxWidth} ${height}`}
      {...delegated}
    >
      <path
        d={path} strokeWidth={1} stroke="black" fill="none"
      />
    </svg>
  );
};

Trend.propTypes = propTypes;
Trend.defaultProps = defaultProps;

export default Trend;
