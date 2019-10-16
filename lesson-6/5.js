/**
 * Задача 5.
 *
 * Вручную создать имплементацию функции `reduce`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенные методы Array.prototype.reduce и Array.prototype.reduceRight использовать запрещено;
 * - Третий аргумент функции reduce является не обязательным;
 * - Если третий аргумент передан — он станет начальным значением аккумулятора;
 * - Если третий аргумент не передан — начальным значением аккумулятора станет первый элемент обрабатываемого массива.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция;
 */

const array = [0, 1, 2, 3, 4, 5];
const INITIAL_ACCUMULATOR = 6;

// Решение
const reduce = function (array, callback, accumulator = array[0]) {
    if (!Array.isArray(array)) {
        throw new Error('First argument is not an array!');
    }

    if (typeof callback !== 'function') {
        throw new Error('Callback is not a function!');
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] === void 0 ) {
            continue;
        }

        accumulator = callback(accumulator, array[i], i, array);
    }

    return accumulator;
};

const result = reduce(
    array,
    (accumulator, element, index, arrayRef) => {
        console.log(`${index}:`, accumulator, element, arrayRef);

        return accumulator + element;
    },
    INITIAL_ACCUMULATOR
);

console.log(result); // 21

exports.reduce = reduce;
