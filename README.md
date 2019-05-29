# decimal-numbering

number hierarchical document parts like \"Section 1.5.3\"

decimal-numbering is part of the [abstract-numbering](https://www.npmjs.com/search?q=keywords:abstract-numbering) family of packages.

```javascript
var decimal = require('decimal-numbering')
var assert = require('assert')

assert.deepStrictEqual(
  decimal([
    {
      series: { number: 1, of: 2 },
      element: { number: 1, of: 1 }
    }
  ]),
  'Section A-1'
)

assert.deepStrictEqual(
  decimal([
    {
      series: { number: 28, of: 28 },
      element: { number: 1, of: 1 }
    }
  ]),
  'Section AB-1'
)

assert.deepStrictEqual(
  decimal([
    {
      series: { number: 1, of: 1 },
      element: { number: 1, of: 1 }
    },
    {
      series: { number: 1, of: 1 },
      element: { number: 1, of: 1 }
    },
    {
      series: { number: 1, of: 1 },
      element: { number: 1, of: 1 }
    },
    {
      series: { number: 1, of: 1 },
      element: { number: 1, of: 1 }
    }
  ]),
  'Section 1.1.1.1'
)

assert.deepStrictEqual(
  decimal(
    [
      {
        series: { number: 1, of: 1 },
        element: { number: 1, of: 1 }
      },
      {
        series: { number: 1, of: 1 },
        element: { number: 1, of: 1 }
      },
      {
        series: { number: 1, of: 1 },
        element: { number: 1, of: 1 }
      },
      {
        series: { number: 1, of: 1 },
        element: { number: 1, of: 1 }
      }
    ],
    true
  ),
  '1.1.1.1.'
)
```
