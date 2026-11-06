//parameters: array of numbers
//returns: return sum of the numbers
//examples: [ 1, 3, 4] returns 8
//psuedocode: need something that reduces values of the array

function sum (numbers) {
  let total = numbers.reduce((accumulator,num) => {
    return accumulator +=num
  },0)
  return total
}