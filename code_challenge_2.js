const { addToArray, getUniqueValues, concatArrays, getEvenNumber, getAverageArray } = require('./cc_methods/cc2_methods');

const arr = [1, 3, 2, 1, 4, 5, 2, 5];

const finalResult = (arr = []) => {
    if(arr.length <= 0)
        return;

    addToArray(arr);
    console.log('============================');
    getUniqueValues(arr);
    console.log('============================');
    concatArrays(arr);
    console.log('============================');
    getEvenNumber(arr);
    console.log('============================');
    getAverageArray(arr);
    console.log('============================');
}



console.time('Main execution time: ');
finalResult(arr);
console.timeEnd('Main execution time: ');