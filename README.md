# Require And Clean

> Require a module and then clean it and modules loaded within it from cache

Useful when you want to require a module for test.

## Install

```
$ npm install require-and-clean --save
```

## Know more

Assume that we have two modules:

```js
// /home/hastijs/times-two.js
'use strict';
let i = 1;
module.exports = () => {
  i = i * 2;
  return i;
};
```

```js
// /home/hastijs/plus-one.js
'use strict';
let i = require('./times-two')();
module.exports = () => {
  i = i + 1;
  return i;
};
```

Now we run following codes:

```js
// /home/hastijs/
console.log(require('./plus-one')());
console.log(require('./plus-one')());
console.log(require('./times-tow')());
// => 3
// => 4
// => 4
```

Amazing! but why? It is because of Node module caching. But sometimes we DO NOT want caching. For example when we test our code (Unit testing).

The solution is `require-and-clean` module.

```js
// /home/hastijs/
const requireAndClean = require('require-and-clean');
console.log(requireAndClean('./plus-one')());
console.log(requireAndClean('./plus-one')());
console.log(requireAndClean('./times-tow')());
// => 3
// => 3
// => 2
```

**Notice:** `require-and-clean` will not clear cache from modules loaded normaly (with `require`) before.

```js
// /home/hastijs/
const requireAndClean = require('require-and-clean');
console.log(require('./plus-one')());
console.log(requireAndClean('./plus-one')());
console.log(requireAndClean('./times-tow')());
// => 3
// => 4
// => 4
```

## API

### requireAndClean(modulePath)

#### modulePath

Type: `string`

Path of module you want to load.

## Contributing

Everyone is very welcome to contribute to z project. Require And Clean is a HastiJS project so please see [HastiJS contributing guidelines](https://github.com/HastiJS/contributing) before contributing.

## License

MIT © [HastiJS](https://github.com/HastiJS)
