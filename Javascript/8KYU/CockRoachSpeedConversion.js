function cockroachSpeed(s) {
  //Good Luck!
//parameters: takes in speed s of cockroach as km/hr
//returns: converted speed of s km/hr to cm/sec
//examples: 1.08 km/hr becomes 30 cm/sec
//psuedocode: there are 0.036 km/h in cm/s. 
  // multiply s by conversion factor, then round down
  console.log(s)
  let convertedSpeed = Math.floor(s * 27.7778)
  return convertedSpeed
}