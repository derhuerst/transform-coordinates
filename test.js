'use strict'

const assert = require('assert')
const isRoughlyEqual = require('is-roughly-equal')

const transformation = require('.')

const transform = transformation('EPSG:4326', '3068') // WGS 84 to Soldner Berlin

const p = transform.forward({x: 13.4105, y: 52.5034})
assert.ok(p)
assert.strictEqual(typeof p.x, 'number')
assert.ok(isRoughlyEqual(.0000001, p.x, 25405.407133664165))
assert.strictEqual(typeof p.y, 'number')
assert.ok(isRoughlyEqual(.0000001, p.y, 19607.826100560924))
