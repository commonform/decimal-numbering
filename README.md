Exports a single function of an [abstract numbering](https://npmjs.com/package/abstract-numbering) to a string.

```javascript
var decimal = require('decimal-numbering')
var assert = require('assert')

assert.deepEqual(
  decimal(
    [ { series:  { number: 1, of: 2 },
        element: { number: 1, of: 1 } } ]),
  'A-1')

assert.deepEqual(
  decimal(
    [ { series:  { number: 1, of: 1 },
        element: { number: 1, of: 1 } },
      { series:  { number: 1, of: 1 },
        element: { number: 1, of: 1 } },
      { series:  { number: 1, of: 1 },
        element: { number: 1, of: 1 } },
      { series:  { number: 1, of: 1 },
        element: { number: 1, of: 1 } } ]),
  '1.1.1.1')

assert.deepEqual(
  decimal(
    [ { series:  { number: 1, of: 1 },
        element: { number: 1, of: 1 } },
      { series:  { number: 1, of: 1 },
        element: { number: 1, of: 1 } },
      { series:  { number: 1, of: 1 },
        element: { number: 1, of: 1 } },
      { series:  { number: 1, of: 1 },
        element: { number: 1, of: 1 } } ],
    true),
  '1.1.1.1.')
```
