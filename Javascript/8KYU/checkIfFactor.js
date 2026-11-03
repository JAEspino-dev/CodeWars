//parameters: take in a number base, and check if another number factor is a factor of base
//returns: true if factor, false if not factor
//examples: base = 6, is 2 a factor? returns true
//psuedocode: 6/4 = 1.5, which has a remainder so not a factor, should return false
// whereas, 6/3 = 2, so no decimal and therefore no remainder. This should return true


function checkForFactor (base, factor) {
  if (base%factor === 0){
    return true
  } else{
    return false
  }
}