function positiveSum(arr) {
  let positiveTotal = 0
  for (let number of arr) { // for each number element in array, do this
    if (number > 0) { 
      positiveTotal += number // add to positiveTotal value
    }
  }
  return positiveTotal //  return total of positive numbers
}
