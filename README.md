# Design history for GOV.UK services

An example design history from the Becoming a teacher team:
https://bat-design-history.netlify.com

## Purpose of this project

This repository makes it easy to:

* screenshot your designs
* create pages of screenshots to document designs
* document designs using the [GOV.UK Design System](https://design-system.service.gov.uk/)
* print pages of designs
* make designs shareable and linkable

## Installation

- Clone this repository to a folder on your computer
- Open Terminal
- In Terminal, change the path to the repository
- Type `npm install` to install the dependencies

## Working locally

Most of the time you'll be adding new posts. If you're just doing this then:

- Open Terminal
- Type `npm start`

This will automatically restart the application with your changes to markdown and images applied.

If you're making changes to the CSS or JavaScript then:

- Open Terminal
- Type `npm run watch`

This will automatically restart the application with changes to the CSS, JavaScript and markdown applied.

## Technical notes

The design history uses the [GOV.UK Design System](https://design-system.service.gov.uk) and the [Eleventy](https://www.11ty.io) static site generator.
