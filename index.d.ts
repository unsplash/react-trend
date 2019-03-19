// Type definitions for React Trend 1.2.4
// Project: http://unsplash.github.io/react-trend/, https://github.com/unsplash/react-trend
// Definitions by: Jared Palmer <https://github.com/jaredpalmer>
// TypeScript Version: 2.1

declare module 'react-trend' {
  export type TrendDataPoint = number | { value: number };

  export type TrendProps = JSX.IntrinsicElements['svg'] & {
    /**
     * An array of y-axis values to graph.
     * React Trend takes care of normalization, so don't worry about ensuring
     * the data is in a specific range. This does mean that all data points
     * will be evenly-spaced. If you have irregularly-spaced data, it will not
     * be properly represented. As of v1.2.0, you may supply an array of data
     *  objects with a value property
     */
    data: TrendDataPoint[];
    /**
     * Allow the line to draw itself on mount.
     * Set to true to enable, and customize using autoDrawDuration
     * and autoDrawEasing.
     *
     * @default false
     */
    autoDraw?: boolean;
    /**
     * The amount of time, in milliseconds, that the autoDraw
     * animation should span.
     *
     * @default 2000
     */
    autoDrawDuration?: number;
    /**
     * The easing function to use for the autoDraw animation.
     * Accepts any transition timing function within the CSS spec
     * (eg. linear, ease, ease-in, cubic-bezier...).
     *
     * @default "ease"
     */
    autoDrawEasing?: React.CSSProperties['transitionTimingFunction'];
    /**
     * An array of 2+ colour values, and will fade evenly between them from the
     * bottom up. Colour can be specified as any SVG-supported format (named,
     * rgb, hex, etc).
     */
    gradient?: string[];
    /**
     * Set an explicit height for your SVG. By default it ensures a 1:4 aspect
     * ratio with the width, and the width expands to fill the container.
     * Note that in most cases it is sufficient to leave this blank, and just
     * control the size of the parent container.
     */
    height?: number;
    /**
     * If you set a very large strokeWidth on your line, you may notice that
     * it gets "cropped" towards the edges. This is because SVGs don't support
     * overflow.By increasing this number, you expand the space around the line,
     * so that very thick lines aren't cropped. In most cases you don't need
     * to touch this value.
     *
     * @default 8
     */
    padding?: number;
    /**
     * When using smoothing, you may wish to control the amount of curve around
     *  each point. For example, a 0 radius is equivalent to not having any
     * smoothing at all, where an impossibly-large number like 10000 will
     * ensure that each peak is as curved as it can possibly be.
     *
     * This prop has no effect if smooth isn't set to true.
     *
     * @default 10
     */
    radius?: number;
    /**
     * Smooth allows the peaks to be 'rounded' out so that the line has no
     * jagged edges. By tweaking the radius prop, you can use this as a
     * subtle prop to tone down the sharpness, or you can set a very high
     * radius to create a snake-like line.
     *
     * @default false
     */
    smooth?: boolean;
    /**
     * Set an explicit width for your SVG. By default it ensures a 1:4 aspect
     * ratio with the height, expanding to fill the width of the container.
     * Note that in most cases it is sufficient to leave this blank, and
     * just control the width of the parent container.
     *
     * @default 14
     */
    width?: number;
  };

  export default class Trend extends React.Component<TrendProps> {}
}
