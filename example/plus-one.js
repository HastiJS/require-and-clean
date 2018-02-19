/*
 * Require and clean example.
 */

'use strict';

let i = require('./times-two')();

/**
 * Plus one in each load.
 */
module.exports = () => {
  i = i + 1;
  return i;
};
