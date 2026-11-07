//parameters: h,m,s
//returns: time in milliseconds
//examples: 0 1 1 = 61000 ms
//psuedocode: need to convert all 3 values into ms, then add


function past(h, m, s){
  let hrToMs = h * 3600000
  let mToMs = m * 60000
  let sToMs = s * 1000
  let total = hrToMs + mToMs + sToMs
  return total
}