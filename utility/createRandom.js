function draw(array) {
  let index = Math.floor(Math.random() * array.length)
  return array[index]
}

function createRandom(targetLength) {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'

  let collection = []
  collection = collection.concat(lowerCaseLetters.split(''))
  collection = collection.concat(upperCaseLetters.split(''))
  collection = collection.concat(numbers.split(''))

  let outcome = ''
  for (let i = 0; i < targetLength; i++) {
    outcome += draw(collection)
  }
  
  return outcome
}

module.exports = createRandom