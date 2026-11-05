//parameters: take in a number, describing number of petals torn off
//returns: returns a message
//examples: 1 petal torn off = "I love you"
//psuedocode: take number of torn petals, determine remainder, based on remainder give message

function howMuchILoveYou(nbPetals) {
  let remainder = nbPetals % 6;

  if (remainder === 0) {
    return 'not at all';
  } else if (remainder === 1) {
    return 'I love you';
  } else if (remainder === 2) {
    return 'a little';
  } else if (remainder === 3) {
    return 'a lot';
  } else if (remainder === 4) {
    return 'passionately';
  } else if (remainder === 5) {
    return 'madly';
  }
}
