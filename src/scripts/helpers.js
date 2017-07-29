export function addTime(minutes1, minutes2) {
  const hours = Math.floor((minutes1 + minutes2) / 60)
  const minutesLeft = (minutes1 + minutes2) % 60
  const message = `${hours} hours ${minutesLeft} minutes`

  return message
}