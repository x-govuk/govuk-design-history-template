---
title: How a design history has helped
description: A case study on the Becoming a Teacher team’s design history – how it’s been used and the story behind it.
date: 2020-01-04
---

On the Becoming a teacher team, we've been using a design history to document the evolution of the Find postgraduate teacher training and Apply for teacher training services since they began in May 2018.

Our design history is a public record of our designs and it tells the story of what we’ve designed and why:

[https://bat-design-history.netlify.app/](https://bat-design-history.netlify.app/)

## The value of documenting design

The design history looks forwards and backwards.

New posts show the team where the service is going. They highlight what will be researched or built next, and can draw attention to important design points.

Old posts tell us how we got here. With them we can:

* discover what we did and why
* re-evaluate decisions
* see how a feature has changed
* see how things tested in research
* give context to new team members
* see what didn’t work
* see things we tried but didn’t build
* see how things looked at significant milestones

By making the design history open we can share our designs and our reasoning behind them. Whether that’s with colleagues, other teams, the rest of government, or with service assessors. [Make things open, it makes things better](https://www.gov.uk/guidance/government-design-principles#make-things-open-it-makes-things-better).

## How our design history began

In 2018 we were struggling to document our designs.

We started by trying to upload screenshots to Confluence, but this was cumbersome. We tried versioning our prototypes, to keep old designs around on different URLs. But designs changed too frequently. The prototype could show us what, but not why. If designs were going to be documented it needed to be quick and easy or it would be seen as a chore.

We used the GOV.UK prototype kit to make the first design history and hosted it on Heroku. The kit made it easy to create pages, and we began by making posts for each feature, showing a list of screenshots alongside descriptions of what had changed and why.

With a page for each design we now had a public URL to share with the team, to put into Trello cards or pull requests. [An example of an early post](https://bat-design-history.netlify.app/find-teacher-training/private-beta/user-research-apr-12).

When it was clear these posts were useful we made creating them easier. We automated the process with scripts for taking screenshots, saving images to the right place, and generating a page with all the markup needed. Now we could focus on writing about the design rather than the task of recording it.

By using the GOV.UK design system for our posts we had an easy to use, readable and familiar platform for our design history. It felt right from the start.

As we researched our designs we recorded findings alongside screenshots, we began to link to research playbacks and video clips on Lookback (a tool for remote user research) – creating a direct link between a design and the source of a new finding.

Over time we could begin to show the old and new designs, and callout specific changes. We were evidencing and recording our design decisions as we went, and the design history entries began to tell our story.

## Recording milestones and more

As the history grew, we used it to record more – like snapshots of the service at important milestones, such as [at the launch of a public beta](https://bat-design-history.netlify.app/find-teacher-training/live-launch) or [our first publishing tool](https://bat-design-history.netlify.app/publish-teacher-training-courses/check-ucas-data).

When prototyping a complex feature its logic can become hidden in code or only visible for particular user journeys. Where these rules and scenarios emerged, the design history became the natural place to describe them, and this made it easier for developers to build those features.

For example, in Apply for teacher training we ask candidates for their nationality. [Our design history post describes asking for multiple nationalities](https://bat-design-history.netlify.app/apply-for-teacher-training/nationality/). It explains how candidates can record multiple nationalities, what happens when 2 or 3 are recorded, how the design works without JavaScript and how we made it accessible.

Occasionally we needed to print designs – to show in research, to put on the wall or for group sessions. A post typically shows screenshots for a complete feature or user journey, printing those screenshots would be ideal. So we added print styles, meaning that each post can be printed, one screenshot (and title) per page.

We documented [the information we ask users for](http://bat-design-history.netlify.app/apply-for-teacher-training/question-protocol-for-pilot), [the emails we send users](https://bat-design-history.netlify.app/publish-teacher-training-courses/email-new-cycle) and [the processes our team followed](https://bat-design-history.netlify.app/publish-teacher-training-courses/what-we-did-for-rollover).

## Making contributions easier

When the design team grew, more people needed to contribute.

To make it easy for anyone to contribute we switched from the prototype kit to Eleventy. Eleventy is a static site generator used for blogs – not unlike a design history, while the prototype kit is for prototyping government services.

Eleventy gave our posts structure – a title, description and date. It also meant we switched our posts from HTML (which was difficult for some team members to write), to markdown, which everyone understood.

Now designers, developers, content designers and user researchers are all contributing to the design history.

With Eleventy we added new features to make the design history easier to use: pagination, sorting of posts by date or category, related links and importantly – given the new volume of posts – search.

As of July 2020, we’re documenting 5 products with over 200 posts.

## What next

We want more teams to keep an open and public design history. When we’re designing something new, and we’re looking to see how other service teams have solved that problem, we want to read about their designs, to evaluate them and to build on them.

We’ve created [GOV.UK Design History](https://design-history.herokuapp.com/) to enable this – a repository with all the features, scripts and guides for getting started.

We’ll continue to add the features we need – like ways of documenting user needs and design hypotheses, integration with other tools like Trello, and more – but we hope that by opening up this tool to share with other teams, we’ll see new developments and ideas from outside our team.
