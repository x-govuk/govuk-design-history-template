module.exports = (number, length) => {
  return number < 1 ? number.toFixed(length || 1) : number.toFixed(length || 0)
}
