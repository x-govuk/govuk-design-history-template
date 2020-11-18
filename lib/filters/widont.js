/**
 * Prevent widows by making the last space non-breaking
 *
 * @param {String} string String to update
 * @return {String} Updated string
 *
 */
module.exports = string => {
  const str = String(string)
  const nonBreakingSpaceChar = '\xA0'
  const widontRegex = /\s+([^\s]*)\s*$/
  return str.replace(widontRegex, `${nonBreakingSpaceChar}$1`)
}
