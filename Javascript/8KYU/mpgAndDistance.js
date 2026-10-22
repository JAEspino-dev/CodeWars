const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  //parameters:  dist = 50miles, mpg = 25, fuelleft= 2 
//returns: true
//examples: this should return true given values passed in
//psuedocode:
  if(mpg * fuelLeft >= distanceToPump){
    return true
  } else {
    return false
  }
};