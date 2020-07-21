---
title: Example post
description:
date: 2020-07-21
---
{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
      text: "Design history index",
      img: { src: "01-design-history-index.png" }
    }, {
      text: "Search results",
      img: { src: "02-search-results.png" }
    }, {
      text: "A design history post",
      img: { src: "03-a-design-history-post.png" }
    }]
}) }}
