function sumDataNumbers(object) {
  let sum = 0

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      sum += object[key]
    }
  }

  return sum
}

function formatDate(date) {
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()

  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  let monthName = months[parseInt(month) - 1]

  let formattedDate = `${monthName} ${day}, ${year}`
  return formattedDate
}

export { sumDataNumbers, formatDate }
