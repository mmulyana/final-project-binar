import Cookies from "js-cookie"

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

function changeToRupiah(number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  })
    .format(number)
    .slice(0, -3)
}

function hideEmail(email) {
  const atIndex = email.indexOf('@') // Find the index of the '@' symbol

  if (atIndex > 1) {
    const firstChar = email[0] // Extract the first character
    const hiddenPart = '*'.repeat(atIndex - 1) // Replace remaining characters with '*'
    const domain = email.substring(atIndex) // Extract the domain part

    return `${firstChar}${hiddenPart}${domain}`
  }

  // Return the original email if it doesn't meet the condition
  return email
}

function convertToHoursMinutes(minutes) {
  let hours = Math.floor(minutes / 60)
  let remainingMinutes = minutes % 60

  return `${hours}h ${remainingMinutes}m`
}

function parseJwt(jwt) {
  let base64Url = jwt.split('.')[1]
  let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  let jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join('')
  )

  return JSON.parse(jsonPayload)
}

export {
  sumDataNumbers,
  formatDate,
  changeToRupiah,
  hideEmail,
  convertToHoursMinutes,
  parseJwt,
}
