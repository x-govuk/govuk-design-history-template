const sass = require('sass')

module.exports = class {
  data () {
    return {
      permalink: '/assets/application.css',
      eleventyExcludeFromCollections: true
    }
  }

  async render () {
    const cssString = `
      @import "govuk/base";
      @import "govuk/core/all";
      @import "_components/all";
    `
    const result = sass.compileString(cssString, {
      loadPaths: [
        'node_modules/govuk-frontend',
        'app'
      ],
      quietDeps: true
    })

    const { css } = result

    return css.toString()
  }
}
