const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')

module.exports = [{
  input: 'app/_javascripts/application.js',
  output: {
    file: 'public/javascripts/application.js',
    format: 'iife'
  },
  plugins: [
    resolve(),
    commonjs()
  ]
}]
