module.exports = (num, length) => {
  return num < 1 ? num.toFixed(length || 1) : num.toFixed(length || 0)
}
