function filter_list(l) {

  // if there are any strings in the array, you need to filter them out
  console.log(l)
  console.log(typeof 0)
  let filteredArray = l.filter(element => {
    // check datatype of element in array, if not string, return that and have it added to new array
    return typeof element !== 'string'
  })
  console.log(filteredArray)
  
  // Return a new array with the strings filtered out 
  
  return filteredArray 
  
}