//parameters: take in 2 promises    
//returns: a new promise, with the sum of the 2 numbers
//examples: 
//psuedocode:

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    try {
        const value1 = await promise1
        const value2 = await promise2
        return value1 + value2
    }
    catch(error){
        console.log(error)
    }
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */