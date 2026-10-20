function isPalindrome(x) {
  // parameters: a word as a string
  // returns: Yes or no if the word is a palindrome
  // examples: kayak should return "is a palindrome"
  // psuedocode:
  // turn word into array
  x = x.toLowerCase()
  console.log(x)
  let wordArray = Array.from(x)
  console.log(wordArray)
  // reverse array
  reversedWordArray = wordArray.reverse()
  console.log(reversedWordArray)
  // turn array back to word
  let reversedWord = reversedWordArray.join('')
  console.log(reversedWord)
  // evaluate if newWord === word
  return reversedWord === x ? true : false
}