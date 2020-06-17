const get = require('lodash/get')

/**
 * Find objects in array whose key includes a value
 *
 * @param {Array} array Array to filter
 * @param {String} key Key to inspect
 * @param {String} value Value key needs to include
 * @return {Array} Filtered array
 *
 */
module.exports = (array, key, value) => {
  return array.filter(item => {
    const field = get(item, key)

    // If field doesn’t exist, abort
    if (!field) {
      return false
    }

    return field.includes(value) ? item : false
  })
}
