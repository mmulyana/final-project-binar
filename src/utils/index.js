import airports from './airports'

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

function getMonthFromDate(dateString) {
  if (!dateString) return
  const date = dateString.split('-')[1]
  const month = parseInt(date)
  const monthName = months[month - 1]

  return monthName
}

function convertToDateString(dateString) {
  const date = new Date(dateString)

  const year = date.getFullYear()
  const month = ('0' + (date.getMonth() + 1)).slice(-2)
  const day = ('0' + date.getDate()).slice(-2)

  return `${year}-${month}-${day}`
}

function getDiffBetweenMonth(date1, date2) {
  if (!date1 || !date2) return
  const part1 = date1.split('-')[1]
  const part2 = date2.split('-')[1]

  return part2 > part1 ? 1 : 0
}

function getCityByIata(iata) {
  if (!iata) return
  const airport = airports.filter(
    (airport) => airport.iata_code.toLowerCase() === iata.toLowerCase()
  )
  return airport[0].city
}

function convertDateTicket(type, dateString) {
  if (!dateString) return
  const date = new Date(dateString)
  const options = { weekday: 'long', day: 'numeric', month: 'long' }

  return date.toLocaleDateString(type, options)
}

function formatTimestamp(timestamp) {
  let date = new Date(timestamp)
  let formattedDate = date.toLocaleString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: '2-digit',
  })
  return formattedDate
}

function getTimeByTimestamp(timestamp) {
  let date = new Date(timestamp)
  let hours = date.getHours().toString().padStart(2, '0')
  let minutes = date.getMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes}`
}

function removeRedundantCities(data) {
  let cityCounts = {}
  let filteredData = []

  for (let i = 0; i < data.length; i++) {
    let city = data[i].flight.arrival.city
    if (!cityCounts.hasOwnProperty(city)) {
      cityCounts[city] = 1
      filteredData.push(data[i])
    } else {
      cityCounts[city]++
    }
  }

  for (let i = 0; i < filteredData.length; i++) {
    var city = filteredData[i].flight.arrival.city
    filteredData[i].total_transaction = String(cityCounts[city])
  }

  return filteredData
}

function filterByDepartureTime(data, time) {
  return data.filter((entry) => entry.departure_time === time)
}

function filterByDepartureBetweenTime(data, startTime, endTime) {
  return data.filter((entry) => {
    const departureTime = entry.departure_time
    return departureTime >= startTime && departureTime <= endTime
  })
}

function getAirlineActives(data) {
  return data.reduce((result, entry) => {
    if (entry.isActive === true) {
      result.push(entry.value)
    }
    return result
  }, [])
}

function filterByAirline(data, airlines) {
  return data.filter((entry) => {
    const airline = removeSpaces(entry.airline.toLowerCase())
    return airlines.includes(airline)
  })
}

function removeSpaces(str) {
  return str.replace(/\s/g, '')
}

export {
  filterByAirline,
  getAirlineActives,
  sumDataNumbers,
  formatDate,
  changeToRupiah,
  hideEmail,
  convertToHoursMinutes,
  parseJwt,
  getMonthFromDate,
  convertToDateString,
  getDiffBetweenMonth,
  getCityByIata,
  convertDateTicket,
  formatTimestamp,
  getTimeByTimestamp,
  removeRedundantCities,
  filterByDepartureTime,
  filterByDepartureBetweenTime,
}
