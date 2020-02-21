const Nunjucks = require('nunjucks')

module.exports = (() => {
  const parser = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader(
      [
        'app/_components',
        'app/_layouts',
        'node_modules/govuk-frontend'
      ], {
        watch: process.env.NODE_ENV === 'development'
      }
    ), {
      lstripBlocks: true,
      trimBlocks: true
    }
  )

  return parser
})()
