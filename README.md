# 📈 React Trend
### Simple "trending" graph generator

Graphing tools are often complex, abstract, and heavy. They require domain-specific knowledge, and a significant time investment.

While building rich data visualizations for an analytics app, this is a necessary cost. But what if you just need a simple line that shows a trend?

For example, here's how GitHub shows activity on a repo:
![GitHub Trending](misc/documentation-assets/gh-trend.png)

Here's how Twitter displays your recent analytics:
![Twitter Trending](misc/documentation-assets/tw-trend.png)

These are very simple and elegant visualizations, and they do not require a bloated graphing library to produce.

Redux Trend is a concrete component that does 1 thing, and does it well: generate these trending graphs.


## Features

- **Simple**. Integrate in seconds.
- **Scalable**. Uses SVG for sharp, scalable graphs. Will fill the parent container, or you can provide a fixed size.
- **Beautiful**. Built-in gradient support, and customizable smoothing.
- **Animatable**. Set `autoDraw` to have the line 'draw itself'.
- **Tiny**. Zero-dependency, and gzips to just _2.62kb!_


### Installation

```
npm i -S react-trend
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
)
```


[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Describe react-trend here.

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
