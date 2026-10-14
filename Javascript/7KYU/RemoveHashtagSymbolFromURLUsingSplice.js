function removeUrlAnchor(url){
  
  // empty 
  let positionOfHashtag 
  let newArrayWithoutHashtag
  // take in an string or array, make into array
  url = Array.from(url)
  console.log(url)
  // find the #
  // split the array from the # + 1 and onwards
  
  positionOfHashtag = url.findIndex(element => element === '#')
  console.log(positionOfHashtag)
  
  if(positionOfHashtag !== -1){
    newArrayWithoutHashtag = url.slice(0, positionOfHashtag)
    console.log(newArrayWithoutHashtag)
  } else {
    newArrayWithoutHashtag = url;
  }
  
  // array back to string:
  url = newArrayWithoutHashtag.join('')
  return url
}