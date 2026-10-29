function sortArray(array) {
  // parameters: array of numbers, made up of odd and even numbers
  // returns: even number position in array not changed, odd numbers ordered, in between even numbers
  // examples: [8,2,4,3,6,] = [8,2,4,3,6]
  // psuedocode: take array
  console.log(array)
  // filter out odd number
  let oddArray = array.filter(element => {
    return element % 2 !== 0
  })
  console.log(oddArray)
  // order number using sort
  oddArray.sort((a,b) => a - b)
  console.log(oddArray)
  // map: add odd numbers to where the element is odd in the original array 
  let position = 0
  let newArray = array.map(element => {
    if(element % 2 !== 0){
      element = oddArray [position]
      position ++
    }
    return element
  })
  console.log(newArray)
  return newArray
}