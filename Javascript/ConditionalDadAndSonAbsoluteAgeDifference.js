function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  
  let ageDadNeedsToBeToBe2xAgeOfSon = 0
  if (dadYearsOld === sonYearsOld * 2){ // if dad age is 2x son age, then you're good
    return 0
  } else if (dadYearsOld !== sonYearsOld * 2){ // if dad age is not 2x son age, then we need to find age difference
    ageDadNeedsToBeToBe2xAgeOfSon = sonYearsOld * 2 // age dad would need to be to be 2x son age
    let requiredYearsForDadToAge = dadYearsOld - ageDadNeedsToBeToBe2xAgeOfSon // this gives us the age difference, either positive or negative
    if(requiredYearsForDadToAge < 0){ // takes the age difference if negative and makes it positive, giving us the absolute difference
      requiredYearsForDadToAge *= -1
    }
    return requiredYearsForDadToAge 
  }
}