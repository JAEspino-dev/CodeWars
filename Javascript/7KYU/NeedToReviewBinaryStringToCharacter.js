const binaryArrayToNumber = arr => {
// parameters: given array of ones and zeroes
  // returns: translate the binary that the array represents into the actual number
  // example = [0,0,0,1] = 1
  // psuedocode = concatenate the array into a string, compare to a table of binary values and what they correspond to. Return the number that ties to the binary string. 
  console.log(arr)
  let binaryString = arr.join('') // I want no separator in the returned string so I need ''
  console.log(binaryString)
  
  let character = parseInt(binaryString, 2); // JavaScript knows how to convert binary strings into numbers using https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
  console.log(character)
  return character
};