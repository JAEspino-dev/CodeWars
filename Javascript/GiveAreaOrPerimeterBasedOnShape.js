const areaOrPerimeter = function(l , w) {
  // Return your answer
  let area = l*w
  let perimeter = 2*l + 2*w
  if(l===w){ // this is a square
    return area
  } else if (l != w){ // this is a rectangle
    return perimeter
  }
};