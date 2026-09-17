function removeChar(str){
//parameters: take in a string of either 3+ characters, or 2 or less characters
//returns: if more than 2 characters, remove first and last character. If 2 or less characters return an empty string
//examples: 'ad' returns '', 'adb' returns 'd'
//psuedocode: determine length of string, based on that either slice the string or return empty string

  if(str.length < 2){
    str = ''
    return str
  }
  let slicedStr = str.slice(1,-1)
  return slicedStr
};