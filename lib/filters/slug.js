const slugify = require('slugify')

module.exports = function (str) {
  return slugify(str, {
    replacement: '-',
    remove: /[*+~.,()'"!?:@–]/g,
    lower: true
  })
}
