---
layout: page
title: Sitemap
breadcrumbs: false
permalink: "/sitemap.html"
eleventyExcludeFromCollections: true
---
<ul class="govuk-list">
{% for item in collections.all | sort("data.order") %}
  <li class="govuk-!-margin-bottom-2">
    <a href="{{ item.url }}">{{ item.data.title }}</a>
  </li>
{% endfor %}
</ul>
