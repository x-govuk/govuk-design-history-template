---
title: Divide a design history into different sections
description: Learn how to divide your design history site into different sections. You can use this if your team is building multiple products or services.
date: 2020-01-01
---

If your service has different products (for example a public facing service as well as an admin or support interface), you may want to divide your history up into different sections focused on each part of the service.

## Set up a folder for each section

You can create a section by grouping related posts. You can do this in 2 ways; keeping posts in the same folder and giving them the same tag(s).

1. Create a subfolder within the app/posts folder

2. Within this subfolder, create a JSON file, with the same name as the folder. For example, for the folder app/posts/support-interface, add the file app/posts/support-interface/support-interface.json

3. This is a [directory data file](https://www.11ty.dev/docs/data-template-dir/), and it can be used to set the default values for all posts that sit within this folder.

4. In this JSON file, declare a tag which should be used to group these related posts, and a parent name to use in the breadcrumb navigation (the parent being the name of this section). For example

    ```` json
    {
      "tags": ["support-interface"],
      "eleventyNavigation": {
        "parent": "Service support interface"
      }
    }
    ````

## Create an index page for each section

Next, create a page that lists these related posts. You can do that by creating an index page.

1. Within the subfolder created in the previous step, create a markdown file, with the same name as the folder. For example, for the folder app/posts/support-interface/, add the file app/posts/support-interface/support-interface.md

2. Add these values to the frontmatter:

    ``` yaml
    {% raw %}
    ---
    tags: false
    layout: collection
    title: Service support interface
    description: A tool for support agents to manage the service
    pagination:
      data: collections.support-interface
      reverse: true
      size: 50
    permalink: "support-interface/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
    eleventyComputed:
      eleventyNavigation:
        key: "{{ title }}"
        excerpt: "{{ description }}"
        parent: home
    ---
    {% endraw %}
    ```

    You do not need to add any body content, but if you do, this will appear above the list of posts in this section.

## Update the home page to link to each section

Currently the homepage lists all posts on the site. To change it so that only sections are linked to instead:

1. Remove `pagination` from the frontmatter in `app/index.md`.
2. Remove `eleventyComputed.eleventyNavigation.parent` from `app/posts/posts.json`
