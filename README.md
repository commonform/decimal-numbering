decimal-numbering.js
====================

[![NPM version](https://img.shields.io/npm/v/decimal-numbering.svg)](https://www.npmjs.com/package/decimal-numbering)
[![build status](https://img.shields.io/travis/commonform/decimal-numbering.js.svg)](http://travis-ci.org/commonform/decimal-numbering.js)

Number hierarchical document parts like "1.5.3".

Exports a single function of an [abstract numbering](https://npmjs.com/package/abstract-numbering) to a string.

```javascript
var decimal = require('decimal-numbering');

var firstExample = [
  {series: {number: 1, of: 2}, element: {number: 1, of: 1}}
];

decimal(firstExample) // === 'A-1'

var secondExample = [
  {series: {number: 1, of: 1}, element: {number: 1, of: 1}},
  {series: {number: 1, of: 1}, element: {number: 1, of: 1}},
  {series: {number: 1, of: 1}, element: {number: 1, of: 1}},
  {series: {number: 1, of: 1}, element: {number: 1, of: 1}}
];

decimal(secondExample); // === '1.1.1.1'
```
