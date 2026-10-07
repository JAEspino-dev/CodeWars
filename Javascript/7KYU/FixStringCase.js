function solve(s){
    //..
  s = Array.from(s)
  console.log(s)
  lowerCaseCounter = 0
  upperCaseCounter = 0
  s.forEach(letter =>{
           if (letter === letter.toLowerCase()){
             lowerCaseCounter += 1
             console.log('This element/string has a lowercase letter')
           } else if (letter === letter.toUpperCase()){
             upperCaseCounter += 1
             console.log('This element/string has an uppercase letter')
          } 
      })
  console.log(lowerCaseCounter)
  console.log(upperCaseCounter)
    s = s.join('')
    console.log(s)
  if(lowerCaseCounter >= upperCaseCounter){
    return s.toLowerCase()
  } 
  else if (lowerCaseCounter < upperCaseCounter){
    return s.toUpperCase()
  }
}