<div align="center">
  <img src="https://raw.githubusercontent.com/unsplash/react-trend/master/misc/documentation-assets/react-trend-example.png" width="500" alt="React Trend">
  <br>
  <h1>React Trend</h1>
  <br>
  <a href="https://www.npmjs.org/package/react-trend"><img src="https://img.shields.io/npm/v/react-trend.png?style=flat-square" alt="npm"></a> <a href="https://travis-ci.org/unsplash/react-trend"><img src="https://img.shields.io/travis/unsplash/react-trend/master.png?style=flat-square" alt="travis"></a> <a href="https://codecov.io/github/unsplash/react-trend"><img src="https://img.shields.io/codecov/c/github/unsplash/react-trend.svg" alt="travis"></a>
</div>

<br>
<br>
<br>
Graphing tools are often complex, abstract, and heavy. They require domain-specific knowledge, and a significant time investment.

While building rich data visualizations for an analytics app, this is a necessary cost. But what if you just need a spark line that shows a trend?

For example, here's how GitHub shows activity on a repo:

<img src="https://raw.githubusercontent.com/unsplash/react-trend/master/misc/documentation-assets/gh-trend.png" width="300" />

Here's how Twitter displays your recent analytics:

<img src="https://raw.githubusercontent.com/unsplash/react-trend/master/misc/documentation-assets/tw-trend.png" width="300" />

These are very simple and elegant visualizations, and they should not require a bloated graphing library to produce.

React Trend is a concrete component that does 1 thing, and does it well: generate these trending graphs.


## Demo

Check out the [React Trend playground](https://unsplash.github.io/react-trend/).

## Features

- **Simple**. Integrate in seconds.
- **Scalable**. Uses SVG for sharp, scalable graphs. Will fill the parent container, or you can provide a fixed size.
- **Beautiful**. Built-in gradient support, and customizable smoothing.
- **Animatable**. Support for on-mount animations where the trend graph draws from left to right.
- **Tiny**. Zero-dependency, gzips to <3kb.


### Installation

```bash
$ yarn add react-trend

# Alternatively:
$ npm i -S react-trend
```

UMD builds are also available via CDN:

- [react-trend.js](https://unpkg.com/react-trend/umd/react-trend.js)
- [react-trend.min.js](https://unpkg.com/react-trend/umd/react-trend.min.js)

UMD build exposes the component as `Trend`.


### Quickstart

```js
import Trend from 'react-trend';

const MyComponent = () => (
  <Trend data={[0, 10, 5, 22, 3.6, 11]} />
);

// That's it!
// You can, of course, customize it. Check out the API Reference below.
// Be sure to check out `autoDraw`, `gradient`, and `smoothing`.
```

### API Reference

#### SVG Props

By default, all properties not recognized by React Trend will be delegated to the SVG. The line inherits these properties if none of its own override them.

This means that, among other properties, you can use:

- `stroke` to set a solid colour,
- `strokeWidth` to change the default line thickness,
- `strokeOpacity` to create a transparent line,
- `strokeLinecap`/`strokeLinejoin` to control the edges of your line,
- `strokeDasharray` to create a dashed line, and
- `strokeDashoffset` to control where the dashes start.


#### `autoDraw`
| Type    | Required | Default|
|---------|----------|--------|
| Boolean | ✕        | `false`|

Allow the line to draw itself on mount. Set to `true` to enable, and customize using `autoDrawDuration` and `autoDrawEasing`.

**NOTE**: This property uses `strokeDasharray` and `strokeDashoffset` under the hood to perform the animation. Because of this, any values you provide for those properties will be ignored.

###### Example
```js
<Trend
  data={data}
  autoDraw
  autoDrawDuration={3000}
  autoDrawEasing="ease-in"
/>
```


#### `autoDrawDuration`
| Type    | Required | Default|
|---------|----------|--------|
| Number  | ✕        | `2000` |

The amount of time, in milliseconds, that the autoDraw animation should span.

This prop has no effect if `autoDraw` isn't set to `true`.

###### Example
```js
<Trend
  data={data}
  autoDraw
  autoDrawDuration={3000}
  autoDrawEasing="ease-in"
/>
```


#### `autoDrawEasing`
| Type    | Required | Default|
|---------|----------|--------|
| String  | ✕        | `ease` |

The easing function to use for the autoDraw animation. Accepts any transition timing function within [the CSS spec](http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp) (eg. `linear`, `ease`, `ease-in`, `cubic-bezier`...).

This prop has no effect if `autoDraw` isn't set to `true`.

###### Example
```js
<Trend
  data={data}
  autoDraw
  autoDrawDuration={3000}
  autoDrawEasing="ease-in"
/>
```


#### `data`
| Type            | Required | Default     |
|-----------------|----------|-------------|
| [Number\|Object] | ✓        | `undefined` |

The data accepted by React Trend is incredibly simple: An array of y-axis values to graph.

React Trend takes care of normalization, so don't worry about ensuring the data is in a specific range.

This does mean that all data points will be evenly-spaced. If you have irregularly-spaced data, it will not be properly represented.

As of v1.2.0, you may supply an array of data objects with a `value` property.

###### Example
```js
<Trend data={[120, 149, 193.4, 200, 92]} />
<Trend data={[{ value: 4 }, { value: 6 }, { value: 8 }]} />
```


#### `gradient`
| Type     | Required | Default     |
|----------|----------|-------------|
| [String] | ✕        | `undefined` |

React Trend supports vertical gradients. It accepts an array of 2+ colour values, and will fade evenly between them from the bottom up.

Colour can be specified as any SVG-supported format (named, rgb, hex, etc).

###### Example
```js
<Trend gradient={['#0FF', '#F0F', '#FF0']} />
```



#### `height`
| Type     | Required | Default     |
|----------|----------|-------------|
| Number   | ✕        | `undefined` |

Set an explicit height for your SVG. By default it ensures a 1:4 aspect ratio with the width, and the width expands to fill the container.

Note that in _most_ cases it is sufficient to leave this blank, and just control the size of the parent container.

###### Example
```js
<Trend width={200} height={200} />
```


#### `padding`
| Type     | Required | Default     |
|----------|----------|-------------|
| Number   | ✕        | `8`         |

If you set a very large `strokeWidth` on your line, you may notice that it gets "cropped" towards the edges. This is because SVGs don't support overflow.

By increasing this number, you expand the space around the line, so that very thick lines aren't cropped.

In most cases you don't need to touch this value.

###### Example
```js
<Trend strokeWidth={20} padding={18} />
```


#### `radius`
| Type     | Required | Default     |
|----------|----------|-------------|
| Number   | ✕        | `10`        |

When using [smoothing](#smooth), you may wish to control the amount of curve around each point. For example, a `0` radius is equivalent to not having any smoothing at all, where an impossibly-large number like `10000` will ensure that each peak is as curved as it can possibly be.

This prop has no effect if `smooth` isn't set to `true`.

###### Example
```js
<Trend smooth radius={20} strokeWidth={4} />
```


#### `smooth`
| Type     | Required | Default     |
|----------|----------|-------------|
| Boolean  | ✕        | `false`       |

Smooth allows the peaks to be 'rounded' out so that the line has no jagged edges.

By tweaking the [radius](#radius) prop, you can use this as a subtle prop to tone down the sharpness, or you can set a very high radius to create a snake-like line.

###### Example
```js
<Trend smooth radius={20} strokeWidth={4} />
```


#### `width`
| Type     | Required | Default     |
|----------|----------|-------------|
| Number   | ✕        | `undefined` |

Set an explicit width for your SVG. By default it ensures a 1:4 aspect ratio with the height, expanding to fill the width of the container.

Note that in _most_ cases it is sufficient to leave this blank, and just control the width of the parent container.

###### Example
```js
<Trend width={200} height={200} />
```
