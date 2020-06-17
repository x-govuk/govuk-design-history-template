const slugify = require('slugify')

/**
 * Slugify string by removing special characters
 * replacing any space with a hypen, and transforming
 * to lower case
 *
 * @param {String} string String to slugify
 * @return {String} Slugified string
 *
 */
module.exports = function (string) {
  return slugify(string, {
    replacement: '-',
    remove: /[*+~.,()'"!?:@–]/g,
    lower: true
  })
}
