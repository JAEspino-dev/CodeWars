//parameters: an array of elements
//returns: a count of the number of elements in the array
//examples: Input: args = [5] would produce:
// Output: 1
//psuedocode: need something that returns length of array

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
    return args.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */