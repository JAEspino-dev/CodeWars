//parameters: array of numbers
//returns: function that returns min in position 0 of array,  function that returns max in position 0 of array, 
//examples: [1,30,0] array[0] of min function = 0, array[0] of min function = 30
//psuedocode: sort array ascending and descending, grab and return element in position 0

var min = function(list){
    list.sort((a,b) => a - b)
  console.log(list)
    return list[0];
}

var max = function(list){
    list.sort((a,b) => b - a)
  console.log(list)
    return list[0];
}