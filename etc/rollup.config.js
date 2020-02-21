const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')

module.exports = [{
  input: 'app/_javascripts/application.js',
  output: {
    legacy: true,
    file: 'public/javascripts/application.js',
    format: 'iife'
  },
  plugins: [
    resolve(),
    commonjs()
  ]
}]
