//parameters: take in a non negative integer
//returns: return the non negative integer with all digits in descending order
//examples: 23521 becomes 53221
//psuedocode: split the intger into array, sort, then join array 


function descendingOrder(n){
  if(n <= 11){
    return n
  }
  if(n > 11 ){
  let myNumberArray = String(n)
  console.log(myNumberArray) 
  let updatedString = Array.from(myNumberArray)
  console.log(updatedString)
  updatedString.sort((a,b) => b - a)
  console.log(updatedString)
  let newString = updatedString.join('')
  console.log(newString)
  return Number(newString)
  }
}