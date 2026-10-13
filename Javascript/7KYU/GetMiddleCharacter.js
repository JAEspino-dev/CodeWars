function getMiddle(s) {
  // given non empty string, if odd number of characters give back middle number
  // if even number of characters, give back 2 middle characters
  // determine if odd or even number of characters
  let sArray = Array.from(s)
  console.log(sArray)
  // logic, give back middle or pair of middle characters
  if(sArray.length % 2 == 0){
    while (sArray.length > 2){
      sArray.shift()
      sArray.pop()
      }
    return s = `${sArray[0]}${sArray[1]}`
    console.log(sArray)
    } else if (sArray.length % 2 !== 0){
      let positionOfMiddle = Math.floor(sArray.length/2)
      console.log(sArray[positionOfMiddle])
      return s = `${sArray[positionOfMiddle]}`
    }
}