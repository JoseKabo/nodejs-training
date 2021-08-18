const { getAvgArray, getUniqueValues, getOddElements, getNewArray } = require("./cc_methods/cc1_methods");

const arr = [1, 3, 2, 1, 4, 5, 2, 5];
const Main = ( arr = []) => {
    if( arr.length <= 0 )
        return;
    
    getAvgArray(arr);
    getUniqueValues(arr);
    getOddElements(arr);
    getNewArray(arr);
}

Main(arr);