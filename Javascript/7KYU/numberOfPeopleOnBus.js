//parameters: array of integer pairs, [...[num of people that get on, num of people that get off]
//returns: number of people still on the bus after the last bus stop(after the last array pair)
//examples: [[2,0],[1,2]] last stop has 1 person after last stop
//psuedocode: need something that stores all values of first pair in 1 variable, another that stores all people that get off bus in second varaible, then subract toatl on from total off to determin how many people if any are left on. 

var number = function(busStops){
  console.log(busStops)
  let totalOntoBus = 0
  let totalOffBus = 0
  busStops.forEach(element => {
    console.log(element[0])
    console.log(totalOntoBus)
    totalOntoBus += element[0]
    console.log(totalOntoBus)
    totalOffBus += element[1]
    return totalOntoBus, totalOffBus
  })
  return totalOntoBus - totalOffBus
}