//parameters: input is list of pairs. ["age, handicap" ] senior must be at least 55 yrs old, handicap greater than 7 
//returns: if member is 55 >= age and handicap greater than 7, member is a senior
//examples: ["55,7"] = ["Senior"]
//psuedocode: if age >= 55 and handicap >= 7, map to senior, otherwise, map to open

function openOrSenior(data){
  console.log(data)
  return data.map( set => {
    let age = set[0]
    let handicap = set[1]
    if(age >= 55 && handicap > 7){
      return set = 'Senior'
    } else {
      return set = 'Open'
    }
  })
  console.log(data)
}