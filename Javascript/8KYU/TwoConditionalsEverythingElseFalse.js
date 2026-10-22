function lovefunc(flower1, flower2){
//parameters: 2 flowers, even or odd number of petals
//returns: 1 even flower petal, 1 odd flower petal = in love, otherwise, not in love
//examples: flower1 petals = even && flower 2 petals = odd, return in love. Otherwise return not in love
//psuedocode: 2 conditionals for the 2 possibilities, anything else should yield false
  if(flower1%2 === 0  && flower2%2 !== 0){
    return true
  } else if (flower1%2 !== 0  && flower2%2 === 0){
    return true
  } else {
    return false
  }
}