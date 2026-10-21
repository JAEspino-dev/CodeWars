var countSheep = function (num){
//parameters: non negative integer
//returns: a string, with sheep counted
//examples:"1 sheep...2 sheep...3 sheep..."
//psuedocode:check if 0, if 0 return empty string. If more than 0, build new string
  
  console.log(num)
  if(num === 0){
    return ''
  }
  let stringToBuild = ''
  for(let i = 1; i <= num; i++){
    stringToBuild += `${i} sheep...`
    console.log(stringToBuild)
  }
  return stringToBuild
}