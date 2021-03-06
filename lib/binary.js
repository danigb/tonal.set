'use strict'

var height = require('tonal.pitch/height')
var operation = require('tonal.gamut/operation')
var harmonics = require('tonal.gamut/harmonics')
var set = require('./set')

/**
 * Get a set binary number
 *
 * A set binary number is a 12 digit binary, each digit representing a step
 * in the chromatic scale. For example, `101010000000` is `['1P', '2M', '3M']`
 *
 * The set binary number is very useful to check if two sets are equal or
 * contains same intervals (regarding of note names)
 *
 * @name set.binary
 * @function
 * @param {String|Array|Array<Array>} source - a gamut
 * @return {String} the binary number
 *
 * @example
 * var binary = require('tonal.set/binary')
 * binary('C2 E4 D3') // => '101010000000'
 */
module.exports = operation(function (gamut) {
  var number = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  var intervals = set(harmonics(gamut))
  var semitones = intervals.map(height)
  semitones.forEach(function (s) {
    number[s] = 1
  })
  return number.join('')
})
