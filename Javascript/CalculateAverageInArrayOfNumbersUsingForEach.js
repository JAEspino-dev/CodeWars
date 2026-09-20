function findAverage(array) {
  // your code here
  let total = 0
  let numberOfElementsInArray = array.length
  if(numberOfElementsInArray === 0){
    return 0
  } else {
  array.forEach(numberInArray => {
    total += numberInArray
  }) 
  total = total/numberOfElementsInArray
  return total;
    }
}