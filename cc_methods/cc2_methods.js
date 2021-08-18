const { arrGenerator } = require('./helpers');

const addToArray = (arr = [] ) => {
    //TODO: Add 1 to each element
    console.time('Add method execution time: ');
    arr.forEach( (value, index) => arr[index] = value + 1 );
    console.timeEnd('Add method execution time: ');
    console.log('New array', arr);
}

const getUniqueValues = (arr = []) => {
    //TODO: Get unique values;
    console.time('Unique method execution: ');
    const uniqueValues = [];
    arr.forEach( (value) => (!uniqueValues.includes(value))
                                ? uniqueValues.push(value) 
                                : uniqueValues.splice(uniqueValues.indexOf(value), 1) );
    
    console.timeEnd('Unique method execution: ');
    console.log('Unique values: ', uniqueValues);
}

const concatArrays = (arr = []) => {
    //TODO: Concat 5 numbers between 2 and 6;
    console.time('Concat execution time: ');
    const concat = arr.concat(arrGenerator(5));
    console.timeEnd('Concat execution time: ');
    console.log('Concat array: ', concat);
}

const getEvenNumber = (arr = []) => {
    //TODO: Get even numbers from array;
    console.time('Even Numbers execution time: ');
    const evenNumbers = arr.filter( (value) => value%2 === 0)
                            .filter( (value, index, array) => array.indexOf(value) === index );
    console.timeEnd('Even Numbers execution time: ');
    console.log('Even Numbers: ', evenNumbers);
}

const getAverageArray = (arr = [] ) => {
    console.time('Average Array execution time: ');
    const avg = arr.reduce( (previousValue, currentValue) => previousValue + currentValue) / arr.length;
    console.timeEnd('Average Array execution time: ');
    console.log('Average: ', avg);
}

//TODO: If average < 10, add 20



module.exports = {
    addToArray,
    concatArrays,
    getEvenNumber,
    getAverageArray,
    getUniqueValues

}