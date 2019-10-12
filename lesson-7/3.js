/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

const debug = require('debug');
const debugLog = debug('createArray');

// Решение
const createArray = (value,numElements) => {
    if(!value || typeof value === 'boolean'){
        throw new Error('First argument should be a number, a string, object or array');
    }

    if(typeof numElements !== 'number'){
        throw new Error(`Second argument "${numElements}" type of a ${typeof numElements}, but should be a number`);
    }

    const array = new Array(numElements);
    return array.fill(value);
};

const result = createArray('x', 5);

debugLog(result); // [ x, x, x, x, x ]

exports.createArray = createArray;
