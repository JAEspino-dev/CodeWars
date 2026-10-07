function findAverage(array) {
  // your code here
  let total = 0
  let numberOfElementsInArray = array.length
  if(numberOfElementsInArray === 0){
    return 0 // this is what problem said to do
  } else { // if array not empty, then find the average
  array.forEach(numberInArray => {
    total += numberInArray
  }) 
  total = total/numberOfElementsInArray
  return total;
    }
}