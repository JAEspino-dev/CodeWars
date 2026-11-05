//parameters: take in a string 
//returns: string with each character doubled
//examples: string = ssttrriinngg
//psuedocode: take in a string, split into array, map into new array where each string is repeated, join the elements, return array

function doubleChar(str) {
  console.log(str)
  let newArray = str.split('')
  console.log(newArray)
  let updatedArray = newArray.map(element => {
    return element.repeat(2)
  })
  console.log(updatedArray)
  let newString = updatedArray.join('')
  return newString
}