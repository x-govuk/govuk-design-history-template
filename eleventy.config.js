import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

export default function (eleventyConfig) {
  // Options to customise the appearance of your design history
  // https://govuk-eleventy-plugin.x-govuk.org/get-started/options/
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      productName: 'Design History',
      search: {
        indexPath: '/search-index.json',
        sitemapPath: '/sitemap'
      }
    },
    headingPermalinks: true,
    stylesheets: [
      '/styles/application.css'
    ],
    templates: {
      searchIndex: true,
      tags: true
    },
    url:
      process.env.GITHUB_ACTIONS &&
      'https://x-govuk.org/govuk-design-history-template/'
  })

  // Passthrough
  eleventyConfig.addPassthroughCopy({ './app/images': '.' })

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      layouts: '_layouts',
      includes: '_components'
    },
    pathPrefix: process.env.GITHUB_ACTIONS && '/govuk-design-history-template/'
  }
}
