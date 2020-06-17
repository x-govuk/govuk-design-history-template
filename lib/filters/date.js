const { DateTime } = require('luxon')

/**
 * Format a data using tokens
 *
 * @param {String} dateObject Date to convert
 * @param {String} format Token-based formatting.
 * @example {{ date | date("OPTIONAL FORMAT STRING") }}
 *
 */
module.exports = (dateObject, format) => {
  // Convert dateObj to Luxon DateTime object, using UTC
  // See: https://11ty.dev/docs/dates/#dates-off-by-one-day
  let date = DateTime.fromJSDate(dateObject, {
    locale: 'en-GB',
    zone: 'utc'
  })

  // Format date if formatting tokens provided
  // See: https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens
  if (format) {
    date = DateTime.fromISO(date).toFormat(format)
  }

  return date
}
