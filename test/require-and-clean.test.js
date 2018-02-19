/*
 * Require and clean test.
 */

'use strict';

const assert = require('assert');
const requireAndClean = require('../.');

/*
 * Start testing.
 */
describe('require-and-clean', () => {
  it('Should clean main module from cache', () => {
    assert.equal(requireAndClean('../example/plus-one')(), 3);
    assert.equal(requireAndClean('../example/plus-one')(), 3);
  });
  it('Should clean modules within main module from cache', () => {
    assert.equal(requireAndClean('../example/plus-one')(), 3);
    assert.equal(requireAndClean('../example/times-two')(), 2);
  });
});
