const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TOD0
  if(mpg * fuelLeft >= distanceToPump){
    return true
  } else {
    return false
  }
};