function solution(str){
  let newString = ''
  for (let i = str.length - 1; i >= 0; i--){ // looping backwards, the i-- is decerement operator
    newString += str[i]; //Take the character at index i and add it to newString.
  }
  return newString
}