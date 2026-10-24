function reverseWords(str) {
//parameters: take in a string
//returns: Reverse each word in the string, not the whole string in reverse
//examples: 'dog' becomes 'god'
//psuedocode: take in string, split then convert to array, reverse each word in array, join back as string
  let splitString = str.split(' ')
  console.log(splitString)
  let newArrayWordsInReverse = splitString.map(word => word.split('').reverse().join('')) // need to review
  console.log(newArrayWordsInReverse)
  let newString = newArrayWordsInReverse.join(' ')
  console.log(newString)
  return newString
  
  
//   console.log(str)
//   let newArray = Array.from(str)
//   console.log(newArray)
//   newArray.reverse()
//   console.log(newArray)
//   let newString = newArray.join('')
//   console.log(newString)
//   return newString
}