---
title: Generate a page of screenshots
description: Learn how to use the 2 scripts that generate posts containing a series of screenshots.
date: 2020-01-02
related:
  items:
    - text: An example post with screenshots
      href: /example-post
---

The design history project provides 2 scripts to help you generate a post featuring a list of screenshots. [See an example](/example-post/).

The first allows you to capture these screenshots from a sequence of URLs, perhaps from a user journey you have prototyped, the second allows you to generate a page from a folder of images.

## Generate a post with screenshots taken from a sequence of URLs

1. Open `scripts/screenshot.js`. In this file you will see 2 values:

   - `domain`: the website you want to screenshot, eg localhost:3000
   - `paths`: an array of named paths

   Replace these with your desired values.

2. In the terminal, type:

   ```shell
   node scripts/screenshot.js [name-of-your-feature]
   ```

   This will:

   - visit each page lists in paths and save a screenshot
   - save those screenshots in the named directory
   - generate an index page with screenshots listed in order

### Example

With the following values in `scripts/screenshots.js`:

```js
const domain = 'http://localhost:3000'
const paths = [
  { title: 'Start page', path: '/' },
  { title: 'Personal details', path: '/personal-details' },
  { title: 'Check your answers', path: '/check-your-answers' },
  { title: 'Confirmation', path: '/confirmation' }
]
```

running `node scripts/screenshot.js submit-personal-details` will generate the following images:

- `app/images/submit-personal-details/start-page.png`
- `app/images/submit-personal-details/personal-details.png`
- `app/images/submit-personal-details/check-your-answers.png`
- `app/images/submit-personal-details/confirmation-page.png`

A post will also be created, using the name of the directory and current date, for example:

- `app/posts/{{ "now" | date("y-LL-dd") }}-submit-personal-details.md`

## Generate a page of screenshots from a folder of images

1. Create a new folder within `app/images`.

2. Add images inside this folder. Screenshots will be generated in alphabetical order. If you want to have them appear in sequence, you can use numbered prefixes, ie. `01-index-page.png`, `02-question-page.png`.

3. In the terminal, type:

   ```shell
   node scripts/generate.js [name-of-directory-holding-images]
   ```

   This will generate an index page with screenshots listed in order, creating a post using the name of the containing folder.

## The generated post

This file will be pre-populated with a title, date, and a list of screenshots:

```yaml
---
title: Submit personal details
date: {{ "now" | date("y-LL-dd") }}
screenshots:
  items:
    - "Index page"
    - "Personal details"
    - "Check your answers"
    - "Confirmation"
---
```

If you want to change the name of any images, you can use the `src` value to tell the screenshots component what filename to look for, for example:

```yaml
title: Submit personal details
date: {{ "now" | date("y-LL-dd") }}
screenshots:
  items:
    - text: "Index page"
      src: a-different-index-page-image.jpg
    - "Personal details"
    - "Check your answers"
    - "Confirmation"
```
