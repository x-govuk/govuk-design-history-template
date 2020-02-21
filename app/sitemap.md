---
layout: page
title: Sitemap
breadcrumbs: false
permalink: "/sitemap.html"
eleventyExcludeFromCollections: true
---
{% for item in collections["product"] | sort("data.order") %}
  <h2 class="govuk-heading-l">
    <a href="{{ item.url }}">{{ item.data.title }}</a>
  </h2>
  {% set collection = item.data.pagination.data | replace("collections.", "") %}
  <ul class="govuk-list">
  {% for item in collections[collection] %}
    <li class="govuk-!-margin-bottom-2">
      <a href="{{ item.url }}">{{ item.data.title }}</a>
    </li>
  {% endfor %}
  </ul>
{% endfor %}
