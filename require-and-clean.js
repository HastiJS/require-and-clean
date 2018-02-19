/*
 * Require and clean.
 *
 * Requires a module and clean it and all loaded modules
 * within it from require cache, if they are not loaded before.
 */

'use strict';

/*
 * Load useful dependencies.
 */
const resolveByParent = require('path-resolve-by-parent');

/**
 * Load a module and clean
 * the require cache from loaded modules
 * in current require if they are not loaded before.
 *
 * @param {string} requestedModulePath -Path of module we want to load.
 * @returns {Object} -Module result.
 */
module.exports = (requestedModulePath) => {
  // Sanitize `requestedModulePath`.
  requestedModulePath = resolveByParent(requestedModulePath);

  // Get all cached module paths.
  const cachedKeys = Object.keys(require.cache);

  const loadedModule = require(requestedModulePath);

  // Remove all modules that loaded with current module and not loaded before.
  Object.keys(require.cache).forEach((key) => {
    if (cachedKeys.indexOf(key) < 0) {
      delete require.cache[key];
    }
  });

  return loadedModule;
};
