import React, { PropTypes } from 'react';

import { normalize, normalizeDataset, buildPath } from './Trend.helpers';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.number),
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  rounded: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  radius: PropTypes.number,
  strokeWidth: PropTypes.number,
};

const defaultProps = {
  height: 75,
  strokeWidth: 1,
  color: 'black',
  radius: 10,
};

const VIEWBOX_PADDING = 1;

const Trend = ({
  data,
  rounded,
  width,
  height,
  radius,
  color,
  ...delegated
}) => {
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

  if (typeof color === 'string') {
    // eslint-disable-next-line no-param-reassign
    color = [color];
  }

  return (
    <svg
      width={svgWidth}
      height={height}
      viewBox={`0 0 ${viewBoxWidth} ${height}`}
      {...delegated}
    >
      <defs>
        <linearGradient id="gradient_to_transparent" x1="0%" y1="0%" x2="0%" y2="100%">
          {color.slice().reverse().map((c, index) => (
            <stop
              offset={normalize({
                point: index,
                min: 0,
                max: color.length - 1,
              })}
              stopColor={c}
            />
          ))}
        </linearGradient>
      </defs>

      <path
        d={path}
        fill="none"
        stroke="url(#gradient_to_transparent)"
      />
    </svg>
  );
};

Trend.propTypes = propTypes;
Trend.defaultProps = defaultProps;

export default Trend;
