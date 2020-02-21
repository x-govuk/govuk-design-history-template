---
title: Apply for teacher training
description: A service for candidates to submit an application to their chosen teacher training courses
breadcrumbs:
  text: Apply for teacher training
  href: /apply-for-teacher-training
related:
  items:
  - text: Prototype
    description: |
      Username: `apply`
      Password: `bat`
    href: https://apply-beta-prototype.herokuapp.com/
pagination:
  data: collections.apply-for-teacher-training
  reverse: true
  size: 50
permalink: "apply-for-teacher-training/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% else %}index{% endif %}.html"
order: 3
---
