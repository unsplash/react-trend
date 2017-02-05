import React, { Component, PropTypes } from 'react';

import { omit } from '../../utils';
import {
  buildSmoothPath,
  buildLinearPath,
  injectStyleTag,
} from '../../helpers/DOM.helpers';
import { normalize } from '../../helpers/math.helpers';
import { generateId } from '../../helpers/misc.helpers';
import { normalizeDataset } from './Trend.helpers';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.number),
  smooth: PropTypes.bool,
  autoDraw: PropTypes.bool,
  autoDrawDuration: PropTypes.number,
  autoDrawEasing: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  padding: PropTypes.number,
  radius: PropTypes.number,
  gradient: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = {
  radius: 10,
  stroke: 'black',
  padding: 8,
  strokeWidth: 1,
  autoDraw: false,
  autoDrawDuration: 2000,
  autoDrawEasing: 'ease',
};

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

    if (autoDraw) {
      this.lineLength = this.path.getTotalLength();

      // We do the animation using the dash array/offset trick
      // https://css-tricks.com/svg-line-animation-works/
      const autodrawKeyframeAnimation = `
        @keyframes react-trend-autodraw-${this.trendId} {
          0% {
            stroke-dasharray: ${this.lineLength};
            stroke-dashoffset: ${this.lineLength}
          }
          100% {
            stroke-dasharray: ${this.lineLength};
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: '';
            stroke-dasharray: '';
          }
        }
      `;

      // One unfortunate side-effect of the auto-draw is that the line is
      // actually 1 big dash, the same length as the line itself. If the
      // line length changes (eg. radius change, new data), that dash won't
      // be the same length anymore. We can fix that by removing those
      // properties once the auto-draw is completed.
      const cleanupKeyframeAnimation = `
        @keyframes react-trend-autodraw-cleanup-${this.trendId} {
          to {
            stroke-dasharray: '';
            stroke-dashoffset: '';
          }
        }
      `;

      const css = `
        ${autodrawKeyframeAnimation}

        ${cleanupKeyframeAnimation}

        #react-trend-${this.trendId} {
          animation:
            react-trend-autodraw-${this.trendId} ${autoDrawDuration}ms ${autoDrawEasing},
            react-trend-autodraw-cleanup-${this.trendId} 1ms ${autoDrawDuration}ms
          ;
        }
      `;

      injectStyleTag(css);
    }
  }

  getDelegatedProps() {
    return omit(this.props, Object.keys(propTypes));
  }

  renderGradientDefinition() {
    const { gradient } = this.props;

    return (
      <defs>
        <linearGradient id={GRADIENT_ID} x1="0%" y1="0%" x2="0%" y2="100%">
          {gradient.slice().reverse().map((c, index) => (
            <stop
              key={index}
              offset={normalize({
                value: index,
                min: 0,
                // If we only supply a single colour, it will try to normalize
                // between 0 and 0, which will create NaN. By making the `max`
                // at least 1, we ensure single-color "gradients" work.
                max: gradient.length - 1 || 1,
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
      smooth,
      width,
      height,
      padding,
      radius,
      gradient,
    } = this.props;

    // We need at least 2 points to draw a graph.
    if (!data || data.length < 2) {
      return null;
    }

    // Our viewbox needs to be in absolute units, so we'll default to 300x75
    // Our SVG can be a %, though; this is what makes it scalable.
    // By defaulting to percentages, the SVG will grow to fill its parent
    // container, preserving a 1/4 aspect ratio.
    const viewBoxWidth = width || 300;
    const viewBoxHeight = height || 75;
    const svgWidth = width || '100%';
    const svgHeight = height || '25%';

    const normalizedData = normalizeDataset(data, {
      minX: padding,
      maxX: viewBoxWidth - padding,
      // NOTE: Because SVGs are indexed from the top left, but most data is
      // indexed from the bottom left, we're inverting the Y min/max.
      minY: viewBoxHeight - padding,
      maxY: padding,
    });

    const path = smooth ?
      buildSmoothPath(normalizedData, { radius }) :
      buildLinearPath(normalizedData);

    return (
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        {...this.getDelegatedProps()}
      >
        {gradient && this.renderGradientDefinition()}

        <path
          ref={(elem) => { this.path = elem; }}
          id={`react-trend-${this.trendId}`}
          d={path}
          fill="none"
          stroke={gradient ? `url(#${GRADIENT_ID})` : undefined}
        />
      </svg>
    );
  }
}

Trend.propTypes = propTypes;
Trend.defaultProps = defaultProps;

export default Trend;
