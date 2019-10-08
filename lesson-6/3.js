/**
 * Задача 3.
 *
 * Вручную создать имплементацию функции `every`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Заметки:
 * - Встроенный метод Array.prototype.every использовать запрещено.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 *
 * Заметки:
 * - Второй аргумент встроенного метода every (thisArg) имплементировать не нужно.
 */

const array = [ 1, 2, 3, 4, 5, 6];

// Решение
const every = function (array, callback) {
    if (!Array.isArray(array)) {
        throw Error('First argument is not an array!');
    }

    if (typeof callback !== 'function') {
        throw Error('Callback is not a function!');
    }

    for (let i = 0; i < array.length; i++) {
        if(array[i] === void 0) {
            continue;
        }

        if(!callback(array[i], i, array)){
            return false;
        }
    }

    return true;
};

const result = every(array, (element, index, arrayRef) => {
    console.log(`${index}:`, element, arrayRef);

    return typeof element === 'number';
});


console.log(result); // true

exports.every = every;
