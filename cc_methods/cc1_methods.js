

/**
 * Get average array
 * @param {number[]} [arr =[]] Array for get average
 */
function getAvgArray( arr = [] ) {
    // TODO: Average
    console.time('Average execution time:');
    const avg = (arr.reduce( ( pValue, cVualue ) => pValue + cVualue) / arr.length);
    console.timeEnd('Average execution time:');
    console.log('Array average is: ', avg  );
}

/**
 * Get unique values from an array
 * @param {number[]} [arr =[]] Array for evaluete
 */
function getUniqueValues( arr = [] ){
    // TODO: Unique values as array
    console.time('UniqueValues execution time:');
    const uniqueValues = [];
    arr.forEach( (value) => (!uniqueValues.includes(value)) 
                            ? uniqueValues.push(value) 
                            : uniqueValues.splice(uniqueValues.indexOf(value), 1) );
    console.timeEnd('UniqueValues execution time:');
    console.log('Unique values are: ',  uniqueValues);
}

/**
 * Add 1 to each element in the array.
 * @param {number[]} [arr =[]] Array for evaluete
 */
function getNewArray(arr = []) {
    // TODO: Sum 1 to each element
    console.time('Add 1 to each element execution time:');
    const newArrWithSum = arr.map( (element) => element + 1 );
    console.timeEnd('Add 1 to each element execution time:');
    console.log('New Array with sum: ', newArrWithSum);
}

/**
 * Get odd elements in the array.
 * @param {number[]} [arr =[]] Array for evaluete
 */
function getOddElements(arr = []){
    // TODO: Get odd elements
    console.time('Odd Elements execution time:');
    const oddElements = arr.filter( (val) => val%2 != 0 )
                            .filter( (val, index, arr) => arr.indexOf(val) == index );
    console.timeEnd('Odd Elements execution time:');
    console.log('Odd elements: ', oddElements);
}

module.exports = {
    getAvgArray,
    getNewArray,
    getOddElements,
    getUniqueValues
}