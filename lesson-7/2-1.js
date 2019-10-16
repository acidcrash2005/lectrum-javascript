/**
 * Задача 2.
 *
 * Напишите функцию `collect`, которая будет принимать массив в качестве аргумента.
 * Возвращаемое значение функции — число.
 * Массив, который передаётся в аргументе может быть одноуровневым или многоуровневым.
 * Число, которое возвращает функция должно быть суммой всех элементов
 * на всех уровнях всех вложенных массивов.
 *
 * Если при проходе всех уровней не было найдено ни одного числа,
 * то функция должна возвращать число 0.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива reduce.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - Если на каком-то уровне было найдено не число и не массив.
 */

/* Импортируем модуль debug. */
const debug = require('debug');
const debugLog = debug('collect');

// Решение
// Это решение конечно просто жесть! flat прям магия!
const { printErrorNumber} = require('./validateStringArray');

const collect = array => {
    if (!Array.isArray(array)) {
        throw new Error('Argument is not an array!');
    }

    const flatArray = array.reduce((acc, value) => {
        if (Array.isArray(value)) {
            return acc.concat(collect(value))
        }

        return acc.concat(value)
    }, []);


    if(!flatArray.length){
        return 0;
    }

    const result = flatArray.reduce((acc, current) => {
        if (typeof current !== 'number') {
            printErrorNumber(current, flatArray);
        }

        return acc + current;
    });

    return result;
};

const array1 = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
debugLog(array1, collect(array1)); // 12

const array2 = [[[[[1, 2]]]]];
debugLog(array2, collect(array2)); // 3

const array3 = [[[[[1, 2]]], 2], 1];
debugLog(array3, collect(array3)); // 6

const array4 = [[[[[]]]]];
debugLog(array4, collect(array4)); // 0

const array5 = [[[[[], 3]]]];
debugLog(array5, collect(array5)); // 3

exports.collect = collect;
