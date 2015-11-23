# tonal.set

[![Build Status](https://travis-ci.org/danigb/tonal.svg?branch=master)](https://travis-ci.org/danigb/tonal.set)
[![Code Climate](https://codeclimate.com/github/danigb/tonal.set/badges/gpa.svg)](https://codeclimate.com/github/danigb/tonal.set)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://img.shields.io/npm/v/tonal.set.svg)](https://www.npmjs.com/package/tonal.set)
[![license](https://img.shields.io/npm/l/tonal.set.svg)](https://www.npmjs.com/package/tonal.set)
[![tonal](https://img.shields.io/badge/tonal-lib-yellow.svg)](https://www.npmjs.com/package/tonal)


`tonal.set` is a collection of javascript functions to work with collections of notes or intervals:

```js
var gamut = require('tonal.set')
gamut('a fx c2 blah 5') // => ['A', 'F##', 'C2', null, '5P']
```

This is a low level library part of [tonal](https://www.npmjs.com/package/tonal). This library is the foundation of [tonal.set](), [tonal.scale]() and [tonal.chord]()

## Install

Only via npm: `npm i --save tonal.set`

## User guide

In [tonal](https://www.npmjs.com/package/tonal) a gamut is a collection of pitches (notes, intervals or pitch classes). The gamut module provides functions to work with them.

#### Create gamuts

```js
gamut('c d | e')
gamut.split('c d | e')
```

#### Rotate gamuts

```js
gamut.rotate(2, 'c d e') // => ['e', 'c', 'd']
```

#### Sort pitches

The `gamut.sort` function sorts a gamut using an ascending pitch order:

```js
kit.gamut.sort('F G D A C') // => ['C', 'D', 'F', 'G', 'A']
```

#### Select elements from a gamut

You can select elements with a list of 1-based index numbers and a gamut:

```js
gamut.select('1 3 5', 'C D E F G A B') // => ['C', 'E', 'G']
```

## License

MIT License
