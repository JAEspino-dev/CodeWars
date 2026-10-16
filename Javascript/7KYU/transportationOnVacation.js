function rentalCarCost(d) {
  
  let adjustment = 0
  let totalCarRentalCost = 0
  // 3 or more days, you get $20 off
  if ( d >= 3 && d < 7){
    adjustment = -20
    } 
  // 7 or more days, you get $50 off
  else if (d >= 7){
    adjustment = -50
  }
  // day rate = $40
  totalCarRentalCost = d * 40 + adjustment
  return totalCarRentalCost
}