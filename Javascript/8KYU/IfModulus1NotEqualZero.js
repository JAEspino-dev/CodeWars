function testEven(n) {
//parameters: number is n
//returns: returns true or false, if number is decemial, it's not even
//examples: 10.01 = not even, so false
//psuedocode: take in a number, have 3 conditionals. If decimal, false. If even, true. Anything else, false. 
  if (n % 1 !== 0){
    return false
  }
  if (n % 2 === 0){
    return true
  } else {
    return false
  }
}