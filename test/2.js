const array1 = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];

function isFirstParamArr(array1) {
    console.log(array1[0])
    if (!Array.isArray(array1[0])) {
        throw new Error('The first parameter is not an array.');
    }
}

const collect = function(array1) {
    isFirstParamArr(array1);
    // isAllParamArrOrNumber(array1);

    return array1.reduce(function(item, toFlat) {
        return item.concat(Array.isArray(toFlat) ? collect(toFlat) : toFlat);
    }, []);
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const result = collect(array1).reduce(reducer);
console.log(result);