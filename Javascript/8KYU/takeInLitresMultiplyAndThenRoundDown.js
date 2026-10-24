function litres(time) {
  //parameters: given time in hours
  //returns: return the number of litres
  //examples: 1hr x.5 = .5 litres, rounded down 
  //psuedocode: take in time, multiply by .5 and round down
  let drankLitres = Math.floor(time * .5)
  return drankLitres;
}