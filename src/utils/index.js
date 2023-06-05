function sumDataNumbers(object) {
  let sum = 0

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      sum += object[key]
    }
  }

  return sum
}

function formatDate(dateString) {
    let date = dateString.split('-')
    let year = date[0]
    let month = date[1]
    let day = date[2]
  
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
