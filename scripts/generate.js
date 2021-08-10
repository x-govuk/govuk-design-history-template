/*
  Usage:
  * Put images into `app/images/directory-name`
  * Name them with 01-, 02- prefixes

  Run:
  node scripts/generate.js name-of-directory-holding-images
*/

// Dependencies
const fs = require('fs')
const { DateTime } = require('luxon')

// Arguments
const directoryName = process.argv.slice(-1)[0]
warnIfNoArguments()

const deepestDirectory = directoryName.split('/').pop()

let title = deepestDirectory.replace(/-/g, ' ')
title = title.charAt(0).toUpperCase() + title.slice(1)

const datestamp = DateTime.local().toFormat('yyyy-MM-dd')

const imageDirectory = `app/images/${directoryName}`
const postDirectory = `app/posts/${directoryName}`.replace('/' + deepestDirectory, '')

const paths = []

// Run
function start () {
  makeDirectories()
  getExistingImages()
  generatePage()
}

function warnIfNoArguments (title) {
  // TODO: Use a better check for an argument
  if (directoryName.startsWith('/Users')) {
    console.log('No arguments set')
    console.log('Please set a title: `node scripts/screenshot.js "Title of page"`')
  }
}

function makeDirectories () {
  if (!fs.existsSync(imageDirectory)) {
    fs.mkdirSync(imageDirectory)
  }

  if (!fs.existsSync(postDirectory)) {
    fs.mkdirSync(postDirectory)
  }
}

function getExistingImages () {
  const files = fs.readdirSync(imageDirectory)

  files.forEach(file => {
    if (!(/\.(png|jpg)$/.test(file))) {
      console.log('Ignoring: ' + file)
      return
    }

    const title = file.replace(/\.(png|jpg)$/, '').replace(/^\d{2}-/, '').replace(/-/g, ' ')
    const image = {
      src: file,
      title: title.charAt(0).toUpperCase() + title.slice(1)
    }
    paths.push(image)
  })
}

function generateFrontMatter (items) {
  return `---
  title: ${title}
  date: ${datestamp}
  screenshots:
    ${items}
---`
}

function generatePage () {
  let items = 'items:'

  paths.forEach(item => {
    items += `
      - text: "${item.title}"
        src: ${item.src}`
  })

  const filename = `${postDirectory}/${datestamp}-${deepestDirectory}.md`

  fs.writeFile(filename, generateFrontMatter(items), err => {
    if (err) {
      console.error(err)
    }
    console.log(`Page generated: ${filename}`)
  })
}

start()
