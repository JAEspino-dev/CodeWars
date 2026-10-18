function betterThanAverage(classPoints, yourPoints) {
  console.log(classPoints, yourPoints)
  // parameters = array of other students scores in classPoints, my score is in yourPoints
  // examples: yourPoints = 5 avg of classPoints = 10, this should give a false
  // returns = need to give a true if yourPoints is better than average or false if yourPoints not better than average
  let total = classPoints.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  console.log(total)
  let average = total/classPoints.length
  console.log(average)
  if (yourPoints > average){
    return true
  } else {
    return false
  }
}