---
title: An example post with screenshots
description: This example was generated using a script and shows how to automatically include a list of screenshots at the end of your post.
date: 2019-12-31
screenshots:
  items:
    - text: Design history index
      src: 01-design-history-index.png
      caption: |
        You can include captions with each image, and each caption can include markdown. This is a screenshot of the [index page](/).
    - text: Search results
      src: 02-search-results.png
    - text: A design history post
      src: 03-a-design-history-post.png
tags:
  - examples
---

This is an example of a standard design history post – it begins with a preamble about the design and ends with a list of screenshots.

Some real examples are:

- [Apply for teacher training: Reasons for withdrawing an application](https://bat-design-history.netlify.app/apply-for-teacher-training/reason-for-withdraw/)
- [Manage teacher applications: Deferring an application](https://bat-design-history.netlify.app/manage-teacher-training-applications/deferring-applications-to-the-next-cycle/)
- [Find postgraduate teacher training: A snapshot of the service](https://bat-design-history.netlify.app/find-teacher-training/find-december-2019/)

## This page was generated

After screenshots were saved to the `app/images/example-post` directory, [this page was generated](https://github.com/x-govuk/govuk-design-history-template/pull/11/commits/473f5aca5d978a3d18ac188b98c6c8ef6c000713) using the following command:

```bash
node scripts/generate.js example-post
```

[Read the guide on how to use this script](https://x-govuk.github.io/govuk-design-history/generate-a-page-of-screenshots/#generate-a-page-of-screenshots-from-a-folder-of-images)

## You can print this page

If you print preview a design history post you’ll see that each screenshot is given its own page.
