function squareSum(numbers){
  // parameters: take in an array of numbers
  // returns: each number in array squared, added together
  // Example: [1, 2, 2] would equal 9
  // psuedocode:
  // use map to transform array, square each element by multiplying by itself
  // use reduce to accumulate all values into 1 value
  console.log(numbers)
  let total = 0
  let newNumbersArray = numbers.map(num => num = num * num)
  console.log(newNumbersArray)
//   for (let num of newNumbersArray) {
//     total += num
//   }
//   return total
  
//   with reduce function:
  total = newNumbersArray.reduce((total,num) => {
    return total += num
  }, 0)
  return total

}