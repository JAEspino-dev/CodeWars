//parameters: take in a string with exclamation marks
//returns: string has exclamation marks removed
//examples: 'Hello!' becomes 'Hello'
//psuedocode: split string into array, use filter to build a new array without exclamation marks, join array into new string


function removeExclamationMarks(s) {
  console.log(s)
  let newArray = Array.from(s)
  console.log(newArray)
  let updatedArray = newArray.filter(element => {
    if (element !== '!'){
      return true
    }
  })
  console.log(updatedArray)
  let newString = updatedArray.join('')
  return newString
}