const arr = [1, 3, 2, 1, 4, 5, 2, 5];
const result = ( arr = []) => {
    if( arr.length <= 0 )
        return;
    
    // TODO: Average
    console.time('Average execution time:');
    const avg = (arr.reduce( ( pValue, cVualue ) => pValue + cVualue) / arr.length);
    console.timeEnd('Average execution time:');
    console.log('Array average is: ', avg  );
    
    // TODO: Unique values as array
    console.time('UniqueValues execution time:');
    const uniqueValues = [];
    arr.forEach( (value) => (!uniqueValues.includes(value)) ? uniqueValues.push(value) : uniqueValues.splice(uniqueValues.indexOf(value), 1) );
    console.timeEnd('UniqueValues execution time:');
    console.log('Unique values are: ',  uniqueValues);
    
    // TODO: Sum 1 to each element
    console.time('Add 1 to each element execution time:');
    const newArrWithSum = arr.map( (element) => element + 1 );
    console.timeEnd('Add 1 to each element execution time:');
    console.log('New Array with sum: ', newArrWithSum);
    
    // TODO: Get odd elements
    console.time('Odd Elements execution time:');
    const oddElements = arr.filter( (val, index, arr) => arr.indexOf(index) != val );
    console.timeEnd('Odd Elements execution time:');
    console.log('Odd elements: ', oddElements);
}

result(arr);