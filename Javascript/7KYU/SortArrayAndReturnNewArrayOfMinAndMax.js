function minMax(arr){

  // parameters: possibly unordered array
  // returns: need to return min and max value of array. If array is 1 element long, that 1 value is both min and max
  // example: [1,2,6,4] should return [1,6]
  // psuedocode: need to order the array from smallest to largest value. Then, I'm going to pull the first value and last value and add it to a new array. 
  console.log(arr)
  // order the array so it's in ascending order:
  arr.sort((a,b) => a - b)
  // get the first and last values:
  let firstPosition = arr[0]
  let lastPosition = arr[arr.length - 1]
  // return new array with min and max values
  let minAndMaxArray = [firstPosition, lastPosition]
  return minAndMaxArray
}