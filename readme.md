# transform-coordinates

**Transform coordinates from one [coordinate system](https://en.wikipedia.org/wiki/Geographic_coordinate_system) to another.** Thin layer around [`proj4`](https://github.com/proj4js/proj4js) and [`epsg-index`](https://github.com/derhuerst/epsg-index).

[![npm version](https://img.shields.io/npm/v/transform-coordinates.svg)](https://www.npmjs.com/package/transform-coordinates)
[![build status](https://img.shields.io/travis/derhuerst/transform-coordinates.svg)](https://travis-ci.org/derhuerst/transform-coordinates)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/transform-coordinates.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)


## Installing

```shell
npm install transform-coordinates
```


## Rationale

[`proj4`](https://github.com/proj4js/proj4js) is a battle-proven tool for converting from one any coordinate system into any other. You need to specify a long and complicated string for both system though, to tell `proj4` *how* to convert.

[epsg.io](https://epsg.io/) has an index of those strings. [`epsg-index`](https://github.com/derhuerst/epsg-index) is an offline copy of them.

**This module glues together `proj4` and `epsg-index` and returns a clean API.**


## Usage

```js
const transformation = require('transform-coordinates')

const transform = transformation('EPSG:4326', '3068') // WGS 84 to Soldner Berlin

console.error(transform.forward({x: 13.4105, y: 52.5034}))
// {
// 	x: 25405.407133664165,
// 	y: 19607.826100560924,
// 	z: -40.94089552294463
// }
```

`transformation(from, to)` returns a [`proj4` object with `forward()` and `inverse()`](https://github.com/proj4js/proj4js#using).


## Contributing

If you have a question or have difficulties using `transform-coordinates`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/transform-coordinates/issues).
