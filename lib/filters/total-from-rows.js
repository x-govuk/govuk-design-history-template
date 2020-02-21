module.exports = (rows) => {
  return rows.reduce((a, b) => a + b[1], 0)
}
