const months = [
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
  'December'
]

function since(created_at) {
  d = new Date(created_at)
  return `${months[d.getMonth()]} ${d.getFullYear()}`
}
