---
title: Divide a design history into different sections
description: Learn how to divide your design history site into different sections. You can use this if your team is building multiple products or services.
date: 2020-01-01
---

If your service has different interfaces (for example a public facing service as well as an admin or support interface), you may want to divide your history up into different sections focused on each part of the service.

## Set up a folder for each section

You can group posts together into sections using folders

1. Create a subfolder for each section within the app/posts folder. Use dashes instead of spaces in the the folder names.

2. Within each subfolder, create a JSON file, with the same name as the folder but ending in `.json`. For example, for the folder `app/posts/support-interface`, add the file `app/posts/support-interface/support-interface.json`.

3. This is a [directory data file](https://www.11ty.dev/docs/data-template-dir/), and it can be used to set the default values for all posts that sit within this folder.

4. In this JSON file, declare a tag which should be used to group these related posts, and a parent name to use in the breadcrumb navigation (the parent being the name of this section). For example

   ```json
   {
     "tags": ["support-interface"],
     "eleventyNavigation": {
       "parent": "Service support interface"
     }
   }
   ```

## Create an index page for each section

Next, create a page that lists these related posts. You can do that by creating an index page.

1. Within the `posts` folder, create a markdown file for each section. For example, for the folder `app/posts/support-interface/`, add the file `app/posts/support-interface.md`.

2. At the top of the markdown file for the section, add this front matter data:

   {% raw %}

   ```yaml
   ---
   layout: collection
   title: Service support interface
   description: A tool for support agents to manage the service
   pagination:
     data: collections.support-interface
     reverse: true
     size: 50
   permalink: "support-interface/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
   ---
   ```

   {% endraw %}

   The value for `pagination.data` should use the collection created by the tag you added to the JSON file for the section. This tells the index page which posts to list. For example, if your tag is `support-interface`, the value for `pagination.data` would be `collections.support-interface`.

   You do not need to add any body content, but if you do, this will appear above the list of posts in this section.

## Update the home page to link to each section

Currently the homepage lists all posts on the site. Change it so that only sections are linked to instead by removing these lines from `app/index.md`:

   ```yaml
   pagination:
     data: collections.post
     reverse: true
     size: 50
   posts:
     title: Getting started
   ```

You can change the content of the heading on the homepage by adding these lines to `app/index.md`:

   ```yaml
   sections:
     title: Services
   ```
