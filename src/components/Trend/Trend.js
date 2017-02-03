import React, { Component, PropTypes } from 'react';

import { normalize, normalizeDataset, buildPath } from './Trend.helpers';
import { injectStyleTag } from '../../helpers/DOM.helpers';
import { generateId } from '../../helpers/misc.helpers';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.number),
  rounded: PropTypes.bool,
  autoDraw: PropTypes.bool,
  autoDrawDuration: PropTypes.number,
  autoDrawEasing: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  radius: PropTypes.number,
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  strokeWidth: PropTypes.number,
  strokeLinecap: PropTypes.string,
  strokeLinejoin: PropTypes.string,
  strokeDasharray: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  strokeDashoffset: PropTypes.number,
};

const defaultProps = {
  radius: 10,
  color: 'black',
  strokeWidth: 1,
  autoDraw: false,
  autoDrawDuration: 2000,
  autoDrawEasing: 'ease',
};

const VIEWBOX_PADDING = 8;
const GRADIENT_ID = 'react-trend-vertical-gradient';

class Trend extends Component {
  constructor(props) {
    super(props);

    // Generate a random ID. This is important for distinguishing between
    // Trend components on a page, so that they can have different keyframe
    // animations.
    this.trendId = generateId();
  }

  componentDidMount() {
    const { autoDraw, autoDrawDuration, autoDrawEasing } = this.props;

    if (this.props.autoDraw) {
      const lineLength = this.path.getTotalLength();

      const css = `
        @keyframes react-trend-autodraw-${this.trendId} {
          from {
            stroke-dashoffset: ${lineLength}
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        #react-trend-${this.trendId} {
          stroke-dasharray: ${lineLength};
          animation: react-trend-autodraw-${this.trendId} ${autoDrawDuration}ms ${autoDrawEasing}
        }
      `;

      injectStyleTag(css);
    }
  }

  renderGradientDefinition() {
    const { color } = this.props;

    if (typeof color === 'string') {
      return null;
    }

    return (
      <defs>
        <linearGradient id={GRADIENT_ID} x1="0%" y1="0%" x2="0%" y2="100%">
          {color.slice().reverse().map((c, index) => (
            <stop
              key={index}
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
    );
  }

  render() {
    const {
      data,
      rounded,
      autoDraw,
      width,
      height,
      radius,
      color,
      strokeWidth,
      strokeLinecap,
      strokeLinejoin,
      strokeDasharray,
      strokeDashoffset,
      ...delegated
    } = this.props;

    // Our viewbox needs to be in absolute units, so we'll default to 300x75
    // Our SVG can be a %, though; this is what makes it scalable.
    // By defaulting to percentages, the SVG will grow to fill its parent
    // container, preserving a 1/4 aspect ratio.
    const viewBoxWidth = width || 300;
    const viewBoxHeight = height || 75;
    const svgWidth = width || '100%';
    const svgHeight = height || '25%';

    const normalizedData = normalizeDataset(data, {
      minX: VIEWBOX_PADDING,
      maxX: viewBoxWidth - VIEWBOX_PADDING,
      // NOTE: Because SVGs are indexed from the top left, but most data is
      // indexed from the bottom left, we're inverting the Y min/max.
      minY: viewBoxHeight - VIEWBOX_PADDING,
      maxY: VIEWBOX_PADDING,
    });

    // Use a 'smooth curve' instruction if we want it rounded.
    // Otherwise, use 'line';
    const instruction = rounded ? 'rounded' : 'linear';
    const path = buildPath(normalizedData, { instruction, radius });

    const useGradient = typeof color !== 'string';

    return (
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        {...delegated}
      >
        {this.renderGradientDefinition()}

        <path
          ref={(elem) => { this.path = elem; }}
          id={`react-trend-${this.trendId}`}
          d={path}
          fill="none"
          stroke={useGradient ? `url(#${GRADIENT_ID})` : color}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
          strokeDasharray={autoDraw === false ? strokeDasharray : undefined}
          strokeDashoffset={autoDraw === false ? strokeDashoffset : undefined}
        />
      </svg>
    );
  }
}

Trend.propTypes = propTypes;
Trend.defaultProps = defaultProps;

export default Trend;
