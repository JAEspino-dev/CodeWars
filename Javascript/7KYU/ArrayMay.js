let number=function(array){
  if (array.length < 1){
    return array
  }
  // take in an array of strings, need to add the element index + 1 to the string
  let newArray = array.map((element, index) => {
    return index + 1 + ': ' + element // use a lot of concatenation here
  })
  // return new array with format ['1: a', '2: b']
  return newArray
}