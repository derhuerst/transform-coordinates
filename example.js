'use strict'

const transformation = require('.')

const wgs84 = 'EPSG:4326'
const soldnerBerlin = '3068'
const transform = transformation(wgs84, soldnerBerlin)

console.log(transform.forward({x: 13.4105, y: 52.5034}))
