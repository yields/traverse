
# traverse

  low level traverse function, inspired by $.dir

## Installation

  Install with [component(1)](http://component.io):

    $ component install yields/traverse

## API

#### traverse(property, element, [selector, [length]])

Traverse using the given `property` on `element` getting elements
that match the given `selector` until `len` is reached.

if `selector` is omitted, all elements are returned.
`len` is defaulted to 1.

## Example

```js
var traverse = require('traverse');

// getting all `<p>` parents.

traverse('parentNode', el, 'p', Infinity);

// getting a single `<p>` sibling

traverse('nextSibling', el, 'p');
```

## License

  MIT
